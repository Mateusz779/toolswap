(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4386,5086,9935,1491,9360,6430,6351,7421,9581,1349,8759,7957,6347,2825],{96044:(e,t,l)=>{Promise.resolve().then(l.bind(l,6645)),Promise.resolve().then(l.bind(l,10912)),Promise.resolve().then(l.bind(l,85025))},6645:(e,t,l)=>{"use strict";l.d(t,{default:()=>n});var r=l(57437),a=l(2265);let n=e=>{let t=e.conversionFactors,[l,n]=(0,a.useState)(""),[s,u]=(0,a.useState)(e.from),[o,i]=(0,a.useState)(e.to),[c,d]=(0,a.useState)(""),[m,f]=(0,a.useState)("2"),b=(l,r,a,n)=>(l*t[e.reverse?a:r]/t[e.reverse?r:a]).toFixed(n?Number(n):Number(m));return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("div",{className:"grid grid-cols-2",children:[(0,r.jsx)("input",{type:"number",className:"mb-2 w-full input input-bordered",value:l,onChange:e=>{let t=e.target.value;n(t),d(b(Number(t)||0,s,o))},placeholder:"Value to convert"}),(0,r.jsx)("select",{className:"mb-2 ml-2 w-full select select-bordered","aria-label":"from unit select",name:"from-unit",value:s,onChange:e=>{u(e.target.value),d(b(Number(l)||0,e.target.value,o))},children:Object.keys(t).map(e=>(0,r.jsx)("option",{value:e,children:e},e))}),(0,r.jsx)("input",{type:"number",className:"mb-2 w-full input input-bordered",value:c,onChange:e=>{let t=e.target.value;d(t),n(b(Number(t)||0,o,s))},placeholder:"Value to convert"}),(0,r.jsx)("select",{className:"mb-4 ml-2 w-full select select-bordered","aria-label":"to unit select",name:"to-unit",value:o,onChange:e=>{i(e.target.value),d(b(Number(l)||0,s,e.target.value))},children:Object.keys(t).map(e=>(0,r.jsx)("option",{value:e,children:e},e))}),(0,r.jsx)("div",{className:"col-span-1"}),(0,r.jsxs)("label",{className:"ml-2 w-full max-w-xs  form-control",children:[(0,r.jsx)("div",{className:"label",children:(0,r.jsx)("span",{className:"label-text",children:"Dimension"})}),(0,r.jsx)("select",{className:"w-full select select-bordered",value:m,onChange:e=>{f(e.target.value),d(b(Number(l)||0,s,o,e.target.value))},children:Array.from({length:11},()=>0).map((e,t)=>(0,r.jsx)("option",{value:t,children:t},t))})]})]})})}},10912:(e,t,l)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"BailoutToCSR",{enumerable:!0,get:function(){return a}});let r=l(55592);function a(e){let{reason:t,children:l}=e;if("undefined"==typeof window)throw new r.BailoutToCSRError(t);return l}},85025:(e,t,l)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"PreloadChunks",{enumerable:!0,get:function(){return u}});let r=l(57437),a=l(54887),n=l(98011),s=l(35759);function u(e){let{moduleIds:t}=e;if("undefined"!=typeof window)return null;let l=n.workAsyncStorage.getStore();if(void 0===l)return null;let u=[];if(l.reactLoadableManifest&&t){let e=l.reactLoadableManifest;for(let l of t){if(!e[l])continue;let t=e[l].files;u.push(...t)}}return 0===u.length?null:(0,r.jsx)(r.Fragment,{children:u.map(e=>{let t=l.assetPrefix+"/_next/"+(0,s.encodeURIPath)(e);return e.endsWith(".css")?(0,r.jsx)("link",{precedence:"dynamic",href:t,rel:"stylesheet",as:"style"},e):((0,a.preload)(t,{as:"script",fetchPriority:"low"}),null)})})}}},e=>{var t=t=>e(e.s=t);e.O(0,[7130,6215,1744],()=>t(96044)),_N_E=e.O()}]);