(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3185],{606:function(e,t,r){Promise.resolve().then(r.t.bind(r,8877,23)),Promise.resolve().then(r.bind(r,2097)),Promise.resolve().then(r.t.bind(r,231,23)),Promise.resolve().then(r.t.bind(r,4080,23)),Promise.resolve().then(r.t.bind(r,3247,23)),Promise.resolve().then(r.bind(r,8726))},2097:function(e,t,r){"use strict";r.d(t,{default:function(){return l}});var n=r(7437),a=JSON.parse('{"b":[{"name":"Converters","href":"/converters","list":[{"name":"HP to kW ","href":"/converters/hp-kw"},{"name":"Time","href":"/converters/time"},{"name":"Length","href":"/converters/length"},{"name":"Volume","href":"/converters/volume"},{"name":"Temperature","href":"/converters/temperature"},{"name":"Data Storage","href":"/converters/data-storage"},{"name":"Understanding Unit Conversion","href":"/converters/simple-units"},{"name":"Weight and Mass","href":"/converters/weight"},{"name":"Area","href":"/converters/area"},{"name":"Power","href":"/converters/power"},{"name":"Pressure","href":"/converters/pressure"},{"name":"Energy","href":"/converters/energy"},{"name":"Force","href":"/converters/force"},{"name":"Speed","href":"/converters/speed"},{"name":"Angle","href":"/converters/angle"},{"name":"Fuel Consumption","href":"/converters/fuel-consumption"},{"name":"Flow","href":"/converters/flow"}]},{"name":"Files","href":"/files","list":[{"name":"Image converter","href":"/files/image"}]},{"name":"String","href":"/string","list":[{"name":"Add prefix tool","href":"/string/add-prefix"},{"name":"Add sufix tool","href":"/string/add-sufix"},{"name":"Base 64 Encode","href":"/string/base64-enc"},{"name":"Base 64 Decode","href":"/string/base64-dec"},{"name":"Base 58 Encode","href":"/string/base58-enc"},{"name":"Base 58 Decode","href":"/string/base58-dec"},{"name":"URL String Encode","href":"/string/url-enc"},{"name":"URL String Decode","href":"/string/url-dec"},{"name":"HTML String Encode","href":"/string/html-enc"},{"name":"HTML String Decode","href":"/string/html-dec"}]},{"name":"Crypto","href":"/crypto","list":[{"name":"SHA1 string hash","href":"/crypto/sha1"},{"name":"SHA224 string hash","href":"/crypto/sha224"},{"name":"SHA256 string hash","href":"/crypto/sha256"},{"name":"SHA384 string hash","href":"/crypto/sha384"},{"name":"SHA512 string hash","href":"/crypto/sha512"}]},{"name":"Other","href":"/other","list":[{"name":"Password generator","href":"/other/password-generator"},{"name":"Markdown (MD) to HTML converter","href":"/other/md-to-html"},{"name":"Link shortener","href":"https://shortle.eu"}]}]}'),o=r(231),s=r.n(o),i=r(2265),l=()=>{let[e,t]=(0,i.useState)(""),[r,o]=(0,i.useState)([]);return(0,n.jsxs)("div",{className:"relative",children:[(0,n.jsx)("div",{className:"form-control",children:(0,n.jsx)("input",{type:"text",placeholder:"Search",className:"w-24 input input-bordered min-[470px]:w-auto",value:e,onChange:e=>{let r=e.target.value;if(t(r),r.length>0){let e=[];a.b.forEach(t=>{t.list.forEach(t=>{t.name.toLowerCase().includes(r.toLowerCase())&&e.push(t)})}),o(e.slice(0,5))}else o([])}})}),r.length>0&&(0,n.jsx)("ul",{className:"absolute z-10 mt-1 w-full rounded-md border shadow-lg bg-slate-800",children:r.map((e,r)=>(0,n.jsx)("li",{className:"p-2",children:(0,n.jsx)(s(),{href:e.href,onClick:()=>{t(""),o([])},children:e.name})},r))})]})}},905:function(e,t){"use strict";let r;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{DOMAttributeNames:function(){return n},default:function(){return s},isEqualNode:function(){return o}});let n={acceptCharset:"accept-charset",className:"class",htmlFor:"for",httpEquiv:"http-equiv",noModule:"noModule"};function a(e){let{type:t,props:r}=e,a=document.createElement(t);for(let e in r){if(!r.hasOwnProperty(e)||"children"===e||"dangerouslySetInnerHTML"===e||void 0===r[e])continue;let o=n[e]||e.toLowerCase();"script"===t&&("async"===o||"defer"===o||"noModule"===o)?a[o]=!!r[e]:a.setAttribute(o,r[e])}let{children:o,dangerouslySetInnerHTML:s}=r;return s?a.innerHTML=s.__html||"":o&&(a.textContent="string"==typeof o?o:Array.isArray(o)?o.join(""):""),a}function o(e,t){if(e instanceof HTMLElement&&t instanceof HTMLElement){let r=t.getAttribute("nonce");if(r&&!e.getAttribute("nonce")){let n=t.cloneNode(!0);return n.setAttribute("nonce",""),n.nonce=r,r===e.nonce&&e.isEqualNode(n)}}return e.isEqualNode(t)}function s(){return{mountedInstances:new Set,updateHead:e=>{let t={};e.forEach(e=>{if("link"===e.type&&e.props["data-optimized-fonts"]){if(document.querySelector('style[data-href="'+e.props["data-href"]+'"]'))return;e.props.href=e.props["data-href"],e.props["data-href"]=void 0}let r=t[e.type]||[];r.push(e),t[e.type]=r});let n=t.title?t.title[0]:null,a="";if(n){let{children:e}=n.props;a="string"==typeof e?e:Array.isArray(e)?e.join(""):""}a!==document.title&&(document.title=a),["meta","base","link","style","script"].forEach(e=>{r(e,t[e]||[])})}}}r=(e,t)=>{let r=document.getElementsByTagName("head")[0],n=r.querySelector("meta[name=next-head-count]"),s=Number(n.content),i=[];for(let t=0,r=n.previousElementSibling;t<s;t++,r=(null==r?void 0:r.previousElementSibling)||null){var l;(null==r?void 0:null==(l=r.tagName)?void 0:l.toLowerCase())===e&&i.push(r)}let c=t.map(a).filter(e=>{for(let t=0,r=i.length;t<r;t++)if(o(i[t],e))return i.splice(t,1),!1;return!0});i.forEach(e=>{var t;return null==(t=e.parentNode)?void 0:t.removeChild(e)}),c.forEach(e=>r.insertBefore(e,n)),n.content=(s-i.length+c.length).toString()},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4080:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return b},handleClientScriptLoad:function(){return g},initScriptLoader:function(){return y}});let n=r(9920),a=r(1452),o=r(7437),s=n._(r(4887)),i=a._(r(2265)),l=r(6590),c=r(905),u=r(9189),d=new Map,f=new Set,h=["onLoad","onReady","dangerouslySetInnerHTML","children","onError","strategy","stylesheets"],m=e=>{if(s.default.preinit){e.forEach(e=>{s.default.preinit(e,{as:"style"})});return}if("undefined"!=typeof window){let t=document.head;e.forEach(e=>{let r=document.createElement("link");r.type="text/css",r.rel="stylesheet",r.href=e,t.appendChild(r)})}},p=e=>{let{src:t,id:r,onLoad:n=()=>{},onReady:a=null,dangerouslySetInnerHTML:o,children:s="",strategy:i="afterInteractive",onError:l,stylesheets:u}=e,p=r||t;if(p&&f.has(p))return;if(d.has(t)){f.add(p),d.get(t).then(n,l);return}let g=()=>{a&&a(),f.add(p)},y=document.createElement("script"),v=new Promise((e,t)=>{y.addEventListener("load",function(t){e(),n&&n.call(this,t),g()}),y.addEventListener("error",function(e){t(e)})}).catch(function(e){l&&l(e)});for(let[r,n]of(o?(y.innerHTML=o.__html||"",g()):s?(y.textContent="string"==typeof s?s:Array.isArray(s)?s.join(""):"",g()):t&&(y.src=t,d.set(t,v)),Object.entries(e))){if(void 0===n||h.includes(r))continue;let e=c.DOMAttributeNames[r]||r.toLowerCase();y.setAttribute(e,n)}"worker"===i&&y.setAttribute("type","text/partytown"),y.setAttribute("data-nscript",i),u&&m(u),document.body.appendChild(y)};function g(e){let{strategy:t="afterInteractive"}=e;"lazyOnload"===t?window.addEventListener("load",()=>{(0,u.requestIdleCallback)(()=>p(e))}):p(e)}function y(e){e.forEach(g),[...document.querySelectorAll('[data-nscript="beforeInteractive"]'),...document.querySelectorAll('[data-nscript="beforePageRender"]')].forEach(e=>{let t=e.id||e.getAttribute("src");f.add(t)})}function v(e){let{id:t,src:r="",onLoad:n=()=>{},onReady:a=null,strategy:c="afterInteractive",onError:d,stylesheets:h,...m}=e,{updateScripts:g,scripts:y,getIsSsr:v,appDir:b,nonce:_}=(0,i.useContext)(l.HeadManagerContext),S=(0,i.useRef)(!1);(0,i.useEffect)(()=>{let e=t||r;S.current||(a&&e&&f.has(e)&&a(),S.current=!0)},[a,t,r]);let E=(0,i.useRef)(!1);if((0,i.useEffect)(()=>{!E.current&&("afterInteractive"===c?p(e):"lazyOnload"===c&&("complete"===document.readyState?(0,u.requestIdleCallback)(()=>p(e)):window.addEventListener("load",()=>{(0,u.requestIdleCallback)(()=>p(e))})),E.current=!0)},[e,c]),("beforeInteractive"===c||"worker"===c)&&(g?(y[c]=(y[c]||[]).concat([{id:t,src:r,onLoad:n,onReady:a,onError:d,...m}]),g(y)):v&&v()?f.add(t||r):v&&!v()&&p(e)),b){if(h&&h.forEach(e=>{s.default.preinit(e,{as:"style"})}),"beforeInteractive"===c)return r?(s.default.preload(r,m.integrity?{as:"script",integrity:m.integrity,nonce:_}:{as:"script",nonce:_}),(0,o.jsx)("script",{nonce:_,dangerouslySetInnerHTML:{__html:"(self.__next_s=self.__next_s||[]).push("+JSON.stringify([r,{...m,id:t}])+")"}})):(m.dangerouslySetInnerHTML&&(m.children=m.dangerouslySetInnerHTML.__html,delete m.dangerouslySetInnerHTML),(0,o.jsx)("script",{nonce:_,dangerouslySetInnerHTML:{__html:"(self.__next_s=self.__next_s||[]).push("+JSON.stringify([0,{...m,id:t}])+")"}}));"afterInteractive"===c&&r&&s.default.preload(r,m.integrity?{as:"script",integrity:m.integrity,nonce:_}:{as:"script",nonce:_})}return null}Object.defineProperty(v,"__nextScript",{value:!0});let b=v;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8877:function(){},3247:function(e){e.exports={style:{fontFamily:"'__Inter_36bd41', '__Inter_Fallback_36bd41'",fontStyle:"normal"},className:"__className_36bd41"}}},function(e){e.O(0,[404,7972,231,8726,2971,7023,1744],function(){return e(e.s=606)}),_N_E=e.O()}]);