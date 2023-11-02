(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["9260"],{82762:function(e,n,i){"use strict";i.r(n),i.d(n,{default:function(){return d}});var r=i("9880"),s=i("23169");function o(e){let n=Object.assign({p:"p",a:"a",strong:"strong"},(0,s.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"https://esbuild.github.io/",target:"_blank",rel:"noopener noreferrer",children:"esbuild"})," is a front-end build tool based on Golang. It has the functions of bundling, compiling and minimizing JavaScript code. Compared with traditional tools, the performance is significantly improved. When minimizing code, compared to webpack's built-in terser minimizer, esbuild has dozens of times better performance."]}),"\n",(0,r.jsxs)(n.p,{children:["Modern.js Builder provides esbuild plugin that allow you to use esbuild instead of babel-loader, ts-loader and terser for transformation and minification process. When you enable esbuild in a large project, ",(0,r.jsx)(n.strong,{children:"it can greatly reduce the time required for code compilation and compression, while effectively avoiding OOM (heap out of memory) problems"}),"."]})]})}function t(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,s.useMDXComponents)(),e.components);return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}var d=t;t.__RSPRESS_PAGE_META={},t.__RSPRESS_PAGE_META["..%2F..%2Fbuilder-doc%2Fdocs%2Fen%2Fshared%2Fesbuild.md"]={toc:[],title:""}},48719:function(e,n,i){"use strict";i.r(n),i.d(n,{default:function(){return l},frontmatter:function(){return a}});var r=i("9880"),s=i("23169"),o=i("82762");function t(e){let n=Object.assign({h1:"h1",a:"a",ul:"ul",li:"li",strong:"strong",code:"code",h2:"h2",div:"div",p:"p",pre:"pre"},(0,s.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"toolsesbuild",children:["tools.esbuild",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#toolsesbuild",children:"#"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Type:"})," ",(0,r.jsx)(n.code,{children:"Object"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Default:"})," ",(0,r.jsx)(n.code,{children:"undefined"})]}),"\n"]}),"\n",(0,r.jsxs)(n.h2,{id:"introduction",children:["Introduction",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#introduction",children:"#"})]}),"\n","\n",(0,r.jsx)(o.default,{}),"\n",(0,r.jsxs)(n.div,{className:"rspress-directive tip",children:[(0,r.jsx)(n.div,{className:"rspress-directive-title",children:"Recommend using SWC"}),(0,r.jsxs)(n.div,{className:"rspress-directive-content",children:[(0,r.jsx)(n.p,{children:"We recommend using SWC to transform and minify code rather than esbuild, because SWC supports more syntaxes, provides better code compression, and the compiled code has better compatibility."}),"\n",(0,r.jsxs)(n.p,{children:["Therefore, we recommend that you use SWC instead of esbuild, please refer to ",(0,r.jsx)(n.a,{href:"/configure/app/tools/swc",children:"tools.swc"})," for usage."]}),"\n"]})]}),"\n",(0,r.jsxs)(n.h2,{id:"configuration",children:["Configuration",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#configuration",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["You can set the esbuild compilation behavior through the ",(0,r.jsx)(n.code,{children:"tools.esbuild"})," config."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",meta:'title="modern.config.ts"',children:"import { defineConfig } from '@modern-js/app-tools';\n\nexport default defineConfig({\n  tools: {\n    esbuild: {\n      loader: {\n        target: 'chrome61',\n      },\n      minimize: {\n        target: 'chrome61',\n      },\n    },\n  },\n});\n"})}),"\n",(0,r.jsxs)(n.p,{children:["For config details, please refer to ",(0,r.jsx)(n.a,{href:"https://modernjs.dev/builder/en/plugins/plugin-esbuild.html#config",target:"_blank",rel:"noopener noreferrer",children:"Modern.js Builder - Esbuild Plugin Configuration"}),"."]})]})}function d(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,s.useMDXComponents)(),e.components);return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(t,{...e})}):t(e)}var l=d;d.__RSPRESS_PAGE_META={},d.__RSPRESS_PAGE_META["en%2Fconfigure%2Fapp%2Ftools%2Fesbuild.mdx"]={toc:[{text:"Introduction",id:"introduction",depth:2},{text:"Configuration",id:"configuration",depth:2}],title:"tools.esbuild"};let a={sidebar_label:"esbuild"}}}]);