(self.webpackChunk_modern_js_builder_doc=self.webpackChunk_modern_js_builder_doc||[]).push([["8822"],{94963:function(e,i,n){"use strict";n.r(i),n.d(i,{default:function(){return t}});var r=n("9880"),o=n("23169");function d(e){let i=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",ul:"ul",li:"li",h3:"h3",pre:"pre",code:"code",strong:"strong"},(0,o.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(i.h1,{id:"builder-config",children:["Builder Config",(0,r.jsx)(i.a,{className:"header-anchor","aria-hidden":"true",href:"#builder-config",children:"#"})]}),"\n",(0,r.jsx)(i.p,{children:"Builder provides a wealth of configs to help users customize the build behavior."}),"\n",(0,r.jsxs)(i.h2,{id:"config-categories",children:["Config Categories",(0,r.jsx)(i.a,{className:"header-anchor","aria-hidden":"true",href:"#config-categories",children:"#"})]}),"\n",(0,r.jsx)(i.p,{children:"Builder Configs are divided into the following categories:"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.a,{href:"/api/config-dev",children:"Dev Config"}),": Config related to local development."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.a,{href:"/api/config-html",children:"Html Config"}),": Config related to HTML."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.a,{href:"/api/config-tools",children:"Tools Config"}),": Config related to the low-level tools."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.a,{href:"/api/config-source",children:"Source Config"}),": Config related to source code parsing and compilation."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.a,{href:"/api/config-output",children:"Output Config"}),": Config related to output."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.a,{href:"/api/config-security",children:"Security Config"}),": Config related to security."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.a,{href:"/api/config-performance",children:"Performance Config"}),": Config related to performance."]}),"\n"]}),"\n",(0,r.jsxs)(i.p,{children:["You can find detailed descriptions of all configs on the ",(0,r.jsx)(i.a,{href:"/en/api/",children:"API Reference"})," page."]}),"\n",(0,r.jsxs)(i.h2,{id:"default-values",children:["Default Values",(0,r.jsx)(i.a,{className:"header-anchor","aria-hidden":"true",href:"#default-values",children:"#"})]}),"\n",(0,r.jsx)(i.p,{children:"The Builder presets a default value for each config, and the default value is suitable for most scenarios. At the same time, the upper-level framework will also override some of the default values based on the requirements of the vertical scene."}),"\n",(0,r.jsx)(i.p,{children:"In most cases, you don't need to define any Builder config, just use it right out of the box."}),"\n",(0,r.jsxs)(i.h2,{id:"use-config",children:["Use Config",(0,r.jsx)(i.a,{className:"header-anchor","aria-hidden":"true",href:"#use-config",children:"#"})]}),"\n",(0,r.jsxs)(i.h3,{id:"in-the-upper-framework",children:["In the Upper Framework",(0,r.jsx)(i.a,{className:"header-anchor","aria-hidden":"true",href:"#in-the-upper-framework",children:"#"})]}),"\n",(0,r.jsx)(i.p,{children:"When you use a Builder-based upper-level framework, you can define the Builder config directly through the framework's config file, and the upper-level framework will pass the config to the Builder."}),"\n",(0,r.jsxs)(i.p,{children:["For example, in the Modern.js framework, you can define the Builder's ",(0,r.jsx)(i.a,{href:"/en/api/config-source#sourcealias",children:"source.alias"})," config in ",(0,r.jsx)(i.a,{href:"https://modernjs.dev/en/configure/app/usage.html",target:"_blank",rel:"noopener noreferrer",children:"modern.config.ts"})," file."]}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"export default {\n  source: {\n    alias: {\n      '@common': './src/common',\n    },\n  },\n};\n"})}),"\n",(0,r.jsxs)(i.h3,{id:"using-the-node-api",children:["Using the Node API",(0,r.jsx)(i.a,{className:"header-anchor","aria-hidden":"true",href:"#using-the-node-api",children:"#"})]}),"\n",(0,r.jsxs)(i.p,{children:["When you call the Builder through the Node API, you can pass in the Builder config through the Provider's ",(0,r.jsx)(i.code,{children:"builderConfig"})," option:"]}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-ts",children:"import { builderWebpackProvider } from '@modern-js/builder-webpack-provider';\n\nconst provider = builderWebpackProvider({\n  builderConfig: {\n    // some configs\n  },\n});\n"})}),"\n",(0,r.jsxs)(i.p,{children:["Please refer to ",(0,r.jsx)(i.a,{href:"/en/api/builder-core#createbuilder",children:"API - createBuilder"})," for details."]}),"\n",(0,r.jsxs)(i.h2,{id:"relationship-with-framework-config",children:["Relationship with Framework Config",(0,r.jsx)(i.a,{className:"header-anchor","aria-hidden":"true",href:"#relationship-with-framework-config",children:"#"})]}),"\n",(0,r.jsx)(i.p,{children:"Generally speaking, the Builder config is a subset of the framework config."}),"\n",(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.strong,{children:"Builder config only deals with build-related behaviors"}),", while framework config covers a wider range, including runtime, server, deployment, etc., so framework config is extended from Builder config."]}),"\n",(0,r.jsxs)(i.h2,{id:"debug-the-config",children:["Debug the config",(0,r.jsx)(i.a,{className:"header-anchor","aria-hidden":"true",href:"#debug-the-config",children:"#"})]}),"\n",(0,r.jsxs)(i.p,{children:["You can enable Builder's debug mode by adding the ",(0,r.jsx)(i.code,{children:"DEBUG=builder"})," environment variable when executing a build."]}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-bash",children:"DEBUG=builder pnpm dev\n"})}),"\n",(0,r.jsx)(i.p,{children:"In debug mode, Builder will write the Builder config to the dist directory, which is convenient for developers to view and debug."}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{children:"Inspect config succeed, open the following files to view the content:\n\n   - Builder Config: /Project/demo/dist/builder.config.js\n   - Webpack Config (web): /Project/demo/dist/webpack.config.web.js\n"})}),"\n",(0,r.jsxs)(i.p,{children:["Open the generated ",(0,r.jsx)(i.code,{children:"/dist/builder.config.js"})," file to see the complete content of the Builder config."]}),"\n",(0,r.jsxs)(i.p,{children:["For a complete introduction to debug mode, see the ",(0,r.jsx)(i.a,{href:"/guide/debug/debug-mode",children:"Debug Mode"})," chapter."]})]})}function s(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:i}=Object.assign({},(0,o.useMDXComponents)(),e.components);return i?(0,r.jsx)(i,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}var t=s;s.__RSPRESS_PAGE_META={},s.__RSPRESS_PAGE_META["en%2Fguide%2Fbasic%2Fbuilder-config.mdx"]={toc:[{text:"Config Categories",id:"config-categories",depth:2},{text:"Default Values",id:"default-values",depth:2},{text:"Use Config",id:"use-config",depth:2},{text:"In the Upper Framework",id:"in-the-upper-framework",depth:3},{text:"Using the Node API",id:"using-the-node-api",depth:3},{text:"Relationship with Framework Config",id:"relationship-with-framework-config",depth:2},{text:"Debug the config",id:"debug-the-config",depth:2}],title:"Builder Config",frontmatter:{}}}}]);