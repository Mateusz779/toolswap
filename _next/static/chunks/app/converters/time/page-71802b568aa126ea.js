(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[957],{4681:function(e,t,s){Promise.resolve().then(s.bind(s,4518))},4518:function(e,t,s){"use strict";var l=s(7437),n=s(2265);let a={nanoseconds:1e-9,microseconds:1e-6,milliseconds:.001,seconds:1,minutes:60,hours:3600,days:86400,weeks:604800,months:2629800,years:31557600,decade:315576e3,century:315576e4};t.default=()=>{let[e,t]=(0,n.useState)(""),[s,u]=(0,n.useState)("seconds"),[r,c]=(0,n.useState)("minutes"),[o,d]=(0,n.useState)(""),i=(e,t,s)=>(e*a[t]/a[s]).toFixed(3);return(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)("div",{className:"grid grid-cols-2",children:[(0,l.jsx)("input",{type:"number",className:"mb-2 w-full input input-bordered",value:e,onChange:e=>{let l=e.target.value;t(l),d(i(Number(l)||0,s,r))},placeholder:"Value to convert"}),(0,l.jsx)("select",{className:"mb-2 ml-2 w-full select select-bordered",value:s,onChange:t=>{u(t.target.value),d(i(Number(e)||0,t.target.value,r))},children:Object.keys(a).map(e=>(0,l.jsx)("option",{value:e,children:e},e))}),(0,l.jsx)("input",{type:"number",className:"mb-2 w-full input input-bordered",value:o,onChange:e=>{let l=e.target.value;d(l),t(i(Number(l)||0,r,s))},placeholder:"Value to convert"}),(0,l.jsx)("select",{className:"mb-4 ml-2 w-full select select-bordered",value:r,onChange:t=>{c(t.target.value),d(i(Number(e)||0,s,t.target.value))},children:Object.keys(a).map(e=>(0,l.jsx)("option",{value:e,children:e},e))})]})})}}},function(e){e.O(0,[971,23,744],function(){return e(e.s=4681)}),_N_E=e.O()}]);