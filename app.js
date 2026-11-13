
const svgNS = 'http://www.w3.org/2000/svg';

const art = {
  acct: `<svg viewBox="0 0 440 118" aria-hidden="true"><rect x="25" y="22" width="123" height="72" rx="9" fill="#e0ece4" stroke="#619780"/><text x="39" y="45" class="art-label">BANK EVENT</text><text x="39" y="67" class="art-text">+$ 240.00</text><circle cx="161" cy="58" r="3" fill="#8ab09d"/><path d="M148 58 H229" fill="none" stroke="#88bfa8" stroke-width="2" stroke-dasharray="5 5"/><rect x="230" y="22" width="185" height="72" rx="9" fill="#d6e6db" stroke="#8acc9d"/><text x="244" y="45" class="art-label">APPROVAL GATE</text><text x="244" y="69" class="art-text">✓ Human verified</text></svg>`,
  video: `<svg viewBox="0 0 440 118" aria-hidden="true"><rect x="12" y="18" width="133" height="82" rx="7" fill="#e6e4f2" stroke="#7c85ca"/><rect x="20" y="27" width="117" height="50" rx="4" fill="#cbd0e7"/><path d="M42 65 l26 -24 l21 15 l16 -12 l21 24" stroke="#bec9ff" stroke-width="2" fill="none"/><text x="23" y="90" class="art-label">VIDEO QUERY</text><path d="M145 59 H183" stroke="#a4b0ed" stroke-dasharray="4 4"/><rect x="182" y="32" width="74" height="52" rx="7" fill="#ebe7f5" stroke="#9aa7f5"/><text x="219" y="53" text-anchor="middle" class="art-label">ROUTE</text><text x="219" y="71" text-anchor="middle" class="art-text">ML</text><path d="M256 59 H286" stroke="#a4b0ed"/><g fill="#e4e6f2" stroke="#a4b6f9"><rect x="290" y="12" width="137" height="27" rx="5"/><rect x="290" y="46" width="137" height="27" rx="5"/><rect x="290" y="80" width="137" height="27" rx="5"/></g><g class="art-label"><text x="305" y="30">FRAME INDEX</text><text x="305" y="64">CLIP INDEX</text><text x="305" y="98">VIDEO INDEX</text></g></svg>`,
  winleak: `<svg viewBox="0 0 440 118" aria-hidden="true"><g transform="translate(58 7)"><rect x="0" y="7" width="140" height="101" rx="5" fill="#e2e9ee" stroke="#8db2be"/><rect x="10" y="17" width="120" height="80" rx="3" fill="#cbdbe5"/><path d="M70 17 V97 M10 58 H130" stroke="#99bcce" stroke-width="4"/><path d="M19 22 L55 51 L27 87 M89 20 L120 48 L93 92" stroke="#6e92ad" stroke-width="3"/></g><g transform="translate(244 7)"><rect width="140" height="101" y="7" rx="5" fill="#f1e1e0" stroke="#bb7a80"/><rect x="10" y="17" width="120" height="80" rx="3" fill="#d5a9ae"/><path d="M70 17 V97 M10 58 H130" stroke="#a9636b" stroke-width="4"/><path d="M28 80 Q47 30 62 65 T109 22" stroke="#ffb876" stroke-width="11" opacity=".85" fill="none"/><path d="M34 80 Q52 41 71 70 T113 29" stroke="#ffdf9f" stroke-width="4" fill="none"/></g><text x="128" y="9" text-anchor="middle" class="art-label">RGB</text><text x="314" y="9" text-anchor="middle" class="art-label">THERMAL</text></svg>`,
  lead: `<svg viewBox="0 0 440 118" aria-hidden="true"><rect x="28" y="29" width="102" height="63" rx="8" stroke="#a088d0" fill="#e9e2ef"/><text x="79" y="52" text-anchor="middle" class="art-label">NEW LEAD</text><text x="79" y="75" text-anchor="middle" class="art-text">INBOUND</text><path d="M130 59 H192" stroke="#9f7ebf" stroke-width="2" stroke-dasharray="5 4"/><circle cx="220" cy="59" r="30" fill="#e6e2f0" stroke="#a998c8"/><text x="220" y="55" text-anchor="middle" class="art-label">SCORE</text><text x="220" y="71" text-anchor="middle" class="art-text">?</text><path d="M250 59 H303 M303 59 V28 H335 M303 59 V91 H335" stroke="#b59ad7" stroke-width="2" fill="none"/><rect x="335" y="14" width="93" height="28" rx="6" fill="#dbece3" stroke="#80b8a5"/><text x="381" y="32" text-anchor="middle" class="art-label">REVIEW</text><rect x="335" y="77" width="93" height="28" rx="6" fill="#f0e5e5" stroke="#cbab87"/><text x="381" y="95" text-anchor="middle" class="art-label">ROUTE</text></svg>`,
  rag: `<svg viewBox="0 0 440 118" aria-hidden="true"><g fill="#deebee" stroke="#579cab"><rect x="24" y="14" width="93" height="88" rx="5"/><rect x="36" y="24" width="93" height="88" rx="5"/></g><g stroke="#80b7c0" stroke-width="3"><path d="M53 45 H108 M53 57 H101 M53 69 H113 M53 81 H89"/></g><path d="M130 62 H184" fill="none" stroke="#72bbc1" stroke-width="2" stroke-dasharray="5 4"/><circle cx="213" cy="62" r="29" stroke="#8acccd" fill="#d7e8e9"/><text x="213" y="58" text-anchor="middle" class="art-label">RETRIEVE</text><text x="213" y="71" text-anchor="middle" class="art-label">+ GROUND</text><path d="M242 62 H285" stroke="#8acccd" stroke-width="2"/><rect x="285" y="23" width="129" height="78" rx="7" fill="#d6e7e3" stroke="#6db9ae"/><text x="301" y="49" class="art-label">ANSWER</text><path d="M301 60 H393 M301 72 H383" stroke="#afd8cf" stroke-width="3"/><text x="302" y="88" class="art-label">[1] [2] [3]</text></svg>`,
  ozempic: `<svg viewBox="0 0 440 118" aria-hidden="true"><g stroke="#a6b77c" stroke-width="2" fill="none"><path d="M40 76 Q87 24 124 63 T205 46 T287 62 T407 26"/><path d="M40 89 Q96 62 124 78 T202 70 T286 82 T405 63" stroke-opacity=".4"/></g><g fill="#a2b685"><circle cx="40" cy="76" r="5"/><circle cx="124" cy="63" r="5"/><circle cx="205" cy="46" r="5"/><circle cx="286" cy="62" r="5"/><circle cx="407" cy="26" r="5"/></g><rect x="148" y="11" width="144" height="29" rx="5" fill="#e7eddc" stroke="#6c8a52"/><text x="220" y="30" text-anchor="middle" class="art-label">PERSUASION SIGNALS</text><text x="221" y="111" text-anchor="middle" class="art-label">50,000+ POSTS / ADS</text></svg>`
};

