(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["51617"],{12028:function(e,n,d){"use strict";d.r(n),d.d(n,{default:function(){return i},frontmatter:function(){return t}});var r=d("9880"),s=d("23169");function o(e){let n=Object.assign({h1:"h1",a:"a",h2:"h2",p:"p",code:"code",div:"div",strong:"strong",pre:"pre",img:"img"},(0,s.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"\u5E38\u89C1\u95EE\u9898",children:["\u5E38\u89C1\u95EE\u9898",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u5E38\u89C1\u95EE\u9898",children:"#"})]}),"\n",(0,r.jsxs)(n.h2,{id:"\u6D4F\u89C8\u5668\u517C\u5BB9\u6027",children:["\u6D4F\u89C8\u5668\u517C\u5BB9\u6027",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u6D4F\u89C8\u5668\u517C\u5BB9\u6027",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["Reduck \u7684\u7F16\u8BD1\u6784\u5EFA\u4EA7\u7269\u9ED8\u8BA4\u4F7F\u7528 ES6 \u8BED\u6CD5\uFF0C\u5982\u679C\u4F60\u9700\u8981\u652F\u6301\u66F4\u4F4E\u7248\u672C\u7684\u6D4F\u89C8\u5668\uFF0C\u8BF7\u5C06 ",(0,r.jsx)(n.code,{children:"@modern-js-reduck"})," \u547D\u540D\u7A7A\u95F4\u4E0B\u7684\u6240\u6709\u5305\u52A0\u5165\u5230\u5E94\u7528\u7684\u7F16\u8BD1\u8FC7\u7A0B\u3002"]}),"\n",(0,r.jsxs)(n.div,{className:"rspress-directive info",children:[(0,r.jsx)(n.div,{className:"rspress-directive-title",children:"\u8865\u5145\u4FE1\u606F"}),(0,r.jsxs)(n.div,{className:"rspress-directive-content",children:[(0,r.jsxs)(n.p,{children:["Reduck \u4F7F\u7528\u7684 ",(0,r.jsx)(n.a,{href:"https://babeljs.io/docs/en/babel-preset-env",target:"_blank",rel:"noopener noreferrer",children:(0,r.jsx)(n.code,{children:"@babel/preset-env"})})," \u7684\u8BE6\u7EC6",(0,r.jsx)(n.a,{href:"https://github.com/web-infra-dev/reduck/blob/main/common/config.js#L10~L17",target:"_blank",rel:"noopener noreferrer",children:"\u914D\u7F6E"}),"\u3002"]}),"\n"]})]}),"\n",(0,r.jsxs)(n.h2,{id:"\u5FAE\u524D\u7AEF\u5B50\u5E94\u7528-model-\u8BBF\u95EE\u4E3B\u5E94\u7528-model",children:["\u5FAE\u524D\u7AEF\u5B50\u5E94\u7528 Model \u8BBF\u95EE\u4E3B\u5E94\u7528 Model",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u5FAE\u524D\u7AEF\u5B50\u5E94\u7528-model-\u8BBF\u95EE\u4E3B\u5E94\u7528-model",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["\u5FAE\u524D\u7AEF\u5B50\u5E94\u7528 Model \u8BBF\u95EE\u4E3B\u5E94\u7528 Model \u65F6\uFF0C\u5982\u679C\u8BE5 ",(0,r.jsx)(n.strong,{children:"Model"})," \u5728\u4E3B\u5E94\u7528\u5C1A\u672A\u6302\u8F7D\uFF0C\u4F1A\u81EA\u52A8\u6302\u8F7D\u5230\u5B50\u5E94\u7528\u4E0A\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u793A\u4F8B\uFF1A"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"import { useModel } from '@modern-js/runtime/model';\nimport parentModel from '@MasterApp/models/todoModel';\n\nfunction SubModelApp() {\n  const [state, actions] = useModel(parentModel);\n\n  return <div>...</div>;\n}\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/aphqeh7uhohpquloj/modern-js/docs/mf-communicate.svg",alt:"\u5FAE\u524D\u7AEF\u901A\u4FE1\u6D41\u7A0B\u56FE"})}),"\n",(0,r.jsx)(n.p,{children:"\u4E3A\u4E86\u907F\u514D\u610F\u5916\u964D\u7EA7\u6302\u8F7D\uFF0C\u5EFA\u8BAE\u5C06\u4E3B\u5E94\u7528\u6240\u9700\u8981\u5171\u4EAB\u7684 Model \u9884\u5148\u6302\u8F7D\uFF1A"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"// App \u662F\u4E3B\u5E94\u7528\u7684\u5165\u53E3\u7EC4\u4EF6\uFF0CsharedModel1\u3001sharedModel2 \u662F\u9700\u8981\u5171\u4EAB\u7684 Model\u3002\nApp.models = [sharedModel1, sharedModel2];\n"})})]})}function l(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,s.useMDXComponents)(),e.components);return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}var i=l;l.__RSPRESS_PAGE_META={},l.__RSPRESS_PAGE_META["zh%2Fguides%2Ftopic-detail%2Fmodel%2Ffaq.mdx"]={toc:[{text:"\u6D4F\u89C8\u5668\u517C\u5BB9\u6027",id:"\u6D4F\u89C8\u5668\u517C\u5BB9\u6027",depth:2},{text:"\u5FAE\u524D\u7AEF\u5B50\u5E94\u7528 Model \u8BBF\u95EE\u4E3B\u5E94\u7528 Model",id:"\u5FAE\u524D\u7AEF\u5B50\u5E94\u7528-model-\u8BBF\u95EE\u4E3B\u5E94\u7528-model",depth:2}],title:"\u5E38\u89C1\u95EE\u9898"};let t={sidebar_position:13,title:"\u5E38\u89C1\u95EE\u9898"}}}]);