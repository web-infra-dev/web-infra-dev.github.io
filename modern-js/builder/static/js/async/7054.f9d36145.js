/*! For license information please see 7054.f9d36145.js.LICENSE.txt */
(self.webpackChunk_modern_js_builder_doc=self.webpackChunk_modern_js_builder_doc||[]).push([["7054"],{45854:function(e,n,i){"use strict";i.r(n);var r=i("39980"),s=i("96954"),l=i("63568"),d=i("36373"),c=i("56791"),o=i("69987");function a(e){let n=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",ul:"ul",li:"li",code:"code",pre:"pre",h3:"h3",strong:"strong"},(0,s.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"plugin-core",children:["Plugin Core",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#plugin-core",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"\u672C\u7AE0\u8282\u63CF\u8FF0\u4E86 Builder \u63D2\u4EF6\u6838\u5FC3\u7684\u7C7B\u578B\u5B9A\u4E49\u548C API\u3002"}),"\n",(0,r.jsxs)(n.h2,{id:"builderplugin",children:["BuilderPlugin",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#builderplugin",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"\u63D2\u4EF6\u5BF9\u8C61\u7684\u7C7B\u578B\uFF0C\u63D2\u4EF6\u5BF9\u8C61\u5305\u542B\u4EE5\u4E0B\u5C5E\u6027\uFF1A"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"name"}),"\uFF1A\u63D2\u4EF6\u7684\u540D\u79F0\uFF0C\u552F\u4E00\u6807\u8BC6\u7B26\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"setup"}),"\uFF1A\u63D2\u4EF6\u903B\u8F91\u7684\u4E3B\u5165\u53E3\u51FD\u6570\uFF0C\u53EF\u4EE5\u662F\u4E00\u4E2A\u5F02\u6B65\u51FD\u6570\u3002\u8BE5\u51FD\u6570\u4EC5\u4F1A\u5728\u521D\u59CB\u5316\u63D2\u4EF6\u65F6\u6267\u884C\u4E00\u6B21\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"pre"}),"\uFF1A\u6307\u5B9A\u5F53\u524D\u63D2\u4EF6\u7684\u524D\u7F6E\u63D2\u4EF6\u6709\u54EA\u4E9B\uFF0C\u53EF\u4EE5\u4F20\u5165\u524D\u7F6E\u63D2\u4EF6 name \u7684\u6570\u7EC4\uFF0C\u5F53\u524D\u63D2\u4EF6\u4F1A\u88AB\u8C03\u6574\u5230\u8FD9\u4E9B\u63D2\u4EF6\u4E4B\u540E\u6267\u884C\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"post"}),"\uFF1A\u6307\u5B9A\u5F53\u524D\u63D2\u4EF6\u7684\u540E\u7F6E\u63D2\u4EF6\u6709\u54EA\u4E9B\uFF0C\u53EF\u4EE5\u4F20\u5165\u540E\u7F6E\u63D2\u4EF6 name \u7684\u6570\u7EC4\uFF0C\u5F53\u524D\u63D2\u4EF6\u4F1A\u88AB\u8C03\u6574\u5230\u8FD9\u4E9B\u63D2\u4EF6\u4E4B\u524D\u6267\u884C\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"remove"}),"\uFF1A\u6307\u5B9A\u9700\u8981\u79FB\u9664\u7684\u63D2\u4EF6\uFF0C\u53EF\u4EE5\u4F20\u5165\u63D2\u4EF6 name \u7684\u6570\u7EC4\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"type BuilderPlugin<API = BuilderPluginAPI> = {\n  name: string;\n  pre?: string[];\n  post?: string[];\n  remove?: string[];\n  setup: (api: API) => Promise<void> | void;\n};\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u4F60\u53EF\u4EE5\u4ECE ",(0,r.jsx)(n.code,{children:"@modern-js/builder"})," \u4E2D\u5BFC\u5165\u8BE5\u7C7B\u578B\uFF1A"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"import type { BuilderPlugin } from '@modern-js/builder';\n\nexport default (): BuilderPlugin => ({\n  name: 'builder-plugin-foo',\n\n  pre: ['builder-plugin-bar'],\n\n  setup: api => {\n    api.onAfterBuild(() => {\n      console.log('after build!');\n    });\n  },\n});\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"\u524D\u7F6E\u63D2\u4EF6",children:["\u524D\u7F6E\u63D2\u4EF6",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u524D\u7F6E\u63D2\u4EF6",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u63D2\u4EF6\u4F1A\u6309\u7167\u6DFB\u52A0\u987A\u5E8F\u4F9D\u6B21\u6267\u884C\uFF0C\u901A\u8FC7 ",(0,r.jsx)(n.code,{children:"pre"})," \u5B57\u6BB5\u53EF\u4EE5\u58F0\u660E\u524D\u7F6E\u6267\u884C\u7684\u63D2\u4EF6\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u6BD4\u5982\u6709\u4E0B\u9762\u4E24\u4E2A\u63D2\u4EF6\uFF1A"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"const builderPluginFoo = {\n  name: 'builder-plugin-foo',\n};\n\nconst builderPluginBar = {\n  name: 'builder-plugin-bar',\n  pre: ['builder-plugin-foo'],\n};\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Bar \u63D2\u4EF6\u5728 ",(0,r.jsx)(n.code,{children:"pre"})," \u5B57\u6BB5\u4E2D\u914D\u7F6E\u4E86 Foo \u63D2\u4EF6\uFF0C\u56E0\u6B64 Foo \u63D2\u4EF6\u4E00\u5B9A\u4F1A\u5728 Bar \u63D2\u4EF6\u4E4B\u524D\u6267\u884C\u3002"]}),"\n",(0,r.jsxs)(n.h3,{id:"\u540E\u7F6E\u63D2\u4EF6",children:["\u540E\u7F6E\u63D2\u4EF6",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u540E\u7F6E\u63D2\u4EF6",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["\u540C\u6837\u7684\uFF0C\u901A\u8FC7 ",(0,r.jsx)(n.code,{children:"post"})," \u5B57\u6BB5\u53EF\u4EE5\u58F0\u660E\u540E\u7F6E\u6267\u884C\u7684\u63D2\u4EF6\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"const builderPluginFoo = {\n  name: 'builder-plugin-foo',\n};\n\nconst builderPluginBar = {\n  name: 'builder-plugin-bar',\n  post: ['builder-plugin-foo'],\n};\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Bar \u63D2\u4EF6\u5728 ",(0,r.jsx)(n.code,{children:"post"})," \u5B57\u6BB5\u4E2D\u914D\u7F6E\u4E86 Foo \u63D2\u4EF6\uFF0C\u56E0\u6B64 Foo \u63D2\u4EF6\u4E00\u5B9A\u4F1A\u5728 Bar \u63D2\u4EF6\u4E4B\u540E\u6267\u884C\u3002"]}),"\n",(0,r.jsxs)(n.h3,{id:"\u79FB\u9664\u63D2\u4EF6",children:["\u79FB\u9664\u63D2\u4EF6",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u79FB\u9664\u63D2\u4EF6",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["\u901A\u8FC7 ",(0,r.jsx)(n.code,{children:"remove"})," \u5B57\u6BB5\u53EF\u4EE5\u5728\u4E00\u4E2A\u63D2\u4EF6\u4E2D\u79FB\u9664\u5176\u4ED6\u63D2\u4EF6\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"const builderPluginFoo = {\n  name: 'builder-plugin-foo',\n};\n\nconst builderPluginBar = {\n  name: 'builder-plugin-bar',\n  remove: ['builder-plugin-foo'],\n};\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u6BD4\u5982\u540C\u65F6\u6CE8\u518C\u4E0A\u8FF0\u7684 Foo \u548C Bar \u63D2\u4EF6\uFF0C\u7531\u4E8E Bar \u63D2\u4EF6\u58F0\u660E remove \u4E86 Foo \u63D2\u4EF6\uFF0C\u56E0\u6B64 Foo \u63D2\u4EF6\u4E0D\u4F1A\u751F\u6548\u3002"}),"\n",(0,r.jsxs)(n.h2,{id:"builderpluginapi",children:["BuilderPluginAPI",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#builderpluginapi",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"\u63D2\u4EF6 API \u5BF9\u8C61\u7684\u7C7B\u578B\u3002\u63D2\u4EF6 API \u5BF9\u8C61\u4E0A\u6302\u8F7D\u4E86\u63D0\u4F9B\u7ED9\u63D2\u4EF6\u4F7F\u7528\u7684\u4E0A\u4E0B\u6587\u6570\u636E\u3001\u5DE5\u5177\u51FD\u6570\u548C\u6CE8\u518C\u751F\u547D\u5468\u671F\u94A9\u5B50\u7684\u51FD\u6570\u3002"}),"\n",(0,r.jsxs)(n.p,{children:["\u5173\u4E8E\u751F\u547D\u5468\u671F\u94A9\u5B50\u7684\u5B8C\u6574\u4ECB\u7ECD\uFF0C\u8BF7\u9605\u8BFB ",(0,r.jsx)(n.a,{href:"/api/plugin-hooks",children:"Plugin Hooks"})," \u7AE0\u8282\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u5728\u4F7F\u7528 webpack-provider \u6216 rspack-provider \u65F6\uFF0C",(0,r.jsx)(n.code,{children:"BuilderPluginAPI"})," \u7684\u7C7B\u578B\u5B9A\u4E49\u6709\u4E00\u5B9A\u4E0D\u540C\uFF0C\u4F60\u53EF\u4EE5\u6839\u636E\u63D2\u4EF6\u7684\u4F7F\u7528\u573A\u666F\u6765\u5F15\u5165\u5BF9\u5E94\u7684\u7C7B\u578B\u3002"]}),"\n",(0,r.jsxs)(n.h3,{id:"\u9002\u7528\u4E8E-webpack-provider-\u7684\u63D2\u4EF6",children:["\u9002\u7528\u4E8E webpack-provider \u7684\u63D2\u4EF6",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u9002\u7528\u4E8E-webpack-provider-\u7684\u63D2\u4EF6",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["\u5F00\u53D1\u9002\u7528\u4E8E webpack-provider \u7684\u63D2\u4EF6\u65F6\uFF0C\u8BF7\u4ECE ",(0,r.jsx)(n.code,{children:"@modern-js/builder-webpack-provider"})," \u4E2D\u5F15\u5165 ",(0,r.jsx)(n.code,{children:"BuilderPluginAPI"}),"\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"import type { BuilderPlugin } from '@modern-js/builder';\nimport type { BuilderPluginAPI } from '@modern-js/builder-webpack-provider';\n\nexport default (): BuilderPlugin<BuilderPluginAPI> => ({\n  name: 'builder-plugin-foo',\n\n  setup: api => {\n    api.modifyWebpackConfig(config => {\n      config.devtool = false;\n    });\n  },\n});\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"\u9002\u7528\u4E8E-rspack-provider-\u7684\u63D2\u4EF6",children:["\u9002\u7528\u4E8E rspack-provider \u7684\u63D2\u4EF6",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u9002\u7528\u4E8E-rspack-provider-\u7684\u63D2\u4EF6",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["\u5F00\u53D1\u9002\u7528\u4E8E rspack-provider \u7684\u63D2\u4EF6\u65F6\uFF0C\u8BF7\u4ECE ",(0,r.jsx)(n.code,{children:"@modern-js/builder-rspack-provider"})," \u4E2D\u5F15\u5165 ",(0,r.jsx)(n.code,{children:"BuilderPluginAPI"}),"\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"import type { BuilderPlugin } from '@modern-js/builder';\nimport type { BuilderPluginAPI } from '@modern-js/builder-rspack-provider';\n\nexport default (): BuilderPlugin<BuilderPluginAPI> => ({\n  name: 'builder-plugin-foo',\n\n  setup: api => {\n    api.modifyRspackConfig(config => {\n      config.devtool = false;\n    });\n  },\n});\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"\u540C\u65F6\u9002\u7528\u4E8E-webpack-provider-\u548C-rspack-provider-\u7684\u63D2\u4EF6",children:["\u540C\u65F6\u9002\u7528\u4E8E webpack-provider \u548C rspack-provider \u7684\u63D2\u4EF6",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u540C\u65F6\u9002\u7528\u4E8E-webpack-provider-\u548C-rspack-provider-\u7684\u63D2\u4EF6",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["\u60F3\u8981\u5F00\u53D1\u540C\u65F6\u9002\u7528\u4E8E webpack-provider \u548C rspack-provider \u7684\u63D2\u4EF6\u65F6\uFF0C\u8BF7\u4ECE ",(0,r.jsx)(n.code,{children:"@modern-js/builder-shared"})," \u4E2D\u5F15\u5165 ",(0,r.jsx)(n.code,{children:"DefaultBuilderPlugin"}),"\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u5F00\u53D1 webpack \u548C Rspack \u540C\u65F6\u652F\u6301\u7684\u63D2\u4EF6\uFF0C\u610F\u5473\u7740\u4E0D\u80FD\u4F7F\u7528\u4EFB\u4F55\u5E26\u6709 webpack \u6216 Rspack \u6807\u8BC6\u7684 api\uFF0C\u5982 ",(0,r.jsx)(n.code,{children:"modifyWebpackConfig"})," \u6216 ",(0,r.jsx)(n.code,{children:"modifyRspackConfig"}),"\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u53EF\u901A\u8FC7 ",(0,r.jsx)(n.a,{href:"/api/plugin-hooks#modifybundlerchain-experimental",children:"modifyBundlerChain"})," \u4FEE\u6539\u540C\u65F6\u9002\u7528\u4E8E webpack \u548C Rspack \u7684\u914D\u7F6E\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"import type { BuilderPlugin } from '@modern-js/builder';\nimport type { DefaultBuilderPlugin } from '@modern-js/builder-shared';\n\nexport default (): BuilderPlugin<DefaultBuilderPlugin> => ({\n  name: 'builder-plugin-foo',\n\n  setup: api => {\n    api.modifyBundlerChain(chain => {\n      chain.devtool(false);\n    });\n  },\n});\n"})}),"\n",(0,r.jsxs)(n.h2,{id:"apicontext",children:["api.context",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#apicontext",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"api.context"})," \u662F\u4E00\u4E2A\u53EA\u8BFB\u5BF9\u8C61\uFF0C\u63D0\u4F9B\u4E00\u4E9B\u4E0A\u4E0B\u6587\u4FE1\u606F\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"api.context"})," \u7684\u5185\u5BB9\u4E0E ",(0,r.jsx)(n.code,{children:"builder.context"})," \u5B8C\u5168\u4E00\u81F4\uFF0C\u8BF7\u53C2\u8003 ",(0,r.jsx)(n.a,{href:"/api/builder-instance#builder-context",children:"builder.context"}),"\u3002"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"Example"})}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"const builderPluginFoo = () => ({\n  setup(api) {\n    console.log(api.context.distPath);\n  },\n});\n"})}),"\n",(0,r.jsxs)(n.h2,{id:"apigetbuilderconfig",children:["api.getBuilderConfig",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#apigetbuilderconfig",children:"#"})]}),"\n","\n",(0,r.jsx)(l.default,{}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"Example"})}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"const builderPluginFoo = () => ({\n  setup(api) {\n    const config = api.getBuilderConfig();\n    console.log(config.html?.title);\n  },\n});\n"})}),"\n",(0,r.jsxs)(n.h2,{id:"apigetnormalizedconfig",children:["api.getNormalizedConfig",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#apigetnormalizedconfig",children:"#"})]}),"\n","\n",(0,r.jsx)(d.default,{}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"Example"})}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"const builderPluginFoo = () => ({\n  setup(api) {\n    const config = api.getNormalizedConfig();\n    console.log(config.html.title);\n  },\n});\n"})}),"\n",(0,r.jsxs)(n.h2,{id:"apiispluginexists",children:["api.isPluginExists",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#apiispluginexists",children:"#"})]}),"\n","\n",(0,r.jsx)(c.default,{}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"Example"})}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"export default () => ({\n  setup: api => {\n    console.log(api.isPluginExists('builder-plugin-foo'));\n  },\n});\n"})}),"\n",(0,r.jsxs)(n.h2,{id:"apigethtmlpaths",children:["api.getHTMLPaths",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#apigethtmlpaths",children:"#"})]}),"\n","\n",(0,r.jsx)(o.default,{}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"Example"})}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"const builderPluginFoo = () => ({\n  setup(api) {\n    api.modifyWebpackChain(() => {\n      const htmlPaths = api.getHTMLPaths();\n      console.log(htmlPaths); // { main: 'html/main/index.html' };\n    });\n  },\n});\n"})})]})}function t(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,s.useMDXComponents)(),e.components);return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}n.default=t,t.__RSPRESS_PAGE_META={},t.__RSPRESS_PAGE_META["zh%2Fapi%2Fplugin-core.mdx"]={toc:[{text:"BuilderPlugin",id:"builderplugin",depth:2},{text:"\u524D\u7F6E\u63D2\u4EF6",id:"\u524D\u7F6E\u63D2\u4EF6",depth:3},{text:"\u540E\u7F6E\u63D2\u4EF6",id:"\u540E\u7F6E\u63D2\u4EF6",depth:3},{text:"\u79FB\u9664\u63D2\u4EF6",id:"\u79FB\u9664\u63D2\u4EF6",depth:3},{text:"BuilderPluginAPI",id:"builderpluginapi",depth:2},{text:"\u9002\u7528\u4E8E webpack-provider \u7684\u63D2\u4EF6",id:"\u9002\u7528\u4E8E-webpack-provider-\u7684\u63D2\u4EF6",depth:3},{text:"\u9002\u7528\u4E8E rspack-provider \u7684\u63D2\u4EF6",id:"\u9002\u7528\u4E8E-rspack-provider-\u7684\u63D2\u4EF6",depth:3},{text:"\u540C\u65F6\u9002\u7528\u4E8E webpack-provider \u548C rspack-provider \u7684\u63D2\u4EF6",id:"\u540C\u65F6\u9002\u7528\u4E8E-webpack-provider-\u548C-rspack-provider-\u7684\u63D2\u4EF6",depth:3},{text:"api.context",id:"apicontext",depth:2},{text:"api.getBuilderConfig",id:"apigetbuilderconfig",depth:2},{text:"api.getNormalizedConfig",id:"apigetnormalizedconfig",depth:2},{text:"api.isPluginExists",id:"apiispluginexists",depth:2},{text:"api.getHTMLPaths",id:"apigethtmlpaths",depth:2}],title:"Plugin Core",frontmatter:{extractApiHeaders:[2]}}},63568:function(e,n,i){"use strict";i.r(n);var r=i("39980"),s=i("96954");function l(e){let n=Object.assign({p:"p",code:"code",ul:"ul",li:"li",strong:"strong",pre:"pre"},(0,s.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["\u83B7\u53D6 Builder \u914D\u7F6E\uFF0C\u8BE5\u65B9\u6CD5\u5FC5\u987B\u5728 ",(0,r.jsx)(n.code,{children:"modifyBuilderConfig"})," \u94A9\u5B50\u6267\u884C\u5B8C\u6210\u540E\u624D\u80FD\u88AB\u8C03\u7528\u3002"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"\u7C7B\u578B"})}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"function GetBuilderConfig(): Readonly<BuilderConfig>;\n"})})]})}function d(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,s.useMDXComponents)(),e.components);return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}n.default=d,d.__RSPRESS_PAGE_META={},d.__RSPRESS_PAGE_META["zh%2Fshared%2FgetBuilderConfig.md"]={toc:[],title:"",frontmatter:{}}},69987:function(e,n,i){"use strict";i.r(n);var r=i("39980"),s=i("96954");function l(e){let n=Object.assign({p:"p",ul:"ul",li:"li",strong:"strong",pre:"pre",code:"code"},(0,s.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"\u83B7\u53D6\u6240\u6709 HTML \u4EA7\u7269\u7684\u8DEF\u5F84\u4FE1\u606F\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u8BE5\u65B9\u6CD5\u4F1A\u8FD4\u56DE\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u5BF9\u8C61\u7684 key \u4E3A entry \u540D\u79F0\uFF0Cvalue \u4E3A HTML \u6587\u4EF6\u5728\u4EA7\u7269\u76EE\u5F55\u4E0B\u7684\u76F8\u5BF9\u8DEF\u5F84\u3002"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"\u7C7B\u578B"})}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"function GetHTMLPaths(): Record<string, string>;\n"})})]})}function d(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,s.useMDXComponents)(),e.components);return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}n.default=d,d.__RSPRESS_PAGE_META={},d.__RSPRESS_PAGE_META["zh%2Fshared%2FgetHTMLPaths.md"]={toc:[],title:"",frontmatter:{}}},36373:function(e,n,i){"use strict";i.r(n);var r=i("39980"),s=i("96954");function l(e){let n=Object.assign({p:"p",code:"code",ul:"ul",li:"li",strong:"strong",pre:"pre"},(0,s.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["\u83B7\u53D6\u5F52\u4E00\u5316\u540E\u7684 Builder \u914D\u7F6E\uFF0C\u8BE5\u65B9\u6CD5\u5FC5\u987B\u5728 ",(0,r.jsx)(n.code,{children:"modifyBuilderConfig"})," \u94A9\u5B50\u6267\u884C\u5B8C\u6210\u540E\u624D\u80FD\u88AB\u8C03\u7528\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u76F8\u8F83\u4E8E ",(0,r.jsx)(n.code,{children:"getBuilderConfig"})," \u65B9\u6CD5\uFF0C\u8BE5\u65B9\u6CD5\u8FD4\u56DE\u7684\u914D\u7F6E\u7ECF\u8FC7\u4E86\u5F52\u4E00\u5316\u5904\u7406\uFF0C\u914D\u7F6E\u7684\u7C7B\u578B\u5B9A\u4E49\u4F1A\u5F97\u5230\u6536\u655B\uFF0C\u6BD4\u5982 ",(0,r.jsx)(n.code,{children:"config.html"})," \u7684 ",(0,r.jsx)(n.code,{children:"undefined"})," \u7C7B\u578B\u5C06\u88AB\u79FB\u9664\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u63A8\u8350\u4F18\u5148\u4F7F\u7528\u8BE5\u65B9\u6CD5\u83B7\u53D6\u914D\u7F6E\u3002"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"\u7C7B\u578B"})}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"function GetNormalizedConfig(): Readonly<NormalizedConfig>;\n"})})]})}function d(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,s.useMDXComponents)(),e.components);return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}n.default=d,d.__RSPRESS_PAGE_META={},d.__RSPRESS_PAGE_META["zh%2Fshared%2FgetNormalizedConfig.md"]={toc:[],title:"",frontmatter:{}}},56791:function(e,n,i){"use strict";i.r(n);var r=i("39980"),s=i("96954");function l(e){let n=Object.assign({p:"p",ul:"ul",li:"li",strong:"strong",pre:"pre",code:"code"},(0,s.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"\u5224\u65AD\u67D0\u4E2A\u63D2\u4EF6\u662F\u5426\u5DF2\u7ECF\u88AB\u6CE8\u518C\u3002"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"\u7C7B\u578B"})}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"function IsPluginExists(pluginName: string): boolean;\n"})})]})}function d(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,s.useMDXComponents)(),e.components);return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}n.default=d,d.__RSPRESS_PAGE_META={},d.__RSPRESS_PAGE_META["zh%2Fshared%2FisPluginExists.md"]={toc:[],title:"",frontmatter:{}}}}]);