/*! For license information please see 42678.5480c99a.js.LICENSE.txt */
(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["42678"],{70919:function(e,n,r){"use strict";r.r(n);var i=r("39980"),s=r("96954");function l(e){let n=Object.assign({h1:"h1",a:"a",h2:"h2",p:"p",ul:"ul",li:"li",code:"code",div:"div",h3:"h3",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",br:"br"},(0,s.useMDXComponents)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.h1,{id:"using-rsbuild-plugin",children:["Using Rsbuild Plugin",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#using-rsbuild-plugin",children:"#"})]}),"\n",(0,i.jsxs)(n.h2,{id:"introduce-rsbuild-plugin",children:["Introduce Rsbuild Plugin",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#introduce-rsbuild-plugin",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"Rsbuild is the build tool of Modern.js. You can modify the default build behavior and add various additional features by adding the Rsbuild plugin, including but not limited to:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Modifying Rspack configurations"}),"\n",(0,i.jsx)(n.li,{children:"Processing new file types"}),"\n",(0,i.jsx)(n.li,{children:"Modifying or compiling files"}),"\n",(0,i.jsx)(n.li,{children:"Deploying artifacts"}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["You can register the Rsbuild plugin through the ",(0,i.jsx)(n.code,{children:"builderPlugins"})," option in ",(0,i.jsx)(n.code,{children:"modern.config.ts"}),", see ",(0,i.jsx)(n.a,{href:"/configure/app/builder-plugins",children:"builderPlugins"})," for details."]}),"\n",(0,i.jsxs)(n.h2,{id:"official-plugins",children:["Official Plugins",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#official-plugins",children:"#"})]}),"\n",(0,i.jsxs)(n.div,{className:"rspress-directive tip",children:[(0,i.jsx)(n.div,{className:"rspress-directive-title",children:"TIP"}),(0,i.jsx)(n.div,{className:"rspress-directive-content",children:(0,i.jsxs)(n.p,{children:["Most plugins in Rsbuild have been built into Modern.js. For example, when you need to inject the Polyfill of the Node module, you can directly use the ",(0,i.jsx)(n.a,{href:"/configure/app/output/disable-node-polyfill",children:"output.disableNodePolyfill"})," configuration.\n"]})})]}),"\n",(0,i.jsxs)(n.h3,{id:"builtin-plugins",children:["Builtin Plugins",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#builtin-plugins",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"Here are the official Rsbuild plugins built into Modern.js:"}),"\n",(0,i.jsxs)(n.table,{children:["\n",(0,i.jsxs)(n.thead,{children:["\n",(0,i.jsxs)(n.tr,{children:["\n",(0,i.jsx)(n.th,{children:"Plugin Name"}),"\n",(0,i.jsx)(n.th,{children:"Introduce"}),"\n",(0,i.jsx)(n.th,{children:"Modern.js Link"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.tbody,{children:["\n",(0,i.jsxs)(n.tr,{children:["\n",(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"https://rsbuild.dev/plugins/list/plugin-react",target:"_blank",rel:"noopener noreferrer",children:"React Plugin"})}),"\n",(0,i.jsx)(n.td,{children:"Provides support for React"}),"\n",(0,i.jsx)(n.td,{children:"-"}),"\n"]}),"\n",(0,i.jsxs)(n.tr,{children:["\n",(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"https://rsbuild.dev/plugins/list/plugin-svgr",target:"_blank",rel:"noopener noreferrer",children:"SVGR Plugin"})}),"\n",(0,i.jsx)(n.td,{children:"Support convert SVG to React components"}),"\n",(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.a,{href:"/configure/app/output/disable-svgr",children:"output.disableSvgr"}),(0,i.jsx)("br",{}),(0,i.jsx)(n.a,{href:"/configure/app/output/svg-default-export",children:"output.svgDefaultExport"})]}),"\n"]}),"\n",(0,i.jsxs)(n.tr,{children:["\n",(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"https://rsbuild.dev/plugins/list/plugin-styled-components",target:"_blank",rel:"noopener noreferrer",children:"Styled Components Plugin"})}),"\n",(0,i.jsx)(n.td,{children:"Provides compile-time support for styled-components"}),"\n",(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"/configure/app/tools/styled-components",children:"tools.styledComponents"})}),"\n"]}),"\n",(0,i.jsxs)(n.tr,{children:["\n",(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"https://rsbuild.dev/plugins/list/plugin-assets-retry",target:"_blank",rel:"noopener noreferrer",children:"Assets Retry Plugin"})}),"\n",(0,i.jsx)(n.td,{children:"Used to automatically resend requests when static assets fail to load"}),"\n",(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"/configure/app/output/assets-retry",children:"output.assetsRetry"})}),"\n"]}),"\n",(0,i.jsxs)(n.tr,{children:["\n",(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"https://rsbuild.dev/plugins/list/plugin-type-check",target:"_blank",rel:"noopener noreferrer",children:"Type Check Plugin"})}),"\n",(0,i.jsx)(n.td,{children:"Used to run TypeScript type checker on a separate process"}),"\n",(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.a,{href:"/configure/app/output/disable-ts-checker",children:"output.disableTsChecker"}),(0,i.jsx)("br",{}),(0,i.jsx)(n.a,{href:"/configure/app/tools/ts-checker",children:"tools.tsChecker"})]}),"\n"]}),"\n",(0,i.jsxs)(n.tr,{children:["\n",(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"https://rsbuild.dev/plugins/list/plugin-node-polyfill",target:"_blank",rel:"noopener noreferrer",children:"Node Polyfill Plugin"})}),"\n",(0,i.jsx)(n.td,{children:"Used to inject polyfills of Node core modules in the browser side"}),"\n",(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"/configure/app/output/disable-node-polyfill",children:"output.disableNodePolyfill"})}),"\n"]}),"\n",(0,i.jsxs)(n.tr,{children:["\n",(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"https://rsbuild.dev/plugins/list/plugin-source-build",target:"_blank",rel:"noopener noreferrer",children:"Source Build Plugin"})}),"\n",(0,i.jsx)(n.td,{children:"Supports referencing source code from other subdirectories"}),"\n",(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"/configure/app/experiments/source-build",children:"experiments.sourceBuild"})}),"\n"]}),"\n",(0,i.jsxs)(n.tr,{children:["\n",(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"https://rsbuild.dev/plugins/list/plugin-check-syntax",target:"_blank",rel:"noopener noreferrer",children:"Check Syntax Plugin"})}),"\n",(0,i.jsx)(n.td,{children:"Used to analyze the syntax compatibility of artifacts"}),"\n",(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"/configure/app/security/check-syntax",children:"security.checkSyntax"})}),"\n"]}),"\n",(0,i.jsxs)(n.tr,{children:["\n",(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"https://rsbuild.dev/plugins/list/plugin-css-minimizer",target:"_blank",rel:"noopener noreferrer",children:"CSS Minimizer Plugin"})}),"\n",(0,i.jsxs)(n.td,{children:["Used to customize CSS minimizer, switch to ",(0,i.jsx)(n.a,{href:"https://cssnano.co/",target:"_blank",rel:"noopener noreferrer",children:"cssnano"})," or other tools for CSS compression"]}),"\n",(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"/configure/app/tools/minify-css",children:"tools.minifyCss"})}),"\n"]}),"\n",(0,i.jsxs)(n.tr,{children:["\n",(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"https://rsbuild.dev/plugins/list/plugin-pug",target:"_blank",rel:"noopener noreferrer",children:"Pug Plugin"})}),"\n",(0,i.jsx)(n.td,{children:"Provides support for the Pug template engine"}),"\n",(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"/configure/app/tools/pug",children:"tools.pug"})}),"\n"]}),"\n",(0,i.jsxs)(n.tr,{children:["\n",(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"https://rsbuild.dev/plugins/list/plugin-rem",target:"_blank",rel:"noopener noreferrer",children:"Rem Plugin"})}),"\n",(0,i.jsx)(n.td,{children:"Implements the rem adaptive layout for mobile pages"}),"\n",(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"/configure/app/output/convert-to-rem",children:"output.convertToRem"})}),"\n"]}),"\n",(0,i.jsxs)(n.tr,{children:["\n",(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"https://rsbuild.dev/plugins/list/plugin-yaml",target:"_blank",rel:"noopener noreferrer",children:"YAML Plugin"})}),"\n",(0,i.jsx)(n.td,{children:"Used to import YAML files and convert them into JavaScript objects"}),"\n",(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"/guides/basic-features/json-files#toml-file",children:"TOML File"})}),"\n"]}),"\n",(0,i.jsxs)(n.tr,{children:["\n",(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"https://rsbuild.dev/plugins/list/plugin-toml",target:"_blank",rel:"noopener noreferrer",children:"TOML Plugin"})}),"\n",(0,i.jsx)(n.td,{children:"Used to import TOML files and convert them into JavaScript objects"}),"\n",(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"/guides/basic-features/json-files#yaml-file",children:"YAML File"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.h3,{id:"un-builtin-plugins",children:["Un-builtin Plugins",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#un-builtin-plugins",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"Here are the official Rsbuild plugins that are not built into Modern.js:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://rsbuild.dev/plugins/list/plugin-image-compress",target:"_blank",rel:"noopener noreferrer",children:"Image Compress Plugin"}),": Compress the image resources used in the project."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://rsbuild.dev/plugins/list/plugin-stylus",target:"_blank",rel:"noopener noreferrer",children:"Stylus Plugin"}),": Use Stylus as the CSS preprocessor."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://rsbuild.dev/plugins/list/plugin-umd",target:"_blank",rel:"noopener noreferrer",children:"UMD Plugin"}),": Used to build outputs in UMD format."]}),"\n"]})]})}function t(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,s.useMDXComponents)(),e.components);return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}n.default=t,t.__RSPRESS_PAGE_META={},t.__RSPRESS_PAGE_META["en%2Fguides%2Fadvanced-features%2Frsbuild-plugin.mdx"]={toc:[{text:"Introduce Rsbuild Plugin",id:"introduce-rsbuild-plugin",depth:2},{text:"Official Plugins",id:"official-plugins",depth:2},{text:"Builtin Plugins",id:"builtin-plugins",depth:3},{text:"Un-builtin Plugins",id:"un-builtin-plugins",depth:3}],title:"Using Rsbuild Plugin",frontmatter:{sidebar_position:21,title:"Using Rsbuild Plugin"}}}}]);