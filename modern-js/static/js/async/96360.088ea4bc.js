"use strict";(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["96360"],{60386:function(e,r,n){n.r(r),n.d(r,{default:function(){return c}});var s=n(39980),d=n(9580);function i(e){let r=Object.assign({h1:"h1",a:"a",ul:"ul",li:"li",strong:"strong",code:"code",p:"p",div:"div",h3:"h3",h4:"h4",pre:"pre"},(0,d.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(r.h1,{id:"toolsdevserver",children:["tools.devServer",(0,s.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#toolsdevserver",children:"#"})]}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"\u7C7B\u578B\uFF1A"})," ",(0,s.jsx)(r.code,{children:"Object"})]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"\u9ED8\u8BA4\u503C\uFF1A"})," ",(0,s.jsx)(r.code,{children:"{}"})]}),"\n"]}),"\n",(0,s.jsxs)(r.p,{children:["\u901A\u8FC7 ",(0,s.jsx)(r.code,{children:"tools.devServer"})," \u53EF\u4EE5\u4FEE\u6539\u5F00\u53D1\u73AF\u5883\u670D\u52A1\u5668\u7684\u914D\u7F6E\u3002"]}),"\n",(0,s.jsxs)(r.div,{className:"rspress-directive tip",children:[(0,s.jsx)(r.div,{className:"rspress-directive-title",children:"TIP"}),(0,s.jsx)(r.div,{className:"rspress-directive-content",children:(0,s.jsxs)(r.p,{children:["Modern.js \u4E2D\u5E76\u6CA1\u6709\u76F4\u63A5\u4F7F\u7528 ",(0,s.jsx)(r.a,{href:"https://webpack.js.org/api/webpack-dev-server/",target:"_blank",rel:"noopener noreferrer",children:"webpack-dev-server"})," \u6216 ",(0,s.jsx)(r.a,{href:"https://www.rspack.dev/guide/dev-server.html",target:"_blank",rel:"noopener noreferrer",children:"@rspack/dev-server"}),", \u800C\u662F\u57FA\u4E8E ",(0,s.jsx)(r.a,{href:"https://github.com/webpack/webpack-dev-middleware",target:"_blank",rel:"noopener noreferrer",children:"webpack-dev-middleware"})," \u5B9E\u73B0 DevServer\u3002\n"]})})]}),"\n",(0,s.jsxs)(r.h3,{id:"\u9009\u9879",children:["\u9009\u9879",(0,s.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#\u9009\u9879",children:"#"})]}),"\n",(0,s.jsxs)(r.h4,{id:"after",children:["after",(0,s.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#after",children:"#"})]}),"\n",(0,s.jsxs)(r.div,{className:"rspress-directive warning",children:[(0,s.jsx)(r.div,{className:"rspress-directive-title",children:"WARNING"}),(0,s.jsx)(r.div,{className:"rspress-directive-content",children:(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"Deprecated"}),"\uFF1A\u8BE5\u914D\u7F6E\u5DF2\u5E9F\u5F03\uFF0C\u8BF7\u4F7F\u7528 ",(0,s.jsx)(r.a,{href:"https://modernjs.dev/configure/app/dev/setup-middlewares",target:"_blank",rel:"noopener noreferrer",children:"dev.setupMiddlewares"})," \u4EE3\u66FF\u3002\n"]})})]}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"\u7C7B\u578B\uFF1A"})," ",(0,s.jsx)(r.code,{children:"Array"})]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"\u9ED8\u8BA4\u503C\uFF1A"})," ",(0,s.jsx)(r.code,{children:"[]"})]}),"\n"]}),"\n",(0,s.jsx)(r.p,{children:"\u6DFB\u52A0\u81EA\u5B9A\u4E49\u4E2D\u95F4\u4EF6\uFF0C\u5728\u6240\u6709\u5F00\u53D1\u73AF\u5883\u4E2D\u95F4\u4EF6\u540E\u6267\u884C\u3002"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-js",children:"export default {\n  tools: {\n    devServer: {\n      after: [\n        async (req, res, next) => {\n          console.log('after dev middleware');\n          next();\n        },\n      ],\n    },\n  },\n};\n"})}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.code,{children:"webpack-dev-server"})," \u4F7F\u7528 Express \u4F5C\u4E3A\u670D\u52A1\u7AEF\u6846\u67B6\u3002Modern.js \u4E2D\u6CA1\u6709\u4F7F\u7528\u4EFB\u4F55\u6846\u67B6\uFF0C\u4E0A\u8FF0\u4E2D\u95F4\u4EF6\u4E2D ",(0,s.jsx)(r.code,{children:"req"})," \u548C ",(0,s.jsx)(r.code,{children:"res"})," \u90FD\u662F Node \u539F\u751F\u5BF9\u8C61\uFF0C\u56E0\u6B64 ",(0,s.jsx)(r.code,{children:"webpack-dev-server"})," \u7684 Express \u4E2D\u95F4\u4EF6\u4E0D\u4E00\u5B9A\u80FD\u76F4\u63A5\u5728 Modern.js \u4E2D\u4F7F\u7528\u3002"]}),"\n",(0,s.jsxs)(r.p,{children:["\u5982\u679C\u8981\u8FC1\u79FB ",(0,s.jsx)(r.code,{children:"webpack-dev-server"})," \u4E2D\u4F7F\u7528\u7684 Express \u4E2D\u95F4\u4EF6\uFF0C\u53EF\u4EE5\u4F7F\u7528\u4EE5\u4E0B\u65B9\u5F0F\uFF0C\u5C06 Express app \u4F5C\u4E3A\u4E2D\u95F4\u4EF6\u4F20\u5165\uFF1A"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-js",children:"import expressMiddleware from 'my-express-middleware';\nimport express from 'express';\n\n// \u521D\u59CB\u5316 Express app\nconst app = express();\napp.use(expressMiddleware);\n\nexport default {\n  tools: {\n    devServer: {\n      after: [app],\n    },\n  },\n};\n"})}),"\n",(0,s.jsxs)(r.h4,{id:"before",children:["before",(0,s.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#before",children:"#"})]}),"\n",(0,s.jsxs)(r.div,{className:"rspress-directive warning",children:[(0,s.jsx)(r.div,{className:"rspress-directive-title",children:"WARNING"}),(0,s.jsx)(r.div,{className:"rspress-directive-content",children:(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"Deprecated"}),"\uFF1A\u8BE5\u914D\u7F6E\u5DF2\u5E9F\u5F03\uFF0C\u8BF7\u4F7F\u7528 ",(0,s.jsx)(r.a,{href:"https://modernjs.dev/configure/app/dev/setup-middlewares",target:"_blank",rel:"noopener noreferrer",children:"dev.setupMiddlewares"})," \u4EE3\u66FF\u3002\n"]})})]}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"\u7C7B\u578B\uFF1A"})," ",(0,s.jsx)(r.code,{children:"Array"})]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"\u9ED8\u8BA4\u503C\uFF1A"})," ",(0,s.jsx)(r.code,{children:"[]"})]}),"\n"]}),"\n",(0,s.jsx)(r.p,{children:"\u6DFB\u52A0\u81EA\u5B9A\u4E49\u4E2D\u95F4\u4EF6\uFF0C\u5728\u6240\u6709\u5F00\u53D1\u73AF\u5883\u4E2D\u95F4\u4EF6\u524D\u6267\u884C\u3002"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-js",children:"export default {\n  tools: {\n    devServer: {\n      before: [\n        async (req, res, next) => {\n          console.log('before dev middleware');\n          next();\n        },\n      ],\n    },\n  },\n};\n"})}),"\n",(0,s.jsxs)(r.h4,{id:"client",children:["client",(0,s.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#client",children:"#"})]}),"\n",(0,s.jsxs)(r.div,{className:"rspress-directive warning",children:[(0,s.jsx)(r.div,{className:"rspress-directive-title",children:"WARNING"}),(0,s.jsx)(r.div,{className:"rspress-directive-content",children:(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"Deprecated"}),"\uFF1A\u8BE5\u914D\u7F6E\u5DF2\u5E9F\u5F03\uFF0C\u8BF7\u4F7F\u7528 ",(0,s.jsx)(r.a,{href:"https://modernjs.dev/configure/app/dev/client",target:"_blank",rel:"noopener noreferrer",children:"dev.client"})," \u4EE3\u66FF\u3002\n"]})})]}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.strong,{children:"\u7C7B\u578B\uFF1A"})}),"\n"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-ts",children:"{\n    /** \u6307\u5B9A\u534F\u8BAE\u540D\u79F0 */\n    protocol?: string;\n    /** \u4E8B\u4EF6\u6D41\u8DEF\u5F84 */\n    path?: string;\n    /** \u6307\u5B9A\u76D1\u542C\u8BF7\u6C42\u7684\u7AEF\u53E3\u53F7 */\n    port?: string;\n    /** \u6307\u5B9A\u8981\u4F7F\u7528\u7684 host */\n    host?: string;\n}\n"})}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.strong,{children:"\u9ED8\u8BA4\u503C\uFF1A"})}),"\n"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-js",children:"const defaultConfig = {\n  path: '/webpack-hmr',\n  // By default it is set to the port number of the dev server\n  port: '',\n  // By default it is set to \"location.hostname\"\n  host: '',\n  // By default it is set to \"location.protocol === 'https:' ? 'wss' : 'ws'\"\"\n  protocol: '',\n};\n"})}),"\n",(0,s.jsx)(r.p,{children:"\u5BF9\u5E94 HMR \u5BA2\u6237\u7AEF\u7684\u914D\u7F6E\uFF0C\u901A\u5E38\u7528\u4E8E\u8BBE\u7F6E HMR \u5BF9\u5E94\u7684 WebSocket URL\u3002"}),"\n",(0,s.jsxs)(r.h4,{id:"compress",children:["compress",(0,s.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#compress",children:"#"})]}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"\u7C7B\u578B\uFF1A"})," ",(0,s.jsx)(r.code,{children:"boolean"})]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"\u9ED8\u8BA4\u503C\uFF1A"})," ",(0,s.jsx)(r.code,{children:"true"})]}),"\n"]}),"\n",(0,s.jsx)(r.p,{children:"\u662F\u5426\u5BF9\u9759\u6001\u8D44\u6E90\u542F\u7528 gzip \u538B\u7F29\u3002"}),"\n",(0,s.jsxs)(r.p,{children:["\u5982\u679C\u4F60\u9700\u8981\u7981\u7528 gzip \u538B\u7F29\uFF0C\u53EF\u4EE5\u5C06 ",(0,s.jsx)(r.code,{children:"compress"})," \u8BBE\u7F6E\u4E3A ",(0,s.jsx)(r.code,{children:"false"}),"\uFF1A"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-ts",children:"export default {\n  tools: {\n    devServer: {\n      compress: false,\n    },\n  },\n};\n"})}),"\n",(0,s.jsxs)(r.h4,{id:"devmiddleware",children:["devMiddleware",(0,s.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#devmiddleware",children:"#"})]}),"\n",(0,s.jsxs)(r.div,{className:"rspress-directive warning",children:[(0,s.jsx)(r.div,{className:"rspress-directive-title",children:"WARNING"}),(0,s.jsx)(r.div,{className:"rspress-directive-content",children:(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"Deprecated"}),"\uFF1A\u8BE5\u914D\u7F6E\u5DF2\u5E9F\u5F03\uFF0C\u8BF7\u4F7F\u7528 ",(0,s.jsx)(r.a,{href:"https://modernjs.dev/configure/app/dev/write-to-disk",target:"_blank",rel:"noopener noreferrer",children:"dev.writeToDisk"})," \u4EE3\u66FF\u3002\n"]})})]}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.strong,{children:"\u7C7B\u578B\uFF1A"})}),"\n"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-js",children:"{\n  writeToDisk: boolean | ((filename: string) => boolean);\n}\n"})}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.strong,{children:"\u9ED8\u8BA4\u503C\uFF1A"})}),"\n"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-js",children:"{\n  writeToDisk: (file: string) => !file.includes('.hot-update.'),\n}\n"})}),"\n",(0,s.jsxs)(r.p,{children:["devMiddleware \u914D\u7F6E\u9879\u3002\u5F53\u524D\u914D\u7F6E\u662F ",(0,s.jsx)(r.a,{href:"https://github.com/webpack/webpack-dev-middleware",target:"_blank",rel:"noopener noreferrer",children:"webpack-dev-middleware"})," \u914D\u7F6E\u9879\u7684\u5B50\u96C6."]}),"\n",(0,s.jsxs)(r.h4,{id:"headers",children:["headers",(0,s.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#headers",children:"#"})]}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"\u7C7B\u578B\uFF1A"})," ",(0,s.jsx)(r.code,{children:"Record<string, string>"})]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"\u9ED8\u8BA4\u503C\uFF1A"})," ",(0,s.jsx)(r.code,{children:"undefined"})]}),"\n"]}),"\n",(0,s.jsx)(r.p,{children:"\u8BBE\u7F6E\u81EA\u5B9A\u4E49\u54CD\u5E94\u5934\u3002"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-js",children:"export default {\n  tools: {\n    devServer: {\n      headers: {\n        'X-Custom-Foo': 'bar',\n      },\n    },\n  },\n};\n"})}),"\n",(0,s.jsxs)(r.h4,{id:"historyapifallback",children:["historyApiFallback",(0,s.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#historyapifallback",children:"#"})]}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"\u7C7B\u578B\uFF1A"})," ",(0,s.jsx)(r.code,{children:"boolean | ConnectHistoryApiFallbackOptions"})]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"\u9ED8\u8BA4\u503C\uFF1A"})," ",(0,s.jsx)(r.code,{children:"false"})]}),"\n"]}),"\n",(0,s.jsxs)(r.p,{children:["\u5728\u9700\u8981\u5BF9\u4E00\u4E9B 404 \u54CD\u5E94\u6216\u5176\u4ED6\u8BF7\u6C42\u63D0\u4F9B\u66FF\u4EE3\u9875\u9762\u7684\u573A\u666F\uFF0C\u53EF\u901A\u8FC7 ",(0,s.jsx)(r.code,{children:"devServer.historyApiFallback"})," \u8FDB\u884C\u8BBE\u7F6E\uFF1A"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-js",children:"export default {\n  tools: {\n    devServer: {\n      historyApiFallback: true,\n    },\n  },\n};\n"})}),"\n",(0,s.jsxs)(r.p,{children:["\u66F4\u591A\u9009\u9879\u548C\u8BE6\u7EC6\u4FE1\u606F\u53EF\u53C2\u8003 ",(0,s.jsx)(r.a,{href:"https://github.com/bripkens/connect-history-api-fallback",target:"_blank",rel:"noopener noreferrer",children:"connect-history-api-fallback"})," \u6587\u6863\u3002"]}),"\n",(0,s.jsxs)(r.h4,{id:"hot",children:["hot",(0,s.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#hot",children:"#"})]}),"\n",(0,s.jsxs)(r.div,{className:"rspress-directive warning",children:[(0,s.jsx)(r.div,{className:"rspress-directive-title",children:"WARNING"}),(0,s.jsx)(r.div,{className:"rspress-directive-content",children:(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"Deprecated"}),"\uFF1A\u8BE5\u914D\u7F6E\u5DF2\u5E9F\u5F03\uFF0C\u8BF7\u4F7F\u7528 ",(0,s.jsx)(r.a,{href:"https://modernjs.dev/configure/app/dev/hmr",target:"_blank",rel:"noopener noreferrer",children:"dev.hmr"})," \u4EE3\u66FF\u3002\n"]})})]}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"\u7C7B\u578B\uFF1A"})," ",(0,s.jsx)(r.code,{children:"boolean"})]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"\u9ED8\u8BA4\u503C\uFF1A"})," ",(0,s.jsx)(r.code,{children:"true"})]}),"\n"]}),"\n",(0,s.jsxs)(r.p,{children:["\u662F\u5426\u5F00\u542F ",(0,s.jsx)(r.a,{href:"https://webpack.js.org/concepts/hot-module-replacement/",target:"_blank",rel:"noopener noreferrer",children:"Hot Module Replacement"})," \u70ED\u66F4\u65B0\u80FD\u529B\u3002"]}),"\n",(0,s.jsxs)(r.h4,{id:"https",children:["https",(0,s.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#https",children:"#"})]}),"\n",(0,s.jsxs)(r.div,{className:"rspress-directive warning",children:[(0,s.jsx)(r.div,{className:"rspress-directive-title",children:"WARNING"}),(0,s.jsx)(r.div,{className:"rspress-directive-content",children:(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"Deprecated"}),"\uFF1A\u8BE5\u914D\u7F6E\u5DF2\u5E9F\u5F03\uFF0C\u8BF7\u4F7F\u7528 ",(0,s.jsx)(r.a,{href:"https://modernjs.dev/configure/app/dev/https",target:"_blank",rel:"noopener noreferrer",children:"dev.https"})," \u4EE3\u66FF\u3002\n"]})})]}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"\u7C7B\u578B\uFF1A"})," ",(0,s.jsx)(r.code,{children:"boolean | { key: string; cert: string }"})]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"\u9ED8\u8BA4\u503C\uFF1A"})," ",(0,s.jsx)(r.code,{children:"false"})]}),"\n"]}),"\n",(0,s.jsxs)(r.p,{children:["\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0CDevServer \u4F1A\u542F\u7528 HTTP \u670D\u52A1\u5668\u3002\u901A\u8FC7\u8BBE\u7F6E ",(0,s.jsx)(r.code,{children:"devServer.https"})," \u4E3A ",(0,s.jsx)(r.code,{children:"true"})," \u5C06\u5F00\u542F\u5BF9 HTTPS \u7684\u652F\u6301\uFF0C\u540C\u65F6\u4F1A\u7981\u7528 HTTP \u670D\u52A1\u5668\u3002"]}),"\n",(0,s.jsx)(r.p,{children:"\u4F60\u4E5F\u53EF\u4EE5\u624B\u52A8\u4F20\u5165 HTTPS \u670D\u52A1\u5668\u6240\u9700\u8981\u7684\u8BC1\u4E66\u548C\u5BF9\u5E94\u7684\u79C1\u94A5\uFF1A"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-js",children:"export default {\n  tools: {\n    devServer: {\n      https: {\n        key: fs.readFileSync('certificates/private.pem'),\n        cert: fs.readFileSync('certificates/public.pem'),\n      },\n    },\n  },\n};\n"})}),"\n",(0,s.jsxs)(r.h4,{id:"livereload",children:["liveReload",(0,s.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#livereload",children:"#"})]}),"\n",(0,s.jsxs)(r.div,{className:"rspress-directive warning",children:[(0,s.jsx)(r.div,{className:"rspress-directive-title",children:"WARNING"}),(0,s.jsx)(r.div,{className:"rspress-directive-content",children:(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"Deprecated"}),"\uFF1A\u8BE5\u914D\u7F6E\u5DF2\u5E9F\u5F03\uFF0C\u8BF7\u4F7F\u7528 ",(0,s.jsx)(r.a,{href:"https://modernjs.dev/configure/app/dev/live-reload",target:"_blank",rel:"noopener noreferrer",children:"dev.liveReload"})," \u4EE3\u66FF\u3002\n"]})})]}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"\u7C7B\u578B\uFF1A"})," ",(0,s.jsx)(r.code,{children:"boolean"})]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"\u9ED8\u8BA4\u503C\uFF1A"})," ",(0,s.jsx)(r.code,{children:"true"})]}),"\n"]}),"\n",(0,s.jsxs)(r.p,{children:["\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u5F53\u76D1\u542C\u5230\u6587\u4EF6\u53D8\u5316\u65F6\uFF0CDevServer \u5C06\u4F1A\u5237\u65B0\u9875\u9762\uFF08\u4E3A\u4F7F liveReload \u80FD\u591F\u751F\u6548\uFF0C",(0,s.jsx)(r.code,{children:"devServer.hot"})," \u914D\u7F6E\u9879\u5E94\u5F53\u7981\u7528\uFF09\u3002\u901A\u8FC7\u8BBE\u7F6E ",(0,s.jsx)(r.code,{children:"devServer.liveReload"})," \u4E3A ",(0,s.jsx)(r.code,{children:"false"})," \u53EF\u4EE5\u5173\u95ED\u8BE5\u884C\u4E3A\u3002"]}),"\n",(0,s.jsxs)(r.h4,{id:"setupmiddlewares",children:["setupMiddlewares",(0,s.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#setupmiddlewares",children:"#"})]}),"\n",(0,s.jsxs)(r.div,{className:"rspress-directive warning",children:[(0,s.jsx)(r.div,{className:"rspress-directive-title",children:"WARNING"}),(0,s.jsx)(r.div,{className:"rspress-directive-content",children:(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"Deprecated"}),"\uFF1A\u8BE5\u914D\u7F6E\u5DF2\u5E9F\u5F03\uFF0C\u8BF7\u4F7F\u7528 ",(0,s.jsx)(r.a,{href:"https://modernjs.dev/configure/app/dev/setup-middlewares",target:"_blank",rel:"noopener noreferrer",children:"dev.setupMiddlewares"})," \u4EE3\u66FF\u3002\n"]})})]}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.strong,{children:"\u7C7B\u578B\uFF1A"})}),"\n"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-js",children:"Array<\n  (\n    middlewares: {\n      unshift: (...handlers: RequestHandler[]) => void;\n      push: (...handlers: RequestHandler[]) => void;\n    },\n    server: {\n      sockWrite: (\n        type: string,\n        data?: string | boolean | Record<string, any>,\n      ) => void;\n    },\n  ) => void\n>;\n"})}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"\u9ED8\u8BA4\u503C\uFF1A"})," ",(0,s.jsx)(r.code,{children:"undefined"})]}),"\n"]}),"\n",(0,s.jsx)(r.p,{children:"\u63D0\u4F9B\u6267\u884C\u81EA\u5B9A\u4E49\u51FD\u6570\u548C\u5E94\u7528\u81EA\u5B9A\u4E49\u4E2D\u95F4\u4EF6\u7684\u80FD\u529B\u3002"}),"\n",(0,s.jsxs)(r.p,{children:["\u51E0\u79CD\u4E0D\u540C\u4E2D\u95F4\u4EF6\u4E4B\u95F4\u7684\u6267\u884C\u987A\u5E8F\u662F: ",(0,s.jsx)(r.code,{children:"devServer.before"})," => ",(0,s.jsx)(r.code,{children:"unshift"})," => \u5185\u7F6E\u4E2D\u95F4\u4EF6 => ",(0,s.jsx)(r.code,{children:"push"})," => ",(0,s.jsx)(r.code,{children:"devServer.after"}),"\u3002"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-js",children:"export default {\n  tools: {\n    devServer: {\n      setupMiddlewares: [\n        (middlewares, server) => {\n          middlewares.unshift((req, res, next) => {\n            next();\n          });\n\n          middlewares.push((req, res, next) => {\n            next();\n          });\n        },\n      ],\n    },\n  },\n};\n"})}),"\n",(0,s.jsx)(r.p,{children:"\u4E00\u4E9B\u7279\u6B8A\u573A\u666F\u9700\u6C42\u53EF\u80FD\u9700\u8981\u4F7F\u7528\u670D\u52A1\u5668 API\uFF1A"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:'sockWrite\u3002\u5141\u8BB8\u5411 hmr \u5BA2\u6237\u7AEF\u4F20\u9012\u4E00\u4E9B\u6D88\u606F\uFF0Chmr \u5BA2\u6237\u7AEF\u5C06\u6839\u636E\u63A5\u6536\u5230\u7684\u6D88\u606F\u7C7B\u578B\u8FDB\u884C\u4E0D\u540C\u7684\u5904\u7406\u3002\u5982\u679C\u4F60\u53D1\u9001\u4E00\u4E2A "content-changed " \u7684\u6D88\u606F\uFF0C\u9875\u9762\u5C06\u4F1A\u91CD\u65B0\u52A0\u8F7D\u3002'}),"\n"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-js",children:"export default {\n  tools: {\n    devServer: {\n      setupMiddlewares: [\n        (middlewares, server) => {\n          // \u6DFB\u52A0\u81EA\u5B9A\u4E49 watcher \u5E76\u5728\u6587\u4EF6\u66F4\u65B0\u65F6\u89E6\u53D1\u9875\u9762\u5237\u65B0\n          watcher.on('change', changed => {\n            server.sockWrite('content-changed');\n          });\n        },\n      ],\n    },\n  },\n};\n"})}),"\n",(0,s.jsxs)(r.h4,{id:"proxy",children:["proxy",(0,s.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#proxy",children:"#"})]}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"\u7C7B\u578B\uFF1A"})," ",(0,s.jsx)(r.code,{children:"Record<string, string> | Record<string, ProxyDetail>"})]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"\u9ED8\u8BA4\u503C\uFF1A"})," ",(0,s.jsx)(r.code,{children:"undefined"})]}),"\n"]}),"\n",(0,s.jsx)(r.p,{children:"\u4EE3\u7406\u8BF7\u6C42\u5230\u6307\u5B9A\u7684\u670D\u52A1\u4E0A\u3002"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-js",children:"export default {\n  tools: {\n    devServer: {\n      proxy: {\n        '/api': 'http://localhost:3000',\n      },\n    },\n  },\n};\n"})}),"\n",(0,s.jsxs)(r.p,{children:["\u6B64\u65F6\uFF0C/api/users \u8BF7\u6C42\u5C06\u4F1A\u4EE3\u7406\u5230 ",(0,s.jsx)(r.a,{href:"http://localhost:3000/api/users%E3%80%82",target:"_blank",rel:"noopener noreferrer",children:"http://localhost:3000/api/users\u3002"})]}),"\n",(0,s.jsxs)(r.p,{children:["\u5982\u679C\u4F60\u4E0D\u60F3\u4F20\u9012 /api\uFF0C\u53EF\u4EE5\u901A\u8FC7 ",(0,s.jsx)(r.code,{children:"pathRewrite"})," \u91CD\u5199\u8BF7\u6C42\u8DEF\u5F84\uFF1A"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-js",children:"export default {\n  tools: {\n    devServer: {\n      proxy: {\n        '/api': {\n          target: 'http://localhost:3000',\n          pathRewrite: { '^/api': '' },\n        },\n      },\n    },\n  },\n};\n"})}),"\n",(0,s.jsxs)(r.p,{children:["DevServer Proxy \u57FA\u4E8E ",(0,s.jsx)(r.a,{href:"https://github.com/chimurai/http-proxy-middleware/tree/2.x",target:"_blank",rel:"noopener noreferrer",children:"http-proxy-middleware"})," \u5B9E\u73B0\u3002\u4F60\u53EF\u4EE5\u4F7F\u7528 http-proxy-middleware \u7684\u6240\u6709\u914D\u7F6E\u9879\uFF0C\u5177\u4F53\u53EF\u4EE5\u67E5\u770B\u6587\u6863\u3002"]}),"\n",(0,s.jsx)(r.p,{children:"DevServer Proxy \u5B8C\u6574\u7C7B\u578B\u5B9A\u4E49\u4E3A\uFF1A"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-ts",children:"import type { Options as HttpProxyOptions } from 'http-proxy-middleware';\n\ntype Filter = string | string[] | ((pathname: string, req: Request) => boolean);\n\ntype ProxyDetail = HttpProxyOptions & {\n  bypass?: (\n    req: IncomingMessage,\n    res: ServerResponse,\n    proxyOptions: ProxyOptions,\n  ) => string | undefined | null | false;\n  context?: Filter;\n};\n\ntype ProxyOptions =\n  | Record<string, string>\n  | Record<string, ProxyDetail>\n  | ProxyDetail[]\n  | ProxyDetail;\n"})}),"\n",(0,s.jsx)(r.p,{children:"\u9664\u4E86 http-proxy-middleware \u7684\u9009\u9879\u5916\uFF0C\u8FD8\u652F\u6301 bypass \u548C context \u4E24\u4E2A\u914D\u7F6E\u9879\uFF1A"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["bypass\uFF1A\u6839\u636E\u51FD\u6570\u7684\u8FD4\u56DE\u503C\u7ED5\u8FC7\u4EE3\u7406\u3002","\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["\u8FD4\u56DE ",(0,s.jsx)(r.code,{children:"null"})," \u6216 ",(0,s.jsx)(r.code,{children:"undefined"})," \u4F1A\u7EE7\u7EED\u7528\u4EE3\u7406\u5904\u7406\u8BF7\u6C42\u3002"]}),"\n",(0,s.jsxs)(r.li,{children:["\u8FD4\u56DE ",(0,s.jsx)(r.code,{children:"false"})," \u4F1A\u8FD4\u56DE 404 \u9519\u8BEF\u3002"]}),"\n",(0,s.jsx)(r.li,{children:"\u8FD4\u56DE\u4E00\u4E2A\u5177\u4F53\u7684\u670D\u52A1\u8DEF\u5F84\uFF0C\u5C06\u4F1A\u4F7F\u7528\u6B64\u8DEF\u5F84\u66FF\u4EE3\u539F\u8BF7\u6C42\u8DEF\u5F84\u3002"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(r.li,{children:"context\uFF1A\u5982\u679C\u4F60\u60F3\u4EE3\u7406\u591A\u4E2A\u7279\u5B9A\u7684\u8DEF\u5F84\u5230\u540C\u4E00\u4E2A\u76EE\u6807\uFF0C\u4F60\u53EF\u4EE5\u4F7F\u7528 context \u914D\u7F6E\u9879\u3002"}),"\n"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-js",children:"// \u81EA\u5B9A\u4E49 bypass \u65B9\u6CD5\nexport default {\n  tools: {\n    devServer: {\n      proxy: {\n        '/api': {\n          target: 'http://localhost:3000',\n          bypass: function (req, res, proxyOptions) {\n            if (req.headers.accept.indexOf('html') !== -1) {\n              console.log('Skipping proxy for browser request.');\n              return '/index.html';\n            }\n          },\n        },\n      },\n    },\n  },\n};\n"})}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-js",children:"// \u4EE3\u7406\u591A\u4E2A\u8DEF\u5F84\u5230\u540C\u4E00\u4E2A\u76EE\u6807\nexport default {\n  tools: {\n    devServer: {\n      proxy: [\n        {\n          context: ['/auth', '/api'],\n          target: 'http://localhost:3000',\n        },\n      ],\n    },\n  },\n};\n"})}),"\n",(0,s.jsxs)(r.h4,{id:"watch",children:["watch",(0,s.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#watch",children:"#"})]}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"\u7C7B\u578B\uFF1A"})," ",(0,s.jsx)(r.code,{children:"boolean"})]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"\u9ED8\u8BA4\u503C\uFF1A"})," ",(0,s.jsx)(r.code,{children:"true"})]}),"\n"]}),"\n",(0,s.jsxs)(r.p,{children:["\u662F\u5426\u76D1\u542C ",(0,s.jsx)(r.code,{children:"mock/"}),"\u3001",(0,s.jsx)(r.code,{children:"server/"}),"\u3001",(0,s.jsx)(r.code,{children:"api/"})," \u7B49\u76EE\u5F55\u7684\u6587\u4EF6\u53D8\u5316\u3002"]})]})}function l(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:r}=Object.assign({},(0,d.ah)(),e.components);return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(i,{...e})}):i(e)}let c=l;l.__RSPRESS_PAGE_META={},l.__RSPRESS_PAGE_META["zh%2Fconfigure%2Fapp%2Ftools%2Fdev-server.mdx"]={toc:[{text:"\u9009\u9879",id:"\u9009\u9879",depth:3},{text:"after",id:"after",depth:4},{text:"before",id:"before",depth:4},{text:"client",id:"client",depth:4},{text:"compress",id:"compress",depth:4},{text:"devMiddleware",id:"devmiddleware",depth:4},{text:"headers",id:"headers",depth:4},{text:"historyApiFallback",id:"historyapifallback",depth:4},{text:"hot",id:"hot",depth:4},{text:"https",id:"https",depth:4},{text:"liveReload",id:"livereload",depth:4},{text:"setupMiddlewares",id:"setupmiddlewares",depth:4},{text:"proxy",id:"proxy",depth:4},{text:"watch",id:"watch",depth:4}],title:"tools.devServer",frontmatter:{sidebar_label:"devServer"}}}}]);