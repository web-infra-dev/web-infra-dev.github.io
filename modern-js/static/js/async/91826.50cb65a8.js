(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["91826"],{39549:function(e,r,n){"use strict";n.r(r),n.d(r,{default:function(){return c}});var t,i=n("15169"),s=n("43932"),o=n("9880"),d=n("23169");function a(e){var r=Object.assign({h1:"h1",a:"a",p:"p",strong:"strong",div:"div",code:"code",h2:"h2",pre:"pre"},(0,d.useMDXComponents)(),e.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(r.h1,{id:"bff-type",children:["BFF Type",(0,o.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#bff-type",children:"#"})]}),"\n",(0,o.jsxs)(r.p,{children:["Runtime framework support is also an important part of ",(0,o.jsx)(r.strong,{children:"BFF"}),". Modern.js supports extending BFF's runtime framework through plugins, and provides a series of built-in plugins, developers can directly use the conventions and ecology of the framework."]}),"\n",(0,o.jsxs)(r.p,{children:["The plugin is compatible with most of the specifications of these frameworks, and each framework needs to provide two types of ways to extend the writing of BFF functions, namely ",(0,o.jsx)(r.strong,{children:"Function Mode"})," and ",(0,o.jsx)(r.strong,{children:"Framework Mode"}),"."]}),"\n",(0,o.jsxs)(r.div,{className:"modern-directive note",children:[(0,o.jsx)(r.div,{className:"modern-directive-title",children:"NOTE"}),(0,o.jsxs)(r.div,{className:"modern-directive-content",children:[(0,o.jsxs)(r.p,{children:["Whether the current ",(0,o.jsx)(r.code,{children:"api/"})," directory structure is written as a framework is determined by the corresponding plugin, Modern.js don't care."]}),"\n"]})]}),"\n",(0,o.jsxs)(r.h2,{id:"function-mode",children:["Function Mode",(0,o.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#function-mode",children:"#"})]}),"\n",(0,o.jsxs)(r.p,{children:["When the plugin considers that it is currently written as a function, it must support writing middleware in the ",(0,o.jsx)(r.code,{children:"api/_ app.ts"})," to extend the BFF function."]}),"\n",(0,o.jsxs)(r.p,{children:["Modern.js collects the middleware in the ",(0,o.jsx)(r.code,{children:"api/_app.ts"})," and passes it to the plugin, which injects the middleware into the runtime, for example:"]}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-ts",children:"import { hook } from '@modern-js/runtime/server';\n\nexport default hook(({ addMiddleware }) => {\n  addMiddleware(myMiddleware);\n});\n"})}),"\n",(0,o.jsxs)(r.div,{className:"modern-directive note",children:[(0,o.jsx)(r.div,{className:"modern-directive-title",children:"NOTE"}),(0,o.jsxs)(r.div,{className:"modern-directive-content",children:[(0,o.jsxs)(r.p,{children:["The writing of middleware for different plugins is not the same, see ",(0,o.jsx)(r.a,{href:"/guides/advanced-features/bff/frameworks",children:"Runtime Framework"})," for details."]}),"\n"]})]}),"\n",(0,o.jsxs)(r.h2,{id:"framework-mode",children:["Framework Mode",(0,o.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#framework-mode",children:"#"})]}),"\n",(0,o.jsx)(r.p,{children:"Framework writing is a way of using frame structure to extend BFF functions. Compared with function writing, although frame writing can use more frame structure and make the entire BFF Server clearer in complex scenarios, it is also more complex and requires more attention to the content at the framework level."}),"\n",(0,o.jsxs)(r.p,{children:["In the framework writing method, all BFF functions need to be written in the ",(0,o.jsx)(r.code,{children:"api/lambda/"})," directory, and the hook file ",(0,o.jsx)(r.code,{children:"_app.[tj]s"})," cannot be used."]}),"\n",(0,o.jsx)(r.p,{children:"In most cases, the function writing method can cover the customization requirements of most BFF functions. Only when your project server level logic is more complex, the code needs to be layered, or you need to use more elements of the framework, you need to use the framework writing method."}),"\n",(0,o.jsxs)(r.div,{className:"modern-directive note",children:[(0,o.jsx)(r.div,{className:"modern-directive-title",children:"NOTE"}),(0,o.jsxs)(r.div,{className:"modern-directive-content",children:[(0,o.jsxs)(r.p,{children:["The directory structure of different plugin frameworks is not the same, see ",(0,o.jsx)(r.a,{href:"/guides/advanced-features/bff/frameworks",children:"Runtime Frameworks"})," for details."]}),"\n"]})]})]})}(t=globalThis).__RSPRESS_PAGE_META||(t.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["en%2Fguides%2Fadvanced-features%2Fbff%2Ftype.mdx"]={toc:[{text:"Function Mode",id:"function-mode",depth:2},{text:"Framework Mode",id:"framework-mode",depth:2}],title:"BFF Type",frontmatter:{sidebar_position:2,title:"BFF Type"}};var c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=Object.assign({},(0,d.useMDXComponents)(),e.components).wrapper;return r?(0,o.jsx)(r,(0,s._)((0,i._)({},e),{children:(0,o.jsx)(a,(0,i._)({},e))})):a(e)}}}]);