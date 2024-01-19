/*! For license information please see 2855.a22d5069.js.LICENSE.txt */
(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["2855"],{35150:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return r}});var s=n("39980"),d=n("96954");function o(e){let t=Object.assign({h1:"h1",a:"a",p:"p",code:"code",h2:"h2",pre:"pre",div:"div"},(0,d.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.h1,{id:"derived-state",children:["Derived State",(0,s.jsx)(t.a,{className:"header-anchor","aria-hidden":"true",href:"#derived-state",children:"#"})]}),"\n",(0,s.jsxs)(t.p,{children:["In some scenarios, components need to perform further calculations on the State in Model before they can be used in the components. This logic can be directly written in the component or implemented through derived states in Model. Derived states are defined under the ",(0,s.jsx)(t.code,{children:"computed"})," field in the Model. Depending on the dependencies of the Model and the return type, there are three ways to define derived states."]}),"\n",(0,s.jsxs)(t.h2,{id:"only-depend-on-the-models-own-state",children:["Only Depend on the Model\\'s Own State",(0,s.jsx)(t.a,{className:"header-anchor","aria-hidden":"true",href:"#only-depend-on-the-models-own-state",children:"#"})]}),"\n",(0,s.jsx)(t.p,{children:"The derived state only depends on the current Model's State, which is passed as the first parameter to the derived state's definition function."}),"\n",(0,s.jsxs)(t.p,{children:["For example, the todo application has ",(0,s.jsx)(t.code,{children:"items"})," and ",(0,s.jsx)(t.code,{children:"filter"})," in its State, and ",(0,s.jsx)(t.code,{children:"filter"})," is used to filter the todo items displayed on the current page. Therefore, we define a ",(0,s.jsx)(t.code,{children:"visibleTodos"})," derived state that can be directly used in the component. The sample code is as follows:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:"/**\n *  Assuming the structure of the todo item is as follows:\n{\n    id: string;          // id\n    text: string;        // todo\n    completed: boolean;\n}\n**/\n\nconst todoModel = model('todo').define({\n  state: {\n    items: [],\n    filter: 'ALL', // ALL: show all\uFF1BCOMPLETED: show completed\uFF1BACTIVE: show active\n  },\n  computed: {\n    visibleTodos: state => {\n      switch (state.filter) {\n        case 'ALL':\n          return state.items;\n        case 'COMPLETED':\n          return todos.filter(t => t.completed);\n        case 'ACTIVE':\n          return todos.filter(t => !t.completed);\n        default:\n          return [];\n      }\n    },\n  },\n});\n"})}),"\n",(0,s.jsxs)(t.p,{children:["Derived state will eventually be merged with the Model's State, so the derived state can be accessed through the Model's State object. For example, the ",(0,s.jsx)(t.code,{children:"visibleTodos"})," can be used in the component as follows:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:"function Todo() {\n  const [state, actions] = useModel(todoModel);\n\n  return (\n    <div>\n      <div>\n        {state.visibleTodos.map(item => (\n          <div key={item.id}>{item.text}</div>\n        ))}\n      </div>\n    </div>\n  );\n}\n"})}),"\n",(0,s.jsxs)(t.h2,{id:"dependent-state-from-other-models",children:["Dependent State from Other Models",(0,s.jsx)(t.a,{className:"header-anchor","aria-hidden":"true",href:"#dependent-state-from-other-models",children:"#"})]}),"\n",(0,s.jsx)(t.p,{children:"In addition to depending on the current model's state, derived states may also depend on the state of other models. In this case, the definition format for the derived state is:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:"[stateKey]: [...depModels, (selfState, ...depModels) => computedState]\n"})}),"\n",(0,s.jsxs)(t.p,{children:["The following example demonstrates how the derived state ",(0,s.jsx)(t.code,{children:"combinedValue"})," of ",(0,s.jsx)(t.code,{children:"barModel"})," depends on the state of ",(0,s.jsx)(t.code,{children:"fooModel"}),"."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:"const fooModel = model('foo').define({\n  state: {\n    value: 'foo',\n  },\n});\n\nconst barModel = model('bar').define({\n  state: {\n    value: 'foo',\n  },\n  computed: {\n    combinedValue: [\n      fooModel,\n      (state, fooState) => state.value + fooState.value,\n    ],\n  },\n});\n"})}),"\n",(0,s.jsxs)(t.h2,{id:"derived-state-with-function-type",children:["Derived State with Function Type",(0,s.jsx)(t.a,{className:"header-anchor","aria-hidden":"true",href:"#derived-state-with-function-type",children:"#"})]}),"\n",(0,s.jsx)(t.p,{children:"Derived states can also return a function. In this case, the definition format for the derived state is:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:"[stateKey]: (state) => (...args) => computedState    // Only relies on its own state\n[stateKey]: [...depModels, (selfState, ...depModels) => (...args) => computedState]  // Relies on the state of other models\n"})}),"\n",(0,s.jsxs)(t.p,{children:["Assuming the ",(0,s.jsx)(t.code,{children:"filter"})," state is not stored in the state of the todo app, but is instead used directly in the component, ",(0,s.jsx)(t.code,{children:"visibleTodos"})," can be a function type value. This function receives the ",(0,s.jsx)(t.code,{children:"filter"})," parameter when used in the component, as shown below:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:"const todoModel = model('todo').define({\n  state: {\n    items: [],\n  },\n  computed: {\n    visibleTodos: state => filter => {\n      switch (filter) {\n        case 'ALL':\n          return state.items;\n        case 'COMPLETED':\n          return todos.filter(t => t.completed);\n        case 'ACTIVE':\n          return todos.filter(t => !t.completed);\n        default:\n          return [];\n      }\n    },\n  },\n});\n\nfunction Todo(props) {\n  // use props pass filter\n  const { filter } = props;\n  const [state, actions] = useModel(todoModel);\n\n  // get final todos\n  const todos = state.visibleTodos(filter);\n\n  return (\n    <div>\n      <div>\n        {todos.map(item => (\n          <div key={item.id}>{item.text}</div>\n        ))}\n      </div>\n    </div>\n  );\n}\n"})}),"\n",(0,s.jsxs)(t.div,{className:"rspress-directive info",children:[(0,s.jsx)(t.div,{className:"rspress-directive-title",children:"Additional Reference"}),(0,s.jsx)(t.div,{className:"rspress-directive-content",children:(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"/guides/topic-detail/model/computed-state",children:"Using Models"}),"\n"]})})]})]})}function i(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:t}=Object.assign({},(0,d.useMDXComponents)(),e.components);return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}var r=i;i.__RSPRESS_PAGE_META={},i.__RSPRESS_PAGE_META["en%2Fguides%2Ftopic-detail%2Fmodel%2Fcomputed-state.mdx"]={toc:[{text:"Only Depend on the Model\\'s Own State",id:"only-depend-on-the-models-own-state",depth:2},{text:"Dependent State from Other Models",id:"dependent-state-from-other-models",depth:2},{text:"Derived State with Function Type",id:"derived-state-with-function-type",depth:2}],title:"Derived State",frontmatter:{sidebar_position:4,title:"Derived State"}}}}]);