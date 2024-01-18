/*! For license information please see 74229.3da6bd28.js.LICENSE.txt */
(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["74229"],{66305:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return c}});var s=t("39980"),o=t("96954");function r(e){let n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",a:"a",h3:"h3",pre:"pre"},(0,o.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Type:"})," ",(0,s.jsx)(n.code,{children:"Object | Function"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Default:"})," ",(0,s.jsx)(n.code,{children:"{}"})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["The config of ",(0,s.jsx)(n.a,{href:"https://github.com/webpack-contrib/style-loader",target:"_blank",rel:"noopener noreferrer",children:"style-loader"})," can be set through ",(0,s.jsx)(n.code,{children:"tools.styleLoader"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["It is worth noting that Builder does not enable ",(0,s.jsx)(n.code,{children:"style-loader"})," by default. You can use ",(0,s.jsx)(n.code,{children:"output.disableCssExtract"})," config to enable it."]}),"\n",(0,s.jsxs)(n.h3,{id:"object-type",children:["Object Type",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#object-type",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"When this value is an Object, it is merged with the default config via Object.assign. For example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    styleLoader: {\n      loaderOptions: {\n        insert: 'head',\n      },\n    },\n  },\n};\n"})}),"\n",(0,s.jsxs)(n.h3,{id:"function-type",children:["Function Type",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#function-type",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"When the value is a Function, the default config is passed in as the first parameter. You can modify the config object directly, or return an object as the final config. For example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    styleLoader: config => {\n      config.loaderOptions.insert = 'head';\n      return config;\n    },\n  },\n};\n"})})]})}function i(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,o.useMDXComponents)(),e.components);return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(r,{...e})}):r(e)}var c=i;i.__RSPRESS_PAGE_META={},i.__RSPRESS_PAGE_META["..%2F..%2Fbuilder-doc%2Fdocs%2Fen%2Fconfig%2Ftools%2FstyleLoader.md"]={toc:[{text:"Object Type",id:"object-type",depth:3},{text:"Function Type",id:"function-type",depth:3}],title:"",frontmatter:{}}},57516:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return a}});var s=t("39980"),o=t("96954"),r=t("66305");function i(e){let n=Object.assign({h1:"h1",a:"a"},(0,o.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h1,{id:"toolsstyleloader",children:["tools.styleLoader",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#toolsstyleloader",children:"#"})]}),"\n","\n",(0,s.jsx)(r.default,{})]})}function c(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,o.useMDXComponents)(),e.components);return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(i,{...e})}):i(e)}var a=c;c.__RSPRESS_PAGE_META={},c.__RSPRESS_PAGE_META["en%2Fconfigure%2Fapp%2Ftools%2Fstyle-loader.mdx"]={toc:[],title:"tools.styleLoader",frontmatter:{sidebar_label:"styleLoader"}}}}]);