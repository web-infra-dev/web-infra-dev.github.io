(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["46706"],{53939:function(e,s,r){"use strict";r.r(s),r.d(s,{default:function(){return h}});var n=r("9880"),a=r("23169");function t(e){let s=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",div:"div",h4:"h4",pre:"pre",code:"code",ul:"ul",li:"li",h3:"h3"},(0,a.useMDXComponents)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(s.h1,{id:"publishing-pre-release-version",children:["Publishing Pre-Release Version",(0,n.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#publishing-pre-release-version",children:"#"})]}),"\n",(0,n.jsx)(s.p,{children:"Before doing an actual release, we also need to publish a pre-release version for internal testing and user use. Changesets also support publishing pre-release versions."}),"\n",(0,n.jsxs)(s.h2,{id:"steps",children:["Steps",(0,n.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#steps",children:"#"})]}),"\n",(0,n.jsxs)(s.div,{className:"rspress-directive info",children:[(0,n.jsx)(s.div,{className:"rspress-directive-title",children:"INFO"}),(0,n.jsx)(s.div,{className:"rspress-directive-content",children:(0,n.jsx)(s.p,{children:"The following example commands are all using pnpm. If you need to use other package managers, please replace them as needed."})})]}),"\n",(0,n.jsxs)(s.h4,{id:"run-the-bump-command-to-upgrade-the-version-of-the-pre-release",children:["Run the bump command to upgrade the version of the pre-release",(0,n.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#run-the-bump-command-to-upgrade-the-version-of-the-pre-release",children:"#"})]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"pnpm run bump --canary --preid <preid>\n"})}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"preid"})," is the tag for the pre-release version, such as ",(0,n.jsx)(s.code,{children:"alpha"}),", ",(0,n.jsx)(s.code,{children:"beta"}),", etc., and the default value is ",(0,n.jsx)(s.code,{children:"next"}),"."]}),"\n",(0,n.jsxs)(s.p,{children:["After using the ",(0,n.jsx)(s.code,{children:"--canary"})," parameter, the ",(0,n.jsx)(s.code,{children:"bump"})," command completes the following three steps:"]}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"changeset pre enter <preid>"}),": Enters pre-release mode."]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"changeset version"}),": Upgrades the version."]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"changeset pre exit"}),": Exits pre-release mode."]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(s.h4,{id:"check-the-changes-and-submit",children:["Check the changes and submit",(0,n.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#check-the-changes-and-submit",children:"#"})]}),"\n",(0,n.jsx)(s.p,{children:"Check whether the version changes are correct and submit the changes."}),"\n",(0,n.jsx)(s.p,{children:"It is recommended to perform pre-release operations not on the main branch and not merge them into the main branch. After the pre-release verification is completed, an actual version can be directly released based on the main branch."}),"\n",(0,n.jsxs)(s.h4,{id:"run-the-release-command-to-publish-the-pre-release-version",children:["Run the release command to publish the pre-release version:",(0,n.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#run-the-release-command-to-publish-the-pre-release-version",children:"#"})]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"pnpm run release --tag <tag>\n"})}),"\n",(0,n.jsxs)(s.p,{children:["When publishing a pre-release version, you must use the ",(0,n.jsx)(s.code,{children:"--tag"})," parameter. The parameter value is best the same as the ",(0,n.jsx)(s.code,{children:"preid"})," value to facilitate user use."]}),"\n",(0,n.jsxs)(s.h2,{id:"notes",children:["Notes",(0,n.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#notes",children:"#"})]}),"\n",(0,n.jsxs)(s.h3,{id:"exiting-pre-release-mode",children:["Exiting pre-release mode",(0,n.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#exiting-pre-release-mode",children:"#"})]}),"\n",(0,n.jsxs)(s.p,{children:["After entering pre-release mode, changesets will automatically create a ",(0,n.jsx)(s.code,{children:"pre.json"})," file in the ",(0,n.jsx)(s.code,{children:".changeset"})," directory to record some status information when entering pre-release mode. When the status information is inconsistent with the current repository status, you can directly delete this file to exit pre-release mode."]})]})}function i(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:s}=Object.assign({},(0,a.useMDXComponents)(),e.components);return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(t,{...e})}):t(e)}var h=i;i.__RSPRESS_PAGE_META={},i.__RSPRESS_PAGE_META["en%2Fguides%2Ftopic-detail%2Fchangesets%2Frelease-pre.mdx"]={toc:[{text:"Steps",id:"steps",depth:2},{text:"Run the bump command to upgrade the version of the pre-release",id:"run-the-bump-command-to-upgrade-the-version-of-the-pre-release",depth:4},{text:"Check the changes and submit",id:"check-the-changes-and-submit",depth:4},{text:"Run the release command to publish the pre-release version:",id:"run-the-release-command-to-publish-the-pre-release-version",depth:4},{text:"Notes",id:"notes",depth:2},{text:"Exiting pre-release mode",id:"exiting-pre-release-mode",depth:3}],title:"Publishing Pre-Release Version",frontmatter:{sidebar_position:4}}}}]);