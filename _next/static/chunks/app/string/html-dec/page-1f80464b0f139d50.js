(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6705],{204:function(e,t,r){Promise.resolve().then(r.bind(r,3565)),Promise.resolve().then(r.bind(r,912)),Promise.resolve().then(r.bind(r,1481))},3565:function(e,t,r){"use strict";r.d(t,{default:function(){return l}});var n=r(7437),a=r(2265);let s=e=>e.replace(/&(#(\d+)|[a-zA-Z]+);/g,(e,t,r)=>{if(r)return String.fromCharCode(parseInt(r,10));switch(t){case"amp":return"&";case"lt":return"<";case"gt":return">";case"quot":return'"';case"#39":case"apos":return"'";case"#47":return"/";case"#96":return"`";case"#61":return"=";default:return e}});function l(){let[e,t]=(0,a.useState)(""),[r,l]=(0,a.useState)("");return(0,n.jsxs)("div",{className:"w-full",children:[(0,n.jsx)("textarea",{value:e,onChange:e=>{t(e.target.value);try{l(s(e.target.value))}catch(e){l("Error! The string to be decoded is not correctly encoded.")}},placeholder:"Enter your text here",rows:6,className:"textarea textarea-bordered textarea-md max-w-2xl my-2 w-full"}),(0,n.jsx)("h2",{className:"font-bold",children:"Result:"}),(0,n.jsx)("textarea",{value:r,placeholder:"Output here",readOnly:!0,rows:6,className:"textarea textarea-bordered textarea-md max-w-2xl my-2 w-full"})]})}},912:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"BailoutToCSR",{enumerable:!0,get:function(){return a}});let n=r(5592);function a(e){let{reason:t,children:r}=e;if("undefined"==typeof window)throw new n.BailoutToCSRError(t);return r}},1481:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"PreloadCss",{enumerable:!0,get:function(){return s}});let n=r(7437),a=r(8512);function s(e){let{moduleIds:t}=e;if("undefined"!=typeof window)return null;let r=(0,a.getExpectedRequestStore)("next/dynamic css"),s=[];if(r.reactLoadableManifest&&t){let e=r.reactLoadableManifest;for(let r of t){if(!e[r])continue;let t=e[r].files.filter(e=>e.endsWith(".css"));s.push(...t)}}return 0===s.length?null:(0,n.jsx)(n.Fragment,{children:s.map(e=>(0,n.jsx)("link",{precedence:"dynamic",rel:"stylesheet",href:r.assetPrefix+"/_next/"+encodeURI(e),as:"style"},e))})}}},function(e){e.O(0,[2971,7023,1744],function(){return e(e.s=204)}),_N_E=e.O()}]);