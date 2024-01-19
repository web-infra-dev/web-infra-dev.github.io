/*! For license information please see 42341.a95a99a9.js.LICENSE.txt */
(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["42341"],{5690:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return c}});var s=r("39980"),t=r("96954");function i(e){let n=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",pre:"pre",code:"code",h3:"h3",ul:"ul",li:"li"},(0,t.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h1,{id:"useruntimecontext",children:["useRuntimeContext",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#useruntimecontext",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"\u8BE5\u51FD\u6570\u4E3B\u8981\u7528\u4E8E\u83B7\u53D6 Runtime \u4E0A\u4E0B\u6587\uFF0C\u53EA\u80FD\u5728\u51FD\u6570\u7EC4\u4EF6\u4E2D\u4F7F\u7528\u3002"}),"\n",(0,s.jsxs)(n.h2,{id:"\u4F7F\u7528\u59FF\u52BF",children:["\u4F7F\u7528\u59FF\u52BF",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u4F7F\u7528\u59FF\u52BF",children:"#"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:"import { useRuntimeContext } from '@modern-js/runtime';\n\nexport function App() {\n  const runtimeContext = useRuntimeContext();\n  return <div>Hello World</div>;\n}\n"})}),"\n",(0,s.jsxs)(n.h2,{id:"\u51FD\u6570\u7B7E\u540D",children:["\u51FD\u6570\u7B7E\u540D",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u51FD\u6570\u7B7E\u540D",children:"#"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"type RuntimeContext = {\n  request: {\n    params: Record<string, string>;\n    pathname: string;\n    query: Record<string, string>;\n    headers: IncomingHttpHeaders;\n    cookie: string;\n  };\n  store: ReduckStore;\n  router: RemixRouter;\n};\n\nfunction useRuntimeContext(): RuntimeContext;\n"})}),"\n",(0,s.jsxs)(n.h3,{id:"\u8FD4\u56DE\u503C",children:["\u8FD4\u56DE\u503C",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u8FD4\u56DE\u503C",children:"#"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"request"}),"\uFF1A\u8BF7\u6C42\u4E0A\u4E0B\u6587\u4E2D\u7684\u9644\u52A0\u4FE1\u606F\u3002","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"params"}),"\uFF1A\u8BF7\u6C42\u8DEF\u5F84\u4E2D\u7684\u52A8\u6001\u53C2\u6570\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"pathname"}),"\uFF1A\u8BF7\u6C42\u7684 pathname\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"query"}),"\uFF1A\u8BF7\u6C42\u7684\u67E5\u8BE2\u5B57\u7B26\u4E32\u5BF9\u8C61\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"headers"}),"\uFF1A\u8BF7\u6C42\u5934\u4FE1\u606F\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"cookie"}),"\uFF1A\u8BF7\u6C42\u7684 cookie \u4FE1\u606F\u3002"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"store"}),"\uFF1A\u5728\u5F00\u542F\u4E86 state \u63D2\u4EF6\u7684\u65F6\u5019\uFF0C\u8BE5\u503C\u4E3A Reduck \u5168\u5C40 ",(0,s.jsx)(n.code,{children:"store"}),"\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"router"}),"\uFF1A\u5728\u5F00\u542F router \u63D2\u4EF6\u7684\u65F6\u5019\u5B58\u5728\u3002","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"location"}),"\uFF1A\u5F53\u524D\u8DEF\u7531\u5BF9\u5E94\u7684\u4F4D\u7F6E\u4FE1\u606F\u3002\u540C ",(0,s.jsx)(n.a,{href:"/apis/app/runtime/router/router#uselocation",children:(0,s.jsx)(n.code,{children:"useLocation"})})," \u8FD4\u56DE\u503C\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"navigate"}),"\uFF1A\u5BFC\u822A\u5230\u7ED9\u5B9A\u8DEF\u5F84\u3002\u540C ",(0,s.jsx)(n.a,{href:"/apis/app/runtime/router/router#usenavigate",children:(0,s.jsx)(n.code,{children:"useNavigate"})})," \u8FD4\u56DE\u503C\u3002"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.h2,{id:"\u793A\u4F8B",children:["\u793A\u4F8B",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u793A\u4F8B",children:"#"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:"import { useRuntimeContext } from '@modern-js/runtime';\nimport { fooModel } from '@/common/models';\n\nfunction App() {\n  const { store } = useRuntimeContext();\n\n  const [state, actions] = store.use(fooModel);\n\n  return <div>state: {state}</div>;\n}\n"})})]})}function d(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,t.useMDXComponents)(),e.components);return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(i,{...e})}):i(e)}var c=d;d.__RSPRESS_PAGE_META={},d.__RSPRESS_PAGE_META["zh%2Fapis%2Fapp%2Fruntime%2Fcore%2Fuse-runtime-context.mdx"]={toc:[{text:"\u4F7F\u7528\u59FF\u52BF",id:"\u4F7F\u7528\u59FF\u52BF",depth:2},{text:"\u51FD\u6570\u7B7E\u540D",id:"\u51FD\u6570\u7B7E\u540D",depth:2},{text:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",depth:3},{text:"\u793A\u4F8B",id:"\u793A\u4F8B",depth:2}],title:"useRuntimeContext",frontmatter:{title:"useRuntimeContext"}}}}]);