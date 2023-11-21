(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["464"],{16388:function(e,s,n){"use strict";n.r(s),n.d(s,{default:function(){return c}});var r=n("9880"),t=n("23169");function i(e){let s=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",pre:"pre",h3:"h3",a:"a",h4:"h4"},(0,t.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"\u7C7B\u578B\uFF1A"})," ",(0,r.jsx)(s.code,{children:"Object"})]}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"output.assetsRetry"})," \u7528\u4E8E\u914D\u7F6E\u8D44\u6E90\u52A0\u8F7D\u5931\u8D25\u65F6\u7684\u91CD\u8BD5\u903B\u8F91\u3002\u914D\u7F6E\u7C7B\u578B\u5982\u4E0B:"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-ts",children:"export type AssetsRetryHookContext = {\n  times: number;\n  domain: string;\n  url: string;\n  tagName: string;\n};\n\nexport type AssetsRetryOptions = {\n  type?: string[];\n  domain?: string[];\n  max?: number;\n  test?: string | ((url: string) => boolean);\n  crossOrigin?: boolean | 'anonymous' | 'use-credentials';\n  inlineScript?: boolean;\n  onRetry?: (options: AssetsRetryHookContext) => void;\n  onSuccess?: (options: AssetsRetryHookContext) => void;\n  onFail?: (options: AssetsRetryHookContext) => void;\n};\n"})}),"\n",(0,r.jsx)(s.p,{children:"\u7531\u4E8E\u8BE5\u80FD\u529B\u4F1A\u5F80 HTML \u4E2D\u6CE8\u5165\u989D\u5916\u7684\u4E00\u4E9B\u8FD0\u884C\u65F6\u4EE3\u7801\uFF0C\u56E0\u6B64\u6211\u4EEC\u9ED8\u8BA4\u5173\u95ED\u4E86\u8BE5\u80FD\u529B\uFF0C\u5982\u679C\u9700\u8981\u5F00\u542F\u8BE5\u80FD\u529B\uFF0C\u4F60\u53EF\u4EE5\u6DFB\u52A0\u4EE5\u4E0B\u914D\u7F6E\uFF1A"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-js",children:"export default {\n  output: {\n    assetsRetry: {},\n  },\n};\n"})}),"\n",(0,r.jsxs)(s.p,{children:["\u5F53\u4F60\u5F00\u542F\u8BE5\u80FD\u529B\u540E\uFF0C",(0,r.jsx)(s.code,{children:"assetsRetry"})," \u7684\u9ED8\u8BA4\u914D\u7F6E\u5982\u4E0B\uFF1A"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-ts",children:"export const defaultAssetsRetryOptions: AssetsRetryOptions = {\n  type: ['script', 'link', 'img'],\n  domain: [],\n  max: 3,\n  test: '',\n  crossOrigin: false,\n  onRetry: () => {},\n  onSuccess: () => {},\n  onFail: () => {},\n};\n"})}),"\n",(0,r.jsx)(s.p,{children:"\u540C\u65F6\u4F60\u4E5F\u53EF\u4EE5\u4F7F\u7528\u4EE5\u4E0B\u7684\u914D\u7F6E\u9879\uFF0C\u6765\u5B9A\u5236\u4F60\u7684\u91CD\u8BD5\u903B\u8F91\u3002"}),"\n",(0,r.jsxs)(s.h3,{id:"assetsretrydomain",children:["assetsRetry.domain",(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#assetsretrydomain",children:"#"})]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"\u7C7B\u578B\uFF1A"})," ",(0,r.jsx)(s.code,{children:"string[]"})]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"\u9ED8\u8BA4\u503C\uFF1A"})," ",(0,r.jsx)(s.code,{children:"[]"})]}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:["\u6307\u5B9A\u8D44\u6E90\u52A0\u8F7D\u5931\u8D25\u65F6\u7684\u91CD\u8BD5\u57DF\u540D\u5217\u8868\u3002\u5728 ",(0,r.jsx)(s.code,{children:"domain"})," \u6570\u7EC4\u4E2D\uFF0C\u7B2C\u4E00\u9879\u662F\u5F53\u524D\u4F7F\u7528\u7684\u57DF\u540D\uFF0C\u540E\u9762\u51E0\u9879\u4E3A\u5907\u7528\u57DF\u540D\u3002\u5F53\u67D0\u4E2A\u57DF\u540D\u7684\u8D44\u6E90\u8BF7\u6C42\u5931\u8D25\u65F6\uFF0CBuilder \u4F1A\u5728\u6570\u7EC4\u4E2D\u627E\u5230\u8BE5\u57DF\u540D\uFF0C\u5E76\u66FF\u6362\u4E3A\u6570\u7EC4\u7684\u4E0B\u4E00\u4E2A\u57DF\u540D\u3002"]}),"\n",(0,r.jsx)(s.p,{children:"\u6BD4\u5982\uFF1A"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-js",children:"export default {\n  output: {\n    assetsRetry: {\n      domain: ['https://cdn1.com', 'https://cdn2.com', 'https://cdn3.com'],\n    },\n  },\n};\n"})}),"\n",(0,r.jsxs)(s.p,{children:["\u6DFB\u52A0\u4EE5\u4E0A\u914D\u7F6E\u540E\uFF0C\u5F53 ",(0,r.jsx)(s.code,{children:"cdn1.com"})," \u57DF\u540D\u7684\u8D44\u6E90\u52A0\u8F7D\u5931\u8D25\u65F6\uFF0C\u8BF7\u6C42\u57DF\u540D\u4F1A\u81EA\u52A8\u964D\u7EA7\u5230 ",(0,r.jsx)(s.code,{children:"cdn2.com"}),"\u3002"]}),"\n",(0,r.jsxs)(s.p,{children:["\u5982\u679C ",(0,r.jsx)(s.code,{children:"cdn2.com"})," \u7684\u8D44\u6E90\u4E5F\u8BF7\u6C42\u5931\u8D25\uFF0C\u5219\u4F1A\u7EE7\u7EED\u8BF7\u6C42 ",(0,r.jsx)(s.code,{children:"cdn3.com"}),"\u3002"]}),"\n",(0,r.jsxs)(s.h3,{id:"assetsretrytype",children:["assetsRetry.type",(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#assetsretrytype",children:"#"})]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"\u7C7B\u578B\uFF1A"})," ",(0,r.jsx)(s.code,{children:"string[]"})]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"\u9ED8\u8BA4\u503C\uFF1A"})," ",(0,r.jsx)(s.code,{children:"['script', 'link', 'img']"})]}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:"\u7528\u4E8E\u6307\u5B9A\u9700\u8981\u8FDB\u884C\u91CD\u8BD5\u7684 HTML \u6807\u7B7E\u7C7B\u578B\u3002\u9ED8\u8BA4\u4F1A\u5904\u7406 script \u6807\u7B7E\u3001link \u6807\u7B7E\u548C img \u6807\u7B7E\uFF0C\u5BF9\u5E94 JS \u4EE3\u7801\u3001CSS \u4EE3\u7801\u548C\u56FE\u7247\u3002"}),"\n",(0,r.jsx)(s.p,{children:"\u6BD4\u5982\u53EA\u5BF9 script \u6807\u7B7E\u548C link \u6807\u7B7E\u8FDB\u884C\u5904\u7406\uFF1A"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-js",children:"export default {\n  output: {\n    assetsRetry: {\n      type: ['script', 'link'],\n    },\n  },\n};\n"})}),"\n",(0,r.jsxs)(s.h3,{id:"assetsretrymax",children:["assetsRetry.max",(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#assetsretrymax",children:"#"})]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"\u7C7B\u578B\uFF1A"})," ",(0,r.jsx)(s.code,{children:"number"})]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"\u9ED8\u8BA4\u503C\uFF1A"})," ",(0,r.jsx)(s.code,{children:"3"})]}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:"\u5355\u4E2A\u8D44\u6E90\u7684\u6700\u5927\u91CD\u8BD5\u6B21\u6570\u3002\u6BD4\u5982\uFF1A"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-js",children:"export default {\n  output: {\n    assetsRetry: {\n      max: 5,\n    },\n  },\n};\n"})}),"\n",(0,r.jsxs)(s.h3,{id:"assetsretrytest",children:["assetsRetry.test",(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#assetsretrytest",children:"#"})]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"\u7C7B\u578B\uFF1A"})," ",(0,r.jsx)(s.code,{children:"string | ((url: string) => boolean) | undefined"})]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"\u9ED8\u8BA4\u503C\uFF1A"})," ",(0,r.jsx)(s.code,{children:"undefined"})]}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:"\u5339\u914D\u8D44\u6E90 URL \u7684\u6B63\u5219\u8868\u8FBE\u5F0F\u6216\u51FD\u6570\uFF0C\u9ED8\u8BA4\u5339\u914D\u6240\u6709\u8D44\u6E90\u3002\u6BD4\u5982\uFF1A"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-js",children:"export default {\n  output: {\n    assetsRetry: {\n      test: /cdn\\.example\\.com/,\n    },\n  },\n};\n"})}),"\n",(0,r.jsxs)(s.h3,{id:"assetsretrycrossorigin",children:["assetsRetry.crossOrigin",(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#assetsretrycrossorigin",children:"#"})]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"\u7C7B\u578B\uFF1A"})," ",(0,r.jsx)(s.code,{children:"undefined | boolean | 'anonymous' | 'use-credentials'"})]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"\u9ED8\u8BA4\u503C\uFF1A"})," ",(0,r.jsx)(s.code,{children:"\u4E0E html.crossorigin \u4E00\u81F4"})]}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:["\u5728\u53D1\u8D77\u8D44\u6E90\u91CD\u65B0\u8BF7\u6C42\u65F6\uFF0CBuilder \u4F1A\u91CD\u65B0\u521B\u5EFA ",(0,r.jsx)(s.code,{children:"<script>"})," \u6807\u7B7E\uFF0C\u6B64\u9009\u9879\u53EF\u4EE5\u8BBE\u7F6E\u8FD9\u4E9B\u6807\u7B7E\u7684 ",(0,r.jsx)(s.code,{children:"crossorigin"})," \u5C5E\u6027\u3002"]}),"\n",(0,r.jsxs)(s.p,{children:["\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C",(0,r.jsx)(s.code,{children:"assetsRetry.crossOrigin"})," \u7684\u503C\u4F1A\u4E0E ",(0,r.jsx)(s.code,{children:"html.crossorigin"})," \u914D\u7F6E\u9879\u4FDD\u6301\u4E00\u81F4\uFF0C\u65E0\u987B\u989D\u5916\u914D\u7F6E\u3002\u5982\u679C\u4F60\u9700\u8981\u5BF9\u91CD\u65B0\u521B\u5EFA\u7684\u6807\u7B7E\u8FDB\u884C\u5355\u72EC\u914D\u7F6E\uFF0C\u53EF\u4EE5\u4F7F\u7528\u8BE5\u9009\u9879\uFF0C\u6BD4\u5982\uFF1A"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-js",children:"export default {\n  output: {\n    assetsRetry: {\n      crossOrigin: true,\n    },\n  },\n};\n"})}),"\n",(0,r.jsxs)(s.h3,{id:"assetsretryonretry",children:["assetsRetry.onRetry",(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#assetsretryonretry",children:"#"})]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"\u7C7B\u578B\uFF1A"})," ",(0,r.jsx)(s.code,{children:"undefined | (options: AssetsRetryHookContext) => void"})]}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:"\u8D44\u6E90\u91CD\u8BD5\u65F6\u7684\u56DE\u8C03\u51FD\u6570\u3002\u6BD4\u5982\uFF1A"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-js",children:"export default {\n  output: {\n    assetsRetry: {\n      onRetry: ({ times, domain, url, tagName }) => {\n        console.log(\n          `Retry ${times} times, domain: ${domain}, url: ${url}, tagName: ${tagName}`,\n        );\n      },\n    },\n  },\n};\n"})}),"\n",(0,r.jsxs)(s.h3,{id:"assetsretryonsuccess",children:["assetsRetry.onSuccess",(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#assetsretryonsuccess",children:"#"})]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"\u7C7B\u578B\uFF1A"})," ",(0,r.jsx)(s.code,{children:"undefined | (options: AssetsRetryHookContext) => void"})]}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:"\u8D44\u6E90\u91CD\u8BD5\u6210\u529F\u65F6\u7684\u56DE\u8C03\u51FD\u6570\u3002\u6BD4\u5982\uFF1A"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-js",children:"export default {\n  output: {\n    assetsRetry: {\n      onSuccess: ({ times, domain, url, tagName }) => {\n        console.log(\n          `Retry ${times} times, domain: ${domain}, url: ${url}, tagName: ${tagName}`,\n        );\n      },\n    },\n  },\n};\n"})}),"\n",(0,r.jsxs)(s.h3,{id:"assetsretryonfail",children:["assetsRetry.onFail",(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#assetsretryonfail",children:"#"})]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"\u7C7B\u578B\uFF1A"})," ",(0,r.jsx)(s.code,{children:"undefined | (options: AssetsRetryHookContext) => void"})]}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:"\u8D44\u6E90\u91CD\u8BD5\u8D85\u8FC7\u6700\u5927\u91CD\u8BD5\u6B21\u6570\u65F6\u7684\u56DE\u8C03\u51FD\u6570\u3002\u6BD4\u5982\uFF1A"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-js",children:"export default {\n  output: {\n    assetsRetry: {\n      onFail: ({ times, domain, url, tagName }) => {\n        console.log(\n          `Retry ${times} times, domain: ${domain}, url: ${url}, tagName: ${tagName}`,\n        );\n      },\n    },\n  },\n};\n"})}),"\n",(0,r.jsxs)(s.h3,{id:"assetsretryinlinescript",children:["assetsRetry.inlineScript",(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#assetsretryinlinescript",children:"#"})]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"\u7C7B\u578B\uFF1A"})," ",(0,r.jsx)(s.code,{children:"boolean"})]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"\u9ED8\u8BA4\u503C\uFF1A"})," ",(0,r.jsx)(s.code,{children:"true"})]}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:["\u662F\u5426\u5C06 ",(0,r.jsx)(s.code,{children:"assetsRetry"})," \u7684\u8FD0\u884C\u65F6 JavaScript \u4EE3\u7801\u5185\u8054\u5230 HTML \u6587\u4EF6\u4E2D\u3002"]}),"\n",(0,r.jsxs)(s.p,{children:["\u5982\u679C\u4F60\u4E0D\u5E0C\u671B\u5728 HTML \u6587\u4EF6\u4E2D\u63D2\u5165\u76F8\u5173\u4EE3\u7801\uFF0C\u53EF\u4EE5\u5C06 ",(0,r.jsx)(s.code,{children:"assetsRetry.inlineScript"})," \u8BBE\u7F6E\u4E3A ",(0,r.jsx)(s.code,{children:"false"}),"\uFF1A"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-js",children:"export default {\n  output: {\n    assetsRetry: {\n      inlineScript: false,\n    },\n  },\n};\n"})}),"\n",(0,r.jsxs)(s.p,{children:["\u6DFB\u52A0\u4EE5\u4E0A\u914D\u7F6E\u540E\uFF0C",(0,r.jsx)(s.code,{children:"assetsRetry"})," \u7684\u8FD0\u884C\u65F6\u4EE3\u7801\u4F1A\u88AB\u62BD\u53D6\u4E3A\u4E00\u4E2A\u72EC\u7ACB\u7684 ",(0,r.jsx)(s.code,{children:"assets-retry.[version].js"})," \u6587\u4EF6\uFF0C\u5E76\u8F93\u51FA\u5230\u4EA7\u7269\u76EE\u5F55\u4E0B\u3002"]}),"\n",(0,r.jsxs)(s.p,{children:["\u8FD9\u79CD\u65B9\u5F0F\u7684\u5F0A\u7AEF\u5728\u4E8E\uFF0C",(0,r.jsx)(s.code,{children:"assets-retry.[version].js"})," \u81EA\u8EAB\u6709\u52A0\u8F7D\u5931\u8D25\u7684\u53EF\u80FD\u6027\u3002\u5982\u679C\u51FA\u73B0\u8FD9\u79CD\u60C5\u51B5\uFF0C\u9759\u6001\u8D44\u6E90\u91CD\u8BD5\u7684\u903B\u8F91\u5C31\u65E0\u6CD5\u751F\u6548\u3002\u56E0\u6B64\uFF0C\u6211\u4EEC\u66F4\u63A8\u8350\u5C06\u8FD0\u884C\u65F6\u4EE3\u7801\u5185\u8054\u5230 HTML \u6587\u4EF6\u4E2D\u3002"]}),"\n",(0,r.jsxs)(s.h3,{id:"\u6CE8\u610F\u4E8B\u9879",children:["\u6CE8\u610F\u4E8B\u9879",(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#\u6CE8\u610F\u4E8B\u9879",children:"#"})]}),"\n",(0,r.jsxs)(s.p,{children:["\u5F53\u4F60\u4F7F\u7528 ",(0,r.jsx)(s.code,{children:"assetsRetry"})," \u65F6\uFF0CBuilder \u4F1A\u5411 HTML \u4E2D\u6CE8\u5165\u4E00\u6BB5\u8FD0\u884C\u65F6\u4EE3\u7801\uFF0C\u5E76\u5C06 ",(0,r.jsx)(s.code,{children:"assetsRetry"})," \u914D\u7F6E\u7684\u5185\u5BB9\u5E8F\u5217\u5316\uFF0C\u63D2\u5165\u5230\u8FD9\u6BB5\u4EE3\u7801\u4E2D\uFF0C\u56E0\u6B64\u4F60\u9700\u8981\u6CE8\u610F\uFF1A"]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["\u907F\u514D\u5728 ",(0,r.jsx)(s.code,{children:"assetsRetry"})," \u4E2D\u914D\u7F6E\u654F\u611F\u4FE1\u606F\uFF0C\u6BD4\u5982\u5185\u90E8\u4F7F\u7528\u7684 token\u3002"]}),"\n",(0,r.jsxs)(s.li,{children:["\u907F\u514D\u5728 ",(0,r.jsx)(s.code,{children:"onRetry"}),"\uFF0C",(0,r.jsx)(s.code,{children:"onSuccess"}),"\uFF0C",(0,r.jsx)(s.code,{children:"onFail"})," \u4E2D\u5F15\u7528\u51FD\u6570\u5916\u90E8\u7684\u53D8\u91CF\u6216\u65B9\u6CD5\u3002"]}),"\n",(0,r.jsxs)(s.li,{children:["\u907F\u514D\u5728 ",(0,r.jsx)(s.code,{children:"onRetry"}),"\uFF0C",(0,r.jsx)(s.code,{children:"onSuccess"}),"\uFF0C",(0,r.jsx)(s.code,{children:"onFail"})," \u4E2D\u4F7F\u7528\u6709\u517C\u5BB9\u6027\u95EE\u9898\u7684\u8BED\u6CD5\uFF0C\u56E0\u4E3A\u8FD9\u4E9B\u51FD\u6570\u4F1A\u88AB\u76F4\u63A5\u5185\u8054\u5230 HTML \u4E2D\u3002"]}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:"\u4EE5\u4E0B\u662F\u4E00\u4E2A\u9519\u8BEF\u793A\u4F8B\uFF1A"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-js",children:"import { someMethod } from 'utils';\n\nexport default {\n  output: {\n    assetsRetry: {\n      onRetry() {\n        // \u9519\u8BEF\u7528\u6CD5\uFF0C\u5305\u542B\u4E86\u654F\u611F\u4FE1\u606F\n        const privateToken = 'a-private-token';\n\n        // \u9519\u8BEF\u7528\u6CD5\uFF0C\u4F7F\u7528\u4E86\u5916\u90E8\u7684\u65B9\u6CD5\n        someMethod(privateToken);\n      },\n    },\n  },\n};\n"})}),"\n",(0,r.jsxs)(s.h3,{id:"\u4F7F\u7528\u9650\u5236",children:["\u4F7F\u7528\u9650\u5236",(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#\u4F7F\u7528\u9650\u5236",children:"#"})]}),"\n",(0,r.jsxs)(s.p,{children:["\u4EE5\u4E0B\u573A\u666F ",(0,r.jsx)(s.code,{children:"assetsRetry"})," \u53EF\u80FD\u65E0\u6CD5\u751F\u6548\uFF1A"]}),"\n",(0,r.jsxs)(s.h4,{id:"\u5FAE\u524D\u7AEF\u5E94\u7528",children:["\u5FAE\u524D\u7AEF\u5E94\u7528",(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#\u5FAE\u524D\u7AEF\u5E94\u7528",children:"#"})]}),"\n",(0,r.jsxs)(s.p,{children:["\u5982\u679C\u4F60\u7684\u5DE5\u7A0B\u662F\u5FAE\u524D\u7AEF\u5E94\u7528\uFF08\u6BD4\u5982 Garfish \u5B50\u5E94\u7528\uFF09\uFF0C\u90A3\u4E48 ",(0,r.jsx)(s.code,{children:"assetsRetry"})," \u53EF\u80FD\u65E0\u6CD5\u751F\u6548\uFF0C\u56E0\u4E3A\u5FAE\u524D\u7AEF\u5B50\u5E94\u7528\u901A\u5E38\u4E0D\u662F\u57FA\u4E8E ",(0,r.jsx)(s.code,{children:"<script>"})," \u6807\u7B7E\u76F4\u63A5\u52A0\u8F7D\u7684\u3002"]}),"\n",(0,r.jsx)(s.p,{children:"\u5982\u679C\u4F60\u9700\u8981\u5BF9\u5FAE\u524D\u7AEF\u573A\u666F\u7684\u8D44\u6E90\u52A0\u8F7D\u8FDB\u884C\u91CD\u8BD5\uFF0C\u8BF7\u8054\u7CFB\u5FAE\u524D\u7AEF\u6846\u67B6\u7684\u5F00\u53D1\u8005\uFF0C\u4EE5\u5BFB\u627E\u76F8\u5E94\u7684\u89E3\u51B3\u65B9\u6848\u3002"}),"\n",(0,r.jsxs)(s.h4,{id:"\u52A8\u6001-import-\u8D44\u6E90",children:["\u52A8\u6001 import \u8D44\u6E90",(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#\u52A8\u6001-import-\u8D44\u6E90",children:"#"})]}),"\n",(0,r.jsxs)(s.p,{children:["\u76EE\u524D ",(0,r.jsx)(s.code,{children:"assetsRetry"})," \u65E0\u6CD5\u5BF9\u52A8\u6001 import \u8D44\u6E90\u751F\u6548\uFF0C\u8BE5\u529F\u80FD\u6B63\u5728\u652F\u6301\u4E2D\u3002"]}),"\n",(0,r.jsxs)(s.h4,{id:"\u81EA\u5B9A\u4E49\u6A21\u7248\u4E2D\u7684\u8D44\u6E90",children:["\u81EA\u5B9A\u4E49\u6A21\u7248\u4E2D\u7684\u8D44\u6E90",(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#\u81EA\u5B9A\u4E49\u6A21\u7248\u4E2D\u7684\u8D44\u6E90",children:"#"})]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"assetsRetry"})," \u901A\u8FC7\u76D1\u542C\u9875\u9762 error \u4E8B\u4EF6\u6765\u83B7\u6089\u5F53\u524D\u8D44\u6E90\u662F\u5426\u52A0\u8F7D\u5931\u8D25\u9700\u8981\u91CD\u8BD5\u3002\u56E0\u6B64\uFF0C\u5982\u679C\u81EA\u5B9A\u4E49\u6A21\u7248\u4E2D\u7684\u8D44\u6E90\u6267\u884C\u65E9\u4E8E ",(0,r.jsx)(s.code,{children:"assetsRetry"}),"\uFF0C\u90A3 ",(0,r.jsx)(s.code,{children:"assetsRetry"})," \u65E0\u6CD5\u76D1\u542C\u5230\u8BE5\u8D44\u6E90\u52A0\u8F7D\u5931\u8D25\u7684\u4E8B\u4EF6\uFF0C\u6545\u65E0\u6CD5 retry\u3002"]}),"\n",(0,r.jsxs)(s.p,{children:["\u5982\u679C\u60F3\u8981 ",(0,r.jsx)(s.code,{children:"assetsRetry"})," \u5BF9\u81EA\u5B9A\u4E49\u6A21\u7248\u4E2D\u7684\u8D44\u6E90\u751F\u6548\uFF0C\u53EF\u53C2\u8003 ",(0,r.jsx)(s.a,{href:"https://github.com/jantimon/html-webpack-plugin/tree/main/examples/custom-insertion-position",target:"_blank",rel:"noopener noreferrer",children:"\u81EA\u5B9A\u4E49\u63D2\u5165\u793A\u4F8B"})," \u6765\u4FEE\u6539 ",(0,r.jsx)(s.a,{href:"https://modernjs.dev/builder/api/config-html.html#htmlinject",target:"_blank",rel:"noopener noreferrer",children:"html.inject"})," \u914D\u7F6E\u548C\u81EA\u5B9A\u4E49\u6A21\u7248\u3002"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-diff",children:'<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset="utf-8">\n    <title>custom template</title>\n+   <%= htmlWebpackPlugin.tags.headTags %>\n    <script src="//example.com/assets/a.js"></script>\n  </head>\n  <body>\n    <div id="root" />\n+    <%= htmlWebpackPlugin.tags.bodyTags %>\n  </body>\n</html>\n'})})]})}function d(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:s}=Object.assign({},(0,t.useMDXComponents)(),e.components);return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}var c=d;d.__RSPRESS_PAGE_META={},d.__RSPRESS_PAGE_META["..%2F..%2Fbuilder-doc%2Fdocs%2Fzh%2Fconfig%2Foutput%2FassetsRetry.md"]={toc:[{text:"assetsRetry.domain",id:"assetsretrydomain",depth:3},{text:"assetsRetry.type",id:"assetsretrytype",depth:3},{text:"assetsRetry.max",id:"assetsretrymax",depth:3},{text:"assetsRetry.test",id:"assetsretrytest",depth:3},{text:"assetsRetry.crossOrigin",id:"assetsretrycrossorigin",depth:3},{text:"assetsRetry.onRetry",id:"assetsretryonretry",depth:3},{text:"assetsRetry.onSuccess",id:"assetsretryonsuccess",depth:3},{text:"assetsRetry.onFail",id:"assetsretryonfail",depth:3},{text:"assetsRetry.inlineScript",id:"assetsretryinlinescript",depth:3},{text:"\u6CE8\u610F\u4E8B\u9879",id:"\u6CE8\u610F\u4E8B\u9879",depth:3},{text:"\u4F7F\u7528\u9650\u5236",id:"\u4F7F\u7528\u9650\u5236",depth:3},{text:"\u5FAE\u524D\u7AEF\u5E94\u7528",id:"\u5FAE\u524D\u7AEF\u5E94\u7528",depth:4},{text:"\u52A8\u6001 import \u8D44\u6E90",id:"\u52A8\u6001-import-\u8D44\u6E90",depth:4},{text:"\u81EA\u5B9A\u4E49\u6A21\u7248\u4E2D\u7684\u8D44\u6E90",id:"\u81EA\u5B9A\u4E49\u6A21\u7248\u4E2D\u7684\u8D44\u6E90",depth:4}],title:"",frontmatter:{}}},28098:function(e,s,n){"use strict";n.r(s),n.d(s,{default:function(){return a}});var r=n("9880"),t=n("23169"),i=n("16388");function d(e){let s=Object.assign({h1:"h1",a:"a"},(0,t.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.h1,{id:"outputassetsretry",children:["output.assetsRetry",(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#outputassetsretry",children:"#"})]}),"\n","\n",(0,r.jsx)(i.default,{})]})}function c(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:s}=Object.assign({},(0,t.useMDXComponents)(),e.components);return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}var a=c;c.__RSPRESS_PAGE_META={},c.__RSPRESS_PAGE_META["zh%2Fconfigure%2Fapp%2Foutput%2Fassets-retry.mdx"]={toc:[],title:"output.assetsRetry",frontmatter:{sidebar_label:"assetsRetry"}}}}]);