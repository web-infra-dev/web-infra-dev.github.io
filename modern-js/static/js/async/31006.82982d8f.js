/*! For license information please see 31006.82982d8f.js.LICENSE.txt */
(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["31006"],{25688:function(e,n,t){"use strict";t.r(n);var r=t("39980"),s=t("96954");function i(e){let n=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",pre:"pre",code:"code",h3:"h3",ul:"ul",li:"li",div:"div"},(0,s.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"bootstrap",children:["bootstrap",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#bootstrap",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["Used to start and mount App, usually not manually called. This API is only required when using ",(0,r.jsx)(n.a,{href:"/guides/concept/entries#custom-bootstrap",children:"Custom Bootstrap"}),"."]}),"\n",(0,r.jsxs)(n.h2,{id:"usage",children:["Usage",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#usage",children:"#"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"import ReactDOM from 'react-dom/client';\nimport { bootstrap } from '@modern-js/runtime';\n\nbootstrap(App, 'root', undefined, ReactDOM);\n"})}),"\n",(0,r.jsxs)(n.h2,{id:"function-signature",children:["Function Signature",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#function-signature",children:"#"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"type BootStrap<T = unknown> = (\n  App: React.ComponentType,\n  id: string | HTMLElement | RuntimeContext,\n  root?: any,\n  ReactDOM?: {\n    render?: Renderer;\n    hydrate?: Renderer;\n    createRoot?: typeof createRoot;\n    hydrateRoot?: typeof hydrateRoot;\n  },\n) => Promise<T>;\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"input",children:["Input",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#input",children:"#"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"AppComponent"}),": The ReactElement instance created by ",(0,r.jsx)(n.a,{href:"/en/apis/app/runtime/core/create-app",children:(0,r.jsx)(n.code,{children:"createApp"})}),"."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"rootId"}),": DOM root element id to mount, such as ",(0,r.jsx)(n.code,{children:'"root"'}),"."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"root"}),": The return value of ReactDOM.createRoot, used for scenarios where the root needs to be destroyed outside of the bootstrap function."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"ReactDOM"}),": The ReactDOM object, used to differentiate between React 18 and React 17 APIs."]}),"\n"]}),"\n",(0,r.jsxs)(n.h2,{id:"example",children:["Example",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#example",children:"#"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"import ReactDOM from 'react-dom/client';\nimport { createApp, bootstrap } from '@modern-js/runtime';\n\nfunction App() {\n  return <div>Hello Modern.js</div>;\n}\n\nconst WrappedApp = createApp({\n  // customized plugin\n  plugins: [customPlugin()],\n})(App);\n\nbootstrap(WrappedApp, 'root', undefined, ReactDOM);\n"})}),"\n",(0,r.jsxs)(n.div,{className:"rspress-directive info",children:[(0,r.jsx)(n.div,{className:"rspress-directive-title",children:"INFO"}),(0,r.jsxs)(n.div,{className:"rspress-directive-content",children:[(0,r.jsxs)(n.p,{children:["since ",(0,r.jsx)(n.code,{children:"@modern-js/runtime/plugins"})," is a alias, when used in a ts project, its type needs to be declared, Just add the following type declarations to ",(0,r.jsx)(n.code,{children:"src/modern-app-env.d.ts"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"declare module '@modern-js/runtime/plugins';\n"})}),"\n"]})]}),"\n",(0,r.jsxs)(n.div,{className:"rspress-directive warning",children:[(0,r.jsx)(n.div,{className:"rspress-directive-title",children:"WARNING"}),(0,r.jsxs)(n.div,{className:"rspress-directive-content",children:[(0,r.jsx)(n.p,{children:"bootstrap only supported for use in CSR."}),"\n"]})]})]})}function a(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,s.useMDXComponents)(),e.components);return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}n.default=a,a.__RSPRESS_PAGE_META={},a.__RSPRESS_PAGE_META["en%2Fapis%2Fapp%2Fruntime%2Fcore%2Fbootstrap.mdx"]={toc:[{text:"Usage",id:"usage",depth:2},{text:"Function Signature",id:"function-signature",depth:2},{text:"Input",id:"input",depth:3},{text:"Example",id:"example",depth:2}],title:"bootstrap",frontmatter:{title:"bootstrap"}}}}]);