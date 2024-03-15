/*! For license information please see 9621.8650ef26.js.LICENSE.txt */
(self.webpackChunk_modern_js_module_tools_docs=self.webpackChunk_modern_js_module_tools_docs||[]).push([["9621"],{1188:function(e,i,n){"use strict";n.r(i);var s=n("39980"),r=n("96954");function o(e){let i=Object.assign({h1:"h1",a:"a",h2:"h2",p:"p",code:"code",pre:"pre",strong:"strong",ul:"ul",li:"li",ol:"ol",em:"em"},(0,r.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(i.h1,{id:"modify-the-output",children:["Modify the output",(0,s.jsx)(i.a,{className:"header-anchor","aria-hidden":"true",href:"#modify-the-output",children:"#"})]}),"\n",(0,s.jsxs)(i.h2,{id:"default-output-artifacts",children:["Default output artifacts",(0,s.jsx)(i.a,{className:"header-anchor","aria-hidden":"true",href:"#default-output-artifacts",children:"#"})]}),"\n",(0,s.jsxs)(i.p,{children:["When you use the ",(0,s.jsx)(i.code,{children:"modern build"})," command in an initialized project, Modern.js Module will generate corresponding build artifacts based on the current configuration."]}),"\n",(0,s.jsx)(i.p,{children:"The default configuration is as follows:"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import { moduleTools, defineConfig } from '@modern-js/module-tools';\n\nexport default defineConfig({\n  // Register the CLI tool of Modern.js Module\n  plugins: [moduleTools()],\n  // Specify the build preset configuration\n  buildPreset: 'npm-library',\n});\n"})}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"The default output files has the following characteristics"}),"."]}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["will generate ",(0,s.jsx)(i.a,{href:"https://nodejs.org/api/modules.html#modules-commonjs-modules",target:"_blank",rel:"noopener noreferrer",children:"CommonJS"})," and ",(0,s.jsx)(i.a,{href:"https://nodejs.org/api/esm.html#modules-ecmascript-modules",target:"_blank",rel:"noopener noreferrer",children:"ESM"}),"."]}),"\n",(0,s.jsxs)(i.li,{children:["The code syntax is supported up to ",(0,s.jsx)(i.code,{children:"ES6"})," , and more advanced syntax will be converted."]}),"\n",(0,s.jsxs)(i.li,{children:["All code is bundled into one file, i.e. ",(0,s.jsx)(i.strong,{children:"bundle"})," processing is performed."]}),"\n",(0,s.jsxs)(i.li,{children:["The output root directory is the ",(0,s.jsx)(i.code,{children:"dist"})," directory under the project, and the type file output directory is ",(0,s.jsx)(i.code,{children:"dist/types"}),"."]}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"You may have the following questions when you see this."}),"\n",(0,s.jsxs)(i.ol,{children:["\n",(0,s.jsxs)(i.li,{children:["what is ",(0,s.jsx)(i.code,{children:"buildPreset"}),"?"]}),"\n",(0,s.jsx)(i.li,{children:"what determines these characteristics of the product?"}),"\n"]}),"\n",(0,s.jsxs)(i.p,{children:["Then the next step is to first explain ",(0,s.jsx)(i.code,{children:"buildPreset"}),"."]}),"\n",(0,s.jsxs)(i.h2,{id:"buildpreset",children:["buildPreset",(0,s.jsx)(i.a,{className:"header-anchor","aria-hidden":"true",href:"#buildpreset",children:"#"})]}),"\n",(0,s.jsxs)(i.p,{children:["The ",(0,s.jsx)(i.code,{children:"buildPreset"})," represents a prepared set or sets of build-related configurations that can be used to eliminate the trouble and complexity of configuration by using the default values corresponding to the build Preset, resulting in the expected product."]}),"\n",(0,s.jsx)(i.p,{children:"Modern.js Module mainly comes with two built-in build presets, including:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"npm-component: Used to build component libraries."}),"\n",(0,s.jsx)(i.li,{children:"npm-library: Used to package projects of other library types, such as tool libraries."}),"\n"]}),"\n",(0,s.jsxs)(i.p,{children:["It also provides some variations, such as ",(0,s.jsx)(i.code,{children:"npm-library-with-umd"})," and ",(0,s.jsx)(i.code,{children:"npm-library-es5"}),", which, as their names suggest, correspond to library presets with umd output and support for es5 syntax, respectively. For more detailed configuration, you can refer to its ",(0,s.jsx)(i.a,{href:"/api/config/build-preset",children:"API"}),"."]}),"\n",(0,s.jsx)(i.p,{children:"In addition, we can also fully customize the build configuration:"}),"\n",(0,s.jsxs)(i.h2,{id:"buildconfig",children:["buildConfig",(0,s.jsx)(i.a,{className:"header-anchor","aria-hidden":"true",href:"#buildconfig",children:"#"})]}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsxs)(i.strong,{children:[(0,s.jsx)(i.code,{children:"buildConfig"})," is a configuration option that describes how to compile and generate build artifacts"]}),'. What was mentioned at the beginning about "',(0,s.jsx)(i.em,{children:"features of build artifacts"}),'" are actually properties supported by ',(0,s.jsx)(i.code,{children:"buildConfig"}),". The currently supported properties cover the needs of most module type projects when building artifacts. ",(0,s.jsx)(i.code,{children:"buildConfig"})," not only contains some properties that artifacts have, but also contains some features needed to build artifacts. The following is a brief list from a classification point of view."]}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.strong,{children:"The basic attributes of a build artifacts include:"})}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["Whether the artifact is bundled or not: the corresponding API is ",(0,s.jsx)(i.a,{href:"/api/config/build-config#buildtype",children:(0,s.jsx)(i.code,{children:"buildConfig.buildType"})}),"."]}),"\n",(0,s.jsxs)(i.li,{children:["Product support for syntax: the corresponding API is ",(0,s.jsx)(i.a,{href:"/api/config/build-config#target",children:(0,s.jsx)(i.code,{children:"buildConfig.target"})}),"."]}),"\n",(0,s.jsxs)(i.li,{children:["Output format: the corresponding API is ",(0,s.jsx)(i.a,{href:"/api/config/build-config#format",children:(0,s.jsx)(i.code,{children:"buildConfig.format"})}),"."]}),"\n",(0,s.jsxs)(i.li,{children:["How the output type file is handled: the corresponding API is ",(0,s.jsx)(i.a,{href:"/api/config/build-config#dts",children:(0,s.jsx)(i.code,{children:"buildConfig.dts"})}),"."]}),"\n",(0,s.jsxs)(i.li,{children:["How the sourceMap of the artifact is handled: the corresponding API is ",(0,s.jsx)(i.a,{href:"/api/config/build-config#sourcemap",children:(0,s.jsx)(i.code,{children:"buildConfig.sourceMap"})}),"."]}),"\n",(0,s.jsxs)(i.li,{children:["The input (or source file) corresponding to the output: the corresponding API is ",(0,s.jsx)(i.a,{href:"/api/config/build-config#input",children:(0,s.jsx)(i.code,{children:"buildConfig.input"})}),"."]}),"\n",(0,s.jsxs)(i.li,{children:["The directory of the output of the artifact: the corresponding API is ",(0,s.jsx)(i.a,{href:"/api/config/build-config#outDir",children:(0,s.jsx)(i.code,{children:"buildConfig.outDir"})}),"."]}),"\n",(0,s.jsxs)(i.li,{children:["Build source directory: the corresponding API is ",(0,s.jsx)(i.a,{href:"/api/config/build-config#sourcedir",children:(0,s.jsx)(i.code,{children:"buildConfig.sourceDir"})}),"."]}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.strong,{children:"Common functions required for build artifacts include:"})}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["Alias: The corresponding API is ",(0,s.jsx)(i.a,{href:"/api/config/build-config#alias",children:(0,s.jsx)(i.code,{children:"buildConfig.alias"})}),"."]}),"\n",(0,s.jsxs)(i.li,{children:["Static resource handling: the corresponding API is ",(0,s.jsx)(i.a,{href:"/api/config/build-config#asset",children:(0,s.jsx)(i.code,{children:"buildConfig.asset"})}),"."]}),"\n",(0,s.jsxs)(i.li,{children:["Third-party dependency handling: The corresponding APIs are","\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.a,{href:"/api/config/build-config#autoexternal",children:(0,s.jsx)(i.code,{children:"buildConfig.autoExternal"})}),"."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.a,{href:"/api/config/build-config#externals",children:(0,s.jsx)(i.code,{children:"buildConfig.externals"})}),"."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["Copy: The corresponding API is ",(0,s.jsx)(i.a,{href:"/api/config/build-config#copy",children:(0,s.jsx)(i.code,{children:"buildConfig.copy"})}),"."]}),"\n",(0,s.jsxs)(i.li,{children:["Global variable substitution: the corresponding API is ",(0,s.jsx)(i.a,{href:"/api/config/build-config#define",children:(0,s.jsx)(i.code,{children:"buildConfig.define"})}),"."]}),"\n",(0,s.jsxs)(i.li,{children:["Specify ",(0,s.jsx)(i.a,{href:"https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html",target:"_blank",rel:"noopener noreferrer",children:"JSX"})," compilation method, the corresponding API is [",(0,s.jsx)(i.code,{children:"buildConfig.jsx"}),"](/api/config/ build-config#jsx)."]}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.strong,{children:"Some advanced properties or less frequently used functions:"})}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["Product code compression: The corresponding API is ",(0,s.jsx)(i.a,{href:"/api/config/build-config#minify",children:(0,s.jsx)(i.code,{children:"buildConfig.minify"})}),"."]}),"\n",(0,s.jsxs)(i.li,{children:["Code splitting: ",(0,s.jsx)(i.a,{href:"/api/config/build-config#splitting",children:(0,s.jsx)(i.code,{children:"buildConfig.splitting"})})]}),"\n",(0,s.jsxs)(i.li,{children:["Specify whether the build artifacts is for the NodeJS environment or the browser environment: the corresponding API is ",(0,s.jsx)(i.a,{href:"/api/config/build-config#platform",children:(0,s.jsx)(i.code,{children:"buildConfig.platform"})}),"."]}),"\n",(0,s.jsxs)(i.li,{children:["umd product-related.","\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["Specifies the global variables imported externally to the umd product: the corresponding API is ",(0,s.jsx)(i.a,{href:"/api/config/build-config#umdglobals",children:(0,s.jsx)(i.code,{children:"buildConfig.umdGlobals"})}),"."]}),"\n",(0,s.jsxs)(i.li,{children:["Specify the module name of the umd product: the corresponding API is ",(0,s.jsx)(i.a,{href:"/api/config/build-config#umdmodulename",children:(0,s.jsx)(i.code,{children:"buildConfig.umdModuleName"})}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"In addition to the above categories, frequently asked questions and best practices about these APIs can be found at the following links"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:(0,s.jsxs)(i.a,{href:"/guide/advance/in-depth-about-build#bundle--bundleless",children:["About ",(0,s.jsx)(i.code,{children:"bundle"})," and ",(0,s.jsx)(i.code,{children:"bundleless"}),"?"]})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsxs)(i.a,{href:"/guide/advance/in-depth-about-build#input--sourcedir",children:["About ",(0,s.jsx)(i.code,{children:"input"})," and ",(0,s.jsx)(i.code,{children:"sourceDir"})]})}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.a,{href:"/guide/advance/in-depth-about-build#dts",children:"About d.ts"}),"."]}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"/guide/advance/in-depth-about-build#define",children:"How to use define"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"/guide/advance/external-dependency",children:"How to handle third-party dependencies?"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"/guide/advance/copy",children:"How to use copy?"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"/guide/advance/build-umd",children:"How to use umd"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"/guide/advance/asset",children:"How to use asset"})}),"\n"]}),"\n",(0,s.jsxs)(i.h2,{id:"combining-configuration-and-presets",children:["Combining Configuration and Presets",(0,s.jsx)(i.a,{className:"header-anchor","aria-hidden":"true",href:"#combining-configuration-and-presets",children:"#"})]}),"\n",(0,s.jsxs)(i.p,{children:["Once we understand ",(0,s.jsx)(i.code,{children:"buildPreset"})," and ",(0,s.jsx)(i.code,{children:"buildConfig"}),", we can use them together."]}),"\n",(0,s.jsxs)(i.p,{children:["In a real project, we can use ",(0,s.jsx)(i.code,{children:"buildPreset"})," to quickly get a set of default build configurations. If you need to customise it, you can use ",(0,s.jsx)(i.code,{children:"buildConfig"})," to override and extend it."]}),"\n",(0,s.jsx)(i.p,{children:"The extension logic is as follows."}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["When ",(0,s.jsx)(i.code,{children:"buildConfig"})," is an array, new configuration items are added to the original preset."]}),"\n"]}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import { moduleTools, defineConfig } from '@modern-js/module-tools';\n\nexport default defineConfig({\n  plugins: [moduleTools()],\n  buildPreset: 'npm-library',\n  buildConfig: [\n    {\n      format: 'iife',\n      target: 'es2020',\n      outDir: '. /dist/global'\n    }\n  ]\n});\n"})}),"\n",(0,s.jsxs)(i.p,{children:["This will generate an additional IIFE-formatted product that supports up to ES2020 syntax on top of the original preset, in the ",(0,s.jsx)(i.code,{children:"dist/global"})," directory under the project."]}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["When ",(0,s.jsx)(i.code,{children:"buildConfig"})," is an object, the configuration items in the object are overwritten in the preset."]}),"\n"]}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import { moduleTools, defineConfig } from '@modern-js/module-tools';\nexport default defineConfig({\n  plugins: [moduleTools()],\n  buildPreset: 'npm-library',\n  buildConfig: {\n    sourceMap: true,\n  },\n}).\n"})}),"\n",(0,s.jsx)(i.p,{children:"This will cause a sourceMap file to be generated for each build task."})]})}function d(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:i}=Object.assign({},(0,r.useMDXComponents)(),e.components);return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}i.default=d,d.__RSPRESS_PAGE_META={},d.__RSPRESS_PAGE_META["en%2Fguide%2Fbasic%2Fmodify-output-product.md"]={toc:[{text:"Default output artifacts",id:"default-output-artifacts",depth:2},{text:"buildPreset",id:"buildpreset",depth:2},{text:"buildConfig",id:"buildconfig",depth:2},{text:"Combining Configuration and Presets",id:"combining-configuration-and-presets",depth:2}],title:"Modify the output",frontmatter:{sidebar_position:3}}}}]);