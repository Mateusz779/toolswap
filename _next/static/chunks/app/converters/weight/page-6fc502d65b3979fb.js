(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2825,7421,7957,6347],{208:function(e,l,a){Promise.resolve().then(a.bind(a,6645))},6645:function(e,l,a){"use strict";var t=a(7437),s=a(2265);l.default=e=>{let l=e.conversionFactors,[a,r]=(0,s.useState)(""),[n,u]=(0,s.useState)(e.from),[c,o]=(0,s.useState)(e.to),[i,m]=(0,s.useState)(""),[d,b]=(0,s.useState)("2"),v=(a,t,s,r)=>(a*l[e.reverse?s:t]/l[e.reverse?t:s]).toFixed(r?Number(r):Number(d));return(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)("div",{className:"grid grid-cols-2",children:[(0,t.jsx)("input",{type:"number",className:"mb-2 w-full input input-bordered",value:a,onChange:e=>{let l=e.target.value;r(l),m(v(Number(l)||0,n,c))},placeholder:"Value to convert"}),(0,t.jsx)("select",{className:"mb-2 ml-2 w-full select select-bordered","aria-label":"from unit select",name:"from-unit",value:n,onChange:e=>{u(e.target.value),m(v(Number(a)||0,e.target.value,c))},children:Object.keys(l).map(e=>(0,t.jsx)("option",{value:e,children:e},e))}),(0,t.jsx)("input",{type:"number",className:"mb-2 w-full input input-bordered",value:i,onChange:e=>{let l=e.target.value;m(l),r(v(Number(l)||0,c,n))},placeholder:"Value to convert"}),(0,t.jsx)("select",{className:"mb-4 ml-2 w-full select select-bordered","aria-label":"to unit select",name:"to-unit",value:c,onChange:e=>{o(e.target.value),m(v(Number(a)||0,n,e.target.value))},children:Object.keys(l).map(e=>(0,t.jsx)("option",{value:e,children:e},e))}),(0,t.jsx)("div",{className:"col-span-1"}),(0,t.jsxs)("label",{className:"ml-2 w-full max-w-xs  form-control",children:[(0,t.jsx)("div",{className:"label",children:(0,t.jsx)("span",{className:"label-text",children:"Dimension"})}),(0,t.jsx)("select",{className:"w-full select select-bordered",value:d,onChange:e=>{b(e.target.value),m(v(Number(a)||0,n,c,e.target.value))},children:Array.from({length:11},()=>0).map((e,l)=>(0,t.jsx)("option",{value:l,children:l},l))})]})]})})}}},function(e){e.O(0,[2971,7023,1744],function(){return e(e.s=208)}),_N_E=e.O()}]);