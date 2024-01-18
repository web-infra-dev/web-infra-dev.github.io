/*! For license information please see 37548.4e9e2189.js.LICENSE.txt */
(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["37548"],{3058:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return d}});var s=r("39980"),i=r("96954");function l(e){let n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",a:"a",blockquote:"blockquote",h3:"h3",pre:"pre",div:"div",h4:"h4"},(0,i.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"\u7C7B\u578B\uFF1A"})," ",(0,s.jsx)(n.code,{children:"Object | Function | undefined"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"\u9ED8\u8BA4\u503C\uFF1A"})," ",(0,s.jsx)(n.code,{children:"undefined"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"\u6253\u5305\u5DE5\u5177\uFF1A"})," ",(0,s.jsx)(n.code,{children:"\u4EC5\u652F\u6301 webpack"})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"tools.webpack"})," \u9009\u9879\u7528\u4E8E\u914D\u7F6E\u539F\u751F\u7684 ",(0,s.jsx)(n.a,{href:"https://webpack.js.org/",target:"_blank",rel:"noopener noreferrer",children:"webpack"}),"\u3002"]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"tools.bundlerChain"})," \u540C\u6837\u53EF\u4EE5\u4FEE\u6539 webpack \u914D\u7F6E\uFF0C\u5E76\u4E14\u529F\u80FD\u66F4\u52A0\u5F3A\u5927\uFF0C\u5EFA\u8BAE\u4F18\u5148\u4F7F\u7528 ",(0,s.jsx)(n.code,{children:"tools.bundlerChain"}),"\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(n.h3,{id:"object-\u7C7B\u578B",children:["Object \u7C7B\u578B",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#object-\u7C7B\u578B",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"tools.webpack"})," \u53EF\u4EE5\u914D\u7F6E\u4E3A\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u8FD9\u4E2A\u5BF9\u8C61\u5C06\u4F1A\u548C\u5185\u7F6E\u7684 webpack \u914D\u7F6E\u901A\u8FC7 ",(0,s.jsx)(n.a,{href:"https://github.com/survivejs/webpack-merge",target:"_blank",rel:"noopener noreferrer",children:"webpack-merge"})," \u8FDB\u884C\u6DF1\u5C42\u5408\u5E76\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u6BD4\u5982\u6DFB\u52A0 ",(0,s.jsx)(n.code,{children:"resolve.alias"})," \u914D\u7F6E\uFF1A"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    webpack: {\n      resolve: {\n        alias: {\n          '@util': 'src/util',\n        },\n      },\n    },\n  },\n};\n"})}),"\n",(0,s.jsxs)(n.h3,{id:"function-\u7C7B\u578B",children:["Function \u7C7B\u578B",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#function-\u7C7B\u578B",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"tools.webpack"})," \u4E5F\u53EF\u4EE5\u914D\u7F6E\u4E3A\u4E00\u4E2A\u51FD\u6570\uFF0C\u8FD9\u4E2A\u51FD\u6570\u7684\u7B2C\u4E00\u4E2A\u5165\u53C2\u4E3A\u5185\u7F6E\u7684 webpack \u914D\u7F6E\u5BF9\u8C61\uFF0C\u4F60\u53EF\u4EE5\u5BF9\u8FD9\u4E2A\u5BF9\u8C61\u8FDB\u884C\u4FEE\u6539\uFF0C\u7136\u540E\u8FD4\u56DE\u4E00\u4EFD\u65B0\u7684\u914D\u7F6E\u3002\u6BD4\u5982\uFF1A"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    webpack: config => {\n      config.resolve.alias['@util'] = 'src/util';\n      return config;\n    },\n  },\n};\n"})}),"\n",(0,s.jsxs)(n.div,{className:"rspress-directive tip",children:[(0,s.jsx)(n.div,{className:"rspress-directive-title",children:"TIP"}),(0,s.jsx)(n.div,{className:"rspress-directive-content",children:(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"tools.webpack"})," \u51FD\u6570\u8FD4\u56DE\u7684\u5BF9\u8C61\u4F1A\u76F4\u63A5\u4F5C\u4E3A\u6700\u7EC8\u4F7F\u7528\u7684 webpack \u914D\u7F6E\uFF0C\u4E0D\u4F1A\u518D\u4E0E\u5185\u7F6E\u7684 webpack \u914D\u7F6E\u8FDB\u884C\u5408\u5E76\u3002\n"]})})]}),"\n",(0,s.jsxs)(n.h3,{id:"\u5DE5\u5177\u96C6\u5408",children:["\u5DE5\u5177\u96C6\u5408",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u5DE5\u5177\u96C6\u5408",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"\u8FD9\u4E2A\u51FD\u6570\u7684\u7B2C\u4E8C\u4E2A\u53C2\u6570\u662F\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u5305\u542B\u4E86\u4E00\u4E9B\u5DE5\u5177\u51FD\u6570\u548C\u5C5E\u6027\uFF0C\u8BE6\u60C5\u5982\u4E0B\uFF1A"}),"\n",(0,s.jsxs)(n.h4,{id:"env",children:["env",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#env",children:"#"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"\u7C7B\u578B\uFF1A"})," ",(0,s.jsx)(n.code,{children:"'development' | 'production' | 'test'"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\u901A\u8FC7 env \u53C2\u6570\u53EF\u4EE5\u5224\u65AD\u5F53\u524D\u73AF\u5883\u4E3A development\u3001production \u8FD8\u662F test\u3002\u6BD4\u5982\uFF1A"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    webpack: (config, { env }) => {\n      if (env === 'development') {\n        config.devtool = 'cheap-module-eval-source-map';\n      }\n      return config;\n    },\n  },\n};\n"})}),"\n",(0,s.jsxs)(n.h4,{id:"isprod",children:["isProd",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#isprod",children:"#"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"\u7C7B\u578B\uFF1A"})," ",(0,s.jsx)(n.code,{children:"boolean"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\u901A\u8FC7 isProd \u53C2\u6570\u53EF\u4EE5\u5224\u65AD\u5F53\u524D\u73AF\u5883\u662F\u5426\u4E3A production\u3002\u6BD4\u5982\uFF1A"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    webpack: (config, { isProd }) => {\n      if (isProd) {\n        config.devtool = 'source-map';\n      }\n      return config;\n    },\n  },\n};\n"})}),"\n",(0,s.jsxs)(n.h4,{id:"target",children:["target",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#target",children:"#"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"\u7C7B\u578B\uFF1A"})," ",(0,s.jsx)(n.code,{children:"'web' | 'node' | 'modern-web' | 'web-worker'"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\u901A\u8FC7 target \u53C2\u6570\u53EF\u4EE5\u5224\u65AD\u5F53\u524D\u6784\u5EFA\u7684\u76EE\u6807\u8FD0\u884C\u65F6\u73AF\u5883\u3002\u6BD4\u5982\uFF1A"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    webpack: (config, { target }) => {\n      if (target === 'node') {\n        // ...\n      }\n      return config;\n    },\n  },\n};\n"})}),"\n",(0,s.jsxs)(n.h4,{id:"isserver",children:["isServer",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#isserver",children:"#"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"\u7C7B\u578B\uFF1A"})," ",(0,s.jsx)(n.code,{children:"boolean"})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["\u5224\u65AD\u5F53\u524D\u6784\u5EFA\u7684\u76EE\u6807\u8FD0\u884C\u65F6\u73AF\u5883\u662F\u5426\u4E3A ",(0,s.jsx)(n.code,{children:"node"}),"\uFF0C\u7B49\u4EF7\u4E8E ",(0,s.jsx)(n.code,{children:"target === 'node'"}),"\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    webpack: (config, { isServer }) => {\n      if (isServer) {\n        // ...\n      }\n      return config;\n    },\n  },\n};\n"})}),"\n",(0,s.jsxs)(n.h4,{id:"iswebworker",children:["isWebWorker",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#iswebworker",children:"#"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"\u7C7B\u578B\uFF1A"})," ",(0,s.jsx)(n.code,{children:"boolean"})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["\u5224\u65AD\u5F53\u524D\u6784\u5EFA\u7684\u76EE\u6807\u8FD0\u884C\u65F6\u73AF\u5883\u662F\u5426\u4E3A ",(0,s.jsx)(n.code,{children:"web-worker"}),"\uFF0C\u7B49\u4EF7\u4E8E ",(0,s.jsx)(n.code,{children:"target === 'web-worker'"}),"\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    webpack: (config, { isWebWorker }) => {\n      if (isWebWorker) {\n        // ...\n      }\n      return config;\n    },\n  },\n};\n"})}),"\n",(0,s.jsxs)(n.h4,{id:"webpack",children:["webpack",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#webpack",children:"#"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"\u7C7B\u578B\uFF1A"})," ",(0,s.jsx)(n.code,{children:"typeof import('webpack')"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\u901A\u8FC7\u8FD9\u4E2A\u53C2\u6570\u4F60\u53EF\u4EE5\u62FF\u5230 webpack \u5B9E\u4F8B\u3002\u6BD4\u5982\uFF1A"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    webpack: (config, { webpack }) => {\n      config.plugins.push(new webpack.ProgressPlugin());\n      return config;\n    },\n  },\n};\n"})}),"\n",(0,s.jsxs)(n.h4,{id:"htmlwebpackplugin",children:["HtmlWebpackPlugin",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#htmlwebpackplugin",children:"#"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"\u7C7B\u578B\uFF1A"})," ",(0,s.jsx)(n.code,{children:"typeof import('html-webpack-plugin')"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\u901A\u8FC7\u8FD9\u4E2A\u53C2\u6570\u4F60\u53EF\u4EE5\u62FF\u5230 HtmlWebpackPlugin \u5B9E\u4F8B\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    webpack: (chain, { HtmlWebpackPlugin }) => {\n      console.log(HtmlWebpackPlugin);\n    },\n  },\n};\n"})}),"\n",(0,s.jsxs)(n.h4,{id:"addrules",children:["addRules",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#addrules",children:"#"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"\u7C7B\u578B\uFF1A"})," ",(0,s.jsx)(n.code,{children:"(rules: RuleSetRule | RuleSetRule[]) => void"})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["\u6DFB\u52A0\u989D\u5916\u7684 ",(0,s.jsx)(n.a,{href:"https://webpack.js.org/configuration/module/#modulerules",target:"_blank",rel:"noopener noreferrer",children:"webpack rules"}),"\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"\u793A\u4F8B\uFF1A"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"export default {\n  tools: {\n    webpack: (config, { addRules }) => {\n      // \u6DFB\u52A0\u5355\u6761\u89C4\u5219\n      addRules({\n        test: /\\.foo/,\n        loader: require.resolve('foo-loader'),\n      });\n\n      // \u4EE5\u6570\u7EC4\u5F62\u5F0F\u6DFB\u52A0\u591A\u6761\u89C4\u5219\n      addRules([\n        {\n          test: /\\.foo/,\n          loader: require.resolve('foo-loader'),\n        },\n        {\n          test: /\\.bar/,\n          loader: require.resolve('bar-loader'),\n        },\n      ]);\n    },\n  },\n};\n"})}),"\n",(0,s.jsxs)(n.h4,{id:"prependplugins",children:["prependPlugins",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#prependplugins",children:"#"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"\u7C7B\u578B\uFF1A"})," ",(0,s.jsx)(n.code,{children:"(plugins: WebpackPluginInstance | WebpackPluginInstance[]) => void"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\u5728\u5185\u90E8 webpack \u63D2\u4EF6\u6570\u7EC4\u5934\u90E8\u6DFB\u52A0\u989D\u5916\u7684\u63D2\u4EF6\uFF0C\u6570\u7EC4\u5934\u90E8\u7684\u63D2\u4EF6\u4F1A\u4F18\u5148\u6267\u884C\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"export default {\n  tools: {\n    webpack: (config, { prependPlugins, webpack }) => {\n      // \u6DFB\u52A0\u5355\u4E2A\u63D2\u4EF6\n      prependPlugins(\n        new webpack.BannerPlugin({\n          banner: 'hello world!',\n        }),\n      );\n\n      // \u4EE5\u6570\u7EC4\u5F62\u5F0F\u6DFB\u52A0\u591A\u4E2A\u63D2\u4EF6\n      prependPlugins([new PluginA(), new PluginB()]);\n    },\n  },\n};\n"})}),"\n",(0,s.jsxs)(n.h4,{id:"appendplugins",children:["appendPlugins",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#appendplugins",children:"#"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"\u7C7B\u578B\uFF1A"})," ",(0,s.jsx)(n.code,{children:"(plugins: WebpackPluginInstance | WebpackPluginInstance[]) => void"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\u5728\u5185\u90E8 webpack \u63D2\u4EF6\u6570\u7EC4\u5C3E\u90E8\u6DFB\u52A0\u989D\u5916\u7684\u63D2\u4EF6\uFF0C\u6570\u7EC4\u5C3E\u90E8\u7684\u63D2\u4EF6\u4F1A\u5728\u6700\u540E\u6267\u884C\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"export default {\n  tools: {\n    webpack: (config, { appendPlugins, webpack }) => {\n      // \u6DFB\u52A0\u5355\u4E2A\u63D2\u4EF6\n      appendPlugins([\n        new webpack.BannerPlugin({\n          banner: 'hello world!',\n        }),\n      ]);\n\n      // \u4EE5\u6570\u7EC4\u5F62\u5F0F\u6DFB\u52A0\u591A\u4E2A\u63D2\u4EF6\n      appendPlugins([new PluginA(), new PluginB()]);\n    },\n  },\n};\n"})}),"\n",(0,s.jsxs)(n.h4,{id:"removeplugin",children:["removePlugin",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#removeplugin",children:"#"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"\u7C7B\u578B\uFF1A"})," ",(0,s.jsx)(n.code,{children:"(name: string) => void"})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["\u5220\u9664\u5185\u90E8\u7684 webpack \u63D2\u4EF6\uFF0C\u53C2\u6570\u4E3A\u8BE5\u63D2\u4EF6\u7684 ",(0,s.jsx)(n.code,{children:"constructor.name"}),"\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u4F8B\u5982\uFF0C\u5220\u9664\u5185\u90E8\u7684 ",(0,s.jsx)(n.a,{href:"https://github.com/TypeStrong/fork-ts-checker-webpack-plugin",target:"_blank",rel:"noopener noreferrer",children:"fork-ts-checker-webpack-plugin"}),"\uFF1A"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"export default {\n  tools: {\n    webpack: (config, { removePlugin }) => {\n      removePlugin('ForkTsCheckerWebpackPlugin');\n    },\n  },\n};\n"})}),"\n",(0,s.jsxs)(n.h4,{id:"mergeconfig",children:["mergeConfig",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#mergeconfig",children:"#"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"\u7C7B\u578B\uFF1A"})," ",(0,s.jsx)(n.code,{children:"(...configs: WebpackConfig[]) => WebpackConfig"})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["\u7528\u4E8E\u5408\u5E76\u591A\u4EFD webpack \u914D\u7F6E\uFF0C\u7B49\u4EF7\u4E8E ",(0,s.jsx)(n.a,{href:"https://github.com/survivejs/webpack-merge",target:"_blank",rel:"noopener noreferrer",children:"webpack-merge"}),"\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"export default {\n  tools: {\n    webpack: (config, { mergeConfig }) => {\n      return mergeConfig(config, {\n        devtool: 'eval',\n      });\n    },\n  },\n};\n"})}),"\n",(0,s.jsxs)(n.h4,{id:"getcompiledpath",children:["getCompiledPath",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#getcompiledpath",children:"#"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"\u7C7B\u578B\uFF1A"})," ",(0,s.jsx)(n.code,{children:"(name: string) => string"})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["\u83B7\u53D6 builder \u5185\u7F6E\u4F9D\u8D56\u7684\u6240\u5728\u8DEF\u5F84\uFF0C\u7B49\u4EF7\u4E8E ",(0,s.jsx)(n.a,{href:"https://modernjs.dev/builder/api/config-tools.html#toolswebpackchain",target:"_blank",rel:"noopener noreferrer",children:"webpackChain#getCompiledPath"}),"\u3002"]})]})}function c(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,i.useMDXComponents)(),e.components);return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}var d=c;c.__RSPRESS_PAGE_META={},c.__RSPRESS_PAGE_META["..%2F..%2Fbuilder-doc%2Fdocs%2Fzh%2Fconfig%2Ftools%2Fwebpack.md"]={toc:[{text:"Object \u7C7B\u578B",id:"object-\u7C7B\u578B",depth:3},{text:"Function \u7C7B\u578B",id:"function-\u7C7B\u578B",depth:3},{text:"\u5DE5\u5177\u96C6\u5408",id:"\u5DE5\u5177\u96C6\u5408",depth:3},{text:"env",id:"env",depth:4},{text:"isProd",id:"isprod",depth:4},{text:"target",id:"target",depth:4},{text:"isServer",id:"isserver",depth:4},{text:"isWebWorker",id:"iswebworker",depth:4},{text:"webpack",id:"webpack",depth:4},{text:"HtmlWebpackPlugin",id:"htmlwebpackplugin",depth:4},{text:"addRules",id:"addrules",depth:4},{text:"prependPlugins",id:"prependplugins",depth:4},{text:"appendPlugins",id:"appendplugins",depth:4},{text:"removePlugin",id:"removeplugin",depth:4},{text:"mergeConfig",id:"mergeconfig",depth:4},{text:"getCompiledPath",id:"getcompiledpath",depth:4}],title:"",frontmatter:{}}},22636:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return a}});var s=r("39980"),i=r("96954"),l=r("3058");function c(e){let n=Object.assign({h1:"h1",a:"a"},(0,i.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h1,{id:"toolswebpack",children:["tools.webpack",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#toolswebpack",children:"#"})]}),"\n","\n",(0,s.jsx)(l.default,{})]})}function d(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,i.useMDXComponents)(),e.components);return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}var a=d;d.__RSPRESS_PAGE_META={},d.__RSPRESS_PAGE_META["zh%2Fconfigure%2Fapp%2Ftools%2Fwebpack.mdx"]={toc:[],title:"tools.webpack",frontmatter:{sidebar_label:"webpack"}}}}]);