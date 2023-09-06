(self.webpackChunk_modern_js_module_tools_docs=self.webpackChunk_modern_js_module_tools_docs||[]).push([["docs_zh_plugins_official-list_plugin-polyfill_md"],{36850:function(e,n,l){"use strict";l.r(n),l.d(n,{default:function(){return t}});var i,s=l("15169"),r=l("43932"),d=l("9880"),o=l("23169");function a(e){var n=Object.assign({h1:"h1",a:"a",div:"div",p:"p",code:"code",h2:"h2",h3:"h3",pre:"pre",ul:"ul",li:"li",strong:"strong"},(0,o.useMDXComponents)(),e.components);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.h1,{id:"polyfill-插件",children:["Polyfill 插件",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#polyfill-插件",children:"#"})]}),"\n",(0,d.jsxs)(n.div,{className:"modern-directive tip",children:[(0,d.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,d.jsxs)(n.div,{className:"modern-directive-content",children:[(0,d.jsx)(n.p,{children:"通常情况下，我们不需要为 npm 包注入 polyfill，这一步应该在 Web 应用的框架侧完成，但是在某些场景，为了让我们的库能够直接运行在低版本浏览器里，我们需要注入 polyfill。"}),"\n",(0,d.jsxs)(n.p,{children:["请注意，此插件并不会转化你的代码语法，只会为你的代码中使用到的不支持的功能注入 polyfill，把它们作为普通函数导入而不是污染全局。你需要安装 ",(0,d.jsx)(n.code,{children:"core-js-pure"})," 依赖"]}),"\n"]})]}),"\n",(0,d.jsxs)(n.h2,{id:"快速开始",children:["快速开始",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#快速开始",children:"#"})]}),"\n",(0,d.jsxs)(n.h3,{id:"安装",children:["安装",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#安装",children:"#"})]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:"# npm\nnpm install @modern-js/plugin-module-polyfill -D\n\n# yarn\nyarn add @modern-js/plugin-module-polyfill -D\n\n# pnpm\npnpm add @modern-js/plugin-module-polyfill -D\n"})}),"\n",(0,d.jsxs)(n.h3,{id:"注册插件",children:["注册插件",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#注册插件",children:"#"})]}),"\n",(0,d.jsx)(n.p,{children:"在 Module Tools 中，你可以按照如下方式注册插件："}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",children:"import { moduleTools, defineConfig } from '@modern-js/module-tools';\nimport { modulePluginPolyfill } from '@modern-js/plugin-module-polyfill';\n\nexport default defineConfig({\n  plugins: [\n    moduleTools(),\n    modulePluginPolyfill(),\n  ],\n});\n"})}),"\n",(0,d.jsxs)(n.h2,{id:"配置",children:["配置",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#配置",children:"#"})]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.strong,{children:"类型："})}),"\n"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",children:"type options = {\n  targets?: Record<string, string> | string;\n}\n"})}),"\n",(0,d.jsxs)(n.h3,{id:"targets",children:["targets",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#targets",children:"#"})]}),"\n",(0,d.jsxs)(n.p,{children:["参考 ",(0,d.jsx)(n.a,{href:"https://babeljs.io/docs/options#targets",target:"_blank",rel:"noopener noreferrer",children:"Babel target"}),"."]}),"\n",(0,d.jsx)(n.p,{children:"下面是一个例子："}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",children:"import { moduleTools, defineConfig } from '@modern-js/module-tools';\nimport { modulePluginPolyfill } from '@modern-js/plugin-module-polyfill';\n\nexport default defineConfig({\n  plugins: [\n    moduleTools(),\n    modulePluginPolyfill({\n      targets: \"> 0.25%, not dead\"\n    }),\n  ],\n});\n"})})]})}(i=globalThis).__RSPRESS_PAGE_META||(i.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["zh%2Fplugins%2Fofficial-list%2Fplugin-polyfill.md"]={toc:[{text:"快速开始",id:"快速开始",depth:2},{text:"安装",id:"安装",depth:3},{text:"注册插件",id:"注册插件",depth:3},{text:"配置",id:"配置",depth:2},{text:"targets",id:"targets",depth:3}],title:"Polyfill 插件",frontmatter:{}};var t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,o.useMDXComponents)(),e.components).wrapper;return n?(0,d.jsx)(n,(0,r._)((0,s._)({},e),{children:(0,d.jsx)(a,(0,s._)({},e))})):a(e)}}}]);