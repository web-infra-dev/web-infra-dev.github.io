/*! For license information please see 2162.3b65b093.js.LICENSE.txt */
(self.webpackChunk_modern_js_module_tools_docs=self.webpackChunk_modern_js_module_tools_docs||[]).push([["2162"],{64775:function(n,e,l){"use strict";l.r(e);var s=l("39980"),i=l("96954");function r(n){let e=Object.assign({h1:"h1",a:"a",p:"p",ol:"ol",li:"li",code:"code",pre:"pre",ul:"ul"},(0,i.useMDXComponents)(),n.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(e.h1,{id:"\u5FEB\u901F\u5F00\u59CB",children:["\u5FEB\u901F\u5F00\u59CB",(0,s.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#\u5FEB\u901F\u5F00\u59CB",children:"#"})]}),"\n",(0,s.jsx)(e.p,{children:"Modern.js Module \u4E0D\u4EC5\u63D0\u4F9B\u4E86\u4E30\u5BCC\u7684\u529F\u80FD\uFF0C\u540C\u65F6\u4E5F\u652F\u6301\u901A\u8FC7\u63D2\u4EF6\u7684\u65B9\u5F0F\u4E3A\u5F53\u524D\u9879\u76EE\u6269\u5C55\u80FD\u529B\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7\u4E0B\u9762\u7684\u4F8B\u5B50\u6765\u5FEB\u901F\u4E86\u89E3\u5982\u4F55\u7F16\u5199\u4E00\u4E2A Modern.js Module \u63D2\u4EF6\uFF1A"}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsxs)(e.li,{children:["\u9996\u5148\u6211\u4EEC\u5728\u521D\u59CB\u5316\u7684\u9879\u76EE\u4E0B\u521B\u5EFA ",(0,s.jsx)(e.code,{children:"./plugins/example.ts"})," \u6587\u4EF6\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-md",meta:'title="./project"',children:"./\n\u251C\u2500\u2500 plugins\n\u2502 \u2514\u2500\u2500 example.ts\n\u251C\u2500\u2500 src/\n\u2514\u2500\u2500 modern.config.ts\n"})}),"\n",(0,s.jsxs)(e.ol,{start:"2",children:["\n",(0,s.jsxs)(e.li,{children:["\u63A5\u7740\u5728 ",(0,s.jsx)(e.code,{children:"example.ts"})," \u6587\u4EF6\u4E2D\u589E\u52A0\u63D2\u4EF6\u7684\u4EE3\u7801\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-ts",children:"import type { CliPlugin, ModuleTools } from '@modern-js/module-tools';\n\nexport const ExamplePlugin = (): CliPlugin<ModuleTools> => {\n  return {\n    name: 'example',\n    setup() {\n      console.info('this is example plugin');\n      return {\n        // use hooks\n        afterBuild() {\n          console.info('build over');\n        },\n      };\n    },\n  };\n};\n"})}),"\n",(0,s.jsxs)(e.ol,{start:"3",children:["\n",(0,s.jsxs)(e.li,{children:["\u7136\u540E\u6211\u4EEC\u901A\u8FC7 ",(0,s.jsx)(e.a,{href:"/api/config/plugins",children:(0,s.jsx)(e.code,{children:"plugins"})})," API\uFF0C\u5C06\u521A\u521A\u5199\u597D\u7684\u63D2\u4EF6\u8FDB\u884C\u6CE8\u518C\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import { examplePlugin } from './plugins/example';\nexport default defineConfig({\n  plugins: [examplePlugin()],\n});\n"})}),"\n",(0,s.jsxs)(e.ol,{start:"4",children:["\n",(0,s.jsxs)(e.li,{children:["\u6700\u540E\u8FD0\u884C ",(0,s.jsx)(e.code,{children:"modern build"}),"\uFF0C\u5C31\u53EF\u4EE5\u770B\u5230\uFF1A"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",meta:'title="terminal"',children:"this is example plugin\nBuild succeed: 510.684ms\nbuild over\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u901A\u8FC7\u4E0A\u9762\u8FD9\u4E2A\u4F8B\u5B50\uFF0C\u6211\u4EEC\u4E86\u89E3\u5230\u4E86\u4E0B\u9762\u51E0\u4EF6\u4E8B\uFF1A"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u63A8\u8350\u7684\u63D2\u4EF6\u76EE\u5F55\u7ED3\u6784"}),"\n",(0,s.jsx)(e.li,{children:"\u63D2\u4EF6\u7684\u521D\u59CB\u5316\u4EE3\u7801"}),"\n",(0,s.jsx)(e.li,{children:"\u63D2\u4EF6\u7684\u6CE8\u518C"}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"\u9664\u4E86\u4EE5\u4E0A\u5185\u5BB9\u4EE5\u5916\uFF0C\u6211\u4EEC\u8FD8\u9700\u8981\u4E86\u89E3\uFF1A"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.a,{href:"/plugins/guide/plugin-object",children:"\u63D2\u4EF6\u5BF9\u8C61\u3001\u7C7B\u578B\u5B9A\u4E49\u4E0E\u63A8\u8350\u914D\u7F6E\u9879"})}),"\n",(0,s.jsx)(e.li,{children:(0,s.jsxs)(e.a,{href:"/plugins/guide/setup-function",children:["setup \u51FD\u6570\u3001",(0,s.jsx)(e.code,{children:"api"})," \u5BF9\u8C61\u53C2\u6570\u3001\u751F\u547D\u5468\u671F\u94A9\u5B50"]})}),"\n"]})]})}function d(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}=Object.assign({},(0,i.useMDXComponents)(),n.components);return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(r,{...n})}):r(n)}e.default=d,d.__RSPRESS_PAGE_META={},d.__RSPRESS_PAGE_META["zh%2Fplugins%2Fguide%2Fgetting-started.mdx"]={toc:[],title:"\u5FEB\u901F\u5F00\u59CB",frontmatter:{sidebar_position:1}}}}]);