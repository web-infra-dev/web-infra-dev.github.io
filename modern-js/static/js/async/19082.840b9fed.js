(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["19082"],{85801:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return a},frontmatter:function(){return h}});var d=r("15169"),s=r("43932"),c=r("9880"),i=r("23169");function t(e){var n=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",pre:"pre",code:"code",h3:"h3",ul:"ul",li:"li"},(0,i.useMDXComponents)(),e.components);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(n.h1,{id:"render",children:["render",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#render",children:"#"})]}),"\n",(0,c.jsx)(n.p,{children:"\u7528\u4E8E\u5728\u6D4B\u8BD5\u7528\u4F8B\u4E2D\u6E32\u67D3\u7EC4\u4EF6\uFF0C\u5B8C\u6210\u6D4B\u8BD5\u3002"}),"\n",(0,c.jsxs)(n.h2,{id:"\u4F7F\u7528\u59FF\u52BF",children:["\u4F7F\u7528\u59FF\u52BF",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u4F7F\u7528\u59FF\u52BF",children:"#"})]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-ts",children:"import { render } from '@modern-js/runtime/testing';\n"})}),"\n",(0,c.jsxs)(n.h2,{id:"\u51FD\u6570\u7B7E\u540D",children:["\u51FD\u6570\u7B7E\u540D",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u51FD\u6570\u7B7E\u540D",children:"#"})]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-ts",children:"type Options = {\n  container: DOMElement;\n  baseElement: DOMElement;\n  hydrate: boolean;\n  warpper: React.ComponentType<{children: ReactNode}>;\n  queries: any;\n};\n\ntype RenderResult = {\n  {...queries}: any;\n  container: DOMElement;\n  baseElement: DOMElement;\n  debug: function;\n  rerender: function;\n  unmount: function;\n  asFragment: function;\n}\n\nfunction render(ui: React.ReactElement<any>, options: Options): RenderResult;\n"})}),"\n",(0,c.jsxs)(n.h3,{id:"\u53C2\u6570",children:["\u53C2\u6570",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u53C2\u6570",children:"#"})]}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"ui"}),"\uFF1A\u9700\u8981\u88AB\u6E32\u67D3\u7684 React \u7EC4\u4EF6\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"options"}),"\uFF1Arender \u53EF\u9009\u914D\u7F6E\u3002","\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"container"}),"\uFF1A\u8868\u793A\u7EC4\u4EF6\u6240\u8981\u6302\u8F7D\u5230\u7684 DOM \u8282\u70B9\uFF0C\u9ED8\u8BA4\u662F\u4F1A\u521B\u5EFA\u4E00\u4E2A ",(0,c.jsx)(n.code,{children:"div"})," \u5143\u7D20\uFF0C\u5E76\u81EA\u52A8\u6DFB\u52A0\u5230 ",(0,c.jsx)(n.code,{children:"document.body"})," \u4E0A\u3002\u8FD9\u4E2A ",(0,c.jsx)(n.code,{children:"div"})," \u5143\u7D20\u5C31\u662F\u7EC4\u4EF6\u8981\u6302\u8F7D\u7684\u8282\u70B9\u3002\u9ED8\u8BA4\u503C\u662F ",(0,c.jsx)(n.code,{children:"document.body.append(document.createElement('div'))"}),"\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"baseElement"}),"\uFF1A\u7528\u4E8E\u6307\u5B9A ",(0,c.jsx)(n.code,{children:"queries"})," \u4E2D\u4F7F\u7528\u5230\u7684 ",(0,c.jsx)(n.code,{children:"basename"}),"\u3002\u5982\u679C\u6307\u5B9A\u4E86 ",(0,c.jsx)(n.code,{children:"container"}),", \u5219\u9ED8\u8BA4\u503C\u4E3A ",(0,c.jsx)(n.code,{children:"container"})," \u7684\u503C\uFF0C\u5426\u5219\u5C31\u662F ",(0,c.jsx)(n.code,{children:"document.body"}),"\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"hydrate"}),"\uFF1A\u5982\u679C\u8BBE\u7F6E\u4E3A ",(0,c.jsx)(n.code,{children:"true"}),"\uFF0C\u5219\u4F1A\u4F7F\u7528 ",(0,c.jsx)(n.a,{href:"https://zh-hans.react.dev/reference/react-dom/hydrate",target:"_blank",rel:"noopener noreferrer",children:"ReactDOM.hydrate"})," \u6E32\u67D3\u7EC4\u4EF6\u3002\u9ED8\u8BA4\u503C\u4E3A ",(0,c.jsx)(n.code,{children:"false"}),"\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"wrapper"}),"\uFF1A\u662F\u4E00\u4E2A react \u7EC4\u4EF6\uFF0C\u53EF\u7528\u4E8E\u81EA\u5B9A\u4E49\u6E32\u67D3\u903B\u8F91\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"queries"}),"\uFF1A\u81EA\u5B9A\u4E49\u4E00\u4E9B\u81EA\u5DF1\u7684 ",(0,c.jsx)(n.code,{children:"queries"}),"\u3002"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,c.jsxs)(n.h3,{id:"\u8FD4\u56DE\u503C",children:["\u8FD4\u56DE\u503C",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u8FD4\u56DE\u503C",children:"#"})]}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"{...queries}"}),"\uFF1A\u6240\u6709\u53EF\u7528\u7684 ",(0,c.jsx)(n.a,{href:"https://testing-library.com/docs/queries/about/",target:"_blank",rel:"noopener noreferrer",children:"queries"}),"\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"container"}),"\uFF1A\u6302\u8F7D React \u7EC4\u4EF6\u7684 DOM \u8282\u70B9\u3002"]}),"\n",(0,c.jsx)(n.li,{children:(0,c.jsx)(n.code,{children:"baseElement"})}),"\n",(0,c.jsx)(n.li,{children:(0,c.jsx)(n.code,{children:"debug"})}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"rerender"}),"\uFF1A\u5982\u679C\u60F3\u6D4B\u8BD5\u4E00\u4E2A\u5DF2\u6E32\u67D3\u7684\u7EC4\u4EF6\u5728\u5176 props \u66F4\u65B0\u65F6\u7684\u4E00\u4E9B\u573A\u666F\uFF0C\u53EF\u4EE5\u4F7F\u7528 rerender \u6765\u73B0\u5B9E\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"unmount"}),"\uFF1A\u4F1A\u5378\u8F7D\u6389\u5DF2\u6E32\u67D3\u7684\u7EC4\u4EF6\u3002\u5982\u679C\u60F3\u6D4B\u8BD5\u7EC4\u4EF6\u5378\u8F7D\u540E\u7684\u60C5\u51B5\uFF08\u5982\uFF0C\u7ED1\u5B9A\u7684\u4E8B\u4EF6\u662F\u5426\u5728 unmount \u9636\u6BB5\u88AB\u5378\u8F7D\u6389\uFF09\uFF0C\u90A3\u4E48\u8FD9\u4E2A API \u662F\u5F88\u5E2E\u52A9\u7684\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"asFragment"}),"\uFF1A\u8FD4\u56DE\u5F53\u524D\u6E32\u67D3\u7684\u7EC4\u4EF6\u7684 ",(0,c.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment",target:"_blank",rel:"noopener noreferrer",children:"DocumentFragment"})," \u5BF9\u8C61\u3002\u53EF\u7528\u4E8E\u6D4B\u8BD5 react \u4E8B\u4EF6\u89E6\u53D1\u540E DOM \u7ED3\u6784\u7684\u54CD\u5E94\u3002"]}),"\n"]}),"\n",(0,c.jsxs)(n.h2,{id:"\u793A\u4F8B",children:["\u793A\u4F8B",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u793A\u4F8B",children:"#"})]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-ts",children:"import { render } from '@modern-js/runtime/testing';\nimport App from './App';\n\ntest('renders a message', () => {\n  const { container, getByText } = render(<App />);\n  expect(getByText('Hello, world!')).toBeInTheDocument();\n  expect(container.firstChild).toMatchInlineSnapshot(`\n    <h1>Hello, World!</h1>\n  `);\n});\n"})})]})}function l(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,i.useMDXComponents)(),e.components).wrapper;return n?(0,c.jsx)(n,(0,s._)((0,d._)({},e),{children:(0,c.jsx)(t,(0,d._)({},e))})):t(e)}var a=l;l.__RSPRESS_PAGE_META={},l.__RSPRESS_PAGE_META["zh%2Fapis%2Fapp%2Fruntime%2Ftesting%2Frender.mdx"]={toc:[{text:"\u4F7F\u7528\u59FF\u52BF",id:"\u4F7F\u7528\u59FF\u52BF",depth:2},{text:"\u51FD\u6570\u7B7E\u540D",id:"\u51FD\u6570\u7B7E\u540D",depth:2},{text:"\u53C2\u6570",id:"\u53C2\u6570",depth:3},{text:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",depth:3},{text:"\u793A\u4F8B",id:"\u793A\u4F8B",depth:2}],title:"render"};var h={title:"render"}}}]);