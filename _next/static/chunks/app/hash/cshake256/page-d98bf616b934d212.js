(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[650],{567:function(e,t,a){Promise.resolve().then(a.bind(a,1374)),Promise.resolve().then(a.bind(a,912)),Promise.resolve().then(a.bind(a,1481))},1374:function(e,t,a){"use strict";a.d(t,{default:function(){return u}});var l=a(7437),s=a(2265),n=a(1182);let r="CSHAKE256";function u(){let[e,t]=(0,s.useState)(""),[a,u]=(0,s.useState)(""),[o,i]=(0,s.useState)(""),[c,d]=(0,s.useState)(256);return(0,l.jsxs)("div",{className:"w-full ",children:[(0,l.jsxs)("label",{className:"form-control w-full max-w-xs",children:[(0,l.jsx)("div",{className:"label",children:(0,l.jsx)("span",{className:"label-text",children:"Customization String:"})}),(0,l.jsx)("input",{type:"text",value:o,onChange:t=>{i(t.target.value);let a=new n.Z(r,"TEXT",{encoding:"UTF8",customization:{value:t.target.value,format:"TEXT"}});a.update(e),u(a.getHash("HEX",{outputLen:c}))},placeholder:"Type here",className:"input input-bordered w-full max-w-xs"})]}),(0,l.jsxs)("label",{className:"form-control w-full max-w-xs",children:[(0,l.jsx)("div",{className:"label",children:(0,l.jsx)("span",{className:"label-text",children:"Length:"})}),(0,l.jsx)("input",{type:"number",value:c,min:8,max:1024,step:8,onChange:t=>{let a=Number(t.target.value),l=new n.Z(r,"TEXT",{encoding:"UTF8",customization:{value:o,format:"TEXT"}});if(l.update(e),a%8==0)d(a),u(l.getHash("HEX",{outputLen:a}));else{let e=8*Math.round(a/8);d(e),u(l.getHash("HEX",{outputLen:e}))}},placeholder:"Type here",className:"input input-bordered w-full max-w-xs"})]}),(0,l.jsx)("textarea",{value:e,onChange:e=>{t(e.target.value);let a=new n.Z(r,"TEXT",{encoding:"UTF8",customization:{value:o,format:"TEXT"}});a.update(e.target.value),u(a.getHash("HEX",{outputLen:c}))},placeholder:"Enter your text here",rows:6,className:"my-2 w-full max-w-2xl textarea textarea-bordered textarea-md"}),(0,l.jsx)("h2",{className:"font-bold",children:"Result:"}),(0,l.jsx)("textarea",{value:a,placeholder:"Output here",readOnly:!0,rows:3,className:"my-2 w-full max-w-2xl textarea textarea-bordered textarea-md"})]})}}},function(e){e.O(0,[2142,2971,7023,1744],function(){return e(e.s=567)}),_N_E=e.O()}]);