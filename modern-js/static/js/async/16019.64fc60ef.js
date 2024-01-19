/*! For license information please see 16019.64fc60ef.js.LICENSE.txt */
(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["16019"],{25643:function(e,s,n){"use strict";n.r(s),n.d(s,{default:function(){return o}});var t=n("39980"),d=n("96954"),c=n("70415");function r(e){let s=Object.assign({h1:"h1",a:"a",p:"p",code:"code",pre:"pre",h4:"h4",div:"div"},(0,d.useMDXComponents)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.h1,{id:"usestaticmodel",children:["useStaticModel",(0,t.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#usestaticmodel",children:"#"})]}),"\n","\n",(0,t.jsx)(c.default,{}),"\n",(0,t.jsxs)(s.p,{children:["\u5982\u679C\u60F3\u5728\u7EC4\u4EF6\u91CC\u4EE5 React Hook \u7684\u5F62\u5F0F\u6D88\u8D39\u67D0\u4E2A Model\uFF0C\u5E76\u80FD\u968F\u65F6\u83B7\u53D6\u5230\u5F53\u524D\u6700\u65B0\u7684\u72B6\u6001\uFF0C\u4F46\u53C8\u4E0D\u5E0C\u671B Model \u72B6\u6001\u66F4\u65B0\u7684\u65F6\u5019\uFF0C\u5F15\u8D77\u7EC4\u4EF6\u7684\u91CD\u65B0\u6E32\u67D3\uFF0C\u53EF\u4EE5\u4F7F\u7528 ",(0,t.jsx)(s.code,{children:"useStaticModel"}),"\u3002",(0,t.jsx)(s.code,{children:"useStaticModel"})," API \u5F62\u5F0F\u4E0A\u4E0E ",(0,t.jsx)(s.code,{children:"useModel"})," \u5B8C\u5168\u4E00\u81F4\u3002\u5177\u4F53\u4F7F\u7528\u8BF7\u53C2\u8003 ",(0,t.jsx)(s.a,{href:"/zh/apis/app/runtime/model/use-model",children:(0,t.jsx)(s.code,{children:"useModel"})}),"\u3002"]}),"\n",(0,t.jsxs)(s.p,{children:["\u4E3A\u4E86\u4FDD\u8BC1\u603B\u662F\u80FD\u83B7\u53D6\u5230\u6700\u65B0\u72B6\u6001\uFF0C\u6CE8\u610F\u4E0D\u8981\u5BF9\u8FD4\u56DE\u7684 ",(0,t.jsx)(s.code,{children:"state"})," \u89E3\u6784\u3002"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-tsx",children:"function App() {\n  // \u274C \u4E0D\u80FD\u89E3\u6784 state\uFF0C\u4F46\u53EF\u4EE5\u89E3\u6784 actions\u3002\n  const [{ username }, { logout }] = useStaticModel(userModel);\n\n  // \u2705 \u8FD9\u624D\u662F\u6B63\u786E\u4F7F\u7528\u59FF\u52BF\u3002\n  const [state, { logout }] = useStaticModel(userModel);\n\n  useEffect(() => {\n    state.username;\n  }, []);\n}\n"})}),"\n",(0,t.jsxs)(s.h4,{id:"\u793A\u4F8B",children:["\u793A\u4F8B",(0,t.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#\u793A\u4F8B",children:"#"})]}),"\n",(0,t.jsxs)(s.p,{children:["\u5982\u4E0B ",(0,t.jsx)(s.code,{children:"App"})," \u7EC4\u4EF6\u6D88\u8D39\u4E86 ",(0,t.jsx)(s.code,{children:"userModel"})," \u7684\u72B6\u6001\uFF0C\u4F46\u6CA1\u6709\u76F4\u63A5\u5728 JSX \u91CC\u4F7F\u7528\u3002\u53EF\u4EE5\u53D1\u73B0\uFF0C",(0,t.jsx)(s.code,{children:"userModel"})," \u72B6\u6001\u7684\u6539\u53D8\u6CA1\u6709\u5FC5\u8981\u5F15\u8D77\u7EC4\u4EF6\u91CD\u65B0\u6E32\u67D3\uFF0C\u8FD9\u79CD\u60C5\u51B5\u53EF\u4EE5\u4F7F\u7528 ",(0,t.jsx)(s.code,{children:"useStaticModel"})," \u8FDB\u884C\u4F18\u5316\u3002"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-tsx",children:"function App() {\n  const [state] = useStaticModel(userModel);\n\n  useEffect(() => {\n    // \u7EDF\u8BA1 UV \u6570\u636E\n    send('pageview', { user: state.user });\n  }, [state]);\n\n  return <div>Hello</div>;\n}\n"})}),"\n",(0,t.jsxs)(s.div,{className:"rspress-directive info",children:[(0,t.jsx)(s.div,{className:"rspress-directive-title",children:"\u66F4\u591A\u53C2\u8003"}),(0,t.jsxs)(s.div,{className:"rspress-directive-content",children:[(0,t.jsx)(s.p,{children:(0,t.jsx)(s.a,{href:"/guides/topic-detail/model/use-model",children:"\u4F7F\u7528 Model"})}),"\n"]})]})]})}function i(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:s}=Object.assign({},(0,d.useMDXComponents)(),e.components);return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(r,{...e})}):r(e)}var o=i;i.__RSPRESS_PAGE_META={},i.__RSPRESS_PAGE_META["zh%2Fapis%2Fapp%2Fruntime%2Fmodel%2Fuse-static-model.mdx"]={toc:[{text:"\u793A\u4F8B",id:"\u793A\u4F8B",depth:4}],title:"useStaticModel",frontmatter:{sidebar_position:3,title:"useStaticModel"}}},70415:function(e,s,n){"use strict";n.r(s),n.d(s,{default:function(){return i}});var t=n("39980"),d=n("96954");function c(e){let s=Object.assign({div:"div",p:"p",code:"code"},(0,d.useMDXComponents)(),e.components);return(0,t.jsxs)(s.div,{className:"rspress-directive info",children:[(0,t.jsx)(s.div,{className:"rspress-directive-title",children:"\u8865\u5145\u4FE1\u606F"}),(0,t.jsxs)(s.div,{className:"rspress-directive-content",children:[(0,t.jsxs)(s.p,{children:["\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u672C\u8282\u6240\u6709 API \u7684\u5BFC\u51FA\u5305\u540D\u4E3A\uFF1A",(0,t.jsx)(s.code,{children:"@modern-js/runtime/model"}),"\u3002"]}),"\n",(0,t.jsxs)(s.p,{children:["\u5982\u679C\u662F\u5728 Modern.js \u4EE5\u5916\u5355\u72EC\u96C6\u6210 Reduck\uFF0C\u5BFC\u51FA\u5305\u540D\u4E3A\uFF1A",(0,t.jsx)(s.code,{children:"@modern-js-reduck/react"}),"\u3002"]}),"\n"]})]})}function r(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:s}=Object.assign({},(0,d.useMDXComponents)(),e.components);return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}var i=r;r.__RSPRESS_PAGE_META={},r.__RSPRESS_PAGE_META["zh%2Fcomponents%2Freduck-tip.mdx"]={toc:[],title:"",frontmatter:{}}}}]);