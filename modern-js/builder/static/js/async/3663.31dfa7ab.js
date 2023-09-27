(self.webpackChunk_modern_js_builder_doc=self.webpackChunk_modern_js_builder_doc||[]).push([["3663"],{35823:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return h}});var i,s=r("10310"),t=r("81904"),a=r("98638"),o=r("21968"),c=r("89986"),l=r("70298");function d(e){let n=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",h3:"h3",code:"code",pre:"pre",h4:"h4",blockquote:"blockquote",ul:"ul",li:"li",div:"div",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",br:"br",h5:"h5"},(0,o.useMDXComponents)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.h1,{id:"using-rspack",children:["Using Rspack",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#using-rspack",children:"#"})]}),"\n",(0,a.jsx)(n.p,{children:"This document will show you how to enable Rspack build mode in the Builder."}),"\n","\n",(0,a.jsx)(c.default,{}),"\n",(0,a.jsxs)(n.h2,{id:"enable-rspack",children:["Enable Rspack",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#enable-rspack",children:"#"})]}),"\n",(0,a.jsxs)(n.h3,{id:"enable-in-modernjs-framework",children:["Enable in Modern.js framework",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#enable-in-modernjs-framework",children:"#"})]}),"\n",(0,a.jsxs)(n.p,{children:["Modern.js framework uses webpack as the default bundler. If you want to use Rspack as the bundler, you can refer to: ",(0,a.jsx)(n.a,{href:"https://modernjs.dev/en/guides/advanced-features/rspack-start.html#initializing-an-rspack-project",target:"_blank",rel:"noopener noreferrer",children:"Using Rspack"}),"."]}),"\n",(0,a.jsxs)(n.h3,{id:"use-builder-in-a-front-end-framework",children:["Use Builder in a front-end framework",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#use-builder-in-a-front-end-framework",children:"#"})]}),"\n",(0,a.jsxs)(n.p,{children:["Integrating rspack-provider into a frontend framework is similar to integrating webpack-provider. You only need to change the dependency from ",(0,a.jsx)(n.code,{children:"@modern-js/builder-webpack-provider"})," to ",(0,a.jsx)(n.code,{children:"@modern-js/builder-rspack-provider"}),"."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",meta:"title=modern.config.ts",children:"import { createBuilder } from '@modern-js/builder';\nimport { builderRspackProvider } from '@modern-js/builder-rspack-provider';\n\nconst provider = builderRspackProvider({\n  builderConfig: {\n    // some configs\n  },\n});\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-diff",meta:"title=package.json",children:'{\n  "devDependencies": {\n-    "@modern-js/builder-webpack-provider": "2.8.0",\n+    "@modern-js/builder-rspack-provider": "2.8.0"\n  }\n}\n'})}),"\n","\n",(0,a.jsx)(l.default,{}),"\n",(0,a.jsxs)(n.h2,{id:"migrating-from-webpack-to-rspack",children:["Migrating from webpack to Rspack",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#migrating-from-webpack-to-rspack",children:"#"})]}),"\n",(0,a.jsx)(n.p,{children:"Builder aims to eliminate the main differences between different bundlers and help users migrate at a lower cost. However, due to the different capabilities of each bundler, you still need to be aware of some differences."}),"\n",(0,a.jsxs)(n.p,{children:["This article will introduce the differences between webpack and Rspack from the perspective of Builder. If you need to know more in-depth differences, please refer to the ",(0,a.jsx)(n.a,{href:"http://rspack.dev/guide/migrate-from-webpack.html",target:"_blank",rel:"noopener noreferrer",children:"Rspack documentation"}),"."]}),"\n",(0,a.jsxs)(n.h3,{id:"1-builder-configuration-differences",children:["1. Builder configuration differences",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#1-builder-configuration-differences",children:"#"})]}),"\n",(0,a.jsx)(n.p,{children:"Currently, most of configuration options in Builder have been adapted for Rspack, but there are still some configurations that are in the process of being supported."}),"\n",(0,a.jsxs)(n.h4,{id:"source-config",children:["Source Config",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#source-config",children:"#"})]}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:"Source code parsing and compilation related configurations in Builder."}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Unsupported configurations and capabilities include:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"/api/config-source#sourceinclude",children:"source.include"})," (",(0,a.jsx)(n.a,{href:"https://github.com/web-infra-dev/rspack/issues/3067",target:"_blank",rel:"noopener noreferrer",children:"track issue"}),")"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"/api/config-source#sourcemodulescopes",children:"source.moduleScopes"})," (",(0,a.jsx)(n.a,{href:"https://github.com/web-infra-dev/rspack/issues/3548",target:"_blank",rel:"noopener noreferrer",children:"track issue"}),")"]}),"\n"]}),"\n",(0,a.jsxs)(n.h4,{id:"html-config",children:["Html Config",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#html-config",children:"#"})]}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:"HTML related configurations in Builder."}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"All configurations and capabilities under html are available within rspack."}),"\n",(0,a.jsxs)(n.h4,{id:"security-config",children:["Security Config",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#security-config",children:"#"})]}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:"Security related configurations in Builder."}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Unsupported configurations and capabilities include:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"/api/config-security#securitysri",children:"security.sri"})," (",(0,a.jsx)(n.a,{href:"https://github.com/web-infra-dev/rspack/issues/2669",target:"_blank",rel:"noopener noreferrer",children:"track issue"}),")"]}),"\n"]}),"\n",(0,a.jsxs)(n.h4,{id:"dev-config",children:["Dev Config",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#dev-config",children:"#"})]}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:"Dev related configurations in Builder."}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"All configurations and capabilities under dev are available within rspack."}),"\n",(0,a.jsxs)(n.h4,{id:"output-config",children:["Output Config",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#output-config",children:"#"})]}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:"Output related configurations in Builder."}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Unsupported configurations and capabilities include:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"/api/config-output#outputenableinlinescripts",children:"output.enableInlineScripts"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"/api/config-output#outputenablelatestdecorators",children:"output.enableLatestDecorators"})}),"\n"]}),"\n",(0,a.jsxs)(n.h4,{id:"experiments-config",children:["Experiments Config",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#experiments-config",children:"#"})]}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:"Experimental related configurations in the Builder"}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Unsupported configurations and capabilities include:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"/api/config-experiments#experimentslazycompilation",children:"experiments.lazyCompilation"})}),"\n"]}),"\n",(0,a.jsxs)(n.h4,{id:"performance-config",children:["Performance Config",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#performance-config",children:"#"})]}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:"Performance related configurations in Builder."}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Unsupported configurations and capabilities include:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"/api/config-performance#performancebuildcache",children:"performance.buildCache"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"/api/config-performance#performancechunksplit",children:"performance.chunkSplit (split-by-module)"})}),"\n"]}),"\n",(0,a.jsxs)(n.h4,{id:"tools-config",children:["Tools Config",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#tools-config",children:"#"})]}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:"Low-level tools configurations in Builder."}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Unsupported configurations and capabilities include:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"/api/config-tools#toolsterser",children:"tools.terser"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"/api/config-tools#toolscssextract",children:"tools.cssExtract"})}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"/api/config-tools#toolscssloader",children:"tools.cssLoader"})," (Only supported when ",(0,a.jsx)(n.a,{href:"/api/config-output#outputdisablecssextract",children:"disableCssExtract"})," is true)"]}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"/api/config-tools#toolsinspector",children:"tools.inspector"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"/api/config-tools#toolsstyledcomponents",children:"tools.styledComponents"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"/api/config-tools#toolstsloader",children:"tools.tsLoader"})}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"/api/config-tools#toolswebpack",children:"tools.webpack"}),"\uFF1Ause ",(0,a.jsx)(n.a,{href:"/api/config-tools#toolsrspack",children:"tools.rspack"})," instead."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"/api/config-tools#toolswebpackchain",children:"tools.webpackChain"}),"\uFF1Ause ",(0,a.jsx)(n.a,{href:"/api/config-tools#toolsbundlerchain",children:"tools.bundlerChain"})," instead."]}),"\n"]}),"\n",(0,a.jsxs)(n.div,{className:"rspress-directive tip",children:[(0,a.jsx)(n.div,{className:"rspress-directive-title",children:"TIP"}),(0,a.jsx)(n.div,{className:"rspress-directive-content",children:(0,a.jsx)(n.p,{children:"In addition to the above configurations, some of the supported configurations may have differences in their capabilities. For specific differences in configurations, please refer to the corresponding API for each configuration."})})]}),"\n",(0,a.jsxs)(n.h3,{id:"2-migrating-from-webpackchain-to-bundlerchain",children:["2. Migrating from webpackChain to bundlerChain",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#2-migrating-from-webpackchain-to-bundlerchain",children:"#"})]}),"\n",(0,a.jsxs)(n.p,{children:["Builder supports modifying Rspack config via ",(0,a.jsx)(n.a,{href:"/api/config-tools#toolsbundlerchain",children:"bundlerChain"}),". configurations modified via bundlerChain will take effect on both webpack and Rspack builds."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-diff",children:"export default {\n  tools: {\n-   webpackChain: (chain, { env }) => {\n+   bundlerChain: (chain, { env }) => {\n      if (env === 'development') {\n        chain.devtool('cheap-module-eval-source-map');\n      }\n    },\n  },\n};\n"})}),"\n",(0,a.jsxs)(n.div,{className:"rspress-directive tip",children:[(0,a.jsx)(n.div,{className:"rspress-directive-title",children:"TIP"}),(0,a.jsx)(n.div,{className:"rspress-directive-content",children:(0,a.jsx)(n.p,{children:"The bundlerChain only provides consistent api modification for Rspack & webpack configurations, the actual plugin / loader availability depends on the actual Rspack / webpack support."})})]}),"\n",(0,a.jsxs)(n.h4,{id:"chain_id-differences",children:["CHAIN_ID differences",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#chain_id-differences",children:"#"})]}),"\n",(0,a.jsx)(n.p,{children:"Because of some implementation differences between webpack and Rspack, there are some differences in the rules configuration."}),"\n",(0,a.jsxs)(n.p,{children:["You can see all the rules that are supported in both Rspack & webpack via ",(0,a.jsx)(n.a,{href:"/api/config-tools#chain_id",children:"tools.bundlerChain#CHAIN_ID"}),"."]}),"\n",(0,a.jsxs)(n.h3,{id:"3-migrating-from-toolswebpack-to-toolsrspack",children:["3. Migrating from tools.webpack to tools.rspack",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#3-migrating-from-toolswebpack-to-toolsrspack",children:"#"})]}),"\n",(0,a.jsxs)(n.p,{children:["BundlerChain only supports modifying the Rspack & webpack intersection config, more Rspack-exclusive features need to be modified via ",(0,a.jsx)(n.a,{href:"/api/config-tools#toolsrspack",children:"tools.rspack"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["Before modify the Rspack configuration object, you may should know ",(0,a.jsx)(n.a,{href:"https://www.rspack.dev/guide/config-diff.html",target:"_blank",rel:"noopener noreferrer",children:"the config diff between Rspack and Webapck"}),"."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-diff",children:"export default {\n  tools: {\n-   webppack: (config, { env }) => {\n+   rspack: (config, { env }) => {\n      if (env === 'development') {\n        config.devtool = 'cheap-module-eval-source-map';\n      }\n      return config;\n    },\n  },\n};\n"})}),"\n",(0,a.jsxs)(n.p,{children:["More information about Rspack, please refer to the ",(0,a.jsx)(n.a,{href:"https://www.rspack.dev/",target:"_blank",rel:"noopener noreferrer",children:"Rspack website"}),"."]}),"\n",(0,a.jsxs)(n.h3,{id:"4-babel-configuration-migration",children:["4. Babel Configuration Migration",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#4-babel-configuration-migration",children:"#"})]}),"\n",(0,a.jsxs)(n.p,{children:["By default, Rspack uses SWC for transpilation and compression. Therefore, when using Rspack as the bundler, ",(0,a.jsx)(n.code,{children:"babel-loader"})," is not loaded by default."]}),"\n",(0,a.jsx)(n.p,{children:"For most common Babel plugins, you can find corresponding alternatives in Rspack, and there are also corresponding compatible configuration options in Builder."}),"\n",(0,a.jsxs)(n.table,{children:["\n",(0,a.jsxs)(n.thead,{children:["\n",(0,a.jsxs)(n.tr,{children:["\n",(0,a.jsx)(n.th,{children:"Babel Plugin"}),"\n",(0,a.jsx)(n.th,{children:"Rspack Configuration"}),"\n",(0,a.jsx)(n.th,{children:"Builder Configuration"}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.tbody,{children:["\n",(0,a.jsxs)(n.tr,{children:["\n",(0,a.jsx)(n.td,{children:"@babel/preset-env"}),"\n",(0,a.jsx)(n.td,{children:(0,a.jsx)(n.a,{href:"https://www.rspack.dev/config/builtins.html#builtinspresetenv",target:"_blank",rel:"noopener noreferrer",children:"builtins.presetEnv"})}),"\n",(0,a.jsxs)(n.td,{children:[(0,a.jsx)(n.a,{href:"/guide/advanced/browserslist",children:"Browserslist"}),"\u3001",(0,a.jsx)("br",{}),(0,a.jsx)(n.a,{href:"/guide/advanced/browser-compatibility",children:"Browser Compatibility"})]}),"\n"]}),"\n",(0,a.jsxs)(n.tr,{children:["\n",(0,a.jsx)(n.td,{children:"@babel/preset-react"}),"\n",(0,a.jsx)(n.td,{children:(0,a.jsx)(n.a,{href:"https://www.rspack.dev/config/builtins.html#builtinsreact",target:"_blank",rel:"noopener noreferrer",children:"builtins.react"})}),"\n",(0,a.jsx)(n.td,{children:(0,a.jsx)(n.a,{href:"/guide/advanced/hmr",children:"Hot Module Replacement"})}),"\n"]}),"\n",(0,a.jsxs)(n.tr,{children:["\n",(0,a.jsx)(n.td,{children:"@emotion/babel-plugin"}),"\n",(0,a.jsx)(n.td,{children:(0,a.jsx)(n.a,{href:"https://www.rspack.dev/config/builtins.html#builtinsemotion",target:"_blank",rel:"noopener noreferrer",children:"builtins.emotion"})}),"\n",(0,a.jsx)(n.td,{children:"Not supported"}),"\n"]}),"\n",(0,a.jsxs)(n.tr,{children:["\n",(0,a.jsx)(n.td,{children:"babel-plugin-import"}),"\n",(0,a.jsx)(n.td,{children:(0,a.jsx)(n.a,{href:"https://www.rspack.dev/config/builtins.html#builtinspluginimport",target:"_blank",rel:"noopener noreferrer",children:"builtins.pluginImport"})}),"\n",(0,a.jsx)(n.td,{children:(0,a.jsx)(n.a,{href:"/api/config-source#sourcetransformimport",children:"source.transformImport"})}),"\n"]}),"\n",(0,a.jsxs)(n.tr,{children:["\n",(0,a.jsx)(n.td,{children:"babel-plugin-lodash"}),"\n",(0,a.jsx)(n.td,{children:"Not supported"}),"\n",(0,a.jsx)(n.td,{children:"Not supported"}),"\n"]}),"\n",(0,a.jsxs)(n.tr,{children:["\n",(0,a.jsx)(n.td,{children:"babel-plugin-styled-components"}),"\n",(0,a.jsx)(n.td,{children:"Not supported"}),"\n",(0,a.jsx)(n.td,{children:"Not supported"}),"\n"]}),"\n",(0,a.jsxs)(n.tr,{children:["\n",(0,a.jsx)(n.td,{children:"@babel/plugin-react-transform-remove-prop-types"}),"\n",(0,a.jsx)(n.td,{children:"Not supported"}),"\n",(0,a.jsx)(n.td,{children:"Not supported"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.div,{className:"rspress-directive Tip",children:[(0,a.jsx)(n.div,{className:"rspress-directive-title",children:"TIP"}),(0,a.jsx)(n.div,{className:"rspress-directive-content",children:(0,a.jsxs)(n.p,{children:["When using Rspack for building, you can still configure Babel plugins through ",(0,a.jsx)(n.a,{href:"/api/config-tools#toolsbabel",children:"tools.babel"}),", but this will result in additional compilation overhead, which may slow down the Rspack build to some extent.\n"]})})]}),"\n",(0,a.jsxs)(n.h3,{id:"5-swc-configuration-support",children:["5. SWC Configuration Support",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#5-swc-configuration-support",children:"#"})]}),"\n",(0,a.jsxs)(n.p,{children:["Builder uses Rspack ",(0,a.jsx)(n.a,{href:"https://www.rspack.dev/guide/loader.html#builtinswc-loader",target:"_blank",rel:"noopener noreferrer",children:"builtin:swc-loader"})," for code translation. If you have custom configuration requirements for builtin:swc-loader, you can refer to the following code:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"export default {\n  tools: {\n    bundlerChain: (chain, { CHAIN_ID }) => {\n      chain.module\n        .rule(CHAIN_ID.RULE.JS)\n        .use(CHAIN_ID.USE.SWC)\n        .tap(options => {\n          options.xxx = '';\n          return options;\n        });\n    },\n  }\n};\n"})}),"\n",(0,a.jsxs)(n.h3,{id:"6-webpack-plugin-migration",children:["6. Webpack Plugin Migration",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#6-webpack-plugin-migration",children:"#"})]}),"\n",(0,a.jsx)(n.p,{children:"Currently, only a limited number of webpack plugins are compatible with Rspack."}),"\n",(0,a.jsx)(n.p,{children:"If you are using the following plugins (or indirect dependencies) in your project, you will need to temporarily remove them or use alternative solutions, otherwise you won't be able to switch to the Rspack build:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["webpack-retry-chunk-load-plugin\uFF1Ause ",(0,a.jsx)(n.a,{href:"/api/config-output#outputassetsretry",children:"output.assetsRetry"})," instead."]}),"\n",(0,a.jsxs)(n.li,{children:["webpack.ProviderPlugin\uFF1Ause ",(0,a.jsx)(n.a,{href:"https://www.rspack.dev/config/builtins.html#builtinsprovide",target:"_blank",rel:"noopener noreferrer",children:"builtins.provide"})," instead."]}),"\n",(0,a.jsxs)(n.li,{children:["webpack.DefinePlugin\uFF1Ause ",(0,a.jsx)(n.a,{href:"https://www.rspack.dev/config/builtins.html#builtinsdefine",target:"_blank",rel:"noopener noreferrer",children:"builtins.define"})," instead."]}),"\n",(0,a.jsx)(n.li,{children:"webpack.ContextReplacementPlugin"}),"\n",(0,a.jsx)(n.li,{children:"..."}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["Detailed plugin support can be found at: ",(0,a.jsx)(n.a,{href:"https://www.rspack.dev/guide/plugin-compat.html",target:"_blank",rel:"noopener noreferrer",children:"Plugin compatibility"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["The plugins not listed can be judged according to ",(0,a.jsx)(n.a,{href:"https://www.rspack.dev/api/plugin-api.html",target:"_blank",rel:"noopener noreferrer",children:"Rspack Plugin API"}),"."]}),"\n",(0,a.jsxs)(n.h3,{id:"7-css-modules-configuration-migration",children:["7. CSS Modules Configuration Migration",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#7-css-modules-configuration-migration",children:"#"})]}),"\n",(0,a.jsxs)(n.p,{children:["Rspack mode does not support modifying CSS Modules configuration through ",(0,a.jsx)(n.code,{children:"tools.cssLoader"}),", however, Builder provides ",(0,a.jsx)(n.a,{href:"/api/config-output#outputcssmodules",children:"output.cssModules"})," configuration, it used to smooth Rspack mode and webpack mode difference."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-diff",children:"export default {\n+  output: {\n+    cssModules: {\n+      auto: resource => {\n+        return resource.includes('.module.') || resource.includes('shared/');\n+      },\n+    },\n+  },\n-  tools: {\n-    cssLoader: {\n-      modules: {\n-        auto: path => {\n-          return resource.includes('.module.') || resource.includes('shared/');\n-        },\n-      },\n-    },\n-  }\n};\n"})}),"\n",(0,a.jsxs)(n.h2,{id:"compare-with-rspack-cli",children:["Compare with Rspack CLI",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#compare-with-rspack-cli",children:"#"})]}),"\n",(0,a.jsxs)(n.p,{children:["Builder Rspack build mode comparison ",(0,a.jsx)(n.a,{href:"https://www.rspack.dev/guide/quick-start.html#using-the-rspack-cli",target:"_blank",rel:"noopener noreferrer",children:"Rspack CLI"})," adds a lot of out-of-the-box capabilities. At the same time, these capabilities will bring a certain degree of performance overhead and behavioral differences:"]}),"\n",(0,a.jsxs)(n.table,{children:["\n",(0,a.jsxs)(n.thead,{children:["\n",(0,a.jsxs)(n.tr,{children:["\n",(0,a.jsx)(n.th,{children:"Features"}),"\n",(0,a.jsx)(n.th,{children:"Description"}),"\n",(0,a.jsx)(n.th,{children:"Links"}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.tbody,{children:["\n",(0,a.jsxs)(n.tr,{children:["\n",(0,a.jsx)(n.td,{children:"Browser Compatibility"}),"\n",(0,a.jsxs)(n.td,{children:["Builder will set different default values of Browserslist according to ",(0,a.jsx)(n.a,{href:"/guide/basic/build-target",children:"build target"})]}),"\n",(0,a.jsx)(n.td,{children:(0,a.jsx)("ul",{children:(0,a.jsx)("li",{children:(0,a.jsx)(n.a,{href:"/guide/advanced/browserslist.html",children:"browserslist"})})})}),"\n"]}),"\n",(0,a.jsxs)(n.tr,{children:["\n",(0,a.jsx)(n.td,{children:"SourceMap generation"}),"\n",(0,a.jsx)(n.td,{children:"Builder generates different SourceMaps according to the environment by default (false is used by default in Rspack CLI)"}),"\n",(0,a.jsx)(n.td,{children:(0,a.jsx)("ul",{children:(0,a.jsx)("li",{children:(0,a.jsx)(n.a,{href:"/api/config-output.html#outputdisablesourcemap",children:"output.disableSourceMap"})})})}),"\n"]}),"\n",(0,a.jsxs)(n.tr,{children:["\n",(0,a.jsx)(n.td,{children:"SVG to React component"}),"\n",(0,a.jsx)(n.td,{children:"Builder support to import SVG as component by default"}),"\n",(0,a.jsx)(n.td,{children:(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{children:(0,a.jsx)(n.a,{href:"/guide/basic/svg-assets.html",children:"Import SVG Assets"})}),(0,a.jsx)("li",{children:(0,a.jsx)(n.a,{href:"/api/config-output.html#outputdisablesvgr",children:"output.disableSvgr"})})]})}),"\n"]}),"\n",(0,a.jsxs)(n.tr,{children:["\n",(0,a.jsx)(n.td,{children:"Import common component library on demand"}),"\n",(0,a.jsxs)(n.td,{children:["When using ",(0,a.jsx)(n.a,{href:"https://www.npmjs.com/package/antd",target:"_blank",rel:"noopener noreferrer",children:"Ant Design"})," or ",(0,a.jsx)(n.a,{href:"https://www.npmjs.com/package/@arco-design/web-react",target:"_blank",rel:"noopener noreferrer",children:"Arco Design"})," component library, Builder will automatically enable the on-demand import function by default"]}),"\n",(0,a.jsx)(n.td,{children:(0,a.jsx)("ul",{children:(0,a.jsx)("li",{children:(0,a.jsx)(n.a,{href:"/api/config-source#sourcetransformimport",children:"source.transformImport"})})})}),"\n"]}),"\n",(0,a.jsxs)(n.tr,{children:["\n",(0,a.jsx)(n.td,{children:"Type Checker"}),"\n",(0,a.jsx)(n.td,{children:"Builder runs TypeScript type checker by default"}),"\n",(0,a.jsx)(n.td,{children:(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{children:(0,a.jsx)(n.a,{href:"/guide/basic/typescript.html#type-checking",children:"Type checking"})}),(0,a.jsx)("li",{children:(0,a.jsx)(n.a,{href:"/api/config-output#outputdisabletschecker",children:"output.disableTsChecker"})})]})}),"\n"]}),"\n",(0,a.jsxs)(n.tr,{children:["\n",(0,a.jsx)(n.td,{children:"PostCSS compilation"}),"\n",(0,a.jsx)(n.td,{children:"PostCSS compilation is enabled by default, built-in autoprefixer and other plugins"}),"\n",(0,a.jsx)(n.td,{children:(0,a.jsx)("ul",{children:(0,a.jsx)("li",{children:(0,a.jsx)(n.a,{href:"/guide/basic/css-usage.html#using-postcss",children:"Using PostCSS"})})})}),"\n"]}),"\n",(0,a.jsxs)(n.tr,{children:["\n",(0,a.jsx)(n.td,{children:"Integrate @rspack/html-plugin"}),"\n",(0,a.jsxs)(n.td,{children:["Builder integrates ",(0,a.jsx)(n.code,{children:"@rspack/html-plugin"})," by default to support more HTML template features (builtins.html is used by default in Rspack CLI)"]}),"\n",(0,a.jsx)(n.td,{children:(0,a.jsx)("ul",{children:(0,a.jsx)("li",{children:(0,a.jsx)(n.a,{href:"/api/config-tools.html#toolshtmlplugin",children:"tools.htmlPlugin"})})})}),"\n"]}),"\n",(0,a.jsxs)(n.tr,{children:["\n",(0,a.jsx)(n.td,{children:"DevServer"}),"\n",(0,a.jsxs)(n.td,{children:["Builder implement DevServer based on ",(0,a.jsx)(n.a,{href:"https://github.com/webpack/webpack-dev-middleware",target:"_blank",rel:"noopener noreferrer",children:"webpack-dev-middleware"})," (",(0,a.jsx)(n.a,{href:"https://www.rspack.dev/guide/dev-server.html",target:"_blank",rel:"noopener noreferrer",children:"@rspack/dev-server"})," is used in Rspack CLI)"]}),"\n",(0,a.jsx)(n.td,{children:(0,a.jsx)("ul",{children:(0,a.jsx)("li",{children:(0,a.jsx)(n.a,{href:"/api/config-tools.html#toolsdevserver",children:"tools.devServer"})})})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"All of the above capabilities provide configurable options that can be adjusted as needed based on the actual situation of the project."}),"\n",(0,a.jsxs)(n.p,{children:["For more built-in capabilities, please refer to ",(0,a.jsx)(n.a,{href:"/guide/features",children:"Feature Navigation"}),"."]}),"\n",(0,a.jsxs)(n.h2,{id:"faq",children:["FAQ",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#faq",children:"#"})]}),"\n",(0,a.jsxs)(n.h3,{id:"after-enabling-rspack-the-performance-is-not-as-fast-as-expected",children:["After enabling Rspack, the performance is not as fast as expected?",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#after-enabling-rspack-the-performance-is-not-as-fast-as-expected",children:"#"})]}),"\n",(0,a.jsx)(n.p,{children:"Usually, after enabling Rspack, there will be a 5 to 10 times improvement in compilation performance compared to Webpack."}),"\n",(0,a.jsx)(n.p,{children:"The following behaviors are currently known to slow down Rspack build performance to some extent:"}),"\n",(0,a.jsxs)(n.h5,{id:"using-configuration-options-or-plugins-that-rely-on-babel",children:["Using configuration options or plugins that rely on Babel",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#using-configuration-options-or-plugins-that-rely-on-babel",children:"#"})]}),"\n",(0,a.jsx)(n.p,{children:"When using Rspack to build, babel-loader is not enabled by default."}),"\n",(0,a.jsx)(n.p,{children:"However, when a project uses configuration options or plugins implemented with Babel, an additional babel-loader will be added for file transpilation:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Add the Babel plugin via ",(0,a.jsx)(n.a,{href:"/api/config-tools#toolsbabel",children:"tools.babel"})]}),"\n",(0,a.jsxs)(n.li,{children:["Use ",(0,a.jsx)(n.a,{href:"https://modernjs.dev/en/guides/advanced-features/ssr.html",target:"_blank",rel:"noopener noreferrer",children:"Modern.js SSR feature"})]}),"\n",(0,a.jsx)(n.li,{children:"..."}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["You can check whether the Babel plugin exists in the final generated Rspack configuration by using ",(0,a.jsx)(n.a,{href:"/guide/debug/debug-mode",children:"debug mode"}),"."]}),"\n",(0,a.jsxs)(n.h5,{id:"enable-typescript-type-checking",children:["Enable TypeScript type checking",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#enable-typescript-type-checking",children:"#"})]}),"\n",(0,a.jsx)(n.p,{children:"By default, Builder enables TypeScript type checking during build. In large projects, type checking can take much longer than the actual build time of Rspack, so this behavior can slow down the build speed to some extent during production environment builds."}),"\n",(0,a.jsxs)(n.p,{children:["In this case, you can disable type checking using ",(0,a.jsx)(n.a,{href:"/api/config-output#outputdisabletschecker",children:"output.disableTsChecker"})," to see if Rspack performance meets your expectations after excluding type checking."]}),"\n",(0,a.jsxs)(n.h5,{id:"large-number-of-less-files",children:["Large number of Less files",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#large-number-of-less-files",children:"#"})]}),"\n",(0,a.jsxs)(n.p,{children:["Currently, Less files are processed using the ",(0,a.jsx)(n.code,{children:"less-loader"})," based on JavaScript and no Rust version is provided. Therefore, processing a large number of Less files can slow down the build performance."]}),"\n",(0,a.jsxs)(n.div,{className:"rspress-directive tip",children:[(0,a.jsx)(n.div,{className:"rspress-directive-title",children:"TIP"}),(0,a.jsx)(n.div,{className:"rspress-directive-content",children:(0,a.jsxs)(n.p,{children:["When using component libraries such as ",(0,a.jsx)(n.a,{href:"https://www.npmjs.com/package/@arco-design/web-react",target:"_blank",rel:"noopener noreferrer",children:"Arco Design"}),", please try to avoid fully introducing Less styles. You can import on-demand instead. or directly import CSS styles.\n"]})})]}),"\n",(0,a.jsxs)(n.h5,{id:"large-number-of-svg-files",children:["Large number of SVG files",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#large-number-of-svg-files",children:"#"})]}),"\n",(0,a.jsx)(n.p,{children:"By default, builder supports using SVG resources as React components, which incurs some performance overhead."}),"\n",(0,a.jsxs)(n.p,{children:["If you don't need this feature, you can set ",(0,a.jsx)(n.a,{href:"/api/config-output#outputdisablesvgr",children:"output.disableSvgr"})," to true to disable this behavior to improve build performance."]}),"\n",(0,a.jsxs)(n.h5,{id:"not-import-component-library-on-demand",children:["Not import component library on demand",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#not-import-component-library-on-demand",children:"#"})]}),"\n",(0,a.jsxs)(n.p,{children:["By default, when using ",(0,a.jsx)(n.a,{href:"https://www.npmjs.com/package/antd",target:"_blank",rel:"noopener noreferrer",children:"Ant Design"})," or ",(0,a.jsx)(n.a,{href:"https://www.npmjs.com/package/@arco-design/web-react",target:"_blank",rel:"noopener noreferrer",children:"Arco Design"})," component library, Builder will automatically enable the on-demand import function, and the default configuration can refer to ",(0,a.jsx)(n.a,{href:"/api/config-source#sourcetransformimport",children:"source.transformImport"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["When using other component libraries, if the component library supports on-demand import, we recommend to configure on-demand import through ",(0,a.jsx)(n.a,{href:"/api/config-source#sourcetransformimport",children:"source.transformImport"})," first."]})]})}(i=globalThis).__RSPRESS_PAGE_META||(i.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["en%2Fguide%2Fadvanced%2Frspack-start.mdx"]={toc:[{text:"Enable Rspack",id:"enable-rspack",depth:2},{text:"Enable in Modern.js framework",id:"enable-in-modernjs-framework",depth:3},{text:"Use Builder in a front-end framework",id:"use-builder-in-a-front-end-framework",depth:3},{text:"Migrating from webpack to Rspack",id:"migrating-from-webpack-to-rspack",depth:2},{text:"1. Builder configuration differences",id:"1-builder-configuration-differences",depth:3},{text:"Source Config",id:"source-config",depth:4},{text:"Html Config",id:"html-config",depth:4},{text:"Security Config",id:"security-config",depth:4},{text:"Dev Config",id:"dev-config",depth:4},{text:"Output Config",id:"output-config",depth:4},{text:"Experiments Config",id:"experiments-config",depth:4},{text:"Performance Config",id:"performance-config",depth:4},{text:"Tools Config",id:"tools-config",depth:4},{text:"2. Migrating from webpackChain to bundlerChain",id:"2-migrating-from-webpackchain-to-bundlerchain",depth:3},{text:"CHAIN_ID differences",id:"chain_id-differences",depth:4},{text:"3. Migrating from tools.webpack to tools.rspack",id:"3-migrating-from-toolswebpack-to-toolsrspack",depth:3},{text:"4. Babel Configuration Migration",id:"4-babel-configuration-migration",depth:3},{text:"5. SWC Configuration Support",id:"5-swc-configuration-support",depth:3},{text:"6. Webpack Plugin Migration",id:"6-webpack-plugin-migration",depth:3},{text:"7. CSS Modules Configuration Migration",id:"7-css-modules-configuration-migration",depth:3},{text:"Compare with Rspack CLI",id:"compare-with-rspack-cli",depth:2},{text:"FAQ",id:"faq",depth:2},{text:"After enabling Rspack, the performance is not as fast as expected?",id:"after-enabling-rspack-the-performance-is-not-as-fast-as-expected",depth:3}],title:"Using Rspack",frontmatter:{}};var h=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,o.useMDXComponents)(),e.components);return n?(0,a.jsx)(n,(0,t._)((0,s._)({},e),{children:(0,a.jsx)(d,(0,s._)({},e))})):d(e)}},70298:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return l}});var i,s=r("10310"),t=r("81904"),a=r("98638"),o=r("21968");function c(e){let n=Object.assign({h2:"h2",a:"a",p:"p",ul:"ul",li:"li"},(0,o.useMDXComponents)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.h2,{id:"precautions",children:["Precautions",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#precautions",children:"#"})]}),"\n",(0,a.jsx)(n.p,{children:"Before using Rspack, please be aware that Rspack is still an early stage project and is currently in a rapid iteration phase. Therefore, you need to be aware of the following:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"The API and configuration options of Rspack are still unstable, and the support for Rspack in Modern.js is experimental. Therefore, incompatible updates may be introduced in non-major releases in the future."}),"\n",(0,a.jsx)(n.li,{children:"Rspack does not currently provide complete optimization capabilities like tree shaking, bundle splitting, and scope hoisting, which are available in webpack. We will continue to enhance these optimization capabilities in Rspack from June to December. Therefore, when migrating to Rspack, you may notice a certain level of increase in the bundle size compared to webpack."}),"\n",(0,a.jsx)(n.li,{children:"Rspack currently relies on SWC for code compilation and compression. Due to the lower maturity of SWC compared to Babel and Terser, you may encounter SWC bugs."}),"\n",(0,a.jsx)(n.li,{children:"Rspack is compatible with most plugins and loaders in the webpack ecosystem, but there are still some plugins and loaders that cannot be used temporarily."}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Rspack is actively working to improve the above issues and plans to address them in future releases. We recommend that you evaluate your project requirements and risk tolerance before deciding whether to use Rspack. If your project requires high stability and performance, you should choose the more mature webpack. If you are willing to try new tools and contribute to their development, we welcome you to use Rspack and provide feedback and bug reports to help improve its stability and functionality."})]})}(i=globalThis).__RSPRESS_PAGE_META||(i.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["en%2Fshared%2FrspackPrecautions.md"]={toc:[{text:"Precautions",id:"precautions",depth:2}],title:"",frontmatter:{}};var l=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,o.useMDXComponents)(),e.components);return n?(0,a.jsx)(n,(0,t._)((0,s._)({},e),{children:(0,a.jsx)(c,(0,s._)({},e))})):c(e)}}}]);