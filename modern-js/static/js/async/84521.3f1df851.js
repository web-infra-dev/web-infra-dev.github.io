(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["84521"],{11222:function(e,n,s){"use strict";s.r(n),s.d(n,{default:function(){return d}});var r,t=s("15169"),o=s("43932"),i=s("9880"),a=s("23169");function c(e){var n=Object.assign({h1:"h1",a:"a",ul:"ul",li:"li",strong:"strong",code:"code",p:"p",h2:"h2",pre:"pre",div:"div"},(0,a.useMDXComponents)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.h1,{id:"serverroutes",children:["server.routes",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#serverroutes",children:"#"})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Type:"})," ",(0,i.jsx)(n.code,{children:"Object"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Default:"})," Server-side routing rules generated based on file conventions, with one route rule generated for each entry, and the entry name is equal to the route path."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"This configuration option only applies to server-side routing and can customize the access route of application entries."}),"\n",(0,i.jsxs)(n.h2,{id:"custom-access-routes",children:["Custom access routes",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#custom-access-routes",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"key"})," of the object is the name of the current application entry, and the value can be a ",(0,i.jsx)(n.code,{children:"string | Array<string>"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["When the value type is ",(0,i.jsx)(n.code,{children:"string"}),", the current value represents the route path for accessing the entry."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"export default defineConfig({\n  server: {\n    routes: {\n      // Default route is /entryName1, customized to /p/test1\n      entryName1: '/p/test1'\n      // Supports dynamic server-side routing configuration\n      entryName2: '/detail/:id'\n    }\n  }\n});\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Multiple access routes can also be set for the entry through ",(0,i.jsx)(n.code,{children:"Array<string>"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"export default defineConfig({\n  server: {\n    routes: {\n      'page-a': [`/a`, '/b'],\n    },\n  },\n});\n"})}),"\n",(0,i.jsxs)(n.p,{children:["At this time, the ",(0,i.jsx)(n.code,{children:"page-a"})," entry can be accessed through both the ",(0,i.jsx)(n.code,{children:"/a"})," and ",(0,i.jsx)(n.code,{children:"/b"})," routes."]}),"\n",(0,i.jsxs)(n.p,{children:["After executing the ",(0,i.jsx)(n.code,{children:"dev"})," command, you can view two route records for the ",(0,i.jsx)(n.code,{children:"page-a"})," entry in ",(0,i.jsx)(n.code,{children:"dist/route.json"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "routes": [\n    {\n      "urlPath": "/a",\n      "entryName": "page-a",\n      "entryPath": "html/page-a/index.html",\n      "isSPA": true,\n      "isSSR": false\n    },\n    {\n      "urlPath": "/b",\n      "entryName": "page-a",\n      "entryPath": "html/page-a/index.html",\n      "isSPA": true,\n      "isSSR": false\n    }\n  ]\n}\n'})}),"\n",(0,i.jsxs)(n.h2,{id:"custom-response-headers",children:["Custom response headers",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#custom-response-headers",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["Response headers can be set by configuring the ",(0,i.jsx)(n.code,{children:"resHeaders"})," of the entry:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"export default defineConfig({\n  server: {\n    routes: {\n      'page-a': {\n        route: ['/a', '/b'],\n        resHeaders: {\n          'x-modern-test': '1',\n        },\n      },\n    },\n  },\n});\n"})}),"\n",(0,i.jsxs)(n.div,{className:"rspress-directive note",children:[(0,i.jsx)(n.div,{className:"rspress-directive-title",children:"NOTE"}),(0,i.jsxs)(n.div,{className:"rspress-directive-content",children:[(0,i.jsxs)(n.p,{children:["This configuration takes effect in both the production and development environments, and different response headers can be set according to the NODE_ENV to distinguish between environments. However, if you only need to set response headers in the development environment, it is recommended to use ",(0,i.jsx)(n.code,{children:"tools.devServer.headers"}),"."]}),"\n"]})]})]})}(r=globalThis).__RSPRESS_PAGE_META||(r.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["en%2Fconfigure%2Fapp%2Fserver%2Froutes.mdx"]={toc:[{text:"Custom access routes",id:"custom-access-routes",depth:2},{text:"Custom response headers",id:"custom-response-headers",depth:2}],title:"server.routes",frontmatter:{sidebar_label:"routes"}};var d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,a.useMDXComponents)(),e.components).wrapper;return n?(0,i.jsx)(n,(0,o._)((0,t._)({},e),{children:(0,i.jsx)(c,(0,t._)({},e))})):c(e)}}}]);