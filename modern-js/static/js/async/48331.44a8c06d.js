"use strict";(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["48331"],{41134:function(e,n,s){s.r(n),s.d(n,{default:function(){return t}});var r=s(38093),d=s(75878);function i(e){let n=Object.assign({h1:"h1",a:"a",ul:"ul",li:"li",strong:"strong",pre:"pre",code:"code",p:"p"},(0,d.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"devsetupmiddlewares",children:["dev.setupMiddlewares",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#devsetupmiddlewares",children:"#"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"\u7C7B\u578B\uFF1A"})}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"type ServerAPIs = {\n  sockWrite: (\n    type: string,\n    data?: string | boolean | Record<string, any>,\n  ) => void;\n};\n\ntype SetupMiddlewares = Array<\n  (\n    middlewares: {\n      unshift: (...handlers: RequestHandler[]) => void;\n      push: (...handlers: RequestHandler[]) => void;\n    },\n    server: ServerAPIs,\n  ) => void\n>;\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"\u9ED8\u8BA4\u503C\uFF1A"})," ",(0,r.jsx)(n.code,{children:"undefined"})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"\u63D0\u4F9B\u6267\u884C\u81EA\u5B9A\u4E49\u51FD\u6570\u548C\u5E94\u7528\u81EA\u5B9A\u4E49\u4E2D\u95F4\u4EF6\u7684\u80FD\u529B\u3002"}),"\n",(0,r.jsxs)(n.p,{children:["\u4E2D\u95F4\u4EF6\u7684\u6267\u884C\u987A\u5E8F\u662F: ",(0,r.jsx)(n.code,{children:"unshift"})," => \u5185\u7F6E\u4E2D\u95F4\u4EF6 => ",(0,r.jsx)(n.code,{children:"push"}),"\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"export default {\n  dev: {\n    setupMiddlewares: [\n      (middlewares, server) => {\n        middlewares.unshift((req, res, next) => {\n          next();\n        });\n\n        middlewares.push((req, res, next) => {\n          next();\n        });\n      },\n    ],\n  },\n};\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u4E00\u4E9B\u7279\u6B8A\u573A\u666F\u9700\u6C42\u53EF\u80FD\u9700\u8981\u4F7F\u7528\u670D\u52A1\u5668 API\uFF1A"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:'sockWrite\u3002\u5141\u8BB8\u5411 HMR \u5BA2\u6237\u7AEF\u4F20\u9012\u4E00\u4E9B\u6D88\u606F\uFF0CHMR \u5BA2\u6237\u7AEF\u5C06\u6839\u636E\u63A5\u6536\u5230\u7684\u6D88\u606F\u7C7B\u578B\u8FDB\u884C\u4E0D\u540C\u7684\u5904\u7406\u3002\u5982\u679C\u4F60\u53D1\u9001\u4E00\u4E2A "content-changed " \u7684\u6D88\u606F\uFF0C\u9875\u9762\u5C06\u4F1A\u91CD\u65B0\u52A0\u8F7D\u3002'}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"export default {\n  dev: {\n    setupMiddlewares: [\n      (middlewares, server) => {\n        // \u6DFB\u52A0\u81EA\u5B9A\u4E49 watcher \u5E76\u5728\u6587\u4EF6\u66F4\u65B0\u65F6\u89E6\u53D1\u9875\u9762\u5237\u65B0\n        watcher.on('change', (changed) => {\n          server.sockWrite('content-changed');\n        });\n      },\n    ],\n  },\n};\n"})})]})}function l(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,d.ah)(),e.components);return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}let t=l;l.__RSPRESS_PAGE_META={},l.__RSPRESS_PAGE_META["zh%2Fconfigure%2Fapp%2Fdev%2Fsetup-middlewares.mdx"]={toc:[],title:"setupMiddlewares",frontmatter:{title:"setupMiddlewares"}}}}]);