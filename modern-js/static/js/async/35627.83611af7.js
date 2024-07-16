"use strict";(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["35627"],{56033:function(n,s,e){e.r(s),e.d(s,{default:function(){return c}});var r=e(39980),i=e(9580);function d(n){let s=Object.assign({h1:"h1",a:"a",ul:"ul",li:"li",strong:"strong",pre:"pre",code:"code",p:"p",h3:"h3"},(0,i.ah)(),n.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.h1,{id:"outputdistpath",children:["output.distPath",(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#outputdistpath",children:"#"})]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.strong,{children:"\u7C7B\u578B\uFF1A"})}),"\n"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-ts",children:"type DistPathConfig = {\n  root?: string;\n  html?: string;\n  js?: string;\n  css?: string;\n  svg?: string;\n  font?: string;\n  wasm?: string;\n  image?: string;\n  media?: string;\n  server?: string;\n  worker?: string;\n};\n"})}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.strong,{children:"\u9ED8\u8BA4\u503C\uFF1A"})}),"\n"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-js",children:"const defaultDistPath = {\n  root: 'dist',\n  html: 'html',\n  js: 'static/js',\n  css: 'static/css',\n  svg: 'static/svg',\n  font: 'static/font',\n  wasm: 'static/wasm',\n  image: 'static/image',\n  media: 'static/media',\n  server: 'bundles',\n  worker: 'worker',\n};\n"})}),"\n",(0,r.jsx)(s.p,{children:"\u8BBE\u7F6E\u6784\u5EFA\u4EA7\u7269\u7684\u8F93\u51FA\u76EE\u5F55\uFF0CBuilder \u4F1A\u6839\u636E\u4EA7\u7269\u7684\u7C7B\u578B\u8F93\u51FA\u5230\u5BF9\u5E94\u7684\u5B50\u76EE\u5F55\u4E0B\u3002"}),"\n",(0,r.jsx)(s.p,{children:"\u5176\u4E2D\uFF1A"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"root"}),": \u8868\u793A\u6240\u6709\u6784\u5EFA\u4EA7\u7269\u8F93\u51FA\u7684\u6839\u76EE\u5F55\u3002"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"html"}),"\uFF1A\u8868\u793A HTML \u6587\u4EF6\u7684\u8F93\u51FA\u76EE\u5F55\u3002"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"js"}),"\uFF1A\u8868\u793A JavaScript \u6587\u4EF6\u7684\u8F93\u51FA\u76EE\u5F55\u3002"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"css"}),"\uFF1A\u8868\u793A CSS \u6837\u5F0F\u6587\u4EF6\u7684\u8F93\u51FA\u76EE\u5F55\u3002"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"svg"}),"\uFF1A\u8868\u793A SVG \u56FE\u7247\u7684\u8F93\u51FA\u76EE\u5F55\u3002"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"font"}),"\uFF1A\u8868\u793A\u5B57\u4F53\u6587\u4EF6\u7684\u8F93\u51FA\u76EE\u5F55\u3002"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"wasm"}),"\uFF1A\u8868\u793A WebAssembly \u6587\u4EF6\u7684\u8F93\u51FA\u76EE\u5F55\u3002"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"image"}),"\uFF1A\u8868\u793A\u975E SVG \u56FE\u7247\u7684\u8F93\u51FA\u76EE\u5F55\u3002"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"media"}),"\uFF1A\u8868\u793A\u89C6\u9891\u7B49\u5A92\u4F53\u8D44\u6E90\u7684\u8F93\u51FA\u76EE\u5F55\u3002"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"server"}),": \u8868\u793A\u670D\u52A1\u7AEF\u4EA7\u7269\u7684\u8F93\u51FA\u76EE\u5F55\uFF0C\u4EC5\u5728 target \u4E3A ",(0,r.jsx)(s.code,{children:"node"})," \u65F6\u6709\u6548\u3002"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"worker"}),": \u8868\u793A worker \u4EA7\u7269\u7684\u8F93\u51FA\u76EE\u5F55\uFF0C\u4EC5\u5728 target \u4E3A ",(0,r.jsx)(s.code,{children:"service-worker"})," \u65F6\u6709\u6548\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(s.h3,{id:"\u6839\u76EE\u5F55",children:["\u6839\u76EE\u5F55",(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#\u6839\u76EE\u5F55",children:"#"})]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"root"})," \u662F\u6784\u5EFA\u4EA7\u7269\u7684\u6839\u76EE\u5F55\uFF0C\u53EF\u4EE5\u4E3A\u76F8\u5BF9\u8DEF\u5F84\u6216\u7EDD\u5BF9\u8DEF\u5F84\u3002\u5982\u679C ",(0,r.jsx)(s.code,{children:"root"})," \u7684\u503C\u4E3A\u76F8\u5BF9\u8DEF\u5F84\uFF0C\u5219\u4F1A\u57FA\u4E8E\u5F53\u524D\u9879\u76EE\u7684\u6839\u76EE\u5F55\u62FC\u63A5\u4E3A\u7EDD\u5BF9\u8DEF\u5F84\u3002"]}),"\n",(0,r.jsxs)(s.p,{children:["\u5176\u4ED6\u76EE\u5F55\u53EA\u80FD\u4E3A\u76F8\u5BF9\u8DEF\u5F84\uFF0C\u5E76\u4E14\u4F1A\u76F8\u5BF9\u4E8E ",(0,r.jsx)(s.code,{children:"root"})," \u8FDB\u884C\u8F93\u51FA\u3002"]}),"\n",(0,r.jsxs)(s.h3,{id:"\u793A\u4F8B",children:["\u793A\u4F8B",(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#\u793A\u4F8B",children:"#"})]}),"\n",(0,r.jsxs)(s.p,{children:["\u4EE5 JavaScript \u6587\u4EF6\u4E3A\u4F8B\uFF0C\u4F1A\u8F93\u51FA\u5230 ",(0,r.jsx)(s.code,{children:"distPath.root"})," + ",(0,r.jsx)(s.code,{children:"distPath.js"})," \u76EE\u5F55\uFF0C\u5373\u4E3A ",(0,r.jsx)(s.code,{children:"dist/static/js"}),"\u3002"]}),"\n",(0,r.jsxs)(s.p,{children:["\u5982\u679C\u9700\u8981\u5C06 JavaScript \u6587\u4EF6\u8F93\u51FA\u5230 ",(0,r.jsx)(s.code,{children:"build/resource/js"})," \u76EE\u5F55\uFF0C\u53EF\u4EE5\u8FD9\u6837\u8BBE\u7F6E\uFF1A"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-js",children:"export default {\n  output: {\n    distPath: {\n      root: 'build',\n      js: 'resource/js',\n    },\n  },\n};\n"})})]})}function t(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:s}=Object.assign({},(0,i.ah)(),n.components);return s?(0,r.jsx)(s,{...n,children:(0,r.jsx)(d,{...n})}):d(n)}let c=t;t.__RSPRESS_PAGE_META={},t.__RSPRESS_PAGE_META["zh%2Fconfigure%2Fapp%2Foutput%2Fdist-path.mdx"]={toc:[{text:"\u6839\u76EE\u5F55",id:"\u6839\u76EE\u5F55",depth:3},{text:"\u793A\u4F8B",id:"\u793A\u4F8B",depth:3}],title:"output.distPath",frontmatter:{sidebar_label:"distPath"}}}}]);