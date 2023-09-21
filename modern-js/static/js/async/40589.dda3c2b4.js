(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["40589"],{19224:function(e,n,s){"use strict";s.r(n),s.d(n,{default:function(){return t}});var r,c=s("15169"),o=s("43932"),i=s("9880"),d=s("23169");function l(e){var n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",h3:"h3",a:"a",pre:"pre",img:"img"},(0,d.useMDXComponents)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Type:"})," ",(0,i.jsx)(n.code,{children:"Array<string | Regexp> | Function"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Default:"})," ",(0,i.jsx)(n.code,{children:"undefined"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Bundler:"})," ",(0,i.jsx)(n.code,{children:"only support webpack"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Restrict importing paths. After configuring this option, all source files can only import code from the specific paths, and import code from other paths is not allowed."}),"\n",(0,i.jsxs)(n.h3,{id:"example",children:["Example",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#example",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["First, we configure ",(0,i.jsx)(n.code,{children:"moduleScopes"})," to only include the ",(0,i.jsx)(n.code,{children:"src"})," directory:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"export default {\n  source: {\n    moduleScopes: ['./src'],\n  },\n};\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Then we import the ",(0,i.jsx)(n.code,{children:"utils/a"})," module outside the ",(0,i.jsx)(n.code,{children:"src"})," directory in ",(0,i.jsx)(n.code,{children:"src/App.tsx"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"import a from '../utils/a';\n"})}),"\n",(0,i.jsx)(n.p,{children:"After compiling, there will be a reference path error:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/aphqeh7uhohpquloj/modern-js/docs/module-scopes-error.png",alt:"scopes-error"})}),"\n",(0,i.jsxs)(n.p,{children:["If we configure the ",(0,i.jsx)(n.code,{children:"utils"})," directory in ",(0,i.jsx)(n.code,{children:"moduleScopes"}),", the error will disappear."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"export default {\n  source: {\n    moduleScopes: ['./src', './utils'],\n  },\n};\n"})}),"\n",(0,i.jsxs)(n.h3,{id:"array-type",children:["Array Type",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#array-type",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"You can directly set several paths like this:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"export default {\n  source: {\n    moduleScopes: ['./src', './shared', './utils'],\n  },\n};\n"})}),"\n",(0,i.jsxs)(n.h3,{id:"function-type",children:["Function Type",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#function-type",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"moduleScopes"})," also supports setting as a function, which can be modified instead of overriding the default value:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"export default {\n  source: {\n    moduleScopes: scopes => {\n      scopes.push('./shared');\n    },\n  },\n};\n"})})]})}(r=globalThis).__RSPRESS_PAGE_META||(r.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["..%2F..%2Fbuilder-doc%2Fdocs%2Fen%2Fconfig%2Fsource%2FmoduleScopes.md"]={toc:[{text:"Example",id:"example",depth:3},{text:"Array Type",id:"array-type",depth:3},{text:"Function Type",id:"function-type",depth:3}],title:"",frontmatter:{}};var t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,d.useMDXComponents)(),e.components).wrapper;return n?(0,i.jsx)(n,(0,o._)((0,c._)({},e),{children:(0,i.jsx)(l,(0,c._)({},e))})):l(e)}},79669:function(e,n,s){"use strict";s.r(n),s.d(n,{default:function(){return a}});var r,c=s("15169"),o=s("43932"),i=s("9880"),d=s("23169"),l=s("19224");function t(e){var n=Object.assign({h1:"h1",a:"a",div:"div",p:"p"},(0,d.useMDXComponents)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.h1,{id:"sourcemodulescopes",children:["source.moduleScopes",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#sourcemodulescopes",children:"#"})]}),"\n",(0,i.jsxs)(n.div,{className:"modern-directive tip",children:[(0,i.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,i.jsx)(n.div,{className:"modern-directive-content",children:(0,i.jsxs)(n.p,{children:["This config is provided by Modern.js Builder, more detail can see ",(0,i.jsx)(n.a,{href:"https://modernjs.dev/builder/en/api/config-source.html#sourcemodulescopes",target:"_blank",rel:"noopener noreferrer",children:"source.moduleScopes"}),".\n"]})})]}),"\n","\n",(0,i.jsx)(l.default,{})]})}(r=globalThis).__RSPRESS_PAGE_META||(r.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["en%2Fconfigure%2Fapp%2Fsource%2Fmodule-scopes.mdx"]={toc:[],title:"source.moduleScopes",frontmatter:{sidebar_label:"moduleScopes"}};var a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,d.useMDXComponents)(),e.components).wrapper;return n?(0,i.jsx)(n,(0,o._)((0,c._)({},e),{children:(0,i.jsx)(t,(0,c._)({},e))})):t(e)}}}]);