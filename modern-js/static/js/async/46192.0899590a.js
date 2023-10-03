(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["46192"],{68362:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return o},frontmatter:function(){return d}});var s=t("15169"),a=t("43932"),r=t("9880"),h=t("23169");function i(e){var n=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",ul:"ul",li:"li",div:"div",h3:"h3",h4:"h4",pre:"pre",code:"code",img:"img"},(0,h.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"add-changesets",children:["Add Changesets",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#add-changesets",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"When we finish development, we need to add a changeset to declare the current changes for version releases."}),"\n",(0,r.jsxs)(n.h2,{id:"information",children:["Information",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#information",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"A changeset includes:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Which packages are affected by this change."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["The type of version for this change, which complies with the ",(0,r.jsx)(n.a,{href:"https://semver.org/",target:"_blank",rel:"noopener noreferrer",children:"semver"})," specification."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Changelog information for this change."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.h2,{id:"steps",children:["Steps",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#steps",children:"#"})]}),"\n",(0,r.jsxs)(n.div,{className:"rspress-directive info",children:[(0,r.jsx)(n.div,{className:"rspress-directive-title",children:"INFO"}),(0,r.jsx)(n.div,{className:"rspress-directive-content",children:(0,r.jsx)(n.p,{children:"The following example commands are all using pnpm. If you need to use other package managers, please replace them as needed."})})]}),"\n",(0,r.jsxs)(n.h3,{id:"modernjs-module",children:["Modern.js Module",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#modernjs-module",children:"#"})]}),"\n",(0,r.jsxs)(n.h4,{id:"run-the-change-command-in-the-root-directory",children:["Run the change command in the root directory:",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#run-the-change-command-in-the-root-directory",children:"#"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"pnpm run change\n"})}),"\n",(0,r.jsxs)(n.h4,{id:"select-the-type-of-version-for-this-change",children:["Select the type of version for this change",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#select-the-type-of-version-for-this-change",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/zq-uylkvT/ljhwZthlaukjlkulzlp/changeset-select-version.png",alt:""})}),"\n",(0,r.jsxs)(n.h4,{id:"fill-in-the-changelog-information",children:["Fill in the changelog information",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#fill-in-the-changelog-information",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/zq-uylkvT/ljhwZthlaukjlkulzlp/changeset-input-changelog.png",alt:""})}),"\n",(0,r.jsxs)(n.p,{children:["After running, a corresponding changeset file will be created in the ",(0,r.jsx)(n.code,{children:".changeset"})," directory of the project, and the file content is as follows:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-markdown",children:"---\n'module-changeset': patch\n---\n\nfeat: test module solution changeset\n"})}),"\n",(0,r.jsx)(n.p,{children:"This file contains all the information of the changeset."}),"\n",(0,r.jsxs)(n.h3,{id:"monorepo",children:["Monorepo",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#monorepo",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["There are three NPM module packages in the monorepo, ",(0,r.jsx)(n.code,{children:"module-1"}),", ",(0,r.jsx)(n.code,{children:"module-2"}),", and ",(0,r.jsx)(n.code,{children:"module-3"}),"."]}),"\n",(0,r.jsxs)(n.h4,{id:"run-the-change-command-in-the-root-directory",children:["Run the change command in the root directory",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#run-the-change-command-in-the-root-directory",children:"#"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"pnpm run change\n"})}),"\n",(0,r.jsxs)(n.h4,{id:"select-the-list-of-packages-to-upgrade-for-this-change",children:["Select the list of packages to upgrade for this change",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#select-the-list-of-packages-to-upgrade-for-this-change",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["Changesets will categorize the packages in the Monorepo into two categories, ",(0,r.jsx)(n.code,{children:"changed packages"})," and ",(0,r.jsx)(n.code,{children:"unchanged packages"}),", based on the current code changes (",(0,r.jsx)(n.code,{children:"git diff Head...baseBranch"}),"), making it easy for users to choose."]}),"\n",(0,r.jsx)(n.p,{children:"Use the space key to select the corresponding package or category, and then press Enter after the selection is completed:"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/zq-uylkvT/ljhwZthlaukjlkulzlp/changeset-select-packages.png",alt:""})}),"\n",(0,r.jsxs)(n.h4,{id:"select-the-packages-corresponding-to-different-version-types",children:["Select the packages corresponding to different version types",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#select-the-packages-corresponding-to-different-version-types",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["Changesets will ask about the ",(0,r.jsx)(n.code,{children:"major"})," and ",(0,r.jsx)(n.code,{children:"minor"})," types. If there are packages that have not selected these two types, the ",(0,r.jsx)(n.code,{children:"patch"})," type will be used by default."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/zq-uylkvT/ljhwZthlaukjlkulzlp/changeset-auto-select-patch.png",alt:""})}),"\n",(0,r.jsxs)(n.h4,{id:"fill-in-the-changelog-information-1",children:["Fill in the changelog information",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#fill-in-the-changelog-information-1",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/zq-uylkvT/ljhwZthlaukjlkulzlp/changeset-input-changelog-monorepo.png",alt:""})}),"\n",(0,r.jsxs)(n.p,{children:["After running, a corresponding changeset file will be created in the ",(0,r.jsx)(n.code,{children:".changeset"})," directory of the project, and the file content is as follows:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-markdown",children:"---\n'module-2': minor\n'module-3': patch\n---\n\nfeat: test-changeset\n"})}),"\n",(0,r.jsx)(n.p,{children:"This file contains all the information of the changeset, and different packages will be marked according to the selected version type."}),"\n",(0,r.jsxs)(n.h2,{id:"parameters",children:["Parameters",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#parameters",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"change"})," command supports the following parameters:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"--empty"}),": Adds an empty changeset."]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"pnpm run change --empty\n"})}),"\n",(0,r.jsxs)(n.p,{children:["After running, an empty changeset file will be created in the ",(0,r.jsx)(n.code,{children:".changeset"})," directory of the project, and the file content is as follows:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-markdown",children:"---\n---\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"--open"}),": When using this parameter, the system default editor will be opened for filling in the changelog."]}),"\n"]}),"\n",(0,r.jsxs)(n.h2,{id:"notes",children:["Notes",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#notes",children:"#"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Not all changes require changesets"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"If the current change is to modify some infrastructure of the repository, such as CI, testing, etc., there is no need to add changesets, or an empty changeset can be added."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Multiple changesets can be submitted in one pull request"}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["When a pull request has multiple feature developments or bug fixes, multiple ",(0,r.jsx)(n.code,{children:"pnpm run change"})," commands can be executed to add multiple changeset files. Each file selects the corresponding packages for the feature and adds change information."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"When creating a changeset, all packages related to the feature need to be selected"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"When creating a changeset in a Monorepo, all related packages to the feature need to be selected to avoid some packages not being published when releasing."})]})}function c(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,h.useMDXComponents)(),e.components).wrapper;return n?(0,r.jsx)(n,(0,a._)((0,s._)({},e),{children:(0,r.jsx)(i,(0,s._)({},e))})):i(e)}var o=c;c.__RSPRESS_PAGE_META={},c.__RSPRESS_PAGE_META["en%2Fguides%2Ftopic-detail%2Fchangesets%2Fadd.mdx"]={toc:[{text:"Information",id:"information",depth:2},{text:"Steps",id:"steps",depth:2},{text:"Modern.js Module",id:"modernjs-module",depth:3},{text:"Run the change command in the root directory:",id:"run-the-change-command-in-the-root-directory",depth:4},{text:"Select the type of version for this change",id:"select-the-type-of-version-for-this-change",depth:4},{text:"Fill in the changelog information",id:"fill-in-the-changelog-information",depth:4},{text:"Monorepo",id:"monorepo",depth:3},{text:"Run the change command in the root directory",id:"run-the-change-command-in-the-root-directory",depth:4},{text:"Select the list of packages to upgrade for this change",id:"select-the-list-of-packages-to-upgrade-for-this-change",depth:4},{text:"Select the packages corresponding to different version types",id:"select-the-packages-corresponding-to-different-version-types",depth:4},{text:"Fill in the changelog information",id:"fill-in-the-changelog-information-1",depth:4},{text:"Parameters",id:"parameters",depth:2},{text:"Notes",id:"notes",depth:2}],title:"Add Changesets"};var d={sidebar_position:2}}}]);