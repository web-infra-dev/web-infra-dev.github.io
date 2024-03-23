/*! For license information please see 39253.d7d7f035.js.LICENSE.txt */
(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["39253"],{5701:function(e,s,n){"use strict";n.r(s);var d=n("39980"),a=n("76713");function r(e){let s=Object.assign({h1:"h1",a:"a",p:"p",div:"div",h2:"h2",pre:"pre",code:"code"},(0,a.useMDXComponents)(),e.components);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(s.h1,{id:"\u5F15\u7528-wasm-\u8D44\u6E90",children:["\u5F15\u7528 Wasm \u8D44\u6E90",(0,d.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#\u5F15\u7528-wasm-\u8D44\u6E90",children:"#"})]}),"\n",(0,d.jsx)(s.p,{children:"Modern.js \u652F\u6301\u5728\u4EE3\u7801\u5F15\u7528 WebAssembly \u8D44\u6E90\u3002"}),"\n",(0,d.jsxs)(s.div,{className:"rspress-directive tip",children:[(0,d.jsx)(s.div,{className:"rspress-directive-title",children:"\u4EC0\u4E48\u662F WebAssembly"}),(0,d.jsx)(s.div,{className:"rspress-directive-content",children:(0,d.jsx)(s.p,{children:"WebAssembly\uFF08\u7F29\u5199\u4E3A wasm\uFF09\u662F\u4E00\u79CD\u53EF\u79FB\u690D\u3001\u9AD8\u6027\u80FD\u7684\u5B57\u8282\u7801\u683C\u5F0F\uFF0C\u88AB\u8BBE\u8BA1\u7528\u6765\u5728\u73B0\u4EE3 Web \u6D4F\u89C8\u5668\u4E2D\u6267\u884C CPU \u5BC6\u96C6\u578B\u8BA1\u7B97\u4EFB\u52A1\uFF0C\u4E3A Web \u5E73\u53F0\u5E26\u6765\u4E86\u63A5\u8FD1\u672C\u5730\u7F16\u8BD1\u4EE3\u7801\u7684\u6027\u80FD\u548C\u53EF\u9760\u6027\u3002"})})]}),"\n",(0,d.jsxs)(s.h2,{id:"\u5F15\u7528\u65B9\u5F0F",children:["\u5F15\u7528\u65B9\u5F0F",(0,d.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#\u5F15\u7528\u65B9\u5F0F",children:"#"})]}),"\n",(0,d.jsx)(s.p,{children:"\u4F60\u53EF\u4EE5\u76F4\u63A5\u5728 JavaScript \u6587\u4EF6\u4E2D\u5F15\u7528\u4E00\u4E2A WebAssembly \u6A21\u5757\uFF1A"}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-js",meta:'title="index.js"',children:"import { add } from './add.wasm';\n\nconsole.log(add); // [native code]\nconsole.log(add(1, 2)); // 3\n"})}),"\n",(0,d.jsx)(s.p,{children:"\u4E5F\u53EF\u4EE5\u901A\u8FC7 dynamic import \u6765\u5F15\u7528 WebAssembly \u6A21\u5757\uFF1A"}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-js",meta:'title="index.js"',children:"import('./add.wasm').then(({ add }) => {\n  console.log('---- Async Wasm Module');\n  console.log(add); // [native code]\n  console.log(add(1, 2)); // 3\n});\n"})}),"\n",(0,d.jsxs)(s.p,{children:["\u8FD8\u53EF\u4EE5\u901A\u8FC7 ",(0,d.jsx)(s.code,{children:"new URL"})," \u8BED\u6CD5\u6765\u83B7\u53D6 WebAssembly \u6A21\u5757\u7684\u8DEF\u5F84\uFF1A"]}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-js",meta:'title="index.js"',children:"const wasmURL = new URL('./add.wasm', import.meta.url);\n\nconsole.log(wasmURL).pathname; // \"/static/wasm/[hash].module.wasm\"\n"})}),"\n",(0,d.jsxs)(s.h2,{id:"\u8F93\u51FA\u76EE\u5F55",children:["\u8F93\u51FA\u76EE\u5F55",(0,d.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#\u8F93\u51FA\u76EE\u5F55",children:"#"})]}),"\n",(0,d.jsxs)(s.p,{children:["\u5F53 ",(0,d.jsx)(s.code,{children:".wasm"})," \u8D44\u6E90\u88AB\u5F15\u7528\u540E\uFF0C\u9ED8\u8BA4\u4F1A\u88AB Modern.js \u8F93\u51FA\u5230 ",(0,d.jsx)(s.code,{children:"dist/static/wasm"})," \u76EE\u5F55\u4E0B\u3002"]}),"\n",(0,d.jsxs)(s.p,{children:["\u4F60\u53EF\u4EE5\u901A\u8FC7 ",(0,d.jsx)(s.a,{href:"/configure/app/output/dist-path",children:"output.distPath"})," \u914D\u7F6E\u9879\u6765\u4FEE\u6539 ",(0,d.jsx)(s.code,{children:".wasm"})," \u4EA7\u7269\u7684\u8F93\u51FA\u76EE\u5F55\u3002"]}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-ts",children:"export default {\n  output: {\n    distPath: {\n      wasm: 'resource/wasm',\n    },\n  },\n};\n"})}),"\n",(0,d.jsxs)(s.h2,{id:"\u6DFB\u52A0\u7C7B\u578B\u58F0\u660E",children:["\u6DFB\u52A0\u7C7B\u578B\u58F0\u660E",(0,d.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#\u6DFB\u52A0\u7C7B\u578B\u58F0\u660E",children:"#"})]}),"\n",(0,d.jsx)(s.p,{children:"\u5F53\u4F60\u5728 TypeScript \u4EE3\u7801\u4E2D\u5F15\u7528 Wasm \u6587\u4EF6\u65F6\uFF0C\u901A\u5E38\u9700\u8981\u6DFB\u52A0\u76F8\u5E94\u7684\u7C7B\u578B\u58F0\u660E\u3002"}),"\n",(0,d.jsxs)(s.p,{children:["\u6BD4\u5982 ",(0,d.jsx)(s.code,{children:"add.wasm"})," \u6587\u4EF6\u5BFC\u51FA\u4E86 ",(0,d.jsx)(s.code,{children:"add()"})," \u65B9\u6CD5\uFF0C\u90A3\u4E48\u4F60\u53EF\u4EE5\u5728\u540C\u7EA7\u76EE\u5F55\u4E0B\u521B\u5EFA\u4E00\u4E2A ",(0,d.jsx)(s.code,{children:"add.wasm.d.ts"})," \u6587\u4EF6\uFF0C\u5E76\u6DFB\u52A0\u76F8\u5E94\u7684\u7C7B\u578B\u58F0\u660E\uFF1A"]}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-ts",meta:'title="add.wasm.d.ts"',children:"export const add = (num1: number, num2: number) => number;\n"})})]})}function c(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:s}=Object.assign({},(0,a.useMDXComponents)(),e.components);return s?(0,d.jsx)(s,{...e,children:(0,d.jsx)(r,{...e})}):r(e)}s.default=c,c.__RSPRESS_PAGE_META={},c.__RSPRESS_PAGE_META["zh%2Fguides%2Fbasic-features%2Fwasm-assets.mdx"]={toc:[{text:"\u5F15\u7528\u65B9\u5F0F",id:"\u5F15\u7528\u65B9\u5F0F",depth:2},{text:"\u8F93\u51FA\u76EE\u5F55",id:"\u8F93\u51FA\u76EE\u5F55",depth:2},{text:"\u6DFB\u52A0\u7C7B\u578B\u58F0\u660E",id:"\u6DFB\u52A0\u7C7B\u578B\u58F0\u660E",depth:2}],title:"\u5F15\u7528 Wasm \u8D44\u6E90",frontmatter:{sidebar_position:13}}}}]);