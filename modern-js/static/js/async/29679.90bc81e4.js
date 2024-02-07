/*! For license information please see 29679.90bc81e4.js.LICENSE.txt */
(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["29679"],{91626:function(e,n,s){"use strict";s.r(n);var i=s("39980"),d=s("96954");function r(e){let n=Object.assign({h1:"h1",a:"a",p:"p",code:"code",h2:"h2",pre:"pre",ul:"ul",li:"li",h3:"h3",h4:"h4",div:"div",ol:"ol"},(0,d.useMDXComponents)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.h1,{id:"context",children:["context",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#context",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["\u751F\u6210\u5668\u63D2\u4EF6\u5728 ",(0,i.jsx)(n.code,{children:"main"})," \u6587\u4EF6\u4E2D\u9ED8\u8BA4\u5BFC\u51FA\u4E86\u4E00\u4E2A\u51FD\u6570\uFF0C\u51FD\u6570\u53C2\u6570\u4E3A ",(0,i.jsx)(n.code,{children:"context"}),"\uFF0C\u751F\u6210\u5668\u63D2\u4EF6\u63D0\u4F9B\u7684\u6240\u6709 API \u90FD\u662F\u7531\u8FD9\u4E2A ",(0,i.jsx)(n.code,{children:"context"})," \u63D0\u4F9B\u7684\u3002"]}),"\n",(0,i.jsxs)(n.h2,{id:"\u7C7B\u578B",children:["\u7C7B\u578B",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u7C7B\u578B",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["\u6211\u4EEC\u5148\u5927\u6982\u4E86\u89E3\u4E00\u4E0B ",(0,i.jsx)(n.code,{children:"context"})," \u7684\u7C7B\u578B\u5B9A\u4E49\uFF1A"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"export interface IPluginContext {\n  locale?: string;\n  addInputBefore: (key: string, input: Schema) => void;\n  addInputAfter: (key: string, input: Schema) => void;\n  setInput: (key: string, field: string, value: unknown) => void;\n  setInputValue: (value: Record<string, unknown>) => void;\n  setDefaultConfig: (value: Record<string, unknown>) => void;\n  isFileExist: (fileName: string) => Promise<boolean>;\n  readDir: (dir: string) => Promise<string[]>;\n  setGitMessage: (gitMessage: string) => void;\n  onForged: (func: PluginForgedFunc) => void;\n  afterForged: (func: PluginAfterForgedFunc) => void;\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"context"})," \u63D0\u4F9B\u7684\u5185\u5BB9\u4E3B\u8981\u5206\u4E3A\u4E09\u7C7B\uFF1A"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u83B7\u53D6\u5F53\u524D\u751F\u6210\u5668\u6267\u884C\u73AF\u5883\u4FE1\u606F"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u64CD\u4F5C input \u8F93\u5165"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u751F\u6210\u5668\u63D2\u4EF6\u751F\u547D\u5468\u671F\u51FD\u6570"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"\u4E0B\u9762\u5C06\u4ECE\u8FD9\u4E09\u4E2A\u5206\u7C7B\u5206\u522B\u4ECB\u7ECD\u751F\u6210\u5668\u63D2\u4EF6 API\u3002"}),"\n",(0,i.jsxs)(n.h3,{id:"\u83B7\u53D6\u4FE1\u606F",children:["\u83B7\u53D6\u4FE1\u606F",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u83B7\u53D6\u4FE1\u606F",children:"#"})]}),"\n",(0,i.jsxs)(n.h4,{id:"locale",children:["locale",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#locale",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["\u83B7\u53D6\u751F\u6210\u5668\u63D2\u4EF6\u6267\u884C\u73AF\u5883\u7684\u8BED\u8A00\u3002",(0,i.jsx)(n.code,{children:"@modern-js/create"})," \u63D0\u4F9B\u4E86 ",(0,i.jsx)(n.code,{children:"zh"})," \u548C ",(0,i.jsx)(n.code,{children:"en"})," \u4E24\u79CD\u8BED\u8A00\uFF0C\u8FD9\u91CC\u5373\u4E3A\u5BF9\u5E94\u7684\u8FD9\u4E24\u79CD\u503C\u3002"]}),"\n",(0,i.jsxs)(n.h4,{id:"isfileexist",children:["isFileExist",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#isfileexist",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"\u5224\u65AD\u6587\u4EF6\u662F\u5426\u5B58\u5728\u3002\u6211\u4EEC\u5F88\u591A\u65F6\u5019\u9700\u8981\u5728\u5B9A\u4E49\u64CD\u4F5C\u524D\u786E\u8BA4\u76EE\u6807\u9879\u76EE\u6587\u4EF6\u662F\u5426\u5DF2\u7ECF\u5B58\u5728\uFF0C\u53EF\u4EE5\u76F4\u63A5\u901A\u8FC7\u8BE5 API \u83B7\u53D6\u3002"}),"\n",(0,i.jsxs)(n.p,{children:["\u4F8B\u5982\u6211\u4EEC\u9700\u8981\u83B7\u53D6 ",(0,i.jsx)(n.code,{children:"package.json"})," \u6587\u4EF6\u662F\u5426\u5B58\u5728\uFF0C\u7136\u540E\u505A\u76F8\u5E94\u7684\u64CD\u4F5C\uFF1A"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"const isExist = await context.isFileExist('package.json');\nif (isExist) {\n    ...\n}\n"})}),"\n",(0,i.jsxs)(n.h4,{id:"readdir",children:["readDir",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#readdir",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"\u83B7\u53D6\u6587\u4EF6\u5939\u5185\u6587\u4EF6\u5217\u8868\u3002\u6211\u4EEC\u5F88\u591A\u65F6\u5019\u9700\u8981\u5728\u5B9A\u4E49\u64CD\u4F5C\u524D\u83B7\u53D6\u76EE\u6807\u9879\u76EE\u6587\u4EF6\u5939\u4E0B\u9762\u6587\u4EF6\u5217\u8868\uFF0C\u53EF\u4EE5\u76F4\u63A5\u901A\u8FC7\u8BE5 API \u83B7\u53D6\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u4F8B\u5982\u6211\u4EEC\u9700\u8981\u83B7\u53D6 src \u6587\u4EF6\u5939\u4E0B\u6240\u6709\u6587\u4EF6\uFF0C\u7136\u540E\u8FDB\u884C\u76F8\u5E94\u64CD\u4F5C\uFF1A"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"const files = await context.readDir('src');\n\nfiles.map(name => {\n    ...\n});\n"})}),"\n",(0,i.jsxs)(n.h3,{id:"input-\u64CD\u4F5C",children:["input \u64CD\u4F5C",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#input-\u64CD\u4F5C",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["input \u64CD\u4F5C\u4E2D\u4F7F\u7528\u7684 key \u53C2\u6570\u53EF\u53C2\u8003",(0,i.jsx)(n.a,{href:"/guides/topic-detail/generator/create/config",children:"\u914D\u7F6E\u53C2\u6570"}),"\uFF0C\u9700\u8981\u5728\u4F7F\u7528\u5BF9\u5E94\u5DE5\u7A0B\u65B9\u6848\u4E0B\u7684 key\uFF0C\u5373\u4E0D\u652F\u6301\u5728 ",(0,i.jsx)(n.code,{children:"solution"})," \u548C ",(0,i.jsx)(n.code,{children:"scenes"}),"\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["input \u64CD\u4F5C\u4E2D\u7684 input \u53C2\u6570\u5BF9\u5E94\u7684 Schema \u7C7B\u578B\u53EF\u53C2\u8003 ",(0,i.jsx)(n.a,{href:"/guides/topic-detail/generator/plugin/api/input",children:"Input"}),"\u3002"]}),"\n",(0,i.jsxs)(n.h4,{id:"addinputbefore",children:["addInputBefore",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#addinputbefore",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["\u5728\u6307\u5B9A\u7684 input ",(0,i.jsx)(n.code,{children:"key"})," \u524D\u6DFB\u52A0\u95EE\u9898\u3002"]}),"\n",(0,i.jsx)(n.p,{children:"\u4F8B\u5982\uFF1A"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"context.addInputBefore('packageManager', {\n  type: 'object',\n  properties: {\n    language: {\n      type: 'string',\n      title: '\u5F00\u53D1\u8BED\u8A00',\n      enum: [\n        { label: 'TS', value: 'ts' },\n        { label: 'ES6+', value: 'js' },\n      ],\n    },\n  },\n});\n"})}),"\n",(0,i.jsxs)(n.h4,{id:"addinputafter",children:["addInputAfter",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#addinputafter",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["\u5728\u6307\u5B9A\u7684 input ",(0,i.jsx)(n.code,{children:"key"})," \u540E\u6DFB\u52A0\u95EE\u9898\u3002"]}),"\n",(0,i.jsx)(n.p,{children:"\u4F8B\u5982\uFF1A"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"context.addInputAfter('packageManager', {\n  type: 'object',\n  properties: {\n    language: {\n      type: 'string',\n      title: '\u5F00\u53D1\u8BED\u8A00',\n      enum: [\n        { label: 'TS', value: 'ts' },\n        { label: 'ES6+', value: 'js' },\n      ],\n    },\n  },\n});\n"})}),"\n",(0,i.jsxs)(n.div,{className:"rspress-directive info",children:[(0,i.jsx)(n.div,{className:"rspress-directive-title",children:"INFO"}),(0,i.jsxs)(n.div,{className:"rspress-directive-content",children:["\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\u6DFB\u52A0\u95EE\u9898\u7684 ",(0,i.jsx)(n.code,{children:"key"})," \u4E0D\u80FD\u548C Modern.js \u63D0\u4F9B\u7684\u5DE5\u7A0B\u65B9\u6848\u81EA\u8EAB\u7684\u95EE\u9898\u7684 ",(0,i.jsx)(n.code,{children:"key"})," \u91CD\u590D\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:["\u6DFB\u52A0\u95EE\u9898 ",(0,i.jsx)(n.code,{children:"addInputAfter"})," \u7684\u4F18\u5148\u7EA7\u9AD8\u4E8E ",(0,i.jsx)(n.code,{children:"addInputBefore"}),"\uFF0C\u5F53\u540C\u65F6\u5BF9\u4E00\u4E2A key \u6DFB\u52A0 After \u95EE\u9898\u548C\u5BF9\u5176\u540E\u4E00\u4E2Akey \u6DFB\u52A0 Before \u95EE\u9898\u65F6\uFF0CAfter \u95EE\u9898\u4F1A\u5728 Before \u4E4B\u524D\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:["\u5F53\u9700\u8981\u5728\u76F8\u540C ",(0,i.jsx)(n.code,{children:"key"})," \u524D\u9762\u6216\u8005\u540E\u9762\u6DFB\u52A0\u591A\u4E2A\u95EE\u9898\u65F6\uFF0C\u53EF\u591A\u6B21\u8C03\u7528\u8BE5\u65B9\u6CD5\uFF0C\u95EE\u9898\u7684\u987A\u5E8F\u4F1A\u6309\u7167\u8C03\u7528\u987A\u5E8F\u8FDB\u884C\u6392\u5217\u3002"]}),"\n"]}),"\n"]})]}),"\n",(0,i.jsxs)(n.h4,{id:"setinput",children:["setInput",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#setinput",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["\u8BBE\u7F6E\u6307\u5B9A input ",(0,i.jsx)(n.code,{children:"key"})," \u7684\u5C5E\u6027\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["\u4F8B\u5982\u8BBE\u7F6E ",(0,i.jsx)(n.code,{children:"packageName"})," \u7684 ",(0,i.jsx)(n.code,{children:"title"})," \u5C5E\u6027\uFF1A"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"context.setInput('packageName', 'title', \"\u5C55\u793A\u540D\u79F0\");\n"})}),"\n",(0,i.jsxs)(n.div,{className:"rspress-directive info",children:[(0,i.jsx)(n.div,{className:"rspress-directive-title",children:"INFO"}),(0,i.jsx)(n.div,{className:"rspress-directive-content",children:(0,i.jsx)(n.p,{children:"\u5BF9\u4E8E Modern.js \u5DE5\u7A0B\u65B9\u6848\u63D0\u4F9B\u7684\u8F93\u5165\u9009\u9879\uFF0C\u53EA\u652F\u6301\u5220\u9664\uFF0C\u4E0D\u652F\u6301\u589E\u52A0\uFF0C\u589E\u52A0\u4F1A\u9020\u6210\u4EE3\u7801\u4E2D\u7684\u903B\u8F91\u5224\u65AD\u5B58\u5728\u95EE\u9898\u3002"})})]}),"\n",(0,i.jsxs)(n.h4,{id:"setinputvalue",children:["setInputValue",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#setinputvalue",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["\u8BBE\u7F6E\u6307\u5B9A input ",(0,i.jsx)(n.code,{children:"key"})," \u7684\u9009\u9879\u9ED8\u8BA4\u503C\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["\u4F8B\u5982\u8BBE\u7F6E ",(0,i.jsx)(n.code,{children:"packageManager"})," \u7684\u9ED8\u8BA4\u503C\uFF1A"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"context.setInputValue({\n  packageManager: 'npm',\n});\n"})}),"\n",(0,i.jsxs)(n.div,{className:"rspress-directive info",children:[(0,i.jsx)(n.div,{className:"rspress-directive-title",children:"INFO"}),(0,i.jsx)(n.div,{className:"rspress-directive-content",children:(0,i.jsx)(n.p,{children:"\u8BBE\u7F6E\u5B8C\u6210\u540E\uFF0C\u8BE5\u95EE\u9898\u8FD8\u662F\u9700\u8981\u4EA4\u4E92\uFF0C\u53EA\u662F\u4F1A\u4F7F\u7528\u751F\u6210\u5668\u63D2\u4EF6\u914D\u7F6E\u7684\u9ED8\u8BA4\u503C\u3002"})})]}),"\n",(0,i.jsxs)(n.h4,{id:"setdefaultconfig",children:["setDefaultConfig",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#setdefaultconfig",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["\u8BBE\u7F6E\u6307\u5B9A input ",(0,i.jsx)(n.code,{children:"key"})," \u7684\u9ED8\u8BA4\u503C\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["\u4F8B\u5982\u8BBE\u7F6E ",(0,i.jsx)(n.code,{children:"packageManager"})," \u7684\u9ED8\u8BA4\u503C\uFF1A"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"context.setDefaultConfig({\n  packageManager: 'npm',\n});\n"})}),"\n",(0,i.jsxs)(n.div,{className:"rspress-directive info",children:[(0,i.jsx)(n.div,{className:"rspress-directive-title",children:"INFO"}),(0,i.jsx)(n.div,{className:"rspress-directive-content",children:(0,i.jsxs)(n.p,{children:["\u8BBE\u7F6E\u5B8C\u6210\u540E\uFF0C\u5C06\u4E0D\u518D\u5C55\u793A\u5BF9\u5E94\u95EE\u9898\uFF0C\u548C ",(0,i.jsx)(n.code,{children:"@modern-js/create"})," \u5236\u5B9A ",(0,i.jsx)(n.code,{children:"--config"})," \u884C\u4E3A\u4E00\u81F4\u3002\u4E0D\u652F\u6301\u8BBE\u7F6E ",(0,i.jsx)(n.code,{children:"vertical"})," \u548C ",(0,i.jsx)(n.code,{children:"projectOrg"}),"\u3002\n"]})})]}),"\n",(0,i.jsxs)(n.h4,{id:"setgitmessage",children:["setGitMessage",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#setgitmessage",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["\u8BBE\u7F6E Git \u521D\u59CB\u63D0\u4EA4\u4FE1\u606F\u3002Modern.js \u9ED8\u8BA4 Git \u521D\u59CB\u5316\u63D0\u4EA4\u4FE1\u606F\u4E3A ",(0,i.jsx)(n.code,{children:"feat: init"}),"\uFF0C\u901A\u8FC7\u8BE5\u51FD\u6570\u53EF\u4EE5\u4FEE\u6539\u3002"]}),"\n",(0,i.jsxs)(n.h3,{id:"\u751F\u547D\u5468\u671F\u51FD\u6570",children:["\u751F\u547D\u5468\u671F\u51FD\u6570",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u751F\u547D\u5468\u671F\u51FD\u6570",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["\u751F\u547D\u5468\u671F\u51FD\u6570\u6BD4\u8F83\u590D\u6742\uFF0C\u5C06\u901A\u8FC7\u540E\u9762\u4E24\u8282 ",(0,i.jsx)(n.a,{href:"/guides/topic-detail/generator/plugin/api/onForged",children:(0,i.jsx)(n.code,{children:"onForged"})})," \u548C ",(0,i.jsx)(n.a,{href:"/guides/topic-detail/generator/plugin/api/afterForged",children:(0,i.jsx)(n.code,{children:"afterForged"})})," \u5206\u522B\u4ECB\u7ECD\u3002"]})]})}function t(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,d.useMDXComponents)(),e.components);return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(r,{...e})}):r(e)}n.default=t,t.__RSPRESS_PAGE_META={},t.__RSPRESS_PAGE_META["zh%2Fguides%2Ftopic-detail%2Fgenerator%2Fplugin%2Fapi%2Fcontext.md"]={toc:[{text:"\u7C7B\u578B",id:"\u7C7B\u578B",depth:2},{text:"\u83B7\u53D6\u4FE1\u606F",id:"\u83B7\u53D6\u4FE1\u606F",depth:3},{text:"locale",id:"locale",depth:4},{text:"isFileExist",id:"isfileexist",depth:4},{text:"readDir",id:"readdir",depth:4},{text:"input \u64CD\u4F5C",id:"input-\u64CD\u4F5C",depth:3},{text:"addInputBefore",id:"addinputbefore",depth:4},{text:"addInputAfter",id:"addinputafter",depth:4},{text:"setInput",id:"setinput",depth:4},{text:"setInputValue",id:"setinputvalue",depth:4},{text:"setDefaultConfig",id:"setdefaultconfig",depth:4},{text:"setGitMessage",id:"setgitmessage",depth:4},{text:"\u751F\u547D\u5468\u671F\u51FD\u6570",id:"\u751F\u547D\u5468\u671F\u51FD\u6570",depth:3}],title:"context",frontmatter:{sidebar_position:1}}}}]);