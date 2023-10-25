(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["80414"],{4457:function(e,n,s){"use strict";s.r(n),s.d(n,{default:function(){return l},frontmatter:function(){return a}});var i=s("15169"),t=s("43932"),o=s("9880"),r=s("23169");function c(e){var n=Object.assign({h1:"h1",a:"a",ul:"ul",li:"li",strong:"strong",code:"code",pre:"pre",p:"p",h3:"h3"},(0,r.useMDXComponents)(),e.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.h1,{id:"toolstailwindcss",children:["tools.tailwindcss",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#toolstailwindcss",children:"#"})]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Type:"})," ",(0,o.jsx)(n.code,{children:"Object | Function"})]}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.strong,{children:"Default:"})}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"const tailwind = {\n  content: [\n    './src/**/*.{js,jsx,ts,tsx}',\n    './config/html/**/*.{html,ejs,hbs}',\n    './storybook/**/*',\n  ],\n};\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Used to modify the configuration of ",(0,o.jsx)(n.a,{href:"https://tailwindcss.com/docs/configuration",target:"_blank",rel:"noopener noreferrer",children:"Tailwind CSS"}),"."]}),"\n",(0,o.jsxs)(n.h3,{id:"enabling-tailwind-css",children:["Enabling Tailwind CSS",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#enabling-tailwind-css",children:"#"})]}),"\n",(0,o.jsxs)(n.p,{children:["Before using ",(0,o.jsx)(n.code,{children:"tools.tailwindcss"}),", you need to enable the Tailwind CSS plugin for Modern.js."]}),"\n",(0,o.jsxs)(n.p,{children:["Please refer to the section ",(0,o.jsx)(n.a,{href:"/guides/basic-features/css#using-tailwind-css",children:"Using Tailwind CSS"})," for instructions on how to enable it."]}),"\n",(0,o.jsxs)(n.h3,{id:"function-type",children:["Function Type",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#function-type",children:"#"})]}),"\n",(0,o.jsxs)(n.p,{children:["When ",(0,o.jsx)(n.code,{children:"tools.tailwindcss"}),"'s type is Function, the default tailwindcss config will be passed in as the first parameter, the config object can be modified directly, or a value can be returned as the final result."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"export default {\n  tools: {\n    tailwindcss(config) {\n      config.content.push('./some-folder/**/*.{js,ts}');\n    },\n  },\n};\n"})}),"\n",(0,o.jsxs)(n.h3,{id:"object-type",children:["Object Type",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#object-type",children:"#"})]}),"\n",(0,o.jsxs)(n.p,{children:["When ",(0,o.jsx)(n.code,{children:"tools.tailwindcss"}),"'s type is ",(0,o.jsx)(n.code,{children:"Object"}),", the config will be shallow merged with default config by ",(0,o.jsx)(n.code,{children:"Object.assign"}),"."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"export default {\n  tools: {\n    tailwindcss: {\n      plugins: [\n        require('@tailwindcss/forms'),\n        require('@tailwindcss/aspect-ratio'),\n        require('@tailwindcss/typography'),\n      ],\n    },\n  },\n};\n"})}),"\n",(0,o.jsxs)(n.h3,{id:"notes",children:["Notes",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#notes",children:"#"})]}),"\n",(0,o.jsx)(n.p,{children:"Please note:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["If you are using both the ",(0,o.jsx)(n.code,{children:"tailwind.config.{ts,js}"})," file and ",(0,o.jsx)(n.code,{children:"tools.tailwindcss"})," option, the configuration defined in ",(0,o.jsx)(n.code,{children:"tools.tailwindcss"})," will take precedence and override the content defined in ",(0,o.jsx)(n.code,{children:"tailwind.config.{ts,js}"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["If you are using the ",(0,o.jsx)(n.code,{children:"source.designSystem"})," configuration option simultaneously, the ",(0,o.jsx)(n.code,{children:"theme"})," configuration of Tailwind CSS will be overridden by the value of ",(0,o.jsx)(n.code,{children:"source.designSystem"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["The usage of other configurations follows the same approach as the official usage of Tailwind CSS. Please refer to ",(0,o.jsx)(n.a,{href:"https://tailwindcss.com/docs/configuration",target:"_blank",rel:"noopener noreferrer",children:"tailwindcss - Configuration"})," for more details."]}),"\n",(0,o.jsxs)(n.h3,{id:"about-sourcedesignsystem",children:["About source.designSystem",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#about-sourcedesignsystem",children:"#"})]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"source.designSystem"})," is a deprecated configuration option in Modern.js."]}),"\n",(0,o.jsxs)(n.p,{children:["Starting from Modern.js v2.33.0, you can use the ",(0,o.jsx)(n.code,{children:"theme"})," configuration option of Tailwind CSS as a replacement for ",(0,o.jsx)(n.code,{children:"source.designSystem"}),". It is no longer necessary to split the ",(0,o.jsx)(n.code,{children:"theme"})," configuration and set it on ",(0,o.jsx)(n.code,{children:"designSystem"}),"."]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Previous usage:"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"const { theme, ...rest } = tailwindConfig;\n\nexport default {\n  tools: {\n    tailwindcss: rest,\n  },\n  source: {\n    designSystem: theme,\n  },\n};\n"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Current usage:"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"export default {\n  tools: {\n    tailwindcss: tailwindConfig,\n  },\n};\n"})})]})}function d(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,r.useMDXComponents)(),e.components).wrapper;return n?(0,o.jsx)(n,(0,t._)((0,i._)({},e),{children:(0,o.jsx)(c,(0,i._)({},e))})):c(e)}var l=d;d.__RSPRESS_PAGE_META={},d.__RSPRESS_PAGE_META["en%2Fconfigure%2Fapp%2Ftools%2Ftailwindcss.mdx"]={toc:[{text:"Enabling Tailwind CSS",id:"enabling-tailwind-css",depth:3},{text:"Function Type",id:"function-type",depth:3},{text:"Object Type",id:"object-type",depth:3},{text:"Notes",id:"notes",depth:3},{text:"About source.designSystem",id:"about-sourcedesignsystem",depth:3}],title:"tools.tailwindcss"};var a={sidebar_label:"tailwindcss"}}}]);