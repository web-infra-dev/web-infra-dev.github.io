(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["71430"],{91547:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return c}});var a,o=n("15169"),d=n("43932"),s=n("9880"),l=n("23169");function i(e){var t=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",pre:"pre",code:"code",ul:"ul",li:"li"},(0,l.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.h1,{id:"ts-\u6700\u4F73\u5B9E\u8DF5",children:["TS \u6700\u4F73\u5B9E\u8DF5",(0,s.jsx)(t.a,{className:"header-anchor","aria-hidden":"true",href:"#ts-\u6700\u4F73\u5B9E\u8DF5",children:"#"})]}),"\n",(0,s.jsx)(t.p,{children:"Reduck \u5BF9 TS \u63D0\u4F9B\u4E86\u826F\u597D\u7684\u652F\u6301\uFF0C\u5927\u90E8\u5206\u4F7F\u7528\u573A\u666F\u4E0B\uFF0C\u65E0\u9700\u4EFB\u4F55\u989D\u5916\u5DE5\u4F5C\uFF0C\u5C31\u53EF\u4EE5\u76F4\u63A5\u83B7\u5F97 API \u7684 TS \u7C7B\u578B\u63D0\u793A\u3002\u672C\u8282\uFF0C\u5C06\u5BF9\u5176\u4ED6\u7684\u4E00\u4E9B\u4F7F\u7528\u573A\u666F\uFF0C\u505A\u8865\u5145\u4ECB\u7ECD\u3002"}),"\n",(0,s.jsxs)(t.h2,{id:"\u5B9A\u4E49-model-\u7684-state-\u7C7B\u578B",children:["\u5B9A\u4E49 Model \u7684 State \u7C7B\u578B",(0,s.jsx)(t.a,{className:"header-anchor","aria-hidden":"true",href:"#\u5B9A\u4E49-model-\u7684-state-\u7C7B\u578B",children:"#"})]}),"\n",(0,s.jsx)(t.p,{children:"\u4E3A Model \u7684 State \u58F0\u660E\u7C7B\u578B\u4FE1\u606F\uFF0C\u662F\u5728 TS \u4E2D\u4F7F\u7528 Reduck \u7684\u6700\u4F73\u5B9E\u8DF5\u3002"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",meta:'title="\u793A\u4F8B"',children:"interface State {\n  data: string;\n}\n\nexport const foo = model<State>('foo').define({\n  state: {\n    data: '',\n  },\n  computed: {\n    withSuffix: state => state.data + 'suffix',\n  },\n  actions: {\n    setData: (state, payload: string) => {\n      state.data = payload;\n    },\n  },\n});\n"})}),"\n",(0,s.jsxs)(t.p,{children:["\u5F53\u4E3A Model \u7684 State \u58F0\u660E\u7C7B\u578B\u4FE1\u606F\u540E\uFF0CModel \u7684 ",(0,s.jsx)(t.code,{children:"computed"}),"\u3001",(0,s.jsx)(t.code,{children:"actions"})," \u90FD\u80FD\u83B7\u53D6\u6B63\u786E\u7684\u7C7B\u578B\u4FE1\u606F\u3002\u4E8B\u5B9E\u4E0A\uFF0C\u4E0A\u9762\u7684\u793A\u4F8B\u4EE3\u7801\u4E2D\uFF0C\u5373\u4F7F\u6211\u4EEC\u4E0D\u5B9A\u4E49 State \u7C7B\u578B\u4FE1\u606F\uFF0C\u4E5F\u4F1A\u6839\u636E ",(0,s.jsx)(t.code,{children:"state"})," \u7684\u521D\u59CB\u503C\u4FE1\u606F\u81EA\u52A8\u63A8\u5BFC\u51FA State \u7684\u7C7B\u578B\u4FE1\u606F\u3002\u4E0D\u8FC7\uFF0C\u4ECD\u7136\u5EFA\u8BAE\u4F60\u5728\u5B9A\u4E49 Model \u65F6\uFF0C\u58F0\u660E State \u7684\u7C7B\u578B\u4FE1\u606F\uFF0C\u56E0\u4E3A\u6839\u636E ",(0,s.jsx)(t.code,{children:"state"})," \u7684\u521D\u59CB\u503C\u4FE1\u606F\u63A8\u5BFC\u51FA\u7684 State \u7C7B\u578B\u4FE1\u606F\u53EF\u80FD\u4E0D\u5B8C\u6574(\u7F3A\u5C11\u5B57\u6BB5\u6216\u5B57\u6BB5\u7684\u7C7B\u578B\u4FE1\u606F\u7F3A\u5C11)\uFF0C\u800C\u4E14\u5F53\u4F7F\u7528",(0,s.jsx)(t.a,{href:"/apis/app/runtime/model/model_#%E5%87%BD%E6%95%B0%E7%B1%BB%E5%9E%8B",children:"\u51FD\u6570\u7C7B\u578B"}),"\u5B9A\u4E49 Model \u65F6\uFF0CState \u7684\u7C7B\u578B\u4FE1\u606F\u4E5F\u662F\u65E0\u6CD5\u6839\u636E ",(0,s.jsx)(t.code,{children:"state"})," \u7684\u521D\u59CB\u503C\u4FE1\u606F\u81EA\u52A8\u63A8\u5BFC\u7684\u3002"]}),"\n",(0,s.jsxs)(t.h2,{id:"\u884D\u751F\u72B6\u6001\u7684\u4F9D\u8D56\u7C7B\u578B",children:["\u884D\u751F\u72B6\u6001\u7684\u4F9D\u8D56\u7C7B\u578B",(0,s.jsx)(t.a,{className:"header-anchor","aria-hidden":"true",href:"#\u884D\u751F\u72B6\u6001\u7684\u4F9D\u8D56\u7C7B\u578B",children:"#"})]}),"\n",(0,s.jsx)(t.p,{children:"\u5F53 Model \u7684\u884D\u751F\u72B6\u6001\u4F9D\u8D56\u5176\u4ED6 Model \u65F6\uFF0C\u9700\u8981\u624B\u52A8\u6307\u5B9A\u5176\u4ED6 Model \u7684 State\u3002"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",meta:'title="\u793A\u4F8B"',children:"interface State {\n  data: string;\n}\n\nexport const bar = model<State>('bar').define({\n  state: {\n    data: '',\n  },\n  computed: {\n    // \u4E3A fooState \u6307\u5B9A\u7C7B\u578B\n    withFoo: [foo, (state, fooState: FooState) => state.data + fooState.data],\n  },\n});\n"})}),"\n",(0,s.jsxs)(t.h2,{id:"\u83B7\u53D6-model-\u7C7B\u578B\u4FE1\u606F\u7684-hooks",children:["\u83B7\u53D6 Model \u7C7B\u578B\u4FE1\u606F\u7684 Hooks",(0,s.jsx)(t.a,{className:"header-anchor","aria-hidden":"true",href:"#\u83B7\u53D6-model-\u7C7B\u578B\u4FE1\u606F\u7684-hooks",children:"#"})]}),"\n",(0,s.jsx)(t.p,{children:"Reduck \u63D0\u4F9B\u4E86\u4E00\u7EC4\u7528\u4E8E\u83B7\u53D6 Model \u7C7B\u578B\u4FE1\u606F\u7684\u5DE5\u5177\u7C7B\u578B\uFF1A"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"GetModelState"}),"\uFF1A \u83B7\u53D6 Model \u7684 State\uFF08\u5305\u542B\u884D\u751F\u72B6\u6001\uFF09\u7C7B\u578B\u4FE1\u606F\u3002"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"GetModelActions"}),"\uFF1A\u83B7\u53D6 Model \u7684 Actions\uFF08\u5305\u542B Effects \u51FD\u6570\uFF09\u7C7B\u578B\u4FE1\u606F\u3002"]}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",meta:'title="\u793A\u4F8B"',children:"export const foo = model<State2>('foo').define({\n  // \u7701\u7565\n});\n\n// \u83B7\u53D6 foo \u7684 State \u7C7B\u578B\nlet fooActions: GetModelActions<typeof foo>;\n// \u83B7\u53D6 foo \u7684 Actions \u7C7B\u578B\nlet fooState: GetModelState<typeof foo>;\n"})})]})}(a=globalThis).__RSPRESS_PAGE_META||(a.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["zh%2Fguides%2Ftopic-detail%2Fmodel%2Ftypescript-best-practice.mdx"]={toc:[{text:"\u5B9A\u4E49 Model \u7684 State \u7C7B\u578B",id:"\u5B9A\u4E49-model-\u7684-state-\u7C7B\u578B",depth:2},{text:"\u884D\u751F\u72B6\u6001\u7684\u4F9D\u8D56\u7C7B\u578B",id:"\u884D\u751F\u72B6\u6001\u7684\u4F9D\u8D56\u7C7B\u578B",depth:2},{text:"\u83B7\u53D6 Model \u7C7B\u578B\u4FE1\u606F\u7684 Hooks",id:"\u83B7\u53D6-model-\u7C7B\u578B\u4FE1\u606F\u7684-hooks",depth:2}],title:"TS \u6700\u4F73\u5B9E\u8DF5",frontmatter:{sidebar_position:10,title:"TS \u6700\u4F73\u5B9E\u8DF5"}};var c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object.assign({},(0,l.useMDXComponents)(),e.components).wrapper;return t?(0,s.jsx)(t,(0,d._)((0,o._)({},e),{children:(0,s.jsx)(i,(0,o._)({},e))})):i(e)}}}]);