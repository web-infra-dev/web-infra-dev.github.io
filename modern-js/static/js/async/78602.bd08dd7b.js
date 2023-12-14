/*! For license information please see 78602.bd08dd7b.js.LICENSE.txt */
(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["78602"],{95088:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return i}});var s=t("9880"),d=t("23169");function r(e){let n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",h3:"h3",a:"a",pre:"pre",h4:"h4"},(0,d.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Type:"})," ",(0,s.jsx)(n.code,{children:"Object | Function | undefined"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Default:"})," ",(0,s.jsx)(n.code,{children:"undefined"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Bundler:"})," ",(0,s.jsx)(n.code,{children:"only support webpack"})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"ts-loader"})," is not enabled by default in the project. When ",(0,s.jsx)(n.code,{children:"tools.tsLoader"})," is not undefined, builder will use ts-loader instead of babel-loader to compile TypeScript code."]}),"\n",(0,s.jsxs)(n.h3,{id:"object-type",children:["Object Type",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#object-type",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"When this value is an Object, it is merged with the default configuration via Object.assign."}),"\n",(0,s.jsx)(n.p,{children:"The default configuration is as follows:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "compilerOptions": {\n    "target": "es5",\n    "module": "ESNext"\n  },\n  "transpileOnly": true,\n  "allowTsInNodeModules": true\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["You can override the default configuration via the ",(0,s.jsx)(n.code,{children:"tools.tsLoader"})," configuration option:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"export default {\n  tools: {\n    tsLoader: {\n      allowTsInNodeModules: false,\n    },\n  },\n};\n"})}),"\n",(0,s.jsxs)(n.h3,{id:"function-type",children:["Function Type",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#function-type",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["When this value is a Function, the default configuration is passed in as the first parameter, the configuration object can be modified directly, or an object can be returned as the final configuration.The second parameter is the util functions to modify the ",(0,s.jsx)(n.code,{children:"ts-loader"})," configuration. For example:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"export default {\n  tools: {\n    tsLoader: opts => {\n      opts.allowTsInNodeModules = false;\n    },\n  },\n};\n"})}),"\n",(0,s.jsxs)(n.h3,{id:"util-functions",children:["Util Functions",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#util-functions",children:"#"})]}),"\n",(0,s.jsxs)(n.h4,{id:"addincludes",children:["addIncludes",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#addincludes",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["Deprecated, please use ",(0,s.jsx)(n.a,{href:"https://modernjs.dev/en/configure/app/source/include.html",target:"_blank",rel:"noopener noreferrer",children:"source.include"})," instead, both have the same functionality."]}),"\n",(0,s.jsxs)(n.h4,{id:"addexcludes",children:["addExcludes",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#addexcludes",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["Deprecated, please use ",(0,s.jsx)(n.a,{href:"https://modernjs.dev/en/configure/app/source/exclude.html",target:"_blank",rel:"noopener noreferrer",children:"source.exclude"})," instead, both have the same functionality."]})]})}function o(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,d.useMDXComponents)(),e.components);return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(r,{...e})}):r(e)}var i=o;o.__RSPRESS_PAGE_META={},o.__RSPRESS_PAGE_META["..%2F..%2Fbuilder-doc%2Fdocs%2Fen%2Fconfig%2Ftools%2FtsLoader.md"]={toc:[{text:"Object Type",id:"object-type",depth:3},{text:"Function Type",id:"function-type",depth:3},{text:"Util Functions",id:"util-functions",depth:3},{text:"addIncludes",id:"addincludes",depth:4},{text:"addExcludes",id:"addexcludes",depth:4}],title:"",frontmatter:{}}},58479:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return a}});var s=t("9880"),d=t("23169"),r=t("95088");function o(e){let n=Object.assign({h1:"h1",a:"a"},(0,d.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h1,{id:"toolstsloader",children:["tools.tsLoader",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#toolstsloader",children:"#"})]}),"\n","\n",(0,s.jsx)(r.default,{})]})}function i(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,d.useMDXComponents)(),e.components);return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}var a=i;i.__RSPRESS_PAGE_META={},i.__RSPRESS_PAGE_META["en%2Fconfigure%2Fapp%2Ftools%2Fts-loader.mdx"]={toc:[],title:"tools.tsLoader",frontmatter:{sidebar_label:"tsLoader"}}}}]);