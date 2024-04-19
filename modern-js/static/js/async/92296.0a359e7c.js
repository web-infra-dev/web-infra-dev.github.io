/*! For license information please see 92296.0a359e7c.js.LICENSE.txt */
(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["92296"],{80729:function(e,n,r){"use strict";r.r(n);var s=r("39980"),i=r("9580");function d(e){let n=Object.assign({h1:"h1",a:"a",ul:"ul",li:"li",strong:"strong",code:"code",p:"p",h3:"h3",pre:"pre",ol:"ol"},(0,i.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h1,{id:"serverssr",children:["server.ssr",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#serverssr",children:"#"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Type:"})," ",(0,s.jsx)(n.code,{children:"boolean"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Default:"})," ",(0,s.jsx)(n.code,{children:"false"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Enalbe SSR configuration."}),"\n",(0,s.jsxs)(n.h3,{id:"boolean-type",children:["Boolean Type",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#boolean-type",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["When the value type is ",(0,s.jsx)(n.code,{children:"boolean"}),", it indicates whether to enable SSR deployment mode. The default is ",(0,s.jsx)(n.code,{children:"false"})," to disable it."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"export default defineConfig({\n  server: {\n    ssr: true,\n  },\n});\n"})}),"\n",(0,s.jsxs)(n.h3,{id:"object-type",children:["Object Type",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#object-type",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["When the value type is ",(0,s.jsx)(n.code,{children:"Object"}),", the following properties can be configured:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"mode"}),": ",(0,s.jsx)(n.code,{children:"string = 'string'"}),", which defaults to using ",(0,s.jsx)(n.code,{children:"renderToString"})," for rendering. Configure ",(0,s.jsx)(n.code,{children:"stream"})," to enable streaming rendering."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"forceCSR"}),": ",(0,s.jsx)(n.code,{children:"boolean = false"}),", which is off by default for forcing CSR rendering. Configure ",(0,s.jsx)(n.code,{children:"true"})," to force CSR by adding ",(0,s.jsx)(n.code,{children:"?csr=true"})," or adding ",(0,s.jsx)(n.code,{children:"x-modern-ssr-fallback"})," header when accessing the page."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"inlineScript"}),": ",(0,s.jsx)(n.code,{children:"boolean = true"}),", by default, SSR data is injected into HTML as inline scripts and assigned directly to global variables. Configure ",(0,s.jsx)(n.code,{children:"false"})," to distribute JSON instead of assigning to global variables, this configuration doesn't work in Streaming SSR."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"disablePrerender"}),": ",(0,s.jsx)(n.code,{children:"boolean = fasle"}),", To ensure compatibility with the old data request method (",(0,s.jsx)(n.code,{children:"useLoader"}),"), by default, Modern.js performs pre-rendering of components.\nHowever, if developers want to reduce one rendering when there is no use of the useLoader API in your project, you can set the configuration ",(0,s.jsx)(n.code,{children:"disablePrerender=true"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"unsafeHeaders"}),": ",(0,s.jsx)(n.code,{children:"string[] = []"}),", For safety reasons, Modern.js does not add excessive content to SSR_DATA. Developers can use this configuration to specify the headers that need to be injected."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"scriptLoading"}),": ",(0,s.jsx)(n.code,{children:"'defer' | 'blocking' | 'module' | 'async'"}),", The configuration is the same as ",(0,s.jsx)(n.a,{href:"/configure/app/html/script-loading",children:"html.scriptLoading"}),", supporting SSR injected script set to ",(0,s.jsx)(n.code,{children:"async"})," loading. The priority is ",(0,s.jsx)(n.code,{children:"ssr.scriptLoading"})," > ",(0,s.jsx)(n.code,{children:"html.scriptLoading"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"export default defineConfig({\n  server: {\n    ssr: {\n      forceCSR: true,\n      mode: 'stream',\n      inlineScript: false,\n      unsafeHeaders: ['User-Agent'],\n      scriptLoading: 'async',\n    },\n  },\n});\n"})}),"\n",(0,s.jsxs)(n.h3,{id:"active-fallback",children:["Active Fallback",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#active-fallback",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"In a production environment, there are scenarios where it is necessary to actively fallback an SSR project to CSR. Examples include"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"When the SSR fails, a fallback to the CSR is required to ensure product availability."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"When the SSR is working normally, but there are rendering failures during csr, debugging is required."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"When the SSR server is under heavy load, it may be necessary to fallback some traffic directly to the CSR to avoid service downtime."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["By configuring ",(0,s.jsx)(n.code,{children:"server.ssr.forceCSR"})," to ",(0,s.jsx)(n.code,{children:"true"})," in the project, you can control this behavior through query strings or request headers."]}),"\n",(0,s.jsx)(n.p,{children:"For example, in a custom Web Server middleware, you can actively fallback when traffic exceeds a certain threshold:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",meta:'title="server/index.ts"',children:"export const middleware = (ctx, next) => {\n  const { req, res } = ctx;\n  if (condition) {\n    req.headers['x-modern-ssr-fallback'] = '1';\n  }\n\n  next();\n};\n"})})]})}function c(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}n.default=c,c.__RSPRESS_PAGE_META={},c.__RSPRESS_PAGE_META["en%2Fconfigure%2Fapp%2Fserver%2Fssr.mdx"]={toc:[{text:"Boolean Type",id:"boolean-type",depth:3},{text:"Object Type",id:"object-type",depth:3},{text:"Active Fallback",id:"active-fallback",depth:3}],title:"server.ssr",frontmatter:{sidebar_label:"ssr"}}}}]);