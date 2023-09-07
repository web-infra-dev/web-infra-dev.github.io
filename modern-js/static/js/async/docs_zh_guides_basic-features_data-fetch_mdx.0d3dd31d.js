(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_guides_basic-features_data-fetch_mdx"],{34593:function(e,r,n){"use strict";n.r(r),n.d(r,{default:function(){return c}});var s,d=n("15169"),a=n("43932"),o=n("9880"),i=n("23169");function t(e){var r=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",code:"code",div:"div",h3:"h3",pre:"pre",h4:"h4",ol:"ol",li:"li",strong:"strong"},(0,i.useMDXComponents)(),e.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(r.h1,{id:"\u6570\u636E\u83B7\u53D6",children:["\u6570\u636E\u83B7\u53D6",(0,o.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#\u6570\u636E\u83B7\u53D6",children:"#"})]}),"\n",(0,o.jsx)(r.p,{children:"Modern.js \u4E2D\u63D0\u4F9B\u4E86\u5F00\u7BB1\u5373\u7528\u7684\u6570\u636E\u83B7\u53D6\u80FD\u529B\uFF0C\u5F00\u53D1\u8005\u53EF\u4EE5\u901A\u8FC7\u8FD9\u4E9B API\uFF0C\u5728 CSR \u548C SSR \u73AF\u5883\u540C\u6784\u7684\u8FDB\u884C\u5F00\u53D1\u3002"}),"\n",(0,o.jsx)(r.p,{children:"\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u8FD9\u4E9B API \u5E76\u4E0D\u5E2E\u52A9\u5E94\u7528\u53D1\u8D77\u8BF7\u6C42\uFF0C\u800C\u662F\u5E2E\u52A9\u5F00\u53D1\u8005\u66F4\u597D\u5730\u7BA1\u7406\u6570\u636E\uFF0C\u63D0\u5347\u9879\u76EE\u7684\u6027\u80FD\u3002"}),"\n",(0,o.jsxs)(r.h2,{id:"data-loader\u63A8\u8350",children:["Data Loader(\u63A8\u8350)",(0,o.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#data-loader\u63A8\u8350",children:"#"})]}),"\n",(0,o.jsxs)(r.p,{children:["Modern.js \u63A8\u8350\u4F7F\u7528\u7EA6\u5B9A\u5F0F\u8DEF\u7531\u505A\u8DEF\u7531\u7684\u7BA1\u7406\uFF0C\u901A\u8FC7 Modern.js \u7684",(0,o.jsx)(r.a,{href:"/guides/basic-features/routes#%E7%BA%A6%E5%AE%9A%E5%BC%8F%E8%B7%AF%E7%94%B1",children:"\u7EA6\u5B9A\u5F0F\uFF08\u5D4C\u5957\uFF09\u8DEF\u7531"}),"\uFF0C\u6BCF\u4E2A\u8DEF\u7531\u7EC4\u4EF6(",(0,o.jsx)(r.code,{children:"layout.ts"})," \u6216 ",(0,o.jsx)(r.code,{children:"page.ts"}),")\u53EF\u4EE5\u6709\u4E00\u4E2A\u540C\u540D\u7684 ",(0,o.jsx)(r.code,{children:"loader"})," \u6587\u4EF6\uFF0C\u8BE5 ",(0,o.jsx)(r.code,{children:"loader"})," \u6587\u4EF6\u9700\u8981\u5BFC\u51FA\u4E00\u4E2A\u51FD\u6570\uFF0C\u51FD\u6570\u4F1A\u5728\u7EC4\u4EF6\u6E32\u67D3\u4E4B\u524D\u6267\u884C\uFF0C\u4E3A\u8DEF\u7531\u7EC4\u4EF6\u63D0\u4F9B\u6570\u636E\u3002"]}),"\n",(0,o.jsxs)(r.div,{className:"modern-directive info",children:[(0,o.jsx)(r.div,{className:"modern-directive-title",children:"INFO"}),(0,o.jsxs)(r.div,{className:"modern-directive-content",children:[(0,o.jsxs)(r.p,{children:["Modern.js v1 \u652F\u6301\u901A\u8FC7 ",(0,o.jsx)(r.a,{href:"#useloader%EF%BC%88%E6%97%A7%E7%89%88%EF%BC%89",children:"useLoader"})," \u83B7\u53D6\u6570\u636E\uFF0C\u8FD9\u5DF2\u7ECF\u4E0D\u662F\u6211\u4EEC\u63A8\u8350\u7684\u7528\u6CD5\uFF0C\u9664\u8FC1\u79FB\u8FC7\u7A0B\u5916\uFF0C\u4E0D\u63A8\u8350\u4E24\u8005\u6DF7\u7528\u3002"]}),"\n"]})]}),"\n",(0,o.jsxs)(r.h3,{id:"\u57FA\u7840\u793A\u4F8B",children:["\u57FA\u7840\u793A\u4F8B",(0,o.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#\u57FA\u7840\u793A\u4F8B",children:"#"})]}),"\n",(0,o.jsxs)(r.p,{children:["\u8DEF\u7531\u7EC4\u4EF6\u5982 ",(0,o.jsx)(r.code,{children:"layout.ts"})," \u6216 ",(0,o.jsx)(r.code,{children:"page.ts"}),"\uFF0C\u53EF\u4EE5\u5B9A\u4E49\u540C\u540D\u7684 ",(0,o.jsx)(r.code,{children:"loader"})," \u6587\u4EF6\uFF0C",(0,o.jsx)(r.code,{children:"loader"})," \u6587\u4EF6\u4E2D\u5BFC\u51FA\u4E00\u4E2A\u51FD\u6570\uFF0C\u8BE5\u51FD\u6570\u63D0\u4F9B\u7EC4\u4EF6\u6240\u9700\u7684\u6570\u636E\uFF0C\u7136\u540E\u5728\u8DEF\u7531\u7EC4\u4EF6\u4E2D\u901A\u8FC7 ",(0,o.jsx)(r.code,{children:"useLoaderData"})," \u51FD\u6570\u83B7\u53D6\u6570\u636E\uFF0C\u5982\u4E0B\u9762\u793A\u4F8B\uFF1A"]}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-bash",children:".\n\u2514\u2500\u2500 routes\n    \u251C\u2500\u2500 layout.tsx\n    \u2514\u2500\u2500 user\n        \u251C\u2500\u2500 layout.tsx\n        \u251C\u2500\u2500 layout.loader.ts\n        \u251C\u2500\u2500 page.tsx\n        \u2514\u2500\u2500 page.loader.ts\n"})}),"\n",(0,o.jsx)(r.p,{children:"\u5728\u6587\u4EF6\u4E2D\u5B9A\u4E49\u4EE5\u4E0B\u4EE3\u7801\uFF1A"}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-ts",meta:'title="routes/user/page.tsx"',children:"import { useLoaderData } from '@modern-js/runtime/router';\nimport type { ProfileData } from './page.loader.ts';\n\nexport default function UserPage() {\n  const profileData = useLoaderData() as ProfileData;\n  return <div>{profileData}</div>;\n}\n"})}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-ts",meta:'title="routes/user/page.loader.ts"',children:"export type ProfileData = {\n  /*  some types */\n};\n\nexport default async (): Promise<ProfileData> => {\n  const res = await fetch('https://api/user/profile');\n  return await res.json();\n};\n"})}),"\n",(0,o.jsxs)(r.div,{className:"modern-directive caution",children:[(0,o.jsx)(r.div,{className:"modern-directive-title",children:"CAUTION"}),(0,o.jsxs)(r.div,{className:"modern-directive-content",children:[(0,o.jsxs)(r.p,{children:["\u8FD9\u91CC\u8DEF\u7531\u7EC4\u4EF6\u548C ",(0,o.jsx)(r.code,{children:"loader"})," \u6587\u4EF6\u5171\u4EAB\u7C7B\u578B\uFF0C\u8981\u4F7F\u7528 ",(0,o.jsx)(r.code,{children:"import type"})," \u8BED\u6CD5\u3002"]}),"\n"]})]}),"\n",(0,o.jsxs)(r.p,{children:["\u5728 CSR \u73AF\u5883\u4E0B\uFF0C",(0,o.jsx)(r.code,{children:"loader"})," \u51FD\u6570\u4F1A\u5728\u5BA2\u6237\u7AEF\u6267\u884C\uFF0C",(0,o.jsx)(r.code,{children:"loader"})," \u51FD\u6570\u5185\u53EF\u4EE5\u4F7F\u7528\u6D4F\u89C8\u5668\u7684 API\uFF08\u4F46\u901A\u5E38\u4E0D\u9700\u8981\uFF0C\u4E5F\u4E0D\u63A8\u8350\uFF09\u3002"]}),"\n",(0,o.jsxs)(r.p,{children:["\u5728 SSR \u73AF\u5883\u4E0B\uFF0C\u4E0D\u7BA1\u662F\u9996\u5C4F\uFF0C\u8FD8\u662F\u5728\u5BA2\u6237\u7AEF\u7684\u5BFC\u822A\uFF0C",(0,o.jsx)(r.code,{children:"loader"})," \u51FD\u6570\u53EA\u4F1A\u5728\u670D\u52A1\u7AEF\u6267\u884C\uFF0C\u8FD9\u91CC\u53EF\u4EE5\u8C03\u7528\u4EFB\u610F\u7684 Node.js API\uFF0C\u540C\u65F6\u8FD9\u91CC\u4F7F\u7528\u7684\u4EFB\u4F55\u4F9D\u8D56\u548C\u4EE3\u7801\u90FD\u4E0D\u4F1A\u5305\u542B\u5728\u5BA2\u6237\u7AEF\u7684 bundle \u4E2D\u3002"]}),"\n",(0,o.jsxs)(r.div,{className:"modern-directive info",children:[(0,o.jsx)(r.div,{className:"modern-directive-title",children:"INFO"}),(0,o.jsxs)(r.div,{className:"modern-directive-content",children:[(0,o.jsxs)(r.p,{children:["\u5728\u4EE5\u540E\u7684\u7248\u672C\u4E2D\uFF0CModern.js \u53EF\u80FD\u4F1A\u652F\u6301\u5728 CSR \u73AF\u5883\u4E0B\uFF0C",(0,o.jsx)(r.code,{children:"loader"})," \u51FD\u6570\u4E5F\u5728\u670D\u52A1\u7AEF\u8FD0\u884C\uFF0C\u4EE5\u63D0\u9AD8\u6027\u80FD\u548C\u5B89\u5168\u6027\uFF0C\u6240\u4EE5\u8FD9\u91CC\u5EFA\u8BAE\u5C3D\u53EF\u80FD\u5730\u4FDD\u8BC1 ",(0,o.jsx)(r.code,{children:"loader"})," \u7684\u7EAF\u7CB9\uFF0C\u53EA\u505A\u6570\u636E\u83B7\u53D6\u7684\u573A\u666F\u3002"]}),"\n"]})]}),"\n",(0,o.jsxs)(r.p,{children:["\u5F53\u5728\u5BA2\u6237\u7AEF\u5BFC\u822A\u65F6\uFF0C\u57FA\u4E8E Modern.js \u7684",(0,o.jsx)(r.a,{href:"/guides/basic-features/routes",children:"\u7EA6\u5B9A\u5F0F\u8DEF\u7531"}),"\uFF0C\u6240\u6709\u7684 ",(0,o.jsx)(r.code,{children:"loader"})," \u51FD\u6570\u4F1A\u5E76\u884C\u6267\u884C\uFF08\u8BF7\u6C42\uFF09\uFF0C\u5373\u5F53\u8BBF\u95EE ",(0,o.jsx)(r.code,{children:"/user/profile"})," \u65F6\uFF0C",(0,o.jsx)(r.code,{children:"/user"})," \u548C ",(0,o.jsx)(r.code,{children:"/user/profile"})," \u4E0B\u7684 loader \u51FD\u6570\u90FD\u4F1A\u5E76\u884C\u6267\u884C\uFF08\u8BF7\u6C42\uFF09\uFF0C\u4EE5\u63D0\u9AD8\u5BA2\u6237\u7AEF\u7684\u6027\u80FD\u3002"]}),"\n",(0,o.jsxs)(r.h3,{id:"loader-\u51FD\u6570",children:[(0,o.jsx)(r.code,{children:"loader"})," \u51FD\u6570",(0,o.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#loader-\u51FD\u6570",children:"#"})]}),"\n",(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.code,{children:"loader"})," \u51FD\u6570\u6709\u4E24\u4E2A\u5165\u53C2\uFF1A"]}),"\n",(0,o.jsxs)(r.h4,{id:"params",children:[(0,o.jsx)(r.code,{children:"params"}),(0,o.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#params",children:"#"})]}),"\n",(0,o.jsxs)(r.p,{children:["\u5F53\u8DEF\u7531\u6587\u4EF6\u901A\u8FC7 ",(0,o.jsx)(r.code,{children:"[]"})," \u65F6\uFF0C\u4F1A\u4F5C\u4E3A",(0,o.jsx)(r.a,{href:"/guides/basic-features/routes#%E5%8A%A8%E6%80%81%E8%B7%AF%E7%94%B1",children:"\u52A8\u6001\u8DEF\u7531"}),"\uFF0C\u52A8\u6001\u8DEF\u7531\u7247\u6BB5\u4F1A\u4F5C\u4E3A\u53C2\u6570\u4F20\u5165 ",(0,o.jsx)(r.code,{children:"loader"})," \u51FD\u6570\uFF1A"]}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-tsx",children:"// routes/user/[id]/page.loader.ts\nimport { LoaderFunctionArgs } from '@modern-js/runtime/router';\n\nexport default async ({ params }: LoaderFunctionArgs) => {\n  const { id } = params;\n  const res = await fetch(`https://api/user/${id}`);\n  return res.json();\n};\n"})}),"\n",(0,o.jsxs)(r.p,{children:["\u5F53\u8BBF\u95EE ",(0,o.jsx)(r.code,{children:"/user/123"})," \u65F6\uFF0C",(0,o.jsx)(r.code,{children:"loader"})," \u51FD\u6570\u7684\u53C2\u6570\u4E3A ",(0,o.jsx)(r.code,{children:"{ params: { id: '123' } }"}),"\u3002"]}),"\n",(0,o.jsxs)(r.h4,{id:"request",children:[(0,o.jsx)(r.code,{children:"request"}),(0,o.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#request",children:"#"})]}),"\n",(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.code,{children:"request"})," \u662F\u4E00\u4E2A ",(0,o.jsx)(r.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Request",target:"_blank",rel:"noopener noreferrer",children:"Fetch Request"})," \u5B9E\u4F8B\u3002"]}),"\n",(0,o.jsxs)(r.p,{children:["\u4E00\u4E2A\u5E38\u89C1\u7684\u4F7F\u7528\u573A\u666F\u662F\u901A\u8FC7 ",(0,o.jsx)(r.code,{children:"request"})," \u83B7\u53D6\u67E5\u8BE2\u53C2\u6570\uFF1A"]}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-tsx",children:"// routes/user/[id]/page.loader.ts\nimport { LoaderFunctionArgs } from '@modern-js/runtime/router';\n\nexport default async ({ request }: LoaderFunctionArgs) => {\n  const url = new URL(request.url);\n  const userId = url.searchParams.get('id');\n  return queryUser(userId);\n};\n"})}),"\n",(0,o.jsxs)(r.h4,{id:"\u8FD4\u56DE\u503C",children:["\u8FD4\u56DE\u503C",(0,o.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#\u8FD4\u56DE\u503C",children:"#"})]}),"\n",(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.code,{children:"loader"})," \u51FD\u6570\u7684\u8FD4\u56DE\u503C\u53EF\u4EE5\u662F\u4EFB\u4F55\u53EF\u5E8F\u5217\u5316\u7684\u5185\u5BB9\uFF0C\u4E5F\u53EF\u4EE5\u662F\u4E00\u4E2A ",(0,o.jsx)(r.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Response",target:"_blank",rel:"noopener noreferrer",children:"Fetch Response"})," \u5B9E\u4F8B\uFF1A"]}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-tsx",children:"const loader = async (): Promise<ProfileData> => {\n  return {\n    message: 'hello world',\n  };\n};\nexport default loader;\n"})}),"\n",(0,o.jsxs)(r.p,{children:["\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C",(0,o.jsx)(r.code,{children:"loader"})," \u8FD4\u56DE\u7684\u54CD\u5E94 ",(0,o.jsx)(r.code,{children:"Content-type"})," \u662F ",(0,o.jsx)(r.code,{children:"application/json"}),"\uFF0C",(0,o.jsx)(r.code,{children:"status"})," \u4E3A 200\uFF0C\u4F60\u53EF\u4EE5\u901A\u8FC7\u81EA\u5B9A\u4E49 ",(0,o.jsx)(r.code,{children:"Response"})," \u6765\u8BBE\u7F6E\uFF1A"]}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-tsx",children:"const loader = async (): Promise<ProfileData> => {\n  const data = { message: 'hello world' };\n  return new Response(JSON.stringify(data), {\n    status: 200,\n    headers: {\n      'Content-Type': 'application/json; utf-8',\n    },\n  });\n};\n"})}),"\n",(0,o.jsxs)(r.h3,{id:"\u8BF7\u6C42-api",children:["\u8BF7\u6C42 API",(0,o.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#\u8BF7\u6C42-api",children:"#"})]}),"\n",(0,o.jsxs)(r.p,{children:["Modern.js \u5BF9 ",(0,o.jsx)(r.code,{children:"fetch"})," API \u505A\u4E86 polyfill, \u7528\u4E8E\u53D1\u8D77\u8BF7\u6C42\uFF0C\u8BE5 API \u4E0E\u6D4F\u89C8\u5668\u7684 ",(0,o.jsx)(r.code,{children:"fetch"})," API \u4E00\u81F4\uFF0C\u4F46\u662F\u5728\u670D\u52A1\u7AEF\u4E5F\u80FD\u4F7F\u7528\u8BE5 API \u53D1\u8D77\u8BF7\u6C42\uFF0C\u8FD9\u610F\u5473\u7740\u4E0D\u7BA1\u662F CSR \u8FD8\u662F SSR\uFF0C\u90FD\u53EF\u4EE5\u4F7F\u7528\u7EDF\u4E00\u7684 ",(0,o.jsx)(r.code,{children:"fetch"})," API \u8FDB\u884C\u6570\u636E\u83B7\u53D6\uFF1A"]}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-tsx",children:"async function loader() {\n  const res = await fetch('https://api/user/profile');\n}\n"})}),"\n",(0,o.jsxs)(r.h3,{id:"\u9519\u8BEF\u5904\u7406",children:["\u9519\u8BEF\u5904\u7406",(0,o.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#\u9519\u8BEF\u5904\u7406",children:"#"})]}),"\n",(0,o.jsxs)(r.p,{children:["\u5728 ",(0,o.jsx)(r.code,{children:"loader"})," \u51FD\u6570\u4E2D\uFF0C\u53EF\u4EE5\u901A\u8FC7 ",(0,o.jsx)(r.code,{children:"throw error"})," \u6216\u8005 ",(0,o.jsx)(r.code,{children:"throw response"})," \u7684\u65B9\u5F0F\u5904\u7406\u9519\u8BEF\uFF0C\u5F53 ",(0,o.jsx)(r.code,{children:"loader"})," \u51FD\u6570\u4E2D\u6709\u9519\u8BEF\u88AB\u629B\u51FA\u65F6\uFF0CModern.js \u4F1A\u505C\u6B62\u6267\u884C\u5F53\u524D ",(0,o.jsx)(r.code,{children:"loader"})," \u4E2D\u7684\u4EE3\u7801\uFF0C\u5E76\u5C06\u524D\u7AEF UI \u5207\u6362\u5230\u5B9A\u4E49\u7684 ",(0,o.jsx)(r.a,{href:"/guides/basic-features/routes#%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86",children:(0,o.jsx)(r.code,{children:"ErrorBoundary"})})," \u7EC4\u4EF6\uFF1A"]}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-tsx",children:"// routes/user/profile/page.loader.ts\nexport default async function loader() {\n  const res = await fetch('https://api/user/profile');\n  if (!res.ok) {\n    throw res;\n  }\n  return res.json();\n}\n\n// routes/user/profile/error.tsx\nimport { useRouteError } from '@modern-js/runtime/router';\nconst ErrorBoundary = () => {\n  const error = useRouteError() as Response;\n  return (\n    <div>\n      <h1>{error.status}</h1>\n      <h2>{error.statusText}</h2>\n    </div>\n  );\n};\n\nexport default ErrorBoundary;\n"})}),"\n",(0,o.jsxs)(r.h3,{id:"\u83B7\u53D6\u4E0A\u5C42\u7EC4\u4EF6\u7684\u6570\u636E",children:["\u83B7\u53D6\u4E0A\u5C42\u7EC4\u4EF6\u7684\u6570\u636E",(0,o.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#\u83B7\u53D6\u4E0A\u5C42\u7EC4\u4EF6\u7684\u6570\u636E",children:"#"})]}),"\n",(0,o.jsxs)(r.p,{children:["\u5F88\u591A\u573A\u666F\u4E0B\uFF0C\u5B50\u7EC4\u4EF6\u9700\u8981\u83B7\u53D6\u5230\u7956\u5148\u7EC4\u4EF6 ",(0,o.jsx)(r.code,{children:"loader"})," \u4E2D\u7684\u6570\u636E\uFF0C\u4F60\u53EF\u4EE5\u901A\u8FC7 ",(0,o.jsx)(r.code,{children:"useRouteLoaderData"})," \u65B9\u4FBF\u5730\u83B7\u53D6\u5230\u7956\u5148\u7EC4\u4EF6\u7684\u6570\u636E\uFF1A"]}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-tsx",children:"// routes/user/profile/page.tsx\nimport { useRouteLoaderData } from '@modern-js/runtime/router';\n\nexport default function UserLayout() {\n  // \u83B7\u53D6 routes/user/layout.loader.ts \u4E2D `loader` \u8FD4\u56DE\u7684\u6570\u636E\n  const data = useRouteLoaderData('user/layout');\n  return (\n    <div>\n      <h1>{data.name}</h1>\n      <h2>{data.age}</h2>\n    </div>\n  );\n}\n"})}),"\n",(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.code,{children:"userRouteLoaderData"})," \u63A5\u53D7\u4E00\u4E2A\u53C2\u6570 ",(0,o.jsx)(r.code,{children:"routeId"}),"\uFF0C\u5728\u4F7F\u7528\u7EA6\u5B9A\u5F0F\u8DEF\u7531\u65F6\uFF0CModern.js \u4F1A\u4E3A\u4F60\u81EA\u52A8\u751F\u6210",(0,o.jsx)(r.code,{children:"routeId"}),"\uFF0C",(0,o.jsx)(r.code,{children:"routeId"})," \u7684\u503C\u662F\u5BF9\u5E94\u7EC4\u4EF6\u76F8\u5BF9\u4E8E ",(0,o.jsx)(r.code,{children:"src/routes"})," \u7684\u8DEF\u5F84\uFF0C\u5982\u4E0A\u9762\u7684\u4F8B\u5B50\u4E2D\uFF0C\u5B50\u7EC4\u4EF6\u60F3\u8981\u83B7\u53D6 ",(0,o.jsx)(r.code,{children:"routes/user/layout.tsx"})," \u4E2D loader \u8FD4\u56DE\u7684\u6570\u636E\uFF0C",(0,o.jsx)(r.code,{children:"routeId"})," \u7684\u503C\u5C31\u662F ",(0,o.jsx)(r.code,{children:"user/layout"}),"\u3002"]}),"\n",(0,o.jsxs)(r.p,{children:["\u5728\u591A\u5165\u53E3\uFF08MPA\uFF09 \u573A\u666F\u4E0B\uFF0C",(0,o.jsx)(r.code,{children:"routeId"})," \u7684\u503C\u9700\u8981\u52A0\u4E0A\u5BF9\u5E94\u5165\u53E3\u7684\u540D\u79F0\uFF0C\u5165\u53E3\u540D\u79F0\u975E\u6307\u5B9A\u60C5\u51B5\u4E0B\u4E00\u822C\u662F\u5165\u53E3\u7684\u76EE\u5F55\u540D\uFF0C\u5982\u4EE5\u4E0B\u76EE\u5F55\u7ED3\u6784\uFF1A"]}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-bash",children:".\n\u2514\u2500\u2500 src\n    \u251C\u2500\u2500 entry1\n    \u2502     \u2514\u2500\u2500 routes\n    \u2502           \u2514\u2500\u2500 layout.tsx\n    \u2514\u2500\u2500 entry2\n          \u2514\u2500\u2500 routes\n                \u2514\u2500\u2500 layout.tsx\n"})}),"\n",(0,o.jsxs)(r.p,{children:["\u5982\u679C\u60F3\u83B7\u53D6 ",(0,o.jsx)(r.code,{children:"entry1/routes/layout.tsx"})," \u4E2D ",(0,o.jsx)(r.code,{children:"loader"})," \u8FD4\u56DE\u7684\u6570\u636E\uFF0C",(0,o.jsx)(r.code,{children:"routeId"})," \u7684\u503C\u5C31\u662F ",(0,o.jsx)(r.code,{children:"entry1_layout"}),"\u3002"]}),"\n",(0,o.jsxs)(r.h3,{id:"wiploading-ui",children:["(WIP)Loading UI",(0,o.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#wiploading-ui",children:"#"})]}),"\n",(0,o.jsxs)(r.div,{className:"modern-directive info",children:[(0,o.jsx)(r.div,{className:"modern-directive-title",children:"INFO"}),(0,o.jsxs)(r.div,{className:"modern-directive-content",children:[(0,o.jsx)(r.p,{children:"\u6B64\u529F\u80FD\u76EE\u524D\u662F\u5B9E\u9A8C\u6027\u8D28\uFF0C\u540E\u7EED API \u53EF\u80FD\u6709\u8C03\u6574\u3002"}),(0,o.jsx)(r.p,{children:"\u76EE\u524D\u4EC5\u652F\u6301 CSR\uFF0C\u656C\u8BF7\u671F\u5F85 Streaming SSR\u3002"}),"\n"]})]}),"\n",(0,o.jsxs)(r.p,{children:["\u521B\u5EFA ",(0,o.jsx)(r.code,{children:"user/layout.loader.ts"}),"\uFF0C\u5E76\u6DFB\u52A0\u4EE5\u4E0B\u4EE3\u7801\uFF1A"]}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-ts",meta:'title="routes/user/layout.loader.ts"',children:"import { defer } from \"@modern-js/runtime/router\"\n\nconst loader = () =>\ndefer({\n  userInfo: new Promise((resolve) => {\n      setTimeout(() => {\n        resolve({\n          age: 1,\n          name: 'user layout'\n        })\n      }, 1000)\n    })\n  })\n\nexport default loader;\n"})}),"\n",(0,o.jsxs)(r.p,{children:["\u5728 ",(0,o.jsx)(r.code,{children:"user/layout.tsx"})," \u4E2D\u6DFB\u52A0\u4EE5\u4E0B\u4EE3\u7801\uFF1A"]}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-tsx",meta:'title="routes/user/layout.tsx"',children:"import { Await, defer, useLoaderData, Outlet } from '@modern-js/runtime/router';\n\nexport default function UserLayout() {\n  const { userInfo } = useLoaderData() as { userInfo: Promise<UserInfo> };\n  return (\n    <div>\n      <React.Suspense fallback={<p>Loading...</p>}>\n        <Await\n          resolve={userInfo}\n          children={userInfo => (\n            <div>\n              <span>{userInfo.name}</span>\n              <span>{userInfo.age}</span>\n              <Outlet />\n            </div>\n          )}\n        ></Await>\n      </React.Suspense>\n    </div>\n  );\n}\n"})}),"\n",(0,o.jsxs)(r.div,{className:"modern-directive info",children:[(0,o.jsx)(r.div,{className:"modern-directive-title",children:"INFO"}),(0,o.jsxs)(r.div,{className:"modern-directive-content",children:[(0,o.jsxs)(r.p,{children:["Await \u7EC4\u4EF6\u7684\u5177\u4F53\u7528\u6CD5\u8BF7\u67E5\u770B ",(0,o.jsx)(r.a,{href:"https://reactrouter.com/en/main/components/await",target:"_blank",rel:"noopener noreferrer",children:"Await"})]}),"\n",(0,o.jsxs)(r.p,{children:["defer \u7684\u5177\u4F53\u7528\u6CD5\u8BF7\u67E5\u770B ",(0,o.jsx)(r.a,{href:"https://reactrouter.com/en/main/guides/deferred",target:"_blank",rel:"noopener noreferrer",children:"defer"})]}),"\n"]})]}),"\n","\n",(0,o.jsxs)(r.h3,{id:"\u9519\u8BEF\u7528\u6CD5",children:["\u9519\u8BEF\u7528\u6CD5",(0,o.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#\u9519\u8BEF\u7528\u6CD5",children:"#"})]}),"\n",(0,o.jsxs)(r.ol,{children:["\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.code,{children:"loader"})," \u4E2D\u53EA\u80FD\u8FD4\u56DE\u53EF\u5E8F\u5217\u5316\u7684\u6570\u636E\uFF0C\u5728 SSR \u73AF\u5883\u4E0B\uFF0C",(0,o.jsx)(r.code,{children:"loader"})," \u51FD\u6570\u7684\u8FD4\u56DE\u503C\u4F1A\u88AB\u5E8F\u5217\u5316\u4E3A JSON \u5B57\u7B26\u4E32\uFF0C\u7136\u540E\u5728\u5BA2\u6237\u7AEF\u88AB\u53CD\u5E8F\u5217\u5316\u4E3A\u5BF9\u8C61\u3002\u56E0\u6B64\uFF0C",(0,o.jsx)(r.code,{children:"loader"})," \u51FD\u6570\u4E2D\u4E0D\u80FD\u8FD4\u56DE\u4E0D\u53EF\u5E8F\u5217\u5316\u7684\u6570\u636E\uFF08\u5982\u51FD\u6570\uFF09\u3002"]}),"\n"]}),"\n",(0,o.jsxs)(r.div,{className:"modern-directive warning",children:[(0,o.jsx)(r.div,{className:"modern-directive-title",children:"WARNING"}),(0,o.jsxs)(r.div,{className:"modern-directive-content",children:[(0,o.jsx)(r.p,{children:"\u76EE\u524D CSR \u4E0B\u6CA1\u6709\u8FD9\u4E2A\u9650\u5236\uFF0C\u4F46\u6211\u4EEC\u5F3A\u70C8\u63A8\u8350\u4F60\u9075\u5FAA\u8BE5\u9650\u5236\uFF0C\u4E14\u672A\u6765\u6211\u4EEC\u53EF\u80FD\u5728 CSR \u4E0B\u4E5F\u52A0\u4E0A\u8BE5\u9650\u5236\u3002"}),"\n"]})]}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-ts",children:"// This won't work!\nexport default () => {\n  return {\n    user: {},\n    method: () => {},\n  };\n};\n"})}),"\n",(0,o.jsxs)(r.ol,{start:"2",children:["\n",(0,o.jsxs)(r.li,{children:["Modern.js \u4F1A\u5E2E\u4F60\u8C03\u7528 ",(0,o.jsx)(r.code,{children:"loader"})," \u51FD\u6570\uFF0C\u4F60\u4E0D\u5E94\u8BE5\u81EA\u5DF1\u8C03\u7528 ",(0,o.jsx)(r.code,{children:"loader"})," \u51FD\u6570\uFF1A"]}),"\n"]}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-ts",children:"// This won't work!\nexport default async () => {\n  const res = fetch('https://api/user/profile');\n  return res.json();\n};\n\nimport loader from './page.loader.ts';\nexport default function RouteComp() {\n  const data = loader();\n}\n"})}),"\n",(0,o.jsxs)(r.ol,{start:"3",children:["\n",(0,o.jsxs)(r.li,{children:["\u4E0D\u80FD\u4ECE\u8DEF\u7531\u7EC4\u4EF6\u4E2D\u5F15\u5165 ",(0,o.jsx)(r.code,{children:"loader"})," \u6587\u4EF6\uFF0C\u4E5F\u4E0D\u80FD\u4ECE ",(0,o.jsx)(r.code,{children:"loader"})," \u6587\u4EF6\u5F15\u5165\u8DEF\u7531\u7EC4\u4EF6\u4E2D\u7684\u53D8\u91CF\uFF0C\u5982\u679C\u9700\u8981\u5171\u4EAB\u7C7B\u578B\u7684\u8BDD\uFF0C\u5E94\u8BE5\u4F7F\u7528 ",(0,o.jsx)(r.code,{children:"import type"})]}),"\n"]}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-ts",children:"// Not allowed\n// routes/layout.tsx\nimport { useLoaderData } from '@modern-js/runtime/router';\nimport { ProfileData } from './page.loader.ts'; // should use \"import type\" instead\n\nexport const fetch = wrapFetch(fetch);\n\nexport default function UserPage() {\n  const profileData = useLoaderData() as ProfileData;\n  return <div>{profileData}</div>;\n}\n\n// routes/layout.loader.ts\nimport { fetch } from './layout.tsx'; // should not be imported from the routing component\nexport type ProfileData = {\n  /*  some types */\n};\n\nexport default async (): Promise<ProfileData> => {\n  const res = await fetch('https://api/user/profile');\n  return await res.json();\n};\n"})}),"\n",(0,o.jsxs)(r.ol,{start:"4",children:["\n",(0,o.jsxs)(r.li,{children:["\u5728\u670D\u52A1\u7AEF\u8FD0\u884C\u65F6\uFF0C",(0,o.jsx)(r.code,{children:"loader"})," \u51FD\u6570\u4F1A\u88AB\u6253\u5305\u4E3A\u4E00\u4E2A\u7EDF\u4E00\u7684 bundle\uFF0C\u6240\u4EE5\u6211\u4EEC\u4E0D\u63A8\u8350\u670D\u52A1\u7AEF\u7684\u4EE3\u7801\u4F7F\u7528 ",(0,o.jsx)(r.code,{children:"__filename"})," \u548C ",(0,o.jsx)(r.code,{children:"__dirname"}),"\u3002"]}),"\n"]}),"\n",(0,o.jsxs)(r.h3,{id:"\u5E38\u89C1\u95EE\u9898",children:["\u5E38\u89C1\u95EE\u9898",(0,o.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#\u5E38\u89C1\u95EE\u9898",children:"#"})]}),"\n",(0,o.jsxs)(r.ol,{children:["\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.code,{children:"loader"})," \u548C BFF \u51FD\u6570\u7684\u5173\u7CFB"]}),"\n"]}),"\n",(0,o.jsxs)(r.p,{children:["\u5728 CSR \u9879\u76EE\u4E2D\uFF0C",(0,o.jsx)(r.code,{children:"loader"})," \u5728\u5BA2\u6237\u7AEF\u6267\u884C\uFF0C\u5728 ",(0,o.jsx)(r.code,{children:"loader"})," \u53EF\u4EE5\u76F4\u63A5\u8C03\u7528 BFF \u51FD\u6570\u8FDB\u884C\u63A5\u53E3\u8BF7\u6C42\u3002"]}),"\n",(0,o.jsxs)(r.p,{children:["\u5728 SSR \u9879\u76EE\u4E2D\uFF0C\u6BCF\u4E2A ",(0,o.jsx)(r.code,{children:"loader"})," \u4E5F\u662F\u4E00\u4E2A\u670D\u52A1\u7AEF\u63A5\u53E3\uFF0C\u6211\u4EEC\u63A8\u8350\u4F7F\u7528 ",(0,o.jsx)(r.code,{children:"loader"})," \u66FF\u4EE3 http method \u4E3A ",(0,o.jsx)(r.code,{children:"get"})," \u7684 BFF \u51FD\u6570\uFF0C\u4F5C\u4E3A\u63A5\u53E3\u5C42\uFF0C\u907F\u514D\u591A\u4E00\u5C42\u8F6C\u53D1\u548C\u6267\u884C\u3002"]}),"\n",(0,o.jsxs)(r.h2,{id:"useloader\u65E7\u7248",children:["useLoader\uFF08\u65E7\u7248\uFF09",(0,o.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#useloader\u65E7\u7248",children:"#"})]}),"\n",(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.strong,{children:(0,o.jsx)(r.code,{children:"useLoader"})})," \u662F Modern.js \u8001\u7248\u672C\u4E2D\u7684 API\u3002\u8BE5 API \u662F\u4E00\u4E2A React Hook\uFF0C\u4E13\u95E8\u63D0\u4F9B\u7ED9 SSR \u5E94\u7528\u4F7F\u7528\uFF0C\u8BA9\u5F00\u53D1\u8005\u80FD\u540C\u6784\u7684\u5728\u7EC4\u4EF6\u4E2D\u83B7\u53D6\u6570\u636E\u3002"]}),"\n",(0,o.jsxs)(r.div,{className:"modern-directive tip",children:[(0,o.jsx)(r.div,{className:"modern-directive-title",children:"TIP"}),(0,o.jsxs)(r.div,{className:"modern-directive-content",children:[(0,o.jsxs)(r.p,{children:["CSR \u7684\u9879\u76EE\u6CA1\u6709\u5FC5\u8981\u4F7F\u7528 ",(0,o.jsx)(r.code,{children:"useLoader"})," \u83B7\u53D6\u6570\u636E\u3002"]}),"\n"]})]}),"\n",(0,o.jsx)(r.p,{children:"\u4EE5\u4E0B\u662F\u4E00\u4E2A\u6700\u7B80\u5355\u7684\u4F8B\u5B50\uFF1A"}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-tsx",children:"import { useLoader } from '@modern-js/runtime';\n\nexport default () => {\n  const { data } = useLoader(async () => {\n    console.log('fetch in useLoader');\n\n    // \u8FD9\u91CC\u6CA1\u6709\u53D1\u9001\u771F\u5B9E\u7684\u8BF7\u6C42\uFF0C\u53EA\u662F\u8FD4\u56DE\u4E86\u4E00\u4E2A\u5199\u6B7B\u7684\u6570\u636E\u3002\n    // \u771F\u5B9E\u9879\u76EE\u4E2D\uFF0C\u5E94\u8BE5\u8FD4\u56DE\u4ECE\u8FDC\u7AEF\u83B7\u53D6\u7684\u6570\u636E\u3002\n    return {\n      name: 'Modern.js',\n    };\n  });\n\n  return <div>Hello, {data?.name}</div>;\n};\n"})}),"\n",(0,o.jsx)(r.p,{children:"\u4E0A\u8FF0\u4EE3\u7801\u542F\u52A8\u540E\uFF0C\u8BBF\u95EE\u9875\u9762\u3002\u53EF\u4EE5\u770B\u5230\u5728\u7EC8\u7AEF\u8F93\u51FA\u4E86\u65E5\u5FD7\uFF0C\u800C\u5728\u6D4F\u89C8\u5668\u7EC8\u7AEF\u5374\u6CA1\u6709\u6253\u5370\u65E5\u5FD7\u3002"}),"\n",(0,o.jsxs)(r.p,{children:["\u8FD9\u662F\u56E0\u4E3A Modern.js \u5728\u670D\u52A1\u7AEF\u6E32\u67D3\u65F6\uFF0C\u5728\u4F1A\u6536\u96C6 ",(0,o.jsx)(r.code,{children:"useLoader"})," \u8FD4\u56DE\u7684\u6570\u636E\uFF0C\u5E76\u5C06\u6570\u636E\u6CE8\u5165\u5230\u54CD\u5E94\u7684 HTML \u4E2D\u3002\u5982\u679C SSR \u6E32\u67D3\u6210\u529F\uFF0C\u5728 HTML \u4E2D\u53EF\u4EE5\u770B\u5230\u5982\u4E0B\u4EE3\u7801\u7247\u6BB5\uFF1A"]}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-html",children:"<script>\n  window._SSR_DATA = {};\n</script>\n"})}),"\n",(0,o.jsxs)(r.p,{children:["\u5728\u8FD9\u5168\u5C40\u53D8\u91CF\u4E2D\uFF0C\u8BB0\u5F55\u4E86\u6BCF\u4E00\u4EFD\u6570\u636E\uFF0C\u800C\u5728\u6D4F\u89C8\u5668\u7AEF\u6E32\u67D3\u7684\u8FC7\u7A0B\u4E2D\uFF0C\u4F1A\u4F18\u5148\u4F7F\u7528\u8FD9\u4EFD\u6570\u636E\u3002\u5982\u679C\u6570\u636E\u4E0D\u5B58\u5728\uFF0C\u5219\u4F1A\u91CD\u65B0\u6267\u884C ",(0,o.jsx)(r.code,{children:"useLoader"})," \u51FD\u6570\u3002"]}),"\n",(0,o.jsxs)(r.div,{className:"modern-directive note",children:[(0,o.jsx)(r.div,{className:"modern-directive-title",children:"NOTE"}),(0,o.jsxs)(r.div,{className:"modern-directive-content",children:[(0,o.jsxs)(r.p,{children:["\u5728\u6784\u5EFA\u9636\u6BB5\uFF0CModern.js \u4F1A\u81EA\u52A8\u4E3A\u6BCF\u4E2A ",(0,o.jsx)(r.code,{children:"useLoader"})," \u751F\u6210\u4E00\u4E2A Loader ID\uFF0C\u5E76\u6CE8\u5165\u5230 SSR \u548C CSR \u7684 JS Bundle \u4E2D\uFF0C\u7528\u6765\u5173\u8054 Loader \u548C\u6570\u636E\u3002"]}),"\n"]})]}),"\n",(0,o.jsxs)(r.p,{children:["\u76F8\u6BD4\u4E8E Next.js \u4E2D\u7684 ",(0,o.jsx)(r.code,{children:"getServerSideProps"}),"\uFF0C\u5728\u6E32\u67D3\u524D\u9884\u5148\u83B7\u53D6\u6570\u636E\u3002\u4F7F\u7528 ",(0,o.jsx)(r.code,{children:"useLoader"}),"\uFF0C\u53EF\u4EE5\u5728\u7EC4\u4EF6\u4E2D\u83B7\u53D6\u5C40\u90E8 UI \u6240\u9700\u8981\u7684\u6570\u636E\uFF0C\u800C\u4E0D\u7528\u5C06\u6570\u636E\u5C42\u5C42\u4F20\u9012\u3002\u540C\u6837\uFF0C\u4E5F\u4E0D\u4F1A\u56E0\u4E3A\u4E0D\u540C\u8DEF\u7531\u9700\u8981\u4E0D\u540C\u6570\u636E\u8BF7\u6C42\uFF0C\u800C\u5728\u6700\u5916\u5C42\u7684\u6570\u636E\u83B7\u53D6\u51FD\u6570\u4E2D\u6DFB\u52A0\u5197\u4F59\u7684\u903B\u8F91\u3002\u5F53\u7136 ",(0,o.jsx)(r.code,{children:"useLoader"})," \u4E5F\u5B58\u5728\u4E00\u4E9B\u95EE\u9898\uFF0C\u4F8B\u5982\u670D\u52A1\u7AEF\u4EE3\u7801 Treeshaking \u56F0\u96BE\uFF0C\u670D\u52A1\u7AEF\u9700\u8981\u591A\u4E00\u6B21\u9884\u6E32\u67D3\u7B49\u3002"]}),"\n",(0,o.jsxs)(r.p,{children:["Modern.js \u5728\u65B0\u7248\u672C\u4E2D\uFF0C\u8BBE\u8BA1\u4E86\u5168\u65B0\u7684 Loader \u65B9\u6848\u3002\u65B0\u65B9\u6848\u89E3\u51B3\u4E86\u8FD9\u4E9B\u95EE\u9898\uFF0C\u5E76\u80FD\u591F\u914D\u5408",(0,o.jsx)(r.strong,{children:"\u5D4C\u5957\u8DEF\u7531"}),"\uFF0C\u5BF9\u9875\u9762\u6027\u80FD\u505A\u4F18\u5316\u3002"]}),"\n",(0,o.jsxs)(r.div,{className:"modern-directive note",children:[(0,o.jsx)(r.div,{className:"modern-directive-title",children:"NOTE"}),(0,o.jsxs)(r.div,{className:"modern-directive-content",children:[(0,o.jsxs)(r.p,{children:["\u8BE6\u7EC6 API \u53EF\u4EE5\u67E5\u770B ",(0,o.jsx)(r.a,{href:"/apis/app/runtime/core/use-loader",children:"useLoader"}),"\u3002"]}),"\n"]})]})]})}(s=globalThis).__RSPRESS_PAGE_META||(s.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["zh%2Fguides%2Fbasic-features%2Fdata-fetch.mdx"]={toc:[{text:"Data Loader(\u63A8\u8350)",id:"data-loader\u63A8\u8350",depth:2},{text:"\u57FA\u7840\u793A\u4F8B",id:"\u57FA\u7840\u793A\u4F8B",depth:3},{text:"loader \u51FD\u6570",id:"loader-\u51FD\u6570",depth:3},{text:"params",id:"params",depth:4},{text:"request",id:"request",depth:4},{text:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",depth:4},{text:"\u8BF7\u6C42 API",id:"\u8BF7\u6C42-api",depth:3},{text:"\u9519\u8BEF\u5904\u7406",id:"\u9519\u8BEF\u5904\u7406",depth:3},{text:"\u83B7\u53D6\u4E0A\u5C42\u7EC4\u4EF6\u7684\u6570\u636E",id:"\u83B7\u53D6\u4E0A\u5C42\u7EC4\u4EF6\u7684\u6570\u636E",depth:3},{text:"(WIP)Loading UI",id:"wiploading-ui",depth:3},{text:"\u9519\u8BEF\u7528\u6CD5",id:"\u9519\u8BEF\u7528\u6CD5",depth:3},{text:"\u5E38\u89C1\u95EE\u9898",id:"\u5E38\u89C1\u95EE\u9898",depth:3},{text:"useLoader\uFF08\u65E7\u7248\uFF09",id:"useloader\u65E7\u7248",depth:2}],title:"\u6570\u636E\u83B7\u53D6",frontmatter:{sidebar_position:4}};var c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=Object.assign({},(0,i.useMDXComponents)(),e.components).wrapper;return r?(0,o.jsx)(r,(0,a._)((0,d._)({},e),{children:(0,o.jsx)(t,(0,d._)({},e))})):t(e)}}}]);