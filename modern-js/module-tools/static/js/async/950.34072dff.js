/*! For license information please see 950.34072dff.js.LICENSE.txt */
(self.webpackChunk_modern_js_module_tools_docs=self.webpackChunk_modern_js_module_tools_docs||[]).push([["950"],{98774:function(e,n,s){"use strict";s.r(n),s.d(n,{default:function(){return t}});var r=s("39980"),i=s("96954"),l=s("27824");function d(e){let n=Object.assign({h1:"h1",a:"a",p:"p",div:"div",ol:"ol",li:"li",code:"code",h2:"h2",h3:"h3",pre:"pre",ul:"ul",strong:"strong"},(0,i.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"vue-\u63D2\u4EF6",children:["Vue \u63D2\u4EF6",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#vue-\u63D2\u4EF6",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["Vue \u63D2\u4EF6\u63D0\u4F9B\u4E86\u5BF9 Vue 3 \u7EC4\u4EF6\u6784\u5EFA\u7684\u652F\u6301\uFF0C\u63D2\u4EF6\u5185\u90E8\u96C6\u6210\u4E86 ",(0,r.jsx)(n.a,{href:"https://github.com/pipe01/esbuild-plugin-vue3",target:"_blank",rel:"noopener noreferrer",children:"esbuild-plugin-vue3"})," \u548C ",(0,r.jsx)(n.a,{href:"https://github.com/vuejs/babel-plugin-jsx",target:"_blank",rel:"noopener noreferrer",children:"@vue/babel-plugin-jsx"}),"\u3002"]}),"\n",(0,r.jsxs)(n.div,{className:"rspress-directive warning",children:[(0,r.jsx)(n.div,{className:"rspress-directive-title",children:"WARNING"}),(0,r.jsxs)(n.div,{className:"rspress-directive-content",children:[(0,r.jsx)(n.p,{children:"\u8BF7\u6CE8\u610F\uFF0C\u6B64\u63D2\u4EF6\u4ECD\u6709\u4E00\u4E9B\u7528\u6CD5\u9650\u5236\uFF1A"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"\u76EE\u524D\u6B64\u63D2\u4EF6\u7684\u5B9E\u73B0\u662F\u76F4\u63A5\u96C6\u6210\u793E\u533A\u63D2\u4EF6\uFF0C\u56E0\u6B64\u4E0D\u652F\u6301\u5728 sfc \u91CC\u5199 jsx/tsx\u3002"}),"\n",(0,r.jsxs)(n.li,{children:["\u5982\u679C\u8981\u4E3A\u7EC4\u4EF6\u751F\u6210 d.ts\uFF0C\u8BF7\u4F7F\u7528\u5B98\u65B9\u63A8\u8350\u65B9\u5F0F ",(0,r.jsx)(n.a,{href:"https://www.npmjs.com/package/vue-tsc",target:"_blank",rel:"noopener noreferrer",children:"vue-tsc"}),"\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:["\u4EC5\u652F\u6301\u6253\u5305\u573A\u666F\uFF0C\u63A8\u8350\u5C06 input \u8BBE\u7F6E\u4E3A ",(0,r.jsx)(n.code,{children:"['src/**/*.vue']"})," \u6216\u8005 ",(0,r.jsx)(n.code,{children:"['src/index.ts']"}),"\u3002"]}),"\n"]}),"\n"]})]}),"\n",(0,r.jsxs)(n.h2,{id:"\u5FEB\u901F\u5F00\u59CB",children:["\u5FEB\u901F\u5F00\u59CB",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u5FEB\u901F\u5F00\u59CB",children:"#"})]}),"\n",(0,r.jsxs)(n.h3,{id:"\u5B89\u88C5",children:["\u5B89\u88C5",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u5B89\u88C5",children:"#"})]}),"\n","\n",(0,r.jsx)(l.PackageManagerTabs,{command:"add @modern-js/plugin-module-vue -D"}),"\n",(0,r.jsxs)(n.h3,{id:"\u6CE8\u518C\u63D2\u4EF6",children:["\u6CE8\u518C\u63D2\u4EF6",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u6CE8\u518C\u63D2\u4EF6",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"\u5728 Modern.js Module \u4E2D\uFF0C\u4F60\u53EF\u4EE5\u6309\u7167\u5982\u4E0B\u65B9\u5F0F\u6CE8\u518C\u63D2\u4EF6\uFF1A"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"import { moduleTools, defineConfig } from '@modern-js/module-tools';\nimport { modulePluginVue } from '@modern-js/plugin-module-vue';\n\nexport default defineConfig({\n  plugins: [moduleTools(), modulePluginVue()],\n  buildType: 'bundle',\n  format: 'esm',\n  input: ['src/index.vue'],\n  dts: false,\n});\n"})}),"\n",(0,r.jsxs)(n.h2,{id:"\u914D\u7F6E",children:["\u914D\u7F6E",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u914D\u7F6E",children:"#"})]}),"\n",(0,r.jsxs)(n.h3,{id:"vuejsxpluginoptions",children:["vueJsxPluginOptions",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#vuejsxpluginoptions",children:"#"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"Type:"})}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"type VueJSXPluginOptions = {\n  /** transform `on: { click: xx }` to `onClick: xxx` */\n  transformOn?: boolean;\n  /** enable optimization or not. */\n  optimize?: boolean;\n  /** merge static and dynamic class / style attributes / onXXX handlers */\n  mergeProps?: boolean;\n  /** configuring custom elements */\n  isCustomElement?: (tag: string) => boolean;\n  /** enable object slots syntax */\n  enableObjectSlots?: boolean;\n  /** Replace the function used when compiling JSX expressions */\n  pragma?: string;\n};\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Default:"})," ",(0,r.jsx)(n.code,{children:"{}"})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["\u4F20\u9012\u7ED9 ",(0,r.jsx)(n.code,{children:"@vue/babel-plugin-jsx"})," \u7684\u9009\u9879\uFF0C\u8BF7\u67E5\u9605 ",(0,r.jsx)(n.a,{href:"https://github.com/vuejs/babel-plugin-jsx",target:"_blank",rel:"noopener noreferrer",children:"@vue/babel-plugin-jsx"})," \u6587\u6863 \u6765\u4E86\u89E3\u5177\u4F53\u7528\u6CD5\u3002"]})]})}function o(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,i.useMDXComponents)(),e.components);return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}var t=o;o.__RSPRESS_PAGE_META={},o.__RSPRESS_PAGE_META["zh%2Fplugins%2Fofficial-list%2Fplugin-vue.mdx"]={toc:[{text:"\u5FEB\u901F\u5F00\u59CB",id:"\u5FEB\u901F\u5F00\u59CB",depth:2},{text:"\u5B89\u88C5",id:"\u5B89\u88C5",depth:3},{text:"\u6CE8\u518C\u63D2\u4EF6",id:"\u6CE8\u518C\u63D2\u4EF6",depth:3},{text:"\u914D\u7F6E",id:"\u914D\u7F6E",depth:2},{text:"vueJsxPluginOptions",id:"vuejsxpluginoptions",depth:3}],title:"Vue \u63D2\u4EF6",frontmatter:{}}}}]);