(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["76656"],{36554:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return c}});var s,r=t("15169"),i=t("43932"),a=t("9880"),o=t("23169");function d(e){var n=Object.assign({h1:"h1",a:"a",p:"p",code:"code",pre:"pre",h2:"h2"},(0,o.useMDXComponents)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.h1,{id:"using-jest",children:["Using Jest",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#using-jest",children:"#"})]}),"\n",(0,a.jsxs)(n.p,{children:["Modern.js integrates the testing capabilities of ",(0,a.jsx)(n.a,{href:"https://jestjs.io/",target:"_blank",rel:"noopener noreferrer",children:"Jest"})," by default."]}),"\n",(0,a.jsxs)(n.p,{children:["First need to execute ",(0,a.jsx)(n.code,{children:"pnpm run new"})," to enable [unit test/integration test] features:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"? Please select the operation you want: Enable features\n? Please select the feature name: Enable Unit Test / Integration Test\n"})}),"\n",(0,a.jsxs)(n.p,{children:["After executing the above command, the ",(0,a.jsx)(n.code,{children:'"test": "modern test"'})," command will be added in ",(0,a.jsx)(n.code,{children:"package.json"})," automatically."]}),"\n",(0,a.jsxs)(n.p,{children:["After registering the ",(0,a.jsx)(n.code,{children:"@modern-js/plugin-testing"})," plugin in ",(0,a.jsx)(n.code,{children:"modern.config.ts"}),", you can use the testing features:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import { testingPlugin } from '@modern-js/plugin-testing';\n\nexport default defineConfig({\n  plugins: [..., testingPlugin()],\n});\n"})}),"\n",(0,a.jsxs)(n.h2,{id:"test-file",children:["Test file",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#test-file",children:"#"})]}),"\n",(0,a.jsxs)(n.p,{children:["Modern.js default recognized test file paths are: ",(0,a.jsx)(n.code,{children:"<rootDir>/src/**/*.test.[jt]s?(x)"})," and ",(0,a.jsx)(n.code,{children:"<rootDir>/tests/**/*.test.[jt]s?(x)"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["If you need to customize the test directory, you can configure it with ",(0,a.jsx)(n.a,{href:"/configure/app/tools/jest",children:"tools.jest"}),"."]}),"\n",(0,a.jsxs)(n.h2,{id:"usage",children:["Usage",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#usage",children:"#"})]}),"\n",(0,a.jsxs)(n.p,{children:["Modern.js test support ",(0,a.jsx)(n.a,{href:"https://testing-library.com/docs/",target:"_blank",rel:"noopener noreferrer",children:"testing-library"}),". API can be imported from ",(0,a.jsx)(n.code,{children:"@modern-js/runtime/testing"}),"."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"import { render, screen } from '@modern-js/runtime/testing';\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Other testing APIs supported by Modern.js can be referred to ",(0,a.jsx)(n.a,{href:"/apis/app/runtime/testing/cleanup",children:"here"}),"."]}),"\n",(0,a.jsxs)(n.h2,{id:"transform",children:["transform",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#transform",children:"#"})]}),"\n",(0,a.jsxs)(n.p,{children:["By default, Modern.js testing uses ",(0,a.jsx)(n.a,{href:"https://www.npmjs.com/package/babel-jest",target:"_blank",rel:"noopener noreferrer",children:"babel-jest"})," for source code compilation. If you need to use ",(0,a.jsx)(n.a,{href:"https://github.com/kulshekhar/ts-jest",target:"_blank",rel:"noopener noreferrer",children:"ts-jest"}),", you can configure it through ",(0,a.jsx)(n.a,{href:"/configure/app/testing/transformer",children:"testing.transform"}),"."]})]})}(s=globalThis).__RSPRESS_PAGE_META||(s.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["en%2Fguides%2Fadvanced-features%2Ftesting.mdx"]={toc:[{text:"Test file",id:"test-file",depth:2},{text:"Usage",id:"usage",depth:2},{text:"transform",id:"transform",depth:2}],title:"Using Jest",frontmatter:{sidebar_position:11}};var c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,o.useMDXComponents)(),e.components).wrapper;return n?(0,a.jsx)(n,(0,i._)((0,r._)({},e),{children:(0,a.jsx)(d,(0,r._)({},e))})):d(e)}}}]);