/*! For license information please see 2847.b00829ac.js.LICENSE.txt */
(self.webpackChunk_modern_js_module_tools_docs=self.webpackChunk_modern_js_module_tools_docs||[]).push([["2847"],{64801:function(e,n,s){"use strict";s.r(n);var t=s("39980"),i=s("96954");function o(e){let n=Object.assign({pre:"pre",code:"code",p:"p"},(0,i.useMDXComponents)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",meta:'title="modern.config.ts"',children:"import { myEsbuildPlugin } from './myEsbuildPlugin';\n\nexport default defineConfig({\n  buildConfig: {\n    esbuildOptions: options => {\n      options.plugins = [myEsbuildPlugin, ...options.plugins];\n      return options;\n    },\n  },\n});\n"})}),"\n",(0,t.jsx)(n.p,{children:"When adding an esbuild plugin, please note that you need to add the plugin at the beginning of the plugins array. This is because the Modern.js Module is also integrated into the entire build process through an esbuild plugin. Therefore, custom plugins need to be registered with higher priority."})]})}function r(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,i.useMDXComponents)(),e.components);return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}n.default=r,r.__RSPRESS_PAGE_META={},r.__RSPRESS_PAGE_META["en%2Fcomponents%2Fregister-esbuild-plugin.mdx"]={toc:[],title:"",frontmatter:{}}}}]);