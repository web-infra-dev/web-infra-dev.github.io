/*! For license information please see 2181.226f0bf1.js.LICENSE.txt */
(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["2181"],{35513:function(e,n,d){"use strict";d.r(n);var t=d("39980"),o=d("9580");function s(e){let n=Object.assign({h1:"h1",a:"a",ul:"ul",li:"li",strong:"strong",code:"code",p:"p",pre:"pre",h3:"h3",h4:"h4"},(0,o.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.h1,{id:"htmlmountid",children:["html.mountId",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#htmlmountid",children:"#"})]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Type:"})," ",(0,t.jsx)(n.code,{children:"string"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Default:"})," ",(0,t.jsx)(n.code,{children:"'root'"})]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["By default, the ",(0,t.jsx)(n.code,{children:"root"})," element is included in the HTML template for component mounting, and the element id can be modified through ",(0,t.jsx)(n.code,{children:"mountId"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-html",children:'<body>\n  <div id="root"></div>\n</body>\n'})}),"\n",(0,t.jsxs)(n.h3,{id:"example",children:["Example",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#example",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:["Set the ",(0,t.jsx)(n.code,{children:"id"})," to ",(0,t.jsx)(n.code,{children:"app"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"export default {\n  html: {\n    mountId: 'app',\n  },\n};\n"})}),"\n",(0,t.jsx)(n.p,{children:"After compilation:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-html",children:'<body>\n  <div id="app"></div>\n</body>\n'})}),"\n",(0,t.jsxs)(n.h3,{id:"notes",children:["Notes",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#notes",children:"#"})]}),"\n",(0,t.jsxs)(n.h4,{id:"update-relevant-code",children:["Update Relevant Code",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#update-relevant-code",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:["After modifying ",(0,t.jsx)(n.code,{children:"mountId"}),", if there is logic in your code to obtain the ",(0,t.jsx)(n.code,{children:"root"})," root node, please update the corresponding value:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-diff",children:"- const domNode = document.getElementById('root');\n+ const domNode = document.getElementById('app');\n\nReactDOM.createRoot(domNode).render(<App />);\n"})}),"\n",(0,t.jsxs)(n.h4,{id:"custom-templates",children:["Custom Templates",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#custom-templates",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:["If you customized the HTML template, please make sure that the template contains ",(0,t.jsx)(n.code,{children:'<div id="<%= mountId %>"></div>'}),", otherwise the ",(0,t.jsx)(n.code,{children:"mountId"})," config will not take effect."]})]})}function r(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,o.ah)(),e.components);return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(s,{...e})}):s(e)}n.default=r,r.__RSPRESS_PAGE_META={},r.__RSPRESS_PAGE_META["en%2Fconfigure%2Fapp%2Fhtml%2Fmount-id.mdx"]={toc:[{text:"Example",id:"example",depth:3},{text:"Notes",id:"notes",depth:3},{text:"Update Relevant Code",id:"update-relevant-code",depth:4},{text:"Custom Templates",id:"custom-templates",depth:4}],title:"html.mountId",frontmatter:{sidebar_label:"mountId"}}}}]);