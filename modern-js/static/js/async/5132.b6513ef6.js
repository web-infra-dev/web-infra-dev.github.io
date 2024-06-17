/*! For license information please see 5132.b6513ef6.js.LICENSE.txt */
(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["5132"],{15466:function(e,n,s){"use strict";s.r(n);var d=s("39980"),t=s("9580");function c(e){let n=Object.assign({h1:"h1",a:"a",div:"div",p:"p",code:"code",strong:"strong",h2:"h2",ul:"ul",li:"li",pre:"pre",h3:"h3",h4:"h4",ol:"ol"},(0,t.ah)(),e.components);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.h1,{id:"model",children:["model",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#model",children:"#"})]}),"\n",(0,d.jsxs)(n.div,{className:"rspress-directive info",children:[(0,d.jsx)(n.div,{className:"rspress-directive-title",children:"\u8865\u5145\u4FE1\u606F"}),(0,d.jsxs)(n.div,{className:"rspress-directive-content",children:[(0,d.jsxs)(n.p,{children:["\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u672C\u8282\u6240\u6709 API \u7684\u5BFC\u51FA\u5305\u540D\u4E3A\uFF1A",(0,d.jsx)(n.code,{children:"@modern-js/runtime/model"}),"\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:["\u5982\u679C\u662F\u5728 Modern.js \u4EE5\u5916\u5355\u72EC\u96C6\u6210 Reduck\uFF0C\u5BFC\u51FA\u5305\u540D\u4E3A\uFF1A",(0,d.jsx)(n.code,{children:"@modern-js-reduck/react"}),"\u3002"]}),"\n"]})]}),"\n",(0,d.jsxs)(n.div,{className:"rspress-directive tip",children:[(0,d.jsx)(n.div,{className:"rspress-directive-title",children:"\u63D0\u793A"}),(0,d.jsxs)(n.div,{className:"rspress-directive-content",children:[(0,d.jsxs)(n.p,{children:["Reduck \u539F\u59CB\u7C7B\u578B\u8F83\u4E3A\u590D\u6742\uFF0C\u4EE5\u4E0B\u6D89\u53CA\u7C7B\u578B\u5B9A\u4E49\u7684\u5730\u65B9\uFF0C\u5C55\u793A\u7684\u662F\u7B80\u5316\u540E\u7684\u7C7B\u578B\u4FE1\u606F\u3002\u539F\u59CB\u7C7B\u578B\u89C1 ",(0,d.jsx)(n.a,{href:"https://github.com/web-infra-dev/reduck/blob/main/packages/store/src/model/model.ts",target:"_blank",rel:"noopener noreferrer",children:(0,d.jsx)(n.strong,{children:"model"})}),"\u3002"]}),"\n"]})]}),"\n",(0,d.jsxs)(n.h2,{id:"model-1",children:["model",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#model-1",children:"#"})]}),"\n",(0,d.jsx)(n.p,{children:"\u7528\u4E8E\u521B\u5EFA\u7BA1\u7406\u5E94\u7528\u72B6\u6001\u7684 Model\u3002"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.code,{children:"function model(name: string): { define: function }"})}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["name\uFF1A",(0,d.jsx)(n.code,{children:"string"}),"\uFF0C\u521B\u5EFA\u7684 Model \u7684\u552F\u4E00\u6807\u8BC6\u3002"]}),"\n"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",meta:'title="\u793A\u4F8B"',children:"model('foo');\n"})}),"\n",(0,d.jsxs)(n.h2,{id:"define",children:["define",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#define",children:"#"})]}),"\n",(0,d.jsx)(n.p,{children:"\u7528\u4E8E\u5B9A\u4E49 Model \u7684\u8BE6\u7EC6\u7ED3\u6784\uFF0C\u652F\u6301\u4F20\u5165\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B\u6216\u51FD\u6570\u7C7B\u578B\u7684\u53C2\u6570\u3002"}),"\n",(0,d.jsxs)(n.h3,{id:"\u5BF9\u8C61\u7C7B\u578B",children:["\u5BF9\u8C61\u7C7B\u578B",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u5BF9\u8C61\u7C7B\u578B",children:"#"})]}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.code,{children:"function define(modelDesc: ModelDesc): Model;"})}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["modelDesc: ",(0,d.jsx)(n.code,{children:"ModelDesc"}),"\uFF0C\u5BF9 Model \u7ED3\u6784\u7684\u5B9A\u4E49\uFF0C\u5305\u542B ",(0,d.jsx)(n.code,{children:"state"}),"\u3001",(0,d.jsx)(n.code,{children:"computed"}),"\u3001",(0,d.jsx)(n.code,{children:"actions"}),"\u3001",(0,d.jsx)(n.code,{children:"effects"})," \u7B49\u5C5E\u6027\u3002"]}),"\n"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-tsx",meta:'title="\u793A\u4F8B"',children:"const fooModel = model('foo').define({\n  state: 'foo',\n  computed: {\n    cFoo: state => `c${state}`,\n  },\n  actions: {\n    setState: (state, value) => {\n      return value;\n    },\n  },\n  effects: {\n    loadState: async () => {\n      // \u4ECE\u670D\u52A1\u7AEF\u83B7\u53D6 state\n    },\n  },\n});\n"})}),"\n",(0,d.jsxs)(n.h3,{id:"\u51FD\u6570\u7C7B\u578B",children:["\u51FD\u6570\u7C7B\u578B",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u51FD\u6570\u7C7B\u578B",children:"#"})]}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.code,{children:"function define((context: Context, utils: Utils) => ModelDesc): Model;"})}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["context: Context\uFF0CReduck \u4E0A\u4E0B\u6587\u5BF9\u8C61\uFF0C\u53EF\u4EE5\u83B7\u53D6\u5E95\u5C42\u7684 ",(0,d.jsx)(n.code,{children:"store"})," \u5BF9\u8C61\u3002",(0,d.jsx)(n.code,{children:"store"})," \u9664\u652F\u6301 Redux Store \u7684\u6240\u6709 ",(0,d.jsx)(n.a,{href:"https://redux.js.org/api/store",target:"_blank",rel:"noopener noreferrer",children:"API"})," \u4EE5\u5916\uFF0C\u8FD8\u6302\u8F7D\u4E86\u7528\u4E8E\u6D88\u8D39 Model \u7684 ",(0,d.jsx)(n.code,{children:"use"})," \u7684\u65B9\u6CD5\uFF0C\u548C\u7528\u4E8E\u5378\u8F7D Model \u7684 ",(0,d.jsx)(n.code,{children:"unmount"})," \u65B9\u6CD5\u3002"]}),"\n",(0,d.jsxs)(n.li,{children:["utils: Utils\uFF0C\u5B9A\u4E49 Model \u65F6\uFF0C\u5E38\u7528\u7684\u5DE5\u5177\u51FD\u6570\uFF1A",(0,d.jsx)(n.code,{children:"use"}),"\u3001",(0,d.jsx)(n.code,{children:"onMount"}),"\u3002",(0,d.jsx)(n.code,{children:"use"})," \u4F5C\u7528\u540C ",(0,d.jsx)(n.code,{children:"store"})," \u5BF9\u8C61\u4E0A\u7684 ",(0,d.jsx)(n.code,{children:"use"}),"\uFF0C",(0,d.jsx)(n.code,{children:"onMount"})," \u662F Model \u6302\u8F7D\u540E\u7684\u94A9\u5B50\u51FD\u6570\u3002"]}),"\n"]}),"\n","\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",children:"interface Utils {\n  use: UseModel;\n  onMount: OnMountHook;\n}\n\ninterface Context {\n  store: ReduxStore & {\n    use: UseModel;\n    unmount: (model: Model) => void;\n  };\n}\n"})}),"\n",(0,d.jsxs)(n.p,{children:["\u5982\u901A\u8FC7 ",(0,d.jsx)(n.code,{children:"use"}),"\uFF0C\u53EF\u4EE5\u83B7\u53D6 Model \u81EA\u8EAB\u53CA\u5176\u5B83 Model \u7684 ",(0,d.jsx)(n.code,{children:"state"}),"\uFF0C",(0,d.jsx)(n.code,{children:"actions"}),"\u3002"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-tsx",meta:'title="\u793A\u4F8B"',children:"const fooModel = model('foo').define(() => {\n  return {\n    state: 'foo',\n    actions: {\n      setState: (state, value) => {\n        return value;\n      },\n    },\n  };\n});\n\nconst barModel = model('bar').define((_, { use }) => {\n  return {\n    state: 'bar',\n    effects: {\n      syncFoo() {\n        const [state, actions] = use(fooModel);\n        actions.setState(state);\n      },\n    },\n  };\n});\n"})}),"\n",(0,d.jsxs)(n.h3,{id:"\u53C2\u6570",children:["\u53C2\u6570",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u53C2\u6570",children:"#"})]}),"\n",(0,d.jsxs)(n.h4,{id:"modeldescstate",children:["ModelDesc.state",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#modeldescstate",children:"#"})]}),"\n",(0,d.jsxs)(n.p,{children:["\u5B9A\u4E49 Model \u7684\u72B6\u6001\u3002\u6280\u672F\u4E0A\uFF0C\u652F\u6301\u4EFB\u610F\u7C7B\u578B\u7684 ",(0,d.jsx)(n.strong,{children:"State"}),"\uFF0C\u4F46\u662F\u5B9E\u8DF5\u4E2D\u5EFA\u8BAE\u4F7F\u7528\u53EF\u8FDB\u884C JSON \u5E8F\u5217\u5316\u7684\u7C7B\u578B\u3002"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",children:"interface ModelDesc {\n  state: any;\n}\n"})}),"\n",(0,d.jsxs)(n.h4,{id:"modeldescactions",children:["ModelDesc.actions",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#modeldescactions",children:"#"})]}),"\n",(0,d.jsx)(n.p,{children:"\u5B9A\u4E49 Model \u7684 Actions\u3002Actions \u7684\u51FD\u6570\u7C7B\u578B\u4E3A\uFF1A"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",children:"interface ModelDesc {\n  actions: {\n    [actionKey: string]: (state: State, payload: any) => State | void;\n  };\n}\n"})}),"\n",(0,d.jsxs)(n.p,{children:["Reduck \u5185\u90E8\u96C6\u6210\u4E86 ",(0,d.jsx)(n.a,{href:"https://github.com/immerjs/immer",target:"_blank",rel:"noopener noreferrer",children:"immer"}),"\uFF0C\u53EF\u4EE5\u76F4\u63A5\u539F\u59CB\u7684 ",(0,d.jsx)(n.code,{children:"state"}),"\uFF0C\u5F53 Action \u6CA1\u6709\u663E\u5F0F\u8FD4\u56DE\u503C\u65F6\uFF0CReduck \u5185\u90E8\u4F1A\u8FD4\u56DE\u4FEE\u6539\u8FC7\u7684\u65B0\u7684 State \u5BF9\u8C61\u3002"]}),"\n",(0,d.jsxs)(n.h4,{id:"modeldesccomputed",children:["ModelDesc.computed",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#modeldesccomputed",children:"#"})]}),"\n",(0,d.jsx)(n.p,{children:"\u5B9A\u4E49 Model \u7684\u884D\u751F\u72B6\u6001\u3002\u884D\u751F\u72B6\u6001\u7684\u5B9A\u4E49\u652F\u6301\u4E24\u79CD\u7C7B\u578B\uFF1A"}),"\n",(0,d.jsxs)(n.ol,{children:["\n",(0,d.jsx)(n.li,{children:"\u53EA\u4F9D\u8D56 Model \u81EA\u8EAB\u7684\u72B6\u6001"}),"\n"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",children:"interface ModelDesc {\n  computed: {\n    [computedKey: string]: (state: State) => any;\n  };\n}\n"})}),"\n",(0,d.jsxs)(n.ol,{start:"2",children:["\n",(0,d.jsx)(n.li,{children:"\u4F9D\u8D56\u5176\u4ED6 Model \u7684\u72B6\u6001"}),"\n"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",children:"interface ModelDesc {\n  computed: {\n    [computedKey: string]: [\n      ...models: Model[],\n      (state: State, ...args: ModelState[]) => any,\n    ];\n  };\n}\n"})}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",meta:'title="\u793A\u4F8B"',children:"const fooModel = model('foo').define({\n  state: 'foo',\n});\n\nconst barModel = model('bar').define({\n  state: 'bar',\n  computed: {\n    combineFoo: [fooModel, (state, fooState) => state + fooState],\n  },\n});\n"})}),"\n",(0,d.jsxs)(n.h4,{id:"modeldesceffects",children:["ModelDesc.effects",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#modeldesceffects",children:"#"})]}),"\n",(0,d.jsx)(n.p,{children:"\u5B9A\u4E49 Model \u7684 Effects\u3002Effects \u4E2D\u5B9A\u4E49\u7684\u51FD\u6570\u7C7B\u578B\u4E3A\uFF1A"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",children:"interface ModelDesc {\n  effects: {\n    [effectKey: string]: (...args: any[]) => any;\n  };\n}\n"})}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",meta:'title="\u793A\u4F8B"',children:"const fooModel = model('foo').define((context, { use }) => ({\n  state: 'foo',\n  effects: {\n    persist() {\n      const [state] = use(fooModel);\n      localStorage.setItem('state', state);\n    },\n  },\n}));\n"})}),"\n",(0,d.jsxs)(n.div,{className:"rspress-directive info",children:[(0,d.jsx)(n.div,{className:"rspress-directive-title",children:"\u66F4\u591A\u53C2\u8003"}),(0,d.jsxs)(n.div,{className:"rspress-directive-content",children:[(0,d.jsx)(n.p,{children:(0,d.jsx)(n.a,{href:"/guides/topic-detail/model/define-model",children:"\u521B\u5EFA Model"})}),"\n"]})]})]})}function o(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,t.ah)(),e.components);return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(c,{...e})}):c(e)}n.default=o,o.__RSPRESS_PAGE_META={},o.__RSPRESS_PAGE_META["zh%2Fapis%2Fapp%2Fruntime%2Fmodel%2Fmodel_.mdx"]={toc:[{text:"model",id:"model-1",depth:2},{text:"define",id:"define",depth:2},{text:"\u5BF9\u8C61\u7C7B\u578B",id:"\u5BF9\u8C61\u7C7B\u578B",depth:3},{text:"\u51FD\u6570\u7C7B\u578B",id:"\u51FD\u6570\u7C7B\u578B",depth:3},{text:"\u53C2\u6570",id:"\u53C2\u6570",depth:3},{text:"ModelDesc.state",id:"modeldescstate",depth:4},{text:"ModelDesc.actions",id:"modeldescactions",depth:4},{text:"ModelDesc.computed",id:"modeldesccomputed",depth:4},{text:"ModelDesc.effects",id:"modeldesceffects",depth:4}],title:"model",frontmatter:{sidebar_position:1,title:"model"}}}}]);