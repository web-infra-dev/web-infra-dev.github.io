/*! For license information please see 37101.d2555225.js.LICENSE.txt */
(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["37101"],{10948:function(e,i,n){"use strict";n.r(i);var s=n("39980"),c=n("9580");function r(e){let i=Object.assign({h1:"h1",a:"a",ul:"ul",li:"li",strong:"strong",code:"code",p:"p",h3:"h3",pre:"pre",div:"div"},(0,c.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(i.h1,{id:"outputdisabletschecker",children:["output.disableTsChecker",(0,s.jsx)(i.a,{className:"header-anchor","aria-hidden":"true",href:"#outputdisabletschecker",children:"#"})]}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Type:"})," ",(0,s.jsx)(i.code,{children:"boolean"})]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Default:"})," ",(0,s.jsx)(i.code,{children:"false"})]}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"Whether to disable TypeScript type checker during compilation."}),"\n",(0,s.jsxs)(i.p,{children:["By default, Builder will run the TypeScript type checker in a separate process during the build process. Its checking logic is consistent with TypeScript's native ",(0,s.jsx)(i.code,{children:"tsc"})," command. You can use ",(0,s.jsx)(i.code,{children:"tsconfig.json"})," or Builder's ",(0,s.jsx)(i.code,{children:"tools.tsChecker"})," config to customize the checking behavior."]}),"\n",(0,s.jsxs)(i.h3,{id:"blocking-compilation",children:["Blocking Compilation",(0,s.jsx)(i.a,{className:"header-anchor","aria-hidden":"true",href:"#blocking-compilation",children:"#"})]}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"In development build, type errors will not block the compilation process."}),"\n",(0,s.jsx)(i.li,{children:"In production build, type errors will cause the build to fail to ensure the stability of the production code."}),"\n"]}),"\n",(0,s.jsxs)(i.h3,{id:"example",children:["Example",(0,s.jsx)(i.a,{className:"header-anchor","aria-hidden":"true",href:"#example",children:"#"})]}),"\n",(0,s.jsx)(i.p,{children:"Disable TypeScript type checker:"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-js",children:"export default {\n  output: {\n    disableTsChecker: true,\n  },\n};\n"})}),"\n",(0,s.jsx)(i.p,{children:"Disable type checker in development:"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-js",children:"export default {\n  output: {\n    disableTsChecker: process.env.NODE_ENV === 'development',\n  },\n};\n"})}),"\n",(0,s.jsx)(i.p,{children:"Disable type checker in production:"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-js",children:"export default {\n  output: {\n    disableTsChecker: process.env.NODE_ENV === 'production',\n  },\n};\n"})}),"\n",(0,s.jsxs)(i.div,{className:"rspress-directive tip",children:[(0,s.jsx)(i.div,{className:"rspress-directive-title",children:"TIP"}),(0,s.jsx)(i.div,{className:"rspress-directive-content",children:(0,s.jsx)(i.p,{children:"It is not recommended to disable type checker in production, which will reduce the stability of the production code, please use it with caution."})})]})]})}function t(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:i}=Object.assign({},(0,c.ah)(),e.components);return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(r,{...e})}):r(e)}i.default=t,t.__RSPRESS_PAGE_META={},t.__RSPRESS_PAGE_META["en%2Fconfigure%2Fapp%2Foutput%2Fdisable-ts-checker.mdx"]={toc:[{text:"Blocking Compilation",id:"blocking-compilation",depth:3},{text:"Example",id:"example",depth:3}],title:"output.disableTsChecker",frontmatter:{sidebar_label:"disableTsChecker"}}}}]);