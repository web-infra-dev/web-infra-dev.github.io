(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["29641"],{52131:function(e,n,i){"use strict";i.r(n),i.d(n,{default:function(){return c},frontmatter:function(){return t}});var s=i("9880"),d=i("23169");function r(e){let n=Object.assign({h1:"h1",a:"a",p:"p",code:"code",h2:"h2",h3:"h3",img:"img",pre:"pre",h4:"h4"},(0,d.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h1,{id:"changesets-configuration",children:["Changesets Configuration",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#changesets-configuration",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["When initializing a Modern.js repository, the configuration file for changesets will be initialized by default, that is, the ",(0,s.jsx)(n.code,{children:".changeset/config.json"})," file. Below, we will learn in detail what configurations are supported in this file."]}),"\n",(0,s.jsxs)(n.h2,{id:"introduction",children:["Introduction",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#introduction",children:"#"})]}),"\n",(0,s.jsxs)(n.h3,{id:"commit",children:["commit",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#commit",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["Type: ",(0,s.jsx)(n.code,{children:"boolean"})]}),"\n",(0,s.jsxs)(n.p,{children:["Default: ",(0,s.jsx)(n.code,{children:"false"})]}),"\n",(0,s.jsxs)(n.p,{children:["When this field is configured as ",(0,s.jsx)(n.code,{children:"true"}),", the code submission operation will be automatically executed when running the ",(0,s.jsx)(n.code,{children:"change"})," and ",(0,s.jsx)(n.code,{children:"bump"})," commands."]}),"\n",(0,s.jsx)(n.p,{children:"The default commit information format is as follows:"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/zq-uylkvT/ljhwZthlaukjlkulzlp/changeset-change-commit-info.png",alt:"change commit"}),"\n",(0,s.jsx)(n.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/zq-uylkvT/ljhwZthlaukjlkulzlp/changeset-bump-commit-info.png",alt:"bump commit"})]}),"\n",(0,s.jsxs)(n.p,{children:["This commit information supports customization, which we will discuss in detail in the ",(0,s.jsx)(n.a,{href:"/guides/topic-detail/changesets/commit",children:"Customizing Commit Messages"})," chapter."]}),"\n",(0,s.jsxs)(n.h3,{id:"access",children:["access",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#access",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["Type: ",(0,s.jsx)(n.code,{children:"restricted"})," | ",(0,s.jsx)(n.code,{children:"public"})]}),"\n",(0,s.jsxs)(n.p,{children:["Default: ",(0,s.jsx)(n.code,{children:"restricted"})]}),"\n",(0,s.jsxs)(n.p,{children:["Used to configure the publishing form of the current package. If configured as ",(0,s.jsx)(n.code,{children:"restricted"}),", it will be published as a private package. If it is ",(0,s.jsx)(n.code,{children:"public"}),", it will be published as a public scope package."]}),"\n",(0,s.jsxs)(n.p,{children:["For packages that need to configure access in the repository, ",(0,s.jsx)(n.code,{children:"publishConfig"})," can be configured in ",(0,s.jsx)(n.code,{children:"package.json"}),", for example:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",meta:"title=package.json",children:'{\n  "publishConfig": {\n    "registry": "https://registry.npmjs.org/",\n    "access": "public"\n  }\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["For packages that don't need to be published, you can set ",(0,s.jsx)(n.code,{children:"private"})," to ",(0,s.jsx)(n.code,{children:"true"})," in ",(0,s.jsx)(n.code,{children:"package.json"})," to prevent them from being published."]}),"\n",(0,s.jsxs)(n.h3,{id:"basebranch",children:["baseBranch",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#basebranch",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["Type: ",(0,s.jsx)(n.code,{children:"string"})]}),"\n",(0,s.jsxs)(n.p,{children:["Default: ",(0,s.jsx)(n.code,{children:"main"})]}),"\n",(0,s.jsx)(n.p,{children:"Repository main branch. This configuration is used to calculate the changed packages of the current branch and classify them."}),"\n",(0,s.jsxs)(n.h3,{id:"ignore",children:["ignore",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#ignore",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["Type: ",(0,s.jsx)(n.code,{children:"string[]"})]}),"\n",(0,s.jsxs)(n.p,{children:["Default: ",(0,s.jsx)(n.code,{children:"[]"})]}),"\n",(0,s.jsxs)(n.p,{children:["Used to declare packages to be ignored when running the ",(0,s.jsx)(n.code,{children:"bump"})," command. The usage is consistent with the ",(0,s.jsx)(n.code,{children:"--ignore"})," parameter of the ",(0,s.jsx)(n.code,{children:"bump"})," command. Note that the two cannot be used at the same time."]}),"\n",(0,s.jsxs)(n.h3,{id:"fixed",children:["fixed",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#fixed",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["Type: ",(0,s.jsx)(n.code,{children:"string[][]"})]}),"\n",(0,s.jsxs)(n.p,{children:["Default: ",(0,s.jsx)(n.code,{children:"[]"})]}),"\n",(0,s.jsxs)(n.p,{children:["Used to group packages in monorepos. The version of packages in the same group will be bound, and each time the ",(0,s.jsx)(n.code,{children:"bump"})," command is run, a package in the same group is upgraded, others will be upgraded together.\nRegular expressions can be used to match package names."]}),"\n",(0,s.jsxs)(n.h3,{id:"linked",children:["linked",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#linked",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["Type: ",(0,s.jsx)(n.code,{children:"string[][]"})]}),"\n",(0,s.jsxs)(n.p,{children:["Default: ",(0,s.jsx)(n.code,{children:"[]"})]}),"\n",(0,s.jsxs)(n.p,{children:["Similar to ",(0,s.jsx)(n.code,{children:"fixed"}),", it also groups packages in monorepos, but only the packages related to the changeset declaration will be upgraded when the ",(0,s.jsx)(n.code,{children:"bump"})," command is run, and the version of the changeset packages in the same group will remain consistent.\nRegular expressions can be used to match package names."]}),"\n",(0,s.jsxs)(n.h3,{id:"updateinternaldependencies",children:["updateInternalDependencies",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#updateinternaldependencies",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["Type: ",(0,s.jsx)(n.code,{children:"patch"})," | ",(0,s.jsx)(n.code,{children:"minor"})]}),"\n",(0,s.jsxs)(n.p,{children:["Default: ",(0,s.jsx)(n.code,{children:"patch"})]}),"\n",(0,s.jsx)(n.p,{children:"Used to declare the version number rule for updating internal dependencies."}),"\n",(0,s.jsxs)(n.p,{children:["When upgrading the version number by running the ",(0,s.jsx)(n.code,{children:"bump"})," command, the dependency declaration using the package in the repository will be automatically updated by default. After configuring this field as ",(0,s.jsx)(n.code,{children:"minor"}),", if the version number is upgraded to ",(0,s.jsx)(n.code,{children:"patch"}),", the reference dependency declaration will not be updated automatically."]}),"\n",(0,s.jsx)(n.p,{children:"For example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"pkg-a @ version 1.0.0\npkg-b @ version 1.0.0\n  depends on pkg-a at range `^1.0.0\n"})}),"\n",(0,s.jsxs)(n.p,{children:["By default, when upgrading ",(0,s.jsx)(n.code,{children:"pkg-a"})," to ",(0,s.jsx)(n.code,{children:"1.0.1"}),", the dependency version of ",(0,s.jsx)(n.code,{children:"pkg-a"})," in ",(0,s.jsx)(n.code,{children:"pkg-b"})," will be updated to ",(0,s.jsx)(n.code,{children:"^1.0.1"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["When configuring ",(0,s.jsx)(n.code,{children:"updateInternalDependencies"})," as ",(0,s.jsx)(n.code,{children:"minor"}),", when upgrading ",(0,s.jsx)(n.code,{children:"pkg-a"})," to ",(0,s.jsx)(n.code,{children:"1.0.1"}),", the dependency version of ",(0,s.jsx)(n.code,{children:"pkg-a"})," in ",(0,s.jsx)(n.code,{children:"pkg-b"})," will not be updated. Only when the version number of ",(0,s.jsx)(n.code,{children:"pkg-a"})," is upgraded to ",(0,s.jsx)(n.code,{children:"1.1.0"})," or ",(0,s.jsx)(n.code,{children:"2.0.0"}),", the dependency of ",(0,s.jsx)(n.code,{children:"pkg-a"})," in ",(0,s.jsx)(n.code,{children:"pkg-b"})," will be updated."]}),"\n",(0,s.jsxs)(n.h3,{id:"changelog",children:["changelog",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#changelog",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["Type: ",(0,s.jsx)(n.code,{children:"boolean"})," | ",(0,s.jsx)(n.code,{children:"string"})," | ",(0,s.jsx)(n.code,{children:"[string, unknow]"})]}),"\n",(0,s.jsxs)(n.p,{children:["Default: ",(0,s.jsx)(n.code,{children:"@changesets/cli/changelog"})]}),"\n",(0,s.jsx)(n.p,{children:"The rule for generating changelog."}),"\n",(0,s.jsxs)(n.p,{children:["When configured as ",(0,s.jsx)(n.code,{children:"false"}),", only the version number will be declared in the ",(0,s.jsx)(n.code,{children:"CHANGELOG.md"})," file when running the ",(0,s.jsx)(n.code,{children:"bump"})," command, and no other changelog information will be declared."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/zq-uylkvT/ljhwZthlaukjlkulzlp/changeset-empty-changelog.png",alt:"Close changelog configuration"})}),"\n",(0,s.jsxs)(n.p,{children:["When configured as ",(0,s.jsx)(n.code,{children:"@changesets/cli/changelog"}),", the official provided changelog generation rule will be used to convert the changeset information into changelog content."]}),"\n",(0,s.jsxs)(n.p,{children:["When configured as an array, the first parameter is a custom NPM package or path, and the second parameter is the default parameter configuration that needs to be passed in. We will explain the custom format in the subsequent ",(0,s.jsx)(n.a,{href:"/guides/topic-detail/changesets/changelog",children:"Custom Changelog"})," section."]}),"\n",(0,s.jsxs)(n.h3,{id:"___experimentalunsafeoptions_will_change_in_patch",children:["___experimentalUnsafeOptions_WILL_CHANGE_IN_PATCH",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#___experimentalunsafeoptions_will_change_in_patch",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"Some experimental configurations."}),"\n",(0,s.jsxs)(n.h4,{id:"onlyupdatepeerdependentswhenoutofrange",children:["onlyUpdatePeerDependentsWhenOutOfRange",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#onlyupdatepeerdependentswhenoutofrange",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["Type: ",(0,s.jsx)(n.code,{children:"boolean"})]}),"\n",(0,s.jsxs)(n.p,{children:["Default: ",(0,s.jsx)(n.code,{children:"false"})]}),"\n",(0,s.jsxs)(n.p,{children:["Configuration for the upgrade strategy of ",(0,s.jsx)(n.code,{children:"peerDependence"})," dependencies. By default, when ",(0,s.jsx)(n.code,{children:"peerDependence"})," is upgraded to a ",(0,s.jsx)(n.code,{children:"minor"})," or ",(0,s.jsx)(n.code,{children:"major"})," version, the current package will be upgraded to a major version."]}),"\n",(0,s.jsxs)(n.p,{children:["When this configuration is set to ",(0,s.jsx)(n.code,{children:"true"}),", the version will only be updated when the declared dependencies of ",(0,s.jsx)(n.code,{children:"peerDependence"})," are outside the declared range."]}),"\n",(0,s.jsxs)(n.h4,{id:"updateinternaldependents",children:["updateInternalDependents",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#updateinternaldependents",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["Type: ",(0,s.jsx)(n.code,{children:"always"})," | ",(0,s.jsx)(n.code,{children:"out-of-range"})]}),"\n",(0,s.jsxs)(n.p,{children:["Default: ",(0,s.jsx)(n.code,{children:"always"})]}),"\n",(0,s.jsxs)(n.p,{children:["When upgrading the version number by running the ",(0,s.jsx)(n.code,{children:"bump"})," command, the dependency declaration using the package in the repository will be automatically updated by default. When this parameter is set to ",(0,s.jsx)(n.code,{children:"out-of-range"}),", the dependency declaration using the package in the repository will be updated only when it is outside the declared range."]}),"\n",(0,s.jsxs)(n.h4,{id:"usecalculatedversionforsnapshots",children:["useCalculatedVersionForSnapshots",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#usecalculatedversionforsnapshots",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["Type: ",(0,s.jsx)(n.code,{children:"boolean"})]}),"\n",(0,s.jsxs)(n.p,{children:["Default: ",(0,s.jsx)(n.code,{children:"false"})]}),"\n",(0,s.jsxs)(n.p,{children:["When publishing snapshots, the version format of ",(0,s.jsx)(n.code,{children:"0.0.0-timestamp"})," will be used by default to ensure that users can use pre-release versions normally. When you need to ignore the above problem and use the normal version number format, that is, the current version is ",(0,s.jsx)(n.code,{children:"1.0.1"}),", and the snapshot version is expected to use ",(0,s.jsx)(n.code,{children:"1.0.1-timestamp"}),", you can configure this parameter as ",(0,s.jsx)(n.code,{children:"true"}),"."]})]})}function a(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,d.useMDXComponents)(),e.components);return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(r,{...e})}):r(e)}var c=a;a.__RSPRESS_PAGE_META={},a.__RSPRESS_PAGE_META["en%2Fguides%2Ftopic-detail%2Fchangesets%2Fconfig.mdx"]={toc:[{text:"Introduction",id:"introduction",depth:2},{text:"commit",id:"commit",depth:3},{text:"access",id:"access",depth:3},{text:"baseBranch",id:"basebranch",depth:3},{text:"ignore",id:"ignore",depth:3},{text:"fixed",id:"fixed",depth:3},{text:"linked",id:"linked",depth:3},{text:"updateInternalDependencies",id:"updateinternaldependencies",depth:3},{text:"changelog",id:"changelog",depth:3},{text:"___experimentalUnsafeOptions_WILL_CHANGE_IN_PATCH",id:"___experimentalunsafeoptions_will_change_in_patch",depth:3},{text:"onlyUpdatePeerDependentsWhenOutOfRange",id:"onlyupdatepeerdependentswhenoutofrange",depth:4},{text:"updateInternalDependents",id:"updateinternaldependents",depth:4},{text:"useCalculatedVersionForSnapshots",id:"usecalculatedversionforsnapshots",depth:4}],title:"Changesets Configuration"};let t={sidebar_position:5}}}]);