/*! For license information please see 8741.ead72ec4.js.LICENSE.txt */
(self.webpackChunk_modern_js_module_tools_docs=self.webpackChunk_modern_js_module_tools_docs||[]).push([["8741"],{7880:function(e,n,s){"use strict";s.r(n);var l=s("9980"),o=s("9580"),i=s("3657");function r(e){let n=Object.assign({h1:"h1",a:"a",div:"div",p:"p",h2:"h2",h3:"h3",pre:"pre",code:"code"},(0,o.ah)(),e.components);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(n.h1,{id:"babel-plugin",children:["Babel Plugin",(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#babel-plugin",children:"#"})]}),"\n",(0,l.jsxs)(n.div,{className:"rspress-directive tip",children:[(0,l.jsx)(n.div,{className:"rspress-directive-title",children:"TIP"}),(0,l.jsx)(n.div,{className:"rspress-directive-content",children:(0,l.jsx)(n.p,{children:"Normally, we don't need to use Babel to transform our code, this plugin is only used as a downgrade."})})]}),"\n",(0,l.jsxs)(n.h2,{id:"quick-start",children:["Quick start",(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#quick-start",children:"#"})]}),"\n",(0,l.jsxs)(n.h3,{id:"install",children:["Install",(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#install",children:"#"})]}),"\n","\n",(0,l.jsx)(i.SU,{command:"add @modern-js/plugin-module-babel -D"}),"\n",(0,l.jsxs)(n.h3,{id:"register",children:["Register",(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#register",children:"#"})]}),"\n",(0,l.jsx)(n.p,{children:"You can install the plugin with the following command:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-ts",children:"import { moduleTools, defineConfig } from '@modern-js/module-tools';\nimport { modulePluginBabel } from '@modern-js/plugin-module-babel';\n\nexport default defineConfig({\n  plugins: [moduleTools(), modulePluginBabel()],\n});\n"})}),"\n",(0,l.jsx)(n.p,{children:"You can also configure the registration via hooks, for example,\nif you need to bundle two files A and B at the same time and only need to use babel when bundle A:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-ts",children:"import { moduleTools, defineConfig } from '@modern-js/module-tools';\nimport { getBabelHook } from '@modern-js/plugin-module-babel';\n\nconst babelHook = getBabelHook({\n  // babel options\n});\n\nexport default defineConfig({\n  plugins: [moduleTools()],\n  buildConfig: [\n    {\n      hooks: [babelHook],\n      input: ['src/a.ts'],\n    },\n    {\n      input: ['src/b.ts'],\n    },\n  ],\n});\n"})}),"\n",(0,l.jsxs)(n.h2,{id:"config",children:["Config",(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#config",children:"#"})]}),"\n",(0,l.jsxs)(n.p,{children:["See ",(0,l.jsx)(n.a,{href:"https://babeljs.io/docs/options",target:"_blank",rel:"noopener noreferrer",children:"babel options"}),"."]}),"\n",(0,l.jsxs)(n.p,{children:["Here is an example with ",(0,l.jsx)(n.code,{children:"@babel/preset-env"})," configured"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-ts",children:"import { moduleTools, defineConfig } from '@modern-js/module-tools';\nimport { modulePluginBabel } from '@modern-js/plugin-module-babel';\n\nexport default defineConfig({\n  plugins: [\n    moduleTools(),\n    modulePluginBabel({\n      presets: [['@babel/preset-env']],\n    }),\n  ],\n});\n"})})]})}function d(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,o.ah)(),e.components);return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(r,{...e})}):r(e)}n.default=d,d.__RSPRESS_PAGE_META={},d.__RSPRESS_PAGE_META["en%2Fplugins%2Fofficial-list%2Fplugin-babel.mdx"]={toc:[{text:"Quick start",id:"quick-start",depth:2},{text:"Install",id:"install",depth:3},{text:"Register",id:"register",depth:3},{text:"Config",id:"config",depth:2}],title:"Babel Plugin",frontmatter:{}}}}]);