(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["67549"],{35405:function(e,r,n){"use strict";n.r(r),n.d(r,{default:function(){return o},frontmatter:function(){return c}});var s=n("15169"),a=n("43932"),t=n("9880"),d=n("23169");function i(e){var r=Object.assign({h1:"h1",a:"a",ul:"ul",li:"li",strong:"strong",code:"code",p:"p",pre:"pre",h2:"h2",div:"div"},(0,d.useMDXComponents)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.h1,{id:"serverenableframeworkext",children:["server.enableFrameworkExt",(0,t.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#serverenableframeworkext",children:"#"})]}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.strong,{children:"Type:"})," ",(0,t.jsx)(r.code,{children:"boolean"})]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.strong,{children:"Default:"})," ",(0,t.jsx)(r.code,{children:"false"})]}),"\n"]}),"\n",(0,t.jsxs)(r.p,{children:["By default, when the ",(0,t.jsx)(r.a,{href:"/guides/advanced-features/web-server",children:"custom Web Server feature"})," is enabled, the Middleware will use the Modern.js's syntax."]}),"\n",(0,t.jsxs)(r.p,{children:["Enabling ",(0,t.jsx)(r.code,{children:"server.enableFrameworkExt"})," allows the use of syntax extensions from other frameworks."]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"export default defineConfig({\n  server: {\n    enableFrameworkExt: true,\n  },\n});\n"})}),"\n",(0,t.jsxs)(r.h2,{id:"example",children:["Example",(0,t.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#example",children:"#"})]}),"\n",(0,t.jsx)(r.p,{children:"Default usage:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-ts",meta:'title="server/index.ts"',children:"import { Middleware } from '@modern-js/runtime/server';\n\nexport const middleware: Middleware = (ctx, next) => {\n  console.log(ctx.request.url);\n  next();\n};\n"})}),"\n",(0,t.jsx)(r.p,{children:"After enabling it, the Middleware type will be exported from other namespaces, and syntax extensions from frameworks can be used:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-ts",meta:'title="server/index.ts"',children:"import { SomeType } from '@modern-js/runtime/{namespace}';\n\nexport const middleware: SomeType = (...args) => {\n  console.log(args[0].url);\n  next();\n};\n"})}),"\n",(0,t.jsxs)(r.div,{className:"rspress-directive note",children:[(0,t.jsx)(r.div,{className:"rspress-directive-title",children:"NOTE"}),(0,t.jsxs)(r.div,{className:"rspress-directive-content",children:[(0,t.jsx)(r.p,{children:"The above code is pseudocode, and the specific usage needs to refer to the corresponding framework extension."}),"\n"]})]})]})}function l(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=Object.assign({},(0,d.useMDXComponents)(),e.components).wrapper;return r?(0,t.jsx)(r,(0,a._)((0,s._)({},e),{children:(0,t.jsx)(i,(0,s._)({},e))})):i(e)}var o=l;l.__RSPRESS_PAGE_META={},l.__RSPRESS_PAGE_META["en%2Fconfigure%2Fapp%2Fserver%2Fenable-framework-ext.mdx"]={toc:[{text:"Example",id:"example",depth:2}],title:"server.enableFrameworkExt"};var c={sidebar_label:"enableFrameworkExt"}}}]);