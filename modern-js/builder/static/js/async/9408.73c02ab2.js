(self.webpackChunk_modern_js_builder_doc=self.webpackChunk_modern_js_builder_doc||[]).push([["9408"],{22274:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return h}});var s,d=r("15169"),i=r("43932"),l=r("9880"),a=r("23169"),o=r("86598");function c(e){var n=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",h3:"h3",code:"code",pre:"pre",ul:"ul",li:"li",strong:"strong",div:"div"},(0,a.useMDXComponents)(),e.components);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(n.h1,{id:"vue-2-\u63D2\u4EF6",children:["Vue 2 \u63D2\u4EF6",(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#vue-2-\u63D2\u4EF6",children:"#"})]}),"\n",(0,l.jsxs)(n.p,{children:["Vue 2 \u63D2\u4EF6\u63D0\u4F9B\u4E86\u5BF9 Vue 2 \u5E94\u7528\u6784\u5EFA\u7684\u652F\u6301\uFF0C\u63D2\u4EF6\u5185\u90E8\u96C6\u6210\u4E86 ",(0,l.jsx)(n.a,{href:"https://vue-loader.vuejs.org/",target:"_blank",rel:"noopener noreferrer",children:"vue-loader"})," \u548C ",(0,l.jsx)(n.a,{href:"https://github.com/vuejs/jsx-vue2",target:"_blank",rel:"noopener noreferrer",children:"@vue/babel-preset-jsx"}),"\u3002"]}),"\n",(0,l.jsxs)(n.h2,{id:"\u5FEB\u901F\u5F00\u59CB",children:["\u5FEB\u901F\u5F00\u59CB",(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u5FEB\u901F\u5F00\u59CB",children:"#"})]}),"\n",(0,l.jsxs)(n.h3,{id:"\u5B89\u88C5\u63D2\u4EF6",children:["\u5B89\u88C5\u63D2\u4EF6",(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u5B89\u88C5\u63D2\u4EF6",children:"#"})]}),"\n",(0,l.jsx)(n.p,{children:"\u4F60\u53EF\u4EE5\u901A\u8FC7\u5982\u4E0B\u7684\u547D\u4EE4\u5B89\u88C5\u63D2\u4EF6:"}),"\n","\n",(0,l.jsx)(o.PackageManagerTabs,{command:"add @modern-js/builder-plugin-vue2 -D"}),"\n",(0,l.jsxs)(n.h3,{id:"\u6CE8\u518C\u63D2\u4EF6",children:["\u6CE8\u518C\u63D2\u4EF6",(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u6CE8\u518C\u63D2\u4EF6",children:"#"})]}),"\n",(0,l.jsxs)(n.p,{children:["\u4F60\u53EF\u4EE5\u901A\u8FC7 ",(0,l.jsx)(n.code,{children:"addPlugins"})," \u65B9\u6CD5\u6765\u6CE8\u518C Vue 2 \u63D2\u4EF6\uFF1A"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",children:"import { builderPluginVue2 } from '@modern-js/builder-plugin-vue2';\n\nbuilder.addPlugins([builderPluginVue2()]);\n"})}),"\n",(0,l.jsxs)(n.p,{children:["\u5B89\u88C5\u5B8C\u63D2\u4EF6\u540E\uFF0C\u4F60\u53EF\u4EE5\u76F4\u63A5\u5728\u4EE3\u7801\u4E2D\u5F15\u5165 ",(0,l.jsx)(n.code,{children:"*.vue"})," \u6587\u4EF6\uFF0C\u4E5F\u53EF\u4EE5\u4F7F\u7528 Vue \u7684 ",(0,l.jsx)(n.a,{href:"https://github.com/vuejs/jsx-vue2",target:"_blank",rel:"noopener noreferrer",children:"JSX \u8BED\u6CD5"}),"\uFF0C\u65E0\u987B\u6DFB\u52A0\u5176\u4ED6\u914D\u7F6E\u3002"]}),"\n",(0,l.jsxs)(n.h2,{id:"\u914D\u7F6E",children:["\u914D\u7F6E",(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u914D\u7F6E",children:"#"})]}),"\n",(0,l.jsx)(n.p,{children:"\u5982\u679C\u4F60\u9700\u8981\u81EA\u5B9A\u4E49 Vue \u7684\u7F16\u8BD1\u884C\u4E3A\uFF0C\u53EF\u4EE5\u4F7F\u7528\u4EE5\u4E0B\u914D\u7F6E\u9879\u3002"}),"\n",(0,l.jsxs)(n.h3,{id:"vueloaderoptions",children:["vueLoaderOptions",(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#vueloaderoptions",children:"#"})]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"\u7C7B\u578B\uFF1A"})," ",(0,l.jsx)(n.code,{children:"VueLoaderOptions"})]}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.strong,{children:"\u9ED8\u8BA4\u503C\uFF1A"})}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",children:"const defaultOptions = {\n  compilerOptions: {\n    preserveWhitespace: false,\n  },\n};\n"})}),"\n",(0,l.jsxs)(n.p,{children:["\u4F20\u9012\u7ED9 ",(0,l.jsx)(n.code,{children:"vue-loader"})," \u7684\u9009\u9879\uFF0C\u8BF7\u67E5\u9605 ",(0,l.jsx)(n.a,{href:"https://vue-loader.vuejs.org/",target:"_blank",rel:"noopener noreferrer",children:"vue-loader \u6587\u6863"})," \u6765\u4E86\u89E3\u5177\u4F53\u7528\u6CD5\u3002"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-ts",children:"builderPluginVue2({\n  vueLoaderOptions: {\n    hotReload: false,\n  },\n});\n"})}),"\n",(0,l.jsxs)(n.div,{className:"modern-directive tip",children:[(0,l.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,l.jsx)(n.div,{className:"modern-directive-content",children:(0,l.jsxs)(n.p,{children:["Vue 2 \u63D2\u4EF6\u4F7F\u7528\u7684\u662F ",(0,l.jsx)(n.code,{children:"vue-loader"})," v15 \u7248\u672C\uFF0C\u8BF7\u6CE8\u610F\u533A\u5206 v15 \u7248\u672C\u4E0E\u6700\u65B0\u7248\u672C\u4E4B\u95F4\u53EF\u80FD\u5B58\u5728\u914D\u7F6E\u5DEE\u5F02\u3002\n"]})})]}),"\n",(0,l.jsxs)(n.h3,{id:"vuejsxoptions",children:["vueJsxOptions",(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#vuejsxoptions",children:"#"})]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.strong,{children:"\u7C7B\u578B\uFF1A"})}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-ts",children:"type VueJSXPresetOptions = {\n  compositionAPI?: boolean | string;\n  functional?: boolean;\n  injectH?: boolean;\n  vModel?: boolean;\n  vOn?: boolean;\n};\n"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.strong,{children:"\u9ED8\u8BA4\u503C\uFF1A"})}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-ts",children:"const defaultOptions = {\n  injectH: true,\n};\n"})}),"\n",(0,l.jsxs)(n.p,{children:["\u4F20\u9012\u7ED9 ",(0,l.jsx)(n.code,{children:"@vue/babel-preset-jsx"})," \u7684\u9009\u9879\uFF0C\u8BF7\u67E5\u9605 ",(0,l.jsx)(n.a,{href:"https://github.com/vuejs/jsx-vue2",target:"_blank",rel:"noopener noreferrer",children:"@vue/babel-preset-jsx \u6587\u6863"})," \u6765\u4E86\u89E3\u5177\u4F53\u7528\u6CD5\u3002"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-ts",children:"builderPluginVue2({\n  vueJsxOptions: {\n    injectH: false,\n  },\n});\n"})})]})}(s=globalThis).__RSPRESS_PAGE_META||(s.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["zh%2Fplugins%2Fplugin-vue2.mdx"]={toc:[{text:"\u5FEB\u901F\u5F00\u59CB",id:"\u5FEB\u901F\u5F00\u59CB",depth:2},{text:"\u5B89\u88C5\u63D2\u4EF6",id:"\u5B89\u88C5\u63D2\u4EF6",depth:3},{text:"\u6CE8\u518C\u63D2\u4EF6",id:"\u6CE8\u518C\u63D2\u4EF6",depth:3},{text:"\u914D\u7F6E",id:"\u914D\u7F6E",depth:2},{text:"vueLoaderOptions",id:"vueloaderoptions",depth:3},{text:"vueJsxOptions",id:"vuejsxoptions",depth:3}],title:"Vue 2 \u63D2\u4EF6",frontmatter:{}};var h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,a.useMDXComponents)(),e.components).wrapper;return n?(0,l.jsx)(n,(0,i._)((0,d._)({},e),{children:(0,l.jsx)(c,(0,d._)({},e))})):c(e)}}}]);