(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["5834"],{88507:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return c},frontmatter:function(){return d}});var t=r("15169"),s=r("43932"),p=r("9880"),i=r("23169");function o(e){var n=Object.assign({h1:"h1",a:"a",p:"p",code:"code",pre:"pre",div:"div"},(0,i.useMDXComponents)(),e.components);return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)(n.h1,{id:"apptjsx",children:["App.[tj]sx",(0,p.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#apptjsx",children:"#"})]}),"\n",(0,p.jsxs)(n.p,{children:["The identifier for the entry points when the application uses ",(0,p.jsx)(n.a,{href:"/guides/basic-features/routes#self-controlled-routing",children:"Self-controlled Routing"}),"."]}),"\n",(0,p.jsxs)(n.p,{children:[(0,p.jsx)(n.code,{children:"App.[tj]sx"})," is not the actual entry. Modern.js will generate the real entry for application. The content is roughly as follows:"]}),"\n",(0,p.jsx)(n.pre,{children:(0,p.jsx)(n.code,{className:"language-js",children:"import React from 'react';\nimport ReactDOM from 'react-dom/client';\nimport { createApp, bootstrap } from '@modern-js/runtime';\n// App.[jt]sx\nimport App from '@_modern_js_src/App';\n// runtime plugin\nimport { router } from '@modern-js/runtime/plugins';\n\nconst IS_BROWSER = typeof window !== 'undefined' && window.name !== 'nodejs';\nconst MOUNT_ID = 'root';\n\nlet AppWrapper = null;\n\nfunction render() {\n  AppWrapper = createApp({\n    plugins: [\n     router({...{\"serverBase\":[\"/\"]}, ...App.config?.router}),\n    ]\n  })(App)\n  if (IS_BROWSER) {\n    bootstrap(AppWrapper, MOUNT_ID, null, ReactDOM);\n  }\n  return AppWrapper\n}\n\nAppWrapper = render();\nexport default AppWrapper;\n"})}),"\n",(0,p.jsxs)(n.div,{className:"rspress-directive note",children:[(0,p.jsx)(n.div,{className:"rspress-directive-title",children:"NOTE"}),(0,p.jsxs)(n.div,{className:"rspress-directive-content",children:[(0,p.jsxs)(n.p,{children:["In the multi-entry scenario, each entry can have its own ",(0,p.jsx)(n.code,{children:"App.[jt]sx"}),". See ",(0,p.jsx)(n.a,{href:"/guides/concept/entries",children:"Entries"})," for details."]}),"\n"]})]})]})}function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,i.useMDXComponents)(),e.components).wrapper;return n?(0,p.jsx)(n,(0,s._)((0,t._)({},e),{children:(0,p.jsx)(o,(0,t._)({},e))})):o(e)}var c=a;a.__RSPRESS_PAGE_META={},a.__RSPRESS_PAGE_META["en%2Fapis%2Fapp%2Fhooks%2Fsrc%2Fapp.mdx"]={toc:[],title:"App.[tj]sx"};var d={title:"App.[tj]sx",sidebar_position:1}}}]);