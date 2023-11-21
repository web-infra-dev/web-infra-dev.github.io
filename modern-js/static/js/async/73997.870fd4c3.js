(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["73997"],{86348:function(e,n,s){"use strict";s.r(n),s.d(n,{default:function(){return l}});var r=s("9880"),i=s("23169"),d=s("18553");function c(e){let n=Object.assign({ol:"ol",li:"li",code:"code",pre:"pre"},(0,i.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\u6267\u884C ",(0,r.jsx)(n.code,{children:"pnpm new"}),"\uFF0C\u9009\u62E9\u542F\u7528 BFF"]}),"\n",(0,r.jsxs)(n.li,{children:["\u6839\u636E\u9009\u62E9\u7684\u8FD0\u884C\u65F6\u6846\u67B6\uFF0C\u5C06\u4E0B\u9762\u7684\u4EE3\u7801\u6DFB\u52A0\u5230 ",(0,r.jsx)(n.code,{children:"modern.config.[tj]s"})," \u4E2D\uFF1A"]}),"\n"]}),"\n","\n",(0,r.jsxs)(d.Tabs,{children:[(0,r.jsx)(d.Tab,{value:"express",label:"Express.js",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import { expressPlugin } from '@modern-js/plugin-express';\nimport { bffPlugin } from '@modern-js/plugin-bff';\n\nexport default defineConfig({\n  plugins: [expressPlugin(), bffPlugin()],\n});\n"})})}),(0,r.jsx)(d.Tab,{value:"koa",label:"Koa.js",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import { koaPlugin } from '@modern-js/plugin-koa';\nimport { bffPlugin } from '@modern-js/plugin-bff';\n\nexport default defineConfig({\n  plugins: [koaPlugin(), bffPlugin()],\n});\n"})})})]})]})}function t(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,i.useMDXComponents)(),e.components);return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}var l=t;t.__RSPRESS_PAGE_META={},t.__RSPRESS_PAGE_META["zh%2Fcomponents%2Fenable-bff.mdx"]={toc:[],title:"",frontmatter:{}}},76709:function(e,n,s){"use strict";s.r(n),s.d(n,{default:function(){return l}});var r=s("9880"),i=s("23169"),d=s("86348");function c(e){let n=Object.assign({h1:"h1",a:"a",p:"p",code:"code",h2:"h2",strong:"strong",div:"div",pre:"pre",img:"img",h3:"h3",ul:"ul",li:"li",h4:"h4"},(0,i.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"\u57FA\u7840\u7528\u6CD5",children:["\u57FA\u7840\u7528\u6CD5",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u57FA\u7840\u7528\u6CD5",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["\u901A\u8FC7 Modern.js \u5F00\u53D1\u7684\u5E94\u7528\uFF0C\u53EF\u4EE5\u5728 ",(0,r.jsx)(n.code,{children:"api/"})," \u76EE\u5F55\u4E0B\u5B9A\u4E49\u63A5\u53E3\u51FD\u6570\uFF0C\u524D\u7AEF\u53EF\u4EE5\u8C03\u7528\u8FD9\u4E9B\u63A5\u53E3\u51FD\u6570\uFF0C\u5373\u53EF\u53D1\u8D77\u8BF7\u6C42\uFF0C\u65E0\u9700\u5199\u524D\u540E\u7AEF\u80F6\u6C34\u5C42\u4EE3\u7801\uFF0C\u540C\u65F6\u4FDD\u8BC1\u524D\u540E\u7AEF\u7C7B\u578B\u5B89\u5168\u3002"]}),"\n",(0,r.jsxs)(n.h2,{id:"\u542F\u7528-bff",children:["\u542F\u7528 BFF",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u542F\u7528-bff",children:"#"})]}),"\n","\n",(0,r.jsx)(d.default,{}),"\n",(0,r.jsxs)(n.h2,{id:"bff-\u51FD\u6570",children:["BFF \u51FD\u6570",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#bff-\u51FD\u6570",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["\u5141\u8BB8\u901A\u8FC7\u4E00\u4F53\u5316\u8C03\u7528\u7684\u51FD\u6570\uFF0C\u79F0\u4E3A ",(0,r.jsx)(n.strong,{children:"BFF \u51FD\u6570"}),"\u3002\u8FD9\u91CC\u5199\u4E00\u4E2A\u6700\u7B80\u5355\u7684 BFF \u51FD\u6570\uFF0C\u521B\u5EFA ",(0,r.jsx)(n.code,{children:"api/hello.ts"})," \u6587\u4EF6\uFF1A"]}),"\n",(0,r.jsxs)(n.div,{className:"rspress-directive caution",children:[(0,r.jsx)(n.div,{className:"rspress-directive-title",children:"CAUTION"}),(0,r.jsxs)(n.div,{className:"rspress-directive-content",children:[(0,r.jsxs)(n.p,{children:["\u5982\u679C\u662F\u6846\u67B6\u6A21\u5F0F\uFF08\u6709 ",(0,r.jsx)(n.code,{children:"api/lambda"})," \u76EE\u5F55\uFF09\uFF0C\u9700\u8981\u521B\u5EFA ",(0,r.jsx)(n.code,{children:"api/lambda/hello.ts"})]}),"\n"]})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",meta:'title="api/hello.ts"',children:"export const get = async () => 'Hello Modern.js';\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u63A5\u7740\u5728 ",(0,r.jsx)(n.code,{children:"src/App.tsx"})," \u4E2D\u76F4\u63A5\u5F15\u5165\u51FD\u6570\u5E76\u8C03\u7528\uFF1A"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",meta:"title=src/App.tsx",children:"import { useState, useEffect } from 'react';\nimport { get as hello } from '@api/hello';\n\nexport default () => {\n  const [text, setText] = useState('');\n\n  useEffect(() => {\n    hello().then(setText);\n  }, []);\n  return <div>{text}</div>;\n};\n"})}),"\n",(0,r.jsxs)(n.div,{className:"rspress-directive info",children:[(0,r.jsx)(n.div,{className:"rspress-directive-title",children:"INFO"}),(0,r.jsxs)(n.div,{className:"rspress-directive-content",children:[(0,r.jsxs)(n.p,{children:["Modern.js \u751F\u6210\u5668\u5DF2\u7ECF\u5728 ",(0,r.jsx)(n.code,{children:"tsconfig.json"})," \u4E2D\u914D\u7F6E ",(0,r.jsx)(n.code,{children:"@api"})," \u522B\u540D\uFF0C\u56E0\u6B64\u53EF\u4EE5\u76F4\u63A5\u901A\u8FC7\u522B\u540D\u7684\u65B9\u5F0F\u5F15\u5165\u51FD\u6570\u3002"]}),"\n"]})]}),"\n",(0,r.jsxs)(n.p,{children:["\u5728 ",(0,r.jsx)(n.code,{children:"src/App.tsx"})," \u4E2D\u5F15\u5165\u7684\u51FD\u6570\uFF0C\u4F1A\u81EA\u52A8\u8F6C\u6362\u6210\u63A5\u53E3\u8C03\u7528\uFF0C\u4E0D\u9700\u8981\u518D\u53BB\u901A\u8FC7 fetch \u53BB\u8C03\u7528\u63A5\u53E3\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u6267\u884C ",(0,r.jsx)(n.code,{children:"pnpm run dev"})," \u6253\u5F00 ",(0,r.jsx)(n.code,{children:"http://localhost:8080/"})," \u53EF\u4EE5\u770B\u5230\u9875\u9762\u5DF2\u7ECF\u5C55\u793A\u4E86 BFF \u51FD\u6570\u8FD4\u56DE\u7684\u5185\u5BB9\uFF0C\u5728 Network \u4E2D\u53EF\u4EE5\u770B\u5230\u9875\u9762\u5411 ",(0,r.jsx)(n.code,{children:"http://localhost:8080/api/hello"})," \u53D1\u9001\u4E86\u8BF7\u6C42\uFF1A"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:"https://p6-piu.byteimg.com/tos-cn-i-8jisjyls3a/fd41750f8d414179a9b4ecb519919b36~tplv-8jisjyls3a-3:0:0:q75.png",alt:"Network"})}),"\n",(0,r.jsxs)(n.h2,{id:"\u51FD\u6570\u8DEF\u7531",children:["\u51FD\u6570\u8DEF\u7531",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u51FD\u6570\u8DEF\u7531",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["Modern.js \u4E2D\uFF0CBFF \u51FD\u6570\u5BF9\u5E94\u7684\u8DEF\u7531\u7CFB\u7EDF\u662F\u57FA\u4E8E\u6587\u4EF6\u7CFB\u7EDF\u5B9E\u73B0\u7684\uFF0C\u4E5F\u662F\u4E00\u79CD",(0,r.jsx)(n.strong,{children:"\u7EA6\u5B9A\u5F0F\u8DEF\u7531"}),"\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u51FD\u6570\u5199\u6CD5\u4E0B ",(0,r.jsx)(n.code,{children:"api/"})," \u4E0B\u7684\u6240\u6709\u6587\u4EF6\u4E2D\u7684\u6BCF\u4E2A BFF \u51FD\u6570\u90FD\u4F1A\u6620\u5C04\u4E3A\u4E00\u4E2A\u63A5\u53E3\u3002\u6846\u67B6\u5199\u6CD5\u4E0B ",(0,r.jsx)(n.code,{children:"api/lambda"})," \u4E0B\u7684\u6240\u6709\u6587\u4EF6\u4E2D\u7684\u6BCF\u4E2A BFF \u51FD\u6570\u90FD\u4F1A\u6620\u5C04\u4E3A\u4E00\u4E2A\u63A5\u53E3\u3002"]}),"\n",(0,r.jsxs)(n.div,{className:"rspress-directive note",children:[(0,r.jsx)(n.div,{className:"rspress-directive-title",children:"NOTE"}),(0,r.jsxs)(n.div,{className:"rspress-directive-content",children:[(0,r.jsx)(n.p,{children:"\u51FD\u6570\u5199\u6CD5\u548C\u6846\u67B6\u5199\u6CD5\u4F1A\u5728\u4E0B\u4E00\u8282\u8BE6\u7EC6\u4ECB\u7ECD\u3002"}),"\n"]})]}),"\n",(0,r.jsxs)(n.p,{children:["\u6240\u6709 BFF \u51FD\u6570\u751F\u6210\u7684\u8DEF\u7531\u90FD\u5E26\u6709\u7EDF\u4E00\u7684\u524D\u7F00\uFF0C\u9ED8\u8BA4\u503C\u4E3A ",(0,r.jsx)(n.code,{children:"/api"}),"\u3002\u53EF\u4EE5\u901A\u8FC7 ",(0,r.jsx)(n.a,{href:"/configure/app/bff/prefix",children:"bff.prefix"})," \u8BBE\u7F6E\u516C\u5171\u8DEF\u7531\u7684\u524D\u7F00\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u4E0B\u9762\u4ECB\u7ECD\u51E0\u79CD\u8DEF\u7531\u7684\u7EA6\u5B9A\u3002"}),"\n",(0,r.jsxs)(n.h3,{id:"\u9ED8\u8BA4\u8DEF\u7531",children:["\u9ED8\u8BA4\u8DEF\u7531",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u9ED8\u8BA4\u8DEF\u7531",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["\u4EE5 ",(0,r.jsx)(n.code,{children:"index.[jt]s"})," \u547D\u540D\u7684\u6587\u4EF6\u4F1A\u88AB\u6620\u5C04\u5230\u4E0A\u4E00\u5C42\u76EE\u5F55\u3002"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"api/index.ts"})," -> ",(0,r.jsx)(n.code,{children:"{prefix}/"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"api/user/index.ts"})," -> ",(0,r.jsx)(n.code,{children:"{prefix}/user"})]}),"\n"]}),"\n",(0,r.jsxs)(n.h3,{id:"\u591A\u5C42\u8DEF\u7531",children:["\u591A\u5C42\u8DEF\u7531",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u591A\u5C42\u8DEF\u7531",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"\u652F\u6301\u89E3\u6790\u5D4C\u5957\u7684\u6587\u4EF6\uFF0C\u5982\u679C\u521B\u5EFA\u5D4C\u5957\u6587\u4EF6\u5939\u7ED3\u6784\uFF0C\u6587\u4EF6\u4ECD\u4F1A\u4EE5\u76F8\u540C\u65B9\u5F0F\u81EA\u52A8\u89E3\u6790\u8DEF\u7531\u3002"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"api/hello.ts"})," -> ",(0,r.jsx)(n.code,{children:"{prefix}/hello"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"api/user/list.ts"})," -> ",(0,r.jsx)(n.code,{children:"{prefix}/user/list"})]}),"\n"]}),"\n",(0,r.jsxs)(n.h3,{id:"\u52A8\u6001\u8DEF\u7531",children:["\u52A8\u6001\u8DEF\u7531",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u52A8\u6001\u8DEF\u7531",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["\u540C\u6837\u7684\uFF0C\u521B\u5EFA\u547D\u540D\u5E26\u6709 ",(0,r.jsx)(n.code,{children:"[xxx]"})," \u7684\u6587\u4EF6\u5939\u6216\u8005\u6587\u4EF6\uFF0C\u652F\u6301\u52A8\u6001\u7684\u547D\u540D\u8DEF\u7531\u53C2\u6570\u3002\u52A8\u6001\u8DEF\u7531\u7684\u51FD\u6570\u53C2\u6570\u89C4\u5219\u53EF\u4EE5\u770B ",(0,r.jsx)(n.a,{href:"/guides/advanced-features/bff/function#dynamic-path",children:"dynamac-path"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"api/user/[username]/info.ts"})," -> ",(0,r.jsx)(n.code,{children:"{prefix}/user/:username/info"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"api/user/username/[action].ts"})," -> ",(0,r.jsx)(n.code,{children:"{prefix}/user/username/:action"})]}),"\n"]}),"\n",(0,r.jsxs)(n.h3,{id:"\u767D\u540D\u5355",children:["\u767D\u540D\u5355",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u767D\u540D\u5355",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["\u9ED8\u8BA4 ",(0,r.jsx)(n.code,{children:"api/"})," \u76EE\u5F55\u4E0B\u6240\u6709\u6587\u4EF6\u90FD\u4F1A\u5F53\u4F5C BFF \u51FD\u6570\u6587\u4EF6\u53BB\u89E3\u6790\uFF0C\u4F46\u4EE5\u4E0B\u6587\u4EF6\u4E0D\u4F1A\u88AB\u89E3\u6790\uFF1A"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u547D\u540D\u4EE5 ",(0,r.jsx)(n.code,{children:"_"})," \u5F00\u5934\u7684\u6587\u4EF6\u3002\u4F8B\u5982\uFF1A",(0,r.jsx)(n.code,{children:"_utils.ts"}),"\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:["\u547D\u540D\u4EE5 ",(0,r.jsx)(n.code,{children:"_"})," \u5F00\u5934\u7684\u6587\u4EF6\u5939\u4E0B\u6240\u6709\u6587\u4EF6\u3002\u4F8B\u5982\uFF1A",(0,r.jsx)(n.code,{children:"_utils/index.ts"}),"\u3001",(0,r.jsx)(n.code,{children:"_utils/cp.ts"}),"\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:["\u6D4B\u8BD5\u6587\u4EF6\u3002\u4F8B\u5982\uFF1A",(0,r.jsx)(n.code,{children:"foo.test.ts"}),"\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:["TypeScript \u7C7B\u578B\u6587\u4EF6\u3002\u4F8B\u5982\uFF1A",(0,r.jsx)(n.code,{children:"hello.d.ts"}),"\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"node_module"})," \u4E0B\u7684\u6587\u4EF6\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(n.h2,{id:"restful-api",children:["RESTful API",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#restful-api",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"Modern.js \u7684 BFF \u51FD\u6570\u9700\u8981\u9075\u5FAA RESTful API \u6807\u51C6\u6765\u5B9A\u4E49, \u9075\u5FAA HTTP Method \u89C4\u8303\uFF0C\u5E76\u4E14\u4E0D\u5141\u8BB8\u81EA\u7531\u5B9A\u4E49\u53C2\u6570\u3002"}),"\n",(0,r.jsxs)(n.div,{className:"rspress-directive info",children:[(0,r.jsx)(n.div,{className:"rspress-directive-title",children:"INFO"}),(0,r.jsxs)(n.div,{className:"rspress-directive-content",children:[(0,r.jsxs)(n.p,{children:["\u5047\u8BBE\u51FD\u6570\u5141\u8BB8\u81EA\u7531\u5B9A\u4E49\u53C2\u6570\uFF0C\u4EA7\u51FA\u7684\u8DEF\u7531\u5FC5\u7136\u7531",(0,r.jsx)(n.strong,{children:"\u79C1\u6709\u534F\u8BAE"}),"\u8FDB\u884C\u8C03\u7528\uFF08\u539F\u56E0\u662F\u65E0\u6CD5\u533A\u5206\u8BF7\u6C42\u53C2\u6570\u4E0E\u8BF7\u6C42\u4F53\uFF09\uFF0C\u800C\u65E0\u6CD5\u5B9E\u73B0\u4EFB\u610F\u7684 RESTful API\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u5982\u679C\u670D\u52A1\u4EC5\u7528\u4E8E\u5E94\u7528\u672C\u8EAB\u4E0D\u5B58\u5728\u95EE\u9898\uFF0C\u4F46\u5B83",(0,r.jsx)(n.strong,{children:"\u4E0D\u6807\u51C6\u7684\u63A5\u53E3\u5B9A\u4E49"}),"\u65E0\u6CD5\u878D\u5165\u66F4\u5927\u7684\u4F53\u7CFB\u3002 \u5728\u591A\u4E2A\u7CFB\u7EDF\u5171\u540C\u5DE5\u4F5C\u7684\u60C5\u51B5\u4E0B\uFF08\u4F8B\u5982 BFF \u4F4E\u7801\u642D\u5EFA\uFF09\uFF0C\u4F1A\u5BFC\u81F4\u5176\u4ED6\u7CFB\u7EDF\u4E5F\u9700\u8981\u9075\u5FAA",(0,r.jsx)(n.strong,{children:"\u79C1\u6709\u534F\u8BAE"}),"\u3002"]}),"\n"]})]}),"\n",(0,r.jsxs)(n.h3,{id:"\u51FD\u6570\u5177\u540D\u5BFC\u51FA",children:["\u51FD\u6570\u5177\u540D\u5BFC\u51FA",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u51FD\u6570\u5177\u540D\u5BFC\u51FA",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["Modern.js BFF \u51FD\u6570\u7684\u5BFC\u51FA\u540D\u51B3\u5B9A\u4E86\u51FD\u6570\u5BF9\u5E94\u63A5\u53E3\u7684 Method\uFF0C\u5982 ",(0,r.jsx)(n.code,{children:"get"}),"\uFF0C",(0,r.jsx)(n.code,{children:"post"})," \u7B49\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u4F8B\u5982\uFF0C\u6309\u7167\u4EE5\u4E0B\u4F8B\u5B50\uFF0C\u53EF\u5BFC\u51FA\u4E00\u4E2A GET \u63A5\u53E3\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"export const get = async () => {\n  return {\n    name: 'Modern.js',\n    desc: '\u73B0\u4EE3 web \u5DE5\u7A0B\u65B9\u6848',\n  };\n};\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u6309\u7167\u4EE5\u4E0B\u4F8B\u5B50\uFF0C\u5219\u53EF\u5BFC\u51FA\u4E00\u4E2A ",(0,r.jsx)(n.code,{children:"POST"})," \u63A5\u53E3"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"export const post = async () => {\n  return {\n    name: 'Modern.js',\n    desc: '\u73B0\u4EE3 web \u5DE5\u7A0B\u65B9\u6848',\n  };\n};\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["\u5BF9\u5E94 HTTP Method\uFF0CModern.js \u4E5F\u652F\u6301\u4E86 9 \u79CD\u5B9A\u4E49\uFF0C\u5373\uFF1A",(0,r.jsx)(n.code,{children:"GET"}),"\u3001",(0,r.jsx)(n.code,{children:"POST"}),"\u3001",(0,r.jsx)(n.code,{children:"PUT"}),"\u3001",(0,r.jsx)(n.code,{children:"DELETE"}),"\u3001",(0,r.jsx)(n.code,{children:"CONNECT"}),"\u3001",(0,r.jsx)(n.code,{children:"TRACE"}),"\u3001",(0,r.jsx)(n.code,{children:"PATCH"}),"\u3001",(0,r.jsx)(n.code,{children:"OPTIONS"}),"\u3001",(0,r.jsx)(n.code,{children:"HEAD"}),"\uFF0C\u5373\u53EF\u4EE5\u7528\u8FD9\u4E9B Method \u4F5C\u4E3A\u51FD\u6570\u5BFC\u51FA\u7684\u540D\u5B57\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["\u540D\u5B57\u662F\u5927\u5C0F\u4E0D\u654F\u611F\u7684\uFF0C\u5982\u679C\u662F ",(0,r.jsx)(n.code,{children:"GET"}),"\uFF0C\u5199\u6210 ",(0,r.jsx)(n.code,{children:"get"}),"\u3001",(0,r.jsx)(n.code,{children:"Get"}),"\u3001",(0,r.jsx)(n.code,{children:"GEt"}),"\u3001",(0,r.jsx)(n.code,{children:"GET"}),"\uFF0C\u90FD\u53EF\u4EE5\u51C6\u786E\u8BC6\u522B\u3002\u800C\u9ED8\u8BA4\u5BFC\u51FA\uFF0C\u5373 ",(0,r.jsx)(n.code,{children:"export default xxx"})," \u5219\u4F1A\u88AB\u6620\u5C04\u4E3A ",(0,r.jsx)(n.code,{children:"Get"}),"\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u53EF\u4EE5\u5728\u4E00\u4E2A\u6587\u4EF6\u4E2D\u5B9A\u4E49\u591A\u4E2A\u4E0D\u540C Method \u7684\u51FD\u6570\uFF0C\u4F46\u5982\u679C\u5B9A\u4E49\u591A\u4E2A\u76F8\u540C Method \u7684\u51FD\u6570\uFF0C\u5219\u53EA\u6709\u7B2C\u4E00\u4E2A\u4F1A\u751F\u6548\u3002"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.div,{className:"rspress-directive info",children:[(0,r.jsx)(n.div,{className:"rspress-directive-title",children:"INFO"}),(0,r.jsxs)(n.div,{className:"rspress-directive-content",children:[(0,r.jsx)(n.p,{children:"\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u5B9A\u4E49\u7684\u51FD\u6570\u90FD\u5E94\u8BE5\u662F\u5F02\u6B65\u7684\uFF0C\u4E0E\u51FD\u6570\u8C03\u7528\u65F6\u7C7B\u578B\u6709\u5173\uFF0C\u540E\u9762\u4F1A\u63D0\u5230\u3002"}),"\n"]})]}),"\n",(0,r.jsxs)(n.h3,{id:"\u51FD\u6570\u53C2\u6570\u89C4\u5219",children:["\u51FD\u6570\u53C2\u6570\u89C4\u5219",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u51FD\u6570\u53C2\u6570\u89C4\u5219",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"\u5982\u4E0A\u6240\u8FF0\uFF0C\u4E3A\u4E86\u6EE1\u8DB3 RESTful API \u7684\u8BBE\u8BA1\u6807\u51C6\uFF0C\u56E0\u6B64 Modern.js \u4E2D BFF \u51FD\u6570\u9700\u8981\u9075\u5FAA\u4E00\u5B9A\u7684\u5165\u53C2\u89C4\u5219\u3002"}),"\n",(0,r.jsxs)(n.p,{children:["\u51FD\u6570\u53C2\u6570\u5206\u4E3A\u4E24\u5757\uFF0C\u5206\u522B\u662F\u8BF7\u6C42\u8DEF\u5F84\u4E2D\u7684\u52A8\u6001\u90E8\u5206\u548C\u8BF7\u6C42\u9009\u9879 ",(0,r.jsx)(n.code,{children:"RequestOption"}),"\u3002"]}),"\n",(0,r.jsxs)(n.h4,{id:"dynamic-path",children:["Dynamic Path",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#dynamic-path",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"\u52A8\u6001\u8DEF\u7531\u4F1A\u4F5C\u4E3A\u51FD\u6570\u7B2C\u4E00\u90E8\u5206\u7684\u5165\u53C2\uFF0C\u6BCF\u4E2A\u5165\u53C2\u5BF9\u5E94\u4E00\u6BB5\u52A8\u6001\u8DEF\u7531\u3002\u4F8B\u5982\u4EE5\u4E0B\u793A\u4F8B\uFF0Cuid \u4F1A\u4F5C\u4E3A\u524D\u4E24\u4E2A\u53C2\u6570\u4F20\u9012\u5230\u51FD\u6570\u4E2D\uFF1A"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",meta:'title="api/[level]/[id].ts"',children:"export default async (level: number, id: number) => {\n  const userData = await queryUser(level, uid);\n  return userData;\n};\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u5728\u8C03\u7528\u65F6\u76F4\u63A5\u4F20\u5165\u52A8\u6001\u53C2\u6570\uFF1A"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",meta:'title="App.tsx"',children:"import { useState, useEffect } from 'react';\nimport { get as getUser } from '@api/[level]/[id]';\n\nexport default () => {\n  const [name, setName] = useState('');\n\n  useEffect(() => {\n    getUser(6, 001).then(userData => setName(userData.name));\n  }, []);\n\n  return <div>{name}</div>;\n};\n"})}),"\n",(0,r.jsxs)(n.h4,{id:"requestoption",children:["RequestOption",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#requestoption",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["Dynamic Path \u4E4B\u540E\u7684\u53C2\u6570\u662F\u5305\u542B querystring\u3001request body \u7684\u5BF9\u8C61 ",(0,r.jsx)(n.code,{children:"RequestOption"}),"\uFF0C\u8FD9\u4E2A\u5B57\u6BB5\u7528\u6765\u5B9A\u4E49 ",(0,r.jsx)(n.code,{children:"data"})," \u548C ",(0,r.jsx)(n.code,{children:"query"})," \u7684\u7C7B\u578B\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u5728\u4E0D\u5B58\u5728\u52A8\u6001\u8DEF\u7531\u7684\u666E\u901A\u51FD\u6570\u4E2D\uFF0C\u53EF\u4EE5\u4ECE\u7B2C\u4E00\u4E2A\u5165\u53C2\u4E2D\u83B7\u53D6\u4F20\u5165\u7684 ",(0,r.jsx)(n.code,{children:"data"})," \u548C ",(0,r.jsx)(n.code,{children:"query"}),"\uFF0C\u4F8B\u5982\uFF1A"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",meta:'title="api/hello.ts"',children:"import type { RequestOption } from '@modern-js/runtime/server';\n\nexport async function post({\n  query,\n  data,\n}: RequestOption<Record<string, string>, Record<string, string>>) {\n  // do somethings\n}\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u8FD9\u91CC\u4F60\u4E5F\u53EF\u4EE5\u4F7F\u7528\u81EA\u5B9A\u4E49\u7C7B\u578B\uFF1A"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",meta:'title="api/lambda/hello.ts"',children:"import type { RequestOption } from '@modern-js/runtime/server';\n\ntype IQuery = {\n  // some types\n};\ntype IData = {\n  // some types\n};\n\nexport async function post({ query, data }: { query: IQuery; data: IData }) {\n  // do somethings\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u5F53\u51FD\u6570\u6587\u4EF6\u4F7F\u7528\u52A8\u6001\u8DEF\u7531\u89C4\u5219\u65F6\uFF0C\u52A8\u6001\u8DEF\u7531\u4F1A\u5728 ",(0,r.jsx)(n.code,{children:"RequestOption"})," \u5BF9\u8C61\u53C2\u6570\u524D\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",meta:'title="api/[sku]/[id]/item.ts"',children:"export async function post(\n  sku: string,\n  id: string,\n  {\n    data,\n    query,\n  }: RequestOption<Record<string, string>, Record<string, string>>,\n) {\n  // do somethings\n}\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u8C03\u7528\u65F6\u4E5F\u6309\u7167\u51FD\u6570\u5B9A\u4E49\uFF0C\u4F20\u5165\u5BF9\u5E94\u7684\u53C2\u6570\u5373\u53EF\uFF1A"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",meta:'title="App.tsx"',children:"import { post } from '@api/[sku]/[id]/item';\n\nexport default () => {\n  const addSku = () => {\n    post('0001' /* sku */, '1234' /* id */, {\n      query: {\n        /* ... */\n      },\n      data: {\n        /* ... */\n      },\n    });\n  };\n\n  return <div onClick={addSku}>\u6DFB\u52A0 SKU</div>;\n};\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u4E4B\u524D\u63D0\u5230\uFF0C\u5B9A\u4E49\u7684\u51FD\u6570\u90FD\u5E94\u8BE5\u662F\u5F02\u6B65\u7684\uFF0C\u662F\u56E0\u4E3A\u5728\u524D\u7AEF\u8C03\u7528\u65F6\u4F1A\u81EA\u52A8\u8F6C\u6362\u6210 HTTP \u63A5\u53E3\u8C03\u7528\uFF0C\u6240\u4EE5\u4E3A\u4E86\u4FDD\u6301\u7C7B\u578B\u5B9A\u4E49\u4E0E\u5B9E\u9645\u8C03\u7528\u4F53\u9A8C\u7EDF\u4E00\uFF0C\u9700\u8981\u5728\u5B9A\u4E49 BFF \u51FD\u6570\u65F6\u5C06\u5B83\u8BBE\u7F6E\u4E3A\u5F02\u6B65\u3002"})]})}function t(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,i.useMDXComponents)(),e.components);return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}var l=t;t.__RSPRESS_PAGE_META={},t.__RSPRESS_PAGE_META["zh%2Fguides%2Fadvanced-features%2Fbff%2Ffunction.mdx"]={toc:[{text:"\u542F\u7528 BFF",id:"\u542F\u7528-bff",depth:2},{text:"BFF \u51FD\u6570",id:"bff-\u51FD\u6570",depth:2},{text:"\u51FD\u6570\u8DEF\u7531",id:"\u51FD\u6570\u8DEF\u7531",depth:2},{text:"\u9ED8\u8BA4\u8DEF\u7531",id:"\u9ED8\u8BA4\u8DEF\u7531",depth:3},{text:"\u591A\u5C42\u8DEF\u7531",id:"\u591A\u5C42\u8DEF\u7531",depth:3},{text:"\u52A8\u6001\u8DEF\u7531",id:"\u52A8\u6001\u8DEF\u7531",depth:3},{text:"\u767D\u540D\u5355",id:"\u767D\u540D\u5355",depth:3},{text:"RESTful API",id:"restful-api",depth:2},{text:"\u51FD\u6570\u5177\u540D\u5BFC\u51FA",id:"\u51FD\u6570\u5177\u540D\u5BFC\u51FA",depth:3},{text:"\u51FD\u6570\u53C2\u6570\u89C4\u5219",id:"\u51FD\u6570\u53C2\u6570\u89C4\u5219",depth:3},{text:"Dynamic Path",id:"dynamic-path",depth:4},{text:"RequestOption",id:"requestoption",depth:4}],title:"\u57FA\u7840\u7528\u6CD5",frontmatter:{sidebar_position:1,title:"\u57FA\u7840\u7528\u6CD5"}}}}]);