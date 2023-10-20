(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["96223"],{6998:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return d}});var s=r("15169"),i=r("43932"),t=r("9880"),c=r("23169");function o(e){var n=Object.assign({ul:"ul",li:"li",strong:"strong",pre:"pre",code:"code",p:"p",h4:"h4",a:"a",h3:"h3"},(0,c.useMDXComponents)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"Type:"})}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"type Nonce = string;\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Default:"})," ",(0,t.jsx)(n.code,{children:"undefined"})]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Add a random attribute value --- nonce, to the scripts resources introduced for HTML. This allows the browser to determine whether the script can be executed when it parses inline scripts with matching nonce values."}),"\n",(0,t.jsxs)(n.h4,{id:"introduce-nonce",children:["Introduce nonce",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#introduce-nonce",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:["The nonce mechanism plays a crucial role in Content Security Policy (CSP), enhancing webpage security. It allows developers to define a unique and random string value, i.e., nonce, for inline ",(0,t.jsx)(n.code,{children:"<script>"})," tags within CSP."]}),"\n",(0,t.jsx)(n.p,{children:"When the browser parses inline scripts with matching nonce values, it allows them to be executed or applied, otherwise CSP will prevent them from running. This effectively prevents potential Cross-Site Scripting (XSS) attacks. It's worth noting that a new nonce value should be generated each time the page is accessed."}),"\n",(0,t.jsxs)(n.p,{children:["For more information about nonce, you can check ",(0,t.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/nonce",target:"_blank",rel:"noopener noreferrer",children:"nonce - MDN"}),"\u3002"]}),"\n",(0,t.jsxs)(n.h3,{id:"example",children:["Example",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#example",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:["By default, ",(0,t.jsx)(n.code,{children:"nonce"})," is not enabled\uFF0CYou can define this value based on your needs:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"export default {\n  security: {\n    nonce: 'my-project-nonce',\n  },\n};\n"})}),"\n",(0,t.jsx)(n.p,{children:"Typically, we can define a fixed value in the project, and replace it with a random value on downstream servers such as Nginx, Web Server, gateway, etc."})]})}function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,c.useMDXComponents)(),e.components).wrapper;return n?(0,t.jsx)(n,(0,i._)((0,s._)({},e),{children:(0,t.jsx)(o,(0,s._)({},e))})):o(e)}var d=a;a.__RSPRESS_PAGE_META={},a.__RSPRESS_PAGE_META["..%2F..%2Fbuilder-doc%2Fdocs%2Fen%2Fconfig%2Fsecurity%2Fnonce.md"]={toc:[{text:"Introduce nonce",id:"introduce-nonce",depth:4},{text:"Example",id:"example",depth:3}],title:""}},80518:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return l},frontmatter:function(){return h}});var s=r("15169"),i=r("43932"),t=r("9880"),c=r("23169"),o=r("6998");function a(e){var n=Object.assign({h1:"h1",a:"a",div:"div",p:"p"},(0,c.useMDXComponents)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.h1,{id:"securitynonce",children:["security.nonce",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#securitynonce",children:"#"})]}),"\n",(0,t.jsxs)(n.div,{className:"rspress-directive tip",children:[(0,t.jsx)(n.div,{className:"rspress-directive-title",children:"TIP"}),(0,t.jsx)(n.div,{className:"rspress-directive-content",children:(0,t.jsxs)(n.p,{children:["This config is provided by Modern.js Builder, more detail can see ",(0,t.jsx)(n.a,{href:"https://modernjs.dev/builder/en/api/config-security.html#securitynonce",target:"_blank",rel:"noopener noreferrer",children:"security.nonce"}),".\n"]})})]}),"\n","\n",(0,t.jsx)(o.default,{})]})}function d(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,c.useMDXComponents)(),e.components).wrapper;return n?(0,t.jsx)(n,(0,i._)((0,s._)({},e),{children:(0,t.jsx)(a,(0,s._)({},e))})):a(e)}var l=d;d.__RSPRESS_PAGE_META={},d.__RSPRESS_PAGE_META["en%2Fconfigure%2Fapp%2Fsecurity%2Fnonce.mdx"]={toc:[],title:"security.nonce"};var h={sidebar_label:"nonce"}}}]);