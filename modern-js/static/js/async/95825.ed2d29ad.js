(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["95825"],{29484:function(e,n,i){"use strict";i.r(n),i.d(n,{default:function(){return a},frontmatter:function(){return c}});var r=i("9880"),o=i("23169");function s(e){let n=Object.assign({h1:"h1",a:"a",p:"p",code:"code",pre:"pre",h2:"h2",h3:"h3",div:"div"},(0,o.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"plugin-api",children:["Plugin API",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#plugin-api",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"setup"})," function of the plugin will receive an ",(0,r.jsx)(n.code,{children:"api"})," imported parameter, and you can call some methods provided on the api to obtain information such as configuration and application context."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"import type { CliPlugin } from '@modern-js/core';\n\nexport const myPlugin = (): CliPlugin => ({\n  name: 'my-plugin',\n\n  setup(api) {\n    // get user config\n    const config = api.useConfigContext();\n    // get plugin context\n    const appContext = api.useAppContext();\n    // get resolved config\n    const resolvedConfig = api.useResolvedConfigContext();\n  },\n});\n"})}),"\n",(0,r.jsxs)(n.h2,{id:"api",children:["API",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#api",children:"#"})]}),"\n",(0,r.jsxs)(n.h3,{id:"useconfigcontext",children:["useConfigContext",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#useconfigcontext",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"Used to retrieve the original configuration of the application."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"const useConfigContext: () => UserConfig;\n\ninterface UserConfig {\n  source?: SourceConfig;\n  output?: OutputConfig;\n  server?: ServerConfig;\n  deploy?: DeployConfig;\n  // ...other fields\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Please refer to ",(0,r.jsx)(n.a,{href:"/configure/app/usage",children:"Configuration"})," for the specific meanings of configuration fields."]}),"\n",(0,r.jsxs)(n.div,{className:"rspress-directive tip",children:[(0,r.jsx)(n.div,{className:"rspress-directive-title",children:"TIP"}),(0,r.jsx)(n.div,{className:"rspress-directive-content",children:(0,r.jsxs)(n.p,{children:["This method returns a read-only configuration and cannot be modified. If you need to modify the configuration, please use ",(0,r.jsx)(n.a,{href:"/guides/topic-detail/framework-plugin/hook-list#config",children:"config hook"}),".\n"]})})]}),"\n",(0,r.jsxs)(n.h3,{id:"useresolvedconfigcontext",children:["useResolvedConfigContext",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#useresolvedconfigcontext",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"Used to retrieve the final configuration after parsing."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"const useResolvedConfigContext: () => NormalizedConfig;\n\ninterface NormalizedConfig {\n  source: NormalizedSourceConfig;\n  output: NormalizedOutputConfig;\n  server: NormalizedServerConfig;\n  deploy: NormalizedDeployConfig;\n  _raw: UserConfig; // the original user config\n  // ...other fields\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Please refer to ",(0,r.jsx)(n.a,{href:"/configure/app/usage",children:"Configuration"})," for the specific meanings of configuration fields."]}),"\n",(0,r.jsxs)(n.div,{className:"rspress-directive tip",children:[(0,r.jsx)(n.div,{className:"rspress-directive-title",children:"TIP"}),(0,r.jsx)(n.div,{className:"rspress-directive-content",children:(0,r.jsxs)(n.p,{children:["This method returns a read-only configuration and cannot be modified. If you need to modify the configuration, please use ",(0,r.jsx)(n.a,{href:"/guides/topic-detail/framework-plugin/hook-list#config",children:"config hook"}),".\n"]})})]}),"\n",(0,r.jsxs)(n.h3,{id:"useappcontext",children:["useAppContext",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#useappcontext",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"Used to retrieve the runtime context of the application."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"const useAppContext: () => IAppContext;\n\ninterface IAppContext {\n  /** Root directory of the current project */\n  appDirectory: string;\n  /** Source code directory */\n  srcDirectory: string;\n  /** Directory for output files */\n  distDirectory: string;\n  /** Directory for shared modules */\n  sharedDirectory: string;\n  /** Directory for framework temp files */\n  internalDirectory: string;\n  /** node_modules directory */\n  nodeModulesDirectory: string;\n  /** Path to the configuration file */\n  configFile: string | false;\n  /** IPv4 address of the current machine */\n  ip?: string;\n  /** Port number of the development server */\n  port?: number;\n  /** Name of the current project's package.json */\n  packageName: string;\n  /** Currently registered plugins */\n  plugins: any[];\n  /** Information for entry points */\n  entrypoints: Entrypoint[];\n  /** Information for server routes */\n  serverRoutes: ServerRoute[];\n  /** Tools type of the current project */\n  toolsType?: 'app-tools' | 'module-tools' | 'monorepo-tools';\n  /** Type of the bundler being used */\n  bundlerType?: 'webpack' | 'rspack' | 'esbuild';\n}\n"})}),"\n",(0,r.jsxs)(n.div,{className:"rspress-directive tip",children:[(0,r.jsx)(n.div,{className:"rspress-directive-title",children:"TIP"}),(0,r.jsx)(n.div,{className:"rspress-directive-content",children:(0,r.jsx)(n.p,{children:"Some fields in the AppContext are dynamically set and will change as the program runs. Therefore, when plugins read these fields at different times, they may get different values."})})]}),"\n",(0,r.jsxs)(n.h3,{id:"usehookrunners",children:["useHookRunners",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#usehookrunners",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"Used to retrieve the executor of Hooks and trigger the execution of specific Hooks."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"import type { CliPlugin } from '@modern-js/core';\n\nexport const myPlugin = (): CliPlugin => ({\n  name: 'my-plugin',\n\n  async setup(api) {\n    const hookRunners = api.useHookRunners();\n    // invoke afterBuild Hook\n    await hookRunners.afterBuild();\n  },\n});\n"})}),"\n",(0,r.jsxs)(n.div,{className:"rspress-directive tip",children:[(0,r.jsx)(n.div,{className:"rspress-directive-title",children:"TIP"}),(0,r.jsx)(n.div,{className:"rspress-directive-content",children:(0,r.jsx)(n.p,{children:"Please avoid executing the built-in hooks, as it may break the internal execution logic of the framework."})})]})]})}function t(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,o.useMDXComponents)(),e.components);return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(s,{...e})}):s(e)}var a=t;t.__RSPRESS_PAGE_META={},t.__RSPRESS_PAGE_META["en%2Fguides%2Ftopic-detail%2Fframework-plugin%2Fplugin-api.mdx"]={toc:[{text:"API",id:"api",depth:2},{text:"useConfigContext",id:"useconfigcontext",depth:3},{text:"useResolvedConfigContext",id:"useresolvedconfigcontext",depth:3},{text:"useAppContext",id:"useappcontext",depth:3},{text:"useHookRunners",id:"usehookrunners",depth:3}],title:"Plugin API"};let c={sidebar_position:6}}}]);