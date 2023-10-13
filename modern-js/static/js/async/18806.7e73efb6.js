(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["18806"],{2521:function(n,e,r){"use strict";r.r(e),r.d(e,{default:function(){return h},frontmatter:function(){return p}});var d=r("15169"),s=r("43932"),i=r("9880"),a=r("23169"),l=r("38102"),t=r("23804");function o(n){var e=Object.assign({h1:"h1",a:"a",p:"p",code:"code",h2:"h2",h3:"h3",div:"div",pre:"pre",ol:"ol",li:"li",strong:"strong",ul:"ul",h4:"h4"},(0,a.useMDXComponents)(),n.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(e.h1,{id:"\u5F00\u53D1\u4E3B\u5E94\u7528",children:["\u5F00\u53D1\u4E3B\u5E94\u7528",(0,i.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#\u5F00\u53D1\u4E3B\u5E94\u7528",children:"#"})]}),"\n",(0,i.jsxs)(e.p,{children:["\u5728\u4E0A\u4E00\u7AE0 ",(0,i.jsx)(e.a,{href:"/guides/topic-detail/micro-frontend/c02-development",children:"\u4F53\u9A8C\u5FAE\u524D\u7AEF"})," \u901A\u8FC7\u4E00\u4E2A\u793A\u4F8B\u6F14\u793A\u4E86\u5982\u4F55\u521B\u5EFA\u548C\u914D\u7F6E\u5FAE\u524D\u7AEF\u5B50\u5E94\u7528\uFF0C\u901A\u8FC7\u672C\u7AE0\u4F60\u53EF\u4EE5\u8FDB\u4E00\u6B65\u4E86\u89E3\u5982\u4F55\u5F00\u53D1\u4E3B\u5E94\u7528\uFF0C\u4EE5\u53CA\u5B83\u7684\u5E38\u89C1\u914D\u7F6E\u3002"]}),"\n",(0,i.jsxs)(e.p,{children:["\u5728\u901A\u8FC7 ",(0,i.jsx)(e.code,{children:"@modern-js/create"})," \u547D\u4EE4\u521B\u5EFA Modern.js \u5DE5\u7A0B\u540E\uFF0C\u53EF\u4EE5\u5728\u9879\u76EE\u4E2D\u6267\u884C ",(0,i.jsx)(e.code,{children:"pnpm run new"}),"\uFF08\u5B9E\u9645\u6267\u884C\u4E86 ",(0,i.jsx)(e.code,{children:"modern new"})," \u547D\u4EE4\uFF09\uFF0C\u5728\u9009\u62E9\u4E86\u300C\u5FAE\u524D\u7AEF\u300D\u6A21\u5F0F\u540E\uFF0C\u4F1A\u5B89\u88C5\u5FAE\u524D\u7AEF\u4F9D\u8D56\u4F9D\u8D56\uFF0C\u53EA\u9700\u624B\u52A8\u6CE8\u518C\u63D2\u4EF6\u5373\u53EF\u3002"]}),"\n","\n",(0,i.jsx)(l.default,{}),"\n",(0,i.jsxs)(e.h2,{id:"\u6CE8\u518C\u5B50\u5E94\u7528\u4FE1\u606F",children:["\u6CE8\u518C\u5B50\u5E94\u7528\u4FE1\u606F",(0,i.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#\u6CE8\u518C\u5B50\u5E94\u7528\u4FE1\u606F",children:"#"})]}),"\n",(0,i.jsxs)(e.p,{children:["\u5F53\u5728 ",(0,i.jsx)(e.code,{children:"masterApp"})," \u914D\u7F6E\u4E0A\u63D0\u4F9B\u4E86\u4FE1\u606F\u540E\uFF0C\u5C06\u4F1A\u8BA4\u4E3A\u8BE5\u5E94\u7528\u4E3A\u4E3B\u5E94\u7528\uFF0C\u76EE\u524D\u5B58\u5728\u4E24\u79CD\u5B50\u5E94\u7528\u4FE1\u606F\u7684\u914D\u7F6E\u65B9\u5F0F\uFF0C\u8FD9\u4E24\u79CD\u65B9\u5F0F\u5206\u522B\u5E94\u7528\u4E8E\u4E0D\u540C\u7684\u573A\u666F\u3002"]}),"\n",(0,i.jsxs)(e.h3,{id:"\u76F4\u63A5\u6CE8\u518C\u5B50\u5E94\u7528\u4FE1\u606F",children:["\u76F4\u63A5\u6CE8\u518C\u5B50\u5E94\u7528\u4FE1\u606F",(0,i.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#\u76F4\u63A5\u6CE8\u518C\u5B50\u5E94\u7528\u4FE1\u606F",children:"#"})]}),"\n",(0,i.jsx)(e.p,{children:"\u53EF\u4EE5\u76F4\u63A5\u901A\u8FC7\u914D\u7F6E\u6CE8\u518C\u5B50\u5E94\u7528\u4FE1\u606F\uFF1A"}),"\n",(0,i.jsxs)(e.div,{className:"rspress-directive tip",children:[(0,i.jsx)(e.div,{className:"rspress-directive-title",children:"\u63D0\u793A"}),(0,i.jsxs)(e.div,{className:"rspress-directive-content",children:[(0,i.jsxs)(e.p,{children:["\u53EF\u4EE5\u901A\u8FC7 API ",(0,i.jsx)(e.a,{href:"/apis/app/runtime/app/define-config",children:"defineConfig"})," \u5728\u8FD0\u884C\u65F6\u8FDB\u884C\u914D\u7F6E\u3002\n\u5F53\u53C2\u6570\u4E3A\u51FD\u6570\u65F6\u65E0\u6CD5\u88AB\u5E8F\u5217\u5316\u5230\u4EA7\u7269\u4EE3\u7801\uFF0C\u6240\u4EE5\u5728\u6D89\u53CA\u5230\u51FD\u6570\u4E4B\u7C7B\u7684\u914D\u7F6E\u65F6\u8BF7\u901A\u8FC7 defineConfig \u6765\u8FDB\u884C\u914D\u7F6E"]}),"\n"]})]}),"\n","\n",(0,i.jsx)(t.default,{}),"\n",(0,i.jsxs)(e.h3,{id:"\u81EA\u5B9A\u4E49\u8FDC\u7A0B\u5E94\u7528\u5217\u8868",children:["\u81EA\u5B9A\u4E49\u8FDC\u7A0B\u5E94\u7528\u5217\u8868",(0,i.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#\u81EA\u5B9A\u4E49\u8FDC\u7A0B\u5E94\u7528\u5217\u8868",children:"#"})]}),"\n",(0,i.jsx)(e.p,{children:"\u901A\u8FC7\u8BE5\u51FD\u6570\u53EF\u4EE5\u62C9\u53D6\u8FDC\u7A0B\u7684\u5B50\u5E94\u7528\u5217\u8868\uFF0C\u5E76\u5C06\u5176\u6CE8\u518C\u81F3\u8FD0\u884C\u65F6\u6846\u67B6\uFF1A"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-ts",meta:'title="App.tsx"',children:"defineConfig(App, {\n  masterApp: {\n    manifest: {\n      getAppList: async () => {\n        // \u53EF\u4EE5\u4ECE\u5176\u4ED6\u8FDC\u7A0B\u63A5\u53E3\u83B7\u53D6\n        return [\n          {\n            name: 'Table',\n            entry: 'http://localhost:8081',\n            // activeWhen: '/table'\n          },\n          {\n            name: 'Dashboard',\n            entry: 'http://localhost:8082',\n            // activeWhen: '/dashboard'\n          },\n        ];\n      },\n    },\n  },\n});\n"})}),"\n",(0,i.jsxs)(e.h2,{id:"\u6E32\u67D3\u5B50\u5E94\u7528",children:["\u6E32\u67D3\u5B50\u5E94\u7528",(0,i.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#\u6E32\u67D3\u5B50\u5E94\u7528",children:"#"})]}),"\n",(0,i.jsx)(e.p,{children:"\u5728\u5FAE\u524D\u7AEF\u4E2D\u5206\u4E3A\u4E24\u79CD\u52A0\u8F7D\u5B50\u5E94\u7528\u7684\u65B9\u5F0F\uFF1A"}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"\u5B50\u5E94\u7528\u7EC4\u4EF6"})," \u83B7\u53D6\u5230\u6BCF\u4E2A\u5B50\u5E94\u7528\u7684\u7EC4\u4EF6\uFF0C\u4E4B\u540E\u5C31\u53EF\u4EE5\u50CF\u4F7F\u7528\u666E\u901A\u7684 ",(0,i.jsx)(e.code,{children:"React"})," \u7EC4\u4EF6\u4E00\u6837\u6E32\u67D3\u5FAE\u524D\u7AEF\u7684\u5B50\u5E94\u7528\u3002"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"\u96C6\u4E2D\u5F0F\u8DEF\u7531"})," \u901A\u8FC7\u96C6\u4E2D\u5F0F\u7684\u8DEF\u7531\u914D\u7F6E\uFF0C\u81EA\u52A8\u6839\u636E\u5F53\u524D\u9875\u9762 ",(0,i.jsx)(e.code,{children:"pathname"})," \u6FC0\u6D3B\u6E32\u67D3\u5BF9\u5E94\u7684\u5B50\u5E94\u7528\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(e.h3,{id:"\u5B50\u5E94\u7528\u7EC4\u4EF6",children:["\u5B50\u5E94\u7528\u7EC4\u4EF6",(0,i.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#\u5B50\u5E94\u7528\u7EC4\u4EF6",children:"#"})]}),"\n",(0,i.jsxs)(e.p,{children:["\u5F00\u53D1\u8005\u4F7F\u7528 ",(0,i.jsx)(e.code,{children:"useModuleApps"})," \u65B9\u6CD5\u53EF\u4EE5\u83B7\u53D6\u5230\u5404\u4E2A\u5B50\u5E94\u7528\u7684\u7EC4\u4EF6\u3002"]}),"\n",(0,i.jsxs)(e.p,{children:["\u518D\u901A\u8FC7 ",(0,i.jsx)(e.code,{children:"router"})," \u7EC4\u4EF6\u7684\u7ED3\u5408\u8FD0\u7528\uFF0C\u5F00\u53D1\u8005\u53EF\u4EE5\u81EA\u63A7\u5F0F\u7684\u6839\u636E\u4E0D\u540C\u7684\u8DEF\u7531\u6E32\u67D3\u4E0D\u540C\u7684\u5B50\u5E94\u7528\u3002"]}),"\n",(0,i.jsx)(e.p,{children:"\u5047\u8BBE\u6211\u4EEC\u7684\u5B50\u5E94\u7528\u5217\u8868\u914D\u7F6E\u5982\u4E0B\uFF1A"}),"\n",(0,i.jsx)(l.default,{}),"\n",(0,i.jsxs)(e.p,{children:["\u7F16\u8F91\u4E3B\u5E94\u7528 ",(0,i.jsx)(e.code,{children:"App.tsx"})," \u6587\u4EF6\u5982\u4E0B\uFF1A"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-js",meta:'title="App.tsx"',children:"import { useModuleApps } from '@modern-js/plugin-garfish/runtime';\n\nimport {\n  RouterProvider,\n  Route,\n  createBrowserRouter,\n  createRoutesFromElements,\n  BrowserRouter,\n  Link,\n  Outlet,\n} from '@modern-js/runtime/router';\n\nconst AppLayout = () => (\n  <>\n    <div>\n      <Link to={'/table'}>\u52A0\u8F7D\u7EA6\u5B9A\u5F0F\u8DEF\u7531\u5B50\u5E94\u7528</Link>\n    </div>\n    <div>\n      <Link to={'/dashboard'}>\u52A0\u8F7D\u81EA\u63A7\u5F0F\u8DEF\u7531\u5B50\u5E94\u7528</Link>\n    </div>\n    <div>\n      <Link to={'/'}>\u5378\u8F7D\u5B50\u5E94\u7528</Link>\n    </div>\n    <Outlet />\n  </>\n);\n\nexport default () => {\n  const { apps, MApp } = useModuleApps();\n\n  // \u4F7F\u7528\u7684\u4E0D\u662F MApp \u7EC4\u4EF6\uFF0C\u9700\u8981\u4F7F\u7528 createBrowserRouter \u6765\u521B\u5EFA\u8DEF\u7531\n  const router = createBrowserRouter(\n    createRoutesFromElements(\n      <Route path=\"/\" element={<AppLayout />}>\n        {apps.map(app => {\n          const { Component } = app;\n          // \u6A21\u7CCA\u5339\u914D\uFF0Cpath \u9700\u8981\u5199\u6210\u7C7B\u4F3C abc/* \u7684\u6A21\u5F0F\n          return (\n            <Route\n              key={app.name}\n              path={`${app.name.toLowerCase()}/*`}\n              element={\n                <Component\n                  loadable={{\n                    loading: ({ pastDelay, error }: any) => {\n                      if (error) {\n                        return <div>error: {error?.message}</div>;\n                      } else if (pastDelay) {\n                        return <div>loading</div>;\n                      } else {\n                        return null;\n                      }\n                    },\n                  }}\n                />\n              }\n            />\n          );\n        })}\n      </Route>,\n    ),\n  );\n\n  return (\n    // \u65B9\u6CD5\u4E00\uFF1A\u4F7F\u7528 MApp \u81EA\u52A8\u6839\u636E\u914D\u7F6E\u7684 activeWhen \u53C2\u6570\u52A0\u8F7D\u5B50\u5E94\u7528(\u672C\u9879\u76EE\u914D\u7F6E\u5728 modern.config.ts \u4E2D)\n    // <BrowserRouter>\n    //   <MApp />\n    // </BrowserRouter>\n\n    // \u65B9\u6CD5\u4E8C\uFF1A\u624B\u52A8\u5199 Route \u7EC4\u4EF6\u65B9\u5F0F\u52A0\u8F7D\u5B50\u5E94\u7528\uFF0C\u65B9\u4FBF\u4E8E\u9700\u8981\u9274\u6743\u7B49\u9700\u8981\u524D\u7F6E\u64CD\u4F5C\u7684\u573A\u666F\n    <>\n      <RouterProvider router={router} />\n    </>\n  );\n};\n"})}),"\n",(0,i.jsxs)(e.p,{children:["\u8FD9\u91CC\u901A\u8FC7 ",(0,i.jsx)(e.code,{children:"Route"})," \u7EC4\u4EF6\u81EA\u5B9A\u4E49\u4E86 ",(0,i.jsx)(e.strong,{children:"Table"})," \u7684\u6FC0\u6D3B\u8DEF\u7531\u4E3A ",(0,i.jsx)(e.strong,{children:"/table"}),"\uFF0C ",(0,i.jsx)(e.strong,{children:"Dashboard"})," \u7684\u6FC0\u6D3B\u8DEF\u7531\u4E3A ",(0,i.jsx)(e.strong,{children:"/dashboard"}),"\u3002"]}),"\n",(0,i.jsxs)(e.h3,{id:"\u96C6\u4E2D\u5F0F\u8DEF\u7531",children:["\u96C6\u4E2D\u5F0F\u8DEF\u7531",(0,i.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#\u96C6\u4E2D\u5F0F\u8DEF\u7531",children:"#"})]}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"\u96C6\u4E2D\u5F0F\u8DEF\u7531"})," \u662F\u5C06\u5B50\u5E94\u7528\u7684\u6FC0\u6D3B\u8DEF\u7531\u96C6\u4E2D\u914D\u7F6E\u7684\u65B9\u5F0F\u3002\u6211\u4EEC\u7ED9\u5B50\u5E94\u7528\u5217\u8868\u4FE1\u606F\u6DFB\u52A0 ",(0,i.jsx)(e.code,{children:"activeWhen"})," \u5B57\u6BB5\u6765\u542F\u7528 ",(0,i.jsx)(e.strong,{children:"\u96C6\u4E2D\u5F0F\u8DEF\u7531"}),"\u3002"]}),"\n",(0,i.jsx)(t.default,{}),"\n",(0,i.jsxs)(e.p,{children:["\u7136\u540E\u5728\u4E3B\u5E94\u7528\u4E2D\u4F7F\u7528 ",(0,i.jsx)(e.code,{children:"useModuleApp"})," \u65B9\u6CD5\u83B7\u53D6 ",(0,i.jsx)(e.code,{children:"MApp"})," \u7EC4\u4EF6, \u5E76\u5728\u4E3B\u5E94\u7528\u6E32\u67D3 ",(0,i.jsx)(e.code,{children:"MApp"}),"\u3002"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-tsx",meta:"title=\u4E3B\u5E94\u7528\uFF1AApp.tsx",children:"import { useModuleApp } from '@modern-js/plugin-garfish/runtime';\n\nfunction App() {\n  const { MApp } = useModuleApps();\n\n  return (\n    <div>\n      <MApp />\n    </div>\n  );\n}\n"})}),"\n",(0,i.jsxs)(e.p,{children:["\u8FD9\u6837\u542F\u52A8\u5E94\u7528\u540E\uFF0C\u8BBF\u95EE ",(0,i.jsx)(e.code,{children:"/table"})," \u8DEF\u7531\uFF0C\u4F1A\u6E32\u67D3 ",(0,i.jsx)(e.code,{children:"Table"})," \u5B50\u5E94\u7528\uFF0C\u8BBF\u95EE ",(0,i.jsx)(e.code,{children:"/dashboard"})," \u8DEF\u7531\uFF0C\u4F1A\u6E32\u67D3 ",(0,i.jsx)(e.code,{children:"Dashboard"})," \u5B50\u5E94\u7528\u3002"]}),"\n",(0,i.jsxs)(e.h3,{id:"\u4E24\u79CD\u6A21\u5F0F\u6DF7\u7528",children:["\u4E24\u79CD\u6A21\u5F0F\u6DF7\u7528",(0,i.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#\u4E24\u79CD\u6A21\u5F0F\u6DF7\u7528",children:"#"})]}),"\n",(0,i.jsxs)(e.p,{children:["\u5F53\u7136 ",(0,i.jsx)(e.strong,{children:"\u5B50\u5E94\u7528\u7EC4\u4EF6"})," \u548C ",(0,i.jsx)(e.strong,{children:"\u96C6\u4E2D\u5F0F\u8DEF\u7531"})," \u662F\u53EF\u4EE5\u6DF7\u5408\u4F7F\u7528\u7684\u3002"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\u4E00\u90E8\u5206\u5B50\u5E94\u7528\u4F5C\u4E3A ",(0,i.jsx)(e.strong,{children:"\u5B50\u5E94\u7528\u7EC4\u4EF6"})," \u6FC0\u6D3B\uFF0C\u53E6\u5916\u4E00\u90E8\u5206\u4F5C\u4E3A ",(0,i.jsx)(e.strong,{children:"\u96C6\u4E2D\u5F0F\u8DEF\u7531"})," \u6FC0\u6D3B\u3002"]}),"\n",(0,i.jsxs)(e.li,{children:["\u4E00\u90E8\u5206\u5B50\u5E94\u7528\u65E2\u53EF\u4EE5\u4F5C\u4E3A ",(0,i.jsx)(e.strong,{children:"\u96C6\u4E2D\u5F0F\u8DEF\u7531"})," \u6FC0\u6D3B\uFF0C\u4E5F\u53EF\u4EE5\u4F5C\u4E3A ",(0,i.jsx)(e.strong,{children:"\u5B50\u5E94\u7528\u7EC4\u4EF6"})," \u6FC0\u6D3B\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(e.h3,{id:"\u6DFB\u52A0-loading",children:["\u6DFB\u52A0 loading",(0,i.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#\u6DFB\u52A0-loading",children:"#"})]}),"\n",(0,i.jsxs)(e.p,{children:["\u901A\u8FC7\u914D\u7F6E ",(0,i.jsx)(e.code,{children:"loadable"})," \u914D\u7F6E\uFF0C\u53EF\u4EE5\u4E3A\u300C\u96C6\u4E2D\u5F0F\u8DEF\u7531\u300D\u3001\u300C\u5B50\u5E94\u7528\u300D\u6DFB\u52A0 loading \u7EC4\u4EF6\uFF0C\u5E76\u53EF\u4EE5\u8003\u8651\u9519\u8BEF\u3001\u8D85\u65F6\u3001\u95EA\u70C1\u7B49\u60C5\u51B5\u7684\u51FA\u73B0\uFF0C\u4ECE\u800C\u4E3A\u7528\u6237\u63D0\u4F9B\u66F4\u597D\u7684\u7528\u6237\u4F53\u9A8C\u3002\u8BE5\u529F\u80FD\u7684\u8BBE\u8BA1\u4E0E\u5B9E\u73B0\u53C2\u8003\u81F3 ",(0,i.jsx)(e.a,{href:"https://github.com/jamiebuilds/react-loadable",target:"_blank",rel:"noopener noreferrer",children:"react-loadable"}),"\uFF0C\u57FA\u672C\u529F\u80FD\u8F83\u4E3A\u76F8\u4F3C\u3002"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-tsx",children:"function Loading() {\n  return <div>Loading...</div>;\n}\n\nfunction App(){\n  return <>\n    <Table\n      loadable={{\n        loading: Loading,\n      }}\n    />\n  <>\n}\n"})}),"\n",(0,i.jsxs)(e.h4,{id:"\u589E\u52A0\u9519\u8BEF\u72B6\u6001",children:["\u589E\u52A0\u9519\u8BEF\u72B6\u6001",(0,i.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#\u589E\u52A0\u9519\u8BEF\u72B6\u6001",children:"#"})]}),"\n",(0,i.jsxs)(e.p,{children:["\u5F53\u5FAE\u524D\u7AEF\u5B50\u5E94\u7528\u52A0\u8F7D\u5931\u8D25\u6216\u6E32\u67D3\u5931\u8D25\u65F6\uFF0C",(0,i.jsx)(e.code,{children:"loading component"})," \u5C06\u4F1A\u63A5\u6536 ",(0,i.jsx)(e.code,{children:"error"})," \u53C2\u6570\uFF08\u82E5\u6CA1\u6709\u9519\u8BEF\u65F6 error \u662F null\uFF09"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-tsx",children:"function Loading({ error }) {\n  if (error) {\n    return <div>Error msg {error?.message}</div>;\n  } else {\n    return <div>Loading...</div>;\n  }\n}\n"})}),"\n",(0,i.jsxs)(e.h4,{id:"\u907F\u514D-loading-\u95EA\u9000",children:["\u907F\u514D loading \u95EA\u9000",(0,i.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#\u907F\u514D-loading-\u95EA\u9000",children:"#"})]}),"\n",(0,i.jsx)(e.p,{children:"\u6709\u65F6 loading \u7EC4\u4EF6\u7684\u663E\u793A\u65F6\u95F4\u53EF\u80FD\u5C0F\u4E8E 200ms\uFF0C\u8FD9\u4E2A\u65F6\u5019\u4F1A\u51FA\u73B0 loading \u7EC4\u4EF6\u95EA\u9000\u7684\u60C5\u51B5\u3002\u8BB8\u591A\u7528\u6237\u7814\u7A76\u8BC1\u660E\uFF0Cloading \u95EA\u9000\u7684\u60C5\u51B5\u4F1A\u5BFC\u81F4\u7528\u6237\u611F\u77E5\u52A0\u8F7D\u5185\u5BB9\u7684\u8017\u65F6\u6BD4\u5B9E\u9645\u8017\u65F6\u66F4\u957F\uFF0C\u5728 loading \u5C0F\u4E8E 200ms \u65F6\uFF0C\u4E0D\u5C55\u793A\u5185\u5BB9\uFF0C\u7528\u6237\u4F1A\u8BA4\u4E3A\u5B83\u66F4\u5FEB\u3002"}),"\n",(0,i.jsxs)(e.p,{children:["\u6240\u4EE5 loading \u7EC4\u4EF6\u8FD8\u63D0\u4F9B\u4E86 ",(0,i.jsx)(e.code,{children:"pastDelay"})," \u53C2\u6570\uFF0C\u8D85\u8FC7\u8BBE\u7F6E\u7684\u5EF6\u8FDF\u5C55\u793A\u65F6\u624D\u4F1A\u4E3A true\uFF0C\u53EF\u4EE5\u901A\u8FC7 ",(0,i.jsx)(e.code,{children:"delay"})," \u53C2\u6570\u8BBE\u7F6E\u5EF6\u8FDF\u7684\u65F6\u957F"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-tsx",children:"function Loading({ error, pastDelay }) {\n  if (error) {\n    return <div>Error! {error?.message}</div>;\n  } else if (pastDelay) {\n    return <div>Loading...</div>;\n  } else {\n    return null;\n  }\n}\n"})}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.code,{children:"delay"})," \u7684\u9ED8\u8BA4\u503C\u4E3A ",(0,i.jsx)(e.code,{children:"200ms"}),"\uFF0C\u53EF\u4EE5\u901A\u8FC7 ",(0,i.jsx)(e.code,{children:"loadable"})," \u4E2D\u7684 ",(0,i.jsx)(e.code,{children:"delay"})," \u6765\u8BBE\u7F6E\u5EF6\u8FDF\u5C55\u793A\u7684\u65F6\u95F4"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-tsx",children:"\nfunction App(){\n  return <>\n    <Table\n      loadable={{\n        loading: Loading,\n        delay: 300 // 0.3 seconds\n      }}\n    />\n  <>\n}\n"})}),"\n",(0,i.jsxs)(e.h4,{id:"\u589E\u52A0\u8D85\u65F6\u72B6\u6001",children:["\u589E\u52A0\u8D85\u65F6\u72B6\u6001",(0,i.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#\u589E\u52A0\u8D85\u65F6\u72B6\u6001",children:"#"})]}),"\n",(0,i.jsx)(e.p,{children:"\u6709\u65F6\u56E0\u4E3A\u7F51\u7EDC\u7684\u539F\u56E0\uFF0C\u4ECE\u800C\u5BFC\u81F4\u5FAE\u524D\u7AEF\u5B50\u5E94\u7528\u52A0\u8F7D\u5931\u8D25\uFF0C\u4ECE\u800C\u5BFC\u81F4\u4E00\u76F4\u5C55\u793A loading \u7684\u72B6\u6001\uFF0C\u8FD9\u5BF9\u4E8E\u7528\u6237\u800C\u8A00\u975E\u5E38\u7CDF\u7CD5\uFF0C\u56E0\u4E3A\u4ED6\u4EEC\u4E0D\u77E5\u9053\u5408\u9002\u624D\u4F1A\u83B7\u5F97\u5177\u4F53\u7684\u54CD\u5E94\uFF0C\u4ED6\u4EEC\u662F\u5426\u9700\u8981\u5237\u65B0\u9875\u9762\uFF0C\u901A\u8FC7\u589E\u52A0\u8D85\u65F6\u72B6\u6001\u53EF\u4EE5\u5F88\u597D\u7684\u89E3\u51B3\u8BE5\u95EE\u9898\u3002"}),"\n",(0,i.jsxs)(e.p,{children:["loading \u7EC4\u4EF6\u5728\u8D85\u65F6\u65F6\u4F1A\u83B7\u5F97 ",(0,i.jsx)(e.code,{children:"timeOut"})," \u53C2\u6570\uFF0C\u5F53\u5FAE\u524D\u7AEF\u5E94\u7528\u52A0\u8F7D\u8D85\u65F6\u65F6\u5C06\u4F1A\u83B7\u5F97 ",(0,i.jsx)(e.code,{children:"timeOut"})," \u5C5E\u6027\u503C\u4E3A true"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-tsx",children:"function Loading({ error, timeOut, pastDelay }) {\n  if (error) {\n    return <div>Error! {error?.message}</div>;\n  } else if (timeOut) {\n    return <div>Loading timed out, please refresh the page... </div>;\n  } else if (pastDelay) {\n    return <div>Loading...</div>;\n  } else {\n    return null;\n  }\n}\n"})}),"\n",(0,i.jsxs)(e.p,{children:["\u8D85\u65F6\u72B6\u6001\u662F\u5173\u95ED\u7684\uFF0C\u53EF\u4EE5\u901A\u8FC7\u5728 ",(0,i.jsx)(e.code,{children:"loadable"})," \u4E2D\u8BBE\u7F6E ",(0,i.jsx)(e.code,{children:"timeout"})," \u53C2\u6570\u5F00\u542F"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-tsx",children:"\nfunction App(){\n  return <>\n    <Table\n      loadable={{\n        loading: Loading,\n        timeOut: 10000 // 10s\n      }}\n    />\n  <>\n}\n"})})]})}function c(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=Object.assign({},(0,a.useMDXComponents)(),n.components).wrapper;return e?(0,i.jsx)(e,(0,s._)((0,d._)({},n),{children:(0,i.jsx)(o,(0,d._)({},n))})):o(n)}var h=c;c.__RSPRESS_PAGE_META={},c.__RSPRESS_PAGE_META["zh%2Fguides%2Ftopic-detail%2Fmicro-frontend%2Fc03-main-app.mdx"]={toc:[{text:"\u6CE8\u518C\u5B50\u5E94\u7528\u4FE1\u606F",id:"\u6CE8\u518C\u5B50\u5E94\u7528\u4FE1\u606F",depth:2},{text:"\u76F4\u63A5\u6CE8\u518C\u5B50\u5E94\u7528\u4FE1\u606F",id:"\u76F4\u63A5\u6CE8\u518C\u5B50\u5E94\u7528\u4FE1\u606F",depth:3},{text:"\u81EA\u5B9A\u4E49\u8FDC\u7A0B\u5E94\u7528\u5217\u8868",id:"\u81EA\u5B9A\u4E49\u8FDC\u7A0B\u5E94\u7528\u5217\u8868",depth:3},{text:"\u6E32\u67D3\u5B50\u5E94\u7528",id:"\u6E32\u67D3\u5B50\u5E94\u7528",depth:2},{text:"\u5B50\u5E94\u7528\u7EC4\u4EF6",id:"\u5B50\u5E94\u7528\u7EC4\u4EF6",depth:3},{text:"\u96C6\u4E2D\u5F0F\u8DEF\u7531",id:"\u96C6\u4E2D\u5F0F\u8DEF\u7531",depth:3},{text:"\u4E24\u79CD\u6A21\u5F0F\u6DF7\u7528",id:"\u4E24\u79CD\u6A21\u5F0F\u6DF7\u7528",depth:3},{text:"\u6DFB\u52A0 loading",id:"\u6DFB\u52A0-loading",depth:3},{text:"\u589E\u52A0\u9519\u8BEF\u72B6\u6001",id:"\u589E\u52A0\u9519\u8BEF\u72B6\u6001",depth:4},{text:"\u907F\u514D loading \u95EA\u9000",id:"\u907F\u514D-loading-\u95EA\u9000",depth:4},{text:"\u589E\u52A0\u8D85\u65F6\u72B6\u6001",id:"\u589E\u52A0\u8D85\u65F6\u72B6\u6001",depth:4}],title:"\u5F00\u53D1\u4E3B\u5E94\u7528"};var p={sidebar_position:3,title:"\u5F00\u53D1\u4E3B\u5E94\u7528"}}}]);