(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["27515"],{1975:function(e,n,i){"use strict";i.r(n),i.d(n,{default:function(){return l}});var s=i("9880"),t=i("23169");function r(e){let n=Object.assign({h1:"h1",a:"a",h2:"h2",p:"p",ul:"ul",li:"li",div:"div"},(0,t.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h1,{id:"introduction",children:["Introduction",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#introduction",children:"#"})]}),"\n",(0,s.jsxs)(n.h2,{id:"modernjs-plugin-system",children:["Modern.js Plugin System",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#modernjs-plugin-system",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"Modern.js is a system used for extending the functionality of a project at different stages such as running, requesting, and rendering. It mainly consists of three parts: the Hook model, the Manager, and the Context Sharing mechanism."}),"\n",(0,s.jsx)(n.p,{children:"The Hook model is used to determine the execution method of the current Hook, and functions with different Hook models have different execution logics. The Manager is used to control the execution and scheduling of Hooks. The Context Sharing mechanism is used to pass information between different Hooks."}),"\n",(0,s.jsx)(n.p,{children:"Currently, Modern.js provides several different Hook models:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Pipeline","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Sync"}),"\n",(0,s.jsx)(n.li,{children:"Async"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Waterfall","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Sync"}),"\n",(0,s.jsx)(n.li,{children:"Async"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Workflow","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Sync"}),"\n",(0,s.jsx)(n.li,{children:"Async"}),"\n",(0,s.jsx)(n.li,{children:"Parallel(Async)"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.div,{className:"rspress-directive note",children:[(0,s.jsx)(n.div,{className:"rspress-directive-title",children:"NOTE"}),(0,s.jsx)(n.div,{className:"rspress-directive-content",children:(0,s.jsx)(n.p,{children:"Subsequent chapters will introduce the execution methods of each model in detail."})})]}),"\n",(0,s.jsx)(n.p,{children:"Based on the Hook model and Manager, Modern.js exposes three sets of plugins: CLI, Runtime, and Server."}),"\n",(0,s.jsx)(n.p,{children:"Among them, the CLI plugin is the main running flow control model in Modern.js, and most of the features in Modern.js are mainly run through this set of models. The Runtime plugin is mainly responsible for processing the rendering logic of React components. The Server plugin is mainly used for controlling the server lifecycle and user requests."}),"\n",(0,s.jsxs)(n.h2,{id:"what-plugins-can-do",children:["What Plugins Can Do",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#what-plugins-can-do",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"All of Modern.js's features are implemented through this set of plugins, which means that all of Modern.js's capabilities are open to developers. Developers can develop plugins to extend more functionality and adapt to complex scenarios, including but not limited to:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Registering commands"}),"\n",(0,s.jsx)(n.li,{children:"Modifying Modern.js configuration and validation schema"}),"\n",(0,s.jsx)(n.li,{children:"Modifying compilation configurations for Webpack/Babel/Less/Sass/Tailwind CSS/..."}),"\n",(0,s.jsx)(n.li,{children:"Modifying the React components/elements to be rendered at runtime"}),"\n",(0,s.jsx)(n.li,{children:"Modifying page routing"}),"\n",(0,s.jsx)(n.li,{children:"Modifying server routing"}),"\n",(0,s.jsx)(n.li,{children:"Customizing console output"}),"\n",(0,s.jsx)(n.li,{children:"Customizing dynamic HTML templates"}),"\n",(0,s.jsx)(n.li,{children:"Customizing Node.js server frameworks"}),"\n",(0,s.jsx)(n.li,{children:"Customizing React component client/server rendering"}),"\n",(0,s.jsx)(n.li,{children:"..."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"When Modern.js does not currently cover the functionality or scenario that you need, you can develop a custom plugin to implement the related functionality for adapting to special scenarios."})]})}function o(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,t.useMDXComponents)(),e.components);return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(r,{...e})}):r(e)}var l=o;o.__RSPRESS_PAGE_META={},o.__RSPRESS_PAGE_META["en%2Fguides%2Ftopic-detail%2Fframework-plugin%2Fintroduction.mdx"]={toc:[{text:"Modern.js Plugin System",id:"modernjs-plugin-system",depth:2},{text:"What Plugins Can Do",id:"what-plugins-can-do",depth:2}],title:"Introduction",frontmatter:{sidebar_position:1}}}}]);