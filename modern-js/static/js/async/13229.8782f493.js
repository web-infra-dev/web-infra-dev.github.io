(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["13229"],{59795:function(s,n,e){"use strict";e.r(n),e.d(n,{default:function(){return c}});var t=e("9880"),r=e("23169");function o(s){let n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",pre:"pre",p:"p",a:"a",h3:"h3",h4:"h4",div:"div"},(0,r.useMDXComponents)(),s.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"\u7C7B\u578B\uFF1A"})," ",(0,t.jsx)(n.code,{children:"Object | Function"})]}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"\u9ED8\u8BA4\u503C\uFF1A"})}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"const defaultOptions = {\n  postcssOptions: {\n    plugins: [\n      // \u4EE5\u4E0B\u63D2\u4EF6\u9ED8\u8BA4\u542F\u7528\n      require('postcss-nesting'),\n      require('postcss-media-minmax'),\n      require('postcss-flexbugs-fixes'),\n      require('autoprefixer')({\n        flexbox: 'no-2009',\n      }),\n      // \u4EE5\u4E0B\u63D2\u4EF6\u4EC5\u5728\u9700\u8981\u517C\u5BB9\u4F4E\u7248\u672C\u6D4F\u89C8\u5668\u65F6\u542F\u7528\n      require('postcss-custom-properties'),\n      require('postcss-initial'),\n      require('postcss-page-break'),\n      require('postcss-font-variant'),\n    ],\n    // \u9ED8\u8BA4\u5728\u5F00\u53D1\u73AF\u5883\u4E0B\u542F\u7528 CSS \u7684 Source Map\n    sourceMap: isDev,\n  },\n};\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Builder \u9ED8\u8BA4\u96C6\u6210 PostCSS\uFF0C\u4F60\u53EF\u4EE5\u901A\u8FC7 ",(0,t.jsx)(n.code,{children:"tools.postcss"})," \u5BF9 ",(0,t.jsx)(n.a,{href:"https://github.com/webpack-contrib/postcss-loader",target:"_blank",rel:"noopener noreferrer",children:"postcss-loader"})," \u8FDB\u884C\u914D\u7F6E\u3002"]}),"\n",(0,t.jsxs)(n.h3,{id:"function-\u7C7B\u578B",children:["Function \u7C7B\u578B",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#function-\u7C7B\u578B",children:"#"})]}),"\n",(0,t.jsx)(n.p,{children:"\u503C\u4E3A Function \u7C7B\u578B\u65F6\uFF0C\u5185\u90E8\u9ED8\u8BA4\u914D\u7F6E\u4F5C\u4E3A\u7B2C\u4E00\u53C2\u6570\u4F20\u5165\uFF0C\u53EF\u4EE5\u76F4\u63A5\u4FEE\u6539\u914D\u7F6E\u5BF9\u8C61\u4E0D\u505A\u8FD4\u56DE\uFF0C\u4E5F\u53EF\u4EE5\u8FD4\u56DE\u4E00\u4E2A\u5BF9\u8C61\u4F5C\u4E3A\u6700\u7EC8\u7ED3\u679C\uFF1B\u7B2C\u4E8C\u4E2A\u53C2\u6570\u4E3A\u4FEE\u6539 postcss-loader \u914D\u7F6E\u7684\u5DE5\u5177\u51FD\u6570\u96C6\u5408\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u4F8B\u5982\uFF0C\u9700\u8981\u5728\u539F\u6709\u63D2\u4EF6\u7684\u57FA\u7840\u4E0A\u65B0\u589E\u4E00\u4E2A PostCSS \u63D2\u4EF6\uFF0C\u5728 postcssOptions.plugins \u6570\u7EC4\u4E2D push \u4E00\u4E2A\u65B0\u7684\u63D2\u4EF6\u5373\u53EF\uFF1A"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"export default {\n  tools: {\n    postcss: opts => {\n      opts.postcssOptions.plugins.push(require('postcss-px-to-viewport'));\n    },\n  },\n};\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u9700\u8981\u7ED9 PostCSS \u63D2\u4EF6\u4F20\u9012\u53C2\u6570\u65F6\uFF0C\u53EF\u4EE5\u901A\u8FC7\u51FD\u6570\u53C2\u6570\u7684\u5F62\u5F0F\u8FDB\u884C\u4F20\u5165\uFF1A"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    postcss: opts => {\n      const viewportPlugin = require('postcss-px-to-viewport')({\n        viewportWidth: 375,\n      });\n      opts.postcssOptions.plugins.push(viewportPlugin);\n    },\n  },\n};\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"tools.postcss"})," \u53EF\u4EE5\u8FD4\u56DE\u4E00\u4E2A\u914D\u7F6E\u5BF9\u8C61\uFF0C\u5E76\u5B8C\u5168\u66FF\u6362\u9ED8\u8BA4\u914D\u7F6E\uFF1A"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    postcss: () => {\n      return {\n        postcssOptions: {\n          plugins: [require('postcss-px-to-viewport')],\n        },\n      };\n    },\n  },\n};\n"})}),"\n",(0,t.jsxs)(n.h3,{id:"object-\u7C7B\u578B",children:["Object \u7C7B\u578B",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#object-\u7C7B\u578B",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:["\u5F53\u6B64\u503C\u4E3A Object \u7C7B\u578B\u65F6\uFF0C\u4E0E\u9ED8\u8BA4\u914D\u7F6E\u901A\u8FC7 ",(0,t.jsx)(n.code,{children:"Object.assign"})," \u5408\u5E76\u3002\u6CE8\u610F ",(0,t.jsx)(n.code,{children:"Object.assign"})," \u662F\u6D45\u62F7\u8D1D\uFF0C\u4F1A\u5B8C\u5168\u8986\u76D6\u5185\u7F6E\u7684 ",(0,t.jsx)(n.code,{children:"plugins"})," \u6570\u7EC4\uFF0C\u8BF7\u8C28\u614E\u4F7F\u7528\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    postcss: {\n      // \u7531\u4E8E\u4F7F\u7528 `Object.assign` \u5408\u5E76\uFF0C\u56E0\u6B64\u9ED8\u8BA4\u7684 postcssOptions \u4F1A\u88AB\u8986\u76D6\u3002\n      postcssOptions: {\n        plugins: [require('postcss-px-to-viewport')],\n      },\n    },\n  },\n};\n"})}),"\n",(0,t.jsxs)(n.h3,{id:"\u5DE5\u5177\u51FD\u6570",children:["\u5DE5\u5177\u51FD\u6570",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u5DE5\u5177\u51FD\u6570",children:"#"})]}),"\n",(0,t.jsxs)(n.h4,{id:"addplugins",children:["addPlugins",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#addplugins",children:"#"})]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"\u7C7B\u578B\uFF1A"})," ",(0,t.jsx)(n.code,{children:"(plugins: PostCSSPlugin | PostCSSPlugin[]) => void"})]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"\u7528\u4E8E\u6DFB\u52A0\u989D\u5916\u7684 PostCSS \u63D2\u4EF6\uFF0C\u4F60\u53EF\u4EE5\u4F20\u5165\u5355\u4E2A PostCSS \u63D2\u4EF6\uFF0C\u4E5F\u53EF\u4EE5\u4F20\u5165 PostCSS \u63D2\u4EF6\u6570\u7EC4\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    postcss: (config, { addPlugins }) => {\n      // \u6DFB\u52A0\u4E00\u4E2A\u63D2\u4EF6\n      addPlugins(require('postcss-preset-env'));\n      // \u6279\u91CF\u6DFB\u52A0\u63D2\u4EF6\n      addPlugins([require('postcss-preset-env'), require('postcss-import')]);\n    },\n  },\n};\n"})}),"\n",(0,t.jsxs)(n.div,{className:"rspress-directive tip",children:[(0,t.jsx)(n.div,{className:"rspress-directive-title",children:"TIP"}),(0,t.jsx)(n.div,{className:"rspress-directive-content",children:(0,t.jsx)(n.p,{children:"Builder \u4E2D\u4F7F\u7528\u7684 PostCSS \u7248\u672C\u4E3A v8\uFF0C\u5F53\u4F60\u5F15\u5165\u793E\u533A\u4E2D\u7684 PostCSS \u63D2\u4EF6\u65F6\uFF0C\u8BF7\u6CE8\u610F\u7248\u672C\u662F\u5426\u9002\u914D\uFF0C\u90E8\u5206\u65E7\u7248\u672C\u63D2\u4EF6\u53EF\u80FD\u65E0\u6CD5\u5728 PostCSS v8 \u4E0B\u8FD0\u884C\u3002"})})]})]})}function i(){let s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,r.useMDXComponents)(),s.components);return n?(0,t.jsx)(n,{...s,children:(0,t.jsx)(o,{...s})}):o(s)}var c=i;i.__RSPRESS_PAGE_META={},i.__RSPRESS_PAGE_META["..%2F..%2Fbuilder-doc%2Fdocs%2Fzh%2Fconfig%2Ftools%2Fpostcss.md"]={toc:[{text:"Function \u7C7B\u578B",id:"function-\u7C7B\u578B",depth:3},{text:"Object \u7C7B\u578B",id:"object-\u7C7B\u578B",depth:3},{text:"\u5DE5\u5177\u51FD\u6570",id:"\u5DE5\u5177\u51FD\u6570",depth:3},{text:"addPlugins",id:"addplugins",depth:4}],title:""}},6007:function(s,n,e){"use strict";e.r(n),e.d(n,{default:function(){return d},frontmatter:function(){return l}});var t=e("9880"),r=e("23169"),o=e("59795");function i(s){let n=Object.assign({h1:"h1",a:"a"},(0,r.useMDXComponents)(),s.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.h1,{id:"toolspostcss",children:["tools.postcss",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#toolspostcss",children:"#"})]}),"\n","\n",(0,t.jsx)(o.default,{})]})}function c(){let s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,r.useMDXComponents)(),s.components);return n?(0,t.jsx)(n,{...s,children:(0,t.jsx)(i,{...s})}):i(s)}var d=c;c.__RSPRESS_PAGE_META={},c.__RSPRESS_PAGE_META["zh%2Fconfigure%2Fapp%2Ftools%2Fpostcss.mdx"]={toc:[],title:"tools.postcss"};let l={sidebar_label:"postcss"}}}]);