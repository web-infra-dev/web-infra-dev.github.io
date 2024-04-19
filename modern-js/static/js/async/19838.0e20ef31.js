/*! For license information please see 19838.0e20ef31.js.LICENSE.txt */
(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["19838"],{13630:function(e,s,n){"use strict";n.r(s);var r=n("39980"),c=n("9580");function o(e){let s=Object.assign({h1:"h1",a:"a",ul:"ul",li:"li",strong:"strong",code:"code",p:"p",h3:"h3",pre:"pre",img:"img"},(0,c.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.h1,{id:"sourcemodulescopes",children:["source.moduleScopes",(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#sourcemodulescopes",children:"#"})]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Type:"})," ",(0,r.jsx)(s.code,{children:"Array<string | Regexp> | Function"})]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Default:"})," ",(0,r.jsx)(s.code,{children:"undefined"})]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Bundler:"})," ",(0,r.jsx)(s.code,{children:"only support webpack"})]}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:"Restrict importing paths. After configuring this option, all source files can only import code from the specific paths, and import code from other paths is not allowed."}),"\n",(0,r.jsxs)(s.h3,{id:"example",children:["Example",(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#example",children:"#"})]}),"\n",(0,r.jsxs)(s.p,{children:["First, we configure ",(0,r.jsx)(s.code,{children:"moduleScopes"})," to only include the ",(0,r.jsx)(s.code,{children:"src"})," directory:"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-js",children:"export default {\n  source: {\n    moduleScopes: ['./src'],\n  },\n};\n"})}),"\n",(0,r.jsxs)(s.p,{children:["Then we import the ",(0,r.jsx)(s.code,{children:"utils/a"})," module outside the ",(0,r.jsx)(s.code,{children:"src"})," directory in ",(0,r.jsx)(s.code,{children:"src/App.tsx"}),":"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-js",children:"import a from '../utils/a';\n"})}),"\n",(0,r.jsx)(s.p,{children:"After compiling, there will be a reference path error:"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/aphqeh7uhohpquloj/modern-js/docs/module-scopes-error.png",alt:"scopes-error"})}),"\n",(0,r.jsxs)(s.p,{children:["If we configure the ",(0,r.jsx)(s.code,{children:"utils"})," directory in ",(0,r.jsx)(s.code,{children:"moduleScopes"}),", the error will disappear."]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-js",children:"export default {\n  source: {\n    moduleScopes: ['./src', './utils'],\n  },\n};\n"})}),"\n",(0,r.jsxs)(s.h3,{id:"array-type",children:["Array Type",(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#array-type",children:"#"})]}),"\n",(0,r.jsx)(s.p,{children:"You can directly set several paths like this:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-js",children:"export default {\n  source: {\n    moduleScopes: ['./src', './shared', './utils'],\n  },\n};\n"})}),"\n",(0,r.jsxs)(s.h3,{id:"function-type",children:["Function Type",(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#function-type",children:"#"})]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"moduleScopes"})," also supports setting as a function, which can be modified instead of overriding the default value:"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-js",children:"export default {\n  source: {\n    moduleScopes: scopes => {\n      scopes.push('./shared');\n    },\n  },\n};\n"})})]})}function d(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:s}=Object.assign({},(0,c.ah)(),e.components);return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}s.default=d,d.__RSPRESS_PAGE_META={},d.__RSPRESS_PAGE_META["en%2Fconfigure%2Fapp%2Fsource%2Fmodule-scopes.mdx"]={toc:[{text:"Example",id:"example",depth:3},{text:"Array Type",id:"array-type",depth:3},{text:"Function Type",id:"function-type",depth:3}],title:"source.moduleScopes",frontmatter:{sidebar_label:"moduleScopes"}}}}]);