/*! For license information please see 9723.545d1eaf.js.LICENSE.txt */
(self.webpackChunk_modern_js_builder_doc=self.webpackChunk_modern_js_builder_doc||[]).push([["9723"],{19253:function(e,r,n){"use strict";n.r(r);var i=n("39980"),d=n("96954");function s(e){let r=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",code:"code",h3:"h3",pre:"pre",ul:"ul",li:"li",strong:"strong",blockquote:"blockquote"},(0,d.useMDXComponents)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(r.h1,{id:"builder-core",children:["Builder Core",(0,i.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#builder-core",children:"#"})]}),"\n",(0,i.jsx)(r.p,{children:"This section describes some of the core methods provided by Builder."}),"\n",(0,i.jsxs)(r.h2,{id:"createbuilder",children:["createBuilder",(0,i.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#createbuilder",children:"#"})]}),"\n",(0,i.jsx)(r.p,{children:"Create a Builder instance object."}),"\n",(0,i.jsxs)(r.p,{children:["When using this method, it needs to be used with the ",(0,i.jsx)(r.code,{children:"@modern-js/builder-webpack-provider"})," or ",(0,i.jsx)(r.code,{children:"@modern-js/builder-rspack-provider"}),". Providers implements corresponding build feature based on specific bundlers."]}),"\n",(0,i.jsxs)(r.h3,{id:"builderwebpackprovider",children:["builderWebpackProvider",(0,i.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#builderwebpackprovider",children:"#"})]}),"\n",(0,i.jsxs)(r.p,{children:["When ",(0,i.jsx)(r.code,{children:"builderWebpackProvider"})," is passed, the Builder will use webpack as the bundler for building."]}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-ts",children:"import { createBuilder } from '@modern-js/builder';\nimport { builderWebpackProvider } from '@modern-js/builder-webpack-provider';\n\nconst provider = builderWebpackProvider({\n  builderConfig: {\n    // some configs\n  },\n});\n\nconst builder = await createBuilder(provider, {\n  // some options\n});\n"})}),"\n",(0,i.jsxs)(r.h3,{id:"builderrspackprovider",children:["builderRspackProvider",(0,i.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#builderrspackprovider",children:"#"})]}),"\n",(0,i.jsxs)(r.p,{children:["When ",(0,i.jsx)(r.code,{children:"builderRspackProvider"})," is passed, the Builder will use Rspack as the bundler for building."]}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-ts",children:"import { createBuilder } from '@modern-js/builder';\nimport { builderRspackProvider } from '@modern-js/builder-rspack-provider';\n\nconst provider = builderRspackProvider({\n  builderConfig: {\n    // some configs\n  },\n});\n\nconst builder = await createBuilder(provider, {\n  // some options\n});\n"})}),"\n",(0,i.jsxs)(r.h3,{id:"options",children:["options",(0,i.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#options",children:"#"})]}),"\n",(0,i.jsxs)(r.p,{children:["The second parameter of ",(0,i.jsx)(r.code,{children:"createBuilder"})," is a options object, you can pass in the following options:"]}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-ts",children:"type BuilderEntry = Record<string, string | string[]>;\n\ntype BuilderTarget = 'web' | 'node' | 'modern-web' | 'web-worker';\n\ntype CreateBuilderOptions = {\n  cwd?: string;\n  entry?: BuilderEntry;\n  target?: BuilderTarget | BuilderTarget[];\n  framework?: string;\n  configPath?: string | null;\n};\n"})}),"\n",(0,i.jsx)(r.p,{children:"Description:"}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.code,{children:"cwd"}),": The root path of the current build, the default value is ",(0,i.jsx)(r.code,{children:"process.cwd()"}),"."]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.code,{children:"entry"}),": Build entry object."]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.code,{children:"target"}),": Build target type, the default value is ",(0,i.jsx)(r.code,{children:"['web']"}),", see chapter ",(0,i.jsx)(r.a,{href:"/guide/basic/build-target",children:"Build Target"})," for details."]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.code,{children:"framework"}),": The name of the framework, a unique identifier, the default value is ",(0,i.jsx)(r.code,{children:"'modern.js'"}),"."]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.code,{children:"configPath"}),": The path to the framework config file (absolute path), this parameter affects the build cache update."]}),"\n"]}),"\n",(0,i.jsxs)(r.h2,{id:"mergebuilderconfig",children:["mergeBuilderConfig",(0,i.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#mergebuilderconfig",children:"#"})]}),"\n",(0,i.jsx)(r.p,{children:"Merges multiple Builder config objects and returns a new merged object."}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.strong,{children:"Type"})}),"\n"]}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-ts",children:"function mergeBuilderConfig(...configs: BuilderConfig[]): BuilderConfig;\n"})}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.strong,{children:"Example"})}),"\n"]}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-ts",children:"import { mergeBuilderConfig } from '@modern-js/builder';\n\nconst config1 = {\n  dev: {\n    https: false,\n  },\n};\nconst config2 = {\n  dev: {\n    https: true,\n  },\n};\n\nconst mergedConfig = mergeBuilderConfig(config1, config2);\n\nconsole.log(mergedConfig); // { dev: { https: true } }\n"})}),"\n",(0,i.jsxs)(r.blockquote,{children:["\n",(0,i.jsx)(r.p,{children:"This method does not modify the original config object."}),"\n"]}),"\n",(0,i.jsxs)(r.h2,{id:"webpack",children:["webpack",(0,i.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#webpack",children:"#"})]}),"\n",(0,i.jsx)(r.p,{children:"A webpack object for consuming webpack builtin plugins or type definitions."}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.strong,{children:"Example"})}),"\n"]}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-ts",children:"import webpack from '@modern-js/builder-webpack-provider/webpack';\n\nnew webpack.DefinePlugin();\n"})}),"\n",(0,i.jsxs)(r.blockquote,{children:["\n",(0,i.jsx)(r.p,{children:'In most scenarios, it is recommended to import webpack from Builder instead of manually installing a "webpack" dependency, which can avoid multi-instance problems.'}),"\n"]}),"\n",(0,i.jsxs)(r.h2,{id:"htmlwebpackplugin",children:["HtmlWebpackPlugin",(0,i.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#htmlwebpackplugin",children:"#"})]}),"\n",(0,i.jsx)(r.p,{children:"HtmlWebpackPlugin object, usually used to implement custom plugins of HtmlWebpackPlugin."}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.strong,{children:"Example"})}),"\n"]}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-ts",children:"import HtmlWebpackPlugin from '@modern-js/builder-webpack-provider/html-webpack-plugin';\n"})}),"\n",(0,i.jsxs)(r.blockquote,{children:["\n",(0,i.jsx)(r.p,{children:'In most scenarios, it is recommended to import HtmlWebpackPlugin from builder instead of manually installing a "html-webpack-plugin" dependency, which can avoid multi-instance problems.'}),"\n"]})]})}function l(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:r}=Object.assign({},(0,d.useMDXComponents)(),e.components);return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(s,{...e})}):s(e)}r.default=l,l.__RSPRESS_PAGE_META={},l.__RSPRESS_PAGE_META["en%2Fapi%2Fbuilder-core.mdx"]={toc:[{text:"createBuilder",id:"createbuilder",depth:2},{text:"builderWebpackProvider",id:"builderwebpackprovider",depth:3},{text:"builderRspackProvider",id:"builderrspackprovider",depth:3},{text:"options",id:"options",depth:3},{text:"mergeBuilderConfig",id:"mergebuilderconfig",depth:2},{text:"webpack",id:"webpack",depth:2},{text:"HtmlWebpackPlugin",id:"htmlwebpackplugin",depth:2}],title:"Builder Core",frontmatter:{extractApiHeaders:[2]}}}}]);