const projects = [
  {id:'accounting',code:'01',visual:'acct',type:'AGENTIC WORKFLOW / FINTECH',title:'Accounting Agentic System',summary:'A local-first workflow that ingests bank transactions, categorizes expenses, checks policies, and requires human approval before posting.',metric:'Designed for auditable actions, not unchecked autonomy.',tags:['Python','Claude CLI','SQLite','Plaid / Akaunting'],categories:['agents'],problem:'Routine bookkeeping mixes straightforward transactions with exceptions where autonomous actions would be risky.',built:'An orchestrated set of ingestion, categorization, policy, reconciliation-flagging, and approval-gated posting components. Created local CSV and SQLite paths and optional external adapters.',impact:'Working local prototype with audit trails and authored workflow tests. External production integrations require separate verification.',links:[{label:'GitHub repository',url:'https://github.com/Anveshika06/Accounting-Agentic-System'}]},
  {id:'video-router',code:'02',visual:'video',type:'VIDEO RAG / APPLIED ML',title:'Video-MME Query Intent Router',summary:'A lightweight multi-label classifier selecting FRAME, CLIP, and VIDEO retrieval scopes from a text question.',metric:'0.941 macro-F1 on 163 authored queries · ~1 ms CPU inference.',tags:['TF-IDF','scikit-learn','NLP','FastAPI'],categories:['ml','agents'],problem:'Long-video systems can waste retrieval effort when every question searches every evidence index.',built:'Used word and character TF-IDF with three logistic-regression heads, independent thresholds, and a routing evaluation harness.',impact:'Reported 0.941 macro-F1 on an authored held-out set and about 190 KB compressed model size. Video-MME-specific routing accuracy awaits independent annotation.',links:[{label:'GitHub Link',url:'https://github.com/Anveshika06/User-intent-classifier'}]},
  {id:'winleak',code:'03',visual:'winleak',type:'PEER-REVIEWED / MULTIMODAL VISION',title:'WinLeak: Thermal + RGB',summary:'Published work on window air-leakage detection using paired thermal and visible imagery, segmentation masks, and a multimodal baseline.',metric:'1,266 paired thermal + RGB observations · ACM BuildSys 2025.',tags:['Computer Vision','Thermal + RGB','Segmentation'],categories:['ml','research'],problem:'Air leakage is costly to detect at scale, and publicly available thermal datasets for this task are limited.',built:'Contributed to building and studying a paired thermal/visible dataset and multimodal detection baselines, including structured visual analysis.',impact:'Dataset paper published at ACM BuildSys 2025; 1,266 synchronized thermal/RGB pairs from 7 buildings.',links:[{label:'Project site',url:'https://anveshika06.github.io/WinLeak/'},{label:'Published paper',url:'https://doi.org/10.1145/3736425.3770112'}]},
  {id:'lead',code:'04',visual:'lead',type:'LLM PRODUCTS / FULL STACK',title:'AI Lead Qualifier',summary:'An LLM-powered web application for scoring inbound real-estate leads, surfacing reasoning, and managing human escalation.',metric:'From model output to visible decisions and review flows.',tags:['FastAPI','React','LLMs','Evaluation'],categories:['agents'],problem:'Inbound lead qualification is manual and hard to audit when decisions are made by a black-box model.',built:'Designed a React frontend and FastAPI backend with lead scoring, structured reasoning, confidence, conditional actions, and a unit-tested evaluation harness.',impact:'End-to-end product documented on my resume, including labeled evaluations and human-in-the-loop decisions.',links:[{label:'View GitHub',url:'https://github.com/Anveshika06/ai-lead-qualifier'}]},
  {id:'rag',code:'05',visual:'rag',type:'RETRIEVAL / FULL STACK',title:'Document Assistant with Citations',summary:'A document-grounded RAG assistant that retrieves relevant passages, answers with citations, and escalates low-confidence results.',metric:'Evidence first: answers grounded in retrieved source passages.',tags:['RAG','Embeddings','FastAPI','React'],categories:['agents','ml'],problem:'General-purpose assistants often answer without showing evidence from the user’s document.',built:'Implemented chunking, embeddings, similarity retrieval, and grounded response generation, with source citations and low-confidence review paths.',impact:'End-to-end RAG Q&A workflow described in my resume; not presented as a publicly benchmarked product.',links:[{label:'View GitHub',url:'https://github.com/Anveshika06/ai-document-qa'}]},
  {id:'ozempic',code:'06',visual:'ozempic',type:'NLP RESEARCH / WEAK SUPERVISION',title:'Health Misinformation & Persuasion',summary:'Research pipelines studying online health narratives, off-label discussions, and persuasion strategies across large-scale social content.',metric:'50,000+ social and advertising posts analyzed.',tags:['NLP','Gemini','Gemma','Weak supervision'],categories:['research','ml'],problem:'Real-world health claims are varied, noisy, and difficult to categorize with a single lexical rule set.',built:'Developed text curation and analysis workflows using sentiment, n-grams, NER, and LLM-assisted weak supervision for strategy labeling.',impact:'Structured research datasets and an evaluation workflow reported in my resume; sensitive source material is not embedded in this site.',links:[]}
];

