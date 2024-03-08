/*! For license information please see 9260.42542291.js.LICENSE.txt */
(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["9260"],{64204:function(e,n,r){"use strict";r.r(n);var s=r("39980"),i=r("96954");function t(e){let n=Object.assign({h1:"h1",a:"a",ul:"ul",li:"li",strong:"strong",code:"code",div:"div",p:"p",h2:"h2",pre:"pre",h3:"h3"},(0,i.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h1,{id:"runtimemasterapp",children:["runtime.masterApp",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#runtimemasterapp",children:"#"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Type:"})," ",(0,s.jsx)(n.code,{children:"Object"})]}),"\n"]}),"\n",(0,s.jsxs)(n.div,{className:"rspress-directive info",children:[(0,s.jsx)(n.div,{className:"rspress-directive-title",children:"INFO"}),(0,s.jsx)(n.div,{className:"rspress-directive-content",children:(0,s.jsxs)(n.p,{children:['First you need to enable the "micro frontend" function using ',(0,s.jsx)(n.a,{href:"/apis/app/commands#modern-new",children:"new command"}),".\n"]})})]}),"\n",(0,s.jsxs)(n.h2,{id:"example",children:["Example",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#example",children:"#"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",meta:'title="modern.config.ts"',children:"import { appTools, defineConfig } from '@modern-js/app-tools';\nimport { garfishPlugin } from '@modern-js/plugin-garfish';\n\nexport default defineConfig({\n  runtime: {\n    router: true,\n    state: true,\n    masterApp: true,\n  },\n  plugins: [appTools(), garfishPlugin()],\n});\n"})}),"\n",(0,s.jsxs)(n.h2,{id:"manifest",children:["manifest",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#manifest",children:"#"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"interface Manifest {\n  getAppList?: () => Array<AppInfo>;\n}\n"})}),"\n",(0,s.jsxs)(n.h3,{id:"getapplist",children:["getAppList?",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#getapplist",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["Through the ",(0,s.jsx)(n.code,{children:"getAppList"})," configuration, you can customize how to get remote list data"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"type GetAppList = () => Promise<Array<AppInfo>>;\n"})}),"\n",(0,s.jsxs)(n.h3,{id:"apps",children:["apps",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#apps",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["When ",(0,s.jsx)(n.code,{children:"apps"})," is an object, it represents the information of the child application module ",(0,s.jsx)(n.code,{children:"Array<AppInfo>"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"interface AppInfo {\n  name: string;\n  entry: string;\n  activeWhen?: string | ()=> boolean;\n}\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"name: The name of the module."}),"\n",(0,s.jsx)(n.li,{children:"entry: The entry of the module."}),"\n"]}),"\n",(0,s.jsxs)(n.h3,{id:"other-config",children:["Other Config",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#other-config",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["In the ",(0,s.jsx)(n.code,{children:"masterApp"})," configuration, developers can pass through options supported by Garfish"]}),"\n",(0,s.jsxs)(n.p,{children:["All supported configuration options ",(0,s.jsx)(n.a,{href:"https://garfishjs.org/api/run/#%E5%8F%82%E6%95%B0",target:"_blank",rel:"noopener noreferrer",children:"see here"}),"."]})]})}function a(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,i.useMDXComponents)(),e.components);return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(t,{...e})}):t(e)}n.default=a,a.__RSPRESS_PAGE_META={},a.__RSPRESS_PAGE_META["en%2Fconfigure%2Fapp%2Fruntime%2Fmaster-app.mdx"]={toc:[{text:"Example",id:"example",depth:2},{text:"manifest",id:"manifest",depth:2},{text:"getAppList?",id:"getapplist",depth:3},{text:"apps",id:"apps",depth:3},{text:"Other Config",id:"other-config",depth:3}],title:"runtime.masterApp",frontmatter:{sidebar_label:"masterApp"}}}}]);