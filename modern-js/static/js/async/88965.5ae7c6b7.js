(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["88965"],{69836:function(e,n,s){"use strict";s.r(n),s.d(n,{default:function(){return o},frontmatter:function(){return l}});var r=s("15169"),t=s("43932"),i=s("9880"),a=s("23169");function c(e){var n=Object.assign({h1:"h1",a:"a",ul:"ul",li:"li",strong:"strong",code:"code",p:"p",div:"div",pre:"pre"},(0,a.useMDXComponents)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.h1,{id:"serverssrbyentries",children:["server.ssrByEntries",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#serverssrbyentries",children:"#"})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Type:"})," ",(0,i.jsx)(n.code,{children:"Object"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Default:"})," ",(0,i.jsx)(n.code,{children:"undefined"})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Set SSR options by entry, and the properties inside the option are the same as ",(0,i.jsx)(n.a,{href:"/en/configure/app/server/ssr",children:"ssr"}),". The specified value will be replaced and merged with the content of the SSR attribute, for example:"]}),"\n",(0,i.jsxs)(n.div,{className:"rspress-directive info",children:[(0,i.jsx)(n.div,{className:"rspress-directive-title",children:"INFO"}),(0,i.jsxs)(n.div,{className:"rspress-directive-content",children:[(0,i.jsxs)(n.p,{children:['The "entry name" defaults to the directory name. In a few cases, when defining an entry through ',(0,i.jsx)(n.code,{children:"source.entries"}),", the entry name is the ",(0,i.jsx)(n.code,{children:"key"})," of the ",(0,i.jsx)(n.code,{children:"source.entries"})," object."]}),"\n"]})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"export default defineConfig({\n  server: {\n    ssr: true,\n    ssrByEntries: {\n      // page-a does not enable SSR\n      'page-a': false,\n    },\n  },\n});\n"})}),"\n",(0,i.jsxs)(n.p,{children:["In the above configuration, the project enables SSR as a whole, but the SSR rendering ability is disabled for the ",(0,i.jsx)(n.code,{children:"page-a"})," entry."]})]})}function d(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,a.useMDXComponents)(),e.components).wrapper;return n?(0,i.jsx)(n,(0,t._)((0,r._)({},e),{children:(0,i.jsx)(c,(0,r._)({},e))})):c(e)}var o=d;d.__RSPRESS_PAGE_META={},d.__RSPRESS_PAGE_META["en%2Fconfigure%2Fapp%2Fserver%2Fssr-by-entries.mdx"]={toc:[],title:"server.ssrByEntries"};var l={sidebar_label:"ssrByEntries"}}}]);