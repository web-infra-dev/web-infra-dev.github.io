(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["6105"],{2799:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return a},frontmatter:function(){return r}});var o=t("15169"),s=t("43932"),i=t("9880"),c=t("23169");function d(e){var n=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",ol:"ol",li:"li",code:"code",pre:"pre",div:"div",ul:"ul",strong:"strong",img:"img"},(0,c.useMDXComponents)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.h1,{id:"model-communication",children:["Model Communication",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#model-communication",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"Model communication refers to communication between different Models, as well as communication between Effects and Actions within the same Model."}),"\n",(0,i.jsxs)(n.h2,{id:"communication-between-models",children:["Communication between Models",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#communication-between-models",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"Models are not isolated from each other and can communicate with each other. There are mainly two scenarios:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Accessing the State and Actions of other Models in the Model."}),"\n",(0,i.jsx)(n.li,{children:"Listening to changes in other Models in the Model."}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Here, we will transform the simple counter application in the ",(0,i.jsx)(n.a,{href:"/guides/topic-detail/model/quick-start",children:"Quick Start"})," section into a counter application that allows you to set the step frequency. By setting the step frequency, you can affect the magnitude of each counter increase."]}),"\n",(0,i.jsxs)(n.p,{children:["We abstract two Models, ",(0,i.jsx)(n.code,{children:"stepModel"})," (step frequency) and ",(0,i.jsx)(n.code,{children:"counterModel"})," (counter):"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"import { model } from '@modern-js/runtime/model';\n\nconst stepModel = model('step').define({\n  state: 1,\n});\n\nconst counterModel = model('count').define((context, { use, onMount }) => {\n  const [, , subscribeStep] = use(stepModel);\n\n  onMount(() => {\n    return subscribeStep(() => {\n      console.log(\n        `Subscribe in counterModel: stepModel change to ${use(stepModel)[0]}`,\n      );\n    });\n  });\n\n  return {\n    state: {\n      value: 1,\n    },\n    actions: {\n      add(state) {\n        const step = use(stepModel)[0];\n        state.value += step;\n      },\n    },\n  };\n});\n\nexport { stepModel, counterModel };\n"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"stepModel"})," declares only one ",(0,i.jsx)(n.code,{children:"state"}),", with an initial value of 1."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"counterModel"})," loads ",(0,i.jsx)(n.code,{children:"stepModel"})," with the ",(0,i.jsx)(n.code,{children:"use"})," function, and retrieves the returned ",(0,i.jsx)(n.code,{children:"subscribeStep"})," function to listen for changes to the ",(0,i.jsx)(n.code,{children:"stepModel"})," state. ",(0,i.jsx)(n.code,{children:"onMount"})," is a hook function that is executed after the Model is mounted. ",(0,i.jsx)(n.code,{children:"counterModel"})," begins to subscribe to the state changes of ",(0,i.jsx)(n.code,{children:"stepModel"})," after it has been mounted, and prints out the latest value of ",(0,i.jsx)(n.code,{children:"stepModel"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"counterModel"})," accesses ",(0,i.jsx)(n.code,{children:"stepModel"})," using the ",(0,i.jsx)(n.code,{children:"use"})," function, and in the ",(0,i.jsx)(n.code,{children:"add"})," function, the current value of ",(0,i.jsx)(n.code,{children:"stepModel"})," (step frequency) can be obtained to perform increments using this value."]}),"\n",(0,i.jsxs)(n.div,{className:"rspress-directive caution",children:[(0,i.jsx)(n.div,{className:"rspress-directive-title",children:"Note"}),(0,i.jsx)(n.div,{className:"rspress-directive-content",children:(0,i.jsxs)(n.p,{children:["When you need to access the state of another Model, you must call ",(0,i.jsx)(n.code,{children:"use"})," during the actual execution phase of the current Actions or Effects function (in this example, the ",(0,i.jsx)(n.code,{children:"add"})," function) to ensure that the obtained State is the latest value. Therefore, although we also call ",(0,i.jsx)(n.code,{children:"use(stepModel)"})," in the callback function of ",(0,i.jsx)(n.code,{children:"define"}),", we do not destructure the ",(0,i.jsx)(n.code,{children:"state"})," value of ",(0,i.jsx)(n.code,{children:"stepModel"})," because the callback function of ",(0,i.jsx)(n.code,{children:"define"})," is executed during the mounting phase of the Model, and at this time, the ",(0,i.jsx)(n.code,{children:"state"})," of ",(0,i.jsx)(n.code,{children:"stepModel"})," obtained may be different from the value obtained when ",(0,i.jsx)(n.code,{children:"add"})," is executed.\n"]})})]}),"\n",(0,i.jsx)(n.p,{children:"Modify App.tsx:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:"import { useModel } from '@modern-js/runtime/model';\nimport { counterModel, stepModel } from './models/count';\n\nfunction Counter() {\n  const [state, actions] = useModel(counterModel);\n  const [step, stepActions] = useModel(stepModel);\n\n  return (\n    <div>\n      <div>step: {step}</div>\n      <button onClick={() => stepActions.setState(step + 1)}>add step</button>\n      <div>counter: {state.value}</div>\n      <button onClick={() => actions.add()}>add counter</button>\n    </div>\n  );\n}\n\nexport default function App() {\n  return <Counter />;\n}\n"})}),"\n",(0,i.jsxs)(n.div,{className:"rspress-directive info",children:[(0,i.jsx)(n.div,{className:"rspress-directive-title",children:"Additional Information"}),(0,i.jsxs)(n.div,{className:"rspress-directive-content",children:[(0,i.jsxs)(n.p,{children:["Modern.js has enabled ",(0,i.jsx)(n.a,{href:"/en/guides/topic-detail/model/auto-actions",children:"auto-generate actions"})," by default, so even though there are no Actions defined manually in the ",(0,i.jsx)(n.code,{children:"stepModel"}),", the auto-generated ",(0,i.jsx)(n.code,{children:"setState"})," can still be used."]}),"\n"]})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Click ",(0,i.jsx)(n.strong,{children:"add step"})," to add steps."]}),"\n",(0,i.jsxs)(n.li,{children:["Click ",(0,i.jsx)(n.strong,{children:"add counter"})," to trigger the counter to increase."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"The final effect is as follows:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/aphqeh7uhohpquloj/modern-js/docs/models-communicate.gif",alt:"communicate-models"})}),"\n",(0,i.jsxs)(n.div,{className:"rspress-directive info",children:[(0,i.jsx)(n.div,{className:"rspress-directive-title",children:"Additional Information"}),(0,i.jsxs)(n.div,{className:"rspress-directive-content",children:["\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Full example code for this section can be found ",(0,i.jsx)(n.a,{href:"https://github.com/web-infra-dev/modern-js-examples/tree/main/examples/runtime-api/models-communication",target:"_blank",rel:"noopener noreferrer",children:"here"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["For more information about the relevant API, please refer to: ",(0,i.jsx)(n.a,{href:"/apis/app/runtime/model/model_#function-types",children:"model"}),"."]}),"\n"]}),"\n"]})]}),"\n",(0,i.jsxs)(n.p,{children:["In the previous example of ",(0,i.jsx)(n.code,{children:"counterModel"}),", we called ",(0,i.jsx)(n.code,{children:"use"})," within the Actions function to get other Model objects. If we only need to call Actions of other Models, we can also use ",(0,i.jsx)(n.code,{children:"use"})," to get the Actions of Models in the ",(0,i.jsx)(n.code,{children:"define"})," callback function because Actions are functions and there is no issue of value expiration. For example:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"const barModel = model('bar').define({\n  // ..\n});\n\nconst fooModel = model('foo').define((context, utils) => {\n  // get barModel actions\n  const [, actions] = utils.use(barModel);\n  return {\n    // ...\n    effects: {\n      async loadA() {\n        // ...\n        // invoke barModel action\n        barModel.actionA();\n      },\n      async loadB() {\n        // ...\n        // invoke barModel action\n        barModel.actionB();\n      },\n    },\n  };\n});\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Here, we no longer need to repeatedly get the ",(0,i.jsx)(n.code,{children:"barModel"})," object in ",(0,i.jsx)(n.code,{children:"loadA"})," and ",(0,i.jsx)(n.code,{children:"loadB"}),", which simplifies the code logic."]}),"\n",(0,i.jsxs)(n.h2,{id:"communication-within-a-model",children:["Communication within a Model",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#communication-within-a-model",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"Communication within a Model can also be divided into two main scenarios:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Effects functions call the Actions functions of the same Model or other Effects functions."}),"\n",(0,i.jsx)(n.li,{children:"Actions functions call other Actions functions of the same Model."}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["In the ",(0,i.jsx)(n.a,{href:"/guides/topic-detail/model/manage-effects",children:"Managing Side Effects"})," section, we demonstrated how Effects functions call Actions functions."]}),"\n",(0,i.jsx)(n.p,{children:"Here we provide another example:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"const fooModel = model('foo').define((context, { use, onMount }) => ({\n  state: {\n    a: '',\n    b: '',\n  },\n  actions: {\n    setA(state, payload) {\n      state.a = payload;\n    },\n    setB(state, payload) {\n      state.a = payload;\n    },\n  },\n  effects: {\n    async loadA() {\n      // get current Model actions\n      const [, actions] = use(fooModel);\n      const res = await mockFetchA();\n      actions.setA(res);\n    },\n    async loadB() {\n      // get current Model actions\n      const [, actions] = use(fooModel);\n      const res = await mockFetchB();\n      actions.setB(res);\n    },\n  },\n}));\n"})}),"\n",(0,i.jsxs)(n.p,{children:["In this example, the two Effects functions of ",(0,i.jsx)(n.code,{children:"fooModel"})," need to call their own Actions functions. Here, we have called ",(0,i.jsx)(n.code,{children:"use"})," once in each Effects function. Why can't we use ",(0,i.jsx)(n.code,{children:"use"})," to get the Actions of the Model itself in the ",(0,i.jsx)(n.code,{children:"define"})," callback function, as in the example of Model communication? This is because when calling ",(0,i.jsx)(n.code,{children:"use"})," to get a Model, it first checks whether the Model has been mounted. If it has not been mounted, the mounting logic will be executed first."]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"define"})," callback function is executed during the mounting phase, so calling ",(0,i.jsx)(n.code,{children:"use"})," to get the Model itself during the mounting phase will result in an infinite loop (which will throw an error in the actual execution process). Therefore, ",(0,i.jsxs)(n.strong,{children:["you must not call ",(0,i.jsx)(n.code,{children:"use"})," in the ",(0,i.jsx)(n.code,{children:"define"})," callback function to get the Model itself"]}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["However, we can use the ",(0,i.jsx)(n.code,{children:"onMount"})," hook function to get the Model itself through ",(0,i.jsx)(n.code,{children:"use"})," after the Model has been mounted:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"const fooModel = model('foo').define((context, { use, onMount }) => {\n  let actions;\n\n  onMount(() => {\n    // after fooModel mounted, get actions\n    [, actions] = use(fooModel);\n  });\n\n  return {\n    state: {\n      a: '',\n      b: '',\n    },\n    actions: {\n      setA(state, payload) {\n        state.a = payload;\n      },\n      setB(state, payload) {\n        state.a = payload;\n      },\n    },\n    effects: {\n      async loadA() {\n        const res = await mockFetchA();\n        actions.setA(res);\n      },\n      async loadB() {\n        const res = await mockFetchB();\n        actions.setB(res);\n      },\n    },\n  };\n});\n"})}),"\n",(0,i.jsx)(n.p,{children:"In this way, we can also simplify the code."})]})}function l(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,c.useMDXComponents)(),e.components).wrapper;return n?(0,i.jsx)(n,(0,s._)((0,o._)({},e),{children:(0,i.jsx)(d,(0,o._)({},e))})):d(e)}var a=l;l.__RSPRESS_PAGE_META={},l.__RSPRESS_PAGE_META["en%2Fguides%2Ftopic-detail%2Fmodel%2Fmodel-communicate.mdx"]={toc:[{text:"Communication between Models",id:"communication-between-models",depth:2},{text:"Communication within a Model",id:"communication-within-a-model",depth:2}],title:"Model Communication"};var r={sidebar_position:7,title:"Model Communication"}}}]);