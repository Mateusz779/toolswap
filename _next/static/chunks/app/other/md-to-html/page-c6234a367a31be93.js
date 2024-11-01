(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8639],{42291:(e,t,a)=>{Promise.resolve().then(a.bind(a,44880))},44880:(e,t,a)=>{"use strict";a.d(t,{default:()=>d});var l=a(57437),r=a(16008),s=a(2265),c=a(22736),n=a(59785);let o=e=>{let{htmlContent:t}=e;return(0,l.jsx)("div",{className:"mt-6 w-full max-w-2xl",children:(0,l.jsxs)("div",{role:"tablist",className:"tabs tabs-lifted",children:[(0,l.jsx)("input",{type:"radio",name:"my_tabs_1",role:"tab",className:"tab","aria-label":"HTML preview",defaultChecked:!0}),(0,l.jsx)("div",{role:"tabpanel",className:"p-6 tab-content bg-base-100 border-base-300 rounded-box",children:(0,l.jsx)("iframe",{srcDoc:t,className:"w-full h-96 rounded-md border",title:"HTML Preview"})}),(0,l.jsx)("input",{type:"radio",name:"my_tabs_1",role:"tab",className:"tab","aria-label":"HTML source"}),(0,l.jsx)("div",{role:"tabpanel",className:"p-6 w-full max-w-2xl tab-content bg-base-100 border-base-300 rounded-box",children:(0,l.jsx)("pre",{className:"overflow-scroll h-96 rounded-md border",children:(0,l.jsx)("code",{children:t})})})]})})},d=()=>{let[e,t]=(0,s.useState)(""),[a,d]=s.useState("");return s.useEffect(()=>{(async()=>{d((await (0,c.j)().use(n.Z).process(e)).toString())})()},[e]),(0,l.jsxs)("div",{className:"flex flex-col items-center min-h-screen",children:[(0,l.jsx)("h1",{className:"mb-6 text-3xl font-bold text-center",children:"Markdown to HTML Converter"}),(0,l.jsx)("div",{className:"flex justify-center items-center px-4 w-full",children:(0,l.jsx)("textarea",{rows:14,cols:50,value:e,onChange:e=>t(e.target.value),placeholder:"Enter your markdown here",className:"mb-6 w-full max-w-2xl rounded-md border shadow-sm max-md:max-w-xl focus:outline-none focus:ring-2"})}),(0,l.jsxs)("div",{className:"w-full max-w-2xl rounded-md shadow-sm max-md:max-w-xl",children:[(0,l.jsx)("h2",{className:"mb-4 text-2xl font-semibold text-center max-md:max-w-xl",children:"Output HTML:"}),(0,l.jsx)(r.Z,{content:a}),(0,l.jsx)(o,{htmlContent:a})]})]})}},16008:(e,t,a)=>{"use strict";a.d(t,{Z:()=>c});var l=a(57437),r=a(88726);function s(){return(0,l.jsx)("svg",{id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",viewBox:"0 0 115.77 122.88",className:"w-5 h-5 fill-black dark:fill-slate-300",xmlSpace:"preserve",enableBackground:"new 0 0 115.77 122.88",children:(0,l.jsx)("path",{d:"M89.62 13.96v7.73h12.2v.02c3.85.01 7.34 1.57 9.86 4.1 2.5 2.51 4.06 5.98 4.07 9.82h.02v73.3h-.02c-.01 3.84-1.57 7.33-4.1 9.86-2.51 2.5-5.98 4.06-9.82 4.07v.02H40.1v-.02c-3.84-.01-7.34-1.57-9.86-4.1-2.5-2.51-4.06-5.98-4.07-9.82h-.02V92.51h-12.2v-.02c-3.84-.01-7.34-1.57-9.86-4.1-2.5-2.51-4.06-5.98-4.07-9.82H0V13.95h.02c.01-3.85 1.58-7.34 4.1-9.86C6.63 1.59 10.1.03 13.94.02V0H75.67v.02c3.85.01 7.34 1.57 9.86 4.1 2.5 2.51 4.06 5.98 4.07 9.82h.02v.02zm-10.58 7.73v-7.75h.02c0-.91-.39-1.75-1.01-2.37-.61-.61-1.46-1-2.37-1v.02H13.95v-.02c-.91 0-1.75.39-2.37 1.01-.61.61-1 1.46-1 2.37h.02v64.62h-.02c0 .91.39 1.75 1.01 2.37.61.61 1.46 1 2.37 1v-.02h12.2V35.64h.02c.01-3.85 1.58-7.34 4.1-9.86 2.51-2.5 5.98-4.06 9.82-4.07v-.02H79.04zm26.14 87.23V35.63h.02c0-.91-.39-1.75-1.01-2.37-.61-.61-1.46-1-2.37-1v.02H40.09v-.02c-.91 0-1.75.39-2.37 1.01-.61.61-1 1.46-1 2.37h.02v73.3h-.02c0 .91.39 1.75 1.01 2.37.61.61 1.46 1 2.37 1v-.02H101.83v.02c.91 0 1.75-.39 2.37-1.01.61-.61 1-1.46 1-2.37h-.02v-.01z",fillRule:"evenodd",clipRule:"evenodd"})})}function c(e){return(0,l.jsx)("div",{className:"flex justify-center tooltip","data-tip":"Copy content",children:(0,l.jsx)("button",{"aria-label":"copy content",onClick:()=>{var t;t=e.content,window.isSecureContext?navigator.clipboard.writeText(t).then(()=>{r.ZP.success("Content copied to your clipboard.")}).catch(e=>{r.ZP.error("Error during copying content.")}):function(e){let t=document.createElement("textarea");t.value=e,document.body.appendChild(t),t.focus(),t.select();try{document.execCommand("copy"),r.ZP.success("Content copied to your clipboard.")}catch(e){r.ZP.error("Error during copying content.")}document.body.removeChild(t)}(t)},children:(0,l.jsx)(s,{})})})}}},e=>{var t=t=>e(e.s=t);e.O(0,[8726,7874,7130,6215,1744],()=>t(42291)),_N_E=e.O()}]);