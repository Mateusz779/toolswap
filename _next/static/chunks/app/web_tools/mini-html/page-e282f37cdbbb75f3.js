(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7654],{950:function(e,t,n){Promise.resolve().then(n.bind(n,4290)),Promise.resolve().then(n.bind(n,912)),Promise.resolve().then(n.bind(n,1481))},4290:function(e,t,n){"use strict";n.d(t,{default:function(){return l}});var r=n(7437),a=n(2265);function l(){let[e,t]=(0,a.useState)(""),[n,l]=(0,a.useState)(""),[s,i]=(0,a.useState)("");return(0,r.jsxs)("div",{className:"w-full ",children:[(0,r.jsx)("textarea",{value:e,onChange:e=>{t(e.target.value);let n=e.target.value.replace(/>\s+</g,"><").replace(/\s{2,}/g," ").replace(/<!--[\s\S]*?-->/g,"").trim();l(n);let r=e.target.value.length,a=n.length||0,s=r-a,o=(s/r*100).toFixed(2);i("Original Size: ".concat(r,", Minified Size: ").concat(a,", Savings: ").concat(s," (").concat(o,"%)"))},placeholder:"Enter your text here",rows:6,className:"my-2 w-full max-w-2xl textarea textarea-bordered textarea-md"}),(0,r.jsx)("h2",{className:"font-bold",children:"Result:"}),(0,r.jsx)("textarea",{value:n,placeholder:"Output here",readOnly:!0,rows:6,className:"my-2 w-full max-w-2xl textarea textarea-bordered textarea-md"}),(0,r.jsx)("p",{className:"text-green-600",children:s})]})}},912:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"BailoutToCSR",{enumerable:!0,get:function(){return a}});let r=n(5592);function a(e){let{reason:t,children:n}=e;if("undefined"==typeof window)throw new r.BailoutToCSRError(t);return n}},1481:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"PreloadCss",{enumerable:!0,get:function(){return l}});let r=n(7437),a=n(8512);function l(e){let{moduleIds:t}=e;if("undefined"!=typeof window)return null;let n=(0,a.getExpectedRequestStore)("next/dynamic css"),l=[];if(n.reactLoadableManifest&&t){let e=n.reactLoadableManifest;for(let n of t){if(!e[n])continue;let t=e[n].files.filter(e=>e.endsWith(".css"));l.push(...t)}}return 0===l.length?null:(0,r.jsx)(r.Fragment,{children:l.map(e=>(0,r.jsx)("link",{precedence:"dynamic",rel:"stylesheet",href:n.assetPrefix+"/_next/"+encodeURI(e),as:"style"},e))})}}},function(e){e.O(0,[2971,7023,1744],function(){return e(e.s=950)}),_N_E=e.O()}]);