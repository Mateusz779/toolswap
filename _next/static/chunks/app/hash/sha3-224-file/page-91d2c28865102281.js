(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7945],{982:function(e,t,n){Promise.resolve().then(n.bind(n,490)),Promise.resolve().then(n.bind(n,912)),Promise.resolve().then(n.bind(n,1481))},490:function(e,t,n){"use strict";n.d(t,{default:function(){return a}});var l=n(7437),r=n(2265),i=n(6524);function a(){let[e,t]=(0,r.useState)(null),[n,a]=(0,r.useState)(null),u=async e=>{var n;let l=null===(n=e.target.files)||void 0===n?void 0:n[0];if(!l){a("No file selected");return}try{let e=await l.arrayBuffer(),n=await (0,i.ki)(new Uint8Array(e),224);t(n),a(null)}catch(e){a("Failed to calculate hash")}};return(0,l.jsxs)("div",{className:"w-full ",children:[(0,l.jsx)("input",{type:"file",className:"file-input file-input-bordered w-full max-w-xs",onChange:u}),(0,l.jsx)("h2",{className:"font-bold",children:"Result:"}),(0,l.jsx)("textarea",{value:e||n||"",placeholder:"Output here",readOnly:!0,rows:4,className:"my-2 w-full max-w-2xl textarea textarea-bordered textarea-md"})]})}},912:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"BailoutToCSR",{enumerable:!0,get:function(){return r}});let l=n(5592);function r(e){let{reason:t,children:n}=e;if("undefined"==typeof window)throw new l.BailoutToCSRError(t);return n}},1481:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"PreloadCss",{enumerable:!0,get:function(){return i}});let l=n(7437),r=n(8512);function i(e){let{moduleIds:t}=e;if("undefined"!=typeof window)return null;let n=(0,r.getExpectedRequestStore)("next/dynamic css"),i=[];if(n.reactLoadableManifest&&t){let e=n.reactLoadableManifest;for(let n of t){if(!e[n])continue;let t=e[n].files.filter(e=>e.endsWith(".css"));i.push(...t)}}return 0===i.length?null:(0,l.jsx)(l.Fragment,{children:i.map(e=>(0,l.jsx)("link",{precedence:"dynamic",rel:"stylesheet",href:n.assetPrefix+"/_next/"+encodeURI(e),as:"style"},e))})}}},function(e){e.O(0,[5556,2971,7023,1744],function(){return e(e.s=982)}),_N_E=e.O()}]);