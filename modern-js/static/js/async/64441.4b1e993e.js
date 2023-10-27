(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["64441"],{25182:function(e,s,n){"use strict";n.r(s),n.d(s,{default:function(){return l}});var t=n("15169"),i=n("43932"),o=n("9880"),r=n("23169");function c(e){var s=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",pre:"pre",p:"p",a:"a",h3:"h3",h4:"h4",div:"div"},(0,r.useMDXComponents)(),e.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.strong,{children:"Type:"})," ",(0,o.jsx)(s.code,{children:"Object | Function"})]}),"\n",(0,o.jsx)(s.li,{children:(0,o.jsx)(s.strong,{children:"Default:"})}),"\n"]}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-js",children:"const defaultOptions = {\n  postcssOptions: {\n    plugins: [\n      // The following plugins are enabled by default\n      require('postcss-nesting'),\n      require('postcss-media-minmax'),\n      require('postcss-flexbugs-fixes'),\n      require('autoprefixer')({\n        flexbox: 'no-2009',\n      }),\n      // The following plugins are only enabled when compatibility with legacy browsers is required\n      require('postcss-custom-properties'),\n      require('postcss-initial'),\n      require('postcss-page-break'),\n      require('postcss-font-variant'),\n    ],\n    // CSS Source Map enabled by default in development environment\n    sourceMap: isDev,\n  },\n};\n"})}),"\n",(0,o.jsxs)(s.p,{children:["Builder integrates PostCSS by default, you can configure ",(0,o.jsx)(s.a,{href:"https://github.com/webpack-contrib/postcss-loader",target:"_blank",rel:"noopener noreferrer",children:"postcss-loader"})," through ",(0,o.jsx)(s.code,{children:"tools.postcss"}),"."]}),"\n",(0,o.jsxs)(s.h3,{id:"function-type",children:["Function Type",(0,o.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#function-type",children:"#"})]}),"\n",(0,o.jsx)(s.p,{children:"When the value is a Function, the internal default config is passed as the first parameter, and the config object can be modified directly without returning, or an object can be returned as the final result; the second parameter is a set of tool functions for modifying the postcss-loader config."}),"\n",(0,o.jsx)(s.p,{children:"For example, you need to add a PostCSS plugin on the basis of the original plugin, and push a new plugin to the postcssOptions.plugins array:"}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-ts",children:"export default {\n  tools: {\n    postcss: opts => {\n      opts.postcssOptions.plugins.push(require('postcss-px-to-viewport'));\n    },\n  },\n};\n"})}),"\n",(0,o.jsx)(s.p,{children:"When you need to pass parameters to the PostCSS plugin, you can pass them in by function parameters:"}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-js",children:"export default {\n  tools: {\n    postcss: opts => {\n      const viewportPlugin = require('postcss-px-to-viewport')({\n        viewportWidth: 375,\n      });\n      opts.postcssOptions.plugins.push(viewportPlugin);\n    },\n  },\n};\n"})}),"\n",(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.code,{children:"tools.postcss"})," can return a config object and completely replace the default config:"]}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-js",children:"export default {\n  tools: {\n    postcss: () => {\n      return {\n        postcssOptions: {\n          plugins: [require('postcss-px-to-viewport')],\n        },\n      };\n    },\n  },\n};\n"})}),"\n",(0,o.jsxs)(s.h3,{id:"object-type",children:["Object Type",(0,o.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#object-type",children:"#"})]}),"\n",(0,o.jsxs)(s.p,{children:["When this value is an Object, it is merged with the default config via ",(0,o.jsx)(s.code,{children:"Object.assign"}),". Note that ",(0,o.jsx)(s.code,{children:"Object.assign"})," is a shallow copy and will completely overwrite the built-in ",(0,o.jsx)(s.code,{children:"presets"})," or ",(0,o.jsx)(s.code,{children:"plugins"})," array, please use it with caution."]}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-js",children:"export default {\n  tools: {\n    postcss: {\n      // Because `Object.assign` is used, the default postcssOptions will be overwritten.\n      postcssOptions: {\n        plugins: [require('postcss-px-to-viewport')],\n      },\n    },\n  },\n};\n"})}),"\n",(0,o.jsxs)(s.h3,{id:"util-functions",children:["Util Functions",(0,o.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#util-functions",children:"#"})]}),"\n",(0,o.jsxs)(s.h4,{id:"addplugins",children:["addPlugins",(0,o.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#addplugins",children:"#"})]}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.strong,{children:"Type:"})," ",(0,o.jsx)(s.code,{children:"(plugins: PostCSSPlugin | PostCSSPlugin[]) => void"})]}),"\n"]}),"\n",(0,o.jsx)(s.p,{children:"For adding additional PostCSS plugins, You can pass in a single PostCSS plugin, or an array of PostCSS plugins."}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-js",children:"export default {\n  tools: {\n    postcss: (config, { addPlugins }) => {\n      // Add a PostCSS Plugin\n      addPlugins(require('postcss-preset-env'));\n      // Add multiple PostCSS Plugins\n      addPlugins([require('postcss-preset-env'), require('postcss-import')]);\n    },\n  },\n};\n"})}),"\n",(0,o.jsxs)(s.div,{className:"rspress-directive tip",children:[(0,o.jsx)(s.div,{className:"rspress-directive-title",children:"TIP"}),(0,o.jsx)(s.div,{className:"rspress-directive-content",children:(0,o.jsx)(s.p,{children:"Builder uses the PostCSS v8 version. When you use third-party PostCSS plugins, please pay attention to whether the PostCSS version is compatible. Some legacy plugins may not work in PostCSS v8."})})]})]})}function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},s=Object.assign({},(0,r.useMDXComponents)(),e.components).wrapper;return s?(0,o.jsx)(s,(0,i._)((0,t._)({},e),{children:(0,o.jsx)(c,(0,t._)({},e))})):c(e)}var l=a;a.__RSPRESS_PAGE_META={},a.__RSPRESS_PAGE_META["..%2F..%2Fbuilder-doc%2Fdocs%2Fen%2Fconfig%2Ftools%2Fpostcss.md"]={toc:[{text:"Function Type",id:"function-type",depth:3},{text:"Object Type",id:"object-type",depth:3},{text:"Util Functions",id:"util-functions",depth:3},{text:"addPlugins",id:"addplugins",depth:4}],title:""}},70719:function(e,s,n){"use strict";n.r(s),n.d(s,{default:function(){return d},frontmatter:function(){return p}});var t=n("15169"),i=n("43932"),o=n("9880"),r=n("23169"),c=n("25182");function a(e){var s=Object.assign({h1:"h1",a:"a"},(0,r.useMDXComponents)(),e.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(s.h1,{id:"toolspostcss",children:["tools.postcss",(0,o.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#toolspostcss",children:"#"})]}),"\n","\n",(0,o.jsx)(c.default,{})]})}function l(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},s=Object.assign({},(0,r.useMDXComponents)(),e.components).wrapper;return s?(0,o.jsx)(s,(0,i._)((0,t._)({},e),{children:(0,o.jsx)(a,(0,t._)({},e))})):a(e)}var d=l;l.__RSPRESS_PAGE_META={},l.__RSPRESS_PAGE_META["en%2Fconfigure%2Fapp%2Ftools%2Fpostcss.mdx"]={toc:[],title:"tools.postcss"};var p={sidebar_label:"postcss"}}}]);