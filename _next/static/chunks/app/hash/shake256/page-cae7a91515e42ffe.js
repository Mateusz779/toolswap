(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7869],{65116:(e,a,t)=>{Promise.resolve().then(t.bind(t,92527)),Promise.resolve().then(t.bind(t,10912)),Promise.resolve().then(t.bind(t,85025))},92527:(e,a,t)=>{"use strict";t.d(a,{default:()=>u});var l=t(57437),s=t(2265),r=t(41182);let n="SHAKE256";function u(){let[e,a]=(0,s.useState)(""),[t,u]=(0,s.useState)(""),[d,o]=(0,s.useState)(256);return(0,l.jsxs)("div",{className:"w-full ",children:[(0,l.jsxs)("label",{className:"form-control w-full max-w-xs",children:[(0,l.jsx)("div",{className:"label",children:(0,l.jsx)("span",{className:"label-text",children:"Length:"})}),(0,l.jsx)("input",{type:"number",value:d,min:8,max:1024,step:8,onChange:a=>{let t=Number(a.target.value),l=new r.Z(n,"TEXT",{encoding:"UTF8"});if(l.update(e),t%8==0)o(t),u(l.getHash("HEX",{outputLen:t}));else{let e=8*Math.round(t/8);o(e),u(l.getHash("HEX",{outputLen:e}))}},placeholder:"Type here",className:"input input-bordered w-full max-w-xs"})]}),(0,l.jsx)("textarea",{value:e,onChange:e=>{a(e.target.value);let t=new r.Z(n,"TEXT",{encoding:"UTF8"});t.update(e.target.value),u(t.getHash("HEX",{outputLen:d}))},placeholder:"Enter your text here",rows:6,className:"my-2 w-full max-w-2xl textarea textarea-bordered textarea-md"}),(0,l.jsx)("h2",{className:"font-bold",children:"Result:"}),(0,l.jsx)("textarea",{value:t,placeholder:"Output here",readOnly:!0,rows:3,className:"my-2 w-full max-w-2xl textarea textarea-bordered textarea-md"})]})}}},e=>{var a=a=>e(e.s=a);e.O(0,[6403,7130,6215,1744],()=>a(65116)),_N_E=e.O()}]);