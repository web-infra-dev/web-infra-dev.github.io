"use strict";(self.webpackChunk_modern_js_module_tools_docs=self.webpackChunk_modern_js_module_tools_docs||[]).push([["463"],{7527:function(e,n,o){o.r(n),o.d(n,{default:function(){return s}});var d=o(9980),i=o(9580);function t(e){let n=Object.assign({h1:"h1",a:"a",p:"p",code:"code",h2:"h2",ol:"ol",li:"li",ul:"ul",pre:"pre"},(0,i.ah)(),e.components);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.h1,{id:"in-depth-understanding-of-the-dev-command",children:["In-depth understanding of the dev command",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#in-depth-understanding-of-the-dev-command",children:"#"})]}),"\n",(0,d.jsxs)(n.p,{children:["The ",(0,d.jsx)(n.code,{children:"dev"})," command provided by the Modern.js Module is mainly used for debugging the code."]}),"\n",(0,d.jsxs)(n.h2,{id:"the-overall-flow-of-the-command-run",children:["The overall flow of the command run",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#the-overall-flow-of-the-command-run",children:"#"})]}),"\n",(0,d.jsxs)(n.ol,{children:["\n",(0,d.jsxs)(n.li,{children:["When the ",(0,d.jsx)(n.code,{children:"dev"})," command is executed, Modern.js Module starts looking for debugging tools or tasks that can be executed. A debugging tool or task is a Modern.js Module debugging tool plugin like module doc."]}),"\n",(0,d.jsx)(n.li,{children:"When a debugging tool is found, it is executed immediately."}),"\n",(0,d.jsx)(n.li,{children:"When multiple debugging tools are found, the debugging tools list menu is displayed. A debug tool can be started by selecting the name option corresponding to it."}),"\n",(0,d.jsx)(n.li,{children:"When no debug tool is found, the user is informed that no debug tool is available."}),"\n"]}),"\n",(0,d.jsxs)(n.p,{children:["In addition to the ",(0,d.jsx)(n.code,{children:"dev"})," command, you can also start a debugging tool or task directly by using the ",(0,d.jsx)(n.code,{children:"dev [debug tool name]"})," option."]}),"\n",(0,d.jsxs)(n.h2,{id:"extending-the-dev-command",children:["Extending the dev command",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#extending-the-dev-command",children:"#"})]}),"\n",(0,d.jsx)(n.p,{children:"If you need to extend the dev command, or rather provide your own Modern.js Module debugging tool plugin, then you will need to know the following first."}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.a,{href:"/plugins/guide/getting-started",children:"Development of plugins"})}),"\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.a,{href:"/api/plugin-api/plugin-hooks#dev-hooks",children:"Debugging Tools Plugin API"})}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:"In general, the code to implement a debugging tool that does nothing and the associated configuration is as follows."}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",meta:"do-nothing.ts",children:"export const myPlugin = (): CliPlugin<ModuleTools> => ({\n  name: 'do-nothing',\n  setup() {\n    return {\n      registerDev() {\n        return {\n          // Debugging tool name\n          name: 'do-nothing',\n          // Menu display content\n          menuItem: {\n            name: 'DoNothing',\n            value: 'do-nothing',\n          },\n          // The defined dev subcommand\n          subCommands: ['donothing', 'dn'],\n          async action() {\n            // dev logic\n            console.info('Run build --watch, and do nothing.');\n          },\n        };\n      },\n    };\n  },\n});\n"})}),"\n",(0,d.jsx)(n.p,{children:"If this debugging tool plugin is required, it needs to be added to the configuration file."}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",children:"import doNothingPlugin from './plugins/do-nothing';\n\nexport default defineConfig({\n  plugins: [\n    //..\n    doNothingPlugin()\n  ],\n});\n"})}),"\n",(0,d.jsxs)(n.p,{children:["At this point we can execute it when we execute the ",(0,d.jsx)(n.code,{children:"dev"})," or ",(0,d.jsx)(n.code,{children:"dev do-nothing"})," command. After execution, it will first execute the source build task in listening mode and print the log messages immediately afterwards."]}),"\n",(0,d.jsxs)(n.p,{children:["For currently officially supported debugging tools and third-party supported debugging tools, you can view them in ",(0,d.jsx)(n.a,{href:"/plugins/official-list/overview",children:"plugins list"}),"."]})]})}function l(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(t,{...e})}):t(e)}let s=l;l.__RSPRESS_PAGE_META={},l.__RSPRESS_PAGE_META["en%2Fguide%2Fadvance%2Fin-depth-about-dev-command.md"]={toc:[{text:"The overall flow of the command run",id:"the-overall-flow-of-the-command-run",depth:2},{text:"Extending the dev command",id:"extending-the-dev-command",depth:2}],title:"In-depth understanding of the dev command",frontmatter:{sidebar_position:2}}}}]);