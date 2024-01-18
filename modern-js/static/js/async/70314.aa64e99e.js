/*! For license information please see 70314.aa64e99e.js.LICENSE.txt */
(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["70314"],{8534:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return d}});var n=s("39980"),i=s("96954");function r(e){let t=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",code:"code",pre:"pre",ul:"ul",li:"li"},(0,i.useMDXComponents)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.h1,{id:"output-files",children:["Output Files",(0,n.jsx)(t.a,{className:"header-anchor","aria-hidden":"true",href:"#output-files",children:"#"})]}),"\n",(0,n.jsx)(t.p,{children:"This chapter will introduces the directory structure of output files and how to control the output directory of different types of files."}),"\n",(0,n.jsxs)(t.h2,{id:"default-directory-structure",children:["Default Directory Structure",(0,n.jsx)(t.a,{className:"header-anchor","aria-hidden":"true",href:"#default-directory-structure",children:"#"})]}),"\n",(0,n.jsxs)(t.p,{children:["The following is a basic directory for output files. By default, the compiled files will be output in the ",(0,n.jsx)(t.code,{children:"dist"})," directory of current project."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"dist\n\u251C\u2500\u2500 static\n\u2502   \u251C\u2500\u2500 css\n\u2502   \u2502   \u251C\u2500\u2500 [name].[hash].css\n\u2502   \u2502   \u2514\u2500\u2500 [name].[hash].css.map\n\u2502   \u2502\n\u2502   \u2514\u2500\u2500 js\n\u2502       \u251C\u2500\u2500 [name].[hash].js\n\u2502       \u251C\u2500\u2500 [name].[hash].js.LICENSE.txt\n\u2502       \u2514\u2500\u2500 [name].[hash].js.map\n\u2502\n\u2514\u2500\u2500 html\n    \u2514\u2500\u2500 [name]\n        \u2514\u2500\u2500 index.html\n"})}),"\n",(0,n.jsx)(t.p,{children:"The most common output files are HTML files, JS files, and CSS files:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["HTML files: default output to the ",(0,n.jsx)(t.code,{children:"html"})," directory."]}),"\n",(0,n.jsxs)(t.li,{children:["JS files: default output to ",(0,n.jsx)(t.code,{children:"static/js"})," directory,"]}),"\n",(0,n.jsxs)(t.li,{children:["CSS files: default output to the ",(0,n.jsx)(t.code,{children:"static/css"})," directory."]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"In addition, JS files and CSS files sometimes generate some related files:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["License files: contains open source license, which is output to the same level directory of the JS file, and adds ",(0,n.jsx)(t.code,{children:".LICENSE.txt"})," suffix."]}),"\n",(0,n.jsxs)(t.li,{children:["Source Map files: contains the source code mappings, which is output to the same level directory of JS files and CSS files, and adds a ",(0,n.jsx)(t.code,{children:".map"})," suffix."]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["In the filename, ",(0,n.jsx)(t.code,{children:"[name]"})," represents the entry name corresponding to this file, such as ",(0,n.jsx)(t.code,{children:"index"}),", ",(0,n.jsx)(t.code,{children:"main"}),". ",(0,n.jsx)(t.code,{children:"[hash]"})," is the hash value generated based on the content of the file."]}),"\n",(0,n.jsxs)(t.h2,{id:"modify-the-directory",children:["Modify the Directory",(0,n.jsx)(t.a,{className:"header-anchor","aria-hidden":"true",href:"#modify-the-directory",children:"#"})]}),"\n",(0,n.jsx)(t.p,{children:"Builder provides some configs to modify the directory or filename, you can:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Modify the filename through ",(0,n.jsx)(t.a,{href:"/configure/app/output/filename",children:"output.filename"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:["Modify the output path of through ",(0,n.jsx)(t.a,{href:"/configure/app/output/dist-path",children:"output.distPath"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:["Modify the license file through ",(0,n.jsx)(t.a,{href:"/configure/app/output/legal-comments",children:"output.legalComments"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:["Remove Source Map file through ",(0,n.jsx)(t.a,{href:"/configure/app/output/disable-source-map",children:"output.disableSourceMap"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:["Remove the folder corresponding to the HTML files through ",(0,n.jsx)(t.a,{href:"/configure/app/html/disable-html-folder",children:"html.disableHtmlFolder"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(t.h2,{id:"static-assets",children:["Static Assets",(0,n.jsx)(t.a,{className:"header-anchor","aria-hidden":"true",href:"#static-assets",children:"#"})]}),"\n",(0,n.jsxs)(t.p,{children:["When you import static assets such as images, SVG, fonts, media, etc. in the code, they will also be output to the ",(0,n.jsx)(t.code,{children:"dist/static"})," directory, and automatically assigned to the corresponding subdirectories according to the file type:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"dist\n\u2514\u2500\u2500 static\n    \u251C\u2500\u2500 image\n    \u2502   \u2514\u2500\u2500 foo.[hash].png\n    \u2502\n    \u251C\u2500\u2500 svg\n    \u2502   \u2514\u2500\u2500 bar.[hash].svg\n    \u2502\n    \u251C\u2500\u2500 font\n    \u2502   \u2514\u2500\u2500 baz.[hash].woff2\n    \u2502\n    \u2514\u2500\u2500 media\n        \u2514\u2500\u2500 qux.[hash].mp4\n"})}),"\n",(0,n.jsxs)(t.p,{children:["You can use the ",(0,n.jsx)(t.a,{href:"/configure/app/output/dist-path",children:"output.distPath"})," config to uniformly input these static assets into a directory, for example, output to the ",(0,n.jsx)(t.code,{children:"assets"})," directory:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",children:"export default {\n  output: {\n    distPath: {\n      image: 'assets',\n      svg: 'assets',\n      font: 'assets',\n      media: 'assets',\n    },\n  },\n};\n"})}),"\n",(0,n.jsx)(t.p,{children:"The above config produces the following directory structure:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"dist\n\u2514\u2500\u2500 assets\n    \u251C\u2500\u2500 foo.[hash].png\n    \u251C\u2500\u2500 bar.[hash].svg\n    \u251C\u2500\u2500 baz.[hash].woff2\n    \u2514\u2500\u2500 qux.[hash].mp4\n"})}),"\n",(0,n.jsxs)(t.h2,{id:"nodejs-output-directory",children:["Node.js Output Directory",(0,n.jsx)(t.a,{className:"header-anchor","aria-hidden":"true",href:"#nodejs-output-directory",children:"#"})]}),"\n",(0,n.jsxs)(t.p,{children:["When you enable SSR or SSG features in Modern.js, Modern.js will generate a Node.js bundle after the build and output it to the ",(0,n.jsx)(t.code,{children:"bundles"})," directory."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"dist\n\u251C\u2500\u2500 bundles\n\u2502   \u2514\u2500\u2500 [name].js\n\u251C\u2500\u2500 static\n\u2514\u2500\u2500 html\n"})}),"\n",(0,n.jsx)(t.p,{children:"Node.js files usually only contain JS files, no HTML or CSS. Also, JS file names will not contain hash."}),"\n",(0,n.jsxs)(t.p,{children:["You can modify the output path of Node.js files through the ",(0,n.jsx)(t.a,{href:"/configure/app/output/dist-path",children:"output.distPath.server"})," config."]}),"\n",(0,n.jsxs)(t.p,{children:["For example, output Node.js files to the ",(0,n.jsx)(t.code,{children:"server"})," directory:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",children:"export default {\n  output: {\n    distPath: {\n      server: 'server',\n    },\n  },\n};\n"})}),"\n",(0,n.jsxs)(t.h2,{id:"flatten-the-directory",children:["Flatten the Directory",(0,n.jsx)(t.a,{className:"header-anchor","aria-hidden":"true",href:"#flatten-the-directory",children:"#"})]}),"\n",(0,n.jsx)(t.p,{children:"Sometimes you don't want the dist directory to have too many levels, you can set the directory to an empty string to flatten the generated directory."}),"\n",(0,n.jsx)(t.p,{children:"See the example below:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",children:"export default {\n  output: {\n    distPath: {\n      js: '',\n      css: '',\n      html: '',\n    },\n  },\n  html: {\n    disableHtmlFolder: true,\n  }\n};\n"})}),"\n",(0,n.jsx)(t.p,{children:"The above config produces the following directory structure:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"dist\n\u251C\u2500\u2500 [name].[hash].css\n\u251C\u2500\u2500 [name].[hash].css.map\n\u251C\u2500\u2500 [name].[hash].js\n\u251C\u2500\u2500 [name].[hash].js.map\n\u2514\u2500\u2500 [name].html\n"})}),"\n",(0,n.jsxs)(t.h2,{id:"not-written-to-disk",children:["Not Written to Disk",(0,n.jsx)(t.a,{className:"header-anchor","aria-hidden":"true",href:"#not-written-to-disk",children:"#"})]}),"\n",(0,n.jsx)(t.p,{children:"By default, Modern.js will write the generated files to disk, so developers can view the file content or configure proxy rules for static assets."}),"\n",(0,n.jsx)(t.p,{children:"In development, you can choose to keep the generated files in the Dev Server's memory to reduce the overhead of file operations."}),"\n",(0,n.jsxs)(t.p,{children:["Just set the ",(0,n.jsx)(t.code,{children:"dev.writeToDisk"})," config to ",(0,n.jsx)(t.code,{children:"false"}),":"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",children:"export default {\n  dev: {\n    writeToDisk: false,\n  },\n};\n"})})]})}function o(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:t}=Object.assign({},(0,i.useMDXComponents)(),e.components);return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(r,{...e})}):r(e)}var d=o;o.__RSPRESS_PAGE_META={},o.__RSPRESS_PAGE_META["en%2Fguides%2Fbasic-features%2Foutput-files.mdx"]={toc:[{text:"Default Directory Structure",id:"default-directory-structure",depth:2},{text:"Modify the Directory",id:"modify-the-directory",depth:2},{text:"Static Assets",id:"static-assets",depth:2},{text:"Node.js Output Directory",id:"nodejs-output-directory",depth:2},{text:"Flatten the Directory",id:"flatten-the-directory",depth:2},{text:"Not Written to Disk",id:"not-written-to-disk",depth:2}],title:"Output Files",frontmatter:{sidebar_position:10}}}}]);