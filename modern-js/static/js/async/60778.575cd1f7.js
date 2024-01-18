/*! For license information please see 60778.575cd1f7.js.LICENSE.txt */
(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["60778"],{70717:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return c}});var r=t("39980"),s=t("96954");function i(e){let n=Object.assign({h1:"h1",a:"a",ul:"ul",li:"li",strong:"strong",pre:"pre",code:"code",p:"p",div:"div",h2:"h2",h3:"h3"},(0,s.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"sourceentries",children:["source.entries",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#sourceentries",children:"#"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"Type:"})}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"type Entries = Record<\n  string,\n  | string\n  | {\n      entry: string;\n      disableMount?: boolean;\n      customBootstrap?: string;\n    }\n>;\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Default:"})," The entry object calculated based on the directory structure of the current project."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Used to configure custom page entries."}),"\n",(0,r.jsxs)(n.div,{className:"rspress-directive tip",children:[(0,r.jsx)(n.div,{className:"rspress-directive-title",children:"When to use"}),(0,r.jsxs)(n.div,{className:"rspress-directive-content",children:[(0,r.jsxs)(n.p,{children:["For most scenarios, the entry automatically generated by Modern.js based on the directory structure can meet the requirements. For details, please refer to ",(0,r.jsx)(n.a,{href:"/guides/concept/entries",children:"Entry"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"If you need to customize page entries, you can set them through this option."}),"\n"]})]}),"\n",(0,r.jsxs)(n.h2,{id:"string",children:["String",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#string",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["When the value of the ",(0,r.jsx)(n.code,{children:"entries"})," object is of type ",(0,r.jsx)(n.code,{children:"string"}),", it represents the file path of the entry module:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import { defineConfig } from '@modern-js/app-tools';\n\nexport default defineConfig({\n  source: {\n    entries: {\n      // Specify a new entry named 'my-entry'\n      'my-entry': './src/home/test/index.ts',\n    },\n    disableDefaultEntries: true,\n  },\n});\n"})}),"\n",(0,r.jsxs)(n.p,{children:["By default, the configured entry is equivalent to ",(0,r.jsx)(n.code,{children:"App.[jt]sx"}),", which means that the specified entry file ",(0,r.jsx)(n.strong,{children:"only needs to export the root component of the application"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"For example, the following directory structure:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:".\n\u251C\u2500\u2500 src\n\u2502   \u2514\u2500\u2500 entry\n\u2502       \u251C\u2500\u2500 chat.tsx\n\u2502       \u2514\u2500\u2500 home.tsx\n\u2514\u2500\u2500 package.json\n"})}),"\n",(0,r.jsx)(n.p,{children:"The above directory does not conform to the directory structure convention of Modern.js, so Modern.js will not get any default entries when analyzing the directory structure."}),"\n",(0,r.jsxs)(n.p,{children:["If you do not want to change the directory structure (such as project migration), you can customize the entry through ",(0,r.jsx)(n.code,{children:"source.entries"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"export default defineConfig({\n  source: {\n    entries: {\n      home: './src/entry/home.tsx',\n      chat: './src/entry/chat.tsx',\n    },\n    disableDefaultEntries: true,\n  },\n});\n"})}),"\n",(0,r.jsxs)(n.h2,{id:"object",children:["Object",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#object",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["When the value is ",(0,r.jsx)(n.code,{children:"Object"}),", the following attributes can be configured:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"entry"}),": ",(0,r.jsx)(n.code,{children:"string"}),", the entry file path."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"disableMount"}),": ",(0,r.jsx)(n.code,{children:"boolean = false"}),", disable Modern.js's behavior of automatically generating entry code."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"customBootstrap"}),": ",(0,r.jsx)(n.code,{children:"string = ''"}),", specify the file path of ",(0,r.jsx)(n.a,{href:"/guides/concept/entries#custom-bootstrap",children:"custom Bootstrap"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import { defineConfig } from '@modern-js/app-tools';\n\nexport default defineConfig({\n  source: {\n    entries: {\n      'my-entry': {\n        // entry file path\n        entry: './src/my-page/index.tsx',\n        disableMount: true,\n      },\n    },\n    // Disable default entry scanning\n    disableDefaultEntries: true,\n  },\n});\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"disable-entry-file-generation",children:["Disable entry file generation",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#disable-entry-file-generation",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["By default, the configured entry is equivalent to ",(0,r.jsx)(n.code,{children:"App.[jt]sx"}),", and Modern.js will automatically generate an entry file to reference the entry you configured."]}),"\n",(0,r.jsxs)(n.p,{children:["If you want to disable the logic of Modern.js automatically generating entry files, you can set the ",(0,r.jsx)(n.code,{children:"disableMount"})," property to ",(0,r.jsx)(n.code,{children:"true"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"export default defineConfig({\n  source: {\n    entries: {\n      'my-entry': {\n        entry: './src/my-page/index.tsx',\n        disableMount: true,\n      },\n    },\n    // Disable default entry scanning\n    disableDefaultEntries: true,\n  },\n});\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"conventional-routing",children:["Conventional Routing",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#conventional-routing",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["If you need to enable conventional routing for a custom entry, you can set ",(0,r.jsx)(n.code,{children:"entry"})," to a directory path:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import { defineConfig } from '@modern-js/app-tools';\n\nexport default defineConfig({\n  source: {\n    entries: {\n      // enable conventional routing\n      entry_spa: {\n        // The entry path of conventional routing must be set to a directory\n        entry: './src/about',\n      },\n    },\n    // Disable default entry scanning\n    disableDefaultEntries: true,\n  },\n});\n"})}),"\n",(0,r.jsxs)(n.h2,{id:"entry-merge-rules",children:["Entry Merge Rules",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#entry-merge-rules",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["After setting ",(0,r.jsx)(n.code,{children:"source.entries"}),", if ",(0,r.jsx)(n.code,{children:"disableDefaultEntries: true"})," is not set, Modern.js will merge the custom entry with the entry obtained by analyzing the directory structure."]}),"\n",(0,r.jsx)(n.p,{children:"The merge rule is:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Compare the entry paths set by the custom entry setting and the default entry path. When the entry paths are the same, the custom entry will override the default entry."}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"For example, the following directory structure:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:".\n\u251C\u2500\u2500 src\n\u2502   \u251C\u2500\u2500 chat\n\u2502   \u2502   \u2514\u2500\u2500 App.tsx\n\u2502   \u2514\u2500\u2500 home\n\u2502       \u2514\u2500\u2500 index.ts\n\u2514\u2500\u2500 package.json\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Modern.js will analyze the ",(0,r.jsx)(n.code,{children:"src/"})," directory and get the default entries ",(0,r.jsx)(n.code,{children:"chat"})," and ",(0,r.jsx)(n.code,{children:"home"}),". When the user configures as follows in the ",(0,r.jsx)(n.code,{children:"modern.config.ts"})," file:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import { defineConfig } from '@modern-js/app-tools';\n\nexport default defineConfig({\n  source: {\n    entries: {\n      index: './src/home/index.ts',\n    },\n  },\n};\n"})}),"\n",(0,r.jsxs)(n.p,{children:["It can be seen that the path of the custom entry ",(0,r.jsx)(n.code,{children:"index"})," is the same as the path of the default entry ",(0,r.jsx)(n.code,{children:"home"}),". During the merge process, ",(0,r.jsx)(n.code,{children:"index"})," will override ",(0,r.jsx)(n.code,{children:"home"}),", and the final entry is as follows:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"chat -> ./src/chat/App.tsx"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"index -> ./src/home/index.ts"})}),"\n"]})]})}function o(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,s.useMDXComponents)(),e.components);return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}var c=o;o.__RSPRESS_PAGE_META={},o.__RSPRESS_PAGE_META["en%2Fconfigure%2Fapp%2Fsource%2Fentries.mdx"]={toc:[{text:"String",id:"string",depth:2},{text:"Object",id:"object",depth:2},{text:"Disable entry file generation",id:"disable-entry-file-generation",depth:3},{text:"Conventional Routing",id:"conventional-routing",depth:3},{text:"Entry Merge Rules",id:"entry-merge-rules",depth:2}],title:"source.entries",frontmatter:{sidebar_label:"entries"}}}}]);