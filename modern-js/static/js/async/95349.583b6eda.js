/*! For license information please see 95349.583b6eda.js.LICENSE.txt */
(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["95349"],{68632:function(e,n,r){"use strict";r.r(n);var o=r("39980"),t=r("96954");function s(e){let n=Object.assign({h1:"h1",a:"a",p:"p",ul:"ul",li:"li",strong:"strong",code:"code",pre:"pre",h3:"h3"},(0,t.useMDXComponents)(),e.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.h1,{id:"toolsautoprefixer",children:["tools.autoprefixer",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#toolsautoprefixer",children:"#"})]}),"\n",(0,o.jsx)(n.p,{children:";"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Type:"})," ",(0,o.jsx)(n.code,{children:"Object | Function"})]}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.strong,{children:"Default:"})}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"{\n  flexbox: 'no-2009',\n  // Depends on the browserslist config in the project\n  // and the `output.overrideBrowserslist` (higher priority) config\n  overrideBrowserslist: browserslist,\n}\n"})}),"\n",(0,o.jsxs)(n.p,{children:["You can modify the config of ",(0,o.jsx)(n.a,{href:"https://github.com/postcss/autoprefixer",target:"_blank",rel:"noopener noreferrer",children:"autoprefixer"})," by ",(0,o.jsx)(n.code,{children:"tools.autoprefixer"}),"."]}),"\n",(0,o.jsxs)(n.h3,{id:"object-type",children:["Object Type",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#object-type",children:"#"})]}),"\n",(0,o.jsxs)(n.p,{children:["When ",(0,o.jsx)(n.code,{children:"tools.autoprefixer"})," is configured as ",(0,o.jsx)(n.code,{children:"Object"})," type, it is merged with the default config through Object.assign. For example:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    autoprefixer: {\n      flexbox: 'no-2009',\n    },\n  },\n};\n"})}),"\n",(0,o.jsxs)(n.h3,{id:"function-type",children:["Function Type",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#function-type",children:"#"})]}),"\n",(0,o.jsxs)(n.p,{children:["When ",(0,o.jsx)(n.code,{children:"tools.autoprefixer"})," is a Function, the default config is passed as the first parameter and can be directly modified or returned as the final result. For example:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    autoprefixer(config) {\n      // modify flexbox config\n      config.flexbox = 'no-2009';\n    },\n  },\n};\n"})})]})}function i(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,t.useMDXComponents)(),e.components);return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(s,{...e})}):s(e)}n.default=i,i.__RSPRESS_PAGE_META={},i.__RSPRESS_PAGE_META["en%2Fconfigure%2Fapp%2Ftools%2Fautoprefixer.mdx"]={toc:[{text:"Object Type",id:"object-type",depth:3},{text:"Function Type",id:"function-type",depth:3}],title:"tools.autoprefixer",frontmatter:{sidebar_label:"autoprefixer"}}}}]);