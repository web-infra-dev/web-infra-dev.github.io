(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["27053"],{31045:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return t}});var s,i=r("15169"),l=r("43932"),d=r("9880"),c=r("23169");function a(e){var n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",a:"a",blockquote:"blockquote",h3:"h3",pre:"pre",div:"div",h4:"h4"},(0,c.useMDXComponents)(),e.components);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"Type:"})," ",(0,d.jsx)(n.code,{children:"Object | Function | undefined"})]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"Default:"})," ",(0,d.jsx)(n.code,{children:"undefined"})]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"Bundler:"})," ",(0,d.jsx)(n.code,{children:"only support webpack"})]}),"\n"]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"tools.webpack"})," is used to configure ",(0,d.jsx)(n.a,{href:"https://webpack.js.org/",target:"_blank",rel:"noopener noreferrer",children:"webpack"}),"."]}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"tools.bundlerChain"})," is also used to modify the webpack configuration, and the function is more powerful. It is recommended to use ",(0,d.jsx)(n.code,{children:"tools.bundlerChain"})," first."]}),"\n"]}),"\n",(0,d.jsxs)(n.h3,{id:"object-type",children:["Object Type",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#object-type",children:"#"})]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"tools.webpack"})," can be configured as an object to be deep merged with the built-in webpack configuration through ",(0,d.jsx)(n.a,{href:"https://github.com/survivejs/webpack-merge",target:"_blank",rel:"noopener noreferrer",children:"webpack-merge"}),"."]}),"\n",(0,d.jsxs)(n.p,{children:["For example, add ",(0,d.jsx)(n.code,{children:"resolve.alias"})," configuration:"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    webpack: {\n      resolve: {\n        alias: {\n          '@util': 'src/util',\n        },\n      },\n    },\n  },\n};\n"})}),"\n",(0,d.jsxs)(n.h3,{id:"function-type",children:["Function Type",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#function-type",children:"#"})]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"tools.webpack"})," can be configured as a function. The first parameter of this function is the built-in webpack configuration object, you can modify this object, and then return it. For example:"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    webpack: config => {\n      config.resolve.alias['@util'] = 'src/util';\n      return config;\n    },\n  },\n};\n"})}),"\n",(0,d.jsxs)(n.div,{className:"rspress-directive tip",children:[(0,d.jsx)(n.div,{className:"rspress-directive-title",children:"TIP"}),(0,d.jsx)(n.div,{className:"rspress-directive-content",children:(0,d.jsxs)(n.p,{children:["The object returned by the ",(0,d.jsx)(n.code,{children:"tools.webpack"})," function is used directly as the final webpack configuration and is not merged with the built-in webpack configuration.\n"]})})]}),"\n",(0,d.jsxs)(n.h3,{id:"utils",children:["Utils",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#utils",children:"#"})]}),"\n",(0,d.jsx)(n.p,{children:"The second parameter of this function is an object, which contains some utility functions and properties, as follows:"}),"\n",(0,d.jsxs)(n.h4,{id:"env",children:["env",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#env",children:"#"})]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"Type:"})," ",(0,d.jsx)(n.code,{children:"'development' | 'production' | 'test'"})]}),"\n"]}),"\n",(0,d.jsxs)(n.p,{children:["The ",(0,d.jsx)(n.code,{children:"env"})," parameter can be used to determine whether the current environment is development, production or test. For example:"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    webpack: (config, { env }) => {\n      if (env === 'development') {\n        config.devtool = 'cheap-module-eval-source-map';\n      }\n      return config;\n    },\n  },\n};\n"})}),"\n",(0,d.jsxs)(n.h4,{id:"isprod",children:["isProd",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#isprod",children:"#"})]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"Type:"})," ",(0,d.jsx)(n.code,{children:"boolean"})]}),"\n"]}),"\n",(0,d.jsxs)(n.p,{children:["The ",(0,d.jsx)(n.code,{children:"isProd"})," parameter can be used to determine whether the current environment is production. For example:"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    webpack: (config, { isProd }) => {\n      if (isProd) {\n        config.devtool = 'source-map';\n      }\n      return config;\n    },\n  },\n};\n"})}),"\n",(0,d.jsxs)(n.h4,{id:"target",children:["target",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#target",children:"#"})]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"Type:"})," ",(0,d.jsx)(n.code,{children:"'web' | 'node' | 'modern-web' | 'web-worker'"})]}),"\n"]}),"\n",(0,d.jsxs)(n.p,{children:["The ",(0,d.jsx)(n.code,{children:"target"})," parameter can be used to determine the current target. For example:"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    webpack: (config, { target }) => {\n      if (target === 'node') {\n        // ...\n      }\n      return config;\n    },\n  },\n};\n"})}),"\n",(0,d.jsxs)(n.h4,{id:"isserver",children:["isServer",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#isserver",children:"#"})]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"Type:"})," ",(0,d.jsx)(n.code,{children:"boolean"})]}),"\n"]}),"\n",(0,d.jsxs)(n.p,{children:["Determines whether the target environment is ",(0,d.jsx)(n.code,{children:"node"}),", equivalent to ",(0,d.jsx)(n.code,{children:"target === 'node'"}),"."]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    webpack: (config, { isServer }) => {\n      if (isServer) {\n        // ...\n      }\n      return config;\n    },\n  },\n};\n"})}),"\n",(0,d.jsxs)(n.h4,{id:"iswebworker",children:["isWebWorker",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#iswebworker",children:"#"})]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"Type:"})," ",(0,d.jsx)(n.code,{children:"boolean"})]}),"\n"]}),"\n",(0,d.jsxs)(n.p,{children:["Determines whether the target environment is ",(0,d.jsx)(n.code,{children:"web-worker"}),", equivalent to ",(0,d.jsx)(n.code,{children:"target === 'web-worker'"}),"."]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    webpack: (config, { isWebWorker }) => {\n      if (isWebWorker) {\n        // ...\n      }\n      return config;\n    },\n  },\n};\n"})}),"\n",(0,d.jsxs)(n.h4,{id:"webpack",children:["webpack",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#webpack",children:"#"})]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"Type:"})," ",(0,d.jsx)(n.code,{children:"typeof import('webpack')"})]}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:"The webpack instance. For example:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    webpack: (config, { webpack }) => {\n      config.plugins.push(new webpack.ProgressPlugin());\n      return config;\n    },\n  },\n};\n"})}),"\n",(0,d.jsxs)(n.h4,{id:"htmlwebpackplugin",children:["HtmlWebpackPlugin",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#htmlwebpackplugin",children:"#"})]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"Type:"})," ",(0,d.jsx)(n.code,{children:"typeof import('html-webpack-plugin')"})]}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:"The HtmlWebpackPlugin instance:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    webpack: (chain, { HtmlWebpackPlugin }) => {\n      console.log(HtmlWebpackPlugin);\n    },\n  },\n};\n"})}),"\n",(0,d.jsxs)(n.h4,{id:"addrules",children:["addRules",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#addrules",children:"#"})]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"Type:"})," ",(0,d.jsx)(n.code,{children:"(rules: RuleSetRule | RuleSetRule[]) => void"})]}),"\n"]}),"\n",(0,d.jsxs)(n.p,{children:["Add additional ",(0,d.jsx)(n.a,{href:"https://webpack.js.org/configuration/module/#modulerules",target:"_blank",rel:"noopener noreferrer",children:"webpack rules"}),"."]}),"\n",(0,d.jsx)(n.p,{children:"For example:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",children:"export default {\n  tools: {\n    webpack: (config, { addRules }) => {\n      // add a single rule\n      addRules({\n        test: /\\.foo/,\n        loader: require.resolve('foo-loader'),\n      });\n\n      // Add multiple rules as an array\n      addRules([\n        {\n          test: /\\.foo/,\n          loader: require.resolve('foo-loader'),\n        },\n        {\n          test: /\\.bar/,\n          loader: require.resolve('bar-loader'),\n        },\n      ]);\n    },\n  },\n};\n"})}),"\n",(0,d.jsxs)(n.h4,{id:"prependplugins",children:["prependPlugins",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#prependplugins",children:"#"})]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"Type:"})," ",(0,d.jsx)(n.code,{children:"(plugins: WebpackPluginInstance | WebpackPluginInstance[]) => void"})]}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:"Add additional plugins to the head of the internal webpack plugins array, and the plugin will be executed first."}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",children:"export default {\n  tools: {\n    webpack: (config, { prependPlugins, webpack }) => {\n      // add a single plugin\n      prependPlugins(\n        new webpack.BannerPlugin({\n          banner: 'hello world!',\n        }),\n      );\n\n      // Add multiple plugins\n      prependPlugins([new PluginA(), new PluginB()]);\n    },\n  },\n};\n"})}),"\n",(0,d.jsxs)(n.h4,{id:"appendplugins",children:["appendPlugins",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#appendplugins",children:"#"})]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"Type:"})," ",(0,d.jsx)(n.code,{children:"(plugins: WebpackPluginInstance | WebpackPluginInstance[]) => void"})]}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:"Add additional plugins at the end of the internal webpack plugins array, the plugin will be executed last."}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",children:"export default {\n  tools: {\n    webpack: (config, { appendPlugins, webpack }) => {\n      // add a single plugin\n      appendPlugins([\n        new webpack.BannerPlugin({\n          banner: 'hello world!',\n        }),\n      ]);\n\n      // Add multiple plugins\n      appendPlugins([new PluginA(), new PluginB()]);\n    },\n  },\n};\n"})}),"\n",(0,d.jsxs)(n.h4,{id:"removeplugin",children:["removePlugin",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#removeplugin",children:"#"})]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"Type:"})," ",(0,d.jsx)(n.code,{children:"(name: string) => void"})]}),"\n"]}),"\n",(0,d.jsxs)(n.p,{children:["Remove the internal webpack plugin, the parameter is the ",(0,d.jsx)(n.code,{children:"constructor.name"})," of the plugin."]}),"\n",(0,d.jsxs)(n.p,{children:["For example, remove the internal ",(0,d.jsx)(n.a,{href:"https://github.com/TypeStrong/fork-ts-checker-webpack-plugin",target:"_blank",rel:"noopener noreferrer",children:"fork-ts-checker-webpack-plugin"}),":"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",children:"export default {\n  tools: {\n    webpack: (config, { removePlugin }) => {\n      removePlugin('ForkTsCheckerWebpackPlugin');\n    },\n  },\n};\n"})}),"\n",(0,d.jsxs)(n.h4,{id:"mergeconfig",children:["mergeConfig",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#mergeconfig",children:"#"})]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"Type:"})," ",(0,d.jsx)(n.code,{children:"(...configs: WebpackConfig[]) => WebpackConfig"})]}),"\n"]}),"\n",(0,d.jsxs)(n.p,{children:["Used to merge multiple webpack configs, same as ",(0,d.jsx)(n.a,{href:"https://github.com/survivejs/webpack-merge",target:"_blank",rel:"noopener noreferrer",children:"webpack-merge"}),"."]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",children:"export default {\n  tools: {\n    webpack: (config, { mergeConfig }) => {\n      return mergeConfig(config, {\n        devtool: 'eval',\n      });\n    },\n  },\n};\n"})}),"\n",(0,d.jsxs)(n.h4,{id:"getcompiledpath",children:["getCompiledPath",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#getcompiledpath",children:"#"})]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"Type:"})," ",(0,d.jsx)(n.code,{children:"(name: string) => string"})]}),"\n"]}),"\n",(0,d.jsxs)(n.p,{children:["Get the path to the builder built-in dependencies, same as ",(0,d.jsx)(n.a,{href:"https://modernjs.dev/builder/en/api/config-tools.html#toolswebpackchain",target:"_blank",rel:"noopener noreferrer",children:"webpackChain#getCompiledPath"}),"."]})]})}(s=globalThis).__RSPRESS_PAGE_META||(s.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["..%2F..%2Fbuilder-doc%2Fdocs%2Fen%2Fconfig%2Ftools%2Fwebpack.md"]={toc:[{text:"Object Type",id:"object-type",depth:3},{text:"Function Type",id:"function-type",depth:3},{text:"Utils",id:"utils",depth:3},{text:"env",id:"env",depth:4},{text:"isProd",id:"isprod",depth:4},{text:"target",id:"target",depth:4},{text:"isServer",id:"isserver",depth:4},{text:"isWebWorker",id:"iswebworker",depth:4},{text:"webpack",id:"webpack",depth:4},{text:"HtmlWebpackPlugin",id:"htmlwebpackplugin",depth:4},{text:"addRules",id:"addrules",depth:4},{text:"prependPlugins",id:"prependplugins",depth:4},{text:"appendPlugins",id:"appendplugins",depth:4},{text:"removePlugin",id:"removeplugin",depth:4},{text:"mergeConfig",id:"mergeconfig",depth:4},{text:"getCompiledPath",id:"getcompiledpath",depth:4}],title:"",frontmatter:{}};var t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,c.useMDXComponents)(),e.components).wrapper;return n?(0,d.jsx)(n,(0,l._)((0,i._)({},e),{children:(0,d.jsx)(a,(0,i._)({},e))})):a(e)}},63521:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return o}});var s,i=r("15169"),l=r("43932"),d=r("9880"),c=r("23169"),a=r("31045");function t(e){var n=Object.assign({h1:"h1",a:"a",div:"div",p:"p"},(0,c.useMDXComponents)(),e.components);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.h1,{id:"toolswebpack",children:["tools.webpack",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#toolswebpack",children:"#"})]}),"\n",(0,d.jsxs)(n.div,{className:"rspress-directive tip",children:[(0,d.jsx)(n.div,{className:"rspress-directive-title",children:"TIP"}),(0,d.jsx)(n.div,{className:"rspress-directive-content",children:(0,d.jsxs)(n.p,{children:["This config is provided by Modern.js Builder, more detail can see ",(0,d.jsx)(n.a,{href:"https://modernjs.dev/builder/en/api/config-tools.html#toolswebpack",target:"_blank",rel:"noopener noreferrer",children:"tools.webpack"}),".\n"]})})]}),"\n","\n",(0,d.jsx)(a.default,{})]})}(s=globalThis).__RSPRESS_PAGE_META||(s.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["en%2Fconfigure%2Fapp%2Ftools%2Fwebpack.mdx"]={toc:[],title:"tools.webpack",frontmatter:{sidebar_label:"webpack"}};var o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,c.useMDXComponents)(),e.components).wrapper;return n?(0,d.jsx)(n,(0,l._)((0,i._)({},e),{children:(0,d.jsx)(t,(0,i._)({},e))})):t(e)}}}]);