(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6705],{98345:(e,t,r)=>{Promise.resolve().then(r.bind(r,33565)),Promise.resolve().then(r.bind(r,10912)),Promise.resolve().then(r.bind(r,85025))},33565:(e,t,r)=>{"use strict";r.d(t,{default:()=>s});var a=r(57437),n=r(2265);let l=e=>e.replace(/&(#(\d+)|[a-zA-Z]+);/g,(e,t,r)=>{if(r)return String.fromCharCode(parseInt(r,10));switch(t){case"amp":return"&";case"lt":return"<";case"gt":return">";case"quot":return'"';case"#39":case"apos":return"'";case"#47":return"/";case"#96":return"`";case"#61":return"=";default:return e}});function s(){let[e,t]=(0,n.useState)(""),[r,s]=(0,n.useState)("");return(0,a.jsxs)("div",{className:"w-full",children:[(0,a.jsx)("textarea",{value:e,onChange:e=>{t(e.target.value);try{s(l(e.target.value))}catch(e){s("Error! The string to be decoded is not correctly encoded.")}},placeholder:"Enter your text here",rows:6,className:"my-2 w-full max-w-2xl textarea textarea-bordered textarea-md"}),(0,a.jsx)("h2",{className:"font-bold",children:"Result:"}),(0,a.jsx)("textarea",{value:r,placeholder:"Output here",readOnly:!0,rows:6,className:"my-2 w-full max-w-2xl textarea textarea-bordered textarea-md"})]})}},10912:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"BailoutToCSR",{enumerable:!0,get:function(){return n}});let a=r(55592);function n(e){let{reason:t,children:r}=e;if("undefined"==typeof window)throw new a.BailoutToCSRError(t);return r}},85025:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"PreloadChunks",{enumerable:!0,get:function(){return u}});let a=r(57437),n=r(54887),l=r(98011),s=r(35759);function u(e){let{moduleIds:t}=e;if("undefined"!=typeof window)return null;let r=l.workAsyncStorage.getStore();if(void 0===r)return null;let u=[];if(r.reactLoadableManifest&&t){let e=r.reactLoadableManifest;for(let r of t){if(!e[r])continue;let t=e[r].files;u.push(...t)}}return 0===u.length?null:(0,a.jsx)(a.Fragment,{children:u.map(e=>{let t=r.assetPrefix+"/_next/"+(0,s.encodeURIPath)(e);return e.endsWith(".css")?(0,a.jsx)("link",{precedence:"dynamic",href:t,rel:"stylesheet",as:"style"},e):((0,n.preload)(t,{as:"script",fetchPriority:"low"}),null)})})}}},e=>{var t=t=>e(e.s=t);e.O(0,[7130,6215,1744],()=>t(98345)),_N_E=e.O()}]);