(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_en_configure_app_source_pre-entry_mdx"],{18552:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return a}});var s,l=r("15169"),i=r("43932"),d=r("9880"),c=r("23169");function t(e){var n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",h4:"h4",a:"a",pre:"pre"},(0,c.useMDXComponents)(),e.components);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"Type:"})," ",(0,d.jsx)(n.code,{children:"string | string[]"})]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"Default:"})," ",(0,d.jsx)(n.code,{children:"undefined"})]}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:"Add a script before the entry file of each page. This script will be executed before the page code. It can be used to execute global logics, such as injecting polyfills, setting global styles, etc."}),"\n",(0,d.jsxs)(n.h4,{id:"add-a-single-script",children:["Add a single script",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#add-a-single-script",children:"#"})]}),"\n",(0,d.jsxs)(n.p,{children:["First create a ",(0,d.jsx)(n.code,{children:"src/polyfill.ts"})," file:"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-js",children:"console.log('I am a polyfill');\n"})}),"\n",(0,d.jsxs)(n.p,{children:["Then configure ",(0,d.jsx)(n.code,{children:"src/polyfill.ts"})," to ",(0,d.jsx)(n.code,{children:"source.preEntry"}),":"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-js",children:"export default {\n  source: {\n    preEntry: './src/polyfill.ts',\n  },\n};\n"})}),"\n",(0,d.jsxs)(n.p,{children:["Re-run the compilation and visit any page, you can see that the code in ",(0,d.jsx)(n.code,{children:"src/polyfill.ts"})," has been executed, and the ",(0,d.jsx)(n.code,{children:"I am a polyfill"})," is logged in the console."]}),"\n",(0,d.jsxs)(n.h4,{id:"add-global-style",children:["Add global style",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#add-global-style",children:"#"})]}),"\n",(0,d.jsxs)(n.p,{children:["You can also configure the global style through ",(0,d.jsx)(n.code,{children:"source.preEntry"}),", this CSS code will be loaded earlier than the page code, such as introducing a ",(0,d.jsx)(n.code,{children:"normalize.css"})," file:"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-js",children:"export default {\n  source: {\n    preEntry: './src/normalize.css',\n  },\n};\n"})}),"\n",(0,d.jsxs)(n.h4,{id:"add-multiple-scripts",children:["Add multiple scripts",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#add-multiple-scripts",children:"#"})]}),"\n",(0,d.jsxs)(n.p,{children:["You can add multiple scripts by setting ",(0,d.jsx)(n.code,{children:"preEntry"})," to an array, and they will be executed in array order:"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-js",children:"export default {\n  source: {\n    preEntry: ['./src/polyfill-a.ts', './src/polyfill-b.ts'],\n  },\n};\n"})})]})}(s=globalThis).__RSPRESS_PAGE_META||(s.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["..%2F..%2Fbuilder-doc%2Fdocs%2Fen%2Fconfig%2Fsource%2FpreEntry.md"]={toc:[{text:"Add a single script",id:"add-a-single-script",depth:4},{text:"Add global style",id:"add-global-style",depth:4},{text:"Add multiple scripts",id:"add-multiple-scripts",depth:4}],title:"",frontmatter:{}};var a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,c.useMDXComponents)(),e.components).wrapper;return n?(0,d.jsx)(n,(0,i._)((0,l._)({},e),{children:(0,d.jsx)(t,(0,l._)({},e))})):t(e)}},88524:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return o}});var s,l=r("15169"),i=r("43932"),d=r("9880"),c=r("23169"),t=r("18552");function a(e){var n=Object.assign({h1:"h1",a:"a",div:"div",p:"p"},(0,c.useMDXComponents)(),e.components);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.h1,{id:"sourcepreentry",children:["source.preEntry",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#sourcepreentry",children:"#"})]}),"\n",(0,d.jsxs)(n.div,{className:"modern-directive tip",children:[(0,d.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,d.jsx)(n.div,{className:"modern-directive-content",children:(0,d.jsxs)(n.p,{children:["This config is provided by Modern.js Builder, more detail can see ",(0,d.jsx)(n.a,{href:"https://modernjs.dev/builder/en/api/config-source.html#sourcepreentry",target:"_blank",rel:"noopener noreferrer",children:"source.preEntry"}),".\n"]})})]}),"\n","\n",(0,d.jsx)(t.default,{})]})}(s=globalThis).__RSPRESS_PAGE_META||(s.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["en%2Fconfigure%2Fapp%2Fsource%2Fpre-entry.mdx"]={toc:[],title:"source.preEntry",frontmatter:{sidebar_label:"preEntry"}};var o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,c.useMDXComponents)(),e.components).wrapper;return n?(0,d.jsx)(n,(0,i._)((0,l._)({},e),{children:(0,d.jsx)(a,(0,l._)({},e))})):a(e)}}}]);