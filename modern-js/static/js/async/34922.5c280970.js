"use strict";(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["34922"],{20611:function(e,n,s){s.r(n),s.d(n,{default:function(){return d}});var r=s(39980),l=s(9580);function c(e){let n=Object.assign({h1:"h1",a:"a",ul:"ul",li:"li",strong:"strong",code:"code",pre:"pre",p:"p",h3:"h3"},(0,l.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"sourceglobalvars",children:["source.globalVars",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#sourceglobalvars",children:"#"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"\u7C7B\u578B\uFF1A"})," ",(0,r.jsx)(n.code,{children:"Record<string, JSONValue> | Function"})]}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"\u9ED8\u8BA4\u503C\uFF1A"})}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"// Builder \u9ED8\u8BA4\u4F1A\u6DFB\u52A0\u73AF\u5883\u53D8\u91CF `process.env.NODE_ENV`\uFF0C\u56E0\u6B64\u4F60\u4E0D\u9700\u8981\u624B\u52A8\u6DFB\u52A0\u5B83\u3002\nconst defaultGlobalVars = {\n  'process.env.NODE_ENV': process.env.NODE_ENV,\n};\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u7528\u4E8E\u5728\u6784\u5EFA\u65F6\u5C06\u7C7B\u4F3C ",(0,r.jsx)(n.code,{children:"process.env.FOO"})," \u7684\u5168\u5C40\u53D8\u91CF\u8868\u8FBE\u5F0F\u66FF\u6362\u4E3A\u6307\u5B9A\u7684\u503C\uFF0C\u6BD4\u5982\uFF1A"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"console.log(process.env.NODE_ENV);\n\n// \u2B07\uFE0F Turn into being...\nconsole.log('development');\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"\u793A\u4F8B",children:["\u793A\u4F8B",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u793A\u4F8B",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["\u5728\u4E0B\u65B9\u793A\u4F8B\u4E2D\uFF0C\u4F1A\u5728\u4EE3\u7801\u4E2D\u6CE8\u5165 ",(0,r.jsx)(n.code,{children:"ENABLE_VCONSOLE"})," \u548C ",(0,r.jsx)(n.code,{children:"APP_CONTEXT"})," \u4E24\u4E2A\u73AF\u5883\u53D8\u91CF\uFF1A"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"export default {\n  source: {\n    globalVars: {\n      ENABLE_VCONSOLE: true,\n      APP_CONTEXT: { answer: 42 },\n    },\n  },\n};\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u4F60\u53EF\u4EE5\u5728\u4EE3\u7801\u4E2D\u76F4\u63A5\u4F7F\u7528\u5B83\u4EEC\uFF1A"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"if (ENABLE_VCONSOLE) {\n  // do something\n}\n\nconsole.log(APP_CONTEXT);\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"\u51FD\u6570\u7528\u6CD5",children:["\u51FD\u6570\u7528\u6CD5",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u51FD\u6570\u7528\u6CD5",children:"#"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"\u7C7B\u578B\uFF1A"})}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"type GlobalVarsFn = (\n  obj: Record<string, JSONValue>,\n  utils: { env: NodeEnv; target: BuilderTarget },\n) => Record<string, JSONValue> | void;\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u4F60\u53EF\u4EE5\u5C06 ",(0,r.jsx)(n.code,{children:"source.globalVars"})," \u8BBE\u7F6E\u4E3A\u4E00\u4E2A\u51FD\u6570\uFF0C\u4ECE\u800C\u52A8\u6001\u8BBE\u7F6E\u4E00\u4E9B\u73AF\u5883\u53D8\u91CF\u7684\u503C\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u6BD4\u5982\uFF0C\u6839\u636E\u5F53\u524D\u7684\u6784\u5EFA\u4EA7\u7269\u7C7B\u578B\u8FDB\u884C\u52A8\u6001\u8BBE\u7F6E\uFF1A"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"export default {\n  source: {\n    globalVars(obj, { target }) {\n      obj['MY_TARGET'] = target === 'node' ? 'server' : 'client';\n    },\n  },\n};\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"\u4E0E-define-\u7684\u533A\u522B",children:["\u4E0E define \u7684\u533A\u522B",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u4E0E-define-\u7684\u533A\u522B",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"source.globalVars"})," \u662F ",(0,r.jsx)(n.code,{children:"source.define"})," \u7684\u4E00\u4E2A\u8BED\u6CD5\u7CD6\uFF0C\u5B83\u4EEC\u4E4B\u95F4\u552F\u4E00\u7684\u533A\u522B\u662F\uFF0C",(0,r.jsx)(n.code,{children:"source.globalVars"})," \u4F1A\u81EA\u52A8\u5C06\u4F20\u5165\u7684\u503C\u8FDB\u884C JSON \u5E8F\u5217\u5316\u5904\u7406\uFF0C\u8FD9\u4F7F\u5F97\u8BBE\u7F6E\u5168\u5C40\u53D8\u91CF\u7684\u503C\u66F4\u52A0\u65B9\u4FBF\u3002\u6CE8\u610F ",(0,r.jsx)(n.code,{children:"globalVars"})," \u7684\u6BCF\u4E2A\u503C\u90FD\u9700\u8981\u662F\u53EF\u4EE5\u88AB JSON \u5E8F\u5217\u5316\u7684\u503C\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"export default {\n  source: {\n    globalVars: {\n      'process.env.BUILD_VERSION': '0.0.1',\n      'import.meta.foo': { bar: 42 },\n      'import.meta.baz': false,\n    },\n    define: {\n      'process.env.BUILD_VERSION': JSON.stringify('0.0.1'),\n      'import.meta': {\n        foo: JSON.stringify({ bar: 42 }),\n        baz: JSON.stringify(false),\n      },\n    },\n  },\n};\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"\u6CE8\u610F\u4E8B\u9879",children:["\u6CE8\u610F\u4E8B\u9879",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u6CE8\u610F\u4E8B\u9879",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"source.globalVars"})," \u662F\u901A\u8FC7\u5B57\u7B26\u4E32\u66FF\u6362\u7684\u5F62\u5F0F\u6765\u6CE8\u5165\u73AF\u5883\u53D8\u91CF\u7684\uFF0C\u56E0\u6B64\u5B83\u65E0\u6CD5\u5BF9\u300C\u89E3\u6784\u8D4B\u503C\u300D\u7B49\u52A8\u6001\u5199\u6CD5\u751F\u6548\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u5728\u4F7F\u7528\u89E3\u6784\u8D4B\u503C\u65F6\uFF0CBuilder \u5C06\u65E0\u6CD5\u5224\u65AD\u53D8\u91CF ",(0,r.jsx)(n.code,{children:"NODE_ENV"})," \u662F\u5426\u4E0E\u8981\u66FF\u6362\u7684\u8868\u8FBE\u5F0F ",(0,r.jsx)(n.code,{children:"process.env.NODE_ENV"})," \u5B58\u5728\u5173\u8054\uFF0C\u56E0\u6B64\u4EE5\u4E0B\u4F7F\u7528\u65B9\u5F0F\u662F\u65E0\u6548\u7684\uFF1A"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"const { NODE_ENV } = process.env;\nconsole.log(NODE_ENV);\n// \u274C Won't get a string.\n"})})]})}function a(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,l.ah)(),e.components);return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}let d=a;a.__RSPRESS_PAGE_META={},a.__RSPRESS_PAGE_META["zh%2Fconfigure%2Fapp%2Fsource%2Fglobal-vars.mdx"]={toc:[{text:"\u793A\u4F8B",id:"\u793A\u4F8B",depth:3},{text:"\u51FD\u6570\u7528\u6CD5",id:"\u51FD\u6570\u7528\u6CD5",depth:3},{text:"\u4E0E define \u7684\u533A\u522B",id:"\u4E0E-define-\u7684\u533A\u522B",depth:3},{text:"\u6CE8\u610F\u4E8B\u9879",id:"\u6CE8\u610F\u4E8B\u9879",depth:3}],title:"source.globalVars",frontmatter:{sidebar_label:"globalVars"}}}}]);