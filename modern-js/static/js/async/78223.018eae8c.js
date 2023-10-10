(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["78223"],{43876:function(e,n,s){"use strict";s.r(n),s.d(n,{default:function(){return a},frontmatter:function(){return l}});var t=s("15169"),r=s("43932"),o=s("9880"),i=s("23169");function c(e){var n=Object.assign({h1:"h1",a:"a",ul:"ul",li:"li",strong:"strong",code:"code",div:"div",p:"p",pre:"pre"},(0,i.useMDXComponents)(),e.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.h1,{id:"toolsjest",children:["tools.jest",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#toolsjest",children:"#"})]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Type:"})," ",(0,o.jsx)(n.code,{children:"Object | Function"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Default:"})," ",(0,o.jsx)(n.code,{children:"{}"})]}),"\n"]}),"\n",(0,o.jsxs)(n.div,{className:"rspress-directive caution",children:[(0,o.jsx)(n.div,{className:"rspress-directive-title",children:"Caution"}),(0,o.jsxs)(n.div,{className:"rspress-directive-content",children:[(0,o.jsxs)(n.p,{children:['First you need to enable the "Unit Test" function using ',(0,o.jsx)(n.a,{href:"/apis/app/commands#modern-new",children:"new"})," command."]}),"\n"]})]}),"\n",(0,o.jsxs)(n.p,{children:["Corresponding to the configuration of ",(0,o.jsx)(n.a,{href:"https://jestjs.io/docs/configuration",target:"_blank",rel:"noopener noreferrer",children:"Jest"}),", when of type ",(0,o.jsx)(n.code,{children:"Object"}),", all underlying configurations supported by Jest can be configured."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",meta:"title=modern.config.js",children:"export default defineConfig({\n  tools: {\n    jest: {\n      testTimeout: 10000,\n    },\n  },\n});\n"})}),"\n",(0,o.jsxs)(n.p,{children:["When the value is of type ",(0,o.jsx)(n.code,{children:"Function"}),", the default configuration is passed in as the first parameter and a new Jest configuration object needs to be returned."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",meta:"title=modern.config.js",children:"export default defineConfig({\n  tools: {\n    jest: options => {\n      return {\n        ...options,\n        testTimeout: 10000,\n      };\n    },\n  },\n});\n"})})]})}function d(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,i.useMDXComponents)(),e.components).wrapper;return n?(0,o.jsx)(n,(0,r._)((0,t._)({},e),{children:(0,o.jsx)(c,(0,t._)({},e))})):c(e)}var a=d;d.__RSPRESS_PAGE_META={},d.__RSPRESS_PAGE_META["en%2Fconfigure%2Fapp%2Ftools%2Fjest.mdx"]={toc:[],title:"tools.jest"};var l={sidebar_label:"jest"}}}]);