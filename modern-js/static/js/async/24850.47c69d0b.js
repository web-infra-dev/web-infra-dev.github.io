/*! For license information please see 24850.47c69d0b.js.LICENSE.txt */
(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["24850"],{34648:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return o}});var i=r("39980"),s=r("96954");function t(e){let n=Object.assign({p:"p",a:"a"},(0,s.useMDXComponents)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://www.rspack.dev/",target:"_blank",rel:"noopener noreferrer",children:"Rspack"})," is a high performance JavaScript bundler based on Rust, with interoperability with the webpack ecosystem, allowing it to be integrated into webpack projects at a low cost while providing better build performance."]}),"\n",(0,i.jsx)(n.p,{children:"Compared to webpack, Rspack has significantly improved build performance, thanks not only to the language advantages brought by Rust, but also to its parallel architecture and incremental compilation features. Benchmarking has shown that Rspack can provide 5-10 times better compilation performance."})]})}function a(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,s.useMDXComponents)(),e.components);return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(t,{...e})}):t(e)}var o=a;a.__RSPRESS_PAGE_META={},a.__RSPRESS_PAGE_META["..%2F..%2Fbuilder-doc%2Fdocs%2Fen%2Fshared%2Frspack.md"]={toc:[],title:"",frontmatter:{}}},66777:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return o}});var i=r("39980"),s=r("96954");function t(e){let n=Object.assign({h2:"h2",a:"a",p:"p",ul:"ul",li:"li"},(0,s.useMDXComponents)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.h2,{id:"precautions",children:["Precautions",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#precautions",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"Before using Rspack, please be aware that Rspack is still an early stage project and is currently in a rapid iteration phase. Therefore, you need to be aware of the following:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"The API and configuration options of Rspack are still unstable, and the support for Rspack in Modern.js is experimental. Therefore, incompatible updates may be introduced in non-major releases in the future."}),"\n",(0,i.jsx)(n.li,{children:"Rspack does not currently provide complete optimization capabilities like tree shaking, bundle splitting, and scope hoisting, which are available in webpack. We will continue to enhance these optimization capabilities in Rspack from June to December. Therefore, when migrating to Rspack, you may notice a certain level of increase in the bundle size compared to webpack."}),"\n",(0,i.jsx)(n.li,{children:"Rspack currently relies on SWC for code compilation and compression. Due to the lower maturity of SWC compared to Babel and Terser, you may encounter SWC bugs."}),"\n",(0,i.jsx)(n.li,{children:"Rspack is compatible with most plugins and loaders in the webpack ecosystem, but there are still some plugins and loaders that cannot be used temporarily."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Rspack is actively working to improve the above issues and plans to address them in future releases. We recommend that you evaluate your project requirements and risk tolerance before deciding whether to use Rspack. If your project requires high stability and performance, you should choose the more mature webpack. If you are willing to try new tools and contribute to their development, we welcome you to use Rspack and provide feedback and bug reports to help improve its stability and functionality."})]})}function a(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,s.useMDXComponents)(),e.components);return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(t,{...e})}):t(e)}var o=a;a.__RSPRESS_PAGE_META={},a.__RSPRESS_PAGE_META["..%2F..%2Fbuilder-doc%2Fdocs%2Fen%2Fshared%2FrspackPrecautions.md"]={toc:[{text:"Precautions",id:"precautions",depth:2}],title:"",frontmatter:{}}},73516:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return c}});var i=r("39980"),s=r("96954"),t=r("34648");function a(e){let n=Object.assign({div:"div"},(0,s.useMDXComponents)(),e.components);return(0,i.jsxs)(n.div,{className:"rspress-directive tip",children:[(0,i.jsx)(n.div,{className:"rspress-directive-title",children:"What is Rspack"}),(0,i.jsxs)(n.div,{className:"rspress-directive-content",children:["\n","\n",(0,i.jsx)(t.default,{}),"\n"]})]})}function o(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,s.useMDXComponents)(),e.components);return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}var c=o;o.__RSPRESS_PAGE_META={},o.__RSPRESS_PAGE_META["..%2F..%2Fbuilder-doc%2Fdocs%2Fen%2Fshared%2FrspackTip.mdx"]={toc:[],title:"",frontmatter:{}}},18025:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return o}});var i=r("39980"),s=r("96954");function t(e){let n=Object.assign({pre:"pre",code:"code"},(0,s.useMDXComponents)(),e.components);return(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"$ npx @modern-js/create@latest myapp\n? Please select the type of project you want to create: Web App\n? Please select the programming language: TS\n? Please select the package manager: pnpm\n? Please select the bundler: Rspack\n"})})}function a(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,s.useMDXComponents)(),e.components);return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(t,{...e})}):t(e)}var o=a;a.__RSPRESS_PAGE_META={},a.__RSPRESS_PAGE_META["en%2Fcomponents%2Finit-rspack-app.mdx"]={toc:[],title:"",frontmatter:{}}},29871:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return l}});var i=r("39980"),s=r("96954"),t=r("73516"),a=r("18025"),o=r("66777");function c(e){let n=Object.assign({h1:"h1",a:"a",p:"p",strong:"strong",h2:"h2",code:"code",div:"div",ul:"ul",li:"li",pre:"pre",img:"img",h3:"h3"},(0,s.useMDXComponents)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.h1,{id:"using-rspack",children:["Using Rspack",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#using-rspack",children:"#"})]}),"\n","\n",(0,i.jsx)(t.default,{}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Modern.js provides out-of-the-box Rspack support"}),", so you can switch between the stable Webpack and the faster Rspack."]}),"\n",(0,i.jsx)(n.p,{children:"This document will show you how to enable Rspack build mode in Modern.js."}),"\n",(0,i.jsxs)(n.h2,{id:"initializing-an-rspack-project",children:["Initializing an Rspack project",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#initializing-an-rspack-project",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["The Modern.js generator provides an interactive question-and-answer interface to initialize a project. To create an Rspack project, simply select the ",(0,i.jsx)(n.strong,{children:"Rspack"})," build tool by running:"]}),"\n","\n",(0,i.jsx)(a.default,{}),"\n",(0,i.jsxs)(n.p,{children:["After the project is created, you can experience the project by running ",(0,i.jsx)(n.code,{children:"pnpm run dev"}),". For more project information, please refer to ",(0,i.jsx)(n.a,{href:"/guides/get-started/quick-start",children:"Quick Start"}),"."]}),"\n",(0,i.jsxs)(n.div,{className:"rspress-directive tip",children:[(0,i.jsx)(n.div,{className:"rspress-directive-title",children:"TIP"}),(0,i.jsxs)(n.div,{className:"rspress-directive-content",children:[(0,i.jsx)(n.p,{children:"When using Rspack as the bundler, the following Features are temporarily unavailable as some of the capabilities are still under development and we will provide support in the future."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["The usage of ",(0,i.jsx)(n.a,{href:"/guides/basic-features/data/data-fetch",children:"useLoader"})," in Client Side Rendering"]}),"\n"]}),"\n"]})]}),"\n",(0,i.jsxs)(n.h2,{id:"enable-rspack-build",children:["Enable Rspack build",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#enable-rspack-build",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["Since Modern.js 2.46.0, you can enable Rspack build by add the following configuration in ",(0,i.jsx)(n.code,{children:"modern.config.ts"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-diff",meta:"title=modern.config.ts",children:"import { appTools, defineConfig } from '@modern-js/app-tools';\n\nexport default defineConfig({\n  plugins: [\n    appTools({\n+     bundler: 'experimental-rspack',\n    }),\n  ],\n});\n"})}),"\n",(0,i.jsxs)(n.div,{className:"rspress-directive tip",children:[(0,i.jsx)(n.div,{className:"rspress-directive-title",children:"TIP"}),(0,i.jsx)(n.div,{className:"rspress-directive-content",children:(0,i.jsxs)(n.p,{children:["If your current version is lower than 2.46.0, you can upgrade by executing ",(0,i.jsx)(n.code,{children:"npx modern upgrade"}),".\n"]})})]}),"\n","\n",(0,i.jsx)(o.default,{}),"\n",(0,i.jsxs)(n.h2,{id:"migrating-configuration",children:["Migrating configuration",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#migrating-configuration",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["After enabling Rspack building capability, further configuration migration is needed by referring to the ",(0,i.jsx)(n.a,{href:"https://modernjs.dev/builder/en/guide/advanced/rspack-start.html#migrating-from-webpack-to-rspack",target:"_blank",rel:"noopener noreferrer",children:"Configuration Differences"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["In Modern.js, the ",(0,i.jsx)(n.a,{href:"/configure/app/tools/webpack",children:"tools.webpack"})," and ",(0,i.jsx)(n.a,{href:"/configure/app/tools/webpack-chain",children:"tools.webpackChain"})," configurations only take effect in webpack mode, after turning on the Rspack build, you can modify it to ",(0,i.jsx)(n.a,{href:"/configure/app/tools/rspack",children:"tools.rspack"})," and ",(0,i.jsx)(n.a,{href:"/configure/app/tools/bundler-chain",children:"tools.bundlerChain"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-diff",children:"export default {\n  tools: {\n-   webppack: (config, { env }) => {\n+   rspack: (config, { env }) => {\n      if (env === 'development') {\n        config.devtool = 'cheap-module-eval-source-map';\n      }\n      return config;\n    },\n-   webpackChain: (chain, { env }) => {\n+   bundlerChain: (chain, { env }) => {\n      if (env === 'development') {\n        chain.devtool('cheap-module-eval-source-map');\n      }\n    },\n  },\n};\n"})}),"\n",(0,i.jsxs)(n.div,{className:"rspress-directive tip",children:[(0,i.jsx)(n.div,{className:"rspress-directive-title",children:"TIP"}),(0,i.jsxs)(n.div,{className:"rspress-directive-content",children:[(0,i.jsxs)(n.p,{children:["After turning on the Rspack build capability, there are currently a small number of configurations that are not supported in Rspack, such as ",(0,i.jsx)(n.a,{href:"/configure/app/source/module-scopes",children:"source.moduleScopes"}),", ",(0,i.jsx)(n.a,{href:"/configure/app/security/sri",children:"security.sri"})," etc."]}),"\n",(0,i.jsxs)(n.p,{children:["For unsupported configurations, we have marked ",(0,i.jsx)(n.code,{children:"Bundler: only support webpack"})," or ",(0,i.jsx)(n.code,{children:"Bundler: only support Rspack"})," in the document. Please refer to the specific configuration introduction.\n"]})]})]}),"\n",(0,i.jsxs)(n.h2,{id:"modify-transpile-configuration",children:["Modify transpile configuration",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#modify-transpile-configuration",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["Modern.js uses Rspack ",(0,i.jsx)(n.a,{href:"https://www.rspack.dev/guide/builtin-swc-loader.html",target:"_blank",rel:"noopener noreferrer",children:"builtin:swc-loader"})," for code translation in Rspack mode."]}),"\n",(0,i.jsxs)(n.p,{children:["Modern.js has provided a more convenient configuration for the common configuration of ",(0,i.jsx)(n.code,{children:"builtin:swc-loader"}),", such as: configuring the component library to import it on demand through ",(0,i.jsx)(n.a,{href:"/configure/app/source/transform-import",children:"source.transformImport"}),". If you have custom configuration requirements for ",(0,i.jsx)(n.code,{children:"builtin:swc-loader"}),", you can refer to the following code:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"export default {\n  tools: {\n    bundlerChain: (chain, { CHAIN_ID }) => {\n      chain.module\n        .rule(CHAIN_ID.RULE.JS)\n        .use(CHAIN_ID.USE.SWC)\n        .tap(options => {\n          options.xxx = '';\n          return options;\n        });\n    },\n  }\n};\n"})}),"\n",(0,i.jsxs)(n.div,{className:"rspress-directive tip",children:[(0,i.jsx)(n.div,{className:"rspress-directive-title",children:"TIP"}),(0,i.jsx)(n.div,{className:"rspress-directive-content",children:(0,i.jsxs)(n.p,{children:["When Rspack build is enabled, ",(0,i.jsx)(n.code,{children:"babel-loader"})," is not enabled by default. If you need to add some babel plugins, you can configure it through ",(0,i.jsx)(n.a,{href:"/configure/app/tools/babel",children:"tools.babel"}),". This will generate additional compilation overhead and slow down the Rspack build speed to a certain extent.\n"]})})]}),"\n",(0,i.jsxs)(n.h2,{id:"the-relationship-between-rspack-and-modernjs-versions",children:["The relationship between Rspack and Modern.js versions",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#the-relationship-between-rspack-and-modernjs-versions",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["Usually, the latest version of Rspack will be integrated into Modern.js. You can update the Modern.js-related dependencies and built-in Rspack to the latest version by using ",(0,i.jsx)(n.code,{children:"npx modern upgrade"})," in your project."]}),"\n",(0,i.jsx)(n.p,{children:"However, Modern.js uses a locked version dependency method (non-automatic upgrade) for Rspack. Due to differences in release cycles, the version of Rspack integrated into Modern.js may be behind the latest version of Rspack."}),"\n",(0,i.jsxs)(n.p,{children:["When Rspack is enabled for building through dev / build, the current version of Rspack used in the framework will be printed automatically when ",(0,i.jsx)(n.a,{href:"https://rsbuild.dev/guide/debug/debug-mode",target:"_blank",rel:"noopener noreferrer",children:"debugging mode"})," is turned on:"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/6221eh7uhbfvhn/modern/20240110-155444.png",alt:"rspack_version_log"})}),"\n",(0,i.jsxs)(n.h3,{id:"override-the-built-in-rspack-version",children:["Override the Built-in Rspack Version",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#override-the-built-in-rspack-version",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"You can override Rspack to a specific version using the capbilities provided by package managers such as pnpm, yarn, npm."}),"\n",(0,i.jsxs)(n.p,{children:["For example, if you are using pnpm, you can update the Rspack version with ",(0,i.jsx)(n.code,{children:"overrides"})," as shown below:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",meta:"title=package.json",children:'{\n  "pnpm": {\n    "overrides": {\n      "@rspack/core": "nightly",\n      "@rspack/plugin-react-refresh": "nightly",\n    }\n  }\n}\n'})}),"\n",(0,i.jsxs)(n.div,{className:"rspress-directive tip",children:[(0,i.jsx)(n.div,{className:"rspress-directive-title",children:"What is Rspack Nightly Version"}),(0,i.jsxs)(n.div,{className:"rspress-directive-content",children:[(0,i.jsx)(n.p,{children:"The Rspack nightly build fully replicates the full release build for catching errors early."}),(0,i.jsx)(n.p,{children:"Usually it is available and any errors that arise will fixed promptly."}),(0,i.jsx)(n.p,{children:"However, if there are any break changes that require modern.js to modify the code, we recommend to wait for the next version of modern.js."})]})]}),"\n",(0,i.jsxs)(n.p,{children:["More examples of using package managers, please refer to: ",(0,i.jsx)(n.a,{href:"/guides/get-started/upgrade#lock-nested-dependency",children:"Lock nested dependency"}),"."]})]})}function d(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,s.useMDXComponents)(),e.components);return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}var l=d;d.__RSPRESS_PAGE_META={},d.__RSPRESS_PAGE_META["en%2Fguides%2Fadvanced-features%2Frspack-start.mdx"]={toc:[{text:"Initializing an Rspack project",id:"initializing-an-rspack-project",depth:2},{text:"Enable Rspack build",id:"enable-rspack-build",depth:2},{text:"Migrating configuration",id:"migrating-configuration",depth:2},{text:"Modify transpile configuration",id:"modify-transpile-configuration",depth:2},{text:"The relationship between Rspack and Modern.js versions",id:"the-relationship-between-rspack-and-modernjs-versions",depth:2},{text:"Override the Built-in Rspack Version",id:"override-the-built-in-rspack-version",depth:3}],title:"Using Rspack",frontmatter:{sidebar_position:1}}}}]);