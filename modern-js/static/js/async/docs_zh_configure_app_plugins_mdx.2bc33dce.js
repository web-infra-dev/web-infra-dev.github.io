(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_configure_app_plugins_mdx"],{27694:function(e,n,i){"use strict";i.r(n),i.d(n,{default:function(){return a}});var r,s=i("15169"),l=i("43932"),d=i("9880"),h=i("23169");function c(e){var n=Object.assign({h1:"h1",a:"a",ul:"ul",li:"li",strong:"strong",code:"code",p:"p",h2:"h2",h3:"h3",pre:"pre"},(0,h.useMDXComponents)(),e.components);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.h1,{id:"plugins-\u63D2\u4EF6",children:["plugins \u63D2\u4EF6",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#plugins-\u63D2\u4EF6",children:"#"})]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"\u7C7B\u578B\uFF1A"})," ",(0,d.jsx)(n.code,{children:"CliPlugin[]"})]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"\u9ED8\u8BA4\u503C\uFF1A"})," ",(0,d.jsx)(n.code,{children:"[]"})]}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:"\u7528\u4E8E\u914D\u7F6E\u81EA\u5B9A\u4E49\u7684 Modern.js \u6846\u67B6\u63D2\u4EF6\u3002"}),"\n",(0,d.jsxs)(n.p,{children:["\u81EA\u5B9A\u4E49\u63D2\u4EF6\u7684\u7F16\u5199\u65B9\u5F0F\u8BF7\u53C2\u8003 ",(0,d.jsx)(n.a,{href:"/guides/topic-detail/framework-plugin/implement",children:"\u5982\u4F55\u7F16\u5199\u63D2\u4EF6"}),"\u3002"]}),"\n",(0,d.jsxs)(n.h2,{id:"\u6CE8\u610F\u4E8B\u9879",children:["\u6CE8\u610F\u4E8B\u9879",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u6CE8\u610F\u4E8B\u9879",children:"#"})]}),"\n",(0,d.jsxs)(n.p,{children:["\u8BE5\u9009\u9879",(0,d.jsx)(n.strong,{children:"\u7528\u4E8E\u914D\u7F6E\u6846\u67B6\u63D2\u4EF6"}),"\uFF0C\u5982\u679C\u4F60\u9700\u8981\u914D\u7F6E\u5176\u4ED6\u7C7B\u578B\u7684\u63D2\u4EF6\uFF0C\u8BF7\u9009\u62E9\u5BF9\u5E94\u7684\u914D\u7F6E\u65B9\u5F0F\uFF1A"]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["\u914D\u7F6E Modern.js Builder \u63D2\u4EF6\uFF0C\u8BF7\u4F7F\u7528 ",(0,d.jsx)(n.a,{href:"/configure/app/builder-plugins",children:"builderPlugins"})," \u914D\u7F6E\u9879\u3002"]}),"\n",(0,d.jsxs)(n.li,{children:["\u914D\u7F6E webpack \u63D2\u4EF6\uFF0C\u8BF7\u4F7F\u7528 ",(0,d.jsx)(n.a,{href:"/configure/app/tools/webpack",children:"tools.webpack"}),"\u3001",(0,d.jsx)(n.a,{href:"/configure/app/tools/webpack-chain",children:"tools.webpackChain"})," \u6216 ",(0,d.jsx)(n.a,{href:"/configure/app/tools/bundler-chain",children:"tools.bundlerChain"})," \u914D\u7F6E\u9879\u3002"]}),"\n",(0,d.jsxs)(n.li,{children:["\u914D\u7F6E Rspack \u63D2\u4EF6\uFF0C\u8BF7\u4F7F\u7528 ",(0,d.jsx)(n.a,{href:"/configure/app/tools/rspack",children:"tools.rspack"})," \u6216 ",(0,d.jsx)(n.a,{href:"/configure/app/tools/bundler-chain",children:"tools.bundlerChain"})," \u914D\u7F6E\u9879\u3002"]}),"\n",(0,d.jsxs)(n.li,{children:["\u914D\u7F6E Babel \u63D2\u4EF6\uFF0C\u8BF7\u4F7F\u7528 ",(0,d.jsx)(n.a,{href:"/configure/app/tools/babel",children:"tools.babel"})," \u914D\u7F6E\u9879\u3002"]}),"\n"]}),"\n",(0,d.jsxs)(n.h2,{id:"\u63D2\u4EF6\u7C7B\u578B",children:["\u63D2\u4EF6\u7C7B\u578B",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u63D2\u4EF6\u7C7B\u578B",children:"#"})]}),"\n",(0,d.jsx)(n.p,{children:"Modern.js \u4E2D\u5185\u7F6E\u4E86\u4E09\u79CD\u4E0D\u540C\u7684\u6846\u67B6\u63D2\u4EF6\uFF1A"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"CLI \u63D2\u4EF6"}),"\uFF0C\u9002\u7528\u4E8E\u672C\u5730\u5F00\u53D1\u3001\u7F16\u8BD1\u6784\u5EFA\u9636\u6BB5\uFF0C\u53EF\u4EE5\u5728\u547D\u4EE4\u884C\u548C\u7F16\u8BD1\u9636\u6BB5\u6269\u5C55\u5404\u79CD\u80FD\u529B\u3002"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"Server \u63D2\u4EF6"}),"\uFF0C\u9002\u7528\u4E8E\u670D\u52A1\u7AEF\u3002"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"Runtime \u63D2\u4EF6"}),"\uFF0C\u9002\u7528\u4E8E\u524D\u7AEF\u8FD0\u884C\u65F6\u3002"]}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:"\u76EE\u524D Modern.js \u5F00\u653E\u4E86\u81EA\u5B9A\u4E49 CLI \u63D2\u4EF6\u7684\u80FD\u529B\uFF0CServer \u63D2\u4EF6\u548C Runtime \u63D2\u4EF6\u4F1A\u5728\u540E\u7EED\u5F00\u653E\u3002"}),"\n",(0,d.jsxs)(n.h2,{id:"\u63D2\u4EF6\u6267\u884C\u987A\u5E8F",children:["\u63D2\u4EF6\u6267\u884C\u987A\u5E8F",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u63D2\u4EF6\u6267\u884C\u987A\u5E8F",children:"#"})]}),"\n",(0,d.jsxs)(n.p,{children:["\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u81EA\u5B9A\u4E49\u63D2\u4EF6\u4F1A\u6309\u7167 ",(0,d.jsx)(n.code,{children:"plugins"})," \u6570\u7EC4\u7684\u987A\u5E8F\u4F9D\u6B21\u6267\u884C\uFF0CModern.js \u5185\u7F6E\u63D2\u4EF6\u7684\u6267\u884C\u65F6\u673A\u65E9\u4E8E\u81EA\u5B9A\u4E49\u63D2\u4EF6\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:["\u5F53\u63D2\u4EF6\u5185\u90E8\u4F7F\u7528\u4E86\u63A7\u5236\u987A\u5E8F\u7684\u76F8\u5173\u5B57\u6BB5\uFF0C\u6BD4\u5982 ",(0,d.jsx)(n.code,{children:"pre"}),"\u3001",(0,d.jsx)(n.code,{children:"post"})," \u65F6\uFF0C\u4F1A\u57FA\u4E8E\u58F0\u660E\u7684\u5B57\u6BB5\u5BF9\u6267\u884C\u987A\u5E8F\u8FDB\u884C\u8C03\u6574\uFF0C\u8BE6\u89C1 ",(0,d.jsx)(n.a,{href:"/guides/topic-detail/framework-plugin/relationship",children:"\u63D2\u4EF6\u4E4B\u95F4\u7684\u5173\u7CFB"}),"\u3002"]}),"\n",(0,d.jsxs)(n.h2,{id:"\u793A\u4F8B",children:["\u793A\u4F8B",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u793A\u4F8B",children:"#"})]}),"\n",(0,d.jsx)(n.p,{children:"\u4E0B\u9762\u662F CLI \u63D2\u4EF6\u7684\u4F7F\u7528\u793A\u4F8B\u3002"}),"\n",(0,d.jsxs)(n.h3,{id:"\u4F7F\u7528-npm-\u4E0A\u7684\u63D2\u4EF6",children:["\u4F7F\u7528 npm \u4E0A\u7684\u63D2\u4EF6",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u4F7F\u7528-npm-\u4E0A\u7684\u63D2\u4EF6",children:"#"})]}),"\n",(0,d.jsx)(n.p,{children:"\u4F7F\u7528 npm \u4E0A\u7684\u63D2\u4EF6\uFF0C\u9700\u8981\u901A\u8FC7\u5305\u7BA1\u7406\u5668\u5B89\u88C5\u63D2\u4EF6\uFF0C\u5E76\u901A\u8FC7 import \u5F15\u5165\u3002"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import { myPlugin } from 'my-plugin';\n\nexport default defineConfig({\n  plugins: [myPlugin()],\n});\n"})}),"\n",(0,d.jsxs)(n.h3,{id:"\u4F7F\u7528\u672C\u5730\u63D2\u4EF6",children:["\u4F7F\u7528\u672C\u5730\u63D2\u4EF6",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u4F7F\u7528\u672C\u5730\u63D2\u4EF6",children:"#"})]}),"\n",(0,d.jsx)(n.p,{children:"\u4F7F\u7528\u672C\u5730\u4EE3\u7801\u4ED3\u5E93\u4E2D\u7684\u63D2\u4EF6\uFF0C\u76F4\u63A5\u901A\u8FC7\u76F8\u5BF9\u8DEF\u5F84 import \u5F15\u5165\u5373\u53EF\u3002"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import { myPlugin } from './config/plugin/myPlugin';\n\nexport default defineConfig({\n  plugins: [myPlugin()],\n});\n"})}),"\n",(0,d.jsxs)(n.h3,{id:"\u63D2\u4EF6\u914D\u7F6E\u9879",children:["\u63D2\u4EF6\u914D\u7F6E\u9879",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u63D2\u4EF6\u914D\u7F6E\u9879",children:"#"})]}),"\n",(0,d.jsx)(n.p,{children:"\u5982\u679C\u63D2\u4EF6\u63D0\u4F9B\u4E86\u4E00\u4E9B\u81EA\u5B9A\u4E49\u7684\u914D\u7F6E\u9879\uFF0C\u53EF\u4EE5\u901A\u8FC7\u63D2\u4EF6\u51FD\u6570\u7684\u53C2\u6570\u4F20\u5165\u914D\u7F6E\u3002"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import { myPlugin } from 'my-plugin';\n\nexport default defineConfig({\n  plugins: [\n    myPlugin({\n      foo: 1,\n      bar: 2,\n    }),\n  ],\n});\n"})})]})}(r=globalThis).__RSPRESS_PAGE_META||(r.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["zh%2Fconfigure%2Fapp%2Fplugins.mdx"]={toc:[{text:"\u6CE8\u610F\u4E8B\u9879",id:"\u6CE8\u610F\u4E8B\u9879",depth:2},{text:"\u63D2\u4EF6\u7C7B\u578B",id:"\u63D2\u4EF6\u7C7B\u578B",depth:2},{text:"\u63D2\u4EF6\u6267\u884C\u987A\u5E8F",id:"\u63D2\u4EF6\u6267\u884C\u987A\u5E8F",depth:2},{text:"\u793A\u4F8B",id:"\u793A\u4F8B",depth:2},{text:"\u4F7F\u7528 npm \u4E0A\u7684\u63D2\u4EF6",id:"\u4F7F\u7528-npm-\u4E0A\u7684\u63D2\u4EF6",depth:3},{text:"\u4F7F\u7528\u672C\u5730\u63D2\u4EF6",id:"\u4F7F\u7528\u672C\u5730\u63D2\u4EF6",depth:3},{text:"\u63D2\u4EF6\u914D\u7F6E\u9879",id:"\u63D2\u4EF6\u914D\u7F6E\u9879",depth:3}],title:"plugins \u63D2\u4EF6",frontmatter:{sidebar_position:9}};var a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,h.useMDXComponents)(),e.components).wrapper;return n?(0,d.jsx)(n,(0,l._)((0,s._)({},e),{children:(0,d.jsx)(c,(0,s._)({},e))})):c(e)}}}]);