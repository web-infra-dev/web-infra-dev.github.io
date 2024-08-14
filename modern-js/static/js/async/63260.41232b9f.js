"use strict";(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["63260"],{92349:function(e,n,r){r.r(n),r.d(n,{default:function(){return i}});var t=r(38093),s=r(75878);function a(e){let n=Object.assign({h1:"h1",a:"a",p:"p",code:"code",h2:"h2",pre:"pre"},(0,s.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.h1,{id:"renderstring",children:["renderString",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#renderstring",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:["Used for React String SSR to render strings, used in conjunction with ",(0,t.jsx)(n.code,{children:"createRequestHandler"}),"."]}),"\n",(0,t.jsxs)(n.h2,{id:"usage",children:["Usage",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#usage",children:"#"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",meta:'title="src/entry.server.tsx"',children:"import {\n  renderString,\n  createRequestHandler,\n} from '@modern-js/runtime/ssr/server';\n\nconst handleRequest = async (request, ServerRoot, options) => {\n  const body = await renderString(request, <ServerRoot />, options);\n\n  return new Response(body, {\n    headers: {\n      'content-type': 'text/html; charset=utf-8',\n    },\n  });\n};\n\nexport default createRequestHandler(handleRequest);\n"})}),"\n",(0,t.jsxs)(n.h2,{id:"function-signature",children:["Function Signature",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#function-signature",children:"#"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"export type RenderString = (\n  request: Request,\n  serverRoot: React.ReactElement,\n  optinos: RenderOptions,\n) => Promise<string>;\n"})}),"\n",(0,t.jsxs)(n.h2,{id:"example",children:["Example",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#example",children:"#"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",meta:'title="src/entry.server.tsx"',children:"import {\n  renderString,\n  createRequestHandler,\n} from '@modern-js/runtime/ssr/server';\n\nconst handleRequest = async (request, ServerRoot, options) => {\n  // do something before render\n  const body = await renderString(request, <ServerRoot />, options);\n\n  const newBody = body + '<div>Byte-Dance</div>';\n\n  return new Response(newBody, {\n    headers: {\n      'content-type': 'text/html; charset=utf-8',\n    },\n  });\n};\n\nexport default createRequestHandler(handleRequest);\n"})})]})}function d(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,s.ah)(),e.components);return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}let i=d;d.__RSPRESS_PAGE_META={},d.__RSPRESS_PAGE_META["en%2Fapis%2Fapp%2Fruntime%2Fssr%2FrenderString.mdx"]={toc:[{text:"Usage",id:"usage",depth:2},{text:"Function Signature",id:"function-signature",depth:2},{text:"Example",id:"example",depth:2}],title:"renderString",frontmatter:{title:"renderString"}}}}]);