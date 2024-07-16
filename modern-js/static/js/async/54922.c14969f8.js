"use strict";(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["54922"],{67316:function(e,n,s){s.r(n),s.d(n,{default:function(){return d}});var r=s(39980),t=s(9580);function a(e){let n=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",code:"code",pre:"pre",img:"img",h3:"h3",div:"div"},(0,t.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"\u8FD0\u884C\u65F6\u6846\u67B6",children:["\u8FD0\u884C\u65F6\u6846\u67B6",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u8FD0\u884C\u65F6\u6846\u67B6",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["Modern.js \u7684 BFF \u652F\u6301\u4E0D\u540C\u7684\u8FD0\u884C\u65F6\u6846\u67B6\uFF0C\u5F53\u524D Modern.js \u7684 BFF \u652F\u6301\u4E24\u79CD\u8FD0\u884C\u65F6\u6846\u67B6 ",(0,r.jsx)(n.a,{href:"https://expressjs.com/",target:"_blank",rel:"noopener noreferrer",children:"Express.js"})," \u548C ",(0,r.jsx)(n.a,{href:"https://koajs.com/",target:"_blank",rel:"noopener noreferrer",children:"Koa.js"}),"\u3002"]}),"\n",(0,r.jsxs)(n.h2,{id:"\u51FD\u6570\u5199\u6CD5",children:["\u51FD\u6570\u5199\u6CD5",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u51FD\u6570\u5199\u6CD5",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["\u5728\u51FD\u6570\u5199\u6CD5\u4E0B\uFF0C\u5404\u7C7B\u8FD0\u884C\u65F6\u6846\u67B6\u4EC5\u4E2D\u95F4\u4EF6\u5199\u6CD5\u5B58\u5728\u5DEE\u5F02\uFF0C\u5176\u4ED6\u5B9E\u73B0\u57FA\u672C\u76F8\u540C\u3002\u8FD9\u91CC\u4EE5 Express \u4E3A\u4F8B\uFF0C\u4ECB\u7ECD\u5982\u4F55\u5728 ",(0,r.jsx)(n.code,{children:"api/_app.ts"})," \u4E2D\uFF0C\u624B\u5199\u4E00\u4E2A\u4E2D\u95F4\u4EF6\uFF0C\u6DFB\u52A0\u6743\u9650\u6821\u9A8C\uFF1A"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"import { hook } from '@modern-js/runtime/server';\nimport { Request, Response, NextFunction } from 'express';\n\nexport default hook(({ addMiddleware }) => {\n  addMiddleware(async (req: Request, res: Response, next: NextFunction) => {\n    if (req.url !== '/api/login') {\n      const sid = req?.cookies?.sid;\n      if (!sid) {\n        res.status(400);\n        res.json({ code: -1, message: 'need login' });\n      } else {\n        next();\n      }\n    } else {\n      next();\n    }\n  });\n});\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u7136\u540E\u6DFB\u52A0\u4E00\u4E2A\u666E\u901A\u7684 BFF \u51FD\u6570 ",(0,r.jsx)(n.code,{children:"/api/hello.ts"}),"\uFF1A"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"export default async () => {\n  return 'Hello Modern.js';\n};\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u6700\u540E\u5728\u524D\u7AEF ",(0,r.jsx)(n.code,{children:"src/App.tsx"})," \u6DFB\u52A0\u63A5\u53E3\u7684\u8BBF\u95EE\u4EE3\u7801\uFF0C\u76F4\u63A5\u4F7F\u7528\u4E00\u4F53\u5316\u7684\u65B9\u5F0F\u8C03\u7528\uFF1A"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"import { useState, useEffect } from 'react';\nimport { get as hello } from '@api/hello';\n\nexport default () => {\n  const [text, setText] = useState('');\n\n  useEffect(() => {\n    async function fetchMyApi() {\n      const { message } = await hello();\n      setText(message);\n    }\n\n    fetchMyApi();\n  }, []);\n\n  return <p>{text}</p>;\n};\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u7136\u540E ",(0,r.jsx)(n.code,{children:"pnpm run dev"})," \u542F\u52A8\u9879\u76EE\uFF0C\u8BBF\u95EE ",(0,r.jsx)(n.code,{children:"http://localhost:8080/"})," \u4F1A\u53D1\u73B0 ",(0,r.jsx)(n.code,{children:"/api/hello"})," \u7684\u8BF7\u6C42\u88AB\u62E6\u622A\u4E86\uFF1A"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/aphqeh7uhohpquloj/modern-js/docs/network2.png",alt:"Network"})}),"\n",(0,r.jsxs)(n.p,{children:["\u6700\u540E\u518D\u4FEE\u6539\u524D\u7AEF\u4EE3\u7801 ",(0,r.jsx)(n.code,{children:"src/App.tsx"}),"\uFF0C\u5728\u8BBF\u95EE ",(0,r.jsx)(n.code,{children:"/api/hello"})," \u524D\u5148\u8C03\u7528\u767B\u5F55\u63A5\u53E3\uFF1A"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"import { useState, useEffect } from 'react';\nimport { get as hello } from '@api/hello';\nimport { post as login } from '@api/login';\n\nexport default () => {\n  const [text, setText] = useState('');\n\n  useEffect(() => {\n    async function fetchAfterLogin() {\n      const { code } = await login();\n      if (code === 0) {\n        const { message } = await hello();\n        setText(message);\n      }\n    }\n    fetchAfterLogin();\n  }, []);\n\n  return <p>{text}</p>;\n};\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u5237\u65B0\u9875\u9762\uFF0C\u53EF\u4EE5\u770B\u5230 ",(0,r.jsx)(n.code,{children:"/api/hello"})," \u8BBF\u95EE\u6210\u529F\uFF1A"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/aphqeh7uhohpquloj/modern-js/docs/network3.png",alt:"Network"})}),"\n",(0,r.jsxs)(n.p,{children:["\u4EE5\u4E0A\u4EE3\u7801\u6A21\u62DF\u4E86\u5728 ",(0,r.jsx)(n.code,{children:"/api/_app.ts"})," \u4E2D\u6DFB\u52A0\u4E2D\u95F4\u4EF6\u7684\u65B9\u5F0F\uFF0C\u5B9E\u73B0\u4E86\u7B80\u6613\u7684\u767B\u5F55\u529F\u80FD\u3002\u540C\u6837\uFF0C\u53EF\u4EE5\u5728\u8FD9\u4E2A\u94A9\u5B50\u6587\u4EF6\u4E2D\u5B9E\u73B0\u5176\u4ED6\u529F\u80FD\u6765\u6269\u5C55 BFF Server\u3002"]}),"\n",(0,r.jsxs)(n.h2,{id:"\u6846\u67B6\u5199\u6CD5",children:["\u6846\u67B6\u5199\u6CD5",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u6846\u67B6\u5199\u6CD5",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["\u6846\u67B6\u5199\u6CD5\u4E0B\uFF0CModern.js \u4E0D\u4F1A\u6536\u96C6 ",(0,r.jsx)(n.code,{children:"api/_app.ts"})," \u4E2D\u7684\u4E2D\u95F4\u4EF6\uFF0C\u8FD0\u884C\u6D41\u7A0B\u7531\u63D2\u4EF6\u81EA\u884C\u63A7\u5236\u3002"]}),"\n",(0,r.jsxs)(n.h3,{id:"express",children:["Express",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#express",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["Express \u7684\u6846\u67B6\u5199\u6CD5\u652F\u6301\u53EF\u5728 ",(0,r.jsx)(n.code,{children:"api/app.[tj]s"})," \u5B9A\u4E49 API Server \u7684\u542F\u52A8\u903B\u8F91\uFF0C\u6267\u884C\u5E94\u7528\u7684\u521D\u59CB\u5316\u5DE5\u4F5C\uFF0C\u6DFB\u52A0\u5168\u5C40\u4E2D\u95F4\u4EF6\uFF0C\u58F0\u660E\u8DEF\u7531\uFF0C\u751A\u81F3\u6269\u5C55\u539F\u6709\u6846\u67B6\u7B49\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["BFF \u51FD\u6570\u5B9A\u4E49\u7684\u8DEF\u7531\u4F1A\u5728 ",(0,r.jsx)(n.code,{children:"app.ts"})," \u6587\u4EF6\u5B9A\u4E49\u7684\u8DEF\u7531\u4E4B\u540E\u6CE8\u518C\uFF0C\u6240\u4EE5\u5728\u8FD9\u91CC\u4F60\u4E5F\u53EF\u4EE5\u62E6\u622A BFF \u51FD\u6570\u5B9A\u4E49\u7684\u8DEF\u7531\uFF0C\u8FDB\u884C\u9884\u5904\u7406\u6216\u662F\u63D0\u524D\u54CD\u5E94\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",meta:'title="api/app.ts"',children:"import express from 'express';\n\nconst app = express();\n\napp.put('/user', function (req, res) {\n  res.send('Got a PUT request at /user');\n});\n\napp.use(async (req, res, next) => {\n  console.info(`access url: ${req.url}`);\n  next();\n});\n\nexport default app;\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"koa",children:["Koa",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#koa",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["Koa \u6846\u67B6\u5199\u6CD5\u4E0E Express \u7C7B\u4F3C\uFF0C\u652F\u6301\u5728 ",(0,r.jsx)(n.code,{children:"app.[tj]s"})," \u5B9A\u4E49 API Server \u7684\u542F\u52A8\u903B\u8F91\uFF0C\u6267\u884C\u5E94\u7528\u7684\u521D\u59CB\u5316\u5DE5\u4F5C\uFF0C\u6DFB\u52A0\u5168\u5C40\u4E2D\u95F4\u4EF6\uFF0C\u58F0\u660E\u8DEF\u7531\uFF0C\u6269\u5C55\u539F\u6709\u6846\u67B6\u7B49\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["BFF \u51FD\u6570\u5B9A\u4E49\u7684\u8DEF\u7531\u4F1A\u5728 ",(0,r.jsx)(n.code,{children:"app.ts"})," \u6587\u4EF6\u5B9A\u4E49\u7684\u8DEF\u7531\u4E4B\u540E\u6CE8\u518C\uFF0C\u6240\u4EE5\u5728\u8FD9\u91CC\u4F60\u4E5F\u53EF\u4EE5\u62E6\u622A BFF \u51FD\u6570\u5B9A\u4E49\u7684\u8DEF\u7531\uFF0C\u8FDB\u884C\u9884\u5904\u7406\u6216\u662F\u63D0\u524D\u54CD\u5E94\u3002"]}),"\n",(0,r.jsxs)(n.div,{className:"rspress-directive caution",children:[(0,r.jsx)(n.div,{className:"rspress-directive-title",children:"\u6CE8\u610F"}),(0,r.jsxs)(n.div,{className:"rspress-directive-content",children:[(0,r.jsxs)(n.p,{children:["\u5728\u6846\u67B6\u5199\u6CD5\u4E0B\uFF0C\u5F53\u6CA1\u6709 ",(0,r.jsx)(n.code,{children:"app.ts"})," \u7684\u65F6\u5019\uFF0CModern.js \u9ED8\u8BA4\u4F1A\u6DFB\u52A0 ",(0,r.jsx)(n.code,{children:"koa-body"}),"\uFF1B\u5F53\u6709 ",(0,r.jsx)(n.code,{children:"app.ts"})," \u65F6\uFF0C\u5982\u679C\u5F00\u53D1\u8005\u5E0C\u671B\u4F7F\u7528\u5E26\u6709 Body \u7684 BFF \u51FD\u6570\uFF0C\u9700\u8981\u786E\u4FDD ",(0,r.jsx)(n.code,{children:"koa-body"})," \u4E2D\u95F4\u4EF6\u5DF2\u7ECF\u6DFB\u52A0\u3002"]}),"\n"]})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",meta:"title=api/app.ts",children:"import koa from 'koa';\n\nconst app = new Koa();\n\napp.put('/user', function (req, res) {\n  res.send('Got a PUT request at /user');\n});\n\napp.use(async (ctx, next) => {\n  console.info(`access url: ${ctx.url}`);\n  await next();\n});\n\nexport default app;\n"})})]})}function c(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,t.ah)(),e.components);return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}let d=c;c.__RSPRESS_PAGE_META={},c.__RSPRESS_PAGE_META["zh%2Fguides%2Fadvanced-features%2Fbff%2Fframeworks.mdx"]={toc:[{text:"\u51FD\u6570\u5199\u6CD5",id:"\u51FD\u6570\u5199\u6CD5",depth:2},{text:"\u6846\u67B6\u5199\u6CD5",id:"\u6846\u67B6\u5199\u6CD5",depth:2},{text:"Express",id:"express",depth:3},{text:"Koa",id:"koa",depth:3}],title:"\u8FD0\u884C\u65F6\u6846\u67B6",frontmatter:{sidebar_position:3,title:"\u8FD0\u884C\u65F6\u6846\u67B6"}}}}]);