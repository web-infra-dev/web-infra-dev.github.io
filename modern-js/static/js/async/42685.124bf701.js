/*! For license information please see 42685.124bf701.js.LICENSE.txt */
(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["42685"],{99183:function(e,n,r){"use strict";r.r(n);var i=r("39980"),s=r("9580");function a(e){let n=Object.assign({h1:"h1",a:"a",ul:"ul",li:"li",strong:"strong",pre:"pre",code:"code",p:"p",h3:"h3",h4:"h4"},(0,s.ah)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.h1,{id:"experimentslazycompilation",children:["experiments.lazyCompilation",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#experimentslazycompilation",children:"#"})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"\u7C7B\u578B\uFF1A"})}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"type LazyCompilationOptions =\n  | boolean\n  | {\n      // \u662F\u5426\u4E3A\u5F02\u6B65\u6A21\u5757\u5F00\u542F\u5EF6\u8FDF\u7F16\u8BD1\n      imports?: boolean;\n      // \u662F\u5426\u4E3A\u5165\u53E3\u6A21\u5757\u5F00\u542F\u5EF6\u8FDF\u7F16\u8BD1\n      entries?: boolean;\n      // \u6307\u5B9A\u54EA\u4E9B\u5BFC\u5165\u7684\u6A21\u5757\u5E94\u8BE5\u88AB\u5EF6\u8FDF\u7F16\u8BD1\n      test?: RegExp | ((m: Module) => boolean);\n    };\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"\u9ED8\u8BA4\u503C\uFF1A"})," ",(0,i.jsx)(n.code,{children:"false"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"\u7528\u4E8E\u5F00\u542F\u5EF6\u8FDF\u7F16\u8BD1\uFF08\u5373\u6309\u9700\u7F16\u8BD1\uFF09\u7684\u80FD\u529B\u3002\u5F53\u5F00\u542F\u6B64\u914D\u7F6E\u9879\u65F6\uFF0CBuilder \u4F1A\u8FDB\u884C\u5EF6\u8FDF\u7F16\u8BD1\uFF0C\u63D0\u5347\u9879\u76EE\u7684\u7F16\u8BD1\u542F\u52A8\u901F\u5EA6\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u5EF6\u8FDF\u7F16\u8BD1\u53EA\u5728\u5F00\u53D1\u73AF\u5883\u4E0B\u751F\u6548\u3002"}),"\n",(0,i.jsxs)(n.h3,{id:"\u5EF6\u8FDF\u7F16\u8BD1\u5F02\u6B65\u6A21\u5757",children:["\u5EF6\u8FDF\u7F16\u8BD1\u5F02\u6B65\u6A21\u5757",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u5EF6\u8FDF\u7F16\u8BD1\u5F02\u6B65\u6A21\u5757",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["\u5EF6\u8FDF\u7F16\u8BD1 ",(0,i.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/import",target:"_blank",rel:"noopener noreferrer",children:"dynamic import"})," \u5F15\u5165\u7684\u5F02\u6B65\u6A21\u5757\uFF1A"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"export default {\n  experiments: {\n    lazyCompilation: {\n      imports: true,\n      entries: false,\n    },\n  },\n};\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u5F00\u542F ",(0,i.jsx)(n.code,{children:"imports"})," \u9009\u9879\u540E\uFF0C\u6240\u6709\u7684\u5F02\u6B65\u6A21\u5757\u53EA\u6709\u5728\u88AB\u8BF7\u6C42\u65F6\u624D\u89E6\u53D1\u7F16\u8BD1\u3002\u5982\u679C\u4F60\u7684\u9879\u76EE\u662F\u4E00\u4E2A\u5355\u9875\u5E94\u7528\uFF08SPA\uFF09\uFF0C\u5E76\u901A\u8FC7 dynamic import \u8FDB\u884C\u4E86\u8DEF\u7531\u62C6\u5206\uFF0C\u90A3\u4E48\u4F1A\u6709\u660E\u663E\u7684\u7F16\u8BD1\u63D0\u901F\u6548\u679C\u3002"]}),"\n",(0,i.jsxs)(n.h3,{id:"\u5EF6\u8FDF\u7F16\u8BD1\u5165\u53E3\u6A21\u5757",children:["\u5EF6\u8FDF\u7F16\u8BD1\u5165\u53E3\u6A21\u5757",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u5EF6\u8FDF\u7F16\u8BD1\u5165\u53E3\u6A21\u5757",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"\u9664\u4E86\u5EF6\u8FDF\u7F16\u8BD1\u5F02\u6B65\u6A21\u5757\uFF0C\u4F60\u4E5F\u53EF\u4EE5\u9009\u62E9\u540C\u65F6\u5EF6\u8FDF\u7F16\u8BD1\u5165\u53E3\u6A21\u5757\u548C\u5F02\u6B65\u6A21\u5757\u3002"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"export default {\n  experiments: {\n    lazyCompilation: {\n      imports: true,\n      entries: true,\n    },\n  },\n};\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u4EE5\u4E0A\u914D\u7F6E\u4E5F\u53EF\u4EE5\u7B80\u5316\u4E3A\uFF1A"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"export default {\n  experiments: {\n    lazyCompilation: true,\n  },\n};\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u5F00\u542F ",(0,i.jsx)(n.code,{children:"entries"})," \u9009\u9879\u540E\uFF0C\u5F53\u542F\u52A8\u7F16\u8BD1\u65F6\uFF0C\u4E0D\u4F1A\u7F16\u8BD1\u6240\u6709\u7684\u9875\u9762\uFF0C\u800C\u662F\u4EC5\u5728\u8DEF\u7531\u8DF3\u8F6C\u5230\u5BF9\u5E94\u7684\u9875\u9762\u65F6\uFF0C\u624D\u5BF9\u8BE5\u9875\u9762\u8FDB\u884C\u7F16\u8BD1\u3002"]}),"\n",(0,i.jsx)(n.p,{children:"\u4F7F\u7528\u5EF6\u8FDF\u7F16\u8BD1\u5165\u53E3\u6A21\u5757\u65F6\uFF0C\u6709\u4EE5\u4E0B\u6CE8\u610F\u4E8B\u9879\uFF1A"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u53EA\u9002\u7528\u4E8E\u591A\u9875\u5E94\u7528\uFF08MPA\uFF09\uFF0C\u5BF9\u5355\u9875\u5E94\u7528\uFF08SPA\uFF09\u6CA1\u6709\u4F18\u5316\u6548\u679C\u3002"}),"\n",(0,i.jsx)(n.li,{children:"\u5F53\u4F60\u8BBF\u95EE\u4E00\u4E2A\u9875\u9762\u65F6\uFF0C\u7531\u4E8E\u8981\u7B49\u5F85\u9875\u9762\u7F16\u8BD1\u5B8C\u6210\uFF0C\u4F1A\u6709\u4E00\u6BB5\u65F6\u95F4\u7684\u767D\u5C4F\u3002"}),"\n"]}),"\n",(0,i.jsxs)(n.h3,{id:"\u5C40\u9650\u6027",children:["\u5C40\u9650\u6027",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u5C40\u9650\u6027",children:"#"})]}),"\n",(0,i.jsxs)(n.h4,{id:"\u7981\u7528\u62C6\u5305\u89C4\u5219",children:["\u7981\u7528\u62C6\u5305\u89C4\u5219",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u7981\u7528\u62C6\u5305\u89C4\u5219",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"\u5F53\u4F60\u5F00\u542F\u5EF6\u8FDF\u7F16\u8BD1\u65F6\uFF0C\u4E3A\u4E86\u4FDD\u8BC1\u7F16\u8BD1\u7ED3\u679C\u6B63\u5E38\uFF0CBuilder \u4F1A\u5728\u5F00\u53D1\u73AF\u5883\u4E0B\u7981\u7528\u62C6\u5305\u89C4\u5219\u3002\u8FD9\u4E0D\u4F1A\u5F71\u54CD\u751F\u4EA7\u73AF\u5883\u7684\u6253\u5305\u4EA7\u7269\uFF0C\u4F46\u4F1A\u5BFC\u81F4\u5F00\u53D1\u73AF\u5883\u548C\u751F\u4EA7\u73AF\u5883\u7684\u6253\u5305\u4EA7\u7269\u6709\u4E00\u5B9A\u5DEE\u5F02\u3002"}),"\n",(0,i.jsxs)(n.h4,{id:"\u4F7F\u7528\u4EE3\u7406",children:["\u4F7F\u7528\u4EE3\u7406",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u4F7F\u7528\u4EE3\u7406",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"Lazy Compilation \u4F9D\u8D56 webpack \u5728\u672C\u5730\u542F\u52A8\u7684\u5F00\u53D1\u670D\u52A1\u5668\uFF0C\u5F53\u4F60\u5C06\u67D0\u4E2A\u57DF\u540D\u4EE3\u7406\u5230 localhost \u8FDB\u884C\u5F00\u53D1\u65F6\uFF0CLazy Compilation \u5C06\u65E0\u6CD5\u6B63\u5E38\u5DE5\u4F5C\u3002\u56E0\u6B64\uFF0C\u5982\u679C\u4F60\u9700\u8981\u4F7F\u7528\u4EE3\u7406\u65F6\uFF0C\u8BF7\u7981\u7528 Lazy Compilation\u3002"}),"\n",(0,i.jsxs)(n.h4,{id:"\u5176\u4ED6\u6F5C\u5728\u7684\u95EE\u9898",children:["\u5176\u4ED6\u6F5C\u5728\u7684\u95EE\u9898",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u5176\u4ED6\u6F5C\u5728\u7684\u95EE\u9898",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"\u8003\u8651\u5230 Lazy Compilation \u4ECD\u7136\u662F webpack \u7684\u5B9E\u9A8C\u6027\u529F\u80FD\uFF0C\u56E0\u6B64\u4F60\u5728\u4F7F\u7528\u8FC7\u7A0B\u4E2D\uFF0C\u53EF\u80FD\u4F1A\u9047\u5230\u4E00\u4E9B\u6F5C\u5728\u7684\u95EE\u9898\uFF0C\u6BD4\u5982\u7F16\u8BD1\u4EA7\u7269\u7684\u884C\u4E3A\u53D8\u5316\uFF0C\u6216\u662F\u7F16\u8BD1\u51FA\u73B0\u5F02\u5E38\u3002"}),"\n",(0,i.jsxs)(n.p,{children:["\u5F53\u4F60\u9047\u5230\u8FD9\u4E9B\u95EE\u9898\u65F6\uFF0C\u53EF\u4EE5\u53C2\u8003 ",(0,i.jsx)(n.a,{href:"https://github.com/webpack/webpack/issues",target:"_blank",rel:"noopener noreferrer",children:"webpack \u7684 Issues"})," \u5BFB\u627E\u89E3\u51B3\u65B9\u6848\uFF0C\u4E5F\u53EF\u4EE5\u5173\u95ED ",(0,i.jsx)(n.code,{children:"lazyCompilation"})," \u914D\u7F6E\u9879\u3002"]})]})}function l(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,s.ah)(),e.components);return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}n.default=l,l.__RSPRESS_PAGE_META={},l.__RSPRESS_PAGE_META["zh%2Fconfigure%2Fapp%2Fexperiments%2Flazy-compilation.mdx"]={toc:[{text:"\u5EF6\u8FDF\u7F16\u8BD1\u5F02\u6B65\u6A21\u5757",id:"\u5EF6\u8FDF\u7F16\u8BD1\u5F02\u6B65\u6A21\u5757",depth:3},{text:"\u5EF6\u8FDF\u7F16\u8BD1\u5165\u53E3\u6A21\u5757",id:"\u5EF6\u8FDF\u7F16\u8BD1\u5165\u53E3\u6A21\u5757",depth:3},{text:"\u5C40\u9650\u6027",id:"\u5C40\u9650\u6027",depth:3},{text:"\u7981\u7528\u62C6\u5305\u89C4\u5219",id:"\u7981\u7528\u62C6\u5305\u89C4\u5219",depth:4},{text:"\u4F7F\u7528\u4EE3\u7406",id:"\u4F7F\u7528\u4EE3\u7406",depth:4},{text:"\u5176\u4ED6\u6F5C\u5728\u7684\u95EE\u9898",id:"\u5176\u4ED6\u6F5C\u5728\u7684\u95EE\u9898",depth:4}],title:"experiments.lazyCompilation",frontmatter:{sidebar_label:"lazyCompilation"}}}}]);