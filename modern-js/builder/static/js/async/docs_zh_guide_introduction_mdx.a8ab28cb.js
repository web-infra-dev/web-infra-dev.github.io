(self.webpackChunk_modern_js_builder_doc=self.webpackChunk_modern_js_builder_doc||[]).push([["docs_zh_guide_introduction_mdx"],{62026:function(e,r,n){"use strict";n.r(r),n.d(r,{default:function(){return p}});var s,d=n("15169"),l=n("43932"),i=n("9880"),t=n("23169"),h=n("40423"),a=n("70792"),c=n("69571");function o(e){var r=Object.assign({h1:"h1",a:"a",p:"p",strong:"strong",h2:"h2",img:"img",ul:"ul",li:"li",h3:"h3",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,t.useMDXComponents)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(r.h1,{id:"\u4ECB\u7ECD",children:["\u4ECB\u7ECD",(0,i.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#\u4ECB\u7ECD",children:"#"})]}),"\n",(0,i.jsxs)(r.p,{children:["Modern.js Builder \u662F",(0,i.jsx)(r.strong,{children:"\u4E00\u4E2A\u57FA\u4E8E Rspack \u7684 Web \u6784\u5EFA\u5DE5\u5177"}),"\u3002"]}),"\n",(0,i.jsx)(r.p,{children:"\u968F\u7740\u524D\u7AEF\u751F\u6001\u7684\u53D1\u5C55\uFF0C\u793E\u533A\u4E2D\u51FA\u73B0\u4E86\u591A\u6837\u5316\u7684\u7F16\u8BD1\u5DE5\u5177\u548C\u63D2\u4EF6\u3002\u5BF9\u4E8E\u5927\u90E8\u5206\u5F00\u53D1\u8005\u6765\u8BF4\uFF0C\u6784\u5EFA\u4E00\u4E2A Web \u5E94\u7528\u6240\u9700\u7684\u914D\u7F6E\u548C\u4F9D\u8D56\u5DF2\u53D8\u5F97\u5341\u5206\u590D\u6742\u3002\u5728\u8FFD\u6C42\u6700\u4F73\u5B9E\u8DF5\u7684\u8FC7\u7A0B\u4E2D\uFF0C\u5F00\u53D1\u8005\u9700\u8981\u4ED8\u51FA\u7684\u6210\u672C\u4E5F\u5728\u4E0D\u65AD\u4E0A\u5347\u3002"}),"\n",(0,i.jsx)(r.p,{children:"\u4E3A\u4E86\u51CF\u5C11\u6784\u5EFA\u7684\u590D\u6742\u6027\uFF0C\u964D\u4F4E\u4E0A\u624B\u95E8\u69DB\uFF0C\u6211\u4EEC\u57FA\u4E8E Modern.js \u5728 Web \u5E94\u7528\u6784\u5EFA\u65B9\u9762\u7684\u5B9E\u8DF5\u7ECF\u9A8C\uFF0C\u62BD\u8C61\u5176\u4E2D\u7684\u6784\u5EFA\u80FD\u529B\uFF0C\u6253\u9020\u51FA Modern.js Builder \u8FD9\u4E2A\u6784\u5EFA\u5DE5\u5177\u3002"}),"\n",(0,i.jsxs)(r.h2,{id:"rust-\u5316",children:["Rust \u5316",(0,i.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#rust-\u5316",children:"#"})]}),"\n",(0,i.jsxs)(r.p,{children:["\u8FD1\u5E74\u6765\uFF0C\u524D\u7AEF\u5DE5\u5177\u94FE\u7684\u53D1\u5C55\u8D8B\u52BF\u662F\u4F7F\u7528 Rust \u7B49\u7F16\u7A0B\u8BED\u8A00\u91CD\u65B0\u5B9E\u73B0 \u2014\u2014 \u4EE5\u83B7\u5F97\u66F4\u597D\u7684\u6027\u80FD\u8868\u73B0\u3002\u793E\u533A\u4E2D\u51FA\u73B0 ",(0,i.jsx)(r.a,{href:"https://www.rspack.dev/",target:"_blank",rel:"noopener noreferrer",children:"Rspack"}),"\u3001",(0,i.jsx)(r.a,{href:"https://swc.rs/",target:"_blank",rel:"noopener noreferrer",children:"SWC"})," \u7B49\u9AD8\u6027\u80FD\u5DE5\u5177\uFF0C\u5E76\u4E14\u5E94\u7528\u9886\u57DF\u5728\u9010\u6B65\u6269\u5BBD\u3002\u4F46\u8FD9\u4E9B Rust \u5DE5\u5177\u4E0E JavaScript \u5DE5\u5177\u4E4B\u95F4\u5B58\u5728\u8F83\u591A\u5DEE\u5F02\uFF0C\u5305\u62EC\u529F\u80FD\u4E0D\u5B8C\u6574\u3001\u914D\u7F6E\u4E0D\u4E00\u81F4\u7B49\uFF0C\u5BFC\u81F4\u4F7F\u7528\u8005\u9700\u8981\u627F\u62C5\u4E00\u5B9A\u7684\u8FC1\u79FB\u6210\u672C\u3002"]}),"\n",(0,i.jsxs)(r.p,{children:["\u524D\u7AEF\u5DE5\u5177\u94FE Rust \u5316\u7684\u8FDB\u7A0B\u8FD8\u4F1A\u6301\u7EED\u8F83\u957F\u4E00\u6BB5\u65F6\u95F4\uFF0C",(0,i.jsx)(r.strong,{children:"Modern.js Builder \u671F\u671B\u80FD\u5E2E\u52A9\u5F00\u53D1\u8005\u66F4\u597D\u5730\u8FC7\u6E21\u5230 Rust \u5DE5\u5177"}),"\u3002\u4E0D\u7BA1\u662F JavaScript \u5DE5\u5177\uFF0C\u8FD8\u662F Rust \u5DE5\u5177\uFF0C\u751A\u81F3\u662F webpack \u7B49\u5E95\u5C42 bundler\uFF0C\u5728 Modern.js Builder \u4E2D\u90FD\u662F\u53EF\u66FF\u6362\u7684\u96F6\u90E8\u4EF6\u3002\u4F60\u53EF\u4EE5\u901A\u8FC7\u5F00\u542F\u914D\u7F6E\u6216\u542F\u7528\u63D2\u4EF6\u7684\u65B9\u5F0F\uFF0C\u5BF9\u8FD9\u4E9B\u96F6\u90E8\u4EF6\u8FDB\u884C\u6E10\u8FDB\u5F0F\u66FF\u6362\uFF0CModern.js Builder \u4F1A\u62B9\u5E73\u5176\u4E2D\u7684\u4E3B\u8981\u5DEE\u5F02\uFF0C\u5E2E\u52A9\u4F7F\u7528\u8005\u8FDB\u884C\u4F4E\u6210\u672C\u8FC1\u79FB\u3002"]}),"\n",(0,i.jsxs)(r.h2,{id:"\u5B9A\u4F4D",children:["\u5B9A\u4F4D",(0,i.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#\u5B9A\u4F4D",children:"#"})]}),"\n",(0,i.jsxs)(r.p,{children:["Modern.js Builder (\u7B80\u79F0 Builder) \u7684\u5B9A\u4F4D\u662F",(0,i.jsx)(r.strong,{children:"\u670D\u52A1\u4E8E\u4E0A\u5C42\u6846\u67B6\u7684\u6784\u5EFA\u5DE5\u5177"}),"\uFF0C\u5B83\u4E13\u6CE8\u4E8E\u89E3\u51B3 Web \u5E94\u7528\u6784\u5EFA\u9762\u4E34\u7684\u5404\u7C7B\u95EE\u9898\uFF0C\u671F\u671B\u80FD\u4E3A\u524D\u7AEF\u6846\u67B6\u63D0\u4F9B\u5F00\u7BB1\u5373\u7528\u7684\u6784\u5EFA\u80FD\u529B\u3002"]}),"\n",(0,i.jsx)("img",{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/zq-uylkvT/ljhwZthlaukjlkulzlp/builder-layers-0824.png",style:{maxWidth:"540px",width:"100%"}}),"\n",(0,i.jsx)(r.p,{children:"\u5982\u679C\u4F60\u6B63\u5728\u5F00\u53D1\u4E00\u4E2A\u524D\u7AEF\u6846\u67B6\uFF0C\u6216\u662F\u5F00\u53D1\u4E00\u4E2A\u524D\u7AEF\u5E94\u7528\u7684\u811A\u624B\u67B6\uFF0C\u90A3\u4E48 Builder \u53EF\u4EE5\u4E3A\u4F60\u5B8C\u6210\u524D\u7AEF\u6846\u67B6\u4E2D\u5927\u90E8\u5206\u4E0E\u6784\u5EFA\u6709\u5173\u7684\u903B\u8F91\uFF0C\u8BA9\u4F60\u80FD\u591F\u805A\u7126\u4E8E\u5B9E\u73B0\u6846\u67B6\u7684\u5176\u4ED6\u529F\u80FD\u3002"}),"\n",(0,i.jsx)(r.p,{children:"\u5982\u679C\u4F60\u662F\u4E00\u540D\u4E1A\u52A1\u5F00\u53D1\u8005\uFF0C\u5927\u90E8\u5206\u60C5\u51B5\u4E0B\uFF0C\u4F60\u4E0D\u9700\u8981\u5728\u4E1A\u52A1\u9879\u76EE\u4E2D\u624B\u52A8\u63A5\u5165 Builder\uFF0C\u6211\u4EEC\u63A8\u8350\u4F60\u76F4\u63A5\u4F7F\u7528\u4E00\u4E9B\u57FA\u4E8E Builder \u7684\u4E0A\u5C42\u6846\u67B6\u3002"}),"\n",(0,i.jsx)(r.p,{children:"\u76EE\u524D\u5DF2\u7ECF\u63A5\u5165 Builder \u7684\u524D\u7AEF\u6846\u67B6\u6709\uFF1A"}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:["\u5F00\u6E90\u7684 ",(0,i.jsx)(r.a,{href:"https://github.com/web-infra-dev/modern.js",target:"_blank",rel:"noopener noreferrer",children:"Modern.js"})," \u6846\u67B6\u3002"]}),"\n",(0,i.jsx)(r.li,{children:"\u5B57\u8282\u8DF3\u52A8\u5185\u90E8\u7684 EdenX\u3001PIA \u7B49\u6846\u67B6\u3002"}),"\n"]}),"\n",(0,i.jsxs)(r.h2,{id:"\u7279\u6027",children:["\u7279\u6027",(0,i.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#\u7279\u6027",children:"#"})]}),"\n",(0,i.jsxs)(r.h3,{id:"\u652F\u6301-rspack-\u6253\u5305",children:["\u652F\u6301 Rspack \u6253\u5305",(0,i.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#\u652F\u6301-rspack-\u6253\u5305",children:"#"})]}),"\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.strong,{children:"Builder \u652F\u6301 webpack \u548C Rspack \u4E24\u79CD\u6253\u5305\u5DE5\u5177"}),"\uFF0C\u4F60\u53EF\u4EE5\u5728\u6210\u719F\u7684 Webpack \u548C\u66F4\u5FEB\u7684 Rspack \u4E4B\u95F4\u8FDB\u884C\u5207\u6362\u3002"]}),"\n","\n",(0,i.jsx)(h.default,{}),"\n",(0,i.jsxs)(r.p,{children:["\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0CBuilder \u4F7F\u7528 webpack 5 \u4F5C\u4E3A\u6253\u5305\u5DE5\u5177\uFF0C\u5C3D\u7BA1 webpack \u7684\u7F16\u8BD1\u901F\u5EA6\u4E0D\u662F\u5F88\u7406\u60F3\uFF0C\u4F46\u5B83\u4F9D\u7136\u662F\u793E\u533A\u4E2D\u529F\u80FD\u6700\u5B8C\u6574\u3001\u751F\u6001\u6700\u4E30\u5BCC\u7684\u6253\u5305\u5DE5\u5177\u3002Builder \u5728 webpack \u7684\u57FA\u7840\u4E0A\uFF0C\u96C6\u6210\u4E86 ",(0,i.jsx)(r.a,{href:"https://github.com/babel/babel",target:"_blank",rel:"noopener noreferrer",children:"Babel"}),"\u3001",(0,i.jsx)(r.a,{href:"https://github.com/postcss/postcss",target:"_blank",rel:"noopener noreferrer",children:"PostCSS"}),"\u3001",(0,i.jsx)(r.a,{href:"https://github.com/terser/terser",target:"_blank",rel:"noopener noreferrer",children:"terser"})," \u7B49\u5DE5\u5177\u8FDB\u884C\u4EE3\u7801\u8F6C\u4E49\u548C\u538B\u7F29\u3002Builder \u4E5F\u652F\u6301\u66FF\u6362\u90E8\u5206\u7F16\u8BD1\u80FD\u529B\u4E3A\u539F\u751F\u5DE5\u5177\u6765\u63D0\u5347\u7F16\u8BD1\u901F\u5EA6\uFF0C\u6BD4\u5982\u5C06 Babel / terser \u66FF\u6362\u4E3A ",(0,i.jsx)(r.a,{href:"https://github.com/swc-project/swc",target:"_blank",rel:"noopener noreferrer",children:"swc"})," \u6216 ",(0,i.jsx)(r.a,{href:"https://github.com/evanw/esbuild",target:"_blank",rel:"noopener noreferrer",children:"esbuild"}),"\u3002"]}),"\n",(0,i.jsxs)(r.p,{children:["\u5982\u679C\u4F60\u5BF9\u6784\u5EFA\u6027\u80FD\u6709\u66F4\u6781\u81F4\u7684\u9700\u6C42\uFF0C\u53EF\u4EE5\u4E00\u952E\u5207\u6362\u5230 Rspack \u6784\u5EFA\u6A21\u5F0F\uFF0C\u8BF7\u53C2\u8003 ",(0,i.jsx)(r.a,{href:"/guide/advanced/rspack-start",children:"\u4F7F\u7528 Rspack"})," \u6765\u8FDB\u884C\u5207\u6362\u3002"]}),"\n",(0,i.jsxs)(r.h3,{id:"\u6DF1\u5EA6\u4F18\u5316\u6784\u5EFA\u4EA7\u7269",children:["\u6DF1\u5EA6\u4F18\u5316\u6784\u5EFA\u4EA7\u7269",(0,i.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#\u6DF1\u5EA6\u4F18\u5316\u6784\u5EFA\u4EA7\u7269",children:"#"})]}),"\n",(0,i.jsxs)(r.p,{children:["Builder ",(0,i.jsx)(r.strong,{children:"\u5145\u5206\u5229\u7528 webpack \u751F\u6001\u5185\u7684\u5404\u79CD\u4F18\u5316\u624B\u6BB5"}),"\uFF0C\u4FDD\u8BC1\u751F\u4EA7\u73AF\u5883\u7684\u4EA7\u7269\u6027\u80FD\u5F97\u5230\u6DF1\u5EA6\u4F18\u5316\uFF0C\u5E76\u5728\u7A33\u5B9A\u6027\u4E0A\u63D0\u4F9B\u4FDD\u969C\u3002"]}),"\n",(0,i.jsxs)(r.p,{children:["\u4EE5\u62C6\u5305\u573A\u666F\u4E3A\u4F8B\uFF0Cwebpack \u539F\u751F\u7684 splitChunks \u914D\u7F6E\u8F83\u4E3A\u590D\u6742\uFF0CBuilder \u5C06\u5176\u5C01\u88C5\u4E3A\u5F00\u7BB1\u5373\u7528\u7684 ",(0,i.jsx)(r.a,{href:"/api/config-performance#performancechunksplit",children:"performance.chunkSplit"})," \u914D\u7F6E\u9879\uFF0C\u9ED8\u8BA4\u5C06\u5E38\u89C1\u7684\u4E09\u65B9\u5E93\u62C6\u5206\u4E3A\u4F53\u79EF\u9002\u4E2D\u7684 chunk\uFF0C\u4F7F\u9875\u9762\u52A0\u8F7D\u901F\u5EA6\u8FBE\u5230\u6700\u4F18\u72B6\u6001\u3002"]}),"\n",(0,i.jsxs)(r.h3,{id:"\u6613\u4E8E\u6269\u5C55\u7684\u63D2\u4EF6\u7CFB\u7EDF",children:["\u6613\u4E8E\u6269\u5C55\u7684\u63D2\u4EF6\u7CFB\u7EDF",(0,i.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#\u6613\u4E8E\u6269\u5C55\u7684\u63D2\u4EF6\u7CFB\u7EDF",children:"#"})]}),"\n",(0,i.jsx)(r.p,{children:"Builder \u63D0\u4F9B\u4E30\u5BCC\u7684\u914D\u7F6E\u9879\u548C\u53EF\u63D2\u62D4\u7684\u63D2\u4EF6\u7CFB\u7EDF\uFF0C\u652F\u6301\u5BF9\u5404\u9879\u80FD\u529B\u8FDB\u884C\u6269\u5C55\u548C\u5B9A\u5236\u3002"}),"\n",(0,i.jsx)(r.p,{children:"\u5BF9\u4E8E Builder \u6765\u8BF4\uFF0C\u6240\u6709\u7684\u6784\u5EFA\u80FD\u529B\u90FD\u662F\u901A\u8FC7\u63D2\u4EF6\u6765\u5B9E\u73B0\u7684\uFF1A"}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsx)(r.li,{children:"\u5927\u90E8\u5206\u63D2\u4EF6\u8F83\u4E3A\u8F7B\u91CF\uFF0C\u88AB\u5185\u7F6E\u5728 Builder \u5185\u90E8\uFF0C\u5F00\u53D1\u8005\u53EF\u4EE5\u901A\u8FC7\u914D\u7F6E\u9879\u6765\u63A7\u5236\u542F\u7528\u3002"}),"\n",(0,i.jsx)(r.li,{children:"\u5C11\u90E8\u5206\u63D2\u4EF6\u8F83\u4E3A\u590D\u6742\uFF0C\u88AB\u5916\u7F6E\u4E3A\u72EC\u7ACB npm \u5305\uFF0C\u5F00\u53D1\u8005\u53EF\u4EE5\u6309\u9700\u8FDB\u884C\u5B89\u88C5\u548C\u4F7F\u7528\u3002"}),"\n"]}),"\n",(0,i.jsx)(r.p,{children:"Builder \u4E5F\u652F\u6301\u81EA\u5B9A\u4E49\u63D2\u4EF6\uFF0C\u56E0\u6B64\u6846\u67B6\u5F00\u53D1\u8005\u53EF\u4EE5\u5F00\u53D1\u81EA\u5B9A\u4E49\u7684\u63D2\u4EF6\uFF0C\u5B9E\u73B0\u5B9A\u5236\u5316\u7684\u6784\u5EFA\u9700\u6C42\u3002"}),"\n",(0,i.jsxs)(r.h2,{id:"npm-\u5305",children:["npm \u5305",(0,i.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#npm-\u5305",children:"#"})]}),"\n",(0,i.jsx)(r.p,{children:"Builder \u5DF2\u53D1\u5E03\u7684 npm \u5305\u6709\uFF1A"}),"\n",(0,i.jsxs)(r.table,{children:["\n",(0,i.jsxs)(r.thead,{children:["\n",(0,i.jsxs)(r.tr,{children:["\n",(0,i.jsx)(r.th,{children:"\u5305\u540D"}),"\n",(0,i.jsx)(r.th,{children:"\u7248\u672C"}),"\n",(0,i.jsx)(r.th,{children:"\u63CF\u8FF0"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(r.tbody,{children:["\n",(0,i.jsxs)(r.tr,{children:["\n",(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"https://www.npmjs.com/package/@modern-js/builder",target:"_blank",rel:"noopener noreferrer",children:"@modern-js/builder"})}),"\n",(0,i.jsx)(r.td,{children:(0,i.jsx)(r.img,{src:"https://img.shields.io/npm/v/@modern-js/builder?style=flat-square",alt:""})}),"\n",(0,i.jsx)(r.td,{children:"Builder \u6838\u5FC3\u5305"}),"\n"]}),"\n",(0,i.jsxs)(r.tr,{children:["\n",(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"https://www.npmjs.com/package/@modern-js/builder-cli",target:"_blank",rel:"noopener noreferrer",children:"@modern-js/builder-cli"})}),"\n",(0,i.jsx)(r.td,{children:(0,i.jsx)(r.img,{src:"https://img.shields.io/npm/v/@modern-js/builder-cli?style=flat-square",alt:""})}),"\n",(0,i.jsx)(r.td,{children:"Builder CLI \u5DE5\u5177"}),"\n"]}),"\n",(0,i.jsxs)(r.tr,{children:["\n",(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"https://www.npmjs.com/package/@modern-js/builder-webpack-provider",target:"_blank",rel:"noopener noreferrer",children:"@modern-js/builder-webpack-provider"})}),"\n",(0,i.jsx)(r.td,{children:(0,i.jsx)(r.img,{src:"https://img.shields.io/npm/v/@modern-js/builder-webpack-provider?style=flat-square",alt:""})}),"\n",(0,i.jsx)(r.td,{children:"\u63D0\u4F9B webpack \u6784\u5EFA\u80FD\u529B"}),"\n"]}),"\n",(0,i.jsxs)(r.tr,{children:["\n",(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"https://www.npmjs.com/package/@modern-js/builder-rspack-provider",target:"_blank",rel:"noopener noreferrer",children:"@modern-js/builder-rspack-provider"})}),"\n",(0,i.jsx)(r.td,{children:(0,i.jsx)(r.img,{src:"https://img.shields.io/npm/v/@modern-js/builder-rspack-provider?style=flat-square",alt:""})}),"\n",(0,i.jsx)(r.td,{children:"\u63D0\u4F9B Rspack \u6784\u5EFA\u80FD\u529B"}),"\n"]}),"\n",(0,i.jsxs)(r.tr,{children:["\n",(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"https://www.npmjs.com/package/@modern-js/builder-plugin-vue",target:"_blank",rel:"noopener noreferrer",children:"@modern-js/builder-plugin-vue"})}),"\n",(0,i.jsx)(r.td,{children:(0,i.jsx)(r.img,{src:"https://img.shields.io/npm/v/@modern-js/builder-plugin-vue?style=flat-square",alt:""})}),"\n",(0,i.jsx)(r.td,{children:"Vue 3 \u63D2\u4EF6"}),"\n"]}),"\n",(0,i.jsxs)(r.tr,{children:["\n",(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"https://www.npmjs.com/package/@modern-js/builder-plugin-vue2",target:"_blank",rel:"noopener noreferrer",children:"@modern-js/builder-plugin-vue2"})}),"\n",(0,i.jsx)(r.td,{children:(0,i.jsx)(r.img,{src:"https://img.shields.io/npm/v/@modern-js/builder-plugin-vue2?style=flat-square",alt:""})}),"\n",(0,i.jsx)(r.td,{children:"Vue 2 \u63D2\u4EF6"}),"\n"]}),"\n",(0,i.jsxs)(r.tr,{children:["\n",(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"https://www.npmjs.com/package/@modern-js/builder-plugin-swc",target:"_blank",rel:"noopener noreferrer",children:"@modern-js/builder-plugin-swc"})}),"\n",(0,i.jsx)(r.td,{children:(0,i.jsx)(r.img,{src:"https://img.shields.io/npm/v/@modern-js/builder-plugin-swc?style=flat-square",alt:""})}),"\n",(0,i.jsx)(r.td,{children:"SWC \u63D2\u4EF6"}),"\n"]}),"\n",(0,i.jsxs)(r.tr,{children:["\n",(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"https://www.npmjs.com/package/@modern-js/builder-plugin-stylus",target:"_blank",rel:"noopener noreferrer",children:"@modern-js/builder-plugin-stylus"})}),"\n",(0,i.jsx)(r.td,{children:(0,i.jsx)(r.img,{src:"https://img.shields.io/npm/v/@modern-js/builder-plugin-stylus?style=flat-square",alt:""})}),"\n",(0,i.jsx)(r.td,{children:"Stylus \u63D2\u4EF6"}),"\n"]}),"\n",(0,i.jsxs)(r.tr,{children:["\n",(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"https://www.npmjs.com/package/@modern-js/builder-plugin-esbuild",target:"_blank",rel:"noopener noreferrer",children:"@modern-js/builder-plugin-esbuild"})}),"\n",(0,i.jsx)(r.td,{children:(0,i.jsx)(r.img,{src:"https://img.shields.io/npm/v/@modern-js/builder-plugin-esbuild?style=flat-square",alt:""})}),"\n",(0,i.jsx)(r.td,{children:"Esbuild \u63D2\u4EF6"}),"\n"]}),"\n",(0,i.jsxs)(r.tr,{children:["\n",(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"https://www.npmjs.com/package/@modern-js/builder-plugin-node-polyfill",target:"_blank",rel:"noopener noreferrer",children:"@modern-js/builder-plugin-node-polyfill"})}),"\n",(0,i.jsx)(r.td,{children:(0,i.jsx)(r.img,{src:"https://img.shields.io/npm/v/@modern-js/builder-plugin-node-polyfill?style=flat-square",alt:""})}),"\n",(0,i.jsx)(r.td,{children:"Node Polyfill \u63D2\u4EF6"}),"\n"]}),"\n",(0,i.jsxs)(r.tr,{children:["\n",(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"https://www.npmjs.com/package/@modern-js/builder-plugin-image-compress",target:"_blank",rel:"noopener noreferrer",children:"@modern-js/builder-plugin-image-compress"})}),"\n",(0,i.jsx)(r.td,{children:(0,i.jsx)(r.img,{src:"https://img.shields.io/npm/v/@modern-js/builder-plugin-image-compress?style=flat-square",alt:""})}),"\n",(0,i.jsx)(r.td,{children:"Image Compress \u63D2\u4EF6"}),"\n"]}),"\n",(0,i.jsxs)(r.tr,{children:["\n",(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"https://www.npmjs.com/package/@modern-js/builder-shared",target:"_blank",rel:"noopener noreferrer",children:"@modern-js/builder-shared"})}),"\n",(0,i.jsx)(r.td,{children:(0,i.jsx)(r.img,{src:"https://img.shields.io/npm/v/@modern-js/builder-shared?style=flat-square",alt:""})}),"\n",(0,i.jsx)(r.td,{children:"Builder \u5185\u90E8\u7684\u516C\u5171\u6A21\u5757"}),"\n"]}),"\n",(0,i.jsxs)(r.tr,{children:["\n",(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"https://www.npmjs.com/package/@modern-js/builder-doc",target:"_blank",rel:"noopener noreferrer",children:"@modern-js/builder-doc"})}),"\n",(0,i.jsx)(r.td,{children:(0,i.jsx)(r.img,{src:"https://img.shields.io/npm/v/@modern-js/builder-doc?style=flat-square",alt:""})}),"\n",(0,i.jsx)(r.td,{children:"Builder \u6587\u6863"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(r.p,{children:["\u4F60\u53EF\u4EE5\u5728 modern.js \u4ED3\u5E93\u7684 ",(0,i.jsx)(r.a,{href:"https://github.com/web-infra-dev/modern.js/tree/main/packages/builder/",target:"_blank",rel:"noopener noreferrer",children:"packages/builder"})," \u76EE\u5F55\u4E0B\u67E5\u770B\u8FD9\u4E9B\u5305\u7684\u6E90\u4EE3\u7801\u3002"]}),"\n",(0,i.jsxs)(r.h2,{id:"\u4E0B\u4E00\u6B65",children:["\u4E0B\u4E00\u6B65",(0,i.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#\u4E0B\u4E00\u6B65",children:"#"})]}),"\n",(0,i.jsx)(r.p,{children:"\u4F60\u53EF\u80FD\u60F3\u8981\uFF1A"}),"\n","\n",(0,i.jsxs)(a.default,{children:[(0,i.jsx)(c.default,{href:"/guide/quick-start.html",title:"\u5FEB\u901F\u4E0A\u624B",description:"\u4E86\u89E3\u5982\u4F55\u4F7F\u7528 Builder"}),(0,i.jsx)(c.default,{href:"/guide/features.html",title:"\u529F\u80FD\u5BFC\u822A",description:"\u4E86\u89E3 Builder \u63D0\u4F9B\u7684\u6240\u6709\u529F\u80FD"}),(0,i.jsx)(c.default,{href:"/api/index.html",title:"\u67E5\u9605 API",description:"\u67E5\u770B\u8BE6\u7EC6\u7684 API \u6587\u6863"})]})]})}(s=globalThis).__RSPRESS_PAGE_META||(s.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["zh%2Fguide%2Fintroduction.mdx"]={toc:[{text:"Rust \u5316",id:"rust-\u5316",depth:2},{text:"\u5B9A\u4F4D",id:"\u5B9A\u4F4D",depth:2},{text:"\u7279\u6027",id:"\u7279\u6027",depth:2},{text:"\u652F\u6301 Rspack \u6253\u5305",id:"\u652F\u6301-rspack-\u6253\u5305",depth:3},{text:"\u6DF1\u5EA6\u4F18\u5316\u6784\u5EFA\u4EA7\u7269",id:"\u6DF1\u5EA6\u4F18\u5316\u6784\u5EFA\u4EA7\u7269",depth:3},{text:"\u6613\u4E8E\u6269\u5C55\u7684\u63D2\u4EF6\u7CFB\u7EDF",id:"\u6613\u4E8E\u6269\u5C55\u7684\u63D2\u4EF6\u7CFB\u7EDF",depth:3},{text:"npm \u5305",id:"npm-\u5305",depth:2},{text:"\u4E0B\u4E00\u6B65",id:"\u4E0B\u4E00\u6B65",depth:2}],title:"\u4ECB\u7ECD",frontmatter:{}};var p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=Object.assign({},(0,t.useMDXComponents)(),e.components).wrapper;return r?(0,i.jsx)(r,(0,l._)((0,d._)({},e),{children:(0,i.jsx)(o,(0,d._)({},e))})):o(e)}}}]);