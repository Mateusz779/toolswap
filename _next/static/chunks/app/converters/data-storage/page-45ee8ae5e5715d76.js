(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9935,5086,4386,6430,6351,9581,1349,1491,8759,9360],{701:function(e,t,l){Promise.resolve().then(l.bind(l,6645)),Promise.resolve().then(l.bind(l,912)),Promise.resolve().then(l.bind(l,1481))},6645:function(e,t,l){"use strict";var n=l(7437),r=l(2265);t.default=e=>{let t=e.conversionFactors,[l,a]=(0,r.useState)(""),[s,u]=(0,r.useState)(e.from),[i,o]=(0,r.useState)(e.to),[c,d]=(0,r.useState)(""),[m,f]=(0,r.useState)("2"),b=(l,n,r,a)=>(l*t[e.reverse?r:n]/t[e.reverse?n:r]).toFixed(a?Number(a):Number(m));return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{className:"grid grid-cols-2",children:[(0,n.jsx)("input",{type:"number",className:"mb-2 w-full input input-bordered",value:l,onChange:e=>{let t=e.target.value;a(t),d(b(Number(t)||0,s,i))},placeholder:"Value to convert"}),(0,n.jsx)("select",{className:"mb-2 ml-2 w-full select select-bordered","aria-label":"from unit select",name:"from-unit",value:s,onChange:e=>{u(e.target.value),d(b(Number(l)||0,e.target.value,i))},children:Object.keys(t).map(e=>(0,n.jsx)("option",{value:e,children:e},e))}),(0,n.jsx)("input",{type:"number",className:"mb-2 w-full input input-bordered",value:c,onChange:e=>{let t=e.target.value;d(t),a(b(Number(t)||0,i,s))},placeholder:"Value to convert"}),(0,n.jsx)("select",{className:"mb-4 ml-2 w-full select select-bordered","aria-label":"to unit select",name:"to-unit",value:i,onChange:e=>{o(e.target.value),d(b(Number(l)||0,s,e.target.value))},children:Object.keys(t).map(e=>(0,n.jsx)("option",{value:e,children:e},e))}),(0,n.jsx)("div",{className:"col-span-1"}),(0,n.jsxs)("label",{className:"ml-2 w-full max-w-xs  form-control",children:[(0,n.jsx)("div",{className:"label",children:(0,n.jsx)("span",{className:"label-text",children:"Dimension"})}),(0,n.jsx)("select",{className:"w-full select select-bordered",value:m,onChange:e=>{f(e.target.value),d(b(Number(l)||0,s,i,e.target.value))},children:Array.from({length:11},()=>0).map((e,t)=>(0,n.jsx)("option",{value:t,children:t},t))})]})]})})}},912:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"BailoutToCSR",{enumerable:!0,get:function(){return r}});let n=l(5592);function r(e){let{reason:t,children:l}=e;if("undefined"==typeof window)throw new n.BailoutToCSRError(t);return l}},1481:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"PreloadCss",{enumerable:!0,get:function(){return a}});let n=l(7437),r=l(8512);function a(e){let{moduleIds:t}=e;if("undefined"!=typeof window)return null;let l=(0,r.getExpectedRequestStore)("next/dynamic css"),a=[];if(l.reactLoadableManifest&&t){let e=l.reactLoadableManifest;for(let l of t){if(!e[l])continue;let t=e[l].files.filter(e=>e.endsWith(".css"));a.push(...t)}}return 0===a.length?null:(0,n.jsx)(n.Fragment,{children:a.map(e=>(0,n.jsx)("link",{precedence:"dynamic",rel:"stylesheet",href:l.assetPrefix+"/_next/"+encodeURI(e),as:"style"},e))})}}},function(e){e.O(0,[2971,7023,1744],function(){return e(e.s=701)}),_N_E=e.O()}]);