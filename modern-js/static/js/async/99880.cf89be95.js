(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["99880"],{12052:function(n,e,i){"use strict";i.r(e),i.d(e,{default:function(){return l},frontmatter:function(){return a}});var o=i("9880"),s=i("23169");function t(n){let e=Object.assign({h1:"h1",a:"a",ul:"ul",li:"li",strong:"strong",code:"code",p:"p",h3:"h3",pre:"pre",ol:"ol"},(0,s.useMDXComponents)(),n.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(e.h1,{id:"autoloadplugins",children:["autoLoadPlugins",(0,o.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#autoloadplugins",children:"#"})]}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.strong,{children:"Type:"})," ",(0,o.jsx)(e.code,{children:"boolean"})]}),"\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.strong,{children:"Default:"})," ",(0,o.jsx)(e.code,{children:"false"})]}),"\n"]}),"\n",(0,o.jsx)(e.p,{children:"Used to configure whether Modern.js enables auto-registration of plugins."}),"\n",(0,o.jsxs)(e.h3,{id:"manual-registration-plugin",children:["Manual Registration Plugin",(0,o.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#manual-registration-plugin",children:"#"})]}),"\n",(0,o.jsxs)(e.p,{children:["By default, installing the plugin requires you to register the plugin manually in the ",(0,o.jsx)(e.code,{children:"modern.config.ts"}),"."]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import { appTools, defineConfig } from '@modern-js/app-tools';\nimport { bffPlugin } from '@modern-js/plugin-bff';\n\nexport default defineConfig({\n  plugins: [appTools(), bffPlugin()],\n});\n"})}),"\n",(0,o.jsxs)(e.h3,{id:"auto-registration-plugin",children:["Auto Registration plugin",(0,o.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#auto-registration-plugin",children:"#"})]}),"\n",(0,o.jsxs)(e.p,{children:["In addition to means registration, Modern.js also provides a way to automatically register plugins: set the ",(0,o.jsx)(e.code,{children:"autoLoadPlugin"})," configuration option to ",(0,o.jsx)(e.code,{children:"true"}),"."]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import { defineConfig } from '@modern-js/app-tools';\n\nexport default defineConfig({\n  autoLoadPlugins: true,\n});\n"})}),"\n",(0,o.jsx)(e.p,{children:"Modern.js will help you automatically register the plugin by following these steps"}),"\n",(0,o.jsxs)(e.ol,{children:["\n",(0,o.jsx)(e.li,{children:"Modern.js maintains an official list of plugins internally."}),"\n"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-js",children:"const InternalPlugins = ['@modern-js/app-tools', '@modern-js/plugin-i18n', ...];\n"})}),"\n",(0,o.jsxs)(e.ol,{start:"2",children:["\n",(0,o.jsxs)(e.li,{children:["Modern.js will read your ",(0,o.jsx)(e.code,{children:"package.json"})," and collect the dependency information."]}),"\n"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-json",meta:'title="package.json"',children:'"dependencies": {\n  "@modern-js/plugin-i18n": "x.x.x"\n  ...\n},\n"devDependencies": {\n  "@modern-js/app-tools": "x.x.x"\n  ...\n}\n'})}),"\n",(0,o.jsxs)(e.ol,{start:"3",children:["\n",(0,o.jsxs)(e.li,{children:["Modern.js observes that when you install dependencies such as ",(0,o.jsx)(e.code,{children:"@modern-js/plugin-i18n"})," and ",(0,o.jsx)(e.code,{children:"@modern-js/app-tools"}),", automatic plugin registration will be imported."]}),"\n"]}),"\n",(0,o.jsx)(e.p,{children:"You can notice that this approach is relatively black-box and you are not even aware of the process of loading the plugin. We want to expose more details to the developer and be able to let the developer control the process."}),"\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(e.strong,{children:"Therefore we recommend you to register the plugin manually."})})]})}function r(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}=Object.assign({},(0,s.useMDXComponents)(),n.components);return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(t,{...n})}):t(n)}var l=r;r.__RSPRESS_PAGE_META={},r.__RSPRESS_PAGE_META["en%2Fconfigure%2Fapp%2Fauto-load-plugin.mdx"]={toc:[{text:"Manual Registration Plugin",id:"manual-registration-plugin",depth:3},{text:"Auto Registration plugin",id:"auto-registration-plugin",depth:3}],title:"autoLoadPlugins"};let a={sidebar_position:22}}}]);