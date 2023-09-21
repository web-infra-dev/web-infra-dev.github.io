(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["35327"],{11281:function(e,n,s){"use strict";s.r(n),s.d(n,{default:function(){return l}});var c,t=s("15169"),o=s("43932"),r=s("9880"),d=s("23169"),i=s("13621");function a(e){var n=Object.assign({h1:"h1",a:"a",div:"div",p:"p",strong:"strong",code:"code",h2:"h2",pre:"pre",ul:"ul",li:"li",h3:"h3"},(0,d.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"connect",children:["connect",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#connect",children:"#"})]}),"\n","\n",(0,r.jsx)(i.default,{}),"\n",(0,r.jsxs)(n.div,{className:"rspress-directive tip",children:[(0,r.jsx)(n.div,{className:"rspress-directive-title",children:"\u63D0\u793A"}),(0,r.jsxs)(n.div,{className:"rspress-directive-content",children:[(0,r.jsxs)(n.p,{children:["Reduck \u539F\u59CB\u7C7B\u578B\u8F83\u4E3A\u590D\u6742\uFF0C\u4EE5\u4E0B\u6D89\u53CA\u7C7B\u578B\u5B9A\u4E49\u7684\u5730\u65B9\uFF0C\u5C55\u793A\u7684\u662F\u7B80\u5316\u540E\u7684\u7C7B\u578B\u4FE1\u606F\u3002\u539F\u59CB\u7C7B\u578B\u89C1 ",(0,r.jsx)(n.a,{href:"https://github.com/web-infra-dev/reduck/blob/main/packages/react/src/connect.ts",target:"_blank",rel:"noopener noreferrer",children:(0,r.jsx)(n.strong,{children:"connect"})}),"\u3002"]}),"\n"]})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"connect"})," \u529F\u80FD\u4E0A\u540C ",(0,r.jsx)(n.code,{children:"useModel"})," \u4E00\u81F4\uFF0C\u662F\u5BF9\u5E94\u7684 HOC \u98CE\u683C\u7684 API\u3002\u5EFA\u8BAE\u4F18\u5148\u4F7F\u7528 Hook \u98CE\u683C\u7684 ",(0,r.jsx)(n.code,{children:"useModel"}),"\u3002"]}),"\n",(0,r.jsxs)(n.h2,{id:"\u7C7B\u578B",children:["\u7C7B\u578B",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u7C7B\u578B",children:"#"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"type SelectStateToProps = (\n  ...modelStates: State[],\n  ownProps?: any,\n) => PlainObject;\ntype SelectActionsToProps = (\n  ...modelActions: Actions[],\n  ownProps?: any,\n) => PlainObject;\n\nfunction connect(models: Model, options?: ConnectOptions);\nfunction connect(\n  models: [...Model[], SelectStateToProps?, SelectActionsToProps?],\n  options?: ConnectOptions,\n);\n"})}),"\n",(0,r.jsxs)(n.h2,{id:"\u53C2\u6570",children:["\u53C2\u6570",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u53C2\u6570",children:"#"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"models"}),"\uFF1A\u4F20\u5165\u7684 1 \u4E2A\u6216\u591A\u4E2A Model\uFF0C\u5F53 ",(0,r.jsx)(n.code,{children:"models"})," \u4E3A\u6570\u7EC4\u7C7B\u578B\u53C2\u6570\u65F6\uFF0C\u6700\u540E\u4E24\u9879\u5143\u7D20\u53EF\u4EE5\u662F\u7528\u4E8E\u7B5B\u9009 State \u7684\u51FD\u6570\uFF08 ",(0,r.jsx)(n.code,{children:"SelectStateToProps"})," \u7C7B\u578B\uFF09\u548C\u7528\u4E8E\u7B5B\u9009 Actions \u7684\u51FD\u6570\uFF08 ",(0,r.jsx)(n.code,{children:"SelectActionsToProps"})," \u7C7B\u578B\uFF09\u3002"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"SelectStateToProps"}),"\uFF1A ",(0,r.jsx)(n.code,{children:"modelStates"})," \u662F\u4F20\u5165\u7684 Model \u5BF9\u8C61\u7684 State \u7EC4\u6210\u7684\u6570\u7EC4\uFF0C",(0,r.jsx)(n.code,{children:"ownProps"})," \u662F\u5F53\u524D\u7EC4\u4EF6\u63A5\u6536\u5916\u90E8\u4F20\u9012\u7684 ",(0,r.jsx)(n.code,{children:"props"}),"\uFF0C",(0,r.jsx)(n.code,{children:"SelectStateToProps"})," \u8FD4\u56DE\u7684\u6570\u636E\u4F1A\u4F20\u9012\u5230\u7EC4\u4EF6\u7684 ",(0,r.jsx)(n.code,{children:"props"})," \u4E0A\u3002\u5F53 ",(0,r.jsx)(n.code,{children:"models"})," \u4E2D\u6CA1\u6709\u4F20\u5165 ",(0,r.jsx)(n.code,{children:"SelectStateToProps"})," \u53C2\u6570\u65F6\uFF0C\u6240\u6709 Model \u7684 State \u8FDB\u884C\u5408\u5E76\u540E\u4F20\u9012\u5230\u7EC4\u4EF6\u7684 ",(0,r.jsx)(n.code,{children:"props"})," \u4E0A\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"SelectActionsToProps"}),"\uFF1A ",(0,r.jsx)(n.code,{children:"modelActions"})," \u662F\u4F20\u5165\u7684 Model \u5BF9\u8C61\u7684 Actions \u7EC4\u6210\u7684\u6570\u7EC4\uFF0C",(0,r.jsx)(n.code,{children:"ownProps"})," \u662F\u5F53\u524D\u7EC4\u4EF6\u63A5\u6536\u5916\u90E8\u4F20\u9012\u7684 ",(0,r.jsx)(n.code,{children:"props"}),"\uFF0C",(0,r.jsx)(n.code,{children:"SelectActionsToProps"})," \u8FD4\u56DE\u7684\u6570\u636E\u4E5F\u4F1A\u4F20\u9012\u5230\u7EC4\u4EF6\u7684 ",(0,r.jsx)(n.code,{children:"props"})," \u4E0A\u3002\u5F53 ",(0,r.jsx)(n.code,{children:"models"})," \u4E2D\u6CA1\u6709\u4F20\u5165 ",(0,r.jsx)(n.code,{children:"SelectActionsToProps"})," \u53C2\u6570\u65F6\uFF0C\u6240\u6709 Model \u7684 Actions \u8FDB\u884C\u5408\u5E76\u540E\u4F20\u9012\u5230\u7EC4\u4EF6\u7684 ",(0,r.jsx)(n.code,{children:"props"})," \u4E0A\u3002"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"options"}),"\uFF1A\u53EF\u9009\u53C2\u6570\uFF0C\u7528\u4E8E\u8F85\u52A9\u914D\u7F6E\u3002\u76EE\u524D\u652F\u6301\u8BBE\u7F6E ",(0,r.jsx)(n.code,{children:"forwardRef"}),"\uFF0C\u7528\u4E8E\u63A7\u5236\u662F\u5426\u8F6C\u53D1\u7EC4\u4EF6\u7684 ",(0,r.jsx)(n.code,{children:"ref"}),"\uFF0C\u9ED8\u8BA4\u503C\u4E3A ",(0,r.jsx)(n.code,{children:"false"}),"\uFF0C\u8868\u793A\u4E0D\u8F6C\u53D1 ",(0,r.jsx)(n.code,{children:"ref"}),"\u3002\u8BBE\u7F6E\u4E3A ",(0,r.jsx)(n.code,{children:"{forwardRef: true}"}),"\uFF0C\u8868\u793A\u8F6C\u53D1 ",(0,r.jsx)(n.code,{children:"ref"}),"\u3002"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.h2,{id:"\u8FD4\u56DE\u503C",children:["\u8FD4\u56DE\u503C",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u8FD4\u56DE\u503C",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["\u8FD4\u56DE\u4E00\u4E2A\u9AD8\u9636\u7EC4\u4EF6\uFF1A\u63A5\u6536\u4E00\u4E2A\u4F20\u5165\u7684\u7EC4\u4EF6\uFF0C\u8FD4\u56DE\u4E00\u4E2A\u5728 ",(0,r.jsx)(n.code,{children:"props"})," \u4E0A\u6CE8\u5165\u4E86\u989D\u5916 State \u548C Actions \u7684\u7EC4\u4EF6\u3002"]}),"\n",(0,r.jsxs)(n.h2,{id:"\u793A\u4F8B",children:["\u793A\u4F8B",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u793A\u4F8B",children:"#"})]}),"\n",(0,r.jsxs)(n.h3,{id:"\u7B80\u5355\u7528\u6CD5",children:["\u7B80\u5355\u7528\u6CD5",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u7B80\u5355\u7528\u6CD5",children:"#"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"const modelA = model('modelA').define({\n  state: {\n    a: 1,\n  },\n  actions: {\n    incA(state) {\n      return {\n        ...state,\n        a: state.a + 1,\n      };\n    },\n  },\n});\n\nconst modelB = model('modelB').define({\n  state: {\n    b: 10,\n  },\n  actions: {\n    incB(state) {\n      return {\n        ...state,\n        b: state.b + 1,\n      };\n    },\n  },\n});\n\nfunction Test(props) {\n  props.incA(); // \u8C03\u7528 modelA \u7684 action\n  props.incB(); // \u8C03\u7528 modelB \u7684 action\n\n  props.a; // \u83B7\u53D6 modelA \u7684 state: a\n  props.b; // \u83B7\u53D6 modelB \u7684 state: b\n}\n\nexport default connect([modelA, modelB])(Test);\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"\u7B5B\u9009-state-\u548C-actions",children:["\u7B5B\u9009 State \u548C Actions",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u7B5B\u9009-state-\u548C-actions",children:"#"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"function Test(props) {\n  props.incAll();\n  props.c;\n}\n\nconst stateSelector = (stateA, stateB) => ({\n  ...stateA,\n  ...stateB,\n  c: stateA.a + stateA.b,\n});\nconst actionsSelector = (actionsA, actionsB) => ({\n  ...actionsA,\n  ...actionsB,\n  incAll: () => {\n    actionsA.incA();\n    actionsB.incB();\n  },\n});\n\nexport default connect([modelA, modelB, stateSelector, actionsSelector])(Test);\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"\u8F6C\u53D1\u7EC4\u4EF6\u7684-ref",children:["\u8F6C\u53D1\u7EC4\u4EF6\u7684 ref",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u8F6C\u53D1\u7EC4\u4EF6\u7684-ref",children:"#"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"import { useRef, forwardRef } from 'react';\n\nfunction Test(props, ref) {\n  const { a, b } = props;\n\n  return (\n    <div ref={ref}>\n      <span>{a}</span>\n      <span>{b}</span>\n    </div>\n  );\n}\n\nconst TestWrapper = connect([modelA, modelB], { forwardRef: true })(\n  forwardRef(Test),\n);\n\nfunction App() {\n  const testRef = useRef();\n\n  return <TestWrapper ref={testRef} />;\n}\n"})})]})}(c=globalThis).__RSPRESS_PAGE_META||(c.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["zh%2Fapis%2Fapp%2Fruntime%2Fmodel%2Fconnect.mdx"]={toc:[{text:"\u7C7B\u578B",id:"\u7C7B\u578B",depth:2},{text:"\u53C2\u6570",id:"\u53C2\u6570",depth:2},{text:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",depth:2},{text:"\u793A\u4F8B",id:"\u793A\u4F8B",depth:2},{text:"\u7B80\u5355\u7528\u6CD5",id:"\u7B80\u5355\u7528\u6CD5",depth:3},{text:"\u7B5B\u9009 State \u548C Actions",id:"\u7B5B\u9009-state-\u548C-actions",depth:3},{text:"\u8F6C\u53D1\u7EC4\u4EF6\u7684 ref",id:"\u8F6C\u53D1\u7EC4\u4EF6\u7684-ref",depth:3}],title:"connect",frontmatter:{sidebar_position:5,title:"connect"}};var l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,d.useMDXComponents)(),e.components).wrapper;return n?(0,r.jsx)(n,(0,o._)((0,t._)({},e),{children:(0,r.jsx)(a,(0,t._)({},e))})):a(e)}}}]);