/*! For license information please see 56412.f4327a52.js.LICENSE.txt */
(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["56412"],{45022:function(e,n,r){"use strict";r.r(n);var s=r("39980"),t=r("9580");function o(e){let n=Object.assign({h1:"h1",a:"a",ul:"ul",li:"li",strong:"strong",code:"code",p:"p",h2:"h2",pre:"pre"},(0,t.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h1,{id:"sourceenablecustomentry",children:["source.enableCustomEntry",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#sourceenablecustomentry",children:"#"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Type:"})," ",(0,s.jsx)(n.code,{children:"boolean"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Default:"})," ",(0,s.jsx)(n.code,{children:"false"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"This option is used for custom Modern.js entries."}),"\n",(0,s.jsxs)(n.p,{children:["When this option is enabled, Modern.js will use the ",(0,s.jsx)(n.code,{children:"src/entry.[jt]sx"})," file as the project's entry point. For more details, refer to ",(0,s.jsx)(n.a,{href:"/guides/concept/entries",children:"Entries"}),"."]}),"\n",(0,s.jsxs)(n.h2,{id:"example",children:["Example",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#example",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"First, enable this option in the configuration file:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"export default defineConfig({\n  source: {\n    enableCustomEntry: true,\n  },\n});\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Create the ",(0,s.jsx)(n.code,{children:"src/entry.tsx"})," file:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:"import { createRoot } from '@modern-js/runtime/react';\nimport { render } from '@modern-js/runtime/browser';\n\nconst ModernRoot = createRoot();\n\nasync function beforeRender() {\n   // todo\n}\n\nbeforeRender().then(() => {\n  render(<ModernRoot />);\n});\n"})})]})}function i(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,t.ah)(),e.components);return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}n.default=i,i.__RSPRESS_PAGE_META={},i.__RSPRESS_PAGE_META["en%2Fconfigure%2Fapp%2Fsource%2Fenable-custom-entry.mdx"]={toc:[{text:"Example",id:"example",depth:2}],title:"source.enableCustomEntry",frontmatter:{sidebar_label:"enableCustomEntry"}}}}]);