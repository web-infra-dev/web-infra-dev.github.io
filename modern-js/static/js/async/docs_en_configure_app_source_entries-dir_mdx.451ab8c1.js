(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_en_configure_app_source_entries-dir_mdx"],{54891:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return a}});var s,i=r("15169"),t=r("43932"),c=r("9880"),o=r("23169");function d(e){var n=Object.assign({h1:"h1",a:"a",ul:"ul",li:"li",strong:"strong",code:"code",p:"p",pre:"pre"},(0,o.useMDXComponents)(),e.components);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(n.h1,{id:"sourceentriesdir",children:["source.entriesDir",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#sourceentriesdir",children:"#"})]}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:"Type:"})," ",(0,c.jsx)(n.code,{children:"string"})]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:"Default:"})," ",(0,c.jsx)(n.code,{children:"./src"})]}),"\n"]}),"\n",(0,c.jsxs)(n.p,{children:["By default, Modern.js scans the ",(0,c.jsx)(n.code,{children:"src"})," directory to identify page entries. You can customize the directory used for identifying page entries with this option."]}),"\n",(0,c.jsx)(n.p,{children:"For example, with the following configuration and directory structure:"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"export default defineConfig({\n  source: {\n    entriesDir: './src/pages',\n  },\n});\n"})}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",meta:'title="Project directory structure"',children:".\n\u2514\u2500\u2500 src\n    \u2514\u2500\u2500 pages\n        \u251C\u2500\u2500 a\n        \u2502   \u2514\u2500\u2500 App.tsx\n        \u2514\u2500\u2500 b\n            \u2514\u2500\u2500 App.tsx\n"})}),"\n",(0,c.jsxs)(n.p,{children:["Modern.js will generate the build entries ",(0,c.jsx)(n.code,{children:"a"})," and ",(0,c.jsx)(n.code,{children:"b"})," based on the ",(0,c.jsx)(n.code,{children:"./src/pages"})," directory structure. The result is as follows:"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-js",children:"const entry = {\n  a: './src/pages/a/App.tsx',\n  b: './src/pages/b/App.tsx',\n};\n"})})]})}(s=globalThis).__RSPRESS_PAGE_META||(s.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["en%2Fconfigure%2Fapp%2Fsource%2Fentries-dir.mdx"]={toc:[],title:"source.entriesDir",frontmatter:{sidebar_label:"entriesDir"}};var a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,o.useMDXComponents)(),e.components).wrapper;return n?(0,c.jsx)(n,(0,t._)((0,i._)({},e),{children:(0,c.jsx)(d,(0,i._)({},e))})):d(e)}}}]);