(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8558],{713:function(e,t,s){Promise.resolve().then(s.bind(s,4911)),Promise.resolve().then(s.bind(s,912)),Promise.resolve().then(s.bind(s,1481))},4911:function(e,t,s){"use strict";s.d(t,{default:function(){return a}});var n=s(7437),l=s(2265);function a(){let[e,t]=(0,l.useState)("");return(0,n.jsxs)("div",{className:"w-full",children:[(0,n.jsx)("textarea",{value:e,onChange:e=>t(e.target.value),placeholder:"Enter your text here",rows:6,className:"my-2 w-full max-w-2xl textarea textarea-bordered"}),(0,n.jsx)("h2",{className:"font-bold",children:"Result:"}),(0,n.jsx)("div",{className:"flex justify-center",children:(0,n.jsxs)("div",{className:"stats shadow max-sm:stats-vertical",children:[(0,n.jsxs)("div",{className:"stat place-items-center",children:[(0,n.jsx)("div",{className:"stat-title",children:"Chars"}),(0,n.jsx)("div",{className:"stat-value",children:e.length})]}),(0,n.jsxs)("div",{className:"stat place-items-center",children:[(0,n.jsx)("div",{className:"stat-title",children:"Words"}),(0,n.jsx)("div",{className:"stat-value text-secondary",children:e.trim()?e.trim().split(/\s+/).length:0})]}),(0,n.jsxs)("div",{className:"stat place-items-center",children:[(0,n.jsx)("div",{className:"stat-title",children:"Sentences"}),(0,n.jsx)("div",{className:"stat-value",children:e.split(/[.!?]+/g).filter(e=>e.trim().length>0).length})]}),(0,n.jsxs)("div",{className:"stat place-items-center",children:[(0,n.jsx)("div",{className:"stat-title",children:"Bytes"}),(0,n.jsx)("div",{className:"stat-value text-secondary",children:new TextEncoder().encode(e).length})]})]})})]})}},912:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"BailoutToCSR",{enumerable:!0,get:function(){return l}});let n=s(5592);function l(e){let{reason:t,children:s}=e;if("undefined"==typeof window)throw new n.BailoutToCSRError(t);return s}},1481:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"PreloadCss",{enumerable:!0,get:function(){return a}});let n=s(7437),l=s(8512);function a(e){let{moduleIds:t}=e;if("undefined"!=typeof window)return null;let s=(0,l.getExpectedRequestStore)("next/dynamic css"),a=[];if(s.reactLoadableManifest&&t){let e=s.reactLoadableManifest;for(let s of t){if(!e[s])continue;let t=e[s].files.filter(e=>e.endsWith(".css"));a.push(...t)}}return 0===a.length?null:(0,n.jsx)(n.Fragment,{children:a.map(e=>(0,n.jsx)("link",{precedence:"dynamic",rel:"stylesheet",href:s.assetPrefix+"/_next/"+encodeURI(e),as:"style"},e))})}}},function(e){e.O(0,[2971,7023,1744],function(){return e(e.s=713)}),_N_E=e.O()}]);