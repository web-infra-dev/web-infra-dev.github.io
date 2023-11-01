(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["1438"],{35048:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return c},frontmatter:function(){return a}});var s=r("9880"),t=r("23169");function d(e){let n=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",pre:"pre",code:"code",h3:"h3",ul:"ul",li:"li",div:"div"},(0,t.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h1,{id:"bootstrap",children:["bootstrap",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#bootstrap",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["\u7528\u4E8E\u542F\u52A8\u548C\u6302\u8F7D\u5E94\u7528\uFF0C\u901A\u5E38\u60C5\u51B5\u4E0B\u4E0D\u505A\u624B\u52A8\u8C03\u7528\u3002\u53EA\u6709\u5728\u4F7F\u7528",(0,s.jsx)(n.a,{href:"/guides/concept/entries#%E8%87%AA%E5%AE%9A%E4%B9%89-bootstrap",children:"\u81EA\u5B9A\u4E49 Bootstrap"})," \u65F6\uFF0C\u624D\u9700\u8981\u4F7F\u7528\u8BE5 API\u3002"]}),"\n",(0,s.jsxs)(n.h2,{id:"\u4F7F\u7528\u59FF\u52BF",children:["\u4F7F\u7528\u59FF\u52BF",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u4F7F\u7528\u59FF\u52BF",children:"#"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"import ReactDOM from 'react-dom/client';\nimport { bootstrap } from '@modern-js/runtime';\n\nbootstrap(App, 'root', undefined, ReactDOM);\n"})}),"\n",(0,s.jsxs)(n.h2,{id:"\u51FD\u6570\u7B7E\u540D",children:["\u51FD\u6570\u7B7E\u540D",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u51FD\u6570\u7B7E\u540D",children:"#"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"type BootStrap<T = unknown> = (\n  App: React.ComponentType,\n  id: string | HTMLElement | RuntimeContext,\n  root?: any,\n  ReactDOM?: {\n    render?: Renderer;\n    hydrate?: Renderer;\n    createRoot?: typeof createRoot;\n    hydrateRoot?: typeof hydrateRoot;\n  },\n) => Promise<T>;\n"})}),"\n",(0,s.jsxs)(n.h3,{id:"\u53C2\u6570",children:["\u53C2\u6570",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u53C2\u6570",children:"#"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"AppComponent"}),"\uFF1A\u901A\u8FC7 ",(0,s.jsx)(n.a,{href:"/zh/apis/app/runtime/core/create-app",children:(0,s.jsx)(n.code,{children:"createApp"})})," \u521B\u5EFA\u7684 ReactElement \u5B9E\u4F8B\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"id"}),"\uFF1A\u8981\u6302\u8F7D\u7684 DOM \u6839\u5143\u7D20 id\uFF0C\u5982 ",(0,s.jsx)(n.code,{children:'"root"'}),"\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"root"}),": ReactDOM.createRoot \u7684\u8FD4\u56DE\u503C\uFF0C\u7528\u4E8E bootstrap \u51FD\u6570\u5916\u9700\u8981 root \u9500\u6BC1\u7EC4\u4EF6\u7684\u573A\u666F\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"ReactDOM"}),": ReactDOM \u5BF9\u8C61\uFF0C\u7528\u4E8E\u533A\u5206 React 18 \u548C React 17 API\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(n.h2,{id:"\u793A\u4F8B",children:["\u793A\u4F8B",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u793A\u4F8B",children:"#"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:"import ReactDOM from 'react-dom/client';\nimport { createApp, bootstrap } from '@modern-js/runtime';\n\nfunction App() {\n  return <div>Hello Modern.js</div>;\n}\n\nconst WrappedApp = createApp({\n  // \u4F20\u5165\u81EA\u5B9A\u4E49\u63D2\u4EF6\n  plugins: [customPlugin()],\n})(App);\n\nbootstrap(WrappedApp, 'root', undefined, ReactDOM);\n"})}),"\n",(0,s.jsxs)(n.div,{className:"rspress-directive info",children:[(0,s.jsx)(n.div,{className:"rspress-directive-title",children:"INFO"}),(0,s.jsxs)(n.div,{className:"rspress-directive-content",children:[(0,s.jsxs)(n.p,{children:["\u7531\u4E8E ",(0,s.jsx)(n.code,{children:"@modern-js/runtime/plugins"})," \u662F\u522B\u540D\u5904\u7406\u7684\uFF0C\u5728 ts \u9879\u76EE\u4E2D\u4F7F\u7528\u65F6\u9700\u8981\u58F0\u660E\u5176\u7C7B\u578B\uFF0C \u53EA\u9700\u8981\u5728 ",(0,s.jsx)(n.code,{children:"src/modern-app-env.d.ts"})," \u6DFB\u52A0\u4EE5\u4E0B\u7C7B\u578B\u58F0\u660E\u5373\u53EF\uFF1A"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"declare module '@modern-js/runtime/plugins';\n"})}),"\n"]})]}),"\n",(0,s.jsxs)(n.div,{className:"rspress-directive warning",children:[(0,s.jsx)(n.div,{className:"rspress-directive-title",children:"WARNING"}),(0,s.jsxs)(n.div,{className:"rspress-directive-content",children:[(0,s.jsx)(n.p,{children:"bootstrap \u53EA\u652F\u6301\u5728 CSR \u573A\u666F\u4E0B\u4F7F\u7528\u3002"}),"\n"]})]})]})}function i(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,t.useMDXComponents)(),e.components);return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}var c=i;i.__RSPRESS_PAGE_META={},i.__RSPRESS_PAGE_META["zh%2Fapis%2Fapp%2Fruntime%2Fcore%2Fbootstrap.mdx"]={toc:[{text:"\u4F7F\u7528\u59FF\u52BF",id:"\u4F7F\u7528\u59FF\u52BF",depth:2},{text:"\u51FD\u6570\u7B7E\u540D",id:"\u51FD\u6570\u7B7E\u540D",depth:2},{text:"\u53C2\u6570",id:"\u53C2\u6570",depth:3},{text:"\u793A\u4F8B",id:"\u793A\u4F8B",depth:2}],title:"bootstrap"};let a={title:"bootstrap"}}}]);