(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9364],{7315:function(e,t,l){Promise.resolve().then(l.bind(l,696)),Promise.resolve().then(l.bind(l,912)),Promise.resolve().then(l.bind(l,1481))},696:function(e,t,l){"use strict";l.d(t,{default:function(){return u}});var a=l(7437),n=l(2265),r=l(1182);function u(){let[e,t]=(0,n.useState)(null),[l,u]=(0,n.useState)(null),s=async e=>{var l;let a=null===(l=e.target.files)||void 0===l?void 0:l[0];if(!a){u("No file selected");return}try{let e=await a.arrayBuffer(),l=new Uint8Array(e),n=new r.Z("SHAKE128","UINT8ARRAY");n.update(l);let s=n.getHash("HEX",{outputLen:256});t(s),u(null)}catch(e){u("Failed to calculate hash")}};return(0,a.jsxs)("div",{className:"w-full ",children:[(0,a.jsx)("input",{type:"file",className:"file-input file-input-bordered w-full max-w-xs",onChange:s}),(0,a.jsx)("h2",{className:"font-bold",children:"Result:"}),(0,a.jsx)("textarea",{value:e||l||"",placeholder:"Output here",readOnly:!0,rows:4,className:"my-2 w-full max-w-2xl textarea textarea-bordered textarea-md"})]})}}},function(e){e.O(0,[2142,2971,7023,1744],function(){return e(e.s=7315)}),_N_E=e.O()}]);