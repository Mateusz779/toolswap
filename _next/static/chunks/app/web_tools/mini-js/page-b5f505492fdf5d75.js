(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5387],{4643:function(e,t,a){Promise.resolve().then(a.bind(a,830)),Promise.resolve().then(a.bind(a,912)),Promise.resolve().then(a.bind(a,1481))},830:function(e,t,a){"use strict";a.d(t,{default:function(){return s}});var r=a(7437),n=a(2265),l=a(3099);function s(){let[e,t]=(0,n.useState)(""),[a,s]=(0,n.useState)(""),[c,i]=(0,n.useState)(""),o=async e=>{t(e.target.value);try{var a,r=await (0,l.Sf)(e.target.value);s(r.code||"");let t=e.target.value.length,n=(null===(a=r.code)||void 0===a?void 0:a.length)||0,c=t-n,o=(c/t*100).toFixed(2);i("Original Size: ".concat(t,", Minified Size: ").concat(n,", Savings: ").concat(c," (").concat(o,"%)"))}catch(e){s("Invaild JavaScript syntax!")}};return(0,r.jsxs)("div",{className:"w-full ",children:[(0,r.jsx)("textarea",{value:e,onChange:o,placeholder:"Enter your text here",rows:6,className:"my-2 w-full max-w-2xl textarea textarea-bordered textarea-md"}),(0,r.jsx)("h2",{className:"font-bold",children:"Result:"}),(0,r.jsx)("textarea",{value:a,placeholder:"Output here",readOnly:!0,rows:6,className:"my-2 w-full max-w-2xl textarea textarea-bordered textarea-md"}),(0,r.jsx)("p",{className:"text-green-600",children:c})]})}}},function(e){e.O(0,[2242,7565,3099,2971,7023,1744],function(){return e(e.s=4643)}),_N_E=e.O()}]);