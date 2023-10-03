(self.webpackChunk_modern_js_module_tools_docs=self.webpackChunk_modern_js_module_tools_docs||[]).push([["7982"],{98801:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return c}});var s=r("15169"),o=r("43932"),l=r("9880"),i=r("23169"),d=r("19730");function t(e){var n=Object.assign({h1:"h1",a:"a",p:"p",div:"div",code:"code",h2:"h2",h3:"h3",pre:"pre",ul:"ul",li:"li",strong:"strong"},(0,i.useMDXComponents)(),e.components);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(n.h1,{id:"import-\u63D2\u4EF6",children:["Import \u63D2\u4EF6",(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#import-\u63D2\u4EF6",children:"#"})]}),"\n",(0,l.jsxs)(n.p,{children:["\u63D0\u4F9B\u4E0E ",(0,l.jsx)(n.a,{href:"https://github.com/umijs/babel-plugin-import",target:"_blank",rel:"noopener noreferrer",children:"babel-plugin-import"})," \u7B49\u4EF7\u7684\u80FD\u529B\u548C\u914D\u7F6E\uFF0C\u57FA\u4E8E ",(0,l.jsx)(n.a,{href:"https://swc.rs/",target:"_blank",rel:"noopener noreferrer",children:"SWC"})," \u5B9E\u73B0\u3002"]}),"\n",(0,l.jsxs)(n.div,{className:"rspress-directive tip",children:[(0,l.jsx)(n.div,{className:"rspress-directive-title",children:"TIP"}),(0,l.jsx)(n.div,{className:"rspress-directive-content",children:(0,l.jsxs)(n.p,{children:["\u4ECE ",(0,l.jsx)(n.code,{children:"@modern-js/module-tools"})," v2.16.0 \u7248\u672C\u5F00\u59CB\uFF0C\u8BE5\u63D2\u4EF6\u529F\u80FD\u5185\u7F6E\u5728 Modern.js Module \u4E2D\uFF0C\u7531 ",(0,l.jsx)(n.a,{href:"/api/config/build-config#transformimport",children:(0,l.jsx)(n.code,{children:"transformImport"})}),"\n\u914D\u7F6E\u63D0\u4F9B\u3002\n"]})})]}),"\n",(0,l.jsxs)(n.h2,{id:"\u5FEB\u901F\u5F00\u59CB",children:["\u5FEB\u901F\u5F00\u59CB",(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u5FEB\u901F\u5F00\u59CB",children:"#"})]}),"\n",(0,l.jsxs)(n.h3,{id:"\u5B89\u88C5",children:["\u5B89\u88C5",(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u5B89\u88C5",children:"#"})]}),"\n","\n",(0,l.jsx)(d.PackageManagerTabs,{command:"add @modern-js/plugin-module-import -D"}),"\n",(0,l.jsxs)(n.h3,{id:"\u6CE8\u518C\u63D2\u4EF6",children:["\u6CE8\u518C\u63D2\u4EF6",(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u6CE8\u518C\u63D2\u4EF6",children:"#"})]}),"\n",(0,l.jsx)(n.p,{children:"\u5728 Modern.js Module \u4E2D\uFF0C\u4F60\u53EF\u4EE5\u6309\u7167\u5982\u4E0B\u65B9\u5F0F\u6CE8\u518C\u63D2\u4EF6\uFF1A"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-ts",children:"import { moduleTools, defineConfig } from '@modern-js/module-tools';\nimport { modulePluginImport } from '@modern-js/plugin-module-import';\n\nexport default defineConfig({\n  plugins: [\n    moduleTools(),\n    modulePluginImport({\n      pluginImport: [\n        {\n          libraryName: 'antd',\n          style: true,\n        },\n      ],\n    }),\n  ],\n});\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u8FD9\u6837\u6211\u4EEC\u5C31\u53EF\u4EE5\u5728 Modern.js Module \u4E2D\u4F7F\u7528\u81EA\u52A8\u5BFC\u5165\u7684\u80FD\u529B\u4E86\u3002"}),"\n",(0,l.jsxs)(n.h2,{id:"\u914D\u7F6E",children:["\u914D\u7F6E",(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u914D\u7F6E",children:"#"})]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.strong,{children:"\u7C7B\u578B\uFF1A"})}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-ts",children:"type Options = {\n  pluginImport?: ImportItem[];\n};\n"})}),"\n",(0,l.jsxs)(n.h3,{id:"pluginimport",children:["pluginImport",(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#pluginimport",children:"#"})]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\u7C7B\u578B\uFF1A",(0,l.jsx)(n.code,{children:"object[]"})]}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:["\u5176\u4E2D\u6570\u7EC4\u5143\u7D20\u4E3A\u4E00\u4E2A babel-plugin-import \u7684\u914D\u7F6E\u5BF9\u8C61\u3002\u914D\u7F6E\u5BF9\u8C61\u53EF\u4EE5\u53C2\u8003 ",(0,l.jsx)(n.a,{href:"https://github.com/umijs/babel-plugin-import#options",target:"_blank",rel:"noopener noreferrer",children:"options"}),"\u3002"]}),"\n",(0,l.jsx)(n.p,{children:"\u4F7F\u7528\u793A\u4F8B\uFF1A"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-ts",children:"import { modulePluginImport } from '@modern-js/plugin-module-import';\nimport { moduleTools, defineConfig } from '@modern-js/module-tools';\n\nexport default defineConfig({\n  plugins: [\n    moduleTools(),\n    modulePluginImport({\n      pluginImport: [\n        // babel-plugin-import \u7684 options \u914D\u7F6E\n        {\n          libraryName: 'foo',\n          style: true,\n        },\n      ],\n    }),\n  ],\n});\n"})}),"\n",(0,l.jsxs)(n.h2,{id:"\u6CE8\u610F\u4E8B\u9879",children:["\u6CE8\u610F\u4E8B\u9879",(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u6CE8\u610F\u4E8B\u9879",children:"#"})]}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.a,{href:"https://swc.rs/",target:"_blank",rel:"noopener noreferrer",children:"SWC"})," (Speedy Web Compiler) \u662F\u57FA\u4E8E Rust \u8BED\u8A00\u7F16\u5199\u7684\uFF0C\u800C\u8BE5\u63D2\u4EF6\u662F\u57FA\u4E8E SWC\uFF0C\u79FB\u690D\u81EA ",(0,l.jsx)(n.a,{href:"https://github.com/umijs/babel-plugin-import",target:"_blank",rel:"noopener noreferrer",children:"babel-plugin-import"}),"\uFF0C\u914D\u7F6E\u9009\u9879\u4FDD\u6301\u4E86\u4E00\u81F4\u3002"]}),"\n",(0,l.jsxs)(n.p,{children:["\u4E00\u4E9B\u914D\u7F6E\u53EF\u4EE5\u4F20\u5165\u51FD\u6570\uFF0C\u4F8B\u5982 ",(0,l.jsx)(n.code,{children:"customName"}),"\uFF0C",(0,l.jsx)(n.code,{children:"customStyleName"})," \u7B49\uFF0C\u8FD9\u4E9B JavaScript \u51FD\u6570\u4F1A\u7531 Rust \u901A\u8FC7 Node-API \u8C03\u7528\uFF0C\u8FD9\u79CD\u8C03\u7528\u4F1A\u9020\u6210\u4E00\u4E9B\u6027\u80FD\u52A3\u5316\u3002"]}),"\n",(0,l.jsxs)(n.p,{children:["\u7B80\u5355\u7684\u51FD\u6570\u903B\u8F91\u5176\u5B9E\u53EF\u4EE5\u901A\u8FC7\u6A21\u7248\u8BED\u8A00\u6765\u4EE3\u66FF\uFF0C\u56E0\u6B64 ",(0,l.jsx)(n.code,{children:"customName"}),"\uFF0C",(0,l.jsx)(n.code,{children:"customStyleName"})," \u7B49\u8FD9\u4E9B\u914D\u7F6E\u9664\u4E86\u53EF\u4EE5\u4F20\u5165\u51FD\u6570\uFF0C\u4E5F\u53EF\u4EE5\u4F20\u5165\u5B57\u7B26\u4E32\u4F5C\u4E3A\u6A21\u7248\u6765\u4EE3\u66FF\u51FD\u6570\uFF0C\u63D0\u9AD8\u6027\u80FD\u3002"]}),"\n",(0,l.jsx)(n.p,{children:"\u6211\u4EEC\u4EE5\u8FD9\u6BB5\u4EE3\u7801\u4F5C\u4E3A\u793A\u4F8B\uFF1A"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-ts",children:"import { MyButton as Btn } from 'foo';\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u6DFB\u52A0\u4EE5\u4E0B\u914D\u7F6E\uFF1A"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-ts",children:"modulePluginImport({\n  pluginImport: [\n    {\n      libraryName: 'foo',\n      customName: 'foo/es/{{ member }}',\n    },\n  ],\n});\n"})}),"\n",(0,l.jsxs)(n.p,{children:["\u5176\u4E2D\u7684 ",(0,l.jsx)(n.code,{children:"{{ member }}"})," \u4F1A\u88AB\u66FF\u6362\u4E3A\u76F8\u5E94\u7684\u5F15\u5165\u6210\u5458\uFF0C\u8F6C\u6362\u540E:"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-ts",children:"import Btn from 'foo/es/MyButton';\n"})}),"\n",(0,l.jsxs)(n.p,{children:["\u53EF\u4EE5\u770B\u51FA\u914D\u7F6E ",(0,l.jsx)(n.code,{children:'customName: "foo/es/{{ member }}"'})," \u7684\u6548\u679C\u7B49\u540C\u4E8E\u914D\u7F6E ",(0,l.jsx)(n.code,{children:" customName: (member) => `foo/es/${member}`  "})," \uFF0C\u4F46\u662F\u4E0D\u4F1A\u6709 Node-API \u7684\u8C03\u7528\u5F00\u9500\u3002"]}),"\n",(0,l.jsxs)(n.p,{children:["\u8FD9\u91CC\u4F7F\u7528\u5230\u7684\u6A21\u7248\u662F ",(0,l.jsx)(n.a,{href:"https://handlebarsjs.com",target:"_blank",rel:"noopener noreferrer",children:"handlebars"}),"\uFF0C\u6A21\u7248\u914D\u7F6E\u4E2D\u8FD8\u5185\u7F6E\u4E86\u4E00\u4E9B\u6709\u7528\u7684\u8F85\u52A9\u5DE5\u5177\uFF0C\u8FD8\u662F\u4EE5\u4E0A\u9762\u7684\u5BFC\u5165\u8BED\u53E5\u4E3A\u4F8B\uFF0C\u914D\u7F6E\u6210\uFF1A"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-ts",children:"import { modulePluginImport } from '@modern-js/plugin-module-import';\nimport { moduleTools, defineConfig } from '@modern-js/module-tools';\n\nexport default defineConfig({\n  plugins: [\n    moduleTools(),\n    modulePluginImport({\n      pluginImport: [\n        {\n          libraryName: 'foo',\n          customName: 'foo/es/{{ kebabCase member }}',\n        },\n      ],\n    }),\n  ],\n});\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u4F1A\u8F6C\u6362\u6210\u4E0B\u9762\u7684\u7ED3\u679C\uFF1A"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-ts",children:"import Btn from 'foo/es/my-button';\n"})}),"\n",(0,l.jsxs)(n.p,{children:["\u9664\u4E86 ",(0,l.jsx)(n.code,{children:"kebabCase"})," \u4EE5\u5916\u8FD8\u6709 ",(0,l.jsx)(n.code,{children:"camelCase"}),"\uFF0C",(0,l.jsx)(n.code,{children:"snakeCase"}),"\uFF0C",(0,l.jsx)(n.code,{children:"upperCase"}),"\uFF0C",(0,l.jsx)(n.code,{children:"lowerCase"})," \u53EF\u4EE5\u4F7F\u7528\u3002"]})]})}function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,i.useMDXComponents)(),e.components).wrapper;return n?(0,l.jsx)(n,(0,o._)((0,s._)({},e),{children:(0,l.jsx)(t,(0,s._)({},e))})):t(e)}var c=a;a.__RSPRESS_PAGE_META={},a.__RSPRESS_PAGE_META["zh%2Fplugins%2Fofficial-list%2Fplugin-import.mdx"]={toc:[{text:"\u5FEB\u901F\u5F00\u59CB",id:"\u5FEB\u901F\u5F00\u59CB",depth:2},{text:"\u5B89\u88C5",id:"\u5B89\u88C5",depth:3},{text:"\u6CE8\u518C\u63D2\u4EF6",id:"\u6CE8\u518C\u63D2\u4EF6",depth:3},{text:"\u914D\u7F6E",id:"\u914D\u7F6E",depth:2},{text:"pluginImport",id:"pluginimport",depth:3},{text:"\u6CE8\u610F\u4E8B\u9879",id:"\u6CE8\u610F\u4E8B\u9879",depth:2}],title:"Import \u63D2\u4EF6"}}}]);