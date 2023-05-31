import"./Layout.astro_astro_type_script_index_0_lang.07e5c259.js";import"./Menu.astro_astro_type_script_index_0_lang.d82765f8.js";const K=t=>t===void 0||t==="auto"||t==="instant"||t==="smooth";function ot(t,e){this.scrollLeft=t,this.scrollTop=e}const J=(t,e,o="cannot convert to dictionary.")=>`Failed to execute '${t}' on '${e}': ${o}`,Q=(t,e,o)=>J(t,e,`The provided value '${o}' is not a valid enum value of type ScrollBehavior.`),W=(t,e,o)=>{var n;const r=`__SEAMLESS.BACKUP$${e}`;return!t[r]&&t[e]&&!(!((n=t[e])===null||n===void 0)&&n.__isPolyfill)&&(t[r]=t[e]),t[r]||o},nt=t=>{const e=typeof t;return t!==null&&(e==="object"||e==="function")},P=t=>t.ownerDocument.scrollingElement||t.ownerDocument.documentElement;function rt(t){if(typeof Event=="function")return new Event("scrollend",{bubbles:t,cancelable:!1});const e=document.createEvent("Event");return e.initEvent("scrollend",t,!1),e}const st=t=>.5*(1-Math.cos(Math.PI*t));function Y(){var t;let e;return!((t=window.performance)===null||t===void 0)&&t.now?e=()=>window.performance.now():e=()=>window.Date.now(),Y=e,e()}const it=500,Z=t=>{const o=(Y()-t.timeStamp)/(t.duration||it);if(o>1){t.method(t.targetX,t.targetY),t.callback();return}const n=(t.timingFunc||st)(o),r=t.startX+(t.targetX-t.startX)*n,s=t.startY+(t.targetY-t.startY)*n;t.method(r,s),t.rafId=window.requestAnimationFrame(()=>{Z(t)})},b=t=>isFinite(t)?Number(t):0,ct=t=>{var e;return(e=t.isConnected)!==null&&e!==void 0?e:!t.ownerDocument||!(t.ownerDocument.compareDocumentPosition(t)&1)},lt=(t,e,o)=>{var n,r;if(!ct(t))return;const s=t.scrollLeft,c=t.scrollTop,u=b((n=e.left)!==null&&n!==void 0?n:s),l=b((r=e.top)!==null&&r!==void 0?r:c);if(u===s&&l===c)return;const w=W(HTMLElement.prototype,"scroll",ot),a=W(Object.getPrototypeOf(t),"scroll",w).bind(t);if(e.behavior!=="smooth"){a(u,l);return}const d=()=>{window.removeEventListener("wheel",i),window.removeEventListener("touchmove",i)},h=()=>{d();const v=t.nodeType===9;t.dispatchEvent(rt(v))},m=Object.assign(Object.assign({},o),{timeStamp:Y(),startX:s,startY:c,targetX:u,targetY:l,rafId:0,method:a,callback:h}),i=()=>{window.cancelAnimationFrame(m.rafId),d()};window.addEventListener("wheel",i,{passive:!0,once:!0}),window.addEventListener("touchmove",i,{passive:!0,once:!0}),Z(m)},at=t=>t.window===t,ut=t=>(e,o,n)=>{const[r,s]=at(e)?[P(e.document.documentElement),"Window"]:[e,"Element"],c=o??{};if(!nt(c))throw new TypeError(J(t,s));if(!K(c.behavior))throw new TypeError(Q(t,s,c.behavior));t==="scrollBy"&&(c.left=b(c.left)+r.scrollLeft,c.top=b(c.top)+r.scrollTop),lt(r,c,n)},dt=ut("scroll"),mt=dt,z=t=>{switch(t){case"horizontal-tb":case"lr":case"lr-tb":case"rl":case"rl-tb":return 0;case"vertical-rl":case"tb":case"tb-rl":return 1;case"vertical-lr":case"tb-lr":return 2;case"sideways-rl":return 3;case"sideways-lr":return 4}return 0},x=(t,e,o,n)=>{let r=0;switch(e||(r^=2),t){case 0:r=r>>1|(r&1)<<1,[o,n]=[n,o];break;case 1:case 3:r^=1;break;case 4:r^=2;break}return[r,o,n]},ft=t=>(x(z(t.writingMode),t.direction!=="rtl",void 0,void 0)[0]&1)===1,ht=(t,e,o)=>{const[n,r,s]=x(e,o,t.block||"start",t.inline||"nearest");return[r,s].map((c,u)=>{switch(c){case"center":return 1;case"nearest":return 0;default:{const l=n>>u&1;return c==="start"==!l?2:3}}})},C=(t,e,o,n,r,s,c)=>t!==0?t:r<e&&s>o||r>e&&s<o?null:r<=e&&c<=n||s>=o&&c>=n?2:s>o&&c<n||r<e&&c>n?3:null,X=t=>t!=="visible"&&t!=="clip",wt=t=>{var e;try{return((e=t.ownerDocument.defaultView)===null||e===void 0?void 0:e.frameElement)||null}catch{return null}},gt=(t,e)=>t.clientHeight<t.scrollHeight||t.clientWidth<t.scrollWidth?X(e.overflowY)||X(e.overflowX)||t===P(t):!1,$=t=>{const e=t.parentNode,o=t.parentElement;if(o===null&&e!==null){if(e.nodeType===11)return e.host;if(e.nodeType===9)return wt(t)}return o},M=(t,e,o)=>t<e?e:t>o?o:t,vt=t=>["scroll-margin","scroll-snap-margin"].filter(e=>e in t.documentElement.style)[0],pt=(t,e,o)=>{const{top:n,right:r,bottom:s,left:c}=e,u=vt(t.ownerDocument);if(!u)return[n,r,s,c];const l=w=>{const a=o.getPropertyValue(`${u}-${w}`);return parseInt(a,10)||0};return[n-l("top"),r+l("right"),s+l("bottom"),c-l("left")]},p=(t,e,o)=>{switch(t){case 1:return(e+o)/2;case 3:return o;case 2:case 0:return e}},yt=(t,e)=>{var o,n,r;const s=(o=t.ownerDocument.defaultView)===null||o===void 0?void 0:o.visualViewport,[c,u,l,w]=t===P(t)?[0,0,(n=s?.width)!==null&&n!==void 0?n:t.clientWidth,(r=s?.height)!==null&&r!==void 0?r:t.clientHeight]:[e.left,e.top,t.clientWidth,t.clientHeight],a=c+t.clientLeft,d=u+t.clientTop,h=a+l,m=d+w;return[d,h,m,a]},bt=(t,e)=>{const o=[];let n=t.ownerDocument,r=n.defaultView;if(!r)return o;const s=window.getComputedStyle(t),c=s.direction!=="rtl",u=z(s.writingMode||s.getPropertyValue("-webkit-writing-mode")||s.getPropertyValue("-ms-writing-mode")),[l,w]=ht(e,u,c);let[a,d,h,m]=pt(t,t.getBoundingClientRect(),s);for(let i=$(t);i!==null;i=$(i)){if(n!==i.ownerDocument){if(n=i.ownerDocument,r=n.defaultView,!r)break;const{left:H,top:k}=i.getBoundingClientRect();a+=k,d+=H,h+=k,m+=H}const v=r.getComputedStyle(i);if(v.position==="fixed")break;if(!gt(i,v))continue;const tt=i.getBoundingClientRect(),[L,E,I,S]=yt(i,tt),T=C(l,S,E,i.clientWidth,m,d,d-m),B=C(w,L,I,i.clientHeight,a,h,h-a),_=T===null?0:p(T,m,d)-p(T,S,E),et=B===null?0:p(B,a,h)-p(B,L,I),q=ft(v)?M(_,-i.scrollWidth+i.clientWidth-i.scrollLeft,-i.scrollLeft):M(_,-i.scrollLeft,i.scrollWidth-i.clientWidth-i.scrollLeft),A=M(et,-i.scrollTop,i.scrollHeight-i.clientHeight-i.scrollTop);o.push([i,{left:i.scrollLeft+q,top:i.scrollTop+A,behavior:e.behavior}]),a=Math.max(a-A,L),d=Math.min(d-q,E),h=Math.min(h-A,I),m=Math.max(m-q,S)}return o},F=(t,e,o)=>{const n=e||{};if(!K(n.behavior))throw new TypeError(Q("scrollIntoView","Element",n.behavior));bt(t,n).forEach(([s,c])=>{mt(s,c,o)})};window.onbeforeunload=function(){window.scrollTo(0,0)};let D=0;function Lt(){D&&clearTimeout(D);const t=document.getElementById("middle-element"),e=document.getElementById("end-element");t&&e&&(F(t,{behavior:"smooth"}),D=setTimeout(()=>{F(e,{behavior:"smooth"})},1700))}const Et=document.getElementById("sroll-to-end");Et?.addEventListener("click",Lt);const It=document.querySelectorAll(".today .section"),R=document.querySelector(".scrollIconContainer"),St=document.querySelector(".shadow"),Tt=document.getElementById("title"),Bt=document.querySelector(".figuresContainer");document.querySelector(".floatingFigures");const qt=document.querySelector(".grid"),At=document.querySelectorAll(".floatGradient"),V=document.getElementById("mainLogo");document.getElementById("today");const O=document.getElementById("envision"),Mt=document.getElementById("bleachAnimation");let f=0;const j=document.getElementById("logoSection"),N=100,U=.05;let g=!1,G=!1,y=0;const Dt={threshold:.1,rootMargin:"-99% 0% 0%"},Vt=new IntersectionObserver((t,e)=>{t.forEach(o=>{if(o.isIntersecting){if(o.target.id==="animationTrigger"&&f<=0&&(Tt?.classList.add("animate-fadeOut","titleBleach"),o.target.querySelector(".subtitle")?.classList.add("animate-fadeOut","titleBleach"),qt?.classList.add("animate-fadeOut","figuresBleach"),Bt?.classList.add("animate-collapse3d","figuresBleach"),At.forEach(n=>{n.removeAttribute("style"),n.classList.add("animate-fadeOut","figuresBleach")}),St?.classList.add("bg-1"),!g)){g=!0,y=window.scrollY;let n=setInterval(()=>{f<1?(f=f+U,document.documentElement.style.setProperty("--bleachProgress",f.toString())):(setTimeout(()=>{window.scrollTo(0,y+window.innerHeight+2e3),g=!1},1e3),clearInterval(n),O?.classList.remove("hidden"),V?.classList.add("logo--contrast"),j?.classList.remove("opacity-0"))},N)}if(o.target.id==="animationTrigger"&&f>0&&(O?.classList.add("hidden"),V?.classList.remove("logo--contrast"),j?.classList.add("opacity-0"),!g)){g=!0,y=window.scrollY;let n=setInterval(()=>{f>0?(f=f-U,document.documentElement.style.setProperty("--bleachProgress",f.toString())):(setTimeout(()=>{g=!1,window.scrollTo(0,y-window.innerHeight)},1e3),clearInterval(n))},N)}o.target.querySelectorAll(".subtitle").forEach(n=>{n.classList.remove("animate-fadeOut","hidden")}),o.target.querySelectorAll(".subtitle").forEach(n=>{n.classList.add("animate-riseIn")})}else o.target.querySelectorAll(".subtitle").forEach(n=>{n.classList.remove("animate-riseIn")}),o.target.querySelectorAll(".subtitle").forEach(n=>{n.classList.add("animate-fadeOut")})})},Dt);It.forEach(t=>{Vt.observe(t)});document.addEventListener("scroll",()=>{g||requestAnimationFrame(Ot),Mt&&f===0&&(O?.classList.add("hidden"),V?.classList.remove("logo--contrast")),!G&&window.scrollY>400&&(R?.classList.add("opacity-0"),G=!0,setTimeout(()=>{R?.classList.add("hidden")},400))},{passive:!0});const Ot=()=>{document.documentElement.style.setProperty("--scroll",(window.scrollY/(document.body.offsetHeight-window.innerHeight)).toString())};document.getElementById("envision");document.getElementById("welcomeSection");const Pt=document.querySelectorAll(".envision .section"),Yt={threshold:0,rootMargin:"-40% 0% -60%"},_t=new IntersectionObserver((t,e)=>{t.forEach(o=>{o.isIntersecting?(o.target.classList.remove("opacity-0"),o.target.querySelector(".subtitle")?.classList.remove("animate-fadeOut","hidden"),o.target.querySelector(".subtitle")?.classList.add("animate-riseIn"),o.target.querySelector(".title")?.classList.add("animate-riseIn")):(o.target.querySelector(".subtitle")?.classList.remove("animate-riseIn"),o.target.querySelector(".subtitle")?.classList.add("'animate-fadeOut'"),o.target.querySelector(".title")?.classList.remove("animate-riseIn"),o.target.classList.add("opacity-0"))})},Yt);Pt.forEach(t=>{_t.observe(t)});const Ht=document.querySelectorAll(".floatIcon"),kt=1200;Ht.forEach(t=>{t.style.animationDelay=kt+Math.floor(Math.random()*4200)+"ms"});
