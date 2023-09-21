(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["13436"],{36493:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return i}});var n,o=r("15169"),a=r("43932"),s=r("9880"),c=r("23169");function d(e){var t=Object.assign({h1:"h1",a:"a",p:"p",code:"code",h2:"h2",pre:"pre"},(0,c.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.h1,{id:"indextjs",children:["index.[tj]s",(0,s.jsx)(t.a,{className:"header-anchor","aria-hidden":"true",href:"#indextjs",children:"#"})]}),"\n",(0,s.jsxs)(t.p,{children:["The identifier for the entry point when the application uses custom ",(0,s.jsx)(t.code,{children:"bootstrap"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["In general, the ",(0,s.jsx)(t.a,{href:"/apis/app/hooks/src/app",children:(0,s.jsx)(t.code,{children:"App.[tj]sx"})})," hook file can already meet our needs. When we need to add custom behavior before ",(0,s.jsx)(t.code,{children:"bootstrap"})," or completely take over the webpack packaging entry, we can place ",(0,s.jsx)(t.code,{children:"index.[tj]s"})," in the ",(0,s.jsx)(t.code,{children:"src"})," or entry directory. There are two cases below:"]}),"\n",(0,s.jsxs)(t.h2,{id:"add-custom-behavior-before-bootstrap",children:["Add custom behavior before bootstrap",(0,s.jsx)(t.a,{className:"header-anchor","aria-hidden":"true",href:"#add-custom-behavior-before-bootstrap",children:"#"})]}),"\n",(0,s.jsxs)(t.p,{children:["Just export a function in ",(0,s.jsx)(t.code,{children:"src/index.[tj]s"}),":"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",meta:"title=src/index.js",children:"import { bootstrap } from '@modern-js/runtime';\n\nexport default App => {\n  // do something before bootstrap...\n  bootstrap(App, 'root');\n};\n"})}),"\n",(0,s.jsxs)(t.h2,{id:"completely-take-over-the-webpack-entry",children:["Completely take over the webpack entry",(0,s.jsx)(t.a,{className:"header-anchor","aria-hidden":"true",href:"#completely-take-over-the-webpack-entry",children:"#"})]}),"\n",(0,s.jsxs)(t.p,{children:["When there is no default export function in ",(0,s.jsx)(t.code,{children:"src/index.[tj]sx?"}),", the file is the real webpack packaging entry file and the code can be organized directly as using create-react-app and other scaffolding tools:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",meta:"title=src/index.jsx",children:"import React from 'react';\nimport ReactDOM from 'react-dom';\nimport App from './App';\n\nReactDOM.render(<App />, document.getElementById('root'));\n"})})]})}(n=globalThis).__RSPRESS_PAGE_META||(n.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["en%2Fapis%2Fapp%2Fhooks%2Fsrc%2Findex_.mdx"]={toc:[{text:"Add custom behavior before bootstrap",id:"add-custom-behavior-before-bootstrap",depth:2},{text:"Completely take over the webpack entry",id:"completely-take-over-the-webpack-entry",depth:2}],title:"index.[tj]s",frontmatter:{title:"index.[tj]s",sidebar_position:4}};var i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object.assign({},(0,c.useMDXComponents)(),e.components).wrapper;return t?(0,s.jsx)(t,(0,a._)((0,o._)({},e),{children:(0,s.jsx)(d,(0,o._)({},e))})):d(e)}}}]);