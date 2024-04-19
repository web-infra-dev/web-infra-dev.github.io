/*! For license information please see 49498.72d35916.js.LICENSE.txt */
(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["49498"],{34238:function(e,n,r){"use strict";r.r(n);var s=r("39980"),d=r("9580"),i=r("69553");function c(e){let n=Object.assign({h1:"h1",a:"a",ul:"ul",li:"li",strong:"strong",code:"code",p:"p",h3:"h3",pre:"pre",img:"img",div:"div"},(0,d.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h1,{id:"devproxy",children:["dev.proxy",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#devproxy",children:"#"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"\u7C7B\u578B\uFF1A"})," ",(0,s.jsx)(n.code,{children:"string | Object"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"\u9ED8\u8BA4\u503C\uFF1A"})," ",(0,s.jsx)(n.code,{children:"null"})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["\u8BE5\u9009\u9879\u7528\u4E8E\u5728\u5F00\u53D1\u73AF\u5883\u4E0B\u542F\u7528\u57FA\u4E8E ",(0,s.jsx)(n.a,{href:"https://wproxy.org/whistle/",target:"_blank",rel:"noopener noreferrer",children:"whistle"})," \u7684\u5168\u5C40\u4EE3\u7406\uFF0C\u53EF\u4EE5\u7528\u6765\u67E5\u770B\u3001\u4FEE\u6539 HTTP/HTTPS \u8BF7\u6C42\u3001\u54CD\u5E94\u3001\u4E5F\u53EF\u4EE5\u7528\u4F5C\u4EE3\u7406\u670D\u52A1\u5668\u3002"]}),"\n",(0,s.jsxs)(n.h3,{id:"\u6CE8\u518C\u63D2\u4EF6",children:["\u6CE8\u518C\u63D2\u4EF6",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u6CE8\u518C\u63D2\u4EF6",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["\u4F7F\u7528\u8BE5\u9009\u9879\u524D\uFF0C\u4F60\u9700\u8981\u63D0\u524D\u5B89\u88C5\u548C\u6CE8\u518C ",(0,s.jsx)(n.code,{children:"@modern-js/plugin-proxy"})," \u63D2\u4EF6\uFF1A"]}),"\n","\n",(0,s.jsx)(i.PackageManagerTabs,{command:"add @modern-js/plugin-proxy -D"}),"\n",(0,s.jsxs)(n.p,{children:["\u5B89\u88C5\u5B8C\u6210\u540E\uFF0C\u5728 ",(0,s.jsx)(n.code,{children:"modern.config.ts"})," \u6587\u4EF6\u4E2D\u6CE8\u518C\u63D2\u4EF6\uFF1A"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import { appTools, defineConfig } from '@modern-js/app-tools';\nimport { proxyPlugin } from '@modern-js/plugin-proxy';\n\nexport default defineConfig({\n  plugins: [appTools(), proxyPlugin()],\n});\n"})}),"\n",(0,s.jsxs)(n.h3,{id:"object-\u7C7B\u578B",children:["Object \u7C7B\u578B",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#object-\u7C7B\u578B",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"dev.proxy"})," \u7684\u503C\u4E3A ",(0,s.jsx)(n.code,{children:"Object"})," \u65F6\uFF0C\u5BF9\u8C61\u7684 ",(0,s.jsx)(n.code,{children:"key"})," \u5BF9\u5E94\u5339\u914D\u7684 ",(0,s.jsx)(n.code,{children:"pattern"}),"\uFF0C\u5BF9\u8C61\u7684 ",(0,s.jsx)(n.code,{children:"value"})," \u5BF9\u5E94\u5339\u914D\u7684 ",(0,s.jsx)(n.code,{children:"target"}),"\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"\u4F8B\u5982\uFF1A"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"export default defineConfig({\n  dev: {\n    proxy: {\n      'https://www.baidu.com': 'https://google.com.hk',\n      //\u53EF\u4EE5\u901A\u8FC7 file \u534F\u8BAE\u76F4\u63A5\u8FD4\u56DE\u9759\u6001\u6587\u4EF6\u3002\n      'https://example.com/api': 'file://./data.json',\n    },\n  },\n});\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u8BF7\u53C2\u8003 ",(0,s.jsx)(n.a,{href:"https://wproxy.org/whistle/pattern.html",target:"_blank",rel:"noopener noreferrer",children:"whistle - \u5339\u914D\u6A21\u5F0F"})," \u6765\u4E86\u89E3\u8BE6\u7EC6\u7528\u6CD5\u3002"]}),"\n",(0,s.jsxs)(n.h3,{id:"string-\u7C7B\u578B",children:["String \u7C7B\u578B",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#string-\u7C7B\u578B",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"dev.proxy"})," \u7684\u503C\u4E3A ",(0,s.jsx)(n.code,{children:"string"})," \u65F6\uFF0C \u53EF\u4EE5\u7528\u6765\u6307\u5B9A\u5355\u72EC\u7684\u4EE3\u7406\u6587\u4EF6\uFF0C\u4F8B\u5982\uFF1A"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"export default defineConfig({\n  dev: {\n    proxy: './proxy.js',\n  },\n});\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",meta:'title="proxy.js"',children:"module.exports = {\n  name: 'my-app',\n  rules: `\n    ^example.com:8080/api/***   http://localhost:3001/api/$\n  `,\n};\n"})}),"\n",(0,s.jsxs)(n.h3,{id:"\u542F\u52A8\u4EE3\u7406",children:["\u542F\u52A8\u4EE3\u7406",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u542F\u52A8\u4EE3\u7406",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["\u6267\u884C ",(0,s.jsx)(n.code,{children:"dev"}),", \u63D0\u793A\u5982\u4E0B\u65F6\uFF0C\u5373\u4EE3\u7406\u670D\u52A1\u5668\u542F\u52A8\u6210\u529F\uFF1A"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"  Local:    http://localhost:8080/\n  Network:  http://192.168.0.1:8080/\n\ninfo      Starting proxy server.....\nsuccess   Proxy server start on localhost:8899\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u8BBF\u95EE ",(0,s.jsx)(n.code,{children:"localhost:8899"}),", \u53EF\u4EE5\u5728 UI \u754C\u9762\u4E0A\u67E5\u770B Network \u4EE5\u53CA\u914D\u7F6E\u4EE3\u7406\u89C4\u5219\uFF1A"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/aphqeh7uhohpquloj/modern-js/docs/dev-proxy.png",alt:"proxy ui \u754C\u9762"})}),"\n",(0,s.jsxs)(n.div,{className:"rspress-directive info",children:[(0,s.jsx)(n.div,{className:"rspress-directive-title",children:"INFO"}),(0,s.jsxs)(n.div,{className:"rspress-directive-content",children:[(0,s.jsxs)(n.p,{children:["https \u4EE3\u7406\u81EA\u52A8\u5B89\u88C5\u8BC1\u4E66\u9700\u8981\u83B7\u53D6 root \u6743\u9650, \u8BF7\u6839\u636E\u63D0\u793A\u8F93\u5165\u5BC6\u7801\u5373\u53EF\u3002",(0,s.jsx)(n.strong,{children:"\u5BC6\u7801\u4EC5\u5728\u4FE1\u4EFB\u8BC1\u4E66\u65F6\u4F7F\u7528\uFF0C\u4E0D\u4F1A\u6CC4\u6F0F\u6216\u8005\u7528\u4E8E\u5176\u4ED6\u73AF\u8282"}),"\u3002"]}),"\n"]})]})]})}function t(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,d.ah)(),e.components);return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}n.default=t,t.__RSPRESS_PAGE_META={},t.__RSPRESS_PAGE_META["zh%2Fconfigure%2Fapp%2Fdev%2Fproxy.mdx"]={toc:[{text:"\u6CE8\u518C\u63D2\u4EF6",id:"\u6CE8\u518C\u63D2\u4EF6",depth:3},{text:"Object \u7C7B\u578B",id:"object-\u7C7B\u578B",depth:3},{text:"String \u7C7B\u578B",id:"string-\u7C7B\u578B",depth:3},{text:"\u542F\u52A8\u4EE3\u7406",id:"\u542F\u52A8\u4EE3\u7406",depth:3}],title:"dev.proxy",frontmatter:{sidebar_label:"proxy"}}}}]);