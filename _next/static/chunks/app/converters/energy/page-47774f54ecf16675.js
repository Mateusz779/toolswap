(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1491,5086,9360,9935,4386,6430,6351,9581,1349,8759],{9478:function(e,t,n){Promise.resolve().then(n.bind(n,6645)),Promise.resolve().then(n.bind(n,912)),Promise.resolve().then(n.bind(n,1481))},6645:function(e,t,n){"use strict";var l=n(2574),r=n(5032);t.default=e=>{let t=e.conversionFactors,[n,a]=(0,r.useState)(""),[u,s]=(0,r.useState)(e.from),[i,o]=(0,r.useState)(e.to),[c,d]=(0,r.useState)(""),[f,m]=(0,r.useState)("2"),b=(n,l,r,a)=>(n*t[e.reverse?r:l]/t[e.reverse?l:r]).toFixed(a?Number(a):Number(f));return(0,l.tZ)(l.HY,{children:(0,l.BX)("div",{className:"grid grid-cols-2",children:[(0,l.tZ)("input",{type:"number",className:"mb-2 w-full input input-bordered",value:n,onChange:e=>{let t=e.target.value;a(t),d(b(Number(t)||0,u,i))},placeholder:"Value to convert"}),(0,l.tZ)("select",{className:"mb-2 ml-2 w-full select select-bordered","aria-label":"from unit select",name:"from-unit",value:u,onChange:e=>{s(e.target.value),d(b(Number(n)||0,e.target.value,i))},children:Object.keys(t).map(e=>(0,l.tZ)("option",{value:e,children:e},e))}),(0,l.tZ)("input",{type:"number",className:"mb-2 w-full input input-bordered",value:c,onChange:e=>{let t=e.target.value;d(t),a(b(Number(t)||0,i,u))},placeholder:"Value to convert"}),(0,l.tZ)("select",{className:"mb-4 ml-2 w-full select select-bordered","aria-label":"to unit select",name:"to-unit",value:i,onChange:e=>{o(e.target.value),d(b(Number(n)||0,u,e.target.value))},children:Object.keys(t).map(e=>(0,l.tZ)("option",{value:e,children:e},e))}),(0,l.tZ)("div",{className:"col-span-1"}),(0,l.BX)("label",{className:" ml-2 form-control w-full max-w-xs",children:[(0,l.tZ)("div",{className:"label",children:(0,l.tZ)("span",{className:"label-text",children:"Dimension"})}),(0,l.tZ)("select",{className:"w-full select select-bordered",value:f,onChange:e=>{m(e.target.value),d(b(Number(n)||0,u,i,e.target.value))},children:Array.from({length:11},()=>0).map((e,t)=>(0,l.tZ)("option",{value:t,children:t},t))})]})]})})}},912:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"BailoutToCSR",{enumerable:!0,get:function(){return r}});let l=n(5592);function r(e){let{reason:t,children:n}=e;if("undefined"==typeof window)throw new l.BailoutToCSRError(t);return n}},1481:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"PreloadCss",{enumerable:!0,get:function(){return a}});let l=n(9099),r=n(8512);function a(e){let{moduleIds:t}=e;if("undefined"!=typeof window)return null;let n=(0,r.getExpectedRequestStore)("next/dynamic css"),a=[];if(n.reactLoadableManifest&&t){let e=n.reactLoadableManifest;for(let n of t){if(!e[n])continue;let t=e[n].files.filter(e=>e.endsWith(".css"));a.push(...t)}}return 0===a.length?null:(0,l.jsx)(l.Fragment,{children:a.map(e=>(0,l.jsx)("link",{precedence:"dynamic",rel:"stylesheet",href:n.assetPrefix+"/_next/"+encodeURI(e),as:"style"},e))})}},2574:function(e,t,n){"use strict";n.d(t,{BX:function(){return l.jsxs},HY:function(){return l.Fragment},tZ:function(){return l.jsx}}),n(5032);var l=n(7682)}},function(e){e.O(0,[3335,1744],function(){return e(e.s=9478)}),_N_E=e.O()}]);