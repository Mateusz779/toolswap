(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2825,7421,7957,6347],{3487:function(e,t,l){Promise.resolve().then(l.bind(l,6645))},6645:function(e,t,l){"use strict";var a=l(2574),r=l(5032);t.default=e=>{let t=e.conversionFactors,[l,n]=(0,r.useState)(""),[u,s]=(0,r.useState)(e.from),[c,o]=(0,r.useState)(e.to),[i,m]=(0,r.useState)(""),[d,v]=(0,r.useState)("2"),b=(l,a,r,n)=>(l*t[e.reverse?r:a]/t[e.reverse?a:r]).toFixed(n?Number(n):Number(d));return(0,a.tZ)(a.HY,{children:(0,a.BX)("div",{className:"grid grid-cols-2",children:[(0,a.tZ)("input",{type:"number",className:"mb-2 w-full input input-bordered",value:l,onChange:e=>{let t=e.target.value;n(t),m(b(Number(t)||0,u,c))},placeholder:"Value to convert"}),(0,a.tZ)("select",{className:"mb-2 ml-2 w-full select select-bordered",value:u,onChange:e=>{s(e.target.value),m(b(Number(l)||0,e.target.value,c))},children:Object.keys(t).map(e=>(0,a.tZ)("option",{value:e,children:e},e))}),(0,a.tZ)("input",{type:"number",className:"mb-2 w-full input input-bordered",value:i,onChange:e=>{let t=e.target.value;m(t),n(b(Number(t)||0,c,u))},placeholder:"Value to convert"}),(0,a.tZ)("select",{className:"mb-4 ml-2 w-full select select-bordered",value:c,onChange:e=>{o(e.target.value),m(b(Number(l)||0,u,e.target.value))},children:Object.keys(t).map(e=>(0,a.tZ)("option",{value:e,children:e},e))}),(0,a.tZ)("div",{className:"col-span-1"}),(0,a.BX)("label",{className:" ml-2 form-control w-full max-w-xs",children:[(0,a.tZ)("div",{className:"label",children:(0,a.tZ)("span",{className:"label-text",children:"Dimension"})}),(0,a.tZ)("select",{className:"w-full select select-bordered",value:d,onChange:e=>{v(e.target.value),m(b(Number(l)||0,u,c,e.target.value))},children:Array.from({length:11},()=>0).map((e,t)=>(0,a.tZ)("option",{value:t,children:t},t))})]})]})})}},2574:function(e,t,l){"use strict";l.d(t,{BX:function(){return a.jsxs},HY:function(){return a.Fragment},tZ:function(){return a.jsx}}),l(5032);var a=l(7682)}},function(e){e.O(0,[3335,1744],function(){return e(e.s=3487)}),_N_E=e.O()}]);