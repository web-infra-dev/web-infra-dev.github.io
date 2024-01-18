/*! For license information please see 6818.cc9a8595.js.LICENSE.txt */
(self.webpackChunk_modern_js_builder_doc=self.webpackChunk_modern_js_builder_doc||[]).push([["6818"],{52774:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return o}});var s=r("39980"),i=r("96954"),l=r("14032");function t(e){let n=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",h3:"h3",code:"code",pre:"pre",ul:"ul",li:"li",strong:"strong"},(0,i.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h1,{id:"vue-plugin",children:["Vue Plugin",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#vue-plugin",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["The Vue plugin provides support for building Vue 3 applications. The plugin internally integrates ",(0,s.jsx)(n.a,{href:"https://vue-loader.vuejs.org/",target:"_blank",rel:"noopener noreferrer",children:"vue-loader"})," and ",(0,s.jsx)(n.a,{href:"https://github.com/vuejs/babel-plugin-jsx",target:"_blank",rel:"noopener noreferrer",children:"@vue/babel-plugin-jsx"}),"."]}),"\n",(0,s.jsxs)(n.h2,{id:"quick-start",children:["Quick Start",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#quick-start",children:"#"})]}),"\n",(0,s.jsxs)(n.h3,{id:"install",children:["Install",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#install",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"You can install the plugin with the following command:"}),"\n","\n",(0,s.jsx)(l.PackageManagerTabs,{command:"add @modern-js/builder-plugin-vue -D"}),"\n",(0,s.jsxs)(n.h3,{id:"register",children:["Register",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#register",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["You can register Vue plugin with the ",(0,s.jsx)(n.code,{children:"addPlugins"})," method:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"import { builderPluginVue } from '@modern-js/builder-plugin-vue';\n\nbuilder.addPlugins([builderPluginVue()]);\n"})}),"\n",(0,s.jsxs)(n.p,{children:["After installing the plugin, you can directly import ",(0,s.jsx)(n.code,{children:"*.vue"})," files in your code or use Vue's ",(0,s.jsx)(n.a,{href:"https://github.com/vuejs/babel-plugin-jsx",target:"_blank",rel:"noopener noreferrer",children:"JSX syntax"})," without the need for additional configuration."]}),"\n",(0,s.jsxs)(n.h2,{id:"config",children:["Config",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#config",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"If you need to customize the compilation behavior of Vue, you can use the following configs."}),"\n",(0,s.jsxs)(n.h3,{id:"vueloaderoptions",children:["vueLoaderOptions",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#vueloaderoptions",children:"#"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Type:"})," ",(0,s.jsx)(n.code,{children:"VueLoaderOptions"})]}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"Default:"})}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"const defaultOptions = {\n  compilerOptions: {\n    preserveWhitespace: false,\n  },\n  experimentalInlineMatchResource: builder === 'rspack',\n};\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Options passed to ",(0,s.jsx)(n.code,{children:"vue-loader"}),", please refer to the ",(0,s.jsx)(n.a,{href:"https://vue-loader.vuejs.org/",target:"_blank",rel:"noopener noreferrer",children:"vue-loader documentation"})," for detailed usage."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"builderPluginVue({\n  vueLoaderOptions: {\n    hotReload: false,\n  },\n});\n"})}),"\n",(0,s.jsxs)(n.h3,{id:"vuejsxoptions",children:["vueJsxOptions",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#vuejsxoptions",children:"#"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"Type:"})}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"type VueJSXPluginOptions = {\n  /** transform `on: { click: xx }` to `onClick: xxx` */\n  transformOn?: boolean;\n  /** enable optimization or not. */\n  optimize?: boolean;\n  /** merge static and dynamic class / style attributes / onXXX handlers */\n  mergeProps?: boolean;\n  /** configuring custom elements */\n  isCustomElement?: (tag: string) => boolean;\n  /** enable object slots syntax */\n  enableObjectSlots?: boolean;\n  /** Replace the function used when compiling JSX expressions */\n  pragma?: string;\n};\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Default:"})," ",(0,s.jsx)(n.code,{children:"{}"})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Options passed to ",(0,s.jsx)(n.code,{children:"@vue/babel-plugin-jsx"}),", please refer to the ",(0,s.jsx)(n.a,{href:"https://github.com/vuejs/babel-plugin-jsx",target:"_blank",rel:"noopener noreferrer",children:"@vue/babel-plugin-jsx documentation"})," for detailed usage."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"builderPluginVue({\n  vueJsxOptions: {\n    transformOn: true,\n  },\n});\n"})})]})}function a(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,i.useMDXComponents)(),e.components);return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(t,{...e})}):t(e)}var o=a;a.__RSPRESS_PAGE_META={},a.__RSPRESS_PAGE_META["en%2Fplugins%2Fplugin-vue.mdx"]={toc:[{text:"Quick Start",id:"quick-start",depth:2},{text:"Install",id:"install",depth:3},{text:"Register",id:"register",depth:3},{text:"Config",id:"config",depth:2},{text:"vueLoaderOptions",id:"vueloaderoptions",depth:3},{text:"vueJsxOptions",id:"vuejsxoptions",depth:3}],title:"Vue Plugin",frontmatter:{}}}}]);