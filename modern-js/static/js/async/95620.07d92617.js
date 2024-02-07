/*! For license information please see 95620.07d92617.js.LICENSE.txt */
(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["95620"],{97491:function(e,n,r){"use strict";r.r(n);var a=r("39980"),d=r("96954");function i(e){let n=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",pre:"pre",code:"code",h3:"h3",ul:"ul",li:"li"},(0,d.useMDXComponents)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.h1,{id:"hook",children:["hook",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#hook",children:"#"})]}),"\n",(0,a.jsx)(n.p,{children:"Used to add framework middleware under BFF function mode, the middleware will execute before BFF function."}),"\n",(0,a.jsxs)(n.h2,{id:"usage",children:["Usage",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#usage",children:"#"})]}),"\n",(0,a.jsx)(n.p,{children:"according to the framework extend plugin, export from the corresponding namespace:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"import { hook } from '@modern-js/runtime/{namespace}';\n"})}),"\n",(0,a.jsxs)(n.h2,{id:"function-signature",children:["Function Signature",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#function-signature",children:"#"})]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"type HookOptions = {\n  addMiddleware: string | function;\n};\n\nfunction hook(options: HookOptions): void;\n"})}),"\n",(0,a.jsxs)(n.h3,{id:"input",children:["Input",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#input",children:"#"})]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"options"}),": a range of hooks provided by Modern.js.","\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"addMiddleware"}),": add middlewares for BFF."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.h2,{id:"example",children:["Example",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#example",children:"#"})]}),"\n",(0,a.jsx)(n.p,{children:"middleware for different frameworks should be different(an example is when using the koa framework):"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",meta:"title=api/_app.ts",children:"import { hook } from '@modern-js/runtime/koa';\n\nexport default hook(({ addMiddleware }) => {\n  addMiddleware(async (ctx, next) => {\n    ctx.req.query.id = 'koa';\n    await next();\n  });\n});\n"})})]})}function s(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,d.useMDXComponents)(),e.components);return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(i,{...e})}):i(e)}n.default=s,s.__RSPRESS_PAGE_META={},s.__RSPRESS_PAGE_META["en%2Fapis%2Fapp%2Fruntime%2Fbff%2Fhook.mdx"]={toc:[{text:"Usage",id:"usage",depth:2},{text:"Function Signature",id:"function-signature",depth:2},{text:"Input",id:"input",depth:3},{text:"Example",id:"example",depth:2}],title:"hook",frontmatter:{title:"hook"}}}}]);