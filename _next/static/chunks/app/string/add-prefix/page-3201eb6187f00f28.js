(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2925],{9951:function(e,t,n){Promise.resolve().then(n.bind(n,7876)),Promise.resolve().then(n.bind(n,912)),Promise.resolve().then(n.bind(n,1481))},7876:function(e,t,n){"use strict";n.d(t,{default:function(){return l}});var r=n(2574),a=n(5032);function l(){let[e,t]=(0,a.useState)(""),[n,l]=(0,a.useState)("");return(0,r.BX)("div",{children:[(0,r.tZ)("input",{type:"text",placeholder:"Prefix",className:"input input-bordered w-full max-w-2xl my-2",value:n,onChange:e=>l(e.target.value)}),(0,r.tZ)("textarea",{value:e,onChange:e=>t(e.target.value),placeholder:"Enter your text here",rows:6,className:"textarea textarea-bordered max-w-2xl my-2 w-full"}),(0,r.tZ)("h2",{className:"font-bold",children:"Result:"}),(0,r.tZ)("textarea",{value:e.split("\n").map(e=>"".concat(n).concat(e)).join("\n"),placeholder:"Output here",readOnly:!0,rows:6,className:"textarea textarea-bordered max-w-2xl my-2 w-full"})]})}},912:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"BailoutToCSR",{enumerable:!0,get:function(){return a}});let r=n(5592);function a(e){let{reason:t,children:n}=e;if("undefined"==typeof window)throw new r.BailoutToCSRError(t);return n}},1481:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"PreloadCss",{enumerable:!0,get:function(){return l}});let r=n(9099),a=n(8512);function l(e){let{moduleIds:t}=e;if("undefined"!=typeof window)return null;let n=(0,a.getExpectedRequestStore)("next/dynamic css"),l=[];if(n.reactLoadableManifest&&t){let e=n.reactLoadableManifest;for(let n of t){if(!e[n])continue;let t=e[n].files.filter(e=>e.endsWith(".css"));l.push(...t)}}return 0===l.length?null:(0,r.jsx)(r.Fragment,{children:l.map(e=>(0,r.jsx)("link",{precedence:"dynamic",rel:"stylesheet",href:n.assetPrefix+"/_next/"+encodeURI(e),as:"style"},e))})}},2574:function(e,t,n){"use strict";n.d(t,{BX:function(){return r.jsxs},HY:function(){return r.Fragment},tZ:function(){return r.jsx}}),n(5032);var r=n(7682)}},function(e){e.O(0,[3335,1744],function(){return e(e.s=9951)}),_N_E=e.O()}]);