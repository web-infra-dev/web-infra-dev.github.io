/*! For license information please see 77404.cfee4e5f.js.LICENSE.txt */
(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["77404"],{49234:function(e,r,n){"use strict";n.r(r);var s=n("39980"),d=n("96954");function a(e){let r=Object.assign({h1:"h1",a:"a",ul:"ul",li:"li",strong:"strong",code:"code",p:"p",pre:"pre",h2:"h2",div:"div"},(0,d.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(r.h1,{id:"serverenableframeworkext",children:["server.enableFrameworkExt",(0,s.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#serverenableframeworkext",children:"#"})]}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"\u7C7B\u578B\uFF1A"})," ",(0,s.jsx)(r.code,{children:"boolean"})]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"\u9ED8\u8BA4\u503C\uFF1A"})," ",(0,s.jsx)(r.code,{children:"false"})]}),"\n"]}),"\n",(0,s.jsxs)(r.p,{children:["\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u5F00\u542F",(0,s.jsx)(r.a,{href:"/guides/advanced-features/web-server",children:"\u81EA\u5B9A\u4E49 Web Server \u529F\u80FD"}),"\u540E\uFF0CMiddleware \u4F1A\u4F7F\u7528 Modern.js \u672C\u8EAB\u7684\u8BED\u6CD5\u3002"]}),"\n",(0,s.jsxs)(r.p,{children:["\u5F00\u542F ",(0,s.jsx)(r.code,{children:"server.enableFrameworkExt"})," \u53EF\u4EE5\u4F7F\u7528\u5176\u4ED6\u6846\u67B6\u6269\u5C55\u7684\u8BED\u6CD5\u3002"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"export default defineConfig({\n  server: {\n    enableFrameworkExt: true,\n  },\n});\n"})}),"\n",(0,s.jsxs)(r.h2,{id:"\u793A\u4F8B",children:["\u793A\u4F8B",(0,s.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#\u793A\u4F8B",children:"#"})]}),"\n",(0,s.jsx)(r.p,{children:"\u9ED8\u8BA4\u7684\u4F7F\u7528\u65B9\u5F0F\uFF1A"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-ts",meta:'title="server/index.ts"',children:"import { Middleware } from '@modern-js/runtime/server';\n\nexport const middleware: Middleware = (ctx, next) => {\n  console.log(ctx.request.url);\n  next();\n};\n"})}),"\n",(0,s.jsx)(r.p,{children:"\u5F00\u542F\u540E\uFF0CMiddleware \u7C7B\u578B\u5C06\u4ECE\u5176\u4ED6\u547D\u540D\u7A7A\u95F4\u4E0B\u5BFC\u51FA\uFF0C\u5E76\u4E14\u53EF\u4EE5\u4F7F\u7528\u6846\u67B6\u62D3\u5C55\u7684\u8BED\u6CD5\uFF1A"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-ts",meta:'title="server/index.ts"',children:"import { SomeType } from '@modern-js/runtime/{namespace}';\n\nexport const middleware: SomeType = (...args) => {\n  console.log(args[0].url);\n  next();\n};\n"})}),"\n",(0,s.jsxs)(r.div,{className:"rspress-directive note",children:[(0,s.jsx)(r.div,{className:"rspress-directive-title",children:"NOTE"}),(0,s.jsxs)(r.div,{className:"rspress-directive-content",children:[(0,s.jsx)(r.p,{children:"\u4E0A\u8FF0\u4EE3\u7801\u4E3A\u4F2A\u4EE3\u7801\uFF0C\u5177\u4F53\u4F7F\u7528\u65B9\u5F0F\u9700\u8981\u53C2\u8003\u5BF9\u5E94\u7684\u6846\u67B6\u62D3\u5C55\u3002"}),"\n"]})]})]})}function i(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:r}=Object.assign({},(0,d.useMDXComponents)(),e.components);return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}r.default=i,i.__RSPRESS_PAGE_META={},i.__RSPRESS_PAGE_META["zh%2Fconfigure%2Fapp%2Fserver%2Fenable-framework-ext.mdx"]={toc:[{text:"\u793A\u4F8B",id:"\u793A\u4F8B",depth:2}],title:"server.enableFrameworkExt",frontmatter:{sidebar_label:"enableFrameworkExt"}}}}]);