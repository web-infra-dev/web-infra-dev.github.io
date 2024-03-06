/*! For license information please see 40880.4519e69c.js.LICENSE.txt */
(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["40880"],{69650:function(e,n,r){"use strict";r.r(n);var s=r("39980"),t=r("96954");function i(e){let n=Object.assign({h1:"h1",a:"a",ul:"ul",li:"li",p:"p",strong:"strong",code:"code",h3:"h3",pre:"pre",div:"div"},(0,t.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h1,{id:"outputexternals",children:["output.externals",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#outputexternals",children:"#"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Type:"})," ",(0,s.jsx)(n.code,{children:"string | object | function | RegExp"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Default:"})," ",(0,s.jsx)(n.code,{children:"undefined"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["At build time, prevent some ",(0,s.jsx)(n.code,{children:"import"})," dependencies from being packed into bundles in your code, and instead fetch them externally at runtime."]}),"\n",(0,s.jsxs)(n.p,{children:["For more information, please see: ",(0,s.jsx)(n.a,{href:"https://webpack.js.org/configuration/externals/",target:"_blank",rel:"noopener noreferrer",children:"webpack Externals"})]}),"\n",(0,s.jsxs)(n.h3,{id:"example",children:["Example",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#example",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["Exclude the ",(0,s.jsx)(n.code,{children:"react-dom"})," dependency from the build product. To get this module at runtime, the value of ",(0,s.jsx)(n.code,{children:"react-dom"})," will globally retrieve the ",(0,s.jsx)(n.code,{children:"ReactDOM"})," variable."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"export default {\n  output: {\n    externals: {\n      'react-dom': 'ReactDOM',\n    },\n  },\n};\n"})}),"\n",(0,s.jsxs)(n.div,{className:"rspress-directive tip",children:[(0,s.jsx)(n.div,{className:"rspress-directive-title",children:"TIP"}),(0,s.jsx)(n.div,{className:"rspress-directive-content",children:(0,s.jsx)(n.p,{children:"When the build target is Web Worker, externals will not take effect. This is because the Worker environment can not access global variables."})})]})]})}function l(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,t.useMDXComponents)(),e.components);return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(i,{...e})}):i(e)}n.default=l,l.__RSPRESS_PAGE_META={},l.__RSPRESS_PAGE_META["en%2Fconfigure%2Fapp%2Foutput%2Fexternals.mdx"]={toc:[{text:"Example",id:"example",depth:3}],title:"output.externals",frontmatter:{sidebar_label:"externals"}}}}]);