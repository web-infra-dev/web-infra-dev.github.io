(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["25376"],{57250:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return c}});var s=r("9880"),t=r("23169");function i(e){let n=Object.assign({p:"p",code:"code",pre:"pre"},(0,t.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["\u8FD9\u91CC\u8FD8\u53EF\u4EE5\u8FDB\u884C\u8DEF\u5F84\u91CD\u5199\uFF0C\u5982\u5C06\u53D1\u9001\u5230 ",(0,s.jsx)(n.code,{children:"localhost:8080/api/topics"})," \u7684\u8BF7\u6C42\u4EE3\u7406\u5230 ",(0,s.jsx)(n.code,{children:"https://cnodejs.org/api/v1/topics"}),"\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",meta:'title="modern.server-runtime.config.ts"',children:"import { defineConfig } from '@modern-js/app-tools/server';\nexport default defineConfig({\n  bff: {\n    proxy: {\n      '/api': {\n        target: 'https://cnodejs.org',\n        pathRewrite: { '/api/topics': '/api/v1/topics' },\n        changeOrigin: true,\n      },\n    },\n  },\n});\n"})})]})}function o(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,t.useMDXComponents)(),e.components);return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(i,{...e})}):i(e)}var c=o;o.__RSPRESS_PAGE_META={},o.__RSPRESS_PAGE_META["zh%2Fcomponents%2Fbff-proxy-path-rewrite.mdx"]={toc:[],title:"",frontmatter:{}}},91230:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return c}});var s=r("9880"),t=r("23169");function i(e){let n=Object.assign({p:"p",a:"a"},(0,t.useMDXComponents)(),e.components);return(0,s.jsxs)(n.p,{children:["BFF Proxy \u4F7F\u7528\u4E86\u5F3A\u5927\u7684 ",(0,s.jsx)(n.a,{href:"https://github.com/chimurai/http-proxy-middleware",target:"_blank",rel:"noopener noreferrer",children:"http-proxy-middleware"}),"\uFF0C\u5982\u679C\u9700\u8981\u66F4\u591A\u9AD8\u7EA7\u7684\u7528\u6CD5\uFF0C \u53EF\u4EE5\u67E5\u770B\u5B83\u7684",(0,s.jsx)(n.a,{href:"https://github.com/chimurai/http-proxy-middleware#options",target:"_blank",rel:"noopener noreferrer",children:"\u6587\u6863"}),"\u3002"]})}function o(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,t.useMDXComponents)(),e.components);return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(i,{...e})}):i(e)}var c=o;o.__RSPRESS_PAGE_META={},o.__RSPRESS_PAGE_META["zh%2Fcomponents%2Fbff-proxy-principle.mdx"]={toc:[],title:"",frontmatter:{}}},58065:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return c}});var s=r("9880"),t=r("23169");function i(e){let n=Object.assign({div:"div",p:"p",a:"a"},(0,t.useMDXComponents)(),e.components);return(0,s.jsxs)(n.div,{className:"rspress-directive tip",children:[(0,s.jsx)(n.div,{className:"rspress-directive-title",children:"TIP"}),(0,s.jsxs)(n.div,{className:"rspress-directive-content",children:[(0,s.jsxs)(n.p,{children:["\u8BF7\u5148\u5728\u5F53\u524D\u9879\u76EE\u7684\u6839\u76EE\u5F55\u4F7F\u7528 ",(0,s.jsx)(n.a,{href:"/apis/app/commands#modern-new",children:"new \u547D\u4EE4"})," \u542F\u7528 BFF \u529F\u80FD\u3002"]}),"\n"]})]})}function o(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,t.useMDXComponents)(),e.components);return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(i,{...e})}):i(e)}var c=o;o.__RSPRESS_PAGE_META={},o.__RSPRESS_PAGE_META["zh%2Fcomponents%2Fenable-bff-caution.mdx"]={toc:[],title:"",frontmatter:{}}},45375:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return p}});var s=r("9880"),t=r("23169"),i=r("58065"),o=r("57250"),c=r("91230");function d(e){let n=Object.assign({h1:"h1",a:"a",ul:"ul",li:"li",strong:"strong",code:"code",p:"p",pre:"pre",h2:"h2",h3:"h3",div:"div"},(0,t.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h1,{id:"bffproxy",children:["bff.proxy",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#bffproxy",children:"#"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"\u7C7B\u578B\uFF1A"})," ",(0,s.jsx)(n.code,{children:"Record<string, string>"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"\u9ED8\u8BA4\u503C\uFF1A"})," ",(0,s.jsx)(n.code,{children:"{}"})]}),"\n"]}),"\n","\n",(0,s.jsx)(i.default,{}),"\n",(0,s.jsx)(n.p,{children:"\u901A\u8FC7\u7B80\u5355\u914D\u7F6E\uFF0CModern.js \u53EF\u4EE5\u5C06\u53D1\u9001\u7ED9 BFF server \u7684\u8BF7\u6C42\uFF0C\u81EA\u52A8\u4EE3\u7406\u5230\u6307\u5B9A\u7684\u670D\u52A1\u4E0A\u3002"}),"\n",(0,s.jsxs)(n.p,{children:["\u5728 ",(0,s.jsx)(n.code,{children:"modern.server-runtime.config.js"})," \u4E2D\u52A0\u5165\u4EE5\u4E0B\u914D\u7F6E\uFF1B\u5373\u53EF\u5F00\u542F\u4EE3\u7406\uFF1A"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",meta:'title="modern.server-runtime.config.js"',children:"import { defineConfig } from '@modern-js/app-tools/server';\nexport default defineConfig({\n  bff: {\n    proxy: {\n      '/api': 'https://cnodejs.org',\n    },\n  },\n});\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u5047\u8BBE Modern.js BFF server \u7684\u5730\u5740\u662F ",(0,s.jsx)(n.code,{children:"localhost:8080"}),"\uFF0C\u6240\u6709\u4EE5 ",(0,s.jsx)(n.code,{children:"api"})," \u5F00\u5934\u7684\u8BF7\u6C42\u90FD\u4F1A\u88AB\u4EE3\u7406\u5230 ",(0,s.jsx)(n.code,{children:"https://cnodejs.org"}),"\uFF0C\u5982 ",(0,s.jsx)(n.code,{children:"localhost:8080/api/v1/topics"})," \u7684\u8BF7\u6C42\u4F1A\u88AB\u4EE3\u7406\u5230 ",(0,s.jsx)(n.code,{children:"https://cnodejs.org/api/v1/topics"}),"\u3002"]}),"\n","\n",(0,s.jsx)(o.default,{}),"\n",(0,s.jsxs)(n.p,{children:["\u4E0E ",(0,s.jsx)(n.a,{href:"/configure/app/dev/proxy",children:"dev.proxy"})," \u4E0D\u540C\uFF0C\u672C\u8282\u6240\u4ECB\u7ECD\u7684\u4EE3\u7406\u53EA\u4F5C\u7528\u4E8E\u8FDB\u5165 BFF/API \u670D\u52A1\u7684\u8BF7\u6C42\uFF1B\u540C\u65F6\uFF0C\u8FD9\u4E00\u914D\u7F6E\u4E0D\u4F46\u53EF\u4EE5\u5728\u5F00\u53D1\u73AF\u5883\u4E2D\u4F7F\u7528\uFF0C\u5728\u751F\u4EA7\u73AF\u5883\u4E2D\u4E5F\u4F1A\u4EE3\u7406\u76F8\u5E94\u7684\u8BF7\u6C42\u3002"]}),"\n","\n",(0,s.jsx)(c.default,{}),"\n",(0,s.jsxs)(n.h2,{id:"\u5E38\u89C1\u7528\u6CD5",children:["\u5E38\u89C1\u7528\u6CD5",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u5E38\u89C1\u7528\u6CD5",children:"#"})]}),"\n",(0,s.jsxs)(n.h3,{id:"\u89E3\u51B3\u63A5\u53E3\u8DE8\u57DF\u95EE\u9898",children:["\u89E3\u51B3\u63A5\u53E3\u8DE8\u57DF\u95EE\u9898",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u89E3\u51B3\u63A5\u53E3\u8DE8\u57DF\u95EE\u9898",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["\u5728\u9879\u76EE\u5F00\u53D1\u8FC7\u7A0B\u4E2D\uFF0C\u56E0\u4E3A web \u9875\u9762\u548C\u63A5\u53E3\u670D\u52A1\u4E0D\u662F\u90E8\u7F72\u5728\u540C\u4E00\u4E2A\u57DF\u540D\u4E0B\uFF0C\u5E38\u5E38\u4F1A\u9047\u5230\u8DE8\u57DF\u95EE\u9898\u3002\n\u89E3\u51B3\u8DE8\u57DF\u95EE\u9898\u7684\u65B9\u5F0F\u6709\u5F88\u591A\uFF0C\u5728\u8FD9\u91CC\u6211\u4EEC\u4F7F\u7528 ",(0,s.jsx)(n.code,{children:"bff.proxy"})," \u53EF\u4EE5\u8F7B\u677E\u89E3\u51B3\u8DE8\u57DF\u95EE\u9898\u3002"]}),"\n",(0,s.jsxs)(n.div,{className:"rspress-directive info",children:[(0,s.jsx)(n.div,{className:"rspress-directive-title",children:"INFO"}),(0,s.jsxs)(n.div,{className:"rspress-directive-content",children:[(0,s.jsx)(n.p,{children:"BFF proxy \u6A21\u5F0F\u4E0B\uFF0C\u5982\u679C\u4E0D\u9700\u8981\u5199 BFF \u7684\u63A5\u53E3\uFF0C API \u76EE\u5F55\u53EF\u4EE5\u5220\u9664\uFF1B\u6B64\u65F6 BFF proxy \u4ECD\u4F1A\u5F00\u542F\u3002"}),"\n"]})]}),"\n",(0,s.jsxs)(n.p,{children:["\u5982\u4E0B\u6240\u793A\uFF0C\u5728 ",(0,s.jsx)(n.code,{children:"modern.server-runtime.config.ts"})," \u4E2D\uFF0C\u5199\u5165\u5982\u4E0B\u914D\u7F6E\uFF1B\u6211\u4EEC\u5C06\u6240\u6709 web \u9875\u9762\u53D1\u9001\u5230\u540C\u57DF\u7684\u4EE5 ",(0,s.jsx)(n.code,{children:"/api"})," \u5F00\u5934\u7684\u8BF7\u6C42\u4EE3\u7406\u5230\u53E6\u4E00\u4E2A\u57DF\u540D\u7684\u670D\u52A1\u4E0A\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",meta:'title="modern.server-runtime.config.ts"',children:"export default defineServerConfig({\n  bff: {\n    proxy: {\n      '/api': 'https://cnodejs.org',\n    },\n  },\n};\n"})})]})}function a(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,t.useMDXComponents)(),e.components);return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}var p=a;a.__RSPRESS_PAGE_META={},a.__RSPRESS_PAGE_META["zh%2Fconfigure%2Fapp%2Fbff%2Fproxy.mdx"]={toc:[{text:"\u5E38\u89C1\u7528\u6CD5",id:"\u5E38\u89C1\u7528\u6CD5",depth:2},{text:"\u89E3\u51B3\u63A5\u53E3\u8DE8\u57DF\u95EE\u9898",id:"\u89E3\u51B3\u63A5\u53E3\u8DE8\u57DF\u95EE\u9898",depth:3}],title:"bff.proxy",frontmatter:{sidebar_label:"proxy"}}}}]);