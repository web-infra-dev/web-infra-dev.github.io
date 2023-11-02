(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["53463"],{96389:function(e,n,s){"use strict";s.r(n),s.d(n,{default:function(){return c},frontmatter:function(){return a}});var t=s("9880"),d=s("23169");function r(e){let n=Object.assign({h1:"h1",a:"a",h2:"h2",h3:"h3",p:"p",code:"code",pre:"pre",div:"div",img:"img"},(0,d.useMDXComponents)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.h1,{id:"\u4F7F\u7528-model",children:["\u4F7F\u7528 Model",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u4F7F\u7528-model",children:"#"})]}),"\n",(0,t.jsxs)(n.h2,{id:"\u5728\u7EC4\u4EF6\u5185\u4F7F\u7528",children:["\u5728\u7EC4\u4EF6\u5185\u4F7F\u7528",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u5728\u7EC4\u4EF6\u5185\u4F7F\u7528",children:"#"})]}),"\n",(0,t.jsxs)(n.h3,{id:"\u4F5C\u4E3A\u5168\u5C40\u72B6\u6001\u4F7F\u7528",children:["\u4F5C\u4E3A\u5168\u5C40\u72B6\u6001\u4F7F\u7528",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u4F5C\u4E3A\u5168\u5C40\u72B6\u6001\u4F7F\u7528",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:["\u901A\u8FC7 ",(0,t.jsx)(n.code,{children:"useModel"})," \u53EF\u4EE5\u83B7\u53D6 Model \u7684 State\u3001Actions \u7B49\u3002\u5F53 Model \u7684 State \u901A\u8FC7 Actions \u8FDB\u884C\u4FEE\u6539\u540E\uFF0C\u4EFB\u4F55\u5176\u4ED6\u4F7F\u7528\u4E86\u8BE5 Model \u7684\u7EC4\u4EF6\uFF0C\u90FD\u4F1A\u81EA\u52A8\u91CD\u65B0\u6E32\u67D3\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:["\u5728 ",(0,t.jsx)(n.a,{href:"/guides/topic-detail/model/quick-start",children:"\u5FEB\u901F\u4E0A\u624B"})," \u7684\u8BA1\u6570\u5668\u6848\u4F8B\u4E2D\uFF0C\u6211\u4EEC\u5DF2\u7ECF\u6F14\u793A\u4E86 ",(0,t.jsx)(n.code,{children:"useModel"})," \u7684\u4F7F\u7528\uFF0C\u4E0D\u518D\u91CD\u590D\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"useModel"})," \u652F\u6301\u4F20\u5165\u591A\u4E2A Model\uFF0C\u591A\u4E2A Model \u7684 State \u548C Actions \u4F1A\u8FDB\u884C\u5408\u5E76\u540E\u4F5C\u4E3A\u8FD4\u56DE\u7ED3\u679C\u3002\u4F8B\u5982\uFF1A"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"const fooModel = model('foo').define({\n  state: {\n    value: 1,\n  },\n  actions: {\n    add(state) {\n      state += 1;\n    },\n  },\n});\n\nconst barModel = model('bar').define({\n  state: {\n    title: 'bar',\n  },\n  actions: {\n    set(state, payload) {\n      state.title = payload;\n    },\n  },\n});\n\nconst [state, actions] = useModel([fooModel, barModel]);\n// \u6216\nconst [state, actions] = useModel(fooModel, barModel);\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"state"})," \u548C ",(0,t.jsx)(n.code,{children:"actions"})," \u7684\u503C\u5206\u522B\u4E3A\uFF1A"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"state = {\n  value: 1,\n  title: 'bar',\n};\n\nactions = {\n  add(state) {\n    state += 1;\n  },\n  set(state, payload) {\n    state.title = payload;\n  },\n};\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"useModel"})," \u8FD8\u652F\u6301\u5BF9 State \u548C Actions \u505A selector \u64CD\u4F5C\uFF0C\u5B9E\u73B0\u5BF9 State \u548C Actions \u7684\u7B5B\u9009\u6216\u91CD\u547D\u540D\uFF0C\u4F8B\u5982\uFF1A"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"const fooModel = model('foo').define({\n  state: {\n    value: 1,\n  },\n  actions: {\n    add(state) {\n      state += 1;\n    },\n  },\n});\n\nconst barModel = model('bar').define({\n  state: {\n    value: 'bar',\n  },\n  actions: {\n    set(state, payload) {\n      state.value = payload;\n    },\n  },\n});\n\nconst [state, actions] = useModel(\n  [fooModel, barModel],\n  (fooState, barState) => ({\n    fooValue: fooState.value,\n    barValue: barState.value,\n  }), // stateSelector\n  (fooActions, barActions) => ({ add: fooActions.add }), // actionsSelector\n);\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u6211\u4EEC\u901A\u8FC7 ",(0,t.jsx)(n.code,{children:"stateSelector"})," \uFF0C\u628A ",(0,t.jsx)(n.code,{children:"fooModel"})," \u548C ",(0,t.jsx)(n.code,{children:"barModel"})," \u4E2D\u91CD\u540D\u7684\u72B6\u6001\u505A\u4E86\u547D\u540D\u4FEE\u6539\uFF0C\u901A\u8FC7 ",(0,t.jsx)(n.code,{children:"actionsSelector"})," \uFF0C\u8FC7\u6EE4\u6389\u4E86 ",(0,t.jsx)(n.code,{children:"barModel"})," \u7684 Actions\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:["\u5982\u679C\u53EA\u9700\u8981\u8BBE\u7F6E ",(0,t.jsx)(n.code,{children:"actionsSelector"}),"\uFF0C\u53EF\u4EE5\u628A ",(0,t.jsx)(n.code,{children:"stateSelector"})," \u8BBE\u7F6E\u4E3A ",(0,t.jsx)(n.code,{children:"undefined"}),"\uFF0C\u4F5C\u4E3A\u53C2\u6570\u5360\u4F4D\u3002\u4F8B\u5982\uFF1A"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"const [state, actions] = useModel(\n  [fooModel, barModel],\n  undefined,\n  (fooActions, barActions) => ({ add: fooActions.add }), // actionsSelector\n);\n"})}),"\n",(0,t.jsxs)(n.h3,{id:"\u4F5C\u4E3A\u9759\u6001\u72B6\u6001\u4F7F\u7528",children:["\u4F5C\u4E3A\u9759\u6001\u72B6\u6001\u4F7F\u7528",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u4F5C\u4E3A\u9759\u6001\u72B6\u6001\u4F7F\u7528",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:["\u901A\u8FC7 ",(0,t.jsx)(n.code,{children:"useStaticModel"})," \u83B7\u53D6 Model \uFF0C\u5C06 Model \u4E2D\u7684\u72B6\u6001\u4F5C\u4E3A\u9759\u6001\u72B6\u6001\u4F7F\u7528\u3002\u53EF\u4EE5\u4FDD\u8BC1\u7EC4\u4EF6\u6BCF\u6B21\u8BBF\u95EE\u5230\u7684 Model \u7684 State \u90FD\u662F\u6700\u65B0\u503C\uFF0C\u4F46\u662F Model \u7684 State \u7684\u53D8\u5316\uFF0C\u5E76\u4E0D\u4F1A\u5F15\u8D77\u5F53\u524D\u7EC4\u4EF6\u7684\u91CD\u65B0\u6E32\u67D3\u3002"]}),"\n",(0,t.jsxs)(n.div,{className:"rspress-directive info",children:[(0,t.jsx)(n.div,{className:"rspress-directive-title",children:"INFO"}),(0,t.jsxs)(n.div,{className:"rspress-directive-content",children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"useStaticModel"})," \u7684\u4F7F\u7528\u65B9\u5F0F\u548C ",(0,t.jsx)(n.code,{children:"useModel"})," \u5B8C\u5168\u4E00\u81F4\u3002"]}),"\n"]})]}),"\n",(0,t.jsxs)(n.p,{children:["\u8003\u8651\u4E0B\u9762\u4E00\u79CD\u573A\u666F\uFF0C\u6709\u4E00\u4E2A\u7EC4\u4EF6 Input \u8D1F\u8D23\u7528\u6237\u8F93\u5165\uFF0C\u53E6\u5916\u4E00\u4E2A\u7EC4\u4EF6 Search \u8D1F\u8D23\u6839\u636E\u7528\u6237\u7684\u8F93\u5165\u4FE1\u606F\uFF0C\u5728\u70B9\u51FB\u67E5\u8BE2\u6309\u94AE\u540E\u6267\u884C\u67E5\u8BE2\u64CD\u4F5C\uFF0C\u6211\u4EEC\u4E0D\u5E0C\u671B\u7528\u6237\u8F93\u5165\u8FC7\u7A0B\u4E2D\u7684\u72B6\u6001\u53D8\u5316\u5F15\u8D77 Search \u91CD\u65B0\u6E32\u67D3\uFF0C\u8FD9\u65F6\u5019\u5C31\u53EF\u4EE5\u4F7F\u7528 ",(0,t.jsx)(n.code,{children:"useStaticModel"}),"\uFF1A"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"import { useStaticModel } from '@modern-js/runtime/model';\n\nfunction Search() {\n  // \u8FD9\u91CC\u6CE8\u610F\u4E0D\u8981\u89E3\u6784 state\n  const [state] = useStaticModel(searchModel);\n\n  return (\n    <div>\n      <button\n        onClick={async () => {\n          const result = await mockSearch(state.input);\n          console.log(result);\n        }}\n      >\n        Search\n      </button>\n    </div>\n  );\n}\n"})}),"\n",(0,t.jsxs)(n.div,{className:"rspress-directive warning",children:[(0,t.jsx)(n.div,{className:"rspress-directive-title",children:"\u6CE8\u610F"}),(0,t.jsxs)(n.div,{className:"rspress-directive-content",children:[(0,t.jsxs)(n.p,{children:["\u4E0D\u8981\u89E3\u6784 ",(0,t.jsx)(n.code,{children:"useStaticModel"})," \u8FD4\u56DE\u7684 ",(0,t.jsx)(n.code,{children:"state"}),"\uFF0C\u4F8B\u5982\u6539\u6210\u5982\u4E0B\u5199\u6CD5\uFF1A\n",(0,t.jsx)(n.code,{children:"const [{input}] = useStaticModel(searchModel);"}),"\n\u5C06\u59CB\u7EC8\u83B7\u53D6\u5230 Input \u7684\u521D\u59CB\u503C\u3002"]}),"\n"]})]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"useStaticModel"})," \u8FD8\u9002\u5408\u548C ",(0,t.jsx)(n.a,{href:"https://github.com/pmndrs/react-three-fiber",target:"_blank",rel:"noopener noreferrer",children:"react-three-fiber"})," \u7B49\u52A8\u753B\u5E93\u4E00\u8D77\u4F7F\u7528\uFF0C\u56E0\u4E3A\u5728\u52A8\u753B\u7EC4\u4EF6 UI \u91CC\u7ED1\u5B9A\u4F1A\u5FEB\u901F\u53D8\u5316\u7684\u72B6\u6001\uFF0C\u5BB9\u6613\u5F15\u8D77",(0,t.jsx)(n.a,{href:"https://docs.pmnd.rs/react-three-fiber/advanced/pitfalls#never-bind-fast-state-reactive",target:"_blank",rel:"noopener noreferrer",children:"\u6027\u80FD\u95EE\u9898"}),"\u3002\u8FD9\u79CD\u60C5\u51B5\u5C31\u53EF\u4EE5\u9009\u62E9\u4F7F\u7528 ",(0,t.jsx)(n.code,{children:"useStaticModel"}),"\uFF0C\u5B83\u53EA\u4F1A\u8BA2\u9605\u72B6\u6001\uFF0C\u4F46\u4E0D\u4F1A\u5F15\u8D77\u89C6\u56FE\u7EC4\u4EF6\u7684\u91CD\u65B0\u6E32\u67D3\u3002\u4E0B\u9762\u662F\u4E00\u4E2A\u7B80\u5316\u793A\u4F8B\uFF1A"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"function ThreeComponent() {\n  const [state, actions] = useStaticModel(modelA);\n\n  useFrame(() => {\n    state.value; // \u5047\u8BBE\u521D\u59CB\u5316\u4E3A 0\n    actions.setValue(1);\n    state.value; // \u8FD9\u91CC\u4F1A\u5F97\u52301\n  });\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u4F7F\u7528 React \u7684 refs \u4E5F\u53EF\u4EE5\u5B9E\u73B0\u7C7B\u4F3C\u6548\u679C\uFF0C\u5176\u5B9E ",(0,t.jsx)(n.code,{children:"useStaticModel"})," \u5185\u90E8\u4E5F\u4F7F\u7528\u5230\u4E86 refs\u3002\u4E0D\u8FC7\u76F4\u63A5 ",(0,t.jsx)(n.code,{children:"useStaticModel"})," \u6709\u52A9\u4E8E\u5C06\u72B6\u6001\u7684\u7BA1\u7406\u903B\u8F91\u4ECE\u7EC4\u4EF6\u4E2D\u89E3\u8026\uFF0C\u7EDF\u4E00\u6536\u655B\u5230 Model \u5C42\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:["\u5B8C\u6574\u7684\u793A\u4F8B\u4EE3\u7801\u53EF\u4EE5\u5728",(0,t.jsx)(n.a,{href:"https://github.com/web-infra-dev/modern-js-examples/tree/main/examples/runtime-api/static-model",target:"_blank",rel:"noopener noreferrer",children:"\u8FD9\u91CC"}),"\u67E5\u770B\u3002"]}),"\n",(0,t.jsxs)(n.h3,{id:"\u4F5C\u4E3A\u5C40\u90E8\u72B6\u6001\u4F7F\u7528",children:["\u4F5C\u4E3A\u5C40\u90E8\u72B6\u6001\u4F7F\u7528",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u4F5C\u4E3A\u5C40\u90E8\u72B6\u6001\u4F7F\u7528",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:["\u901A\u8FC7 ",(0,t.jsx)(n.code,{children:"useLocalModel"})," \u83B7\u53D6 Model \uFF0C\u5C06 Model \u4E2D\u7684\u72B6\u6001\u4F5C\u4E3A\u5C40\u90E8\u72B6\u6001\u4F7F\u7528\u3002\u6B64\u65F6 Model State \u7684\u53D8\u5316\uFF0C\u53EA\u4F1A\u5F15\u8D77\u5F53\u524D\u7EC4\u4EF6\u7684\u91CD\u65B0\u6E32\u67D3\uFF0C\u4F46\u662F\u4E0D\u4F1A\u5F15\u8D77\u5176\u4ED6\u4F7F\u7528\u4E86\u8BE5 Model \u7684\u7EC4\u4EF6\u91CD\u65B0\u6E32\u67D3\u3002\u6548\u679C\u548C\u901A\u8FC7 React \u7684 ",(0,t.jsx)(n.code,{children:"useState"})," \u7BA1\u7406\u72B6\u6001\u7C7B\u4F3C\uFF0C\u4F46\u662F\u53EF\u4EE5\u5C06\u72B6\u6001\u7684\u7BA1\u7406\u903B\u8F91\u4ECE\u7EC4\u4EF6\u4E2D\u89E3\u8026\uFF0C\u7EDF\u4E00\u6536\u655B\u5230 Model \u5C42\u3002"]}),"\n",(0,t.jsxs)(n.div,{className:"rspress-directive info",children:[(0,t.jsx)(n.div,{className:"rspress-directive-title",children:"INFO"}),(0,t.jsxs)(n.div,{className:"rspress-directive-content",children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"useLocalModel"})," \u7684\u4F7F\u7528\u65B9\u5F0F\u548C ",(0,t.jsx)(n.code,{children:"useModel"})," \u5B8C\u5168\u4E00\u81F4\u3002"]}),"\n"]})]}),"\n",(0,t.jsxs)(n.p,{children:["\u4F8B\u5982\uFF0C\u6211\u4EEC\u4FEE\u6539\u8BA1\u6570\u5668\u5E94\u7528\u7684\u4EE3\u7801\uFF0C\u6DFB\u52A0\u4E00\u4E2A\u6709\u5C40\u90E8\u72B6\u6001\u7684\u8BA1\u6570\u5668\u7EC4\u4EF6 ",(0,t.jsx)(n.code,{children:"LocalCounter"}),"\uFF1A"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"import { useLocalModel } from '@modern-js/runtime/model';\n\nfunction LocalCounter() {\n  const [state, actions] = useLocalModel(countModel);\n\n  return (\n    <div>\n      <div>local counter: {state.value}</div>\n      <button onClick={() => actions.add()}>add</button>\n    </div>\n  );\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u5206\u522B\u70B9\u51FB ",(0,t.jsx)(n.code,{children:"Counter"})," \u548C ",(0,t.jsx)(n.code,{children:"LocalCounter"})," \u7684 ",(0,t.jsx)(n.code,{children:"add"})," \u6309\u94AE\uFF0C\u4E24\u8005\u7684\u72B6\u6001\u4E92\u4E0D\u5F71\u54CD\uFF1A"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/eueh7vhojuh/modern/local-model.gif",alt:"local-model"})}),"\n",(0,t.jsxs)(n.p,{children:["\u5B8C\u6574\u7684\u793A\u4F8B\u4EE3\u7801\u53EF\u4EE5\u5728",(0,t.jsx)(n.a,{href:"https://github.com/web-infra-dev/modern-js-examples/tree/main/examples/runtime-api/local-model",target:"_blank",rel:"noopener noreferrer",children:"\u8FD9\u91CC"}),"\u67E5\u770B\u3002"]}),"\n",(0,t.jsxs)(n.h2,{id:"\u5728\u7EC4\u4EF6\u5916\u4F7F\u7528",children:["\u5728\u7EC4\u4EF6\u5916\u4F7F\u7528",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u5728\u7EC4\u4EF6\u5916\u4F7F\u7528",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:["\u5728\u5B9E\u9645\u4E1A\u52A1\u573A\u666F\u4E2D\uFF0C\u6709\u65F6\u5019\u6211\u4EEC\u9700\u8981\u5728 React \u7EC4\u4EF6\u5916\u4F7F\u7528 Model\uFF0C\u4F8B\u5982\u5728\u5DE5\u5177\u51FD\u6570\u4E2D\u8BBF\u95EE State\u3001\u6267\u884C Actions \u7B49\u3002\u8FD9\u4E2A\u65F6\u5019\uFF0C\u6211\u4EEC\u5C31\u9700\u8981\u4F7F\u7528 Store\u3002 Store \u662F\u4E00\u4E2A\u5E95\u5C42\u6982\u5FF5\uFF0C\u4E00\u822C\u60C5\u51B5\u4E0B\u7528\u6237\u63A5\u89E6\u4E0D\u5230\uFF0C\u5B83\u8D1F\u8D23\u5B58\u50A8\u548C\u7BA1\u7406\u6574\u4E2A\u5E94\u7528\u7684\u72B6\u6001\u3002Reduck \u7684 Store \u57FA\u4E8E ",(0,t.jsx)(n.a,{href:"https://redux.js.org/api/store",target:"_blank",rel:"noopener noreferrer",children:"Redux \u7684 Store"})," \u5B9E\u73B0\uFF0C\u589E\u52A0\u4E86 Reduck \u7279\u6709\u7684 API\uFF0C\u5982 ",(0,t.jsx)(n.code,{children:"use"})," \u3002"]}),"\n",(0,t.jsxs)(n.p,{children:["\u9996\u5148\uFF0C\u5728\u7EC4\u4EF6\u5185\u8C03\u7528 ",(0,t.jsx)(n.code,{children:"useStore"})," \u83B7\u53D6\u5F53\u524D\u5E94\u7528\u4F7F\u7528\u7684 ",(0,t.jsx)(n.code,{children:"store"})," \u5BF9\u8C61\uFF0C\u5E76\u6302\u8F7D\u5230\u7EC4\u4EF6\u5916\u7684\u53D8\u91CF\u4E0A\uFF1A"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"let store; // \u7EC4\u4EF6\u5916\u90E8 `store` \u5BF9\u8C61\u7684\u5F15\u7528\nfunction setStore(s) {\n  store = s;\n}\nfunction getStore() {\n  return store;\n}\n\nfunction Counter() {\n  const [state] = useModel(countModel);\n  const store = useStore();\n  // \u901A\u8FC7 useMemo \u907F\u514D\u4E0D\u5FC5\u8981\u7684\u91CD\u590D\u8BBE\u7F6E\n  useMemo(() => {\n    setStore(store);\n  }, [store]);\n\n  return (\n    <div>\n      <div>counter: {state.value}</div>\n    </div>\n  );\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u901A\u8FC7 ",(0,t.jsx)(n.code,{children:"store.use"})," \u53EF\u4EE5\u83B7\u53D6 Model \u5BF9\u8C61\uFF0C",(0,t.jsx)(n.code,{children:"store.use"})," \u7684\u7528\u6CD5\u540C ",(0,t.jsx)(n.code,{children:"useModel"})," \u76F8\u540C\u3002\u4EE5\u8BA1\u6570\u5668\u5E94\u7528\u4E3A\u4F8B\uFF0C\u6211\u4EEC\u5728\u7EC4\u4EF6\u6811\u5916\uFF0C\u6BCF 1s \u5BF9\u8BA1\u6570\u5668\u503C\n\u6267\u884C\u81EA\u589E\u64CD\u4F5C\uFF1A"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"setInterval(() => {\n  const store = getStore();\n  const [, actions] = store.use(countModel);\n  actions.add();\n}, 1000);\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u5B8C\u6574\u7684\u793A\u4F8B\u4EE3\u7801\u53EF\u4EE5\u5728",(0,t.jsx)(n.a,{href:"https://github.com/web-infra-dev/modern-js-examples/tree/main/examples/runtime-api/counter-model-outof-react",target:"_blank",rel:"noopener noreferrer",children:"\u8FD9\u91CC"}),"\u67E5\u770B\u3002"]}),"\n",(0,t.jsxs)(n.div,{className:"rspress-directive info",children:[(0,t.jsx)(n.div,{className:"rspress-directive-title",children:"INFO"}),(0,t.jsxs)(n.div,{className:"rspress-directive-content",children:[(0,t.jsxs)(n.p,{children:["\u5982\u679C\u662F\u901A\u8FC7 ",(0,t.jsx)(n.a,{href:"/apis/app/runtime/model/create-store",children:(0,t.jsx)(n.code,{children:"createStore"})})," \u624B\u52A8\u521B\u5EFA\u7684 Store \u5BF9\u8C61\uFF0C\u65E0\u9700\u901A\u8FC7 ",(0,t.jsx)(n.code,{children:"useStore"})," \u5728\u7EC4\u4EF6\u5185\u83B7\u53D6\uFF0C\u5373\u53EF\u76F4\u63A5\u4F7F\u7528\u3002"]}),"\n"]})]}),"\n",(0,t.jsxs)(n.div,{className:"rspress-directive info",children:[(0,t.jsx)(n.div,{className:"rspress-directive-title",children:"\u8865\u5145\u4FE1\u606F"}),(0,t.jsxs)(n.div,{className:"rspress-directive-content",children:[(0,t.jsxs)(n.p,{children:["\u672C\u8282\u6D89\u53CA\u7684 API \u7684\u8BE6\u7EC6\u5B9A\u4E49\uFF0C\u8BF7\u53C2\u8003",(0,t.jsx)(n.a,{href:"/apis/app/runtime/model/model_",children:"\u8FD9\u91CC"}),"\u3002"]}),"\n"]})]})]})}function o(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,d.useMDXComponents)(),e.components);return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(r,{...e})}):r(e)}var c=o;o.__RSPRESS_PAGE_META={},o.__RSPRESS_PAGE_META["zh%2Fguides%2Ftopic-detail%2Fmodel%2Fuse-model.mdx"]={toc:[{text:"\u5728\u7EC4\u4EF6\u5185\u4F7F\u7528",id:"\u5728\u7EC4\u4EF6\u5185\u4F7F\u7528",depth:2},{text:"\u4F5C\u4E3A\u5168\u5C40\u72B6\u6001\u4F7F\u7528",id:"\u4F5C\u4E3A\u5168\u5C40\u72B6\u6001\u4F7F\u7528",depth:3},{text:"\u4F5C\u4E3A\u9759\u6001\u72B6\u6001\u4F7F\u7528",id:"\u4F5C\u4E3A\u9759\u6001\u72B6\u6001\u4F7F\u7528",depth:3},{text:"\u4F5C\u4E3A\u5C40\u90E8\u72B6\u6001\u4F7F\u7528",id:"\u4F5C\u4E3A\u5C40\u90E8\u72B6\u6001\u4F7F\u7528",depth:3},{text:"\u5728\u7EC4\u4EF6\u5916\u4F7F\u7528",id:"\u5728\u7EC4\u4EF6\u5916\u4F7F\u7528",depth:2}],title:"\u4F7F\u7528 Model"};let a={sidebar_position:3,title:"\u4F7F\u7528 Model"}}}]);