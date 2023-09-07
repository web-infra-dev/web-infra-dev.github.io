(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_apis_app_runtime_web-server_middleware_mdx"],{8648:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return l}});var s,d=r("15169"),i=r("43932"),c=r("9880"),a=r("23169");function t(e){var n=Object.assign({h1:"h1",a:"a",p:"p",div:"div",h2:"h2",pre:"pre",code:"code",h3:"h3",ul:"ul",li:"li"},(0,a.useMDXComponents)(),e.components);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(n.h1,{id:"middleware",children:["Middleware",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#middleware",children:"#"})]}),"\n",(0,c.jsxs)(n.p,{children:["\u7528\u4E8E\u62D3\u5C55 Modern.js \u5185\u7F6E\u7684 Web Server\uFF0C\u4E0E ",(0,c.jsx)(n.a,{href:"/apis/app/runtime/web-server/hook",children:"Hook"})," \u4E0D\u540C\u7684\u662F\uFF0CMiddleware \u53EF\u4EE5\u76F4\u63A5\u64CD\u4F5C Node \u539F\u751F\u7684\u8BF7\u6C42\u3001\u54CD\u5E94\u5BF9\u8C61\uFF0C\u5E76\u4E14\u53EF\u4EE5\u4F7F\u7528\u6846\u67B6\u62D3\u5C55\u3002"]}),"\n",(0,c.jsxs)(n.div,{className:"modern-directive note",children:[(0,c.jsx)(n.div,{className:"modern-directive-title",children:"NOTE"}),(0,c.jsx)(n.div,{className:"modern-directive-content",children:(0,c.jsxs)(n.p,{children:["\u66F4\u591A\u5185\u5BB9\u53EF\u4EE5\u67E5\u770B",(0,c.jsx)(n.a,{href:"/guides/advanced-features/web-server",children:"\u81EA\u5B9A\u4E49 Web Server"}),"\u3002\n"]})})]}),"\n",(0,c.jsxs)(n.h2,{id:"\u4F7F\u7528\u59FF\u52BF",children:["\u4F7F\u7528\u59FF\u52BF",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u4F7F\u7528\u59FF\u52BF",children:"#"})]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-ts",children:"import { Middleware } from '@modern-js/runtime/server';\n\nexport const middleware: Middleware = async (context, next) => {};\nexport const middleware: Middleware[] = [\n  async (context, next) => {},\n  async (context, next) => {},\n];\n"})}),"\n",(0,c.jsxs)(n.div,{className:"modern-directive info",children:[(0,c.jsx)(n.div,{className:"modern-directive-title",children:"\u81EA\u5B9A\u4E49 Web Server"}),(0,c.jsxs)(n.div,{className:"modern-directive-content",children:[(0,c.jsxs)(n.p,{children:["\u4F7F\u7528\u8BE5 API \u524D\uFF0C\u8BF7\u5148\u6267\u884C ",(0,c.jsx)(n.code,{children:"pnpm run new"})," \u65B0\u5EFA\u300C\u81EA\u5B9A\u4E49 Web Server\u300D\u6E90\u7801\u76EE\u5F55\u3002"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"pnpm run new\n? \u8BF7\u9009\u62E9\u4F60\u60F3\u8981\u7684\u64CD\u4F5C \u521B\u5EFA\u5DE5\u7A0B\u5143\u7D20\n? \u65B0\u5EFA\u300C\u81EA\u5B9A\u4E49 Web Server\u300D\u6E90\u7801\u76EE\u5F55\n"})}),"\n"]})]}),"\n",(0,c.jsxs)(n.h2,{id:"\u51FD\u6570\u7B7E\u540D",children:["\u51FD\u6570\u7B7E\u540D",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u51FD\u6570\u7B7E\u540D",children:"#"})]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-ts",children:"type Middleware = (\n  context: MiddlewareContext,\n  next: NextFunction,\n) => Promise<void> | void;\n\ntype MiddlewareContext = {\n  response: {\n    set: (key: string, value: string) => void;\n    status: (code: number) => void;\n    cookies: {\n      set: (key: string, value: string, options?: any) => void;\n      clear: () => void;\n    };\n    raw: (\n      body: string,\n      { status, headers }: { status: number; headers: Record<string, any> },\n    ) => void;\n    locals: Record<string, any>;\n  };\n  request: {\n    url: string;\n    host: string;\n    pathname: string;\n    query: Record<string, any>;\n    cookie: string;\n    cookies: {\n      get: (key: string) => string;\n    };\n    headers: IncomingHttpHeaders;\n  };\n  source: {\n    req: IncomingMessage;\n    res: ServerResponse;\n  };\n};\n"})}),"\n",(0,c.jsxs)(n.h3,{id:"\u53C2\u6570",children:["\u53C2\u6570",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u53C2\u6570",children:"#"})]}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"context"}),"\uFF1A\u63D0\u4F9B\u5F53\u524D Hook \u4E0A\u4E0B\u6587\u3002","\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"response"}),"\uFF1A\u63D0\u4F9B\u4E00\u7CFB\u5217\u5904\u7406\u54CD\u5E94\u7684\u64CD\u4F5C"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"request"}),"\uFF1A\u63D0\u4F9B\u4E00\u7CFB\u5217\u83B7\u53D6\u8BF7\u6C42\u4FE1\u606F\u7684\u64CD\u4F5C"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"source"}),"\uFF1A\u63D0\u4F9B Node.js \u539F\u751F\u7684 ",(0,c.jsx)(n.code,{children:"req"})," \u4E0E ",(0,c.jsx)(n.code,{children:"res"})," \u5BF9\u8C61\u3002"]}),"\n"]}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"next"}),"\uFF1A\u6267\u884C\u5F53\u524D Hook \u7684\u4E0B\u4E00\u4E2A\u76D1\u542C\u51FD\u6570\uFF08\u4E0D\u5F71\u54CD\u6574\u4F53\u670D\u52A1\u7AEF\u6D41\u7A0B\uFF09\u3002"]}),"\n"]}),"\n",(0,c.jsxs)(n.div,{className:"modern-directive warning",children:[(0,c.jsx)(n.div,{className:"modern-directive-title",children:"WARNING"}),(0,c.jsx)(n.div,{className:"modern-directive-content",children:(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"next"})," \u51FD\u6570\u7684\u6267\u884C\u4E0D\u5F71\u54CD\u540E\u7EED\u5185\u7F6E\u6D41\u7A0B\uFF0C\u53EA\u63A7\u5236\u4E0B\u4E00\u4E2A\u4E2D\u95F4\u4EF6\u662F\u5426\u6267\u884C\u3002\u53EA\u6709\u5F53\u54CD\u5E94\u88AB\u5199\u5165\u65F6\uFF0C\u540E\u7EED\u6E32\u67D3\u6D41\u7A0B\u624D\u4F1A\u4E2D\u65AD\u3002\n"]})})]}),"\n",(0,c.jsxs)(n.h2,{id:"\u793A\u4F8B",children:["\u793A\u4F8B",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u793A\u4F8B",children:"#"})]}),"\n",(0,c.jsxs)(n.h3,{id:"\u670D\u52A1\u7AEF\u8017\u65F6\u6253\u70B9",children:["\u670D\u52A1\u7AEF\u8017\u65F6\u6253\u70B9",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u670D\u52A1\u7AEF\u8017\u65F6\u6253\u70B9",children:"#"})]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-ts",children:"export const Middleware = () => async (ctx, next) => {\n  const start = Date.now();\n  ctx.res.once('finish', () => {\n    console.log(Date.now() - start);\n  });\n};\n"})}),"\n",(0,c.jsxs)(n.h3,{id:"\u6CE8\u5165\u670D\u52A1\u7AEF\u5DE5\u5177--\u6570\u636E",children:["\u6CE8\u5165\u670D\u52A1\u7AEF\u5DE5\u5177 & \u6570\u636E",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u6CE8\u5165\u670D\u52A1\u7AEF\u5DE5\u5177--\u6570\u636E",children:"#"})]}),"\n",(0,c.jsxs)(n.p,{children:["Modern.js \u63D0\u4F9B\u4E86 ",(0,c.jsx)(n.code,{children:"res.locals"})," \u5C5E\u6027\u7528\u6765\u5B58\u653E\u5F53\u524D\u8BF7\u6C42\u7684\u5C40\u90E8\u53D8\u91CF\u3002"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-ts",children:"export const Middleware = () => async (ctx, next) => {\n  ctx.res.locals.id = 'Modern.js';\n  ctx.res.locals.rpc = createRpcInstance();\n};\n"})}),"\n",(0,c.jsxs)(n.h3,{id:"\u6846\u67B6\u62D3\u5C55",children:["\u6846\u67B6\u62D3\u5C55",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u6846\u67B6\u62D3\u5C55",children:"#"})]}),"\n",(0,c.jsxs)(n.p,{children:["Middleware \u8FD8\u53EF\u4EE5\u548C BFF \u4E00\u6837\uFF0C\u4F7F\u7528\u8FD0\u884C\u65F6\u6846\u67B6\u62D3\u5C55\u3002Modern.js \u7EA6\u5B9A\uFF0C\u5F53\u4F7F\u7528\u6846\u67B6\u8FD0\u884C\u65F6\u62D3\u5C55\u65F6\uFF0C\u7C7B\u578B\u4FE1\u606F\u4ECE ",(0,c.jsx)(n.code,{children:"@modern-js/runtime/{namespace}"})," \u4E0B\u5BFC\u51FA\uFF0CMiddleware \u53EF\u4EE5\u4F7F\u7528\u6846\u67B6\u8BED\u6CD5\uFF0C\u4F8B\u5982\u6846\u67B6\u4E2D\u95F4\u4EF6\u5199\u6CD5\uFF0C\u4EE5\u4E0B\u662F\u4F2A\u4EE3\u7801\uFF1A"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-ts",children:"import { SomeType } from '@modern-js/runtime/{namespace}';\n\nexport const middleware: SomeType = (ctx, next) => {\n  console.log(ctx.url);\n  next();\n};\n"})}),"\n",(0,c.jsxs)(n.p,{children:["\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u5728\u5B89\u88C5\u6846\u67B6\u62D3\u5C55\u63D2\u4EF6\u540E\uFF0CWeb Server \u7684\u6846\u67B6\u62D3\u5C55\u80FD\u529B\u662F\u5173\u95ED\u7684\u3002\u5982\u679C\u5E0C\u671B\u4F7F\u7528\u6846\u67B6\u62D3\u5C55\uFF0C\u53EF\u4EE5\u901A\u8FC7 ",(0,c.jsx)(n.a,{href:"/configure/app/server/enable-framework-ext",children:(0,c.jsx)(n.code,{children:"server.enableFrameworkExt"})})," \u5F00\u542F\u3002"]}),"\n",(0,c.jsxs)(n.div,{className:"modern-directive info",children:[(0,c.jsx)(n.div,{className:"modern-directive-title",children:"INFO"}),(0,c.jsx)(n.div,{className:"modern-directive-content",children:(0,c.jsx)(n.p,{children:"\u6846\u67B6\u62D3\u5C55\u5BFC\u51FA\u7684\u7C7B\u578B\u540D\u4E0D\u4E00\u5B9A\u4E3A Middleware\uFF0C\u547D\u540D\u7531\u6846\u67B6\u62D3\u5C55\u63D2\u4EF6\u3002"})})]})]})}(s=globalThis).__RSPRESS_PAGE_META||(s.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["zh%2Fapis%2Fapp%2Fruntime%2Fweb-server%2Fmiddleware.mdx"]={toc:[{text:"\u4F7F\u7528\u59FF\u52BF",id:"\u4F7F\u7528\u59FF\u52BF",depth:2},{text:"\u51FD\u6570\u7B7E\u540D",id:"\u51FD\u6570\u7B7E\u540D",depth:2},{text:"\u53C2\u6570",id:"\u53C2\u6570",depth:3},{text:"\u793A\u4F8B",id:"\u793A\u4F8B",depth:2},{text:"\u670D\u52A1\u7AEF\u8017\u65F6\u6253\u70B9",id:"\u670D\u52A1\u7AEF\u8017\u65F6\u6253\u70B9",depth:3},{text:"\u6CE8\u5165\u670D\u52A1\u7AEF\u5DE5\u5177 & \u6570\u636E",id:"\u6CE8\u5165\u670D\u52A1\u7AEF\u5DE5\u5177--\u6570\u636E",depth:3},{text:"\u6846\u67B6\u62D3\u5C55",id:"\u6846\u67B6\u62D3\u5C55",depth:3}],title:"Middleware",frontmatter:{title:"Middleware"}};var l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,a.useMDXComponents)(),e.components).wrapper;return n?(0,c.jsx)(n,(0,i._)((0,d._)({},e),{children:(0,c.jsx)(t,(0,d._)({},e))})):t(e)}}}]);