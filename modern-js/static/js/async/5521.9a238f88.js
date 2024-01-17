/*! For license information please see 5521.9a238f88.js.LICENSE.txt */
(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["5521"],{24647:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return l}});var s=r("9880"),d=r("23169");function t(e){let n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",div:"div",p:"p",a:"a",h3:"h3",pre:"pre",h4:"h4"},(0,d.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"\u7C7B\u578B\uFF1A"})," ",(0,s.jsx)(n.code,{children:"Object | Function | undefined"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"\u9ED8\u8BA4\u503C\uFF1A"})," ",(0,s.jsx)(n.code,{children:"undefined"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"\u6253\u5305\u5DE5\u5177\uFF1A"})," ",(0,s.jsx)(n.code,{children:"\u4EC5\u652F\u6301 webpack"})]}),"\n"]}),"\n",(0,s.jsxs)(n.div,{className:"rspress-directive warning",children:[(0,s.jsx)(n.div,{className:"rspress-directive-title",children:"\u4E0D\u518D\u63A8\u8350\u4F7F\u7528 ts-loader"}),(0,s.jsxs)(n.div,{className:"rspress-directive-content",children:[(0,s.jsxs)(n.p,{children:["\u4F7F\u7528 ",(0,s.jsx)(n.a,{href:"https://modernjs.dev/builder/guide/basic/typescript.html#%E4%B8%BA%E4%BB%80%E4%B9%88%E9%BB%98%E8%AE%A4%E4%BD%BF%E7%94%A8-babel",target:"_blank",rel:"noopener noreferrer",children:"babel-loader"})," \u6216 ",(0,s.jsx)(n.a,{href:"https://modernjs.dev/guide/advanced/rspack-start.html",target:"_blank",rel:"noopener noreferrer",children:"Rspack"})," \u8F6C\u8BD1 TypeScript \u4EE3\u7801\u7684\u6027\u80FD\u660E\u663E\u4F18\u4E8E ts-loader \u4E14\u80FD\u591F\u4F7F\u7528\u66F4\u591A\u62D3\u5C55\u80FD\u529B\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u542F\u7528 ts-loader \u65F6\u5C06\u65E0\u6CD5\u4F7F\u7528 ",(0,s.jsx)(n.a,{href:"https://modernjs.dev/configure/app/source/transform-import.html",target:"_blank",rel:"noopener noreferrer",children:"source.transformImport"})," \u548C ",(0,s.jsx)(n.a,{href:"https://modernjs.dev/configure/app/tools/styled-components.html",target:"_blank",rel:"noopener noreferrer",children:"tools.styledComponents"})," \u7B49\u7531 Babel \u548C SWC \u63D0\u4F9B\u652F\u6301\u7684\u80FD\u529B\u3002\n"]})]})]}),"\n",(0,s.jsxs)(n.p,{children:["\u9879\u76EE\u4E2D\u9ED8\u8BA4\u4E0D\u5F00\u542F ts-loader\uFF0C\u5F53 ",(0,s.jsx)(n.code,{children:"tools.tsLoader"})," \u4E0D\u4E3A undefined \u5219\u8868\u793A\u5F00\u542F ts-loader\uFF0C\u540C\u65F6\u7981\u7528 babel-loader \u5BF9 TypeScript \u7684\u7F16\u8BD1\u3002"]}),"\n",(0,s.jsxs)(n.h3,{id:"object-\u7C7B\u578B",children:["Object \u7C7B\u578B",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#object-\u7C7B\u578B",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"\u5F53\u6B64\u503C\u4E3A Object \u7C7B\u578B\u65F6\uFF0C\u4E0E\u9ED8\u8BA4\u914D\u7F6E\u901A\u8FC7 Object.assign \u5408\u5E76\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u9ED8\u8BA4\u914D\u7F6E\u5982\u4E0B:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "compilerOptions": {\n    "target": "es5",\n    "module": "ESNext"\n  },\n  "transpileOnly": true,\n  "allowTsInNodeModules": true\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["\u4F60\u53EF\u4EE5\u901A\u8FC7 ",(0,s.jsx)(n.code,{children:"tools.tsLoader"})," \u914D\u7F6E\u9879\u6765\u8986\u76D6\u9ED8\u8BA4\u914D\u7F6E:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"export default {\n  tools: {\n    tsLoader: {\n      allowTsInNodeModules: false,\n    },\n  },\n};\n"})}),"\n",(0,s.jsxs)(n.h3,{id:"function-\u7C7B\u578B",children:["Function \u7C7B\u578B",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#function-\u7C7B\u578B",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["\u5F53\u6B64\u503C\u4E3A Function \u7C7B\u578B\u65F6\uFF0C\u9ED8\u8BA4\u914D\u7F6E\u4F5C\u4E3A\u7B2C\u4E00\u53C2\u6570\u4F20\u5165\uFF0C\u53EF\u4EE5\u76F4\u63A5\u4FEE\u6539\u914D\u7F6E\u5BF9\u8C61\uFF0C\u4E5F\u53EF\u4EE5\u8FD4\u56DE\u4E00\u4E2A\u5BF9\u8C61\u4F5C\u4E3A\u6700\u7EC8\u914D\u7F6E\uFF1B\u7B2C\u4E8C\u4E2A\u53C2\u6570\u4E3A\u4FEE\u6539 ",(0,s.jsx)(n.code,{children:"ts-loader"})," \u914D\u7F6E\u5DE5\u5177\u51FD\u6570\u96C6\u5408\uFF1A"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"export default {\n  tools: {\n    tsLoader: opts => {\n      opts.allowTsInNodeModules = false;\n    },\n  },\n};\n"})}),"\n",(0,s.jsxs)(n.h3,{id:"\u5DE5\u5177\u51FD\u6570",children:["\u5DE5\u5177\u51FD\u6570",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u5DE5\u5177\u51FD\u6570",children:"#"})]}),"\n",(0,s.jsxs)(n.h4,{id:"addincludes",children:["addIncludes",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#addincludes",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["\u5DF2\u5E9F\u5F03\uFF0C\u8BF7\u4F7F\u7528 ",(0,s.jsx)(n.a,{href:"https://modernjs.dev/configure/app/source/include.html",target:"_blank",rel:"noopener noreferrer",children:"source.include"})," \u4EE3\u66FF\uFF0C\u4E24\u8005\u529F\u80FD\u5B8C\u5168\u4E00\u81F4\u3002"]}),"\n",(0,s.jsxs)(n.h4,{id:"addexcludes",children:["addExcludes",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#addexcludes",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["\u5DF2\u5E9F\u5F03\uFF0C\u8BF7\u4F7F\u7528 ",(0,s.jsx)(n.a,{href:"https://modernjs.dev/configure/app/source/exclude.html",target:"_blank",rel:"noopener noreferrer",children:"source.exclude"})," \u4EE3\u66FF\uFF0C\u4E24\u8005\u529F\u80FD\u5B8C\u5168\u4E00\u81F4\u3002"]})]})}function o(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,d.useMDXComponents)(),e.components);return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(t,{...e})}):t(e)}var l=o;o.__RSPRESS_PAGE_META={},o.__RSPRESS_PAGE_META["..%2F..%2Fbuilder-doc%2Fdocs%2Fzh%2Fconfig%2Ftools%2FtsLoader.md"]={toc:[{text:"Object \u7C7B\u578B",id:"object-\u7C7B\u578B",depth:3},{text:"Function \u7C7B\u578B",id:"function-\u7C7B\u578B",depth:3},{text:"\u5DE5\u5177\u51FD\u6570",id:"\u5DE5\u5177\u51FD\u6570",depth:3},{text:"addIncludes",id:"addincludes",depth:4},{text:"addExcludes",id:"addexcludes",depth:4}],title:"",frontmatter:{}}},13480:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return a}});var s=r("9880"),d=r("23169"),t=r("24647");function o(e){let n=Object.assign({h1:"h1",a:"a"},(0,d.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h1,{id:"toolstsloader",children:["tools.tsLoader",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#toolstsloader",children:"#"})]}),"\n","\n",(0,s.jsx)(t.default,{})]})}function l(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,d.useMDXComponents)(),e.components);return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}var a=l;l.__RSPRESS_PAGE_META={},l.__RSPRESS_PAGE_META["zh%2Fconfigure%2Fapp%2Ftools%2Fts-loader.mdx"]={toc:[],title:"tools.tsLoader",frontmatter:{sidebar_label:"tsLoader"}}}}]);