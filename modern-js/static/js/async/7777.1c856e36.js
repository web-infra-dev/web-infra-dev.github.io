(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["7777"],{21826:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return o}});var i=t("9880"),s=t("23169");function l(e){let n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",pre:"pre",p:"p",a:"a",h3:"h3"},(0,s.useMDXComponents)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Type:"})," ",(0,i.jsx)(n.code,{children:"false | Object | Function"})]}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"Default:"})}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"const defaultHtmlPluginOptions = {\n  inject, // corresponding to the html.inject config\n  favicon, // corresponding to html.favicon config\n  filename, // generated based on output.distPath and entryName\n  template, // defaults to the built-in HTML template path\n  templateParameters, // corresponding to the html.templateParameters config\n  chunks: [entryName],\n  minify: { // generated based on output.disableMinimize\n    removeComments: false,\n    useShortDoctype: true,\n    keepClosingSlash: true,\n    collapseWhitespace: true,\n    removeRedundantAttributes: true,\n    removeScriptTypeAttributes: true,\n    removeStyleLinkTypeAttributes: true,\n    removeEmptyAttributes: true,\n    minifyJS, // generated based on output.charset and tools.terser.terserOptions\n    minifyCSS: true,\n    minifyURLs: true,\n  },\n};\n"})}),"\n",(0,i.jsxs)(n.p,{children:["The configs of ",(0,i.jsx)(n.a,{href:"https://github.com/jantimon/html-webpack-plugin",target:"_blank",rel:"noopener noreferrer",children:"html-webpack-plugin"})," or ",(0,i.jsx)(n.a,{href:"https://github.com/web-infra-dev/rspack/tree/main/packages/rspack-plugin-html",target:"_blank",rel:"noopener noreferrer",children:"@rspack/plugin-html"})," can be modified through ",(0,i.jsx)(n.code,{children:"tools.htmlPlugin"}),"."]}),"\n",(0,i.jsxs)(n.h3,{id:"object-type",children:["Object Type",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#object-type",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["When ",(0,i.jsx)(n.code,{children:"tools.htmlPlugin"})," is ",(0,i.jsx)(n.code,{children:"Object"})," type, the value will be merged with the default config via ",(0,i.jsx)(n.code,{children:"Object.assign"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    htmlPlugin: {\n      scriptLoading: 'blocking',\n    },\n  },\n};\n"})}),"\n",(0,i.jsxs)(n.h3,{id:"function-type",children:["Function Type",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#function-type",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["When ",(0,i.jsx)(n.code,{children:"tools.htmlPlugin"})," is a Function:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"The first parameter is the default config, which can be modified directly."}),"\n",(0,i.jsx)(n.li,{children:"The second parameter is also an object, containing the entry name and the entry value."}),"\n",(0,i.jsx)(n.li,{children:"The Function can return a new object as the final config."}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    htmlPlugin(config, { entryName, entryValue }) {\n      if (entryName === 'main') {\n        config.scriptLoading = 'blocking';\n      }\n    },\n  },\n};\n"})}),"\n",(0,i.jsxs)(n.h3,{id:"boolean-type",children:["Boolean Type",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#boolean-type",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["The built-in ",(0,i.jsx)(n.code,{children:"html-webpack-plugin"})," plugins can be disabled by set ",(0,i.jsx)(n.code,{children:"tools.htmlPlugin"})," to ",(0,i.jsx)(n.code,{children:"false"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    htmlPlugin: false,\n  },\n};\n"})}),"\n",(0,i.jsxs)(n.h3,{id:"disable-jscss-minify",children:["Disable JS/CSS minify",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#disable-jscss-minify",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"By default, Builder will compresses JavaScript/CSS code inside HTML during the production build to improve the page performance. This ability is often helpful when using custom templates or inserting custom scripts."}),"\n",(0,i.jsxs)(n.p,{children:["However, when ",(0,i.jsx)(n.code,{children:"output.enableInlineScripts"})," or ",(0,i.jsx)(n.code,{children:"output.enableInlineStyles"})," is turned on, inline JavaScript/CSS code will be repeatedly compressed, which will have a certain impact on build performance. You can modify the default minify behavior by modifying the ",(0,i.jsx)(n.code,{children:"tools.htmlPlugin.minify"})," configuration."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    htmlPlugin: config => {\n      if (typeof config.minify === 'object') {\n        config.minify.minifyJS = false;\n        config.minify.minifyCSS = false;\n      }\n    },\n  },\n};\n"})})]})}function r(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,s.useMDXComponents)(),e.components);return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}var o=r;r.__RSPRESS_PAGE_META={},r.__RSPRESS_PAGE_META["..%2F..%2Fbuilder-doc%2Fdocs%2Fen%2Fconfig%2Ftools%2FhtmlPlugin.md"]={toc:[{text:"Object Type",id:"object-type",depth:3},{text:"Function Type",id:"function-type",depth:3},{text:"Boolean Type",id:"boolean-type",depth:3},{text:"Disable JS/CSS minify",id:"disable-jscss-minify",depth:3}],title:""}},14388:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return c},frontmatter:function(){return a}});var i=t("9880"),s=t("23169"),l=t("21826");function r(e){let n=Object.assign({h1:"h1",a:"a"},(0,s.useMDXComponents)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.h1,{id:"toolshtmlplugin",children:["tools.htmlPlugin",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#toolshtmlplugin",children:"#"})]}),"\n","\n",(0,i.jsx)(l.default,{})]})}function o(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,s.useMDXComponents)(),e.components);return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(r,{...e})}):r(e)}var c=o;o.__RSPRESS_PAGE_META={},o.__RSPRESS_PAGE_META["en%2Fconfigure%2Fapp%2Ftools%2Fhtml-plugin.mdx"]={toc:[],title:"tools.htmlPlugin"};let a={sidebar_label:"htmlPlugin"}}}]);