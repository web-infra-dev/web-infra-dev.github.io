"use strict";(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["22243"],{57807:function(e,r,n){n.r(r),n.d(r,{default:function(){return a}});var t=n(39980),s=n(9580);function o(e){let r=Object.assign({h1:"h1",a:"a",p:"p",code:"code",pre:"pre",div:"div"},(0,s.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.h1,{id:"redux-ecosystem-integration",children:["Redux Ecosystem Integration",(0,t.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#redux-ecosystem-integration",children:"#"})]}),"\n",(0,t.jsxs)(r.p,{children:["Reduck is based on Redux, so you can use libraries from the ",(0,t.jsx)(r.a,{href:"https://redux.js.org/introduction/ecosystem",target:"_blank",rel:"noopener noreferrer",children:"Redux ecosystem"})," to enhance its functionality. APIs like ",(0,t.jsx)(r.a,{href:"/apis/app/runtime/model/Provider",children:(0,t.jsx)(r.code,{children:"Provider"})}),", ",(0,t.jsx)(r.a,{href:"/apis/app/runtime/model/create-app",children:(0,t.jsx)(r.code,{children:"createApp"})}),", and ",(0,t.jsx)(r.a,{href:"/apis/app/runtime/model/create-store",children:(0,t.jsx)(r.code,{children:"createStore"})})," allow you to configure the use of ",(0,t.jsx)(r.a,{href:"https://redux.js.org/understanding/thinking-in-redux/glossary#middleware",target:"_blank",rel:"noopener noreferrer",children:"middlewares"})," and ",(0,t.jsx)(r.a,{href:"https://redux.js.org/understanding/thinking-in-redux/glossary#store-enhancer",target:"_blank",rel:"noopener noreferrer",children:"store enhancers"}),"; and using ",(0,t.jsx)(r.a,{href:"/apis/app/runtime/model/create-store",children:(0,t.jsx)(r.code,{children:"createStore"})}),", you can take complete control over the process of creating the store."]}),"\n",(0,t.jsxs)(r.p,{children:["For example, if we want to use the middleware ",(0,t.jsx)(r.a,{href:"https://github.com/LogRocket/redux-logger",target:"_blank",rel:"noopener noreferrer",children:(0,t.jsx)(r.code,{children:"redux-logger"})}),", the example code is as follows:"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-ts",children:"ReactDOM.render(\n  <Provider config={{ middlewares: [logger] }}>\n    // Set middleware through the config parameter of Provider\n    <App />\n  </Provider>,\n  document.getElementById('root'),\n);\n"})}),"\n",(0,t.jsxs)(r.div,{className:"rspress-directive caution",children:[(0,t.jsx)(r.div,{className:"rspress-directive-title",children:"CAUTION"}),(0,t.jsx)(r.div,{className:"rspress-directive-content",children:(0,t.jsx)(r.p,{children:"Reduck is built on top of the lower-level Redux API, and abstracts away some of the underlying concepts of Redux, such as Reducers. Reduck allows models to be dynamically mounted, whereas Redux mounts all the necessary state at Store creation time. Due to these implementation differences, some libraries from the Redux ecosystem cannot be used directly in Reduck."})})]})]})}function i(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:r}=Object.assign({},(0,s.ah)(),e.components);return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}let a=i;i.__RSPRESS_PAGE_META={},i.__RSPRESS_PAGE_META["en%2Fguides%2Ftopic-detail%2Fmodel%2Fredux-integration.mdx"]={toc:[],title:"Ecosystem Integration",frontmatter:{sidebar_position:11,title:"Ecosystem Integration"}}}}]);