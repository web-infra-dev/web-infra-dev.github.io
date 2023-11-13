(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["51653"],{33837:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return a}});var s=r("9880"),t=r("23169"),o=r("48673");function i(e){let n=Object.assign({h1:"h1",a:"a",p:"p",code:"code",div:"div",h2:"h2",pre:"pre",h3:"h3",ul:"ul",li:"li"},(0,t.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h1,{id:"createapp",children:["createApp",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#createapp",children:"#"})]}),"\n","\n",(0,s.jsx)(o.default,{}),"\n",(0,s.jsxs)(n.p,{children:["Reduck will call ",(0,s.jsx)(n.code,{children:"createApp"})," to create a global application by default. If the entire application only needs one Store, then there is no need to call ",(0,s.jsx)(n.code,{children:"createApp"})," manually.Only need to use ",(0,s.jsx)(n.code,{children:"createApp"})," when you need to create a Store locally in the app."]}),"\n",(0,s.jsxs)(n.div,{className:"rspress-directive caution",children:[(0,s.jsx)(n.div,{className:"rspress-directive-title",children:"CAUTION"}),(0,s.jsxs)(n.div,{className:"rspress-directive-content",children:[(0,s.jsxs)(n.p,{children:["Note that the exported ",(0,s.jsx)(n.code,{children:"createApp"})," in ",(0,s.jsx)(n.code,{children:"@modern-js/runtime/model"})," is used to manage state, while the exported ",(0,s.jsx)(n.code,{children:"createApp"})," in ",(0,s.jsx)(n.code,{children:"@modern-js/runtime"})," is used to create the entire application. The two are differently."]}),"\n"]})]}),"\n",(0,s.jsxs)(n.h2,{id:"function-signature",children:["Function Signature",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#function-signature",children:"#"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"interface AppConfig extends StoreConfig {\n  devTools?: boolean | DevToolsOptions;\n  autoActions?: boolean;\n}\n\nfunction createApp(config: AppConfig): object;\n"})}),"\n",(0,s.jsxs)(n.h3,{id:"input",children:["Input",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#input",children:"#"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"config"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"StoreConfig"}),": the same as ",(0,s.jsx)(n.a,{href:"/en/apis/app/runtime/model/create-store",children:(0,s.jsx)(n.code,{children:"createStore"})})," params."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"devTools"}),": the default value is ",(0,s.jsx)(n.code,{children:"true"}),". when it is an object type, configuring ",(0,s.jsx)(n.a,{href:"https://github.com/reduxjs/redux-devtools/blob/main/extension/docs/API/Arguments.md",target:"_blank",rel:"noopener noreferrer",children:"Options"})," of Redux DevTools."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"autoActions"}),": the default value is ",(0,s.jsx)(n.code,{children:"true"}),".if ",(0,s.jsx)(n.a,{href:"/en/apis/app/runtime/model/auto-actions",children:"auto generate Actions"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.h3,{id:"return-value",children:["Return Value",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#return-value",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"Reduck App, consists of the following properties:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Provider"}),": inject shared Store into locally component tree, same as ",(0,s.jsx)(n.a,{href:"/en/apis/app/runtime/model/Provider",children:(0,s.jsx)(n.code,{children:"Provider"})}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"useModel"}),": get the Model mounted by the app's local Store, same as ",(0,s.jsx)(n.a,{href:"/en/apis/app/runtime/model/use-model",children:(0,s.jsx)(n.code,{children:"useModel"})}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"useStaticModel"}),": get the Model mounted by the app's local Store. same as ",(0,s.jsx)(n.a,{href:"/en/apis/app/runtime/model/use-static-model",children:(0,s.jsx)(n.code,{children:"useStaticModel"})}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"useLocalModel"}),": get the Model mounted by the app's local Store. same as ",(0,s.jsx)(n.a,{href:"/en/apis/app/runtime/model/use-local-model",children:(0,s.jsx)(n.code,{children:"useLocalModel"})}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"useStore"}),": get the Store used locally by the app. same as ",(0,s.jsx)(n.a,{href:"/en/apis/app/runtime/model/use-store",children:(0,s.jsx)(n.code,{children:"useStore"})}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.h2,{id:"example",children:["Example",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#example",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["use ",(0,s.jsx)(n.code,{children:"createApp"}),", local states can be created to isolate the states between different Reduck applications."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:"const { Provider: LocalFooProvider, useModel: useLocalFooModel } = createApp();\nconst { Provider: LocalBarProvider, useModel: useLocalBarModel } = createApp();\n\nfunction Foo() {\n  const [fooState] = useLocalFooModel(fooModel);\n  const [barState] = useLocalBarModel(fooModel);\n\n  return (\n    <div>\n      <div>Foo: {fooState}</div>\n      <div>Bar: {barState}</div>\n    </div>\n  );\n}\n\nfunction Container() {\n  return (\n    <LocalFooProvider>\n      <LocalBarProvider>\n        <Foo />\n      </LocalBarProvider>\n    </LocalFooProvider>\n  );\n}\n"})})]})}function d(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,t.useMDXComponents)(),e.components);return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(i,{...e})}):i(e)}var a=d;d.__RSPRESS_PAGE_META={},d.__RSPRESS_PAGE_META["en%2Fapis%2Fapp%2Fruntime%2Fmodel%2Fcreate-app.mdx"]={toc:[{text:"Function Signature",id:"function-signature",depth:2},{text:"Input",id:"input",depth:3},{text:"Return Value",id:"return-value",depth:3},{text:"Example",id:"example",depth:2}],title:"createApp",frontmatter:{sidebar_position:11,title:"createApp"}}},48673:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return d}});var s=r("9880"),t=r("23169");function o(e){let n=Object.assign({div:"div",p:"p",code:"code"},(0,t.useMDXComponents)(),e.components);return(0,s.jsxs)(n.div,{className:"rspress-directive info",children:[(0,s.jsx)(n.div,{className:"rspress-directive-title",children:"information"}),(0,s.jsxs)(n.div,{className:"rspress-directive-content",children:[(0,s.jsxs)(n.p,{children:["By default, the export package name for all APIs in this section is: ",(0,s.jsx)(n.code,{children:"@modern-js/runtime/model"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["If Reduck is integrated separately from Modern.js, the export package name is: ",(0,s.jsx)(n.code,{children:"@modern-js-reduck/react"}),"."]}),"\n"]})]})}function i(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,t.useMDXComponents)(),e.components);return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}var d=i;i.__RSPRESS_PAGE_META={},i.__RSPRESS_PAGE_META["en%2Fcomponents%2Freduck-tip.mdx"]={toc:[],title:"",frontmatter:{}}}}]);