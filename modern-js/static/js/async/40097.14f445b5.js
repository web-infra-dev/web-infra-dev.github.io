(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["40097"],{45681:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return c}});var s,a=r("15169"),i=r("43932"),l=r("9880"),o=r("23169");function d(e){var n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",pre:"pre",p:"p",a:"a",div:"div",h3:"h3",h4:"h4"},(0,o.useMDXComponents)(),e.components);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"Type:"})," ",(0,l.jsx)(n.code,{children:"undefined | true | PreloadOption"})]}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-ts",children:"type IncludeType = 'async-chunks' | 'initial' | 'all-assets' | 'all-chunks';\n\ntype Filter = Array<string | RegExp> | ((filename: string) => boolean);\n\ninterface PreloadOption {\n  type?: IncludeType;\n  include?: Filter;\n  exclude?: Filter;\n}\n"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"Default:"})," ",(0,l.jsx)(n.code,{children:"undefined"})]}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:["Specifies that the user agent must preemptively fetch and cache the target resource for current navigation according to the potential destination given by the as attribute (and the priority associated with the corresponding destination). Refer to ",(0,l.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/rel/preload",target:"_blank",rel:"noopener noreferrer",children:"preload"}),"."]}),"\n",(0,l.jsxs)(n.div,{className:"modern-directive tip",children:[(0,l.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,l.jsx)(n.div,{className:"modern-directive-content",children:(0,l.jsx)(n.p,{children:"When using Rspack as the bundler, the Preload capability is not currently supported in the MPA scenario."})})]}),"\n",(0,l.jsxs)(n.h3,{id:"boolean-type",children:["Boolean Type",(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#boolean-type",children:"#"})]}),"\n",(0,l.jsxs)(n.p,{children:["When setting ",(0,l.jsx)(n.code,{children:"performance.preload"})," to ",(0,l.jsx)(n.code,{children:"true"}),", resources will be preloaded according to the following configuration:"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",children:"{\n  type: 'async-chunks',\n}\n"})}),"\n",(0,l.jsxs)(n.h3,{id:"object-type",children:["Object Type",(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#object-type",children:"#"})]}),"\n",(0,l.jsxs)(n.p,{children:["When the value of ",(0,l.jsx)(n.code,{children:"performance.preload"})," is ",(0,l.jsx)(n.code,{children:"object"})," type, the Builder will enable the preload capability for the specified resource according to the current configuration."]}),"\n",(0,l.jsxs)(n.h4,{id:"preloadtype",children:["preload.type",(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#preloadtype",children:"#"})]}),"\n",(0,l.jsxs)(n.p,{children:["The ",(0,l.jsx)(n.code,{children:"type"})," field controls which resources will be pre-fetched, and supports secondary filtering of specified resources through ",(0,l.jsx)(n.code,{children:"include"})," and ",(0,l.jsx)(n.code,{children:"exclude"}),"."]}),"\n",(0,l.jsx)(n.p,{children:"Currently supported resource types are as follows:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"async-chunks"}),": preload all asynchronous resources (on the current page), including asynchronous js and its associated css, image, font and other resources."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"initial"}),": preload all non-async resources (on the current page). It should be noted that if the current script has been added to the html template, no additional pre-fetching will be performed."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"all-chunks"}),": preload all resources (on the current page), including all asynchronous and non-asynchronous resources."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"all-assets"}),": preload all resources, and resources of other pages will be included in the MPA scenario."]}),"\n"]}),"\n",(0,l.jsxs)(n.h4,{id:"example",children:["Example",(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#example",children:"#"})]}),"\n",(0,l.jsx)(n.p,{children:"When you want to preload all image resources in png format on the current page, you can configure it as follows:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",children:"export default {\n  performance: {\n    preload: {\n      type: 'all-chunks',\n      include: [/.*\\.png$/]\n    },\n  },\n};\n"})})]})}(s=globalThis).__RSPRESS_PAGE_META||(s.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["..%2F..%2Fbuilder-doc%2Fdocs%2Fen%2Fconfig%2Fperformance%2Fpreload.md"]={toc:[{text:"Boolean Type",id:"boolean-type",depth:3},{text:"Object Type",id:"object-type",depth:3},{text:"preload.type",id:"preloadtype",depth:4},{text:"Example",id:"example",depth:4}],title:"",frontmatter:{}};var c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,o.useMDXComponents)(),e.components).wrapper;return n?(0,l.jsx)(n,(0,i._)((0,a._)({},e),{children:(0,l.jsx)(d,(0,a._)({},e))})):d(e)}},85802:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return t}});var s,a=r("15169"),i=r("43932"),l=r("9880"),o=r("23169"),d=r("45681");function c(e){var n=Object.assign({h1:"h1",a:"a",div:"div",p:"p"},(0,o.useMDXComponents)(),e.components);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(n.h1,{id:"performancepreload",children:["performance.preload",(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#performancepreload",children:"#"})]}),"\n",(0,l.jsxs)(n.div,{className:"modern-directive tip",children:[(0,l.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,l.jsx)(n.div,{className:"modern-directive-content",children:(0,l.jsxs)(n.p,{children:["This config is provided by Modern.js Builder, more detail can see ",(0,l.jsx)(n.a,{href:"https://modernjs.dev/builder/en/api/config-performance.html#performancepreload",target:"_blank",rel:"noopener noreferrer",children:"performance.preload"}),".\n"]})})]}),"\n","\n",(0,l.jsx)(d.default,{})]})}(s=globalThis).__RSPRESS_PAGE_META||(s.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["en%2Fconfigure%2Fapp%2Fperformance%2Fpreload.mdx"]={toc:[],title:"performance.preload",frontmatter:{sidebar_label:"preload"}};var t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,o.useMDXComponents)(),e.components).wrapper;return n?(0,l.jsx)(n,(0,i._)((0,a._)({},e),{children:(0,l.jsx)(c,(0,a._)({},e))})):c(e)}}}]);