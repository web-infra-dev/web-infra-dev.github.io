/*! For license information please see 46318.07f139fc.js.LICENSE.txt */
(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["46318"],{47200:function(e,n,s){"use strict";s.r(n);var d=s("39980"),o=s("9580");function c(e){let n=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",ol:"ol",li:"li",code:"code",pre:"pre",div:"div",strong:"strong",ul:"ul",img:"img"},(0,o.ah)(),e.components);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.h1,{id:"model-\u901A\u4FE1",children:["Model \u901A\u4FE1",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#model-\u901A\u4FE1",children:"#"})]}),"\n",(0,d.jsx)(n.p,{children:"Model \u901A\u4FE1\uFF0C\u65E2\u6307\u4E0D\u540C Model \u95F4\u7684\u901A\u4FE1\uFF0C\u4E5F\u6307\u540C\u4E00\u4E2A Model \u5185\u90E8 Effects\u3001Actions \u4E4B\u95F4\u7684\u901A\u4FE1\u3002"}),"\n",(0,d.jsxs)(n.h2,{id:"model-\u95F4\u901A\u4FE1",children:["Model \u95F4\u901A\u4FE1",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#model-\u95F4\u901A\u4FE1",children:"#"})]}),"\n",(0,d.jsx)(n.p,{children:"Model \u4E4B\u95F4\u4E0D\u662F\u5B64\u7ACB\u7684\uFF0C\u662F\u53EF\u4EE5\u8FDB\u884C\u901A\u4FE1\u7684\u3002\u4E3B\u8981\u5206\u4E3A\u4E24\u79CD\u573A\u666F\uFF1A"}),"\n",(0,d.jsxs)(n.ol,{children:["\n",(0,d.jsx)(n.li,{children:"\u5728 Model \u4E2D\u8BBF\u95EE\u5176\u5B83 Model \u7684 State \u548C Actions\u3002"}),"\n",(0,d.jsx)(n.li,{children:"\u5728 Model \u4E2D\u76D1\u542C\u5176\u5B83 Model \u53D8\u5316\u3002"}),"\n"]}),"\n",(0,d.jsxs)(n.p,{children:["\u8FD9\u91CC\u5C06 ",(0,d.jsx)(n.a,{href:"/guides/topic-detail/model/quick-start",children:"\u5FEB\u901F\u4E0A\u624B"})," \u4E00\u8282\u7684\u7B80\u5355\u8BA1\u6570\u5668\u5E94\u7528\u6539\u9020\u6210\u4E00\u4E2A\u53EF\u8BBE\u7F6E\u6B65\u9891\u7684\u8BA1\u6570\u5668\u5E94\u7528\u3002\u53EF\u4EE5\u901A\u8FC7\u8BBE\u7F6E\u6B65\u9891\uFF0C\u4ECE\u800C\u5F71\u54CD\u6BCF\u6B21\u8BA1\u6570\u5668\u589E\u52A0\u7684\u5E45\u5EA6\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:["\u6211\u4EEC\u62BD\u8C61\u51FA\u4E24\u4E2A Model\uFF0C\u5206\u522B\u4E3A ",(0,d.jsx)(n.code,{children:"stepModel"}),"\uFF08\u6B65\u9891\uFF09\u3001",(0,d.jsx)(n.code,{children:"counterModel"}),"\uFF08\u8BA1\u6570\u5668\uFF09\uFF1A"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",children:"import { model } from '@modern-js/runtime/model';\n\nconst stepModel = model('step').define({\n  state: 1,\n});\n\nconst counterModel = model('count').define((context, { use, onMount }) => {\n  const [, , subscribeStep] = use(stepModel);\n\n  onMount(() => {\n    return subscribeStep(() => {\n      console.log(\n        `Subscribe in counterModel: stepModel change to ${use(stepModel)[0]}`,\n      );\n    });\n  });\n\n  return {\n    state: {\n      value: 1,\n    },\n    actions: {\n      add(state) {\n        const step = use(stepModel)[0];\n        state.value += step;\n      },\n    },\n  };\n});\n\nexport { stepModel, counterModel };\n"})}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"stepModel"})," \u53EA\u58F0\u660E\u4E00\u4E2A ",(0,d.jsx)(n.code,{children:"state"}),"\uFF0C\u521D\u59CB\u503C\u4E3A 1\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"counterModel"})," \u901A\u8FC7 ",(0,d.jsx)(n.code,{children:"use"})," \u51FD\u6570\u52A0\u8F7D ",(0,d.jsx)(n.code,{children:"stepModel"}),"\uFF0C\u62FF\u5230\u8FD4\u56DE\u7684 ",(0,d.jsx)(n.code,{children:"subscribeStep"})," \u51FD\u6570\uFF0C\u7528\u6765\u76D1\u542C ",(0,d.jsx)(n.code,{children:"stepModel"})," \u72B6\u6001\u7684\u53D8\u66F4\u3002 ",(0,d.jsx)(n.code,{children:"onMount"})," \u662F Model \u6302\u8F7D\u5B8C\u6210\u540E\u7684\u94A9\u5B50\u51FD\u6570\uFF0C",(0,d.jsx)(n.code,{children:"counterModel"})," \u6302\u8F7D\u5B8C\u6210\u540E\u5F00\u59CB\u8BA2\u9605 ",(0,d.jsx)(n.code,{children:"stepModel"})," \u72B6\u6001\u7684\u53D8\u66F4\uFF0C\u6253\u5370\u51FA ",(0,d.jsx)(n.code,{children:"stepModel"})," \u7684\u6700\u65B0\u503C\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"counterModel"})," \u901A\u8FC7 ",(0,d.jsx)(n.code,{children:"use"})," \u51FD\u6570\u8BBF\u95EE ",(0,d.jsx)(n.code,{children:"stepModel"}),"\uFF0C\u5728 ",(0,d.jsx)(n.code,{children:"add"})," \u91CC\u53EF\u4EE5\u83B7\u53D6\u5230\u5F53\u524D ",(0,d.jsx)(n.code,{children:"stepModel"})," \u7684\u503C\uFF08\u6B65\u9891\uFF09\uFF0C\u4EE5\u6B64\u503C\u6765\u505A\u81EA\u589E\u3002"]}),"\n",(0,d.jsxs)(n.div,{className:"rspress-directive caution",children:[(0,d.jsx)(n.div,{className:"rspress-directive-title",children:"\u6CE8\u610F"}),(0,d.jsxs)(n.div,{className:"rspress-directive-content",children:[(0,d.jsxs)(n.p,{children:["\u5F53\u9700\u8981\u8BBF\u95EE\u5176\u4ED6 Model \u7684 State \u65F6\uFF0C\u5FC5\u987B\u8981\u5728\u5F53\u524D Actions \u6216 Effects \u51FD\u6570\uFF08\u672C\u4F8B\u4E2D\u5BF9\u5E94 ",(0,d.jsx)(n.code,{children:"add"})," \u51FD\u6570 \uFF09\u771F\u6B63\u6267\u884C\u7684\u9636\u6BB5\u8C03\u7528 ",(0,d.jsx)(n.code,{children:"use"}),"\uFF0C\u4EE5\u4FDD\u8BC1\u83B7\u53D6\u7684 State \u662F\u6700\u65B0\u503C\u3002\u56E0\u6B64\uFF0C\u6211\u4EEC\u867D\u7136\u5728 ",(0,d.jsx)(n.code,{children:"define"})," \u7684\u56DE\u8C03\u51FD\u6570\u4E2D\u4E5F\u8C03\u7528\u4E86 ",(0,d.jsx)(n.code,{children:"use(stepModel)"}),"\uFF0C\u4F46\u662F\u6211\u4EEC\u5E76\u6CA1\u6709\u89E3\u6784 ",(0,d.jsx)(n.code,{children:"stepModel"})," \u7684 ",(0,d.jsx)(n.code,{children:"state"})," \u503C\uFF0C\u56E0\u4E3A ",(0,d.jsx)(n.code,{children:"define"})," \u7684\u56DE\u8C03\u51FD\u6570\u662F\u5728 Model \u7684\u6302\u8F7D\u9636\u6BB5\u6267\u884C\u7684\uFF0C\u8FD9\u4E2A\u65F6\u5019\u83B7\u53D6\u5230\u7684 ",(0,d.jsx)(n.code,{children:"stepModel"})," \u7684 ",(0,d.jsx)(n.code,{children:"state"})," \u53EF\u80FD\u548C ",(0,d.jsx)(n.code,{children:"add"})," \u6267\u884C\u65F6\u83B7\u53D6\u5230\u7684\u503C\u662F\u4E0D\u540C\u7684\u3002"]}),"\n"]})]}),"\n",(0,d.jsxs)(n.p,{children:["\u4FEE\u6539 ",(0,d.jsx)(n.strong,{children:"App.tsx"})]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-tsx",children:"import { useModel } from '@modern-js/runtime/model';\nimport { counterModel, stepModel } from './models/count';\n\nfunction Counter() {\n  const [state, actions] = useModel(counterModel);\n  const [step, stepActions] = useModel(stepModel);\n\n  return (\n    <div>\n      <div>step: {step}</div>\n      <button onClick={() => stepActions.setState(step + 1)}>add step</button>\n      <div>counter: {state.value}</div>\n      <button onClick={() => actions.add()}>add counter</button>\n    </div>\n  );\n}\n\nexport default function App() {\n  return <Counter />;\n}\n"})}),"\n",(0,d.jsxs)(n.div,{className:"rspress-directive info",children:[(0,d.jsx)(n.div,{className:"rspress-directive-title",children:"\u8865\u5145\u4FE1\u606F"}),(0,d.jsxs)(n.div,{className:"rspress-directive-content",children:[(0,d.jsxs)(n.p,{children:["Modern.js \u9ED8\u8BA4\u5F00\u542F ",(0,d.jsx)(n.a,{href:"/zh/guides/topic-detail/model/auto-actions",children:"\u81EA\u52A8\u751F\u6210 actions"}),"\uFF0C\u6240\u4EE5 ",(0,d.jsx)(n.code,{children:"stepModel"})," \u4E2D\u867D\u7136\u6CA1\u6709\u624B\u52A8\u5B9A\u4E49 Actions\uFF0C\u4F46\u53EF\u4EE5\u4F7F\u7528\u81EA\u52A8\u751F\u6210\u7684 ",(0,d.jsx)(n.code,{children:"setState"}),"\u3002"]}),"\n"]})]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["\u70B9\u51FB ",(0,d.jsx)(n.strong,{children:"add step"})," \u589E\u52A0\u6B65\u9891\u3002"]}),"\n",(0,d.jsxs)(n.li,{children:["\u70B9\u51FB ",(0,d.jsx)(n.strong,{children:"add counter"})," \u89E6\u53D1\u8BA1\u6570\u5668\u589E\u52A0\u3002"]}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:"\u6700\u7EC8\u6548\u679C\u5982\u4E0B\uFF1A"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/aphqeh7uhohpquloj/modern-js/docs/models-communicate.gif",alt:"communicate-models"})}),"\n",(0,d.jsxs)(n.div,{className:"rspress-directive info",children:[(0,d.jsx)(n.div,{className:"rspress-directive-title",children:"\u8865\u5145\u4FE1\u606F"}),(0,d.jsxs)(n.div,{className:"rspress-directive-content",children:["\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["\u672C\u8282\u5B8C\u6574\u7684",(0,d.jsx)(n.a,{href:"https://github.com/web-infra-dev/modern-js-examples/tree/main/examples/runtime-api/models-communication",target:"_blank",rel:"noopener noreferrer",children:"\u793A\u4F8B\u4EE3\u7801"}),"\u3002"]}),"\n",(0,d.jsxs)(n.li,{children:["\u76F8\u5173 API \u7684\u66F4\u591A\u4ECB\u7ECD\uFF0C\u8BF7\u53C2\u8003\uFF1A",(0,d.jsx)(n.a,{href:"/apis/app/runtime/model/model_#%E5%87%BD%E6%95%B0%E7%B1%BB%E5%9E%8B",children:"model"}),"\u3002"]}),"\n"]}),"\n"]})]}),"\n",(0,d.jsxs)(n.p,{children:["\u524D\u9762 ",(0,d.jsx)(n.code,{children:"counterModel"})," \u7684\u4F8B\u5B50\uFF0C\u6211\u4EEC\u662F\u5728 Actions \u7684\u51FD\u6570\u5185\u90E8\u8C03\u7528 ",(0,d.jsx)(n.code,{children:"use"})," \u83B7\u53D6\u5176\u4ED6 Model \u5BF9\u8C61\u7684\u3002\u5982\u679C\u53EA\u9700\u8981\u8C03\u7528\u5176\u5B83 Model \u7684 Actions\uFF0C\u56E0\u4E3A Actions \u90FD\u662F\u51FD\u6570\uFF0C\u4E0D\u5B58\u5728\u503C\u8FC7\u671F\u95EE\u9898\uFF0C\u6240\u4EE5\u4E5F\u53EF\u4EE5\u5728 ",(0,d.jsx)(n.code,{children:"define"})," \u7684\u56DE\u8C03\u51FD\u6570\u4E2D\u8C03\u7528 ",(0,d.jsx)(n.code,{children:"use"})," \u83B7\u53D6 Model \u7684 Actions\u3002\u4F8B\u5982\uFF1A"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",children:"const barModel = model('bar').define({\n  // \u7701\u7565\n});\n\nconst fooModel = model('foo').define((context, utils) => {\n  // \u83B7\u53D6 barModel \u7684 actions\n  const [, actions] = utils.use(barModel);\n  return {\n    // \u7701\u7565 state\u3001actions\n    effects: {\n      async loadA() {\n        // \u7701\u7565\u526F\u4F5C\u7528\u903B\u8F91\n        // \u8C03\u7528 barModel \u7684 action\n        barModel.actionA();\n      },\n      async loadB() {\n        // \u7701\u7565\u526F\u4F5C\u7528\u903B\u8F91\n        // \u8C03\u7528 barModel \u7684 action\n        barModel.actionB();\n      },\n    },\n  };\n});\n"})}),"\n",(0,d.jsxs)(n.p,{children:["\u8FD9\u6837\uFF0C\u6211\u4EEC\u4E0D\u9700\u8981\u5728 ",(0,d.jsx)(n.code,{children:"loadA"}),"\u3001",(0,d.jsx)(n.code,{children:"loadB"})," \u4E2D\u91CD\u590D\u83B7\u53D6 ",(0,d.jsx)(n.code,{children:"barModel"})," \u5BF9\u8C61\uFF0C\u7B80\u5316\u4E86\u4EE3\u7801\u903B\u8F91\u3002"]}),"\n",(0,d.jsxs)(n.h2,{id:"model-\u5185\u901A\u4FE1",children:["Model \u5185\u901A\u4FE1",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#model-\u5185\u901A\u4FE1",children:"#"})]}),"\n",(0,d.jsx)(n.p,{children:"Model \u5185\u901A\u4FE1\uFF0C\u4E5F\u4E3B\u8981\u5206\u4E3A\u4E24\u79CD\u573A\u666F\uFF1A"}),"\n",(0,d.jsxs)(n.ol,{children:["\n",(0,d.jsx)(n.li,{children:"Effects \u51FD\u6570\u8C03\u7528\u81EA\u8EAB Model \u7684 Actions \u51FD\u6570\u3001\u6216\u5176\u4ED6 Effects \u51FD\u6570\u3002"}),"\n",(0,d.jsx)(n.li,{children:"Actions \u51FD\u6570\u8C03\u7528\u81EA\u8EAB Model \u7684 \u5176\u4ED6 Actions \u51FD\u6570\u3002"}),"\n"]}),"\n",(0,d.jsxs)(n.p,{children:["\u5728 ",(0,d.jsx)(n.a,{href:"/guides/topic-detail/model/manage-effects",children:"\u526F\u4F5C\u7528\u7BA1\u7406"})," \u4E00\u8282\uFF0C\u6211\u4EEC\u6F14\u793A\u8FC7 Effects \u51FD\u6570\u5982\u4F55\u8C03\u7528 Actions \u51FD\u6570\u3002"]}),"\n",(0,d.jsx)(n.p,{children:"\u8FD9\u91CC\u6211\u4EEC\u518D\u6765\u4E3E\u4E00\u4E2A\u4F8B\u5B50\uFF1A"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",children:"const fooModel = model('foo').define((context, { use, onMount }) => ({\n  state: {\n    a: '',\n    b: '',\n  },\n  actions: {\n    setA(state, payload) {\n      state.a = payload;\n    },\n    setB(state, payload) {\n      state.a = payload;\n    },\n  },\n  effects: {\n    async loadA() {\n      // \u901A\u8FC7 use \u83B7\u53D6\u5F53\u524D Model \u7684 actions\n      const [, actions] = use(fooModel);\n      const res = await mockFetchA();\n      actions.setA(res);\n    },\n    async loadB() {\n      // \u901A\u8FC7 use \u83B7\u53D6\u5F53\u524D Model \u7684 actions\n      const [, actions] = use(fooModel);\n      const res = await mockFetchB();\n      actions.setB(res);\n    },\n  },\n}));\n"})}),"\n",(0,d.jsxs)(n.p,{children:["\u8FD9\u4E2A\u4F8B\u5B50\u4E2D\uFF0C",(0,d.jsx)(n.code,{children:"fooModel"})," \u7684\u4E24\u4E2A Effects \u51FD\u6570\uFF0C\u9700\u8981\u8C03\u7528\u81EA\u8EAB\u7684 Actions \u51FD\u6570\u3002\u8FD9\u91CC\u6211\u4EEC\u5728\u6BCF\u4E2A Effects \u51FD\u6570\u4E2D\uFF0C\u90FD\u8C03\u7528\u4E86\u4E00\u6B21 ",(0,d.jsx)(n.code,{children:"use"}),"\uFF0C\u4E3A\u4EC0\u4E48\u4E0D\u80FD\u50CF Model \u95F4\u901A\u4FE1\u7684\u4F8B\u5B50\u4E2D\uFF0C\u5728 ",(0,d.jsx)(n.code,{children:"define"})," \u7684\u56DE\u8C03\u51FD\u6570\u4E2D\uFF0C\u7EDF\u4E00\u8C03\u7528 ",(0,d.jsx)(n.code,{children:"use"})," \u83B7\u53D6 Model \u81EA\u8EAB\u7684 Actions \u5462\uFF1F\u8FD9\u662F\u56E0\u4E3A\u8C03\u7528 ",(0,d.jsx)(n.code,{children:"use"})," \u83B7\u53D6 Model \u65F6\uFF0C\u4F1A\u5148\u68C0\u67E5\u8FD9\u4E2A Model \u662F\u5426\u5DF2\u7ECF\u6302\u8F7D\uFF0C\u5982\u679C\u8FD8\u6CA1\u6709\u6302\u8F7D\uFF0C\u4F1A\u5148\u6267\u884C\u6302\u8F7D\u903B\u8F91\uFF0C\u800C ",(0,d.jsx)(n.code,{children:"define"})," \u7684\u56DE\u8C03\u51FD\u6570\u53C8\u662F\u5728 Model \u7684\u6302\u8F7D\u9636\u6BB5\u6267\u884C\u7684\uFF0C\u8FD9\u6837\u4E00\u6765\uFF0C\u5728\u6302\u8F7D\u9636\u6BB5\u8C03\u7528 ",(0,d.jsx)(n.code,{children:"use"})," \u83B7\u53D6 Model \u81EA\u8EAB\uFF0C\u4F1A\u51FA\u73B0\u6B7B\u5FAA\u73AF\uFF08\u4EE3\u7801\u5B9E\u9645\u6267\u884C\u8FC7\u7A0B\u4F1A\u629B\u51FA\u9519\u8BEF\uFF09\u3002\u6240\u4EE5\uFF0C",(0,d.jsxs)(n.strong,{children:["\u4E00\u5B9A\u4E0D\u80FD\u5728 ",(0,d.jsx)(n.code,{children:"define"})," \u7684\u56DE\u8C03\u51FD\u6570\u4E2D\uFF0C\u8C03\u7528 ",(0,d.jsx)(n.code,{children:"use"})," \u83B7\u53D6 Model \u81EA\u8EAB\u5BF9\u8C61\u3002"]})]}),"\n",(0,d.jsxs)(n.p,{children:["\u4E0D\u8FC7\uFF0C\u6211\u4EEC\u53EF\u4EE5\u5229\u7528 ",(0,d.jsx)(n.code,{children:"onMount"})," \u8FD9\u4E2A\u94A9\u5B50\u51FD\u6570\uFF0C\u5728 Model \u6302\u8F7D\u5B8C\u6210\u540E\uFF0C\u518D\u901A\u8FC7 ",(0,d.jsx)(n.code,{children:"use"})," \u83B7\u53D6 Model \u81EA\u8EAB\u5BF9\u8C61\uFF1A"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",children:"const fooModel = model('foo').define((context, { use, onMount }) => {\n  let actions;\n\n  onMount(() => {\n    // fooModel \u6302\u8F7D\u5B8C\u6210\u540E\uFF0C\u901A\u8FC7 use \u83B7\u53D6\u5F53\u524D Model \u7684 actions\n    [, actions] = use(fooModel);\n  });\n\n  return {\n    state: {\n      a: '',\n      b: '',\n    },\n    actions: {\n      setA(state, payload) {\n        state.a = payload;\n      },\n      setB(state, payload) {\n        state.a = payload;\n      },\n    },\n    effects: {\n      async loadA() {\n        const res = await mockFetchA();\n        actions.setA(res);\n      },\n      async loadB() {\n        const res = await mockFetchB();\n        actions.setB(res);\n      },\n    },\n  };\n});\n"})}),"\n",(0,d.jsx)(n.p,{children:"\u8FD9\u6837\uFF0C\u6211\u4EEC\u4E5F\u53EF\u4EE5\u5B9E\u73B0\u4EE3\u7801\u7684\u7B80\u5316\u3002"})]})}function t(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,o.ah)(),e.components);return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(c,{...e})}):c(e)}n.default=t,t.__RSPRESS_PAGE_META={},t.__RSPRESS_PAGE_META["zh%2Fguides%2Ftopic-detail%2Fmodel%2Fmodel-communicate.mdx"]={toc:[{text:"Model \u95F4\u901A\u4FE1",id:"model-\u95F4\u901A\u4FE1",depth:2},{text:"Model \u5185\u901A\u4FE1",id:"model-\u5185\u901A\u4FE1",depth:2}],title:"Model \u901A\u4FE1",frontmatter:{sidebar_position:7,title:"Model \u901A\u4FE1"}}}}]);