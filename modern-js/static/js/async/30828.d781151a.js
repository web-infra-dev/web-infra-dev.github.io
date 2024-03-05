/*! For license information please see 30828.d781151a.js.LICENSE.txt */
(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["30828"],{1944:function(e,n,t){"use strict";t.r(n);var s=t("39980"),r=t("96954");function i(e){let n=Object.assign({h1:"h1",a:"a",p:"p",code:"code",pre:"pre",h2:"h2"},(0,r.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h1,{id:"using-jest",children:["Using Jest",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#using-jest",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["Modern.js integrates the testing capabilities of ",(0,s.jsx)(n.a,{href:"https://jestjs.io/",target:"_blank",rel:"noopener noreferrer",children:"Jest"})," by default."]}),"\n",(0,s.jsxs)(n.p,{children:["First need to execute ",(0,s.jsx)(n.code,{children:"pnpm run new"}),' to enable "unit test/integration test" features:']}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"? Please select the operation you want: Enable features\n? Please select the feature name: Enable Unit Test / Integration Test\n"})}),"\n",(0,s.jsxs)(n.p,{children:["After executing the above command, the ",(0,s.jsx)(n.code,{children:'"test": "modern test"'})," command will be added in ",(0,s.jsx)(n.code,{children:"package.json"})," automatically."]}),"\n",(0,s.jsxs)(n.p,{children:["After registering the ",(0,s.jsx)(n.code,{children:"@modern-js/plugin-testing"})," plugin in ",(0,s.jsx)(n.code,{children:"modern.config.ts"}),", you can use the testing features:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import { testingPlugin } from '@modern-js/plugin-testing';\n\nexport default defineConfig({\n  plugins: [..., testingPlugin()],\n});\n"})}),"\n",(0,s.jsxs)(n.h2,{id:"test-file",children:["Test file",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#test-file",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["Modern.js default recognized test file paths are: ",(0,s.jsx)(n.code,{children:"<rootDir>/src/**/*.test.[jt]s?(x)"})," and ",(0,s.jsx)(n.code,{children:"<rootDir>/tests/**/*.test.[jt]s?(x)"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["If you need to customize the test directory, you can configure it with ",(0,s.jsx)(n.a,{href:"/configure/app/tools/jest",children:"tools.jest"}),"."]}),"\n",(0,s.jsxs)(n.h2,{id:"usage",children:["Usage",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#usage",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["Modern.js test support ",(0,s.jsx)(n.a,{href:"https://testing-library.com/docs/",target:"_blank",rel:"noopener noreferrer",children:"testing-library"}),". API can be imported from ",(0,s.jsx)(n.code,{children:"@modern-js/runtime/testing"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"import { render, screen } from '@modern-js/runtime/testing';\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Other testing APIs supported by Modern.js can be referred to ",(0,s.jsx)(n.a,{href:"/apis/app/runtime/testing/cleanup",children:"here"}),"."]}),"\n",(0,s.jsxs)(n.h2,{id:"transform",children:["transform",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#transform",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["By default, Modern.js testing uses ",(0,s.jsx)(n.a,{href:"https://www.npmjs.com/package/babel-jest",target:"_blank",rel:"noopener noreferrer",children:"babel-jest"})," for source code compilation. If you need to use ",(0,s.jsx)(n.a,{href:"https://github.com/kulshekhar/ts-jest",target:"_blank",rel:"noopener noreferrer",children:"ts-jest"}),", you can configure it through ",(0,s.jsx)(n.a,{href:"/configure/app/testing/transformer",children:"testing.transform"}),"."]})]})}function a(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,r.useMDXComponents)(),e.components);return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(i,{...e})}):i(e)}n.default=a,a.__RSPRESS_PAGE_META={},a.__RSPRESS_PAGE_META["en%2Fguides%2Fadvanced-features%2Ftesting.mdx"]={toc:[{text:"Test file",id:"test-file",depth:2},{text:"Usage",id:"usage",depth:2},{text:"transform",id:"transform",depth:2}],title:"Using Jest",frontmatter:{sidebar_position:14}}}}]);