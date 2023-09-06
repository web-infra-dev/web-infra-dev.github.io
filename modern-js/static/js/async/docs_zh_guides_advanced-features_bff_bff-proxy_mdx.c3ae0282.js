(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_guides_advanced-features_bff_bff-proxy_mdx"],{33060:function(e,n,s){"use strict";s.r(n),s.d(n,{default:function(){return a}});var r,i=s("15169"),d=s("43932"),c=s("9880"),o=s("23169");function t(e){var n=Object.assign({h1:"h1",a:"a",p:"p",div:"div",code:"code",pre:"pre"},(0,o.useMDXComponents)(),e.components);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(n.h1,{id:"使用-bff-代理",children:["使用 BFF 代理",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#使用-bff-代理",children:"#"})]}),"\n",(0,c.jsx)(n.p,{children:"通过配置 BFF 代理，无需手动写码，即可对 API 请求进行转发。"}),"\n",(0,c.jsxs)(n.div,{className:"modern-directive caution",children:[(0,c.jsx)(n.div,{className:"modern-directive-title",children:"CAUTION"}),(0,c.jsxs)(n.div,{className:"modern-directive-content",children:[(0,c.jsx)(n.p,{children:"使用 BFF 代理需确保请求能进入 BFF handler。（例如请求路径必须包含 bff prefix）"}),"\n"]})]}),"\n",(0,c.jsxs)(n.p,{children:["在 ",(0,c.jsx)(n.code,{children:"modern.server-runtime.config.js"})," 文件中编写以下 BFF 代理配置，会将发送到 ",(0,c.jsx)(n.code,{children:"http://localhost:8080/api/v1/topics"})," 的请求代理到 ",(0,c.jsx)(n.code,{children:"https://cnodejs.org/api/v1/topics"}),"。"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-js",meta:'title="modern.server-runtime.config.js"',children:"import { defineConfig } from '@modern-js/app-tools/server';\nexport default defineConfig({\n  bff: {\n    proxy: {\n      '/api/v1/topics': 'https://cnodejs.org',\n    },\n  },\n};\n"})}),"\n",(0,c.jsxs)(n.div,{className:"modern-directive note",children:[(0,c.jsx)(n.div,{className:"modern-directive-title",children:"NOTE"}),(0,c.jsxs)(n.div,{className:"modern-directive-content",children:[(0,c.jsxs)(n.p,{children:["详细 API 请查看 ",(0,c.jsx)(n.a,{href:"/configure/app/bff/proxy",children:"BFF 代理"}),"。更多 Modern.js 代理的能力可查看",(0,c.jsx)(n.a,{href:"/guides/basic-features/proxy",children:"调试代理"}),"。"]}),"\n"]})]})]})}(r=globalThis).__RSPRESS_PAGE_META||(r.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["zh%2Fguides%2Fadvanced-features%2Fbff%2Fbff-proxy.mdx"]={toc:[],title:"使用 BFF 代理",frontmatter:{sidebar_position:5,title:"使用 BFF 代理"}};var a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,o.useMDXComponents)(),e.components).wrapper;return n?(0,c.jsx)(n,(0,d._)((0,i._)({},e),{children:(0,c.jsx)(t,(0,i._)({},e))})):t(e)}}}]);