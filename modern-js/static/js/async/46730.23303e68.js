(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["46730"],{13534:function(e,n,s){"use strict";s.r(n),s.d(n,{default:function(){return c}});var r,o=s("15169"),i=s("43932"),t=s("9880"),a=s("23169");function l(e){var n=Object.assign({ul:"ul",li:"li",strong:"strong",pre:"pre",code:"code",p:"p",div:"div"},(0,a.useMDXComponents)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"Type:"})}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"type DisableSourceMap =\n  | boolean\n  | {\n      js?: boolean;\n      css?: boolean;\n    };\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"Default:"})}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"const defaultDisableSourceMap = {\n  js: false,\n  css: process.env.NODE_ENV === 'production',\n};\n"})}),"\n",(0,t.jsx)(n.p,{children:"Whether to disable Source Map generation."}),"\n",(0,t.jsxs)(n.div,{className:"rspress-directive tip",children:[(0,t.jsx)(n.div,{className:"rspress-directive-title",children:"What is a Source Map"}),(0,t.jsx)(n.div,{className:"rspress-directive-content",children:(0,t.jsx)(n.p,{children:"Source Map is an information file that saves the source code mapping relationship. It records each location of the compiled code and the corresponding pre-compilation location. With Source Map, you can directly view the source code when debugging the compiled code."})})]}),"\n",(0,t.jsx)(n.p,{children:"By default, Builder's Source Map generation rules are:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"In development build, SourceMap of JS files and CSS files will be generated, which is convenient for debugging."}),"\n",(0,t.jsx)(n.li,{children:"In production build, the Source Map of JS files will be generated for debugging and troubleshooting online problems; the Source Map of CSS files will not be generated."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"If the project does not need Source Map, you can turned off it to speed up the compile speed."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"export default {\n  output: {\n    disableSourceMap: true,\n  },\n};\n"})}),"\n",(0,t.jsx)(n.p,{children:"If you want to enable Source Map in development and disable it in the production, you can set to:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"export default {\n  output: {\n    disableSourceMap: process.env.NODE_ENV === 'production',\n  },\n};\n"})}),"\n",(0,t.jsx)(n.p,{children:"If you need to individually control the Source Map of JS files or CSS files, you can refer to the following settings:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"export default {\n  output: {\n    disableSourceMap: {\n      js: false,\n      css: true,\n    },\n  },\n};\n"})})]})}(r=globalThis).__RSPRESS_PAGE_META||(r.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["..%2F..%2Fbuilder-doc%2Fdocs%2Fen%2Fconfig%2Foutput%2FdisableSourceMap.md"]={toc:[],title:"",frontmatter:{}};var c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,a.useMDXComponents)(),e.components).wrapper;return n?(0,t.jsx)(n,(0,i._)((0,o._)({},e),{children:(0,t.jsx)(l,(0,o._)({},e))})):l(e)}},45727:function(e,n,s){"use strict";s.r(n),s.d(n,{default:function(){return d}});var r,o=s("15169"),i=s("43932"),t=s("9880"),a=s("23169"),l=s("13534");function c(e){var n=Object.assign({h1:"h1",a:"a",div:"div",p:"p"},(0,a.useMDXComponents)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.h1,{id:"outputdisablesourcemap",children:["output.disableSourceMap",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#outputdisablesourcemap",children:"#"})]}),"\n",(0,t.jsxs)(n.div,{className:"rspress-directive tip",children:[(0,t.jsx)(n.div,{className:"rspress-directive-title",children:"TIP"}),(0,t.jsx)(n.div,{className:"rspress-directive-content",children:(0,t.jsxs)(n.p,{children:["This config is provided by Modern.js Builder, more detail can see ",(0,t.jsx)(n.a,{href:"https://modernjs.dev/builder/en/api/config-output.html#outputdisablesourcemap",target:"_blank",rel:"noopener noreferrer",children:"output.disableSourceMap"}),".\n"]})})]}),"\n","\n",(0,t.jsx)(l.default,{})]})}(r=globalThis).__RSPRESS_PAGE_META||(r.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["en%2Fconfigure%2Fapp%2Foutput%2Fdisable-source-map.mdx"]={toc:[],title:"output.disableSourceMap",frontmatter:{sidebar_label:"disableSourceMap"}};var d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,a.useMDXComponents)(),e.components).wrapper;return n?(0,t.jsx)(n,(0,i._)((0,o._)({},e),{children:(0,t.jsx)(c,(0,o._)({},e))})):c(e)}}}]);