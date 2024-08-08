"use strict";(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["79918"],{81185:function(e,n,r){r.r(n),r.d(n,{default:function(){return a}});var s=r(38093),t=r(75878);function d(e){let n=Object.assign({h1:"h1",a:"a",ul:"ul",li:"li",strong:"strong",code:"code",div:"div",p:"p",h3:"h3",pre:"pre",h4:"h4"},(0,t.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h1,{id:"toolstsloader",children:["tools.tsLoader",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#toolstsloader",children:"#"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Type:"})," ",(0,s.jsx)(n.code,{children:"Object | Function | undefined"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Default:"})," ",(0,s.jsx)(n.code,{children:"undefined"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Bundler:"})," ",(0,s.jsx)(n.code,{children:"only support webpack"})]}),"\n"]}),"\n",(0,s.jsxs)(n.div,{className:"rspress-directive warning",children:[(0,s.jsx)(n.div,{className:"rspress-directive-title",children:"Alternatives for ts-loader"}),(0,s.jsxs)(n.div,{className:"rspress-directive-content",children:[(0,s.jsxs)(n.p,{children:["Using ",(0,s.jsx)(n.a,{href:"https://modernjs.dev/builder/en/guide/basic/typescript.html#why-babel-is-the-default-option",target:"_blank",rel:"noopener noreferrer",children:"babel-loader"})," or ",(0,s.jsx)(n.a,{href:"https://modernjs.dev/en/guide/advanced/rspack-start.html",target:"_blank",rel:"noopener noreferrer",children:"Rspack"})," instead of ts-loader can significantly improve compilation speed and provide better extendability."]}),"\n",(0,s.jsxs)(n.p,{children:["ts-loader cannot be used with certain features such as ",(0,s.jsx)(n.a,{href:"https://modernjs.dev/en/configure/app/source/transform-import.html",target:"_blank",rel:"noopener noreferrer",children:"source.transformImport"})," and ",(0,s.jsx)(n.a,{href:"https://modernjs.dev/en/configure/app/tools/styled-components.html",target:"_blank",rel:"noopener noreferrer",children:"tools.styledComponents"})," provided by Babel & SWC.\n"]})]})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"ts-loader"})," is not enabled by default in the project. When ",(0,s.jsx)(n.code,{children:"tools.tsLoader"})," is not undefined, builder will use ts-loader instead of babel-loader to compile TypeScript code."]}),"\n",(0,s.jsxs)(n.h3,{id:"object-type",children:["Object Type",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#object-type",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"When this value is an Object, it is merged with the default configuration via Object.assign."}),"\n",(0,s.jsx)(n.p,{children:"The default configuration is as follows:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "compilerOptions": {\n    "target": "es5",\n    "module": "ESNext"\n  },\n  "transpileOnly": true,\n  "allowTsInNodeModules": true\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["You can override the default configuration via the ",(0,s.jsx)(n.code,{children:"tools.tsLoader"})," configuration option:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"export default {\n  tools: {\n    tsLoader: {\n      allowTsInNodeModules: false,\n    },\n  },\n};\n"})}),"\n",(0,s.jsxs)(n.h3,{id:"function-type",children:["Function Type",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#function-type",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["When this value is a Function, the default configuration is passed in as the first parameter, the configuration object can be modified directly, or an object can be returned as the final configuration.The second parameter is the util functions to modify the ",(0,s.jsx)(n.code,{children:"ts-loader"})," configuration. For example:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"export default {\n  tools: {\n    tsLoader: opts => {\n      opts.allowTsInNodeModules = false;\n    },\n  },\n};\n"})}),"\n",(0,s.jsxs)(n.h3,{id:"util-functions",children:["Util Functions",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#util-functions",children:"#"})]}),"\n",(0,s.jsxs)(n.h4,{id:"addincludes",children:["addIncludes",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#addincludes",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["Deprecated, please use ",(0,s.jsx)(n.a,{href:"https://modernjs.dev/en/configure/app/source/include.html",target:"_blank",rel:"noopener noreferrer",children:"source.include"})," instead, both have the same functionality."]}),"\n",(0,s.jsxs)(n.h4,{id:"addexcludes",children:["addExcludes",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#addexcludes",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["Deprecated, please use ",(0,s.jsx)(n.a,{href:"https://modernjs.dev/en/configure/app/source/exclude.html",target:"_blank",rel:"noopener noreferrer",children:"source.exclude"})," instead, both have the same functionality."]})]})}function i(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,t.ah)(),e.components);return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}let a=i;i.__RSPRESS_PAGE_META={},i.__RSPRESS_PAGE_META["en%2Fconfigure%2Fapp%2Ftools%2Fts-loader.mdx"]={toc:[{text:"Object Type",id:"object-type",depth:3},{text:"Function Type",id:"function-type",depth:3},{text:"Util Functions",id:"util-functions",depth:3},{text:"addIncludes",id:"addincludes",depth:4},{text:"addExcludes",id:"addexcludes",depth:4}],title:"tsLoader",frontmatter:{title:"tsLoader"}}}}]);