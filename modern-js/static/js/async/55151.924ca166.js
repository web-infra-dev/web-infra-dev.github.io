(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["55151"],{3879:function(n,e,s){"use strict";s.r(e),s.d(e,{default:function(){return o},frontmatter:function(){return h}});var t=s("15169"),i=s("43932"),c=s("9880"),d=s("23169"),r=s("84269");function a(n){var e=Object.assign({h1:"h1",a:"a",p:"p",div:"div",code:"code",h2:"h2",h3:"h3",pre:"pre",ul:"ul",li:"li"},(0,d.useMDXComponents)(),n.components);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(e.h1,{id:"auto-actions",children:["Auto actions",(0,c.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#auto-actions",children:"#"})]}),"\n","\n",(0,c.jsx)(r.default,{}),"\n",(0,c.jsx)(e.p,{children:"Reduck \u53EF\u4EE5\u6839\u636E State \u7684\u7C7B\u578B\uFF0C\u81EA\u52A8\u751F\u6210\u76F8\u5E94\u7684 Actions\uFF0C\u4E3A\u4FEE\u6539 State \u63D0\u4F9B\u4FBF\u5229\u3002"}),"\n",(0,c.jsxs)(e.div,{className:"rspress-directive tip",children:[(0,c.jsx)(e.div,{className:"rspress-directive-title",children:"\u63D0\u793A"}),(0,c.jsxs)(e.div,{className:"rspress-directive-content",children:[(0,c.jsxs)(e.p,{children:["\u53EF\u901A\u8FC7 ",(0,c.jsx)(e.a,{href:"/configure/app/runtime/state#autoactions",children:(0,c.jsx)(e.code,{children:"runtime.state.autoActions"})})," \u5173\u95ED auto actions \u529F\u80FD\u3002"]}),"\n"]})]}),"\n",(0,c.jsxs)(e.h2,{id:"\u793A\u4F8B",children:["\u793A\u4F8B",(0,c.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#\u793A\u4F8B",children:"#"})]}),"\n",(0,c.jsxs)(e.h3,{id:"\u57FA\u7840\u6570\u636E\u7C7B\u578B",children:["\u57FA\u7840\u6570\u636E\u7C7B\u578B",(0,c.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#\u57FA\u7840\u6570\u636E\u7C7B\u578B",children:"#"})]}),"\n",(0,c.jsxs)(e.p,{children:["State \u7C7B\u578B\u4E3A ",(0,c.jsx)(e.code,{children:"string"}),"\u3001",(0,c.jsx)(e.code,{children:"number"}),"\u3001",(0,c.jsx)(e.code,{children:"boolean"}),"\u3001",(0,c.jsx)(e.code,{children:"null"})," \u65F6\uFF0C\u751F\u6210 ",(0,c.jsx)(e.code,{children:"setState"})," Action\u3002"]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-tsx",meta:'title="\u793A\u4F8B"',children:"const fooModel = model('foo').define({\n  state: 1,\n});\n\nfunction App() {\n  const [state, actions] = useModel(fooModel);\n\n  return (\n    <div>\n      <div>State: {state}</div>\n      <button\n        type=\"button\"\n        onClick={() => {\n          // \u8C03\u7528\u81EA\u52A8\u751F\u6210\u7684 setState Action\n          actions.setState(state + 1);\n        }}\n      >\n        add\n      </button>\n    </div>\n  );\n}\n"})}),"\n",(0,c.jsxs)(e.h3,{id:"\u6570\u7EC4-array",children:["\u6570\u7EC4 Array",(0,c.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#\u6570\u7EC4-array",children:"#"})]}),"\n",(0,c.jsx)(e.p,{children:"State \u7C7B\u578B\u4E3A Array \u65F6\uFF0C\u751F\u6210\u4E0B\u5217 Actions\uFF1A"}),"\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)(e.code,{children:"push"}),"\uFF1A\u5C06\u4E00\u4E2A\u6216\u591A\u4E2A\u5143\u7D20\u6DFB\u52A0\u5230\u6570\u7EC4\u7684\u672B\u5C3E\u3002"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)(e.code,{children:"pop"}),"\uFF1A\u4ECE\u6570\u7EC4\u4E2D\u5220\u9664\u6700\u540E\u4E00\u4E2A\u5143\u7D20\u3002"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)(e.code,{children:"shift"}),"\uFF1A\u4ECE\u6570\u7EC4\u4E2D\u5220\u9664\u7B2C\u4E00\u4E2A\u5143\u7D20\u3002"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)(e.code,{children:"unshift"}),"\uFF1A\u5C06\u4E00\u4E2A\u6216\u591A\u4E2A\u5143\u7D20\u6DFB\u52A0\u5230\u6570\u7EC4\u7684\u5F00\u5934\u3002","\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsxs)(e.li,{children:["\u8BED\u6CD5\uFF1A",(0,c.jsx)(e.code,{children:"arr.unshift(element1, ..., elementN)"})]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)(e.code,{children:"elementN"}),"\uFF1A\u8981\u6DFB\u52A0\u5230\u6570\u7EC4\u5F00\u5934\u7684\u5143\u7D20\u6216\u591A\u4E2A\u5143\u7D20\u3002"]}),"\n"]}),"\n"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)(e.code,{children:"filter"}),"\uFF1A\u8FC7\u6EE4\u5143\u7D20\u3002"]}),"\n"]}),"\n","\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)(e.code,{children:"concat"}),"\uFF1A\u62FC\u63A5\u6570\u7EC4\u3002"]}),"\n"]}),"\n","\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)(e.code,{children:"splice"}),"\uFF1A\u901A\u8FC7\u5220\u9664\u6216\u66FF\u6362\u73B0\u6709\u5143\u7D20\u6216\u8005\u539F\u5730\u6DFB\u52A0\u65B0\u7684\u5143\u7D20\u6765\u4FEE\u6539\u6570\u7EC4\uFF0C\u5E76\u4EE5\u6570\u7EC4\u5F62\u5F0F\u8FD4\u56DE\u4FEE\u6539\u540E\u7684\u6570\u7EC4\uFF08\u6CE8\u610F\u548C\u539F\u751F ",(0,c.jsx)(e.code,{children:"splice"})," \u8FD4\u56DE\u503C\u4E0D\u540C\uFF09\u3002","\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsxs)(e.li,{children:["\u8BED\u6CD5\uFF1A",(0,c.jsx)(e.code,{children:"splice(start[, deleteCount[, item1[, item2[, ...]]]])"})]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)(e.code,{children:"start"}),"\uFF1A\u6307\u5B9A\u4FEE\u6539\u7684\u5F00\u59CB\u4F4D\u7F6E\uFF08\u4ECE 0 \u8BA1\u6570\uFF09\u3002"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)(e.code,{children:"deleteCount"}),"\uFF1A\u53EF\u9009\uFF0C\u6574\u6570\uFF0C\u8868\u793A\u8981\u79FB\u9664\u7684\u6570\u7EC4\u5143\u7D20\u7684\u4E2A\u6570\u3002"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)(e.code,{children:"item, item2, ..."}),"\uFF1A\u53EF\u9009\uFF0C\u8981\u6DFB\u52A0\u8FDB\u6570\u7EC4\u7684\u5143\u7D20\uFF0C\u4ECE start \u4F4D\u7F6E\u5F00\u59CB\u3002\u5982\u679C\u4E0D\u6307\u5B9A\uFF0C\u5219 ",(0,c.jsx)(e.code,{children:"splice"})," \u5C06\u53EA\u5220\u9664\u6570\u7EC4\u5143\u7D20\u3002"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-tsx",meta:'title="\u793A\u4F8B"',children:"const fooModel = model('foo').define({\n  state: [1, 2, 3],\n});\n\nfunction App() {\n  const [state, actions] = useModel(fooModel);\n\n  useEffect(() => {\n    actions.push(4);\n    actions.pop();\n    actions.shift(0);\n    actions.unshift();\n    actions.filter(val => val <= 2);\n    actions.splice(0, 1, 1, 2);\n  }, []);\n\n  return (\n    <div>\n      <div>State: {state}</div>\n    </div>\n  );\n}\n"})}),"\n",(0,c.jsxs)(e.h3,{id:"\u7B80\u5355\u5BF9\u8C61-plainobject",children:["\u7B80\u5355\u5BF9\u8C61 PlainObject",(0,c.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#\u7B80\u5355\u5BF9\u8C61-plainobject",children:"#"})]}),"\n",(0,c.jsxs)(e.p,{children:["State \u7C7B\u578B\u4E3A PlainObject \u65F6\uFF0C\u6839\u636E State \u5305\u542B\u7684\u5C5E\u6027\u540D\uFF0C\u751F\u6210 ",(0,c.jsx)(e.code,{children:"set${key}"}),"\uFF08\u5C0F\u9A7C\u5CF0\u547D\u540D\uFF09Actions\u3002"]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-tsx",meta:'title="\u793A\u4F8B"',children:"const fooModel = model('foo').define({\n  state: {\n    a: 1,\n    b: { value: 1 },\n    c: 'c',\n  },\n});\n\nfunction App() {\n  const [state, actions] = useModel(fooModel);\n\n  useEffect(() => {\n    actions.setA(2);\n    actions.setB({ value: 2 });\n    actions.setC('d');\n  }, []);\n\n  return (\n    <div>\n      <div>State: {state}</div>\n    </div>\n  );\n}\n"})})]})}function l(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=Object.assign({},(0,d.useMDXComponents)(),n.components).wrapper;return e?(0,c.jsx)(e,(0,i._)((0,t._)({},n),{children:(0,c.jsx)(a,(0,t._)({},n))})):a(n)}var o=l;l.__RSPRESS_PAGE_META={},l.__RSPRESS_PAGE_META["zh%2Fapis%2Fapp%2Fruntime%2Fmodel%2Fauto-actions.mdx"]={toc:[{text:"\u793A\u4F8B",id:"\u793A\u4F8B",depth:2},{text:"\u57FA\u7840\u6570\u636E\u7C7B\u578B",id:"\u57FA\u7840\u6570\u636E\u7C7B\u578B",depth:3},{text:"\u6570\u7EC4 Array",id:"\u6570\u7EC4-array",depth:3},{text:"\u7B80\u5355\u5BF9\u8C61 PlainObject",id:"\u7B80\u5355\u5BF9\u8C61-plainobject",depth:3}],title:"Auto actions"};var h={sidebar_position:6,title:"Auto actions"}}}]);