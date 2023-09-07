(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_en_apis_app_runtime_testing_act_mdx"],{58913:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return d}});var a,r=t("15169"),s=t("43932"),i=t("9880"),c=t("23169");function o(e){var n=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",pre:"pre",code:"code"},(0,c.useMDXComponents)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.h1,{id:"act",children:["act",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#act",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"Used to ensure that behaviors such as rendering, events, data fetching, etc. have been applied to the DOM."}),"\n",(0,i.jsxs)(n.h2,{id:"usage",children:["Usage",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#usage",children:"#"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"import { act } from '@modern-js/runtime/testing';\n"})}),"\n",(0,i.jsxs)(n.h2,{id:"function-signature",children:["Function Signature",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#function-signature",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"act"})," is the same as ",(0,i.jsx)(n.a,{href:"https://reactjs.org/docs/testing-recipes.html#act",target:"_blank",rel:"noopener noreferrer",children:"react-dom/test-utils act function"}),"."]}),"\n",(0,i.jsxs)(n.h2,{id:"example",children:["Example",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#example",children:"#"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:"import ReactDOM from 'react-dom';\nimport { act } from '@modern-js/runtime/testing';\nimport { Foo } from '@/components/Foo';\n\ndescribe('test act', () => {\n  it('it should be foo', () => {\n    const el = document.createElement('div');\n    act(() => {\n      ReactDOM.render(<Foo />, el);\n    });\n\n    expect(el.innerHTML).toBe('<div>Foo</div>');\n  });\n});\n"})})]})}(a=globalThis).__RSPRESS_PAGE_META||(a.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["en%2Fapis%2Fapp%2Fruntime%2Ftesting%2Fact.mdx"]={toc:[{text:"Usage",id:"usage",depth:2},{text:"Function Signature",id:"function-signature",depth:2},{text:"Example",id:"example",depth:2}],title:"act",frontmatter:{title:"act"}};var d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,c.useMDXComponents)(),e.components).wrapper;return n?(0,i.jsx)(n,(0,s._)((0,r._)({},e),{children:(0,i.jsx)(o,(0,r._)({},e))})):o(e)}}}]);