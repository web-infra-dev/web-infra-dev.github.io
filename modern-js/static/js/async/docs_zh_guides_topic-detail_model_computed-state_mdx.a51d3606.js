(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_guides_topic-detail_model_computed-state_mdx"],{54667:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return r}});var d,s=n("15169"),o=n("43932"),i=n("9880"),a=n("23169");function l(e){var t=Object.assign({h1:"h1",a:"a",p:"p",code:"code",h2:"h2",pre:"pre",div:"div"},(0,a.useMDXComponents)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.h1,{id:"\u884D\u751F\u72B6\u6001",children:["\u884D\u751F\u72B6\u6001",(0,i.jsx)(t.a,{className:"header-anchor","aria-hidden":"true",href:"#\u884D\u751F\u72B6\u6001",children:"#"})]}),"\n",(0,i.jsxs)(t.p,{children:["\u4E00\u4E9B\u573A\u666F\u4E2D\uFF0C\u7EC4\u4EF6\u9700\u8981\u5BF9 Model \u4E2D\u7684 State \u8FDB\u884C\u8FDB\u4E00\u6B65\u8BA1\u7B97\uFF0C\u624D\u80FD\u5728\u7EC4\u4EF6\u4E2D\u4F7F\u7528\uFF0C\u8FD9\u90E8\u5206\u903B\u8F91\u53EF\u4EE5\u76F4\u63A5\u5199\u5728\u7EC4\u4EF6\u5185\u90E8\uFF0C\u4E5F\u53EF\u4EE5\u901A\u8FC7 Model \u7684\u884D\u751F\u72B6\u6001\u5B9E\u73B0\u3002\n\u884D\u751F\u72B6\u6001\u5B9A\u4E49\u5728 Model \u4E2D\u7684 ",(0,i.jsx)(t.code,{children:"computed"})," \u5B57\u6BB5\u4E0B\u3002\u6839\u636E\u4F9D\u8D56\u7684 Model \u7684\u4E0D\u540C\u3001\u8FD4\u56DE\u7C7B\u578B\u7684\u4E0D\u540C\uFF0C\u884D\u751F\u72B6\u6001\u7684\u5B9A\u4E49\u65B9\u6CD5\u53EF\u4EE5\u5206\u4E3A\u4EE5\u4E0B 3 \u79CD\u3002"]}),"\n",(0,i.jsxs)(t.h2,{id:"\u53EA\u4F9D\u8D56\u81EA\u8EAB\u7684-state",children:["\u53EA\u4F9D\u8D56\u81EA\u8EAB\u7684 State",(0,i.jsx)(t.a,{className:"header-anchor","aria-hidden":"true",href:"#\u53EA\u4F9D\u8D56\u81EA\u8EAB\u7684-state",children:"#"})]}),"\n",(0,i.jsx)(t.p,{children:"\u884D\u751F\u72B6\u6001\u53EA\u4F9D\u8D56\u5F53\u524D Model \u7684 State\uFF0CState \u4F1A\u4F5C\u4E3A\u7B2C\u4E00\u4E2A\u53C2\u6570\uFF0C\u4F20\u5165\u884D\u751F\u72B6\u6001\u7684\u5B9A\u4E49\u51FD\u6570\u4E2D\u3002"}),"\n",(0,i.jsxs)(t.p,{children:["\u4F8B\u5982\uFF0C todo \u5E94\u7528\u7684 State \u6709 ",(0,i.jsx)(t.code,{children:"items"})," \u548C ",(0,i.jsx)(t.code,{children:"filter"}),"\uFF0C",(0,i.jsx)(t.code,{children:"filter"})," \u7528\u4E8E\u8FC7\u6EE4\u5F53\u524D\u9875\u9762\u663E\u793A\u7684 todo \u9879\uFF0C\u6240\u4EE5\u6211\u4EEC\u5B9A\u4E49\u4E86\u4E00\u4E2A ",(0,i.jsx)(t.code,{children:"visibleTodos"})," \u7684\u884D\u751F\u72B6\u6001\u53EF\u4EE5\u76F4\u63A5\u5728\u7EC4\u4EF6\u4E2D\u4F7F\u7528\u3002\u793A\u4F8B\u4EE3\u7801\u5982\u4E0B\uFF1A"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-ts",children:"/**\n *  \u5047\u8BBE todo item \u7ED3\u6784\u5982\u4E0B\uFF1A\n{\n    id: string;          // id\n    text: string;        // todo \u4E8B\u9879\n    completed: boolean;  // \u5B8C\u6210\u72B6\u6001\uFF1A0 \u4EE3\u8868\u672A\u5B8C\u6210\uFF0C1 \u4EE3\u8868\u5B8C\u6210\n}\n**/\n\nconst todoModel = model('todo').define({\n  state: {\n    items: [],\n    filter: 'ALL', // ALL: \u663E\u793A\u5168\u90E8\uFF1BCOMPLETED\uFF1A\u663E\u793A\u5B8C\u6210\u7684\u4E8B\u9879\uFF1BACTIVE\uFF1A\u663E\u793A\u672A\u5B8C\u6210\u7684\u4E8B\u9879\n  },\n  computed: {\n    visibleTodos: state => {\n      switch (state.filter) {\n        case 'ALL':\n          return state.items;\n        case 'COMPLETED':\n          return todos.filter(t => t.completed);\n        case 'ACTIVE':\n          return todos.filter(t => !t.completed);\n        default:\n          return [];\n      }\n    },\n  },\n});\n"})}),"\n",(0,i.jsxs)(t.p,{children:["\u884D\u751F\u72B6\u6001\u6700\u7EC8\u4F1A\u548C Model \u7684 State \u8FDB\u884C\u5408\u5E76\uFF0C\u56E0\u6B64\uFF0C\u53EF\u4EE5\u901A\u8FC7 Model \u7684 State \u5BF9\u8C61\u8BBF\u95EE\u5230\u884D\u751F\u72B6\u6001\uFF0C\u4F8B\u5982\uFF0C",(0,i.jsx)(t.code,{children:"visibleTodos"})," \u5728\u7EC4\u4EF6\u5185\u7684\u4F7F\u7528\u65B9\u5F0F\u5982\u4E0B\uFF1A"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-ts",children:"function Todo() {\n  const [state, actions] = useModel(todoModel);\n\n  return (\n    <div>\n      <div>\n        {state.visibleTodos.map(item => (\n          <div key={item.id}>{item.text}</div>\n        ))}\n      </div>\n    </div>\n  );\n}\n"})}),"\n",(0,i.jsxs)(t.h2,{id:"\u4F9D\u8D56\u5176\u4ED6-model-\u7684-state",children:["\u4F9D\u8D56\u5176\u4ED6 Model \u7684 State",(0,i.jsx)(t.a,{className:"header-anchor","aria-hidden":"true",href:"#\u4F9D\u8D56\u5176\u4ED6-model-\u7684-state",children:"#"})]}),"\n",(0,i.jsx)(t.p,{children:"\u9664\u4E86\u4F9D\u8D56\u5F53\u524D Model \u7684 State\uFF0C\u884D\u751F\u72B6\u6001\u8FD8\u4F9D\u8D56\u5176\u4ED6 Model \u7684 State\uFF0C\u8FD9\u65F6\u5019\u884D\u751F\u72B6\u6001\u7684\u5B9A\u4E49\u683C\u5F0F\u4E3A\uFF1A"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-ts",children:"[stateKey]: [...depModels, (selfState, ...depModels) => computedState]\n"})}),"\n",(0,i.jsxs)(t.p,{children:["\u4E0B\u9762\u7684\u793A\u4F8B\uFF0C\u6F14\u793A\u4E86 ",(0,i.jsx)(t.code,{children:"barModel"})," \u7684\u884D\u751F\u72B6\u6001 ",(0,i.jsx)(t.code,{children:"combinedValue"})," \u662F\u5982\u4F55\u4F9D\u8D56 ",(0,i.jsx)(t.code,{children:"fooModel"})," \u7684 State \u7684\u3002"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-ts",children:"const fooModel = model('foo').define({\n  state: {\n    value: 'foo',\n  },\n});\n\nconst barModel = model('bar').define({\n  state: {\n    value: 'foo',\n  },\n  computed: {\n    combinedValue: [\n      fooModel,\n      (state, fooState) => state.value + fooState.value,\n    ],\n  },\n});\n"})}),"\n",(0,i.jsxs)(t.h2,{id:"\u51FD\u6570\u7C7B\u578B\u7684\u884D\u751F\u72B6\u6001",children:["\u51FD\u6570\u7C7B\u578B\u7684\u884D\u751F\u72B6\u6001",(0,i.jsx)(t.a,{className:"header-anchor","aria-hidden":"true",href:"#\u51FD\u6570\u7C7B\u578B\u7684\u884D\u751F\u72B6\u6001",children:"#"})]}),"\n",(0,i.jsx)(t.p,{children:"\u884D\u751F\u72B6\u6001\u8FD8\u53EF\u4EE5\u8FD4\u56DE\u4E00\u4E2A\u51FD\u6570\u3002\u8FD9\u65F6\u5019\u884D\u751F\u72B6\u6001\u7684\u5B9A\u4E49\u683C\u5F0F\u4E3A\uFF1A"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-ts",children:"[stateKey]: (state) => (...args) => computedState    // \u53EA\u4F9D\u8D56\u81EA\u8EAB\u7684 state\n[stateKey]: [...depModels, (selfState, ...depModels) => (...args) => computedState]  // \u4F9D\u8D56\u5176\u4ED6 Model \u7684 state\n"})}),"\n",(0,i.jsxs)(t.p,{children:["\u5047\u8BBE\uFF0Ctodo \u5E94\u7528\u7684 state \u4E0D\u5B58\u50A8 ",(0,i.jsx)(t.code,{children:"filter"})," \u72B6\u6001\uFF0C\u800C\u662F\u76F4\u63A5\u5728\u7EC4\u4EF6\u4E2D\u4F7F\u7528\uFF0C\u90A3\u4E48 ",(0,i.jsx)(t.code,{children:"visibleTodos"})," \u53EF\u4EE5\u662F\u4E00\u4E2A\u51FD\u6570\u7C7B\u578B\u7684\u503C\uFF0C\u8FD9\u4E2A\u51FD\u6570\u5728\u7EC4\u4EF6\u4E2D\u4F7F\u7528\u7684\u65F6\u5019\uFF0C\u63A5\u6536 ",(0,i.jsx)(t.code,{children:"filter"})," \u53C2\u6570\u3002\u5982\u4E0B\u6240\u793A\uFF1A"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-ts",children:"const todoModel = model('todo').define({\n  state: {\n    items: [],\n  },\n  computed: {\n    visibleTodos: state => filter => {\n      switch (filter) {\n        case 'ALL':\n          return state.items;\n        case 'COMPLETED':\n          return todos.filter(t => t.completed);\n        case 'ACTIVE':\n          return todos.filter(t => !t.completed);\n        default:\n          return [];\n      }\n    },\n  },\n});\n\nfunction Todo(props) {\n  // filter \u72B6\u6001\u901A\u8FC7 props \u4F20\u5165\n  const { filter } = props;\n  const [state, actions] = useModel(todoModel);\n\n  // \u8BA1\u7B97\u5F97\u5230\u6700\u7EC8\u8981\u663E\u793A\u7684 todos\n  const todos = state.visibleTodos(filter);\n\n  return (\n    <div>\n      <div>\n        {todos.map(item => (\n          <div key={item.id}>{item.text}</div>\n        ))}\n      </div>\n    </div>\n  );\n}\n"})}),"\n",(0,i.jsxs)(t.div,{className:"modern-directive info",children:[(0,i.jsx)(t.div,{className:"modern-directive-title",children:"\u66F4\u591A\u53C2\u8003"}),(0,i.jsxs)(t.div,{className:"modern-directive-content",children:[(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"/guides/topic-detail/model/computed-state",children:"\u4F7F\u7528 Model"})}),"\n"]})]})]})}(d=globalThis).__RSPRESS_PAGE_META||(d.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["zh%2Fguides%2Ftopic-detail%2Fmodel%2Fcomputed-state.mdx"]={toc:[{text:"\u53EA\u4F9D\u8D56\u81EA\u8EAB\u7684 State",id:"\u53EA\u4F9D\u8D56\u81EA\u8EAB\u7684-state",depth:2},{text:"\u4F9D\u8D56\u5176\u4ED6 Model \u7684 State",id:"\u4F9D\u8D56\u5176\u4ED6-model-\u7684-state",depth:2},{text:"\u51FD\u6570\u7C7B\u578B\u7684\u884D\u751F\u72B6\u6001",id:"\u51FD\u6570\u7C7B\u578B\u7684\u884D\u751F\u72B6\u6001",depth:2}],title:"\u884D\u751F\u72B6\u6001",frontmatter:{sidebar_position:4,title:"\u884D\u751F\u72B6\u6001"}};var r=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object.assign({},(0,a.useMDXComponents)(),e.components).wrapper;return t?(0,i.jsx)(t,(0,o._)((0,s._)({},e),{children:(0,i.jsx)(l,(0,s._)({},e))})):l(e)}}}]);