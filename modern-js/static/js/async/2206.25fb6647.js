(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["2206"],{58735:function(e,s,n){"use strict";n.r(s),n.d(s,{default:function(){return l}});var r,i=n("15169"),t=n("43932"),c=n("9880"),a=n("23169");function d(e){var s=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",h3:"h3",a:"a",pre:"pre"},(0,a.useMDXComponents)(),e.components);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(s.ul,{children:["\n",(0,c.jsxs)(s.li,{children:[(0,c.jsx)(s.strong,{children:"Type:"})," ",(0,c.jsx)(s.code,{children:"boolean | string"})]}),"\n",(0,c.jsxs)(s.li,{children:[(0,c.jsx)(s.strong,{children:"Default:"})," ",(0,c.jsx)(s.code,{children:"'/'"})]}),"\n"]}),"\n",(0,c.jsx)(s.p,{children:"Set the URL prefix of static assets in the development environment."}),"\n",(0,c.jsxs)(s.p,{children:[(0,c.jsx)(s.code,{children:"assetPrefix"})," will affect the URLs of most of the static assets, including JavaScript files, CSS files, images, videos, etc. If an incorrect value is specified, you'll receive 404 errors while loading these resources."]}),"\n",(0,c.jsxs)(s.p,{children:["This config is only used in the development environment. In the production environment, please use the ",(0,c.jsx)(s.code,{children:"output.assetPrefix"})," to set the URL prefix."]}),"\n",(0,c.jsxs)(s.h3,{id:"boolean-type",children:["Boolean Type",(0,c.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#boolean-type",children:"#"})]}),"\n",(0,c.jsxs)(s.p,{children:["If ",(0,c.jsx)(s.code,{children:"assetPrefix"})," is set to ",(0,c.jsx)(s.code,{children:"true"}),", the URL prefix will be ",(0,c.jsx)(s.code,{children:"http://localhost:port/"}),":"]}),"\n",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{className:"language-js",children:"export default {\n  dev: {\n    assetPrefix: true,\n  },\n};\n"})}),"\n",(0,c.jsx)(s.p,{children:"The script URL will be:"}),"\n",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{className:"language-js",children:'<script defer src="http://localhost:8080/static/js/main.js"></script>\n'})}),"\n",(0,c.jsxs)(s.p,{children:["If ",(0,c.jsx)(s.code,{children:"assetPrefix"})," is set to ",(0,c.jsx)(s.code,{children:"false"})," or not set, ",(0,c.jsx)(s.code,{children:"/"})," is used as the default value."]}),"\n",(0,c.jsxs)(s.h3,{id:"string-type",children:["String type",(0,c.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#string-type",children:"#"})]}),"\n",(0,c.jsxs)(s.p,{children:["When the value of ",(0,c.jsx)(s.code,{children:"assetPrefix"})," is ",(0,c.jsx)(s.code,{children:"string"})," type, the string will be used as the URL prefix:"]}),"\n",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{className:"language-js",children:"export default {\n  dev: {\n    assetPrefix: 'http://example.com/assets/',\n  },\n};\n"})}),"\n",(0,c.jsx)(s.p,{children:"The script URL will be:"}),"\n",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{className:"language-js",children:'<script defer src="http://example.com/assets/static/js/main.js"></script>\n'})}),"\n",(0,c.jsxs)(s.h3,{id:"differences-from-native-configuration",children:["Differences from Native Configuration",(0,c.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#differences-from-native-configuration",children:"#"})]}),"\n",(0,c.jsxs)(s.p,{children:[(0,c.jsx)(s.code,{children:"dev.assetPrefix"})," corresponds to the following native configurations:"]}),"\n",(0,c.jsxs)(s.ul,{children:["\n",(0,c.jsxs)(s.li,{children:[(0,c.jsx)(s.a,{href:"https://webpack.js.org/guides/public-path/",target:"_blank",rel:"noopener noreferrer",children:"output.publicPath"})," configuration in webpack."]}),"\n",(0,c.jsxs)(s.li,{children:[(0,c.jsx)(s.a,{href:"https://www.rspack.dev/config/output.html#outputpublicpath",target:"_blank",rel:"noopener noreferrer",children:"output.publicPath"})," configuration in Rspack."]}),"\n"]}),"\n",(0,c.jsx)(s.p,{children:"The differences from the native configuration are as follows:"}),"\n",(0,c.jsxs)(s.ul,{children:["\n",(0,c.jsxs)(s.li,{children:[(0,c.jsx)(s.code,{children:"dev.assetPrefix"})," only takes effect in the development environment."]}),"\n",(0,c.jsxs)(s.li,{children:[(0,c.jsx)(s.code,{children:"dev.assetPrefix"})," automatically appends a trailing ",(0,c.jsx)(s.code,{children:"/"})," by default."]}),"\n",(0,c.jsxs)(s.li,{children:["The value of ",(0,c.jsx)(s.code,{children:"dev.assetPrefix"})," is written to the ",(0,c.jsx)(s.code,{children:"process.env.ASSET_PREFIX"})," environment variable."]}),"\n"]})]})}(r=globalThis).__RSPRESS_PAGE_META||(r.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["..%2F..%2Fbuilder-doc%2Fdocs%2Fen%2Fconfig%2Fdev%2FassetPrefix.md"]={toc:[{text:"Boolean Type",id:"boolean-type",depth:3},{text:"String type",id:"string-type",depth:3},{text:"Differences from Native Configuration",id:"differences-from-native-configuration",depth:3}],title:"",frontmatter:{}};var l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},s=Object.assign({},(0,a.useMDXComponents)(),e.components).wrapper;return s?(0,c.jsx)(s,(0,t._)((0,i._)({},e),{children:(0,c.jsx)(d,(0,i._)({},e))})):d(e)}},39492:function(e,s,n){"use strict";n.r(s),n.d(s,{default:function(){return o}});var r,i=n("15169"),t=n("43932"),c=n("9880"),a=n("23169"),d=n("58735");function l(e){var s=Object.assign({h1:"h1",a:"a",div:"div",p:"p"},(0,a.useMDXComponents)(),e.components);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(s.h1,{id:"devassetprefix",children:["dev.assetPrefix",(0,c.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#devassetprefix",children:"#"})]}),"\n",(0,c.jsxs)(s.div,{className:"rspress-directive tip",children:[(0,c.jsx)(s.div,{className:"rspress-directive-title",children:"TIP"}),(0,c.jsx)(s.div,{className:"rspress-directive-content",children:(0,c.jsxs)(s.p,{children:["This config is provided by Modern.js Builder, more detail can see ",(0,c.jsx)(s.a,{href:"https://modernjs.dev/builder/en/api/config-dev.html#devassetprefix",target:"_blank",rel:"noopener noreferrer",children:"dev.assetPrefix"}),".\n"]})})]}),"\n","\n",(0,c.jsx)(d.default,{})]})}(r=globalThis).__RSPRESS_PAGE_META||(r.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["en%2Fconfigure%2Fapp%2Fdev%2Fasset-prefix.mdx"]={toc:[],title:"dev.assetPrefix",frontmatter:{sidebar_label:"assetPrefix"}};var o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},s=Object.assign({},(0,a.useMDXComponents)(),e.components).wrapper;return s?(0,c.jsx)(s,(0,t._)((0,i._)({},e),{children:(0,c.jsx)(l,(0,i._)({},e))})):l(e)}}}]);