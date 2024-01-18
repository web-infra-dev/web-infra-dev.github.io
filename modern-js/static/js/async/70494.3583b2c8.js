/*! For license information please see 70494.3583b2c8.js.LICENSE.txt */
(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["70494"],{82413:function(e,n,s){"use strict";s.r(n),s.d(n,{default:function(){return i}});var t=s("39980"),r=s("96954");function d(e){let n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",div:"div",p:"p",a:"a",h3:"h3",pre:"pre",h4:"h4"},(0,r.useMDXComponents)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Type:"})," ",(0,t.jsx)(n.code,{children:"Object | Function | undefined"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Default:"})," ",(0,t.jsx)(n.code,{children:"undefined"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Bundler:"})," ",(0,t.jsx)(n.code,{children:"only support webpack"})]}),"\n"]}),"\n",(0,t.jsxs)(n.div,{className:"rspress-directive warning",children:[(0,t.jsx)(n.div,{className:"rspress-directive-title",children:"Alternatives for ts-loader"}),(0,t.jsxs)(n.div,{className:"rspress-directive-content",children:[(0,t.jsxs)(n.p,{children:["Using ",(0,t.jsx)(n.a,{href:"https://modernjs.dev/builder/en/guide/basic/typescript.html#why-babel-is-the-default-option",target:"_blank",rel:"noopener noreferrer",children:"babel-loader"})," or ",(0,t.jsx)(n.a,{href:"https://modernjs.dev/en/guide/advanced/rspack-start.html",target:"_blank",rel:"noopener noreferrer",children:"Rspack"})," instead of ts-loader can significantly improve compilation speed and provide better extendability."]}),"\n",(0,t.jsxs)(n.p,{children:["ts-loader cannot be used with certain features such as ",(0,t.jsx)(n.a,{href:"https://modernjs.dev/en/configure/app/source/transform-import.html",target:"_blank",rel:"noopener noreferrer",children:"source.transformImport"})," and ",(0,t.jsx)(n.a,{href:"https://modernjs.dev/en/configure/app/tools/styled-components.html",target:"_blank",rel:"noopener noreferrer",children:"tools.styledComponents"})," provided by Babel & SWC.\n"]})]})]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"ts-loader"})," is not enabled by default in the project. When ",(0,t.jsx)(n.code,{children:"tools.tsLoader"})," is not undefined, builder will use ts-loader instead of babel-loader to compile TypeScript code."]}),"\n",(0,t.jsxs)(n.h3,{id:"object-type",children:["Object Type",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#object-type",children:"#"})]}),"\n",(0,t.jsx)(n.p,{children:"When this value is an Object, it is merged with the default configuration via Object.assign."}),"\n",(0,t.jsx)(n.p,{children:"The default configuration is as follows:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "compilerOptions": {\n    "target": "es5",\n    "module": "ESNext"\n  },\n  "transpileOnly": true,\n  "allowTsInNodeModules": true\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["You can override the default configuration via the ",(0,t.jsx)(n.code,{children:"tools.tsLoader"})," configuration option:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"export default {\n  tools: {\n    tsLoader: {\n      allowTsInNodeModules: false,\n    },\n  },\n};\n"})}),"\n",(0,t.jsxs)(n.h3,{id:"function-type",children:["Function Type",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#function-type",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:["When this value is a Function, the default configuration is passed in as the first parameter, the configuration object can be modified directly, or an object can be returned as the final configuration.The second parameter is the util functions to modify the ",(0,t.jsx)(n.code,{children:"ts-loader"})," configuration. For example:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"export default {\n  tools: {\n    tsLoader: opts => {\n      opts.allowTsInNodeModules = false;\n    },\n  },\n};\n"})}),"\n",(0,t.jsxs)(n.h3,{id:"util-functions",children:["Util Functions",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#util-functions",children:"#"})]}),"\n",(0,t.jsxs)(n.h4,{id:"addincludes",children:["addIncludes",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#addincludes",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:["Deprecated, please use ",(0,t.jsx)(n.a,{href:"https://modernjs.dev/en/configure/app/source/include.html",target:"_blank",rel:"noopener noreferrer",children:"source.include"})," instead, both have the same functionality."]}),"\n",(0,t.jsxs)(n.h4,{id:"addexcludes",children:["addExcludes",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#addexcludes",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:["Deprecated, please use ",(0,t.jsx)(n.a,{href:"https://modernjs.dev/en/configure/app/source/exclude.html",target:"_blank",rel:"noopener noreferrer",children:"source.exclude"})," instead, both have the same functionality."]})]})}function o(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,r.useMDXComponents)(),e.components);return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}var i=o;o.__RSPRESS_PAGE_META={},o.__RSPRESS_PAGE_META["..%2F..%2Fbuilder-doc%2Fdocs%2Fen%2Fconfig%2Ftools%2FtsLoader.md"]={toc:[{text:"Object Type",id:"object-type",depth:3},{text:"Function Type",id:"function-type",depth:3},{text:"Util Functions",id:"util-functions",depth:3},{text:"addIncludes",id:"addincludes",depth:4},{text:"addExcludes",id:"addexcludes",depth:4}],title:"",frontmatter:{}}},29154:function(e,n,s){"use strict";s.r(n),s.d(n,{default:function(){return a}});var t=s("39980"),r=s("96954"),d=s("82413");function o(e){let n=Object.assign({h1:"h1",a:"a"},(0,r.useMDXComponents)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.h1,{id:"toolstsloader",children:["tools.tsLoader",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#toolstsloader",children:"#"})]}),"\n","\n",(0,t.jsx)(d.default,{})]})}function i(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,r.useMDXComponents)(),e.components);return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}var a=i;i.__RSPRESS_PAGE_META={},i.__RSPRESS_PAGE_META["en%2Fconfigure%2Fapp%2Ftools%2Fts-loader.mdx"]={toc:[],title:"tools.tsLoader",frontmatter:{sidebar_label:"tsLoader"}}}}]);