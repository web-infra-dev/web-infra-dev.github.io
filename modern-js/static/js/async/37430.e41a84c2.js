/*! For license information please see 37430.e41a84c2.js.LICENSE.txt */
(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["37430"],{54979:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return l}});var s=r("39980"),d=r("96954");function i(e){let n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",div:"div",a:"a",blockquote:"blockquote",h3:"h3",h4:"h4",pre:"pre",h5:"h5",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,d.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Type:"})," ",(0,s.jsx)(n.code,{children:"Function | undefined"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Default:"})," ",(0,s.jsx)(n.code,{children:"undefined"})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["You can modify the webpack and Rspack configuration by configuring ",(0,s.jsx)(n.code,{children:"tools.bundlerChain"})," which is type of ",(0,s.jsx)(n.code,{children:"Function"}),". The function receives two parameters, the first is the original bundler chain object, and the second is an object containing some utils."]}),"\n",(0,s.jsxs)(n.div,{className:"rspress-directive tip",children:[(0,s.jsx)(n.div,{className:"rspress-directive-title",children:"What is BundlerChain"}),(0,s.jsxs)(n.div,{className:"rspress-directive-content",children:["\n",(0,s.jsx)(n.p,{children:"Bundler chain is a subset of webpack chain, which contains part of the webpack chain API that you can use to modify both webpack and Rspack configuration."}),"\n",(0,s.jsxs)(n.p,{children:["Configurations modified via bundler chain will work on both webpack and Rspack builds. Note that the bundler chain only supports modifying the configuration of the non-differentiated parts of webpack and Rspack. For example, modifying the devtool configuration option (webpack and Rspack have the same devtool property value type), or adding an ",(0,s.jsx)(n.a,{href:"https://www.rspack.dev/guide/plugin-compat.html",target:"_blank",rel:"noopener noreferrer",children:"Rspack-compatible"})," webpack plugin."]}),"\n"]})]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"tools.bundlerChain"})," is executed earlier than tools.webpackChain / tools.webpack / tools.rspack and thus will be overridden by changes in others."]}),"\n"]}),"\n",(0,s.jsxs)(n.h3,{id:"utils",children:["Utils",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#utils",children:"#"})]}),"\n",(0,s.jsxs)(n.h4,{id:"env",children:["env",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#env",children:"#"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Type:"})," ",(0,s.jsx)(n.code,{children:"'development' | 'production' | 'test'"})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"env"})," parameter can be used to determine whether the current environment is development, production or test. For example:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    bundlerChain: (chain, { env }) => {\n      if (env === 'development') {\n        chain.devtool('cheap-module-eval-source-map');\n      }\n    },\n  },\n};\n"})}),"\n",(0,s.jsxs)(n.h4,{id:"isprod",children:["isProd",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#isprod",children:"#"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Type:"})," ",(0,s.jsx)(n.code,{children:"boolean"})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"isProd"})," parameter can be used to determine whether the current environment is production. For example:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    bundlerChain: (chain, { isProd }) => {\n      if (isProd) {\n        chain.devtool('source-map');\n      }\n    },\n  },\n};\n"})}),"\n",(0,s.jsxs)(n.h4,{id:"target",children:["target",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#target",children:"#"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Type:"})," ",(0,s.jsx)(n.code,{children:"'web' | 'node' | 'modern-web' | 'web-worker'"})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"target"})," parameter can be used to determine the current environment. For example:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    bundlerChain: (chain, { target }) => {\n      if (target === 'node') {\n        // ...\n      }\n    },\n  },\n};\n"})}),"\n",(0,s.jsxs)(n.h4,{id:"isserver",children:["isServer",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#isserver",children:"#"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Type:"})," ",(0,s.jsx)(n.code,{children:"boolean"})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Determines whether the target environment is ",(0,s.jsx)(n.code,{children:"node"}),", equivalent to ",(0,s.jsx)(n.code,{children:"target === 'node'"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    bundlerChain: (chain, { isServer }) => {\n      if (isServer) {\n        // ...\n      }\n    },\n  },\n};\n"})}),"\n",(0,s.jsxs)(n.h4,{id:"iswebworker",children:["isWebWorker",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#iswebworker",children:"#"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Type:"})," ",(0,s.jsx)(n.code,{children:"boolean"})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Determines whether the target environment is ",(0,s.jsx)(n.code,{children:"web-worker"}),", equivalent to ",(0,s.jsx)(n.code,{children:"target === 'web-worker'"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    bundlerChain: (chain, { isWebWorker }) => {\n      if (isWebWorker) {\n        // ...\n      }\n    },\n  },\n};\n"})}),"\n",(0,s.jsxs)(n.h3,{id:"htmlplugin",children:["HtmlPlugin",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#htmlplugin",children:"#"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Type:"})," ",(0,s.jsx)(n.code,{children:"typeof import('html-webpack-plugin') | import('@rspack/plugin-html') "})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"The HtmlPlugin instance in webpack or Rspack:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    bundlerChain: (chain, { HtmlPlugin }) => {\n      console.log(HtmlPlugin);\n    },\n  },\n};\n"})}),"\n",(0,s.jsxs)(n.h4,{id:"chain_id",children:["CHAIN_ID",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#chain_id",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"Some common Chain IDs are predefined in the Builder, and you can use these IDs to locate the built-in Rule or Plugin."}),"\n",(0,s.jsxs)(n.div,{className:"rspress-directive tip",children:[(0,s.jsx)(n.div,{className:"rspress-directive-title",children:"TIP"}),(0,s.jsxs)(n.div,{className:"rspress-directive-content",children:[(0,s.jsx)(n.p,{children:"Please note that some of the rules or plugins listed below are not available by default. They will only be included in the Rspack or webpack configuration when you enable specific options or register certain plugins."}),"\n",(0,s.jsxs)(n.p,{children:["For example, the ",(0,s.jsx)(n.code,{children:"RULE.STYLUS"})," rule exists only when the Stylus plugin is registered.\n"]})]})]}),"\n",(0,s.jsxs)(n.h5,{id:"chain_idrule",children:["CHAIN_ID.RULE",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#chain_idrule",children:"#"})]}),"\n",(0,s.jsxs)(n.table,{children:["\n",(0,s.jsxs)(n.thead,{children:["\n",(0,s.jsxs)(n.tr,{children:["\n",(0,s.jsx)(n.th,{children:"ID"}),"\n",(0,s.jsx)(n.th,{children:"Description"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.tbody,{children:["\n",(0,s.jsxs)(n.tr,{children:["\n",(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"RULE.MJS"})}),"\n",(0,s.jsxs)(n.td,{children:["Rule for ",(0,s.jsx)(n.code,{children:"mjs"})]}),"\n"]}),"\n",(0,s.jsxs)(n.tr,{children:["\n",(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"RULE.CSS"})}),"\n",(0,s.jsxs)(n.td,{children:["Rule for ",(0,s.jsx)(n.code,{children:"css"})]}),"\n"]}),"\n",(0,s.jsxs)(n.tr,{children:["\n",(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"RULE.LESS"})}),"\n",(0,s.jsxs)(n.td,{children:["Rule for ",(0,s.jsx)(n.code,{children:"less"})]}),"\n"]}),"\n",(0,s.jsxs)(n.tr,{children:["\n",(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"RULE.SASS"})}),"\n",(0,s.jsxs)(n.td,{children:["Rule for ",(0,s.jsx)(n.code,{children:"sass"})]}),"\n"]}),"\n",(0,s.jsxs)(n.tr,{children:["\n",(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"RULE.STYLUS"})}),"\n",(0,s.jsxs)(n.td,{children:["Rule for ",(0,s.jsx)(n.code,{children:"stylus"})]}),"\n"]}),"\n",(0,s.jsxs)(n.tr,{children:["\n",(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"RULE.TOML"})}),"\n",(0,s.jsxs)(n.td,{children:["Rule for ",(0,s.jsx)(n.code,{children:"toml"})]}),"\n"]}),"\n",(0,s.jsxs)(n.tr,{children:["\n",(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"RULE.YAML"})}),"\n",(0,s.jsxs)(n.td,{children:["Rule for ",(0,s.jsx)(n.code,{children:"yaml"})]}),"\n"]}),"\n",(0,s.jsxs)(n.tr,{children:["\n",(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"RULE.WASM"})}),"\n",(0,s.jsxs)(n.td,{children:["Rule for ",(0,s.jsx)(n.code,{children:"WASM"})]}),"\n"]}),"\n",(0,s.jsxs)(n.tr,{children:["\n",(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"RULE.NODE"})}),"\n",(0,s.jsxs)(n.td,{children:["Rule for ",(0,s.jsx)(n.code,{children:"node"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.h3,{id:"chain_idone_of",children:["CHAIN_ID.ONE_OF",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#chain_idone_of",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"ONE_OF.XXX"})," can match a certain type of rule in the rule array."]}),"\n",(0,s.jsxs)(n.table,{children:["\n",(0,s.jsxs)(n.thead,{children:["\n",(0,s.jsxs)(n.tr,{children:["\n",(0,s.jsx)(n.th,{children:"ID"}),"\n",(0,s.jsx)(n.th,{children:"Description"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.tbody,{children:["\n",(0,s.jsxs)(n.tr,{children:["\n",(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"ONE_OF.SVG"})}),"\n",(0,s.jsx)(n.td,{children:"Rules for SVG, automatic choice between data URI and separate file"}),"\n"]}),"\n",(0,s.jsxs)(n.tr,{children:["\n",(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"ONE_OF.SVG_URL"})}),"\n",(0,s.jsx)(n.td,{children:"Rules for SVG, output as a separate file"}),"\n"]}),"\n",(0,s.jsxs)(n.tr,{children:["\n",(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"ONE_OF.SVG_INLINE"})}),"\n",(0,s.jsx)(n.td,{children:"Rules for SVG, inlined into bundles as data URIs"}),"\n"]}),"\n",(0,s.jsxs)(n.tr,{children:["\n",(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"ONE_OF.SVG_ASSETS"})}),"\n",(0,s.jsx)(n.td,{children:"Rules for SVG, automatic choice between data URI and separate file"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.h3,{id:"chain_iduse",children:["CHAIN_ID.USE",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#chain_iduse",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"USE.XXX"})," can match a certain loader."]}),"\n",(0,s.jsxs)(n.table,{children:["\n",(0,s.jsxs)(n.thead,{children:["\n",(0,s.jsxs)(n.tr,{children:["\n",(0,s.jsx)(n.th,{children:"ID"}),"\n",(0,s.jsx)(n.th,{children:"Description"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.tbody,{children:["\n",(0,s.jsxs)(n.tr,{children:["\n",(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"USE.LESS"})}),"\n",(0,s.jsxs)(n.td,{children:["correspond to ",(0,s.jsx)(n.code,{children:"less-loader"})]}),"\n"]}),"\n",(0,s.jsxs)(n.tr,{children:["\n",(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"USE.SASS"})}),"\n",(0,s.jsxs)(n.td,{children:["correspond to ",(0,s.jsx)(n.code,{children:"sass-loader"})]}),"\n"]}),"\n",(0,s.jsxs)(n.tr,{children:["\n",(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"USE.STYLUS"})}),"\n",(0,s.jsxs)(n.td,{children:["correspond to ",(0,s.jsx)(n.code,{children:"stylus-loader"})]}),"\n"]}),"\n",(0,s.jsxs)(n.tr,{children:["\n",(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"USE.VUE"})}),"\n",(0,s.jsxs)(n.td,{children:["correspond to ",(0,s.jsx)(n.code,{children:"vue-loader"})]}),"\n"]}),"\n",(0,s.jsxs)(n.tr,{children:["\n",(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"USE.TOML"})}),"\n",(0,s.jsxs)(n.td,{children:["correspond to ",(0,s.jsx)(n.code,{children:"toml-loader"})]}),"\n"]}),"\n",(0,s.jsxs)(n.tr,{children:["\n",(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"USE.YAML"})}),"\n",(0,s.jsxs)(n.td,{children:["correspond to ",(0,s.jsx)(n.code,{children:"yaml-loader"})]}),"\n"]}),"\n",(0,s.jsxs)(n.tr,{children:["\n",(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"USE.NODE"})}),"\n",(0,s.jsxs)(n.td,{children:["correspond to ",(0,s.jsx)(n.code,{children:"node-loader"})]}),"\n"]}),"\n",(0,s.jsxs)(n.tr,{children:["\n",(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"USE.SVGR"})}),"\n",(0,s.jsxs)(n.td,{children:["correspond to ",(0,s.jsx)(n.code,{children:"@svgr/webpack"})]}),"\n"]}),"\n",(0,s.jsxs)(n.tr,{children:["\n",(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"USE.POSTCSS"})}),"\n",(0,s.jsxs)(n.td,{children:["correspond to ",(0,s.jsx)(n.code,{children:"postcss-loader"})]}),"\n"]}),"\n",(0,s.jsxs)(n.tr,{children:["\n",(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"USE.RESOLVE_URL_LOADER_FOR_SASS"})}),"\n",(0,s.jsxs)(n.td,{children:["correspond to ",(0,s.jsx)(n.code,{children:"resolve-url-loader"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.h3,{id:"chain_idplugin",children:["CHAIN_ID.PLUGIN",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#chain_idplugin",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"PLUGIN.XXX"})," can match a certain webpack plugin."]}),"\n",(0,s.jsxs)(n.table,{children:["\n",(0,s.jsxs)(n.thead,{children:["\n",(0,s.jsxs)(n.tr,{children:["\n",(0,s.jsx)(n.th,{children:"ID"}),"\n",(0,s.jsx)(n.th,{children:"Description"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.tbody,{children:["\n",(0,s.jsxs)(n.tr,{children:["\n",(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"PLUGIN.HTML"})}),"\n",(0,s.jsxs)(n.td,{children:["correspond to ",(0,s.jsx)(n.code,{children:"HtmlPlugin"}),", you need to splice the entry name when using: ",(0,s.jsx)(n.code,{children:"${PLUGIN.HTML}-${entryName}"})]}),"\n"]}),"\n",(0,s.jsxs)(n.tr,{children:["\n",(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"PLUGIN.APP_ICON"})}),"\n",(0,s.jsxs)(n.td,{children:["correspond to ",(0,s.jsx)(n.code,{children:"AppIconPlugin"})]}),"\n"]}),"\n",(0,s.jsxs)(n.tr,{children:["\n",(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"PLUGIN.INLINE_HTML"})}),"\n",(0,s.jsxs)(n.td,{children:["correspond to ",(0,s.jsx)(n.code,{children:"InlineChunkHtmlPlugin"})]}),"\n"]}),"\n",(0,s.jsxs)(n.tr,{children:["\n",(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"PLUGIN.BUNDLE_ANALYZER"})}),"\n",(0,s.jsxs)(n.td,{children:["correspond to ",(0,s.jsx)(n.code,{children:"WebpackBundleAnalyzer"})]}),"\n"]}),"\n",(0,s.jsxs)(n.tr,{children:["\n",(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"PLUGIN.VUE_LOADER_PLUGIN"})}),"\n",(0,s.jsxs)(n.td,{children:["correspond to ",(0,s.jsx)(n.code,{children:"VueLoaderPlugin"})]}),"\n"]}),"\n",(0,s.jsxs)(n.tr,{children:["\n",(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"PLUGIN.AUTO_SET_ROOT_SIZE"})}),"\n",(0,s.jsx)(n.td,{children:"correspond to automatically set root font size plugin in Builder"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.h3,{id:"chain_idminimizer",children:["CHAIN_ID.MINIMIZER",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#chain_idminimizer",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"MINIMIZER.XXX"})," can match a certain minimizer."]}),"\n",(0,s.jsxs)(n.table,{children:["\n",(0,s.jsxs)(n.thead,{children:["\n",(0,s.jsxs)(n.tr,{children:["\n",(0,s.jsx)(n.th,{children:"ID"}),"\n",(0,s.jsx)(n.th,{children:"Description"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.tbody,{children:["\n",(0,s.jsxs)(n.tr,{children:["\n",(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"MINIMIZER.JS"})}),"\n",(0,s.jsxs)(n.td,{children:["correspond to ",(0,s.jsx)(n.code,{children:"TerserWebpackPlugin"})," or ",(0,s.jsx)(n.code,{children:"SwcJsMinimizerRspackPlugin"})]}),"\n"]}),"\n",(0,s.jsxs)(n.tr,{children:["\n",(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"MINIMIZER.CSS"})}),"\n",(0,s.jsxs)(n.td,{children:["correspond to ",(0,s.jsx)(n.code,{children:"CssMinimizerWebpackPlugin"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.h3,{id:"examples",children:["Examples",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#examples",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["For usage examples, please refer to: ",(0,s.jsx)(n.a,{href:"https://modernjs.dev/builder/en/guide/advanced/custom-webpack-config.html#webpack-chain-basics",target:"_blank",rel:"noopener noreferrer",children:"WebpackChain usage examples"}),"."]})]})}function c(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,d.useMDXComponents)(),e.components);return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(i,{...e})}):i(e)}var l=c;c.__RSPRESS_PAGE_META={},c.__RSPRESS_PAGE_META["..%2F..%2Fbuilder-doc%2Fdocs%2Fen%2Fconfig%2Ftools%2FbundlerChain.mdx"]={toc:[{text:"Utils",id:"utils",depth:3},{text:"env",id:"env",depth:4},{text:"isProd",id:"isprod",depth:4},{text:"target",id:"target",depth:4},{text:"isServer",id:"isserver",depth:4},{text:"isWebWorker",id:"iswebworker",depth:4},{text:"HtmlPlugin",id:"htmlplugin",depth:3},{text:"CHAIN_ID",id:"chain_id",depth:4},{text:"CHAIN_ID.ONE_OF",id:"chain_idone_of",depth:3},{text:"CHAIN_ID.USE",id:"chain_iduse",depth:3},{text:"CHAIN_ID.PLUGIN",id:"chain_idplugin",depth:3},{text:"CHAIN_ID.MINIMIZER",id:"chain_idminimizer",depth:3},{text:"Examples",id:"examples",depth:3}],title:"",frontmatter:{}}},11277:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return h}});var s=r("39980"),d=r("96954"),i=r("54979");function c(e){let n=Object.assign({h1:"h1",a:"a"},(0,d.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h1,{id:"toolsbundlerchain",children:["tools.bundlerChain",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#toolsbundlerchain",children:"#"})]}),"\n","\n",(0,s.jsx)(i.default,{})]})}function l(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,d.useMDXComponents)(),e.components);return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}var h=l;l.__RSPRESS_PAGE_META={},l.__RSPRESS_PAGE_META["en%2Fconfigure%2Fapp%2Ftools%2Fbundler-chain.mdx"]={toc:[],title:"tools.bundlerChain",frontmatter:{sidebar_label:"bundlerChain"}}}}]);