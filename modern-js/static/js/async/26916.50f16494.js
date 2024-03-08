/*! For license information please see 26916.50f16494.js.LICENSE.txt */
(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["26916"],{69203:function(e,n,s){"use strict";s.r(n);var r=s("39980"),a=s("96954");function o(e){let n=Object.assign({h1:"h1",a:"a",h3:"h3",p:"p",code:"code",pre:"pre",strong:"strong"},(0,a.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"cli-faq",children:["CLI FAQ",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#cli-faq",children:"#"})]}),"\n",(0,r.jsxs)(n.h3,{id:"unable-to-pass-command-line-arguments-correctly-when-using-pnpm",children:["Unable to pass command line arguments correctly when using pnpm?",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#unable-to-pass-command-line-arguments-correctly-when-using-pnpm",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"There are some differences between pnpm v6 and pnpm v7 in how they execute commands, and the following should be noted:"}),"\n",(0,r.jsx)(n.p,{children:"pnpm v7:"}),"\n",(0,r.jsxs)(n.p,{children:["When using pnpm to call the commands in ",(0,r.jsx)(n.code,{children:"package.json"}),", if you need to pass parameters to pnpm, you need to put the parameters before the command."]}),"\n",(0,r.jsxs)(n.p,{children:["For example, using the pnpm ",(0,r.jsx)(n.code,{children:"--filter"})," parameter to run the prepare command:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'pnpm run --filter "./packages/**" prepare\n'})}),"\n",(0,r.jsx)(n.p,{children:"If you need to pass parameters to the command, you need to put the parameters after the command."}),"\n",(0,r.jsxs)(n.p,{children:["For example, in the following ",(0,r.jsx)(n.code,{children:"package.json"})," configuration:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "scripts": {\n    "command": "modern command"\n  }\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:"The way to pass parameters when running the command is:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"pnpm run command --options\n"})}),"\n",(0,r.jsx)(n.p,{children:"pnpm v6:"}),"\n",(0,r.jsxs)(n.p,{children:["In the following ",(0,r.jsx)(n.code,{children:"package.json"})," configuration:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "scripts": {\n    "command": "modern command"\n  }\n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:["If you need to run ",(0,r.jsx)(n.code,{children:"modern command --option"}),":"]}),"\n",(0,r.jsxs)(n.p,{children:["When using pnpm, you need to run ",(0,r.jsx)(n.code,{children:"pnpm run command -- --option"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["This is because pnpm's handling of command parameters is different from that of Yarn, but similar to that of npm: when the ",(0,r.jsx)(n.code,{children:"--"})," string is not added, the parameters passed are for pnpm; when the ",(0,r.jsx)(n.code,{children:"--"})," string is used, the parameters passed are for running the script."]}),"\n",(0,r.jsxs)(n.p,{children:["In the above example, the ",(0,r.jsx)(n.code,{children:"--option"})," parameter is passed to ",(0,r.jsx)(n.code,{children:"modern command"}),". If you run ",(0,r.jsx)(n.code,{children:"pnpm run command --option"}),", the ",(0,r.jsx)(n.code,{children:"--option"})," parameter will be passed to pnpm."]}),"\n",(0,r.jsx)(n.p,{children:"In summary:"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"When using pnpm v7, if passing parameters to pnpm, the parameters need to be placed before the command."})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsxs)(n.strong,{children:["When using pnpm v6, if the parameters are passed to pnpm, ",(0,r.jsx)(n.code,{children:"--"})," is not required; if the parameters are passed to the script, the ",(0,r.jsx)(n.code,{children:"--"})," string needs to be added."]})})]})}function t(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,a.useMDXComponents)(),e.components);return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}n.default=t,t.__RSPRESS_PAGE_META={},t.__RSPRESS_PAGE_META["en%2Fguides%2Ftroubleshooting%2Fcli.mdx"]={toc:[{text:"Unable to pass command line arguments correctly when using pnpm?",id:"unable-to-pass-command-line-arguments-correctly-when-using-pnpm",depth:3}],title:"CLI FAQ",frontmatter:{sidebar_position:2}}}}]);