(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["73602"],{83853:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return a},frontmatter:function(){return h}});var t=r("15169"),s=r("43932"),i=r("9880"),d=r("23169");function c(e){var n=Object.assign({h1:"h1",a:"a",p:"p",div:"div",h2:"h2",pre:"pre",code:"code",h3:"h3",ul:"ul",li:"li"},(0,d.useMDXComponents)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.h1,{id:"hook",children:["Hook",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#hook",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"\u7528\u4E8E\u62D3\u5C55 Modern.js \u5185\u7F6E\u7684 Web Server\uFF0C\u6240\u6709\u7684\u9875\u9762\u8BF7\u6C42\u90FD\u4F1A\u7ECF\u8FC7 Hook\u3002"}),"\n",(0,i.jsxs)(n.div,{className:"rspress-directive note",children:[(0,i.jsx)(n.div,{className:"rspress-directive-title",children:"NOTE"}),(0,i.jsx)(n.div,{className:"rspress-directive-content",children:(0,i.jsxs)(n.p,{children:["\u66F4\u591A\u5185\u5BB9\u53EF\u4EE5\u67E5\u770B",(0,i.jsx)(n.a,{href:"/guides/advanced-features/web-server",children:"\u81EA\u5B9A\u4E49 Web Server"}),"\u3002\n"]})})]}),"\n",(0,i.jsxs)(n.h2,{id:"\u4F7F\u7528\u59FF\u52BF",children:["\u4F7F\u7528\u59FF\u52BF",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u4F7F\u7528\u59FF\u52BF",children:"#"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"import { AfterMatchHook, AfterRenderHook } from '@modern-js/runtime/server';\n\nexport const afterMatch: AfterMatchHook = (context, next) => {};\nexport const afterRender: AfterRenderHook = (context, next) => {};\n"})}),"\n",(0,i.jsxs)(n.div,{className:"rspress-directive info",children:[(0,i.jsx)(n.div,{className:"rspress-directive-title",children:"\u81EA\u5B9A\u4E49 Web Server"}),(0,i.jsxs)(n.div,{className:"rspress-directive-content",children:[(0,i.jsxs)(n.p,{children:["\u4F7F\u7528\u8BE5 API \u524D\uFF0C\u8BF7\u5148\u6267\u884C ",(0,i.jsx)(n.code,{children:"pnpm run new"})," \u65B0\u5EFA\u300C\u81EA\u5B9A\u4E49 Web Serve\u300D\u6E90\u7801\u76EE\u5F55\u3002"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"pnpm run new\n? \u8BF7\u9009\u62E9\u4F60\u60F3\u8981\u7684\u64CD\u4F5C \u521B\u5EFA\u5DE5\u7A0B\u5143\u7D20\n? \u65B0\u5EFA\u300C\u81EA\u5B9A\u4E49 Web Server\u300D\u6E90\u7801\u76EE\u5F55\n"})}),"\n"]})]}),"\n",(0,i.jsxs)(n.h2,{id:"\u51FD\u6570\u7B7E\u540D",children:["\u51FD\u6570\u7B7E\u540D",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u51FD\u6570\u7B7E\u540D",children:"#"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"type HookContext = {\n  response: {\n    set: (key: string, value: string) => void;\n    status: (code: number) => void;\n    cookies: {\n      set: (key: string, value: string, options?: any) => void;\n      clear: () => void;\n    };\n    raw: (\n      body: string,\n      { status, headers }: { status: number; headers: Record<string, any> },\n    ) => void;\n  };\n  request: {\n    url: string;\n    host: string;\n    pathname: string;\n    query: Record<string, any>;\n    cookie: string;\n    cookies: {\n      get: (key: string) => string;\n    };\n    headers: IncomingHttpHeaders;\n  };\n};\n\nfunction Hook(context: HookContext, next: NextFunction): Promsie<void> | void;\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u53E6\u5916\uFF0C\u4E0D\u540C Hook \u989D\u5916\u63D0\u4F9B\u4E86\u4E0D\u540C\u7684\u4E0A\u4E0B\u6587\u3002\u76EE\u524D Modern.js \u652F\u6301 ",(0,i.jsx)(n.code,{children:"AfterMatch"})," \u548C ",(0,i.jsx)(n.code,{children:"AfterRender"})," \u4E24\u4E2A Hook\u3002"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"type AfterMatchContext = HookContext & {\n  router: {\n    redirect: (url: string, status: number) => void;\n    rewrite: (entry: string) => void;\n  };\n};\n\ntype AfterRenderContext = {\n  template: {\n    get: () => string;\n    set: (html: string) => void;\n    prependHead: (fragment: string) => void;\n    appendHead: (fragment: string) => void;\n    prependBody: (fragment: string) => void;\n    appendBody: (fragment: string) => void;\n  };\n};\n"})}),"\n",(0,i.jsxs)(n.h3,{id:"\u53C2\u6570",children:["\u53C2\u6570",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u53C2\u6570",children:"#"})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"context"}),"\uFF1A\u63D0\u4F9B\u5F53\u524D Hook \u4E0A\u4E0B\u6587\u3002","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"response"}),"\uFF1A\u63D0\u4F9B\u4E00\u7CFB\u5217\u5904\u7406\u54CD\u5E94\u7684\u64CD\u4F5C"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"request"}),"\uFF1A\u63D0\u4F9B\u4E00\u7CFB\u5217\u83B7\u53D6\u8BF7\u6C42\u4FE1\u606F\u7684\u64CD\u4F5C"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"router"}),"\uFF1A\u63D0\u4F9B\u5BF9\u54CD\u5E94\u8DEF\u7531\u7684\u5FEB\u6377\u64CD\u4F5C"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"template"}),"\uFF1A\u63D0\u4F9B\u5BF9\u54CD\u5E94\u5185\u5BB9\u7684\u5FEB\u6377\u64CD\u4F5C"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"next"}),"\uFF1A\u6267\u884C\u5F53\u524D Hook \u7684\u4E0B\u4E00\u4E2A\u76D1\u542C\u51FD\u6570\uFF08\u4E0D\u5F71\u54CD\u6574\u4F53\u670D\u52A1\u7AEF\u6D41\u7A0B\uFF09\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(n.h2,{id:"\u793A\u4F8B",children:["\u793A\u4F8B",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u793A\u4F8B",children:"#"})]}),"\n",(0,i.jsxs)(n.h3,{id:"redirect",children:["Redirect",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#redirect",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"\u5C06\u9875\u9762\u91CD\u5B9A\u5411\u5230\u7AD9\u70B9\u5916\u7684\u9875\u9762\uFF0C\u4F8B\u5982\u8DF3\u8F6C\u5230\u7EDF\u4E00\u767B\u5F55\u9875\uFF1A"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"import type { AfterMatch } from '@modern-js/runtime/server';\n\nexport const afterMatch: AfterMatch = async (ctx, next) => {\n  ctx.router.redirect('https://website.com/login', 302);\n};\n"})}),"\n",(0,i.jsxs)(n.h3,{id:"rewrite",children:["Rewrite",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#rewrite",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"\u5C06\u9875\u9762\u91CD\u5199\u5230\u5F53\u524D\u7AD9\u70B9\u7684\u5176\u4ED6\u9875\u9762\uFF0C\u4F8B\u5982\u540C\u4E00\u4E2A\u8DEF\u7531\u6839\u636E UA \u8FD4\u56DE\u9002\u914D\u4E0D\u540C\u7AEF\u7684\u9875\u9762\uFF1A"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"import type { AfterMatch } from '@modern-js/runtime/server';\n\nexport const afterMatch: AfterMatch = async (ctx, next) => {\n  ctx.router.rewrite('mobile');\n};\n"})}),"\n",(0,i.jsxs)(n.h3,{id:"html-\u5185\u5BB9\u6CE8\u5165",children:["HTML \u5185\u5BB9\u6CE8\u5165",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#html-\u5185\u5BB9\u6CE8\u5165",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"\u4E3A\u9875\u9762\u6CE8\u5165\u67D0\u4E9B\u4E0E\u6E32\u67D3\u4E3B\u4F53\u65E0\u5173\u7684 HTML \u5185\u5BB9\uFF0C\u5982\u811A\u672C\u3001\u9875\u9762\u9AA8\u67B6\u7B49\uFF1A"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"import type { AfterRender } from '@modern-js/runtime/server';\n\nexport const afterRender: AfterRenderHook = (context, next) => {\n  ctx.template.prependBody('<div>Footer</div>');\n};\n"})})]})}function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,d.useMDXComponents)(),e.components).wrapper;return n?(0,i.jsx)(n,(0,s._)((0,t._)({},e),{children:(0,i.jsx)(c,(0,t._)({},e))})):c(e)}var a=o;o.__RSPRESS_PAGE_META={},o.__RSPRESS_PAGE_META["zh%2Fapis%2Fapp%2Fruntime%2Fweb-server%2Fhook.mdx"]={toc:[{text:"\u4F7F\u7528\u59FF\u52BF",id:"\u4F7F\u7528\u59FF\u52BF",depth:2},{text:"\u51FD\u6570\u7B7E\u540D",id:"\u51FD\u6570\u7B7E\u540D",depth:2},{text:"\u53C2\u6570",id:"\u53C2\u6570",depth:3},{text:"\u793A\u4F8B",id:"\u793A\u4F8B",depth:2},{text:"Redirect",id:"redirect",depth:3},{text:"Rewrite",id:"rewrite",depth:3},{text:"HTML \u5185\u5BB9\u6CE8\u5165",id:"html-\u5185\u5BB9\u6CE8\u5165",depth:3}],title:"Hook"};var h={title:"Hook"}}}]);