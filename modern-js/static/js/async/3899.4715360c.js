/*! For license information please see 3899.4715360c.js.LICENSE.txt */
(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["3899"],{52587:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return a}});var s=r("9880"),t=r("23169");function i(e){let n=Object.assign({ul:"ul",li:"li",strong:"strong",pre:"pre",code:"code",p:"p",a:"a",h4:"h4"},(0,t.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"Type:"})}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"type SRIOptions =\n  | {\n      hashFuncNames?: string[];\n      enabled?: 'auto' | boolean;\n      hashLoading?: 'eager' | 'lazy';\n    }\n  | boolean;\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Default:"})," ",(0,s.jsx)(n.code,{children:"undefined"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Bundler:"})," ",(0,s.jsx)(n.code,{children:"only support webpack"})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Adding an integrity attribute (",(0,s.jsx)(n.code,{children:"integrity"}),") to sub-resources introduced by HTML allows the browser to verify the integrity of the introduced resource, thus preventing tampering with the downloaded resource."]}),"\n",(0,s.jsxs)(n.p,{children:["Enabling this option will set the webpack ",(0,s.jsx)(n.a,{href:"https://webpack.js.org/configuration/output/#outputcrossoriginloading",target:"_blank",rel:"noopener noreferrer",children:"output.crossOriginLoading"})," configuration option to ",(0,s.jsx)(n.code,{children:"anonymous"}),"."]}),"\n",(0,s.jsxs)(n.h4,{id:"introduce-sri",children:["Introduce SRI",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#introduce-sri",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"Subresource Integrity (SRI) is a security feature that enables browsers to verify that resources they fetch (for example, from a CDN) are delivered without unexpected manipulation. It works by allowing you to provide a cryptographic hash that a fetched resource must match."}),"\n",(0,s.jsx)(n.p,{children:"For script tags, the result is to refuse to execute the code; for CSS links, the result is not to load the styles."}),"\n",(0,s.jsxs)(n.p,{children:["For more on subresource integrity, see ",(0,s.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity",target:"_blank",rel:"noopener noreferrer",children:"Subresource Integrity - MDN"}),"."]}),"\n",(0,s.jsxs)(n.h4,{id:"example",children:["Example",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#example",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["By default, ",(0,s.jsx)(n.code,{children:"SRI"})," is not turned on, and when it is, its default configuration is as follows:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'{\n  hashFuncNames: [\'sha384\'];\n  enabled: "auto",\n  hashLoading: "eager",\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"You can customize the configuration options according to your own needs:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"export default {\n  security: {\n    sri: {\n      hashFuncNames: ['sha-256'],\n      enabled: true,\n      hashLoading: 'lazy',\n    },\n  },\n};\n"})})]})}function o(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,t.useMDXComponents)(),e.components);return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(i,{...e})}):i(e)}var a=o;o.__RSPRESS_PAGE_META={},o.__RSPRESS_PAGE_META["..%2F..%2Fbuilder-doc%2Fdocs%2Fen%2Fconfig%2Fsecurity%2Fsri.md"]={toc:[{text:"Introduce SRI",id:"introduce-sri",depth:4},{text:"Example",id:"example",depth:4}],title:"",frontmatter:{}}},79610:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return c}});var s=r("9880"),t=r("23169"),i=r("52587");function o(e){let n=Object.assign({h1:"h1",a:"a"},(0,t.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h1,{id:"securitysri",children:["security.sri",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#securitysri",children:"#"})]}),"\n","\n",(0,s.jsx)(i.default,{})]})}function a(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,t.useMDXComponents)(),e.components);return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}var c=a;a.__RSPRESS_PAGE_META={},a.__RSPRESS_PAGE_META["en%2Fconfigure%2Fapp%2Fsecurity%2Fsri.mdx"]={toc:[],title:"security.sri",frontmatter:{sidebar_label:"sri"}}}}]);