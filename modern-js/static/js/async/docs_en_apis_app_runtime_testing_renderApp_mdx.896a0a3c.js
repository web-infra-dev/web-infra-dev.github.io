(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_en_apis_app_runtime_testing_renderApp_mdx"],{69260:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return c}});var t,s=r("15169"),i=r("43932"),a=r("9880"),d=r("23169");function o(e){var n=Object.assign({h1:"h1",a:"a",p:"p",code:"code",h2:"h2",pre:"pre"},(0,d.useMDXComponents)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.h1,{id:"renderapp",children:["renderApp",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#renderapp",children:"#"})]}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"render"})," function is used to test normal components, and the ",(0,a.jsx)(n.code,{children:"renderApp"})," function is used to test App components."]}),"\n",(0,a.jsxs)(n.h2,{id:"usage",children:["Usage",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#usage",children:"#"})]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"import { renderApp } from '@modern-js/runtime/testing';\n"})}),"\n",(0,a.jsx)(n.p,{children:"App components refer to components that contain some Modern.js contexts, such as App root components, Containers using Models, etc."}),"\n",(0,a.jsxs)(n.p,{children:["For the testing of such components, you can use the ",(0,a.jsx)(n.code,{children:"renderApp"})," function, which will automatically wrap the context information according to the current ",(0,a.jsx)(n.code,{children:"modern.config.js"}),"."]}),"\n",(0,a.jsxs)(n.h2,{id:"function-signature",children:["Function Signature",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#function-signature",children:"#"})]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"renderApp"})," is the same as ",(0,a.jsx)(n.a,{href:"/en/apis/app/runtime/testing/render",children:"render"}),"."]}),"\n",(0,a.jsxs)(n.h2,{id:"example",children:["Example",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#example",children:"#"})]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"import { renderApp } from '@modern-js/runtime/testing';\nimport App from './App';\n\ndescribe('test', () => {\n  it('test App', () => {\n    const { getByText } = renderApp(<App />);\n    expect(getByText('Hello Modern!')).toBeInTheDocument();\n  });\n});\n"})})]})}(t=globalThis).__RSPRESS_PAGE_META||(t.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["en%2Fapis%2Fapp%2Fruntime%2Ftesting%2FrenderApp.mdx"]={toc:[{text:"Usage",id:"usage",depth:2},{text:"Function Signature",id:"function-signature",depth:2},{text:"Example",id:"example",depth:2}],title:"renderApp",frontmatter:{title:"renderApp"}};var c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,d.useMDXComponents)(),e.components).wrapper;return n?(0,a.jsx)(n,(0,i._)((0,s._)({},e),{children:(0,a.jsx)(o,(0,s._)({},e))})):o(e)}}}]);