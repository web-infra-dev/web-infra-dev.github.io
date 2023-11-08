(self.webpackChunk_modern_js_builder_doc=self.webpackChunk_modern_js_builder_doc||[]).push([["571"],{23410:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return o}});var n=t("9880"),i=t("23169");function r(e){let s=Object.assign({h1:"h1",a:"a",p:"p",div:"div",h2:"h2",ul:"ul",li:"li",strong:"strong",pre:"pre",code:"code",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,i.useMDXComponents)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(s.h1,{id:"import-static-assets",children:["Import Static Assets",(0,n.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#import-static-assets",children:"#"})]}),"\n",(0,n.jsx)(s.p,{children:"Builder supports import static assets, including images, fonts, and medias."}),"\n",(0,n.jsxs)(s.div,{className:"rspress-directive tip",children:[(0,n.jsx)(s.div,{className:"rspress-directive-title",children:"What is Static Assets"}),(0,n.jsx)(s.div,{className:"rspress-directive-content",children:(0,n.jsx)(s.p,{children:"Static assets are files that are part of a web application and do not change, even when the application is being used. Examples of static assets include images, fonts, medias, stylesheets, and JavaScript files. These assets are typically stored on a web server or CDN, and delivered to the user's web browser when the Web application is accessed. Because they do not change, static assets can be cached by the browser, which helps to improve the performance of the Web application."})})]}),"\n",(0,n.jsxs)(s.h2,{id:"assets-format",children:["Assets Format",(0,n.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#assets-format",children:"#"})]}),"\n",(0,n.jsx)(s.p,{children:"The following are the formats supported by Builder by default:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Image"}),": png, jpg, jpeg, gif, svg, bmp, webp, ico, apng, avif, tiff."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Fonts"}),": woff, woff2, eot, ttf, otf, ttc."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Media"}),": mp4, webm, ogg, mp3, wav, flac, aac, mov."]}),"\n"]}),"\n",(0,n.jsxs)(s.p,{children:["If you need to import assets in other formats, please refer to ",(0,n.jsx)(s.a,{href:"#extend-asset-types",children:"Extend Asset Types"}),"."]}),"\n",(0,n.jsxs)(s.div,{className:"rspress-directive tip",children:[(0,n.jsx)(s.div,{className:"rspress-directive-title",children:"SVG images"}),(0,n.jsx)(s.div,{className:"rspress-directive-content",children:(0,n.jsxs)(s.p,{children:["SVG image is a special case. Builder support convert SVG to React components, so SVG is processed separately. For details, see ",(0,n.jsx)(s.a,{href:"/guide/basic/svg-assets",children:"Import SVG Assets"}),".\n"]})})]}),"\n",(0,n.jsxs)(s.h2,{id:"import-assets-in-js-file",children:["Import Assets in JS file",(0,n.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#import-assets-in-js-file",children:"#"})]}),"\n",(0,n.jsx)(s.p,{children:"In JS files, you can directly import static assets in relative paths:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-tsx",children:"// Import the logo.png image in the static directory\nimport logo from './static/logo.png';\n\nexport default = () => <img src={logo} />;\n"})}),"\n",(0,n.jsxs)(s.p,{children:["Import with ",(0,n.jsx)(s.a,{href:"/guide/advanced/alias",children:"alias"})," are also supported:"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-tsx",children:"import logo from '@/static/logo.png';\n\nexport default = () => <img src={logo} />;\n"})}),"\n",(0,n.jsxs)(s.h2,{id:"import-assets-in-css-file",children:["Import Assets in CSS file",(0,n.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#import-assets-in-css-file",children:"#"})]}),"\n",(0,n.jsx)(s.p,{children:"In CSS files, you can reference static assets in relative paths:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-css",children:".logo {\n  background-image: url('../static/logo.png');\n}\n"})}),"\n",(0,n.jsxs)(s.p,{children:["Import with ",(0,n.jsx)(s.a,{href:"/guide/advanced/alias",children:"alias"})," are also supported:"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-css",children:".logo {\n  background-image: url('@/static/logo.png');\n}\n"})}),"\n",(0,n.jsxs)(s.h2,{id:"import-results",children:["Import Results",(0,n.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#import-results",children:"#"})]}),"\n",(0,n.jsx)(s.p,{children:"The result of importing static assets depends on the file size:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"When the file size is greater than 10KB, a URL will be returned, and the file will be output to the dist directory."}),"\n",(0,n.jsx)(s.li,{children:"When the file size is less than 10KB, it will be automatically inlined to Base64 format."}),"\n"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-js",children:"import largeImage from './static/largeImage.png';\nimport smallImage from './static/smallImage.png';\n\nconsole.log(largeImage); // \"/static/largeImage.6c12aba3.png\"\nconsole.log(smallImage); // \"data:image/png;base64,iVBORw0KGgo...\"\n"})}),"\n",(0,n.jsxs)(s.p,{children:["For a more detailed introduction to asset inlining, please refer to the ",(0,n.jsx)(s.a,{href:"/guide/optimization/inline-assets",children:"Static Asset Inlining"})," chapter."]}),"\n",(0,n.jsxs)(s.h2,{id:"output-files",children:["Output Files",(0,n.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#output-files",children:"#"})]}),"\n",(0,n.jsx)(s.p,{children:"When static assets are imported, they will be output to the dist directory. You can:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["Modify the output filename through ",(0,n.jsx)(s.a,{href:"/en/api/config-output#outputfilename",children:"output.filename"}),"."]}),"\n",(0,n.jsxs)(s.li,{children:["Modify the output path through ",(0,n.jsx)(s.a,{href:"/en/api/config-output#outputdistpath",children:"output.distPath"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(s.p,{children:["Please read ",(0,n.jsx)(s.a,{href:"/guide/basic/output-files",children:"Output Files"})," for details."]}),"\n",(0,n.jsxs)(s.h2,{id:"url-prefix",children:["URL Prefix",(0,n.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#url-prefix",children:"#"})]}),"\n",(0,n.jsx)(s.p,{children:"The URL returned after importing a asset will automatically include the path prefix:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["In development, using ",(0,n.jsx)(s.a,{href:"/en/api/config-dev#devassetprefix",children:"dev.assetPrefix"})," to set the path prefix."]}),"\n",(0,n.jsxs)(s.li,{children:["In production, using ",(0,n.jsx)(s.a,{href:"/en/api/config-output#outputassetprefix",children:"output.assetPrefix"})," to set the path prefix."]}),"\n"]}),"\n",(0,n.jsxs)(s.p,{children:["For example, you can set ",(0,n.jsx)(s.code,{children:"output.assetPrefix"})," to ",(0,n.jsx)(s.code,{children:"https://modern.com"}),":"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-js",children:"import logo from './static/logo.png';\n\nconsole.log(logo); // \"https://modern.com/static/logo.6c12aba3.png\"\n"})}),"\n",(0,n.jsxs)(s.h2,{id:"add-type-declaration",children:["Add Type Declaration",(0,n.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#add-type-declaration",children:"#"})]}),"\n",(0,n.jsx)(s.p,{children:"When you import static assets in TypeScript code, TypeScript may prompt that the module is missing a type definition:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{children:"TS2307: Cannot find module './logo.png' or its corresponding type declarations.\n"})}),"\n",(0,n.jsxs)(s.p,{children:["To fix this, you need to add a type declaration file for the static assets, please create a ",(0,n.jsx)(s.code,{children:"src/global.d.ts"})," file, and add the corresponding type declaration. Taking png images as an example, you need to add the following declarations:"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-ts",meta:'title="src/global.d.ts"',children:"declare module '*.png' {\n  const content: string;\n  export default content;\n}\n"})}),"\n",(0,n.jsxs)(s.p,{children:["After adding the type declaration, if the type error still exists, you can try to restart the current IDE, or adjust the directory where ",(0,n.jsx)(s.code,{children:"global.d.ts"})," is located, making sure the TypeScript can correctly identify the type definition."]}),"\n",(0,n.jsxs)(s.h2,{id:"extend-asset-types",children:["Extend Asset Types",(0,n.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#extend-asset-types",children:"#"})]}),"\n",(0,n.jsxs)(s.p,{children:["If the built-in asset types in Builder cannot meet your requirements, you can modify the built-in webpack/Rspack configuration and extend the asset types you need using ",(0,n.jsx)(s.a,{href:"/api/config-tools#toolsbundlerchain",children:"tools.bundlerChain"}),"."]}),"\n",(0,n.jsxs)(s.p,{children:["For example, if you want to treat ",(0,n.jsx)(s.code,{children:"*.pdf"})," files as assets and directly output them to the dist directory, you can add the following configuration:"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-ts",children:"export default {\n  tools: {\n    bundlerChain(chain) {\n      chain.module\n        .rule('pdf')\n        .test(/\\.pdf$/)\n        .type('asset/resource');\n    },\n  },\n};\n"})}),"\n",(0,n.jsxs)(s.p,{children:["After adding the above configuration, you can import ",(0,n.jsx)(s.code,{children:"*.pdf"})," files in your code, for example:"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-js",children:"import myFile from './static/myFile.pdf';\n\nconsole.log(myFile); // \"/static/myFile.6c12aba3.pdf\"\n"})}),"\n",(0,n.jsx)(s.p,{children:"For more information about asset modules, please refer to:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"https://www.rspack.dev/guide/asset-module.html#asset-modules",target:"_blank",rel:"noopener noreferrer",children:"Rspack Documentation - Asset modules"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"https://webpack.js.org/guides/asset-modules/",target:"_blank",rel:"noopener noreferrer",children:"webpack Documentation - Asset modules"})}),"\n"]}),"\n",(0,n.jsxs)(s.h2,{id:"image-format",children:["Image Format",(0,n.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#image-format",children:"#"})]}),"\n",(0,n.jsx)(s.p,{children:"When using image assets, you can choose a appropriate image format according to the pros and cons in the table below."}),"\n",(0,n.jsxs)(s.table,{children:["\n",(0,n.jsxs)(s.thead,{children:["\n",(0,n.jsxs)(s.tr,{children:["\n",(0,n.jsx)(s.th,{children:"Format"}),"\n",(0,n.jsx)(s.th,{children:"Pros"}),"\n",(0,n.jsx)(s.th,{children:"Cons"}),"\n",(0,n.jsx)(s.th,{children:"Scenarios"}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(s.tbody,{children:["\n",(0,n.jsxs)(s.tr,{children:["\n",(0,n.jsx)(s.td,{children:"PNG"}),"\n",(0,n.jsx)(s.td,{children:"Lossless compression, no loss of picture details, no distortion, support for translucency"}),"\n",(0,n.jsx)(s.td,{children:"Not suitable for pictures with complex color tables"}),"\n",(0,n.jsx)(s.td,{children:"Suitable for pictures with few colors and well-defined borders, suitable for logos, icons, transparent images and other scenes"}),"\n"]}),"\n",(0,n.jsxs)(s.tr,{children:["\n",(0,n.jsx)(s.td,{children:"JPG"}),"\n",(0,n.jsx)(s.td,{children:"Rich colors"}),"\n",(0,n.jsx)(s.td,{children:"Lossy compression, which will cause image distortion, does not support transparency"}),"\n",(0,n.jsx)(s.td,{children:"Suitable for pictures with a large number of colors, gradients, and overly complex pictures, suitable for portrait photos, landscapes and other scenes"}),"\n"]}),"\n",(0,n.jsxs)(s.tr,{children:["\n",(0,n.jsx)(s.td,{children:"WebP"}),"\n",(0,n.jsx)(s.td,{children:"Supports both lossy and lossless compression, supports transparency, and is much smaller than PNG and JPG"}),"\n",(0,n.jsx)(s.td,{children:"iOS compatibility is not good"}),"\n",(0,n.jsx)(s.td,{children:"Pixel images of almost any scene, and the hosting environment that supports WebP, should prefer WebP image format"}),"\n"]}),"\n",(0,n.jsxs)(s.tr,{children:["\n",(0,n.jsx)(s.td,{children:"SVG"}),"\n",(0,n.jsx)(s.td,{children:"Lossless format, no distortion, supports transparency"}),"\n",(0,n.jsx)(s.td,{children:"Not suitable for complex graphics"}),"\n",(0,n.jsx)(s.td,{children:"Suitable for vector graphics, suitable for icons"}),"\n"]}),"\n"]}),"\n"]})]})}function a(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:s}=Object.assign({},(0,i.useMDXComponents)(),e.components);return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(r,{...e})}):r(e)}var o=a;a.__RSPRESS_PAGE_META={},a.__RSPRESS_PAGE_META["en%2Fguide%2Fbasic%2Fstatic-assets.md"]={toc:[{text:"Assets Format",id:"assets-format",depth:2},{text:"Import Assets in JS file",id:"import-assets-in-js-file",depth:2},{text:"Import Assets in CSS file",id:"import-assets-in-css-file",depth:2},{text:"Import Results",id:"import-results",depth:2},{text:"Output Files",id:"output-files",depth:2},{text:"URL Prefix",id:"url-prefix",depth:2},{text:"Add Type Declaration",id:"add-type-declaration",depth:2},{text:"Extend Asset Types",id:"extend-asset-types",depth:2},{text:"Image Format",id:"image-format",depth:2}],title:"Import Static Assets"}}}]);