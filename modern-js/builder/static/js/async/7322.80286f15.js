(self.webpackChunk_modern_js_builder_doc=self.webpackChunk_modern_js_builder_doc||[]).push([["7322"],{76973:function(e,n,c){"use strict";c.r(n),c.d(n,{default:function(){return l}});var i=c("15169"),a=c("43932"),d=c("9880"),s=c("23169");function r(e){var n=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",pre:"pre",code:"code",div:"div",h3:"h3",ul:"ul",li:"li",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,s.useMDXComponents)(),e.components);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.h1,{id:"\u4FEE\u6539-webpack-\u914D\u7F6E",children:["\u4FEE\u6539 webpack \u914D\u7F6E",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u4FEE\u6539-webpack-\u914D\u7F6E",children:"#"})]}),"\n",(0,d.jsx)(n.p,{children:"Builder \u652F\u6301\u76F4\u63A5\u4FEE\u6539 webpack \u914D\u7F6E\u5BF9\u8C61\uFF0C\u4E5F\u652F\u6301\u901A\u8FC7 webpack-chain \u6765\u6DF1\u5EA6\u5B9A\u5236 webpack \u914D\u7F6E\u3002"}),"\n",(0,d.jsxs)(n.h2,{id:"\u4FEE\u6539-webpack-\u914D\u7F6E\u5BF9\u8C61",children:["\u4FEE\u6539 webpack \u914D\u7F6E\u5BF9\u8C61",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u4FEE\u6539-webpack-\u914D\u7F6E\u5BF9\u8C61",children:"#"})]}),"\n",(0,d.jsxs)(n.p,{children:["\u4F60\u53EF\u4EE5\u4F7F\u7528 ",(0,d.jsx)(n.a,{href:"/api/config-tools#toolswebpack",children:"tools.webpack"})," \u6765\u4FEE\u6539 webpack \u914D\u7F6E\u5BF9\u8C61\u3002"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",children:"export default {\n  tools: {\n    webpack: (config, { env }) => {\n      if (env === 'development') {\n        config.devtool = 'cheap-module-eval-source-map';\n      }\n      return config;\n    },\n  },\n};\n"})}),"\n",(0,d.jsxs)(n.div,{className:"rspress-directive tip",children:[(0,d.jsx)(n.div,{className:"rspress-directive-title",children:"\u4F55\u65F6\u4F7F\u7528"}),(0,d.jsx)(n.div,{className:"rspress-directive-content",children:(0,d.jsxs)(n.p,{children:["\u5F53\u4F60\u53EA\u9700\u8981\u4FEE\u6539\u5C11\u91CF webpack \u914D\u7F6E\u65F6\uFF0C\u53EF\u4EE5\u4F7F\u7528 ",(0,d.jsx)(n.code,{children:"tools.webpack"}),"\u3002\u4F46\u5982\u679C\u4F60\u9700\u8981\u4FEE\u6539 Builder \u5185\u7F6E\u7684 webpack plugins \u6216 loaders\uFF0C\u8BF7\u4F7F\u7528 ",(0,d.jsx)(n.code,{children:"tools.webpackChain"})," \u8FDB\u884C\u4FEE\u6539\u3002\n"]})})]}),"\n",(0,d.jsxs)(n.h2,{id:"\u4F7F\u7528-webpack-chain",children:["\u4F7F\u7528 webpack-chain",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u4F7F\u7528-webpack-chain",children:"#"})]}),"\n",(0,d.jsx)(n.p,{children:"webpack-chain \u662F\u533A\u522B\u4E8E\u76F4\u63A5\u4FEE\u6539 webpack \u914D\u7F6E\u7684\u53E6\u4E00\u79CD\u914D\u7F6E\u4FEE\u6539\u65B9\u5F0F\uFF0C\u76F8\u8F83\u4E8E\u76F4\u63A5\u4FEE\u6539 webpack \u914D\u7F6E\u5BF9\u8C61\uFF0Cwebpack-chain \u4E0D\u4EC5\u652F\u6301\u94FE\u5F0F\u8C03\u7528\uFF0C\u5E76\u4E14\u80FD\u591F\u57FA\u4E8E id \u6765\u4FEE\u6539\u5185\u7F6E\u7684 Rule \u6216 Plugin."}),"\n",(0,d.jsxs)(n.h3,{id:"toolswebpackchain-\u914D\u7F6E\u9879",children:["tools.webpackChain \u914D\u7F6E\u9879",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#toolswebpackchain-\u914D\u7F6E\u9879",children:"#"})]}),"\n",(0,d.jsxs)(n.p,{children:["Builder \u63D0\u4F9B\u4E86 ",(0,d.jsx)(n.a,{href:"/api/config-tools#toolswebpackchain",children:"tools.webpackChain"})," \u914D\u7F6E\u9879\u6765\u4FEE\u6539 webpack-chain\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"tools.webpackChain"})," \u7684\u503C\u4E3A ",(0,d.jsx)(n.code,{children:"Function"})," \u7C7B\u578B\uFF0C\u63A5\u6536\u4E24\u4E2A\u53C2\u6570\uFF1A"]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["\u7B2C\u4E00\u4E2A\u53C2\u6570\u4E3A ",(0,d.jsx)(n.code,{children:"webpack-chain"})," \u5B9E\u4F8B\u5BF9\u8C61\uFF0C\u4F60\u53EF\u4EE5\u901A\u8FC7\u8FD9\u4E2A\u5B9E\u4F8B\u6765\u4FEE\u6539\u9ED8\u8BA4\u7684 webpack \u914D\u7F6E\u3002"]}),"\n",(0,d.jsxs)(n.li,{children:["\u7B2C\u4E8C\u4E2A\u53C2\u6570\u4E3A\u4E00\u4E2A",(0,d.jsx)(n.a,{href:"/api/config-tools#%E5%B7%A5%E5%85%B7%E9%9B%86%E5%90%88-2",children:"\u5DE5\u5177\u96C6\u5408"}),"\uFF0C\u5305\u62EC ",(0,d.jsx)(n.code,{children:"env"}),"\u3001",(0,d.jsx)(n.code,{children:"isProd"}),"\u3001",(0,d.jsx)(n.code,{children:"CHAIN_ID"})," \u7B49\u3002"]}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:"\u4E0B\u9762\u662F\u4E00\u4E2A\u57FA\u672C\u793A\u4F8B\uFF1A"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",children:"export default {\n  tools: {\n    webpackChain: (chain, { env }) => {\n      if (env === 'development') {\n        chain.devtool('cheap-module-eval-source-map');\n      }\n    },\n  },\n};\n"})}),"\n",(0,d.jsxs)(n.h2,{id:"webpack-chain-\u57FA\u7840\u77E5\u8BC6",children:["webpack-chain \u57FA\u7840\u77E5\u8BC6",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#webpack-chain-\u57FA\u7840\u77E5\u8BC6",children:"#"})]}),"\n",(0,d.jsx)(n.p,{children:"\u5728\u5F00\u59CB\u4F7F\u7528 webpack-chain \u6765\u4FEE\u6539 webpack \u914D\u7F6E\u4E4B\u524D\uFF0C\u5EFA\u8BAE\u4F60\u5148\u4E86\u89E3\u4E00\u4E9B\u57FA\u7840\u77E5\u8BC6\u3002"}),"\n",(0,d.jsxs)(n.h3,{id:"webpack-chain-\u662F\u5982\u4F55\u5FEB\u901F\u5B9A\u4F4D\u7684",children:["webpack-chain \u662F\u5982\u4F55\u5FEB\u901F\u5B9A\u4F4D\u7684",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#webpack-chain-\u662F\u5982\u4F55\u5FEB\u901F\u5B9A\u4F4D\u7684",children:"#"})]}),"\n",(0,d.jsx)(n.p,{children:"\u7B80\u5355\u6765\u8BF4\uFF0Cwebpack-chain \u8981\u6C42\u4F7F\u7528\u8005\u4E3A\u6BCF\u4E2A Rule\u3001Loader\u3001Plugin\u3001Minimizer \u90FD\u8BBE\u7F6E\u4E00\u4E2A\u72EC\u4E00\u65E0\u4E8C\u7684 id\uFF0C\u901A\u8FC7\u8FD9\u4E2A id\uFF0C\u5C31\u53EF\u4EE5\u4FBF\u6377\u5730\u4ECE\u5D4C\u5957\u5C42\u7EA7\u5F88\u6DF1\u7684\u5BF9\u8C61\u4E2D\u627E\u5230\u6240\u9700\u7684\u5BF9\u8C61\u3002"}),"\n",(0,d.jsxs)(n.p,{children:["Builder \u5C06\u5185\u90E8\u5B9A\u4E49\u7684\u5168\u90E8 id \u90FD\u901A\u8FC7 ",(0,d.jsx)(n.code,{children:"CHAIN_ID"})," \u5BF9\u8C61\u5BFC\u51FA\uFF0C\u56E0\u6B64\u4F60\u53EF\u4EE5\u901A\u8FC7\u8FD9\u4E9B\u5BFC\u51FA\u7684 id\uFF0C\u5FEB\u901F\u5B9A\u4F4D\u5230\u4F60\u60F3\u8981\u4FEE\u6539\u7684 Loader \u6216 Plugin\uFF0C\u800C\u4E0D\u9700\u8981\u5728 webpack \u914D\u7F6E\u5BF9\u8C61\u91CC\u901A\u8FC7\u590D\u6742\u7684\u904D\u5386\u5BFB\u627E\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:["\u6BD4\u5982\u901A\u8FC7 ",(0,d.jsx)(n.code,{children:"CHAIN_ID.PLUGIN.HTML"})," \u6765\u5220\u9664\u5185\u7F6E\u7684 HTML \u63D2\u4EF6\uFF1A"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",children:"export default {\n  tools: {\n    webpackChain: (chain, { webpack, CHAIN_ID }) => {\n      //\n      chain.plugins.delete(CHAIN_ID.PLUGIN.HTML);\n    },\n  },\n};\n"})}),"\n",(0,d.jsxs)(n.h3,{id:"webpack-chain-id-\u7684\u7C7B\u578B",children:["webpack-chain id \u7684\u7C7B\u578B",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#webpack-chain-id-\u7684\u7C7B\u578B",children:"#"})]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"CHAIN_ID"})," \u5BF9\u8C61\u5305\u542B\u4E86\u591A\u79CD id\uFF0C\u5BF9\u5E94\u7684\u542B\u4E49\u5982\u4E0B\uFF1A"]}),"\n",(0,d.jsxs)(n.table,{children:["\n",(0,d.jsxs)(n.thead,{children:["\n",(0,d.jsxs)(n.tr,{children:["\n",(0,d.jsx)(n.th,{children:"CHAIN_ID \u5B57\u6BB5"}),"\n",(0,d.jsx)(n.th,{children:"\u5BF9\u5E94\u7684\u914D\u7F6E"}),"\n",(0,d.jsx)(n.th,{children:"\u63CF\u8FF0"}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(n.tbody,{children:["\n",(0,d.jsxs)(n.tr,{children:["\n",(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"CHAIN_ID.PLUGIN"})}),"\n",(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"plugins[i]"})}),"\n",(0,d.jsx)(n.td,{children:"\u5BF9\u5E94 webpack \u914D\u7F6E\u4E2D\u7684\u4E00\u4E2A\u63D2\u4EF6"}),"\n"]}),"\n",(0,d.jsxs)(n.tr,{children:["\n",(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"CHAIN_ID.RULE"})}),"\n",(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"module.rules[i]"})}),"\n",(0,d.jsx)(n.td,{children:"\u5BF9\u5E94 webpack \u914D\u7F6E\u4E2D\u7684\u4E00\u4E2A Rule"}),"\n"]}),"\n",(0,d.jsxs)(n.tr,{children:["\n",(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"CHAIN_ID.USE"})}),"\n",(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"module.rules[i].loader"})}),"\n",(0,d.jsx)(n.td,{children:"\u5BF9\u5E94 webpack \u914D\u7F6E\u4E2D\u7684\u4E00\u4E2A Loader"}),"\n"]}),"\n",(0,d.jsxs)(n.tr,{children:["\n",(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"CHAIN_ID.MINIMIZER"})}),"\n",(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"optimization.minimizer"})}),"\n",(0,d.jsx)(n.td,{children:"\u5BF9\u5E94 webpack \u914D\u7F6E\u4E2D\u7684\u4E00\u4E2A\u538B\u7F29\u5DE5\u5177"}),"\n"]}),"\n",(0,d.jsxs)(n.tr,{children:["\n",(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"CHAIN_ID.RESOLVE_PLUGIN"})}),"\n",(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"resolve.plugins[i]"})}),"\n",(0,d.jsx)(n.td,{children:"\u5BF9\u5E94 webpack \u914D\u7F6E\u4E2D\u7684\u4E00\u4E2A Resolve \u63D2\u4EF6"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(n.h2,{id:"webpack-chain-\u793A\u4F8B",children:["webpack-chain \u793A\u4F8B",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#webpack-chain-\u793A\u4F8B",children:"#"})]}),"\n",(0,d.jsxs)(n.h3,{id:"\u65B0\u589E\u4FEE\u6539\u5220\u9664-loader",children:["\u65B0\u589E/\u4FEE\u6539/\u5220\u9664 loader",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u65B0\u589E\u4FEE\u6539\u5220\u9664-loader",children:"#"})]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    webpackChain: (chain, { CHAIN_ID }) => {\n      // \u65B0\u589E loader\n      chain.module\n        .rule('md')\n        .test(/\\.md$/)\n        .use('md-loader')\n        .loader('md-loader');\n\n      // \u4FEE\u6539 loader\n      chain.module\n        .rule(CHAIN_ID.RULE.JS)\n        .use(CHAIN_ID.USE.BABEL)\n        .tap(options => {\n          options.plugins.push('babel-plugin-xxx');\n          return options;\n        });\n\n      // \u5220\u9664 loader\n      chain.module.rule(CHAIN_ID.RULE.JS).uses.delete(CHAIN_ID.USE.BABEL);\n    },\n  },\n};\n"})}),"\n",(0,d.jsxs)(n.h3,{id:"\u65B0\u589E\u4FEE\u6539\u5220\u9664-plugin",children:["\u65B0\u589E/\u4FEE\u6539/\u5220\u9664 plugin",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u65B0\u589E\u4FEE\u6539\u5220\u9664-plugin",children:"#"})]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    webpackChain: (chain, { webpack, CHAIN_ID }) => {\n      // \u65B0\u589E\u63D2\u4EF6\n      chain.plugin('custom-define').use(webpack.DefinePlugin, [\n        {\n          'process.env': {\n            NODE_ENV: JSON.stringify(process.env.NODE_ENV),\n          },\n        },\n      ]);\n\n      // \u4FEE\u6539\u63D2\u4EF6\n      chain.plugin(CHAIN_ID.PLUGIN.HMR).tap(options => {\n        options[0].fullBuildTimeout = 200;\n        return options;\n      });\n\n      // \u5220\u9664\u63D2\u4EF6\n      chain.plugins.delete(CHAIN_ID.PLUGIN.HMR);\n    },\n  },\n};\n"})}),"\n",(0,d.jsxs)(n.h3,{id:"\u6839\u636E\u4E0D\u540C\u73AF\u5883\u4FEE\u6539\u914D\u7F6E",children:["\u6839\u636E\u4E0D\u540C\u73AF\u5883\u4FEE\u6539\u914D\u7F6E",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u6839\u636E\u4E0D\u540C\u73AF\u5883\u4FEE\u6539\u914D\u7F6E",children:"#"})]}),"\n",(0,d.jsx)(n.p,{children:"\u5728\u5DE5\u5177\u96C6\u5408\u4E2D\u4F60\u53EF\u4EE5\u62FF\u5230\u5404\u79CD\u73AF\u5883\u7684\u6807\u8BC6\uFF0C\u5982\u5F00\u53D1/\u751F\u4EA7/\u6D4B\u8BD5\u73AF\u5883\u6784\u5EFA\u3001 SSR \u6784\u5EFA\u3001Web Worker \u6784\u5EFA\uFF0C\u4ECE\u800C\u5B9E\u73B0\u4E0D\u540C\u73AF\u5883\u4E0B\u7684\u914D\u7F6E\u4FEE\u6539\u3002"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    webpackChain: (chain, { env, isProd, target, isServer, isWebWorker }) => {\n      if (utils.env === 'development' || utils.env === 'test') {\n        // ...\n      }\n      if (utils.isProd) {\n        // ...\n      }\n      if (utils.target === 'node') {\n        // ...\n      }\n      if (utils.isServer) {\n        // ...\n      }\n      if (utils.isWebWorker) {\n        // ...\n      }\n    },\n  },\n};\n"})}),"\n",(0,d.jsxs)(n.p,{children:["\u4EE5\u4E0A\u662F\u4E00\u4E9B\u5E38\u89C1\u7684\u914D\u7F6E\u793A\u4F8B\uFF0C\u5B8C\u6574\u7684 webpack-chain API \u8BF7\u89C1 ",(0,d.jsx)(n.a,{href:"https://github.com/neutrinojs/webpack-chain",target:"_blank",rel:"noopener noreferrer",children:"webpack-chain \u6587\u6863"}),"\u3002"]})]})}function h(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,s.useMDXComponents)(),e.components).wrapper;return n?(0,d.jsx)(n,(0,a._)((0,i._)({},e),{children:(0,d.jsx)(r,(0,i._)({},e))})):r(e)}var l=h;h.__RSPRESS_PAGE_META={},h.__RSPRESS_PAGE_META["zh%2Fguide%2Fadvanced%2Fcustom-webpack-config.md"]={toc:[{text:"\u4FEE\u6539 webpack \u914D\u7F6E\u5BF9\u8C61",id:"\u4FEE\u6539-webpack-\u914D\u7F6E\u5BF9\u8C61",depth:2},{text:"\u4F7F\u7528 webpack-chain",id:"\u4F7F\u7528-webpack-chain",depth:2},{text:"tools.webpackChain \u914D\u7F6E\u9879",id:"toolswebpackchain-\u914D\u7F6E\u9879",depth:3},{text:"webpack-chain \u57FA\u7840\u77E5\u8BC6",id:"webpack-chain-\u57FA\u7840\u77E5\u8BC6",depth:2},{text:"webpack-chain \u662F\u5982\u4F55\u5FEB\u901F\u5B9A\u4F4D\u7684",id:"webpack-chain-\u662F\u5982\u4F55\u5FEB\u901F\u5B9A\u4F4D\u7684",depth:3},{text:"webpack-chain id \u7684\u7C7B\u578B",id:"webpack-chain-id-\u7684\u7C7B\u578B",depth:3},{text:"webpack-chain \u793A\u4F8B",id:"webpack-chain-\u793A\u4F8B",depth:2},{text:"\u65B0\u589E/\u4FEE\u6539/\u5220\u9664 loader",id:"\u65B0\u589E\u4FEE\u6539\u5220\u9664-loader",depth:3},{text:"\u65B0\u589E/\u4FEE\u6539/\u5220\u9664 plugin",id:"\u65B0\u589E\u4FEE\u6539\u5220\u9664-plugin",depth:3},{text:"\u6839\u636E\u4E0D\u540C\u73AF\u5883\u4FEE\u6539\u914D\u7F6E",id:"\u6839\u636E\u4E0D\u540C\u73AF\u5883\u4FEE\u6539\u914D\u7F6E",depth:3}],title:"\u4FEE\u6539 webpack \u914D\u7F6E"}}}]);