(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["81069"],{54994:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return l}});var d,r=t("15169"),s=t("43932"),o=t("9880"),i=t("23169");function a(e){var n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",pre:"pre",h3:"h3",a:"a",h4:"h4"},(0,i.useMDXComponents)(),e.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Type:"})," ",(0,o.jsx)(n.code,{children:"string"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Default:"})," ",(0,o.jsx)(n.code,{children:"'root'"})]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["By default, the ",(0,o.jsx)(n.code,{children:"root"})," element is included in the HTML template for component mounting, and the element id can be modified through ",(0,o.jsx)(n.code,{children:"mountId"}),"."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-html",children:'<body>\n  <div id="root"></div>\n</body>\n'})}),"\n",(0,o.jsxs)(n.h3,{id:"example",children:["Example",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#example",children:"#"})]}),"\n",(0,o.jsxs)(n.p,{children:["Set the ",(0,o.jsx)(n.code,{children:"id"})," to ",(0,o.jsx)(n.code,{children:"app"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"export default {\n  html: {\n    mountId: 'app',\n  },\n};\n"})}),"\n",(0,o.jsx)(n.p,{children:"After compilation:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-html",children:'<body>\n  <div id="app"></div>\n</body>\n'})}),"\n",(0,o.jsxs)(n.h3,{id:"notes",children:["Notes",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#notes",children:"#"})]}),"\n",(0,o.jsxs)(n.h4,{id:"update-relevant-code",children:["Update Relevant Code",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#update-relevant-code",children:"#"})]}),"\n",(0,o.jsxs)(n.p,{children:["After modifying ",(0,o.jsx)(n.code,{children:"mountId"}),", if there is logic in your code to obtain the ",(0,o.jsx)(n.code,{children:"root"})," root node, please update the corresponding value:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-diff",children:"- const domNode = document.getElementById('root');\n+ const domNode = document.getElementById('app');\n\nReactDOM.createRoot(domNode).render(<App />);\n"})}),"\n",(0,o.jsxs)(n.h4,{id:"custom-templates",children:["Custom Templates",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#custom-templates",children:"#"})]}),"\n",(0,o.jsxs)(n.p,{children:["If you customized the HTML template, please make sure that the template contains ",(0,o.jsx)(n.code,{children:'<div id="<%= mountId %>"></div>'}),", otherwise the ",(0,o.jsx)(n.code,{children:"mountId"})," config will not take effect."]})]})}(d=globalThis).__RSPRESS_PAGE_META||(d.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["..%2F..%2Fbuilder-doc%2Fdocs%2Fen%2Fconfig%2Fhtml%2FmountId.md"]={toc:[{text:"Example",id:"example",depth:3},{text:"Notes",id:"notes",depth:3},{text:"Update Relevant Code",id:"update-relevant-code",depth:4},{text:"Custom Templates",id:"custom-templates",depth:4}],title:"",frontmatter:{}};var l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,i.useMDXComponents)(),e.components).wrapper;return n?(0,o.jsx)(n,(0,s._)((0,r._)({},e),{children:(0,o.jsx)(a,(0,r._)({},e))})):a(e)}},83248:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return c}});var d,r=t("15169"),s=t("43932"),o=t("9880"),i=t("23169"),a=t("54994");function l(e){var n=Object.assign({h1:"h1",a:"a",div:"div",p:"p"},(0,i.useMDXComponents)(),e.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.h1,{id:"htmlmountid",children:["html.mountId",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#htmlmountid",children:"#"})]}),"\n",(0,o.jsxs)(n.div,{className:"modern-directive tip",children:[(0,o.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,o.jsx)(n.div,{className:"modern-directive-content",children:(0,o.jsxs)(n.p,{children:["This config is provided by Modern.js Builder, more detail can see ",(0,o.jsx)(n.a,{href:"https://modernjs.dev/builder/en/api/config-html.html#htmlmountid",target:"_blank",rel:"noopener noreferrer",children:"html.mountId"}),".\n"]})})]}),"\n","\n",(0,o.jsx)(a.default,{})]})}(d=globalThis).__RSPRESS_PAGE_META||(d.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["en%2Fconfigure%2Fapp%2Fhtml%2Fmount-id.mdx"]={toc:[],title:"html.mountId",frontmatter:{sidebar_label:"mountId"}};var c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,i.useMDXComponents)(),e.components).wrapper;return n?(0,o.jsx)(n,(0,s._)((0,r._)({},e),{children:(0,o.jsx)(l,(0,r._)({},e))})):l(e)}}}]);