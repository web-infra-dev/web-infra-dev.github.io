(self.webpackChunk_modern_js_module_tools_docs=self.webpackChunk_modern_js_module_tools_docs||[]).push([["8815"],{4942:function(e,n,s){"use strict";s.r(n),s.d(n,{default:function(){return d},frontmatter:function(){return a}});var i=s("15169"),r=s("43932"),o=s("9880"),t=s("23169");function l(e){var n=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",ol:"ol",li:"li",code:"code",pre:"pre",ul:"ul",h3:"h3",blockquote:"blockquote",strong:"strong"},(0,t.useMDXComponents)(),e.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.h1,{id:"developing-components",children:["Developing Components",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#developing-components",children:"#"})]}),"\n",(0,o.jsx)(n.p,{children:"This chapter will describe how to develop component projects using the Modern.js Module."}),"\n",(0,o.jsxs)(n.h2,{id:"initialize-the-project",children:["Initialize the project",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#initialize-the-project",children:"#"})]}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["It is recommended to use the ",(0,o.jsx)(n.code,{children:"@modern-js/create"})," command to initialize an npm project."]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-text",meta:'title="Interactive questions"',children:"npx @modern-js/create@latest components-project\n\n? Please select the type of project you want to create: Npm Module\n? Please fill in the project name: components-demo\n? Please select the programming language: TS\n? Please select the package manager: pnpm\n"})}),"\n",(0,o.jsxs)(n.ol,{start:"2",children:["\n",(0,o.jsx)(n.li,{children:"The initialized directory structure:"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:".\n\u251C\u2500\u2500 README.md\n\u251C\u2500\u2500 node_modules/\n\u251C\u2500\u2500 dist/\n\u251C\u2500\u2500 modern.config.ts\n\u251C\u2500\u2500 package.json\n\u251C\u2500\u2500 pnpm-lock.yaml\n\u251C\u2500\u2500 src\n\u2502   \u251C\u2500\u2500 index.ts\n\u2502   \u2514\u2500\u2500 modern-app-env.d.ts\n\u2514\u2500\u2500 tsconfig.json\n"})}),"\n",(0,o.jsxs)(n.ol,{start:"3",children:["\n",(0,o.jsxs)(n.li,{children:["Finally, modify the file suffix and content of ",(0,o.jsx)(n.code,{children:"./src/index.ts"})," as follows, and the initialization of the component project is completed."]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",meta:'title="./src/index.tsx"',children:"export default () => {\n  return <div>hello world</div>;\n};\n"})}),"\n",(0,o.jsxs)(n.h2,{id:"debugging-code-with-storybook",children:["Debugging code with Storybook",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#debugging-code-with-storybook",children:"#"})]}),"\n",(0,o.jsxs)(n.p,{children:["Please refer to ",(0,o.jsx)(n.a,{href:"/guide/basic/using-storybook",children:'"Using Storybook"'})," to debug code using Storybook."]}),"\n",(0,o.jsxs)(n.h2,{id:"developing-styles",children:["Developing Styles",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#developing-styles",children:"#"})]}),"\n",(0,o.jsx)(n.p,{children:"Next we can add styles to the component."}),"\n",(0,o.jsx)(n.p,{children:"The following capabilities are currently supported for developing styles."}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"CSS/PostCSS"}),"\n",(0,o.jsx)(n.li,{children:"Less"}),"\n",(0,o.jsx)(n.li,{children:"Scss/Sass"}),"\n",(0,o.jsx)(n.li,{children:"Tailwind CSS"}),"\n",(0,o.jsx)(n.li,{children:"CSS Modules"}),"\n"]}),"\n",(0,o.jsxs)(n.h3,{id:"csspostcss",children:["CSS/PostCSS",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#csspostcss",children:"#"})]}),"\n",(0,o.jsx)(n.p,{children:"Modern.js Module supports PostCSS and has the following built-in PostCSS plugins."}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://github.com/luisrudge/postcss-flexbugs-fixes",target:"_blank",rel:"noopener noreferrer",children:"flexbugs-fixes"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://github.com/postcss/postcss-custom-properties",target:"_blank",rel:"noopener noreferrer",children:"custom-properties"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://github.com/maximkoretskiy/postcss-initial",target:"_blank",rel:"noopener noreferrer",children:"initial"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://github.com/shrpne/postcss-page-break",target:"_blank",rel:"noopener noreferrer",children:"page-break"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://github.com/postcss/postcss-font-variant",target:"_blank",rel:"noopener noreferrer",children:"font-variant"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://github.com/postcss/postcss-media-minmax",target:"_blank",rel:"noopener noreferrer",children:"media-minmax"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://github.com/csstools/postcss-plugins/tree/main/plugins/postcss-nesting#readme",target:"_blank",rel:"noopener noreferrer",children:"nesting"})}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["So we can create ",(0,o.jsx)(n.code,{children:".css"})," files in our projects and use the syntax support and capabilities provided by these plugins directly in our css files."]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Source Code:"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-less",meta:'title="./src/index.css"',children:'a,\nb {\n  color: red;\n\n  /* "&" comes first */\n  & c,\n  & d {\n    color: white;\n  }\n\n  /* "&" comes later, requiring "@nest" */\n  @nest e & {\n    color: yellow;\n  }\n}\n'})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"CSS artifact:"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-css",meta:'title="./dist/es/index.css"',children:"a,\nb {\n  color: red;\n}\na c,\nb c,\na d,\nb d {\n  color: white;\n}\ne a,\ne b {\n  color: yellow;\n}\n"})}),"\n",(0,o.jsxs)(n.h3,{id:"less",children:["Less",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#less",children:"#"})]}),"\n",(0,o.jsx)(n.p,{children:"Modern.js Module supports development styles using Less."}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:"The current built-in Less version is v4.1.3"}),"\n"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Source Code:"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-less",meta:'title="./src/common.less"',children:"@bg: black;\n@bg-light: boolean(luma(@bg) > 50%);\n\ndiv {\n  background: @bg;\n  color: if(@bg-light, black, white);\n}\n"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Less artifact:"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-css",meta:'title="./dist/es/common.css"',children:"div {\n  background: black;\n  color: white;\n}\n"})}),"\n",(0,o.jsxs)(n.h3,{id:"sassscss",children:["Sass/Scss",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#sassscss",children:"#"})]}),"\n",(0,o.jsx)(n.p,{children:"Modern.js Module supports developing styles using Scss/Sass."}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:"The current built-in Sass version is v1.54.4"}),"\n"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Source code:"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sass",meta:'title="./src/common.sass"',children:"$font-stack: Helvetica, sans-serif;\n$primary-color: #333;\n\nbody {\n  font: 100% $font-stack;\n  color: $primary-color;\n}\n"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Less artifact:"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-css",meta:'title="./dist/es/common.css"',children:"body {\n  font: 100% Helvetica, sans-serif;\n  color: #333;\n}\n"})}),"\n",(0,o.jsxs)(n.h3,{id:"tailwind-css",children:["Tailwind CSS",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#tailwind-css",children:"#"})]}),"\n",(0,o.jsxs)(n.p,{children:["Please refer to ",(0,o.jsx)(n.a,{href:"/guide/best-practices/use-tailwindcss",children:'"Using Tailwind CSS"'})," for detailed usage."]}),"\n",(0,o.jsxs)(n.h3,{id:"css-modules",children:["CSS Modules",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#css-modules",children:"#"})]}),"\n",(0,o.jsx)(n.p,{children:"Modern.js Module supports the development of styles using CSS Modules. By default, the following files are recognized as CSS Module files."}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:".module.css"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:".module.less"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:".module.scss"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:".module.sass"})}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"If you need to configure CSS Modules, you can check out the API at"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"/en/api/config/build-config#styleautomodules",children:"style.autoModules"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"/en/api/config/build-config#stylemodules",children:"style.modules"})}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"The following is a code example."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",meta:'title="./src/index.tsx"',children:"import style from './index.module.css';\n\nexport default () => {\n  return <div className={style.btn}>hello world</div>;\n};\n"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-css",meta:'title="./src/index.module.css"',children:".btn {\n  color: blue;\n}\n"})}),"\n",(0,o.jsxs)(n.h2,{id:"configuring-build-products",children:["Configuring build products",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#configuring-build-products",children:"#"})]}),"\n",(0,o.jsxs)(n.p,{children:["Based on most scenarios of component project usage, ",(0,o.jsxs)(n.strong,{children:["it is recommended to use the ",(0,o.jsx)(n.code,{children:"npm-component"})," build preset"]}),". This preset yields a output directory structure of"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:".\n\u251C\u2500\u2500 dist\n\u2502   \u251C\u2500\u2500 es\n\u2502   \u251C\u2500\u2500 lib\n\u2502   \u2514\u2500\u2500 types\n"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:". /dist/es"}),": Contains bundleless artifacts in ES modules format that support the es6 syntax."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:". /dist/lib"}),": Contains bundleless artifacts in CommonJS format with support for es6 syntax."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:". /dist/types"}),": Contains the types file."]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.a,{href:"/en/api/config/build-preset",children:(0,o.jsx)(n.code,{children:"buildPreset"})})," can be configured manually if there is a requirement to use syntax support, and supports modifying the supported syntax by adding a suffix to ",(0,o.jsx)(n.code,{children:"npm-component"}),"."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"export default defineConfig({\n  buildPreset: 'npm-component-es2019',\n});\n"})}),"\n",(0,o.jsxs)(n.p,{children:["If you have special needs for the build artifacts directory structure, you can use the ",(0,o.jsxs)(n.a,{href:"/en/api/config/build-config",children:[(0,o.jsx)(n.code,{children:"buildConfig"})," API"]}),", which can be used by the following documentation."]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"/en/guide/basic/modify-output-product#build-configuration-object",children:"modify-output-product"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"/en/guide/advance/in-depth-about-build",children:"in-depth-about-build"})}),"\n"]}),"\n",(0,o.jsxs)(n.h2,{id:"testing-components",children:["Testing components",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#testing-components",children:"#"})]}),"\n",(0,o.jsxs)(n.p,{children:["For more information on how to test components, please refer to ",(0,o.jsx)(n.a,{href:"/en/guide/basic/test-your-project",children:'"Test project"'}),"."]}),"\n",(0,o.jsxs)(n.h2,{id:"releasing-components",children:["Releasing components",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#releasing-components",children:"#"})]}),"\n",(0,o.jsxs)(n.p,{children:["It is recommended to use the version release feature provided by Modern.js Module. You can refer to the ",(0,o.jsx)(n.a,{href:"/en/guide/basic/publish-your-project",children:'"Version Management and Release"'})," section for more information."]})]})}function c(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,t.useMDXComponents)(),e.components).wrapper;return n?(0,o.jsx)(n,(0,r._)((0,i._)({},e),{children:(0,o.jsx)(l,(0,i._)({},e))})):l(e)}var d=c;c.__RSPRESS_PAGE_META={},c.__RSPRESS_PAGE_META["en%2Fguide%2Fbest-practices%2Fcomponents.mdx"]={toc:[{text:"Initialize the project",id:"initialize-the-project",depth:2},{text:"Debugging code with Storybook",id:"debugging-code-with-storybook",depth:2},{text:"Developing Styles",id:"developing-styles",depth:2},{text:"CSS/PostCSS",id:"csspostcss",depth:3},{text:"Less",id:"less",depth:3},{text:"Sass/Scss",id:"sassscss",depth:3},{text:"Tailwind CSS",id:"tailwind-css",depth:3},{text:"CSS Modules",id:"css-modules",depth:3},{text:"Configuring build products",id:"configuring-build-products",depth:2},{text:"Testing components",id:"testing-components",depth:2},{text:"Releasing components",id:"releasing-components",depth:2}],title:"Developing Components"};var a={sidebar_position:1}}}]);