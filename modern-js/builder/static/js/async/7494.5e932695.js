(self.webpackChunk_modern_js_builder_doc=self.webpackChunk_modern_js_builder_doc||[]).push([["7494"],{92583:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return a}});var s=r("15169"),i=r("43932"),c=r("9880"),d=r("23169");function l(e){var n=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",strong:"strong",pre:"pre",code:"code",h3:"h3",ul:"ul",li:"li",div:"div",ol:"ol"},(0,d.useMDXComponents)(),e.components);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(n.h1,{id:"\u6E90\u7801\u6784\u5EFA\u6A21\u5F0F",children:["\u6E90\u7801\u6784\u5EFA\u6A21\u5F0F",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u6E90\u7801\u6784\u5EFA\u6A21\u5F0F",children:"#"})]}),"\n",(0,c.jsx)(n.p,{children:"\u6E90\u7801\u6784\u5EFA\u6A21\u5F0F\u7528\u4E8E monorepo \u5F00\u53D1\u573A\u666F\uFF0C\u5B83\u5141\u8BB8\u5F00\u53D1\u8005\u76F4\u63A5\u5F15\u7528 monorepo \u4E2D\u5176\u4ED6\u5B50\u9879\u76EE\u7684\u6E90\u7801\u8FDB\u884C\u5F00\u53D1\u3002"}),"\n",(0,c.jsxs)(n.h2,{id:"\u4F7F\u7528\u573A\u666F",children:["\u4F7F\u7528\u573A\u666F",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u4F7F\u7528\u573A\u666F",children:"#"})]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"monorepo \u4E2D\u9879\u76EE\u4E92\u76F8\u5F15\u7528\u4E3B\u8981\u6709\u4EA7\u7269\u5F15\u7528\u548C\u6E90\u7801\u5F15\u7528\u4E24\u79CD\u65B9\u5F0F"}),"\u3002\u6211\u4EEC\u4EE5\u4E00\u4E2A\u6700\u7B80\u5355\u7684 monorepo \u4E3A\u4F8B\u5B50\uFF0C\u6765\u4ECB\u7ECD\u6E90\u7801\u5F15\u7528\u7684\u4F7F\u7528\u573A\u666F\u3002"]}),"\n",(0,c.jsx)(n.p,{children:"\u6BD4\u5982 monorepo \u4E2D\u5305\u542B\u4E86\u4E00\u4E2A app \u5E94\u7528\u548C\u4E00\u4E2A lib \u5305\uFF1A"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-ts",children:"monorepo\n\u251C\u2500\u2500 app\n\u2514\u2500\u2500 lib\n    \u2514\u2500\u2500 src\n        \u2514\u2500\u2500 index.ts\n"})}),"\n",(0,c.jsx)(n.p,{children:"\u5176\u4E2D\uFF0Capp \u662F\u57FA\u4E8E Modern.js Builder \u6784\u5EFA\u7684\uFF0Capp \u4F9D\u8D56\u4E86 lib \u4E2D\u7684\u4E00\u4E9B\u65B9\u6CD5\uFF1A"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-json",children:'{\n  "name": "app",\n  "dependencies": {\n    "lib": "workspace:*"\n  }\n}\n'})}),"\n",(0,c.jsxs)(n.h3,{id:"\u4EA7\u7269\u5F15\u7528",children:["\u4EA7\u7269\u5F15\u7528",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u4EA7\u7269\u5F15\u7528",children:"#"})]}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"\u4EA7\u7269\u5F15\u7528\u6307\u7684\u662F\u5F53\u524D\u9879\u76EE\u5F15\u7528\u5176\u4ED6\u5B50\u9879\u76EE\u6784\u5EFA\u540E\u7684\u4EA7\u7269\u3002"})}),"\n",(0,c.jsxs)(n.p,{children:["\u6BD4\u5982\u4E0A\u8FF0\u4F8B\u5B50\u4E2D\u7684 lib \u662F\u4F7F\u7528 TypeScript \u7F16\u5199\u7684\uFF0C\u901A\u5E38\u60C5\u51B5\u4E0B\uFF0C\u6211\u4EEC\u9700\u8981\u63D0\u524D\u6784\u5EFA lib \u7684\u4EE3\u7801\uFF0C\u751F\u6210 JavaScript \u4EA7\u7269\uFF0C\u8FD9\u6837 app \u624D\u53EF\u4EE5\u6B63\u786E\u5F15\u7528\u5B83\u3002\u5F53 lib \u4EE3\u7801\u66F4\u65B0\u65F6\uFF0C\u8FD8\u9700\u8981\u91CD\u65B0\u6267\u884C\u4E00\u6B21\u6784\u5EFA\uFF08\u6216\u8005\u4F7F\u7528 ",(0,c.jsx)(n.code,{children:"tsc --watch"}),"\uFF09\uFF0C\u5426\u5219 app \u65E0\u6CD5\u5F15\u7528\u5230\u6700\u65B0\u7684\u4EE3\u7801\u3002"]}),"\n",(0,c.jsx)(n.p,{children:"\u8FD9\u79CD\u65B9\u5F0F\u7684\u4F18\u52BF\u5728\u4E8E\uFF1A"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:"\u5404\u4E2A\u5B50\u9879\u76EE\u7684\u6784\u5EFA\u8FC7\u7A0B\u662F\u5B8C\u5168\u72EC\u7ACB\u7684\uFF0C\u53EF\u4EE5\u62E5\u6709\u4E0D\u540C\u7684\u6784\u5EFA\u914D\u7F6E\u3002"}),"\n",(0,c.jsx)(n.li,{children:"\u53EF\u4EE5\u9488\u5BF9\u5B50\u9879\u76EE\u8FDB\u884C\u6784\u5EFA\u7F13\u5B58\u3002"}),"\n"]}),"\n",(0,c.jsx)(n.p,{children:"\u52A3\u52BF\u5728\u4E8E\uFF1A"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:"\u672C\u5730\u5F00\u53D1\u65F6 HMR \u7684\u94FE\u8DEF\u53D8\u957F\u3002"}),"\n",(0,c.jsx)(n.li,{children:"\u5F53\u4E00\u4E2A\u9879\u76EE\u4E2D\u5305\u542B\u591A\u4E2A lib \u5305\u65F6\uFF0C\u4EE5\u4E0A\u8FC7\u7A0B\u4F1A\u663E\u5F97\u5341\u5206\u7E41\u7410\u3002"}),"\n"]}),"\n",(0,c.jsxs)(n.h3,{id:"\u6E90\u7801\u5F15\u7528",children:["\u6E90\u7801\u5F15\u7528",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u6E90\u7801\u5F15\u7528",children:"#"})]}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"\u6E90\u7801\u5F15\u7528\u6307\u7684\u662F\u5F53\u524D\u9879\u76EE\u5F15\u7528\u5176\u4ED6\u5B50\u9879\u76EE\u7684\u6E90\u7801\u8FDB\u884C\u6784\u5EFA\u3002"})}),"\n",(0,c.jsxs)(n.p,{children:["\u6BD4\u5982\u4E0A\u8FF0\u4F8B\u5B50\uFF0C\u5F53\u4F60\u5F00\u542F\u4E86\u6E90\u7801\u6784\u5EFA\u6A21\u5F0F\uFF0C\u5E76\u5728 lib \u4E2D\u6DFB\u52A0\u76F8\u5173\u914D\u7F6E\u540E\uFF0CModern.js Builder \u4F1A\u81EA\u52A8\u5F15\u7528 lib \u7684 ",(0,c.jsx)(n.code,{children:"src/index.ts"})," \u6E90\u4EE3\u7801\u3002\u8FD9\u610F\u5473\u7740\uFF0C\u4F60\u4E0D\u9700\u8981\u63D0\u524D\u6784\u5EFA lib \u7684\u4EE3\u7801\uFF0C\u5E76\u4E14\u5F53 lib \u7684\u6E90\u4EE3\u7801\u66F4\u65B0\u65F6\uFF0C\u4E5F\u53EF\u4EE5\u81EA\u52A8\u89E6\u53D1 app \u7684\u70ED\u66F4\u65B0\u3002"]}),"\n",(0,c.jsx)(n.p,{children:"\u8FD9\u79CD\u65B9\u5F0F\u7684\u4F18\u52BF\u5728\u4E8E\uFF1A"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:"\u5B50\u9879\u76EE\u4E0D\u4F9D\u8D56\u6784\u5EFA\u5DE5\u5177\uFF0C\u4E5F\u4E0D\u9700\u8981\u6DFB\u52A0\u6784\u5EFA\u914D\u7F6E\uFF0C\u5B50\u9879\u76EE\u7684\u4EE3\u7801\u4F1A\u88AB\u5F53\u524D\u9879\u76EE\u7684\u6784\u5EFA\u5DE5\u5177\u7F16\u8BD1\u3002"}),"\n",(0,c.jsx)(n.li,{children:"\u4E0D\u9700\u8981\u63D0\u524D\u6267\u884C\u5B50\u9879\u76EE\u7684\u6784\u5EFA\u6D41\u7A0B\u3002"}),"\n",(0,c.jsx)(n.li,{children:"\u672C\u5730\u5F00\u53D1\u65F6 HMR \u66F4\u9AD8\u6548\u3002"}),"\n"]}),"\n",(0,c.jsx)(n.p,{children:"\u52A3\u52BF\u5728\u4E8E\uFF1A"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:"\u5F53\u524D\u9879\u76EE\u9700\u8981\u652F\u6301\u5B50\u9879\u76EE\u7528\u5230\u7684\u8BED\u6CD5\u7279\u6027\uFF0C\u5E76\u4E14\u9075\u5FAA\u76F8\u540C\u7684\u8BED\u6CD5\u89C4\u8303\uFF0C\u6BD4\u5982\u4F7F\u7528\u4E00\u81F4\u7684\u88C5\u9970\u5668\u8BED\u6CD5\u7248\u672C\u3002\u5982\u679C\u5F53\u524D\u9879\u76EE\u548C\u5B50\u9879\u76EE\u9700\u8981\u4F7F\u7528\u4E0D\u540C\u7684\u7F16\u8BD1\u914D\u7F6E\uFF0C\u5219\u4E0D\u9002\u5408\u4F7F\u7528\u6E90\u7801\u6784\u5EFA\u3002"}),"\n",(0,c.jsx)(n.li,{children:"\u5F53\u524D\u9879\u76EE\u9700\u8981\u7F16\u8BD1\u66F4\u591A\u7684\u4EE3\u7801\uFF0C\u56E0\u6B64\u6784\u5EFA\u65F6\u95F4\u53EF\u80FD\u4F1A\u53D8\u957F\u3002"}),"\n"]}),"\n",(0,c.jsxs)(n.h2,{id:"\u4F7F\u7528\u6E90\u7801\u6784\u5EFA",children:["\u4F7F\u7528\u6E90\u7801\u6784\u5EFA",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u4F7F\u7528\u6E90\u7801\u6784\u5EFA",children:"#"})]}),"\n",(0,c.jsxs)(n.h3,{id:"\u5F00\u542F\u914D\u7F6E",children:["\u5F00\u542F\u914D\u7F6E",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u5F00\u542F\u914D\u7F6E",children:"#"})]}),"\n",(0,c.jsxs)(n.p,{children:["\u4F60\u53EF\u4EE5\u901A\u8FC7\u8BBE\u7F6E ",(0,c.jsx)(n.a,{href:"/api/config-experiments#experimentssourcebuild",children:"experiments.sourceBuild"})," \u4E3A ",(0,c.jsx)(n.code,{children:"true"})," \u6765\u5F00\u542F\u6E90\u7801\u6784\u5EFA\u6A21\u5F0F\u3002"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-ts",children:"export default {\n  experiments: {\n    sourceBuild: true,\n  },\n};\n"})}),"\n",(0,c.jsxs)(n.h3,{id:"\u914D\u7F6E\u5B50\u9879\u76EE",children:["\u914D\u7F6E\u5B50\u9879\u76EE",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u914D\u7F6E\u5B50\u9879\u76EE",children:"#"})]}),"\n",(0,c.jsxs)(n.p,{children:["\u5F53\u5F00\u542F\u6E90\u7801\u6784\u5EFA\u6A21\u5F0F\u540E\uFF0CModern.js Builder \u5728\u6784\u5EFA\u8FC7\u7A0B\u4E2D\uFF0C\u4F1A\u4F18\u5148\u8BFB\u53D6\u5B50\u9879\u76EE\u7684 ",(0,c.jsx)(n.code,{children:"source"})," \u5B57\u6BB5\u5BF9\u5E94\u7684\u6587\u4EF6\u3002\u56E0\u6B64\uFF0C\u4F60\u9700\u8981\u5728\u5B50\u9879\u76EE\u7684 package.json \u4E2D\u914D\u7F6E ",(0,c.jsx)(n.code,{children:"source"})," \u5B57\u6BB5\uFF0C\u5E76\u4E14\u6307\u5411\u6E90\u7801\u6587\u4EF6\u8DEF\u5F84\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:["\u6BD4\u5982\u4EE5\u4E0B\u4F8B\u5B50\uFF0C\u5F53 lib \u5305\u88AB\u5F15\u7528\u65F6\uFF0C\u4F1A\u8BFB\u53D6 ",(0,c.jsx)(n.code,{children:"./src/index.ts"})," \u6587\u4EF6\u8FDB\u884C\u6784\u5EFA\uFF1A"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-json",meta:'title="package.json"',children:'{\n  "name": "lib",\n  "main": "./dist/index.js",\n  "source": "./src/index.ts"\n}\n'})}),"\n",(0,c.jsxs)(n.p,{children:["\u5982\u679C\u5B50\u9879\u76EE\u4F7F\u7528\u4E86 ",(0,c.jsx)(n.a,{href:"https://nodejs.org/api/packages.html#package-entry-points",target:"_blank",rel:"noopener noreferrer",children:"exports"})," \u914D\u7F6E\uFF0C\u90A3\u4E48\u4F60\u540C\u6837\u9700\u8981\u5728 ",(0,c.jsx)(n.code,{children:"exports"})," \u4E2D\u589E\u52A0 ",(0,c.jsx)(n.code,{children:"source"})," \u5B57\u6BB5\u3002"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-json",meta:'title="package.json"',children:'{\n  "name": "lib",\n  "exports": {\n    ".": {\n      "source": "./src/index.ts",\n      "default": "./dist/index.js"\n    },\n    "./features": {\n      "source": "./src/features/index.ts",\n      "default": "./dist/features/index.js"\n    }\n  }\n}\n'})}),"\n",(0,c.jsxs)(n.h2,{id:"\u914D\u7F6E-project-reference",children:["\u914D\u7F6E Project Reference",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u914D\u7F6E-project-reference",children:"#"})]}),"\n",(0,c.jsxs)(n.p,{children:["\u5728 TypeScript \u9879\u76EE\u4E2D\uFF0C\u4F60\u9700\u8981\u4F7F\u7528 TypeScript \u63D0\u4F9B\u7684 ",(0,c.jsx)(n.a,{href:"https://www.typescriptlang.org/docs/handbook/project-references.html",target:"_blank",rel:"noopener noreferrer",children:"Project Reference"})," \u80FD\u529B\uFF0C\u5B83\u53EF\u4EE5\u5E2E\u52A9\u4F60\u66F4\u597D\u5730\u4F7F\u7528\u6E90\u7801\u5F00\u53D1\u3002"]}),"\n",(0,c.jsxs)(n.h3,{id:"\u4ECB\u7ECD",children:["\u4ECB\u7ECD",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u4ECB\u7ECD",children:"#"})]}),"\n",(0,c.jsx)(n.p,{children:"Project reference \u63D0\u4F9B\u4E86\u4EE5\u4E0B\u80FD\u529B\uFF1A"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:"\u4F7F TypeScript \u53EF\u4EE5\u6B63\u786E\u8BC6\u522B\u5176\u4ED6\u5B50\u9879\u76EE\u7684\u7C7B\u578B\uFF0C\u800C\u65E0\u987B\u5BF9\u5B50\u9879\u76EE\u8FDB\u884C\u6784\u5EFA\u3002"}),"\n",(0,c.jsx)(n.li,{children:"\u5F53\u4F60\u5728 VS Code \u5185\u8FDB\u884C\u4EE3\u7801\u8DF3\u8F6C\u65F6\uFF0CVS Code \u53EF\u4EE5\u81EA\u52A8\u8DF3\u8F6C\u5230\u5BF9\u5E94\u6A21\u5757\u7684\u6E90\u4EE3\u7801\u6587\u4EF6\u3002"}),"\n",(0,c.jsxs)(n.li,{children:["Modern.js Builder \u4F1A\u8BFB\u53D6 project reference \u914D\u7F6E\uFF0C\u5E76\u81EA\u52A8\u8BC6\u522B\u5B50\u9879\u76EE\u7684 ",(0,c.jsx)(n.code,{children:"tsconfig.compilerOptions.path"})," \u914D\u7F6E\uFF0C\u4ECE\u800C\u8BA9\u5B50\u9879\u76EE\u7684\u522B\u540D\u53EF\u4EE5\u6B63\u786E\u751F\u6548\u3002"]}),"\n"]}),"\n",(0,c.jsxs)(n.h3,{id:"\u793A\u4F8B",children:["\u793A\u4F8B",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u793A\u4F8B",children:"#"})]}),"\n",(0,c.jsxs)(n.p,{children:["\u5728\u4E0A\u6587\u7684\u4F8B\u5B50\u4E2D\uFF0C\u7531\u4E8E app \u5F15\u7528\u4E86 lib \u5B50\u9879\u76EE\uFF0C\u6211\u4EEC\u9700\u8981\u5728 app \u7684 ",(0,c.jsx)(n.code,{children:"tsconfig.json"})," \u5185\u914D\u7F6E ",(0,c.jsx)(n.code,{children:"composite"})," \u548C ",(0,c.jsx)(n.code,{children:"references"}),"\uFF0C\u5E76\u6307\u5411 lib \u5BF9\u5E94\u7684\u76F8\u5BF9\u76EE\u5F55\uFF1A"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-json",meta:'title="app/tsconfig.json"',children:'{\n  "compilerOptions": {\n    "composite": true\n  },\n  "references": [\n    {\n      "path": "../lib"\n    }\n  ]\n}\n'})}),"\n",(0,c.jsx)(n.p,{children:"\u6DFB\u52A0\u4EE5\u4E0A\u4E24\u4E2A\u9009\u9879\u540E\uFF0Cproject reference \u5C31\u5DF2\u7ECF\u914D\u7F6E\u5B8C\u6210\u4E86\uFF0C\u4F60\u53EF\u4EE5\u91CD\u65B0\u542F\u52A8 VS Code \u6765\u67E5\u770B\u914D\u7F6E\u4EE5\u540E\u7684\u6548\u679C\u3002"}),"\n",(0,c.jsxs)(n.p,{children:["\u6CE8\u610F\u4EE5\u4E0A\u53EA\u662F\u4E00\u4E2A\u6700\u7B80\u5355\u7684\u4F8B\u5B50\uFF0C\u5728\u5B9E\u9645\u7684 monorepo \u9879\u76EE\u4E2D\uFF0C\u53EF\u80FD\u4F1A\u6709\u66F4\u590D\u6742\u7684\u4F9D\u8D56\u5173\u7CFB\uFF0C\u4F60\u9700\u8981\u6DFB\u52A0\u5B8C\u6574\u7684 ",(0,c.jsx)(n.code,{children:"references"})," \u914D\u7F6E\uFF0C\u624D\u80FD\u4F7F\u4E0A\u8FF0\u529F\u80FD\u6B63\u786E\u8FD0\u4F5C\u3002"]}),"\n",(0,c.jsxs)(n.div,{className:"rspress-directive tip",children:[(0,c.jsx)(n.div,{className:"rspress-directive-title",children:"TIP"}),(0,c.jsx)(n.div,{className:"rspress-directive-content",children:(0,c.jsxs)(n.p,{children:["\u5982\u679C\u4F60\u60F3\u4E86\u89E3\u66F4\u591A\u5173\u4E8E project reference \u7684\u5185\u5BB9\uFF0C\u8BF7\u9605\u8BFB ",(0,c.jsx)(n.a,{href:"https://www.typescriptlang.org/docs/handbook/project-references.html",target:"_blank",rel:"noopener noreferrer",children:"TypeScript - Project References"})," \u5B98\u65B9\u6587\u6863\u3002\n"]})})]}),"\n",(0,c.jsxs)(n.h2,{id:"\u6CE8\u610F\u4E8B\u9879",children:["\u6CE8\u610F\u4E8B\u9879",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u6CE8\u610F\u4E8B\u9879",children:"#"})]}),"\n",(0,c.jsx)(n.p,{children:"\u5728\u4F7F\u7528\u6E90\u7801\u6784\u5EFA\u6A21\u5F0F\u7684\u65F6\u5019\uFF0C\u9700\u8981\u6CE8\u610F\u51E0\u70B9\uFF1A"}),"\n",(0,c.jsxs)(n.ol,{children:["\n",(0,c.jsx)(n.li,{children:"\u9700\u8981\u4FDD\u8BC1\u5F53\u524D\u9879\u76EE\u53EF\u4EE5\u7F16\u8BD1\u5B50\u9879\u76EE\u91CC\u4F7F\u7528\u7684\u8BED\u6CD5\u6216\u7279\u6027\u3002\u6BD4\u5982\u5B50\u9879\u76EE\u4F7F\u7528\u4E86 Stylus \u6765\u7F16\u5199 CSS \u6837\u5F0F\uFF0C\u90A3\u5C31\u9700\u8981\u5F53\u524D app \u652F\u6301 Stylus \u7F16\u8BD1\u3002"}),"\n",(0,c.jsx)(n.li,{children:"\u9700\u8981\u4FDD\u8BC1\u5F53\u524D\u9879\u76EE\u4E0E\u5B50\u9879\u76EE\u4F7F\u7528\u7684\u4EE3\u7801\u8BED\u6CD5\u7279\u6027\u76F8\u540C\uFF0C\u4F8B\u5982\u88C5\u9970\u5668\u7684\u8BED\u6CD5\u7248\u672C\u4E00\u81F4\u3002"}),"\n",(0,c.jsxs)(n.li,{children:["\u6E90\u7801\u6784\u5EFA\u53EF\u80FD\u5B58\u5728\u4E00\u4E9B\u9650\u5236\u3002\u5982\u679C\u5728\u4F7F\u7528\u4E2D\u9047\u5230\u95EE\u9898\uFF0C\u4F60\u53EF\u4EE5\u5C06\u5B50\u9879\u76EE package.json \u4E2D\u7684 ",(0,c.jsx)(n.code,{children:"source"})," \u5B57\u6BB5\u79FB\u9664\uFF0C\u4F7F\u7528\u5B50\u9879\u76EE\u7684\u6784\u5EFA\u4EA7\u7269\u8FDB\u884C\u8C03\u8BD5\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:["\u5F00\u542F ",(0,c.jsx)(n.code,{children:"composite: true"})," \u540E\uFF0CTypeScript \u4F1A\u751F\u6210 ",(0,c.jsx)(n.code,{children:"*.tsbuildinfo"})," \u4E34\u65F6\u6587\u4EF6\uFF0C\u4F60\u9700\u8981\u5C06\u8FD9\u4E9B\u4E34\u65F6\u6587\u4EF6\u52A0\u5165 .gitignore \u4E2D\u3002"]}),"\n"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-text",meta:'title=".gitignore"',children:"*.tsbuildinfo\n"})})]})}function h(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,d.useMDXComponents)(),e.components).wrapper;return n?(0,c.jsx)(n,(0,i._)((0,s._)({},e),{children:(0,c.jsx)(l,(0,s._)({},e))})):l(e)}var a=h;h.__RSPRESS_PAGE_META={},h.__RSPRESS_PAGE_META["zh%2Fguide%2Fadvanced%2Fsource-build.md"]={toc:[{text:"\u4F7F\u7528\u573A\u666F",id:"\u4F7F\u7528\u573A\u666F",depth:2},{text:"\u4EA7\u7269\u5F15\u7528",id:"\u4EA7\u7269\u5F15\u7528",depth:3},{text:"\u6E90\u7801\u5F15\u7528",id:"\u6E90\u7801\u5F15\u7528",depth:3},{text:"\u4F7F\u7528\u6E90\u7801\u6784\u5EFA",id:"\u4F7F\u7528\u6E90\u7801\u6784\u5EFA",depth:2},{text:"\u5F00\u542F\u914D\u7F6E",id:"\u5F00\u542F\u914D\u7F6E",depth:3},{text:"\u914D\u7F6E\u5B50\u9879\u76EE",id:"\u914D\u7F6E\u5B50\u9879\u76EE",depth:3},{text:"\u914D\u7F6E Project Reference",id:"\u914D\u7F6E-project-reference",depth:2},{text:"\u4ECB\u7ECD",id:"\u4ECB\u7ECD",depth:3},{text:"\u793A\u4F8B",id:"\u793A\u4F8B",depth:3},{text:"\u6CE8\u610F\u4E8B\u9879",id:"\u6CE8\u610F\u4E8B\u9879",depth:2}],title:"\u6E90\u7801\u6784\u5EFA\u6A21\u5F0F"}}}]);