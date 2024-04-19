/*! For license information please see 92747.91ce6264.js.LICENSE.txt */
(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["92747"],{9412:function(e,n,r){"use strict";r.r(n);var s=r("39980"),i=r("9580");function t(e){let n=Object.assign({h1:"h1",a:"a",ul:"ul",li:"li",strong:"strong",code:"code",pre:"pre",p:"p",h3:"h3",div:"div"},(0,i.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h1,{id:"toolsterser",children:["tools.terser",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#toolsterser",children:"#"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Type:"})," ",(0,s.jsx)(n.code,{children:"Object | Function | undefined"})]}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"Default:"})}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"const defaultTerserOptions = {\n  terserOptions: {\n    mangle: {\n      safari10: true,\n    },\n  },\n};\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Bundler:"})," ",(0,s.jsx)(n.code,{children:"only support webpack"})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["When building for production, Builder will minimize the JavaScript code through ",(0,s.jsx)(n.a,{href:"https://github.com/webpack-contrib/terser-webpack-plugin",target:"_blank",rel:"noopener noreferrer",children:"terser-webpack-plugin"}),". The config of ",(0,s.jsx)(n.a,{href:"https://github.com/webpack-contrib/terser-webpack-plugin",target:"_blank",rel:"noopener noreferrer",children:"terser-webpack-plugin"})," can be modified via ",(0,s.jsx)(n.code,{children:"tools.terser"}),"."]}),"\n",(0,s.jsxs)(n.h3,{id:"object-type",children:["Object Type",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#object-type",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["When ",(0,s.jsx)(n.code,{children:"tools.terser"})," is ",(0,s.jsx)(n.code,{children:"Object"})," type, it will be merged with the default config via ",(0,s.jsx)(n.code,{children:"Object.assign"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"For example, to exclude some files from minification:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    terser: {\n      exclude: /\\/excludes/,\n    },\n  },\n};\n"})}),"\n",(0,s.jsxs)(n.h3,{id:"function-type",children:["Function Type",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#function-type",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["When ",(0,s.jsx)(n.code,{children:"tools.terser"})," is ",(0,s.jsx)(n.code,{children:"Function"})," type, the default config is passed in as the first parameter, the config object can be modified directly, or a value can be returned as the final result."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    terser: opts => {\n      opts.exclude = /\\/excludes/;\n    },\n  },\n};\n"})}),"\n",(0,s.jsxs)(n.div,{className:"rspress-directive tip",children:[(0,s.jsx)(n.div,{className:"rspress-directive-title",children:"Disable code minification"}),(0,s.jsx)(n.div,{className:"rspress-directive-content",children:(0,s.jsxs)(n.p,{children:["If you need to disable code minification, you can use the ",(0,s.jsx)(n.a,{href:"https://modernjs.dev/builder/en/api/config-output.html#outputdisableminimize",target:"_blank",rel:"noopener noreferrer",children:"output.disableMinimize"})," configuration.\n"]})})]})]})}function c(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(t,{...e})}):t(e)}n.default=c,c.__RSPRESS_PAGE_META={},c.__RSPRESS_PAGE_META["en%2Fconfigure%2Fapp%2Ftools%2Fterser.mdx"]={toc:[{text:"Object Type",id:"object-type",depth:3},{text:"Function Type",id:"function-type",depth:3}],title:"tools.terser",frontmatter:{sidebar_label:"terser"}}}}]);