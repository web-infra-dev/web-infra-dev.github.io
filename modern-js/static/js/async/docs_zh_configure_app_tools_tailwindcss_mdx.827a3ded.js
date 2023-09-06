(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_configure_app_tools_tailwindcss_mdx"],{85296:function(n,e,s){"use strict";s.r(e),s.d(e,{default:function(){return o}});var i,d=s("15169"),c=s("43932"),r=s("9880"),t=s("23169");function l(n){var e=Object.assign({h1:"h1",a:"a",ul:"ul",li:"li",strong:"strong",code:"code",pre:"pre",p:"p",h3:"h3"},(0,t.useMDXComponents)(),n.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(e.h1,{id:"toolstailwindcss",children:["tools.tailwindcss",(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#toolstailwindcss",children:"#"})]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"类型："})," ",(0,r.jsx)(e.code,{children:"Object | Function"})]}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.strong,{children:"默认值："})}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-js",children:"const tailwind = {\n  content: [\n    './src/**/*.{js,jsx,ts,tsx}',\n    './config/html/**/*.{html,ejs,hbs}',\n    './storybook/**/*',\n  ],\n};\n"})}),"\n",(0,r.jsxs)(e.p,{children:["用于修改 ",(0,r.jsx)(e.a,{href:"https://tailwindcss.com/docs/configuration",target:"_blank",rel:"noopener noreferrer",children:"Tailwind CSS"})," 的配置项。"]}),"\n",(0,r.jsxs)(e.h3,{id:"启用-tailwind-css",children:["启用 Tailwind CSS",(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#启用-tailwind-css",children:"#"})]}),"\n",(0,r.jsxs)(e.p,{children:["在使用 ",(0,r.jsx)(e.code,{children:"tools.tailwindcss"})," 之前，你需要启用 Modern.js 的 Tailwind CSS 插件。"]}),"\n",(0,r.jsxs)(e.p,{children:["请阅读",(0,r.jsx)(e.a,{href:"/guides/basic-features/css#%E4%BD%BF%E7%94%A8-tailwind-css",children:"「使用 Tailwind CSS」"})," 章节来了解开启方式。"]}),"\n",(0,r.jsxs)(e.h3,{id:"function-类型",children:["Function 类型",(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#function-类型",children:"#"})]}),"\n",(0,r.jsxs)(e.p,{children:["当 ",(0,r.jsx)(e.code,{children:"tools.tailwindcss"})," 为 Function 类型时，默认配置会作为第一个参数传入，你可以直接修改配置对象，也可以返回一个值作为最终结果："]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"export default {\n  tools: {\n    tailwindcss(config) {\n      config.content.push('./some-folder/**/*.{js,ts}');\n    },\n  },\n};\n"})}),"\n",(0,r.jsxs)(e.h3,{id:"object-类型",children:["Object 类型",(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#object-类型",children:"#"})]}),"\n",(0,r.jsxs)(e.p,{children:["当 ",(0,r.jsx)(e.code,{children:"tools.tailwindcss"})," 的值为 ",(0,r.jsx)(e.code,{children:"Object"})," 类型时，会与默认配置通过 ",(0,r.jsx)(e.code,{children:"Object.assign"})," 浅合并。"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"export default {\n  tools: {\n    tailwindcss: {\n      plugins: [\n        require('@tailwindcss/forms'),\n        require('@tailwindcss/aspect-ratio'),\n        require('@tailwindcss/typography'),\n      ],\n    },\n  },\n};\n"})}),"\n",(0,r.jsxs)(e.h3,{id:"注意事项",children:["注意事项",(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#注意事项",children:"#"})]}),"\n",(0,r.jsx)(e.p,{children:"注意："}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["如果你同时使用了 ",(0,r.jsx)(e.code,{children:"tailwind.config.{ts,js}"})," 文件和 ",(0,r.jsx)(e.code,{children:"tools.tailwindcss"})," 选项，那么 ",(0,r.jsx)(e.code,{children:"tools.tailwindcss"})," 定义的配置会优先生效，并覆盖 ",(0,r.jsx)(e.code,{children:"tailwind.config.{ts,js}"})," 中定义的内容。"]}),"\n",(0,r.jsxs)(e.li,{children:["如果你同时使用了 ",(0,r.jsx)(e.code,{children:"source.designSystem"})," 配置项，那么 Tailwind CSS 的 ",(0,r.jsx)(e.code,{children:"theme"})," 配置将会被 ",(0,r.jsx)(e.code,{children:"source.designSystem"})," 的值所覆盖。"]}),"\n"]}),"\n",(0,r.jsxs)(e.p,{children:["其他配置的使用方式与 Tailwind CSS 官方用法一致，请参考 ",(0,r.jsx)(e.a,{href:"https://tailwindcss.com/docs/configuration",target:"_blank",rel:"noopener noreferrer",children:"tailwindcss - Configuration"}),"。"]}),"\n",(0,r.jsxs)(e.h3,{id:"关于-sourcedesignsystem",children:["关于 source.designSystem",(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#关于-sourcedesignsystem",children:"#"})]}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.code,{children:"source.designSystem"})," 是 Modern.js 中废弃的配置项。"]}),"\n",(0,r.jsxs)(e.p,{children:["从 Modern.js v2.33.0 版本开始，你可以使用 Tailwind CSS 的 ",(0,r.jsx)(e.code,{children:"theme"})," 配置项来代替 ",(0,r.jsx)(e.code,{children:"source.designSystem"}),"，不再需要将 ",(0,r.jsx)(e.code,{children:"theme"})," 配置拆分并设置到 ",(0,r.jsx)(e.code,{children:"designSystem"})," 上。"]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"旧版本用法："}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"const { theme, ...rest } = tailwindConfig;\n\nexport default {\n  tools: {\n    tailwindcss: rest,\n  },\n  source: {\n    designSystem: theme,\n  },\n};\n"})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"当前版本用法："}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"export default {\n  tools: {\n    tailwindcss: tailwindConfig,\n  },\n};\n"})})]})}(i=globalThis).__RSPRESS_PAGE_META||(i.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["zh%2Fconfigure%2Fapp%2Ftools%2Ftailwindcss.mdx"]={toc:[{text:"启用 Tailwind CSS",id:"启用-tailwind-css",depth:3},{text:"Function 类型",id:"function-类型",depth:3},{text:"Object 类型",id:"object-类型",depth:3},{text:"注意事项",id:"注意事项",depth:3},{text:"关于 source.designSystem",id:"关于-sourcedesignsystem",depth:3}],title:"tools.tailwindcss",frontmatter:{sidebar_label:"tailwindcss"}};var o=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=Object.assign({},(0,t.useMDXComponents)(),n.components).wrapper;return e?(0,r.jsx)(e,(0,c._)((0,d._)({},n),{children:(0,r.jsx)(l,(0,d._)({},n))})):l(n)}}}]);