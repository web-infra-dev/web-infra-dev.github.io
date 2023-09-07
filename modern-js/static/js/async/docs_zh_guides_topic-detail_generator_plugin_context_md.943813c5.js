(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_guides_topic-detail_generator_plugin_context_md"],{16190:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return o}});var d,i=r("15169"),s=r("43932"),c=r("9880"),t=r("23169");function a(e){var n=Object.assign({h1:"h1",a:"a",p:"p",code:"code",pre:"pre",div:"div",h2:"h2",ul:"ul",li:"li"},(0,t.useMDXComponents)(),e.components);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(n.h1,{id:"context",children:["Context",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#context",children:"#"})]}),"\n",(0,c.jsxs)(n.p,{children:["\u751F\u6210\u5668\u63D2\u4EF6\u9ED8\u8BA4\u4F1A\u5BFC\u51FA\u4E00\u4E2A\u51FD\u6570\uFF0C\u51FD\u6570\u53C2\u6570\u4E3A ",(0,c.jsx)(n.code,{children:"context"}),"\uFF0C\u5728\u6267\u884C\u8FC7\u7A0B\u4E2D ",(0,c.jsx)(n.code,{children:"context"})," \u4F1A\u81EA\u52A8\u6CE8\u5165\u5230\u751F\u6210\u5668\u63D2\u4EF6\u4E2D\u3002"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-ts",meta:'title="src/index.ts"',children:"import { IPluginContext, ForgedAPI } from '@modern-js/generator-plugin';\n\nexport default function (context: IPluginContext) {\n  context.onForged(async (_api: ForgedAPI, _input: Record<string, unknown>) => {\n    /**\n     * Todo\n     */\n  });\n}\n"})}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"context"})," \u63D0\u4F9B\u4E86\u4E24\u7C7B API\uFF0C\u5206\u522B\u7528\u4E8E\u81EA\u5B9A\u4E49 Input \u548C\u5B9A\u4E49\u751F\u6210\u5668\u63D2\u4EF6\u58F0\u660E\u5468\u671F\u903B\u8F91\u3002"]}),"\n",(0,c.jsxs)(n.div,{className:"modern-directive info",children:[(0,c.jsx)(n.div,{className:"modern-directive-title",children:"INFO"}),(0,c.jsx)(n.div,{className:"modern-directive-content",children:(0,c.jsxs)(n.p,{children:["\u4E0B\u9762\u53EA\u5BF9\u90E8\u5206 API \u505A\u7B80\u5355\u793A\u4F8B\u8BB2\u89E3\uFF0C\u5B8C\u6574\u7684 API \u8BF7\u79FB\u6B65 ",(0,c.jsx)(n.a,{href:"/guides/topic-detail/generator/plugin/api/context",children:"\u751F\u6210\u5668\u63D2\u4EF6 API"})," \u67E5\u770B\u3002\n"]})})]}),"\n",(0,c.jsxs)(n.h2,{id:"\u81EA\u5B9A\u4E49-input",children:["\u81EA\u5B9A\u4E49 Input",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u81EA\u5B9A\u4E49-input",children:"#"})]}),"\n",(0,c.jsx)(n.p,{children:"Modern.js Web \u5E94\u7528\u548C Npm \u6A21\u5757\u5DE5\u7A0B\u65B9\u6848\u90FD\u5B58\u5728\u4E00\u4E9B\u9ED8\u8BA4\u7684 Input \u4EA4\u4E92\uFF0C\u4F7F\u7528\u8FD9\u91CC\u7684 API \u53EF\u4EE5\u5BF9\u8FD9\u4E9B Input \u8FDB\u884C\u6DFB\u52A0\u3001\u4FEE\u6539\u3001\u9690\u85CF\u3001\u63D0\u4F9B\u9ED8\u8BA4\u503C\u7B49\u64CD\u4F5C\u3002"}),"\n",(0,c.jsx)(n.p,{children:"\u4F8B\u5982\uFF1A"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:"\u6DFB\u52A0\u95EE\u9898"}),"\n"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-ts",children:"context.addInputBefore('packageManager', {\n  type: 'object',\n  properties: {\n    'username': {\n      type: 'string',\n      title: '\u7528\u6237\u540D',\n    },\n  },\n});\n"})}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:"\u901A\u8FC7\u8BBE\u7F6E config \u9690\u85CF\u95EE\u9898"}),"\n"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-ts",children:"context.setDefaultConfig({ langauge: 'ts' });\n"})}),"\n",(0,c.jsxs)(n.h2,{id:"\u751F\u547D\u5468\u671F",children:["\u751F\u547D\u5468\u671F",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u751F\u547D\u5468\u671F",children:"#"})]}),"\n",(0,c.jsx)(n.p,{children:"\u751F\u6210\u5668\u63D2\u4EF6\u63D0\u4F9B\u4E86\u4E24\u4E2A\u751F\u547D\u5468\u671F\u94A9\u5B50\u51FD\u6570\u7528\u4E8E\u5B9A\u4E49\u751F\u6210\u5668\u63D2\u4EF6\u884C\u4E3A\uFF1A"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:"onForged\uFF1A\u5B8C\u6210\u6587\u4EF6\u64CD\u4F5C\u540E\u7684\u751F\u547D\u5468\u671F\u3002"}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:"afterForged\uFF1AonForged \u94A9\u5B50\u51FD\u6570\u6267\u884C\u5B8C\u6210\u540E\u7684\u751F\u547D\u5468\u671F\u3002"}),"\n"]}),"\n"]}),"\n",(0,c.jsxs)(n.h2,{id:"onforged",children:["onForged",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#onforged",children:"#"})]}),"\n",(0,c.jsx)(n.p,{children:"\u5728 Modern.js \u5DE5\u7A0B\u65B9\u6848\u751F\u6210\u5668\u5B8C\u6210\u6587\u4EF6\u64CD\u4F5C\u4E4B\u540E\u7684\u94A9\u5B50\u51FD\u6570\uFF0C\u7528\u4E8E\u5B8C\u6210\u751F\u6210\u5668\u63D2\u4EF6\u4E2D\u7684\u6587\u4EF6\u64CD\u4F5C\uFF0C\u6BD4\u5982\u6DFB\u52A0\u6A21\u677F\u6587\u4EF6\uFF0C\u8986\u76D6\u73B0\u6709\u6587\u4EF6\uFF0C\u5220\u9664\u73B0\u6709\u6587\u4EF6\u7B49\u3002"}),"\n",(0,c.jsxs)(n.p,{children:["\u5BF9\u4E8E\u6269\u5C55\u7C7B\u578B\u540C\u65F6\u6267\u884C\u591A\u4E2A\u751F\u6210\u5668\u63D2\u4EF6\u65F6\uFF0C\u5C06\u4F1A\u6309\u7167\u58F0\u660E\u987A\u5E8F\u4F9D\u6B21\u6267\u884C\u5BF9\u5E94\u751F\u6210\u5668\u63D2\u4EF6\u7684 ",(0,c.jsx)(n.code,{children:"onForged"})," \u64CD\u4F5C\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"onForged"})," \u51FD\u6570\u53C2\u6570\u4E3A\u4E00\u4E2A\u56DE\u8C03\u51FD\u6570\uFF0C\u53C2\u6570\u4E3A ",(0,c.jsx)(n.code,{children:"api"})," \u548C ",(0,c.jsx)(n.code,{children:"input"}),"\u3002"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-ts",children:"context.onForged(async (api: ForgedAPI, input: Record<string, unknown>) => {\n  const { language } = input;\n  api.addFile({\n      type: FileType.Text,\n      file: `src/index.${language as string}`,\n      templateFile: `index.${language as string}.handlebars`,\n      force: true,\n  });\n})\n"})}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"api"})," \u4E0A\u4F1A\u63D0\u4F9B\u751F\u6210\u5668\u63D2\u4EF6\u652F\u6301\u7684\u6587\u4EF6\u64CD\u4F5C\u76F8\u5173\u65B9\u6CD5\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"input"})," \u4E3A\u5F53\u524D\u7528\u6237\u8F93\u5165\u5185\u5BB9\uFF0C\u5305\u542B ",(0,c.jsx)(n.code,{children:"--config"})," \u53C2\u6570\u5B9A\u4E49\u7684\uFF0C\u9ED8\u8BA4\u5DE5\u7A0B\u65B9\u6848\u4EA4\u4E92\u7684\u53CA\u751F\u6210\u5668\u63D2\u4EF6\u5B9A\u4E49\u7684\u7528\u6237\u8F93\u5165\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:["\u5F53\u9700\u8981\u6DFB\u52A0\u65B0\u7684\u6587\u4EF6\u6A21\u677F\u65F6\uFF0C\u5C06\u6A21\u677F\u6587\u4EF6\u5B9A\u4E49\u5230 ",(0,c.jsx)(n.code,{children:"templates"})," \u76EE\u5F55\uFF0C\u7136\u540E\u901A\u8FC7\u4E0A\u8FF0 ",(0,c.jsx)(n.code,{children:"api"})," \u4E0A\u65B9\u6CD5\u8FDB\u884C\u64CD\u4F5C\u5373\u53EF\uFF0C\u751F\u6210\u5668\u63D2\u4EF6\u9ED8\u8BA4\u5BF9 ",(0,c.jsx)(n.code,{children:"templates"})," \u76EE\u5F55\u6587\u4EF6\u8FDB\u884C\u64CD\u4F5C\uFF0C\u65E0\u9700\u518D\u58F0\u660E ",(0,c.jsx)(n.code,{children:"templates"})," \u8DEF\u5F84\u3002"]}),"\n",(0,c.jsxs)(n.h2,{id:"afterforged",children:["afterForged",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#afterforged",children:"#"})]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"onForged"})," \u94A9\u5B50\u51FD\u6570\u6267\u884C\u5B8C\u6210\u540E\u6267\u884C\uFF0C\u8FD9\u91CC\u4E3B\u8981\u7528\u4E8E\u8FDB\u884C\u5B89\u88C5\u4F9D\u8D56\uFF0CGit \u64CD\u4F5C\u7B49\u3002"]}),"\n",(0,c.jsx)(n.p,{children:"\u9ED8\u8BA4 Modern.js \u5DE5\u7A0B\u65B9\u6848\u5728\u5B8C\u6210\u6587\u4EF6\u64CD\u4F5C\u540E\u4F1A\u9ED8\u8BA4\u6267\u884C\u5B89\u88C5\u4F9D\u8D56\u53CA Git \u521D\u59CB\u5316\uFF0CGit \u521D\u6B21\u63D0\u4EA4\u7B49\uFF0C\u8BE5\u94A9\u5B50\u51FD\u6570\u53EF\u4EE5\u4E0D\u4F7F\u7528\u3002"}),"\n",(0,c.jsx)(n.p,{children:"\u5BF9\u4E8E\u81EA\u5B9A\u4E49\u7684\u751F\u6210\u5668\u63D2\u4EF6\u8FD8\u652F\u6301 custom \u7C7B\u578B\uFF0C\u8BE5\u7C7B\u578B\u53EA\u63D0\u4F9B\u4E86\u5C11\u91CF\u6700\u4F73\u5B9E\u8DF5\u7684\u9879\u76EE\u914D\u7F6E\uFF0C\u5219\u9700\u8981\u5728\u8BE5\u94A9\u5B50\u51FD\u6570\u4E2D\u5B8C\u6210\u5B89\u88C5\u4F9D\u8D56\u548C Git \u521D\u59CB\u5316\u7B49\u64CD\u4F5C\u3002"}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"afterForged"})," \u51FD\u6570\u53C2\u6570\u4E5F\u4E3A\u4E00\u4E2A\u56DE\u8C03\u51FD\u6570\uFF0C\u53C2\u6570\u4E3A ",(0,c.jsx)(n.code,{children:"api"})," \u548C ",(0,c.jsx)(n.code,{children:"input"}),"\u3002"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-ts",children:"  context.afterForged(\n    async (api: AfterForgedAPI, input: Record<string, unknown>) => {\n      const { packageManager } = input;\n      console.info('packageManager:', packageManager);\n      await api.install();\n    },\n  );\n"})})]})}(d=globalThis).__RSPRESS_PAGE_META||(d.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["zh%2Fguides%2Ftopic-detail%2Fgenerator%2Fplugin%2Fcontext.md"]={toc:[{text:"\u81EA\u5B9A\u4E49 Input",id:"\u81EA\u5B9A\u4E49-input",depth:2},{text:"\u751F\u547D\u5468\u671F",id:"\u751F\u547D\u5468\u671F",depth:2},{text:"onForged",id:"onforged",depth:2},{text:"afterForged",id:"afterforged",depth:2}],title:"Context",frontmatter:{sidebar_position:4}};var o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,t.useMDXComponents)(),e.components).wrapper;return n?(0,c.jsx)(n,(0,s._)((0,i._)({},e),{children:(0,c.jsx)(a,(0,i._)({},e))})):a(e)}}}]);