(self.webpackChunk_modern_js_builder_doc=self.webpackChunk_modern_js_builder_doc||[]).push([["3634"],{99561:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return t}});var s=r("15169"),c=r("43932"),d=r("9880"),l=r("23169");function a(e){var n=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",ul:"ul",li:"li",pre:"pre",code:"code",h3:"h3",img:"img",div:"div"},(0,l.useMDXComponents)(),e.components);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.h1,{id:"\u4F7F\u7528-webpack-inspector",children:["\u4F7F\u7528 Webpack Inspector",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u4F7F\u7528-webpack-inspector",children:"#"})]}),"\n",(0,d.jsxs)(n.p,{children:["Builder \u5185\u7F6E\u4E86 ",(0,d.jsx)(n.a,{href:"https://github.com/web-infra-dev/webpack-inspector",target:"_blank",rel:"noopener noreferrer",children:"webpack inspector"})," \u6765\u8F85\u52A9\u8C03\u8BD5 webpack \u6784\u5EFA\u95EE\u9898\u3002"]}),"\n",(0,d.jsxs)(n.h2,{id:"\u4ECB\u7ECD",children:["\u4ECB\u7ECD",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u4ECB\u7ECD",children:"#"})]}),"\n",(0,d.jsx)(n.p,{children:"\u7531\u4E8E webpack \u5185\u90E8\u7684\u5DE5\u4F5C\u6D41\u7A0B\u6BD4\u8F83\u9ED1\u76D2\uFF0C\u5728\u4F7F\u7528 webpack \u65F6\uFF0C\u6211\u4EEC\u5E38\u5E38\u4F1A\u9047\u5230\u5982\u4E0B\u7684\u4E00\u4E9B\u95EE\u9898:"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"\u5728\u4F7F\u7528\u4E0A\u5C42\u6846\u67B6\u65F6\uFF0C\u4E0D\u77E5\u9053\u6700\u7EC8\u751F\u6210\u7684 webpack \u914D\u7F6E\u5305\u542B\u54EA\u4E9B\u5185\u5BB9\u3002"}),"\n",(0,d.jsx)(n.li,{children:"\u6BCF\u4E2A\u6A21\u5757\u4F1A\u7ECF\u8FC7\u4E0D\u540C\u7684 loader \u5904\u7406\uFF0C\u7ECF\u8FC7\u5404\u4E2A loader \u7684\u7F16\u8BD1\u7ED3\u679C\u96BE\u4EE5\u611F\u77E5\u3002"}),"\n",(0,d.jsx)(n.li,{children:"\u96BE\u4EE5\u611F\u77E5 webpack \u5404\u4E2A\u7F16\u8BD1\u73AF\u8282 (\u6BD4\u5982 babel-loader\u3001ts-loader) \u7684\u8017\u65F6\u60C5\u51B5\u3002"}),"\n"]}),"\n",(0,d.jsxs)(n.p,{children:["\u4E3A\u4E86\u66F4\u65B9\u4FBF\u5730\u8FDB\u884C webpack \u9879\u76EE\u7684\u9519\u8BEF\u6392\u67E5\u3001\u6027\u80FD\u5206\u6790\u53CA loader \u5F00\u53D1\uFF0C\u6211\u4EEC\u5728 Builder \u4E2D\u5185\u7F6E\u4E86 ",(0,d.jsx)(n.a,{href:"https://github.com/web-infra-dev/webpack-inspector",target:"_blank",rel:"noopener noreferrer",children:"webpack inspector"})," \u5DE5\u5177\u3002"]}),"\n",(0,d.jsxs)(n.h2,{id:"\u542F\u7528",children:["\u542F\u7528",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u542F\u7528",children:"#"})]}),"\n",(0,d.jsxs)(n.p,{children:["\u4F60\u53EF\u4EE5\u901A\u8FC7 ",(0,d.jsx)(n.a,{href:"/api/config-tools#toolsinspector",children:"tools.inspector"})," \u914D\u7F6E\u9879\u6765\u5F00\u542F webpack inspector:"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",children:"export default {\n  tools: {\n    inspector: {},\n  },\n};\n"})}),"\n",(0,d.jsx)(n.p,{children:"\u4E3A\u4E86\u907F\u514D inspector \u5F71\u54CD\u6B63\u5E38\u5F00\u53D1\uFF0C\u5EFA\u8BAE\u914D\u7F6E\u4EC5\u5728 DEBUG \u65F6\u5F00\u542F inspector\uFF1A"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",children:"export default {\n  tools: {\n    inspector: process.env.DEBUG ? {} : undefined,\n  },\n};\n"})}),"\n",(0,d.jsxs)(n.p,{children:["\u6DFB\u52A0\u4EE5\u4E0A\u914D\u7F6E\u540E\uFF0C\u5F53\u4F60\u6267\u884C ",(0,d.jsx)(n.code,{children:"DEBUG=true pnpm dev"})," \u65F6\uFF0CBuilder \u4F1A\u5728\u7F16\u8BD1\u5B8C\u6210\u540E\u542F\u52A8 inspector\uFF0C\u6B64\u65F6 Shell \u4E2D\u53EF\u4EE5\u770B\u5230\u5982\u4E0B\u4FE1\u606F\uFF1A"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-shell",children:"info    Starting dev server...\n\n\u3010Webpack Inspector\u3011\uD83D\uDD25 started at http://localhost:3333\n"})}),"\n",(0,d.jsxs)(n.p,{children:["\u6253\u5F00 ",(0,d.jsx)(n.code,{children:"http://localhost:3333"})," \u5730\u5740\uFF0C\u5373\u53EF\u8BBF\u95EE inspector \u7684\u8C03\u8BD5\u9762\u677F\u3002"]}),"\n",(0,d.jsxs)(n.h2,{id:"\u8C03\u8BD5\u9762\u677F",children:["\u8C03\u8BD5\u9762\u677F",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u8C03\u8BD5\u9762\u677F",children:"#"})]}),"\n",(0,d.jsx)(n.p,{children:"Inspector \u7684\u8C03\u8BD5\u9762\u677F\u63D0\u4F9B\u4E86\u591A\u79CD\u6A21\u5F0F\uFF0C\u4F60\u53EF\u4EE5\u901A\u8FC7\u53F3\u4E0A\u89D2\u7684\u5F00\u5173\u8FDB\u884C\u5207\u6362\u3002"}),"\n",(0,d.jsxs)(n.h3,{id:"\u914D\u7F6E\u9884\u89C8\u6A21\u5F0F",children:["\u914D\u7F6E\u9884\u89C8\u6A21\u5F0F",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u914D\u7F6E\u9884\u89C8\u6A21\u5F0F",children:"#"})]}),"\n",(0,d.jsx)(n.p,{children:"\u9762\u677F\u7684\u9ED8\u8BA4\u6A21\u5F0F\u4E3A\u914D\u7F6E\u9884\u89C8\u6A21\u5F0F\u3002\u6B64\u6A21\u5F0F\u4E0B\u53EF\u4EE5\u67E5\u770B webpack \u5185\u90E8\u6240\u6709\u7684\u914D\u7F6E\u4FE1\u606F\uFF0C\u914D\u7F6E\u5BF9\u8C61\u53EF\u81EA\u7531\u5C55\u5F00\u548C\u6298\u53E0:"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/zq-uylkvT/ljhwZthlaukjlkulzlp/39248c0f-b1cd-4ea5-b522-3ebba7569497.png",alt:""})}),"\n",(0,d.jsxs)(n.h3,{id:"\u5217\u8868\u6A21\u5F0F",children:["\u5217\u8868\u6A21\u5F0F",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u5217\u8868\u6A21\u5F0F",children:"#"})]}),"\n",(0,d.jsx)(n.p,{children:"\u6B64\u6A21\u5F0F\u4E0B\u4F1A\u5C55\u793A\u51FA\u6240\u6709\u7684\u6A21\u5757\u4FE1\u606F:"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/zq-uylkvT/ljhwZthlaukjlkulzlp/8ff3bba0-7824-43b3-996f-7a3b5d2c4f59.png",alt:""})}),"\n",(0,d.jsx)(n.p,{children:"\u70B9\u51FB\u5217\u8868\u9879\u4F1A\u51FA\u73B0\u6A21\u5757\u7684\u7F16\u8BD1\u8BE6\u60C5\u4FE1\u606F:"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/zq-uylkvT/ljhwZthlaukjlkulzlp/output.png",alt:""})}),"\n",(0,d.jsxs)(n.h3,{id:"loader-\u7EDF\u8BA1\u6570\u636E",children:["Loader \u7EDF\u8BA1\u6570\u636E",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#loader-\u7EDF\u8BA1\u6570\u636E",children:"#"})]}),"\n",(0,d.jsx)(n.p,{children:"\u70B9\u51FB\u5982\u4E0B\u7684\u5F00\u5173\uFF0C\u53EF\u4EE5\u67E5\u770B Loader \u7684\u7EDF\u8BA1\u6570\u636E:"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/zq-uylkvT/ljhwZthlaukjlkulzlp/c0697cd6-963f-4169-8dc3-dc178641a861.png",alt:""})}),"\n",(0,d.jsxs)(n.h3,{id:"\u4F9D\u8D56\u56FE\u6A21\u5F0F",children:["\u4F9D\u8D56\u56FE\u6A21\u5F0F",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u4F9D\u8D56\u56FE\u6A21\u5F0F",children:"#"})]}),"\n",(0,d.jsx)(n.p,{children:"\u6B64\u6A21\u5F0F\u4E0B\u4F1A\u5C55\u793A\u51FA\u6240\u6709\u6A21\u5757\u7684\u4F9D\u8D56\u5173\u7CFB\uFF1A"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/zq-uylkvT/ljhwZthlaukjlkulzlp/9ee30176-e993-4638-83d0-add14484b1b2.png",alt:""})}),"\n",(0,d.jsx)(n.p,{children:"\u70B9\u51FB\u56FE\u4E2D\u7684\u8282\u70B9\u4E5F\u4F1A\u5448\u73B0\u5177\u4F53\u6A21\u5757\u7684\u7F16\u8BD1\u8BE6\u60C5\uFF1A"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/zq-uylkvT/ljhwZthlaukjlkulzlp/6f4b6cc7-94c8-446a-8b64-86ca98fbdca7.png",alt:""})}),"\n",(0,d.jsxs)(n.div,{className:"rspress-directive tip",children:[(0,d.jsx)(n.div,{className:"rspress-directive-title",children:"TIP"}),(0,d.jsx)(n.div,{className:"rspress-directive-content",children:(0,d.jsx)(n.p,{children:"\u51FA\u4E8E\u6027\u80FD\u8003\u8651\uFF0C\u6A21\u5757\u6570\u91CF > 100 \u65F6\u4E0D\u4F1A\u5C55\u793A\u4F9D\u8D56\u56FE\u3002"})})]})]})}function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,l.useMDXComponents)(),e.components).wrapper;return n?(0,d.jsx)(n,(0,c._)((0,s._)({},e),{children:(0,d.jsx)(a,(0,s._)({},e))})):a(e)}var t=i;i.__RSPRESS_PAGE_META={},i.__RSPRESS_PAGE_META["zh%2Fguide%2Fdebug%2Finspector.md"]={toc:[{text:"\u4ECB\u7ECD",id:"\u4ECB\u7ECD",depth:2},{text:"\u542F\u7528",id:"\u542F\u7528",depth:2},{text:"\u8C03\u8BD5\u9762\u677F",id:"\u8C03\u8BD5\u9762\u677F",depth:2},{text:"\u914D\u7F6E\u9884\u89C8\u6A21\u5F0F",id:"\u914D\u7F6E\u9884\u89C8\u6A21\u5F0F",depth:3},{text:"\u5217\u8868\u6A21\u5F0F",id:"\u5217\u8868\u6A21\u5F0F",depth:3},{text:"Loader \u7EDF\u8BA1\u6570\u636E",id:"loader-\u7EDF\u8BA1\u6570\u636E",depth:3},{text:"\u4F9D\u8D56\u56FE\u6A21\u5F0F",id:"\u4F9D\u8D56\u56FE\u6A21\u5F0F",depth:3}],title:"\u4F7F\u7528 Webpack Inspector"}}}]);