(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["44210"],{17940:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return c}});var t=r("15169"),a=r("43932"),s=r("9880"),i=r("23169");function o(e){var n=Object.assign({p:"p",img:"img"},(0,i.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:'Refers to the build tool of Modern.js. The goal of Builder is to "reuse the best practices of build tools".'}),"\n",(0,s.jsx)(n.p,{children:"Bundlers are low-level, when we build a project based on webpack, we need to fully understand the webpack config and many webpack plugins and loaders, then spend a lot of time to combine them."}),"\n",(0,s.jsx)(n.p,{children:"Builder is out-of-box. By using Builder, you can quickly gain the ability to build a web application."}),"\n",(0,s.jsx)(n.p,{children:"The layers within the Modern.js Builder are as follows:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/zq-uylkvT/ljhwZthlaukjlkulzlp/builder-struct-10092.png",alt:""})})]})}function d(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,i.useMDXComponents)(),e.components).wrapper;return n?(0,s.jsx)(n,(0,a._)((0,t._)({},e),{children:(0,s.jsx)(o,(0,t._)({},e))})):o(e)}var c=d;d.__RSPRESS_PAGE_META={},d.__RSPRESS_PAGE_META["..%2F..%2Fbuilder-doc%2Fdocs%2Fen%2Fshared%2Fbuilder.md"]={toc:[],title:""}},15391:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return c}});var t=r("15169"),a=r("43932"),s=r("9880"),i=r("23169");function o(e){var n=Object.assign({p:"p",a:"a"},(0,i.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["Refers to module bundlers such as ",(0,s.jsx)(n.a,{href:"https://webpack.js.org/",target:"_blank",rel:"noopener noreferrer",children:"webpack"}),", ",(0,s.jsx)(n.a,{href:"https://www.rspack.dev/",target:"_blank",rel:"noopener noreferrer",children:"Rspack"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"The main goal of bundlers is to bundle JavaScript, CSS and other files together, and the bundled files can be used in the browser, Node.js or other environments. When bundler processes the Web application, it builds a dependency graph and then combines every module into one or more bundles."})]})}function d(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,i.useMDXComponents)(),e.components).wrapper;return n?(0,s.jsx)(n,(0,a._)((0,t._)({},e),{children:(0,s.jsx)(o,(0,t._)({},e))})):o(e)}var c=d;d.__RSPRESS_PAGE_META={},d.__RSPRESS_PAGE_META["..%2F..%2Fbuilder-doc%2Fdocs%2Fen%2Fshared%2Fbundler.md"]={toc:[],title:""}},25016:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return c}});var t=r("15169"),a=r("43932"),s=r("9880"),i=r("23169");function o(e){var n=Object.assign({p:"p",ul:"ul",li:"li"},(0,i.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"Micro-frontend (MFE) is an architecture style similar to microservices. It is a composition of multiple independently delivered frontend applications, forming a cohesive whole. MFE decomposes frontend applications into smaller, simpler applications that can be developed, tested, and deployed independently while still appearing as a cohesive single product to users."}),"\n",(0,s.jsx)(n.p,{children:"It primarily addresses two problems:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Difficulty in maintaining large and complex applications as they evolve over time."}),"\n",(0,s.jsx)(n.li,{children:"Inefficiency caused by cross-team or cross-department collaboration in project development."}),"\n"]})]})}function d(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,i.useMDXComponents)(),e.components).wrapper;return n?(0,s.jsx)(n,(0,a._)((0,t._)({},e),{children:(0,s.jsx)(o,(0,t._)({},e))})):o(e)}var c=d;d.__RSPRESS_PAGE_META={},d.__RSPRESS_PAGE_META["..%2F..%2Fbuilder-doc%2Fdocs%2Fen%2Fshared%2Fmicro-frontend.md"]={toc:[],title:""}},7075:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return c}});var t=r("15169"),a=r("43932"),s=r("9880"),i=r("23169");function o(e){var n=Object.assign({p:"p",a:"a"},(0,i.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"Module Federation (MF) is a feature of Webpack. It allows a JavaScript application to dynamically load code from another application, and in the process, share dependencies. If an application consuming a federated module does not have a dependency needed by the federated code, Webpack will download the missing dependency from that federated build origin."}),"\n",(0,s.jsx)(n.p,{children:"This allows for the creation of micro-frontend-style applications, where multiple systems can share code and be dynamically updated without having to rebuild the entire application."}),"\n",(0,s.jsxs)(n.p,{children:["Modern.js provides an example project for Module Federation. Please refer to ",(0,s.jsx)(n.a,{href:"https://github.com/module-federation/module-federation-examples/tree/db5bdbeee56f779999a2c591fc553eb94eb20b36/modernjs",target:"_blank",rel:"noopener noreferrer",children:"module-federation-examples - modernjs"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["You can also read the ",(0,s.jsx)(n.a,{href:"https://webpack.js.org/concepts/module-federation/",target:"_blank",rel:"noopener noreferrer",children:"webpack Module Federation documentation"})," to learn more concepts."]})]})}function d(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,i.useMDXComponents)(),e.components).wrapper;return n?(0,s.jsx)(n,(0,a._)((0,t._)({},e),{children:(0,s.jsx)(o,(0,t._)({},e))})):o(e)}var c=d;d.__RSPRESS_PAGE_META={},d.__RSPRESS_PAGE_META["..%2F..%2Fbuilder-doc%2Fdocs%2Fen%2Fshared%2Fmodule-federation.md"]={toc:[],title:""}},31770:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return c}});var t=r("15169"),a=r("43932"),s=r("9880"),i=r("23169");function o(e){var n=Object.assign({p:"p",a:"a"},(0,i.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://www.rspack.dev/",target:"_blank",rel:"noopener noreferrer",children:"Rspack"})," is a high performance JavaScript bundler based on Rust, with interoperability with the webpack ecosystem, allowing it to be integrated into webpack projects at a low cost while providing better build performance."]}),"\n",(0,s.jsx)(n.p,{children:"Compared to webpack, Rspack has significantly improved build performance, thanks not only to the language advantages brought by Rust, but also to its parallel architecture and incremental compilation features. Benchmarking has shown that Rspack can provide 5-10 times better compilation performance."})]})}function d(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,i.useMDXComponents)(),e.components).wrapper;return n?(0,s.jsx)(n,(0,a._)((0,t._)({},e),{children:(0,s.jsx)(o,(0,t._)({},e))})):o(e)}var c=d;d.__RSPRESS_PAGE_META={},d.__RSPRESS_PAGE_META["..%2F..%2Fbuilder-doc%2Fdocs%2Fen%2Fshared%2Frspack.md"]={toc:[],title:""}},27694:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return c}});var t=r("15169"),a=r("43932"),s=r("9880"),i=r("23169");function o(e){var n=Object.assign({p:"p",a:"a",code:"code"},(0,i.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://SWC.rs/",target:"_blank",rel:"noopener noreferrer",children:"SWC"})," (Speedy Web Compiler) is a transformer and minimizer for JavaScript and TypeScript based on ",(0,s.jsx)(n.code,{children:"Rust"}),". SWC can provide the same abilities with Babel, and it's more than 10x faster than Babel."]}),"\n",(0,s.jsx)(n.p,{children:"Modern.js Builder has a out-of-box plugin for SWC, power your Web application with Polyfill and minification, we also port some common used Babel plugins to SWC."})]})}function d(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,i.useMDXComponents)(),e.components).wrapper;return n?(0,s.jsx)(n,(0,a._)((0,t._)({},e),{children:(0,s.jsx)(o,(0,t._)({},e))})):o(e)}var c=d;d.__RSPRESS_PAGE_META={},d.__RSPRESS_PAGE_META["..%2F..%2Fbuilder-doc%2Fdocs%2Fen%2Fshared%2Fswc.md"]={toc:[],title:""}},41442:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return f},frontmatter:function(){return b}});var t=r("15169"),a=r("43932"),s=r("9880"),i=r("23169"),o=r("15391"),d=r("17940"),c=r("25016"),l=r("7075"),h=r("31770"),p=r("27694");function u(e){var n=Object.assign({h1:"h1",a:"a",h2:"h2",p:"p"},(0,i.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h1,{id:"glossary",children:["Glossary",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#glossary",children:"#"})]}),"\n",(0,s.jsxs)(n.h2,{id:"bff",children:["BFF",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#bff",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:'BFF is short for "Backend For Frontend". It is an architecture pattern that involves creating a backend service for frontend applications.'}),"\n",(0,s.jsx)(n.p,{children:"The BFF service acts as an intermediary between the frontend application and the server API, and can provide customized APIs for the frontend to use. This allows frontend developers to have more control over the data and functionality they need, without relying on the backend service to provide the corresponding capabilities."}),"\n",(0,s.jsxs)(n.h2,{id:"bundler",children:["Bundler",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#bundler",children:"#"})]}),"\n","\n",(0,s.jsx)(o.default,{}),"\n",(0,s.jsxs)(n.h2,{id:"builder",children:["Builder",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#builder",children:"#"})]}),"\n","\n",(0,s.jsx)(d.default,{}),"\n",(0,s.jsxs)(n.h2,{id:"csr",children:["CSR",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#csr",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:'CSR stands for "Client-Side Rendering". It means that the page is rendered in the browser using JavaScript, and logic such as data fetching, templates, and routing is completed on the client side rather than the server.'}),"\n",(0,s.jsx)(n.p,{children:"In CSR, the server sends an empty HTML shell and some JavaScript scripts to the browser, and the browser fetching data from the server's API and renders dynamic content to the page."}),"\n",(0,s.jsxs)(n.h2,{id:"garfish",children:["Garfish",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#garfish",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://garfishjs.org/",target:"_blank",rel:"noopener noreferrer",children:"Garfish"})," is a micro-frontend solution mainly used to solve problems such as cross-team collaboration and diversified technology systems in web applications."]}),"\n",(0,s.jsx)(n.p,{children:"Starting from the architecture level, it combines multiple independently delivered frontend applications into a whole. These frontend applications can be developed, tested, and deployed independently, but in the user's perspective, they are still cohesive single products."}),"\n",(0,s.jsxs)(n.h2,{id:"micro-frontend",children:["Micro-frontend",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#micro-frontend",children:"#"})]}),"\n","\n",(0,s.jsx)(c.default,{}),"\n",(0,s.jsxs)(n.h2,{id:"module-federation",children:["Module Federation",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#module-federation",children:"#"})]}),"\n","\n",(0,s.jsx)(l.default,{}),"\n",(0,s.jsxs)(n.h2,{id:"rspack",children:["Rspack",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#rspack",children:"#"})]}),"\n","\n",(0,s.jsx)(h.default,{}),"\n",(0,s.jsxs)(n.h2,{id:"ssr",children:["SSR",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#ssr",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:'SSR stands for "Server-Side Rendering". It means that the HTML of the web page is generated by the server and sent to the client, rather than sending only an empty HTML shell and relying on JavaScript to generate the page content.'}),"\n",(0,s.jsx)(n.p,{children:"In traditional client-side rendering, the server sends an empty HTML shell and some JavaScript scripts to the client, and then fetching data from the server's API and fills the page with dynamic content. This leads to slow initial page loading times and is not conducive to user experience and SEO."}),"\n",(0,s.jsx)(n.p,{children:"With SSR, the server generates HTML that already contains dynamic content and sends it to the client. This makes the initial page loading faster and more SEO-friendly, as search engines can crawl the rendered page."}),"\n",(0,s.jsxs)(n.h2,{id:"ssg",children:["SSG",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#ssg",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:'SSG stands for "Static Site Generation". It means that web pages are pre-rendered as static HTML and served directly to the client, without the need for the server to generate HTML in real-time.'}),"\n",(0,s.jsx)(n.p,{children:"In traditional SSR, the server generates HTML in real-time every time a user requests a page. With SSG, HTML can be generated in advance during the build process and hosted on a CDN or other static assets service."}),"\n",(0,s.jsx)(n.p,{children:"Compared to traditional SSR, SSG can provide faster loading speeds and less server-side overhead, as there is no need to maintain a server to generate HTML in real-time. However, SSG is not suitable for websites that require dynamic content, as the HTML is generated during the build process and does not support real-time updates."}),"\n",(0,s.jsxs)(n.h2,{id:"swc",children:["SWC",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#swc",children:"#"})]}),"\n","\n",(0,s.jsx)(p.default,{})]})}function m(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,i.useMDXComponents)(),e.components).wrapper;return n?(0,s.jsx)(n,(0,a._)((0,t._)({},e),{children:(0,s.jsx)(u,(0,t._)({},e))})):u(e)}var f=m;m.__RSPRESS_PAGE_META={},m.__RSPRESS_PAGE_META["en%2Fguides%2Fget-started%2Fglossary.mdx"]={toc:[{text:"BFF",id:"bff",depth:2},{text:"Bundler",id:"bundler",depth:2},{text:"Builder",id:"builder",depth:2},{text:"CSR",id:"csr",depth:2},{text:"Garfish",id:"garfish",depth:2},{text:"Micro-frontend",id:"micro-frontend",depth:2},{text:"Module Federation",id:"module-federation",depth:2},{text:"Rspack",id:"rspack",depth:2},{text:"SSR",id:"ssr",depth:2},{text:"SSG",id:"ssg",depth:2},{text:"SWC",id:"swc",depth:2}],title:"Glossary"};var b={sidebar_position:4}}}]);