(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{9874:function(e,t,n){Promise.resolve().then(n.t.bind(n,8877,23)),Promise.resolve().then(n.bind(n,3880)),Promise.resolve().then(n.t.bind(n,231,23)),Promise.resolve().then(n.t.bind(n,4080,23)),Promise.resolve().then(n.t.bind(n,3247,23))},3880:function(e,t,n){"use strict";n.d(t,{default:function(){return i}});var r=n(7437),l=JSON.parse('{"b":[{"name":"Converters","href":"/converters","list":[{"name":"HP to kW converter","href":"/converters/hp-kw"}]},{"name":"Other","href":"/other","list":[{"name":"Password generator","href":"/other/password-generator"},{"name":"Link shortener","href":"https://shortle.eu"}]}]}'),o=n(7138),a=n(2265),i=()=>{let[e,t]=(0,a.useState)(""),[n,i]=(0,a.useState)([]);return(0,r.jsxs)("div",{className:"relative w-64",children:[(0,r.jsx)("input",{type:"text",value:e,onChange:e=>{let n=e.target.value;if(t(n),n.length>0){let e=[];l.b.forEach(t=>{t.list.forEach(t=>{t.name.toLowerCase().includes(n.toLowerCase())&&e.push(t)})}),i(e.slice(0,5))}else i([])},placeholder:"Search...",className:"input input-bordered w-full"}),n.length>0&&(0,r.jsx)("ul",{className:"absolute z-10 w-full border rounded-md mt-1 shadow-lg",children:n.map((e,t)=>(0,r.jsx)("li",{className:"p-2",children:(0,r.jsx)(o.default,{href:e.href,children:e.name})},t))})]})}},7138:function(e,t,n){"use strict";n.d(t,{default:function(){return l.a}});var r=n(231),l=n.n(r)},905:function(e,t){"use strict";let n;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{DOMAttributeNames:function(){return r},default:function(){return a},isEqualNode:function(){return o}});let r={acceptCharset:"accept-charset",className:"class",htmlFor:"for",httpEquiv:"http-equiv",noModule:"noModule"};function l(e){let{type:t,props:n}=e,l=document.createElement(t);for(let e in n){if(!n.hasOwnProperty(e)||"children"===e||"dangerouslySetInnerHTML"===e||void 0===n[e])continue;let o=r[e]||e.toLowerCase();"script"===t&&("async"===o||"defer"===o||"noModule"===o)?l[o]=!!n[e]:l.setAttribute(o,n[e])}let{children:o,dangerouslySetInnerHTML:a}=n;return a?l.innerHTML=a.__html||"":o&&(l.textContent="string"==typeof o?o:Array.isArray(o)?o.join(""):""),l}function o(e,t){if(e instanceof HTMLElement&&t instanceof HTMLElement){let n=t.getAttribute("nonce");if(n&&!e.getAttribute("nonce")){let r=t.cloneNode(!0);return r.setAttribute("nonce",""),r.nonce=n,n===e.nonce&&e.isEqualNode(r)}}return e.isEqualNode(t)}function a(){return{mountedInstances:new Set,updateHead:e=>{let t={};e.forEach(e=>{if("link"===e.type&&e.props["data-optimized-fonts"]){if(document.querySelector('style[data-href="'+e.props["data-href"]+'"]'))return;e.props.href=e.props["data-href"],e.props["data-href"]=void 0}let n=t[e.type]||[];n.push(e),t[e.type]=n});let r=t.title?t.title[0]:null,l="";if(r){let{children:e}=r.props;l="string"==typeof e?e:Array.isArray(e)?e.join(""):""}l!==document.title&&(document.title=l),["meta","base","link","style","script"].forEach(e=>{n(e,t[e]||[])})}}}n=(e,t)=>{let n=document.getElementsByTagName("head")[0],r=n.querySelector("meta[name=next-head-count]"),a=Number(r.content),i=[];for(let t=0,n=r.previousElementSibling;t<a;t++,n=(null==n?void 0:n.previousElementSibling)||null){var s;(null==n?void 0:null==(s=n.tagName)?void 0:s.toLowerCase())===e&&i.push(n)}let u=t.map(l).filter(e=>{for(let t=0,n=i.length;t<n;t++)if(o(i[t],e))return i.splice(t,1),!1;return!0});i.forEach(e=>{var t;return null==(t=e.parentNode)?void 0:t.removeChild(e)}),u.forEach(e=>n.insertBefore(e,r)),r.content=(a-i.length+u.length).toString()},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4080:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{default:function(){return v},handleClientScriptLoad:function(){return y},initScriptLoader:function(){return _}});let r=n(9920),l=n(1452),o=n(7437),a=r._(n(4887)),i=l._(n(2265)),s=n(6590),u=n(905),c=n(9189),d=new Map,f=new Set,p=["onLoad","onReady","dangerouslySetInnerHTML","children","onError","strategy","stylesheets"],h=e=>{if(a.default.preinit){e.forEach(e=>{a.default.preinit(e,{as:"style"})});return}if("undefined"!=typeof window){let t=document.head;e.forEach(e=>{let n=document.createElement("link");n.type="text/css",n.rel="stylesheet",n.href=e,t.appendChild(n)})}},m=e=>{let{src:t,id:n,onLoad:r=()=>{},onReady:l=null,dangerouslySetInnerHTML:o,children:a="",strategy:i="afterInteractive",onError:s,stylesheets:c}=e,m=n||t;if(m&&f.has(m))return;if(d.has(t)){f.add(m),d.get(t).then(r,s);return}let y=()=>{l&&l(),f.add(m)},_=document.createElement("script"),b=new Promise((e,t)=>{_.addEventListener("load",function(t){e(),r&&r.call(this,t),y()}),_.addEventListener("error",function(e){t(e)})}).catch(function(e){s&&s(e)});for(let[n,r]of(o?(_.innerHTML=o.__html||"",y()):a?(_.textContent="string"==typeof a?a:Array.isArray(a)?a.join(""):"",y()):t&&(_.src=t,d.set(t,b)),Object.entries(e))){if(void 0===r||p.includes(n))continue;let e=u.DOMAttributeNames[n]||n.toLowerCase();_.setAttribute(e,r)}"worker"===i&&_.setAttribute("type","text/partytown"),_.setAttribute("data-nscript",i),c&&h(c),document.body.appendChild(_)};function y(e){let{strategy:t="afterInteractive"}=e;"lazyOnload"===t?window.addEventListener("load",()=>{(0,c.requestIdleCallback)(()=>m(e))}):m(e)}function _(e){e.forEach(y),[...document.querySelectorAll('[data-nscript="beforeInteractive"]'),...document.querySelectorAll('[data-nscript="beforePageRender"]')].forEach(e=>{let t=e.id||e.getAttribute("src");f.add(t)})}function b(e){let{id:t,src:n="",onLoad:r=()=>{},onReady:l=null,strategy:u="afterInteractive",onError:d,stylesheets:p,...h}=e,{updateScripts:y,scripts:_,getIsSsr:b,appDir:v,nonce:g}=(0,i.useContext)(s.HeadManagerContext),E=(0,i.useRef)(!1);(0,i.useEffect)(()=>{let e=t||n;E.current||(l&&e&&f.has(e)&&l(),E.current=!0)},[l,t,n]);let w=(0,i.useRef)(!1);if((0,i.useEffect)(()=>{!w.current&&("afterInteractive"===u?m(e):"lazyOnload"===u&&("complete"===document.readyState?(0,c.requestIdleCallback)(()=>m(e)):window.addEventListener("load",()=>{(0,c.requestIdleCallback)(()=>m(e))})),w.current=!0)},[e,u]),("beforeInteractive"===u||"worker"===u)&&(y?(_[u]=(_[u]||[]).concat([{id:t,src:n,onLoad:r,onReady:l,onError:d,...h}]),y(_)):b&&b()?f.add(t||n):b&&!b()&&m(e)),v){if(p&&p.forEach(e=>{a.default.preinit(e,{as:"style"})}),"beforeInteractive"===u)return n?(a.default.preload(n,h.integrity?{as:"script",integrity:h.integrity,nonce:g}:{as:"script",nonce:g}),(0,o.jsx)("script",{nonce:g,dangerouslySetInnerHTML:{__html:"(self.__next_s=self.__next_s||[]).push("+JSON.stringify([n,{...h,id:t}])+")"}})):(h.dangerouslySetInnerHTML&&(h.children=h.dangerouslySetInnerHTML.__html,delete h.dangerouslySetInnerHTML),(0,o.jsx)("script",{nonce:g,dangerouslySetInnerHTML:{__html:"(self.__next_s=self.__next_s||[]).push("+JSON.stringify([0,{...h,id:t}])+")"}}));"afterInteractive"===u&&n&&a.default.preload(n,h.integrity?{as:"script",integrity:h.integrity,nonce:g}:{as:"script",nonce:g})}return null}Object.defineProperty(b,"__nextScript",{value:!0});let v=b;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8877:function(){},3247:function(e){e.exports={style:{fontFamily:"'__Inter_36bd41', '__Inter_Fallback_36bd41'",fontStyle:"normal"},className:"__className_36bd41"}}},function(e){e.O(0,[569,231,971,23,744],function(){return e(e.s=9874)}),_N_E=e.O()}]);