/*! For license information please see 29395.38239a7d.js.LICENSE.txt */
(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["29395"],{2231:function(e,n,s){"use strict";s.r(n);var i=s("39980"),a=s("96954");function t(e){let n=Object.assign({h1:"h1",a:"a",ul:"ul",li:"li",strong:"strong",pre:"pre",code:"code",p:"p",h3:"h3",div:"div"},(0,a.useMDXComponents)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.h1,{id:"outputfilename",children:["output.filename",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#outputfilename",children:"#"})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"Type:"})}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"type FilenameConfig = {\n  js?: string;\n  css?: string;\n  svg?: string;\n  font?: string;\n  image?: string;\n  media?: string;\n};\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"Default:"})}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"// Development\nconst devDefaultFilename = {\n  js: '[name].js',\n  css: '[name].css',\n  svg: '[name].[contenthash:8].svg',\n  font: '[name].[contenthash:8][ext]',\n  image: '[name].[contenthash:8][ext]',\n  media: '[name].[contenthash:8][ext]',\n};\n\n// Production\nconst prodDefaultFilename = {\n  js: '[name].[contenthash:8].js',\n  css: '[name].[contenthash:8].css',\n  svg: '[name].[contenthash:8].svg',\n  font: '[name].[contenthash:8][ext]',\n  image: '[name].[contenthash:8][ext]',\n  media: '[name].[contenthash:8][ext]',\n};\n"})}),"\n",(0,i.jsx)(n.p,{children:"Sets the filename of dist files."}),"\n",(0,i.jsxs)(n.p,{children:["After the production build, there will be a hash in the middle of the filename by default. This behavior can be disabled through the ",(0,i.jsx)(n.code,{children:"output.disableFilenameHash"})," config."]}),"\n",(0,i.jsx)(n.p,{children:"The following are the details of each filename:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"js"}),": The name of the JavaScript file."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"css"}),": The name of the CSS style file."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"svg"}),": The name of the SVG image."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"font"}),": The name of the font file."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"image"}),": The name of a non-SVG image."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"media"}),": The name of a media asset, such as a video."]}),"\n"]}),"\n",(0,i.jsxs)(n.h3,{id:"example",children:["Example",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#example",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["To set the name of the JavaScript file to ",(0,i.jsx)(n.code,{children:"[name]_script.js"}),", use the following configuration:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"export default {\n  output: {\n    filename: {\n      js:\n        process.env.NODE_ENV === 'production'\n          ? '[name]_script.[contenthash:8].js'\n          : '[name]_script.js',\n    },\n  },\n};\n"})}),"\n",(0,i.jsxs)(n.div,{className:"rspress-directive tip",children:[(0,i.jsx)(n.div,{className:"rspress-directive-title",children:"Filename hash"}),(0,i.jsxs)(n.div,{className:"rspress-directive-content",children:[(0,i.jsxs)(n.p,{children:["Usually, we only set the filename hash in the production mode (i.e., when ",(0,i.jsx)(n.code,{children:"process.env.NODE_ENV === 'production'"}),")."]}),"\n",(0,i.jsxs)(n.p,{children:["If you set the filename hash in the development mode, it may cause HMR to fail (especially for CSS files). This is because every time the file content changes, the hash value changes, preventing tools like ",(0,i.jsx)(n.a,{href:"https://www.npmjs.com/package/mini-css-extract-plugin",target:"_blank",rel:"noopener noreferrer",children:"mini-css-extract-plugin"})," from reading the latest file content.\n"]})]})]}),"\n",(0,i.jsxs)(n.h3,{id:"filename-of-async-modules",children:["Filename of Async Modules",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#filename-of-async-modules",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"When you import a module via dynamic import, the module will be bundled into a single file, and its default naming rules are as follows:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["In the development environment, the filename will be generated based on the module path, such as ",(0,i.jsx)(n.code,{children:"dist/static/js/async/src_add_ts.js"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["In the production environment, it will be a random numeric id, such as ",(0,i.jsx)(n.code,{children:"dist/static/js/async/798.27e3083e.js"}),". This is to avoid leaking the source code path in the production environment, and the number of characters is also less."]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",meta:'title="src/index.ts"',children:"const { add } = await import('./add.ts');\n"})}),"\n",(0,i.jsxs)(n.p,{children:["If you want to specify a fixed name for the async module, you can use the ",(0,i.jsx)(n.a,{href:"https://webpack.js.org/api/module-methods/#magic-comments",target:"_blank",rel:"noopener noreferrer",children:"magic comments"})," provided by the bundler to achieve this, using ",(0,i.jsx)(n.code,{children:"webpackChunkName "})," to specify the module name:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",meta:'title="src/index.ts"',children:"const { add } = await import(\n  /* webpackChunkName: \"my-chunk-name\" */ './add.ts'\n);\n"})}),"\n",(0,i.jsxs)(n.p,{children:["After specifying the module name as above, the generated file will be ",(0,i.jsx)(n.code,{children:"dist/static/js/async/my-chunk-name.js"}),"."]})]})}function l(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,a.useMDXComponents)(),e.components);return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(t,{...e})}):t(e)}n.default=l,l.__RSPRESS_PAGE_META={},l.__RSPRESS_PAGE_META["en%2Fconfigure%2Fapp%2Foutput%2Ffilename.mdx"]={toc:[{text:"Example",id:"example",depth:3},{text:"Filename of Async Modules",id:"filename-of-async-modules",depth:3}],title:"output.filename",frontmatter:{sidebar_label:"filename"}}}}]);