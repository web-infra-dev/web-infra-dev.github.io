/*! For license information please see 8736.df164a86.js.LICENSE.txt */
(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["8736"],{96895:function(e,n,i){"use strict";i.r(n);var o=i("39980"),t=i("96954");function s(e){let n=Object.assign({h1:"h1",a:"a",ul:"ul",li:"li",strong:"strong",pre:"pre",code:"code",p:"p",h3:"h3",h4:"h4"},(0,t.useMDXComponents)(),e.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.h1,{id:"experimentslazycompilation",children:["experiments.lazyCompilation",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#experimentslazycompilation",children:"#"})]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.strong,{children:"Type:"})}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"type LazyCompilationOptions =\n  | boolean\n  | {\n      // Whether to enable lazy compilation for entries\n      entries?: boolean;\n      // Whether to enable lazy compilation for dynamic imports\n      imports?: boolean;\n    };\n"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Default:"})," ",(0,o.jsx)(n.code,{children:"false"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Bundler:"})," ",(0,o.jsx)(n.code,{children:"only support webpack"})]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Used to enable the lazy compilation (i.e. compile on demand). When this config is enabled, Builder will compile entrypoints and dynamic imports only when they are used. It will improve the compilation startup time of the project."}),"\n",(0,o.jsx)(n.p,{children:"Lazy compilation only takes effect in the development."}),"\n",(0,o.jsxs)(n.h3,{id:"lazy-compilation-for-dynamic-imports",children:["Lazy Compilation for Dynamic Imports",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#lazy-compilation-for-dynamic-imports",children:"#"})]}),"\n",(0,o.jsxs)(n.p,{children:["Lazy compile async modules introduced by ",(0,o.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/import",target:"_blank",rel:"noopener noreferrer",children:"dynamic import"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"export default {\n  experiments: {\n    lazyCompilation: {\n      imports: true,\n      entries: false,\n    },\n  },\n};\n"})}),"\n",(0,o.jsxs)(n.p,{children:["When ",(0,o.jsx)(n.code,{children:"imports"})," option is enabled, all async modules will only be compiled when requested. If your project is a single-page application, and routing is split through dynamic import, there will be a significant effect of speeding up compilation."]}),"\n",(0,o.jsxs)(n.h3,{id:"lazy-compilation-for-entires",children:["Lazy Compilation for Entires",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#lazy-compilation-for-entires",children:"#"})]}),"\n",(0,o.jsx)(n.p,{children:"In addition to lazy compilation for async modules, you can also choose to lazily compile both entries and async modules at the same time."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"export default {\n  experiments: {\n    lazyCompilation: {\n      imports: true,\n      entries: true,\n    },\n  },\n};\n"})}),"\n",(0,o.jsx)(n.p,{children:"The above config can also be simplified to:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"export default {\n  experiments: {\n    lazyCompilation: true,\n  },\n};\n"})}),"\n",(0,o.jsxs)(n.p,{children:["When ",(0,o.jsx)(n.code,{children:"entries"})," option is enabled, all pages will not be compiled when the compilation is started, and the page will be compiled only when you visit it."]}),"\n",(0,o.jsx)(n.p,{children:"When using lazy compilation for entries, there are some considerations:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Only work for multi-page applications, no work for single-page applications."}),"\n",(0,o.jsx)(n.li,{children:"when you visit a page, there will be a white screen for a period of time due to waiting for the page to be compiled."}),"\n"]}),"\n",(0,o.jsxs)(n.h3,{id:"limitations",children:["Limitations",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#limitations",children:"#"})]}),"\n",(0,o.jsxs)(n.h4,{id:"disable-split-chunks",children:["Disable split chunks",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#disable-split-chunks",children:"#"})]}),"\n",(0,o.jsx)(n.p,{children:"When you enable lazy compilation, in order to ensure the compilation results, Builder will disable split chunks in the development. This will not affect the build results in the production, but will cause a difference between the build results of the development and production."}),"\n",(0,o.jsxs)(n.h4,{id:"use-proxy",children:["Use proxy",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#use-proxy",children:"#"})]}),"\n",(0,o.jsx)(n.p,{children:"Lazy Compilation relies on the local development server of webpack. When you proxy a domain name to localhost, Lazy Compilation will not work properly. Therefore, if you need to develop with proxy, please disable Lazy Compilation."}),"\n",(0,o.jsxs)(n.h4,{id:"other-potential-issues",children:["Other Potential Issues",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#other-potential-issues",children:"#"})]}),"\n",(0,o.jsx)(n.p,{children:"Considering that Lazy Compilation is still an experimental feature of webpack, you may encounter some potential issues while using it, such as changes in the behavior of compiled artifacts or compilation errors."}),"\n",(0,o.jsxs)(n.p,{children:["When you encounter these issues, you can refer to ",(0,o.jsx)(n.a,{href:"https://github.com/webpack/webpack/issues",target:"_blank",rel:"noopener noreferrer",children:"webpack Issues"})," to find solutions or disable the ",(0,o.jsx)(n.code,{children:"lazyCompilation"})," configuration option."]})]})}function a(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,t.useMDXComponents)(),e.components);return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(s,{...e})}):s(e)}n.default=a,a.__RSPRESS_PAGE_META={},a.__RSPRESS_PAGE_META["en%2Fconfigure%2Fapp%2Fexperiments%2Flazy-compilation.mdx"]={toc:[{text:"Lazy Compilation for Dynamic Imports",id:"lazy-compilation-for-dynamic-imports",depth:3},{text:"Lazy Compilation for Entires",id:"lazy-compilation-for-entires",depth:3},{text:"Limitations",id:"limitations",depth:3},{text:"Disable split chunks",id:"disable-split-chunks",depth:4},{text:"Use proxy",id:"use-proxy",depth:4},{text:"Other Potential Issues",id:"other-potential-issues",depth:4}],title:"experiments.lazyCompilation",frontmatter:{sidebar_label:"lazyCompilation"}}}}]);