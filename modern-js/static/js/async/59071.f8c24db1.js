/*! For license information please see 59071.f8c24db1.js.LICENSE.txt */
(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["59071"],{65156:function(e,n,r){"use strict";r.r(n);var s=r("39980"),o=r("96954");function d(e){let n=Object.assign({h1:"h1",a:"a",p:"p",ol:"ol",li:"li",code:"code",pre:"pre"},(0,o.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h1,{id:"using-reduck-separately",children:["Using Reduck Separately",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#using-reduck-separately",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"When integrating Reduck separately from Modern.js, the following modifications need to be made:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Install the Reduck related packages"}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Install the Reduck package in the project: ",(0,s.jsx)(n.code,{children:"@modern-js-reduck/react"}),"."]}),"\n",(0,s.jsxs)(n.ol,{start:"2",children:["\n",(0,s.jsx)(n.li,{children:"Import package names for API"}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["When used in Modern.js, the package name for exporting Reduck API is: ",(0,s.jsx)(n.code,{children:"@modern-js/runtime/model"}),". When using Reduck separately, the package name for exporting is: ",(0,s.jsx)(n.code,{children:"@modern-js-reduck/react"}),"."]}),"\n",(0,s.jsxs)(n.ol,{start:"3",children:["\n",(0,s.jsxs)(n.li,{children:["Wrap the ",(0,s.jsx)(n.code,{children:"Provider"})," component"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Modern.js automatically wraps the ",(0,s.jsx)(n.a,{href:"/apis/app/runtime/model/Provider",children:(0,s.jsx)(n.code,{children:"Provider"})})," component used to inject the Reduck global Store on the entry component of the application. When using Reduck separately, this needs to be done manually."]}),"\n",(0,s.jsx)(n.p,{children:"Example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:"// Root Component\nconst Root = () => {\n  return (\n    <Provider>\n      {/* Entry App */}\n      <App />\n    </Provider>\n  );\n};\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"4",children:["\n",(0,s.jsx)(n.li,{children:"Feature configuration"}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["When used in Modern.js, Reduck features can be configured through ",(0,s.jsx)(n.a,{href:"/configure/app/runtime/state",children:(0,s.jsx)(n.code,{children:"runtime.state"})}),". When used separately, configuration needs to be done through the ",(0,s.jsx)(n.code,{children:"config"})," or ",(0,s.jsx)(n.code,{children:"store"})," parameter of ",(0,s.jsx)(n.a,{href:"/apis/app/runtime/model/Provider",children:(0,s.jsx)(n.code,{children:"Provider"})}),"."]}),"\n",(0,s.jsx)(n.p,{children:"Example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:"const Root = () => {\n  return (\n    {/* Close Redux DevTools */}\n    <Provider config={{ devTools: false }}>\n      <App />\n    </Provider>\n  )\n}\n"})})]})}function t(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,o.useMDXComponents)(),e.components);return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}n.default=t,t.__RSPRESS_PAGE_META={},t.__RSPRESS_PAGE_META["en%2Fguides%2Ftopic-detail%2Fmodel%2Fuse-out-of-modernjs.mdx"]={toc:[],title:"Using Reduck Separately",frontmatter:{sidebar_position:12,title:"Using Reduck Separately"}}}}]);