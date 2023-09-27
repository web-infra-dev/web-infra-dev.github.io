(self.webpackChunk_modern_js_builder_doc=self.webpackChunk_modern_js_builder_doc||[]).push([["8954"],{5793:function(e,n,i){"use strict";i.r(n),i.d(n,{default:function(){return m}});var r,o=i("10310"),l=i("81904"),d=i("98638"),s=i("21968"),a=i("96533"),c=i("36726"),t=i("41429"),h=i("44493"),p=i("18060"),f=i("89500"),u=i("45698"),x=i("3648");function g(e){let n=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",strong:"strong",ul:"ul",li:"li",code:"code",h3:"h3",pre:"pre"},(0,s.useMDXComponents)(),e.components);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.h1,{id:"plugin-hooks",children:["Plugin Hooks",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#plugin-hooks",children:"#"})]}),"\n",(0,d.jsx)(n.p,{children:"This section describes the lifetime hooks provided by Builder plugin."}),"\n",(0,d.jsxs)(n.h2,{id:"overview",children:["Overview",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#overview",children:"#"})]}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:"Common Hooks"})}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"modifyBuilderConfig"}),": Modify raw config of Builder."]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"modifyBundlerChain"})," (experimental): Modify config of webpack or Rspack via the bundler chain api."]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"modifyWebpackChain"}),": Modify webpack-chain."]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"modifyWebpackConfig"}),": Modify raw config of webpack."]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"modifyRspackConfig"}),": Modify raw config of Rspack."]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"onBeforeCreateCompiler"}),": Called before creating compiler instance."]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"onAfterCreateCompiler"}),": Called after the compiler object is created, but before the build is executed."]}),"\n"]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Build Hooks"}),": Called only when the build method is executed to build the production outputs."]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"onBeforeBuild"}),": Called before the production build is executed."]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"onAfterBuild"}),": Called after executing the production build, you can get the build stats."]}),"\n"]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Dev Server Hooks"}),": Called only when the startDevServer method is executed to run the development server."]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"onBeforeStartDevServer"}),": Called before starting the development server."]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"onAfterStartDevServer"}),": Called after starting the development server."]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"onDevCompileDone"}),": Called after each development compile."]}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:"Other Hooks"})}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"onExit"}),": Called when the process is going to exit."]}),"\n"]}),"\n",(0,d.jsxs)(n.h2,{id:"common-hooks",children:["Common Hooks",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#common-hooks",children:"#"})]}),"\n",(0,d.jsxs)(n.h3,{id:"modifybuilderconfig",children:["modifyBuilderConfig",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#modifybuilderconfig",children:"#"})]}),"\n",(0,d.jsx)(n.p,{children:"Modify the config passed to the Builder, you can directly modify the config object, or return a new object to replace the previous object."}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.strong,{children:"Type"})}),"\n"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",children:"type ModifyWebpackChainUtils = {\n  mergeBuilderConfig: typeof mergeBuilderConfig;\n};\n\nfunction ModifyBuilderConfig(\n  callback: (\n    config: BuilderConfig,\n    utils: ModifyWebpackChainUtils,\n  ) => PromiseOrNot<BuilderConfig | void>,\n): void;\n"})}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.strong,{children:"Example"})}),"\n"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",children:"export default () => ({\n  setup: api => {\n    api.modifyBuilderConfig((config, { mergeBuilderConfig }) => {\n      config.html = config.html || {};\n      config.html.title = 'Hello World!';\n      return mergeBuilderConfig(config, {\n        source: { preEntry: 'foo.js' },\n      });\n    });\n  },\n});\n"})}),"\n",(0,d.jsxs)(n.h3,{id:"modifybundlerchain-experimental",children:["modifyBundlerChain ",(0,d.jsx)(n.code,{children:"experimental"}),(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#modifybundlerchain-experimental",children:"#"})]}),"\n",(0,d.jsx)(n.p,{children:"Bundler chain is a subset of webpack chain, which contains part of the webpack chain API that you can use to modify both webpack and Rspack configuration."}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"modifyBundlerChain"})," is used to call the bundler chain to modify the webpack / Rspack configuration. You can use this hook when using webpack-provider or rspack-provider."]}),"\n",(0,d.jsxs)(n.p,{children:["This hook only supports modifying the configuration of the non-differentiated parts of webpack and Rspack. For example, modifying the devtool configuration option (webpack and Rspack have the same devtool property value type), or adding an ",(0,d.jsx)(n.a,{href:"https://www.rspack.dev/guide/plugin-compat.html",target:"_blank",rel:"noopener noreferrer",children:"Rspack-compatible"})," webpack plugin."]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.strong,{children:"Type"})}),"\n"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",children:"type ModifyBundlerChainUtils = {\n  env: NodeEnv;\n  isProd: boolean;\n  target: BuilderTarget;\n  isServer: boolean;\n  isWebWorker: boolean;\n  CHAIN_ID: ChainIdentifier;\n  HtmlPlugin: typeof import('html-webpack-plugin');\n  bundler: {\n    // Depends on bundler type\n    BannerPlugin: typeof webpack.BannerPlugin | typeof rspack.BannerPlugin;\n    DefinePlugin: typeof webpack.DefinePlugin | typeof rspack.DefinePlugin;\n  }\n};\n\nfunction ModifyBundlerChain(\n  callback: (\n    chain: BundlerChain,\n    utils: ModifyBundlerChainUtils,\n  ) => Promise<void> | void,\n): void;\n"})}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.strong,{children:"Example"})}),"\n"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",children:"import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';\n\nexport default () => ({\n  setup: api => {\n    api.modifyBundlerChain((chain, utils) => {\n      if (utils.env === 'development') {\n        chain.devtool('eval');\n      }\n\n      chain.plugin('bundle-analyze').use(BundleAnalyzerPlugin);\n    });\n  },\n});\n"})}),"\n",(0,d.jsxs)(n.h3,{id:"modifywebpackchain",children:["modifyWebpackChain",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#modifywebpackchain",children:"#"})]}),"\n",(0,d.jsx)(n.p,{children:"Modify the webpack config through the webpack chain. This method is only called when using webpack-provider."}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.strong,{children:"Type"})}),"\n"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",children:"type ModifyWebpackChainUtils = {\n  env: NodeEnv;\n  isProd: boolean;\n  target: BuilderTarget;\n  webpack: typeof import('webpack');\n  isServer: boolean;\n  isWebWorker: boolean;\n  CHAIN_ID: ChainIdentifier;\n  getCompiledPath: (name: string) => string;\n  HtmlWebpackPlugin: typeof import('html-webpack-plugin');\n};\n\nfunction ModifyWebpackChain(\n  callback: (\n    chain: WebpackChain,\n    utils: ModifyWebpackChainUtils,\n  ) => Promise<void> | void,\n): void;\n"})}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.strong,{children:"Example"})}),"\n"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",children:"export default () => ({\n  setup: api => {\n    api.modifyWebpackChain((chain, utils) => {\n      if (utils.env === 'development') {\n        chain.devtool('eval');\n      }\n    });\n  },\n});\n"})}),"\n",(0,d.jsxs)(n.h3,{id:"modifywebpackconfig",children:["modifyWebpackConfig",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#modifywebpackconfig",children:"#"})]}),"\n",(0,d.jsx)(n.p,{children:"To modify the final webpack config object, you can directly modify the config object, or return a new object to replace the previous object. This method is only called when using webpack-provider."}),"\n",(0,d.jsxs)(n.p,{children:["This method is called later than the ",(0,d.jsx)(n.code,{children:"modifyWebpackChain"})," hook."]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.strong,{children:"Type"})}),"\n"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",children:"type ModifyWebpackConfigUtils = {\n  env: NodeEnv;\n  isProd: boolean;\n  target: BuilderTarget;\n  webpack: typeof import('webpack');\n  isServer: boolean;\n  isWebWorker: boolean;\n  CHAIN_ID: ChainIdentifier;\n  getCompiledPath: (name: string) => string;\n  HtmlWebpackPlugin: typeof import('html-webpack-plugin');\n  addRules: (rules: RuleSetRule | RuleSetRule[]) => void;\n  prependPlugins: (\n    plugins: WebpackPluginInstance | WebpackPluginInstance[],\n  ) => void;\n  appendPlugins: (\n    plugins: WebpackPluginInstance | WebpackPluginInstance[],\n  ) => void;\n  removePlugin: (pluginName: string) => void;\n};\n\nfunction ModifyWebpackConfig(\n  callback: (\n    config: WebpackConfig,\n    utils: ModifyWebpackConfigUtils,\n  ) => Promise<WebpackConfig | void> | WebpackConfig | void,\n): void;\n"})}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.strong,{children:"Example"})}),"\n"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",children:"export default () => ({\n  setup: api => {\n    api.modifyWebpackConfig((config, utils) => {\n      if (utils.env === 'development') {\n        config.devtool = 'eval';\n      }\n    });\n  },\n});\n"})}),"\n",(0,d.jsxs)(n.h3,{id:"modifyrspackconfig",children:["modifyRspackConfig",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#modifyrspackconfig",children:"#"})]}),"\n",(0,d.jsx)(n.p,{children:"To modify the final Rspack config object, you can directly modify the config object, or return a new object to replace the previous object. This method is only called when using rspack-provider."}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.strong,{children:"Type"})}),"\n"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",children:"type ModifyRspackConfigUtils = {\n  env: NodeEnv;\n  isProd: boolean;\n  target: BuilderTarget;\n  isServer: boolean;\n  isWebWorker: boolean;\n  getCompiledPath: (name: string) => string;\n  rspack: typeof import('@rspack/core');\n};\n\nfunction ModifyRspackConfig(\n  callback: (\n    config: RspackConfig,\n    utils: ModifyRspackConfigUtils,\n  ) => Promise<RspackConfig | void> | RspackConfig | void,\n): void;\n"})}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.strong,{children:"Example"})}),"\n"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",children:"export default () => ({\n  setup: api => {\n    api.modifyRspackConfig((config, utils) => {\n      if (utils.env === 'development') {\n        config.devtool = 'eval';\n      }\n    });\n  },\n});\n"})}),"\n",(0,d.jsxs)(n.h3,{id:"onbeforecreatecompiler",children:["onBeforeCreateCompiler",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#onbeforecreatecompiler",children:"#"})]}),"\n","\n",(0,d.jsx)(a.default,{}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.strong,{children:"Example"})}),"\n"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",children:"export default () => ({\n  setup: api => {\n    api.onBeforeCreateCompiler(({ bundlerConfigs }) => {\n      console.log('the bundler config is ', bundlerConfigs);\n    });\n  },\n});\n"})}),"\n",(0,d.jsxs)(n.h3,{id:"onaftercreatecompiler",children:["onAfterCreateCompiler",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#onaftercreatecompiler",children:"#"})]}),"\n","\n",(0,d.jsx)(c.default,{}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.strong,{children:"Example"})}),"\n"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",children:"export default () => ({\n  setup: api => {\n    api.onAfterCreateCompiler(({ compiler }) => {\n      console.log('the compiler is ', compiler);\n    });\n  },\n});\n"})}),"\n",(0,d.jsxs)(n.h2,{id:"build-hooks",children:["Build Hooks",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#build-hooks",children:"#"})]}),"\n",(0,d.jsxs)(n.h3,{id:"onbeforebuild",children:["onBeforeBuild",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#onbeforebuild",children:"#"})]}),"\n","\n",(0,d.jsx)(t.default,{}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.strong,{children:"Example"})}),"\n"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",children:"export default () => ({\n  setup: api => {\n    api.onBeforeBuild(({ bundlerConfigs }) => {\n      console.log('the bundler config is ', bundlerConfigs);\n    });\n  },\n});\n"})}),"\n",(0,d.jsxs)(n.h3,{id:"onafterbuild",children:["onAfterBuild",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#onafterbuild",children:"#"})]}),"\n","\n",(0,d.jsx)(h.default,{}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.strong,{children:"Example"})}),"\n"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",children:"export default () => ({\n  setup: api => {\n    api.onAfterBuild(({ stats }) => {\n      console.log(stats?.toJson());\n    });\n  },\n});\n"})}),"\n",(0,d.jsxs)(n.h2,{id:"dev-server-hooks",children:["Dev Server Hooks",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#dev-server-hooks",children:"#"})]}),"\n",(0,d.jsxs)(n.h3,{id:"onbeforestartdevserver",children:["onBeforeStartDevServer",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#onbeforestartdevserver",children:"#"})]}),"\n","\n",(0,d.jsx)(p.default,{}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.strong,{children:"Example"})}),"\n"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",children:"export default () => ({\n  setup: api => {\n    api.onBeforeStartDevServer(() => {\n      console.log('before start!');\n    });\n  },\n});\n"})}),"\n",(0,d.jsxs)(n.h3,{id:"onafterstartdevserver",children:["onAfterStartDevServer",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#onafterstartdevserver",children:"#"})]}),"\n","\n",(0,d.jsx)(f.default,{}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.strong,{children:"Example"})}),"\n"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",children:"export default () => ({\n  setup: api => {\n    api.onAfterStartDevServer(({ port }) => {\n      console.log('this port is: ', port);\n    });\n  },\n});\n"})}),"\n",(0,d.jsxs)(n.h3,{id:"ondevcompiledone",children:["onDevCompileDone",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#ondevcompiledone",children:"#"})]}),"\n","\n",(0,d.jsx)(u.default,{}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.strong,{children:"Example"})}),"\n"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",children:"export default () => ({\n  setup: api => {\n    api.onDevCompileDone(({ isFirstCompile }) => {\n      if (isFirstCompile) {\n        console.log('first compile!');\n      } else {\n        console.log('re-compile!');\n      }\n    });\n  },\n});\n"})}),"\n",(0,d.jsxs)(n.h2,{id:"other-hooks",children:["Other Hooks",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#other-hooks",children:"#"})]}),"\n",(0,d.jsxs)(n.h3,{id:"onexit",children:["onExit",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#onexit",children:"#"})]}),"\n","\n",(0,d.jsx)(x.default,{}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.strong,{children:"Example"})}),"\n"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",children:"export default () => ({\n  setup: api => {\n    api.onExit(() => {\n      console.log('exit!');\n    });\n  },\n});\n"})})]})}(r=globalThis).__RSPRESS_PAGE_META||(r.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["en%2Fapi%2Fplugin-hooks.mdx"]={toc:[{text:"Overview",id:"overview",depth:2},{text:"Common Hooks",id:"common-hooks",depth:2},{text:"modifyBuilderConfig",id:"modifybuilderconfig",depth:3},{text:"modifyBundlerChain experimental",id:"modifybundlerchain-experimental",depth:3},{text:"modifyWebpackChain",id:"modifywebpackchain",depth:3},{text:"modifyWebpackConfig",id:"modifywebpackconfig",depth:3},{text:"modifyRspackConfig",id:"modifyrspackconfig",depth:3},{text:"onBeforeCreateCompiler",id:"onbeforecreatecompiler",depth:3},{text:"onAfterCreateCompiler",id:"onaftercreatecompiler",depth:3},{text:"Build Hooks",id:"build-hooks",depth:2},{text:"onBeforeBuild",id:"onbeforebuild",depth:3},{text:"onAfterBuild",id:"onafterbuild",depth:3},{text:"Dev Server Hooks",id:"dev-server-hooks",depth:2},{text:"onBeforeStartDevServer",id:"onbeforestartdevserver",depth:3},{text:"onAfterStartDevServer",id:"onafterstartdevserver",depth:3},{text:"onDevCompileDone",id:"ondevcompiledone",depth:3},{text:"Other Hooks",id:"other-hooks",depth:2},{text:"onExit",id:"onexit",depth:3}],title:"Plugin Hooks",frontmatter:{extractApiHeaders:[2]}};var m=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,s.useMDXComponents)(),e.components);return n?(0,d.jsx)(n,(0,l._)((0,o._)({},e),{children:(0,d.jsx)(g,(0,o._)({},e))})):g(e)}}}]);