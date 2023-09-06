(self.webpackChunk_modern_js_builder_doc=self.webpackChunk_modern_js_builder_doc||[]).push([["docs_zh_guide_advanced_source-build_md"],{97681:function(e,n,s){"use strict";s.r(n),s.d(n,{default:function(){return t}});var r,d=s("15169"),i=s("43932"),c=s("9880"),a=s("23169");function l(e){var n=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",code:"code",pre:"pre",ol:"ol",li:"li"},(0,a.useMDXComponents)(),e.components);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(n.h1,{id:"源码构建模式",children:["源码构建模式",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#源码构建模式",children:"#"})]}),"\n",(0,c.jsx)(n.p,{children:"源码构建模式允许开发者在 Monorepo 场景下使用依赖的子项目源码进行开发。这样可以在不启动子项目构建任务的情况下进行 HMR (Hot Module Replacement)。"}),"\n",(0,c.jsxs)(n.h2,{id:"开启特性",children:["开启特性",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#开启特性",children:"#"})]}),"\n",(0,c.jsxs)(n.p,{children:["你可以通过设置 ",(0,c.jsx)(n.a,{href:"/api/config-experiments#experimentssourcebuild",children:(0,c.jsx)(n.code,{children:"experiments.sourceBuild"})})," 为 ",(0,c.jsx)(n.code,{children:"true"})," 来开启该功能。"]}),"\n",(0,c.jsxs)(n.h2,{id:"指定需要读取源码的子项目",children:["指定需要读取源码的子项目",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#指定需要读取源码的子项目",children:"#"})]}),"\n",(0,c.jsxs)(n.p,{children:["当需要读取某一个子项目源码的时候，需要确保子项目的 package.json 中包含 ",(0,c.jsx)(n.code,{children:"source"})," 字段，并且该字段对应的文件路径为源码文件路径。"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-json",meta:'title="package.json"',children:'{\n  "name": "lib",\n  "main": "./dist/index.js",\n  "source": "./src/index.ts"\n}\n'})}),"\n",(0,c.jsxs)(n.p,{children:["如果子项目存在 ",(0,c.jsx)(n.a,{href:"https://nodejs.org/api/packages.html#package-entry-points",target:"_blank",rel:"noopener noreferrer",children:(0,c.jsx)(n.code,{children:"exports"})})," 配置的时候，那么需要同时在 exports 中增加 ",(0,c.jsx)(n.code,{children:"source"})," 字段。"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-json",meta:'title="package.json"',children:'{\n  "name": "lib",\n  "main": "./dist/index.js",\n  "source": "./src/index.ts",\n  "exports": {\n    ".": {\n      "source": "./src/index.ts",\n      "default": "./dist/index.js"\n    },\n    "./features": {\n      "source": "./src/features/index.ts",\n      "default": "./dist/features/index.js"\n    }\n  }\n}\n'})}),"\n",(0,c.jsxs)(n.h2,{id:"注意事项",children:["注意事项",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#注意事项",children:"#"})]}),"\n",(0,c.jsx)(n.p,{children:"在使用源码构建模式的时候，需要注意几点："}),"\n",(0,c.jsxs)(n.ol,{children:["\n",(0,c.jsx)(n.li,{children:"保证所有子项目使用的配置或者特性都需要在 Builder 的配置文件里设置。"}),"\n",(0,c.jsx)(n.li,{children:"保证当前项目与子项目使用的代码语法特性相同，例如装饰器的语法。"}),"\n",(0,c.jsxs)(n.li,{children:["源码构建可能存在一定的限制。当遇到问题的时候，可以将子项目 package.json 中的 ",(0,c.jsx)(n.code,{children:"source"})," 字段移除，使用子项目的构建产物进行调试。"]}),"\n"]})]})}(r=globalThis).__RSPRESS_PAGE_META||(r.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["zh%2Fguide%2Fadvanced%2Fsource-build.md"]={toc:[{text:"开启特性",id:"开启特性",depth:2},{text:"指定需要读取源码的子项目",id:"指定需要读取源码的子项目",depth:2},{text:"注意事项",id:"注意事项",depth:2}],title:"源码构建模式",frontmatter:{}};var t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,a.useMDXComponents)(),e.components).wrapper;return n?(0,c.jsx)(n,(0,i._)((0,d._)({},e),{children:(0,c.jsx)(l,(0,d._)({},e))})):l(e)}}}]);