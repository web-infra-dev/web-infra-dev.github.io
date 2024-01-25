/*! For license information please see 35515.e17b759b.js.LICENSE.txt */
(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["35515"],{10330:function(e,n,s){"use strict";s.r(n),s.d(n,{default:function(){return c}});var o=s("39980"),r=s("96954");function t(e){let n=Object.assign({ul:"ul",li:"li",strong:"strong",pre:"pre",code:"code",p:"p",div:"div"},(0,r.useMDXComponents)(),e.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.strong,{children:"Type:"})}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"type DisableSourceMap =\n  | boolean\n  | {\n      js?: boolean;\n      css?: boolean;\n    };\n"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.strong,{children:"Default:"})}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"const defaultDisableSourceMap = {\n  js: false,\n  css: process.env.NODE_ENV === 'production',\n};\n"})}),"\n",(0,o.jsx)(n.p,{children:"Whether to disable Source Map generation."}),"\n",(0,o.jsxs)(n.div,{className:"rspress-directive tip",children:[(0,o.jsx)(n.div,{className:"rspress-directive-title",children:"What is a Source Map"}),(0,o.jsx)(n.div,{className:"rspress-directive-content",children:(0,o.jsx)(n.p,{children:"Source Map is an information file that saves the source code mapping relationship. It records each location of the compiled code and the corresponding pre-compilation location. With Source Map, you can directly view the source code when debugging the compiled code."})})]}),"\n",(0,o.jsx)(n.p,{children:"By default, Builder's Source Map generation rules are:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"In development build, SourceMap of JS files and CSS files will be generated, which is convenient for debugging."}),"\n",(0,o.jsx)(n.li,{children:"In production build, the Source Map of JS files will be generated for debugging and troubleshooting online problems; the Source Map of CSS files will not be generated."}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"If the project does not need Source Map, you can turned off it to speed up the compile speed."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"export default {\n  output: {\n    disableSourceMap: true,\n  },\n};\n"})}),"\n",(0,o.jsx)(n.p,{children:"If you want to enable Source Map in development and disable it in the production, you can set to:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"export default {\n  output: {\n    disableSourceMap: process.env.NODE_ENV === 'production',\n  },\n};\n"})}),"\n",(0,o.jsx)(n.p,{children:"If you need to individually control the Source Map of JS files or CSS files, you can refer to the following settings:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"export default {\n  output: {\n    disableSourceMap: {\n      js: false,\n      css: true,\n    },\n  },\n};\n"})})]})}function i(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,r.useMDXComponents)(),e.components);return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(t,{...e})}):t(e)}var c=i;i.__RSPRESS_PAGE_META={},i.__RSPRESS_PAGE_META["..%2F..%2Fbuilder-doc%2Fdocs%2Fen%2Fconfig%2Foutput%2FdisableSourceMap.md"]={toc:[],title:"",frontmatter:{}}},34972:function(e,n,s){"use strict";s.r(n),s.d(n,{default:function(){return l}});var o=s("39980"),r=s("96954"),t=s("10330");function i(e){let n=Object.assign({h1:"h1",a:"a"},(0,r.useMDXComponents)(),e.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.h1,{id:"outputdisablesourcemap",children:["output.disableSourceMap",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#outputdisablesourcemap",children:"#"})]}),"\n","\n",(0,o.jsx)(t.default,{})]})}function c(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,r.useMDXComponents)(),e.components);return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(i,{...e})}):i(e)}var l=c;c.__RSPRESS_PAGE_META={},c.__RSPRESS_PAGE_META["en%2Fconfigure%2Fapp%2Foutput%2Fdisable-source-map.mdx"]={toc:[],title:"output.disableSourceMap",frontmatter:{sidebar_label:"disableSourceMap"}}}}]);