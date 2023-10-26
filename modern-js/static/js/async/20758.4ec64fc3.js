(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["20758"],{19324:function(e,n,s){"use strict";s.r(n),s.d(n,{default:function(){return l}});var r=s("15169"),c=s("43932"),a=s("9880"),i=s("23169");function t(e){var n=Object.assign({ul:"ul",li:"li",strong:"strong",pre:"pre",code:"code",p:"p",div:"div"},(0,i.useMDXComponents)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.strong,{children:"\u7C7B\u578B\uFF1A"})}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"type DisableSourceMap =\n  | boolean\n  | {\n      js?: boolean;\n      css?: boolean;\n    };\n"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.strong,{children:"\u9ED8\u8BA4\u503C\uFF1A"})}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"const defaultDisableSourceMap = {\n  js: false,\n  css: process.env.NODE_ENV === 'production',\n};\n"})}),"\n",(0,a.jsx)(n.p,{children:"\u662F\u5426\u7981\u7528 Source Map \u751F\u6210\u3002"}),"\n",(0,a.jsxs)(n.div,{className:"rspress-directive tip",children:[(0,a.jsx)(n.div,{className:"rspress-directive-title",children:"\u4EC0\u4E48\u662F Source Map"}),(0,a.jsx)(n.div,{className:"rspress-directive-content",children:(0,a.jsx)(n.p,{children:"Source Map \u662F\u4FDD\u5B58\u6E90\u4EE3\u7801\u6620\u5C04\u5173\u7CFB\u7684\u4FE1\u606F\u6587\u4EF6\uFF0C\u5B83\u8BB0\u5F55\u4E86\u7F16\u8BD1\u540E\u7684\u4EE3\u7801\u7684\u6BCF\u4E00\u4E2A\u4F4D\u7F6E\uFF0C\u4EE5\u53CA\u6240\u5BF9\u5E94\u7684\u7F16\u8BD1\u524D\u7684\u4F4D\u7F6E\u3002\u901A\u8FC7 Source Map\uFF0C\u53EF\u4EE5\u5728\u8C03\u8BD5\u7F16\u8BD1\u540E\u7684\u4EE3\u7801\u65F6\uFF0C\u76F4\u63A5\u67E5\u770B\u5BF9\u5E94\u7684\u6E90\u4EE3\u7801\u3002"})})]}),"\n",(0,a.jsx)(n.p,{children:"\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0CBuilder \u7684 Source Map \u751F\u6210\u89C4\u5219\u5982\u4E0B\uFF1A"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"\u5728\u5F00\u53D1\u73AF\u5883\u6784\u5EFA\u65F6\uFF0C\u4F1A\u751F\u6210 JS \u6587\u4EF6\u548C CSS \u6587\u4EF6\u7684 SourceMap\uFF0C\u4FBF\u4E8E\u8FDB\u884C\u5F00\u53D1\u8C03\u8BD5\u3002"}),"\n",(0,a.jsx)(n.li,{children:"\u5728\u751F\u4EA7\u73AF\u5883\u6784\u5EFA\u65F6\uFF0C\u4F1A\u751F\u6210 JS \u6587\u4EF6\u7684 Source Map\uFF0C\u7528\u4E8E\u8C03\u8BD5\u548C\u6392\u67E5\u7EBF\u4E0A\u95EE\u9898\uFF1B\u4E0D\u4F1A\u751F\u6210 CSS \u6587\u4EF6\u7684 Source Map\u3002"}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"\u5982\u679C\u9879\u76EE\u4E0D\u9700\u8981 Source Map\uFF0C\u53EF\u4EE5\u5173\u95ED\u8BE5\u529F\u80FD\uFF0C\u4ECE\u800C\u63D0\u5347\u6784\u5EFA\u7684\u901F\u5EA6\u3002"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"export default {\n  output: {\n    disableSourceMap: true,\n  },\n};\n"})}),"\n",(0,a.jsx)(n.p,{children:"\u5982\u679C\u9700\u8981\u5F00\u542F\u5F00\u53D1\u73AF\u5883\u7684 Source Map\uFF0C\u5E76\u5728\u751F\u4EA7\u73AF\u5883\u7981\u7528\uFF0C\u53EF\u4EE5\u8BBE\u7F6E\u4E3A\uFF1A"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"export default {\n  output: {\n    disableSourceMap: process.env.NODE_ENV === 'production',\n  },\n};\n"})}),"\n",(0,a.jsx)(n.p,{children:"\u5982\u679C\u9700\u8981\u5355\u72EC\u63A7\u5236 JS \u6587\u4EF6\u6216 CSS \u6587\u4EF6\u7684 Source Map\uFF0C\u53EF\u4EE5\u53C2\u8003\u4E0B\u65B9\u8BBE\u7F6E\uFF1A"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"export default {\n  output: {\n    disableSourceMap: {\n      js: false,\n      css: true,\n    },\n  },\n};\n"})})]})}function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,i.useMDXComponents)(),e.components).wrapper;return n?(0,a.jsx)(n,(0,c._)((0,r._)({},e),{children:(0,a.jsx)(t,(0,r._)({},e))})):t(e)}var l=o;o.__RSPRESS_PAGE_META={},o.__RSPRESS_PAGE_META["..%2F..%2Fbuilder-doc%2Fdocs%2Fzh%2Fconfig%2Foutput%2FdisableSourceMap.md"]={toc:[],title:""}},68201:function(e,n,s){"use strict";s.r(n),s.d(n,{default:function(){return d},frontmatter:function(){return u}});var r=s("15169"),c=s("43932"),a=s("9880"),i=s("23169"),t=s("19324");function o(e){var n=Object.assign({h1:"h1",a:"a",div:"div",p:"p"},(0,i.useMDXComponents)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.h1,{id:"outputdisablesourcemap",children:["output.disableSourceMap",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#outputdisablesourcemap",children:"#"})]}),"\n",(0,a.jsxs)(n.div,{className:"rspress-directive tip",children:[(0,a.jsx)(n.div,{className:"rspress-directive-title",children:"TIP"}),(0,a.jsx)(n.div,{className:"rspress-directive-content",children:(0,a.jsxs)(n.p,{children:["\u8BE5\u914D\u7F6E\u7531 Modern.js Builder \u63D0\u4F9B\uFF0C\u66F4\u591A\u4FE1\u606F\u53EF\u53C2\u8003 ",(0,a.jsx)(n.a,{href:"https://modernjs.dev/builder/api/config-output.html#outputdisablesourcemap",target:"_blank",rel:"noopener noreferrer",children:"output.disableSourceMap"}),"\u3002\n"]})})]}),"\n","\n",(0,a.jsx)(t.default,{})]})}function l(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,i.useMDXComponents)(),e.components).wrapper;return n?(0,a.jsx)(n,(0,c._)((0,r._)({},e),{children:(0,a.jsx)(o,(0,r._)({},e))})):o(e)}var d=l;l.__RSPRESS_PAGE_META={},l.__RSPRESS_PAGE_META["zh%2Fconfigure%2Fapp%2Foutput%2Fdisable-source-map.mdx"]={toc:[],title:"output.disableSourceMap"};var u={sidebar_label:"disableSourceMap"}}}]);