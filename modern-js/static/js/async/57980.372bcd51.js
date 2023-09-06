(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["57980"],{7642:function(e,n,s){"use strict";s.r(n),s.d(n,{default:function(){return a}});var r,i=s("15169"),o=s("43932"),d=s("9880"),t=s("23169");function l(e){var n=Object.assign({ul:"ul",li:"li",strong:"strong",pre:"pre",code:"code",p:"p",a:"a",h3:"h3",h4:"h4"},(0,t.useMDXComponents)(),e.components);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.strong,{children:"Type:"})}),"\n"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",children:"type Fields = (string | string[])[];\n\ntype ResolveMainFields = Fields | Record<BuilderTarget, Fields>;\n"})}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"Default:"})," ",(0,d.jsx)(n.code,{children:"undefined"})]}),"\n"]}),"\n",(0,d.jsxs)(n.p,{children:["This config will determine which field of ",(0,d.jsx)(n.code,{children:"package.json"})," you use to import the ",(0,d.jsx)(n.code,{children:"npm"})," module. Same as the ",(0,d.jsx)(n.a,{href:"https://webpack.js.org/configuration/resolve/#resolvemainfields",target:"_blank",rel:"noopener noreferrer",children:"resolve.mainFields"})," config of webpack."]}),"\n",(0,d.jsxs)(n.h3,{id:"example",children:["Example",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#example",children:"#"})]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-js",children:"export default {\n  source: {\n    resolveMainFields: ['main', 'browser', 'exports'],\n  },\n};\n"})}),"\n",(0,d.jsxs)(n.h4,{id:"set-according-to-targets",children:["Set according to Targets",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#set-according-to-targets",children:"#"})]}),"\n",(0,d.jsxs)(n.p,{children:["When you build multiple targets at the same time, you can set different mainFields for different targets. At this point, you need to set ",(0,d.jsx)(n.code,{children:"resolveMainFields"})," to an object whose key is the corresponding build target."]}),"\n",(0,d.jsxs)(n.p,{children:["For example to set different mainFields for ",(0,d.jsx)(n.code,{children:"web"})," and ",(0,d.jsx)(n.code,{children:"node"}),":"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-js",children:"export default {\n  output: {\n    source: {\n      resolveMainFields: {\n        web: ['main', 'browser', 'exports'],\n        node: ['main', 'node', 'exports'],\n      },\n    },\n  },\n};\n"})})]})}(r=globalThis).__RSPRESS_PAGE_META||(r.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["..%2F..%2Fbuilder-doc%2Fdocs%2Fen%2Fconfig%2Fsource%2FresolveMainFields.md"]={toc:[{text:"Example",id:"example",depth:3},{text:"Set according to Targets",id:"set-according-to-targets",depth:4}],title:"",frontmatter:{}};var a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,t.useMDXComponents)(),e.components).wrapper;return n?(0,d.jsx)(n,(0,o._)((0,i._)({},e),{children:(0,d.jsx)(l,(0,i._)({},e))})):l(e)}},27864:function(e,n,s){"use strict";s.r(n),s.d(n,{default:function(){return c}});var r,i=s("15169"),o=s("43932"),d=s("9880"),t=s("23169"),l=s("7642");function a(e){var n=Object.assign({h1:"h1",a:"a",div:"div",p:"p"},(0,t.useMDXComponents)(),e.components);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.h1,{id:"sourceresolvemainfields",children:["source.resolveMainFields",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#sourceresolvemainfields",children:"#"})]}),"\n",(0,d.jsxs)(n.div,{className:"modern-directive tip",children:[(0,d.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,d.jsx)(n.div,{className:"modern-directive-content",children:(0,d.jsxs)(n.p,{children:["This config is provided by Modern.js Builder, more detail can see ",(0,d.jsx)(n.a,{href:"https://modernjs.dev/builder/en/api/config-source.html#sourceresolvemainfields",target:"_blank",rel:"noopener noreferrer",children:"source.resolveMainFields"}),".\n"]})})]}),"\n","\n",(0,d.jsx)(l.default,{})]})}(r=globalThis).__RSPRESS_PAGE_META||(r.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["en%2Fconfigure%2Fapp%2Fsource%2Fresolve-main-fields.mdx"]={toc:[],title:"source.resolveMainFields",frontmatter:{sidebar_label:"resolveMainFields"}};var c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,t.useMDXComponents)(),e.components).wrapper;return n?(0,d.jsx)(n,(0,o._)((0,i._)({},e),{children:(0,d.jsx)(a,(0,i._)({},e))})):a(e)}}}]);