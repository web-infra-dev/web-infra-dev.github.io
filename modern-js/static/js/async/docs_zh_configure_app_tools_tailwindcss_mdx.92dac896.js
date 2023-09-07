(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_configure_app_tools_tailwindcss_mdx"],{97057:function(n,e,s){"use strict";s.r(e),s.d(e,{default:function(){return o}});var i,d=s("15169"),c=s("43932"),r=s("9880"),t=s("23169");function l(n){var e=Object.assign({h1:"h1",a:"a",ul:"ul",li:"li",strong:"strong",code:"code",pre:"pre",p:"p",h3:"h3"},(0,t.useMDXComponents)(),n.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(e.h1,{id:"toolstailwindcss",children:["tools.tailwindcss",(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#toolstailwindcss",children:"#"})]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"\u7C7B\u578B\uFF1A"})," ",(0,r.jsx)(e.code,{children:"Object | Function"})]}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.strong,{children:"\u9ED8\u8BA4\u503C\uFF1A"})}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-js",children:"const tailwind = {\n  content: [\n    './src/**/*.{js,jsx,ts,tsx}',\n    './config/html/**/*.{html,ejs,hbs}',\n    './storybook/**/*',\n  ],\n};\n"})}),"\n",(0,r.jsxs)(e.p,{children:["\u7528\u4E8E\u4FEE\u6539 ",(0,r.jsx)(e.a,{href:"https://tailwindcss.com/docs/configuration",target:"_blank",rel:"noopener noreferrer",children:"Tailwind CSS"})," \u7684\u914D\u7F6E\u9879\u3002"]}),"\n",(0,r.jsxs)(e.h3,{id:"\u542F\u7528-tailwind-css",children:["\u542F\u7528 Tailwind CSS",(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#\u542F\u7528-tailwind-css",children:"#"})]}),"\n",(0,r.jsxs)(e.p,{children:["\u5728\u4F7F\u7528 ",(0,r.jsx)(e.code,{children:"tools.tailwindcss"})," \u4E4B\u524D\uFF0C\u4F60\u9700\u8981\u542F\u7528 Modern.js \u7684 Tailwind CSS \u63D2\u4EF6\u3002"]}),"\n",(0,r.jsxs)(e.p,{children:["\u8BF7\u9605\u8BFB",(0,r.jsx)(e.a,{href:"/guides/basic-features/css#%E4%BD%BF%E7%94%A8-tailwind-css",children:"\u300C\u4F7F\u7528 Tailwind CSS\u300D"})," \u7AE0\u8282\u6765\u4E86\u89E3\u5F00\u542F\u65B9\u5F0F\u3002"]}),"\n",(0,r.jsxs)(e.h3,{id:"function-\u7C7B\u578B",children:["Function \u7C7B\u578B",(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#function-\u7C7B\u578B",children:"#"})]}),"\n",(0,r.jsxs)(e.p,{children:["\u5F53 ",(0,r.jsx)(e.code,{children:"tools.tailwindcss"})," \u4E3A Function \u7C7B\u578B\u65F6\uFF0C\u9ED8\u8BA4\u914D\u7F6E\u4F1A\u4F5C\u4E3A\u7B2C\u4E00\u4E2A\u53C2\u6570\u4F20\u5165\uFF0C\u4F60\u53EF\u4EE5\u76F4\u63A5\u4FEE\u6539\u914D\u7F6E\u5BF9\u8C61\uFF0C\u4E5F\u53EF\u4EE5\u8FD4\u56DE\u4E00\u4E2A\u503C\u4F5C\u4E3A\u6700\u7EC8\u7ED3\u679C\uFF1A"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"export default {\n  tools: {\n    tailwindcss(config) {\n      config.content.push('./some-folder/**/*.{js,ts}');\n    },\n  },\n};\n"})}),"\n",(0,r.jsxs)(e.h3,{id:"object-\u7C7B\u578B",children:["Object \u7C7B\u578B",(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#object-\u7C7B\u578B",children:"#"})]}),"\n",(0,r.jsxs)(e.p,{children:["\u5F53 ",(0,r.jsx)(e.code,{children:"tools.tailwindcss"})," \u7684\u503C\u4E3A ",(0,r.jsx)(e.code,{children:"Object"})," \u7C7B\u578B\u65F6\uFF0C\u4F1A\u4E0E\u9ED8\u8BA4\u914D\u7F6E\u901A\u8FC7 ",(0,r.jsx)(e.code,{children:"Object.assign"})," \u6D45\u5408\u5E76\u3002"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"export default {\n  tools: {\n    tailwindcss: {\n      plugins: [\n        require('@tailwindcss/forms'),\n        require('@tailwindcss/aspect-ratio'),\n        require('@tailwindcss/typography'),\n      ],\n    },\n  },\n};\n"})}),"\n",(0,r.jsxs)(e.h3,{id:"\u6CE8\u610F\u4E8B\u9879",children:["\u6CE8\u610F\u4E8B\u9879",(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#\u6CE8\u610F\u4E8B\u9879",children:"#"})]}),"\n",(0,r.jsx)(e.p,{children:"\u6CE8\u610F\uFF1A"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\u5982\u679C\u4F60\u540C\u65F6\u4F7F\u7528\u4E86 ",(0,r.jsx)(e.code,{children:"tailwind.config.{ts,js}"})," \u6587\u4EF6\u548C ",(0,r.jsx)(e.code,{children:"tools.tailwindcss"})," \u9009\u9879\uFF0C\u90A3\u4E48 ",(0,r.jsx)(e.code,{children:"tools.tailwindcss"})," \u5B9A\u4E49\u7684\u914D\u7F6E\u4F1A\u4F18\u5148\u751F\u6548\uFF0C\u5E76\u8986\u76D6 ",(0,r.jsx)(e.code,{children:"tailwind.config.{ts,js}"})," \u4E2D\u5B9A\u4E49\u7684\u5185\u5BB9\u3002"]}),"\n",(0,r.jsxs)(e.li,{children:["\u5982\u679C\u4F60\u540C\u65F6\u4F7F\u7528\u4E86 ",(0,r.jsx)(e.code,{children:"source.designSystem"})," \u914D\u7F6E\u9879\uFF0C\u90A3\u4E48 Tailwind CSS \u7684 ",(0,r.jsx)(e.code,{children:"theme"})," \u914D\u7F6E\u5C06\u4F1A\u88AB ",(0,r.jsx)(e.code,{children:"source.designSystem"})," \u7684\u503C\u6240\u8986\u76D6\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(e.p,{children:["\u5176\u4ED6\u914D\u7F6E\u7684\u4F7F\u7528\u65B9\u5F0F\u4E0E Tailwind CSS \u5B98\u65B9\u7528\u6CD5\u4E00\u81F4\uFF0C\u8BF7\u53C2\u8003 ",(0,r.jsx)(e.a,{href:"https://tailwindcss.com/docs/configuration",target:"_blank",rel:"noopener noreferrer",children:"tailwindcss - Configuration"}),"\u3002"]}),"\n",(0,r.jsxs)(e.h3,{id:"\u5173\u4E8E-sourcedesignsystem",children:["\u5173\u4E8E source.designSystem",(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#\u5173\u4E8E-sourcedesignsystem",children:"#"})]}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.code,{children:"source.designSystem"})," \u662F Modern.js \u4E2D\u5E9F\u5F03\u7684\u914D\u7F6E\u9879\u3002"]}),"\n",(0,r.jsxs)(e.p,{children:["\u4ECE Modern.js v2.33.0 \u7248\u672C\u5F00\u59CB\uFF0C\u4F60\u53EF\u4EE5\u4F7F\u7528 Tailwind CSS \u7684 ",(0,r.jsx)(e.code,{children:"theme"})," \u914D\u7F6E\u9879\u6765\u4EE3\u66FF ",(0,r.jsx)(e.code,{children:"source.designSystem"}),"\uFF0C\u4E0D\u518D\u9700\u8981\u5C06 ",(0,r.jsx)(e.code,{children:"theme"})," \u914D\u7F6E\u62C6\u5206\u5E76\u8BBE\u7F6E\u5230 ",(0,r.jsx)(e.code,{children:"designSystem"})," \u4E0A\u3002"]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u65E7\u7248\u672C\u7528\u6CD5\uFF1A"}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"const { theme, ...rest } = tailwindConfig;\n\nexport default {\n  tools: {\n    tailwindcss: rest,\n  },\n  source: {\n    designSystem: theme,\n  },\n};\n"})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u5F53\u524D\u7248\u672C\u7528\u6CD5\uFF1A"}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"export default {\n  tools: {\n    tailwindcss: tailwindConfig,\n  },\n};\n"})})]})}(i=globalThis).__RSPRESS_PAGE_META||(i.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["zh%2Fconfigure%2Fapp%2Ftools%2Ftailwindcss.mdx"]={toc:[{text:"\u542F\u7528 Tailwind CSS",id:"\u542F\u7528-tailwind-css",depth:3},{text:"Function \u7C7B\u578B",id:"function-\u7C7B\u578B",depth:3},{text:"Object \u7C7B\u578B",id:"object-\u7C7B\u578B",depth:3},{text:"\u6CE8\u610F\u4E8B\u9879",id:"\u6CE8\u610F\u4E8B\u9879",depth:3},{text:"\u5173\u4E8E source.designSystem",id:"\u5173\u4E8E-sourcedesignsystem",depth:3}],title:"tools.tailwindcss",frontmatter:{sidebar_label:"tailwindcss"}};var o=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=Object.assign({},(0,t.useMDXComponents)(),n.components).wrapper;return e?(0,r.jsx)(e,(0,c._)((0,d._)({},n),{children:(0,r.jsx)(l,(0,d._)({},n))})):l(n)}}}]);