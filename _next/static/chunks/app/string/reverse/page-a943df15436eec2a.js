(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7227],{6260:function(e,t,n){Promise.resolve().then(n.bind(n,6401)),Promise.resolve().then(n.bind(n,1523)),Promise.resolve().then(n.bind(n,49))},6401:function(e,t,n){"use strict";n.d(t,{default:function(){return s}});var r=n(7437),l=n(2265);function s(){let[e,t]=(0,l.useState)("");return(0,r.jsxs)("div",{className:"w-full",children:[(0,r.jsx)("textarea",{value:e,onChange:e=>t(e.target.value),placeholder:"Enter your text here",rows:6,className:"my-2 w-full max-w-2xl textarea textarea-bordered"}),(0,r.jsx)("h2",{className:"font-bold",children:"Result:"}),(0,r.jsx)("textarea",{value:e.split("").reverse().join(""),placeholder:"Output here",readOnly:!0,rows:6,className:"my-2 w-full max-w-2xl textarea textarea-bordered"})]})}},1523:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"BailoutToCSR",{enumerable:!0,get:function(){return l}});let r=n(8993);function l(e){let{reason:t,children:n}=e;if("undefined"==typeof window)throw new r.BailoutToCSRError(t);return n}},49:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"PreloadCss",{enumerable:!0,get:function(){return s}});let r=n(7437),l=n(544);function s(e){let{moduleIds:t}=e;if("undefined"!=typeof window)return null;let n=(0,l.getExpectedRequestStore)("next/dynamic css"),s=[];if(n.reactLoadableManifest&&t){let e=n.reactLoadableManifest;for(let n of t){if(!e[n])continue;let t=e[n].files.filter(e=>e.endsWith(".css"));s.push(...t)}}return 0===s.length?null:(0,r.jsx)(r.Fragment,{children:s.map(e=>(0,r.jsx)("link",{precedence:"dynamic",rel:"stylesheet",href:n.assetPrefix+"/_next/"+encodeURI(e),as:"style"},e))})}}},function(e){e.O(0,[2971,2117,1744],function(){return e(e.s=6260)}),_N_E=e.O()}]);