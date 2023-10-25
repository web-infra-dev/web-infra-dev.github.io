(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["175"],{34738:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return d},frontmatter:function(){return u}});var r=t("15169"),s=t("43932"),i=t("9880"),a=t("23169");function o(e){var n=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",pre:"pre",code:"code",h3:"h3",ul:"ul",li:"li"},(0,a.useMDXComponents)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.h1,{id:"useruntimecontext",children:["useRuntimeContext",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#useruntimecontext",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"Used to get the runtime context and can only be used in function components."}),"\n",(0,i.jsxs)(n.h2,{id:"usage",children:["Usage",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#usage",children:"#"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:"import { useRuntimeContext } from '@modern-js/runtime';\n\nexport function App() {\n  const runtimeContext = useRuntimeContext();\n  return <div>Hello World</div>;\n}\n"})}),"\n",(0,i.jsxs)(n.h2,{id:"function-signature",children:["Function Signature",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#function-signature",children:"#"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"type RuntimeContext = {\n  request: {\n    params: Record<string, string>;\n    pathname: string;\n    query: Record<string, string>;\n    headers: IncomingHttpHeaders;\n    cookie: string;\n  };\n  store: ReduckStore;\n  router: RemixRouter;\n};\n\nfunction useRuntimeContext(): RuntimeContext;\n"})}),"\n",(0,i.jsxs)(n.h3,{id:"return-value",children:["Return Value",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#return-value",children:"#"})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"request"}),": additional information in the request context.","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"params"}),": dynamic parameters in the request path."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"pathname"}),": the pathname of the request."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"query"}),": the query of the request."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"headers"}),": the header info of the request."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"cookie"}),": the cookie of the request."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"store"}),": when the ",(0,i.jsx)(n.code,{children:"runtime.state"})," is enabled, this value is the Reduck global ",(0,i.jsx)(n.code,{children:"store"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"router"}),": When the ",(0,i.jsx)(n.code,{children:"runtime.router"})," is enabled, this value exists.","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"location"}),": The current location reflected by the router. The same as [",(0,i.jsx)(n.code,{children:"useLocation"}),"] the return value of (/apis/app/runtime/router/router.html#uselocation)."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"navigate"}),": Navigate to the given path. The same as the return value of ",(0,i.jsx)(n.a,{href:"/apis/app/runtime/router/router#usenavigate",children:(0,i.jsx)(n.code,{children:"useNavigate"})}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.h2,{id:"example",children:["Example",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#example",children:"#"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:"import { useRuntimeContext } from '@modern-js/runtime';\nimport { fooModel } from '@/common/models';\n\nfunction App() {\n  const { store } = useRuntimeContext();\n\n  const [state, actions] = store.use(fooModel);\n\n  return <div>state: {state}</div>;\n}\n"})})]})}function c(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,a.useMDXComponents)(),e.components).wrapper;return n?(0,i.jsx)(n,(0,s._)((0,r._)({},e),{children:(0,i.jsx)(o,(0,r._)({},e))})):o(e)}var d=c;c.__RSPRESS_PAGE_META={},c.__RSPRESS_PAGE_META["en%2Fapis%2Fapp%2Fruntime%2Fcore%2Fuse-runtime-context.mdx"]={toc:[{text:"Usage",id:"usage",depth:2},{text:"Function Signature",id:"function-signature",depth:2},{text:"Return Value",id:"return-value",depth:3},{text:"Example",id:"example",depth:2}],title:"useRuntimeContext"};var u={title:"useRuntimeContext"}}}]);