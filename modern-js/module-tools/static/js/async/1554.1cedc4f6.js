(self.webpackChunk_modern_js_module_tools_docs=self.webpackChunk_modern_js_module_tools_docs||[]).push([["1554"],{850:function(e,s,n){"use strict";n.r(s),n.d(s,{default:function(){return r},frontmatter:function(){return o}});var i=n("15169"),d=n("43932"),t=n("9880"),l=n("23169");function c(e){var s=Object.assign({h1:"h1",a:"a",p:"p",code:"code",h2:"h2",ul:"ul",li:"li",strong:"strong",pre:"pre"},(0,l.useMDXComponents)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.h1,{id:"handle-static-assets",children:["Handle static assets",(0,t.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#handle-static-assets",children:"#"})]}),"\n",(0,t.jsxs)(s.p,{children:["Modern.js Module will handle static assets used in the code. If configuration is required, then the ",(0,t.jsx)(s.a,{href:"/en/api/config/build-config#asset",children:(0,t.jsx)(s.code,{children:"buildConfig.asset"})})," API can be used."]}),"\n",(0,t.jsxs)(s.h2,{id:"default-behavior",children:["Default behavior",(0,t.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#default-behavior",children:"#"})]}),"\n",(0,t.jsx)(s.p,{children:"By default, Modern.js Module handles the following static assets:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"'.svg'"}),"\u3001",(0,t.jsx)(s.code,{children:"'.png'"}),"\u3001",(0,t.jsx)(s.code,{children:"'.jpg'"}),"\u3001",(0,t.jsx)(s.code,{children:"'.jpeg'"}),"\u3001",(0,t.jsx)(s.code,{children:"'.gif'"}),"\u3001",(0,t.jsx)(s.code,{children:"'.webp'"})]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"'.ttf'"}),"\u3001",(0,t.jsx)(s.code,{children:"'.otf'"}),"\u3001",(0,t.jsx)(s.code,{children:"'.woff'"}),"\u3001",(0,t.jsx)(s.code,{children:"'.woff2'"}),"\u3001",(0,t.jsx)(s.code,{children:"'.eot'"})]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"'.mp3'"}),"\u3001",(0,t.jsx)(s.code,{children:"'.mp4'"}),"\u3001",(0,t.jsx)(s.code,{children:"'.webm'"}),"\u3001",(0,t.jsx)(s.code,{children:"'.ogg'"}),"\u3001",(0,t.jsx)(s.code,{children:"'.wav'"}),"\u3001",(0,t.jsx)(s.code,{children:"'.flac'"}),"\u3001",(0,t.jsx)(s.code,{children:"'.aac'"}),"\u3001",(0,t.jsx)(s.code,{children:"'.mov'"})]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"For the handling of static files, Modern.js Module currently supports the following functions."}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Set the static asset path to ",(0,t.jsx)(s.code,{children:". /assets"}),"."]}),"\n",(0,t.jsxs)(s.li,{children:["Files less than ",(0,t.jsx)(s.strong,{children:"10kb"})," will be inlined into the code."]}),"\n"]}),"\n",(0,t.jsxs)(s.h2,{id:"example",children:["Example",(0,t.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#example",children:"#"})]}),"\n",(0,t.jsx)(s.p,{children:"Let us look at the following example:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Project source code:"}),"\n"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-ts",meta:'title="./src/asset.ts"',children:"import img from './bg.png';\n//...\n"})}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["If the size of ",(0,t.jsx)(s.code,{children:"bg.png"})," is less than 10 kb, then the output directory structure and file content are."]}),"\n"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"./dist\n\u2514\u2500\u2500 asset.js\n"})}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-js",meta:'title="./dist/asset.js"',children:"var bg_default = 'data:image/png;base64,';\nconsole.info(bg_default);\n"})}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["If the size of ",(0,t.jsx)(s.code,{children:"bg.png"})," is larger than 10 kb, then the output directory structure and file content are."]}),"\n"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"./dist\n\u251C\u2500\u2500 asset.js\n\u2514\u2500\u2500 assets\n    \u2514\u2500\u2500 bg.13e2aba2.png\n"})}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-js",meta:'title="./dist/asset.js"',children:"import img from './assets/bg.13e2aba2.png';\nconsole.info(img);\n"})}),"\n",(0,t.jsx)(s.p,{children:"When wanting to modify the default behavior, the following API can be used:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"asset.path"}),": modify the output path of the static assets."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"asset.limit"}),": modify the threshold value for inline assets."]}),"\n"]})]})}function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},s=Object.assign({},(0,l.useMDXComponents)(),e.components).wrapper;return s?(0,t.jsx)(s,(0,d._)((0,i._)({},e),{children:(0,t.jsx)(c,(0,i._)({},e))})):c(e)}var r=a;a.__RSPRESS_PAGE_META={},a.__RSPRESS_PAGE_META["en%2Fguide%2Fadvance%2Fasset.mdx"]={toc:[{text:"Default behavior",id:"default-behavior",depth:2},{text:"Example",id:"example",depth:2}],title:"Handle static assets"};var o={sidebar_position:6}}}]);