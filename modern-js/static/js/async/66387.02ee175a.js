"use strict";(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["66387"],{98666:function(e,n,t){t.r(n),t.d(n,{default:function(){return l}});var r=t(38093),o=t(75878);function s(e){let n=Object.assign({h1:"h1",a:"a",p:"p",ul:"ul",li:"li",strong:"strong",pre:"pre",code:"code"},(0,o.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"devclient",children:["dev.client",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#devclient",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"Configure the client code injected by Modern.js during the development process. This can be used to set the WebSocket URL for HMR."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"Type:"})}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"type Client = {\n  /** Specify the protocol name for the WebSocket request */\n  protocol?: 'ws' | 'wss';\n  /** Specify the path for the WebSocket request */\n  path?: string;\n  /** Specify the port number for the WebSocket request */\n  port?: string;\n  /** Specify the host for the WebSocket request */\n  host?: string;\n  /**\n   * Shows overlay in the browser when there are compiler errors\n   * This feature requires the current browser version to support [Web Components](https://developer.mozilla.org/en-US/docs/Web/API/Web_components)\n   */\n  overlay?: boolean;\n};\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"Default:"})}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"const defaultConfig = {\n  path: '/webpack-hmr',\n  // Defaults to the port number of the dev server\n  port: '',\n  host: location.hostname,\n  protocol: location.protocol === 'https:' ? 'wss' : 'ws',\n  overlay: false,\n};\n"})}),"\n",(0,r.jsxs)(n.p,{children:["For detailed usage, please refer to ",(0,r.jsx)(n.a,{href:"https://rsbuild.dev/config/dev/client",target:"_blank",rel:"noopener noreferrer",children:"Rsbuild - dev.client"}),"."]})]})}function c(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,o.ah)(),e.components);return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(s,{...e})}):s(e)}let l=c;c.__RSPRESS_PAGE_META={},c.__RSPRESS_PAGE_META["en%2Fconfigure%2Fapp%2Fdev%2Fclient.mdx"]={toc:[],title:"client",frontmatter:{title:"client"}}}}]);