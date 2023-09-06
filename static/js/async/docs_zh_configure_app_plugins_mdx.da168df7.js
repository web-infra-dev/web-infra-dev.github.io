(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_configure_app_plugins_mdx"],{99155:function(e,n,i){"use strict";i.r(n),i.d(n,{default:function(){return a}});var r,s=i("15169"),l=i("43932"),d=i("9880"),h=i("23169");function c(e){var n=Object.assign({h1:"h1",a:"a",ul:"ul",li:"li",strong:"strong",code:"code",p:"p",h2:"h2",h3:"h3",pre:"pre"},(0,h.useMDXComponents)(),e.components);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.h1,{id:"plugins-插件",children:["plugins 插件",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#plugins-插件",children:"#"})]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"类型："})," ",(0,d.jsx)(n.code,{children:"CliPlugin[]"})]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"默认值："})," ",(0,d.jsx)(n.code,{children:"[]"})]}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:"用于配置自定义的 Modern.js 框架插件。"}),"\n",(0,d.jsxs)(n.p,{children:["自定义插件的编写方式请参考 ",(0,d.jsx)(n.a,{href:"/guides/topic-detail/framework-plugin/implement",children:"如何编写插件"}),"。"]}),"\n",(0,d.jsxs)(n.h2,{id:"注意事项",children:["注意事项",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#注意事项",children:"#"})]}),"\n",(0,d.jsxs)(n.p,{children:["该选项",(0,d.jsx)(n.strong,{children:"用于配置框架插件"}),"，如果你需要配置其他类型的插件，请选择对应的配置方式："]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["配置 Modern.js Builder 插件，请使用 ",(0,d.jsx)(n.a,{href:"/configure/app/builder-plugins",children:"builderPlugins"})," 配置项。"]}),"\n",(0,d.jsxs)(n.li,{children:["配置 webpack 插件，请使用 ",(0,d.jsx)(n.a,{href:"/configure/app/tools/webpack",children:"tools.webpack"}),"、",(0,d.jsx)(n.a,{href:"/configure/app/tools/webpack-chain",children:"tools.webpackChain"})," 或 ",(0,d.jsx)(n.a,{href:"/configure/app/tools/bundler-chain",children:"tools.bundlerChain"})," 配置项。"]}),"\n",(0,d.jsxs)(n.li,{children:["配置 Rspack 插件，请使用 ",(0,d.jsx)(n.a,{href:"/configure/app/tools/rspack",children:"tools.rspack"})," 或 ",(0,d.jsx)(n.a,{href:"/configure/app/tools/bundler-chain",children:"tools.bundlerChain"})," 配置项。"]}),"\n",(0,d.jsxs)(n.li,{children:["配置 Babel 插件，请使用 ",(0,d.jsx)(n.a,{href:"/configure/app/tools/babel",children:"tools.babel"})," 配置项。"]}),"\n"]}),"\n",(0,d.jsxs)(n.h2,{id:"插件类型",children:["插件类型",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#插件类型",children:"#"})]}),"\n",(0,d.jsx)(n.p,{children:"Modern.js 中内置了三种不同的框架插件："}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"CLI 插件"}),"，适用于本地开发、编译构建阶段，可以在命令行和编译阶段扩展各种能力。"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"Server 插件"}),"，适用于服务端。"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"Runtime 插件"}),"，适用于前端运行时。"]}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:"目前 Modern.js 开放了自定义 CLI 插件的能力，Server 插件和 Runtime 插件会在后续开放。"}),"\n",(0,d.jsxs)(n.h2,{id:"插件执行顺序",children:["插件执行顺序",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#插件执行顺序",children:"#"})]}),"\n",(0,d.jsxs)(n.p,{children:["默认情况下，自定义插件会按照 ",(0,d.jsx)(n.code,{children:"plugins"})," 数组的顺序依次执行，Modern.js 内置插件的执行时机早于自定义插件。"]}),"\n",(0,d.jsxs)(n.p,{children:["当插件内部使用了控制顺序的相关字段，比如 ",(0,d.jsx)(n.code,{children:"pre"}),"、",(0,d.jsx)(n.code,{children:"post"})," 时，会基于声明的字段对执行顺序进行调整，详见 ",(0,d.jsx)(n.a,{href:"/guides/topic-detail/framework-plugin/relationship",children:"插件之间的关系"}),"。"]}),"\n",(0,d.jsxs)(n.h2,{id:"示例",children:["示例",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#示例",children:"#"})]}),"\n",(0,d.jsx)(n.p,{children:"下面是 CLI 插件的使用示例。"}),"\n",(0,d.jsxs)(n.h3,{id:"使用-npm-上的插件",children:["使用 npm 上的插件",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#使用-npm-上的插件",children:"#"})]}),"\n",(0,d.jsx)(n.p,{children:"使用 npm 上的插件，需要通过包管理器安装插件，并通过 import 引入。"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import { myPlugin } from 'my-plugin';\n\nexport default defineConfig({\n  plugins: [myPlugin()],\n});\n"})}),"\n",(0,d.jsxs)(n.h3,{id:"使用本地插件",children:["使用本地插件",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#使用本地插件",children:"#"})]}),"\n",(0,d.jsx)(n.p,{children:"使用本地代码仓库中的插件，直接通过相对路径 import 引入即可。"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import { myPlugin } from './config/plugin/myPlugin';\n\nexport default defineConfig({\n  plugins: [myPlugin()],\n});\n"})}),"\n",(0,d.jsxs)(n.h3,{id:"插件配置项",children:["插件配置项",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#插件配置项",children:"#"})]}),"\n",(0,d.jsx)(n.p,{children:"如果插件提供了一些自定义的配置项，可以通过插件函数的参数传入配置。"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import { myPlugin } from 'my-plugin';\n\nexport default defineConfig({\n  plugins: [\n    myPlugin({\n      foo: 1,\n      bar: 2,\n    }),\n  ],\n});\n"})})]})}(r=globalThis).__RSPRESS_PAGE_META||(r.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["zh%2Fconfigure%2Fapp%2Fplugins.mdx"]={toc:[{text:"注意事项",id:"注意事项",depth:2},{text:"插件类型",id:"插件类型",depth:2},{text:"插件执行顺序",id:"插件执行顺序",depth:2},{text:"示例",id:"示例",depth:2},{text:"使用 npm 上的插件",id:"使用-npm-上的插件",depth:3},{text:"使用本地插件",id:"使用本地插件",depth:3},{text:"插件配置项",id:"插件配置项",depth:3}],title:"plugins 插件",frontmatter:{sidebar_position:9}};var a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,h.useMDXComponents)(),e.components).wrapper;return n?(0,d.jsx)(n,(0,l._)((0,s._)({},e),{children:(0,d.jsx)(c,(0,s._)({},e))})):c(e)}}}]);