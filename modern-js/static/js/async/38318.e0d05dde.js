/*! For license information please see 38318.e0d05dde.js.LICENSE.txt */
(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["38318"],{35809:function(e,n,s){"use strict";s.r(n);var i=s("39980"),r=s("9580");function a(e){let n=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",ul:"ul",li:"li",code:"code",pre:"pre"},(0,r.ah)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.h1,{id:"introducing-changesets",children:["Introducing Changesets",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#introducing-changesets",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["Modern.js integrates ",(0,i.jsx)(n.a,{href:"https://github.com/changesets/changesets",target:"_blank",rel:"noopener noreferrer",children:"changesets"})," for package version management in Npm Module and Monorepo project."]}),"\n",(0,i.jsxs)(n.h2,{id:"features",children:["Features",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#features",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"Changesets have the following features:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["During development, developers need to provide the package names, the type of version upgrade (",(0,i.jsx)(n.code,{children:"pathch"}),", ",(0,i.jsx)(n.code,{children:"minor"}),", ",(0,i.jsx)(n.code,{children:"major"}),"), and change information involved in this change."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"When releasing a version, the version number of the corresponding package will be automatically upgraded based on the content of the changeset, and changelog information will be generated in the corresponding package."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"In the Monorepo project, changesets will automatically generate a repository dependency graph, and only upgrade the version numbers of the changed packages and related dependent packages during upgrade."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.h2,{id:"initialization",children:["Initialization",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#initialization",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["The Npm Module and Monorepo project created by Modern.js have already initialized changesets. The ",(0,i.jsx)(n.code,{children:".changeset"})," directory and the configuration file ",(0,i.jsx)(n.code,{children:".changeset/config.json"})," will be automatically created in the project root directory."]}),"\n",(0,i.jsxs)(n.p,{children:["In addition, Modern.js provides corresponding commands for changesets in its corresponding project tools ",(0,i.jsx)(n.code,{children:"@modern-js/module-tools"})," and ",(0,i.jsx)(n.code,{children:"@modern-js/monorepo-tools"}),", and there is no need to manually install changeset-related dependencies."]}),"\n",(0,i.jsx)(n.p,{children:"The default configuration for changesets is as follows:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",meta:'title=".changeset/config.json"',children:'{\n  "$schema": "https://unpkg.com/@changesets/config@2.0.0/schema.json",\n  "changelog": "@changesets/cli/changelog",\n  "commit": false,\n  "linked": [],\n  "access": "restricted",\n  "baseBranch": "main",\n  "updateInternalDependencies": "patch",\n  "ignore": []\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["The configuration file provides some basic configurations for generating changesets. For detailed field descriptions, please refer to ",(0,i.jsx)(n.a,{href:"/guides/topic-detail/changesets/config",children:"Changesets configuration"}),"."]}),"\n",(0,i.jsxs)(n.h2,{id:"commands",children:["Commands",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#commands",children:"#"})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"change"}),": Creates a changeset. After running this command, a changeset file will be automatically generated in the ",(0,i.jsx)(n.code,{children:".changeset"})," directory."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"bump"}),": Upgrades the version of the corresponding package based on the current changeset."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"pre"}),": Marks entering and exiting ",(0,i.jsx)(n.code,{children:"pre release"})," mode. When running the ",(0,i.jsx)(n.code,{children:"bump"})," command in ",(0,i.jsx)(n.code,{children:"pre release"})," mode, the version format will be ",(0,i.jsx)(n.code,{children:"x.x.x-${pre-tag}.x"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"release"}),": Publishes the package to NPM."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"status"}),": Views the current changeset status."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"gen-release-note"}),": Generates Release Note information based on the current chagneset status."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"For specific command-supported parameters, please refer to the corresponding chapter introduction."})]})}function t(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}n.default=t,t.__RSPRESS_PAGE_META={},t.__RSPRESS_PAGE_META["en%2Fguides%2Ftopic-detail%2Fchangesets%2Fintroduce.mdx"]={toc:[{text:"Features",id:"features",depth:2},{text:"Initialization",id:"initialization",depth:2},{text:"Commands",id:"commands",depth:2}],title:"Introducing Changesets",frontmatter:{sidebar_position:1}}}}]);