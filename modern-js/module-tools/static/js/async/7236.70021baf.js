(self.webpackChunk_modern_js_module_tools_docs=self.webpackChunk_modern_js_module_tools_docs||[]).push([["7236"],{26502:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return u}});var s=t("9880"),i=t("23169");function o(e){let n=Object.assign({pre:"pre",code:"code",p:"p"},(0,i.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",meta:'title="modern.config.ts"',children:"import { myEsbuildPlugin } from './myEsbuildPlugin';\n\nexport default defineConfig({\n  buildConfig: {\n    esbuildOptions: options => {\n      options.plugins = [myEsbuildPlugin, ...options.plugins];\n      return options;\n    },\n  },\n});\n"})}),"\n",(0,s.jsx)(n.p,{children:"When adding an esbuild plugin, please note that you need to add the plugin at the beginning of the plugins array. This is because the Modern.js Module is also integrated into the entire build process through an esbuild plugin. Therefore, custom plugins need to be registered with higher priority."})]})}function r(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,i.useMDXComponents)(),e.components);return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}var u=r;r.__RSPRESS_PAGE_META={},r.__RSPRESS_PAGE_META["en%2Fcomponents%2Fregister-esbuild-plugin.mdx"]={toc:[],title:"",frontmatter:{}}}}]);