import{r as m}from"./index.03be2d59.js";function c(e){var r,o,t="";if(typeof e=="string"||typeof e=="number")t+=e;else if(typeof e=="object")if(Array.isArray(e))for(r=0;r<e.length;r++)e[r]&&(o=c(e[r]))&&(t&&(t+=" "),t+=o);else for(r in e)e[r]&&(t&&(t+=" "),t+=r);return t}function p(){for(var e,r,o=0,t="";o<arguments.length;)(e=arguments[o++])&&(r=c(e))&&(t&&(t+=" "),t+=r);return t}var u={exports:{}},a={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var x=m,y=Symbol.for("react.element"),d=Symbol.for("react.fragment"),g=Object.prototype.hasOwnProperty,_=x.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,b={key:!0,ref:!0,__self:!0,__source:!0};function f(e,r,o){var t,n={},i=null,l=null;o!==void 0&&(i=""+o),r.key!==void 0&&(i=""+r.key),r.ref!==void 0&&(l=r.ref);for(t in r)g.call(r,t)&&!b.hasOwnProperty(t)&&(n[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps,r)n[t]===void 0&&(n[t]=r[t]);return{$$typeof:y,type:e,key:i,ref:l,props:n,_owner:_.current}}a.Fragment=d;a.jsx=f;a.jsxs=f;u.exports=a;var s=u.exports;const v={src:"/assets/mee_logo.6a561cc8.svg",width:68,height:20,format:"svg"},h=()=>s.jsx("button",{type:"button",className:"py-2 text-base leading-3 text-primary",onClick:()=>{},children:"Sign Out"}),w=()=>{const[e]=[null],r=e!==null;return s.jsxs("div",{className:p(r?"justify-between":"justify-start","header flex max-w-full flex-row items-center border-b border-primary bg-primary-content px-3.5 lg:px-0"),children:[s.jsx("button",{type:"button",onClick:()=>{window.location.href="/"},children:s.jsx("img",{src:v.src,alt:"mee-logo",className:"my-5 h-4"})}),r&&s.jsx(h,{})]})},O=({children:e})=>s.jsx("div",{className:"bg-primary-content overflow-auto",children:s.jsx("div",{className:"min-w-[320px] max-w-5xl mx-auto",children:e})});export{w as H,O as M,v as a,p as c,s as j};
