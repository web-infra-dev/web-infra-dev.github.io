(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["27007"],{394:function(e,n,i){"use strict";i.r(n),i.d(n,{default:function(){return t}});var r=i("9880"),s=i("23169");function o(e){let n=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",pre:"pre",code:"code",div:"div",strong:"strong",h3:"h3",ul:"ul",li:"li",ol:"ol"},(0,s.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"defineconfig",children:["defineConfig",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#defineconfig",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"For dynamically configuring applications runtime features."}),"\n",(0,r.jsxs)(n.h2,{id:"usage",children:["Usage",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#usage",children:"#"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"import { defineConfig } from '@modern-js/runtime';\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Runtime configurations can usually be configured under the ",(0,r.jsx)(n.code,{children:"runtime"})," of the ",(0,r.jsx)(n.code,{children:"modern.config.js"}),", such as the ",(0,r.jsx)(n.a,{href:"/configure/app/runtime/router",children:"router"})," configuration."]}),"\n",(0,r.jsxs)(n.p,{children:["The configuration in ",(0,r.jsx)(n.code,{children:"modern.config.js"})," is determined at build time, If some configuration parameters are obtained at runtime, or if the configuration parameters are from a module (such as a component), then need use ",(0,r.jsx)(n.code,{children:"defineConfig"})," API configuration on runtime."]}),"\n",(0,r.jsxs)(n.div,{className:"rspress-directive info",children:[(0,r.jsx)(n.div,{className:"rspress-directive-title",children:"INFO"}),(0,r.jsxs)(n.div,{className:"rspress-directive-content",children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"@modern-js/app-tools"})," has the same name API, Used to provide ",(0,r.jsx)(n.strong,{children:"TS type for configuration"}),", please distinguish them."]}),"\n"]})]}),"\n",(0,r.jsxs)(n.h2,{id:"function-signature",children:["Function Signature",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#function-signature",children:"#"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"function defineConfig(Component, config): any;\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"input",children:["Input",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#input",children:"#"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Component: App root Component."}),"\n",(0,r.jsx)(n.li,{children:"config: runtime config."}),"\n"]}),"\n",(0,r.jsxs)(n.h2,{id:"example",children:["Example",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#example",children:"#"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"function App () {\n  ...\n}\n\ndefineConfig(App, {\n  router: {\n    supportHtml5History: false\n  }\n})\n"})}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"defineConfig"})," can configuring ",(0,r.jsx)(n.a,{href:"/configure/app/runtime/state",children:"runtime.state"}),"\u3001",(0,r.jsx)(n.a,{href:"/configure/app/runtime/router",children:"runtime.router"})," etc."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"defineConfig"})," before configuring a property, such as ",(0,r.jsx)(n.code,{children:"router"}),", you need to make sure that the ",(0,r.jsx)(n.code,{children:"modern.config.js"})," has been configured to enable this feature."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"defineConfig"})," incoming configuration will be merged with the configuration in ",(0,r.jsx)(n.code,{children:"modern.config.js"}),". Taking ",(0,r.jsx)(n.code,{children:"router"})," as an example, the final application configuration is as follows:"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:"{\n  // From `modern.config.js`\n  ...runtime.router\n  // From `defineConfig`\n  ...config.router\n}\n"})})]})}function c(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,s.useMDXComponents)(),e.components);return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}var t=c;c.__RSPRESS_PAGE_META={},c.__RSPRESS_PAGE_META["en%2Fapis%2Fapp%2Fruntime%2Fapp%2Fdefine-config.mdx"]={toc:[{text:"Usage",id:"usage",depth:2},{text:"Function Signature",id:"function-signature",depth:2},{text:"Input",id:"input",depth:3},{text:"Example",id:"example",depth:2}],title:"defineConfig",frontmatter:{title:"defineConfig"}}}}]);