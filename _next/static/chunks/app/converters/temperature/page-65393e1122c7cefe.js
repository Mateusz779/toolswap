(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3224],{3250:function(e,t,n){Promise.resolve().then(n.bind(n,5433))},5433:function(e,t,n){"use strict";var r=n(7437),l=n(2265);let a=(e,t,n)=>{let r;if(t===n)return e;switch(t){case"Celsius":r=e;break;case"Fahrenheit":r=5/9*(e-32);break;case"Kelvin":r=e-273.15;break;case"Rankine":r=5/9*(e-491.67);break;default:throw Error("Unsupported temperature unit")}switch(n){case"Celsius":return r;case"Fahrenheit":return 1.8*r+32;case"Kelvin":return r+273.15;case"Rankine":return 1.8*r+491.67;default:throw Error("Unsupported temperature unit")}};t.default=()=>{let[e,t]=(0,l.useState)(""),[n,u]=(0,l.useState)("Celsius"),[s,i]=(0,l.useState)("Fahrenheit"),[c,o]=(0,l.useState)(""),[h,d]=(0,l.useState)("2"),v=(e,t,n,r)=>a(Number(e),t,n).toFixed(r?Number(r):Number(h));return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("div",{className:"grid grid-cols-2",children:[(0,r.jsx)("input",{type:"number",className:"pr-2 mb-2 w-full input input-bordered",value:e,onChange:e=>{let r=e.target.value;t(r),o(v(Number(r)||0,n,s))},placeholder:"Value to convert"}),(0,r.jsxs)("select",{className:"ml-2 w-full select select-bordered",value:n,onChange:t=>{u(t.target.value),o(v(Number(e)||0,t.target.value,s))},children:[(0,r.jsx)("option",{value:"Celsius",children:"Celsius (\xb0C)"}),(0,r.jsx)("option",{value:"Fahrenheit",children:"Fahrenheit (\xb0F)"}),(0,r.jsx)("option",{value:"Kelvin",children:"Kelvin (K)"}),(0,r.jsx)("option",{value:"Rankine",children:"Rankine (\xb0R)"})]}),(0,r.jsx)("input",{type:"number",className:"mb-2 w-full input input-bordered",value:c,onChange:e=>{let r=e.target.value;o(r),t(v(Number(r)||0,s,n))},placeholder:"Value to convert"}),(0,r.jsxs)("select",{className:"mb-4 ml-2 w-full select select-bordered",value:s,onChange:t=>{i(t.target.value),o(v(Number(e)||0,n,t.target.value))},children:[(0,r.jsx)("option",{value:"Celsius",children:"Celsius (\xb0C)"}),(0,r.jsx)("option",{value:"Fahrenheit",children:"Fahrenheit (\xb0F)"}),(0,r.jsx)("option",{value:"Kelvin",children:"Kelvin (K)"}),(0,r.jsx)("option",{value:"Rankine",children:"Rankine (\xb0R)"})]})]})})}}},function(e){e.O(0,[2971,7023,1744],function(){return e(e.s=3250)}),_N_E=e.O()}]);