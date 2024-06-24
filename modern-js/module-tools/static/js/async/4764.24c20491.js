/*! For license information please see 4764.24c20491.js.LICENSE.txt */
(self.webpackChunk_modern_js_module_tools_docs=self.webpackChunk_modern_js_module_tools_docs||[]).push([["4764"],{3889:function(e,n,s){"use strict";s.r(n);var l=s("9980"),o=s("9580"),d=s("3657");function r(e){let n=Object.assign({h1:"h1",a:"a",div:"div",p:"p",h2:"h2",h3:"h3",pre:"pre",code:"code"},(0,o.ah)(),e.components);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(n.h1,{id:"babel-\u63D2\u4EF6",children:["Babel \u63D2\u4EF6",(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#babel-\u63D2\u4EF6",children:"#"})]}),"\n",(0,l.jsxs)(n.div,{className:"rspress-directive tip",children:[(0,l.jsx)(n.div,{className:"rspress-directive-title",children:"TIP"}),(0,l.jsx)(n.div,{className:"rspress-directive-content",children:(0,l.jsx)(n.p,{children:"\u901A\u5E38\u60C5\u51B5\u4E0B\uFF0C\u6211\u4EEC\u65E0\u9700\u4F7F\u7528 Babel \u8F6C\u6362\u6211\u4EEC\u7684\u4EE3\u7801\uFF0C\u6B64\u63D2\u4EF6\u4EC5\u4F5C\u4E3A\u4E00\u79CD\u964D\u7EA7\u65B9\u5F0F\u3002"})})]}),"\n",(0,l.jsxs)(n.h2,{id:"\u5FEB\u901F\u5F00\u59CB",children:["\u5FEB\u901F\u5F00\u59CB",(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u5FEB\u901F\u5F00\u59CB",children:"#"})]}),"\n",(0,l.jsxs)(n.h3,{id:"\u5B89\u88C5",children:["\u5B89\u88C5",(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u5B89\u88C5",children:"#"})]}),"\n","\n",(0,l.jsx)(d.SU,{command:"add @modern-js/plugin-module-babel -D"}),"\n",(0,l.jsxs)(n.h3,{id:"\u6CE8\u518C\u63D2\u4EF6",children:["\u6CE8\u518C\u63D2\u4EF6",(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u6CE8\u518C\u63D2\u4EF6",children:"#"})]}),"\n",(0,l.jsx)(n.p,{children:"\u5728 Modern.js Module \u4E2D\uFF0C\u4F60\u53EF\u4EE5\u6309\u7167\u5982\u4E0B\u65B9\u5F0F\u6CE8\u518C\u63D2\u4EF6\uFF1A"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-ts",children:"import { moduleTools, defineConfig } from '@modern-js/module-tools';\nimport { modulePluginBabel } from '@modern-js/plugin-module-babel';\n\nexport default defineConfig({\n  plugins: [moduleTools(), modulePluginBabel()],\n});\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u4F60\u4E5F\u53EF\u4EE5\u901A\u8FC7 hooks \u914D\u7F6E\u6CE8\u518C\uFF0C\u4F8B\u5982\u4F60\u540C\u65F6\u9700\u8981\u6253\u5305 A\uFF0CB \u4E24\u4E2A\u6587\u4EF6\uFF0C\u5E76\u53EA\u9700\u8981\u5728\u6253\u5305 A \u65F6\u4F7F\u7528 babel\uFF1A"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-ts",children:"import { moduleTools, defineConfig } from '@modern-js/module-tools';\nimport { getBabelHook } from '@modern-js/plugin-module-babel';\n\nconst babelHook = getBabelHook({\n  // babel options\n});\n\nexport default defineConfig({\n  plugins: [moduleTools()],\n  buildConfig: [\n    {\n      hooks: [babelHook],\n      input: ['src/a.ts'],\n    },\n    {\n      input: ['src/b.ts'],\n    },\n  ],\n});\n"})}),"\n",(0,l.jsxs)(n.h2,{id:"\u914D\u7F6E",children:["\u914D\u7F6E",(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u914D\u7F6E",children:"#"})]}),"\n",(0,l.jsxs)(n.p,{children:["See ",(0,l.jsx)(n.a,{href:"https://babeljs.io/docs/options",target:"_blank",rel:"noopener noreferrer",children:"Babel options"})]}),"\n",(0,l.jsxs)(n.p,{children:["\u4E0B\u9762\u662F\u4E00\u4E2A\u914D\u7F6E\u4E86",(0,l.jsx)(n.code,{children:"@babel/preset-env"}),"\u7684\u4F8B\u5B50\uFF1A"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-ts",children:"import { moduleTools, defineConfig } from '@modern-js/module-tools';\nimport { modulePluginBabel } from '@modern-js/plugin-module-babel';\n\nexport default defineConfig({\n  plugins: [\n    moduleTools(),\n    modulePluginBabel({\n      presets: [['@babel/preset-env']],\n    }),\n  ],\n});\n"})})]})}function i(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,o.ah)(),e.components);return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(r,{...e})}):r(e)}n.default=i,i.__RSPRESS_PAGE_META={},i.__RSPRESS_PAGE_META["zh%2Fplugins%2Fofficial-list%2Fplugin-babel.mdx"]={toc:[{text:"\u5FEB\u901F\u5F00\u59CB",id:"\u5FEB\u901F\u5F00\u59CB",depth:2},{text:"\u5B89\u88C5",id:"\u5B89\u88C5",depth:3},{text:"\u6CE8\u518C\u63D2\u4EF6",id:"\u6CE8\u518C\u63D2\u4EF6",depth:3},{text:"\u914D\u7F6E",id:"\u914D\u7F6E",depth:2}],title:"Babel \u63D2\u4EF6",frontmatter:{}}}}]);