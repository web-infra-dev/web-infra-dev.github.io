(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_en_apis_app_runtime_web-server_middleware_mdx"],{88188:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return c}});var s,i=r("15169"),t=r("43932"),d=r("9880"),a=r("23169");function o(e){var n=Object.assign({h1:"h1",a:"a",p:"p",div:"div",h2:"h2",pre:"pre",code:"code",h3:"h3",ul:"ul",li:"li"},(0,a.useMDXComponents)(),e.components);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.h1,{id:"middleware",children:["Middleware",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#middleware",children:"#"})]}),"\n",(0,d.jsxs)(n.p,{children:["Used to extend the built-in Web Server of Modern.js, unlike ",(0,d.jsx)(n.a,{href:"/apis/app/runtime/web-server/hook",children:"Hook"}),", Middleware can directly operate Node's origin request and response, and can be extended using the framework plugin."]}),"\n",(0,d.jsxs)(n.div,{className:"modern-directive note",children:[(0,d.jsx)(n.div,{className:"modern-directive-title",children:"NOTE"}),(0,d.jsxs)(n.div,{className:"modern-directive-content",children:[(0,d.jsxs)(n.p,{children:["For more detail, see ",(0,d.jsx)(n.a,{href:"/guides/advanced-features/web-server",children:"Extend Web Server"}),"."]}),"\n"]})]}),"\n",(0,d.jsxs)(n.h2,{id:"usage",children:["Usage",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#usage",children:"#"})]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",children:"import { Middleware } from '@modern-js/runtime/server';\n\nexport const middleware: Middleware = async (context, next) => {};\nexport const middleware: Middleware[] = [\n  async (context, next) => {},\n  async (context, next) => {},\n];\n"})}),"\n",(0,d.jsxs)(n.div,{className:"modern-directive info",children:[(0,d.jsx)(n.div,{className:"modern-directive-title",children:"INFO"}),(0,d.jsxs)(n.div,{className:"modern-directive-content",children:[(0,d.jsxs)(n.p,{children:["Before using this API, please execute ",(0,d.jsx)(n.code,{children:"pnpm run new"}),' to create a new "Custom Web Server" source code directory.']}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:'pnpm run new\n? Please select the operation you want: Create Element\n? Please select the type of element to create: New "Custom Web Server" source code directory\n'})}),"\n"]})]}),"\n",(0,d.jsxs)(n.h2,{id:"function-signature",children:["Function Signature",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#function-signature",children:"#"})]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",children:"type Middleware = (\n  context: MiddlewareContext,\n  next: NextFunction,\n) => Promise<void> | void;\n\ntype MiddlewareContext = {\n  response: {\n    set: (key: string, value: string) => void;\n    status: (code: number) => void;\n    cookies: {\n      set: (key: string, value: string, options?: any) => void;\n      clear: () => void;\n    };\n    raw: (\n      body: string,\n      { status, headers }: { status: number; headers: Record<string, any> },\n    ) => void;\n    locals: Record<string, any>;\n  };\n  request: {\n    host: string;\n    pathname: string;\n    query: Record<string, any>;\n    cookie: string;\n    cookies: {\n      get: (key: string) => string;\n    };\n    headers: IncomingHttpHeaders;\n  };\n  source: {\n    req: IncomingMessage;\n    res: ServerResponse;\n  };\n};\n"})}),"\n",(0,d.jsxs)(n.h3,{id:"input",children:["Input",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#input",children:"#"})]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"context"}),": Middleware context.","\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"response"}),": provides a series of methods to process the response."]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"request"}),": provides a series of methods to get request info."]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"source"}),": provides Node.js native ",(0,d.jsx)(n.code,{children:"req"})," and ",(0,d.jsx)(n.code,{children:"res"})," object."]}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"next"}),": call next listener (not affect the server process, only current hook)."]}),"\n"]}),"\n",(0,d.jsxs)(n.div,{className:"modern-directive warning",children:[(0,d.jsx)(n.div,{className:"modern-directive-title",children:"WARNING"}),(0,d.jsx)(n.div,{className:"modern-directive-content",children:(0,d.jsxs)(n.p,{children:["The execution of the ",(0,d.jsx)(n.code,{children:"next"})," function does not affect built-in processes, only controls whether the next middleware executes. Rendering processes are interrupted only when the response is written.\n"]})})]}),"\n",(0,d.jsxs)(n.h2,{id:"example",children:["Example",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#example",children:"#"})]}),"\n",(0,d.jsxs)(n.h3,{id:"tracking",children:["Tracking",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#tracking",children:"#"})]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",children:"export const Middleware = () => async (ctx, next) => {\n  const start = Date.now();\n  ctx.res.once('finish', () => {\n    console.log(Date.now() - start);\n  });\n};\n"})}),"\n",(0,d.jsxs)(n.h3,{id:"inject-tools--data",children:["Inject Tools & Data",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#inject-tools--data",children:"#"})]}),"\n",(0,d.jsxs)(n.p,{children:["Modern.js provides ",(0,d.jsx)(n.code,{children:"res.locals"})," to store local variables for the current request."]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",children:"export const Middleware = () => async (ctx, next) => {\n  ctx.res.locals.id = 'Modern.js';\n  ctx.res.locals.rpc = createRpcInstance();\n};\n"})}),"\n",(0,d.jsxs)(n.h3,{id:"framework-extension",children:["Framework Extension",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#framework-extension",children:"#"})]}),"\n",(0,d.jsx)(n.p,{children:"Middleware can also use runtime framework extensions like BFF."}),"\n",(0,d.jsxs)(n.p,{children:["When using framework runtime extensions, type information is exported from ",(0,d.jsx)(n.code,{children:"@modern-js/runtime/{namespace}"}),". Middleware can use framework syntax, such as framework middleware writing, the following is pseudo-code:"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",children:"import { SomeType } from '@modern-js/runtime/{namespace}';\n\nexport const middleware: SomeType = (ctx, next) => {\n  console.log(ctx.url);\n  next();\n};\n"})}),"\n",(0,d.jsxs)(n.p,{children:["By default, the framework extension capability of Web Server is turned off after installing the framework extension plugin. If you want to use the framework extension, you can turn it on through ",(0,d.jsx)(n.a,{href:"/configure/app/server/enable-framework-ext",children:"'server.enableFrameworkExt'"}),"."]}),"\n",(0,d.jsxs)(n.div,{className:"modern-directive info",children:[(0,d.jsx)(n.div,{className:"modern-directive-title",children:"INFO"}),(0,d.jsx)(n.div,{className:"modern-directive-content",children:(0,d.jsx)(n.p,{children:"The type name exported by the framework extension may not 'Middleware', but is named by the framework extension plugin."})})]})]})}(s=globalThis).__RSPRESS_PAGE_META||(s.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["en%2Fapis%2Fapp%2Fruntime%2Fweb-server%2Fmiddleware.mdx"]={toc:[{text:"Usage",id:"usage",depth:2},{text:"Function Signature",id:"function-signature",depth:2},{text:"Input",id:"input",depth:3},{text:"Example",id:"example",depth:2},{text:"Tracking",id:"tracking",depth:3},{text:"Inject Tools & Data",id:"inject-tools--data",depth:3},{text:"Framework Extension",id:"framework-extension",depth:3}],title:"Middleware",frontmatter:{title:"Middleware"}};var c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,a.useMDXComponents)(),e.components).wrapper;return n?(0,d.jsx)(n,(0,t._)((0,i._)({},e),{children:(0,d.jsx)(o,(0,i._)({},e))})):o(e)}}}]);