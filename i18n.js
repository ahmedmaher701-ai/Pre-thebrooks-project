/* PRE Buyer Portal bilingual enhancement. Switch language at top. */
(()=>{
'use strict';
const dict={
"PRE Buyer Portal":"بوابة مشتري PRE","The Brooks":"ذا بروكس",
"Illustrative demo data":"بيانات توضيحية تجريبية",
"Financial amounts, buyers, unit details and percentages are examples only.":"المبالغ والبيانات الشخصية وأرقام الوحدات ونسب الإنجاز أمثلة توضيحية فقط.",
"Your property":"وحدتك العقارية","Club Residence":"كلوب ريزيدنس","Building 5 · Unit B5-204":"مبنى ٥ · وحدة B5-204",
"Active Buyer":"مشتري نشط","Construction Status":"حالة الإنشاءات",
"Finishing works in progress":"أعمال التشطيبات جارية",
"Expected delivery: End of 2026":"التسليم المتوقع: نهاية ٢٠٢٦",
"72% complete":"اكتمل ٧٢٪","(illustrative)":"(توضيحي)","View construction details →":"عرض تفاصيل الإنشاءات ←",
"Next installment · illustrative":"القسط القادم · توضيحي","Due 15 Nov 2026":"الاستحقاق ١٥ نوفمبر ٢٠٢٦",
"Paid to date":"المدفوع حتى الآن","Remaining":"المتبقي","Latest Construction Update":"آخر تحديث للإنشاءات",
"October 2026 progress report":"تقرير تقدم الأعمال أكتوبر ٢٠٢٦",
"Building-specific milestones and delivery forecasts":"مراحل الإنشاء ومواعيد التسليم لكل مبنى",
"View update →":"عرض التحديث ←","Quick Actions":"اختصارات",
"Payment Plan":"جدول الأقساط","Progress":"الإنشاءات","Documents":"المستندات","Support":"الدعم",
"Home":"الرئيسية","Installments":"الأقساط","Profile":"حسابي",
"My Installments":"أقساط وحدتي",
"All financial figures and payment statuses below are illustrative, not actual buyer records.":"جميع المبالغ وحالات السداد المعروضة أمثلة وليست بيانات حقيقية للمشتري.",
"Total contract":"إجمالي قيمة التعاقد","Remaining":"المتبقي","Next due · 15 Nov":"القسط القادم · ١٥ نوفمبر",
"Installment Schedule":"جدول الأقساط",
"INSTALLMENT":"القسط","DUE DATE":"تاريخ الاستحقاق","AMOUNT":"المبلغ","STATUS":"الحالة",
"Installment 5":"القسط الخامس","Installment 6":"القسط السادس","Installment 7":"القسط السابع","Installment 8":"القسط الثامن",
"Maintenance deposit":"وديعة الصيانة","Paid":"مدفوع","Upcoming":"قادم","Planned":"مخطط",
"Download Receipt":"تنزيل الإيصال","Construction Progress":"تقدم الإنشاءات",
"Club Residence · October 2026 update":"كلوب ريزيدنس · تحديث أكتوبر ٢٠٢٦",
"Select a building":"اختر المبنى",
"Building stages and delivery quarters follow PRE Group's October 2026 construction report. No official numerical completion percentage was supplied.":"حالة الأعمال ومواعيد التسليم مأخوذة من تقرير PRE لشهر أكتوبر ٢٠٢٦. لا توجد نسب إنجاز رقمية معتمدة بالتقرير.",
"Construction Timeline":"الجدول الزمني للإنشاءات","Site Photographs":"صور موقع الإنشاءات",
"Site photo 1":"صورة الموقع ١","Site photo 2":"صورة الموقع ٢","Site photo 3":"صورة الموقع ٣",
"Image placeholders: original site photographs can be added from the supplied monthly report.":"صور من تقرير تقدم الأعمال للمشروع.",
"October 2026 Monthly Report":"التقرير الشهري · أكتوبر ٢٠٢٦",
"Full original report to be attached by the portal administrator.":"ملخص التقرير الرسمي متاح بالأسفل، والملف الأصلي يحتاج إلى رفع.",
"Open Documents →":"عرض المستندات ←","Documents & Updates":"المستندات والتحديثات",
"Your files and announcements":"ملفاتك والإعلانات","Latest Monthly Update":"آخر تقرير شهري",
"Construction Progress Updates — Oct 2026":"تحديثات الإنشاءات — أكتوبر ٢٠٢٦",
"Construction photographs, milestones and delivery schedules":"صور الإنشاءات والمراحل ومواعيد التسليم",
"The report PDF must be uploaded to this GitHub repository before the Open PDF link is enabled.":"يمكن عرض ملخص التقرير الآن، بينما يحتاج ملف PDF الأصلي إلى رفع.",
"Profile & Support":"حسابي والدعم","Demo Buyer":"مشتري تجريبي",
"Project: The Brooks":"المشروع: ذا بروكس",
"Buyer ID: BRK-20458":"رقم المشتري: BRK-20458",
"Property: Club Residence · Building 5 · Unit B5-204":"الوحدة: كلوب ريزيدنس · مبنى ٥ · B5-204",
"All buyer identity and property details above are illustrative.":"بيانات المشتري والوحدة أعلاه توضيحية.",
"Contact & Support":"التواصل والدعم",
"PRE Group Hotline:":"الخط الساخن لمجموعة PRE:",
"Customer Excellence:":"خدمة العملاء:",
"Submit Inquiry":"إرسال استفسار",
"Topic":"الموضوع","Payment or installment":"دفعة أو قسط",
"Construction progress":"تقدم الإنشاءات","Other":"أخرى",
"Your message":"رسالتك","Submit demo inquiry":"إرسال استفسار تجريبي",
"This demo does not transmit or store your inquiry. Real requests require authentication and a secure backend.":"هذه النسخة لا ترسل الاستفسارات أو تحفظها. الخدمة الفعلية تحتاج إلى تسجيل دخول وقاعدة بيانات آمنة.",
"All":"الكل","Statements":"كشوف الحساب","Construction":"الإنشاءات",
"Contracts":"العقود","Receipts":"الإيصالات",
"Earth works":"الأعمال الترابية","Skeleton start":"بداية الهيكل","Skeleton end":"انتهاء الهيكل",
"Finishing start":"بداية التشطيب","Start delivering":"بدء التسليم",
"Completed":"مكتمل","In progress":"جارٍ",
"End of 2026":"نهاية ٢٠٢٦","Q1 2027":"الربع الأول ٢٠٢٧","Q2 2027":"الربع الثاني ٢٠٢٧",
"Q3 2027":"الربع الثالث ٢٠٢٧","Q4 2027":"الربع الرابع ٢٠٢٧",
"Q1 2028":"الربع الأول ٢٠٢٨","Q2 2028":"الربع الثاني ٢٠٢٨",
"Skeleton works in progress":"أعمال الهيكل الخرساني جارية",
"Building":"مبنى","Buildings":"مبانٍ","Block":"بلوك","View PDF":"عرض PDF",
"Open PDF":"فتح PDF"
};
const replacePhrases=[
[/Buildings 5 & 6 · Block 2/g,'مبنيان ٥ و٦ · بلوك ٢'],
[/Buildings 1–4, 9–12, 17–20/g,'المباني ١–٤ و٩–١٢ و١٧–٢٠'],
[/Buildings 7–8, 15–16/g,'المباني ٧–٨ و١٥–١٦'],
[/Buildings 13–14 · Block 5/g,'المبنيان ١٣–١٤ · بلوك ٥'],
[/Buildings 21–28, 43–46/g,'المباني ٢١–٢٨ و٤٣–٤٦'],
[/Buildings 47–50/g,'المباني ٤٧–٥٠'],
[/Building status/g,'حالة المبنى'],[/Expected delivery/g,'موعد التسليم المتوقع'],
[/Building ([0-9]+)/g,(_,n)=>'مبنى '+n],[/Buildings ([0-9]+)/g,(_,n)=>'المباني '+n]
];
let lang=localStorage.getItem('pre-lang')==='ar'?'ar':'en';
const originals=new WeakMap();let working=false;
function tr(v){let prefix=(v.match(/^\s*/)||[''])[0],suffix=(v.match(/\s*$/)||[''])[0],s=v.trim();
if(!s)return v;
if(dict[s])return prefix+dict[s]+suffix;
let out=s;for(const [re,to] of replacePhrases)out=out.replace(re,to);
return prefix+out+suffix;
}
function translateNode(node){
if(node.nodeType===3){let p=node.parentElement;if(!p||['SCRIPT','STYLE','NOSCRIPT'].includes(p.tagName))return;
if(!originals.has(node))originals.set(node,node.nodeValue);
const en=originals.get(node),v=lang==='ar'?tr(en):en;if(node.nodeValue!==v)node.nodeValue=v;
}else if(node.nodeType===1){
if(node.matches('input[placeholder],textarea[placeholder]')){if(!node.dataset.originalPlaceholder)node.dataset.originalPlaceholder=node.placeholder;node.placeholder=lang==='ar'?'كيف يمكننا مساعدتك؟':node.dataset.originalPlaceholder;}
for(const child of node.childNodes)translateNode(child);
}}
function apply(){
working=true;document.documentElement.lang=lang;document.documentElement.dir=lang==='ar'?'rtl':'ltr';
document.body.classList.toggle('arabic',lang==='ar');
translateNode(document.body);
const btn=document.getElementById('langSwitch');
if(btn){btn.textContent=lang==='ar'?'English':'العربية';btn.title=lang==='ar'?'Switch to English':'التحويل إلى العربية';}
working=false;
}
function build(){
const style=document.createElement('style');
style.textContent='.header{position:relative;flex-wrap:wrap}.language-toggle{margin-inline-start:auto;background:#fff;border:1px solid #e4d7d6;border-radius:999px;padding:9px 14px;color:#b91f2a;font-weight:750;cursor:pointer;box-shadow:0 3px 12px #0000000a}.arabic{font-family:Tahoma,"Segoe UI",Arial,sans-serif}.arabic .card,.arabic .action,.arabic .form,.arabic .nav{letter-spacing:normal}.arabic .logo{border-right:0;border-left:1px solid #ddd;padding-right:0;padding-left:15px;direction:ltr}.arabic .schedule th{text-align:right}.arabic .timeline{border-left:0;border-right:3px solid #e7dee0;margin-inline:5px;padding-left:0;padding-right:22px}.arabic .step:before{left:auto;right:-29px}.arabic .photos{direction:rtl}.arabic .header h1{font-size:clamp(18px,4vw,24px)}.arabic .value{unicode-bidi:plaintext}.report-link{display:inline-flex;margin-top:10px;text-decoration:none;align-items:center;gap:7px}.source-photo{width:100%;max-height:230px;object-fit:cover;border-radius:15px;display:block}.media-caption{font-size:12px;color:#777;padding-top:6px}.arabic .nav-inner{direction:rtl}@media(max-width:600px){.language-toggle{padding:8px 11px;font-size:13px}.header{gap:9px}}';
document.head.appendChild(style);
const h=document.querySelector('.header');if(h){const b=document.createElement('button');b.id='langSwitch';b.className='language-toggle';b.type='button';b.setAttribute('aria-label','Switch language');b.onclick=()=>{lang=lang==='ar'?'en':'ar';localStorage.setItem('pre-lang',lang);apply()};h.appendChild(b);}
const hero=document.querySelector('#home .hero');
if(hero&&!hero.querySelector('.source-photo')){const pic=document.createElement('div');pic.innerHTML='<img class="source-photo" src="assets/project-gate.jpg" alt="Project gate photographed in the October construction update" style="margin-top:14px;height:170px" loading="lazy"><div class="media-caption" data-i18n="gate">Project gate · October 2026 construction report</div>';hero.appendChild(pic);}
const photos=document.querySelector('#progress .photos');
if(photos){photos.innerHTML='<figure style="margin:0"><img class="source-photo" src="assets/project-gate.jpg" alt="Project gate site photo" loading="lazy"><figcaption class="media-caption">Project gate · Oct 2026</figcaption></figure><figure style="margin:0"><img class="source-photo" src="assets/block5.jpg" alt="Club Residence Block 5 construction photograph" loading="lazy"><figcaption class="media-caption">Block 5 · Oct 2026</figcaption></figure>';}
const progress=document.querySelector('#progress .card:last-child');
if(progress){let l=document.createElement('a');l.className='primary report-link';l.href='construction-report.html';l.textContent='Read October report summary →';progress.appendChild(l);}
const docs=document.querySelector('#docs .card');
if(docs){let l=document.createElement('a');l.className='primary report-link';l.href='construction-report.html';l.textContent='View construction report summary →';docs.appendChild(l);}
}
const observer=new MutationObserver(()=>{if(working)return;observer.disconnect();apply();observer.observe(document.body,{childList:true,subtree:true,characterData:true})});
function init(){build();apply();observer.observe(document.body,{childList:true,subtree:true,characterData:true})}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();