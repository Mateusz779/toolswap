(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{5531:function(e,t,n){Promise.resolve().then(n.t.bind(n,8877,23)),Promise.resolve().then(n.bind(n,2097)),Promise.resolve().then(n.bind(n,4404)),Promise.resolve().then(n.bind(n,7640)),Promise.resolve().then(n.bind(n,239)),Promise.resolve().then(n.t.bind(n,231,23)),Promise.resolve().then(n.t.bind(n,4080,23)),Promise.resolve().then(n.t.bind(n,3247,23)),Promise.resolve().then(n.bind(n,8726))},2097:function(e,t,n){"use strict";n.d(t,{default:function(){return s}});var r=n(7437),a=JSON.parse('{"b":[{"name":"Converters","href":"/converters","list":[{"name":"HP to kW converter","href":"/converters/hp-kw"},{"name":"Time converter","href":"/converters/time"},{"name":"Length converter","href":"/converters/length"}]},{"name":"Other","href":"/other","list":[{"name":"Password generator","href":"/other/password-generator"},{"name":"Link shortener","href":"https://shortle.eu"}]}]}'),o=n(231),i=n.n(o),l=n(2265),s=()=>{let[e,t]=(0,l.useState)(""),[n,o]=(0,l.useState)([]);return(0,r.jsxs)("div",{className:"relative ",children:[(0,r.jsx)("input",{type:"text",value:e,onChange:e=>{let n=e.target.value;if(t(n),n.length>0){let e=[];a.b.forEach(t=>{t.list.forEach(t=>{t.name.toLowerCase().includes(n.toLowerCase())&&e.push(t)})}),o(e.slice(0,5))}else o([])},placeholder:"Search...",className:"w-24 input input-bordered md:w-auto"}),n.length>0&&(0,r.jsx)("ul",{className:"absolute z-10 mt-1 w-full rounded-md border shadow-lg bg-slate-800",children:n.map((e,n)=>(0,r.jsx)("li",{className:"p-2",children:(0,r.jsx)(i(),{href:e.href,onClick:()=>{t(""),o([])},children:e.name})},n))})]})}},239:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});let r=n(7437),a=n(2265);t.default=function(e){let{html:t,height:n=null,width:o=null,children:i,dataNtpc:l=""}=e;return(0,a.useEffect)(()=>{l&&performance.mark("mark_feature_usage",{detail:{feature:"next-third-parties-".concat(l)}})},[l]),(0,r.jsxs)(r.Fragment,{children:[i,t?(0,r.jsx)("div",{style:{height:null!=n?"".concat(n,"px"):"auto",width:null!=o?"".concat(o,"px"):"auto"},"data-ntpc":l,dangerouslySetInnerHTML:{__html:t}}):null]})}},4404:function(e,t,n){"use strict";var r;let a;Object.defineProperty(t,"__esModule",{value:!0}),t.sendGAEvent=t.GoogleAnalytics=void 0;let o=n(7437),i=n(2265),l=(r=n(1877))&&r.__esModule?r:{default:r};t.GoogleAnalytics=function(e){let{gaId:t,dataLayerName:n="dataLayer"}=e;return void 0===a&&(a=n),(0,i.useEffect)(()=>{performance.mark("mark_feature_usage",{detail:{feature:"next-third-parties-ga"}})},[]),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(l.default,{id:"_next-ga-init",dangerouslySetInnerHTML:{__html:"\n          window['".concat(n,"'] = window['").concat(n,"'] || [];\n          function gtag(){window['").concat(n,"'].push(arguments);}\n          gtag('js', new Date());\n\n          gtag('config', '").concat(t,"');")}}),(0,o.jsx)(l.default,{id:"_next-ga",src:"https://www.googletagmanager.com/gtag/js?id=".concat(t)})]})},t.sendGAEvent=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];if(void 0===a){console.warn("@next/third-parties: GA has not been initialized");return}window[a]?window[a].push(arguments):console.warn("@next/third-parties: GA dataLayer ".concat(a," does not exist"))}},7640:function(e,t,n){"use strict";var r;let a;Object.defineProperty(t,"__esModule",{value:!0}),t.sendGTMEvent=t.GoogleTagManager=void 0;let o=n(7437),i=n(2265),l=(r=n(1877))&&r.__esModule?r:{default:r};t.GoogleTagManager=function(e){let{gtmId:t,dataLayerName:n="dataLayer",auth:r,preview:s,dataLayer:u}=e;void 0===a&&(a=n);let c="dataLayer"!==n?"&l=".concat(n):"";return(0,i.useEffect)(()=>{performance.mark("mark_feature_usage",{detail:{feature:"next-third-parties-gtm"}})},[]),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(l.default,{id:"_next-gtm-init",dangerouslySetInnerHTML:{__html:"\n      (function(w,l){\n        w[l]=w[l]||[];\n        w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});\n        ".concat(u?"w[l].push(".concat(JSON.stringify(u),")"):"","\n      })(window,'").concat(n,"');")}}),(0,o.jsx)(l.default,{id:"_next-gtm","data-ntpc":"GTM",src:"https://www.googletagmanager.com/gtm.js?id=".concat(t).concat(c).concat(r?"&gtm_auth=".concat(r):"").concat(s?"&gtm_preview=".concat(s,"&gtm_cookies_win=x"):"")})]})},t.sendGTMEvent=e=>{if(void 0===a){console.warn("@next/third-parties: GTM has not been initialized");return}window[a]?window[a].push(e):console.warn("@next/third-parties: GTM dataLayer ".concat(a," does not exist"))}},1877:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return a.a}});var r=n(4080),a=n.n(r),o={};for(var i in r)"default"!==i&&(o[i]=(function(e){return r[e]}).bind(0,i));n.d(t,o)},905:function(e,t){"use strict";let n;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{DOMAttributeNames:function(){return r},default:function(){return i},isEqualNode:function(){return o}});let r={acceptCharset:"accept-charset",className:"class",htmlFor:"for",httpEquiv:"http-equiv",noModule:"noModule"};function a(e){let{type:t,props:n}=e,a=document.createElement(t);for(let e in n){if(!n.hasOwnProperty(e)||"children"===e||"dangerouslySetInnerHTML"===e||void 0===n[e])continue;let o=r[e]||e.toLowerCase();"script"===t&&("async"===o||"defer"===o||"noModule"===o)?a[o]=!!n[e]:a.setAttribute(o,n[e])}let{children:o,dangerouslySetInnerHTML:i}=n;return i?a.innerHTML=i.__html||"":o&&(a.textContent="string"==typeof o?o:Array.isArray(o)?o.join(""):""),a}function o(e,t){if(e instanceof HTMLElement&&t instanceof HTMLElement){let n=t.getAttribute("nonce");if(n&&!e.getAttribute("nonce")){let r=t.cloneNode(!0);return r.setAttribute("nonce",""),r.nonce=n,n===e.nonce&&e.isEqualNode(r)}}return e.isEqualNode(t)}function i(){return{mountedInstances:new Set,updateHead:e=>{let t={};e.forEach(e=>{if("link"===e.type&&e.props["data-optimized-fonts"]){if(document.querySelector('style[data-href="'+e.props["data-href"]+'"]'))return;e.props.href=e.props["data-href"],e.props["data-href"]=void 0}let n=t[e.type]||[];n.push(e),t[e.type]=n});let r=t.title?t.title[0]:null,a="";if(r){let{children:e}=r.props;a="string"==typeof e?e:Array.isArray(e)?e.join(""):""}a!==document.title&&(document.title=a),["meta","base","link","style","script"].forEach(e=>{n(e,t[e]||[])})}}}n=(e,t)=>{let n=document.getElementsByTagName("head")[0],r=n.querySelector("meta[name=next-head-count]"),i=Number(r.content),l=[];for(let t=0,n=r.previousElementSibling;t<i;t++,n=(null==n?void 0:n.previousElementSibling)||null){var s;(null==n?void 0:null==(s=n.tagName)?void 0:s.toLowerCase())===e&&l.push(n)}let u=t.map(a).filter(e=>{for(let t=0,n=l.length;t<n;t++)if(o(l[t],e))return l.splice(t,1),!1;return!0});l.forEach(e=>{var t;return null==(t=e.parentNode)?void 0:t.removeChild(e)}),u.forEach(e=>n.insertBefore(e,r)),r.content=(i-l.length+u.length).toString()},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4080:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{default:function(){return v},handleClientScriptLoad:function(){return g},initScriptLoader:function(){return _}});let r=n(9920),a=n(1452),o=n(7437),i=r._(n(4887)),l=a._(n(2265)),s=n(6590),u=n(905),c=n(9189),d=new Map,f=new Set,h=["onLoad","onReady","dangerouslySetInnerHTML","children","onError","strategy","stylesheets"],p=e=>{if(i.default.preinit){e.forEach(e=>{i.default.preinit(e,{as:"style"})});return}if("undefined"!=typeof window){let t=document.head;e.forEach(e=>{let n=document.createElement("link");n.type="text/css",n.rel="stylesheet",n.href=e,t.appendChild(n)})}},m=e=>{let{src:t,id:n,onLoad:r=()=>{},onReady:a=null,dangerouslySetInnerHTML:o,children:i="",strategy:l="afterInteractive",onError:s,stylesheets:c}=e,m=n||t;if(m&&f.has(m))return;if(d.has(t)){f.add(m),d.get(t).then(r,s);return}let g=()=>{a&&a(),f.add(m)},_=document.createElement("script"),y=new Promise((e,t)=>{_.addEventListener("load",function(t){e(),r&&r.call(this,t),g()}),_.addEventListener("error",function(e){t(e)})}).catch(function(e){s&&s(e)});for(let[n,r]of(o?(_.innerHTML=o.__html||"",g()):i?(_.textContent="string"==typeof i?i:Array.isArray(i)?i.join(""):"",g()):t&&(_.src=t,d.set(t,y)),Object.entries(e))){if(void 0===r||h.includes(n))continue;let e=u.DOMAttributeNames[n]||n.toLowerCase();_.setAttribute(e,r)}"worker"===l&&_.setAttribute("type","text/partytown"),_.setAttribute("data-nscript",l),c&&p(c),document.body.appendChild(_)};function g(e){let{strategy:t="afterInteractive"}=e;"lazyOnload"===t?window.addEventListener("load",()=>{(0,c.requestIdleCallback)(()=>m(e))}):m(e)}function _(e){e.forEach(g),[...document.querySelectorAll('[data-nscript="beforeInteractive"]'),...document.querySelectorAll('[data-nscript="beforePageRender"]')].forEach(e=>{let t=e.id||e.getAttribute("src");f.add(t)})}function y(e){let{id:t,src:n="",onLoad:r=()=>{},onReady:a=null,strategy:u="afterInteractive",onError:d,stylesheets:h,...p}=e,{updateScripts:g,scripts:_,getIsSsr:y,appDir:v,nonce:w}=(0,l.useContext)(s.HeadManagerContext),b=(0,l.useRef)(!1);(0,l.useEffect)(()=>{let e=t||n;b.current||(a&&e&&f.has(e)&&a(),b.current=!0)},[a,t,n]);let x=(0,l.useRef)(!1);if((0,l.useEffect)(()=>{!x.current&&("afterInteractive"===u?m(e):"lazyOnload"===u&&("complete"===document.readyState?(0,c.requestIdleCallback)(()=>m(e)):window.addEventListener("load",()=>{(0,c.requestIdleCallback)(()=>m(e))})),x.current=!0)},[e,u]),("beforeInteractive"===u||"worker"===u)&&(g?(_[u]=(_[u]||[]).concat([{id:t,src:n,onLoad:r,onReady:a,onError:d,...p}]),g(_)):y&&y()?f.add(t||n):y&&!y()&&m(e)),v){if(h&&h.forEach(e=>{i.default.preinit(e,{as:"style"})}),"beforeInteractive"===u)return n?(i.default.preload(n,p.integrity?{as:"script",integrity:p.integrity,nonce:w}:{as:"script",nonce:w}),(0,o.jsx)("script",{nonce:w,dangerouslySetInnerHTML:{__html:"(self.__next_s=self.__next_s||[]).push("+JSON.stringify([n,{...p,id:t}])+")"}})):(p.dangerouslySetInnerHTML&&(p.children=p.dangerouslySetInnerHTML.__html,delete p.dangerouslySetInnerHTML),(0,o.jsx)("script",{nonce:w,dangerouslySetInnerHTML:{__html:"(self.__next_s=self.__next_s||[]).push("+JSON.stringify([0,{...p,id:t}])+")"}}));"afterInteractive"===u&&n&&i.default.preload(n,p.integrity?{as:"script",integrity:p.integrity,nonce:w}:{as:"script",nonce:w})}return null}Object.defineProperty(y,"__nextScript",{value:!0});let v=y;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8877:function(){},3247:function(e){e.exports={style:{fontFamily:"'__Inter_36bd41', '__Inter_Fallback_36bd41'",fontStyle:"normal"},className:"__className_36bd41"}}},function(e){e.O(0,[569,231,726,971,23,744],function(){return e(e.s=5531)}),_N_E=e.O()}]);