/*! For license information please see 73164.50ba7c4d.js.LICENSE.txt */
(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["73164"],{29328:function(e,n,s){"use strict";s.r(n),s.d(n,{default:function(){return o}});var r=s("39980"),c=s("96954");function a(e){let n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",a:"a",div:"div",h3:"h3",pre:"pre"},(0,c.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"\u7C7B\u578B\uFF1A"})," ",(0,r.jsx)(n.code,{children:"Record<string, string | string[]> | Function"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"\u9ED8\u8BA4\u503C\uFF1A"})," ",(0,r.jsx)(n.code,{children:"undefined"})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["\u8BBE\u7F6E\u6587\u4EF6\u5F15\u7528\u7684\u522B\u540D\uFF0C\u5BF9\u5E94 webpack \u548C Rspack \u7684 ",(0,r.jsx)(n.a,{href:"https://webpack.js.org/configuration/resolve/#resolvealias",target:"_blank",rel:"noopener noreferrer",children:"resolve.alias"})," \u914D\u7F6E\u3002"]}),"\n",(0,r.jsxs)(n.div,{className:"rspress-directive tip",children:[(0,r.jsx)(n.div,{className:"rspress-directive-title",children:"TIP"}),(0,r.jsx)(n.div,{className:"rspress-directive-content",children:(0,r.jsxs)(n.p,{children:["\u5BF9\u4E8E TypeScript \u9879\u76EE\uFF0C\u4F60\u53EA\u9700\u8981\u5728 ",(0,r.jsx)(n.code,{children:"tsconfig.json"})," \u4E2D\u914D\u7F6E ",(0,r.jsx)(n.a,{href:"https://www.typescriptlang.org/tsconfig#paths",target:"_blank",rel:"noopener noreferrer",children:"compilerOptions.paths"})," \u5373\u53EF\uFF0CBuilder \u4F1A\u81EA\u52A8\u8BC6\u522B\u5B83\uFF0C\u4E0D\u9700\u8981\u989D\u5916\u914D\u7F6E ",(0,r.jsx)(n.code,{children:"source.alias"})," \u5B57\u6BB5\uFF0C\u8BE6\u89C1 ",(0,r.jsx)(n.a,{href:"https://modernjs.dev/builder/guide/advanced/alias.html",target:"_blank",rel:"noopener noreferrer",children:"\u300C\u8DEF\u5F84\u522B\u540D\u300D"}),"\u3002\n"]})})]}),"\n",(0,r.jsxs)(n.h3,{id:"object-\u7C7B\u578B",children:["Object \u7C7B\u578B",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#object-\u7C7B\u578B",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"alias"})," \u7684\u503C\u53EF\u4EE5\u5B9A\u4E49\u4E3A Object \u7C7B\u578B\uFF0C\u5176\u4E2D\u7684\u76F8\u5BF9\u8DEF\u5F84\u4F1A\u81EA\u52A8\u88AB Builder \u8F6C\u6362\u4E3A\u7EDD\u5BF9\u8DEF\u5F84\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"export default {\n  source: {\n    alias: {\n      '@common': './src/common',\n    },\n  },\n};\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u4EE5\u4E0A\u914D\u7F6E\u5B8C\u6210\u540E\uFF0C\u5982\u679C\u4F60\u5728\u4EE3\u7801\u4E2D\u5F15\u7528 ",(0,r.jsx)(n.code,{children:"@common/Foo.tsx"}),", \u5219\u4F1A\u6620\u5C04\u5230 ",(0,r.jsx)(n.code,{children:"<project>/src/common/Foo.tsx"})," \u8DEF\u5F84\u4E0A\u3002"]}),"\n",(0,r.jsxs)(n.h3,{id:"function-\u7C7B\u578B",children:["Function \u7C7B\u578B",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#function-\u7C7B\u578B",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"alias"})," \u7684\u503C\u5B9A\u4E49\u4E3A\u51FD\u6570\u65F6\uFF0C\u53EF\u4EE5\u63A5\u53D7\u9884\u8BBE\u7684 alias \u5BF9\u8C61\uFF0C\u5E76\u5BF9\u5176\u8FDB\u884C\u4FEE\u6539\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"export default {\n  source: {\n    alias: alias => {\n      alias['@common'] = './src/common';\n    },\n  },\n};\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u4E5F\u53EF\u4EE5\u5728\u51FD\u6570\u4E2D\u8FD4\u56DE\u4E00\u4E2A\u65B0\u5BF9\u8C61\u4F5C\u4E3A\u6700\u7EC8\u7ED3\u679C\uFF0C\u65B0\u5BF9\u8C61\u4F1A\u8986\u76D6\u9884\u8BBE\u7684 alias \u5BF9\u8C61\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"export default {\n  source: {\n    alias: alias => {\n      return {\n        '@common': './src/common',\n      };\n    },\n  },\n};\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"\u7CBE\u786E\u5339\u914D",children:["\u7CBE\u786E\u5339\u914D",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u7CBE\u786E\u5339\u914D",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["\u9ED8\u8BA4\u60C5\u51B5\uFF0C",(0,r.jsx)(n.code,{children:"source.alias"})," \u4F1A\u81EA\u52A8\u5339\u914D\u5B50\u8DEF\u5F84\uFF0C\u6BD4\u5982\u4EE5\u4E0B\u914D\u7F6E\uFF1A"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"import path from 'path';\n\nexport default {\n  source: {\n    alias: {\n      '@common': './src/common',\n    },\n  },\n};\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u5B83\u7684\u5339\u914D\u7ED3\u679C\u5982\u4E0B\uFF1A"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"import a from '@common'; // \u89E3\u6790\u4E3A `./src/common`\nimport b from '@common/util'; // \u89E3\u6790\u4E3A `./src/common/util`\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u4F60\u53EF\u4EE5\u6DFB\u52A0 ",(0,r.jsx)(n.code,{children:"$"})," \u7B26\u53F7\u6765\u5F00\u542F\u7CBE\u786E\u5339\u914D\uFF0C\u5F00\u542F\u540E\u5C06\u4E0D\u4F1A\u81EA\u52A8\u5339\u914D\u5B50\u8DEF\u5F84\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"import path from 'path';\n\nexport default {\n  source: {\n    alias: {\n      '@common$': './src/common',\n    },\n  },\n};\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u5B83\u7684\u5339\u914D\u7ED3\u679C\u5982\u4E0B\uFF1A"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"import a from '@common'; // \u89E3\u6790\u4E3A `./src/common`\nimport b from '@common/util'; // \u4FDD\u6301 `@common/util` \u4E0D\u53D8\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"\u5904\u7406-npm-\u5305",children:["\u5904\u7406 npm \u5305",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u5904\u7406-npm-\u5305",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["\u4F60\u53EF\u4EE5\u4F7F\u7528 ",(0,r.jsx)(n.code,{children:"alias"})," \u5C06\u67D0\u4E2A npm \u5305\u6307\u5411\u7EDF\u4E00\u7684\u76EE\u5F55\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u6BD4\u5982\u9879\u76EE\u4E2D\u5B89\u88C5\u4E86\u591A\u4EFD ",(0,r.jsx)(n.code,{children:"react"}),"\uFF0C\u4F60\u53EF\u4EE5\u5C06 ",(0,r.jsx)(n.code,{children:"react"})," \u7EDF\u4E00\u6307\u5411\u6839\u76EE\u5F55\u7684 ",(0,r.jsx)(n.code,{children:"node_modules"})," \u4E2D\u5B89\u88C5\u7684\u7248\u672C\uFF0C\u907F\u514D\u51FA\u73B0\u6253\u5305\u591A\u4EFD React \u4EE3\u7801\u7684\u95EE\u9898\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"import path from 'path';\n\nexport default {\n  source: {\n    alias: {\n      react: path.resolve(__dirname, './node_modules/react'),\n    },\n  },\n};\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u5F53\u4F60\u5728\u4F7F\u7528 alias \u5904\u7406 npm \u5305\u65F6\uFF0C\u8BF7\u7559\u610F\u9879\u76EE\u4E2D\u662F\u5426\u4F7F\u7528\u4E86\u8FD9\u4E2A\u5305\u4E0D\u540C\u7684 major \u7248\u672C\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u6BD4\u5982\u4F60\u7684\u9879\u76EE\u4E2D\u67D0\u4E2A\u6A21\u5757\u6216 npm \u4F9D\u8D56\u4F7F\u7528\u4E86 React 18 \u7684 API\uFF0C\u5982\u679C\u4F60\u5C06 React alias \u5230 17 \u7248\u672C\uFF0C\u5C31\u4F1A\u5BFC\u81F4\u8BE5\u6A21\u5757\u65E0\u6CD5\u5F15\u7528\u5230 React 18 \u7684 API\uFF0C\u5BFC\u81F4\u4EE3\u7801\u5F02\u5E38\u3002"})]})}function i(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,c.useMDXComponents)(),e.components);return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}var o=i;i.__RSPRESS_PAGE_META={},i.__RSPRESS_PAGE_META["..%2F..%2Fbuilder-doc%2Fdocs%2Fzh%2Fconfig%2Fsource%2Falias.md"]={toc:[{text:"Object \u7C7B\u578B",id:"object-\u7C7B\u578B",depth:3},{text:"Function \u7C7B\u578B",id:"function-\u7C7B\u578B",depth:3},{text:"\u7CBE\u786E\u5339\u914D",id:"\u7CBE\u786E\u5339\u914D",depth:3},{text:"\u5904\u7406 npm \u5305",id:"\u5904\u7406-npm-\u5305",depth:3}],title:"",frontmatter:{}}},36478:function(e,n,s){"use strict";s.r(n),s.d(n,{default:function(){return l}});var r=s("39980"),c=s("96954"),a=s("29328");function i(e){let n=Object.assign({h1:"h1",a:"a"},(0,c.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"sourcealias",children:["source.alias",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#sourcealias",children:"#"})]}),"\n","\n",(0,r.jsx)(a.default,{})]})}function o(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,c.useMDXComponents)(),e.components);return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}var l=o;o.__RSPRESS_PAGE_META={},o.__RSPRESS_PAGE_META["zh%2Fconfigure%2Fapp%2Fsource%2Falias.mdx"]={toc:[],title:"source.alias",frontmatter:{sidebar_label:"alias"}}}}]);