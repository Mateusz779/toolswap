(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7405],{4541:function(e,t,n){Promise.resolve().then(n.bind(n,5740)),Promise.resolve().then(n.bind(n,912)),Promise.resolve().then(n.bind(n,1481))},5740:function(e,t,n){"use strict";n.d(t,{default:function(){return s}});var r=n(7437),l=n(2265);let a=(e,t)=>{try{return e.match(RegExp(t,"g"))||[]}catch(e){return["Invaild REGEX"]}};function s(){let[e,t]=(0,l.useState)("\\d{1,5}"),[n,s]=(0,l.useState)(""),[u,o]=(0,l.useState)("");return(0,r.jsxs)("div",{className:"w-full",children:[(0,r.jsxs)("label",{className:"w-full max-w-2xl form-control",children:[(0,r.jsx)("div",{className:"label",children:(0,r.jsx)("span",{className:"label-text",children:"Regex:"})}),(0,r.jsx)("input",{type:"text",placeholder:"Regex",value:e,onChange:e=>{t(e.target.value),o(a(n,e.target.value).join("\n"))},className:"w-full max-w-2xl input input-bordered"})]}),(0,r.jsx)("textarea",{value:n,onChange:t=>{s(t.target.value),o(a(t.target.value,e).join("\n"))},placeholder:"Enter your text here",rows:6,className:"my-2 w-full max-w-2xl textarea textarea-bordered textarea-md"}),(0,r.jsx)("h2",{className:"font-bold",children:"Result:"}),(0,r.jsx)("textarea",{value:u,placeholder:"Output here",readOnly:!0,rows:6,className:"my-2 w-full max-w-2xl textarea textarea-bordered"})]})}},912:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"BailoutToCSR",{enumerable:!0,get:function(){return l}});let r=n(5592);function l(e){let{reason:t,children:n}=e;if("undefined"==typeof window)throw new r.BailoutToCSRError(t);return n}},1481:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"PreloadCss",{enumerable:!0,get:function(){return a}});let r=n(7437),l=n(8512);function a(e){let{moduleIds:t}=e;if("undefined"!=typeof window)return null;let n=(0,l.getExpectedRequestStore)("next/dynamic css"),a=[];if(n.reactLoadableManifest&&t){let e=n.reactLoadableManifest;for(let n of t){if(!e[n])continue;let t=e[n].files.filter(e=>e.endsWith(".css"));a.push(...t)}}return 0===a.length?null:(0,r.jsx)(r.Fragment,{children:a.map(e=>(0,r.jsx)("link",{precedence:"dynamic",rel:"stylesheet",href:n.assetPrefix+"/_next/"+encodeURI(e),as:"style"},e))})}}},function(e){e.O(0,[2971,7023,1744],function(){return e(e.s=4541)}),_N_E=e.O()}]);