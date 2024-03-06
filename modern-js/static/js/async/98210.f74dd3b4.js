/*! For license information please see 98210.f74dd3b4.js.LICENSE.txt */
(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["98210"],{92317:function(e,n,r){"use strict";r.r(n);var s=r("39980"),t=r("96954");function i(e){let n=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",pre:"pre",code:"code",h3:"h3",ul:"ul",li:"li"},(0,t.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h1,{id:"createapp",children:["createApp",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#createapp",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["Used to create custom entries, custom runtime plugins. This API is only required when using ",(0,s.jsx)(n.a,{href:"/guides/concept/entries#app",children:"Custom App"}),"."]}),"\n",(0,s.jsxs)(n.h2,{id:"usage",children:["Usage",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#usage",children:"#"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"import { createApp } from '@modern-js/runtime';\n"})}),"\n",(0,s.jsxs)(n.h2,{id:"function-signature",children:["Function Signature",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#function-signature",children:"#"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"import type { Plugin } from '@modern-js/runtime';\n\nfunction createApp(options: { plugins: Plugin[] }): React.ComponentType<any>;\n"})}),"\n",(0,s.jsxs)(n.h3,{id:"input",children:["Input",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#input",children:"#"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"options"}),": optional configuration.","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"plugins"}),": custom plugin extensions."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.h2,{id:"example",children:["Example",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#example",children:"#"})]}),"\n",(0,s.jsxs)(n.h3,{id:"create-custom-entry",children:["Create Custom Entry",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#create-custom-entry",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["For details, see ",(0,s.jsx)(n.a,{href:"/en/apis/app/runtime/core/bootstrap",children:(0,s.jsx)(n.code,{children:"bootstrap"})}),"."]}),"\n",(0,s.jsxs)(n.h3,{id:"custom-plugins",children:["Custom Plugins",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#custom-plugins",children:"#"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"import { createApp } from '@modern-js/runtime';\n\nfunction App() {\n  return <div>app</div>;\n}\n\nexport default createApp({\n  plugins: [customPlugin()],\n})(App);\n"})})]})}function a(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,t.useMDXComponents)(),e.components);return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(i,{...e})}):i(e)}n.default=a,a.__RSPRESS_PAGE_META={},a.__RSPRESS_PAGE_META["en%2Fapis%2Fapp%2Fruntime%2Fcore%2Fcreate-app.mdx"]={toc:[{text:"Usage",id:"usage",depth:2},{text:"Function Signature",id:"function-signature",depth:2},{text:"Input",id:"input",depth:3},{text:"Example",id:"example",depth:2},{text:"Create Custom Entry",id:"create-custom-entry",depth:3},{text:"Custom Plugins",id:"custom-plugins",depth:3}],title:"createApp",frontmatter:{title:"createApp"}}}}]);