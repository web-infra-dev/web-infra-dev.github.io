/*! For license information please see 4972.2641320a.js.LICENSE.txt */
(self.webpackChunk_modern_js_module_tools_docs=self.webpackChunk_modern_js_module_tools_docs||[]).push([["4972"],{75285:function(e,n,o){"use strict";o.r(n);var r=o("39980"),s=o("76713");function i(e){let n=Object.assign({h1:"h1",a:"a",p:"p",ul:"ul",li:"li",code:"code",strong:"strong",h2:"h2",div:"div",pre:"pre"},(0,s.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"using-the-microgenerator",children:["Using the Microgenerator",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#using-the-microgenerator",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"Modern.js Module provides the Microgenerator tool, which allows for the current project to."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"add new directories and files"}),"\n",(0,r.jsxs)(n.li,{children:["Modify the contents of the ",(0,r.jsx)(n.code,{children:"package.json"})," file"]}),"\n",(0,r.jsx)(n.li,{children:"Execute commands"}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Thus with these capabilities, ",(0,r.jsx)(n.strong,{children:"Microgenerator can enable additional feature functionality for the project"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["The microgenerator can be started via ",(0,r.jsx)(n.a,{href:"/guide/basic/command-preview",children:(0,r.jsx)(n.code,{children:"modern new"})}),". The current Microgenerator features supported by the Modern.js Module are:"]}),"\n",(0,r.jsxs)(n.h2,{id:"develop-module-doc",children:["Develop Module Doc",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#develop-module-doc",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["When we want to write documentation for out module project, we can enable the module doc feature. ",(0,r.jsxs)(n.strong,{children:["will create ",(0,r.jsx)(n.code,{children:"docs"})," directory and related files in the project directory, and add ",(0,r.jsx)(n.code,{children:'"@modern-js/plugin-rspress"'})," dependency"]})," in package.json.\nUse ",(0,r.jsx)(n.code,{children:"modern dev"})," and ",(0,r.jsx)(n.code,{children:"modern build --platform"})," to debug and build your doc site."]}),"\n",(0,r.jsxs)(n.div,{className:"rspress-directive tip",children:[(0,r.jsx)(n.div,{className:"rspress-directive-title",children:"TIP"}),(0,r.jsxs)(n.div,{className:"rspress-directive-content",children:[(0,r.jsx)(n.p,{children:"After successfully enabling it, you will be prompted to manually add a code similar to the one below to the configuration."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"import { moduleTools, defineConfig } from '@modern-js/module-tools';\nimport { modulePluginDoc } from '@modern-js/plugin-rspress';\n\nexport default defineConfig({\n  plugins: [moduleTools(), modulePluginDoc()],\n});\n"})}),"\n"]})]}),"\n",(0,r.jsxs)(n.h2,{id:"test",children:["Test",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#test",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["When we want to test some modules, we can enable the test feature. When this feature is enabled, ",(0,r.jsxs)(n.strong,{children:["a ",(0,r.jsx)(n.code,{children:"tests"})," directory and related files will be created in the project directory, and a new ",(0,r.jsx)(n.code,{children:'"@modern-js/plugin-testing"'})," dependency will be added to package.json"]}),".\nUse ",(0,r.jsx)(n.code,{children:"edenx test"})," to run tests."]}),"\n",(0,r.jsxs)(n.div,{className:"rspress-directive tip",children:[(0,r.jsx)(n.div,{className:"rspress-directive-title",children:"TIP"}),(0,r.jsxs)(n.div,{className:"rspress-directive-content",children:[(0,r.jsx)(n.p,{children:"After successfully enabling it, you will be prompted to manually add a code similar to the one below to the configuration."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"import { moduleTools, defineConfig } from '@modern-js/module-tools';\nimport { testingPlugin } from '@modern-js/plugin-testing';\n\nexport default defineConfig({\n  plugins: [moduleTools(), testingPlugin()],\n});\n"})}),"\n"]})]}),"\n",(0,r.jsxs)(n.h2,{id:"storybook",children:["Storybook",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#storybook",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.strong,{children:"Storybook feature"})," can be enabled when we want to debug a component or a common module. When this feature is enabled, ",(0,r.jsxs)(n.strong,{children:["the ",(0,r.jsx)(n.code,{children:"stories"})," directory and ",(0,r.jsx)(n.code,{children:".storybook"})," directory are created in the project directory, and a new ",(0,r.jsx)(n.code,{children:'"@modern-js/storybook"'})," dependency is added to package.json"]}),". Use ",(0,r.jsx)(n.code,{children:"storybook dev"})," and ",(0,r.jsx)(n.code,{children:"storybook build"})," to debug and build."]}),"\n",(0,r.jsxs)(n.h2,{id:"tailwind-css-support",children:["Tailwind CSS Support",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#tailwind-css-support",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"https://tailwindcss.com/",target:"_blank",rel:"noopener noreferrer",children:"Tailwind CSS"})," is a CSS framework and design system based on Utility Class, which can quickly add common styles to components, and support flexible extension of theme styles."]}),"\n",(0,r.jsxs)(n.p,{children:["If you want to use Tailwind CSS for a project, you can refer to ",(0,r.jsx)(n.a,{href:"https://modernjs.dev/module-tools/guide/best-practices/components.html#tailwind-css",target:"_blank",rel:"noopener noreferrer",children:'"Using Tailwind CSS"'}),"."]}),"\n",(0,r.jsxs)(n.h2,{id:"modernjs-runtime-api",children:["Modern.js Runtime API",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#modernjs-runtime-api",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Modern.js provides Runtime API capabilities that can only be used in the Modern.js application project environment"}),". If you need to develop a component for use in a Modern.js application environment, then you can turn on this feature and the microgenerator will add the ",(0,r.jsx)(n.code,{children:'"@modern-js/runtime"'})," dependency."]}),"\n",(0,r.jsx)(n.p,{children:"Also, the Storybook debugging tool will determine if the project needs to use the Runtime API by checking the project's dependencies and providing the same Runtime API runtime environment as the Modern.js application project."}),"\n",(0,r.jsxs)(n.div,{className:"rspress-directive tip",children:[(0,r.jsx)(n.div,{className:"rspress-directive-title",children:"TIP"}),(0,r.jsxs)(n.div,{className:"rspress-directive-content",children:[(0,r.jsx)(n.p,{children:"After successfully enabling it, you will be prompted to manually add a code similar to the one below to the configuration."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"import { moduleTools, defineConfig } from '@modern-js/module-tools';\nimport runtime from '@modern-js/runtime/cli';\n\nexport default defineConfig({\n  plugins: [moduleTools(), runtime()],\n});\n"})}),"\n"]})]})]})}function t(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,s.useMDXComponents)(),e.components);return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}n.default=t,t.__RSPRESS_PAGE_META={},t.__RSPRESS_PAGE_META["en%2Fguide%2Fbasic%2Fuse-micro-generator.md"]={toc:[{text:"Develop Module Doc",id:"develop-module-doc",depth:2},{text:"Test",id:"test",depth:2},{text:"Storybook",id:"storybook",depth:2},{text:"Tailwind CSS Support",id:"tailwind-css-support",depth:2},{text:"Modern.js Runtime API",id:"modernjs-runtime-api",depth:2}],title:"Using the Microgenerator",frontmatter:{sidebar_position:4}}}}]);