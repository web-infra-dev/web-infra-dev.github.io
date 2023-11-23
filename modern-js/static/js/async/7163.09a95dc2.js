(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["7163"],{68206:function(e,n,o){"use strict";o.r(n),o.d(n,{default:function(){return a}});var t=o("9880"),i=o("23169");function s(e){let n=Object.assign({h1:"h1",a:"a",p:"p",code:"code",pre:"pre",div:"div",ul:"ul",li:"li"},(0,i.useMDXComponents)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.h1,{id:"define-a-model",children:["Define a Model",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#define-a-model",children:"#"})]}),"\n",(0,t.jsx)(n.p,{children:"In the previous section, we demonstrated how to create a Model for a simple counter application. In this section, we will provide a detailed introduction on how to create a Model."}),"\n",(0,t.jsxs)(n.p,{children:["We can create a Model using the ",(0,t.jsx)(n.code,{children:"model"})," API. For example, ",(0,t.jsx)(n.code,{children:"model('foo')"})," creates a Model named ",(0,t.jsx)(n.code,{children:"foo"}),". We can define the State and Actions included in the Model by calling the ",(0,t.jsx)(n.code,{children:"define"})," function returned by ",(0,t.jsx)(n.code,{children:"model('foo')"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"import { model, useModel } from '@modern-js/runtime/model';\n\nconst fooModel = model('foo').define({\n  state: {\n    value: 'foo',\n  },\n  actions: {\n    setValue: (state, payload){\n      state.value = payload\n    }\n  }\n});\n"})}),"\n",(0,t.jsxs)(n.div,{className:"rspress-directive info",children:[(0,t.jsx)(n.div,{className:"rspress-directive-title",children:"INFO"}),(0,t.jsxs)(n.div,{className:"rspress-directive-content",children:["\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Actions in the Model cannot contain side-effect logic, such as requesting HTTP interfaces, accessing localStorage, etc."}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"setValue"})," directly modifies the input State, which seems to violate the definition of a pure function. However, Reduck uses ",(0,t.jsx)(n.a,{href:"https://github.com/immerjs/immer",target:"_blank",rel:"noopener noreferrer",children:"immer"})," internally to modify immutable objects, ensuring that this approach does not affect the immutability of the object, so ",(0,t.jsx)(n.code,{children:"setValue"})," is still a pure function. Of course, you can also return a new object directly in the Action, but this approach will be more complex."]}),"\n"]}),"\n"]})]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"define"})," function only describes the original structure of the Model, including the internally defined State, Actions, and so on. The ",(0,t.jsx)(n.code,{children:"fooModel"})," returned by ",(0,t.jsx)(n.code,{children:"define"})," is the actual Model object that is created. For example, although ",(0,t.jsx)(n.code,{children:"setValue"})," has two parameters, when we call the ",(0,t.jsx)(n.code,{children:"setValue"})," Action, we only need to pass in the ",(0,t.jsx)(n.code,{children:"payload"})," parameter, because we are calling the Action method on ",(0,t.jsx)(n.code,{children:"fooModel"}),", not the one described in the original structure of the Model. For more information, please refer to ",(0,t.jsx)(n.a,{href:"/guides/topic-detail/model/use-model",children:"Using Models"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["In addition to object-type parameters, ",(0,t.jsx)(n.code,{children:"define"})," can also receive function-type parameters. For example:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"import { model, useModel } from '@modern-js/runtime/model';\n\nconst fooModel = model('foo').define((context, utils) => {\n  return {\n    state: {\n      value: 'foo',\n    },\n    actions: {\n      setValue: (state, payload){\n        state.value = payload\n      }\n    }\n  }\n});\n"})}),"\n",(0,t.jsxs)(n.p,{children:["When defining a Model using a function, the function automatically receives two parameters: ",(0,t.jsx)(n.code,{children:"context"})," and ",(0,t.jsx)(n.code,{children:"utils"}),". ",(0,t.jsx)(n.code,{children:"context"})," is the context object of Reduck, which can obtain the ",(0,t.jsx)(n.code,{children:"store"})," object, and ",(0,t.jsx)(n.code,{children:"utils"})," provides a set of utility functions to facilitate the implementation of complex features such as Model communication."]}),"\n",(0,t.jsx)(n.p,{children:"Models support duplication. For example:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"const barModel = fooModel('bar');\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"barModel"})," is a new Model object created based on ",(0,t.jsx)(n.code,{children:"fooModel"}),". Analogous to the concepts in object-oriented programming languages, ",(0,t.jsx)(n.code,{children:"barModel"})," and ",(0,t.jsx)(n.code,{children:"fooModel"})," are two instance objects created based on the same class. When the state management logic of two modules is the same, for example, two tab modules in the same page use the same data structure and logic, but the difference is that they obtain data from different interfaces, then you can create two different Model objects by duplicating the Model."]}),"\n",(0,t.jsxs)(n.div,{className:"rspress-directive info",children:[(0,t.jsx)(n.div,{className:"rspress-directive-title",children:"Additional Information"}),(0,t.jsx)(n.div,{className:"rspress-directive-content",children:(0,t.jsxs)(n.p,{children:["For detailed definitions of the APIs mentioned in this section, please refer to ",(0,t.jsx)(n.a,{href:"/apis/app/runtime/model/model_",children:"here"}),".\n"]})})]})]})}function d(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,i.useMDXComponents)(),e.components);return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(s,{...e})}):s(e)}var a=d;d.__RSPRESS_PAGE_META={},d.__RSPRESS_PAGE_META["en%2Fguides%2Ftopic-detail%2Fmodel%2Fdefine-model.mdx"]={toc:[],title:"Define a Model",frontmatter:{sidebar_position:2,title:"Define Model"}}}}]);