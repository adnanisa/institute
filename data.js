'use strict';
window.seedTraining=()=>({
 version:1, role:'admin', learner:'u1', policy:{threshold:80,passMark:60},
 programs:[
 {id:'p1',name:'التدريب المستمر للمحامين',year:2026,target:'المحامون',source:'احتياجات تدريبية',type:'مستمر',status:'approved',authority:'إدارة المعهد',description:'تنمية المهارات القانونية والممارسات المهنية من خلال تطبيقات عملية متخصصة.'},
 {id:'p2',name:'التدريب المستمر للقضاة',year:2026,target:'القضاة',source:'طلب من جهة',type:'مستمر',status:'approved',authority:'إدارة المعهد',description:'تطوير الكفايات القضائية وتبادل الخبرات في المسائل القانونية المعاصرة.'},
 {id:'p3',name:'التأهيل القانوني للباحثين',year:2026,target:'الباحثون القانونيون',source:'اقتراح من المعهد',type:'أساسي',status:'pending',authority:'إدارة المعهد',description:'إعداد الباحث القانوني في منهجية البحث وتحليل النصوص وصياغة المذكرات.'},
 {id:'p4',name:'الثقافة القانونية للمجتمع',year:2026,target:'جميع الفئات',source:'اقتراح من المعهد',type:'توعوي',status:'approved',authority:'إدارة المعهد',description:'تعزيز الوعي بالحقوق والواجبات القانونية في بيئة رقمية متجددة.'},
 {id:'p5',name:'برنامج الخبرة الفنية',year:2027,target:'الخبراء الفنيون',source:'طلب من جهة',type:'تعاقدي',status:'draft',authority:'جهة خارجية',description:'تأهيل الخبراء لإعداد التقارير الفنية وعرضها أمام الجهات القضائية.'}
 ],
 trainers:[
 {id:'t1',name:'د. أحمد المنصور',specialty:'القانون المدني والتحكيم',org:'خبير قانوني مستقل',email:'trainer1@example.test',points:6,rate:100,approved:true,iban:'BH** •••• 1024'},
 {id:'t2',name:'د. مريم الهاشمي',specialty:'القانون الجنائي والأدلة الرقمية',org:'جهة أكاديمية افتراضية',email:'trainer2@example.test',points:7,rate:125,approved:true,iban:'BH** •••• 2056'},
 {id:'t3',name:'أ. يوسف النعيمي',specialty:'الصياغة والبحث القانوني',org:'مكتب تدريب افتراضي',email:'trainer3@example.test',points:5,rate:80,approved:true,iban:'BH** •••• 3098'},
 {id:'t4',name:'د. نورة السالم',specialty:'القانون التجاري',org:'جهة أكاديمية افتراضية',email:'trainer4@example.test',points:4,rate:65,approved:false,iban:'غير مسجل'}
 ],
 events:[
 {id:'e1',programId:'p1',title:'مهارات الصياغة القانونية',date:'2026-11-15',start:'09:00',end:'12:00',resource:'قاعة 1',mode:'حضوري',trainerId:'t3',coordinator:'سارة علي',capacity:24,fee:45,hours:3,sessions:1,status:'open',payTrainer:true,exam:false,description:'ورشة تطبيقية لصياغة المذكرات القانونية والعقود بوضوح ودقة.',topics:'بناء المذكرة القانونية، تحرير البنود، تطبيقات ومراجعات عملية',materials:[]},
 {id:'e2',programId:'p2',title:'الأدلة الرقمية في الإثبات الجنائي',date:'2026-11-17',start:'10:00',end:'13:00',resource:'قاعة المؤتمرات',mode:'حضوري',trainerId:'t2',coordinator:'خالد حسن',capacity:30,fee:0,hours:3,sessions:1,status:'open',payTrainer:true,exam:false,description:'قراءة عملية في حجية الدليل الرقمي وضوابط التعامل معه.',topics:'مصادر الدليل الرقمي، سلامة الأدلة، مناقشة حالات عملية',materials:[]},
 {id:'e3',programId:'p4',title:'حماية البيانات في البيئة الرقمية',date:'2026-11-19',start:'16:00',end:'18:00',resource:'ZOOM JLSI',mode:'إلكتروني',trainerId:'t2',coordinator:'سارة علي',capacity:40,fee:0,hours:2,sessions:1,status:'open',payTrainer:false,exam:false,description:'لقاء توعوي حول مبادئ الخصوصية والمسؤولية في التعامل مع البيانات.',topics:'مبادئ حماية البيانات، مواقف عملية، نقاش مفتوح',materials:[]},
 {id:'e4',programId:'p1',title:'الوساطة وتسوية المنازعات',date:'2026-11-08',start:'09:00',end:'13:00',resource:'قاعة 2',mode:'حضوري',trainerId:'t1',coordinator:'خالد حسن',capacity:20,fee:60,hours:4,sessions:2,status:'completed',payTrainer:true,exam:false,description:'مهارات التفاوض وإدارة جلسة الوساطة للوصول إلى حلول متوازنة.',topics:'مراحل الوساطة، مهارات الاستماع، محاكاة عملية',actualHours:4,attendanceFile:'كشف حضور تجريبي.pdf',materials:[]},
 {id:'e5',programId:'p2',title:'تسبيب الأحكام القضائية',date:'2026-11-10',start:'09:00',end:'12:00',resource:'قاعة 3',mode:'حضوري',trainerId:'t1',coordinator:'سارة علي',capacity:16,fee:0,hours:3,sessions:1,status:'review',payTrainer:true,exam:false,description:'تطبيقات في بناء أسباب الحكم وترابط عناصره.',topics:'بناء الأسباب، استخلاص الوقائع، دراسة تطبيقية',actualHours:3,attendanceFile:'كشف حضور تجريبي.pdf',materials:[]},
 {id:'e6',programId:'p1',title:'إدارة العقود التجارية',date:'2026-11-23',start:'09:00',end:'12:00',resource:'قاعة 4',mode:'حضوري',trainerId:'t3',coordinator:'',capacity:18,fee:75,hours:3,sessions:1,status:'scheduled',payTrainer:true,exam:true,description:'صياغة الالتزامات التعاقدية وإدارة المخاطر والتنفيذ.',topics:'بنود العقود، إدارة المخاطر، تكليف تطبيقي',materials:[]}
 ],
 people:[
 {id:'u1',code:'DEMO-001',name:'محمد عبدالرحمن',org:'مكتب محاماة افتراضي',email:'learner1@example.test',gender:'ذكر'},
 {id:'u2',code:'DEMO-002',name:'فاطمة عبدالله',org:'جهة حكومية افتراضية',email:'learner2@example.test',gender:'أنثى'},
 {id:'u3',code:'DEMO-003',name:'علي إبراهيم',org:'جهة قضائية افتراضية',email:'learner3@example.test',gender:'ذكر'},
 {id:'u4',code:'DEMO-004',name:'ريم يوسف',org:'مكتب محاماة افتراضي',email:'learner4@example.test',gender:'أنثى'},
 {id:'u5',code:'DEMO-005',name:'حسن سلمان',org:'جهة أكاديمية افتراضية',email:'learner5@example.test',gender:'ذكر'},
 {id:'u6',code:'DEMO-006',name:'دانة أحمد',org:'جهة حكومية افتراضية',email:'learner6@example.test',gender:'أنثى'}
 ],
 registrations:[
 {id:'r1',eventId:'e1',personId:'u1',status:'pending',payment:'unpaid',amount:45,attendance:[],created:'2026-11-09'},
 {id:'r2',eventId:'e1',personId:'u2',status:'confirmed',payment:'paid',amount:45,attendance:[],created:'2026-11-09'},
 {id:'r3',eventId:'e2',personId:'u3',status:'confirmed',payment:'free',amount:0,attendance:[],created:'2026-11-10'},
 {id:'r4',eventId:'e4',personId:'u1',status:'confirmed',payment:'paid',amount:60,attendance:[true,true],created:'2026-11-02'},
 {id:'r5',eventId:'e4',personId:'u4',status:'confirmed',payment:'paid',amount:60,attendance:[true,true],created:'2026-11-02'},
 {id:'r6',eventId:'e4',personId:'u5',status:'confirmed',payment:'paid',amount:60,attendance:[true,false],created:'2026-11-03'},
 {id:'r7',eventId:'e5',personId:'u3',status:'confirmed',payment:'free',amount:0,attendance:[true],created:'2026-11-06'},
 {id:'r8',eventId:'e3',personId:'u6',status:'confirmed',payment:'free',amount:0,attendance:[],created:'2026-11-10'}
 ],
 tasks:[
 {id:'k1',title:'تجهيز ورشة مهارات الصياغة القانونية',eventId:'e1',owner:'سارة علي',due:'2026-11-15',priority:'مهمة',status:'working',checklist:[true,true,false,false,false]},
 {id:'k2',title:'تأكيد المادة العلمية للأدلة الرقمية',eventId:'e2',owner:'خالد حسن',due:'2026-11-12',priority:'عاجلة',status:'new',checklist:[false,false,false,false,false]},
 {id:'k3',title:'مراجعة خطة التدريب لعام 2027',owner:'سارة علي',due:'2026-11-09',priority:'مهمة',status:'working',checklist:[]},
 {id:'k4',title:'تنسيق لقاء حماية البيانات',eventId:'e3',owner:'سارة علي',due:'2026-11-19',priority:'عادية',status:'new',checklist:[true,false,false,false,false]},
 {id:'k5',title:'اعتماد ملف تسبيب الأحكام القضائية',eventId:'e5',owner:'سارة علي',due:'2026-11-10',priority:'مهمة',status:'review',checklist:[true,true,true,true,true]},
 {id:'k6',title:'تنفيذ ورشة الوساطة وتسوية المنازعات',eventId:'e4',owner:'خالد حسن',due:'2026-11-08',priority:'عادية',status:'done',checklist:[true,true,true,true,true]}
 ],
 evaluations:[{id:'v1',eventId:'e4',personId:'u1',scores:Array(19).fill(5),comment:'التطبيقات العملية مفيدة.'},{id:'v2',eventId:'e4',personId:'u4',scores:Array.from({length:19},(_,i)=>i%3===0?5:4),comment:'اقتراح زيادة وقت المحاكاة.'}],
 certificates:[{id:'JLSI-DEMO-2026-001',registrationId:'r4',issued:'2026-11-09',active:true}],
 payouts:[],tickets:[],audit:[{id:'a1',text:'تم تحميل بيانات العرض التجريبية',date:'2026-11-11T08:00:00.000Z'}]
});
window.evaluationItems=['وضوح أهداف التدريب','ارتباط المحتوى بالاحتياج','تسلسل الموضوعات','حداثة المادة العلمية','التوازن بين النظرية والتطبيق','جودة الأنشطة التدريبية','ملاءمة الوقت للمحتوى','إمكانية تطبيق المكتسبات','إلمام المدرب بالموضوع','وضوح الشرح','تنوع أساليب التدريب','إدارة النقاش','الإجابة عن الأسئلة','تشجيع المشاركة','الالتزام بالوقت','وضوح إجراءات التسجيل','جودة القاعة أو المنصة','توافر المواد التدريبية','جودة التنسيق والدعم'];
