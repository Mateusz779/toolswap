(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6974],{23111:(e,t,r)=>{Promise.resolve().then(r.bind(r,28799)),Promise.resolve().then(r.bind(r,10912)),Promise.resolve().then(r.bind(r,85025))},28799:(e,t,r)=>{"use strict";r.d(t,{default:()=>a});var l=r(57437),n=r(2265);function a(){let[e,t]=(0,n.useState)(""),[r,a]=(0,n.useState)("");return(0,l.jsxs)("div",{children:[(0,l.jsx)("input",{type:"text",placeholder:"Join char",className:"my-2 w-full max-w-2xl input input-bordered",value:r,onChange:e=>a(e.target.value)}),(0,l.jsx)("textarea",{value:e,onChange:e=>t(e.target.value),placeholder:"Enter your text here",rows:6,className:"my-2 w-full max-w-2xl textarea textarea-bordered"}),(0,l.jsx)("h2",{className:"font-bold",children:"Result:"}),(0,l.jsx)("textarea",{value:e.split("\n").map(e=>e.trim()).filter(e=>e.length>0).join(r),placeholder:"Output here",readOnly:!0,rows:6,className:"my-2 w-full max-w-2xl textarea textarea-bordered"})]})}},10912:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"BailoutToCSR",{enumerable:!0,get:function(){return n}});let l=r(55592);function n(e){let{reason:t,children:r}=e;if("undefined"==typeof window)throw new l.BailoutToCSRError(t);return r}},85025:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"PreloadChunks",{enumerable:!0,get:function(){return o}});let l=r(57437),n=r(54887),a=r(98011),s=r(35759);function o(e){let{moduleIds:t}=e;if("undefined"!=typeof window)return null;let r=a.workAsyncStorage.getStore();if(void 0===r)return null;let o=[];if(r.reactLoadableManifest&&t){let e=r.reactLoadableManifest;for(let r of t){if(!e[r])continue;let t=e[r].files;o.push(...t)}}return 0===o.length?null:(0,l.jsx)(l.Fragment,{children:o.map(e=>{let t=r.assetPrefix+"/_next/"+(0,s.encodeURIPath)(e);return e.endsWith(".css")?(0,l.jsx)("link",{precedence:"dynamic",href:t,rel:"stylesheet",as:"style"},e):((0,n.preload)(t,{as:"script",fetchPriority:"low"}),null)})})}}},e=>{var t=t=>e(e.s=t);e.O(0,[7130,6215,1744],()=>t(23111)),_N_E=e.O()}]);