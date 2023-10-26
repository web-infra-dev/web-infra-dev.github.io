(self.webpackChunk_modern_js_builder_doc=self.webpackChunk_modern_js_builder_doc||[]).push([["6511"],{58041:function(e,n,i){"use strict";i.r(n),i.d(n,{default:function(){return r}});var c=i("15169"),o=i("43932"),a=i("9880"),d=i("23169");function s(e){var n=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",pre:"pre",code:"code",div:"div",h3:"h3",ul:"ul",li:"li",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,d.useMDXComponents)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.h1,{id:"custom-webpack-config",children:["Custom webpack config",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#custom-webpack-config",children:"#"})]}),"\n",(0,a.jsx)(n.p,{children:"Builder supports directly modifying webpack configuration objects, and also supports deep customization of webpack configuration through webpack-chain."}),"\n",(0,a.jsxs)(n.h2,{id:"modify-the-webpack-configuration-object",children:["Modify the webpack configuration object",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#modify-the-webpack-configuration-object",children:"#"})]}),"\n",(0,a.jsxs)(n.p,{children:["You can use ",(0,a.jsx)(n.a,{href:"/api/config-tools#toolswebpack",children:"tools.webpack"})," to modify the webpack configuration object."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"export default {\n  tools: {\n    webpack: (config, { env }) => {\n      if (env === 'development') {\n        config.devtool = 'cheap-module-eval-source-map';\n      }\n      return config;\n    },\n  },\n};\n"})}),"\n",(0,a.jsxs)(n.div,{className:"rspress-directive tip",children:[(0,a.jsx)(n.div,{className:"rspress-directive-title",children:"When to use"}),(0,a.jsx)(n.div,{className:"rspress-directive-content",children:(0,a.jsxs)(n.p,{children:["When you only need to modify a small amount of webpack configuration, you can use ",(0,a.jsx)(n.code,{children:"tools.webpack"}),". But if you need to modify the built-in webpack plugins or loaders of Builder, please use ",(0,a.jsx)(n.code,{children:"tools.webpackChain"})," to modify.\n"]})})]}),"\n",(0,a.jsxs)(n.h2,{id:"using-webpack-chain",children:["Using webpack-chain",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#using-webpack-chain",children:"#"})]}),"\n",(0,a.jsx)(n.p,{children:"webpack-chain is a configuration modification tools that is different from modifying webpack configuration objects. Compared with modifying webpack configuration objects, webpack-chain not only supports chain calls, but also can modify built-in Rule or Plugin based on id."}),"\n",(0,a.jsxs)(n.h3,{id:"toolswebpackchain-config",children:["tools.webpackChain config",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#toolswebpackchain-config",children:"#"})]}),"\n",(0,a.jsxs)(n.p,{children:["Builder provides ",(0,a.jsx)(n.a,{href:"/api/config-tools#toolswebpackchain",children:"tools.webpackChain"})," config to modify webpack-chain."]}),"\n",(0,a.jsxs)(n.p,{children:["The value of ",(0,a.jsx)(n.code,{children:"tools.webpackChain"})," is ",(0,a.jsx)(n.code,{children:"Function"})," type, which receives two parameters:"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["The first parameter is the ",(0,a.jsx)(n.code,{children:"webpack-chain"})," instance, you can use this instance to modify the default webpack config."]}),"\n",(0,a.jsxs)(n.li,{children:["The second parameter is a ",(0,a.jsx)(n.a,{href:"/en/api/config-tools#utils-2",children:"utils collection"}),", including ",(0,a.jsx)(n.code,{children:"env"}),", ",(0,a.jsx)(n.code,{children:"isProd"}),", ",(0,a.jsx)(n.code,{children:"CHAIN_ID"}),", etc."]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Here's a basic example:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"export default {\n  tools: {\n    webpackChain: (chain, { env }) => {\n      if (env === 'development') {\n        chain.devtool('cheap-module-eval-source-map');\n      }\n    },\n  },\n};\n"})}),"\n",(0,a.jsxs)(n.h2,{id:"webpack-chain-basics",children:["webpack-chain Basics",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#webpack-chain-basics",children:"#"})]}),"\n",(0,a.jsx)(n.p,{children:"Before you start using webpack-chain to modify your webpack configuration, it is recommended that you understand some basics."}),"\n",(0,a.jsxs)(n.h3,{id:"how-does-webpack-chain-locate",children:["How does webpack-chain locate",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#how-does-webpack-chain-locate",children:"#"})]}),"\n",(0,a.jsx)(n.p,{children:"Simply put, webpack-chain requires users to set a unique id for each Rule, Loader, Plugin, and Minimizer. Through these ids, you can easily find the desired object from deeply nested webpack configuration object."}),"\n",(0,a.jsxs)(n.p,{children:["Builder exports all internally defined ids through the ",(0,a.jsx)(n.code,{children:"CHAIN_ID"})," object, so you can use these exported ids to locate the Loader or Plugin you want to modify, without having to search through complex traversal in the webpack configuration object."]}),"\n",(0,a.jsxs)(n.p,{children:["For example, to delete the built-in HTML plugin via ",(0,a.jsx)(n.code,{children:"CHAIN_ID.PLUGIN.HTML"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"export default {\n  tools: {\n    webpackChain: (chain, { webpack, CHAIN_ID }) => {\n      //\n      chain.plugins.delete(CHAIN_ID.PLUGIN.HTML);\n    },\n  },\n};\n"})}),"\n",(0,a.jsxs)(n.h3,{id:"webpack-chain-id-type",children:["webpack-chain id type",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#webpack-chain-id-type",children:"#"})]}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"CHAIN_ID"})," object contains some ids, which have different meanings:"]}),"\n",(0,a.jsxs)(n.table,{children:["\n",(0,a.jsxs)(n.thead,{children:["\n",(0,a.jsxs)(n.tr,{children:["\n",(0,a.jsx)(n.th,{children:"CHAIN_ID field"}),"\n",(0,a.jsx)(n.th,{children:"Corresponding configuration"}),"\n",(0,a.jsx)(n.th,{children:"Description"}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.tbody,{children:["\n",(0,a.jsxs)(n.tr,{children:["\n",(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"CHAIN_ID.PLUGIN"})}),"\n",(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"plugins[i]"})}),"\n",(0,a.jsx)(n.td,{children:"corresponds to a plugin in the webpack configuration"}),"\n"]}),"\n",(0,a.jsxs)(n.tr,{children:["\n",(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"CHAIN_ID.RULE"})}),"\n",(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"module.rules[i]"})}),"\n",(0,a.jsx)(n.td,{children:"corresponds to a Rule in the webpack configuration"}),"\n"]}),"\n",(0,a.jsxs)(n.tr,{children:["\n",(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"CHAIN_ID.USE"})}),"\n",(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"module.rules[i].loader"})}),"\n",(0,a.jsx)(n.td,{children:"corresponds to a Loader in the webpack configuration"}),"\n"]}),"\n",(0,a.jsxs)(n.tr,{children:["\n",(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"CHAIN_ID.MINIMIZER"})}),"\n",(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"optimization.minimizer"})}),"\n",(0,a.jsx)(n.td,{children:"corresponds to a compression tool in webpack configuration"}),"\n"]}),"\n",(0,a.jsxs)(n.tr,{children:["\n",(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"CHAIN_ID.RESOLVE_PLUGIN"})}),"\n",(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"resolve.plugins[i]"})}),"\n",(0,a.jsx)(n.td,{children:"corresponds to a Resolve plugin in the webpack configuration"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.h2,{id:"webpack-chain-demo",children:["webpack-chain Demo",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#webpack-chain-demo",children:"#"})]}),"\n",(0,a.jsxs)(n.h3,{id:"addmodifydelete-loader",children:["Add/Modify/Delete loader",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#addmodifydelete-loader",children:"#"})]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    webpackChain: (chain, { CHAIN_ID }) => {\n      // Add loader\n      chain.module\n        .rule('md')\n        .test(/\\.md$/)\n        .use('md-loader')\n        .loader('md-loader');\n\n      // Modify loader\n      chain.module\n        .rule(CHAIN_ID.RULE.JS)\n        .use(CHAIN_ID.USE.BABEL)\n        .tap(options => {\n          options.plugins.push('babel-plugin-xxx');\n          return options;\n        });\n\n      // Delete loader\n      chain.module.rule(CHAIN_ID.RULE.JS).uses.delete(CHAIN_ID.USE.BABEL);\n    },\n  },\n};\n"})}),"\n",(0,a.jsxs)(n.h3,{id:"addmodifydelete-plugin",children:["Add/Modify/Delete plugin",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#addmodifydelete-plugin",children:"#"})]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    webpackChain: (chain, { webpack, CHAIN_ID }) => {\n      // Add plugin\n      chain.plugin('custom-define').use(webpack.DefinePlugin, [\n        {\n          'process.env': {\n            NODE_ENV: JSON.stringify(process.env.NODE_ENV),\n          },\n        },\n      ]);\n\n      // Modify plugin\n      chain.plugin(CHAIN_ID.PLUGIN.HMR).tap(options => {\n        options[0].fullBuildTimeout = 200;\n        return options;\n      });\n\n      // Delete plugin\n      chain.plugins.delete(CHAIN_ID.PLUGIN.HMR);\n    },\n  },\n};\n"})}),"\n",(0,a.jsxs)(n.h3,{id:"modify-the-config-according-to-environment",children:["Modify the config according to environment",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#modify-the-config-according-to-environment",children:"#"})]}),"\n",(0,a.jsx)(n.p,{children:"In the tool collection, you can get the flag of various environments, such as development/production/test environment, SSR build, and Web Worker build, so as to modify the config in different environments."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    webpackChain: (chain, { env, isProd, target, isServer, isWebWorker }) => {\n      if (utils.env === 'development' || utils.env === 'test') {\n        // ...\n      }\n      if (utils.isProd) {\n        // ...\n      }\n      if (utils.target === 'node') {\n        // ...\n      }\n      if (utils.isServer) {\n        // ...\n      }\n      if (utils.isWebWorker) {\n        // ...\n      }\n    },\n  },\n};\n"})}),"\n",(0,a.jsxs)(n.p,{children:["The above are some common config examples. For the complete webpack-chain API, please refer to ",(0,a.jsx)(n.a,{href:"https://github.com/neutrinojs/webpack-chain",target:"_blank",rel:"noopener noreferrer",children:"webpack-chain documentation"}),"."]})]})}function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,d.useMDXComponents)(),e.components).wrapper;return n?(0,a.jsx)(n,(0,o._)((0,c._)({},e),{children:(0,a.jsx)(s,(0,c._)({},e))})):s(e)}var r=t;t.__RSPRESS_PAGE_META={},t.__RSPRESS_PAGE_META["en%2Fguide%2Fadvanced%2Fcustom-webpack-config.md"]={toc:[{text:"Modify the webpack configuration object",id:"modify-the-webpack-configuration-object",depth:2},{text:"Using webpack-chain",id:"using-webpack-chain",depth:2},{text:"tools.webpackChain config",id:"toolswebpackchain-config",depth:3},{text:"webpack-chain Basics",id:"webpack-chain-basics",depth:2},{text:"How does webpack-chain locate",id:"how-does-webpack-chain-locate",depth:3},{text:"webpack-chain id type",id:"webpack-chain-id-type",depth:3},{text:"webpack-chain Demo",id:"webpack-chain-demo",depth:2},{text:"Add/Modify/Delete loader",id:"addmodifydelete-loader",depth:3},{text:"Add/Modify/Delete plugin",id:"addmodifydelete-plugin",depth:3},{text:"Modify the config according to environment",id:"modify-the-config-according-to-environment",depth:3}],title:"Custom webpack config"}}}]);