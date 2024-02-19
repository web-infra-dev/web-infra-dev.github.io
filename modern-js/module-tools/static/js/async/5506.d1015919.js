/*! For license information please see 5506.d1015919.js.LICENSE.txt */
(self.webpackChunk_modern_js_module_tools_docs=self.webpackChunk_modern_js_module_tools_docs||[]).push([["5506"],{31167:function(e,n,l){"use strict";l.r(n);var s=l("39980"),o=l("96954"),i=l("92919");function r(e){let n=Object.assign({h1:"h1",a:"a",div:"div",p:"p",code:"code",h2:"h2",h3:"h3",pre:"pre",ul:"ul",li:"li",strong:"strong"},(0,o.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h1,{id:"polyfill-\u63D2\u4EF6",children:["Polyfill \u63D2\u4EF6",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#polyfill-\u63D2\u4EF6",children:"#"})]}),"\n",(0,s.jsxs)(n.div,{className:"rspress-directive tip",children:[(0,s.jsx)(n.div,{className:"rspress-directive-title",children:"TIP"}),(0,s.jsxs)(n.div,{className:"rspress-directive-content",children:[(0,s.jsx)(n.p,{children:"\u901A\u5E38\u60C5\u51B5\u4E0B\uFF0C\u6211\u4EEC\u4E0D\u9700\u8981\u4E3A npm \u5305\u6CE8\u5165 polyfill\uFF0C\u8FD9\u4E00\u6B65\u5E94\u8BE5\u5728 Web \u5E94\u7528\u7684\u6846\u67B6\u4FA7\u5B8C\u6210\uFF0C\u4F46\u662F\u5728\u67D0\u4E9B\u573A\u666F\uFF0C\u4E3A\u4E86\u8BA9\u6211\u4EEC\u7684\u5E93\u80FD\u591F\u76F4\u63A5\u8FD0\u884C\u5728\u4F4E\u7248\u672C\u6D4F\u89C8\u5668\u91CC\uFF0C\u6211\u4EEC\u9700\u8981\u6CE8\u5165 polyfill\u3002"}),"\n",(0,s.jsxs)(n.p,{children:["\u8BF7\u6CE8\u610F\uFF0C\u6B64\u63D2\u4EF6\u5E76\u4E0D\u4F1A\u8F6C\u5316\u4F60\u7684\u4EE3\u7801\u8BED\u6CD5\uFF0C\u53EA\u4F1A\u4E3A\u4F60\u7684\u4EE3\u7801\u4E2D\u4F7F\u7528\u5230\u7684\u4E0D\u652F\u6301\u7684\u529F\u80FD\u6CE8\u5165 polyfill\uFF0C\u628A\u5B83\u4EEC\u4F5C\u4E3A\u666E\u901A\u51FD\u6570\u5BFC\u5165\u800C\u4E0D\u662F\u6C61\u67D3\u5168\u5C40\u3002\u4F60\u9700\u8981\u5B89\u88C5 ",(0,s.jsx)(n.code,{children:"core-js-pure"})," \u4F9D\u8D56"]}),"\n"]})]}),"\n",(0,s.jsxs)(n.h2,{id:"\u5FEB\u901F\u5F00\u59CB",children:["\u5FEB\u901F\u5F00\u59CB",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u5FEB\u901F\u5F00\u59CB",children:"#"})]}),"\n",(0,s.jsxs)(n.h3,{id:"\u5B89\u88C5",children:["\u5B89\u88C5",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u5B89\u88C5",children:"#"})]}),"\n","\n",(0,s.jsx)(i.PackageManagerTabs,{command:"add @modern-js/plugin-module-polyfill -D"}),"\n",(0,s.jsxs)(n.h3,{id:"\u6CE8\u518C\u63D2\u4EF6",children:["\u6CE8\u518C\u63D2\u4EF6",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u6CE8\u518C\u63D2\u4EF6",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"\u5728 Modern.js Module \u4E2D\uFF0C\u4F60\u53EF\u4EE5\u6309\u7167\u5982\u4E0B\u65B9\u5F0F\u6CE8\u518C\u63D2\u4EF6\uFF1A"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"import { moduleTools, defineConfig } from '@modern-js/module-tools';\nimport { modulePluginPolyfill } from '@modern-js/plugin-module-polyfill';\n\nexport default defineConfig({\n  plugins: [moduleTools(), modulePluginPolyfill()],\n});\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u4F60\u4E5F\u53EF\u4EE5\u901A\u8FC7 hooks \u914D\u7F6E\u6CE8\u518C\uFF0C\u4F8B\u5982\u4F60\u540C\u65F6\u5177\u6709\u591A\u4EFD\u6784\u5EFA\u914D\u7F6E\uFF0C\u5E76\u53EA\u9700\u8981\u5728 bundle \u6784\u5EFA\u65F6\u6CE8\u5165 polyfill\uFF1A"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"import { moduleTools, defineConfig } from '@modern-js/module-tools';\nimport { getPolyfillHook } from '@modern-js/plugin-module-polyfill';\n\nconst polyfillHook = getPolyfillHook();\n\nexport default defineConfig({\n  plugins: [moduleTools()],\n  buildConfig: [\n    {\n      buildType: 'bundle',\n      hooks: [polyfillHook],\n    },\n    {\n      buildType: 'bundleless',\n    },\n  ],\n});\n"})}),"\n",(0,s.jsxs)(n.h2,{id:"\u914D\u7F6E",children:["\u914D\u7F6E",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u914D\u7F6E",children:"#"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"\u7C7B\u578B\uFF1A"})}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"type options = {\n  targets?: Record<string, string> | string;\n};\n"})}),"\n",(0,s.jsxs)(n.h3,{id:"targets",children:["targets",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#targets",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["\u53C2\u8003 ",(0,s.jsx)(n.a,{href:"https://babeljs.io/docs/options#targets",target:"_blank",rel:"noopener noreferrer",children:"Babel target"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"\u4E0B\u9762\u662F\u4E00\u4E2A\u4F8B\u5B50\uFF1A"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"import { moduleTools, defineConfig } from '@modern-js/module-tools';\nimport { modulePluginPolyfill } from '@modern-js/plugin-module-polyfill';\n\nexport default defineConfig({\n  plugins: [\n    moduleTools(),\n    modulePluginPolyfill({\n      targets: '> 0.25%, not dead',\n    }),\n  ],\n});\n"})})]})}function d(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,o.useMDXComponents)(),e.components);return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(r,{...e})}):r(e)}n.default=d,d.__RSPRESS_PAGE_META={},d.__RSPRESS_PAGE_META["zh%2Fplugins%2Fofficial-list%2Fplugin-polyfill.mdx"]={toc:[{text:"\u5FEB\u901F\u5F00\u59CB",id:"\u5FEB\u901F\u5F00\u59CB",depth:2},{text:"\u5B89\u88C5",id:"\u5B89\u88C5",depth:3},{text:"\u6CE8\u518C\u63D2\u4EF6",id:"\u6CE8\u518C\u63D2\u4EF6",depth:3},{text:"\u914D\u7F6E",id:"\u914D\u7F6E",depth:2},{text:"targets",id:"targets",depth:3}],title:"Polyfill \u63D2\u4EF6",frontmatter:{}}}}]);