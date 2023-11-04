(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["55790"],{694:function(e,s,n){"use strict";n.r(s),n.d(s,{default:function(){return t}});var l=n("9880"),d=n("23169");function r(e){let s=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",pre:"pre",p:"p",a:"a",h3:"h3",h4:"h4"},(0,d.useMDXComponents)(),e.components);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsxs)(s.li,{children:[(0,l.jsx)(s.strong,{children:"\u7C7B\u578B\uFF1A"})," ",(0,l.jsx)(s.code,{children:"Object | Function"})]}),"\n",(0,l.jsx)(s.li,{children:(0,l.jsx)(s.strong,{children:"\u9ED8\u8BA4\u503C\uFF1A"})}),"\n"]}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-js",children:"const defaultOptions = {\n  lessOptions: {\n    javascriptEnabled: true,\n  },\n  // \u9ED8\u8BA4\u5728\u5F00\u53D1\u73AF\u5883\u4E0B\u542F\u7528 CSS \u7684 Source Map\n  sourceMap: isDev,\n};\n"})}),"\n",(0,l.jsxs)(s.p,{children:["\u4F60\u53EF\u4EE5\u901A\u8FC7 ",(0,l.jsx)(s.code,{children:"tools.less"})," \u4FEE\u6539 ",(0,l.jsx)(s.a,{href:"https://github.com/webpack-contrib/less-loader",target:"_blank",rel:"noopener noreferrer",children:"less-loader"})," \u7684\u914D\u7F6E\u3002"]}),"\n",(0,l.jsxs)(s.h3,{id:"object-\u7C7B\u578B",children:["Object \u7C7B\u578B",(0,l.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#object-\u7C7B\u578B",children:"#"})]}),"\n",(0,l.jsxs)(s.p,{children:["\u5F53 ",(0,l.jsx)(s.code,{children:"tools.less"})," \u7684\u503C\u4E3A ",(0,l.jsx)(s.code,{children:"Object"})," \u7C7B\u578B\u65F6\uFF0C\u4F1A\u4E0E\u9ED8\u8BA4\u914D\u7F6E\u901A\u8FC7 Object.assign \u8FDB\u884C\u6D45\u5C42\u5408\u5E76\uFF0C\u503C\u5F97\u6CE8\u610F\u7684\u662F\uFF0C",(0,l.jsx)(s.code,{children:"lessOptions"})," \u4F1A\u901A\u8FC7 deepMerge \u8FDB\u884C\u6DF1\u5C42\u5408\u5E76\u3002"]}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-js",children:"export default {\n  tools: {\n    less: {\n      lessOptions: {\n        javascriptEnabled: false,\n      },\n    },\n  },\n};\n"})}),"\n",(0,l.jsxs)(s.h3,{id:"function-\u7C7B\u578B",children:["Function \u7C7B\u578B",(0,l.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#function-\u7C7B\u578B",children:"#"})]}),"\n",(0,l.jsxs)(s.p,{children:["\u5F53 ",(0,l.jsx)(s.code,{children:"tools.less"})," \u4E3A Function \u7C7B\u578B\u65F6\uFF0C\u9ED8\u8BA4\u914D\u7F6E\u4F5C\u4E3A\u7B2C\u4E00\u4E2A\u53C2\u6570\u4F20\u5165\uFF0C\u53EF\u4EE5\u76F4\u63A5\u4FEE\u6539\u914D\u7F6E\u5BF9\u8C61\uFF0C\u4E5F\u53EF\u4EE5\u8FD4\u56DE\u4E00\u4E2A\u503C\u4F5C\u4E3A\u6700\u7EC8\u7ED3\u679C\uFF0C\u7B2C\u4E8C\u4E2A\u53C2\u6570\u63D0\u4F9B\u4E86\u4E00\u4E9B\u53EF\u4EE5\u76F4\u63A5\u8C03\u7528\u7684\u5DE5\u5177\u51FD\u6570\uFF1A"]}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-js",children:"export default {\n  tools: {\n    less(config) {\n      // \u4FEE\u6539 lessOptions \u914D\u7F6E\n      config.lessOptions = {\n        javascriptEnabled: false,\n      };\n    },\n  },\n};\n"})}),"\n",(0,l.jsxs)(s.h3,{id:"\u4FEE\u6539-less-\u7248\u672C",children:["\u4FEE\u6539 Less \u7248\u672C",(0,l.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#\u4FEE\u6539-less-\u7248\u672C",children:"#"})]}),"\n",(0,l.jsxs)(s.p,{children:["\u5728\u67D0\u4E9B\u573A\u666F\u4E0B\uFF0C\u5982\u679C\u4F60\u9700\u8981\u4F7F\u7528\u7279\u5B9A\u7684 Less \u7248\u672C\uFF0C\u800C\u4E0D\u662F\u4F7F\u7528 Builder \u5185\u7F6E\u7684 Less v4\uFF0C\u53EF\u4EE5\u5728\u9879\u76EE\u4E2D\u5B89\u88C5\u9700\u8981\u4F7F\u7528\u7684 Less \u7248\u672C\uFF0C\u5E76\u901A\u8FC7 ",(0,l.jsx)(s.code,{children:"less-loader"})," \u7684 ",(0,l.jsx)(s.code,{children:"implementation"})," \u9009\u9879\u8BBE\u7F6E\u3002"]}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-js",children:"export default {\n  tools: {\n    less: {\n      implementation: require('less'),\n    },\n  },\n};\n"})}),"\n",(0,l.jsxs)(s.h3,{id:"\u5DE5\u5177\u51FD\u6570",children:["\u5DE5\u5177\u51FD\u6570",(0,l.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#\u5DE5\u5177\u51FD\u6570",children:"#"})]}),"\n",(0,l.jsxs)(s.h4,{id:"addexcludes",children:["addExcludes",(0,l.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#addexcludes",children:"#"})]}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsxs)(s.li,{children:[(0,l.jsx)(s.strong,{children:"\u7C7B\u578B\uFF1A"})," ",(0,l.jsx)(s.code,{children:"(excludes: RegExp | RegExp[]) => void"})]}),"\n"]}),"\n",(0,l.jsxs)(s.p,{children:["\u7528\u6765\u6307\u5B9A ",(0,l.jsx)(s.code,{children:"less-loader"})," \u4E0D\u7F16\u8BD1\u54EA\u4E9B\u6587\u4EF6\uFF0C\u4F60\u53EF\u4EE5\u4F20\u5165\u4E00\u4E2A\u6216\u591A\u4E2A\u6B63\u5219\u8868\u8FBE\u5F0F\u6765\u5339\u914D less \u6587\u4EF6\u7684\u8DEF\u5F84\u3002\u4F8B\u5982\uFF1A"]}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-js",children:"export default {\n  tools: {\n    less(config, { addExcludes }) {\n      addExcludes(/node_modules/);\n    },\n  },\n};\n"})})]})}function c(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:s}=Object.assign({},(0,d.useMDXComponents)(),e.components);return s?(0,l.jsx)(s,{...e,children:(0,l.jsx)(r,{...e})}):r(e)}var t=c;c.__RSPRESS_PAGE_META={},c.__RSPRESS_PAGE_META["..%2F..%2Fbuilder-doc%2Fdocs%2Fzh%2Fconfig%2Ftools%2Fless.md"]={toc:[{text:"Object \u7C7B\u578B",id:"object-\u7C7B\u578B",depth:3},{text:"Function \u7C7B\u578B",id:"function-\u7C7B\u578B",depth:3},{text:"\u4FEE\u6539 Less \u7248\u672C",id:"\u4FEE\u6539-less-\u7248\u672C",depth:3},{text:"\u5DE5\u5177\u51FD\u6570",id:"\u5DE5\u5177\u51FD\u6570",depth:3},{text:"addExcludes",id:"addexcludes",depth:4}],title:""}},65333:function(e,s,n){"use strict";n.r(s),n.d(s,{default:function(){return i},frontmatter:function(){return o}});var l=n("9880"),d=n("23169"),r=n("694");function c(e){let s=Object.assign({h1:"h1",a:"a"},(0,d.useMDXComponents)(),e.components);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(s.h1,{id:"toolsless",children:["tools.less",(0,l.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#toolsless",children:"#"})]}),"\n","\n",(0,l.jsx)(r.default,{})]})}function t(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:s}=Object.assign({},(0,d.useMDXComponents)(),e.components);return s?(0,l.jsx)(s,{...e,children:(0,l.jsx)(c,{...e})}):c(e)}var i=t;t.__RSPRESS_PAGE_META={},t.__RSPRESS_PAGE_META["zh%2Fconfigure%2Fapp%2Ftools%2Fless.mdx"]={toc:[],title:"tools.less"};let o={sidebar_label:"less"}}}]);