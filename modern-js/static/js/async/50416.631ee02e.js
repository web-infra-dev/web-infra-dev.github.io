/*! For license information please see 50416.631ee02e.js.LICENSE.txt */
(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["50416"],{27477:function(e,n,t){"use strict";t.r(n);var s=t("39980"),r=t("96954");function o(e){let n=Object.assign({h1:"h1",a:"a",ul:"ul",li:"li",strong:"strong",code:"code",p:"p",h3:"h3",pre:"pre"},(0,r.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h1,{id:"toolspug",children:["tools.pug",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#toolspug",children:"#"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Type:"})," ",(0,s.jsx)(n.code,{children:"true | Object | Function | undefined"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Default:"})," ",(0,s.jsx)(n.code,{children:"false"})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Configure the ",(0,s.jsx)(n.a,{href:"https://pugjs.org/",target:"_blank",rel:"noopener noreferrer",children:"Pug"})," template engine."]}),"\n",(0,s.jsxs)(n.h3,{id:"boolean-type",children:["Boolean Type",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#boolean-type",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["Pug template engine is not enabled by default, you can enable it by setting ",(0,s.jsx)(n.code,{children:"tools.pug"})," to ",(0,s.jsx)(n.code,{children:"true"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"export default {\n  tools: {\n    pug: true,\n  },\n};\n"})}),"\n",(0,s.jsxs)(n.p,{children:["When enabled, you can use ",(0,s.jsx)(n.code,{children:"index.pug"})," as the template file in ",(0,s.jsx)(n.code,{children:"html.template"})," config."]}),"\n",(0,s.jsxs)(n.h3,{id:"object-type",children:["Object Type",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#object-type",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["When ",(0,s.jsx)(n.code,{children:"tools.terser"})," is ",(0,s.jsx)(n.code,{children:"Object"})," type, you can passing the Pug options:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"export default {\n  tools: {\n    pug: {\n      doctype: 'xml',\n    },\n  },\n};\n"})}),"\n",(0,s.jsxs)(n.p,{children:["For detailed options, please refer to ",(0,s.jsx)(n.a,{href:"https://pugjs.org/api/reference.html#options",target:"_blank",rel:"noopener noreferrer",children:"Pug API Reference"}),"."]}),"\n",(0,s.jsxs)(n.h3,{id:"function-type",children:["Function Type",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#function-type",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["When ",(0,s.jsx)(n.code,{children:"tools.pug"})," is ",(0,s.jsx)(n.code,{children:"Function"})," type, the default configuration is passed in as the first parameter, the configuration object can be modified directly, or a value can be returned as the final result."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"export default {\n  tools: {\n    pug(config) {\n      config.doctype = 'xml';\n    },\n  },\n};\n"})})]})}function l(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,r.useMDXComponents)(),e.components);return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}n.default=l,l.__RSPRESS_PAGE_META={},l.__RSPRESS_PAGE_META["en%2Fconfigure%2Fapp%2Ftools%2Fpug.mdx"]={toc:[{text:"Boolean Type",id:"boolean-type",depth:3},{text:"Object Type",id:"object-type",depth:3},{text:"Function Type",id:"function-type",depth:3}],title:"tools.pug",frontmatter:{sidebar_label:"pug"}}}}]);