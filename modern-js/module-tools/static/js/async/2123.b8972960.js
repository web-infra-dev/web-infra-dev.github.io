(self.webpackChunk_modern_js_module_tools_docs=self.webpackChunk_modern_js_module_tools_docs||[]).push([["2123"],{11056:function(e,n,i){"use strict";i.r(n),i.d(n,{default:function(){return a}});var r,s=i("15169"),l=i("43932"),o=i("9880"),d=i("23169");function t(e){var n=Object.assign({h1:"h1",a:"a",p:"p",ul:"ul",li:"li",strong:"strong",code:"code",h2:"h2",h3:"h3",pre:"pre",h4:"h4"},(0,d.useMDXComponents)(),e.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.h1,{id:"plugins",children:["plugins",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#plugins",children:"#"})]}),"\n",(0,o.jsx)(n.p,{children:"This chapter describes the configuration of the registered Modern.js Module plugin."}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Type"}),": ",(0,o.jsx)(n.code,{children:"ModuleToolsPlugin[]"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Default"}),": ",(0,o.jsx)(n.code,{children:"undefined"})]}),"\n"]}),"\n",(0,o.jsxs)(n.h2,{id:"plugin-execution-order",children:["Plugin Execution Order",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#plugin-execution-order",children:"#"})]}),"\n",(0,o.jsxs)(n.p,{children:["By default, custom plugins are executed in the order specified in the ",(0,o.jsx)(n.code,{children:"plugins"})," array. The execution of built-in plugins provided by Modern.js Module happens before the execution of custom plugins."]}),"\n",(0,o.jsxs)(n.p,{children:["When plugins use fields that control the execution order, such as ",(0,o.jsx)(n.code,{children:"pre"})," and ",(0,o.jsx)(n.code,{children:"post"}),", the execution order is adjusted based on the declared fields. For more information, please refer to the ",(0,o.jsx)(n.a,{href:"https://modernjs.dev/en/guides/topic-detail/framework-plugin/relationship",target:"_blank",rel:"noopener noreferrer",children:"Relationship Between Plugins"})," guide."]}),"\n",(0,o.jsxs)(n.h2,{id:"developing-plugins",children:["Developing Plugins",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#developing-plugins",children:"#"})]}),"\n",(0,o.jsxs)(n.p,{children:["To learn how to write plugins, please refer to the ",(0,o.jsx)(n.a,{href:"/plugins/guide/getting-started",children:"Plugin Writing Guide"}),"."]}),"\n",(0,o.jsxs)(n.h2,{id:"example",children:["Example",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#example",children:"#"})]}),"\n",(0,o.jsxs)(n.h3,{id:"using-plugins-from-npm",children:["Using Plugins from npm",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#using-plugins-from-npm",children:"#"})]}),"\n",(0,o.jsx)(n.p,{children:"To use plugins from npm, you need to install them using a package manager and import them in your configuration file."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",meta:'title="modern.config.ts"',children:"import { myPlugin } from 'my-plugin';\n\nexport default defineConfig({\n  plugins: [myPlugin()],\n});\n"})}),"\n",(0,o.jsxs)(n.h4,{id:"using-local-plugins",children:["Using Local Plugins",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#using-local-plugins",children:"#"})]}),"\n",(0,o.jsx)(n.p,{children:"To use plugins from a local code repository, you can directly import them using a relative path."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",meta:'title="modern.config.ts"',children:"import { myPlugin } from './plugins/myPlugin';\n\nexport default defineConfig({\n  plugins: [myPlugin()],\n});\n"})}),"\n",(0,o.jsxs)(n.h3,{id:"plugin-configuration",children:["Plugin Configuration",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#plugin-configuration",children:"#"})]}),"\n",(0,o.jsx)(n.p,{children:"If a plugin provides custom configuration options, you can pass the configuration through the plugin function's parameters."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",meta:'title="modern.config.ts"',children:"import { myPlugin } from 'my-plugin';\n\nexport default defineConfig({\n  plugins: [\n    myPlugin({\n      foo: 1,\n      bar: 2,\n    }),\n  ],\n});\n"})})]})}(r=globalThis).__RSPRESS_PAGE_META||(r.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["en%2Fapi%2Fconfig%2Fplugins.md"]={toc:[{text:"Plugin Execution Order",id:"plugin-execution-order",depth:2},{text:"Developing Plugins",id:"developing-plugins",depth:2},{text:"Example",id:"example",depth:2},{text:"Using Plugins from npm",id:"using-plugins-from-npm",depth:3},{text:"Using Local Plugins",id:"using-local-plugins",depth:4},{text:"Plugin Configuration",id:"plugin-configuration",depth:3}],title:"plugins",frontmatter:{sidebar_position:4}};var a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,d.useMDXComponents)(),e.components).wrapper;return n?(0,o.jsx)(n,(0,l._)((0,s._)({},e),{children:(0,o.jsx)(t,(0,s._)({},e))})):t(e)}}}]);