/*! For license information please see 64380.c4d0ad1d.js.LICENSE.txt */
(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["64380"],{14761:function(e,n,r){"use strict";r.r(n);var s=r("39980"),d=r("96954"),a=r("69553");function i(e){let n=Object.assign({h1:"h1",a:"a",h2:"h2",p:"p",code:"code",pre:"pre",div:"div",strong:"strong",h3:"h3"},(0,d.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h1,{id:"upgrading",children:["Upgrading",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#upgrading",children:"#"})]}),"\n",(0,s.jsxs)(n.h2,{id:"upgrade-with-command",children:["Upgrade with command",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#upgrade-with-command",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["Modern.js provides the ",(0,s.jsx)(n.code,{children:"upgrade"})," command to support upgrading the project to the latest version of Modern.js."]}),"\n",(0,s.jsxs)(n.p,{children:["Run the ",(0,s.jsx)(n.code,{children:"upgrade"})," script in the project:"]}),"\n","\n",(0,s.jsx)(a.PackageManagerTabs,{command:"run upgrade"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"> modern upgrade\n\n[INFO] [Project Type]: Web App\n[INFO] [Modern.js Latest Version]: 2.0.0\n[INFO] Upgrade Modern.js package version success!\n"})}),"\n",(0,s.jsxs)(n.p,{children:["You can see that the dependencies in the project's ",(0,s.jsx)(n.code,{children:"package.json"})," have been updated to the latest version."]}),"\n",(0,s.jsxs)(n.div,{className:"rspress-directive tip",children:[(0,s.jsx)(n.div,{className:"rspress-directive-title",children:"TIP"}),(0,s.jsx)(n.div,{className:"rspress-directive-content",children:(0,s.jsxs)(n.p,{children:["If the ",(0,s.jsx)(n.code,{children:"upgrade"})," command is not declared in the project's ",(0,s.jsx)(n.code,{children:"package.json"}),", you can execute ",(0,s.jsx)(n.code,{children:"npx modern upgrade"})," as an equivalent alternative.\n"]})})]}),"\n",(0,s.jsxs)(n.h2,{id:"upgrade-to-a-specified-version",children:["Upgrade to a specified version",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#upgrade-to-a-specified-version",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["All packages of Modern.js are currently released with a ",(0,s.jsx)(n.strong,{children:"uniform version number"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["According to the ",(0,s.jsx)(n.a,{href:"https://github.com/web-infra-dev/modern.js/releases",target:"_blank",rel:"noopener noreferrer",children:"Release Note"})," on the official website, developers can also manually upgrade the project to the desired version."]}),"\n",(0,s.jsxs)(n.div,{className:"rspress-directive tip",children:[(0,s.jsx)(n.div,{className:"rspress-directive-title",children:"TIP"}),(0,s.jsxs)(n.div,{className:"rspress-directive-content",children:[(0,s.jsx)(n.p,{children:"When upgrading, you need to upgrade all packages provided by Modern.js, instead of upgrading a single dependency."}),"\n"]})]}),"\n",(0,s.jsxs)(n.h2,{id:"lock-nested-dependency",children:["Lock nested dependency",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#lock-nested-dependency",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"When a nested dependency of the project has a problem and Modern.js cannot be updated immediately, you can use the package manager to lock the version of the nested dependency."}),"\n",(0,s.jsxs)(n.h3,{id:"pnpm",children:["pnpm",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#pnpm",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["For projects using pnpm, add the following configuration to the ",(0,s.jsx)(n.code,{children:"package.json"})," in the ",(0,s.jsx)(n.strong,{children:"root directory"})," of the project, and then run ",(0,s.jsx)(n.code,{children:"pnpm install"})," again:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",meta:'title="package.json"',children:'{\n  "pnpm": {\n    "overrides": {\n      "package-name": "^1.0.0"\n    }\n  }\n}\n'})}),"\n",(0,s.jsxs)(n.h3,{id:"yarn",children:["Yarn",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#yarn",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["For projects using Yarn, add the following configuration to the ",(0,s.jsx)(n.code,{children:"package.json"})," in the ",(0,s.jsx)(n.strong,{children:"root directory"})," of the project, and then run ",(0,s.jsx)(n.code,{children:"yarn install"})," again:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",meta:'title="package.json"',children:'{\n  "resolutions": {\n    "package-name": "^1.0.0"\n  }\n}\n'})}),"\n",(0,s.jsxs)(n.h3,{id:"npm",children:["Npm",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#npm",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["For projects using Npm, add the following configuration to the ",(0,s.jsx)(n.code,{children:"package.json"})," in the ",(0,s.jsx)(n.strong,{children:"root directory"})," of the project, and then run ",(0,s.jsx)(n.code,{children:"npm install"})," again:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",meta:'title="package.json"',children:'{\n  "overrides": {\n    "package-name": "^1.0.0"\n  }\n}\n'})}),"\n",(0,s.jsxs)(n.div,{className:"rspress-directive info",children:[(0,s.jsx)(n.div,{className:"rspress-directive-title",children:"INFO"}),(0,s.jsxs)(n.div,{className:"rspress-directive-content",children:[(0,s.jsxs)(n.p,{children:["For Monorepo repositories, you can only lock dependency versions in the ",(0,s.jsx)(n.code,{children:"package.json"})," in the root directory of the project, and it will affect all packages in the Monorepo."]}),"\n"]})]})]})}function c(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,d.useMDXComponents)(),e.components);return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(i,{...e})}):i(e)}n.default=c,c.__RSPRESS_PAGE_META={},c.__RSPRESS_PAGE_META["en%2Fguides%2Fget-started%2Fupgrade.mdx"]={toc:[{text:"Upgrade with command",id:"upgrade-with-command",depth:2},{text:"Upgrade to a specified version",id:"upgrade-to-a-specified-version",depth:2},{text:"Lock nested dependency",id:"lock-nested-dependency",depth:2},{text:"pnpm",id:"pnpm",depth:3},{text:"Yarn",id:"yarn",depth:3},{text:"Npm",id:"npm",depth:3}],title:"Upgrading",frontmatter:{sidebar_position:3}}}}]);