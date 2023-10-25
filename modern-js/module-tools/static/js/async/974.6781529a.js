(self.webpackChunk_modern_js_module_tools_docs=self.webpackChunk_modern_js_module_tools_docs||[]).push([["974"],{72769:function(e,n,i){"use strict";i.r(n),i.d(n,{default:function(){return c},frontmatter:function(){return a}});var l=i("15169"),s=i("43932"),t=i("9880"),r=i("23169");function o(e){var n=Object.assign({h1:"h1",a:"a",p:"p",ol:"ol",li:"li",code:"code",pre:"pre",ul:"ul"},(0,r.useMDXComponents)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.h1,{id:"quick-start",children:["Quick Start",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#quick-start",children:"#"})]}),"\n",(0,t.jsx)(n.p,{children:"Modern.js Module not only provides a rich set of features, but also supports extending the capabilities of the current project by way of plugins."}),"\n",(0,t.jsx)(n.p,{children:"We can quickly see how to write a Modern.js Module plugin by using the following example."}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["First we create ",(0,t.jsx)(n.code,{children:". /plugins/example.ts"})," file under the initialized project."]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-md",meta:'title=". /project"',children:". /project .\n\u251C\u2500\u2500 plugins\n\u2502 \u2514\u2500\u2500 example.ts\n\u251C\u2500\u2500 src/\n\u2514\u2500\u2500 modern.config.ts\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"2",children:["\n",(0,t.jsxs)(n.li,{children:["Next add the code for the plugin to the ",(0,t.jsx)(n.code,{children:"example.ts"})," file."]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"import type { CliPlugin, ModuleTools } from '@modern-js/module-tools';\n\nexport const ExamplePlugin = (): CliPlugin<ModuleTools> => {\n  return {\n    name: 'example',\n    setup() {\n      console.info('this is example plugin');\n      return {\n        // use hooks\n        afterBuild() {\n          console.info('build over');\n        },\n      };\n    },\n  };\n};\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"3",children:["\n",(0,t.jsxs)(n.li,{children:["Then we register the plugin we just wrote via the ",(0,t.jsx)(n.a,{href:"/en/api/config/plugins",children:(0,t.jsx)(n.code,{children:"plugins"})})," API."]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",meta:'title=". /modern.config.ts"',children:"import { examplePlugin } from '. /plugins/example';\nexport default defineConfig({\n  plugins: [examplePlugin()],\n});\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"4",children:["\n",(0,t.jsxs)(n.li,{children:["Finally, run ",(0,t.jsx)(n.code,{children:"modern build"})," and you will see:"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",meta:'title="terminal"',children:"This is example plugin\nBuild succeed: 510.684ms\nbuild over\n"})}),"\n",(0,t.jsx)(n.p,{children:"With the above example, we learned the following things."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"The recommended plugin directory structure"}),"\n",(0,t.jsx)(n.li,{children:"The initialization code of the plugin"}),"\n",(0,t.jsx)(n.li,{children:"Plugin registration"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"In addition to the above, we also need to understand."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/en/plugins/guide/plugin-object",children:"plugin objects, type definitions and recommended configuration options"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsxs)(n.a,{href:"/en/plugins/guide/setup-function",children:["setup functions, ",(0,t.jsx)(n.code,{children:"api"})," object parameters, lifecycle hooks"]})}),"\n"]})]})}function d(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,r.useMDXComponents)(),e.components).wrapper;return n?(0,t.jsx)(n,(0,s._)((0,l._)({},e),{children:(0,t.jsx)(o,(0,l._)({},e))})):o(e)}var c=d;d.__RSPRESS_PAGE_META={},d.__RSPRESS_PAGE_META["en%2Fplugins%2Fguide%2Fgetting-started.mdx"]={toc:[],title:"Quick Start"};var a={sidebar_position:1}}}]);