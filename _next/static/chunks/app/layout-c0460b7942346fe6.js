(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{4430:function(e,t,n){Promise.resolve().then(n.t.bind(n,8877,23)),Promise.resolve().then(n.bind(n,2097)),Promise.resolve().then(n.t.bind(n,231,23)),Promise.resolve().then(n.t.bind(n,4080,23)),Promise.resolve().then(n.t.bind(n,3247,23)),Promise.resolve().then(n.bind(n,8726))},2097:function(e,t,n){"use strict";n.d(t,{default:function(){return s}});var r=n(7437),o=JSON.parse('{"b":[{"name":"Converters","href":"/converters","list":[{"name":"HP to kW converter","href":"/converters/hp-kw"},{"name":"Time converter","href":"/converters/time"},{"name":"Length converter","href":"/converters/length"},{"name":"Volume converter","href":"/converters/volume"}]},{"name":"Files","href":"/files","list":[{"name":"Image converter","href":"/files/image"}]},{"name":"Other","href":"/other","list":[{"name":"Password generator","href":"/other/password-generator"},{"name":"Markdown (MD) to HTML converter","href":"/other/md-to-html"},{"name":"Link shortener","href":"https://shortle.eu"}]}]}'),l=n(231),a=n.n(l),i=n(2265),s=()=>{let[e,t]=(0,i.useState)(""),[n,l]=(0,i.useState)([]);return(0,r.jsxs)("div",{className:"relative",children:[(0,r.jsx)("div",{className:"form-control",children:(0,r.jsx)("input",{type:"text",placeholder:"Search",className:"w-24 input input-bordered min-[470px]:w-auto",value:e,onChange:e=>{let n=e.target.value;if(t(n),n.length>0){let e=[];o.b.forEach(t=>{t.list.forEach(t=>{t.name.toLowerCase().includes(n.toLowerCase())&&e.push(t)})}),l(e.slice(0,5))}else l([])}})}),n.length>0&&(0,r.jsx)("ul",{className:"absolute z-10 mt-1 w-full rounded-md border shadow-lg bg-slate-800",children:n.map((e,n)=>(0,r.jsx)("li",{className:"p-2",children:(0,r.jsx)(a(),{href:e.href,onClick:()=>{t(""),l([])},children:e.name})},n))})]})}},905:function(e,t){"use strict";let n;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{DOMAttributeNames:function(){return r},default:function(){return a},isEqualNode:function(){return l}});let r={acceptCharset:"accept-charset",className:"class",htmlFor:"for",httpEquiv:"http-equiv",noModule:"noModule"};function o(e){let{type:t,props:n}=e,o=document.createElement(t);for(let e in n){if(!n.hasOwnProperty(e)||"children"===e||"dangerouslySetInnerHTML"===e||void 0===n[e])continue;let l=r[e]||e.toLowerCase();"script"===t&&("async"===l||"defer"===l||"noModule"===l)?o[l]=!!n[e]:o.setAttribute(l,n[e])}let{children:l,dangerouslySetInnerHTML:a}=n;return a?o.innerHTML=a.__html||"":l&&(o.textContent="string"==typeof l?l:Array.isArray(l)?l.join(""):""),o}function l(e,t){if(e instanceof HTMLElement&&t instanceof HTMLElement){let n=t.getAttribute("nonce");if(n&&!e.getAttribute("nonce")){let r=t.cloneNode(!0);return r.setAttribute("nonce",""),r.nonce=n,n===e.nonce&&e.isEqualNode(r)}}return e.isEqualNode(t)}function a(){return{mountedInstances:new Set,updateHead:e=>{let t={};e.forEach(e=>{if("link"===e.type&&e.props["data-optimized-fonts"]){if(document.querySelector('style[data-href="'+e.props["data-href"]+'"]'))return;e.props.href=e.props["data-href"],e.props["data-href"]=void 0}let n=t[e.type]||[];n.push(e),t[e.type]=n});let r=t.title?t.title[0]:null,o="";if(r){let{children:e}=r.props;o="string"==typeof e?e:Array.isArray(e)?e.join(""):""}o!==document.title&&(document.title=o),["meta","base","link","style","script"].forEach(e=>{n(e,t[e]||[])})}}}n=(e,t)=>{let n=document.getElementsByTagName("head")[0],r=n.querySelector("meta[name=next-head-count]"),a=Number(r.content),i=[];for(let t=0,n=r.previousElementSibling;t<a;t++,n=(null==n?void 0:n.previousElementSibling)||null){var s;(null==n?void 0:null==(s=n.tagName)?void 0:s.toLowerCase())===e&&i.push(n)}let u=t.map(o).filter(e=>{for(let t=0,n=i.length;t<n;t++)if(l(i[t],e))return i.splice(t,1),!1;return!0});i.forEach(e=>{var t;return null==(t=e.parentNode)?void 0:t.removeChild(e)}),u.forEach(e=>n.insertBefore(e,r)),r.content=(a-i.length+u.length).toString()},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4080:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{default:function(){return _},handleClientScriptLoad:function(){return y},initScriptLoader:function(){return v}});let r=n(9920),o=n(1452),l=n(7437),a=r._(n(4887)),i=o._(n(2265)),s=n(6590),u=n(905),c=n(9189),d=new Map,f=new Set,h=["onLoad","onReady","dangerouslySetInnerHTML","children","onError","strategy","stylesheets"],p=e=>{if(a.default.preinit){e.forEach(e=>{a.default.preinit(e,{as:"style"})});return}if("undefined"!=typeof window){let t=document.head;e.forEach(e=>{let n=document.createElement("link");n.type="text/css",n.rel="stylesheet",n.href=e,t.appendChild(n)})}},m=e=>{let{src:t,id:n,onLoad:r=()=>{},onReady:o=null,dangerouslySetInnerHTML:l,children:a="",strategy:i="afterInteractive",onError:s,stylesheets:c}=e,m=n||t;if(m&&f.has(m))return;if(d.has(t)){f.add(m),d.get(t).then(r,s);return}let y=()=>{o&&o(),f.add(m)},v=document.createElement("script"),b=new Promise((e,t)=>{v.addEventListener("load",function(t){e(),r&&r.call(this,t),y()}),v.addEventListener("error",function(e){t(e)})}).catch(function(e){s&&s(e)});for(let[n,r]of(l?(v.innerHTML=l.__html||"",y()):a?(v.textContent="string"==typeof a?a:Array.isArray(a)?a.join(""):"",y()):t&&(v.src=t,d.set(t,b)),Object.entries(e))){if(void 0===r||h.includes(n))continue;let e=u.DOMAttributeNames[n]||n.toLowerCase();v.setAttribute(e,r)}"worker"===i&&v.setAttribute("type","text/partytown"),v.setAttribute("data-nscript",i),c&&p(c),document.body.appendChild(v)};function y(e){let{strategy:t="afterInteractive"}=e;"lazyOnload"===t?window.addEventListener("load",()=>{(0,c.requestIdleCallback)(()=>m(e))}):m(e)}function v(e){e.forEach(y),[...document.querySelectorAll('[data-nscript="beforeInteractive"]'),...document.querySelectorAll('[data-nscript="beforePageRender"]')].forEach(e=>{let t=e.id||e.getAttribute("src");f.add(t)})}function b(e){let{id:t,src:n="",onLoad:r=()=>{},onReady:o=null,strategy:u="afterInteractive",onError:d,stylesheets:h,...p}=e,{updateScripts:y,scripts:v,getIsSsr:b,appDir:_,nonce:g}=(0,i.useContext)(s.HeadManagerContext),E=(0,i.useRef)(!1);(0,i.useEffect)(()=>{let e=t||n;E.current||(o&&e&&f.has(e)&&o(),E.current=!0)},[o,t,n]);let w=(0,i.useRef)(!1);if((0,i.useEffect)(()=>{!w.current&&("afterInteractive"===u?m(e):"lazyOnload"===u&&("complete"===document.readyState?(0,c.requestIdleCallback)(()=>m(e)):window.addEventListener("load",()=>{(0,c.requestIdleCallback)(()=>m(e))})),w.current=!0)},[e,u]),("beforeInteractive"===u||"worker"===u)&&(y?(v[u]=(v[u]||[]).concat([{id:t,src:n,onLoad:r,onReady:o,onError:d,...p}]),y(v)):b&&b()?f.add(t||n):b&&!b()&&m(e)),_){if(h&&h.forEach(e=>{a.default.preinit(e,{as:"style"})}),"beforeInteractive"===u)return n?(a.default.preload(n,p.integrity?{as:"script",integrity:p.integrity,nonce:g}:{as:"script",nonce:g}),(0,l.jsx)("script",{nonce:g,dangerouslySetInnerHTML:{__html:"(self.__next_s=self.__next_s||[]).push("+JSON.stringify([n,{...p,id:t}])+")"}})):(p.dangerouslySetInnerHTML&&(p.children=p.dangerouslySetInnerHTML.__html,delete p.dangerouslySetInnerHTML),(0,l.jsx)("script",{nonce:g,dangerouslySetInnerHTML:{__html:"(self.__next_s=self.__next_s||[]).push("+JSON.stringify([0,{...p,id:t}])+")"}}));"afterInteractive"===u&&n&&a.default.preload(n,p.integrity?{as:"script",integrity:p.integrity,nonce:g}:{as:"script",nonce:g})}return null}Object.defineProperty(b,"__nextScript",{value:!0});let _=b;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8877:function(){},3247:function(e){e.exports={style:{fontFamily:"'__Inter_36bd41', '__Inter_Fallback_36bd41'",fontStyle:"normal"},className:"__className_36bd41"}}},function(e){e.O(0,[569,231,726,971,23,744],function(){return e(e.s=4430)}),_N_E=e.O()}]);