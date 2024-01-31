/*! For license information please see 53143.a84d7c6b.js.LICENSE.txt */
(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["53143"],{5455:function(n,e,s){"use strict";s.r(e),s.d(e,{default:function(){return l}});var r=s("39980"),d=s("96954");function o(n){let e=Object.assign({h1:"h1",a:"a",ul:"ul",li:"li",strong:"strong",code:"code",p:"p",h3:"h3",pre:"pre",ol:"ol"},(0,d.useMDXComponents)(),n.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(e.h1,{id:"autoloadplugins-\u81EA\u52A8\u6CE8\u518C\u63D2\u4EF6",children:["autoLoadPlugins \u81EA\u52A8\u6CE8\u518C\u63D2\u4EF6",(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#autoloadplugins-\u81EA\u52A8\u6CE8\u518C\u63D2\u4EF6",children:"#"})]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"\u7C7B\u578B\uFF1A"})," ",(0,r.jsx)(e.code,{children:"boolean"})]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"\u9ED8\u8BA4\u503C\uFF1A"})," ",(0,r.jsx)(e.code,{children:"false"})]}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:"\u7528\u4E8E\u914D\u7F6E Modern.js \u662F\u5426\u5F00\u542F\u81EA\u52A8\u6CE8\u518C\u63D2\u4EF6\u3002"}),"\n",(0,r.jsxs)(e.h3,{id:"\u624B\u52A8\u6CE8\u518C\u63D2\u4EF6",children:["\u624B\u52A8\u6CE8\u518C\u63D2\u4EF6",(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#\u624B\u52A8\u6CE8\u518C\u63D2\u4EF6",children:"#"})]}),"\n",(0,r.jsxs)(e.p,{children:["\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u5B89\u88C5\u63D2\u4EF6\u540E\uFF0C\u4F60\u9700\u8981\u5728 ",(0,r.jsx)(e.code,{children:"modern.config.ts"})," \u6587\u4EF6\u4E2D\u624B\u52A8\u6CE8\u518C\u63D2\u4EF6\u3002"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import { appTools, defineConfig } from '@modern-js/app-tools';\nimport { bffPlugin } from '@modern-js/plugin-bff';\n\nexport default defineConfig({\n  plugins: [appTools(), bffPlugin()],\n});\n"})}),"\n",(0,r.jsxs)(e.h3,{id:"\u81EA\u52A8\u6CE8\u518C\u63D2\u4EF6",children:["\u81EA\u52A8\u6CE8\u518C\u63D2\u4EF6",(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#\u81EA\u52A8\u6CE8\u518C\u63D2\u4EF6",children:"#"})]}),"\n",(0,r.jsxs)(e.p,{children:["\u9664\u4E86\u624B\u6BB5\u6CE8\u518C\uFF0CModern.js \u8FD8\u63D0\u4F9B\u81EA\u52A8\u6CE8\u518C\u63D2\u4EF6\u7684\u65B9\u5F0F: \u5C06 ",(0,r.jsx)(e.code,{children:"autoLoadPlugin"})," \u914D\u7F6E\u9879\u7F6E\u4E3A ",(0,r.jsx)(e.code,{children:"true"}),"\u3002"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import { defineConfig } from '@modern-js/app-tools';\n\nexport default defineConfig({\n  autoLoadPlugins: true,\n});\n"})}),"\n",(0,r.jsx)(e.p,{children:"Modern.js \u5C06\u901A\u8FC7\u4EE5\u4E0B\u51E0\u4E2A\u6B65\u9AA4\u5E2E\u4F60\u81EA\u52A8\u6CE8\u518C\u63D2\u4EF6"}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsx)(e.li,{children:"Modern.js \u5728\u5185\u90E8\u7EF4\u62A4\u4E00\u4EFD\u5B98\u65B9\u63D2\u4EF6\u5217\u8868\u3002"}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-js",children:"const InternalPlugins = ['@modern-js/app-tools', '@modern-js/plugin-i18n', ...];\n"})}),"\n",(0,r.jsxs)(e.ol,{start:"2",children:["\n",(0,r.jsxs)(e.li,{children:["Modern.js \u5C06\u8BFB\u53D6\u4F60\u7684 ",(0,r.jsx)(e.code,{children:"package.json"})," \u6587\u4EF6\uFF0C\u6536\u96C6\u4F9D\u8D56\u4FE1\u606F\u3002"]}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-json",meta:'title="package.json"',children:'"dependencies": {\n  "@modern-js/plugin-i18n": "x.x.x"\n  ...\n},\n"devDependencies": {\n  "@modern-js/app-tools": "x.x.x"\n  ...\n}\n'})}),"\n",(0,r.jsxs)(e.ol,{start:"3",children:["\n",(0,r.jsxs)(e.li,{children:["Modern.js \u89C2\u5BDF\u5230\u4F60\u5B89\u88C5\u4E86 ",(0,r.jsx)(e.code,{children:"@modern-js/plugin-i18n"})," \u548C ",(0,r.jsx)(e.code,{children:"@modern-js/app-tools"})," \u7B49\u4F9D\u8D56\u540E\uFF0C\u5C06\u4F1A\u5F15\u5165\u63D2\u4EF6\u81EA\u52A8\u6CE8\u518C\u3002"]}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:"\u53EF\u4EE5\u6CE8\u610F\u5230\u8FD9\u79CD\u65B9\u5F0F\u76F8\u5BF9\u9ED1\u76D2\uFF0C\u4F60\u751A\u81F3\u5BF9\u52A0\u8F7D\u63D2\u4EF6\u7684\u8FC7\u7A0B\u662F\u65E0\u611F\u77E5\u7684\u3002\u6211\u4EEC\u5E0C\u671B\u66F4\u591A\u7684\u7EC6\u8282\u66B4\u9732\u7ED9\u5F00\u53D1\u8005\uFF0C\u80FD\u8BA9\u5F00\u53D1\u8005\u53BB\u63A7\u5236\u8FD9\u4E00\u8FC7\u7A0B\u3002"}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"\u56E0\u6B64\u6211\u4EEC\u66F4\u52A0\u63A8\u8350\u4F60\u624B\u52A8\u6CE8\u518C\u63D2\u4EF6\u3002"})})]})}function i(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}=Object.assign({},(0,d.useMDXComponents)(),n.components);return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(o,{...n})}):o(n)}var l=i;i.__RSPRESS_PAGE_META={},i.__RSPRESS_PAGE_META["zh%2Fconfigure%2Fapp%2Fauto-load-plugin.mdx"]={toc:[{text:"\u624B\u52A8\u6CE8\u518C\u63D2\u4EF6",id:"\u624B\u52A8\u6CE8\u518C\u63D2\u4EF6",depth:3},{text:"\u81EA\u52A8\u6CE8\u518C\u63D2\u4EF6",id:"\u81EA\u52A8\u6CE8\u518C\u63D2\u4EF6",depth:3}],title:"autoLoadPlugins \u81EA\u52A8\u6CE8\u518C\u63D2\u4EF6",frontmatter:{sidebar_position:22}}}}]);