/*! For license information please see 229.5593d0db.js.LICENSE.txt */
(self.webpackChunk_modern_js_builder_doc=self.webpackChunk_modern_js_builder_doc||[]).push([["229"],{67673:function(e,r,n){"use strict";n.r(r);var i=n("39980"),d=n("9580");function l(e){let r=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",code:"code",h3:"h3",pre:"pre",ul:"ul",li:"li",strong:"strong",blockquote:"blockquote"},(0,d.ah)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(r.h1,{id:"builder-core",children:["Builder Core",(0,i.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#builder-core",children:"#"})]}),"\n",(0,i.jsx)(r.p,{children:"\u672C\u7AE0\u8282\u63CF\u8FF0\u4E86 Builder \u63D0\u4F9B\u7684\u4E00\u4E9B\u6838\u5FC3\u65B9\u6CD5\u3002"}),"\n",(0,i.jsxs)(r.h2,{id:"createbuilder",children:["createBuilder",(0,i.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#createbuilder",children:"#"})]}),"\n",(0,i.jsx)(r.p,{children:"\u521B\u5EFA\u4E00\u4E2A Builder \u5B9E\u4F8B\u5BF9\u8C61\u3002"}),"\n",(0,i.jsxs)(r.p,{children:["\u4F7F\u7528\u8BE5\u65B9\u6CD5\u65F6\uFF0C\u9700\u8981\u642D\u914D ",(0,i.jsx)(r.code,{children:"@modern-js/builder-webpack-provider"})," \u6216 ",(0,i.jsx)(r.code,{children:"@modern-js/builder-rspack-provider"})," \u4F7F\u7528\uFF0CProvider \u57FA\u4E8E\u7279\u5B9A bundler \u5B9E\u73B0\u4E86\u5BF9\u5E94\u7684\u6784\u5EFA\u80FD\u529B\u3002"]}),"\n",(0,i.jsxs)(r.h3,{id:"builderwebpackprovider",children:["builderWebpackProvider",(0,i.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#builderwebpackprovider",children:"#"})]}),"\n",(0,i.jsxs)(r.p,{children:["\u5F53\u4F20\u5165 ",(0,i.jsx)(r.code,{children:"builderWebpackProvider"})," \u65F6\uFF0CBuilder \u4F1A\u4F7F\u7528 webpack \u4F5C\u4E3A bundler \u8FDB\u884C\u6784\u5EFA\u3002"]}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-ts",children:"import { createBuilder } from '@modern-js/builder';\nimport { builderWebpackProvider } from '@modern-js/builder-webpack-provider';\n\nconst provider = builderWebpackProvider({\n  builderConfig: {\n    // some configs\n  },\n});\n\nconst builder = await createBuilder(provider, {\n  // some options\n});\n"})}),"\n",(0,i.jsxs)(r.h3,{id:"builderrspackprovider",children:["builderRspackProvider",(0,i.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#builderrspackprovider",children:"#"})]}),"\n",(0,i.jsxs)(r.p,{children:["\u5F53\u4F20\u5165 ",(0,i.jsx)(r.code,{children:"builderRspackProvider"})," \u65F6\uFF0CBuilder \u4F1A\u4F7F\u7528 Rspack \u4F5C\u4E3A bundler \u8FDB\u884C\u6784\u5EFA\u3002"]}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-ts",children:"import { createBuilder } from '@modern-js/builder';\nimport { builderRspackProvider } from '@modern-js/builder-rspack-provider';\n\nconst provider = builderRspackProvider({\n  builderConfig: {\n    // some configs\n  },\n});\n\nconst builder = await createBuilder(provider, {\n  // some options\n});\n"})}),"\n",(0,i.jsxs)(r.h3,{id:"options",children:["options",(0,i.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#options",children:"#"})]}),"\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.code,{children:"createBuilder"})," \u7684\u7B2C\u4E8C\u4E2A\u53C2\u6570\u662F\u4E00\u4E2A\u914D\u7F6E\u5BF9\u8C61\uFF0C\u4F60\u53EF\u4EE5\u4F20\u5165\u4EE5\u4E0B\u9009\u9879\uFF1A"]}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-ts",children:"type BuilderEntry = Record<string, string | string[]>;\n\ntype BuilderTarget = 'web' | 'node' | 'modern-web' | 'web-worker';\n\ntype CreateBuilderOptions = {\n  cwd?: string;\n  entry?: BuilderEntry;\n  target?: BuilderTarget | BuilderTarget[];\n  framework?: string;\n  configPath?: string | null;\n};\n"})}),"\n",(0,i.jsx)(r.p,{children:"\u5404\u4E2A\u9009\u9879\u7684\u4F5C\u7528\uFF1A"}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.code,{children:"cwd"}),": \u5F53\u524D\u6267\u884C\u6784\u5EFA\u7684\u6839\u8DEF\u5F84\uFF0C\u9ED8\u8BA4\u503C\u4E3A ",(0,i.jsx)(r.code,{children:"process.cwd()"})]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.code,{children:"entry"}),": \u6784\u5EFA\u5165\u53E3\u5BF9\u8C61"]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.code,{children:"target"}),": \u6784\u5EFA\u4EA7\u7269\u7C7B\u578B\uFF0C\u9ED8\u8BA4\u503C\u4E3A ",(0,i.jsx)(r.code,{children:"['web']"}),"\uFF0C\u8BE6\u89C1 ",(0,i.jsx)(r.a,{href:"/guide/basic/build-target",children:"\u6784\u5EFA\u4EA7\u7269\u7C7B\u578B"})," \u7AE0\u8282\u3002"]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.code,{children:"framework"}),": \u6846\u67B6\u7684\u82F1\u6587\u540D\u79F0\uFF0C\u552F\u4E00\u6807\u8BC6\u7B26\uFF0C\u9ED8\u8BA4\u503C\u4E3A ",(0,i.jsx)(r.code,{children:"'modern.js'"})]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.code,{children:"configPath"}),": \u6846\u67B6\u914D\u7F6E\u6587\u4EF6\u7684\u8DEF\u5F84\uFF08\u7EDD\u5BF9\u8DEF\u5F84\uFF09\uFF0C\u8BE5\u53C2\u6570\u5F71\u54CD\u6784\u5EFA\u7F13\u5B58\u66F4\u65B0"]}),"\n"]}),"\n",(0,i.jsxs)(r.h2,{id:"mergebuilderconfig",children:["mergeBuilderConfig",(0,i.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#mergebuilderconfig",children:"#"})]}),"\n",(0,i.jsx)(r.p,{children:"\u5408\u5E76\u591A\u4EFD Builder \u914D\u7F6E\u5BF9\u8C61\uFF0C\u5E76\u8FD4\u56DE\u4E00\u4E2A\u5408\u5E76\u540E\u7684\u65B0\u5BF9\u8C61\u3002"}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.strong,{children:"\u7C7B\u578B"})}),"\n"]}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-ts",children:"function mergeBuilderConfig(...configs: BuilderConfig[]): BuilderConfig;\n"})}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.strong,{children:"Example"})}),"\n"]}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-ts",children:"import { mergeBuilderConfig } from '@modern-js/builder';\n\nconst config1 = {\n  dev: {\n    https: false,\n  },\n};\nconst config2 = {\n  dev: {\n    https: true,\n  },\n};\n\nconst mergedConfig = mergeBuilderConfig(config1, config2);\n\nconsole.log(mergedConfig); // { dev: { https: true } }\n"})}),"\n",(0,i.jsxs)(r.blockquote,{children:["\n",(0,i.jsx)(r.p,{children:"\u8BE5\u65B9\u6CD5\u4E0D\u4F1A\u4FEE\u6539\u4F20\u5165\u7684 config \u5BF9\u8C61\u3002"}),"\n"]}),"\n",(0,i.jsxs)(r.h2,{id:"webpack",children:["webpack",(0,i.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#webpack",children:"#"})]}),"\n",(0,i.jsx)(r.p,{children:"webpack \u5BF9\u8C61\uFF0C\u7528\u4E8E\u6D88\u8D39 webpack \u5185\u7F6E\u63D2\u4EF6\u6216\u7C7B\u578B\u5B9A\u4E49\u3002"}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.strong,{children:"Example"})}),"\n"]}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-ts",children:"import webpack from '@modern-js/builder-webpack-provider/webpack';\n\nnew webpack.DefinePlugin();\n"})}),"\n",(0,i.jsxs)(r.blockquote,{children:["\n",(0,i.jsx)(r.p,{children:'\u5927\u90E8\u5206\u573A\u666F\u4E0B\uFF0C\u63A8\u8350\u4ECE Builder \u4E2D\u5F15\u7528 webpack \u5BF9\u8C61\uFF0C\u800C\u4E0D\u662F\u624B\u52A8\u5B89\u88C5\u4E00\u4EFD "webpack" \u4F9D\u8D56\uFF0C\u8FD9\u6837\u53EF\u4EE5\u907F\u514D\u51FA\u73B0\u591A\u5B9E\u4F8B\u95EE\u9898\u3002'}),"\n"]}),"\n",(0,i.jsxs)(r.h2,{id:"htmlwebpackplugin",children:["HtmlWebpackPlugin",(0,i.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#htmlwebpackplugin",children:"#"})]}),"\n",(0,i.jsx)(r.p,{children:"HtmlWebpackPlugin \u5BF9\u8C61\uFF0C\u901A\u5E38\u7528\u4E8E\u5B9E\u73B0 HtmlWebpackPlugin \u7684\u81EA\u5B9A\u4E49\u63D2\u4EF6\u3002"}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.strong,{children:"Example"})}),"\n"]}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-ts",children:"import HtmlWebpackPlugin from '@modern-js/builder-webpack-provider/html-webpack-plugin';\n"})}),"\n",(0,i.jsxs)(r.blockquote,{children:["\n",(0,i.jsx)(r.p,{children:'\u5927\u90E8\u5206\u573A\u666F\u4E0B\uFF0C\u63A8\u8350\u4ECE Builder \u4E2D\u5F15\u7528 HtmlWebpackPlugin \u5BF9\u8C61\uFF0C\u800C\u4E0D\u662F\u624B\u52A8\u5B89\u88C5\u4E00\u4EFD "html-webpack-plugin" \u4F9D\u8D56\uFF0C\u8FD9\u6837\u53EF\u4EE5\u907F\u514D\u51FA\u73B0\u591A\u5B9E\u4F8B\u95EE\u9898\u3002'}),"\n"]})]})}function c(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:r}=Object.assign({},(0,d.ah)(),e.components);return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}r.default=c,c.__RSPRESS_PAGE_META={},c.__RSPRESS_PAGE_META["zh%2Fapi%2Fbuilder-core.mdx"]={toc:[{text:"createBuilder",id:"createbuilder",depth:2},{text:"builderWebpackProvider",id:"builderwebpackprovider",depth:3},{text:"builderRspackProvider",id:"builderrspackprovider",depth:3},{text:"options",id:"options",depth:3},{text:"mergeBuilderConfig",id:"mergebuilderconfig",depth:2},{text:"webpack",id:"webpack",depth:2},{text:"HtmlWebpackPlugin",id:"htmlwebpackplugin",depth:2}],title:"Builder Core",frontmatter:{extractApiHeaders:[2]}}}}]);