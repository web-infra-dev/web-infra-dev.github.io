(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["63664"],{28427:function(e,n,c){"use strict";c.r(n),c.d(n,{default:function(){return l}});var r,s=c("15169"),d=c("43932"),i=c("9880"),o=c("23169");function a(e){var n=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",code:"code",pre:"pre",div:"div",ul:"ul",li:"li"},(0,o.useMDXComponents)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.h1,{id:"\u6570\u636E\u6A21\u62DF",children:["\u6570\u636E\u6A21\u62DF",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u6570\u636E\u6A21\u62DF",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"Modern.js \u63D0\u4F9B\u4E86\u5FEB\u901F\u751F\u6210 Mock \u6570\u636E\u7684\u529F\u80FD\uFF0C\u80FD\u591F\u8BA9\u524D\u7AEF\u72EC\u7ACB\u81EA\u4E3B\u5F00\u53D1\uFF0C\u4E0D\u88AB\u540E\u7AEF\u63A5\u53E3\u963B\u585E\u3002"}),"\n",(0,i.jsxs)(n.h2,{id:"\u542F\u7528-mock",children:["\u542F\u7528 Mock",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u542F\u7528-mock",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["\u7EA6\u5B9A\u5F53 ",(0,i.jsx)(n.code,{children:"config/mock"})," \u76EE\u5F55\u4E0B\u5B58\u5728 ",(0,i.jsx)(n.code,{children:"index.[jt]s"})," \u65F6\uFF0C\u4F1A\u81EA\u52A8\u5F00\u542F Mock \u529F\u80FD\uFF0C\u5982\u4E0B\uFF1A"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:".\n\u251C\u2500\u2500 config\n\u2502   \u2514\u2500\u2500 mock\n\u2502       \u2514\u2500\u2500 index.ts\n\u251C\u2500\u2500 src\n\u2502   \u2514\u2500\u2500 App.tsx\n\u2514\u2500\u2500 modern.config.ts\n"})}),"\n",(0,i.jsxs)(n.h2,{id:"\u7F16\u5199-mock-\u6587\u4EF6",children:["\u7F16\u5199 Mock \u6587\u4EF6",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u7F16\u5199-mock-\u6587\u4EF6",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"config/mock/index.ts"})," \u6587\u4EF6\u53EA\u9700\u8981\u5BFC\u51FA\u4E00\u4E2A\u5305\u542B\u6240\u6709 Mock API \u7684\u5BF9\u8C61\uFF0C\u5BF9\u8C61\u7684\u5C5E\u6027\u7531\u8BF7\u6C42\u914D\u7F6E ",(0,i.jsx)(n.code,{children:"method"})," \u548C ",(0,i.jsx)(n.code,{children:"url"})," \u7EC4\u6210\uFF0C\u5BF9\u5E94\u7684\u5C5E\u6027\u503C\u53EF\u4EE5\u4E3A ",(0,i.jsx)(n.code,{children:"Object"}),"\u3001",(0,i.jsx)(n.code,{children:"Array"}),"\u3001",(0,i.jsx)(n.code,{children:"Function"}),"\uFF1A"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"export default {\n  /* \u5C5E\u6027\u4E3A\u5177\u4F53\u7684 method \u548C \u8BF7\u6C42 url\uFF0C\u503C\u4E3A object \u6216 array \u4F5C\u4E3A\u8BF7\u6C42\u7684\u7ED3\u679C */\n  'GET /api/getInfo': { data: [1, 2, 3, 4] },\n\n  /* method \u9ED8\u8BA4\u4E3A GET */\n  '/api/getExample': { id: 1 },\n\n  /* \u53EF\u4EE5\u4F7F\u7528\u81EA\u5B9A\u4E49\u51FD\u6570\u6839\u636E\u8BF7\u6C42\u52A8\u6001\u8FD4\u56DE\u6570\u636E, req & res \u90FD\u662F Node.js HTTP \u539F\u751F\u5BF9\u8C61 */\n  'POST /api/addInfo': (req, res, next) => {\n    res.setHeader('Access-Control-Allow-Origin', '*');\n    res.end('200');\n  },\n};\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u4EE3\u7801\u4E2D\u8BBF\u95EE ",(0,i.jsx)(n.code,{children:"http://localhost:8080/api/getInfo"})," \u65F6\uFF0C\u63A5\u53E3\u4F1A\u8FD4\u56DE JSON \u683C\u5F0F\u6570\u636E\uFF1A",(0,i.jsx)(n.code,{children:'{ "data": [1, 2, 3, 4] }'}),"\u3002"]}),"\n",(0,i.jsxs)(n.h2,{id:"\u8FD4\u56DE\u968F\u673A\u6570\u636E",children:["\u8FD4\u56DE\u968F\u673A\u6570\u636E",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u8FD4\u56DE\u968F\u673A\u6570\u636E",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["\u53EF\u4EE5\u5728 ",(0,i.jsx)(n.code,{children:"config/mock/index.js"})," \u4E2D\u81EA\u4E3B\u5F15\u5165 ",(0,i.jsx)(n.a,{href:"https://github.com/nuysoft/Mock/wiki/Getting-Started",target:"_blank",rel:"noopener noreferrer",children:"Mock.js"})," \u7B49\u5E93\u751F\u6210\u968F\u673A\u6570\u636E\uFF0C\u4F8B\u5982\uFF1A"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"const Mock = require('mockjs');\n\nmodule.exports = {\n  '/api/getInfo': Mock.mock({\n    'data|1-10': [{ name: '@cname' }],\n  }) /* => {data: [{name: \"\u8463\u971E\"}, {name: \"\u9B4F\u654F\"},  {name: \"\u77F3\u78CA\"}} */,\n};\n"})}),"\n",(0,i.jsxs)(n.div,{className:"modern-directive info",children:[(0,i.jsx)(n.div,{className:"modern-directive-title",children:"\u66F4\u591A\u968F\u673A\u6570\u636E\u751F\u6210\u5E93"}),(0,i.jsxs)(n.div,{className:"modern-directive-content",children:["\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/chancejs/chancejs",target:"_blank",rel:"noopener noreferrer",children:"Chancejs"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/nuysoft/Mock/wiki/Getting-Started",target:"_blank",rel:"noopener noreferrer",children:"Mock"})}),"\n"]}),"\n"]})]}),"\n",(0,i.jsxs)(n.h2,{id:"\u5EF6\u8FDF\u54CD\u5E94",children:["\u5EF6\u8FDF\u54CD\u5E94",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u5EF6\u8FDF\u54CD\u5E94",children:"#"})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u53EF\u4EE5\u4F7F\u7528\u6D4F\u89C8\u5668\u300C \u5F31\u7F51\u6A21\u62DF \u300D\u7684\u529F\u80FD\u5B9E\u73B0\u3002"}),"\n",(0,i.jsxs)(n.li,{children:["\u53EF\u4EE5\u901A\u8FC7 ",(0,i.jsx)(n.code,{children:"setTimeout"})," \u4E3A\u5355\u4E2A\u63A5\u53E3\u8BBE\u7F6E\u5EF6\u8FDF\uFF0C\u4F8B\u5982\uFF1A"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"module.exports = {\n  'api/getInfo': (req, res) => {\n    setTimeout(() => {\n      res.end('delay 2000ms');\n    }, 2000);\n  },\n};\n"})}),"\n",(0,i.jsxs)(n.h2,{id:"\u6309\u9700\u4F7F\u7528-mock-\u670D\u52A1",children:["\u6309\u9700\u4F7F\u7528 Mock \u670D\u52A1",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u6309\u9700\u4F7F\u7528-mock-\u670D\u52A1",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"config/mock/index.ts"})," \u4E0B\u8FD8\u53EF\u4EE5\u5230\u5904 ",(0,i.jsx)(n.code,{children:"config"})," \u5BF9\u8C61\uFF0C\u66F4\u7CBE\u7EC6\u7684\u63A7\u5236 Mock \u670D\u52A1\u3002"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"type MockConfig = {\n  enable: ((req: IncomingMessage, res: ServerResponse) => boolean) | boolean;\n};\n\nexport const config = {\n  enable: false\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u76EE\u524D\u4EC5\u652F\u6301 ",(0,i.jsx)(n.code,{children:"enable"})," \u914D\u7F6E\uFF0C\u5F00\u53D1\u8005\u53EF\u4EE5\u901A\u8FC7\u8BE5\u914D\u7F6E\u63A7\u5236\u662F\u5426\u6267\u884C Mock\u3002"]}),"\n",(0,i.jsxs)(n.div,{className:"modern-directive note",children:[(0,i.jsx)(n.div,{className:"modern-directive-title",children:"NOTE"}),(0,i.jsx)(n.div,{className:"modern-directive-content",children:(0,i.jsxs)(n.p,{children:["\u4FEE\u6539 ",(0,i.jsx)(n.code,{children:"config"})," \u540E\u65E0\u9700\u91CD\u542F\u670D\u52A1\uFF0C\u5373\u523B\u751F\u6548\u3002\n"]})})]})]})}(r=globalThis).__RSPRESS_PAGE_META||(r.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["zh%2Fguides%2Fbasic-features%2Fmock.mdx"]={toc:[{text:"\u542F\u7528 Mock",id:"\u542F\u7528-mock",depth:2},{text:"\u7F16\u5199 Mock \u6587\u4EF6",id:"\u7F16\u5199-mock-\u6587\u4EF6",depth:2},{text:"\u8FD4\u56DE\u968F\u673A\u6570\u636E",id:"\u8FD4\u56DE\u968F\u673A\u6570\u636E",depth:2},{text:"\u5EF6\u8FDF\u54CD\u5E94",id:"\u5EF6\u8FDF\u54CD\u5E94",depth:2},{text:"\u6309\u9700\u4F7F\u7528 Mock \u670D\u52A1",id:"\u6309\u9700\u4F7F\u7528-mock-\u670D\u52A1",depth:2}],title:"\u6570\u636E\u6A21\u62DF",frontmatter:{sidebar_position:5}};var l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,o.useMDXComponents)(),e.components).wrapper;return n?(0,i.jsx)(n,(0,d._)((0,s._)({},e),{children:(0,i.jsx)(a,(0,s._)({},e))})):a(e)}}}]);