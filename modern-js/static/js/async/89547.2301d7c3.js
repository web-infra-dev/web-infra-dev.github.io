/*! For license information please see 89547.2301d7c3.js.LICENSE.txt */
(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["89547"],{81554:function(e,n,s){"use strict";s.r(n);var c=s("39980"),t=s("9580");function i(e){let n=Object.assign({h1:"h1",a:"a",p:"p",code:"code",ul:"ul",li:"li",h2:"h2",pre:"pre",div:"div"},(0,t.ah)(),e.components);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(n.h1,{id:"\u81EA\u52A8\u751F\u6210-actions",children:["\u81EA\u52A8\u751F\u6210 Actions",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u81EA\u52A8\u751F\u6210-actions",children:"#"})]}),"\n",(0,c.jsxs)(n.p,{children:["\u5728 ",(0,c.jsx)(n.a,{href:"/guides/topic-detail/model/quick-start",children:"\u5FEB\u901F\u4E0A\u624B"})," \u4E2D\uFF0C\u6211\u4EEC\u5B9E\u73B0\u6700\u7B80\u5355\u7684\u8BA1\u6570\u5668 Model \u4E5F\u9700\u8981 10 \u884C\u4EE3\u7801\u3002\n\u5B9E\u9645\u4E0A\uFF0CModern.js \u652F\u6301\u6839\u636E\u58F0\u660E\u7684 ",(0,c.jsx)(n.code,{children:"state"})," \u7C7B\u578B\uFF0C\u81EA\u52A8\u751F\u6210\u5E38\u7528\u7684 Actions\uFF0C\u4ECE\u800C\u7B80\u5316\u6A21\u677F\u4EE3\u7801\u91CF\u3002\u5F53\u524D\u652F\u6301\u7684\u7C7B\u578B\u6709\uFF1A"]}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:"\u539F\u59CB\u6570\u636E\u7C7B\u578B"}),"\n",(0,c.jsx)(n.li,{children:"\u6570\u7EC4\u7C7B\u578B"}),"\n",(0,c.jsx)(n.li,{children:"\u7B80\u5355\u5BF9\u8C61\u7C7B\u578B\uFF08Plain Object\uFF09"}),"\n"]}),"\n",(0,c.jsxs)(n.h2,{id:"\u539F\u59CB\u6570\u636E\u7C7B\u578B",children:["\u539F\u59CB\u6570\u636E\u7C7B\u578B",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u539F\u59CB\u6570\u636E\u7C7B\u578B",children:"#"})]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-ts",children:"const countModel = model('count').define({ state: 1 });\n"})}),"\n",(0,c.jsxs)(n.p,{children:["\u5982\u4E0A\u6211\u4EEC\u4EC5\u7528\u4E00\u884C\u5C31\u5B8C\u6210\u4E86\u4E00\u4E2A\u7B80\u5355\u7684 ",(0,c.jsx)(n.code,{children:"countModel"}),"\u3002\u4F7F\u7528 Model \u7684\u793A\u4F8B\u4EE3\u7801\u5982\u4E0B\uFF1A"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-tsx",children:"function Counter() {\n  const [state, actions] = useModel(countModel);\n\n  useEffect(() => {\n    // \u589E\u52A0 1\n    actions.setState(state + 1);\n  }, []);\n}\n"})}),"\n",(0,c.jsxs)(n.h2,{id:"\u6570\u7EC4\u7C7B\u578B",children:["\u6570\u7EC4\u7C7B\u578B",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u6570\u7EC4\u7C7B\u578B",children:"#"})]}),"\n",(0,c.jsx)(n.p,{children:"\u5F53 State \u4E3A\u6570\u7EC4\u7C7B\u578B\u65F6\uFF0C\u81EA\u52A8\u751F\u6210 Actions \u7684\u793A\u4F8B\u4EE3\u7801\u5982\u4E0B\uFF1A"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-ts",children:"const countModel = model('count').define({ state: [] });\n\nfunction Counter() {\n  const [state, actions] = useModel(countModel);\n\n  useEffect(() => {\n    actions.push(1);\n    actions.pop();\n    actions.shift();\n    actions.unshift(1);\n    actions.concat([1]);\n    actions.splice(0, 1, 2);\n    actions.filter(value => value > 1);\n  }, []);\n}\n"})}),"\n",(0,c.jsx)(n.p,{children:"\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528 JavaScript Array \u5BF9\u8C61\u7684\u65B9\u6CD5\uFF0C\u4FEE\u6539 State\u3002"}),"\n",(0,c.jsxs)(n.h2,{id:"\u7B80\u5355\u5BF9\u8C61\u7C7B\u578B",children:["\u7B80\u5355\u5BF9\u8C61\u7C7B\u578B",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u7B80\u5355\u5BF9\u8C61\u7C7B\u578B",children:"#"})]}),"\n",(0,c.jsx)(n.p,{children:"\u5F53 State \u4E3A\u7B80\u5355\u5BF9\u8C61\u7C7B\u578B\u65F6\uFF0C\u81EA\u52A8\u751F\u6210 Actions \u7684\u793A\u4F8B\u4EE3\u7801\u5982\u4E0B\uFF1A"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-ts",children:"const countModel = model('count').define({\n  state: {\n    a: 1,\n    b: [],\n    c: {},\n  },\n});\n\nfunction Counter() {\n  const [state, actions] = useModel(countModel);\n\n  useEffect(() => {\n    actions.setA(2);\n    actions.setB([1]);\n    actions.setC({ a: 1 });\n  }, []);\n}\n"})}),"\n",(0,c.jsxs)(n.p,{children:["\u6839\u636E ",(0,c.jsx)(n.code,{children:"a"}),"\u3001",(0,c.jsx)(n.code,{children:"b"}),"\u3001",(0,c.jsx)(n.code,{children:"c"})," \u4E09\u4E2A\u4E0D\u540C\u7684\u5B57\u6BB5\u5206\u522B\u751F\u6210 ",(0,c.jsx)(n.code,{children:"setA"}),"\u3001",(0,c.jsx)(n.code,{children:"setB"}),"\u3001",(0,c.jsx)(n.code,{children:"setC"})," \u4E09\u4E2A Actions\u3002"]}),"\n",(0,c.jsxs)(n.div,{className:"rspress-directive info",children:[(0,c.jsx)(n.div,{className:"rspress-directive-title",children:"INFO"}),(0,c.jsxs)(n.div,{className:"rspress-directive-content",children:[(0,c.jsxs)(n.p,{children:["\u5F53\u7528\u6237\u81EA\u5B9A\u4E49\u7684 Action \u548C Modern.js \u81EA\u52A8\u751F\u6210\u7684 Action \u540D\u5B57\u4E00\u81F4\u65F6\uFF0C\u7528\u6237\u81EA\u5B9A\u4E49\u7684 Action \u4F18\u5148\u7EA7\u66F4\u9AD8\u3002\u4F8B\u5982\uFF0C",(0,c.jsx)(n.code,{children:"countModel"})," \u4E2D\u5DF2\u7ECF\u81EA\u5B9A\u4E49 ",(0,c.jsx)(n.code,{children:"setA"})," \u8FD9\u4E2A Action\uFF0C\u8C03\u7528 ",(0,c.jsx)(n.code,{children:"actions.setA()"})," \u65F6\uFF0C\u6700\u7EC8\u6267\u884C\u7684\u662F\u7528\u6237\u81EA\u5B9A\u4E49\u7684 ",(0,c.jsx)(n.code,{children:"setA"}),"\u3002"]}),(0,c.jsx)(n.p,{children:"\u5728 "}),"\n"]})]}),"\n",(0,c.jsxs)(n.div,{className:"rspress-directive info",children:[(0,c.jsx)(n.div,{className:"rspress-directive-title",children:"\u8865\u5145\u4FE1\u606F"}),(0,c.jsxs)(n.div,{className:"rspress-directive-content",children:[(0,c.jsxs)(n.p,{children:["\u76F8\u5173 API \u7684\u66F4\u591A\u4ECB\u7ECD\uFF0C\u8BF7\u53C2\u8003",(0,c.jsx)(n.a,{href:"/apis/app/runtime/model/auto-actions",children:"\u8FD9\u91CC"}),"\u3002"]}),"\n"]})]})]})}function d(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,t.ah)(),e.components);return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(i,{...e})}):i(e)}n.default=d,d.__RSPRESS_PAGE_META={},d.__RSPRESS_PAGE_META["zh%2Fguides%2Ftopic-detail%2Fmodel%2Fauto-actions.mdx"]={toc:[{text:"\u539F\u59CB\u6570\u636E\u7C7B\u578B",id:"\u539F\u59CB\u6570\u636E\u7C7B\u578B",depth:2},{text:"\u6570\u7EC4\u7C7B\u578B",id:"\u6570\u7EC4\u7C7B\u578B",depth:2},{text:"\u7B80\u5355\u5BF9\u8C61\u7C7B\u578B",id:"\u7B80\u5355\u5BF9\u8C61\u7C7B\u578B",depth:2}],title:"\u81EA\u52A8\u751F\u6210 Actions",frontmatter:{sidebar_position:6,title:"\u81EA\u52A8\u751F\u6210 Actions"}}}}]);