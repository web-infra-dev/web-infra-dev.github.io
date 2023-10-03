(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["93503"],{6335:function(e,n,o){"use strict";o.r(n),o.d(n,{default:function(){return i},frontmatter:function(){return c}});var a=o("15169"),t=o("43932"),r=o("9880"),s=o("23169");function d(e){var n=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",pre:"pre",code:"code",h3:"h3",h4:"h4"},(0,s.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"loadable",children:["loadable",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#loadable",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"Used to create Loadable component"}),"\n",(0,r.jsxs)(n.h2,{id:"usage",children:["Usage",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#usage",children:"#"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"import loadable from '@modern-js/runtime/loadable';\n"})}),"\n",(0,r.jsxs)(n.h2,{id:"function-signature",children:["Function Signature",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#function-signature",children:"#"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"type Options = {\n  resolveComponent?: (\n    module: Module,\n    props: Props,\n  ) => React.ComponentType<Props>,\n  fallback?: JSX.Element;\n  ssr?: boolean;\n}\n\nfunction loadable(loadFn: Function, options?: Options) => LoadableComponent\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"input",children:["Input",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#input",children:"#"})]}),"\n",(0,r.jsxs)(n.h4,{id:"loadfn",children:["loadFn",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#loadfn",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"Used to load component."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"import loadable from '@modern-js/runtime/loadable';\n\nconst OtherComponent = loadable(() => import('./OtherComponent'));\n"})}),"\n",(0,r.jsxs)(n.h4,{id:"optionsresolvecomponent",children:["options.resolveComponent",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#optionsresolvecomponent",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["Type: ",(0,r.jsx)(n.code,{children:"(module: Module, props: Props) => React.ComponentType<Props>"})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"module"})," is the component returned by ",(0,r.jsx)(n.code,{children:"loadFn"}),", and ",(0,r.jsx)(n.code,{children:"props"})," is the props parameter accepted by the component."]}),"\n",(0,r.jsxs)(n.p,{children:["By default, we think that the default export of file is a react component, so we can render the component directly. But when the component is named export, or we need to dynamically determine which component needs to be rendered according to the ",(0,r.jsx)(n.code,{children:"props"}),", we can use ",(0,r.jsx)(n.code,{children:"resolveComponent"}),". Here is an example:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",meta:"title='component.js'",children:"export const Apple = () => 'Apple!';\nexport const Orange = () => 'Orange!';\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",meta:"title='loadable.js'",children:"const LoadableApple = loadable(() => import('./components'), {\n  resolveComponent: components => components.Apple,\n});\nconst LoadableOrange = loadable(() => import('./components'), {\n  resolveComponent: components => components.Orange,\n});\nconst LoadableFruit = loadable(() => import('./components'), {\n  resolveComponent: (components, props) => components[props.fruit],\n});\n"})}),"\n",(0,r.jsxs)(n.h4,{id:"optionsfallback",children:["options.fallback",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#optionsfallback",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"Whether to display fallback content during loading."}),"\n",(0,r.jsxs)(n.h4,{id:"optionsssr",children:["options.ssr",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#optionsssr",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["Whether to support SSR, the default value is ",(0,r.jsx)(n.code,{children:"true"}),"."]}),"\n",(0,r.jsxs)(n.h3,{id:"return-value",children:["Return Value",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#return-value",children:"#"})]}),"\n",(0,r.jsxs)(n.h4,{id:"loadablecomponent",children:["LoadableComponent",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#loadablecomponent",children:"#"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"type LoadableComponent<Props> = React.ComponentType<\n  Props & { fallback?: JSX.Element }\n> & {\n  preload(props?: Props): void;\n  load(props?: Props): Promise<React.ComponentType<Props>>;\n};\n"})})]})}function l(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,s.useMDXComponents)(),e.components).wrapper;return n?(0,r.jsx)(n,(0,t._)((0,a._)({},e),{children:(0,r.jsx)(d,(0,a._)({},e))})):d(e)}var i=l;l.__RSPRESS_PAGE_META={},l.__RSPRESS_PAGE_META["en%2Fapis%2Fapp%2Fruntime%2Futility%2Floadable.mdx"]={toc:[{text:"Usage",id:"usage",depth:2},{text:"Function Signature",id:"function-signature",depth:2},{text:"Input",id:"input",depth:3},{text:"loadFn",id:"loadfn",depth:4},{text:"options.resolveComponent",id:"optionsresolvecomponent",depth:4},{text:"options.fallback",id:"optionsfallback",depth:4},{text:"options.ssr",id:"optionsssr",depth:4},{text:"Return Value",id:"return-value",depth:3},{text:"LoadableComponent",id:"loadablecomponent",depth:4}],title:"loadable"};var c={title:"loadable"}}}]);