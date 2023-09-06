(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_configure_app_html_favicon-by-entries_mdx"],{95969:function(n,e,s){"use strict";s.r(e),s.d(e,{default:function(){return l}});var r,i=s("15169"),c=s("43932"),t=s("9880"),o=s("23169");function d(n){var e=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",h3:"h3",a:"a",pre:"pre"},(0,o.useMDXComponents)(),n.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"类型："})," ",(0,t.jsx)(e.code,{children:"Record<string, string>"})]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"默认值："})," ",(0,t.jsx)(e.code,{children:"undefined"})]}),"\n"]}),"\n",(0,t.jsx)(e.p,{children:"用于在多页面的场景下，为不同的页面设置不同的 favicon。"}),"\n",(0,t.jsxs)(e.p,{children:["整体用法与 ",(0,t.jsx)(e.code,{children:"favicon"})," 一致，并且可以使用「入口名称」作为 key ，对各个页面进行单独设置。"]}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.code,{children:"faviconByEntries"})," 的优先级高于 ",(0,t.jsx)(e.code,{children:"favicon"}),"，因此会覆盖 ",(0,t.jsx)(e.code,{children:"favicon"})," 中设置的值。"]}),"\n",(0,t.jsxs)(e.h3,{id:"示例",children:["示例",(0,t.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#示例",children:"#"})]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-js",children:"export default {\n  html: {\n    favicon: './src/assets/default.png',\n    faviconByEntries: {\n      foo: './src/assets/foo.png',\n    },\n  },\n};\n"})}),"\n",(0,t.jsx)(e.p,{children:"重新编译后，可以看到:"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["页面 ",(0,t.jsx)(e.code,{children:"foo"})," 的 favicon 为 ",(0,t.jsx)(e.code,{children:"./src/assets/foo.png"}),"。"]}),"\n",(0,t.jsxs)(e.li,{children:["其他页面的 favicon 为 ",(0,t.jsx)(e.code,{children:"./src/assets/default.png"}),"。"]}),"\n"]})]})}(r=globalThis).__RSPRESS_PAGE_META||(r.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["..%2F..%2Fbuilder-doc%2Fdocs%2Fzh%2Fconfig%2Fhtml%2FfaviconByEntries.md"]={toc:[{text:"示例",id:"示例",depth:3}],title:"",frontmatter:{}};var l=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=Object.assign({},(0,o.useMDXComponents)(),n.components).wrapper;return e?(0,t.jsx)(e,(0,c._)((0,i._)({},n),{children:(0,t.jsx)(d,(0,i._)({},n))})):d(n)}},78251:function(n,e,s){"use strict";s.r(e),s.d(e,{default:function(){return a}});var r,i=s("15169"),c=s("43932"),t=s("9880"),o=s("23169"),d=s("95969");function l(n){var e=Object.assign({h1:"h1",a:"a",div:"div",p:"p"},(0,o.useMDXComponents)(),n.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(e.h1,{id:"htmlfaviconbyentries",children:["html.faviconByEntries",(0,t.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#htmlfaviconbyentries",children:"#"})]}),"\n",(0,t.jsxs)(e.div,{className:"modern-directive tip",children:[(0,t.jsx)(e.div,{className:"modern-directive-title",children:"TIP"}),(0,t.jsx)(e.div,{className:"modern-directive-content",children:(0,t.jsxs)(e.p,{children:["该配置由 Modern.js Builder 提供，更多信息可参考 ",(0,t.jsx)(e.a,{href:"https://modernjs.dev/builder/api/config-html.html#htmlfaviconbyentries",target:"_blank",rel:"noopener noreferrer",children:"html.faviconByEntries"}),"。\n"]})})]}),"\n","\n",(0,t.jsx)(d.default,{})]})}(r=globalThis).__RSPRESS_PAGE_META||(r.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["zh%2Fconfigure%2Fapp%2Fhtml%2Ffavicon-by-entries.mdx"]={toc:[],title:"html.faviconByEntries",frontmatter:{sidebar_label:"faviconByEntries"}};var a=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=Object.assign({},(0,o.useMDXComponents)(),n.components).wrapper;return e?(0,t.jsx)(e,(0,c._)((0,i._)({},n),{children:(0,t.jsx)(l,(0,i._)({},n))})):l(n)}}}]);