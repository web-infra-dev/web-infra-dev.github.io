(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["78434"],{50862:function(e,n,s){"use strict";s.r(n),s.d(n,{default:function(){return p}});var r,a=s("10310"),o=s("81904"),t=s("98638"),d=s("21968");function c(e){let n=Object.assign({h1:"h1",a:"a",h3:"h3",p:"p",code:"code",pre:"pre",strong:"strong"},(0,d.useMDXComponents)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.h1,{id:"cli-faq",children:["CLI FAQ",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#cli-faq",children:"#"})]}),"\n",(0,t.jsxs)(n.h3,{id:"unable-to-pass-command-line-arguments-correctly-when-using-pnpm",children:["Unable to pass command line arguments correctly when using pnpm?",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#unable-to-pass-command-line-arguments-correctly-when-using-pnpm",children:"#"})]}),"\n",(0,t.jsx)(n.p,{children:"There are some differences between pnpm v6 and pnpm v7 in how they execute commands, and the following should be noted:"}),"\n",(0,t.jsx)(n.p,{children:"pnpm v7:"}),"\n",(0,t.jsxs)(n.p,{children:["When using pnpm to call the commands in ",(0,t.jsx)(n.code,{children:"package.json"}),", if you need to pass parameters to pnpm, you need to put the parameters before the command."]}),"\n",(0,t.jsxs)(n.p,{children:["For example, using the pnpm ",(0,t.jsx)(n.code,{children:"--filter"})," parameter to run the prepare command:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'pnpm run --filter "./packages/**" prepare\n'})}),"\n",(0,t.jsx)(n.p,{children:"If you need to pass parameters to the command, you need to put the parameters after the command."}),"\n",(0,t.jsxs)(n.p,{children:["For example, in the following ",(0,t.jsx)(n.code,{children:"package.json"})," configuration:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "scripts": {\n    "command": "modern command"\n  }\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:"The way to pass parameters when running the command is:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"pnpm run command --options\n"})}),"\n",(0,t.jsx)(n.p,{children:"pnpm v6:"}),"\n",(0,t.jsxs)(n.p,{children:["In the following ",(0,t.jsx)(n.code,{children:"package.json"})," configuration:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "scripts": {\n    "command": "modern command"\n  }\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["If you need to run ",(0,t.jsx)(n.code,{children:"modern command --option"}),":"]}),"\n",(0,t.jsxs)(n.p,{children:["When using pnpm, you need to run ",(0,t.jsx)(n.code,{children:"pnpm run command -- --option"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["This is because pnpm's handling of command parameters is different from that of Yarn, but similar to that of npm: when the ",(0,t.jsx)(n.code,{children:"--"})," string is not added, the parameters passed are for pnpm; when the ",(0,t.jsx)(n.code,{children:"--"})," string is used, the parameters passed are for running the script."]}),"\n",(0,t.jsxs)(n.p,{children:["In the above example, the ",(0,t.jsx)(n.code,{children:"--option"})," parameter is passed to ",(0,t.jsx)(n.code,{children:"modern command"}),". If you run ",(0,t.jsx)(n.code,{children:"pnpm run command --option"}),", the ",(0,t.jsx)(n.code,{children:"--option"})," parameter will be passed to pnpm."]}),"\n",(0,t.jsx)(n.p,{children:"In summary:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"When using pnpm v7, if passing parameters to pnpm, the parameters need to be placed before the command."})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsxs)(n.strong,{children:["When using pnpm v6, if the parameters are passed to pnpm, ",(0,t.jsx)(n.code,{children:"--"})," is not required; if the parameters are passed to the script, the ",(0,t.jsx)(n.code,{children:"--"})," string needs to be added."]})})]})}(r=globalThis).__RSPRESS_PAGE_META||(r.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["en%2Fguides%2Ftroubleshooting%2Fcli.mdx"]={toc:[{text:"Unable to pass command line arguments correctly when using pnpm?",id:"unable-to-pass-command-line-arguments-correctly-when-using-pnpm",depth:3}],title:"CLI FAQ",frontmatter:{sidebar_position:2}};var p=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,d.useMDXComponents)(),e.components);return n?(0,t.jsx)(n,(0,o._)((0,a._)({},e),{children:(0,t.jsx)(c,(0,a._)({},e))})):c(e)}}}]);