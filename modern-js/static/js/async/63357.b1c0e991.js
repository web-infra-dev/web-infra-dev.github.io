/*! For license information please see 63357.b1c0e991.js.LICENSE.txt */
(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["63357"],{33086:function(e,n,s){"use strict";s.r(n);var t=s("39980"),c=s("96954");function i(e){let n=Object.assign({h1:"h1",a:"a",p:"p",ul:"ul",li:"li",strong:"strong",code:"code",pre:"pre",h3:"h3"},(0,c.useMDXComponents)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.h1,{id:"toolscssextract",children:["tools.cssExtract",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#toolscssextract",children:"#"})]}),"\n",(0,t.jsx)(n.p,{children:";"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Type:"})," ",(0,t.jsx)(n.code,{children:"Object | Function"})]}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"Default:"})}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"const defaultOptions = {\n  // The loader options\n  loaderOptions: {},\n  // The plugin options\n  pluginOptions: {\n    // The default value of cssPath is `static/css`\n    // while the default value of cssFilename is `[name].[contenthash:8].css`\n    filename: `${cssPath}/${cssFilename}`,\n    chunkFilename: `${cssPath}/async/${cssFilename}`,\n    ignoreOrder: true,\n  },\n};\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Bundler:"})," ",(0,t.jsx)(n.code,{children:"only support webpack"})]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["The config of ",(0,t.jsx)(n.a,{href:"https://github.com/webpack-contrib/mini-css-extract-plugin",target:"_blank",rel:"noopener noreferrer",children:"mini-css-extract-plugin"})," can be modified through ",(0,t.jsx)(n.code,{children:"tools.cssExtract"}),"."]}),"\n",(0,t.jsxs)(n.h3,{id:"object-type",children:["Object Type",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#object-type",children:"#"})]}),"\n",(0,t.jsx)(n.p,{children:"When this value is an Object, it is merged with the default config via Object.assign. For example:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    cssExtract: {\n      pluginOptions: {\n        filename: 'static/css/[name].[contenthash:8].css',\n      },\n    },\n  },\n};\n"})}),"\n",(0,t.jsxs)(n.h3,{id:"function-type",children:["Function Type",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#function-type",children:"#"})]}),"\n",(0,t.jsx)(n.p,{children:"When the value a Function, the default config is passed in as the first parameter. You can modify the config object directly, or return an object as the final config. For example:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    cssExtract: config => {\n      config.pluginOptions.filename = 'static/css/[name].[contenthash:8].css';\n      return config;\n    },\n  },\n};\n"})}),"\n",(0,t.jsxs)(n.p,{children:["For more config details, please refer to ",(0,t.jsx)(n.a,{href:"https://github.com/webpack-contrib/mini-css-extract-plugin",target:"_blank",rel:"noopener noreferrer",children:"mini-css-extract-plugin"}),"."]})]})}function r(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,c.useMDXComponents)(),e.components);return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(i,{...e})}):i(e)}n.default=r,r.__RSPRESS_PAGE_META={},r.__RSPRESS_PAGE_META["en%2Fconfigure%2Fapp%2Ftools%2Fcss-extract.mdx"]={toc:[{text:"Object Type",id:"object-type",depth:3},{text:"Function Type",id:"function-type",depth:3}],title:"tools.cssExtract",frontmatter:{sidebar_label:"cssExtract"}}}}]);