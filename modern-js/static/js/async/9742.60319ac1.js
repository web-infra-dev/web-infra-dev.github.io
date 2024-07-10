/*! For license information please see 9742.60319ac1.js.LICENSE.txt */
(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["9742"],{88741:function(e,n,r){"use strict";r.r(n);var t=r("39980"),s=r("9580");function o(e){let n=Object.assign({h1:"h1",a:"a",p:"p",code:"code",pre:"pre",h2:"h2"},(0,s.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.h1,{id:"entryservertjsx",children:["entry.server.[tj]sx",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#entryservertjsx",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:["When the project initiates ",(0,t.jsx)(n.code,{children:"server.ssr"}),", Modern.js generates a default Server-Side entry. The sample code is as follows:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",meta:'title="entry.server.tsx"',children:"import {\n  renderString,\n  createRequestHandler,\n} from '@modern-js/runtime/ssr/server';\n\nconst handleRequest = async (request, ServerRoot, options) => {\n  const body = await renderString(request, <ServerRoot />, options);\n\n  return new Response(body, {\n    headers: {\n      'content-type': 'text/html; charset=utf-8',\n    },\n  });\n};\n\nexport default createRequestHandler(handleRequest);\n"})}),"\n",(0,t.jsxs)(n.h2,{id:"add-custom-entry-points",children:["Add Custom Entry Points",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#add-custom-entry-points",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:["Users need to customize the Server-Side Rendering entry points, they can customize the server entry in ",(0,t.jsx)(n.code,{children:"src/entry.server.ts"})," or ",(0,t.jsx)(n.code,{children:"src/{entryName}/entry.server.ts"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",meta:'title="src/entry.server.tsx"',children:"import { renderString, createRequestHandler } from '@edenx/runtime/ssr/server';\nimport type { HandleRequest } from '@edenx/runtime/ssr/server';\n\nconst handleRequest: HandleRequest = async (request, ServerRoot, options) => {\n  // do something before rendering\n  const body = await renderString(request, <ServerRoot />, options);\n\n  const newBody = body + '<div>Byte-Dance</div>';\n\n  return new Response(newBody, {\n    headers: {\n      'content-type': 'text/html; charset=UTF-8',\n      'x-custom-header': 'abc',\n    },\n  });\n};\n\nexport default createRequestHandler(handleRequest);\n"})})]})}function d(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,s.ah)(),e.components);return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}n.default=d,d.__RSPRESS_PAGE_META={},d.__RSPRESS_PAGE_META["en%2Fapis%2Fapp%2Fhooks%2Fsrc%2Fentry.server.mdx"]={toc:[{text:"Add Custom Entry Points",id:"add-custom-entry-points",depth:2}],title:"entry.server.[tj]sx",frontmatter:{title:"entry.server.[tj]sx",sidebar_position:5}}}}]);