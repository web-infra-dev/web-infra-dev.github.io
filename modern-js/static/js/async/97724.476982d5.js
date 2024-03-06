/*! For license information please see 97724.476982d5.js.LICENSE.txt */
(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["97724"],{2507:function(e,n,i){"use strict";i.r(n);var r=i("39980"),t=i("96954"),s=i("69553");function d(e){let n=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",h3:"h3",ul:"ul",li:"li",strong:"strong",code:"code",h4:"h4",pre:"pre",div:"div"},(0,t.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"overview",children:["Overview",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#overview",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"This section describes configuration of the Runtime plugin."}),"\n",(0,r.jsxs)(n.h2,{id:"configuration",children:["Configuration",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#configuration",children:"#"})]}),"\n",(0,r.jsxs)(n.h3,{id:"runtime",children:["runtime",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#runtime",children:"#"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Type:"})," ",(0,r.jsx)(n.code,{children:"Object"})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"The runtime is configured as follows:"}),"\n",(0,r.jsxs)(n.h4,{id:"base",children:["Base",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#base",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["Configure in ",(0,r.jsx)(n.code,{children:"modern.config.ts"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import { defineConfig } from '@modern-js/app-tools';\n\nexport default defineConfig({\n  runtime: {\n    state: true,\n    router: true,\n  },\n});\n"})}),"\n",(0,r.jsxs)(n.h4,{id:"defineconfig",children:["DefineConfig",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#defineconfig",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["Configure using ",(0,r.jsx)(n.a,{href:"/apis/app/runtime/app/define-config",children:(0,r.jsx)(n.code,{children:"defineConfig"})})," API:"]}),"\n",(0,r.jsxs)(n.div,{className:"rspress-directive info",children:[(0,r.jsx)(n.div,{className:"rspress-directive-title",children:"INFO"}),(0,r.jsxs)(n.div,{className:"rspress-directive-content",children:[(0,r.jsx)(n.p,{children:"When there is a function in the runtime configuration, it can only be configured this way."}),"\n"]})]}),"\n","\n",(0,r.jsxs)(s.Tabs,{children:[(0,r.jsx)(s.Tab,{value:"layout",label:"Conventional Routing",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",meta:'title="src/routes/layout.tsx"',children:"import type { AppConfig } from '@modern-js/runtime';\n\nexport const config = (): AppConfig => {\n  return {\n    router: {\n      supportHtml5History: false\n    }\n  }\n};\n"})})}),(0,r.jsx)(s.Tab,{value:"app",label:"Self-controlled Routing",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",meta:'title="src/App.tsx"',children:"import { defineConfig } from '@modern-js/runtime';\n\nconst App = () => {\n  /** */\n};\n\ndefineConfig(App, {\n  router: {\n    supportHtml5History: false,\n  },\n});\n\nexport default App;\n"})})})]}),"\n",(0,r.jsxs)(n.div,{className:"rspress-directive info",children:[(0,r.jsx)(n.div,{className:"rspress-directive-title",children:"INFO"}),(0,r.jsxs)(n.div,{className:"rspress-directive-content",children:[(0,r.jsx)(n.p,{children:"Using runtime configuration, you can solve the problem that runtime plugin configuration needs to be at runtime to get specific content."}),"\n",(0,r.jsxs)(n.p,{children:["Runtime plugin runtime configuration and configuration directly in ",(0,r.jsx)(n.code,{children:"modern.config.ts"})," are merged by default, and runtime configuration takes precedence."]}),"\n"]})]}),"\n",(0,r.jsxs)(n.div,{className:"rspress-directive warning",children:[(0,r.jsx)(n.div,{className:"rspress-directive-title",children:"WARNING"}),(0,r.jsxs)(n.div,{className:"rspress-directive-content",children:[(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"defineConfig"})," API only accepts the specific configuration of Runtime plugins. Enabling the plugin is determined through ",(0,r.jsx)(n.code,{children:"modern.config.ts"}),' configuration."']}),"\n"]})]}),"\n",(0,r.jsxs)(n.h3,{id:"runtimebyentries",children:["runtimeByEntries",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#runtimebyentries",children:"#"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Type:"})," ",(0,r.jsx)(n.code,{children:"Object"})]}),"\n"]}),"\n",(0,r.jsxs)(n.h4,{id:"introduction",children:["Introduction",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#introduction",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"Add the runtime configuration according to the entry. The option attribute is consistent with the runtime. The specified value will be replaced and merged with the content of the runtime attribute."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import { defineConfig } from '@modern-js/app-tools';\n\nexport default defineConfig({\n  runtime: {\n    state: false,\n  },\n  runtimeByEntries: {\n    entry1: {\n      state: true, // { state: true }\n    },\n    entry2: {\n      // { state: false, router: true }\n      router: true,\n    },\n  },\n});\n"})})]})}function o(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,t.useMDXComponents)(),e.components);return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}n.default=o,o.__RSPRESS_PAGE_META={},o.__RSPRESS_PAGE_META["en%2Fconfigure%2Fapp%2Fruntime%2Fintro.mdx"]={toc:[{text:"Configuration",id:"configuration",depth:2},{text:"runtime",id:"runtime",depth:3},{text:"Base",id:"base",depth:4},{text:"DefineConfig",id:"defineconfig",depth:4},{text:"runtimeByEntries",id:"runtimebyentries",depth:3},{text:"Introduction",id:"introduction",depth:4}],title:"Overview",frontmatter:{sidebar_label:"Overview",sidebar_position:1}}}}]);