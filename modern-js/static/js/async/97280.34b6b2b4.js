/*! For license information please see 97280.34b6b2b4.js.LICENSE.txt */
(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["97280"],{57043:function(e,n,i){"use strict";i.r(n),i.d(n,{default:function(){return d}});var r=i("39980"),s=i("96954");function l(e){let n=Object.assign({h1:"h1",a:"a",ul:"ul",li:"li",strong:"strong",code:"code",p:"p",h2:"h2",h3:"h3",pre:"pre"},(0,s.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"builderplugins",children:["builderPlugins",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#builderplugins",children:"#"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Type:"})," ",(0,r.jsx)(n.code,{children:"BuilderPlugin[]"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Default:"})," ",(0,r.jsx)(n.code,{children:"[]"})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Used to configure the Modern.js Builder plugin."}),"\n",(0,r.jsxs)(n.p,{children:["Modern.js Builder is the build tool of Modern.js, please read ",(0,r.jsx)(n.a,{href:"/guides/concept/builder",children:"Builder"})," for background. If you want to know how to write Builder plugins, you can refer to ",(0,r.jsx)(n.a,{href:"https://modernjs.dev/builder/en/plugins/introduction.html",target:"_blank",rel:"noopener noreferrer",children:"Modern.js Builder - Introduce to Plugin"}),"."]}),"\n",(0,r.jsxs)(n.h2,{id:"precautions",children:["Precautions",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#precautions",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["This option ",(0,r.jsx)(n.strong,{children:"is used to configure the Modern.js Builder plugins"}),". If you need to configure other types of plugins, please select the corresponding configs:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Use ",(0,r.jsx)(n.a,{href:"/configure/app/plugins",children:"plugins"})," to configure Modern.js framework plugins."]}),"\n",(0,r.jsxs)(n.li,{children:["Use ",(0,r.jsx)(n.a,{href:"/configure/app/tools/bundler-chain",children:"tools.bundlerChain"})," to configure Rspack or webpack plugins."]}),"\n",(0,r.jsxs)(n.li,{children:["Use ",(0,r.jsx)(n.a,{href:"/configure/app/tools/babel",children:"tools.babel"})," to configure Babel plugins."]}),"\n"]}),"\n",(0,r.jsxs)(n.h2,{id:"when-to-use",children:["When to use",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#when-to-use",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["In most scenarios, we recommend you to use the Modern.js framework plugin, which can be registered through the ",(0,r.jsx)(n.a,{href:"/configure/app/plugins",children:"plugins"})," config. Because the API provided by the framework plugin is richer and more capable, while the API provided by the Builder plugin can only be used to build scenes."]}),"\n",(0,r.jsxs)(n.p,{children:["When you need to reference some existing Builder plugins (and there is no related capability in Modern.js), or reuse Builder plugins between different frameworks, you can use the ",(0,r.jsx)(n.code,{children:"builderPlugins"})," field to register them."]}),"\n",(0,r.jsxs)(n.h2,{id:"example",children:["Example",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#example",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"Below is an example of using the Builder plugin."}),"\n",(0,r.jsxs)(n.h3,{id:"using-plugins-on-npm",children:["Using plugins on npm",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#using-plugins-on-npm",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"To use a plugin on npm, you need to install the plugin through the package manager and import it."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import myBuilderPlugin from 'my-builder-plugin';\n\nexport default defineConfig({\n  builderPlugins: [myBuilderPlugin()],\n});\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"using-local-plugins",children:["Using local plugins",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#using-local-plugins",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"Use the plugin in the local code repository, you can import it directly through the relative path import."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import myBuilderPlugin from './plugin/myBuilderPlugin';\n\nexport default defineConfig({\n  builderPlugins: [myBuilderPlugin()],\n});\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"plugin-configuration-options",children:["Plugin configuration options",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#plugin-configuration-options",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"If the plugin provides some custom configuration options, you can pass in the configuration through the parameters of the plugin function."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import myBuilderPlugin from 'my-builder-plugin';\n\nexport default defineConfig({\n  builderPlugins: [\n    myBuilderPlugin({\n      foo: 1,\n      bar: 2,\n    }),\n  ],\n});\n"})})]})}function o(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,s.useMDXComponents)(),e.components);return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}var d=o;o.__RSPRESS_PAGE_META={},o.__RSPRESS_PAGE_META["en%2Fconfigure%2Fapp%2Fbuilder-plugins.mdx"]={toc:[{text:"Precautions",id:"precautions",depth:2},{text:"When to use",id:"when-to-use",depth:2},{text:"Example",id:"example",depth:2},{text:"Using plugins on npm",id:"using-plugins-on-npm",depth:3},{text:"Using local plugins",id:"using-local-plugins",depth:3},{text:"Plugin configuration options",id:"plugin-configuration-options",depth:3}],title:"builderPlugins",frontmatter:{sidebar_position:21}}}}]);