(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[347],{6299:function(e,t,l){Promise.resolve().then(l.bind(l,4877))},4877:function(e,t,l){"use strict";var s=l(7437),r=l(2265);let a={liters:1,milliliters:1e3,microliters:1e6,nanoliters:1e9,gallons:.264172,quarts:1.05669,pints:2.11338,cubicMeters:.001,cubicCentimeters:1e3};t.default=()=>{let[e,t]=(0,r.useState)(""),[l,u]=(0,r.useState)("liters"),[n,i]=(0,r.useState)("milliliters"),[c,o]=(0,r.useState)(""),m=(e,t,l)=>(e*a[t]/a[l]).toFixed(3);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("div",{className:"grid grid-cols-2",children:[(0,s.jsx)("input",{type:"number",className:"mb-2 w-full input input-bordered",value:e,onChange:e=>{let s=e.target.value;t(s),o(m(Number(s)||0,n,l))},placeholder:"Value to convert"}),(0,s.jsx)("select",{className:"mb-2 ml-2 w-full select select-bordered",value:l,onChange:t=>{u(t.target.value),o(m(Number(e)||0,n,t.target.value))},children:Object.keys(a).map(e=>(0,s.jsx)("option",{value:e,children:e},e))}),(0,s.jsx)("input",{type:"number",className:"mb-2 w-full input input-bordered",value:c,onChange:e=>{let s=e.target.value;o(s),t(m(Number(s)||0,l,n))},placeholder:"Value to convert"}),(0,s.jsx)("select",{className:"mb-4 ml-2 w-full select select-bordered",value:n,onChange:t=>{i(t.target.value),o(m(Number(e)||0,t.target.value,l))},children:Object.keys(a).map(e=>(0,s.jsx)("option",{value:e,children:e},e))})]})," "]})}}},function(e){e.O(0,[971,23,744],function(){return e(e.s=6299)}),_N_E=e.O()}]);