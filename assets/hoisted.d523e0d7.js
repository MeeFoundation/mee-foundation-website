import"./hoisted.feb2ea6a.js";import"./Header.astro_astro_type_script_index_0_lang.8b84e16d.js";import"./hoisted.e4b9fc9f.js";import"./mee-js-sdk.es.4908cffa.js";const r=document.querySelectorAll(".envision .section"),i={threshold:.8},l=new IntersectionObserver((o,s)=>{o.forEach(e=>{e.isIntersecting&&(e.target.classList.remove("opacity-0"),e.target.querySelector(".subtitle")?.classList.remove("opacity-0"),e.target.querySelector(".subtitle")?.classList.add("animate-riseIn-short","animation-delay-600"))})},i);r.forEach(o=>{l.observe(o)});let t=0;const d=o=>{(document.body.scrollTop||document.documentElement.scrollTop)>0?t=0:t=t+o.deltaY,t<-1e3&&(window.location.href="/from-envision")};document.addEventListener("wheel",d);let n=0,c=0;const a=o=>{n=o.touches[0]?.clientY??0},m=o=>{c=o.touches[0]?.clientY??0},u=()=>{const o=document.body.scrollTop||document.documentElement.scrollTop;n<c&&o===0&&(window.location.href="/from-envision")};document?.addEventListener("touchstart",a);document?.addEventListener("touchmove",m);document?.addEventListener("touchend",u);
