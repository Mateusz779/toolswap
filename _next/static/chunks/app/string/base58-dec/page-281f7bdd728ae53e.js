(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3957],{3944:function(e,t,r){Promise.resolve().then(r.bind(r,2534)),Promise.resolve().then(r.bind(r,912)),Promise.resolve().then(r.bind(r,1481))},2534:function(e,t,r){"use strict";r.d(t,{default:function(){return i}});var n=r(7437),o=r(2265),l=r(3559);let a=e=>{let t=l.Z.decode(e);return new TextDecoder().decode(t)};function i(){let[e,t]=(0,o.useState)(""),[r,l]=(0,o.useState)("");return(0,n.jsxs)("div",{className:"w-full",children:[(0,n.jsx)("textarea",{value:e,onChange:e=>{t(e.target.value);try{l(a(e.target.value))}catch(e){l("Error! The string to be decoded is not correctly encoded.")}},placeholder:"Enter your text here",rows:6,className:"textarea textarea-bordered textarea-md max-w-2xl my-2 w-full"}),(0,n.jsx)("h2",{className:"font-bold",children:"Result:"}),(0,n.jsx)("textarea",{value:r,placeholder:"Output here",readOnly:!0,rows:6,className:"textarea textarea-bordered textarea-md max-w-2xl my-2 w-full"})]})}},912:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"BailoutToCSR",{enumerable:!0,get:function(){return o}});let n=r(5592);function o(e){let{reason:t,children:r}=e;if("undefined"==typeof window)throw new n.BailoutToCSRError(t);return r}},1481:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"PreloadCss",{enumerable:!0,get:function(){return l}});let n=r(7437),o=r(8512);function l(e){let{moduleIds:t}=e;if("undefined"!=typeof window)return null;let r=(0,o.getExpectedRequestStore)("next/dynamic css"),l=[];if(r.reactLoadableManifest&&t){let e=r.reactLoadableManifest;for(let r of t){if(!e[r])continue;let t=e[r].files.filter(e=>e.endsWith(".css"));l.push(...t)}}return 0===l.length?null:(0,n.jsx)(n.Fragment,{children:l.map(e=>(0,n.jsx)("link",{precedence:"dynamic",rel:"stylesheet",href:r.assetPrefix+"/_next/"+encodeURI(e),as:"style"},e))})}},3559:function(e,t,r){"use strict";r.d(t,{Z:function(){return n}});var n=function(e){if(e.length>=255)throw TypeError("Alphabet too long");let t=new Uint8Array(256);for(let e=0;e<t.length;e++)t[e]=255;for(let r=0;r<e.length;r++){let n=e.charAt(r),o=n.charCodeAt(0);if(255!==t[o])throw TypeError(n+" is ambiguous");t[o]=r}let r=e.length,n=e.charAt(0),o=Math.log(r)/Math.log(256),l=Math.log(256)/Math.log(r);function a(e){if("string"!=typeof e)throw TypeError("Expected String");if(0===e.length)return new Uint8Array;let l=0,a=0,i=0;for(;e[l]===n;)a++,l++;let f=(e.length-l)*o+1>>>0,u=new Uint8Array(f);for(;e[l];){let n=t[e.charCodeAt(l)];if(255===n)return;let o=0;for(let e=f-1;(0!==n||o<i)&&-1!==e;e--,o++)n+=r*u[e]>>>0,u[e]=n%256>>>0,n=n/256>>>0;if(0!==n)throw Error("Non-zero carry");i=o,l++}let c=f-i;for(;c!==f&&0===u[c];)c++;let s=new Uint8Array(a+(f-c)),d=a;for(;c!==f;)s[d++]=u[c++];return s}return{encode:function(t){if(t instanceof Uint8Array||(ArrayBuffer.isView(t)?t=new Uint8Array(t.buffer,t.byteOffset,t.byteLength):Array.isArray(t)&&(t=Uint8Array.from(t))),!(t instanceof Uint8Array))throw TypeError("Expected Uint8Array");if(0===t.length)return"";let o=0,a=0,i=0,f=t.length;for(;i!==f&&0===t[i];)i++,o++;let u=(f-i)*l+1>>>0,c=new Uint8Array(u);for(;i!==f;){let e=t[i],n=0;for(let t=u-1;(0!==e||n<a)&&-1!==t;t--,n++)e+=256*c[t]>>>0,c[t]=e%r>>>0,e=e/r>>>0;if(0!==e)throw Error("Non-zero carry");a=n,i++}let s=u-a;for(;s!==u&&0===c[s];)s++;let d=n.repeat(o);for(;s<u;++s)d+=e.charAt(c[s]);return d},decodeUnsafe:a,decode:function(e){let t=a(e);if(t)return t;throw Error("Non-base"+r+" character")}}}("123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz")}},function(e){e.O(0,[2971,7023,1744],function(){return e(e.s=3944)}),_N_E=e.O()}]);