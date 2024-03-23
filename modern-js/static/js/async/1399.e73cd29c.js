/*! For license information please see 1399.e73cd29c.js.LICENSE.txt */
(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["1399"],{23367:function(e,n,s){"use strict";s.r(n);var r=s("39980"),i=s("76713");function d(e){let n=Object.assign({h1:"h1",a:"a",ul:"ul",li:"li",strong:"strong",pre:"pre",code:"code",p:"p",div:"div",h2:"h2",h3:"h3"},(0,i.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"sourceentries",children:["source.entries",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#sourceentries",children:"#"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"\u7C7B\u578B\uFF1A"})}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"type Entries = Record<\n  string,\n  | string\n  | {\n      entry: string;\n      disableMount?: boolean;\n      customBootstrap?: string;\n    }\n>;\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"\u9ED8\u8BA4\u503C\uFF1A"})," \u6839\u636E\u5F53\u524D\u9879\u76EE\u7684\u76EE\u5F55\u7ED3\u6784\u8BA1\u7B97\u51FA\u7684\u5165\u53E3\u5BF9\u8C61\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"\u7528\u4E8E\u914D\u7F6E\u81EA\u5B9A\u4E49\u9875\u9762\u5165\u53E3\u3002"}),"\n",(0,r.jsxs)(n.div,{className:"rspress-directive tip",children:[(0,r.jsx)(n.div,{className:"rspress-directive-title",children:"\u4F55\u65F6\u4F7F\u7528"}),(0,r.jsxs)(n.div,{className:"rspress-directive-content",children:[(0,r.jsxs)(n.p,{children:["\u5BF9\u4E8E\u5927\u90E8\u5206\u573A\u666F\uFF0CModern.js \u6839\u636E\u76EE\u5F55\u7ED3\u6784\u81EA\u52A8\u751F\u6210\u7684\u5165\u53E3\u5DF2\u7ECF\u53EF\u4EE5\u6EE1\u8DB3\u9700\u6C42\uFF0C\u5177\u4F53\u53EF\u53C2\u8003",(0,r.jsx)(n.a,{href:"/guides/concept/entries",children:"\u5165\u53E3"}),"\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u5982\u679C\u4F60\u9700\u8981\u81EA\u5B9A\u4E49\u9875\u9762\u5165\u53E3\u65F6\uFF0C\u53EF\u4EE5\u901A\u8FC7\u8BE5\u9009\u9879\u8FDB\u884C\u8BBE\u7F6E\u3002"}),"\n"]})]}),"\n",(0,r.jsxs)(n.h2,{id:"string-\u7C7B\u578B",children:["String \u7C7B\u578B",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#string-\u7C7B\u578B",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["\u5F53 ",(0,r.jsx)(n.code,{children:"entries"})," \u5BF9\u8C61\u7684 value \u4E3A ",(0,r.jsx)(n.code,{children:"string"})," \u7C7B\u578B\u65F6\uFF0C\u8868\u793A\u5165\u53E3\u6A21\u5757\u7684\u6587\u4EF6\u8DEF\u5F84:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import { defineConfig } from '@modern-js/app-tools';\n\nexport default defineConfig({\n  source: {\n    entries: {\n      // \u6307\u5B9A\u4E00\u4E2A\u540D\u79F0\u4E3A 'my-entry' \u7684\u65B0\u5165\u53E3\n      'my-entry': './src/home/test/index.ts',\n    },\n    // \u7981\u7528\u9ED8\u8BA4\u5165\u53E3\u626B\u63CF\n    disableDefaultEntries: true,\n  },\n});\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u914D\u7F6E\u7684\u5165\u53E3\u7B49\u4EF7\u4E8E ",(0,r.jsx)(n.code,{children:"App.[jt]sx"}),"\uFF0C\u5373\u6307\u5B9A\u7684\u5165\u53E3\u6587\u4EF6",(0,r.jsx)(n.strong,{children:"\u53EA\u9700\u8981\u5BFC\u51FA\u5E94\u7528\u7684\u6839\u7EC4\u4EF6"}),"\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u4F8B\u5982\u4EE5\u4E0B\u76EE\u5F55\u7ED3\u6784\uFF1A"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:".\n\u251C\u2500\u2500 src\n\u2502   \u2514\u2500\u2500 entry\n\u2502       \u251C\u2500\u2500 chat.tsx\n\u2502       \u2514\u2500\u2500 home.tsx\n\u2514\u2500\u2500 package.json\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u4E0A\u8FF0\u76EE\u5F55\u4E0D\u7B26\u5408 Modern.js \u7684\u76EE\u5F55\u7ED3\u6784\u7EA6\u5B9A\uFF0C\u56E0\u6B64\uFF0CModern.js \u5728\u5206\u6790\u76EE\u5F55\u7ED3\u6784\u65F6\uFF0C\u4E0D\u4F1A\u5F97\u5230\u4EFB\u4F55\u9ED8\u8BA4\u5165\u53E3\u3002"}),"\n",(0,r.jsxs)(n.p,{children:["\u5728\u4E0D\u60F3\u6539\u53D8\u76EE\u5F55\u7ED3\u6784\u7684\u60C5\u51B5\u4E0B\uFF08\u5982\u9879\u76EE\u8FC1\u79FB\uFF09\uFF0C\u53EF\u4EE5\u901A\u8FC7 ",(0,r.jsx)(n.code,{children:"source.entries"})," \u81EA\u5B9A\u4E49\u5165\u53E3\uFF1A"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"export default defineConfig({\n  source: {\n    entries: {\n      home: './src/entry/home.tsx',\n      chat: './src/entry/chat.tsx',\n    },\n    // \u7981\u7528\u9ED8\u8BA4\u5165\u53E3\u626B\u63CF\n    disableDefaultEntries: true,\n  },\n});\n"})}),"\n",(0,r.jsxs)(n.h2,{id:"object-\u7C7B\u578B",children:["Object \u7C7B\u578B",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#object-\u7C7B\u578B",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["\u5F53\u503C\u4E3A ",(0,r.jsx)(n.code,{children:"Object"})," \u65F6\uFF0C\u53EF\u914D\u7F6E\u5982\u4E0B\u5C5E\u6027\uFF1A"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"entry"}),"\uFF1A",(0,r.jsx)(n.code,{children:"string"}),"\uFF0C\u5165\u53E3\u6587\u4EF6\u8DEF\u5F84\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"disableMount"}),"\uFF1A",(0,r.jsx)(n.code,{children:"boolean = false"}),"\uFF0C\u5173\u95ED Modern.js \u81EA\u52A8\u751F\u6210\u5165\u53E3\u4EE3\u7801\u7684\u884C\u4E3A\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"customBootstrap"}),"\uFF1A ",(0,r.jsx)(n.code,{children:"string = ''"}),"\uFF0C\u6307\u5B9A",(0,r.jsx)(n.a,{href:"/guides/concept/entries#%E8%87%AA%E5%AE%9A%E4%B9%89-bootstrap",children:"\u81EA\u5B9A\u4E49 Bootstrap"})," \u7684\u6587\u4EF6\u8DEF\u5F84\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import { defineConfig } from '@modern-js/app-tools';\n\nexport default defineConfig({\n  source: {\n    entries: {\n      'my-entry': {\n        // \u5165\u53E3\u6587\u4EF6\u8DEF\u5F84\n        entry: './src/my-page/index.tsx',\n        disableMount: true,\n      },\n    },\n    // \u7981\u7528\u9ED8\u8BA4\u5165\u53E3\u626B\u63CF\n    disableDefaultEntries: true,\n  },\n});\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"\u7981\u7528\u5165\u53E3\u6587\u4EF6\u751F\u6210",children:["\u7981\u7528\u5165\u53E3\u6587\u4EF6\u751F\u6210",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u7981\u7528\u5165\u53E3\u6587\u4EF6\u751F\u6210",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u914D\u7F6E\u7684\u5165\u53E3\u7B49\u4EF7\u4E8E ",(0,r.jsx)(n.code,{children:"App.[jt]sx"}),"\uFF0CModern.js \u4F1A\u81EA\u52A8\u751F\u6210\u4E00\u4E2A\u5165\u53E3\u6587\u4EF6\u6765\u5F15\u7528\u4F60\u914D\u7F6E\u7684\u5165\u53E3\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u5982\u679C\u4F60\u5E0C\u671B\u7981\u7528 Modern.js \u81EA\u52A8\u751F\u6210\u5165\u53E3\u6587\u4EF6\u7684\u903B\u8F91\uFF0C\u53EF\u4EE5\u5C06 ",(0,r.jsx)(n.code,{children:"disableMount"})," \u5C5E\u6027\u8BBE\u7F6E\u4E3A ",(0,r.jsx)(n.code,{children:"true"}),"\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"export default defineConfig({\n  source: {\n    entries: {\n      'my-entry': {\n        entry: './src/my-page/index.tsx',\n        disableMount: true,\n      },\n    },\n    // \u7981\u7528\u9ED8\u8BA4\u5165\u53E3\u626B\u63CF\n    disableDefaultEntries: true,\n  },\n});\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"\u7EA6\u5B9A\u5F0F\u8DEF\u7531",children:["\u7EA6\u5B9A\u5F0F\u8DEF\u7531",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u7EA6\u5B9A\u5F0F\u8DEF\u7531",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["\u5982\u679C\u4F60\u9700\u8981\u4E3A\u67D0\u4E2A\u81EA\u5B9A\u4E49\u5165\u53E3\u542F\u7528\u7EA6\u5B9A\u5F0F\u8DEF\u7531\uFF0C\u53EF\u4EE5\u5C06 ",(0,r.jsx)(n.code,{children:"entry"})," \u8BBE\u7F6E\u4E3A\u76EE\u5F55\u8DEF\u5F84\uFF1A"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import { defineConfig } from '@modern-js/app-tools';\n\nexport default defineConfig({\n  source: {\n    entries: {\n      // \u542F\u7528\u7EA6\u5B9A\u5F0F\u8DEF\u7531\n      entry_spa: {\n        // \u7EA6\u5B9A\u5F0F\u8DEF\u7531\u7684\u5165\u53E3\u8DEF\u5F84\u5FC5\u987B\u8BBE\u7F6E\u4E3A\u76EE\u5F55\n        entry: './src/about',\n      },\n    },\n    // \u7981\u7528\u9ED8\u8BA4\u5165\u53E3\u626B\u63CF\n    disableDefaultEntries: true,\n  },\n});\n"})}),"\n",(0,r.jsxs)(n.h2,{id:"\u5165\u53E3\u5408\u5E76\u89C4\u5219",children:["\u5165\u53E3\u5408\u5E76\u89C4\u5219",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u5165\u53E3\u5408\u5E76\u89C4\u5219",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["\u5728\u8BBE\u7F6E ",(0,r.jsx)(n.code,{children:"source.entries"})," \u540E\uFF0C\u5982\u679C\u6CA1\u6709\u8BBE\u7F6E ",(0,r.jsx)(n.code,{children:"disableDefaultEntries: true"}),"\uFF0CModern.js \u4F1A\u5C06\u81EA\u5B9A\u4E49\u5165\u53E3\u4E0E\u5206\u6790\u76EE\u5F55\u7ED3\u6784\u5F97\u5230\u7684\u5165\u53E3\u5408\u5E76\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u5408\u5E76\u89C4\u5219\u4E3A\uFF1A"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u6BD4\u8F83\u81EA\u5B9A\u4E49\u5165\u53E3\u8BBE\u7F6E\u7684\u5165\u53E3\u8DEF\u5F84\u548C\u9ED8\u8BA4\u5165\u53E3\u8DEF\u5F84\uFF0C\u5F53\u5165\u53E3\u8DEF\u5F84\u4E00\u81F4\u65F6\uFF0C\u81EA\u5B9A\u4E49\u5165\u53E3\u4F1A\u8986\u76D6\u9ED8\u8BA4\u5165\u53E3\u3002"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"\u4F8B\u5982\u4EE5\u4E0B\u76EE\u5F55\u7ED3\u6784:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:".\n\u251C\u2500\u2500 src\n\u2502   \u251C\u2500\u2500 chat\n\u2502   \u2502   \u2514\u2500\u2500 App.tsx\n\u2502   \u2514\u2500\u2500 home\n\u2502       \u2514\u2500\u2500 index.ts\n\u2514\u2500\u2500 package.json\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Modern.js \u4F1A\u5206\u6790 ",(0,r.jsx)(n.code,{children:"src/"})," \u76EE\u5F55\uFF0C\u5F97\u5230\u9ED8\u8BA4\u5165\u53E3 ",(0,r.jsx)(n.code,{children:"chat"})," \u548C ",(0,r.jsx)(n.code,{children:"home"}),"\u3002\u5F53\u7528\u6237\u5728 ",(0,r.jsx)(n.code,{children:"modern.config.ts"})," \u6587\u4EF6\u4E2D\u914D\u7F6E\u5982\u4E0B\u65F6\uFF1A"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import { defineConfig } from '@modern-js/app-tools';\n\nexport default defineConfig({\n  source: {\n    entries: {\n      index: './src/home/index.ts',\n    },\n  },\n};\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u53EF\u4EE5\u770B\u5230\u81EA\u5B9A\u4E49\u5165\u53E3 ",(0,r.jsx)(n.code,{children:"index"})," \u7684\u8DEF\u5F84\u548C\u9ED8\u8BA4\u5165\u53E3 ",(0,r.jsx)(n.code,{children:"home"})," \u7684\u8DEF\u5F84\u4E00\u81F4\uFF0C\u5728\u5408\u5E76\u7684\u8FC7\u7A0B\u4E2D\uFF0C",(0,r.jsx)(n.code,{children:"index"})," \u4F1A\u8986\u76D6\u6389 ",(0,r.jsx)(n.code,{children:"home"}),"\uFF0C\u6700\u7EC8\u5165\u53E3\u5982\u4E0B\uFF1A"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"chat -> ./src/chat/App.tsx"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"index -> ./src/home/index.ts"})}),"\n"]})]})}function c(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,i.useMDXComponents)(),e.components);return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}n.default=c,c.__RSPRESS_PAGE_META={},c.__RSPRESS_PAGE_META["zh%2Fconfigure%2Fapp%2Fsource%2Fentries.mdx"]={toc:[{text:"String \u7C7B\u578B",id:"string-\u7C7B\u578B",depth:2},{text:"Object \u7C7B\u578B",id:"object-\u7C7B\u578B",depth:2},{text:"\u7981\u7528\u5165\u53E3\u6587\u4EF6\u751F\u6210",id:"\u7981\u7528\u5165\u53E3\u6587\u4EF6\u751F\u6210",depth:3},{text:"\u7EA6\u5B9A\u5F0F\u8DEF\u7531",id:"\u7EA6\u5B9A\u5F0F\u8DEF\u7531",depth:3},{text:"\u5165\u53E3\u5408\u5E76\u89C4\u5219",id:"\u5165\u53E3\u5408\u5E76\u89C4\u5219",depth:2}],title:"source.entries",frontmatter:{sidebar_label:"entries"}}}}]);