(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9066],{753:function(e,t,r){Promise.resolve().then(r.bind(r,6894)),Promise.resolve().then(r.bind(r,912)),Promise.resolve().then(r.bind(r,1481))},6894:function(e,t,r){"use strict";r.d(t,{default:function(){return a}});var n=r(7437),l=r(2265);function a(){let[e,t]=(0,l.useState)("");return(0,n.jsxs)("div",{className:"w-full ",children:[(0,n.jsx)("textarea",{value:e,onChange:e=>t(e.target.value),placeholder:"Enter your text here",rows:6,className:"my-2 w-full max-w-2xl textarea textarea-bordered textarea-md"}),(0,n.jsx)("h2",{className:"font-bold",children:"Result:"}),(0,n.jsx)("textarea",{value:e.trim().toUpperCase().replace(/[\s-]+/g,"_").replace(/[^A-Z0-9_]/g,""),placeholder:"Output here",readOnly:!0,rows:6,className:"my-2 w-full max-w-2xl textarea textarea-bordered textarea-md"})]})}},912:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"BailoutToCSR",{enumerable:!0,get:function(){return l}});let n=r(5592);function l(e){let{reason:t,children:r}=e;if("undefined"==typeof window)throw new n.BailoutToCSRError(t);return r}},1481:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"PreloadCss",{enumerable:!0,get:function(){return a}});let n=r(7437),l=r(8512);function a(e){let{moduleIds:t}=e;if("undefined"!=typeof window)return null;let r=(0,l.getExpectedRequestStore)("next/dynamic css"),a=[];if(r.reactLoadableManifest&&t){let e=r.reactLoadableManifest;for(let r of t){if(!e[r])continue;let t=e[r].files.filter(e=>e.endsWith(".css"));a.push(...t)}}return 0===a.length?null:(0,n.jsx)(n.Fragment,{children:a.map(e=>(0,n.jsx)("link",{precedence:"dynamic",rel:"stylesheet",href:r.assetPrefix+"/_next/"+encodeURI(e),as:"style"},e))})}}},function(e){e.O(0,[2971,7023,1744],function(){return e(e.s=753)}),_N_E=e.O()}]);