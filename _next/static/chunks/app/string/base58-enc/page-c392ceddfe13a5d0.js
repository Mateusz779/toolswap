(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3933],{193:function(e,r,t){Promise.resolve().then(t.bind(t,7450)),Promise.resolve().then(t.bind(t,912)),Promise.resolve().then(t.bind(t,1481))},7450:function(e,r,t){"use strict";t.d(r,{default:function(){return i}});var n=t(7437),o=t(2265),a=t(3559),l=t(6300).Buffer;let f=e=>{let r=l.from(e,"utf8");return a.Z.encode(r)};function i(){let[e,r]=(0,o.useState)("");return(0,n.jsxs)("div",{className:"w-full ",children:[(0,n.jsx)("textarea",{value:e,onChange:e=>r(e.target.value),placeholder:"Enter your text here",rows:6,className:"my-2 w-full max-w-2xl textarea textarea-bordered textarea-md"}),(0,n.jsx)("h2",{className:"font-bold",children:"Result:"}),(0,n.jsx)("textarea",{value:f(e),placeholder:"Output here",readOnly:!0,rows:6,className:"my-2 w-full max-w-2xl textarea textarea-bordered textarea-md"})]})}},3559:function(e,r,t){"use strict";t.d(r,{Z:function(){return n}});var n=function(e){if(e.length>=255)throw TypeError("Alphabet too long");let r=new Uint8Array(256);for(let e=0;e<r.length;e++)r[e]=255;for(let t=0;t<e.length;t++){let n=e.charAt(t),o=n.charCodeAt(0);if(255!==r[o])throw TypeError(n+" is ambiguous");r[o]=t}let t=e.length,n=e.charAt(0),o=Math.log(t)/Math.log(256),a=Math.log(256)/Math.log(t);function l(e){if("string"!=typeof e)throw TypeError("Expected String");if(0===e.length)return new Uint8Array;let a=0,l=0,f=0;for(;e[a]===n;)l++,a++;let i=(e.length-a)*o+1>>>0,u=new Uint8Array(i);for(;e[a];){let n=r[e.charCodeAt(a)];if(255===n)return;let o=0;for(let e=i-1;(0!==n||o<f)&&-1!==e;e--,o++)n+=t*u[e]>>>0,u[e]=n%256>>>0,n=n/256>>>0;if(0!==n)throw Error("Non-zero carry");f=o,a++}let h=i-f;for(;h!==i&&0===u[h];)h++;let c=new Uint8Array(l+(i-h)),s=l;for(;h!==i;)c[s++]=u[h++];return c}return{encode:function(r){if(r instanceof Uint8Array||(ArrayBuffer.isView(r)?r=new Uint8Array(r.buffer,r.byteOffset,r.byteLength):Array.isArray(r)&&(r=Uint8Array.from(r))),!(r instanceof Uint8Array))throw TypeError("Expected Uint8Array");if(0===r.length)return"";let o=0,l=0,f=0,i=r.length;for(;f!==i&&0===r[f];)f++,o++;let u=(i-f)*a+1>>>0,h=new Uint8Array(u);for(;f!==i;){let e=r[f],n=0;for(let r=u-1;(0!==e||n<l)&&-1!==r;r--,n++)e+=256*h[r]>>>0,h[r]=e%t>>>0,e=e/t>>>0;if(0!==e)throw Error("Non-zero carry");l=n,f++}let c=u-l;for(;c!==u&&0===h[c];)c++;let s=n.repeat(o);for(;c<u;++c)s+=e.charAt(h[c]);return s},decodeUnsafe:l,decode:function(e){let r=l(e);if(r)return r;throw Error("Non-base"+t+" character")}}}("123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz")}},function(e){e.O(0,[7565,2971,7023,1744],function(){return e(e.s=193)}),_N_E=e.O()}]);