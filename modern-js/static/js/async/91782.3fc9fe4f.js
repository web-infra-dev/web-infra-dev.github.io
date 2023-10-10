(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["91782"],{60076:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return d}});var s=r("15169"),i=r("43932"),a=r("9880"),t=r("23169");function o(e){var n=Object.assign({h2:"h2",a:"a",p:"p",ul:"ul",li:"li"},(0,t.useMDXComponents)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.h2,{id:"precautions",children:["Precautions",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#precautions",children:"#"})]}),"\n",(0,a.jsx)(n.p,{children:"Before using Rspack, please be aware that Rspack is still an early stage project and is currently in a rapid iteration phase. Therefore, you need to be aware of the following:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"The API and configuration options of Rspack are still unstable, and the support for Rspack in Modern.js is experimental. Therefore, incompatible updates may be introduced in non-major releases in the future."}),"\n",(0,a.jsx)(n.li,{children:"Rspack does not currently provide complete optimization capabilities like tree shaking, bundle splitting, and scope hoisting, which are available in webpack. We will continue to enhance these optimization capabilities in Rspack from June to December. Therefore, when migrating to Rspack, you may notice a certain level of increase in the bundle size compared to webpack."}),"\n",(0,a.jsx)(n.li,{children:"Rspack currently relies on SWC for code compilation and compression. Due to the lower maturity of SWC compared to Babel and Terser, you may encounter SWC bugs."}),"\n",(0,a.jsx)(n.li,{children:"Rspack is compatible with most plugins and loaders in the webpack ecosystem, but there are still some plugins and loaders that cannot be used temporarily."}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Rspack is actively working to improve the above issues and plans to address them in future releases. We recommend that you evaluate your project requirements and risk tolerance before deciding whether to use Rspack. If your project requires high stability and performance, you should choose the more mature webpack. If you are willing to try new tools and contribute to their development, we welcome you to use Rspack and provide feedback and bug reports to help improve its stability and functionality."})]})}function c(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,t.useMDXComponents)(),e.components).wrapper;return n?(0,a.jsx)(n,(0,i._)((0,s._)({},e),{children:(0,a.jsx)(o,(0,s._)({},e))})):o(e)}var d=c;c.__RSPRESS_PAGE_META={},c.__RSPRESS_PAGE_META["..%2F..%2Fbuilder-doc%2Fdocs%2Fen%2Fshared%2FrspackPrecautions.md"]={toc:[{text:"Precautions",id:"precautions",depth:2}],title:""}},20185:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return l}});var s=r("15169"),i=r("43932"),a=r("9880"),t=r("23169"),o=r("53361");function c(e){var n=Object.assign({div:"div"},(0,t.useMDXComponents)(),e.components);return(0,a.jsxs)(n.div,{className:"rspress-directive tip",children:[(0,a.jsx)(n.div,{className:"rspress-directive-title",children:"What is Rspack"}),(0,a.jsxs)(n.div,{className:"rspress-directive-content",children:["\n","\n",(0,a.jsx)(o.default,{}),"\n"]})]})}function d(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,t.useMDXComponents)(),e.components).wrapper;return n?(0,a.jsx)(n,(0,i._)((0,s._)({},e),{children:(0,a.jsx)(c,(0,s._)({},e))})):c(e)}var l=d;d.__RSPRESS_PAGE_META={},d.__RSPRESS_PAGE_META["..%2F..%2Fbuilder-doc%2Fdocs%2Fen%2Fshared%2FrspackTip.mdx"]={toc:[],title:""}},66121:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return d}});var s=r("15169"),i=r("43932"),a=r("9880"),t=r("23169");function o(e){var n=Object.assign({pre:"pre",code:"code"},(0,t.useMDXComponents)(),e.components);return(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"$ npx @modern-js/create@latest myapp\n? Please select the type of project you want to create: Web App\n? Please select the programming language: TS\n? Please select the package manager: pnpm\n? Please select the bundler: Rspack\n"})})}function c(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,t.useMDXComponents)(),e.components).wrapper;return n?(0,a.jsx)(n,(0,i._)((0,s._)({},e),{children:(0,a.jsx)(o,(0,s._)({},e))})):o(e)}var d=c;c.__RSPRESS_PAGE_META={},c.__RSPRESS_PAGE_META["en%2Fcomponents%2Finit-rspack-app.mdx"]={toc:[],title:""}},71506:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return h},frontmatter:function(){return u}});var s=r("15169"),i=r("43932"),a=r("9880"),t=r("23169"),o=r("20185"),c=r("66121"),d=r("60076");function l(e){var n=Object.assign({h1:"h1",a:"a",p:"p",strong:"strong",h2:"h2",code:"code",div:"div",ul:"ul",li:"li",pre:"pre",img:"img",h3:"h3"},(0,t.useMDXComponents)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.h1,{id:"using-rspack",children:["Using Rspack",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#using-rspack",children:"#"})]}),"\n","\n",(0,a.jsx)(o.default,{}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Modern.js provides out-of-the-box Rspack support"}),", so you can switch between the stable Webpack and the faster Rspack."]}),"\n",(0,a.jsx)(n.p,{children:"This document will show you how to enable Rspack build mode in Modern.js."}),"\n",(0,a.jsxs)(n.h2,{id:"initializing-an-rspack-project",children:["Initializing an Rspack project",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#initializing-an-rspack-project",children:"#"})]}),"\n",(0,a.jsxs)(n.p,{children:["The Modern.js generator provides an interactive question-and-answer interface to initialize a project. To create an Rspack project, simply select the ",(0,a.jsx)(n.strong,{children:"Rspack"})," build tool by running:"]}),"\n","\n",(0,a.jsx)(c.default,{}),"\n",(0,a.jsxs)(n.p,{children:["After the project is created, you can experience the project by running ",(0,a.jsx)(n.code,{children:"pnpm run dev"}),". For more project information, please refer to ",(0,a.jsx)(n.a,{href:"/guides/get-started/quick-start",children:"Quick Start"}),"."]}),"\n",(0,a.jsxs)(n.div,{className:"rspress-directive tip",children:[(0,a.jsx)(n.div,{className:"rspress-directive-title",children:"TIP"}),(0,a.jsxs)(n.div,{className:"rspress-directive-content",children:[(0,a.jsx)(n.p,{children:"When using Rspack as the bundler, the following Features are temporarily unavailable as some of the capabilities are still under development and we will provide support in the future."}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Storybook Devtool"}),"\n",(0,a.jsxs)(n.li,{children:["The usage of ",(0,a.jsx)(n.a,{href:"/guides/basic-features/data/data-fetch",children:"useLoader"})," in Client Side Rendering"]}),"\n"]}),"\n"]})]}),"\n",(0,a.jsxs)(n.h2,{id:"enable-rspack-build",children:["Enable Rspack build",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#enable-rspack-build",children:"#"})]}),"\n",(0,a.jsxs)(n.p,{children:["You can enable Rspack build by running ",(0,a.jsx)(n.code,{children:"pnpm run new"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"$ pnpm run new\n? Please select the operation you want: Enable features\n? Please select the feature name: Enable Rspack Build\n"})}),"\n",(0,a.jsxs)(n.p,{children:["After executing the command, enable the Rspack build in ",(0,a.jsx)(n.code,{children:"modern.config.ts"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-diff",meta:"title=modern.config.ts",children:"import { appTools, defineConfig } from '@modern-js/app-tools';\n\n+ export default defineConfig<'rspack'>({\n  plugins: [\n    appTools({\n+     bundler: 'experimental-rspack',\n    }),\n  ],\n});\n"})}),"\n","\n",(0,a.jsx)(d.default,{}),"\n",(0,a.jsxs)(n.h2,{id:"migrating-configuration",children:["Migrating configuration",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#migrating-configuration",children:"#"})]}),"\n",(0,a.jsxs)(n.p,{children:["After enabling Rspack building capability, further configuration migration is needed by referring to the ",(0,a.jsx)(n.a,{href:"https://modernjs.dev/builder/en/guide/advanced/rspack-start.html#migrating-from-webpack-to-rspack",target:"_blank",rel:"noopener noreferrer",children:"Configuration Differences"}),"."]}),"\n",(0,a.jsxs)(n.h2,{id:"the-relationship-between-rspack-and-modernjs-versions",children:["The relationship between Rspack and Modern.js versions",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#the-relationship-between-rspack-and-modernjs-versions",children:"#"})]}),"\n",(0,a.jsxs)(n.p,{children:["Usually, the latest version of Rspack will be integrated into Modern.js. You can update the Modern.js-related dependencies and built-in Rspack to the latest version by using ",(0,a.jsx)(n.code,{children:"npx modern upgrade"})," in your project."]}),"\n",(0,a.jsx)(n.p,{children:"However, Modern.js uses a locked version dependency method (non-automatic upgrade) for Rspack. Due to differences in release cycles, the version of Rspack integrated into Modern.js may be behind the latest version of Rspack."}),"\n",(0,a.jsx)(n.p,{children:"When Rspack is enabled for building through dev / build, the current version of Rspack used in the framework will be printed automatically:"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/6221eh7uhbfvhn/modern/img_v2_dfcf051f-21db-4741-a108-d9f7a82c3abg.png",alt:"rspack_version_log"})}),"\n",(0,a.jsxs)(n.h3,{id:"override-the-built-in-rspack-version",children:["Override the Built-in Rspack Version",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#override-the-built-in-rspack-version",children:"#"})]}),"\n",(0,a.jsx)(n.p,{children:"You can override Rspack to a specific version using the capbilities provided by package managers such as pnpm, yarn, npm."}),"\n",(0,a.jsxs)(n.p,{children:["For example, if you are using pnpm, you can update the Rspack version with ",(0,a.jsx)(n.code,{children:"overrides"})," as shown below:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",meta:"title=package.json",children:'{\n  "pnpm": {\n    "overrides": {\n      "@rspack/core": "nightly",\n      "@rspack/dev-client": "nightly",\n      "@rspack/plugin-html": "nightly"\n    }\n  }\n}\n'})}),"\n",(0,a.jsxs)(n.div,{className:"rspress-directive tip",children:[(0,a.jsx)(n.div,{className:"rspress-directive-title",children:"What is Rspack Nightly Version"}),(0,a.jsxs)(n.div,{className:"rspress-directive-content",children:[(0,a.jsx)(n.p,{children:"The Rspack nightly build fully replicates the full release build for catching errors early."}),(0,a.jsx)(n.p,{children:"Usually it is available and any errors that arise will fixed promptly."}),(0,a.jsx)(n.p,{children:"However, if there are any break changes that require modern.js to modify the code, we recommend to wait for the next version of modern.js."})]})]}),"\n",(0,a.jsxs)(n.p,{children:["More examples of using package managers, please refer to: ",(0,a.jsx)(n.a,{href:"/guides/get-started/upgrade#lock-nested-dependency",children:"Lock nested dependency"}),"."]})]})}function p(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,t.useMDXComponents)(),e.components).wrapper;return n?(0,a.jsx)(n,(0,i._)((0,s._)({},e),{children:(0,a.jsx)(l,(0,s._)({},e))})):l(e)}var h=p;p.__RSPRESS_PAGE_META={},p.__RSPRESS_PAGE_META["en%2Fguides%2Fadvanced-features%2Frspack-start.mdx"]={toc:[{text:"Initializing an Rspack project",id:"initializing-an-rspack-project",depth:2},{text:"Enable Rspack build",id:"enable-rspack-build",depth:2},{text:"Migrating configuration",id:"migrating-configuration",depth:2},{text:"The relationship between Rspack and Modern.js versions",id:"the-relationship-between-rspack-and-modernjs-versions",depth:2},{text:"Override the Built-in Rspack Version",id:"override-the-built-in-rspack-version",depth:3}],title:"Using Rspack"};var u={sidebar_position:1}}}]);