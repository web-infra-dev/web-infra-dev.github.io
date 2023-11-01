(self.webpackChunk_modern_js_builder_doc=self.webpackChunk_modern_js_builder_doc||[]).push([["9691"],{22187:function(e,n,d){"use strict";d.r(n),d.d(n,{default:function(){return a}});var r=d("9880"),i=d("23169"),s=d("48820");function l(e){let n=Object.assign({h1:"h1",a:"a",p:"p",ul:"ul",li:"li",h2:"h2",code:"code",h3:"h3",pre:"pre",strong:"strong"},(0,i.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"\u4F7F\u7528-builder-cli",children:["\u4F7F\u7528 Builder CLI",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u4F7F\u7528-builder-cli",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"Modern.js Builder \u63D0\u4F9B\u4E86\u4E00\u4E2A\u8F7B\u91CF\u7684 CLI \u5DE5\u5177\uFF0C\u5305\u542B dev\u3001build \u7B49\u57FA\u7840\u547D\u4EE4\uFF0C\u5B83\u4E3B\u8981\u7528\u4E8E\u6784\u5EFA\u975E React \u9879\u76EE\u3002"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u5BF9\u4E8E React \u9879\u76EE\uFF0C\u6211\u4EEC\u5EFA\u8BAE\u76F4\u63A5\u4F7F\u7528 Modern.js \u6846\u67B6\uFF0C\u53C2\u8003 ",(0,r.jsx)(n.a,{href:"https://modernjs.dev/guides/get-started/quick-start.html",target:"_blank",rel:"noopener noreferrer",children:"Modern.js - \u5FEB\u901F\u4E0A\u624B"}),"\u3002"]}),"\n",(0,r.jsx)(n.li,{children:"\u5BF9\u4E8E\u975E React \u9879\u76EE\uFF0C\u6BD4\u5982\u5F00\u53D1\u4E00\u4E2A Vue \u9879\u76EE\uFF0C\u90A3\u4E48\u4F60\u53EF\u4EE5\u4F7F\u7528 Builder CLI \u5DE5\u5177\u6765\u6784\u5EFA\u4F60\u7684\u9879\u76EE\u3002"}),"\n"]}),"\n",(0,r.jsxs)(n.h2,{id:"\u5B89\u88C5",children:["\u5B89\u88C5",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u5B89\u88C5",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"\u4F60\u9700\u8981\u5B89\u88C5\u4E24\u4E2A\u5305\uFF0C\u5176\u4E2D\uFF1A"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"@modern-js/builder-cli"}),"\uFF1ABuilder \u7684 CLI \u5DE5\u5177\uFF0C\u63D0\u4F9B\u57FA\u7840\u7684 CLI \u547D\u4EE4\uFF0C\u5E76\u4F1A\u81EA\u52A8\u52A0\u8F7D\u5F53\u524D\u9879\u76EE\u4E2D\u5B89\u88C5\u7684 Provider\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"@modern-js/builder-rspack-provider"}),"\uFF1A\u63D0\u4F9B\u57FA\u4E8E webpack \u6216 Rspack \u7684\u6784\u5EFA\u80FD\u529B\u3002"]}),"\n"]}),"\n","\n",(0,r.jsx)(s.PackageManagerTabs,{command:"add @modern-js/builder-cli @modern-js/builder-rspack-provider -D"}),"\n",(0,r.jsxs)(n.p,{children:["\u5982\u679C\u4F60\u60F3\u4F7F\u7528 webpack \u800C\u4E0D\u662F Rspack\uFF0C\u53EF\u4EE5\u5C06 ",(0,r.jsx)(n.code,{children:"@modern-js/builder-rspack-provider"})," \u66FF\u6362\u4E3A ",(0,r.jsx)(n.code,{children:"@modern-js/builder-webpack-provider"}),"\uFF1A"]}),"\n",(0,r.jsxs)(n.h2,{id:"\u547D\u4EE4",children:["\u547D\u4EE4",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u547D\u4EE4",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"Builder CLI \u63D0\u4F9B\u4E86\u4EE5\u4E0B\u547D\u4EE4\uFF0C\u53EF\u4EE5\u5E2E\u52A9\u4F60\u5FEB\u901F\u542F\u52A8\u5F00\u53D1\u670D\u52A1\u5668\u3001\u6784\u5EFA\u751F\u4EA7\u73AF\u5883\u4EE3\u7801\u7B49\u3002"}),"\n",(0,r.jsxs)(n.h3,{id:"builder-dev",children:["builder dev",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#builder-dev",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"builder dev"})," \u547D\u4EE4\u7528\u4E8E\u542F\u52A8\u4E00\u4E2A\u672C\u5730\u5F00\u53D1\u670D\u52A1\u5668\uFF0C\u5BF9\u6E90\u4EE3\u7801\u8FDB\u884C\u5F00\u53D1\u73AF\u5883\u7F16\u8BD1\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"Usage: builder dev [options]\n\nOptions:\n  -h, --help            display help for command\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"builder-build",children:["builder build",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#builder-build",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"builder build"})," \u547D\u4EE4\u9ED8\u8BA4\u4F1A\u5728 ",(0,r.jsx)(n.code,{children:"dist/"})," \u76EE\u5F55\u4E0B\u6784\u5EFA\u51FA\u53EF\u7528\u4E8E\u751F\u4EA7\u73AF\u5883\u7684\u4EA7\u7269\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"Usage: builder build [options]\n\nOptions:\n  -h, --help            display help for command\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"builder-serve",children:["builder serve",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#builder-serve",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"builder serve"})," \u547D\u4EE4\u7528\u4E8E\u5728\u672C\u5730\u9884\u89C8\u751F\u4EA7\u73AF\u5883\u6784\u5EFA\u7684\u4EA7\u7269, \u6CE8\u610F\u4F60\u9700\u8981\u63D0\u524D\u6267\u884C ",(0,r.jsx)(n.code,{children:"builder build"})," \u547D\u4EE4\u6784\u5EFA\u51FA\u5BF9\u5E94\u4EA7\u7269\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"Usage: builder serve [options]\n\nOptions:\n  -h, --help            display help for command\n"})}),"\n",(0,r.jsxs)(n.h2,{id:"\u914D\u7F6E",children:["\u914D\u7F6E",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u914D\u7F6E",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["Builder CLI \u9ED8\u8BA4\u4F1A\u8BFB\u53D6\u9879\u76EE\u6839\u76EE\u5F55\u4E0B\u7684 ",(0,r.jsx)(n.code,{children:"builder.config.ts"})," \u914D\u7F6E\u6587\u4EF6\uFF0C\u4F60\u53EF\u4EE5\u5728\u914D\u7F6E\u6587\u4EF6\u4E2D\u4F7F\u7528 Builder \u63D0\u4F9B\u7684",(0,r.jsx)(n.a,{href:"/api/index",children:"\u6240\u6709\u914D\u7F6E\u9879"}),"\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",meta:'title="builder.config.ts"',children:"import { defineConfig } from '@modern-js/builder-cli';\n\nexport default defineConfig({\n  output: {\n    disableTsChecker: true,\n  },\n});\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u5F53\u4F60\u4F7F\u7528 Rspack \u4F5C\u4E3A\u6253\u5305\u5DE5\u5177\u65F6\uFF0C\u7531\u4E8E webpack \u548C Rspack \u7684\u914D\u7F6E\u7C7B\u578B\u5B58\u5728\u4E00\u4E9B\u5DEE\u5F02\uFF0C\u9700\u8981\u4E3A defineConfig \u6307\u5B9A ",(0,r.jsx)(n.code,{children:"<'rspack'>"})," \u6CDB\u578B\uFF1A"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-diff",meta:'title="builder.config.ts"',children:"- export default defineConfig({\n+ export default defineConfig<'rspack'>({\n  // ...\n});\n"})}),"\n",(0,r.jsxs)(n.h2,{id:"\u6784\u5EFA\u5165\u53E3",children:["\u6784\u5EFA\u5165\u53E3",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u6784\u5EFA\u5165\u53E3",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["Builder CLI \u9ED8\u8BA4\u4F1A\u4F7F\u7528 ",(0,r.jsx)(n.code,{children:"src/index.(js|ts|jsx|tsx)"})," \u4F5C\u4E3A\u6784\u5EFA\u5165\u53E3\uFF0C\u4F60\u53EF\u4EE5\u4F7F\u7528 ",(0,r.jsx)(n.code,{children:"source.entries"})," \u914D\u7F6E\u9879\u6765\u4FEE\u6539\u6784\u5EFA\u5165\u53E3\u3002"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"\u7C7B\u578B\uFF1A"})}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"type Entries = Record<string, string>;\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"\u9ED8\u8BA4\u503C\uFF1A"})}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"const defaultEntry = {\n  index: 'src/index.(js|ts|jsx|tsx)',\n};\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"\u793A\u4F8B\uFF1A"})}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",meta:'title="builder.config.ts"',children:"import { defineConfig } from '@modern-js/builder-cli';\n\nexport default defineConfig({\n  source: {\n    entries: {\n      foo: './src/pages/foo/index.ts',\n      bar: './src/pages/bar/index.ts',\n    },\n  },\n});\n"})}),"\n",(0,r.jsxs)(n.h2,{id:"\u6CE8\u518C\u63D2\u4EF6",children:["\u6CE8\u518C\u63D2\u4EF6",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u6CE8\u518C\u63D2\u4EF6",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["\u4F60\u53EF\u4EE5\u5728 ",(0,r.jsx)(n.code,{children:"builder.config.ts"})," \u4E2D\u4F7F\u7528 ",(0,r.jsx)(n.code,{children:"builderPlugins"})," \u9009\u9879\u6765\u6CE8\u518C Builder \u63D2\u4EF6\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u6BD4\u5982\u6CE8\u518C Vue \u63D2\u4EF6\uFF1A"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",meta:'title="builder.config.ts"',children:"import { defineConfig } from '@modern-js/builder-cli';\nimport { builderPluginVue } from '@modern-js/builder-plugin-vue';\n\nexport default defineConfig({\n  builderPlugins: [builderPluginVue()],\n});\n"})})]})}function c(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,i.useMDXComponents)(),e.components);return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}var a=c;c.__RSPRESS_PAGE_META={},c.__RSPRESS_PAGE_META["zh%2Fguide%2Fbasic%2Fbuilder-cli.mdx"]={toc:[{text:"\u5B89\u88C5",id:"\u5B89\u88C5",depth:2},{text:"\u547D\u4EE4",id:"\u547D\u4EE4",depth:2},{text:"builder dev",id:"builder-dev",depth:3},{text:"builder build",id:"builder-build",depth:3},{text:"builder serve",id:"builder-serve",depth:3},{text:"\u914D\u7F6E",id:"\u914D\u7F6E",depth:2},{text:"\u6784\u5EFA\u5165\u53E3",id:"\u6784\u5EFA\u5165\u53E3",depth:2},{text:"\u6CE8\u518C\u63D2\u4EF6",id:"\u6CE8\u518C\u63D2\u4EF6",depth:2}],title:"\u4F7F\u7528 Builder CLI"}}}]);