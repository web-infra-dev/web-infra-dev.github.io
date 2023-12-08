/*! For license information please see 2259.a298ab71.js.LICENSE.txt */
(self.webpackChunk_modern_js_builder_doc=self.webpackChunk_modern_js_builder_doc||[]).push([["2259"],{29498:function(e,n,s){"use strict";s.r(n),s.d(n,{default:function(){return l}});var r=s("9880"),c=s("23169"),i=s("56695"),d=s("30022");function t(e){let n=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2"},(0,c.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"security-config",children:["Security Config",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#security-config",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"\u672C\u7AE0\u8282\u63CF\u8FF0\u4E86 Builder \u4E2D\u4E0E\u5B89\u5168\u6709\u5173\u7684\u914D\u7F6E\u3002"}),"\n",(0,r.jsxs)(n.h2,{id:"securitysri",children:["security.sri",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#securitysri",children:"#"})]}),"\n","\n",(0,r.jsx)(i.default,{}),"\n",(0,r.jsxs)(n.h2,{id:"securitychecksyntax",children:["security.checkSyntax",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#securitychecksyntax",children:"#"})]}),"\n","\n",(0,r.jsx)(d.default,{})]})}function h(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,c.useMDXComponents)(),e.components);return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(t,{...e})}):t(e)}var l=h;h.__RSPRESS_PAGE_META={},h.__RSPRESS_PAGE_META["zh%2Fapi%2Fconfig-security.mdx"]={toc:[{text:"security.sri",id:"securitysri",depth:2},{text:"security.checkSyntax",id:"securitychecksyntax",depth:2}],title:"Security Config",frontmatter:{extractApiHeaders:[2]}}},30022:function(e,n,s){"use strict";s.r(n),s.d(n,{default:function(){return t}});var r=s("9880"),c=s("23169");function i(e){let n=Object.assign({ul:"ul",li:"li",strong:"strong",pre:"pre",code:"code",p:"p",h3:"h3",a:"a",div:"div",h4:"h4"},(0,c.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"\u7C7B\u578B\uFF1A"})}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"type CheckSyntax =\n  | boolean\n  | {\n      targets?: string[];\n      exclude?: RegExp | RegExp[];\n      ecmaVersion?: EcmaVersion;\n    };\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"\u9ED8\u8BA4\u503C\uFF1A"})," ",(0,r.jsx)(n.code,{children:"false"})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"\u7528\u4E8E\u5206\u6790\u6784\u5EFA\u4EA7\u7269\u4E2D\u662F\u5426\u5B58\u5728\u5F53\u524D\u6D4F\u89C8\u5668\u8303\u56F4\u4E0B\u4E0D\u517C\u5BB9\u7684\u9AD8\u7EA7\u8BED\u6CD5\u3002\u5982\u679C\u5B58\u5728\uFF0C\u4F1A\u5C06\u8BE6\u7EC6\u4FE1\u606F\u6253\u5370\u5728\u7EC8\u7AEF\u3002"}),"\n",(0,r.jsxs)(n.h3,{id:"\u542F\u7528\u68C0\u6D4B",children:["\u542F\u7528\u68C0\u6D4B",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u542F\u7528\u68C0\u6D4B",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["\u4F60\u53EF\u4EE5\u5C06 ",(0,r.jsx)(n.code,{children:"checkSyntax"})," \u8BBE\u7F6E\u4E3A ",(0,r.jsx)(n.code,{children:"true"})," \u6765\u542F\u7528\u8BED\u6CD5\u68C0\u6D4B\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"export default {\n  security: {\n    checkSyntax: true,\n  },\n};\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u5F53\u4F60\u5F00\u542F ",(0,r.jsx)(n.code,{children:"checkSyntax"})," \u540E\uFF0CBuilder \u4F1A\u5728\u751F\u4EA7\u73AF\u5883\u6784\u5EFA\u65F6\u8FDB\u884C\u68C0\u6D4B\uFF0C\u5F53\u5728\u6784\u5EFA\u4EA7\u7269\u4E2D\u68C0\u6D4B\u5230\u4E0D\u517C\u5BB9\u7684\u9AD8\u7EA7\u8BED\u6CD5\u540E\uFF0C\u4F1A\u5C06\u9519\u8BEF\u65E5\u5FD7\u6253\u5370\u5728\u7EC8\u7AEF\uFF0C\u5E76\u9000\u51FA\u5F53\u524D\u6784\u5EFA\u6D41\u7A0B\u3002"]}),"\n",(0,r.jsxs)(n.h3,{id:"\u9519\u8BEF\u65E5\u5FD7",children:["\u9519\u8BEF\u65E5\u5FD7",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u9519\u8BEF\u65E5\u5FD7",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"\u9519\u8BEF\u65E5\u5FD7\u7684\u683C\u5F0F\u5982\u4E0B\u6240\u793A\uFF0C\u5305\u542B\u4EE3\u7801\u6765\u6E90\u6587\u4EF6\u3001\u4EA7\u7269\u4F4D\u7F6E\u3001\u9519\u8BEF\u539F\u56E0\u3001\u6E90\u4EE3\u7801\u7B49\u4FE1\u606F\uFF1A"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"error   [Syntax Checker] Find some syntax errors after production build:\n\n  Error 1\n  source:  /node_modules/foo/index.js:1:0\n  output:  /dist/static/js/main.3f7a4d7e.js:2:39400\n  reason:  Unexpected token (1:178)\n  code:\n     9 |\n    10 | var b = 2;\n    11 |\n  > 12 | console.log(() => {\n    13 |   return a + b;\n    14 | });\n    15 |\n"})}),"\n",(0,r.jsxs)(n.div,{className:"rspress-directive tip",children:[(0,r.jsx)(n.div,{className:"rspress-directive-title",children:"TIP"}),(0,r.jsxs)(n.div,{className:"rspress-directive-content",children:[(0,r.jsxs)(n.p,{children:["\u76EE\u524D\u8BED\u6CD5\u68C0\u6D4B\u662F\u57FA\u4E8E AST parser \u6765\u5B9E\u73B0\u7684\uFF0C\u6BCF\u6B21\u68C0\u6D4B\u65F6\uFF0C\u53EA\u80FD\u627E\u51FA\u6587\u4EF6\u4E2D\u7684\u7B2C\u4E00\u4E2A\u4E0D\u517C\u5BB9\u8BED\u6CD5\u3002\u5982\u679C\u4E00\u4E2A\u6587\u4EF6\u4E2D\u5B58\u5728\u591A\u4E2A\u4E0D\u517C\u5BB9\u8BED\u6CD5\uFF0C\u4F60\u9700\u8981\u4FEE\u590D\u5DF2\u53D1\u73B0\u7684\u8BED\u6CD5\uFF0C\u5E76\u91CD\u65B0\u6267\u884C\u68C0\u6D4B\u3002",(0,r.jsx)(n.strong,{children:"output.disableMinimize"})," \u8BBE\u7F6E\u4E3A true \u540E\u518D\u91CD\u65B0\u6784\u5EFA\u3002\n"]}),(0,r.jsx)(n.p,{children:"\u5982\u679C\u65E5\u5FD7\u4E2D\u6CA1\u6709\u663E\u793A\u5BF9\u5E94\u7684\u6E90\u7801\u4F4D\u7F6E\uFF0C\u53EF\u4EE5\u5C1D\u8BD5\u5C06 "})]})]}),"\n",(0,r.jsxs)(n.h3,{id:"\u89E3\u51B3\u65B9\u6CD5",children:["\u89E3\u51B3\u65B9\u6CD5",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u89E3\u51B3\u65B9\u6CD5",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"\u5F53\u68C0\u6D4B\u5230\u8BED\u6CD5\u9519\u8BEF\u540E\uFF0C\u4F60\u53EF\u4EE5\u901A\u8FC7\u4EE5\u4E0B\u65B9\u5F0F\u6765\u5904\u7406\uFF1A"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u5982\u679C\u4F60\u5E0C\u671B\u964D\u7EA7\u8BE5\u8BED\u6CD5\uFF0C\u4EE5\u4FDD\u8BC1\u4EE3\u7801\u5177\u5907\u826F\u597D\u7684\u517C\u5BB9\u6027\uFF0C\u53EF\u4EE5\u901A\u8FC7 ",(0,r.jsx)(n.code,{children:"source.include"})," \u914D\u7F6E\u6765\u7F16\u8BD1\u76F8\u5E94\u7684\u6A21\u5757\u3002"]}),"\n",(0,r.jsx)(n.li,{children:"\u5982\u679C\u4F60\u4E0D\u5E0C\u671B\u964D\u7EA7\u8BE5\u8BED\u6CD5\uFF0C\u53EF\u4EE5\u8C03\u6574\u9879\u76EE\u7684 browserslist \u8303\u56F4\uFF0C\u8C03\u6574\u81F3\u4E0E\u8BE5\u8BED\u6CD5\u76F8\u5339\u914D\u7684\u8303\u56F4\u3002"}),"\n",(0,r.jsxs)(n.li,{children:["\u5982\u679C\u4F60\u4E0D\u5E0C\u671B\u5BF9\u67D0\u4E9B\u4EA7\u7269\u8FDB\u884C\u8BED\u6CD5\u68C0\u67E5\uFF0C\u53EF\u7528 ",(0,r.jsx)(n.code,{children:"checkSyntax.exclude"})," \u914D\u7F6E\u6392\u9664\u8981\u68C0\u67E5\u7684\u6587\u4EF6\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(n.h3,{id:"\u914D\u7F6E\u9879",children:["\u914D\u7F6E\u9879",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u914D\u7F6E\u9879",children:"#"})]}),"\n",(0,r.jsxs)(n.h4,{id:"checksyntaxtargets",children:["checkSyntax.targets",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#checksyntaxtargets",children:"#"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"\u7C7B\u578B\uFF1A"})," ",(0,r.jsx)(n.code,{children:"string[]"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"\u9ED8\u8BA4\u503C\uFF1A"})," ",(0,r.jsx)(n.code,{children:"\u5F53\u524D\u9879\u76EE\u7684 browserslist \u914D\u7F6E"})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"targets"})," \u8868\u793A\u9879\u76EE\u7684\u76EE\u6807\u6D4F\u89C8\u5668\u8303\u56F4\uFF0C\u5B83\u7684\u503C\u4E3A\u6807\u51C6\u7684 browserslist \u6570\u7EC4\uFF0C\u5982\u679C\u4F60\u4E0D\u4E86\u89E3 browserslist \u7684\u7528\u6CD5\uFF0C\u8BF7\u53C2\u8003 ",(0,r.jsx)(n.a,{href:"https://modernjs.dev/builder/guide/advanced/browser-compatibility.html",target:"_blank",rel:"noopener noreferrer",children:"\u300C\u8BBE\u7F6E\u6D4F\u89C8\u5668\u8303\u56F4\u300D"}),"\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["Builder \u4F1A\u8BFB\u53D6 ",(0,r.jsx)(n.code,{children:"targets"})," \u7684\u503C\uFF0C\u5E76\u81EA\u52A8\u63A8\u5BFC\u51FA\u6784\u5EFA\u4EA7\u7269\u4E2D\u53EF\u4EE5\u4F7F\u7528\u7684\u6700\u4F4E ECMAScript \u8BED\u6CD5\u7248\u672C\uFF0C\u6BD4\u5982 ",(0,r.jsx)(n.code,{children:"ES5"})," \u6216 ",(0,r.jsx)(n.code,{children:"ES6"}),"\u3002"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"\u793A\u4F8B\uFF1A"})}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"\u6BD4\u5982\uFF0C\u9879\u76EE\u4E2D\u9700\u8981\u517C\u5BB9\u7684\u6D4F\u89C8\u5668\u4E3A Chrome 53 \u4EE5\u4E0A\u7248\u672C\uFF0C\u53EF\u4EE5\u6DFB\u52A0\u4EE5\u4E0B\u8BBE\u7F6E\uFF1A"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"export default {\n  security: {\n    checkSyntax: {\n      targets: ['chrome >= 53'],\n    },\n  },\n};\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Builder \u4F1A\u63A8\u5BFC\u51FA ",(0,r.jsx)(n.code,{children:"chrome >= 53"})," \u53EF\u4EE5\u4F7F\u7528\u7684 ECMAScript \u8BED\u6CD5\u7248\u672C\u4E3A ",(0,r.jsx)(n.code,{children:"ES6"}),"\uFF0C\u5F53\u6784\u5EFA\u4EA7\u7269\u4E2D\u5305\u542B ",(0,r.jsx)(n.code,{children:"es2016"})," \u6216\u66F4\u9AD8\u7684\u8BED\u6CD5\u65F6\uFF0C\u5C31\u4F1A\u89E6\u53D1\u8BED\u6CD5\u9519\u8BEF\u63D0\u793A\u3002"]}),"\n",(0,r.jsxs)(n.div,{className:"rspress-directive tip",children:[(0,r.jsx)(n.div,{className:"rspress-directive-title",children:"TIP"}),(0,r.jsx)(n.div,{className:"rspress-directive-content",children:(0,r.jsxs)(n.p,{children:["\u8BF7\u7559\u610F\uFF0CBuilder \u4E0D\u652F\u6301\u57FA\u4E8E ",(0,r.jsx)(n.code,{children:"targets"})," \u6765\u81EA\u52A8\u5206\u6790 ES6 \u4EE5\u4E0A\u7684\u8BED\u6CD5\u7248\u672C\uFF0C\u5982\u679C\u4F60\u7684\u6784\u5EFA\u4EA7\u7269\u517C\u5BB9\u7684\u8BED\u6CD5\u7248\u672C\u8D85\u8FC7 ES6\uFF0C\u8BF7\u901A\u8FC7 ",(0,r.jsx)(n.code,{children:"checkSyntax.ecmaVersion"})," \u8FDB\u884C\u8BBE\u7F6E\u3002\n"]})})]}),"\n",(0,r.jsxs)(n.h4,{id:"checksyntaxecmaversion",children:["checkSyntax.ecmaVersion",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#checksyntaxecmaversion",children:"#"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"\u7C7B\u578B\uFF1A"})," ",(0,r.jsx)(n.code,{children:"3 | 5 | 6 | 2015 | 2016 | 2017 | 2018 | 2019 | 2020 | 2021 | 2022 | 'latest'"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"\u9ED8\u8BA4\u503C\uFF1A"})," ",(0,r.jsx)(n.code,{children:"\u57FA\u4E8E targets \u81EA\u52A8\u5206\u6790"})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"ecmaVersion"})," \u8868\u793A\u6784\u5EFA\u4EA7\u7269\u4E2D\u53EF\u4EE5\u4F7F\u7528\u7684\u6700\u4F4E ECMAScript \u8BED\u6CD5\u7248\u672C\uFF0C",(0,r.jsx)(n.code,{children:"ecmaVersion"})," \u7684\u4F18\u5148\u7EA7\u9AD8\u4E8E ",(0,r.jsx)(n.code,{children:"targets"}),"\u3002"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"\u793A\u4F8B\uFF1A"})}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["\u6BD4\u5982\uFF0C\u6784\u5EFA\u4EA7\u7269\u4E2D\u53EF\u4EE5\u4F7F\u7528\u7684\u6700\u4F4E ECMAScript \u8BED\u6CD5\u7248\u672C\u4E3A ",(0,r.jsx)(n.code,{children:"ES2020"}),"\uFF0C\u53EF\u4EE5\u6DFB\u52A0\u4EE5\u4E0B\u8BBE\u7F6E\uFF1A"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"export default {\n  security: {\n    checkSyntax: {\n      ecmaVersion: 2020,\n    },\n  },\n};\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u6B64\u65F6\uFF0C\u6784\u5EFA\u4EA7\u7269\u4E2D\u53EF\u4EE5\u5305\u542B ",(0,r.jsx)(n.code,{children:"ES2020"})," \u652F\u6301\u7684\u6240\u6709\u8BED\u6CD5\uFF0C\u6BD4\u5982 optional chaining\u3002"]}),"\n",(0,r.jsxs)(n.h4,{id:"checksyntaxexclude",children:["checkSyntax.exclude",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#checksyntaxexclude",children:"#"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"\u7C7B\u578B\uFF1A"})," ",(0,r.jsx)(n.code,{children:"RegExp | RegExp[]"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"\u9ED8\u8BA4\u503C\uFF1A"})," ",(0,r.jsx)(n.code,{children:"undefined"})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"exclude"})," \u7528\u4E8E\u5728\u68C0\u6D4B\u65F6\u6392\u9664\u4E00\u90E8\u5206\u6587\u4EF6\uFF0C\u4F60\u53EF\u4EE5\u4F20\u5165\u4E00\u4E2A\u6216\u591A\u4E2A\u6B63\u5219\u8868\u8FBE\u5F0F\u6765\u5339\u914D\u6E90\u6587\u4EF6\u7684\u8DEF\u5F84\uFF0C\u7B26\u5408\u6B63\u5219\u7684\u6587\u4EF6\u5C06\u4F1A\u88AB\u5FFD\u7565\uFF0C\u4E0D\u4F1A\u89E6\u53D1\u8BED\u6CD5\u68C0\u6D4B\u3002"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"\u793A\u4F8B\uFF1A"})}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["\u6BD4\u5982\uFF0C\u5FFD\u7565 ",(0,r.jsx)(n.code,{children:"node_modules/foo"})," \u76EE\u5F55\u4E0B\u7684\u6587\u4EF6\uFF1A"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"export default {\n  security: {\n    checkSyntax: {\n      exclude: /node_modules\\/foo/,\n    },\n  },\n};\n"})})]})}function d(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,c.useMDXComponents)(),e.components);return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}var t=d;d.__RSPRESS_PAGE_META={},d.__RSPRESS_PAGE_META["zh%2Fconfig%2Fsecurity%2FcheckSyntax.md"]={toc:[{text:"\u542F\u7528\u68C0\u6D4B",id:"\u542F\u7528\u68C0\u6D4B",depth:3},{text:"\u9519\u8BEF\u65E5\u5FD7",id:"\u9519\u8BEF\u65E5\u5FD7",depth:3},{text:"\u89E3\u51B3\u65B9\u6CD5",id:"\u89E3\u51B3\u65B9\u6CD5",depth:3},{text:"\u914D\u7F6E\u9879",id:"\u914D\u7F6E\u9879",depth:3},{text:"checkSyntax.targets",id:"checksyntaxtargets",depth:4},{text:"checkSyntax.ecmaVersion",id:"checksyntaxecmaversion",depth:4},{text:"checkSyntax.exclude",id:"checksyntaxexclude",depth:4}],title:"",frontmatter:{}}},56695:function(e,n,s){"use strict";s.r(n),s.d(n,{default:function(){return t}});var r=s("9880"),c=s("23169");function i(e){let n=Object.assign({ul:"ul",li:"li",strong:"strong",pre:"pre",code:"code",p:"p",a:"a",h4:"h4",h3:"h3"},(0,c.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"\u7C7B\u578B\uFF1A"})}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"type SRIOptions =\n  | {\n      hashFuncNames?: string[];\n      enabled?: 'auto' | boolean;\n      hashLoading?: 'eager' | 'lazy';\n    }\n  | boolean;\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"\u9ED8\u8BA4\u503C\uFF1A"})," ",(0,r.jsx)(n.code,{children:"undefined"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"\u6253\u5305\u5DE5\u5177\uFF1A"})," ",(0,r.jsx)(n.code,{children:"\u4EC5\u652F\u6301 webpack"})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["\u4E3A HTML \u6240\u5F15\u5165\u7684\u5B50\u8D44\u6E90\u6DFB\u52A0\u5B8C\u6574\u6027\u5C5E\u6027 \u2014\u2014 ",(0,r.jsx)(n.code,{children:"integrity"}),"\uFF0C\u4F7F\u6D4F\u89C8\u5668\u80FD\u591F\u9A8C\u8BC1\u5F15\u5165\u8D44\u6E90\u7684\u5B8C\u6574\u6027\uFF0C\u4EE5\u6B64\u9632\u6B62\u4E0B\u8F7D\u7684\u8D44\u6E90\u88AB\u7BE1\u6539\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u542F\u52A8\u8BE5\u9009\u9879\u540E\u4F1A\u5C06 webpack \u7684 ",(0,r.jsx)(n.a,{href:"https://webpack.docschina.org/configuration/output/#outputcrossoriginloading",target:"_blank",rel:"noopener noreferrer",children:"output.crossOriginLoading"})," \u914D\u7F6E\u9879\u8BBE\u7F6E\u4E3A ",(0,r.jsx)(n.code,{children:"anonymous"}),"\u3002"]}),"\n",(0,r.jsxs)(n.h4,{id:"sri-\u4ECB\u7ECD",children:["SRI \u4ECB\u7ECD",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#sri-\u4ECB\u7ECD",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"\u5B50\u8D44\u6E90\u5B8C\u6574\u6027 Subresource Integrity\uFF08SRI\uFF09\u662F\u4E13\u95E8\u7528\u6765\u6821\u9A8C\u8D44\u6E90\u7684\u4E00\u79CD\u65B9\u6848\uFF0C\u5B83\u8BFB\u53D6\u8D44\u6E90\u6807\u7B7E\u4E2D\u7684 integrity \u5C5E\u6027\uFF0C\u5C06\u5176\u4E2D\u7684\u4FE1\u606F\u6458\u8981\u503C\uFF0C\u548C\u8D44\u6E90\u5B9E\u9645\u7684\u4FE1\u606F\u6458\u8981\u503C\u8FDB\u884C\u5BF9\u6BD4\uFF0C\u5982\u679C\u53D1\u73B0\u65E0\u6CD5\u5339\u914D\uFF0C\u90A3\u4E48\u6D4F\u89C8\u5668\u5C31\u4F1A\u62D2\u7EDD\u6267\u884C\u8D44\u6E90\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u5BF9\u4E8E script \u6807\u7B7E\u6765\u8BF4\uFF0C\u7ED3\u679C\u4E3A\u62D2\u7EDD\u6267\u884C\u5176\u4E2D\u7684\u4EE3\u7801\uFF1B\u5BF9\u4E8E CSS link \u6765\u8BF4\uFF0C\u7ED3\u679C\u4E3A\u4E0D\u52A0\u8F7D\u5176\u4E2D\u7684\u6837\u5F0F\u3002"}),"\n",(0,r.jsxs)(n.p,{children:["\u5173\u4E8E SRI \u7684\u66F4\u591A\u5185\u5BB9\uFF0C\u53EF\u4EE5\u67E5\u770B ",(0,r.jsx)(n.a,{href:"https://developer.mozilla.org/zh-CN/docs/Web/Security/Subresource_Integrity",target:"_blank",rel:"noopener noreferrer",children:"Subresource Integrity - MDN"}),"\u3002"]}),"\n",(0,r.jsxs)(n.h3,{id:"\u793A\u4F8B",children:["\u793A\u4F8B",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u793A\u4F8B",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u4E0D\u4F1A\u5F00\u542F ",(0,r.jsx)(n.code,{children:"SRI"}),"\uFF0C\u5F53\u5F00\u542F\u4E4B\u540E\u5B83\u7684\u9ED8\u8BA4\u914D\u7F6E\u5982\u4E0B\uFF1A"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'{\n  hashFuncNames: [\'sha384\'];\n  enabled: "auto",\n  hashLoading: "eager",\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:"\u4F60\u53EF\u4EE5\u6309\u7167\u4F60\u81EA\u5DF1\u7684\u9700\u6C42\u81EA\u5B9A\u4E49\u914D\u7F6E\u9879:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"export default {\n  security: {\n    sri: {\n      hashFuncNames: ['sha-256'],\n      enabled: true,\n      hashLoading: 'lazy',\n    },\n  },\n};\n"})})]})}function d(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,c.useMDXComponents)(),e.components);return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}var t=d;d.__RSPRESS_PAGE_META={},d.__RSPRESS_PAGE_META["zh%2Fconfig%2Fsecurity%2Fsri.md"]={toc:[{text:"SRI \u4ECB\u7ECD",id:"sri-\u4ECB\u7ECD",depth:4},{text:"\u793A\u4F8B",id:"\u793A\u4F8B",depth:3}],title:"",frontmatter:{}}}}]);