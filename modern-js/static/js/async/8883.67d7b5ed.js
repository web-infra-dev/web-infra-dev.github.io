/*! For license information please see 8883.67d7b5ed.js.LICENSE.txt */
(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["8883"],{4319:function(e,n,s){"use strict";s.r(n);var r=s("39980"),o=s("96954");function i(e){let n=Object.assign({h1:"h1",a:"a",ul:"ul",li:"li",strong:"strong",code:"code",p:"p",h3:"h3",pre:"pre",h4:"h4"},(0,o.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"sourceresolveextensionprefix",children:["source.resolveExtensionPrefix",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#sourceresolveextensionprefix",children:"#"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"\u7C7B\u578B\uFF1A"})," ",(0,r.jsx)(n.code,{children:"string | Record<BuilderTarget, string>"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"\u9ED8\u8BA4\u503C\uFF1A"})," ",(0,r.jsx)(n.code,{children:"undefined"})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["\u7528\u4E8E\u4E3A ",(0,r.jsx)(n.a,{href:"https://webpack.js.org/configuration/resolve/#resolveextensions",target:"_blank",rel:"noopener noreferrer",children:"resolve.extensions"})," \u6DFB\u52A0\u7EDF\u4E00\u7684\u524D\u7F00\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u5982\u679C\u591A\u4E2A\u6587\u4EF6\u62E5\u6709\u76F8\u540C\u7684\u540D\u79F0\uFF0C\u4F46\u5177\u6709\u4E0D\u540C\u7684\u6587\u4EF6\u540E\u7F00\uFF0CBuilder \u4F1A\u6839\u636E extensions \u6570\u7EC4\u7684\u987A\u5E8F\u8FDB\u884C\u8BC6\u522B\uFF0C\u89E3\u6790\u6570\u7EC4\u4E2D\u7B2C\u4E00\u4E2A\u88AB\u8BC6\u522B\u7684\u6587\u4EF6\uFF0C\u5E76\u8DF3\u8FC7\u5176\u4F59\u6587\u4EF6\u3002"}),"\n",(0,r.jsxs)(n.h3,{id:"\u793A\u4F8B",children:["\u793A\u4F8B",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u793A\u4F8B",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["\u4E0B\u9762\u662F\u914D\u7F6E ",(0,r.jsx)(n.code,{children:".web"})," \u524D\u7F00\u7684\u4F8B\u5B50\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"export default {\n  source: {\n    resolveExtensionPrefix: '.web',\n  },\n};\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u914D\u7F6E\u5B8C\u6210\u540E\uFF0Cextensions \u6570\u7EC4\u4F1A\u53D1\u751F\u4EE5\u4E0B\u53D8\u5316\uFF1A"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"// \u914D\u7F6E\u524D\nconst extensions = ['.js', '.ts', ...];\n\n// \u914D\u7F6E\u540E\nconst extensions = ['.web.js', '.js', '.web.ts' , '.ts', ...];\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u5728\u4EE3\u7801\u4E2D ",(0,r.jsx)(n.code,{children:"import './foo'"})," \u65F6\uFF0C\u4F1A\u4F18\u5148\u8BC6\u522B ",(0,r.jsx)(n.code,{children:"foo.web.js"})," \u6587\u4EF6\uFF0C\u518D\u8BC6\u522B ",(0,r.jsx)(n.code,{children:"foo.js"})," \u6587\u4EF6\u3002"]}),"\n",(0,r.jsxs)(n.h4,{id:"\u6839\u636E\u4EA7\u7269\u7C7B\u578B\u8BBE\u7F6E",children:["\u6839\u636E\u4EA7\u7269\u7C7B\u578B\u8BBE\u7F6E",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u6839\u636E\u4EA7\u7269\u7C7B\u578B\u8BBE\u7F6E",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["\u5F53\u4F60\u540C\u65F6\u6784\u5EFA\u591A\u79CD\u7C7B\u578B\u7684\u4EA7\u7269\u65F6\uFF0C\u4F60\u53EF\u4EE5\u4E3A\u4E0D\u540C\u7684\u4EA7\u7269\u7C7B\u578B\u8BBE\u7F6E\u4E0D\u540C\u7684 extension \u524D\u7F00\u3002\u6B64\u65F6\uFF0C\u4F60\u9700\u8981\u628A ",(0,r.jsx)(n.code,{children:"resolveExtensionPrefix"})," \u8BBE\u7F6E\u4E3A\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u5BF9\u8C61\u7684 key \u4E3A\u5BF9\u5E94\u7684\u4EA7\u7269\u7C7B\u578B\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u6BD4\u5982\u4E3A ",(0,r.jsx)(n.code,{children:"web"})," \u548C ",(0,r.jsx)(n.code,{children:"node"})," \u8BBE\u7F6E\u4E0D\u540C\u7684 extension \u524D\u7F00\uFF1A"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"export default {\n  output: {\n    source: {\n      resolveExtensionPrefix: {\n        web: '.web',\n        node: '.node',\n      },\n    },\n  },\n};\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u5728\u4EE3\u7801\u4E2D ",(0,r.jsx)(n.code,{children:"import './foo'"})," \u65F6\uFF0C\u5BF9\u4E8E node \u4EA7\u7269\uFF0C\u4F1A\u4F18\u5148\u8BC6\u522B ",(0,r.jsx)(n.code,{children:"foo.node.js"})," \u6587\u4EF6\uFF0C\u800C\u5BF9\u4E8E web \u4EA7\u7269\uFF0C\u5219\u4F1A\u4F18\u5148\u8BC6\u522B ",(0,r.jsx)(n.code,{children:"foo.web.js"})," \u6587\u4EF6\u3002"]})]})}function d(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,o.useMDXComponents)(),e.components);return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}n.default=d,d.__RSPRESS_PAGE_META={},d.__RSPRESS_PAGE_META["zh%2Fconfigure%2Fapp%2Fsource%2Fresolve-extension-prefix.mdx"]={toc:[{text:"\u793A\u4F8B",id:"\u793A\u4F8B",depth:3},{text:"\u6839\u636E\u4EA7\u7269\u7C7B\u578B\u8BBE\u7F6E",id:"\u6839\u636E\u4EA7\u7269\u7C7B\u578B\u8BBE\u7F6E",depth:4}],title:"source.resolveExtensionPrefix",frontmatter:{sidebar_label:"resolveExtensionPrefix"}}}}]);