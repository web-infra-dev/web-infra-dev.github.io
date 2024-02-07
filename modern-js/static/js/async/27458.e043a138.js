/*! For license information please see 27458.e043a138.js.LICENSE.txt */
(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["27458"],{16239:function(e,n,t){"use strict";t.r(n);var r=t("39980"),a=t("96954");function s(e){let n=Object.assign({h1:"h1",a:"a",div:"div",p:"p",h2:"h2",h3:"h3",pre:"pre",code:"code"},(0,a.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"router",children:["router",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#router",children:"#"})]}),"\n",(0,r.jsxs)(n.div,{className:"rspress-directive info",children:[(0,r.jsx)(n.div,{className:"rspress-directive-title",children:"INFO"}),(0,r.jsxs)(n.div,{className:"rspress-directive-content",children:[(0,r.jsxs)(n.p,{children:["The router solution based on ",(0,r.jsx)(n.a,{href:"https://reactrouter.com/",target:"_blank",rel:"noopener noreferrer",children:"react-router 6"}),"."]}),"\n"]})]}),"\n",(0,r.jsxs)(n.h2,{id:"hooks",children:["hooks",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#hooks",children:"#"})]}),"\n",(0,r.jsxs)(n.h3,{id:"usenavigate",children:["useNavigate",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#usenavigate",children:"#"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"declare function useNavigate(): NavigateFunction;\n\ninterface NavigateFunction {\n  (\n    to: To,\n    options?: {\n      replace?: boolean;\n      state?: any;\n      relative?: RelativeRoutingType;\n    },\n  ): void;\n  (delta: number): void;\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"useNavigate"})," hook returns a function that lets you navigate programmatically."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"import { useNavigate } from '@modern-js/runtime/router';\n\nexport function HomeButton() {\n  let navigate = useNavigate();\n\n  function handleClick() {\n    navigate('/home');\n  }\n\n  return (\n    <button type=\"button\" onClick={handleClick}>\n      Go home\n    </button>\n  );\n}\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"uselocation",children:["useLocation",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#uselocation",children:"#"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"declare function useLocation(): Location;\n\ninterface Location extends Path {\n  state: unknown;\n  key: Key;\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"useLocation"})," hook returns the current ",(0,r.jsx)(n.a,{href:"https://reactrouter.com/web/api/location",target:"_blank",rel:"noopener noreferrer",children:"location"})," object. A new location object would be returned whenever the current location changes."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:'import { useLocation } from "@modern-js/runtime/router";\n\nfunction usePageViews() {\n  let location = useLocation();\n  React.useEffect(() => {\n    ga.send(["pageview", location.pathname]);\n  }, [location]);\n}\n\nfunction App() {\n  usePageViews();\n  return (\n    //...\n  );\n}\n'})}),"\n",(0,r.jsxs)(n.h3,{id:"useparams",children:["useParams",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#useparams",children:"#"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"declare function useParams<K extends string = string>(): Readonly<Params<K>>;\n"})}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"useParams"})," hook returns an object of key/value pairs of the dynamic params from the current URL that were matched by the ",(0,r.jsx)(n.code,{children:"<Route path>"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:'import { Routes, Route, useParams } from \'@modern-js/runtime/router\';\n\nfunction BlogPost() {\n  const { slug } = useParams();\n  return <div>Now showing post {slug}</div>;\n}\n\nfunction App() {\n  return (\n    <Routes>\n      <Route path="/" element={<div>home</div>} />\n      <Route path="/blog/:slug" element={<BlogPost />} />\n    </Routes>\n  );\n}\n'})}),"\n",(0,r.jsxs)(n.h3,{id:"userouteerror",children:["useRouteError",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#userouteerror",children:"#"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"export declare function useRouteError(): unknown;\n"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"useRouteError"})," returns the nearest ancestor Route error\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"import { useRouteError } from '@modern-js/runtime/router';\nconst ErrorBoundary = () => {\n  const error = useRouteError();\n  return (\n    <div>\n      <h1>{error.status}</h1>\n      <h2>{error.message}</h2>\n    </div>\n  );\n};\nexport default ErrorBoundary;\n"})}),"\n",(0,r.jsxs)(n.h2,{id:"components",children:["Components",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#components",children:"#"})]}),"\n",(0,r.jsxs)(n.h3,{id:"link",children:["Link",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#link",children:"#"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"declare function Link(props: LinkProps): React.ReactElement;\n\ninterface LinkProps\n  extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {\n  replace?: boolean;\n  state?: any;\n  to: To;\n  reloadDocument?: boolean;\n}\n\ntype To = string | Partial<Path>;\n"})}),"\n",(0,r.jsxs)(n.p,{children:["A ",(0,r.jsx)(n.code,{children:"<Link>"})," is an element that lets the user navigate to another page by clicking or tapping on it."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:'<Link to="/about">About</Link>\n'})}),"\n",(0,r.jsxs)(n.h3,{id:"navlink",children:["NavLink",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#navlink",children:"#"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"declare function NavLink(props: NavLinkProps): React.ReactElement;\n\ninterface NavLinkProps\n  extends Omit<LinkProps, 'className' | 'style' | 'children'> {\n  caseSensitive?: boolean;\n  children?:\n    | React.ReactNode\n    | ((props: { isActive: boolean }) => React.ReactNode);\n  className?: string | ((props: { isActive: boolean }) => string | undefined);\n  end?: boolean;\n  style?:\n    | React.CSSProperties\n    | ((props: { isActive: boolean }) => React.CSSProperties);\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["A ",(0,r.jsx)(n.code,{children:"<NavLink>"})," is a special kind of ",(0,r.jsx)(n.code,{children:"<Link>"}),' that knows whether or not it is "active".']}),"\n",(0,r.jsxs)(n.h3,{id:"outlet",children:["Outlet",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#outlet",children:"#"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"interface OutletProps {\n  context?: unknown;\n}\ndeclare function Outlet(props: OutletProps): React.ReactElement | null;\n"})}),"\n",(0,r.jsxs)(n.p,{children:["An ",(0,r.jsx)(n.code,{children:"<Outlet>"})," should be used in parent route elements to render their child route elements. This allows nested UI to show up when child routes are rendered."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:'function Dashboard() {\n  return (\n    <div>\n      <h1>Dashboard</h1>\n\n      {/* This element will render either <DashboardMessages> when the URL is\n          "/messages", <DashboardTasks> at "/tasks", or null if it is "/"\n      */}\n      <Outlet />\n    </div>\n  );\n}\n\nfunction App() {\n  return (\n    <Routes>\n      <Route path="/" element={<Dashboard />}>\n        <Route path="messages" element={<DashboardMessages />} />\n        <Route path="tasks" element={<DashboardTasks />} />\n      </Route>\n    </Routes>\n  );\n}\n'})}),"\n",(0,r.jsxs)(n.h3,{id:"route",children:["Route",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#route",children:"#"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"interface RouteObject {\n  path?: string;\n  index?: boolean;\n  children?: React.ReactNode;\n  caseSensitive?: boolean;\n  id?: string;\n  loader?: LoaderFunction;\n  action?: ActionFunction;\n  element?: React.ReactNode | null;\n  errorElement?: React.ReactNode | null;\n  handle?: RouteObject['handle'];\n  shouldRevalidate?: ShouldRevalidateFunction;\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"Route"})," represents the route information. A ",(0,r.jsx)(n.code,{children:"Route"})," object couples URL segments to components, data loading and data mutations."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"Route"})," can be used as a plain object, passing to the router creation functions:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"const router = createBrowserRouter([\n  {\n    // it renders this element\n    element: <Team />,\n\n    // when the URL matches this segment\n    path: 'teams/:teamId',\n\n    // with this data loaded before rendering\n    loader: async ({ request, params }) => {\n      return fetch(`/fake/api/teams/${params.teamId}.json`, {\n        signal: request.signal,\n      });\n    },\n\n    // performing this mutation when data is submitted to it\n    action: async ({ request }) => {\n      return updateFakeTeam(await request.formData());\n    },\n\n    // and renders this element in case something went wrong\n    errorElement: <ErrorBoundary />,\n  },\n]);\n"})}),"\n",(0,r.jsxs)(n.p,{children:["You can also declare your routes with JSX and ",(0,r.jsx)(n.code,{children:"createRoutesFromElements"}),", the props to the element are identical to the properties of the route objects:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:'const router = createBrowserRouter(\n  createRoutesFromElements(\n    <Route\n      element={<Team />}\n      path="teams/:teamId"\n      loader={async ({ params }) => {\n        return fetch(`/fake/api/teams/${params.teamId}.json`);\n      }}\n      action={async ({ request }) => {\n        return updateFakeTeam(await request.formData());\n      }}\n      errorElement={<ErrorBoundary />}\n    />,\n  ),\n);\n'})}),"\n",(0,r.jsxs)(n.h2,{id:"more",children:["More",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#more",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["You can access to ",(0,r.jsx)(n.a,{href:"https://reactrouter.com/",target:"_blank",rel:"noopener noreferrer",children:"React Router"})," to get the full API information."]})]})}function o(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,a.useMDXComponents)(),e.components);return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(s,{...e})}):s(e)}n.default=o,o.__RSPRESS_PAGE_META={},o.__RSPRESS_PAGE_META["en%2Fapis%2Fapp%2Fruntime%2Frouter%2Frouter.mdx"]={toc:[{text:"hooks",id:"hooks",depth:2},{text:"useNavigate",id:"usenavigate",depth:3},{text:"useLocation",id:"uselocation",depth:3},{text:"useParams",id:"useparams",depth:3},{text:"useRouteError",id:"userouteerror",depth:3},{text:"Components",id:"components",depth:2},{text:"Link",id:"link",depth:3},{text:"NavLink",id:"navlink",depth:3},{text:"Outlet",id:"outlet",depth:3},{text:"Route",id:"route",depth:3},{text:"More",id:"more",depth:2}],title:"router",frontmatter:{title:"router",sidebar_position:1}}}}]);