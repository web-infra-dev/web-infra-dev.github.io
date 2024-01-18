/*! For license information please see 4655.f0ea650d.js.LICENSE.txt */
(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["4655"],{76510:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return c}});var o=t("90247"),r=t("44518"),s=t("39980"),i=t("87091"),a=t("59986");function l(n,e){if(0===e.length)return n;var t={};return Object.keys(n).forEach(function(o){!e.includes(o)&&(t[o]=n[o])}),t}function c(n){var e=n.template,t=n.customSetup,c=n.files,d=void 0===c?{}:c,u=n.removeFiles,m=void 0===u?[]:u,p=n.options,h=n.initialCollapsedFolder,g=n.activeFile,f=n.theme,b=a.ModernTemplates[e],x=(0,o._)({},l(b,m),l(d,m));return(0,s.jsx)(i.SandpackProvider,{theme:void 0===f?"light":f,customSetup:(0,o._)({environment:"node"},void 0===t?{}:t),files:x,options:(0,o._)({activeFile:void 0===g?"src/routes/page.tsx":g,visibleFiles:Object.keys(d).filter(function(n){return!m.includes(n)})},void 0===p?{}:p),children:(0,s.jsxs)(i.SandpackLayout,{children:[(0,s.jsx)(i.SandpackFileExplorer,{autoHiddenFiles:!0,initialCollapsedFolder:["/.husky/","/.vscode/","/.codesandbox/"].concat((0,r._)(void 0===h?[]:h))}),(0,s.jsx)(i.SandpackCodeEditor,{showLineNumbers:!0,showInlineErrors:!0,readOnly:!0,showTabs:!1}),(0,s.jsx)("div",{style:{position:"absolute",right:"5px",bottom:"5px"},children:(0,s.jsx)(i.OpenInCodeSandboxButton,{})})]})})}},14511:function(n,e,t){"use strict";t.r(e),t.d(e,{commonFiles:function(){return o}});var o={".codesandbox/environment.json":'{\n  "nodeVersion": 18\n}\n',".codesandbox/tasks.json":'{\n  "$schema": "https://codesandbox.io/schemas/tasks.json",\n  "setupTasks": [\n    {\n      "name": "Installing Dependencies",\n      "command": "pnpm install"\n    }\n  ],\n  "tasks": {\n    "start": {\n      "name": "Application",\n      "command": "pnpm run start",\n      "runAtStart": true,\n      "restartOn": {\n        "files": ["pnpm-lock.yaml"]\n      }\n    }\n  }\n}\n',".gitignore":".DS_Store\n\n.pnp\n.pnp.js\n.env.local\n.env.*.local\n.history\n*.log*\n\nnode_modules/\n.yarn-integrity\n.pnpm-store/\n*.tsbuildinfo\n.eslintcache\n.changeset/pre.json\n\ndist/\ncoverage/\nrelease/\noutput/\noutput_resource/\nlog/\n\n.vscode/**/*\n!.vscode/settings.json\n!.vscode/extensions.json\n.idea/\n\n**/*/typings/auto-generated\n\nmodern.config.local.*\n",".npmrc":"strict-peer-dependencies=false\n"}},59986:function(n,e,t){"use strict";t.r(e),t.d(e,{ModernTemplates:function(){return r}});var o=t("36128").ModuleFiles,r={"web-app":t("56742").MWAFiles,"npm-module":o}},36128:function(n,e,t){"use strict";t.r(e),t.d(e,{ModuleFiles:function(){return s}});var o=t("90247"),r=t("14511"),s=(0,o._)({},r.commonFiles,{".npmignore":".DS_Store\n\n.pnp\n.pnp.js\n.env.local\n.env.*.local\n.history\n*.log*\n\nnode_modules/\n.yarn-integrity\n*.tsbuildinfo\n.eslintcache\n\ncoverage/\nrelease/\noutput/\noutput_resource/\ntests/\n\n.vscode/**/*\n!.vscode/settings.json\n!.vscode/extensions.json\n.idea/\n\nsrc/\n\nmodern.config.*\njest.config.js\n.eslintrc.js\n.eslintrc\ntsconfig.json\nCHANGELOG.md\n\n**/*/api/typings/auto-generated\n","README.md":"# Modern.js Package\n\n## Setup\n\nInstall the dependencies:\n\n```bash\npnpm install\n```\n\n## Get Started\n\nRun and debug the module:\n\n```bash\npnpm dev\n```\n\nRun test cases:\n\n```bash\npnpm test\n```\n\nBuild the module for production:\n\n```bash\npnpm build\n```\n\nEnable optional features:\n\n```bash\npnpm new\n```\n\nOther commands:\n\n```bash\npnpm lint         # Lint and fix source files\npnpm change       # Add a new changeset\npnpm bump         # Update version and changelog via changeset\npnpm release      # Release the package\n```\n\nFor more information, see the [Modern.js Module documentation](https://modernjs.dev/module-tools/en).\n","package.json":'{\n  "name": "modern-npm-module",\n  "version": "0.1.0",\n  "types": "./dist/types/index.d.ts",\n  "main": "./dist/lib/index.js",\n  "module": "./dist/es/index.js",\n  "scripts": {\n    "prepare": "modern build && husky install",\n    "dev": "modern dev",\n    "build": "modern build",\n    "build:watch": "modern build -w",\n    "reset": "rimraf ./**/node_modules",\n    "lint": "modern lint",\n    "change": "modern change",\n    "bump": "modern bump",\n    "pre": "modern pre",\n    "change-status": "modern change-status",\n    "gen-release-note": "modern gen-release-note",\n    "release": "modern release",\n    "new": "modern new",\n    "upgrade": "modern upgrade"\n  },\n  "lint-staged": {\n    "*.{js,jsx,ts,tsx,mjs,cjs}": [\n      "node --max_old_space_size=8192 ./node_modules/eslint/bin/eslint.js --fix --color --cache --quiet"\n    ]\n  },\n  "eslintIgnore": [\n    "node_modules/",\n    "dist/"\n  ],\n  "dependencies": {},\n  "peerDependencies": {},\n  "devDependencies": {\n    "@modern-js/module-tools": "2.46.0",\n    "@modern-js/eslint-config": "2.46.0",\n    "typescript": "~5.0.4",\n    "@types/node": "~16.11.7",\n    "rimraf": "~3.0.2",\n    "lint-staged": "~13.1.0",\n    "prettier": "~2.8.1",\n    "husky": "~8.0.1"\n  },\n  "sideEffects": [],\n  "publishConfig": {\n    "access": "public",\n    "registry": "https://registry.npmjs.org/"\n  }\n}\n',"src/index.ts":"export default function () {\n  return 'hello world';\n}\n","modern.config.ts":"import { moduleTools, defineConfig } from '@modern-js/module-tools';\n\nexport default defineConfig({\n  plugins: [moduleTools()],\n  buildPreset: 'npm-library',\n});\n","tsconfig.json":'{\n  "compilerOptions": {\n    "allowJs": true,\n    "baseUrl": ".",\n    "declaration": true,\n    "emitDeclarationOnly": true,\n    "esModuleInterop": true,\n    "forceConsistentCasingInFileNames": true,\n    "isolatedModules": true,\n    "jsx": "preserve",\n    "lib": ["DOM", "ESNext"],\n    "moduleResolution": "node",\n    "paths": {\n      "@/*": ["./src/*"]\n    },\n    "resolveJsonModule": true,\n    "rootDir": "src",\n    "skipLibCheck": true,\n    "strict": true\n  },\n  "exclude": ["**/node_modules"],\n  "include": ["src"]\n}\n',"src/modern-app-env.d.ts":"/// <reference types='@modern-js/module-tools/types' />\n/// <reference types='@modern-js/plugin-testing/types' />\n"})},56742:function(n,e,t){"use strict";t.r(e),t.d(e,{MWAFiles:function(){return s}});var o=t("90247"),r=t("14511"),s=(0,o._)({},r.commonFiles,{".browserslistrc":"chrome >= 51\nedge >= 15\nfirefox >= 54\nsafari >= 10\nios_saf >= 10\n","package.json":'{\n  "name": "modern-app",\n  "version": "0.1.0",\n  "scripts": {\n    "reset": "npx rimraf ./**/node_modules",\n    "dev": "modern dev",\n    "build": "modern build",\n    "start": "modern start",\n    "serve": "modern serve",\n    "new": "modern new",\n    "lint": "modern lint",\n    "prepare": "husky install",\n    "upgrade": "modern upgrade"\n  },\n  "engines": {\n    "node": ">=16.18.1"\n  },\n  "lint-staged": {\n    "*.{js,jsx,ts,tsx,mjs,cjs}": [\n      "node --max_old_space_size=8192 ./node_modules/eslint/bin/eslint.js --fix --color --cache --quiet"\n    ]\n  },\n  "eslintIgnore": [\n    "node_modules/",\n    "dist/"\n  ],\n  "dependencies": {\n    "@modern-js/runtime": "2.46.0",\n    "react": "~18.2.0",\n    "react-dom": "~18.2.0"\n  },\n  "devDependencies": {\n    "@modern-js/app-tools": "2.46.0",\n    "@modern-js/eslint-config": "2.46.0",\n    "@modern-js/tsconfig": "2.46.0",\n    "@modern-js-app/eslint-config": "2.46.0",\n    "typescript": "~5.0.4",\n    "@types/jest": "~29.2.4",\n    "@types/node": "~16.11.7",\n    "@types/react": "~18.0.26",\n    "@types/react-dom": "~18.0.10",\n    "lint-staged": "~13.1.0",\n    "prettier": "~2.8.1",\n    "husky": "~8.0.1",\n    "rimraf": "~3.0.2"\n  }\n}\n',"README.md":"# Modern.js App\n\n## Setup\n\nInstall the dependencies:\n\n```bash\npnpm install\n```\n\n## Get Started\n\nStart the dev server:\n\n```bash\npnpm dev\n```\n\nEnable optional features or add a new entry:\n\n```bash\npnpm new\n```\n\nBuild the app for production:\n\n```bash\npnpm build\n```\n\nPreview the production build locally:\n\n```bash\npnpm serve\n```\n\nFor more information, see the [Modern.js documentation](https://modernjs.dev/en).\n","modern.config.ts":"import { appTools, defineConfig } from '@modern-js/app-tools';\n\n// https://modernjs.dev/en/configure/app/usage\nexport default defineConfig({\n  runtime: {\n    router: true,\n  },\n  plugins: [appTools()],\n});\n","tsconfig.json":'{\n  "extends": "@modern-js/tsconfig/base",\n  "compilerOptions": {\n    "declaration": false,\n    "jsx": "preserve",\n    "baseUrl": "./",\n    "paths": {\n      "@/*": ["./src/*"],\n      "@shared/*": ["./shared/*"]\n    }\n  },\n  "include": ["src", "shared", "config", "modern.config.ts"],\n  "exclude": ["**/node_modules"]\n}\n',"src/modern-app-env.d.ts":"/// <reference types='@modern-js/app-tools/types' />\n/// <reference types='@modern-js/runtime/types' />\n/// <reference types='@modern-js/runtime/types/router' />\n","src/routes/index.css":"html,\nbody {\n  padding: 0;\n  margin: 0;\n  font-family: PingFang SC, Hiragino Sans GB, Microsoft YaHei, Arial, sans-serif;\n  background: linear-gradient(to bottom, transparent, #fff) #eceeef;\n}\n\np {\n  margin: 0;\n}\n\n* {\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  box-sizing: border-box;\n}\n\n.container-box {\n  min-height: 100vh;\n  max-width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding-top: 10px;\n}\n\nmain {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.title {\n  display: flex;\n  margin: 4rem 0 4rem;\n  align-items: center;\n  font-size: 4rem;\n  font-weight: 600;\n}\n\n.logo {\n  width: 6rem;\n  margin: 7px 0 0 1rem;\n}\n\n.name {\n  color: #4ecaff;\n}\n\n.description {\n  text-align: center;\n  line-height: 1.5;\n  font-size: 1.3rem;\n  color: #1b3a42;\n  margin-bottom: 5rem;\n}\n\n.code {\n  background: #fafafa;\n  border-radius: 12px;\n  padding: 0.6rem 0.9rem;\n  font-size: 1.05rem;\n  font-family: Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono,\n    Bitstream Vera Sans Mono, Courier New, monospace;\n}\n\n.container-box .grid {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 1100px;\n  margin-top: 3rem;\n}\n\n.card {\n  padding: 1.5rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  height: 100px;\n  color: inherit;\n  text-decoration: none;\n  transition: 0.15s ease;\n  width: 45%;\n}\n\n.card:hover,\n.card:focus {\n  transform: scale(1.05);\n}\n\n.card h2 {\n  display: flex;\n  align-items: center;\n  font-size: 1.5rem;\n  margin: 0;\n  padding: 0;\n}\n\n.card p {\n  opacity: 0.6;\n  font-size: 0.9rem;\n  line-height: 1.5;\n  margin-top: 1rem;\n}\n\n.arrow-right {\n  width: 1.3rem;\n  margin-left: 0.5rem;\n  margin-top: 3px;\n}\n","src/routes/layout.tsx":"import { Outlet } from '@modern-js/runtime/router';\n\nexport default function Layout() {\n  return (\n    <div>\n      <Outlet />\n    </div>\n  );\n}\n","src/routes/page.tsx":`import { Helmet } from '@modern-js/runtime/head';
import './index.css';

const Index = () => (
  <div className="container-box">
    <Helmet>
      <link
        rel="icon"
        type="image/x-icon"
        href="https://lf3-static.bytednsdoc.com/obj/eden-cn/uhbfnupenuhf/favicon.ico"
      />
    </Helmet>
    <main>
      <div className="title">
        Welcome to
        <img
          className="logo"
          src="https://lf3-static.bytednsdoc.com/obj/eden-cn/zq-uylkvT/ljhwZthlaukjlkulzlp/modern-js-logo.svg"
          alt="Modern.js Logo"
        />
        <p className="name">Modern.js</p>
      </div>
      <p className="description">
        Get started by editing <code className="code">src/routes/page.tsx</code>
      </p>
      <div className="grid">
        <a
          href="https://modernjs.dev/guides/get-started/introduction.html"
          target="_blank"
          rel="noopener noreferrer"
          className="card"
        >
          <h2>
            Guide
            <img
              className="arrow-right"
              src="https://lf3-static.bytednsdoc.com/obj/eden-cn/zq-uylkvT/ljhwZthlaukjlkulzlp/arrow-right.svg"
            />
          </h2>
          <p>Follow the guides to use all features of Modern.js.</p>
        </a>
        <a
          href="https://modernjs.dev/tutorials/foundations/introduction.html"
          target="_blank"
          className="card"
          rel="noreferrer"
        >
          <h2>
            Tutorials
            <img
              className="arrow-right"
              src="https://lf3-static.bytednsdoc.com/obj/eden-cn/zq-uylkvT/ljhwZthlaukjlkulzlp/arrow-right.svg"
            />
          </h2>
          <p>Learn to use Modern.js to create your first application.</p>
        </a>
        <a
          href="https://modernjs.dev/configure/app/usage.html"
          target="_blank"
          className="card"
          rel="noreferrer"
        >
          <h2>
            Config
            <img
              className="arrow-right"
              src="https://lf3-static.bytednsdoc.com/obj/eden-cn/zq-uylkvT/ljhwZthlaukjlkulzlp/arrow-right.svg"
            />
          </h2>
          <p>Find all configuration options provided by Modern.js.</p>
        </a>
        <a
          href="https://github.com/web-infra-dev/modern.js"
          target="_blank"
          rel="noopener noreferrer"
          className="card"
        >
          <h2>
            Github
            <img
              className="arrow-right"
              src="https://lf3-static.bytednsdoc.com/obj/eden-cn/zq-uylkvT/ljhwZthlaukjlkulzlp/arrow-right.svg"
            />
          </h2>
          <p>View the source code of Github, feel free to contribute.</p>
        </a>
      </div>
    </main>
  </div>
);

export default Index;
`})},97334:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return l}});var o=t("39980"),r=t("96954"),s=t("61686");function i(n){let e=Object.assign({h1:"h1",a:"a",p:"p",ul:"ul",li:"li",code:"code",pre:"pre"},(0,r.useMDXComponents)(),n.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(e.h1,{id:"route-authorization",children:["Route Authorization",(0,o.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#route-authorization",children:"#"})]}),"\n",(0,o.jsxs)(e.p,{children:["Modern.js defaults to the convention-based routing based on React Router 6. For more details, please refer to ",(0,o.jsx)(e.a,{href:"/guides/basic-features/routes#routing-scheme",children:"Routing"}),"."]}),"\n",(0,o.jsx)(e.p,{children:"In a web application, if there are multiple routes, we may need to authorize access to some of them before accessing them. For example, in the following scenario:"}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:["Access to the ",(0,o.jsx)(e.code,{children:"/"})," route does not require authorization and can be accessed directly."]}),"\n",(0,o.jsxs)(e.li,{children:["Access to the ",(0,o.jsx)(e.code,{children:"/protected"})," route requires authorization. If there is no authorization, it will automatically redirect to the ",(0,o.jsx)(e.code,{children:"/login"})," route. After successful login, it returns to ",(0,o.jsx)(e.code,{children:"/protected"}),"."]}),"\n"]}),"\n","\n",(0,o.jsxs)(s.default,{template:"web-app",children:[(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-tsx",meta:'title="src/routes/page.tsx"',children:'import { Helmet } from \'@modern-js/runtime/head\';\nimport \'./index.css\';\n\nconst PublicPage = (): JSX.Element => (\n  <div className="container-box">\n    <Helmet>\n      <link\n        rel="icon"\n        type="image/x-icon"\n        href="https://lf3-static.bytednsdoc.com/obj/eden-cn/uhbfnupenuhf/favicon.ico"\n      />\n    </Helmet>\n    <h3>Public</h3>\n  </div>\n);\n\nexport default PublicPage;\n\n'})}),(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-tsx",meta:'title="src/routes/layout.tsx"',children:"import { Link, Outlet } from '@modern-js/runtime/router';\nimport { AuthProvider, AuthStatus } from './Auth';\n\nexport default function Layout() {\n  return (\n    <AuthProvider>\n      <AuthStatus />\n\n      <ul>\n        <li>\n          <Link to=\"/\">Public Page</Link>\n        </li>\n        <li>\n          <Link to=\"/protected\">Protected Page</Link>\n        </li>\n      </ul>\n\n      <Outlet />\n    </AuthProvider>\n  );\n}\n\n"})}),(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-ts",meta:'title="src/routes/fakeAuth.ts"',children:"/**\n * This represents some generic auth provider API, like Firebase.\n */\nconst fakeAuthProvider = {\n  isAuthenticated: false,\n  signin(callback: VoidFunction) {\n    fakeAuthProvider.isAuthenticated = true;\n    setTimeout(callback, 100); // fake async\n  },\n  signout(callback: VoidFunction) {\n    fakeAuthProvider.isAuthenticated = false;\n    setTimeout(callback, 100);\n  },\n};\n\nexport { fakeAuthProvider };\n\n"})}),(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-ts",meta:'title="src/routes/Auth.tsx"',children:"import React from 'react';\nimport { useNavigate, Navigate, useLocation } from '@modern-js/runtime/router';\nimport { fakeAuthProvider } from './fakeAuth';\n\ninterface AuthContextType {\n  user: any;\n  signin: (user: string, callback: VoidFunction) => void;\n  signout: (callback: VoidFunction) => void;\n}\n\nconst AuthContext = React.createContext<AuthContextType>(null!);\n\nexport function AuthProvider({ children }: { children: React.ReactNode }) {\n  const [user, setUser] = React.useState<any>(null);\n\n  const signin = (newUser: string, callback: VoidFunction) =>\n    fakeAuthProvider.signin(() => {\n      setUser(newUser);\n      callback();\n    });\n\n  const signout = (callback: VoidFunction) =>\n    fakeAuthProvider.signout(() => {\n      setUser(null);\n      callback();\n    });\n\n  const value = { user, signin, signout };\n\n  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;\n}\n\nexport function useAuth() {\n  return React.useContext(AuthContext);\n}\n\nexport function AuthStatus() {\n  const auth = useAuth();\n  console.log('auth', auth);\n  const navigate = useNavigate();\n\n  if (!auth.user) {\n    return <p>You are not logged in.</p>;\n  }\n\n  return (\n    <p>\n      Welcome {auth.user}!{' '}\n      <button\n        type=\"button\"\n        onClick={() => {\n          auth.signout(() => navigate('/'));\n        }}\n      >\n        Sign out\n      </button>\n    </p>\n  );\n}\n\nexport function RequireAuth({ children }: { children: JSX.Element }) {\n  const auth = useAuth();\n  const location = useLocation();\n\n  if (!auth.user) {\n    // Redirect them to the /login page, but save the current location they were\n    // trying to go to when they were redirected. This allows us to send them\n    // along to that page after they login, which is a nicer user experience\n    // than dropping them off on the home page.\n    return <Navigate to=\"/login\" state={{ from: location }} replace />;\n  }\n\n  return children;\n}\n\n"})}),(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-ts",meta:'title="src/routes/protected/page.tsx"',children:"import { RequireAuth } from '../Auth';\n\nexport default function ProtectedPage() {\n  return (\n    <div className=\"container-box\">\n      <RequireAuth>\n        <h3>Protected</h3>\n      </RequireAuth>\n    </div>\n  );\n}\n\n"})}),(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-ts",meta:'title="src/routes/login/page.tsx"',children:"import { useLocation, useNavigate } from '@modern-js/runtime/router';\nimport { useAuth } from '../Auth';\n\nexport default function Login() {\n  const navigate = useNavigate();\n  const location = useLocation();\n  const auth = useAuth();\n\n  const from = location.state?.from?.pathname || '/';\n\n  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {\n    event.preventDefault();\n\n    const formData = new FormData(event.currentTarget);\n    const username = formData.get('username') as string;\n\n    auth.signin(username, () => {\n      // Send them back to the page they tried to visit when they were\n      // redirected to the login page. Use { replace: true } so we don't create\n      // another entry in the history stack for the login page.  This means that\n      // when they get to the protected page and click the back button, they\n      // won't end up back on the login page, which is also really nice for the\n      // user experience.\n      navigate(from, { replace: true });\n    });\n  }\n\n  return (\n    <div>\n      <p>You must log in to view the page at {from}</p>\n\n      <form onSubmit={handleSubmit}>\n        <label>\n          Username: <input name=\"username\" type=\"text\" />\n        </label>{' '}\n        <button type=\"submit\">Login</button>\n      </form>\n    </div>\n  );\n}\n\n"})})]})]})}function a(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}=Object.assign({},(0,r.useMDXComponents)(),n.components);return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(i,{...n})}):i(n)}var l=a;a.__RSPRESS_PAGE_META={},a.__RSPRESS_PAGE_META["en%2Ftutorials%2Fexamples%2Fcsr-auth.mdx"]={toc:[],title:"Route Authorization",frontmatter:{title:"Route Authorization"}}},61686:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return l}}),t("76959"),t("11057"),t("64667");var o=t("39980"),r=t("76510"),s=t("2363"),i=t.n(s),a=t("44075");t("47622");var l=n=>{let e=(0,a.useDark)(),{children:t,...s}=n,l={};return i().Children.forEach(t,n=>{if(n){let{meta:e,children:t}=n.props.children.props,o=e.match(/title="(.*)"/);o.length>1&&(l[o[1]]=t)}}),(0,o.jsx)(a.NoSSR,{children:(0,o.jsx)(r.default,{files:l,theme:e?"dark":"light",...s})})}},47622:function(n){}}]);