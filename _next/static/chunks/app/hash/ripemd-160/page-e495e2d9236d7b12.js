(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1434],{5682:function(e,t,n){Promise.resolve().then(n.bind(n,7499)),Promise.resolve().then(n.bind(n,912)),Promise.resolve().then(n.bind(n,1481))},7499:function(e,t,n){"use strict";n.d(t,{default:function(){return s}});var r=n(7437),a=n(2265),l=n(6524);function s(){let[e,t]=(0,a.useState)(""),[n,s]=(0,a.useState)(""),u=async e=>{t(e.target.value),s(await (0,l.bP)(e.target.value))};return(0,r.jsxs)("div",{className:"w-full ",children:[(0,r.jsx)("textarea",{value:e,onChange:u,placeholder:"Enter your text here",rows:6,className:"my-2 w-full max-w-2xl textarea textarea-bordered textarea-md"}),(0,r.jsx)("h2",{className:"font-bold",children:"Result:"}),(0,r.jsx)("textarea",{value:n,placeholder:"Output here",readOnly:!0,rows:3,className:"my-2 w-full max-w-2xl textarea textarea-bordered textarea-md"})]})}},912:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"BailoutToCSR",{enumerable:!0,get:function(){return a}});let r=n(5592);function a(e){let{reason:t,children:n}=e;if("undefined"==typeof window)throw new r.BailoutToCSRError(t);return n}},1481:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"PreloadCss",{enumerable:!0,get:function(){return l}});let r=n(7437),a=n(8512);function l(e){let{moduleIds:t}=e;if("undefined"!=typeof window)return null;let n=(0,a.getExpectedRequestStore)("next/dynamic css"),l=[];if(n.reactLoadableManifest&&t){let e=n.reactLoadableManifest;for(let n of t){if(!e[n])continue;let t=e[n].files.filter(e=>e.endsWith(".css"));l.push(...t)}}return 0===l.length?null:(0,r.jsx)(r.Fragment,{children:l.map(e=>(0,r.jsx)("link",{precedence:"dynamic",rel:"stylesheet",href:n.assetPrefix+"/_next/"+encodeURI(e),as:"style"},e))})}}},function(e){e.O(0,[5556,2971,7023,1744],function(){return e(e.s=5682)}),_N_E=e.O()}]);