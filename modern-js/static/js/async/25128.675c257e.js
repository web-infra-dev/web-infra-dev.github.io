(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["25128"],{51305:function(e,s,n){"use strict";n.r(s),n.d(s,{default:function(){return o}});var i=n("15169"),l=n("43932"),d=n("9880"),r=n("23169");function c(e){var s=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",div:"div",h3:"h3",a:"a",pre:"pre",h4:"h4"},(0,r.useMDXComponents)(),e.components);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(s.ul,{children:["\n",(0,d.jsxs)(s.li,{children:[(0,d.jsx)(s.strong,{children:"Type:"})," ",(0,d.jsx)(s.code,{children:"boolean"})]}),"\n",(0,d.jsxs)(s.li,{children:[(0,d.jsx)(s.strong,{children:"Default:"})," ",(0,d.jsx)(s.code,{children:"false"})]}),"\n"]}),"\n",(0,d.jsxs)(s.p,{children:["Whether to treat all ",(0,d.jsx)(s.code,{children:".css"})," files in the source directory as CSS Modules."]}),"\n",(0,d.jsxs)(s.p,{children:["By default, only the ",(0,d.jsx)(s.code,{children:"*.module.css"})," files are treated as CSS Modules. After enabling this config, all ",(0,d.jsx)(s.code,{children:"*.css"})," style files in the source directory will be regarded as CSS Modules."]}),"\n",(0,d.jsxs)(s.p,{children:[(0,d.jsx)(s.code,{children:".sass"}),", ",(0,d.jsx)(s.code,{children:".scss"})," and ",(0,d.jsx)(s.code,{children:".less"})," files are also affected by ",(0,d.jsx)(s.code,{children:"disableCssModuleExtension"}),"."]}),"\n",(0,d.jsxs)(s.div,{className:"rspress-directive tip",children:[(0,d.jsx)(s.div,{className:"rspress-directive-title",children:"TIP"}),(0,d.jsx)(s.div,{className:"rspress-directive-content",children:(0,d.jsxs)(s.p,{children:["We do not recommend enabling this config, because after enabling ",(0,d.jsx)(s.code,{children:"disableCssModuleExtension"}),", CSS Modules files and ordinary CSS files cannot be clearly distinguished, which is not conducive to long-term maintenance.\n"]})})]}),"\n",(0,d.jsxs)(s.h3,{id:"example",children:["Example",(0,d.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#example",children:"#"})]}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-js",children:"export default {\n  output: {\n    disableCssModuleExtension: true,\n  },\n};\n"})}),"\n",(0,d.jsxs)(s.h3,{id:"detailed",children:["Detailed",(0,d.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#detailed",children:"#"})]}),"\n",(0,d.jsx)(s.p,{children:"The following is a detailed explanation of the CSS Modules rules:"}),"\n",(0,d.jsxs)(s.h4,{id:"disablecssmoduleextension-is-false-default",children:["disableCssModuleExtension is false (default)",(0,d.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#disablecssmoduleextension-is-false-default",children:"#"})]}),"\n",(0,d.jsx)(s.p,{children:"The following files are treated as CSS Modules:"}),"\n",(0,d.jsxs)(s.ul,{children:["\n",(0,d.jsxs)(s.li,{children:["all ",(0,d.jsx)(s.code,{children:"*.module.css"})," files"]}),"\n"]}),"\n",(0,d.jsx)(s.p,{children:"The following files are treated as normal CSS:"}),"\n",(0,d.jsxs)(s.ul,{children:["\n",(0,d.jsxs)(s.li,{children:["all ",(0,d.jsx)(s.code,{children:"*.css"})," files (excluding ",(0,d.jsx)(s.code,{children:".module"}),")"]}),"\n",(0,d.jsxs)(s.li,{children:["all ",(0,d.jsx)(s.code,{children:"*.global.css"})," files"]}),"\n"]}),"\n",(0,d.jsxs)(s.h4,{id:"disablecssmoduleextension-is-true",children:["disableCssModuleExtension is true",(0,d.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#disablecssmoduleextension-is-true",children:"#"})]}),"\n",(0,d.jsx)(s.p,{children:"The following files are treated as CSS Modules:"}),"\n",(0,d.jsxs)(s.ul,{children:["\n",(0,d.jsxs)(s.li,{children:[(0,d.jsx)(s.code,{children:"*.css"})," and ",(0,d.jsx)(s.code,{children:"*.module.css"})," files in the source directory"]}),"\n",(0,d.jsxs)(s.li,{children:[(0,d.jsx)(s.code,{children:"*.module.css"})," files under node_modules"]}),"\n"]}),"\n",(0,d.jsx)(s.p,{children:"The following files are treated as normal CSS:"}),"\n",(0,d.jsxs)(s.ul,{children:["\n",(0,d.jsxs)(s.li,{children:["all ",(0,d.jsx)(s.code,{children:"*.global.css"})," files"]}),"\n",(0,d.jsxs)(s.li,{children:[(0,d.jsx)(s.code,{children:"*.css"})," files under node_modules (without ",(0,d.jsx)(s.code,{children:".module"}),")"]}),"\n"]}),"\n",(0,d.jsxs)(s.div,{className:"rspress-directive tip",children:[(0,d.jsx)(s.div,{className:"rspress-directive-title",children:"TIP"}),(0,d.jsx)(s.div,{className:"rspress-directive-content",children:(0,d.jsxs)(s.p,{children:["For CSS Modules files inside node_modules, please always use the ",(0,d.jsx)(s.code,{children:"*.module.css"})," suffix.\n"]})})]})]})}function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},s=Object.assign({},(0,r.useMDXComponents)(),e.components).wrapper;return s?(0,d.jsx)(s,(0,l._)((0,i._)({},e),{children:(0,d.jsx)(c,(0,i._)({},e))})):c(e)}var o=t;t.__RSPRESS_PAGE_META={},t.__RSPRESS_PAGE_META["..%2F..%2Fbuilder-doc%2Fdocs%2Fen%2Fconfig%2Foutput%2FdisableCssModuleExtension.md"]={toc:[{text:"Example",id:"example",depth:3},{text:"Detailed",id:"detailed",depth:3},{text:"disableCssModuleExtension is false (default)",id:"disablecssmoduleextension-is-false-default",depth:4},{text:"disableCssModuleExtension is true",id:"disablecssmoduleextension-is-true",depth:4}],title:""}},56675:function(e,s,n){"use strict";n.r(s),n.d(s,{default:function(){return a},frontmatter:function(){return h}});var i=n("15169"),l=n("43932"),d=n("9880"),r=n("23169"),c=n("51305");function t(e){var s=Object.assign({h1:"h1",a:"a",div:"div",p:"p"},(0,r.useMDXComponents)(),e.components);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(s.h1,{id:"outputdisablecssmoduleextension",children:["output.disableCssModuleExtension",(0,d.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#outputdisablecssmoduleextension",children:"#"})]}),"\n",(0,d.jsxs)(s.div,{className:"rspress-directive tip",children:[(0,d.jsx)(s.div,{className:"rspress-directive-title",children:"TIP"}),(0,d.jsx)(s.div,{className:"rspress-directive-content",children:(0,d.jsxs)(s.p,{children:["This config is provided by Modern.js Builder, more detail can see ",(0,d.jsx)(s.a,{href:"https://modernjs.dev/builder/en/api/config-output.html#outputdisablecssmoduleextension",target:"_blank",rel:"noopener noreferrer",children:"output.disableCssModuleExtension"}),".\n"]})})]}),"\n","\n",(0,d.jsx)(c.default,{})]})}function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},s=Object.assign({},(0,r.useMDXComponents)(),e.components).wrapper;return s?(0,d.jsx)(s,(0,l._)((0,i._)({},e),{children:(0,d.jsx)(t,(0,i._)({},e))})):t(e)}var a=o;o.__RSPRESS_PAGE_META={},o.__RSPRESS_PAGE_META["en%2Fconfigure%2Fapp%2Foutput%2Fdisable-css-module-extension.mdx"]={toc:[],title:"output.disableCssModuleExtension"};var h={sidebar_label:"disableCssModuleExtension"}}}]);