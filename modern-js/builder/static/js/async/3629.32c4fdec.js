(self.webpackChunk_modern_js_builder_doc=self.webpackChunk_modern_js_builder_doc||[]).push([["3629"],{2463:function(e,r,n){"use strict";n.r(r),n.d(r,{default:function(){return c}});var d,i=n("15169"),l=n("43932"),t=n("9880"),s=n("23169");function a(e){var r=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",pre:"pre",code:"code"},(0,s.useMDXComponents)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.h1,{id:"builder-types",children:["Builder Types",(0,t.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#builder-types",children:"#"})]}),"\n",(0,t.jsx)(r.p,{children:"\u672C\u7AE0\u8282\u63CF\u8FF0\u4E86 Builder \u63D0\u4F9B\u7684\u4E00\u4E9B\u7C7B\u578B\u5B9A\u4E49\u3002"}),"\n",(0,t.jsxs)(r.h2,{id:"builderinstance",children:["BuilderInstance",(0,t.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#builderinstance",children:"#"})]}),"\n",(0,t.jsx)(r.p,{children:"Builder \u5B9E\u4F8B\u7684\u7C7B\u578B\u3002"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-ts",children:"import type { BuilderInstance } from '@modern-js/builder';\n\nlet builder: BuilderInstance;\n"})}),"\n",(0,t.jsx)(r.p,{children:"\u4F60\u53EF\u4EE5\u901A\u8FC7\u6CDB\u578B\u6765\u4F20\u5165 Provider \u7684\u7C7B\u578B\uFF0C\u4F7F Builder \u5B9E\u4F8B\u83B7\u5F97\u66F4\u51C6\u786E\u7684\u7C7B\u578B\u5B9A\u4E49\uFF1A"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-ts",children:"import type { createBuilder, type BuilderInstance } from '@modern-js/builder';\nimport type { BuilderWebpackProvider } from '@modern-js/builder-webpack-provider';\n\nlet builder: BuilderInstance<BuilderWebpackProvider>;\n"})}),"\n",(0,t.jsxs)(r.h2,{id:"buildercontext",children:["BuilderContext",(0,t.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#buildercontext",children:"#"})]}),"\n",(0,t.jsx)(r.p,{children:"Builder \u5B9E\u4F8B\u4E2D context \u5C5E\u6027\u7684\u7C7B\u578B\u5B9A\u4E49\u3002"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-ts",children:"import type { BuilderContext } from '@modern-js/builder';\n\nconst context: BuilderContext = builder.context;\n"})}),"\n",(0,t.jsxs)(r.h2,{id:"builderplugin",children:["BuilderPlugin",(0,t.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#builderplugin",children:"#"})]}),"\n",(0,t.jsxs)(r.p,{children:["Builder \u63D2\u4EF6\u7684\u7C7B\u578B\uFF0C\u9700\u8981\u914D\u5408 provider \u4E2D\u63D0\u4F9B\u7684 ",(0,t.jsx)(r.code,{children:"BuilderPluginAPI"})," \u7C7B\u578B\u6765\u4F7F\u7528\u3002"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-ts",children:"import type { BuilderPlugin } from '@modern-js/builder';\nimport type { BuilderPluginAPI } from '@modern-js/builder-webpack-provider';\n\nconst myPlugin: BuilderPlugin<BuilderPluginAPI> = {\n  name: 'my-plugin',\n  setup() {},\n};\n"})}),"\n",(0,t.jsxs)(r.h2,{id:"buildertarget",children:["BuilderTarget",(0,t.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#buildertarget",children:"#"})]}),"\n",(0,t.jsx)(r.p,{children:"Builder \u6784\u5EFA\u4EA7\u7269\u7684\u7C7B\u578B\u3002"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-ts",children:"import type { BuilderTarget } from '@modern-js/builder';\n"})}),"\n",(0,t.jsxs)(r.h2,{id:"builderentry",children:["BuilderEntry",(0,t.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#builderentry",children:"#"})]}),"\n",(0,t.jsxs)(r.p,{children:["\u5BF9\u5E94 ",(0,t.jsx)(r.code,{children:"createBuilder"})," \u65B9\u6CD5\u7684 ",(0,t.jsx)(r.code,{children:"entry"})," \u9009\u9879\u7684\u7C7B\u578B\u3002"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-ts",children:"import type { BuilderEntry } from '@modern-js/builder';\n"})}),"\n",(0,t.jsxs)(r.h2,{id:"createbuilderoptions",children:["CreateBuilderOptions",(0,t.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#createbuilderoptions",children:"#"})]}),"\n",(0,t.jsxs)(r.p,{children:["\u5BF9\u5E94 ",(0,t.jsx)(r.code,{children:"createBuilder"})," \u65B9\u6CD5\u7684\u5165\u53C2\u7C7B\u578B\u3002"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-ts",children:"import type { CreateBuilderOptions } from '@modern-js/builder';\n"})})]})}(d=globalThis).__RSPRESS_PAGE_META||(d.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["zh%2Fapi%2Fbuilder-types.mdx"]={toc:[{text:"BuilderInstance",id:"builderinstance",depth:2},{text:"BuilderContext",id:"buildercontext",depth:2},{text:"BuilderPlugin",id:"builderplugin",depth:2},{text:"BuilderTarget",id:"buildertarget",depth:2},{text:"BuilderEntry",id:"builderentry",depth:2},{text:"CreateBuilderOptions",id:"createbuilderoptions",depth:2}],title:"Builder Types",frontmatter:{extractApiHeaders:[2]}};var c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=Object.assign({},(0,s.useMDXComponents)(),e.components).wrapper;return r?(0,t.jsx)(r,(0,l._)((0,i._)({},e),{children:(0,t.jsx)(a,(0,i._)({},e))})):a(e)}}}]);