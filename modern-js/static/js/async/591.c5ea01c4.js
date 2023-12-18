/*! For license information please see 591.c5ea01c4.js.LICENSE.txt */
(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["591"],{86470:function(e,n,s){"use strict";s.r(n),s.d(n,{default:function(){return l}});var r=s("9880"),i=s("23169");function d(e){let n=Object.assign({p:"p",a:"a",strong:"strong"},(0,i.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"https://esbuild.github.io/",target:"_blank",rel:"noopener noreferrer",children:"esbuild"})," \u662F\u4E00\u6B3E\u57FA\u4E8E Golang \u5F00\u53D1\u7684\u524D\u7AEF\u6784\u5EFA\u5DE5\u5177\uFF0C\u5177\u6709\u6253\u5305\u3001\u7F16\u8BD1\u548C\u538B\u7F29 JavaScript \u4EE3\u7801\u7684\u529F\u80FD\uFF0C\u76F8\u6BD4\u4F20\u7EDF\u7684\u6253\u5305\u7F16\u8BD1\u5DE5\u5177\uFF0Cesbuild \u5728\u6027\u80FD\u4E0A\u6709\u663E\u8457\u63D0\u5347\u3002\u5728\u4EE3\u7801\u538B\u7F29\u65B9\u9762\uFF0C\u76F8\u6BD4 webpack \u5185\u7F6E\u7684 terser \u538B\u7F29\u5668\uFF0Cesbuild \u5728\u6027\u80FD\u4E0A\u6709\u6570\u5341\u500D\u7684\u63D0\u5347\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["Modern.js Builder \u63D0\u4F9B\u4E86 esbuild \u63D2\u4EF6\uFF0C\u8BA9\u4F60\u80FD\u4F7F\u7528 esbuild \u4EE3\u66FF babel-loader\u3001ts-loader \u548C terser \u7B49\u5E93\u8FDB\u884C\u4EE3\u7801\u7F16\u8BD1\u548C\u538B\u7F29\u3002\u5728\u5927\u578B\u5DE5\u7A0B\u4E2D\u542F\u7528 esbuild \u540E\uFF0C",(0,r.jsx)(n.strong,{children:"\u53EF\u4EE5\u5927\u5E45\u5EA6\u51CF\u5C11\u4EE3\u7801\u7F16\u8BD1\u548C\u538B\u7F29\u6240\u9700\u7684\u65F6\u95F4\uFF0C\u540C\u65F6\u6709\u6548\u907F\u514D OOM (heap out of memory) \u95EE\u9898"}),"\u3002"]})]})}function t(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,i.useMDXComponents)(),e.components);return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}var l=t;t.__RSPRESS_PAGE_META={},t.__RSPRESS_PAGE_META["..%2F..%2Fbuilder-doc%2Fdocs%2Fzh%2Fshared%2Fesbuild.md"]={toc:[],title:"",frontmatter:{}}},20321:function(e,n,s){"use strict";s.r(n),s.d(n,{default:function(){return o}});var r=s("9880"),i=s("23169"),d=s("86470");function t(e){let n=Object.assign({h1:"h1",a:"a",ul:"ul",li:"li",strong:"strong",code:"code",h2:"h2",div:"div",p:"p",pre:"pre"},(0,i.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"toolsesbuild",children:["tools.esbuild",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#toolsesbuild",children:"#"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"\u7C7B\u578B\uFF1A"})," ",(0,r.jsx)(n.code,{children:"Object"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"\u9ED8\u8BA4\u503C\uFF1A"})," ",(0,r.jsx)(n.code,{children:"undefined"})]}),"\n"]}),"\n",(0,r.jsxs)(n.h2,{id:"\u4ECB\u7ECD",children:["\u4ECB\u7ECD",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u4ECB\u7ECD",children:"#"})]}),"\n","\n",(0,r.jsx)(d.default,{}),"\n",(0,r.jsxs)(n.div,{className:"rspress-directive tip",children:[(0,r.jsx)(n.div,{className:"rspress-directive-title",children:"\u63A8\u8350\u4F7F\u7528 SWC"}),(0,r.jsxs)(n.div,{className:"rspress-directive-content",children:[(0,r.jsx)(n.p,{children:"\u76F8\u8F83\u4E8E esbuild\uFF0C\u6211\u4EEC\u66F4\u63A8\u8350\u4F7F\u7528 SWC \u6765\u7F16\u8BD1\u548C\u538B\u7F29\u4EE3\u7801\uFF0C\u56E0\u4E3A SWC \u652F\u6301\u66F4\u591A\u7684\u8BED\u6CD5\u7279\u6027\u3001\u62E5\u6709\u66F4\u597D\u7684\u4EE3\u7801\u538B\u7F29\u7387\uFF0C\u5E76\u4E14\u4EA7\u7269\u5177\u5907\u66F4\u597D\u7684\u517C\u5BB9\u6027\u3002"}),"\n",(0,r.jsxs)(n.p,{children:["\u56E0\u6B64\uFF0C\u6211\u4EEC\u5EFA\u8BAE\u4F60\u4F7F\u7528 SWC \u800C\u4E0D\u662F esbuild\uFF0C\u7528\u6CD5\u8BF7\u53C2\u8003 ",(0,r.jsx)(n.a,{href:"/configure/app/tools/swc",children:"tools.swc"}),"\u3002"]}),"\n"]})]}),"\n",(0,r.jsxs)(n.h2,{id:"\u914D\u7F6E\u9879",children:["\u914D\u7F6E\u9879",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u914D\u7F6E\u9879",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["\u4F60\u53EF\u4EE5\u901A\u8FC7 ",(0,r.jsx)(n.code,{children:"tools.esbuild"})," \u914D\u7F6E\u9879\u6765\u8BBE\u7F6E esbuild \u7F16\u8BD1\u884C\u4E3A\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",meta:'title="modern.config.ts"',children:"import { defineConfig } from '@modern-js/app-tools';\n\nexport default defineConfig({\n  tools: {\n    esbuild: {\n      loader: {\n        target: 'chrome61',\n      },\n      minimize: {\n        target: 'chrome61',\n      },\n    },\n  },\n});\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u5B8C\u6574\u914D\u7F6E\u9879\u8BF7\u53C2\u8003 ",(0,r.jsx)(n.a,{href:"https://modernjs.dev/builder/plugins/plugin-esbuild.html#%E9%85%8D%E7%BD%AE",target:"_blank",rel:"noopener noreferrer",children:"Modern.js Builder - esbuild \u63D2\u4EF6\u914D\u7F6E"}),"\u3002"]})]})}function l(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,i.useMDXComponents)(),e.components);return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(t,{...e})}):t(e)}var o=l;l.__RSPRESS_PAGE_META={},l.__RSPRESS_PAGE_META["zh%2Fconfigure%2Fapp%2Ftools%2Fesbuild.mdx"]={toc:[{text:"\u4ECB\u7ECD",id:"\u4ECB\u7ECD",depth:2},{text:"\u914D\u7F6E\u9879",id:"\u914D\u7F6E\u9879",depth:2}],title:"tools.esbuild",frontmatter:{sidebar_label:"esbuild"}}}}]);