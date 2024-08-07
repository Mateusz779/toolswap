(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[746],{3400:function(e,a,t){Promise.resolve().then(t.bind(t,7128)),Promise.resolve().then(t.t.bind(t,231,23))},7128:function(e,a,t){"use strict";var c=t(7437),s=t(6008),l=t(2265);a.default=()=>{let[e,a]=(0,l.useState)(16),[t,r]=(0,l.useState)(!0),[n,o]=(0,l.useState)(!0),[i,d]=(0,l.useState)(!0),[h,u]=(0,l.useState)(!0),[x,p]=(0,l.useState)(""),[m,b]=(0,l.useState)(!0),v=async()=>{let e=localStorage.getItem("passwordGeneratorSettings");if(e){let{length:t,includeUppercase:c,includeLowercase:s,includeNumbers:l,includeSpecial:n}=JSON.parse(e);await a(t),await r(c),await o(s),await d(l),await u(n),await b(!1)}};(0,l.useEffect)(()=>{v()},[]);let f=()=>{m||localStorage.setItem("passwordGeneratorSettings",JSON.stringify({length:e,includeUppercase:t,includeLowercase:n,includeNumbers:i,includeSpecial:h}))};return(0,l.useEffect)(()=>{f()},[e,t,n,i,h]),(0,c.jsx)(c.Fragment,{children:(0,c.jsxs)("div",{className:"flex flex-col items-center p-4 space-y-4",children:[(0,c.jsx)("div",{className:"prose",children:(0,c.jsx)("h1",{children:"Password Generator"})}),(0,c.jsxs)("div",{className:"w-full max-w-xs form-control",children:[(0,c.jsxs)("label",{className:"label",children:[(0,c.jsx)("span",{className:"label-text",children:"Password Length"}),(0,c.jsx)("span",{className:"label-text-alt",children:e})]}),(0,c.jsx)("input",{type:"range",min:"8",max:"128",value:e,"aria-label":"password length",onChange:e=>a(Number(e.target.value)),className:"range range-xs"})]}),(0,c.jsxs)("div",{className:"form-control",children:[(0,c.jsxs)("label",{className:"cursor-pointer label",children:[(0,c.jsx)("span",{className:"label-text",children:"Include Uppercase Letters"}),(0,c.jsx)("input",{type:"checkbox",checked:t,onChange:e=>r(e.target.checked),className:"checkbox checkbox-primary"})]}),(0,c.jsxs)("label",{className:"cursor-pointer label",children:[(0,c.jsx)("span",{className:"label-text",children:"Include Lowercase Letters"}),(0,c.jsx)("input",{type:"checkbox",checked:n,onChange:e=>o(e.target.checked),className:"checkbox checkbox-primary"})]}),(0,c.jsxs)("label",{className:"cursor-pointer label",children:[(0,c.jsx)("span",{className:"label-text",children:"Include Numbers"}),(0,c.jsx)("input",{type:"checkbox",checked:i,onChange:e=>d(e.target.checked),className:"checkbox checkbox-primary"})]}),(0,c.jsxs)("label",{className:"cursor-pointer label",children:[(0,c.jsx)("span",{className:"pr-2 label-text",children:"Include Special Characters"}),(0,c.jsx)("input",{type:"checkbox",checked:h,onChange:e=>u(e.target.checked),className:"checkbox checkbox-primary"})]})]}),(0,c.jsx)("button",{onClick:()=>{let a="";t&&(a+="ABCDEFGHIJKLMNOPQRSTUVWXYZ"),n&&(a+="abcdefghijklmnopqrstuvwxyz"),i&&(a+="0123456789"),h&&(a+="!@#$%^&*()_+[]{}|;:,.<>?");let c="";for(let t=0;t<e;t++)c+=a.charAt(Math.floor(Math.random()*a.length));p(c)},className:"btn btn-primary",children:"Generate Password"}),(0,c.jsxs)("div",{className:"w-full max-w-xs form-control",children:[(0,c.jsx)("label",{className:"label",children:(0,c.jsx)("span",{className:"label-text",children:"Generated Password"})}),(0,c.jsx)("input",{type:"text",value:x,readOnly:!0,"aria-label":"password output",className:"w-full input input-bordered"})]}),(0,c.jsx)(s.Z,{content:x})]})})}},6008:function(e,a,t){"use strict";t.d(a,{Z:function(){return r}});var c=t(7437),s=t(8726);function l(){return(0,c.jsx)("svg",{id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",viewBox:"0 0 115.77 122.88",className:"w-5 h-5 fill-black dark:fill-slate-300",xmlSpace:"preserve",enableBackground:"new 0 0 115.77 122.88",children:(0,c.jsx)("path",{d:"M89.62 13.96v7.73h12.2v.02c3.85.01 7.34 1.57 9.86 4.1 2.5 2.51 4.06 5.98 4.07 9.82h.02v73.3h-.02c-.01 3.84-1.57 7.33-4.1 9.86-2.51 2.5-5.98 4.06-9.82 4.07v.02H40.1v-.02c-3.84-.01-7.34-1.57-9.86-4.1-2.5-2.51-4.06-5.98-4.07-9.82h-.02V92.51h-12.2v-.02c-3.84-.01-7.34-1.57-9.86-4.1-2.5-2.51-4.06-5.98-4.07-9.82H0V13.95h.02c.01-3.85 1.58-7.34 4.1-9.86C6.63 1.59 10.1.03 13.94.02V0H75.67v.02c3.85.01 7.34 1.57 9.86 4.1 2.5 2.51 4.06 5.98 4.07 9.82h.02v.02zm-10.58 7.73v-7.75h.02c0-.91-.39-1.75-1.01-2.37-.61-.61-1.46-1-2.37-1v.02H13.95v-.02c-.91 0-1.75.39-2.37 1.01-.61.61-1 1.46-1 2.37h.02v64.62h-.02c0 .91.39 1.75 1.01 2.37.61.61 1.46 1 2.37 1v-.02h12.2V35.64h.02c.01-3.85 1.58-7.34 4.1-9.86 2.51-2.5 5.98-4.06 9.82-4.07v-.02H79.04zm26.14 87.23V35.63h.02c0-.91-.39-1.75-1.01-2.37-.61-.61-1.46-1-2.37-1v.02H40.09v-.02c-.91 0-1.75.39-2.37 1.01-.61.61-1 1.46-1 2.37h.02v73.3h-.02c0 .91.39 1.75 1.01 2.37.61.61 1.46 1 2.37 1v-.02H101.83v.02c.91 0 1.75-.39 2.37-1.01.61-.61 1-1.46 1-2.37h-.02v-.01z",fillRule:"evenodd",clipRule:"evenodd"})})}function r(e){return(0,c.jsx)("div",{className:"flex justify-center tooltip","data-tip":"Copy content",children:(0,c.jsx)("button",{"aria-label":"copy content",onClick:()=>{var a;a=e.content,window.isSecureContext?navigator.clipboard.writeText(a).then(()=>{s.ZP.success("Content copied to your clipboard.")}).catch(e=>{s.ZP.error("Error during copying content.")}):function(e){let a=document.createElement("textarea");a.value=e,document.body.appendChild(a),a.focus(),a.select();try{document.execCommand("copy"),s.ZP.success("Content copied to your clipboard.")}catch(e){s.ZP.error("Error during copying content.")}document.body.removeChild(a)}(a)},children:(0,c.jsx)(l,{})})})}}},function(e){e.O(0,[231,726,971,23,744],function(){return e(e.s=3400)}),_N_E=e.O()}]);