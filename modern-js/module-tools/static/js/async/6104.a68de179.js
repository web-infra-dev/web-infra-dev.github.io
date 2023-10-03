(self.webpackChunk_modern_js_module_tools_docs=self.webpackChunk_modern_js_module_tools_docs||[]).push([["6104"],{13504:function(e,l,n){"use strict";n.r(l),n.d(l,{default:function(){return a}});var d=n("15169"),i=n("43932"),s=n("9880"),r=n("23169"),o=n("19730");function c(e){var l=Object.assign({h1:"h1",a:"a",div:"div",p:"p",h2:"h2",h3:"h3",pre:"pre",code:"code",ul:"ul",li:"li",strong:"strong"},(0,r.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(l.h1,{id:"node-polyfill-\u63D2\u4EF6",children:["Node Polyfill \u63D2\u4EF6",(0,s.jsx)(l.a,{className:"header-anchor","aria-hidden":"true",href:"#node-polyfill-\u63D2\u4EF6",children:"#"})]}),"\n",(0,s.jsxs)(l.div,{className:"rspress-directive tip",children:[(0,s.jsx)(l.div,{className:"rspress-directive-title",children:"Node Polyfill \u4ECB\u7ECD"}),(0,s.jsx)(l.div,{className:"rspress-directive-content",children:(0,s.jsx)(l.p,{children:"\u901A\u5E38\u60C5\u51B5\u4E0B\uFF0C\u6211\u4EEC\u4E0D\u4F1A\u5728\u6D4F\u89C8\u5668\u7AEF\u4F7F\u7528 Node \u6A21\u5757\u3002\u4F46\u5728\u5F53\u524D\u4EE3\u7801\u9700\u8981\u540C\u65F6\u5728 Node \u7AEF\u548C\u6D4F\u89C8\u5668\u7AEF\u8FD0\u884C\u65F6\uFF0C\u7528\u5230\u4E00\u4E9B Node \u6A21\u5757\u662F\u6709\u53EF\u80FD\u7684\u3002Node Polyfill \u4E3A\u8FD9\u4E9B Node \u6A21\u5757\u63D0\u4F9B\u4E86\u6D4F\u89C8\u5668\u7248\u672C\u7684 polyfills\u3002"})})]}),"\n",(0,s.jsx)(l.p,{children:"\u901A\u8FC7\u4F7F\u7528 Node Polyfill \u63D2\u4EF6\uFF0C\u4F1A\u81EA\u52A8\u6CE8\u5165 Node \u6838\u5FC3\u6A21\u5757\u5728\u6D4F\u89C8\u5668\u7AEF\u7684 polyfills\uFF0C\u8BA9\u4F60\u53EF\u4EE5\u5728\u6D4F\u89C8\u5668\u7AEF\u653E\u5FC3\u4F7F\u7528\u8FD9\u4E9B\u6A21\u5757\u3002"}),"\n",(0,s.jsxs)(l.h2,{id:"\u5FEB\u901F\u5F00\u59CB",children:["\u5FEB\u901F\u5F00\u59CB",(0,s.jsx)(l.a,{className:"header-anchor","aria-hidden":"true",href:"#\u5FEB\u901F\u5F00\u59CB",children:"#"})]}),"\n",(0,s.jsxs)(l.h3,{id:"\u5B89\u88C5",children:["\u5B89\u88C5",(0,s.jsx)(l.a,{className:"header-anchor","aria-hidden":"true",href:"#\u5B89\u88C5",children:"#"})]}),"\n","\n",(0,s.jsx)(o.PackageManagerTabs,{command:"add @modern-js/plugin-module-node-polyfill -D"}),"\n",(0,s.jsxs)(l.h3,{id:"\u6CE8\u518C\u63D2\u4EF6",children:["\u6CE8\u518C\u63D2\u4EF6",(0,s.jsx)(l.a,{className:"header-anchor","aria-hidden":"true",href:"#\u6CE8\u518C\u63D2\u4EF6",children:"#"})]}),"\n",(0,s.jsx)(l.p,{children:"\u5728 Modern.js Module \u4E2D\uFF0C\u4F60\u53EF\u4EE5\u6309\u7167\u5982\u4E0B\u65B9\u5F0F\u6CE8\u518C\u63D2\u4EF6\uFF1A"}),"\n",(0,s.jsx)(l.pre,{children:(0,s.jsx)(l.code,{className:"language-ts",children:"import { moduleTools, defineConfig } from '@modern-js/module-tools';\nimport { modulePluginNodePolyfill } from '@modern-js/plugin-module-node-polyfill';\n\nexport default defineConfig({\n  plugins: [moduleTools(), modulePluginNodePolyfill()],\n});\n"})}),"\n",(0,s.jsxs)(l.h2,{id:"\u914D\u7F6E",children:["\u914D\u7F6E",(0,s.jsx)(l.a,{className:"header-anchor","aria-hidden":"true",href:"#\u914D\u7F6E",children:"#"})]}),"\n",(0,s.jsxs)(l.ul,{children:["\n",(0,s.jsx)(l.li,{children:(0,s.jsx)(l.strong,{children:"\u7C7B\u578B\uFF1A"})}),"\n"]}),"\n",(0,s.jsx)(l.pre,{children:(0,s.jsx)(l.code,{className:"language-ts",children:"type NodePolyfillOptions = {\n  exclude?: string[];\n  overrides?: Record<NodePolyfillKey, string>;\n};\n"})}),"\n",(0,s.jsxs)(l.h3,{id:"exclude",children:["exclude",(0,s.jsx)(l.a,{className:"header-anchor","aria-hidden":"true",href:"#exclude",children:"#"})]}),"\n",(0,s.jsx)(l.p,{children:"\u6392\u9664\u8981\u6CE8\u5165\u7684 Node Polyfill\u3002"}),"\n",(0,s.jsx)(l.pre,{children:(0,s.jsx)(l.code,{className:"language-ts",children:"import { moduleTools, defineConfig } from '@modern-js/module-tools';\nimport { modulePluginNodePolyfill } from '@modern-js/plugin-module-node-polyfill';\n\nexport default defineConfig({\n  plugins: [\n    moduleTools(),\n    modulePluginNodePolyfill({\n      exclude: ['console'],\n    }),\n  ],\n});\n"})}),"\n",(0,s.jsxs)(l.h3,{id:"overrides",children:["overrides",(0,s.jsx)(l.a,{className:"header-anchor","aria-hidden":"true",href:"#overrides",children:"#"})]}),"\n",(0,s.jsx)(l.p,{children:"\u8986\u76D6\u5185\u7F6E\u7684 Node Polyfill\u3002"}),"\n",(0,s.jsx)(l.pre,{children:(0,s.jsx)(l.code,{className:"language-ts",children:"import { moduleTools, defineConfig } from '@modern-js/module-tools';\nimport { modulePluginNodePolyfill } from '@modern-js/plugin-module-node-polyfill';\n\nexport default defineConfig({\n  plugins: [\n    moduleTools(),\n    modulePluginNodePolyfill({\n      overrides: {\n        fs: path.join(__dirname, './custom-fs.js'),\n      },\n    }),\n  ],\n});\n"})}),"\n",(0,s.jsxs)(l.h2,{id:"node-polyfills",children:["Node Polyfills",(0,s.jsx)(l.a,{className:"header-anchor","aria-hidden":"true",href:"#node-polyfills",children:"#"})]}),"\n",(0,s.jsxs)(l.h3,{id:"globals",children:["Globals",(0,s.jsx)(l.a,{className:"header-anchor","aria-hidden":"true",href:"#globals",children:"#"})]}),"\n",(0,s.jsxs)(l.ul,{children:["\n",(0,s.jsx)(l.li,{children:(0,s.jsx)(l.code,{children:"Buffer"})}),"\n",(0,s.jsx)(l.li,{children:(0,s.jsx)(l.code,{children:"process"})}),"\n",(0,s.jsx)(l.li,{children:(0,s.jsx)(l.code,{children:"console"})}),"\n"]}),"\n",(0,s.jsx)(l.p,{children:"\u5F53\u4F60\u5728\u4EE3\u7801\u4E2D\u4F7F\u7528\u4EE5\u4E0A\u5168\u5C40\u53D8\u91CF\u65F6\uFF0C\u5BF9\u5E94 polyfill \u4F1A\u88AB\u81EA\u52A8\u6CE8\u5165\u3002"}),"\n",(0,s.jsx)(l.pre,{children:(0,s.jsx)(l.code,{className:"language-ts",children:"const bufferData = Buffer.from('xxxx');\n"})}),"\n",(0,s.jsxs)(l.h3,{id:"modules",children:["Modules",(0,s.jsx)(l.a,{className:"header-anchor","aria-hidden":"true",href:"#modules",children:"#"})]}),"\n",(0,s.jsxs)(l.ul,{children:["\n",(0,s.jsx)(l.li,{children:(0,s.jsx)(l.code,{children:"assert"})}),"\n",(0,s.jsx)(l.li,{children:(0,s.jsx)(l.code,{children:"buffer"})}),"\n",(0,s.jsx)(l.li,{children:(0,s.jsx)(l.code,{children:"console"})}),"\n",(0,s.jsx)(l.li,{children:(0,s.jsx)(l.code,{children:"constants"})}),"\n",(0,s.jsx)(l.li,{children:(0,s.jsx)(l.code,{children:"crypto"})}),"\n",(0,s.jsx)(l.li,{children:(0,s.jsx)(l.code,{children:"domain"})}),"\n",(0,s.jsx)(l.li,{children:(0,s.jsx)(l.code,{children:"events"})}),"\n",(0,s.jsx)(l.li,{children:(0,s.jsx)(l.code,{children:"http"})}),"\n",(0,s.jsx)(l.li,{children:(0,s.jsx)(l.code,{children:"https"})}),"\n",(0,s.jsx)(l.li,{children:(0,s.jsx)(l.code,{children:"os"})}),"\n",(0,s.jsx)(l.li,{children:(0,s.jsx)(l.code,{children:"path"})}),"\n",(0,s.jsx)(l.li,{children:(0,s.jsx)(l.code,{children:"punycode"})}),"\n",(0,s.jsx)(l.li,{children:(0,s.jsx)(l.code,{children:"process"})}),"\n",(0,s.jsx)(l.li,{children:(0,s.jsx)(l.code,{children:"querystring"})}),"\n",(0,s.jsx)(l.li,{children:(0,s.jsx)(l.code,{children:"stream"})}),"\n",(0,s.jsx)(l.li,{children:(0,s.jsx)(l.code,{children:"_stream_duplex"})}),"\n",(0,s.jsx)(l.li,{children:(0,s.jsx)(l.code,{children:"_stream_passthrough"})}),"\n",(0,s.jsx)(l.li,{children:(0,s.jsx)(l.code,{children:"_stream_readable"})}),"\n",(0,s.jsx)(l.li,{children:(0,s.jsx)(l.code,{children:"_stream_transform"})}),"\n",(0,s.jsx)(l.li,{children:(0,s.jsx)(l.code,{children:"_stream_writable"})}),"\n",(0,s.jsx)(l.li,{children:(0,s.jsx)(l.code,{children:"string_decoder"})}),"\n",(0,s.jsx)(l.li,{children:(0,s.jsx)(l.code,{children:"sys"})}),"\n",(0,s.jsx)(l.li,{children:(0,s.jsx)(l.code,{children:"timers"})}),"\n",(0,s.jsx)(l.li,{children:(0,s.jsx)(l.code,{children:"tty"})}),"\n",(0,s.jsx)(l.li,{children:(0,s.jsx)(l.code,{children:"url"})}),"\n",(0,s.jsx)(l.li,{children:(0,s.jsx)(l.code,{children:"util"})}),"\n",(0,s.jsx)(l.li,{children:(0,s.jsx)(l.code,{children:"vm"})}),"\n",(0,s.jsx)(l.li,{children:(0,s.jsx)(l.code,{children:"zlib"})}),"\n"]}),"\n",(0,s.jsxs)(l.p,{children:["\u5F53\u4F60\u901A\u8FC7 ",(0,s.jsx)(l.code,{children:"require"})," \u6216 ",(0,s.jsx)(l.code,{children:"import"})," \u7B49\u8BED\u6CD5\u5728\u4EE3\u7801\u4E2D\u5F15\u7528\u4EE5\u4E0A\u6A21\u5757\u65F6\uFF0C\u5BF9\u5E94 polyfill \u4F1A\u88AB\u6CE8\u5165\u3002"]}),"\n",(0,s.jsx)(l.pre,{children:(0,s.jsx)(l.code,{className:"language-ts",children:"import { Buffer } from 'buffer';\n\nconst bufferData = Buffer.from('xxxx');\n"})}),"\n",(0,s.jsxs)(l.h3,{id:"fallbacks",children:["Fallbacks",(0,s.jsx)(l.a,{className:"header-anchor","aria-hidden":"true",href:"#fallbacks",children:"#"})]}),"\n",(0,s.jsxs)(l.ul,{children:["\n",(0,s.jsx)(l.li,{children:(0,s.jsx)(l.code,{children:"child_process"})}),"\n",(0,s.jsx)(l.li,{children:(0,s.jsx)(l.code,{children:"cluster"})}),"\n",(0,s.jsx)(l.li,{children:(0,s.jsx)(l.code,{children:"dgram"})}),"\n",(0,s.jsx)(l.li,{children:(0,s.jsx)(l.code,{children:"dns"})}),"\n",(0,s.jsx)(l.li,{children:(0,s.jsx)(l.code,{children:"fs"})}),"\n",(0,s.jsx)(l.li,{children:(0,s.jsx)(l.code,{children:"module"})}),"\n",(0,s.jsx)(l.li,{children:(0,s.jsx)(l.code,{children:"net"})}),"\n",(0,s.jsx)(l.li,{children:(0,s.jsx)(l.code,{children:"readline"})}),"\n",(0,s.jsx)(l.li,{children:(0,s.jsx)(l.code,{children:"repl"})}),"\n",(0,s.jsx)(l.li,{children:(0,s.jsx)(l.code,{children:"tls"})}),"\n"]}),"\n",(0,s.jsx)(l.p,{children:"\u76EE\u524D\u6D4F\u89C8\u5668\u7AEF\u6CA1\u6709\u4EE5\u4E0A\u6A21\u5757\u7684 polyfill\uFF0C\u56E0\u6B64\u5F53\u4F60\u5F15\u7528\u4EE5\u4E0A\u6A21\u5757\u65F6\uFF0C\u4F1A\u81EA\u52A8 fallback \u4E3A\u4E00\u4E2A\u7A7A\u5BF9\u8C61\u3002"}),"\n",(0,s.jsx)(l.pre,{children:(0,s.jsx)(l.code,{className:"language-ts",children:"import fs from 'fs';\n\nconsole.log(fs); // -> {}\n"})})]})}function h(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},l=Object.assign({},(0,r.useMDXComponents)(),e.components).wrapper;return l?(0,s.jsx)(l,(0,i._)((0,d._)({},e),{children:(0,s.jsx)(c,(0,d._)({},e))})):c(e)}var a=h;h.__RSPRESS_PAGE_META={},h.__RSPRESS_PAGE_META["zh%2Fplugins%2Fofficial-list%2Fplugin-node-polyfill.mdx"]={toc:[{text:"\u5FEB\u901F\u5F00\u59CB",id:"\u5FEB\u901F\u5F00\u59CB",depth:2},{text:"\u5B89\u88C5",id:"\u5B89\u88C5",depth:3},{text:"\u6CE8\u518C\u63D2\u4EF6",id:"\u6CE8\u518C\u63D2\u4EF6",depth:3},{text:"\u914D\u7F6E",id:"\u914D\u7F6E",depth:2},{text:"exclude",id:"exclude",depth:3},{text:"overrides",id:"overrides",depth:3},{text:"Node Polyfills",id:"node-polyfills",depth:2},{text:"Globals",id:"globals",depth:3},{text:"Modules",id:"modules",depth:3},{text:"Fallbacks",id:"fallbacks",depth:3}],title:"Node Polyfill \u63D2\u4EF6"}}}]);