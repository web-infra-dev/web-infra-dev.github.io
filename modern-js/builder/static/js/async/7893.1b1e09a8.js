(self.webpackChunk_modern_js_builder_doc=self.webpackChunk_modern_js_builder_doc||[]).push([["7893"],{79403:function(e,n,s){"use strict";s.r(n),s.d(n,{default:function(){return o}});var l=s("15169"),i=s("43932"),r=s("9880"),t=s("23169"),d=s("73512");function a(e){var n=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",h3:"h3",code:"code",pre:"pre",ul:"ul",li:"li",strong:"strong"},(0,t.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"stylus-plugin",children:["Stylus Plugin",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#stylus-plugin",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"Stylus is an Expressive, dynamic and robust CSS preprocessor. This chapter introduces how to use Stylus in Builder."}),"\n",(0,r.jsxs)(n.h2,{id:"quick-start",children:["Quick Start",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#quick-start",children:"#"})]}),"\n",(0,r.jsxs)(n.h3,{id:"install",children:["Install",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#install",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"You can install the plugin with the following command:"}),"\n","\n",(0,r.jsx)(d.PackageManagerTabs,{command:"add @modern-js/builder-plugin-stylus -D"}),"\n",(0,r.jsxs)(n.h3,{id:"register",children:["Register",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#register",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["In upper-level frameworks such as Modern.js, you can register Stylus plugin through the ",(0,r.jsx)(n.code,{children:"builderPlugins"})," config:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"import { builderPluginStylus } from '@modern-js/builder-plugin-stylus';\n\nexport default {\n  builderPlugins: [builderPluginStylus()],\n};\n"})}),"\n",(0,r.jsxs)(n.p,{children:["When you call the Builder's Node API directly, you can register Stylus plugin with the ",(0,r.jsx)(n.code,{children:"addPlugins"})," method:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"import { builderPluginStylus } from '@modern-js/builder-plugin-stylus';\n\n// add the plugin to the builder instance\nbuilder.addPlugins([builderPluginStylus()]);\n"})}),"\n",(0,r.jsxs)(n.h2,{id:"example",children:["Example",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#example",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["After installing the plugin, you can directly import ",(0,r.jsx)(n.code,{children:"*.styl"})," or ",(0,r.jsx)(n.code,{children:"*.module.styl"})," files into the code without adding other configs."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"normalize.styl"}),":"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-styl",children:"the body\n   color#000\n   font 14px Arial, sans-serif\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"title.module.styl"}),":"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-styl",children:".title\n   font-size: 14px;\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"index.js"}),":"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"import './normalize.styl';\nimport style from './title.module.styl';\n\nconsole.log(style.title);\n"})}),"\n",(0,r.jsxs)(n.h2,{id:"config",children:["Config",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#config",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"If you need to customize the compilation behavior of Stylus, you can use the following configs."}),"\n",(0,r.jsxs)(n.h3,{id:"stylusoptions",children:["stylusOptions",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#stylusoptions",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"-Type:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"type StylusOptions = {\n  use?: string[];\n  include?: string;\n  import?: string;\n  resolveURL?: boolean;\n  lineNumbers?: boolean;\n  hoistAtrules?: boolean;\n};\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Default:"})," ",(0,r.jsx)(n.code,{children:"undefined"})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Options passed to Stylus, please refer to the ",(0,r.jsx)(n.a,{href:"https://stylus-lang.com/docs/js.html",target:"_blank",rel:"noopener noreferrer",children:"Stylus documentation"})," for specific usage."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"builderPluginStylus({\n  stylusOptions: {\n    lineNumbers: false,\n  },\n});\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"sourcemap",children:["sourceMap",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#sourcemap",children:"#"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Type:"})," ",(0,r.jsx)(n.code,{children:"boolean"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Default:"})," ",(0,r.jsx)(n.code,{children:"isDev"})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Whether to generate Source Map, enabled by default in the development environment."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"builderPluginStylus({\n  sourceMap: false,\n});\n"})})]})}function c(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,t.useMDXComponents)(),e.components).wrapper;return n?(0,r.jsx)(n,(0,i._)((0,l._)({},e),{children:(0,r.jsx)(a,(0,l._)({},e))})):a(e)}var o=c;c.__RSPRESS_PAGE_META={},c.__RSPRESS_PAGE_META["en%2Fplugins%2Fplugin-stylus.mdx"]={toc:[{text:"Quick Start",id:"quick-start",depth:2},{text:"Install",id:"install",depth:3},{text:"Register",id:"register",depth:3},{text:"Example",id:"example",depth:2},{text:"Config",id:"config",depth:2},{text:"stylusOptions",id:"stylusoptions",depth:3},{text:"sourceMap",id:"sourcemap",depth:3}],title:"Stylus Plugin"}}}]);