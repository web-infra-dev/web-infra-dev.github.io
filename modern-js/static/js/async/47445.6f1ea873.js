/*! For license information please see 47445.6f1ea873.js.LICENSE.txt */
(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["47445"],{25349:function(e,n,s){"use strict";s.r(n);var r=s("39980"),i=s("96954");function a(e){let n=Object.assign({h1:"h1",a:"a",ul:"ul",li:"li",strong:"strong",code:"code",div:"div",p:"p",h2:"h2",pre:"pre",h3:"h3"},(0,i.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"runtimemasterapp",children:["runtime.masterApp",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#runtimemasterapp",children:"#"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"\u7C7B\u578B\uFF1A"})," ",(0,r.jsx)(n.code,{children:"Object"})]}),"\n"]}),"\n",(0,r.jsxs)(n.div,{className:"rspress-directive info",children:[(0,r.jsx)(n.div,{className:"rspress-directive-title",children:"INFO"}),(0,r.jsxs)(n.div,{className:"rspress-directive-content",children:[(0,r.jsxs)(n.p,{children:["\u9700\u8981\u5148\u901A\u8FC7 ",(0,r.jsx)(n.code,{children:"pnpm run new"})," \u542F\u7528\u300C\u5FAE\u524D\u7AEF\u300D \u529F\u80FD\u3002"]}),"\n"]})]}),"\n",(0,r.jsxs)(n.h2,{id:"\u793A\u4F8B",children:["\u793A\u4F8B",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u793A\u4F8B",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:";\n;"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",meta:'title="modern.config.ts"',children:"import { appTools, defineConfig } from '@modern-js/app-tools';\nimport { garfishPlugin } from '@modern-js/plugin-garfish';\n\nexport default defineConfig({\n  runtime: {\n    router: true,\n    masterApp: {\n      apps: [{\n        name: 'Table',\n        entry: 'http://localhost:8081',\n        // activeWhen: '/table'\n      }, {\n        name: 'Dashboard',\n        entry: 'http://localhost:8082'\n        // activeWhen: '/dashboard'\n      }]\n    },\n  },\n  plugins: [appTools(), garfishPlugin()],\n});\n\n"})}),"\n",(0,r.jsxs)(n.h2,{id:"manifest",children:["manifest",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#manifest",children:"#"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"interface Manifest {\n  getAppList?: () => Array<AppInfo>;\n}\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"getapplist",children:["getAppList?",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#getapplist",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["\u901A\u8FC7 ",(0,r.jsx)(n.code,{children:"getAppList"})," \u914D\u7F6E\uFF0C\u53EF\u4EE5\u81EA\u5B9A\u4E49\u5982\u4F55\u83B7\u53D6\u8FDC\u7A0B\u5217\u8868\u6570\u636E"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"type GetAppList = () => Promise<Array<AppInfo>>;\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"apps",children:["apps",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#apps",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["\u5F53 ",(0,r.jsx)(n.code,{children:"apps"})," \u4E3A\u5BF9\u8C61\u7C7B\u578B\u7684\u65F6\u5019\uFF0C\u8868\u793A\u5B50\u5E94\u7528\u6A21\u5757\u7684\u4FE1\u606F ",(0,r.jsx)(n.code,{children:"Array<AppInfo>"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"interface AppInfo {\n  name: string;\n  entry: string;\n  activeWhen?: string | ()=> boolean;\n}\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"name: \u5B50\u5E94\u7528\u7684\u540D\u79F0\u3002"}),"\n",(0,r.jsx)(n.li,{children:"entry: \u5B50\u5E94\u7528\u7684\u5165\u53E3\u3002"}),"\n",(0,r.jsx)(n.li,{children:"activeWhen?: \u5B50\u5E94\u7528\u6FC0\u6D3B\u8DEF\u5F84\u3002"}),"\n"]}),"\n",(0,r.jsxs)(n.h3,{id:"\u5176\u4ED6\u914D\u7F6E\u9879",children:["\u5176\u4ED6\u914D\u7F6E\u9879",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u5176\u4ED6\u914D\u7F6E\u9879",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["\u5728 ",(0,r.jsx)(n.code,{children:"masterApp"})," \u914D\u7F6E\u4E0B\uFF0C\u5F00\u53D1\u8005\u53EF\u4EE5\u900F\u4F20 Garfish \u7684\u914D\u7F6E\u9879\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u6240\u6709\u652F\u6301\u7684\u914D\u7F6E\u9879",(0,r.jsx)(n.a,{href:"https://garfishjs.org/api/run/#%E5%8F%82%E6%95%B0",target:"_blank",rel:"noopener noreferrer",children:"\u70B9\u6B64\u67E5\u770B"}),"\u3002"]})]})}function t(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,i.useMDXComponents)(),e.components);return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}n.default=t,t.__RSPRESS_PAGE_META={},t.__RSPRESS_PAGE_META["zh%2Fconfigure%2Fapp%2Fruntime%2Fmaster-app.mdx"]={toc:[{text:"\u793A\u4F8B",id:"\u793A\u4F8B",depth:2},{text:"manifest",id:"manifest",depth:2},{text:"getAppList?",id:"getapplist",depth:3},{text:"apps",id:"apps",depth:3},{text:"\u5176\u4ED6\u914D\u7F6E\u9879",id:"\u5176\u4ED6\u914D\u7F6E\u9879",depth:3}],title:"runtime.masterApp",frontmatter:{sidebar_label:"masterApp"}}}}]);