"use strict";(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["16736"],{17706:function(e,n,t){t.r(n),t.d(n,{default:function(){return l}});var i=t(39980),r=t(9580);function s(e){let n=Object.assign({h1:"h1",a:"a",p:"p",ul:"ul",li:"li",h2:"h2",code:"code",h3:"h3",pre:"pre",div:"div"},(0,r.ah)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.h1,{id:"introduction",children:["Introduction",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#introduction",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"There are two types of generator plugin:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Extension: Web App(Npm Module) = Web App(Npm Module) + Generator Plugin"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Custom: New Application(Npm Module) = Web App(Npm Module) + Generator Plugin"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"In simpler terms, extension means using the original project name of Modern.js, while custom means creating a new name."}),"\n",(0,i.jsxs)(n.h2,{id:"identifier",children:["Identifier",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#identifier",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["The type of generator plugin is provided through the ",(0,i.jsx)(n.code,{children:"meta"})," field in ",(0,i.jsx)(n.code,{children:"package.json"}),":"]}),"\n",(0,i.jsxs)(n.h3,{id:"extension",children:["Extension",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#extension",children:"#"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",meta:'title="package.json"',children:'{\n "meta": {\n    "extend": "mwa" // module\n }\n}\n'})}),"\n",(0,i.jsxs)(n.h3,{id:"custom",children:["Custom",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#custom",children:"#"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",meta:'title="package.json"',children:'{\n "meta": {\n    "key": "new_app",\n    "name": "new App",\n    "type": "mwa" // module and custom\n }\n}\n'})}),"\n",(0,i.jsxs)(n.div,{className:"rspress-directive info",children:[(0,i.jsx)(n.div,{className:"rspress-directive-title",children:"INFO"}),(0,i.jsx)(n.div,{className:"rspress-directive-content",children:(0,i.jsxs)(n.p,{children:["For custom type, the ",(0,i.jsx)(n.code,{children:"type"})," field supports the ",(0,i.jsx)(n.code,{children:"custom"})," value, which utilizes some best practice templates for project development provided by Modern.js, such as ",(0,i.jsx)(n.code,{children:".gitignore"}),", ",(0,i.jsx)(n.code,{children:".editorConfig"}),", etc. Other business-related code templates need to be manually provided through generator plugin.\n"]})})]}),"\n",(0,i.jsxs)(n.h1,{id:"creating-initial-project",children:["Creating Initial Project",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#creating-initial-project",children:"#"})]}),"\n",(0,i.jsxs)(n.h3,{id:"extension-1",children:["Extension",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#extension-1",children:"#"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"npx @modern-js/create@latest plugin --plugin @modern-js/generator-plugin-plugin\n? Please select the type of project you want to create: Npm Module\n? Please select the project scenario: Generator Plugin\n? Please fill in the package name of the generator plugin: plugin\n? Please select the programming language: TS\n? Please select the package manager: pnpm\n? Please select the type of plugin: extend\n? Please select the base type of the plugin: Web App\n"})}),"\n",(0,i.jsxs)(n.h3,{id:"custom-1",children:["Custom",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#custom-1",children:"#"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"npx @modern-js/create@latest plugin --plugin @modern-js/generator-plugin-plugin\n? Please select the type of project you want to create: Npm Module\n? Please select the project scenario: Generator Plugin\n? Please fill in the package name of the generator plugin: plugin\n? Please select the programming language: TS\n? Please select the package manager: pnpm\n? Please select the type of plugin: custom\n? Please fill in the plugin keyword: new_app\n? Please fill in the display name of the plugin: new App\n? Please select the base type of the plugin: Web App\n"})}),"\n",(0,i.jsxs)(n.h2,{id:"execution-order",children:["Execution Order",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#execution-order",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["Generator plugins support using multiple plugins at the same time, which means that multiple ",(0,i.jsx)(n.code,{children:"--plugin"})," parameters are supported when executing ",(0,i.jsx)(n.code,{children:"@modern-js/create"}),"."]}),"\n",(0,i.jsxs)(n.h3,{id:"extension-2",children:["Extension",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#extension-2",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"For extension generator plugins, when executing with the declared generator plugin parameters, the corresponding lifecycle functions of the project scheme that is extended will be executed in order."}),"\n",(0,i.jsxs)(n.p,{children:["For example, if there are two generator plugins A and B, both of which extend the Modern.js application scheme. A plugin declares to add the ",(0,i.jsx)(n.code,{children:"a.ts"})," file, and B plugin declares to add the ",(0,i.jsx)(n.code,{children:"b.ts"})," file. When executing ",(0,i.jsx)(n.code,{children:"npx @modern-js/create@latest --plugin A --plugin B"}),", and selecting the Web APP scheme, the default project files of the Web APP will be generated first. Then, the A plugin will create the ",(0,i.jsx)(n.code,{children:"a.ts"})," file, and then the B plugin will generate the ",(0,i.jsx)(n.code,{children:"b.ts"})," file."]}),"\n",(0,i.jsxs)(n.h3,{id:"custom-2",children:["Custom",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#custom-2",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["For custom generator plugins, only one plugin can be executed at a time. When declaring the ",(0,i.jsx)(n.code,{children:"--plugin"})," parameter for ",(0,i.jsx)(n.code,{children:"@modern-js/create"}),", a selection option for the scenario of choosing the project scheme will be added after selecting the project scheme, which is the new name defined in the ",(0,i.jsx)(n.code,{children:"package.json"}),". Choosing the corresponding generator plugin for the name will execute the corresponding generator plugin logic after the default project scheme is completed. When declaring the ",(0,i.jsx)(n.code,{children:"--plugin"})," parameter, the corresponding generator plugin names will be listed one by one for selection in the project scheme scenario."]})]})}function a(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(s,{...e})}):s(e)}let l=a;a.__RSPRESS_PAGE_META={},a.__RSPRESS_PAGE_META["en%2Fguides%2Ftopic-detail%2Fgenerator%2Fplugin%2Fcategory.md"]={toc:[{text:"Identifier",id:"identifier",depth:2},{text:"Extension",id:"extension",depth:3},{text:"Custom",id:"custom",depth:3},{text:"Extension",id:"extension-1",depth:3},{text:"Custom",id:"custom-1",depth:3},{text:"Execution Order",id:"execution-order",depth:2},{text:"Extension",id:"extension-2",depth:3},{text:"Custom",id:"custom-2",depth:3}],title:"Creating Initial Project",frontmatter:{sidebar_position:2}}}}]);