"use strict";(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["83982"],{73946:function(e,n,o){o.r(n),o.d(n,{default:function(){return c}});var t=o(39980),d=o(9580);function s(e){let n=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",code:"code",pre:"pre",div:"div"},(0,d.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.h1,{id:"\u6027\u80FD\u4F18\u5316",children:["\u6027\u80FD\u4F18\u5316",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u6027\u80FD\u4F18\u5316",children:"#"})]}),"\n",(0,t.jsx)(n.p,{children:"Reduck \u5185\u90E8\u5DF2\u7ECF\u505A\u4E86\u5927\u91CF\u6027\u80FD\u4F18\u5316\u5DE5\u4F5C\uFF0C\u4E00\u822C\u60C5\u51B5\u4E0B\u4E0D\u9700\u8981\u8003\u8651\u6027\u80FD\u95EE\u9898\u3002\u4E0D\u8FC7\u5F53\u5BF9\u6027\u80FD\u6BD4\u8F83\u654F\u611F\u3001\u6216\u8005\u9047\u5230\u4E86\u6027\u80FD\u95EE\u9898\uFF0C\u53EF\u4EE5\u8003\u8651\u4ECE\u4EE5\u4E0B 3 \u4E2A\u65B9\u9762\uFF0C\u8FDB\u884C\u66F4\u6709\u9488\u5BF9\u6027\u7684\u6027\u80FD\u4F18\u5316\u3002"}),"\n",(0,t.jsxs)(n.h2,{id:"model-\u62C6\u5206",children:["Model \u62C6\u5206",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#model-\u62C6\u5206",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:["\u5F53 ",(0,t.jsx)(n.code,{children:"useModel"})," \u8FD4\u56DE Model \u5BF9\u8C61\u7684\u5B8C\u6574 State \u65F6\uFF0CState \u4EFB\u610F\u90E8\u5206\u7684\u53D8\u5316\u90FD\u4F1A\u5BFC\u81F4\u8C03\u7528\u4E86 ",(0,t.jsx)(n.code,{children:"useModel"})," \u7684\u7EC4\u4EF6\u91CD\u65B0\u6E32\u67D3\u3002"]}),"\n",(0,t.jsx)(n.p,{children:"\u4F8B\u5982\uFF1A"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"const fooModel = model('foo').define({\n  state: {\n    a: '',\n    b: '',\n  },\n  actions: {\n    setA(state, payload) {\n      state.a = payload;\n    },\n    setB(state, payload) {\n      state.b = payload;\n    },\n  },\n});\n\nfunction ComponentA() {\n  const [state] = useModel(fooModel);\n\n  return <div>{state.a}</div>;\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u7EC4\u4EF6 ",(0,t.jsx)(n.code,{children:"ComponentA"})," \u867D\u7136\u53EA\u9700\u8981\u4F7F\u7528 ",(0,t.jsx)(n.code,{children:"a"})," \u72B6\u6001\uFF0C\u4F46\u5F53 ",(0,t.jsx)(n.code,{children:"b"})," \u72B6\u6001\u53D1\u9001\u53D8\u5316\u65F6\uFF0C ",(0,t.jsx)(n.code,{children:"ComponentA"})," \u4ECD\u7136\u4F1A\u91CD\u65B0\u6E32\u67D3\u3002\u8FD9\u79CD\u60C5\u51B5\uFF0C\u6211\u4EEC\u53EF\u4EE5\u8003\u8651\u628A ",(0,t.jsx)(n.code,{children:"fooModel"})," \u62C6\u5206\uFF0C",(0,t.jsx)(n.code,{children:"a"}),"\u3001",(0,t.jsx)(n.code,{children:"b"})," \u5206\u522B\u7531\u4E0D\u540C\u7684 Model \u8D1F\u8D23\u7BA1\u7406\uFF1A"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"const fooModel = model('foo').define({\n  state: {\n    a: '',\n  },\n  actions: {\n    setA(state, payload) {\n      state.a = payload;\n    },\n  },\n});\n\nconst barModel = model('bar').define({\n  state: {\n    b: '',\n  },\n  actions: {\n    setB(state, payload) {\n      state.b = payload;\n    },\n  },\n});\n"})}),"\n",(0,t.jsxs)(n.h2,{id:"\u72B6\u6001\u7B5B\u9009",children:["\u72B6\u6001\u7B5B\u9009",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u72B6\u6001\u7B5B\u9009",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"useModel"})," \u652F\u6301\u4F20\u5165 selector \u51FD\u6570\uFF0C\u5BF9\u8FD4\u56DE\u7ED9\u7EC4\u4EF6\u7684 State \u548C Actions \u505A\u7B5B\u9009\u3002\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7 selector \u51FD\u6570\uFF0C\u786E\u4FDD\u8FD4\u56DE\u7ED9\u7EC4\u4EF6\u7684 State \u662F\u7EC4\u4EF6\u76F4\u63A5\u9700\u8981\u4F7F\u7528\u7684\uFF0C\u4ECE\u800C\u4FDD\u8BC1\u7EC4\u4EF6\u4E0D\u4F1A\u56E0\u4E3A\u5176\u4ED6\u65E0\u5173\u72B6\u6001\u7684\u53D8\u5316\u800C\u91CD\u65B0\u6E32\u67D3\u3002"]}),"\n",(0,t.jsx)(n.p,{children:"\u5BF9\u4E8E\u4E0A\u9762\u540C\u6837\u7684\u4F8B\u5B50\uFF0C\u6211\u4EEC\u91C7\u7528 selector \u51FD\u6570\u8FDB\u884C\u6027\u80FD\u4F18\u5316\uFF0C\u4EE3\u7801\u5982\u4E0B\uFF1A"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"const fooModel = model('foo').define({\n  state: {\n    a: '',\n    b: '',\n  },\n  actions: {\n    setA(state, payload) {\n      state.a = payload;\n    },\n    setB(state, payload) {\n      state.b = payload;\n    },\n  },\n});\n\nfunction ComponentA() {\n  // \u901A\u8FC7\u4F20\u5165 selector \u51FD\u6570\uFF0C\u53EA\u8FD4\u56DE a \u72B6\u6001\u7ED9\u7EC4\u4EF6\n  const [stateA] = useModel(fooModel, state => state.a);\n\n  return <div>{stateA}</div>;\n}\n"})}),"\n",(0,t.jsxs)(n.h2,{id:"\u884D\u751F\u72B6\u6001\u7F13\u5B58",children:["\u884D\u751F\u72B6\u6001\u7F13\u5B58",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u884D\u751F\u72B6\u6001\u7F13\u5B58",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:["\u5F53 Model \u5B58\u5728 ",(0,t.jsx)(n.code,{children:"computed"})," \u65F6\uFF0C\u6BCF\u6B21\u8C03\u7528",(0,t.jsx)(n.code,{children:"useModel"})," \u90FD\u4F1A\u6267\u884C ",(0,t.jsx)(n.code,{children:"computed"})," \u51FD\u6570\u3002"]}),"\n",(0,t.jsx)(n.p,{children:"\u8003\u8651\u5982\u4E0B\u4EE3\u7801\uFF1A"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"const barModel = model('bar').define({\n  state: {\n    value: 'bar',\n  },\n  computed: {\n    combineA: [\n      fooModel, // fooModel \u5B9A\u4E49\u540C\u4E0A\n      (state, fooState) => {\n        return state + fooState.a;\n      },\n    ],\n  },\n  actions: {\n    setValue(state, payload) {\n      state.value = payload;\n    },\n  },\n});\n\nfunction ComponentB() {\n  const [state, actions] = useModel(fooModel);\n  const [{ combineA }] = useModel(barModel);\n  // \u7701\u7565\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"barModel"})," \u7684\u884D\u751F\u72B6\u6001 ",(0,t.jsx)(n.code,{children:"combineA"})," \u4F9D\u8D56 ",(0,t.jsx)(n.code,{children:"barModel"})," \u81EA\u8EAB\u72B6\u6001 \u548C ",(0,t.jsx)(n.code,{children:"fooModel"})," \u7684\u72B6\u6001 ",(0,t.jsx)(n.code,{children:"a"}),"\uFF0C\u4F46\u662F\u5373\u4F7F\u662F ",(0,t.jsx)(n.code,{children:"fooModel"})," \u7684\u72B6\u6001 ",(0,t.jsx)(n.code,{children:"b"})," \u53D1\u751F\u4E86\u53D8\u5316\uFF0C\u7EC4\u4EF6\u91CD\u65B0\u6E32\u67D3\u65F6\uFF0C ",(0,t.jsx)(n.code,{children:"combineA"})," \uFF08\u66F4\u51C6\u786E\u7684\u8BF4\u6CD5\u662F ",(0,t.jsx)(n.code,{children:"combineA"})," \u7684\u6700\u540E\u4E00\u4E2A\u51FD\u6570\u7C7B\u578B\u7684\u5143\u7D20 \uFF09\u4F9D\u7136\u4F1A\u88AB\u8C03\u7528\u6267\u884C\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:["\u4E00\u822C\u60C5\u51B5\u4E0B\uFF0C",(0,t.jsx)(n.code,{children:"computed"})," \u51FD\u6570\u4E2D\u7684\u903B\u8F91\u90FD\u662F\u975E\u5E38\u8F7B\u91CF\u7684\uFF0C\u4F46\u5F53 ",(0,t.jsx)(n.code,{children:"computed"})," \u51FD\u6570\u903B\u8F91\u6BD4\u8F83\u590D\u6742\u65F6\uFF0C\u6211\u4EEC\u53EF\u4EE5\u8003\u8651\u5BF9\u8BA1\u7B97\u903B\u8F91\u505A\u7F13\u5B58\u3002\u4F8B\u5982\uFF0C\u6211\u4EEC\u4F7F\u7528 ",(0,t.jsx)(n.a,{href:"https://github.com/reduxjs/reselect",target:"_blank",rel:"noopener noreferrer",children:"reselect"})," \u5BF9 ",(0,t.jsx)(n.code,{children:"barModel"})," \u7684 ",(0,t.jsx)(n.code,{children:"combineA"})," \u505A\u7F13\u5B58\uFF1A"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"import 'createSelector' from 'reselect';\n\n// \u521B\u5EFA\u7F13\u5B58\u51FD\u6570\nconst selectCombineA = createSelector(\n  (state) => state.bar.value,\n  (state) => state.foo.a,\n  (barState, fooState) => {\n    return barState + fooState;\n  }\n);\n\nconst barModel = model(\"bar\").define({\n  state: {\n    value: \"bar\",\n  },\n  computed: {\n    combineA: [\n      fooModel,\n      (state, fooState) => {\n        return selectCombineA({\n          foo: fooState,\n          bar: state,\n        });\n      },\n    ],\n  },\n  actions: {\n    setValue(state, payload) {\n      state.value = payload;\n    },\n  },\n});\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u6211\u4EEC\u521B\u5EFA\u7F13\u5B58\u51FD\u6570 ",(0,t.jsx)(n.code,{children:"createSelector"}),"\uFF0C\u4EC5\u5F53 ",(0,t.jsx)(n.code,{children:"barModel"})," \u7684\u72B6\u6001\u53D1\u751F\u6539\u53D8\u6216 ",(0,t.jsx)(n.code,{children:"fooModel"})," \u7684 ",(0,t.jsx)(n.code,{children:"a"})," \u72B6\u6001\u53D1\u751F\u6539\u53D8\u65F6\uFF0C\u624D\u4F1A\u91CD\u65B0\u8BA1\u7B97 ",(0,t.jsx)(n.code,{children:"combineA"})," \u7684\u503C\u3002"]}),"\n",(0,t.jsxs)(n.div,{className:"rspress-directive info",children:[(0,t.jsx)(n.div,{className:"rspress-directive-title",children:"\u8865\u5145\u4FE1\u606F"}),(0,t.jsxs)(n.div,{className:"rspress-directive-content",children:[(0,t.jsxs)(n.p,{children:["\u672C\u8282\u5B8C\u6574\u7684",(0,t.jsx)(n.a,{href:"https://github.com/web-infra-dev/modern-js-examples/tree/main/examples/runtime-api/performance-optimization",target:"_blank",rel:"noopener noreferrer",children:"\u793A\u4F8B\u4EE3\u7801"})]}),"\n"]})]})]})}function a(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,d.ah)(),e.components);return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(s,{...e})}):s(e)}let c=a;a.__RSPRESS_PAGE_META={},a.__RSPRESS_PAGE_META["zh%2Fguides%2Ftopic-detail%2Fmodel%2Fperformance.mdx"]={toc:[{text:"Model \u62C6\u5206",id:"model-\u62C6\u5206",depth:2},{text:"\u72B6\u6001\u7B5B\u9009",id:"\u72B6\u6001\u7B5B\u9009",depth:2},{text:"\u884D\u751F\u72B6\u6001\u7F13\u5B58",id:"\u884D\u751F\u72B6\u6001\u7F13\u5B58",depth:2}],title:"\u6027\u80FD\u4F18\u5316",frontmatter:{sidebar_position:8,title:"\u6027\u80FD\u4F18\u5316"}}}}]);