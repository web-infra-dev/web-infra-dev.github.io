/*! For license information please see 9742.7820de2b.js.LICENSE.txt */
(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["9742"],{72510:function(e,n,s){"use strict";s.r(n),s.d(n,{default:function(){return l}});var i=s("9880"),t=s("23169");function c(e){let n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",h3:"h3",a:"a",pre:"pre",div:"div"},(0,t.useMDXComponents)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Type:"})," ",(0,i.jsx)(n.code,{children:"boolean"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Default:"})," ",(0,i.jsx)(n.code,{children:"false"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Whether to disable TypeScript type checker during compilation."}),"\n",(0,i.jsxs)(n.p,{children:["By default, Builder will run the TypeScript type checker in a separate process during the build process. Its checking logic is consistent with TypeScript's native ",(0,i.jsx)(n.code,{children:"tsc"})," command. You can use ",(0,i.jsx)(n.code,{children:"tsconfig.json"})," or Builder's ",(0,i.jsx)(n.code,{children:"tools.tsChecker"})," config to customize the checking behavior."]}),"\n",(0,i.jsxs)(n.h3,{id:"blocking-compilation",children:["Blocking Compilation",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#blocking-compilation",children:"#"})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"In development build, type errors will not block the compilation process."}),"\n",(0,i.jsx)(n.li,{children:"In production build, type errors will cause the build to fail to ensure the stability of the production code."}),"\n"]}),"\n",(0,i.jsxs)(n.h3,{id:"example",children:["Example",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#example",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"Disable TypeScript type checker:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"export default {\n  output: {\n    disableTsChecker: true,\n  },\n};\n"})}),"\n",(0,i.jsx)(n.p,{children:"Disable type checker in development:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"export default {\n  output: {\n    disableTsChecker: process.env.NODE_ENV === 'development',\n  },\n};\n"})}),"\n",(0,i.jsx)(n.p,{children:"Disable type checker in production:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"export default {\n  output: {\n    disableTsChecker: process.env.NODE_ENV === 'production',\n  },\n};\n"})}),"\n",(0,i.jsxs)(n.div,{className:"rspress-directive tip",children:[(0,i.jsx)(n.div,{className:"rspress-directive-title",children:"TIP"}),(0,i.jsx)(n.div,{className:"rspress-directive-content",children:(0,i.jsx)(n.p,{children:"It is not recommended to disable type checker in production, which will reduce the stability of the production code, please use it with caution."})})]})]})}function r(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,t.useMDXComponents)(),e.components);return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}var l=r;r.__RSPRESS_PAGE_META={},r.__RSPRESS_PAGE_META["..%2F..%2Fbuilder-doc%2Fdocs%2Fen%2Fconfig%2Foutput%2FdisableTsChecker.md"]={toc:[{text:"Blocking Compilation",id:"blocking-compilation",depth:3},{text:"Example",id:"example",depth:3}],title:"",frontmatter:{}}},73709:function(e,n,s){"use strict";s.r(n),s.d(n,{default:function(){return o}});var i=s("9880"),t=s("23169"),c=s("72510");function r(e){let n=Object.assign({h1:"h1",a:"a"},(0,t.useMDXComponents)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.h1,{id:"outputdisabletschecker",children:["output.disableTsChecker",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#outputdisabletschecker",children:"#"})]}),"\n","\n",(0,i.jsx)(c.default,{})]})}function l(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,t.useMDXComponents)(),e.components);return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(r,{...e})}):r(e)}var o=l;l.__RSPRESS_PAGE_META={},l.__RSPRESS_PAGE_META["en%2Fconfigure%2Fapp%2Foutput%2Fdisable-ts-checker.mdx"]={toc:[],title:"output.disableTsChecker",frontmatter:{sidebar_label:"disableTsChecker"}}}}]);