(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["3293"],{70937:function(e,n,s){"use strict";s.r(n),s.d(n,{default:function(){return l}});var r=s("15169"),i=s("43932"),o=s("9880"),c=s("23169");function d(e){var n=Object.assign({p:"p",code:"code",pre:"pre"},(0,c.useMDXComponents)(),e.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:["\u9996\u5148\uFF0C\u4F60\u9700\u8981\u6267\u884C ",(0,o.jsx)(n.code,{children:"pnpm run new"})," \u542F\u7528 SWC \u7F16\u8BD1\uFF1A"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"? \u8BF7\u9009\u62E9\u4F60\u60F3\u8981\u7684\u64CD\u4F5C \u542F\u7528\u53EF\u9009\u529F\u80FD\n? \u8BF7\u9009\u62E9\u529F\u80FD\u540D\u79F0 \u542F\u7528\u300CSWC \u7F16\u8BD1\u300D\n"})}),"\n",(0,o.jsxs)(n.p,{children:["\u6267\u884C\u5B8C\u6210\u540E\uFF0C\u4F60\u53EA\u9700\u5728 ",(0,o.jsx)(n.code,{children:"modern.config.ts"})," \u6587\u4EF6\u4E2D\u6CE8\u518C Modern.js \u7684 SWC \u63D2\u4EF6\uFF0C\u5373\u53EF\u542F\u7528 SWC \u7F16\u8BD1\u548C\u538B\u7F29\u80FD\u529B\u3002"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import { appTools, defineConfig } from '@modern-js/app-tools';\nimport { swcPlugin } from '@modern-js/plugin-swc';\n\nexport default defineConfig({\n  plugins: [appTools(), swcPlugin()],\n});\n"})})]})}function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,c.useMDXComponents)(),e.components).wrapper;return n?(0,o.jsx)(n,(0,i._)((0,r._)({},e),{children:(0,o.jsx)(d,(0,r._)({},e))})):d(e)}var l=t;t.__RSPRESS_PAGE_META={},t.__RSPRESS_PAGE_META["..%2F..%2Fbuilder-doc%2Fdocs%2Fzh%2Fshared%2FenableSwc.md"]={toc:[],title:""}},51868:function(e,n,s){"use strict";s.r(n),s.d(n,{default:function(){return l}});var r=s("15169"),i=s("43932"),o=s("9880"),c=s("23169");function d(e){var n=Object.assign({p:"p",a:"a",code:"code"},(0,c.useMDXComponents)(),e.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"https://swc.rs/",target:"_blank",rel:"noopener noreferrer",children:"SWC"})," (Speedy Web Compiler) \u662F\u57FA\u4E8E ",(0,o.jsx)(n.code,{children:"Rust"})," \u8BED\u8A00\u7F16\u5199\u7684\u9AD8\u6027\u80FD JavaScript \u548C TypeScript \u8F6C\u8BD1\u548C\u538B\u7F29\u5DE5\u5177\u3002\u5728 Polyfill \u548C\u8BED\u6CD5\u964D\u7EA7\u65B9\u9762\u53EF\u4EE5\u548C Babel \u63D0\u4F9B\u4E00\u81F4\u7684\u80FD\u529B\uFF0C\u5E76\u4E14\u6027\u80FD\u6BD4 Babel \u9AD8\u51FA\u4E00\u4E2A\u6570\u91CF\u7EA7\u3002"]}),"\n",(0,o.jsx)(n.p,{children:"Modern.js Builder \u63D0\u4F9B\u4E86\u5F00\u7BB1\u5373\u7528\u7684 SWC \u63D2\u4EF6\uFF0C\u53EF\u4EE5\u4E3A\u4F60\u7684 Web \u5E94\u7528\u63D0\u4F9B\u8BED\u6CD5\u964D\u7EA7\u3001Polyfill \u4EE5\u53CA\u538B\u7F29\uFF0C\u5E76\u4E14\u79FB\u690D\u4E86\u4E00\u4E9B\u989D\u5916\u5E38\u89C1\u7684 Babel \u63D2\u4EF6\u3002"})]})}function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,c.useMDXComponents)(),e.components).wrapper;return n?(0,o.jsx)(n,(0,i._)((0,r._)({},e),{children:(0,o.jsx)(d,(0,r._)({},e))})):d(e)}var l=t;t.__RSPRESS_PAGE_META={},t.__RSPRESS_PAGE_META["..%2F..%2Fbuilder-doc%2Fdocs%2Fzh%2Fshared%2Fswc.md"]={toc:[],title:""}},23967:function(e,n,s){"use strict";s.r(n),s.d(n,{default:function(){return h},frontmatter:function(){return p}});var r=s("15169"),i=s("43932"),o=s("9880"),c=s("23169"),d=s("51868"),t=s("70937");function l(e){var n=Object.assign({h1:"h1",a:"a",ul:"ul",li:"li",strong:"strong",code:"code",h2:"h2",div:"div",p:"p",pre:"pre"},(0,c.useMDXComponents)(),e.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.h1,{id:"toolsswc",children:["tools.swc",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#toolsswc",children:"#"})]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"\u7C7B\u578B\uFF1A"})," ",(0,o.jsx)(n.code,{children:"Object | Function"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"\u9ED8\u8BA4\u503C\uFF1A"})," ",(0,o.jsx)(n.code,{children:"undefined"})]}),"\n"]}),"\n",(0,o.jsxs)(n.h2,{id:"\u4ECB\u7ECD",children:["\u4ECB\u7ECD",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u4ECB\u7ECD",children:"#"})]}),"\n","\n",(0,o.jsx)(d.default,{}),"\n",(0,o.jsxs)(n.div,{className:"rspress-directive tip",children:[(0,o.jsx)(n.div,{className:"rspress-directive-title",children:"TIP"}),(0,o.jsxs)(n.div,{className:"rspress-directive-content",children:[(0,o.jsx)(n.p,{children:"\u5728\u4F7F\u7528 Rspack \u4F5C\u4E3A\u6253\u5305\u5DE5\u5177\u65F6\uFF0C\u9ED8\u8BA4\u4F1A\u4F7F\u7528 SWC \u8FDB\u884C\u8F6C\u8BD1\u548C\u538B\u7F29\uFF0C\u56E0\u6B64\u4F60\u4E0D\u9700\u8981\u518D\u5B89\u88C5\u548C\u914D\u7F6E SWC \u63D2\u4EF6\u3002"}),"\n",(0,o.jsx)(n.p,{children:"\u5982\u679C\u4F60\u4F7F\u7528 Rspack \u65F6\u914D\u7F6E\u4E86\u5F53\u524D\u7684 SWC \u63D2\u4EF6\uFF0C\u5B83\u5C06\u4E0D\u4F1A\u4EA7\u751F\u4EFB\u4F55\u6548\u679C\u3002\n"})]})]}),"\n",(0,o.jsxs)(n.h2,{id:"\u5B89\u88C5",children:["\u5B89\u88C5",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u5B89\u88C5",children:"#"})]}),"\n","\n",(0,o.jsx)(t.default,{}),"\n",(0,o.jsxs)(n.h2,{id:"\u914D\u7F6E\u9879",children:["\u914D\u7F6E\u9879",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u914D\u7F6E\u9879",children:"#"})]}),"\n",(0,o.jsxs)(n.p,{children:["\u4F60\u53EF\u4EE5\u901A\u8FC7 ",(0,o.jsx)(n.code,{children:"tools.swc"})," \u914D\u7F6E\u9879\u6765\u8BBE\u7F6E SWC \u7F16\u8BD1\u884C\u4E3A\u3002"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",meta:'title="modern.config.ts"',children:"import { defineConfig } from '@modern-js/app-tools';\n\nexport default defineConfig({\n  tools: {\n    swc: {\n      jsMinify: {\n        compress: {},\n        mangle: true,\n      },\n    },\n  },\n});\n"})}),"\n",(0,o.jsx)(n.p,{children:"\u5F53\u7136\u4E5F\u53EF\u4EE5\u4F7F\u7528\u51FD\u6570\u8FDB\u884C\u66F4\u7075\u6D3B\u7684\u914D\u7F6E\uFF0C\u6216\u8005\u4FEE\u6539\u67D0\u4E9B\u9ED8\u8BA4\u914D\u7F6E\u3002"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",meta:'title="modern.config.ts"',children:"import { defineConfig } from '@modern-js/app-tools';\n\nexport default defineConfig({\n  tools: {\n    swc(config, { setConfig }) {\n      // \u7528\u4E8E mobx \u4E2D decorator \u7F16\u8BD1\n      setConfig(config, 'jsc.transform.useDefineForClassFields', true);\n    },\n  },\n});\n"})}),"\n",(0,o.jsxs)(n.p,{children:["\u5B8C\u6574\u914D\u7F6E\u9879\u8BF7\u53C2\u8003 ",(0,o.jsx)(n.a,{href:"https://modernjs.dev/builder/plugins/plugin-swc.html#%E9%85%8D%E7%BD%AE",target:"_blank",rel:"noopener noreferrer",children:"Modern.js Builder - SWC \u63D2\u4EF6\u914D\u7F6E"}),"\u3002"]})]})}function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,c.useMDXComponents)(),e.components).wrapper;return n?(0,o.jsx)(n,(0,i._)((0,r._)({},e),{children:(0,o.jsx)(l,(0,r._)({},e))})):l(e)}var h=a;a.__RSPRESS_PAGE_META={},a.__RSPRESS_PAGE_META["zh%2Fconfigure%2Fapp%2Ftools%2Fswc.mdx"]={toc:[{text:"\u4ECB\u7ECD",id:"\u4ECB\u7ECD",depth:2},{text:"\u5B89\u88C5",id:"\u5B89\u88C5",depth:2},{text:"\u914D\u7F6E\u9879",id:"\u914D\u7F6E\u9879",depth:2}],title:"tools.swc"};var p={sidebar_label:"swc"}}}]);