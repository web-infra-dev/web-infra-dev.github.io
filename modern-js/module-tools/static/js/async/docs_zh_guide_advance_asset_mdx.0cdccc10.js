(self.webpackChunk_modern_js_module_tools_docs=self.webpackChunk_modern_js_module_tools_docs||[]).push([["docs_zh_guide_advance_asset_mdx"],{90922:function(e,s,n){"use strict";n.r(s),n.d(s,{default:function(){return a}});var d,c=n("15169"),i=n("43932"),l=n("9880"),r=n("23169");function h(e){var s=Object.assign({h1:"h1",a:"a",p:"p",code:"code",h2:"h2",ul:"ul",li:"li",strong:"strong",pre:"pre"},(0,r.useMDXComponents)(),e.components);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(s.h1,{id:"处理静态资源",children:["处理静态资源",(0,l.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#处理静态资源",children:"#"})]}),"\n",(0,l.jsxs)(s.p,{children:["模块工程会对代码中使用的静态资源进行处理。如果需要配置，则可以使用 ",(0,l.jsx)(s.a,{href:"/api/config/build-config#asset",children:(0,l.jsx)(s.code,{children:"buildConfig.asset"})})," API。"]}),"\n",(0,l.jsxs)(s.h2,{id:"默认行为",children:["默认行为",(0,l.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#默认行为",children:"#"})]}),"\n",(0,l.jsx)(s.p,{children:"默认情况下，模块工程对于以下静态资源会进行处理："}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsxs)(s.li,{children:[(0,l.jsx)(s.code,{children:"'.svg'"}),"、",(0,l.jsx)(s.code,{children:"'.png'"}),"、",(0,l.jsx)(s.code,{children:"'.jpg'"}),"、",(0,l.jsx)(s.code,{children:"'.jpeg'"}),"、",(0,l.jsx)(s.code,{children:"'.gif'"}),"、",(0,l.jsx)(s.code,{children:"'.webp'"})]}),"\n",(0,l.jsxs)(s.li,{children:[(0,l.jsx)(s.code,{children:"'.ttf'"}),"、",(0,l.jsx)(s.code,{children:"'.otf'"}),"、",(0,l.jsx)(s.code,{children:"'.woff'"}),"、",(0,l.jsx)(s.code,{children:"'.woff2'"}),"、",(0,l.jsx)(s.code,{children:"'.eot'"})]}),"\n",(0,l.jsxs)(s.li,{children:[(0,l.jsx)(s.code,{children:"'.mp3'"}),"、",(0,l.jsx)(s.code,{children:"'.mp4'"}),"、",(0,l.jsx)(s.code,{children:"'.webm'"}),"、",(0,l.jsx)(s.code,{children:"'.ogg'"}),"、",(0,l.jsx)(s.code,{children:"'.wav'"}),"、",(0,l.jsx)(s.code,{children:"'.flac'"}),"、",(0,l.jsx)(s.code,{children:"'.aac'"}),"、",(0,l.jsx)(s.code,{children:"'.mov'"})]}),"\n"]}),"\n",(0,l.jsx)(s.p,{children:"对于静态文件的处理，模块工程目前默认支持的功能有："}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsxs)(s.li,{children:["输出静态资源至 ",(0,l.jsx)(s.code,{children:"./assets"}),"。"]}),"\n",(0,l.jsxs)(s.li,{children:["对于不超过 ",(0,l.jsx)(s.strong,{children:"10kb"})," 的文件会内联到代码中。"]}),"\n"]}),"\n",(0,l.jsxs)(s.h2,{id:"示例",children:["示例",(0,l.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#示例",children:"#"})]}),"\n",(0,l.jsx)(s.p,{children:"让我们看下面的例子："}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsx)(s.li,{children:"项目源代码："}),"\n"]}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-ts",meta:'title="./src/asset.ts"',children:"import img from './bg.png';\n"})}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsxs)(s.li,{children:["如果 ",(0,l.jsx)(s.code,{children:"bg.png"})," 的大小小于 10 kb，则此时产物目录结构和产物内容为："]}),"\n"]}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-bash",children:"./dist\n└── asset.js\n"})}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-js",meta:'title="./dist/asset.js"',children:"var img_default = 'data:image/png;base64,';\n"})}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsxs)(s.li,{children:["如果 ",(0,l.jsx)(s.code,{children:"bg.png"})," 的大小大于 10 kb，则此时产物目录结构和产物内容为："]}),"\n"]}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-bash",children:"./dist\n├── asset.js\n└── assets\n    └── bg.13e2aba2.png\n"})}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-js",meta:'title="./dist/asset.js"',children:"import img from './assets/bg.13e2aba2.png';\n"})}),"\n",(0,l.jsx)(s.p,{children:"当你想要修改默认行为的时候，可以使用以下 API："}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsxs)(s.li,{children:[(0,l.jsx)(s.code,{children:"asset.path"}),"：修改静态资源文件输出路径。"]}),"\n",(0,l.jsxs)(s.li,{children:[(0,l.jsx)(s.code,{children:"asset.limit"}),"：修改内联静态资源文件的阈值。"]}),"\n"]})]})}(d=globalThis).__RSPRESS_PAGE_META||(d.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["zh%2Fguide%2Fadvance%2Fasset.mdx"]={toc:[{text:"默认行为",id:"默认行为",depth:2},{text:"示例",id:"示例",depth:2}],title:"处理静态资源",frontmatter:{sidebar_position:7}};var a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},s=Object.assign({},(0,r.useMDXComponents)(),e.components).wrapper;return s?(0,l.jsx)(s,(0,i._)((0,c._)({},e),{children:(0,l.jsx)(h,(0,c._)({},e))})):h(e)}}}]);