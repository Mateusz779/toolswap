(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8172],{407:function(e,t,n){Promise.resolve().then(n.bind(n,4923))},4923:function(e,t,n){"use strict";n.d(t,{default:function(){return I}});var r,i,a=n(7437),o=n(6008),l=n(2265);function c(e,t){return Array(t+1).join(e)}var s=["ADDRESS","ARTICLE","ASIDE","AUDIO","BLOCKQUOTE","BODY","CANVAS","CENTER","DD","DIR","DIV","DL","DT","FIELDSET","FIGCAPTION","FIGURE","FOOTER","FORM","FRAMESET","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","HTML","ISINDEX","LI","MAIN","MENU","NAV","NOFRAMES","NOSCRIPT","OL","OUTPUT","P","PRE","SECTION","TABLE","TBODY","TD","TFOOT","TH","THEAD","TR","UL"];function u(e){return m(e,s)}var d=["AREA","BASE","BR","COL","COMMAND","EMBED","HR","IMG","INPUT","KEYGEN","LINK","META","PARAM","SOURCE","TRACK","WBR"];function f(e){return m(e,d)}var h=["A","TABLE","THEAD","TBODY","TFOOT","TH","TD","IFRAME","SCRIPT","AUDIO","VIDEO"];function m(e,t){return t.indexOf(e.nodeName)>=0}function p(e,t){return e.getElementsByTagName&&t.some(function(t){return e.getElementsByTagName(t).length})}var g={};function v(e){return e?e.replace(/(\n+\s*)+/g,"\n"):""}function b(e){for(var t in this.options=e,this._keep=[],this._remove=[],this.blankRule={replacement:e.blankReplacement},this.keepReplacement=e.keepReplacement,this.defaultRule={replacement:e.defaultReplacement},this.array=[],e.rules)this.array.push(e.rules[t])}function x(e,t,n){for(var r=0;r<e.length;r++){var i=e[r];if(function(e,t,n){var r=e.filter;if("string"==typeof r){if(r===t.nodeName.toLowerCase())return!0}else if(Array.isArray(r)){if(r.indexOf(t.nodeName.toLowerCase())>-1)return!0}else if("function"==typeof r){if(r.call(e,t,n))return!0}else throw TypeError("`filter` needs to be a string, array, or function")}(i,t,n))return i}}function y(e){var t=e.nextSibling||e.parentNode;return e.parentNode.removeChild(e),t}function N(e,t,n){return e&&e.parentNode===t||n(t)?t.nextSibling||t.parentNode:t.firstChild||t.nextSibling||t.parentNode}g.paragraph={filter:"p",replacement:function(e){return"\n\n"+e+"\n\n"}},g.lineBreak={filter:"br",replacement:function(e,t,n){return n.br+"\n"}},g.heading={filter:["h1","h2","h3","h4","h5","h6"],replacement:function(e,t,n){var r=Number(t.nodeName.charAt(1));if("setext"!==n.headingStyle||!(r<3))return"\n\n"+c("#",r)+" "+e+"\n\n";var i=c(1===r?"=":"-",e.length);return"\n\n"+e+"\n"+i+"\n\n"}},g.blockquote={filter:"blockquote",replacement:function(e){return"\n\n"+(e=(e=e.replace(/^\n+|\n+$/g,"")).replace(/^/gm,"> "))+"\n\n"}},g.list={filter:["ul","ol"],replacement:function(e,t){var n=t.parentNode;return"LI"===n.nodeName&&n.lastElementChild===t?"\n"+e:"\n\n"+e+"\n\n"}},g.listItem={filter:"li",replacement:function(e,t,n){e=e.replace(/^\n+/,"").replace(/\n+$/,"\n").replace(/\n/gm,"\n    ");var r=n.bulletListMarker+"   ",i=t.parentNode;if("OL"===i.nodeName){var a=i.getAttribute("start"),o=Array.prototype.indexOf.call(i.children,t);r=(a?Number(a)+o:o+1)+".  "}return r+e+(t.nextSibling&&!/\n$/.test(e)?"\n":"")}},g.indentedCodeBlock={filter:function(e,t){return"indented"===t.codeBlockStyle&&"PRE"===e.nodeName&&e.firstChild&&"CODE"===e.firstChild.nodeName},replacement:function(e,t,n){return"\n\n    "+t.firstChild.textContent.replace(/\n/g,"\n    ")+"\n\n"}},g.fencedCodeBlock={filter:function(e,t){return"fenced"===t.codeBlockStyle&&"PRE"===e.nodeName&&e.firstChild&&"CODE"===e.firstChild.nodeName},replacement:function(e,t,n){for(var r,i=((t.firstChild.getAttribute("class")||"").match(/language-(\S+)/)||[null,""])[1],a=t.firstChild.textContent,o=n.fence.charAt(0),l=3,s=RegExp("^"+o+"{3,}","gm");r=s.exec(a);)r[0].length>=l&&(l=r[0].length+1);var u=c(o,l);return"\n\n"+u+i+"\n"+a.replace(/\n$/,"")+"\n"+u+"\n\n"}},g.horizontalRule={filter:"hr",replacement:function(e,t,n){return"\n\n"+n.hr+"\n\n"}},g.inlineLink={filter:function(e,t){return"inlined"===t.linkStyle&&"A"===e.nodeName&&e.getAttribute("href")},replacement:function(e,t){var n=t.getAttribute("href");n&&(n=n.replace(/([()])/g,"\\$1"));var r=v(t.getAttribute("title"));return r&&(r=' "'+r.replace(/"/g,'\\"')+'"'),"["+e+"]("+n+r+")"}},g.referenceLink={filter:function(e,t){return"referenced"===t.linkStyle&&"A"===e.nodeName&&e.getAttribute("href")},replacement:function(e,t,n){var r,i,a=t.getAttribute("href"),o=v(t.getAttribute("title"));switch(o&&(o=' "'+o+'"'),n.linkReferenceStyle){case"collapsed":r="["+e+"][]",i="["+e+"]: "+a+o;break;case"shortcut":r="["+e+"]",i="["+e+"]: "+a+o;break;default:var l=this.references.length+1;r="["+e+"]["+l+"]",i="["+l+"]: "+a+o}return this.references.push(i),r},references:[],append:function(e){var t="";return this.references.length&&(t="\n\n"+this.references.join("\n")+"\n\n",this.references=[]),t}},g.emphasis={filter:["em","i"],replacement:function(e,t,n){return e.trim()?n.emDelimiter+e+n.emDelimiter:""}},g.strong={filter:["strong","b"],replacement:function(e,t,n){return e.trim()?n.strongDelimiter+e+n.strongDelimiter:""}},g.code={filter:function(e){var t=e.previousSibling||e.nextSibling,n="PRE"===e.parentNode.nodeName&&!t;return"CODE"===e.nodeName&&!n},replacement:function(e){if(!e)return"";e=e.replace(/\r?\n|\r/g," ");for(var t=/^`|^ .*?[^ ].* $|`$/.test(e)?" ":"",n="`",r=e.match(/`+/gm)||[];-1!==r.indexOf(n);)n+="`";return n+t+e+t+n}},g.image={filter:"img",replacement:function(e,t){var n=v(t.getAttribute("alt")),r=t.getAttribute("src")||"",i=v(t.getAttribute("title"));return r?"!["+n+"]("+r+(i?' "'+i+'"':"")+")":""}},b.prototype={add:function(e,t){this.array.unshift(t)},keep:function(e){this._keep.unshift({filter:e,replacement:this.keepReplacement})},remove:function(e){this._remove.unshift({filter:e,replacement:function(){return""}})},forNode:function(e){var t;return e.isBlank?this.blankRule:(t=x(this.array,e,this.options))||(t=x(this._keep,e,this.options))||(t=x(this._remove,e,this.options))?t:this.defaultRule},forEach:function(e){for(var t=0;t<this.array.length;t++)e(this.array[t],t)}};var E="undefined"!=typeof window?window:{},A=!function(){var e=E.DOMParser,t=!1;try{new e().parseFromString("","text/html")&&(t=!0)}catch(e){}return t}()?(r=function(){},!function(){var e=!1;try{document.implementation.createHTMLDocument("").open()}catch(t){E.ActiveXObject&&(e=!0)}return e}()?r.prototype.parseFromString=function(e){var t=document.implementation.createHTMLDocument("");return t.open(),t.write(e),t.close(),t}:r.prototype.parseFromString=function(e){var t=new window.ActiveXObject("htmlfile");return t.designMode="on",t.open(),t.write(e),t.close(),t},r):E.DOMParser;function C(e,t){var n;return!function(e){var t=e.element,n=e.isBlock,r=e.isVoid,i=e.isPre||function(e){return"PRE"===e.nodeName};if(!(!t.firstChild||i(t))){for(var a=null,o=!1,l=null,c=N(null,t,i);c!==t;){if(3===c.nodeType||4===c.nodeType){var s=c.data.replace(/[ \r\n\t]+/g," ");if((!a||/ $/.test(a.data))&&!o&&" "===s[0]&&(s=s.substr(1)),!s){c=y(c);continue}c.data=s,a=c}else if(1===c.nodeType)n(c)||"BR"===c.nodeName?(a&&(a.data=a.data.replace(/ $/,"")),a=null,o=!1):r(c)||i(c)?(a=null,o=!0):a&&(o=!1);else{c=y(c);continue}var u=N(l,c,i);l=c,c=u}a&&(a.data=a.data.replace(/ $/,""),a.data||y(a))}}({element:n="string"==typeof e?(i=i||new A).parseFromString('<x-turndown id="turndown-root">'+e+"</x-turndown>","text/html").getElementById("turndown-root"):e.cloneNode(!0),isBlock:u,isVoid:f,isPre:t.preformattedCode?w:null}),n}function w(e){return"PRE"===e.nodeName||"CODE"===e.nodeName}function T(e,t){return e.isBlock=u(e),e.isCode="CODE"===e.nodeName||e.parentNode.isCode,e.isBlank=!f(e)&&!m(e,h)&&/^\s*$/i.test(e.textContent)&&!p(e,d)&&!p(e,h),e.flankingWhitespace=function(e,t){if(e.isBlock||t.preformattedCode&&e.isCode)return{leading:"",trailing:""};var n,r={leading:(n=e.textContent.match(/^(([ \t\r\n]*)(\s*))(?:(?=\S)[\s\S]*\S)?((\s*?)([ \t\r\n]*))$/))[1],leadingAscii:n[2],leadingNonAscii:n[3],trailing:n[4],trailingNonAscii:n[5],trailingAscii:n[6]};return r.leadingAscii&&k("left",e,t)&&(r.leading=r.leadingNonAscii),r.trailingAscii&&k("right",e,t)&&(r.trailing=r.trailingNonAscii),{leading:r.leading,trailing:r.trailing}}(e,t),e}function k(e,t,n){var r,i,a;return"left"===e?(r=t.previousSibling,i=/ $/):(r=t.nextSibling,i=/^ /),r&&(3===r.nodeType?a=i.test(r.nodeValue):n.preformattedCode&&"CODE"===r.nodeName?a=!1:1!==r.nodeType||u(r)||(a=i.test(r.textContent))),a}var R=Array.prototype.reduce,S=[[/\\/g,"\\\\"],[/\*/g,"\\*"],[/^-/g,"\\-"],[/^\+ /g,"\\+ "],[/^(=+)/g,"\\$1"],[/^(#{1,6}) /g,"\\$1 "],[/`/g,"\\`"],[/^~~~/g,"\\~~~"],[/\[/g,"\\["],[/\]/g,"\\]"],[/^>/g,"\\>"],[/_/g,"\\_"],[/^(\d+)\. /g,"$1\\. "]];function O(e){if(!(this instanceof O))return new O(e);this.options=function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)n.hasOwnProperty(r)&&(e[r]=n[r])}return e}({},{rules:g,headingStyle:"setext",hr:"* * *",bulletListMarker:"*",codeBlockStyle:"indented",fence:"```",emDelimiter:"_",strongDelimiter:"**",linkStyle:"inlined",linkReferenceStyle:"full",br:"  ",preformattedCode:!1,blankReplacement:function(e,t){return t.isBlock?"\n\n":""},keepReplacement:function(e,t){return t.isBlock?"\n\n"+t.outerHTML+"\n\n":t.outerHTML},defaultReplacement:function(e,t){return t.isBlock?"\n\n"+e+"\n\n":e}},e),this.rules=new b(this.options)}function D(e){var t=this;return R.call(e.childNodes,function(e,n){n=new T(n,t.options);var r="";return 3===n.nodeType?r=n.isCode?n.nodeValue:t.escape(n.nodeValue):1===n.nodeType&&(r=M.call(t,n)),H(e,r)},"")}function B(e){var t=this;return this.rules.forEach(function(n){"function"==typeof n.append&&(e=H(e,n.append(t.options)))}),e.replace(/^[\t\r\n]+/,"").replace(/[\t\r\n\s]+$/,"")}function M(e){var t=this.rules.forNode(e),n=D.call(this,e),r=e.flankingWhitespace;return(r.leading||r.trailing)&&(n=n.trim()),r.leading+t.replacement(n,e,this.options)+r.trailing}function H(e,t){var n=function(e){for(var t=e.length;t>0&&"\n"===e[t-1];)t--;return e.substring(0,t)}(e),r=t.replace(/^\n*/,""),i=Math.max(e.length-n.length,t.length-r.length);return n+"\n\n".substring(0,i)+r}O.prototype={turndown:function(e){if(!(null!=e&&("string"==typeof e||e.nodeType&&(1===e.nodeType||9===e.nodeType||11===e.nodeType))))throw TypeError(e+" is not a string, or an element/document/fragment node.");return""===e?"":B.call(this,D.call(this,new C(e,this.options)))},use:function(e){if(Array.isArray(e))for(var t=0;t<e.length;t++)this.use(e[t]);else if("function"==typeof e)e(this);else throw TypeError("plugin must be a Function or an Array of Functions");return this},addRule:function(e,t){return this.rules.add(e,t),this},keep:function(e){return this.rules.keep(e),this},remove:function(e){return this.rules.remove(e),this},escape:function(e){return S.reduce(function(e,t){return e.replace(t[0],t[1])},e)}};let j=new O;j.addRule("heading",{filter:["h1","h2","h3","h4","h5","h6"],replacement:function(e,t,n){let r=parseInt(t.nodeName.charAt(1));return"".concat("#".repeat(r)," ").concat(e,"\n\n")}}),j.addRule("table",{filter:["table"],replacement:function(e,t){let n="";t.querySelectorAll("tr").forEach(e=>{let t=e.querySelectorAll("td, th");t.forEach((e,r)=>{var i;n+="| ".concat(null===(i=e.textContent)||void 0===i?void 0:i.trim()," "),r===t.length-1&&(n+="|\n")})});let r=t.querySelectorAll("th");return r.length>0&&(n+="|",r.forEach(()=>{n+=" --- |"}),n+="\n"),"\n".concat(n,"\n")}}),j.addRule("details",{filter:["details"],replacement:function(e,t){let n=t.querySelector("summary"),r="";if(n){var i;r+="<details>\n<summary>".concat(null===(i=n.textContent)||void 0===i?void 0:i.trim(),"</summary>\n\n")+e.replace(n.outerHTML,"").trim()+"\n\n</details>\n"}return r}});let L=e=>{let{htmlContent:t,markdown:n}=e;return(0,a.jsx)("div",{className:"mt-6 w-full max-w-2xl",children:(0,a.jsxs)("div",{role:"tablist",className:"tabs tabs-lifted",children:[(0,a.jsx)("input",{type:"radio",name:"my_tabs_1",role:"tab",className:"tab","aria-label":"Preview",defaultChecked:!0}),(0,a.jsx)("div",{role:"tabpanel",className:"p-6 tab-content bg-base-100 border-base-300 rounded-box",children:(0,a.jsx)("iframe",{srcDoc:t,className:"w-full h-96 rounded-md border",title:"Preview"})}),(0,a.jsx)("input",{type:"radio",name:"my_tabs_1",role:"tab",className:"tab","aria-label":"MD source"}),(0,a.jsx)("div",{role:"tabpanel",className:"p-6 w-full max-w-2xl tab-content bg-base-100 border-base-300 rounded-box",children:(0,a.jsx)("pre",{className:"overflow-scroll h-96 rounded-md border",children:(0,a.jsx)("code",{children:n})})})]})})};var I=()=>{let[e,t]=(0,l.useState)(""),[n,r]=l.useState("");return l.useEffect(()=>{t(j.turndown(n))},[n]),(0,a.jsxs)("div",{className:"flex flex-col items-center min-h-screen",children:[(0,a.jsx)("h1",{className:"mb-6 text-3xl font-bold text-center",children:"HTML to Markdown Converter"}),(0,a.jsx)("div",{className:"flex justify-center items-center px-4 w-full",children:(0,a.jsx)("textarea",{rows:14,cols:50,value:n,onChange:e=>r(e.target.value),placeholder:"Enter your HTML here",className:"mb-6 w-full max-w-2xl rounded-md border shadow-sm max-md:max-w-xl focus:outline-none focus:ring-2"})}),(0,a.jsxs)("div",{className:"w-full max-w-2xl rounded-md shadow-sm max-md:max-w-xl",children:[(0,a.jsx)("h2",{className:"mb-4 text-2xl font-semibold text-center max-md:max-w-xl",children:"Output MD:"}),(0,a.jsx)(o.Z,{content:e}),(0,a.jsx)(L,{htmlContent:n,markdown:e})]})]})}},6008:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(7437),i=n(8726);function a(){return(0,r.jsx)("svg",{id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",viewBox:"0 0 115.77 122.88",className:"w-5 h-5 fill-black dark:fill-slate-300",xmlSpace:"preserve",enableBackground:"new 0 0 115.77 122.88",children:(0,r.jsx)("path",{d:"M89.62 13.96v7.73h12.2v.02c3.85.01 7.34 1.57 9.86 4.1 2.5 2.51 4.06 5.98 4.07 9.82h.02v73.3h-.02c-.01 3.84-1.57 7.33-4.1 9.86-2.51 2.5-5.98 4.06-9.82 4.07v.02H40.1v-.02c-3.84-.01-7.34-1.57-9.86-4.1-2.5-2.51-4.06-5.98-4.07-9.82h-.02V92.51h-12.2v-.02c-3.84-.01-7.34-1.57-9.86-4.1-2.5-2.51-4.06-5.98-4.07-9.82H0V13.95h.02c.01-3.85 1.58-7.34 4.1-9.86C6.63 1.59 10.1.03 13.94.02V0H75.67v.02c3.85.01 7.34 1.57 9.86 4.1 2.5 2.51 4.06 5.98 4.07 9.82h.02v.02zm-10.58 7.73v-7.75h.02c0-.91-.39-1.75-1.01-2.37-.61-.61-1.46-1-2.37-1v.02H13.95v-.02c-.91 0-1.75.39-2.37 1.01-.61.61-1 1.46-1 2.37h.02v64.62h-.02c0 .91.39 1.75 1.01 2.37.61.61 1.46 1 2.37 1v-.02h12.2V35.64h.02c.01-3.85 1.58-7.34 4.1-9.86 2.51-2.5 5.98-4.06 9.82-4.07v-.02H79.04zm26.14 87.23V35.63h.02c0-.91-.39-1.75-1.01-2.37-.61-.61-1.46-1-2.37-1v.02H40.09v-.02c-.91 0-1.75.39-2.37 1.01-.61.61-1 1.46-1 2.37h.02v73.3h-.02c0 .91.39 1.75 1.01 2.37.61.61 1.46 1 2.37 1v-.02H101.83v.02c.91 0 1.75-.39 2.37-1.01.61-.61 1-1.46 1-2.37h-.02v-.01z",fillRule:"evenodd",clipRule:"evenodd"})})}function o(e){return(0,r.jsx)("div",{className:"flex justify-center tooltip","data-tip":"Copy content",children:(0,r.jsx)("button",{"aria-label":"copy content",onClick:()=>{var t;t=e.content,window.isSecureContext?navigator.clipboard.writeText(t).then(()=>{i.ZP.success("Content copied to your clipboard.")}).catch(e=>{i.ZP.error("Error during copying content.")}):function(e){let t=document.createElement("textarea");t.value=e,document.body.appendChild(t),t.focus(),t.select();try{document.execCommand("copy"),i.ZP.success("Content copied to your clipboard.")}catch(e){i.ZP.error("Error during copying content.")}document.body.removeChild(t)}(t)},children:(0,r.jsx)(a,{})})})}}},function(e){e.O(0,[8726,2971,7023,1744],function(){return e(e.s=407)}),_N_E=e.O()}]);