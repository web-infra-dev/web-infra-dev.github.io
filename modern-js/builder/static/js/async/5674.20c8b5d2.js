"use strict";(self.webpackChunk_modern_js_builder_doc=self.webpackChunk_modern_js_builder_doc||[]).push([["5674"],{5250:function(e,r,n){n.r(r),n.d(r,{default:function(){return a}});var i=n(9980),d=n(9580);function s(e){let r=Object.assign({h1:"h1",a:"a",div:"div",p:"p",ul:"ul",li:"li",h2:"h2",code:"code",strong:"strong"},(0,d.ah)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(r.h1,{id:"glossary",children:["Glossary",(0,i.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#glossary",children:"#"})]}),"\n",(0,i.jsxs)(r.div,{className:"rspress-directive tip",children:[(0,i.jsx)(r.div,{className:"rspress-directive-title",children:"Notice"}),(0,i.jsxs)(r.div,{className:"rspress-directive-content",children:[(0,i.jsx)(r.p,{children:"Modern.js Builder has been rebranded as Rsbuild. This document will no longer be updated."}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:["If you are using the Modern.js framework, please visit the ",(0,i.jsx)(r.a,{href:"https://modernjs.dev/",target:"_blank",rel:"noopener noreferrer",children:"Modern.js framework documentation"})," directly."]}),"\n",(0,i.jsxs)(r.li,{children:["If you are using the CLI or Node API of Modern.js Builder, you can easily migrate to Rsbuild, please visit the ",(0,i.jsx)(r.a,{href:"https://github.com/web-infra-dev/rsbuild",target:"_blank",rel:"noopener noreferrer",children:"Rsbuild repository"})," for more information."]}),"\n"]}),"\n"]})]}),"\n",(0,i.jsxs)(r.h2,{id:"bundler",children:["Bundler",(0,i.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#bundler",children:"#"})]}),"\n",(0,i.jsxs)(r.p,{children:["Refers to module bundlers such as ",(0,i.jsx)(r.a,{href:"https://webpack.js.org/",target:"_blank",rel:"noopener noreferrer",children:"webpack"}),", ",(0,i.jsx)(r.a,{href:"https://www.rspack.dev/",target:"_blank",rel:"noopener noreferrer",children:"Rspack"}),"."]}),"\n",(0,i.jsx)(r.p,{children:"The main goal of bundlers is to bundle JavaScript, CSS and other files together, and the bundled files can be used in the browser, Node.js or other environments. When bundler processes the Web application, it builds a dependency graph and then combines every module into one or more bundles."}),"\n",(0,i.jsxs)(r.h2,{id:"builder",children:["Builder",(0,i.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#builder",children:"#"})]}),"\n",(0,i.jsx)(r.p,{children:"Refers to the build layer of Modern.js. The goal of Builder is to provide Modern.js users with out-of-the-box build capabilities and support seamless switching between webpack and Rspack."}),"\n",(0,i.jsxs)(r.p,{children:["The previous version of Modern.js ",(0,i.jsx)(r.code,{children:"MAJOR_VERSION.46.0"})," used ",(0,i.jsx)(r.code,{children:"@modern-js/builder"}),", which was upgraded to ",(0,i.jsx)(r.a,{href:"https://rsbuild.dev/",target:"_blank",rel:"noopener noreferrer",children:"Rsbuild"})," starting from ",(0,i.jsx)(r.code,{children:"MAJOR_VERSION.46.0"}),"."]}),"\n",(0,i.jsxs)(r.h2,{id:"builder-provider",children:["Builder Provider",(0,i.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#builder-provider",children:"#"})]}),"\n",(0,i.jsx)(r.p,{children:"Builder Provider is a part of Builder. Providers implements corresponding build feature based on specific bundlers."}),"\n",(0,i.jsx)(r.p,{children:"Currently there are two Providers:"}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.code,{children:"@modern-js/builder-webpack-provider"}),": Based on webpack."]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.code,{children:"@modern-js/builder-rspack-provider"}),": Based on rspack."]}),"\n"]}),"\n",(0,i.jsxs)(r.h2,{id:"micro-frontend",children:["Micro-frontend",(0,i.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#micro-frontend",children:"#"})]}),"\n",(0,i.jsx)(r.p,{children:"Micro-frontend (MFE) is an architecture style similar to microservices. It is a composition of multiple independently delivered frontend applications, forming a cohesive whole. MFE decomposes frontend applications into smaller, simpler applications that can be developed, tested, and deployed independently while still appearing as a cohesive single product to users."}),"\n",(0,i.jsx)(r.p,{children:"It primarily addresses two problems:"}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:["\n",(0,i.jsx)(r.p,{children:"Difficulty in maintaining large and complex applications as they evolve over time."}),"\n"]}),"\n",(0,i.jsxs)(r.li,{children:["\n",(0,i.jsx)(r.p,{children:"Inefficiency caused by cross-team or cross-department collaboration in project development."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(r.h2,{id:"module-federation",children:["Module Federation",(0,i.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#module-federation",children:"#"})]}),"\n",(0,i.jsx)(r.p,{children:"Module Federation (MF) is a feature of Webpack. It allows a JavaScript application to dynamically load code from another application, and in the process, share dependencies. If an application consuming a federated module does not have a dependency needed by the federated code, Webpack will download the missing dependency from that federated build origin."}),"\n",(0,i.jsx)(r.p,{children:"This allows for the creation of micro-frontend-style applications, where multiple systems can share code and be dynamically updated without having to rebuild the entire application."}),"\n",(0,i.jsxs)(r.p,{children:["Modern.js provides an example project for Module Federation. Please refer to ",(0,i.jsx)(r.a,{href:"https://github.com/module-federation/module-federation-examples/tree/db5bdbeee56f779999a2c591fc553eb94eb20b36/modernjs",target:"_blank",rel:"noopener noreferrer",children:"module-federation-examples - modernjs"}),"."]}),"\n",(0,i.jsxs)(r.p,{children:["You can also read the ",(0,i.jsx)(r.a,{href:"https://webpack.js.org/concepts/module-federation/",target:"_blank",rel:"noopener noreferrer",children:"webpack Module Federation documentation"})," to learn more concepts."]}),"\n",(0,i.jsxs)(r.h2,{id:"rspack",children:["Rspack",(0,i.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#rspack",children:"#"})]}),"\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.a,{href:"https://www.rspack.dev/",target:"_blank",rel:"noopener noreferrer",children:"Rspack"})," is a high performance JavaScript bundler based on Rust, with interoperability with the webpack ecosystem, allowing it to be integrated into webpack projects at a low cost while providing better build performance."]}),"\n",(0,i.jsx)(r.p,{children:"Compared to webpack, Rspack has significantly improved build performance, thanks not only to the language advantages brought by Rust, but also to its parallel architecture and incremental compilation features. Benchmarking has shown that Rspack can provide 5-10 times better compilation performance."}),"\n",(0,i.jsxs)(r.h2,{id:"modernjs",children:["Modern.js",(0,i.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#modernjs",children:"#"})]}),"\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.strong,{children:"Modern.js is an open source web engineering system from ByteDance"}),", which provides multiple solutions to help developers solve problems in different development scenarios."]}),"\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.a,{href:"https://github.com/web-infra-dev/modern.js",target:"_blank",rel:"noopener noreferrer",children:"Modern.js Repository"}),"."]}),"\n",(0,i.jsxs)(r.h2,{id:"edenx",children:["EdenX",(0,i.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#edenx",children:"#"})]}),"\n",(0,i.jsx)(r.p,{children:"ByteDance's internal web engineering system, implemented based on Modern.js."})]})}function o(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:r}=Object.assign({},(0,d.ah)(),e.components);return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(s,{...e})}):s(e)}let a=o;o.__RSPRESS_PAGE_META={},o.__RSPRESS_PAGE_META["en%2Fguide%2Fglossary.mdx"]={toc:[{text:"Bundler",id:"bundler",depth:2},{text:"Builder",id:"builder",depth:2},{text:"Builder Provider",id:"builder-provider",depth:2},{text:"Micro-frontend",id:"micro-frontend",depth:2},{text:"Module Federation",id:"module-federation",depth:2},{text:"Rspack",id:"rspack",depth:2},{text:"Modern.js",id:"modernjs",depth:2},{text:"EdenX",id:"edenx",depth:2}],title:"Glossary",frontmatter:{}}}}]);