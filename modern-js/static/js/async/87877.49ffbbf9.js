"use strict";(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["87877"],{96692:function(e,r,n){n.r(r),n.d(r,{default:function(){return o}});var s=n(38093),d=n(75878);function t(e){let r=Object.assign({h1:"h1",a:"a",div:"div",p:"p",code:"code",h2:"h2",pre:"pre",h3:"h3",ul:"ul",li:"li",strong:"strong",em:"em"},(0,d.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(r.h1,{id:"createstore",children:["createStore",(0,s.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#createstore",children:"#"})]}),"\n",(0,s.jsxs)(r.div,{className:"rspress-directive info",children:[(0,s.jsx)(r.div,{className:"rspress-directive-title",children:"\u8865\u5145\u4FE1\u606F"}),(0,s.jsxs)(r.div,{className:"rspress-directive-content",children:[(0,s.jsxs)(r.p,{children:["\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u672C\u8282\u6240\u6709 API \u7684\u5BFC\u51FA\u5305\u540D\u4E3A\uFF1A",(0,s.jsx)(r.code,{children:"@modern-js/runtime/model"}),"\u3002"]}),"\n",(0,s.jsxs)(r.p,{children:["\u5982\u679C\u662F\u5728 Modern.js \u4EE5\u5916\u5355\u72EC\u96C6\u6210 Reduck\uFF0C\u5BFC\u51FA\u5305\u540D\u4E3A\uFF1A",(0,s.jsx)(r.code,{children:"@modern-js-reduck/react"}),"\u3002"]}),"\n"]})]}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.code,{children:"createStore"})," \u7528\u4E8E\u521B\u5EFA\u4E00\u4E2A Store \u5BF9\u8C61\u3002Reduck \u7684 Store \u57FA\u4E8E Redux \u7684 ",(0,s.jsx)(r.a,{href:"https://redux.js.org/api/store",target:"_blank",rel:"noopener noreferrer",children:"Store"})," \u5B9E\u73B0\uFF0C\u7528\u4E8E\u5B58\u50A8\u5E94\u7528\u7684\u72B6\u6001\uFF0C\u540C\u65F6\u63D0\u4F9B\u4E00\u7EC4\u7528\u4E8E\u7BA1\u7406\u72B6\u6001\u548C Model \u7684\u65B9\u6CD5\u3002"]}),"\n",(0,s.jsxs)(r.p,{children:["\u4E00\u822C\u60C5\u51B5\u4E0B\uFF0C\u4E0D\u9700\u8981\u4F7F\u7528\u8FD9\u4E2A API\uFF0C\u53EA\u6709\u9700\u8981\u5B8C\u5168\u638C\u63A7 Store \u7684\u521B\u5EFA\u65F6\uFF0C\u624D\u4F1A\u4F7F\u7528\u8FD9\u4E2A API\u3002\u4F8B\u5982\uFF0C\u81EA\u5B9A\u4E49\u4E00\u4E2A Store\uFF0C\u4F20\u5165 ",(0,s.jsx)(r.a,{href:"/zh/apis/app/runtime/model/Provider",children:(0,s.jsx)(r.code,{children:"Provider"})})," \u7EC4\u4EF6\u4F7F\u7528\u3002"]}),"\n",(0,s.jsxs)(r.h2,{id:"\u51FD\u6570\u7B7E\u540D",children:["\u51FD\u6570\u7B7E\u540D",(0,s.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#\u51FD\u6570\u7B7E\u540D",children:"#"})]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-ts",children:"interface StoreConfig {\n  initialState?: Record<string, any>;\n  middlewares?: Middleware[];\n  models?: Model[];\n  plugins?: Plugin[];\n  enhancers?: StoreEnhancer[];\n}\n\ninterface ReduckStore extends ReduxStore {\n  use: typeof useModel;\n  unmount: (model: Model) => void;\n}\n\nfunction createStore(config: StoreConfig): ReduckStore;\n"})}),"\n",(0,s.jsxs)(r.h3,{id:"\u53C2\u6570",children:["\u53C2\u6570",(0,s.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#\u53C2\u6570",children:"#"})]}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["config?\uFF1Astore \u914D\u7F6E\u9009\u9879","\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"initialState?: \u8BBE\u7F6E\u5168\u5C40 Store \u7684\u521D\u59CB\u72B6\u6001\u3002"}),"\n",(0,s.jsx)(r.li,{children:"models?: \u8BBE\u7F6E\u63D0\u524D\uFF08Store \u521B\u5EFA\u540E\uFF09\u6302\u8F7D\u5230 Store \u7684 Model\u3002\uFF08\u6B63\u5E38\u4F7F\u7528\u65E0\u9700\u63D0\u524D\u6302\u8F7D\uFF09"}),"\n",(0,s.jsxs)(r.li,{children:["middlewares?: \u8BBE\u7F6E Redux ",(0,s.jsx)(r.a,{href:"https://redux.js.org/understanding/thinking-in-redux/glossary#middleware",target:"_blank",rel:"noopener noreferrer",children:"\u4E2D\u95F4\u4EF6"}),"\u3002"]}),"\n",(0,s.jsxs)(r.li,{children:["enhancers?: \u8BBE\u7F6E Redux \u7684 ",(0,s.jsx)(r.a,{href:"https://redux.js.org/understanding/thinking-in-redux/glossary#store-enhancer",target:"_blank",rel:"noopener noreferrer",children:"Store enhancer"})," \u3002"]}),"\n",(0,s.jsxs)(r.li,{children:["plugins?: \u8BBE\u7F6E Reduck \u63D2\u4EF6\u3002",(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.em,{children:"\u8BD5\u9A8C\u6027\u914D\u7F6E\uFF0C\u4E0D\u63A8\u8350\u4F7F\u7528"})}),"\u3002"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(r.h3,{id:"\u8FD4\u56DE\u503C",children:["\u8FD4\u56DE\u503C",(0,s.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#\u8FD4\u56DE\u503C",children:"#"})]}),"\n",(0,s.jsx)(r.p,{children:"Reduck Store \u5BF9\u8C61\uFF1A"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["use\uFF1A\u52A8\u6001\u6302\u8F7D\u548C\u83B7\u53D6 Model \u5BF9\u8C61\u3002\u7528\u6CD5\u4E0E ",(0,s.jsx)(r.a,{href:"/zh/apis/app/runtime/model/use-model",children:(0,s.jsx)(r.code,{children:"useModel"})})," \u76F8\u540C\uFF0C\u4F46\u53EF\u4EE5\u5728 React \u7EC4\u4EF6\u5916\u4F7F\u7528\u3002"]}),"\n",(0,s.jsx)(r.li,{children:"unmount\uFF1A\u5378\u8F7D Model \u5BF9\u8C61\uFF0CModel \u7684 State \u4F1A\u4ECE Store \u4E2D\u6E05\u9664\u3002"}),"\n",(0,s.jsxs)(r.li,{children:["ReduxStore\uFF1ARedux Store \u5BF9\u8C61\u5177\u6709\u7684\u65B9\u6CD5\uFF0C",(0,s.jsx)(r.a,{href:"https://redux.js.org/tutorials/fundamentals/part-4-store#redux-store",target:"_blank",rel:"noopener noreferrer",children:"\u8BE6\u89C1"}),"\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(r.h2,{id:"\u793A\u4F8B",children:["\u793A\u4F8B",(0,s.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#\u793A\u4F8B",children:"#"})]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-tsx",children:"const store = createStore();\n\nfunction load() {\n  const [, actions] = store.use(fooModel);\n\n  actions.load();\n}\n"})})]})}function i(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:r}=Object.assign({},(0,d.ah)(),e.components);return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(t,{...e})}):t(e)}let o=i;i.__RSPRESS_PAGE_META={},i.__RSPRESS_PAGE_META["zh%2Fapis%2Fapp%2Fruntime%2Fmodel%2Fcreate-store.mdx"]={toc:[{text:"\u51FD\u6570\u7B7E\u540D",id:"\u51FD\u6570\u7B7E\u540D",depth:2},{text:"\u53C2\u6570",id:"\u53C2\u6570",depth:3},{text:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",depth:3},{text:"\u793A\u4F8B",id:"\u793A\u4F8B",depth:2}],title:"createStore",frontmatter:{sidebar_position:10,title:"createStore"}}}}]);