(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["50163"],{93124:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return c}});var s=t("9880"),i=t("23169");function r(e){let n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",h3:"h3",a:"a",pre:"pre"},(0,i.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Type:"})," ",(0,s.jsx)(n.code,{children:"string"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Default:"})," ",(0,s.jsx)(n.code,{children:"'/'"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"When using CDN in the production environment, you can use this option to set the URL prefix of static assets."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"assetPrefix"})," will affect the URLs of most of the static assets, including JavaScript files, CSS files, images, videos, etc. If an incorrect value is specified, you'll receive 404 errors while loading these resources."]}),"\n",(0,s.jsxs)(n.p,{children:["This config is only used in the production environment. In the development environment, please use the ",(0,s.jsx)(n.code,{children:"dev.assetPrefix"})," to set the URL prefix."]}),"\n",(0,s.jsxs)(n.p,{children:["After setting, the URLs of JavaScript, CSS and other static files will be prefixed with ",(0,s.jsx)(n.code,{children:"output.assetPrefix"}),":"]}),"\n",(0,s.jsxs)(n.h3,{id:"example",children:["Example",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#example",children:"#"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"export default {\n  output: {\n    assetPrefix: 'https://cdn.example.com/assets/',\n  },\n};\n"})}),"\n",(0,s.jsx)(n.p,{children:"After building, you can see that the JS files are loaded from:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",children:'<script\n  defer\n  src="https://cdn.example.com/assets/static/js/main.ebc4ff4f.js"\n></script>\n'})}),"\n",(0,s.jsxs)(n.h3,{id:"differences-from-native-configuration",children:["Differences from Native Configuration",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#differences-from-native-configuration",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"output.assetPrefix"})," corresponds to the following native configurations:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://webpack.js.org/guides/public-path/",target:"_blank",rel:"noopener noreferrer",children:"output.publicPath"})," configuration in webpack."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://www.rspack.dev/config/output.html#outputpublicpath",target:"_blank",rel:"noopener noreferrer",children:"output.publicPath"})," configuration in Rspack."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"The differences from the native configuration are as follows:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"output.assetPrefix"})," only takes effect in the production environment."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"output.assetPrefix"})," automatically appends a trailing ",(0,s.jsx)(n.code,{children:"/"})," by default."]}),"\n",(0,s.jsxs)(n.li,{children:["The value of ",(0,s.jsx)(n.code,{children:"output.assetPrefix"})," is written to the ",(0,s.jsx)(n.code,{children:"process.env.ASSET_PREFIX"})," environment variable."]}),"\n"]})]})}function o(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,i.useMDXComponents)(),e.components);return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(r,{...e})}):r(e)}var c=o;o.__RSPRESS_PAGE_META={},o.__RSPRESS_PAGE_META["..%2F..%2Fbuilder-doc%2Fdocs%2Fen%2Fconfig%2Foutput%2FassetPrefix.md"]={toc:[{text:"Example",id:"example",depth:3},{text:"Differences from Native Configuration",id:"differences-from-native-configuration",depth:3}],title:""}},37975:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return a},frontmatter:function(){return l}});var s=t("9880"),i=t("23169"),r=t("93124");function o(e){let n=Object.assign({h1:"h1",a:"a"},(0,i.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h1,{id:"outputassetprefix",children:["output.assetPrefix",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#outputassetprefix",children:"#"})]}),"\n","\n",(0,s.jsx)(r.default,{})]})}function c(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,i.useMDXComponents)(),e.components);return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}var a=c;c.__RSPRESS_PAGE_META={},c.__RSPRESS_PAGE_META["en%2Fconfigure%2Fapp%2Foutput%2Fasset-prefix.mdx"]={toc:[],title:"output.assetPrefix"};let l={sidebar_label:"assetPrefix"}}}]);