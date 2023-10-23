(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["15564"],{25268:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return a}});var i=t("15169"),s=t("43932"),r=t("9880"),c=t("23169");function d(e){var n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",h4:"h4",a:"a",pre:"pre"},(0,c.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Type:"})," ",(0,r.jsx)(n.code,{children:"'head' | 'body' | 'true' | false"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Default:"})," ",(0,r.jsx)(n.code,{children:"'head'"})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Set the inject position of the ",(0,r.jsx)(n.code,{children:"<script>"})," tag."]}),"\n",(0,r.jsx)(n.p,{children:"Can be set to the following values:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"'head'"}),": The script tag will be inject inside the head tag."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"'body'"}),": The script tag is inject at the end of the body tag."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"true"}),": The result depends on the scriptLoading config of ",(0,r.jsx)(n.code,{children:"html-webpack-plugin"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"false"}),": script tags will not be injected."]}),"\n"]}),"\n",(0,r.jsxs)(n.h4,{id:"default-inject-position",children:["Default inject position",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#default-inject-position",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"The script tag is inside the head tag by default:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-html",children:'<html>\n  <head>\n    <title></title>\n    <script defer src="/static/js/runtime-main.js"></script>\n    <script defer src="/static/js/main.js"></script>\n    <link href="/static/css/main.css" rel="stylesheet" />\n  </head>\n  <body>\n    <div id="root"></div>\n  </body>\n</html>\n'})}),"\n",(0,r.jsxs)(n.h4,{id:"inject-into-body",children:["Inject into body",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#inject-into-body",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"Add the following config to inject script into the body tag:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"export default {\n  html: {\n    inject: 'body',\n  },\n};\n"})}),"\n",(0,r.jsx)(n.p,{children:"You will see that the script tag is generated at the end of the body tag:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-html",children:'<html>\n  <head>\n    <title></title>\n    <link href="/static/css/main.css" rel="stylesheet" />\n  </head>\n  <body>\n    <div id="root"></div>\n    <script defer src="/static/js/runtime-main.js"></script>\n    <script defer src="/static/js/main.js"></script>\n  </body>\n</html>\n'})})]})}function l(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,c.useMDXComponents)(),e.components).wrapper;return n?(0,r.jsx)(n,(0,s._)((0,i._)({},e),{children:(0,r.jsx)(d,(0,i._)({},e))})):d(e)}var a=l;l.__RSPRESS_PAGE_META={},l.__RSPRESS_PAGE_META["..%2F..%2Fbuilder-doc%2Fdocs%2Fen%2Fconfig%2Fhtml%2Finject.md"]={toc:[{text:"Default inject position",id:"default-inject-position",depth:4},{text:"Inject into body",id:"inject-into-body",depth:4}],title:""}},59214:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return h},frontmatter:function(){return o}});var i=t("15169"),s=t("43932"),r=t("9880"),c=t("23169"),d=t("25268");function l(e){var n=Object.assign({h1:"h1",a:"a",div:"div",p:"p"},(0,c.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"htmlinject",children:["html.inject",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#htmlinject",children:"#"})]}),"\n",(0,r.jsxs)(n.div,{className:"rspress-directive tip",children:[(0,r.jsx)(n.div,{className:"rspress-directive-title",children:"TIP"}),(0,r.jsx)(n.div,{className:"rspress-directive-content",children:(0,r.jsxs)(n.p,{children:["This config is provided by Modern.js Builder, more detail can see ",(0,r.jsx)(n.a,{href:"https://modernjs.dev/builder/en/api/config-html.html#htmlinject",target:"_blank",rel:"noopener noreferrer",children:"html.inject"}),".\n"]})})]}),"\n","\n",(0,r.jsx)(d.default,{})]})}function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,c.useMDXComponents)(),e.components).wrapper;return n?(0,r.jsx)(n,(0,s._)((0,i._)({},e),{children:(0,r.jsx)(l,(0,i._)({},e))})):l(e)}var h=a;a.__RSPRESS_PAGE_META={},a.__RSPRESS_PAGE_META["en%2Fconfigure%2Fapp%2Fhtml%2Finject.mdx"]={toc:[],title:"html.inject"};var o={sidebar_label:"inject"}}}]);