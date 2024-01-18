/*! For license information please see 98439.d7e91365.js.LICENSE.txt */
(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["98439"],{94588:function(e,n,s){"use strict";s.r(n),s.d(n,{default:function(){return d}});var t=s("39980"),a=s("96954");function r(e){let n=Object.assign({h1:"h1",a:"a",p:"p",hr:"hr",h2:"h2",h3:"h3",pre:"pre",code:"code",ul:"ul",li:"li",blockquote:"blockquote",strong:"strong",ol:"ol"},(0,a.useMDXComponents)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.h1,{id:"contributing-guide",children:["Contributing Guide",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#contributing-guide",children:"#"})]}),"\n",(0,t.jsx)(n.p,{children:"Thanks for that you are interested in contributing to Modern.js. Before starting your contribution, please take a moment to read the following guidelines."}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsxs)(n.h2,{id:"setup-the-dev-environment",children:["Setup the Dev Environment",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#setup-the-dev-environment",children:"#"})]}),"\n",(0,t.jsxs)(n.h3,{id:"fork-the-repo",children:["Fork the Repo",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#fork-the-repo",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://help.github.com/articles/fork-a-repo/",target:"_blank",rel:"noopener noreferrer",children:"Fork"})," this repository to your\nown GitHub account and then ",(0,t.jsx)(n.a,{href:"https://help.github.com/articles/cloning-a-repository/",target:"_blank",rel:"noopener noreferrer",children:"clone"})," it to your local."]}),"\n",(0,t.jsxs)(n.h3,{id:"install-nodejs",children:["Install Node.js",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#install-nodejs",children:"#"})]}),"\n",(0,t.jsx)(n.p,{children:"We recommend using Node.js 18. You can check your currently used Node.js version with the following command:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"node -v\n"})}),"\n",(0,t.jsxs)(n.p,{children:["If you do not have Node.js installed in your current environment, you can use ",(0,t.jsx)(n.a,{href:"https://github.com/nvm-sh/nvm",target:"_blank",rel:"noopener noreferrer",children:"nvm"})," or ",(0,t.jsx)(n.a,{href:"https://github.com/Schniz/fnm",target:"_blank",rel:"noopener noreferrer",children:"fnm"})," to install it."]}),"\n",(0,t.jsx)(n.p,{children:"Here is an example of how to install the Node.js 18 LTS version via nvm:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"# Install the LTS version of Node.js 18\nnvm install 18 --lts\n\n# Make the newly installed Node.js 18 as the default version\nnvm alias default 18\n\n# Switch to the newly installed Node.js 18\nnvm use 18\n"})}),"\n",(0,t.jsxs)(n.h3,{id:"install-pnpm",children:["Install pnpm",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#install-pnpm",children:"#"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"# Enable pnpm with corepack, only available on Node.js >= `v14.19.0`\ncorepack enable\n"})}),"\n",(0,t.jsxs)(n.h3,{id:"install-dependencies",children:["Install Dependencies",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#install-dependencies",children:"#"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"pnpm install\n"})}),"\n",(0,t.jsx)(n.p,{children:"What this will do:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Install all dependencies"}),"\n",(0,t.jsx)(n.li,{children:"Create symlinks between packages in the monorepo"}),"\n",(0,t.jsxs)(n.li,{children:["Run the ",(0,t.jsx)(n.code,{children:"prepare"})," script to build all packages (this will take some time, but is necessary to make ensure all packages are built)"]}),"\n"]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"A full rebuild of all packages is generally not required after this. If a new feature you are developing requires an updated version of another package, it is usually sufficient to build the changed dependencies."}),"\n"]}),"\n",(0,t.jsxs)(n.h3,{id:"set-git-email",children:["Set Git Email",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#set-git-email",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:["Please make sure you have your email set up in ",(0,t.jsx)(n.code,{children:"<https://github.com/settings/emails>"}),". This will be needed later when you want to submit a pull request."]}),"\n",(0,t.jsx)(n.p,{children:"Check that your git client is already configured the email:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"git config --list | grep email\n"})}),"\n",(0,t.jsx)(n.p,{children:"Set the email to global config:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:'git config --global user.email "SOME_EMAIL@example.com"\n'})}),"\n",(0,t.jsx)(n.p,{children:"Set the email for local repo:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:'git config user.email "SOME_EMAIL@example.com"\n'})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsxs)(n.h2,{id:"making-changes-and-building",children:["Making Changes and Building",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#making-changes-and-building",children:"#"})]}),"\n",(0,t.jsx)(n.p,{children:"Once you have set up the local development environment in your forked repo, we can start development."}),"\n",(0,t.jsxs)(n.h3,{id:"checkout-a-new-branch",children:["Checkout A New Branch",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#checkout-a-new-branch",children:"#"})]}),"\n",(0,t.jsx)(n.p,{children:"It is recommended to develop on a new branch, as it will make things easier later when you submit a pull request:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"git checkout -b MY_BRANCH_NAME\n"})}),"\n",(0,t.jsxs)(n.h3,{id:"build-the-package",children:["Build the Package",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#build-the-package",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:["To build the package you want to change, first open the package directory, then run the ",(0,t.jsx)(n.code,{children:"build"})," command:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"# Replace some-path with the path of the package you want to work on\ncd ./packages/some-path\npnpm run build\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Alternatively, you can build the package from the root directory of the repository using the ",(0,t.jsx)(n.code,{children:"--filter"})," option:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"pnpm run --filter @modern-js/some-package build\n"})}),"\n",(0,t.jsx)(n.p,{children:"Build all packages:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"pnpm run prepare\n"})}),"\n",(0,t.jsxs)(n.p,{children:["If you need to clean all ",(0,t.jsx)(n.code,{children:"node_modules/*"})," in the project, run the ",(0,t.jsx)(n.code,{children:"reset"})," command:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"pnpm run reset\n"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsxs)(n.h2,{id:"testing",children:["Testing",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#testing",children:"#"})]}),"\n",(0,t.jsxs)(n.h3,{id:"add-new-tests",children:["Add New Tests",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#add-new-tests",children:"#"})]}),"\n",(0,t.jsx)(n.p,{children:"If you've fixed a bug or added code that should be tested, then add some tests."}),"\n",(0,t.jsxs)(n.p,{children:["You can add unit test cases in the ",(0,t.jsx)(n.code,{children:"<PACKAGE_DIR>/tests"})," folder. The test syntax is based on ",(0,t.jsx)(n.a,{href:"https://jestjs.io/",target:"_blank",rel:"noopener noreferrer",children:"Jest"})," and ",(0,t.jsx)(n.a,{href:"https://vitest.dev/",target:"_blank",rel:"noopener noreferrer",children:"Vitest"}),"."]}),"\n",(0,t.jsxs)(n.h3,{id:"run-unit-tests",children:["Run Unit Tests",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#run-unit-tests",children:"#"})]}),"\n",(0,t.jsx)(n.p,{children:"Before submitting a pull request, it's important to make sure that the changes haven't introduced any regressions or bugs. You can run the unit tests for the project by executing the following command:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"pnpm run test\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Alternatively, you can run the unit tests of single package using the ",(0,t.jsx)(n.code,{children:"--filter"})," option:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"pnpm run --filter @modern-js/some-package test\n"})}),"\n",(0,t.jsxs)(n.h3,{id:"run-e2e-tests",children:["Run E2E Tests",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#run-e2e-tests",children:"#"})]}),"\n",(0,t.jsx)(n.p,{children:"In addition to the unit tests, the Modern.js also includes end-to-end (E2E) tests, which checks the functionality of the application as a whole."}),"\n",(0,t.jsxs)(n.p,{children:["You can run the ",(0,t.jsx)(n.code,{children:"test:e2e"})," command to run the E2E tests:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"pnpm run test:e2e\n"})}),"\n",(0,t.jsx)(n.p,{children:"If you need to run a specified test, you can add keywords to filter:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"# Only run test cases with the copy-assets keyword\nnpx jest copy-assets\n"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsxs)(n.h2,{id:"linting",children:["Linting",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#linting",children:"#"})]}),"\n",(0,t.jsx)(n.p,{children:"To help maintain consistency and readability of the codebase, we use a ESLint to lint the codes."}),"\n",(0,t.jsx)(n.p,{children:"You can run the Linter by executing the following command:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"pnpm run lint\n"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsxs)(n.h2,{id:"benchmarking",children:["Benchmarking",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#benchmarking",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:["You can input ",(0,t.jsx)(n.code,{children:"!bench-framework"})," or ",(0,t.jsx)(n.code,{children:"!bench-module"})," in the comment area of \u200B\u200Bthe PR to do benchmarking on ",(0,t.jsx)(n.code,{children:"@modern-js/app-tools"})," and ",(0,t.jsx)(n.code,{children:"@modern-js/module-tools"})," respectively (you need to have Collaborator and above permissions)."]}),"\n",(0,t.jsx)(n.p,{children:"You can focus on metrics related to build time and bundle size based on the comparison table output by comments to assist you in making relevant performance judgments and decisions."}),"\n",(0,t.jsx)(n.p,{children:"Dependencies installation-related metrics base on publishing process, so the data is relatively lagging and is for reference only."}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsxs)(n.h2,{id:"documentation",children:["Documentation",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#documentation",children:"#"})]}),"\n",(0,t.jsx)(n.p,{children:"Currently Modern.js provides documentation in English and Chinese. If you can use Chinese, please update both documents at the same time. Otherwise, just update the English documentation."}),"\n",(0,t.jsxs)(n.p,{children:["You can find all the documentation in the ",(0,t.jsx)(n.code,{children:"packages/document"})," folder:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"root\n\u2514\u2500 packages\n   \u2514\u2500 document\n       \u251C\u2500 builder-doc    # Documentation for Modern.js Builder\n       \u251C\u2500 main-doc       # Documentation for Modern.js Framework\n       \u2514\u2500 module-doc     # Documentation for Modern.js Module\n"})}),"\n",(0,t.jsxs)(n.p,{children:["This website is built with Rspress, the document content can be written using markdown or mdx syntax. You can refer to the ",(0,t.jsx)(n.a,{href:"https://rspress.dev/",target:"_blank",rel:"noopener noreferrer",children:"Rspress Website"})," for detailed usage."]}),"\n",(0,t.jsxs)(n.p,{children:["The source code of Rspress can be found in ",(0,t.jsx)(n.a,{href:"https://github.com/web-infra-dev/rspress",target:"_blank",rel:"noopener noreferrer",children:"this repo"}),"."]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsxs)(n.h2,{id:"submitting-changes",children:["Submitting Changes",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#submitting-changes",children:"#"})]}),"\n",(0,t.jsxs)(n.h3,{id:"add-a-changeset",children:["Add a Changeset",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#add-a-changeset",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:["Modern.js is using ",(0,t.jsx)(n.a,{href:"https://github.com/changesets/changesets",target:"_blank",rel:"noopener noreferrer",children:"Changesets"})," to manage the versioning and changelogs."]}),"\n",(0,t.jsxs)(n.p,{children:["If you've changed some packages, you need add a new changeset for the changes. Please run ",(0,t.jsx)(n.code,{children:"change"})," command to select the changed packages and add the changeset info."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"pnpm run change\n"})}),"\n",(0,t.jsxs)(n.h3,{id:"committing-your-changes",children:["Committing your Changes",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#committing-your-changes",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:["Commit your changes to your forked repo, and ",(0,t.jsx)(n.a,{href:"https://help.github.com/articles/creating-a-pull-request/",target:"_blank",rel:"noopener noreferrer",children:"create a pull request"}),"."]}),"\n",(0,t.jsxs)(n.h3,{id:"format-of-pr-titles",children:["Format of PR titles",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#format-of-pr-titles",children:"#"})]}),"\n",(0,t.jsx)(n.p,{children:"The format of PR titles follow Conventional Commits."}),"\n",(0,t.jsx)(n.p,{children:"An example:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"feat(plugin-swc): Add `xxx` config\n^    ^    ^\n|    |    |__ Subject\n|    |_______ Scope\n|____________ Type\n"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsxs)(n.h2,{id:"publishing",children:["Publishing",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#publishing",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:["We use ",(0,t.jsx)(n.strong,{children:"Modern.js Monorepo Solution"})," to manage version and changelog."]}),"\n",(0,t.jsx)(n.p,{children:"Repository maintainers can publish a new version of all packages to npm."}),"\n",(0,t.jsx)(n.p,{children:"Here are the steps to publish (we generally use CI for releases and avoid publishing npm packages locally):"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Pull latest code from the ",(0,t.jsx)(n.code,{children:"main"})," branch."]}),"\n",(0,t.jsx)(n.li,{children:"Install:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"pnpm i\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"3",children:["\n",(0,t.jsx)(n.li,{children:"Build packages:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"pnpm run prepare\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"4",children:["\n",(0,t.jsx)(n.li,{children:"Bump version:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"pnpm run bump\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"5",children:["\n",(0,t.jsx)(n.li,{children:"Commit the version change."}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:'git add .\ngit commit -m "Release va.b.c"\n'})})]})}function i(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,a.useMDXComponents)(),e.components);return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(r,{...e})}):r(e)}var d=i;i.__RSPRESS_PAGE_META={},i.__RSPRESS_PAGE_META["en%2Fcommunity%2Fcontributing-guide.mdx"]={toc:[{text:"Setup the Dev Environment",id:"setup-the-dev-environment",depth:2},{text:"Fork the Repo",id:"fork-the-repo",depth:3},{text:"Install Node.js",id:"install-nodejs",depth:3},{text:"Install pnpm",id:"install-pnpm",depth:3},{text:"Install Dependencies",id:"install-dependencies",depth:3},{text:"Set Git Email",id:"set-git-email",depth:3},{text:"Making Changes and Building",id:"making-changes-and-building",depth:2},{text:"Checkout A New Branch",id:"checkout-a-new-branch",depth:3},{text:"Build the Package",id:"build-the-package",depth:3},{text:"Testing",id:"testing",depth:2},{text:"Add New Tests",id:"add-new-tests",depth:3},{text:"Run Unit Tests",id:"run-unit-tests",depth:3},{text:"Run E2E Tests",id:"run-e2e-tests",depth:3},{text:"Linting",id:"linting",depth:2},{text:"Benchmarking",id:"benchmarking",depth:2},{text:"Documentation",id:"documentation",depth:2},{text:"Submitting Changes",id:"submitting-changes",depth:2},{text:"Add a Changeset",id:"add-a-changeset",depth:3},{text:"Committing your Changes",id:"committing-your-changes",depth:3},{text:"Format of PR titles",id:"format-of-pr-titles",depth:3},{text:"Publishing",id:"publishing",depth:2}],title:"Contributing Guide",frontmatter:{sidebar_position:3}}}}]);