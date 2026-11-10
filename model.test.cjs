const test=require('node:test'),assert=require('node:assert/strict');
const C=require('./model.js');
test('overlap protects halls and Zoom, but allows adjacent slots',()=>{
 const a={id:'1',date:'2026-11-15',start:'09:00',end:'11:00',resource:'قاعة 1',status:'scheduled'};
 assert.equal(C.conflict([a],{...a,id:'2',start:'10:00'}),true);
 assert.equal(C.conflict([a],{...a,id:'2',start:'11:00',end:'12:00'}),false);
 assert.equal(C.conflict([{...a,resource:'TEAMS'}],{...a,id:'2',resource:'TEAMS'}),false);
 assert.equal(C.conflict([{...a,status:'cancelled'}],{...a,id:'2'}),false);
});
test('capacity counts held and confirmed seats; duplicates rejected',()=>{
 const e={id:'e',capacity:1,fee:50,status:'open'};
 const rs=[{id:'r',eventId:'e',personId:'p',status:'confirmed'}];
 assert.equal(C.registrationDecision(e,rs,'q'),'waitlist');
 assert.throws(()=>C.registrationDecision(e,rs,'p'),/مسجل/);
 assert.equal(C.registrationDecision(e,[],'q'),'pending');
});
test('certificates require execution approval and attendance policy',()=>{
 const e={status:'review',sessions:2,exam:false};const r={status:'confirmed',attendance:[true,true]};
 assert.equal(C.eligible(e,r,{threshold:80}),false);
 assert.equal(C.eligible({...e,status:'completed'},r,{threshold:80}),true);
 assert.equal(C.eligible({...e,status:'completed'}, {...r,attendance:[true,false]},{threshold:80}),false);
});
test('money uses integer fils and CSV escapes spreadsheet formula input',()=>{
 assert.equal(C.fils(12.345),12345);
 assert.equal(C.csvCell('=1+1'), '"\'=1+1"');
});
