/*! For license information please see 2940.e16474ca.js.LICENSE.txt */
(self.webpackChunk_modern_js_module_tools_docs=self.webpackChunk_modern_js_module_tools_docs||[]).push([["2940"],{57212:function(e,n,r){"use strict";r.r(n);var s=r("39980"),i=r("96954"),d=r("92919");function o(e){let n=Object.assign({h1:"h1",a:"a",p:"p",div:"div",code:"code",h2:"h2",h3:"h3",pre:"pre",ul:"ul",li:"li",strong:"strong"},(0,i.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h1,{id:"banner-\u63D2\u4EF6",children:["Banner \u63D2\u4EF6",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#banner-\u63D2\u4EF6",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"\u63D0\u4F9B\u4E3A\u6BCF\u4E2A JS \u548C CSS \u6587\u4EF6\u7684\u9876\u90E8\u548C\u5E95\u90E8\u6CE8\u5165\u5185\u5BB9\u7684\u80FD\u529B\u3002"}),"\n",(0,s.jsxs)(n.div,{className:"rspress-directive tip",children:[(0,s.jsx)(n.div,{className:"rspress-directive-title",children:"TIP"}),(0,s.jsx)(n.div,{className:"rspress-directive-content",children:(0,s.jsxs)(n.p,{children:["\u4ECE ",(0,s.jsx)(n.code,{children:"@modern-js/module-tools"})," 2.36.0 \u7248\u672C\u5F00\u59CB\uFF0C\u8BE5\u63D2\u4EF6\u529F\u80FD\u5185\u7F6E\u5728 Modern.js Module \u4E2D\uFF0C\u7531 ",(0,s.jsx)(n.a,{href:"/api/config/build-config#banner",children:(0,s.jsx)(n.code,{children:"banner"})})," \u548C ",(0,s.jsx)(n.a,{href:"/api/config/build-config#footer",children:(0,s.jsx)(n.code,{children:"footer"})}),"\n\u914D\u7F6E\u63D0\u4F9B\u3002\n"]})})]}),"\n",(0,s.jsxs)(n.h2,{id:"\u5FEB\u901F\u5F00\u59CB",children:["\u5FEB\u901F\u5F00\u59CB",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u5FEB\u901F\u5F00\u59CB",children:"#"})]}),"\n",(0,s.jsxs)(n.h3,{id:"\u5B89\u88C5",children:["\u5B89\u88C5",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u5B89\u88C5",children:"#"})]}),"\n","\n",(0,s.jsx)(d.PackageManagerTabs,{command:"add @modern-js/plugin-module-banner -D"}),"\n",(0,s.jsxs)(n.h3,{id:"\u6CE8\u518C\u63D2\u4EF6",children:["\u6CE8\u518C\u63D2\u4EF6",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u6CE8\u518C\u63D2\u4EF6",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"\u5728 Modern.js Module \u4E2D\uFF0C\u4F60\u53EF\u4EE5\u6309\u7167\u5982\u4E0B\u65B9\u5F0F\u6CE8\u518C\u63D2\u4EF6\uFF1A"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"import { moduleTools, defineConfig } from '@modern-js/module-tools';\nimport { modulePluginBanner } from '@modern-js/plugin-module-banner';\n\nexport default defineConfig({\n  plugins: [\n    moduleTools(),\n    modulePluginBanner({\n      banner: {\n        js: '//comment',\n        css: '/*comment*/',\n      },\n    }),\n  ],\n});\n"})}),"\n",(0,s.jsxs)(n.div,{className:"rspress-directive tip",children:[(0,s.jsx)(n.div,{className:"rspress-directive-title",children:"TIP"}),(0,s.jsx)(n.div,{className:"rspress-directive-content",children:(0,s.jsxs)(n.p,{children:["\u6CE8\u610F\uFF1ACSS \u7684\u6CE8\u91CA\u4E0D\u652F\u6301 ",(0,s.jsx)(n.code,{children:"//comment"})," \u8FD9\u6837\u7684\u5199\u6CD5\u3002\u8BE6\u89C1",(0,s.jsx)(n.a,{href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/Comments",target:"_blank",rel:"noopener noreferrer",children:"\u300CCSS \u6CE8\u91CA\u300D"}),"\n"]})})]}),"\n",(0,s.jsxs)(n.h2,{id:"\u793A\u4F8B",children:["\u793A\u4F8B",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u793A\u4F8B",children:"#"})]}),"\n",(0,s.jsxs)(n.h3,{id:"\u5728-js-\u6587\u4EF6\u9876\u90E8\u589E\u52A0\u7248\u6743\u4FE1\u606F",children:["\u5728 JS \u6587\u4EF6\u9876\u90E8\u589E\u52A0\u7248\u6743\u4FE1\u606F",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u5728-js-\u6587\u4EF6\u9876\u90E8\u589E\u52A0\u7248\u6743\u4FE1\u606F",children:"#"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"import { modulePluginBanner } from '@modern-js/plugin-module-banner';\nimport { moduleTools, defineConfig } from '@modern-js/module-tools';\n\nconst copyRight = `/*\n \xa9 Copyright 2020 example.com or one of its affiliates.\n * Some Sample Copyright Text Line\n * Some Sample Copyright Text Line\n * Some Sample Copyright Text Line\n * Some Sample Copyright Text Line\n * Some Sample Copyright Text Line\n * Some Sample Copyright Text Line\n*/`;\n\nexport default defineConfig({\n  plugins: [\n    moduleTools(),\n    modulePluginBanner({\n      banner: {\n        js: copyRight,\n      },\n    }),\n  ],\n});\n"})}),"\n",(0,s.jsxs)(n.h2,{id:"\u914D\u7F6E",children:["\u914D\u7F6E",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u914D\u7F6E",children:"#"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"\u7C7B\u578B\uFF1A"})}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"type BannerOptions = {\n  banner: {\n    js?: string;\n    css?: string;\n  };\n  footer?: {\n    js?: string;\n    css?: string;\n  };\n};\n"})}),"\n",(0,s.jsxs)(n.h3,{id:"banner",children:["banner",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#banner",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"\u5728\u9876\u90E8\u589E\u52A0\u5185\u5BB9\u3002"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"banner.js"}),"\uFF1A\u5728 JS \u6587\u4EF6\u9876\u90E8\u589E\u52A0\u5185\u5BB9\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"banner.css"}),"\uFF1A\u5728 CSS \u6587\u4EF6\u9876\u90E8\u589E\u52A0\u5185\u5BB9\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(n.h3,{id:"footer",children:["footer",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#footer",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"\u5728\u5E95\u90E8\u589E\u52A0\u5185\u5BB9\u3002"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"footer.js"}),"\uFF1A\u5728 JS \u6587\u4EF6\u5E95\u90E8\u589E\u52A0\u5185\u5BB9\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"footer.css"}),"\uFF1A\u5728 CSS \u6587\u4EF6\u5E95\u90E8\u589E\u52A0\u5185\u5BB9\u3002"]}),"\n"]})]})}function l(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,i.useMDXComponents)(),e.components);return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}n.default=l,l.__RSPRESS_PAGE_META={},l.__RSPRESS_PAGE_META["zh%2Fplugins%2Fofficial-list%2Fplugin-banner.mdx"]={toc:[{text:"\u5FEB\u901F\u5F00\u59CB",id:"\u5FEB\u901F\u5F00\u59CB",depth:2},{text:"\u5B89\u88C5",id:"\u5B89\u88C5",depth:3},{text:"\u6CE8\u518C\u63D2\u4EF6",id:"\u6CE8\u518C\u63D2\u4EF6",depth:3},{text:"\u793A\u4F8B",id:"\u793A\u4F8B",depth:2},{text:"\u5728 JS \u6587\u4EF6\u9876\u90E8\u589E\u52A0\u7248\u6743\u4FE1\u606F",id:"\u5728-js-\u6587\u4EF6\u9876\u90E8\u589E\u52A0\u7248\u6743\u4FE1\u606F",depth:3},{text:"\u914D\u7F6E",id:"\u914D\u7F6E",depth:2},{text:"banner",id:"banner",depth:3},{text:"footer",id:"footer",depth:3}],title:"Banner \u63D2\u4EF6",frontmatter:{}}}}]);