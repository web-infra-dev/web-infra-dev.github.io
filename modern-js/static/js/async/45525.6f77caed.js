/*! For license information please see 45525.6f77caed.js.LICENSE.txt */
(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["45525"],{54618:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return c}});var r=n("39980"),s=n("96954");function a(e){let t=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",pre:"pre",h4:"h4",a:"a",div:"div"},(0,s.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Type:"})," ",(0,r.jsx)(t.code,{children:"boolean | { key: string; cert: string }"})]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Default:"})," ",(0,r.jsx)(t.code,{children:"false"})]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"After configuring this option, you can enable HTTPS Dev Server, and disabling the HTTP Dev Server."}),"\n",(0,r.jsx)(t.p,{children:"HTTP:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"  > Local: http://localhost:8080/\n  > Network: http://192.168.0.1:8080/\n"})}),"\n",(0,r.jsx)(t.p,{children:"HTTPS:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"  > Local: https://localhost:8080/\n  > Network: https://192.168.0.1:8080/\n"})}),"\n",(0,r.jsxs)(t.h4,{id:"automatically-generate-certificates",children:["Automatically generate certificates",(0,r.jsx)(t.a,{className:"header-anchor","aria-hidden":"true",href:"#automatically-generate-certificates",children:"#"})]}),"\n",(0,r.jsxs)(t.p,{children:["You can directly set ",(0,r.jsx)(t.code,{children:"https"})," to ",(0,r.jsx)(t.code,{children:"true"}),", Builder will automatically generate the HTTPS certificate based on ",(0,r.jsx)(t.a,{href:"https://github.com/davewasmer/devcert",target:"_blank",rel:"noopener noreferrer",children:"devcert"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["When using this method, you need to manually install the ",(0,r.jsx)(t.a,{href:"https://github.com/davewasmer/devcert",target:"_blank",rel:"noopener noreferrer",children:"devcert"})," dependency in your project:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"# npm\nnpm install devcert@1.2.2 -D\n\n# yarn\nyarn add devcert@1.2.2 -D\n\n# pnpm\npnpm add devcert@1.2.2 -D\n"})}),"\n",(0,r.jsxs)(t.p,{children:["Then configure ",(0,r.jsx)(t.code,{children:"dev.https"})," to ",(0,r.jsx)(t.code,{children:"true"}),":"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:"export default {\n  dev: {\n    https: true,\n  },\n};\n"})}),"\n",(0,r.jsx)(t.p,{children:"The devcert has some limitations, it does not currently support IP addresses yet."}),"\n",(0,r.jsxs)(t.div,{className:"rspress-directive tip",children:[(0,r.jsx)(t.div,{className:"rspress-directive-title",children:"TIP"}),(0,r.jsx)(t.div,{className:"rspress-directive-content",children:(0,r.jsxs)(t.p,{children:["The https proxy automatically installs the certificate and needs root authority, please enter the password according to the prompt.",(0,r.jsx)(t.strong,{children:"The password is only used to trust the certificate, and will not be leaked or be used elsewhere"}),".\n"]})})]}),"\n",(0,r.jsxs)(t.h4,{id:"manually-set-the-certificate",children:["Manually set the certificate",(0,r.jsx)(t.a,{className:"header-anchor","aria-hidden":"true",href:"#manually-set-the-certificate",children:"#"})]}),"\n",(0,r.jsxs)(t.p,{children:["You can also manually pass in the certificate and the private key required in the ",(0,r.jsx)(t.code,{children:"dev.https"})," option. This parameter will be directly passed to the createServer method of the https module in Node.js."]}),"\n",(0,r.jsxs)(t.p,{children:["For details, please refer to ",(0,r.jsx)(t.a,{href:"https://nodejs.org/api/https.html#https_https_createserver_options_requestlistener",target:"_blank",rel:"noopener noreferrer",children:"https.createServer"}),"."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:"import fs from 'fs';\n\nexport default {\n  dev: {\n    https: {\n      key: fs.readFileSync('certificates/private.pem'),\n      cert: fs.readFileSync('certificates/public.pem'),\n    },\n  },\n};\n"})})]})}function i(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:t}=Object.assign({},(0,s.useMDXComponents)(),e.components);return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}var c=i;i.__RSPRESS_PAGE_META={},i.__RSPRESS_PAGE_META["..%2F..%2Fbuilder-doc%2Fdocs%2Fen%2Fconfig%2Fdev%2Fhttps.md"]={toc:[{text:"Automatically generate certificates",id:"automatically-generate-certificates",depth:4},{text:"Manually set the certificate",id:"manually-set-the-certificate",depth:4}],title:"",frontmatter:{}}},8066:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return l}});var r=n("39980"),s=n("96954"),a=n("54618");function i(e){let t=Object.assign({h1:"h1",a:"a"},(0,s.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.h1,{id:"devhttps",children:["dev.https",(0,r.jsx)(t.a,{className:"header-anchor","aria-hidden":"true",href:"#devhttps",children:"#"})]}),"\n","\n",(0,r.jsx)(a.default,{})]})}function c(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:t}=Object.assign({},(0,s.useMDXComponents)(),e.components);return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}var l=c;c.__RSPRESS_PAGE_META={},c.__RSPRESS_PAGE_META["en%2Fconfigure%2Fapp%2Fdev%2Fhttps.mdx"]={toc:[],title:"dev.https",frontmatter:{sidebar_label:"https"}}}}]);