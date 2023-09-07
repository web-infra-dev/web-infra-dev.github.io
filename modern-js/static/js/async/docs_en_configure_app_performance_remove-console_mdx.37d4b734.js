(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_en_configure_app_performance_remove-console_mdx"],{9463:function(e,n,o){"use strict";o.r(n),o.d(n,{default:function(){return d}});var r,s=o("15169"),c=o("43932"),l=o("9880"),i=o("23169");function a(e){var n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",h4:"h4",a:"a",pre:"pre"},(0,i.useMDXComponents)(),e.components);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"Type:"})," ",(0,l.jsx)(n.code,{children:"boolean | ConsoleType[]"})]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"Default:"})," ",(0,l.jsx)(n.code,{children:"false"})]}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:["Whether to remove ",(0,l.jsx)(n.code,{children:"console.xx"})," in production build."]}),"\n",(0,l.jsxs)(n.h4,{id:"remove-all-consoles",children:["Remove all consoles",(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#remove-all-consoles",children:"#"})]}),"\n",(0,l.jsxs)(n.p,{children:["When ",(0,l.jsx)(n.code,{children:"removeConsole"})," is set to ",(0,l.jsx)(n.code,{children:"true"}),", all types of ",(0,l.jsx)(n.code,{children:"console.xx"})," are removed:"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-ts",children:"export default {\n  performance: {\n    removeConsole: true,\n  },\n};\n"})}),"\n",(0,l.jsxs)(n.h4,{id:"remove-specific-console",children:["Remove specific console",(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#remove-specific-console",children:"#"})]}),"\n",(0,l.jsxs)(n.p,{children:["You can also specify to remove only certain types of ",(0,l.jsx)(n.code,{children:"console.xx"}),", such as ",(0,l.jsx)(n.code,{children:"console.log"})," and ",(0,l.jsx)(n.code,{children:"console.warn"}),":"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-ts",children:"export default {\n  performance: {\n    removeConsole: ['log', 'warn'],\n  },\n};\n"})}),"\n",(0,l.jsx)(n.p,{children:"The following types of console are currently supported:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-ts",children:"type ConsoleType = 'log' | 'info' | 'warn' | 'error' | 'table' | 'group';\n"})})]})}(r=globalThis).__RSPRESS_PAGE_META||(r.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["..%2F..%2Fbuilder-doc%2Fdocs%2Fen%2Fconfig%2Fperformance%2FremoveConsole.md"]={toc:[{text:"Remove all consoles",id:"remove-all-consoles",depth:4},{text:"Remove specific console",id:"remove-specific-console",depth:4}],title:"",frontmatter:{}};var d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,i.useMDXComponents)(),e.components).wrapper;return n?(0,l.jsx)(n,(0,c._)((0,s._)({},e),{children:(0,l.jsx)(a,(0,s._)({},e))})):a(e)}},55362:function(e,n,o){"use strict";o.r(n),o.d(n,{default:function(){return t}});var r,s=o("15169"),c=o("43932"),l=o("9880"),i=o("23169"),a=o("9463");function d(e){var n=Object.assign({h1:"h1",a:"a",div:"div",p:"p"},(0,i.useMDXComponents)(),e.components);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(n.h1,{id:"performanceremoveconsole",children:["performance.removeConsole",(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#performanceremoveconsole",children:"#"})]}),"\n",(0,l.jsxs)(n.div,{className:"modern-directive tip",children:[(0,l.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,l.jsx)(n.div,{className:"modern-directive-content",children:(0,l.jsxs)(n.p,{children:["This config is provided by Modern.js Builder, more detail can see ",(0,l.jsx)(n.a,{href:"https://modernjs.dev/builder/en/api/config-performance.html#performanceremoveconsole",target:"_blank",rel:"noopener noreferrer",children:"performance.removeConsole"}),".\n"]})})]}),"\n","\n",(0,l.jsx)(a.default,{})]})}(r=globalThis).__RSPRESS_PAGE_META||(r.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["en%2Fconfigure%2Fapp%2Fperformance%2Fremove-console.mdx"]={toc:[],title:"performance.removeConsole",frontmatter:{sidebar_label:"removeConsole"}};var t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,i.useMDXComponents)(),e.components).wrapper;return n?(0,l.jsx)(n,(0,c._)((0,s._)({},e),{children:(0,l.jsx)(d,(0,s._)({},e))})):d(e)}}}]);