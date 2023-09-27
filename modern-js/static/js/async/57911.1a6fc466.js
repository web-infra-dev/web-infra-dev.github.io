(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["57911"],{53288:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return c}});var t,s=r("15169"),o=r("43932"),d=r("9880"),i=r("23169"),a=r("94738");function l(e){var n=Object.assign({h1:"h1",a:"a",p:"p",code:"code",h2:"h2",pre:"pre",h3:"h3",ul:"ul",li:"li",em:"em",strong:"strong"},(0,i.useMDXComponents)(),e.components);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.h1,{id:"createstore",children:["createStore",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#createstore",children:"#"})]}),"\n","\n",(0,d.jsx)(a.default,{}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"createStore"})," is used to create a Store. Reduck\u2019s Store based on Redux's ",(0,d.jsx)(n.a,{href:"https://redux.js.org/api/store",target:"_blank",rel:"noopener noreferrer",children:"Store"})," implementatio. Used to store the state of the application and managing the state and Model."]}),"\n",(0,d.jsxs)(n.p,{children:["In general, this API is only used when you need to have full control over the creation of the Store. For example, to customize a Store, pass in the ",(0,d.jsx)(n.a,{href:"/en/apis/app/runtime/model/Provider",children:"'Provider'"})," component to use."]}),"\n",(0,d.jsxs)(n.h2,{id:"function-signature",children:["Function Signature",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#function-signature",children:"#"})]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",children:"interface StoreConfig {\n  initialState?: Record<string, any>;\n  middlewares?: Middleware[];\n  models?: Model[];\n  plugins?: Plugin[];\n  enhancers?: StoreEnhancer[];\n}\n\ninterface ReduckStore extends ReduxStore {\n  use: typeof useModel;\n  unmount: (model: Model) => void;\n}\n\nfunction createStore(config?: StoreConfig): ReduckStore;\n"})}),"\n",(0,d.jsxs)(n.h3,{id:"input",children:["Input",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#input",children:"#"})]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"config"}),": store options.","\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"initialState"}),": set the initial state for store."]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"models"}),": set the Model to mount to the Store in advance(No need for normal use)."]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"middlewares"}),": set Redux ",(0,d.jsx)(n.a,{href:"https://redux.js.org/understanding/thinking-in-redux/glossary#middleware",target:"_blank",rel:"noopener noreferrer",children:"middleware"}),"."]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"enhancers"}),": set Redux ",(0,d.jsx)(n.a,{href:"https://redux.js.org/understanding/thinking-in-redux/glossary#store-enhancer",target:"_blank",rel:"noopener noreferrer",children:"Store enhancer"}),"."]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"plugins"}),": set Reduck plugin.",(0,d.jsx)(n.em,{children:(0,d.jsx)(n.strong,{children:"experimental API, not recommended"})}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(n.h3,{id:"return-value",children:["Return Value",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#return-value",children:"#"})]}),"\n",(0,d.jsx)(n.p,{children:"Reduck Store:"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"use"}),": mount and fetch Model objects dynamically. Usage is the same as ",(0,d.jsx)(n.a,{href:"/en/apis/app/runtime/model/use-model",children:"'useModel'"}),", but can be used outside of React components."]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"unmount"}),": unmount the Model object, and the Model State is cleared from the Store."]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"ReduxStore"}),": ",(0,d.jsx)(n.a,{href:"https://redux.js.org/tutorials/fundamentals/part-4-store#redux-store",target:"_blank",rel:"noopener noreferrer",children:"Redux Store API"}),"."]}),"\n"]}),"\n",(0,d.jsxs)(n.h2,{id:"example",children:["Example",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#example",children:"#"})]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-tsx",children:"const store = createStore();\n\nfunction load() {\n  const [, actions] = store.use(fooModel);\n\n  actions.load();\n}\n"})})]})}(t=globalThis).__RSPRESS_PAGE_META||(t.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["en%2Fapis%2Fapp%2Fruntime%2Fmodel%2Fcreate-store.mdx"]={toc:[{text:"Function Signature",id:"function-signature",depth:2},{text:"Input",id:"input",depth:3},{text:"Return Value",id:"return-value",depth:3},{text:"Example",id:"example",depth:2}],title:"createStore",frontmatter:{sidebar_position:10,title:"createStore"}};var c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,i.useMDXComponents)(),e.components).wrapper;return n?(0,d.jsx)(n,(0,o._)((0,s._)({},e),{children:(0,d.jsx)(l,(0,s._)({},e))})):l(e)}}}]);