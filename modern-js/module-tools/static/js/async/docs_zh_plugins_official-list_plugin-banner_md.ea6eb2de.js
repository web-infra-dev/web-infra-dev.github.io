(self.webpackChunk_modern_js_module_tools_docs=self.webpackChunk_modern_js_module_tools_docs||[]).push([["docs_zh_plugins_official-list_plugin-banner_md"],{38861:function(n,e,r){"use strict";r.r(e),r.d(e,{default:function(){return h}});var s,i=r("15169"),d=r("43932"),o=r("9880"),l=r("23169");function a(n){var e=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",h3:"h3",pre:"pre",code:"code",div:"div",ul:"ul",li:"li",strong:"strong"},(0,l.useMDXComponents)(),n.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(e.h1,{id:"banner-插件",children:["Banner 插件",(0,o.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#banner-插件",children:"#"})]}),"\n",(0,o.jsx)(e.p,{children:"提供为每个 JS 和 CSS 文件的顶部和底部注入内容的能力。"}),"\n",(0,o.jsxs)(e.h2,{id:"快速开始",children:["快速开始",(0,o.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#快速开始",children:"#"})]}),"\n",(0,o.jsxs)(e.h3,{id:"安装",children:["安装",(0,o.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#安装",children:"#"})]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-bash",children:"# npm\nnpm install @modern-js/plugin-module-banner -D\n\n# yarn\nyarn add @modern-js/plugin-module-banner -D\n\n# pnpm\npnpm add @modern-js/plugin-module-banner -D\n"})}),"\n",(0,o.jsxs)(e.h3,{id:"注册插件",children:["注册插件",(0,o.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#注册插件",children:"#"})]}),"\n",(0,o.jsx)(e.p,{children:"在 Module Tools 中，你可以按照如下方式注册插件："}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-ts",children:"import { moduleTools, defineConfig } from '@modern-js/module-tools';\nimport { modulePluginBanner } from '@modern-js/plugin-module-banner';\n\nexport default defineConfig({\n  plugins: [\n    moduleTools(),\n    modulePluginBanner({\n      banner: {\n        js: '//comment',\n        css: '/*comment*/',\n      },\n    }),\n  ],\n});\n"})}),"\n",(0,o.jsxs)(e.div,{className:"modern-directive tip",children:[(0,o.jsx)(e.div,{className:"modern-directive-title",children:"TIP"}),(0,o.jsx)(e.div,{className:"modern-directive-content",children:(0,o.jsxs)(e.p,{children:["注意：CSS 的注释不支持 ",(0,o.jsx)(e.code,{children:"//comment"})," 这样的写法。详见",(0,o.jsx)(e.a,{href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/Comments",target:"_blank",rel:"noopener noreferrer",children:"「CSS 注释」"}),"\n"]})})]}),"\n",(0,o.jsxs)(e.h2,{id:"示例",children:["示例",(0,o.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#示例",children:"#"})]}),"\n",(0,o.jsxs)(e.h3,{id:"在-js-文件顶部增加版权信息",children:["在 JS 文件顶部增加版权信息",(0,o.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#在-js-文件顶部增加版权信息",children:"#"})]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-ts",children:"import { modulePluginBanner } from '@modern-js/plugin-module-banner';\nimport { moduleTools, defineConfig } from '@modern-js/module-tools';\n\nconst copyRight = `/*\n \xa9 Copyright 2020 xxx.com or one of its affiliates.\n * Some Sample Copyright Text Line\n * Some Sample Copyright Text Line\n * Some Sample Copyright Text Line\n * Some Sample Copyright Text Line\n * Some Sample Copyright Text Line\n * Some Sample Copyright Text Line\n*/`;\n\nexport default defineConfig({\n  plugins: [\n    moduleTools(),\n    modulePluginBanner({\n      banner: {\n        js: copyRight,\n      },\n    }),\n  ],\n});\n"})}),"\n",(0,o.jsxs)(e.h2,{id:"配置",children:["配置",(0,o.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#配置",children:"#"})]}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:(0,o.jsx)(e.strong,{children:"类型："})}),"\n"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-ts",children:"type BannerOptions = {\n  banner: {\n    js?: string;\n    css?: string;\n  };\n  footer?: {\n    js?: string;\n    css?: string;\n  };\n};\n"})}),"\n",(0,o.jsxs)(e.h3,{id:"banner",children:["banner",(0,o.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#banner",children:"#"})]}),"\n",(0,o.jsx)(e.p,{children:"在顶部增加内容。"}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.code,{children:"banner.js"}),"：在 JS 文件顶部增加内容。"]}),"\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.code,{children:"banner.css"}),"：在 CSS 文件顶部增加内容。"]}),"\n"]}),"\n",(0,o.jsxs)(e.h3,{id:"footer",children:["footer",(0,o.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#footer",children:"#"})]}),"\n",(0,o.jsx)(e.p,{children:"在底部增加内容。"}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.code,{children:"footer.js"}),"：在 JS 文件底部增加内容。"]}),"\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.code,{children:"footer.css"}),"：在 CSS 文件底部增加内容。"]}),"\n"]})]})}(s=globalThis).__RSPRESS_PAGE_META||(s.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["zh%2Fplugins%2Fofficial-list%2Fplugin-banner.md"]={toc:[{text:"快速开始",id:"快速开始",depth:2},{text:"安装",id:"安装",depth:3},{text:"注册插件",id:"注册插件",depth:3},{text:"示例",id:"示例",depth:2},{text:"在 JS 文件顶部增加版权信息",id:"在-js-文件顶部增加版权信息",depth:3},{text:"配置",id:"配置",depth:2},{text:"banner",id:"banner",depth:3},{text:"footer",id:"footer",depth:3}],title:"Banner 插件",frontmatter:{}};var h=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=Object.assign({},(0,l.useMDXComponents)(),n.components).wrapper;return e?(0,o.jsx)(e,(0,d._)((0,i._)({},n),{children:(0,o.jsx)(a,(0,i._)({},n))})):a(n)}}}]);