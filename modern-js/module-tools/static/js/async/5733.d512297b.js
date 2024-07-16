"use strict";(self.webpackChunk_modern_js_module_tools_docs=self.webpackChunk_modern_js_module_tools_docs||[]).push([["5733"],{4904:function(e,n,s){s.r(n),s.d(n,{default:function(){return t}});var i=s(9980),r=s(9580);function d(e){let n=Object.assign({h1:"h1",a:"a",p:"p",code:"code",h2:"h2",pre:"pre",h3:"h3",div:"div",ul:"ul",li:"li"},(0,r.ah)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.h1,{id:"setup-\u51FD\u6570",children:["Setup \u51FD\u6570",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#setup-\u51FD\u6570",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["\u5728",(0,i.jsx)(n.a,{href:"/plugins/guide/plugin-object",children:"\u300C\u63D2\u4EF6\u5BF9\u8C61\u300D"})," \u90E8\u5206\u6211\u4EEC\u77E5\u9053\u63D2\u4EF6\u5BF9\u8C61\u5305\u542B\u4E86\u4E00\u4E2A ",(0,i.jsx)(n.code,{children:"setup"})," \u51FD\u6570\uFF0C\u8BE5\u51FD\u6570\u4E0D\u4EC5\u5305\u542B\u4E86\u4E00\u4E2A ",(0,i.jsx)(n.code,{children:"api"})," \u5BF9\u8C61\u53C2\u6570\uFF0C\u540C\u65F6\u8FD8\u53EF\u4EE5\u8FD4\u56DE\u4E00\u4E2A Hooks \u5BF9\u8C61\u3002"]}),"\n",(0,i.jsxs)(n.h2,{id:"\u63D2\u4EF6-api-\u5BF9\u8C61",children:["\u63D2\u4EF6 API \u5BF9\u8C61",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u63D2\u4EF6-api-\u5BF9\u8C61",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["\u63D2\u4EF6\u7684 ",(0,i.jsx)(n.code,{children:"setup"})," \u51FD\u6570\u4F1A\u63D0\u4F9B\u4E00\u4E2A ",(0,i.jsx)(n.code,{children:"api"})," \u5BF9\u8C61\u53C2\u6570\uFF0C\u4F60\u53EF\u4EE5\u8C03\u7528\u8BE5\u5BF9\u8C61\u4E0A\u63D0\u4F9B\u7684\u4E00\u4E9B\u65B9\u6CD5\u6765\u83B7\u53D6\u5230\u914D\u7F6E\u3001\u9879\u76EE\u4E0A\u4E0B\u6587\u7B49\u4FE1\u606F\u3002"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"export const myPlugin = (): CliPlugin<ModuleTools> => ({\n  name: 'my-plugin',\n\n  setup(api) {\n    // \u83B7\u53D6\u5E94\u7528\u539F\u59CB\u914D\u7F6E\n    const config = api.useConfigContext();\n    // \u83B7\u53D6\u5E94\u7528\u8FD0\u884C\u4E0A\u4E0B\u6587\n    const appContext = api.useAppContext();\n    // \u83B7\u53D6\u89E3\u6790\u4E4B\u540E\u7684\u6700\u7EC8\u914D\u7F6E\n    const resolvedConfig = api.useResolvedConfigContext();\n  },\n});\n"})}),"\n",(0,i.jsxs)(n.h3,{id:"apiuseappcontext",children:[(0,i.jsx)(n.code,{children:"api.useAppContext"}),(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#apiuseappcontext",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"\u7528\u4E8E\u83B7\u53D6\u9879\u76EE\u4E0A\u4E0B\u6587\u4FE1\u606F\u3002"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"const useAppContext: () => IAppContext;\n\ninterface IAppContext {\n  appDirectory: string;\n  configFile: string | false;\n  packageName: string;\n  nodeModulesDirectory: string;\n  internalDirectory: string;\n  plugins: {\n    cli?: any;\n    server?: any;\n  }[];\n}\n"})}),"\n",(0,i.jsxs)(n.div,{className:"rspress-directive info",children:[(0,i.jsx)(n.div,{className:"rspress-directive-title",children:"INFO"}),(0,i.jsx)(n.div,{className:"rspress-directive-content",children:(0,i.jsx)(n.p,{children:"\u901A\u8FC7\u5B9E\u9645\u7684\u7C7B\u578B\u6587\u4EF6\uFF0C\u6211\u4EEC\u53EF\u4EE5\u770B\u5230\u8FD8\u5B58\u5728\u4E00\u4E9B\u5176\u4ED6\u5B57\u6BB5\uFF0C\u4E0D\u8FC7\u76EE\u524D\u5BF9\u4E8E Modern.js Module \u6709\u610F\u4E49\u7684\u5B57\u6BB5\u53EA\u6709\u4EE5\u4E0A\u5185\u5BB9\uFF0Capi \u5BF9\u8C61\u5176\u4ED6\u7684\u65B9\u6CD5\u4E5F\u662F\u5982\u6B64\u3002"})})]}),"\n",(0,i.jsxs)(n.h3,{id:"apiuseresolvedconfigcontext",children:[(0,i.jsx)(n.code,{children:"api.useResolvedConfigContext"}),(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#apiuseresolvedconfigcontext",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"\u7528\u4E8E\u83B7\u53D6\u89E3\u6790\u4E4B\u540E\u7684\u6700\u7EC8\u914D\u7F6E\u3002"}),"\n",(0,i.jsxs)(n.div,{className:"rspress-directive info",children:[(0,i.jsx)(n.div,{className:"rspress-directive-title",children:"INFO"}),(0,i.jsx)(n.div,{className:"rspress-directive-content",children:(0,i.jsxs)(n.p,{children:["\u5982\u679C\u9700\u8981\u83B7\u53D6\u6784\u5EFA\u76F8\u5173\u7684\u6700\u7EC8\u914D\u7F6E\uFF0C\u9700\u8981\u4F7F\u7528 ",(0,i.jsx)(n.code,{children:"beforeBuild"})," Hook\u3002\n"]})})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"const useResolvedConfigContext: () => NormalizedConfig;\n\ninterface NormalizedConfig {\n  buildConfig: PartialBuildConfig;\n  buildPreset: BuildPreset;\n  dev: Dev;\n  plugins: PluginConfig;\n  runtime: RuntimeConfig;\n  runtimeByEntries?: RuntimeByEntriesConfig;\n  _raw: UserConfig;\n}\n"})}),"\n",(0,i.jsxs)(n.h3,{id:"apiusehookrunners",children:[(0,i.jsx)(n.code,{children:"api.useHookRunners"}),(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#apiusehookrunners",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"\u7528\u4E8E\u83B7\u53D6 Hooks \u7684\u6267\u884C\u5668\uFF0C\u5E76\u89E6\u53D1\u7279\u5B9A\u7684 Hook \u6267\u884C\u3002"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"import type { CliPlugin } from '@modern-js/core';\n\nexport const myPlugin = (): CliPlugin => ({\n  name: 'my-plugin',\n\n  async setup(api) {\n    const hookRunners = api.useHookRunners();\n    // \u89E6\u53D1 afterBuild Hook\n    await hookRunners.afterBuild();\n  },\n});\n"})}),"\n",(0,i.jsxs)(n.h2,{id:"\u5F02\u6B65-setup",children:["\u5F02\u6B65 setup",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u5F02\u6B65-setup",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"CLI \u63D2\u4EF6\u7684 setup \u53EF\u4EE5\u662F\u4E00\u4E2A\u5F02\u6B65\u51FD\u6570\uFF0C\u5728\u521D\u59CB\u5316\u8FC7\u7A0B\u4E2D\u6267\u884C\u5F02\u6B65\u903B\u8F91\u3002"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"export const myPlugin = (): CliPlugin<ModuleTools> => ({\n  name: 'my-plugin',\n\n  async setup(api) {\n    await doSomething();\n  },\n});\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u6CE8\u610F\uFF0C\u53EA\u6709\u5F53\u524D\u63D2\u4EF6\u7684 setup \u5F02\u6B65\u51FD\u6570\u6267\u884C\u5B8C\u6BD5\uFF0C\u624D\u4F1A\u7EE7\u7EED\u6267\u884C\u4E0B\u4E00\u4E2A\u63D2\u4EF6\u7684 setup \u51FD\u6570\u3002\u56E0\u6B64\uFF0C\u4F60\u9700\u8981\u907F\u514D\u5728 setup \u51FD\u6570\u4E2D\u8FDB\u884C\u8017\u65F6\u8FC7\u957F\u7684\u5F02\u6B65\u64CD\u4F5C\uFF0C\u9632\u6B62\u5F71\u54CD CLI \u542F\u52A8\u6027\u80FD\u3002"}),"\n",(0,i.jsxs)(n.h2,{id:"\u751F\u547D\u5468\u671F\u94A9\u5B50",children:["\u751F\u547D\u5468\u671F\u94A9\u5B50",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u751F\u547D\u5468\u671F\u94A9\u5B50",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["\u6211\u4EEC\u77E5\u9053 ",(0,i.jsx)(n.code,{children:"setup"})," \u51FD\u6570\u4F1A\u8FD4\u56DE\u4E00\u4E2A Hooks \u5BF9\u8C61\uFF0C\u6240\u8C13 Hooks \u5BF9\u8C61\u4E5F\u53EF\u4EE5\u7406\u89E3\u662F\u5177\u6709 Modern.js Module \u751F\u547D\u5468\u671F\u94A9\u5B50\u7684\u5BF9\u8C61\u3002"]}),"\n",(0,i.jsx)(n.p,{children:"\u76EE\u524D\u4E3B\u8981\u5305\u542B\u4E24\u7C7B\u94A9\u5B50\uFF1A"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\u6784\u5EFA\u94A9\u5B50\uFF1A\u4EC5\u5728\u6267\u884C ",(0,i.jsx)(n.code,{children:"build"})," \u547D\u4EE4\u6784\u5EFA\u6E90\u7801\u4EA7\u7269\u65F6\u89E6\u53D1\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"buildPlatform"})," \u94A9\u5B50\uFF1A\u4EC5\u5728\u6267\u884C ",(0,i.jsx)(n.code,{children:"build --platform"})," \u547D\u4EE4\u751F\u6210\u5176\u4ED6\u6784\u5EFA\u4EA7\u7269\u65F6\u89E6\u53D1\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:["\u8C03\u8BD5\u94A9\u5B50\uFF1A\u8FD0\u884C ",(0,i.jsx)(n.code,{children:"dev"})," \u547D\u4EE4\u65F6\u4F1A\u89E6\u53D1\u7684\u94A9\u5B50\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["\u5173\u4E8E\u751F\u547D\u5468\u671F\u94A9\u5B50\u7684\u5B8C\u6574\u5217\u8868\u53C2\u8003 ",(0,i.jsx)(n.a,{href:"/api/plugin-api/plugin-hooks",children:"API \u6587\u6863"}),"\u3002"]})]})}function o(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}let t=o;o.__RSPRESS_PAGE_META={},o.__RSPRESS_PAGE_META["zh%2Fplugins%2Fguide%2Fsetup-function.mdx"]={toc:[{text:"\u63D2\u4EF6 API \u5BF9\u8C61",id:"\u63D2\u4EF6-api-\u5BF9\u8C61",depth:2},{text:"`api.useAppContext`",id:"apiuseappcontext",depth:3},{text:"`api.useResolvedConfigContext`",id:"apiuseresolvedconfigcontext",depth:3},{text:"`api.useHookRunners`",id:"apiusehookrunners",depth:3},{text:"\u5F02\u6B65 setup",id:"\u5F02\u6B65-setup",depth:2},{text:"\u751F\u547D\u5468\u671F\u94A9\u5B50",id:"\u751F\u547D\u5468\u671F\u94A9\u5B50",depth:2}],title:"Setup \u51FD\u6570",frontmatter:{sidebar_position:3}}}}]);