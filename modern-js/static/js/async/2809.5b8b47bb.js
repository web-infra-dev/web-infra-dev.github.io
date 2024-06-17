/*! For license information please see 2809.5b8b47bb.js.LICENSE.txt */
(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["2809"],{78865:function(e,n,s){"use strict";s.r(n);var r=s("39980"),t=s("9580");function o(e){let n=Object.assign({h1:"h1",a:"a",ul:"ul",li:"li",strong:"strong",code:"code",p:"p",h3:"h3",pre:"pre",h4:"h4"},(0,t.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"sourceresolveextensionprefix",children:["source.resolveExtensionPrefix",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#sourceresolveextensionprefix",children:"#"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Type:"})," ",(0,r.jsx)(n.code,{children:"string | Record<BuilderTarget, string>"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Default:"})," ",(0,r.jsx)(n.code,{children:"undefined"})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Add a prefix to ",(0,r.jsx)(n.a,{href:"https://webpack.js.org/configuration/resolve/#resolveextensions",target:"_blank",rel:"noopener noreferrer",children:"resolve.extensions"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"If multiple files share the same name but have different extensions, Builder will resolve the one with the extension listed first in the array and skip the rest."}),"\n",(0,r.jsxs)(n.h3,{id:"example",children:["Example",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#example",children:"#"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"export default {\n  source: {\n    resolveExtensionPrefix: '.web',\n  },\n};\n"})}),"\n",(0,r.jsx)(n.p,{children:"With the configuration above, the extensions array will become:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"// before\nconst extensions = ['.js', '.ts', ...];\n\n// after\nconst extensions = ['.web.js', '.js', '.web.ts' , '.ts', ...];\n"})}),"\n",(0,r.jsxs)(n.p,{children:["When ",(0,r.jsx)(n.code,{children:"import './foo'"})," in the code, the ",(0,r.jsx)(n.code,{children:"foo.web.js"})," file will be resolved first, then the ",(0,r.jsx)(n.code,{children:"foo.js"})," file."]}),"\n",(0,r.jsxs)(n.h4,{id:"set-according-to-targets",children:["Set according to Targets",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#set-according-to-targets",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["When you build multiple targets at the same time, you can set different extension prefix for different targets. At this point, you need to set ",(0,r.jsx)(n.code,{children:"resolveExtensionPrefix"})," to an object whose key is the corresponding build target."]}),"\n",(0,r.jsxs)(n.p,{children:["For example to set different extension prefix for ",(0,r.jsx)(n.code,{children:"web"})," and ",(0,r.jsx)(n.code,{children:"node"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"export default {\n  output: {\n    source: {\n      resolveExtensionPrefix: {\n        web: '.web',\n        node: '.node',\n      },\n    },\n  },\n};\n"})}),"\n",(0,r.jsxs)(n.p,{children:["When ",(0,r.jsx)(n.code,{children:"import './foo'"})," in the code, the ",(0,r.jsx)(n.code,{children:"foo.node.js"})," file will be resolved for node target, and the ",(0,r.jsx)(n.code,{children:"foo.web.js"})," file will be resolved for web target."]})]})}function i(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,t.ah)(),e.components);return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}n.default=i,i.__RSPRESS_PAGE_META={},i.__RSPRESS_PAGE_META["en%2Fconfigure%2Fapp%2Fsource%2Fresolve-extension-prefix.mdx"]={toc:[{text:"Example",id:"example",depth:3},{text:"Set according to Targets",id:"set-according-to-targets",depth:4}],title:"source.resolveExtensionPrefix",frontmatter:{sidebar_label:"resolveExtensionPrefix"}}}}]);