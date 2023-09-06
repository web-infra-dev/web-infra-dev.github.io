(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_apis_app_hooks_src_app_mdx"],{9200:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return c}});var p,s=r("15169"),t=r("43932"),o=r("9880"),i=r("23169");function a(e){var n=Object.assign({h1:"h1",a:"a",p:"p",code:"code",pre:"pre",div:"div"},(0,i.useMDXComponents)(),e.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.h1,{id:"apptjsx",children:["App.[tj]sx",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#apptjsx",children:"#"})]}),"\n",(0,o.jsxs)(n.p,{children:["应用使用",(0,o.jsx)(n.a,{href:"/guides/basic-features/routes#self-controlled-routing",children:"自控路由"}),"时的入口标识符。"]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"App.[tj]sx"})," 并不是实际的应用入口，Modern.js 会自动生成真正的构建打包的入口文件, 内容大致如下："]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"import React from 'react';\nimport ReactDOM from 'react-dom/client';\nimport { createApp, bootstrap } from '@modern-js/runtime';\n// App.[jt]sx\nimport App from '@_modern_js_src/App';\n// runtime plugin\nimport { router } from '@modern-js/runtime/plugins';\n\nconst IS_BROWSER = typeof window !== 'undefined' && window.name !== 'nodejs';\nconst MOUNT_ID = 'root';\n\nlet AppWrapper = null;\n\nfunction render() {\n  AppWrapper = createApp({\n    plugins: [\n     router({...{\"serverBase\":[\"/\"]}, ...App.config?.router}),\n    ]\n  })(App)\n  if (IS_BROWSER) {\n    bootstrap(AppWrapper, MOUNT_ID, null, ReactDOM);\n  }\n  return AppWrapper\n}\n\nAppWrapper = render();\nexport default AppWrapper;\n"})}),"\n",(0,o.jsxs)(n.div,{className:"modern-directive note",children:[(0,o.jsx)(n.div,{className:"modern-directive-title",children:"NOTE"}),(0,o.jsxs)(n.div,{className:"modern-directive-content",children:[(0,o.jsxs)(n.p,{children:["在多入口的场景下，每个入口都可以拥有独立的 ",(0,o.jsx)(n.code,{children:"App.[jt]sx"}),"，详见",(0,o.jsx)(n.a,{href:"/guides/concept/entries",children:"入口"}),"。"]}),"\n"]})]})]})}(p=globalThis).__RSPRESS_PAGE_META||(p.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["zh%2Fapis%2Fapp%2Fhooks%2Fsrc%2Fapp.mdx"]={toc:[],title:"App.[tj]sx",frontmatter:{title:"App.[tj]sx",sidebar_position:1}};var c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,i.useMDXComponents)(),e.components).wrapper;return n?(0,o.jsx)(n,(0,t._)((0,s._)({},e),{children:(0,o.jsx)(a,(0,s._)({},e))})):a(e)}}}]);