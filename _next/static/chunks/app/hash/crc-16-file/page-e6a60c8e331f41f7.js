(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6686],{87585:(e,l,t)=>{Promise.resolve().then(t.bind(t,19664)),Promise.resolve().then(t.bind(t,10912)),Promise.resolve().then(t.bind(t,85025))},19664:(e,l,t)=>{"use strict";t.d(l,{default:()=>n});var a=t(57437),r=t(2265),s=t(79171);function n(){let[e,l]=(0,r.useState)(null),[t,n]=(0,r.useState)(null),i=async e=>{var t;let a=null===(t=e.target.files)||void 0===t?void 0:t[0];if(!a){n("No file selected");return}try{let e=await a.arrayBuffer();l(s.ZP.crc16(new Uint8Array(e)).toString(16)),n(null)}catch(e){n("Failed to calculate hash")}};return(0,a.jsxs)("div",{className:"w-full ",children:[(0,a.jsx)("input",{type:"file",className:"file-input file-input-bordered w-full max-w-xs",onChange:i}),(0,a.jsx)("h2",{className:"font-bold",children:"Result:"}),(0,a.jsx)("textarea",{value:e||t||"",placeholder:"Output here",readOnly:!0,rows:4,className:"my-2 w-full max-w-2xl textarea textarea-bordered textarea-md"})]})}}},e=>{var l=l=>e(e.s=l);e.O(0,[5349,9171,7130,6215,1744],()=>l(87585)),_N_E=e.O()}]);