(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["41529"],{76201:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return c}});var r=t("9880"),s=t("23169"),o=t("14684"),a=t("17521");function i(n){let e=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",pre:"pre",code:"code",h3:"h3",strong:"strong"},(0,s.useMDXComponents)(),n.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(e.h1,{id:"usemoduleapps",children:["useModuleApps",(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#usemoduleapps",children:"#"})]}),"\n",(0,r.jsx)(e.p,{children:"Returns the React components of all micro-front-end sub-applications, allowing for flexible control over routing."}),"\n",(0,r.jsxs)(e.h2,{id:"usage",children:["Usage",(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#usage",children:"#"})]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-tsx",children:"import { useModuleApps } from '@modern-js/plugin-garfish/runtime';\n"})}),"\n",(0,r.jsxs)(e.h2,{id:"function-signature",children:["Function Signature",(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#function-signature",children:"#"})]}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.code,{children:"function useModuleApps(): Record<string, React.FC<any>>"})}),"\n",(0,r.jsx)(e.p,{children:"Returns the React components wrapped around each subapp."}),"\n",(0,r.jsxs)(e.h2,{id:"example",children:["Example",(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#example",children:"#"})]}),"\n",(0,r.jsx)(e.p,{children:"You need to configure the micro-front-end sub-application information first."}),"\n","\n",(0,r.jsx)(o.default,{}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-tsx",meta:"title=App.tsx",children:"function App() {\n  const { Home, Contact } = useModuleApps();\n\n  return (\n    <div>\n      Master APP\n      <Route exact path=\"/home\">\n        <Home />\n      </Route>\n      <Route exact path=\"/home\">\n        <Contact />\n      </Route>\n    </div>\n  );\n}\n\ndefineConfig(App, {\n  masterApp: {\n    apps: [\n      {\n        // name is case-sensitive, what name provides is what useModuleApps returns\n        name: 'Home',\n        entry: 'http://127.0.0.1:8081/',\n      },\n      {\n        name: 'Contact',\n        entry: 'http://localhost:8082',\n      },\n    ],\n  },\n});\n"})}),"\n",(0,r.jsxs)(e.p,{children:["Get the ",(0,r.jsx)(e.code,{children:"Home"})," and ",(0,r.jsx)(e.code,{children:"Contact"})," sub-application components(the same as name in the config) through ",(0,r.jsx)(e.code,{children:"useModuleApps()"}),". After that, you can load the child application just like a normal React component."]}),"\n",(0,r.jsxs)(e.h3,{id:"centralized-routing",children:["Centralized Routing",(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#centralized-routing",children:"#"})]}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"Centralized Routing"})," is a way to centrally configure the activation routes of sub-applications. Add ",(0,r.jsx)(e.code,{children:"activeWhen"})," config to enable ",(0,r.jsx)(e.strong,{children:"Centralized Routing"}),"."]}),"\n","\n",(0,r.jsx)(a.default,{}),"\n",(0,r.jsxs)(e.p,{children:["Then use the ",(0,r.jsx)(e.code,{children:"useModuleApp"})," method to get the ",(0,r.jsx)(e.code,{children:"MApp"})," component in the main application, and render the ",(0,r.jsx)(e.code,{children:"MApp"})," in the main application."]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-tsx",meta:"title=main: App.tsx",children:"import { useModuleApp } from '@modern-js/plugin-runtime';\n\nfunction App() {\n  const { MApp } = useModuleApps();\n\n  return (\n    <div>\n      <MApp />\n    </div>\n  );\n}\n\ndefineConfig(App, {\n  masterApp: {\n    apps: [\n      {\n        // name is case sensitive, what name provides is what useModuleApps returns\n        name: 'Dashboard',\n        activeWhen: '/dashboard',\n        entry: 'http://127.0.0.1:8081/',\n      },\n      {\n        name: 'TableList',\n        activeWhen: '/table',\n        entry: 'http://localhost:8082',\n      },\n    ],\n  },\n});\n"})}),"\n",(0,r.jsxs)(e.p,{children:["After starting the application in this way, accessing the ",(0,r.jsx)(e.code,{children:"/dashboard"})," route will render the ",(0,r.jsx)(e.code,{children:"Dashboard"}),", and accessing the ",(0,r.jsx)(e.code,{children:"/table"})," route will render the ",(0,r.jsx)(e.code,{children:"TableList"}),"."]}),"\n",(0,r.jsxs)(e.h2,{id:"load-animation",children:["Load Animation",(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#load-animation",children:"#"})]}),"\n",(0,r.jsx)(e.p,{children:"You can customize the transition animation of the component loading process as follows."}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-tsx",meta:"title=App.tsx",children:'function App() {\n  const {\n    Components: { Home },\n  } = useModuleApps();\n\n  return (\n    <div>\n      Master APP\n      <Route exact path="/home">\n        <Home\n          loadable={{\n            loading: ({ pastDelay, error }: any) => {\n              if (error) {\n                console.error(error);\n                return <div>error: {error?.message}</div>;\n              } else if (pastDelay) {\n                return <div>loading</div>;\n              } else {\n                return null;\n              }\n            },\n          }}\n        />\n      </Route>\n    </div>\n  );\n}\n'})})]})}function d(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}=Object.assign({},(0,s.useMDXComponents)(),n.components);return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(i,{...n})}):i(n)}var c=d;d.__RSPRESS_PAGE_META={},d.__RSPRESS_PAGE_META["en%2Fapis%2Fapp%2Fruntime%2Fcore%2Fuse-module-apps.mdx"]={toc:[{text:"Usage",id:"usage",depth:2},{text:"Function Signature",id:"function-signature",depth:2},{text:"Example",id:"example",depth:2},{text:"Centralized Routing",id:"centralized-routing",depth:3},{text:"Load Animation",id:"load-animation",depth:2}],title:"useModuleApps",frontmatter:{title:"useModuleApps"}}},14684:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return i}});var r=t("9880"),s=t("23169");function o(n){let e=Object.assign({pre:"pre",code:"code"},(0,s.useMDXComponents)(),n.components);return(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-js",meta:'title="modern.config.ts"',children:"import { appTools, defineConfig } from '@modern-js/app-tools';\nimport { garfishPlugin } from '@modern-js/plugin-garfish';\n\nexport default defineConfig({\n  runtime: {\n    router: true,\n    state: true,\n    masterApp: true,\n  },\n  plugins: [appTools(), garfishPlugin()],\n});\n"})})}function a(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}=Object.assign({},(0,s.useMDXComponents)(),n.components);return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(o,{...n})}):o(n)}var i=a;a.__RSPRESS_PAGE_META={},a.__RSPRESS_PAGE_META["en%2Fcomponents%2Fenable-micro-frontend.mdx"]={toc:[],title:"",frontmatter:{}}},17521:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return i}});var r=t("9880"),s=t("23169");function o(n){let e=Object.assign({pre:"pre",code:"code"},(0,s.useMDXComponents)(),n.components);return(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-js",meta:'title="src/App.tsx"',children:"import { defineConfig } from '@modern-js/runtime';\n\ndefineConfig(App, {\n  masterApp: {\n    apps: [\n      {\n        name: 'DashBoard',\n        entry: 'http://127.0.0.1:8081/',\n      },\n      {\n        name: 'TableList',\n        entry: 'http://localhost:8082',\n      },\n    ],\n  },\n});\n"})})}function a(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}=Object.assign({},(0,s.useMDXComponents)(),n.components);return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(o,{...n})}):o(n)}var i=a;a.__RSPRESS_PAGE_META={},a.__RSPRESS_PAGE_META["en%2Fcomponents%2Fmicro-runtime-config.mdx"]={toc:[],title:"",frontmatter:{}}}}]);