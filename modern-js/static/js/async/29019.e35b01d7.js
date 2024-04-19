/*! For license information please see 29019.e35b01d7.js.LICENSE.txt */
(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["29019"],{70913:function(e,n,r){"use strict";r.r(n);var s=r("39980"),i=r("9580");function a(e){let n=Object.assign({h1:"h1",a:"a",p:"p",code:"code",div:"div",h2:"h2",pre:"pre",h3:"h3",ul:"ul",li:"li"},(0,i.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h1,{id:"useloader",children:["useLoader",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#useloader",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"useLoader"})," is an Isomorphic API, usually used to make asynchronous requests. During Server-Side Rendering (SSR), the server uses ",(0,s.jsx)(n.code,{children:"useLoader"})," to prefetch the data, which is then reused on the client side."]}),"\n",(0,s.jsxs)(n.div,{className:"rspress-directive tip",children:[(0,s.jsx)(n.div,{className:"rspress-directive-title",children:"TIP"}),(0,s.jsx)(n.div,{className:"rspress-directive-content",children:(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"useLoader"})," API is currently not supported when using Rspack as the bundler.\n"]})})]}),"\n",(0,s.jsxs)(n.h2,{id:"usage",children:["Usage",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#usage",children:"#"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"import { useLoader } from '@modern-js/runtime';\n"})}),"\n",(0,s.jsxs)(n.h2,{id:"function-signature",children:["Function Signature",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#function-signature",children:"#"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"type LoaderFn = (context: runtimeContext) => Promise<unknow>;\ntype Options = {\n  onSuccess: (data: Record<string, any>) => void;\n  onError: (error: Error) => void;\n  initialData: Record<string, any>;\n  skip: boolean;\n  params: Record<string, any>;\n  static: boolean;\n};\ntype ReturnData = {\n  data: Record<string, any>;\n  loading: boolean;\n  error: Error;\n  reload: (params?: Record<string, any>) => Promise<any> | undefined;\n  reloading: boolean;\n};\n\nfunction useLoader(loaderFn: LoaderFn, options: Options): ReturnData;\n"})}),"\n",(0,s.jsxs)(n.div,{className:"rspress-directive info",children:[(0,s.jsx)(n.div,{className:"rspress-directive-title",children:"INFO"}),(0,s.jsxs)(n.div,{className:"rspress-directive-content",children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"runtimeContext"})," can refer to ",(0,s.jsx)(n.a,{href:"/apis/app/runtime/core/use-runtime-context",children:"useRuntimeContext"}),"."]}),"\n"]})]}),"\n",(0,s.jsxs)(n.h3,{id:"input",children:["Input",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#input",children:"#"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"loaderFn"}),": function for loading data, returning a Promise."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"options"}),": optional configuration.","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"onSuccess"}),": successful callback."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"onError"}),": error callback."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"initialData"}),": the initial data before the first execution,."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"skip"}),": when the value is ",(0,s.jsx)(n.code,{children:"true"}),", the function does not execute."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"params"}),": when the result of the ",(0,s.jsx)(n.code,{children:"params"})," serialization changes, the function is re-executed. ",(0,s.jsx)(n.code,{children:"params"})," is also passed in as the second argument of the function."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"static"}),": when the value is ",(0,s.jsx)(n.code,{children:"true"}),", ",(0,s.jsx)(n.code,{children:"useLoader"})," is used for ",(0,s.jsx)(n.a,{href:"/guides/advanced-features/ssg",children:"SSG"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.h3,{id:"return-value",children:["Return Value",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#return-value",children:"#"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"data"}),": return data on successful execution."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"loading"}),": indicates whether the function is in execution."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"error"}),": error message when function execution fails."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"reload"}),": the function can be re-executed after the call.","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"params"}),": when the value is ",(0,s.jsx)(n.code,{children:"undefined"}),", the last value will be reused; otherwise, the function will be re-executed with the new value."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"reloading"}),": during the execution of the call to ",(0,s.jsx)(n.code,{children:"reload"}),", the value of ",(0,s.jsx)(n.code,{children:"reloading"})," is ",(0,s.jsx)(n.code,{children:"true"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.h2,{id:"example",children:["Example",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#example",children:"#"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"function Container() {\n  const { data, error, loading } = useLoader(\n    async (context, params) => {\n      console.log(params) // nicole\n      return fetch(user);\n    },\n    {\n      onSuccess: data => {\n        console.log('I did success:(',  data);\n      },\n      onError: error => {\n        console.log('I met error:)',  error);\n      },\n      initialData: { name: 'nicole', gender: 'female' },\n      params: 'nicole'\n    }\n  );\n\n  return ...;\n}\n"})})]})}function d(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}n.default=d,d.__RSPRESS_PAGE_META={},d.__RSPRESS_PAGE_META["en%2Fapis%2Fapp%2Fruntime%2Fcore%2Fuse-loader.mdx"]={toc:[{text:"Usage",id:"usage",depth:2},{text:"Function Signature",id:"function-signature",depth:2},{text:"Input",id:"input",depth:3},{text:"Return Value",id:"return-value",depth:3},{text:"Example",id:"example",depth:2}],title:"useLoader",frontmatter:{title:"useLoader"}}}}]);