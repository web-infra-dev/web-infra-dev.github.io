(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_configure_app_source_alias-strategy_mdx"],{68451:function(e,n,s){"use strict";s.r(n),s.d(n,{default:function(){return d}});var r,c=s("15169"),i=s("43932"),a=s("9880"),l=s("23169");function o(e){var n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",h3:"h3",a:"a",pre:"pre"},(0,l.useMDXComponents)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"\u7C7B\u578B\uFF1A"})," ",(0,a.jsx)(n.code,{children:"'prefer-tsconfig' | 'prefer-alias'"})]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"\u9ED8\u8BA4\u503C\uFF1A"})," ",(0,a.jsx)(n.code,{children:"'prefer-tsconfig'"})]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"source.aliasStrategy"})," \u7528\u4E8E\u63A7\u5236 ",(0,a.jsx)(n.code,{children:"tsconfig.json"})," \u4E2D\u7684 ",(0,a.jsx)(n.code,{children:"paths"})," \u9009\u9879\u4E0E\u6253\u5305\u5DE5\u5177\u7684 ",(0,a.jsx)(n.code,{children:"alias"})," \u9009\u9879\u7684\u4F18\u5148\u7EA7\u3002"]}),"\n",(0,a.jsxs)(n.h3,{id:"prefer-tsconfig",children:["prefer-tsconfig",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#prefer-tsconfig",children:"#"})]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"source.aliasStrategy"})," \u9ED8\u8BA4\u4E3A ",(0,a.jsx)(n.code,{children:"'prefer-tsconfig'"}),"\uFF0C\u6B64\u65F6 ",(0,a.jsx)(n.code,{children:"tsconfig.json"})," \u4E2D\u7684 ",(0,a.jsx)(n.code,{children:"paths"})," \u9009\u9879\u548C\u6253\u5305\u5DE5\u5177\u7684 ",(0,a.jsx)(n.code,{children:"alias"})," \u9009\u9879\u90FD\u4F1A\u751F\u6548\uFF0C\u4F46 tsconfig paths \u9009\u9879\u7684\u4F18\u5148\u7EA7\u66F4\u9AD8\u3002"]}),"\n",(0,a.jsx)(n.p,{children:"\u6BD4\u5982\u540C\u65F6\u914D\u7F6E\u4EE5\u4E0B\u5185\u5BB9\uFF1A"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"tsconfig paths:"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",meta:'title="tsconfig.json"',children:'{\n  "compilerOptions": {\n    "paths": {\n      "@common/*": ["./src/common-1/*"]\n    }\n  }\n}\n'})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"source.alias"}),":"]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"export default {\n  source: {\n    alias: {\n      '@common': './src/common-2',\n      '@utils': './src/utils',\n    },\n  },\n};\n"})}),"\n",(0,a.jsx)(n.p,{children:"\u7531\u4E8E tsconfig paths \u7684\u4F18\u5148\u7EA7\u66F4\u9AD8\uFF0C\u6240\u4EE5\uFF1A"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"@common"})," \u4F1A\u4F7F\u7528 tsconfig paths \u5B9A\u4E49\u7684\u503C\uFF0C\u6307\u5411 ",(0,a.jsx)(n.code,{children:"./src/common-1"})]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"@utils"})," \u4F1A\u4F7F\u7528 ",(0,a.jsx)(n.code,{children:"source.alias"})," \u5B9A\u4E49\u7684\u503C\uFF0C\u6307\u5411 ",(0,a.jsx)(n.code,{children:"./src/utils"})]}),"\n"]}),"\n",(0,a.jsxs)(n.h3,{id:"prefer-alias",children:["prefer-alias",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#prefer-alias",children:"#"})]}),"\n",(0,a.jsxs)(n.p,{children:["\u5F53 ",(0,a.jsx)(n.code,{children:"source.aliasStrategy"})," \u7684\u503C\u4E3A ",(0,a.jsx)(n.code,{children:"prefer-alias"})," \u65F6\uFF0C",(0,a.jsx)(n.code,{children:"tsconfig.json"})," \u4E2D\u7684 ",(0,a.jsx)(n.code,{children:"paths"})," \u9009\u9879\u53EA\u7528\u4E8E\u63D0\u4F9B TypeScript \u7C7B\u578B\u5B9A\u4E49\uFF0C\u800C\u4E0D\u4F1A\u5BF9\u6253\u5305\u7ED3\u679C\u4EA7\u751F\u4EFB\u4F55\u5F71\u54CD\u3002\u6B64\u65F6\uFF0C\u6784\u5EFA\u5DE5\u5177\u53EA\u4F1A\u8BFB\u53D6 ",(0,a.jsx)(n.code,{children:"alias"})," \u9009\u9879\u4F5C\u4E3A\u8DEF\u5F84\u522B\u540D\u3002"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"export default {\n  source: {\n    aliasStrategy: 'prefer-alias',\n  },\n};\n"})}),"\n",(0,a.jsx)(n.p,{children:"\u6BD4\u5982\u540C\u65F6\u914D\u7F6E\u4EE5\u4E0B\u5185\u5BB9\uFF1A"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"tsconfig paths:"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",meta:'title="tsconfig.json"',children:'{\n  "compilerOptions": {\n    "paths": {\n      "@common/*": ["./src/common-1/*"],\n      "@utils/*": ["./src/utils/*"]\n    }\n  }\n}\n'})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"source.alias"}),":"]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"export default {\n  source: {\n    alias: {\n      '@common': './src/common-2',\n    },\n  },\n};\n"})}),"\n",(0,a.jsxs)(n.p,{children:["\u7531\u4E8E tsconfig paths \u53EA\u7528\u4E8E\u63D0\u4F9B\u7C7B\u578B\uFF0C\u6240\u4EE5\u6700\u7EC8\u53EA\u6709 ",(0,a.jsx)(n.code,{children:"@common"})," \u522B\u540D\u751F\u6548\uFF0C\u5E76\u6307\u5411 ",(0,a.jsx)(n.code,{children:"./src/common-2"})," \u76EE\u5F55\u3002"]}),"\n",(0,a.jsxs)(n.p,{children:["\u5927\u90E8\u5206\u60C5\u51B5\u4E0B\u4F60\u4E0D\u9700\u8981\u4F7F\u7528 ",(0,a.jsx)(n.code,{children:"prefer-alias"}),"\uFF0C\u4F46\u5F53\u4F60\u9700\u8981\u52A8\u6001\u751F\u6210\u4E00\u4E9B\u522B\u540D\u914D\u7F6E\u65F6\uFF0C\u53EF\u4EE5\u8003\u8651\u4F7F\u7528\u5B83\u3002\u6BD4\u5982\uFF0C\u57FA\u4E8E\u73AF\u5883\u53D8\u91CF\u6765\u751F\u6210 ",(0,a.jsx)(n.code,{children:"alias"})," \u9009\u9879\uFF1A"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"export default {\n  source: {\n    alias: {\n      '@common':\n        process.env.NODE_ENV === 'production'\n          ? './src/common-prod'\n          : './src/common-dev',\n    },\n  },\n};\n"})})]})}(r=globalThis).__RSPRESS_PAGE_META||(r.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["..%2F..%2Fbuilder-doc%2Fdocs%2Fzh%2Fconfig%2Fsource%2FaliasStrategy.md"]={toc:[{text:"prefer-tsconfig",id:"prefer-tsconfig",depth:3},{text:"prefer-alias",id:"prefer-alias",depth:3}],title:"",frontmatter:{}};var d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,l.useMDXComponents)(),e.components).wrapper;return n?(0,a.jsx)(n,(0,i._)((0,c._)({},e),{children:(0,a.jsx)(o,(0,c._)({},e))})):o(e)}},38454:function(e,n,s){"use strict";s.r(n),s.d(n,{default:function(){return t}});var r,c=s("15169"),i=s("43932"),a=s("9880"),l=s("23169"),o=s("68451");function d(e){var n=Object.assign({h1:"h1",a:"a",div:"div",p:"p"},(0,l.useMDXComponents)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.h1,{id:"sourcealiasstrategy",children:["source.aliasStrategy",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#sourcealiasstrategy",children:"#"})]}),"\n",(0,a.jsxs)(n.div,{className:"modern-directive tip",children:[(0,a.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,a.jsx)(n.div,{className:"modern-directive-content",children:(0,a.jsxs)(n.p,{children:["\u8BE5\u914D\u7F6E\u7531 Modern.js Builder \u63D0\u4F9B\uFF0C\u66F4\u591A\u4FE1\u606F\u53EF\u53C2\u8003 ",(0,a.jsx)(n.a,{href:"https://modernjs.dev/builder/api/config-source.html#sourcealiasstrategy",target:"_blank",rel:"noopener noreferrer",children:"source.aliasStrategy"}),"\u3002\n"]})})]}),"\n","\n",(0,a.jsx)(o.default,{})]})}(r=globalThis).__RSPRESS_PAGE_META||(r.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["zh%2Fconfigure%2Fapp%2Fsource%2Falias-strategy.mdx"]={toc:[],title:"source.aliasStrategy",frontmatter:{sidebar_label:"aliasStrategy"}};var t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,l.useMDXComponents)(),e.components).wrapper;return n?(0,a.jsx)(n,(0,i._)((0,c._)({},e),{children:(0,a.jsx)(d,(0,c._)({},e))})):d(e)}}}]);