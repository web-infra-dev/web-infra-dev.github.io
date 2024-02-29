/*! For license information please see 47907.5835bbec.js.LICENSE.txt */
(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["47907"],{66909:function(e,n,s){"use strict";s.r(n);var i=s("39980"),t=s("96954");function r(e){let n=Object.assign({h1:"h1",a:"a",p:"p",ul:"ul",li:"li",strong:"strong",code:"code",h3:"h3",pre:"pre"},(0,t.useMDXComponents)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.h1,{id:"outputassetprefix",children:["output.assetPrefix",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#outputassetprefix",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:";"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Type:"})," ",(0,i.jsx)(n.code,{children:"string"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Default:"})," ",(0,i.jsx)(n.code,{children:"'/'"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"When using CDN in the production environment, you can use this option to set the URL prefix of static assets."}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"assetPrefix"})," will affect the URLs of most of the static assets, including JavaScript files, CSS files, images, videos, etc. If an incorrect value is specified, you'll receive 404 errors while loading these resources."]}),"\n",(0,i.jsxs)(n.p,{children:["This config is only used in the production environment. In the development environment, please use the ",(0,i.jsx)(n.code,{children:"dev.assetPrefix"})," to set the URL prefix."]}),"\n",(0,i.jsxs)(n.p,{children:["After setting, the URLs of JavaScript, CSS and other static files will be prefixed with ",(0,i.jsx)(n.code,{children:"output.assetPrefix"}),":"]}),"\n",(0,i.jsxs)(n.h3,{id:"example",children:["Example",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#example",children:"#"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"export default {\n  output: {\n    assetPrefix: 'https://cdn.example.com/assets/',\n  },\n};\n"})}),"\n",(0,i.jsx)(n.p,{children:"After building, you can see that the JS files are loaded from:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",children:'<script\n  defer\n  src="https://cdn.example.com/assets/static/js/main.ebc4ff4f.js"\n><\/script>\n'})}),"\n",(0,i.jsxs)(n.h3,{id:"differences-from-native-configuration",children:["Differences from Native Configuration",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#differences-from-native-configuration",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"output.assetPrefix"})," corresponds to the following native configurations:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://webpack.js.org/guides/public-path/",target:"_blank",rel:"noopener noreferrer",children:"output.publicPath"})," configuration in webpack."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://www.rspack.dev/config/output.html#outputpublicpath",target:"_blank",rel:"noopener noreferrer",children:"output.publicPath"})," configuration in Rspack."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"The differences from the native configuration are as follows:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"output.assetPrefix"})," only takes effect in the production environment."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"output.assetPrefix"})," automatically appends a trailing ",(0,i.jsx)(n.code,{children:"/"})," by default."]}),"\n",(0,i.jsxs)(n.li,{children:["The value of ",(0,i.jsx)(n.code,{children:"output.assetPrefix"})," is written to the ",(0,i.jsx)(n.code,{children:"process.env.ASSET_PREFIX"})," environment variable."]}),"\n"]})]})}function o(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,t.useMDXComponents)(),e.components);return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(r,{...e})}):r(e)}n.default=o,o.__RSPRESS_PAGE_META={},o.__RSPRESS_PAGE_META["en%2Fconfigure%2Fapp%2Foutput%2Fasset-prefix.mdx"]={toc:[{text:"Example",id:"example",depth:3},{text:"Differences from Native Configuration",id:"differences-from-native-configuration",depth:3}],title:"output.assetPrefix",frontmatter:{sidebar_label:"assetPrefix"}}}}]);