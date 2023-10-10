(self.webpackChunk_modern_js_module_tools_docs=self.webpackChunk_modern_js_module_tools_docs||[]).push([["3129"],{347:function(e,n,o){"use strict";o.r(n),o.d(n,{default:function(){return t},frontmatter:function(){return h}});var r=o("15169"),s=o("43932"),c=o("9880"),d=o("23169");function a(e){var n=Object.assign({h1:"h1",a:"a",p:"p",pre:"pre",code:"code",h2:"h2",strong:"strong",ul:"ul",li:"li",blockquote:"blockquote",h3:"h3",img:"img",h4:"h4"},(0,d.useMDXComponents)(),e.components);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(n.h1,{id:"dev",children:["dev",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#dev",children:"#"})]}),"\n",(0,c.jsx)(n.p,{children:"\u672C\u7AE0\u8282\u63CF\u8FF0\u4E86 Modern.js Module \u5173\u4E8E\u8C03\u8BD5\u5DE5\u5177\u76F8\u5173\u7684\u6240\u6709\u914D\u7F6E\u3002"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-ts",children:"export default {\n  dev: {\n    storybook: {\n      /* Storybook Config */\n    },\n  },\n};\n"})}),"\n",(0,c.jsxs)(n.h2,{id:"storybook",children:["storybook",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#storybook",children:"#"})]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"\u9996\u5148\u9700\u8981\u786E\u4FDD"}),"\uFF1A"]}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["\u5F00\u542F Storybook \u8C03\u8BD5\u529F\u80FD\u6216\u8005\u5B89\u88C5 ",(0,c.jsx)(n.code,{children:"@modern-js/plugin-storybook"})," \u63D2\u4EF6\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:["\u6CE8\u518C ",(0,c.jsx)(n.code,{children:"@modern-js/plugin-storybook"})," \u63D2\u4EF6\u3002"]}),"\n"]}),"\n",(0,c.jsxs)(n.blockquote,{children:["\n",(0,c.jsxs)(n.p,{children:["\u5173\u4E8E\u5982\u4F55\u5F00\u542F Storybook \u8C03\u8BD5\u529F\u80FD\uFF0C\u53EF\u4EE5\u53C2\u8003\uFF1A",(0,c.jsx)(n.a,{href:"/guide/basic/use-micro-generator#storybook-%E8%B0%83%E8%AF%95",children:"\u300CStorybook \u8C03\u8BD5\u300D"})]}),"\n"]}),"\n",(0,c.jsxs)(n.h3,{id:"storybookwebpack",children:["storybook.webpack",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#storybookwebpack",children:"#"})]}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["\u7C7B\u578B\uFF1A",(0,c.jsx)(n.code,{children:"object | Function | undefined"})]}),"\n",(0,c.jsxs)(n.li,{children:["\u9ED8\u8BA4\u503C\uFF1A",(0,c.jsx)(n.code,{children:"undefined"})]}),"\n"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-ts",children:"export default {\n  dev: {\n    storybook: {\n      webpack(config) {\n        return config;\n      },\n    },\n  },\n};\n"})}),"\n",(0,c.jsxs)(n.p,{children:["\u4F60\u53EF\u4EE5\u901A\u8FC7 ",(0,c.jsx)(n.code,{children:"dev.storybook.webpack"})," \u6765\u4FEE\u6539 Storybook Preview-iframe \u7684 webpack \u914D\u7F6E\u3002\u4F7F\u7528\u65B9\u5F0F\u53EF\u4EE5\u53C2\u8003 Modern.js Builder \u7684 ",(0,c.jsx)(n.a,{href:"https://modernjs.dev/builder/api/config-tools.html#toolswebpack",target:"_blank",rel:"noopener noreferrer",children:(0,c.jsx)(n.code,{children:"tools.webpack"})})," \u914D\u7F6E\u3002"]}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.img,{src:"https://storybook.js.org/71522ac365feaf3338d7c242e53378f6/manager-preview.png",alt:"Storybook"})}),"\n",(0,c.jsxs)(n.h4,{id:"\u914D\u7F6E-manager-app",children:["\u914D\u7F6E Manager App",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u914D\u7F6E-manager-app",children:"#"})]}),"\n",(0,c.jsxs)(n.p,{children:["\u5BF9\u4E8E Storybook Manager App \u90E8\u5206\u7684 webpack \u914D\u7F6E\uFF0C\u53EF\u4EE5\u901A\u8FC7\u589E\u52A0 ",(0,c.jsx)(n.code,{children:"./config/storybook/main.js"})," \u6587\u4EF6\u8FDB\u884C\u914D\u7F6E\u3002"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-js",children:"// ./config/storybook/main.js\n\nmodule.exports = {\n  // it controls the Storybook manager app\n  managerWebpack: async (config, options) => {\n    // update config here\n    return config;\n  },\n};\n"})}),"\n",(0,c.jsxs)(n.h3,{id:"storybookwebpackchain",children:["storybook.webpackChain",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#storybookwebpackchain",children:"#"})]}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["\u7C7B\u578B\uFF1A",(0,c.jsx)(n.code,{children:"Function | undefined"})]}),"\n",(0,c.jsxs)(n.li,{children:["\u9ED8\u8BA4\u503C\uFF1A",(0,c.jsx)(n.code,{children:"undefined"})]}),"\n"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-ts",children:"export default {\n  dev: {\n    storybook: {\n      webpackChain(chain) {\n        return chain;\n      },\n    },\n  },\n};\n"})}),"\n",(0,c.jsxs)(n.p,{children:["\u4F60\u53EF\u4EE5\u901A\u8FC7 ",(0,c.jsx)(n.code,{children:"dev.storybook.webpackChain"})," \u6765\u4FEE\u6539 Storybook Preview-iframe \u7684 webpack \u914D\u7F6E\u3002\u4F7F\u7528\u65B9\u5F0F\u53EF\u4EE5\u53C2\u8003 Modern.js Builder \u7684 ",(0,c.jsx)(n.a,{href:"https://modernjs.dev/builder/api/config-tools.html#toolswebpackchain",target:"_blank",rel:"noopener noreferrer",children:(0,c.jsx)(n.code,{children:"tools.webpackChain"})})," \u914D\u7F6E\u3002"]})]})}function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,d.useMDXComponents)(),e.components).wrapper;return n?(0,c.jsx)(n,(0,s._)((0,r._)({},e),{children:(0,c.jsx)(a,(0,r._)({},e))})):a(e)}var t=i;i.__RSPRESS_PAGE_META={},i.__RSPRESS_PAGE_META["zh%2Fapi%2Fconfig%2Fdev.md"]={toc:[{text:"storybook",id:"storybook",depth:2},{text:"storybook.webpack",id:"storybookwebpack",depth:3},{text:"\u914D\u7F6E Manager App",id:"\u914D\u7F6E-manager-app",depth:4},{text:"storybook.webpackChain",id:"storybookwebpackchain",depth:3}],title:"dev"};var h={sidebar_position:3}}}]);