/*! For license information please see 378.3e8d2d7e.js.LICENSE.txt */
(self.webpackChunk_modern_js_module_tools_docs=self.webpackChunk_modern_js_module_tools_docs||[]).push([["378"],{30241:function(e,n,s){"use strict";s.r(n),s.d(n,{default:function(){return d}});var t=s("9880"),r=s("23169");function i(e){let n=Object.assign({h1:"h1",a:"a",p:"p",div:"div",code:"code",h2:"h2",ul:"ul",li:"li",pre:"pre"},(0,r.useMDXComponents)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.h1,{id:"testing",children:["testing",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#testing",children:"#"})]}),"\n",(0,t.jsx)(n.p,{children:"This chapter describes the test-related configuration"}),"\n",(0,t.jsxs)(n.div,{className:"rspress-directive tip",children:[(0,t.jsx)(n.div,{className:"rspress-directive-title",children:"TIP"}),(0,t.jsx)(n.div,{className:"rspress-directive-content",children:(0,t.jsxs)(n.p,{children:["You need to enable the unit testing feature with ",(0,t.jsx)(n.code,{children:"pnpm run new"})," first.\n"]})})]}),"\n",(0,t.jsxs)(n.h2,{id:"jest",children:["jest",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#jest",children:"#"})]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Type: ",(0,t.jsx)(n.code,{children:"object | Function"})]}),"\n",(0,t.jsxs)(n.li,{children:["Default: ",(0,t.jsx)(n.code,{children:"{}"})]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["The configuration corresponding to ",(0,t.jsx)(n.a,{href:"https://jestjs.io/docs/configuration",target:"_blank",rel:"noopener noreferrer",children:"Jest"}),", when of type ",(0,t.jsx)(n.code,{children:"object"}),", can be configured with all the underlying configurations supported by Jest ."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",meta:'title="modern.config.ts"',children:"import { defineConfig } from '@modern-js/module-tools';\n\nexport default defineConfig({\n  testing: {\n    jest: {\n      testTimeout: 10000,\n    },\n  },\n});\n"})}),"\n",(0,t.jsxs)(n.p,{children:["When the value is of type ",(0,t.jsx)(n.code,{children:"Function"}),", the default configuration is passed as the first parameter and a new Jest configuration object needs to be returned."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",meta:'title="modern.config.ts"',children:"import { defineConfig } from '@modern-js/module-tools';\n\nexport default defineConfig({\n  testing: {\n    jest: options => {\n      return {\n        ... . options,\n        testTimeout: 10000\n      }\n    }\n  }\n});\n"})}),"\n",(0,t.jsxs)(n.h2,{id:"transformer",children:["transformer",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#transformer",children:"#"})]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Type: ",(0,t.jsx)(n.code,{children:"'babel-jest' | 'ts-jest'"})]}),"\n",(0,t.jsxs)(n.li,{children:["Default: ",(0,t.jsx)(n.code,{children:"'babel-jest'"})]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Configure the compilation tool for the source code when executing tests: ",(0,t.jsx)(n.a,{href:"https://www.npmjs.com/package/babel-jest",target:"_blank",rel:"noopener noreferrer",children:"babel-jest"})," or ",(0,t.jsx)(n.a,{href:"https://github.com/kulshekhar/ts-jest",target:"_blank",rel:"noopener noreferrer",children:"ts-jest"}),". The default is ",(0,t.jsx)(n.code,{children:"babel-jest"}),"."]}),"\n",(0,t.jsxs)(n.div,{className:"rspress-directive info",children:[(0,t.jsx)(n.div,{className:"rspress-directive-title",children:"INFO"}),(0,t.jsx)(n.div,{className:"rspress-directive-content",children:(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"babel-jest"})," can also compile TS files without type errors, so use ",(0,t.jsx)(n.code,{children:"ts-jest"})," if you need to check the TS type when running tests.\n"]})})]})]})}function o(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,r.useMDXComponents)(),e.components);return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(i,{...e})}):i(e)}var d=o;o.__RSPRESS_PAGE_META={},o.__RSPRESS_PAGE_META["en%2Fapi%2Fconfig%2Ftesting.md"]={toc:[{text:"jest",id:"jest",depth:2},{text:"transformer",id:"transformer",depth:2}],title:"testing",frontmatter:{sidebar_position:5}}}}]);