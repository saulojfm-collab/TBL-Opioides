export const scoringVersion='speed-v1';
export const maxScore=3840;
export function basePoints(record,phase,q){
 if(!record)return 0;
 const attempt=record.choices.indexOf(q.answer);
 return attempt<0?0:phase==='individual'?100:phase==='application'?200:([100,50,25,0,0][attempt]||0);
}
export function speedBonus(phase,attemptIndex,elapsedMs,durationMs){
 if(attemptIndex!==0||!Number.isFinite(elapsedMs)||!Number.isFinite(durationMs)||durationMs<=0||elapsedMs<0||elapsedMs>=durationMs)return 0;
 const base=phase==='application'?200:100;
 const ratio=elapsedMs/durationMs;
 return Math.round(base*(ratio <= 1/3 ? 0.20 : ratio <= 2/3 ? 0.10 : 0.05));
}
export function result(record,phase,q){
 const base=basePoints(record,phase,q);
 // Pontos já registrados são lidos sem recalcular tempo. Respostas legadas não ganham bônus retroativo.
 const bonus=base>0&&record?.choices[0]===q.answer?Math.max(0,Math.min(phase==='application'?40:20,Number.isInteger(record.speedBonus)?record.speedBonus:0)):0;
 return {basePoints:base,speedBonus:bonus,points:base+bonus};
}
