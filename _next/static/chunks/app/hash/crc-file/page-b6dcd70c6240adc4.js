(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5796],{8071:function(e,t,n){Promise.resolve().then(n.bind(n,1467)),Promise.resolve().then(n.bind(n,912)),Promise.resolve().then(n.bind(n,1481))},1467:function(e,t,n){"use strict";n.d(t,{default:function(){return u}});var r=n(7437),l=n(2265),i=n(3297);function u(){let[e,t]=(0,l.useState)(null),[n,u]=(0,l.useState)(null),a=async e=>{var n;let r=null===(n=e.target.files)||void 0===n?void 0:n[0];if(!r){u("No file selected");return}try{let e=await r.arrayBuffer();t((0,i.Z)(new Uint8Array(e)).toString(16)),u(null)}catch(e){u("Failed to calculate hash")}};return(0,r.jsxs)("div",{className:"w-full ",children:[(0,r.jsx)("input",{type:"file",className:"file-input file-input-bordered w-full max-w-xs",onChange:a}),(0,r.jsx)("h2",{className:"font-bold",children:"Result:"}),(0,r.jsx)("textarea",{value:e||n||"",placeholder:"Output here",readOnly:!0,rows:4,className:"my-2 w-full max-w-2xl textarea textarea-bordered textarea-md"})]})}},912:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"BailoutToCSR",{enumerable:!0,get:function(){return l}});let r=n(5592);function l(e){let{reason:t,children:n}=e;if("undefined"==typeof window)throw new r.BailoutToCSRError(t);return n}},1481:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"PreloadCss",{enumerable:!0,get:function(){return i}});let r=n(7437),l=n(8512);function i(e){let{moduleIds:t}=e;if("undefined"!=typeof window)return null;let n=(0,l.getExpectedRequestStore)("next/dynamic css"),i=[];if(n.reactLoadableManifest&&t){let e=n.reactLoadableManifest;for(let n of t){if(!e[n])continue;let t=e[n].files.filter(e=>e.endsWith(".css"));i.push(...t)}}return 0===i.length?null:(0,r.jsx)(r.Fragment,{children:i.map(e=>(0,r.jsx)("link",{precedence:"dynamic",rel:"stylesheet",href:n.assetPrefix+"/_next/"+encodeURI(e),as:"style"},e))})}},3297:function(e,t){"use strict";t.Z=(e,t=0)=>{let n=~~t,r=0;for(let t=0;t<e.length;t++)r+=e[t];return(n+=r%256)%256}}},function(e){e.O(0,[2971,7023,1744],function(){return e(e.s=8071)}),_N_E=e.O()}]);