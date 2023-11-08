(self.webpackChunk_modern_js_builder_doc=self.webpackChunk_modern_js_builder_doc||[]).push([["6875"],{69137:function(n,e,i){"use strict";i.r(e),i.d(e,{default:function(){return c}});var r=i("9880"),s=i("23169");function d(n){let e=Object.assign({h1:"h1",a:"a",p:"p",ul:"ul",li:"li",h2:"h2",code:"code",pre:"pre",strong:"strong",h3:"h3"},(0,s.useMDXComponents)(),n.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(e.h1,{id:"\u63D2\u4EF6\u7CFB\u7EDF",children:["\u63D2\u4EF6\u7CFB\u7EDF",(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#\u63D2\u4EF6\u7CFB\u7EDF",children:"#"})]}),"\n",(0,r.jsx)(e.p,{children:"Builder \u63D0\u4F9B\u4E86\u4E00\u5957\u8F7B\u91CF\u5F3A\u5927\u7684\u63D2\u4EF6\u7CFB\u7EDF\uFF0C\u7528\u4EE5\u5B9E\u73B0\u81EA\u8EAB\u7684\u5927\u591A\u6570\u529F\u80FD\uFF0C\u5E76\u5141\u8BB8\u7528\u6237\u8FDB\u884C\u6269\u5C55\u3002\n\u5F00\u53D1\u8005\u7F16\u5199\u7684\u63D2\u4EF6\u80FD\u591F\u4FEE\u6539 Builder \u7684\u9ED8\u8BA4\u884C\u4E3A\u5E76\u6DFB\u52A0\u5404\u7C7B\u989D\u5916\u529F\u80FD\uFF0C\u5305\u62EC\u4F46\u4E0D\u9650\u4E8E\uFF1A"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u4FEE\u6539 bundler \u914D\u7F6E"}),"\n",(0,r.jsx)(e.li,{children:"\u5904\u7406\u65B0\u7684\u6587\u4EF6\u7C7B\u578B"}),"\n",(0,r.jsx)(e.li,{children:"\u4FEE\u6539\u6216\u7F16\u8BD1\u6587\u4EF6"}),"\n",(0,r.jsx)(e.li,{children:"\u90E8\u7F72\u4EA7\u7269"}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:"Builder \u5E95\u5C42\u652F\u6301 webpack \u548C Rspack \u7B49 bundler\uFF0C\u5E76\u63D0\u4F9B\u7EDF\u4E00\u7684 Node.js API \u6765\u62B9\u5E73\u63D2\u4EF6\u5F00\u53D1\u7684\u5DEE\u5F02\uFF0C\u8FDB\u800C\u63A5\u5165\u4E0D\u540C\u7684\u4E0A\u5C42\u6846\u67B6\u3001\u964D\u4F4E\u7528\u6237\u5BF9\u5E95\u5C42 bundler \u5207\u6362\u7684\u611F\u77E5\u3002"}),"\n",(0,r.jsxs)(e.h2,{id:"\u5F00\u53D1\u63D2\u4EF6",children:["\u5F00\u53D1\u63D2\u4EF6",(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#\u5F00\u53D1\u63D2\u4EF6",children:"#"})]}),"\n",(0,r.jsxs)(e.p,{children:["\u63D2\u4EF6\u63D0\u4F9B\u7C7B\u4F3C ",(0,r.jsx)(e.code,{children:"(options?: PluginOptions) => BuilderPlugin"})," \u7684\u51FD\u6570\u4F5C\u4E3A\u5165\u53E3\uFF0C\u5EFA\u8BAE\u5C06\u63D2\u4EF6\u51FD\u6570\u547D\u540D\u4E3A ",(0,r.jsx)(e.code,{children:"builderPluginXXX"}),"\u3002"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-ts",children:"import type { BuilderPlugin } from '@modern-js/builder-webpack-provider';\n\nexport interface PluginFooOptions {\n  message?: string;\n}\n\nexport const builderPluginFoo = (\n  options?: PluginFooOptions,\n): BuilderPlugin => ({\n  name: 'plugin-foo',\n  setup(api) {\n    api.onExit(() => {\n      const msg = options.message || 'finish.';\n      console.log(msg);\n    });\n  },\n});\n\nbuilder.addPlugins([builderPluginFoo({ message: 'some other message.' })]);\n"})}),"\n",(0,r.jsxs)(e.p,{children:["\u51FD\u6570\u5F62\u5F0F\u7684\u63D2\u4EF6\u53EF\u4EE5 ",(0,r.jsx)(e.strong,{children:"\u63A5\u53D7\u9009\u9879\u5BF9\u8C61"})," \u5E76 ",(0,r.jsx)(e.strong,{children:"\u8FD4\u56DE\u63D2\u4EF6\u5B9E\u4F8B"}),"\uFF0C\u5E76\u901A\u8FC7\u95ED\u5305\u673A\u5236\u7BA1\u7406\u5185\u90E8\u72B6\u6001\u3002"]}),"\n",(0,r.jsx)(e.p,{children:"\u5176\u4E2D\u5404\u90E8\u5206\u7684\u4F5C\u7528\u5206\u522B\u4E3A\uFF1A"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"name"})," \u5C5E\u6027\u7528\u4E8E\u6807\u6CE8\u63D2\u4EF6\u540D\u79F0"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"setup"})," \u4F5C\u4E3A\u63D2\u4EF6\u903B\u8F91\u7684\u4E3B\u5165\u53E3"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"api"})," \u5BF9\u8C61\u5305\u542B\u4E86\u5404\u7C7B\u94A9\u5B50\u548C\u5DE5\u5177\u51FD\u6570"]}),"\n"]}),"\n",(0,r.jsxs)(e.p,{children:["\u4E3A\u4E86\u4FBF\u4E8E\u8BC6\u522B\uFF0C\u63D2\u4EF6\u540D\u79F0\u9700\u8981\u5305\u542B\u7EA6\u5B9A\u7684 ",(0,r.jsx)(e.code,{children:"builder-plugin"})," \u524D\u7F00\uFF0C\u4F8B\u5982 ",(0,r.jsx)(e.code,{children:"builder-plugin-foo"})," ",(0,r.jsx)(e.code,{children:"@scope/builder-plugin-bar"})," \u7B49\u3002"]}),"\n",(0,r.jsxs)(e.h2,{id:"\u751F\u547D\u5468\u671F\u94A9\u5B50",children:["\u751F\u547D\u5468\u671F\u94A9\u5B50",(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#\u751F\u547D\u5468\u671F\u94A9\u5B50",children:"#"})]}),"\n",(0,r.jsx)(e.p,{children:"Builder \u5728\u5185\u90E8\u6309\u7167\u7EA6\u5B9A\u7684\u751F\u547D\u5468\u671F\u8FDB\u884C\u4EFB\u52A1\u8C03\u5EA6\uFF0C\u63D2\u4EF6\u53EF\u4EE5\u901A\u8FC7\u6CE8\u518C\u94A9\u5B50\u6765\u4ECB\u5165\u5DE5\u4F5C\u6D41\u7A0B\u7684\u4EFB\u610F\u9636\u6BB5\uFF0C\u5E76\u5B9E\u73B0\u81EA\u5DF1\u7684\u529F\u80FD\u3002"}),"\n",(0,r.jsxs)(e.p,{children:["Builder \u751F\u547D\u5468\u671F\u94A9\u5B50\u7684\u5B8C\u6574\u5217\u8868\u53C2\u8003 ",(0,r.jsx)(e.a,{href:"/api/plugin-hooks",children:"API \u6587\u6863"}),"\u3002"]}),"\n",(0,r.jsxs)(e.p,{children:["Builder \u4E0D\u4F1A\u63A5\u7BA1\u5E95\u5C42 Bundler \u7684\u751F\u547D\u5468\u671F\uFF0C\u76F8\u5173\u751F\u547D\u5468\u671F\u94A9\u5B50\u7684\u4F7F\u7528\u65B9\u5F0F\u89C1\u5BF9\u5E94\u6587\u6863\uFF1A",(0,r.jsx)(e.a,{href:"https://webpack.js.org/api/compiler-hooks/",target:"_blank",rel:"noopener noreferrer",children:"webpack hooks"})]}),"\n",(0,r.jsxs)(e.h2,{id:"\u4F7F\u7528\u914D\u7F6E\u9879",children:["\u4F7F\u7528\u914D\u7F6E\u9879",(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#\u4F7F\u7528\u914D\u7F6E\u9879",children:"#"})]}),"\n",(0,r.jsx)(e.p,{children:"\u81EA\u884C\u7F16\u5199\u7684\u63D2\u4EF6\u901A\u5E38\u4F7F\u7528\u521D\u59CB\u5316\u65F6\u4F20\u5165\u51FD\u6570\u7684\u53C2\u6570\u4F5C\u4E3A\u914D\u7F6E\u9879\u5373\u53EF\uFF0C\u5F00\u53D1\u8005\u53EF\u4EE5\u968F\u610F\u5B9A\u4E49\u548C\u4F7F\u7528\u51FD\u6570\u7684\u5165\u53C2\u3002"}),"\n",(0,r.jsx)(e.p,{children:"\u4F46\u67D0\u4E9B\u60C5\u51B5\u4E0B\u63D2\u4EF6\u53EF\u80FD\u9700\u8981\u8BFB\u53D6 / \u4FEE\u6539 Builder \u516C\u7528\u7684\u914D\u7F6E\u9879\uFF0C\u8FD9\u65F6\u5C31\u9700\u8981\u4E86\u89E3 Builder \u5185\u90E8\u5BF9\u914D\u7F6E\u9879\u7684\u751F\u4EA7\u548C\u6D88\u8D39\u6D41\u7A0B\uFF1A"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u8BFB\u53D6\u3001\u89E3\u6790\u914D\u7F6E\u5E76\u5408\u5E76\u9ED8\u8BA4\u503C"}),"\n",(0,r.jsxs)(e.li,{children:["\u63D2\u4EF6\u901A\u8FC7 ",(0,r.jsx)(e.code,{children:"api.modifyBuilderConfig(...)"})," \u56DE\u8C03\u4FEE\u6539\u914D\u7F6E\u9879"]}),"\n",(0,r.jsx)(e.li,{children:"\u5F52\u4E00\u5316\u914D\u7F6E\u9879\u5E76\u63D0\u4F9B\u7ED9\u63D2\u4EF6\u540E\u7EED\u6D88\u8D39\uFF0C\u6B64\u540E\u65E0\u6CD5\u518D\u4FEE\u6539\u914D\u7F6E\u9879"}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:"\u6574\u5957\u6D41\u7A0B\u53EF\u4EE5\u901A\u8FC7\u8FD9\u4E2A\u7B80\u5355\u7684\u63D2\u4EF6\u4F53\u73B0\uFF1A"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-ts",children:"export const builderPluginUploadDist = (): BuilderPlugin => ({\n  name: 'plugin-upload-dist',\n  setup(api) {\n    api.modifyBuilderConfig(config => {\n      // \u5C1D\u8BD5\u5173\u95ED\u4EE3\u7801\u538B\u7F29\uFF0C\u9700\u8981\u81EA\u5DF1\u586B\u5145\u9ED8\u8BA4\u503C\n      config.output ||= {};\n      config.output.disableMinimize = true;\n      // \u8F6E\u5230\u5176\u5B83\u63D2\u4EF6\u4FEE\u6539\u914D\u7F6E...\n    });\n    api.onBeforeBuild(() => {\n      // \u8BFB\u53D6\u6700\u7EC8\u7684\u914D\u7F6E\n      const config = api.getNormalizedConfig();\n      if (!config.output.disableMinimize) {\n        // \u5176\u5B83\u63D2\u4EF6\u53C8\u542F\u7528\u4E86\u538B\u7F29\u5219\u62A5\u9519\n        throw new Error(\n          'You must disable minimize to upload readable dist files.',\n        );\n      }\n    });\n    api.onAfterBuild(() => {\n      const config = api.getNormalizedConfig();\n      const distRoot = config.output.distPath.root;\n      // TODO: \u4E0A\u4F20 `distRoot` \u76EE\u5F55\u4E0B\u6240\u6709\u4EA7\u7269\u6587\u4EF6\n    });\n  },\n});\n"})}),"\n",(0,r.jsx)(e.p,{children:"\u63D2\u4EF6\u4E2D\u6709\u4E09\u79CD\u65B9\u5F0F\u4F7F\u7528\u914D\u7F6E\u9879\u5BF9\u8C61\uFF1A"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"api.modifyBuilderConfig(config => {})"})," \u5728\u56DE\u8C03\u4E2D\u4FEE\u6539\u914D\u7F6E"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"api.getBuilderConfig()"})," \u83B7\u53D6\u914D\u7F6E\u9879"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"api.getNormalizedConfig()"})," \u83B7\u53D6\u5F52\u4E00\u5316\u540E\u7684\u914D\u7F6E\u9879"]}),"\n"]}),"\n",(0,r.jsxs)(e.p,{children:["\u5F52\u4E00\u5316\u7684\u914D\u7F6E\u9879\u4F1A\u518D\u6B21\u5408\u5E76\u9ED8\u8BA4\u503C\u5E76\u79FB\u9664\u5927\u90E8\u5206\u53EF\u9009\u7C7B\u578B\uFF0C\u5BF9\u4E8E ",(0,r.jsx)(e.code,{children:"PluginUploadDist"})," \u7684\u4F8B\u5B50\u5176\u90E8\u5206\u7C7B\u578B\u5B9A\u4E49\u4E3A\uFF1A"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-ts",children:"api.modifyBuilderConfig((config: BuilderConfig) => {});\napi.getBuilderConfig() as BuilderConfig;\ntype BuilderConfig = {\n  output?: {\n    disableMinimize?: boolean;\n    distPath?: { root?: string };\n  };\n};\n\napi.getNormalizedConfig() as NormalizedConfig;\ntype NormalizedConfig = {\n  output: {\n    disableMinimize: boolean;\n    distPath: { root: string };\n  };\n};\n"})}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.code,{children:"getNormalizedConfig()"})," \u7684\u8FD4\u56DE\u503C\u7C7B\u578B\u4E0E ",(0,r.jsx)(e.code,{children:"BuilderConfig"})," \u7684\u7565\u6709\u4E0D\u540C\u3001\u76F8\u6BD4\u6587\u6863\u5176\u5B83\u5730\u65B9\u63CF\u8FF0\u7684\u7C7B\u578B\u8FDB\u884C\u4E86\u6536\u7A84\uFF0C\n\u5728\u4F7F\u7528\u65F6\u65E0\u9700\u81EA\u884C\u5224\u7A7A\u3001\u586B\u5145\u9ED8\u8BA4\u503C\u3002"]}),"\n",(0,r.jsx)(e.p,{children:"\u56E0\u6B64\u4F7F\u7528\u914D\u7F6E\u9879\u7684\u6700\u4F73\u65B9\u5F0F\u5E94\u8BE5\u662F\uFF1A"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\u901A\u8FC7 ",(0,r.jsx)(e.code,{children:"api.modifyBuilderConfig(config => {})"})," \u6765",(0,r.jsx)(e.strong,{children:"\u4FEE\u6539\u914D\u7F6E"})]}),"\n",(0,r.jsxs)(e.li,{children:["\u5728\u5176\u540E\u7684\u751F\u547D\u5468\u671F\u4E2D\u8BFB\u53D6 ",(0,r.jsx)(e.code,{children:"api.getNormalizedConfig()"})," \u4F5C\u4E3A\u63D2\u4EF6",(0,r.jsx)(e.strong,{children:"\u5B9E\u9645\u4F7F\u7528\u7684\u914D\u7F6E"})]}),"\n"]}),"\n",(0,r.jsxs)(e.h2,{id:"\u4FEE\u6539-webpack-\u914D\u7F6E",children:["\u4FEE\u6539 webpack \u914D\u7F6E",(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#\u4FEE\u6539-webpack-\u914D\u7F6E",children:"#"})]}),"\n",(0,r.jsx)(e.p,{children:"\u63D2\u4EF6\u53EF\u4EE5\u901A\u8FC7\u591A\u79CD\u65B9\u5F0F\u4FEE\u6539 webpack \u7684\u914D\u7F6E\u9879\u3002"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"api.modifyWebpackChain(chain => {})"})," \u4FEE\u6539 webpack-chain"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"api.modifyWebpackConfig(config => {})"})," \u4FEE\u6539\u6700\u7EC8\u7684 webpack \u914D\u7F6E"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"api.onAfterCreateCompiler(compiler => {})"})," \u76F4\u63A5\u64CD\u4F5C webpack \u5B9E\u4F8B"]}),"\n"]}),"\n",(0,r.jsxs)(e.p,{children:["\u901A\u5E38\u63A8\u8350\u4F7F\u7528 ",(0,r.jsx)(e.a,{href:"https://github.com/neutrinojs/webpack-chain",target:"_blank",rel:"noopener noreferrer",children:"neutrinojs/webpack-chain"})," \u63D0\u4F9B\u7684\u94FE\u5F0F API \u6765\u4FEE\u6539 webpack \u914D\u7F6E\u7684\u5DE5\u4F5C\u3002"]}),"\n",(0,r.jsxs)(e.p,{children:["Builder \u4F7F\u7528\u7684\u662F\u517C\u5BB9 webpack5 \u7684\u4FEE\u6539\u7248\u672C\uFF1A",(0,r.jsx)(e.a,{href:"https://github.com/sorrycc/webpack-chain",target:"_blank",rel:"noopener noreferrer",children:"sorrycc/webpack-chain"}),"\u3002"]}),"\n",(0,r.jsxs)(e.h2,{id:"\u53C2\u8003\u8303\u4F8B",children:["\u53C2\u8003\u8303\u4F8B",(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#\u53C2\u8003\u8303\u4F8B",children:"#"})]}),"\n",(0,r.jsxs)(e.h3,{id:"\u4FEE\u6539-loader",children:["\u4FEE\u6539 Loader",(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#\u4FEE\u6539-loader",children:"#"})]}),"\n",(0,r.jsxs)(e.p,{children:["Loader \u53EF\u4EE5\u8BFB\u53D6\u548C\u5904\u7406\u4E0D\u540C\u7C7B\u578B\u7684\u6587\u4EF6\u6A21\u5757\uFF0C\u5177\u4F53\u53C2\u8003 ",(0,r.jsx)(e.a,{href:"https://webpack.js.org/concepts/loaders",target:"_blank",rel:"noopener noreferrer",children:"concepts"})," \u548C ",(0,r.jsx)(e.a,{href:"https://webpack.js.org/loaders/",target:"_blank",rel:"noopener noreferrer",children:"loaders"}),"\u3002"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-ts",children:"import type { BuilderPlugin } from '@modern-js/builder-webpack-provider';\n\nexport const builderPluginTypeScriptExt = (): BuilderPlugin => ({\n  name: 'builder-typescript-ext',\n  setup(api) {\n    api.modifyWebpackChain(async chain => {\n      // \u8BBE\u7F6E ts-loader \u5C06\u66F4\u591A\u7684\u6587\u4EF6\u8BC6\u522B\u4E3A typescript \u6A21\u5757\n      chain.module.rule(CHAIN_ID.RULE.TS).test(/\\.(ts|mts|cts|tsx|tss|tsm)$/);\n    });\n  },\n});\n"})}),"\n",(0,r.jsxs)(e.h3,{id:"\u6DFB\u52A0\u6A21\u5757\u5165\u53E3",children:["\u6DFB\u52A0\u6A21\u5757\u5165\u53E3",(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#\u6DFB\u52A0\u6A21\u5757\u5165\u53E3",children:"#"})]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-ts",children:"import type { BuilderPlugin } from '@modern-js/builder-webpack-provider';\n\nexport const builderPluginAdminPanel = (): BuilderPlugin => ({\n  name: 'builder-admin-panel',\n  setup(api) {\n    api.modifyWebpackChain(async chain => {\n      config.entry('admin-panel').add('src/admin/panel.js');\n    });\n  },\n});\n"})}),"\n",(0,r.jsxs)(e.h3,{id:"\u63A5\u5165-webpack-\u63D2\u4EF6",children:["\u63A5\u5165 webpack \u63D2\u4EF6",(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#\u63A5\u5165-webpack-\u63D2\u4EF6",children:"#"})]}),"\n",(0,r.jsx)(e.p,{children:"\u5F00\u53D1\u8005\u53EF\u4EE5\u5728 Builder \u63D2\u4EF6\u4E2D\u63A5\u5165\u5DF2\u6709\u7684 webpack \u63D2\u4EF6\u6765\u5E73\u7F13\u8FC1\u79FB\u9879\u76EE\uFF1A"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-ts",children:"import type { BuilderPlugin } from '@modern-js/builder-webpack-provider';\nimport type { Options } from '@modern-js/inspector-webpack-plugin';\n\nexport const builderPluginInspector = (options?: Options): BuilderPlugin => ({\n  name: 'builder-plugin-inspector',\n  setup(api) {\n    api.modifyWebpackChain(async chain => {\n      // \u4EC5\u5728\u9700\u8981\u7684\u65F6\u5019\u52A8\u6001\u52A0\u8F7D\u6A21\u5757\uFF0C\u907F\u514D\u4E0D\u5FC5\u8981\u7684\u6027\u80FD\u6D88\u8017\n      const { InspectorWebpackPlugin } = await import(\n        '@modern-js/inspector-webpack-plugin'\n      );\n      // \u4FEE\u6539 webpack chain \u63A5\u5165\u63D2\u4EF6\n      chain\n        .plugin('inspector-webpack-plugin')\n        .use(InspectorWebpackPlugin, [inspectorOptions]);\n    });\n  },\n});\n"})})]})}function l(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}=Object.assign({},(0,s.useMDXComponents)(),n.components);return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(d,{...n})}):d(n)}var c=l;l.__RSPRESS_PAGE_META={},l.__RSPRESS_PAGE_META["zh%2Fplugins%2Fintroduction.md"]={toc:[{text:"\u5F00\u53D1\u63D2\u4EF6",id:"\u5F00\u53D1\u63D2\u4EF6",depth:2},{text:"\u751F\u547D\u5468\u671F\u94A9\u5B50",id:"\u751F\u547D\u5468\u671F\u94A9\u5B50",depth:2},{text:"\u4F7F\u7528\u914D\u7F6E\u9879",id:"\u4F7F\u7528\u914D\u7F6E\u9879",depth:2},{text:"\u4FEE\u6539 webpack \u914D\u7F6E",id:"\u4FEE\u6539-webpack-\u914D\u7F6E",depth:2},{text:"\u53C2\u8003\u8303\u4F8B",id:"\u53C2\u8003\u8303\u4F8B",depth:2},{text:"\u4FEE\u6539 Loader",id:"\u4FEE\u6539-loader",depth:3},{text:"\u6DFB\u52A0\u6A21\u5757\u5165\u53E3",id:"\u6DFB\u52A0\u6A21\u5757\u5165\u53E3",depth:3},{text:"\u63A5\u5165 webpack \u63D2\u4EF6",id:"\u63A5\u5165-webpack-\u63D2\u4EF6",depth:3}],title:"\u63D2\u4EF6\u7CFB\u7EDF"}}}]);