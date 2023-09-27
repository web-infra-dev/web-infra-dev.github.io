(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["51596"],{62909:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return h}});var r,i=t("10310"),a=t("81904"),o=t("98638"),s=t("21968"),d=t("14017"),l=t("20181");function c(e){let n=Object.assign({h1:"h1",a:"a",p:"p",code:"code",h2:"h2",h3:"h3",div:"div",pre:"pre",ol:"ol",li:"li",strong:"strong",ul:"ul",h4:"h4"},(0,s.useMDXComponents)(),e.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.h1,{id:"develop-main-app",children:["Develop Main App",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#develop-main-app",children:"#"})]}),"\n",(0,o.jsxs)(n.p,{children:["In the previous ",(0,o.jsx)(n.a,{href:"/guides/topic-detail/micro-frontend/c02-development",children:"Experience micro frontend"}),", an example was used to demonstrate how to create and configure micro frontend sub-applications. Through this chapter, you can further understand how to develop the main application, and its common configuration."]}),"\n",(0,o.jsxs)(n.p,{children:["After creating an Modern.js project through the ",(0,o.jsx)(n.code,{children:"@modern-js/create"})," command, you can execute ",(0,o.jsx)(n.code,{children:"pnpm run new"})," in the project (the ",(0,o.jsx)(n.code,{children:"modern new"})," command is actually executed). After selecting the \u300Cmicro frontend\u300D mode, the micro frontend will be installed. Dependencies, just register the plugin manually."]}),"\n","\n",(0,o.jsx)(d.default,{}),"\n",(0,o.jsxs)(n.h2,{id:"register-sub-app",children:["Register Sub-app",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#register-sub-app",children:"#"})]}),"\n",(0,o.jsxs)(n.p,{children:["When the information is provided on the ",(0,o.jsx)(n.code,{children:"masterApp"})," configuration, the application will be considered the main application. At present, there are two configuration methods for sub-app information, and these two methods are applied to different scenarios."]}),"\n",(0,o.jsxs)(n.h3,{id:"register-sub-app-info-directly",children:["Register sub-app info directly",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#register-sub-app-info-directly",children:"#"})]}),"\n",(0,o.jsx)(n.p,{children:"You can register the sub-application information directly through the configuration:"}),"\n",(0,o.jsxs)(n.div,{className:"rspress-directive tip",children:[(0,o.jsx)(n.div,{className:"rspress-directive-title",children:"TIP"}),(0,o.jsxs)(n.div,{className:"rspress-directive-content",children:[(0,o.jsxs)(n.p,{children:["It can be configured at runtime via the API ",(0,o.jsx)(n.a,{href:"/apis/app/runtime/app/define-config",children:"defineConfig"}),"."]}),"\n",(0,o.jsx)(n.p,{children:"When the parameter is a function, it cannot be serialized to the output code, so please configure it through defineConfig when it comes to configuration such as functions\n"})]})]}),"\n","\n",(0,o.jsx)(l.default,{}),"\n",(0,o.jsxs)(n.h3,{id:"custom-remote-app-list",children:["Custom remote app list",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#custom-remote-app-list",children:"#"})]}),"\n",(0,o.jsx)(n.p,{children:"This function allows you to pull a list of remote child applications and register them with the runtime framework:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",meta:'title="App.tsx"',children:"defineConfig(App, {\n  masterApp: {\n    manifest: {\n      getAppList: async () => {\n        // get from remote api\n        return [\n          {\n            name: 'Table',\n            entry: 'http://localhost:8081',\n            // activeWhen: '/table'\n          },\n          {\n            name: 'Dashboard',\n            entry: 'http://localhost:8082',\n            // activeWhen: '/dashboard'\n          },\n        ];\n      },\n    },\n  },\n});\n"})}),"\n",(0,o.jsxs)(n.h2,{id:"renderer-sub-app",children:["Renderer sub-app",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#renderer-sub-app",children:"#"})]}),"\n",(0,o.jsx)(n.p,{children:"There are two ways to load sub-app in micro frontend:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"**Sub-app component ** Get the components of each sub-app, and then you can render the sub-app of micro frontend just like using ordinary'React 'components."}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Centralized routing"})," Through centralized routing configuration, the corresponding sub-app of rendering is automatically activated according to the current page ",(0,o.jsx)(n.code,{children:"pathname"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(n.h3,{id:"sub-app-component",children:["Sub-app component",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#sub-app-component",children:"#"})]}),"\n",(0,o.jsxs)(n.p,{children:["Developers can use the ",(0,o.jsx)(n.code,{children:"useModuleApps"})," method to obtain the components of each child application."]}),"\n",(0,o.jsxs)(n.p,{children:["Through the combined use of the ",(0,o.jsx)(n.code,{children:"router"})," component, developers can autonomously render different sub-applications according to different routes."]}),"\n",(0,o.jsx)(n.p,{children:"Suppose our subapp list is configured as follows:"}),"\n",(0,o.jsx)(d.default,{}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"App.tsx"})," as follow:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",meta:'title="App.tsx"',children:"import { useModuleApps } from '@modern-js/plugin-garfish/runtime';\n\nimport {\n  RouterProvider,\n  Route,\n  createBrowserRouter,\n  createRoutesFromElements,\n  BrowserRouter,\n  Link,\n  Outlet,\n} from '@modern-js/runtime/router';\n\nconst AppLayout = () => (\n  <>\n    <div>\n      <Link to={'/table'}>load file-based sub-app</Link>\n    </div>\n    <div>\n      <Link to={'/dashboard'}>load self-controlled sub-app</Link>\n    </div>\n    <div>\n      <Link to={'/'}>unmount sub-app</Link>\n    </div>\n    <Outlet />\n  </>\n);\n\nexport default () => {\n  const { apps, MApp } = useModuleApps();\n\n  // Instead of using the MApp component, you need to use createBrowserRouter to create the route\n  const router = createBrowserRouter(\n    createRoutesFromElements(\n      <Route path=\"/\" element={<AppLayout />}>\n        {apps.map(app => {\n          const { Component } = app;\n          // Fuzzy match, path needs to be written in a pattern similar to abc/*\n          return (\n            <Route\n              key={app.name}\n              path={`${app.name.toLowerCase()}/*`}\n              element={\n                <Component\n                  loadable={{\n                    loading: ({ pastDelay, error }: any) => {\n                      if (error) {\n                        return <div>error: {error?.message}</div>;\n                      } else if (pastDelay) {\n                        return <div>loading</div>;\n                      } else {\n                        return null;\n                      }\n                    },\n                  }}\n                />\n              }\n            />\n          );\n        })}\n      </Route>,\n    ),\n  );\n\n  return (\n    // Use MApp to automatically load sub-applications according to the configured activeWhen parameters (this project is configured in modern.config.ts)\n    // <BrowserRouter>\n    //   <MApp />\n    // </BrowserRouter>\n\n    // Manually write the Route component to load the sub-application, which is convenient for scenarios that require pre-operation such as authentication\n    <>\n      <RouterProvider router={router} />\n    </>\n  );\n};\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Here, the activation route of ",(0,o.jsx)(n.strong,{children:"Table"})," is customized as ",(0,o.jsx)(n.strong,{children:"/table"})," through the ",(0,o.jsx)(n.code,{children:"Route"})," component, and the activation route of ",(0,o.jsx)(n.strong,{children:"Dashboard"})," is ",(0,o.jsx)(n.strong,{children:"/dashboard"}),"."]}),"\n",(0,o.jsxs)(n.h3,{id:"centralized-routing",children:["Centralized routing",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#centralized-routing",children:"#"})]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Centralized Routing"})," is a way to centrally configure active routes for subapps. We enable ",(0,o.jsx)(n.strong,{children:"Centralized Routing"})," by adding an ",(0,o.jsx)(n.code,{children:"activeWhen"})," field to the subapp list information."]}),"\n",(0,o.jsx)(l.default,{}),"\n",(0,o.jsxs)(n.p,{children:["Use ",(0,o.jsx)(n.code,{children:"useModuleApp"})," api in Main App, get ",(0,o.jsx)(n.code,{children:"MApp"})," component and then render it"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",meta:"title=Main App: App.tsx",children:"import { useModuleApp } from '@modern-js/plugin-garfish/runtime';\n\nfunction App() {\n  const { MApp } = useModuleApps();\n\n  return (\n    <div>\n      <MApp />\n    </div>\n  );\n}\n"})}),"\n",(0,o.jsx)(n.p,{children:"After starting the application in this way, accessing the '/table' route will render the'Table 'sub-application, and accessing the'/dashboard 'route will render the'Dashboard' sub-application."}),"\n",(0,o.jsxs)(n.h3,{id:"mix-mode",children:["Mix Mode",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#mix-mode",children:"#"})]}),"\n",(0,o.jsxs)(n.p,{children:["Of course, ",(0,o.jsx)(n.strong,{children:"sub-application components"})," and ",(0,o.jsx)(n.strong,{children:"centralized routing"})," can be mixed."]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["One molecular application is activated as a ",(0,o.jsx)(n.strong,{children:"sub-application component"}),", and the other part is activated as a ",(0,o.jsx)(n.strong,{children:"centralized routing"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["A molecular application can be activated either as a ",(0,o.jsx)(n.strong,{children:"centralized routing"})," or as a ",(0,o.jsx)(n.strong,{children:"sub-application component"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(n.h3,{id:"loading",children:["Loading",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#loading",children:"#"})]}),"\n",(0,o.jsxs)(n.p,{children:["By configuring the ",(0,o.jsx)(n.code,{children:"loadable"})," configuration, loading components can be added for \u300Ccentralized routing\u300D and \u300Csub-applicati\u300D, and errors, timeouts, flashes, etc. can be considered, so as to provide users with a better user experience. The design and implementation of this function refer to ",(0,o.jsx)(n.a,{href:"https://github.com/jamiebuilds/react-loadable",target:"_blank",rel:"noopener noreferrer",children:"react-loadable"}),", and the basic functions are similar."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"function Loading() {\n  return <div>Loading...</div>;\n}\n\nfunction App(){\n  return <>\n    <Table\n      loadable={{\n        loading: Loading,\n      }}\n    />\n  <>\n}\n"})}),"\n",(0,o.jsxs)(n.h4,{id:"add-error-status",children:["Add Error Status",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#add-error-status",children:"#"})]}),"\n",(0,o.jsxs)(n.p,{children:["When the micro-frontend sub-application fails to load or render, the ",(0,o.jsx)(n.code,{children:"loading component"})," will receive the ",(0,o.jsx)(n.code,{children:"error"})," parameter (if there is no error, the error is null)."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"function Loading({ error }) {\n  if (error) {\n    return <div>Error msg {error?.message}</div>;\n  } else {\n    return <div>Loading...</div>;\n  }\n}\n"})}),"\n",(0,o.jsxs)(n.h4,{id:"avoid-loading-flash-back",children:["Avoid Loading Flash Back",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#avoid-loading-flash-back",children:"#"})]}),"\n",(0,o.jsx)(n.p,{children:"Sometimes the display time of the loading component may be less than 200ms, and the loading component will flash back at this time. Many user studies have proved that the loading flash back situation will cause the user to perceive that the loading content takes longer than the actual time."}),"\n",(0,o.jsx)(n.p,{children:"When loading is less than 200ms, if the content is not displayed, the user will think it is faster."}),"\n",(0,o.jsxs)(n.p,{children:["Therefore, the loading component also provides the ",(0,o.jsx)(n.code,{children:"pastDelay"})," parameter, which will only be true when it exceeds the set delay display. You can set the delay duration through the ",(0,o.jsx)(n.code,{children:"delay"})," parameter."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"function Loading({ error, pastDelay }) {\n  if (error) {\n    return <div>Error! {error?.message}</div>;\n  } else if (pastDelay) {\n    return <div>Loading...</div>;\n  } else {\n    return null;\n  }\n}\n"})}),"\n",(0,o.jsxs)(n.p,{children:["The default value of ",(0,o.jsx)(n.code,{children:"delay"})," is ",(0,o.jsx)(n.code,{children:"200ms"}),", you can set the delay display time through ",(0,o.jsx)(n.code,{children:"delay"})," in ",(0,o.jsx)(n.code,{children:"loadable"}),"."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"\nfunction App(){\n  return <>\n    <Table\n      loadable={{\n        loading: Loading,\n        delay: 300 // 0.3 seconds\n      }}\n    />\n  <>\n}\n"})}),"\n",(0,o.jsxs)(n.h4,{id:"add-timeout-state",children:["Add Timeout State",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#add-timeout-state",children:"#"})]}),"\n",(0,o.jsx)(n.p,{children:"Sometimes because of the network, the micro-front-end sub-application fails to load, resulting in the loading state being displayed all the time, which is very bad for users, because they don't know the right response to get a specific response, whether they need to refresh the page, by Increasing the timeout state can solve this problem well."}),"\n",(0,o.jsxs)(n.p,{children:["The loading component will get the ",(0,o.jsx)(n.code,{children:"timeOut"})," parameter when timeout, when the micro frontend application loads timeout, it will get the ",(0,o.jsx)(n.code,{children:"timeOut"})," property value of true."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"function Loading({ error, timeOut, pastDelay }) {\n  if (error) {\n    return <div>Error! {error?.message}</div>;\n  } else if (timeOut) {\n    return <div>Loading timed out, please refresh the page... </div>;\n  } else if (pastDelay) {\n    return <div>Loading...</div>;\n  } else {\n    return null;\n  }\n}\n"})}),"\n",(0,o.jsxs)(n.p,{children:["The timeout state is off and can be enabled by setting the ",(0,o.jsx)(n.code,{children:"timeout"})," parameter in ",(0,o.jsx)(n.code,{children:"loadable"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"\nfunction App(){\n  return <>\n    <Table\n      loadable={{\n        loading: Loading,\n        timeOut: 10000 // 10s\n      }}\n    />\n  <>\n}\n"})})]})}(r=globalThis).__RSPRESS_PAGE_META||(r.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["en%2Fguides%2Ftopic-detail%2Fmicro-frontend%2Fc03-main-app.mdx"]={toc:[{text:"Register Sub-app",id:"register-sub-app",depth:2},{text:"Register sub-app info directly",id:"register-sub-app-info-directly",depth:3},{text:"Custom remote app list",id:"custom-remote-app-list",depth:3},{text:"Renderer sub-app",id:"renderer-sub-app",depth:2},{text:"Sub-app component",id:"sub-app-component",depth:3},{text:"Centralized routing",id:"centralized-routing",depth:3},{text:"Mix Mode",id:"mix-mode",depth:3},{text:"Loading",id:"loading",depth:3},{text:"Add Error Status",id:"add-error-status",depth:4},{text:"Avoid Loading Flash Back",id:"avoid-loading-flash-back",depth:4},{text:"Add Timeout State",id:"add-timeout-state",depth:4}],title:"Develop Main App",frontmatter:{sidebar_position:3,title:"Develop Main App"}};var h=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,s.useMDXComponents)(),e.components);return n?(0,o.jsx)(n,(0,a._)((0,i._)({},e),{children:(0,o.jsx)(c,(0,i._)({},e))})):c(e)}}}]);