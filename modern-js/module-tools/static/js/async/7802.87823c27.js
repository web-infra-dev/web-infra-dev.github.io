/*! For license information please see 7802.87823c27.js.LICENSE.txt */
(self.webpackChunk_modern_js_module_tools_docs=self.webpackChunk_modern_js_module_tools_docs||[]).push([["7802"],{4914:function(e,n,s){"use strict";s.r(n);var i=s("39980"),d=s("96954"),r=s("92919");function o(e){let n=Object.assign({h1:"h1",a:"a",h2:"h2",p:"p",strong:"strong",h3:"h3",pre:"pre",code:"code",div:"div",blockquote:"blockquote",ul:"ul",li:"li"},(0,d.useMDXComponents)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.h1,{id:"quick-start",children:["Quick Start",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#quick-start",children:"#"})]}),"\n",(0,i.jsxs)(n.h2,{id:"3-minute-demo",children:["3 minute demo",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#3-minute-demo",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["Want to experience Modern.js Module in action? The only prerequisite you need is ",(0,i.jsx)(n.a,{href:"https://github.com/nodejs/Release",target:"_blank",rel:"noopener noreferrer",children:"Node.js LTS"})," and make sure your Node version is ",(0,i.jsx)(n.strong,{children:">= 16.0.0"}),".We recommend using the LTS version of Node.js 18."]}),"\n",(0,i.jsxs)(n.h3,{id:"create-new-project",children:["Create new project",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#create-new-project",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"If you want to create a complete Modern.js Module, you can execute the following command:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"npx @modern-js/create your-project-dir-name\n"})}),"\n",(0,i.jsxs)(n.div,{className:"rspress-directive info",children:[(0,i.jsx)(n.div,{className:"rspress-directive-title",children:"INFO"}),(0,i.jsx)(n.div,{className:"rspress-directive-content",children:(0,i.jsxs)(n.p,{children:["Execute ",(0,i.jsx)(n.code,{children:"npx @modern-js/create -h"})," for more command line arguments\n"]})})]}),"\n",(0,i.jsx)(n.p,{children:"Next, in the issue interaction, follow the options below."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"? Please select the type of project you want to create: Npm Module\n? Please fill in the project name: library\n? Please select the programming language: TS\n? Please select the package manager: pnpm\n"})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["The project name is the value of the ",(0,i.jsx)(n.code,{children:'"name"'})," field in ",(0,i.jsx)(n.code,{children:"package.json"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Then the process of initializing the project will start. After the project directory and files are generated and the dependencies are installed, a complete module project is created."}),"\n",(0,i.jsxs)(n.p,{children:["We can start the project build directly with the ",(0,i.jsx)(n.code,{children:"pnpm build"})," command, and start the build in watching mode with the ",(0,i.jsx)(n.code,{children:"pnpm build --watch"})," command."]}),"\n",(0,i.jsxs)(n.h3,{id:"add-to-an-existing-project",children:["Add to an existing project",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#add-to-an-existing-project",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"From your shell, install the following dependencies in your project."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"@modern-js/module-tools"})}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:'"typescript"'})," (omitted if not a TypeScript project)"]}),"\n"]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["If it's a TypeScript project, add the ",(0,i.jsx)(n.code,{children:'"typescript"'})," dependency."]}),"\n"]}),"\n","\n",(0,i.jsx)(r.PackageManagerTabs,{command:"add @modern-js/module-tools typescript -D"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["For projects that use pnpm or the Yarn package manager, just replace npm. ",(0,i.jsx)(n.strong,{children:"pnpm is recommended"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Next, create the ",(0,i.jsx)(n.code,{children:"modern.config.(t|j)s"})," file in the root of the project."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"import { moduleTools, defineConfig } from '@modern-js/module-tools';\n\nexport default defineConfig({\n  plugins: [moduleTools()],\n});\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Finally, add the command ",(0,i.jsx)(n.code,{children:'"build": "modern build"'})," to the project's ",(0,i.jsx)(n.code,{children:"package.json"})," file."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "scripts": {\n    "build": "modern build"\n  }\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["If your project has a ",(0,i.jsx)(n.code,{children:"src/index.(js|jsx)"})," file or both ",(0,i.jsx)(n.code,{children:"src/index.(ts|tsx)"})," and ",(0,i.jsx)(n.code,{children:"tsconfig.json"})," files, then congratulations you can run the ",(0,i.jsx)(n.code,{children:"npm run build"})," command directly to build your project with Modern.js Module."]}),"\n",(0,i.jsxs)(n.h3,{id:"core-npm-package",children:["Core npm Package",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#core-npm-package",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"@modern-js/module-tools"})," is the core npm package of Modern.js Module, providing the following capabilities:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["It offers commonly used CLI commands such as ",(0,i.jsx)(n.code,{children:"modern dev"}),", ",(0,i.jsx)(n.code,{children:"modern build"}),", and more."]}),"\n",(0,i.jsx)(n.li,{children:"It integrates Modern.js Core, providing capabilities for configuration parsing, plugin loading, and more."}),"\n",(0,i.jsx)(n.li,{children:"It integrates esbuild and SWC, providing build capabilities."}),"\n",(0,i.jsxs)(n.li,{children:["It integrates some commonly used plugins, such as ",(0,i.jsx)(n.code,{children:"plugin-lint"}),", ",(0,i.jsx)(n.code,{children:"plugin-changeset"}),", and others."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"@modern-js/module-tools"})," is implemented based on the plugin system of Modern.js. Essentially, it is a plugin. Therefore, you need to register ",(0,i.jsx)(n.code,{children:"moduleTools"})," in the ",(0,i.jsx)(n.code,{children:"plugins"})," field of the configuration file:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import { moduleTools, defineConfig } from '@modern-js/module-tools';\n\nexport default defineConfig({\n  plugins: [moduleTools()],\n});\n"})}),"\n",(0,i.jsxs)(n.h3,{id:"view-official-example",children:["View official example",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#view-official-example",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"If you want to see the complete project using the Modern.js Module, you can execute the following command"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"git clone https://github.com/web-infra-dev/modern-js-examples\ncd modern-js-examples/examples/basic-module\n\n## Execute the build.\npnpm build\n\n## Execute the build in listening mode.\npnpm build --watch\n"})}),"\n",(0,i.jsxs)(n.h2,{id:"lets-get-started",children:["Let\\'s get started",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#lets-get-started",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"Choose your tutorial scenario..."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["I'm a beginner and need to learn ",(0,i.jsx)(n.a,{href:"/en/guide/basic/before-getting-started",children:"basic usage"})," of Modern.js Module."]}),"\n",(0,i.jsxs)(n.li,{children:["I have learned the basic usage of Modern.js Module and can learn ",(0,i.jsx)(n.a,{href:"/en/guide/advance/in-depth-about-build",children:"advanced usage"})," of Modern.js Module."]}),"\n",(0,i.jsxs)(n.li,{children:["I need to expand my project capabilities and need to learn how to develop ",(0,i.jsx)(n.a,{href:"/en/plugins/guide/getting-started",children:"plugins"})," for Modern.js Module."]}),"\n"]})]})}function t(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,d.useMDXComponents)(),e.components);return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}n.default=t,t.__RSPRESS_PAGE_META={},t.__RSPRESS_PAGE_META["en%2Fguide%2Fintro%2Fgetting-started.mdx"]={toc:[{text:"3 minute demo",id:"3-minute-demo",depth:2},{text:"Create new project",id:"create-new-project",depth:3},{text:"Add to an existing project",id:"add-to-an-existing-project",depth:3},{text:"Core npm Package",id:"core-npm-package",depth:3},{text:"View official example",id:"view-official-example",depth:3},{text:"Let\\'s get started",id:"lets-get-started",depth:2}],title:"Quick Start",frontmatter:{sidebar_position:3}}}}]);