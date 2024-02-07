/*! For license information please see 3415.76e85ae9.js.LICENSE.txt */
(self.webpackChunk_modern_js_builder_doc=self.webpackChunk_modern_js_builder_doc||[]).push([["3415"],{40358:function(e,n,i){"use strict";i.r(n);var o=i("39980"),s=i("96954");function d(e){let n=Object.assign({h1:"h1",a:"a",p:"p",code:"code",pre:"pre",h2:"h2"},(0,s.useMDXComponents)(),e.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.h1,{id:"debug-mode",children:["Debug Mode",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#debug-mode",children:"#"})]}),"\n",(0,o.jsxs)(n.p,{children:["Builder provides a debug mode to troubleshoot problems, you can add the ",(0,o.jsx)(n.code,{children:"DEBUG=builder"})," environment variable when executing a build to enable Builder's debug mode."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"# Debug development environment\nDEBUG=builder pnpm dev\n\n# Debug production environment\nDEBUG=builder pnpm build\n"})}),"\n",(0,o.jsx)(n.p,{children:"In debug mode, Builder will output some additional log information, and write the Builder config and webpack config to the dist directory, which is convenient for developers to view and debug."}),"\n",(0,o.jsxs)(n.h2,{id:"log-information",children:["Log Information",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#log-information",children:"#"})]}),"\n",(0,o.jsxs)(n.p,{children:["In debug mode, you will see some additional information output from the shell, among which are some process logs starting with ",(0,o.jsx)(n.code,{children:"debug"}),", indicating what operations are performed inside the Builder."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"$ DEBUG=builder pnpm dev\n\ndebug create context [1842.90 ms]\ndebug add default plugins [1874.45 ms]\ndebug add default plugins done [1938.57 ms]\ndebug init plugins [2388.29 ms]\ndebug init plugins done [2389.48 ms]\n...\n"})}),"\n",(0,o.jsx)(n.p,{children:"In addition, the following logs will be output in the Shell, indicating that the Builder has written the internally generated build configs to disk, and you can open these config files to view the corresponding content."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"Inspect config succeeds, open following files to view the content:\n\n   - Builder Config: /Project/demo/dist/builder.config.js\n   - Webpack Config (web): /Project/demo/dist/webpack.config.web.js\n"})}),"\n",(0,o.jsxs)(n.h2,{id:"builder-config-file",children:["Builder Config File",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#builder-config-file",children:"#"})]}),"\n",(0,o.jsxs)(n.p,{children:["In debug mode, Builder will automatically generate ",(0,o.jsx)(n.code,{children:"dist/builder.config.js"})," file, which contains the final generated Builder config. In this file, you can know the final result of the Builder config you passed in after being processed by the framework and Builder."]}),"\n",(0,o.jsx)(n.p,{children:"The structure of the file is as follows:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"module.exports = {\n  dev: {\n    // some configs...\n  },\n  source: {\n    // some configs...\n  },\n  // other configs...\n};\n"})}),"\n",(0,o.jsxs)(n.p,{children:["For a complete introduction to Builder config, please see the ",(0,o.jsx)(n.a,{href:"https://modernjs.dev/builder/guide/basic/builder-config.html",target:"_blank",rel:"noopener noreferrer",children:"Builder Config"})," chapter."]}),"\n",(0,o.jsxs)(n.h2,{id:"webpack-config-file",children:["Webpack Config File",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#webpack-config-file",children:"#"})]}),"\n",(0,o.jsxs)(n.p,{children:["If the current project is built using webpack, then in debug mode, Builder will also automatically generate ",(0,o.jsx)(n.code,{children:"dist/webpack.config.web.js"})," file, which contains the final generated webpack config. In this file, you can see what is included in the config that Builder finally passes to webpack."]}),"\n",(0,o.jsx)(n.p,{children:"The structure of the file is as follows:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"module.exports = {\n  resolve: {\n    // some resolve configs...\n  },\n  module: {\n    // some webpack loaders...\n  },\n  plugins: [\n    // some webpack plugins...\n  ],\n  // other configs...\n};\n"})}),"\n",(0,o.jsxs)(n.p,{children:["In addition, if the project configures additional build targets, such as enabling the SSR capability of the framework (corresponding to additional Node.js build target), an additional ",(0,o.jsx)(n.code,{children:"webpack.config.node.js"})," file will be generated in the ",(0,o.jsx)(n.code,{children:"dist"})," directory, corresponding to the webpack config for SSR bundles."]}),"\n",(0,o.jsxs)(n.p,{children:["For a complete introduction to webpack configs, please see ",(0,o.jsx)(n.a,{href:"https://webpack.js.org/concepts/config/",target:"_blank",rel:"noopener noreferrer",children:"webpack official documentation"}),"."]}),"\n",(0,o.jsxs)(n.h2,{id:"rspack-config-file",children:["Rspack Config File",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#rspack-config-file",children:"#"})]}),"\n",(0,o.jsxs)(n.p,{children:["If the current project is built using Rspack, then in debug mode, Builder will also automatically generate ",(0,o.jsx)(n.code,{children:"dist/rspack.config.web.js"})," file, which contains the final generated Rspack config. In this file, you can see what is included in the config that Builder finally passes to Rspack."]}),"\n",(0,o.jsx)(n.p,{children:"The structure of the file is as follows:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"module.exports = {\n  resolve: {\n    // some resolve configs...\n  },\n  module: {\n    // some Rspack loaders...\n  },\n  plugins: [\n    // some Rspack plugins...\n  ],\n  // other configs...\n};\n"})}),"\n",(0,o.jsxs)(n.p,{children:["For a complete introduction to Rspack configs, please see ",(0,o.jsx)(n.a,{href:"https://rspack.dev/config/",target:"_blank",rel:"noopener noreferrer",children:"Rspack official documentation"}),"."]})]})}function r(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,s.useMDXComponents)(),e.components);return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}n.default=r,r.__RSPRESS_PAGE_META={},r.__RSPRESS_PAGE_META["en%2Fguide%2Fdebug%2Fdebug-mode.md"]={toc:[{text:"Log Information",id:"log-information",depth:2},{text:"Builder Config File",id:"builder-config-file",depth:2},{text:"Webpack Config File",id:"webpack-config-file",depth:2},{text:"Rspack Config File",id:"rspack-config-file",depth:2}],title:"Debug Mode",frontmatter:{}}}}]);