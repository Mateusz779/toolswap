(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3224],{7295:function(e,t,n){Promise.resolve().then(n.bind(n,569)),Promise.resolve().then(n.bind(n,1523)),Promise.resolve().then(n.bind(n,49))},569:function(e,t,n){"use strict";var r=n(7437),l=n(2265);let i=(e,t,n)=>{let r;if(t===n)return e;switch(t){case"Celsius":r=e;break;case"Fahrenheit":r=5/9*(e-32);break;case"Kelvin":r=e-273.15;break;case"Rankine":r=5/9*(e-491.67);break;default:throw Error("Unsupported temperature unit")}switch(n){case"Celsius":return r;case"Fahrenheit":return 1.8*r+32;case"Kelvin":return r+273.15;case"Rankine":return 1.8*r+491.67;default:throw Error("Unsupported temperature unit")}};t.default=()=>{let[e,t]=(0,l.useState)(""),[n,s]=(0,l.useState)("Celsius"),[u,a]=(0,l.useState)("Fahrenheit"),[o,c]=(0,l.useState)(""),[d,h]=(0,l.useState)("2"),f=(e,t,n,r)=>i(Number(e),t,n).toFixed(r?Number(r):Number(d));return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("div",{className:"grid grid-cols-2",children:[(0,r.jsx)("input",{type:"number",className:"pr-2 mb-2 w-full input input-bordered",value:e,onChange:e=>{let r=e.target.value;t(r),c(f(Number(r)||0,n,u))},placeholder:"Value to convert"}),(0,r.jsxs)("select",{className:"ml-2 w-full select select-bordered",value:n,onChange:t=>{s(t.target.value),c(f(Number(e)||0,t.target.value,u))},children:[(0,r.jsx)("option",{value:"Celsius",children:"Celsius (\xb0C)"}),(0,r.jsx)("option",{value:"Fahrenheit",children:"Fahrenheit (\xb0F)"}),(0,r.jsx)("option",{value:"Kelvin",children:"Kelvin (K)"}),(0,r.jsx)("option",{value:"Rankine",children:"Rankine (\xb0R)"})]}),(0,r.jsx)("input",{type:"number",className:"mb-2 w-full input input-bordered",value:o,onChange:e=>{let r=e.target.value;c(r),t(f(Number(r)||0,u,n))},placeholder:"Value to convert"}),(0,r.jsxs)("select",{className:"mb-4 ml-2 w-full select select-bordered",value:u,onChange:t=>{a(t.target.value),c(f(Number(e)||0,n,t.target.value))},children:[(0,r.jsx)("option",{value:"Celsius",children:"Celsius (\xb0C)"}),(0,r.jsx)("option",{value:"Fahrenheit",children:"Fahrenheit (\xb0F)"}),(0,r.jsx)("option",{value:"Kelvin",children:"Kelvin (K)"}),(0,r.jsx)("option",{value:"Rankine",children:"Rankine (\xb0R)"})]})]})})}},1523:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"BailoutToCSR",{enumerable:!0,get:function(){return l}});let r=n(8993);function l(e){let{reason:t,children:n}=e;if("undefined"==typeof window)throw new r.BailoutToCSRError(t);return n}},49:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"PreloadCss",{enumerable:!0,get:function(){return i}});let r=n(7437),l=n(544);function i(e){let{moduleIds:t}=e;if("undefined"!=typeof window)return null;let n=(0,l.getExpectedRequestStore)("next/dynamic css"),i=[];if(n.reactLoadableManifest&&t){let e=n.reactLoadableManifest;for(let n of t){if(!e[n])continue;let t=e[n].files.filter(e=>e.endsWith(".css"));i.push(...t)}}return 0===i.length?null:(0,r.jsx)(r.Fragment,{children:i.map(e=>(0,r.jsx)("link",{precedence:"dynamic",rel:"stylesheet",href:n.assetPrefix+"/_next/"+encodeURI(e),as:"style"},e))})}}},function(e){e.O(0,[2971,2117,1744],function(){return e(e.s=7295)}),_N_E=e.O()}]);