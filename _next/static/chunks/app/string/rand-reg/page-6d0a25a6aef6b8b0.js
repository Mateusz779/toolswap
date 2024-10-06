(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2584],{601:function(e,t,n){Promise.resolve().then(n.bind(n,6523)),Promise.resolve().then(n.bind(n,1523)),Promise.resolve().then(n.bind(n,49))},6523:function(e,t,n){"use strict";n.d(t,{default:function(){return i}});var s=n(7437),r=n(2265),a=n(9354),l=n.n(a);function i(){let[e,t]=(0,r.useState)("digits: \\d{1,5}"),[n,a]=(0,r.useState)(5),[i,o]=(0,r.useState)("");return(0,s.jsxs)("div",{className:"w-full",children:[(0,s.jsxs)("label",{className:"w-full max-w-2xl form-control",children:[(0,s.jsx)("div",{className:"label",children:(0,s.jsx)("span",{className:"label-text",children:"Regex:"})}),(0,s.jsx)("input",{type:"text",placeholder:"Regex",value:e,onChange:e=>t(e.target.value),className:"w-full max-w-2xl input input-bordered"})]}),(0,s.jsxs)("label",{className:"w-full max-w-2xl form-control",children:[(0,s.jsx)("div",{className:"label",children:(0,s.jsx)("span",{className:"label-text",children:"Count of generated string"})}),(0,s.jsx)("input",{type:"number",min:1,max:1e3,placeholder:"Regex",value:n,onChange:e=>a(Number(e.target.value)),className:"w-full max-w-2xl input input-bordered"})]}),(0,s.jsx)("button",{className:"my-2 btn btn-outline",onClick:()=>{let t="";try{for(let s=1;s<=n;s++)t="".concat(t).concat(new(l())(e).gen(),"\n");o(t)}catch(e){o("Invalid regex")}},children:"Generate"}),(0,s.jsx)("h2",{className:"font-bold",children:"Result:"}),(0,s.jsx)("textarea",{value:i,placeholder:"Output here",readOnly:!0,rows:6,className:"my-2 w-full max-w-2xl textarea textarea-bordered"})]})}},3018:function(e){"use strict";class t{constructor(e,t){this.low=e,this.high=t,this.length=1+t-e}overlaps(e){return!(this.high<e.low||this.low>e.high)}touches(e){return!(this.high+1<e.low||this.low-1>e.high)}add(e){return new t(Math.min(this.low,e.low),Math.max(this.high,e.high))}subtract(e){return e.low<=this.low&&e.high>=this.high?[]:e.low>this.low&&e.high<this.high?[new t(this.low,e.low-1),new t(e.high+1,this.high)]:e.low<=this.low?[new t(e.high+1,this.high)]:[new t(this.low,e.low-1)]}toString(){return this.low==this.high?this.low.toString():this.low+"-"+this.high}}class n{constructor(e,t){this.ranges=[],this.length=0,null!=e&&this.add(e,t)}_update_length(){this.length=this.ranges.reduce((e,t)=>e+t.length,0)}add(e,s){var r=e=>{for(var t=0;t<this.ranges.length&&!e.touches(this.ranges[t]);)t++;for(var n=this.ranges.slice(0,t);t<this.ranges.length&&e.touches(this.ranges[t]);)e=e.add(this.ranges[t]),t++;n.push(e),this.ranges=n.concat(this.ranges.slice(t)),this._update_length()};return e instanceof n?e.ranges.forEach(r):(null==s&&(s=e),r(new t(e,s))),this}subtract(e,s){var r=e=>{for(var t=0;t<this.ranges.length&&!e.overlaps(this.ranges[t]);)t++;for(var n=this.ranges.slice(0,t);t<this.ranges.length&&e.overlaps(this.ranges[t]);)n=n.concat(this.ranges[t].subtract(e)),t++;this.ranges=n.concat(this.ranges.slice(t)),this._update_length()};return e instanceof n?e.ranges.forEach(r):(null==s&&(s=e),r(new t(e,s))),this}intersect(e,s){var r=[],a=e=>{for(var n=0;n<this.ranges.length&&!e.overlaps(this.ranges[n]);)n++;for(;n<this.ranges.length&&e.overlaps(this.ranges[n]);){var s=Math.max(this.ranges[n].low,e.low),a=Math.min(this.ranges[n].high,e.high);r.push(new t(s,a)),n++}};return e instanceof n?e.ranges.forEach(a):(null==s&&(s=e),a(new t(e,s))),this.ranges=r,this._update_length(),this}index(e){for(var t=0;t<this.ranges.length&&this.ranges[t].length<=e;)e-=this.ranges[t].length,t++;return this.ranges[t].low+e}toString(){return"[ "+this.ranges.join(", ")+" ]"}clone(){return new n(this)}numbers(){return this.ranges.reduce((e,t)=>{for(var n=t.low;n<=t.high;)e.push(n),n++;return e},[])}subranges(){return this.ranges.map(e=>({low:e.low,high:e.high,length:1+e.high-e.low}))}}e.exports=n},1523:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"BailoutToCSR",{enumerable:!0,get:function(){return r}});let s=n(8993);function r(e){let{reason:t,children:n}=e;if("undefined"==typeof window)throw new s.BailoutToCSRError(t);return n}},49:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"PreloadCss",{enumerable:!0,get:function(){return a}});let s=n(7437),r=n(544);function a(e){let{moduleIds:t}=e;if("undefined"!=typeof window)return null;let n=(0,r.getExpectedRequestStore)("next/dynamic css"),a=[];if(n.reactLoadableManifest&&t){let e=n.reactLoadableManifest;for(let n of t){if(!e[n])continue;let t=e[n].files.filter(e=>e.endsWith(".css"));a.push(...t)}}return 0===a.length?null:(0,s.jsx)(s.Fragment,{children:a.map(e=>(0,s.jsx)("link",{precedence:"dynamic",rel:"stylesheet",href:n.assetPrefix+"/_next/"+encodeURI(e),as:"style"},e))})}},9354:function(e,t,n){let s=n(2003),r=n(3018),a=s.types;e.exports=class e{constructor(e,t){if(this._setDefaults(e),e instanceof RegExp)this.ignoreCase=e.ignoreCase,this.multiline=e.multiline,e=e.source;else if("string"==typeof e)this.ignoreCase=t&&-1!==t.indexOf("i"),this.multiline=t&&-1!==t.indexOf("m");else throw Error("Expected a regexp or string");this.tokens=s(e)}_setDefaults(t){this.max=null!=t.max?t.max:null!=e.prototype.max?e.prototype.max:100,this.defaultRange=t.defaultRange?t.defaultRange:this.defaultRange.clone(),t.randInt&&(this.randInt=t.randInt)}gen(){return this._gen(this.tokens,[])}_gen(e,t){var n,s,r,l,i;switch(e.type){case a.ROOT:case a.GROUP:if(e.followedBy||e.notFollowedBy)return"";for(e.remember&&void 0===e.groupNumber&&(e.groupNumber=t.push(null)-1),n=e.options?this._randSelect(e.options):e.stack,s="",l=0,i=n.length;l<i;l++)s+=this._gen(n[l],t);return e.remember&&(t[e.groupNumber]=s),s;case a.POSITION:return"";case a.SET:var o=this._expand(e);if(!o.length)return"";return String.fromCharCode(this._randSelect(o));case a.REPETITION:for(l=0,r=this.randInt(e.min,e.max===1/0?e.min+this.max:e.max),s="";l<r;l++)s+=this._gen(e.value,t);return s;case a.REFERENCE:return t[e.value-1]||"";case a.CHAR:return String.fromCharCode(this.ignoreCase&&this._randBool()?this._toOtherCase(e.value):e.value)}}_toOtherCase(e){return e+(97<=e&&e<=122?-32:65<=e&&e<=90?32:0)}_randBool(){return!this.randInt(0,1)}_randSelect(e){return e instanceof r?e.index(this.randInt(0,e.length-1)):e[this.randInt(0,e.length-1)]}_expand(e){if(e.type===s.types.CHAR)return new r(e.value);if(e.type===s.types.RANGE)return new r(e.from,e.to);{let t=new r;for(let n=0;n<e.set.length;n++){let s=this._expand(e.set[n]);if(t.add(s),this.ignoreCase)for(let e=0;e<s.length;e++){let n=s.index(e),r=this._toOtherCase(n);n!==r&&t.add(r)}}return e.not?this.defaultRange.clone().subtract(t):this.defaultRange.clone().intersect(t)}}randInt(e,t){return e+Math.floor(Math.random()*(1+t-e))}get defaultRange(){return this._range=this._range||new r(32,126)}set defaultRange(e){this._range=e}static randexp(t,n){var s;return"string"==typeof t&&(t=new RegExp(t,n)),void 0===t._randexp?(s=new e(t,n),t._randexp=s):(s=t._randexp)._setDefaults(t),s.gen()}static sugar(){RegExp.prototype.gen=function(){return e.randexp(this)}}}},2003:function(e,t,n){let s=n(2776),r=n(2459),a=n(4502),l=n(8531);e.exports=e=>{var t,n,i=0,o={type:r.ROOT,stack:[]},h=o,u=o.stack,c=[],p=t=>{s.error(e,`Nothing to repeat at column ${t-1}`)},g=s.strToChars(e);for(t=g.length;i<t;)switch(n=g[i++]){case"\\":switch(n=g[i++]){case"b":u.push(l.wordBoundary());break;case"B":u.push(l.nonWordBoundary());break;case"w":u.push(a.words());break;case"W":u.push(a.notWords());break;case"d":u.push(a.ints());break;case"D":u.push(a.notInts());break;case"s":u.push(a.whitespace());break;case"S":u.push(a.notWhitespace());break;default:/\d/.test(n)?u.push({type:r.REFERENCE,value:parseInt(n,10)}):u.push({type:r.CHAR,value:n.charCodeAt(0)})}break;case"^":u.push(l.begin());break;case"$":u.push(l.end());break;case"[":"^"===g[i]?(d=!0,i++):d=!1;var d,f=s.tokenizeClass(g.slice(i),e);i+=f[1],u.push({type:r.SET,set:f[0],not:d});break;case".":u.push(a.anyChar());break;case"(":var m={type:r.GROUP,stack:[],remember:!0};"?"===(n=g[i])&&(n=g[i+1],i+=2,"="===n?m.followedBy=!0:"!"===n?m.notFollowedBy=!0:":"!==n&&s.error(e,`Invalid group, character '${n}' after '?' at column ${i-1}`),m.remember=!1),u.push(m),c.push(h),h=m,u=m.stack;break;case")":0===c.length&&s.error(e,`Unmatched ) at column ${i-1}`),u=(h=c.pop()).options?h.options[h.options.length-1]:h.stack;break;case"|":h.options||(h.options=[h.stack],delete h.stack);var y=[];h.options.push(y),u=y;break;case"{":var v,w,x=/^(\d+)(,(\d+)?)?\}/.exec(g.slice(i));null!==x?(0===u.length&&p(i),v=parseInt(x[1],10),w=x[2]?x[3]?parseInt(x[3],10):1/0:v,i+=x[0].length,u.push({type:r.REPETITION,min:v,max:w,value:u.pop()})):u.push({type:r.CHAR,value:123});break;case"?":0===u.length&&p(i),u.push({type:r.REPETITION,min:0,max:1,value:u.pop()});break;case"+":0===u.length&&p(i),u.push({type:r.REPETITION,min:1,max:1/0,value:u.pop()});break;case"*":0===u.length&&p(i),u.push({type:r.REPETITION,min:0,max:1/0,value:u.pop()});break;default:u.push({type:r.CHAR,value:n.charCodeAt(0)})}return 0!==c.length&&s.error(e,"Unterminated group"),o},e.exports.types=r},8531:function(e,t,n){let s=n(2459);t.wordBoundary=()=>({type:s.POSITION,value:"b"}),t.nonWordBoundary=()=>({type:s.POSITION,value:"B"}),t.begin=()=>({type:s.POSITION,value:"^"}),t.end=()=>({type:s.POSITION,value:"$"})},4502:function(e,t,n){let s=n(2459),r=()=>[{type:s.RANGE,from:48,to:57}],a=()=>[{type:s.CHAR,value:95},{type:s.RANGE,from:97,to:122},{type:s.RANGE,from:65,to:90}].concat(r()),l=()=>[{type:s.CHAR,value:9},{type:s.CHAR,value:10},{type:s.CHAR,value:11},{type:s.CHAR,value:12},{type:s.CHAR,value:13},{type:s.CHAR,value:32},{type:s.CHAR,value:160},{type:s.CHAR,value:5760},{type:s.RANGE,from:8192,to:8202},{type:s.CHAR,value:8232},{type:s.CHAR,value:8233},{type:s.CHAR,value:8239},{type:s.CHAR,value:8287},{type:s.CHAR,value:12288},{type:s.CHAR,value:65279}],i=()=>[{type:s.CHAR,value:10},{type:s.CHAR,value:13},{type:s.CHAR,value:8232},{type:s.CHAR,value:8233}];t.words=()=>({type:s.SET,set:a(),not:!1}),t.notWords=()=>({type:s.SET,set:a(),not:!0}),t.ints=()=>({type:s.SET,set:r(),not:!1}),t.notInts=()=>({type:s.SET,set:r(),not:!0}),t.whitespace=()=>({type:s.SET,set:l(),not:!1}),t.notWhitespace=()=>({type:s.SET,set:l(),not:!0}),t.anyChar=()=>({type:s.SET,set:i(),not:!0})},2459:function(e){e.exports={ROOT:0,GROUP:1,POSITION:2,SET:3,RANGE:4,REPETITION:5,REFERENCE:6,CHAR:7}},2776:function(e,t,n){let s=n(2459),r=n(4502),a={0:0,t:9,n:10,v:11,f:12,r:13};t.strToChars=function(e){return e=e.replace(/(\[\\b\])|(\\)?\\(?:u([A-F0-9]{4})|x([A-F0-9]{2})|(0?[0-7]{2})|c([@A-Z[\\\]^?])|([0tnvfr]))/g,function(e,t,n,s,r,l,i,o){if(n)return e;var h=String.fromCharCode(t?8:s?parseInt(s,16):r?parseInt(r,16):l?parseInt(l,8):i?"@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^ ?".indexOf(i):a[o]);return/[[\]{}^$.|?*+()]/.test(h)&&(h="\\"+h),h})},t.tokenizeClass=(e,n)=>{for(var a,l,i=[],o=/\\(?:(w)|(d)|(s)|(W)|(D)|(S))|((?:(?:\\)(.)|([^\]\\]))-(?:\\)?([^\]]))|(\])|(?:\\)?([^])/g;null!=(a=o.exec(e));)if(a[1])i.push(r.words());else if(a[2])i.push(r.ints());else if(a[3])i.push(r.whitespace());else if(a[4])i.push(r.notWords());else if(a[5])i.push(r.notInts());else if(a[6])i.push(r.notWhitespace());else if(a[7])i.push({type:s.RANGE,from:(a[8]||a[9]).charCodeAt(0),to:a[10].charCodeAt(0)});else{if(!(l=a[12]))return[i,o.lastIndex];i.push({type:s.CHAR,value:l.charCodeAt(0)})}t.error(n,"Unterminated character class")},t.error=(e,t)=>{throw SyntaxError("Invalid regular expression: /"+e+"/: "+t)}}},function(e){e.O(0,[2971,2117,1744],function(){return e(e.s=601)}),_N_E=e.O()}]);