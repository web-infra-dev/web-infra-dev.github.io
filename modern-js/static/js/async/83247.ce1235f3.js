"use strict";(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["83247"],{40042:function(e,n,i){i.r(n),i.d(n,{default:function(){return o}});var t=i(39980),l=i(9580);function s(e){let n=Object.assign({h1:"h1",a:"a",ul:"ul",li:"li",strong:"strong",code:"code",pre:"pre",p:"p",h3:"h3"},(0,l.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.h1,{id:"toolshtmlplugin",children:["tools.htmlPlugin",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#toolshtmlplugin",children:"#"})]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Type:"})," ",(0,t.jsx)(n.code,{children:"false | Object | Function"})]}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"Default:"})}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"const defaultHtmlPluginOptions = {\n  inject, // corresponding to the html.inject config\n  favicon, // corresponding to html.favicon config\n  filename, // generated based on output.distPath and entryName\n  template, // defaults to the built-in HTML template path\n  templateParameters, // corresponding to the html.templateParameters config\n  chunks: [entryName],\n  minify: { // generated based on output.disableMinimize\n    removeComments: false,\n    useShortDoctype: true,\n    keepClosingSlash: true,\n    collapseWhitespace: true,\n    removeRedundantAttributes: true,\n    removeScriptTypeAttributes: true,\n    removeStyleLinkTypeAttributes: true,\n    removeEmptyAttributes: true,\n    minifyJS, // generated based on output.charset and tools.terser.terserOptions\n    minifyCSS: true,\n    minifyURLs: true,\n  },\n};\n"})}),"\n",(0,t.jsxs)(n.p,{children:["The configs of ",(0,t.jsx)(n.a,{href:"https://github.com/jantimon/html-webpack-plugin",target:"_blank",rel:"noopener noreferrer",children:"html-webpack-plugin"})," or ",(0,t.jsx)(n.a,{href:"https://github.com/rspack-contrib/html-rspack-plugin",target:"_blank",rel:"noopener noreferrer",children:"html-rspack-plugin"})," can be modified through ",(0,t.jsx)(n.code,{children:"tools.htmlPlugin"}),"."]}),"\n",(0,t.jsxs)(n.h3,{id:"disable-html",children:["Disable HTML",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#disable-html",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:["The built-in ",(0,t.jsx)(n.code,{children:"html-webpack-plugin"})," plugins can be disabled by set ",(0,t.jsx)(n.code,{children:"tools.htmlPlugin"})," to ",(0,t.jsx)(n.code,{children:"false"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    htmlPlugin: false,\n  },\n};\n"})}),"\n",(0,t.jsxs)(n.h3,{id:"disable-jscss-minify",children:["Disable JS/CSS minify",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#disable-jscss-minify",children:"#"})]}),"\n",(0,t.jsx)(n.p,{children:"By default, Builder will compresses JavaScript/CSS code inside HTML during the production build to improve the page performance. This ability is often helpful when using custom templates or inserting custom scripts."}),"\n",(0,t.jsxs)(n.p,{children:["However, when ",(0,t.jsx)(n.code,{children:"output.enableInlineScripts"})," or ",(0,t.jsx)(n.code,{children:"output.enableInlineStyles"})," is turned on, inline JavaScript/CSS code will be repeatedly compressed, which will have a certain impact on build performance. You can modify the default minify behavior by modifying the ",(0,t.jsx)(n.code,{children:"tools.htmlPlugin.minify"})," configuration."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    htmlPlugin: config => {\n      if (typeof config.minify === 'object') {\n        config.minify.minifyJS = false;\n        config.minify.minifyCSS = false;\n      }\n    },\n  },\n};\n"})}),"\n",(0,t.jsxs)(n.p,{children:["For detailed usage, please refer to ",(0,t.jsx)(n.a,{href:"https://rsbuild.dev/config/tools/html-plugin",target:"_blank",rel:"noopener noreferrer",children:"Rsbuild - tools.html"}),"."]})]})}function r(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,l.ah)(),e.components);return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(s,{...e})}):s(e)}let o=r;r.__RSPRESS_PAGE_META={},r.__RSPRESS_PAGE_META["en%2Fconfigure%2Fapp%2Ftools%2Fhtml-plugin.mdx"]={toc:[{text:"Disable HTML",id:"disable-html",depth:3},{text:"Disable JS/CSS minify",id:"disable-jscss-minify",depth:3}],title:"tools.htmlPlugin",frontmatter:{sidebar_label:"htmlPlugin"}}}}]);