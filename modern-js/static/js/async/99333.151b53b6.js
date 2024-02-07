/*! For license information please see 99333.151b53b6.js.LICENSE.txt */
(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["99333"],{15424:function(e,n,s){"use strict";s.r(n);var r=s("39980"),i=s("96954");function t(e){let n=Object.assign({ul:"ul",li:"li",strong:"strong",pre:"pre",code:"code",p:"p",a:"a",h3:"h3",h4:"h4"},(0,i.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"Type:"})}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"type Fields = (string | string[])[];\n\ntype ResolveMainFields = Fields | Record<BuilderTarget, Fields>;\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Default:"})," ",(0,r.jsx)(n.code,{children:"undefined"})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["This config will determine which field of ",(0,r.jsx)(n.code,{children:"package.json"})," you use to import the ",(0,r.jsx)(n.code,{children:"npm"})," module. Same as the ",(0,r.jsx)(n.a,{href:"https://webpack.js.org/configuration/resolve/#resolvemainfields",target:"_blank",rel:"noopener noreferrer",children:"resolve.mainFields"})," config of webpack."]}),"\n",(0,r.jsxs)(n.h3,{id:"example",children:["Example",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#example",children:"#"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"export default {\n  source: {\n    resolveMainFields: ['main', 'browser', 'exports'],\n  },\n};\n"})}),"\n",(0,r.jsxs)(n.h4,{id:"set-according-to-targets",children:["Set according to Targets",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#set-according-to-targets",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["When you build multiple targets at the same time, you can set different mainFields for different targets. At this point, you need to set ",(0,r.jsx)(n.code,{children:"resolveMainFields"})," to an object whose key is the corresponding build target."]}),"\n",(0,r.jsxs)(n.p,{children:["For example to set different mainFields for ",(0,r.jsx)(n.code,{children:"web"})," and ",(0,r.jsx)(n.code,{children:"node"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"export default {\n  output: {\n    source: {\n      resolveMainFields: {\n        web: ['main', 'browser', 'exports'],\n        node: ['main', 'node', 'exports'],\n      },\n    },\n  },\n};\n"})})]})}function o(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,i.useMDXComponents)(),e.components);return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(t,{...e})}):t(e)}n.default=o,o.__RSPRESS_PAGE_META={},o.__RSPRESS_PAGE_META["..%2F..%2Fbuilder-doc%2Fdocs%2Fen%2Fconfig%2Fsource%2FresolveMainFields.md"]={toc:[{text:"Example",id:"example",depth:3},{text:"Set according to Targets",id:"set-according-to-targets",depth:4}],title:"",frontmatter:{}}},64813:function(e,n,s){"use strict";s.r(n);var r=s("39980"),i=s("96954"),t=s("15424");function o(e){let n=Object.assign({h1:"h1",a:"a"},(0,i.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"sourceresolvemainfields",children:["source.resolveMainFields",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#sourceresolvemainfields",children:"#"})]}),"\n","\n",(0,r.jsx)(t.default,{})]})}function d(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,i.useMDXComponents)(),e.components);return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}n.default=d,d.__RSPRESS_PAGE_META={},d.__RSPRESS_PAGE_META["en%2Fconfigure%2Fapp%2Fsource%2Fresolve-main-fields.mdx"]={toc:[],title:"source.resolveMainFields",frontmatter:{sidebar_label:"resolveMainFields"}}}}]);