/*! For license information please see 99109.71052479.js.LICENSE.txt */
(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["99109"],{54604:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return d}});var n=s("39980"),r=s("96954");function i(e){let t=Object.assign({ul:"ul",li:"li",strong:"strong",pre:"pre",code:"code",p:"p",h3:"h3",a:"a"},(0,r.useMDXComponents)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.strong,{children:"Type:"})}),"\n"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",children:"type DistPathConfig = {\n  root?: string;\n  html?: string;\n  js?: string;\n  css?: string;\n  svg?: string;\n  font?: string;\n  wasm?: string;\n  image?: string;\n  media?: string;\n  server?: string;\n  worker?: string;\n};\n"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.strong,{children:"Default:"})}),"\n"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",children:"const defaultDistPath = {\n  root: 'dist',\n  html: 'html',\n  js: 'static/js',\n  css: 'static/css',\n  svg: 'static/svg',\n  font: 'static/font',\n  wasm: 'static/wasm',\n  image: 'static/image',\n  media: 'static/media',\n  server: 'bundles',\n  worker: 'worker',\n};\n"})}),"\n",(0,n.jsx)(t.p,{children:"Set the directory of the dist files. Builder will output files to the corresponding subdirectory according to the file type."}),"\n",(0,n.jsx)(t.p,{children:"Detail:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"root"}),": The root directory of all files."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"html"}),": The output directory of HTML files."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"js"}),": The output directory of JavaScript files."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"css"}),": The output directory of CSS style files."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"svg"}),": The output directory of SVG images."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"font"}),": The output directory of font files."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"wasm"}),": The output directory of WebAssembly files."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"image"}),": The output directory of non-SVG images."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"media"}),": The output directory of media assets, such as videos."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"server"}),": The output directory of server bundles when target is ",(0,n.jsx)(t.code,{children:"node"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"worker"}),": The output directory of worker bundles when target is ",(0,n.jsx)(t.code,{children:"service-worker"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(t.h3,{id:"root-directory",children:["Root Directory",(0,n.jsx)(t.a,{className:"header-anchor","aria-hidden":"true",href:"#root-directory",children:"#"})]}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"root"})," is the root directory of the build artifacts and can be specified as a relative or absolute path. If the value of ",(0,n.jsx)(t.code,{children:"root"})," is a relative path, it will be appended to the project's root directory to form an absolute path."]}),"\n",(0,n.jsxs)(t.p,{children:["Other directories can only be specified as relative paths and will be output relative to the ",(0,n.jsx)(t.code,{children:"root"})," directory."]}),"\n",(0,n.jsxs)(t.h3,{id:"example",children:["Example",(0,n.jsx)(t.a,{className:"header-anchor","aria-hidden":"true",href:"#example",children:"#"})]}),"\n",(0,n.jsxs)(t.p,{children:["The JavaScript files will be output to the ",(0,n.jsx)(t.code,{children:"distPath.root"})," + ",(0,n.jsx)(t.code,{children:"distPath.js"})," directory, which is ",(0,n.jsx)(t.code,{children:"dist/static/js"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["If you need to output JavaScript files to the ",(0,n.jsx)(t.code,{children:"build/resource/js"})," directory, you can add following config:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",children:"export default {\n  output: {\n    distPath: {\n      root: 'build',\n      js: 'resource/js',\n    },\n  },\n};\n"})})]})}function o(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:t}=Object.assign({},(0,r.useMDXComponents)(),e.components);return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(i,{...e})}):i(e)}var d=o;o.__RSPRESS_PAGE_META={},o.__RSPRESS_PAGE_META["..%2F..%2Fbuilder-doc%2Fdocs%2Fen%2Fconfig%2Foutput%2FdistPath.md"]={toc:[{text:"Root Directory",id:"root-directory",depth:3},{text:"Example",id:"example",depth:3}],title:"",frontmatter:{}}},60859:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return c}});var n=s("39980"),r=s("96954"),i=s("54604");function o(e){let t=Object.assign({h1:"h1",a:"a"},(0,r.useMDXComponents)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.h1,{id:"outputdistpath",children:["output.distPath",(0,n.jsx)(t.a,{className:"header-anchor","aria-hidden":"true",href:"#outputdistpath",children:"#"})]}),"\n","\n",(0,n.jsx)(i.default,{})]})}function d(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:t}=Object.assign({},(0,r.useMDXComponents)(),e.components);return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(o,{...e})}):o(e)}var c=d;d.__RSPRESS_PAGE_META={},d.__RSPRESS_PAGE_META["en%2Fconfigure%2Fapp%2Foutput%2Fdist-path.mdx"]={toc:[],title:"output.distPath",frontmatter:{sidebar_label:"distPath"}}}}]);