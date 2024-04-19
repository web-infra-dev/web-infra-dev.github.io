/*! For license information please see 53109.e2df2c40.js.LICENSE.txt */
(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["53109"],{35192:function(e,r,n){"use strict";n.r(r);var a=n("39980"),t=n("9580");function i(e){let r=Object.assign({h1:"h1",a:"a",h2:"h2",p:"p",code:"code",ul:"ul",li:"li"},(0,t.ah)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(r.h1,{id:"glossary",children:["Glossary",(0,a.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#glossary",children:"#"})]}),"\n",(0,a.jsxs)(r.h2,{id:"bff",children:["BFF",(0,a.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#bff",children:"#"})]}),"\n",(0,a.jsx)(r.p,{children:'BFF is short for "Backend For Frontend". It is an architecture pattern that involves creating a backend service for frontend applications.'}),"\n",(0,a.jsx)(r.p,{children:"The BFF service acts as an intermediary between the frontend application and the server API, and can provide customized APIs for the frontend to use. This allows frontend developers to have more control over the data and functionality they need, without relying on the backend service to provide the corresponding capabilities."}),"\n",(0,a.jsxs)(r.h2,{id:"bundler",children:["Bundler",(0,a.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#bundler",children:"#"})]}),"\n",(0,a.jsxs)(r.p,{children:["Refers to module bundlers such as ",(0,a.jsx)(r.a,{href:"https://webpack.js.org/",target:"_blank",rel:"noopener noreferrer",children:"webpack"}),", ",(0,a.jsx)(r.a,{href:"https://www.rspack.dev/",target:"_blank",rel:"noopener noreferrer",children:"Rspack"}),"."]}),"\n",(0,a.jsx)(r.p,{children:"The main goal of bundlers is to bundle JavaScript, CSS and other files together, and the bundled files can be used in the browser, Node.js or other environments. When bundler processes the Web application, it builds a dependency graph and then combines every module into one or more bundles."}),"\n",(0,a.jsxs)(r.h2,{id:"builder",children:["Builder",(0,a.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#builder",children:"#"})]}),"\n",(0,a.jsx)(r.p,{children:"Refers to the build layer of Modern.js. The goal of Builder is to provide Modern.js users with out-of-the-box build capabilities and support seamless switching between webpack and Rspack."}),"\n",(0,a.jsxs)(r.p,{children:["The previous version of Modern.js ",(0,a.jsx)(r.code,{children:"2.46.0"})," used ",(0,a.jsx)(r.code,{children:"@modern-js/builder"}),", which was upgraded to ",(0,a.jsx)(r.a,{href:"https://rsbuild.dev/",target:"_blank",rel:"noopener noreferrer",children:"Rsbuild"})," starting from ",(0,a.jsx)(r.code,{children:"2.46.0"}),"."]}),"\n",(0,a.jsxs)(r.h2,{id:"csr",children:["CSR",(0,a.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#csr",children:"#"})]}),"\n",(0,a.jsx)(r.p,{children:'CSR stands for "Client-Side Rendering". It means that the page is rendered in the browser using JavaScript, and logic such as data fetching, templates, and routing is completed on the client side rather than the server.'}),"\n",(0,a.jsx)(r.p,{children:"In CSR, the server sends an empty HTML shell and some JavaScript scripts to the browser, and the browser fetching data from the server's API and renders dynamic content to the page."}),"\n",(0,a.jsxs)(r.h2,{id:"garfish",children:["Garfish",(0,a.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#garfish",children:"#"})]}),"\n",(0,a.jsxs)(r.p,{children:[(0,a.jsx)(r.a,{href:"https://garfishjs.org/",target:"_blank",rel:"noopener noreferrer",children:"Garfish"})," is a micro-frontend solution mainly used to solve problems such as cross-team collaboration and diversified technology systems in web applications."]}),"\n",(0,a.jsx)(r.p,{children:"Starting from the architecture level, it combines multiple independently delivered frontend applications into a whole. These frontend applications can be developed, tested, and deployed independently, but in the user's perspective, they are still cohesive single products."}),"\n",(0,a.jsxs)(r.h2,{id:"micro-frontend",children:["Micro-frontend",(0,a.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#micro-frontend",children:"#"})]}),"\n",(0,a.jsx)(r.p,{children:"Micro-frontend (MFE) is an architecture style similar to microservices. It is a composition of multiple independently delivered frontend applications, forming a cohesive whole. MFE decomposes frontend applications into smaller, simpler applications that can be developed, tested, and deployed independently while still appearing as a cohesive single product to users."}),"\n",(0,a.jsx)(r.p,{children:"It primarily addresses two problems:"}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsxs)(r.li,{children:["\n",(0,a.jsx)(r.p,{children:"Difficulty in maintaining large and complex applications as they evolve over time."}),"\n"]}),"\n",(0,a.jsxs)(r.li,{children:["\n",(0,a.jsx)(r.p,{children:"Inefficiency caused by cross-team or cross-department collaboration in project development."}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(r.h2,{id:"module-federation",children:["Module Federation",(0,a.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#module-federation",children:"#"})]}),"\n",(0,a.jsx)(r.p,{children:"Module Federation (MF) is a feature of Webpack. It allows a JavaScript application to dynamically load code from another application, and in the process, share dependencies. If an application consuming a federated module does not have a dependency needed by the federated code, Webpack will download the missing dependency from that federated build origin."}),"\n",(0,a.jsx)(r.p,{children:"This allows for the creation of micro-frontend-style applications, where multiple systems can share code and be dynamically updated without having to rebuild the entire application."}),"\n",(0,a.jsxs)(r.p,{children:["Modern.js provides an example project for Module Federation. Please refer to ",(0,a.jsx)(r.a,{href:"https://github.com/module-federation/module-federation-examples/tree/db5bdbeee56f779999a2c591fc553eb94eb20b36/modernjs",target:"_blank",rel:"noopener noreferrer",children:"module-federation-examples - modernjs"}),"."]}),"\n",(0,a.jsxs)(r.p,{children:["You can also read the ",(0,a.jsx)(r.a,{href:"https://webpack.js.org/concepts/module-federation/",target:"_blank",rel:"noopener noreferrer",children:"webpack Module Federation documentation"})," to learn more concepts."]}),"\n",(0,a.jsxs)(r.h2,{id:"rsbuild",children:["Rsbuild",(0,a.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#rsbuild",children:"#"})]}),"\n",(0,a.jsxs)(r.p,{children:[(0,a.jsx)(r.a,{href:"https://rsbuild.dev/",target:"_blank",rel:"noopener noreferrer",children:"Rsbuild"})," is an Rspack-based build tool for the web. The main goal of Rsbuild is to provide out-of-the-box build capabilities for Rspack users, allowing developers to start a web project with zero configuration."]}),"\n",(0,a.jsx)(r.p,{children:"Rsbuild integrates high-performance Rust-based tools from the community, including Rspack and SWC, to provide first-class build speed and development experience."}),"\n",(0,a.jsxs)(r.h2,{id:"rspack",children:["Rspack",(0,a.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#rspack",children:"#"})]}),"\n",(0,a.jsxs)(r.p,{children:[(0,a.jsx)(r.a,{href:"https://www.rspack.dev/",target:"_blank",rel:"noopener noreferrer",children:"Rspack"})," is a high performance JavaScript bundler based on Rust, with interoperability with the webpack ecosystem, allowing it to be integrated into webpack projects at a low cost while providing better build performance."]}),"\n",(0,a.jsx)(r.p,{children:"Compared to webpack, Rspack has significantly improved build performance, thanks not only to the language advantages brought by Rust, but also to its parallel architecture and incremental compilation features. Benchmarking has shown that Rspack can provide 5-10 times better compilation performance."}),"\n",(0,a.jsxs)(r.h2,{id:"ssr",children:["SSR",(0,a.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#ssr",children:"#"})]}),"\n",(0,a.jsx)(r.p,{children:'SSR stands for "Server-Side Rendering". It means that the HTML of the web page is generated by the server and sent to the client, rather than sending only an empty HTML shell and relying on JavaScript to generate the page content.'}),"\n",(0,a.jsx)(r.p,{children:"In traditional client-side rendering, the server sends an empty HTML shell and some JavaScript scripts to the client, and then fetching data from the server's API and fills the page with dynamic content. This leads to slow initial page loading times and is not conducive to user experience and SEO."}),"\n",(0,a.jsx)(r.p,{children:"With SSR, the server generates HTML that already contains dynamic content and sends it to the client. This makes the initial page loading faster and more SEO-friendly, as search engines can crawl the rendered page."}),"\n",(0,a.jsxs)(r.h2,{id:"ssg",children:["SSG",(0,a.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#ssg",children:"#"})]}),"\n",(0,a.jsx)(r.p,{children:'SSG stands for "Static Site Generation". It means that web pages are pre-rendered as static HTML and served directly to the client, without the need for the server to generate HTML in real-time.'}),"\n",(0,a.jsx)(r.p,{children:"In traditional SSR, the server generates HTML in real-time every time a user requests a page. With SSG, HTML can be generated in advance during the build process and hosted on a CDN or other static assets service."}),"\n",(0,a.jsx)(r.p,{children:"Compared to traditional SSR, SSG can provide faster loading speeds and less server-side overhead, as there is no need to maintain a server to generate HTML in real-time. However, SSG is not suitable for websites that require dynamic content, as the HTML is generated during the build process and does not support real-time updates."}),"\n",(0,a.jsxs)(r.h2,{id:"swc",children:["SWC",(0,a.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#swc",children:"#"})]}),"\n",(0,a.jsxs)(r.p,{children:[(0,a.jsx)(r.a,{href:"https://SWC.rs/",target:"_blank",rel:"noopener noreferrer",children:"SWC"})," (Speedy Web Compiler) is a transformer and minimizer for JavaScript and TypeScript based on ",(0,a.jsx)(r.code,{children:"Rust"}),". SWC can provide the same abilities with Babel, and it's more than 10x faster than Babel."]}),"\n",(0,a.jsx)(r.p,{children:"Modern.js has a out-of-box plugin for SWC, power your Web application with Polyfill and minification, we also port some common used Babel plugins to SWC."})]})}function s(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:r}=Object.assign({},(0,t.ah)(),e.components);return r?(0,a.jsx)(r,{...e,children:(0,a.jsx)(i,{...e})}):i(e)}r.default=s,s.__RSPRESS_PAGE_META={},s.__RSPRESS_PAGE_META["en%2Fguides%2Fget-started%2Fglossary.mdx"]={toc:[{text:"BFF",id:"bff",depth:2},{text:"Bundler",id:"bundler",depth:2},{text:"Builder",id:"builder",depth:2},{text:"CSR",id:"csr",depth:2},{text:"Garfish",id:"garfish",depth:2},{text:"Micro-frontend",id:"micro-frontend",depth:2},{text:"Module Federation",id:"module-federation",depth:2},{text:"Rsbuild",id:"rsbuild",depth:2},{text:"Rspack",id:"rspack",depth:2},{text:"SSR",id:"ssr",depth:2},{text:"SSG",id:"ssg",depth:2},{text:"SWC",id:"swc",depth:2}],title:"Glossary",frontmatter:{sidebar_position:4}}}}]);