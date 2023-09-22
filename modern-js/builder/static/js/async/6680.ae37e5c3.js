(self.webpackChunk_modern_js_builder_doc=self.webpackChunk_modern_js_builder_doc||[]).push([["6680"],{39100:function(e,i,n){"use strict";n.r(i),n.d(i,{default:function(){return c}});var s,r=n("15169"),t=n("43932"),d=n("9880"),a=n("23169");function l(e){var i=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",blockquote:"blockquote",ul:"ul",li:"li",code:"code",h3:"h3",h4:"h4",pre:"pre",div:"div"},(0,a.useMDXComponents)(),e.components);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(i.h1,{id:"chunk-splitting-practice",children:["Chunk Splitting Practice",(0,d.jsx)(i.a,{className:"header-anchor","aria-hidden":"true",href:"#chunk-splitting-practice",children:"#"})]}),"\n",(0,d.jsx)(i.p,{children:"A great chunk splitting strategy is very important to improve the loading performance of the application. It can make full use of the browser's caching mechanism to reduce the number of requests and improve the loading speed of the application."}),"\n",(0,d.jsx)(i.p,{children:"A variety of chunk splitting strategies are built into Builder, which can meet the needs of most applications. You can also customize the chunk splitting config according to your own business scenarios."}),"\n",(0,d.jsxs)(i.h2,{id:"splitting-strategies",children:["Splitting Strategies",(0,d.jsx)(i.a,{className:"header-anchor","aria-hidden":"true",href:"#splitting-strategies",children:"#"})]}),"\n",(0,d.jsxs)(i.blockquote,{children:["\n",(0,d.jsxs)(i.p,{children:["The chunk splitting config of Builder is in ",(0,d.jsx)(i.a,{href:"/en/api/config-performance#performancechunksplit",children:"performance.chunkSplit"}),"."]}),"\n"]}),"\n",(0,d.jsx)(i.p,{children:"Builder supports the following chunk splitting strategies:"}),"\n",(0,d.jsxs)(i.ul,{children:["\n",(0,d.jsxs)(i.li,{children:[(0,d.jsx)(i.code,{children:"split-by-experience"}),": an empirical splitting strategy, automatically splits some commonly used npm packages into chunks of moderate size."]}),"\n",(0,d.jsxs)(i.li,{children:[(0,d.jsx)(i.code,{children:"split-by-module"}),": split by NPM package granularity, each NPM package corresponds to a chunk."]}),"\n",(0,d.jsxs)(i.li,{children:[(0,d.jsx)(i.code,{children:"split-by-size"}),": automatically split according to module size."]}),"\n",(0,d.jsxs)(i.li,{children:[(0,d.jsx)(i.code,{children:"all-in-one"}),": bundle all codes into one chunk."]}),"\n",(0,d.jsxs)(i.li,{children:[(0,d.jsx)(i.code,{children:"single-vendor"}),": bundle all NPM packages into a single chunk."]}),"\n",(0,d.jsxs)(i.li,{children:[(0,d.jsx)(i.code,{children:"custom"}),": custom chunk splitting strategy."]}),"\n"]}),"\n",(0,d.jsxs)(i.h3,{id:"split-by-experience",children:["split-by-experience",(0,d.jsx)(i.a,{className:"header-anchor","aria-hidden":"true",href:"#split-by-experience",children:"#"})]}),"\n",(0,d.jsxs)(i.h4,{id:"behavior",children:["Behavior",(0,d.jsx)(i.a,{className:"header-anchor","aria-hidden":"true",href:"#behavior",children:"#"})]}),"\n",(0,d.jsxs)(i.p,{children:["Builder adopts the ",(0,d.jsx)(i.code,{children:"split-by-experience"})," strategy by default, which is a strategy we have developed from experience. Specifically, when the following npm packages are referenced in your project, they will automatically be split into separate chunks:"]}),"\n",(0,d.jsxs)(i.ul,{children:["\n",(0,d.jsxs)(i.li,{children:[(0,d.jsx)(i.code,{children:"lib-polyfill.js"}),": includes ",(0,d.jsx)(i.code,{children:"core-js"}),", ",(0,d.jsx)(i.code,{children:"@babel/runtime"}),", ",(0,d.jsx)(i.code,{children:"@swc/helpers"}),", ",(0,d.jsx)(i.code,{children:"tslib"}),"."]}),"\n",(0,d.jsxs)(i.li,{children:[(0,d.jsx)(i.code,{children:"lib-react.js"}),": includes ",(0,d.jsx)(i.code,{children:"react"}),", ",(0,d.jsx)(i.code,{children:"react-dom"}),"."]}),"\n",(0,d.jsxs)(i.li,{children:[(0,d.jsx)(i.code,{children:"lib-router.js"}),": includes ",(0,d.jsx)(i.code,{children:"react-router"}),", ",(0,d.jsx)(i.code,{children:"react-router-dom"}),", ",(0,d.jsx)(i.code,{children:"history"}),", ",(0,d.jsx)(i.code,{children:"@remix-run/router"}),"."]}),"\n",(0,d.jsxs)(i.li,{children:[(0,d.jsx)(i.code,{children:"lib-lodash.js"}),": includes ",(0,d.jsx)(i.code,{children:"lodash"}),", ",(0,d.jsx)(i.code,{children:"lodash-es"}),"."]}),"\n",(0,d.jsxs)(i.li,{children:[(0,d.jsx)(i.code,{children:"lib-antd.js"}),": includes ",(0,d.jsx)(i.code,{children:"antd"}),"."]}),"\n",(0,d.jsxs)(i.li,{children:[(0,d.jsx)(i.code,{children:"lib-arco.js"}),": includes ",(0,d.jsx)(i.code,{children:"@arco-design/web-react"})," and related packages under the ",(0,d.jsx)(i.code,{children:"@arco-design"})," organization."]}),"\n",(0,d.jsxs)(i.li,{children:[(0,d.jsx)(i.code,{children:"lib-semi.js"}),": includes ",(0,d.jsx)(i.code,{children:"@douyinfe/semi-ui"})," and related packages under the ",(0,d.jsx)(i.code,{children:"@ies"})," & ",(0,d.jsx)(i.code,{children:"@douyinfe"})," organization."]}),"\n",(0,d.jsxs)(i.li,{children:[(0,d.jsx)(i.code,{children:"lib-axios.js"}),": includes ",(0,d.jsx)(i.code,{children:"axios"})," and related packages."]}),"\n"]}),"\n",(0,d.jsx)(i.p,{children:"This strategy groups commonly used packages and then splits them into separate chunks. Generally, the number of chunks is not large, which is suitable for most applications and is also our recommended strategy."}),"\n",(0,d.jsxs)(i.h4,{id:"config",children:["Config",(0,d.jsx)(i.a,{className:"header-anchor","aria-hidden":"true",href:"#config",children:"#"})]}),"\n",(0,d.jsx)(i.pre,{children:(0,d.jsx)(i.code,{className:"language-ts",children:"export default {\n  performance: {\n    chunkSplit: {\n      strategy: 'split-by-experience',\n    },\n  },\n};\n"})}),"\n",(0,d.jsxs)(i.h4,{id:"notes",children:["Notes",(0,d.jsx)(i.a,{className:"header-anchor","aria-hidden":"true",href:"#notes",children:"#"})]}),"\n",(0,d.jsxs)(i.ul,{children:["\n",(0,d.jsx)(i.li,{children:"If the npm packages mentioned above are not installed or used in the project, the corresponding chunk will not be generated."}),"\n"]}),"\n",(0,d.jsxs)(i.h3,{id:"split-by-module",children:["split-by-module",(0,d.jsx)(i.a,{className:"header-anchor","aria-hidden":"true",href:"#split-by-module",children:"#"})]}),"\n",(0,d.jsxs)(i.h4,{id:"behavior-1",children:["Behavior",(0,d.jsx)(i.a,{className:"header-anchor","aria-hidden":"true",href:"#behavior-1",children:"#"})]}),"\n",(0,d.jsx)(i.p,{children:"Split each NPM package into a Chunk."}),"\n",(0,d.jsxs)(i.div,{className:"rspress-directive warning",children:[(0,d.jsx)(i.div,{className:"rspress-directive-title",children:"WARNING"}),(0,d.jsx)(i.div,{className:"rspress-directive-content",children:(0,d.jsx)(i.p,{children:"This strategy will split the node_modules in the most granular way, and at the same time, under HTTP/2, multiplexing will speed up the loading time of resources.However, in non-HTTP/2 environments, it needs to be used with caution because of HTTP head-of-line blocking problem."})})]}),"\n",(0,d.jsxs)(i.h4,{id:"config-1",children:["Config",(0,d.jsx)(i.a,{className:"header-anchor","aria-hidden":"true",href:"#config-1",children:"#"})]}),"\n",(0,d.jsx)(i.pre,{children:(0,d.jsx)(i.code,{className:"language-ts",children:"export default {\n  performance: {\n    chunkSplit: {\n      strategy: 'split-by-module',\n    },\n  },\n};\n"})}),"\n",(0,d.jsxs)(i.h4,{id:"notes-1",children:["Notes",(0,d.jsx)(i.a,{className:"header-anchor","aria-hidden":"true",href:"#notes-1",children:"#"})]}),"\n",(0,d.jsxs)(i.ul,{children:["\n",(0,d.jsx)(i.li,{children:"This configuration will split the node_modules into smaller chunks, resulting in a large number of file requests."}),"\n",(0,d.jsx)(i.li,{children:"When using HTTP/2, resource loading time will be accelerated and cache hit rate will be improved due to multiplexing."}),"\n",(0,d.jsx)(i.li,{children:"When not using HTTP/2, the performance of page loading may be reduced due to HTTP head-of-line blocking. Please use with caution."}),"\n"]}),"\n",(0,d.jsxs)(i.h3,{id:"all-in-one",children:["all-in-one",(0,d.jsx)(i.a,{className:"header-anchor","aria-hidden":"true",href:"#all-in-one",children:"#"})]}),"\n",(0,d.jsxs)(i.h4,{id:"behavior-2",children:["Behavior",(0,d.jsx)(i.a,{className:"header-anchor","aria-hidden":"true",href:"#behavior-2",children:"#"})]}),"\n",(0,d.jsx)(i.p,{children:"This strategy puts business code and third-party dependencies in the same Chunk."}),"\n",(0,d.jsxs)(i.h4,{id:"config-2",children:["Config",(0,d.jsx)(i.a,{className:"header-anchor","aria-hidden":"true",href:"#config-2",children:"#"})]}),"\n",(0,d.jsx)(i.pre,{children:(0,d.jsx)(i.code,{className:"language-ts",children:"export default {\n  performance: {\n    chunkSplit: {\n      strategy: 'all-in-one',\n    },\n  },\n};\n"})}),"\n",(0,d.jsxs)(i.h4,{id:"notes-2",children:["Notes",(0,d.jsx)(i.a,{className:"header-anchor","aria-hidden":"true",href:"#notes-2",children:"#"})]}),"\n",(0,d.jsxs)(i.ul,{children:["\n",(0,d.jsx)(i.li,{children:"This configuration will bundle all the generated JS code into one file (except for dynamically imported chunks)."}),"\n",(0,d.jsx)(i.li,{children:"The size of a single JS file may be very large, leading to a decrease in page loading performance."}),"\n"]}),"\n",(0,d.jsxs)(i.h3,{id:"single-vendor",children:["single-vendor",(0,d.jsx)(i.a,{className:"header-anchor","aria-hidden":"true",href:"#single-vendor",children:"#"})]}),"\n",(0,d.jsxs)(i.h4,{id:"behavior-3",children:["Behavior",(0,d.jsx)(i.a,{className:"header-anchor","aria-hidden":"true",href:"#behavior-3",children:"#"})]}),"\n",(0,d.jsx)(i.p,{children:"This strategy puts third-party dependencies in one Chunk, and business code in another Chunk."}),"\n",(0,d.jsxs)(i.h4,{id:"config-3",children:["Config",(0,d.jsx)(i.a,{className:"header-anchor","aria-hidden":"true",href:"#config-3",children:"#"})]}),"\n",(0,d.jsx)(i.pre,{children:(0,d.jsx)(i.code,{className:"language-ts",children:"export default {\n  performance: {\n    chunkSplit: {\n      strategy: 'single-vendor',\n    },\n  },\n};\n"})}),"\n",(0,d.jsxs)(i.h4,{id:"notes-3",children:["Notes",(0,d.jsx)(i.a,{className:"header-anchor","aria-hidden":"true",href:"#notes-3",children:"#"})]}),"\n",(0,d.jsxs)(i.ul,{children:["\n",(0,d.jsx)(i.li,{children:"The size of a single vendor file may be very large, leading to a decrease in page loading performance."}),"\n"]}),"\n",(0,d.jsxs)(i.h3,{id:"split-by-size",children:["split-by-size",(0,d.jsx)(i.a,{className:"header-anchor","aria-hidden":"true",href:"#split-by-size",children:"#"})]}),"\n",(0,d.jsxs)(i.h4,{id:"behavior-4",children:["Behavior",(0,d.jsx)(i.a,{className:"header-anchor","aria-hidden":"true",href:"#behavior-4",children:"#"})]}),"\n",(0,d.jsxs)(i.p,{children:["Under this strategy, after setting ",(0,d.jsx)(i.code,{children:"minSize"}),", ",(0,d.jsx)(i.code,{children:"maxSize"})," to a fixed value, Builder will automatically split them without extra config."]}),"\n",(0,d.jsxs)(i.h4,{id:"config-4",children:["Config",(0,d.jsx)(i.a,{className:"header-anchor","aria-hidden":"true",href:"#config-4",children:"#"})]}),"\n",(0,d.jsx)(i.pre,{children:(0,d.jsx)(i.code,{className:"language-ts",children:"export default {\n  performance: {\n    chunkSplit: {\n      strategy: 'split-by-size',\n      minSize: 30000,\n      maxSize: 50000,\n    },\n  },\n};\n"})}),"\n",(0,d.jsxs)(i.h2,{id:"custom-splitting-strategy",children:["Custom Splitting Strategy",(0,d.jsx)(i.a,{className:"header-anchor","aria-hidden":"true",href:"#custom-splitting-strategy",children:"#"})]}),"\n",(0,d.jsx)(i.p,{children:"In addition to using the built-in strategies, you can also customize the splitting strategy to meet more customization needs. Custom strategy is divided into two parts:"}),"\n",(0,d.jsxs)(i.ul,{children:["\n",(0,d.jsx)(i.li,{children:"Custom group"}),"\n",(0,d.jsxs)(i.li,{children:["Custom bundler ",(0,d.jsx)(i.code,{children:"splitChunks"})," config"]}),"\n"]}),"\n",(0,d.jsx)(i.p,{children:"It is worth noting that these two custom capabilities can be used together with the built-in strategy, that is, you can use the built-in strategy to split commonly used packages, and then use the custom function to split other packages."}),"\n",(0,d.jsxs)(i.h3,{id:"custom-group",children:["Custom Group",(0,d.jsx)(i.a,{className:"header-anchor","aria-hidden":"true",href:"#custom-group",children:"#"})]}),"\n",(0,d.jsx)(i.p,{children:"Builder supports custom group, which is more flexible than the built-in strategies, and simpler than writing bundler config."}),"\n",(0,d.jsxs)(i.p,{children:["For example, split the ",(0,d.jsx)(i.code,{children:"axios"})," library under node_modules into ",(0,d.jsx)(i.code,{children:"axios.js"}),":"]}),"\n",(0,d.jsx)(i.pre,{children:(0,d.jsx)(i.code,{className:"language-js",children:"export default {\n  performance: {\n    chunkSplit: {\n      strategy: 'split-by-experience',\n      forceSplitting: {\n        axios: /node_modules\\/axios/,\n      },\n    },\n  },\n};\n"})}),"\n",(0,d.jsxs)(i.p,{children:["Through ",(0,d.jsx)(i.code,{children:"forceSplitting"})," config, you can easily split some packages into a Chunk."]}),"\n",(0,d.jsxs)(i.h4,{id:"notes-4",children:["Notes",(0,d.jsx)(i.a,{className:"header-anchor","aria-hidden":"true",href:"#notes-4",children:"#"})]}),"\n",(0,d.jsxs)(i.p,{children:["Chunks split using the ",(0,d.jsx)(i.code,{children:"forceSplitting"})," configuration will be inserted into the HTML file as resources requested for the initial screen using ",(0,d.jsx)(i.code,{children:"<script>"})," tags. Therefore, please split them appropriately based on the actual scenario to avoid excessive size of initial screen resources."]}),"\n",(0,d.jsxs)(i.h3,{id:"custom-bundler-splitchunks-config",children:["Custom Bundler ",(0,d.jsx)(i.code,{children:"splitChunks"})," Config",(0,d.jsx)(i.a,{className:"header-anchor","aria-hidden":"true",href:"#custom-bundler-splitchunks-config",children:"#"})]}),"\n",(0,d.jsxs)(i.p,{children:["In addition to using custom grouping, you can also customize the native bundler config through ",(0,d.jsx)(i.code,{children:"override"}),", such as:"]}),"\n",(0,d.jsx)(i.pre,{children:(0,d.jsx)(i.code,{className:"language-ts",children:"export default {\n  performance: {\n    chunkSplit: {\n      strategy: 'split-by-experience',\n      override: {\n        chunks: 'all',\n        minSize: 30000,\n      },\n    },\n  },\n};\n"})}),"\n",(0,d.jsxs)(i.p,{children:["The config in ",(0,d.jsx)(i.code,{children:"override"})," will be merged with the bundler config. For specific config details, please refer to ",(0,d.jsx)(i.a,{href:"https://webpack.js.org/plugins/split-chunks-plugin/#splitchunkschunks",target:"_blank",rel:"noopener noreferrer",children:"webpack - splitChunks"})," or ",(0,d.jsx)(i.a,{href:"https://rspack.dev/config/optimization.html#optimization-splitchunks",target:"_blank",rel:"noopener noreferrer",children:"Rspack - splitChunks"}),"."]}),"\n",(0,d.jsxs)(i.h2,{id:"using-dynamic-import-for-code-splitting",children:["Using Dynamic Import for Code Splitting",(0,d.jsx)(i.a,{className:"header-anchor","aria-hidden":"true",href:"#using-dynamic-import-for-code-splitting",children:"#"})]}),"\n",(0,d.jsxs)(i.p,{children:["In addition to the ",(0,d.jsx)(i.code,{children:"chunkSplit"})," configurations, using dynamic import for code splitting is also an important optimization technique that can effectively reduce the initial bundle size."]}),"\n",(0,d.jsxs)(i.div,{className:"rspress-directive tip",children:[(0,d.jsx)(i.div,{className:"rspress-directive-title",children:"About dynamic import"}),(0,d.jsx)(i.div,{className:"rspress-directive-content",children:(0,d.jsx)(i.p,{children:"Dynamic import is a new feature introduced in ECMAScript 2020 that allows you to dynamically load JavaScript modules. The underlying Rspack/webpack used by the Builder supports dynamic import by default, so you can use it directly in your code."})})]}),"\n",(0,d.jsxs)(i.p,{children:["When the bundler encounters the ",(0,d.jsx)(i.code,{children:"import()"})," syntax, it automatically splits the relevant code into a new chunk and loads it on-demand at runtime."]}),"\n",(0,d.jsxs)(i.p,{children:["For example, if your project has a large module called ",(0,d.jsx)(i.code,{children:"bigModule.ts"})," (which can also be a third-party dependency), you can use dynamic import to load it on-demand:"]}),"\n",(0,d.jsx)(i.pre,{children:(0,d.jsx)(i.code,{className:"language-js",children:"// Somewhere in your code where you need to use bigModule\nimport('./bigModule.ts').then(bigModule => {\n  // Use bigModule here\n});\n"})}),"\n",(0,d.jsxs)(i.p,{children:["When you run the build command, ",(0,d.jsx)(i.code,{children:"bigModule.ts"})," will be automatically split into a new chunk and loaded on-demand at runtime."]})]})}(s=globalThis).__RSPRESS_PAGE_META||(s.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["en%2Fguide%2Foptimization%2Fsplit-chunk.md"]={toc:[{text:"Splitting Strategies",id:"splitting-strategies",depth:2},{text:"split-by-experience",id:"split-by-experience",depth:3},{text:"Behavior",id:"behavior",depth:4},{text:"Config",id:"config",depth:4},{text:"Notes",id:"notes",depth:4},{text:"split-by-module",id:"split-by-module",depth:3},{text:"Behavior",id:"behavior-1",depth:4},{text:"Config",id:"config-1",depth:4},{text:"Notes",id:"notes-1",depth:4},{text:"all-in-one",id:"all-in-one",depth:3},{text:"Behavior",id:"behavior-2",depth:4},{text:"Config",id:"config-2",depth:4},{text:"Notes",id:"notes-2",depth:4},{text:"single-vendor",id:"single-vendor",depth:3},{text:"Behavior",id:"behavior-3",depth:4},{text:"Config",id:"config-3",depth:4},{text:"Notes",id:"notes-3",depth:4},{text:"split-by-size",id:"split-by-size",depth:3},{text:"Behavior",id:"behavior-4",depth:4},{text:"Config",id:"config-4",depth:4},{text:"Custom Splitting Strategy",id:"custom-splitting-strategy",depth:2},{text:"Custom Group",id:"custom-group",depth:3},{text:"Notes",id:"notes-4",depth:4},{text:"Custom Bundler splitChunks Config",id:"custom-bundler-splitchunks-config",depth:3},{text:"Using Dynamic Import for Code Splitting",id:"using-dynamic-import-for-code-splitting",depth:2}],title:"Chunk Splitting Practice",frontmatter:{}};var c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=Object.assign({},(0,a.useMDXComponents)(),e.components).wrapper;return i?(0,d.jsx)(i,(0,t._)((0,r._)({},e),{children:(0,d.jsx)(l,(0,r._)({},e))})):l(e)}}}]);