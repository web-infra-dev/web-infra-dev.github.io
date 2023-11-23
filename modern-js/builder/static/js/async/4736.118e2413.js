(self.webpackChunk_modern_js_builder_doc=self.webpackChunk_modern_js_builder_doc||[]).push([["4736"],{38399:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return c}});var r=t("9880"),i=t("23169"),o=t("99712"),s=t("9134"),l=t("55656");function d(e){let n=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",code:"code",pre:"pre"},(0,i.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"build-vue-3-app",children:["Build Vue 3 App",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#build-vue-3-app",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"Although the Modern.js framework is built on React, the underlying Modern.js Builder is not coupled with React. Therefore, you can use Modern.js Builder to build your Vue applications and leverage most of the capabilities provided by Modern.js Builder."}),"\n",(0,r.jsx)(n.p,{children:"In this document, you will learn how to build a Vue 3 application using Modern.js Builder."}),"\n","\n",(0,r.jsx)(o.default,{}),"\n","\n",(0,r.jsx)(s.default,{}),"\n",(0,r.jsxs)(n.h2,{id:"using-vue-plugin",children:["Using Vue Plugin",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#using-vue-plugin",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["To compile Vue SFC (Single File Components) and JSX syntax, you need to register the Builder ",(0,r.jsx)(n.a,{href:"/plugins/plugin-vue",children:"Vue plugin"}),". The plugin will automatically add the necessary configuration for Vue builds and remove the built-in React-related configurations."]}),"\n",(0,r.jsxs)(n.p,{children:["For example, register in ",(0,r.jsx)(n.code,{children:"builder.config.ts"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",meta:'title="builder.config.ts"',children:"import { defineConfig } from '@modern-js/builder-cli';\nimport { builderPluginVue } from '@modern-js/builder-plugin-vue';\n\nexport default defineConfig({\n  builderPlugins: [builderPluginVue()],\n});\n"})}),"\n",(0,r.jsxs)(n.h2,{id:"type-definitions",children:["Type Definitions",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#type-definitions",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["In a TypeScript project, you need to add type definitions for ",(0,r.jsx)(n.code,{children:"*.vue"})," files so that TypeScript can recognize them correctly."]}),"\n",(0,r.jsxs)(n.p,{children:["Create ",(0,r.jsx)(n.code,{children:"env.d.ts"})," in the ",(0,r.jsx)(n.code,{children:"src"})," directory and add the following content:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",meta:'title="src/env.d.ts"',children:"declare module '*.vue' {\n  import type { DefineComponent } from 'vue';\n\n  // eslint-disable-next-line @typescript-eslint/ban-types\n  const component: DefineComponent<{}, {}, any>;\n  export default component;\n}\n"})}),"\n","\n",(0,r.jsx)(l.default,{})]})}function a(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,i.useMDXComponents)(),e.components);return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}var c=a;a.__RSPRESS_PAGE_META={},a.__RSPRESS_PAGE_META["en%2Fguide%2Fframework%2Fvue3.mdx"]={toc:[{text:"Using Vue Plugin",id:"using-vue-plugin",depth:2},{text:"Type Definitions",id:"type-definitions",depth:2}],title:"Build Vue 3 App",frontmatter:{}}},9134:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return l}});var r=t("9880"),i=t("23169");function o(e){let n=Object.assign({h2:"h2",a:"a",p:"p"},(0,i.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h2,{id:"cli-tool",children:["CLI Tool",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#cli-tool",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"Before you start building a Vue project, you need a CLI tool to provide basic commands."}),"\n",(0,r.jsxs)(n.p,{children:["You can use the ",(0,r.jsx)(n.a,{href:"/guide/basic/builder-cli",children:"CLI tool"})," provided by Builder, or you can build your own CLI tool based on Builder's ",(0,r.jsx)(n.a,{href:"/api/builder-core",children:"Node API"}),"."]})]})}function s(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,i.useMDXComponents)(),e.components);return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}var l=s;s.__RSPRESS_PAGE_META={},s.__RSPRESS_PAGE_META["en%2Fshared%2FcliToolVue.md"]={toc:[{text:"CLI Tool",id:"cli-tool",depth:2}],title:"",frontmatter:{}}},55656:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return l}});var r=t("9880"),i=t("23169");function o(e){let n=Object.assign({h2:"h2",a:"a",p:"p",code:"code"},(0,i.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h2,{id:"deploy-the-application",children:["Deploy the Application",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#deploy-the-application",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["After executing ",(0,r.jsx)(n.code,{children:"builder build"})," to build the application, you will get a set of static assets in the ",(0,r.jsx)(n.code,{children:"dist"})," directory. These assets can be deployed to any platform or server."]}),"\n",(0,r.jsxs)(n.p,{children:["Please note that the default output structure of Builder may not be suitable for all platforms because different platforms have different requirements for the directory structure. You can refer to the ",(0,r.jsx)(n.a,{href:"/guide/basic/output-files",children:"Output Files"})," section to modify the directory structure to meet the requirements of your deployment platform."]}),"\n",(0,r.jsxs)(n.p,{children:["Additionally, if you need to preview the deployment artifacts locally, you can use the ",(0,r.jsx)(n.a,{href:"/guide/basic/builder-cli#builder-serve",children:"builder serve"})," command provided by Builder CLI."]})]})}function s(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,i.useMDXComponents)(),e.components);return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}var l=s;s.__RSPRESS_PAGE_META={},s.__RSPRESS_PAGE_META["en%2Fshared%2FdeployApp.md"]={toc:[{text:"Deploy the Application",id:"deploy-the-application",depth:2}],title:"",frontmatter:{}}},99712:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return l}});var r=t("9880"),i=t("23169");function o(e){let n=Object.assign({h2:"h2",a:"a",p:"p",ul:"ul",li:"li"},(0,i.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h2,{id:"example-project",children:["Example Project",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#example-project",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"We have created an example project based on Vue 3 and Modern.js Builder. You can build your own project by referring this project, or just cloning it as a template. The following documentation will provide more detailed instructions."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://github.com/web-infra-dev/modern-js-examples/tree/main/examples/builder-vue3",target:"_blank",rel:"noopener noreferrer",children:"modern-js-examples - builder-vue3"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://github.com/web-infra-dev/modern-js-examples/tree/main/examples/builder-vue3-rspack",target:"_blank",rel:"noopener noreferrer",children:"modern-js-examples - builder-vue3-rspack"})}),"\n"]})]})}function s(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,i.useMDXComponents)(),e.components);return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}var l=s;s.__RSPRESS_PAGE_META={},s.__RSPRESS_PAGE_META["en%2Fshared%2Fvue3Project.md"]={toc:[{text:"Example Project",id:"example-project",depth:2}],title:"",frontmatter:{}}}}]);