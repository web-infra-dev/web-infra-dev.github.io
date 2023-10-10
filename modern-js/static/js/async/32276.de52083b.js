(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["32276"],{4421:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return c},frontmatter:function(){return h}});var t=r("15169"),s=r("43932"),i=r("9880"),d=r("23169");function o(e){var n=Object.assign({h1:"h1",a:"a",p:"p",div:"div",h2:"h2",pre:"pre",code:"code",h3:"h3",ul:"ul",li:"li"},(0,d.useMDXComponents)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.h1,{id:"hook",children:["Hook",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#hook",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"Used to extend Modern.js built-in Web Server, all page requests are handled by these hooks."}),"\n",(0,i.jsxs)(n.div,{className:"rspress-directive note",children:[(0,i.jsx)(n.div,{className:"rspress-directive-title",children:"NOTE"}),(0,i.jsxs)(n.div,{className:"rspress-directive-content",children:[(0,i.jsxs)(n.p,{children:["For more detail, see ",(0,i.jsx)(n.a,{href:"/guides/advanced-features/web-server",children:"Extend Web Server"}),"."]}),"\n"]})]}),"\n",(0,i.jsxs)(n.h2,{id:"usage",children:["Usage",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#usage",children:"#"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"import { AfterMatchHook, AfterRenderHook } from '@modern-js/runtime/server';\n\nexport const afterMatch: AfterMatchHook = (context, next) => {};\nexport const afterRender: AfterRenderHook = (context, next) => {};\n"})}),"\n",(0,i.jsxs)(n.div,{className:"rspress-directive info",children:[(0,i.jsx)(n.div,{className:"rspress-directive-title",children:"INFO"}),(0,i.jsxs)(n.div,{className:"rspress-directive-content",children:[(0,i.jsxs)(n.p,{children:["Before using this API, please execute ",(0,i.jsx)(n.code,{children:"pnpm run new"}),' to create a new "Custom Web Server" source code directory.']}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'pnpm run new\n? Please select the operation you want: Create Elements\n? Please select the type of element to create: New "Custom Web Server" source code directory\n'})}),"\n"]})]}),"\n",(0,i.jsxs)(n.h2,{id:"function-signature",children:["Function Signature",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#function-signature",children:"#"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"type HookContext = {\n  response: {\n    set: (key: string, value: string) => void;\n    status: (code: number) => void;\n    cookies: {\n      set: (key: string, value: string, options?: any) => void;\n      clear: () => void;\n    };\n    raw: (\n      body: string,\n      { status, headers }: { status: number; headers: Record<string, any> },\n    ) => void;\n  };\n  request: {\n    host: string;\n    pathname: string;\n    query: Record<string, any>;\n    cookie: string;\n    cookies: {\n      get: (key: string) => string;\n    };\n    headers: IncomingHttpHeaders;\n  };\n};\n\nfunction Hook(context: HookContext, next: NextFunction): Promsie<void> | void;\n"})}),"\n",(0,i.jsxs)(n.p,{children:["different Hooks additionally provide different contexts. Currently Modern.js support ",(0,i.jsx)(n.code,{children:"AfterMatch"})," and ",(0,i.jsx)(n.code,{children:"AfterRender"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"type AfterMatchContext = HookContext & {\n  router: {\n    redirect: (url: string, status: number) => void;\n    rewrite: (entry: string) => void;\n  };\n};\n\ntype AfterRenderContext = {\n  template: {\n    get: () => string;\n    set: (html: string) => void;\n    prependHead: (fragment: string) => void;\n    appendHead: (fragment: string) => void;\n    prependBody: (fragment: string) => void;\n    appendBody: (fragment: string) => void;\n  };\n};\n"})}),"\n",(0,i.jsxs)(n.h3,{id:"input",children:["Input",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#input",children:"#"})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"context"}),": Hook context.","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"response"}),": provides a series of methods to process the response."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"request"}),": provides a series of methods to get request info."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"router"}),": provides methods on routing."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"template"}),": provides methods on content."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"next"}),": call next listener (not affect the server process, only current hook)."]}),"\n"]}),"\n",(0,i.jsxs)(n.h2,{id:"example",children:["Example",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#example",children:"#"})]}),"\n",(0,i.jsxs)(n.h3,{id:"redirect",children:["Redirect",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#redirect",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"Redirect to pages outside the site, for example to login page:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"import type { AfterMatch } from '@modern-js/runtime/server';\n\nexport const afterMatch: AfterMatch = async (ctx, next) => {\n  ctx.router.redirect('https://website.com/login', 302);\n};\n"})}),"\n",(0,i.jsxs)(n.h3,{id:"rewrite",children:["Rewrite",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#rewrite",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"Rewrite to pages of the current site, for example, the same route returns pages that are adapted to different UA:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"import type { AfterMatch } from '@modern-js/runtime/server';\n\nexport const afterMatch: AfterMatch = async (ctx, next) => {\n  ctx.router.rewrite('mobile');\n};\n"})}),"\n",(0,i.jsxs)(n.h3,{id:"html-inject",children:["HTML Inject",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#html-inject",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"Inject some HTML content to the page, such as scripts, page skeletons, etc.:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"import type { AfterRender } from '@modern-js/runtime/server';\n\nexport const afterRender: AfterRenderHook = (context, next) => {\n  ctx.template.prependBody('<div>Footer</div>');\n};\n"})})]})}function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,d.useMDXComponents)(),e.components).wrapper;return n?(0,i.jsx)(n,(0,s._)((0,t._)({},e),{children:(0,i.jsx)(o,(0,t._)({},e))})):o(e)}var c=a;a.__RSPRESS_PAGE_META={},a.__RSPRESS_PAGE_META["en%2Fapis%2Fapp%2Fruntime%2Fweb-server%2Fhook.mdx"]={toc:[{text:"Usage",id:"usage",depth:2},{text:"Function Signature",id:"function-signature",depth:2},{text:"Input",id:"input",depth:3},{text:"Example",id:"example",depth:2},{text:"Redirect",id:"redirect",depth:3},{text:"Rewrite",id:"rewrite",depth:3},{text:"HTML Inject",id:"html-inject",depth:3}],title:"Hook"};var h={title:"Hook"}}}]);