(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7988],{8959:function(e,t,s){Promise.resolve().then(s.bind(s,3751))},3751:function(e,t,s){"use strict";var n=s(7437),a=s(2265),i=s(2107),r=s(7170),m=s(8726);t.default=()=>{let[e,t]=(0,a.useState)(null),[s,l]=(0,a.useState)(!1),c=async t=>{if(!e)return;l(!0);let s={maxSizeMB:2,maxWidthOrHeight:2048,useWebWorker:!0};try{let n=await (0,i.Z)(e,s),a=await (0,i.Z)(n,{...s,fileType:"image/".concat(t)});(0,r.saveAs)(a,"".concat(e.name.substring(0,e.name.lastIndexOf(".")),".").concat(t)),m.ZP.success("File was converted to ".concat(t," sucessfully."))}catch(e){m.ZP.error("Conversion failed:")}finally{l(!1)}};return(0,n.jsxs)("div",{className:"flex flex-col items-center p-4 space-y-4",children:[s&&(0,n.jsx)("div",{className:"flex fixed inset-0 z-50 justify-center items-center bg-gray-800 bg-opacity-50",children:(0,n.jsx)("div",{className:"w-16 h-16 rounded-full border-4 border-dashed animate-spin border-primary"})}),(0,n.jsx)("h1",{className:"mb-6 text-3xl font-bold",children:"Image converter"}),(0,n.jsx)("input",{type:"file",accept:"image/*",onChange:e=>{e.target.files&&e.target.files[0]&&t(e.target.files[0])},className:"w-full max-w-xs file-input file-input-bordered file-input-primary"}),(0,n.jsxs)("div",{className:"grid grid-cols-4 max-2xl:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 max-sm:max-w-xs max-sm:w-full",children:[(0,n.jsx)("button",{onClick:()=>c("png"),className:"m-2 btn btn-primary max-sm:mx-0",children:"Convert to PNG"}),(0,n.jsx)("button",{onClick:()=>c("webp"),className:"m-2 btn btn-primary max-sm:mx-0",children:"Convert to WebP"}),(0,n.jsx)("button",{onClick:()=>c("jpeg"),className:"m-2 btn btn-primary max-sm:mx-0",children:"Convert to JPEG"}),(0,n.jsx)("button",{onClick:()=>c("ico"),className:"m-2 btn btn-primary max-sm:mx-0",children:"Convert to ICO"}),(0,n.jsx)("button",{onClick:()=>c("bmp"),className:"m-2 btn btn-primary max-sm:mx-0",children:"Convert to BMP"}),(0,n.jsx)("button",{onClick:()=>c("tiff"),className:"m-2 btn btn-primary max-sm:mx-0",children:"Convert to TIFF"}),(0,n.jsx)("button",{onClick:()=>c("gif"),className:"m-2 btn btn-primary max-sm:mx-0",children:"Convert to GIF"})]})]})}}},function(e){e.O(0,[8726,4215,2971,7023,1744],function(){return e(e.s=8959)}),_N_E=e.O()}]);