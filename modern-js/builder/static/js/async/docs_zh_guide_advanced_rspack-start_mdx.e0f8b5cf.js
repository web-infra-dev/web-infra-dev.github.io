(self.webpackChunk_modern_js_builder_doc=self.webpackChunk_modern_js_builder_doc||[]).push([["docs_zh_guide_advanced_rspack-start_mdx"],{16347:function(e,r,n){"use strict";n.r(r),n.d(r,{default:function(){return o}});var s,i=n("15169"),c=n("43932"),l=n("9880"),d=n("23169"),a=n("96366"),h=n("53824");function t(e){var r=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",h3:"h3",code:"code",pre:"pre",h4:"h4",blockquote:"blockquote",ul:"ul",li:"li",div:"div",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",br:"br",strong:"strong",h5:"h5"},(0,d.useMDXComponents)(),e.components);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(r.h1,{id:"使用-rspack",children:["使用 Rspack",(0,l.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#使用-rspack",children:"#"})]}),"\n",(0,l.jsx)(r.p,{children:"这篇文档会向你介绍如何在 Builder 中开启 Rspack 构建模式。"}),"\n","\n",(0,l.jsx)(a.default,{}),"\n",(0,l.jsxs)(r.h2,{id:"启用-rspack",children:["启用 Rspack",(0,l.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#启用-rspack",children:"#"})]}),"\n",(0,l.jsxs)(r.h3,{id:"在-modernjs-框架中启用",children:["在 Modern.js 框架中启用",(0,l.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#在-modernjs-框架中启用",children:"#"})]}),"\n",(0,l.jsxs)(r.p,{children:["Modern.js 框架默认使用 webpack 作为打包工具。如果希望启用 Rspack 作为打包工具，可参考：",(0,l.jsx)(r.a,{href:"https://modernjs.dev/guides/advanced-features/rspack-start.html",target:"_blank",rel:"noopener noreferrer",children:"使用 Rspack"}),"。"]}),"\n",(0,l.jsxs)(r.h3,{id:"在前端框架中接入",children:["在前端框架中接入",(0,l.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#在前端框架中接入",children:"#"})]}),"\n",(0,l.jsxs)(r.p,{children:["如果你基于 Builder 开发了一个前端框架，接入 rspack-provider 和 ",(0,l.jsx)(r.a,{href:"/guide/quick-start#%E5%9C%A8%E5%89%8D%E7%AB%AF%E6%A1%86%E6%9E%B6%E4%B8%AD%E6%8E%A5%E5%85%A5",children:"接入 webpack-provider"})," 的方式类似，只需要把依赖从 ",(0,l.jsx)(r.code,{children:"@modern-js/builder-webpack-provider"})," 改为 ",(0,l.jsx)(r.code,{children:"@modern-js/builder-rspack-provider"})," 即可。"]}),"\n",(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{className:"language-ts",meta:"title=modern.config.ts",children:"import { createBuilder } from '@modern-js/builder';\nimport { builderRspackProvider } from '@modern-js/builder-rspack-provider';\n\nconst provider = builderRspackProvider({\n  builderConfig: {\n    // some configs\n  },\n});\n"})}),"\n",(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{className:"language-diff",meta:"title=package.json",children:'{\n  "devDependencies": {\n-    "@modern-js/builder-webpack-provider": "2.8.0",\n+    "@modern-js/builder-rspack-provider": "2.8.0"\n  }\n}\n'})}),"\n","\n",(0,l.jsx)(h.default,{}),"\n",(0,l.jsxs)(r.h2,{id:"从-webpack-迁移到-rspack",children:["从 webpack 迁移到 Rspack",(0,l.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#从-webpack-迁移到-rspack",children:"#"})]}),"\n",(0,l.jsx)(r.p,{children:"Builder 旨在消除不同打包工具之间的主要差异，帮助用户以较低成本进行迁移。但由于各个打包工具提供的能力不同，你仍需要了解其中的部分差异。"}),"\n",(0,l.jsxs)(r.p,{children:["本文将从 Builder 的角度介绍 webpack 和 Rspack 之间的区别。如果需要了解更深层次的差异，请参考 ",(0,l.jsx)(r.a,{href:"http://rspack.dev/zh/guide/migrate-from-webpack.html",target:"_blank",rel:"noopener noreferrer",children:"Rspack 文档"}),"。"]}),"\n",(0,l.jsxs)(r.h3,{id:"1-builder-配置差异",children:["1. Builder 配置差异",(0,l.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#1-builder-配置差异",children:"#"})]}),"\n",(0,l.jsx)(r.p,{children:"目前，Builder 内大部分的配置项已经适配了 Rspack，但仍有部分配置在支持中。"}),"\n",(0,l.jsxs)(r.h4,{id:"source-config",children:["Source Config",(0,l.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#source-config",children:"#"})]}),"\n",(0,l.jsxs)(r.blockquote,{children:["\n",(0,l.jsx)(r.p,{children:"Builder 中与源代码解析、编译方式相关的配置。"}),"\n"]}),"\n",(0,l.jsx)(r.p,{children:"不支持的配置项及能力包括："}),"\n",(0,l.jsxs)(r.ul,{children:["\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.a,{href:"/api/config-source#sourceinclude",children:"source.include"})," (",(0,l.jsx)(r.a,{href:"https://github.com/web-infra-dev/rspack/issues/3067",target:"_blank",rel:"noopener noreferrer",children:"issue 追踪"}),")"]}),"\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.a,{href:"/api/config-source#sourceexclude",children:"source.exclude"})," (",(0,l.jsx)(r.a,{href:"https://github.com/web-infra-dev/rspack/issues/3067",target:"_blank",rel:"noopener noreferrer",children:"issue 追踪"}),")"]}),"\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.a,{href:"/api/config-source#sourcemodulescopes",children:"source.moduleScopes"})," (",(0,l.jsx)(r.a,{href:"https://github.com/web-infra-dev/rspack/issues/3548",target:"_blank",rel:"noopener noreferrer",children:"issue 追踪"}),")"]}),"\n"]}),"\n",(0,l.jsxs)(r.h4,{id:"html-config",children:["Html Config",(0,l.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#html-config",children:"#"})]}),"\n",(0,l.jsxs)(r.blockquote,{children:["\n",(0,l.jsx)(r.p,{children:"Builder 中与 HTML 有关的配置。"}),"\n"]}),"\n",(0,l.jsx)(r.p,{children:"所有 html 下的配置项及能力在 Rspack 内均可使用。"}),"\n",(0,l.jsxs)(r.h4,{id:"security-config",children:["Security Config",(0,l.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#security-config",children:"#"})]}),"\n",(0,l.jsxs)(r.blockquote,{children:["\n",(0,l.jsx)(r.p,{children:"Builder 中与安全有关的配置。"}),"\n"]}),"\n",(0,l.jsx)(r.p,{children:"不支持的配置项及能力包括："}),"\n",(0,l.jsxs)(r.ul,{children:["\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.a,{href:"/api/config-security#securitysri",children:"security.sri"})," (",(0,l.jsx)(r.a,{href:"https://github.com/web-infra-dev/rspack/issues/2669",target:"_blank",rel:"noopener noreferrer",children:"issue 追踪"}),")"]}),"\n"]}),"\n",(0,l.jsxs)(r.h4,{id:"dev-config",children:["Dev Config",(0,l.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#dev-config",children:"#"})]}),"\n",(0,l.jsxs)(r.blockquote,{children:["\n",(0,l.jsx)(r.p,{children:"Builder 中与本地开发有关的配置。"}),"\n"]}),"\n",(0,l.jsx)(r.p,{children:"所有 dev 下的配置项及能力在 Rspack 内均可使用。"}),"\n",(0,l.jsxs)(r.h4,{id:"output-config",children:["Output Config",(0,l.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#output-config",children:"#"})]}),"\n",(0,l.jsxs)(r.blockquote,{children:["\n",(0,l.jsx)(r.p,{children:"Builder 中与构建产物有关的配置。"}),"\n"]}),"\n",(0,l.jsx)(r.p,{children:"不支持的配置项及能力包括："}),"\n",(0,l.jsxs)(r.ul,{children:["\n",(0,l.jsx)(r.li,{children:(0,l.jsx)(r.a,{href:"/api/config-output#outputenableinlinescripts",children:"output.enableInlineScripts"})}),"\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.a,{href:"/api/config-output#usage",children:"output.polyfill.usage"})," (",(0,l.jsx)(r.a,{href:"https://github.com/web-infra-dev/rspack/issues/3067",target:"_blank",rel:"noopener noreferrer",children:"issue 追踪"}),")"]}),"\n"]}),"\n",(0,l.jsxs)(r.h4,{id:"experiments-config",children:["Experiments Config",(0,l.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#experiments-config",children:"#"})]}),"\n",(0,l.jsxs)(r.blockquote,{children:["\n",(0,l.jsx)(r.p,{children:"Builder 中的一些实验性配置。"}),"\n"]}),"\n",(0,l.jsx)(r.p,{children:"不支持的配置项及能力包括："}),"\n",(0,l.jsxs)(r.ul,{children:["\n",(0,l.jsx)(r.li,{children:(0,l.jsx)(r.a,{href:"/api/config-experiments#experimentslazycompilation",children:"experiments.lazyCompilation"})}),"\n"]}),"\n",(0,l.jsxs)(r.h4,{id:"performance-config",children:["Performance Config",(0,l.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#performance-config",children:"#"})]}),"\n",(0,l.jsxs)(r.blockquote,{children:["\n",(0,l.jsx)(r.p,{children:"Builder 中与性能有关的配置。"}),"\n"]}),"\n",(0,l.jsx)(r.p,{children:"不支持的配置项及能力包括："}),"\n",(0,l.jsxs)(r.ul,{children:["\n",(0,l.jsx)(r.li,{children:(0,l.jsx)(r.a,{href:"/api/config-performance#performancebuildcache",children:"performance.buildCache"})}),"\n",(0,l.jsx)(r.li,{children:(0,l.jsx)(r.a,{href:"/api/config-performance#performancechunksplit",children:"performance.chunkSplit (split-by-module)"})}),"\n"]}),"\n",(0,l.jsxs)(r.h4,{id:"tools-config",children:["Tools Config",(0,l.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#tools-config",children:"#"})]}),"\n",(0,l.jsxs)(r.blockquote,{children:["\n",(0,l.jsx)(r.p,{children:"Builder 中与底层工具有关的配置。"}),"\n"]}),"\n",(0,l.jsx)(r.p,{children:"不支持的配置项包括："}),"\n",(0,l.jsxs)(r.ul,{children:["\n",(0,l.jsx)(r.li,{children:(0,l.jsx)(r.a,{href:"/api/config-tools#toolsterser",children:"tools.terser"})}),"\n",(0,l.jsx)(r.li,{children:(0,l.jsx)(r.a,{href:"/api/config-tools#toolscssextract",children:"tools.cssExtract"})}),"\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.a,{href:"/api/config-tools#toolscssloader",children:"tools.cssLoader"})," (仅在 ",(0,l.jsx)(r.a,{href:"/api/config-output#outputdisablecssextract",children:"disableCssExtract"})," 时支持)"]}),"\n",(0,l.jsx)(r.li,{children:(0,l.jsx)(r.a,{href:"/api/config-tools#toolsinspector",children:"tools.inspector"})}),"\n",(0,l.jsx)(r.li,{children:(0,l.jsx)(r.a,{href:"/api/config-tools#toolsminifycss",children:"tools.minifyCss"})}),"\n",(0,l.jsx)(r.li,{children:(0,l.jsx)(r.a,{href:"/api/config-tools#toolsstyledcomponents",children:"tools.styledComponents"})}),"\n",(0,l.jsx)(r.li,{children:(0,l.jsx)(r.a,{href:"/api/config-tools#toolstsloader",children:"tools.tsLoader"})}),"\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.a,{href:"/api/config-tools#toolswebpack",children:"tools.webpack"}),"：使用 ",(0,l.jsx)(r.a,{href:"/api/config-tools#toolsrspack",children:"tools.rspack"})," 代替。"]}),"\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.a,{href:"/api/config-tools#toolswebpackchain",children:"tools.webpackChain"}),"：使用 ",(0,l.jsx)(r.a,{href:"/api/config-tools#toolsbundlerchain",children:"tools.bundlerChain"})," 代替。"]}),"\n"]}),"\n",(0,l.jsxs)(r.div,{className:"modern-directive tip",children:[(0,l.jsx)(r.div,{className:"modern-directive-title",children:"TIP"}),(0,l.jsx)(r.div,{className:"modern-directive-content",children:(0,l.jsx)(r.p,{children:"除上述配置外，一些已支持的配置可能存在能力差异，请参考各配置 API 获取具体差异信息。"})})]}),"\n",(0,l.jsxs)(r.h3,{id:"2-从-toolswebpackchain-迁移至-toolsbundlerchain",children:["2. 从 tools.webpackChain 迁移至 tools.bundlerChain",(0,l.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#2-从-toolswebpackchain-迁移至-toolsbundlerchain",children:"#"})]}),"\n",(0,l.jsxs)(r.p,{children:["Builder 支持通过 ",(0,l.jsx)(r.a,{href:"/api/config-tools#toolsbundlerchain",children:"bundlerChain"})," 来修改 Rspack config。通过 bundlerChain 修改的配置，在 webpack 和 Rspack 构建时均可生效。"]}),"\n",(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{className:"language-diff",children:"export default {\n  tools: {\n-   webpackChain: (chain, { env }) => {\n+   bundlerChain: (chain, { env }) => {\n      if (env === 'development') {\n        chain.devtool('cheap-module-eval-source-map');\n      }\n    },\n  },\n};\n"})}),"\n",(0,l.jsxs)(r.div,{className:"modern-directive tip",children:[(0,l.jsx)(r.div,{className:"modern-directive-title",children:"TIP"}),(0,l.jsx)(r.div,{className:"modern-directive-content",children:(0,l.jsx)(r.p,{children:"bundlerChain 只为 Rspack & webpack 配置提供一致的 api 修改方式，实际 plugin / loader 是否可用，需要看 Rspack / webpack 实际支持情况。"})})]}),"\n",(0,l.jsxs)(r.h4,{id:"chain_id-差异",children:["CHAIN_ID 差异",(0,l.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#chain_id-差异",children:"#"})]}),"\n",(0,l.jsx)(r.p,{children:"因为 webpack 和 Rspack 的一些实现差异，所以在规则配置上会有些不同。"}),"\n",(0,l.jsxs)(r.p,{children:["可通过 ",(0,l.jsx)(r.a,{href:"/api/config-tools#chain_id",children:"tools.bundlerChain#CHAIN_ID"})," 查看所有在 Rspack & webpack 中都支持的规则。"]}),"\n",(0,l.jsxs)(r.h3,{id:"3-从-toolswebpack-迁移至-toolsrspack",children:["3. 从 tools.webpack 迁移至 tools.rspack",(0,l.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#3-从-toolswebpack-迁移至-toolsrspack",children:"#"})]}),"\n",(0,l.jsxs)(r.p,{children:["BundlerChain 只支持修改 Rspack & webpack 交集部分，更多 Rspack 独有功能，需要通过 ",(0,l.jsx)(r.a,{href:"/api/config-tools#toolsrspack",children:"tools.rspack"})," 修改。"]}),"\n",(0,l.jsxs)(r.p,{children:["在修改 Rspack 配置之前，你可能需要了解 ",(0,l.jsx)(r.a,{href:"https://www.rspack.dev/zh/guide/config-diff.html",target:"_blank",rel:"noopener noreferrer",children:"Rspack 和 Webpack 的配置兼容性"}),"。"]}),"\n",(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{className:"language-diff",children:"export default {\n  tools: {\n-   webppack: (config, { env }) => {\n+   rspack: (config, { env }) => {\n      if (env === 'development') {\n        config.devtool = 'cheap-module-eval-source-map';\n      }\n      return config;\n    },\n  },\n};\n"})}),"\n",(0,l.jsxs)(r.p,{children:["关于 Rspack 的详细配置信息，请参考 ",(0,l.jsx)(r.a,{href:"https://rspack.dev/",target:"_blank",rel:"noopener noreferrer",children:"Rspack 官网"}),"。"]}),"\n",(0,l.jsxs)(r.h3,{id:"4-babel-配置迁移",children:["4. Babel 配置迁移",(0,l.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#4-babel-配置迁移",children:"#"})]}),"\n",(0,l.jsx)(r.p,{children:"Rspack 默认会使用 SWC 进行转译和压缩，因此，在启用 Rspack 构建时，babel-loader 默认不会被启用。"}),"\n",(0,l.jsx)(r.p,{children:"对于大部分常见的 Babel 插件，你可以在 Rspack 中找到对应的替代品，同时 Builder 也提供了一些相应的配置项。"}),"\n",(0,l.jsxs)(r.table,{children:["\n",(0,l.jsxs)(r.thead,{children:["\n",(0,l.jsxs)(r.tr,{children:["\n",(0,l.jsx)(r.th,{children:"Babel 插件"}),"\n",(0,l.jsx)(r.th,{children:"Rspack 配置项"}),"\n",(0,l.jsx)(r.th,{children:"Builder 配置项"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(r.tbody,{children:["\n",(0,l.jsxs)(r.tr,{children:["\n",(0,l.jsx)(r.td,{children:"@babel/preset-env"}),"\n",(0,l.jsx)(r.td,{children:(0,l.jsx)(r.a,{href:"https://www.rspack.dev/zh/config/builtins.html#builtinspresetenv",target:"_blank",rel:"noopener noreferrer",children:"builtins.presetEnv"})}),"\n",(0,l.jsxs)(r.td,{children:[(0,l.jsx)(r.a,{href:"/guide/advanced/browserslist",children:"设置浏览器范围"}),"、",(0,l.jsx)("br",{}),(0,l.jsx)(r.a,{href:"/guide/advanced/browser-compatibility",children:"浏览器兼容性"})]}),"\n"]}),"\n",(0,l.jsxs)(r.tr,{children:["\n",(0,l.jsx)(r.td,{children:"@babel/preset-react"}),"\n",(0,l.jsx)(r.td,{children:(0,l.jsx)(r.a,{href:"https://www.rspack.dev/zh/config/builtins.html#builtinsreact",target:"_blank",rel:"noopener noreferrer",children:"builtins.react"})}),"\n",(0,l.jsx)(r.td,{children:(0,l.jsx)(r.a,{href:"/guide/advanced/hmr",children:"模块热更新"})}),"\n"]}),"\n",(0,l.jsxs)(r.tr,{children:["\n",(0,l.jsx)(r.td,{children:"@emotion/babel-plugin"}),"\n",(0,l.jsx)(r.td,{children:(0,l.jsx)(r.a,{href:"https://www.rspack.dev/zh/config/builtins.html#builtinsemotion",target:"_blank",rel:"noopener noreferrer",children:"builtins.emotion"})}),"\n",(0,l.jsx)(r.td,{children:"暂无"}),"\n"]}),"\n",(0,l.jsxs)(r.tr,{children:["\n",(0,l.jsx)(r.td,{children:"babel-plugin-import"}),"\n",(0,l.jsx)(r.td,{children:(0,l.jsx)(r.a,{href:"https://www.rspack.dev/zh/config/builtins.html#builtinspluginimport",target:"_blank",rel:"noopener noreferrer",children:"builtins.pluginImport"})}),"\n",(0,l.jsx)(r.td,{children:(0,l.jsx)(r.a,{href:"/api/config-source#sourcetransformimport",children:"source.transformImport"})}),"\n"]}),"\n",(0,l.jsxs)(r.tr,{children:["\n",(0,l.jsx)(r.td,{children:"babel-plugin-lodash"}),"\n",(0,l.jsx)(r.td,{children:"暂无"}),"\n",(0,l.jsx)(r.td,{children:"暂无"}),"\n"]}),"\n",(0,l.jsxs)(r.tr,{children:["\n",(0,l.jsx)(r.td,{children:"babel-plugin-styled-components"}),"\n",(0,l.jsx)(r.td,{children:"暂无"}),"\n",(0,l.jsx)(r.td,{children:"暂无"}),"\n"]}),"\n",(0,l.jsxs)(r.tr,{children:["\n",(0,l.jsx)(r.td,{children:"@babel/plugin-react-transform-remove-prop-types"}),"\n",(0,l.jsx)(r.td,{children:"暂无"}),"\n",(0,l.jsx)(r.td,{children:"暂无"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(r.div,{className:"modern-directive tip",children:[(0,l.jsx)(r.div,{className:"modern-directive-title",children:"TIP"}),(0,l.jsx)(r.div,{className:"modern-directive-content",children:(0,l.jsxs)(r.p,{children:["在使用 Rspack 构建时，仍然",(0,l.jsxs)(r.strong,{children:["支持通过 ",(0,l.jsx)(r.a,{href:"/api/config-tools#toolsbabel",children:"tools.babel"})," 配置 Babel 插件"]}),"，但会产生额外的编译开销，在一定程度上拖慢 Rspack 构建速度。\n"]})})]}),"\n",(0,l.jsxs)(r.h3,{id:"5-swc-配置支持",children:["5. SWC 配置支持",(0,l.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#5-swc-配置支持",children:"#"})]}),"\n",(0,l.jsxs)(r.p,{children:["Rspack 中已内置了一部分的 swc 配置支持，如 builtins.react 等，可参考 ",(0,l.jsx)(r.a,{href:"https://www.rspack.dev/zh/config/builtins.html",target:"_blank",rel:"noopener noreferrer",children:"Builtins"}),"。"]}),"\n",(0,l.jsxs)(r.p,{children:["暂不支持在 Rspack 中添加 swc 插件和更多自定义配置，相关需求可追踪对应 ",(0,l.jsx)(r.a,{href:"https://github.com/web-infra-dev/rspack/issues/3067",target:"_blank",rel:"noopener noreferrer",children:"issue 进度"}),"。"]}),"\n",(0,l.jsxs)(r.h3,{id:"6-webpack-plugin-插件迁移",children:["6. Webpack Plugin 插件迁移",(0,l.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#6-webpack-plugin-插件迁移",children:"#"})]}),"\n",(0,l.jsx)(r.p,{children:"目前 Rspack 中兼容的 webpack 插件有限，当你的项目中有用到以下插件（或间接依赖）时，需要暂时将该插件移除或使用替代方案，否则不支持切换至 Rspack 构建："}),"\n",(0,l.jsxs)(r.ul,{children:["\n",(0,l.jsxs)(r.li,{children:["webpack-retry-chunk-load-plugin：使用 ",(0,l.jsx)(r.a,{href:"/api/config-output#outputassetsretry",children:"output.assetsRetry"})," 代替。"]}),"\n",(0,l.jsxs)(r.li,{children:["webpack.ProviderPlugin：使用 ",(0,l.jsx)(r.a,{href:"https://www.rspack.dev/zh/config/builtins.html#builtinsprovide",target:"_blank",rel:"noopener noreferrer",children:"builtins.provide"})," 代替。"]}),"\n",(0,l.jsxs)(r.li,{children:["webpack.DefinePlugin：使用 ",(0,l.jsx)(r.a,{href:"https://www.rspack.dev/zh/config/builtins.html#builtinsdefine",target:"_blank",rel:"noopener noreferrer",children:"builtins.define"})," 代替。"]}),"\n",(0,l.jsx)(r.li,{children:"webpack.ContextReplacementPlugin"}),"\n",(0,l.jsx)(r.li,{children:"..."}),"\n"]}),"\n",(0,l.jsxs)(r.p,{children:["具体插件支持情况可参考：",(0,l.jsx)(r.a,{href:"https://www.rspack.dev/zh/guide/plugin-compat.html",target:"_blank",rel:"noopener noreferrer",children:"Plugin 兼容情况"}),"。"]}),"\n",(0,l.jsxs)(r.p,{children:["未列出的插件可根据 ",(0,l.jsx)(r.a,{href:"https://www.rspack.dev/zh/api/plugin-api.html",target:"_blank",rel:"noopener noreferrer",children:"Rspack Plugin API 支持情况"})," 自行判断。"]}),"\n",(0,l.jsxs)(r.h3,{id:"7-css-modules-配置迁移",children:["7. CSS Modules 配置迁移",(0,l.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#7-css-modules-配置迁移",children:"#"})]}),"\n",(0,l.jsxs)(r.p,{children:["Rspack 模式下不支持通过 ",(0,l.jsx)(r.code,{children:"tools.cssLoader"})," 修改 CSS Modules 配置，Builder 提供了 ",(0,l.jsx)(r.a,{href:"/api/config-output#outputcssmodules",children:"output.cssModules"})," 配置项，用来抹平 Rspack 模式和 webpack 模式下的实现差异。"]}),"\n",(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{className:"language-diff",children:"export default {\n+  output: {\n+    cssModules: {\n+      auto: resource => {\n+        return resource.includes('.module.') || resource.includes('shared/');\n+      },\n+    },\n+  },\n-  tools: {\n-    cssLoader: {\n-      modules: {\n-        auto: path => {\n-          return resource.includes('.module.') || resource.includes('shared/');\n-        },\n-      },\n-    },\n-  }\n};\n"})}),"\n",(0,l.jsxs)(r.h2,{id:"对比-rspack-cli",children:["对比 Rspack CLI",(0,l.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#对比-rspack-cli",children:"#"})]}),"\n",(0,l.jsxs)(r.p,{children:["Builder Rspack 构建模式对比 ",(0,l.jsx)(r.a,{href:"https://www.rspack.dev/zh/guide/quick-start.html#%E4%BD%BF%E7%94%A8-rspack-cli",target:"_blank",rel:"noopener noreferrer",children:"Rspack CLI"})," 添加了很多开箱即用的能力，同时，这些能力的封装会带来一定程度上的性能开销和行为表现上的差异:"]}),"\n",(0,l.jsxs)(r.table,{children:["\n",(0,l.jsxs)(r.thead,{children:["\n",(0,l.jsxs)(r.tr,{children:["\n",(0,l.jsx)(r.th,{children:"功能"}),"\n",(0,l.jsx)(r.th,{children:"描述"}),"\n",(0,l.jsx)(r.th,{children:"相关链接"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(r.tbody,{children:["\n",(0,l.jsxs)(r.tr,{children:["\n",(0,l.jsx)(r.td,{children:"浏览器兼容性"}),"\n",(0,l.jsxs)(r.td,{children:["Builder 会根据",(0,l.jsx)(r.a,{href:"/guide/basic/build-target",children:"构建产物类型"}),"来设置不同的 Browserslist 默认值"]}),"\n",(0,l.jsx)(r.td,{children:(0,l.jsx)("ul",{children:(0,l.jsx)("li",{children:(0,l.jsx)(r.a,{href:"/guide/advanced/browserslist.html",children:"浏览器范围"})})})}),"\n"]}),"\n",(0,l.jsxs)(r.tr,{children:["\n",(0,l.jsx)(r.td,{children:"SourceMap 生成"}),"\n",(0,l.jsx)(r.td,{children:"Builder 默认根据环境生成不同的 SourceMap (Rspack CLI 中默认是 false)"}),"\n",(0,l.jsx)(r.td,{children:(0,l.jsx)("ul",{children:(0,l.jsx)("li",{children:(0,l.jsx)(r.a,{href:"/api/config-output.html#outputdisablesourcemap",children:"output.disableSourceMap"})})})}),"\n"]}),"\n",(0,l.jsxs)(r.tr,{children:["\n",(0,l.jsx)(r.td,{children:"SVG 转 React 组件"}),"\n",(0,l.jsx)(r.td,{children:"Builder 默认支持在 React 组件中引用 SVG 作为组件"}),"\n",(0,l.jsx)(r.td,{children:(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{children:(0,l.jsx)(r.a,{href:"/guide/basic/svg-assets.html",children:"引用 SVG 资源"})}),(0,l.jsx)("li",{children:(0,l.jsx)(r.a,{href:"/api/config-output.html#outputdisablesvgr",children:"output.disableSvgr"})})]})}),"\n"]}),"\n",(0,l.jsxs)(r.tr,{children:["\n",(0,l.jsx)(r.td,{children:"按需引入常用组件库"}),"\n",(0,l.jsxs)(r.td,{children:["当项目中安装了 ",(0,l.jsx)(r.a,{href:"https://www.npmjs.com/package/antd",target:"_blank",rel:"noopener noreferrer",children:"Ant Design"})," 或 ",(0,l.jsx)(r.a,{href:"https://www.npmjs.com/package/@arco-design/web-react",target:"_blank",rel:"noopener noreferrer",children:"Arco Design"})," 组件库时，Builder 会自动添加对应的按需引入能力"]}),"\n",(0,l.jsx)(r.td,{children:(0,l.jsx)("ul",{children:(0,l.jsx)("li",{children:(0,l.jsx)(r.a,{href:"/api/config-source#sourcetransformimport",children:"source.transformImport"})})})}),"\n"]}),"\n",(0,l.jsxs)(r.tr,{children:["\n",(0,l.jsx)(r.td,{children:"默认开启 TypeScript 类型检查"}),"\n",(0,l.jsx)(r.td,{children:"Builder 会默认通过 TS Checker 检查类型问题"}),"\n",(0,l.jsx)(r.td,{children:(0,l.jsxs)("ul",{children:[(0,l.jsxs)("li",{children:[(0,l.jsx)(r.a,{href:"/guide/basic/typescript.html#%E7%B1%BB%E5%9E%8B%E6%A3%80%E6%9F%A5",children:"类型检查"})," "]}),(0,l.jsx)("li",{children:(0,l.jsx)(r.a,{href:"/api/config-output#outputdisabletschecker",children:"output.disableTsChecker"})})]})}),"\n"]}),"\n",(0,l.jsxs)(r.tr,{children:["\n",(0,l.jsx)(r.td,{children:"默认集成 PostCSS"}),"\n",(0,l.jsx)(r.td,{children:"Builder 内默认开启 PostCSS 编译，并内置 autoprefixer 等多个插件"}),"\n",(0,l.jsx)(r.td,{children:(0,l.jsx)("ul",{children:(0,l.jsx)("li",{children:(0,l.jsx)(r.a,{href:"/guide/basic/css-usage.html#%E4%BD%BF%E7%94%A8-postcss",children:"使用 PostCSS"})})})}),"\n"]}),"\n",(0,l.jsxs)(r.tr,{children:["\n",(0,l.jsx)(r.td,{children:"使用 @rspack/html-plugin"}),"\n",(0,l.jsx)(r.td,{children:"Builder 内默认集成 @rspack/html-plugin 以支持更多 HTML 模版功能 (Rspack CLI 中默认使用 builtins.html)"}),"\n",(0,l.jsx)(r.td,{children:(0,l.jsx)("ul",{children:(0,l.jsx)("li",{children:(0,l.jsx)(r.a,{href:"/api/config-tools.html#toolshtmlplugin",children:"tools.htmlPlugin"})})})}),"\n"]}),"\n",(0,l.jsxs)(r.tr,{children:["\n",(0,l.jsx)(r.td,{children:"DevServer"}),"\n",(0,l.jsxs)(r.td,{children:["Builder 内基于 ",(0,l.jsx)(r.a,{href:"https://github.com/webpack/webpack-dev-middleware",target:"_blank",rel:"noopener noreferrer",children:"webpack-dev-middleware"})," 实现 DevServer (Rspack CLI 使用 ",(0,l.jsx)(r.a,{href:"https://www.rspack.dev/guide/dev-server.html",target:"_blank",rel:"noopener noreferrer",children:"@rspack/dev-server"}),")"]}),"\n",(0,l.jsx)(r.td,{children:(0,l.jsx)("ul",{children:(0,l.jsx)("li",{children:(0,l.jsx)(r.a,{href:"/api/config-tools.html#toolsdevserver",children:"tools.devServer"})})})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(r.p,{children:"以上能力均提供可调整的配置选项，可以根据项目实际情况按需进行调整。"}),"\n",(0,l.jsxs)(r.p,{children:["更多内置能力，可参考 ",(0,l.jsx)(r.a,{href:"/guide/features",children:"功能导航"}),"。"]}),"\n",(0,l.jsxs)(r.h2,{id:"常见问题",children:["常见问题",(0,l.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#常见问题",children:"#"})]}),"\n",(0,l.jsxs)(r.h3,{id:"启用-rspack-构建后性能没有预期的快",children:["启用 Rspack 构建后，性能没有预期的快？",(0,l.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#启用-rspack-构建后性能没有预期的快",children:"#"})]}),"\n",(0,l.jsx)(r.p,{children:"通常情况下，启用 Rspack 后，相较 Webpack 会有 5 到 10 倍的编译性能提升。"}),"\n",(0,l.jsx)(r.p,{children:"目前已知以下行为会在一定程度上拖慢 Rspack 构建性能："}),"\n",(0,l.jsxs)(r.h5,{id:"使用依赖-babel-实现的配置项或插件",children:["使用依赖 Babel 实现的配置项或插件",(0,l.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#使用依赖-babel-实现的配置项或插件",children:"#"})]}),"\n",(0,l.jsxs)(r.p,{children:["在使用 Rspack 构建时，Builder 默认不会启用 ",(0,l.jsx)(r.code,{children:"babel-loader"}),"。但当项目中使用到依赖 Babel 实现的配置项或插件时，会额外添加 ",(0,l.jsx)(r.code,{children:"babel-loader"})," 进行文件转译："]}),"\n",(0,l.jsxs)(r.ul,{children:["\n",(0,l.jsxs)(r.li,{children:["通过 ",(0,l.jsx)(r.a,{href:"/api/config-tools#toolsbabel",children:"tools.babel"})," 添加 Babel plugin"]}),"\n",(0,l.jsxs)(r.li,{children:["使用 ",(0,l.jsx)(r.a,{href:"https://modernjs.dev/guides/advanced-features/ssr.html",target:"_blank",rel:"noopener noreferrer",children:"Modern.js SSR 功能"})]}),"\n",(0,l.jsx)(r.li,{children:"..."}),"\n"]}),"\n",(0,l.jsxs)(r.p,{children:["你可以通过开启",(0,l.jsx)(r.a,{href:"/guide/debug/debug-mode",children:"调试模式"})," 来查看最终生成的 Rspack 配置中是否存在 Babel 插件。"]}),"\n",(0,l.jsxs)(r.h5,{id:"开启-typescript-类型检查",children:["开启 TypeScript 类型检查",(0,l.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#开启-typescript-类型检查",children:"#"})]}),"\n",(0,l.jsx)(r.p,{children:"Builder 构建时会默认开启 TypeScript 类型检查。在大型项目中，类型检查的耗时可能远超过 Rspack 本身的构建耗时，因此在生产环境构建时，该行为会在一定程度上拖慢构建速度。"}),"\n",(0,l.jsxs)(r.p,{children:["此时，可通过 ",(0,l.jsx)(r.a,{href:"/api/config-output#outputdisabletschecker",children:"output.disableTsChecker"})," 关闭类型检查，以查看排除类型检查后 Rspack 性能是否符合预期。"]}),"\n",(0,l.jsxs)(r.h5,{id:"大量-less-文件",children:["大量 Less 文件",(0,l.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#大量-less-文件",children:"#"})]}),"\n",(0,l.jsxs)(r.p,{children:["目前 Less 文件使用基于 JavaScript 实现的 ",(0,l.jsx)(r.code,{children:"less-loader"})," 进行处理，未提供 Rust 版本，因此在处理大量 Less 文件时会拖累构建性能。"]}),"\n",(0,l.jsxs)(r.div,{className:"modern-directive tip",children:[(0,l.jsx)(r.div,{className:"modern-directive-title",children:"TIP"}),(0,l.jsx)(r.div,{className:"modern-directive-content",children:(0,l.jsxs)(r.p,{children:["在使用 ",(0,l.jsx)(r.a,{href:"https://www.npmjs.com/package/@arco-design/web-react",target:"_blank",rel:"noopener noreferrer",children:"Arco Design"})," 等组件库时，请尽量避免全量引入 Less 样式。你可以改为按需引入，或直接引入 CSS 样式。\n"]})})]}),"\n",(0,l.jsxs)(r.h5,{id:"大量-svg-文件",children:["大量 SVG 文件",(0,l.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#大量-svg-文件",children:"#"})]}),"\n",(0,l.jsxs)(r.p,{children:["Builder 默认支持将 SVG 资源作为 React 组件使用，这会产生一定的性能开销。如果你不需要此能力，可以将 ",(0,l.jsx)(r.a,{href:"/api/config-output#outputdisablesvgr",children:"output.disableSvgr"})," 设置为 ",(0,l.jsx)(r.code,{children:"true"})," 来关闭此行为，以提升构建性能。"]}),"\n",(0,l.jsxs)(r.h5,{id:"组件库未按需引入",children:["组件库未按需引入",(0,l.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#组件库未按需引入",children:"#"})]}),"\n",(0,l.jsxs)(r.p,{children:["默认情况下，在使用 ",(0,l.jsx)(r.a,{href:"https://www.npmjs.com/package/antd",target:"_blank",rel:"noopener noreferrer",children:"Ant Design"})," 或 ",(0,l.jsx)(r.a,{href:"https://www.npmjs.com/package/@arco-design/web-react",target:"_blank",rel:"noopener noreferrer",children:"Arco Design"})," 组件库时，Builder 会自动开启按需引入功能，默认配置可参考 ",(0,l.jsx)(r.a,{href:"/api/config-source#sourcetransformimport",children:"source.transformImport"}),"。"]}),"\n",(0,l.jsxs)(r.p,{children:["在使用其他组件库时，如果该组件库支持按需引入，我们推荐优先通过 ",(0,l.jsx)(r.a,{href:"/api/config-source#sourcetransformimport",children:"source.transformImport"})," 配置按需引入。"]})]})}(s=globalThis).__RSPRESS_PAGE_META||(s.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["zh%2Fguide%2Fadvanced%2Frspack-start.mdx"]={toc:[{text:"启用 Rspack",id:"启用-rspack",depth:2},{text:"在 Modern.js 框架中启用",id:"在-modernjs-框架中启用",depth:3},{text:"在前端框架中接入",id:"在前端框架中接入",depth:3},{text:"从 webpack 迁移到 Rspack",id:"从-webpack-迁移到-rspack",depth:2},{text:"1. Builder 配置差异",id:"1-builder-配置差异",depth:3},{text:"Source Config",id:"source-config",depth:4},{text:"Html Config",id:"html-config",depth:4},{text:"Security Config",id:"security-config",depth:4},{text:"Dev Config",id:"dev-config",depth:4},{text:"Output Config",id:"output-config",depth:4},{text:"Experiments Config",id:"experiments-config",depth:4},{text:"Performance Config",id:"performance-config",depth:4},{text:"Tools Config",id:"tools-config",depth:4},{text:"2. 从 tools.webpackChain 迁移至 tools.bundlerChain",id:"2-从-toolswebpackchain-迁移至-toolsbundlerchain",depth:3},{text:"CHAIN_ID 差异",id:"chain_id-差异",depth:4},{text:"3. 从 tools.webpack 迁移至 tools.rspack",id:"3-从-toolswebpack-迁移至-toolsrspack",depth:3},{text:"4. Babel 配置迁移",id:"4-babel-配置迁移",depth:3},{text:"5. SWC 配置支持",id:"5-swc-配置支持",depth:3},{text:"6. Webpack Plugin 插件迁移",id:"6-webpack-plugin-插件迁移",depth:3},{text:"7. CSS Modules 配置迁移",id:"7-css-modules-配置迁移",depth:3},{text:"对比 Rspack CLI",id:"对比-rspack-cli",depth:2},{text:"常见问题",id:"常见问题",depth:2},{text:"启用 Rspack 构建后，性能没有预期的快？",id:"启用-rspack-构建后性能没有预期的快",depth:3}],title:"使用 Rspack",frontmatter:{}};var o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=Object.assign({},(0,d.useMDXComponents)(),e.components).wrapper;return r?(0,l.jsx)(r,(0,c._)((0,i._)({},e),{children:(0,l.jsx)(t,(0,i._)({},e))})):t(e)}},53824:function(e,r,n){"use strict";n.r(r),n.d(r,{default:function(){return h}});var s,i=n("15169"),c=n("43932"),l=n("9880"),d=n("23169");function a(e){var r=Object.assign({h2:"h2",a:"a",p:"p",ul:"ul",li:"li"},(0,d.useMDXComponents)(),e.components);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(r.h2,{id:"注意事项",children:["注意事项",(0,l.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#注意事项",children:"#"})]}),"\n",(0,l.jsx)(r.p,{children:"在使用 Rspack 之前，请留意 Rspack 仍然是一个早期项目，当前还处于快速迭代阶段。因此，你需要预先了解以下事项："}),"\n",(0,l.jsxs)(r.ul,{children:["\n",(0,l.jsx)(r.li,{children:"Rspack 的 API 和配置项还不稳定，同时 Modern.js 对 Rspack 的支持属于实验性的，因此在后续的非 major 版本中，可能会引入不兼容更新。"}),"\n",(0,l.jsx)(r.li,{children:"Rspack 并未实现完整的 webpack 优化能力（如 tree shaking、bundle splitting、scope hoist 等能力，我们将在 6 ～ 12 月持续补齐相关优化能力），迁移到 Rspack 后，你可能会发现产物的包体积相较 webpack 有一定程度的增加。"}),"\n",(0,l.jsx)(r.li,{children:"Rspack 目前基于 SWC 进行代码编译和压缩，由于 SWC 的成熟度不及 babel 和 terser，因此你可能会遇到 SWC 的 bug。"}),"\n",(0,l.jsx)(r.li,{children:"Rspack 模式兼容了大部分 webpack 生态的插件和 loaders，但仍有部分插件和 loaders 暂时无法使用。"}),"\n"]}),"\n",(0,l.jsx)(r.p,{children:"Rspack 正在积极改善上述问题，并计划在未来的版本中逐步解决它们。我们建议在决定是否使用 Rspack 之前，评估你的项目需求和风险承受能力。如果你的项目对稳定性和性能要求较高，可以先选择更成熟的 webpack。如果你愿意尝试新的工具并为其发展做出贡献，我们欢迎你使用 Rspack，并提供反馈和报告问题，以帮助改进它的稳定性和功能。"})]})}(s=globalThis).__RSPRESS_PAGE_META||(s.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["zh%2Fshared%2FrspackPrecautions.md"]={toc:[{text:"注意事项",id:"注意事项",depth:2}],title:"",frontmatter:{}};var h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=Object.assign({},(0,d.useMDXComponents)(),e.components).wrapper;return r?(0,l.jsx)(r,(0,c._)((0,i._)({},e),{children:(0,l.jsx)(a,(0,i._)({},e))})):a(e)}}}]);