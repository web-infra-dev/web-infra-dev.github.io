/*! For license information please see 6081.52d430cc.js.LICENSE.txt */
(self.webpackChunk_modern_js_builder_doc=self.webpackChunk_modern_js_builder_doc||[]).push([["6081"],{6432:function(e,n,i){"use strict";i.r(n);var r=i("39980"),l=i("96954"),s=i("86088"),d=i("3971"),a=i("91648"),o=i("45895"),c=i("16093"),t=i("60492"),h=i("29580"),p=i("34397"),x=i("57282");function u(e){let n=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",strong:"strong",ul:"ul",li:"li",code:"code",h3:"h3",pre:"pre",div:"div"},(0,l.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"plugin-hooks",children:["Plugin Hooks",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#plugin-hooks",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"\u672C\u7AE0\u8282\u63CF\u8FF0\u4E86 Builder \u63D2\u4EF6\u63D0\u4F9B\u7684\u751F\u547D\u5468\u671F\u94A9\u5B50\u3002"}),"\n",(0,r.jsxs)(n.h2,{id:"\u6982\u89C8",children:["\u6982\u89C8",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u6982\u89C8",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\u901A\u7528\u94A9\u5B50"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"modifyBuilderConfig"}),"\uFF1A\u4FEE\u6539\u4F20\u9012\u7ED9 Builder \u7684\u914D\u7F6E\u9879\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"modifyBundlerChain"})," (\u5B9E\u9A8C\u6027)\uFF1A\u901A\u8FC7 chain api \u4FEE\u6539 webpack / Rspack \u914D\u7F6E\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"modifyWebpackChain"}),"\uFF1A\u4FEE\u6539 webpack chain \u914D\u7F6E\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"modifyWebpackConfig"}),"\uFF1A\u4FEE\u6539\u6700\u7EC8\u7684 webpack \u914D\u7F6E\u5BF9\u8C61\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"modifyRspackConfig"}),"\uFF1A\u4FEE\u6539\u6700\u7EC8\u7684 Rspack \u914D\u7F6E\u5BF9\u8C61\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"onBeforeCreateCompiler"}),"\uFF1A\u5728\u521B\u5EFA compiler \u5B9E\u4F8B\u524D\u8C03\u7528\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"onAfterCreateCompiler"}),"\uFF1A\u5728\u521B\u5EFA compiler \u5B9E\u4F8B\u540E\u3001\u6267\u884C\u6784\u5EFA\u524D\u8C03\u7528\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"\u6784\u5EFA\u94A9\u5B50"}),"\uFF1A\u4EC5\u5728\u6267\u884C build \u65B9\u6CD5\u6784\u5EFA\u751F\u4EA7\u73AF\u5883\u4EA7\u7269\u65F6\u8C03\u7528\u3002"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"onBeforeBuild"}),"\uFF1A\u5728\u6267\u884C\u751F\u4EA7\u73AF\u5883\u6784\u5EFA\u524D\u8C03\u7528\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"onAfterBuild"}),"\uFF1A\u5728\u6267\u884C\u751F\u4EA7\u73AF\u5883\u6784\u5EFA\u540E\u8C03\u7528\uFF0C\u53EF\u4EE5\u83B7\u53D6\u5230\u6784\u5EFA\u7ED3\u679C\u4FE1\u606F\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"\u5F00\u53D1\u670D\u52A1\u94A9\u5B50"}),"\uFF1A\u4EC5\u5728\u6267\u884C startDevServer \u65B9\u6CD5\u8FD0\u884C\u5F00\u53D1\u670D\u52A1\u5668\u65F6\u8C03\u7528\u3002"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"onBeforeStartDevServer"}),"\uFF1A\u5728\u542F\u52A8\u5F00\u53D1\u670D\u52A1\u5668\u524D\u8C03\u7528\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"onAfterStartDevServer"}),"\uFF1A\u5728\u542F\u52A8\u5F00\u53D1\u670D\u52A1\u5668\u540E\u8C03\u7528\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"onDevCompileDone"}),"\uFF1A\u5728\u6BCF\u6B21\u5F00\u53D1\u73AF\u5883\u6784\u5EFA\u7ED3\u675F\u540E\u8C03\u7528\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\u5176\u4ED6\u94A9\u5B50"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"onExit"}),"\uFF1A\u5728\u8FDB\u7A0B\u5373\u5C06\u9000\u51FA\u65F6\u8C03\u7528\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(n.h2,{id:"\u901A\u7528\u94A9\u5B50",children:["\u901A\u7528\u94A9\u5B50",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u901A\u7528\u94A9\u5B50",children:"#"})]}),"\n",(0,r.jsxs)(n.h3,{id:"modifybuilderconfig",children:["modifyBuilderConfig",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#modifybuilderconfig",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"\u4FEE\u6539\u4F20\u9012\u7ED9 Builder \u7684\u914D\u7F6E\u9879\uFF0C\u4F60\u53EF\u4EE5\u76F4\u63A5\u4FEE\u6539\u4F20\u5165\u7684 config \u5BF9\u8C61\uFF0C\u4E5F\u53EF\u4EE5\u8FD4\u56DE\u4E00\u4E2A\u65B0\u7684\u5BF9\u8C61\u6765\u66FF\u6362\u4F20\u5165\u7684\u5BF9\u8C61\u3002"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"\u7C7B\u578B"})}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"type ModifyWebpackChainUtils = {\n  mergeBuilderConfig: typeof mergeBuilderConfig;\n};\n\nfunction ModifyBuilderConfig(\n  callback: (\n    config: BuilderConfig,\n    utils: ModifyWebpackChainUtils,\n  ) => PromiseOrNot<BuilderConfig | void>,\n): void;\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"Example"})}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"export default () => ({\n  setup: api => {\n    api.modifyBuilderConfig((config, { mergeBuilderConfig }) => {\n      config.html = config.html || {};\n      config.html.title = 'Hello World!';\n      return mergeBuilderConfig(config, {\n        source: { preEntry: 'foo.js' },\n      });\n    });\n  },\n});\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"modifybundlerchain-\u5B9E\u9A8C\u6027",children:["modifyBundlerChain ",(0,r.jsx)(n.code,{children:"\u5B9E\u9A8C\u6027"}),(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#modifybundlerchain-\u5B9E\u9A8C\u6027",children:"#"})]}),"\n",(0,r.jsxs)(n.div,{className:"rspress-directive tip",children:[(0,r.jsx)(n.div,{className:"rspress-directive-title",children:"\u4EC0\u4E48\u662F BundlerChain"}),(0,r.jsxs)(n.div,{className:"rspress-directive-content",children:["\n","\n",(0,r.jsx)(s.default,{}),"\n"]})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"modifyBundlerChain"})," \u7528\u4E8E\u8C03\u7528 bundler chain \u6765\u4FEE\u6539 webpack / Rspack \u7684\u914D\u7F6E\u3002\u4F60\u5728\u4F7F\u7528 webpack-provider \u6216 rspack-provider \u65F6\u90FD\u53EF\u4EE5\u4F7F\u7528\u8BE5 hook\u3002"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"\u7C7B\u578B"})}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"type ModifyBundlerChainUtils = {\n  env: NodeEnv;\n  isProd: boolean;\n  target: BuilderTarget;\n  isServer: boolean;\n  isWebWorker: boolean;\n  CHAIN_ID: ChainIdentifier;\n  HtmlPlugin: typeof import('html-webpack-plugin');\n  bundler: {\n    // \u53D6\u51B3\u4E8E bundler \u7C7B\u578B\n    BannerPlugin: typeof webpack.BannerPlugin | typeof rspack.BannerPlugin;\n    DefinePlugin: typeof webpack.DefinePlugin | typeof rspack.DefinePlugin;\n  }\n};\n\nfunction ModifyBundlerChain(\n  callback: (\n    chain: BundlerChain,\n    utils: ModifyBundlerChainUtils,\n  ) => Promise<void> | void,\n): void;\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"Example"})}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';\n\nexport default () => ({\n  setup: api => {\n    api.modifyBundlerChain((chain, utils) => {\n      if (utils.env === 'development') {\n        chain.devtool('eval');\n      }\n\n      chain.plugin('bundle-analyze').use(BundleAnalyzerPlugin);\n    });\n  },\n});\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"modifywebpackchain",children:["modifyWebpackChain",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#modifywebpackchain",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"\u901A\u8FC7 webpack chain \u6765\u4FEE\u6539 webpack \u914D\u7F6E\u3002\u8BE5\u65B9\u6CD5\u4EC5\u5728\u4F7F\u7528 webpack-provider \u65F6\u8C03\u7528\u3002"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"\u7C7B\u578B"})}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"type ModifyWebpackChainUtils = {\n  env: NodeEnv;\n  isProd: boolean;\n  target: BuilderTarget;\n  webpack: typeof import('webpack');\n  isServer: boolean;\n  isWebWorker: boolean;\n  CHAIN_ID: ChainIdentifier;\n  getCompiledPath: (name: string) => string;\n  HtmlWebpackPlugin: typeof import('html-webpack-plugin');\n};\n\nfunction ModifyWebpackChain(\n  callback: (\n    chain: WebpackChain,\n    utils: ModifyWebpackChainUtils,\n  ) => Promise<void> | void,\n): void;\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"Example"})}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"export default () => ({\n  setup: api => {\n    api.modifyWebpackChain((chain, utils) => {\n      if (utils.env === 'development') {\n        chain.devtool('eval');\n      }\n    });\n  },\n});\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"modifywebpackconfig",children:["modifyWebpackConfig",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#modifywebpackconfig",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"\u4FEE\u6539\u6700\u7EC8\u7684 webpack \u914D\u7F6E\u5BF9\u8C61\uFF0C\u4F60\u53EF\u4EE5\u76F4\u63A5\u4FEE\u6539\u4F20\u5165\u7684 config \u5BF9\u8C61\uFF0C\u4E5F\u53EF\u4EE5\u8FD4\u56DE\u4E00\u4E2A\u65B0\u7684\u5BF9\u8C61\u6765\u66FF\u6362\u4F20\u5165\u7684\u5BF9\u8C61\u3002\u8BE5\u65B9\u6CD5\u4EC5\u5728\u4F7F\u7528 webpack-provider \u65F6\u8C03\u7528\u3002"}),"\n",(0,r.jsxs)(n.p,{children:["\u8BE5\u65B9\u6CD5\u7684\u8C03\u7528\u65F6\u673A\u665A\u4E8E ",(0,r.jsx)(n.code,{children:"modifyWebpackChain"})," \u94A9\u5B50\u3002"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"\u7C7B\u578B"})}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"type ModifyWebpackConfigUtils = {\n  env: NodeEnv;\n  isProd: boolean;\n  target: BuilderTarget;\n  webpack: typeof import('webpack');\n  isServer: boolean;\n  isWebWorker: boolean;\n  CHAIN_ID: ChainIdentifier;\n  getCompiledPath: (name: string) => string;\n  HtmlWebpackPlugin: typeof import('html-webpack-plugin');\n  addRules: (rules: RuleSetRule | RuleSetRule[]) => void;\n  prependPlugins: (\n    plugins: WebpackPluginInstance | WebpackPluginInstance[],\n  ) => void;\n  appendPlugins: (\n    plugins: WebpackPluginInstance | WebpackPluginInstance[],\n  ) => void;\n  removePlugin: (pluginName: string) => void;\n};\n\nfunction ModifyWebpackConfig(\n  callback: (\n    config: WebpackConfig,\n    utils: ModifyWebpackConfigUtils,\n  ) => Promise<WebpackConfig | void> | WebpackConfig | void,\n): void;\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"Example"})}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"export default () => ({\n  setup: api => {\n    api.modifyWebpackConfig((config, utils) => {\n      if (utils.env === 'development') {\n        config.devtool = 'eval';\n      }\n    });\n  },\n});\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"modifyrspackconfig",children:["modifyRspackConfig",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#modifyrspackconfig",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"\u4FEE\u6539\u6700\u7EC8\u7684 Rspack \u914D\u7F6E\u5BF9\u8C61\uFF0C\u4F60\u53EF\u4EE5\u76F4\u63A5\u4FEE\u6539\u4F20\u5165\u7684 config \u5BF9\u8C61\uFF0C\u4E5F\u53EF\u4EE5\u8FD4\u56DE\u4E00\u4E2A\u65B0\u7684\u5BF9\u8C61\u6765\u66FF\u6362\u4F20\u5165\u7684\u5BF9\u8C61\u3002\u8BE5\u65B9\u6CD5\u4EC5\u5728\u4F7F\u7528 rspack-provider \u65F6\u8C03\u7528\u3002"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"\u7C7B\u578B"})}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"type ModifyRspackConfigUtils = {\n  env: NodeEnv;\n  isProd: boolean;\n  target: BuilderTarget;\n  isServer: boolean;\n  isWebWorker: boolean;\n  getCompiledPath: (name: string) => string;\n  rspack: typeof import('@rspack/core');\n};\n\nfunction ModifyRspackConfig(\n  callback: (\n    config: RspackConfig,\n    utils: ModifyRspackConfigUtils,\n  ) => Promise<RspackConfig | void> | RspackConfig | void,\n): void;\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"Example"})}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"export default () => ({\n  setup: api => {\n    api.modifyRspackConfig((config, utils) => {\n      if (utils.env === 'development') {\n        config.devtool = 'eval';\n      }\n    });\n  },\n});\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"onbeforecreatecompiler",children:["onBeforeCreateCompiler",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#onbeforecreatecompiler",children:"#"})]}),"\n","\n",(0,r.jsx)(d.default,{}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"Example"})}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"export default () => ({\n  setup: api => {\n    api.onBeforeCreateCompiler(({ bundlerConfigs }) => {\n      console.log('the bundler config is ', bundlerConfigs);\n    });\n  },\n});\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"onaftercreatecompiler",children:["onAfterCreateCompiler",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#onaftercreatecompiler",children:"#"})]}),"\n","\n",(0,r.jsx)(a.default,{}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"Example"})}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"export default () => ({\n  setup: api => {\n    api.onAfterCreateCompiler(({ compiler }) => {\n      console.log('the compiler is ', compiler);\n    });\n  },\n});\n"})}),"\n",(0,r.jsxs)(n.h2,{id:"\u6784\u5EFA\u94A9\u5B50",children:["\u6784\u5EFA\u94A9\u5B50",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u6784\u5EFA\u94A9\u5B50",children:"#"})]}),"\n",(0,r.jsxs)(n.h3,{id:"onbeforebuild",children:["onBeforeBuild",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#onbeforebuild",children:"#"})]}),"\n","\n",(0,r.jsx)(o.default,{}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"Example"})}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"export default () => ({\n  setup: api => {\n    api.onBeforeBuild(({ bundlerConfigs }) => {\n      console.log('the bundler config is ', bundlerConfigs);\n    });\n  },\n});\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"onafterbuild",children:["onAfterBuild",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#onafterbuild",children:"#"})]}),"\n","\n",(0,r.jsx)(c.default,{}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"Example"})}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"export default () => ({\n  setup: api => {\n    api.onAfterBuild(({ stats }) => {\n      console.log(stats?.toJson());\n    });\n  },\n});\n"})}),"\n",(0,r.jsxs)(n.h2,{id:"\u5F00\u53D1\u670D\u52A1\u94A9\u5B50",children:["\u5F00\u53D1\u670D\u52A1\u94A9\u5B50",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u5F00\u53D1\u670D\u52A1\u94A9\u5B50",children:"#"})]}),"\n",(0,r.jsxs)(n.h3,{id:"onbeforestartdevserver",children:["onBeforeStartDevServer",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#onbeforestartdevserver",children:"#"})]}),"\n","\n",(0,r.jsx)(t.default,{}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"Example"})}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"export default () => ({\n  setup: api => {\n    api.onBeforeStartDevServer(() => {\n      console.log('before start!');\n    });\n  },\n});\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"onafterstartdevserver",children:["onAfterStartDevServer",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#onafterstartdevserver",children:"#"})]}),"\n","\n",(0,r.jsx)(h.default,{}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"Example"})}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"export default () => ({\n  setup: api => {\n    api.onAfterStartDevServer(({ port }) => {\n      console.log('this port is: ', port);\n    });\n  },\n});\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"ondevcompiledone",children:["onDevCompileDone",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#ondevcompiledone",children:"#"})]}),"\n","\n",(0,r.jsx)(p.default,{}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"Example"})}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"export default () => ({\n  setup: api => {\n    api.onDevCompileDone(({ isFirstCompile }) => {\n      if (isFirstCompile) {\n        console.log('first compile!');\n      } else {\n        console.log('re-compile!');\n      }\n    });\n  },\n});\n"})}),"\n",(0,r.jsxs)(n.h2,{id:"\u5176\u4ED6\u94A9\u5B50",children:["\u5176\u4ED6\u94A9\u5B50",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u5176\u4ED6\u94A9\u5B50",children:"#"})]}),"\n",(0,r.jsxs)(n.h3,{id:"onexit",children:["onExit",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#onexit",children:"#"})]}),"\n","\n",(0,r.jsx)(x.default,{}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"Example"})}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"export default () => ({\n  setup: api => {\n    api.onExit(() => {\n      console.log('exit!');\n    });\n  },\n});\n"})})]})}function f(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,l.useMDXComponents)(),e.components);return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}n.default=f,f.__RSPRESS_PAGE_META={},f.__RSPRESS_PAGE_META["zh%2Fapi%2Fplugin-hooks.mdx"]={toc:[{text:"\u6982\u89C8",id:"\u6982\u89C8",depth:2},{text:"\u901A\u7528\u94A9\u5B50",id:"\u901A\u7528\u94A9\u5B50",depth:2},{text:"modifyBuilderConfig",id:"modifybuilderconfig",depth:3},{text:"modifyBundlerChain \u5B9E\u9A8C\u6027",id:"modifybundlerchain-\u5B9E\u9A8C\u6027",depth:3},{text:"modifyWebpackChain",id:"modifywebpackchain",depth:3},{text:"modifyWebpackConfig",id:"modifywebpackconfig",depth:3},{text:"modifyRspackConfig",id:"modifyrspackconfig",depth:3},{text:"onBeforeCreateCompiler",id:"onbeforecreatecompiler",depth:3},{text:"onAfterCreateCompiler",id:"onaftercreatecompiler",depth:3},{text:"\u6784\u5EFA\u94A9\u5B50",id:"\u6784\u5EFA\u94A9\u5B50",depth:2},{text:"onBeforeBuild",id:"onbeforebuild",depth:3},{text:"onAfterBuild",id:"onafterbuild",depth:3},{text:"\u5F00\u53D1\u670D\u52A1\u94A9\u5B50",id:"\u5F00\u53D1\u670D\u52A1\u94A9\u5B50",depth:2},{text:"onBeforeStartDevServer",id:"onbeforestartdevserver",depth:3},{text:"onAfterStartDevServer",id:"onafterstartdevserver",depth:3},{text:"onDevCompileDone",id:"ondevcompiledone",depth:3},{text:"\u5176\u4ED6\u94A9\u5B50",id:"\u5176\u4ED6\u94A9\u5B50",depth:2},{text:"onExit",id:"onexit",depth:3}],title:"Plugin Hooks",frontmatter:{extractApiHeaders:[2]}}},86088:function(e,n,i){"use strict";i.r(n);var r=i("39980"),l=i("96954");function s(e){let n=Object.assign({p:"p",a:"a"},(0,l.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"Bundler chain \u662F webpack chain \u7684\u5B50\u96C6\uFF0C\u5176\u4E2D\u5305\u542B\u4E00\u90E8\u5206 webpack chain API\uFF0C\u4F60\u53EF\u4EE5\u7528\u5B83\u6765\u540C\u65F6\u4FEE\u6539 webpack \u548C Rspack \u7684\u914D\u7F6E\u3002"}),"\n",(0,r.jsxs)(n.p,{children:["\u901A\u8FC7 bundler chain \u4FEE\u6539\u7684\u914D\u7F6E\uFF0C\u5728 webpack \u548C Rspack \u6784\u5EFA\u65F6\u5747\u53EF\u751F\u6548\u3002\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0Cbundler chain \u53EA\u652F\u6301\u4FEE\u6539 webpack \u548C Rspack \u95F4\u65E0\u5DEE\u5F02\u90E8\u5206\u7684\u914D\u7F6E\u3002\u5982\uFF0C\u4FEE\u6539 devtool \u914D\u7F6E\u9879(webpack \u548C Rspack \u7684 devtool \u5C5E\u6027\u503C\u7C7B\u578B\u76F8\u540C)\uFF0C\u6216\u6DFB\u52A0\u4E00\u4E2A",(0,r.jsx)(n.a,{href:"https://www.rspack.dev/zh/guide/plugin-compat.html",target:"_blank",rel:"noopener noreferrer",children:"Rspack \u517C\u5BB9"}),"\u7684 webpack \u63D2\u4EF6\u3002"]})]})}function d(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,l.useMDXComponents)(),e.components);return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(s,{...e})}):s(e)}n.default=d,d.__RSPRESS_PAGE_META={},d.__RSPRESS_PAGE_META["zh%2Fshared%2FbundlerChain.md"]={toc:[],title:"",frontmatter:{}}}}]);