"use strict";(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["31475"],{55640:function(e,n,r){r.r(n),r.d(n,{default:function(){return o}});var a=r(38093),s=r(75878);function t(e){let n=Object.assign({h1:"h1",a:"a",p:"p",strong:"strong",code:"code",pre:"pre",div:"div",img:"img"},(0,s.ah)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.h1,{id:"\u6DFB\u52A0-loader",children:["\u6DFB\u52A0 Loader",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u6DFB\u52A0-loader",children:"#"})]}),"\n",(0,a.jsx)(n.p,{children:"\u4E0A\u4E00\u7AE0\u8282\u4E2D\uFF0C\u6211\u4EEC\u5B66\u4E60\u4E86\u5982\u4F55\u6DFB\u52A0\u5BA2\u6237\u7AEF\u8DEF\u7531\u3002"}),"\n",(0,a.jsxs)(n.p,{children:["\u8FD9\u4E00\u7AE0\u8282\u4E2D\uFF0C\u6211\u4EEC\u5C06\u4F1A\u5B66\u4E60\u5982\u4F55\u4E3A",(0,a.jsx)(n.strong,{children:"\u8DEF\u7531\u7EC4\u4EF6\u6DFB\u52A0 Loader"}),"\u3002"]}),"\n",(0,a.jsxs)(n.p,{children:["\u5230\u76EE\u524D\u4E3A\u6B62\uFF0C\u6211\u4EEC\u90FD\u662F\u901A\u8FC7\u786C\u7F16\u7801\u7684\u65B9\u5F0F\uFF0C\u4E3A\u7EC4\u4EF6\u63D0\u4F9B\u6570\u636E\u3002\u5982\u679C\u8981\u4ECE\u8FDC\u7AEF\u83B7\u53D6\u6570\u636E\uFF0C\u901A\u5E38\u60C5\u51B5\u4E0B\u4F1A\u4F7F\u7528 ",(0,a.jsx)(n.code,{children:"useEffect"})," \u6765\u505A\u3002\u4F46\u5728\u542F\u7528 SSR \u7684\u60C5\u51B5\u4E0B\uFF0C",(0,a.jsx)(n.code,{children:"useEffect"})," \u662F\u4E0D\u4F1A\u5728\u670D\u52A1\u7AEF\u6267\u884C\u7684\uFF0C\u6240\u4EE5\u8FD9\u79CD SSR \u53EA\u80FD\u6E32\u67D3\u5F88\u6709\u9650\u7684 UI\u3002"]}),"\n",(0,a.jsx)(n.p,{children:"Modern.js \u4E3A\u63D0\u4F9B\u4E86 Data Loader \u7684\u80FD\u529B\uFF0C\u652F\u6301\u540C\u6784\u7684\u5728\u7EC4\u4EF6\u4E2D\u83B7\u53D6\u6570\u636E\uFF0C\u8BA9 SSR \u7684\u4EF7\u503C\u6700\u5927\u5316\u3002"}),"\n",(0,a.jsx)(n.p,{children:"\u4E0B\u9762\u6211\u4EEC\u6F14\u793A\u5982\u4F55\u4E3A\u8DEF\u7531\u7EC4\u4EF6\u6DFB\u52A0 Data Loader\uFF0C\u5E76\u6A21\u62DF\u8FDC\u7AEF\u6570\u636E\u83B7\u53D6\u3002\u6211\u4EEC\u4F7F\u7528 faker \u6765 mock \u9700\u8981\u7684\u6570\u636E\uFF0C\u9996\u5148\u5B89\u88C5\u4F9D\u8D56\uFF1A"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"pnpm add faker@5\npnpm add @types/faker@5 -D\n"})}),"\n",(0,a.jsxs)(n.p,{children:["\u521B\u5EFA ",(0,a.jsx)(n.code,{children:"src/routes/page.data.ts"}),"\uFF1A"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",children:"import { name, internet } from 'faker';\n\nexport type LoaderData = {\n  code: number;\n  data: {\n    name: string;\n    avatar: string;\n    email: string;\n  }[];\n};\n\nexport const loader = async (): Promise<LoaderData> => {\n  const data = new Array(20).fill(0).map(() => {\n    const firstName = name.firstName();\n    return {\n      name: firstName,\n      avatar: `https://api.dicebear.com/7.x/pixel-art/svg?seed=${firstName}`,\n      email: internet.email(),\n    };\n  });\n\n  return {\n    code: 200,\n    data,\n  };\n};\n"})}),"\n",(0,a.jsxs)(n.div,{className:"rspress-directive note",children:[(0,a.jsx)(n.div,{className:"rspress-directive-title",children:"NOTE"}),(0,a.jsxs)(n.div,{className:"rspress-directive-content",children:[(0,a.jsx)(n.p,{children:"Data Loader \u5E76\u975E\u53EA\u4E3A SSR \u5DE5\u4F5C\u3002\u5728 CSR \u9879\u76EE\u4E2D\uFF0CData Loader \u4E5F\u53EF\u4EE5\u907F\u514D\u6570\u636E\u83B7\u53D6\u4F9D\u8D56 UI \u6E32\u67D3\uFF0C\u89E3\u51B3\u8BF7\u6C42\u7011\u5E03\u6D41\u7684\u95EE\u9898\u3002\u672A\u6765\uFF0CModern.js \u4E5F\u4F1A\u4E3A\u8FD9\u4E00\u7279\u6027\u6DFB\u52A0\u66F4\u591A\u80FD\u529B\uFF0C\u4F8B\u5982\u9884\u83B7\u53D6\u3001\u6570\u636E\u7F13\u5B58\u7B49\u3002"}),"\n"]})]}),"\n",(0,a.jsxs)(n.p,{children:["Modern.js \u4E5F\u63D0\u4F9B\u4E86\u4E00\u4E2A\u53EB ",(0,a.jsx)(n.code,{children:"useLoaderData"})," \u7684 hooks API\uFF0C\u6211\u4EEC\u4FEE\u6539 ",(0,a.jsx)(n.code,{children:"src/routes/page.tsx"})," \u5BFC\u51FA\u7684\u7EC4\u4EF6\uFF1A"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",meta:"{1,2,5,13}",children:"import { useLoaderData } from '@modern-js/runtime/router';\nimport type { LoaderData } from './page.data';\n\nfunction Index() {\n  const { data } = useLoaderData() as LoaderData;\n\n  return (\n    <div className=\"container lg mx-auto\">\n      <Helmet>\n        <title>All</title>\n      </Helmet>\n      <List\n        dataSource={data}\n        renderItem={info => <Item key={info.name} info={info} />}\n      />\n    </div>\n  );\n}\n\nexport default Index;\n"})}),"\n","\n",(0,a.jsxs)(n.p,{children:["\u91CD\u65B0\u6267\u884C ",(0,a.jsx)(n.code,{children:"pnpm run dev"}),"\uFF0C\u67E5\u770B ",(0,a.jsx)(n.code,{children:"view-source:http://localhost:8080/"}),"\uFF0C\u6216\u5728 devtools \u7684 Network \u9762\u677F\u91CC\u67E5\u770B HTML \u8BF7\u6C42\u7684\u300C Preview \u300D\uFF0C\u53EF\u4EE5\u770B\u5230 SSR \u6E32\u67D3\u51FA\u6765\u7684 HTML \u5DF2\u7ECF\u5305\u542B\u5B8C\u6574\u7684 UI\uFF1A"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/aphqeh7uhohpquloj/modern-js/docs/11/display6.png",alt:"display6"})})]})}function d(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,s.ah)(),e.components);return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(t,{...e})}):t(e)}let o=d;d.__RSPRESS_PAGE_META={},d.__RSPRESS_PAGE_META["zh%2Ftutorials%2Ffirst-app%2Fc05-loader.mdx"]={toc:[],title:"\u6DFB\u52A0 Loader",frontmatter:{title:"\u6DFB\u52A0 Loader"}}}}]);