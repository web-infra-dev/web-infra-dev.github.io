(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_en_configure_app_tools_sass_mdx"],{41231:function(e,s,n){"use strict";n.r(s),n.d(s,{default:function(){return c}});var t,i=n("15169"),r=n("43932"),o=n("9880"),d=n("23169");function a(e){var s=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",pre:"pre",p:"p",a:"a",h3:"h3",h4:"h4"},(0,d.useMDXComponents)(),e.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.strong,{children:"Type:"})," ",(0,o.jsx)(s.code,{children:"Object | Function"})]}),"\n",(0,o.jsx)(s.li,{children:(0,o.jsx)(s.strong,{children:"Default:"})}),"\n"]}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-js",children:"const defaultOptions = {\n  // CSS Source Map enabled by default in development environment\n  sourceMap: isDev,\n};\n"})}),"\n",(0,o.jsxs)(s.p,{children:["You can modify the config of ",(0,o.jsx)(s.a,{href:"https://github.com/webpack-contrib/sass-loader",target:"_blank",rel:"noopener noreferrer",children:"sass-loader"})," via ",(0,o.jsx)(s.code,{children:"tools.sass"}),"."]}),"\n",(0,o.jsxs)(s.h3,{id:"object-type",children:["Object Type",(0,o.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#object-type",children:"#"})]}),"\n",(0,o.jsxs)(s.p,{children:["When ",(0,o.jsx)(s.code,{children:"tools.sass"})," is ",(0,o.jsx)(s.code,{children:"Object"})," type, it is merged with the default config through Object.assign. It should be noted that ",(0,o.jsx)(s.code,{children:"sassOptions"})," is merged through deepMerge in a deep way."]}),"\n",(0,o.jsx)(s.p,{children:"For example:"}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-js",children:"export default {\n  tools: {\n    sass: {\n      sourceMap: true,\n    },\n  },\n};\n"})}),"\n",(0,o.jsxs)(s.h3,{id:"function-type",children:["Function Type",(0,o.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#function-type",children:"#"})]}),"\n",(0,o.jsxs)(s.p,{children:["When ",(0,o.jsx)(s.code,{children:"tools.sass"})," is a Function, the default config is passed as the first parameter, which can be directly modified or returned as the final result. The second parameter provides some utility functions that can be called directly. For Example:"]}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-js",children:"export default {\n  tools: {\n    sass(config) {\n      // Modify sourceMap config\n      config.additionalData = async (content, loaderContext) => {\n        // ...\n      };\n    },\n  },\n};\n"})}),"\n",(0,o.jsxs)(s.h3,{id:"utility-function",children:["Utility Function",(0,o.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#utility-function",children:"#"})]}),"\n",(0,o.jsxs)(s.h4,{id:"addexcludes",children:["addExcludes",(0,o.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#addexcludes",children:"#"})]}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.strong,{children:"Type:"})," ",(0,o.jsx)(s.code,{children:"(excludes: RegExp | RegExp[]) => void"})]}),"\n"]}),"\n",(0,o.jsxs)(s.p,{children:["Used to specify which files ",(0,o.jsx)(s.code,{children:"sass-loader"})," does not compile, You can pass in one or more regular expressions to match the path of sass files, for example:"]}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-js",children:"export default {\n  tools: {\n    sass(config, { addExcludes }) {\n      addExcludes(/node_modules/);\n    },\n  },\n};\n"})})]})}(t=globalThis).__RSPRESS_PAGE_META||(t.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["..%2F..%2Fbuilder-doc%2Fdocs%2Fen%2Fconfig%2Ftools%2Fsass.md"]={toc:[{text:"Object Type",id:"object-type",depth:3},{text:"Function Type",id:"function-type",depth:3},{text:"Utility Function",id:"utility-function",depth:3},{text:"addExcludes",id:"addexcludes",depth:4}],title:"",frontmatter:{}};var c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},s=Object.assign({},(0,d.useMDXComponents)(),e.components).wrapper;return s?(0,o.jsx)(s,(0,r._)((0,i._)({},e),{children:(0,o.jsx)(a,(0,i._)({},e))})):a(e)}},92583:function(e,s,n){"use strict";n.r(s),n.d(s,{default:function(){return l}});var t,i=n("15169"),r=n("43932"),o=n("9880"),d=n("23169"),a=n("41231");function c(e){var s=Object.assign({h1:"h1",a:"a",div:"div",p:"p"},(0,d.useMDXComponents)(),e.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(s.h1,{id:"toolssass",children:["tools.sass",(0,o.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#toolssass",children:"#"})]}),"\n",(0,o.jsxs)(s.div,{className:"modern-directive tip",children:[(0,o.jsx)(s.div,{className:"modern-directive-title",children:"TIP"}),(0,o.jsx)(s.div,{className:"modern-directive-content",children:(0,o.jsxs)(s.p,{children:["This config is provided by Modern.js Builder, more detail can see ",(0,o.jsx)(s.a,{href:"https://modernjs.dev/builder/en/api/config-tools.html#toolssass",target:"_blank",rel:"noopener noreferrer",children:"tools.sass"}),".\n"]})})]}),"\n","\n",(0,o.jsx)(a.default,{})]})}(t=globalThis).__RSPRESS_PAGE_META||(t.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["en%2Fconfigure%2Fapp%2Ftools%2Fsass.mdx"]={toc:[],title:"tools.sass",frontmatter:{sidebar_label:"sass"}};var l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},s=Object.assign({},(0,d.useMDXComponents)(),e.components).wrapper;return s?(0,o.jsx)(s,(0,r._)((0,i._)({},e),{children:(0,o.jsx)(c,(0,i._)({},e))})):c(e)}}}]);