import{i as E,M as m}from"./mee-js-sdk.es.ed8c063b.js";const L=t=>{E({client_metadata:{client_name:"Mee Foundation",logo_uri:"https://mee.foundation/favicon.png",display_url:"mee.foundation",contacts:[]},redirect_uri:"https://mee.foundation/",claims:{id_token:{name:{attribute_type:"https://schema.org/name",name:"First Name",typ:"string",essential:!0,retention_duration:m.whileUsingApp,business_purpose:"",is_sensitive:!0},email:{attribute_type:"https://schema.org/email",name:"Email",typ:"email",essential:!1,retention_duration:m.whileUsingApp,business_purpose:"",is_sensitive:!0}}}},n=>{localStorage.setItem("userData",window.btoa(JSON.stringify(n))),n!==null&&typeof n?.data<"u"&&typeof n?.data.name<"u"?window.location.href="/congratulation":t()})},v=3e3,r=document.querySelector(".scrollContainer"),_=.1;if(r){const t=()=>{const n=r.getBoundingClientRect().height-1;document.body.style.height=Math.floor(n)+"px"};t(),document.fonts.ready.then(function(){t()})}let a=0;const u=()=>{a+=Math.floor((window.pageYOffset-a)*_);const t="translateY(-"+a+"px)";r.style.transform=t,requestAnimationFrame(u)};r&&requestAnimationFrame(u);const i=document.getElementById("connectionErrAlert"),b=()=>{i&&i.classList.remove("hidden"),setTimeout(()=>{i&&i.classList.add("hidden")},v)};L(b);window.addEventListener("scroll",I);const S=document.getElementById("today");function I(){if(S)return;const t=document.getElementById("scroll-indicator");if(t){const n=document.body.scrollTop||document.documentElement.scrollTop;let s=document.documentElement.scrollHeight-document.documentElement.clientHeight;const c=B(n,s);t.style.width=c+"%"}}const o=document.getElementById("animation-control"),e=document.getElementById("sroll-to-end");function h(){e&&o&&(o.classList.add("white"),o.classList.remove("gray"),e.classList.add("white"),e.classList.add("text-white"),e.classList.add("border-white"),e.classList.remove("gray"),e.classList.remove("text-gray"),e.classList.remove("border-gray"))}function g(){e&&o&&(o.classList.add("gray"),o.classList.remove("white"),e.classList.add("gray"),e.classList.add("text-gray"),e.classList.add("border-gray"),e.classList.remove("white"),e.classList.remove("text-white"),e.classList.remove("border-white"))}window.addEventListener("scrollToEnv",()=>{g()});window.addEventListener("envSectionShown",()=>{g()});window.addEventListener("scrollToToday",()=>{h()});window.addEventListener("todaySectionShown",()=>{h()});function B(t,n){const s=document.getElementById("envision"),c=document.getElementById("today"),y=document.getElementById("header"),f=document.documentElement.style.getPropertyValue("--bleachProgress");if(Number(f)>=1&&s&&y)if(s.getBoundingClientRect().height){const p=window.screen.height,w=2,d=c?.getBoundingClientRect().height-w*p||0,l=(t-d)/(n-d)*100;return l>0?l:0}else return 0;return t/n*100}
