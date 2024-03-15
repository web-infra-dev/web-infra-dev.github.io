/*! For license information please see 85011.d5051249.js.LICENSE.txt */
(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["85011"],{17610:function(e,s,n){"use strict";n.r(s);var i=n("39980"),r=n("96954");function t(e){let s=Object.assign({h1:"h1",a:"a",ul:"ul",li:"li",strong:"strong",code:"code",p:"p",h3:"h3",pre:"pre"},(0,r.useMDXComponents)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(s.h1,{id:"devassetprefix",children:["dev.assetPrefix",(0,i.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#devassetprefix",children:"#"})]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Type:"})," ",(0,i.jsx)(s.code,{children:"boolean | string"})]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Default:"})," ",(0,i.jsx)(s.code,{children:"'/'"})]}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:"Set the URL prefix of static assets in the development environment."}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"assetPrefix"})," will affect the URLs of most of the static assets, including JavaScript files, CSS files, images, videos, etc. If an incorrect value is specified, you'll receive 404 errors while loading these resources."]}),"\n",(0,i.jsxs)(s.p,{children:["This config is only used in the development environment. In the production environment, please use the ",(0,i.jsx)(s.code,{children:"output.assetPrefix"})," to set the URL prefix."]}),"\n",(0,i.jsxs)(s.h3,{id:"boolean-type",children:["Boolean Type",(0,i.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#boolean-type",children:"#"})]}),"\n",(0,i.jsxs)(s.p,{children:["If ",(0,i.jsx)(s.code,{children:"assetPrefix"})," is set to ",(0,i.jsx)(s.code,{children:"true"}),", the URL prefix will be ",(0,i.jsx)(s.code,{children:"http://localhost:port/"}),":"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-js",children:"export default {\n  dev: {\n    assetPrefix: true,\n  },\n};\n"})}),"\n",(0,i.jsx)(s.p,{children:"The script URL will be:"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-js",children:'<script defer src="http://localhost:8080/static/js/main.js"><\/script>\n'})}),"\n",(0,i.jsxs)(s.p,{children:["If ",(0,i.jsx)(s.code,{children:"assetPrefix"})," is set to ",(0,i.jsx)(s.code,{children:"false"})," or not set, ",(0,i.jsx)(s.code,{children:"/"})," is used as the default value."]}),"\n",(0,i.jsxs)(s.h3,{id:"string-type",children:["String type",(0,i.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#string-type",children:"#"})]}),"\n",(0,i.jsxs)(s.p,{children:["When the value of ",(0,i.jsx)(s.code,{children:"assetPrefix"})," is ",(0,i.jsx)(s.code,{children:"string"})," type, the string will be used as the URL prefix:"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-js",children:"export default {\n  dev: {\n    assetPrefix: 'http://example.com/assets/',\n  },\n};\n"})}),"\n",(0,i.jsx)(s.p,{children:"The script URL will be:"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-js",children:'<script defer src="http://example.com/assets/static/js/main.js"><\/script>\n'})}),"\n",(0,i.jsxs)(s.h3,{id:"differences-from-native-configuration",children:["Differences from Native Configuration",(0,i.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#differences-from-native-configuration",children:"#"})]}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"dev.assetPrefix"})," corresponds to the following native configurations:"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.a,{href:"https://webpack.js.org/guides/public-path/",target:"_blank",rel:"noopener noreferrer",children:"output.publicPath"})," configuration in webpack."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.a,{href:"https://www.rspack.dev/config/output.html#outputpublicpath",target:"_blank",rel:"noopener noreferrer",children:"output.publicPath"})," configuration in Rspack."]}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:"The differences from the native configuration are as follows:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"dev.assetPrefix"})," only takes effect in the development environment."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"dev.assetPrefix"})," automatically appends a trailing ",(0,i.jsx)(s.code,{children:"/"})," by default."]}),"\n",(0,i.jsxs)(s.li,{children:["The value of ",(0,i.jsx)(s.code,{children:"dev.assetPrefix"})," is written to the ",(0,i.jsx)(s.code,{children:"process.env.ASSET_PREFIX"})," environment variable."]}),"\n"]})]})}function c(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:s}=Object.assign({},(0,r.useMDXComponents)(),e.components);return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(t,{...e})}):t(e)}s.default=c,c.__RSPRESS_PAGE_META={},c.__RSPRESS_PAGE_META["en%2Fconfigure%2Fapp%2Fdev%2Fasset-prefix.mdx"]={toc:[{text:"Boolean Type",id:"boolean-type",depth:3},{text:"String type",id:"string-type",depth:3},{text:"Differences from Native Configuration",id:"differences-from-native-configuration",depth:3}],title:"dev.assetPrefix",frontmatter:{sidebar_label:"assetPrefix"}}}}]);