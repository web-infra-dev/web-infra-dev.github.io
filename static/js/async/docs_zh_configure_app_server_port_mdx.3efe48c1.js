(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_configure_app_server_port_mdx"],{93122:function(e,r,n){"use strict";n.r(r),n.d(r,{default:function(){return l}});var s,d=n("15169"),c=n("43932"),o=n("9880"),i=n("23169");function t(e){var r=Object.assign({h1:"h1",a:"a",ul:"ul",li:"li",strong:"strong",code:"code",p:"p",pre:"pre",h3:"h3"},(0,i.useMDXComponents)(),e.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(r.h1,{id:"serverport",children:["server.port",(0,o.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#serverport",children:"#"})]}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.strong,{children:"类型："})," ",(0,o.jsx)(r.code,{children:"number"})]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.strong,{children:"默认值："})," ",(0,o.jsx)(r.code,{children:"8080"})]}),"\n"]}),"\n",(0,o.jsxs)(r.p,{children:["Modern.js 在执行 ",(0,o.jsx)(r.code,{children:"dev"}),", ",(0,o.jsx)(r.code,{children:"start"})," 和 ",(0,o.jsx)(r.code,{children:"serve"})," 命令时，会以 ",(0,o.jsx)(r.code,{children:"8080"})," 为默认端口启动，并会在端口被占用时自动递增端口号。你可以通过该配置来修改 Server 启动的端口号："]}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"export default defineConfig({\n  server: {\n    port: 3000,\n  },\n});\n"})}),"\n",(0,o.jsxs)(r.h3,{id:"与-devport-的区别",children:["与 dev.port 的区别",(0,o.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#与-devport-的区别",children:"#"})]}),"\n",(0,o.jsxs)(r.p,{children:["大多数情况下，我们推荐使用 ",(0,o.jsx)(r.code,{children:"server.port"})," 而不是 ",(0,o.jsx)(r.code,{children:"dev.port"})," 来设置端口号，他们之间的区别如下："]}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.code,{children:"dev.port"})," 仅在开发环境下生效，",(0,o.jsx)(r.code,{children:"server.port"})," 在开发环境和生产环境下均能生效。"]}),"\n",(0,o.jsxs)(r.li,{children:["在开发环境下，",(0,o.jsx)(r.code,{children:"dev.port"})," 的优先级高于 ",(0,o.jsx)(r.code,{children:"server.port"}),"。"]}),"\n"]}),"\n",(0,o.jsxs)(r.p,{children:["当你同时设置 ",(0,o.jsx)(r.code,{children:"dev.port"})," 和 ",(0,o.jsx)(r.code,{children:"server.port"})," 时，",(0,o.jsx)(r.code,{children:"dev.port"})," 会在开发环境下生效，",(0,o.jsx)(r.code,{children:"server.port"})," 会在生产环境下生效。比如以下例子，在开发环境下监听的端口号为 ",(0,o.jsx)(r.code,{children:"3001"}),"，在生产环境下监听的端口号为 ",(0,o.jsx)(r.code,{children:"3002"}),"。"]}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"export default defineConfig({\n  dev: {\n    port: 3001,\n  },\n  server: {\n    port: 3002,\n  },\n});\n"})})]})}(s=globalThis).__RSPRESS_PAGE_META||(s.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["zh%2Fconfigure%2Fapp%2Fserver%2Fport.mdx"]={toc:[{text:"与 dev.port 的区别",id:"与-devport-的区别",depth:3}],title:"server.port",frontmatter:{sidebar_label:"port"}};var l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=Object.assign({},(0,i.useMDXComponents)(),e.components).wrapper;return r?(0,o.jsx)(r,(0,c._)((0,d._)({},e),{children:(0,o.jsx)(t,(0,d._)({},e))})):t(e)}}}]);