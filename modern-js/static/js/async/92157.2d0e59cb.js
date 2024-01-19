/*! For license information please see 92157.2d0e59cb.js.LICENSE.txt */
(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["92157"],{89204:function(e,n,s){"use strict";s.r(n),s.d(n,{default:function(){return c}});var i=s("39980"),r=s("96954");function o(e){let n=Object.assign({h1:"h1",a:"a",p:"p",code:"code",pre:"pre",h2:"h2",h3:"h3",div:"div"},(0,r.useMDXComponents)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.h1,{id:"\u63D2\u4EF6-api",children:["\u63D2\u4EF6 API",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u63D2\u4EF6-api",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["\u63D2\u4EF6\u7684 ",(0,i.jsx)(n.code,{children:"setup"})," \u51FD\u6570\u4F1A\u63A5\u6536\u4E00\u4E2A ",(0,i.jsx)(n.code,{children:"api"})," \u5165\u53C2\uFF0C\u4F60\u53EF\u4EE5\u8C03\u7528 api \u4E0A\u63D0\u4F9B\u7684\u4E00\u4E9B\u65B9\u6CD5\u6765\u83B7\u53D6\u5230\u914D\u7F6E\u3001\u5E94\u7528\u4E0A\u4E0B\u6587\u7B49\u4FE1\u606F\u3002"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"import type { CliPlugin } from '@modern-js/core';\n\nexport const myPlugin = (): CliPlugin => ({\n  name: 'my-plugin',\n\n  setup(api) {\n    // \u83B7\u53D6\u5E94\u7528\u539F\u59CB\u914D\u7F6E\n    const config = api.useConfigContext();\n    // \u83B7\u53D6\u5E94\u7528\u8FD0\u884C\u4E0A\u4E0B\u6587\n    const appContext = api.useAppContext();\n    // \u83B7\u53D6\u89E3\u6790\u4E4B\u540E\u7684\u6700\u7EC8\u914D\u7F6E\n    const resolvedConfig = api.useResolvedConfigContext();\n  },\n});\n"})}),"\n",(0,i.jsxs)(n.h2,{id:"api",children:["API",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#api",children:"#"})]}),"\n",(0,i.jsxs)(n.h3,{id:"useconfigcontext",children:["useConfigContext",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#useconfigcontext",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"\u7528\u4E8E\u83B7\u53D6\u5E94\u7528\u539F\u59CB\u914D\u7F6E\u3002"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"const useConfigContext: () => UserConfig;\n\ninterface UserConfig {\n  source?: SourceConfig;\n  output?: OutputConfig;\n  server?: ServerConfig;\n  deploy?: DeployConfig;\n  // ...other fields\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u5177\u4F53\u914D\u7F6E\u5B57\u6BB5\u7684\u610F\u4E49\u8BF7\u53C2\u8003 ",(0,i.jsx)(n.a,{href:"/configure/app/usage",children:"\u914D\u7F6E"}),"\u3002"]}),"\n",(0,i.jsxs)(n.div,{className:"rspress-directive tip",children:[(0,i.jsx)(n.div,{className:"rspress-directive-title",children:"TIP"}),(0,i.jsx)(n.div,{className:"rspress-directive-content",children:(0,i.jsxs)(n.p,{children:["\u8BE5\u65B9\u6CD5\u83B7\u53D6\u5230\u7684\u662F\u53EA\u8BFB\u914D\u7F6E\uFF0C\u4E0D\u53EF\u4FEE\u6539\u3002\u5982\u679C\u9700\u8981\u4FEE\u6539\u914D\u7F6E\uFF0C\u8BF7\u4F7F\u7528 ",(0,i.jsx)(n.a,{href:"/guides/topic-detail/framework-plugin/hook-list#config",children:"config hook"}),"\u3002\n"]})})]}),"\n",(0,i.jsxs)(n.h3,{id:"useresolvedconfigcontext",children:["useResolvedConfigContext",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#useresolvedconfigcontext",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"\u7528\u4E8E\u83B7\u53D6\u88AB\u89E3\u6790\u3001\u5408\u5E76\u4E4B\u540E\u7684\u6700\u7EC8\u914D\u7F6E\u3002"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"const useResolvedConfigContext: () => NormalizedConfig;\n\ninterface NormalizedConfig {\n  source: NormalizedSourceConfig;\n  output: NormalizedOutputConfig;\n  server: NormalizedServerConfig;\n  deploy: NormalizedDeployConfig;\n  _raw: UserConfig; // \u539F\u59CB\u914D\u7F6E\u5BF9\u8C61\n  // ...other fields\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u914D\u7F6E\u5B57\u6BB5\u7684\u5B8C\u6574\u5185\u5BB9\u8BF7\u53C2\u8003 ",(0,i.jsx)(n.a,{href:"/configure/app/usage",children:"\u914D\u7F6E"}),"\u3002"]}),"\n",(0,i.jsxs)(n.div,{className:"rspress-directive tip",children:[(0,i.jsx)(n.div,{className:"rspress-directive-title",children:"TIP"}),(0,i.jsx)(n.div,{className:"rspress-directive-content",children:(0,i.jsxs)(n.p,{children:["\u8BE5\u65B9\u6CD5\u83B7\u53D6\u5230\u7684\u662F\u53EA\u8BFB\u914D\u7F6E\uFF0C\u4E0D\u53EF\u4FEE\u6539\u3002\u5982\u679C\u9700\u8981\u4FEE\u6539\u914D\u7F6E\uFF0C\u8BF7\u4F7F\u7528 ",(0,i.jsx)(n.a,{href:"/guides/topic-detail/framework-plugin/hook-list#config",children:"config hook"}),"\u3002\n"]})})]}),"\n",(0,i.jsxs)(n.h3,{id:"useappcontext",children:["useAppContext",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#useappcontext",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"\u7528\u4E8E\u83B7\u53D6\u5E94\u7528\u8FD0\u884C\u4E0A\u4E0B\u6587\u3002"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"const useAppContext: () => IAppContext;\n\ninterface IAppContext {\n  /** \u5F53\u524D\u9879\u76EE\u7684\u6839\u76EE\u5F55 */\n  appDirectory: string;\n  /** \u6E90\u4EE3\u7801\u76EE\u5F55 */\n  srcDirectory: string;\n  /** \u6784\u5EFA\u4EA7\u51FA\u8F93\u51FA\u76EE\u5F55 */\n  distDirectory: string;\n  /** \u516C\u5171\u6A21\u5757\u76EE\u5F55 */\n  sharedDirectory: string;\n  /** \u6846\u67B6\u4E34\u65F6\u6587\u4EF6\u8F93\u51FA\u76EE\u5F55 */\n  internalDirectory: string;\n  /** node_modules \u76EE\u5F55 */\n  nodeModulesDirectory: string;\n  /** \u914D\u7F6E\u6587\u4EF6\u8DEF\u5F84 */\n  configFile: string | false;\n  /** \u5F53\u524D\u673A\u5668\u7684 IPv4 \u5730\u5740 */\n  ip?: string;\n  /** \u5F00\u53D1\u670D\u52A1\u5668\u7684\u7AEF\u53E3\u53F7 */\n  port?: number;\n  /** \u5F53\u524D\u9879\u76EE package.json \u7684 name */\n  packageName: string;\n  /** \u5F53\u524D\u6CE8\u518C\u7684\u63D2\u4EF6 */\n  plugins: any[];\n  /** \u9875\u9762\u5165\u53E3\u4FE1\u606F */\n  entrypoints: Entrypoint[];\n  /** \u670D\u52A1\u7AEF\u8DEF\u7531\u4FE1\u606F */\n  serverRoutes: ServerRoute[];\n  /** \u5F53\u524D\u9879\u76EE\u7C7B\u578B */\n  toolsType?: 'app-tools' | 'module-tools' | 'monorepo-tools';\n  /** \u5F53\u524D\u4F7F\u7528\u7684\u6253\u5305\u5DE5\u5177\u7C7B\u578B */\n  bundlerType?: 'webpack' | 'rspack' | 'esbuild';\n}\n"})}),"\n",(0,i.jsxs)(n.div,{className:"rspress-directive tip",children:[(0,i.jsx)(n.div,{className:"rspress-directive-title",children:"TIP"}),(0,i.jsx)(n.div,{className:"rspress-directive-content",children:(0,i.jsx)(n.p,{children:"AppContext \u4E2D\u7684\u90E8\u5206\u5B57\u6BB5\u662F\u52A8\u6001\u8BBE\u7F6E\u7684\uFF0C\u4F1A\u968F\u7740\u7A0B\u5E8F\u7684\u8FD0\u884C\u800C\u53D8\u5316\u3002\u56E0\u6B64\uFF0C\u5F53\u63D2\u4EF6\u5728\u4E0D\u540C\u7684\u65F6\u673A\u8BFB\u53D6\u5B57\u6BB5\u65F6\uFF0C\u53EF\u80FD\u4F1A\u83B7\u53D6\u5230\u4E0D\u540C\u7684\u503C\u3002"})})]}),"\n",(0,i.jsxs)(n.h3,{id:"usehookrunners",children:["useHookRunners",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#usehookrunners",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"\u7528\u4E8E\u83B7\u53D6 Hooks \u7684\u6267\u884C\u5668\uFF0C\u5E76\u89E6\u53D1\u7279\u5B9A\u7684 Hook \u6267\u884C\u3002"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"import type { CliPlugin } from '@modern-js/core';\n\nexport const myPlugin = (): CliPlugin => ({\n  name: 'my-plugin',\n\n  async setup(api) {\n    const hookRunners = api.useHookRunners();\n    // \u89E6\u53D1 afterBuild Hook\n    await hookRunners.afterBuild();\n  },\n});\n"})}),"\n",(0,i.jsxs)(n.div,{className:"rspress-directive tip",children:[(0,i.jsx)(n.div,{className:"rspress-directive-title",children:"TIP"}),(0,i.jsx)(n.div,{className:"rspress-directive-content",children:(0,i.jsx)(n.p,{children:"\u8BF7\u5C3D\u91CF\u907F\u514D\u6267\u884C\u6846\u67B6\u5185\u7F6E\u7684 hooks\uFF0C\u5426\u5219\u53EF\u80FD\u4F1A\u5BFC\u81F4\u6846\u67B6\u5185\u90E8\u7684\u8FD0\u884C\u903B\u8F91\u51FA\u9519\u3002"})})]})]})}function t(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,r.useMDXComponents)(),e.components);return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}var c=t;t.__RSPRESS_PAGE_META={},t.__RSPRESS_PAGE_META["zh%2Fguides%2Ftopic-detail%2Fframework-plugin%2Fplugin-api.mdx"]={toc:[{text:"API",id:"api",depth:2},{text:"useConfigContext",id:"useconfigcontext",depth:3},{text:"useResolvedConfigContext",id:"useresolvedconfigcontext",depth:3},{text:"useAppContext",id:"useappcontext",depth:3},{text:"useHookRunners",id:"usehookrunners",depth:3}],title:"\u63D2\u4EF6 API",frontmatter:{sidebar_position:6}}}}]);