const projectGrid = document.getElementById('project-grid');
const projectDialog = document.getElementById('project-dialog');
const linksToHTML = links => links.map(l=>`<a href="${l.url}" target="_blank" rel="noopener">${l.label} ↗</a>`).join('');
projectGrid.innerHTML = projects.map(p=>`
  <article class="project-card" data-categories="${p.categories.join(' ')}" data-id="${p.id}">
    <div class="card-visual ${p.visual}"><span class="visual-watermark">CASE / ${p.code}</span><div class="visual-art">${art[p.visual]}</div></div>
    <div class="card-body"><div class="card-top"><span class="card-type">${p.type}</span><span class="card-number">${p.code} / 06</span></div>
      <h3>${p.title}</h3><p>${p.summary}</p><div class="card-metric">${p.metric}</div>
      <div class="card-tags">${p.tags.map(t=>`<span>${t}</span>`).join('')}</div>
      <div class="card-actions"><button type="button" data-project="${p.id}">Read case study ↗</button>${p.links.length ? `<a href="${p.links[0].url}" target="_blank" rel="noopener">${p.links[0].label} ↗</a>` : ''}</div>
    </div>
  </article>`).join('');

function showProject(id){
  const p = projects.find(v=>v.id===id); if(!p) return;
  document.getElementById('dialog-category').textContent=p.type;
  document.getElementById('dialog-title').textContent=p.title;
  document.getElementById('dialog-summary').textContent=p.summary;
  document.getElementById('dialog-problem').textContent=p.problem;
  document.getElementById('dialog-built').textContent=p.built;
  document.getElementById('dialog-impact').textContent=p.impact;
  document.getElementById('dialog-links').innerHTML=linksToHTML(p.links);
  if(typeof projectDialog.showModal==='function') projectDialog.showModal();
  else projectDialog.setAttribute('open','');
}
projectGrid.addEventListener('click',e=>{const btn=e.target.closest('[data-project]');if(btn)showProject(btn.dataset.project);});
document.querySelectorAll('[data-open-project]').forEach(el=>el.addEventListener('click',e=>{e.preventDefault();showProject(el.dataset.openProject);}));
document.getElementById('dialog-close').addEventListener('click',()=>projectDialog.close());
projectDialog.addEventListener('click',e=>{if(e.target===projectDialog)projectDialog.close();});

