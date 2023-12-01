(self.webpackChunk_modern_js_module_tools_docs=self.webpackChunk_modern_js_module_tools_docs||[]).push([["27"],{3149:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return d}});var i=t("9880"),r=t("23169");function s(e){return(0,i.jsx)(i.Fragment,{})}function o(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,r.useMDXComponents)(),e.components);return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(s,{...e})}):s(e)}var d=o;o.__RSPRESS_PAGE_META={},o.__RSPRESS_PAGE_META["en%2Fcomponents%2Frelease-module-doc.mdx"]={toc:[],title:"",frontmatter:{}}},50141:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return a}});var i=t("9880"),r=t("23169"),s=t("3149");function o(e){let n=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",h3:"h3",ol:"ol",li:"li",pre:"pre",code:"code",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",img:"img",div:"div",ul:"ul",h4:"h4",strong:"strong"},(0,r.useMDXComponents)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.h1,{id:"developing-module-documentation",children:["Developing Module documentation",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#developing-module-documentation",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"This chapter describes how to quickly build a static documentation site for a module project."}),"\n",(0,i.jsxs)(n.h2,{id:"before-we-start",children:["Before we start",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#before-we-start",children:"#"})]}),"\n",(0,i.jsxs)(n.h3,{id:"why-we-need-to-build-a-documentation-site-for-a-module",children:["Why we need to build a documentation site for a module",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#why-we-need-to-build-a-documentation-site-for-a-module",children:"#"})]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"a documentation site can help us to better organize the structure of the documentation."}),"\n",(0,i.jsx)(n.li,{children:"the documentation site has better presentation, such as the ability to execute functions in the page, render components."}),"\n",(0,i.jsx)(n.li,{children:"to make better use of AI search capabilities."}),"\n"]}),"\n",(0,i.jsxs)(n.h3,{id:"preliminary-preparation",children:["Preliminary preparation",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#preliminary-preparation",children:"#"})]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Enable the documentation feature via ",(0,i.jsx)(n.a,{href:"/guide/basic/use-micro-generator",children:"micro-generator"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Read ",(0,i.jsx)(n.a,{href:"https://rspress.dev/guide/start/introduction.html",target:"_blank",rel:"noopener noreferrer",children:"Introduction to Rspress"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"After finishing the preparation work, we will build a documentation site for the module project based on Rspress."}),"\n",(0,i.jsxs)(n.h2,{id:"basic-site-structure",children:["Basic site structure",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#basic-site-structure",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"The overall layout of the site consists of three parts: the navigation bar, the sidebar and the body part, which also includes the TOC (Table of contents found at the beginning of a book or document)."}),"\n",(0,i.jsxs)(n.p,{children:["The Rspress uses ",(0,i.jsx)(n.a,{href:"https://rspress.dev/guide/basic/conventional-route.html",target:"_blank",rel:"noopener noreferrer",children:"File System Routing"}),", on which the module documentation is based, to automate the generation of the sidebar.\nFor example, if you have the following file structure:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"docs\n\u251C\u2500\u2500 foo\n\u2502 \u2514\u2500\u2500 bar.md\n\u2502 \u2514\u2500\u2500 index.md\n\u2514\u2500\u2500 foo.md\n\u2514\u2500\u2500 index.md\n\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Then the routing path for ",(0,i.jsx)(n.code,{children:"foo/bar.md"})," will be ",(0,i.jsx)(n.code,{children:"/foo/bar"}),", the routing path for ",(0,i.jsx)(n.code,{children:"foo.md"})," will be ",(0,i.jsx)(n.code,{children:"/foo"}),", and the routing path for ",(0,i.jsx)(n.code,{children:"index.md"})," will be ",(0,i.jsx)(n.code,{children:"/"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"The specific mapping rules are as follows:"}),"\n",(0,i.jsxs)(n.table,{children:["\n",(0,i.jsxs)(n.thead,{children:["\n",(0,i.jsxs)(n.tr,{children:["\n",(0,i.jsx)(n.th,{children:"file-path"}),"\n",(0,i.jsx)(n.th,{children:"routing-path"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.tbody,{children:["\n",(0,i.jsxs)(n.tr,{children:["\n",(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"index.md"})}),"\n",(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"/"})}),"\n"]}),"\n",(0,i.jsxs)(n.tr,{children:["\n",(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"/foo.md"})}),"\n",(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"/foo"})}),"\n"]}),"\n",(0,i.jsxs)(n.tr,{children:["\n",(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"/foo/index.md"})}),"\n",(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"/foo/"})}),"\n"]}),"\n",(0,i.jsxs)(n.tr,{children:["\n",(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"/foo/bar.md"})}),"\n",(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"/foo/bar"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"The sidebars corresponding in turn to the above file paths and routing paths are shown below:"}),"\n",(0,i.jsx)("img",{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/rpauheh7nulwbm/edenx-module/docs-blog/autosidebar.png"}),"\n",(0,i.jsxs)(n.div,{className:"rspress-directive tip",children:[(0,i.jsx)(n.div,{className:"rspress-directive-title",children:"TIP"}),(0,i.jsx)(n.div,{className:"rspress-directive-content",children:(0,i.jsxs)(n.p,{children:["The text in each column of sidebar is determined by the primary title or directory name of the file. If you need to customize the sidebar, please configure ",(0,i.jsx)(n.a,{href:"https://rspress.dev/api/config/config-theme.html#sidebar",target:"_blank",rel:"noopener noreferrer",children:"sidebar"}),"\u3002\n"]})})]}),"\n",(0,i.jsxs)(n.h2,{id:"writing-documentation",children:["Writing Documentation",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#writing-documentation",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"Next, we can focus on writing the content of the document. In addition to the basic Markdown syntax, you may also need to understand the following advanced topics:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://rspress.dev/guide/basic/use-mdx.html",target:"_blank",rel:"noopener noreferrer",children:"Using MDX"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://rspress.dev/guide/basic/static-assets.html",target:"_blank",rel:"noopener noreferrer",children:"Using Assets"})}),"\n"]}),"\n",(0,i.jsxs)(n.h2,{id:"component-preview",children:["Component preview",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#component-preview",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"Module documentation provides preview capabilities for component libraries. The contents in code blocks written in jsx and tsx will be parsed as React components."}),"\n",(0,i.jsxs)(n.h3,{id:"example",children:["Example",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#example",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"Here is a complete example using the component preview feature:"}),"\n",(0,i.jsxs)(n.p,{children:["Assuming our project name is ",(0,i.jsx)(n.code,{children:"demo"})," and we export a Button component."]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Add a new ",(0,i.jsx)(n.code,{children:"docs/Button.mdx"})," file:"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-mdx",meta:'title="Button.mdx"',children:"# Button\n\n## Basic Usage\n\nButtons come in four sizes: small, medium, large\n\n```tsx\nimport React from 'react';\nimport { Button } from 'demo';\n\nexport default () => {\n  return <Button size=\"large\">Click Me</Button>;\n};\n```\n"})}),"\n",(0,i.jsxs)(n.ol,{start:"2",children:["\n",(0,i.jsxs)(n.li,{children:["In the ",(0,i.jsx)(n.code,{children:"tsconfig.json"}),", configure aliases and point the package name to the current project directory, make the way document developers and users use components consistent:"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",meta:'title="tsconfig.json"',children:'{\n  "compilerOptions": {\n    "paths": {\n      "demo": ["."]\n    }\n  }\n}\n'})}),"\n",(0,i.jsxs)(n.ol,{start:"3",children:["\n",(0,i.jsxs)(n.li,{children:["In the ",(0,i.jsx)(n.code,{children:".gitignore"}),", add ",(0,i.jsx)(n.code,{children:"docs_build/"}),":"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",meta:'title=".gitignore"',children:"docs_build/\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Congratulations, you have finished writing a component document, execute ",(0,i.jsx)(n.code,{children:"pnpm run dev"})," to see the result, remember to build the component library first to make sure the component product exists."]}),"\n",(0,i.jsxs)(n.h3,{id:"mobile-preview",children:["Mobile Preview",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#mobile-preview",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["Also, we support mobile preview mode, i.e. rendering mobile components using iframe, and set iframe position by ",(0,i.jsx)(n.code,{children:"iframePosition"}),",\nsupport swipe preview and new page opening."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import { moduleTools, defineConfig } from '@modern-js/module-tools'.\nimport { modulePluginDoc } from '@modern-js/plugin-rspress'.\n\nexport default defineConfig({\n  plugins: [\n    moduleTools(),\n    modulePluginDoc({\n      /**\n       * Select the preview method\n       * @default web\n       */\n      previewMode: 'mobile',\n      /**\n       * Select iframe position\n       * @default 'follow'\n       */\n      iframePosition: 'fixed',\n    }),\n  ],\n});\n"})}),"\n",(0,i.jsxs)(n.div,{className:"rspress-directive tip",children:[(0,i.jsx)(n.div,{className:"rspress-directive-title",children:"TIP"}),(0,i.jsxs)(n.div,{className:"rspress-directive-content",children:[(0,i.jsxs)(n.p,{children:["If you only want to change the way a particular ",(0,i.jsx)(n.code,{children:"jsx"})," and ",(0,i.jsx)(n.code,{children:"tsx"})," block is previewed, you can use a different modifier to identify it:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-mdx",children:"```jsx pure\n// The content here will not be rendered\n```\n\n```jsx web\n// Used to render desktop components\n```\n\n```jsx mobile\n// Used to render mobile components\n```\n"})}),"\n"]})]}),"\n",(0,i.jsxs)(n.h3,{id:"using-external-demos",children:["Using external demos",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#using-external-demos",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["If our demo is very complex, then it is recommended to write the demo separately and then use the ",(0,i.jsx)(n.code,{children:"code"})," tag in the mdx:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-mdx",children:'<code src="/path/demo.tsx"></code>\n'})}),"\n",(0,i.jsxs)(n.h2,{id:"using-built-in-components",children:["Using built-in components",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#using-built-in-components",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"The plugin implements some built-in components internally so that you can develop module documentation more easily."}),"\n",(0,i.jsxs)(n.h3,{id:"api",children:["API",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#api",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"Display the API content of the module."}),"\n",(0,i.jsxs)(n.h4,{id:"parse-file",children:["Parse file",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#parse-file",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"Before we can use the API component, we first need to specify the files to parse:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import { moduleTools, defineConfig } from '@modern-js/module-tools';\nimport { modulePluginDoc } from '@modern-js/plugin-rspress';\n\nexport default defineConfig({\n  plugins: [\n    moduleTools(),\n    modulePluginDoc({\n      entries: {\n        Button: './src/button.tsx',\n      },\n      apiParseTool: 'react-docgen-typescript',\n    }),\n  ],\n});\n"})}),"\n",(0,i.jsxs)(n.h4,{id:"content-generation",children:["Content generation",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#content-generation",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"Next, we'll see what kind of markdown content is generated based on the parsed file."}),"\n",(0,i.jsxs)(n.p,{children:["Content can be generated with two different tools, ",(0,i.jsx)(n.a,{href:"https://github.com/styleguidist/react-docgen-typescript",target:"_blank",rel:"noopener noreferrer",children:"react-docgen-typescript"})," or ",(0,i.jsx)(n.a,{href:"https://github.com/documentationjs/documentation",target:"_blank",rel:"noopener noreferrer",children:"documentation"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"react-docgen-typescript"})," is targeted at component library scenarios and will only parse props to generate tables."]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:"export type ButtonProps = {\n  /**\n   * Whether to disable the button\n   */\n  disabled?: boolean;\n  /* * Whether to disable the button */ disabled?\n   * Type of Button\n   * @default 'default'\n   */\n  size?: 'mini' | 'small' | 'default' | 'large';\n}.\nexport const Button = (props?: ButtonProps) => {};\n"})}),"\n",(0,i.jsxs)(n.p,{children:["The above is a standard writeup where ",(0,i.jsx)(n.code,{children:"ButtonProps"})," will be extracted into the table and ",(0,i.jsx)(n.code,{children:"Button"})," will be the title of the table.\nIf you use the default export, the filename will be used as the form title. The generated content is as follows:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-mdx",children:'### ButtonTest\n\n| property |          description          |                   type                   |   default   |\n| :------: | :---------------------------: | :--------------------------------------: | :---------: |\n| disabled | Whether to disable the button |                `boolean`                 |     `-`     |\n|   size   |        Type of Button         | `"mini" \\|"small" \\|"default" \\|"large"` | `\'default\'` |\n'})}),"\n",(0,i.jsxs)(n.div,{className:"rspress-directive warning",children:[(0,i.jsx)(n.div,{className:"rspress-directive-title",children:"WARNING"}),(0,i.jsxs)(n.div,{className:"rspress-directive-content",children:[(0,i.jsx)(n.p,{children:"If React types are used in Props, you need to add the types in tsconfig.json, otherwise the types will not be resolved under the React namespace."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "compilerOptions": {\n    "types": ["react"],\n  },\n}\n'})}),"\n"]})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"documentation"})," is used in tool library scenarios to parse JSDoc annotations."]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"/**\n * Greet function that returns a greeting message.\n * @param {string} name - The name of the person to greet.\n * @param {string} [greeting='Hello'] - The greeting to use.\n * @returns {string} The greeting message.\n */\nfunction greet(name: string, greeting = 'Hello') {\n  return `${greeting}, ${name}! `;\n}\n"})}),"\n",(0,i.jsx)(n.p,{children:"The above is a greet function with a JSDoc annotation. The generated content is as follows:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-md",children:"<! -- Generated by documentation.js. Update this documentation by updating the source code. -->\n\n## greet\n\nGreet function that returns a greeting message.\n\n### Parameters\n\n- `name` **[string][1]** The name of the person to greet.\n- `greeting` **[string][1]** The greeting to use. (optional, default `'Hello'`)\n\nReturns **[string][1]** The greeting message.\n\n[1]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String\n"})}),"\n",(0,i.jsxs)(n.h4,{id:"using-the-component",children:["Using the component",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#using-the-component",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["Next, you can use our built-in API components in your documentation by passing the ",(0,i.jsx)(n.code,{children:"key"})," value into the ",(0,i.jsx)(n.code,{children:"moduleName"})," property\u3002"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-mdx",meta:'title="Button.mdx"',children:'# Button\n\n## API\n\n<API moduleName="Button" />\n'})}),"\n",(0,i.jsxs)(n.h3,{id:"overview",children:["Overview",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#overview",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"Displays a list of modules that can be placed on the front page to display all modules."}),"\n",(0,i.jsx)(n.p,{children:"The Overview component has only one list property, which receives an array of objects, and the following properties of the objects"}),"\n",(0,i.jsxs)(n.table,{children:["\n",(0,i.jsxs)(n.thead,{children:["\n",(0,i.jsxs)(n.tr,{children:["\n",(0,i.jsx)(n.th,{align:"center",children:"property"}),"\n",(0,i.jsx)(n.th,{align:"center",children:"description"}),"\n",(0,i.jsx)(n.th,{align:"center",children:"type"}),"\n",(0,i.jsx)(n.th,{align:"center",children:"default"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.tbody,{children:["\n",(0,i.jsxs)(n.tr,{children:["\n",(0,i.jsx)(n.td,{align:"center",children:"icon"}),"\n",(0,i.jsx)(n.td,{align:"center",children:"icon"}),"\n",(0,i.jsx)(n.td,{align:"center",children:"React.ReactNode"}),"\n",(0,i.jsx)(n.td,{align:"center"}),"\n"]}),"\n",(0,i.jsxs)(n.tr,{children:["\n",(0,i.jsx)(n.td,{align:"center",children:"text"}),"\n",(0,i.jsxs)(n.td,{align:"center",children:["text(",(0,i.jsx)(n.strong,{children:"required"}),")"]}),"\n",(0,i.jsx)(n.td,{align:"center",children:"string"}),"\n",(0,i.jsx)(n.td,{align:"center"}),"\n"]}),"\n",(0,i.jsxs)(n.tr,{children:["\n",(0,i.jsx)(n.td,{align:"center",children:"link"}),"\n",(0,i.jsxs)(n.td,{align:"center",children:["link(",(0,i.jsx)(n.strong,{children:"required"}),")"]}),"\n",(0,i.jsx)(n.td,{align:"center",children:"string"}),"\n",(0,i.jsx)(n.td,{align:"center"}),"\n"]}),"\n",(0,i.jsxs)(n.tr,{children:["\n",(0,i.jsx)(n.td,{align:"center",children:"arrow"}),"\n",(0,i.jsx)(n.td,{align:"center",children:"whether to show arrows"}),"\n",(0,i.jsx)(n.td,{align:"center",children:"boolean"}),"\n",(0,i.jsx)(n.td,{align:"center",children:(0,i.jsx)(n.code,{children:"false"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.h2,{id:"plugin-options",children:["Plugin options",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#plugin-options",children:"#"})]}),"\n",(0,i.jsxs)(n.h3,{id:"apiparsetool",children:["apiParseTool",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#apiparsetool",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"API parse tool."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Type:",(0,i.jsx)(n.code,{children:"'react-docgen-typescript' | 'documentation'"})]}),"\n",(0,i.jsxs)(n.li,{children:["Default: ",(0,i.jsx)(n.code,{children:"'react-docgen-typescript'"})]}),"\n"]}),"\n",(0,i.jsxs)(n.h3,{id:"parsetooloptions",children:["parseToolOptions",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#parsetooloptions",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"API parse tool options."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Type:",(0,i.jsx)(n.code,{children:"ParseToolOptions"})]}),"\n",(0,i.jsxs)(n.li,{children:["Default: ",(0,i.jsx)(n.code,{children:"{}"})]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"type ParseToolOptions = {\n  // https://github.com/styleguidist/react-docgen-typescript#options\n  'react-docgen-typescript'?: ParserOptions;\n  // https://github.com/documentationjs/documentation/blob/master/docs/NODE_API.md#parameters-1\n  documentation?: DocumentationArgs;\n};\n"})}),"\n",(0,i.jsxs)(n.h3,{id:"entries",children:["entries",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#entries",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"Module names and relative paths for automatically generated documents."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Type:",(0,i.jsx)(n.code,{children:"Entries | ToolEntries"})]}),"\n",(0,i.jsxs)(n.li,{children:["Default: ",(0,i.jsx)(n.code,{children:"{}"})]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"type Entries = Record<string, string>;\ntype ToolEntries = {\n  documentation: Entries;\n  'react-docgen-typescript': Entries;\n};\n"})}),"\n",(0,i.jsx)(n.p,{children:"It also supports the use of different parsing tools for different files:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import { moduleTools, defineConfig } from '@modern-js/module-tools';\nimport { modulePluginDoc } from '@modern-js/plugin-rspress';\n\nexport default defineConfig({\n  plugins: [\n    moduleTools(),\n    modulePluginDoc({\n      entries: {\n        documentation: {\n          Add: './src/utils/add.ts',\n        },\n        'react-docgen-typescript': {\n          Button: './src/components/button.tsx',\n        },\n      },\n    }),\n  ],\n});\n"})}),"\n",(0,i.jsxs)(n.h3,{id:"usemodulesidebar",children:["useModuleSidebar",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#usemodulesidebar",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["If you want to use",(0,i.jsx)(n.a,{href:"https://rspress.dev/guide/basic/auto-nav-sidebar.html",target:"_blank",rel:"noopener noreferrer",children:"_meta.json"})," to automate sidebar\uFF0Cyou should set it ",(0,i.jsx)(n.code,{children:"false"}),"."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Type:",(0,i.jsx)(n.code,{children:"boolean"})]}),"\n",(0,i.jsxs)(n.li,{children:["Default: ",(0,i.jsx)(n.code,{children:"true"})]}),"\n"]}),"\n",(0,i.jsxs)(n.h3,{id:"previewmode",children:["previewMode",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#previewmode",children:"#"})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Type:",(0,i.jsx)(n.code,{children:"'mobile' | 'web'"})]}),"\n",(0,i.jsxs)(n.li,{children:["Default: ",(0,i.jsx)(n.code,{children:"'web'"})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["In case of ",(0,i.jsx)(n.code,{children:"web"}),", the component will be rendered directly in the page, otherwise it will be loaded through an iframe."]}),"\n",(0,i.jsxs)(n.h3,{id:"iframeposition",children:["iframePosition",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#iframeposition",children:"#"})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\u7C7B\u578B\uFF1A",(0,i.jsx)(n.code,{children:"'follow' | 'fixed'"})]}),"\n",(0,i.jsxs)(n.li,{children:["\u9ED8\u8BA4\u503C: ",(0,i.jsx)(n.code,{children:"'follow'"})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["When the value is ",(0,i.jsx)(n.code,{children:"follow"}),", each code block will have an iframe showing its rendered view.\nWhen ",(0,i.jsx)(n.code,{children:"fixed"}),", the iframe will be fixed to the right side of the page, showing the view of all the code blocks on the current page."]}),"\n",(0,i.jsxs)(n.h3,{id:"doc",children:["doc",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#doc",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://rspress.dev/api/index.html",target:"_blank",rel:"noopener noreferrer",children:"Config"}),"."]}),"\n",(0,i.jsxs)(n.h2,{id:"advanced-guide",children:["Advanced guide",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#advanced-guide",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["The above has covered the basics of developing module documentation, but this is not enough for developing a complete documentation station. Check out the ",(0,i.jsx)(n.a,{href:"https://rspress.dev",target:"_blank",rel:"noopener noreferrer",children:"Rspress"})," for an in-depth look at our documentation framework.\nYou can modify the documentation framework configuration via the ",(0,i.jsx)(n.code,{children:"doc"})," configuration."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import { moduleTools, defineConfig } from '@modern-js/module-tools'.\nimport { modulePluginDoc } from '@modern-js/plugin-rspress'.\n\nexport default defineConfig({\n  plugins: [\n    moduleTools(),\n    modulePluginDoc({\n      doc: {\n        // Customize the documentation site configuration\n      }\n    }),\n  ],\n});\n"})}),"\n","\n",(0,i.jsx)(s.default,{})]})}function d(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,r.useMDXComponents)(),e.components);return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}var a=d;d.__RSPRESS_PAGE_META={},d.__RSPRESS_PAGE_META["en%2Fguide%2Fbasic%2Fuse-module-doc.mdx"]={toc:[{text:"Before we start",id:"before-we-start",depth:2},{text:"Why we need to build a documentation site for a module",id:"why-we-need-to-build-a-documentation-site-for-a-module",depth:3},{text:"Preliminary preparation",id:"preliminary-preparation",depth:3},{text:"Basic site structure",id:"basic-site-structure",depth:2},{text:"Writing Documentation",id:"writing-documentation",depth:2},{text:"Component preview",id:"component-preview",depth:2},{text:"Example",id:"example",depth:3},{text:"Mobile Preview",id:"mobile-preview",depth:3},{text:"Using external demos",id:"using-external-demos",depth:3},{text:"Using built-in components",id:"using-built-in-components",depth:2},{text:"API",id:"api",depth:3},{text:"Parse file",id:"parse-file",depth:4},{text:"Content generation",id:"content-generation",depth:4},{text:"Using the component",id:"using-the-component",depth:4},{text:"Overview",id:"overview",depth:3},{text:"Plugin options",id:"plugin-options",depth:2},{text:"apiParseTool",id:"apiparsetool",depth:3},{text:"parseToolOptions",id:"parsetooloptions",depth:3},{text:"entries",id:"entries",depth:3},{text:"useModuleSidebar",id:"usemodulesidebar",depth:3},{text:"previewMode",id:"previewmode",depth:3},{text:"iframePosition",id:"iframeposition",depth:3},{text:"doc",id:"doc",depth:3},{text:"Advanced guide",id:"advanced-guide",depth:2}],title:"Developing Module documentation",frontmatter:{sidebar_position:5}}}}]);