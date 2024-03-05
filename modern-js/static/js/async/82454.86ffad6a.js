/*! For license information please see 82454.86ffad6a.js.LICENSE.txt */
(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["82454"],{2036:function(e,r,n){"use strict";n.r(r);var t=n("39980"),l=n("96954");function s(e){let r=Object.assign({h1:"h1",a:"a",ul:"ul",li:"li",strong:"strong",code:"code",p:"p",pre:"pre",h3:"h3"},(0,l.useMDXComponents)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.h1,{id:"devstarturl",children:["dev.startUrl",(0,t.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#devstarturl",children:"#"})]}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.strong,{children:"Type:"})," ",(0,t.jsx)(r.code,{children:"boolean | string | string[] | undefined"})]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.strong,{children:"Default:"})," ",(0,t.jsx)(r.code,{children:"undefined"})]}),"\n"]}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.code,{children:"dev.startUrl"})," is used to set the URL of the page that automatically opens in the browser when Dev Server starts."]}),"\n",(0,t.jsx)(r.p,{children:"By default, no page will be opened."}),"\n",(0,t.jsx)(r.p,{children:"You can set it to the following values:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-js",children:"export default {\n  dev: {\n    // Open the project's default preview page, equivalent to `http://localhost:<port>`\n    startUrl: true,\n    // Open the specified page\n    startUrl: 'http://localhost:8080',\n    // Open multiple pages\n    startUrl: ['http://localhost:8080', 'http://localhost:8080/about'],\n  },\n};\n"})}),"\n",(0,t.jsxs)(r.h3,{id:"port-placeholder",children:["Port placeholder",(0,t.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#port-placeholder",children:"#"})]}),"\n",(0,t.jsxs)(r.p,{children:["Since the port number may change, you can use the ",(0,t.jsx)(r.code,{children:"<port>"})," placeholder to refer to the current port number, and Builder will automatically replace the placeholder with the actual listening port number."]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-js",children:"export default {\n  dev: {\n    startUrl: 'http://localhost:<port>/home',\n  },\n};\n"})}),"\n",(0,t.jsxs)(r.h3,{id:"open-the-specified-browser",children:["Open the specified browser",(0,t.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#open-the-specified-browser",children:"#"})]}),"\n",(0,t.jsxs)(r.p,{children:["On MacOS, you can open the specified browser when Dev Server starts, by set environment variable ",(0,t.jsx)(r.code,{children:"BROWSER"}),", support values:"]}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:"Google Chrome Canary"}),"\n",(0,t.jsx)(r.li,{children:"Google Chrome Dev"}),"\n",(0,t.jsx)(r.li,{children:"Google Chrome Beta"}),"\n",(0,t.jsx)(r.li,{children:"Google Chrome"}),"\n",(0,t.jsx)(r.li,{children:"Microsoft Edge"}),"\n",(0,t.jsx)(r.li,{children:"Brave Browser"}),"\n",(0,t.jsx)(r.li,{children:"Vivaldi"}),"\n",(0,t.jsx)(r.li,{children:"Chromium"}),"\n"]})]})}function o(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:r}=Object.assign({},(0,l.useMDXComponents)(),e.components);return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(s,{...e})}):s(e)}r.default=o,o.__RSPRESS_PAGE_META={},o.__RSPRESS_PAGE_META["en%2Fconfigure%2Fapp%2Fdev%2Fstart-url.mdx"]={toc:[{text:"Port placeholder",id:"port-placeholder",depth:3},{text:"Open the specified browser",id:"open-the-specified-browser",depth:3}],title:"dev.startUrl",frontmatter:{sidebar_label:"startUrl"}}}}]);