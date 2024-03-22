/*! For license information please see 79747.e1421f5a.js.LICENSE.txt */
(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["79747"],{85741:function(e,s,n){"use strict";n.r(s);var r=n("39980"),l=n("96954");function d(e){let s=Object.assign({h1:"h1",a:"a",ul:"ul",li:"li",strong:"strong",code:"code",p:"p",h4:"h4",pre:"pre"},(0,l.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.h1,{id:"sourcepreentry",children:["source.preEntry",(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#sourcepreentry",children:"#"})]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Type:"})," ",(0,r.jsx)(s.code,{children:"string | string[]"})]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Default:"})," ",(0,r.jsx)(s.code,{children:"undefined"})]}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:"Add a script before the entry file of each page. This script will be executed before the page code. It can be used to execute global logics, such as injecting polyfills, setting global styles, etc."}),"\n",(0,r.jsxs)(s.h4,{id:"add-a-single-script",children:["Add a single script",(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#add-a-single-script",children:"#"})]}),"\n",(0,r.jsxs)(s.p,{children:["First create a ",(0,r.jsx)(s.code,{children:"src/polyfill.ts"})," file:"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-js",children:"console.log('I am a polyfill');\n"})}),"\n",(0,r.jsxs)(s.p,{children:["Then configure ",(0,r.jsx)(s.code,{children:"src/polyfill.ts"})," to ",(0,r.jsx)(s.code,{children:"source.preEntry"}),":"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-js",children:"export default {\n  source: {\n    preEntry: './src/polyfill.ts',\n  },\n};\n"})}),"\n",(0,r.jsxs)(s.p,{children:["Re-run the compilation and visit any page, you can see that the code in ",(0,r.jsx)(s.code,{children:"src/polyfill.ts"})," has been executed, and the ",(0,r.jsx)(s.code,{children:"I am a polyfill"})," is logged in the console."]}),"\n",(0,r.jsxs)(s.h4,{id:"add-global-style",children:["Add global style",(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#add-global-style",children:"#"})]}),"\n",(0,r.jsxs)(s.p,{children:["You can also configure the global style through ",(0,r.jsx)(s.code,{children:"source.preEntry"}),", this CSS code will be loaded earlier than the page code, such as introducing a ",(0,r.jsx)(s.code,{children:"normalize.css"})," file:"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-js",children:"export default {\n  source: {\n    preEntry: './src/normalize.css',\n  },\n};\n"})}),"\n",(0,r.jsxs)(s.h4,{id:"add-multiple-scripts",children:["Add multiple scripts",(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#add-multiple-scripts",children:"#"})]}),"\n",(0,r.jsxs)(s.p,{children:["You can add multiple scripts by setting ",(0,r.jsx)(s.code,{children:"preEntry"})," to an array, and they will be executed in array order:"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-js",children:"export default {\n  source: {\n    preEntry: ['./src/polyfill-a.ts', './src/polyfill-b.ts'],\n  },\n};\n"})})]})}function c(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:s}=Object.assign({},(0,l.useMDXComponents)(),e.components);return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}s.default=c,c.__RSPRESS_PAGE_META={},c.__RSPRESS_PAGE_META["en%2Fconfigure%2Fapp%2Fsource%2Fpre-entry.mdx"]={toc:[{text:"Add a single script",id:"add-a-single-script",depth:4},{text:"Add global style",id:"add-global-style",depth:4},{text:"Add multiple scripts",id:"add-multiple-scripts",depth:4}],title:"source.preEntry",frontmatter:{sidebar_label:"preEntry"}}}}]);