document.querySelectorAll('.filter').forEach(button=>button.addEventListener('click',()=>{
  const filter=button.dataset.filter;
  document.querySelectorAll('.filter').forEach(b=>{const selected=b===button;b.classList.toggle('is-active',selected);b.setAttribute('aria-pressed',String(selected));});
  document.querySelectorAll('.project-card').forEach(card=>{card.hidden=!(filter==='all'||card.dataset.categories.split(' ').includes(filter));});
}));

// Educational in-browser simulation. This intentionally does not load or claim to replicate
// the Python-trained model: it exposes the evidence-scope intuition without a backend.
const cues = {
  FRAME:[[/\b(colou?r|shade|wearing|visible|look like|appearance|text on|sign|logo|at \d\d?:\d\d|at timestamp|in this frame|in the image|what is shown)\b/i,53],[/\b(at|on|near) (the|that) (moment|scene|frame)\b/i,28]],
  CLIP:[[/\b(after|before|when|while|during|happen|happens|crash|open|opens|opened|enter|enters|entered|run|runs|running|turn|turns|walk|walks|walking|sequence|next|then|react|respond)\b/i,58],[/\b(first|last|event|scene|transition|moment)\b/i,19]],
  VIDEO:[[/\b(overall|throughout|entire|whole|documentary|video's|main theme|message|summary|summarize|plot|story|purpose|lesson|about the video)\b/i,63],[/\b(across|generally|in general|central idea|how many times|total number)\b/i,27]]
};
function previewRoute(question){
  const normalized=(question||'').trim();
  const scores={FRAME:11,CLIP:11,VIDEO:9};
  for(const key of Object.keys(cues))for(const [pattern,value] of cues[key])if(pattern.test(normalized))scores[key]+=value;
  if(/\b(colou?r|wearing|appearance|look like)\b/i.test(normalized)&&/\b(when|after|before|while)\b/i.test(normalized)){scores.FRAME+=22;scores.CLIP+=21;}
  if(Object.values(scores).every(v=>v<34))scores.CLIP+=29;
  for(const key of Object.keys(scores))scores[key]=Math.min(96,scores[key]);
  let selected=Object.keys(scores).filter(key=>scores[key]>=50);
  if(selected.length===0)selected=[Object.keys(scores).sort((a,b)=>scores[b]-scores[a])[0]];
  const descriptions={FRAME:'Visual attributes or a specific moment suggest a frame index.',CLIP:'Temporal wording suggests a sequence or event across several frames.',VIDEO:'Global wording suggests broader context across the timeline.'};
  let explanation=selected.map(k=>descriptions[k]).join(' ');
  if(selected.length>1)explanation+=' More than one retrieval scope may be useful.';
  return {selected,scores,explanation};
}
function renderRoute(question){
  const {selected,scores,explanation}=previewRoute(question);
  document.getElementById('route-summary').textContent=selected.join(' + ');
  document.getElementById('route-explanation').textContent=explanation;
  document.querySelectorAll('.route-row').forEach(row=>{
    const label=row.dataset.route;
    row.classList.toggle('is-selected',selected.includes(label));
    row.querySelector('.route-fill').style.width=scores[label]+'%';
    row.querySelector('.route-percent').textContent=String(scores[label]).padStart(2,'0');
  });
}
document.getElementById('run-demo').addEventListener('click',()=>renderRoute(document.getElementById('query-input').value));
document.getElementById('example-chips').addEventListener('click',event=>{const b=event.target.closest('[data-question]');if(!b)return;document.getElementById('query-input').value=b.dataset.question;renderRoute(b.dataset.question);});
document.getElementById('query-input').addEventListener('keydown',event=>{if((event.ctrlKey||event.metaKey)&&event.key==='Enter')renderRoute(event.target.value);});
renderRoute(document.getElementById('query-input').value);

// Interactive system visualization, with accessible SVG keyboard focus.
const graphNodes=[
  {id:'INPUT',x:95,y:112,sub:'DATA / EVIDENCE',msg:'Input: structured data, documents and multimodal signals.'},
  {id:'REASON',x:435,y:111,sub:'ML / LLM',msg:'Reason: select a model that fits the task and constraints.'},
  {id:'VERIFY',x:98,y:369,sub:'EVAL / SAFETY',msg:'Verify: measurable metrics, tests and human guardrails.'},
  {id:'SHIP',x:438,y:365,sub:'API / PRODUCT',msg:'Ship: turn the research into usable systems.'}
];
const traces=document.getElementById('net-traces');const nodeLayer=document.getElementById('net-nodes');
const edges=[['INPUT','REASON'],['INPUT','VERIFY'],['REASON','SHIP'],['VERIFY','SHIP'],['INPUT','SHIP'],['REASON','VERIFY']];
function svgElem(tag,attrs={}){const el=document.createElementNS(svgNS,tag);for(const [k,v] of Object.entries(attrs))el.setAttribute(k,v);return el;}
function findNode(id){return graphNodes.find(n=>n.id===id);}
const traceEls=[];
for(const [a,b] of edges){const n1=findNode(a),n2=findNode(b);const line=svgElem('line',{x1:n1.x,y1:n1.y,x2:n2.x,y2:n2.y,class:'net-line'});traces.append(line);traceEls.push({el:line,a,b});}
for(const n of graphNodes){
  const group=svgElem('g',{class:'net-node',tabindex:'0',role:'button','aria-label':n.id+': '+n.msg,'data-id':n.id});
  group.append(svgElem('circle',{cx:n.x,cy:n.y,r:40}));
  const name=svgElem('text',{x:n.x,y:n.y-3,'text-anchor':'middle'});name.textContent=n.id;group.append(name);
  const sub=svgElem('text',{x:n.x,y:n.y+15,'text-anchor':'middle',class:'node-small'});sub.textContent=n.sub;group.append(sub);
  nodeLayer.append(group);
  const focus=()=>{
    document.getElementById('graph-insight').textContent=n.msg;
    nodeLayer.querySelectorAll('.net-node').forEach(el=>el.classList.toggle('is-active',el.dataset.id===n.id));
    traceEls.forEach(v=>v.el.classList.toggle('highlight',v.a===n.id||v.b===n.id));
  };
  group.addEventListener('mouseenter',focus);group.addEventListener('focus',focus);
  group.addEventListener('click',focus);
  group.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();focus();}});
}
document.getElementById('hero-visual').addEventListener('mouseleave',()=>{
  document.getElementById('graph-insight').textContent='Hover a node to explore the system';
  nodeLayer.querySelectorAll('.net-node').forEach(n=>n.classList.remove('is-active'));
  traceEls.forEach(v=>v.el.classList.remove('highlight'));
});

