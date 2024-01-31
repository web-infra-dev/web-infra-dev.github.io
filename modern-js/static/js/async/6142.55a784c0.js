/*! For license information please see 6142.55a784c0.js.LICENSE.txt */
(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["6142"],{59249:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return o}});var t=r("39980"),s=r("96954");function p(e){let n=Object.assign({h1:"h1",a:"a",p:"p",code:"code",pre:"pre",div:"div"},(0,s.useMDXComponents)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.h1,{id:"apptjsx",children:["App.[tj]sx",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#apptjsx",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:["The identifier for the entry points when the application uses ",(0,t.jsx)(n.a,{href:"/guides/basic-features/routes#self-controlled-routing",children:"Self-controlled Routing"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"App.[tj]sx"})," is not the actual entry. Modern.js will generate the real entry for application. The content is roughly as follows:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"import React from 'react';\nimport ReactDOM from 'react-dom/client';\nimport { createApp, bootstrap } from '@modern-js/runtime';\n// App.[jt]sx\nimport App from '@_modern_js_src/App';\n// runtime plugin\nimport { router } from '@modern-js/runtime/plugins';\n\nconst IS_BROWSER = typeof window !== 'undefined' && window.name !== 'nodejs';\nconst MOUNT_ID = 'root';\n\nlet AppWrapper = null;\n\nfunction render() {\n  AppWrapper = createApp({\n    plugins: [\n     router({...{\"serverBase\":[\"/\"]}, ...App.config?.router}),\n    ]\n  })(App)\n  if (IS_BROWSER) {\n    bootstrap(AppWrapper, MOUNT_ID, null, ReactDOM);\n  }\n  return AppWrapper\n}\n\nAppWrapper = render();\nexport default AppWrapper;\n"})}),"\n",(0,t.jsxs)(n.div,{className:"rspress-directive note",children:[(0,t.jsx)(n.div,{className:"rspress-directive-title",children:"NOTE"}),(0,t.jsxs)(n.div,{className:"rspress-directive-content",children:[(0,t.jsxs)(n.p,{children:["In the multi-entry scenario, each entry can have its own ",(0,t.jsx)(n.code,{children:"App.[jt]sx"}),". See ",(0,t.jsx)(n.a,{href:"/guides/concept/entries",children:"Entries"})," for details."]}),"\n"]})]})]})}function i(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,s.useMDXComponents)(),e.components);return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}var o=i;i.__RSPRESS_PAGE_META={},i.__RSPRESS_PAGE_META["en%2Fapis%2Fapp%2Fhooks%2Fsrc%2Fapp.mdx"]={toc:[],title:"App.[tj]sx",frontmatter:{title:"App.[tj]sx",sidebar_position:1}}}}]);