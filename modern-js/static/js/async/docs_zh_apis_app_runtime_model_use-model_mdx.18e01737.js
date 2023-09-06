(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_apis_app_runtime_model_use-model_mdx"],{26973:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return c}});var n,d=s("15169"),i=s("43932"),o=s("9880"),l=s("23169"),r=s("34552");function a(e){var t=Object.assign({h1:"h1",a:"a",div:"div",p:"p",h2:"h2",pre:"pre",code:"code",h3:"h3",ul:"ul",li:"li"},(0,l.useMDXComponents)(),e.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.h1,{id:"usemodel",children:["useModel",(0,o.jsx)(t.a,{className:"header-anchor","aria-hidden":"true",href:"#usemodel",children:"#"})]}),"\n","\n",(0,o.jsx)(r.default,{}),"\n",(0,o.jsxs)(t.div,{className:"modern-directive tip",children:[(0,o.jsx)(t.div,{className:"modern-directive-title",children:"提示"}),(0,o.jsxs)(t.div,{className:"modern-directive-content",children:[(0,o.jsxs)(t.p,{children:["Reduck 原始类型较为复杂，以下涉及类型定义的地方，展示的是简化后的类型信息。原始类型见 ",(0,o.jsx)(t.a,{href:"https://github.com/web-infra-dev/reduck/blob/main/packages/store/src/model/useModel.ts",target:"_blank",rel:"noopener noreferrer",children:"model"}),"。"]}),"\n"]})]}),"\n",(0,o.jsxs)(t.h2,{id:"函数签名",children:["函数签名",(0,o.jsx)(t.a,{className:"header-anchor","aria-hidden":"true",href:"#函数签名",children:"#"})]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-ts",children:"function useModel(\n  models: Models[],\n  stateSelector?: StateSelector,\n  actionSelector?: ActionSelector,\n): [state, actions, subscribe];\nfunction useModel(\n  ...models: Models[],\n  stateSelector?: (...args: State[]) => any,\n  actionSelector?: (...args: Actions[]) => any,\n): [state, actions, subscribe];\n"})}),"\n",(0,o.jsxs)(t.h3,{id:"参数",children:["参数",(0,o.jsx)(t.a,{className:"header-anchor","aria-hidden":"true",href:"#参数",children:"#"})]}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"models：Model 对象数组，可以作为一个数组类型的参数传入，也可以所有 Model 逐个作为参数传入。"}),"\n",(0,o.jsxs)(t.li,{children:["stateSelector：可选参数，用于筛选 State 计算。前 n 个参数为 n 个 Model 对应的 State，返回的数据作为 ",(0,o.jsx)(t.code,{children:"useModel"})," 返回值数组的第一个元素。"]}),"\n",(0,o.jsxs)(t.li,{children:["actionSelector：可选参数，用于筛选 Actions 计算。前 n 个参数为 n 个 Model 对应的 Actions，返回的数据作为 ",(0,o.jsx)(t.code,{children:"useModel"})," 返回值数组的第二个元素。"]}),"\n"]}),"\n",(0,o.jsxs)(t.h3,{id:"返回值",children:["返回值",(0,o.jsx)(t.a,{className:"header-anchor","aria-hidden":"true",href:"#返回值",children:"#"})]}),"\n",(0,o.jsx)(t.p,{children:"返回一个数组，每一项元素分别为："}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["state：",(0,o.jsx)(t.code,{children:"stateSelector"})," 的返回值。如果未传 ",(0,o.jsx)(t.code,{children:"stateSelector"}),"，会把传入的所有 Model 的 State (包含衍生状态)合并后返回。如果不同 Model 的 State 中存在同名属性，后面的 State 会覆盖前面的 State。当 ",(0,o.jsx)(t.code,{children:"state"})," 发生变化时，调用 ",(0,o.jsx)(t.code,{children:"useModel"})," 的组件会重新渲染。"]}),"\n",(0,o.jsxs)(t.li,{children:["actions：第二个元素为 ",(0,o.jsx)(t.code,{children:"actionSelector"})," 的返回值。如果未传 ",(0,o.jsx)(t.code,{children:"actionSelector"}),"，会把传入的所有 Model 的 Actions (包含 Effects) 合并后返回。如果不同 Model 的 Actions 中存在同名属性，后面的 Actions 会覆盖前面的 Actions。"]}),"\n",(0,o.jsx)(t.li,{children:"subscribe：订阅 State 变化的函数。当传入的任意 Model 的 State 发生改变时，该函数会被调用。"}),"\n"]}),"\n",(0,o.jsxs)(t.h2,{id:"示例",children:["示例",(0,o.jsx)(t.a,{className:"header-anchor","aria-hidden":"true",href:"#示例",children:"#"})]}),"\n",(0,o.jsxs)(t.h3,{id:"基本用法",children:["基本用法",(0,o.jsx)(t.a,{className:"header-anchor","aria-hidden":"true",href:"#基本用法",children:"#"})]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-tsx",children:"import todoModel from 'models/todo';\nimport filterModel from 'models/filter';\n\nfunction Test(props) {\n  const [state, actions] = useModel([todoModel, filterModel]);\n  actions.add(); // 调用 todoModel add action\n  actions.setVisibleStatus(); // 调用 filterModel filterModel action\n\n  state.items; // 获取 todoModel state items\n  state.visibleStatus; // 获取 filterModel state visibleStatus\n}\n"})}),"\n",(0,o.jsxs)(t.h3,{id:"selector-用法",children:["selector 用法",(0,o.jsx)(t.a,{className:"header-anchor","aria-hidden":"true",href:"#selector-用法",children:"#"})]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",children:"function Test(props) {\n  const [state, actions] = useModel(\n    [todoModel, filterModel],\n    (todoState, filterState) => ({\n      items: todoState.items,\n      visibleStatus: `${props.prefix}-${filterState.visibleStatus}`,\n    }),\n    (todoActions, filterActions) => ({\n      ...todoActions,\n      ...filterActions,\n    }),\n  );\n  actions.add(); // 调用 todoModel add action\n  actions.setVisibleStatus(); // 调用 filterModel filterModel action\n\n  state.items; // 获取 todoModel state items\n  state.visibleStatus; // 获取 filterModel state visibleStatus\n}\n"})}),"\n",(0,o.jsxs)(t.div,{className:"modern-directive info",children:[(0,o.jsx)(t.div,{className:"modern-directive-title",children:"更多参考"}),(0,o.jsxs)(t.div,{className:"modern-directive-content",children:[(0,o.jsx)(t.p,{children:(0,o.jsx)(t.a,{href:"/guides/topic-detail/model/use-model",children:"使用 Model"})}),"\n"]})]})]})}(n=globalThis).__RSPRESS_PAGE_META||(n.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["zh%2Fapis%2Fapp%2Fruntime%2Fmodel%2Fuse-model.mdx"]={toc:[{text:"函数签名",id:"函数签名",depth:2},{text:"参数",id:"参数",depth:3},{text:"返回值",id:"返回值",depth:3},{text:"示例",id:"示例",depth:2},{text:"基本用法",id:"基本用法",depth:3},{text:"selector 用法",id:"selector-用法",depth:3}],title:"useModel",frontmatter:{sidebar_position:2,title:"useModel"}};var c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object.assign({},(0,l.useMDXComponents)(),e.components).wrapper;return t?(0,o.jsx)(t,(0,i._)((0,d._)({},e),{children:(0,o.jsx)(a,(0,d._)({},e))})):a(e)}}}]);