(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["62782"],{77921:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return a},frontmatter:function(){return d}});var s=r("15169"),p=r("43932"),t=r("9880"),i=r("23169");function o(e){var n=Object.assign({h1:"h1",a:"a",p:"p",code:"code",pre:"pre",div:"div"},(0,i.useMDXComponents)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.h1,{id:"apptjsx",children:["App.[tj]sx",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#apptjsx",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:["\u5E94\u7528\u4F7F\u7528",(0,t.jsx)(n.a,{href:"/guides/basic-features/routes#self-controlled-routing",children:"\u81EA\u63A7\u8DEF\u7531"}),"\u65F6\u7684\u5165\u53E3\u6807\u8BC6\u7B26\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"App.[tj]sx"})," \u5E76\u4E0D\u662F\u5B9E\u9645\u7684\u5E94\u7528\u5165\u53E3\uFF0CModern.js \u4F1A\u81EA\u52A8\u751F\u6210\u771F\u6B63\u7684\u6784\u5EFA\u6253\u5305\u7684\u5165\u53E3\u6587\u4EF6, \u5185\u5BB9\u5927\u81F4\u5982\u4E0B\uFF1A"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"import React from 'react';\nimport ReactDOM from 'react-dom/client';\nimport { createApp, bootstrap } from '@modern-js/runtime';\n// App.[jt]sx\nimport App from '@_modern_js_src/App';\n// runtime plugin\nimport { router } from '@modern-js/runtime/plugins';\n\nconst IS_BROWSER = typeof window !== 'undefined' && window.name !== 'nodejs';\nconst MOUNT_ID = 'root';\n\nlet AppWrapper = null;\n\nfunction render() {\n  AppWrapper = createApp({\n    plugins: [\n     router({...{\"serverBase\":[\"/\"]}, ...App.config?.router}),\n    ]\n  })(App)\n  if (IS_BROWSER) {\n    bootstrap(AppWrapper, MOUNT_ID, null, ReactDOM);\n  }\n  return AppWrapper\n}\n\nAppWrapper = render();\nexport default AppWrapper;\n"})}),"\n",(0,t.jsxs)(n.div,{className:"rspress-directive note",children:[(0,t.jsx)(n.div,{className:"rspress-directive-title",children:"NOTE"}),(0,t.jsxs)(n.div,{className:"rspress-directive-content",children:[(0,t.jsxs)(n.p,{children:["\u5728\u591A\u5165\u53E3\u7684\u573A\u666F\u4E0B\uFF0C\u6BCF\u4E2A\u5165\u53E3\u90FD\u53EF\u4EE5\u62E5\u6709\u72EC\u7ACB\u7684 ",(0,t.jsx)(n.code,{children:"App.[jt]sx"}),"\uFF0C\u8BE6\u89C1",(0,t.jsx)(n.a,{href:"/guides/concept/entries",children:"\u5165\u53E3"}),"\u3002"]}),"\n"]})]})]})}function c(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,i.useMDXComponents)(),e.components).wrapper;return n?(0,t.jsx)(n,(0,p._)((0,s._)({},e),{children:(0,t.jsx)(o,(0,s._)({},e))})):o(e)}var a=c;c.__RSPRESS_PAGE_META={},c.__RSPRESS_PAGE_META["zh%2Fapis%2Fapp%2Fhooks%2Fsrc%2Fapp.mdx"]={toc:[],title:"App.[tj]sx"};var d={title:"App.[tj]sx",sidebar_position:1}}}]);