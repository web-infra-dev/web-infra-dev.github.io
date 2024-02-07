/*! For license information please see 38364.0d429d88.js.LICENSE.txt */
(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["38364"],{34467:function(e,n,s){"use strict";s.r(n);var r=s("39980"),o=s("96954");function t(e){let n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",a:"a",pre:"pre",div:"div",h3:"h3"},(0,o.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"\u7C7B\u578B\uFF1A"})," ",(0,r.jsx)(n.code,{children:"Object | Function"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"\u9ED8\u8BA4\u503C\uFF1A"})," ",(0,r.jsx)(n.code,{children:"undefined"})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["\u901A\u8FC7 ",(0,r.jsx)(n.code,{children:"tools.cssLoader"})," \u53EF\u4EE5\u4FEE\u6539 ",(0,r.jsx)(n.a,{href:"https://github.com/webpack-contrib/css-loader",target:"_blank",rel:"noopener noreferrer",children:"css-loader"})," \u7684\u914D\u7F6E\u9879\u3002\u9ED8\u8BA4\u914D\u7F6E\u5982\u4E0B:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"{\n  modules: {\n    auto: true,\n    exportLocalsConvention: 'camelCase',\n    localIdentName: config.output.cssModuleLocalIdentName,\n    // isServer \u8868\u793A node (SSR) \u6784\u5EFA\n    // isWebWorker \u8868\u793A web worker \u6784\u5EFA\n    exportOnlyLocals: isServer || isWebWorker,\n  },\n  // \u9ED8\u8BA4\u5728\u5F00\u53D1\u73AF\u5883\u4E0B\u542F\u7528 CSS \u7684 Source Map\n  sourceMap: isDev,\n  // importLoaders \u5728\u7F16\u8BD1 css \u6587\u4EF6\u65F6\u4E3A `1`\uFF0C\u5728\u7F16\u8BD1 sass/less \u6587\u4EF6\u65F6\u4E3A `2`\n  importLoaders: 1 || 2,\n}\n"})}),"\n",(0,r.jsxs)(n.div,{className:"rspress-directive tip",children:[(0,r.jsx)(n.div,{className:"rspress-directive-title",children:"TIP"}),(0,r.jsxs)(n.div,{className:"rspress-directive-content",children:[(0,r.jsxs)(n.p,{children:["\u5728\u4F7F\u7528 Rspack \u4F5C\u4E3A\u6253\u5305\u5DE5\u5177\u65F6\uFF0C\u4EC5\u652F\u6301\u5728 ",(0,r.jsx)(n.a,{href:"https://modernjs.dev/builder/api/config-output.html#outputdisablecssextract",target:"_blank",rel:"noopener noreferrer",children:"disableCssExtract"})," \u65F6\u4F7F\u7528\u8BE5\u914D\u7F6E\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u4FEE\u6539 CSS Modules \u76F8\u5173\u914D\u7F6E\uFF0C\u63A8\u8350\u4F7F\u7528 ",(0,r.jsx)(n.a,{href:"https://modernjs.dev/builder/api/config-output.html#outputcssmodules",target:"_blank",rel:"noopener noreferrer",children:"output.cssModules"})," \u914D\u7F6E\u9879\u3002\n"]})]})]}),"\n",(0,r.jsxs)(n.h3,{id:"object-\u7C7B\u578B",children:["Object \u7C7B\u578B",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#object-\u7C7B\u578B",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"\u5F53\u6B64\u503C\u4E3A Object \u7C7B\u578B\u65F6\uFF0C\u4F1A\u4E0E\u9ED8\u8BA4\u914D\u7F6E\u8FDB\u884C\u6DF1\u5C42\u5408\u5E76 (deep merge)\u3002\u6BD4\u5982\uFF1A"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    cssLoader: {\n      modules: {\n        exportOnlyLocals: true,\n      },\n    },\n  },\n};\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"function-\u7C7B\u578B",children:["Function \u7C7B\u578B",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#function-\u7C7B\u578B",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"\u5F53\u6B64\u503C\u4E3A Function \u7C7B\u578B\u65F6\uFF0C\u9ED8\u8BA4\u914D\u7F6E\u4F5C\u4E3A\u7B2C\u4E00\u4E2A\u53C2\u6570\u4F20\u5165\uFF0C\u4F60\u53EF\u4EE5\u76F4\u63A5\u4FEE\u6539\u914D\u7F6E\u5BF9\u8C61\uFF0C\u4E5F\u53EF\u4EE5\u8FD4\u56DE\u4E00\u4E2A\u5BF9\u8C61\u4F5C\u4E3A\u6700\u7EC8\u914D\u7F6E\u3002\u6BD4\u5982\uFF1A"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    cssLoader: config => {\n      config.modules.exportOnlyLocals = true;\n      return config;\n    },\n  },\n};\n"})})]})}function c(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,o.useMDXComponents)(),e.components);return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(t,{...e})}):t(e)}n.default=c,c.__RSPRESS_PAGE_META={},c.__RSPRESS_PAGE_META["..%2F..%2Fbuilder-doc%2Fdocs%2Fzh%2Fconfig%2Ftools%2FcssLoader.md"]={toc:[{text:"Object \u7C7B\u578B",id:"object-\u7C7B\u578B",depth:3},{text:"Function \u7C7B\u578B",id:"function-\u7C7B\u578B",depth:3}],title:"",frontmatter:{}}},10595:function(e,n,s){"use strict";s.r(n);var r=s("39980"),o=s("96954"),t=s("34467");function c(e){let n=Object.assign({h1:"h1",a:"a"},(0,o.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"toolscssloader",children:["tools.cssLoader",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#toolscssloader",children:"#"})]}),"\n","\n",(0,r.jsx)(t.default,{})]})}function d(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,o.useMDXComponents)(),e.components);return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}n.default=d,d.__RSPRESS_PAGE_META={},d.__RSPRESS_PAGE_META["zh%2Fconfigure%2Fapp%2Ftools%2Fcss-loader.mdx"]={toc:[],title:"tools.cssLoader",frontmatter:{sidebar_label:"cssLoader"}}}}]);