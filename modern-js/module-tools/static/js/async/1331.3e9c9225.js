/*! For license information please see 1331.3e9c9225.js.LICENSE.txt */
(self.webpackChunk_modern_js_module_tools_docs=self.webpackChunk_modern_js_module_tools_docs||[]).push([["1331"],{3938:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return a}});var i=r("39980"),o=r("96954"),s=r("27824");function t(e){let n=Object.assign({h1:"h1",a:"a",p:"p",code:"code",div:"div",h2:"h2",h3:"h3",pre:"pre",ul:"ul",li:"li",strong:"strong"},(0,o.useMDXComponents)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.h1,{id:"import-plugin",children:["Import Plugin",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#import-plugin",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["Using ",(0,i.jsx)(n.a,{href:"https://swc.rs/",target:"_blank",rel:"noopener noreferrer",children:"SWC"})," provides the same ability and configuration as ",(0,i.jsx)(n.a,{href:"https://github.com/umijs/babel-plugin-import",target:"_blank",rel:"noopener noreferrer",children:(0,i.jsx)(n.code,{children:"babel-plugin-import"})}),"."]}),"\n",(0,i.jsxs)(n.div,{className:"rspress-directive tip",children:[(0,i.jsx)(n.div,{className:"rspress-directive-title",children:"TIP"}),(0,i.jsx)(n.div,{className:"rspress-directive-content",children:(0,i.jsxs)(n.p,{children:["Since ",(0,i.jsx)(n.code,{children:"@modern-js/module-tools"})," version >= 2.16.0, this plugin functionality is built into Modern.js Module and is provided by ",(0,i.jsx)(n.a,{href:"/api/config/build-config#transformimport",children:(0,i.jsx)(n.code,{children:"transformImport"})}),".\n"]})})]}),"\n",(0,i.jsxs)(n.h2,{id:"quick-start",children:["Quick Start",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#quick-start",children:"#"})]}),"\n",(0,i.jsxs)(n.h3,{id:"install",children:["Install",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#install",children:"#"})]}),"\n","\n",(0,i.jsx)(s.PackageManagerTabs,{command:"add @modern-js/plugin-module-import -D"}),"\n",(0,i.jsxs)(n.h3,{id:"register",children:["Register",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#register",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"In Modern.js Module, you can register plugins in the following way:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"import { moduleTools, defineConfig } from '@modern-js/module-tools';\nimport { modulePluginImport } from '@modern-js/plugin-module-import';\n\nexport default defineConfig({\n  plugins: [\n    moduleTools(),\n    modulePluginImport({\n      pluginImport: [\n        {\n          libraryName: 'antd',\n          style: true,\n        },\n      ],\n    }),\n  ],\n});\n"})}),"\n",(0,i.jsx)(n.p,{children:"This way we can use the ability of automatic import in Modern.js Module."}),"\n",(0,i.jsxs)(n.h2,{id:"configurations",children:["Configurations",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#configurations",children:"#"})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Type"}),":"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"type Options = {\n  pluginImport?: ImportItem[];\n};\n"})}),"\n",(0,i.jsxs)(n.h3,{id:"pluginimport",children:["pluginImport",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#pluginimport",children:"#"})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Type"}),": ",(0,i.jsx)(n.code,{children:"object[]"})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["The elements of the array are configuration objects for ",(0,i.jsx)(n.code,{children:"babel-plugin-import"}),", which can be referred to ",(0,i.jsx)(n.a,{href:"https://github.com/umijs/babel-plugin-import#options",target:"_blank",rel:"noopener noreferrer",children:"options"}),"\u3002"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Example:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"import { modulePluginImport } from '@modern-js/plugin-module-import';\nimport { moduleTools, defineConfig } from '@modern-js/module-tools';\n\nexport default defineConfig({\n  plugins: [\n    moduleTools(),\n    modulePluginImport({\n      pluginImport: [\n        // babel-plugin-import`s options config\n        {\n          libraryName: 'foo',\n          style: true,\n        },\n      ],\n    }),\n  ],\n});\n"})}),"\n",(0,i.jsxs)(n.h2,{id:"notes",children:["Notes",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#notes",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://swc.rs/",target:"_blank",rel:"noopener noreferrer",children:"SWC"})," (Speedy Web Compiler) is written in Rust, and this plugin is based on SWC and ported from ",(0,i.jsx)(n.a,{href:"https://github.com/umijs/babel-plugin-import",target:"_blank",rel:"noopener noreferrer",children:"babel-plugin-import"}),". The configuration options remain consistent."]}),"\n",(0,i.jsxs)(n.p,{children:["Some configurations can be passed in as functions, such as ",(0,i.jsx)(n.code,{children:"customName"}),", ",(0,i.jsx)(n.code,{children:"customStyleName"}),", etc., but in Modern.js Module, we do not recommend using functions in these configuration items.\nBecause we will call SWC in the esbuild plugin, and then when Rust calls these configuration functions through Node-API, a deadlock will occur."]}),"\n",(0,i.jsxs)(n.p,{children:["Simple function logic can actually be replaced by template language. Below is an example of using a template with ",(0,i.jsx)(n.code,{children:"customName"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"import { MyButton as Btn } from 'foo';\n"})}),"\n",(0,i.jsx)(n.p,{children:"Add the following configuration on the right-hand side:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"modulePluginImport({\n  pluginImport: [\n    {\n      libraryName: 'foo',\n      customName: 'foo/es/{{ member }}',\n    },\n  ],\n});\n"})}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"{{ member }}"})," in it will be replaced with the corresponding import member. After transformation:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"import Btn from 'foo/es/MyButton';\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Template ",(0,i.jsx)(n.code,{children:"customName: 'foo/es/{{ member }}'"})," is the same as ",(0,i.jsx)(n.code,{children:" customName: (member) => `foo/es/${member}` "}),", but template value has no performance overhead of Node-API."]}),"\n",(0,i.jsxs)(n.p,{children:["The template used here is ",(0,i.jsx)(n.a,{href:"https://handlebarsjs.com",target:"_blank",rel:"noopener noreferrer",children:"handlebars"}),". There are some useful builtin tools, Take the above import statement as an example:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"import { modulePluginImport } from '@modern-js/plugin-module-import';\nimport { moduleTools, defineConfig } from '@modern-js/module-tools';\n\nexport default defineConfig({\n  plugins: [\n    moduleTools(),\n    modulePluginImport({\n      pluginImport: [\n        {\n          libraryName: 'foo',\n          customName: 'foo/es/{{ kebabCase member }}',\n        },\n      ],\n    }),\n  ],\n});\n"})}),"\n",(0,i.jsx)(n.p,{children:"Transformed to:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"import Btn from 'foo/es/my-button';\n"})}),"\n",(0,i.jsx)(n.p,{children:"In addition to kebabCase, there are cameraCase, snakeCase, upperCase and lowerCase can be used as well."})]})}function l(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,o.useMDXComponents)(),e.components);return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(t,{...e})}):t(e)}var a=l;l.__RSPRESS_PAGE_META={},l.__RSPRESS_PAGE_META["en%2Fplugins%2Fofficial-list%2Fplugin-import.mdx"]={toc:[{text:"Quick Start",id:"quick-start",depth:2},{text:"Install",id:"install",depth:3},{text:"Register",id:"register",depth:3},{text:"Configurations",id:"configurations",depth:2},{text:"pluginImport",id:"pluginimport",depth:3},{text:"Notes",id:"notes",depth:2}],title:"Import Plugin",frontmatter:{}}}}]);