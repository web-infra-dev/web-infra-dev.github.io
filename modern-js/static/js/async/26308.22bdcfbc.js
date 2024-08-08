"use strict";(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["26308"],{22842:function(e,n,t){t.r(n),t.d(n,{default:function(){return d}});var s=t(38093),r=t(75878);function i(e){let n=Object.assign({h1:"h1",a:"a",div:"div",p:"p",code:"code",pre:"pre",h2:"h2",h3:"h3",ul:"ul",li:"li"},(0,r.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h1,{id:"handleeffect",children:["handleEffect",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#handleeffect",children:"#"})]}),"\n",(0,s.jsxs)(n.div,{className:"rspress-directive info",children:[(0,s.jsx)(n.div,{className:"rspress-directive-title",children:"information"}),(0,s.jsxs)(n.div,{className:"rspress-directive-content",children:[(0,s.jsxs)(n.p,{children:["By default, the export package name for all APIs in this section is: ",(0,s.jsx)(n.code,{children:"@modern-js/runtime/model"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["If Reduck is integrated separately from Modern.js, the export package name is: ",(0,s.jsx)(n.code,{children:"@modern-js-reduck/react"}),"."]}),"\n"]})]}),"\n",(0,s.jsx)(n.p,{children:"An asynchronous function type Effect usually has three states that need to be processed: in request, request successful, and request failed. The way to handle these states is to write the Action functions (pending, fulfilled, rejected)."}),"\n",(0,s.jsxs)(n.p,{children:["With the help of the ",(0,s.jsx)(n.code,{children:"handleEffect"})," API, we can generate default Action functions to handle different results at each stage of an asynchronous request. The structure of the State returned by the Action generated by ",(0,s.jsx)(n.code,{children:"handleEffect"})," is as follows:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"interface State {\n  result: any; // result of fulfilled state\n  pending: boolean; // request is pending\n  error: string; // request error message\n}\n"})}),"\n",(0,s.jsxs)(n.h2,{id:"function-signature",children:["Function Signature",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#function-signature",children:"#"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"interface EffectActions {\n  pending: Action;\n  fulfilled: Action;\n  rejected: Action;\n}\n\ninterface Config {\n  ns?: string;\n  result?: string | false;\n  error?: string | false;\n  pending?: string | false;\n  combineMode?: 'merge' | 'replace';\n  omitResultNamespace?: boolean;\n}\n\nfunction handleEffect(config: Config): EffectActions;\n"})}),"\n",(0,s.jsxs)(n.h3,{id:"input",children:["Input",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#input",children:"#"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"ns"}),": the default returned State structure is flat, By setting this parameter, the returned State can be mounted under the field named by the ",(0,s.jsx)(n.code,{children:"ns"}),". For example, if ",(0,s.jsx)(n.code,{children:"ns"})," is set to ",(0,s.jsx)(n.code,{children:'"data"'}),", the returned structure is:"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"interface State {\n  data: {\n    pending: boolean;\n    result: any;\n    error: string;\n  };\n}\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"result"}),': the default value is "result". This parameter corresponds to the field name that stores the fulfilled state results. For example, set ',(0,s.jsx)(n.code,{children:"result"})," to ",(0,s.jsx)(n.code,{children:'"items"'}),", the returned State structure is:"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"interface State {\n  items: any; // Default result -> items\n  pending: boolean;\n  error: string;\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["if ",(0,s.jsx)(n.code,{children:"result"})," is ",(0,s.jsx)(n.code,{children:"false"}),", then returned State has no ",(0,s.jsx)(n.code,{children:"result"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"interface State {\n  pending: boolean;\n  error: string;\n}\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"pending"}),": the default value is ",(0,s.jsx)(n.code,{children:'"pending"'}),". Change the name of the ",(0,s.jsx)(n.code,{children:"pending"})," field in the returned State. Usage is the same as ",(0,s.jsx)(n.code,{children:"result"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"error"}),": the default value is ",(0,s.jsx)(n.code,{children:'"error"'}),". Change the name of the ",(0,s.jsx)(n.code,{children:"error"})," field in the returned State. Usage is the same as ",(0,s.jsx)(n.code,{children:"result"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"combineMode"}),": the default value is ",(0,s.jsx)(n.code,{children:'"merge"'}),". Get fulfilled state results. There are two ways to deal with it (The data types that can be automatically processed here are also limited to simple object or array types):"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:'"merge"'}),": the previous data is merged with the current data. the data is an array type, operation is similar to ",(0,s.jsx)(n.code,{children:"[].concat(lastData, currentData)"}),". the data is an object, operation is similar to ",(0,s.jsx)(n.code,{children:"{...lastData, ...curData}"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:'"replace"'}),": the current data directly replaces the previous data."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"omitResultNamespace"}),": the default value is ",(0,s.jsx)(n.code,{children:"false"}),'. When the result is an object type, you want to mount the result directly on the State of the Model, rather than on "result", you can set it to true. For example:']}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"// the result: {user: 'xx', email: 'xx'},\n// config handleEffect({ omitResultNamespace: true })\n// get State like follows:\n{\n  user: 'xx',\n  email: 'xx',\n  pending: false,\n  error: null,\n}\n"})}),"\n",(0,s.jsxs)(n.h3,{id:"return-type",children:["Return Type",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#return-type",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"Objects are processed by actions in pending, fulfilled, and rejected states."}),"\n",(0,s.jsxs)(n.div,{className:"rspress-directive info",children:[(0,s.jsx)(n.div,{className:"rspress-directive-title",children:"More"}),(0,s.jsxs)(n.div,{className:"rspress-directive-content",children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/guides/topic-detail/model/manage-effects",children:"Manage Effect"}),"."]}),"\n"]})]})]})}function a(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(i,{...e})}):i(e)}let d=a;a.__RSPRESS_PAGE_META={},a.__RSPRESS_PAGE_META["en%2Fapis%2Fapp%2Fruntime%2Fmodel%2Fhandle-effect.mdx"]={toc:[{text:"Function Signature",id:"function-signature",depth:2},{text:"Input",id:"input",depth:3},{text:"Return Type",id:"return-type",depth:3}],title:"handleEffect",frontmatter:{sidebar_position:7,title:"handleEffect"}}}}]);