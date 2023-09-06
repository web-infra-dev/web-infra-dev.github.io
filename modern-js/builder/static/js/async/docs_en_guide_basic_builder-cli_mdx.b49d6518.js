(self.webpackChunk_modern_js_builder_doc=self.webpackChunk_modern_js_builder_doc||[]).push([["docs_en_guide_basic_builder-cli_mdx"],{68746:function(e,n,i){"use strict";i.r(n),i.d(n,{default:function(){return t}});var r,d=i("15169"),s=i("43932"),l=i("9880"),o=i("23169");function c(e){var n=Object.assign({h1:"h1",a:"a",p:"p",code:"code",ul:"ul",li:"li",h2:"h2",pre:"pre",h3:"h3",strong:"strong"},(0,o.useMDXComponents)(),e.components);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(n.h1,{id:"use-builder-cli",children:["Use Builder CLI",(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#use-builder-cli",children:"#"})]}),"\n",(0,l.jsxs)(n.p,{children:["Modern.js Builder provides a lightweight CLI tool that includes basic commands such as ",(0,l.jsx)(n.code,{children:"dev"})," and ",(0,l.jsx)(n.code,{children:"build"}),". It is primarily used for building non-React projects."]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["For React projects, we recommend using the Modern.js framework directly. Please refer to ",(0,l.jsx)(n.a,{href:"https://modernjs.dev/en/guides/get-started/quick-start.html",target:"_blank",rel:"noopener noreferrer",children:"Modern.js - Quick Start"})," for more information."]}),"\n",(0,l.jsx)(n.li,{children:"For non-React projects, such as developing a Vue project, you can use the Builder CLI tool to build your project."}),"\n"]}),"\n",(0,l.jsxs)(n.h2,{id:"install",children:["Install",(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#install",children:"#"})]}),"\n",(0,l.jsx)(n.p,{children:"You need to install two packages:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"@modern-js/builder-cli"})," is the CLI tool for Builder, providing basic CLI commands and automatically loading the installed Provider in the current project."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"@modern-js/builder-webpack-provider"})," or ",(0,l.jsx)(n.code,{children:"@modern-js/builder-rspack-provider"}),", they are Providers for Builder, offering build capabilities based on webpack or Rspack."]}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"# Using webpack for bundling\npnpm add @modern-js/builder-cli @modern-js/builder-webpack-provider -D\n\n# Using Rspack for bundling\npnpm add @modern-js/builder-cli @modern-js/builder-rspack-provider -D\n"})}),"\n",(0,l.jsxs)(n.h2,{id:"commands",children:["Commands",(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#commands",children:"#"})]}),"\n",(0,l.jsx)(n.p,{children:"Builder CLI provides the following commands to help you quickly start a development server, build production-ready code, and more."}),"\n",(0,l.jsxs)(n.h3,{id:"builder-dev",children:["builder dev",(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#builder-dev",children:"#"})]}),"\n",(0,l.jsxs)(n.p,{children:["The ",(0,l.jsx)(n.code,{children:"builder dev"})," command is used to start a local development server and compile the source code in the development environment."]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"Usage: builder dev [options]\n\nOptions:\n  -h, --help            display help for command\n"})}),"\n",(0,l.jsxs)(n.h3,{id:"builder-build",children:["builder build",(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#builder-build",children:"#"})]}),"\n",(0,l.jsxs)(n.p,{children:["The ",(0,l.jsx)(n.code,{children:"builder build"})," command will build the outputs for production in the ",(0,l.jsx)(n.code,{children:"dist/"})," directory by default."]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"Usage: builder build [options]\n\nOptions:\n  -h, --help            display help for command\n"})}),"\n",(0,l.jsxs)(n.h3,{id:"builder-serve",children:["builder serve",(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#builder-serve",children:"#"})]}),"\n",(0,l.jsxs)(n.p,{children:["The ",(0,l.jsx)(n.code,{children:"builder serve"})," command is used to preview the production build outputs locally. Note that you need to execute the ",(0,l.jsx)(n.code,{children:"builder build"})," command beforehand to generate the corresponding outputs."]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"Usage: builder serve [options]\n\nOptions:\n  -h, --help            display help for command\n"})}),"\n",(0,l.jsxs)(n.h2,{id:"configuration",children:["Configuration",(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#configuration",children:"#"})]}),"\n",(0,l.jsxs)(n.p,{children:["Builder CLI will read the ",(0,l.jsx)(n.code,{children:"builder.config.ts"})," configuration file located in the root directory of your project by default. You can use ",(0,l.jsx)(n.a,{href:"/api/index",children:"all the configuration options"})," provided by Builder in the configuration file."]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-ts",meta:'title="builder.config.ts"',children:"import { defineConfig } from '@modern-js/builder-cli';\n\nexport default defineConfig({\n  output: {\n    disableTsChecker: true,\n  },\n});\n"})}),"\n",(0,l.jsxs)(n.p,{children:["When you use Rspack as the bundler, there are some differences in configuration types between webpack and Rspack. Therefore, you need to specify the ",(0,l.jsx)(n.code,{children:"'rspack'"})," generic for ",(0,l.jsx)(n.code,{children:"defineConfig"}),":"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-diff",meta:'title="builder.config.ts"',children:"- export default defineConfig({\n+ export default defineConfig<'rspack'>({\n  // ...\n});\n"})}),"\n",(0,l.jsxs)(n.h2,{id:"build-entry",children:["Build Entry",(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#build-entry",children:"#"})]}),"\n",(0,l.jsxs)(n.p,{children:["By default, Builder CLI uses ",(0,l.jsx)(n.code,{children:"src/index.(js|ts|jsx|tsx)"})," as the build entry. You can modify the build entry using the ",(0,l.jsx)(n.code,{children:"source.entries"})," configuration option."]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.strong,{children:"Type:"})}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-ts",children:"type Entries = Record<string, string>;\n"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.strong,{children:"Default:"})}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-ts",children:"const defaultEntry = {\n  index: 'src/index.(js|ts|jsx|tsx)',\n};\n"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.strong,{children:"Example:"})}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-ts",meta:'title="builder.config.ts"',children:"import { defineConfig } from '@modern-js/builder-cli';\n\nexport default defineConfig({\n  source: {\n    entries: {\n      foo: './src/pages/foo/index.ts',\n      bar: './src/pages/bar/index.ts',\n    },\n  },\n});\n"})}),"\n",(0,l.jsxs)(n.h2,{id:"registering-plugins",children:["Registering Plugins",(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#registering-plugins",children:"#"})]}),"\n",(0,l.jsxs)(n.p,{children:["You can register Builder plugins using the ",(0,l.jsx)(n.code,{children:"builderPlugins"})," option in ",(0,l.jsx)(n.code,{children:"builder.config.ts"}),"."]}),"\n",(0,l.jsx)(n.p,{children:"For example, to register a Vue plugin:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-ts",meta:'title="builder.config.ts"',children:"import { defineConfig } from '@modern-js/builder-cli';\nimport { builderPluginVue } from '@modern-js/builder-plugin-vue';\n\nexport default defineConfig({\n  builderPlugins: [builderPluginVue()],\n});\n"})})]})}(r=globalThis).__RSPRESS_PAGE_META||(r.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["en%2Fguide%2Fbasic%2Fbuilder-cli.mdx"]={toc:[{text:"Install",id:"install",depth:2},{text:"Commands",id:"commands",depth:2},{text:"builder dev",id:"builder-dev",depth:3},{text:"builder build",id:"builder-build",depth:3},{text:"builder serve",id:"builder-serve",depth:3},{text:"Configuration",id:"configuration",depth:2},{text:"Build Entry",id:"build-entry",depth:2},{text:"Registering Plugins",id:"registering-plugins",depth:2}],title:"Use Builder CLI",frontmatter:{}};var t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,o.useMDXComponents)(),e.components).wrapper;return n?(0,l.jsx)(n,(0,s._)((0,d._)({},e),{children:(0,l.jsx)(c,(0,d._)({},e))})):c(e)}}}]);