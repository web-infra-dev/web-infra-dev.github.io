(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["77294"],{31394:function(e,n,i){"use strict";i.r(n),i.d(n,{default:function(){return c}});var s=i("15169"),t=i("43932"),r=i("9880"),a=i("23169");function d(e){var n=Object.assign({ul:"ul",li:"li",strong:"strong",pre:"pre",code:"code",p:"p",h3:"h3",a:"a"},(0,a.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"Type:"})}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"type DataUriLimitConfig = {\n  svg?: number;\n  font?: number;\n  image?: number;\n  media?: number;\n};\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"Default:"})}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"const defaultDatUriLimit = {\n  svg: 10000,\n  font: 10000,\n  image: 10000,\n  media: 10000,\n};\n"})}),"\n",(0,r.jsx)(n.p,{children:"Set the size threshold to inline static assets such as images and fonts."}),"\n",(0,r.jsx)(n.p,{children:"By default, static assets will be Base64 encoded and inline into the page if the size is less than 10KB."}),"\n",(0,r.jsxs)(n.p,{children:["You can adjust the threshold by setting the ",(0,r.jsx)(n.code,{children:"dataUriLimit"})," config."]}),"\n",(0,r.jsx)(n.p,{children:"Detail:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"svg"}),": The threshold of the SVG image."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"font"}),": The threshold of the font file."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"image"}),": The threshold of non-SVG images."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"media"}),": The threshold of media assets such as videos."]}),"\n"]}),"\n",(0,r.jsxs)(n.h3,{id:"example",children:["Example",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#example",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"Set the threshold of images to 5000 Bytes, and set media assets not to be inlined:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"export default {\n  output: {\n    dataUriLimit: {\n      image: 5000,\n      media: 0,\n    },\n  },\n};\n"})})]})}function l(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,a.useMDXComponents)(),e.components).wrapper;return n?(0,r.jsx)(n,(0,t._)((0,s._)({},e),{children:(0,r.jsx)(d,(0,s._)({},e))})):d(e)}var c=l;l.__RSPRESS_PAGE_META={},l.__RSPRESS_PAGE_META["..%2F..%2Fbuilder-doc%2Fdocs%2Fen%2Fconfig%2Foutput%2FdataUriLimit.md"]={toc:[{text:"Example",id:"example",depth:3}],title:""}},32605:function(e,n,i){"use strict";i.r(n),i.d(n,{default:function(){return o},frontmatter:function(){return h}});var s=i("15169"),t=i("43932"),r=i("9880"),a=i("23169"),d=i("31394");function l(e){var n=Object.assign({h1:"h1",a:"a",div:"div",p:"p"},(0,a.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"outputdataurilimit",children:["output.dataUriLimit",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#outputdataurilimit",children:"#"})]}),"\n",(0,r.jsxs)(n.div,{className:"rspress-directive tip",children:[(0,r.jsx)(n.div,{className:"rspress-directive-title",children:"TIP"}),(0,r.jsx)(n.div,{className:"rspress-directive-content",children:(0,r.jsxs)(n.p,{children:["This config is provided by Modern.js Builder, more detail can see ",(0,r.jsx)(n.a,{href:"https://modernjs.dev/builder/en/api/config-output.html#outputdataurilimit",target:"_blank",rel:"noopener noreferrer",children:"output.dataUriLimit"}),".\n"]})})]}),"\n","\n",(0,r.jsx)(d.default,{})]})}function c(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,a.useMDXComponents)(),e.components).wrapper;return n?(0,r.jsx)(n,(0,t._)((0,s._)({},e),{children:(0,r.jsx)(l,(0,s._)({},e))})):l(e)}var o=c;c.__RSPRESS_PAGE_META={},c.__RSPRESS_PAGE_META["en%2Fconfigure%2Fapp%2Foutput%2Fdata-uri-limit.mdx"]={toc:[],title:"output.dataUriLimit"};var h={sidebar_label:"dataUriLimit"}}}]);