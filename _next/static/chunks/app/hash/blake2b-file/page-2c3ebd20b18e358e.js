(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7e3],{82592:(e,t,l)=>{Promise.resolve().then(l.bind(l,49434)),Promise.resolve().then(l.bind(l,10912)),Promise.resolve().then(l.bind(l,85025))},49434:(e,t,l)=>{"use strict";l.d(t,{default:()=>i});var r=l(57437),n=l(2265),a=l(56524);function i(){let[e,t]=(0,n.useState)(null),[l,i]=(0,n.useState)(null),s=async e=>{var l;let r=null===(l=e.target.files)||void 0===l?void 0:l[0];if(!r){i("No file selected");return}try{let e=await r.arrayBuffer(),l=await (0,a.Rg)(new Uint8Array(e));t(l),i(null)}catch(e){i("Failed to calculate hash")}};return(0,r.jsxs)("div",{className:"w-full ",children:[(0,r.jsx)("input",{type:"file",className:"file-input file-input-bordered w-full max-w-xs",onChange:s}),(0,r.jsx)("h2",{className:"font-bold",children:"Result:"}),(0,r.jsx)("textarea",{value:e||l||"",placeholder:"Output here",readOnly:!0,rows:4,className:"my-2 w-full max-w-2xl textarea textarea-bordered textarea-md"})]})}},10912:(e,t,l)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"BailoutToCSR",{enumerable:!0,get:function(){return n}});let r=l(55592);function n(e){let{reason:t,children:l}=e;if("undefined"==typeof window)throw new r.BailoutToCSRError(t);return l}},85025:(e,t,l)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"PreloadChunks",{enumerable:!0,get:function(){return s}});let r=l(57437),n=l(54887),a=l(98011),i=l(35759);function s(e){let{moduleIds:t}=e;if("undefined"!=typeof window)return null;let l=a.workAsyncStorage.getStore();if(void 0===l)return null;let s=[];if(l.reactLoadableManifest&&t){let e=l.reactLoadableManifest;for(let l of t){if(!e[l])continue;let t=e[l].files;s.push(...t)}}return 0===s.length?null:(0,r.jsx)(r.Fragment,{children:s.map(e=>{let t=l.assetPrefix+"/_next/"+(0,i.encodeURIPath)(e);return e.endsWith(".css")?(0,r.jsx)("link",{precedence:"dynamic",href:t,rel:"stylesheet",as:"style"},e):((0,n.preload)(t,{as:"script",fetchPriority:"low"}),null)})})}}},e=>{var t=t=>e(e.s=t);e.O(0,[5556,7130,6215,1744],()=>t(82592)),_N_E=e.O()}]);