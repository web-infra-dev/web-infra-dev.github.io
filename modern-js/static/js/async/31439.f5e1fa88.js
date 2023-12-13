/*! For license information please see 31439.f5e1fa88.js.LICENSE.txt */
(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["31439"],{3246:function(e,s,n){"use strict";n.r(s),n.d(s,{default:function(){return d}});var i=n("9880"),t=n("23169");function o(e){let s=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",pre:"pre",p:"p",a:"a",h3:"h3",h4:"h4"},(0,t.useMDXComponents)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Type:"})," ",(0,i.jsx)(s.code,{children:"Object | Function"})]}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.strong,{children:"Default:"})}),"\n"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-js",children:"const defaultOptions = {\n  // CSS Source Map enabled by default in development environment\n  sourceMap: isDev,\n};\n"})}),"\n",(0,i.jsxs)(s.p,{children:["You can modify the config of ",(0,i.jsx)(s.a,{href:"https://github.com/webpack-contrib/sass-loader",target:"_blank",rel:"noopener noreferrer",children:"sass-loader"})," via ",(0,i.jsx)(s.code,{children:"tools.sass"}),"."]}),"\n",(0,i.jsxs)(s.h3,{id:"object-type",children:["Object Type",(0,i.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#object-type",children:"#"})]}),"\n",(0,i.jsxs)(s.p,{children:["When ",(0,i.jsx)(s.code,{children:"tools.sass"})," is ",(0,i.jsx)(s.code,{children:"Object"})," type, it is merged with the default config through Object.assign. It should be noted that ",(0,i.jsx)(s.code,{children:"sassOptions"})," is merged through deepMerge in a deep way."]}),"\n",(0,i.jsx)(s.p,{children:"For example:"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-js",children:"export default {\n  tools: {\n    sass: {\n      sourceMap: true,\n    },\n  },\n};\n"})}),"\n",(0,i.jsxs)(s.h3,{id:"function-type",children:["Function Type",(0,i.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#function-type",children:"#"})]}),"\n",(0,i.jsxs)(s.p,{children:["When ",(0,i.jsx)(s.code,{children:"tools.sass"})," is a Function, the default config is passed as the first parameter, which can be directly modified or returned as the final result. The second parameter provides some utility functions that can be called directly. For Example:"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-js",children:"export default {\n  tools: {\n    sass(config) {\n      // Modify sourceMap config\n      config.additionalData = async (content, loaderContext) => {\n        // ...\n      };\n    },\n  },\n};\n"})}),"\n",(0,i.jsxs)(s.h3,{id:"modifying-sass-version",children:["Modifying Sass Version",(0,i.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#modifying-sass-version",children:"#"})]}),"\n",(0,i.jsxs)(s.p,{children:["In some scenarios, if you need to use a specific version of Sass instead of the built-in Dart Sass v1 in Builder, you can install the desired Sass version in your project and set it up using the ",(0,i.jsx)(s.code,{children:"implementation"})," option of the ",(0,i.jsx)(s.code,{children:"sass-loader"}),"."]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-js",children:"export default {\n  tools: {\n    sass: {\n      implementation: require('sass'),\n    },\n  },\n};\n"})}),"\n",(0,i.jsxs)(s.h3,{id:"utility-function",children:["Utility Function",(0,i.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#utility-function",children:"#"})]}),"\n",(0,i.jsxs)(s.h4,{id:"addexcludes",children:["addExcludes",(0,i.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#addexcludes",children:"#"})]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Type:"})," ",(0,i.jsx)(s.code,{children:"(excludes: RegExp | RegExp[]) => void"})]}),"\n"]}),"\n",(0,i.jsxs)(s.p,{children:["Used to specify which files ",(0,i.jsx)(s.code,{children:"sass-loader"})," does not compile, You can pass in one or more regular expressions to match the path of sass files, for example:"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-js",children:"export default {\n  tools: {\n    sass(config, { addExcludes }) {\n      addExcludes(/node_modules/);\n    },\n  },\n};\n"})})]})}function r(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:s}=Object.assign({},(0,t.useMDXComponents)(),e.components);return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}var d=r;r.__RSPRESS_PAGE_META={},r.__RSPRESS_PAGE_META["..%2F..%2Fbuilder-doc%2Fdocs%2Fen%2Fconfig%2Ftools%2Fsass.md"]={toc:[{text:"Object Type",id:"object-type",depth:3},{text:"Function Type",id:"function-type",depth:3},{text:"Modifying Sass Version",id:"modifying-sass-version",depth:3},{text:"Utility Function",id:"utility-function",depth:3},{text:"addExcludes",id:"addexcludes",depth:4}],title:"",frontmatter:{}}},16972:function(e,s,n){"use strict";n.r(s),n.d(s,{default:function(){return a}});var i=n("9880"),t=n("23169"),o=n("3246");function r(e){let s=Object.assign({h1:"h1",a:"a"},(0,t.useMDXComponents)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(s.h1,{id:"toolssass",children:["tools.sass",(0,i.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#toolssass",children:"#"})]}),"\n","\n",(0,i.jsx)(o.default,{})]})}function d(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:s}=Object.assign({},(0,t.useMDXComponents)(),e.components);return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(r,{...e})}):r(e)}var a=d;d.__RSPRESS_PAGE_META={},d.__RSPRESS_PAGE_META["en%2Fconfigure%2Fapp%2Ftools%2Fsass.mdx"]={toc:[],title:"tools.sass",frontmatter:{sidebar_label:"sass"}}}}]);