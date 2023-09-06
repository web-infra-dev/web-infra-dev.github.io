(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_en_apis_app_runtime_model_auto-actions_mdx"],{92521:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return l}});var i,s=t("15169"),a=t("43932"),r=t("9880"),o=t("23169"),c=t("76906");function d(e){var n=Object.assign({h1:"h1",a:"a",p:"p",div:"div",code:"code",h2:"h2",h3:"h3",pre:"pre",ul:"ul",li:"li"},(0,o.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"auto-actions",children:["Auto actions",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#auto-actions",children:"#"})]}),"\n","\n",(0,r.jsx)(c.default,{}),"\n",(0,r.jsx)(n.p,{children:"Reduck can automatically generate Actions according to the type of State, for easy to modify State."}),"\n",(0,r.jsxs)(n.div,{className:"modern-directive tip",children:[(0,r.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,r.jsxs)(n.div,{className:"modern-directive-content",children:[(0,r.jsxs)(n.p,{children:["can use ",(0,r.jsx)(n.a,{href:"/configure/app/runtime/state#autoactions",children:(0,r.jsx)(n.code,{children:"runtime.state.autoActions"})})," close auto actions feature."]}),"\n"]})]}),"\n",(0,r.jsxs)(n.h2,{id:"example",children:["Example",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#example",children:"#"})]}),"\n",(0,r.jsxs)(n.h3,{id:"basic-data-type",children:["Basic Data Type",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#basic-data-type",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["State type in ",(0,r.jsx)(n.code,{children:"string"}),"、",(0,r.jsx)(n.code,{children:"number"}),"、",(0,r.jsx)(n.code,{children:"boolean"}),"、",(0,r.jsx)(n.code,{children:"null"}),", generate ",(0,r.jsx)(n.code,{children:"setState"})," Action."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",meta:'title="example"',children:"const fooModel = model('foo').define({\n  state: 1,\n});\n\nfunction App() {\n  const [state, actions] = useModel(fooModel);\n\n  return (\n    <div>\n      <div>State: {state}</div>\n      <button\n        type=\"button\"\n        onClick={() => {\n          // call auto generate setState Action\n          actions.setState(state + 1);\n        }}\n      >\n        add\n      </button>\n    </div>\n  );\n}\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"array",children:["Array",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#array",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"State type is Array, generate the following Actions:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"push"}),": adds one or more elements to the end of the array."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"pop"}),": removes the last element from the array."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"shift"}),": removes the first element from the array."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"unshift"}),": adds one or more elements to the beginning of the array.","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["usage: ",(0,r.jsx)(n.code,{children:"arr.unshift(element1, ..., elementN)"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"elementN"}),": the element or elements to add to the beginning of the array."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"filter"}),": filter element."]}),"\n"]}),"\n","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"concat"}),": concat array."]}),"\n"]}),"\n","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"splice"}),": modify the array by deleting or replacing existing elements or adding new elements in place, and return the modified array(Note that it is different from the native ",(0,r.jsx)(n.code,{children:"splice"})," return value).","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["usage: ",(0,r.jsx)(n.code,{children:"splice(start[, deleteCount[, item1[, item2[, ...]]]])"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"start"}),": specifies the start position of the modification(counting from 0)."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"deleteCount"}),": an integer representing the number of array elements to remove."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"item, item2, ..."}),": The elements to add to the array, starting at the start position. If not specified, ",(0,r.jsx)(n.code,{children:"splice"})," will only delete array elements."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",meta:'title="example"',children:"const fooModel = model('foo').define({\n  state: [1, 2, 3],\n});\n\nfunction App() {\n  const [state, actions] = useModel(fooModel);\n\n  useEffect(() => {\n    actions.push(4);\n    actions.pop();\n    actions.shift(0);\n    actions.unshift();\n    actions.filter(val => val <= 2);\n    actions.splice(0, 1, 1, 2);\n  }, []);\n\n  return (\n    <div>\n      <div>State: {state}</div>\n    </div>\n  );\n}\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"plainobject",children:["PlainObject",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#plainobject",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["State type is PlainObject, base on the names contained in State, generate ",(0,r.jsx)(n.code,{children:"set${key}"}),"(Camel-Case) Actions."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",meta:'title="example"',children:"const fooModel = model('foo').define({\n  state: {\n    a: 1,\n    b: { value: 1 },\n    c: 'c',\n  },\n});\n\nfunction App() {\n  const [state, actions] = useModel(fooModel);\n\n  useEffect(() => {\n    actions.setA(2);\n    actions.setB({ value: 2 });\n    actions.setC('d');\n  }, []);\n\n  return (\n    <div>\n      <div>State: {state}</div>\n    </div>\n  );\n}\n"})})]})}(i=globalThis).__RSPRESS_PAGE_META||(i.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["en%2Fapis%2Fapp%2Fruntime%2Fmodel%2Fauto-actions.mdx"]={toc:[{text:"Example",id:"example",depth:2},{text:"Basic Data Type",id:"basic-data-type",depth:3},{text:"Array",id:"array",depth:3},{text:"PlainObject",id:"plainobject",depth:3}],title:"Auto actions",frontmatter:{sidebar_position:6,title:"Auto actions"}};var l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,o.useMDXComponents)(),e.components).wrapper;return n?(0,r.jsx)(n,(0,a._)((0,s._)({},e),{children:(0,r.jsx)(d,(0,s._)({},e))})):d(e)}}}]);