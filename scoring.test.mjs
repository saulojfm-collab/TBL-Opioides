import test from 'node:test';
import assert from 'node:assert/strict';
import {speedBonus,result,maxScore} from './scoring.mjs';
test('Bônus usa tempo original, limites e somente primeira tentativa correta',()=>{
 for(const [ms,bonus] of [[0,20],[30000,20],[30001,10],[60000,10],[60001,5],[89999,5],[90000,0],[120000,0]]){
  assert.equal(speedBonus('individual',0,ms,90000),bonus);
  assert.equal(speedBonus('team',0,ms,90000),bonus);
  assert.equal(speedBonus('application',0,ms,90000),bonus*2);
 }
 for(const args of [['team',1,0,90000],['individual',0,-1,90000],['individual',0,NaN,90000],['individual',0,0,0]])assert.equal(speedBonus(...args),0);
 assert.deepEqual(result({choices:[1],speedBonus:20},'individual',{answer:0}),{basePoints:0,speedBonus:0,points:0});
 assert.deepEqual(result({choices:[1,0],speedBonus:20},'team',{answer:0}),{basePoints:50,speedBonus:0,points:50});
 assert.deepEqual(result({choices:[0]},'individual',{answer:0}),{basePoints:100,speedBonus:0,points:100});
 const saved={choices:[0],speedBonus:10,elapsedMs:45000};assert.equal(result(saved,'individual',{answer:0}).points,110);
 saved.elapsedMs=0;assert.equal(result(saved,'individual',{answer:0}).points,110);
 assert.equal(10*120+10*120+6*240,maxScore);
});
