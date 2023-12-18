/*! For license information please see 8773.02c26d51.js.LICENSE.txt */
(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["8773"],{70515:function(e,n,s){"use strict";s.r(n),s.d(n,{default:function(){return o}});var r=s("9880"),i=s("23169");function t(e){let n=Object.assign({div:"div",p:"p",a:"a"},(0,i.useMDXComponents)(),e.components);return(0,r.jsxs)(n.div,{className:"rspress-directive caution",children:[(0,r.jsx)(n.div,{className:"rspress-directive-title",children:"CAUTION"}),(0,r.jsx)(n.div,{className:"rspress-directive-content",children:(0,r.jsxs)(n.p,{children:["Please use the ",(0,r.jsx)(n.a,{href:"/apis/app/commands#modern-new",children:"new command"})," in the root directory of the current project to enable BFF functionality first.\n"]})})]})}function c(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,i.useMDXComponents)(),e.components);return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(t,{...e})}):t(e)}var o=c;c.__RSPRESS_PAGE_META={},c.__RSPRESS_PAGE_META["en%2Fcomponents%2Fenable-bff-caution.mdx"]={toc:[],title:"",frontmatter:{}}},33295:function(e,n,s){"use strict";s.r(n),s.d(n,{default:function(){return l}});var r=s("9880"),i=s("23169"),t=s("70515");function c(e){let n=Object.assign({h1:"h1",a:"a",ul:"ul",li:"li",strong:"strong",code:"code",p:"p",pre:"pre"},(0,i.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"bffprefix",children:["bff.prefix",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#bffprefix",children:"#"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Type:"})," ",(0,r.jsx)(n.code,{children:"string"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Default:"})," ",(0,r.jsx)(n.code,{children:"/api"})]}),"\n"]}),"\n","\n",(0,r.jsx)(t.default,{}),"\n",(0,r.jsxs)(n.p,{children:["By default, the prefix for accessing routes in the BFF API directory is ",(0,r.jsx)(n.code,{children:"/api"}),", as shown in the following directory structure:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"api\n\u2514\u2500\u2500 hello.ts\n"})}),"\n",(0,r.jsxs)(n.p,{children:["The route corresponding to ",(0,r.jsx)(n.code,{children:"api/hello.ts"})," when accessed is ",(0,r.jsx)(n.code,{children:"localhost:8080/api/hello"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"This configuration option can modify the default route prefix:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"export default defineConfig({\n  bff: {\n    prefix: '/api-demo',\n  },\n});\n"})}),"\n",(0,r.jsxs)(n.p,{children:["The corresponding route for ",(0,r.jsx)(n.code,{children:"api/hello.ts"})," when accessed is ",(0,r.jsx)(n.code,{children:"localhost:8080/api-demo/hello"}),"."]})]})}function o(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,i.useMDXComponents)(),e.components);return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}var l=o;o.__RSPRESS_PAGE_META={},o.__RSPRESS_PAGE_META["en%2Fconfigure%2Fapp%2Fbff%2Fprefix.mdx"]={toc:[],title:"bff.prefix",frontmatter:{sidebar_label:"prefix"}}}}]);