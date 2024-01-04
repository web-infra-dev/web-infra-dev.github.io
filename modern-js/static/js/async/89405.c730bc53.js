/*! For license information please see 89405.c730bc53.js.LICENSE.txt */
(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["89405"],{81442:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return i}});var o=t("9880"),a=t("23169");function s(e){let n=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",code:"code",pre:"pre",div:"div"},(0,a.useMDXComponents)(),e.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.h1,{id:"performance-optimization",children:["Performance Optimization",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#performance-optimization",children:"#"})]}),"\n",(0,o.jsx)(n.p,{children:"Reduck has already done a lot of performance optimization work internally, so performance issues generally do not need to be considered. However, when performance is more sensitive, or when encountering performance issues, you can consider more targeted performance optimization from the following three aspects."}),"\n",(0,o.jsxs)(n.h2,{id:"splitting-models",children:["Splitting Models",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#splitting-models",children:"#"})]}),"\n",(0,o.jsxs)(n.p,{children:["When ",(0,o.jsx)(n.code,{children:"useModel"})," returns the complete State object of the Model, any change in any part of the State will cause the component that calls ",(0,o.jsx)(n.code,{children:"useModel"})," to be re-rendered."]}),"\n",(0,o.jsx)(n.p,{children:"For example:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"const fooModel = model('foo').define({\n  state: {\n    a: '',\n    b: '',\n  },\n  actions: {\n    setA(state, payload) {\n      state.a = payload;\n    },\n    setB(state, payload) {\n      state.b = payload;\n    },\n  },\n});\n\nfunction ComponentA() {\n  const [state] = useModel(fooModel);\n\n  return <div>{state.a}</div>;\n}\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Although ",(0,o.jsx)(n.code,{children:"ComponentA"})," only needs to use the ",(0,o.jsx)(n.code,{children:"a"})," state, it will still be re-rendered when the ",(0,o.jsx)(n.code,{children:"b"})," state changes. In this case, we can consider splitting ",(0,o.jsx)(n.code,{children:"fooModel"})," into separate Models responsible for managing ",(0,o.jsx)(n.code,{children:"a"})," and ",(0,o.jsx)(n.code,{children:"b"})," respectively:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"const fooModel = model('foo').define({\n  state: {\n    a: '',\n  },\n  actions: {\n    setA(state, payload) {\n      state.a = payload;\n    },\n  },\n});\n\nconst barModel = model('bar').define({\n  state: {\n    b: '',\n  },\n  actions: {\n    setB(state, payload) {\n      state.b = payload;\n    },\n  },\n});\n"})}),"\n",(0,o.jsxs)(n.h2,{id:"state-selection",children:["State Selection",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#state-selection",children:"#"})]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"useModel"})," supports passing in a selector function to filter the returned State and Actions for the component. We can use a selector function to ensure that the State returned to the component is what the component needs directly, thus ensuring that the component is not re-rendered due to changes in other unrelated states."]}),"\n",(0,o.jsx)(n.p,{children:"For the same example above, we can use a selector function for performance optimization, the code is as follows:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"const fooModel = model('foo').define({\n  state: {\n    a: '',\n    b: '',\n  },\n  actions: {\n    setA(state, payload) {\n      state.a = payload;\n    },\n    setB(state, payload) {\n      state.b = payload;\n    },\n  },\n});\n\nfunction ComponentA() {\n  // By passing in the selector function\n  // only the a state is returned to the component\n  const [stateA] = useModel(fooModel, state => state.a);\n\n  return <div>{stateA}</div>;\n}\n"})}),"\n",(0,o.jsxs)(n.h2,{id:"derivative-state-caching",children:["Derivative State Caching",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#derivative-state-caching",children:"#"})]}),"\n",(0,o.jsxs)(n.p,{children:["When a Model has ",(0,o.jsx)(n.code,{children:"computed"})," property, the ",(0,o.jsx)(n.code,{children:"computed"})," function will be executed every time ",(0,o.jsx)(n.code,{children:"useModel"})," is called."]}),"\n",(0,o.jsx)(n.p,{children:"Consider the following code:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"const barModel = model('bar').define({\n  state: {\n    value: 'bar',\n  },\n  computed: {\n    combineA: [\n      fooModel, // fooModel define as above\n      (state, fooState) => {\n        return state + fooState.a;\n      },\n    ],\n  },\n  actions: {\n    setValue(state, payload) {\n      state.value = payload;\n    },\n  },\n});\n\nfunction ComponentB() {\n  const [state, actions] = useModel(fooModel);\n  const [{ combineA }] = useModel(barModel);\n  // ...\n}\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Even if the ",(0,o.jsx)(n.code,{children:"b"})," state of ",(0,o.jsx)(n.code,{children:"fooModel"})," changes, the ",(0,o.jsx)(n.code,{children:"combineA"})," function (more precisely, the last function type element of ",(0,o.jsx)(n.code,{children:"combineA"}),") will still be called and executed when the component is re-rendered, although the derivative state ",(0,o.jsx)(n.code,{children:"combineA"})," of ",(0,o.jsx)(n.code,{children:"barModel"})," depends on ",(0,o.jsx)(n.code,{children:"barModel"})," itself and the state ",(0,o.jsx)(n.code,{children:"a"})," of ",(0,o.jsx)(n.code,{children:"fooModel"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["In general, the logic in the ",(0,o.jsx)(n.code,{children:"computed"})," function is usually very lightweight, but when the logic in the ",(0,o.jsx)(n.code,{children:"computed"})," function is relatively complex, we can consider caching the calculation logic. For example, we can use ",(0,o.jsx)(n.a,{href:"https://github.com/reduxjs/reselect",target:"_blank",rel:"noopener noreferrer",children:"reselect"})," to cache ",(0,o.jsx)(n.code,{children:"combineA"})," of ",(0,o.jsx)(n.code,{children:"barModel"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"import 'createSelector' from 'reselect';\n\n// create cache function\nconst selectCombineA = createSelector(\n  (state) => state.bar.value,\n  (state) => state.foo.a,\n  (barState, fooState) => {\n    return barState + fooState;\n  }\n);\n\nconst barModel = model(\"bar\").define({\n  state: {\n    value: \"bar\",\n  },\n  computed: {\n    combineA: [\n      fooModel,\n      (state, fooState) => {\n        return selectCombineA({\n          foo: fooState,\n          bar: state,\n        });\n      },\n    ],\n  },\n  actions: {\n    setValue(state, payload) {\n      state.value = payload;\n    },\n  },\n});\n"})}),"\n",(0,o.jsxs)(n.p,{children:["We created a caching function ",(0,o.jsx)(n.code,{children:"createSelector"}),", which only recalculates the value of ",(0,o.jsx)(n.code,{children:"combineA"})," when the state of ",(0,o.jsx)(n.code,{children:"barModel"})," changes or the state ",(0,o.jsx)(n.code,{children:"a"})," of ",(0,o.jsx)(n.code,{children:"fooModel"})," changes."]}),"\n",(0,o.jsxs)(n.div,{className:"rspress-directive info",children:[(0,o.jsx)(n.div,{className:"rspress-directive-title",children:"Additional Information"}),(0,o.jsx)(n.div,{className:"rspress-directive-content",children:(0,o.jsxs)(n.p,{children:["You can find the complete example code of this section ",(0,o.jsx)(n.a,{href:"https://github.com/web-infra-dev/modern-js-examples/tree/main/examples/runtime-api/performance-optimization",target:"_blank",rel:"noopener noreferrer",children:"here"}),".\n"]})})]})]})}function c(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,a.useMDXComponents)(),e.components);return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(s,{...e})}):s(e)}var i=c;c.__RSPRESS_PAGE_META={},c.__RSPRESS_PAGE_META["en%2Fguides%2Ftopic-detail%2Fmodel%2Fperformance.mdx"]={toc:[{text:"Splitting Models",id:"splitting-models",depth:2},{text:"State Selection",id:"state-selection",depth:2},{text:"Derivative State Caching",id:"derivative-state-caching",depth:2}],title:"Performance Optimization",frontmatter:{sidebar_position:8,title:"Performance Optimization"}}}}]);