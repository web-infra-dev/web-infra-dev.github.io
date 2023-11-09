(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["60231"],{44547:function(e,n,s){"use strict";s.r(n),s.d(n,{default:function(){return i},frontmatter:function(){return r}});var d=s("9880"),c=s("23169");function l(e){let n=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",code:"code",pre:"pre",ul:"ul",li:"li",div:"div"},(0,c.useMDXComponents)(),e.components);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.h1,{id:"\u526F\u4F5C\u7528\u7BA1\u7406",children:["\u526F\u4F5C\u7528\u7BA1\u7406",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u526F\u4F5C\u7528\u7BA1\u7406",children:"#"})]}),"\n",(0,d.jsx)(n.p,{children:"Model \u4E2D\u7684 Action \u5FC5\u987B\u662F\u4E00\u4E2A\u7EAF\u51FD\u6570\uFF0C\u6267\u884C\u8FC7\u7A0B\u4E2D\u4E0D\u4F1A\u4EA7\u751F\u4EFB\u4F55\u526F\u4F5C\u7528\u3002\u4F46\u5728\u771F\u5B9E\u7684\u4E1A\u52A1\u4E2D\uFF0C\u6211\u4EEC\u4F1A\u9047\u5230\u5F88\u591A\u526F\u4F5C\u7528\u573A\u666F\uFF0C\u5982\uFF1A\u8BF7\u6C42 HTTP \u63A5\u53E3\u83B7\u53D6\u72B6\u6001\u6570\u636E\uFF0C\u6216\u8005\u5728\u66F4\u65B0\u72B6\u6001\u7684\u540C\u65F6\u4FEE\u6539 localStorage\u3001\u53D1\u9001\u4E8B\u4EF6\u7B49\u3002\u5728 Reduck \u4E2D\uFF0C\u662F\u901A\u8FC7 Model \u7684 Effects \u51FD\u6570\u7BA1\u7406\u526F\u4F5C\u7528\u7684\u3002"}),"\n",(0,d.jsxs)(n.h2,{id:"\u526F\u4F5C\u7528\u5BF9-state-\u4FEE\u6539",children:["\u526F\u4F5C\u7528\u5BF9 State \u4FEE\u6539",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u526F\u4F5C\u7528\u5BF9-state-\u4FEE\u6539",children:"#"})]}),"\n",(0,d.jsx)(n.p,{children:"\u526F\u4F5C\u7528\u4FEE\u6539 State\uFF0C\u6700\u5E38\u89C1\u7684\u573A\u666F\u5C31\u662F\u8BF7\u6C42 HTTP \u63A5\u53E3\uFF0C\u66F4\u65B0\u72B6\u6001\u6570\u636E\u3002"}),"\n",(0,d.jsxs)(n.p,{children:["\u6211\u4EEC\u4EE5\u4E00\u4E2A\u7B80\u5355\u7684 ",(0,d.jsx)(n.code,{children:"todoModel"})," \u4E3A\u4F8B\u3002\u5176\u6709\u4E00\u4E2A ",(0,d.jsx)(n.code,{children:"load"})," \u7684\u526F\u4F5C\u7528\u51FD\u6570\uFF0C\u8BF7\u6C42\u8FDC\u7AEF\u7684 TODO \u5217\u8868\uFF0C\u8BF7\u6C42\u6210\u529F\u4E4B\u540E\u66F4\u65B0 ",(0,d.jsx)(n.code,{children:"state.items"})," \u5B57\u6BB5\u3002"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",children:"const todoModel = model('todo').define({\n  state: {\n    items: [],\n    loading: false,\n    error: null,\n  },\n  actions: {\n    load: {\n      pending(state) {\n        state.loading = true;\n      },\n      fulfilled(state, items) {\n        state.items = items;\n        state.loading = false;\n      },\n      rejected(state, error) {\n        state.error = error;\n        state.loading = false;\n      },\n    },\n  },\n  effects: {\n    // Promise \u526F\u4F5C\u7528\n    async load() {\n      return new Promise(resolve => {\n        setTimeout(() => resolve(['Learn Modern.js']), 2000);\n      });\n    },\n  },\n});\n"})}),"\n",(0,d.jsxs)(n.p,{children:["\u526F\u4F5C\u7528\u51FD\u6570\u7EDF\u4E00\u5B9A\u4E49\u5728 ",(0,d.jsx)(n.code,{children:"effects"})," \u5B57\u6BB5\u4E0B\u3002\u8FD9\u91CC\u6211\u4EEC\u5199\u4E86\u4E00\u4E2A ",(0,d.jsx)(n.code,{children:"load"})," \u51FD\u6570\uFF0C\u5B83\u8FD4\u56DE\u4E00\u4E2A Promise\uFF0CPromise \u6267\u884C\u6210\u529F\u540E\uFF0C\u8FD4\u56DE TODO \u5217\u8868 ",(0,d.jsx)(n.code,{children:'["Lerna Modern.js"]'}),"\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:["\u526F\u4F5C\u7528\u51FD\u6570\u9700\u8981\u548C actions \u914D\u5408\u4F7F\u7528\uFF0C\u624D\u80FD\u5B8C\u6210\u72B6\u6001\u7684\u4FEE\u6539\u3002\u56E0\u6B64\uFF0C\u6211\u4EEC\u5728 ",(0,d.jsx)(n.code,{children:"actions"})," \u4E2D\u5B9A\u4E49\u4E86\u4E00\u4E2A ",(0,d.jsx)(n.code,{children:"load"}),"\uFF08\u547D\u540D\u9700\u8981\u548C ",(0,d.jsx)(n.code,{children:"effects"})," \u4E0B\u7684\u526F\u4F5C\u7528\u51FD\u6570\u7684\u540D\u5B57\u4FDD\u6301\u4E00\u81F4\uFF09\u5BF9\u8C61\uFF0C\u5305\u542B ",(0,d.jsx)(n.code,{children:"pending"}),"\u3001",(0,d.jsx)(n.code,{children:"fulfilled"}),"\u3001",(0,d.jsx)(n.code,{children:"rejected"})," 3 \u4E2A action\uFF0C\u5206\u522B\u662F\u5BF9\u526F\u4F5C\u7528\u51FD\u6570 ",(0,d.jsx)(n.code,{children:"load"})," \u8FD4\u56DE\u7684 ",(0,d.jsx)(n.code,{children:"Promise"})," \u7684\u4E09\u79CD\u72B6\u6001\uFF08 pending\u3001fulfilled\u3001rejected \uFF09\u7684\u5904\u7406\uFF1A"]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"pending"}),"\uFF1A\u63A5\u6536\u5F53\u524D\u72B6\u6001 ",(0,d.jsx)(n.code,{children:"state"})," \u4F5C\u4E3A\u53C2\u6570\uFF0C\u65B0\u7684\u72B6\u6001\u4E2D ",(0,d.jsx)(n.code,{children:"loading"})," \u8BBE\u4E3A ",(0,d.jsx)(n.code,{children:"true"}),"\u3002"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"fulfilled"}),"\uFF1A\u63A5\u6536\u5F53\u524D\u72B6\u6001 ",(0,d.jsx)(n.code,{children:"state"})," \u548C Promise fulfilled \u72B6\u6001\u7684\u503C ",(0,d.jsx)(n.code,{children:"items"})," \u4E3A\u53C2\u6570\uFF0C\u65B0\u7684\u72B6\u6001\u4E2D ",(0,d.jsx)(n.code,{children:"items"})," \u7B49\u4E8E\u53C2\u6570 ",(0,d.jsx)(n.code,{children:"items"}),"\u3001",(0,d.jsx)(n.code,{children:"loading"})," \u8BBE\u4E3A ",(0,d.jsx)(n.code,{children:"false"}),"\u3002"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"rejected"}),"\uFF1A\u63A5\u6536\u5F53\u524D\u72B6\u6001 ",(0,d.jsx)(n.code,{children:"state"})," \u548C Promise rejected \u72B6\u6001\u7684\u9519\u8BEF ",(0,d.jsx)(n.code,{children:"error"})," \u4E3A\u53C2\u6570\uFF0C\u65B0\u7684\u72B6\u6001\u4E2D ",(0,d.jsx)(n.code,{children:"error"})," \u7B49\u4E8E\u53C2\u6570 ",(0,d.jsx)(n.code,{children:"error"}),"\u3001",(0,d.jsx)(n.code,{children:"loading"})," \u8BBE\u4E3A ",(0,d.jsx)(n.code,{children:"false"}),"\u3002"]}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:"\u7EC4\u4EF6\u4E2D\u5982\u4F55\u8C03\u7528 effects \u51FD\u6570\u5462\uFF1F effects \u51FD\u6570\u4F1A\u88AB\u5408\u5E76\u5230 actions \u5BF9\u8C61\u4E0A\uFF0C\u56E0\u6B64\u53EF\u4EE5\u901A\u8FC7 actions \u5BF9\u8C61\u8C03\u7528 effects \u51FD\u6570\uFF0C\u5982\u4E0B\u6240\u793A\uFF1A"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",children:"function Todo() {\n  const [state, actions] = useModel(todoModel);\n\n  useEffect(() => {\n    // \u8C03\u7528 effects \u51FD\u6570\n    actions.load();\n  }, []);\n\n  if (state.loading) {\n    return <div>loading....</div>;\n  }\n\n  return (\n    <div>\n      <div>\n        {state.items.map((item, index) => (\n          <div key={index}>{item}</div>\n        ))}\n      </div>\n    </div>\n  );\n}\n"})}),"\n",(0,d.jsxs)(n.p,{children:["\u4E0A\u9762\u7684\u793A\u4F8B\u4E2D\uFF0C ",(0,d.jsx)(n.code,{children:"pending"}),"\u3001",(0,d.jsx)(n.code,{children:"fulfilled"}),"\u3001",(0,d.jsx)(n.code,{children:"rejected"})," 3 \u4E2A action\uFF0C\u5BF9\u4E8E\u7528\u4E8E\u83B7\u53D6\u6570\u636E\u7684 HTTP \u8BF7\u6C42\u573A\u666F\u4E0B\uFF0C\u4E00\u822C\u90FD\u662F\u9700\u8981\u7684\u3002Reduck \u63D0\u4F9B\u4E86\u4E00\u4E2A\u5DE5\u5177\u51FD\u6570 ",(0,d.jsx)(n.code,{children:"handleEffect"}),"\uFF0C\u7528\u4E8E\u7B80\u5316\u8FD9\u79CD\u573A\u666F\u4E0B\u7684 action \u521B\u5EFA\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"handleEffect"})," \u7EA6\u5B9A\u8FD9\u79CD\u526F\u4F5C\u7528\u573A\u666F\u4E0B\uFF0C Model \u7684 State \u7ED3\u6784\u5305\u542B ",(0,d.jsx)(n.code,{children:"result"}),"\u3001",(0,d.jsx)(n.code,{children:"error"}),"\u3001",(0,d.jsx)(n.code,{children:"pending"})," 3 \u4E2A\u5B57\u6BB5\uFF0C\u521D\u59CB\u503C\u4E3A\uFF1A"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",children:"{\n  result: null,\n  error: null,\n  pending: false\uFF0C\n}\n"})}),"\n",(0,d.jsxs)(n.p,{children:["\u8C03\u7528 ",(0,d.jsx)(n.code,{children:"handleEffect"})," \u4F1A\u8FD4\u56DE\u5982\u4E0B\u6570\u636E\u7ED3\u6784:"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",children:"{\n  pending() { // ... },\n  fulfilled() { // ... },\n  rejected() { // ... }\n}\n"})}),"\n",(0,d.jsxs)(n.p,{children:["\u8FD9\u4E2A\u6570\u636E\u7ED3\u6784\u548C\u6211\u4EEC\u5728 ",(0,d.jsx)(n.code,{children:"actions"})," \u4E0B\u7684 ",(0,d.jsx)(n.code,{children:"load"})," \u5BF9\u8C61\u7684\u6570\u636E\u7ED3\u6784\u662F\u76F8\u540C\u7684\u3002",(0,d.jsx)(n.code,{children:"handleEffect"})," \u8FD4\u56DE\u7684\u5BF9\u8C61\uFF0C\u5176\u5B9E\u5C31\u662F\u5BF9\u5E94\u4E86 Effects \u51FD\u6570\u9700\u8981\u7684 3 \u4E2A action\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:["\u5229\u7528 ",(0,d.jsx)(n.code,{children:"handleEffect"}),"\uFF0C\u6539\u5199 ",(0,d.jsx)(n.code,{children:"todoModel"}),"\uFF1A"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",children:"const todoModel = model('todo').define({\n  state: {\n    items: [],\n    loading: false,\n    error: null,\n  },\n  actions: {\n    load: handleEffect({ result: 'items' }),\n  },\n  effects: {\n    // Promise \u526F\u4F5C\u7528\n    async load() {\n      return new Promise(resolve => {\n        setTimeout(() => resolve(['Learn Modern.js']), 2000);\n      });\n    },\n  },\n});\n"})}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"handleEffect"})," \u63A5\u6536\u7684\u53C2\u6570\u5BF9\u8C61\uFF0C\u5C06 ",(0,d.jsx)(n.code,{children:"result"})," \u8BBE\u7F6E\u4E3A ",(0,d.jsx)(n.code,{children:"item"}),"\u3002\u56E0\u4E3A ",(0,d.jsx)(n.code,{children:"todoModel"})," \u7684 state\uFF0C\u4F7F\u7528 ",(0,d.jsx)(n.code,{children:"items"})," \u4F5C\u4E3A key \u4FDD\u5B58 todo \u5217\u8868\u6570\u636E\uFF0C\u800C\u4E0D\u662F\u4F7F\u7528 ",(0,d.jsx)(n.code,{children:"handleEffect"})," \u9ED8\u8BA4\u7684 ",(0,d.jsx)(n.code,{children:"result"})," \u4F5C\u4E3A key\uFF0C\u6240\u4EE5\u8FD9\u91CC\u9700\u8981\u8FDB\u884C\u914D\u7F6E\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:["\u660E\u663E\u53EF\u89C1\uFF0C\u901A\u8FC7 ",(0,d.jsx)(n.code,{children:"handleEffect"})," \u5B9E\u73B0\u7684 ",(0,d.jsx)(n.code,{children:"todoModel"})," \u6BD4\u4E4B\u524D\u7684\u5B9E\u73B0\u6709\u4E86\u5F88\u5927\u7CBE\u7B80\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:["\u5982\u679C\u4E0D\u5E0C\u671B pending\u3001fulfilled\u3001rejected 3 \u79CD\u72B6\u6001\u90FD\u88AB ",(0,d.jsx)(n.code,{children:"handleEffect"})," \u81EA\u52A8\u5904\u7406\uFF0C\u4F8B\u5982 fulfilled \u9700\u8981\u624B\u52A8\u5904\u7406\u8F83\u590D\u6742\u7684\u6570\u636E\u7C7B\u578B\uFF0C\u4F46\u662F pending\u3001rejected \u4F9D\u65E7\u60F3\u8FDB\u884C\u81EA\u52A8\u5316\u5904\u7406\uFF0C\u53EF\u4EE5\u53C2\u8003\u5982\u4E0B\u5199\u6CD5\uFF1A"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",children:"  actions: {\n    load: {\n      ...handleEffect(),\n      fulfilled(state, payload) {\n        // \u624B\u52A8\u5904\u7406\n      },\n    },\n  },\n"})}),"\n",(0,d.jsxs)(n.div,{className:"rspress-directive info",children:[(0,d.jsx)(n.div,{className:"rspress-directive-title",children:"\u8865\u5145\u4FE1\u606F"}),(0,d.jsxs)(n.div,{className:"rspress-directive-content",children:[(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"handleEffect"})," ",(0,d.jsx)(n.a,{href:"/apis/app/runtime/model/handle-effect",children:"API"}),"\u3002"]}),"\n"]})]}),"\n",(0,d.jsx)(n.p,{children:"Effects \u51FD\u6570\u4E2D\uFF0C\u4E5F\u652F\u6301\u624B\u52A8\u8C03\u7528 Actions\uFF0C\u4F8B\u5982\uFF1A"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",children:"const todoModel = model('todo').define((context, utils) => ({\n  state: {\n    items: [],\n    loading: false,\n    error: null,\n  },\n  actions: {\n    pending(state) {\n      state.loading = true;\n    },\n    fulfilled(state, items) {\n      state.items = items;\n      state.loading = false;\n    },\n  },\n  effects: {\n    async load() {\n      // \u901A\u8FC7 utils.use \u83B7\u53D6\u5F53\u524D Model \u5BF9\u8C61\u7684 actions\n      const [, actions] = utils.use(todoModel);\n      // \u624B\u52A8\u8C03\u7528 action\n      actions.pending();\n\n      return new Promise(resolve => {\n        setTimeout(() => {\n          const items = ['Learn Modern.js'];\n          // \u624B\u52A8\u8C03\u7528 action\n          actions.fulfilled(items);\n          resolve(items);\n        }, 2000);\n      });\n    },\n  },\n}));\n"})}),"\n",(0,d.jsxs)(n.div,{className:"rspress-directive info",children:[(0,d.jsx)(n.div,{className:"rspress-directive-title",children:"INFO"}),(0,d.jsxs)(n.div,{className:"rspress-directive-content",children:[(0,d.jsxs)(n.p,{children:["\u53EF\u4EE5\u4F7F\u7528 ",(0,d.jsx)(n.code,{children:"use"})," \u51FD\u6570\u52A0\u8F7D\u5176\u5B83 Model\uFF08\u5305\u62EC Model \u81EA\u8EAB\uFF09\uFF0C\u5B9E\u73B0 ",(0,d.jsx)(n.a,{href:"/guides/topic-detail/model/model-communicate",children:"Model \u95F4\u901A\u4FE1"}),"\u3002"]}),"\n"]})]}),"\n",(0,d.jsxs)(n.h2,{id:"\u526F\u4F5C\u7528\u4E0D\u5F71\u54CD-state",children:["\u526F\u4F5C\u7528\u4E0D\u5F71\u54CD state",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u526F\u4F5C\u7528\u4E0D\u5F71\u54CD-state",children:"#"})]}),"\n",(0,d.jsx)(n.p,{children:"\u6709\u4E9B\u573A\u666F\u4E0B\uFF0C\u6211\u4EEC\u53EA\u9700\u8981\u8BFB\u53D6 State\uFF0C\u6267\u884C\u76F8\u5173\u526F\u4F5C\u7528\u903B\u8F91\uFF0C\u526F\u4F5C\u7528\u4E0D\u4F1A\u4FEE\u6539 State\u3002"}),"\n",(0,d.jsxs)(n.p,{children:["\u4F8B\u5982\uFF0C\u5B58\u50A8\u67D0\u4E9B State \u5230 ",(0,d.jsx)(n.code,{children:"localStorage"}),"\uFF1A"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",children:"const fooModel = model('foo').define((context, utils) => ({\n  state: {\n    value: 'foo',\n  },\n  effects: {\n    setLocalStorage(key) {\n      const [state] = utils.use(fooModel);\n      localStorage.set(key, state.value);\n      return 'success';\n    },\n  },\n}));\n"})}),"\n",(0,d.jsx)(n.p,{children:"\u6216\u8005\u662F\u5411\u670D\u52A1\u7AEF\u53D1\u9001\u6570\u636E\uFF1A"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",children:"const fooModel = model('foo').define({\n  state: {\n    value: 'foo',\n  },\n  effects: {\n    async sendData(data) {\n      const res = await fetch('url', {\n        method: 'POST',\n        body: data,\n      });\n      return res.json();\n    },\n  },\n});\n"})}),"\n",(0,d.jsxs)(n.h2,{id:"\u526F\u4F5C\u7528\u51FD\u6570\u8FD4\u56DE\u503C",children:["\u526F\u4F5C\u7528\u51FD\u6570\u8FD4\u56DE\u503C",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u526F\u4F5C\u7528\u51FD\u6570\u8FD4\u56DE\u503C",children:"#"})]}),"\n",(0,d.jsx)(n.p,{children:"\u6709\u65F6\u5019\uFF0C\u6211\u4EEC\u5E0C\u671B\u80FD\u6839\u636E\u526F\u4F5C\u7528\u51FD\u6570\u7684\u6267\u884C\u7ED3\u679C\uFF0C\u76F4\u63A5\u6267\u884C\u540E\u7EED\u903B\u8F91\u3002\u8FD9\u65F6\u5019\uFF0C\u5C31\u9700\u8981\u4F7F\u7528 Effects \u51FD\u6570\u7684\u8FD4\u56DE\u3002"}),"\n",(0,d.jsx)(n.p,{children:"\u4F8B\u5982\uFF0C\u5F53\u70B9\u51FB\u53D1\u9001\u6309\u94AE\uFF0C\u53D1\u9001\u6570\u636E\u6210\u529F\u540E\uFF0C\u7ACB\u5373\u5173\u95ED\u5F53\u524D\u7684\u5F39\u7A97\uFF1B\u5982\u679C\u5931\u8D25\uFF0C\u663E\u793A\u9519\u8BEF\u4FE1\u606F\u3002\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7\u5982\u4E0B\u4EE3\u7801\u5B9E\u73B0\uFF1A"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",children:"// \u4EE3\u7801\u4EC5\u505A\u793A\u610F\uFF0C\u4E0D\u80FD\u6267\u884C\n// \u7EC4\u4EF6\u5185\u90E8 \u53D1\u9001\u6309\u94AE \u7684\u54CD\u5E94\u51FD\u6570\nconst handleClick = async () => {\n  // sendData \u8FD4\u56DE\u4EE3\u8868\u72B6\u6001\u7684\u5B57\u7B26\u4E32\n  const result = await actions.sendData('some data');\n  if (result === 'success') {\n    // \u5173\u95ED\u5F39\u7A97\n    closeModal();\n  } else {\n    // \u663E\u793A\u9519\u8BEF\n    showError(result);\n  }\n};\n"})}),"\n",(0,d.jsxs)(n.div,{className:"rspress-directive info",children:[(0,d.jsx)(n.div,{className:"rspress-directive-title",children:"\u8865\u5145\u4FE1\u606F"}),(0,d.jsxs)(n.div,{className:"rspress-directive-content",children:[(0,d.jsx)(n.p,{children:(0,d.jsx)(n.a,{href:"https://github.com/web-infra-dev/modern-js-examples/tree/main/examples/runtime-api/effects",target:"_blank",rel:"noopener noreferrer",children:"\u793A\u4F8B\u4EE3\u7801"})}),"\n"]})]})]})}function t(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,c.useMDXComponents)(),e.components);return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}var i=t;t.__RSPRESS_PAGE_META={},t.__RSPRESS_PAGE_META["zh%2Fguides%2Ftopic-detail%2Fmodel%2Fmanage-effects.mdx"]={toc:[{text:"\u526F\u4F5C\u7528\u5BF9 State \u4FEE\u6539",id:"\u526F\u4F5C\u7528\u5BF9-state-\u4FEE\u6539",depth:2},{text:"\u526F\u4F5C\u7528\u4E0D\u5F71\u54CD state",id:"\u526F\u4F5C\u7528\u4E0D\u5F71\u54CD-state",depth:2},{text:"\u526F\u4F5C\u7528\u51FD\u6570\u8FD4\u56DE\u503C",id:"\u526F\u4F5C\u7528\u51FD\u6570\u8FD4\u56DE\u503C",depth:2}],title:"\u526F\u4F5C\u7528\u7BA1\u7406"};let r={sidebar_position:5,title:"\u526F\u4F5C\u7528\u7BA1\u7406"}}}]);