(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["10142"],{36321:function(e,n,s){"use strict";s.r(n),s.d(n,{default:function(){return c}});var r=s("9880"),t=s("23169");function i(e){let n=Object.assign({pre:"pre",code:"code"},(0,t.useMDXComponents)(),e.components);return(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",meta:'title="modern.config.ts"',children:"import { appTools, defineConfig } from '@modern-js/app-tools';\nimport { garfishPlugin } from '@modern-js/plugin-garfish';\n\nexport default defineConfig({\n  runtime: {\n    router: true,\n    masterApp: {\n      apps: [{\n        name: 'Table',\n        entry: 'http://localhost:8081',\n        // activeWhen: '/table'\n      }, {\n        name: 'Dashboard',\n        entry: 'http://localhost:8082'\n        // activeWhen: '/dashboard'\n      }]\n    },\n  },\n  plugins: [appTools(), garfishPlugin()],\n});\n\n"})})}function a(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,t.useMDXComponents)(),e.components);return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}var c=a;a.__RSPRESS_PAGE_META={},a.__RSPRESS_PAGE_META["zh%2Fcomponents%2Fenable-micro-frontend.mdx"]={toc:[],title:""}},16230:function(e,n,s){"use strict";s.r(n),s.d(n,{default:function(){return c}});var r=s("9880"),t=s("23169");function i(e){let n=Object.assign({h2:"h2",a:"a",pre:"pre",code:"code",h3:"h3",p:"p"},(0,t.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h2,{id:"manifest",children:["manifest",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#manifest",children:"#"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"interface Manifest {\n  getAppList?: () => Array<AppInfo>;\n}\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"getapplist",children:["getAppList?",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#getapplist",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["\u901A\u8FC7 ",(0,r.jsx)(n.code,{children:"getAppList"})," \u914D\u7F6E\uFF0C\u53EF\u4EE5\u81EA\u5B9A\u4E49\u5982\u4F55\u83B7\u53D6\u8FDC\u7A0B\u5217\u8868\u6570\u636E"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"type GetAppList = () => Promise<Array<AppInfo>>;\n"})})]})}function a(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,t.useMDXComponents)(),e.components);return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}var c=a;a.__RSPRESS_PAGE_META={},a.__RSPRESS_PAGE_META["zh%2Fcomponents%2Fmicro-master-manifest-config.mdx"]={toc:[{text:"manifest",id:"manifest",depth:2},{text:"getAppList?",id:"getapplist",depth:3}],title:""}},10355:function(e,n,s){"use strict";s.r(n),s.d(n,{default:function(){return p},frontmatter:function(){return l}});var r=s("9880"),t=s("23169"),i=s("36321"),a=s("16230");function c(e){let n=Object.assign({h1:"h1",a:"a",ul:"ul",li:"li",strong:"strong",code:"code",div:"div",p:"p",h2:"h2",h3:"h3",pre:"pre"},(0,t.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"runtimemasterapp",children:["runtime.masterApp",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#runtimemasterapp",children:"#"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"\u7C7B\u578B\uFF1A"})," ",(0,r.jsx)(n.code,{children:"Object"})]}),"\n"]}),"\n",(0,r.jsxs)(n.div,{className:"rspress-directive info",children:[(0,r.jsx)(n.div,{className:"rspress-directive-title",children:"INFO"}),(0,r.jsxs)(n.div,{className:"rspress-directive-content",children:[(0,r.jsxs)(n.p,{children:["\u9700\u8981\u5148\u901A\u8FC7 ",(0,r.jsx)(n.code,{children:"pnpm run new"})," \u542F\u7528\u300C\u5FAE\u524D\u7AEF\u300D \u529F\u80FD\u3002"]}),"\n"]})]}),"\n",(0,r.jsxs)(n.h2,{id:"\u793A\u4F8B",children:["\u793A\u4F8B",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u793A\u4F8B",children:"#"})]}),"\n","\n",(0,r.jsx)(i.default,{}),"\n",(0,r.jsx)(a.default,{}),"\n",(0,r.jsxs)(n.h3,{id:"apps",children:["apps",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#apps",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["\u5F53 ",(0,r.jsx)(n.code,{children:"apps"})," \u4E3A\u5BF9\u8C61\u7C7B\u578B\u7684\u65F6\u5019\uFF0C\u8868\u793A\u5B50\u5E94\u7528\u6A21\u5757\u7684\u4FE1\u606F ",(0,r.jsx)(n.code,{children:"Array<AppInfo>"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"interface AppInfo {\n  name: string;\n  entry: string;\n  activeWhen?: string | ()=> boolean;\n}\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"name: \u5B50\u5E94\u7528\u7684\u540D\u79F0\u3002"}),"\n",(0,r.jsx)(n.li,{children:"entry: \u5B50\u5E94\u7528\u7684\u5165\u53E3\u3002"}),"\n",(0,r.jsx)(n.li,{children:"activeWhen?: \u5B50\u5E94\u7528\u6FC0\u6D3B\u8DEF\u5F84\u3002"}),"\n"]}),"\n",(0,r.jsxs)(n.h3,{id:"\u5176\u4ED6\u914D\u7F6E\u9879",children:["\u5176\u4ED6\u914D\u7F6E\u9879",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u5176\u4ED6\u914D\u7F6E\u9879",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["\u5728 ",(0,r.jsx)(n.code,{children:"masterApp"})," \u914D\u7F6E\u4E0B\uFF0C\u5F00\u53D1\u8005\u53EF\u4EE5\u900F\u4F20 Garfish \u7684\u914D\u7F6E\u9879\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u6240\u6709\u652F\u6301\u7684\u914D\u7F6E\u9879",(0,r.jsx)(n.a,{href:"https://garfishjs.org/api/run/#%E5%8F%82%E6%95%B0",target:"_blank",rel:"noopener noreferrer",children:"\u70B9\u6B64\u67E5\u770B"}),"\u3002"]})]})}function d(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,t.useMDXComponents)(),e.components);return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}var p=d;d.__RSPRESS_PAGE_META={},d.__RSPRESS_PAGE_META["zh%2Fconfigure%2Fapp%2Fruntime%2Fmaster-app.mdx"]={toc:[{text:"\u793A\u4F8B",id:"\u793A\u4F8B",depth:2},{text:"apps",id:"apps",depth:3},{text:"\u5176\u4ED6\u914D\u7F6E\u9879",id:"\u5176\u4ED6\u914D\u7F6E\u9879",depth:3}],title:"runtime.masterApp"};let l={sidebar_label:"masterApp"}}}]);