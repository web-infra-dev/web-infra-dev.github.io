(self.webpackChunk_modern_js_builder_doc=self.webpackChunk_modern_js_builder_doc||[]).push([["8350"],{40897:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return d}});var s=r("9880"),i=r("23169"),t=r("69513");function l(e){let n=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",h3:"h3",code:"code",pre:"pre",ul:"ul",li:"li",strong:"strong",div:"div"},(0,i.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h1,{id:"vue-2-plugin",children:["Vue 2 Plugin",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#vue-2-plugin",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["The Vue 2 plugin provides support for building Vue 2 applications. The plugin internally integrates ",(0,s.jsx)(n.a,{href:"https://vue-loader.vuejs.org/",target:"_blank",rel:"noopener noreferrer",children:"vue-loader"})," and ",(0,s.jsx)(n.a,{href:"https://github.com/vuejs/jsx-vue2",target:"_blank",rel:"noopener noreferrer",children:"@vue/babel-preset-jsx"}),"."]}),"\n",(0,s.jsxs)(n.h2,{id:"quick-start",children:["Quick Start",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#quick-start",children:"#"})]}),"\n",(0,s.jsxs)(n.h3,{id:"install",children:["Install",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#install",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"You can install the plugin with the following command:"}),"\n","\n",(0,s.jsx)(t.PackageManagerTabs,{command:"add @modern-js/builder-plugin-vue2 -D"}),"\n",(0,s.jsxs)(n.h3,{id:"register",children:["Register",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#register",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["You can register Vue 2 plugin with the ",(0,s.jsx)(n.code,{children:"addPlugins"})," method:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"import { builderPluginVue2 } from '@modern-js/builder-plugin-vue2';\n\nbuilder.addPlugins([builderPluginVue2()]);\n"})}),"\n",(0,s.jsxs)(n.p,{children:["After installing the plugin, you can directly import ",(0,s.jsx)(n.code,{children:"*.vue"})," files in your code or use Vue's ",(0,s.jsx)(n.a,{href:"https://github.com/vuejs/jsx-vue2",target:"_blank",rel:"noopener noreferrer",children:"JSX syntax"})," without the need for additional configuration."]}),"\n",(0,s.jsxs)(n.h2,{id:"config",children:["Config",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#config",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"If you need to customize the compilation behavior of Vue, you can use the following configs."}),"\n",(0,s.jsxs)(n.h3,{id:"vueloaderoptions",children:["vueLoaderOptions",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#vueloaderoptions",children:"#"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Type:"})," ",(0,s.jsx)(n.code,{children:"VueLoaderOptions"})]}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"Default:"})}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"const defaultOptions = {\n  compilerOptions: {\n    preserveWhitespace: false,\n  },\n};\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Options passed to ",(0,s.jsx)(n.code,{children:"vue-loader"}),", please refer to the ",(0,s.jsx)(n.a,{href:"https://vue-loader.vuejs.org/",target:"_blank",rel:"noopener noreferrer",children:"vue-loader documentation"})," for detailed usage."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"builderPluginVue2({\n  vueLoaderOptions: {\n    hotReload: false,\n  },\n});\n"})}),"\n",(0,s.jsxs)(n.div,{className:"rspress-directive tip",children:[(0,s.jsx)(n.div,{className:"rspress-directive-title",children:"TIP"}),(0,s.jsx)(n.div,{className:"rspress-directive-content",children:(0,s.jsxs)(n.p,{children:["The Vue 2 plugin is using the ",(0,s.jsx)(n.code,{children:"vue-loader"})," v15. Please be aware that there may be configuration differences between v15 and the latest version.\n"]})})]}),"\n",(0,s.jsxs)(n.h3,{id:"vuejsxoptions",children:["vueJsxOptions",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#vuejsxoptions",children:"#"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"Type:"})}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"type VueJSXPresetOptions = {\n  compositionAPI?: boolean | string;\n  functional?: boolean;\n  injectH?: boolean;\n  vModel?: boolean;\n  vOn?: boolean;\n};\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"Default:"})}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"const defaultOptions = {\n  injectH: true,\n};\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Options passed to ",(0,s.jsx)(n.code,{children:"@vue/babel-preset-jsx"}),", please refer to the ",(0,s.jsx)(n.a,{href:"https://github.com/vuejs/jsx-vue2",target:"_blank",rel:"noopener noreferrer",children:"@vue/babel-preset-jsx documentation"})," for detailed usage."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"builderPluginVue2({\n  vueJsxOptions: {\n    injectH: false,\n  },\n});\n"})})]})}function a(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,i.useMDXComponents)(),e.components);return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}var d=a;a.__RSPRESS_PAGE_META={},a.__RSPRESS_PAGE_META["en%2Fplugins%2Fplugin-vue2.mdx"]={toc:[{text:"Quick Start",id:"quick-start",depth:2},{text:"Install",id:"install",depth:3},{text:"Register",id:"register",depth:3},{text:"Config",id:"config",depth:2},{text:"vueLoaderOptions",id:"vueloaderoptions",depth:3},{text:"vueJsxOptions",id:"vuejsxoptions",depth:3}],title:"Vue 2 Plugin",frontmatter:{}}}}]);