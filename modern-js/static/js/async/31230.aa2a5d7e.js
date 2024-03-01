/*! For license information please see 31230.aa2a5d7e.js.LICENSE.txt */
(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["31230"],{18554:function(e,n,s){"use strict";s.r(n);var t=s("39980"),d=s("96954");function o(e){let n=Object.assign({h1:"h1",a:"a",div:"div",p:"p",code:"code",strong:"strong",h2:"h2",ul:"ul",li:"li",pre:"pre",h3:"h3",h4:"h4",ol:"ol"},(0,d.useMDXComponents)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.h1,{id:"model",children:["model",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#model",children:"#"})]}),"\n",(0,t.jsxs)(n.div,{className:"rspress-directive info",children:[(0,t.jsx)(n.div,{className:"rspress-directive-title",children:"information"}),(0,t.jsxs)(n.div,{className:"rspress-directive-content",children:[(0,t.jsxs)(n.p,{children:["By default, the export package name for all APIs in this section is: ",(0,t.jsx)(n.code,{children:"@modern-js/runtime/model"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["If Reduck is integrated separately from Modern.js, the export package name is: ",(0,t.jsx)(n.code,{children:"@modern-js-reduck/react"}),"."]}),"\n"]})]}),"\n",(0,t.jsxs)(n.div,{className:"rspress-directive tip",children:[(0,t.jsx)(n.div,{className:"rspress-directive-title",children:"TIP"}),(0,t.jsxs)(n.div,{className:"rspress-directive-content",children:[(0,t.jsxs)(n.p,{children:["The original type of Reduck is complex. The following type definition shows the simplified type information. For the original type, see ",(0,t.jsx)(n.a,{href:"https://github.com/web-infra-dev/reduck/blob/main/packages/store/src/model/model.ts",target:"_blank",rel:"noopener noreferrer",children:(0,t.jsx)(n.strong,{children:"model"})}),"."]}),"\n"]})]}),"\n",(0,t.jsxs)(n.h2,{id:"model-1",children:["model",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#model-1",children:"#"})]}),"\n",(0,t.jsx)(n.p,{children:"Create a Model for managing application state."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"function model(name: string): { define: function }"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["name: ",(0,t.jsx)(n.code,{children:"string"}),", the unique id of the Model created."]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",meta:'title="example"',children:"model('foo');\n"})}),"\n",(0,t.jsxs)(n.h2,{id:"define",children:["define",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#define",children:"#"})]}),"\n",(0,t.jsx)(n.p,{children:"Used to define the detailed structure of the Model, supporting passing in an object type or function type parameter."}),"\n",(0,t.jsxs)(n.h3,{id:"object-type",children:["Object Type",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#object-type",children:"#"})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"function define(modelDesc: ModelDesc): Model;"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["modelDesc: ",(0,t.jsx)(n.code,{children:"ModelDesc"}),", definition of Model structure, includes ",(0,t.jsx)(n.code,{children:"state"}),"\u3001",(0,t.jsx)(n.code,{children:"computed"}),"\u3001",(0,t.jsx)(n.code,{children:"actions"}),"\u3001",(0,t.jsx)(n.code,{children:"effects"})," etc. props."]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",meta:'title="example"',children:"const fooModel = model('foo').define({\n  state: 'foo',\n  computed: {\n    cFoo: state => `c${state}`,\n  },\n  actions: {\n    setState: (state, value) => {\n      return value;\n    },\n  },\n  effects: {\n    loadState: async () => {\n      // get state from remote\n    },\n  },\n});\n"})}),"\n",(0,t.jsxs)(n.h3,{id:"function-type",children:["Function Type",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#function-type",children:"#"})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"function define((context: Context, utils: Utils) => ModelDesc): Model;"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"context"}),": Reduck Context, can get underlying ",(0,t.jsx)(n.code,{children:"store"})," object. ",(0,t.jsx)(n.code,{children:"store"})," support all Redux Store ",(0,t.jsx)(n.a,{href:"https://redux.js.org/api/store",target:"_blank",rel:"noopener noreferrer",children:"API"}),", also mounts the ",(0,t.jsx)(n.code,{children:"use"})," method for consuming the Model, and the ",(0,t.jsx)(n.code,{children:"unmount"})," method for unmounting the Model."]}),"\n",(0,t.jsxs)(n.li,{children:["utils: commonly used tool like ",(0,t.jsx)(n.code,{children:"use"}),"\u3001",(0,t.jsx)(n.code,{children:"onMount"}),". ",(0,t.jsx)(n.code,{children:"use"})," is the same as ",(0,t.jsx)(n.code,{children:"store.use"}),", ",(0,t.jsx)(n.code,{children:"onMount"})," is the hook function after the Model is mounted."]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"interface Utils {\n  use: UseModel;\n  onMount: OnMountHook;\n}\n\ninterface Context {\n  store: ReduxStore & {\n    use: UseModel;\n    unmount: (model: Model) => void;\n  };\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["For example, through ",(0,t.jsx)(n.code,{children:"use"}),", you can get the ",(0,t.jsx)(n.code,{children:"state"})," and ",(0,t.jsx)(n.code,{children:"actions"})," of the Model itself and other Models."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",meta:'title="example"',children:"const fooModel = model('foo').define(() => {\n  return {\n    state: 'foo',\n    actions: {\n      setState: (state, value) => {\n        return value;\n      },\n    },\n  };\n});\n\nconst barModel = model('bar').define((_, { use }) => {\n  return {\n    state: 'bar',\n    effects: {\n      syncFoo() {\n        const [state, actions] = use(fooModel);\n        actions.setState(state);\n      },\n    },\n  };\n});\n"})}),"\n",(0,t.jsxs)(n.h3,{id:"input",children:["Input",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#input",children:"#"})]}),"\n",(0,t.jsxs)(n.h4,{id:"modeldescstate",children:["ModelDesc.state",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#modeldescstate",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:["Define the state of the Model. Technically, any type of ",(0,t.jsx)(n.strong,{children:"State"})," is supported, but in practice it is recommended to use a JSON serializable type."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"interface ModelDesc {\n  state: any;\n}\n"})}),"\n",(0,t.jsxs)(n.h4,{id:"modeldescactions",children:["ModelDesc.actions",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#modeldescactions",children:"#"})]}),"\n",(0,t.jsx)(n.p,{children:"Define the Actions of the Model. The function type of Actions is:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"interface ModelDesc {\n  actions: {\n    [actionKey: string]: (state: State, payload: any) => State | void;\n  };\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Reduck internally integrates ",(0,t.jsx)(n.a,{href:"https://github.com/immerjs/immer",target:"_blank",rel:"noopener noreferrer",children:"immer"}),", which can directly return the original ",(0,t.jsx)(n.code,{children:"state"}),". When the Action has no explicit return value, Reduck internally returns a modified new State object."]}),"\n",(0,t.jsxs)(n.h4,{id:"modeldesccomputed",children:["ModelDesc.computed",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#modeldesccomputed",children:"#"})]}),"\n",(0,t.jsx)(n.p,{children:"Defines the derived state of the Model. The definition of derived state supports two types:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Depends only on the state of the Model itself"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"interface ModelDesc {\n  computed: {\n    [computedKey: string]: (state: State) => any;\n  };\n}\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"2",children:["\n",(0,t.jsx)(n.li,{children:"Depends on the state of other Models"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"interface ModelDesc {\n  computed: {\n    [computedKey: string]: [\n      ...models: Model[],\n      (state: State, ...args: ModelState[]) => any,\n    ];\n  };\n}\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",meta:'title="example"',children:"const fooModel = model('foo').define({\n  state: 'foo',\n});\n\nconst barModel = model('bar').define({\n  state: 'bar',\n  computed: {\n    combineFoo: [fooModel, (state, fooState) => state + fooState],\n  },\n});\n"})}),"\n",(0,t.jsxs)(n.h4,{id:"modeldesceffects",children:["ModelDesc.effects",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#modeldesceffects",children:"#"})]}),"\n",(0,t.jsx)(n.p,{children:"Defines the Effects of the Model. The function types defined in Effects are:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"interface ModelDesc {\n  effects: {\n    [effectKey: string]: (...args: any[]) => any;\n  };\n}\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",meta:'title="example"',children:"const fooModel = model('foo').define((context, { use }) => ({\n  state: 'foo',\n  effects: {\n    persist() {\n      const [state] = use(fooModel);\n      localStorage.setItem('state', state);\n    },\n  },\n}));\n"})}),"\n",(0,t.jsxs)(n.div,{className:"rspress-directive info",children:[(0,t.jsx)(n.div,{className:"rspress-directive-title",children:"More"}),(0,t.jsxs)(n.div,{className:"rspress-directive-content",children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/guides/topic-detail/model/define-model",children:"Define Model"}),"."]}),"\n"]})]})]})}function i(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,d.useMDXComponents)(),e.components);return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}n.default=i,i.__RSPRESS_PAGE_META={},i.__RSPRESS_PAGE_META["en%2Fapis%2Fapp%2Fruntime%2Fmodel%2Fmodel_.mdx"]={toc:[{text:"model",id:"model-1",depth:2},{text:"define",id:"define",depth:2},{text:"Object Type",id:"object-type",depth:3},{text:"Function Type",id:"function-type",depth:3},{text:"Input",id:"input",depth:3},{text:"ModelDesc.state",id:"modeldescstate",depth:4},{text:"ModelDesc.actions",id:"modeldescactions",depth:4},{text:"ModelDesc.computed",id:"modeldesccomputed",depth:4},{text:"ModelDesc.effects",id:"modeldesceffects",depth:4}],title:"model",frontmatter:{sidebar_position:1,title:"model"}}}}]);