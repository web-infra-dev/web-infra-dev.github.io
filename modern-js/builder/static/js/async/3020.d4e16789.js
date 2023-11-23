(self.webpackChunk_modern_js_builder_doc=self.webpackChunk_modern_js_builder_doc||[]).push([["3020"],{98868:function(e,n,s){"use strict";e.exports="data:image/svg+xml,%3Csvg width='32' height='32' viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M28 10v18H10V10h18m0-2H10a2 2 0 0 0-2 2v18a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2Z' fill='%23cccccc'/%3E%3Cpath d='M4 18H2V4a2 2 0 0 1 2-2h14v2H4Z' fill='%23cccccc'/%3E%3C/svg%3E"},45038:function(e,n,s){"use strict";e.exports="data:image/svg+xml,%3Csvg width='32' height='32' viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='m13 24l-9-9l1.41-1.41L13 21.17L26.59 7.59L28 9L13 24z' fill='%2360c054'/%3E%3C/svg%3E"},66214:function(e,n,s){"use strict";e.exports="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='%2360c054' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'%3E%3C/path%3E%3Cpath d='M4 6l16 0'%3E%3C/path%3E%3Cpath d='M4 18l5 0'%3E%3C/path%3E%3Cpath d='M4 12h13a3 3 0 0 1 0 6h-4l2 -2m0 4l-2 -2'%3E%3C/path%3E%3C/svg%3E"},27529:function(e,n,s){"use strict";e.exports="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='%23cccccc' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'%3E%3C/path%3E%3Cpath d='M4 6l10 0'%3E%3C/path%3E%3Cpath d='M4 18l10 0'%3E%3C/path%3E%3Cpath d='M4 12h17l-3 -3m0 6l3 -3'%3E%3C/path%3E%3C/svg%3E"},53353:function(e,n,s){"use strict";s.r(n),s.d(n,{default:function(){return a}});var l=s("9880"),i=s("23169"),t=s("1411");function r(e){let n=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",h3:"h3",code:"code",pre:"pre",ul:"ul",li:"li",strong:"strong"},(0,i.useMDXComponents)(),e.components);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(n.h1,{id:"stylus-plugin",children:["Stylus Plugin",(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#stylus-plugin",children:"#"})]}),"\n",(0,l.jsx)(n.p,{children:"Stylus is an Expressive, dynamic and robust CSS preprocessor. This chapter introduces how to use Stylus in Builder."}),"\n",(0,l.jsxs)(n.h2,{id:"quick-start",children:["Quick Start",(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#quick-start",children:"#"})]}),"\n",(0,l.jsxs)(n.h3,{id:"install",children:["Install",(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#install",children:"#"})]}),"\n",(0,l.jsx)(n.p,{children:"You can install the plugin with the following command:"}),"\n","\n",(0,l.jsx)(t.PackageManagerTabs,{command:"add @modern-js/builder-plugin-stylus -D"}),"\n",(0,l.jsxs)(n.h3,{id:"register",children:["Register",(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#register",children:"#"})]}),"\n",(0,l.jsxs)(n.p,{children:["In upper-level frameworks such as Modern.js, you can register Stylus plugin through the ",(0,l.jsx)(n.code,{children:"builderPlugins"})," config:"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-ts",children:"import { builderPluginStylus } from '@modern-js/builder-plugin-stylus';\n\nexport default {\n  builderPlugins: [builderPluginStylus()],\n};\n"})}),"\n",(0,l.jsxs)(n.p,{children:["When you call the Builder's Node API directly, you can register Stylus plugin with the ",(0,l.jsx)(n.code,{children:"addPlugins"})," method:"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",children:"import { builderPluginStylus } from '@modern-js/builder-plugin-stylus';\n\n// add the plugin to the builder instance\nbuilder.addPlugins([builderPluginStylus()]);\n"})}),"\n",(0,l.jsxs)(n.h2,{id:"example",children:["Example",(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#example",children:"#"})]}),"\n",(0,l.jsxs)(n.p,{children:["After installing the plugin, you can directly import ",(0,l.jsx)(n.code,{children:"*.styl"})," or ",(0,l.jsx)(n.code,{children:"*.module.styl"})," files into the code without adding other configs."]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"normalize.styl"}),":"]}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-styl",children:"the body\n   color#000\n   font 14px Arial, sans-serif\n"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"title.module.styl"}),":"]}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-styl",children:".title\n   font-size: 14px;\n"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"index.js"}),":"]}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",children:"import './normalize.styl';\nimport style from './title.module.styl';\n\nconsole.log(style.title);\n"})}),"\n",(0,l.jsxs)(n.h2,{id:"config",children:["Config",(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#config",children:"#"})]}),"\n",(0,l.jsx)(n.p,{children:"If you need to customize the compilation behavior of Stylus, you can use the following configs."}),"\n",(0,l.jsxs)(n.h3,{id:"stylusoptions",children:["stylusOptions",(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#stylusoptions",children:"#"})]}),"\n",(0,l.jsx)(n.p,{children:"-Type:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-ts",children:"type StylusOptions = {\n  use?: string[];\n  include?: string;\n  import?: string;\n  resolveURL?: boolean;\n  lineNumbers?: boolean;\n  hoistAtrules?: boolean;\n};\n"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"Default:"})," ",(0,l.jsx)(n.code,{children:"undefined"})]}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:["Options passed to Stylus, please refer to the ",(0,l.jsx)(n.a,{href:"https://stylus-lang.com/docs/js.html",target:"_blank",rel:"noopener noreferrer",children:"Stylus documentation"})," for specific usage."]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-ts",children:"builderPluginStylus({\n  stylusOptions: {\n    lineNumbers: false,\n  },\n});\n"})}),"\n",(0,l.jsxs)(n.h3,{id:"sourcemap",children:["sourceMap",(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#sourcemap",children:"#"})]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"Type:"})," ",(0,l.jsx)(n.code,{children:"boolean"})]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"Default:"})," ",(0,l.jsx)(n.code,{children:"isDev"})]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"Whether to generate Source Map, enabled by default in the development environment."}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-ts",children:"builderPluginStylus({\n  sourceMap: false,\n});\n"})})]})}function d(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,i.useMDXComponents)(),e.components);return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(r,{...e})}):r(e)}var a=d;d.__RSPRESS_PAGE_META={},d.__RSPRESS_PAGE_META["en%2Fplugins%2Fplugin-stylus.mdx"]={toc:[{text:"Quick Start",id:"quick-start",depth:2},{text:"Install",id:"install",depth:3},{text:"Register",id:"register",depth:3},{text:"Example",id:"example",depth:2},{text:"Config",id:"config",depth:2},{text:"stylusOptions",id:"stylusoptions",depth:3},{text:"sourceMap",id:"sourcemap",depth:3}],title:"Stylus Plugin",frontmatter:{}}}}]);