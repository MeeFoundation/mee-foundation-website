import"./hoisted.ebd3b2f4.js";import"./hoisted.297b6d89.js";const a=document.querySelectorAll(".aboutText"),o=document.querySelector(".platform"),n=document.querySelectorAll(".platform__item"),c=document.querySelector(".platform__subtitle"),i={threshold:0},l=new IntersectionObserver((e,r)=>{e.forEach(t=>{t.isIntersecting?t.target.classList.add("animate-riseIn-long"):t.target.classList.remove("animation-delay-800")})},i),m=new IntersectionObserver((e,r)=>{e.forEach(t=>{t.isIntersecting&&(n.forEach(s=>s.classList.add("animate-moveCard")),c?.classList.add("animate-riseIn","marker"))})},{threshold:.1});a.forEach(e=>{l.observe(e)});o&&m.observe(o);
