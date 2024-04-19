/*! For license information please see 5185.b039a3f1.js.LICENSE.txt */
(self.webpackChunk_modern_js_module_tools_docs=self.webpackChunk_modern_js_module_tools_docs||[]).push([["5185"],{927:function(e,n,o){"use strict";o.r(n);var r=o("39980"),s=o("9580");function i(e){let n=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",div:"div",strong:"strong",h3:"h3",ul:"ul",li:"li",code:"code",pre:"pre",img:"img",h4:"h4"},(0,s.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"dev",children:["dev",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#dev",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"This section describes all configuration of Modern.js Module related to debugging tools."}),"\n",(0,r.jsxs)(n.h2,{id:"storybook",children:["storybook",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#storybook",children:"#"})]}),"\n",(0,r.jsxs)(n.div,{className:"rspress-directive warning",children:[(0,r.jsx)(n.div,{className:"rspress-directive-title",children:"WARNING"}),(0,r.jsx)(n.div,{className:"rspress-directive-content",children:(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Deprecated"}),": This configuration is deprecated and only applicable to Storybook V6. Please see ",(0,r.jsx)(n.a,{href:"/guide/basic/using-storybook",children:"\u4F7F\u7528Storybook"})," to get more info.\n"]})})]}),"\n",(0,r.jsxs)(n.h3,{id:"storybookwebpack",children:["storybook.webpack",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#storybookwebpack",children:"#"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Type"}),": ",(0,r.jsx)(n.code,{children:"object | Function | undefined"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Default"}),": ",(0,r.jsx)(n.code,{children:"undefined"})]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"export default {\n  dev: {\n    storybook: {\n      webpack(config) {\n        return config;\n      },\n    },\n  },\n};\n"})}),"\n",(0,r.jsxs)(n.p,{children:["You can modify the webpack configuration of the Storybook Preview-iframe via ",(0,r.jsx)(n.code,{children:"dev.storybook.webpack"}),". The usage can be found in the ",(0,r.jsx)(n.a,{href:"https://modernjs.dev/builder/en/api/config-tools.html#toolswebpack",target:"_blank",rel:"noopener noreferrer",children:(0,r.jsx)(n.code,{children:"tools.webpack"})})," configuration of Modern.js Builder."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:"https://storybook.js.org/71522ac365feaf3338d7c242e53378f6/manager-preview.png",alt:"Storybook"})}),"\n",(0,r.jsxs)(n.h4,{id:"configure-manager-app",children:["Configure Manager App",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#configure-manager-app",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["For the webpack configuration of the Storybook Manager app section, you can configure it by adding the ",(0,r.jsx)(n.code,{children:"./config/storybook/main.js"})," file to configure it."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"// ./config/storybook/main.js\n\nmodule.exports = {\n  // it controls the Storybook manager app\n  managerWebpack: async (config, options) => {\n    // update config here\n    return config;\n  },\n};\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"storybookwebpackchain",children:["storybook.webpackChain",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#storybookwebpackchain",children:"#"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Type"}),": ",(0,r.jsx)(n.code,{children:"Function | undefined"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Default"}),": ",(0,r.jsx)(n.code,{children:"undefined"})]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"export default {\n  dev: {\n    storybook: {\n      webpackChain(chain) {\n        return chain;\n      },\n    },\n  },\n};\n"})}),"\n",(0,r.jsxs)(n.p,{children:["You can modify the webpack configuration of the Storybook Preview-iframe via ",(0,r.jsx)(n.code,{children:"dev.storybook.webpackChain"}),". You can refer to Modern.js Builder's ",(0,r.jsx)(n.a,{href:"https://modernjs.dev/builder/en/api/config-tools.html#toolswebpackchain",target:"_blank",rel:"noopener noreferrer",children:(0,r.jsx)(n.code,{children:"tools.webpackChain"})})," configuration for how to use it."]})]})}function a(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,s.ah)(),e.components);return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}n.default=a,a.__RSPRESS_PAGE_META={},a.__RSPRESS_PAGE_META["en%2Fapi%2Fconfig%2Fdev.md"]={toc:[{text:"storybook",id:"storybook",depth:2},{text:"storybook.webpack",id:"storybookwebpack",depth:3},{text:"Configure Manager App",id:"configure-manager-app",depth:4},{text:"storybook.webpackChain",id:"storybookwebpackchain",depth:3}],title:"dev",frontmatter:{sidebar_position:3}}}}]);