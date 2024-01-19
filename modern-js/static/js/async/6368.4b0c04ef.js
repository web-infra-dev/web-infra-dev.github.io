/*! For license information please see 6368.4b0c04ef.js.LICENSE.txt */
(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["6368"],{39597:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return o}});var t=r("39980"),s=r("96954");function c(e){let n=Object.assign({ul:"ul",li:"li",strong:"strong",pre:"pre",code:"code",p:"p",h4:"h4",a:"a",h3:"h3"},(0,s.useMDXComponents)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"Type:"})}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"type Nonce = string;\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Default:"})," ",(0,t.jsx)(n.code,{children:"undefined"})]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Add a random attribute value --- nonce, to the scripts resources introduced for HTML. This allows the browser to determine whether the script can be executed when it parses inline scripts with matching nonce values."}),"\n",(0,t.jsxs)(n.h4,{id:"introduce-nonce",children:["Introduce nonce",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#introduce-nonce",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:["The nonce mechanism plays a crucial role in Content Security Policy (CSP), enhancing webpage security. It allows developers to define a unique and random string value, i.e., nonce, for inline ",(0,t.jsx)(n.code,{children:"<script>"})," tags within CSP."]}),"\n",(0,t.jsx)(n.p,{children:"When the browser parses inline scripts with matching nonce values, it allows them to be executed or applied, otherwise CSP will prevent them from running. This effectively prevents potential Cross-Site Scripting (XSS) attacks. It's worth noting that a new nonce value should be generated each time the page is accessed."}),"\n",(0,t.jsxs)(n.p,{children:["For more information about nonce, you can check ",(0,t.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/nonce",target:"_blank",rel:"noopener noreferrer",children:"nonce - MDN"}),"\u3002"]}),"\n",(0,t.jsxs)(n.h3,{id:"example",children:["Example",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#example",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:["By default, ",(0,t.jsx)(n.code,{children:"nonce"})," is not enabled\uFF0CYou can define this value based on your needs:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"export default {\n  security: {\n    nonce: 'my-project-nonce',\n  },\n};\n"})}),"\n",(0,t.jsx)(n.p,{children:"Typically, we can define a fixed value in the project, and replace it with a random value on downstream servers such as Nginx, Web Server, gateway, etc."})]})}function i(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,s.useMDXComponents)(),e.components);return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}var o=i;i.__RSPRESS_PAGE_META={},i.__RSPRESS_PAGE_META["..%2F..%2Fbuilder-doc%2Fdocs%2Fen%2Fconfig%2Fsecurity%2Fnonce.md"]={toc:[{text:"Introduce nonce",id:"introduce-nonce",depth:4},{text:"Example",id:"example",depth:3}],title:"",frontmatter:{}}},80114:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return a}});var t=r("39980"),s=r("96954"),c=r("39597");function i(e){let n=Object.assign({h1:"h1",a:"a"},(0,s.useMDXComponents)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.h1,{id:"securitynonce",children:["security.nonce",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#securitynonce",children:"#"})]}),"\n","\n",(0,t.jsx)(c.default,{})]})}function o(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,s.useMDXComponents)(),e.components);return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(i,{...e})}):i(e)}var a=o;o.__RSPRESS_PAGE_META={},o.__RSPRESS_PAGE_META["en%2Fconfigure%2Fapp%2Fsecurity%2Fnonce.mdx"]={toc:[],title:"security.nonce",frontmatter:{sidebar_label:"nonce"}}}}]);