(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["92337"],{30447:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return o}});var s,t=r("15169"),i=r("43932"),a=r("9880"),d=r("23169");function c(e){var n=Object.assign({h1:"h1",a:"a",p:"p",div:"div",h2:"h2",pre:"pre",code:"code",h3:"h3",ul:"ul",li:"li"},(0,d.useMDXComponents)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.h1,{id:"middleware",children:["Middleware",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#middleware",children:"#"})]}),"\n",(0,a.jsxs)(n.p,{children:["Used to extend the built-in Web Server of Modern.js, unlike ",(0,a.jsx)(n.a,{href:"/apis/app/runtime/web-server/hook",children:"Hook"}),", Middleware can directly operate Node's origin request and response, and can be extended using the framework plugin."]}),"\n",(0,a.jsxs)(n.div,{className:"rspress-directive note",children:[(0,a.jsx)(n.div,{className:"rspress-directive-title",children:"NOTE"}),(0,a.jsxs)(n.div,{className:"rspress-directive-content",children:[(0,a.jsxs)(n.p,{children:["For more detail, see ",(0,a.jsx)(n.a,{href:"/guides/advanced-features/web-server",children:"Extend Web Server"}),"."]}),"\n"]})]}),"\n",(0,a.jsxs)(n.h2,{id:"usage",children:["Usage",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#usage",children:"#"})]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"import { Middleware } from '@modern-js/runtime/server';\n\nexport const middleware: Middleware = async (context, next) => {};\nexport const middleware: Middleware[] = [\n  async (context, next) => {},\n  async (context, next) => {},\n];\n"})}),"\n",(0,a.jsxs)(n.div,{className:"rspress-directive info",children:[(0,a.jsx)(n.div,{className:"rspress-directive-title",children:"INFO"}),(0,a.jsxs)(n.div,{className:"rspress-directive-content",children:[(0,a.jsxs)(n.p,{children:["Before using this API, please execute ",(0,a.jsx)(n.code,{children:"pnpm run new"}),' to create a new "Custom Web Server" source code directory.']}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'pnpm run new\n? Please select the operation you want: Create Element\n? Please select the type of element to create: New "Custom Web Server" source code directory\n'})}),"\n"]})]}),"\n",(0,a.jsxs)(n.h2,{id:"function-signature",children:["Function Signature",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#function-signature",children:"#"})]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"type Middleware = (\n  context: MiddlewareContext,\n  next: NextFunction,\n) => Promise<void> | void;\n\ntype MiddlewareContext = {\n  response: {\n    set: (key: string, value: string) => void;\n    status: (code: number) => void;\n    cookies: {\n      set: (key: string, value: string, options?: any) => void;\n      clear: () => void;\n    };\n    raw: (\n      body: string,\n      { status, headers }: { status: number; headers: Record<string, any> },\n    ) => void;\n    locals: Record<string, any>;\n  };\n  request: {\n    host: string;\n    pathname: string;\n    query: Record<string, any>;\n    cookie: string;\n    cookies: {\n      get: (key: string) => string;\n    };\n    headers: IncomingHttpHeaders;\n  };\n  source: {\n    req: IncomingMessage;\n    res: ServerResponse;\n  };\n};\n"})}),"\n",(0,a.jsxs)(n.h3,{id:"input",children:["Input",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#input",children:"#"})]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"context"}),": Middleware context.","\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"response"}),": provides a series of methods to process the response."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"request"}),": provides a series of methods to get request info."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"source"}),": provides Node.js native ",(0,a.jsx)(n.code,{children:"req"})," and ",(0,a.jsx)(n.code,{children:"res"})," object."]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"next"}),": call next listener (not affect the server process, only current hook)."]}),"\n"]}),"\n",(0,a.jsxs)(n.div,{className:"rspress-directive warning",children:[(0,a.jsx)(n.div,{className:"rspress-directive-title",children:"WARNING"}),(0,a.jsx)(n.div,{className:"rspress-directive-content",children:(0,a.jsxs)(n.p,{children:["The execution of the ",(0,a.jsx)(n.code,{children:"next"})," function does not affect built-in processes, only controls whether the next middleware executes. Rendering processes are interrupted only when the response is written.\n"]})})]}),"\n",(0,a.jsxs)(n.h2,{id:"example",children:["Example",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#example",children:"#"})]}),"\n",(0,a.jsxs)(n.h3,{id:"tracking",children:["Tracking",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#tracking",children:"#"})]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"export const Middleware = () => async (ctx, next) => {\n  const start = Date.now();\n  ctx.res.once('finish', () => {\n    console.log(Date.now() - start);\n  });\n};\n"})}),"\n",(0,a.jsxs)(n.h3,{id:"inject-tools--data",children:["Inject Tools & Data",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#inject-tools--data",children:"#"})]}),"\n",(0,a.jsxs)(n.p,{children:["Modern.js provides ",(0,a.jsx)(n.code,{children:"res.locals"})," to store local variables for the current request."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"export const Middleware = () => async (ctx, next) => {\n  ctx.res.locals.id = 'Modern.js';\n  ctx.res.locals.rpc = createRpcInstance();\n};\n"})}),"\n",(0,a.jsxs)(n.h3,{id:"framework-extension",children:["Framework Extension",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#framework-extension",children:"#"})]}),"\n",(0,a.jsx)(n.p,{children:"Middleware can also use runtime framework extensions like BFF."}),"\n",(0,a.jsxs)(n.p,{children:["When using framework runtime extensions, type information is exported from ",(0,a.jsx)(n.code,{children:"@modern-js/runtime/{namespace}"}),". Middleware can use framework syntax, such as framework middleware writing, the following is pseudo-code:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"import { SomeType } from '@modern-js/runtime/{namespace}';\n\nexport const middleware: SomeType = (ctx, next) => {\n  console.log(ctx.url);\n  next();\n};\n"})}),"\n",(0,a.jsxs)(n.p,{children:["By default, the framework extension capability of Web Server is turned off after installing the framework extension plugin. If you want to use the framework extension, you can turn it on through ",(0,a.jsx)(n.a,{href:"/configure/app/server/enable-framework-ext",children:"'server.enableFrameworkExt'"}),"."]}),"\n",(0,a.jsxs)(n.div,{className:"rspress-directive info",children:[(0,a.jsx)(n.div,{className:"rspress-directive-title",children:"INFO"}),(0,a.jsx)(n.div,{className:"rspress-directive-content",children:(0,a.jsx)(n.p,{children:"The type name exported by the framework extension may not 'Middleware', but is named by the framework extension plugin."})})]})]})}(s=globalThis).__RSPRESS_PAGE_META||(s.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["en%2Fapis%2Fapp%2Fruntime%2Fweb-server%2Fmiddleware.mdx"]={toc:[{text:"Usage",id:"usage",depth:2},{text:"Function Signature",id:"function-signature",depth:2},{text:"Input",id:"input",depth:3},{text:"Example",id:"example",depth:2},{text:"Tracking",id:"tracking",depth:3},{text:"Inject Tools & Data",id:"inject-tools--data",depth:3},{text:"Framework Extension",id:"framework-extension",depth:3}],title:"Middleware",frontmatter:{title:"Middleware"}};var o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,d.useMDXComponents)(),e.components).wrapper;return n?(0,a.jsx)(n,(0,i._)((0,t._)({},e),{children:(0,a.jsx)(c,(0,t._)({},e))})):c(e)}}}]);