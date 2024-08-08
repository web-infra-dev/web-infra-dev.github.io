"use strict";(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["47988"],{91191:function(e,r,n){n.r(r),n.d(r,{default:function(){return a}});var t=n(38093),s=n(75878);function o(e){let r=Object.assign({h1:"h1",a:"a",div:"div",p:"p",code:"code",h2:"h2",pre:"pre"},(0,s.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.h1,{id:"entrytjs",children:["entry.[tj]s",(0,t.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#entrytjs",children:"#"})]}),"\n",(0,t.jsxs)(r.div,{className:"rspress-directive info",children:[(0,t.jsx)(r.div,{className:"rspress-directive-title",children:"INFO"}),(0,t.jsx)(r.div,{className:"rspress-directive-content",children:(0,t.jsxs)(r.p,{children:["Using this file requires enabling ",(0,t.jsx)(r.a,{href:"/configure/app/source/enable-custom-entry",children:"source.enableCustomEntry"}),".\n"]})})]}),"\n",(0,t.jsxs)(r.p,{children:["Normally, the ",(0,t.jsx)(r.a,{href:"/apis/app/hooks/src/routes.html",children:(0,t.jsx)(r.code,{children:"routes/"})})," and ",(0,t.jsx)(r.a,{href:"/apis/app/hooks/src/app",children:(0,t.jsx)(r.code,{children:"App.[tj]sx"})})," hook files can meet our needs. When we need to add custom behavior before component rendering or take full control of the webpack packaging entry, we can create ",(0,t.jsx)(r.code,{children:"entry.[tj]s"})," file in the src or entry directory. Here are two cases for discussion:"]}),"\n",(0,t.jsxs)(r.h2,{id:"add-custom-behavior-before-render",children:["Add custom behavior before Render",(0,t.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#add-custom-behavior-before-render",children:"#"})]}),"\n",(0,t.jsxs)(r.p,{children:["This is implemented in ",(0,t.jsx)(r.code,{children:"src/entry.[tj]s"})," as follows:"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-js",meta:"title=src/entry.tsx",children:"import { createRoot } from '@modern-js/runtime/react';\nimport { render } from '@modern-js/runtime/browser';\n\nconst ModernRoot = createRoot();\n\nasync function beforeRender() {\n   // todo\n}\n\nbeforeRender().then(() => {\n  render(<ModernRoot />);\n});\n"})}),"\n",(0,t.jsxs)(r.h2,{id:"take-full-control-of-the-webpack-entry",children:["Take full control of the webpack entry",(0,t.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#take-full-control-of-the-webpack-entry",children:"#"})]}),"\n",(0,t.jsxs)(r.p,{children:["When the project does not install the ",(0,t.jsx)(r.code,{children:"@modern-js/runtime"})," dependency, ",(0,t.jsx)(r.code,{children:"src/entry.[tj]sx?"})," is the real webpack packaging entry file, and you can directly organize the code like using create-react-app and other scaffolds:"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-js",meta:"title=src/entry.jsx",children:"import React from 'react';\nimport ReactDOM from 'react-dom/client';\nimport App from './App';\n\nReactDOM.createRoot(document.getElementById('root')!).render(<App />);\n"})})]})}function c(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:r}=Object.assign({},(0,s.ah)(),e.components);return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}let a=c;c.__RSPRESS_PAGE_META={},c.__RSPRESS_PAGE_META["en%2Fapis%2Fapp%2Fhooks%2Fsrc%2Fentry.mdx"]={toc:[{text:"Add custom behavior before Render",id:"add-custom-behavior-before-render",depth:2},{text:"Take full control of the webpack entry",id:"take-full-control-of-the-webpack-entry",depth:2}],title:"entry.[tj]s",frontmatter:{title:"entry.[tj]s",sidebar_position:4}}}}]);