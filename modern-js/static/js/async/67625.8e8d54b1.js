(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["67625"],{22914:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return c}});var s,o=r("15169"),i=r("43932"),t=r("9880"),d=r("23169");function l(e){var n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",a:"a",h3:"h3",pre:"pre",h4:"h4"},(0,d.useMDXComponents)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Type:"})," ",(0,t.jsx)(n.code,{children:"string | Record<BuilderTarget, string>"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Default:"})," ",(0,t.jsx)(n.code,{children:"undefined"})]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Add a prefix to ",(0,t.jsx)(n.a,{href:"https://webpack.js.org/configuration/resolve/#resolveextensions",target:"_blank",rel:"noopener noreferrer",children:"resolve.extensions"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"If multiple files share the same name but have different extensions, Builder will resolve the one with the extension listed first in the array and skip the rest."}),"\n",(0,t.jsxs)(n.h3,{id:"example",children:["Example",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#example",children:"#"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"export default {\n  source: {\n    resolveExtensionPrefix: '.web',\n  },\n};\n"})}),"\n",(0,t.jsx)(n.p,{children:"With the configuration above, the extensions array will become:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"// before\nconst extensions = ['.js', '.ts', ...];\n\n// after\nconst extensions = ['.web.js', '.js', '.web.ts' , '.ts', ...];\n"})}),"\n",(0,t.jsxs)(n.p,{children:["When ",(0,t.jsx)(n.code,{children:"import './foo'"})," in the code, the ",(0,t.jsx)(n.code,{children:"foo.web.js"})," file will be resolved first, then the ",(0,t.jsx)(n.code,{children:"foo.js"})," file."]}),"\n",(0,t.jsxs)(n.h4,{id:"set-according-to-targets",children:["Set according to Targets",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#set-according-to-targets",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:["When you build multiple targets at the same time, you can set different extension prefix for different targets. At this point, you need to set ",(0,t.jsx)(n.code,{children:"resolveExtensionPrefix"})," to an object whose key is the corresponding build target."]}),"\n",(0,t.jsxs)(n.p,{children:["For example to set different extension prefix for ",(0,t.jsx)(n.code,{children:"web"})," and ",(0,t.jsx)(n.code,{children:"node"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"export default {\n  output: {\n    source: {\n      resolveExtensionPrefix: {\n        web: '.web',\n        node: '.node',\n      },\n    },\n  },\n};\n"})}),"\n",(0,t.jsxs)(n.p,{children:["When ",(0,t.jsx)(n.code,{children:"import './foo'"})," in the code, the ",(0,t.jsx)(n.code,{children:"foo.node.js"})," file will be resolved for node target, and the ",(0,t.jsx)(n.code,{children:"foo.web.js"})," file will be resolved for web target."]})]})}(s=globalThis).__RSPRESS_PAGE_META||(s.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["..%2F..%2Fbuilder-doc%2Fdocs%2Fen%2Fconfig%2Fsource%2FresolveExtensionPrefix.md"]={toc:[{text:"Example",id:"example",depth:3},{text:"Set according to Targets",id:"set-according-to-targets",depth:4}],title:"",frontmatter:{}};var c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,d.useMDXComponents)(),e.components).wrapper;return n?(0,t.jsx)(n,(0,i._)((0,o._)({},e),{children:(0,t.jsx)(l,(0,o._)({},e))})):l(e)}},78490:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return a}});var s,o=r("15169"),i=r("43932"),t=r("9880"),d=r("23169"),l=r("22914");function c(e){var n=Object.assign({h1:"h1",a:"a",div:"div",p:"p"},(0,d.useMDXComponents)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.h1,{id:"sourceresolveextensionprefix",children:["source.resolveExtensionPrefix",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#sourceresolveextensionprefix",children:"#"})]}),"\n",(0,t.jsxs)(n.div,{className:"modern-directive tip",children:[(0,t.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,t.jsx)(n.div,{className:"modern-directive-content",children:(0,t.jsxs)(n.p,{children:["This config is provided by Modern.js Builder, more detail can see ",(0,t.jsx)(n.a,{href:"https://modernjs.dev/builder/en/api/config-source.html#sourceresolveextensionprefix",target:"_blank",rel:"noopener noreferrer",children:"source.resolveExtensionPrefix"}),".\n"]})})]}),"\n","\n",(0,t.jsx)(l.default,{})]})}(s=globalThis).__RSPRESS_PAGE_META||(s.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["en%2Fconfigure%2Fapp%2Fsource%2Fresolve-extension-prefix.mdx"]={toc:[],title:"source.resolveExtensionPrefix",frontmatter:{sidebar_label:"resolveExtensionPrefix"}};var a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,d.useMDXComponents)(),e.components).wrapper;return n?(0,t.jsx)(n,(0,i._)((0,o._)({},e),{children:(0,t.jsx)(c,(0,o._)({},e))})):c(e)}}}]);