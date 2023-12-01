(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["74094"],{54696:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return c}});var s=r("9880"),d=r("23169");function i(e){let n=Object.assign({pre:"pre",code:"code"},(0,d.useMDXComponents)(),e.components);return(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",meta:'title="src/App.tsx"',children:"import { useModuleApps } from '@modern-js/plugin-garfish/runtime';\n\nimport { RouterProvider, Route, createBrowserRouter, createRoutesFromElements, BrowserRouter, Link, Outlet } from '@modern-js/runtime/router';\n\nconst AppLayout = () => (\n  <>\n    <div><Link to={'/table'}>\u52A0\u8F7D\u7EA6\u5B9A\u5F0F\u8DEF\u7531\u5B50\u5E94\u7528</Link></div>\n    <div><Link to={'/dashboard'}>\u52A0\u8F7D\u81EA\u63A7\u5F0F\u8DEF\u7531\u5B50\u5E94\u7528</Link></div>\n    <div><Link to={'/'}>\u5378\u8F7D\u5B50\u5E94\u7528</Link></div>\n    <Outlet />\n  </>\n)\n\nexport default () => {\n  const { apps, MApp, Table, Dashboard } = useModuleApps();\n\n  // \u4F7F\u7528\u7684\u4E0D\u662F MApp \u7EC4\u4EF6\uFF0C\u9700\u8981\u4F7F\u7528 createBrowserRouter \u6765\u521B\u5EFA\u8DEF\u7531\n  const router = createBrowserRouter(\n    createRoutesFromElements(\n      <Route path=\"/\" element={<AppLayout />}>\n        <Route key={'table'} path={'table/*'} element={<Table />} />\n        <Route key={'dashboard'} path={'dashboard/*'} element={<Dashboard />} />\n      </Route>\n    )\n  );\n\n  return (\n    // \u65B9\u6CD5\u4E00\uFF1A\u4F7F\u7528 MApp \u81EA\u52A8\u6839\u636E\u914D\u7F6E\u7684 activeWhen \u53C2\u6570\u52A0\u8F7D\u5B50\u5E94\u7528(\u672C\u9879\u76EE\u914D\u7F6E\u5728 modern.config.ts \u4E2D)\n    // <BrowserRouter>\n    //   <MApp />\n    // </BrowserRouter>\n\n    // \u65B9\u6CD5\u4E8C\uFF1A\u624B\u52A8\u5199 Route \u7EC4\u4EF6\u65B9\u5F0F\u52A0\u8F7D\u5B50\u5E94\u7528\uFF0C\u65B9\u4FBF\u4E8E\u9700\u8981\u9274\u6743\u7B49\u9700\u8981\u524D\u7F6E\u64CD\u4F5C\u7684\u573A\u666F\n    <>\n      <RouterProvider router={router} />\n    </>\n  );\n};\n"})})}function t(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,d.useMDXComponents)(),e.components);return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(i,{...e})}):i(e)}var c=t;t.__RSPRESS_PAGE_META={},t.__RSPRESS_PAGE_META["zh%2Fcomponents%2Fcustom-router-micro-frontend.mdx"]={toc:[],title:"",frontmatter:{}}},71275:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return c}});var s=r("9880"),d=r("23169");function i(e){let n=Object.assign({pre:"pre",code:"code"},(0,d.useMDXComponents)(),e.components);return(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"? \u8BF7\u9009\u62E9\u4F60\u60F3\u521B\u5EFA\u7684\u5DE5\u7A0B\u7C7B\u578B\uFF1AWeb \u5E94\u7528\n? \u8BF7\u9009\u62E9\u5F00\u53D1\u8BED\u8A00\uFF1ATS\n? \u8BF7\u9009\u62E9\u5305\u7BA1\u7406\u5DE5\u5177\uFF1Apnpm\n"})})}function t(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,d.useMDXComponents)(),e.components);return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(i,{...e})}):i(e)}var c=t;t.__RSPRESS_PAGE_META={},t.__RSPRESS_PAGE_META["zh%2Fcomponents%2Fdefault-mwa-generate.mdx"]={toc:[],title:"",frontmatter:{}}},48372:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return c}});var s=r("9880"),d=r("23169");function i(e){let n=Object.assign({pre:"pre",code:"code"},(0,d.useMDXComponents)(),e.components);return(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",meta:'title="modern.config.ts"',children:"import { appTools, defineConfig } from '@modern-js/app-tools';\nimport { garfishPlugin } from '@modern-js/plugin-garfish';\n\nexport default defineConfig({\n  runtime: {\n    router: true,\n    masterApp: {\n      apps: [{\n        name: 'Table',\n        entry: 'http://localhost:8081',\n        // activeWhen: '/table'\n      }, {\n        name: 'Dashboard',\n        entry: 'http://localhost:8082'\n        // activeWhen: '/dashboard'\n      }]\n    },\n  },\n  plugins: [appTools(), garfishPlugin()],\n});\n\n"})})}function t(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,d.useMDXComponents)(),e.components);return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(i,{...e})}):i(e)}var c=t;t.__RSPRESS_PAGE_META={},t.__RSPRESS_PAGE_META["zh%2Fcomponents%2Fenable-micro-frontend.mdx"]={toc:[],title:"",frontmatter:{}}},60465:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return a}});var s=r("9880"),d=r("23169"),i=r("71275"),t=r("48372"),c=r("54696");function o(e){let n=Object.assign({h1:"h1",a:"a",p:"p",ul:"ul",li:"li",h2:"h2",h3:"h3",pre:"pre",code:"code",h4:"h4"},(0,d.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h1,{id:"\u4F53\u9A8C\u5FAE\u524D\u7AEF",children:["\u4F53\u9A8C\u5FAE\u524D\u7AEF",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u4F53\u9A8C\u5FAE\u524D\u7AEF",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"\u901A\u8FC7\u672C\u7AE0\u4F60\u53EF\u4EE5\u4E86\u89E3\u5230\uFF1A"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u5982\u4F55\u521B\u5EFA\u5FAE\u524D\u7AEF\u9879\u76EE\u7684\u4E3B\u5E94\u7528\u3001\u5B50\u5E94\u7528\u3002"}),"\n",(0,s.jsx)(n.li,{children:"\u5FAE\u524D\u7AEF\u9879\u76EE\u5F00\u53D1\u7684\u57FA\u672C\u6D41\u7A0B\u3002"}),"\n"]}),"\n",(0,s.jsxs)(n.h2,{id:"\u521B\u5EFA\u5E94\u7528",children:["\u521B\u5EFA\u5E94\u7528",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u521B\u5EFA\u5E94\u7528",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"\u76EE\u524D\u652F\u6301\u4E24\u79CD\u8DEF\u7531\u6A21\u5F0F"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u81EA\u63A7\u5F0F\u8DEF\u7531"}),"\n",(0,s.jsx)(n.li,{children:"\u7EA6\u5B9A\u5F0F\u8DEF\u7531"}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["\u9996\u5148\u660E\u786E\u4E3B\u5E94\u7528\u7684\u8DEF\u7531\u6A21\u5F0F ",(0,s.jsx)(n.a,{href:"#%E5%88%9B%E5%BB%BA%E7%BA%A6%E5%AE%9A%E5%BC%8F%E8%B7%AF%E7%94%B1%E4%B8%BB%E5%BA%94%E7%94%A8",children:"\u521B\u5EFA\u7EA6\u5B9A\u5F0F\u8DEF\u7531\u4E3B\u5E94\u7528"})," \u6216 ",(0,s.jsx)(n.a,{href:"#%E5%88%9B%E5%BB%BA%E8%87%AA%E6%8E%A7%E5%BC%8F%E8%B7%AF%E7%94%B1%E4%B8%BB%E5%BA%94%E7%94%A8",children:"\u521B\u5EFA\u81EA\u63A7\u5F0F\u8DEF\u7531\u4E3B\u5E94\u7528"})]}),"\n",(0,s.jsx)(n.p,{children:"\u5728\u672C\u6B21\u4F53\u9A8C\u4E2D\u6211\u4EEC\u4F1A\u4E3A\u4E3B\u5E94\u7528\u521B\u5EFA\u4E24\u4E2A\u5B50\u5E94\u7528 Table \u548C Dashboard (Table \u4E3A\u7EA6\u5B9A\u5F0F\u8DEF\u7531\uFF0CDashboard \u4E3A\u81EA\u63A7\u5F0F\u8DEF\u7531)"}),"\n",(0,s.jsxs)(n.h3,{id:"\u521B\u5EFA\u7EA6\u5B9A\u5F0F\u8DEF\u7531\u4E3B\u5E94\u7528",children:["\u521B\u5EFA\u7EA6\u5B9A\u5F0F\u8DEF\u7531\u4E3B\u5E94\u7528",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u521B\u5EFA\u7EA6\u5B9A\u5F0F\u8DEF\u7531\u4E3B\u5E94\u7528",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"\u901A\u8FC7\u547D\u4EE4\u884C\u5DE5\u5177\u521D\u59CB\u5316\u9879\u76EE\uFF1A"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"mkdir masterApp && cd masterApp\nnpx @modern-js/create@latest\n"})}),"\n","\n",(0,s.jsx)(i.default,{}),"\n",(0,s.jsxs)(n.p,{children:["\u5B8C\u6210\u9879\u76EE\u521B\u5EFA\u540E\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7 ",(0,s.jsx)(n.code,{children:"pnpm run new"})," \u6765\u5F00\u542F ",(0,s.jsx)(n.code,{children:"\u5FAE\u524D\u7AEF"})," \u529F\u80FD\uFF1A"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"? \u8BF7\u9009\u62E9\u4F60\u60F3\u8981\u7684\u64CD\u4F5C \u542F\u7528\u53EF\u9009\u529F\u80FD\n? \u8BF7\u9009\u62E9\u529F\u80FD\u540D\u79F0 \u542F\u7528\u300C\u5FAE\u524D\u7AEF\u300D\u6A21\u5F0F\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u63A5\u4E0B\u6765\uFF0C\u8BA9\u6211\u4EEC\u6CE8\u518C\u5FAE\u524D\u7AEF\u63D2\u4EF6\u5E76\u6DFB\u52A0\u5F00\u542F\u5FAE\u524D\u7AEF\u4E3B\u5E94\u7528\uFF0C\u5E76\u589E\u52A0\u5B50\u5E94\u7528\u5217\u8868\uFF1A"}),"\n","\n",(0,s.jsx)(t.default,{}),"\n",(0,s.jsx)(n.p,{children:"\u7136\u540E\u6211\u4EEC\u5728 routes \u6587\u4EF6\u5939\u4E0B\u65B0\u5EFA\u4E24\u4E2A\u76EE\u5F55"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"table (\u7528\u4E8E\u52A0\u8F7D\u7EA6\u5B9A\u5F0F\u8DEF\u7531\u5B50\u5E94\u7528)"}),"\n",(0,s.jsx)(n.li,{children:"dashboard (\u7528\u4E8E\u52A0\u8F7D\u81EA\u63A7\u5F0F\u8DEF\u7531\u5B50\u5E94\u7528)"}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["\u5728\u8FD9\u4E24\u4E2A\u76EE\u5F55\u4E0B\u6211\u4EEC\u9700\u8981\u65B0\u5EFA\u4E00\u4E2A ",(0,s.jsx)(n.code,{children:"$.tsx"})," \u6587\u4EF6\u4F5C\u4E3A\u4E3B\u5E94\u7528\u7EA6\u5B9A\u5F0F\u8DEF\u7531\u7684\u5165\u53E3($ \u4EE3\u8868\u6A21\u7CCA\u5339\u914D\uFF0C\u5373 ",(0,s.jsx)(n.code,{children:"/table"})," \u548C ",(0,s.jsx)(n.code,{children:"/table/test"})," \u90FD\u4F1A\u5339\u914D\u5230\u8FD9\u4E2A ",(0,s.jsx)(n.code,{children:"$.tsx"})," \u4F5C\u4E3A\u8BE5\u8DEF\u7531\u7684\u5165\u53E3\u6587\u4EF6\uFF0C\u8FD9\u4F1A\u4FDD\u8BC1\u5728\u5FAE\u524D\u7AEF\u573A\u666F\u4E0B\u6B63\u786E\u52A0\u8F7D\u5B50\u5E94\u7528\u8DEF\u7531)"]}),"\n",(0,s.jsxs)(n.h4,{id:"\u52A0\u8F7D\u7EA6\u5B9A\u5F0F\u8DEF\u7531\u5B50\u5E94\u7528",children:["\u52A0\u8F7D\u7EA6\u5B9A\u5F0F\u8DEF\u7531\u5B50\u5E94\u7528",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u52A0\u8F7D\u7EA6\u5B9A\u5F0F\u8DEF\u7531\u5B50\u5E94\u7528",children:"#"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",meta:'title="src/routes/table/$.tsx"',children:"import { useModuleApps } from '@modern-js/plugin-garfish/runtime';\n\nconst Index = () => {\n  const { Table } = useModuleApps();\n\n  return (\n    <div>\n      <Table />\n    </div>\n  );\n};\n\nexport default Index;\n"})}),"\n",(0,s.jsxs)(n.h4,{id:"\u52A0\u8F7D\u81EA\u63A7\u5F0F\u8DEF\u7531\u5B50\u5E94\u7528",children:["\u52A0\u8F7D\u81EA\u63A7\u5F0F\u8DEF\u7531\u5B50\u5E94\u7528",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u52A0\u8F7D\u81EA\u63A7\u5F0F\u8DEF\u7531\u5B50\u5E94\u7528",children:"#"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",meta:'title="src/routes/dashboard/$.tsx"',children:"import { useModuleApps } from '@modern-js/plugin-garfish/runtime';\n\nconst Index = () => {\n  const { Dashboard } = useModuleApps();\n\n  return (\n    <div>\n      <Dashboard />\n    </div>\n  );\n};\n\nexport default Index;\n"})}),"\n",(0,s.jsxs)(n.h4,{id:"\u8DEF\u7531\u8DF3\u8F6C",children:["\u8DEF\u7531\u8DF3\u8F6C",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u8DEF\u7531\u8DF3\u8F6C",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["\u6B64\u65F6\u4E3B\u5E94\u7528\u914D\u7F6E\u5DF2\u7ECF\u5B8C\u6210\uFF0C\u901A\u8FC7\u8DEF\u7531\u5373\u53EF\u52A0\u8F7D\u5B50\u5E94\u7528\uFF0C\u4FEE\u6539\u4E3B\u5E94\u7528\u7684 ",(0,s.jsx)(n.code,{children:"layout.tsx"})," \u6765\u8DF3\u8F6C\u8DEF\u7531"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",meta:'title="src/route/layout.tsx"',children:"import { Outlet, Link } from '@modern-js/runtime/router';\n\nconst Layout = () => (\n  <div>\n    <div>\n      <Link to={'/table'}>\u52A0\u8F7D\u7EA6\u5B9A\u5F0F\u8DEF\u7531\u5B50\u5E94\u7528</Link>\n    </div>\n    <div>\n      <Link to={'/dashboard'}>\u52A0\u8F7D\u81EA\u63A7\u5F0F\u8DEF\u7531\u5B50\u5E94\u7528</Link>\n    </div>\n    <div>\n      <Link to={'/'}>\u5378\u8F7D\u5B50\u5E94\u7528</Link>\n    </div>\n    <Outlet />\n  </div>\n);\n\nexport default Layout;\n"})}),"\n",(0,s.jsxs)(n.h3,{id:"\u521B\u5EFA\u81EA\u63A7\u5F0F\u8DEF\u7531\u4E3B\u5E94\u7528",children:["\u521B\u5EFA\u81EA\u63A7\u5F0F\u8DEF\u7531\u4E3B\u5E94\u7528",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u521B\u5EFA\u81EA\u63A7\u5F0F\u8DEF\u7531\u4E3B\u5E94\u7528",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"\u901A\u8FC7\u547D\u4EE4\u884C\u5DE5\u5177\u521D\u59CB\u5316\u9879\u76EE\uFF1A"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"mkdir masterApp && cd masterApp\nnpx @modern-js/create@latest\n"})}),"\n",(0,s.jsx)(i.default,{}),"\n",(0,s.jsxs)(n.p,{children:["\u5B8C\u6210\u9879\u76EE\u521B\u5EFA\u540E\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7 ",(0,s.jsx)(n.code,{children:"pnpm run new"})," \u6765\u5F00\u542F ",(0,s.jsx)(n.code,{children:"\u5FAE\u524D\u7AEF"})," \u529F\u80FD\uFF1A"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"? \u8BF7\u9009\u62E9\u4F60\u60F3\u8981\u7684\u64CD\u4F5C \u542F\u7528\u53EF\u9009\u529F\u80FD\n? \u8BF7\u9009\u62E9\u529F\u80FD\u540D\u79F0 \u542F\u7528\u300C\u5FAE\u524D\u7AEF\u300D\u6A21\u5F0F\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u63A5\u4E0B\u6765\uFF0C\u8BA9\u6211\u4EEC\u6CE8\u518C\u5FAE\u524D\u7AEF\u63D2\u4EF6\u5E76\u6DFB\u52A0\u5F00\u542F\u5FAE\u524D\u7AEF\u4E3B\u5E94\u7528\uFF0C\u5E76\u589E\u52A0\u5B50\u5E94\u7528\u5217\u8868\uFF1A"}),"\n",(0,s.jsx)(t.default,{}),"\n",(0,s.jsxs)(n.p,{children:["\u7531\u4E8E\u662F\u81EA\u63A7\u5F0F\u8DEF\u7531\uFF0C\u6211\u4EEC\u5220\u9664\u6389 ",(0,s.jsx)(n.code,{children:"routes"})," \u6587\u4EF6\u5939\u5E76\u5728 ",(0,s.jsx)(n.code,{children:"src"})," \u76EE\u5F55\u4E0B\u589E\u52A0 ",(0,s.jsx)(n.code,{children:"App.tsx"})," \u6587\u4EF6\uFF0C\u6B64\u5904\u5982\u679C\u4F7F\u7528\u7684 ",(0,s.jsx)(n.code,{children:"\u975E MApp"})," \u7EC4\u4EF6\uFF0C\u9700\u8981\u901A\u8FC7 ",(0,s.jsx)(n.code,{children:"React Router v6"})," \u7684 ",(0,s.jsx)(n.code,{children:"createBrowserRouter"})," API \u6765\u521B\u5EFA\u8DEF\u7531"]}),"\n",(0,s.jsxs)(n.h4,{id:"\u52A0\u8F7D\u5B50\u5E94\u7528",children:["\u52A0\u8F7D\u5B50\u5E94\u7528",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u52A0\u8F7D\u5B50\u5E94\u7528",children:"#"})]}),"\n","\n",(0,s.jsx)(c.default,{}),"\n",(0,s.jsxs)(n.h3,{id:"\u521B\u5EFA\u7EA6\u5B9A\u5F0F\u8DEF\u7531\u5B50\u5E94\u7528",children:["\u521B\u5EFA\u7EA6\u5B9A\u5F0F\u8DEF\u7531\u5B50\u5E94\u7528",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u521B\u5EFA\u7EA6\u5B9A\u5F0F\u8DEF\u7531\u5B50\u5E94\u7528",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"\u901A\u8FC7\u547D\u4EE4\u884C\u5DE5\u5177\u521D\u59CB\u5316\u9879\u76EE\uFF1A"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"mkdir table && cd table\nnpx @modern-js/create@latest\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u6309\u7167\u5982\u4E0B\u9009\u62E9\uFF0C\u751F\u6210\u9879\u76EE\uFF1A"}),"\n",(0,s.jsx)(i.default,{}),"\n",(0,s.jsxs)(n.p,{children:["\u6211\u4EEC\u6267\u884C ",(0,s.jsx)(n.code,{children:"pnpm run new"})," \u6765\u5F00\u542F ",(0,s.jsx)(n.code,{children:"\u5FAE\u524D\u7AEF"})," \u529F\u80FD\uFF1A"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"? \u8BF7\u9009\u62E9\u4F60\u60F3\u8981\u7684\u64CD\u4F5C \u542F\u7528\u53EF\u9009\u529F\u80FD\n? \u8BF7\u9009\u62E9\u529F\u80FD\u540D\u79F0 \u542F\u7528\u300C\u5FAE\u524D\u7AEF\u300D\u6A21\u5F0F\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u63A5\u4E0B\u6765\uFF0C\u8BA9\u6211\u4EEC\u6CE8\u518C\u5FAE\u524D\u7AEF\u63D2\u4EF6\u5E76\u4FEE\u6539 ",(0,s.jsx)(n.code,{children:"modern.config.ts"}),"\uFF0C\u6DFB\u52A0\u5FAE\u524D\u7AEF\u5B50\u5E94\u7528\u7684\u914D\u7F6E ",(0,s.jsx)(n.code,{children:"deploy.microFrontend"}),"\uFF1A"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",meta:'title="modern.config.ts"',children:"import { appTools, defineConfig } from '@modern-js/app-tools';\nimport { garfishPlugin } from '@modern-js/plugin-garfish';\n\nexport default defineConfig({\n  dev: {\n    port: 8081,\n  },\n  runtime: {\n    router: true,\n    state: true,\n  },\n  deploy: {\n    microFrontend: true,\n  },\n  plugins: [appTools(), garfishPlugin()],\n});\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u6DFB\u52A0 ",(0,s.jsx)(n.code,{children:"src/routes/page.tsx"})," \u4EE3\u7801"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",meta:'title="src/routes/page.tsx"',children:'const Index = () => {\n  return (\n    <div className="container-box">subApp: \u7EA6\u5B9A\u5F0F\u8DEF\u7531\u7684\u5B50\u5E94\u7528\u7684\u6839\u8DEF\u7531</div>\n  );\n};\n\nexport default Index;\n'})}),"\n",(0,s.jsxs)(n.h3,{id:"\u521B\u5EFA\u81EA\u63A7\u5F0F\u8DEF\u7531\u5B50\u5E94\u7528",children:["\u521B\u5EFA\u81EA\u63A7\u5F0F\u8DEF\u7531\u5B50\u5E94\u7528",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u521B\u5EFA\u81EA\u63A7\u5F0F\u8DEF\u7531\u5B50\u5E94\u7528",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"\u901A\u8FC7\u547D\u4EE4\u884C\u5DE5\u5177\u521D\u59CB\u5316\u9879\u76EE\uFF1A"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"mkdir dashboard && cd dashboard\nnpx @modern-js/create@latest\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u6309\u7167\u5982\u4E0B\u9009\u62E9\uFF0C\u751F\u6210\u9879\u76EE\uFF1A"}),"\n",(0,s.jsx)(i.default,{}),"\n",(0,s.jsxs)(n.p,{children:["\u6211\u4EEC\u6267\u884C ",(0,s.jsx)(n.code,{children:"pnpm run new"})," \u6765\u5F00\u542F ",(0,s.jsx)(n.code,{children:"\u5FAE\u524D\u7AEF"}),"\uFF1A"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"? \u8BF7\u9009\u62E9\u4F60\u60F3\u8981\u7684\u64CD\u4F5C \u542F\u7528\u53EF\u9009\u529F\u80FD\n? \u8BF7\u9009\u62E9\u529F\u80FD\u540D\u79F0 \u542F\u7528\u300C\u5FAE\u524D\u7AEF\u300D\u6A21\u5F0F\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u63A5\u4E0B\u6765\uFF0C\u8BA9\u6211\u4EEC\u6CE8\u518C\u5FAE\u524D\u7AEF\u63D2\u4EF6\u5E76\u4FEE\u6539 ",(0,s.jsx)(n.code,{children:"modern.config.ts"}),"\uFF0C\u6DFB\u52A0\u5FAE\u524D\u7AEF\u5B50\u5E94\u7528\u7684\u914D\u7F6E ",(0,s.jsx)(n.code,{children:"deploy.microFrontend"}),"\uFF1A"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",meta:'title="modern.config.ts"',children:"import { appTools, defineConfig } from '@modern-js/app-tools';\nimport { garfishPlugin } from '@modern-js/plugin-garfish';\n\nexport default defineConfig({\n  dev: {\n    port: 8082,\n  },\n  runtime: {\n    router: true,\n    state: true,\n  },\n  deploy: {\n    microFrontend: true,\n  },\n  plugins: [appTools(), garfishPlugin()],\n});\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u81EA\u63A7\u5F0F\u8DEF\u7531\u9700\u8981\u5220\u9664\u6389 ",(0,s.jsx)(n.code,{children:"routes"})," \u6587\u4EF6\u5939\u5E76\u5728 ",(0,s.jsx)(n.code,{children:"src"})," \u76EE\u5F55\u4E0B\u65B0\u5EFA ",(0,s.jsx)(n.code,{children:"App.tsx"})]}),"\n",(0,s.jsxs)(n.p,{children:["\u5E76\u5728 ",(0,s.jsx)(n.code,{children:"src/App.tsx"})," \u6DFB\u52A0\u4EE3\u7801\uFF0C\u6CE8\u610F\u9700\u8981\u4ECE ",(0,s.jsx)(n.code,{children:"props"})," \u4E2D\u89E3\u6790\u5E76\u4F20\u9012 ",(0,s.jsx)(n.code,{children:"basename"})," \u7ED9 ",(0,s.jsx)(n.code,{children:"BrowserRouter"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",meta:'title="src/App.tsx"',children:"import { BrowserRouter, Route, Routes } from '@modern-js/runtime/router';\n\nexport default (props: { basename: string }) => {\n  const { basename } = props;\n\n  return (\n    <BrowserRouter basename={basename}>\n      <Routes>\n        <Route index element={<div>\u81EA\u63A7\u5F0F\u8DEF\u7531\u5B50\u5E94\u7528\u6839\u8DEF\u7531</div>} />\n        <Route path={'path'} element={<div>\u81EA\u63A7\u5F0F\u8DEF\u7531\u5B50\u5E94\u7528\u5B50\u8DEF\u7531</div>} />\n      </Routes>\n    </BrowserRouter>\n  );\n};\n"})}),"\n",(0,s.jsxs)(n.h2,{id:"\u8C03\u8BD5",children:["\u8C03\u8BD5",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u8C03\u8BD5",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["\u6309\u987A\u5E8F\u5728\u76EE\u5F55\u6267\u884C ",(0,s.jsx)(n.code,{children:"pnpm run dev"})," \u547D\u4EE4\u542F\u52A8\u5E94\u7528\uFF1A"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["masterApp \u4E3B\u5E94\u7528 ",(0,s.jsx)(n.code,{children:"http://localhost:8080"})]}),"\n",(0,s.jsxs)(n.li,{children:["table \u5B50\u5E94\u7528(\u7EA6\u5B9A\u5F0F\u8DEF\u7531) ",(0,s.jsx)(n.code,{children:"http://localhost:8081"})]}),"\n",(0,s.jsxs)(n.li,{children:["dashboard \u5B50\u5E94\u7528(\u81EA\u63A7\u5F0F\u8DEF\u7531) ",(0,s.jsx)(n.code,{children:"http://localhost:8082"})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["\u8BBF\u95EE\u4E3B\u5E94\u7528\u5730\u5740 ",(0,s.jsx)(n.code,{children:"http://localhost:8080"})]}),"\n",(0,s.jsxs)(n.p,{children:["\u5728\u5B8C\u6210\u4E86\u5FAE\u524D\u7AEF\u6574\u4F53\u5F00\u53D1\u6D41\u7A0B\u7684\u4F53\u9A8C\u540E\uFF0C\u4F60\u53EF\u4EE5\u8FDB\u4E00\u6B65\u4E86\u89E3\u5982\u4F55 ",(0,s.jsx)(n.a,{href:"/guides/topic-detail/micro-frontend/c03-main-app",children:"\u5F00\u53D1\u4E3B\u5E94\u7528"})]}),"\n",(0,s.jsxs)(n.h2,{id:"modernjs-\u5FAE\u524D\u7AEF\u548C\u76F4\u63A5\u4F7F\u7528-garfish-\u7684\u533A\u522B",children:["Modern.js \u5FAE\u524D\u7AEF\u548C\u76F4\u63A5\u4F7F\u7528 Garfish \u7684\u533A\u522B",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#modernjs-\u5FAE\u524D\u7AEF\u548C\u76F4\u63A5\u4F7F\u7528-garfish-\u7684\u533A\u522B",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["\u4F7F\u7528\u7EAF ",(0,s.jsx)(n.code,{children:"Garfish"})," API \u5F00\u53D1\u5FAE\u524D\u7AEF\u5E94\u7528\u65F6"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\u4E3B\u5E94\u7528\uFF1A","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\u5B89\u88C5 Garfish \u4F9D\u8D56\u5E76\u4F7F\u7528 ",(0,s.jsx)(n.code,{children:"Garfish.run"})," \u6CE8\u518C\u5B50\u5E94\u7528 ",(0,s.jsx)(n.a,{href:"https://www.garfishjs.org/api/run",target:"_blank",rel:"noopener noreferrer",children:"\u53C2\u8003"})]}),"\n",(0,s.jsxs)(n.li,{children:["\u63D0\u4F9B\u4E00\u4E2A\u5E38\u9A7B\u7684 ",(0,s.jsx)(n.code,{children:"DOM"})," \u8282\u70B9\u4F9B\u5B50\u5E94\u7528\u6302\u8F7D ",(0,s.jsx)(n.a,{href:"https://www.garfishjs.org/api/registerApp#domgetter",target:"_blank",rel:"noopener noreferrer",children:"\u53C2\u8003"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\u5B50\u5E94\u7528\uFF1A","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\u5BFC\u51FA ",(0,s.jsx)(n.code,{children:"provider"})," ",(0,s.jsx)(n.a,{href:"https://www.garfishjs.org/guide/start#2%E5%AF%BC%E5%87%BA-provider-%E5%87%BD%E6%95%B0",target:"_blank",rel:"noopener noreferrer",children:"\u53C2\u8003"})]}),"\n",(0,s.jsxs)(n.li,{children:["\u8BBE\u7F6E\u5E94\u7528\u7684 ",(0,s.jsx)(n.code,{children:"basename"})," ",(0,s.jsx)(n.a,{href:"https://www.garfishjs.org/guide/start#3-%E8%AE%BE%E7%BD%AE%E5%BA%94%E7%94%A8%E8%B7%AF%E7%94%B1-basename",target:"_blank",rel:"noopener noreferrer",children:"\u53C2\u8003"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["\u533A\u522B\u4E8E\u76F4\u63A5\u4F7F\u7528 ",(0,s.jsx)(n.code,{children:"Garfish"})," \u8FD0\u884C\u65F6 API \u5F00\u53D1\u5FAE\u524D\u7AEF\u9879\u76EE\uFF0C",(0,s.jsx)(n.code,{children:"Modern.js"})," \u7684\u5FAE\u524D\u7AEF\u65B9\u6848\u66F4\u52A0\u5F00\u7BB1\u5373\u7528\u3002\n\u4F7F\u7528 ",(0,s.jsx)(n.code,{children:"pnpm new"})," \u542F\u7528\u5FAE\u524D\u7AEF\u6A21\u5F0F\u540E\u4F1A\u81EA\u52A8\u5728 ",(0,s.jsx)(n.code,{children:"Modern.js"})," \u5E94\u7528\u4E2D\u96C6\u6210 ",(0,s.jsx)(n.code,{children:"Garfish"})," \u63D2\u4EF6\uFF0C\u5728 ",(0,s.jsx)(n.code,{children:"Garfish"}),"\n\u63D2\u4EF6\u7684\u52A0\u6301\u4E0B\uFF0C\u4F60\u53EA\u9700\u8981"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\u4E3B\u5E94\u7528\uFF1A","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\u914D\u7F6E ",(0,s.jsx)(n.code,{children:"runtime.masterApp.apps"})," \u53C2\u6570\u6CE8\u518C\u5B50\u5E94\u7528"]}),"\n",(0,s.jsxs)(n.li,{children:["\u4F7F\u7528 ",(0,s.jsx)(n.code,{children:"useModuleApps"})," API \u83B7\u53D6\u5B50\u5E94\u7528\u5B9E\u4F8B\u5E76\u5728\u7EC4\u4EF6\u4E2D\u5B8C\u6210\u6E32\u67D3"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\u5B50\u5E94\u7528\uFF1A","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\u914D\u7F6E ",(0,s.jsx)(n.code,{children:"deploy.microFrontend"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\u6240\u4EE5\u63D2\u4EF6\u4E2D\u4E3A\u4F60\u505A\u4E86\u5982\u4E0B\u4E8B\u60C5"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\u5E2E\u52A9\u4F60\u901A\u8FC7 ",(0,s.jsx)(n.code,{children:"Garfish"})," \u8FD0\u884C\u65F6 API \u81EA\u52A8\u6CE8\u518C\u5B50\u5E94\u7528\uFF08\u4E3B\u5E94\u7528\uFF09"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"useModulesApps"})," \u51FD\u6570\u7684\u8FD4\u56DE\u503C\u63D0\u4F9B\u4E86\u4E00\u4E2A\u5E38\u9A7B\u7684 ",(0,s.jsx)(n.code,{children:"DOM"})," \u8282\u70B9\u4F9B\u5B50\u5E94\u7528\u6302\u8F7D\uFF08\u4E3B\u5E94\u7528\uFF09"]}),"\n",(0,s.jsxs)(n.li,{children:["\u5E2E\u52A9\u4F60\u6B63\u786E\u5BFC\u51FA\u4E86 ",(0,s.jsx)(n.code,{children:"provider"}),"\uFF08\u5B50\u5E94\u7528\uFF09"]}),"\n",(0,s.jsxs)(n.li,{children:["\u5E2E\u52A9\u4F60\u6B63\u786E\u8BBE\u7F6E\u4E86 ",(0,s.jsx)(n.code,{children:"basename"})," \u7ED9 ",(0,s.jsx)(n.code,{children:"Modern.js"})," \u8FD0\u884C\u65F6\u63D0\u4F9B ",(0,s.jsx)(n.code,{children:"Router"})," \u5B9E\u4F8B\uFF0C\u5982\u679C\u662F",(0,s.jsx)(n.code,{children:"\u81EA\u63A7\u5F0F\u8DEF\u7531"}),"\u6216",(0,s.jsx)(n.code,{children:"\u624B\u52A8\u5F15\u5165\u7684 react-router-dom"})," \u90A3\u4E48\u9700\u8981\u4ECE ",(0,s.jsx)(n.code,{children:"App.tsx"})," \u7684 ",(0,s.jsx)(n.code,{children:"props"})," \u4E2D\u83B7\u53D6 ",(0,s.jsx)(n.code,{children:"basename"})," \u624B\u52A8\u4F20\u9012\u7ED9\u5F15\u5165\u7684 ",(0,s.jsx)(n.code,{children:"Router \u5B9E\u4F8B"}),"\uFF08\u5B50\u5E94\u7528\uFF09"]}),"\n"]}),"\n",(0,s.jsxs)(n.h2,{id:"\u5E38\u89C1\u95EE\u9898",children:["\u5E38\u89C1\u95EE\u9898",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u5E38\u89C1\u95EE\u9898",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["\u81EA\u67E5\u624B\u518C: ",(0,s.jsx)(n.a,{href:"https://www.garfishjs.org/issues/",target:"_blank",rel:"noopener noreferrer",children:"https://www.garfishjs.org/issues/"})]})]})}function l(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,d.useMDXComponents)(),e.components);return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}var a=l;l.__RSPRESS_PAGE_META={},l.__RSPRESS_PAGE_META["zh%2Fguides%2Ftopic-detail%2Fmicro-frontend%2Fc02-development.mdx"]={toc:[{text:"\u521B\u5EFA\u5E94\u7528",id:"\u521B\u5EFA\u5E94\u7528",depth:2},{text:"\u521B\u5EFA\u7EA6\u5B9A\u5F0F\u8DEF\u7531\u4E3B\u5E94\u7528",id:"\u521B\u5EFA\u7EA6\u5B9A\u5F0F\u8DEF\u7531\u4E3B\u5E94\u7528",depth:3},{text:"\u52A0\u8F7D\u7EA6\u5B9A\u5F0F\u8DEF\u7531\u5B50\u5E94\u7528",id:"\u52A0\u8F7D\u7EA6\u5B9A\u5F0F\u8DEF\u7531\u5B50\u5E94\u7528",depth:4},{text:"\u52A0\u8F7D\u81EA\u63A7\u5F0F\u8DEF\u7531\u5B50\u5E94\u7528",id:"\u52A0\u8F7D\u81EA\u63A7\u5F0F\u8DEF\u7531\u5B50\u5E94\u7528",depth:4},{text:"\u8DEF\u7531\u8DF3\u8F6C",id:"\u8DEF\u7531\u8DF3\u8F6C",depth:4},{text:"\u521B\u5EFA\u81EA\u63A7\u5F0F\u8DEF\u7531\u4E3B\u5E94\u7528",id:"\u521B\u5EFA\u81EA\u63A7\u5F0F\u8DEF\u7531\u4E3B\u5E94\u7528",depth:3},{text:"\u52A0\u8F7D\u5B50\u5E94\u7528",id:"\u52A0\u8F7D\u5B50\u5E94\u7528",depth:4},{text:"\u521B\u5EFA\u7EA6\u5B9A\u5F0F\u8DEF\u7531\u5B50\u5E94\u7528",id:"\u521B\u5EFA\u7EA6\u5B9A\u5F0F\u8DEF\u7531\u5B50\u5E94\u7528",depth:3},{text:"\u521B\u5EFA\u81EA\u63A7\u5F0F\u8DEF\u7531\u5B50\u5E94\u7528",id:"\u521B\u5EFA\u81EA\u63A7\u5F0F\u8DEF\u7531\u5B50\u5E94\u7528",depth:3},{text:"\u8C03\u8BD5",id:"\u8C03\u8BD5",depth:2},{text:"Modern.js \u5FAE\u524D\u7AEF\u548C\u76F4\u63A5\u4F7F\u7528 Garfish \u7684\u533A\u522B",id:"modernjs-\u5FAE\u524D\u7AEF\u548C\u76F4\u63A5\u4F7F\u7528-garfish-\u7684\u533A\u522B",depth:2},{text:"\u5E38\u89C1\u95EE\u9898",id:"\u5E38\u89C1\u95EE\u9898",depth:2}],title:"\u4F53\u9A8C\u5FAE\u524D\u7AEF",frontmatter:{sidebar_position:2,title:"\u4F53\u9A8C\u5FAE\u524D\u7AEF"}}}}]);