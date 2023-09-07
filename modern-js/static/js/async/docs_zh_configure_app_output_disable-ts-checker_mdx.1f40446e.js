(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_configure_app_output_disable-ts-checker_mdx"],{84e3:function(e,n,s){"use strict";s.r(n),s.d(n,{default:function(){return a}});var r,i=s("15169"),c=s("43932"),d=s("9880"),t=s("23169");function l(e){var n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",h3:"h3",a:"a",pre:"pre",div:"div"},(0,t.useMDXComponents)(),e.components);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"\u7C7B\u578B\uFF1A"})," ",(0,d.jsx)(n.code,{children:"boolean"})]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"\u9ED8\u8BA4\u503C\uFF1A"})," ",(0,d.jsx)(n.code,{children:"false"})]}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:"\u662F\u5426\u7981\u7528\u7F16\u8BD1\u8FC7\u7A0B\u4E2D\u7684 TypeScript \u7C7B\u578B\u68C0\u67E5\u3002"}),"\n",(0,d.jsxs)(n.p,{children:["\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0CBuilder \u6267\u884C\u6784\u5EFA\u7684\u8FC7\u7A0B\u4E2D\uFF0C\u4F1A\u5728\u4E00\u4E2A\u72EC\u7ACB\u7684\u8FDB\u7A0B\u91CC\u8FD0\u884C TypeScript \u7C7B\u578B\u68C0\u67E5\u5DE5\u5177\uFF0C\u5B83\u7684\u68C0\u67E5\u903B\u8F91\u4E0E TypeScript \u539F\u751F\u7684 ",(0,d.jsx)(n.code,{children:"tsc"})," \u547D\u4EE4\u4E00\u81F4\uFF0C\u4F60\u53EF\u4EE5\u901A\u8FC7 ",(0,d.jsx)(n.code,{children:"tsconfig.json"})," \u6216\u662F Builder \u7684 ",(0,d.jsx)(n.code,{children:"tools.tsChecker"})," \u914D\u7F6E\u9879\u6765\u81EA\u5B9A\u4E49\u68C0\u67E5\u884C\u4E3A\u3002"]}),"\n",(0,d.jsxs)(n.h3,{id:"\u963B\u585E\u7F16\u8BD1",children:["\u963B\u585E\u7F16\u8BD1",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u963B\u585E\u7F16\u8BD1",children:"#"})]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"\u5728\u5F00\u53D1\u73AF\u5883\u6784\u5EFA\u65F6\uFF0C\u7C7B\u578B\u9519\u8BEF\u4E0D\u4F1A\u963B\u585E\u7F16\u8BD1\u6D41\u7A0B\u3002"}),"\n",(0,d.jsx)(n.li,{children:"\u5728\u751F\u4EA7\u73AF\u5883\u6784\u5EFA\u65F6\uFF0C\u7C7B\u578B\u9519\u8BEF\u4F1A\u5BFC\u81F4\u6784\u5EFA\u5931\u8D25\uFF0C\u4EE5\u4FDD\u8BC1\u751F\u4EA7\u73AF\u5883\u4EE3\u7801\u7684\u7A33\u5B9A\u6027\u3002"}),"\n"]}),"\n",(0,d.jsxs)(n.h3,{id:"\u793A\u4F8B",children:["\u793A\u4F8B",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u793A\u4F8B",children:"#"})]}),"\n",(0,d.jsx)(n.p,{children:"\u7981\u7528 TypeScript \u7C7B\u578B\u68C0\u67E5\uFF1A"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-js",children:"export default {\n  output: {\n    disableTsChecker: true,\n  },\n};\n"})}),"\n",(0,d.jsx)(n.p,{children:"\u7981\u7528\u5F00\u53D1\u73AF\u5883\u6784\u5EFA\u65F6\u7684\u7C7B\u578B\u68C0\u67E5\uFF1A"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-js",children:"export default {\n  output: {\n    disableTsChecker: process.env.NODE_ENV === 'development',\n  },\n};\n"})}),"\n",(0,d.jsx)(n.p,{children:"\u7981\u7528\u751F\u4EA7\u73AF\u5883\u6784\u5EFA\u65F6\u7684\u7C7B\u578B\u68C0\u67E5\uFF1A"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-js",children:"export default {\n  output: {\n    disableTsChecker: process.env.NODE_ENV === 'production',\n  },\n};\n"})}),"\n",(0,d.jsxs)(n.div,{className:"modern-directive tip",children:[(0,d.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,d.jsx)(n.div,{className:"modern-directive-content",children:(0,d.jsx)(n.p,{children:"\u4E0D\u5EFA\u8BAE\u5728\u751F\u4EA7\u73AF\u5883\u6784\u5EFA\u65F6\u7981\u7528\u7C7B\u578B\u68C0\u67E5\uFF0C\u8FD9\u4F1A\u5BFC\u81F4\u7EBF\u4E0A\u4EE3\u7801\u7684\u7A33\u5B9A\u6027\u4E0B\u964D\uFF0C\u8BF7\u8C28\u614E\u4F7F\u7528\u3002"})})]})]})}(r=globalThis).__RSPRESS_PAGE_META||(r.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["..%2F..%2Fbuilder-doc%2Fdocs%2Fzh%2Fconfig%2Foutput%2FdisableTsChecker.md"]={toc:[{text:"\u963B\u585E\u7F16\u8BD1",id:"\u963B\u585E\u7F16\u8BD1",depth:3},{text:"\u793A\u4F8B",id:"\u793A\u4F8B",depth:3}],title:"",frontmatter:{}};var a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,t.useMDXComponents)(),e.components).wrapper;return n?(0,d.jsx)(n,(0,c._)((0,i._)({},e),{children:(0,d.jsx)(l,(0,i._)({},e))})):l(e)}},42688:function(e,n,s){"use strict";s.r(n),s.d(n,{default:function(){return o}});var r,i=s("15169"),c=s("43932"),d=s("9880"),t=s("23169"),l=s("84000");function a(e){var n=Object.assign({h1:"h1",a:"a",div:"div",p:"p"},(0,t.useMDXComponents)(),e.components);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.h1,{id:"outputdisabletschecker",children:["output.disableTsChecker",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#outputdisabletschecker",children:"#"})]}),"\n",(0,d.jsxs)(n.div,{className:"modern-directive tip",children:[(0,d.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,d.jsx)(n.div,{className:"modern-directive-content",children:(0,d.jsxs)(n.p,{children:["\u8BE5\u914D\u7F6E\u7531 Modern.js Builder \u63D0\u4F9B\uFF0C\u66F4\u591A\u4FE1\u606F\u53EF\u53C2\u8003 ",(0,d.jsx)(n.a,{href:"https://modernjs.dev/builder/api/config-output.html#outputdisabletschecker",target:"_blank",rel:"noopener noreferrer",children:"output.disableTsChecker"}),"\u3002\n"]})})]}),"\n","\n",(0,d.jsx)(l.default,{})]})}(r=globalThis).__RSPRESS_PAGE_META||(r.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["zh%2Fconfigure%2Fapp%2Foutput%2Fdisable-ts-checker.mdx"]={toc:[],title:"output.disableTsChecker",frontmatter:{sidebar_label:"disableTsChecker"}};var o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,t.useMDXComponents)(),e.components).wrapper;return n?(0,d.jsx)(n,(0,c._)((0,i._)({},e),{children:(0,d.jsx)(a,(0,i._)({},e))})):a(e)}}}]);