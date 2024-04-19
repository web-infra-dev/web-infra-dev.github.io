/*! For license information please see 24687.5a8435ba.js.LICENSE.txt */
(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["24687"],{41965:function(e,r,n){"use strict";n.r(r);var s=n("39980"),t=n("9580");function i(e){let r=Object.assign({h1:"h1",a:"a",p:"p",strong:"strong",div:"div",h2:"h2",pre:"pre",code:"code",h3:"h3",ol:"ol",li:"li"},(0,t.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(r.h1,{id:"custom-web-server",children:["Custom Web Server",(0,s.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#custom-web-server",children:"#"})]}),"\n",(0,s.jsx)(r.p,{children:"As a client-centric development framework, Modern.js has limited customization capabilities on the server side. However, in some development scenarios, special server-level logic needs to be customized, such as user authentication, request preprocessing, and adding page rendering skeletons."}),"\n",(0,s.jsxs)(r.p,{children:["Some developers may be wondering, Modern.js already provides ",(0,s.jsx)(r.a,{href:"/guides/advanced-features/bff/function",children:"BFF"}),", why you need ",(0,s.jsx)(r.strong,{children:"Custom Web Server"}),"."]}),"\n",(0,s.jsx)(r.p,{children:"The reason is that by default, page routing does not go through BFF, it has no way to provide server-side custom logic for page access. The reason for this design is that we do not want the service that controls the page to be bound to the BFF service, this is to avoid the BFF framework restricting how the page is deployed."}),"\n",(0,s.jsx)(r.p,{children:"For example, hosting pages separately from BFF, deploying page services to non-Node environments, customizing for deployment platforms, etc."}),"\n",(0,s.jsx)(r.p,{children:"For the above reasons, Modern.js provides three ways that projects can customize server-level capabilities progressively according to their needs."}),"\n",(0,s.jsxs)(r.div,{className:"rspress-directive warning",children:[(0,s.jsx)(r.div,{className:"rspress-directive-title",children:"WARNING"}),(0,s.jsx)(r.div,{className:"rspress-directive-content",children:(0,s.jsx)(r.p,{children:"The three extension methods cannot work at the same time, and developers need to choose the appropriate method according to the scenario."})})]}),"\n",(0,s.jsxs)(r.h2,{id:"extending-web-server-with-api",children:["Extending Web Server with API",(0,s.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#extending-web-server-with-api",children:"#"})]}),"\n",(0,s.jsx)(r.p,{children:"The first way is to customize the server-side at a specific lifecycle through the server-side runtime API provided by Modern.js. The purpose of providing this way is that in some cases, developers do not need to control the full Web Server, but only need to add server-level logic."}),"\n",(0,s.jsxs)(r.p,{children:["Because the full web server cannot be controlled this way, and the extension logic ",(0,s.jsx)(r.strong,{children:"only takes effect when the page is requested"}),". Therefore, it is relatively simple to apply server-level logic, and you do not want to create additional BFFs or BFFs and pages without common server-level logic scenarios."]}),"\n",(0,s.jsx)(r.p,{children:"You can run the'pnpm run new 'command in the project root directory to enable the \"Custom Web Serve\" function:"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-bash",children:'? Please select the operation you want: Create Element\n? Please select the type of element to create: New "Custom Web Server" source code directory\n'})}),"\n",(0,s.jsxs)(r.p,{children:["After executing the command, register the ",(0,s.jsx)(r.code,{children:"@modern-js/plugin-server"})," plugin in ",(0,s.jsx)(r.code,{children:"modern.config.ts"}),":"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import { serverPlugin } from '@modern-js/plugin-server';\n\nexport default defineConfig({\n  plugins: [..., serverPlugin()],\n});\n"})}),"\n",(0,s.jsxs)(r.p,{children:["After the function is turned on, the ",(0,s.jsx)(r.code,{children:"server/index.ts"})," file will be automatically created in the project directory, and custom logic can be written in this file. Modern.js provides two types of APIs, ",(0,s.jsx)(r.strong,{children:"Hook"})," and ",(0,s.jsx)(r.strong,{children:"Middleware"}),", to extend Web Server."]}),"\n",(0,s.jsxs)(r.h3,{id:"hook",children:["Hook",(0,s.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#hook",children:"#"})]}),"\n",(0,s.jsx)(r.p,{children:"The Hook provided by Modern.js is used to control the built-in logic in the Web Server, and all page requests go through the Hook."}),"\n",(0,s.jsxs)(r.p,{children:["Currently, two Hooks are provided: ",(0,s.jsx)(r.code,{children:"AfterMatch"})," and ",(0,s.jsx)(r.code,{children:"AfterRender"}),", which can be used to modify the rendering results. It can be written in ",(0,s.jsx)(r.code,{children:"server/index.ts"})," as follows:"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-ts",children:"import type { AfterMatchHook, AfterRenderHook } from '@modern-js/runtime/server';\n\nexport const afterMatch: AfterMatchHook = (ctx, next) => {\n  next();\n}\n\nexport const afterRender: AfterRenderHook = (ctx, next) => {\n  next();\n}\n"})}),"\n",(0,s.jsx)(r.p,{children:"Projects should follow these best practices when using Hook:"}),"\n",(0,s.jsxs)(r.ol,{children:["\n",(0,s.jsx)(r.li,{children:"Authentication in afterMatch."}),"\n",(0,s.jsx)(r.li,{children:"Do Rewrite and Redirect in afterMatch."}),"\n",(0,s.jsx)(r.li,{children:"Inject HTML content in afterRender."}),"\n"]}),"\n",(0,s.jsxs)(r.div,{className:"rspress-directive note",children:[(0,s.jsx)(r.div,{className:"rspress-directive-title",children:"NOTE"}),(0,s.jsx)(r.div,{className:"rspress-directive-content",children:(0,s.jsxs)(r.p,{children:["For more detail, see ",(0,s.jsx)(r.a,{href:"/apis/app/runtime/web-server/hook",children:"Hook"}),".\n"]})})]}),"\n",(0,s.jsxs)(r.h3,{id:"middleware",children:["Middleware",(0,s.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#middleware",children:"#"})]}),"\n",(0,s.jsx)(r.p,{children:"For some projects, there may be more requirements at the server level, Modern.js provides Middleware to add pre-middleware for Web Server. It can only run in a Node environment, so if the project is deployed to another environment, such as a Worker environment, Middleware cannot be used."}),"\n",(0,s.jsx)(r.p,{children:"Modern.js provides a set of APIs by default for projects to use:"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-ts",children:"import { Middlewre } from '@modern-js/runtime/server';\n\nexport const middleware: Middlewre = (context, next) => {\n  const { source: { req, res } } = context;\n  console.log(req.url);\n  next();\n};\n"})}),"\n",(0,s.jsxs)(r.div,{className:"rspress-directive note",children:[(0,s.jsx)(r.div,{className:"rspress-directive-title",children:"NOTE"}),(0,s.jsx)(r.div,{className:"rspress-directive-content",children:(0,s.jsx)(r.p,{children:"For more detail, see [Middleware] (/apis/app/runtime/web-server/middleware)."})})]}),"\n",(0,s.jsx)(r.p,{children:"Projects should follow these best practices when using Middleware:"}),"\n",(0,s.jsxs)(r.ol,{children:["\n",(0,s.jsx)(r.li,{children:"In Middleware, you can directly operate origin request and response objects, do event tracking, and inject Node services (databases, Redis, etc.) that may be used for SSR rendering."}),"\n",(0,s.jsx)(r.li,{children:"Operations such as marking and crawler optimization can be done in Middleware."}),"\n",(0,s.jsx)(r.li,{children:"In Middleware, you can ignore the default rendering and customize the rendering process."}),"\n"]}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.strong,{children:"In general, in CSR projects, using Hook can basically meet all the needs of simple scenarios. In SSR projects, Middleware can be used for more complex Node extensions."})}),"\n",(0,s.jsxs)(r.h2,{id:"managed-page-requests-with-bff",children:["Managed Page Requests with BFF",(0,s.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#managed-page-requests-with-bff",children:"#"})]}),"\n",(0,s.jsx)(r.p,{children:"The second way is to use BFF to Managed page rendering. In this way, all requests will first hit the BFF service."}),"\n",(0,s.jsx)(r.p,{children:"This method can uniformly control the server-level logic of all requests through BFF. Therefore, it is suitable for scenarios where the server-level logic is complex, and BFF and pages need common server-level logic. But it still relies on the Web Server of Modern.js as a whole, and cannot run the logic on existing services."}),"\n",(0,s.jsxs)(r.p,{children:['To use this method, we first need to enable the "BFF" function through ',(0,s.jsx)(r.code,{children:"pnpm new"}),". Then add ",(0,s.jsx)(r.a,{href:"/configure/app/bff/enable-handle-web",children:(0,s.jsx)(r.code,{children:"bff.enableHandleWeb"})})," configuration in the configuration file:"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-ts",children:"export default defineConfig({\n  bff: {\n    enableHandleWeb: true,\n  },\n});\n"})}),"\n",(0,s.jsxs)(r.p,{children:["When this value is set to ",(0,s.jsx)(r.code,{children:"true"}),", page request traffic also goes through the BFF, and the logic built into Modern.js for page rendering defaults to running as the last middleware for the BFF service."]}),"\n",(0,s.jsxs)(r.h2,{id:"fully-customized-web-server",children:["Fully Customized Web Server",(0,s.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#fully-customized-web-server",children:"#"})]}),"\n",(0,s.jsxs)(r.div,{className:"rspress-directive note",children:[(0,s.jsx)(r.div,{className:"rspress-directive-title",children:"NOTE"}),(0,s.jsx)(r.div,{className:"rspress-directive-content",children:(0,s.jsx)(r.p,{children:"Comming soon.."})})]})]})}function o(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:r}=Object.assign({},(0,t.ah)(),e.components);return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(i,{...e})}):i(e)}r.default=o,o.__RSPRESS_PAGE_META={},o.__RSPRESS_PAGE_META["en%2Fguides%2Fadvanced-features%2Fweb-server.mdx"]={toc:[{text:"Extending Web Server with API",id:"extending-web-server-with-api",depth:2},{text:"Hook",id:"hook",depth:3},{text:"Middleware",id:"middleware",depth:3},{text:"Managed Page Requests with BFF",id:"managed-page-requests-with-bff",depth:2},{text:"Fully Customized Web Server",id:"fully-customized-web-server",depth:2}],title:"Custom Web Server",frontmatter:{sidebar_position:16}}}}]);