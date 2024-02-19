/*! For license information please see 136.bf7db16e.js.LICENSE.txt */
(self.webpackChunk_modern_js_module_tools_docs=self.webpackChunk_modern_js_module_tools_docs||[]).push([["136"],{16293:function(e,s,n){"use strict";n.r(s);var r=n("39980"),t=n("96954");function i(e){let s=Object.assign({h1:"h1",a:"a",p:"p",div:"div",code:"code",h2:"h2",ul:"ul",li:"li",pre:"pre"},(0,t.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.h1,{id:"testing",children:["testing",(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#testing",children:"#"})]}),"\n",(0,r.jsx)(s.p,{children:"\u672C\u7AE0\u63CF\u8FF0\u4E86\u6D4B\u8BD5\u76F8\u5173\u7684\u914D\u7F6E\u3002"}),"\n",(0,r.jsxs)(s.div,{className:"rspress-directive tip",children:[(0,r.jsx)(s.div,{className:"rspress-directive-title",children:"TIP"}),(0,r.jsx)(s.div,{className:"rspress-directive-content",children:(0,r.jsxs)(s.p,{children:["\u9700\u8981\u5148\u901A\u8FC7 ",(0,r.jsx)(s.code,{children:"pnpm run new"})," \u542F\u7528 \u5355\u5143\u6D4B\u8BD5 \u529F\u80FD\u3002\n"]})})]}),"\n",(0,r.jsxs)(s.h2,{id:"jest",children:["jest",(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#jest",children:"#"})]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["\u7C7B\u578B\uFF1A ",(0,r.jsx)(s.code,{children:"object | Function"})]}),"\n",(0,r.jsxs)(s.li,{children:["\u9ED8\u8BA4\u503C\uFF1A",(0,r.jsx)(s.code,{children:"{}"})]}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:["\u5BF9\u5E94 ",(0,r.jsx)(s.a,{href:"https://jestjs.io/docs/configuration",target:"_blank",rel:"noopener noreferrer",children:"Jest"})," \u7684\u914D\u7F6E\uFF0C\u5F53\u4E3A ",(0,r.jsx)(s.code,{children:"object"})," \u7C7B\u578B\u65F6\uFF0C\u53EF\u4EE5\u914D\u7F6E Jest \u6240\u652F\u6301\u7684\u6240\u6709\u5E95\u5C42\u914D\u7F6E \u3002"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-js",meta:'title="modern.config.ts"',children:"import { defineConfig } from '@modern-js/module-tools';\n\nexport default defineConfig({\n  testing: {\n    jest: {\n      testTimeout: 10000,\n    },\n  },\n});\n"})}),"\n",(0,r.jsxs)(s.p,{children:["\u503C\u4E3A ",(0,r.jsx)(s.code,{children:"Function"})," \u7C7B\u578B\u65F6\uFF0C\u9ED8\u8BA4\u914D\u7F6E\u4F5C\u4E3A\u7B2C\u4E00\u4E2A\u53C2\u6570\u4F20\u5165\uFF0C\u9700\u8981\u8FD4\u56DE\u65B0\u7684 Jest \u914D\u7F6E\u5BF9\u8C61\u3002"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-js",meta:'title="modern.config.ts"',children:"import { defineConfig } from '@modern-js/module-tools';\n\nexport default defineConfig({\n  testing: {\n    jest: options => {\n      return {\n        ...options,\n        testTimeout: 10000,\n      };\n    },\n  },\n});\n"})}),"\n",(0,r.jsxs)(s.h2,{id:"transformer",children:["transformer",(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#transformer",children:"#"})]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["\u7C7B\u578B\uFF1A",(0,r.jsx)(s.code,{children:"'babel-jest' | 'ts-jest'"})]}),"\n",(0,r.jsxs)(s.li,{children:["\u9ED8\u8BA4\u503C\uFF1A",(0,r.jsx)(s.code,{children:"'babel-jest'"})]}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:["\u914D\u7F6E\u6267\u884C\u6D4B\u8BD5\u7684\u65F6\u5019\u5BF9\u4E8E\u6E90\u7801\u7684\u7F16\u8BD1\u5DE5\u5177\uFF1A ",(0,r.jsx)(s.a,{href:"https://www.npmjs.com/package/babel-jest",target:"_blank",rel:"noopener noreferrer",children:"babel-jest"})," \u6216 ",(0,r.jsx)(s.a,{href:"https://github.com/kulshekhar/ts-jest",target:"_blank",rel:"noopener noreferrer",children:"ts-jest"}),"\u3002\u9ED8\u8BA4\u4F7F\u7528 ",(0,r.jsx)(s.code,{children:"babel-jest"}),"\u3002"]}),"\n",(0,r.jsxs)(s.div,{className:"rspress-directive info",children:[(0,r.jsx)(s.div,{className:"rspress-directive-title",children:"INFO"}),(0,r.jsx)(s.div,{className:"rspress-directive-content",children:(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"babel-jest"})," \u4E5F\u53EF\u4EE5\u7F16\u8BD1 TS \u6587\u4EF6\uFF0C\u4F46\u4E0D\u4F1A\u7C7B\u578B\u62A5\u9519\uFF0C\u5982\u679C\u4F60\u9700\u8981\u8DD1\u6D4B\u8BD5\u7684\u65F6\u5019\u5BF9 TS \u7C7B\u578B\u8FDB\u884C\u6821\u9A8C\uFF0C\u90A3\u4E48\u8BF7\u4F7F\u7528 ",(0,r.jsx)(s.code,{children:"ts-jest"}),"\u3002\n"]})})]})]})}function d(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:s}=Object.assign({},(0,t.useMDXComponents)(),e.components);return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}s.default=d,d.__RSPRESS_PAGE_META={},d.__RSPRESS_PAGE_META["zh%2Fapi%2Fconfig%2Ftesting.md"]={toc:[{text:"jest",id:"jest",depth:2},{text:"transformer",id:"transformer",depth:2}],title:"testing",frontmatter:{sidebar_position:5}}}}]);