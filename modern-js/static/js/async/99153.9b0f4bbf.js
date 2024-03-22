/*! For license information please see 99153.9b0f4bbf.js.LICENSE.txt */
(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["99153"],{47723:function(e,s,n){"use strict";n.r(s);var a=n("39980"),t=n("96954");function d(e){let s=Object.assign({h1:"h1",a:"a",p:"p",div:"div",h2:"h2",pre:"pre",code:"code"},(0,t.useMDXComponents)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(s.h1,{id:"import-wasm-assets",children:["Import Wasm Assets",(0,a.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#import-wasm-assets",children:"#"})]}),"\n",(0,a.jsx)(s.p,{children:"Modern.js supports import WebAssembly assets in code."}),"\n",(0,a.jsxs)(s.div,{className:"rspress-directive tip",children:[(0,a.jsx)(s.div,{className:"rspress-directive-title",children:"What is WebAssembly"}),(0,a.jsx)(s.div,{className:"rspress-directive-content",children:(0,a.jsx)(s.p,{children:"WebAssembly (Wasm) is a portable, high-performance binary format designed to execute CPU-intensive computing tasks in modern web browsers, bringing performance and reliability similar to native compiled code to the web platform."})})]}),"\n",(0,a.jsxs)(s.h2,{id:"import",children:["Import",(0,a.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#import",children:"#"})]}),"\n",(0,a.jsx)(s.p,{children:"You can import a WebAssembly module directly in a JavaScript file:"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-js",meta:'title="index.js"',children:"import { add } from './add.wasm';\n\nconsole.log(add); // [native code]\nconsole.log(add(1, 2)); // 3\n"})}),"\n",(0,a.jsx)(s.p,{children:"WebAssembly modules can also be imported via dynamic import:"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-js",meta:'title="index.js"',children:"import('./add.wasm').then(({ add }) => {\n  console.log('---- Async Wasm Module');\n  console.log(add); // [native code]\n  console.log(add(1, 2)); // 3\n});\n"})}),"\n",(0,a.jsxs)(s.p,{children:["You can also get the path of a WebAssembly module using the ",(0,a.jsx)(s.code,{children:"new URL"})," syntax:"]}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-js",meta:'title="index.js"',children:"const wasmURL = new URL('./add.wasm', import.meta.url);\n\nconsole.log(wasmURL).pathname; // \"/static/wasm/[hash].module.wasm\"\n"})}),"\n",(0,a.jsxs)(s.h2,{id:"output-directory",children:["Output Directory",(0,a.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#output-directory",children:"#"})]}),"\n",(0,a.jsxs)(s.p,{children:["When a ",(0,a.jsx)(s.code,{children:".wasm"})," asset is imported, it will be output by Modern.js to the ",(0,a.jsx)(s.code,{children:"dist/static/wasm"})," directory by default."]}),"\n",(0,a.jsxs)(s.p,{children:["You can change the output directory of ",(0,a.jsx)(s.code,{children:".wasm"})," files via ",(0,a.jsx)(s.a,{href:"/configure/app/output/dist-path",children:"output.distPath"})," config."]}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-ts",children:"export default {\n  output: {\n    distPath: {\n      wasm: 'resource/wasm',\n    },\n  },\n};\n"})}),"\n",(0,a.jsxs)(s.h2,{id:"add-type-declaration",children:["Add Type Declaration",(0,a.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#add-type-declaration",children:"#"})]}),"\n",(0,a.jsx)(s.p,{children:"When you import a Wasm file in TypeScript code, you usually need to add the corresponding type declaration."}),"\n",(0,a.jsxs)(s.p,{children:["For example, the ",(0,a.jsx)(s.code,{children:"add.wasm"})," file exports an ",(0,a.jsx)(s.code,{children:"add()"})," method, then you can create an ",(0,a.jsx)(s.code,{children:"add.wasm.d.ts"})," file in the same directory and add the corresponding type declaration:"]}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-ts",meta:'title="add.wasm.d.ts"',children:"export const add = (num1: number, num2: number) => number;\n"})})]})}function r(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:s}=Object.assign({},(0,t.useMDXComponents)(),e.components);return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}s.default=r,r.__RSPRESS_PAGE_META={},r.__RSPRESS_PAGE_META["en%2Fguides%2Fbasic-features%2Fwasm-assets.mdx"]={toc:[{text:"Import",id:"import",depth:2},{text:"Output Directory",id:"output-directory",depth:2},{text:"Add Type Declaration",id:"add-type-declaration",depth:2}],title:"Import Wasm Assets",frontmatter:{sidebar_position:13}}}}]);