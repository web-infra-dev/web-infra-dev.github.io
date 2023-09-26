(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["95021"],{99572:function(s,e,n){"use strict";n.r(e),n.d(e,{default:function(){return l}});var r,d=n("15169"),a=n("43932"),c=n("9880"),i=n("23169");function o(s){var e=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",pre:"pre",p:"p",a:"a",h3:"h3",h4:"h4"},(0,i.useMDXComponents)(),s.components);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)(e.strong,{children:"\u7C7B\u578B\uFF1A"})," ",(0,c.jsx)(e.code,{children:"Object | Function"})]}),"\n",(0,c.jsx)(e.li,{children:(0,c.jsx)(e.strong,{children:"\u9ED8\u8BA4\u503C\uFF1A"})}),"\n"]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-js",children:"const defaultOptions = {\n  // \u9ED8\u8BA4\u5728\u5F00\u53D1\u73AF\u5883\u4E0B\u542F\u7528 CSS \u7684 Source Map\n  sourceMap: isDev,\n};\n"})}),"\n",(0,c.jsxs)(e.p,{children:["\u4F60\u53EF\u4EE5\u901A\u8FC7 ",(0,c.jsx)(e.code,{children:"tools.sass"})," \u4FEE\u6539 ",(0,c.jsx)(e.a,{href:"https://github.com/webpack-contrib/sass-loader",target:"_blank",rel:"noopener noreferrer",children:"sass-loader"})," \u7684\u914D\u7F6E\u3002"]}),"\n",(0,c.jsxs)(e.h3,{id:"object-\u7C7B\u578B",children:["Object \u7C7B\u578B",(0,c.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#object-\u7C7B\u578B",children:"#"})]}),"\n",(0,c.jsxs)(e.p,{children:["\u5F53 ",(0,c.jsx)(e.code,{children:"tools.sass"})," \u7684\u503C\u4E3A ",(0,c.jsx)(e.code,{children:"Object"})," \u7C7B\u578B\u65F6\uFF0C\u4F1A\u4E0E\u9ED8\u8BA4\u914D\u7F6E\u901A\u8FC7 Object.assign \u8FDB\u884C\u6D45\u5C42\u5408\u5E76\uFF0C\u503C\u5F97\u6CE8\u610F\u7684\u662F\uFF0C",(0,c.jsx)(e.code,{children:"sassOptions"})," \u4F1A\u901A\u8FC7 deepMerge \u8FDB\u884C\u6DF1\u5C42\u5408\u5E76\u3002"]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-js",children:"export default {\n  tools: {\n    sass: {\n      sourceMap: true,\n    },\n  },\n};\n"})}),"\n",(0,c.jsxs)(e.h3,{id:"function-\u7C7B\u578B",children:["Function \u7C7B\u578B",(0,c.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#function-\u7C7B\u578B",children:"#"})]}),"\n",(0,c.jsxs)(e.p,{children:["\u5F53 ",(0,c.jsx)(e.code,{children:"tools.sass"})," \u4E3A Function \u7C7B\u578B\u65F6\uFF0C\u9ED8\u8BA4\u914D\u7F6E\u4F5C\u4E3A\u7B2C\u4E00\u4E2A\u53C2\u6570\u4F20\u5165\uFF0C\u53EF\u4EE5\u76F4\u63A5\u4FEE\u6539\u914D\u7F6E\u5BF9\u8C61\uFF0C\u4E5F\u53EF\u4EE5\u8FD4\u56DE\u4E00\u4E2A\u503C\u4F5C\u4E3A\u6700\u7EC8\u7ED3\u679C\uFF0C\u7B2C\u4E8C\u4E2A\u53C2\u6570\u63D0\u4F9B\u4E86\u4E00\u4E9B\u53EF\u4EE5\u76F4\u63A5\u8C03\u7528\u7684\u5DE5\u5177\u51FD\u6570\uFF1A"]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-js",children:"export default {\n  tools: {\n    sass(config) {\n      // \u4FEE\u6539 sourceMap \u914D\u7F6E\n      config.additionalData = async (content, loaderContext) => {\n        // ...\n      };\n    },\n  },\n};\n"})}),"\n",(0,c.jsxs)(e.h3,{id:"\u4FEE\u6539-sass-\u7248\u672C",children:["\u4FEE\u6539 Sass \u7248\u672C",(0,c.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#\u4FEE\u6539-sass-\u7248\u672C",children:"#"})]}),"\n",(0,c.jsxs)(e.p,{children:["\u5728\u67D0\u4E9B\u573A\u666F\u4E0B\uFF0C\u5982\u679C\u4F60\u9700\u8981\u4F7F\u7528\u7279\u5B9A\u7684 Sass \u7248\u672C\uFF0C\u800C\u4E0D\u662F\u4F7F\u7528 Builder \u5185\u7F6E\u7684 Dart Sass v1\uFF0C\u53EF\u4EE5\u5728\u9879\u76EE\u4E2D\u5B89\u88C5\u9700\u8981\u4F7F\u7528\u7684 Sass \u7248\u672C\uFF0C\u5E76\u901A\u8FC7 ",(0,c.jsx)(e.code,{children:"sass-loader"})," \u7684 ",(0,c.jsx)(e.code,{children:"implementation"})," \u9009\u9879\u8BBE\u7F6E\u3002"]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-js",children:"export default {\n  tools: {\n    sass: {\n      implementation: require('sass'),\n    },\n  },\n};\n"})}),"\n",(0,c.jsxs)(e.h3,{id:"\u5DE5\u5177\u51FD\u6570",children:["\u5DE5\u5177\u51FD\u6570",(0,c.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#\u5DE5\u5177\u51FD\u6570",children:"#"})]}),"\n",(0,c.jsxs)(e.h4,{id:"addexcludes",children:["addExcludes",(0,c.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#addexcludes",children:"#"})]}),"\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)(e.strong,{children:"\u7C7B\u578B\uFF1A"})," ",(0,c.jsx)(e.code,{children:"(excludes: RegExp | RegExp[]) => void"})]}),"\n"]}),"\n",(0,c.jsxs)(e.p,{children:["\u7528\u6765\u6307\u5B9A ",(0,c.jsx)(e.code,{children:"sass-loader"})," \u4E0D\u7F16\u8BD1\u54EA\u4E9B\u6587\u4EF6\uFF0C\u4F60\u53EF\u4EE5\u4F20\u5165\u4E00\u4E2A\u6216\u591A\u4E2A\u6B63\u5219\u8868\u8FBE\u5F0F\u6765\u5339\u914D sass \u6587\u4EF6\u7684\u8DEF\u5F84\u3002\u4F8B\u5982\uFF1A"]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-js",children:"export default {\n  tools: {\n    sass(config, { addExcludes }) {\n      addExcludes(/node_modules/);\n    },\n  },\n};\n"})})]})}(r=globalThis).__RSPRESS_PAGE_META||(r.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["..%2F..%2Fbuilder-doc%2Fdocs%2Fzh%2Fconfig%2Ftools%2Fsass.md"]={toc:[{text:"Object \u7C7B\u578B",id:"object-\u7C7B\u578B",depth:3},{text:"Function \u7C7B\u578B",id:"function-\u7C7B\u578B",depth:3},{text:"\u4FEE\u6539 Sass \u7248\u672C",id:"\u4FEE\u6539-sass-\u7248\u672C",depth:3},{text:"\u5DE5\u5177\u51FD\u6570",id:"\u5DE5\u5177\u51FD\u6570",depth:3},{text:"addExcludes",id:"addexcludes",depth:4}],title:"",frontmatter:{}};var l=function(){var s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=Object.assign({},(0,i.useMDXComponents)(),s.components).wrapper;return e?(0,c.jsx)(e,(0,a._)((0,d._)({},s),{children:(0,c.jsx)(o,(0,d._)({},s))})):o(s)}},70753:function(s,e,n){"use strict";n.r(e),n.d(e,{default:function(){return t}});var r,d=n("15169"),a=n("43932"),c=n("9880"),i=n("23169"),o=n("99572");function l(s){var e=Object.assign({h1:"h1",a:"a",div:"div",p:"p"},(0,i.useMDXComponents)(),s.components);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(e.h1,{id:"toolssass",children:["tools.sass",(0,c.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#toolssass",children:"#"})]}),"\n",(0,c.jsxs)(e.div,{className:"rspress-directive tip",children:[(0,c.jsx)(e.div,{className:"rspress-directive-title",children:"TIP"}),(0,c.jsx)(e.div,{className:"rspress-directive-content",children:(0,c.jsxs)(e.p,{children:["\u8BE5\u914D\u7F6E\u7531 Modern.js Builder \u63D0\u4F9B\uFF0C\u66F4\u591A\u4FE1\u606F\u53EF\u53C2\u8003 ",(0,c.jsx)(e.a,{href:"https://modernjs.dev/builder/api/config-tools.html#toolssass",target:"_blank",rel:"noopener noreferrer",children:"tools.sass"}),"\u3002\n"]})})]}),"\n","\n",(0,c.jsx)(o.default,{})]})}(r=globalThis).__RSPRESS_PAGE_META||(r.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["zh%2Fconfigure%2Fapp%2Ftools%2Fsass.mdx"]={toc:[],title:"tools.sass",frontmatter:{sidebar_label:"sass"}};var t=function(){var s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=Object.assign({},(0,i.useMDXComponents)(),s.components).wrapper;return e?(0,c.jsx)(e,(0,a._)((0,d._)({},s),{children:(0,c.jsx)(l,(0,d._)({},s))})):l(s)}}}]);