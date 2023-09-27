(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["41415"],{74792:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return a}});var i,s=t("15169"),l=t("43932"),r=t("9880"),o=t("23169");function c(e){var n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",pre:"pre",p:"p",a:"a",h3:"h3"},(0,o.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"\u7C7B\u578B\uFF1A"})," ",(0,r.jsx)(n.code,{children:"false | Object | Function"})]}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"\u9ED8\u8BA4\u503C\uFF1A"})}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"const defaultHtmlPluginOptions = {\n  inject, // \u5BF9\u5E94 html.inject \u914D\u7F6E\u9879\n  favicon, // \u5BF9\u5E94 html.favicon \u914D\u7F6E\u9879\n  filename, // \u57FA\u4E8E output.distPath \u548C entryName \u751F\u6210\n  template, // \u9ED8\u8BA4\u4E3A\u5185\u7F6E\u7684 HTML \u6A21\u677F\u8DEF\u5F84\n  templateParameters, // \u5BF9\u5E94 html.templateParameters \u914D\u7F6E\u9879\n  chunks: [entryName],\n  minify: { // \u57FA\u4E8E output.disableMinimize \u751F\u6210\n    removeComments: false,\n    useShortDoctype: true,\n    keepClosingSlash: true,\n    collapseWhitespace: true,\n    removeRedundantAttributes: true,\n    removeScriptTypeAttributes: true,\n    removeStyleLinkTypeAttributes: true,\n    removeEmptyAttributes: true,\n    minifyJS, // \u57FA\u4E8E output.charset \u548C tools.terser.terserOptions \u751F\u6210\n    minifyCSS: true,\n    minifyURLs: true,\n  },\n};\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u901A\u8FC7 ",(0,r.jsx)(n.code,{children:"tools.htmlPlugin"})," \u53EF\u4EE5\u4FEE\u6539 ",(0,r.jsx)(n.a,{href:"https://github.com/jantimon/html-webpack-plugin",target:"_blank",rel:"noopener noreferrer",children:"html-webpack-plugin"})," \u6216 ",(0,r.jsx)(n.a,{href:"https://github.com/web-infra-dev/rspack/tree/main/packages/rspack-plugin-html",target:"_blank",rel:"noopener noreferrer",children:"@rspack/plugin-html"})," \u7684\u914D\u7F6E\u9879\u3002"]}),"\n",(0,r.jsxs)(n.h3,{id:"object-\u7C7B\u578B",children:["Object \u7C7B\u578B",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#object-\u7C7B\u578B",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["\u5F53 ",(0,r.jsx)(n.code,{children:"tools.htmlPlugin"})," \u7684\u503C\u4E3A ",(0,r.jsx)(n.code,{children:"Object"})," \u7C7B\u578B\u65F6\uFF0C\u4F1A\u4E0E\u9ED8\u8BA4\u914D\u7F6E\u901A\u8FC7 ",(0,r.jsx)(n.code,{children:"Object.assign"})," \u5408\u5E76\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    htmlPlugin: {\n      scriptLoading: 'blocking',\n    },\n  },\n};\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"function-\u7C7B\u578B",children:["Function \u7C7B\u578B",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#function-\u7C7B\u578B",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["\u5F53 ",(0,r.jsx)(n.code,{children:"tools.htmlPlugin"})," \u4E3A Function \u7C7B\u578B\u65F6\uFF1A"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u7B2C\u4E00\u4E2A\u53C2\u6570\u662F\u9ED8\u8BA4\u914D\u7F6E\u7684\u5BF9\u8C61\uFF0C\u53EF\u4EE5\u76F4\u63A5\u4FEE\u6539\u8BE5\u5BF9\u8C61\u3002"}),"\n",(0,r.jsx)(n.li,{children:"\u7B2C\u4E8C\u4E2A\u53C2\u6570\u662F\u4E5F\u662F\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u5305\u542B\u4E86 entry \u7684\u540D\u79F0\u548C entry \u7684\u503C\u3002"}),"\n",(0,r.jsx)(n.li,{children:"\u51FD\u6570\u53EF\u4EE5 return \u4E00\u4E2A\u65B0\u7684\u5BF9\u8C61\u4F5C\u4E3A\u6700\u7EC8\u7684\u914D\u7F6E\u3002"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    htmlPlugin(config, { entryName, entryValue }) {\n      if (entryName === 'main') {\n        config.scriptLoading = 'blocking';\n      }\n    },\n  },\n};\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"boolean-\u7C7B\u578B",children:["Boolean \u7C7B\u578B",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#boolean-\u7C7B\u578B",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["\u5C06 ",(0,r.jsx)(n.code,{children:"tools.htmlPlugin"})," \u914D\u7F6E\u4E3A ",(0,r.jsx)(n.code,{children:"false"}),"\uFF0C\u53EF\u4EE5\u7981\u7528\u9ED8\u8BA4\u7684 ",(0,r.jsx)(n.code,{children:"html-webpack-plugin"})," \u63D2\u4EF6\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    htmlPlugin: false,\n  },\n};\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"\u7981\u7528-js--css-\u538B\u7F29",children:["\u7981\u7528 JS / CSS \u538B\u7F29",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u7981\u7528-js--css-\u538B\u7F29",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0CBuilder \u4F1A\u5728\u751F\u4EA7\u73AF\u5883\u6784\u5EFA\u65F6\u538B\u7F29 HTML \u5185\u7684 JavaScript / CSS \u4EE3\u7801\uFF0C\u4ECE\u800C\u63D0\u5347\u9875\u9762\u6027\u80FD\u3002\u6B64\u80FD\u529B\u901A\u5E38\u5728\u4F7F\u7528\u81EA\u5B9A\u4E49\u6A21\u7248\u6216\u63D2\u5165\u81EA\u5B9A\u4E49\u811A\u672C\u65F6\u4F1A\u6709\u5E2E\u52A9\u3002\u7136\u800C\uFF0C\u5F53\u5F00\u542F ",(0,r.jsx)(n.code,{children:"output.enableInlineScripts"})," \u6216 ",(0,r.jsx)(n.code,{children:"output.enableInlineStyles"})," \u65F6\uFF0C\u4F1A\u51FA\u73B0\u5BF9 inline JavaScript / CSS \u4EE3\u7801\u91CD\u590D\u538B\u7F29\u7684\u60C5\u51B5\uFF0C\u5BF9\u6784\u5EFA\u6027\u80FD\u4F1A\u6709\u4E00\u5B9A\u5F71\u54CD\u3002\u4F60\u53EF\u4EE5\u901A\u8FC7\u4FEE\u6539 ",(0,r.jsx)(n.code,{children:"tools.htmlPlugin.minify"})," \u914D\u7F6E\u9879\u6765\u4FEE\u6539\u9ED8\u8BA4\u7684\u538B\u7F29\u884C\u4E3A\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    htmlPlugin: config => {\n      if (typeof config.minify === 'object') {\n        config.minify.minifyJS = false;\n        config.minify.minifyCSS = false;\n      }\n    },\n  },\n};\n"})})]})}(i=globalThis).__RSPRESS_PAGE_META||(i.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["..%2F..%2Fbuilder-doc%2Fdocs%2Fzh%2Fconfig%2Ftools%2FhtmlPlugin.md"]={toc:[{text:"Object \u7C7B\u578B",id:"object-\u7C7B\u578B",depth:3},{text:"Function \u7C7B\u578B",id:"function-\u7C7B\u578B",depth:3},{text:"Boolean \u7C7B\u578B",id:"boolean-\u7C7B\u578B",depth:3},{text:"\u7981\u7528 JS / CSS \u538B\u7F29",id:"\u7981\u7528-js--css-\u538B\u7F29",depth:3}],title:"",frontmatter:{}};var a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,o.useMDXComponents)(),e.components).wrapper;return n?(0,r.jsx)(n,(0,l._)((0,s._)({},e),{children:(0,r.jsx)(c,(0,s._)({},e))})):c(e)}},84786:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return d}});var i,s=t("15169"),l=t("43932"),r=t("9880"),o=t("23169"),c=t("74792");function a(e){var n=Object.assign({h1:"h1",a:"a",div:"div",p:"p"},(0,o.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"toolshtmlplugin",children:["tools.htmlPlugin",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#toolshtmlplugin",children:"#"})]}),"\n",(0,r.jsxs)(n.div,{className:"rspress-directive tip",children:[(0,r.jsx)(n.div,{className:"rspress-directive-title",children:"TIP"}),(0,r.jsx)(n.div,{className:"rspress-directive-content",children:(0,r.jsxs)(n.p,{children:["\u8BE5\u914D\u7F6E\u7531 Modern.js Builder \u63D0\u4F9B\uFF0C\u66F4\u591A\u4FE1\u606F\u53EF\u53C2\u8003 ",(0,r.jsx)(n.a,{href:"https://modernjs.dev/builder/api/config-tools.html#toolshtmlplugin",target:"_blank",rel:"noopener noreferrer",children:"tools.htmlPlugin"}),"\u3002\n"]})})]}),"\n","\n",(0,r.jsx)(c.default,{})]})}(i=globalThis).__RSPRESS_PAGE_META||(i.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["zh%2Fconfigure%2Fapp%2Ftools%2Fhtml-plugin.mdx"]={toc:[],title:"tools.htmlPlugin",frontmatter:{sidebar_label:"htmlPlugin"}};var d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,o.useMDXComponents)(),e.components).wrapper;return n?(0,r.jsx)(n,(0,l._)((0,s._)({},e),{children:(0,r.jsx)(a,(0,s._)({},e))})):a(e)}}}]);