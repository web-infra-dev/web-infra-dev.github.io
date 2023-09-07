(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_en_configure_app_bff_prefix_mdx"],{6959:function(e,n,s){"use strict";s.r(n),s.d(n,{default:function(){return a}});var r,i=s("15169"),o=s("43932"),c=s("9880"),l=s("23169"),d=s("89295");function t(e){var n=Object.assign({h1:"h1",a:"a",ul:"ul",li:"li",strong:"strong",code:"code",p:"p",pre:"pre"},(0,l.useMDXComponents)(),e.components);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(n.h1,{id:"bffprefix",children:["bff.prefix",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#bffprefix",children:"#"})]}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:"Type:"})," ",(0,c.jsx)(n.code,{children:"string"})]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:"Default:"})," ",(0,c.jsx)(n.code,{children:"/api"})]}),"\n"]}),"\n","\n",(0,c.jsx)(d.default,{}),"\n",(0,c.jsxs)(n.p,{children:["By default, the prefix for accessing routes in the BFF API directory is ",(0,c.jsx)(n.code,{children:"/api"}),", as shown in the following directory structure:"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"api\n\u2514\u2500\u2500 hello.ts\n"})}),"\n",(0,c.jsxs)(n.p,{children:["The route corresponding to ",(0,c.jsx)(n.code,{children:"api/hello.ts"})," when accessed is ",(0,c.jsx)(n.code,{children:"localhost:8080/api/hello"}),"."]}),"\n",(0,c.jsx)(n.p,{children:"This configuration option can modify the default route prefix:"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"export default defineConfig({\n  bff: {\n    prefix: '/api-demo',\n  },\n});\n"})}),"\n",(0,c.jsxs)(n.p,{children:["The corresponding route for ",(0,c.jsx)(n.code,{children:"api/hello.ts"})," when accessed is ",(0,c.jsx)(n.code,{children:"localhost:8080/api-demo/hello"}),"."]})]})}(r=globalThis).__RSPRESS_PAGE_META||(r.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["en%2Fconfigure%2Fapp%2Fbff%2Fprefix.mdx"]={toc:[],title:"bff.prefix",frontmatter:{sidebar_label:"prefix"}};var a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,l.useMDXComponents)(),e.components).wrapper;return n?(0,c.jsx)(n,(0,o._)((0,i._)({},e),{children:(0,c.jsx)(t,(0,i._)({},e))})):t(e)}}}]);