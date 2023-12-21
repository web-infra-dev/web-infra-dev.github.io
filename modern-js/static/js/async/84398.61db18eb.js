/*! For license information please see 84398.61db18eb.js.LICENSE.txt */
(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["84398"],{6460:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return c}});var t=r("9880"),s=r("23169");function i(e){let n=Object.assign({h1:"h1",a:"a",p:"p",code:"code",h2:"h2",pre:"pre"},(0,s.useMDXComponents)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.h1,{id:"renderapp",children:["renderApp",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#renderapp",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"render"})," function is used to test normal components, and the ",(0,t.jsx)(n.code,{children:"renderApp"})," function is used to test App components."]}),"\n",(0,t.jsxs)(n.h2,{id:"usage",children:["Usage",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#usage",children:"#"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"import { renderApp } from '@modern-js/runtime/testing';\n"})}),"\n",(0,t.jsx)(n.p,{children:"App components refer to components that contain some Modern.js contexts, such as App root components, Containers using Models, etc."}),"\n",(0,t.jsxs)(n.p,{children:["For the testing of such components, you can use the ",(0,t.jsx)(n.code,{children:"renderApp"})," function, which will automatically wrap the context information according to the current ",(0,t.jsx)(n.code,{children:"modern.config.js"}),"."]}),"\n",(0,t.jsxs)(n.h2,{id:"function-signature",children:["Function Signature",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#function-signature",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"renderApp"})," is the same as ",(0,t.jsx)(n.a,{href:"/en/apis/app/runtime/testing/render",children:"render"}),"."]}),"\n",(0,t.jsxs)(n.h2,{id:"example",children:["Example",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#example",children:"#"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"import { renderApp } from '@modern-js/runtime/testing';\nimport App from './App';\n\ndescribe('test', () => {\n  it('test App', () => {\n    const { getByText } = renderApp(<App />);\n    expect(getByText('Hello Modern!')).toBeInTheDocument();\n  });\n});\n"})})]})}function d(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,s.useMDXComponents)(),e.components);return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(i,{...e})}):i(e)}var c=d;d.__RSPRESS_PAGE_META={},d.__RSPRESS_PAGE_META["en%2Fapis%2Fapp%2Fruntime%2Ftesting%2FrenderApp.mdx"]={toc:[{text:"Usage",id:"usage",depth:2},{text:"Function Signature",id:"function-signature",depth:2},{text:"Example",id:"example",depth:2}],title:"renderApp",frontmatter:{title:"renderApp"}}}}]);