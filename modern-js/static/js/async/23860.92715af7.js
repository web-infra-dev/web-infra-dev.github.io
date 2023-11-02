(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["23860"],{2249:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return i}});var d=t("9880"),o=t("23169");function s(e){let n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",pre:"pre",h3:"h3",a:"a",h4:"h4"},(0,o.useMDXComponents)(),e.components);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"Type:"})," ",(0,d.jsx)(n.code,{children:"string"})]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"Default:"})," ",(0,d.jsx)(n.code,{children:"'root'"})]}),"\n"]}),"\n",(0,d.jsxs)(n.p,{children:["By default, the ",(0,d.jsx)(n.code,{children:"root"})," element is included in the HTML template for component mounting, and the element id can be modified through ",(0,d.jsx)(n.code,{children:"mountId"}),"."]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-html",children:'<body>\n  <div id="root"></div>\n</body>\n'})}),"\n",(0,d.jsxs)(n.h3,{id:"example",children:["Example",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#example",children:"#"})]}),"\n",(0,d.jsxs)(n.p,{children:["Set the ",(0,d.jsx)(n.code,{children:"id"})," to ",(0,d.jsx)(n.code,{children:"app"}),":"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-js",children:"export default {\n  html: {\n    mountId: 'app',\n  },\n};\n"})}),"\n",(0,d.jsx)(n.p,{children:"After compilation:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-html",children:'<body>\n  <div id="app"></div>\n</body>\n'})}),"\n",(0,d.jsxs)(n.h3,{id:"notes",children:["Notes",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#notes",children:"#"})]}),"\n",(0,d.jsxs)(n.h4,{id:"update-relevant-code",children:["Update Relevant Code",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#update-relevant-code",children:"#"})]}),"\n",(0,d.jsxs)(n.p,{children:["After modifying ",(0,d.jsx)(n.code,{children:"mountId"}),", if there is logic in your code to obtain the ",(0,d.jsx)(n.code,{children:"root"})," root node, please update the corresponding value:"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-diff",children:"- const domNode = document.getElementById('root');\n+ const domNode = document.getElementById('app');\n\nReactDOM.createRoot(domNode).render(<App />);\n"})}),"\n",(0,d.jsxs)(n.h4,{id:"custom-templates",children:["Custom Templates",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#custom-templates",children:"#"})]}),"\n",(0,d.jsxs)(n.p,{children:["If you customized the HTML template, please make sure that the template contains ",(0,d.jsx)(n.code,{children:'<div id="<%= mountId %>"></div>'}),", otherwise the ",(0,d.jsx)(n.code,{children:"mountId"})," config will not take effect."]})]})}function r(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,o.useMDXComponents)(),e.components);return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(s,{...e})}):s(e)}var i=r;r.__RSPRESS_PAGE_META={},r.__RSPRESS_PAGE_META["..%2F..%2Fbuilder-doc%2Fdocs%2Fen%2Fconfig%2Fhtml%2FmountId.md"]={toc:[{text:"Example",id:"example",depth:3},{text:"Notes",id:"notes",depth:3},{text:"Update Relevant Code",id:"update-relevant-code",depth:4},{text:"Custom Templates",id:"custom-templates",depth:4}],title:""}},29553:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return c},frontmatter:function(){return a}});var d=t("9880"),o=t("23169"),s=t("2249");function r(e){let n=Object.assign({h1:"h1",a:"a"},(0,o.useMDXComponents)(),e.components);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.h1,{id:"htmlmountid",children:["html.mountId",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#htmlmountid",children:"#"})]}),"\n","\n",(0,d.jsx)(s.default,{})]})}function i(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,o.useMDXComponents)(),e.components);return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(r,{...e})}):r(e)}var c=i;i.__RSPRESS_PAGE_META={},i.__RSPRESS_PAGE_META["en%2Fconfigure%2Fapp%2Fhtml%2Fmount-id.mdx"]={toc:[],title:"html.mountId"};let a={sidebar_label:"mountId"}}}]);