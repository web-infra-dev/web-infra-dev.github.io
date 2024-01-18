/*! For license information please see 86831.3aa76bc5.js.LICENSE.txt */
(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["86831"],{72988:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return c}});var s=t("39980"),o=t("96954");function i(e){return(0,s.jsx)(s.Fragment,{})}function r(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,o.useMDXComponents)(),e.components);return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(i,{...e})}):i(e)}var c=r;r.__RSPRESS_PAGE_META={},r.__RSPRESS_PAGE_META["en%2Fcomponents%2Freduck-migration.mdx"]={toc:[],title:"",frontmatter:{}}},43170:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return d}});var s=t("39980"),o=t("96954"),i=t("72988");function r(e){let n=Object.assign({h1:"h1",a:"a",p:"p",div:"div",ol:"ol",li:"li",h2:"h2",strong:"strong",img:"img",code:"code",pre:"pre"},(0,o.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h1,{id:"quick-start",children:["Quick Start",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#quick-start",children:"#"})]}),"\n","\n",(0,s.jsx)(i.default,{}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://github.com/web-infra-dev/reduck",target:"_blank",rel:"noopener noreferrer",children:"Reduck"})," is a state management library developed by the Modern.js team that follows the MVC pattern. Its underlying state storage is based on ",(0,s.jsx)(n.a,{href:"https://redux.js.org/",target:"_blank",rel:"noopener noreferrer",children:"Redux"})," implementation, while providing a higher level of abstraction and full compatibility with the Redux ecosystem."]}),"\n",(0,s.jsx)(n.p,{children:"The goal of Reduck is to organize the development structure of React applications in the MVC pattern, maintain business logic in the Model layer, decoupling business logic from UI, making it easier for developers to focus on business logic, and reducing duplicated work (boilerplate code) through higher level of abstraction."}),"\n",(0,s.jsx)(n.p,{children:"In the MVC pattern, Reduck plays the role of M(Model), React UI Component corresponds to V(View), and gets the Model from Reduck and modifies the Model's React Container Component, which corresponds to C(View Controller/Container)."}),"\n",(0,s.jsx)(n.p,{children:"The state management solution of Modern.js is implemented through built-in Reduck. Using Reduck in Modern.js not only eliminates the manual integration process, but also allows all Reduck APIs to be imported and used directly from the Modern.js Runtime package, providing a better consistency experience."}),"\n",(0,s.jsxs)(n.div,{className:"rspress-directive info",children:[(0,s.jsx)(n.div,{className:"rspress-directive-title",children:"INFO"}),(0,s.jsxs)(n.div,{className:"rspress-directive-content",children:["\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["To use Reduck APIs in Modern.js, you need to set ",(0,s.jsx)(n.a,{href:"/configure/app/runtime/state",children:"runtime.state"})," to enable the state management plugin."]}),"\n",(0,s.jsxs)(n.li,{children:["Reduck can also be used separately as a state management library ",(0,s.jsx)(n.a,{href:"/guides/topic-detail/model/use-out-of-modernjs",children:"outside of Modern.js"}),"."]}),"\n"]}),"\n"]})]}),"\n",(0,s.jsxs)(n.h2,{id:"core-concepts",children:["Core Concepts",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#core-concepts",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"There are only four core concepts in Reduck: Model, State, Actions, and Effects."}),"\n",(0,s.jsx)(n.p,{children:"Model: Encapsulates the logic and required state of an independent module, consisting of State, Actions, and Effects."}),"\n",(0,s.jsx)(n.p,{children:"State: The state stored in the Model."}),"\n",(0,s.jsxs)(n.p,{children:["Actions: Pure functions used to modify State, functions must be ",(0,s.jsx)(n.strong,{children:"Synchronous"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Effects: Functions with side effects used to modify State, functions can be ",(0,s.jsx)(n.strong,{children:"Asynchronous"}),". Effects can call their own Actions and Effects or those of other Models."]}),"\n",(0,s.jsx)(n.p,{children:"The Reduck data flow is shown in the following figure:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/zq-uylkvT/ljhwZthlaukjlkulzlp/reduck-concept.svg",alt:"Reduck Data Flow"})}),"\n",(0,s.jsxs)(n.h2,{id:"basic-usage",children:["Basic Usage",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#basic-usage",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["Next, let's take a simple ",(0,s.jsx)(n.strong,{children:"Counter"})," application as an example to demonstrate the basic usage of Reduck."]}),"\n",(0,s.jsxs)(n.p,{children:["First, we define a Model named ",(0,s.jsx)(n.code,{children:"count"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"import { model } from '@modern-js/runtime/model';\n\nconst countModel = model('count').define({\n  state: {\n    value: 1,\n  },\n});\n\nexport default countModel;\n"})}),"\n",(0,s.jsxs)(n.p,{children:["We use the API ",(0,s.jsx)(n.code,{children:"model"})," to create ",(0,s.jsx)(n.code,{children:"countModel"}),", which currently only contains the state that stores the counter ",(0,s.jsx)(n.code,{children:"value"}),", that is, value in the code."]}),"\n",(0,s.jsx)(n.p,{children:"We define an action to increase the counter by 1:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"import { model } from '@modern-js/runtime/model';\n\nconst countModel = model('count').define({\n  state: {\n    value: 1,\n  },\n  actions: {\n    add(state) {\n      state.value += 1;\n    },\n  },\n});\n\nexport default countModel;\n"})}),"\n",(0,s.jsxs)(n.p,{children:["In the ",(0,s.jsx)(n.code,{children:"add"})," action, we can directly modify the value of the state and perform the increment operation without treating the state as an immutable object. This is because Reduck integrates ",(0,s.jsx)(n.a,{href:"https://github.com/immerjs/immer",target:"_blank",rel:"noopener noreferrer",children:"immer"}),", which can directly modify the original state object."]}),"\n",(0,s.jsx)(n.p,{children:"Next, we will demonstrate how to use the Model in a component."}),"\n",(0,s.jsxs)(n.p,{children:["Create a new component called ",(0,s.jsx)(n.code,{children:"Counter"}),", and use the ",(0,s.jsx)(n.code,{children:"countModel"})," via the ",(0,s.jsx)(n.code,{children:"useModel"})," API inside the component:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"import { useModel } from '@modern-js/runtime/model';\nimport countModel from './models/count';\n\nfunction Counter() {\n  const [state, actions] = useModel(countModel);\n\n  return (\n    <div>\n      <div>counter: {state.value}</div>\n      <button onClick={() => actions.add()}>add</button>\n    </div>\n  );\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"useModel"})," gets the ",(0,s.jsx)(n.code,{children:"state"})," and ",(0,s.jsx)(n.code,{children:"actions"})," of ",(0,s.jsx)(n.code,{children:"countModel"}),". The component displays the current value of the counter, and clicking the ",(0,s.jsx)(n.code,{children:"add"})," button increments the counter by 1."]}),"\n",(0,s.jsxs)(n.div,{className:"rspress-directive info",children:[(0,s.jsx)(n.div,{className:"rspress-directive-title",children:"INFO"}),(0,s.jsxs)(n.div,{className:"rspress-directive-content",children:[(0,s.jsxs)(n.p,{children:["Due to the simplicity of the example used here, the layering of the MVC pattern is not strictly followed. The ",(0,s.jsx)(n.code,{children:"Counter"})," component acts as both the V and C layers."]}),"\n"]})]}),"\n",(0,s.jsx)(n.p,{children:"The final demonstration effect is as follows:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/eueh7vhojuh/modern/simple-count-model.gif",alt:"countModel"})}),"\n",(0,s.jsxs)(n.p,{children:["That completes a simple counter application. You can view the complete example code for this section ",(0,s.jsx)(n.a,{href:"https://github.com/web-infra-dev/modern-js-examples/tree/main/examples/runtime-api/counter-model",target:"_blank",rel:"noopener noreferrer",children:"here"}),"."]})]})}function c(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,o.useMDXComponents)(),e.components);return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(r,{...e})}):r(e)}var d=c;c.__RSPRESS_PAGE_META={},c.__RSPRESS_PAGE_META["en%2Fguides%2Ftopic-detail%2Fmodel%2Fquick-start.mdx"]={toc:[{text:"Core Concepts",id:"core-concepts",depth:2},{text:"Basic Usage",id:"basic-usage",depth:2}],title:"Quick Start",frontmatter:{sidebar_position:1,title:"Quick Start"}}}}]);