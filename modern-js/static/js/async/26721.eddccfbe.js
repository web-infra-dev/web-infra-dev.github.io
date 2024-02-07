/*! For license information please see 26721.eddccfbe.js.LICENSE.txt */
(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["26721"],{46045:function(e,s,n){"use strict";n.r(s);var i=n("39980"),r=n("96954");function t(e){let s=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",code:"code",pre:"pre",div:"div",ol:"ol",li:"li",h3:"h3",ul:"ul"},(0,r.useMDXComponents)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(s.h1,{id:"styling",children:["Styling",(0,i.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#styling",children:"#"})]}),"\n",(0,i.jsx)(s.p,{children:"Modern.js has built-in a variety of commonly used CSS solutions, including Less / Sass / Stylus preprocessors, PostCSS, CSS Modules, CSS-in-JS, and Tailwind CSS."}),"\n",(0,i.jsxs)(s.h2,{id:"using-less-sass-and-stylus",children:["Using Less, Sass and Stylus",(0,i.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#using-less-sass-and-stylus",children:"#"})]}),"\n",(0,i.jsx)(s.p,{children:"Modern.js has built-in popular community CSS preprocessors, including Less and Sass."}),"\n",(0,i.jsxs)(s.p,{children:["By default, you don't need to configure Less and Sass. If you have custom loader configuration requirements, you can set them up by configuring ",(0,i.jsx)(s.a,{href:"/configure/app/tools/less",children:"tools.less"})," and ",(0,i.jsx)(s.a,{href:"/configure/app/tools/sass",children:"tools.sass"}),"."]}),"\n",(0,i.jsxs)(s.p,{children:["You can also use Stylus in Modern.js by installing the Stylus plugin provided by Rsbuild. For usage, please refer to ",(0,i.jsx)(s.a,{href:"https://rsbuild.dev/plugins/list/plugin-stylus",target:"_blank",rel:"noopener noreferrer",children:"Stylus Plugin"}),"."]}),"\n",(0,i.jsxs)(s.h2,{id:"using-postcss",children:["Using PostCSS",(0,i.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#using-postcss",children:"#"})]}),"\n",(0,i.jsxs)(s.p,{children:["Modern.js has built-in ",(0,i.jsx)(s.a,{href:"https://postcss.org/",target:"_blank",rel:"noopener noreferrer",children:"PostCSS"})," to transform CSS code."]}),"\n",(0,i.jsxs)(s.p,{children:["Please refer to ",(0,i.jsx)(s.a,{href:"https://rsbuild.dev/guide/basic/css-usage#using-postcss",target:"_blank",rel:"noopener noreferrer",children:"Rsbuild - Using PostCSS"})," for detailed usage."]}),"\n",(0,i.jsxs)(s.h2,{id:"using-css-modules",children:["Using CSS Modules",(0,i.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#using-css-modules",children:"#"})]}),"\n",(0,i.jsxs)(s.p,{children:["Please read the ",(0,i.jsx)(s.a,{href:"/guides/basic-features/css-modules",children:"Using CSS Modules"})," section to learn about the complete usage of CSS Modules."]}),"\n",(0,i.jsxs)(s.h2,{id:"using-css-in-js",children:["Using CSS-in-JS",(0,i.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#using-css-in-js",children:"#"})]}),"\n",(0,i.jsx)(s.p,{children:"CSS-in-JS is a technique that allows you to write CSS styles in JS files."}),"\n",(0,i.jsxs)(s.p,{children:["Modern.js integrates the popular CSS-in-JS implementation library ",(0,i.jsx)(s.a,{href:"https://styled-components.com/",target:"_blank",rel:"noopener noreferrer",children:"styled-components"}),", which uses the new JavaScript feature ",(0,i.jsx)(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#tagged_templates",target:"_blank",rel:"noopener noreferrer",children:"Tagged template"})," to write component CSS styles. You can directly import the API of ",(0,i.jsx)(s.a,{href:"https://styled-components.com/",target:"_blank",rel:"noopener noreferrer",children:"styled-components"})," from ",(0,i.jsx)(s.code,{children:"@modern-js/runtime/styled"})," for use."]}),"\n",(0,i.jsxs)(s.p,{children:["When you need to write a ",(0,i.jsx)(s.code,{children:"div"})," component with an internal font color of red, you can implement it as follows:"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-js",children:"import styled from '@modern-js/runtime/styled';\n\nconst RedDiv = styled.div`\n  color: red;\n`;\n"})}),"\n",(0,i.jsxs)(s.p,{children:["If you need to dynamically set component styles based on the component's ",(0,i.jsx)(s.code,{children:"props"}),", for example, the ",(0,i.jsx)(s.code,{children:"primary"})," property of ",(0,i.jsx)(s.code,{children:"props"})," is ",(0,i.jsx)(s.code,{children:"true"}),", the button color is white, otherwise it is red, you can implement the code as follows:"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-js",children:"import styled from '@modern-js/runtime/styled';\n\nconst Button = styled.button`\n  color: ${props => (props.primary ? 'white' : 'red')};\n  font-size: 1em;\n`;\n"})}),"\n",(0,i.jsxs)(s.p,{children:["For more usage of styled-components, please refer to ",(0,i.jsx)(s.a,{href:"https://styled-components.com/",target:"_blank",rel:"noopener noreferrer",children:"styled-components official website"}),"."]}),"\n",(0,i.jsxs)(s.p,{children:["Modern.js integrates Babel's ",(0,i.jsx)(s.a,{href:"https://github.com/styled-components/babel-plugin-styled-components",target:"_blank",rel:"noopener noreferrer",children:"babel-plugin-styled-components"})," plugin internally, and you can configure the plugin through ",(0,i.jsx)(s.a,{href:"/configure/app/tools/styled-components",children:"tools.styledComponents"}),"."]}),"\n",(0,i.jsxs)(s.div,{className:"rspress-directive tip",children:[(0,i.jsx)(s.div,{className:"rspress-directive-title",children:"TIP"}),(0,i.jsx)(s.div,{className:"rspress-directive-content",children:(0,i.jsxs)(s.p,{children:["If you need to use other CSS-in-JS libraries such as ",(0,i.jsx)(s.a,{href:"https://www.npmjs.com/package/styled-jsx",target:"_blank",rel:"noopener noreferrer",children:"styled-jsx"})," and ",(0,i.jsx)(s.a,{href:"https://emotion.sh/",target:"_blank",rel:"noopener noreferrer",children:"Emotion"}),", you need to install the corresponding dependencies first. For specific usage, please refer to the library's official website.\n"]})})]}),"\n",(0,i.jsxs)(s.h2,{id:"using-tailwind-css",children:["Using Tailwind CSS",(0,i.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#using-tailwind-css",children:"#"})]}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.a,{href:"https://tailwindcss.com/",target:"_blank",rel:"noopener noreferrer",children:"Tailwind CSS"})," is a CSS framework and design system based on Utility Class, which can quickly add common styles to components, and support flexible extension of theme styles."]}),"\n",(0,i.jsxs)(s.p,{children:["To use ",(0,i.jsx)(s.a,{href:"https://tailwindcss.com/",target:"_blank",rel:"noopener noreferrer",children:"Tailwind CSS"})," in Modern.js, you can follow the steps below:"]}),"\n",(0,i.jsxs)(s.ol,{children:["\n",(0,i.jsxs)(s.li,{children:["Run ",(0,i.jsx)(s.code,{children:"pnpm run new"})," in the root directory of your project and make the following selections:"]}),"\n"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-text",children:"? Please select the operation you want: Enable features\n? Please select the feature name: Enable Tailwind CSS\n"})}),"\n",(0,i.jsxs)(s.p,{children:["After successful initialization, you will see that the ",(0,i.jsx)(s.code,{children:"package.json"})," has added dependencies for ",(0,i.jsx)(s.code,{children:"tailwindcss"})," and ",(0,i.jsx)(s.code,{children:"@modern-js/plugin-tailwindcss"}),"."]}),"\n",(0,i.jsxs)(s.ol,{start:"2",children:["\n",(0,i.jsxs)(s.li,{children:["Register the Tailwind plugin in ",(0,i.jsx)(s.code,{children:"modern.config.ts"}),":"]}),"\n"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import { tailwindcssPlugin } from '@modern-js/plugin-tailwindcss';\n\nexport default defineConfig({\n  plugins: [..., tailwindcssPlugin()],\n});\n"})}),"\n",(0,i.jsxs)(s.ol,{start:"3",children:["\n",(0,i.jsxs)(s.li,{children:["Create a ",(0,i.jsx)(s.code,{children:"index.css"})," file and add the following code:"]}),"\n"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-css",meta:'title="index.css"',children:"@tailwind base;\n@tailwind components;\n@tailwind utilities;\n"})}),"\n",(0,i.jsxs)(s.div,{className:"rspress-directive info",children:[(0,i.jsx)(s.div,{className:"rspress-directive-title",children:"INFO"}),(0,i.jsx)(s.div,{className:"rspress-directive-content",children:(0,i.jsxs)(s.p,{children:["Depending on your needs, you can selectively import the CSS styles provided by Tailwind CSS. Please refer to the ",(0,i.jsxs)(s.a,{href:"https://tailwindcss.com/docs/functions-and-directives#tailwind",target:"_blank",rel:"noopener noreferrer",children:[(0,i.jsx)(s.code,{children:"@tailwind"})," documentation"]})," for detailed usage of the ",(0,i.jsx)(s.code,{children:"@tailwind"})," directive.\n"]})})]}),"\n",(0,i.jsxs)(s.ol,{start:"4",children:["\n",(0,i.jsxs)(s.li,{children:["Import the ",(0,i.jsx)(s.code,{children:"index.css"})," file, for example, add the following code in the root component ",(0,i.jsx)(s.code,{children:"src/App.jsx"}),":"]}),"\n"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-js",children:"import './index.css';\n"})}),"\n",(0,i.jsxs)(s.ol,{start:"5",children:["\n",(0,i.jsx)(s.li,{children:"Now you can use the Utility Classes provided by Tailwind CSS in your components:"}),"\n"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-tsx",children:'const Hello = () => (\n  <div className="h-12 w-48">\n    <p className="text-xl font-medium text-black">hello world</p>\n  </div>\n);\n'})}),"\n",(0,i.jsxs)(s.h3,{id:"configuring-tailwind-css",children:["Configuring Tailwind CSS",(0,i.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#configuring-tailwind-css",children:"#"})]}),"\n",(0,i.jsx)(s.p,{children:"In Modern.js, you have two ways to configure Tailwind CSS:"}),"\n",(0,i.jsxs)(s.ol,{children:["\n",(0,i.jsxs)(s.li,{children:["Using the ",(0,i.jsx)(s.code,{children:"tailwind.config.{ts,js}"})," file, which follows the official usage of Tailwind CSS. Please refer to ",(0,i.jsx)(s.a,{href:"https://tailwindcss.com/docs/configuration",target:"_blank",rel:"noopener noreferrer",children:'"Tailwind CSS - Configuration"'})," for more details."]}),"\n"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-ts",meta:'title="tailwind.config.ts"',children:"import type { Config } from 'tailwindcss';\n\nexport default {\n  content: ['./src/**/*.{js,jsx,ts,tsx}'],\n} as Config;\n"})}),"\n",(0,i.jsxs)(s.div,{className:"rspress-directive tip",children:[(0,i.jsx)(s.div,{className:"rspress-directive-title",children:"TIP"}),(0,i.jsx)(s.div,{className:"rspress-directive-content",children:(0,i.jsxs)(s.p,{children:["Please upgrade Modern.js to version >= 2.33.0 to support automatic reading of ",(0,i.jsx)(s.code,{children:"tailwind.config.{ts,js}"})," files.\n"]})})]}),"\n",(0,i.jsxs)(s.ol,{start:"2",children:["\n",(0,i.jsxs)(s.li,{children:["Using the ",(0,i.jsx)(s.a,{href:"/configure/app/tools/tailwindcss",children:"tools.tailwindcss"})," configuration option. This is the old way of configuring Tailwind CSS, and we recommend using the ",(0,i.jsx)(s.code,{children:"tailwind.config.{ts,js}"})," file for configuration."]}),"\n"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"export default {\n  tools: {\n    tailwindcss: {\n      content: ['./src/**/*.{js,jsx,ts,tsx}'],\n    },\n  },\n};\n"})}),"\n",(0,i.jsxs)(s.p,{children:["If you are using both the ",(0,i.jsx)(s.code,{children:"tailwind.config.{ts,js}"})," file and ",(0,i.jsx)(s.code,{children:"tools.tailwindcss"})," option, the configuration defined in ",(0,i.jsx)(s.code,{children:"tools.tailwindcss"})," will take precedence and override the content defined in ",(0,i.jsx)(s.code,{children:"tailwind.config.{ts,js}"}),"."]}),"\n",(0,i.jsxs)(s.h3,{id:"tailwind-css-autocomplete",children:["Tailwind CSS Autocomplete",(0,i.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#tailwind-css-autocomplete",children:"#"})]}),"\n",(0,i.jsxs)(s.p,{children:["Tailwind CSS provides an official extension called ",(0,i.jsx)(s.a,{href:"https://github.com/tailwindlabs/tailwindcss-intellisense",target:"_blank",rel:"noopener noreferrer",children:"Tailwind CSS IntelliSense"})," for autocompletion of Tailwind CSS class names, CSS functions, and directives in VS Code."]}),"\n",(0,i.jsx)(s.p,{children:"You can follow the steps below to enable the autocomplete feature:"}),"\n",(0,i.jsxs)(s.ol,{children:["\n",(0,i.jsxs)(s.li,{children:["Install the ",(0,i.jsx)(s.a,{href:"https://github.com/tailwindlabs/tailwindcss-intellisense",target:"_blank",rel:"noopener noreferrer",children:"Tailwind CSS IntelliSense"})," extension in VS Code."]}),"\n",(0,i.jsxs)(s.li,{children:["If the root directory of your project does not have a ",(0,i.jsx)(s.code,{children:"tailwind.config.{ts,js}"})," file, you need to create one and write the Tailwind CSS configuration for your current project. Otherwise, the IDE plugin will not work correctly."]}),"\n"]}),"\n",(0,i.jsxs)(s.h3,{id:"tailwind-css-version",children:["Tailwind CSS Version",(0,i.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#tailwind-css-version",children:"#"})]}),"\n",(0,i.jsxs)(s.p,{children:["Modern.js supports both Tailwind CSS v2 and v3 versions, and the framework will recognize the version of the ",(0,i.jsx)(s.code,{children:"tailwindcss"})," dependency in the project ",(0,i.jsx)(s.code,{children:"package.json"})," file and enable the corresponding configuration. By default, we will install Tailwind CSS v3 version for you."]}),"\n",(0,i.jsx)(s.p,{children:"If your project is still using Tailwind CSS v2, we recommend that you upgrade to v3 to support JIT and other capabilities. For the differences between Tailwind CSS v2 and v3 versions, please refer to the following articles:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"https://tailwindcss.com/blog/tailwindcss-v3",target:"_blank",rel:"noopener noreferrer",children:"Tailwind CSS v3.0"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"https://tailwindcss.com/docs/upgrade-guide",target:"_blank",rel:"noopener noreferrer",children:"Upgrade Guide"})}),"\n"]}),"\n",(0,i.jsxs)(s.h3,{id:"browser-compatibility",children:["Browser Compatibility",(0,i.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#browser-compatibility",children:"#"})]}),"\n",(0,i.jsx)(s.p,{children:"Tailwind CSS v2 and v3 do not support the IE 11 browser, please refer to:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.a,{href:"https://tailwindcss.com/docs/browser-support",target:"_blank",rel:"noopener noreferrer",children:"Tailwind CSS v3 - Browser Support"}),"."]}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"https://v2.tailwindcss.com/docs/browser-support",target:"_blank",rel:"noopener noreferrer",children:"Tailwind CSS v2 - Browser Support"})}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:"If you use Tailwind CSS on IE 11 browser, some styles may not be available, please use it with caution."})]})}function l(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:s}=Object.assign({},(0,r.useMDXComponents)(),e.components);return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(t,{...e})}):t(e)}s.default=l,l.__RSPRESS_PAGE_META={},l.__RSPRESS_PAGE_META["en%2Fguides%2Fbasic-features%2Fcss.mdx"]={toc:[{text:"Using Less, Sass and Stylus",id:"using-less-sass-and-stylus",depth:2},{text:"Using PostCSS",id:"using-postcss",depth:2},{text:"Using CSS Modules",id:"using-css-modules",depth:2},{text:"Using CSS-in-JS",id:"using-css-in-js",depth:2},{text:"Using Tailwind CSS",id:"using-tailwind-css",depth:2},{text:"Configuring Tailwind CSS",id:"configuring-tailwind-css",depth:3},{text:"Tailwind CSS Autocomplete",id:"tailwind-css-autocomplete",depth:3},{text:"Tailwind CSS Version",id:"tailwind-css-version",depth:3},{text:"Browser Compatibility",id:"browser-compatibility",depth:3}],title:"Styling",frontmatter:{sidebar_position:1}}}}]);