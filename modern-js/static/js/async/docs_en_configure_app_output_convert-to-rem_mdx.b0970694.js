(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_en_configure_app_output_convert-to-rem_mdx"],{16294:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return l}});var r,d=t("15169"),s=t("43932"),o=t("9880"),i=t("23169");function c(e){var n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",h3:"h3",a:"a",pre:"pre",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,i.useMDXComponents)(),e.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Type:"})," ",(0,o.jsx)(n.code,{children:"boolean | object"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Default:"})," ",(0,o.jsx)(n.code,{children:"false"})]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["By setting ",(0,o.jsx)(n.code,{children:"output.convertToRem"}),", the Builder can do the following things:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Convert px to rem in CSS."}),"\n",(0,o.jsx)(n.li,{children:"Insert runtime code into the HTML template to set the fontSize of the root element."}),"\n"]}),"\n",(0,o.jsxs)(n.h3,{id:"boolean-type",children:["Boolean Type",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#boolean-type",children:"#"})]}),"\n",(0,o.jsxs)(n.p,{children:["If ",(0,o.jsx)(n.code,{children:"output.convertToRem"})," is set to ",(0,o.jsx)(n.code,{children:"true"}),", Rem processing capability will be turned on."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"export default {\n  output: {\n    convertToRem: true,\n  },\n};\n"})}),"\n",(0,o.jsx)(n.p,{children:"At this point, the rem configuration defaults as follows:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"{\n  enableRuntime: true,\n  rootFontSize: 50,\n  screenWidth: 375,\n  rootFontSize: 50,\n  maxRootFontSize: 64,\n  widthQueryKey: '',\n  excludeEntries: [],\n  supportLandscape: false,\n  useRootFontSizeBeyondMax: false,\n  pxtorem: {\n    rootValue: 50,\n    unitPrecision: 5,\n    propList: ['*'],\n  }\n}\n"})}),"\n",(0,o.jsxs)(n.h3,{id:"object-type",children:["Object Type",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#object-type",children:"#"})]}),"\n",(0,o.jsxs)(n.p,{children:["When the value of ",(0,o.jsx)(n.code,{children:"output.convertToRem"})," is ",(0,o.jsx)(n.code,{children:"object"})," type, The Builder will perform Rem processing based on the current configuration."]}),"\n",(0,o.jsx)(n.p,{children:"options:"}),"\n",(0,o.jsxs)(n.table,{children:["\n",(0,o.jsxs)(n.thead,{children:["\n",(0,o.jsxs)(n.tr,{children:["\n",(0,o.jsx)(n.th,{children:"Name"}),"\n",(0,o.jsx)(n.th,{children:"Type"}),"\n",(0,o.jsx)(n.th,{children:"Default"}),"\n",(0,o.jsx)(n.th,{children:"Description"}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.tbody,{children:["\n",(0,o.jsxs)(n.tr,{children:["\n",(0,o.jsx)(n.td,{children:"enableRuntime"}),"\n",(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"boolean"})}),"\n",(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"true"})}),"\n",(0,o.jsx)(n.td,{children:"Whether to generate runtime code to calculate and set the font size of the root element"}),"\n"]}),"\n",(0,o.jsxs)(n.tr,{children:["\n",(0,o.jsx)(n.td,{children:"inlineRuntime"}),"\n",(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"boolean"})}),"\n",(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"true"})}),"\n",(0,o.jsxs)(n.td,{children:["Whether to inline the runtime code to HTML. If set to ",(0,o.jsx)(n.code,{children:"false"}),", the runtime code will be extracted into a separate ",(0,o.jsx)(n.code,{children:"convert-rem.[version].js"})," file and output to the dist directory"]}),"\n"]}),"\n",(0,o.jsxs)(n.tr,{children:["\n",(0,o.jsx)(n.td,{children:"rootFontSize"}),"\n",(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"number"})}),"\n",(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"50"})}),"\n",(0,o.jsx)(n.td,{children:"The root element font size"}),"\n"]}),"\n",(0,o.jsxs)(n.tr,{children:["\n",(0,o.jsx)(n.td,{children:"maxRootFontSize"}),"\n",(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"number"})}),"\n",(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"64"})}),"\n",(0,o.jsx)(n.td,{children:"The root element max font size"}),"\n"]}),"\n",(0,o.jsxs)(n.tr,{children:["\n",(0,o.jsx)(n.td,{children:"widthQueryKey"}),"\n",(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"string"})}),"\n",(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"'' "})}),"\n",(0,o.jsx)(n.td,{children:"Get clientWidth from the url query based on widthQueryKey"}),"\n"]}),"\n",(0,o.jsxs)(n.tr,{children:["\n",(0,o.jsx)(n.td,{children:"screenWidth"}),"\n",(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"number"})}),"\n",(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"375"})}),"\n",(0,o.jsxs)(n.td,{children:["The screen width for UI design drawings (Usually, ",(0,o.jsx)(n.code,{children:"fontSize = (clientWidth * rootFontSize) / screenWidth"}),")"]}),"\n"]}),"\n",(0,o.jsxs)(n.tr,{children:["\n",(0,o.jsx)(n.td,{children:"excludeEntries"}),"\n",(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"string[]"})}),"\n",(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"[]"})}),"\n",(0,o.jsxs)(n.td,{children:["To exclude some page entries from injecting runtime code, it is usually used with ",(0,o.jsx)(n.code,{children:"pxtorem.exclude"})]}),"\n"]}),"\n",(0,o.jsxs)(n.tr,{children:["\n",(0,o.jsx)(n.td,{children:"supportLandscape"}),"\n",(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"boolean"})}),"\n",(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"false"})}),"\n",(0,o.jsx)(n.td,{children:"Use height to calculate rem in landscape"}),"\n"]}),"\n",(0,o.jsxs)(n.tr,{children:["\n",(0,o.jsx)(n.td,{children:"useRootFontSizeBeyondMax"}),"\n",(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"boolean"})}),"\n",(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"false"})}),"\n",(0,o.jsx)(n.td,{children:"Whether to use rootFontSize when large than maxRootFontSize"}),"\n"]}),"\n",(0,o.jsxs)(n.tr,{children:["\n",(0,o.jsx)(n.td,{children:"pxtorem"}),"\n",(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"object"})}),"\n",(0,o.jsxs)(n.td,{children:["rootValue (Default is the same as rootFontSize) ","unitPrecision: 5 ","propList: ['*']"]}),"\n",(0,o.jsxs)(n.td,{children:[(0,o.jsx)(n.a,{href:"https://github.com/cuth/postcss-pxtorem#options",target:"_blank",rel:"noopener noreferrer",children:"postcss-pxtorem"})," options"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.h3,{id:"example",children:["Example",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#example",children:"#"})]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"export default {\n  output: {\n    convertToRem: {\n      rootFontSize: 30,\n      excludeEntries: ['404', 'page2'],\n      pxtorem: {\n        propList: ['font-size'],\n      },\n    },\n  },\n};\n"})})]})}(r=globalThis).__RSPRESS_PAGE_META||(r.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["..%2F..%2Fbuilder-doc%2Fdocs%2Fen%2Fconfig%2Foutput%2FconvertToRem.md"]={toc:[{text:"Boolean Type",id:"boolean-type",depth:3},{text:"Object Type",id:"object-type",depth:3},{text:"Example",id:"example",depth:3}],title:"",frontmatter:{}};var l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,i.useMDXComponents)(),e.components).wrapper;return n?(0,o.jsx)(n,(0,s._)((0,d._)({},e),{children:(0,o.jsx)(c,(0,d._)({},e))})):c(e)}},77960:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return h}});var r,d=t("15169"),s=t("43932"),o=t("9880"),i=t("23169"),c=t("16294");function l(e){var n=Object.assign({h1:"h1",a:"a",div:"div",p:"p"},(0,i.useMDXComponents)(),e.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.h1,{id:"outputconverttorem",children:["output.convertToRem",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#outputconverttorem",children:"#"})]}),"\n",(0,o.jsxs)(n.div,{className:"modern-directive tip",children:[(0,o.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,o.jsx)(n.div,{className:"modern-directive-content",children:(0,o.jsxs)(n.p,{children:["This config is provided by Modern.js Builder, more detail can see ",(0,o.jsx)(n.a,{href:"https://modernjs.dev/builder/en/api/config-output.html#outputconverttorem",target:"_blank",rel:"noopener noreferrer",children:"output.convertToRem"}),".\n"]})})]}),"\n","\n",(0,o.jsx)(c.default,{})]})}(r=globalThis).__RSPRESS_PAGE_META||(r.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["en%2Fconfigure%2Fapp%2Foutput%2Fconvert-to-rem.mdx"]={toc:[],title:"output.convertToRem",frontmatter:{sidebar_label:"convertToRem"}};var h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,i.useMDXComponents)(),e.components).wrapper;return n?(0,o.jsx)(n,(0,s._)((0,d._)({},e),{children:(0,o.jsx)(l,(0,d._)({},e))})):l(e)}}}]);