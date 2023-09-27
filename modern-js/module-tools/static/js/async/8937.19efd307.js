(self.webpackChunk_modern_js_module_tools_docs=self.webpackChunk_modern_js_module_tools_docs||[]).push([["8937"],{20269:function(e,n,s){"use strict";s.r(n),s.d(n,{default:function(){return l}});var t,i=s("10310"),r=s("81904"),o=s("98638"),d=s("21968");function c(e){let n=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",code:"code",ul:"ul",li:"li",strong:"strong",pre:"pre",img:"img",h3:"h3",div:"div"},(0,d.useMDXComponents)(),e.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.h1,{id:"testing-projects",children:["Testing Projects",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#testing-projects",children:"#"})]}),"\n",(0,o.jsx)(n.p,{children:"This chapter will describe how to test modules."}),"\n",(0,o.jsxs)(n.h2,{id:"prerequisites-and-conventions",children:["Prerequisites and conventions",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#prerequisites-and-conventions",children:"#"})]}),"\n",(0,o.jsxs)(n.p,{children:["To use the testing features of the project, you need to make sure that the project contains the dependency: ",(0,o.jsx)(n.code,{children:'"@modern-js/plugin-testing"'})," , which can be done with ",(0,o.jsx)(n.a,{href:"/guide/basic/command-preview#modern-new",children:"modern new"}),"."]}),"\n",(0,o.jsx)(n.p,{children:"In Modern.js Module, the following conventions are in place for test cases, or files for writing tests:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["The ",(0,o.jsx)(n.code,{children:"tests"})," directory in the project directory is the directory for test cases and test files, ",(0,o.jsx)(n.strong,{children:"no support for changing the directory for running test cases"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["Files with the suffix ",(0,o.jsx)(n.code,{children:".test.[tj]sx?"})," are automatically recognized as test files by default."]}),"\n",(0,o.jsxs)(n.li,{children:["Other ",(0,o.jsx)(n.code,{children:". [tj]sx?"})," suffixes are recognized as normal files that can be used as test ",(0,o.jsx)(n.code,{children:"utils"})," files or for other purposes."]}),"\n"]}),"\n",(0,o.jsxs)(n.h2,{id:"run-the-tests",children:["Run the tests",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#run-the-tests",children:"#"})]}),"\n",(0,o.jsx)(n.p,{children:"Once the dependencies are prepared and we know where to write the test cases, we can execute the tests with the following command:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"modern test\n\n// Update snapshot\nmodern test --updateSnapshot\n"})}),"\n",(0,o.jsx)(n.p,{children:"After execution, you will see the results of the test:"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/uhbfnupenuhf/test-result.png",alt:"test-result"})}),"\n",(0,o.jsxs)(n.h2,{id:"usage-configuration",children:["Usage Configuration",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#usage-configuration",children:"#"})]}),"\n",(0,o.jsx)(n.p,{children:"Modern.js Module provides the following configurations for testing."}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"/api/config/testing",children:(0,o.jsx)(n.code,{children:"testing"})})}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["You can add it in ",(0,o.jsx)(n.code,{children:"modern.config.(j|t)s"}),"."]}),"\n",(0,o.jsxs)(n.h2,{id:"test-example",children:["Test example",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#test-example",children:"#"})]}),"\n",(0,o.jsxs)(n.h3,{id:"common-modules",children:["Common modules",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#common-modules",children:"#"})]}),"\n",(0,o.jsx)(n.p,{children:"For common modules, we can use the test function as follows:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"First is the code of the module:"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",meta:'title="./src/index.ts"',children:"export default function () {\n  return 'hello world';\n}\n"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Then in the test file, we can import source code as the following way. Where ",(0,o.jsx)(n.code,{children:"@"})," points to the source directory, defined in ",(0,o.jsx)(n.code,{children:"tests/tsconfig.json"})," in the initialization project."]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",meta:'title="./tests/index.test.ts"',children:"import main from '@/index';\n\ndescribe('default cases', () => {\n  test('Have returns', () => {\n    const drink = jest.fn(main);\n    drink();\n    expect(drink).toHaveReturned();\n  });\n});\n"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Finally we can execute ",(0,o.jsx)(n.code,{children:"modern test"}),"."]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"pnpm test\n## or\nyarn test\n## or\nnpm run test\n"})}),"\n",(0,o.jsxs)(n.h3,{id:"components",children:["Components",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#components",children:"#"})]}),"\n",(0,o.jsxs)(n.p,{children:["For components, Modern.js's Runtime API provides functionality for testing UI components, which is provided by ",(0,o.jsx)(n.code,{children:"@modern-js/runtime/testing"}),"."]}),"\n",(0,o.jsxs)(n.div,{className:"rspress-directive tip",children:[(0,o.jsx)(n.div,{className:"rspress-directive-title",children:"TIP"}),(0,o.jsx)(n.div,{className:"rspress-directive-content",children:(0,o.jsxs)(n.p,{children:["If you need to use the Runtime API, then you can turn it on via ",(0,o.jsx)(n.a,{href:"/guide/basic/command-preview",children:"microgenerator"}),".\n"]})})]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"First is the code of the component:"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",meta:'title="./src/index.tsx"',children:"export const default () {\n  return (\n    <div>This is a UI Component</div>\n  );\n}\n"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Then in the test file, we can import source code as the following way. Where ",(0,o.jsx)(n.code,{children:"@"})," points to the source directory, defined in ",(0,o.jsx)(n.code,{children:"tests/tsconfig.json"})," in the initialization project."]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",meta:'title="./tests/index.test.tsx"',children:"import { render, screen } from '@modern-js/runtime/testing';\n\nimport Component from '@/index';\n\ndescribe('default cases', () => {\n  test('Rendered', () => {\n    render(<Component />);\n    expect(screen.getByText('This is a UI Component')).toBeInTheDocument();\n  });\n});\n"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Finally we can execute ",(0,o.jsx)(n.code,{children:"modern test"}),"."]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"pnpm test\n## or\nyarn test\n## or\nnpm run test\n"})})]})}(t=globalThis).__RSPRESS_PAGE_META||(t.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["en%2Fguide%2Fbasic%2Ftest-your-project.mdx"]={toc:[{text:"Prerequisites and conventions",id:"prerequisites-and-conventions",depth:2},{text:"Run the tests",id:"run-the-tests",depth:2},{text:"Usage Configuration",id:"usage-configuration",depth:2},{text:"Test example",id:"test-example",depth:2},{text:"Common modules",id:"common-modules",depth:3},{text:"Components",id:"components",depth:3}],title:"Testing Projects",frontmatter:{sidebar_position:6}};var l=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,d.useMDXComponents)(),e.components);return n?(0,o.jsx)(n,(0,r._)((0,i._)({},e),{children:(0,o.jsx)(c,(0,i._)({},e))})):c(e)}}}]);