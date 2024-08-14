"use strict";(self.webpackChunk_modern_js_module_tools_docs=self.webpackChunk_modern_js_module_tools_docs||[]).push([["854"],{5898:function(e,n,l){l.r(n),l.d(n,{default:function(){return d}});var i=l(8093),o=l(5878),s=l(2261);function r(e){let n=Object.assign({h1:"h1",a:"a",div:"div",p:"p",code:"code",h2:"h2",h3:"h3",pre:"pre",ul:"ul",li:"li",strong:"strong"},(0,o.ah)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.h1,{id:"polyfill-plugin",children:["Polyfill Plugin",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#polyfill-plugin",children:"#"})]}),"\n",(0,i.jsxs)(n.div,{className:"rspress-directive tip",children:[(0,i.jsx)(n.div,{className:"rspress-directive-title",children:"TIP"}),(0,i.jsxs)(n.div,{className:"rspress-directive-content",children:[(0,i.jsx)(n.p,{children:"Normally, we don't need to inject polyfill for npm packages, this step should be done on the web application framework side, but in some scenarios we need to inject polyfill in order to make our library run directly in low version browsers."}),"\n",(0,i.jsxs)(n.p,{children:["Note that this plugin does not transform your code syntax, it only injects polyfill for unsupported functions used in your code, importing them as normal functions instead of polluting the global. You need to install the ",(0,i.jsx)(n.code,{children:"core-js-pure"})," dependency."]}),"\n"]})]}),"\n",(0,i.jsxs)(n.h2,{id:"quick-start",children:["Quick start",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#quick-start",children:"#"})]}),"\n",(0,i.jsxs)(n.h3,{id:"install",children:["Install",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#install",children:"#"})]}),"\n","\n",(0,i.jsx)(s.SU,{command:"add @modern-js/plugin-module-polyfill -D"}),"\n",(0,i.jsxs)(n.h3,{id:"register",children:["Register",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#register",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"In Modern.js Module, you can register plugins in the following way:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"import { moduleTools, defineConfig } from '@modern-js/module-tools';\nimport { modulePluginPolyfill } from '@modern-js/plugin-module-polyfill';\n\nexport default defineConfig({\n  plugins: [moduleTools(), modulePluginPolyfill()],\n});\n"})}),"\n",(0,i.jsx)(n.p,{children:"You can also configure registration via hooks, for example,\nif you have multiple build configurations at the same time and only need to inject the polyfill when bundle:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"import { moduleTools, defineConfig } from '@modern-js/module-tools';\nimport { getPolyfillHook } from '@modern-js/plugin-module-polyfill';\n\nconst polyfillHook = getPolyfillHook();\n\nexport default defineConfig({\n  plugins: [moduleTools()],\n  buildConfig: [\n    {\n      buildType: 'bundle',\n      hooks: [polyfillHook],\n    },\n    {\n      buildType: 'bundleless',\n    },\n  ],\n});\n"})}),"\n",(0,i.jsxs)(n.h2,{id:"config",children:["Config",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#config",children:"#"})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"Type"})}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"type options = {\n  targets?: Record<string, string> | string;\n};\n"})}),"\n",(0,i.jsxs)(n.h3,{id:"targets",children:["targets",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#targets",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["See ",(0,i.jsx)(n.a,{href:"https://babeljs.io/docs/options#targets",target:"_blank",rel:"noopener noreferrer",children:"Babel target"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"This is a example."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"import { moduleTools, defineConfig } from '@modern-js/module-tools';\nimport { modulePluginPolyfill } from '@modern-js/plugin-module-polyfill';\n\nexport default defineConfig({\n  plugins: [\n    moduleTools(),\n    modulePluginPolyfill({\n      targets: '> 0.25%, not dead',\n    }),\n  ],\n});\n"})})]})}function t(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,o.ah)(),e.components);return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(r,{...e})}):r(e)}let d=t;t.__RSPRESS_PAGE_META={},t.__RSPRESS_PAGE_META["en%2Fplugins%2Fofficial-list%2Fplugin-polyfill.mdx"]={toc:[{text:"Quick start",id:"quick-start",depth:2},{text:"Install",id:"install",depth:3},{text:"Register",id:"register",depth:3},{text:"Config",id:"config",depth:2},{text:"targets",id:"targets",depth:3}],title:"Polyfill Plugin",frontmatter:{}}}}]);