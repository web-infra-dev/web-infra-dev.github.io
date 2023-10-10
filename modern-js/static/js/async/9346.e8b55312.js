(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["9346"],{90974:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return d},frontmatter:function(){return l}});var t=r("15169"),a=r("43932"),s=r("9880"),o=r("23169");function i(e){var n=Object.assign({h1:"h1",a:"a",div:"div",p:"p",h2:"h2",h3:"h3",pre:"pre",code:"code"},(0,o.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h1,{id:"router",children:["router",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#router",children:"#"})]}),"\n",(0,s.jsxs)(n.div,{className:"rspress-directive info",children:[(0,s.jsx)(n.div,{className:"rspress-directive-title",children:"\u8865\u5145\u4FE1\u606F"}),(0,s.jsxs)(n.div,{className:"rspress-directive-content",children:[(0,s.jsxs)(n.p,{children:["\u57FA\u4E8E ",(0,s.jsx)(n.a,{href:"https://reactrouter.com/",target:"_blank",rel:"noopener noreferrer",children:"react-router"})," \u7684\u8DEF\u7531\u89E3\u51B3\u65B9\u6848\u3002"]}),"\n"]})]}),"\n",(0,s.jsxs)(n.h2,{id:"hooks",children:["hooks",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#hooks",children:"#"})]}),"\n",(0,s.jsxs)(n.h3,{id:"usenavigate",children:["useNavigate",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#usenavigate",children:"#"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"declare function useNavigate(): NavigateFunction;\n\ninterface NavigateFunction {\n  (\n    to: To,\n    options?: {\n      replace?: boolean;\n      state?: any;\n      relative?: RelativeRoutingType;\n    },\n  ): void;\n  (delta: number): void;\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"useNavigate"})," \u8FD4\u56DE\u4E00\u4E2A\u53EF\u4EE5\u7528\u4E8E\u6267\u884C\u5BFC\u822A\u64CD\u4F5C\u7684\u51FD\u6570\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:"import { useNavigate } from '@modern-js/runtime/router';\n\nexport function HomeButton() {\n  let navigate = useNavigate();\n\n  function handleClick() {\n    navigate('/home');\n  }\n\n  return (\n    <button type=\"button\" onClick={handleClick}>\n      Go home\n    </button>\n  );\n}\n"})}),"\n",(0,s.jsxs)(n.h3,{id:"uselocation",children:["useLocation",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#uselocation",children:"#"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"declare function useLocation(): Location;\n\ninterface Location extends Path {\n  state: unknown;\n  key: Key;\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"useLocation"})," \u8FD4\u56DE\u5F53\u524D url \u5BF9\u5E94\u7684 ",(0,s.jsx)(n.a,{href:"https://reactrouter.com/web/api/location",target:"_blank",rel:"noopener noreferrer",children:"location"})," \u5BF9\u8C61\u3002\u6BCF\u5F53\u8DEF\u7531\u66F4\u65B0\u7684\u65F6\u5019\uFF0C\u90FD\u4F1A\u62FF\u5230\u4E00\u4E2A\u65B0\u7684 ",(0,s.jsx)(n.code,{children:"location"})," \u5BF9\u8C61\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:'import { useLocation } from "@modern-js/runtime/router";\n\nfunction usePageViews() {\n  let location = useLocation();\n  React.useEffect(() => {\n    ga.send(["pageview", location.pathname]);\n  }, [location]);\n}\n\nfunction App() {\n  usePageViews();\n  return (\n    //...\n  );\n}\n'})}),"\n",(0,s.jsxs)(n.h3,{id:"useparams",children:["useParams",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#useparams",children:"#"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"declare function useParams<K extends string = string>(): Readonly<Params<K>>;\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"useParams"})," \u8FD4\u56DE\u4E00\u4E2A key/value \u7684\u952E\u503C\u5BF9\uFF0C\u8868\u793A\u5F53\u524D\u5339\u914D\u7684\u8DEF\u7531 ",(0,s.jsx)(n.code,{children:"<Route path>"})," \u4E2D\u7684\u53C2\u6570\u4FE1\u606F\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:'import { Switch, Route, useParams } from \'@modern-js/runtime/router\';\n\nfunction BlogPost() {\n  const { slug } = useParams();\n  return <div>Now showing post {slug}</div>;\n}\n\nfunction App() {\n  return (\n    <Routes>\n      <Route path="/" element={<div>home</div>} />\n      <Route path="/blog/:slug" element={<BlogPost />} />\n    </Routes>\n  );\n}\n'})}),"\n",(0,s.jsxs)(n.h3,{id:"userouteerror",children:["useRouteError",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#userouteerror",children:"#"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"export declare function useRouteError(): unknown;\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"useRouteError"})," \u8FD4\u56DE\u79BB ErrorBoundary \u5B9A\u4E49\u6700\u8FD1\u7684\u8DEF\u7531\u6E32\u67D3\u9519\u8BEF\u4FE1\u606F\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:"import { useRouteError } from '@modern-js/runtime/router';\nconst ErrorBoundary = () => {\n  const error = useRouteError();\n  return (\n    <div>\n      <h1>{error.status}</h1>\n      <h2>{error.message}</h2>\n    </div>\n  );\n};\nexport default ErrorBoundary;\n"})}),"\n",(0,s.jsxs)(n.h2,{id:"\u7EC4\u4EF6",children:["\u7EC4\u4EF6",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u7EC4\u4EF6",children:"#"})]}),"\n",(0,s.jsxs)(n.h3,{id:"link",children:["Link",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#link",children:"#"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"declare function Link(props: LinkProps): React.ReactElement;\n\ninterface LinkProps\n  extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {\n  replace?: boolean;\n  state?: any;\n  to: To;\n  reloadDocument?: boolean;\n}\n\ntype To = string | Partial<Path>;\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u53EF\u4EE5\u4F7F\u7528 ",(0,s.jsx)(n.code,{children:"Link"})," \u7EC4\u4EF6\u8FDB\u884C\u8DEF\u7531\u8DF3\u8F6C\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:'<Link to="/about">About</Link>\n'})}),"\n",(0,s.jsxs)(n.h3,{id:"navlink",children:["NavLink",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#navlink",children:"#"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"declare function NavLink(props: NavLinkProps): React.ReactElement;\n\ninterface NavLinkProps\n  extends Omit<LinkProps, 'className' | 'style' | 'children'> {\n  caseSensitive?: boolean;\n  children?:\n    | React.ReactNode\n    | ((props: { isActive: boolean }) => React.ReactNode);\n  className?: string | ((props: { isActive: boolean }) => string | undefined);\n  end?: boolean;\n  style?:\n    | React.CSSProperties\n    | ((props: { isActive: boolean }) => React.CSSProperties);\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"<NavLink>"})," \u662F\u4E00\u79CD\u7279\u6B8A\u7684 ",(0,s.jsx)(n.code,{children:"<Link>"}),"\uFF0C\u5F53 ",(0,s.jsx)(n.code,{children:"<NavLink>"})," \u5BF9\u5E94\u7684\u94FE\u63A5\u548C\u5F53\u524D URL \u5339\u914D\u65F6\uFF0C\u4F1A\u7ED9 ",(0,s.jsx)(n.code,{children:"<NavLink>"})," \u6240\u6E32\u67D3\u7684\u5143\u7D20\u6DFB\u52A0\u201C\u6FC0\u6D3B\u201D\u6001\u6837\u5F0F\u3002"]}),"\n",(0,s.jsxs)(n.h3,{id:"outlet",children:["Outlet",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#outlet",children:"#"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"interface OutletProps {\n  context?: unknown;\n}\ndeclare function Outlet(props: OutletProps): React.ReactElement | null;\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"<Outlet>"})," \u7528\u4E8E\u5D4C\u5957\u8DEF\u7531\u573A\u666F\u3002\u5728\u7236\u8DEF\u7531\u7684\u5143\u7D20\u4E2D\u4F7F\u7528\uFF0C\u4EE3\u8868\u5F85\u6E32\u67D3\u7684\u5B50\u8DEF\u7531\u7684\u5143\u7D20\u5728\u7236\u7EC4\u4EF6\u4E2D\u7684\u4F4D\u7F6E\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:'function Dashboard() {\n  return (\n    <div>\n      <h1>Dashboard</h1>\n\n      {/* This element will render either <DashboardMessages> when the URL is\n          "/messages", <DashboardTasks> at "/tasks", or null if it is "/"\n      */}\n      <Outlet />\n    </div>\n  );\n}\n\nfunction App() {\n  return (\n    <Routes>\n      <Route path="/" element={<Dashboard />}>\n        <Route path="messages" element={<DashboardMessages />} />\n        <Route path="tasks" element={<DashboardTasks />} />\n      </Route>\n    </Routes>\n  );\n}\n'})}),"\n",(0,s.jsxs)(n.h3,{id:"route",children:["Route",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#route",children:"#"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"interface RouteObject {\n  path?: string;\n  index?: boolean;\n  children?: React.ReactNode;\n  caseSensitive?: boolean;\n  id?: string;\n  loader?: LoaderFunction;\n  action?: ActionFunction;\n  element?: React.ReactNode | null;\n  errorElement?: React.ReactNode | null;\n  handle?: RouteObject['handle'];\n  shouldRevalidate?: ShouldRevalidateFunction;\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"Route"})," \u7528\u4E8E\u5B9A\u4E49\u8DEF\u7531\u3002\u4E00\u4E2A ",(0,s.jsx)(n.code,{children:"Route"})," \u5BF9\u8C61\uFF0C\u5C06 URL \u7247\u6BB5\u548C\u7EC4\u4EF6\u3001\u6570\u636E\u83B7\u53D6\u5173\u8054\u8D77\u6765\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"Route"})," \u53EF\u4EE5\u4F5C\u4E3A\u666E\u901A\u5BF9\u8C61\uFF0C\u4F20\u7ED9\u521B\u5EFA router \u7684\u51FD\u6570\u7684\u53C2\u6570\uFF1A"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"const router = createBrowserRouter([\n  {\n    // it renders this element\n    element: <Team />,\n\n    // when the URL matches this segment\n    path: 'teams/:teamId',\n\n    // with this data loaded before rendering\n    loader: async ({ request, params }) => {\n      return fetch(`/fake/api/teams/${params.teamId}.json`, {\n        signal: request.signal,\n      });\n    },\n\n    // performing this mutation when data is submitted to it\n    action: async ({ request }) => {\n      return updateFakeTeam(await request.formData());\n    },\n\n    // and renders this element in case something went wrong\n    errorElement: <ErrorBoundary />,\n  },\n]);\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"Route"})," \u8FD8\u53EF\u4EE5\u4F5C\u4E3A\u7EC4\u4EF6\u4F7F\u7528\uFF0C\u901A\u8FC7 ",(0,s.jsx)(n.code,{children:"createRoutesFromElements"})," \u8F6C\u6362\u540E\uFF0C\u518D\u4F20\u7ED9\u521B\u5EFA router \u7684\u51FD\u6570\u7684\u53C2\u6570\uFF1A"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:'const router = createBrowserRouter(\n  createRoutesFromElements(\n    <Route\n      element={<Team />}\n      path="teams/:teamId"\n      loader={async ({ params }) => {\n        return fetch(`/fake/api/teams/${params.teamId}.json`);\n      }}\n      action={async ({ request }) => {\n        return updateFakeTeam(await request.formData());\n      }}\n      errorElement={<ErrorBoundary />}\n    />,\n  ),\n);\n'})}),"\n",(0,s.jsxs)(n.h2,{id:"\u66F4\u591A-api",children:["\u66F4\u591A API",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u66F4\u591A-api",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["\u82E5\u60F3\u8981\u4E86\u89E3\u5B8C\u6574\u7684\u8DEF\u7531 API \u4FE1\u606F\uFF0C\u53EF\u81F3 ",(0,s.jsx)(n.a,{href:"https://reactrouter.com/web/guides/start",target:"_blank",rel:"noopener noreferrer",children:"react-router \u5B98\u7F51"})," \u67E5\u770B\u3002"]})]})}function c(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,o.useMDXComponents)(),e.components).wrapper;return n?(0,s.jsx)(n,(0,a._)((0,t._)({},e),{children:(0,s.jsx)(i,(0,t._)({},e))})):i(e)}var d=c;c.__RSPRESS_PAGE_META={},c.__RSPRESS_PAGE_META["zh%2Fapis%2Fapp%2Fruntime%2Frouter%2Frouter.mdx"]={toc:[{text:"hooks",id:"hooks",depth:2},{text:"useNavigate",id:"usenavigate",depth:3},{text:"useLocation",id:"uselocation",depth:3},{text:"useParams",id:"useparams",depth:3},{text:"useRouteError",id:"userouteerror",depth:3},{text:"\u7EC4\u4EF6",id:"\u7EC4\u4EF6",depth:2},{text:"Link",id:"link",depth:3},{text:"NavLink",id:"navlink",depth:3},{text:"Outlet",id:"outlet",depth:3},{text:"Route",id:"route",depth:3},{text:"\u66F4\u591A API",id:"\u66F4\u591A-api",depth:2}],title:"router"};var l={title:"router",sidebar_position:1}}}]);