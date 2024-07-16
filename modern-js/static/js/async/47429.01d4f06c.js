"use strict";(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["47429"],{27517:function(e,n,r){r.r(n),r.d(n,{default:function(){return d}});var t=r(39980),a=r(9580);function s(e){let n=Object.assign({h1:"h1",a:"a",p:"p",code:"code",h2:"h2",pre:"pre"},(0,a.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.h1,{id:"renderstreaming",children:["renderStreaming",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#renderstreaming",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:["Used for React v18+ Streaming SSR to render readable streams, used in conjunction with ",(0,t.jsx)(n.code,{children:"createRequestHandler"}),"."]}),"\n",(0,t.jsxs)(n.h2,{id:"usage",children:["Usage",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#usage",children:"#"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",meta:'title="src/entry.server.tsx"',children:"import {\n  renderStreaming,\n  createRequestHandler,\n} from '@modern-js/runtime/ssr/server';\n\nconst handleRequest = async (request, ServerRoot, options) => {\n  const stream = await renderStreaming(request, <ServerRoot />, options);\n\n  return new Response(stream, {\n    headers: {\n      'content-type': 'text/html; charset=utf-8',\n    },\n  });\n};\n\nexport default createRequestHandler(handleRequest);\n"})}),"\n",(0,t.jsxs)(n.h2,{id:"function-signature",children:["Function Signature",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#function-signature",children:"#"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"export type RenderStreaming = (\n  request: Request,\n  serverRoot: React.ReactElement,\n  optinos: RenderOptions,\n) => Promise<ReadableStream>;\n"})}),"\n",(0,t.jsxs)(n.h2,{id:"example",children:["Example",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#example",children:"#"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",meta:'title="src/entry.server.tsx"',children:"import {\n  renderStreaming,\n  createRequestHandler,\n} from '@modern-js/runtime/ssr/server';\n\nconst handleRequest = async (request, ServerRoot, options) => {\n  // do something before render\n  const stream = await renderStreaming(request, <ServerRoot />, options);\n\n  // docs: https://developer.mozilla.org/en-US/docs/Web/API/TransformStream\n  const transformStream = new TransformStream({\n    transform(chunk, controller) {\n      // do some transform\n    },\n  });\n\n  stream.pipeThrough(transformStream);\n\n  return new Response(transformStream.readable, {\n    headers: {\n      'content-type': 'text/html; charset=utf-8',\n    },\n  });\n};\n\nexport default createRequestHandler(handleRequest);\n"})})]})}function o(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,a.ah)(),e.components);return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(s,{...e})}):s(e)}let d=o;o.__RSPRESS_PAGE_META={},o.__RSPRESS_PAGE_META["en%2Fapis%2Fapp%2Fruntime%2Fssr%2FrenderStreaming.mdx"]={toc:[{text:"Usage",id:"usage",depth:2},{text:"Function Signature",id:"function-signature",depth:2},{text:"Example",id:"example",depth:2}],title:"renderStreaming",frontmatter:{title:"renderStreaming"}}}}]);