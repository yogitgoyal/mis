/* ============ EDIT THESE ============ */
const FROM = "Your Sir Ji";                          // your name, shown at the end
const BIRTHDAY = new Date(2026, 9, 21, 0, 0, 0);   // 21 Oct 2026 (month starts at 0)
const LETTER = `My dearest Nakchidi,

Nineteen years ago the world got its brightest star, and three months ago I found her.

We have never met, never hugged, never watched one sunset together, yet you feel closer to me than anyone ever has. Your voice is my favourite sound, and your messages are the best part of my every day.

On your birthday I wish you smiles that reach your eyes, dreams that come true, and a love that never lets you feel alone.

I can't wait for the day I finally meet you.

Happy 19th Birthday, Mdm Ji. I love you. 💖`;

const SHAYARI = [
 {t:"Shayari 1", s:[
  ["Ek irada tha ki kabhi nahi karna tha ishq kisi se,","Par kisi ko dil de baithe…","Uska naam apni zubaan par le baithe…"],
  ["24 ghante us shakhs se door rehkar bhi dekh liya,","Apna haal behaal hote bhi dekh liya…"],
  ["Door rehne ke baad laga ki use kho diya,","Jiski aankh se na nikla kabhi aansu,","woh bhi aaj ro diya…"],
  ["Us shakhs ki himmat ka kya kahun,","Mujhe rota dekh khud ka sab chhod diya,","Mujhe hasane ke liye khud ke ishq ko hi tod diya…"],
  ["Phir samajh aaya ki mere wajood ki kya keemat hai uske bina,","Ban jaunga main zinda laash uske bina…"]]},
 {t:"Shayari 2", s:[
  ["Aaj bhagwan se karna tha hisaab…","Jaanni thi ek baat, jiske liye tha main betaab…"],
  ["Poocha us se, kya milega mujhko koi jawab?","Dhundhni thi ek taqdeer ki kitaab…"],
  ["Taqdeer ki kitaab milti toh badal deta saare rukh,","Apni khushi tere naam karke,","apne mein likh deta saare dukh…"]]}
];

const REASONS = ["Your smile lights up my screen","Your voice feels like home","You make long distance feel short","Your kindness is so real","One laugh and my day is fixed","You are brave and beautiful","You listen to my silly stories","You believe in us","Your good-morning texts","Your goodnight wishes","You are my peace","You make me better","Your cute nakhre","Your dreams inspire me","You are patient with me","You trust me","You are my best friend","I wait happily for the day we meet","Simply, you are you, Nakchidi"];

const QUOTES = ["Distance means so little when someone means so much.","We may be miles apart, but under the same moon my heart is next to yours.","Every day I fall for you a little more, and we haven't even met yet.","You are not just my love, Nakchidi. You are my favourite place to rest my thoughts.","Some souls find each other long before their eyes do.","Until I can hold your hand, I will hold you in every prayer.","Happy 19, my love. The best chapters of our story are still ahead."];

const LOVE_WORDS = ["I love you","Nakchidi 💖","Tujhse pyaar hai","Mdm Ji ❤️","You're my world","Miss you 🥺","I love you","Forever yours"];
/* ==================================== */

const $ = id => document.getElementById(id);
const rnd = (a,b) => Math.random()*(b-a)+a;
const COLORS = ["#ff7aa8","#ffd98a","#cdbbff","#ffffff","#ff9bbd","#7fe0ff"];
$("from").textContent = FROM;

/* ---------- canvases ---------- */
const sky=$("sky"), fx=$("fx"), sc=sky.getContext("2d"), fc=fx.getContext("2d");
let W,H,stars=[],hearts=[],ps=[];
const DPR=Math.min(devicePixelRatio||1,2);
function size(){W=innerWidth;H=innerHeight;for(const c of [sky,fx]){c.width=W*DPR;c.height=H*DPR;}
 sc.setTransform(DPR,0,0,DPR,0,0);fc.setTransform(DPR,0,0,DPR,0,0);
 stars=Array.from({length:Math.min(130,W/4)},()=>({x:rnd(0,W),y:rnd(0,H),r:rnd(.3,1.7),t:rnd(0,6)}));}
addEventListener("resize",size);size();

function heartPath(c,x,y,s){c.save();c.translate(x,y);c.scale(s,s);c.beginPath();c.moveTo(0,3);c.bezierCurveTo(-5,-3,-12,2,0,12);c.bezierCurveTo(12,2,5,-3,0,3);c.fill();c.restore();}

function spark(x,y,n,spd,col,heartsToo){for(let i=0;i<n;i++){const a=rnd(0,6.283),v=rnd(.3,1)*spd;
 ps.push({k:heartsToo&&i%4==0?"h":"s",x,y,vx:Math.cos(a)*v,vy:Math.sin(a)*v,l:rnd(55,95),m:95,c:col||COLORS[i%COLORS.length],g:.05});}}
