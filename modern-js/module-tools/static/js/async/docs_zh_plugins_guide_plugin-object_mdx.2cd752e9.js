(self.webpackChunk_modern_js_module_tools_docs=self.webpackChunk_modern_js_module_tools_docs||[]).push([["docs_zh_plugins_guide_plugin-object_mdx"],{18210:function(n,e,o){"use strict";o.r(e),o.d(e,{default:function(){return c}});var s,l=o("15169"),i=o("43932"),r=o("9880"),d=o("23169");function t(n){var e=Object.assign({h1:"h1",a:"a",p:"p",ul:"ul",li:"li",code:"code",pre:"pre",h2:"h2",strong:"strong"},(0,d.useMDXComponents)(),n.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(e.h1,{id:"\u63D2\u4EF6\u5BF9\u8C61",children:["\u63D2\u4EF6\u5BF9\u8C61",(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#\u63D2\u4EF6\u5BF9\u8C61",children:"#"})]}),"\n",(0,r.jsx)(e.p,{children:"Module-tools \u63D2\u4EF6\u662F\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u5BF9\u8C61\u5305\u542B\u4EE5\u4E0B\u5C5E\u6027\uFF1A"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"name"}),"\uFF1A\u63D2\u4EF6\u7684\u540D\u79F0\uFF0C\u552F\u4E00\u6807\u8BC6\u7B26\u3002"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"setup"}),"\uFF1A\u63D2\u4EF6\u521D\u59CB\u5316\u51FD\u6570\uFF0C\u53EA\u4F1A\u6267\u884C\u4E00\u6B21\u3002setup \u51FD\u6570\u53EF\u4EE5\u8FD4\u56DE\u4E00\u4E2A ",(0,r.jsx)(e.a,{href:"/",children:"Hooks \u5BF9\u8C61"}),"\uFF0Cmodule-tools \u4F1A\u5728\u7279\u5B9A\u7684\u65F6\u673A\u6267\u884C Hooks \u5BF9\u8C61\u4E0A\u5B9A\u4E49\u7684 Hook \u5BF9\u5E94\u7684\u51FD\u6570\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(e.p,{children:["\u4F8B\u5982\u5728\u4E0B\u9762\u7684\u63D2\u4EF6\u4EE3\u7801\u793A\u4F8B\u4E2D\uFF0C\u5728\u9879\u76EE\u5F00\u59CB\u6267\u884C\u6784\u5EFA\u4EFB\u52A1\u4E4B\u524D\u4F1A\u89E6\u53D1 ",(0,r.jsx)(e.code,{children:"beforeBuild"})," \u51FD\u6570\u7684\u6267\u884C\uFF0C\u5E76\u6253\u5370 ",(0,r.jsx)(e.code,{children:"build start"})," \u7684 log \u5185\u5BB9\u3002"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-ts",meta:'title="./plugins/demo.tsx"',children:"import type { CliPlugin, ModuleTools } from '@modern-js/module-tools';\n\nconst myPlugin: CliPlugin<ModuleTools> = {\n  name: 'my-plugin',\n\n  setup() {\n    return {\n      // this is hook\n      beforeBuild: () => {\n        console.info('build start');\n      },\n    };\n  },\n};\n"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import { myPlugin } from './plugins/demo';\nexport default {\n  plugins: [myPlugin()],\n};\n"})}),"\n",(0,r.jsxs)(e.h2,{id:"\u63D2\u4EF6\u7C7B\u578B\u5B9A\u4E49",children:["\u63D2\u4EF6\u7C7B\u578B\u5B9A\u4E49",(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#\u63D2\u4EF6\u7C7B\u578B\u5B9A\u4E49",children:"#"})]}),"\n",(0,r.jsxs)(e.p,{children:["\u4F7F\u7528 TypeScript \u65F6\uFF0C\u53EF\u4EE5\u5F15\u5165\u5185\u7F6E\u7684 ",(0,r.jsx)(e.code,{children:"CliPlugin"})," \u548C ",(0,r.jsx)(e.code,{children:"ModuleTools"})," \u7C7B\u578B\uFF0C\u4E3A\u63D2\u4EF6\u63D0\u4F9B\u6B63\u786E\u7684\u7C7B\u578B\u63A8\u5BFC\uFF1A"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-ts",children:"import type { CliPlugin, ModuleTools } from '@modern-js/module-tools';\n\nconst myPlugin: CliPlugin<ModuleTools> = {\n  name: 'my-plugin',\n\n  setup() {\n    const foo = '1';\n\n    return {\n      // this is hook\n      afterBuild: () => {\n        //...\n      },\n    };\n  },\n};\n"})}),"\n",(0,r.jsxs)(e.h2,{id:"\u63D2\u4EF6\u914D\u7F6E\u9879",children:["\u63D2\u4EF6\u914D\u7F6E\u9879",(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#\u63D2\u4EF6\u914D\u7F6E\u9879",children:"#"})]}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"\u5EFA\u8BAE\u5C06\u63D2\u4EF6\u5199\u6210\u51FD\u6570\u7684\u5F62\u5F0F"}),"\uFF0C\u4F7F\u63D2\u4EF6\u80FD\u901A\u8FC7\u51FD\u6570\u5165\u53C2\u6765\u63A5\u6536\u914D\u7F6E\u9879\uFF1A"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-ts",children:"import type { CliPlugin, ModuleTools } from '@modern-js/module-tools';\n\ntype MyPluginOptions = {\n  foo: string;\n};\n\nconst myPlugin = (options: MyPluginOptions): CliPlugin<ModuleTools> => ({\n  name: 'my-plugin',\n\n  setup() {\n    console.log(options.foo);\n  },\n});\n"})})]})}(s=globalThis).__RSPRESS_PAGE_META||(s.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["zh%2Fplugins%2Fguide%2Fplugin-object.mdx"]={toc:[{text:"\u63D2\u4EF6\u7C7B\u578B\u5B9A\u4E49",id:"\u63D2\u4EF6\u7C7B\u578B\u5B9A\u4E49",depth:2},{text:"\u63D2\u4EF6\u914D\u7F6E\u9879",id:"\u63D2\u4EF6\u914D\u7F6E\u9879",depth:2}],title:"\u63D2\u4EF6\u5BF9\u8C61",frontmatter:{sidebar_position:2}};var c=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=Object.assign({},(0,d.useMDXComponents)(),n.components).wrapper;return e?(0,r.jsx)(e,(0,i._)((0,l._)({},n),{children:(0,r.jsx)(t,(0,l._)({},n))})):t(n)}}}]);