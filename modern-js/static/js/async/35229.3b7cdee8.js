/*! For license information please see 35229.3b7cdee8.js.LICENSE.txt */
(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["35229"],{17296:function(e,n,i){"use strict";i.r(n);var s=i("39980"),r=i("96954");function l(e){let n=Object.assign({h1:"h1",a:"a",p:"p",ul:"ul",li:"li",strong:"strong",code:"code",div:"div",h3:"h3",pre:"pre"},(0,r.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h1,{id:"sourcedefine",children:["source.define",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#sourcedefine",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:";"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Type:"})," ",(0,s.jsx)(n.code,{children:"Record<string, unknown>"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Default:"})," ",(0,s.jsx)(n.code,{children:"{}"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Replaces variables in your code with other values or expressions at compile time. This can be useful for allowing different behavior between development builds and production builds."}),"\n",(0,s.jsxs)(n.p,{children:["Each key passed into options is an identifier or multiple identifiers joined with ",(0,s.jsx)(n.code,{children:"."}),"."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"If the value is a string it will be used as a code fragment."}),"\n",(0,s.jsx)(n.li,{children:"If the value isn't a string, it will be stringified (including functions)."}),"\n",(0,s.jsx)(n.li,{children:"If the value is an object all keys are defined the same way."}),"\n",(0,s.jsx)(n.li,{children:"If you prefix typeof to the key, it's only defined for typeof calls."}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["For more information please visit ",(0,s.jsx)(n.a,{href:"https://webpack.js.org/plugins/define-plugin/",target:"_blank",rel:"noopener noreferrer",children:"webpack - DefinePlugin"}),"."]}),"\n",(0,s.jsxs)(n.div,{className:"rspress-directive tip",children:[(0,s.jsx)(n.div,{className:"rspress-directive-title",children:"TIP"}),(0,s.jsx)(n.div,{className:"rspress-directive-content",children:(0,s.jsxs)(n.p,{children:["When using Rspack as the bundler, the supported types can be found in ",(0,s.jsx)(n.a,{href:"https://www.rspack.dev/config/builtins.html#builtinsdefine",target:"_blank",rel:"noopener noreferrer",children:"Rspack.builtins.define"}),".\n"]})})]}),"\n",(0,s.jsxs)(n.h3,{id:"example",children:["Example",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#example",children:"#"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"export default {\n  source: {\n    define: {\n      PRODUCTION: JSON.stringify(true),\n      VERSION: JSON.stringify('5fa3b9'),\n      BROWSER_SUPPORTS_HTML5: true,\n      TWO: '1 + 1',\n      'typeof window': JSON.stringify('object'),\n      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),\n      'import.meta': { test: undefined },\n    },\n  },\n};\n"})}),"\n",(0,s.jsx)(n.p,{children:"Expressions will be replaced with the corresponding code fragments:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"const foo = TWO;\n\n// \u2B07\uFE0F Turn into being...\nconst foo = 1 + 1;\n"})})]})}function t(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,r.useMDXComponents)(),e.components);return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}n.default=t,t.__RSPRESS_PAGE_META={},t.__RSPRESS_PAGE_META["en%2Fconfigure%2Fapp%2Fsource%2Fdefine.mdx"]={toc:[{text:"Example",id:"example",depth:3}],title:"source.define",frontmatter:{sidebar_label:"define"}}}}]);