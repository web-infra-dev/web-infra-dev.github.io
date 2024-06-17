/*! For license information please see 47254.9aea8a7d.js.LICENSE.txt */
(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["47254"],{21484:function(e,n,i){"use strict";i.r(n);var r=i("39980"),s=i("9580");function o(e){let n=Object.assign({h1:"h1",a:"a",p:"p",div:"div",h2:"h2",h3:"h3",strong:"strong",pre:"pre",code:"code",ul:"ul",li:"li",blockquote:"blockquote"},(0,s.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"improve-build-performance",children:["Improve Build Performance",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#improve-build-performance",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"Modern.js optimizes build performance by default, but as the project becomes larger, you may encounter some build performance problems."}),"\n",(0,r.jsx)(n.p,{children:"This document provides some optional speed-up strategies, developers can choose some of them to improve the build performance."}),"\n",(0,r.jsxs)(n.div,{className:"rspress-directive tip",children:[(0,r.jsx)(n.div,{className:"rspress-directive-title",children:"\uD83D\uDCE2 Notice"}),(0,r.jsx)(n.div,{className:"rspress-directive-content",children:(0,r.jsxs)(n.p,{children:["The strategies in ",(0,r.jsx)(n.a,{href:"/guides/advanced-features/optimize-bundle",children:"Bundle Size Optimization"})," can also be used to improve build performance, so we won't repeat them here.\n"]})})]}),"\n",(0,r.jsxs)(n.h2,{id:"general-optimization-strategy",children:["General optimization strategy",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#general-optimization-strategy",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"The following are some general optimization strategies, which can speed up the development build and production build, and some of them also optimize the bundle size."}),"\n",(0,r.jsxs)(n.h3,{id:"upgrade-nodejs-version",children:["Upgrade Node.js version",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#upgrade-nodejs-version",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["In general, updating Node.js to the latest ",(0,r.jsx)(n.a,{href:"https://github.com/nodejs/release#release-schedule",target:"_blank",rel:"noopener noreferrer",children:"LTS release"})," will help improve build performance."]}),"\n",(0,r.jsx)(n.p,{children:"Especially for devices with Apple M1/M2 chips, it is recommended to use Node 18."}),"\n",(0,r.jsxs)(n.p,{children:["Node >= 16 provides Apple Silicon binaries by default, so the performance on M1/M2 models will be greatly improved than Node 14. According to our tests, ",(0,r.jsx)(n.strong,{children:"After switching from Node 14 to Node >= 16, the compilation speed can be improved by more than 100%"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"You can switch to Node 18 by following steps:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"# Install Node v18\nnvm install 18\n\n# switch to Node 18\nnvm use 18\n\n# Set Node 18 as the default version\nnvm default 18\n\n# View Node version\nnode -v\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"using-rspack-build",children:["Using Rspack build",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#using-rspack-build",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["If you have higher build performance requirements, you can easily switch to Rspack build mode, see ",(0,r.jsx)(n.a,{href:"/guides/advanced-features/rspack-start",children:"Using Rspack"})," for more information."]}),"\n",(0,r.jsxs)(n.h3,{id:"using-swc-or-esbuild",children:["Using SWC or esbuild",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#using-swc-or-esbuild",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"https://SWC.rs/",target:"_blank",rel:"noopener noreferrer",children:"SWC"})," (Speedy Web Compiler) is a transformer and minimizer for JavaScript and TypeScript based on ",(0,r.jsx)(n.code,{children:"Rust"}),". SWC can provide the same abilities with Babel, and it's more than 10x faster than Babel."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"https://esbuild.github.io/",target:"_blank",rel:"noopener noreferrer",children:"esbuild"})," is a front-end build tool based on Golang. It has the functions of bundling, compiling and minimizing JavaScript code. Compared with traditional tools, the performance is significantly improved. When minimizing code, compared to webpack's built-in terser minimizer, esbuild has dozens of times better performance."]}),"\n",(0,r.jsx)(n.p,{children:"Modern.js provides SWC plugin and esbuild plugin that allow you to use SWC or esbuild instead of babel-loader, ts-loader and terser for transformation and minification process. See:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/configure/app/tools/swc",children:"SWC plugin document"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/configure/app/tools/esbuild",children:"esbuild plugin document"})}),"\n"]}),"\n",(0,r.jsxs)(n.div,{className:"rspress-directive tip",children:[(0,r.jsx)(n.div,{className:"rspress-directive-title",children:"SWC vs esbuild"}),(0,r.jsx)(n.div,{className:"rspress-directive-content",children:(0,r.jsx)(n.p,{children:"The SWC compiled outputs has better compatibility, supports polyfills such as core-js, and has more complete features, so it is recommended to use the SWC plugin first."})})]}),"\n",(0,r.jsxs)(n.h3,{id:"avoid-using-ts-loader",children:["Avoid using ts-loader",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#avoid-using-ts-loader",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["By default, Modern.js uses Babel to compile TS files. After enabling the ",(0,r.jsx)(n.a,{href:"/en/configure/app/tools/ts-loader",children:"tools.tsLoader"})," option, ",(0,r.jsx)(n.code,{children:"ts-loader"})," will be used to compile TS files."]}),"\n",(0,r.jsxs)(n.p,{children:["Please avoid using ",(0,r.jsx)(n.code,{children:"ts-loader"})," because it requires additional parsing and type checking, which will slow down the build."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    // remove this config\n    tsLoader: {},\n  },\n};\n"})}),"\n",(0,r.jsxs)(n.p,{children:["See the ",(0,r.jsx)(n.a,{href:"/en/configure/app/tools/ts-loader",children:"tools.tsLoader documentation"})," for details."]}),"\n",(0,r.jsxs)(n.h2,{id:"development-optimization-strategies",children:["Development optimization strategies",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#development-optimization-strategies",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"The following are strategies for improve build performance in development environment."}),"\n",(0,r.jsxs)(n.h3,{id:"adjust-source-map-format",children:["Adjust Source Map format",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#adjust-source-map-format",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["In order to provide a good debugging experience, Modern.js uses the ",(0,r.jsx)(n.code,{children:"cheap-module-source-map"})," format Source Map by default in the development environment, which is a high-quality Source Map format and will bring certain performance overhead."]}),"\n",(0,r.jsx)(n.p,{children:"You can improve build speed by adjusting the source map format of your development environment."}),"\n",(0,r.jsx)(n.p,{children:"For example to disable Source Map:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    bundlerChain(chain, { env }) {\n      if (env === 'development') {\n        chain.devtool(false);\n      }\n    },\n  },\n};\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Or set the source map format of the development environment to the cheapest ",(0,r.jsx)(n.code,{children:"eval"})," format:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    bundlerChain(chain, { env }) {\n      if (env === 'development') {\n        chain.devtool('eval');\n      }\n    },\n  },\n};\n"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["For detailed differences between different Source Map formats, see ",(0,r.jsx)(n.a,{href:"https://webpack.js.org/configuration/devtool/",target:"_blank",rel:"noopener noreferrer",children:"webpack - devtool"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.h3,{id:"adjust-browserslist-for-development",children:["Adjust Browserslist for development",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#adjust-browserslist-for-development",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["This strategy is similar to ",(0,r.jsx)(n.a,{href:"/guides/advanced-features/optimize-bundle#adjust-browserslist",children:'"Adjust Browserslist"'}),", the difference is that we can set different browserslist for development and production environment, thereby reducing the compilation overhead in the development environment."]}),"\n",(0,r.jsxs)(n.p,{children:["For example, you can add the following config to ",(0,r.jsx)(n.code,{children:"package.json"}),", which means that only the latest browsers are compatible in the development environment, and the actual browsers are compatible in the production environment:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "browserslist": {\n    "production": [">0.2%", "not dead", "not op_mini all"],\n    "development": [\n      "last 1 chrome version",\n      "last 1 firefox version",\n      "last 1 safari version"\n    ]\n  }\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:"Note that this strategy can lead to some differences in the build result of development production environment."}),"\n",(0,r.jsxs)(n.h2,{id:"production-optimization-strategies",children:["Production optimization strategies",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#production-optimization-strategies",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"The following are strategies for improve build performance in production environment."}),"\n",(0,r.jsxs)(n.h3,{id:"disable-source-map",children:["Disable Source Map",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#disable-source-map",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["If your project does not need Source Map in the production, you can turn it off through the ",(0,r.jsx)(n.code,{children:"disableSourceMap"})," config to improve the build speed."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"export default {\n  output: {\n    disableSourceMap: true,\n  },\n};\n"})}),"\n",(0,r.jsxs)(n.p,{children:["See ",(0,r.jsx)(n.a,{href:"/en/configure/app/output/disable-source-map",children:"output.disableSourceMap"})," for details."]})]})}function t(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,s.ah)(),e.components);return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}n.default=t,t.__RSPRESS_PAGE_META={},t.__RSPRESS_PAGE_META["en%2Fguides%2Fadvanced-features%2Fbuild-performance.mdx"]={toc:[{text:"General optimization strategy",id:"general-optimization-strategy",depth:2},{text:"Upgrade Node.js version",id:"upgrade-nodejs-version",depth:3},{text:"Using Rspack build",id:"using-rspack-build",depth:3},{text:"Using SWC or esbuild",id:"using-swc-or-esbuild",depth:3},{text:"Avoid using ts-loader",id:"avoid-using-ts-loader",depth:3},{text:"Development optimization strategies",id:"development-optimization-strategies",depth:2},{text:"Adjust Source Map format",id:"adjust-source-map-format",depth:3},{text:"Adjust Browserslist for development",id:"adjust-browserslist-for-development",depth:3},{text:"Production optimization strategies",id:"production-optimization-strategies",depth:2},{text:"Disable Source Map",id:"disable-source-map",depth:3}],title:"Improve Build Performance",frontmatter:{sidebar_position:12}}}}]);