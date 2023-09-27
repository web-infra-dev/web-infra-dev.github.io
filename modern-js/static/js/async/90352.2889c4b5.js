(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["90352"],{81679:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return d}});var s,o=t("10310"),a=t("81904"),i=t("98638"),r=t("21968");function c(e){let n=Object.assign({h1:"h1",a:"a",h2:"h2",h3:"h3",p:"p",code:"code",pre:"pre",div:"div",img:"img"},(0,r.useMDXComponents)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.h1,{id:"use-models",children:["Use Models",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#use-models",children:"#"})]}),"\n",(0,i.jsxs)(n.h2,{id:"using-models-in-components",children:["Using Models in Components",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#using-models-in-components",children:"#"})]}),"\n",(0,i.jsxs)(n.h3,{id:"using-as-global-state",children:["Using as Global State",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#using-as-global-state",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"useModel"})," can be used to obtain the State, Actions, and other information of the Model. When the State of the Model is modified by Actions, any other components that use the Model will automatically re-render."]}),"\n",(0,i.jsxs)(n.p,{children:["In the counter example in ",(0,i.jsx)(n.a,{href:"/guides/topic-detail/model/quick-start",children:"Quick Start"}),", we have demonstrated the use of ",(0,i.jsx)(n.code,{children:"useModel"})," and will not repeat it here."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"useModel"})," supports passing multiple Models, and the State and Actions of multiple Models will be merged and returned as the result. For example:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"const fooModel = model('foo').define({\n  state: {\n    value: 1,\n  },\n  actions: {\n    add(state) {\n      state += 1;\n    },\n  },\n});\n\nconst barModel = model('bar').define({\n  state: {\n    title: 'bar',\n  },\n  actions: {\n    set(state, payload) {\n      state.title = payload;\n    },\n  },\n});\n\nconst [state, actions] = useModel([fooModel, barModel]);\n// Or\nconst [state, actions] = useModel(fooModel, barModel);\n"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"state"})," and ",(0,i.jsx)(n.code,{children:"actions"})," value are:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"state = {\n  value: 1,\n  title: 'bar',\n};\n\nactions = {\n  add(state) {\n    state += 1;\n  },\n  set(state, payload) {\n    state.title = payload;\n  },\n};\n"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"useModel"})," also supports selector operations on State and Actions to filter or rename State and Actions. For example:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"const fooModel = model('foo').define({\n  state: {\n    value: 1,\n  },\n  actions: {\n    add(state) {\n      state += 1;\n    },\n  },\n});\n\nconst barModel = model('bar').define({\n  state: {\n    value: 'bar',\n  },\n  actions: {\n    set(state, payload) {\n      state.value = payload;\n    },\n  },\n});\n\nconst [state, actions] = useModel(\n  [fooModel, barModel],\n  (fooState, barState) => ({\n    fooValue: fooState.value,\n    barValue: barState.value,\n  }), // stateSelector\n  (fooActions, barActions) => ({ add: fooActions.add }), // actionsSelector\n);\n"})}),"\n",(0,i.jsxs)(n.p,{children:["We use ",(0,i.jsx)(n.code,{children:"stateSelector"})," to rename the states with the same name in ",(0,i.jsx)(n.code,{children:"fooModel"})," and ",(0,i.jsx)(n.code,{children:"barModel"}),". We use ",(0,i.jsx)(n.code,{children:"actionsSelector"})," to filter out the Actions of ",(0,i.jsx)(n.code,{children:"barModel"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["If only ",(0,i.jsx)(n.code,{children:"actionsSelector"})," needs to be set, you can set ",(0,i.jsx)(n.code,{children:"stateSelector"})," to ",(0,i.jsx)(n.code,{children:"undefined"})," as a placeholder. For example:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"const [state, actions] = useModel(\n  [fooModel, barModel],\n  undefined,\n  (fooActions, barActions) => ({ add: fooActions.add }), // actionsSelector\n);\n"})}),"\n",(0,i.jsxs)(n.h3,{id:"using-as-static-state",children:["Using as Static State",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#using-as-static-state",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"useStaticModel"})," can be used to obtain the Model and use the state of the Model as a static state. This ensures that the State accessed by the component is always the latest value, but the change of the Model's State does not cause the current component to re-render."]}),"\n",(0,i.jsxs)(n.div,{className:"rspress-directive info",children:[(0,i.jsx)(n.div,{className:"rspress-directive-title",children:"INFO"}),(0,i.jsx)(n.div,{className:"rspress-directive-content",children:(0,i.jsxs)(n.p,{children:["The usage of ",(0,i.jsx)(n.code,{children:"useStaticModel"})," is exactly the same as ",(0,i.jsx)(n.code,{children:"useModel"}),".\n"]})})]}),"\n",(0,i.jsxs)(n.p,{children:["Consider the following scenario: there is an Input component responsible for user input, and another Search component responsible for executing a search operation after the user input information is entered and the search button is clicked. We do not want the state changes during the user input process to cause Search to re-render. In this case, ",(0,i.jsx)(n.code,{children:"useStaticModel"})," can be used:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"import { useStaticModel } from '@modern-js/runtime/model';\n\nfunction Search() {\n  // should not be destructured\n  const [state] = useStaticModel(searchModel);\n\n  return (\n    <div>\n      <button\n        onClick={async () => {\n          const result = await mockSearch(state.input);\n          console.log(result);\n        }}\n      >\n        Search\n      </button>\n    </div>\n  );\n}\n"})}),"\n",(0,i.jsxs)(n.div,{className:"rspress-directive warning",children:[(0,i.jsx)(n.div,{className:"rspress-directive-title",children:"Caution"}),(0,i.jsxs)(n.div,{className:"rspress-directive-content",children:[(0,i.jsxs)(n.p,{children:["Do not destructure the ",(0,i.jsx)(n.code,{children:"state"})," returned by ",(0,i.jsx)(n.code,{children:"useStaticModel"}),". For example, changing it to the following code:\n",(0,i.jsx)(n.code,{children:"const [{input}] = useStaticModel(searchModel);"}),"\nwill always get the initial value of Input."]}),"\n"]})]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"useStaticModel"})," is also suitable for use with animation libraries such as ",(0,i.jsx)(n.a,{href:"https://github.com/pmndrs/react-three-fiber",target:"_blank",rel:"noopener noreferrer",children:"react-three-fiber"}),", because binding fast-changing states in animation component UI can easily cause ",(0,i.jsx)(n.a,{href:"https://docs.pmnd.rs/react-three-fiber/advanced/pitfalls#never-bind-fast-state-reactive",target:"_blank",rel:"noopener noreferrer",children:"performance issues"}),". In this case, you can choose to use ",(0,i.jsx)(n.code,{children:"useStaticModel"}),", which only subscribes to the State but does not cause the view component to re-render. Here is a simplified example:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"function ThreeComponent() {\n  const [state, actions] = useStaticModel(modelA);\n\n  useFrame(() => {\n    state.value;\n    actions.setValue(1);\n    state.value;\n  });\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Using React's refs can also achieve similar effects. In fact, ",(0,i.jsx)(n.code,{children:"useStaticModel"})," also uses refs internally. However, using ",(0,i.jsx)(n.code,{children:"useStaticModel"})," directly helps decouple the state management logic from the component and converge it into the Model layer."]}),"\n",(0,i.jsxs)(n.p,{children:["The complete sample code can be found ",(0,i.jsx)(n.a,{href:"https://github.com/web-infra-dev/modern-js-examples/tree/main/examples/runtime-api/static-model",target:"_blank",rel:"noopener noreferrer",children:"here"}),"."]}),"\n",(0,i.jsxs)(n.h3,{id:"using-as-local-state",children:["Using as Local State",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#using-as-local-state",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"useLocalModel"})," can be used to obtain the Model and use the state of the Model as local state. At this time, the change of the Model State only causes the current component to re-render, but does not cause other components that use the Model to re-render. The effect is similar to managing state through ",(0,i.jsx)(n.code,{children:"useState"})," in React, but it can decouple the state management logic from the component and converge it into the Model layer."]}),"\n",(0,i.jsxs)(n.div,{className:"rspress-directive info",children:[(0,i.jsx)(n.div,{className:"rspress-directive-title",children:"INFO"}),(0,i.jsx)(n.div,{className:"rspress-directive-content",children:(0,i.jsxs)(n.p,{children:["The usage of ",(0,i.jsx)(n.code,{children:"useLocalModel"})," is exactly the same as ",(0,i.jsx)(n.code,{children:"useModel"}),".\n"]})})]}),"\n",(0,i.jsxs)(n.p,{children:["For example, we modify the code of the counter application and add a counter component ",(0,i.jsx)(n.code,{children:"LocalCounter"})," with local state:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"import { useLocalModel } from '@modern-js/runtime/model';\n\nfunction LocalCounter() {\n  const [state, actions] = useLocalModel(countModel);\n\n  return (\n    <div>\n      <div>local counter: {state.value}</div>\n      <button onClick={() => actions.add()}>add</button>\n    </div>\n  );\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Click the ",(0,i.jsx)(n.code,{children:"add"})," button of ",(0,i.jsx)(n.code,{children:"Counter"})," and ",(0,i.jsx)(n.code,{children:"LocalCounter"})," respectively, and the states of the two do not affect each other:"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/eueh7vhojuh/modern/local-model.gif",alt:"local-model"})}),"\n",(0,i.jsxs)(n.p,{children:["The complete sample code can be found ",(0,i.jsx)(n.a,{href:"https://github.com/web-infra-dev/modern-js-examples/tree/main/examples/runtime-api/local-model",target:"_blank",rel:"noopener noreferrer",children:"here"}),"."]}),"\n",(0,i.jsxs)(n.h2,{id:"using-outside-of-components",children:["Using outside of components",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#using-outside-of-components",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["In actual business scenarios, sometimes we need to use Model outside of React components, such as accessing State and executing Actions in utility functions. At this time, we need to use the Store. The Store is a low-level concept that users generally cannot touch. It is responsible for storing and managing the entire application's state. Reduck's Store is based on Redux's Store implementation and adds Reduck-specific APIs, such as ",(0,i.jsx)(n.code,{children:"use"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["First, call ",(0,i.jsx)(n.code,{children:"useStore"})," in the component to obtain the ",(0,i.jsx)(n.code,{children:"store"})," object used by the current application and mount it to a variable outside the component:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"let store; // Reference to `store` object outside of the component\nfunction setStore(s) {\n  store = s;\n}\nfunction getStore() {\n  return store;\n}\n\nfunction Counter() {\n  const [state] = useModel(countModel);\n  const store = useStore();\n  // Avoid unnecessary duplicate settings through `useMemo`\n  useMemo(() => {\n    setStore(store);\n  }, [store]);\n\n  return (\n    <div>\n      <div>counter: {state.value}</div>\n    </div>\n  );\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["You can obtain the Model object through ",(0,i.jsx)(n.code,{children:"store.use"}),", and the usage of ",(0,i.jsx)(n.code,{children:"store.use"})," is the same as ",(0,i.jsx)(n.code,{children:"useModel"}),". Taking the counter application as an example, we perform an increment operation on the counter value every 1 second outside the component tree:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"setInterval(() => {\n  const store = getStore();\n  const [, actions] = store.use(countModel);\n  actions.add();\n}, 1000);\n"})}),"\n",(0,i.jsxs)(n.p,{children:["The complete sample code can be found ",(0,i.jsx)(n.a,{href:"https://github.com/web-infra-dev/modern-js-examples/tree/main/examples/runtime-api/counter-model-outof-react",target:"_blank",rel:"noopener noreferrer",children:"here"}),"."]}),"\n",(0,i.jsxs)(n.div,{className:"rspress-directive info",children:[(0,i.jsx)(n.div,{className:"rspress-directive-title",children:"INFO"}),(0,i.jsx)(n.div,{className:"rspress-directive-content",children:(0,i.jsxs)(n.p,{children:["If the Store object is manually created through ",(0,i.jsx)(n.a,{href:"/apis/app/runtime/model/create-store",children:(0,i.jsx)(n.code,{children:"createStore"})}),", there is no need to obtain it through ",(0,i.jsx)(n.code,{children:"useStore"})," in the component, and it can be used directly.\n"]})})]}),"\n",(0,i.jsxs)(n.div,{className:"rspress-directive info",children:[(0,i.jsx)(n.div,{className:"rspress-directive-title",children:"Additional Information"}),(0,i.jsx)(n.div,{className:"rspress-directive-content",children:(0,i.jsxs)(n.p,{children:["For detailed API definitions related to this section, please refer to ",(0,i.jsx)(n.a,{href:"/apis/app/runtime/model/model_",children:"here"}),".\n"]})})]})]})}(s=globalThis).__RSPRESS_PAGE_META||(s.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["en%2Fguides%2Ftopic-detail%2Fmodel%2Fuse-model.mdx"]={toc:[{text:"Using Models in Components",id:"using-models-in-components",depth:2},{text:"Using as Global State",id:"using-as-global-state",depth:3},{text:"Using as Static State",id:"using-as-static-state",depth:3},{text:"Using as Local State",id:"using-as-local-state",depth:3},{text:"Using outside of components",id:"using-outside-of-components",depth:2}],title:"Use Models",frontmatter:{sidebar_position:3,title:"Use Models"}};var d=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,r.useMDXComponents)(),e.components);return n?(0,i.jsx)(n,(0,a._)((0,o._)({},e),{children:(0,i.jsx)(c,(0,o._)({},e))})):c(e)}}}]);