/*! For license information please see 88067.19de47a5.js.LICENSE.txt */
(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["88067"],{15483:function(e,n,t){"use strict";t.r(n);var s=t("39980"),d=t("96954");function i(e){let n=Object.assign({h1:"h1",a:"a",p:"p",code:"code",h2:"h2",pre:"pre",ul:"ul",li:"li",div:"div"},(0,d.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h1,{id:"management-effect",children:["Management Effect",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#management-effect",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["The actions in the model must be pure functions and cannot have any side effects during execution. However, in real-world scenarios, we often encounter many side effects, such as: requesting data from an HTTP API to obtain state data, or modifying ",(0,s.jsx)(n.code,{children:"localStorage"})," or sending events while updating the state. In Reduck, side effects are managed through the model's ",(0,s.jsx)(n.code,{children:"effects"})," function."]}),"\n",(0,s.jsxs)(n.h2,{id:"modifying-state-via-side-effects",children:["Modifying State via Side Effects",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#modifying-state-via-side-effects",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"The most common scenario in which side effects modify the state is requesting data from an HTTP API to update state data."}),"\n",(0,s.jsxs)(n.p,{children:["Let's take a simple ",(0,s.jsx)(n.code,{children:"todoModel"})," as an example. It has a side effect function ",(0,s.jsx)(n.code,{children:"load"})," that requests the TODO list from a remote server. After the request succeeds, it updates the ",(0,s.jsx)(n.code,{children:"state.items"})," field."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"const todoModel = model('todo').define({\n  state: {\n    items: [],\n    loading: false,\n    error: null,\n  },\n  actions: {\n    load: {\n      pending(state) {\n        state.loading = true;\n      },\n      fulfilled(state, items) {\n        state.items = items;\n        state.loading = false;\n      },\n      rejected(state, error) {\n        state.error = error;\n        state.loading = false;\n      },\n    },\n  },\n  effects: {\n    // Promise effects\n    async load() {\n      return new Promise(resolve => {\n        setTimeout(() => resolve(['Learn Modern.js']), 2000);\n      });\n    },\n  },\n});\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The side effect function is uniformly defined under the ",(0,s.jsx)(n.code,{children:"effects"})," field. Here we have written a ",(0,s.jsx)(n.code,{children:"load"})," function that returns a Promise. After the Promise is successfully executed, it returns the TODO list ",(0,s.jsx)(n.code,{children:'["Lerna Modern.js"]'}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Side effect functions need to work with actions to modify state. Therefore, we define a ",(0,s.jsx)(n.code,{children:"load"})," object in ",(0,s.jsx)(n.code,{children:"actions"})," (the name needs to be consistent with the name of the side effect function under ",(0,s.jsx)(n.code,{children:"effects"}),"), which includes three actions (",(0,s.jsx)(n.code,{children:"pending"}),", ",(0,s.jsx)(n.code,{children:"fulfilled"}),", ",(0,s.jsx)(n.code,{children:"rejected"}),") that handle the three states (",(0,s.jsx)(n.code,{children:"pending"}),", ",(0,s.jsx)(n.code,{children:"fulfilled"}),", ",(0,s.jsx)(n.code,{children:"rejected"}),") of the ",(0,s.jsx)(n.code,{children:"Promise"})," returned by the side effect function ",(0,s.jsx)(n.code,{children:"load"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"pending"}),": Receives the current state ",(0,s.jsx)(n.code,{children:"state"})," as a parameter and sets the ",(0,s.jsx)(n.code,{children:"loading"})," flag to ",(0,s.jsx)(n.code,{children:"true"})," in the new state."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"fulfilled"}),": Receives the current state ",(0,s.jsx)(n.code,{children:"state"})," and the Promise fulfilled value ",(0,s.jsx)(n.code,{children:"items"})," as parameters, and sets ",(0,s.jsx)(n.code,{children:"items"})," to the parameter ",(0,s.jsx)(n.code,{children:"items"})," and ",(0,s.jsx)(n.code,{children:"loading"})," to ",(0,s.jsx)(n.code,{children:"false"})," in the new state."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"rejected"}),": Receives the current state ",(0,s.jsx)(n.code,{children:"state"})," and the Promise rejected error ",(0,s.jsx)(n.code,{children:"error"})," as parameters, and sets ",(0,s.jsx)(n.code,{children:"error"})," to the parameter ",(0,s.jsx)(n.code,{children:"error"})," and ",(0,s.jsx)(n.code,{children:"loading"})," to ",(0,s.jsx)(n.code,{children:"false"})," in the new state."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"How do we call the effects function in the component? The effects function will be merged into the actions object, so you can call the effects function through the actions object, as shown below:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"function Todo() {\n  const [state, actions] = useModel(todoModel);\n\n  useEffect(() => {\n    // invoke effects function\n    actions.load();\n  }, []);\n\n  if (state.loading) {\n    return <div>loading....</div>;\n  }\n\n  return (\n    <div>\n      <div>\n        {state.items.map((item, index) => (\n          <div key={index}>{item}</div>\n        ))}\n      </div>\n    </div>\n  );\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["In the example above, the three actions ",(0,s.jsx)(n.code,{children:"pending"}),", ",(0,s.jsx)(n.code,{children:"fulfilled"}),", and ",(0,s.jsx)(n.code,{children:"rejected"})," are generally required for HTTP requests used to obtain data. Reduck provides a utility function ",(0,s.jsx)(n.code,{children:"handleEffect"})," to simplify the creation of actions in this scenario."]}),"\n",(0,s.jsxs)(n.p,{children:["For this type of side effect scenario, ",(0,s.jsx)(n.code,{children:"handleEffect"})," stipulates that the state structure of the model contains three fields: ",(0,s.jsx)(n.code,{children:"result"}),", ",(0,s.jsx)(n.code,{children:"error"}),", and ",(0,s.jsx)(n.code,{children:"pending"}),", with initial values of:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"{\n  result: null,\n  error: null,\n  pending: false,\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Calling ",(0,s.jsx)(n.code,{children:"handleEffect"})," will return the following data structure:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"{\n  pending() { // ... },\n  fulfilled() { // ... },\n  rejected() { // ... }\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["This data structure is the same as the data structure of the ",(0,s.jsx)(n.code,{children:"load"})," object under ",(0,s.jsx)(n.code,{children:"actions"}),". The object returned by ",(0,s.jsx)(n.code,{children:"handleEffect"})," actually corresponds to the three actions required by the Effects function."]}),"\n",(0,s.jsxs)(n.p,{children:["We can use ",(0,s.jsx)(n.code,{children:"handleEffect"})," to rewrite ",(0,s.jsx)(n.code,{children:"todoModel"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"const todoModel = model('todo').define({\n  state: {\n    items: [],\n    loading: false,\n    error: null,\n  },\n  actions: {\n    load: handleEffect({ result: 'items' }),\n  },\n  effects: {\n    // Promise effects\n    async load() {\n      return new Promise(resolve => {\n        setTimeout(() => resolve(['Learn Modern.js']), 2000);\n      });\n    },\n  },\n});\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"handleEffect"})," function sets ",(0,s.jsx)(n.code,{children:"result"})," to ",(0,s.jsx)(n.code,{children:"items"})," in the received parameter object. Because ",(0,s.jsx)(n.code,{children:"todoModel"})," uses ",(0,s.jsx)(n.code,{children:"items"})," as the key to save the TODO list data instead of using the default ",(0,s.jsx)(n.code,{children:"result"})," as the key of ",(0,s.jsx)(n.code,{children:"handleEffect"}),", configuration is required here."]}),"\n",(0,s.jsxs)(n.p,{children:["It is obvious that the ",(0,s.jsx)(n.code,{children:"todoModel"})," implemented through ",(0,s.jsx)(n.code,{children:"handleEffect"})," is much more concise than the previous implementation."]}),"\n",(0,s.jsxs)(n.p,{children:["If you do not want all three states (pending, fulfilled, rejected) to be automatically handled by ",(0,s.jsx)(n.code,{children:"handleEffect"}),", for example, if the fulfilled state requires more complex data processing and needs to be manually handled, but you still want to automate the handling of the pending and rejected states, you can use the following method:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"  actions: {\n    load: {\n      ...handleEffect(),\n      fulfilled(state, payload) {\n        // manual handle\n      },\n    },\n  },\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"handleEffect"})," ",(0,s.jsx)(n.a,{href:"/apis/app/runtime/model/handle-effect",children:"API"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"In the Effects function, you can also manually call Actions. For example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"const todoModel = model('todo').define((context, utils) => ({\n  state: {\n    items: [],\n    loading: false,\n    error: null,\n  },\n  actions: {\n    pending(state) {\n      state.loading = true;\n    },\n    fulfilled(state, items) {\n      state.items = items;\n      state.loading = false;\n    },\n  },\n  effects: {\n    async load() {\n      // use utils.use get cuttent Model actions\n      const [, actions] = utils.use(todoModel);\n      // invoke action\n      actions.pending();\n\n      return new Promise(resolve => {\n        setTimeout(() => {\n          const items = ['Learn Modern.js'];\n          // invoke action\n          actions.fulfilled(items);\n          resolve(items);\n        }, 2000);\n      });\n    },\n  },\n}));\n"})}),"\n",(0,s.jsxs)(n.p,{children:["You can use the ",(0,s.jsx)(n.code,{children:"use"})," function to load other Models (including the Model itself) to achieve ",(0,s.jsx)(n.a,{href:"/guides/topic-detail/model/model-communicate",children:"Model communication"}),"."]}),"\n",(0,s.jsxs)(n.h2,{id:"side-effects-do-not-affect-state",children:["Side effects do not affect state",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#side-effects-do-not-affect-state",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"In some cases, we only need to read State and execute relevant side effect logic, and the side effect will not modify State."}),"\n",(0,s.jsxs)(n.p,{children:["For example, store some State in ",(0,s.jsx)(n.code,{children:"localStorage"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"const fooModel = model('foo').define((context, utils) => ({\n  state: {\n    value: 'foo',\n  },\n  effects: {\n    setLocalStorage(key) {\n      const [state] = utils.use(fooModel);\n      localStorage.set(key, state.value);\n      return 'success';\n    },\n  },\n}));\n"})}),"\n",(0,s.jsx)(n.p,{children:"or send message to server:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"const fooModel = model('foo').define({\n  state: {\n    value: 'foo',\n  },\n  effects: {\n    async sendData(data) {\n      const res = await fetch('url', {\n        method: 'POST',\n        body: data,\n      });\n      return res.json();\n    },\n  },\n});\n"})}),"\n",(0,s.jsx)(n.p,{children:"Sometimes, we want to execute subsequent logic directly based on the execution result of the side effect function. In this case, we need to use the return value of the Effects function."}),"\n",(0,s.jsx)(n.p,{children:"For example, when the send button is clicked and the data is successfully sent, close the current popup immediately; if it fails, display an error message. We can achieve this through the following code:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"// The code is for illustration only and cannot be executed.\n// Response function of the \"send\" button within the component.\nconst handleClick = async () => {\n  // sendData returns a string that represents the state.\n  const result = await actions.sendData('some data');\n  if (result === 'success') {\n    // Close the popup window.\n    closeModal();\n  } else {\n    // show error\n    showError(result);\n  }\n};\n"})}),"\n",(0,s.jsxs)(n.div,{className:"rspress-directive info",children:[(0,s.jsx)(n.div,{className:"rspress-directive-title",children:"INFO"}),(0,s.jsx)(n.div,{className:"rspress-directive-content",children:(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://github.com/web-infra-dev/modern-js-examples/tree/main/examples/runtime-api/effects",target:"_blank",rel:"noopener noreferrer",children:"Example"}),"\n"]})})]})]})}function o(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,d.useMDXComponents)(),e.components);return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(i,{...e})}):i(e)}n.default=o,o.__RSPRESS_PAGE_META={},o.__RSPRESS_PAGE_META["en%2Fguides%2Ftopic-detail%2Fmodel%2Fmanage-effects.mdx"]={toc:[{text:"Modifying State via Side Effects",id:"modifying-state-via-side-effects",depth:2},{text:"Side effects do not affect state",id:"side-effects-do-not-affect-state",depth:2}],title:"Management Effect",frontmatter:{sidebar_position:5,title:"Management Effect"}}}}]);