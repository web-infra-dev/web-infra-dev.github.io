(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["31073"],{84121:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return l}});var s,t=r("15169"),d=r("43932"),c=r("9880"),i=r("23169");function a(e){var n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",pre:"pre",h4:"h4",a:"a",div:"div"},(0,i.useMDXComponents)(),e.components);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:"\u7C7B\u578B\uFF1A"})," ",(0,c.jsx)(n.code,{children:"boolean | { key: string; cert: string }"})]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:"\u9ED8\u8BA4\u503C\uFF1A"})," ",(0,c.jsx)(n.code,{children:"false"})]}),"\n"]}),"\n",(0,c.jsx)(n.p,{children:"\u914D\u7F6E\u8BE5\u9009\u9879\u540E\uFF0C\u53EF\u4EE5\u5F00\u542F Dev Server \u5BF9 HTTPS \u7684\u652F\u6301\uFF0C\u540C\u65F6\u4F1A\u7981\u7528 HTTP \u670D\u52A1\u5668\u3002"}),"\n",(0,c.jsx)(n.p,{children:"\u5F00\u542F\u524D\uFF1A"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"  > Local:    http://localhost:8080/\n  > Network:  http://192.168.0.1:8080/\n"})}),"\n",(0,c.jsx)(n.p,{children:"\u5F00\u542F\u540E\uFF1A"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"  > Local:    https://localhost:8080/\n  > Network:  https://192.168.0.1:8080/\n"})}),"\n",(0,c.jsxs)(n.h4,{id:"\u81EA\u52A8\u751F\u6210\u8BC1\u4E66",children:["\u81EA\u52A8\u751F\u6210\u8BC1\u4E66",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u81EA\u52A8\u751F\u6210\u8BC1\u4E66",children:"#"})]}),"\n",(0,c.jsxs)(n.p,{children:["\u4F60\u53EF\u4EE5\u76F4\u63A5\u5C06 ",(0,c.jsx)(n.code,{children:"https"})," \u8BBE\u7F6E\u4E3A ",(0,c.jsx)(n.code,{children:"true"}),"\uFF0CBuilder \u4F1A\u57FA\u4E8E ",(0,c.jsx)(n.a,{href:"https://github.com/davewasmer/devcert",target:"_blank",rel:"noopener noreferrer",children:"devcert"})," \u6765\u81EA\u52A8\u751F\u6210 Dev Server \u6240\u9700\u7684 HTTPS \u8BC1\u4E66\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:["\u4F7F\u7528\u8FD9\u79CD\u65B9\u5F0F\u65F6\uFF0C\u4F60\u9700\u8981\u5728\u5F53\u524D\u9879\u76EE\u4E2D\u624B\u52A8\u5B89\u88C5 ",(0,c.jsx)(n.a,{href:"https://github.com/davewasmer/devcert",target:"_blank",rel:"noopener noreferrer",children:"devcert"})," \u4F9D\u8D56\uFF1A"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"# npm\nnpm install devcert@1.2.2 -D\n\n# yarn\nyarn add devcert@1.2.2 -D\n\n# pnpm\npnpm add devcert@1.2.2 -D\n"})}),"\n",(0,c.jsxs)(n.p,{children:["\u7136\u540E\u914D\u7F6E ",(0,c.jsx)(n.code,{children:"dev.https"})," \u4E3A ",(0,c.jsx)(n.code,{children:"true"})," \u5373\u53EF\uFF1A"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-ts",children:"export default {\n  dev: {\n    https: true,\n  },\n};\n"})}),"\n",(0,c.jsx)(n.p,{children:"\u8BE5\u65B9\u5F0F\u6709\u4E00\u5B9A\u5C40\u9650\u6027\uFF0C\u7531\u4E8E devcert \u76EE\u524D\u4E0D\u652F\u6301 IP addresses\uFF0C\u56E0\u6B64\u8BBF\u95EE Network \u57DF\u540D\u65F6\uFF0C\u4F1A\u9047\u5230\u300C\u60A8\u7684\u8FDE\u63A5\u4E0D\u662F\u79C1\u5BC6\u8FDE\u63A5\u300D\u7684\u95EE\u9898\u3002"}),"\n",(0,c.jsx)(n.p,{children:"\u6B64\u95EE\u9898\u7684\u89E3\u51B3\u65B9\u6CD5\u4E3A\uFF1A\u70B9\u51FB Chrome \u6D4F\u89C8\u5668\u95EE\u9898\u9875\u9762\u7684\u300C\u9AD8\u7EA7\u300D->\u300C\u7EE7\u7EED\u524D\u5F80 192.168.0.1\uFF08\u4E0D\u5B89\u5168\uFF09\u300D\u3002"}),"\n",(0,c.jsxs)(n.div,{className:"modern-directive tip",children:[(0,c.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,c.jsx)(n.div,{className:"modern-directive-content",children:(0,c.jsxs)(n.p,{children:["https \u4EE3\u7406\u81EA\u52A8\u5B89\u88C5\u8BC1\u4E66\u9700\u8981\u83B7\u53D6 root \u6743\u9650, \u8BF7\u6839\u636E\u63D0\u793A\u8F93\u5165\u5BC6\u7801\u5373\u53EF\u3002 ",(0,c.jsx)(n.strong,{children:"\u5BC6\u7801\u4EC5\u5728\u4FE1\u4EFB\u8BC1\u4E66\u65F6\u4F7F\u7528\uFF0C\u4E0D\u4F1A\u6CC4\u6F0F\u6216\u8005\u7528\u4E8E\u5176\u4ED6\u73AF\u8282"}),"\u3002\n"]})})]}),"\n",(0,c.jsxs)(n.h4,{id:"\u624B\u52A8\u8BBE\u7F6E\u8BC1\u4E66",children:["\u624B\u52A8\u8BBE\u7F6E\u8BC1\u4E66",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u624B\u52A8\u8BBE\u7F6E\u8BC1\u4E66",children:"#"})]}),"\n",(0,c.jsxs)(n.p,{children:["\u4F60\u4E5F\u53EF\u4EE5\u5728 ",(0,c.jsx)(n.code,{children:"dev.https"})," \u9009\u9879\u4E2D\u624B\u52A8\u4F20\u5165 HTTPS \u670D\u52A1\u5668\u6240\u9700\u8981\u7684\u8BC1\u4E66\u548C\u5BF9\u5E94\u7684\u79C1\u94A5\uFF0C\u8FD9\u4E2A\u53C2\u6570\u5C06\u76F4\u63A5\u4F20\u9012\u7ED9 Node.js \u4E2D https \u6A21\u5757\u7684 createServer\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:["\u5177\u4F53\u53EF\u4EE5\u53C2\u8003 ",(0,c.jsx)(n.a,{href:"https://nodejs.org/api/https.html#https_https_createserver_options_requestlistener",target:"_blank",rel:"noopener noreferrer",children:"https.createServer"}),"\u3002"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-ts",children:"import fs from 'fs';\n\nexport default {\n  dev: {\n    https: {\n      key: fs.readFileSync('certificates/private.pem'),\n      cert: fs.readFileSync('certificates/public.pem'),\n    },\n  },\n};\n"})})]})}(s=globalThis).__RSPRESS_PAGE_META||(s.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["..%2F..%2Fbuilder-doc%2Fdocs%2Fzh%2Fconfig%2Fdev%2Fhttps.md"]={toc:[{text:"\u81EA\u52A8\u751F\u6210\u8BC1\u4E66",id:"\u81EA\u52A8\u751F\u6210\u8BC1\u4E66",depth:4},{text:"\u624B\u52A8\u8BBE\u7F6E\u8BC1\u4E66",id:"\u624B\u52A8\u8BBE\u7F6E\u8BC1\u4E66",depth:4}],title:"",frontmatter:{}};var l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,i.useMDXComponents)(),e.components).wrapper;return n?(0,c.jsx)(n,(0,d._)((0,t._)({},e),{children:(0,c.jsx)(a,(0,t._)({},e))})):a(e)}},78167:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return h}});var s,t=r("15169"),d=r("43932"),c=r("9880"),i=r("23169"),a=r("84121");function l(e){var n=Object.assign({h1:"h1",a:"a",div:"div",p:"p"},(0,i.useMDXComponents)(),e.components);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(n.h1,{id:"devhttps",children:["dev.https",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#devhttps",children:"#"})]}),"\n",(0,c.jsxs)(n.div,{className:"modern-directive tip",children:[(0,c.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,c.jsx)(n.div,{className:"modern-directive-content",children:(0,c.jsxs)(n.p,{children:["\u8BE5\u914D\u7F6E\u7531 Modern.js Builder \u63D0\u4F9B\uFF0C\u66F4\u591A\u4FE1\u606F\u53EF\u53C2\u8003 ",(0,c.jsx)(n.a,{href:"https://modernjs.dev/builder/api/config-dev.html#devhttps",target:"_blank",rel:"noopener noreferrer",children:"dev.https"}),"\u3002\n"]})})]}),"\n","\n",(0,c.jsx)(a.default,{})]})}(s=globalThis).__RSPRESS_PAGE_META||(s.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["zh%2Fconfigure%2Fapp%2Fdev%2Fhttps.mdx"]={toc:[],title:"dev.https",frontmatter:{sidebar_label:"https"}};var h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,i.useMDXComponents)(),e.components).wrapper;return n?(0,c.jsx)(n,(0,d._)((0,t._)({},e),{children:(0,c.jsx)(l,(0,t._)({},e))})):l(e)}}}]);