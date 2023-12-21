/*! For license information please see 7977.679950ce.js.LICENSE.txt */
(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["7977"],{61554:function(e,n,s){"use strict";s.r(n),s.d(n,{default:function(){return c}});var r=s("9880"),t=s("23169");function d(e){let n=Object.assign({pre:"pre",code:"code"},(0,t.useMDXComponents)(),e.components);return(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",meta:'title="src/App.tsx"',children:"import { BrowserRouter, Route, Routes } from '@modern-js/runtime/router';\nimport { StaticRouter } from '@modern-js/runtime/router/server';\nimport React from 'react';\nimport { useRuntimeContext } from '@modern-js/runtime';\n\nconst Router = typeof window === 'undefined' ? StaticRouter : BrowserRouter;\n\nexport default () => {\n  const { context } = useRuntimeContext();\n  const pathname = context?.request?.pathname;\n  return (\n    <Router location={pathname}>\n      <Routes>\n        <Route index element={<div>index</div>} />\n        <Route path=\"about\" element={<div>about</div>} />\n      </Routes>\n    </Router>\n  );\n};\n"})})}function i(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,t.useMDXComponents)(),e.components);return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}var c=i;i.__RSPRESS_PAGE_META={},i.__RSPRESS_PAGE_META["zh%2Fcomponents%2Fself-route-example.mdx"]={toc:[],title:"",frontmatter:{}}},98916:function(e,n,s){"use strict";s.r(n),s.d(n,{default:function(){return o}});var r=s("9880"),t=s("23169"),d=s("61554");function i(e){let n=Object.assign({h1:"h1",a:"a",p:"p",code:"code",pre:"pre",strong:"strong",h3:"h3",ul:"ul",li:"li",div:"div"},(0,t.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"\u9759\u6001\u7AD9\u70B9\u751F\u6210",children:["\u9759\u6001\u7AD9\u70B9\u751F\u6210",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u9759\u6001\u7AD9\u70B9\u751F\u6210",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"SSG\uFF08Static Site Generation\uFF09\u662F\u4E00\u79CD\u57FA\u4E8E\u6570\u636E\u4E0E\u6A21\u677F\uFF0C\u5728\u6784\u5EFA\u65F6\u6E32\u67D3\u5B8C\u6574\u9759\u6001\u7F51\u9875\u7684\u6280\u672F\u89E3\u51B3\u65B9\u6848\u3002"}),"\n",(0,r.jsxs)(n.p,{children:["\u6211\u4EEC\u9996\u5148\u9700\u8981\u6267\u884C ",(0,r.jsx)(n.code,{children:"pnpm run new"})," \u542F\u7528 SSG \u529F\u80FD\uFF1A"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"? \u8BF7\u9009\u62E9\u4F60\u60F3\u8981\u7684\u64CD\u4F5C \u542F\u7528\u53EF\u9009\u529F\u80FD\n? \u8BF7\u9009\u62E9\u529F\u80FD\u540D\u79F0 \u542F\u7528\u300CSSG\u300D\u529F\u80FD\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u6267\u884C\u547D\u4EE4\u540E\uFF0C\u5728 ",(0,r.jsx)(n.code,{children:"modern.config.ts"})," \u4E2D\u6CE8\u518C SSG \u63D2\u4EF6\uFF1A"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import { ssgPlugin } from '@modern-js/plugin-ssg';\n\nexport default defineConfig({\n  output: {\n    ssg: true,\n  },\n  plugins: [..., ssgPlugin()],\n});\n"})}),"\n",(0,r.jsxs)(n.p,{children:["SSG \u5728",(0,r.jsx)(n.strong,{children:"\u7EA6\u5B9A\u5F0F\u8DEF\u7531"}),"\u548C",(0,r.jsx)(n.strong,{children:"\u81EA\u63A7\u5F0F\u8DEF\u7531"}),"\u4E0B\u7684\u4F7F\u7528\u65B9\u5F0F\u4E0D\u540C\u3002"]}),"\n",(0,r.jsxs)(n.h3,{id:"\u5728\u7EA6\u5B9A\u5F0F\u8DEF\u7531\u4E2D\u4F7F\u7528",children:["\u5728\u7EA6\u5B9A\u5F0F\u8DEF\u7531\u4E2D\u4F7F\u7528",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u5728\u7EA6\u5B9A\u5F0F\u8DEF\u7531\u4E2D\u4F7F\u7528",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"\u7EA6\u5B9A\u5F0F\u8DEF\u7531"}),"\u4E2D\uFF0C Modern.js \u6839\u636E\u5165\u53E3\u4E0B\u7684\u6587\u4EF6\u7ED3\u6784\u751F\u6210\u8DEF\u7531\uFF0C\u56E0\u6B64\u6846\u67B6\u80FD\u591F\u6536\u96C6\u5B8C\u6574\u7684\u8DEF\u7531\u4FE1\u606F\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u4F8B\u5982\uFF0C\u4EE5\u4E0B\u662F\u4E00\u4E2A\u4F7F\u7528\u7EA6\u5B9A\u5F0F\u8DEF\u7531\u7684\u9879\u76EE\u76EE\u5F55\u7ED3\u6784\uFF1A"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:".\n\u251C\u2500\u2500 src\n\u2502   \u2514\u2500\u2500 routes\n\u2502       \u251C\u2500\u2500 layout.tsx\n\u2502       \u251C\u2500\u2500 page.tsx\n\u2502       \u2514\u2500\u2500 user\n\u2502           \u251C\u2500\u2500 layout.tsx\n\u2502           \u251C\u2500\u2500 page.tsx\n\u2502           \u2514\u2500\u2500 profile\n\u2502               \u2514\u2500\u2500 page.tsx\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u4E0A\u8FF0\u6587\u4EF6\u76EE\u5F55\u5C06\u4F1A\u751F\u6210\u4EE5\u4E0B\u4E09\u6761\u8DEF\u7531\uFF1A"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"/"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"/user"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"/user/profile"})}),"\n"]}),"\n",(0,r.jsxs)(n.div,{className:"rspress-directive note",children:[(0,r.jsx)(n.div,{className:"rspress-directive-title",children:"NOTE"}),(0,r.jsxs)(n.div,{className:"rspress-directive-content",children:[(0,r.jsxs)(n.p,{children:["\u5982\u679C\u8FD8\u4E0D\u4E86\u89E3\u7EA6\u5B9A\u5F0F\u8DEF\u7531\u7684\u89C4\u5219\uFF0C\u53EF\u4EE5\u5148\u67E5\u770B",(0,r.jsx)(n.a,{href:"/guides/basic-features/routes",children:"\u8DEF\u7531\u65B9\u6848"}),"\u3002"]}),"\n"]})]}),"\n",(0,r.jsxs)(n.p,{children:["\u5728 ",(0,r.jsx)(n.code,{children:"src/routes/page.tsx"})," \u4E2D\u6DFB\u52A0\u7EC4\u4EF6\u4EE3\u7801\uFF1A"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-jsx",meta:'title="src/routes/page.tsx"',children:"export default () => {\n  return <div>Index Page</div>;\n};\n"})}),"\n",(0,r.jsxs)(n.p,{children:["SSG \u4E5F\u662F\u5728 Node.js \u73AF\u5883\u6E32\u67D3\u9875\u9762\uFF0C\u56E0\u6B64\u6211\u4EEC\u53EF\u4EE5\u5728",(0,r.jsx)(n.strong,{children:"\u5F00\u53D1\u9636\u6BB5\u5F00\u542F SSR"}),"\uFF0C\u63D0\u524D\u5728\u66B4\u9732\u4EE3\u7801\u95EE\u9898\uFF0C\u9A8C\u8BC1 SSG \u6E32\u67D3\u6548\u679C\uFF1A"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"export default defineConfig({\n  server: {\n    ssr: process.env.NODE_ENV === 'development',\n  }\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u5728\u9879\u76EE\u6839\u8DEF\u5F84\u4E0B\u6267\u884C ",(0,r.jsx)(n.code,{children:"pnpm run dev"})," \u547D\u4EE4\uFF0C\u67E5\u770B ",(0,r.jsx)(n.code,{children:"dist/"})," \u76EE\u5F55\uFF0C\u6B64\u65F6\u53EA\u751F\u6210\u4E00\u4E2A HTML \u6587\u4EF6 ",(0,r.jsx)(n.code,{children:"main/index.html"}),"\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u5728\u9879\u76EE\u6839\u8DEF\u5F84\u4E0B\u6267\u884C ",(0,r.jsx)(n.code,{children:"pnpm run build"})," \u547D\u4EE4\uFF0C\u6784\u5EFA\u5B8C\u6210\u540E\uFF0C\u67E5\u770B ",(0,r.jsx)(n.code,{children:"dist/"})," \u76EE\u5F55\uFF0C\u6B64\u65F6\u751F\u6210 ",(0,r.jsx)(n.code,{children:"main/index.html"}),"\u3001",(0,r.jsx)(n.code,{children:"main/user/index.html"})," \u548C ",(0,r.jsx)(n.code,{children:"main/user/profile/index.html"})," \u4E09\u4E2A HTML \u6587\u4EF6\uFF0C\u5185\u5BB9\u5206\u522B\u5BF9\u5E94\u4E0A\u8FF0\u4E09\u6761\u8DEF\u7531\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"\u7EA6\u5B9A\u5F0F\u8DEF\u7531"}),"\u4E2D\u7684\u6BCF\u4E00\u6761\u8DEF\u7531\uFF0C\u90FD\u4F1A\u751F\u6210\u4E00\u4E2A\u5355\u72EC\u7684 HTML \u6587\u4EF6\u3002\u67E5\u770B ",(0,r.jsx)(n.code,{children:"main/index.html"}),"\uFF0C\u53EF\u4EE5\u53D1\u73B0\u5305\u542B ",(0,r.jsx)(n.code,{children:"Index Page"})," \u7684\u6587\u672C\u5185\u5BB9\uFF0C\u8FD9\u6B63\u662F SSG \u7684\u6548\u679C\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u6267\u884C ",(0,r.jsx)(n.code,{children:"pnpm run serve"})," \u542F\u52A8\u9879\u76EE\u540E\uFF0C\u8BBF\u95EE\u9875\u9762\uFF0C\u5728\u6D4F\u89C8\u5668\u6211\u4EEC\u5DE5\u5177\u7684 Network \u7A97\u53E3\uFF0C\u67E5\u770B\u8BF7\u6C42\u8FD4\u56DE\u7684\u6587\u6863\uFF0C\u6587\u6863\u5305\u542B\u7EC4\u4EF6\u6E32\u67D3\u540E\u7684\u5B8C\u6574\u9875\u9762\u5185\u5BB9\u3002"]}),"\n",(0,r.jsxs)(n.h3,{id:"\u5728\u81EA\u63A7\u5F0F\u8DEF\u7531\u4E2D\u4F7F\u7528",children:["\u5728\u81EA\u63A7\u5F0F\u8DEF\u7531\u4E2D\u4F7F\u7528",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u5728\u81EA\u63A7\u5F0F\u8DEF\u7531\u4E2D\u4F7F\u7528",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"\u81EA\u63A7\u5F0F\u8DEF\u7531"}),"\u662F\u901A\u8FC7\u7EC4\u4EF6\u4EE3\u7801\u5B9A\u4E49\u8DEF\u7531\uFF0C\u9700\u8981\u5E94\u7528\u8FD0\u884C\u8D77\u6765\u624D\u80FD\u83B7\u53D6\u51C6\u786E\u7684\u8DEF\u7531\u4FE1\u606F\u3002\u56E0\u6B64\uFF0C\u65E0\u6CD5\u5F00\u7BB1\u5373\u7528\u7684\u4F7F\u7528 SSG \u529F\u80FD\u3002\u6B64\u65F6\u9700\u8981\u7528\u6237\u63D0\u524D\u544A\u77E5 Modern.js \u6846\u67B6\uFF0C\u54EA\u4E9B\u8DEF\u7531\u9700\u8981\u5F00\u542F SSG \u529F\u80FD\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u4F8B\u5982\u6709\u4EE5\u4E0B\u4EE3\u7801\uFF0C\u5305\u542B\u591A\u6761\u8DEF\u7531\uFF0C\u8BBE\u7F6E ",(0,r.jsx)(n.code,{children:"output.ssg"})," \u4E3A ",(0,r.jsx)(n.code,{children:"true"})," \u65F6\uFF0C\u9ED8\u8BA4\u53EA\u4F1A\u6E32\u67D3\u5165\u53E3\u8DEF\u7531\u5373 ",(0,r.jsx)(n.code,{children:"/"}),"\uFF1A"]}),"\n","\n",(0,r.jsx)(d.default,{}),"\n",(0,r.jsxs)(n.p,{children:["\u5982\u679C\u6211\u4EEC\u5E0C\u671B\u540C\u65F6\u5F00\u542F ",(0,r.jsx)(n.code,{children:"/about"})," \u7684 SSG \u529F\u80FD\uFF0C\u53EF\u4EE5\u914D\u7F6E ",(0,r.jsx)(n.code,{children:"output.ssg"}),"\uFF0C\u544A\u77E5 Modern.js \u5F00\u542F\u6307\u5B9A\u8DEF\u7531\u7684 SSG \u529F\u80FD\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"export default defineConfig({\n  output: {\n    ssg: {\n      routes: ['/', '/about'],\n    },\n  },\n});\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u6267\u884C ",(0,r.jsx)(n.code,{children:"pnpm run build"})," \u4E0E ",(0,r.jsx)(n.code,{children:"pnpm run serve"})," \u540E\uFF0C\u8BBF\u95EE ",(0,r.jsx)(n.code,{children:"http://localhost:8080/about"}),"\uFF0C\u5728 Preview \u89C6\u56FE\u4E2D\u53EF\u4EE5\u770B\u5230\u9875\u9762\u5DF2\u7ECF\u5B8C\u6210\u6E32\u67D3\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u67E5\u770B\u6784\u5EFA\u4EA7\u7269\u6587\u4EF6\uFF0C\u53EF\u4EE5\u770B\u5230 ",(0,r.jsx)(n.code,{children:"dist/"})," \u76EE\u5F55\u4E2D\uFF0C\u65B0\u589E\u4E86\u4E00\u4E2A ",(0,r.jsx)(n.code,{children:"main/about/index.html"})," \u6587\u4EF6\u3002"]}),"\n",(0,r.jsxs)(n.div,{className:"rspress-directive info",children:[(0,r.jsx)(n.div,{className:"rspress-directive-title",children:"INFO"}),(0,r.jsxs)(n.div,{className:"rspress-directive-content",children:[(0,r.jsxs)(n.p,{children:["\u4EE5\u4E0A\u4EC5\u4ECB\u7ECD\u4E86\u5355\u5165\u53E3\u7684\u60C5\u51B5\uFF0C\u66F4\u591A\u76F8\u5173\u5185\u5BB9\u53EF\u4EE5\u67E5\u770B ",(0,r.jsx)(n.a,{href:"/configure/app/output/ssg",children:"API \u6587\u6863"}),"\u3002"]}),"\n"]})]})]})}function c(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,t.useMDXComponents)(),e.components);return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}var o=c;c.__RSPRESS_PAGE_META={},c.__RSPRESS_PAGE_META["zh%2Fguides%2Fadvanced-features%2Fssg.mdx"]={toc:[{text:"\u5728\u7EA6\u5B9A\u5F0F\u8DEF\u7531\u4E2D\u4F7F\u7528",id:"\u5728\u7EA6\u5B9A\u5F0F\u8DEF\u7531\u4E2D\u4F7F\u7528",depth:3},{text:"\u5728\u81EA\u63A7\u5F0F\u8DEF\u7531\u4E2D\u4F7F\u7528",id:"\u5728\u81EA\u63A7\u5F0F\u8DEF\u7531\u4E2D\u4F7F\u7528",depth:3}],title:"\u9759\u6001\u7AD9\u70B9\u751F\u6210",frontmatter:{sidebar_position:5}}}}]);