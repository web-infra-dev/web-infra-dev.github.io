(self.webpackChunk_modern_js_module_tools_docs=self.webpackChunk_modern_js_module_tools_docs||[]).push([["8153"],{52020:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return h}});var t=r("15169"),i=r("43932"),o=r("9880"),s=r("23169"),a=r("19730");function d(e){var n=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",h3:"h3",pre:"pre",code:"code",div:"div",ul:"ul",li:"li",strong:"strong"},(0,s.useMDXComponents)(),e.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.h1,{id:"banner-plugin",children:["Banner Plugin",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#banner-plugin",children:"#"})]}),"\n",(0,o.jsx)(n.p,{children:"Provide the ability to inject content at the top and bottom of each JS and CSS file."}),"\n",(0,o.jsxs)(n.h2,{id:"quick-start",children:["Quick Start",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#quick-start",children:"#"})]}),"\n",(0,o.jsxs)(n.h3,{id:"install",children:["Install",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#install",children:"#"})]}),"\n","\n",(0,o.jsx)(a.PackageManagerTabs,{command:"add @modern-js/plugin-module-banner -D"}),"\n",(0,o.jsxs)(n.h3,{id:"register",children:["Register",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#register",children:"#"})]}),"\n",(0,o.jsx)(n.p,{children:"You can install the plugin with the following command:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"import { moduleTools, defineConfig } from '@modern-js/module-tools';\nimport { modulePluginBanner } from '@modern-js/plugin-module-banner';\n\nexport default defineConfig({\n  plugins: [\n    moduleTools(),\n    modulePluginBanner({\n      banner: {\n        js: '//comment',\n        css: '/*comment*/',\n      },\n    }),\n  ],\n});\n"})}),"\n",(0,o.jsxs)(n.div,{className:"rspress-directive tip",children:[(0,o.jsx)(n.div,{className:"rspress-directive-title",children:"TIP"}),(0,o.jsx)(n.div,{className:"rspress-directive-content",children:(0,o.jsxs)(n.p,{children:["Note: CSS comments do not support the ",(0,o.jsx)(n.code,{children:"//comment"})," syntax. Refer to ",(0,o.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/Comments",target:"_blank",rel:"noopener noreferrer",children:'"CSS Comments"'}),"\n"]})})]}),"\n",(0,o.jsxs)(n.h2,{id:"example",children:["Example",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#example",children:"#"})]}),"\n",(0,o.jsxs)(n.h3,{id:"add-copyright-information-at-the-top-of-a-js-file",children:["Add copyright information at the top of a JS file",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#add-copyright-information-at-the-top-of-a-js-file",children:"#"})]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"import { modulePluginBanner } from '@modern-js/plugin-module-banner';\nimport { moduleTools, defineConfig } from '@modern-js/module-tools';\n\nconst copyRight = `/*\n \xa9 Copyright 2020 xxx.com or one of its affiliates.\n * Some Sample Copyright Text Line\n * Some Sample Copyright Text Line\n * Some Sample Copyright Text Line\n * Some Sample Copyright Text Line\n * Some Sample Copyright Text Line\n * Some Sample Copyright Text Line\n*/`;\n\nexport default defineConfig({\n  plugins: [\n    moduleTools(),\n    modulePluginBanner({\n      banner: {\n        js: copyRight,\n      },\n    }),\n  ],\n});\n"})}),"\n",(0,o.jsxs)(n.h2,{id:"configuration",children:["Configuration",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#configuration",children:"#"})]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.strong,{children:"Type"})}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"type BannerOptions = {\n  banner: {\n    js?: string;\n    css?: string;\n  };\n  footer?: {\n    js?: string;\n    css?: string;\n  };\n};\n"})}),"\n",(0,o.jsxs)(n.h3,{id:"banner",children:["banner",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#banner",children:"#"})]}),"\n",(0,o.jsx)(n.p,{children:"Add content at the top."}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"banner.js"}),": Add content at the top of a JS file."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"banner.css"}),": Add content at the top of a CSS file."]}),"\n"]}),"\n",(0,o.jsxs)(n.h3,{id:"footer",children:["footer",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#footer",children:"#"})]}),"\n",(0,o.jsx)(n.p,{children:"Add content at the bottom."}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"footer.js"}),": Add content at the bottom of a JS file."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"footer.css"}),": Add content at the bottom of a CSS file."]}),"\n"]})]})}function l(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,s.useMDXComponents)(),e.components).wrapper;return n?(0,o.jsx)(n,(0,i._)((0,t._)({},e),{children:(0,o.jsx)(d,(0,t._)({},e))})):d(e)}var h=l;l.__RSPRESS_PAGE_META={},l.__RSPRESS_PAGE_META["en%2Fplugins%2Fofficial-list%2Fplugin-banner.mdx"]={toc:[{text:"Quick Start",id:"quick-start",depth:2},{text:"Install",id:"install",depth:3},{text:"Register",id:"register",depth:3},{text:"Example",id:"example",depth:2},{text:"Add copyright information at the top of a JS file",id:"add-copyright-information-at-the-top-of-a-js-file",depth:3},{text:"Configuration",id:"configuration",depth:2},{text:"banner",id:"banner",depth:3},{text:"footer",id:"footer",depth:3}],title:"Banner Plugin"}}}]);