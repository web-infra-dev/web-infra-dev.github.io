(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["75769"],{26423:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return c}});var r,s=t("15169"),o=t("43932"),i=t("9880"),a=t("23169"),d=t("97929");function l(e){var n=Object.assign({h1:"h1",a:"a",p:"p",strong:"strong",h2:"h2",ul:"ul",li:"li",div:"div",h3:"h3"},(0,a.useMDXComponents)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.h1,{id:"introduction-to-modernjs",children:["Introduction to Modern.js",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#introduction-to-modernjs",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Modern.js is an open source web engineering system from ByteDance"}),", which provides multiple solutions to help developers solve problems in different development scenarios."]}),"\n",(0,i.jsx)(n.p,{children:"Currently, Modern.js includes three solutions, targeting web application development, npm package development, and web application building:"}),"\n","\n",(0,i.jsx)(d.SolutionCards,{cards:[{title:"Modern.js Framework",description:"For web application development",link:"http://modernjs.dev/en/"},{title:"Modern.js Module",description:"For npm package development",link:"http://modernjs.dev/module-tools/en/"},{title:"Modern.js Builder",description:"For web application building",link:"http://modernjs.dev/builder/en/"}]}),"\n",(0,i.jsx)(n.p,{children:"As part of the Modern.js engineering system, each of the above solutions can be used separately and has its own independent documentation site. Developers can choose one or more solutions as needed."}),"\n",(0,i.jsxs)(n.h2,{id:"about-documentation",children:["About Documentation",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#about-documentation",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"The current documentation site corresponds to the Modern.js framework"}),", which is used to developing web applications."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["If you need to develop an npm package, please refer to the ",(0,i.jsx)(n.a,{href:"https://modernjs.dev/module-tools",target:"_blank",rel:"noopener noreferrer",children:"Modern.js Module"})," documentation."]}),"\n",(0,i.jsxs)(n.li,{children:["If you need to implement a web development framework based on the Modern.js build tool, please refer to the ",(0,i.jsx)(n.a,{href:"https://modernjs.dev/builder",target:"_blank",rel:"noopener noreferrer",children:"Modern.js Builder"})," documentation."]}),"\n"]}),"\n",(0,i.jsxs)(n.div,{className:"rspress-directive tip",children:[(0,i.jsx)(n.div,{className:"rspress-directive-title",children:"TIP"}),(0,i.jsx)(n.div,{className:"rspress-directive-content",children:(0,i.jsx)(n.p,{children:'Since the Modern.js framework is the most widely used, in this documentation site, we will omit "framework" and directly refer to it as Modern.js.'})})]}),"\n",(0,i.jsx)(n.p,{children:"Modern.js can also be combined with the following solutions:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["If you need to develop a documentation site, ",(0,i.jsx)(n.a,{href:"https://rspress.dev/",target:"_blank",rel:"noopener noreferrer",children:"Rspress"})," is recommended."]}),"\n",(0,i.jsxs)(n.li,{children:["If you need to introduce micro-frontend architecture, ",(0,i.jsx)(n.a,{href:"https://garfishjs.org/",target:"_blank",rel:"noopener noreferrer",children:"Garfish"})," is recommended."]}),"\n"]}),"\n",(0,i.jsxs)(n.h2,{id:"modernjs-framework",children:["Modern.js Framework",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#modernjs-framework",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"The Modern.js framework is a progressive web framework based on React"}),". At ByteDance, we use Modern.js to build upper-level frameworks that have supported the development of thousands of web applications."]}),"\n",(0,i.jsxs)(n.p,{children:["Modern.js can provide developers with an ultimate ",(0,i.jsx)(n.strong,{children:"Development Experience"})," and enable applications to have better ",(0,i.jsx)(n.strong,{children:"User Experience"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["In the process of developing React applications, developers usually need to design implementation plans for certain features or use other libraries and frameworks to solve these problems. Modern.js supports all configurations and tools needed by React applications, and has built-in ",(0,i.jsx)(n.strong,{children:"additional features and optimizations"}),". Developers can use React to build the UI of the application, and then gradually adopt the features of Modern.js to solve common application requirements, such as routing, data acquisition, and state management."]}),"\n",(0,i.jsx)(n.p,{children:"It mainly includes the following features:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\uD83D\uDE80 ",(0,i.jsx)(n.strong,{children:"Rust Bundler"}),": Provides support for dual bundlers, easily switch to the Rspack for faster build speed."]}),"\n",(0,i.jsxs)(n.li,{children:["\uD83E\uDE9C ",(0,i.jsx)(n.strong,{children:"Progressive"}),": Create projects with the most streamlined templates, gradually enable plugin features through the generator, and customize solutions."]}),"\n",(0,i.jsxs)(n.li,{children:["\uD83C\uDFE0 ",(0,i.jsx)(n.strong,{children:"Integration"}),": Development and production environment web server are unique, CSR and SSR are isomorphic development, and API service calls are functions as interfaces."]}),"\n",(0,i.jsxs)(n.li,{children:["\uD83D\uDCE6 ",(0,i.jsx)(n.strong,{children:"Out Of The Box"}),": Default TS support, built-in build, ESLint, debugging tools, fully functional and testable."]}),"\n",(0,i.jsxs)(n.li,{children:["\uD83C\uDF0F ",(0,i.jsx)(n.strong,{children:"Ecology"}),": Self-developed state management, micro-frontend, module packaging, Monorepo solutions, and other peripheral needs."]}),"\n",(0,i.jsxs)(n.li,{children:["\uD83D\uDD78 ",(0,i.jsx)(n.strong,{children:"Routing Modes"}),": Includes self-controlled routing, file-convention-based routing (nested routing), etc."]}),"\n"]}),"\n",(0,i.jsxs)(n.h2,{id:"comparison-with-others",children:["Comparison with Others",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#comparison-with-others",children:"#"})]}),"\n",(0,i.jsxs)(n.h3,{id:"nextjs",children:["Next.js",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#nextjs",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"Next.js is one of the most popular React frameworks in the community. It is developed by Vercel."}),"\n",(0,i.jsxs)(n.p,{children:["Next.js defaults to using React Server Components, which means ",(0,i.jsx)(n.strong,{children:"you will need to render your web application on the server and pay for the server-side rendering costs"}),". In addition, Server Components is not yet a stable technology, and many popular React libraries in the community have not yet finished adapting to RSC. At this stage, you may need to use the Next.js's Pages Router to avoid issues caused by Server Components."]}),"\n",(0,i.jsx)(n.p,{children:'If you want to build a single-page application (SPA) and render it on the client side, Next.js may not be the best choice because many of its features are designed around server-first principles. If you need to use client-side rendering, you can only use limited functionality through Next.js\'s "static exports" feature.'}),"\n",(0,i.jsx)(n.p,{children:"On the other hand, Modern.js considers both client-side rendering (CSR) and server-side rendering (SSR) to be equally important. When you build a Modern.js application, it defaults to client-side rendering, and you don't need to understand the uses and limitations of Server Components. You can also enable SSR whenever you need it, and even enable SSR for specific pages. The whole process is fully progressive. Please note that Modern.js does not currently support Server Components. We will continue to monitor its potential and provide support when appropriate."}),"\n",(0,i.jsxs)(n.h3,{id:"umi",children:["Umi",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#umi",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"Umi is a popular React framework in the Chinese community and serves as the underlying frontend framework for the Ant Group. Modern.js and Umi share many similarities, such as support for plugin system, convention-based routing, and micro-generators."}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"The main difference between Modern.js and Umi is their approach to optimizing build speed"}),". Umi uses MFSU technology to improve build speed, while Modern.js uses Rspack to achieve 5 to 10 times faster build speed. From our perspective, Rust tools like Rspack are more in line with the long-term evolution of the front-end toolchain, as they can strike a good balance between performance, stability, and ecosystem compatibility."]}),"\n",(0,i.jsx)(n.p,{children:"In addition, Modern.js provides richer server-side features, including comprehensive SSR capabilities, integrated BFF development capabilities, and support for custom web servers. These capabilities have been extensively validated by ByteDance in numerous online applications and can be directly used in production environments."}),"\n",(0,i.jsxs)(n.h2,{id:"next-step",children:["Next Step",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#next-step",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["If you want to learn how to use the Modern.js framework, you can try to ",(0,i.jsx)(n.a,{href:"/tutorials/first-app/c01-start",children:"create your first application"}),", or read the ",(0,i.jsx)(n.a,{href:"/guides/get-started/quick-start",children:"Quick Start"})," guide."]})]})}(r=globalThis).__RSPRESS_PAGE_META||(r.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["en%2Fguides%2Fget-started%2Fintroduction.mdx"]={toc:[{text:"About Documentation",id:"about-documentation",depth:2},{text:"Modern.js Framework",id:"modernjs-framework",depth:2},{text:"Comparison with Others",id:"comparison-with-others",depth:2},{text:"Next.js",id:"nextjs",depth:3},{text:"Umi",id:"umi",depth:3},{text:"Next Step",id:"next-step",depth:2}],title:"Introduction to Modern.js",frontmatter:{title:"Introduction",sidebar_position:1}};var c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,a.useMDXComponents)(),e.components).wrapper;return n?(0,i.jsx)(n,(0,o._)((0,s._)({},e),{children:(0,i.jsx)(l,(0,s._)({},e))})):l(e)}}}]);