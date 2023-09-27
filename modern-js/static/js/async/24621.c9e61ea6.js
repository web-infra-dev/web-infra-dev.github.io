(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["24621"],{90766:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return c}});var s,t=r("10310"),i=r("81904"),d=r("98638"),a=r("21968");function o(e){let n=Object.assign({h1:"h1",a:"a",p:"p",code:"code",pre:"pre",h2:"h2"},(0,a.useMDXComponents)(),e.components);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.h1,{id:"\u4F7F\u7528-jest-\u6D4B\u8BD5",children:["\u4F7F\u7528 Jest \u6D4B\u8BD5",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u4F7F\u7528-jest-\u6D4B\u8BD5",children:"#"})]}),"\n",(0,d.jsxs)(n.p,{children:["Modern.js \u9ED8\u8BA4\u96C6\u6210\u4E86 ",(0,d.jsx)(n.a,{href:"https://jestjs.io/",target:"_blank",rel:"noopener noreferrer",children:"Jest"})," \u7684\u6D4B\u8BD5\u80FD\u529B\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:["\u6211\u4EEC\u9996\u5148\u9700\u8981\u6267\u884C ",(0,d.jsx)(n.code,{children:"pnpm run new"})," \u542F\u7528\u300C\u5355\u5143\u6D4B\u8BD5 / \u96C6\u6210\u6D4B\u8BD5\u300D\u529F\u80FD\uFF1A"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:"? \u8BF7\u9009\u62E9\u4F60\u60F3\u8981\u7684\u64CD\u4F5C \u542F\u7528\u53EF\u9009\u529F\u80FD\n? \u8BF7\u9009\u62E9\u529F\u80FD\u540D\u79F0 \u542F\u7528\u300C\u5355\u5143\u6D4B\u8BD5 / \u96C6\u6210\u6D4B\u8BD5\u300D\u529F\u80FD\n"})}),"\n",(0,d.jsxs)(n.p,{children:["\u6267\u884C\u4E0A\u8FF0\u547D\u4EE4\u540E\uFF0C",(0,d.jsx)(n.code,{children:"package.json"})," \u4E2D\u5C06\u4F1A\u81EA\u52A8\u6DFB\u52A0 ",(0,d.jsx)(n.code,{children:'"test": "modern test"'})," \u547D\u4EE4\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:["\u5728 ",(0,d.jsx)(n.code,{children:"modern.config.ts"})," \u4E2D\u6CE8\u518C ",(0,d.jsx)(n.code,{children:"@modern-js/plugin-testing"})," \u63D2\u4EF6\u540E\u5373\u53EF\u4F7F\u7528\u6D4B\u8BD5\u529F\u80FD\uFF1A"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import { testingPlugin } from '@modern-js/plugin-testing';\n\nexport default defineConfig({\n  ...,\n  plugins: [..., testingPlugin()],\n});\n"})}),"\n",(0,d.jsxs)(n.h2,{id:"\u6D4B\u8BD5\u6587\u4EF6",children:["\u6D4B\u8BD5\u6587\u4EF6",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u6D4B\u8BD5\u6587\u4EF6",children:"#"})]}),"\n",(0,d.jsxs)(n.p,{children:["Modern.js \u9ED8\u8BA4\u8BC6\u522B\u7684\u6D4B\u8BD5\u6587\u4EF6\u8DEF\u5F84\u4E3A\uFF1A",(0,d.jsx)(n.code,{children:"<rootDir>/src/**/*.test.[jt]s?(x)"})," \u548C ",(0,d.jsx)(n.code,{children:"<rootDir>/tests/**/*.test.[jt]s?(x)"}),"\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:["\u5982\u679C\u4F60\u9700\u8981\u81EA\u5B9A\u4E49 test \u76EE\u5F55\uFF0C\u53EF\u901A\u8FC7 ",(0,d.jsx)(n.a,{href:"/configure/app/tools/jest",children:"tools.jest"})," \u8FDB\u884C\u914D\u7F6E\u3002"]}),"\n",(0,d.jsxs)(n.h2,{id:"\u4F7F\u7528\u59FF\u52BF",children:["\u4F7F\u7528\u59FF\u52BF",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u4F7F\u7528\u59FF\u52BF",children:"#"})]}),"\n",(0,d.jsxs)(n.p,{children:["Modern.js test \u652F\u6301\u4F7F\u7528 ",(0,d.jsx)(n.a,{href:"https://testing-library.com/docs/",target:"_blank",rel:"noopener noreferrer",children:"testing-library"})," \u76F8\u5173\u5305 API\uFF0C\u53EF\u76F4\u63A5\u901A\u8FC7 ",(0,d.jsx)(n.code,{children:"@modern-js/runtime/testing"})," \u8FDB\u884C\u5BFC\u5165:"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",children:"import { render, screen } from '@modern-js/runtime/testing';\n"})}),"\n",(0,d.jsxs)(n.p,{children:["\u5176\u4ED6 Modern.js \u652F\u6301\u7684 testing API \u53EF\u53C2\u8003",(0,d.jsx)(n.a,{href:"/apis/app/runtime/testing/cleanup",children:"\u8FD9\u91CC"}),"\u3002"]}),"\n",(0,d.jsxs)(n.h2,{id:"transform",children:["transform",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#transform",children:"#"})]}),"\n",(0,d.jsxs)(n.p,{children:["Modern.js \u6D4B\u8BD5\u9ED8\u8BA4\u4F7F\u7528 ",(0,d.jsx)(n.a,{href:"https://www.npmjs.com/package/babel-jest",target:"_blank",rel:"noopener noreferrer",children:"babel-jest"})," \u8FDB\u884C\u6E90\u7801\u7F16\u8BD1\uFF0C\u5982\u679C\u4F60\u9700\u8981\u4F7F\u7528 ",(0,d.jsx)(n.a,{href:"https://github.com/kulshekhar/ts-jest",target:"_blank",rel:"noopener noreferrer",children:"ts-jest"}),"\uFF0C\u53EF\u4EE5\u901A\u8FC7 ",(0,d.jsx)(n.a,{href:"/configure/app/testing/transformer",children:"testing.transform"})," \u8FDB\u884C\u914D\u7F6E\u3002"]})]})}(s=globalThis).__RSPRESS_PAGE_META||(s.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["zh%2Fguides%2Fadvanced-features%2Ftesting.mdx"]={toc:[{text:"\u6D4B\u8BD5\u6587\u4EF6",id:"\u6D4B\u8BD5\u6587\u4EF6",depth:2},{text:"\u4F7F\u7528\u59FF\u52BF",id:"\u4F7F\u7528\u59FF\u52BF",depth:2},{text:"transform",id:"transform",depth:2}],title:"\u4F7F\u7528 Jest \u6D4B\u8BD5",frontmatter:{sidebar_position:11}};var c=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,a.useMDXComponents)(),e.components);return n?(0,d.jsx)(n,(0,i._)((0,t._)({},e),{children:(0,d.jsx)(o,(0,t._)({},e))})):o(e)}}}]);