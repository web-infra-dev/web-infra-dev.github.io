(self.webpackChunk_modern_js_builder_doc=self.webpackChunk_modern_js_builder_doc||[]).push([["5307"],{52158:function(e,r,n){"use strict";n.r(r),n.d(r,{default:function(){return a}});var s,c=n("15169"),i=n("43932"),l=n("9880"),t=n("23169");function d(e){var r=Object.assign({h1:"h1",a:"a",p:"p",code:"code",h2:"h2",strong:"strong",pre:"pre",h3:"h3",div:"div"},(0,t.useMDXComponents)(),e.components);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(r.h1,{id:"\u4F7F\u7528-typescript",children:["\u4F7F\u7528 TypeScript",(0,l.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#\u4F7F\u7528-typescript",children:"#"})]}),"\n",(0,l.jsxs)(r.p,{children:["Builder \u5BF9 TypeScript \u7684\u8F6C\u8BD1\u548C\u7C7B\u578B\u68C0\u67E5\u505A\u4E86\u9ED8\u8BA4\u652F\u6301\uFF0C\u65E0\u9700\u4EFB\u4F55\u914D\u7F6E\u5373\u53EF\u5728\u9879\u76EE\u4E2D\u4F7F\u7528 ",(0,l.jsx)(r.code,{children:".ts"})," \u548C ",(0,l.jsx)(r.code,{children:".tsx"})," \u6587\u4EF6\u3002"]}),"\n",(0,l.jsxs)(r.h2,{id:"typescript-\u8F6C\u8BD1",children:["TypeScript \u8F6C\u8BD1",(0,l.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#typescript-\u8F6C\u8BD1",children:"#"})]}),"\n",(0,l.jsx)(r.p,{children:"Builder \u6709\u4E09\u79CD\u53EF\u9009\u65B9\u5F0F\u5904\u7406 TypeScript \u6587\u4EF6\u3002"}),"\n",(0,l.jsx)(r.p,{children:(0,l.jsx)(r.strong,{children:"Babel"})}),"\n",(0,l.jsxs)(r.p,{children:["\u5728\u9ED8\u8BA4\u914D\u7F6E\u4E0B\uFF0C\u6E90\u7801\u4E2D\u6240\u6709\u7684 TypeScript \u6587\u4EF6\u4F1A\u7ECF\u8FC7 Babel \u8F6C\u8BD1\u3002\n\u53EF\u80FD\u4F60\u5728\u67E5\u9605\u8F83\u8001\u65E7\u7684\u8D44\u6599\u65F6\u4F1A\u53D1\u73B0\uFF0CBabel \u65E0\u6CD5\u5904\u7406 ",(0,l.jsx)(r.code,{children:"const enum"})," \u4EE5\u53CA ",(0,l.jsx)(r.code,{children:"namespace alias"})," \u8BED\u6CD5\uFF0C\u4F46\u662F\u5176\u5B9E\u5728 ",(0,l.jsx)(r.a,{href:"https://babeljs.io/blog/2021/07/26/7.15.0",target:"_blank",rel:"noopener noreferrer",children:"7.15"})," \u7248\u672C\u5DF2\u7ECF\u5F97\u5230\u4E86\u652F\u6301\u3002Babel \u65E0\u9700\u624B\u52A8\u5F00\u542F\uFF0C\u76F4\u63A5\u5728\u9879\u76EE\u4E2D\u4F7F\u7528 TypeScript \u6587\u4EF6\u5373\u53EF\u3002"]}),"\n",(0,l.jsx)(r.p,{children:(0,l.jsx)(r.strong,{children:"ts-loader"})}),"\n",(0,l.jsx)(r.p,{children:"ts-loader \u4F7F\u7528 TypeScript \u5B98\u65B9\u7684 TSC \u8F6C\u8BD1\u3002\u5F53\u5F00\u542F ts-loader \u540E TypeScript \u6587\u4EF6\u4E0D\u4F1A\u518D\u7ECF\u8FC7 Babel \u7F16\u8BD1\u5904\u7406\uFF0C\u4F46\u5904\u7406\u540E\u7684 JavaScript \u4EA7\u7269\u4ECD\u7136\u4F1A\u7531 Babel \u8FDB\u884C\u8BED\u6CD5\u964D\u7EA7\u4EE5\u53CA Polyfill \u6CE8\u5165\u3002"}),"\n",(0,l.jsx)(r.p,{children:"\u5F00\u542F ts-loader(\u4F7F\u7528\u9ED8\u8BA4\u914D\u7F6E):"}),"\n",(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{className:"language-ts",children:"export default {\n  tools: {\n    tsLoader: {},\n  },\n};\n"})}),"\n",(0,l.jsxs)(r.p,{children:["\u66F4\u8BE6\u7EC6\u914D\u7F6E\u53EF\u89C1 ",(0,l.jsx)(r.a,{href:"/api/config-tools#toolstsloader",children:"tools.tsLoader"}),"\u3002\n\u5982\u679C\u5F00\u542F ts-loader\uFF0C\u9ED8\u8BA4\u4E0D\u4F1A\u542F\u7528\u7C7B\u578B\u68C0\u67E5\uFF0C\u53EA\u4F1A\u8FDB\u884C\u8F6C\u8BD1\u3002"]}),"\n",(0,l.jsx)(r.p,{children:(0,l.jsx)(r.strong,{children:"SWC"})}),"\n",(0,l.jsxs)(r.p,{children:["\u5982\u679C\u60F3\u8981\u66F4\u5FEB\u7684\u9879\u76EE\u6784\u5EFA\u901F\u5EA6\uFF0C\u5E76\u4E14\u9879\u76EE\u6CA1\u6709\u4F9D\u8D56\u67D0\u4E9B\u81EA\u5B9A\u4E49\u7684 Babel \u63D2\u4EF6\uFF0C\u90A3\u4E48\u4E5F\u53EF\u4EE5\u9009\u62E9 SWC \u6765\u5BF9 JavaScript \u548C TypeScript \u8FDB\u884C\u8F6C\u8BD1\u548C\u538B\u7F29\u3002Builder \u7684 SWC \u63D2\u4EF6\u9ED8\u8BA4\u652F\u6301 TypeScript, TSX, Decorator\uFF0C\u4F7F\u7528\u65B9\u5F0F\u53EF\u89C1 ",(0,l.jsx)(r.a,{href:"/plugins/plugin-swc",children:"SWC \u63D2\u4EF6"}),"\u3002"]}),"\n",(0,l.jsxs)(r.h3,{id:"\u4E3A\u4EC0\u4E48\u9ED8\u8BA4\u4F7F\u7528-babel",children:["\u4E3A\u4EC0\u4E48\u9ED8\u8BA4\u4F7F\u7528 Babel",(0,l.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#\u4E3A\u4EC0\u4E48\u9ED8\u8BA4\u4F7F\u7528-babel",children:"#"})]}),"\n",(0,l.jsx)(r.p,{children:"Babel \u9664\u4E86\u6CA1\u6709\u7C7B\u578B\u68C0\u67E5\u4EE5\u5916\uFF0C\u5BF9 TypeScript \u8BED\u6CD5\u652F\u6301\u5DF2\u7ECF\u975E\u5E38\u5B8C\u5584\uFF0C\u800C\u7C7B\u578B\u68C0\u67E5\u53EF\u4EE5\u501F\u52A9\u53E6\u5916\u7684\u5DE5\u5177\u66F4\u597D\u5730\u8FDB\u884C\u3002\u8F6C\u8BD1\u5230\u4F4E\u7248\u672C\u7684 JavaScript \u65F6\uFF0C\u67D0\u4E9B\u8BED\u6CD5 Babel \u4F1A\u5904\u7406\u5F97\u66F4\u7B26\u5408\u6807\u51C6\uFF0C\u4F8B\u5982 Babel \u4F1A\u5C06\u7C7B\u6210\u5458\u521D\u59CB\u5316\u4E3A undefined\uFF0C\u5C06\u7C7B\u65B9\u6CD5\u6807\u8BB0\u4E0D\u53EF\u679A\u4E3E\u7B49\u884C\u4E3A\u3002\u5982\u679C\u542F\u7528 ts-loader\uFF0C\u4E3A\u4E86\u66F4\u7CBE\u786E\u7684\u8BED\u6CD5\u964D\u7EA7\u548C Polyfill\uFF0C\u6700\u540E\u8FD8\u662F\u4F1A\u5C06\u5904\u7406\u540E\u7684\u4EA7\u7269\u518D\u6B21\u7ECF\u8FC7 Babel \u5904\u7406\uFF0C\u4EA7\u751F\u4E0D\u5FC5\u8981\u7684\u6027\u80FD\u5F00\u9500\u3002"}),"\n",(0,l.jsxs)(r.h2,{id:"\u7C7B\u578B\u68C0\u67E5",children:["\u7C7B\u578B\u68C0\u67E5",(0,l.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#\u7C7B\u578B\u68C0\u67E5",children:"#"})]}),"\n",(0,l.jsxs)(r.p,{children:["\u76EE\u524D\u751F\u4EA7\u53EF\u7528\u7684\u7C7B\u578B\u68C0\u67E5\u5DE5\u5177\u53EA\u6709\u5B98\u65B9\u7684 TSC\uFF0CTSC \u7C7B\u578B\u68C0\u67E5\u8017\u65F6\u5728\u5927\u9879\u76EE\u4E2D\u5F80\u5F80\u662F\u5F88\u6162\u7684\u8FC7\u7A0B\uFF0CBuilder \u4E2D\u9ED8\u8BA4\u4F7F\u7528 tsChecker(",(0,l.jsx)(r.a,{href:"https://github.com/TypeStrong/fork-ts-checker-webpack-plugin",target:"_blank",rel:"noopener noreferrer",children:"fork-ts-checker-webpack-plugin"}),") \u5728\u6784\u5EFA\u8FC7\u7A0B\u4E2D\u5F02\u6B65\u8FDB\u884C\u7C7B\u578B\u68C0\u67E5\uFF0C\u4E0D\u963B\u585E\u9879\u76EE\u7684\u542F\u52A8\u3002"]}),"\n",(0,l.jsx)(r.p,{children:"\u914D\u7F6E tsChecker(\u4F7F\u7528\u9ED8\u8BA4\u914D\u7F6E):"}),"\n",(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{className:"language-ts",children:"export default {\n  tools: {\n    tsChecker: {},\n  },\n};\n"})}),"\n",(0,l.jsxs)(r.p,{children:["\u66F4\u591A\u914D\u7F6E\u53EF\u89C1 ",(0,l.jsx)(r.a,{href:"/api/config-tools#toolstschecker",children:"tsChecker \u914D\u7F6E"}),"\u3002"]}),"\n",(0,l.jsxs)(r.p,{children:["\u5982\u679C\u5F00\u542F ts-loader \u5E76\u4E14\u624B\u52A8\u914D\u7F6E\u4E86 ",(0,l.jsx)(r.code,{children:"compileOnly: false"}),"\uFF0C\u8BF7\u5173\u95ED tsChecker\uFF0C\u907F\u514D\u91CD\u590D\u7C7B\u578B\u68C0\u67E5\u3002"]}),"\n",(0,l.jsxs)(r.div,{className:"modern-directive tip",children:[(0,l.jsx)(r.div,{className:"modern-directive-title",children:"STC"}),(0,l.jsx)(r.div,{className:"modern-directive-content",children:(0,l.jsxs)(r.p,{children:["SWC \u4F5C\u8005\u65B0\u5F00\u6E90\u7684\u57FA\u4E8E Rust \u7684\u7C7B\u578B\u68C0\u67E5\u5DE5\u5177 ",(0,l.jsx)(r.a,{href:"https://github.com/dudykr/stc",target:"_blank",rel:"noopener noreferrer",children:"STC"})," \u76EE\u524D\u8FD8\u4E0D\u53EF\u7528\u4E8E\u751F\u4EA7\uFF0C\u8FD8\u5728\u8D77\u6B65\u9636\u6BB5\uFF0C\u4E0D\u63A8\u8350\u7528\u4E8E\u9879\u76EE\u4E2D\uFF0C\u7B49\u5F85\u66F4\u6210\u719F\u4E4B\u540E\uFF0C\u6211\u4EEC\u4F1A\u8003\u8651\u96C6\u6210\u5230 Builder \u7684 SWC \u63D2\u4EF6\u4E2D\u4F5C\u4E3A\u5B9E\u9A8C\u529F\u80FD\uFF0C\u656C\u8BF7\u671F\u5F85\u3002\n"]})})]})]})}(s=globalThis).__RSPRESS_PAGE_META||(s.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["zh%2Fguide%2Fbasic%2Ftypescript.md"]={toc:[{text:"TypeScript \u8F6C\u8BD1",id:"typescript-\u8F6C\u8BD1",depth:2},{text:"\u4E3A\u4EC0\u4E48\u9ED8\u8BA4\u4F7F\u7528 Babel",id:"\u4E3A\u4EC0\u4E48\u9ED8\u8BA4\u4F7F\u7528-babel",depth:3},{text:"\u7C7B\u578B\u68C0\u67E5",id:"\u7C7B\u578B\u68C0\u67E5",depth:2}],title:"\u4F7F\u7528 TypeScript",frontmatter:{}};var a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=Object.assign({},(0,t.useMDXComponents)(),e.components).wrapper;return r?(0,l.jsx)(r,(0,i._)((0,c._)({},e),{children:(0,l.jsx)(d,(0,c._)({},e))})):d(e)}}}]);