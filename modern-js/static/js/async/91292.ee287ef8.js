/*! For license information please see 91292.ee287ef8.js.LICENSE.txt */
(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["91292"],{32480:function(e,t,n){"use strict";n.r(t);var s=n("39980"),o=n("9580");function r(e){let t=Object.assign({h1:"h1",a:"a",p:"p",code:"code",pre:"pre",div:"div"},(0,o.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.h1,{id:"test-model",children:["Test Model",(0,s.jsx)(t.a,{className:"header-anchor","aria-hidden":"true",href:"#test-model",children:"#"})]}),"\n",(0,s.jsxs)(t.p,{children:["Testing is crucial for the stability of code. Here's an example using the ",(0,s.jsx)(t.code,{children:"countModel"})," from ",(0,s.jsx)(t.a,{href:"/guides/topic-detail/model/quick-start",children:"Quick Start"})," to demonstrate how to perform unit testing on a Model in Modern.js."]}),"\n",(0,s.jsxs)(t.p,{children:["To use the testing feature, you need to first enable it. In the project root directory, execute ",(0,s.jsx)(t.code,{children:"pnpm run new"})," and make the following selection:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:'? Please select the operation you want to perform: Enable optional features\n? Enable optional features Enable "Unit Testing / Integration Testing" feature\n'})}),"\n",(0,s.jsx)(t.p,{children:"This will enable testing feature support."}),"\n",(0,s.jsxs)(t.p,{children:["Create a new file called ",(0,s.jsx)(t.code,{children:"count.test.ts"})," with the following code:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:"import { createStore } from '@modern-js/runtime/testing';\nimport countModel from './count';\n\ndescribe('test model', () => {\n  it('count value should plus one after add', () => {\n    const store = createStore();\n    const [state, { add }] = store.use(countModel);\n\n    expect(state).toEqual({ value: 1 });\n\n    add();\n\n    expect(store.use(countModel)[0]).toEqual({ value: 2 });\n  });\n});\n"})}),"\n",(0,s.jsxs)(t.div,{className:"rspress-directive info",children:[(0,s.jsx)(t.div,{className:"rspress-directive-title",children:"INFO"}),(0,s.jsxs)(t.div,{className:"rspress-directive-content",children:[(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.a,{href:"/apis/app/runtime/model/create-store",children:(0,s.jsx)(t.code,{children:"createStore"})})," used here is imported from ",(0,s.jsx)(t.code,{children:"@modern-js/runtime/testing"}),", which internally uses the configuration of ",(0,s.jsx)(t.a,{href:"/configure/app/runtime/state",children:(0,s.jsx)(t.code,{children:"runtime.state"})})," to create a ",(0,s.jsx)(t.code,{children:"store"}),"."]}),"\n"]})]}),"\n",(0,s.jsxs)(t.p,{children:["In the test case, we create a new ",(0,s.jsx)(t.code,{children:"store"})," to mount ",(0,s.jsx)(t.code,{children:"countModel"}),", use ",(0,s.jsx)(t.code,{children:"store.use"})," to get the State and Actions of ",(0,s.jsx)(t.code,{children:"countModel"}),". Then, we call the ",(0,s.jsx)(t.code,{children:"add"})," Action to update the state and assert the updated state value."]}),"\n",(0,s.jsxs)(t.p,{children:["Execute the ",(0,s.jsx)(t.code,{children:"pnpm run test"})," command to trigger the execution of the test case."]})]})}function i(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:t}=Object.assign({},(0,o.ah)(),e.components);return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(r,{...e})}):r(e)}t.default=i,i.__RSPRESS_PAGE_META={},i.__RSPRESS_PAGE_META["en%2Fguides%2Ftopic-detail%2Fmodel%2Ftest-model.mdx"]={toc:[],title:"Test Model",frontmatter:{sidebar_position:9,title:"Test Model"}}}}]);