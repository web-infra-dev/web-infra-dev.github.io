(self.webpackChunk_modern_js_module_tools_docs=self.webpackChunk_modern_js_module_tools_docs||[]).push([["3040"],{92962:function(e,n,s){"use strict";s.r(n),s.d(n,{default:function(){return c}});var i,r=s("15169"),l=s("43932"),a=s("9880"),d=s("23169"),o=s("19730");function t(e){var n=Object.assign({h1:"h1",a:"a",div:"div",p:"p",h2:"h2",h3:"h3",pre:"pre",code:"code"},(0,d.useMDXComponents)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.h1,{id:"babel-plugin",children:["Babel Plugin",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#babel-plugin",children:"#"})]}),"\n",(0,a.jsxs)(n.div,{className:"rspress-directive tip",children:[(0,a.jsx)(n.div,{className:"rspress-directive-title",children:"TIP"}),(0,a.jsx)(n.div,{className:"rspress-directive-content",children:(0,a.jsx)(n.p,{children:"Normally, we don't need to use Babel to transform our code, this plugin is only used as a downgrade."})})]}),"\n",(0,a.jsxs)(n.h2,{id:"quick-start",children:["Quick start",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#quick-start",children:"#"})]}),"\n",(0,a.jsxs)(n.h3,{id:"install",children:["Install",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#install",children:"#"})]}),"\n","\n",(0,a.jsx)(o.PackageManagerTabs,{command:"add @modern-js/plugin-module-babel -D"}),"\n",(0,a.jsxs)(n.h3,{id:"register",children:["Register",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#register",children:"#"})]}),"\n",(0,a.jsx)(n.p,{children:"You can install the plugin with the following command:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"import { moduleTools, defineConfig } from '@modern-js/module-tools';\nimport { modulePluginBabel } from '@modern-js/plugin-module-babel';\n\nexport default defineConfig({\n  plugins: [moduleTools(), modulePluginBabel()],\n});\n"})}),"\n",(0,a.jsxs)(n.h2,{id:"config",children:["Config",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#config",children:"#"})]}),"\n",(0,a.jsxs)(n.p,{children:["See ",(0,a.jsx)(n.a,{href:"https://babeljs.io/docs/options",target:"_blank",rel:"noopener noreferrer",children:"babel options"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["Here is an example with ",(0,a.jsx)(n.code,{children:"@babel/preset-env"})," configured"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"import { moduleTools, defineConfig } from '@modern-js/module-tools';\nimport { modulePluginBabel } from '@modern-js/plugin-module-babel';\n\nexport default defineConfig({\n  plugins: [\n    moduleTools(),\n    modulePluginBabel({\n      presets: [['@babel/preset-env']],\n    }),\n  ],\n});\n"})})]})}(i=globalThis).__RSPRESS_PAGE_META||(i.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["en%2Fplugins%2Fofficial-list%2Fplugin-babel.mdx"]={toc:[{text:"Quick start",id:"quick-start",depth:2},{text:"Install",id:"install",depth:3},{text:"Register",id:"register",depth:3},{text:"Config",id:"config",depth:2}],title:"Babel Plugin",frontmatter:{}};var c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,d.useMDXComponents)(),e.components).wrapper;return n?(0,a.jsx)(n,(0,l._)((0,r._)({},e),{children:(0,a.jsx)(t,(0,r._)({},e))})):t(e)}}}]);