/*! For license information please see 3097.a081868c.js.LICENSE.txt */
(self.webpackChunk_modern_js_builder_doc=self.webpackChunk_modern_js_builder_doc||[]).push([["3097"],{62014:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return a}});var i=r("9880"),t=r("23169"),o=r("64948"),d=r("58378");function l(e){let n=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",code:"code",pre:"pre"},(0,t.useMDXComponents)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.h1,{id:"build-vue-2-app",children:["Build Vue 2 App",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#build-vue-2-app",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"Although the Modern.js framework is built on React, the underlying Modern.js Builder is not coupled with React. Therefore, you can use Modern.js Builder to build your Vue applications and leverage most of the capabilities provided by Modern.js Builder."}),"\n",(0,i.jsx)(n.p,{children:"In this document, you will learn how to build a Vue 2 application using Modern.js Builder."}),"\n","\n",(0,i.jsx)(o.default,{}),"\n","\n",(0,i.jsx)(d.default,{}),"\n",(0,i.jsxs)(n.h2,{id:"using-vue-plugin",children:["Using Vue Plugin",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#using-vue-plugin",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["To compile Vue SFC (Single File Components) and JSX syntax, you need to register the Builder ",(0,i.jsx)(n.a,{href:"/plugins/plugin-vue2",children:"Vue 2 plugin"}),". The plugin will automatically add the necessary configuration for Vue builds and remove the built-in React-related configurations."]}),"\n",(0,i.jsxs)(n.p,{children:["For example, register in ",(0,i.jsx)(n.code,{children:"builder.config.ts"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",meta:'title="builder.config.ts"',children:"import { defineConfig } from '@modern-js/builder-cli';\nimport { builderPluginVue2 } from '@modern-js/builder-plugin-vue2';\n\nexport default defineConfig({\n  builderPlugins: [builderPluginVue2()],\n});\n"})}),"\n",(0,i.jsxs)(n.h2,{id:"type-definitions",children:["Type Definitions",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#type-definitions",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["In a TypeScript project, you need to add type definitions for ",(0,i.jsx)(n.code,{children:"*.vue"})," files so that TypeScript can recognize them correctly."]}),"\n",(0,i.jsxs)(n.p,{children:["Create ",(0,i.jsx)(n.code,{children:"env.d.ts"})," in the ",(0,i.jsx)(n.code,{children:"src"})," directory and add the following content:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",meta:'title="src/env.d.ts"',children:"declare module '*.vue' {\n  import Vue from 'vue';\n\n  export default Vue;\n}\n"})})]})}function s(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,t.useMDXComponents)(),e.components);return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}var a=s;s.__RSPRESS_PAGE_META={},s.__RSPRESS_PAGE_META["en%2Fguide%2Fframework%2Fvue2.mdx"]={toc:[{text:"Using Vue Plugin",id:"using-vue-plugin",depth:2},{text:"Type Definitions",id:"type-definitions",depth:2}],title:"Build Vue 2 App",frontmatter:{}}},58378:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return l}});var i=r("9880"),t=r("23169");function o(e){let n=Object.assign({h2:"h2",a:"a",p:"p"},(0,t.useMDXComponents)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.h2,{id:"cli-tool",children:["CLI Tool",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#cli-tool",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"Before you start building a Vue project, you need a CLI tool to provide basic commands."}),"\n",(0,i.jsxs)(n.p,{children:["You can use the ",(0,i.jsx)(n.a,{href:"/guide/basic/builder-cli",children:"CLI tool"})," provided by Builder, or you can build your own CLI tool based on Builder's ",(0,i.jsx)(n.a,{href:"/api/builder-core",children:"Node API"}),"."]})]})}function d(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,t.useMDXComponents)(),e.components);return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}var l=d;d.__RSPRESS_PAGE_META={},d.__RSPRESS_PAGE_META["en%2Fshared%2FcliToolVue.md"]={toc:[{text:"CLI Tool",id:"cli-tool",depth:2}],title:"",frontmatter:{}}},64948:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return l}});var i=r("9880"),t=r("23169");function o(e){let n=Object.assign({h2:"h2",a:"a",p:"p",ul:"ul",li:"li"},(0,t.useMDXComponents)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.h2,{id:"example-project",children:["Example Project",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#example-project",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"We have created an example project based on Vue 2 and Modern.js Builder. You can build your own project by referring this project, or just cloning it as a template. The following documentation will provide more detailed instructions."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/web-infra-dev/modern-js-examples/tree/main/examples/builder-vue2",target:"_blank",rel:"noopener noreferrer",children:"modern-js-examples - builder-vue2"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/web-infra-dev/modern-js-examples/tree/main/examples/builder-vue2-rspack",target:"_blank",rel:"noopener noreferrer",children:"modern-js-examples - builder-vue2-rspack"})}),"\n"]})]})}function d(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,t.useMDXComponents)(),e.components);return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}var l=d;d.__RSPRESS_PAGE_META={},d.__RSPRESS_PAGE_META["en%2Fshared%2Fvue2Project.md"]={toc:[{text:"Example Project",id:"example-project",depth:2}],title:"",frontmatter:{}}}}]);