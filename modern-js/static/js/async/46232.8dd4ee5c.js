"use strict";(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["46232"],{49762:function(e,n,i){i.r(n),i.d(n,{default:function(){return l}});var s=i(39980),o=i(9580);function t(e){let n=Object.assign({h1:"h1",a:"a",h2:"h2",p:"p",code:"code",pre:"pre",div:"div",ul:"ul",li:"li",strong:"strong"},(0,o.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h1,{id:"introduction",children:["Introduction",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#introduction",children:"#"})]}),"\n",(0,s.jsxs)(n.h2,{id:"modernjs-plugin-system",children:["Modern.js Plugin System",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#modernjs-plugin-system",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"Modern.js offers a comprehensive plugin system with a complete lifecycle. Plugins can be used to extend different stages of project operation, request handling, rendering, and more."}),"\n",(0,s.jsxs)(n.h2,{id:"usage",children:["Usage",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#usage",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["Plugins must be explicitly registered in the configuration file to be effective. When you need to add plugins to Modern.js, you can configure them in the ",(0,s.jsx)(n.code,{children:"[plugins](/configure/app/plugins.html)"})," field:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",meta:'title="edenx.config.ts"',children:"// an example for bff\nimport { appTools, defineConfig } from '@modern-js/app-tools';\nimport { bffPlugin } from '@modern-js/plugin-bff';\n\nexport default defineConfig({\n  plugins: [appTools(), bffPlugin()],\n});\n"})}),"\n",(0,s.jsxs)(n.div,{className:"rspress-directive note",children:[(0,s.jsx)(n.div,{className:"rspress-directive-title",children:"NOTE"}),(0,s.jsx)(n.div,{className:"rspress-directive-content",children:(0,s.jsx)(n.p,{children:"Note that this configuration only supports adding Modern.js plugins and does not support adding Webpack plugins."})})]}),"\n",(0,s.jsxs)(n.h2,{id:"official-plugins",children:["Official Plugins",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#official-plugins",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["Modern.js offers a range of official plugins, which are integrated with the Modern.js generator. All the functionalities of the official plugins can be enabled by executing the ",(0,s.jsx)(n.code,{children:"new"})," command. For instance, to enable the BFF (Backend For Frontend) feature:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"$ npx modern new\n? Please select the operation you want: Enable Features\n? Please select the feature name: (Use arrow keys)\n  Enable Tailwind CSS\n\u276F Enable BFF\n  Enable SSG\n  Enable Micro Frontend\n"})}),"\n",(0,s.jsx)(n.p,{children:"After the selection is completed, the Modern.js generator will automatically install the corresponding plugins and third-party dependencies. Upon completion of the installation, you will see:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"[INFO] Dependency automatic installation succeeded\n\n[INFO] install plugin dependencies success\uFF01add follow code to modern.config.ts :\n\nimport { bffPlugin } from '@modern-js/plugin-bff';\nimport { expressPlugin } from '@modern-js/plugin-express';\n\nexport default defineConfig({\n  ...,\n  plugins: [..., bffPlugin(), expressPlugin()],\n});\n"})}),"\n",(0,s.jsx)(n.p,{children:"At this point, you can add the plugin to the configuration file according to the output in the console."}),"\n",(0,s.jsxs)(n.h2,{id:"composition",children:["Composition",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#composition",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"The Modern.js plugin system is mainly divided into three parts: Hook model, Manager, and Context Sharing Mechanism."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"The Hook model is used to determine the execution logic of the current Hook."}),"\n",(0,s.jsx)(n.li,{children:"The Manager controls the execution and scheduling of Hooks."}),"\n",(0,s.jsx)(n.li,{children:"The Context Sharing Mechanism is used to pass information between different Hooks."}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Currently, Modern.js offers several different Hook models: ",(0,s.jsx)(n.strong,{children:"Pipeline, Waterfall, Workflow"}),"."]}),"\n",(0,s.jsxs)(n.div,{className:"rspress-directive note",children:[(0,s.jsx)(n.div,{className:"rspress-directive-title",children:"NOTE"}),(0,s.jsx)(n.div,{className:"rspress-directive-content",children:(0,s.jsx)(n.p,{children:"Subsequent chapters will introduce the execution methods of each model in detail."})})]}),"\n",(0,s.jsx)(n.p,{children:"Based on the Hook model and Manager, Modern.js exposes three sets of plugins: CLI, Runtime, and Server."}),"\n",(0,s.jsx)(n.p,{children:"Among them, the CLI plugin is the main running flow control model in Modern.js, and most of the features in Modern.js are mainly run through this set of models. The Runtime plugin is mainly responsible for processing the rendering logic of React components. The Server plugin is mainly used for controlling the server lifecycle and user requests."}),"\n",(0,s.jsxs)(n.h2,{id:"what-plugins-can-do",children:["What Plugins Can Do",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#what-plugins-can-do",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"All of Modern.js's features are implemented through this set of plugins, which means that all of Modern.js's capabilities are open to developers. Developers can develop plugins to extend more functionality and adapt to complex scenarios, including but not limited to:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Registering commands"}),"\n",(0,s.jsx)(n.li,{children:"Modifying Modern.js configuration and validation schema"}),"\n",(0,s.jsx)(n.li,{children:"Modifying compilation configurations for Webpack/Babel/Less/Sass/Tailwind CSS/..."}),"\n",(0,s.jsx)(n.li,{children:"Modifying the React components/elements to be rendered at runtime"}),"\n",(0,s.jsx)(n.li,{children:"Modifying page routing"}),"\n",(0,s.jsx)(n.li,{children:"Modifying server routing"}),"\n",(0,s.jsx)(n.li,{children:"Customizing console output"}),"\n",(0,s.jsx)(n.li,{children:"Customizing dynamic HTML templates"}),"\n",(0,s.jsx)(n.li,{children:"Customizing Node.js server frameworks"}),"\n",(0,s.jsx)(n.li,{children:"Customizing React component client/server rendering"}),"\n",(0,s.jsx)(n.li,{children:"..."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"When Modern.js does not currently cover the functionality or scenario that you need, you can develop a custom plugin to implement the related functionality for adapting to special scenarios."})]})}function r(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,o.ah)(),e.components);return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(t,{...e})}):t(e)}let l=r;r.__RSPRESS_PAGE_META={},r.__RSPRESS_PAGE_META["en%2Fguides%2Ftopic-detail%2Fframework-plugin%2Fintroduction.mdx"]={toc:[{text:"Modern.js Plugin System",id:"modernjs-plugin-system",depth:2},{text:"Usage",id:"usage",depth:2},{text:"Official Plugins",id:"official-plugins",depth:2},{text:"Composition",id:"composition",depth:2},{text:"What Plugins Can Do",id:"what-plugins-can-do",depth:2}],title:"Introduction",frontmatter:{sidebar_position:1}}}}]);