(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["29697"],{46683:function(e,n,i){"use strict";i.r(n),i.d(n,{default:function(){return c}});var t=i("15169"),s=i("43932"),r=i("9880"),l=i("23169");function o(e){var n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",pre:"pre",p:"p",a:"a",h3:"h3"},(0,l.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Type:"})," ",(0,r.jsx)(n.code,{children:"false | Object | Function"})]}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"Default:"})}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"const defaultHtmlPluginOptions = {\n  inject, // corresponding to the html.inject config\n  favicon, // corresponding to html.favicon config\n  filename, // generated based on output.distPath and entryName\n  template, // defaults to the built-in HTML template path\n  templateParameters, // corresponding to the html.templateParameters config\n  chunks: [entryName],\n  minify: { // generated based on output.disableMinimize\n    removeComments: false,\n    useShortDoctype: true,\n    keepClosingSlash: true,\n    collapseWhitespace: true,\n    removeRedundantAttributes: true,\n    removeScriptTypeAttributes: true,\n    removeStyleLinkTypeAttributes: true,\n    removeEmptyAttributes: true,\n    minifyJS, // generated based on output.charset and tools.terser.terserOptions\n    minifyCSS: true,\n    minifyURLs: true,\n  },\n};\n"})}),"\n",(0,r.jsxs)(n.p,{children:["The configs of ",(0,r.jsx)(n.a,{href:"https://github.com/jantimon/html-webpack-plugin",target:"_blank",rel:"noopener noreferrer",children:"html-webpack-plugin"})," or ",(0,r.jsx)(n.a,{href:"https://github.com/web-infra-dev/rspack/tree/main/packages/rspack-plugin-html",target:"_blank",rel:"noopener noreferrer",children:"@rspack/plugin-html"})," can be modified through ",(0,r.jsx)(n.code,{children:"tools.htmlPlugin"}),"."]}),"\n",(0,r.jsxs)(n.h3,{id:"object-type",children:["Object Type",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#object-type",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["When ",(0,r.jsx)(n.code,{children:"tools.htmlPlugin"})," is ",(0,r.jsx)(n.code,{children:"Object"})," type, the value will be merged with the default config via ",(0,r.jsx)(n.code,{children:"Object.assign"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    htmlPlugin: {\n      scriptLoading: 'blocking',\n    },\n  },\n};\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"function-type",children:["Function Type",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#function-type",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["When ",(0,r.jsx)(n.code,{children:"tools.htmlPlugin"})," is a Function:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"The first parameter is the default config, which can be modified directly."}),"\n",(0,r.jsx)(n.li,{children:"The second parameter is also an object, containing the entry name and the entry value."}),"\n",(0,r.jsx)(n.li,{children:"The Function can return a new object as the final config."}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    htmlPlugin(config, { entryName, entryValue }) {\n      if (entryName === 'main') {\n        config.scriptLoading = 'blocking';\n      }\n    },\n  },\n};\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"boolean-type",children:["Boolean Type",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#boolean-type",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["The built-in ",(0,r.jsx)(n.code,{children:"html-webpack-plugin"})," plugins can be disabled by set ",(0,r.jsx)(n.code,{children:"tools.htmlPlugin"})," to ",(0,r.jsx)(n.code,{children:"false"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    htmlPlugin: false,\n  },\n};\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"disable-jscss-minify",children:["Disable JS/CSS minify",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#disable-jscss-minify",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"By default, Builder will compresses JavaScript/CSS code inside HTML during the production build to improve the page performance. This ability is often helpful when using custom templates or inserting custom scripts."}),"\n",(0,r.jsxs)(n.p,{children:["However, when ",(0,r.jsx)(n.code,{children:"output.enableInlineScripts"})," or ",(0,r.jsx)(n.code,{children:"output.enableInlineStyles"})," is turned on, inline JavaScript/CSS code will be repeatedly compressed, which will have a certain impact on build performance. You can modify the default minify behavior by modifying the ",(0,r.jsx)(n.code,{children:"tools.htmlPlugin.minify"})," configuration."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    htmlPlugin: config => {\n      if (typeof config.minify === 'object') {\n        config.minify.minifyJS = false;\n        config.minify.minifyCSS = false;\n      }\n    },\n  },\n};\n"})})]})}function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,l.useMDXComponents)(),e.components).wrapper;return n?(0,r.jsx)(n,(0,s._)((0,t._)({},e),{children:(0,r.jsx)(o,(0,t._)({},e))})):o(e)}var c=a;a.__RSPRESS_PAGE_META={},a.__RSPRESS_PAGE_META["..%2F..%2Fbuilder-doc%2Fdocs%2Fen%2Fconfig%2Ftools%2FhtmlPlugin.md"]={toc:[{text:"Object Type",id:"object-type",depth:3},{text:"Function Type",id:"function-type",depth:3},{text:"Boolean Type",id:"boolean-type",depth:3},{text:"Disable JS/CSS minify",id:"disable-jscss-minify",depth:3}],title:""}},10924:function(e,n,i){"use strict";i.r(n),i.d(n,{default:function(){return d},frontmatter:function(){return h}});var t=i("15169"),s=i("43932"),r=i("9880"),l=i("23169"),o=i("46683");function a(e){var n=Object.assign({h1:"h1",a:"a",div:"div",p:"p"},(0,l.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"toolshtmlplugin",children:["tools.htmlPlugin",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#toolshtmlplugin",children:"#"})]}),"\n",(0,r.jsxs)(n.div,{className:"rspress-directive tip",children:[(0,r.jsx)(n.div,{className:"rspress-directive-title",children:"TIP"}),(0,r.jsx)(n.div,{className:"rspress-directive-content",children:(0,r.jsxs)(n.p,{children:["This config is provided by Modern.js Builder, more detail can see ",(0,r.jsx)(n.a,{href:"https://modernjs.dev/builder/en/api/config-tools.html#toolshtmlplugin",target:"_blank",rel:"noopener noreferrer",children:"tools.htmlPlugin"}),".\n"]})})]}),"\n","\n",(0,r.jsx)(o.default,{})]})}function c(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,l.useMDXComponents)(),e.components).wrapper;return n?(0,r.jsx)(n,(0,s._)((0,t._)({},e),{children:(0,r.jsx)(a,(0,t._)({},e))})):a(e)}var d=c;c.__RSPRESS_PAGE_META={},c.__RSPRESS_PAGE_META["en%2Fconfigure%2Fapp%2Ftools%2Fhtml-plugin.mdx"]={toc:[],title:"tools.htmlPlugin"};var h={sidebar_label:"htmlPlugin"}}}]);