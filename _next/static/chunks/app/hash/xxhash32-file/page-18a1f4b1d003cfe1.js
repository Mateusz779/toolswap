(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2866],{6832:function(e,t,n){Promise.resolve().then(n.bind(n,2347)),Promise.resolve().then(n.bind(n,912)),Promise.resolve().then(n.bind(n,1481))},2347:function(e,t,n){"use strict";n.d(t,{default:function(){return i}});var l=n(7437),r=n(2265),a=n(1724);function i(){let[e,t]=(0,r.useState)(null),[n,i]=(0,r.useState)(null),u=async e=>{var n;let l=null===(n=e.target.files)||void 0===n?void 0:n[0];if(!l){i("No file selected");return}try{let e=await l.arrayBuffer(),n=await (0,a.Jp)(new Uint8Array(e));t(n),i(null)}catch(e){i("Failed to calculate hash")}};return(0,l.jsxs)("div",{className:"w-full ",children:[(0,l.jsx)("input",{type:"file",className:"file-input file-input-bordered w-full max-w-xs",onChange:u}),(0,l.jsx)("h2",{className:"font-bold",children:"Result:"}),(0,l.jsx)("textarea",{value:e||n||"",placeholder:"Output here",readOnly:!0,rows:4,className:"my-2 w-full max-w-2xl textarea textarea-bordered textarea-md"})]})}},912:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"BailoutToCSR",{enumerable:!0,get:function(){return r}});let l=n(5592);function r(e){let{reason:t,children:n}=e;if("undefined"==typeof window)throw new l.BailoutToCSRError(t);return n}},1481:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"PreloadCss",{enumerable:!0,get:function(){return a}});let l=n(7437),r=n(8512);function a(e){let{moduleIds:t}=e;if("undefined"!=typeof window)return null;let n=(0,r.getExpectedRequestStore)("next/dynamic css"),a=[];if(n.reactLoadableManifest&&t){let e=n.reactLoadableManifest;for(let n of t){if(!e[n])continue;let t=e[n].files.filter(e=>e.endsWith(".css"));a.push(...t)}}return 0===a.length?null:(0,l.jsx)(l.Fragment,{children:a.map(e=>(0,l.jsx)("link",{precedence:"dynamic",rel:"stylesheet",href:n.assetPrefix+"/_next/"+encodeURI(e),as:"style"},e))})}}},function(e){e.O(0,[5556,2971,7023,1744],function(){return e(e.s=6832)}),_N_E=e.O()}]);