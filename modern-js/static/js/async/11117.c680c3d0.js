(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["11117"],{14653:function(e,n,s){"use strict";s.r(n),s.d(n,{default:function(){return a}});var r=s("15169"),i=s("43932"),d=s("9880"),t=s("23169");function c(e){var n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",h3:"h3",a:"a",pre:"pre",div:"div"},(0,t.useMDXComponents)(),e.components);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"Type:"})," ",(0,d.jsx)(n.code,{children:"'defer' | 'blocking' | 'module'"})]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"Default:"})," ",(0,d.jsx)(n.code,{children:"'defer'"})]}),"\n"]}),"\n",(0,d.jsxs)(n.p,{children:["Used to set how ",(0,d.jsx)(n.code,{children:"<script>"})," tags are loaded."]}),"\n",(0,d.jsxs)(n.h3,{id:"defer",children:["defer",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#defer",children:"#"})]}),"\n",(0,d.jsxs)(n.p,{children:["By default, the ",(0,d.jsx)(n.code,{children:"<script>"})," tag generated by Builder will automatically set the ",(0,d.jsx)(n.code,{children:"defer"})," attribute to avoid blocking the parsing and rendering of the page."]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-html",children:'<head>\n  <script defer src="/static/js/main.js"></script>\n</head>\n<body></body>\n'})}),"\n",(0,d.jsxs)(n.div,{className:"rspress-directive tip",children:[(0,d.jsx)(n.div,{className:"rspress-directive-title",children:"TIP"}),(0,d.jsx)(n.div,{className:"rspress-directive-content",children:(0,d.jsxs)(n.p,{children:["When the browser encounters a ",(0,d.jsx)(n.code,{children:"<script>"})," tag with the defer attribute, it will download the script file asynchronously without blocking the parsing and rendering of the page. After the page is parsed and rendered, the browser executes the ",(0,d.jsx)(n.code,{children:"<script>"})," tags in the order they appear in the document.\n"]})})]}),"\n",(0,d.jsxs)(n.h3,{id:"blocking",children:["blocking",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#blocking",children:"#"})]}),"\n",(0,d.jsxs)(n.p,{children:["Setting ",(0,d.jsx)(n.code,{children:"scriptLoading"})," to ",(0,d.jsx)(n.code,{children:"blocking"})," will remove the ",(0,d.jsx)(n.code,{children:"defer"})," attribute, and the script is executed synchronously, which means it will block the browser's parsing and rendering process until the script file is downloaded and executed."]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-js",children:"export default {\n  html: {\n    inject: 'body',\n    scriptLoading: 'blocking',\n  },\n};\n"})}),"\n",(0,d.jsxs)(n.p,{children:["When you need to set ",(0,d.jsx)(n.code,{children:"blocking"}),", it is recommended to set ",(0,d.jsx)(n.code,{children:"html.inject"})," to ",(0,d.jsx)(n.code,{children:"'body'"})," to avoid page rendering being blocked."]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-html",children:'<head></head>\n<body>\n  <script src="/static/js/main.js"></script>\n</body>\n'})}),"\n",(0,d.jsxs)(n.h3,{id:"module",children:["module",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#module",children:"#"})]}),"\n",(0,d.jsxs)(n.p,{children:["When ",(0,d.jsx)(n.code,{children:"scriptLoading"})," is set to ",(0,d.jsx)(n.code,{children:"module"}),", the script can support ESModule syntax, and the browser will automatically delay the execution of these scripts by default, which is similar to ",(0,d.jsx)(n.code,{children:"defer"}),"."]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-js",children:"export default {\n  html: {\n    scriptLoading: 'module',\n  },\n};\n"})}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-html",children:'<head>\n  <script type="module" src="/static/js/main.js"></script>\n</head>\n<body></body>\n'})})]})}function l(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,t.useMDXComponents)(),e.components).wrapper;return n?(0,d.jsx)(n,(0,i._)((0,r._)({},e),{children:(0,d.jsx)(c,(0,r._)({},e))})):c(e)}var a=l;l.__RSPRESS_PAGE_META={},l.__RSPRESS_PAGE_META["..%2F..%2Fbuilder-doc%2Fdocs%2Fen%2Fconfig%2Fhtml%2FscriptLoading.md"]={toc:[{text:"defer",id:"defer",depth:3},{text:"blocking",id:"blocking",depth:3},{text:"module",id:"module",depth:3}],title:""}},2082:function(e,n,s){"use strict";s.r(n),s.d(n,{default:function(){return o},frontmatter:function(){return h}});var r=s("15169"),i=s("43932"),d=s("9880"),t=s("23169"),c=s("14653");function l(e){var n=Object.assign({h1:"h1",a:"a",div:"div",p:"p"},(0,t.useMDXComponents)(),e.components);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.h1,{id:"htmlscriptloading",children:["html.scriptLoading",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#htmlscriptloading",children:"#"})]}),"\n",(0,d.jsxs)(n.div,{className:"rspress-directive tip",children:[(0,d.jsx)(n.div,{className:"rspress-directive-title",children:"TIP"}),(0,d.jsx)(n.div,{className:"rspress-directive-content",children:(0,d.jsxs)(n.p,{children:["This config is provided by Modern.js Builder, more detail can see ",(0,d.jsx)(n.a,{href:"https://modernjs.dev/builder/en/api/config-html.html#htmlscriptloading",target:"_blank",rel:"noopener noreferrer",children:"html.scriptLoading"}),".\n"]})})]}),"\n","\n",(0,d.jsx)(c.default,{})]})}function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,t.useMDXComponents)(),e.components).wrapper;return n?(0,d.jsx)(n,(0,i._)((0,r._)({},e),{children:(0,d.jsx)(l,(0,r._)({},e))})):l(e)}var o=a;a.__RSPRESS_PAGE_META={},a.__RSPRESS_PAGE_META["en%2Fconfigure%2Fapp%2Fhtml%2Fscript-loading.mdx"]={toc:[],title:"html.scriptLoading"};var h={sidebar_label:"scriptLoading"}}}]);