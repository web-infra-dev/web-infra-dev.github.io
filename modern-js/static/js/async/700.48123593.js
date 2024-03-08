/*! For license information please see 700.48123593.js.LICENSE.txt */
(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["700"],{98349:function(e,n,s){"use strict";s.r(n);var r=s("39980"),i=s("96954");function t(e){let n=Object.assign({h1:"h1",a:"a",p:"p",ul:"ul",li:"li",code:"code",div:"div",pre:"pre",h2:"h2",strong:"strong"},(0,i.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"\u81EA\u5B9A\u4E49\u8BF7\u6C42-sdk",children:["\u81EA\u5B9A\u4E49\u8BF7\u6C42 SDK",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u81EA\u5B9A\u4E49\u8BF7\u6C42-sdk",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["Modern.js \u7684 BFF \u5728 CSR \u548C SSR \u662F\u540C\u6784\u7684\u3002\u5728\u6D4F\u89C8\u5668\u7AEF\u4F9D\u8D56\u4E86",(0,r.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch",target:"_blank",rel:"noopener noreferrer",children:"Fetch API"}),"\uFF0C\u5728\u670D\u52A1\u7AEF\u4F9D\u8D56\u4E86 ",(0,r.jsx)(n.a,{href:"https://www.npmjs.com/package/node-fetch",target:"_blank",rel:"noopener noreferrer",children:"node-fetch"}),"\u3002\u4F46\u5728\u5F88\u591A\u4E1A\u52A1\u573A\u666F\u4E0B\u6211\u4EEC\u9700\u8981\u5BF9\u8BF7\u6C42\u6216\u54CD\u5E94\u505A\u4E00\u4E9B\u989D\u5916\u7684\u5904\u7406\uFF0C\u4F8B\u5982\uFF1A"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u5728\u8BF7\u6C42\u5934\u4E2D\u5199\u5165\u9274\u6743\u4FE1\u606F"}),"\n",(0,r.jsx)(n.li,{children:"\u5BF9\u54CD\u5E94\u7684\u6570\u636E\u6216\u9519\u8BEF\u8FDB\u884C\u7EDF\u4E00\u7684\u5904\u7406"}),"\n",(0,r.jsx)(n.li,{children:"\u7279\u5B9A\u5E73\u53F0\u65E0\u6CD5\u4F7F\u7528\u6D4F\u89C8\u5668\u7684\u539F\u751F fetch \u51FD\u6570\uFF0C\u9700\u8981\u4F7F\u7528\u5176\u4ED6\u65B9\u5F0F\u53D1\u9001\u8BF7\u6C42"}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["\u9488\u5BF9\u4E0A\u8FF0\u7684\u573A\u666F\uFF0CModern.js \u63D0\u4F9B\u4E86 ",(0,r.jsx)(n.code,{children:"configure"})," \u51FD\u6570\uFF0C\u81EA\u5B9A\u4E49\u80FD\u529B\u4ECE\u4F4E\u5230\u9AD8\uFF0C\u53EF\u4EE5\u7528\u5B83\u914D\u7F6E ssr \u900F\u4F20\u8BF7\u6C42\u5934\uFF0C\u62E6\u622A\u5668\uFF0C\u8BF7\u6C42 SDK\u3002"]}),"\n",(0,r.jsxs)(n.div,{className:"rspress-directive caution",children:[(0,r.jsx)(n.div,{className:"rspress-directive-title",children:"\u6CE8\u610F"}),(0,r.jsxs)(n.div,{className:"rspress-directive-content",children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"configure"})," \u51FD\u6570\u7684\u8C03\u7528\u9700\u8981\u5728\u6240\u6709 BFF \u8BF7\u6C42\u53D1\u9001\u524D\u8C03\u7528\uFF0C\u4EE5\u786E\u4FDD\u8986\u76D6\u9ED8\u8BA4\u7684\u8BF7\u6C42\u914D\u7F6E\u3002"]}),"\n"]})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",meta:'title="App.tsx"',children:"import { configure } from '@modern-js/runtime/bff';\n\nconfigure({\n  request: customRequest\n})\n"})}),"\n",(0,r.jsxs)(n.h2,{id:"\u914D\u7F6E-ssr-\u900F\u4F20\u8BF7\u6C42\u5934",children:["\u914D\u7F6E ssr \u900F\u4F20\u8BF7\u6C42\u5934",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u914D\u7F6E-ssr-\u900F\u4F20\u8BF7\u6C42\u5934",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"\u5728\u540C\u65F6\u4F7F\u7528 Modernjs SSR \u548C BFF \u7684\u573A\u666F\u4E0B\uFF0C\u5E38\u5E38\u9700\u8981\u5C06 SSR \u9875\u9762\u8BF7\u6C42\u4E0A\u7684\u4E00\u4E9B\u8BF7\u6C42\u5934\u4FE1\u606F\uFF0C\u900F\u4F20\u7ED9 BFF \u670D\u52A1\u3002"}),"\n",(0,r.jsxs)(n.p,{children:["\u4F8B\u5982\u9879\u76EE\u6709\u9875\u9762\u5730\u5740\u662F ",(0,r.jsx)(n.code,{children:"https://website.com"}),"\uFF0C\u8BE5\u9875\u9762\u662F SSR \u7684\uFF0C\u5728\u7EC4\u4EF6\u4E2D\u4F1A\u8C03\u7528 API \u63A5\u53E3 ",(0,r.jsx)(n.code,{children:"https://website.com/api/info"}),"\uFF0C\u8BE5\u63A5\u53E3\u9700\u8981\u7528\u6237\u7684 cookie \u4FE1\u606F\u505A\u9274\u6743\u3002\u9875\u9762\u5728\u8BF7\u6C42\u8BE5 API \u63A5\u53E3\u65F6\uFF0C\u9700\u8981\u5C06 SSR \u9875\u9762\u8BF7\u6C42\u7684 ",(0,r.jsx)(n.code,{children:"cookie"})," \u4F20\u7ED9 BFF\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u76EE\u524D\u4EE5\u4E0B\u8BF7\u6C42\u5934\u5728 Modernjs \u4E2D\u662F\u81EA\u52A8\u900F\u4F20\u7684\uFF1A"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"cookie"}),"\n",(0,r.jsx)(n.li,{children:"x-tt-logid"}),"\n",(0,r.jsx)(n.li,{children:"user-agent"}),"\n",(0,r.jsx)(n.li,{children:"x-tt-stress"}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["\u53EF\u4EE5\u901A\u8FC7 ",(0,r.jsx)(n.code,{children:"configure"})," \u914D\u7F6E\u8BF7\u6C42\u5934\u3002\u4F8B\u5982\u4EE5\u4E0B\u4F8B\u5B50\uFF0CModern.js \u4F1A\u81EA\u52A8\u5C06 SSR \u9875\u9762\u8BF7\u6C42\u7684 cookie \u4FE1\u606F\u900F\u4F20\u7ED9 BFF \u670D\u52A1\uFF1A"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",meta:'title="App.tsx"',children:"import { configure } from '@modern-js/runtime/bff';\n\nconfigure({\n  allowedHeaders: ['x-uid']\n})\n"})}),"\n",(0,r.jsxs)(n.h2,{id:"\u914D\u7F6E\u62E6\u622A\u5668",children:["\u914D\u7F6E\u62E6\u622A\u5668",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u914D\u7F6E\u62E6\u622A\u5668",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"\u5728\u6709\u4E9B\u4E1A\u52A1\u573A\u666F\u4E0B\u9700\u8981\u5BF9\u8BF7\u6C42\u548C\u54CD\u5E94\u8FDB\u884C\u4E00\u4E9B\u7EDF\u4E00\u7684\u5904\u7406\uFF0C\u8FD9\u79CD\u573A\u666F\u4E0B\u53EF\u4EE5\u914D\u7F6E\u62E6\u622A\u5668\u6EE1\u8DB3\u9700\u6C42\uFF1A"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",meta:'title="App.tsx"',children:"configure({\n  // \u8FD9\u91CC\u7684 request \u662F\u4E00\u4F53\u5316\u9ED8\u8BA4\u7684\u8BF7\u6C42\u5DE5\u5177\uFF0Cinterceptor \u51FD\u6570\u9700\u8FD4\u56DE\u4E00\u4E2A\u65B0\u7684 request\u3002\n  // \u65B0 request \u7684\u51FA\u53C2\u5FC5\u987B\u662F parse body \u4E4B\u540E\u7684\u7ED3\u679C\n  interceptor(request){\n    return async(url, params) => {\n      const res = await request(url, params);\n      return res.json();\n    };\n  }\n});\n"})}),"\n",(0,r.jsxs)(n.h2,{id:"\u914D\u7F6E\u81EA\u5B9A\u4E49\u8BF7\u6C42-sdk",children:["\u914D\u7F6E\u81EA\u5B9A\u4E49\u8BF7\u6C42 SDK",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u914D\u7F6E\u81EA\u5B9A\u4E49\u8BF7\u6C42-sdk",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["\u5982\u679C\u4EC5\u4EC5\u901A\u8FC7\u914D\u7F6E\u62E6\u622A\u5668\u65E0\u6CD5\u6EE1\u8DB3\u9700\u6C42\uFF0C\u9700\u8981\u5BF9\u8BF7\u6C42\u7684 SDK \u505A\u8FDB\u4E00\u6B65\u7684\u81EA\u5B9A\u4E49\uFF0C\u53EF\u4EE5\u901A\u8FC7 ",(0,r.jsx)(n.code,{children:"configure"})," \u51FD\u6570\u914D\u7F6E\u81EA\u5B9A\u4E49\u8BF7\u6C42 SDK\uFF1A"]}),"\n",(0,r.jsxs)(n.div,{className:"rspress-directive caution",children:[(0,r.jsx)(n.div,{className:"rspress-directive-title",children:"\u6CE8\u610F"}),(0,r.jsxs)(n.div,{className:"rspress-directive-content",children:[(0,r.jsxs)(n.p,{children:["\u5728 SSR \u548C\u4E00\u4F53\u5316\u8C03\u7528\u7684\u573A\u666F\u4E0B\uFF0C\u5728 SSR \u5411 BFF \u670D\u52A1\u53D1\u9001\u8BF7\u6C42\u65F6\uFF0CModern.js \u4F1A\u901A\u8FC7",(0,r.jsx)(n.strong,{children:"\u670D\u52A1\u53D1\u73B0"}),"\u627E\u5230 BFF \u670D\u52A1\u5185\u7F51 IP\uFF0C\u5E76\u901A\u8FC7 IP \u53D1\u9001\u8BF7\u6C42\uFF0C\u4EE5\u63D0\u9AD8\u6027\u80FD\u3002\u5982\u679C\u4F7F\u7528\u81EA\u5B9A\u4E49\u8BF7\u6C42 SDK \u4F1A",(0,r.jsx)(n.strong,{children:"\u5931\u53BB\u8FD9\u79CD\u4F18\u5316"}),"\u3002"]}),"\n"]})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",meta:'title="App.tsx"',children:"import nodeFetch from 'node-fetch';\n\nconst customFetch = (input: RequestInfo | URL, init: RequestInit) => {\n  const curFetch = process.env.MODERN_TARGET !== 'node' ? fetch : nodeFetch as unknown as typeof fetch;\n  return curFetch(input, init).then(async res => {\n    const data = await res.json();\n    data.hello = 'hello custom sdk';\n    return data;\n  });\n};\n\nconfigure({\n  request: customFetch,\n});\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u914D\u7F6E\u81EA\u5B9A\u4E49\u8BF7\u6C42 SDK \u6709\u4EE5\u4E0B\u7EA6\u5B9A\uFF1A"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u901A\u8FC7 ",(0,r.jsx)(n.code,{children:"configure"})," \u51FD\u6570\u53EF\u4EE5\u914D\u7F6E\u4E00\u4E2A ",(0,r.jsx)(n.code,{children:"request"})," \u51FD\u6570\uFF0C\u8FD9\u4E2A\u51FD\u6570\u7684\u5165\u53C2\u4E0E\u6D4F\u89C8\u5668\u4E2D\u7684 Fetch \u6216 node-fetch \u5BF9\u9F50\uFF0C\u6240\u6709\u7684\u4E00\u4F53\u5316 BFF \u51FD\u6570\u4F1A\u901A\u8FC7\u8BE5\u51FD\u6570\u53D1\u9001\u8BF7\u6C42\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"request"})," \u51FD\u6570\u51FA\u53C2\u5FC5\u987B\u662F\u63A5\u53E3\u5B9E\u9645\u8FD4\u56DE\u7684\u6570\u636E\uFF0C\u4E0D\u80FD\u662F Promise\uFF0C\u5426\u5219\u4F1A\u5BFC\u81F4\u4E00\u4F53\u5316 BFF \u51FD\u6570\u65E0\u6CD5\u6B63\u5E38\u8FD4\u56DE\u6570\u636E\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:["\u5982\u679C\u662F SSR \u9879\u76EE\uFF0C",(0,r.jsx)(n.code,{children:"request"})," \u5FC5\u987B\u8981\u540C\u65F6\u652F\u6301\u6D4F\u89C8\u5668\u7AEF\u548C\u670D\u52A1\u5668\u7AEF\u53D1\u9001\u8BF7\u6C42\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"\u4F7F\u7528 axios \u5B9A\u5236\u81EA\u5B9A\u4E49\u8BF7\u6C42 SDK \u7684\u793A\u4F8B\uFF1A"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",meta:'title="App.tsx"',children:"import { configure } from '@modern-js/runtime/bff';\nimport type { Method, AxiosRequestHeaders as Headers } from 'axios';\n\nconfigure({\n  async request(...config: Parameters<typeof fetch>) {\n    const [url, params] = config;\n    const res = await axios({\n      url: url as string,  // \u8FD9\u91CC\u56E0\u4E3A fetch \u548C axios \u7C7B\u578B\u6709\u4E9B\u4E0D\u517C\u5BB9\uFF0C\u9700\u8981\u4F7F\u7528 as\n      method: params?.method as Method,\n      data: params?.body,\n      headers: params?.headers as Headers,\n    });\n    return res.data;\n  },\n});\n"})})]})}function c(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,i.useMDXComponents)(),e.components);return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(t,{...e})}):t(e)}n.default=c,c.__RSPRESS_PAGE_META={},c.__RSPRESS_PAGE_META["zh%2Fguides%2Fadvanced-features%2Fbff%2Fsdk.mdx"]={toc:[{text:"\u914D\u7F6E ssr \u900F\u4F20\u8BF7\u6C42\u5934",id:"\u914D\u7F6E-ssr-\u900F\u4F20\u8BF7\u6C42\u5934",depth:2},{text:"\u914D\u7F6E\u62E6\u622A\u5668",id:"\u914D\u7F6E\u62E6\u622A\u5668",depth:2},{text:"\u914D\u7F6E\u81EA\u5B9A\u4E49\u8BF7\u6C42 SDK",id:"\u914D\u7F6E\u81EA\u5B9A\u4E49\u8BF7\u6C42-sdk",depth:2}],title:"\u81EA\u5B9A\u4E49\u8BF7\u6C42 SDK",frontmatter:{sidebar_position:4,title:"\u81EA\u5B9A\u4E49\u8BF7\u6C42 SDK"}}}}]);