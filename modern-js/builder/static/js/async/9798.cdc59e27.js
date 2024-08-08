"use strict";(self.webpackChunk_modern_js_builder_doc=self.webpackChunk_modern_js_builder_doc||[]).push([["9798"],{6890:function(e,n,r){r.r(n),r.d(n,{default:function(){return o}});var i=r(8093),a=r(5878);function l(e){let n=Object.assign({h1:"h1",a:"a",p:"p",ul:"ul",li:"li",h2:"h2",pre:"pre",code:"code",h3:"h3"},(0,a.ah)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.h1,{id:"hot-module-replacement",children:["Hot Module Replacement",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#hot-module-replacement",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"Hot Module Replacement (HMR) exchanges, adds, or removes modules while an application is running, without a full reload. This can significantly speed up development in a few ways:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Retain application state which is lost during a full reload."}),"\n",(0,i.jsx)(n.li,{children:"Save valuable development time by only updating what's changed."}),"\n",(0,i.jsx)(n.li,{children:"Instantly update the browser when modifications are made to CSS/JS in the source code, which is almost comparable to changing styles directly in the browser's dev tools."}),"\n"]}),"\n",(0,i.jsxs)(n.h2,{id:"enabling-hmr",children:["Enabling HMR",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#enabling-hmr",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"Builder has built-in support for HMR. By default, HMR is enabled in development."}),"\n",(0,i.jsxs)(n.p,{children:["By setting ",(0,i.jsx)(n.a,{href:"/en/api/config-dev.html#devhmr",children:"dev.hmr"})," to false, HMR can be disabled, which the HMR and react-refresh will no longer work."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"export default {\n  dev: {\n    hmr: false,\n  },\n};\n"})}),"\n",(0,i.jsxs)(n.h2,{id:"specify-hmr-url",children:["Specify HMR URL",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#specify-hmr-url",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"By default, Builder uses the host and port number of the current page to splice the WebSocket URL of HMR."}),"\n",(0,i.jsxs)(n.p,{children:["When the HMR connection fails, you can specify the WebSocket URL by customizing ",(0,i.jsx)(n.code,{children:"devServer.client"})," configuration."]}),"\n",(0,i.jsxs)(n.h3,{id:"default-config",children:["Default Config",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#default-config",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"The default config are as follows, Builder will automatically deduce the URL of the WebSocket request according to the current location:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"export default {\n  tools: {\n    devServer: {\n      client: {\n        path: '/webpack-hmr',\n        // Equivalent to port of the dev server\n        port: '',\n        // Equivalent to location.hostname\n        host: '',\n        // Equivalent to location.protocol === 'https:' ? 'wss' : 'ws'\n        protocol: '',\n      },\n    },\n  },\n};\n"})}),"\n",(0,i.jsxs)(n.h3,{id:"proxy",children:["Proxy",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#proxy",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["If you are proxying an online page to local development, WebSocket requests will fail to connect. You can try configuring ",(0,i.jsx)(n.code,{children:"devServer.client"})," to the following values so that HMR requests can reach the local Dev Server."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"export default {\n  tools: {\n    devServer: {\n      client: {\n        host: 'localhost',\n        protocol: 'ws',\n      },\n    },\n  },\n};\n"})}),"\n",(0,i.jsxs)(n.h2,{id:"live-reloading-vs-hot-reloading",children:["Live reloading vs Hot reloading",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#live-reloading-vs-hot-reloading",children:"#"})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Live reloading: After modifying the file, webpack recompiles and forces a browser refresh, which is a global (application-wide) refresh, equivalent to ",(0,i.jsx)(n.code,{children:"window.location.reload()"}),"."]}),"\n",(0,i.jsx)(n.li,{children:"Hot reloading: After modifying the file, webpack recompiles the corresponding module and remembers the state of the application when it is refreshed, thus enabling a partial refresh, i.e. hot update."}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["DevServer provides two configuration options, ",(0,i.jsx)(n.a,{href:"/en/api/config-tools.html#hot",children:"hot"})," and ",(0,i.jsx)(n.a,{href:"/en/api/config-tools.html#livereload",children:"liveReload"}),", to control how updates are made. When both hot and liveReload are open, DevServer will attempt to use hot mode (HMR) first, and will degrade to reloading the page if the HMR update fails."]}),"\n",(0,i.jsxs)(n.h2,{id:"faq",children:["FAQ",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#faq",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["Please refer to ",(0,i.jsx)(n.a,{href:"/guide/faq/hmr",children:"HMR FAQ"}),"."]})]})}function t(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,a.ah)(),e.components);return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}let o=t;t.__RSPRESS_PAGE_META={},t.__RSPRESS_PAGE_META["en%2Fguide%2Fadvanced%2Fhmr.md"]={toc:[{text:"Enabling HMR",id:"enabling-hmr",depth:2},{text:"Specify HMR URL",id:"specify-hmr-url",depth:2},{text:"Default Config",id:"default-config",depth:3},{text:"Proxy",id:"proxy",depth:3},{text:"Live reloading vs Hot reloading",id:"live-reloading-vs-hot-reloading",depth:2},{text:"FAQ",id:"faq",depth:2}],title:"Hot Module Replacement",frontmatter:{}}}}]);