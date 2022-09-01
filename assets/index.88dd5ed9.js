import{j as c,a as d,u as p,b as f,c as h,d as v,H as b,r as g,R as x,e as u,N as q,f as N,g as y}from"./vendor.a51febee.js";const w=function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}};w();const e=c.exports.jsx,t=c.exports.jsxs,j=c.exports.Fragment,P=()=>e("div",{className:"p-3",children:e("p",{className:"text-primary font-medium",children:"Loading..."})}),S=({children:a})=>e("div",{className:"bg-primary-content",children:e("div",{className:"max-w-5xl mx-auto",children:a})});var A="/assets/appStore.a26fc5b3.svg";const M="https://apps.apple.com/us/app/testflight/id899247664",C=()=>e("div",{className:"h-screen flex flex-row items-center justify-center",children:e("button",{type:"button",onClick:()=>{navigator.clipboard.writeText(window.location.href),window.location.href=M},className:"",children:e("img",{alt:"App Store",src:A})})});var D="/assets/head.360471c4.svg";const F=()=>t("div",{className:"footer mt-16 max-w-full flex flex-col items-shrink relative",children:[e("div",{className:"w-full bg-primary flex flex-col items-center z-10",children:e("div",{className:"w-full px-4 py-5",children:e("div",{className:"flex-col justify-start text-2xs md:text-sm leading-3 text-primary-content",children:e("p",{className:"leading-4",children:"\xA9 2022 The Mee Project, Inc."})})})}),e("img",{src:D,alt:"mee-illustration-2",className:"w-23 h-21 absolute -top-7 right-0 left-0 m-auto"})]}),m=d(null);var I="/assets/mee_logo.6a561cc8.svg";const k=()=>{const a=v(m);return e("button",{type:"button",className:"text-primary text-base leading-3",onClick:()=>{a(null)},children:"Sign Out"})},L=()=>{const[a]=p(m),l=a!==null,n=f();return t("div",{className:h(l?"justify-between":"justify-start","header bg-primary-content max-w-full flex flex-row items-center border-b border-primary px-3.5 md:px-0"),children:[e("button",{type:"button",onClick:()=>{n("/")},children:e("img",{src:I,alt:"mee-logo",className:"h-4 my-5"})}),l&&e(k,{})]})};var V="/assets/mee_illustration_1.cc6d37dc.jpg",E="/assets/ownership.87f28e59.svg",O="/assets/privacy.7598906c.svg",Q="/assets/power.5dcf5aaf.svg";const R=()=>t(j,{children:[e(L,{}),t("div",{className:"max-w-256 mx-auto",children:[t("div",{className:"sub-header bg-primary flex flex-col items-center",children:[t("div",{className:"flex flex-wrap justify-center text-center font-ps my-4 whitespace-pre-wrap text-2xl lg:text-3xl leading-7",children:[e("h1",{className:"text-secondary",children:e("b",{children:"Hello."})}),e("h1",{children:" "}),t("h1",{className:"text-primary-content",children:["It's"," ",e("i",{children:"Mee"}),"."]})]}),e("img",{src:V,alt:"mee-illustration",className:""}),t("div",{className:"my-7 w-full sm:px-10 md:px-15 px-4 text-center",children:[e("p",{className:"text-primary-content ",children:"Today, our online selves \u2014 our preferences, interests, affiliations, social networks, medical records, locations, and so on \u2014 are owned by others. Our data is harvested by corporations that monetize it for their advantage, not ours."}),e("p",{className:"text-secondary",children:"Good for them. Bad for us."})]})]}),t("div",{className:"content max-w-full flex flex-col items-center",children:[e("div",{className:"my-9 md:my-10 sm:px-28 md:px-60 px-4 w-full text-center",children:e("p",{className:"text-primary",children:"Our mission is to enable human-centered, high-trust, private relationships between internet users and service providers (e.g., apps, websites, etc.). The Mee Project is developing the governance and decentralized, human-centered software technology necessary to support these relationships."})}),t("div",{className:"w-full flex flex-row flex-wrap",children:[t("div",{className:"bg-alt-color-1 h-34 md:h-42 min-w-[225px] ssm:min-w-[200px] flex-1 flex flex-col justify-between pt-4 pl-4 pr-6",children:[t("span",{className:"text-landing-secondary-text",children:[e("b",{children:"More Ownership."}),e("br",{}),"Data rights are human rights."]}),e("div",{className:"w-10 h-10 p-2 mt-auto mb-6 sm:mb-5 rounded-full bg-white",children:e("img",{src:E,alt:"ownership",className:"ml-0.5"})})]}),t("div",{className:"bg-alt-color-2 h-34 md:h-42 min-w-[225px] ssm:min-w-[200px] flex-1 flex flex-col justify-between pt-4 pl-4 pr-6",children:[t("span",{className:"text-primary-content",children:[e("b",{children:"More privacy."}),e("br",{}),"Control what others know about you."]}),e("div",{className:"w-10 h-10 p-2 mt-auto mb-6 sm:mb-5 rounded-full bg-white",children:e("img",{src:O,alt:"privacy",className:""})})]}),t("div",{className:"bg-alt-color-3 h-34 md:h-42 min-w-[225px] ssm:min-w-[200px] flex-1 flex flex-col justify-between pt-4 pl-4 pr-6",children:[t("span",{className:"text-landing-secondary-text",children:[e("b",{children:"More power."}),e("br",{}),"The future is Mee-compatible apps."]}),e("div",{className:"w-10 h-10 p-2 mt-auto mb-6 sm:mb-5 rounded-full bg-white",children:e("img",{src:Q,alt:"power",className:""})})]})]}),t("div",{children:[e("h2",{className:"text-primary text-xl md:text-2xl text-center mt-8 mb-3 mx-2",children:e("b",{children:"Good for everyone."})}),t("p",{className:"text-primary text-center text-base md:text-xl",children:["We\u2019re not-for-profit and open-source. Curious?",e("br",{}),"Email us at"," ",e("b",{children:"hello@getmee.org"})]})]})]}),e(F,{})]})]});var T="/assets/MeeCertifiedMark.03a36b14.svg";const _=()=>t("div",{className:"max-w-256 mx-auto pt-5 md:pt-48 pb-48 px-5 md:px-0 text-[#111827]",children:[t("div",{className:"flex flex-col md:flex-row items-center justify-center pb-11 gap-5",children:[e("img",{className:"h-20",alt:"mee certified mark",src:T}),e("h1",{className:"text-center text-7xl font-bold",children:"Mee Certified"})]}),e("p",{className:"pb-5",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce in purus pellentesque, iaculis nibh a, tincidunt dolor. Donec tellus diam, aliquet vel lacinia et, volutpat id velit. Nulla sit amet eleifend justo. Ut faucibus justo erat, sed rutrum risus bibendum quis. Nulla id iaculis ipsum. Quisque vehicula, libero quis convallis luctus, leo justo commodo nulla, eget luctus magna quam eu metus. Nam consequat urna augue, non feugiat lorem laoreet dapibus. Etiam nunc est, efficitur sit amet sem sit amet, iaculis accumsan mi. Vivamus condimentum quam quis vulputate eleifend. Nullam vitae massa ipsum. Cras sit amet massa ligula. Vestibulum nisl nunc, accumsan eu consectetur eget, sollicitudin sed urna. Aliquam id consequat velit. Donec vel dictum tortor."}),e("p",{className:"pb-5",children:"Sed hendrerit tellus vel est porttitor, quis consectetur quam suscipit. Aliquam congue fringilla massa, sed hendrerit sem blandit elementum. Nulla dapibus lorem massa, et consequat felis viverra condimentum. Nunc eu ultricies felis. Etiam sit amet enim tempor, lacinia purus auctor, consectetur sem. Fusce dictum enim ac lacus convallis, at scelerisque quam consequat. Nam eros urna, tempor sed aliquam nec, dapibus sit amet lectus. Nunc tincidunt sed arcu sed rhoncus. Donec volutpat ipsum neque, non eleifend neque commodo a. Donec lectus leo, faucibus id ante eu, lobortis vehicula diam. Quisque at neque vel sem faucibus faucibus id vel urna. Donec mattis arcu in fermentum volutpat."}),e("p",{className:"pb-5",children:"Suspendisse id nibh a nisi congue fermentum non ut felis. Proin eget risus bibendum, aliquet justo vitae, iaculis felis. Aenean eget pharetra quam, at bibendum dolor. Vestibulum nulla nulla, feugiat sed hendrerit vel, venenatis non diam. Curabitur gravida augue et augue hendrerit aliquam. Vivamus ac felis vitae velit gravida elementum. Aliquam tempor ultrices augue, a lobortis ligula iaculis a. Fusce rhoncus urna nec felis vehicula, id aliquet metus auctor. Nulla facilisi. Phasellus vestibulum nunc dictum convallis dictum. Duis ornare rhoncus orci nec pulvinar. Aenean at sem urna. Etiam eu tincidunt dui. Cras id quam at sem pretium pharetra."}),e("p",{className:"pb-5",children:"Fusce malesuada eros sit amet auctor consequat. Quisque varius diam at mi accumsan, in vestibulum erat finibus. Phasellus laoreet leo sed tellus sollicitudin, vel cursus est convallis. Sed libero diam, mollis et tristique non, egestas sit amet erat. Sed accumsan nibh in neque pharetra, nec consectetur nisi vulputate. Nam sit amet molestie purus. Curabitur lobortis libero nisl, at ornare leo congue non. Nullam faucibus risus id ultricies semper. Duis consectetur consequat odio sit amet eleifend. Maecenas eget risus interdum est viverra interdum. Sed non nibh pretium, tristique nisl vel, placerat tortor. Integer faucibus augue et consectetur accumsan. Aenean euismod luctus varius. Integer aliquam facilisis enim, quis scelerisque quam egestas vel. Morbi nec dictum erat, ac viverra lorem."}),e("p",{className:"pb-5",children:"Cras lobortis sodales finibus. Fusce at arcu ut justo mollis elementum non at sem. In odio nisl, aliquam vitae massa id, eleifend aliquam lectus. Pellentesque nec lacus tincidunt, ultricies odio quis, molestie leo. Sed consectetur ultrices molestie. Vestibulum vulputate pretium risus, eu finibus dolor tristique ac. Proin viverra metus id dolor luctus scelerisque. Praesent a velit in lacus ultricies faucibus ut eget felis. Nulla facilisi. Proin pellentesque, nibh at faucibus convallis, orci odio fringilla quam, eu lacinia elit elit ac quam. Nunc molestie sapien nec orci pulvinar, id fringilla sem congue. Praesent sollicitudin volutpat leo, ultrices blandit ante malesuada id. Quisque ullamcorper dolor et leo rhoncus, ut mattis justo congue. Nunc molestie tincidunt feugiat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce in purus pellentesque, iaculis nibh a, tincidunt dolor. Donec tellus diam, aliquet vel lacinia et, volutpat id velit. Nulla sit amet eleifend justo. Ut faucibus justo erat, sed rutrum risus bibendum quis. Nulla id iaculis ipsum. Quisque vehicula, libero quis convallis luctus, leo justo commodo nulla, eget luctus magna quam eu metus. Nam consequat urna augue, non feugiat lorem laoreet dapibus. Etiam nunc est, efficitur sit amet sem sit amet, iaculis accumsan mi. Vivamus condimentum quam quis vulputate eleifend. Nullam vitae massa ipsum. Cras sit amet massa ligula. Vestibulum nisl nunc, accumsan eu consectetur eget, sollicitudin sed urna. Aliquam id consequat velit. Donec vel dictum tortor."}),e("p",{className:"pb-5",children:"Sed hendrerit tellus vel est porttitor, quis consectetur quam suscipit. Aliquam congue fringilla massa, sed hendrerit sem blandit elementum. Nulla dapibus lorem massa, et consequat felis viverra condimentum. Nunc eu ultricies felis. Etiam sit amet enim tempor, lacinia purus auctor, consectetur sem. Fusce dictum enim ac lacus convallis, at scelerisque quam consequat. Nam eros urna, tempor sed aliquam nec, dapibus sit amet lectus. Nunc tincidunt sed arcu sed rhoncus. Donec volutpat ipsum neque, non eleifend neque commodo a. Donec lectus leo, faucibus id ante eu, lobortis vehicula diam. Quisque at neque vel sem faucibus faucibus id vel urna. Donec mattis arcu in fermentum volutpat."}),e("p",{children:"Suspendisse id nibh a nisi congue fermentum non ut felis. Proin eget risus bibendum, aliquet justo vitae, iaculis felis. Aenean eget pharetra quam, at bibendum dolor. Vestibulum nulla nulla, feugiat sed hendrerit vel, venenatis non diam. Curabitur gravida augue et augue hendrerit aliquam. Vivamus ac felis vitae velit gravida elementum. Aliquam tempor ultrices augue, a lobortis ligula iaculis a. Fusce rhoncus urna nec felis vehicula, id aliquet metus auctor. Nulla facilisi. Phasellus vestibulum nunc dictum convallis dictum. Duis ornare rhoncus orci nec pulvinar. Aenean at sem urna. Etiam eu tincidunt dui. Cras id quam at sem pretium pharetra."}),e("p",{className:"pb-5",children:"Fusce malesuada eros sit amet auctor consequat. Quisque varius diam at mi accumsan, in vestibulum erat finibus. Phasellus laoreet leo sed tellus sollicitudin, vel cursus est convallis. Sed libero diam, mollis et tristique non, egestas sit amet erat. Sed accumsan nibh in neque pharetra, nec consectetur nisi vulputate. Nam sit amet molestie purus. Curabitur lobortis libero nisl, at ornare leo congue non. Nullam faucibus risus id ultricies semper. Duis consectetur consequat odio sit amet eleifend. Maecenas eget risus interdum est viverra interdum. Sed non nibh pretium, tristique nisl vel, placerat tortor. Integer faucibus augue et consectetur accumsan. Aenean euismod luctus varius. Integer aliquam facilisis enim, quis scelerisque quam egestas vel. Morbi nec dictum erat, ac viverra lorem."}),e("p",{className:"pb-5",children:"Cras lobortis sodales finibus. Fusce at arcu ut justo mollis elementum non at sem. In odio nisl, aliquam vitae massa id, eleifend aliquam lectus. Pellentesque nec lacus tincidunt, ultricies odio quis, molestie leo. Sed consectetur ultrices molestie. Vestibulum vulputate pretium risus, eu finibus dolor tristique ac. Proin viverra metus id dolor luctus scelerisque. Praesent a velit in lacus ultricies faucibus ut eget felis. Nulla facilisi. Proin pellentesque, nibh at faucibus convallis, orci odio fringilla quam, eu lacinia elit elit ac quam. Nunc molestie sapien nec orci pulvinar, id fringilla sem congue. Praesent sollicitudin volutpat leo, ultrices blandit ante malesuada id. Quisque ullamcorper dolor et leo rhoncus, ut mattis justo congue. Nunc molestie tincidunt feugiat."})]}),H=()=>e(b,{children:e(S,{children:e(g.exports.Suspense,{fallback:e(P,{}),children:t(x,{children:[e(u,{path:"/",element:e(R,{})}),e(u,{path:"/mee-certified",element:e(_,{})}),e(u,{path:"/consent/:partnerId",element:e(C,{})}),e(u,{path:"*",element:e(q,{to:"/",replace:!0})})]})})})});N.render(e(y.StrictMode,{children:e("div",{className:"font-ps font-normal text-base leading-5 sm:text-sm sm:leading-4 md:text-xl md:leading-6 text-primary-content",children:e(H,{})})}),document.getElementById("root"));
