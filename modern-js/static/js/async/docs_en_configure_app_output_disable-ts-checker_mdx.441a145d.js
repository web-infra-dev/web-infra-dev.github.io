(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_en_configure_app_output_disable-ts-checker_mdx"],{26574:function(e,n,i){"use strict";i.r(n),i.d(n,{default:function(){return d}});var s,r=i("15169"),t=i("43932"),c=i("9880"),o=i("23169");function l(e){var n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",h3:"h3",a:"a",pre:"pre",div:"div"},(0,o.useMDXComponents)(),e.components);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:"Type:"})," ",(0,c.jsx)(n.code,{children:"boolean"})]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:"Default:"})," ",(0,c.jsx)(n.code,{children:"false"})]}),"\n"]}),"\n",(0,c.jsx)(n.p,{children:"Whether to disable TypeScript type checker during compilation."}),"\n",(0,c.jsxs)(n.p,{children:["By default, Builder will run the TypeScript type checker in a separate process during the build process. Its checking logic is consistent with TypeScript's native ",(0,c.jsx)(n.code,{children:"tsc"})," command. You can use ",(0,c.jsx)(n.code,{children:"tsconfig.json"})," or Builder's ",(0,c.jsx)(n.code,{children:"tools.tsChecker"})," config to customize the checking behavior."]}),"\n",(0,c.jsxs)(n.h3,{id:"blocking-compilation",children:["Blocking Compilation",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#blocking-compilation",children:"#"})]}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:"In development build, type errors will not block the compilation process."}),"\n",(0,c.jsx)(n.li,{children:"In production build, type errors will cause the build to fail to ensure the stability of the production code."}),"\n"]}),"\n",(0,c.jsxs)(n.h3,{id:"example",children:["Example",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#example",children:"#"})]}),"\n",(0,c.jsx)(n.p,{children:"Disable TypeScript type checker:"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-js",children:"export default {\n  output: {\n    disableTsChecker: true,\n  },\n};\n"})}),"\n",(0,c.jsx)(n.p,{children:"Disable type checker in development:"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-js",children:"export default {\n  output: {\n    disableTsChecker: process.env.NODE_ENV === 'development',\n  },\n};\n"})}),"\n",(0,c.jsx)(n.p,{children:"Disable type checker in production:"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-js",children:"export default {\n  output: {\n    disableTsChecker: process.env.NODE_ENV === 'production',\n  },\n};\n"})}),"\n",(0,c.jsxs)(n.div,{className:"modern-directive tip",children:[(0,c.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,c.jsx)(n.div,{className:"modern-directive-content",children:(0,c.jsx)(n.p,{children:"It is not recommended to disable type checker in production, which will reduce the stability of the production code, please use it with caution."})})]})]})}(s=globalThis).__RSPRESS_PAGE_META||(s.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["..%2F..%2Fbuilder-doc%2Fdocs%2Fen%2Fconfig%2Foutput%2FdisableTsChecker.md"]={toc:[{text:"Blocking Compilation",id:"blocking-compilation",depth:3},{text:"Example",id:"example",depth:3}],title:"",frontmatter:{}};var d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,o.useMDXComponents)(),e.components).wrapper;return n?(0,c.jsx)(n,(0,t._)((0,r._)({},e),{children:(0,c.jsx)(l,(0,r._)({},e))})):l(e)}},81915:function(e,n,i){"use strict";i.r(n),i.d(n,{default:function(){return a}});var s,r=i("15169"),t=i("43932"),c=i("9880"),o=i("23169"),l=i("26574");function d(e){var n=Object.assign({h1:"h1",a:"a",div:"div",p:"p"},(0,o.useMDXComponents)(),e.components);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(n.h1,{id:"outputdisabletschecker",children:["output.disableTsChecker",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#outputdisabletschecker",children:"#"})]}),"\n",(0,c.jsxs)(n.div,{className:"modern-directive tip",children:[(0,c.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,c.jsx)(n.div,{className:"modern-directive-content",children:(0,c.jsxs)(n.p,{children:["This config is provided by Modern.js Builder, more detail can see ",(0,c.jsx)(n.a,{href:"https://modernjs.dev/builder/en/api/config-output.html#outputdisabletschecker",target:"_blank",rel:"noopener noreferrer",children:"output.disableTsChecker"}),".\n"]})})]}),"\n","\n",(0,c.jsx)(l.default,{})]})}(s=globalThis).__RSPRESS_PAGE_META||(s.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["en%2Fconfigure%2Fapp%2Foutput%2Fdisable-ts-checker.mdx"]={toc:[],title:"output.disableTsChecker",frontmatter:{sidebar_label:"disableTsChecker"}};var a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,o.useMDXComponents)(),e.components).wrapper;return n?(0,c.jsx)(n,(0,t._)((0,r._)({},e),{children:(0,c.jsx)(d,(0,r._)({},e))})):d(e)}}}]);