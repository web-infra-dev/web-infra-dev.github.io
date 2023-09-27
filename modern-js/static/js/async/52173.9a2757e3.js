(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["52173"],{132:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return h}});var a,d=r("10310"),i=r("81904"),s=r("98638"),o=r("21968");function t(e){let n=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",pre:"pre",code:"code",h3:"h3",ul:"ul",li:"li"},(0,o.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h1,{id:"hook",children:["hook",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#hook",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"Used to add framework middleware under BFF function mode, the middleware will execute before BFF function."}),"\n",(0,s.jsxs)(n.h2,{id:"usage",children:["Usage",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#usage",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"according to the framework extend plugin, export from the corresponding namespace:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"import { hook } from '@modern-js/runtime/{namespace}';\n"})}),"\n",(0,s.jsxs)(n.h2,{id:"function-signature",children:["Function Signature",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#function-signature",children:"#"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"type HookOptions = {\n  addMiddleware: string | function;\n};\n\nfunction hook(options: HookOptions): void;\n"})}),"\n",(0,s.jsxs)(n.h3,{id:"input",children:["Input",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#input",children:"#"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"options"}),": a range of hooks provided by Modern.js.","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"addMiddleware"}),": add middlewares for BFF."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.h2,{id:"example",children:["Example",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#example",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"middleware for different frameworks should be different(an example is when using the koa framework):"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",meta:"title=api/_app.ts",children:"import { hook } from '@modern-js/runtime/koa';\n\nexport default hook(({ addMiddleware }) => {\n  addMiddleware(async (ctx, next) => {\n    ctx.req.query.id = 'koa';\n    await next();\n  });\n});\n"})})]})}(a=globalThis).__RSPRESS_PAGE_META||(a.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["en%2Fapis%2Fapp%2Fruntime%2Fbff%2Fhook.mdx"]={toc:[{text:"Usage",id:"usage",depth:2},{text:"Function Signature",id:"function-signature",depth:2},{text:"Input",id:"input",depth:3},{text:"Example",id:"example",depth:2}],title:"hook",frontmatter:{title:"hook"}};var h=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,o.useMDXComponents)(),e.components);return n?(0,s.jsx)(n,(0,i._)((0,d._)({},e),{children:(0,s.jsx)(t,(0,d._)({},e))})):t(e)}}}]);