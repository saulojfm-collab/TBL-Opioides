import http from 'node:http';
import {readFileSync,writeFileSync,mkdirSync,renameSync,existsSync} from 'node:fs';
import {join,dirname} from 'node:path';
import {fileURLToPath} from 'node:url';
import {randomBytes,timingSafeEqual} from 'node:crypto';
import {roundAt,deck,sources} from './questions.mjs';
const here=dirname(fileURLToPath(import.meta.url));
const dataDir=process.env.DATA_DIR||join(here,'data'); mkdirSync(dataDir,{recursive:true});
const file=join(dataDir,'rooms.json');
const rooms=existsSync(file)?JSON.parse(readFileSync(file,'utf8')):{};
const secret=()=>randomBytes(24).toString('hex');
const same=(a,b)=>typeof a==='string'&&typeof b==='string'&&a.length===b.length&&timingSafeEqual(Buffer.from(a),Buffer.from(b));
const save=()=>{writeFileSync(file+'.tmp',JSON.stringify(rooms));renameSync(file+'.tmp',file);};
const err=(message,status=400)=>{throw Object.assign(new Error(message),{status});};
const clean=(v,n=30)=>typeof v==='string'?v.trim().replace(/[\x00-\x1f]/g,'').slice(0,n):'';
const chars=['Mario','Luigi','Peach','Toad','Yoshi','Bowser'];
const rates=new Map();
function limit(key,max){const now=Date.now(),r=rates.get(key); if(!r||now-r.time>60000){rates.set(key,{time:now,n:1});return;}if(++r.n>max)err('Muitas tentativas. Aguarde um minuto.',429);}
setInterval(()=>{const now=Date.now();for(const [k,r] of rates)if(now-r.time>60000)rates.delete(k);},60000).unref();
function closeExpired(r){if(r.status==='open'&&Date.now()>=r.deadline){r.status='locked';save();}}
function points(record,phase,q){if(!record)return 0;const k=record.choices.indexOf(q.answer);return k<0?0:phase==='individual'?100:phase==='application'?200:[100,50,25,0][k];}
function score(r,p,publicOnly=false){let total=0;for(let i=0;i<=r.index;i++){if(publicOnly&&!(r.revealed||[]).includes(i))continue;const rd=roundAt(i);if(!rd)continue;const a=r.answers[i]||{};const key=rd.phase==='individual'?p.id:p.team;total+=points(a[key],rd.phase,rd.q);}return total;}
function teamScore(r,t,publicOnly=false){let total=0;for(let i=10;i<=r.index;i++){if(publicOnly&&!r.revealed.includes(i))continue;const rd=roundAt(i);if(rd)total+=points((r.answers[i]||{})[t],rd.phase,rd.q);}return total;}
function view(r,role,player){
 closeExpired(r);const rd=roundAt(r.index),a=r.answers[r.index]||{},revealed=r.status==='revealed'||r.status==='finished';
 const current=rd?{phase:rd.phase,number:rd.number,total:rd.total,id:rd.q.id,topic:rd.q.topic,stem:rd.q.stem,options:rd.q.options}:null;
 if(current&&(role==='host'||revealed)){Object.assign(current,{answer:rd.q.answer,explanation:rd.q.explanation,source:sources[rd.q.source],locator:rd.q.locator});}
 const players=r.players.map(p=>({id:p.id,name:p.name,team:p.team,character:p.character,captain:r.captains[p.team]===p.id,score:score(r,p,role!=='host'),individualScore:Object.entries(r.answers).reduce((s,[i,ans])=>Number(i)<10&&(!role||role==='host'||r.revealed.includes(Number(i)))?s+points(ans[p.id],'individual',roundAt(Number(i)).q):s,0),answered:!!a[rd?.phase==='individual'?p.id:p.team],online:Date.now()-p.seen<10000}));
 for(const p of players)p.publicScore=score(r,r.players.find(x=>x.id===p.id),true);
 const teams=r.teams.map(name=>({name,score:teamScore(r,name,role!=='host'),members:players.filter(p=>p.team===name).length,captain:r.captains[name]}));
 const key=player&&(rd?.phase==='individual'?player.id:player.team),mine=key?a[key]:null;
 const response={code:r.code,title:r.title,status:r.status,index:r.index,slide:r.slide,deck,teams,players,current,deadline:r.deadline,serverTime:Date.now(),duration:r.duration,lockedJoin:r.lockedJoin,revealed:r.revealed,me:player?{id:player.id,name:player.name,team:player.team,captain:r.captains[player.team]===player.id}:null};
 if(mine){response.mine={choices:mine.choices,done:rd.phase!=='team'||mine.choices.includes(rd.q.answer)||mine.choices.length===4};if(rd.phase==='team'||revealed)response.mine.correct=mine.choices.includes(rd.q.answer);if(revealed)response.mine.points=points(mine,rd.phase,rd.q);}
 if(role==='host'||revealed){response.distribution=[0,0,0,0];for(const rec of Object.values(a))response.distribution[rec.choices.at(-1)]++;response.submissions=Object.entries(a).map(([id,v])=>({id,choices:v.choices,correct:v.choices.includes(rd.q.answer),points:points(v,rd.phase,rd.q),reason:v.reason||''}));}
 response.received=Object.keys(a).length;response.expected=rd?.phase==='individual'?r.players.length:r.teams.filter(t=>r.players.some(p=>p.team===t)).length;
 return response;
}
async function body(req){let s='';for await(const c of req){s+=c;if(s.length>16000)err('Solicitação muito grande.',413);}try{return JSON.parse(s||'{}');}catch{err('Dados inválidos.');}}
const json=(res,obj,status=200)=>{res.writeHead(status,{'Content-Type':'application/json; charset=utf-8','Cache-Control':'no-store'});res.end(JSON.stringify(obj));};
const server=http.createServer(async(req,res)=>{try{
 res.setHeader('X-Content-Type-Options','nosniff');res.setHeader('Referrer-Policy','same-origin');res.setHeader('X-Frame-Options','DENY');
 res.setHeader('Content-Security-Policy',"default-src 'self'; style-src 'self' 'unsafe-inline'; script-src 'self'; connect-src 'self'; img-src 'self' data:; frame-ancestors 'none'");
 const url=new URL(req.url,'http://localhost');const path=url.pathname;
 if(path==='/health')return json(res,{ok:true});
 if(path==='/api/create'&&req.method==='POST'){
 limit('create:'+(req.socket.remoteAddress||''),20);const b=await body(req);
 if(!process.env.HOST_PASSWORD)err('Configure HOST_PASSWORD no servidor para habilitar o professor.',503);
 if(!same(b.password,process.env.HOST_PASSWORD))err('Senha do professor incorreta.',403);
 let code;do{code=String(Math.floor(100000+Math.random()*900000));}while(rooms[code]);
 const teams=Array.from({length:Math.max(2,Math.min(12,Number(b.teams)||4))},(_,i)=>`Equipe ${i+1}`);
 const r={code,title:clean(b.title,80)||'Corrida dos receptores',token:secret(),teams,captains:{},players:[],answers:{},revealed:[],status:'lobby',index:-1,slide:0,duration:Math.max(20,Math.min(600,Number(b.duration)||90)),deadline:0,lockedJoin:false,created:Date.now()};
 rooms[code]=r;save();return json(res,{code,token:r.token});
 }
 if(path.startsWith('/api/room/')){
 const parts=path.split('/'),r=rooms[parts[3]],action=parts[4]||'state';if(!r)err('Sala não encontrada. Confira o código.',404);closeExpired(r);
 const token=(req.headers.authorization||'').replace(/^Bearer /,'');const host=same(token,r.token);const p=r.players.find(p=>same(token,p.token));
 if(action==='join'&&req.method==='POST'){
 limit('join:'+r.code+req.socket.remoteAddress,150);const b=await body(req);if(r.lockedJoin||r.index>=0)err('A entrada está encerrada. Peça ao professor para reabrir a sala.');if(r.players.length>=200)err('Sala cheia (200 participantes).');
 const name=clean(b.name,24);if(!name)err('Digite um apelido.');if(r.players.some(p=>p.name.toLowerCase()===name.toLowerCase()))err('Esse apelido já está em uso. Escolha outro.');if(!r.teams.includes(b.team))err('Equipe inválida.');
 const player={id:randomBytes(8).toString('hex'),token:secret(),name,team:b.team,character:chars.includes(b.character)?b.character:'Mario',seen:Date.now()};r.players.push(player);if(!r.captains[b.team])r.captains[b.team]=player.id;save();return json(res,{token:player.token,id:player.id});
 }
 if(action==='info'&&req.method==='GET')return json(res,{code:r.code,title:r.title,teams:r.teams,locked:r.lockedJoin||r.index>=0,characters:chars});
 if(!host&&!p)err('Acesso expirado ou inválido. Entre na sala novamente.',401);if(p)p.seen=Date.now();
 if(action==='state'&&req.method==='GET')return json(res,view(r,host?'host':'student',p));
 if(action==='answer'&&req.method==='POST'){
 if(!p)err('Somente alunos podem responder.',403);const b=await body(req),rd=roundAt(r.index);
 if(r.status!=='open'||!rd||Date.now()>=r.deadline)err('O tempo desta questão terminou.');if(b.index!==r.index)err('Esta resposta pertence a outra questão.');
 if(!Number.isInteger(b.choice)||b.choice<0||b.choice>3)err('Alternativa inválida.');
 if(rd.phase!=='individual'&&r.captains[p.team]!==p.id)err('Somente o capitão envia o consenso da equipe.',403);
 const key=rd.phase==='individual'?p.id:p.team,a=r.answers[r.index]??={},rec=a[key]??={choices:[]};
 if(rec.choices.length&&(rd.phase!=='team'||rec.choices.includes(rd.q.answer)||rec.choices.length===4))err('Resposta já registrada.');
 if(rec.choices.includes(b.choice))err('Esta alternativa já foi tentada.');rec.choices.push(b.choice);rec.reason=clean(b.reason,500);rec.at=Date.now();save();return json(res,{ok:true,state:view(r,'student',p)});
 }
 if(action==='control'&&req.method==='POST'){
 if(!host)err('Apenas o professor pode controlar a sala.',403);const b=await body(req);
 if(b.action==='slide'&&r.status==='lobby')r.slide=Math.max(0,Math.min(deck.length-1,Number(b.slide)||0));
 else if(b.action==='start'&&r.index===-1){if(!r.players.length)err('Aguarde pelo menos um aluno.');r.index=0;r.status='open';r.deadline=Date.now()+r.duration*1000;r.lockedJoin=true;}
 else if(b.action==='lock'&&r.status==='open')r.status='locked';
 else if(b.action==='reveal'&&r.status==='locked'&&r.index>=10){r.status='revealed';r.revealed.push(r.index);if(r.index<20)r.revealed.push(r.index-10);}
 else if(b.action==='next'&&((r.index<10&&r.status==='locked')||(r.index>=10&&r.status==='revealed'))){if(r.index===25){r.status='finished';}else{r.index++;r.status='open';r.deadline=Date.now()+r.duration*1000;}}
 else if(b.action==='extend'&&['open','locked'].includes(r.status)){r.deadline=Math.max(r.deadline,Date.now())+30000;r.status='open';}
 else if(b.action==='captain'){const target=r.players.find(p=>p.id===b.id);if(!target)err('Aluno não encontrado.');r.captains[target.team]=target.id;}
 else if(b.action==='delete'){delete rooms[r.code];save();return json(res,{deleted:true});}
 else err('Esta ação não está disponível agora.');save();return json(res,view(r,'host'));
 }
 if(action==='export'&&req.method==='GET'){
 if(!host)err('Apenas o professor pode exportar.',403);
 const cell=v=>'"'+String(v??'').replace(/^[=+@\-\t\r]/,"'$&").replaceAll('"','""')+'"';
 const rows=[['apelido','personagem','equipe','individual','equipe_tRAT_aplicacao','total'],...r.players.map(p=>[p.name,p.character,p.team,Object.entries(r.answers).reduce((s,[i,a])=>Number(i)<10?s+points(a[p.id],'individual',roundAt(Number(i)).q):s,0),teamScore(r,p.team),score(r,p)])];
 rows.push([],['rodada','fase','questao','respondente','tentativas','pontos','justificativa']);for(const [i,a] of Object.entries(r.answers)){const rd=roundAt(+i);for(const [key,v]of Object.entries(a))rows.push([+i+1,rd.phase,rd.q.id,r.players.find(p=>p.id===key)?.name||key,v.choices.map(c=>'ABCD'[c]).join(' > '),points(v,rd.phase,rd.q),v.reason]);}
 res.writeHead(200,{'Content-Type':'text/csv; charset=utf-8','Content-Disposition':`attachment; filename="resultado-${r.code}.csv"`});return res.end('\uFEFF'+rows.map(row=>row.map(cell).join(';')).join('\r\n'));
 }
 err('Rota não encontrada.',404);
 }
 if(req.method!=='GET')err('Método não permitido.',405);
 const staticFiles={'/':'index.html','/app.js':'app.js','/style.css':'style.css'};const f=staticFiles[path];if(!f)err('Página não encontrada.',404);const mime=f.endsWith('.js')?'text/javascript':f.endsWith('.css')?'text/css':'text/html';res.writeHead(200,{'Content-Type':mime+'; charset=utf-8','Cache-Control':'no-cache'});res.end(readFileSync(join(here,'public',f)));
 }catch(e){if(!res.headersSent)json(res,{error:e.status?e.message:'Falha interna no servidor.'},e.status||500);else res.end();if(!e.status)console.error(e);}});
server.listen(Number(process.env.PORT)||3000,'0.0.0.0',()=>console.log(`Opioide Race: http://localhost:${server.address().port}`));
