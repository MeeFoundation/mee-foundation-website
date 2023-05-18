import"./Layout.astro_astro_type_script_index_0_lang.83afa230.js";import"./Footer.astro_astro_type_script_index_0_lang.f2ee13ce.js";const Z=t=>t===void 0||t==="auto"||t==="instant"||t==="smooth";function st(t,e){this.scrollLeft=t,this.scrollTop=e}const z=(t,e,o="cannot convert to dictionary.")=>`Failed to execute '${t}' on '${e}': ${o}`,x=(t,e,o)=>z(t,e,`The provided value '${o}' is not a valid enum value of type ScrollBehavior.`),X=(t,e,o)=>{var n;const r=`__SEAMLESS.BACKUP$${e}`;return!t[r]&&t[e]&&!(!((n=t[e])===null||n===void 0)&&n.__isPolyfill)&&(t[r]=t[e]),t[r]||o},it=t=>{const e=typeof t;return t!==null&&(e==="object"||e==="function")},_=t=>t.ownerDocument.scrollingElement||t.ownerDocument.documentElement;function ct(t){if(typeof Event=="function")return new Event("scrollend",{bubbles:t,cancelable:!1});const e=document.createEvent("Event");return e.initEvent("scrollend",t,!1),e}const lt=t=>.5*(1-Math.cos(Math.PI*t));function H(){var t;let e;return!((t=window.performance)===null||t===void 0)&&t.now?e=()=>window.performance.now():e=()=>window.Date.now(),H=e,e()}const at=500,tt=t=>{const o=(H()-t.timeStamp)/(t.duration||at);if(o>1){t.method(t.targetX,t.targetY),t.callback();return}const n=(t.timingFunc||lt)(o),r=t.startX+(t.targetX-t.startX)*n,s=t.startY+(t.targetY-t.startY)*n;t.method(r,s),t.rafId=window.requestAnimationFrame(()=>{tt(t)})},b=t=>isFinite(t)?Number(t):0,dt=t=>{var e;return(e=t.isConnected)!==null&&e!==void 0?e:!t.ownerDocument||!(t.ownerDocument.compareDocumentPosition(t)&1)},ut=(t,e,o)=>{var n,r;if(!dt(t))return;const s=t.scrollLeft,c=t.scrollTop,d=b((n=e.left)!==null&&n!==void 0?n:s),l=b((r=e.top)!==null&&r!==void 0?r:c);if(d===s&&l===c)return;const w=X(HTMLElement.prototype,"scroll",st),a=X(Object.getPrototypeOf(t),"scroll",w).bind(t);if(e.behavior!=="smooth"){a(d,l);return}const u=()=>{window.removeEventListener("wheel",i),window.removeEventListener("touchmove",i)},h=()=>{u();const g=t.nodeType===9;t.dispatchEvent(ct(g))},m=Object.assign(Object.assign({},o),{timeStamp:H(),startX:s,startY:c,targetX:d,targetY:l,rafId:0,method:a,callback:h}),i=()=>{window.cancelAnimationFrame(m.rafId),u()};window.addEventListener("wheel",i,{passive:!0,once:!0}),window.addEventListener("touchmove",i,{passive:!0,once:!0}),tt(m)},mt=t=>t.window===t,ft=t=>(e,o,n)=>{const[r,s]=mt(e)?[_(e.document.documentElement),"Window"]:[e,"Element"],c=o??{};if(!it(c))throw new TypeError(z(t,s));if(!Z(c.behavior))throw new TypeError(x(t,s,c.behavior));t==="scrollBy"&&(c.left=b(c.left)+r.scrollLeft,c.top=b(c.top)+r.scrollTop),ut(r,c,n)},ht=ft("scroll"),wt=ht,et=t=>{switch(t){case"horizontal-tb":case"lr":case"lr-tb":case"rl":case"rl-tb":return 0;case"vertical-rl":case"tb":case"tb-rl":return 1;case"vertical-lr":case"tb-lr":return 2;case"sideways-rl":return 3;case"sideways-lr":return 4}return 0},ot=(t,e,o,n)=>{let r=0;switch(e||(r^=2),t){case 0:r=r>>1|(r&1)<<1,[o,n]=[n,o];break;case 1:case 3:r^=1;break;case 4:r^=2;break}return[r,o,n]},vt=t=>(ot(et(t.writingMode),t.direction!=="rtl",void 0,void 0)[0]&1)===1,gt=(t,e,o)=>{const[n,r,s]=ot(e,o,t.block||"start",t.inline||"nearest");return[r,s].map((c,d)=>{switch(c){case"center":return 1;case"nearest":return 0;default:{const l=n>>d&1;return c==="start"==!l?2:3}}})},$=(t,e,o,n,r,s,c)=>t!==0?t:r<e&&s>o||r>e&&s<o?null:r<=e&&c<=n||s>=o&&c>=n?2:s>o&&c<n||r<e&&c>n?3:null,F=t=>t!=="visible"&&t!=="clip",pt=t=>{var e;try{return((e=t.ownerDocument.defaultView)===null||e===void 0?void 0:e.frameElement)||null}catch{return null}},yt=(t,e)=>t.clientHeight<t.scrollHeight||t.clientWidth<t.scrollWidth?F(e.overflowY)||F(e.overflowX)||t===_(t):!1,R=t=>{const e=t.parentNode,o=t.parentElement;if(o===null&&e!==null){if(e.nodeType===11)return e.host;if(e.nodeType===9)return pt(t)}return o},D=(t,e,o)=>t<e?e:t>o?o:t,bt=t=>["scroll-margin","scroll-snap-margin"].filter(e=>e in t.documentElement.style)[0],Lt=(t,e,o)=>{const{top:n,right:r,bottom:s,left:c}=e,d=bt(t.ownerDocument);if(!d)return[n,r,s,c];const l=w=>{const a=o.getPropertyValue(`${d}-${w}`);return parseInt(a,10)||0};return[n-l("top"),r+l("right"),s+l("bottom"),c-l("left")]},p=(t,e,o)=>{switch(t){case 1:return(e+o)/2;case 3:return o;case 2:case 0:return e}},Et=(t,e)=>{var o,n,r;const s=(o=t.ownerDocument.defaultView)===null||o===void 0?void 0:o.visualViewport,[c,d,l,w]=t===_(t)?[0,0,(n=s?.width)!==null&&n!==void 0?n:t.clientWidth,(r=s?.height)!==null&&r!==void 0?r:t.clientHeight]:[e.left,e.top,t.clientWidth,t.clientHeight],a=c+t.clientLeft,u=d+t.clientTop,h=a+l,m=u+w;return[u,h,m,a]},It=(t,e)=>{const o=[];let n=t.ownerDocument,r=n.defaultView;if(!r)return o;const s=window.getComputedStyle(t),c=s.direction!=="rtl",d=et(s.writingMode||s.getPropertyValue("-webkit-writing-mode")||s.getPropertyValue("-ms-writing-mode")),[l,w]=gt(e,d,c);let[a,u,h,m]=Lt(t,t.getBoundingClientRect(),s);for(let i=R(t);i!==null;i=R(i)){if(n!==i.ownerDocument){if(n=i.ownerDocument,r=n.defaultView,!r)break;const{left:W,top:C}=i.getBoundingClientRect();a+=C,u+=W,h+=C,m+=W}const g=r.getComputedStyle(i);if(g.position==="fixed")break;if(!yt(i,g))continue;const nt=i.getBoundingClientRect(),[E,I,S,T]=Et(i,nt),B=$(l,T,I,i.clientWidth,m,u,u-m),q=$(w,E,S,i.clientHeight,a,h,h-a),k=B===null?0:p(B,m,u)-p(B,T,I),rt=q===null?0:p(q,a,h)-p(q,E,S),A=vt(g)?D(k,-i.scrollWidth+i.clientWidth-i.scrollLeft,-i.scrollLeft):D(k,-i.scrollLeft,i.scrollWidth-i.clientWidth-i.scrollLeft),M=D(rt,-i.scrollTop,i.scrollHeight-i.clientHeight-i.scrollTop);o.push([i,{left:i.scrollLeft+A,top:i.scrollTop+M,behavior:e.behavior}]),a=Math.max(a-M,E),u=Math.min(u-A,I),h=Math.min(h-M,S),m=Math.max(m-A,T)}return o},j=(t,e,o)=>{const n=e||{};if(!Z(n.behavior))throw new TypeError(x("scrollIntoView","Element",n.behavior));It(t,n).forEach(([s,c])=>{wt(s,c,o)})};window.onbeforeunload=function(){window.scrollTo(0,0)};let P=0;function St(){P&&clearTimeout(P);const t=document.getElementById("middle-element"),e=document.getElementById("end-element");t&&e&&(j(t,{behavior:"smooth"}),P=setTimeout(()=>{j(e,{behavior:"smooth"})},1700))}const Tt=document.getElementById("sroll-to-end");Tt?.addEventListener("click",St);const N=new URL(window.location.href),Bt=N.hash!==""?N.hash.slice(2):"undefined",L=Bt.split("/");L[0]==="consent"&&(window.location.href=`/authorize#${L[1]}`);L[0]==="installed"&&(window.location.href=`/installed#${L[1]}`);const qt=document.querySelectorAll(".today .section"),U=document.querySelector(".scrollIconContainer"),At=document.querySelector(".shadow"),Mt=document.getElementById("title"),Dt=document.querySelector(".figuresContainer");document.querySelector(".floatingFigures");const Pt=document.querySelector(".grid"),Vt=document.querySelectorAll(".floatGradient"),V=document.getElementById("mainLogo"),O=document.getElementById("today"),Y=document.getElementById("envision"),Ot=document.getElementById("bleachAnimation");let f=0;const G=document.getElementById("logoSection"),K=100,J=.05;let v=!1,Q=!1,y=0;const Yt={threshold:.1,rootMargin:"-99% 0% 0%"},_t=new IntersectionObserver((t,e)=>{t.forEach(o=>{if(o.isIntersecting){if(o.target.id==="animationTrigger"&&f<=0&&(Mt?.classList.add("animate-fadeOut","titleBleach"),o.target.querySelector(".subtitle")?.classList.add("animate-fadeOut","titleBleach"),Pt?.classList.add("animate-fadeOut","figuresBleach"),Dt?.classList.add("animate-collapse3d","figuresBleach"),Vt.forEach(n=>{n.removeAttribute("style"),n.classList.add("animate-fadeOut","figuresBleach")}),At?.classList.add("bg-1"),!v)){v=!0,y=window.scrollY;let n=setInterval(()=>{f<1?(f=f+J,document.documentElement.style.setProperty("--bleachProgress",f.toString())):(setTimeout(()=>{window.scrollTo(0,y+window.innerHeight+2e3),v=!1},1e3),clearInterval(n),Y?.classList.remove("hidden"),O?.classList.add("translate-y-0"),V?.classList.add("logo--contrast"),G?.classList.remove("opacity-0"))},K)}if(o.target.id==="animationTrigger"&&f>0&&(Y?.classList.add("hidden"),V?.classList.remove("logo--contrast"),O?.classList.remove("translate-y-0"),G?.classList.add("opacity-0"),!v)){v=!0,y=window.scrollY;let n=setInterval(()=>{f>0?(f=f-J,document.documentElement.style.setProperty("--bleachProgress",f.toString())):(setTimeout(()=>{v=!1,window.scrollTo(0,y-window.innerHeight)},1e3),clearInterval(n))},K)}o.target.querySelectorAll(".subtitle").forEach(n=>{n.classList.remove("animate-fadeOut","hidden")}),o.target.querySelectorAll(".subtitle").forEach(n=>{n.classList.add("animate-riseIn")})}else o.target.querySelectorAll(".subtitle").forEach(n=>{n.classList.remove("animate-riseIn")}),o.target.querySelectorAll(".subtitle").forEach(n=>{n.classList.add("animate-fadeOut")})})},Yt);qt.forEach(t=>{_t.observe(t)});document.addEventListener("scroll",()=>{v||requestAnimationFrame(Ht),Ot&&f===0&&(Y?.classList.add("hidden"),O?.classList.remove("translate-y-0"),V?.classList.remove("logo--contrast")),!Q&&window.scrollY>400&&(U?.classList.add("opacity-0"),Q=!0,setTimeout(()=>{U?.classList.add("hidden")},400))},{passive:!0});const Ht=()=>{document.documentElement.style.setProperty("--scroll",(window.scrollY/(document.body.offsetHeight-window.innerHeight)).toString())};document.getElementById("envision");document.getElementById("welcomeSection");const kt=document.querySelectorAll(".envision .section"),Wt={threshold:0,rootMargin:"-40% 0% -60%"},Ct=new IntersectionObserver((t,e)=>{t.forEach(o=>{o.isIntersecting?(o.target.classList.remove("opacity-0"),o.target.querySelector(".subtitle")?.classList.remove("animate-fadeOut","hidden"),o.target.querySelector(".subtitle")?.classList.add("animate-riseIn"),o.target.querySelector(".title")?.classList.add("animate-riseIn")):(o.target.querySelector(".subtitle")?.classList.remove("animate-riseIn"),o.target.querySelector(".subtitle")?.classList.add("'animate-fadeOut'"),o.target.querySelector(".title")?.classList.remove("animate-riseIn"),o.target.classList.add("opacity-0"))})},Wt);kt.forEach(t=>{Ct.observe(t)});const Xt=document.querySelectorAll(".floatIcon"),$t=1200;Xt.forEach(t=>{t.style.animationDelay=$t+Math.floor(Math.random()*4200)+"ms"});
