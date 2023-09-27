(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["1091"],{65129:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return h}});var s,d=r("15169"),c=r("43932"),l=r("9880"),i=r("23169");function o(e){var n=Object.assign({h1:"h1",a:"a",ul:"ul",li:"li",strong:"strong",code:"code",p:"p",h3:"h3",pre:"pre",ol:"ol"},(0,i.useMDXComponents)(),e.components);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(n.h1,{id:"serverssr",children:["server.ssr",(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#serverssr",children:"#"})]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"\u7C7B\u578B\uFF1A"})," ",(0,l.jsx)(n.code,{children:"boolean"})," | ",(0,l.jsx)(n.code,{children:"Object"})]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"\u9ED8\u8BA4\u503C\uFF1A"})," ",(0,l.jsx)(n.code,{children:"false"})]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"SSR \u5F00\u5173\u4EE5\u53CA\u76F8\u5173\u8BBE\u7F6E\u3002"}),"\n",(0,l.jsxs)(n.h3,{id:"boolean-\u7C7B\u578B",children:["Boolean \u7C7B\u578B",(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#boolean-\u7C7B\u578B",children:"#"})]}),"\n",(0,l.jsxs)(n.p,{children:["\u5F53\u503C\u7C7B\u578B\u4E3A ",(0,l.jsx)(n.code,{children:"boolean"})," \u65F6\uFF0C\u8868\u793A\u662F\u5426\u5F00\u542F SSR \u90E8\u7F72\u6A21\u5F0F\uFF0C\u9ED8\u8BA4 ",(0,l.jsx)(n.code,{children:"false"})," \u4E0D\u5F00\u542F\u3002"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"export default defineConfig({\n  server: {\n    ssr: true,\n  },\n});\n"})}),"\n",(0,l.jsxs)(n.h3,{id:"object-\u7C7B\u578B",children:["Object \u7C7B\u578B",(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#object-\u7C7B\u578B",children:"#"})]}),"\n",(0,l.jsxs)(n.p,{children:["\u5F53\u503C\u7C7B\u578B\u4E3A ",(0,l.jsx)(n.code,{children:"Object"})," \u65F6\uFF0C\u53EF\u4EE5\u914D\u7F6E\u5982\u4E0B\u5C5E\u6027\uFF1A"]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"mode"}),"\uFF1A",(0,l.jsx)(n.code,{children:"string = 'string'"}),"\uFF0C\u9ED8\u8BA4\u4E3A\u4F7F\u7528 ",(0,l.jsx)(n.code,{children:"renderToString"})," \u6E32\u67D3\u3002\u914D\u7F6E\u4E3A ",(0,l.jsx)(n.code,{children:"stream"})," \u5F00\u542F\u6D41\u5F0F\u6E32\u67D3\u3002"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"forceCSR"}),"\uFF1A",(0,l.jsx)(n.code,{children:"boolean = false"}),"\uFF0C\u9ED8\u8BA4\u5173\u95ED\u5F3A\u5236 CSR \u6E32\u67D3\u3002\u914D\u7F6E\u4E3A ",(0,l.jsx)(n.code,{children:"true"})," \u540E\uFF0C\u5728\u9875\u9762\u8BBF\u95EE\u65F6\u6DFB\u52A0 ",(0,l.jsx)(n.code,{children:"?csr=true"})," \u6216\u6DFB\u52A0\u8BF7\u6C42\u5934 ",(0,l.jsx)(n.code,{children:"x-modern-ssr-fallback"})," \u5373\u53EF\u5F3A\u5236 CSR\u3002"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"inlineScript"}),"\uFF1A",(0,l.jsx)(n.code,{children:"boolean = true"}),"\uFF0C\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0CSSR \u7684\u6570\u636E\u4F1A\u4EE5\u5185\u8054\u811A\u672C\u7684\u65B9\u5F0F\u6CE8\u5165\u5230 HTML \u4E2D\uFF0C\u5E76\u4E14\u76F4\u63A5\u8D4B\u503C\u7ED9\u5168\u5C40\u53D8\u91CF\u3002\u914D\u7F6E\u4E3A ",(0,l.jsx)(n.code,{children:"false"})," \u540E\uFF0C\u4F1A\u4E0B\u53D1 JSON\uFF0C\u800C\u4E0D\u662F\u8D4B\u503C\u7ED9\u5168\u5C40\u53D8\u91CF\u3002"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"disablePrerender"}),": ",(0,l.jsx)(n.code,{children:"boolean = fasle"}),", \u4E3A\u4E86\u517C\u5BB9\u65E7\u6570\u636E\u8BF7\u6C42\u65B9\u5F0F - ",(0,l.jsx)(n.code,{children:"useLoader"}),", \u9ED8\u8BA4\u60C5\u51B5\u4E0B Modern.js \u4F1A\u5BF9\u7EC4\u4EF6\u8FDB\u884C\u4E00\u6B21\u9884\u6E32\u67D3\u5373\u6709\u4E24\u6B21\u6E32\u67D3\u3002\n\u5F00\u53D1\u8005\u5728\u4FDD\u8BC1\u9879\u76EE\u4E2D\u6CA1\u6709\u4F7F\u7528 useLoader Api \u60C5\u51B5\u4E0B, \u53EF\u901A\u8FC7\u914D\u7F6E ",(0,l.jsx)(n.code,{children:"disablePrerender=true"}),"\u6765\u51CF\u5C11\u4E00\u6B21\u6E32\u67D3\u3002"]}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"export default defineConfig({\n  server: {\n    ssr: {\n      forceCSR: true,\n      mode: 'stream',\n      inlineScript: false,\n      disablePrerender: true,\n    },\n  },\n});\n"})}),"\n",(0,l.jsxs)(n.h3,{id:"\u4E3B\u52A8\u964D\u7EA7",children:["\u4E3B\u52A8\u964D\u7EA7",(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u4E3B\u52A8\u964D\u7EA7",children:"#"})]}),"\n",(0,l.jsx)(n.p,{children:"\u5728\u751F\u4EA7\u73AF\u5883\uFF0C\u6709\u65F6\u9700\u8981\u5C06 SSR \u9879\u76EE\u4E3B\u52A8\u964D\u7EA7\u5230 CSR\uFF0C\u4F8B\u5982\uFF1A"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"SSR \u51FA\u73B0\u6545\u969C\uFF0C\u9700\u8981\u964D\u7EA7\u5230 CSR\uFF0C\u4FDD\u8BC1\u4EA7\u54C1\u53EF\u7528\u6027\u3002"}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"SSR \u6B63\u5E38\u6570\u636E\u83B7\u53D6\u65F6\u9875\u9762\u6E32\u67D3\u6B63\u5E38\uFF0C\u4F46\u51FA\u9519\u964D\u7EA7\u540E\u6E32\u67D3\u5931\u8D25\uFF0C\u9700\u8981\u8FDB\u884C\u8C03\u8BD5\u3002"}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"SSR \u670D\u52A1\u538B\u529B\u8FC7\u5927\uFF0C\u9700\u8981\u90E8\u5206\u6D41\u91CF\u76F4\u63A5\u964D\u7EA7\u4E3A CSR\uFF0C\u907F\u514D\u670D\u52A1\u5B95\u673A\u3002"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:["\u5728\u9879\u76EE\u4E2D\u914D\u7F6E ",(0,l.jsx)(n.code,{children:"server.ssr.forceCSR"})," \u4E3A ",(0,l.jsx)(n.code,{children:"true"})," \u540E\uFF0C\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7\u8BF7\u6C42\u7684\u67E5\u8BE2\u5B57\u7B26\u4E32\uFF0C\u6216\u662F\u8BF7\u6C42\u5934\u6765\u63A7\u5236\u8FD9\u4E00\u884C\u4E3A\u3002"]}),"\n",(0,l.jsx)(n.p,{children:"\u4F8B\u5982\u5728\u81EA\u5B9A\u4E49 Web Server \u7684\u4E2D\u95F4\u4EF6\u4E2D\uFF0C\u68C0\u6D4B\u5230\u6D41\u91CF\u5927\u4E8E\u67D0\u4E00\u9608\u503C\u65F6\uFF0C\u4E3B\u52A8\u964D\u7EA7\uFF1A"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-ts",meta:'title="server/index.ts"',children:"export const middleware = (ctx, next) => {\n  const { req, res } = ctx;\n  if (condition) {\n    req.headers['x-modern-ssr-fallback'] = '1';\n  }\n\n  next();\n};\n"})})]})}(s=globalThis).__RSPRESS_PAGE_META||(s.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["zh%2Fconfigure%2Fapp%2Fserver%2Fssr.mdx"]={toc:[{text:"Boolean \u7C7B\u578B",id:"boolean-\u7C7B\u578B",depth:3},{text:"Object \u7C7B\u578B",id:"object-\u7C7B\u578B",depth:3},{text:"\u4E3B\u52A8\u964D\u7EA7",id:"\u4E3B\u52A8\u964D\u7EA7",depth:3}],title:"server.ssr",frontmatter:{sidebar_label:"ssr"}};var h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,i.useMDXComponents)(),e.components).wrapper;return n?(0,l.jsx)(n,(0,c._)((0,d._)({},e),{children:(0,l.jsx)(o,(0,d._)({},e))})):o(e)}}}]);