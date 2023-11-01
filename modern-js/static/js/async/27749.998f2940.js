(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["27749"],{27339:function(e,n,s){"use strict";s.r(n),s.d(n,{default:function(){return d}});var i=s("9880"),t=s("23169");function o(e){let n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",pre:"pre",p:"p",a:"a",h3:"h3",h4:"h4"},(0,t.useMDXComponents)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Type:"})," ",(0,i.jsx)(n.code,{children:"Object | Function"})]}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"Default:"})}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"const defaultOptions = {\n  lessOptions: {\n    javascriptEnabled: true,\n  },\n  // CSS Source Map enabled by default in development environment\n  sourceMap: isDev,\n};\n"})}),"\n",(0,i.jsxs)(n.p,{children:["You can modify the config of ",(0,i.jsx)(n.a,{href:"https://github.com/webpack-contrib/less-loader",target:"_blank",rel:"noopener noreferrer",children:"less-loader"})," via ",(0,i.jsx)(n.code,{children:"tools.less"}),"."]}),"\n",(0,i.jsxs)(n.h3,{id:"object-type",children:["Object Type",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#object-type",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["When ",(0,i.jsx)(n.code,{children:"tools.less"})," is configured as ",(0,i.jsx)(n.code,{children:"Object"})," type, it is merged with the default config through Object.assign in a shallow way. It should be noted that ",(0,i.jsx)(n.code,{children:"lessOptions"})," is merged through deepMerge in a deep way. For example:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    less: {\n      lessOptions: {\n        javascriptEnabled: false,\n      },\n    },\n  },\n};\n"})}),"\n",(0,i.jsxs)(n.h3,{id:"function-type",children:["Function Type",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#function-type",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["When ",(0,i.jsx)(n.code,{children:"tools.less"})," is a Function, the default config is passed as the first parameter, which can be directly modified or returned as the final result. The second parameter provides some utility functions that can be called directly. For example:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    less(config) {\n      // Modify the config of lessOptions\n      config.lessOptions = {\n        javascriptEnabled: false,\n      };\n    },\n  },\n};\n"})}),"\n",(0,i.jsxs)(n.h3,{id:"modifying-less-version",children:["Modifying Less Version",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#modifying-less-version",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["In some scenarios, if you need to use a specific version of Less instead of the built-in Less v4 in Builder, you can install the desired Less version in your project and set it up using the ",(0,i.jsx)(n.code,{children:"implementation"})," option of the ",(0,i.jsx)(n.code,{children:"less-loader"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    less: {\n      implementation: require('less'),\n    },\n  },\n};\n"})}),"\n",(0,i.jsxs)(n.h3,{id:"util-function",children:["Util Function",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#util-function",children:"#"})]}),"\n",(0,i.jsxs)(n.h4,{id:"addexcludes",children:["addExcludes",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#addexcludes",children:"#"})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Type:"})," ",(0,i.jsx)(n.code,{children:"(excludes: RegExp | RegExp[]) => void"})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Used to specify which files ",(0,i.jsx)(n.code,{children:"less-loader"})," does not compile, You can pass in one or more regular expressions to match the path of less files, for example:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    less(config, { addExcludes }) {\n      addExcludes(/node_modules/);\n    },\n  },\n};\n"})})]})}function l(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,t.useMDXComponents)(),e.components);return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}var d=l;l.__RSPRESS_PAGE_META={},l.__RSPRESS_PAGE_META["..%2F..%2Fbuilder-doc%2Fdocs%2Fen%2Fconfig%2Ftools%2Fless.md"]={toc:[{text:"Object Type",id:"object-type",depth:3},{text:"Function Type",id:"function-type",depth:3},{text:"Modifying Less Version",id:"modifying-less-version",depth:3},{text:"Util Function",id:"util-function",depth:3},{text:"addExcludes",id:"addexcludes",depth:4}],title:""}},41416:function(e,n,s){"use strict";s.r(n),s.d(n,{default:function(){return r},frontmatter:function(){return c}});var i=s("9880"),t=s("23169"),o=s("27339");function l(e){let n=Object.assign({h1:"h1",a:"a"},(0,t.useMDXComponents)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.h1,{id:"toolsless",children:["tools.less",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#toolsless",children:"#"})]}),"\n","\n",(0,i.jsx)(o.default,{})]})}function d(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,t.useMDXComponents)(),e.components);return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}var r=d;d.__RSPRESS_PAGE_META={},d.__RSPRESS_PAGE_META["en%2Fconfigure%2Fapp%2Ftools%2Fless.mdx"]={toc:[],title:"tools.less"};let c={sidebar_label:"less"}}}]);