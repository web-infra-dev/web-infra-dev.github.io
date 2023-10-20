(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["78095"],{3695:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return p},frontmatter:function(){return u}});var s=r("15169"),t=r("43932"),i=r("9880"),a=r("23169");function c(e){var n=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",pre:"pre",code:"code",h3:"h3",ul:"ul",li:"li"},(0,a.useMDXComponents)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.h1,{id:"createapp",children:["createApp",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#createapp",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["Used to create custom entries, custom runtime plugins. This API is only required when using ",(0,i.jsx)(n.a,{href:"/guides/concept/entries#app",children:"Custom App"}),"."]}),"\n",(0,i.jsxs)(n.h2,{id:"usage",children:["Usage",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#usage",children:"#"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"import { createApp } from '@modern-js/runtime';\n"})}),"\n",(0,i.jsxs)(n.h2,{id:"function-signature",children:["Function Signature",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#function-signature",children:"#"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"import type { Plugin } from '@modern-js/runtime';\n\nfunction createApp(options: { plugins: Plugin[] }): React.ComponentType<any>;\n"})}),"\n",(0,i.jsxs)(n.h3,{id:"input",children:["Input",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#input",children:"#"})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"options"}),": optional configuration.","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"plugins"}),": custom plugin extensions."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.h2,{id:"example",children:["Example",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#example",children:"#"})]}),"\n",(0,i.jsxs)(n.h3,{id:"create-custom-entry",children:["Create Custom Entry",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#create-custom-entry",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["For details, see ",(0,i.jsx)(n.a,{href:"/en/apis/app/runtime/core/bootstrap",children:(0,i.jsx)(n.code,{children:"bootstrap"})}),"."]}),"\n",(0,i.jsxs)(n.h3,{id:"custom-plugins",children:["Custom Plugins",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#custom-plugins",children:"#"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"import { createApp } from '@modern-js/runtime';\n\nfunction App() {\n  return <div>app</div>;\n}\n\nexport default createApp({\n  plugins: [customPlugin()],\n})(App);\n"})})]})}function d(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,a.useMDXComponents)(),e.components).wrapper;return n?(0,i.jsx)(n,(0,t._)((0,s._)({},e),{children:(0,i.jsx)(c,(0,s._)({},e))})):c(e)}var p=d;d.__RSPRESS_PAGE_META={},d.__RSPRESS_PAGE_META["en%2Fapis%2Fapp%2Fruntime%2Fcore%2Fcreate-app.mdx"]={toc:[{text:"Usage",id:"usage",depth:2},{text:"Function Signature",id:"function-signature",depth:2},{text:"Input",id:"input",depth:3},{text:"Example",id:"example",depth:2},{text:"Create Custom Entry",id:"create-custom-entry",depth:3},{text:"Custom Plugins",id:"custom-plugins",depth:3}],title:"createApp"};var u={title:"createApp"}}}]);