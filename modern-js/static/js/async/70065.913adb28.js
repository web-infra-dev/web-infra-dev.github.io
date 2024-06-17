/*! For license information please see 70065.913adb28.js.LICENSE.txt */
(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["70065"],{40715:function(e,n,i){"use strict";i.r(n);var s=i("39980"),t=i("9580");function a(e){let n=Object.assign({h1:"h1",a:"a",ul:"ul",li:"li",strong:"strong",pre:"pre",code:"code",p:"p",h3:"h3"},(0,t.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h1,{id:"outputdataurilimit",children:["output.dataUriLimit",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#outputdataurilimit",children:"#"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"Type:"})}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"type DataUriLimitConfig = {\n  svg?: number;\n  font?: number;\n  image?: number;\n  media?: number;\n};\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"Default:"})}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"const defaultDatUriLimit = {\n  svg: 10000,\n  font: 10000,\n  image: 10000,\n  media: 10000,\n};\n"})}),"\n",(0,s.jsx)(n.p,{children:"Set the size threshold to inline static assets such as images and fonts."}),"\n",(0,s.jsx)(n.p,{children:"By default, static assets will be Base64 encoded and inline into the page if the size is less than 10KB."}),"\n",(0,s.jsxs)(n.p,{children:["You can adjust the threshold by setting the ",(0,s.jsx)(n.code,{children:"dataUriLimit"})," config."]}),"\n",(0,s.jsx)(n.p,{children:"Detail:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"svg"}),": The threshold of the SVG image."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"font"}),": The threshold of the font file."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"image"}),": The threshold of non-SVG images."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"media"}),": The threshold of media assets such as videos."]}),"\n"]}),"\n",(0,s.jsxs)(n.h3,{id:"example",children:["Example",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#example",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"Set the threshold of images to 5000 Bytes, and set media assets not to be inlined:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"export default {\n  output: {\n    dataUriLimit: {\n      image: 5000,\n      media: 0,\n    },\n  },\n};\n"})})]})}function d(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,t.ah)(),e.components);return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}n.default=d,d.__RSPRESS_PAGE_META={},d.__RSPRESS_PAGE_META["en%2Fconfigure%2Fapp%2Foutput%2Fdata-uri-limit.mdx"]={toc:[{text:"Example",id:"example",depth:3}],title:"output.dataUriLimit",frontmatter:{sidebar_label:"dataUriLimit"}}}}]);