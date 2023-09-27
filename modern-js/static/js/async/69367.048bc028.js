(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["69367"],{8042:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return l}});var r,o=t("15169"),i=t("43932"),a=t("9880"),s=t("23169"),u=t("88617");function c(n){var e=Object.assign({h1:"h1",a:"a",p:"p",ul:"ul",li:"li",code:"code",pre:"pre"},(0,s.useMDXComponents)(),n.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(e.h1,{id:"\u8DEF\u7531\u9274\u6743",children:["\u8DEF\u7531\u9274\u6743",(0,a.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#\u8DEF\u7531\u9274\u6743",children:"#"})]}),"\n",(0,a.jsxs)(e.p,{children:["Modern.js \u9ED8\u8BA4\u63D0\u4F9B\u7684\u8DEF\u7531\u65B9\u5F0F\u662F\u57FA\u4E8E React Router 6 \u7684\u7EA6\u5B9A\u5F0F\u8DEF\u7531\uFF0C\u5177\u4F53\u53EF\u67E5\u770B",(0,a.jsx)(e.a,{href:"/guides/basic-features/routes#%E8%B7%AF%E7%94%B1%E6%96%B9%E6%A1%88",children:"\u8DEF\u7531\u65B9\u6848"}),"\u3002"]}),"\n",(0,a.jsx)(e.p,{children:"\u5728\u4E00\u4E2A Web \u5E94\u7528\u4E2D\u5982\u679C\u5B58\u5728\u591A\u4E2A\u8DEF\u7531\uFF0C\u6211\u4EEC\u53EF\u80FD\u9700\u8981\u5BF9\u90E8\u5206\u8DEF\u7531\u8FDB\u884C\u9274\u6743\u540E\u624D\u80FD\u8BBF\u95EE\u3002\u4F8B\u5982\u4E0B\u9762\u8FD9\u4E2A\u6848\u4F8B\uFF1A"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsxs)(e.li,{children:["\u8BBF\u95EE ",(0,a.jsx)(e.code,{children:"/"})," \u8DEF\u7531\uFF0C\u65E0\u9700\u9274\u6743\uFF0C\u53EF\u76F4\u63A5\u8BBF\u95EE\u3002"]}),"\n",(0,a.jsxs)(e.li,{children:["\u8BBF\u95EE ",(0,a.jsx)(e.code,{children:"/protected"})," \u8DEF\u7531\uFF0C\u9700\u8981\u9274\u6743\uFF0C\u5982\u679C\u65E0\uFF0C\u81EA\u52A8\u8DF3\u8F6C\u5230 ",(0,a.jsx)(e.code,{children:"/login"})," \u8DEF\u7531\uFF0C\u767B\u5F55\u6210\u529F\u540E\u8FD4\u56DE ",(0,a.jsx)(e.code,{children:"/protected"}),"\u3002"]}),"\n"]}),"\n","\n",(0,a.jsxs)(u.default,{template:"web-app",children:[(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-tsx",meta:'title="src/routes/page.tsx"',children:'import { Helmet } from \'@modern-js/runtime/head\';\nimport \'./index.css\';\n\nconst PublicPage = (): JSX.Element => (\n  <div className="container-box">\n    <Helmet>\n      <link\n        rel="icon"\n        type="image/x-icon"\n        href="https://lf3-static.bytednsdoc.com/obj/eden-cn/uhbfnupenuhf/favicon.ico"\n      />\n    </Helmet>\n    <h3>Public</h3>\n  </div>\n);\n\nexport default PublicPage;\n\n'})}),(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-tsx",meta:'title="src/routes/layout.tsx"',children:"import { Link, Outlet } from '@modern-js/runtime/router';\nimport { AuthProvider, AuthStatus } from './Auth';\n\nexport default function Layout() {\n  return (\n    <AuthProvider>\n      <AuthStatus />\n\n      <ul>\n        <li>\n          <Link to=\"/\">Public Page</Link>\n        </li>\n        <li>\n          <Link to=\"/protected\">Protected Page</Link>\n        </li>\n      </ul>\n\n      <Outlet />\n    </AuthProvider>\n  );\n}\n\n"})}),(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-ts",meta:'title="src/routes/fakeAuth.ts"',children:"/**\n * This represents some generic auth provider API, like Firebase.\n */\nconst fakeAuthProvider = {\n  isAuthenticated: false,\n  signin(callback: VoidFunction) {\n    fakeAuthProvider.isAuthenticated = true;\n    setTimeout(callback, 100); // fake async\n  },\n  signout(callback: VoidFunction) {\n    fakeAuthProvider.isAuthenticated = false;\n    setTimeout(callback, 100);\n  },\n};\n\nexport { fakeAuthProvider };\n\n"})}),(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-ts",meta:'title="src/routes/Auth.tsx"',children:"import React from 'react';\nimport { useNavigate, Navigate, useLocation } from '@modern-js/runtime/router';\nimport { fakeAuthProvider } from './fakeAuth';\n\ninterface AuthContextType {\n  user: any;\n  signin: (user: string, callback: VoidFunction) => void;\n  signout: (callback: VoidFunction) => void;\n}\n\nconst AuthContext = React.createContext<AuthContextType>(null!);\n\nexport function AuthProvider({ children }: { children: React.ReactNode }) {\n  const [user, setUser] = React.useState<any>(null);\n\n  const signin = (newUser: string, callback: VoidFunction) =>\n    fakeAuthProvider.signin(() => {\n      setUser(newUser);\n      callback();\n    });\n\n  const signout = (callback: VoidFunction) =>\n    fakeAuthProvider.signout(() => {\n      setUser(null);\n      callback();\n    });\n\n  const value = { user, signin, signout };\n\n  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;\n}\n\nexport function useAuth() {\n  return React.useContext(AuthContext);\n}\n\nexport function AuthStatus() {\n  const auth = useAuth();\n  console.log('auth', auth);\n  const navigate = useNavigate();\n\n  if (!auth.user) {\n    return <p>You are not logged in.</p>;\n  }\n\n  return (\n    <p>\n      Welcome {auth.user}!{' '}\n      <button\n        type=\"button\"\n        onClick={() => {\n          auth.signout(() => navigate('/'));\n        }}\n      >\n        Sign out\n      </button>\n    </p>\n  );\n}\n\nexport function RequireAuth({ children }: { children: JSX.Element }) {\n  const auth = useAuth();\n  const location = useLocation();\n\n  if (!auth.user) {\n    // Redirect them to the /login page, but save the current location they were\n    // trying to go to when they were redirected. This allows us to send them\n    // along to that page after they login, which is a nicer user experience\n    // than dropping them off on the home page.\n    return <Navigate to=\"/login\" state={{ from: location }} replace />;\n  }\n\n  return children;\n}\n\n"})}),(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-ts",meta:'title="src/routes/protected/page.tsx"',children:"import { RequireAuth } from '../Auth';\n\nexport default function ProtectedPage() {\n  return (\n    <div className=\"container-box\">\n      <RequireAuth>\n        <h3>Protected</h3>\n      </RequireAuth>\n    </div>\n  );\n}\n\n"})}),(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-ts",meta:'title="src/routes/login/page.tsx"',children:"import { useLocation, useNavigate } from '@modern-js/runtime/router';\nimport { useAuth } from '../Auth';\n\nexport default function Login() {\n  const navigate = useNavigate();\n  const location = useLocation();\n  const auth = useAuth();\n\n  const from = location.state?.from?.pathname || '/';\n\n  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {\n    event.preventDefault();\n\n    const formData = new FormData(event.currentTarget);\n    const username = formData.get('username') as string;\n\n    auth.signin(username, () => {\n      // Send them back to the page they tried to visit when they were\n      // redirected to the login page. Use { replace: true } so we don't create\n      // another entry in the history stack for the login page.  This means that\n      // when they get to the protected page and click the back button, they\n      // won't end up back on the login page, which is also really nice for the\n      // user experience.\n      navigate(from, { replace: true });\n    });\n  }\n\n  return (\n    <div>\n      <p>You must log in to view the page at {from}</p>\n\n      <form onSubmit={handleSubmit}>\n        <label>\n          Username: <input name=\"username\" type=\"text\" />\n        </label>{' '}\n        <button type=\"submit\">Login</button>\n      </form>\n    </div>\n  );\n}\n\n"})})]})]})}(r=globalThis).__RSPRESS_PAGE_META||(r.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["zh%2Ftutorials%2Fexamples%2Fcsr-auth.mdx"]={toc:[],title:"\u8DEF\u7531\u9274\u6743",frontmatter:{title:"\u8DEF\u7531\u9274\u6743"}};var l=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=Object.assign({},(0,s.useMDXComponents)(),n.components).wrapper;return e?(0,a.jsx)(e,(0,i._)((0,o._)({},n),{children:(0,a.jsx)(c,(0,o._)({},n))})):c(n)}}}]);