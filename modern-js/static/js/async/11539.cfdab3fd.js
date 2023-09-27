(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["11539"],{46897:function(e,n,s){"use strict";s.r(n),s.d(n,{default:function(){return d}});var r,t=s("10310"),c=s("81904"),o=s("98638"),i=s("21968");function l(e){let n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",pre:"pre",p:"p",a:"a",h3:"h3"},(0,i.useMDXComponents)(),e.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"\u7C7B\u578B\uFF1A"})," ",(0,o.jsx)(n.code,{children:"Object | Function"})]}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.strong,{children:"\u9ED8\u8BA4\u503C\uFF1A"})}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"const defaultOptions = {\n  typescript: {\n    // avoid OOM issue\n    memoryLimit: 8192,\n    // use tsconfig of user project\n    configFile: tsconfigPath,\n    // use typescript of user project\n    typescriptPath: require.resolve('typescript'),\n  },\n  issue: {\n    exclude: [\n      { file: '**/*.(spec|test).ts' },\n      { file: '**/node_modules/**/*' },\n    ],\n  },\n  logger: {\n    log() {\n      // do nothing\n      // we only want to display error messages\n    },\n    error(message: string) {\n      console.error(message.replace(/ERROR/g, 'Type Error'));\n    },\n  },\n},\n"})}),"\n",(0,o.jsxs)(n.p,{children:["\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0CBuilder \u4F1A\u5F00\u542F ",(0,o.jsx)(n.a,{href:"https://github.com/TypeStrong/fork-ts-checker-webpack-plugin",target:"_blank",rel:"noopener noreferrer",children:"fork-ts-checker-webpack-plugin"})," \u8FDB\u884C\u7C7B\u578B\u68C0\u67E5\u3002\u4F60\u53EF\u4EE5\u901A\u8FC7 ",(0,o.jsx)(n.code,{children:"output.disableTsChecker"})," \u914D\u7F6E\u9879\u6765\u5173\u95ED\u7C7B\u578B\u68C0\u67E5\u3002"]}),"\n",(0,o.jsxs)(n.h3,{id:"object-\u7C7B\u578B",children:["Object \u7C7B\u578B",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#object-\u7C7B\u578B",children:"#"})]}),"\n",(0,o.jsxs)(n.p,{children:["\u5F53 ",(0,o.jsx)(n.code,{children:"tsChecker"})," \u7684\u503C\u4E3A Object \u7C7B\u578B\u65F6\uFF0C\u4F1A\u4E0E\u9ED8\u8BA4\u914D\u7F6E\u8FDB\u884C\u6DF1\u5C42\u5408\u5E76\u3002"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"export default {\n  tools: {\n    tsChecker: {\n      issue: {\n        exclude: [{ file: '**/some-folder/**/*.ts' }],\n      },\n    },\n  },\n};\n"})}),"\n",(0,o.jsxs)(n.h3,{id:"function-\u7C7B\u578B",children:["Function \u7C7B\u578B",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#function-\u7C7B\u578B",children:"#"})]}),"\n",(0,o.jsxs)(n.p,{children:["\u5F53 ",(0,o.jsx)(n.code,{children:"tsChecker"})," \u7684\u503C\u4E3A Function \u7C7B\u578B\u65F6\uFF0C\u9ED8\u8BA4\u914D\u7F6E\u4F1A\u4F5C\u4E3A\u7B2C\u4E00\u4E2A\u53C2\u6570\u4F20\u5165\uFF0C\u4F60\u53EF\u4EE5\u76F4\u63A5\u4FEE\u6539\u914D\u7F6E\u5BF9\u8C61\uFF0C\u4E5F\u53EF\u4EE5\u8FD4\u56DE\u4E00\u4E2A\u5BF9\u8C61\u4F5C\u4E3A\u6700\u7EC8\u914D\u7F6E\u3002"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"export default {\n  tools: {\n    tsChecker(options) {\n      (options?.issue?.exclude as unknown[]).push({\n        file: '**/some-folder/**/*.ts',\n      });\n    },\n  },\n};\n"})})]})}(r=globalThis).__RSPRESS_PAGE_META||(r.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["..%2F..%2Fbuilder-doc%2Fdocs%2Fzh%2Fconfig%2Ftools%2FtsChecker.md"]={toc:[{text:"Object \u7C7B\u578B",id:"object-\u7C7B\u578B",depth:3},{text:"Function \u7C7B\u578B",id:"function-\u7C7B\u578B",depth:3}],title:"",frontmatter:{}};var d=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,i.useMDXComponents)(),e.components);return n?(0,o.jsx)(n,(0,c._)((0,t._)({},e),{children:(0,o.jsx)(l,(0,t._)({},e))})):l(e)}},56374:function(e,n,s){"use strict";s.r(n),s.d(n,{default:function(){return a}});var r,t=s("10310"),c=s("81904"),o=s("98638"),i=s("21968"),l=s("46897");function d(e){let n=Object.assign({h1:"h1",a:"a",div:"div",p:"p"},(0,i.useMDXComponents)(),e.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.h1,{id:"toolstschecker",children:["tools.tsChecker",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#toolstschecker",children:"#"})]}),"\n",(0,o.jsxs)(n.div,{className:"rspress-directive tip",children:[(0,o.jsx)(n.div,{className:"rspress-directive-title",children:"TIP"}),(0,o.jsx)(n.div,{className:"rspress-directive-content",children:(0,o.jsxs)(n.p,{children:["\u8BE5\u914D\u7F6E\u7531 Modern.js Builder \u63D0\u4F9B\uFF0C\u66F4\u591A\u4FE1\u606F\u53EF\u53C2\u8003 ",(0,o.jsx)(n.a,{href:"https://modernjs.dev/builder/api/config-tools.html#toolstschecker",target:"_blank",rel:"noopener noreferrer",children:"tools.tsChecker"}),"\u3002\n"]})})]}),"\n","\n",(0,o.jsx)(l.default,{})]})}(r=globalThis).__RSPRESS_PAGE_META||(r.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["zh%2Fconfigure%2Fapp%2Ftools%2Fts-checker.mdx"]={toc:[],title:"tools.tsChecker",frontmatter:{sidebar_label:"tsChecker"}};var a=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,i.useMDXComponents)(),e.components);return n?(0,o.jsx)(n,(0,c._)((0,t._)({},e),{children:(0,o.jsx)(d,(0,t._)({},e))})):d(e)}}}]);