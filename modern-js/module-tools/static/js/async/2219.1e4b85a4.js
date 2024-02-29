/*! For license information please see 2219.1e4b85a4.js.LICENSE.txt */
(self.webpackChunk_modern_js_module_tools_docs=self.webpackChunk_modern_js_module_tools_docs||[]).push([["2219"],{88618:function(e,n,r){"use strict";r.r(n);var i=r("39980"),s=r("96954");function t(e){let n=Object.assign({h1:"h1",a:"a",h2:"h2",p:"p",strong:"strong",code:"code",em:"em",pre:"pre",ul:"ul",li:"li",blockquote:"blockquote",div:"div",h3:"h3",h4:"h4"},(0,s.useMDXComponents)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.h1,{id:"before-you-start",children:["Before you start",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#before-you-start",children:"#"})]}),"\n",(0,i.jsxs)(n.h2,{id:"environment-preparation",children:["Environment preparation",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#environment-preparation",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["In order to use the Modern.js Module, you first need ",(0,i.jsx)(n.a,{href:"https://nodejs.org/zh/",target:"_blank",rel:"noopener noreferrer",children:"NodeJS"})," engine, we recommend the latest ",(0,i.jsx)(n.a,{href:"https://github.com/nodejs/Release",target:"_blank",rel:"noopener noreferrer",children:"LTS version"}),", and make sure the Node version is ",(0,i.jsx)(n.strong,{children:">=16.0.0"}),". because non-stable NodeJS releases frequently have bugs. You might consider installing via ",(0,i.jsx)(n.a,{href:"https://github.com/coreybutler/nvm-windows",target:"_blank",rel:"noopener noreferrer",children:"nvm-windows"})," and ",(0,i.jsx)(n.a,{href:"https://github.com/nvm-sh/nvm",target:"_blank",rel:"noopener noreferrer",children:"nvm"})," (Mac / Linux), so you can easily switch to different NodeJS versions that might be required for different projects that you work on."]}),"\n",(0,i.jsxs)(n.h2,{id:"getting-started-with-npm",children:["Getting Started with npm",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#getting-started-with-npm",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["Once NodeJS is installed, not only can you access the ",(0,i.jsx)(n.code,{children:"node"})," executable from the command line, but you can also execute the ",(0,i.jsx)(n.code,{children:"npm"})," command."]}),"\n",(0,i.jsx)(n.p,{children:"Npm is the standard package manager for NodeJS. It started out as a tool for downloading and managing NodeJS package dependencies, but it has since evolved into a tool for front-end JavaScript."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsxs)(n.strong,{children:["If you already know something about usage of npm and npm packages, then you can directly see ",(0,i.jsx)(n.a,{href:"/en/guide/basic/before-getting-started#npm-package-manager",children:"npm package manager"})," section."]})}),"\n",(0,i.jsxs)(n.h2,{id:"npm-package-type-project",children:["npm package type project",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#npm-package-type-project",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["So what is an npm package type project? When we execute the ",(0,i.jsx)(n.code,{children:"npm init"})," command in an empty project directory, it creates a JSON file with the file name ",(0,i.jsx)(n.code,{children:"package.json"})," under the current directory. During the creation process, we will need to fill in information including but not limited to the ",(0,i.jsx)(n.em,{children:"name"}),", ",(0,i.jsx)(n.em,{children:"version"})," ",(0,i.jsx)(n.em,{children:"number"}),", ",(0,i.jsx)(n.em,{children:"description"}),", etc. of the npm package, which will be found in the resulting ",(0,i.jsx)(n.code,{children:"package.json"})," file as follows"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "name": "npm-demo",\n  "version": "1.0.0",\n  "description": "",\n  "main": "index.js",\n  "scripts": {\n    "test": "echo \\"Error: no test specified\\" && exit 1"\n  },\n  "author": "",\n  "license": "ISC"\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["At this point the project containing the initialized ",(0,i.jsx)(n.code,{children:"package.json"})," file is an npm package type project, and you can execute the ",(0,i.jsx)(n.code,{children:"npm publish"})," command to publish the project to the ",(0,i.jsx)(n.a,{href:"https://www.npmjs.com/",target:"_blank",rel:"noopener noreferrer",children:"npm Registry"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["The npm Registry is a ",(0,i.jsx)(n.a,{href:"https://docs.npmjs.com/about-the-public-npm-registry",target:"_blank",rel:"noopener noreferrer",children:"npm package store"})," where developers can not only publish their own npm packages to the npm Registry, but also use npm packages published by other developers through the npm Registry."]}),"\n",(0,i.jsx)(n.p,{children:"A quality npm package will be used by more people because it not only saves a lot of code implementation work, but is also less likely to cause problems with the project."}),"\n",(0,i.jsxs)(n.h2,{id:"using-third-party-npm-packages",children:["Using third-party npm packages",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#using-third-party-npm-packages",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:['When adding a third-party npm package to an initial project, we can call this process "installing dependencies for the project" or "adding dependencies to the project". Before adding dependencies, we need to know one thing in particular -- ',(0,i.jsx)(n.strong,{children:"the types of packages npm depends on"}),"."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:'"dependencies"'}),": a type of package that your application will need in a production environment."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:'"devDependencies"'}),": another type of package that is only needed for local development and testing.","\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"packages can be understood as third-party npm packages."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["You can install the packages you need in a ",(0,i.jsx)(n.strong,{children:"production environment"})," by running ",(0,i.jsx)(n.code,{children:"npm install npm-package-name"})," or ",(0,i.jsx)(n.code,{children:"npm add npm-package-name"}),", or you can manually write the packages you need to install and the corresponding ",(0,i.jsx)(n.a,{href:"https://docs.npmjs.com/about-semantic-versioning",target:"_blank",rel:"noopener noreferrer",children:"semantic version"})," in ",(0,i.jsx)(n.code,{children:'"dependencies"'})," in the ",(0,i.jsx)(n.code,{children:"package.json"})," file, and run the ",(0,i.jsx)(n.code,{children:"npm install"})," command to."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "name": "your-npm-project",\n  "dependencies": {\n    "npm-package-name": "0.1.0"\n  }\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Similarly, you can install ",(0,i.jsx)(n.strong,{children:"only packages needed for local development and testing"})," by running ",(0,i.jsx)(n.code,{children:"npm install npm-package-name --save-dev"})," or ",(0,i.jsx)(n.code,{children:"npm add npm-package-name --save-dev"}),", or you can manually write the packages to be installed and the corresponding ",(0,i.jsx)(n.a,{href:"https://docs.npmjs.com/about-semantic-versioning",target:"_blank",rel:"noopener noreferrer",children:"semantic version"})," in ",(0,i.jsx)(n.code,{children:'"devDependencies"'})," in the ",(0,i.jsx)(n.code,{children:"package.json"})," file, and run the ",(0,i.jsx)(n.code,{children:"npm install"})," command as follows"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "name": "your-npm-project",\n  "devDependencies": {\n    "npm-package-name": "0.1.0"\n  }\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsxs)(n.strong,{children:["When installing or using third-party npm packages be sure to determine what they are for and whether they should be placed in ",(0,i.jsx)(n.code,{children:'"dependencies"'})," or ",(0,i.jsx)(n.code,{children:'"devDependencies"'})," by distinguishing between their types."]})}),"\n",(0,i.jsxs)(n.div,{className:"rspress-directive tip",children:[(0,i.jsx)(n.div,{className:"rspress-directive-title",children:"TIP"}),(0,i.jsx)(n.div,{className:"rspress-directive-content",children:(0,i.jsxs)(n.p,{children:["In general, packages that need to be used in source code are ",(0,i.jsx)(n.code,{children:"dependencies"})," dependencies. Unless you are exporting dependent code locally via packaging, in which case it can be treated as a ",(0,i.jsx)(n.code,{children:"devDependencies"})," dependency.\n"]})})]}),"\n",(0,i.jsxs)(n.h2,{id:"other-npm-bits-and-pieces-to-know",children:["Other npm bits and pieces to know",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#other-npm-bits-and-pieces-to-know",children:"#"})]}),"\n",(0,i.jsxs)(n.h3,{id:"program-entry-for-npm-packages",children:["Program entry for npm packages",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#program-entry-for-npm-packages",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["There is a ",(0,i.jsx)(n.code,{children:'"main"'})," attribute in ",(0,i.jsx)(n.code,{children:"package.json"})," that corresponds to a module ID or, more intuitively, a NodeJS file path, which is the main entry point for your application."]}),"\n",(0,i.jsxs)(n.p,{children:["For example, if your package is named ",(0,i.jsx)(n.code,{children:"foo"})," and the user installs it, and then executes the ",(0,i.jsx)(n.code,{children:'require("foo")'})," code, then the file corresponding to the ",(0,i.jsx)(n.code,{children:'"main"'})," field of the npm package ",(0,i.jsx)(n.code,{children:"foo"})," will be exported."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsxs)(n.strong,{children:["It is recommended to set the ",(0,i.jsx)(n.code,{children:'"main"'})," field in your npm package"]}),". If ",(0,i.jsx)(n.code,{children:'"main"'})," is not set, the default entry will be the ",(0,i.jsx)(n.code,{children:"index.js"})," file in the root of the package."]}),"\n",(0,i.jsxs)(n.p,{children:["In addition to the ",(0,i.jsx)(n.code,{children:'"main"'})," attribute, the ",(0,i.jsx)(n.code,{children:'"module"'})," attribute is usually set. It is similar to the ",(0,i.jsx)(n.code,{children:'"main"'})," attribute in that it is mainly used in webpack scenarios. webpack reads the npm package entry (file) in most cases in the order ",(0,i.jsx)(n.strong,{children:'"module" -> "main "'}),"."]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["To learn more about how webpack does this, check out this ",(0,i.jsx)(n.a,{href:"https://webpack.js.org/configuration/resolve/#resolvemainfields",target:"_blank",rel:"noopener noreferrer",children:"link"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.h3,{id:"scripts",children:[(0,i.jsx)(n.code,{children:"scripts"}),(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#scripts",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:'"scripts"'})," attribute of the ",(0,i.jsx)(n.code,{children:"package.json"})," file supports a number of built-in scripts and npm-preset lifecycle events, as well as arbitrary scripts."]}),"\n",(0,i.jsxs)(n.p,{children:["These can be executed by running ",(0,i.jsx)(n.code,{children:"npm run-script <stage>"})," or simply ",(0,i.jsx)(n.code,{children:"npm run <stage>"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Name matching ",(0,i.jsx)(n.a,{href:"https://docs.npmjs.com/cli/v9/using-npm/scripts#pre--post-scripts",target:"_blank",rel:"noopener noreferrer",children:"pre and post commands"})," will also be run (e.g. ",(0,i.jsx)(n.code,{children:"premyscript"}),", ",(0,i.jsx)(n.code,{children:"myscript"}),", ",(0,i.jsx)(n.code,{children:"postmyscript"})," )."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "scripts": {\n    "premyscript": "",\n    "myscript": "",\n    "postmyscript": ""\n  }\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["When ",(0,i.jsx)(n.code,{children:"npm run myscripts"})," is executed, the script corresponding to ",(0,i.jsx)(n.code,{children:"premyscripts"})," will be executed before it, and the script corresponding to ",(0,i.jsx)(n.code,{children:"postmyscripts"})," will be executed after it."]}),"\n",(0,i.jsxs)(n.p,{children:["Script commands from dependencies can be run with ",(0,i.jsx)(n.code,{children:"npm explore <pkg> -- npm run <stage>"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"There are also special lifecycle scripts that occur only under certain circumstances. Here are a few that are usually necessary to know."}),"\n",(0,i.jsxs)(n.h4,{id:"npm-install",children:[(0,i.jsx)(n.code,{children:"npm install"}),(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#npm-install",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["When you run ",(0,i.jsx)(n.code,{children:"npm install -g <pkg-name>"}),", the following scripts will run."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"preinstall"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"install"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"postinstall"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"prepublish"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"preprepare"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"prepare"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"postprepare"})}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["If your package root has a ",(0,i.jsx)(n.code,{children:"binding.gyp"})," file and you don't define an ",(0,i.jsx)(n.code,{children:"install"})," or ",(0,i.jsx)(n.code,{children:"preinstall"})," script, then npm will build with ",(0,i.jsx)(n.code,{children:"node-gyp rebuild"})," as the default install command, using ",(0,i.jsx)(n.a,{href:"https://github.com/nodejs/node-gyp",target:"_blank",rel:"noopener noreferrer",children:"node-gyp"}),"."]}),"\n",(0,i.jsxs)(n.h4,{id:"npm-publish",children:[(0,i.jsx)(n.code,{children:"npm publish"}),(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#npm-publish",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"When publishing a project, executing this command will trigger the following script."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"prepublishOnly"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"prepack"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"prepare"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"postpack"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"publish"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"postpublish"})}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["When running in ",(0,i.jsx)(n.a,{href:"https://docs.npmjs.com/cli/v7/commands/npm-publish#dry-run",target:"_blank",rel:"noopener noreferrer",children:(0,i.jsx)(n.code,{children:"-dry-run"})})," mode, the script corresponding to ",(0,i.jsx)(n.code,{children:"prepare"})," will not be executed."]}),"\n",(0,i.jsxs)(n.h3,{id:"peerdependencies",children:["peerDependencies",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#peerdependencies",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"In some cases, your npm project has a compatibility relationship with its host tool or library (e.g. a webpack plugin project and webpack), and your npm project does not want to use the host as a necessary dependency, which usually means that your project is probably a plugin for that host tool or library. Your npm project will have certain requirements for the version of the host package, as only the APIs required by the npm project will be exposed under a specific version."}),"\n",(0,i.jsxs)(n.p,{children:["For more explanation of ",(0,i.jsx)(n.code,{children:"peerDependencies"}),", you can learn about the different ways npm, pnpm, and Yarn handle it at the following links."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://docs.npmjs.com/cli/v9/configuring-npm/package-json#peerdependencies",target:"_blank",rel:"noopener noreferrer",children:"npm's explanation of peerDependencies"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://pnpm.io/feature-comparison",target:"_blank",rel:"noopener noreferrer",children:"pnpm vs npm vs Yarn"})}),"\n"]}),"\n",(0,i.jsxs)(n.h2,{id:"npm-package-manager",children:["npm package manager",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#npm-package-manager",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["In addition to the standard package manager like npm, the mainstream ones are ",(0,i.jsx)(n.strong,{children:"pnpm"})," and ",(0,i.jsx)(n.strong,{children:"Yarn"}),", both of which are good alternatives to npm cli."]}),"\n",(0,i.jsxs)(n.p,{children:["It is recommended to use ",(0,i.jsx)(n.a,{href:"https://pnpm.io/installation",target:"_blank",rel:"noopener noreferrer",children:"pnpm"})," to manage project dependencies, which can be installed as follows."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"npm install -g pnpm\n"})}),"\n",(0,i.jsxs)(n.h2,{id:"modernjs-module-configuration-file",children:["Modern.js Module configuration file",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#modernjs-module-configuration-file",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["The Modern.js Module configuration file - ",(0,i.jsx)(n.code,{children:"modern.config.(j|t)s"})," - is provided in the project directory of the module project created with ",(0,i.jsx)(n.code,{children:"@modern-js/create"}),". However, the ",(0,i.jsx)(n.code,{children:"modern.config"})," configuration file is not required to exist."]}),"\n",(0,i.jsx)(n.p,{children:"By default, the contents of the generated configuration file are as follows."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import { moduleTools, defineConfig } from '@modern-js/module-tools';\n\nexport default defineConfig({\n  plugins: [moduleTools()],\n  buildPreset: 'npm-library',\n});\n"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsxs)(n.strong,{children:["We recommend using the ",(0,i.jsx)(n.code,{children:"defineConfig"})," function"]}),", but it is not mandatory to use it. So you can also return an object directly in the config file: the"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import { moduleTools } from '@modern-js/module-tools';\n\nexport default {\n  plugins: [moduleTools()],\n  buildPreset: 'npm-library',\n};\n"})})]})}function o(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,s.useMDXComponents)(),e.components);return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(t,{...e})}):t(e)}n.default=o,o.__RSPRESS_PAGE_META={},o.__RSPRESS_PAGE_META["en%2Fguide%2Fbasic%2Fbefore-getting-started.md"]={toc:[{text:"Environment preparation",id:"environment-preparation",depth:2},{text:"Getting Started with npm",id:"getting-started-with-npm",depth:2},{text:"npm package type project",id:"npm-package-type-project",depth:2},{text:"Using third-party npm packages",id:"using-third-party-npm-packages",depth:2},{text:"Other npm bits and pieces to know",id:"other-npm-bits-and-pieces-to-know",depth:2},{text:"Program entry for npm packages",id:"program-entry-for-npm-packages",depth:3},{text:"scripts",id:"scripts",depth:3},{text:"npm install",id:"npm-install",depth:4},{text:"npm publish",id:"npm-publish",depth:4},{text:"peerDependencies",id:"peerdependencies",depth:3},{text:"npm package manager",id:"npm-package-manager",depth:2},{text:"Modern.js Module configuration file",id:"modernjs-module-configuration-file",depth:2}],title:"Before you start",frontmatter:{sidebar_position:1}}}}]);