(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["35974"],{10373:function(e,n,s){"use strict";s.r(n),s.d(n,{default:function(){return c},frontmatter:function(){return l}});var r=s("15169"),t=s("43932"),o=s("9880"),a=s("23169");function i(e){var n=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",code:"code",pre:"pre",img:"img",h3:"h3",div:"div"},(0,a.useMDXComponents)(),e.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.h1,{id:"frameworks",children:["Frameworks",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#frameworks",children:"#"})]}),"\n",(0,o.jsxs)(n.p,{children:["Modern.js's BFF supports different runtime frameworks, currently Modern.js's BFF supports two runtime frameworks: ",(0,o.jsx)(n.a,{href:"https://expressjs.com/",target:"_blank",rel:"noopener noreferrer",children:"Express.js"})," and ",(0,o.jsx)(n.a,{href:"https://koajs.com/",target:"_blank",rel:"noopener noreferrer",children:"Koa.js"}),"."]}),"\n",(0,o.jsxs)(n.h2,{id:"function-mode",children:["Function Mode",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#function-mode",children:"#"})]}),"\n",(0,o.jsxs)(n.p,{children:["Under the function writing, only the middleware writing method of various runtime frameworks is different, and other implementations are basically the same. Take Express as an example to introduce how to write a middleware by hand in the ",(0,o.jsx)(n.code,{children:"api/_ app.ts"})," and add permission verification:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"import { hook } from '@modern-js/runtime/server';\nimport { Request, Response, NextFunction } from 'express';\n\nexport default hook(({ addMiddleware }) => {\n  addMiddleware(async (req: Request, res: Response, next: NextFunction) => {\n    if (req.url !== '/api/login') {\n      const sid = req?.cookies?.sid;\n      if (!sid) {\n        res.status(400);\n        res.json({ code: -1, message: 'need login' });\n      } else {\n        next();\n      }\n    } else {\n      next();\n    }\n  });\n});\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Then add a normal BFF function ",(0,o.jsx)(n.code,{children:"/api/hello.ts"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"export default async () => {\n  return 'Hello Modern.js';\n};\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Finally, add the access code of the interface in the front-end ",(0,o.jsx)(n.code,{children:"src/App.tsx"}),", and call it directly in an integrated way:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"import { useState, useEffect } from 'react';\nimport { get as hello } from '@api/hello';\n\nexport default () => {\n  const [text, setText] = useState('');\n\n  useEffect(() => {\n    async function fetchMyApi() {\n      const { message } = await hello();\n      setText(message);\n    }\n\n    fetchMyApi();\n  }, []);\n\n  return <p>{text}</p>;\n};\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Then exec ",(0,o.jsx)(n.code,{children:"pnpm run dev"})," starts the project, and accessing ",(0,o.jsx)(n.code,{children:"http://localhost:8080/"})," will find that the request for'/api/hello 'is blocked:"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/aphqeh7uhohpquloj/modern-js/docs/network2.png",alt:"Network"})}),"\n",(0,o.jsxs)(n.p,{children:["Finally, modify the front-end code ",(0,o.jsx)(n.code,{children:"src/App.tsx"})," to call the login interface before accessing ",(0,o.jsx)(n.code,{children:"/api/hello"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"import { useState, useEffect } from 'react';\nimport { get as hello } from '@api/hello';\nimport { post as login } from '@api/login';\n\nexport default () => {\n  const [text, setText] = useState('');\n\n  useEffect(() => {\n    async function fetchAfterLogin() {\n      const { code } = await login();\n      if (code === 0) {\n        const { message } = await hello();\n        setText(message);\n      }\n    }\n    fetchAfterLogin();\n  }, []);\n\n  return <p>{text}</p>;\n};\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Refresh the page and you can see that ",(0,o.jsx)(n.code,{children:"/api/hello"})," was accessed successfully:"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/aphqeh7uhohpquloj/modern-js/docs/network3.png",alt:"Network"})}),"\n",(0,o.jsxs)(n.p,{children:["The above code simulates the way to add middleware to the ",(0,o.jsx)(n.code,{children:"/api/_app.ts"})," to achieve an easy login function. Also, other functions can be implemented in this hook file to extend BFF Server."]}),"\n",(0,o.jsxs)(n.h2,{id:"framework-mode",children:["Framework Mode",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#framework-mode",children:"#"})]}),"\n",(0,o.jsxs)(n.p,{children:["Under the framework writing, Modern.js does not collect middleware in the ",(0,o.jsx)(n.code,{children:"api/_app.ts"}),", and the running process is controlled by the plugin itself."]}),"\n",(0,o.jsxs)(n.h3,{id:"express",children:["Express",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#express",children:"#"})]}),"\n",(0,o.jsxs)(n.p,{children:["The framework writing of Express supports defining the startup logic of API Server in ",(0,o.jsx)(n.code,{children:"api/app.[tj]s"}),". performing the initialization work of the application, adding global middleware, declaring routes, and even extending the original framework."]}),"\n",(0,o.jsxs)(n.p,{children:["The route defined by the BFF function will be registered after the route defined by the ",(0,o.jsx)(n.code,{children:"app.ts"})," file, so here you can also intercept the route defined by the BFF function, preprocess or respond in advance."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",meta:'title="api/app.ts"',children:"import express from 'express';\n\nconst app = express();\n\napp.put('/user', function (req, res) {\n  res.send('Got a PUT request at /user');\n});\n\napp.use(async (req, res, next) => {\n  console.info(`access url: ${req.url}`);\n  next();\n});\n\nexport default app;\n"})}),"\n",(0,o.jsxs)(n.h3,{id:"koa",children:["Koa",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#koa",children:"#"})]}),"\n",(0,o.jsxs)(n.p,{children:["The Koa framework is written in a similar way to Express. It supports defining the startup logic of API Server in ",(0,o.jsx)(n.code,{children:"app.[tj]s"}),", performing the initialization work of the application, adding global middleware, declaring routes, extending the original framework, etc."]}),"\n",(0,o.jsxs)(n.p,{children:["The route defined by the BFF function will be registered after the route defined by the ",(0,o.jsx)(n.code,{children:"app.ts"})," file, so here you can also intercept the route defined by the BFF function, preprocess or respond in advance."]}),"\n",(0,o.jsxs)(n.div,{className:"rspress-directive caution",children:[(0,o.jsx)(n.div,{className:"rspress-directive-title",children:"CAUTION"}),(0,o.jsxs)(n.div,{className:"rspress-directive-content",children:[(0,o.jsxs)(n.p,{children:["Use the framework writing, when there is no ",(0,o.jsx)(n.code,{children:"app.ts"}),", Modern.js will add koa-body by default. When there is ",(0,o.jsx)(n.code,{children:"app.ts"}),", if the developer wants to use the BFF function with Body, he needs to ensure that the koa-body middleware has been added."]}),"\n"]})]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",meta:"title=api/app.ts",children:"import koa from 'koa';\n\nconst app = new Koa();\n\napp.put('/user', function (req, res) {\n  res.send('Got a PUT request at /user');\n});\n\napp.use(async (ctx, next) => {\n  console.info(`access url: ${ctx.url}`);\n  await next();\n});\n\nexport default app;\n"})})]})}function d(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,a.useMDXComponents)(),e.components).wrapper;return n?(0,o.jsx)(n,(0,t._)((0,r._)({},e),{children:(0,o.jsx)(i,(0,r._)({},e))})):i(e)}var c=d;d.__RSPRESS_PAGE_META={},d.__RSPRESS_PAGE_META["en%2Fguides%2Fadvanced-features%2Fbff%2Fframeworks.mdx"]={toc:[{text:"Function Mode",id:"function-mode",depth:2},{text:"Framework Mode",id:"framework-mode",depth:2},{text:"Express",id:"express",depth:3},{text:"Koa",id:"koa",depth:3}],title:"Frameworks"};var l={sidebar_position:3}}}]);