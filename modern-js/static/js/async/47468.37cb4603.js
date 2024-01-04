/*! For license information please see 47468.37cb4603.js.LICENSE.txt */
(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["47468"],{3472:function(n,e,r){"use strict";r.r(e),r.d(e,{default:function(){return c}});var l=r("9880"),i=r("23169");function d(n){let e=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",pre:"pre",code:"code",h3:"h3",div:"div",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",ul:"ul",li:"li"},(0,i.useMDXComponents)(),n.components);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(e.h1,{id:"hook-\u6A21\u578B",children:["Hook \u6A21\u578B",(0,l.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#hook-\u6A21\u578B",children:"#"})]}),"\n",(0,l.jsx)(e.p,{children:"\u9996\u5148\u4ECB\u7ECD\u4E00\u4E0B Modern.js \u7684\u57FA\u7840\u7684\u63D2\u4EF6\u7CFB\u7EDF\u4E2D\u7684\u4E00\u4E9B\u5185\u5BB9\uFF0C\u5305\u62EC Hook \u6A21\u578B\u7684\u5DE5\u4F5C\u65B9\u5F0F\u3001\u5404\u4E2A Hook \u6A21\u578B\u7684\u8FD0\u884C\u6A21\u5F0F\u3001Manager \u7684\u5DE5\u4F5C\u6A21\u5F0F\u3002"}),"\n",(0,l.jsx)(e.p,{children:"\u6BCF\u79CD Hook \u6A21\u578B\u90FD\u662F\u72EC\u7ACB\u7684\uFF0C\u53EF\u4EE5\u72EC\u7ACB\u7BA1\u7406\u8FD0\u884C\u51FD\u6570\u3002"}),"\n",(0,l.jsxs)(e.h2,{id:"\u57FA\u7840\u5DE5\u4F5C\u65B9\u5F0F",children:["\u57FA\u7840\u5DE5\u4F5C\u65B9\u5F0F",(0,l.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#\u57FA\u7840\u5DE5\u4F5C\u65B9\u5F0F",children:"#"})]}),"\n",(0,l.jsx)(e.p,{children:"\u5148\u4EE5 Pipeline \u4E3A\u4F8B\uFF0C\u7B80\u5355\u4ECB\u7ECD\u4E00\u4E0B Hook \u6A21\u578B\u7684\u5DE5\u4F5C\u65B9\u5F0F\u3002\u5148\u770B\u4E00\u4E2A\u7B80\u5355\u7684\u4F8B\u5B50\uFF1A"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-ts",children:"import { createPipeline } from '@modern-js/plugin';\n\n// 1. \u521B\u5EFA\nconst pipeline = createPipeline<number, number>();\n\n// 2. \u6DFB\u52A0\u51FD\u6570\npipeline.use((count, next) => {\n  return next(count + 1);\n});\npipeline.use((count, next) => {\n  return count * 2;\n});\n\n// 3. \u6267\u884C\npipeline.run(1); // 4\npipeline.run(5); // 12\n"})}),"\n",(0,l.jsxs)(e.p,{children:["\u5728\u8FD9\u4E2A\u4F8B\u5B50\u4E2D\uFF0C\u521B\u5EFA\u4E86\u4E00\u4E2A ",(0,l.jsx)(e.code,{children:"Pipeline<number, number>"})," \u7C7B\u578B\u7684 Pipeline\uFF08L3\uFF09\uFF0C\u8FD9\u610F\u5473\u7740\u8FD0\u884C\u5B83\u7684\u65F6\u5019\uFF0C\u4F60\u9700\u8981\u4F20\u5165\u4E00\u4E2A ",(0,l.jsx)(e.code,{children:"number"}),"\uFF0C\u7136\u540E\u4F60\u4F1A\u5F97\u5230\u4E00\u4E2A ",(0,l.jsx)(e.code,{children:"number"}),"\uFF0C\u800C\u8FD9\u4E2A\u6A21\u578B\u7BA1\u7406\u7684\u51FD\u6570\u7684\u7C7B\u578B\u662F\uFF1A"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-ts",children:"(count: number, next: (nextCount: number) => number) => number;\n"})}),"\n",(0,l.jsxs)(e.p,{children:["\u8FD9\u91CC\u5168\u662F ",(0,l.jsx)(e.code,{children:"number"}),"\uFF0C\u662F\u56E0\u4E3A\u6211\u4EEC\u521B\u5EFA\u7684\u662F ",(0,l.jsx)(e.code,{children:"Pipeline<number, number>"})," \uFF0C\u5982\u679C\u521B\u5EFA\u7684\u662F ",(0,l.jsx)(e.code,{children:"Pipeline<number, string>"})," \u5219\u8FD0\u884C\u5B83\u5165\u53C2\u662F ",(0,l.jsx)(e.code,{children:"number"}),"\uFF0C\u8FD4\u56DE\u503C\u662F ",(0,l.jsx)(e.code,{children:"string"}),"\uFF0C\u5BF9\u5E94\u7BA1\u7406\u7684\u51FD\u6570\u7684\u7C7B\u578B\u4F1A\u662F\uFF1A"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-ts",children:"(count: number, next: (nextCount: number) => string) => string;\n"})}),"\n",(0,l.jsxs)(e.p,{children:["\u521B\u5EFA\u597D Pipeline \u4E4B\u540E\uFF0C\u53EF\u4EE5\u901A\u8FC7 ",(0,l.jsx)(e.code,{children:"use"})," \u6DFB\u52A0\u51FD\u6570\uFF08L5\u3001L8\uFF09\uFF0C\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u6DFB\u52A0\u7684\u987A\u5E8F\u5C31\u662F\u4ED6\u4EEC\u9ED8\u8BA4\u7684\u8FD0\u884C\u987A\u5E8F\uFF0C\u5728\u8FD9\u4E9B\u51FD\u6570\u4E2D\uFF0C\u4F60\u53EF\u4EE5\u5BF9 ",(0,l.jsx)(e.code,{children:"count"})," \u8FDB\u884C\u5904\u7406\u3001\u8FD4\u56DE\u4E00\u4E2A\u503C\uFF0C\u5982\u679C\u4F60\u8C03\u7528\u4E86 ",(0,l.jsx)(e.code,{children:"next"})," \u51FD\u6570\uFF0C\u5219\u4F1A\u8FD0\u884C\u540E\u9762\u7684\u51FD\u6570\uFF0C\u5373\u5982\u679C\u4F60\u6DFB\u52A0\u4E86\u4E09\u4E2A\u51FD\u6570\uFF1A ",(0,l.jsx)(e.code,{children:"A"}),"\u3001",(0,l.jsx)(e.code,{children:"B"}),"\u3001",(0,l.jsx)(e.code,{children:"C"}),"\uFF0C\u5982\u679C\u4F60\u5728 ",(0,l.jsx)(e.code,{children:"A"})," \u4E2D\u8C03\u7528 ",(0,l.jsx)(e.code,{children:"next"})," \u90A3\u4E48\u5C31\u4F1A\u8FD0\u884C ",(0,l.jsx)(e.code,{children:"B"}),"\uFF0C\u540C\u6837\u7684\uFF0C\u5982\u679C\u4F60\u5728 ",(0,l.jsx)(e.code,{children:"B"})," \u4E2D\u8C03\u7528 ",(0,l.jsx)(e.code,{children:"next"})," \u90A3\u4E48\u5C31\u4F1A\u8FD0\u884C ",(0,l.jsx)(e.code,{children:"C"}),"\uFF0C\u800C\u5728\u4E0A\u9762\u7684\u4F8B\u5B50\u4E2D\uFF0C\u6DFB\u52A0\u7684\u7B2C\u4E00\u4E2A\u51FD\u6570\uFF08L5\uFF09\u5C31\u8FD0\u884C\u4E86 ",(0,l.jsx)(e.code,{children:"next"}),"\uFF0C\u6240\u4EE5\u8FD9\u91CC\u5C31\u4F1A\u8FD0\u884C\u7B2C\u4E8C\u4E2A\u51FD\u6570\uFF08L8\uFF09\uFF0C\u5E76\u4E14\u8FD0\u884C\u7684\u8FD4\u56DE\u503C\u5C31\u662F \u7B2C\u4E8C\u4E2A\u51FD\u6570\u7684\u8FD4\u56DE\u503C\uFF0C\u5982\u679C\u5728\u7B2C\u4E00\u4E2A\u51FD\u6570\u4E2D\u6CA1\u6709\u8C03\u7528 ",(0,l.jsx)(e.code,{children:"next"}),"\uFF0C\u76F4\u63A5\u8FD4\u56DE\uFF0C\u4F8B\u5982\uFF1A"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-ts",children:"import { createPipeline } from '@modern-js/plugin';\n\n// 1. \u521B\u5EFA\nconst pipeline = createPipeline<number, number>();\n\n// 2. \u6DFB\u52A0\u51FD\u6570\npipeline.use((count, next) => {\n  return count + 1;\n});\npipeline.use((count, next) => {\n  return count * 2;\n});\n\n// 3. \u6267\u884C\npipeline.run(1); // 2\npipeline.run(5); // 6\n"})}),"\n",(0,l.jsx)(e.p,{children:"\u5219\u5728\u8FD0\u884C Pipeline \u7684\u65F6\u5019\u5C31\u4E0D\u4F1A\u8FD0\u884C\u7B2C\u4E8C\u4E2A\u51FD\u6570\uFF0C\u90A3\u4E48 Pipeline \u7684\u8FD0\u884C\u7ED3\u679C\u5219\u5C31\u662F\u7B2C\u4E00\u4E2A\u51FD\u6570\u7684\u8FD4\u56DE\u503C\u3002"}),"\n",(0,l.jsxs)(e.p,{children:["\u6700\u540E\uFF0C\u8FD0\u884C Pipeline \u7684\u65B9\u5F0F\u4E5F\u663E\u800C\u6613\u89C1\u5C31\u662F\u8C03\u7528 ",(0,l.jsx)(e.code,{children:"pipeline.run"})," \u3002"]}),"\n",(0,l.jsxs)(e.h2,{id:"\u4E0D\u540C-hook-\u6A21\u578B\u7684\u533A\u522B",children:["\u4E0D\u540C Hook \u6A21\u578B\u7684\u533A\u522B",(0,l.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#\u4E0D\u540C-hook-\u6A21\u578B\u7684\u533A\u522B",children:"#"})]}),"\n",(0,l.jsx)(e.p,{children:"\u4E0A\u9762\u8FD9\u90E8\u5206\u5C31\u662F Pipeline \u6574\u4F53\u7684\u4E00\u4E2A\u5DE5\u4F5C\u6A21\u5F0F\u7684\u63CF\u8FF0\uFF0C\u5176\u4ED6\u7684 Hook \u6A21\u578B\u7684\u5DE5\u4F5C\u6A21\u5F0F\u57FA\u672C\u4E5F\u662F\u8FD9\u6837\uFF0C\u4E3B\u8981\u7684\u533A\u522B\u70B9\uFF0C\u662F\u51FD\u6570\u7C7B\u578B\u3001\u6267\u884C\u987A\u5E8F\uFF0C\u53C2\u6570\u3002"}),"\n",(0,l.jsxs)(e.h3,{id:"pipeline",children:["Pipeline",(0,l.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#pipeline",children:"#"})]}),"\n",(0,l.jsx)(e.p,{children:"\u4E0A\u9762\u7684\u4F8B\u5B50\u5C31\u662F\u4EE5 Pipeline \u4E3A\u4F8B\u63CF\u8FF0\u7684\uFF0C\u8FD9\u91CC\u5C31\u4E0D\u8D58\u8FF0\u4E86\uFF0C\u5728 Pipeline \u8FD9\u4E2A\u5927\u7C7B\u4E2D\uFF0C\u63D0\u4F9B\u4E86\u4E24\u4E2A\u5C0F\u7C7B\uFF1ASync \u548C Async\uFF0C\u987E\u540D\u601D\u4E49\uFF0C\u5B83\u4EEC\u7684\u533A\u522B\u5C31\u662F\u7BA1\u7406\u7684\u51FD\u6570\u7684\u7C7B\u578B\u662F Sync \u7684\u8FD8\u662F Async \u7684\u3002"}),"\n",(0,l.jsxs)(e.div,{className:"rspress-directive info",children:[(0,l.jsx)(e.div,{className:"rspress-directive-title",children:"INFO"}),(0,l.jsxs)(e.div,{className:"rspress-directive-content",children:[(0,l.jsxs)(e.p,{children:["\u5F53 Pipeline \u4E2D\u6CA1\u6709\u51FD\u6570\u6216\u8005\u6240\u6709\u51FD\u6570\u90FD\u8C03\u7528\u4E86 ",(0,l.jsx)(e.code,{children:"next"})," \u51FD\u6570\uFF0C\u5219\u5C31\u9700\u8981\u5728\u8FD0\u884C\u7684\u65F6\u5019\u63D0\u4F9B\uFF1A"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-ts",children:"pipeline(\n  {},\n  {\n    onLast: () => {\n      // do something\n    },\n  },\n);\n"})}),"\n"]})]}),"\n",(0,l.jsxs)(e.h3,{id:"waterfall",children:["Waterfall",(0,l.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#waterfall",children:"#"})]}),"\n",(0,l.jsx)(e.p,{children:"\u8FD9\u79CD\u6A21\u578B\u987E\u540D\u601D\u4E49\uFF0C\u4ED6\u7684\u7279\u70B9\u5C31\u662F\u53C2\u6570\u7684\u987A\u5E8F\u9012\u4EA4\uFF0C\u5373\u524D\u9762\u4E00\u4E2A\u51FD\u6570\u7684\u8FD4\u56DE\u503C\uFF0C\u5C06\u4F1A\u6210\u4E3A\u4E0B\u4E00\u4E2A\u51FD\u6570\u7684\u5165\u53C2\uFF0C\u6211\u4EEC\u4E5F\u7528\u4E00\u4E2A\u4F8B\u5B50\u6765\u770B\u4E00\u4E0B\uFF1A"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-ts",children:"import { createWaterfall } from '@modern-js/plugin';\n\n// 1. \u521B\u5EFA\nconst waterfall = createWaterfall<number>();\n\n// 2. \u6DFB\u52A0\u51FD\u6570\nwaterfall.use(count => {\n  return count + 1;\n});\nwaterfall.use(count => {\n  return count * 2;\n});\n\n// 3. \u6267\u884C\nwaterfall.run(1); // 4\nwaterfall.run(5); // 12\n"})}),"\n",(0,l.jsxs)(e.p,{children:["\u8FD9\u4E2A\u4F8B\u5B50\u4E2D\uFF0C\u521B\u5EFA\u4E86\u4E00\u4E2A\u7C7B\u578B\u4E3A ",(0,l.jsx)(e.code,{children:"Waterfall<number> "}),"\uFF0C\u5373\u8FD9\u4E2A\u6A21\u578B\u6267\u884C\u7684\u5165\u53C2\u548C\u8FD4\u56DE\u503C\u662F\u4E00\u6837\u7684\uFF0C\u8FD9\u4E2A\u4F8B\u5B50\u4E2D\u90FD\u662F ",(0,l.jsx)(e.code,{children:"number"}),"\uFF0C\u800C\u5B83\u7BA1\u7406\u7684\u51FD\u6570\u7684\u7C7B\u578B\u662F\uFF1A"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-ts",children:"(count: number) => number;\n"})}),"\n",(0,l.jsx)(e.p,{children:"\u53EF\u80FD\u7B80\u5355\u770B\u8FD9\u4E2A\u4F8B\u5B50\u611F\u89C9\u548C\u4E0A\u9762\u7684 Pipeline \u529F\u80FD\u4E00\u6837\uFF0C\u90A3\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u9996\u5148\u8FD9\u91CC Waterfall \u7BA1\u7406\u7684\u51FD\u6570\u6CA1\u6709 next \u51FD\u6570\u4F5C\u4E3A\u7B2C\u4E8C\u4E2A\u53C2\u6570\uFF0C\u6240\u4EE5\u5B83\u65E0\u6CD5\u5728\u51FD\u6570\u5185\u90E8\u901A\u8FC7\u8C03\u7528 next \u6765\u5148\u8FD0\u884C\u4E4B\u540E\u6DFB\u52A0\u7684\u51FD\u6570\uFF0C\u4ECE\u800C\u4FEE\u6539\u8FD0\u884C\u7684\u987A\u5E8F\uFF0C\u5176\u6B21\u8FD9\u91CC\u7684\u8FD0\u884C\u7684\u5165\u53C2\u7684\u7C7B\u578B\u548C\u8FD4\u56DE\u503C\u7684\u7C7B\u578B\u5FC5\u987B\u662F\u4E00\u6837\u7684\uFF08\u800C Pipeline \u53EF\u4EE5\u4E0D\u4E00\u6837\uFF09\u3002"}),"\n",(0,l.jsx)(e.p,{children:"\u540C\u6837\u7684\uFF0C\u5728 Waterfall \u8FD9\u4E2A\u5927\u7C7B\u4E2D\uFF0C\u4E5F\u63D0\u4F9B\u4E86 Sync \u548C Async \u7684\u5C0F\u7C7B\uFF0C\u5206\u522B\u5BF9\u5E94 Sync \u548C Async \u7684\u51FD\u6570\u3002"}),"\n",(0,l.jsxs)(e.h3,{id:"workflow",children:["Workflow",(0,l.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#workflow",children:"#"})]}),"\n",(0,l.jsx)(e.p,{children:"\u8FD9\u79CD Hook \u6A21\u578B\u4E0E\u4E0A\u9762\u4E24\u79CD Hook \u6A21\u578B\u7684\u533A\u522B\u662F\uFF0C\u6CA1\u6709\u90A3\u4E48\u5F3A\u7684\u524D\u540E\u53C2\u6570\u8FD4\u56DE\u503C\u9012\u4EA4\u7684\u6982\u5FF5\uFF0C\u5728\u8FD9\u4E2A\u6A21\u578B\u4E2D\uFF0C\u6BCF\u4E2A\u51FD\u6570\u90FD\u662F\u57FA\u4E8E\u540C\u6837\u7684\u5165\u53C2\uFF0C\u76F8\u5BF9\u72EC\u7ACB\u8FD0\u884C\u7684\uFF0C\u901A\u8FC7\u4E00\u4E2A\u4F8B\u5B50\u7B80\u5355\u770B\u4E00\u4E0B\uFF1A"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-ts",children:"import { createWorkflow } from '@modern-js/plugin';\n\n// 1. \u521B\u5EFA\nconst workflow = createWorkflow<number, number>();\n\n// 2. \u6DFB\u52A0\u51FD\u6570\nworkflow.use(count => {\n  return count + 1;\n});\nworkflow.use(count => {\n  return count * 2;\n});\n\n// 3. \u6267\u884C\nworkflow.run(1); // [2, 2]\nworkflow.run(5); // [6, 10]\n"})}),"\n",(0,l.jsx)(e.p,{children:"\u5728\u8FD9\u4E2A\u4F8B\u5B50\u4E2D\uFF0C\u6DFB\u52A0\u4E86\u4E24\u4E2A\u51FD\u6570\uFF0C\u6240\u4EE5\u8FD0\u884C\u7684\u7ED3\u679C\u5C31\u662F\u8FD9\u4E24\u4E2A\u51FD\u6570\u8FD0\u884C\u7684\u7ED3\u679C\u5F62\u6210\u7684\u4E00\u4E2A\u6570\u7EC4\u3002"}),"\n",(0,l.jsxs)(e.p,{children:["\u867D\u7136\u8FD9\u79CD\u6A21\u578B\u4E2D\u6CA1\u6709\u90A3\u4E48\u5F3A\u7684\u524D\u540E\u53C2\u6570\u8FD4\u56DE\u503C\u9012\u4EA4\u7684\u6982\u5FF5\uFF0C\u4F46\u4F9D\u65E7\u6709\u6267\u884C\u987A\u5E8F\u7684\u533A\u522B\uFF0C\u5728 Workflow \u8FD9\u4E2A\u5927\u7C7B\u4E2D\uFF0C\u63D0\u4F9B\u4E86\u4E09\u4E2A\u5C0F\u7C7B\uFF1ASync\u3001Async\u3001Parallel\u3002\u4ED6\u4EEC\u4E4B\u95F4\u7684\u533A\u522B\u5C31\u662F\u51FD\u6570\u7684\u6267\u884C\u987A\u5E8F\uFF0C\u5F53\u7136\u9ED8\u8BA4\u7684\u90FD\u662F\u6309\u7167\u6DFB\u52A0\u987A\u5E8F\u6267\u884C\uFF0C\u800C\u5728 Sync\u3001Async \u5219\u662F\u5F3A\u5236\u6309\u7167\u6DFB\u52A0\u987A\u5E8F\u6267\u884C\uFF0C\u800C Parallel \u5219\u662F Async \u6A21\u5F0F\u7684\u4E00\u4E2A\u53D8\u4F53\uFF0C\u5373\u5B83\u4F7F\u7528\u7684\u662F ",(0,l.jsx)(e.code,{children:"Promise.all"})," \u6765\u6267\u884C\u6240\u6709\u51FD\u6570\uFF0C\u800C Async \u5219\u4F1A ",(0,l.jsx)(e.code,{children:"await"})," \u524D\u9762\u7684\u51FD\u6570\u8FD0\u884C\u7ED3\u675F\u3002"]}),"\n",(0,l.jsxs)(e.h2,{id:"hook-\u6A21\u578B\u5BF9\u6BD4",children:["Hook \u6A21\u578B\u5BF9\u6BD4",(0,l.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#hook-\u6A21\u578B\u5BF9\u6BD4",children:"#"})]}),"\n",(0,l.jsx)("div",{style:{width:"100%",overflowX:"scroll"},children:(0,l.jsx)("div",{style:{width:"150%"},children:(0,l.jsxs)(e.table,{children:["\n",(0,l.jsxs)(e.thead,{children:["\n",(0,l.jsxs)(e.tr,{children:["\n",(0,l.jsx)(e.th,{}),"\n",(0,l.jsx)(e.th,{children:"\u51FD\u6570\u7C7B\u578B"}),"\n",(0,l.jsx)(e.th,{children:"\u6267\u884C\u987A\u5E8F"}),"\n",(0,l.jsx)(e.th,{children:"\u51FD\u6570\u53C2\u6570\u6765\u6E90"}),"\n",(0,l.jsx)(e.th,{children:"\u6267\u884C\u8FD4\u56DE\u503C\u6765\u6E90"}),"\n",(0,l.jsx)(e.th,{children:"\u503E\u5411\u5904\u7406\u7684\u4EFB\u52A1\u7C7B\u578B"}),"\n",(0,l.jsx)(e.th,{children:"\u51FD\u6570 TS \u7C7B\u578B"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(e.tbody,{children:["\n",(0,l.jsxs)(e.tr,{children:["\n",(0,l.jsx)(e.td,{children:"Pipeline"}),"\n",(0,l.jsx)(e.td,{children:"Sync"}),"\n",(0,l.jsx)(e.td,{children:"\u9ED8\u8BA4\u6267\u884C\u7B2C\u4E00\u4E2A\u6DFB\u52A0\u7684\u51FD\u6570\uFF0C\u53EF\u4EE5\u901A\u8FC7 next \u8C03\u7528\u4E4B\u540E\u6DFB\u52A0\u7684\u51FD\u6570"}),"\n",(0,l.jsx)(e.td,{children:"\u7B2C\u4E00\u4E2A\u51FD\u6570\u7684\u53C2\u6570\u6765\u6E90\u662F\u8FD0\u884C\u7684\u53C2\u6570\uFF0C\u4E4B\u540E\u7684\u51FD\u6570\u7684\u53C2\u6570\u6765\u6E90\u662F\uFF0C\u524D\u4E00\u4E2A\u51FD\u6570\u5411 next \u51FD\u6570\u4F20\u9012\u7684\u53C2\u6570"}),"\n",(0,l.jsx)(e.td,{children:"\u7B2C\u4E00\u4E2A\u51FD\u6570\u7684\u8FD4\u56DE\u503C"}),"\n",(0,l.jsx)(e.td,{children:(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{children:"\u9700\u8981\u4FEE\u6539\u521D\u59CB\u53C2\u6570"}),(0,l.jsx)("li",{children:"\u9700\u8981\u4FEE\u6539\u51FD\u6570\u6267\u884C\u987A\u5E8F"})]})}),"\n",(0,l.jsx)(e.td,{children:(0,l.jsx)(e.code,{children:"(input: I, next: Next<I, O>) => O"})}),"\n"]}),"\n",(0,l.jsxs)(e.tr,{children:["\n",(0,l.jsx)(e.td,{children:"AsyncPipeline"}),"\n",(0,l.jsx)(e.td,{children:"Sync/Async"}),"\n",(0,l.jsx)(e.td,{children:"\u9ED8\u8BA4\u6267\u884C\u7B2C\u4E00\u4E2A\u6DFB\u52A0\u7684\u51FD\u6570\uFF0C\u53EF\u4EE5\u901A\u8FC7 next \u8C03\u7528\u4E4B\u540E\u6DFB\u52A0\u7684\u51FD\u6570"}),"\n",(0,l.jsx)(e.td,{children:"\u7B2C\u4E00\u4E2A\u51FD\u6570\u7684\u53C2\u6570\u6765\u6E90\u662F\u8FD0\u884C\u7684\u53C2\u6570\uFF0C\u4E4B\u540E\u7684\u51FD\u6570\u7684\u53C2\u6570\u6765\u6E90\u662F\uFF0C\u524D\u4E00\u4E2A\u51FD\u6570\u5411 next \u51FD\u6570\u4F20\u9012\u7684\u53C2\u6570"}),"\n",(0,l.jsx)(e.td,{children:"\u7B2C\u4E00\u4E2A\u51FD\u6570\u7684\u8FD4\u56DE\u503C"}),"\n",(0,l.jsx)(e.td,{children:(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{children:"\u9700\u8981\u4FEE\u6539\u521D\u59CB\u53C2\u6570"}),(0,l.jsx)("li",{children:"\u9700\u8981\u4FEE\u6539\u51FD\u6570\u6267\u884C\u987A\u5E8F"})]})}),"\n",(0,l.jsx)(e.td,{children:(0,l.jsx)(e.code,{children:"(input: I, next: AsyncNext<I, O>) => O \uFF5C Promise<O>"})}),"\n"]}),"\n",(0,l.jsxs)(e.tr,{children:["\n",(0,l.jsx)(e.td,{children:"WaterFall"}),"\n",(0,l.jsx)(e.td,{children:"Sync"}),"\n",(0,l.jsx)(e.td,{children:"\u4E00\u76F4\u987A\u5E8F\u6267\u884C"}),"\n",(0,l.jsx)(e.td,{children:"\u7B2C\u4E00\u4E2A\u51FD\u6570\u7684\u53C2\u6570\u6765\u6E90\u662F\u8FD0\u884C\u7684\u53C2\u6570\uFF0C\u4E4B\u540E\u7684\u51FD\u6570\u7684\u53C2\u6570\u6765\u6E90\u662F\uFF0C\u524D\u4E00\u4E2A\u51FD\u6570\u7684\u8FD4\u56DE\u503C"}),"\n",(0,l.jsx)(e.td,{children:"\u6700\u540E\u4E00\u4E2A\u51FD\u6570\u7684\u8FD4\u56DE\u503C"}),"\n",(0,l.jsx)(e.td,{children:(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{children:"\u9700\u8981\u4FEE\u6539\u521D\u59CB\u53C2\u6570"}),(0,l.jsx)("li",{children:"\u4E0D\u9700\u8981\u4FEE\u6539\u51FD\u6570\u6267\u884C\u987A\u5E8F"})]})}),"\n",(0,l.jsx)(e.td,{children:(0,l.jsx)(e.code,{children:"(I: I) => I"})}),"\n"]}),"\n",(0,l.jsxs)(e.tr,{children:["\n",(0,l.jsx)(e.td,{children:"AsyncWaterFall"}),"\n",(0,l.jsx)(e.td,{children:"Sync/Async"}),"\n",(0,l.jsx)(e.td,{children:"\u4E00\u76F4\u987A\u5E8F\u6267\u884C"}),"\n",(0,l.jsx)(e.td,{children:"\u7B2C\u4E00\u4E2A\u51FD\u6570\u7684\u53C2\u6570\u6765\u6E90\u662F\u8FD0\u884C\u7684\u53C2\u6570\uFF0C\u4E4B\u540E\u7684\u51FD\u6570\u7684\u53C2\u6570\u6765\u6E90\u662F\uFF0C\u524D\u4E00\u4E2A\u51FD\u6570\u7684\u8FD4\u56DE\u503C"}),"\n",(0,l.jsx)(e.td,{children:"\u6700\u540E\u4E00\u4E2A\u51FD\u6570\u7684\u8FD4\u56DE\u503C"}),"\n",(0,l.jsx)(e.td,{children:(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{children:"\u9700\u8981\u4FEE\u6539\u521D\u59CB\u53C2\u6570"}),(0,l.jsx)("li",{children:"\u4E0D\u9700\u8981\u4FEE\u6539\u51FD\u6570\u6267\u884C\u987A\u5E8F"})]})}),"\n",(0,l.jsx)(e.td,{children:(0,l.jsx)(e.code,{children:"(I: I) => I \uFF5C Promise<I>"})}),"\n"]}),"\n",(0,l.jsxs)(e.tr,{children:["\n",(0,l.jsx)(e.td,{children:"Workflow"}),"\n",(0,l.jsx)(e.td,{children:"Sync"}),"\n",(0,l.jsx)(e.td,{children:"\u4E00\u76F4\u987A\u5E8F\u6267\u884C"}),"\n",(0,l.jsx)(e.td,{children:"\u6240\u6709\u51FD\u6570\u7684\u5165\u53C2\u90FD\u662F\u8FD0\u884C\u7684\u53C2\u6570"}),"\n",(0,l.jsx)(e.td,{children:"\u6240\u6709\u51FD\u6570\u8FD4\u56DE\u503C\u5F62\u6210\u7684\u6570\u7EC4"}),"\n",(0,l.jsx)(e.td,{children:(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{children:"\u4E0D\u9700\u8981\u4FEE\u6539\u521D\u59CB\u53C2\u6570"}),(0,l.jsx)("li",{children:"\u4E0D\u9700\u8981\u4FEE\u6539\u51FD\u6570\u6267\u884C\u987A\u5E8F"})]})}),"\n",(0,l.jsx)(e.td,{children:(0,l.jsx)(e.code,{children:"(I: I) => O"})}),"\n"]}),"\n",(0,l.jsxs)(e.tr,{children:["\n",(0,l.jsx)(e.td,{children:"AsyncWorkflow"}),"\n",(0,l.jsx)(e.td,{children:"Sync/Async"}),"\n",(0,l.jsx)(e.td,{children:"\u4E00\u76F4\u987A\u5E8F\u6267\u884C"}),"\n",(0,l.jsx)(e.td,{children:"\u6240\u6709\u51FD\u6570\u7684\u5165\u53C2\u90FD\u662F\u8FD0\u884C\u7684\u53C2\u6570"}),"\n",(0,l.jsx)(e.td,{children:"\u6240\u6709\u51FD\u6570\u8FD4\u56DE\u503C\u5F62\u6210\u7684\u6570\u7EC4"}),"\n",(0,l.jsx)(e.td,{children:(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{children:"\u4E0D\u9700\u8981\u4FEE\u6539\u521D\u59CB\u53C2\u6570"}),(0,l.jsx)("li",{children:"\u4E0D\u9700\u8981\u4FEE\u6539\u51FD\u6570\u6267\u884C\u987A\u5E8F"})]})}),"\n",(0,l.jsx)(e.td,{children:(0,l.jsx)(e.code,{children:"(I: I) => O \uFF5C Promise<O>"})}),"\n"]}),"\n",(0,l.jsxs)(e.tr,{children:["\n",(0,l.jsx)(e.td,{children:"ParallelWorkFlow"}),"\n",(0,l.jsx)(e.td,{children:"Sync/Async"}),"\n",(0,l.jsx)(e.td,{children:"\u5F02\u6B65\u6267\u884C"}),"\n",(0,l.jsx)(e.td,{children:"\u6240\u6709\u51FD\u6570\u7684\u5165\u53C2\u90FD\u662F\u8FD0\u884C\u7684\u53C2\u6570"}),"\n",(0,l.jsx)(e.td,{children:"\u6240\u6709\u51FD\u6570\u8FD4\u56DE\u503C\u5F62\u6210\u7684\u6570\u7EC4"}),"\n",(0,l.jsx)(e.td,{children:(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{children:"\u4E0D\u9700\u8981\u4FEE\u6539\u521D\u59CB\u53C2\u6570"}),(0,l.jsx)("li",{children:"\u4E0D\u5173\u5FC3\u6267\u884C\u987A\u5E8F"})]})}),"\n",(0,l.jsx)(e.td,{children:(0,l.jsx)(e.code,{children:"(I: I) => O \uFF5C Promise<O>"})}),"\n"]}),"\n"]}),"\n"]})})}),"\n",(0,l.jsx)(e.p,{children:"Workflow\u3001Waterfall \u5176\u5B9E\u90FD\u662F Pipeline \u7684\u53D8\u4F53\uFF0CPipeline \u53EF\u4EE5\u901A\u8FC7\u7279\u5B9A\u7684\u5199\u6CD5\u6765\u5B9E\u73B0 Workflow\u3001Waterfall\uFF0C\u4F46\u90FD\u8F83\u4E3A\u9EBB\u70E6\uFF0C\u6709\u8BB8\u591A\u9690\u5F62\u7684\u7EA6\u5B9A\u3002\u4E3A\u4E86\u65B9\u4FBF\u4F7F\u7528\uFF0C\u63D0\u4F9B\u4E86\u8FD9\u4E24\u79CD\u53D8\u4F53\u6765\u6EE1\u8DB3\u8FD9\u79CD\u7279\u6B8A\u573A\u666F\u3002"})]})}function s(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}=Object.assign({},(0,i.useMDXComponents)(),n.components);return e?(0,l.jsx)(e,{...n,children:(0,l.jsx)(d,{...n})}):d(n)}var c=s;s.__RSPRESS_PAGE_META={},s.__RSPRESS_PAGE_META["zh%2Fguides%2Ftopic-detail%2Fframework-plugin%2Fhook.mdx"]={toc:[{text:"\u57FA\u7840\u5DE5\u4F5C\u65B9\u5F0F",id:"\u57FA\u7840\u5DE5\u4F5C\u65B9\u5F0F",depth:2},{text:"\u4E0D\u540C Hook \u6A21\u578B\u7684\u533A\u522B",id:"\u4E0D\u540C-hook-\u6A21\u578B\u7684\u533A\u522B",depth:2},{text:"Pipeline",id:"pipeline",depth:3},{text:"Waterfall",id:"waterfall",depth:3},{text:"Workflow",id:"workflow",depth:3},{text:"Hook \u6A21\u578B\u5BF9\u6BD4",id:"hook-\u6A21\u578B\u5BF9\u6BD4",depth:2}],title:"Hook \u6A21\u578B",frontmatter:{sidebar_position:2}}}}]);