(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8462],{7362:function(e,t,r){Promise.resolve().then(r.bind(r,2177)),Promise.resolve().then(r.bind(r,1523)),Promise.resolve().then(r.bind(r,49))},2177:function(e,t,r){"use strict";r.d(t,{default:function(){return l}});var n=r(7437),a=r(2265);function l(){let[e,t]=(0,a.useState)("");return(0,n.jsxs)("div",{className:"w-full ",children:[(0,n.jsx)("textarea",{value:e,onChange:e=>t(e.target.value),placeholder:"Enter your text here",rows:6,className:"my-2 w-full max-w-2xl textarea textarea-bordered textarea-md"}),(0,n.jsx)("h2",{className:"font-bold",children:"Result:"}),(0,n.jsx)("textarea",{value:e.trim().toLowerCase().replace(/[\s_]+/g,"-").replace(/[^a-z0-9-]/g,""),placeholder:"Output here",readOnly:!0,rows:6,className:"my-2 w-full max-w-2xl textarea textarea-bordered textarea-md"})]})}},1523:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"BailoutToCSR",{enumerable:!0,get:function(){return a}});let n=r(8993);function a(e){let{reason:t,children:r}=e;if("undefined"==typeof window)throw new n.BailoutToCSRError(t);return r}},49:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"PreloadCss",{enumerable:!0,get:function(){return l}});let n=r(7437),a=r(544);function l(e){let{moduleIds:t}=e;if("undefined"!=typeof window)return null;let r=(0,a.getExpectedRequestStore)("next/dynamic css"),l=[];if(r.reactLoadableManifest&&t){let e=r.reactLoadableManifest;for(let r of t){if(!e[r])continue;let t=e[r].files.filter(e=>e.endsWith(".css"));l.push(...t)}}return 0===l.length?null:(0,n.jsx)(n.Fragment,{children:l.map(e=>(0,n.jsx)("link",{precedence:"dynamic",rel:"stylesheet",href:r.assetPrefix+"/_next/"+encodeURI(e),as:"style"},e))})}}},function(e){e.O(0,[2971,2117,1744],function(){return e(e.s=7362)}),_N_E=e.O()}]);