const navToggle=document.getElementById('nav-toggle');const navLinks=document.getElementById('nav-links');
navToggle.addEventListener('click',()=>{const open=navLinks.classList.toggle('is-open');navToggle.setAttribute('aria-expanded',String(open));});
navLinks.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{navLinks.classList.remove('is-open');navToggle.setAttribute('aria-expanded','false');}));

document.getElementById('copy-email').addEventListener('click',async function(){
  const old=this.textContent;
  try{await navigator.clipboard.writeText('anveshikakamble@gmail.com');this.textContent='Copied ✓';}
  catch{this.textContent='Email: anveshikakamble@gmail.com';}
  setTimeout(()=>{this.textContent=old;},2200);
});
const cursorBulb=document.getElementById('cursor-bulb');
if(cursorBulb&&window.matchMedia('(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)').matches){
  document.body.classList.add('has-cursor-bulb');
  document.addEventListener('pointermove',event=>{
    cursorBulb.style.left=event.clientX+'px';
    cursorBulb.style.top=event.clientY+'px';
    cursorBulb.classList.add('is-visible');
  },{passive:true});
  document.documentElement.addEventListener('pointerleave',()=>{
    cursorBulb.classList.remove('is-visible');
  });
}
document.getElementById('year').textContent=String(new Date().getFullYear());
