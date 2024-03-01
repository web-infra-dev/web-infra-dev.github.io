/*! For license information please see 33525.52bb4339.js.LICENSE.txt */
(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["33525"],{7600:function(e,n,r){"use strict";r.r(n);var t=r("39980"),s=r("96954");function a(e){let n=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",pre:"pre",code:"code",h3:"h3",strong:"strong"},(0,s.useMDXComponents)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.h1,{id:"usemoduleapps",children:["useModuleApps",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#usemoduleapps",children:"#"})]}),"\n",(0,t.jsx)(n.p,{children:"\u8FD4\u56DE\u6240\u6709\u5FAE\u524D\u7AEF\u5B50\u5E94\u7528\u7684 React \u7EC4\u4EF6\uFF0C\u7528\u4E8E\u53EF\u81EA\u7531\u63A7\u5236\u8DEF\u7531\u3002"}),"\n",(0,t.jsxs)(n.h2,{id:"\u4F7F\u7528\u59FF\u52BF",children:["\u4F7F\u7528\u59FF\u52BF",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u4F7F\u7528\u59FF\u52BF",children:"#"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"import { useModuleApps } from '@modern-js/plugin-garfish/runtime';\n"})}),"\n",(0,t.jsxs)(n.h2,{id:"\u51FD\u6570\u7B7E\u540D",children:["\u51FD\u6570\u7B7E\u540D",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u51FD\u6570\u7B7E\u540D",children:"#"})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"function useModuleApps(): Record<string, React.FC<any>>"})}),"\n",(0,t.jsx)(n.p,{children:"\u5206\u522B\u8FD4\u56DE\u5305\u88F9\u6BCF\u4E2A\u5B50\u5E94\u7528\u540E\u7684 React \u7EC4\u4EF6\u3002"}),"\n",(0,t.jsxs)(n.h2,{id:"\u793A\u4F8B",children:["\u793A\u4F8B",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u793A\u4F8B",children:"#"})]}),"\n",(0,t.jsx)(n.p,{children:"\u9700\u8981\u5148\u914D\u7F6E\u5FAE\u524D\u7AEF\u5B50\u5E94\u7528\u4FE1\u606F\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",meta:'title="modern.config.ts"',children:"import { appTools, defineConfig } from '@modern-js/app-tools';\nimport { garfishPlugin } from '@modern-js/plugin-garfish';\n\nexport default defineConfig({\n  runtime: {\n    router: true,\n    masterApp: {\n      apps: [{\n        name: 'Table',\n        entry: 'http://localhost:8081',\n        // activeWhen: '/table'\n      }, {\n        name: 'Dashboard',\n        entry: 'http://localhost:8082'\n        // activeWhen: '/dashboard'\n      }]\n    },\n  },\n  plugins: [appTools(), garfishPlugin()],\n});\n\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u8FD9\u91CC\u6F14\u793A\u4E3B\u5E94\u7528\u4E3A\u81EA\u63A7\u5F0F\u8DEF\u7531\u7684\u573A\u666F\uFF0C\u5168\u90E8\u573A\u666F\u53C2\u8003 ",(0,t.jsx)(n.a,{href:"/guides/topic-detail/micro-frontend/c02-development",children:"\u4F53\u9A8C\u5FAE\u524D\u7AEF"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",meta:"title=App.tsx",children:"function App() {\n  const { apps, MApp, Table, Dashboard } = useModuleApps();\n\n  // \u4F7F\u7528\u7684\u4E0D\u662F MApp \u7EC4\u4EF6\uFF0C\u9700\u8981\u4F7F\u7528 createBrowserRouter \u6765\u521B\u5EFA\u8DEF\u7531\n  const router = createBrowserRouter(\n    createRoutesFromElements(\n      <Route path=\"/\" element={<AppLayout />}>\n        <Route key={'table'} path={'table/*'} element={<Table />} />\n        <Route key={'dashboard'} path={'dashboard/*'} element={<Dashboard />} />\n      </Route>\n    )\n  );\n\n  return (\n    // \u65B9\u6CD5\u4E00\uFF1A\u4F7F\u7528 MApp \u81EA\u52A8\u6839\u636E\u914D\u7F6E\u7684 activeWhen \u53C2\u6570\u52A0\u8F7D\u5B50\u5E94\u7528(\u672C\u9879\u76EE\u914D\u7F6E\u5728 modern.config.ts \u4E2D)\n    // <BrowserRouter>\n    //   <MApp />\n    // </BrowserRouter>\n\n    // \u65B9\u6CD5\u4E8C\uFF1A\u624B\u52A8\u5199 Route \u7EC4\u4EF6\u65B9\u5F0F\u52A0\u8F7D\u5B50\u5E94\u7528\uFF0C\u65B9\u4FBF\u4E8E\u9700\u8981\u9274\u6743\u7B49\u9700\u8981\u524D\u7F6E\u64CD\u4F5C\u7684\u573A\u666F\n    <>\n      <RouterProvider router={router} />\n    </>\n  );\n}\n\ndefineConfig(App, {\n  masterApp: {\n    apps: [\n      {\n        // name \u533A\u5206\u5927\u5C0F\u5199\uFF0Cname \u63D0\u4F9B\u7684\u662F\u4EC0\u4E48 useModuleApps \u8FD4\u56DE\u7684\u5C31\u662F\u4EC0\u4E48\n        name: 'Table',\n        entry: 'http://127.0.0.1:8081/',\n      },\n      {\n        name: 'Dashboard',\n        entry: 'http://localhost:8082',\n      },\n    ],\n  },\n});\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u901A\u8FC7 ",(0,t.jsx)(n.code,{children:"useModuleApps()"})," \u83B7\u53D6\u5230 ",(0,t.jsx)(n.code,{children:"Table"})," \u548C ",(0,t.jsx)(n.code,{children:"Dashboard"})," \u5B50\u5E94\u7528\u7EC4\u4EF6\uFF08\u540D\u79F0\u548C\u914D\u7F6E\u91CC\u7684 ",(0,t.jsx)(n.code,{children:"name"})," \u5B57\u6BB5\u5BF9\u5E94\uFF09\uFF0C\u4E4B\u540E\u5C31\u53EF\u4EE5\u50CF\u4F7F\u7528\u666E\u901A\u7684 React \u7EC4\u4EF6\u4E00\u6837\u53BB\u52A0\u8F7D\u5B50\u5E94\u7528\u3002"]}),"\n",(0,t.jsxs)(n.h3,{id:"\u96C6\u4E2D\u5F0F\u8DEF\u7531",children:["\u96C6\u4E2D\u5F0F\u8DEF\u7531",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u96C6\u4E2D\u5F0F\u8DEF\u7531",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"\u96C6\u4E2D\u5F0F\u8DEF\u7531"})," \u662F\u5C06\u5B50\u5E94\u7528\u7684\u6FC0\u6D3B\u8DEF\u7531\u96C6\u4E2D\u914D\u7F6E\u7684\u65B9\u5F0F\u3002\u6211\u4EEC\u7ED9\u5B50\u5E94\u7528\u5217\u8868\u4FE1\u606F\u6DFB\u52A0 ",(0,t.jsx)(n.code,{children:"activeWhen"})," \u5B57\u6BB5\u6765\u542F\u7528 ",(0,t.jsx)(n.strong,{children:"\u96C6\u4E2D\u5F0F\u8DEF\u7531"}),"\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",meta:'title="src/App.tsx"',children:"import { defineConfig } from '@modern-js/runtime';\n\ndefineConfig(App, {\n  masterApp: {\n    apps: [{\n      name: 'Table',\n      entry: 'http://localhost:8081',\n      // activeWhen: '/table'\n    }, {\n      name: 'Dashboard',\n      entry: 'http://localhost:8082'\n      // activeWhen: '/dashboard'\n    }]\n  },\n});\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u7136\u540E\u5728\u4E3B\u5E94\u7528\u4E2D\u4F7F\u7528 ",(0,t.jsx)(n.code,{children:"useModuleApp"})," \u65B9\u6CD5\u83B7\u53D6 ",(0,t.jsx)(n.code,{children:"MApp"})," \u7EC4\u4EF6, \u5E76\u5728\u4E3B\u5E94\u7528\u6E32\u67D3 ",(0,t.jsx)(n.code,{children:"MApp"}),"\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",meta:"title=\u4E3B\u5E94\u7528\uFF1AApp.tsx",children:"import { useModuleApp } from '@modern-js/plugin-runtime';\n\nfunction App() {\n  const { MApp } = useModuleApps();\n\n  return (\n    <div>\n      <MApp />\n    </div>\n  );\n}\n\ndefineConfig(App, {\n  masterApp: {\n    apps: [\n      {\n        // name \u533A\u5206\u5927\u5C0F\u5199\uFF0Cname \u63D0\u4F9B\u7684\u662F\u4EC0\u4E48 useModuleApps \u8FD4\u56DE\u7684\u5C31\u662F\u4EC0\u4E48\n        name: 'Table',\n        activeWhen: '/table',\n        entry: 'http://127.0.0.1:8081/',\n      },\n      {\n        name: 'Dashboard',\n        activeWhen: '/dashboard',\n        entry: 'http://localhost:8082',\n      },\n    ],\n  },\n});\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u8FD9\u6837\u542F\u52A8\u5E94\u7528\u540E\uFF0C\u8BBF\u95EE ",(0,t.jsx)(n.code,{children:"/dashboard"})," \u8DEF\u7531\uFF0C\u4F1A\u6E32\u67D3 ",(0,t.jsx)(n.code,{children:"Dashboard"})," \u5B50\u5E94\u7528\uFF0C\u8BBF\u95EE ",(0,t.jsx)(n.code,{children:"/table"})," \u8DEF\u7531\uFF0C\u4F1A\u6E32\u67D3 ",(0,t.jsx)(n.code,{children:"Table"})," \u5B50\u5E94\u7528\u3002"]}),"\n",(0,t.jsxs)(n.h2,{id:"\u52A0\u8F7D\u52A8\u753B",children:["\u52A0\u8F7D\u52A8\u753B",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u52A0\u8F7D\u52A8\u753B",children:"#"})]}),"\n",(0,t.jsx)(n.p,{children:"\u53EF\u4EE5\u901A\u8FC7\u4EE5\u4E0B\u65B9\u5F0F\uFF0C\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u52A0\u8F7D\u8FC7\u7A0B\u7684\u8FC7\u6E21\u52A8\u753B\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",meta:'title="App.tsx"',children:"import { useModuleApps } from '@modern-js/plugin-garfish/runtime';\n\nimport { RouterProvider, Route, createBrowserRouter, createRoutesFromElements, BrowserRouter, Link, Outlet } from '@modern-js/runtime/router';\n\nconst AppLayout = () => (\n  <>\n    <div><Link to={'/table'}>\u52A0\u8F7D\u7EA6\u5B9A\u5F0F\u8DEF\u7531\u5B50\u5E94\u7528</Link></div>\n    <div><Link to={'/dashboard'}>\u52A0\u8F7D\u81EA\u63A7\u5F0F\u8DEF\u7531\u5B50\u5E94\u7528</Link></div>\n    <div><Link to={'/'}>\u5378\u8F7D\u5B50\u5E94\u7528</Link></div>\n    <Outlet />\n  </>\n)\n\nexport default () => {\n  const { apps } = useModuleApps();\n\n  // \u4F7F\u7528\u7684\u4E0D\u662F MApp \u7EC4\u4EF6\uFF0C\u9700\u8981\u4F7F\u7528 createBrowserRouter \u6765\u521B\u5EFA\u8DEF\u7531\n  const router = createBrowserRouter(\n    createRoutesFromElements(\n      <Route path=\"/\" element={<AppLayout />}>\n        {apps.map(app => {\n          const { Component } = app;\n          // \u6A21\u7CCA\u5339\u914D\uFF0Cpath \u9700\u8981\u5199\u6210\u7C7B\u4F3C abc/* \u7684\u6A21\u5F0F\n          return (\n            <Route\n              key={app.name}\n              path={`${app.name.toLowerCase()}/*`}\n              element={\n              <Component\n                loadable={{\n                  loading: ({ pastDelay, error }: any) => {\n                    if (error) {\n                      return <div>error: {error?.message}</div>;\n                    } else if (pastDelay) {\n                      return <div>loading</div>;\n                    } else {\n                      return null;\n                    }\n                  },\n                }}\n              />\n              }\n            />\n          )\n        })}\n      </Route>\n    )\n  );\n\n  return (\n    <>\n      <RouterProvider router={router} />\n    </>\n  );\n};\n"})})]})}function o(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,s.useMDXComponents)(),e.components);return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}n.default=o,o.__RSPRESS_PAGE_META={},o.__RSPRESS_PAGE_META["zh%2Fapis%2Fapp%2Fruntime%2Fcore%2Fuse-module-apps.mdx"]={toc:[{text:"\u4F7F\u7528\u59FF\u52BF",id:"\u4F7F\u7528\u59FF\u52BF",depth:2},{text:"\u51FD\u6570\u7B7E\u540D",id:"\u51FD\u6570\u7B7E\u540D",depth:2},{text:"\u793A\u4F8B",id:"\u793A\u4F8B",depth:2},{text:"\u96C6\u4E2D\u5F0F\u8DEF\u7531",id:"\u96C6\u4E2D\u5F0F\u8DEF\u7531",depth:3},{text:"\u52A0\u8F7D\u52A8\u753B",id:"\u52A0\u8F7D\u52A8\u753B",depth:2}],title:"useModuleApps",frontmatter:{title:"useModuleApps"}}}}]);