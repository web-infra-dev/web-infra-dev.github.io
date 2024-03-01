/*! For license information please see 25442.467788f3.js.LICENSE.txt */
(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["25442"],{1353:function(e,n,s){"use strict";s.r(n);var t=s("39980"),i=s("96954");function d(e){let n=Object.assign({h1:"h1",a:"a",ul:"ul",li:"li",strong:"strong",code:"code",p:"p",h2:"h2"},(0,i.useMDXComponents)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.h1,{id:"runtimestate",children:["runtime.state",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#runtimestate",children:"#"})]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Type:"})," ",(0,t.jsx)(n.code,{children:"boolean | object"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Default:"})," ",(0,t.jsx)(n.code,{children:"false"})]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Once ",(0,t.jsx)(n.code,{children:"state"})," is enabled, you can use ",(0,t.jsx)(n.a,{href:"/guides/topic-detail/model/quick-start",children:"Model"})," for state management."]}),"\n",(0,t.jsx)(n.p,{children:"The specific configuration options are as follows:"}),"\n",(0,t.jsxs)(n.h2,{id:"models",children:["models",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#models",children:"#"})]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Type:"})," ",(0,t.jsx)(n.code,{children:"Array<Model>"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Default:"})," ",(0,t.jsx)(n.code,{children:"[]"})]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Register model objects that are mounted in advance, and these models will be mounted immediately after the Reduck store is created. Generally, there is no need to mount in advance."}),"\n",(0,t.jsxs)(n.h2,{id:"initialstate",children:["initialState",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#initialstate",children:"#"})]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Type:"})," ",(0,t.jsx)(n.code,{children:"Object"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Default:"})," ",(0,t.jsx)(n.code,{children:"{}"})]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Used to set the initial state of the global store. Generally used for SSR to initialize data during the hydration phase."}),"\n",(0,t.jsxs)(n.h2,{id:"immer",children:["immer",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#immer",children:"#"})]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Type:"})," ",(0,t.jsx)(n.code,{children:"boolean"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Default:"})," ",(0,t.jsx)(n.code,{children:"true"})]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Whether to enable to update the state with mutable, it is enabled by default, and set to ",(0,t.jsx)(n.code,{children:"false"})," if you want to disable it."]}),"\n",(0,t.jsxs)(n.h2,{id:"effects",children:["effects",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#effects",children:"#"})]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Type:"})," ",(0,t.jsx)(n.code,{children:"boolean"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Default:"})," ",(0,t.jsx)(n.code,{children:"true"})]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Whether to enable the side effect management feature, it is enabled by default, and set to ",(0,t.jsx)(n.code,{children:"false"})," if you want to disable it."]}),"\n",(0,t.jsxs)(n.h2,{id:"autoactions",children:["autoActions",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#autoactions",children:"#"})]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Type:"})," ",(0,t.jsx)(n.code,{children:"boolean"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Default:"})," ",(0,t.jsx)(n.code,{children:"true"})]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Whether to enable the auto-generated actions feature, it is enabled by default, and set to ",(0,t.jsx)(n.code,{children:"false"})," if you want to disable it."]}),"\n",(0,t.jsxs)(n.h2,{id:"devtools",children:["devtools",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#devtools",children:"#"})]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Type:"})," ",(0,t.jsx)(n.code,{children:"boolean | EnhancerOptions"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Default:"})," ",(0,t.jsx)(n.code,{children:"true"})]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Whether to enable devtools, it is enabled by default, and all parameters of ",(0,t.jsx)(n.a,{href:"https://github.com/zalmoxisus/redux-devtools-extension/blob/master/docs/API/Arguments.md",target:"_blank",rel:"noopener noreferrer",children:"redux-devtools-extension"})," are supported at the same time. If you want to disable it, set it to ",(0,t.jsx)(n.code,{children:"false"}),"."]})]})}function r(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,i.useMDXComponents)(),e.components);return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}n.default=r,r.__RSPRESS_PAGE_META={},r.__RSPRESS_PAGE_META["en%2Fconfigure%2Fapp%2Fruntime%2Fstate.mdx"]={toc:[{text:"models",id:"models",depth:2},{text:"initialState",id:"initialstate",depth:2},{text:"immer",id:"immer",depth:2},{text:"effects",id:"effects",depth:2},{text:"autoActions",id:"autoactions",depth:2},{text:"devtools",id:"devtools",depth:2}],title:"runtime.state",frontmatter:{sidebar_label:"state"}}}}]);