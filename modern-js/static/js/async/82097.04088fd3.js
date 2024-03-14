/*! For license information please see 82097.04088fd3.js.LICENSE.txt */
(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["82097"],{77961:function(e,s,n){"use strict";n.r(s);var r=n("39980"),i=n("96954");function d(e){let s=Object.assign({h1:"h1",a:"a",ul:"ul",li:"li",strong:"strong",code:"code",p:"p",h2:"h2"},(0,i.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.h1,{id:"runtimestate",children:["runtime.state",(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#runtimestate",children:"#"})]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"\u7C7B\u578B\uFF1A"})," ",(0,r.jsx)(s.code,{children:"boolean | object"})]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"\u9ED8\u8BA4\u503C\uFF1A"})," ",(0,r.jsx)(s.code,{children:"false"})]}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:["\u5F00\u542F ",(0,r.jsx)(s.code,{children:"state"})," \u540E\u5C31\u53EF\u4EE5\u4F7F\u7528 ",(0,r.jsx)(s.a,{href:"/guides/topic-detail/model/quick-start",children:"Model"})," \u6765\u505A\u72B6\u6001\u7BA1\u7406\u3002"]}),"\n",(0,r.jsx)(s.p,{children:"\u5177\u4F53\u914D\u7F6E\u9879\u5982\u4E0B\uFF1A"}),"\n",(0,r.jsxs)(s.h2,{id:"models",children:["models",(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#models",children:"#"})]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"\u7C7B\u578B\uFF1A"})," ",(0,r.jsx)(s.code,{children:"Array<Model>"})]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"\u9ED8\u8BA4\u503C\uFF1A"})," ",(0,r.jsx)(s.code,{children:"[]"})]}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:"\u6CE8\u518C\u63D0\u524D\u6302\u8F7D\u7684 model \u5BF9\u8C61\uFF0C\u8FD9\u4E9B model \u4F1A\u5728 Reduck store \u521B\u5EFA\u5B8C\u6210\u540E\u7ACB\u5373\u6267\u884C\u6302\u8F7D\u3002\u4E00\u822C\u4F7F\u7528\u65E0\u9700\u63D0\u524D\u6302\u8F7D\u3002"}),"\n",(0,r.jsxs)(s.h2,{id:"initialstate",children:["initialState",(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#initialstate",children:"#"})]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"\u7C7B\u578B\uFF1A"})," ",(0,r.jsx)(s.code,{children:"Object"})]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"\u9ED8\u8BA4\u503C\uFF1A"})," ",(0,r.jsx)(s.code,{children:"{}"})]}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:"\u7528\u4E8E\u8BBE\u7F6E\u5168\u5C40 store \u7684\u521D\u59CB\u72B6\u6001\u3002\u4E00\u822C\u7528\u4E8E SSR \u5728 hydration \u9636\u6BB5\u521D\u59CB\u5316\u6570\u636E\u3002"}),"\n",(0,r.jsxs)(s.h2,{id:"immer",children:["immer",(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#immer",children:"#"})]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"\u7C7B\u578B\uFF1A"})," ",(0,r.jsx)(s.code,{children:"boolean"})]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"\u9ED8\u8BA4\u503C\uFF1A"})," ",(0,r.jsx)(s.code,{children:"true"})]}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:["\u662F\u5426\u542F\u7528\u4EE5 mutable \u66F4\u65B0 state \u7684\u65B9\u5F0F\uFF0C\u9ED8\u8BA4\u542F\u7528\uFF0C\u82E5\u60F3\u7981\u7528\u5219\u8BBE\u7F6E\u4E3A ",(0,r.jsx)(s.code,{children:"false"}),"\u3002"]}),"\n",(0,r.jsxs)(s.h2,{id:"effects",children:["effects",(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#effects",children:"#"})]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"\u7C7B\u578B\uFF1A"})," ",(0,r.jsx)(s.code,{children:"boolean"})]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"\u9ED8\u8BA4\u503C\uFF1A"})," ",(0,r.jsx)(s.code,{children:"true"})]}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:["\u662F\u5426\u542F\u7528\u526F\u4F5C\u7528\u7BA1\u7406\u7279\u6027\uFF0C\u9ED8\u8BA4\u542F\u7528\uFF0C\u82E5\u60F3\u7981\u7528\u5219\u8BBE\u7F6E\u4E3A ",(0,r.jsx)(s.code,{children:"false"}),"\u3002"]}),"\n",(0,r.jsxs)(s.h2,{id:"autoactions",children:["autoActions",(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#autoactions",children:"#"})]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"\u7C7B\u578B\uFF1A"})," ",(0,r.jsx)(s.code,{children:"boolean"})]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"\u9ED8\u8BA4\u503C\uFF1A"})," ",(0,r.jsx)(s.code,{children:"true"})]}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:["\u662F\u5426\u542F\u7528\u81EA\u52A8\u751F\u6210 actions \u7279\u6027\uFF0C\u9ED8\u8BA4\u542F\u7528\uFF0C\u82E5\u60F3\u7981\u7528\u5219\u8BBE\u7F6E\u4E3A ",(0,r.jsx)(s.code,{children:"false"}),"\u3002"]}),"\n",(0,r.jsxs)(s.h2,{id:"devtools",children:["devtools",(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#devtools",children:"#"})]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"\u7C7B\u578B\uFF1A"})," ",(0,r.jsx)(s.code,{children:"boolean | EnhancerOptions"})]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"\u9ED8\u8BA4\u503C\uFF1A"})," ",(0,r.jsx)(s.code,{children:"true"})]}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:["\u662F\u5426\u542F\u7528 devtools\uFF0C\u9ED8\u8BA4\u542F\u7528\uFF0C\u540C\u65F6\u652F\u6301 ",(0,r.jsx)(s.a,{href:"https://github.com/zalmoxisus/redux-devtools-extension/blob/master/docs/API/Arguments.md",target:"_blank",rel:"noopener noreferrer",children:"redux-devtools-extension"})," \u7684\u6240\u6709\u53C2\u6570\uFF0C\u82E5\u60F3\u7981\u7528\u5219\u8BBE\u7F6E\u4E3A ",(0,r.jsx)(s.code,{children:"false"}),"\u3002"]})]})}function l(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:s}=Object.assign({},(0,i.useMDXComponents)(),e.components);return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}s.default=l,l.__RSPRESS_PAGE_META={},l.__RSPRESS_PAGE_META["zh%2Fconfigure%2Fapp%2Fruntime%2Fstate.mdx"]={toc:[{text:"models",id:"models",depth:2},{text:"initialState",id:"initialstate",depth:2},{text:"immer",id:"immer",depth:2},{text:"effects",id:"effects",depth:2},{text:"autoActions",id:"autoactions",depth:2},{text:"devtools",id:"devtools",depth:2}],title:"runtime.state",frontmatter:{sidebar_label:"state"}}}}]);