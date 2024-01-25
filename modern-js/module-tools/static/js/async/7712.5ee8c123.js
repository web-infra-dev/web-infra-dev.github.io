/*! For license information please see 7712.5ee8c123.js.LICENSE.txt */
(self.webpackChunk_modern_js_module_tools_docs=self.webpackChunk_modern_js_module_tools_docs||[]).push([["7712"],{3405:function(e,n,s){"use strict";s.r(n),s.d(n,{default:function(){return a}});var i=s("39980"),d=s("96954");function l(e){let n=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",ol:"ol",li:"li",code:"code",pre:"pre",div:"div",h3:"h3",ul:"ul",strong:"strong",h4:"h4"},(0,d.useMDXComponents)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.h1,{id:"using-tailwind-css",children:["Using Tailwind CSS",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#using-tailwind-css",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://tailwindcss.com/",target:"_blank",rel:"noopener noreferrer",children:"Tailwind CSS"})," is a CSS framework and design system based on Utility Class, which can quickly add common styles to components, and support flexible extension of theme styles."]}),"\n",(0,i.jsx)(n.p,{children:"Modern.js Module supports developing component styles using Tailwind CSS."}),"\n",(0,i.jsxs)(n.h2,{id:"enabling-tailwind-css",children:["Enabling Tailwind CSS",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#enabling-tailwind-css",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["To use ",(0,i.jsx)(n.a,{href:"https://tailwindcss.com/",target:"_blank",rel:"noopener noreferrer",children:"Tailwind CSS"})," in Modern.js Module, you can follow the steps below:"]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Run ",(0,i.jsx)(n.code,{children:"pnpm run new"})," in the root directory of your project and make the following selections:"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"? Please select the operation you want: Enable features\n? Please select the feature name: Enable Tailwind CSS\n"})}),"\n",(0,i.jsxs)(n.p,{children:["After successful initialization, you will see that the ",(0,i.jsx)(n.code,{children:"package.json"})," has added dependencies for ",(0,i.jsx)(n.code,{children:"tailwindcss"})," and ",(0,i.jsx)(n.code,{children:"@modern-js/plugin-tailwindcss"}),"."]}),"\n",(0,i.jsxs)(n.ol,{start:"2",children:["\n",(0,i.jsxs)(n.li,{children:["Register the Tailwind plugin in ",(0,i.jsx)(n.code,{children:"modern.config.ts"}),":"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import { tailwindcssPlugin } from '@modern-js/plugin-tailwindcss';\n\nexport default defineConfig({\n  plugins: [..., tailwindcssPlugin()],\n});\n"})}),"\n",(0,i.jsxs)(n.ol,{start:"3",children:["\n",(0,i.jsxs)(n.li,{children:["Create a ",(0,i.jsx)(n.code,{children:"index.css"})," file and add the following code:"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-css",meta:'title="index.css"',children:"/* base and components are optional, please add as appropriate */\n@tailwind base;\n@tailwind components;\n@tailwind utilities;\n"})}),"\n",(0,i.jsxs)(n.div,{className:"rspress-directive info",children:[(0,i.jsx)(n.div,{className:"rspress-directive-title",children:"INFO"}),(0,i.jsx)(n.div,{className:"rspress-directive-content",children:(0,i.jsxs)(n.p,{children:["Depending on your needs, you can selectively import the CSS styles provided by Tailwind CSS. Please refer to the ",(0,i.jsxs)(n.a,{href:"https://tailwindcss.com/docs/functions-and-directives#tailwind",target:"_blank",rel:"noopener noreferrer",children:[(0,i.jsx)(n.code,{children:"@tailwind"})," documentation"]})," for detailed usage of the ",(0,i.jsx)(n.code,{children:"@tailwind"})," directive.\n"]})})]}),"\n",(0,i.jsxs)(n.ol,{start:"4",children:["\n",(0,i.jsxs)(n.li,{children:["Import the ",(0,i.jsx)(n.code,{children:"index.css"})," file, for example, add the following code in the root component ",(0,i.jsx)(n.code,{children:"src/index.jsx"}),":"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"import './index.css';\n"})}),"\n",(0,i.jsxs)(n.ol,{start:"5",children:["\n",(0,i.jsx)(n.li,{children:"Now you can use the Utility Classes provided by Tailwind CSS in your components:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:'const Hello = () => (\n  <div className="h-12 w-48">\n    <p className="text-xl font-medium text-black">hello world</p>\n  </div>\n);\n'})}),"\n",(0,i.jsxs)(n.h2,{id:"configuring-tailwind-css",children:["Configuring Tailwind CSS",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#configuring-tailwind-css",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"In Modern.js Module, you have two ways to configure Tailwind CSS:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Using the ",(0,i.jsx)(n.code,{children:"tailwind.config.{ts,js}"})," file, which follows the official usage of Tailwind CSS. Please refer to ",(0,i.jsx)(n.a,{href:"https://tailwindcss.com/docs/configuration",target:"_blank",rel:"noopener noreferrer",children:'"Tailwind CSS - Configuration"'})," for more details."]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",meta:'title="tailwind.config.ts"',children:"import type { Config } from 'tailwindcss';\n\nexport default {\n  content: ['./src/**/*.{js,jsx,ts,tsx}'],\n} as Config;\n"})}),"\n",(0,i.jsxs)(n.div,{className:"rspress-directive tip",children:[(0,i.jsx)(n.div,{className:"rspress-directive-title",children:"TIP"}),(0,i.jsx)(n.div,{className:"rspress-directive-content",children:(0,i.jsxs)(n.p,{children:["Please upgrade Modern.js to version >= 2.33.0 to support automatic reading of ",(0,i.jsx)(n.code,{children:"tailwind.config.{ts,js}"})," files.\n"]})})]}),"\n",(0,i.jsxs)(n.ol,{start:"2",children:["\n",(0,i.jsxs)(n.li,{children:["Using the ",(0,i.jsx)(n.a,{href:"/api/config/build-config#styletailwindcss",children:"style.tailwindcss"})," configuration option. This is the old way of configuring Tailwind CSS, and we recommend using the ",(0,i.jsx)(n.code,{children:"tailwind.config.{ts,js}"})," file for configuration."]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"export default {\n  tools: {\n    tailwindcss: {\n      content: ['./src/**/*.{js,jsx,ts,tsx}'],\n    },\n  },\n};\n"})}),"\n",(0,i.jsxs)(n.p,{children:["If you are using both the ",(0,i.jsx)(n.code,{children:"tailwind.config.{ts,js}"})," file and ",(0,i.jsx)(n.code,{children:"style.tailwindcss"})," option, the configuration defined in ",(0,i.jsx)(n.code,{children:"style.tailwindcss"})," will take precedence and override the content defined in ",(0,i.jsx)(n.code,{children:"tailwind.config.{ts,js}"}),"."]}),"\n",(0,i.jsxs)(n.h3,{id:"tailwind-css-autocomplete",children:["Tailwind CSS Autocomplete",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#tailwind-css-autocomplete",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["Tailwind CSS provides an official extension called ",(0,i.jsx)(n.a,{href:"https://github.com/tailwindlabs/tailwindcss-intellisense",target:"_blank",rel:"noopener noreferrer",children:"Tailwind CSS IntelliSense"})," for autocompletion of Tailwind CSS class names, CSS functions, and directives in VS Code."]}),"\n",(0,i.jsx)(n.p,{children:"You can follow the steps below to enable the autocomplete feature:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Install the ",(0,i.jsx)(n.a,{href:"https://github.com/tailwindlabs/tailwindcss-intellisense",target:"_blank",rel:"noopener noreferrer",children:"Tailwind CSS IntelliSense"})," extension in VS Code."]}),"\n",(0,i.jsxs)(n.li,{children:["If the root directory of your project does not have a ",(0,i.jsx)(n.code,{children:"tailwind.config.{ts,js}"})," file, you need to create one and write the Tailwind CSS configuration for your current project. Otherwise, the IDE plugin will not work correctly."]}),"\n"]}),"\n",(0,i.jsxs)(n.h2,{id:"build-modes",children:["Build Modes",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#build-modes",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"When using Tailwind CSS, please note that there are significant differences between the bundle and bundleless modes in terms of the build artifacts."}),"\n",(0,i.jsxs)(n.div,{className:"rspress-directive tip",children:[(0,i.jsx)(n.div,{className:"rspress-directive-title",children:"TIP"}),(0,i.jsx)(n.div,{className:"rspress-directive-content",children:(0,i.jsxs)(n.p,{children:["For definitions of bundle and bundleless, please refer to the ",(0,i.jsx)(n.a,{href:"/guide/advance/in-depth-about-build",children:'"In-depth understanding of build"'}),".\n"]})})]}),"\n",(0,i.jsxs)(n.h3,{id:"bundle-mode",children:["Bundle Mode",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#bundle-mode",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"In Bundle mode, a separate CSS file is generated, and the JS output does not automatically reference the CSS output file."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Source code:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",meta:'title="./src/index.tsx"',children:"import './index.css';\n\nexport default () => {\n  return <div className=\"bg-black\">hello world</div>;\n};\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Output code:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",meta:'title="./dist/es/index.js"',children:"// src/index.tsx\nimport { jsx } from 'react/jsx-runtime';\nvar src_default = () => {\n  return /* @__PURE__ */ jsx('div', {\n    className: 'bg-black',\n    children: 'hello world',\n  });\n};\nexport { src_default as default };\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-css",meta:'title="./dist/es/index.css"',children:".bg-black {\n  --tw-bg-opacity: 1;\n  background-color: rgb(0 0 0 / var(--tw-bg-opacity));\n}\n/** some more... */\n"})}),"\n",(0,i.jsxs)(n.p,{children:["If you need to inject styles into the JS artifact, you can enable the ",(0,i.jsx)(n.a,{href:"/api/config/build-config#styleinject",children:"style.inject"})," option."]}),"\n",(0,i.jsxs)(n.p,{children:["If you haven't enabled ",(0,i.jsx)(n.code,{children:"style.inject"}),", you can also let users manually import the CSS file:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"import 'your-package/dist/es/index.css';\n"})}),"\n",(0,i.jsxs)(n.h3,{id:"bundleless-mode",children:["Bundleless Mode",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#bundleless-mode",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"In bundleless mode, the CSS file is automatically imported in the artifact code without the need for additional processing."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Output code:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",meta:'title="./dist/es/index.js"',children:"import { jsx as _jsx } from 'react/jsx-runtime';\nimport './index.css';\nexport default () =>\n  /* @__PURE__ */ _jsx('div', {\n    className: 'bg-black',\n    children: 'hello world',\n  });\n"})}),"\n",(0,i.jsxs)(n.h2,{id:"class-name-prefix",children:["Class Name Prefix",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#class-name-prefix",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["You can add a class name prefix using the ",(0,i.jsx)(n.a,{href:"https://tailwindcss.com/docs/configuration#prefix",target:"_blank",rel:"noopener noreferrer",children:"prefix"})," option provided by Tailwind CSS. This helps avoid potential class name conflicts, such as when different versions of Tailwind CSS are used in different parts of an application or module."]}),"\n",(0,i.jsxs)(n.p,{children:["For example, you can add the ",(0,i.jsx)(n.code,{children:"foo-"})," prefix using the ",(0,i.jsx)(n.code,{children:"prefix"})," option in ",(0,i.jsx)(n.code,{children:"tailwind.config.js"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",meta:'title="tailwind.config.js"',children:"module.exports = {\n  prefix: 'foo-',\n};\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Source Code:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",meta:'title="./src/index.tsx"',children:"import './index.css';\n\nexport default () => {\n  return <div className=\"foo-bg-black\">hello world</div>;\n};\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Output Code:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-css",meta:'title="./dist/es/index.css"',children:".foo-bg-black {\n  --tw-bg-opacity: 1;\n  background-color: rgb(0 0 0 / var(--tw-bg-opacity));\n}\n/** some more... */\n"})}),"\n",(0,i.jsxs)(n.h2,{id:"usage-guide",children:["Usage Guide",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#usage-guide",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"Here are some usage examples of Tailwind CSS."}),"\n",(0,i.jsxs)(n.h3,{id:"html-class-names",children:["HTML Class Names",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#html-class-names",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["Tailwind CSS supports adding styles to HTML tags through class names. ",(0,i.jsx)(n.strong,{children:"When using HTML class names, please note that the corresponding CSS styles of Tailwind CSS must be imported in advance."})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",meta:'title="./src/index.tsx"',children:"import './index.css';\n\nexport default () => {\n  return <div className=\"bg-black\">hello world</div>;\n};\n"})}),"\n",(0,i.jsx)(n.p,{children:"Generated styles (after bundling):"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-css",meta:'title="./dist/es/index.css"',children:".bg-black {\n  --tw-bg-opacity: 1;\n  background-color: rgba(0, 0, 0, var(--tw-bg-opacity));\n}\n/** some more... */\n"})}),"\n",(0,i.jsxs)(n.h3,{id:"apply",children:[(0,i.jsx)(n.code,{children:"@apply"}),(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#apply",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["Tailwind CSS provides the ",(0,i.jsx)(n.a,{href:"https://v2.tailwindcss.com/docs/functions-and-directives#apply",target:"_blank",rel:"noopener noreferrer",children:(0,i.jsx)(n.code,{children:"@apply"})})," directive, which allows us to inline the styles provided by Tailwind CSS into our own styles."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"@apply"})," can be used in CSS, Less, and Sass."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-css",children:".btn {\n  @apply font-bold py-2 px-4 rounded;\n}\n"})}),"\n",(0,i.jsx)(n.p,{children:"However, there are some considerations when using it with Less and Sass:"}),"\n",(0,i.jsxs)(n.h4,{id:"sass",children:["Sass",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#sass",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["When using Tailwind with Sass and there is an ",(0,i.jsx)(n.code,{children:"!important"})," after ",(0,i.jsx)(n.code,{children:"@apply"}),", interpolation should be used to ensure Sass compiles correctly."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Won't work as expected:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sass",children:".alert {\n  @apply bg-red-500 !important;\n}\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Will work as expected:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sass",children:".alert {\n  @apply bg-red-500 #{!important};\n}\n"})}),"\n",(0,i.jsxs)(n.h4,{id:"less",children:["Less",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#less",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["When using Tailwind with Less, you cannot nest Tailwind's ",(0,i.jsx)(n.code,{children:"@screen"})," directive."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Won't work as expected:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-less",children:".card {\n  @apply rounded-none;\n\n  @screen sm {\n    @apply rounded-lg;\n  }\n}\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Instead, use regular media queries and the ",(0,i.jsx)(n.code,{children:"theme()"})," function to reference your screen sizes or simply avoid nesting your ",(0,i.jsx)(n.code,{children:"@screen"})," directive."]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-less",meta:'title="Method 1"',children:"// Use a regular media query and theme()\n.card {\n  @apply rounded-none;\n\n  @media (min-width: theme('screens.sm')) {\n    @apply rounded-lg;\n  }\n}\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-less",meta:'title="Method 2"',children:"// Use the @screen directive at the top-level\n.card {\n  @apply rounded-none;\n\n  @media (min-width: theme('screens.sm')) {\n    @apply rounded-lg;\n  }\n}\n"})}),"\n",(0,i.jsxs)(n.h2,{id:"about-designsystem-config",children:["About ",(0,i.jsx)(n.code,{children:"designSystem"})," config",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#about-designsystem-config",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"designSystem"})," is a deprecated configuration option in Modern.js Module."]}),"\n",(0,i.jsxs)(n.p,{children:["Starting from Modern.js Module version 2.33.0, you can use the ",(0,i.jsx)(n.code,{children:"theme"})," configuration option of Tailwind CSS as a replacement for ",(0,i.jsx)(n.code,{children:"designSystem"}),". It is no longer necessary to split the ",(0,i.jsx)(n.code,{children:"theme"})," configuration and set it on ",(0,i.jsx)(n.code,{children:"designSystem"}),"."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Previous usage:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"const { theme, ...rest } = tailwindConfig;\n\nexport default {\n  style: {\n    tailwindcss: rest,\n  },\n  designSystem: theme,\n};\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Current usage:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"export default {\n  style: {\n    tailwindcss: tailwindConfig,\n  },\n};\n"})})]})}function r(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,d.useMDXComponents)(),e.components);return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}var a=r;r.__RSPRESS_PAGE_META={},r.__RSPRESS_PAGE_META["en%2Fguide%2Fbest-practices%2Fuse-tailwindcss.mdx"]={toc:[{text:"Enabling Tailwind CSS",id:"enabling-tailwind-css",depth:2},{text:"Configuring Tailwind CSS",id:"configuring-tailwind-css",depth:2},{text:"Tailwind CSS Autocomplete",id:"tailwind-css-autocomplete",depth:3},{text:"Build Modes",id:"build-modes",depth:2},{text:"Bundle Mode",id:"bundle-mode",depth:3},{text:"Bundleless Mode",id:"bundleless-mode",depth:3},{text:"Class Name Prefix",id:"class-name-prefix",depth:2},{text:"Usage Guide",id:"usage-guide",depth:2},{text:"HTML Class Names",id:"html-class-names",depth:3},{text:"@apply",id:"apply",depth:3},{text:"Sass",id:"sass",depth:4},{text:"Less",id:"less",depth:4},{text:"About designSystem config",id:"about-designsystem-config",depth:2}],title:"Using Tailwind CSS",frontmatter:{sidebar_position:2}}}}]);