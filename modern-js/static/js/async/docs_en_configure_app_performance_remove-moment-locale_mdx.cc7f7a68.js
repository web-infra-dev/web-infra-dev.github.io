(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_en_configure_app_performance_remove-moment-locale_mdx"],{10367:function(e,n,o){"use strict";o.r(n),o.d(n,{default:function(){return i}});var r,c=o("15169"),s=o("43932"),l=o("9880"),a=o("23169");function t(e){var n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",a:"a",pre:"pre"},(0,a.useMDXComponents)(),e.components);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"Type:"})," ",(0,l.jsx)(n.code,{children:"boolean"})]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"Default:"})," ",(0,l.jsx)(n.code,{children:"false"})]}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:["Whether to remove the locales of ",(0,l.jsx)(n.a,{href:"https://momentjs.com/",target:"_blank",rel:"noopener noreferrer",children:"moment.js"}),"."]}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"moment.js"})," contains a lot of locales by default, which will increase the bundle size."]}),"\n",(0,l.jsxs)(n.p,{children:["When ",(0,l.jsx)(n.code,{children:"moment.js"})," is used in the project, it is recommended to enable this option to automatically exclude all locales:"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",children:"export default {\n  performance: {\n    removeMomentLocale: true,\n  },\n};\n"})}),"\n",(0,l.jsx)(n.p,{children:"Once enabled, you can load a specific locale via:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",children:"import moment from 'moment';\nimport 'moment/locale/zh-cn';\n\nmoment.locale('zh-cn');\n"})})]})}(r=globalThis).__RSPRESS_PAGE_META||(r.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["..%2F..%2Fbuilder-doc%2Fdocs%2Fen%2Fconfig%2Fperformance%2FremoveMomentLocale.md"]={toc:[],title:"",frontmatter:{}};var i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,a.useMDXComponents)(),e.components).wrapper;return n?(0,l.jsx)(n,(0,s._)((0,c._)({},e),{children:(0,l.jsx)(t,(0,c._)({},e))})):t(e)}},76273:function(e,n,o){"use strict";o.r(n),o.d(n,{default:function(){return m}});var r,c=o("15169"),s=o("43932"),l=o("9880"),a=o("23169"),t=o("10367");function i(e){var n=Object.assign({h1:"h1",a:"a",div:"div",p:"p"},(0,a.useMDXComponents)(),e.components);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(n.h1,{id:"performanceremovemomentlocale",children:["performance.removeMomentLocale",(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#performanceremovemomentlocale",children:"#"})]}),"\n",(0,l.jsxs)(n.div,{className:"modern-directive tip",children:[(0,l.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,l.jsx)(n.div,{className:"modern-directive-content",children:(0,l.jsxs)(n.p,{children:["This config is provided by Modern.js Builder, more detail can see ",(0,l.jsx)(n.a,{href:"https://modernjs.dev/builder/en/api/config-performance.html#performanceremovemomentlocale",target:"_blank",rel:"noopener noreferrer",children:"performance.removeMomentLocale"}),".\n"]})})]}),"\n","\n",(0,l.jsx)(t.default,{})]})}(r=globalThis).__RSPRESS_PAGE_META||(r.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["en%2Fconfigure%2Fapp%2Fperformance%2Fremove-moment-locale.mdx"]={toc:[],title:"performance.removeMomentLocale",frontmatter:{sidebar_label:"removeMomentLocale"}};var m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,a.useMDXComponents)(),e.components).wrapper;return n?(0,l.jsx)(n,(0,s._)((0,c._)({},e),{children:(0,l.jsx)(i,(0,c._)({},e))})):i(e)}}}]);