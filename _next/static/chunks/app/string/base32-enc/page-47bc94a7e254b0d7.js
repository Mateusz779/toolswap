(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3123],{78541:(r,e,t)=>{Promise.resolve().then(t.bind(t,61674)),Promise.resolve().then(t.bind(t,10912)),Promise.resolve().then(t.bind(t,85025))},61674:(r,e,t)=>{"use strict";t.d(e,{default:()=>c});var a=t(57437),o=t(2265),n=t(37017);function c(){let[r,e]=(0,o.useState)("");return(0,a.jsxs)("div",{className:"w-full ",children:[(0,a.jsx)("textarea",{value:r,onChange:r=>e(r.target.value),placeholder:"Enter your text here",rows:6,className:"my-2 w-full max-w-2xl textarea textarea-bordered textarea-md"}),(0,a.jsx)("h2",{className:"font-bold",children:"Result:"}),(0,a.jsx)("textarea",{value:n.encode(r),placeholder:"Output here",readOnly:!0,rows:6,className:"my-2 w-full max-w-2xl textarea textarea-bordered textarea-md"})]})}},37017:(r,e,t)=>{var a,o=t(20357);!function(){"use strict";var e="object"==typeof window?window:{};!e.HI_BASE32_NO_NODE_JS&&"object"==typeof o&&o.versions&&o.versions.node&&(e=t.g);var n=!e.HI_BASE32_NO_COMMON_JS&&r.exports,c=t.amdO,h="ABCDEFGHIJKLMNOPQRSTUVWXYZ234567".split(""),i={A:0,B:1,C:2,D:3,E:4,F:5,G:6,H:7,I:8,J:9,K:10,L:11,M:12,N:13,O:14,P:15,Q:16,R:17,S:18,T:19,U:20,V:21,W:22,X:23,Y:24,Z:25,2:26,3:27,4:28,5:29,6:30,7:31},d=[0,0,0,0,0,0,0,0],l=function(r,e){e.length>10&&(e="..."+e.substr(-10));var t=Error("Decoded data is not valid UTF-8. Maybe try base32.decode.asBytes()? Partial data after reading "+r+" bytes: "+e+" <-");throw t.position=r,t},s=function(r){for(var e,t,a="",o=r.length,n=0,c=0;n<o;){if((e=r[n++])<=127){a+=String.fromCharCode(e);continue}e>191&&e<=223?(t=31&e,c=1):e<=239?(t=15&e,c=2):e<=247?(t=7&e,c=3):l(n,a);for(var h=0;h<c;++h)((e=r[n++])<128||e>191)&&l(n,a),t<<=6,t+=63&e;t>=55296&&t<=57343&&l(n,a),t>1114111&&l(n,a),t<=65535?a+=String.fromCharCode(t):(t-=65536,a+=String.fromCharCode((t>>10)+55296),a+=String.fromCharCode((1023&t)+56320))}return a},f=function(r){if(""===r)return[];if(!/^[A-Z2-7=]+$/.test(r))throw Error("Invalid base32 characters");r=r.replace(/=/g,"");for(var e,t,a,o,n,c,h,d,l=[],s=0,f=r.length,A=0,u=f>>3<<3;A<u;)e=i[r.charAt(A++)],t=i[r.charAt(A++)],a=i[r.charAt(A++)],o=i[r.charAt(A++)],n=i[r.charAt(A++)],c=i[r.charAt(A++)],h=i[r.charAt(A++)],d=i[r.charAt(A++)],l[s++]=(e<<3|t>>>2)&255,l[s++]=(t<<6|a<<1|o>>>4)&255,l[s++]=(o<<4|n>>>1)&255,l[s++]=(n<<7|c<<2|h>>>3)&255,l[s++]=(h<<5|d)&255;var C=f-u;return 2===C?(e=i[r.charAt(A++)],t=i[r.charAt(A++)],l[s++]=(e<<3|t>>>2)&255):4===C?(e=i[r.charAt(A++)],t=i[r.charAt(A++)],a=i[r.charAt(A++)],o=i[r.charAt(A++)],l[s++]=(e<<3|t>>>2)&255,l[s++]=(t<<6|a<<1|o>>>4)&255):5===C?(e=i[r.charAt(A++)],t=i[r.charAt(A++)],a=i[r.charAt(A++)],o=i[r.charAt(A++)],n=i[r.charAt(A++)],l[s++]=(e<<3|t>>>2)&255,l[s++]=(t<<6|a<<1|o>>>4)&255,l[s++]=(o<<4|n>>>1)&255):7===C&&(e=i[r.charAt(A++)],t=i[r.charAt(A++)],a=i[r.charAt(A++)],o=i[r.charAt(A++)],n=i[r.charAt(A++)],c=i[r.charAt(A++)],h=i[r.charAt(A++)],l[s++]=(e<<3|t>>>2)&255,l[s++]=(t<<6|a<<1|o>>>4)&255,l[s++]=(o<<4|n>>>1)&255,l[s++]=(n<<7|c<<2|h>>>3)&255),l},A=function(r){for(var e,t,a,o,n,c="",i=r.length,d=0,l=5*parseInt(i/5);d<l;)e=r.charCodeAt(d++),t=r.charCodeAt(d++),a=r.charCodeAt(d++),o=r.charCodeAt(d++),n=r.charCodeAt(d++),c+=h[e>>>3]+h[(e<<2|t>>>6)&31]+h[t>>>1&31]+h[(t<<4|a>>>4)&31]+h[(a<<1|o>>>7)&31]+h[o>>>2&31]+h[(o<<3|n>>>5)&31]+h[31&n];var s=i-l;return 1===s?c+=h[(e=r.charCodeAt(d))>>>3]+h[e<<2&31]+"======":2===s?(e=r.charCodeAt(d++),t=r.charCodeAt(d),c+=h[e>>>3]+h[(e<<2|t>>>6)&31]+h[t>>>1&31]+h[t<<4&31]+"===="):3===s?(e=r.charCodeAt(d++),t=r.charCodeAt(d++),a=r.charCodeAt(d),c+=h[e>>>3]+h[(e<<2|t>>>6)&31]+h[t>>>1&31]+h[(t<<4|a>>>4)&31]+h[a<<1&31]+"==="):4===s&&(e=r.charCodeAt(d++),t=r.charCodeAt(d++),a=r.charCodeAt(d++),o=r.charCodeAt(d),c+=h[e>>>3]+h[(e<<2|t>>>6)&31]+h[t>>>1&31]+h[(t<<4|a>>>4)&31]+h[(a<<1|o>>>7)&31]+h[o>>>2&31]+h[o<<3&31]+"="),c},u=function(r){var e,t,a,o,n,c,i,l=!1,s="",f=0,A=0,u=r.length;if(""===r)return s;do{for(d[0]=d[5],d[1]=d[6],d[2]=d[7],i=A;f<u&&i<5;++f)(c=r.charCodeAt(f))<128?d[i++]=c:(c<2048?d[i++]=192|c>>6:(c<55296||c>=57344?d[i++]=224|c>>12:(c=65536+((1023&c)<<10|1023&r.charCodeAt(++f)),d[i++]=240|c>>18,d[i++]=128|c>>12&63),d[i++]=128|c>>6&63),d[i++]=128|63&c);A=i-5,f===u&&++f,f>u&&i<6&&(l=!0),e=d[0],i>4?(t=d[1],a=d[2],o=d[3],n=d[4],s+=h[e>>>3]+h[(e<<2|t>>>6)&31]+h[t>>>1&31]+h[(t<<4|a>>>4)&31]+h[(a<<1|o>>>7)&31]+h[o>>>2&31]+h[(o<<3|n>>>5)&31]+h[31&n]):1===i?s+=h[e>>>3]+h[e<<2&31]+"======":2===i?(t=d[1],s+=h[e>>>3]+h[(e<<2|t>>>6)&31]+h[t>>>1&31]+h[t<<4&31]+"===="):3===i?(t=d[1],a=d[2],s+=h[e>>>3]+h[(e<<2|t>>>6)&31]+h[t>>>1&31]+h[(t<<4|a>>>4)&31]+h[a<<1&31]+"==="):(t=d[1],a=d[2],o=d[3],s+=h[e>>>3]+h[(e<<2|t>>>6)&31]+h[t>>>1&31]+h[(t<<4|a>>>4)&31]+h[(a<<1|o>>>7)&31]+h[o>>>2&31]+h[o<<3&31]+"=")}while(!l);return s},C=function(r){for(var e,t,a,o,n,c="",i=r.length,d=0,l=5*parseInt(i/5);d<l;)e=r[d++],t=r[d++],a=r[d++],o=r[d++],n=r[d++],c+=h[e>>>3]+h[(e<<2|t>>>6)&31]+h[t>>>1&31]+h[(t<<4|a>>>4)&31]+h[(a<<1|o>>>7)&31]+h[o>>>2&31]+h[(o<<3|n>>>5)&31]+h[31&n];var s=i-l;return 1===s?c+=h[(e=r[d])>>>3]+h[e<<2&31]+"======":2===s?(e=r[d++],t=r[d],c+=h[e>>>3]+h[(e<<2|t>>>6)&31]+h[t>>>1&31]+h[t<<4&31]+"===="):3===s?(e=r[d++],t=r[d++],a=r[d],c+=h[e>>>3]+h[(e<<2|t>>>6)&31]+h[t>>>1&31]+h[(t<<4|a>>>4)&31]+h[a<<1&31]+"==="):4===s&&(e=r[d++],t=r[d++],a=r[d++],o=r[d],c+=h[e>>>3]+h[(e<<2|t>>>6)&31]+h[t>>>1&31]+h[(t<<4|a>>>4)&31]+h[(a<<1|o>>>7)&31]+h[o>>>2&31]+h[o<<3&31]+"="),c},g=function(r,e){if(!e)return s(f(r));if(""===r)return"";if(!/^[A-Z2-7=]+$/.test(r))throw Error("Invalid base32 characters");var t,a,o,n,c,h,d,l,A="",u=r.indexOf("=");-1===u&&(u=r.length);for(var C=0,g=u>>3<<3;C<g;)t=i[r.charAt(C++)],a=i[r.charAt(C++)],o=i[r.charAt(C++)],n=i[r.charAt(C++)],c=i[r.charAt(C++)],h=i[r.charAt(C++)],d=i[r.charAt(C++)],l=i[r.charAt(C++)],A+=String.fromCharCode((t<<3|a>>>2)&255)+String.fromCharCode((a<<6|o<<1|n>>>4)&255)+String.fromCharCode((n<<4|c>>>1)&255)+String.fromCharCode((c<<7|h<<2|d>>>3)&255)+String.fromCharCode((d<<5|l)&255);var m=u-g;return 2===m?A+=String.fromCharCode(((t=i[r.charAt(C++)])<<3|(a=i[r.charAt(C++)])>>>2)&255):4===m?(t=i[r.charAt(C++)],a=i[r.charAt(C++)],o=i[r.charAt(C++)],n=i[r.charAt(C++)],A+=String.fromCharCode((t<<3|a>>>2)&255)+String.fromCharCode((a<<6|o<<1|n>>>4)&255)):5===m?(t=i[r.charAt(C++)],a=i[r.charAt(C++)],o=i[r.charAt(C++)],n=i[r.charAt(C++)],c=i[r.charAt(C++)],A+=String.fromCharCode((t<<3|a>>>2)&255)+String.fromCharCode((a<<6|o<<1|n>>>4)&255)+String.fromCharCode((n<<4|c>>>1)&255)):7===m&&(t=i[r.charAt(C++)],a=i[r.charAt(C++)],o=i[r.charAt(C++)],n=i[r.charAt(C++)],c=i[r.charAt(C++)],h=i[r.charAt(C++)],d=i[r.charAt(C++)],A+=String.fromCharCode((t<<3|a>>>2)&255)+String.fromCharCode((a<<6|o<<1|n>>>4)&255)+String.fromCharCode((n<<4|c>>>1)&255)+String.fromCharCode((c<<7|h<<2|d>>>3)&255)),A},m={encode:function(r,e){var t="string"!=typeof r;return(t&&r.constructor===ArrayBuffer&&(r=new Uint8Array(r)),t)?C(r):e?A(r):u(r)},decode:g};g.asBytes=f,n?r.exports=m:(e.base32=m,c&&void 0!==(a=(function(){return m}).call(m,t,m,r))&&(r.exports=a))}()},10912:(r,e,t)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"BailoutToCSR",{enumerable:!0,get:function(){return o}});let a=t(55592);function o(r){let{reason:e,children:t}=r;if("undefined"==typeof window)throw new a.BailoutToCSRError(e);return t}},85025:(r,e,t)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"PreloadChunks",{enumerable:!0,get:function(){return h}});let a=t(57437),o=t(54887),n=t(98011),c=t(35759);function h(r){let{moduleIds:e}=r;if("undefined"!=typeof window)return null;let t=n.workAsyncStorage.getStore();if(void 0===t)return null;let h=[];if(t.reactLoadableManifest&&e){let r=t.reactLoadableManifest;for(let t of e){if(!r[t])continue;let e=r[t].files;h.push(...e)}}return 0===h.length?null:(0,a.jsx)(a.Fragment,{children:h.map(r=>{let e=t.assetPrefix+"/_next/"+(0,c.encodeURIPath)(r);return r.endsWith(".css")?(0,a.jsx)("link",{precedence:"dynamic",href:e,rel:"stylesheet",as:"style"},r):((0,o.preload)(e,{as:"script",fetchPriority:"low"}),null)})})}}},r=>{var e=e=>r(r.s=e);r.O(0,[7130,6215,1744],()=>e(78541)),_N_E=r.O()}]);