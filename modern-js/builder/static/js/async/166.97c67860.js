(self.webpackChunk_modern_js_builder_doc=self.webpackChunk_modern_js_builder_doc||[]).push([["166"],{7399:function(e,n,o){"use strict";o.r(n),o.d(n,{default:function(){return d}});var r,i=o("15169"),t=o("43932"),a=o("9880"),s=o("23169");function c(e){var n=Object.assign({h1:"h1",a:"a",h3:"h3",p:"p",pre:"pre",code:"code",hr:"hr",blockquote:"blockquote",h4:"h4"},(0,s.useMDXComponents)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.h1,{id:"features-faq",children:["Features FAQ",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#features-faq",children:"#"})]}),"\n",(0,a.jsxs)(n.h3,{id:"how-to-import-ui-component-library-on-demand",children:["How to import UI Component library on demand?",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#how-to-import-ui-component-library-on-demand",children:"#"})]}),"\n",(0,a.jsxs)(n.p,{children:["If you need to configure the on-demand import of the component library, you can configure it through ",(0,a.jsx)(n.a,{href:"/api/config-source#sourcetransformimport",children:"source.transformImport"}),", which is equivalent to ",(0,a.jsx)(n.a,{href:"https://www.npmjs.com/package/babel-plugin-import",target:"_blank",rel:"noopener noreferrer",children:"babel-plugin-import"}),"."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"export default {\n  source: {\n    transformImport: [\n      {\n        libraryName: 'xxx-components',\n        libraryDirectory: 'es',\n        style: true,\n      },\n    ],\n  },\n};\n"})}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsxs)(n.h3,{id:"how-to-run-eslint-during-compilation",children:["How to run ESLint during compilation?",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#how-to-run-eslint-during-compilation",children:"#"})]}),"\n",(0,a.jsxs)(n.p,{children:["For the sake of compilation performance, Builder will not perform ESLint verification during the compilation process by default. If you need this function, you can manually install and register the ",(0,a.jsx)(n.a,{href:"https://github.com/webpack",target:"_blank",rel:"noopener noreferrer",children:"eslint-webpack-plugin"})," in the community -contrib/eslint-webpack-plugin)."]}),"\n",(0,a.jsx)(n.p,{children:"The sample code to register the plugin is as follows:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"import ESLintPlugin from 'eslint-webpack-plugin';\n\nexport default {\n  tools: {\n    bundlerChain(chain) {\n      chain.plugin('eslint-plugin').use(ESLintPlugin, [\n        {\n          extensions: ['.js', '.ts', '.jsx', 'tsx', '.mjs'],\n        },\n      ]);\n    },\n  },\n};\n"})}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsxs)(n.p,{children:["For more detailed usage, please refer to the ",(0,a.jsx)(n.a,{href:"https://github.com/webpack-contrib/eslint-webpack-plugin",target:"_blank",rel:"noopener noreferrer",children:"eslint-webpack-plugin"})," documentation."]}),"\n"]}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsxs)(n.h3,{id:"how-to-configure-cdn-path-for-static-assets",children:["How to configure CDN path for static assets?",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#how-to-configure-cdn-path-for-static-assets",children:"#"})]}),"\n",(0,a.jsxs)(n.p,{children:["If you need to upload static assets such as JS and CSS to CDN for use, you can set the URL prefix of static assets through the ",(0,a.jsx)(n.a,{href:"/api/config-output#outputassetprefix",children:"output.assetPrefix"})," configuration."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"export default {\n  output: {\n    assetPrefix: 'https://cdn.example.com/assets/',\n  },\n};\n"})}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsxs)(n.h3,{id:"how-to-clear-the-webpack-cache",children:["How to clear the webpack cache?",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#how-to-clear-the-webpack-cache",children:"#"})]}),"\n",(0,a.jsxs)(n.p,{children:["By default, Builder's webpack cache is generated in the ",(0,a.jsx)(n.code,{children:"./node_modules/.cache/webpack"})," directory."]}),"\n",(0,a.jsx)(n.p,{children:"If you need to clear the local webpack cache, you can execute the following command:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"rm -rf ./node_modules/.cache\n"})}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsxs)(n.h3,{id:"how-to-remove-console-after-production-build",children:["How to remove console after production build?",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#how-to-remove-console-after-production-build",children:"#"})]}),"\n",(0,a.jsxs)(n.p,{children:["When the production environment is built, we can remove the ",(0,a.jsx)(n.code,{children:"console"})," from the code, so as to avoid the log of the development environment being output to the production environment."]}),"\n",(0,a.jsxs)(n.p,{children:["Builder provides a configuration option to remove console by default, please see ",(0,a.jsx)(n.a,{href:"/en/api/config-performance#performanceremoveconsole",children:"performance.removeConsole"}),"."]}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsxs)(n.h3,{id:"how-to-view-the-final-generated-webpack--rspack-configuration",children:["How to view the final generated webpack / Rspack configuration?",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#how-to-view-the-final-generated-webpack--rspack-configuration",children:"#"})]}),"\n",(0,a.jsxs)(n.h4,{id:"viewing-with-the-inspect-command",children:["Viewing with the inspect command",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#viewing-with-the-inspect-command",children:"#"})]}),"\n",(0,a.jsxs)(n.p,{children:["When you using an upper-level framework such as Modern.js, the framework usually provides ",(0,a.jsx)(n.a,{href:"https://modernjs.dev/en/apis/app/commands.html",target:"_blank",rel:"noopener noreferrer",children:"inspect command"})," to view the final Modern.js Builder configuration and webpack / Rspack configuration generated by the project."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"\u279C npx modern inspect\n\nInspect config succeed, open following files to view the content:\n\n  - Builder Config: /root/my-project/dist/builder.config.js\n  - Rspack Config (web): /root/my-project/dist/rspack.config.web.js\n"})}),"\n",(0,a.jsxs)(n.h4,{id:"viewing-with-the-builder-debug-mode",children:["Viewing with the Builder debug mode",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#viewing-with-the-builder-debug-mode",children:"#"})]}),"\n",(0,a.jsxs)(n.p,{children:["By adding the ",(0,a.jsx)(n.code,{children:"DEBUG=builder"})," environment variable when executing the build, the ",(0,a.jsx)(n.a,{href:"/guide/debug/debug-mode",children:"debug mode"})," of the Builder can be enabled, and the final generated webpack or Rspack configuration will be output to the dist directory."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"\u279C DEBUG=builder pnpm dev\n\ndebug   create context [1842.90 ms]\ndebug   add default plugins [1874.45 ms]\ndebug   add default plugins done [1938.57 ms]\n...\n\nInspect config succeed, open following files to view the content:\n\n  - Builder Config: /root/my-project/dist/builder.config.js\n  - Rspack Config (web): /root/my-project/dist/rspack.config.web.js\n"})}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsxs)(n.h3,{id:"how-to-ignore-specific-warnings",children:["How to ignore specific warnings?",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#how-to-ignore-specific-warnings",children:"#"})]}),"\n",(0,a.jsx)(n.p,{children:"By default, Builder will print all error and warning logs generated by the build process."}),"\n",(0,a.jsx)(n.p,{children:"If a large number of warning logs are generated due to the three-party package, it cannot be processed temporarily, and you want to ignore it. Specific warning logs can be ignored through the build configuration provided by webpack / Rspack."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"export default {\n  tools: {\n    bundlerChain: chain => {\n      chain.ignoreWarnings([/Using \\/ for division outside of calc()/]);\n    },\n  },\n};\n"})}),"\n",(0,a.jsxs)(n.p,{children:["For details, please refer to: ",(0,a.jsx)(n.a,{href:"https://webpack.js.org/configuration/other-options/#ignorewarnings",target:"_blank",rel:"noopener noreferrer",children:"ignoreWarnings"}),"."]})]})}(r=globalThis).__RSPRESS_PAGE_META||(r.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["en%2Fguide%2Ffaq%2Ffeatures.md"]={toc:[{text:"How to import UI Component library on demand?",id:"how-to-import-ui-component-library-on-demand",depth:3},{text:"How to run ESLint during compilation?",id:"how-to-run-eslint-during-compilation",depth:3},{text:"How to configure CDN path for static assets?",id:"how-to-configure-cdn-path-for-static-assets",depth:3},{text:"How to clear the webpack cache?",id:"how-to-clear-the-webpack-cache",depth:3},{text:"How to remove console after production build?",id:"how-to-remove-console-after-production-build",depth:3},{text:"How to view the final generated webpack / Rspack configuration?",id:"how-to-view-the-final-generated-webpack--rspack-configuration",depth:3},{text:"Viewing with the inspect command",id:"viewing-with-the-inspect-command",depth:4},{text:"Viewing with the Builder debug mode",id:"viewing-with-the-builder-debug-mode",depth:4},{text:"How to ignore specific warnings?",id:"how-to-ignore-specific-warnings",depth:3}],title:"Features FAQ",frontmatter:{}};var d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,s.useMDXComponents)(),e.components).wrapper;return n?(0,a.jsx)(n,(0,t._)((0,i._)({},e),{children:(0,a.jsx)(c,(0,i._)({},e))})):c(e)}}}]);