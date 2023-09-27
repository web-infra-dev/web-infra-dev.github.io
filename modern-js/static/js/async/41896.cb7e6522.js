(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["41896"],{53975:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return l}});var s,i=r("15169"),t=r("43932"),o=r("9880"),c=r("23169");function d(e){var n=Object.assign({h1:"h1",a:"a",ul:"ul",li:"li",strong:"strong",code:"code",p:"p",pre:"pre"},(0,c.useMDXComponents)(),e.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.h1,{id:"sourcedisableentrydirs",children:["source.disableEntryDirs",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#sourcedisableentrydirs",children:"#"})]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Type:"})," ",(0,o.jsx)(n.code,{children:"string[]"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Default:"})," ",(0,o.jsx)(n.code,{children:"[]"})]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["By default, Modern.js identifies the application entry point based on the ",(0,o.jsx)(n.code,{children:"src"})," directory. You can use this option to prevent some directories from being recognized as application entry points."]}),"\n",(0,o.jsx)(n.p,{children:"For example, with the following configuration and directory structure:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"export default defineConfig({\n  source: {\n    disableEntryDirs: ['./src/one'],\n  },\n});\n"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",meta:'title="Project directory structure"',children:"\u2514\u2500\u2500 src/\n    \u251C\u2500\u2500 one/\n    |    \u2514\u2500\u2500 App.tsx\n    \u251C\u2500\u2500 two/\n    |    \u2514\u2500\u2500 routes/\n    \u2514\u2500\u2500 env.d.ts\n"})}),"\n",(0,o.jsx)(n.p,{children:"Without setting this configuration option, Modern.js will produce two entries based on the project directory:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"one"}),"\n",(0,o.jsx)(n.li,{children:"two"}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["After setting this configuration option, the ",(0,o.jsx)(n.code,{children:"src/one"})," directory will not be recognized as an entry directory."]}),"\n",(0,o.jsxs)(n.p,{children:["A common use case is to configure the ",(0,o.jsx)(n.code,{children:"src/common"})," and ",(0,o.jsx)(n.code,{children:"src/components"})," directories in this option to prevent them from being recognized as application entry points."]})]})}(s=globalThis).__RSPRESS_PAGE_META||(s.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["en%2Fconfigure%2Fapp%2Fsource%2Fdisable-entry-dirs.mdx"]={toc:[],title:"source.disableEntryDirs",frontmatter:{sidebar_label:"disableEntryDirs"}};var l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,c.useMDXComponents)(),e.components).wrapper;return n?(0,o.jsx)(n,(0,t._)((0,i._)({},e),{children:(0,o.jsx)(d,(0,i._)({},e))})):d(e)}}}]);