function firework(x,y){const col=COLORS[Math.random()*COLORS.length|0];spark(x,y,70,6.5,col,true);spark(x,y,30,3,"#fff");}
function launch(x){ps.push({k:"r",x,y:H,vx:rnd(-.6,.6),vy:-rnd(11,14),l:99,m:99,c:"#ffd98a",g:.17,ty:rnd(H*.15,H*.45)});}
function show(n=7){for(let i=0;i<n;i++)setTimeout(()=>launch(rnd(W*.15,W*.85)),i*380);}
function confetti(n=150,y=H*.4){for(let i=0;i<n;i++)ps.push({k:"c",x:W/2,y,vx:rnd(-8,8),vy:rnd(-14,-3),l:rnd(120,220),m:220,c:COLORS[i%COLORS.length],g:.17,w:rnd(5,10),rot:rnd(0,6)});}
function rain(n=14){for(let i=0;i<n;i++)hearts.push({x:rnd(0,W),y:H+rnd(0,200),s:rnd(1,1.8),v:rnd(1.2,2.4),p:rnd(0,6),c:"#ff7aa8"});}

function loop(t){
 sc.clearRect(0,0,W,H);
 for(const s of stars){sc.globalAlpha=.35+.65*Math.abs(Math.sin(t/1100+s.t));sc.fillStyle="#fff";sc.beginPath();sc.arc(s.x,s.y,s.r,0,7);sc.fill();}
 if(Math.random()<.035&&hearts.length<30)hearts.push({x:rnd(0,W),y:H+20,s:rnd(.4,1.1),v:rnd(.3,.9),p:rnd(0,6),c:["#ff7aa8","#cdbbff","#ffd98a"][Math.random()*3|0]});
 hearts=hearts.filter(h=>h.y>-40);
 for(const h of hearts){h.y-=h.v;sc.globalAlpha=.55;sc.fillStyle=h.c;heartPath(sc,h.x+Math.sin(h.y/40+h.p)*14,h.y,h.s);}
 fc.clearRect(0,0,W,H);
 ps=ps.filter(p=>p.l>0);
 for(const p of ps){p.x+=p.vx;p.y+=p.vy;p.vy+=p.g;p.l--;
  if(p.k=="r"){if(p.vy>-1.2||p.y<p.ty){p.l=0;firework(p.x,p.y);}fc.globalAlpha=1;fc.fillStyle=p.c;fc.fillRect(p.x,p.y,3,9);continue;}
  if(p.k!="c"){p.vx*=.985;p.vy*=.985;}
  fc.globalAlpha=Math.min(1,p.l/(p.m*.5));fc.fillStyle=p.c;
  if(p.k=="h")heartPath(fc,p.x,p.y,.55);
  else if(p.k=="c"){p.rot+=.2;fc.save();fc.translate(p.x,p.y);fc.rotate(p.rot);fc.fillRect(-p.w/2,-p.w/4,p.w,p.w/2);fc.restore();}
  else{fc.beginPath();fc.arc(p.x,p.y,2,0,7);fc.fill();}}
 requestAnimationFrame(loop);}
requestAnimationFrame(loop);

/* tap sparkle anywhere */
addEventListener("pointerdown",e=>spark(e.clientX,e.clientY,9,2.6,null,true),{passive:true});

/* ---------- balloons ---------- */
function balloons(n=12){const box=$("balloons");
 for(let i=0;i<n;i++){const b=document.createElement("button");b.className="bal";b.setAttribute("aria-label","Pop balloon");
  const c=COLORS[i%5];b.style.cssText=`left:${rnd(2,88)}%;background:${c};--d:${rnd(9,15)}s;animation-delay:${rnd(0,2.5)}s,0s`;
  b.innerHTML=i%3==0?"<b>19</b>":"<b>💖</b>";
  b.onclick=e=>{e.stopPropagation();const r=b.getBoundingClientRect();spark(r.left+28,r.top+30,28,4,c,true);b.remove();};
  b.addEventListener("animationend",ev=>{if(ev.animationName=="up")b.remove();});box.appendChild(b);}}

/* ---------- open: envelope → 3-2-1 → boom ---------- */
$("envelope").onclick=()=>{
 $("gate").classList.add("out");
 const cd=$("cd");cd.hidden=false;
 const seq=["3","2","1"];let i=0;
 (function next(){
  if(i<seq.length){cd.innerHTML=`<span>${seq[i++]}</span>`;setTimeout(next,950);}
  else{cd.className="txt";cd.innerHTML="<span>Happy Birthday, Nakchidi! 🎉</span>";
   confetti(260);show(8);setTimeout(()=>{
    cd.hidden=true;$("gate").hidden=true;$("site").hidden=false;scrollTo(0,0);
    requestAnimationFrame(()=>$("site").classList.add("go"));balloons(14);rain(16);observe();},1700);}
 })();
};

