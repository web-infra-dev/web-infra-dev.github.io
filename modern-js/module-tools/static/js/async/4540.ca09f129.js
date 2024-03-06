/*! For license information please see 4540.ca09f129.js.LICENSE.txt */
(self.webpackChunk_modern_js_module_tools_docs=self.webpackChunk_modern_js_module_tools_docs||[]).push([["4540"],{92359:function(e,n,s){"use strict";s.r(n);var r=s("39980"),a=s("96954");function i(e){let n=Object.assign({h1:"h1",a:"a",p:"p",ul:"ul",li:"li",h2:"h2",strong:"strong",code:"code",pre:"pre",blockquote:"blockquote"},(0,a.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"versioning-and-publishing",children:["Versioning and Publishing",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#versioning-and-publishing",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"An npm-type module project release process consists of two phases."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"The first phase is during development, where the developer needs to provide a change file to record changes that need to be released."}),"\n",(0,r.jsxs)(n.li,{children:["The second phase is during release, collect all the change files to update the version, update the release log, and release new packages to the ",(0,r.jsx)(n.a,{href:"https://www.npmjs.com/",target:"_blank",rel:"noopener noreferrer",children:"npm Registry"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Modern.js Module provides a set of version management and release solutions, which are suitable for single-package scenarios. For npm packages in monorepo, you need to follow the strategies provided by various monorepo solutions."}),"\n",(0,r.jsxs)(n.h2,{id:"tracking-changes",children:["Tracking changes",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#tracking-changes",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Changes need to be logged when they happen to the project"}),". Changes that occur in a project are typically."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"New features"}),"\n",(0,r.jsx)(n.li,{children:"Fixes to issues"}),"\n",(0,r.jsx)(n.li,{children:"Configuration file changes"}),"\n",(0,r.jsx)(n.li,{children:"..."}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Once these changes have been made, the current changes need to be documented with the following command."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/guide/basic/command-preview#modern-change",children:(0,r.jsx)(n.code,{children:"modern change"})})}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Executing the ",(0,r.jsx)(n.code,{children:"modern change"})," command asks the developer several questions and generates a change log based on the developer's answers. The changelog file contains the type of change and its description, and is committed to the git repository."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"$ npx modern change\n\uD83E\uDD8B What kind of change is this for module-example? (current version is 0.1.0) - patch\n\uD83E\uDD8B Please enter a summary for this change (this will be in the changelogs). Submit empty line to open external editor\n\uD83E\uDD8B Summary - publish test\n\uD83E\uDD8B === Releasing the following packages ===\n\uD83E\uDD8B [Patch]\n\uD83E\uDD8B module\n\uD83E\uDD8B Is this your desired changeset? (Y/n) - true\n\uD83E\uDD8B Changeset added! - you can now commit it\n\uD83E\uDD8B\n\uD83E\uDD8B If you want to modify or expand on the changeset summary, you can find it here\n\uD83E\uDD8B info /xxxxxx/module/.changeset/brave-dryers-agree.md\n"})}),"\n",(0,r.jsxs)(n.p,{children:["When executed successfully, the resulting Markdown file containing the change log is saved in the project's ",(0,r.jsx)(n.code,{children:".changeset"})," directory. The contents will look like the following."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-markdown",meta:'title=".changeset/brave-dryers-agree.md"',children:"---\n\"``module-example'': patch\n---\n\npublish test\n"})}),"\n",(0,r.jsxs)(n.h2,{id:"version-update",children:["Version update",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#version-update",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"When the project version needs to be updated, execute the following command."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/guide/basic/command-preview#modern-bump",children:(0,r.jsx)(n.code,{children:"modern bump"})})}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Executing ",(0,r.jsx)(n.code,{children:"modern bump"})," will modify the version number in ",(0,r.jsx)(n.code,{children:"package.json"})," based on the contents of the Markdown file in the ",(0,r.jsx)(n.code,{children:".changeset/"})," directory where the changes were recorded, and generate the ",(0,r.jsx)(n.code,{children:"CHANGELOG.md"})," file. ",(0,r.jsx)(n.strong,{children:'These Markdown files are also deleted when the version update is complete, so they are "consumed "'}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-markdown",meta:'title="CHANGELOG.md"',children:"# module\n\n## 0.1.1\n\n### Patch Changes\n\n- publish test\n"})}),"\n",(0,r.jsxs)(n.h2,{id:"publish",children:["Publish",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#publish",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"To publish a project, you can execute the following command."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/guide/basic/command-preview#modern-release",children:(0,r.jsx)(n.code,{children:"modern publish"})})}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"modern release"})," command publishes the project to the npm Registry."]}),"\n",(0,r.jsxs)(n.p,{children:["The release is the ",(0,r.jsx)(n.code,{children:"latest"})," version, which is also the official version. If you want to change the ",(0,r.jsx)(n.code,{children:"dist-tag"}),", you can specify it with the ",(0,r.jsx)(n.code,{children:"modern release --tag"})," command. For example."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"modern release --tag beta\n"})}),"\n",(0,r.jsxs)(n.p,{children:["However, if you want to change the version number of the current project to a pre-release as well, you need to use the ",(0,r.jsx)(n.code,{children:"modern pre"})," command."]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"dist-tag"})," can be understood as: tagging the current release. Generally speaking, the ",(0,r.jsx)(n.code,{children:"dist-tag"})," for the default release is ",(0,r.jsx)(n.code,{children:"latest"}),", so you can consider ",(0,r.jsx)(n.code,{children:"latest"})," as the ",(0,r.jsx)(n.code,{children:"dist-tag"})," for the official release."]}),"\n"]}),"\n",(0,r.jsxs)(n.h2,{id:"pre-releases",children:["Pre-releases",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#pre-releases",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"When a pre-release is needed before the official release, the following command is executed."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/guide/basic/command-preview#modern-pre",children:(0,r.jsx)(n.code,{children:"modern pre"})})}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["First ",(0,r.jsx)(n.code,{children:"modern pre enter <tag>"})," to enter pre-release mode, ",(0,r.jsx)(n.code,{children:"<tag>"})," can be the same as the ",(0,r.jsx)(n.code,{children:"tag"})," specified with the ",(0,r.jsx)(n.code,{children:"modern release --tag"})," command when releasing the project."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"$ npx modern pre enter next\n\uD83E\uDD8B success Entered pre mode with tag next\n\uD83E\uDD8B info Run `changeset version` to version packages with prerelease versions\n\u2728 Done in 5.30s.\nDone in 5.30s.\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Then you can update the specific version number with the ",(0,r.jsx)(n.code,{children:"modern bump"})," command, ",(0,r.jsx)(n.strong,{children:'which doesn\'t actually "consume" the Markdown file that records the changes'}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"$ npx modern bump\n\uD83E\uDD8B warn ===============================IMPORTANT!===============================\n\uD83E\uDD8B warn You are in prerelease mode\n\uD83E\uDD8B warn If you meant to do a normal release you should revert these changes and run `changeset pre exit`\n\uD83E\uDD8B warn You can then run `changeset version` again to do a normal release\n\uD83E\uDD8B warn ----------------------------------------------------------------------\n\uD83E\uDD8B All files have been updated. review them and commit at your leisure\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Then you can see that the updated version number in ",(0,r.jsx)(n.code,{children:"package.json"})," will look like this: ",(0,r.jsx)(n.code,{children:"0.1.2-next.0"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Finally, ",(0,r.jsxs)(n.strong,{children:["if you don't need to do a pre-release anymore, be sure to run the ",(0,r.jsx)(n.code,{children:"modern pre exit"})," command"]})," to exit the pre-release state and to release the official version when you run the ",(0,r.jsx)(n.code,{children:"modern bump"})," command again."]})]})}function o(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,a.useMDXComponents)(),e.components);return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}n.default=o,o.__RSPRESS_PAGE_META={},o.__RSPRESS_PAGE_META["en%2Fguide%2Fbasic%2Fpublish-your-project.mdx"]={toc:[{text:"Tracking changes",id:"tracking-changes",depth:2},{text:"Version update",id:"version-update",depth:2},{text:"Publish",id:"publish",depth:2},{text:"Pre-releases",id:"pre-releases",depth:2}],title:"Versioning and Publishing",frontmatter:{sidebar_position:7}}}}]);