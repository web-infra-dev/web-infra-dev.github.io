(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["31545"],{77376:function(e,n,s){"use strict";s.r(n),s.d(n,{default:function(){return d}});var r,a=s("15169"),i=s("43932"),c=s("9880"),o=s("23169");function t(e){var n=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",code:"code",pre:"pre",div:"div",ul:"ul",li:"li"},(0,o.useMDXComponents)(),e.components);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(n.h1,{id:"data-mocking",children:["Data Mocking",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#data-mocking",children:"#"})]}),"\n",(0,c.jsx)(n.p,{children:"Modern.js allows you to easily generate mock data so that the front-end can develop independently without depending on the back-end API."}),"\n",(0,c.jsxs)(n.h2,{id:"enabling-mock",children:["Enabling Mock",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#enabling-mock",children:"#"})]}),"\n",(0,c.jsxs)(n.p,{children:["By convention, when there is an ",(0,c.jsx)(n.code,{children:"index.[jt]s"})," in the ",(0,c.jsx)(n.code,{children:"config/mock/"})," directory, mock data will be automatically enabled:"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:".\n\u251C\u2500\u2500 config\n\u2502   \u2514\u2500\u2500 mock\n\u2502       \u2514\u2500\u2500 index.ts\n\u251C\u2500\u2500 src\n\u2502   \u2514\u2500\u2500 App.tsx\n\u2514\u2500\u2500 modern.config.ts\n"})}),"\n",(0,c.jsxs)(n.h2,{id:"writing-mock-files",children:["Writing Mock Files",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#writing-mock-files",children:"#"})]}),"\n",(0,c.jsxs)(n.p,{children:["The ",(0,c.jsx)(n.code,{children:"config/mock/index.ts"})," file only needs to export an object containing all Mock APIs. The properties of the object are composed of the request configuration ",(0,c.jsx)(n.code,{children:"method"})," and ",(0,c.jsx)(n.code,{children:"url"}),", and the corresponding property values can be ",(0,c.jsx)(n.code,{children:"Object"}),", ",(0,c.jsx)(n.code,{children:"Array"}),", or ",(0,c.jsx)(n.code,{children:"Function"}),":"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-js",children:"export default {\n  /* The attribute is the concrete method and request url, and the value is object or array as the result of the request */\n  'GET /api/getInfo': { data: [1, 2, 3, 4] },\n\n  /* the default method is GET */\n  '/api/getExample': { id: 1 },\n\n  /* You can use custom functions to dynamically return data, req and res are both Node.js HTTP objects. */\n  'POST /api/addInfo': (req, res, next) => {\n    res.setHeader('Access-Control-Allow-Origin', '*');\n    res.end('200');\n  },\n};\n"})}),"\n",(0,c.jsxs)(n.p,{children:["When you access ",(0,c.jsx)(n.code,{children:"http://localhost:8080/api/getInfo"}),", the API will return JSON ",(0,c.jsx)(n.code,{children:'{ "data": [1, 2, 3, 4] }'}),"."]}),"\n",(0,c.jsxs)(n.h2,{id:"return-random-data",children:["Return Random Data",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#return-random-data",children:"#"})]}),"\n",(0,c.jsxs)(n.p,{children:["Libraries such as ",(0,c.jsx)(n.a,{href:"https://github.com/nuysoft/Mock/wiki/Getting-Started",target:"_blank",rel:"noopener noreferrer",children:"Mock.js"})," can be used in ",(0,c.jsx)(n.code,{children:"config/mock/index.js"})," to generate random data. For example:"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-js",children:"const Mock = require('mockjs');\n\nmodule.exports = {\n  '/api/getInfo': Mock.mock({\n    'data|1-10': [{ name: '@cname' }],\n  }) /* => {data: [{name: \"Jack\"}, {name: \"Jim\"},  {name: \"Mary\"}} */,\n};\n"})}),"\n",(0,c.jsxs)(n.div,{className:"rspress-directive info",children:[(0,c.jsx)(n.div,{className:"rspress-directive-title",children:"Other Mock Libraries"}),(0,c.jsxs)(n.div,{className:"rspress-directive-content",children:["\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:(0,c.jsx)(n.a,{href:"https://github.com/chancejs/chancejs",target:"_blank",rel:"noopener noreferrer",children:"Chancejs"})}),"\n",(0,c.jsx)(n.li,{children:(0,c.jsx)(n.a,{href:"https://github.com/nuysoft/Mock/wiki/Getting-Started",target:"_blank",rel:"noopener noreferrer",children:"Mock"})}),"\n"]}),"\n"]})]}),"\n",(0,c.jsxs)(n.h2,{id:"delayed-response",children:["Delayed Response",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#delayed-response",children:"#"})]}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:'You can do this by using the browser\'s "weak connection simulation" feature.'}),"\n",(0,c.jsxs)(n.li,{children:["Delays can be set via ",(0,c.jsx)(n.code,{children:"setTimeout"}),", for example:"]}),"\n"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-ts",children:"export default {\n  'api/getInfo': (req, res) => {\n    setTimeout(() => {\n      res.end('delay 2000ms');\n    }, 2000);\n  },\n};\n"})}),"\n",(0,c.jsxs)(n.h2,{id:"use-mock-on-demand",children:["Use Mock On Demand",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#use-mock-on-demand",children:"#"})]}),"\n",(0,c.jsxs)(n.p,{children:["Under the ",(0,c.jsx)(n.code,{children:"config/mock/index.ts"}),", you can also export the ",(0,c.jsx)(n.code,{children:"config"})," to control the Mock service."]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-ts",children:"type MockConfig = {\n  enable: ((req: IncomingMessage, res: ServerResponse) => boolean) | boolean;\n};\n\nexport const config = {\n  enable: false\n}\n"})}),"\n",(0,c.jsxs)(n.p,{children:["Currently only the ",(0,c.jsx)(n.code,{children:"enable"})," configuration is supported, which allows developers to control whether to execute mock."]}),"\n",(0,c.jsxs)(n.div,{className:"rspress-directive note",children:[(0,c.jsx)(n.div,{className:"rspress-directive-title",children:"NOTE"}),(0,c.jsx)(n.div,{className:"rspress-directive-content",children:(0,c.jsxs)(n.p,{children:["After modifying ",(0,c.jsx)(n.code,{children:"config"}),", there is no need to restart the service, which will take effect immediately.\n"]})})]})]})}(r=globalThis).__RSPRESS_PAGE_META||(r.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["en%2Fguides%2Fbasic-features%2Fmock.mdx"]={toc:[{text:"Enabling Mock",id:"enabling-mock",depth:2},{text:"Writing Mock Files",id:"writing-mock-files",depth:2},{text:"Return Random Data",id:"return-random-data",depth:2},{text:"Delayed Response",id:"delayed-response",depth:2},{text:"Use Mock On Demand",id:"use-mock-on-demand",depth:2}],title:"Data Mocking",frontmatter:{sidebar_position:5}};var d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,o.useMDXComponents)(),e.components).wrapper;return n?(0,c.jsx)(n,(0,i._)((0,a._)({},e),{children:(0,c.jsx)(t,(0,a._)({},e))})):t(e)}}}]);