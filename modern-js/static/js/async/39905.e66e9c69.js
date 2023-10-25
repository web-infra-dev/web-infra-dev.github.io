(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["39905"],{64383:function(e,n,s){"use strict";s.r(n),s.d(n,{default:function(){return l}});var t=s("15169"),r=s("43932"),c=s("9880"),i=s("23169");function a(e){var n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",pre:"pre",p:"p",a:"a",h3:"h3"},(0,i.useMDXComponents)(),e.components);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:"Type:"})," ",(0,c.jsx)(n.code,{children:"Object | Function"})]}),"\n",(0,c.jsx)(n.li,{children:(0,c.jsx)(n.strong,{children:"Default:"})}),"\n"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-js",children:"const defaultOptions = {\n  // The loader options\n  loaderOptions: {},\n  // The plugin options\n  pluginOptions: {\n    // The default value of cssPath is `static/css`\n    // while the default value of cssFilename is `[name].[contenthash:8].css`\n    filename: `${cssPath}/${cssFilename}`,\n    chunkFilename: `${cssPath}/async/${cssFilename}`,\n    ignoreOrder: true,\n  },\n};\n"})}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:"Bundler:"})," ",(0,c.jsx)(n.code,{children:"only support webpack"})]}),"\n"]}),"\n",(0,c.jsxs)(n.p,{children:["The config of ",(0,c.jsx)(n.a,{href:"https://github.com/webpack-contrib/mini-css-extract-plugin",target:"_blank",rel:"noopener noreferrer",children:"mini-css-extract-plugin"})," can be modified through ",(0,c.jsx)(n.code,{children:"tools.cssExtract"}),"."]}),"\n",(0,c.jsxs)(n.h3,{id:"object-type",children:["Object Type",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#object-type",children:"#"})]}),"\n",(0,c.jsx)(n.p,{children:"When this value is an Object, it is merged with the default config via Object.assign. For example:"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    cssExtract: {\n      pluginOptions: {\n        filename: 'static/css/[name].[contenthash:8].css',\n      },\n    },\n  },\n};\n"})}),"\n",(0,c.jsxs)(n.h3,{id:"function-type",children:["Function Type",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#function-type",children:"#"})]}),"\n",(0,c.jsx)(n.p,{children:"When the value a Function, the default config is passed in as the first parameter. You can modify the config object directly, or return an object as the final config. For example:"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    cssExtract: config => {\n      config.pluginOptions.filename = 'static/css/[name].[contenthash:8].css';\n      return config;\n    },\n  },\n};\n"})}),"\n",(0,c.jsxs)(n.p,{children:["For more config details, please refer to ",(0,c.jsx)(n.a,{href:"https://github.com/webpack-contrib/mini-css-extract-plugin",target:"_blank",rel:"noopener noreferrer",children:"mini-css-extract-plugin"}),"."]})]})}function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,i.useMDXComponents)(),e.components).wrapper;return n?(0,c.jsx)(n,(0,r._)((0,t._)({},e),{children:(0,c.jsx)(a,(0,t._)({},e))})):a(e)}var l=o;o.__RSPRESS_PAGE_META={},o.__RSPRESS_PAGE_META["..%2F..%2Fbuilder-doc%2Fdocs%2Fen%2Fconfig%2Ftools%2FcssExtract.md"]={toc:[{text:"Object Type",id:"object-type",depth:3},{text:"Function Type",id:"function-type",depth:3}],title:""}},44124:function(e,n,s){"use strict";s.r(n),s.d(n,{default:function(){return d},frontmatter:function(){return h}});var t=s("15169"),r=s("43932"),c=s("9880"),i=s("23169"),a=s("64383");function o(e){var n=Object.assign({h1:"h1",a:"a",div:"div",p:"p"},(0,i.useMDXComponents)(),e.components);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(n.h1,{id:"toolscssextract",children:["tools.cssExtract",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#toolscssextract",children:"#"})]}),"\n",(0,c.jsxs)(n.div,{className:"rspress-directive tip",children:[(0,c.jsx)(n.div,{className:"rspress-directive-title",children:"TIP"}),(0,c.jsx)(n.div,{className:"rspress-directive-content",children:(0,c.jsxs)(n.p,{children:["This config is provided by Modern.js Builder, more detail can see ",(0,c.jsx)(n.a,{href:"https://modernjs.dev/builder/en/api/config-tools.html#toolscssextract",target:"_blank",rel:"noopener noreferrer",children:"tools.cssExtract"}),".\n"]})})]}),"\n","\n",(0,c.jsx)(a.default,{})]})}function l(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,i.useMDXComponents)(),e.components).wrapper;return n?(0,c.jsx)(n,(0,r._)((0,t._)({},e),{children:(0,c.jsx)(o,(0,t._)({},e))})):o(e)}var d=l;l.__RSPRESS_PAGE_META={},l.__RSPRESS_PAGE_META["en%2Fconfigure%2Fapp%2Ftools%2Fcss-extract.mdx"]={toc:[],title:"tools.cssExtract"};var h={sidebar_label:"cssExtract"}}}]);