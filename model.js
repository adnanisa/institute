(function(root){
'use strict';
const C={
 conflict(events,event){return events.some(x=>x.id!==event.id&&x.status!=='cancelled'&&x.date===event.date&&x.resource===event.resource&&/^(قاعة|ZOOM)/.test(x.resource)&&x.start<event.end&&event.start<x.end);},
 registrationDecision(event,regs,personId){
  if(event.status!=='open')throw Error('التسجيل غير متاح لهذه الفعالية.');
  const active=regs.filter(r=>r.eventId===event.id&&!['cancelled','rejected'].includes(r.status));
  if(active.some(r=>r.personId===personId))throw Error('المتدرب مسجل مسبقًا في هذه الفعالية.');
  return active.filter(r=>['pending','confirmed'].includes(r.status)).length>=event.capacity?'waitlist':event.fee>0?'pending':'confirmed';
 },
 attendance(event,r){return Math.round((r.attendance||[]).filter(Boolean).length/Math.max(1,event.sessions)*100);},
 eligible(event,r,policy){return event.status==='completed'&&r.status==='confirmed'&&C.attendance(event,r)>=policy.threshold&&(!event.exam||Number(r.grade)>=policy.passMark);},
 fils(value){return Math.round(Number(value)*1000);},
 csvCell(value){let s=String(value??'');if(/^[\s]*[=+@-]/.test(s))s="'"+s;return '"'+s.replaceAll('"','""')+'"';},
 id(prefix){return prefix+'-'+Date.now().toString(36)+'-'+Math.random().toString(36).slice(2,6);}
};
if(typeof module!=='undefined')module.exports=C;else root.Training=C;
})(typeof window!=='undefined'?window:globalThis);
