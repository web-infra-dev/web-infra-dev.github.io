/*! For license information please see 26571.fa71e801.js.LICENSE.txt */
(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["26571"],{69369:function(e,n,s){"use strict";s.r(n);var r=s("39980"),o=s("76713");function t(e){let n=Object.assign({h1:"h1",a:"a",ul:"ul",li:"li",strong:"strong",code:"code",p:"p",pre:"pre",div:"div",h3:"h3"},(0,o.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"toolscssloader",children:["tools.cssLoader",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#toolscssloader",children:"#"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Type:"})," ",(0,r.jsx)(n.code,{children:"Object | Function"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Default:"})," ",(0,r.jsx)(n.code,{children:"undefined"})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["The config of ",(0,r.jsx)(n.a,{href:"https://github.com/webpack-contrib/css-loader",target:"_blank",rel:"noopener noreferrer",children:"css-loader"})," can be modified through ",(0,r.jsx)(n.code,{children:"tools.cssLoader"}),". The default config is as follows:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"{\n  modules: {\n    auto: true,\n    exportLocalsConvention: 'camelCase',\n    localIdentName: config.output.cssModuleLocalIdentName,\n    // isServer indicates node (SSR) build\n    // isWebWorker indicates web worker build\n    exportOnlyLocals: isServer || isWebWorker,\n  },\n  // CSS Source Map enabled by default in development environment\n  sourceMap: isDev,\n  // importLoaders is `1` when compiling css files, and is `2` when compiling sass/less files\n  importLoaders: 1 || 2,\n}\n"})}),"\n",(0,r.jsxs)(n.div,{className:"rspress-directive tip",children:[(0,r.jsx)(n.div,{className:"rspress-directive-title",children:"TIP"}),(0,r.jsxs)(n.div,{className:"rspress-directive-content",children:[(0,r.jsxs)(n.p,{children:["When using Rspack as the bundler, this configuration is only supported when set ",(0,r.jsx)(n.a,{href:"https://modernjs.dev/builder/en/api/config-output.html#outputdisablecssextract",target:"_blank",rel:"noopener noreferrer",children:"disableCssExtract"})," is true."]}),"\n",(0,r.jsxs)(n.p,{children:["To modify CSS Modules configuration, it is recommended to use the ",(0,r.jsx)(n.a,{href:"https://modernjs.dev/builder/en/api/config-output.html#outputcssmodules",target:"_blank",rel:"noopener noreferrer",children:"output.cssModules"})," configuration.\n"]})]})]}),"\n",(0,r.jsxs)(n.h3,{id:"object-type",children:["Object Type",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#object-type",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"When this value is an Object, it is merged with the default config via deep merge. For example:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    cssLoader: {\n      modules: {\n        exportOnlyLocals: true,\n      },\n    },\n  },\n};\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"function-type",children:["Function Type",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#function-type",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"When the value is a Function, the default config is passed in as the first parameter. You can modify the config object directly, or return an object as the final config. For example:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    cssLoader: config => {\n      config.modules.exportOnlyLocals = true;\n      return config;\n    },\n  },\n};\n"})})]})}function i(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,o.useMDXComponents)(),e.components);return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(t,{...e})}):t(e)}n.default=i,i.__RSPRESS_PAGE_META={},i.__RSPRESS_PAGE_META["en%2Fconfigure%2Fapp%2Ftools%2Fcss-loader.mdx"]={toc:[{text:"Object Type",id:"object-type",depth:3},{text:"Function Type",id:"function-type",depth:3}],title:"tools.cssLoader",frontmatter:{sidebar_label:"cssLoader"}}}}]);