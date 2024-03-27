/*! For license information please see 3267.5ee6e81b.js.LICENSE.txt */
(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["3267"],{65260:function(e,n,r){"use strict";r.r(n);var s=r("39980"),i=r("76713"),t=r("69553");function d(e){let n=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",h3:"h3",ul:"ul",li:"li",strong:"strong",code:"code",h4:"h4",pre:"pre",div:"div"},(0,i.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h1,{id:"\u603B\u89C8",children:["\u603B\u89C8",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u603B\u89C8",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"\u6B64\u8282\u5C06\u4ECB\u7ECD Runtime \u63D2\u4EF6\u7684\u914D\u7F6E\u3002"}),"\n",(0,s.jsxs)(n.h2,{id:"\u914D\u7F6E\u65B9\u5F0F",children:["\u914D\u7F6E\u65B9\u5F0F",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u914D\u7F6E\u65B9\u5F0F",children:"#"})]}),"\n",(0,s.jsxs)(n.h3,{id:"runtime",children:["runtime",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#runtime",children:"#"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"\u7C7B\u578B\uFF1A"})," ",(0,s.jsx)(n.code,{children:"Object"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"runtime \u914D\u7F6E\u65B9\u5F0F\u5982\u4E0B\uFF1A"}),"\n",(0,s.jsxs)(n.h4,{id:"\u57FA\u672C\u7528\u6CD5",children:["\u57FA\u672C\u7528\u6CD5",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u57FA\u672C\u7528\u6CD5",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["\u5728 ",(0,s.jsx)(n.code,{children:"modern.config.ts"})," \u4E2D\u914D\u7F6E"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import { defineConfig } from '@modern-js/app-tools';\n\nexport default defineConfig({\n  runtime: {\n    state: true,\n    router: true,\n  },\n});\n"})}),"\n",(0,s.jsxs)(n.h4,{id:"\u8FD0\u884C\u65F6\u914D\u7F6E",children:["\u8FD0\u884C\u65F6\u914D\u7F6E",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u8FD0\u884C\u65F6\u914D\u7F6E",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["\u901A\u8FC7 ",(0,s.jsx)(n.a,{href:"/apis/app/runtime/app/define-config",children:(0,s.jsx)(n.code,{children:"defineConfig"})})," API \u914D\u7F6E\uFF1A"]}),"\n",(0,s.jsxs)(n.div,{className:"rspress-directive info",children:[(0,s.jsx)(n.div,{className:"rspress-directive-title",children:"INFO"}),(0,s.jsxs)(n.div,{className:"rspress-directive-content",children:[(0,s.jsx)(n.p,{children:"\u5F53 runtime \u914D\u7F6E\u4E2D\u5B58\u5728\u51FD\u6570\u65F6\uFF0C\u53EA\u80FD\u4F7F\u7528\u8BE5\u65B9\u5F0F\u8FDB\u884C\u914D\u7F6E\u3002"}),"\n"]})]}),"\n","\n",(0,s.jsxs)(t.Tabs,{children:[(0,s.jsx)(t.Tab,{value:"layout",label:"\u7EA6\u5B9A\u5F0F\u8DEF\u7531",default:!0,children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",meta:'title="src/routes/layout.tsx"',children:"import type { AppConfig } from '@modern-js/runtime';\n\nexport const config = (): AppConfig => {\n  return {\n    router: {\n      supportHtml5History: false\n    }\n  }\n};\n"})})}),(0,s.jsx)(t.Tab,{value:"app",label:"\u81EA\u63A7\u8DEF\u7531",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",meta:'title="src/App.tsx"',children:"import { defineConfig } from '@modern-js/runtime';\n\nconst App = () => {\n  /** */\n};\n\ndefineConfig(App, {\n  router: {\n    supportHtml5History: false,\n  },\n});\n\nexport default App;\n"})})})]}),"\n",(0,s.jsxs)(n.div,{className:"rspress-directive info",children:[(0,s.jsx)(n.div,{className:"rspress-directive-title",children:"INFO"}),(0,s.jsxs)(n.div,{className:"rspress-directive-content",children:[(0,s.jsx)(n.p,{children:"\u4F7F\u7528\u8FD0\u884C\u65F6\u914D\u7F6E\uFF0C\u53EF\u4EE5\u89E3\u51B3 Runtime \u63D2\u4EF6\u914D\u7F6E\u9700\u8981\u5728\u8FD0\u884C\u65F6\u624D\u80FD\u83B7\u53D6\u5230\u5177\u4F53\u5185\u5BB9\u95EE\u9898\u3002"}),"\n",(0,s.jsxs)(n.p,{children:["Runtime \u63D2\u4EF6\u8FD0\u884C\u65F6\u914D\u7F6E\u548C\u76F4\u63A5\u5728 ",(0,s.jsx)(n.code,{children:"modern.config.ts"})," \u4E2D\u7684\u914D\u7F6E\u9ED8\u8BA4\u4F1A\u8FDB\u884C\u5408\u5E76\uFF0C\u4E14\u8FD0\u884C\u65F6\u914D\u7F6E\u4F18\u5148\u7EA7\u66F4\u9AD8\u3002"]}),"\n"]})]}),"\n",(0,s.jsxs)(n.div,{className:"rspress-directive warning",children:[(0,s.jsx)(n.div,{className:"rspress-directive-title",children:"WARNING"}),(0,s.jsxs)(n.div,{className:"rspress-directive-content",children:[(0,s.jsxs)(n.p,{children:["defineConfig \u4E2D\u53EA\u80FD\u5B9A\u4E49 Runtime \u63D2\u4EF6\u7684\u5177\u4F53\u914D\u7F6E\u5185\u5BB9\uFF0C\u786E\u8BA4\u662F\u5426\u5F00\u542F\u63D2\u4EF6\u8FD8\u9700\u8981\u901A\u8FC7 ",(0,s.jsx)(n.code,{children:"modern.config.ts"})," \u4E2D\u7684\u914D\u7F6E\u51B3\u5B9A\u3002"]}),"\n"]})]}),"\n",(0,s.jsxs)(n.h3,{id:"runtimebyentries",children:["runtimeByEntries",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#runtimebyentries",children:"#"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"\u7C7B\u578B\uFF1A"})," ",(0,s.jsx)(n.code,{children:"Object"})]}),"\n",(0,s.jsx)(n.li,{children:"**\u9ED8\u8BA4\u503C\uFF1A**\u65E0"}),"\n"]}),"\n",(0,s.jsxs)(n.h4,{id:"\u8BF4\u660E",children:["\u8BF4\u660E",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u8BF4\u660E",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"\u6309\u5165\u53E3\u6DFB\u52A0 runtime \u914D\u7F6E\uFF0C\u9009\u9879\u5C5E\u6027\u540C runtime \u4E00\u81F4\uFF0C\u6307\u5B9A\u503C\u4F1A\u548C runtime \u5C5E\u6027\u5185\u5BB9\u505A\u66FF\u6362\u5408\u5E76\u64CD\u4F5C\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import { defineConfig } from '@modern-js/app-tools';\n\nexport default defineConfig({\n  runtime: {\n    state: false,\n  },\n  runtimeByEntries: {\n    entry1: {\n      state: true, // { state: true }\n    },\n    entry2: {\n      // { state: false, router: true }\n      router: true,\n    },\n  },\n});\n"})})]})}function c(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,i.useMDXComponents)(),e.components);return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}n.default=c,c.__RSPRESS_PAGE_META={},c.__RSPRESS_PAGE_META["zh%2Fconfigure%2Fapp%2Fruntime%2Fintro.mdx"]={toc:[{text:"\u914D\u7F6E\u65B9\u5F0F",id:"\u914D\u7F6E\u65B9\u5F0F",depth:2},{text:"runtime",id:"runtime",depth:3},{text:"\u57FA\u672C\u7528\u6CD5",id:"\u57FA\u672C\u7528\u6CD5",depth:4},{text:"\u8FD0\u884C\u65F6\u914D\u7F6E",id:"\u8FD0\u884C\u65F6\u914D\u7F6E",depth:4},{text:"runtimeByEntries",id:"runtimebyentries",depth:3},{text:"\u8BF4\u660E",id:"\u8BF4\u660E",depth:4}],title:"\u603B\u89C8",frontmatter:{sidebar_label:"\u603B\u89C8",sidebar_position:1}}}}]);