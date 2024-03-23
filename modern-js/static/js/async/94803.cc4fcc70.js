/*! For license information please see 94803.cc4fcc70.js.LICENSE.txt */
(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["94803"],{58:function(e,i,n){"use strict";n.r(i);var r=n("39980"),t=n("76713");function d(e){let i=Object.assign({h1:"h1",a:"a",p:"p",code:"code",h2:"h2",pre:"pre",h3:"h3",ul:"ul",li:"li"},(0,t.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(i.h1,{id:"afterforged",children:["afterForged",(0,r.jsx)(i.a,{className:"header-anchor","aria-hidden":"true",href:"#afterforged",children:"#"})]}),"\n",(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.code,{children:"afterForged"})," is a lifecycle function used for other step operations after file operations in generator plugin."]}),"\n",(0,r.jsxs)(i.h2,{id:"types",children:["Types",(0,r.jsx)(i.a,{className:"header-anchor","aria-hidden":"true",href:"#types",children:"#"})]}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-ts",children:"export type AfterForgedAPI = {\n  isInGitRepo: () => Promise<boolean>;\n  initGitRepo: () => Promise<void>;\n  gitAddAndCommit: (commitMessage: string) => Promise<void>;\n  install: () => Promise<void>;\n};\n\nexport type PluginAfterForgedFunc = (api: AfterForgedAPI, inputData: Record<string, unknown>) => Promise<void>;\n\nexport interface IPluginContext {\n   afterForged: (func: PluginAfterForgedFunc) => void;\n  ...\n}\n"})}),"\n",(0,r.jsxs)(i.h2,{id:"api",children:["API",(0,r.jsx)(i.a,{className:"header-anchor","aria-hidden":"true",href:"#api",children:"#"})]}),"\n",(0,r.jsxs)(i.p,{children:["The APIs provided by the ",(0,r.jsx)(i.code,{children:"api"})," parameter will be introduced below."]}),"\n",(0,r.jsxs)(i.h3,{id:"isingitrepo",children:["isInGitRepo",(0,r.jsx)(i.a,{className:"header-anchor","aria-hidden":"true",href:"#isingitrepo",children:"#"})]}),"\n",(0,r.jsx)(i.p,{children:"Checks whether the current project is a git repository."}),"\n",(0,r.jsxs)(i.h3,{id:"initgitrepo",children:["initGitRepo",(0,r.jsx)(i.a,{className:"header-anchor","aria-hidden":"true",href:"#initgitrepo",children:"#"})]}),"\n",(0,r.jsx)(i.p,{children:"Initializes the current project as a git repository."}),"\n",(0,r.jsxs)(i.h3,{id:"gitaddandcommit",children:["gitAddAndCommit",(0,r.jsx)(i.a,{className:"header-anchor","aria-hidden":"true",href:"#gitaddandcommit",children:"#"})]}),"\n",(0,r.jsx)(i.p,{children:"Commits changes to the current repository."}),"\n",(0,r.jsx)(i.p,{children:"Parameters:"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"commitMessage"}),": commit message."]}),"\n"]}),"\n",(0,r.jsxs)(i.h3,{id:"install",children:["install",(0,r.jsx)(i.a,{className:"header-anchor","aria-hidden":"true",href:"#install",children:"#"})]}),"\n",(0,r.jsxs)(i.p,{children:["Installs dependencies in the root directory of the project. The ",(0,r.jsx)(i.code,{children:"install"})," function will use the corresponding package manager according to the value of ",(0,r.jsx)(i.code,{children:"packageManager"})," to install dependencies."]})]})}function s(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:i}=Object.assign({},(0,t.useMDXComponents)(),e.components);return i?(0,r.jsx)(i,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}i.default=s,s.__RSPRESS_PAGE_META={},s.__RSPRESS_PAGE_META["en%2Fguides%2Ftopic-detail%2Fgenerator%2Fplugin%2Fapi%2FafterForged.md"]={toc:[{text:"Types",id:"types",depth:2},{text:"API",id:"api",depth:2},{text:"isInGitRepo",id:"isingitrepo",depth:3},{text:"initGitRepo",id:"initgitrepo",depth:3},{text:"gitAddAndCommit",id:"gitaddandcommit",depth:3},{text:"install",id:"install",depth:3}],title:"afterForged",frontmatter:{sidebar_position:3}}}}]);