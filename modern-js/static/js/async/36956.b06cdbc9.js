/*! For license information please see 36956.b06cdbc9.js.LICENSE.txt */
(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["36956"],{51544:function(e,n,t){"use strict";t.r(n);var r=t("39980"),a=t("96954");function s(e){let n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",pre:"pre",p:"p",a:"a",h3:"h3"},(0,a.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"\u7C7B\u578B\uFF1A"})," ",(0,r.jsx)(n.code,{children:"Object | Function"})]}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"\u9ED8\u8BA4\u503C\uFF1A"})}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"type DefaultParameters = {\n  meta: string; // \u5BF9\u5E94 html.meta \u914D\u7F6E\n  title: string; // \u5BF9\u5E94 html.title \u914D\u7F6E\n  mountId: string; // \u5BF9\u5E94 html.mountId \u914D\u7F6E\n  entryName: string; // \u5165\u53E3\u540D\u79F0\n  assetPrefix: string; // \u5BF9\u5E94 output.assetPrefix \u914D\u7F6E\n  compilation: webpack.Compilation; // \u5BF9\u5E94 webpack \u7684 compilation \u5BF9\u8C61\n  webpackConfig: Configuration; // webpack \u914D\u7F6E\n  // htmlWebpackPlugin \u5185\u7F6E\u7684\u53C2\u6570\n  // \u8BE6\u89C1 https://github.com/jantimon/html-webpack-plugin\n  htmlWebpackPlugin: {\n    tags: object;\n    files: object;\n    options: object;\n  };\n};\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u5B9A\u4E49 HTML \u6A21\u677F\u4E2D\u7684\u53C2\u6570\uFF0C\u5BF9\u5E94 ",(0,r.jsx)(n.a,{href:"https://github.com/jantimon/html-webpack-plugin",target:"_blank",rel:"noopener noreferrer",children:"html-webpack-plugin"})," \u7684 ",(0,r.jsx)(n.code,{children:"templateParameters"})," \u914D\u7F6E\u9879\u3002\u4F60\u53EF\u4EE5\u4F7F\u7528\u914D\u7F6E\u4E3A\u5BF9\u8C61\u6216\u8005\u51FD\u6570\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u5982\u679C\u662F\u5BF9\u8C61\uFF0C\u4F1A\u548C\u9ED8\u8BA4\u53C2\u6570\u5408\u5E76\u3002\u6BD4\u5982\uFF1A"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"export default {\n  html: {\n    templateParameters: {\n      title: 'My App',\n    },\n  },\n};\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u5982\u679C\u662F\u51FD\u6570\uFF0C\u4F1A\u4F20\u5165\u9ED8\u8BA4\u53C2\u6570\uFF0C\u4F60\u53EF\u4EE5\u8FD4\u56DE\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u7528\u4E8E\u8986\u76D6\u9ED8\u8BA4\u53C2\u6570\u3002\u6BD4\u5982\uFF1A"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"export default {\n  html: {\n    templateParameters: defaultParameters => {\n      console.log(defaultParameters.compilation);\n      console.log(defaultParameters.title);\n      return {\n        title: 'My App',\n      };\n    },\n  },\n};\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"\u793A\u4F8B",children:["\u793A\u4F8B",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u793A\u4F8B",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["\u5982\u679C\u9700\u8981\u5728 HTML \u6A21\u677F\u4E2D\u4F7F\u7528 ",(0,r.jsx)(n.code,{children:"foo"})," \u53C2\u6570\uFF0C\u53EF\u4EE5\u6DFB\u52A0\u5982\u4E0B\u8BBE\u7F6E\uFF1A"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"export default {\n  html: {\n    templateParameters: {\n      foo: 'bar',\n    },\n  },\n};\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u6216\u8005\u4F7F\u7528\u51FD\u6570\u914D\u7F6E\uFF1A"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"export default {\n  html: {\n    templateParameters: defaultParameters => {\n      return {\n        foo: 'bar',\n      };\n    },\n  },\n};\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u63A5\u4E0B\u6765\uFF0C\u4F60\u53EF\u4EE5\u5728 HTML \u6A21\u677F\u4E2D\uFF0C\u901A\u8FC7 ",(0,r.jsx)(n.code,{children:"<%= foo %>"})," \u6765\u8BFB\u53D6\u53C2\u6570\uFF1A"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"<script>window.foo = '<%= foo %>'<\/script>\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u7ECF\u8FC7\u7F16\u8BD1\u540E\u7684\u6700\u7EC8 HTML \u4EE3\u7801\u5982\u4E0B\uFF1A"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"<script>window.foo = 'bar'<\/script>\n"})})]})}function l(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,a.useMDXComponents)(),e.components);return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(s,{...e})}):s(e)}n.default=l,l.__RSPRESS_PAGE_META={},l.__RSPRESS_PAGE_META["..%2F..%2Fbuilder-doc%2Fdocs%2Fzh%2Fconfig%2Fhtml%2FtemplateParameters.md"]={toc:[{text:"\u793A\u4F8B",id:"\u793A\u4F8B",depth:3}],title:"",frontmatter:{}}},69350:function(e,n,t){"use strict";t.r(n);var r=t("39980"),a=t("96954"),s=t("51544");function l(e){let n=Object.assign({h1:"h1",a:"a"},(0,a.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"htmltemplateparameters",children:["html.templateParameters",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#htmltemplateparameters",children:"#"})]}),"\n","\n",(0,r.jsx)(s.default,{})]})}function c(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,a.useMDXComponents)(),e.components);return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}n.default=c,c.__RSPRESS_PAGE_META={},c.__RSPRESS_PAGE_META["zh%2Fconfigure%2Fapp%2Fhtml%2Ftemplate-parameters.mdx"]={toc:[],title:"html.templateParameters",frontmatter:{sidebar_label:"templateParameters"}}}}]);