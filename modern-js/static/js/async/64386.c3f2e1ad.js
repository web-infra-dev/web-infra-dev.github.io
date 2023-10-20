(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["64386"],{4817:function(e,n,i){"use strict";i.r(n),i.d(n,{default:function(){return c}});var t=i("15169"),r=i("43932"),s=i("9880"),d=i("23169");function l(e){var n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",div:"div",a:"a",h3:"h3",pre:"pre"},(0,d.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Type:"})," ",(0,s.jsx)(n.code,{children:"boolean"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Default:"})," ",(0,s.jsx)(n.code,{children:"false"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Used to control whether to inline the bundler's runtime code into HTML."}),"\n",(0,s.jsxs)(n.div,{className:"rspress-directive tip",children:[(0,s.jsx)(n.div,{className:"rspress-directive-title",children:"What is runtimeChunk"}),(0,s.jsxs)(n.div,{className:"rspress-directive-content",children:[(0,s.jsxs)(n.p,{children:["Builder will generate a ",(0,s.jsx)(n.code,{children:"builder-runtime.js"})," file in the dist directory, which is the runtime code of webpack or Rspack."]}),"\n",(0,s.jsxs)(n.p,{children:["runtimeChunk is a piece of runtime code, which is provided by webpack or Rspack, that contains the necessary module processing logic, such as module loading, module parsing, etc. See ",(0,s.jsx)(n.a,{href:"https://webpack.js.org/concepts/manifest/#runtime",target:"_blank",rel:"noopener noreferrer",children:"Runtime"})," for details."]}),"\n"]})]}),"\n",(0,s.jsx)(n.p,{children:"In the production environment, Builder will inline the runtimeChunk file into the HTML file by default instead of writing it to the dist directory. This is done to reduce the number of file requests."}),"\n",(0,s.jsxs)(n.h3,{id:"disable-inlining",children:["Disable Inlining",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#disable-inlining",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["If you don't want the runtimeChunk file to be inlined into the HTML file, you can set ",(0,s.jsx)(n.code,{children:"disableInlineRuntimeChunk"})," to ",(0,s.jsx)(n.code,{children:"true"})," and a separate ",(0,s.jsx)(n.code,{children:"builder-runtime.js"})," file will be generated."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"export default {\n  output: {\n    disableInlineRuntimeChunk: true,\n  },\n};\n"})}),"\n",(0,s.jsxs)(n.h3,{id:"merge-into-page-chunk",children:["Merge Into Page Chunk",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#merge-into-page-chunk",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"If you don't want to generate a separate runtimeChunk file, but want the runtimeChunk code to be bundled into the page chunk, you can set the config like this:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    bundlerChain(chain) {\n      chain.optimization.runtimeChunk(false);\n    },\n  },\n};\n"})})]})}function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,d.useMDXComponents)(),e.components).wrapper;return n?(0,s.jsx)(n,(0,r._)((0,t._)({},e),{children:(0,s.jsx)(l,(0,t._)({},e))})):l(e)}var c=a;a.__RSPRESS_PAGE_META={},a.__RSPRESS_PAGE_META["..%2F..%2Fbuilder-doc%2Fdocs%2Fen%2Fconfig%2Foutput%2FdisableInlineRuntimeChunk.md"]={toc:[{text:"Disable Inlining",id:"disable-inlining",depth:3},{text:"Merge Into Page Chunk",id:"merge-into-page-chunk",depth:3}],title:""}},95411:function(e,n,i){"use strict";i.r(n),i.d(n,{default:function(){return o},frontmatter:function(){return u}});var t=i("15169"),r=i("43932"),s=i("9880"),d=i("23169"),l=i("4817");function a(e){var n=Object.assign({h1:"h1",a:"a",div:"div",p:"p"},(0,d.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h1,{id:"outputdisableinlineruntimechunk",children:["output.disableInlineRuntimeChunk",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#outputdisableinlineruntimechunk",children:"#"})]}),"\n",(0,s.jsxs)(n.div,{className:"rspress-directive tip",children:[(0,s.jsx)(n.div,{className:"rspress-directive-title",children:"TIP"}),(0,s.jsx)(n.div,{className:"rspress-directive-content",children:(0,s.jsxs)(n.p,{children:["This config is provided by Modern.js Builder, more detail can see ",(0,s.jsx)(n.a,{href:"https://modernjs.dev/builder/en/api/config-output.html#outputdisableinlineruntimechunk",target:"_blank",rel:"noopener noreferrer",children:"output.disableInlineRuntimeChunk"}),".\n"]})})]}),"\n","\n",(0,s.jsx)(l.default,{})]})}function c(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,d.useMDXComponents)(),e.components).wrapper;return n?(0,s.jsx)(n,(0,r._)((0,t._)({},e),{children:(0,s.jsx)(a,(0,t._)({},e))})):a(e)}var o=c;c.__RSPRESS_PAGE_META={},c.__RSPRESS_PAGE_META["en%2Fconfigure%2Fapp%2Foutput%2Fdisable-inline-runtime-chunk.mdx"]={toc:[],title:"output.disableInlineRuntimeChunk"};var u={sidebar_label:"disableInlineRuntimeChunk"}}}]);