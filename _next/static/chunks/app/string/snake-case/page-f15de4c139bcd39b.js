(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3300],{57716:(e,t,r)=>{Promise.resolve().then(r.bind(r,44793)),Promise.resolve().then(r.bind(r,10912)),Promise.resolve().then(r.bind(r,85025))},44793:(e,t,r)=>{"use strict";r.d(t,{default:()=>n});var l=r(57437),a=r(2265);function n(){let[e,t]=(0,a.useState)("");return(0,l.jsxs)("div",{className:"w-full ",children:[(0,l.jsx)("textarea",{value:e,onChange:e=>t(e.target.value),placeholder:"Enter your text here",rows:6,className:"my-2 w-full max-w-2xl textarea textarea-bordered textarea-md"}),(0,l.jsx)("h2",{className:"font-bold",children:"Result:"}),(0,l.jsx)("textarea",{value:e.trim().toLowerCase().replace(/[\s-]+/g,"_").replace(/[^a-z0-9_]/g,""),placeholder:"Output here",readOnly:!0,rows:6,className:"my-2 w-full max-w-2xl textarea textarea-bordered textarea-md"})]})}},10912:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"BailoutToCSR",{enumerable:!0,get:function(){return a}});let l=r(55592);function a(e){let{reason:t,children:r}=e;if("undefined"==typeof window)throw new l.BailoutToCSRError(t);return r}},85025:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"PreloadChunks",{enumerable:!0,get:function(){return o}});let l=r(57437),a=r(54887),n=r(98011),s=r(35759);function o(e){let{moduleIds:t}=e;if("undefined"!=typeof window)return null;let r=n.workAsyncStorage.getStore();if(void 0===r)return null;let o=[];if(r.reactLoadableManifest&&t){let e=r.reactLoadableManifest;for(let r of t){if(!e[r])continue;let t=e[r].files;o.push(...t)}}return 0===o.length?null:(0,l.jsx)(l.Fragment,{children:o.map(e=>{let t=r.assetPrefix+"/_next/"+(0,s.encodeURIPath)(e);return e.endsWith(".css")?(0,l.jsx)("link",{precedence:"dynamic",href:t,rel:"stylesheet",as:"style"},e):((0,a.preload)(t,{as:"script",fetchPriority:"low"}),null)})})}}},e=>{var t=t=>e(e.s=t);e.O(0,[7130,6215,1744],()=>t(57716)),_N_E=e.O()}]);