import{j as p,c as N,M as ne,H as oe}from"./MaxW.d2566372.js";import{r as w,R as se}from"./index.f1bc5ebf.js";import{F as re}from"./Footer.5d734d1e.js";let ie=0;function ue(t,s){const u=`atom${++ie}`,d={toString:()=>u};return typeof t=="function"?d.read=t:(d.init=t,d.read=S=>S(d),d.write=(S,_,a)=>_(d,typeof a=="function"?a(S(d)):a)),s&&(d.write=s),d}const j=t=>"init"in t,F=t=>!!t.write,C=new WeakMap,ce=(t,s)=>{C.set(t,s),t.catch(()=>{}).finally(()=>C.delete(t))},q=(t,s)=>{const u=C.get(t);u&&(C.delete(t),u(s))},$=(t,s)=>{t.status="fulfilled",t.value=s},J=(t,s)=>{t.status="rejected",t.reason=s},L=(t,s)=>"v"in t&&"v"in s&&Object.is(t.v,s.v),Y=(t,s)=>"e"in t&&"e"in s&&Object.is(t.e,s.e),X=t=>"v"in t&&t.v instanceof Promise,x=t=>{if("e"in t)throw t.e;return t.v},le=()=>{const t=new WeakMap,s=new WeakMap,u=new Map;let d,S,_;({PUBLIC_SVC_URL:"https://relay.mee.foundation",BASE_URL:'"/"',MODE:"production",DEV:!1,PROD:!0,SSR:!1,SITE:'"https://mee.foundation"',ASSETS_PREFIX:void 0}&&"production")!=="production"&&(d=new Set,S=new Set,_=new Set);const a=e=>t.get(e),m=(e,n)=>{({PUBLIC_SVC_URL:"https://relay.mee.foundation",BASE_URL:'"/"',MODE:"production",DEV:!1,PROD:!0,SSR:!1,SITE:'"https://mee.foundation"',ASSETS_PREFIX:void 0}&&"production")!=="production"&&Object.freeze(n);const o=t.get(e);if(t.set(e,n),u.has(e)||u.set(e,o),o&&X(o)){const r="v"in n?n.v instanceof Promise?n.v:Promise.resolve(n.v):Promise.reject(n.e);q(o.v,r)}},P=(e,n,o)=>{const r=new Map;let i=!1;o.forEach(c=>{const l=c===e?n:a(c);l?(r.set(c,l),n.d.get(c)!==l&&(i=!0)):({PUBLIC_SVC_URL:"https://relay.mee.foundation",BASE_URL:'"/"',MODE:"production",DEV:!1,PROD:!0,SSR:!1,SITE:'"https://mee.foundation"',ASSETS_PREFIX:void 0}&&"production")!=="production"&&console.warn("[Bug] atom state not found")}),(i||n.d.size!==r.size)&&(n.d=r)},E=(e,n,o)=>{const r=a(e),i={d:r?.d||new Map,v:n};return o&&P(e,i,o),r&&L(r,i)&&r.d===i.d?r:(m(e,i),i)},b=(e,n,o)=>{const r=a(e),i={d:r?.d||new Map,e:n};return o&&P(e,i,o),r&&Y(r,i)&&r.d===i.d?r:(m(e,i),i)},g=e=>{const n=a(e);if(n&&(n.d.forEach((f,R)=>{R!==e&&!s.has(R)&&g(R)}),Array.from(n.d).every(([f,R])=>f===e||a(f)===R)))return n;const o=new Set;let r=!0;const i=f=>{if(o.add(f),f===e){const h=a(f);if(h)return x(h);if(j(f))return f.init;throw new Error("no atom init")}const R=g(f);return x(R)};let c,l;const y={get signal(){return c||(c=new AbortController),c.signal},get setSelf(){return({PUBLIC_SVC_URL:"https://relay.mee.foundation",BASE_URL:'"/"',MODE:"production",DEV:!1,PROD:!0,SSR:!1,SITE:'"https://mee.foundation"',ASSETS_PREFIX:void 0}&&"production")!=="production"&&!F(e)&&console.warn("setSelf function cannot be used with read-only atom"),!l&&F(e)&&(l=(...f)=>{if(({PUBLIC_SVC_URL:"https://relay.mee.foundation",BASE_URL:'"/"',MODE:"production",DEV:!1,PROD:!0,SSR:!1,SITE:'"https://mee.foundation"',ASSETS_PREFIX:void 0}&&"production")!=="production"&&r&&console.warn("setSelf function cannot be called in sync"),!r)return I(e,...f)}),l}};try{const f=e.read(i,y);if(f instanceof Promise){let R;const h=new Promise((v,te)=>{let D=!1;f.then(A=>{D||(D=!0,E(e,h,o),$(h,A),v(A))},A=>{D||(D=!0,E(e,h,o),J(h,A),te(A))}),R=A=>{D||(D=!0,A.then(M=>$(h,M),M=>J(h,M)),v(A))}});return h.status="pending",ce(h,v=>{v&&R(v),c?.abort()}),E(e,h,o)}return E(e,f,o)}catch(f){return b(e,f,o)}finally{r=!1}},z=e=>x(g(e)),Q=e=>{let n=s.get(e);return n||(n=O(e)),n},V=(e,n)=>!n.l.size&&(!n.t.size||n.t.size===1&&n.t.has(e)),Z=e=>{const n=s.get(e);n&&V(e,n)&&T(e)},B=e=>{const n=s.get(e);n?.t.forEach(o=>{if(o!==e){const r=a(o),i=g(o);(!r||!L(r,i))&&B(o)}})},W=(e,...n)=>{let o=!0;const r=l=>x(g(l)),i=(l,...y)=>{let f;if(l===e){if(!j(l))throw new Error("atom not writable");const R=a(l),h=E(l,y[0]);(!R||!L(R,h))&&B(l)}else f=W(l,...y);return o||U(),f},c=e.write(r,i,...n);return o=!1,c},I=(e,...n)=>{const o=W(e,...n);return U(),o},O=(e,n)=>{const o={t:new Set(n&&[n]),l:new Set};if(s.set(e,o),({PUBLIC_SVC_URL:"https://relay.mee.foundation",BASE_URL:'"/"',MODE:"production",DEV:!1,PROD:!0,SSR:!1,SITE:'"https://mee.foundation"',ASSETS_PREFIX:void 0}&&"production")!=="production"&&_.add(e),g(e).d.forEach((r,i)=>{const c=s.get(i);c?c.t.add(e):i!==e&&O(i,e)}),g(e),F(e)&&e.onMount){const r=e.onMount((...i)=>I(e,...i));r&&(o.u=r)}return o},T=e=>{var n;const o=(n=s.get(e))==null?void 0:n.u;o&&o(),s.delete(e),({PUBLIC_SVC_URL:"https://relay.mee.foundation",BASE_URL:'"/"',MODE:"production",DEV:!1,PROD:!0,SSR:!1,SITE:'"https://mee.foundation"',ASSETS_PREFIX:void 0}&&"production")!=="production"&&_.delete(e);const r=a(e);r?(X(r)&&q(r.v),r.d.forEach((i,c)=>{if(c!==e){const l=s.get(c);l&&(l.t.delete(e),V(c,l)&&T(c))}})):({PUBLIC_SVC_URL:"https://relay.mee.foundation",BASE_URL:'"/"',MODE:"production",DEV:!1,PROD:!0,SSR:!1,SITE:'"https://mee.foundation"',ASSETS_PREFIX:void 0}&&"production")!=="production"&&console.warn("[Bug] could not find atom state to unmount",e)},ee=(e,n,o)=>{const r=new Set(n.d.keys());o?.forEach((i,c)=>{if(r.has(c)){r.delete(c);return}const l=s.get(c);l&&(l.t.delete(e),V(c,l)&&T(c))}),r.forEach(i=>{const c=s.get(i);c?c.t.add(e):s.has(e)&&O(i,e)})},U=()=>{for(;u.size;){const e=Array.from(u);u.clear(),e.forEach(([n,o])=>{const r=a(n);if(r){r.d!==o?.d&&ee(n,r,o?.d);const i=s.get(n);i&&!(o&&!X(o)&&(L(o,r)||Y(o,r)))&&i.l.forEach(c=>c())}else({PUBLIC_SVC_URL:"https://relay.mee.foundation",BASE_URL:'"/"',MODE:"production",DEV:!1,PROD:!0,SSR:!1,SITE:'"https://mee.foundation"',ASSETS_PREFIX:void 0}&&"production")!=="production"&&console.warn("[Bug] no atom state to flush")})}({PUBLIC_SVC_URL:"https://relay.mee.foundation",BASE_URL:'"/"',MODE:"production",DEV:!1,PROD:!0,SSR:!1,SITE:'"https://mee.foundation"',ASSETS_PREFIX:void 0}&&"production")!=="production"&&(d.forEach(e=>e()),S.forEach(e=>e("state")))},H=(e,n)=>{const o=Q(e);U();const r=o.l;return r.add(n),({PUBLIC_SVC_URL:"https://relay.mee.foundation",BASE_URL:'"/"',MODE:"production",DEV:!1,PROD:!0,SSR:!1,SITE:'"https://mee.foundation"',ASSETS_PREFIX:void 0}&&"production")!=="production"&&S.forEach(i=>i("sub")),()=>{r.delete(n),Z(e),({PUBLIC_SVC_URL:"https://relay.mee.foundation",BASE_URL:'"/"',MODE:"production",DEV:!1,PROD:!0,SSR:!1,SITE:'"https://mee.foundation"',ASSETS_PREFIX:void 0}&&"production")!=="production"&&S.forEach(i=>i("unsub"))}};return({PUBLIC_SVC_URL:"https://relay.mee.foundation",BASE_URL:'"/"',MODE:"production",DEV:!1,PROD:!0,SSR:!1,SITE:'"https://mee.foundation"',ASSETS_PREFIX:void 0}&&"production")!=="production"?{get:z,set:I,sub:H,dev_subscribe_state:e=>(console.warn("[DEPRECATED] dev_subscribe_state is deprecated and will be removed in the next minor version. use dev_subscribe_store instead."),d.add(e),()=>{d.delete(e)}),dev_subscribe_store:e=>(S.add(e),()=>{S.delete(e)}),dev_get_mounted_atoms:()=>_.values(),dev_get_atom_state:e=>t.get(e),dev_get_mounted:e=>s.get(e),dev_restore_atoms:e=>{for(const[n,o]of e)j(n)&&(E(n,o),B(n));U()}}:{get:z,set:I,sub:H}};let k;const de=()=>(k||(k=le()),k),ae=w.createContext(void 0),K=t=>{const s=w.useContext(ae);return t?.store||s||de()},fe=t=>t instanceof Promise,Se=se.use||(t=>{if(t.status==="pending")throw t;if(t.status==="fulfilled")return t.value;throw t.status==="rejected"?t.reason:(t.status="pending",t.then(s=>{t.status="fulfilled",t.value=s},s=>{t.status="rejected",t.reason=s}),t)});function Ee(t,s){const u=K(s),[[d,S,_],a]=w.useReducer(E=>{const b=u.get(t);return Object.is(E[0],b)&&E[1]===u&&E[2]===t?E:[b,u,t]},void 0,()=>[u.get(t),u,t]);let m=d;(S!==u||_!==t)&&(a(),m=u.get(t));const P=s?.delay;return w.useEffect(()=>{const E=u.sub(t,()=>{if(typeof P=="number"){setTimeout(a,P);return}a()});return a(),E},[u,t,P]),w.useDebugValue(m),fe(m)?Se(m):m}function pe(t,s){const u=K(s);return w.useCallback((...S)=>{if(({PUBLIC_SVC_URL:"https://relay.mee.foundation",BASE_URL:'"/"',MODE:"production",DEV:!1,PROD:!0,SSR:!1,SITE:'"https://mee.foundation"',ASSETS_PREFIX:void 0}&&"production")!=="production"&&!("write"in t))throw new Error("not writable atom");return u.set(t,...S)},[u,t])}function he(t,s){return[Ee(t,s),pe(t,s)]}const G=({title:t,onClick:s,icon:u,isSecondary:d=!1})=>p.jsxs("button",{className:N("h-9 pr-4 text-sm font-bold shadow-sm flex items-center gap-3 hover:shadow-lg",d?"bg-secondary-content":"bg-primary",u?"pl-1":"pl-4"),type:"button",onClick:s,children:[u&&p.jsx("img",{className:"w-6 h-6 pl-1",alt:"button icon",src:u}),p.jsx("p",{className:N(d?"text-primary":"text-primary-content","text-center w-full"),children:t})]}),Re=ue(!1),_e=/^[\w-.]+@([\w-]+\.)+[\w-]{2,10}$/g,Ae=()=>{const[t,s]=w.useState(null),[u,d]=he(Re),[S,_]=w.useState(void 0);w.useEffect(()=>{try{const E=localStorage.getItem("userData");if(E===null){window.location.href="/";return}const b=JSON.parse(window.atob(E));s(b),_(b?.data.email),localStorage.clear()}catch{window.location.href="/"}},[]);const a=t?.data?.name,[m,P]=w.useState(null);return p.jsx(ne,{children:p.jsxs("div",{"data-theme":"meeTheme",children:[p.jsx(oe,{}),p.jsxs("div",{className:"max-w-86 mx-auto min-h-screen px-4 py-5 text-black",children:[p.jsxs("h1",{children:["Hello, ",a,"!"]}),p.jsx("p",{className:"pb-4 pt-2",children:u?"You successfully subscribed to our newsletter.":"Would you like to subscribe to our newsletter and receive updates related to The Mee Foundation activities?"}),u||p.jsxs("div",{children:[p.jsx("input",{placeholder:"Email",className:N("border-alt-color-6 w-full border px-2 py-2 outline-none focus:border-primary",m&&"border-red-500 focus:border-red-500"),value:S,onChange:E=>{P(null),_(E.currentTarget.value)}}),p.jsx("p",{className:"text-red-500 text-sm",children:m})]}),p.jsxs("div",{className:"mx-auto flex w-32 flex-col gap-4 pt-8",children:[u||p.jsx(G,{title:"Subscribe",onClick:()=>{if(typeof S>"u"||!S.trim().match(_e)){P("Incorrect Email");return}d(!0)}}),p.jsx(G,{title:"Back",onClick:()=>{window.location.href="/"}})]})]}),p.jsx(re,{})]})})};export{Ae as SubscribePage};
