(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[224],{2614:function(e,t,n){Promise.resolve().then(n.bind(n,5433))},5433:function(e,t,n){"use strict";var r=n(7437),a=n(2265);let l=(e,t,n)=>{let r;if(t===n)return e;switch(t){case"Celsius":r=e;break;case"Fahrenheit":r=5/9*(e-32);break;case"Kelvin":r=e-273.15;break;case"Rankine":r=5/9*(e-491.67);break;default:throw Error("Unsupported temperature unit")}switch(n){case"Celsius":return r;case"Fahrenheit":return 1.8*r+32;case"Kelvin":return r+273.15;case"Rankine":return 1.8*r+491.67;default:throw Error("Unsupported temperature unit")}};t.default=()=>{let[e,t]=(0,a.useState)(""),[n,s]=(0,a.useState)("Celsius"),[u,i]=(0,a.useState)("Fahrenheit"),[c,o]=(0,a.useState)(""),h=(e,t,n)=>l(Number(e),t,n).toFixed(3);return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("div",{className:"grid grid-cols-2",children:[(0,r.jsx)("input",{type:"number",className:"mb-2 w-full input input-bordered",value:e,onChange:e=>{let r=e.target.value;t(r),o(h(Number(r)||0,n,u))},placeholder:"Value to convert"}),(0,r.jsxs)("select",{className:"select select-bordered w-full mb-2",value:n,onChange:t=>{s(t.target.value),o(h(Number(e)||0,t.target.value,u))},children:[(0,r.jsx)("option",{value:"Celsius",children:"Celsius (\xb0C)"}),(0,r.jsx)("option",{value:"Fahrenheit",children:"Fahrenheit (\xb0F)"}),(0,r.jsx)("option",{value:"Kelvin",children:"Kelvin (K)"}),(0,r.jsx)("option",{value:"Rankine",children:"Rankine (\xb0R)"})]}),(0,r.jsx)("input",{type:"number",className:"mb-2 w-full input input-bordered",value:c,onChange:e=>{let r=e.target.value;o(r),t(h(Number(r)||0,u,n))},placeholder:"Value to convert"}),(0,r.jsxs)("select",{className:"select select-bordered w-full mb-4",value:u,onChange:t=>{i(t.target.value),o(h(Number(e)||0,n,t.target.value))},children:[(0,r.jsx)("option",{value:"Celsius",children:"Celsius (\xb0C)"}),(0,r.jsx)("option",{value:"Fahrenheit",children:"Fahrenheit (\xb0F)"}),(0,r.jsx)("option",{value:"Kelvin",children:"Kelvin (K)"}),(0,r.jsx)("option",{value:"Rankine",children:"Rankine (\xb0R)"})]})]})})}}},function(e){e.O(0,[971,23,744],function(){return e(e.s=2614)}),_N_E=e.O()}]);