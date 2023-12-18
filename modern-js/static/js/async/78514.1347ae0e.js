/*! For license information please see 78514.1347ae0e.js.LICENSE.txt */
(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["78514"],{3195:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return c}});var s=t("9880"),r=t("23169");function a(e){let n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",h3:"h3",a:"a",pre:"pre"},(0,r.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Type:"})," ",(0,s.jsx)(n.code,{children:"Record<string, Meta>"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Default:"})," ",(0,s.jsx)(n.code,{children:"undefined"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Set different meta tags for different pages."}),"\n",(0,s.jsxs)(n.p,{children:["The usage is same as ",(0,s.jsx)(n.code,{children:"meta"}),', and you can use the "entry name" as the key to set each page individually.']}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"metaByEntries"})," will overrides the value set in ",(0,s.jsx)(n.code,{children:"meta"}),"."]}),"\n",(0,s.jsxs)(n.h3,{id:"example",children:["Example",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#example",children:"#"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"export default {\n  html: {\n    meta: {\n      description: 'ByteDance',\n    },\n    metaByEntries: {\n      foo: {\n        description: 'TikTok',\n      },\n    },\n  },\n};\n"})}),"\n",(0,s.jsxs)(n.p,{children:["After compiling, you can see that the meta of the page ",(0,s.jsx)(n.code,{children:"foo"})," is:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",children:'<meta name="description" content="TikTok" />\n'})}),"\n",(0,s.jsx)(n.p,{children:"The meta of other pages is:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",children:'<meta name="description" content="ByteDance" />\n'})})]})}function i(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,r.useMDXComponents)(),e.components);return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}var c=i;i.__RSPRESS_PAGE_META={},i.__RSPRESS_PAGE_META["..%2F..%2Fbuilder-doc%2Fdocs%2Fen%2Fconfig%2Fhtml%2FmetaByEntries.md"]={toc:[{text:"Example",id:"example",depth:3}],title:"",frontmatter:{}}},40658:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return l}});var s=t("9880"),r=t("23169"),a=t("3195");function i(e){let n=Object.assign({h1:"h1",a:"a"},(0,r.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h1,{id:"htmlmetabyentries",children:["html.metaByEntries",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#htmlmetabyentries",children:"#"})]}),"\n","\n",(0,s.jsx)(a.default,{})]})}function c(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,r.useMDXComponents)(),e.components);return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(i,{...e})}):i(e)}var l=c;c.__RSPRESS_PAGE_META={},c.__RSPRESS_PAGE_META["en%2Fconfigure%2Fapp%2Fhtml%2Fmeta-by-entries.mdx"]={toc:[],title:"html.metaByEntries",frontmatter:{sidebar_label:"metaByEntries"}}}}]);