/*! For license information please see 58577.57f885c1.js.LICENSE.txt */
(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["58577"],{93146:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return c}});var n=t("39980"),i=t("96954"),d=t("72199");function r(e){let s=Object.assign({h1:"h1",a:"a",div:"div",p:"p",h2:"h2",pre:"pre",code:"code",h3:"h3",ul:"ul",li:"li"},(0,i.useMDXComponents)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(s.h1,{id:"usemodel",children:["useModel",(0,n.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#usemodel",children:"#"})]}),"\n","\n",(0,n.jsx)(d.default,{}),"\n",(0,n.jsxs)(s.div,{className:"rspress-directive tip",children:[(0,n.jsx)(s.div,{className:"rspress-directive-title",children:"\u63D0\u793A"}),(0,n.jsxs)(s.div,{className:"rspress-directive-content",children:[(0,n.jsxs)(s.p,{children:["Reduck \u539F\u59CB\u7C7B\u578B\u8F83\u4E3A\u590D\u6742\uFF0C\u4EE5\u4E0B\u6D89\u53CA\u7C7B\u578B\u5B9A\u4E49\u7684\u5730\u65B9\uFF0C\u5C55\u793A\u7684\u662F\u7B80\u5316\u540E\u7684\u7C7B\u578B\u4FE1\u606F\u3002\u539F\u59CB\u7C7B\u578B\u89C1 ",(0,n.jsx)(s.a,{href:"https://github.com/web-infra-dev/reduck/blob/main/packages/store/src/model/useModel.ts",target:"_blank",rel:"noopener noreferrer",children:"model"}),"\u3002"]}),"\n"]})]}),"\n",(0,n.jsxs)(s.h2,{id:"\u51FD\u6570\u7B7E\u540D",children:["\u51FD\u6570\u7B7E\u540D",(0,n.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#\u51FD\u6570\u7B7E\u540D",children:"#"})]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-ts",children:"function useModel(\n  models: Models[],\n  stateSelector?: StateSelector,\n  actionSelector?: ActionSelector,\n): [state, actions, subscribe];\nfunction useModel(\n  ...models: Models[],\n  stateSelector?: (...args: State[]) => any,\n  actionSelector?: (...args: Actions[]) => any,\n): [state, actions, subscribe];\n"})}),"\n",(0,n.jsxs)(s.h3,{id:"\u53C2\u6570",children:["\u53C2\u6570",(0,n.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#\u53C2\u6570",children:"#"})]}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"models\uFF1AModel \u5BF9\u8C61\u6570\u7EC4\uFF0C\u53EF\u4EE5\u4F5C\u4E3A\u4E00\u4E2A\u6570\u7EC4\u7C7B\u578B\u7684\u53C2\u6570\u4F20\u5165\uFF0C\u4E5F\u53EF\u4EE5\u6240\u6709 Model \u9010\u4E2A\u4F5C\u4E3A\u53C2\u6570\u4F20\u5165\u3002"}),"\n",(0,n.jsxs)(s.li,{children:["stateSelector\uFF1A\u53EF\u9009\u53C2\u6570\uFF0C\u7528\u4E8E\u7B5B\u9009 State \u8BA1\u7B97\u3002\u524D n \u4E2A\u53C2\u6570\u4E3A n \u4E2A Model \u5BF9\u5E94\u7684 State\uFF0C\u8FD4\u56DE\u7684\u6570\u636E\u4F5C\u4E3A ",(0,n.jsx)(s.code,{children:"useModel"})," \u8FD4\u56DE\u503C\u6570\u7EC4\u7684\u7B2C\u4E00\u4E2A\u5143\u7D20\u3002"]}),"\n",(0,n.jsxs)(s.li,{children:["actionSelector\uFF1A\u53EF\u9009\u53C2\u6570\uFF0C\u7528\u4E8E\u7B5B\u9009 Actions \u8BA1\u7B97\u3002\u524D n \u4E2A\u53C2\u6570\u4E3A n \u4E2A Model \u5BF9\u5E94\u7684 Actions\uFF0C\u8FD4\u56DE\u7684\u6570\u636E\u4F5C\u4E3A ",(0,n.jsx)(s.code,{children:"useModel"})," \u8FD4\u56DE\u503C\u6570\u7EC4\u7684\u7B2C\u4E8C\u4E2A\u5143\u7D20\u3002"]}),"\n"]}),"\n",(0,n.jsxs)(s.h3,{id:"\u8FD4\u56DE\u503C",children:["\u8FD4\u56DE\u503C",(0,n.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#\u8FD4\u56DE\u503C",children:"#"})]}),"\n",(0,n.jsx)(s.p,{children:"\u8FD4\u56DE\u4E00\u4E2A\u6570\u7EC4\uFF0C\u6BCF\u4E00\u9879\u5143\u7D20\u5206\u522B\u4E3A\uFF1A"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["state\uFF1A",(0,n.jsx)(s.code,{children:"stateSelector"})," \u7684\u8FD4\u56DE\u503C\u3002\u5982\u679C\u672A\u4F20 ",(0,n.jsx)(s.code,{children:"stateSelector"}),"\uFF0C\u4F1A\u628A\u4F20\u5165\u7684\u6240\u6709 Model \u7684 State (\u5305\u542B\u884D\u751F\u72B6\u6001)\u5408\u5E76\u540E\u8FD4\u56DE\u3002\u5982\u679C\u4E0D\u540C Model \u7684 State \u4E2D\u5B58\u5728\u540C\u540D\u5C5E\u6027\uFF0C\u540E\u9762\u7684 State \u4F1A\u8986\u76D6\u524D\u9762\u7684 State\u3002\u5F53 ",(0,n.jsx)(s.code,{children:"state"})," \u53D1\u751F\u53D8\u5316\u65F6\uFF0C\u8C03\u7528 ",(0,n.jsx)(s.code,{children:"useModel"})," \u7684\u7EC4\u4EF6\u4F1A\u91CD\u65B0\u6E32\u67D3\u3002"]}),"\n",(0,n.jsxs)(s.li,{children:["actions\uFF1A\u7B2C\u4E8C\u4E2A\u5143\u7D20\u4E3A ",(0,n.jsx)(s.code,{children:"actionSelector"})," \u7684\u8FD4\u56DE\u503C\u3002\u5982\u679C\u672A\u4F20 ",(0,n.jsx)(s.code,{children:"actionSelector"}),"\uFF0C\u4F1A\u628A\u4F20\u5165\u7684\u6240\u6709 Model \u7684 Actions (\u5305\u542B Effects) \u5408\u5E76\u540E\u8FD4\u56DE\u3002\u5982\u679C\u4E0D\u540C Model \u7684 Actions \u4E2D\u5B58\u5728\u540C\u540D\u5C5E\u6027\uFF0C\u540E\u9762\u7684 Actions \u4F1A\u8986\u76D6\u524D\u9762\u7684 Actions\u3002"]}),"\n",(0,n.jsx)(s.li,{children:"subscribe\uFF1A\u8BA2\u9605 State \u53D8\u5316\u7684\u51FD\u6570\u3002\u5F53\u4F20\u5165\u7684\u4EFB\u610F Model \u7684 State \u53D1\u751F\u6539\u53D8\u65F6\uFF0C\u8BE5\u51FD\u6570\u4F1A\u88AB\u8C03\u7528\u3002"}),"\n"]}),"\n",(0,n.jsxs)(s.h2,{id:"\u793A\u4F8B",children:["\u793A\u4F8B",(0,n.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#\u793A\u4F8B",children:"#"})]}),"\n",(0,n.jsxs)(s.h3,{id:"\u57FA\u672C\u7528\u6CD5",children:["\u57FA\u672C\u7528\u6CD5",(0,n.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#\u57FA\u672C\u7528\u6CD5",children:"#"})]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-tsx",children:"import todoModel from 'models/todo';\nimport filterModel from 'models/filter';\n\nfunction Test(props) {\n  const [state, actions] = useModel([todoModel, filterModel]);\n  actions.add(); // \u8C03\u7528 todoModel add action\n  actions.setVisibleStatus(); // \u8C03\u7528 filterModel filterModel action\n\n  state.items; // \u83B7\u53D6 todoModel state items\n  state.visibleStatus; // \u83B7\u53D6 filterModel state visibleStatus\n}\n"})}),"\n",(0,n.jsxs)(s.h3,{id:"selector-\u7528\u6CD5",children:["selector \u7528\u6CD5",(0,n.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#selector-\u7528\u6CD5",children:"#"})]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-js",children:"function Test(props) {\n  const [state, actions] = useModel(\n    [todoModel, filterModel],\n    (todoState, filterState) => ({\n      items: todoState.items,\n      visibleStatus: `${props.prefix}-${filterState.visibleStatus}`,\n    }),\n    (todoActions, filterActions) => ({\n      ...todoActions,\n      ...filterActions,\n    }),\n  );\n  actions.add(); // \u8C03\u7528 todoModel add action\n  actions.setVisibleStatus(); // \u8C03\u7528 filterModel filterModel action\n\n  state.items; // \u83B7\u53D6 todoModel state items\n  state.visibleStatus; // \u83B7\u53D6 filterModel state visibleStatus\n}\n"})}),"\n",(0,n.jsxs)(s.div,{className:"rspress-directive info",children:[(0,n.jsx)(s.div,{className:"rspress-directive-title",children:"\u66F4\u591A\u53C2\u8003"}),(0,n.jsxs)(s.div,{className:"rspress-directive-content",children:[(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"/guides/topic-detail/model/use-model",children:"\u4F7F\u7528 Model"})}),"\n"]})]})]})}function o(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:s}=Object.assign({},(0,i.useMDXComponents)(),e.components);return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(r,{...e})}):r(e)}var c=o;o.__RSPRESS_PAGE_META={},o.__RSPRESS_PAGE_META["zh%2Fapis%2Fapp%2Fruntime%2Fmodel%2Fuse-model.mdx"]={toc:[{text:"\u51FD\u6570\u7B7E\u540D",id:"\u51FD\u6570\u7B7E\u540D",depth:2},{text:"\u53C2\u6570",id:"\u53C2\u6570",depth:3},{text:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",depth:3},{text:"\u793A\u4F8B",id:"\u793A\u4F8B",depth:2},{text:"\u57FA\u672C\u7528\u6CD5",id:"\u57FA\u672C\u7528\u6CD5",depth:3},{text:"selector \u7528\u6CD5",id:"selector-\u7528\u6CD5",depth:3}],title:"useModel",frontmatter:{sidebar_position:2,title:"useModel"}}},72199:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return o}});var n=t("39980"),i=t("96954");function d(e){let s=Object.assign({div:"div",p:"p",code:"code"},(0,i.useMDXComponents)(),e.components);return(0,n.jsxs)(s.div,{className:"rspress-directive info",children:[(0,n.jsx)(s.div,{className:"rspress-directive-title",children:"\u8865\u5145\u4FE1\u606F"}),(0,n.jsxs)(s.div,{className:"rspress-directive-content",children:[(0,n.jsxs)(s.p,{children:["\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u672C\u8282\u6240\u6709 API \u7684\u5BFC\u51FA\u5305\u540D\u4E3A\uFF1A",(0,n.jsx)(s.code,{children:"@modern-js/runtime/model"}),"\u3002"]}),"\n",(0,n.jsxs)(s.p,{children:["\u5982\u679C\u662F\u5728 Modern.js \u4EE5\u5916\u5355\u72EC\u96C6\u6210 Reduck\uFF0C\u5BFC\u51FA\u5305\u540D\u4E3A\uFF1A",(0,n.jsx)(s.code,{children:"@modern-js-reduck/react"}),"\u3002"]}),"\n"]})]})}function r(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:s}=Object.assign({},(0,i.useMDXComponents)(),e.components);return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}var o=r;r.__RSPRESS_PAGE_META={},r.__RSPRESS_PAGE_META["zh%2Fcomponents%2Freduck-tip.mdx"]={toc:[],title:"",frontmatter:{}}}}]);