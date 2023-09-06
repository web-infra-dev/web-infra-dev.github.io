(self.webpackChunk_modern_js_module_tools_docs=self.webpackChunk_modern_js_module_tools_docs||[]).push([["4665"],{30817:function(e,n,o){"use strict";o.r(n),o.d(n,{default:function(){return d}});var i,t=o("15169"),s=o("43932"),r=o("9880"),c=o("23169");function a(e){var n=Object.assign({h1:"h1",a:"a",p:"p",code:"code",h2:"h2",pre:"pre",h3:"h3",div:"div",ul:"ul",li:"li"},(0,c.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"setup-function",children:["Setup function",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#setup-function",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["In the ",(0,r.jsx)(n.a,{href:"/plugins/guide/plugin-object",children:'"Plugin object"'})," section we know that the plugin object contains a ",(0,r.jsx)(n.code,{children:"setup"})," function that not only contains an ",(0,r.jsx)(n.code,{children:"api"})," object parameter, but also returns a Hooks object."]}),"\n",(0,r.jsxs)(n.h2,{id:"plugin-api-objects",children:["Plugin API objects",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#plugin-api-objects",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"setup"})," function of the plugin will provide an ",(0,r.jsx)(n.code,{children:"api"})," object parameter, and you can call some of the methods provided on this object to get information about the configuration, project context, etc."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"export const myPlugin = (): CliPlugin<ModuleTools> => ({\n  name: 'my-plugin',\n\n  setup(api) {\n    // Get the original configuration of the application\n    const config = api.useConfigContext();\n    // Get the application runtime context\n    const appContext = api.useAppContext();\n    // Get the final configuration after resolving\n    const resolvedConfig = api.useResolvedConfigContext();\n  },\n});\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"apiuseappcontext",children:[(0,r.jsx)(n.code,{children:"api.useAppContext"}),(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#apiuseappcontext",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"Used to get project context information."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"const useAppContext: () => IAppContext;\n\ninterface IAppContext {\n  appDirectory: string;\n  configFile: string | false;\n  packageName: string;\n  nodeModulesDirectory: string;\n  internalDirectory: string;\n  plugins: {\n    cli?: any;\n    server?: any;\n  }[];\n}\n"})}),"\n",(0,r.jsxs)(n.div,{className:"modern-directive info",children:[(0,r.jsx)(n.div,{className:"modern-directive-title",children:"INFO"}),(0,r.jsx)(n.div,{className:"modern-directive-content",children:(0,r.jsxs)(n.p,{children:["Through the actual type file, we can see that there are some additional fields. However, for Modern.js Module, the fields mentioned above are the only ones that are meaningful. The same applies to other methods of the ",(0,r.jsx)(n.code,{children:"api"})," object.\n"]})})]}),"\n",(0,r.jsxs)(n.h3,{id:"apiuseresolvedconfigcontext",children:[(0,r.jsx)(n.code,{children:"api.useResolvedConfigContext"}),(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#apiuseresolvedconfigcontext",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"Used to get the final configuration after parsing."}),"\n",(0,r.jsxs)(n.div,{className:"modern-directive info",children:[(0,r.jsx)(n.div,{className:"modern-directive-title",children:"INFO"}),(0,r.jsx)(n.div,{className:"modern-directive-content",children:(0,r.jsxs)(n.p,{children:["If you need to get the build-related final configuration, you need to use the ",(0,r.jsx)(n.code,{children:"beforeBuild"})," Hook.\n"]})})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"const useResolvedConfigContext: () => NormalizedConfig;\n\ninterface NormalizedConfig {\n  buildConfig: PartialBuildConfig;\n  buildPreset: BuildPreset;\n  dev: Dev;\n  plugins: PluginConfig;\n  runtime: RuntimeConfig;\n  runtimeByEntries?: RuntimeByEntriesConfig;\n  _raw: UserConfig;\n}\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"apiusehookrunners",children:[(0,r.jsx)(n.code,{children:"api.useHookRunners"}),(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#apiusehookrunners",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"Used to get the executors of Hooks and trigger the execution of a specific Hook."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"import type { CliPlugin } from '@modern-js/core';\n\nexport const myPlugin = (): CliPlugin => ({\n  name: 'my-plugin',\n\n  async setup(api) {\n    const hookRunners = api.useHookRunners();\n    // trigger the afterBuild Hook\n    await hookRunners.afterBuild();\n  },\n});\n"})}),"\n",(0,r.jsxs)(n.h2,{id:"asynchronous-setup",children:["Asynchronous setup",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#asynchronous-setup",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"The setup of a CLI plugin can be an asynchronous function that performs asynchronous logic during the initialization process."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"export const myPlugin = (): CliPlugin<ModuleTools> => ({\n  name: 'my-plugin',\n\n  async setup(api) {\n    await doSomething();\n  },\n});\n"})}),"\n",(0,r.jsx)(n.p,{children:"Note that the setup function of the next plugin is not executed until the async setup function of the current plugin has finished. Therefore, you should avoid performing time-consuming asynchronous operations in the setup function to avoid slowing down the startup performance of the CLI."}),"\n",(0,r.jsxs)(n.h2,{id:"life-cycle-hooks",children:["Life cycle hooks",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#life-cycle-hooks",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["We know that the ",(0,r.jsx)(n.code,{children:"setup"})," function returns a Hooks object, which can also be understood as an object with Modern.js Module lifecycle hooks."]}),"\n",(0,r.jsx)(n.p,{children:"Currently there are two main types of hooks."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["build hooks: triggered only when the ",(0,r.jsx)(n.code,{children:"build"})," command is executed to build the source code product."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"buildPlatform"})," hook: triggered only when the ",(0,r.jsx)(n.code,{children:"build --platform"})," command is executed to generate other build products."]}),"\n",(0,r.jsxs)(n.li,{children:["debug hooks: hooks that are triggered when running the ",(0,r.jsx)(n.code,{children:"dev"})," command."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["See the ",(0,r.jsx)(n.a,{href:"/en/api/plugin-api/plugin-hooks",children:"API documentation"})," for a full list of lifecycle hooks."]})]})}(i=globalThis).__RSPRESS_PAGE_META||(i.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["en%2Fplugins%2Fguide%2Fsetup-function.mdx"]={toc:[{text:"Plugin API objects",id:"plugin-api-objects",depth:2},{text:"api.useAppContext",id:"apiuseappcontext",depth:3},{text:"api.useResolvedConfigContext",id:"apiuseresolvedconfigcontext",depth:3},{text:"api.useHookRunners",id:"apiusehookrunners",depth:3},{text:"Asynchronous setup",id:"asynchronous-setup",depth:2},{text:"Life cycle hooks",id:"life-cycle-hooks",depth:2}],title:"Setup function",frontmatter:{sidebar_position:3}};var d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,c.useMDXComponents)(),e.components).wrapper;return n?(0,r.jsx)(n,(0,s._)((0,t._)({},e),{children:(0,r.jsx)(a,(0,t._)({},e))})):a(e)}}}]);