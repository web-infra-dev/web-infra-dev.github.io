/*! For license information please see 2077.73bee0f3.js.LICENSE.txt */
(self.webpackChunk_modern_js_builder_doc=self.webpackChunk_modern_js_builder_doc||[]).push([["2077"],{69258:function(e,s,r){"use strict";r.r(s),r.d(s,{default:function(){return o}});var n=r("9880"),t=r("23169");function i(e){let s=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",pre:"pre",code:"code",h3:"h3",ul:"ul",li:"li",div:"div"},(0,t.useMDXComponents)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(s.h1,{id:"\u5F15\u7528\u6837\u5F0F\u8D44\u6E90",children:["\u5F15\u7528\u6837\u5F0F\u8D44\u6E90",(0,n.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#\u5F15\u7528\u6837\u5F0F\u8D44\u6E90",children:"#"})]}),"\n",(0,n.jsx)(s.p,{children:"Builder \u5185\u7F6E\u591A\u79CD\u5E38\u7528\u7684\u6837\u5F0F\u8D44\u6E90\u5904\u7406\u65B9\u5F0F\uFF0C\u5305\u62EC Less / Sass \u9884\u5904\u7406\u5668\u3001PostCSS\u3001CSS Modules\u3001CSS \u5185\u8054\u548C CSS \u538B\u7F29\u3002"}),"\n",(0,n.jsx)(s.p,{children:"\u9664\u6B64\u4E4B\u5916\uFF0CBuilder \u4E5F\u63D0\u4F9B\u4E86\u591A\u4E2A\u914D\u7F6E\u9879\u6765\u81EA\u5B9A\u4E49\u6837\u5F0F\u8D44\u6E90\u7684\u5904\u7406\u89C4\u5219\u3002"}),"\n",(0,n.jsxs)(s.h2,{id:"\u4F7F\u7528-lesssass-\u548C-stylus",children:["\u4F7F\u7528 Less\u3001Sass \u548C Stylus",(0,n.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#\u4F7F\u7528-lesssass-\u548C-stylus",children:"#"})]}),"\n",(0,n.jsx)(s.p,{children:"Builder \u5185\u7F6E\u4E86\u793E\u533A\u6D41\u884C\u7684 CSS \u9884\u5904\u7406\u5668\uFF0C\u5305\u62EC Less \u548C Sass\u3002"}),"\n",(0,n.jsxs)(s.p,{children:["\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u4F60\u4E0D\u9700\u8981\u5BF9 Less \u548C Sass \u8FDB\u884C\u4EFB\u4F55\u914D\u7F6E\u3002\u5982\u679C\u4F60\u6709\u81EA\u5B9A\u4E49 loader \u914D\u7F6E\u7684\u9700\u6C42\uFF0C\u53EF\u4EE5\u901A\u8FC7\u914D\u7F6E ",(0,n.jsx)(s.a,{href:"/api/config-tools#toolsless",children:"tools.less"}),"\u3001",(0,n.jsx)(s.a,{href:"/api/config-tools#toolssass",children:"tools.sass"})," \u6765\u8FDB\u884C\u8BBE\u7F6E\u3002"]}),"\n",(0,n.jsxs)(s.p,{children:["\u4F60\u4E5F\u53EF\u4EE5\u5728 Builder \u4E2D\u4F7F\u7528 Stylus\uFF0C\u53EA\u9700\u8981\u5B89\u88C5 Builder \u63D0\u4F9B\u7684 Stylus \u63D2\u4EF6\u5373\u53EF\uFF0C\u4F7F\u7528\u65B9\u5F0F\u8BF7\u53C2\u8003 ",(0,n.jsx)(s.a,{href:"/plugins/plugin-stylus",children:"Stylus \u63D2\u4EF6"}),"\u3002"]}),"\n",(0,n.jsxs)(s.h2,{id:"\u4F7F\u7528-postcss",children:["\u4F7F\u7528 PostCSS",(0,n.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#\u4F7F\u7528-postcss",children:"#"})]}),"\n",(0,n.jsxs)(s.p,{children:["Builder \u5185\u7F6E\u4E86 ",(0,n.jsx)(s.a,{href:"https://postcss.org/",target:"_blank",rel:"noopener noreferrer",children:"PostCSS"})," \u6765\u8F6C\u6362 CSS \u4EE3\u7801\u3002\u4F60\u53EF\u4EE5\u901A\u8FC7 ",(0,n.jsx)(s.a,{href:"/api/config-tools#toolspostcss",children:"tools.postcss"})," \u6765\u914D\u7F6E postcss-loader\u3002"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-ts",children:"export default {\n  tools: {\n    postcss: opts => {\n      const viewportPlugin = require('postcss-px-to-viewport')({\n        viewportWidth: 375,\n      });\n      opts.postcssOptions.plugins.push(viewportPlugin);\n    },\n  },\n};\n"})}),"\n",(0,n.jsxs)(s.h3,{id:"\u5185\u7F6E-postcss-\u63D2\u4EF6",children:["\u5185\u7F6E PostCSS \u63D2\u4EF6",(0,n.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#\u5185\u7F6E-postcss-\u63D2\u4EF6",children:"#"})]}),"\n",(0,n.jsx)(s.p,{children:"Builder \u5185\u7F6E\u4E86\u4E00\u4E9B PostCSS \u63D2\u4EF6\uFF0C\u4F1A\u5BF9 CSS \u8FDB\u884C\u4EE5\u4E0B\u8F6C\u6362\uFF1A"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.a,{href:"https://github.com/postcss/autoprefixer",target:"_blank",rel:"noopener noreferrer",children:"autoprefixer"}),"\uFF1A\u5728\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u6211\u4EEC\u5F00\u542F\u4E86 autoprefixer \u6765\u81EA\u52A8\u8865\u9F50 CSS \u7684\u6D4F\u89C8\u5668\u524D\u7F00\u3002\u5982\u679C\u4F60\u9700\u8981\u914D\u7F6E\u76EE\u6807\u6D4F\u89C8\u5668\uFF0C\u53EF\u4F7F\u7528 ",(0,n.jsx)(s.a,{href:"/api/config-output#outputoverridebrowserslist",children:"output.overrideBrowserslist"})," \u8FDB\u884C\u914D\u7F6E\u3002"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.a,{href:"https://www.npmjs.com/package/postcss-nested",target:"_blank",rel:"noopener noreferrer",children:"postcss-nesting"}),"\uFF1A\u63D0\u4F9B ",(0,n.jsx)(s.a,{href:"https://drafts.csswg.org/css-nesting-1/",target:"_blank",rel:"noopener noreferrer",children:"CSS Nesting"})," \u652F\u6301\uFF0C\u53EF\u4EE5\u5728 CSS \u4E2D\u4F7F\u7528\u5D4C\u5957\u5199\u6CD5\uFF0C\u5982\uFF1A"]}),"\n"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-css",children:".my-table {\n  & td {\n    text-align: center;\n\n    &.c {\n      text-transform: uppercase;\n    }\n  }\n}\n"})}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.a,{href:"https://www.npmjs.com/package/postcss-flexbugs-fixes",target:"_blank",rel:"noopener noreferrer",children:"postcss-flexbugs-fixes"}),"\uFF1A\u7528\u4E8E\u4FEE\u590D\u5DF2\u77E5\u7684 ",(0,n.jsx)(s.a,{href:"https://github.com/philipwalton/flexbugs",target:"_blank",rel:"noopener noreferrer",children:"Flex Bugs"}),"\u3002"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.a,{href:"https://www.npmjs.com/package/postcss-initial",target:"_blank",rel:"noopener noreferrer",children:"postcss-initial"}),"\uFF1A\u4EC5\u5728\u9700\u8981\u517C\u5BB9\u4F4E\u7248\u672C\u6D4F\u89C8\u5668\u65F6\u542F\u7528\uFF0C\u63D0\u4F9B\u5BF9 ",(0,n.jsxs)(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/initial_value",target:"_blank",rel:"noopener noreferrer",children:[(0,n.jsx)(s.code,{children:"initial"})," \u5C5E\u6027\u503C"]})," \u7684\u517C\u5BB9\u3002"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.a,{href:"https://www.npmjs.com/package/postcss-page-break",target:"_blank",rel:"noopener noreferrer",children:"postcss-page-break"}),"\uFF1A\u4EC5\u5728\u9700\u8981\u517C\u5BB9\u4F4E\u7248\u672C\u6D4F\u89C8\u5668\u65F6\u542F\u7528\uFF0C\u63D0\u4F9B\u5BF9 ",(0,n.jsxs)(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/break-after",target:"_blank",rel:"noopener noreferrer",children:[(0,n.jsx)(s.code,{children:"break-"})," \u5C5E\u6027"]})," \u7684\u517C\u5BB9\u3002"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.a,{href:"https://www.npmjs.com/package/postcss-font-variant",target:"_blank",rel:"noopener noreferrer",children:"postcss-font-variant"}),"\uFF1A\u4EC5\u5728\u9700\u8981\u517C\u5BB9\u4F4E\u7248\u672C\u6D4F\u89C8\u5668\u65F6\u542F\u7528\uFF0C\u63D0\u4F9B\u5BF9 ",(0,n.jsx)(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/font-variant",target:"_blank",rel:"noopener noreferrer",children:(0,n.jsx)(s.code,{children:"font-variant"})})," \u7684\u517C\u5BB9\u3002"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.a,{href:"https://www.npmjs.com/package/postcss-media-minmax",target:"_blank",rel:"noopener noreferrer",children:"postcss-media-minmax"}),"\uFF1A\u4EC5\u5728\u9700\u8981\u517C\u5BB9\u4F4E\u7248\u672C\u6D4F\u89C8\u5668\u65F6\u542F\u7528\uFF0C\u63D0\u4F9B\u5BF9 ",(0,n.jsx)(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries#syntax_improvements_in_level_4",target:"_blank",rel:"noopener noreferrer",children:"Media Query Ranges"})," \u7684\u517C\u5BB9\u3002"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.a,{href:"https://www.npmjs.com/package/postcss-custom-properties",target:"_blank",rel:"noopener noreferrer",children:"postcss-custom-properties"}),"\uFF1A\u4EC5\u5728\u9700\u8981\u517C\u5BB9\u4F4E\u7248\u672C\u6D4F\u89C8\u5668\u65F6\u542F\u7528\uFF0C\u63D0\u4F9B\u5BF9 ",(0,n.jsx)(s.a,{href:"https://www.w3.org/TR/css-variables-1/",target:"_blank",rel:"noopener noreferrer",children:"Custom Properties"})," \u7684\u517C\u5BB9\uFF0C\u4F60\u53EF\u4EE5\u5728 CSS \u4E2D\u5B9A\u4E49\u548C\u4F7F\u7528\u81EA\u5B9A\u4E49\u53D8\u91CF\uFF0C\u5982\uFF1A"]}),"\n"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-css",children:":root {\n  --main-bg-color: pink;\n}\n\nbody {\n  background-color: var(--main-bg-color);\n}\n"})}),"\n",(0,n.jsxs)(s.h2,{id:"css-\u538B\u7F29",children:["CSS \u538B\u7F29",(0,n.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#css-\u538B\u7F29",children:"#"})]}),"\n",(0,n.jsx)(s.p,{children:"\u901A\u5E38\u60C5\u51B5\u4E0B\uFF0C\u5728\u751F\u4EA7\u73AF\u5883\u6211\u4EEC\u4F1A\u5C06 CSS\u3001JS \u7B49\u9759\u6001\u8D44\u6E90\u8FDB\u884C\u538B\u7F29\uFF0C\u4EE5\u8FBE\u5230\u66F4\u597D\u7684\u4F20\u8F93\u6548\u7387\u3002"}),"\n",(0,n.jsxs)(s.p,{children:["Builder \u901A\u8FC7 ",(0,n.jsx)(s.a,{href:"https://github.com/webpack-contrib/css-minimizer-webpack-plugin",target:"_blank",rel:"noopener noreferrer",children:"css-minimizer-webpack-plugin"})," \u5728\u751F\u4EA7\u73AF\u5883\u6784\u5EFA\u65F6\u81EA\u52A8\u538B\u7F29 CSS \u4EE3\u7801\uFF08\u5E95\u5C42\u4F7F\u7528\u7684\u538B\u7F29\u5DE5\u5177\u4E3A ",(0,n.jsx)(s.a,{href:"https://cssnano.co/",target:"_blank",rel:"noopener noreferrer",children:"cssnano"}),"\uFF09\u3002"]}),"\n",(0,n.jsxs)(s.p,{children:["\u4F60\u53EF\u4EE5\u901A\u8FC7 ",(0,n.jsx)(s.a,{href:"/api/config-tools#toolsminifycss",children:"tools.minifyCss"})," \u914D\u7F6E\u9879\u6765\u4FEE\u6539 ",(0,n.jsx)(s.code,{children:"css-minimizer-webpack-plugin"}),"\u7684\u914D\u7F6E\u3002"]}),"\n",(0,n.jsxs)(s.div,{className:"rspress-directive tip",children:[(0,n.jsx)(s.div,{className:"rspress-directive-title",children:"\u5173\u4E8E cssnano"}),(0,n.jsx)(s.div,{className:"rspress-directive-content",children:(0,n.jsx)(s.p,{children:"cssnano \u662F\u4E00\u4E2A\u7528\u4E8E\u4F18\u5316\u548C\u538B\u7F29 CSS \u6587\u4EF6\u7684\u5DE5\u5177\u3002\u5B83\u901A\u8FC7\u5220\u9664\u672A\u4F7F\u7528\u7684\u89C4\u5219\u3001\u5408\u5E76\u76F8\u540C\u7684\u89C4\u5219\u3001\u79FB\u9664\u6CE8\u91CA\u548C\u7A7A\u767D\u7B26\u4EE5\u53CA\u8F6C\u6362\u957F\u5EA6\u5355\u4F4D\u7B49\u65B9\u5F0F\u6765\u51CF\u5C0F CSS \u6587\u4EF6\u7684\u4F53\u79EF\uFF0C\u4ECE\u800C\u63D0\u5347\u7F51\u7AD9\u7684\u52A0\u8F7D\u901F\u5EA6\u3002"})})]}),"\n",(0,n.jsxs)(s.h2,{id:"\u5185\u8054-css-\u6587\u4EF6",children:["\u5185\u8054 CSS \u6587\u4EF6",(0,n.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#\u5185\u8054-css-\u6587\u4EF6",children:"#"})]}),"\n",(0,n.jsxs)(s.p,{children:["\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0CBuilder \u4F1A\u628A CSS \u63D0\u53D6\u4E3A\u72EC\u7ACB\u7684 ",(0,n.jsx)(s.code,{children:".css"})," \u6587\u4EF6\uFF0C\u5E76\u8F93\u51FA\u5230\u6784\u5EFA\u4EA7\u7269\u76EE\u5F55\u3002"]}),"\n",(0,n.jsxs)(s.p,{children:["\u5982\u679C\u4F60\u5E0C\u671B\u5C06\u6837\u5F0F\u5185\u8054\u5230 JS \u6587\u4EF6\u4E2D\uFF0C\u53EF\u4EE5\u5C06 ",(0,n.jsx)(s.a,{href:"/api/config-output#outputdisablecssextract",children:"output.disableCssExtract"})," \u8BBE\u7F6E\u4E3A ",(0,n.jsx)(s.code,{children:"true"})," \u6765\u7981\u7528 CSS \u63D0\u53D6\u903B\u8F91\u3002\u5F53\u6D4F\u89C8\u5668\u8BF7\u6C42\u5230 JS \u6587\u4EF6\u540E\uFF0CJS \u5C06\u52A8\u6001\u5730\u5411 HTML \u63D2\u5165 ",(0,n.jsx)(s.code,{children:"<style>"})," \u6807\u7B7E\uFF0C\u4EE5\u6B64\u52A0\u8F7D CSS \u6837\u5F0F\u3002"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-ts",children:"export default {\n  output: {\n    disableCssExtract: true,\n  },\n};\n"})}),"\n",(0,n.jsx)(s.p,{children:"\u8FD9\u5C06\u4F1A\u589E\u5927\u4F60\u7684 JS Bundle \u4F53\u79EF\uFF0C\u56E0\u6B64\u901A\u5E38\u60C5\u51B5\u4E0B\uFF0C\u4E0D\u592A\u5EFA\u8BAE\u7981\u7528 CSS \u63D0\u53D6\u903B\u8F91\u3002"}),"\n",(0,n.jsxs)(s.h2,{id:"\u5F15\u7528-node_modules-\u91CC\u7684\u6837\u5F0F",children:["\u5F15\u7528 node_modules \u91CC\u7684\u6837\u5F0F",(0,n.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#\u5F15\u7528-node_modules-\u91CC\u7684\u6837\u5F0F",children:"#"})]}),"\n",(0,n.jsx)(s.p,{children:"\u4F60\u53EF\u4EE5\u76F4\u63A5\u5F15\u7528 node_modules \u91CC\u7684\u6837\u5F0F\u6587\u4EF6\u3002"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"\u5728\u7EC4\u4EF6\u4E2D\u5F15\u7528\uFF1A"}),"\n"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-ts",meta:'title="src/App.tsx"',children:"// \u5F15\u7528 Arco Design \u6837\u5F0F\uFF1A\nimport '@arco-design/web-react/dist/css/arco.css';\n"})}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"\u5728\u6837\u5F0F\u6587\u4EF6\u4E2D\u5F15\u7528\uFF1A"}),"\n"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-css",meta:'title="src/App.css"',children:"/* \u5F15\u7528 normalize.css */\n/* https://github.com/necolas/normalize.css */\n@import 'normalize.css';\n\nbody {\n  /* */\n}\n"})})]})}function l(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:s}=Object.assign({},(0,t.useMDXComponents)(),e.components);return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(i,{...e})}):i(e)}var o=l;l.__RSPRESS_PAGE_META={},l.__RSPRESS_PAGE_META["zh%2Fguide%2Fbasic%2Fcss-usage.md"]={toc:[{text:"\u4F7F\u7528 Less\u3001Sass \u548C Stylus",id:"\u4F7F\u7528-lesssass-\u548C-stylus",depth:2},{text:"\u4F7F\u7528 PostCSS",id:"\u4F7F\u7528-postcss",depth:2},{text:"\u5185\u7F6E PostCSS \u63D2\u4EF6",id:"\u5185\u7F6E-postcss-\u63D2\u4EF6",depth:3},{text:"CSS \u538B\u7F29",id:"css-\u538B\u7F29",depth:2},{text:"\u5185\u8054 CSS \u6587\u4EF6",id:"\u5185\u8054-css-\u6587\u4EF6",depth:2},{text:"\u5F15\u7528 node_modules \u91CC\u7684\u6837\u5F0F",id:"\u5F15\u7528-node_modules-\u91CC\u7684\u6837\u5F0F",depth:2}],title:"\u5F15\u7528\u6837\u5F0F\u8D44\u6E90",frontmatter:{}}}}]);