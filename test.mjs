import test from 'node:test';
import assert from 'node:assert/strict';
import {spawn} from 'node:child_process';
import {mkdtempSync,rmSync,readFileSync,writeFileSync} from 'node:fs';
import vm from 'node:vm';
import {tmpdir} from 'node:os';
import {join} from 'node:path';
import {once} from 'node:events';
import {readiness,application,roundAt} from './questions.mjs';
test('TBL completo, isolamento de acesso, pontuação e retomada',async()=>{
 const dir=mkdtempSync(join(import.meta.dirname,'test-run-'));let child,origin;
 async function launch(){child=spawn(process.execPath,['server.mjs'],{cwd:import.meta.dirname,env:{...process.env,PORT:'3197',HOST_PASSWORD:'test-password',DATA_DIR:dir},stdio:['ignore','pipe','pipe']});let out='';await new Promise((resolve,reject)=>{const timer=setTimeout(()=>reject(Error('Servidor não iniciou')),10000);child.stdout.on('data',v=>{out+=v;if(out.includes('http://localhost:')){origin='http://127.0.0.1:3197';clearTimeout(timer);resolve();}});child.once('error',reject);child.once('exit',code=>{clearTimeout(timer);reject(Error('Saída inesperada '+code));});});}
 async function stop(){if(child&&child.exitCode===null){child.kill();await once(child,'exit');}}
 async function req(path,b,token,status=200){const r=await fetch(origin+path,{method:b?'POST':'GET',headers:{...(b?{'Content-Type':'application/json'}:{}),...(token?{Authorization:'Bearer '+token}:{})},body:b?JSON.stringify(b):undefined});assert.equal(r.status,status,await r.clone().text());return r.headers.get('content-type').includes('json')?r.json():r.text();}
 try{
 await launch();assert.deepEqual(await req('/health'),{ok:true});
 await req('/api/create',{password:'wrong'},null,403);
 const host=await req('/api/create',{password:'test-password',teams:2,duration:20});const base='/api/room/'+host.code;const ctl=(action,extra={})=>req(base+'/control',{action,...extra},host.token);
 const lobby=await req(base+'/state',null,host.token);assert.equal(lobby.status,'lobby');assert.equal(lobby.current,null);assert.equal(lobby.players.length,0);
 assert.deepEqual(lobby.teams,[]);
 const a=await req(base+'/join',{name:'Alice',character:'Mario'}),b=await req(base+'/join',{name:'Bia',character:'Peach'}),c=await req(base+'/join',{name:'Caio',character:'Luigi'});
 const studentLobby=await req(base+'/state',null,a.token);assert.equal(studentLobby.current,null);assert.equal(studentLobby.me.captain,false);assert.equal(studentLobby.me.team,null);assert.equal(studentLobby.players[0].score,0);
 await req(base+'/control',{action:'set-teams',count:2},host.token,400);
 await ctl('slide',{slide:1});assert.equal((await req(base+'/state',null,a.token)).slide,1);
 await req(base+'/state',null,null,401);await req(base+'/control',{action:'start'},a.token,403);await req(base+'/export',null,a.token,403);await req('/questions.mjs',null,null,404);await req('/data/rooms.json',null,null,404);
 await ctl('start');await req(base+'/join',{name:'Late',team:'Equipe 1'},null,400);
 for(let i=0;i<26;i++){
 const rd=roundAt(i);let before=await req(base+'/state',null,a.token);assert.equal(before.index,i);assert.equal(before.current.answer,undefined);assert.equal(before.current.explanation,undefined);assert.equal(before.submissions,undefined);assert(!JSON.stringify(before).includes(host.token));
 if(i<10){for(const p of [a,b,c])await req(base+'/answer',{index:i,choice:rd.q.answer},p.token);await req(base+'/answer',{index:i,choice:rd.q.answer},a.token,400);}
 else{
 await req(base+'/answer',{index:i,choice:rd.q.answer},b.token,403);
 if(i===10){const wrong=(rd.q.answer+1)%4;await req(base+'/answer',{index:i,choice:wrong},a.token);await req(base+'/answer',{index:i,choice:wrong},a.token,400);}
 await req(base+'/answer',{index:i,choice:rd.q.answer,reason:'Mecanismo discutido'},a.token);await req(base+'/answer',{index:i,choice:rd.q.answer},c.token);
 }
 await req(base+'/answer',{index:i-1,choice:0},a.token,400);
 const teacher=await req(base+'/state',null,host.token);assert.equal(teacher.received,i<10?3:2);assert.equal(teacher.current.answer,rd.q.answer);
 if(i===2){await stop();await launch();const restored=await req(base+'/state',null,a.token);assert.equal(restored.index,2);assert.equal(restored.mine.done,true);}
 await ctl('lock');await req(base+'/answer',{index:i,choice:0},a.token,400);
 if(i===0){await req(base+'/control',{action:'reveal'},host.token,400);assert.equal((await req(base+'/state',null,a.token)).players[0].score,0);await ctl('extend');await ctl('lock');}
 if(i>=10){await ctl('reveal');const reveal=await req(base+'/state',null,a.token);assert.equal(reveal.current.answer,rd.q.answer);assert.equal(reveal.mine.correct,true);}
 await ctl('next');
 if(i===9){
   const grouping=await req(base+'/state',null,host.token);assert.equal(grouping.status,'grouping');assert.equal(grouping.current,null);assert.equal(grouping.players[0].score,1000);assert.equal(grouping.players[0].team,null);
   assert.equal((await req(base+'/state',null,a.token)).me.team,null);
   await req(base+'/answer',{index:9,choice:0},a.token,400);
   await req(base+'/control',{action:'start-team'},host.token,400);
   await req(base+'/control',{action:'auto-teams',count:2},a.token,403);
   await req(base+'/control',{action:'set-teams',count:1},host.token,400);
   const automatic=await ctl('auto-teams',{count:2});assert.deepEqual(automatic.teams.map(t=>t.members).sort(),[1,2]);assert(automatic.players.every(p=>p.team));
   const empty=await ctl('set-teams',{count:2});assert(empty.players.every(p=>p.team===null));assert(empty.players.every(p=>!p.captain));
   await ctl('assign-team',{id:a.id,team:'Equipe 1'});await ctl('assign-team',{id:b.id,team:'Equipe 1'});
   await req(base+'/control',{action:'start-team'},host.token,400);
   await req(base+'/control',{action:'assign-team',id:c.id,team:'Equipe 999'},host.token,400);
   const assigned=await ctl('assign-team',{id:c.id,team:'Equipe 2'});assert.equal(assigned.players.find(p=>p.id===a.id).captain,true);
   await ctl('captain',{id:b.id});await ctl('assign-team',{id:b.id,team:'Equipe 2'});const repaired=await req(base+'/state',null,host.token);assert.equal(repaired.players.find(p=>p.id===a.id).captain,true);
   await ctl('assign-team',{id:b.id,team:'Equipe 1'});await stop();await launch();assert.equal((await req(base+'/state',null,a.token)).status,'grouping');
   await ctl('start-team');await req(base+'/control',{action:'assign-team',id:b.id,team:'Equipe 2'},host.token,400);
 }
 }
 const final=await req(base+'/state',null,host.token);assert.equal(final.status,'finished');assert.equal(final.players.find(p=>p.id===a.id).score,3150);assert.equal(final.players.find(p=>p.id===b.id).score,3150);assert.equal(final.players.find(p=>p.id===c.id).score,3200);assert.equal(final.teams[0].score,2150);assert.equal(final.teams[1].score,2200);
 const csv=await req(base+'/export',null,host.token);assert(csv.includes('Alice'));assert(csv.includes('3150'));assert(csv.includes('Mecanismo discutido'));
 assert.equal(final.ranking[0].name,'Caio');assert.equal(final.ranking[0].team,'Equipe 2');assert.equal(final.ranking[0].individualScore,1000);assert.equal(final.ranking[0].collectiveScore,2200);assert.equal(final.ranking[0].champion,true);assert.equal(final.ranking[1].rank,2);assert.equal(final.ranking[2].rank,2);assert.equal(final.ranking.filter(p=>p.champion).length,1);
 const studentFinal=await req(base+'/state',null,a.token);assert.deepEqual(studentFinal.ranking,final.ranking);assert(csv.includes('"posicao_total";"campeao"'));assert(csv.includes('"Caio";"Luigi";"Equipe 2";"1000";"2200";"3200";"1";"Sim"'));
 // Retoma uma sala encerrada com um empate na liderança para conferir título compartilhado.
 await stop();const fixtureFile=join(dir,'rooms.json');const fixture=JSON.parse(readFileSync(fixtureFile,'utf8'));fixture[host.code].answers[0][c.id].choices=[(readiness[0].answer+1)%4];writeFileSync(fixtureFile,JSON.stringify(fixture));await launch();
 const tied=await req(base+'/state',null,host.token);assert.deepEqual(tied.ranking.filter(p=>p.champion).map(p=>p.name),['Alice','Bia']);assert.equal(tied.ranking[0].score,3150);assert.equal(tied.ranking[2].rank,3);assert.equal(tied.ranking[2].name,'Caio');
 await ctl('delete');await req(base+'/state',null,a.token,404);
 }finally{await stop();rmSync(dir,{recursive:true,force:true});}
});
test('Banco de questões íntegro e mesmas questões no iRAT/tRAT',()=>{assert.equal(readiness.length,10);assert.equal(application.length,6);for(let i=0;i<10;i++)assert.equal(roundAt(i).q,roundAt(i+10).q);for(const q of [...readiness,...application]){assert.equal(q.options.length,4);assert(q.answer>=0&&q.answer<4);assert(q.explanation.length>50);assert(q.source);}});
test('Telas distinguem entrada individual, formação das equipes e campeão pelo nome',()=>{
 const elements=new Map();const el=id=>{if(!elements.has(id))elements.set(id,{innerHTML:'',addEventListener(){},classList:{contains(){return false},toggle(){},add(){}}});return elements.get(id);};
 const context={document:{querySelector:el,querySelectorAll:()=>[],addEventListener(){},body:{classList:{contains(){return false}}}},location:{search:'',origin:'http://test'},localStorage:{getItem(){return null}},URLSearchParams,setInterval(){},setTimeout(){},window:{scrollTo(){}},scrollY:0,Date};
 vm.createContext(context);vm.runInContext(readFileSync(join(import.meta.dirname,'public/app.js'),'utf8'),context);
 vm.runInContext("info={code:'123456',title:'Aula',locked:false,teams:[]};joinScreen()",context);const joinHtml=el('#app').innerHTML;assert(joinHtml.includes('Seu nome'));assert(!joinHtml.includes('name="team"'));assert(joinHtml.includes('depois da rodada individual'));
 const players=[{id:'a',name:'Ana Silva',character:'Mario',team:'Equipe 1',score:3200,individualScore:1000,champion:true,rank:1},{id:'b',name:'Bruno Souza',character:'Luigi',team:'Equipe 2',score:3100,individualScore:900,champion:false,rank:2}];
 context.fixture={status:'finished',players,ranking:players};vm.runInContext('state=fixture;result=individualPodium()',context);assert(context.result.includes('Aluno campeão da corrida'));assert(context.result.includes('Ana Silva'));assert(context.result.includes('Equipe 1'));assert(context.result.includes('1000 individuais + 2200 coletivos'));
 context.fixture.ranking[1]={...players[1],score:3200,champion:true,rank:1};vm.runInContext('result=individualPodium()',context);assert(context.result.includes('Campeões da corrida'));assert(context.result.includes('Bruno Souza'));
});
