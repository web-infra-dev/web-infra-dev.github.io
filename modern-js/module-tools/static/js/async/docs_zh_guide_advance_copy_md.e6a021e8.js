(self.webpackChunk_modern_js_module_tools_docs=self.webpackChunk_modern_js_module_tools_docs||[]).push([["docs_zh_guide_advance_copy_md"],{15676:function(n,e,r){"use strict";r.r(e),r.d(e,{default:function(){return l}});var i,o=r("15169"),d=r("43932"),t=r("9880"),s=r("23169");function c(n){var e=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",code:"code",ul:"ul",li:"li",pre:"pre",blockquote:"blockquote",h3:"h3"},(0,s.useMDXComponents)(),n.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(e.h1,{id:"\u4F7F\u7528-copy-\u5DE5\u5177",children:["\u4F7F\u7528 Copy \u5DE5\u5177",(0,t.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#\u4F7F\u7528-copy-\u5DE5\u5177",children:"#"})]}),"\n",(0,t.jsx)(e.p,{children:"\u6A21\u5757\u5DE5\u7A0B\u63D0\u4F9B\u4E86 Copy \u5DE5\u5177\u7528\u4E8E\u5C06\u5DF2\u7ECF\u5B58\u5728\u7684\u5355\u4E2A\u6587\u4EF6\u6216\u6574\u4E2A\u76EE\u5F55\u590D\u5236\u5230\u4EA7\u7269\u76EE\u5F55\u4E2D\u3002\u63A5\u4E0B\u6765\u6211\u4EEC\u5B66\u4E60\u5982\u4F55\u4F7F\u7528\u5B83\u3002"}),"\n",(0,t.jsxs)(e.h2,{id:"\u4E86\u89E3-copy-api",children:["\u4E86\u89E3 Copy API",(0,t.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#\u4E86\u89E3-copy-api",children:"#"})]}),"\n",(0,t.jsxs)(e.p,{children:["\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7 ",(0,t.jsx)(e.a,{href:"/api/config/build-config#copy",children:(0,t.jsx)(e.code,{children:"buildConfig.copy"})})," API \u6765\u4F7F\u7528 Copy \u5DE5\u5177\uFF0C\u5B83\u5305\u542B\u4EE5\u4E0B\u4E24\u4E2A\u4E3B\u8981\u914D\u7F6E\uFF1A"]}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.a,{href:"/api/config/build-config#copypatterns",children:(0,t.jsx)(e.code,{children:"patterns"})})}),"\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.a,{href:"/api/config/build-config#copyoptions",children:(0,t.jsx)(e.code,{children:"options"})})}),"\n"]}),"\n",(0,t.jsxs)(e.h2,{id:"api-\u8BE6\u89E3",children:["API \u8BE6\u89E3",(0,t.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#api-\u8BE6\u89E3",children:"#"})]}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.code,{children:"copy.patterns"})," \u7528\u4E8E\u5BFB\u627E\u590D\u5236\u7684\u6587\u4EF6\u4EE5\u53CA\u914D\u7F6E\u8F93\u51FA\u7684\u8DEF\u5F84\u3002"]}),"\n",(0,t.jsxs)(e.p,{children:["\u5176\u4E2D ",(0,t.jsx)(e.code,{children:"patterns.from"})," \u7528\u4E8E\u6307\u5B9A\u8981\u590D\u5236\u7684\u6587\u4EF6\u6216\u8005\u76EE\u5F55\u3002\u5B83\u63A5\u6536 Glob \u5F62\u5F0F\u5B57\u7B26\u4E32\u6216\u5177\u4F53\u8DEF\u5F84\u3002Glob \u5F62\u5F0F\u5B57\u7B26\u4E32\u662F\u6307 ",(0,t.jsx)(e.a,{href:"https://github.com/mrmlnc/fast-glob#pattern-syntax",target:"_blank",rel:"noopener noreferrer",children:"fast-glob pattern-syntax"}),"\u3002\u56E0\u6B64\u6211\u4EEC\u53EF\u4EE5\u6309\u7167\u5982\u4E0B\u4E24\u79CD\u65B9\u5F0F\u4F7F\u7528\u5B83\uFF1A"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-ts",children:"export default defineConfig({\n  buildConfig: {\n    copy: {\n      patterns: [\n        { from: './index.html', to: '' },\n        { from: './*.html', to: '' },\n      ],\n    },\n  },\n});\n"})}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.code,{children:"patterns.context"})," \u4E00\u822C\u548C ",(0,t.jsx)(e.code,{children:"patterns.from"})," \u914D\u5408\u4F7F\u7528\uFF0C\u9ED8\u8BA4\u60C5\u51B5\u4E0B\u5B83\u7684\u503C\u4E0E ",(0,t.jsx)(e.a,{href:"/api/config/build-config#sourcedir",children:(0,t.jsx)(e.code,{children:"buildConfig.sourceDir"})})," \u76F8\u540C\uFF0C\u56E0\u6B64\u6211\u4EEC\u53EF\u4EE5\u6309\u7167\u5982\u4E0B\u65B9\u5F0F\u6307\u5B9A ",(0,t.jsx)(e.code,{children:"src/data.json"})," \u6587\u4EF6\u4E3A\u8981\u590D\u5236\u7684\u6587\u4EF6\uFF1A"]}),"\n",(0,t.jsxs)(e.blockquote,{children:["\n",(0,t.jsxs)(e.p,{children:["\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C",(0,t.jsx)(e.code,{children:"buildConfig.sourceDir"})," \u4E3A ",(0,t.jsx)(e.code,{children:"src"})]}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-ts",children:"export default defineConfig({\n  buildConfig: {\n    copy: {\n      patterns: [\n        { from: './data.json' to: ''},\n      ],\n    },\n  },\n});\n"})}),"\n",(0,t.jsxs)(e.p,{children:["\u5F53\u6307\u5B9A\u7684\u6587\u4EF6\u4E0D\u5728\u6E90\u7801\u76EE\u5F55\u7684\u65F6\u5019\uFF0C\u53EF\u4EE5\u4FEE\u6539 ",(0,t.jsx)(e.code,{children:"context"})," \u914D\u7F6E\u3002\u4F8B\u5982\u6307\u5B9A\u9879\u76EE\u76EE\u5F55\u4E0B\u7684 ",(0,t.jsx)(e.code,{children:"temp/index.html"})," \u4E3A\u8981\u590D\u5236\u7684\u6587\u4EF6\uFF1A"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-ts",children:"import path from 'path';\n\nexport default defineConfig({\n  buildConfig: {\n    copy: {\n      patterns: [\n        {\n          from: './index.html',\n          context: path.join(__dirname, './temp')\n          to: '',\n        }\n      ],\n    },\n  },\n});\n"})}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.code,{children:"patterns.to"})," \u7528\u4E8E\u6307\u5B9A\u590D\u5236\u6587\u4EF6\u7684\u8F93\u51FA\u8DEF\u5F84\uFF0C\u9ED8\u8BA4\u60C5\u51B5\u4E0B\u5B83\u7684\u503C\u4E3A ",(0,t.jsx)(e.a,{href:"/api/config/build-config#outDir",children:(0,t.jsx)(e.code,{children:"buildConfig.outDir"})}),"\u5BF9\u5E94\u7684\u503C\u3002\u56E0\u6B64\u6211\u4EEC\u6309\u7167\u5982\u4E0B\u65B9\u5F0F\u5C06 ",(0,t.jsx)(e.code,{children:"src/index.html"})," \u590D\u5236\u5230 ",(0,t.jsx)(e.code,{children:"dist"})," \u76EE\u5F55\u4E0B\uFF1A"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-ts",children:"export default defineConfig({\n  buildConfig: {\n    copy: {\n      patterns: [{ from: './index.html' }],\n    },\n  },\n});\n"})}),"\n",(0,t.jsxs)(e.p,{children:["\u5F53\u6211\u4EEC\u914D\u7F6E\u4E86 ",(0,t.jsx)(e.code,{children:"patterns.to"})," \u7684\u65F6\u5019\uFF1A"]}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["\u5982\u679C\u662F\u76F8\u5BF9\u8DEF\u5F84\uFF0C\u5219\u8BE5\u8DEF\u5F84\u4F1A\u76F8\u5BF9\u4E8E ",(0,t.jsx)(e.code,{children:"buildConfig.outDir"})," \u8BA1\u7B97\u51FA\u590D\u5236\u6587\u4EF6\u8F93\u51FA\u7684\u7EDD\u5BF9\u8DEF\u5F84\u3002"]}),"\n",(0,t.jsx)(e.li,{children:"\u5982\u679C\u662F\u7EDD\u5BF9\u8DEF\u5F84\uFF0C\u5219\u4F1A\u76F4\u63A5\u4F7F\u7528\u8BE5\u503C\u3002"}),"\n"]}),"\n",(0,t.jsxs)(e.p,{children:["\u6700\u540E ",(0,t.jsx)(e.code,{children:"patterns.globOptions"})," \u7528\u4E8E\u914D\u7F6E\u5BFB\u627E\u590D\u5236\u6587\u4EF6 ",(0,t.jsx)(e.a,{href:"https://github.com/sindresorhus/globby",target:"_blank",rel:"noopener noreferrer",children:"globby"})," \u5BF9\u8C61\uFF0C\u5176\u914D\u7F6E\u53EF\u53C2\u8003\uFF1A"]}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.a,{href:"https://github.com/sindresorhus/globby#options",target:"_blank",rel:"noopener noreferrer",children:"globby.options"})}),"\n"]}),"\n",(0,t.jsxs)(e.h2,{id:"\u4E0D\u540C\u573A\u666F\u4F7F\u7528\u793A\u4F8B",children:["\u4E0D\u540C\u573A\u666F\u4F7F\u7528\u793A\u4F8B",(0,t.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#\u4E0D\u540C\u573A\u666F\u4F7F\u7528\u793A\u4F8B",children:"#"})]}),"\n",(0,t.jsxs)(e.h3,{id:"\u5C06\u6587\u4EF6\u590D\u5236\u6587\u4EF6",children:["\u5C06\u6587\u4EF6\u590D\u5236\u6587\u4EF6",(0,t.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#\u5C06\u6587\u4EF6\u590D\u5236\u6587\u4EF6",children:"#"})]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-ts",children:"export default defineConfig({\n  buildConfig: [\n    {\n      outDir: 'dist',\n      copy: {\n        patterns: [\n          /**\n           * copy file to file\n           */\n          {\n            from: './temp-1/a.png',\n            context: __dirname,\n            to: './temp-1/b.png',\n          },\n        ],\n      },\n    },\n  ],\n});\n"})}),"\n",(0,t.jsxs)(e.h3,{id:"\u5C06\u6587\u4EF6\u590D\u5236\u5230\u76EE\u5F55",children:["\u5C06\u6587\u4EF6\u590D\u5236\u5230\u76EE\u5F55",(0,t.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#\u5C06\u6587\u4EF6\u590D\u5236\u5230\u76EE\u5F55",children:"#"})]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-ts",children:"export default defineConfig({\n  buildConfig: [\n    {\n      outDir: 'dist',\n      copy: {\n        patterns: [\n          /**\n           * copy file to dir\n           */\n          {\n            from: './temp-2/a.png',\n            context: __dirname,\n            to: './temp-2',\n          },\n        ],\n      },\n    },\n  ],\n});\n"})}),"\n",(0,t.jsxs)(e.h3,{id:"\u4ECE\u76EE\u5F55\u590D\u5236\u5230\u76EE\u5F55",children:["\u4ECE\u76EE\u5F55\u590D\u5236\u5230\u76EE\u5F55",(0,t.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#\u4ECE\u76EE\u5F55\u590D\u5236\u5230\u76EE\u5F55",children:"#"})]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-ts",children:"export default defineConfig({\n  buildConfig: [\n    {\n      outDir: 'dist',\n      copy: {\n        patterns: [\n          /**\n           * copy dir to dir\n           */\n          {\n            from: './temp-3/',\n            to: './temp-3',\n            context: __dirname,\n          },\n        ],\n        options: {\n          enableCopySync: true,\n        },\n      },\n    },\n  ],\n});\n"})}),"\n",(0,t.jsxs)(e.h3,{id:"\u4ECE\u76EE\u5F55\u5230\u6587\u4EF6",children:["\u4ECE\u76EE\u5F55\u5230\u6587\u4EF6",(0,t.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#\u4ECE\u76EE\u5F55\u5230\u6587\u4EF6",children:"#"})]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-ts",children:"export default defineConfig({\n  buildConfig: [\n    {\n      outDir: 'dist',\n      copy: {\n        patterns: [\n          /**\n           * copy dir to file\n           */\n          {\n            from: './temp-4/',\n            context: __dirname,\n            to: './temp-4/_index.html',\n          },\n        ],\n        options: {\n          enableCopySync: true,\n        },\n      },\n    },\n  ],\n});\n"})}),"\n",(0,t.jsxs)(e.h3,{id:"\u4F7F\u7528-glob",children:["\u4F7F\u7528 Glob",(0,t.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#\u4F7F\u7528-glob",children:"#"})]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-ts",children:"export default defineConfig({\n  buildConfig: [\n    {\n      outDir: 'dist',\n      copy: {\n        patterns: [\n          /**\n           * copy glob to dir\n           */\n          {\n            from: './*.html',\n            to: './temp-5',\n          },\n        ],\n        options: {\n          enableCopySync: true,\n        },\n      },\n    },\n    {\n      copy: {\n        patterns: [\n          /**\n           * copy glob to file\n           */\n          {\n            from: './*.html',\n            to: './temp-6/index.html',\n          },\n        ],\n        options: {\n          enableCopySync: true,\n        },\n      },\n    },\n  ],\n});\n"})})]})}(i=globalThis).__RSPRESS_PAGE_META||(i.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["zh%2Fguide%2Fadvance%2Fcopy.md"]={toc:[{text:"\u4E86\u89E3 Copy API",id:"\u4E86\u89E3-copy-api",depth:2},{text:"API \u8BE6\u89E3",id:"api-\u8BE6\u89E3",depth:2},{text:"\u4E0D\u540C\u573A\u666F\u4F7F\u7528\u793A\u4F8B",id:"\u4E0D\u540C\u573A\u666F\u4F7F\u7528\u793A\u4F8B",depth:2},{text:"\u5C06\u6587\u4EF6\u590D\u5236\u6587\u4EF6",id:"\u5C06\u6587\u4EF6\u590D\u5236\u6587\u4EF6",depth:3},{text:"\u5C06\u6587\u4EF6\u590D\u5236\u5230\u76EE\u5F55",id:"\u5C06\u6587\u4EF6\u590D\u5236\u5230\u76EE\u5F55",depth:3},{text:"\u4ECE\u76EE\u5F55\u590D\u5236\u5230\u76EE\u5F55",id:"\u4ECE\u76EE\u5F55\u590D\u5236\u5230\u76EE\u5F55",depth:3},{text:"\u4ECE\u76EE\u5F55\u5230\u6587\u4EF6",id:"\u4ECE\u76EE\u5F55\u5230\u6587\u4EF6",depth:3},{text:"\u4F7F\u7528 Glob",id:"\u4F7F\u7528-glob",depth:3}],title:"\u4F7F\u7528 Copy \u5DE5\u5177",frontmatter:{sidebar_position:3}};var l=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=Object.assign({},(0,s.useMDXComponents)(),n.components).wrapper;return e?(0,t.jsx)(e,(0,d._)((0,o._)({},n),{children:(0,t.jsx)(c,(0,o._)({},n))})):c(n)}}}]);