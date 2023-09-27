(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["93092"],{37780:function(e,n,s){"use strict";s.r(n),s.d(n,{default:function(){return l}});var t,o=s("10310"),i=s("81904"),r=s("98638"),c=s("21968");function d(e){let n=Object.assign({h1:"h1",a:"a",ul:"ul",li:"li",strong:"strong",code:"code",div:"div",p:"p",pre:"pre"},(0,c.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"toolsjest",children:["tools.jest",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#toolsjest",children:"#"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Type:"})," ",(0,r.jsx)(n.code,{children:"Object | Function"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Default:"})," ",(0,r.jsx)(n.code,{children:"{}"})]}),"\n"]}),"\n",(0,r.jsxs)(n.div,{className:"rspress-directive caution",children:[(0,r.jsx)(n.div,{className:"rspress-directive-title",children:"Caution"}),(0,r.jsxs)(n.div,{className:"rspress-directive-content",children:[(0,r.jsxs)(n.p,{children:['First you need to enable the "Unit Test" function using ',(0,r.jsx)(n.a,{href:"/apis/app/commands#modern-new",children:"new"})," command."]}),"\n"]})]}),"\n",(0,r.jsxs)(n.p,{children:["Corresponding to the configuration of ",(0,r.jsx)(n.a,{href:"https://jestjs.io/docs/configuration",target:"_blank",rel:"noopener noreferrer",children:"Jest"}),", when of type ",(0,r.jsx)(n.code,{children:"Object"}),", all underlying configurations supported by Jest can be configured."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",meta:"title=modern.config.js",children:"export default defineConfig({\n  tools: {\n    jest: {\n      testTimeout: 10000,\n    },\n  },\n});\n"})}),"\n",(0,r.jsxs)(n.p,{children:["When the value is of type ",(0,r.jsx)(n.code,{children:"Function"}),", the default configuration is passed in as the first parameter and a new Jest configuration object needs to be returned."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",meta:"title=modern.config.js",children:"export default defineConfig({\n  tools: {\n    jest: options => {\n      return {\n        ...options,\n        testTimeout: 10000,\n      };\n    },\n  },\n});\n"})})]})}(t=globalThis).__RSPRESS_PAGE_META||(t.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["en%2Fconfigure%2Fapp%2Ftools%2Fjest.mdx"]={toc:[],title:"tools.jest",frontmatter:{sidebar_label:"jest"}};var l=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,c.useMDXComponents)(),e.components);return n?(0,r.jsx)(n,(0,i._)((0,o._)({},e),{children:(0,r.jsx)(d,(0,o._)({},e))})):d(e)}}}]);