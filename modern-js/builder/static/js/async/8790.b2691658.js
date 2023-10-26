(self.webpackChunk_modern_js_builder_doc=self.webpackChunk_modern_js_builder_doc||[]).push([["8790"],{14030:function(e,r,n){"use strict";e.exports={"next-steps":"next-steps-d701ac",nextSteps:"next-steps-d701ac"}},20845:function(e,r,n){"use strict";e.exports={description:"description-_90ddf",description:"description-_90ddf",step:"step-_975a2",step:"step-_975a2",title:"title-_7a2cc",title:"title-_7a2cc"}},25571:function(e,r,n){"use strict";n.r(r),n.d(r,{default:function(){return p}});var s=n("15169"),t=n("43932"),i=n("9880"),l=n("23169"),o=n("41424"),d=n("70792"),a=n("69571");function c(e){var r=Object.assign({h1:"h1",a:"a",p:"p",strong:"strong",h2:"h2",img:"img",ul:"ul",li:"li",h3:"h3",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,l.useMDXComponents)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(r.h1,{id:"introduction",children:["Introduction",(0,i.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#introduction",children:"#"})]}),"\n",(0,i.jsxs)(r.p,{children:["Modern.js Builder is ",(0,i.jsx)(r.strong,{children:"a Build Engine for web development"}),"."]}),"\n",(0,i.jsx)(r.p,{children:"With the growing of the front-end ecosystem, more and more build tools and plugins are created. For most developers, the configuration and dependencies required to build a web application have become complex; the cost of finding best practices for developers has also risen."}),"\n",(0,i.jsx)(r.p,{children:"In order to reduce the complexity and make it easier to build a project, we abstracted the build abilities based on the practical experience of Modern.js, and created the open source tool Modern.js Builder."}),"\n",(0,i.jsxs)(r.h2,{id:"rust-tools",children:["Rust Tools",(0,i.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#rust-tools",children:"#"})]}),"\n",(0,i.jsxs)(r.p,{children:["In recent years, the trend in front-end toolchain has been to re-implement them with native programming languages like Rust for better performance. Some high-performance tools have created, such as ",(0,i.jsx)(r.a,{href:"https://www.rspack.dev/",target:"_blank",rel:"noopener noreferrer",children:"Rspack"}),", ",(0,i.jsx)(r.a,{href:"https://swc.rs/",target:"_blank",rel:"noopener noreferrer",children:"SWC"}),", etc., and their use is gradually expanding. However, there are many differences between these Rust tools and JavaScript tools, including functional differences, configuration inconsistencies, which make it difficult for users to migrate."]}),"\n",(0,i.jsxs)(r.p,{children:["The Rust process of the front-end toolchain will continue for a long time, ",(0,i.jsx)(r.strong,{children:"Modern.js Builder is expected to help developers better transition to Rust tools"}),". Whether it's JavaScript tools, Rust tools, or even low-level bundlers like webpack, they're all replaceable components in Modern.js Builder. You can incrementally replace these components by turning on configuration or enabling plugins, and Modern.js Builder will smooth out the major differences and help users migrate."]}),"\n",(0,i.jsxs)(r.h2,{id:"position",children:["Position",(0,i.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#position",children:"#"})]}),"\n",(0,i.jsx)(r.p,{children:"Modern.js Builder is a build tool serving the upper-level front-end frameworks. It focuses on solving problems in web application building, and expects to provide out-of-box building abilities for front-end frameworks."}),"\n",(0,i.jsx)("img",{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/zq-uylkvT/ljhwZthlaukjlkulzlp/builder-layers-0824.png",style:{maxWidth:"540px",width:"100%"}}),"\n",(0,i.jsx)(r.p,{children:"If you are developing a front-end framework, or developing a scaffolding for a front-end application, Builder can provide most of the build logics for you, which allowing you to focus on implementing other features of the framework."}),"\n",(0,i.jsx)(r.p,{children:"If you are a business developer, in most cases, you do not need to manually install Builder in your projects. We recommend that you use the upper-level frameworks based on Builder."}),"\n",(0,i.jsx)(r.p,{children:"Currently, the following front-end frameworks are already using Builder:"}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.a,{href:"https://github.com/web-infra-dev/modern.js",target:"_blank",rel:"noopener noreferrer",children:"Modern.js"})," Framework (Open source)."]}),"\n",(0,i.jsx)(r.li,{children:"EdenX Framework and PIA Framework inside ByteDance."}),"\n"]}),"\n",(0,i.jsxs)(r.h2,{id:"features",children:["Features",(0,i.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#features",children:"#"})]}),"\n",(0,i.jsxs)(r.h3,{id:"support-rspack-build",children:["Support Rspack Build",(0,i.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#support-rspack-build",children:"#"})]}),"\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.strong,{children:"Builder supports both webpack and Rspack"}),", so you can switch between the stable Webpack and the faster Rspack."]}),"\n","\n",(0,i.jsx)(o.default,{}),"\n",(0,i.jsxs)(r.p,{children:["By default, Builder uses webpack 5 as the bundler. Although the compilation speed of webpack is not ideal, it is still the most mature and ecological bundler in the community. Based on webpack, Builder integrates ",(0,i.jsx)(r.a,{href:"https://github.com/babel/babel",target:"_blank",rel:"noopener noreferrer",children:"Babel"}),", ",(0,i.jsx)(r.a,{href:"https://github.com/postcss/postcss",target:"_blank",rel:"noopener noreferrer",children:"PostCSS"}),", ",(0,i.jsx)(r.a,{href:"https://github.com/terser/terser",target:"_blank",rel:"noopener noreferrer",children:"terser"})," and other tools to transform or minify codes. Builder also supports replacing some compile tools with native tools to improve compilation speed, such as replacing babel/terser with ",(0,i.jsx)(r.a,{href:"https://github.com/swc-project/swc",target:"_blank",rel:"noopener noreferrer",children:"swc"})," or ",(0,i.jsx)(r.a,{href:"https://github.com/evanw/esbuild",target:"_blank",rel:"noopener noreferrer",children:"esbuild"}),"."]}),"\n",(0,i.jsxs)(r.p,{children:["If you have higher build performance requirements, you can easily switch to Rspack build mode, see ",(0,i.jsx)(r.a,{href:"/guide/advanced/rspack-start",children:"Using Rspack"})," for more information."]}),"\n",(0,i.jsxs)(r.h3,{id:"deep-optimization",children:["Deep optimization",(0,i.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#deep-optimization",children:"#"})]}),"\n",(0,i.jsxs)(r.p,{children:["Builder ",(0,i.jsx)(r.strong,{children:"makes full use of various optimization strategies"})," in the webpack ecosystem to ensure the artifacts performance in the production environment."]}),"\n",(0,i.jsxs)(r.p,{children:["Taking the chunk splitting scenario as an example, the webpack's splitChunks config is complex, and Builder makes it as an out-of-the-box ",(0,i.jsx)(r.a,{href:"/en/api/config-performance#performancechunksplit",children:"performance.chunkSplit"})," config, it will split common third-party libraries into chunks to make page loading faster."]}),"\n",(0,i.jsxs)(r.h3,{id:"extensible-plugin-system",children:["Extensible Plugin System",(0,i.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#extensible-plugin-system",children:"#"})]}),"\n",(0,i.jsx)(r.p,{children:"Provides rich configuration options and a flexible plugin system to support in-depth customization of all features."}),"\n",(0,i.jsx)(r.p,{children:"For Builder, all building abilities are achieved through plugins:"}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsx)(r.li,{children:"Most of the plugins are lightweight, built in Builder, and developers can enable or disable them through configs."}),"\n",(0,i.jsx)(r.li,{children:"Some plugins are more complex and developed as independent npm packages, developers can install and use them as needed."}),"\n"]}),"\n",(0,i.jsx)(r.p,{children:"Builder also supports custom plugins, so framework developers can develop custom plugins to meet customized requirements."}),"\n",(0,i.jsxs)(r.h2,{id:"npm-packages",children:["npm packages",(0,i.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#npm-packages",children:"#"})]}),"\n",(0,i.jsx)(r.p,{children:"Below is the npm package published by Builder."}),"\n",(0,i.jsxs)(r.table,{children:["\n",(0,i.jsxs)(r.thead,{children:["\n",(0,i.jsxs)(r.tr,{children:["\n",(0,i.jsx)(r.th,{children:"Package"}),"\n",(0,i.jsx)(r.th,{children:"Version"}),"\n",(0,i.jsx)(r.th,{children:"Description"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(r.tbody,{children:["\n",(0,i.jsxs)(r.tr,{children:["\n",(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"https://www.npmjs.com/package/@modern-js/builder",target:"_blank",rel:"noopener noreferrer",children:"@modern-js/builder"})}),"\n",(0,i.jsx)(r.td,{children:(0,i.jsx)(r.img,{src:"https://img.shields.io/npm/v/@modern-js/builder?style=flat-square",alt:""})}),"\n",(0,i.jsx)(r.td,{children:"Core package of Builder"}),"\n"]}),"\n",(0,i.jsxs)(r.tr,{children:["\n",(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"https://www.npmjs.com/package/@modern-js/builder-cli",target:"_blank",rel:"noopener noreferrer",children:"@modern-js/builder-cli"})}),"\n",(0,i.jsx)(r.td,{children:(0,i.jsx)(r.img,{src:"https://img.shields.io/npm/v/@modern-js/builder-cli?style=flat-square",alt:""})}),"\n",(0,i.jsx)(r.td,{children:"CLI of Builder"}),"\n"]}),"\n",(0,i.jsxs)(r.tr,{children:["\n",(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"https://www.npmjs.com/package/@modern-js/builder-webpack-provider",target:"_blank",rel:"noopener noreferrer",children:"@modern-js/builder-webpack-provider"})}),"\n",(0,i.jsx)(r.td,{children:(0,i.jsx)(r.img,{src:"https://img.shields.io/npm/v/@modern-js/builder-webpack-provider?style=flat-square",alt:""})}),"\n",(0,i.jsx)(r.td,{children:"Provides webpack build ability"}),"\n"]}),"\n",(0,i.jsxs)(r.tr,{children:["\n",(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"https://www.npmjs.com/package/@modern-js/builder-rspack-provider",target:"_blank",rel:"noopener noreferrer",children:"@modern-js/builder-rspack-provider"})}),"\n",(0,i.jsx)(r.td,{children:(0,i.jsx)(r.img,{src:"https://img.shields.io/npm/v/@modern-js/builder-rspack-provider?style=flat-square",alt:""})}),"\n",(0,i.jsx)(r.td,{children:"Provides Rspack build ability"}),"\n"]}),"\n",(0,i.jsxs)(r.tr,{children:["\n",(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"https://www.npmjs.com/package/@modern-js/builder-plugin-vue",target:"_blank",rel:"noopener noreferrer",children:"@modern-js/builder-plugin-vue"})}),"\n",(0,i.jsx)(r.td,{children:(0,i.jsx)(r.img,{src:"https://img.shields.io/npm/v/@modern-js/builder-plugin-vue?style=flat-square",alt:""})}),"\n",(0,i.jsx)(r.td,{children:"Vue 3 Plugin"}),"\n"]}),"\n",(0,i.jsxs)(r.tr,{children:["\n",(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"https://www.npmjs.com/package/@modern-js/builder-plugin-vue2",target:"_blank",rel:"noopener noreferrer",children:"@modern-js/builder-plugin-vue2"})}),"\n",(0,i.jsx)(r.td,{children:(0,i.jsx)(r.img,{src:"https://img.shields.io/npm/v/@modern-js/builder-plugin-vue2?style=flat-square",alt:""})}),"\n",(0,i.jsx)(r.td,{children:"Vue 2 Plugin"}),"\n"]}),"\n",(0,i.jsxs)(r.tr,{children:["\n",(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"https://www.npmjs.com/package/@modern-js/builder-plugin-swc",target:"_blank",rel:"noopener noreferrer",children:"@modern-js/builder-plugin-swc"})}),"\n",(0,i.jsx)(r.td,{children:(0,i.jsx)(r.img,{src:"https://img.shields.io/npm/v/@modern-js/builder-plugin-swc?style=flat-square",alt:""})}),"\n",(0,i.jsx)(r.td,{children:"SWC Plugin"}),"\n"]}),"\n",(0,i.jsxs)(r.tr,{children:["\n",(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"https://www.npmjs.com/package/@modern-js/builder-plugin-stylus",target:"_blank",rel:"noopener noreferrer",children:"@modern-js/builder-plugin-stylus"})}),"\n",(0,i.jsx)(r.td,{children:(0,i.jsx)(r.img,{src:"https://img.shields.io/npm/v/@modern-js/builder-plugin-stylus?style=flat-square",alt:""})}),"\n",(0,i.jsx)(r.td,{children:"Stylus Plugin"}),"\n"]}),"\n",(0,i.jsxs)(r.tr,{children:["\n",(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"https://www.npmjs.com/package/@modern-js/builder-plugin-esbuild",target:"_blank",rel:"noopener noreferrer",children:"@modern-js/builder-plugin-esbuild"})}),"\n",(0,i.jsx)(r.td,{children:(0,i.jsx)(r.img,{src:"https://img.shields.io/npm/v/@modern-js/builder-plugin-esbuild?style=flat-square",alt:""})}),"\n",(0,i.jsx)(r.td,{children:"Esbuild Plugin"}),"\n"]}),"\n",(0,i.jsxs)(r.tr,{children:["\n",(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"https://www.npmjs.com/package/@modern-js/builder-plugin-node-polyfill",target:"_blank",rel:"noopener noreferrer",children:"@modern-js/builder-plugin-node-polyfill"})}),"\n",(0,i.jsx)(r.td,{children:(0,i.jsx)(r.img,{src:"https://img.shields.io/npm/v/@modern-js/builder-plugin-node-polyfill?style=flat-square",alt:""})}),"\n",(0,i.jsx)(r.td,{children:"Node Polyfill Plugin"}),"\n"]}),"\n",(0,i.jsxs)(r.tr,{children:["\n",(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"https://www.npmjs.com/package/@modern-js/builder-plugin-image-compress",target:"_blank",rel:"noopener noreferrer",children:"@modern-js/builder-plugin-image-compress"})}),"\n",(0,i.jsx)(r.td,{children:(0,i.jsx)(r.img,{src:"https://img.shields.io/npm/v/@modern-js/builder-plugin-image-compress?style=flat-square",alt:""})}),"\n",(0,i.jsx)(r.td,{children:"Image Compress Plugin"}),"\n"]}),"\n",(0,i.jsxs)(r.tr,{children:["\n",(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"https://www.npmjs.com/package/@modern-js/builder-shared",target:"_blank",rel:"noopener noreferrer",children:"@modern-js/builder-shared"})}),"\n",(0,i.jsx)(r.td,{children:(0,i.jsx)(r.img,{src:"https://img.shields.io/npm/v/@modern-js/builder-shared?style=flat-square",alt:""})}),"\n",(0,i.jsx)(r.td,{children:"Shared modules of Builder"}),"\n"]}),"\n",(0,i.jsxs)(r.tr,{children:["\n",(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"https://www.npmjs.com/package/@modern-js/builder-doc",target:"_blank",rel:"noopener noreferrer",children:"@modern-js/builder-doc"})}),"\n",(0,i.jsx)(r.td,{children:(0,i.jsx)(r.img,{src:"https://img.shields.io/npm/v/@modern-js/builder-doc?style=flat-square",alt:""})}),"\n",(0,i.jsx)(r.td,{children:"Documentation snippets of Builder"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(r.p,{children:["You can view the source code of these packages in the ",(0,i.jsx)(r.a,{href:"https://github.com/web-infra-dev/modern.js/tree/main/packages/builder/",target:"_blank",rel:"noopener noreferrer",children:"packages/builder"})," directory of the modern.js repository."]}),"\n",(0,i.jsxs)(r.h2,{id:"next-step",children:["Next Step",(0,i.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#next-step",children:"#"})]}),"\n",(0,i.jsx)(r.p,{children:"You may want:"}),"\n","\n",(0,i.jsxs)(d.default,{children:[(0,i.jsx)(a.default,{href:"/guide/quick-start.html",title:"Quick Start",description:"Learn how to use Builder"}),(0,i.jsx)(a.default,{href:"/guide/features.html",title:"All Features",description:"Learn all features of Builder"}),(0,i.jsx)(a.default,{href:"/api/index.html",title:"API Reference",description:"View detailed API documentation"})]})]})}function h(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=Object.assign({},(0,l.useMDXComponents)(),e.components).wrapper;return r?(0,i.jsx)(r,(0,t._)((0,s._)({},e),{children:(0,i.jsx)(c,(0,s._)({},e))})):c(e)}var p=h;h.__RSPRESS_PAGE_META={},h.__RSPRESS_PAGE_META["en%2Fguide%2Fintroduction.mdx"]={toc:[{text:"Rust Tools",id:"rust-tools",depth:2},{text:"Position",id:"position",depth:2},{text:"Features",id:"features",depth:2},{text:"Support Rspack Build",id:"support-rspack-build",depth:3},{text:"Deep optimization",id:"deep-optimization",depth:3},{text:"Extensible Plugin System",id:"extensible-plugin-system",depth:3},{text:"npm packages",id:"npm-packages",depth:2},{text:"Next Step",id:"next-step",depth:2}],title:"Introduction"}},22457:function(e,r,n){"use strict";n.r(r),n.d(r,{default:function(){return a}});var s=n("15169"),t=n("43932"),i=n("9880"),l=n("23169");function o(e){var r=Object.assign({p:"p",a:"a"},(0,l.useMDXComponents)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.a,{href:"https://www.rspack.dev/",target:"_blank",rel:"noopener noreferrer",children:"Rspack"})," is a high performance JavaScript bundler based on Rust, with interoperability with the webpack ecosystem, allowing it to be integrated into webpack projects at a low cost while providing better build performance."]}),"\n",(0,i.jsx)(r.p,{children:"Compared to webpack, Rspack has significantly improved build performance, thanks not only to the language advantages brought by Rust, but also to its parallel architecture and incremental compilation features. Benchmarking has shown that Rspack can provide 5-10 times better compilation performance."})]})}function d(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=Object.assign({},(0,l.useMDXComponents)(),e.components).wrapper;return r?(0,i.jsx)(r,(0,t._)((0,s._)({},e),{children:(0,i.jsx)(o,(0,s._)({},e))})):o(e)}var a=d;d.__RSPRESS_PAGE_META={},d.__RSPRESS_PAGE_META["en%2Fshared%2Frspack.md"]={toc:[],title:""}},41424:function(e,r,n){"use strict";n.r(r),n.d(r,{default:function(){return c}});var s=n("15169"),t=n("43932"),i=n("9880"),l=n("23169"),o=n("22457");function d(e){var r=Object.assign({div:"div"},(0,l.useMDXComponents)(),e.components);return(0,i.jsxs)(r.div,{className:"rspress-directive tip",children:[(0,i.jsx)(r.div,{className:"rspress-directive-title",children:"What is Rspack"}),(0,i.jsxs)(r.div,{className:"rspress-directive-content",children:["\n","\n",(0,i.jsx)(o.default,{}),"\n"]})]})}function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=Object.assign({},(0,l.useMDXComponents)(),e.components).wrapper;return r?(0,i.jsx)(r,(0,t._)((0,s._)({},e),{children:(0,i.jsx)(d,(0,s._)({},e))})):d(e)}var c=a;a.__RSPRESS_PAGE_META={},a.__RSPRESS_PAGE_META["en%2Fshared%2FrspackTip.mdx"]={toc:[],title:""}},70792:function(e,r,n){"use strict";n.r(r),n.d(r,{default:function(){return i}});var s=n("9880"),t=n("14030"),i=function(e){return(0,s.jsx)("div",{className:t.nextSteps,children:e.children})}},69571:function(e,r,n){"use strict";n.r(r),n.d(r,{default:function(){return l}});var s=n("9880"),t=n("96924"),i=n("20845"),l=function(e){return(0,s.jsxs)("a",{className:i.step,href:(0,t.useUrl)(e.href),children:[(0,s.jsx)("p",{className:i.title,children:e.title}),(0,s.jsx)("p",{className:i.description,children:e.description})]})}},463:function(e,r,n){"use strict";n.r(r);var s=n("4866");n.es(s,r)},46088:function(e,r,n){"use strict";n.r(r);var s=n("463");n.es(s,r)},96924:function(e,r,n){"use strict";n.r(r),n.d(r,{useUrl:function(){return t}});var s=n("46088");function t(e){var r=(0,s.useLang)();return(0,s.withBase)("zh"===r?e:"/en".concat(e))}}}]);