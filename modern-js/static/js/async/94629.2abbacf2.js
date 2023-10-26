(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["94629"],{22547:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return h},frontmatter:function(){return l}});var t=r("15169"),o=r("43932"),d=r("9880"),s=r("23169");function i(e){var n=Object.assign({h1:"h1",a:"a",ul:"ul",li:"li",strong:"strong",code:"code",p:"p",pre:"pre",h3:"h3"},(0,s.useMDXComponents)(),e.components);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.h1,{id:"serverport",children:["server.port",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#serverport",children:"#"})]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"Type:"})," ",(0,d.jsx)(n.code,{children:"number"})]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"Default:"})," ",(0,d.jsx)(n.code,{children:"8080"})]}),"\n"]}),"\n",(0,d.jsxs)(n.p,{children:["When running the ",(0,d.jsx)(n.code,{children:"dev"}),", ",(0,d.jsx)(n.code,{children:"start"}),", and ",(0,d.jsx)(n.code,{children:"serve"})," commands, Modern.js will start with ",(0,d.jsx)(n.code,{children:"8080"})," as the default port and automatically increase the port number when the port is occupied. You can use this configuration to modify the port number that the Server starts with:"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-js",meta:'title="modern.config.ts"',children:"export default defineConfig({\n  server: {\n    port: 3000,\n  },\n});\n"})}),"\n",(0,d.jsxs)(n.h3,{id:"difference-betweenserverport-anddevport",children:["Difference between",(0,d.jsx)(n.code,{children:"server.port"})," and",(0,d.jsx)(n.code,{children:"dev.port"}),(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#difference-betweenserverport-anddevport",children:"#"})]}),"\n",(0,d.jsxs)(n.p,{children:["In most cases, we recommend using ",(0,d.jsx)(n.code,{children:"server.port"})," instead of ",(0,d.jsx)(n.code,{children:"dev.port"})," to set the port number, and the differences between them are as follows:"]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"dev.port"})," only works in the development environment, while ",(0,d.jsx)(n.code,{children:"server.port"})," works in both the development and production environments."]}),"\n",(0,d.jsxs)(n.li,{children:["In the development environment, ",(0,d.jsx)(n.code,{children:"dev.port"})," has a higher priority than ",(0,d.jsx)(n.code,{children:"server.port"}),"."]}),"\n"]}),"\n",(0,d.jsxs)(n.p,{children:["When you set both ",(0,d.jsx)(n.code,{children:"dev.port"})," and ",(0,d.jsx)(n.code,{children:"server.port"}),", ",(0,d.jsx)(n.code,{children:"dev.port"})," will take effect in the development environment, and ",(0,d.jsx)(n.code,{children:"server.port"})," will take effect in the production environment. For example, in the following example, the port number listened to in the development environment is ",(0,d.jsx)(n.code,{children:"3001"}),", and the port number listened to in the production environment is ",(0,d.jsx)(n.code,{children:"3002"}),"."]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"export default defineConfig({\n  dev: {\n    port: 3001,\n  },\n  server: {\n    port: 3002,\n  },\n});\n"})})]})}function c(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,s.useMDXComponents)(),e.components).wrapper;return n?(0,d.jsx)(n,(0,o._)((0,t._)({},e),{children:(0,d.jsx)(i,(0,t._)({},e))})):i(e)}var h=c;c.__RSPRESS_PAGE_META={},c.__RSPRESS_PAGE_META["en%2Fconfigure%2Fapp%2Fserver%2Fport.mdx"]={toc:[{text:"Difference between server.port and dev.port",id:"difference-between-serverport-and-devport",depth:3}],title:"server.port"};var l={sidebar_label:"port"}}}]);