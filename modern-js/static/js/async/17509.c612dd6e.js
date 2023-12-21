/*! For license information please see 17509.c612dd6e.js.LICENSE.txt */
(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["17509"],{27385:function(e,n,s){"use strict";s.r(n),s.d(n,{default:function(){return c}});var t=s("9880"),r=s("23169");function a(e){let n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",h3:"h3",a:"a",pre:"pre"},(0,r.useMDXComponents)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Type:"})," ",(0,t.jsx)(n.code,{children:"Record<string, ArrayOrNot<HtmlInjectTag | HtmlInjectTagHandler>>"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Default:"})," ",(0,t.jsx)(n.code,{children:"undefined"})]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Used for multiple entry applications, injecting different tags for each entry."}),"\n",(0,t.jsxs)(n.p,{children:["The usage is the same as ",(0,t.jsx)(n.code,{children:"tags"}),', and you can use the "entry name" as the key to set each page individually.']}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"tagsByEntries"})," will override the value set in ",(0,t.jsx)(n.code,{children:"tags"}),"."]}),"\n",(0,t.jsxs)(n.h3,{id:"example",children:["Example",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#example",children:"#"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"export default {\n  html: {\n    tags: [{ tag: 'script', attrs: { src: 'a.js' } }],\n    tagsByEntries: {\n      foo: [{ tag: 'script', attrs: { src: 'b.js' } }],\n    },\n  },\n};\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Compile the application and you can see a tag injected on the ",(0,t.jsx)(n.code,{children:"foo"})," page:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-html",children:'<script src="b.js"><\/script>\n'})}),"\n",(0,t.jsx)(n.p,{children:"And for any other pages:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-html",children:'<script src="a.js"><\/script>\n'})})]})}function i(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,r.useMDXComponents)(),e.components);return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}var c=i;i.__RSPRESS_PAGE_META={},i.__RSPRESS_PAGE_META["..%2F..%2Fbuilder-doc%2Fdocs%2Fen%2Fconfig%2Fhtml%2FtagsByEntries.md"]={toc:[{text:"Example",id:"example",depth:3}],title:"",frontmatter:{}}},5501:function(e,n,s){"use strict";s.r(n),s.d(n,{default:function(){return l}});var t=s("9880"),r=s("23169"),a=s("27385");function i(e){let n=Object.assign({h1:"h1",a:"a"},(0,r.useMDXComponents)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.h1,{id:"htmltagsbyentries",children:["html.tagsByEntries",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#htmltagsbyentries",children:"#"})]}),"\n","\n",(0,t.jsx)(a.default,{})]})}function c(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,r.useMDXComponents)(),e.components);return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(i,{...e})}):i(e)}var l=c;c.__RSPRESS_PAGE_META={},c.__RSPRESS_PAGE_META["en%2Fconfigure%2Fapp%2Fhtml%2Ftags-by-entries.mdx"]={toc:[],title:"html.tagsByEntries",frontmatter:{sidebar_label:"tagsByEntries"}}}}]);