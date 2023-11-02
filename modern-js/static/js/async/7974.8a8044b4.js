(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["7974"],{50014:function(e,n,c){"use strict";c.r(n),c.d(n,{default:function(){return a}});var s=c("9880"),r=c("23169");function d(e){let n=Object.assign({ul:"ul",li:"li",strong:"strong",pre:"pre",code:"code",p:"p",h3:"h3",a:"a",h4:"h4"},(0,r.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"\u7C7B\u578B\uFF1A"})}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"type BuildCacheConfig =\n  | {\n      /**\n       * webpack \u6587\u4EF6\u7F13\u5B58\u7CFB\u7EDF\u7684\u7F13\u5B58\u76EE\u5F55\n       */\n      cacheDirectory?: string;\n      /**\n       * \u6839\u636E cacheDigest \u5185\u5BB9\u8BBE\u7F6E\u4E0D\u540C\u7684\u7F13\u5B58\u540D\u79F0\n       */\n      cacheDigest?: Array<string | undefined>;\n    }\n  | boolean;\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"\u9ED8\u8BA4\u503C\uFF1A"})}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"const defaultBuildCacheConfig = {\n  cacheDirectory: './node_modules/.cache/webpack',\n};\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"\u6253\u5305\u5DE5\u5177\uFF1A"})," ",(0,s.jsx)(n.code,{children:"\u4EC5\u652F\u6301 webpack"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\u63A7\u5236 Builder \u5728\u6784\u5EFA\u8FC7\u7A0B\u4E2D\u7684\u7F13\u5B58\u884C\u4E3A\u3002"}),"\n",(0,s.jsxs)(n.p,{children:["Builder \u9ED8\u8BA4\u4F1A\u5F00\u542F\u6784\u5EFA\u7F13\u5B58\u6765\u63D0\u5347\u4E8C\u6B21\u6784\u5EFA\u7684\u901F\u5EA6\uFF0C\u5E76\u9ED8\u8BA4\u628A\u751F\u6210\u7684\u7F13\u5B58\u6587\u4EF6\u5199\u5230 ",(0,s.jsx)(n.code,{children:"./node_modules/.cache/webpack"})," \u76EE\u5F55\u4E0B\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u4F60\u53EF\u4EE5\u901A\u8FC7 ",(0,s.jsx)(n.code,{children:"buildCache"})," \u914D\u7F6E\u7F13\u5B58\u8DEF\u5F84\uFF0C\u6BD4\u5982\uFF1A"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"export default {\n  performance: {\n    buildCache: {\n      cacheDirectory: './node_modules/.custom_cache/webpack',\n    },\n  },\n};\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u5982\u679C\u4E0D\u5E0C\u671B\u7F13\u5B58\uFF0C\u4F60\u4E5F\u53EF\u4EE5\u5C06 ",(0,s.jsx)(n.code,{children:"buildCache"})," \u7F6E\u4E3A ",(0,s.jsx)(n.code,{children:"false"})," \u5C06\u5176\u7981\u7528\u6389\uFF1A"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"export default {\n  performance: {\n    buildCache: false,\n  },\n};\n"})}),"\n",(0,s.jsxs)(n.h3,{id:"cachedigest",children:["cacheDigest",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#cachedigest",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"cacheDigest"})," \u7528\u6765\u6DFB\u52A0\u4E00\u4E9B\u4F1A\u5BF9\u6784\u5EFA\u7ED3\u679C\u4EA7\u751F\u5F71\u54CD\u7684\u73AF\u5883\u53D8\u91CF\u3002Builder \u5C06\u6839\u636E ",(0,s.jsx)(n.code,{children:"cacheDigest"})," \u5185\u5BB9\u548C\u5F53\u524D\u6784\u5EFA\u6A21\u5F0F\u6765\u8BBE\u7F6E\u7F13\u5B58\u540D\u79F0\uFF0C\u6765\u786E\u4FDD\u4E0D\u540C\u7684 ",(0,s.jsx)(n.code,{children:"cacheDigest"})," \u53EF\u4EE5\u547D\u4E2D\u4E0D\u540C\u7684\u7F13\u5B58\u3002"]}),"\n",(0,s.jsxs)(n.h4,{id:"\u793A\u4F8B",children:["\u793A\u4F8B",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u793A\u4F8B",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["\u5F53\u524D\u9879\u76EE\u9700\u8981\u6839\u636E\u4E0D\u540C\u7684 ",(0,s.jsx)(n.code,{children:"APP_ID"})," \u6765\u8BBE\u7F6E\u4E0D\u540C\u7684 extensions\u3002\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u7531\u4E8E\u5F53\u524D\u9879\u76EE\u7684\u4EE3\u7801 & \u914D\u7F6E & \u4F9D\u8D56\u672A\u53D1\u751F\u53D8\u5316\uFF0C\u4F1A\u547D\u4E2D\u4E4B\u524D\u7684\u7F13\u5B58\u3002\n\u901A\u8FC7\u5C06 ",(0,s.jsx)(n.code,{children:"APP_ID"})," \u6DFB\u52A0\u5230 ",(0,s.jsx)(n.code,{children:"cacheDigest"})," \u4E2D\uFF0C\u5728 ",(0,s.jsx)(n.code,{children:"APP_ID"})," \u53D8\u5316\u65F6\u4F1A\u53BB\u67E5\u627E\u4E0D\u540C\u7684\u7F13\u5B58\u7ED3\u679C\uFF0C\u4ECE\u800C\u907F\u514D\u547D\u4E2D\u4E0D\u7B26\u5408\u9884\u671F\u7684\u7F13\u5B58\u7ED3\u679C\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    bundlerChain: chain => {\n      if (process.env.APP_ID === 'xxx') {\n        chain.resolve.extensions.prepend('.ttp.ts');\n      }\n    },\n  },\n  performance: {\n    buildCache: {\n      cacheDigest: [process.env.APP_ID],\n    },\n  },\n};\n"})})]})}function i(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,r.useMDXComponents)(),e.components);return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}var a=i;i.__RSPRESS_PAGE_META={},i.__RSPRESS_PAGE_META["..%2F..%2Fbuilder-doc%2Fdocs%2Fzh%2Fconfig%2Fperformance%2FbuildCache.md"]={toc:[{text:"cacheDigest",id:"cachedigest",depth:3},{text:"\u793A\u4F8B",id:"\u793A\u4F8B",depth:4}],title:""}},88443:function(e,n,c){"use strict";c.r(n),c.d(n,{default:function(){return l},frontmatter:function(){return h}});var s=c("9880"),r=c("23169"),d=c("50014");function i(e){let n=Object.assign({h1:"h1",a:"a"},(0,r.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h1,{id:"performancebuildcache",children:["performance.buildCache",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#performancebuildcache",children:"#"})]}),"\n","\n",(0,s.jsx)(d.default,{})]})}function a(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,r.useMDXComponents)(),e.components);return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(i,{...e})}):i(e)}var l=a;a.__RSPRESS_PAGE_META={},a.__RSPRESS_PAGE_META["zh%2Fconfigure%2Fapp%2Fperformance%2Fbuild-cache.mdx"]={toc:[],title:"performance.buildCache"};let h={sidebar_label:"buildCache"}}}]);