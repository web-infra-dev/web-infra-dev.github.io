/*! For license information please see 79546.e5bffc44.js.LICENSE.txt */
(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["79546"],{49083:function(e,n,r){"use strict";r.r(n);var i=r("39980"),s=r("96954");function t(e){let n=Object.assign({h1:"h1",a:"a",ul:"ul",li:"li",strong:"strong",code:"code",pre:"pre",p:"p",div:"div",h2:"h2",h3:"h3"},(0,s.useMDXComponents)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.h1,{id:"deploymicrofrontend",children:["deploy.microFrontend",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#deploymicrofrontend",children:"#"})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Type:"})," ",(0,i.jsx)(n.code,{children:"object"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Default:"})," ",(0,i.jsx)(n.code,{children:"{ enableHtmlEntry: true, externalBasicLibrary: false }"})]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"interface MicroFrontend {\n  enableHtmlEntry?: boolean;\n  externalBasicLibrary?: boolean;\n  moduleApp?: string;\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Developers can configure micro-frontend sub-application information using the ",(0,i.jsx)(n.code,{children:"deploy.microFrontend"})," object."]}),"\n",(0,i.jsxs)(n.div,{className:"rspress-directive caution",children:[(0,i.jsx)(n.div,{className:"rspress-directive-title",children:"CAUTION"}),(0,i.jsxs)(n.div,{className:"rspress-directive-content",children:[(0,i.jsxs)(n.p,{children:['To enable the "Micro Frontend" features, run ',(0,i.jsx)(n.code,{children:"pnpm run new"})," first."]}),"\n"]})]}),"\n",(0,i.jsxs)(n.h2,{id:"example",children:["Example",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#example",children:"#"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"export default defineConfig({\n  deploy: {\n    microFrontend: {\n      enableHtmlEntry: true,\n    },\n  },\n});\n"})}),"\n",(0,i.jsxs)(n.h2,{id:"configuration",children:["Configuration",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#configuration",children:"#"})]}),"\n",(0,i.jsxs)(n.h3,{id:"enablehtmlentry",children:["enableHtmlEntry",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#enablehtmlentry",children:"#"})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Type:"})," ",(0,i.jsx)(n.code,{children:"boolean"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Default:"})," ",(0,i.jsx)(n.code,{children:"true"})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Specifies whether to enable the HTML entry. By default, it is set to ",(0,i.jsx)(n.code,{children:"true"}),", which means the sub-application is built in ",(0,i.jsx)(n.code,{children:"HTML"})," mode. Garfish supports the ",(0,i.jsx)(n.code,{children:"html"})," entry, so you can enable this option to experience the corresponding features. When using the HTML entry, simply point the sub-application entry to the HTML file."]}),"\n",(0,i.jsxs)(n.p,{children:["Set it to ",(0,i.jsx)(n.code,{children:"false"})," to indicate that the sub-application is built as ",(0,i.jsx)(n.code,{children:"js"}),". After building the sub-application as ",(0,i.jsx)(n.code,{children:"js"}),", it cannot run independently. When using the ",(0,i.jsx)(n.code,{children:"JS"})," entry, point the entry file of the sub-application to the ",(0,i.jsx)(n.code,{children:"JS"})," file of the sub-application."]}),"\n",(0,i.jsxs)(n.h3,{id:"externalbasiclibrary",children:["externalBasicLibrary",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#externalbasiclibrary",children:"#"})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Type:"})," ",(0,i.jsx)(n.code,{children:"boolean"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Default:"})," ",(0,i.jsx)(n.code,{children:"false"})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Specifies whether to use the external base library. When set to ",(0,i.jsx)(n.code,{children:"true"}),", the current child application will be externalized for ",(0,i.jsx)(n.code,{children:"react"})," and ",(0,i.jsx)(n.code,{children:"react-dom"}),". The main application of Modern.js will automatically ",(0,i.jsx)(n.code,{children:"setExternal"})," these two base libraries. If you are using other frameworks, please add ",(0,i.jsx)(n.code,{children:"react"})," and ",(0,i.jsx)(n.code,{children:"react-dom"})," dependencies through ",(0,i.jsx)(n.code,{children:"Garfish.setExternal"}),"."]})]})}function l(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,s.useMDXComponents)(),e.components);return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(t,{...e})}):t(e)}n.default=l,l.__RSPRESS_PAGE_META={},l.__RSPRESS_PAGE_META["en%2Fconfigure%2Fapp%2Fdeploy%2FmicroFrontend.mdx"]={toc:[{text:"Example",id:"example",depth:2},{text:"Configuration",id:"configuration",depth:2},{text:"enableHtmlEntry",id:"enablehtmlentry",depth:3},{text:"externalBasicLibrary",id:"externalbasiclibrary",depth:3}],title:"deploy.microFrontend",frontmatter:{sidebar_label:"microFrontend"}}}}]);