(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["34701"],{49051:function(e,s,n){"use strict";n.r(s),n.d(s,{default:function(){return c}});var i,r=n("15169"),o=n("43932"),t=n("9880"),l=n("23169");function d(e){var s=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",pre:"pre",p:"p",a:"a",h3:"h3",h4:"h4"},(0,l.useMDXComponents)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Type:"})," ",(0,t.jsx)(s.code,{children:"Object | Function"})]}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.strong,{children:"Default:"})}),"\n"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-js",children:"const defaultOptions = {\n  lessOptions: {\n    javascriptEnabled: true,\n  },\n  // CSS Source Map enabled by default in development environment\n  sourceMap: isDev,\n};\n"})}),"\n",(0,t.jsxs)(s.p,{children:["You can modify the config of ",(0,t.jsx)(s.a,{href:"https://github.com/webpack-contrib/less-loader",target:"_blank",rel:"noopener noreferrer",children:"less-loader"})," via ",(0,t.jsx)(s.code,{children:"tools.less"}),"."]}),"\n",(0,t.jsxs)(s.h3,{id:"object-type",children:["Object Type",(0,t.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#object-type",children:"#"})]}),"\n",(0,t.jsxs)(s.p,{children:["When ",(0,t.jsx)(s.code,{children:"tools.less"})," is configured as ",(0,t.jsx)(s.code,{children:"Object"})," type, it is merged with the default config through Object.assign in a shallow way. It should be noted that ",(0,t.jsx)(s.code,{children:"lessOptions"})," is merged through deepMerge in a deep way. For example:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-js",children:"export default {\n  tools: {\n    less: {\n      lessOptions: {\n        javascriptEnabled: false,\n      },\n    },\n  },\n};\n"})}),"\n",(0,t.jsxs)(s.h3,{id:"function-type",children:["Function Type",(0,t.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#function-type",children:"#"})]}),"\n",(0,t.jsxs)(s.p,{children:["When ",(0,t.jsx)(s.code,{children:"tools.less"})," is a Function, the default config is passed as the first parameter, which can be directly modified or returned as the final result. The second parameter provides some utility functions that can be called directly. For example:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-js",children:"export default {\n  tools: {\n    less(config) {\n      // Modify the config of lessOptions\n      config.lessOptions = {\n        javascriptEnabled: false,\n      };\n    },\n  },\n};\n"})}),"\n",(0,t.jsxs)(s.h3,{id:"modifying-less-version",children:["Modifying Less Version",(0,t.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#modifying-less-version",children:"#"})]}),"\n",(0,t.jsxs)(s.p,{children:["In some scenarios, if you need to use a specific version of Less instead of the built-in Less v4 in Builder, you can install the desired Less version in your project and set it up using the ",(0,t.jsx)(s.code,{children:"implementation"})," option of the ",(0,t.jsx)(s.code,{children:"less-loader"}),"."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-js",children:"export default {\n  tools: {\n    less: {\n      implementation: require('less'),\n    },\n  },\n};\n"})}),"\n",(0,t.jsxs)(s.h3,{id:"util-function",children:["Util Function",(0,t.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#util-function",children:"#"})]}),"\n",(0,t.jsxs)(s.h4,{id:"addexcludes",children:["addExcludes",(0,t.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#addexcludes",children:"#"})]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Type:"})," ",(0,t.jsx)(s.code,{children:"(excludes: RegExp | RegExp[]) => void"})]}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:["Used to specify which files ",(0,t.jsx)(s.code,{children:"less-loader"})," does not compile, You can pass in one or more regular expressions to match the path of less files, for example:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-js",children:"export default {\n  tools: {\n    less(config, { addExcludes }) {\n      addExcludes(/node_modules/);\n    },\n  },\n};\n"})})]})}(i=globalThis).__RSPRESS_PAGE_META||(i.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["..%2F..%2Fbuilder-doc%2Fdocs%2Fen%2Fconfig%2Ftools%2Fless.md"]={toc:[{text:"Object Type",id:"object-type",depth:3},{text:"Function Type",id:"function-type",depth:3},{text:"Modifying Less Version",id:"modifying-less-version",depth:3},{text:"Util Function",id:"util-function",depth:3},{text:"addExcludes",id:"addexcludes",depth:4}],title:"",frontmatter:{}};var c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},s=Object.assign({},(0,l.useMDXComponents)(),e.components).wrapper;return s?(0,t.jsx)(s,(0,o._)((0,r._)({},e),{children:(0,t.jsx)(d,(0,r._)({},e))})):d(e)}},93498:function(e,s,n){"use strict";n.r(s),n.d(s,{default:function(){return a}});var i,r=n("15169"),o=n("43932"),t=n("9880"),l=n("23169"),d=n("49051");function c(e){var s=Object.assign({h1:"h1",a:"a",div:"div",p:"p"},(0,l.useMDXComponents)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.h1,{id:"toolsless",children:["tools.less",(0,t.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#toolsless",children:"#"})]}),"\n",(0,t.jsxs)(s.div,{className:"rspress-directive tip",children:[(0,t.jsx)(s.div,{className:"rspress-directive-title",children:"TIP"}),(0,t.jsx)(s.div,{className:"rspress-directive-content",children:(0,t.jsxs)(s.p,{children:["This config is provided by Modern.js Builder, more detail can see ",(0,t.jsx)(s.a,{href:"https://modernjs.dev/builder/en/api/config-tools.html#toolsless",target:"_blank",rel:"noopener noreferrer",children:"tools.less"}),".\n"]})})]}),"\n","\n",(0,t.jsx)(d.default,{})]})}(i=globalThis).__RSPRESS_PAGE_META||(i.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["en%2Fconfigure%2Fapp%2Ftools%2Fless.mdx"]={toc:[],title:"tools.less",frontmatter:{sidebar_label:"less"}};var a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},s=Object.assign({},(0,l.useMDXComponents)(),e.components).wrapper;return s?(0,t.jsx)(s,(0,o._)((0,r._)({},e),{children:(0,t.jsx)(c,(0,r._)({},e))})):c(e)}}}]);