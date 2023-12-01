(self.webpackChunk_modern_js_builder_doc=self.webpackChunk_modern_js_builder_doc||[]).push([["6206"],{98868:function(e,n,s){"use strict";e.exports="data:image/svg+xml,%3Csvg width='32' height='32' viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M28 10v18H10V10h18m0-2H10a2 2 0 0 0-2 2v18a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2Z' fill='%23cccccc'/%3E%3Cpath d='M4 18H2V4a2 2 0 0 1 2-2h14v2H4Z' fill='%23cccccc'/%3E%3C/svg%3E"},45038:function(e,n,s){"use strict";e.exports="data:image/svg+xml,%3Csvg width='32' height='32' viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='m13 24l-9-9l1.41-1.41L13 21.17L26.59 7.59L28 9L13 24z' fill='%2360c054'/%3E%3C/svg%3E"},66214:function(e,n,s){"use strict";e.exports="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='%2360c054' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'%3E%3C/path%3E%3Cpath d='M4 6l16 0'%3E%3C/path%3E%3Cpath d='M4 18l5 0'%3E%3C/path%3E%3Cpath d='M4 12h13a3 3 0 0 1 0 6h-4l2 -2m0 4l-2 -2'%3E%3C/path%3E%3C/svg%3E"},27529:function(e,n,s){"use strict";e.exports="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='%23cccccc' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'%3E%3C/path%3E%3Cpath d='M4 6l10 0'%3E%3C/path%3E%3Cpath d='M4 18l10 0'%3E%3C/path%3E%3Cpath d='M4 12h17l-3 -3m0 6l3 -3'%3E%3C/path%3E%3C/svg%3E"},67481:function(e,n,s){"use strict";s.r(n),s.d(n,{default:function(){return l}});var i=s("9880"),r=s("23169"),o=s("1411");function t(e){let n=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",h3:"h3",code:"code",pre:"pre"},(0,r.useMDXComponents)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.h1,{id:"image-compress-plugin",children:["Image Compress Plugin",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#image-compress-plugin",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"With the image compression plugin, image resources used in the project can be compressed to reduce the size of the artifacts without affecting the visual appearance of the image."}),"\n",(0,i.jsxs)(n.h2,{id:"quick-start",children:["Quick Start",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#quick-start",children:"#"})]}),"\n",(0,i.jsxs)(n.h3,{id:"install",children:["Install",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#install",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"You can install the plugin with the following command:"}),"\n","\n",(0,i.jsx)(o.PackageManagerTabs,{command:"add @modern-js/builder-plugin-image-compress -D"}),"\n",(0,i.jsxs)(n.h3,{id:"register",children:["Register",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#register",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["In upper-level frameworks such as Modern.js, you can register image compress plugin through the ",(0,i.jsx)(n.code,{children:"builderPlugins"})," config:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"import { builderPluginImageCompress } from '@modern-js/builder-plugin-image-compress';\n\nexport default {\n  builderPlugins: [builderPluginImageCompress()],\n};\n"})}),"\n",(0,i.jsxs)(n.p,{children:["If you are using the Builder's Node API, you can register image compress plugin through the ",(0,i.jsx)(n.code,{children:"addPlugins"})," method:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"import { builderPluginImageCompress } from '@modern-js/builder-plugin-image-compress';\n\n// add the plugin to the builder instance\nbuilder.addPlugins([builderPluginImageCompress()]);\n"})}),"\n",(0,i.jsxs)(n.h2,{id:"config",children:["Config",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#config",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["The plugin accepts an array of compressor configuration options, each of which can be either a string or an object. The string can be the name of a built-in compressor and its default configuration enabled.\nOr use the object format configuration and specify the compressor in the ",(0,i.jsx)(n.code,{children:"use"})," field. The remaining fields of the object will be used as compressor configuration options."]}),"\n",(0,i.jsxs)(n.p,{children:["By default, the plugin will enable ",(0,i.jsx)(n.code,{children:"jpeg"}),", ",(0,i.jsx)(n.code,{children:"png"}),", ",(0,i.jsx)(n.code,{children:"ico"})," image compressors, which are equivalent to the following two examples:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"builderPluginImageCompress(['jpeg', 'png', 'ico']);\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"builderPluginImageCompress([{ use: 'jpeg' }, { use: 'png' }, { use: 'ico' }]);\n"})}),"\n",(0,i.jsx)(n.p,{children:"The default configuration can be overridden by specifying a configuration option.\nFor example, to allow the jpeg compressor to recognize new extension name and to set the quality of the png compressor."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"builderPluginImageCompress([\n  { use: 'jpeg', test: /\\.(jpg|jpeg|jpe)$/ },\n  { use: 'png', minQuality: 50 },\n  'ico',\n]);\n"})}),"\n",(0,i.jsxs)(n.p,{children:["The default ",(0,i.jsx)(n.code,{children:"png"})," compressor is lossy.\nIf you want to replace it with a lossless compressor, you can use the following configuration."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"builderPluginImageCompress(['jpeg', 'pngLossless', 'ico']);\n"})}),"\n",(0,i.jsx)(n.p,{children:"The list of configuration options will eventually be converted to the corresponding bundler loader configuration, so compressors follow the same bottom-to-top matching rule."}),"\n",(0,i.jsxs)(n.p,{children:["For example, the ",(0,i.jsx)(n.code,{children:"png"})," compressor will take precedence over the ",(0,i.jsx)(n.code,{children:"pngLossless"})," compressor for the following configuration:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"builderPluginImageCompress(['jpeg', 'pngLossless', 'ico', 'png']);\n"})}),"\n",(0,i.jsxs)(n.p,{children:["For more information on compressors, please visit ",(0,i.jsx)(n.a,{href:"https://image.napi.rs/docs",target:"_blank",rel:"noopener noreferrer",children:"@napi-rs/image"}),"."]})]})}function a(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,r.useMDXComponents)(),e.components);return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(t,{...e})}):t(e)}var l=a;a.__RSPRESS_PAGE_META={},a.__RSPRESS_PAGE_META["en%2Fplugins%2Fplugin-image-compress.mdx"]={toc:[{text:"Quick Start",id:"quick-start",depth:2},{text:"Install",id:"install",depth:3},{text:"Register",id:"register",depth:3},{text:"Config",id:"config",depth:2}],title:"Image Compress Plugin",frontmatter:{}}}}]);