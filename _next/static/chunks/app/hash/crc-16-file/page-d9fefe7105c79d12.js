(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6686],{2456:function(e,t,l){Promise.resolve().then(l.bind(l,9664)),Promise.resolve().then(l.bind(l,912)),Promise.resolve().then(l.bind(l,1481))},9664:function(e,t,l){"use strict";l.d(t,{default:function(){return s}});var a=l(7437),n=l(2265),r=l(9171);function s(){let[e,t]=(0,n.useState)(null),[l,s]=(0,n.useState)(null),u=async e=>{var l;let a=null===(l=e.target.files)||void 0===l?void 0:l[0];if(!a){s("No file selected");return}try{let e=await a.arrayBuffer();t(r.ZP.crc16(new Uint8Array(e)).toString(16)),s(null)}catch(e){s("Failed to calculate hash")}};return(0,a.jsxs)("div",{className:"w-full ",children:[(0,a.jsx)("input",{type:"file",className:"file-input file-input-bordered w-full max-w-xs",onChange:u}),(0,a.jsx)("h2",{className:"font-bold",children:"Result:"}),(0,a.jsx)("textarea",{value:e||l||"",placeholder:"Output here",readOnly:!0,rows:4,className:"my-2 w-full max-w-2xl textarea textarea-bordered textarea-md"})]})}}},function(e){e.O(0,[7565,9171,2971,7023,1744],function(){return e(e.s=2456)}),_N_E=e.O()}]);