/* ---------- countdown ---------- */
function tick(){const d=BIRTHDAY-new Date(),el=$("count");
 if(d<=0){el.className="count done";el.textContent="🎂 It's your day, Nakchidi! 🎂";return;}
 el.innerHTML=[["days",d/864e5],["hours",d/36e5%24],["min",d/6e4%60],["sec",d/1e3%60]].map(([l,n])=>`<div><b>${Math.floor(n)}</b><span>${l}</span></div>`).join("");}
tick();setInterval(tick,1000);

/* ---------- build content ---------- */
$("shayari").innerHTML=SHAYARI.map(b=>`<div class="sh"><h3>${b.t}</h3>${b.s.map(st=>`<p>${st.map(l=>`<span class="ln">${l}</span>`).join("")}</p>`).join("")}</div>`).join("");
document.querySelectorAll(".sh .ln").forEach((l,i,all)=>{});
document.querySelectorAll(".sh").forEach(sh=>sh.querySelectorAll(".ln").forEach((l,i)=>l.style.transitionDelay=(i*.45)+"s"));

$("reasons").innerHTML=REASONS.map((r,i)=>`<button class="card" aria-label="Reason ${i+1}"><i class="f">💗</i><i class="b">${r}</i></button>`).join("");
$("reasons").onclick=e=>{const c=e.target.closest(".card");if(!c)return;c.classList.toggle("open");
 if(c.classList.contains("open")){const r=c.getBoundingClientRect();spark(r.left+r.width/2,r.top+66,14,3,"#ff7aa8",true);}};

/* ---------- scroll reveals + one-time triggers ---------- */
let typed=false;
function observe(){
 const io=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;
  e.target.classList.add("in");
  if(e.target.id=="letter"&&!typed){typed=true;const p=$("typed");let i=0;(function go(){p.textContent=LETTER.slice(0,++i);if(i<LETTER.length)setTimeout(go,26);})();}
  if(e.target.id=="photo"){setTimeout(()=>{const r=$("pol").getBoundingClientRect();spark(r.left+r.width/2,r.top+r.height/2,50,5,null,true);},700);}
  io.unobserve(e.target);}),{threshold:.25});
 document.querySelectorAll(".reveal,.sh").forEach(el=>io.observe(el));}

/* photo tap */
$("pol").onclick=e=>{spark(e.clientX,e.clientY,40,5,null,true);rain(8);};

/* ---------- love meter ---------- */
let pct=0,done=false,lastW=-1;
$("lheart").onclick=e=>{
 const t=document.createElement("span");t.className="float";
 do{lastW=Math.random()*LOVE_WORDS.length|0}while(false);
 t.textContent=LOVE_WORDS[lastW];t.style.left=(e.clientX-40+rnd(-30,30))+"px";t.style.top=(e.clientY-20)+"px";t.style.setProperty("--dx",rnd(-50,50)+"px");
 document.body.appendChild(t);setTimeout(()=>t.remove(),2000);
 if(done){spark(e.clientX,e.clientY,20,4,"#ff7aa8",true);return;}
 pct=Math.min(100,pct+rnd(5,9)|0);$("mfill").style.width=pct+"%";$("mpct").textContent=pct+"%";
 if(navigator.vibrate)navigator.vibrate(25);
 if(pct>=100){done=true;$("mpct").textContent="100%… and still not enough 💞";
  const m=$("lmsg");m.innerHTML="I love you, Nakchidi.<br>Always. Forever. 💖";m.classList.add("on");confetti(220);show(6);rain(18);}
};

/* ---------- quotes ---------- */
let qi=0;const q=$("quote"),dots=$("dots");
dots.innerHTML=QUOTES.map(()=>"<span></span>").join("");
function showQ(){q.classList.add("fade");setTimeout(()=>{q.textContent="“"+QUOTES[qi]+"”";
 [...dots.children].forEach((d,i)=>d.classList.toggle("on",i===qi));q.classList.remove("fade");qi=(qi+1)%QUOTES.length;},700);}
showQ();setInterval(showQ,5500);

/* ---------- cake ---------- */
const cd2=$("candles");
cd2.innerHTML=Array.from({length:3},()=>'<button class="candle" aria-label="Blow out candle"></button>').join("");
cd2.onclick=e=>{const c=e.target.closest(".candle");if(!c||c.classList.contains("off"))return;c.classList.add("off");
 if(!cd2.querySelector(".candle:not(.off)")){confetti(240);show(7);balloons(10);$("cakehint").textContent="";
  $("wishmsg").textContent="Whatever you wished for, I will spend my life helping it come true 💖";}};

$("boom").onclick=()=>{confetti(260);show(9);balloons(12);rain(16);};
