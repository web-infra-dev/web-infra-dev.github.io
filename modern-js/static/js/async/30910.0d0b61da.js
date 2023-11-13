(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["30910"],{75692:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return r}});var i=t("9880"),s=t("23169");function c(e){let n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",h4:"h4",a:"a",pre:"pre"},(0,s.useMDXComponents)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Type:"})," ",(0,i.jsx)(n.code,{children:"'head' | 'body' | 'true' | false"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Default:"})," ",(0,i.jsx)(n.code,{children:"'head'"})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Set the inject position of the ",(0,i.jsx)(n.code,{children:"<script>"})," tag."]}),"\n",(0,i.jsx)(n.p,{children:"Can be set to the following values:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"'head'"}),": The script tag will be inject inside the head tag."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"'body'"}),": The script tag is inject at the end of the body tag."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"true"}),": The result depends on the scriptLoading config of ",(0,i.jsx)(n.code,{children:"html-webpack-plugin"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"false"}),": script tags will not be injected."]}),"\n"]}),"\n",(0,i.jsxs)(n.h4,{id:"default-inject-position",children:["Default inject position",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#default-inject-position",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"The script tag is inside the head tag by default:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",children:'<html>\n  <head>\n    <title></title>\n    <script defer src="/static/js/runtime-main.js"></script>\n    <script defer src="/static/js/main.js"></script>\n    <link href="/static/css/main.css" rel="stylesheet" />\n  </head>\n  <body>\n    <div id="root"></div>\n  </body>\n</html>\n'})}),"\n",(0,i.jsxs)(n.h4,{id:"inject-into-body",children:["Inject into body",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#inject-into-body",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"Add the following config to inject script into the body tag:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"export default {\n  html: {\n    inject: 'body',\n  },\n};\n"})}),"\n",(0,i.jsx)(n.p,{children:"You will see that the script tag is generated at the end of the body tag:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",children:'<html>\n  <head>\n    <title></title>\n    <link href="/static/css/main.css" rel="stylesheet" />\n  </head>\n  <body>\n    <div id="root"></div>\n    <script defer src="/static/js/runtime-main.js"></script>\n    <script defer src="/static/js/main.js"></script>\n  </body>\n</html>\n'})})]})}function d(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,s.useMDXComponents)(),e.components);return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}var r=d;d.__RSPRESS_PAGE_META={},d.__RSPRESS_PAGE_META["..%2F..%2Fbuilder-doc%2Fdocs%2Fen%2Fconfig%2Fhtml%2Finject.md"]={toc:[{text:"Default inject position",id:"default-inject-position",depth:4},{text:"Inject into body",id:"inject-into-body",depth:4}],title:"",frontmatter:{}}},87936:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return l}});var i=t("9880"),s=t("23169"),c=t("75692");function d(e){let n=Object.assign({h1:"h1",a:"a"},(0,s.useMDXComponents)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.h1,{id:"htmlinject",children:["html.inject",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#htmlinject",children:"#"})]}),"\n","\n",(0,i.jsx)(c.default,{})]})}function r(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,s.useMDXComponents)(),e.components);return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}var l=r;r.__RSPRESS_PAGE_META={},r.__RSPRESS_PAGE_META["en%2Fconfigure%2Fapp%2Fhtml%2Finject.mdx"]={toc:[],title:"html.inject",frontmatter:{sidebar_label:"inject"}}}}]);