(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["16416"],{81449:function(e,s,n){"use strict";n.r(s),n.d(s,{default:function(){return l}});var t=n("9880"),r=n("23169"),i=n("18553");function a(e){let s=Object.assign({ol:"ol",li:"li",code:"code",pre:"pre"},(0,r.useMDXComponents)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsxs)(s.li,{children:["\u6267\u884C ",(0,t.jsx)(s.code,{children:"pnpm new"}),"\uFF0C\u9009\u62E9\u542F\u7528 BFF"]}),"\n",(0,t.jsxs)(s.li,{children:["\u6839\u636E\u9009\u62E9\u7684\u8FD0\u884C\u65F6\u6846\u67B6\uFF0C\u5C06\u4E0B\u9762\u7684\u4EE3\u7801\u6DFB\u52A0\u5230 ",(0,t.jsx)(s.code,{children:"modern.config.[tj]s"})," \u4E2D\uFF1A"]}),"\n"]}),"\n","\n",(0,t.jsxs)(i.Tabs,{children:[(0,t.jsx)(i.Tab,{value:"express",label:"Express.js",default:!0,children:(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import { expressPlugin } from '@modern-js/plugin-express';\nimport { bffPlugin } from '@modern-js/plugin-bff';\n\nexport default defineConfig({\n  plugins: [expressPlugin(), bffPlugin()],\n});\n"})})}),(0,t.jsx)(i.Tab,{value:"koa",label:"Koa.js",children:(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import { koaPlugin } from '@modern-js/plugin-koa';\nimport { bffPlugin } from '@modern-js/plugin-bff';\n\nexport default defineConfig({\n  plugins: [koaPlugin(), bffPlugin()],\n});\n"})})})]})]})}function c(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:s}=Object.assign({},(0,r.useMDXComponents)(),e.components);return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}var l=c;c.__RSPRESS_PAGE_META={},c.__RSPRESS_PAGE_META["zh%2Fcomponents%2Fenable-bff.mdx"]={toc:[],title:"",frontmatter:{}}},63184:function(e,s,n){"use strict";n.r(s),n.d(s,{default:function(){return l}});var t=n("9880"),r=n("23169"),i=n("81449");function a(e){let s=Object.assign({h1:"h1",a:"a",p:"p",code:"code",h2:"h2",strong:"strong",div:"div",pre:"pre",img:"img",h3:"h3",ul:"ul",li:"li",h4:"h4"},(0,r.useMDXComponents)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.h1,{id:"\u57FA\u7840\u7528\u6CD5",children:["\u57FA\u7840\u7528\u6CD5",(0,t.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#\u57FA\u7840\u7528\u6CD5",children:"#"})]}),"\n",(0,t.jsxs)(s.p,{children:["\u901A\u8FC7 Modern.js \u5F00\u53D1\u7684\u5E94\u7528\uFF0C\u53EF\u4EE5\u5728 ",(0,t.jsx)(s.code,{children:"api/"})," \u76EE\u5F55\u4E0B\u5B9A\u4E49\u63A5\u53E3\u51FD\u6570\uFF0C\u524D\u7AEF\u53EF\u4EE5\u8C03\u7528\u8FD9\u4E9B\u63A5\u53E3\u51FD\u6570\uFF0C\u5373\u53EF\u53D1\u8D77\u8BF7\u6C42\uFF0C\u65E0\u9700\u5199\u524D\u540E\u7AEF\u80F6\u6C34\u5C42\u4EE3\u7801\uFF0C\u540C\u65F6\u4FDD\u8BC1\u524D\u540E\u7AEF\u7C7B\u578B\u5B89\u5168\u3002"]}),"\n",(0,t.jsxs)(s.h2,{id:"\u542F\u7528-bff",children:["\u542F\u7528 BFF",(0,t.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#\u542F\u7528-bff",children:"#"})]}),"\n","\n",(0,t.jsx)(i.default,{}),"\n",(0,t.jsxs)(s.h2,{id:"bff-\u51FD\u6570",children:["BFF \u51FD\u6570",(0,t.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#bff-\u51FD\u6570",children:"#"})]}),"\n",(0,t.jsxs)(s.p,{children:["\u5141\u8BB8\u901A\u8FC7\u4E00\u4F53\u5316\u8C03\u7528\u7684\u51FD\u6570\uFF0C\u79F0\u4E3A ",(0,t.jsx)(s.strong,{children:"BFF \u51FD\u6570"}),"\u3002\u8FD9\u91CC\u5199\u4E00\u4E2A\u6700\u7B80\u5355\u7684 BFF \u51FD\u6570\uFF0C\u521B\u5EFA ",(0,t.jsx)(s.code,{children:"api/hello.ts"})," \u6587\u4EF6\uFF1A"]}),"\n",(0,t.jsxs)(s.div,{className:"rspress-directive caution",children:[(0,t.jsx)(s.div,{className:"rspress-directive-title",children:"CAUTION"}),(0,t.jsxs)(s.div,{className:"rspress-directive-content",children:[(0,t.jsxs)(s.p,{children:["\u5982\u679C\u662F\u6846\u67B6\u6A21\u5F0F\uFF08\u6709 ",(0,t.jsx)(s.code,{children:"api/lambda"})," \u76EE\u5F55\uFF09\uFF0C\u9700\u8981\u521B\u5EFA ",(0,t.jsx)(s.code,{children:"api/lambda/hello.ts"})]}),"\n"]})]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-ts",meta:'title="api/hello.ts"',children:"export const get = async () => 'Hello Modern.js';\n"})}),"\n",(0,t.jsxs)(s.p,{children:["\u63A5\u7740\u5728 ",(0,t.jsx)(s.code,{children:"src/App.tsx"})," \u4E2D\u76F4\u63A5\u5F15\u5165\u51FD\u6570\u5E76\u8C03\u7528\uFF1A"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-tsx",meta:"title=src/App.tsx",children:"import { useState, useEffect } from 'react';\nimport { get as hello } from '@api/hello';\n\nexport default () => {\n  const [text, setText] = useState('');\n\n  useEffect(() => {\n    hello().then(setText);\n  }, []);\n  return <div>{text}</div>;\n};\n"})}),"\n",(0,t.jsxs)(s.div,{className:"rspress-directive info",children:[(0,t.jsx)(s.div,{className:"rspress-directive-title",children:"INFO"}),(0,t.jsxs)(s.div,{className:"rspress-directive-content",children:[(0,t.jsxs)(s.p,{children:["Modern.js \u751F\u6210\u5668\u5DF2\u7ECF\u5728 ",(0,t.jsx)(s.code,{children:"tsconfig.json"})," \u4E2D\u914D\u7F6E ",(0,t.jsx)(s.code,{children:"@api"})," \u522B\u540D\uFF0C\u56E0\u6B64\u53EF\u4EE5\u76F4\u63A5\u901A\u8FC7\u522B\u540D\u7684\u65B9\u5F0F\u5F15\u5165\u51FD\u6570\u3002"]}),"\n"]})]}),"\n",(0,t.jsxs)(s.p,{children:["\u5728 ",(0,t.jsx)(s.code,{children:"src/App.tsx"})," \u4E2D\u5F15\u5165\u7684\u51FD\u6570\uFF0C\u4F1A\u81EA\u52A8\u8F6C\u6362\u6210\u63A5\u53E3\u8C03\u7528\uFF0C\u4E0D\u9700\u8981\u518D\u53BB\u901A\u8FC7 fetch \u53BB\u8C03\u7528\u63A5\u53E3\u3002"]}),"\n",(0,t.jsxs)(s.p,{children:["\u6267\u884C ",(0,t.jsx)(s.code,{children:"pnpm run dev"})," \u6253\u5F00 ",(0,t.jsx)(s.code,{children:"http://localhost:8080/"})," \u53EF\u4EE5\u770B\u5230\u9875\u9762\u5DF2\u7ECF\u5C55\u793A\u4E86 BFF \u51FD\u6570\u8FD4\u56DE\u7684\u5185\u5BB9\uFF0C\u5728 Network \u4E2D\u53EF\u4EE5\u770B\u5230\u9875\u9762\u5411 ",(0,t.jsx)(s.code,{children:"http://localhost:8080/api/hello"})," \u53D1\u9001\u4E86\u8BF7\u6C42\uFF1A"]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{src:"https://p6-piu.byteimg.com/tos-cn-i-8jisjyls3a/fd41750f8d414179a9b4ecb519919b36~tplv-8jisjyls3a-3:0:0:q75.png",alt:"Network"})}),"\n",(0,t.jsxs)(s.h2,{id:"\u51FD\u6570\u8DEF\u7531",children:["\u51FD\u6570\u8DEF\u7531",(0,t.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#\u51FD\u6570\u8DEF\u7531",children:"#"})]}),"\n",(0,t.jsxs)(s.p,{children:["Modern.js \u4E2D\uFF0CBFF \u51FD\u6570\u5BF9\u5E94\u7684\u8DEF\u7531\u7CFB\u7EDF\u662F\u57FA\u4E8E\u6587\u4EF6\u7CFB\u7EDF\u5B9E\u73B0\u7684\uFF0C\u4E5F\u662F\u4E00\u79CD",(0,t.jsx)(s.strong,{children:"\u7EA6\u5B9A\u5F0F\u8DEF\u7531"}),"\u3002"]}),"\n",(0,t.jsxs)(s.p,{children:["\u51FD\u6570\u5199\u6CD5\u4E0B ",(0,t.jsx)(s.code,{children:"api/"})," \u4E0B\u7684\u6240\u6709\u6587\u4EF6\u4E2D\u7684\u6BCF\u4E2A BFF \u51FD\u6570\u90FD\u4F1A\u6620\u5C04\u4E3A\u4E00\u4E2A\u63A5\u53E3\u3002\u6846\u67B6\u5199\u6CD5\u4E0B ",(0,t.jsx)(s.code,{children:"api/lambda"})," \u4E0B\u7684\u6240\u6709\u6587\u4EF6\u4E2D\u7684\u6BCF\u4E2A BFF \u51FD\u6570\u90FD\u4F1A\u6620\u5C04\u4E3A\u4E00\u4E2A\u63A5\u53E3\u3002"]}),"\n",(0,t.jsxs)(s.div,{className:"rspress-directive note",children:[(0,t.jsx)(s.div,{className:"rspress-directive-title",children:"NOTE"}),(0,t.jsxs)(s.div,{className:"rspress-directive-content",children:[(0,t.jsx)(s.p,{children:"\u51FD\u6570\u5199\u6CD5\u548C\u6846\u67B6\u5199\u6CD5\u4F1A\u5728\u4E0B\u4E00\u8282\u8BE6\u7EC6\u4ECB\u7ECD\u3002"}),"\n"]})]}),"\n",(0,t.jsxs)(s.p,{children:["\u6240\u6709 BFF \u51FD\u6570\u751F\u6210\u7684\u8DEF\u7531\u90FD\u5E26\u6709\u7EDF\u4E00\u7684\u524D\u7F00\uFF0C\u9ED8\u8BA4\u503C\u4E3A ",(0,t.jsx)(s.code,{children:"/api"}),"\u3002\u53EF\u4EE5\u901A\u8FC7 ",(0,t.jsx)(s.a,{href:"/configure/app/bff/prefix",children:"bff.prefix"})," \u8BBE\u7F6E\u516C\u5171\u8DEF\u7531\u7684\u524D\u7F00\u3002"]}),"\n",(0,t.jsx)(s.p,{children:"\u4E0B\u9762\u4ECB\u7ECD\u51E0\u79CD\u8DEF\u7531\u7684\u7EA6\u5B9A\u3002"}),"\n",(0,t.jsxs)(s.h3,{id:"\u9ED8\u8BA4\u8DEF\u7531",children:["\u9ED8\u8BA4\u8DEF\u7531",(0,t.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#\u9ED8\u8BA4\u8DEF\u7531",children:"#"})]}),"\n",(0,t.jsxs)(s.p,{children:["\u4EE5 ",(0,t.jsx)(s.code,{children:"index.[jt]s"})," \u547D\u540D\u7684\u6587\u4EF6\u4F1A\u88AB\u6620\u5C04\u5230\u4E0A\u4E00\u5C42\u76EE\u5F55\u3002"]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"api/index.ts"})," -> ",(0,t.jsx)(s.code,{children:"{prefix}/"})]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"api/user/index.ts"})," -> ",(0,t.jsx)(s.code,{children:"{prefix}/user"})]}),"\n"]}),"\n",(0,t.jsxs)(s.h3,{id:"\u591A\u5C42\u8DEF\u7531",children:["\u591A\u5C42\u8DEF\u7531",(0,t.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#\u591A\u5C42\u8DEF\u7531",children:"#"})]}),"\n",(0,t.jsx)(s.p,{children:"\u652F\u6301\u89E3\u6790\u5D4C\u5957\u7684\u6587\u4EF6\uFF0C\u5982\u679C\u521B\u5EFA\u5D4C\u5957\u6587\u4EF6\u5939\u7ED3\u6784\uFF0C\u6587\u4EF6\u4ECD\u4F1A\u4EE5\u76F8\u540C\u65B9\u5F0F\u81EA\u52A8\u89E3\u6790\u8DEF\u7531\u3002"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"api/hello.ts"})," -> ",(0,t.jsx)(s.code,{children:"{prefix}/hello"})]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"api/user/list.ts"})," -> ",(0,t.jsx)(s.code,{children:"{prefix}/user/list"})]}),"\n"]}),"\n",(0,t.jsxs)(s.h3,{id:"\u52A8\u6001\u8DEF\u7531",children:["\u52A8\u6001\u8DEF\u7531",(0,t.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#\u52A8\u6001\u8DEF\u7531",children:"#"})]}),"\n",(0,t.jsxs)(s.p,{children:["\u540C\u6837\u7684\uFF0C\u521B\u5EFA\u547D\u540D\u5E26\u6709 ",(0,t.jsx)(s.code,{children:"[xxx]"})," \u7684\u6587\u4EF6\u5939\u6216\u8005\u6587\u4EF6\uFF0C\u652F\u6301\u52A8\u6001\u7684\u547D\u540D\u8DEF\u7531\u53C2\u6570\u3002\u52A8\u6001\u8DEF\u7531\u7684\u51FD\u6570\u53C2\u6570\u89C4\u5219\u53EF\u4EE5\u770B ",(0,t.jsx)(s.a,{href:"/guides/advanced-features/bff/function#dynamic-path",children:"dynamac-path"})]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"api/user/[username]/info.ts"})," -> ",(0,t.jsx)(s.code,{children:"{prefix}/user/:username/info"})]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"api/user/username/[action].ts"})," -> ",(0,t.jsx)(s.code,{children:"{prefix}/user/username/:action"})]}),"\n"]}),"\n",(0,t.jsxs)(s.h3,{id:"\u767D\u540D\u5355",children:["\u767D\u540D\u5355",(0,t.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#\u767D\u540D\u5355",children:"#"})]}),"\n",(0,t.jsxs)(s.p,{children:["\u9ED8\u8BA4 ",(0,t.jsx)(s.code,{children:"api/"})," \u76EE\u5F55\u4E0B\u6240\u6709\u6587\u4EF6\u90FD\u4F1A\u5F53\u4F5C BFF \u51FD\u6570\u6587\u4EF6\u53BB\u89E3\u6790\uFF0C\u4F46\u4EE5\u4E0B\u6587\u4EF6\u4E0D\u4F1A\u88AB\u89E3\u6790\uFF1A"]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\u547D\u540D\u4EE5 ",(0,t.jsx)(s.code,{children:"_"})," \u5F00\u5934\u7684\u6587\u4EF6\u3002\u4F8B\u5982\uFF1A",(0,t.jsx)(s.code,{children:"_utils.ts"}),"\u3002"]}),"\n",(0,t.jsxs)(s.li,{children:["\u547D\u540D\u4EE5 ",(0,t.jsx)(s.code,{children:"_"})," \u5F00\u5934\u7684\u6587\u4EF6\u5939\u4E0B\u6240\u6709\u6587\u4EF6\u3002\u4F8B\u5982\uFF1A",(0,t.jsx)(s.code,{children:"_utils/index.ts"}),"\u3001",(0,t.jsx)(s.code,{children:"_utils/cp.ts"}),"\u3002"]}),"\n",(0,t.jsxs)(s.li,{children:["\u6D4B\u8BD5\u6587\u4EF6\u3002\u4F8B\u5982\uFF1A",(0,t.jsx)(s.code,{children:"foo.test.ts"}),"\u3002"]}),"\n",(0,t.jsxs)(s.li,{children:["TypeScript \u7C7B\u578B\u6587\u4EF6\u3002\u4F8B\u5982\uFF1A",(0,t.jsx)(s.code,{children:"hello.d.ts"}),"\u3002"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"node_module"})," \u4E0B\u7684\u6587\u4EF6\u3002"]}),"\n"]}),"\n",(0,t.jsxs)(s.h2,{id:"restful-api",children:["RESTful API",(0,t.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#restful-api",children:"#"})]}),"\n",(0,t.jsx)(s.p,{children:"Modern.js \u7684 BFF \u51FD\u6570\u9700\u8981\u9075\u5FAA RESTful API \u6807\u51C6\u6765\u5B9A\u4E49, \u9075\u5FAA HTTP Method \u89C4\u8303\uFF0C\u5E76\u4E14\u4E0D\u5141\u8BB8\u81EA\u7531\u5B9A\u4E49\u53C2\u6570\u3002"}),"\n",(0,t.jsxs)(s.div,{className:"rspress-directive info",children:[(0,t.jsx)(s.div,{className:"rspress-directive-title",children:"INFO"}),(0,t.jsxs)(s.div,{className:"rspress-directive-content",children:[(0,t.jsxs)(s.p,{children:["\u5047\u8BBE\u51FD\u6570\u5141\u8BB8\u81EA\u7531\u5B9A\u4E49\u53C2\u6570\uFF0C\u4EA7\u51FA\u7684\u8DEF\u7531\u5FC5\u7136\u7531",(0,t.jsx)(s.strong,{children:"\u79C1\u6709\u534F\u8BAE"}),"\u8FDB\u884C\u8C03\u7528\uFF08\u539F\u56E0\u662F\u65E0\u6CD5\u533A\u5206\u8BF7\u6C42\u53C2\u6570\u4E0E\u8BF7\u6C42\u4F53\uFF09\uFF0C\u800C\u65E0\u6CD5\u5B9E\u73B0\u4EFB\u610F\u7684 RESTful API\u3002"]}),"\n",(0,t.jsxs)(s.p,{children:["\u5982\u679C\u670D\u52A1\u4EC5\u7528\u4E8E\u5E94\u7528\u672C\u8EAB\u4E0D\u5B58\u5728\u95EE\u9898\uFF0C\u4F46\u5B83",(0,t.jsx)(s.strong,{children:"\u4E0D\u6807\u51C6\u7684\u63A5\u53E3\u5B9A\u4E49"}),"\u65E0\u6CD5\u878D\u5165\u66F4\u5927\u7684\u4F53\u7CFB\u3002 \u5728\u591A\u4E2A\u7CFB\u7EDF\u5171\u540C\u5DE5\u4F5C\u7684\u60C5\u51B5\u4E0B\uFF08\u4F8B\u5982 BFF \u4F4E\u7801\u642D\u5EFA\uFF09\uFF0C\u4F1A\u5BFC\u81F4\u5176\u4ED6\u7CFB\u7EDF\u4E5F\u9700\u8981\u9075\u5FAA",(0,t.jsx)(s.strong,{children:"\u79C1\u6709\u534F\u8BAE"}),"\u3002"]}),"\n"]})]}),"\n",(0,t.jsxs)(s.h3,{id:"\u51FD\u6570\u5177\u540D\u5BFC\u51FA",children:["\u51FD\u6570\u5177\u540D\u5BFC\u51FA",(0,t.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#\u51FD\u6570\u5177\u540D\u5BFC\u51FA",children:"#"})]}),"\n",(0,t.jsxs)(s.p,{children:["Modern.js BFF \u51FD\u6570\u7684\u5BFC\u51FA\u540D\u51B3\u5B9A\u4E86\u51FD\u6570\u5BF9\u5E94\u63A5\u53E3\u7684 Method\uFF0C\u5982 ",(0,t.jsx)(s.code,{children:"get"}),"\uFF0C",(0,t.jsx)(s.code,{children:"post"})," \u7B49\u3002"]}),"\n",(0,t.jsx)(s.p,{children:"\u4F8B\u5982\uFF0C\u6309\u7167\u4EE5\u4E0B\u4F8B\u5B50\uFF0C\u53EF\u5BFC\u51FA\u4E00\u4E2A GET \u63A5\u53E3\u3002"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-ts",children:"export const get = async () => {\n  return {\n    name: 'Modern.js',\n    desc: '\u73B0\u4EE3 web \u5DE5\u7A0B\u65B9\u6848',\n  };\n};\n"})}),"\n",(0,t.jsxs)(s.p,{children:["\u6309\u7167\u4EE5\u4E0B\u4F8B\u5B50\uFF0C\u5219\u53EF\u5BFC\u51FA\u4E00\u4E2A ",(0,t.jsx)(s.code,{children:"POST"})," \u63A5\u53E3"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-ts",children:"export const post = async () => {\n  return {\n    name: 'Modern.js',\n    desc: '\u73B0\u4EE3 web \u5DE5\u7A0B\u65B9\u6848',\n  };\n};\n"})}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["\u5BF9\u5E94 HTTP Method\uFF0CModern.js \u4E5F\u652F\u6301\u4E86 9 \u79CD\u5B9A\u4E49\uFF0C\u5373\uFF1A",(0,t.jsx)(s.code,{children:"GET"}),"\u3001",(0,t.jsx)(s.code,{children:"POST"}),"\u3001",(0,t.jsx)(s.code,{children:"PUT"}),"\u3001",(0,t.jsx)(s.code,{children:"DELETE"}),"\u3001",(0,t.jsx)(s.code,{children:"CONNECT"}),"\u3001",(0,t.jsx)(s.code,{children:"TRACE"}),"\u3001",(0,t.jsx)(s.code,{children:"PATCH"}),"\u3001",(0,t.jsx)(s.code,{children:"OPTIONS"}),"\u3001",(0,t.jsx)(s.code,{children:"HEAD"}),"\uFF0C\u5373\u53EF\u4EE5\u7528\u8FD9\u4E9B Method \u4F5C\u4E3A\u51FD\u6570\u5BFC\u51FA\u7684\u540D\u5B57\u3002"]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["\u540D\u5B57\u662F\u5927\u5C0F\u4E0D\u654F\u611F\u7684\uFF0C\u5982\u679C\u662F ",(0,t.jsx)(s.code,{children:"GET"}),"\uFF0C\u5199\u6210 ",(0,t.jsx)(s.code,{children:"get"}),"\u3001",(0,t.jsx)(s.code,{children:"Get"}),"\u3001",(0,t.jsx)(s.code,{children:"GEt"}),"\u3001",(0,t.jsx)(s.code,{children:"GET"}),"\uFF0C\u90FD\u53EF\u4EE5\u51C6\u786E\u8BC6\u522B\u3002\u800C\u9ED8\u8BA4\u5BFC\u51FA\uFF0C\u5373 ",(0,t.jsx)(s.code,{children:"export default xxx"})," \u5219\u4F1A\u88AB\u6620\u5C04\u4E3A ",(0,t.jsx)(s.code,{children:"Get"}),"\u3002"]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"\u53EF\u4EE5\u5728\u4E00\u4E2A\u6587\u4EF6\u4E2D\u5B9A\u4E49\u591A\u4E2A\u4E0D\u540C Method \u7684\u51FD\u6570\uFF0C\u4F46\u5982\u679C\u5B9A\u4E49\u591A\u4E2A\u76F8\u540C Method \u7684\u51FD\u6570\uFF0C\u5219\u53EA\u6709\u7B2C\u4E00\u4E2A\u4F1A\u751F\u6548\u3002"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.div,{className:"rspress-directive info",children:[(0,t.jsx)(s.div,{className:"rspress-directive-title",children:"INFO"}),(0,t.jsxs)(s.div,{className:"rspress-directive-content",children:[(0,t.jsx)(s.p,{children:"\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u5B9A\u4E49\u7684\u51FD\u6570\u90FD\u5E94\u8BE5\u662F\u5F02\u6B65\u7684\uFF0C\u4E0E\u51FD\u6570\u8C03\u7528\u65F6\u7C7B\u578B\u6709\u5173\uFF0C\u540E\u9762\u4F1A\u63D0\u5230\u3002"}),"\n"]})]}),"\n",(0,t.jsxs)(s.h3,{id:"\u51FD\u6570\u53C2\u6570\u89C4\u5219",children:["\u51FD\u6570\u53C2\u6570\u89C4\u5219",(0,t.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#\u51FD\u6570\u53C2\u6570\u89C4\u5219",children:"#"})]}),"\n",(0,t.jsx)(s.p,{children:"\u5982\u4E0A\u6240\u8FF0\uFF0C\u4E3A\u4E86\u6EE1\u8DB3 RESTful API \u7684\u8BBE\u8BA1\u6807\u51C6\uFF0C\u56E0\u6B64 Modern.js \u4E2D BFF \u51FD\u6570\u9700\u8981\u9075\u5FAA\u4E00\u5B9A\u7684\u5165\u53C2\u89C4\u5219\u3002"}),"\n",(0,t.jsxs)(s.p,{children:["\u51FD\u6570\u53C2\u6570\u5206\u4E3A\u4E24\u5757\uFF0C\u5206\u522B\u662F\u8BF7\u6C42\u8DEF\u5F84\u4E2D\u7684\u52A8\u6001\u90E8\u5206\u548C\u8BF7\u6C42\u9009\u9879 ",(0,t.jsx)(s.code,{children:"RequestOption"}),"\u3002"]}),"\n",(0,t.jsxs)(s.h4,{id:"dynamic-path",children:["Dynamic Path",(0,t.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#dynamic-path",children:"#"})]}),"\n",(0,t.jsx)(s.p,{children:"\u52A8\u6001\u8DEF\u7531\u4F1A\u4F5C\u4E3A\u51FD\u6570\u7B2C\u4E00\u90E8\u5206\u7684\u5165\u53C2\uFF0C\u6BCF\u4E2A\u5165\u53C2\u5BF9\u5E94\u4E00\u6BB5\u52A8\u6001\u8DEF\u7531\u3002\u4F8B\u5982\u4EE5\u4E0B\u793A\u4F8B\uFF0Cuid \u4F1A\u4F5C\u4E3A\u524D\u4E24\u4E2A\u53C2\u6570\u4F20\u9012\u5230\u51FD\u6570\u4E2D\uFF1A"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-ts",meta:'title="api/[level]/[id].ts"',children:"export default async (level: number, id: number) => {\n  const userData = await queryUser(level, uid);\n  return userData;\n};\n"})}),"\n",(0,t.jsx)(s.p,{children:"\u5728\u8C03\u7528\u65F6\u76F4\u63A5\u4F20\u5165\u52A8\u6001\u53C2\u6570\uFF1A"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-ts",meta:'title="App.tsx"',children:"import { useState, useEffect } from 'react';\nimport { get as getUser } from '@api/[level]/[id]';\n\nexport default () => {\n  const [name, setName] = useState('');\n\n  useEffect(() => {\n    getUser(6, 001).then(userData => setName(userData.name));\n  }, []);\n\n  return <div>{name}</div>;\n};\n"})}),"\n",(0,t.jsxs)(s.h4,{id:"requestoption",children:["RequestOption",(0,t.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#requestoption",children:"#"})]}),"\n",(0,t.jsxs)(s.p,{children:["Dynamic Path \u4E4B\u540E\u7684\u53C2\u6570\u662F\u5305\u542B querystring\u3001request body \u7684\u5BF9\u8C61 ",(0,t.jsx)(s.code,{children:"RequestOption"}),"\uFF0C\u8FD9\u4E2A\u5B57\u6BB5\u7528\u6765\u5B9A\u4E49 ",(0,t.jsx)(s.code,{children:"data"})," \u548C ",(0,t.jsx)(s.code,{children:"query"})," \u7684\u7C7B\u578B\u3002"]}),"\n",(0,t.jsxs)(s.p,{children:["\u5728\u4E0D\u5B58\u5728\u52A8\u6001\u8DEF\u7531\u7684\u666E\u901A\u51FD\u6570\u4E2D\uFF0C\u53EF\u4EE5\u4ECE\u7B2C\u4E00\u4E2A\u5165\u53C2\u4E2D\u83B7\u53D6\u4F20\u5165\u7684 ",(0,t.jsx)(s.code,{children:"data"})," \u548C ",(0,t.jsx)(s.code,{children:"query"}),"\uFF0C\u4F8B\u5982\uFF1A"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-ts",meta:'title="api/hello.ts"',children:"import type { RequestOption } from '@modern-js/runtime/server';\n\nexport async function post({\n  query,\n  data,\n}: RequestOption<Record<string, string>, Record<string, string>>) {\n  // do somethings\n}\n"})}),"\n",(0,t.jsx)(s.p,{children:"\u8FD9\u91CC\u4F60\u4E5F\u53EF\u4EE5\u4F7F\u7528\u81EA\u5B9A\u4E49\u7C7B\u578B\uFF1A"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-ts",meta:'title="api/lambda/hello.ts"',children:"import type { RequestOption } from '@modern-js/runtime/server';\n\ntype IQuery = {\n  // some types\n};\ntype IData = {\n  // some types\n};\n\nexport async function post({ query, data }: { query: IQuery; data: IData }) {\n  // do somethings\n}\n"})}),"\n",(0,t.jsxs)(s.p,{children:["\u5F53\u51FD\u6570\u6587\u4EF6\u4F7F\u7528\u52A8\u6001\u8DEF\u7531\u89C4\u5219\u65F6\uFF0C\u52A8\u6001\u8DEF\u7531\u4F1A\u5728 ",(0,t.jsx)(s.code,{children:"RequestOption"})," \u5BF9\u8C61\u53C2\u6570\u524D\u3002"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-ts",meta:'title="api/[sku]/[id]/item.ts"',children:"export async function post(\n  sku: string,\n  id: string,\n  {\n    data,\n    query,\n  }: RequestOption<Record<string, string>, Record<string, string>>,\n) {\n  // do somethings\n}\n"})}),"\n",(0,t.jsx)(s.p,{children:"\u8C03\u7528\u65F6\u4E5F\u6309\u7167\u51FD\u6570\u5B9A\u4E49\uFF0C\u4F20\u5165\u5BF9\u5E94\u7684\u53C2\u6570\u5373\u53EF\uFF1A"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-ts",meta:'title="App.tsx"',children:"import { post } from '@api/[sku]/[id]/item';\n\nexport default () => {\n  const addSku = () => {\n    post('0001' /* sku */, '1234' /* id */, {\n      query: {\n        /* ... */\n      },\n      data: {\n        /* ... */\n      },\n    });\n  };\n\n  return <div onClick={addSku}>\u6DFB\u52A0 SKU</div>;\n};\n"})}),"\n",(0,t.jsx)(s.p,{children:"\u4E4B\u524D\u63D0\u5230\uFF0C\u5B9A\u4E49\u7684\u51FD\u6570\u90FD\u5E94\u8BE5\u662F\u5F02\u6B65\u7684\uFF0C\u662F\u56E0\u4E3A\u5728\u524D\u7AEF\u8C03\u7528\u65F6\u4F1A\u81EA\u52A8\u8F6C\u6362\u6210 HTTP \u63A5\u53E3\u8C03\u7528\uFF0C\u6240\u4EE5\u4E3A\u4E86\u4FDD\u6301\u7C7B\u578B\u5B9A\u4E49\u4E0E\u5B9E\u9645\u8C03\u7528\u4F53\u9A8C\u7EDF\u4E00\uFF0C\u9700\u8981\u5728\u5B9A\u4E49 BFF \u51FD\u6570\u65F6\u5C06\u5B83\u8BBE\u7F6E\u4E3A\u5F02\u6B65\u3002"})]})}function c(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:s}=Object.assign({},(0,r.useMDXComponents)(),e.components);return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}var l=c;c.__RSPRESS_PAGE_META={},c.__RSPRESS_PAGE_META["zh%2Fguides%2Fadvanced-features%2Fbff%2Ffunction.mdx"]={toc:[{text:"\u542F\u7528 BFF",id:"\u542F\u7528-bff",depth:2},{text:"BFF \u51FD\u6570",id:"bff-\u51FD\u6570",depth:2},{text:"\u51FD\u6570\u8DEF\u7531",id:"\u51FD\u6570\u8DEF\u7531",depth:2},{text:"\u9ED8\u8BA4\u8DEF\u7531",id:"\u9ED8\u8BA4\u8DEF\u7531",depth:3},{text:"\u591A\u5C42\u8DEF\u7531",id:"\u591A\u5C42\u8DEF\u7531",depth:3},{text:"\u52A8\u6001\u8DEF\u7531",id:"\u52A8\u6001\u8DEF\u7531",depth:3},{text:"\u767D\u540D\u5355",id:"\u767D\u540D\u5355",depth:3},{text:"RESTful API",id:"restful-api",depth:2},{text:"\u51FD\u6570\u5177\u540D\u5BFC\u51FA",id:"\u51FD\u6570\u5177\u540D\u5BFC\u51FA",depth:3},{text:"\u51FD\u6570\u53C2\u6570\u89C4\u5219",id:"\u51FD\u6570\u53C2\u6570\u89C4\u5219",depth:3},{text:"Dynamic Path",id:"dynamic-path",depth:4},{text:"RequestOption",id:"requestoption",depth:4}],title:"\u57FA\u7840\u7528\u6CD5",frontmatter:{sidebar_position:1,title:"\u57FA\u7840\u7528\u6CD5"}}},58671:function(e,s,n){"use strict";n.r(s),n.d(s,{default:function(){return l}});var t=n("9880");n("6171");var r=n("54234"),i=n.n(r),a=n("88375"),c=n("37637"),l=e=>{let{title:s,desc:n,href:r}=e;return(0,t.jsxs)("a",{href:(0,a.withBase)(r),target:"_blank",style:{textDecoration:"none"},className:i(c.card),children:[(0,t.jsx)("span",{className:c.title,children:s}),(0,t.jsx)("span",{className:c.desc,children:n})]})}},30777:function(e,s,n){"use strict";n.r(s),n.d(s,{FeatureLayout:function(){return i}});var t=n("9880");n("6171");var r=n("24433");let i=e=>{let{children:s}=e;return(0,t.jsx)("div",{className:r["feature-layout"],children:s})}},55478:function(e,s,n){"use strict";n.r(s),n.d(s,{default:function(){return l}}),n("90517"),n("54368");var t=n("9880"),r=n("39270"),i=n("4985");let a=e=>e.startsWith("http://")||e.startsWith("https://");function c(e){let{to:s,href:n,label:r,...i}=e;return(0,t.jsx)("a",{className:"linkItem",target:"_blank",href:n||s,...i,children:n&&a(n)?(0,t.jsx)("span",{children:r}):r})}function l(){let e=(0,r.useI18n)(),s=[{title:e("guide"),items:[{label:e("quickStart"),to:(0,r.useUrl)("/guides/get-started/quick-start")},{label:e("coreConcept"),to:(0,r.useUrl)("/guides/concept/entries")},{label:e("basicFeatures"),to:(0,r.useUrl)("/guides/basic-features/routes")},{label:e("advancedFeatures"),to:(0,r.useUrl)("/guides/advanced-features/rspack-start")}]},{title:"API",items:[{label:e("configuration"),to:(0,r.useUrl)("/configure/app/usage")},{label:e("command"),to:(0,r.useUrl)("/apis/app/commands")},{label:e("runtime"),to:(0,r.useUrl)("/apis/app/runtime/core/bootstrap")},{label:e("conventions"),to:(0,r.useUrl)("apis/app/hooks/src/app")}]},{title:e("topic"),items:[{label:e("microFrontend"),to:(0,r.useUrl)("/guides/topic-detail/micro-frontend/c01-introduction")},{label:e("stateManagement"),to:(0,r.useUrl)("/guides/topic-detail/model/quick-start")},{label:e("pluginSystem"),to:(0,r.useUrl)("/guides/topic-detail/framework-plugin/introduction")},{label:e("projectGenerator"),to:(0,r.useUrl)("/guides/topic-detail/generator/project")}]},{title:e("help"),items:[{label:e("changelog"),to:"https://github.com/web-infra-dev/modern.js/releases"},{label:"GitHub Issues",to:"https://github.com/web-infra-dev/modern.js/issues"},{label:e("githubDiscussion"),to:"https://github.com/web-infra-dev/modern.js/discussions"}]}],n=s.map((e,s)=>(0,t.jsxs)("div",{className:i.linkWrapper,children:[(0,t.jsx)("div",{className:i.linkTitle,children:e.title}),(0,t.jsx)("ul",{className:i.items,children:e.items.map((e,s)=>(0,t.jsx)("li",{className:i.link,children:(0,t.jsx)(c,{...e})},e.to||s))})]},s));return(0,t.jsx)("footer",{className:i.footer,children:(0,t.jsxs)("div",{className:i.wrapper,children:[(0,t.jsx)("img",{className:i.logo,src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/zq-uylkvT/ljhwZthlaukjlkulzlp/modern-logo-home-page-0209.svg"}),(0,t.jsx)("div",{className:i.linksWrapper,children:n})]})})}},85298:function(e,s,n){"use strict";n.r(s),n.d(s,{default:function(){return i}});var t=n("9880");n("6171");var r=n("57204"),i=e=>{let{children:s}=e;return(0,t.jsx)("div",{className:r.titleWrap,children:(0,t.jsx)("h2",{className:r.title,children:s})})}},21676:function(e,s,n){"use strict";n.r(s),n.d(s,{EN_US:function(){return t}});let t={introduction:"Introduction",quickStart:"Quick Start",slogan:"A Progressive React Framework for modern web development",secondSlogan1:"Enjoy the development experience.",secondSlogan2:"Make innovation happen faster.",feature1:"Rust Bundler",featureDesc1:"Easily switch to Rspack bundler with faster build speed.",feature2:"Integrated BFF",featureDesc2:"Develop BFF code in the same project, enjoy simple function calls.",feature3:"Nested Routes",featureDesc3:"File-as-route, comes with lots performance optimizations.",feature4:"Multi-Rendering Mode",featureDesc4:"SSR, SSG, SPR, all out of the box for you.",feature5:"CSS Solutions",featureDesc5:"CSS Modules, CSS-in-JS, Tailwind CSS, take your pick.",feature6:"Easy to Configure",featureDesc6:"Launch with zero configuration, then everything is configurable.",solutions:"Solutions",solutionsDesc1:"A progressive React framework for web development.",solutionsDesc2:"A powerful solution for npm package development.",solutionsDesc3:"An Rspack-based build tool for web development.",solutionsDesc4:"A fast Rspack-based static site generator",guide:"Guide",topic:"Topic",help:"Help",coreConcept:"Core Concept",basicFeatures:"Basic Features",advancedFeatures:"Advanced Features",configuration:"Configuration",command:"Command",runtime:"Runtime",conventions:"Conventions",microFrontend:"Micro Frontend",stateManagement:"State Management",pluginSystem:"Plugin System",projectGenerator:"Project Generator",githubDiscussion:"Github Discussion",changelog:"Changelog",doubao:"Doubao",writingo:"Writingo",volctrans:"Volctrans",shidianbaike:"Shidian Baike",xiaohe:"Xiaohe",dongchedi:"Dongchedi",volcengineDeveloper:"Volcengine Developer"}},39270:function(e,s,n){"use strict";n.r(s),n.d(s,{useUrl:function(){return c},useI18n:function(){return l}});var t=n("88375"),r=n("21676"),i=n("53724");let a={en:r.EN_US,zh:i.ZH_CN};function c(e){let s=(0,t.useLang)();return(0,t.withBase)("zh"===s?e:`/en${e}`)}function l(){let e=(0,t.useLang)();return s=>a[e][s]}},53724:function(e,s,n){"use strict";n.r(s),n.d(s,{ZH_CN:function(){return t}});let t={introduction:"\u4ECB\u7ECD",quickStart:"\u5FEB\u901F\u4E0A\u624B",slogan:"\u57FA\u4E8E React \u7684\u6E10\u8FDB\u5F0F Web \u5F00\u53D1\u6846\u67B6",secondSlogan1:"\u4EAB\u53D7\u6109\u60A6\u7684\u5F00\u53D1\u4F53\u9A8C\uFF0C",secondSlogan2:"\u8BA9\u521B\u65B0\u66F4\u5FEB\u53D1\u751F\u3002",feature1:"Rust \u6784\u5EFA",featureDesc1:"\u8F7B\u677E\u5207\u6362\u5230 Rspack \u6784\u5EFA\u5DE5\u5177\uFF0C\u7F16\u8BD1\u98DE\u5FEB\u3002",feature2:"\u4E00\u4F53\u5316\u5F00\u53D1",featureDesc2:"\u5728\u540C\u4E00\u9879\u76EE\u4E2D\u5B8C\u6210 BFF \u5F00\u53D1\uFF0C\u4EAB\u53D7\u7B80\u6D01\u7684\u51FD\u6570\u8C03\u7528\u3002",feature3:"\u5D4C\u5957\u8DEF\u7531",featureDesc3:"\u6587\u4EF6\u7CFB\u7EDF\u5373\u8DEF\u7531\uFF0C\u9644\u8D60\u5168\u5957\u6027\u80FD\u4F18\u5316\u3002",feature4:"\u591A\u6E32\u67D3\u6A21\u5F0F",featureDesc4:"SSR\u3001SSG\u3001SPR \u7B49\u591A\u79CD\u6E32\u67D3\u6A21\u5F0F\uFF0C\u901A\u901A\u5F00\u7BB1\u5373\u7528\u3002",feature5:"CSS \u65B9\u6848",featureDesc5:"CSS Modules\u3001CSS-in-JS\u3001Tailwind CSS\uFF0C\u4EFB\u4F60\u6311\u9009\u3002",feature6:"\u6613\u4E8E\u914D\u7F6E",featureDesc6:"\u4EE5\u96F6\u914D\u7F6E\u542F\u52A8\uFF0C\u7136\u540E\u4E00\u5207\u7686\u53EF\u914D\u7F6E\u3002",solutions:"\u89E3\u51B3\u65B9\u6848",solutionsDesc1:"\u57FA\u4E8E React \u7684\u6E10\u8FDB\u5F0F Web \u5F00\u53D1\u6846\u67B6\u3002",solutionsDesc2:"\u7B80\u5355\u3001\u9AD8\u6027\u80FD\u7684 npm \u5305\u5F00\u53D1\u65B9\u6848\u3002",solutionsDesc3:"\u57FA\u4E8E Rspack \u7684 Web \u6784\u5EFA\u5DE5\u5177\u3002",solutionsDesc4:"\u57FA\u4E8E Rspack \u7684\u9759\u6001\u7AD9\u70B9\u751F\u6210\u5668\u3002",guide:"\u6307\u5357",topic:"\u4E13\u9898",help:"\u5E2E\u52A9",coreConcept:"\u6838\u5FC3\u6982\u5FF5",basicFeatures:"\u57FA\u7840\u529F\u80FD",advancedFeatures:"\u8FDB\u9636\u529F\u80FD",configuration:"\u914D\u7F6E",command:"\u547D\u4EE4",runtime:"\u8FD0\u884C\u65F6",conventions:"\u76EE\u5F55\u7EA6\u5B9A",microFrontend:"\u5FAE\u524D\u7AEF",stateManagement:"\u72B6\u6001\u7BA1\u7406",pluginSystem:"\u63D2\u4EF6\u7CFB\u7EDF",projectGenerator:"\u9879\u76EE\u751F\u6210\u5668",githubDiscussion:"Github \u8BA8\u8BBA\u533A",changelog:"\u66F4\u65B0\u65E5\u5FD7",doubao:"\u8C46\u5305",writingo:"\u706B\u5C71\u5199\u4F5C",volctrans:"\u706B\u5C71\u7FFB\u8BD1",shidianbaike:"\u8BC6\u5178\u767E\u79D1",xiaohe:"\u5C0F\u8377\u5065\u5EB7",dongchedi:"\u61C2\u8F66\u5E1D",volcengineDeveloper:"\u706B\u5C71\u5F15\u64CE\u5F00\u53D1\u8005\u793E\u533A"}},18553:function(e,s,n){"use strict";n.r(s),n.d(s,{default:function(){return i}});var t=n("72024"),r=n("35540");n.es(t,s);var i={...t.default,HomeLayout:r.default}},35540:function(e,s,n){"use strict";n.r(s),n.d(s,{default:function(){return f}}),n("90517"),n("54368");var t=n("9880"),r=n("90591"),i=n("88375"),a=n("6171"),c=n("58671"),l=n("85298"),d=n("30777"),o=n("55478"),u=n("39270"),h=n("56340");let p=()=>{let e=(0,u.useI18n)();return(0,t.jsx)("div",{className:h.header,children:(0,t.jsxs)("header",{className:(0,r.default)("hero hero--primary",h.heroBanner),children:[(0,t.jsxs)("h1",{className:h.title,children:[(0,t.jsx)("div",{children:"Inspire Creativity in"}),(0,t.jsx)("div",{className:h.titleGradient,children:"Modern Web Development"})]}),(0,t.jsxs)("div",{className:h.buttons,children:[(0,t.jsxs)("a",{href:(0,u.useUrl)("/guides/get-started/introduction"),className:h.leftButton,children:[e("introduction"),(0,t.jsx)("img",{width:"20",height:"20",className:h.startArrow,src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/aphqeh7uhohpquloj/modern-js/right-arrow.svg?url"})]}),(0,t.jsx)("a",{href:(0,u.useUrl)("/guides/get-started/quick-start"),className:h.rightButton,children:e("quickStart")})]})]})})};function f(){let e=(0,u.useI18n)(),{pathname:s}=(0,i.useLocation)();(0,a.useEffect)(()=>(window.MODERN_THEME="dark",()=>{window.MODERN_THEME=void 0}),[s]);let n=[{title:e("feature1"),href:(0,u.useUrl)("/guides/concept/builder"),desc:e("featureDesc1")},{title:e("feature2"),href:(0,u.useUrl)("/guides/advanced-features/bff/index"),desc:e("featureDesc2")},{title:e("feature3"),href:(0,u.useUrl)("/guides/basic-features/routes"),desc:e("featureDesc3")},{title:e("feature4"),href:(0,u.useUrl)("/guides/advanced-features/ssr"),desc:e("featureDesc4")},{title:e("feature5"),href:(0,u.useUrl)("/guides/basic-features/css"),desc:e("featureDesc5")},{title:e("feature6"),href:(0,u.useUrl)("/configure/app/usage"),desc:e("featureDesc6")}],f=(0,i.useLang)(),x=[{title:"Modern.js Framework",href:(0,u.useUrl)("/guides/get-started/introduction"),desc:e("solutionsDesc1")},{title:"Modern.js Module",href:`https://modernjs.dev/module-tools${"en"===f?"/en":""}`,desc:e("solutionsDesc2")},{title:"Modern.js Builder",href:`https://modernjs.dev/builder${"en"===f?"/en":""}`,desc:e("solutionsDesc3")},{title:"Rspress",href:`https://rspress.dev${"en"===f?"":"/zh"}`,desc:e("solutionsDesc4")}];return(0,t.jsxs)("div",{children:[(0,t.jsxs)(i.Helmet,{children:[(0,t.jsx)("html",{className:"dark"}),(0,t.jsx)("script",{children:"window.MODERN_THEME = 'dark';"}),(0,t.jsx)("style",{type:"text/css",children:`
          .rspress-doc-appearance {
            display: none!important;
          }
        `})]}),(0,t.jsx)(p,{}),(0,t.jsxs)("main",{className:h["homepage-main"],children:[(0,t.jsxs)(d.FeatureLayout,{children:[(0,t.jsx)(l.default,{children:e("solutions")}),(0,t.jsx)("div",{className:h.cardContainer,children:x.map((e,s)=>(0,t.jsx)(c.default,{title:e.title,desc:e.desc,href:e.href},s))})]}),(0,t.jsx)(d.FeatureLayout,{children:(0,t.jsxs)("h1",{className:(0,r.default)([h.title,h.titleGradient]),style:{textAlign:"left",marginBottom:32},children:[(0,t.jsx)("div",{children:e("secondSlogan1")}),(0,t.jsx)("div",{children:e("secondSlogan2")})]})}),(0,t.jsxs)(d.FeatureLayout,{children:[(0,t.jsx)(l.default,{children:"Modern.js Framework"}),(0,t.jsx)("div",{className:h.cardContainer,children:n.map((e,s)=>(0,t.jsx)(c.default,{title:e.title,desc:e.desc,href:e.href},s))})]}),(0,t.jsx)(o.default,{})]})]})}},24433:function(e,s,n){"use strict";e.exports={"feature-layout":"feature-layout-ea3480",featureLayout:"feature-layout-ea3480"}},57204:function(e,s,n){"use strict";e.exports={title:"title-cfbf64",title:"title-cfbf64",titleWrap:"titleWrap-_245ce",titleWrap:"titleWrap-_245ce"}},37637:function(e,s,n){"use strict";e.exports={card:"card-_1c4af",card:"card-_1c4af",desc:"desc-a85d41",desc:"desc-a85d41",icon:"icon-_02dc1",icon:"icon-_02dc1",title:"title-b44362",title:"title-b44362"}},4985:function(e,s,n){"use strict";e.exports={footer:"footer-_1419c",footer:"footer-_1419c",link:"link-fff29d",link:"link-fff29d",linkTitle:"linkTitle-c4002f",linkTitle:"linkTitle-c4002f",linkWrapper:"linkWrapper-_1b066",linkWrapper:"linkWrapper-_1b066",linksWrapper:"linksWrapper-_4f8ed",linksWrapper:"linksWrapper-_4f8ed",logo:"logo-_22a8c",logo:"logo-_22a8c",wrapper:"wrapper-b33135",wrapper:"wrapper-b33135"}},56340:function(e,s,n){"use strict";e.exports={buttons:"buttons-e3d388",buttons:"buttons-e3d388",cardContainer:"cardContainer-_79b2f",cardContainer:"cardContainer-_79b2f",flowContainer:"flowContainer-_225bb",flowContainer:"flowContainer-_225bb",flowLine:"flowLine-a3999c",flowLine:"flowLine-a3999c",flowLineMobile:"flowLineMobile-_4fe65",flowLineMobile:"flowLineMobile-_4fe65",header:"header-_720aa",header:"header-_720aa",heroBanner:"heroBanner-_85caa",heroBanner:"heroBanner-_85caa","homepage-main":"homepage-main-_77128",homepageMain:"homepage-main-_77128",leftButton:"leftButton-_7ef36",leftButton:"leftButton-_7ef36",logo:"logo-_9cf1f",logo:"logo-_9cf1f",rightButton:"rightButton-_91c6e",rightButton:"rightButton-_91c6e","section-title":"section-title-dc2851",sectionTitle:"section-title-dc2851",singleImg:"singleImg-_71172",singleImg:"singleImg-_71172",singleImgCard:"singleImgCard-_1456f",singleImgCard:"singleImgCard-_1456f",singleImgWrap:"singleImgWrap-_12f4b",singleImgWrap:"singleImgWrap-_12f4b",startArrow:"startArrow-c03ec9",startArrow:"startArrow-c03ec9",title:"title-_6c4ac",title:"title-_6c4ac",titleGradient:"titleGradient-_84d55",titleGradient:"titleGradient-_84d55"}}}]);