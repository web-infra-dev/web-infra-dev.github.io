(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_apis_app_runtime_testing_act_mdx"],{77659:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return o}});var r,a=t("15169"),s=t("43932"),c=t("9880"),i=t("23169");function d(e){var n=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",pre:"pre",code:"code"},(0,i.useMDXComponents)(),e.components);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(n.h1,{id:"act",children:["act",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#act",children:"#"})]}),"\n",(0,c.jsx)(n.p,{children:"\u7528\u4E8E\u786E\u4FDD\u6E32\u67D3\u3001\u4E8B\u4EF6\u3001\u6570\u636E\u83B7\u53D6\u7B49\u884C\u4E3A\u5DF2\u7ECF\u5E94\u7528\u5728 DOM \u4E0A\u3002"}),"\n",(0,c.jsxs)(n.h2,{id:"\u4F7F\u7528\u59FF\u52BF",children:["\u4F7F\u7528\u59FF\u52BF",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u4F7F\u7528\u59FF\u52BF",children:"#"})]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-ts",children:"import { act } from '@modern-js/runtime/testing';\n"})}),"\n",(0,c.jsxs)(n.h2,{id:"\u51FD\u6570\u7B7E\u540D",children:["\u51FD\u6570\u7B7E\u540D",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u51FD\u6570\u7B7E\u540D",children:"#"})]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"act"})," \u548C ",(0,c.jsx)(n.a,{href:"https://reactjs.org/docs/testing-recipes.html#act",target:"_blank",rel:"noopener noreferrer",children:"react-dom/test-utils act \u51FD\u6570"})," \u662F\u4E00\u81F4\u7684\u3002"]}),"\n",(0,c.jsxs)(n.h2,{id:"\u793A\u4F8B",children:["\u793A\u4F8B",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u793A\u4F8B",children:"#"})]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-tsx",children:"import ReactDOM from 'react-dom';\nimport { act } from '@modern-js/runtime/testing';\nimport { Foo } from '@/components/Foo';\n\ndescribe('test act', () => {\n  it('it should be foo', () => {\n    const el = document.createElement('div');\n    act(() => {\n      ReactDOM.render(<Foo />, el);\n    });\n\n    expect(el.innerHTML).toBe('<div>Foo</div>');\n  });\n});\n"})})]})}(r=globalThis).__RSPRESS_PAGE_META||(r.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["zh%2Fapis%2Fapp%2Fruntime%2Ftesting%2Fact.mdx"]={toc:[{text:"\u4F7F\u7528\u59FF\u52BF",id:"\u4F7F\u7528\u59FF\u52BF",depth:2},{text:"\u51FD\u6570\u7B7E\u540D",id:"\u51FD\u6570\u7B7E\u540D",depth:2},{text:"\u793A\u4F8B",id:"\u793A\u4F8B",depth:2}],title:"act",frontmatter:{title:"act"}};var o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,i.useMDXComponents)(),e.components).wrapper;return n?(0,c.jsx)(n,(0,s._)((0,a._)({},e),{children:(0,c.jsx)(d,(0,a._)({},e))})):d(e)}}}]);