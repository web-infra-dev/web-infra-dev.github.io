/*! For license information please see 56197.b35af7d2.js.LICENSE.txt */
(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["56197"],{21499:function(e,n,i){"use strict";i.r(n),i.d(n,{default:function(){return d}});var s=i("9880"),c=i("23169");function r(e){let n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",pre:"pre",h3:"h3",a:"a",div:"div",blockquote:"blockquote"},(0,c.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"\u7C7B\u578B\uFF1A"})," ",(0,s.jsx)(n.code,{children:"Object"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"\u9ED8\u8BA4\u503C\uFF1A"})," ",(0,s.jsx)(n.code,{children:"{ strategy: 'split-by-experience' }"})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"performance.chunkSplit"})," \u7528\u4E8E\u914D\u7F6E Builder \u7684\u62C6\u5305\u7B56\u7565\u3002\u914D\u7F6E\u9879\u7684\u7C7B\u578B ",(0,s.jsx)(n.code,{children:"ChunkSplit"})," \u5982\u4E0B:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"type ForceSplitting = RegExp[] | Record<string, RegExp>;\n\ninterface BaseChunkSplit {\n  strategy?:\n    | 'split-by-module'\n    | 'split-by-experience'\n    | 'all-in-one'\n    | 'single-vendor';\n  override?: SplitChunks;\n  forceSplitting?: ForceSplitting;\n}\n\ninterface SplitBySize {\n  strategy?: 'split-by-size';\n  minSize?: number;\n  maxSize?: number;\n  override?: SplitChunks;\n  forceSplitting?: ForceSplitting;\n}\n\ninterface SplitCustom {\n  strategy?: 'custom';\n  splitChunks?: SplitChunks;\n  forceSplitting?: ForceSplitting;\n}\n\nexport type ChunkSplit = BaseChunkSplit | SplitBySize | SplitCustom;\n"})}),"\n",(0,s.jsxs)(n.h3,{id:"chunksplitstrategy",children:["chunkSplit.strategy",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#chunksplitstrategy",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"Builder \u652F\u6301\u8BBE\u7F6E\u4EE5\u4E0B\u51E0\u79CD\u62C6\u5305\u7B56\u7565\uFF1A"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"split-by-experience"}),": \u6839\u636E\u7ECF\u9A8C\u5236\u5B9A\u7684\u62C6\u5206\u7B56\u7565\uFF0C\u81EA\u52A8\u5C06\u4E00\u4E9B\u5E38\u7528\u7684 npm \u5305\u62C6\u5206\u4E3A\u4F53\u79EF\u9002\u4E2D\u7684 chunk\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"split-by-module"}),": \u6309 NPM \u5305\u7684\u7C92\u5EA6\u62C6\u5206\uFF0C\u6BCF\u4E2A NPM \u5305\u5BF9\u5E94\u4E00\u4E2A chunk\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"split-by-size"}),"\uFF1A\u6839\u636E\u6A21\u5757\u5927\u5C0F\u81EA\u52A8\u8FDB\u884C\u62C6\u5206\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"all-in-one"}),": \u5C06\u6240\u6709\u4EE3\u7801\u5168\u90E8\u6253\u5305\u5230\u4E00\u4E2A chunk \u4E2D\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"single-vendor"}),": \u5C06\u6240\u6709 NPM \u5305\u7684\u4EE3\u7801\u6253\u5305\u5230\u4E00\u4E2A\u5355\u72EC\u7684 chunk \u4E2D\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"custom"}),": \u81EA\u5B9A\u4E49\u62C6\u5305\u914D\u7F6E\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(n.h3,{id:"\u9ED8\u8BA4\u62C6\u5305\u7B56\u7565",children:["\u9ED8\u8BA4\u62C6\u5305\u7B56\u7565",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u9ED8\u8BA4\u62C6\u5305\u7B56\u7565",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["Builder \u9ED8\u8BA4\u91C7\u7528 ",(0,s.jsx)(n.code,{children:"split-by-experience"})," \u7B56\u7565\uFF0C\u8FD9\u662F\u6211\u4EEC\u6839\u636E\u7ECF\u9A8C\u5236\u5B9A\u7684\u7B56\u7565\u3002\u5177\u4F53\u6765\u8BF4\uFF0C\u5F53\u4F60\u7684\u9879\u76EE\u4E2D\u5F15\u7528\u4E86\u4EE5\u4E0B npm \u5305\u65F6\uFF0C\u5B83\u4EEC\u4F1A\u81EA\u52A8\u88AB\u62C6\u5206\u4E3A\u5355\u72EC\u7684 chunk\uFF1A"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"lib-polyfill.js"}),"\uFF1A\u5305\u542B ",(0,s.jsx)(n.code,{children:"core-js"}),"\uFF0C",(0,s.jsx)(n.code,{children:"@babel/runtime"}),"\uFF0C",(0,s.jsx)(n.code,{children:"@swc/helpers"}),"\uFF0C",(0,s.jsx)(n.code,{children:"tslib"}),"\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"lib-react.js"}),"\uFF1A\u5305\u542B ",(0,s.jsx)(n.code,{children:"react"}),"\uFF0C",(0,s.jsx)(n.code,{children:"react-dom"}),"\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"lib-router.js"}),"\uFF1A\u5305\u542B ",(0,s.jsx)(n.code,{children:"react-router"}),"\uFF0C",(0,s.jsx)(n.code,{children:"react-router-dom"}),"\uFF0C",(0,s.jsx)(n.code,{children:"history"}),"\uFF0C",(0,s.jsx)(n.code,{children:"@remix-run/router"}),"\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"lib-lodash.js"}),"\uFF1A\u5305\u542B ",(0,s.jsx)(n.code,{children:"lodash"}),"\uFF0C",(0,s.jsx)(n.code,{children:"lodash-es"}),"\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"lib-antd.js"}),"\uFF1A\u5305\u542B ",(0,s.jsx)(n.code,{children:"antd"}),"\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"lib-arco.js"}),"\uFF1A\u5305\u542B ",(0,s.jsx)(n.code,{children:"@arco-design/web-react"}),"\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"lib-semi.js"}),"\uFF1A\u5305\u542B ",(0,s.jsx)(n.code,{children:"@douyinfe/semi-ui"}),"\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(n.div,{className:"rspress-directive tip",children:[(0,s.jsx)(n.div,{className:"rspress-directive-title",children:"TIP"}),(0,s.jsx)(n.div,{className:"rspress-directive-content",children:(0,s.jsx)(n.p,{children:"\u5982\u679C\u9879\u76EE\u4E2D\u6CA1\u6709\u5B89\u88C5\u6216\u5F15\u7528\u4EE5\u4E0A npm \u5305\uFF0C\u5219\u4E0D\u4F1A\u751F\u6210\u76F8\u5E94\u7684 chunk\u3002"})})]}),"\n",(0,s.jsxs)(n.p,{children:["\u5982\u679C\u4F60\u60F3\u4F7F\u7528\u5176\u4ED6\u62C6\u5305\u7B56\u7565\uFF0C\u53EF\u4EE5\u901A\u8FC7 ",(0,s.jsx)(n.code,{children:"performance.chunkSplit.strategy"})," \u914D\u7F6E\u9879\u6765\u6307\u5B9A\u3002"]}),"\n",(0,s.jsxs)(n.h3,{id:"chunksplitminsize",children:["chunkSplit.minSize",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#chunksplitminsize",children:"#"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"\u7C7B\u578B\uFF1A"})," ",(0,s.jsx)(n.code,{children:"number"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"\u9ED8\u8BA4\u503C\uFF1A"})," ",(0,s.jsx)(n.code,{children:"10000"})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["\u5F53 ",(0,s.jsx)(n.code,{children:"performance.chunkSplit.strategy"})," \u4E3A ",(0,s.jsx)(n.code,{children:"split-by-size"})," \u65F6\uFF0C\u53EF\u4EE5\u901A\u8FC7 ",(0,s.jsx)(n.code,{children:"performance.chunkSplit.minSize"})," \u914D\u7F6E\u9879\u6765\u6307\u5B9A chunk \u7684\u6700\u5C0F\u5927\u5C0F\uFF0C\u5355\u4F4D\u4E3A\u5B57\u8282\u3002\u9ED8\u8BA4\u503C\u4E3A 10000\u3002\u6BD4\u5982:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"export default {\n  performance: {\n    chunkSplit: {\n      strategy: 'split-by-size',\n      minSize: 20000,\n    },\n  },\n};\n"})}),"\n",(0,s.jsxs)(n.h3,{id:"chunksplitmaxsize",children:["chunkSplit.maxSize",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#chunksplitmaxsize",children:"#"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"\u7C7B\u578B\uFF1A"})," ",(0,s.jsx)(n.code,{children:"number"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"\u9ED8\u8BA4\u503C\uFF1A"})," ",(0,s.jsx)(n.code,{children:"Infinity"})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["\u5F53 ",(0,s.jsx)(n.code,{children:"performance.chunkSplit.strategy"})," \u4E3A ",(0,s.jsx)(n.code,{children:"split-by-size"})," \u65F6\uFF0C\u53EF\u4EE5\u901A\u8FC7 ",(0,s.jsx)(n.code,{children:"performance.chunkSplit.maxSize"})," \u914D\u7F6E\u9879\u6765\u6307\u5B9A chunk \u7684\u6700\u5927\u5927\u5C0F\uFF0C\u5355\u4F4D\u4E3A\u5B57\u8282\u3002\u9ED8\u8BA4\u503C\u4E3A ",(0,s.jsx)(n.code,{children:"Infinity"}),"\u3002\u6BD4\u5982:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"export default {\n  performance: {\n    chunkSplit: {\n      strategy: 'split-by-size',\n      maxSize: 50000,\n    },\n  },\n};\n"})}),"\n",(0,s.jsxs)(n.h3,{id:"chunksplitforcesplitting",children:["chunkSplit.forceSplitting",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#chunksplitforcesplitting",children:"#"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"\u7C7B\u578B\uFF1A"})," ",(0,s.jsx)(n.code,{children:"RegExp[] | Record<string, RegExp>"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"\u9ED8\u8BA4\u503C\uFF1A"})," ",(0,s.jsx)(n.code,{children:"[]"})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["\u901A\u8FC7 ",(0,s.jsx)(n.code,{children:"performance.chunkSplit.forceSplitting"})," \u914D\u7F6E\u9879\u53EF\u4EE5\u5C06\u6307\u5B9A\u7684\u6A21\u5757\u5F3A\u5236\u62C6\u5206\u4E3A\u4E00\u4E2A\u72EC\u7ACB\u7684 chunk\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u6BD4\u5982\u5C06 node_modules \u4E0B\u7684 ",(0,s.jsx)(n.code,{children:"axios"})," \u5E93\u62C6\u5206\u5230 ",(0,s.jsx)(n.code,{children:"axios.js"})," \u4E2D\uFF1A"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"export default {\n  performance: {\n    chunkSplit: {\n      strategy: 'split-by-experience',\n      forceSplitting: {\n        axios: /node_modules\\/axios/,\n      },\n    },\n  },\n};\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u76F8\u6BD4\u76F4\u63A5\u914D\u7F6E webpack \u7684 splitChunks\uFF0C\u8FD9\u662F\u4E00\u4E2A\u66F4\u52A0\u7B80\u4FBF\u7684\u65B9\u5F0F\u3002"}),"\n",(0,s.jsxs)(n.div,{className:"rspress-directive tip",children:[(0,s.jsx)(n.div,{className:"rspress-directive-title",children:"TIP"}),(0,s.jsx)(n.div,{className:"rspress-directive-content",children:(0,s.jsxs)(n.p,{children:["\u6CE8\u610F\uFF0C\u901A\u8FC7 ",(0,s.jsx)(n.code,{children:"forceSplitting"})," \u914D\u7F6E\u62C6\u5206\u7684 chunk \u4F1A\u901A\u8FC7 ",(0,s.jsx)(n.code,{children:"<script>"})," \u6807\u7B7E\u63D2\u5165\u5230 HTML \u6587\u4EF6\u4E2D\uFF0C\u4F5C\u4E3A\u9996\u5C4F\u8BF7\u6C42\u7684\u8D44\u6E90\u3002\u56E0\u6B64\uFF0C\u8BF7\u6839\u636E\u5B9E\u9645\u573A\u666F\u6765\u8FDB\u884C\u9002\u5F53\u5730\u62C6\u5206\uFF0C\u907F\u514D\u9996\u5C4F\u8D44\u6E90\u4F53\u79EF\u8FC7\u5927\u3002\n"]})})]}),"\n",(0,s.jsxs)(n.h3,{id:"chunksplitsplitchunks",children:["chunkSplit.splitChunks",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#chunksplitsplitchunks",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["\u5F53 ",(0,s.jsx)(n.code,{children:"performance.chunkSplit.strategy"})," \u4E3A ",(0,s.jsx)(n.code,{children:"custom"})," \u65F6\uFF0C\u53EF\u4EE5\u901A\u8FC7 ",(0,s.jsx)(n.code,{children:"performance.chunkSplit.splitChunks"})," \u914D\u7F6E\u9879\u6765\u6307\u5B9A\u81EA\u5B9A\u4E49\u7684 webpack \u62C6\u5305\u914D\u7F6E\u3002\u6B64\u914D\u7F6E\u4F1A\u548C webpack \u7684 splitChunks \u914D\u7F6E\u8FDB\u884C\u5408\u5E76\uFF08cacheGroups \u914D\u7F6E\u4E5F\u4F1A\u5408\u5E76\uFF09\u3002\u6BD4\u5982:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"export default {\n  performance: {\n    chunkSplit: {\n      strategy: 'custom',\n      splitChunks: {\n        cacheGroups: {\n          react: {\n            test: /[\\\\/]node_modules[\\\\/](react|react-dom)[\\\\/]/,\n            name: 'react',\n            chunks: 'all',\n          },\n        },\n      },\n    },\n  },\n};\n"})}),"\n",(0,s.jsxs)(n.h3,{id:"chunksplitoverride",children:["chunkSplit.override",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#chunksplitoverride",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["\u5F53 ",(0,s.jsx)(n.code,{children:"performance.chunkSplit.strategy"})," \u4E3A ",(0,s.jsx)(n.code,{children:"split-by-experience"}),"\u3001",(0,s.jsx)(n.code,{children:"split-by-module"}),"\u3001",(0,s.jsx)(n.code,{children:"split-by-size"})," \u6216 ",(0,s.jsx)(n.code,{children:"single-vendor"})," \u65F6\uFF0C\u53EF\u4EE5\u901A\u8FC7 ",(0,s.jsx)(n.code,{children:"performance.chunkSplit.override"})," \u914D\u7F6E\u9879\u6765\u81EA\u5B9A\u4E49 webpack \u62C6\u5305\u914D\u7F6E\uFF0C\u6B64\u914D\u7F6E\u4F1A\u548C webpack \u7684 splitChunks \u914D\u7F6E\u8FDB\u884C\u5408\u5E76\uFF08cacheGroups \u914D\u7F6E\u4E5F\u4F1A\u5408\u5E76\uFF09\u3002\u6BD4\u5982:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"export default {\n  performance: {\n    chunkSplit: {\n      strategy: 'split-by-experience',\n      override: {\n        cacheGroups: {\n          react: {\n            test: /[\\\\/]node_modules[\\\\/](react|react-dom)[\\\\/]/,\n            name: 'react',\n            chunks: 'all',\n          },\n        },\n      },\n    },\n  },\n};\n"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:'\u5F53 Builder \u6784\u5EFA "node" \u7C7B\u578B\u7684\u4EA7\u7269\u65F6\uFF0C\u7531\u4E8E Node Bundles \u4E0D\u9700\u8981\u901A\u8FC7\u62C6\u5305\u6765\u4F18\u5316\u52A0\u8F7D\u6027\u80FD\uFF0C\u56E0\u6B64 chunkSplit \u89C4\u5219\u4E0D\u4F1A\u751F\u6548\u3002'}),"\n"]})]})}function l(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,c.useMDXComponents)(),e.components);return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(r,{...e})}):r(e)}var d=l;l.__RSPRESS_PAGE_META={},l.__RSPRESS_PAGE_META["..%2F..%2Fbuilder-doc%2Fdocs%2Fzh%2Fconfig%2Fperformance%2FchunkSplit.md"]={toc:[{text:"chunkSplit.strategy",id:"chunksplitstrategy",depth:3},{text:"\u9ED8\u8BA4\u62C6\u5305\u7B56\u7565",id:"\u9ED8\u8BA4\u62C6\u5305\u7B56\u7565",depth:3},{text:"chunkSplit.minSize",id:"chunksplitminsize",depth:3},{text:"chunkSplit.maxSize",id:"chunksplitmaxsize",depth:3},{text:"chunkSplit.forceSplitting",id:"chunksplitforcesplitting",depth:3},{text:"chunkSplit.splitChunks",id:"chunksplitsplitchunks",depth:3},{text:"chunkSplit.override",id:"chunksplitoverride",depth:3}],title:"",frontmatter:{}}},8759:function(e,n,i){"use strict";i.r(n),i.d(n,{default:function(){return t}});var s=i("9880"),c=i("23169"),r=i("21499");function l(e){let n=Object.assign({h1:"h1",a:"a"},(0,c.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h1,{id:"performancechunksplit",children:["performance.chunkSplit",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#performancechunksplit",children:"#"})]}),"\n","\n",(0,s.jsx)(r.default,{})]})}function d(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,c.useMDXComponents)(),e.components);return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}var t=d;d.__RSPRESS_PAGE_META={},d.__RSPRESS_PAGE_META["zh%2Fconfigure%2Fapp%2Fperformance%2Fchunk-split.mdx"]={toc:[],title:"performance.chunkSplit",frontmatter:{sidebar_label:"chunkSplit"}}}}]);