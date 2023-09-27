(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["90789"],{82067:function(e,n,s){"use strict";s.r(n),s.d(n,{default:function(){return d}});var r,l=s("10310"),t=s("81904"),a=s("98638"),i=s("21968");function o(e){let n=Object.assign({h1:"h1",a:"a",ul:"ul",li:"li",strong:"strong",code:"code",p:"p",pre:"pre"},(0,i.useMDXComponents)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.h1,{id:"serverbaseurl",children:["server.baseUrl",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#serverbaseurl",children:"#"})]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Type:"})," ",(0,a.jsx)(n.code,{children:"string | string[]"})]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Default:"})," ",(0,a.jsx)(n.code,{children:"undefined"})]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Uniformly set the prefix of server-side routes (commonly used in situations where multiple applications share the same domain name to distinguish traffic)."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"export default defineConfig({\n  server: {\n    // All generated routes will automatically have the prefix `/base`\n    // Generated server-side route file path: dist/route.json\n    baseUrl: '/base'\n\n    // Multiple baseUrl\n    baseUrl: ['/base-new', '/base-old']\n  }\n})\n"})}),"\n",(0,a.jsxs)(n.p,{children:["After running ",(0,a.jsx)(n.code,{children:"dev"}),", you will see that the route access will have the corresponding prefix added:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"  > Local:    http://localhost:8080/base/\n  > Network:  http://192.168.0.1:8080/base/\n"})})]})}(r=globalThis).__RSPRESS_PAGE_META||(r.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["en%2Fconfigure%2Fapp%2Fserver%2Fbase-url.mdx"]={toc:[],title:"server.baseUrl",frontmatter:{sidebar_label:"baseUrl"}};var d=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,i.useMDXComponents)(),e.components);return n?(0,a.jsx)(n,(0,t._)((0,l._)({},e),{children:(0,a.jsx)(o,(0,l._)({},e))})):o(e)}}}]);