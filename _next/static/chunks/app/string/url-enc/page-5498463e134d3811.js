(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6493],{551:function(e,t,n){Promise.resolve().then(n.bind(n,5132)),Promise.resolve().then(n.bind(n,912)),Promise.resolve().then(n.bind(n,1481))},5132:function(e,t,n){"use strict";n.d(t,{default:function(){return a}});var r=n(7437),l=n(2265);function a(){let[e,t]=(0,l.useState)("");return(0,r.jsxs)("div",{className:"w-full ",children:[(0,r.jsx)("textarea",{value:e,onChange:e=>t(e.target.value),placeholder:"Enter your text here",rows:6,className:"my-2 w-full max-w-2xl textarea textarea-bordered textarea-md"}),(0,r.jsx)("h2",{className:"font-bold",children:"Result:"}),(0,r.jsx)("textarea",{value:encodeURIComponent(e),placeholder:"Output here",readOnly:!0,rows:6,className:"my-2 w-full max-w-2xl textarea textarea-bordered textarea-md"})]})}},912:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"BailoutToCSR",{enumerable:!0,get:function(){return l}});let r=n(5592);function l(e){let{reason:t,children:n}=e;if("undefined"==typeof window)throw new r.BailoutToCSRError(t);return n}},1481:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"PreloadCss",{enumerable:!0,get:function(){return a}});let r=n(7437),l=n(8512);function a(e){let{moduleIds:t}=e;if("undefined"!=typeof window)return null;let n=(0,l.getExpectedRequestStore)("next/dynamic css"),a=[];if(n.reactLoadableManifest&&t){let e=n.reactLoadableManifest;for(let n of t){if(!e[n])continue;let t=e[n].files.filter(e=>e.endsWith(".css"));a.push(...t)}}return 0===a.length?null:(0,r.jsx)(r.Fragment,{children:a.map(e=>(0,r.jsx)("link",{precedence:"dynamic",rel:"stylesheet",href:n.assetPrefix+"/_next/"+encodeURI(e),as:"style"},e))})}}},function(e){e.O(0,[2971,7023,1744],function(){return e(e.s=551)}),_N_E=e.O()}]);