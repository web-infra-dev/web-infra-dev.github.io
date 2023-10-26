(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["22396"],{48090:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return l},frontmatter:function(){return h}});var s=t("15169"),r=t("43932"),o=t("9880"),c=t("23169"),i=t("15915");function a(e){var n=Object.assign({h1:"h1",a:"a",div:"div",p:"p",strong:"strong",code:"code",h2:"h2",pre:"pre",h3:"h3",ul:"ul",li:"li"},(0,c.useMDXComponents)(),e.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.h1,{id:"connect",children:["connect",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#connect",children:"#"})]}),"\n","\n",(0,o.jsx)(i.default,{}),"\n",(0,o.jsxs)(n.div,{className:"rspress-directive tip",children:[(0,o.jsx)(n.div,{className:"rspress-directive-title",children:"TIP"}),(0,o.jsxs)(n.div,{className:"rspress-directive-content",children:[(0,o.jsxs)(n.p,{children:["The original type of Reduck is complex. The following type definition shows the simplified type information. For the original type, see ",(0,o.jsx)(n.a,{href:"https://github.com/web-infra-dev/reduck/blob/main/packages/react/src/connect.ts",target:"_blank",rel:"noopener noreferrer",children:(0,o.jsx)(n.strong,{children:"connect"})}),"."]}),"\n"]})]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"Connect"})," is the same as ",(0,o.jsx)(n.code,{children:"useModel"})," and is the corresponding HOC-style API. It is recommended to use the Hook-style ",(0,o.jsx)(n.code,{children:"useModel"})," first."]}),"\n",(0,o.jsxs)(n.h2,{id:"function-signature",children:["Function Signature",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#function-signature",children:"#"})]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"type SelectStateToProps = (\n  ...modelStates: State[],\n  ownProps?: any,\n) => PlainObject;\ntype SelectActionsToProps = (\n  ...modelActions: Actions[],\n  ownProps?: any,\n) => PlainObject;\n\nfunction connect(models: Model, options?: ConnectOptions);\nfunction connect(\n  models: [...Model[], SelectStateToProps?, SelectActionsToProps?],\n  options?: ConnectOptions,\n);\n"})}),"\n",(0,o.jsxs)(n.h3,{id:"input",children:["Input",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#input",children:"#"})]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"models"}),": passed one or more Models. When ",(0,o.jsx)(n.code,{children:"models"})," is an array type parameter, the last two params can be a function for filtering State (",(0,o.jsx)(n.code,{children:"SelectStateToProps"})," type) and a function for filtering Actions (",(0,o.jsx)(n.code,{children:"SelectActionsToProps"})," type)."]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"SelectStateToProps"}),": ",(0,o.jsx)(n.code,{children:"modelStates"})," is an array of the State of the passed Model object, ",(0,o.jsx)(n.code,{children:"ownProps"})," is the props received by current component. The data returned by ",(0,o.jsx)(n.code,{children:"SelectStateToProps"})," is passed to the props of the component. When the ",(0,o.jsx)(n.code,{children:"SelectStateToProps"})," parameter is not passed in ",(0,o.jsx)(n.code,{children:"models"}),", the States of all Models are merged and passed to the props of the component."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"SelectActionsToProps"}),": ",(0,o.jsx)(n.code,{children:"modelActions"})," is an array of the Action of the passed Model object, ",(0,o.jsx)(n.code,{children:"ownProps"})," is the props received by current component. returned by ",(0,o.jsx)(n.code,{children:"SelectActionsToProps"})," is passed to the props of the component. When the ",(0,o.jsx)(n.code,{children:"SelectActionsToProps"})," parameter is not passed in ",(0,o.jsx)(n.code,{children:"models"}),", the Action of all Models are merged and passed to the props of the component."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"options"}),": Optional parameter for auxiliary configuration. Currently supports setting ",(0,o.jsx)(n.code,{children:"forwardRef"}),", which is used to control whether to forward the ",(0,o.jsx)(n.code,{children:"ref"})," of the component. The default value is ",(0,o.jsx)(n.code,{children:"false"}),", which means that the ",(0,o.jsx)(n.code,{children:"ref"})," is not forwarded. Set to ",(0,o.jsx)(n.code,{children:"{ forwardRef: true }"}),", which means to forward ",(0,o.jsx)(n.code,{children:"ref"}),"."]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.h3,{id:"return-type",children:["Return Type",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#return-type",children:"#"})]}),"\n",(0,o.jsxs)(n.p,{children:["Returns a HOC: receives an component, returns a component with extra State and Actions injected on ",(0,o.jsx)(n.code,{children:"props"}),"."]}),"\n",(0,o.jsxs)(n.h2,{id:"example",children:["Example",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#example",children:"#"})]}),"\n",(0,o.jsxs)(n.h3,{id:"basic",children:["Basic",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#basic",children:"#"})]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"const modelA = model('modelA').define({\n  state: {\n    a: 1,\n  },\n  actions: {\n    incA(state) {\n      return {\n        ...state,\n        a: state.a + 1,\n      };\n    },\n  },\n});\n\nconst modelB = model('modelB').define({\n  state: {\n    b: 10,\n  },\n  actions: {\n    incB(state) {\n      return {\n        ...state,\n        b: state.b + 1,\n      };\n    },\n  },\n});\n\nfunction Test(props) {\n  props.incA(); // call modelA's action\n  props.incB(); // call modelB's action\n\n  props.a; // get modelA's state: a\n  props.b; // get modelB's state: b\n}\n\nexport default connect([modelA, modelB])(Test);\n"})}),"\n",(0,o.jsxs)(n.h3,{id:"select-state--actions",children:["Select State & Actions",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#select-state--actions",children:"#"})]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"function Test(props) {\n  props.incAll();\n  props.c;\n}\n\nconst stateSelector = (stateA, stateB) => ({\n  ...stateA,\n  ...stateB,\n  c: stateA.a + stateA.b,\n});\nconst actionsSelector = (actionsA, actionsB) => ({\n  ...actionsA,\n  ...actionsB,\n  incAll: () => {\n    actionsA.incA();\n    actionsB.incB();\n  },\n});\n\nexport default connect([modelA, modelB, stateSelector, actionsSelector])(Test);\n"})}),"\n",(0,o.jsxs)(n.h3,{id:"forwarding-ref",children:["Forwarding Ref",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#forwarding-ref",children:"#"})]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"import { useRef, forwardRef } from 'react';\n\nfunction Test(props, ref) {\n  const { a, b } = props;\n\n  return (\n    <div ref={ref}>\n      <span>{a}</span>\n      <span>{b}</span>\n    </div>\n  );\n}\n\nconst TestWrapper = connect([modelA, modelB], { forwardRef: true })(\n  forwardRef(Test),\n);\n\nfunction App() {\n  const testRef = useRef();\n\n  return <TestWrapper ref={testRef} />;\n}\n"})})]})}function d(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,c.useMDXComponents)(),e.components).wrapper;return n?(0,o.jsx)(n,(0,r._)((0,s._)({},e),{children:(0,o.jsx)(a,(0,s._)({},e))})):a(e)}var l=d;d.__RSPRESS_PAGE_META={},d.__RSPRESS_PAGE_META["en%2Fapis%2Fapp%2Fruntime%2Fmodel%2Fconnect.mdx"]={toc:[{text:"Function Signature",id:"function-signature",depth:2},{text:"Input",id:"input",depth:3},{text:"Return Type",id:"return-type",depth:3},{text:"Example",id:"example",depth:2},{text:"Basic",id:"basic",depth:3},{text:"Select State & Actions",id:"select-state--actions",depth:3},{text:"Forwarding Ref",id:"forwarding-ref",depth:3}],title:"connect"};var h={sidebar_position:5,title:"connect"}},15915:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return d}});var s=t("15169"),r=t("43932"),o=t("9880"),c=t("23169");function i(e){var n=Object.assign({div:"div",p:"p",code:"code"},(0,c.useMDXComponents)(),e.components);return(0,o.jsxs)(n.div,{className:"rspress-directive info",children:[(0,o.jsx)(n.div,{className:"rspress-directive-title",children:"information"}),(0,o.jsxs)(n.div,{className:"rspress-directive-content",children:[(0,o.jsxs)(n.p,{children:["By default, the export package name for all APIs in this section is: ",(0,o.jsx)(n.code,{children:"@modern-js/runtime/model"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["If Reduck is integrated separately from Modern.js, the export package name is: ",(0,o.jsx)(n.code,{children:"@modern-js-reduck/react"}),"."]}),"\n"]})]})}function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,c.useMDXComponents)(),e.components).wrapper;return n?(0,o.jsx)(n,(0,r._)((0,s._)({},e),{children:(0,o.jsx)(i,(0,s._)({},e))})):i(e)}var d=a;a.__RSPRESS_PAGE_META={},a.__RSPRESS_PAGE_META["en%2Fcomponents%2Freduck-tip.mdx"]={toc:[],title:""}}}]);