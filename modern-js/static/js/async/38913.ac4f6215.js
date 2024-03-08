/*! For license information please see 38913.ac4f6215.js.LICENSE.txt */
(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["38913"],{65069:function(e,n,r){"use strict";r.r(n);var t=r("39980"),o=r("96954"),a=r("36852");function s(e){let n=Object.assign({h1:"h1",a:"a",p:"p",ul:"ul",li:"li",h2:"h2",code:"code",h3:"h3",pre:"pre",h4:"h4"},(0,o.useMDXComponents)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.h1,{id:"experience-micro-frontend",children:["Experience Micro Frontend",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#experience-micro-frontend",children:"#"})]}),"\n",(0,t.jsx)(n.p,{children:"Through this chapter you can learn:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"How to create the main application and sub-application of the micro frontend project."}),"\n",(0,t.jsx)(n.li,{children:"Basic process of micro frontend project development."}),"\n"]}),"\n",(0,t.jsxs)(n.h2,{id:"create-an-app",children:["Create an app",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#create-an-app",children:"#"})]}),"\n",(0,t.jsx)(n.p,{children:"The routing modes of the current project are divided into the following three types:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["File-based routing (",(0,t.jsx)(n.code,{children:"router: true"})," and file-based)"]}),"\n",(0,t.jsxs)(n.li,{children:["Self-Controlled routing (",(0,t.jsx)(n.code,{children:"router: true"})," and create ",(0,t.jsx)(n.code,{children:"BrowserRouter"}),")"]}),"\n",(0,t.jsxs)(n.li,{children:["Other (",(0,t.jsx)(n.code,{children:"router: false"})," and independent installation of ",(0,t.jsx)(n.code,{children:"react-router-dom"})," in the project)"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["First, clarify the routing mode of the main application ",(0,t.jsx)(n.a,{href:"#file-based-routing-main-app",children:"create a file-based routing main App"})," or ",(0,t.jsx)(n.a,{href:"#self-controlled-main-app",children:"create a self-controlled main App"})]}),"\n",(0,t.jsx)(n.p,{children:"In this tutorial we will create two sub-applications Table and Dashboard for the main application (Table is reduced routing, Dashboard is self-controlled routing)"}),"\n",(0,t.jsxs)(n.h3,{id:"file-based-routing-main-app",children:["File-based Routing Main App",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#file-based-routing-main-app",children:"#"})]}),"\n",(0,t.jsx)(n.p,{children:"Initialize the project with a command line:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"mkdir masterApp && cd masterApp\nnpx @modern-js/create@latest\n"})}),"\n",(0,t.jsxs)(n.p,{children:["After the project is created, we can enable the ",(0,t.jsx)(n.code,{children:"micro frontend"})," through ",(0,t.jsx)(n.code,{children:"pnpm run new"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"? Please select the operation you want: Enable features\n? Please select the feature name: Enable Micro Front-end Feature\n"})}),"\n",(0,t.jsx)(n.p,{children:"Next, let's register the micro frontend plugin and add the main micro frontend app and add the list of sub-apps:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",meta:'title="modern.config.ts"',children:"import { appTools, defineConfig } from '@modern-js/app-tools';\nimport { garfishPlugin } from '@modern-js/plugin-garfish';\n\nexport default defineConfig({\n  runtime: {\n    router: true,\n    state: true,\n    masterApp: true,\n  },\n  plugins: [appTools(), garfishPlugin()],\n});\n"})}),"\n",(0,t.jsx)(n.p,{children:"Then we create two new directories in the routes folder"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"table (for loading conventional routing sub-applications)"}),"\n",(0,t.jsx)(n.li,{children:"dashboard (for loading self-controlled routing sub-applications)"}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["In these two directories, we need to create a ",(0,t.jsx)(n.code,{children:"$.tsx"})," file as the entry of the main application convention route ($represents fuzzy match, that is, ",(0,t.jsx)(n.code,{children:"/table"})," and ",(0,t.jsx)(n.code,{children:"/table/test"})," will match this ",(0,t.jsx)(n.code,{children:"$.tsx"})," as the entry file of the route, which will ensure that the sub-application route is loaded correctly in the micro frontend scenario)"]}),"\n",(0,t.jsxs)(n.h4,{id:"load-file-base-routing-sub-app",children:["Load file-base routing sub-app",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#load-file-base-routing-sub-app",children:"#"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",meta:'title="src/routes/table/$.tsx"',children:"import { useModuleApps } from '@modern-js/plugin-garfish/runtime';\n\nconst Index = () => {\n  const { Table } = useModuleApps();\n\n  return (\n    <div>\n      <Table />\n    </div>\n  );\n};\n\nexport default Index;\n"})}),"\n",(0,t.jsxs)(n.h4,{id:"load-self-controlled-routing-sub-app",children:["Load self-controlled routing sub-app",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#load-self-controlled-routing-sub-app",children:"#"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",meta:'title="src/routes/dashboard/$.tsx"',children:"import { useModuleApps } from '@modern-js/plugin-garfish/runtime';\n\nconst Index = () => {\n  const { Dashboard } = useModuleApps();\n\n  return (\n    <div>\n      <Dashboard />\n    </div>\n  );\n};\n\nexport default Index;\n"})}),"\n",(0,t.jsxs)(n.h4,{id:"route-link",children:["route link",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#route-link",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:["At this time, the main application configuration has been completed, and the sub-application can be loaded through the route, and the ",(0,t.jsx)(n.code,{children:"layout.tsx"})," of the main application can be modified to jump to the route:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",meta:'title="src/route/layout.tsx"',children:"import { Outlet, Link } from '@modern-js/runtime/router';\n\nconst Layout = () => (\n  <div>\n    <div>\n      <Link to={'/table'}>Load file-base routing sub-app</Link>\n    </div>\n    <div>\n      <Link to={'/dashboard'}>Load self-controlled routing sub-app</Link>\n    </div>\n    <div>\n      <Link to={'/'}>unmount sub-app</Link>\n    </div>\n    <Outlet />\n  </div>\n);\n\nexport default Layout;\n"})}),"\n",(0,t.jsxs)(n.h3,{id:"self-controlled-main-app",children:["Self-Controlled Main App",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#self-controlled-main-app",children:"#"})]}),"\n",(0,t.jsx)(n.p,{children:"Initialize the project with a command line:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"mkdir masterApp && cd masterApp\nnpx @modern-js/create@latest\n"})}),"\n",(0,t.jsxs)(n.p,{children:["After the project is created, we can enable the ",(0,t.jsx)(n.code,{children:"micro frontend"})," function through ",(0,t.jsx)(n.code,{children:"pnpm run new"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"? Please select the operation you want: Enable features\n? Please select the feature name: Enable Micro Front-end Feature\n"})}),"\n",(0,t.jsx)(n.p,{children:"Next, let's register the micro frontend plugin and add the main micro frontend app and add the list of sub-apps:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",meta:'title="modern.config.ts"',children:"import { appTools, defineConfig } from '@modern-js/app-tools';\nimport { garfishPlugin } from '@modern-js/plugin-garfish';\n\nexport default defineConfig({\n  runtime: {\n    router: true,\n    state: true,\n    masterApp: true,\n  },\n  plugins: [appTools(), garfishPlugin()],\n});\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Since it is a self-controlled route, we delete the ",(0,t.jsx)(n.code,{children:"routes/"})," folder and add the ",(0,t.jsx)(n.code,{children:"App.tsx"})," file in the ",(0,t.jsx)(n.code,{children:"src/"})," directory. If you use a ",(0,t.jsx)(n.code,{children:"non-MApp"})," component here, you need to use the ",(0,t.jsx)(n.code,{children:"createBrowserRouter"})," API of '=React Router v6 to create routes."]}),"\n",(0,t.jsxs)(n.h4,{id:"load-sub-app",children:["Load sub-app",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#load-sub-app",children:"#"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",meta:'title="src/App.tsx"',children:"import { useModuleApps } from '@modern-js/plugin-garfish/runtime';\n\nimport { RouterProvider, Route, createBrowserRouter, createRoutesFromElements, BrowserRouter, Link, Outlet } from '@modern-js/runtime/router';\n\nconst AppLayout = () => (\n  <>\n    <div><Link to={'/table'}>Loading conventional routed sub-applications</Link></div>\n    <div><Link to={'/dashboard'}>Loading Self-Controlled Routing Sub-Applications</Link></div>\n    <div><Link to={'/'}>Uninstall a sub-application</Link></div>\n    <Outlet />\n  </>\n)\n\nexport default () => {\n  const { apps, MApp, Table, Dashboard } = useModuleApps();\n\n  // If you are not using the MApp component, you need to use createBrowserRouter to create the route.\n  const router = createBrowserRouter(\n    createRoutesFromElements(\n      <Route path=\"/\" element={<AppLayout />}>\n        <Route key={'table'} path={'table/*'} element={<Table />} />\n        <Route key={'dashboard'} path={'dashboard/*'} element={<Dashboard />} />\n      </Route>\n    )\n  );\n\n  return (\n    // Approach 1: Use MApp to automatically load sub-applications based on the configured activeWhen parameter (this project is configured in modern.config.ts)\n    // <BrowserRouter>\n    //   <MApp />\n    // </BrowserRouter>\n\n    // Approach 2: Manually write Route components to load sub-applications, which is convenient for scenarios that require authentication and other pre-requisite operations\n    <>\n      <RouterProvider router={router} />\n    </>\n  );\n};\n"})}),"\n",(0,t.jsxs)(n.h3,{id:"other-main-app",children:["Other Main App",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#other-main-app",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:["Install and use ",(0,t.jsx)(n.code,{children:"react-router-dom"})," independently in the project. The only difference from self-controlled routing is that after setting ",(0,t.jsx)(n.code,{children:"router: false"}),", plugin-garfish cannot obtain ",(0,t.jsx)(n.code,{children:"useLocation"}),", ",(0,t.jsx)(n.code,{children:"useHref"})," and other hooks to assist in calculating basename and main and child applications. Route synchronization"]}),"\n","\n",(0,t.jsxs)(a.Tabs,{children:[(0,t.jsx)(a.Tab,{label:"react-router-dom@6",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"import { useLocation, useHref } from 'react-router-dom';\nconst App = () => {\n  const basename = useHref('/table');\n  const { Table } = useModuleApps();\n  return <Table useLocation={useLocation} basename={basename} />;\n};\n"})})}),(0,t.jsx)(a.Tab,{label:"react-router-dom@5",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"import { useLocation, useHistory } from 'react-router-dom';\nconst App = () => {\n  const history = useHistory();\n  const basename = history.createHref({ pathname: '/table' });\n  const { Table } = useModuleApps();\n  return <Table useLocation={useLocation} basename={basename} />;\n};\n"})})})]}),"\n",(0,t.jsxs)(n.h3,{id:"file-based-sub-app",children:["File-based sub-app",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#file-based-sub-app",children:"#"})]}),"\n",(0,t.jsx)(n.p,{children:"Initialize the project with a command line:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"mkdir table && cd table\nnpx @modern-js/create@latest\n"})}),"\n",(0,t.jsxs)(n.p,{children:["After create sub-app. We execute ",(0,t.jsx)(n.code,{children:"pnpm run new"})," to enable the ",(0,t.jsx)(n.code,{children:"micro frontend"})," function:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"? Please select the operation you want: Enable features\n? Please select the feature name: Enable Micro Front-end Feature\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Next, let's register the micro frontend plugin and modify ",(0,t.jsx)(n.code,{children:"modern.config.ts"})," to add the configuration of the micro frontend sub-app ",(0,t.jsx)(n.code,{children:"deploy.microFrontend"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",meta:'title="modern.config.ts"',children:"import { appTools, defineConfig } from '@modern-js/app-tools';\nimport { garfishPlugin } from '@modern-js/plugin-garfish';\n\nexport default defineConfig({\n  dev: {\n    port: 8081,\n  },\n  runtime: {\n    router: true,\n    state: true,\n  },\n  deploy: {\n    microFrontend: true,\n  },\n  plugins: [appTools(), garfishPlugin()],\n});\n"})}),"\n",(0,t.jsxs)(n.p,{children:["add ",(0,t.jsx)(n.code,{children:"src/routes/page.tsx"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",meta:'title="src/routes/page.tsx"',children:'const Index = () => {\n  return <div className="container-box">subApp</div>;\n};\n\nexport default Index;\n'})}),"\n",(0,t.jsxs)(n.h3,{id:"self-controlled-sub-app",children:["Self-controlled sub-app",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#self-controlled-sub-app",children:"#"})]}),"\n",(0,t.jsx)(n.p,{children:"Initialize the project with a command line:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"mkdir table && cd table\nnpx @modern-js/create@latest\n"})}),"\n",(0,t.jsxs)(n.p,{children:["After create sub-app. We execute ",(0,t.jsx)(n.code,{children:"pnpm run new"})," to enable the ",(0,t.jsx)(n.code,{children:"micro frontend"})," function:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"? Please select the operation you want: Enable features\n? Please select the feature name: Enable Micro Front-end Feature\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Next, let's register the micro frontend plugin and modify ",(0,t.jsx)(n.code,{children:"modern.config.ts"})," to add the configuration of the micro frontend sub-app ",(0,t.jsx)(n.code,{children:"deploy.microFrontend"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",meta:'title="modern.config.ts"',children:"import { appTools, defineConfig } from '@modern-js/app-tools';\nimport { garfishPlugin } from '@modern-js/plugin-garfish';\n\nexport default defineConfig({\n  dev: {\n    port: 8082,\n  },\n  runtime: {\n    router: true,\n    state: true,\n  },\n  deploy: {\n    microFrontend: true,\n  },\n  plugins: [appTools(), garfishPlugin()],\n});\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Self-controlled routing needs to delete the ",(0,t.jsx)(n.code,{children:"routes/"})," folder and create a new ",(0,t.jsx)(n.code,{children:"App.tsx"})," in the ",(0,t.jsx)(n.code,{children:"src/"})," directory."]}),"\n",(0,t.jsxs)(n.p,{children:["And add code in ",(0,t.jsx)(n.code,{children:"src/App.tsx"}),", note that you need to parse from ",(0,t.jsx)(n.code,{children:"props"})," and pass ",(0,t.jsx)(n.code,{children:"basename"})," to ",(0,t.jsx)(n.code,{children:"BrowserRouter"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",meta:'title="src/App.tsx"',children:"import { BrowserRouter, Route, Routes } from '@modern-js/runtime/router';\n\nexport default (props: { basename: string }) => {\n  const { basename } = props;\n\n  return (\n    <BrowserRouter basename={basename}>\n      <Routes>\n        <Route index element={<div>Self-controlled route root</div>} />\n        <Route path={'path'} element={<div>Self-controlled sub route</div>} />\n      </Routes>\n    </BrowserRouter>\n  );\n};\n"})}),"\n",(0,t.jsxs)(n.h2,{id:"debug",children:["Debug",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#debug",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:["Start the application by executing the ",(0,t.jsx)(n.code,{children:"pnpm run dev"})," command in the directory in sequence:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["masterApp ",(0,t.jsx)(n.code,{children:"http://localhost:8080"})]}),"\n",(0,t.jsxs)(n.li,{children:["table subapplication (conventional routing) ",(0,t.jsx)(n.code,{children:"http://localhost:8081"})]}),"\n",(0,t.jsxs)(n.li,{children:["dashboard subapplication (self-controlled routing) ",(0,t.jsx)(n.code,{children:"http://localhost:8082"})]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Access the main application address ",(0,t.jsx)(n.code,{children:"http://localhost:8080"})]}),"\n",(0,t.jsxs)(n.p,{children:["After completing the experience of the overall development process of micro frontend, you can learn more about how to ",(0,t.jsx)(n.a,{href:"/guides/topic-detail/micro-frontend/c03-main-app",children:"develop the main application"}),"."]}),"\n",(0,t.jsxs)(n.h2,{id:"faq",children:["FAQ",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#faq",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:["Garfish issue: ",(0,t.jsx)(n.a,{href:"https://www.garfishjs.org/issues/",target:"_blank",rel:"noopener noreferrer",children:"https://www.garfishjs.org/issues/"})]})]})}function i(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,o.useMDXComponents)(),e.components);return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(s,{...e})}):s(e)}n.default=i,i.__RSPRESS_PAGE_META={},i.__RSPRESS_PAGE_META["en%2Fguides%2Ftopic-detail%2Fmicro-frontend%2Fc02-development.mdx"]={toc:[{text:"Create an app",id:"create-an-app",depth:2},{text:"File-based Routing Main App",id:"file-based-routing-main-app",depth:3},{text:"Load file-base routing sub-app",id:"load-file-base-routing-sub-app",depth:4},{text:"Load self-controlled routing sub-app",id:"load-self-controlled-routing-sub-app",depth:4},{text:"route link",id:"route-link",depth:4},{text:"Self-Controlled Main App",id:"self-controlled-main-app",depth:3},{text:"Load sub-app",id:"load-sub-app",depth:4},{text:"Other Main App",id:"other-main-app",depth:3},{text:"File-based sub-app",id:"file-based-sub-app",depth:3},{text:"Self-controlled sub-app",id:"self-controlled-sub-app",depth:3},{text:"Debug",id:"debug",depth:2},{text:"FAQ",id:"faq",depth:2}],title:"Development",frontmatter:{sidebar_position:2,title:"Development"}}}}]);