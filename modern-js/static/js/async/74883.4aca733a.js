/*! For license information please see 74883.4aca733a.js.LICENSE.txt */
(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["74883"],{62819:function(e,n,o){"use strict";o.r(n);var a=o("39980"),s=o("9580");function r(e){let n=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",pre:"pre",code:"code",h3:"h3",h4:"h4"},(0,s.ah)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.h1,{id:"loadable",children:["loadable",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#loadable",children:"#"})]}),"\n",(0,a.jsx)(n.p,{children:"\u7528\u4E8E\u521B\u5EFA Loadable \u7684\u7EC4\u4EF6\u3002"}),"\n",(0,a.jsxs)(n.h2,{id:"\u4F7F\u7528\u59FF\u52BF",children:["\u4F7F\u7528\u59FF\u52BF",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u4F7F\u7528\u59FF\u52BF",children:"#"})]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"import loadable from '@modern-js/runtime/loadable';\n"})}),"\n",(0,a.jsxs)(n.h2,{id:"\u51FD\u6570\u7B7E\u540D",children:["\u51FD\u6570\u7B7E\u540D",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u51FD\u6570\u7B7E\u540D",children:"#"})]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"type Options = {\n  resolveComponent?: (\n    module: Module,\n    props: Props,\n  ) => React.ComponentType<Props>,\n  fallback?: JSX.Element;\n  ssr?: boolean;\n}\n\nfunction loadable(loadFn: Function, options?: Options) => LoadableComponent\n"})}),"\n",(0,a.jsxs)(n.h3,{id:"\u53C2\u6570",children:["\u53C2\u6570",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u53C2\u6570",children:"#"})]}),"\n",(0,a.jsxs)(n.h4,{id:"loadfn",children:["loadFn",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#loadfn",children:"#"})]}),"\n",(0,a.jsx)(n.p,{children:"\u7528\u4E8E\u52A0\u8F7D\u7EC4\u4EF6\u3002"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"import loadable from '@modern-js/runtime/loadable';\n\nconst OtherComponent = loadable(() => import('./OtherComponent'));\n"})}),"\n",(0,a.jsxs)(n.h4,{id:"optionsresolvecomponent",children:["options.resolveComponent",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#optionsresolvecomponent",children:"#"})]}),"\n",(0,a.jsxs)(n.p,{children:["\u7C7B\u578B\uFF1A",(0,a.jsx)(n.code,{children:"(module: Module, props: Props) => React.ComponentType<Props>"})]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"module"})," \u4E3A ",(0,a.jsx)(n.code,{children:"loadFn"})," \u8FD4\u56DE\u7684\u7EC4\u4EF6\uFF0C",(0,a.jsx)(n.code,{children:"props"})," \u662F loadable \u8FD4\u56DE\u7684\u7EC4\u4EF6\u63A5\u53D7\u7684 props \u53C2\u6570\u3002\u9ED8\u8BA4\u7684\u8BDD\uFF0C\u6211\u4EEC\u8BA4\u4E3A ",(0,a.jsx)(n.code,{children:"import"})," \u7684\u6587\u4EF6\u90FD\u662F\u9ED8\u8BA4\u5BFC\u51FA react \u7EC4\u4EF6\uFF0C\u8FD9\u65F6\u5019\u76F4\u63A5\u6E32\u67D3\u8BE5\u7EC4\u4EF6\u5373\u53EF\u3002\u4F46\u5F53\u7EC4\u4EF6\u662F\u5177\u540D\u5BFC\u51FA\u7684\uFF0C\u6216\u8005\u6211\u4EEC\u9700\u8981\u6839\u636E\u5177\u4F53\u7684 ",(0,a.jsx)(n.code,{children:"props"})," \u52A8\u6001\u5224\u65AD\u9700\u8981\u6E32\u67D3\u54EA\u4E2A\u7EC4\u4EF6\u7684\u65F6\u5019\uFF0C\u53EF\u4EE5\u4F7F\u7528 ",(0,a.jsx)(n.code,{children:"resolveComponent"})," \u6765\u5B9E\u73B0\u3002\u4E0B\u9762\u662F\u4E00\u4E2A\u793A\u4F8B\uFF1A"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",meta:"title='component.js'",children:"export const Apple = () => 'Apple!';\nexport const Orange = () => 'Orange!';\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",meta:"title='loadable.js'",children:"const LoadableApple = loadable(() => import('./components'), {\n  resolveComponent: components => components.Apple,\n});\nconst LoadableOrange = loadable(() => import('./components'), {\n  resolveComponent: components => components.Orange,\n});\nconst LoadableFruit = loadable(() => import('./components'), {\n  resolveComponent: (components, props) => components[props.fruit],\n});\n"})}),"\n",(0,a.jsxs)(n.h4,{id:"optionsfallback",children:["options.fallback",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#optionsfallback",children:"#"})]}),"\n",(0,a.jsx)(n.p,{children:"\u662F\u5426\u5728 loading \u9636\u6BB5\u663E\u793A fallback \u5185\u5BB9\u3002"}),"\n",(0,a.jsxs)(n.h4,{id:"optionsssr",children:["options.ssr",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#optionsssr",children:"#"})]}),"\n",(0,a.jsxs)(n.p,{children:["\u662F\u5426\u652F\u6301 SSR\uFF0C\u9ED8\u8BA4\u503C\u662F ",(0,a.jsx)(n.code,{children:"true"}),"\u3002"]}),"\n",(0,a.jsxs)(n.h3,{id:"\u8FD4\u56DE\u503C",children:["\u8FD4\u56DE\u503C",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u8FD4\u56DE\u503C",children:"#"})]}),"\n",(0,a.jsxs)(n.h4,{id:"loadablecomponent",children:["LoadableComponent",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#loadablecomponent",children:"#"})]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"type LoadableComponent<Props> = React.ComponentType<\n  Props & { fallback?: JSX.Element }\n> & {\n  preload(props?: Props): void;\n  load(props?: Props): Promise<React.ComponentType<Props>>;\n};\n"})})]})}function l(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,s.ah)(),e.components);return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(r,{...e})}):r(e)}n.default=l,l.__RSPRESS_PAGE_META={},l.__RSPRESS_PAGE_META["zh%2Fapis%2Fapp%2Fruntime%2Futility%2Floadable.mdx"]={toc:[{text:"\u4F7F\u7528\u59FF\u52BF",id:"\u4F7F\u7528\u59FF\u52BF",depth:2},{text:"\u51FD\u6570\u7B7E\u540D",id:"\u51FD\u6570\u7B7E\u540D",depth:2},{text:"\u53C2\u6570",id:"\u53C2\u6570",depth:3},{text:"loadFn",id:"loadfn",depth:4},{text:"options.resolveComponent",id:"optionsresolvecomponent",depth:4},{text:"options.fallback",id:"optionsfallback",depth:4},{text:"options.ssr",id:"optionsssr",depth:4},{text:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",depth:3},{text:"LoadableComponent",id:"loadablecomponent",depth:4}],title:"loadable",frontmatter:{title:"loadable"}}}}]);