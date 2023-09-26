(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["20478"],{65861:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return l}});var n,a=t("15169"),d=t("43932"),o=t("9880"),c=t("23169"),i=t("26808");function r(e){var s=Object.assign({h1:"h1",a:"a",p:"p",code:"code",pre:"pre",h2:"h2",div:"div"},(0,c.useMDXComponents)(),e.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(s.h1,{id:"usestaticmodel",children:["useStaticModel",(0,o.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#usestaticmodel",children:"#"})]}),"\n","\n",(0,o.jsx)(i.default,{}),"\n",(0,o.jsxs)(s.p,{children:["If want to consume a Model in the form of React Hook in the component, and can get the current latest state at any time, but you don't want the Model state to be updated, which will cause the component to be re-rendered, we can use ",(0,o.jsx)(s.code,{children:"useStaticModel"}),"."]}),"\n",(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.code,{children:"useStaticModel"})," API is same as ",(0,o.jsx)(s.code,{children:"useModel"}),".For detail, see ",(0,o.jsx)(s.a,{href:"/en/apis/app/runtime/model/use-model",children:(0,o.jsx)(s.code,{children:"useModel"})}),"."]}),"\n",(0,o.jsxs)(s.p,{children:["To ensure that the latest state is always available, be careful not to deconstruct the returned ",(0,o.jsx)(s.code,{children:"state"}),"."]}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-tsx",children:"function App() {\n  // \u274C Do not deconstruct state, but can deconstruct actions.\n  const [{ username }, { logout }] = useStaticModel(userModel);\n\n  // \u2705 True Usage.\n  const [state, { logout }] = useStaticModel(userModel);\n\n  useEffect(() => {\n    state.username;\n  }, []);\n}\n"})}),"\n",(0,o.jsxs)(s.h2,{id:"example",children:["Example",(0,o.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#example",children:"#"})]}),"\n",(0,o.jsxs)(s.p,{children:["The following ",(0,o.jsx)(s.code,{children:"App"})," component consumes the ",(0,o.jsx)(s.code,{children:"userModel"})," state, but does not use it directly in JSX. It can be found that changes in the ",(0,o.jsx)(s.code,{children:"userModel"})," state do not necessarily cause the component to re-render. This situation can be optimized using ",(0,o.jsx)(s.code,{children:"useStaticModel"}),"."]}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-tsx",children:"function App() {\n  const [state] = useStaticModel(userModel);\n\n  useEffect(() => {\n    // Statistical UV Data\n    send('pageview', { user: state.user });\n  }, [state]);\n\n  return <div>Hello</div>;\n}\n"})}),"\n",(0,o.jsxs)(s.div,{className:"rspress-directive info",children:[(0,o.jsx)(s.div,{className:"rspress-directive-title",children:"More"}),(0,o.jsxs)(s.div,{className:"rspress-directive-content",children:[(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.a,{href:"/guides/topic-detail/model/use-model",children:"Use Model"}),"."]}),"\n"]})]})]})}(n=globalThis).__RSPRESS_PAGE_META||(n.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["en%2Fapis%2Fapp%2Fruntime%2Fmodel%2Fuse-static-model.mdx"]={toc:[{text:"Example",id:"example",depth:2}],title:"useStaticModel",frontmatter:{sidebar_position:3,title:"useStaticModel"}};var l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},s=Object.assign({},(0,c.useMDXComponents)(),e.components).wrapper;return s?(0,o.jsx)(s,(0,d._)((0,a._)({},e),{children:(0,o.jsx)(r,(0,a._)({},e))})):r(e)}}}]);