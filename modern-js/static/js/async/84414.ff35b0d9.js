/*! For license information please see 84414.ff35b0d9.js.LICENSE.txt */
(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["84414"],{80763:function(e,t,s){"use strict";s.r(t);var n=s("39980"),i=s("76713");function r(e){let t=Object.assign({h1:"h1",a:"a",div:"div",p:"p",code:"code",strong:"strong",h2:"h2",pre:"pre",h3:"h3",ul:"ul",li:"li"},(0,i.useMDXComponents)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.h1,{id:"usemodel",children:["useModel",(0,n.jsx)(t.a,{className:"header-anchor","aria-hidden":"true",href:"#usemodel",children:"#"})]}),"\n",(0,n.jsxs)(t.div,{className:"rspress-directive info",children:[(0,n.jsx)(t.div,{className:"rspress-directive-title",children:"information"}),(0,n.jsxs)(t.div,{className:"rspress-directive-content",children:[(0,n.jsxs)(t.p,{children:["By default, the export package name for all APIs in this section is: ",(0,n.jsx)(t.code,{children:"@modern-js/runtime/model"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["If Reduck is integrated separately from Modern.js, the export package name is: ",(0,n.jsx)(t.code,{children:"@modern-js-reduck/react"}),"."]}),"\n"]})]}),"\n",(0,n.jsxs)(t.div,{className:"rspress-directive tip",children:[(0,n.jsx)(t.div,{className:"rspress-directive-title",children:"TIP"}),(0,n.jsxs)(t.div,{className:"rspress-directive-content",children:[(0,n.jsxs)(t.p,{children:["The original type of Reduck is complex. The following type definition shows the simplified type information. For the original type, see ",(0,n.jsx)(t.a,{href:"https://github.com/web-infra-dev/reduck/blob/main/packages/store/src/model/model.ts",target:"_blank",rel:"noopener noreferrer",children:(0,n.jsx)(t.strong,{children:"model"})}),"."]}),"\n"]})]}),"\n",(0,n.jsxs)(t.h2,{id:"function-signature",children:["Function Signature",(0,n.jsx)(t.a,{className:"header-anchor","aria-hidden":"true",href:"#function-signature",children:"#"})]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",children:"function useModel(\n  models: Models[],\n  stateSelector?: StateSelector,\n  actionSelector?: ActionSelector,\n): [state, actions, subscribe];\nfunction useModel(\n  ...models: Models[],\n  stateSelector?: (...args: State[]) => any,\n  actionSelector?: (...args: Actions[]) => any,\n): [state, actions, subscribe];\n"})}),"\n",(0,n.jsxs)(t.h3,{id:"input",children:["Input",(0,n.jsx)(t.a,{className:"header-anchor","aria-hidden":"true",href:"#input",children:"#"})]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"models: Array of Model objects, which can be passed in as an array type parameter, or all Models can be passed in as parameters one by one."}),"\n",(0,n.jsxs)(t.li,{children:["stateSelector: Optional parameters, used to filter State calculations. The first n parameters are the States corresponding to n Models, and the returned data is used as the first element of the ",(0,n.jsx)(t.code,{children:"useModel"})," return value array."]}),"\n",(0,n.jsxs)(t.li,{children:["actionSelector: Optional parameters, used to filter Action calculations. The first n parameters are the States corresponding to n Models, and the returned data is used as the second element of the ",(0,n.jsx)(t.code,{children:"useModel"})," return value array."]}),"\n"]}),"\n",(0,n.jsxs)(t.h3,{id:"return-value",children:["Return Value",(0,n.jsx)(t.a,{className:"header-anchor","aria-hidden":"true",href:"#return-value",children:"#"})]}),"\n",(0,n.jsx)(t.p,{children:"Returns an array with each value:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["state: return value of ",(0,n.jsx)(t.code,{children:"stateSelector"}),". if there is no ",(0,n.jsx)(t.code,{children:"stateSelector"}),", will combine all incoming Model States(including derived states) and return them. If there is an attribute of the same name in the State of different Models, the following State will override the previous State. when ",(0,n.jsx)(t.code,{children:"state"})," changes, the component call ",(0,n.jsx)(t.code,{children:"useModel"})," will re-render."]}),"\n",(0,n.jsxs)(t.li,{children:["actions: return value of ",(0,n.jsx)(t.code,{children:"actionSelector"}),". if there is no ",(0,n.jsx)(t.code,{children:"actionSelector"}),", will combine all incoming Model Action(including Effect) and return them. If there is an attribute of the same name in the Action of different Models, the following Action will override the previous Action."]}),"\n",(0,n.jsx)(t.li,{children:"subscribe: A function that subscribes to State changes. This function is called when the State of any Model passed in changes."}),"\n"]}),"\n",(0,n.jsxs)(t.h2,{id:"example",children:["Example",(0,n.jsx)(t.a,{className:"header-anchor","aria-hidden":"true",href:"#example",children:"#"})]}),"\n",(0,n.jsxs)(t.h3,{id:"basic",children:["Basic",(0,n.jsx)(t.a,{className:"header-anchor","aria-hidden":"true",href:"#basic",children:"#"})]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:"import todoModel from 'models/todo';\nimport filterModel from 'models/filter';\n\nfunction Test(props) {\n  const [state, actions] = useModel([todoModel, filterModel]);\n  actions.add(); // call todoModel add action\n  actions.setVisibleStatus(); // call filterModel filterModel action\n\n  state.items; // get todoModel state items\n  state.visibleStatus; // get filterModel state visibleStatus\n}\n"})}),"\n",(0,n.jsxs)(t.h3,{id:"selector-usage",children:["Selector Usage",(0,n.jsx)(t.a,{className:"header-anchor","aria-hidden":"true",href:"#selector-usage",children:"#"})]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",children:"function Test(props) {\n  const [state, actions] = useModel(\n    [todoModel, filterModel],\n    (todoState, filterState) => ({\n      items: todoState.items,\n      visibleStatus: `${props.prefix}-${filterState.visibleStatus}`,\n    }),\n    (todoActions, filterActions) => ({\n      ...todoActions,\n      ...filterActions,\n    }),\n  );\n  actions.add(); // call todoModel add action\n  actions.setVisibleStatus(); // call filterModel filterModel action\n\n  state.items; // get todoModel state items\n  state.visibleStatus; // get filterModel state visibleStatus\n}\n"})}),"\n",(0,n.jsxs)(t.div,{className:"rspress-directive info",children:[(0,n.jsx)(t.div,{className:"rspress-directive-title",children:"More"}),(0,n.jsxs)(t.div,{className:"rspress-directive-content",children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"/guides/topic-detail/model/use-model",children:"use Model"}),"."]}),"\n"]})]})]})}function a(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:t}=Object.assign({},(0,i.useMDXComponents)(),e.components);return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(r,{...e})}):r(e)}t.default=a,a.__RSPRESS_PAGE_META={},a.__RSPRESS_PAGE_META["en%2Fapis%2Fapp%2Fruntime%2Fmodel%2Fuse-model.mdx"]={toc:[{text:"Function Signature",id:"function-signature",depth:2},{text:"Input",id:"input",depth:3},{text:"Return Value",id:"return-value",depth:3},{text:"Example",id:"example",depth:2},{text:"Basic",id:"basic",depth:3},{text:"Selector Usage",id:"selector-usage",depth:3}],title:"useModel",frontmatter:{sidebar_position:2,title:"useModel"}}}}]);