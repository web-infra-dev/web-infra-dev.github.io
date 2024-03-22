/*! For license information please see 5696.ff8f230e.js.LICENSE.txt */
(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["5696"],{75851:function(e,n,r){"use strict";r.r(n);var t=r("39980"),s=r("96954");function a(e){let n=Object.assign({h1:"h1",a:"a",p:"p",code:"code",h2:"h2",h3:"h3",strong:"strong",pre:"pre",div:"div"},(0,s.useMDXComponents)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.h1,{id:"usage",children:["Usage",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#usage",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:["Modern.js provides ",(0,t.jsx)(n.code,{children:"@modern-js/create"})," tool for creating project templates provided by Modern.js, including ",(0,t.jsx)(n.a,{href:"https://modernjs.dev/",target:"_blank",rel:"noopener noreferrer",children:"Web App"}),", ",(0,t.jsx)(n.a,{href:"https://modernjs.dev/module-tools",target:"_blank",rel:"noopener noreferrer",children:"Npm Module"}),", ",(0,t.jsx)(n.a,{href:"/guides/topic-detail/monorepo/intro",children:"Monorepo"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["The following will introduce how to use ",(0,t.jsx)(n.code,{children:"@modern-js/create"}),"."]}),"\n",(0,t.jsxs)(n.h2,{id:"environment-preparation",children:["Environment Preparation",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#environment-preparation",children:"#"})]}),"\n",(0,t.jsxs)(n.h3,{id:"nodejs",children:["Node.js",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#nodejs",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:["Before getting started, you will need to install ",(0,t.jsx)(n.a,{href:"https://nodejs.org/",target:"_blank",rel:"noopener noreferrer",children:"Node.js"}),", and ensure that your Node.js version is higher than 14.17.6. ",(0,t.jsx)(n.strong,{children:"We recommend using the LTS version of Node.js 18."})]}),"\n",(0,t.jsx)(n.p,{children:"You can check the currently used Node.js version with the following command:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"node -v\n"})}),"\n",(0,t.jsxs)(n.p,{children:["If you do not have Node.js installed in your current environment, or the installed version is lower than 14.17.6, you can use ",(0,t.jsx)(n.a,{href:"https://github.com/nvm-sh/nvm",target:"_blank",rel:"noopener noreferrer",children:"nvm"})," or ",(0,t.jsx)(n.a,{href:"https://github.com/Schniz/fnm",target:"_blank",rel:"noopener noreferrer",children:"fnm"})," to install the required version."]}),"\n",(0,t.jsx)(n.p,{children:"Here is an example of how to install the Node.js 18 LTS version via nvm:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"# Install the long-term support version of Node.js 18\nnvm install 18 --lts\n\n# Make the newly installed Node.js 18 as the default version\nnvm alias default 18\n\n# Switch to the newly installed Node.js 18\nnvm use 18\n"})}),"\n",(0,t.jsxs)(n.div,{className:"rspress-directive tip",children:[(0,t.jsx)(n.div,{className:"rspress-directive-title",children:"nvm and fnm"}),(0,t.jsx)(n.div,{className:"rspress-directive-content",children:(0,t.jsx)(n.p,{children:"Both nvm and fnm are Node.js version management tools. Relatively speaking, nvm is more mature and stable, while fnm is implemented using Rust, which provides better performance than nvm."})})]}),"\n",(0,t.jsxs)(n.h3,{id:"pnpm",children:["pnpm",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#pnpm",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:["It is recommended to use ",(0,t.jsx)(n.a,{href:"https://pnpm.io/installation",target:"_blank",rel:"noopener noreferrer",children:"pnpm"})," to manage dependencies:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"npm install -g pnpm@8\n"})}),"\n",(0,t.jsxs)(n.div,{className:"rspress-directive note",children:[(0,t.jsx)(n.div,{className:"rspress-directive-title",children:"NOTE"}),(0,t.jsxs)(n.div,{className:"rspress-directive-content",children:[(0,t.jsxs)(n.p,{children:["Modern.js also supports dependency management with ",(0,t.jsx)(n.code,{children:"yarn"})," and ",(0,t.jsx)(n.code,{children:"npm"}),"."]}),"\n"]})]}),"\n",(0,t.jsxs)(n.h2,{id:"create-a-project-with-modern-jscreate",children:["Create a Project with ",(0,t.jsx)(n.code,{children:"@modern-js/create"}),(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#create-a-project-with-modern-jscreate",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:["You do not need to install ",(0,t.jsx)(n.code,{children:"@modern-js/create"})," globally, just use npx to run it:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"npx @modern-js/create@latest [projectDir]\n"})}),"\n",(0,t.jsxs)(n.div,{className:"rspress-directive info",children:[(0,t.jsx)(n.div,{className:"rspress-directive-title",children:"INFO"}),(0,t.jsx)(n.div,{className:"rspress-directive-content",children:(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"[projectDir]"})," is the project directory name. If it is not filled in, the project will be created in the current directory.\n"]})})]}),"\n",(0,t.jsx)(n.p,{children:"During the execution, complete the interaction according to the prompt to create a project that meets your requirements."}),"\n",(0,t.jsxs)(n.h3,{id:"create-an-web-app-project",children:["Create an Web APP Project",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#create-an-web-app-project",children:"#"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"npx @modern-js/create@latest web-app\n? Please select the type of project you want to create: Web App\n? Please select the programming language: TS\n? Please select the package manager: pnpm\n? Please select the bundler: webpack\n"})}),"\n",(0,t.jsxs)(n.h3,{id:"create-an-npm-module-project",children:["Create an Npm Module Project",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#create-an-npm-module-project",children:"#"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"npx @modern-js/create@latest npm-module\n? Please select the type of project you want to create: Npm Module\n? Please fill in the project name: npm-module\n? Please select the programming language: TS\n? Please select the package manager: pnpm\n"})}),"\n",(0,t.jsxs)(n.h3,{id:"create-monorepo-project",children:["Create Monorepo Project",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#create-monorepo-project",children:"#"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"npx @modern-js/create@latest monorepo\n? Please select the type of project you want to create: Monorepo\n? Please select the package manager: pnpm\n"})})]})}function o(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,s.useMDXComponents)(),e.components);return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}n.default=o,o.__RSPRESS_PAGE_META={},o.__RSPRESS_PAGE_META["en%2Fguides%2Ftopic-detail%2Fgenerator%2Fcreate%2Fuse.mdx"]={toc:[{text:"Environment Preparation",id:"environment-preparation",depth:2},{text:"Node.js",id:"nodejs",depth:3},{text:"pnpm",id:"pnpm",depth:3},{text:"Create a Project with `@modern-js/create`",id:"create-a-project-with-modern-jscreate",depth:2},{text:"Create an Web APP Project",id:"create-an-web-app-project",depth:3},{text:"Create an Npm Module Project",id:"create-an-npm-module-project",depth:3},{text:"Create Monorepo Project",id:"create-monorepo-project",depth:3}],title:"Usage",frontmatter:{sidebar_position:1}}}}]);