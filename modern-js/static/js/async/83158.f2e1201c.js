/*! For license information please see 83158.f2e1201c.js.LICENSE.txt */
(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["83158"],{19994:function(e,n,r){"use strict";r.r(n);var c=r("39980"),s=r("96954");function t(e){let n=Object.assign({h1:"h1",a:"a",p:"p",ul:"ul",li:"li",strong:"strong",code:"code",pre:"pre",h3:"h3",h4:"h4"},(0,s.useMDXComponents)(),e.components);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(n.h1,{id:"performanceprefetch",children:["performance.prefetch",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#performanceprefetch",children:"#"})]}),"\n",(0,c.jsx)(n.p,{children:";"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:"Type:"})," ",(0,c.jsx)(n.code,{children:"undefined | true | PrefetchOption"})]}),"\n"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-ts",children:"type IncludeType = 'async-chunks' | 'initial' | 'all-assets' | 'all-chunks';\n\ntype Filter = Array<string | RegExp> | ((filename: string) => boolean);\n\ninterface PrefetchOption {\n  type?: IncludeType;\n  include?: Filter;\n  exclude?: Filter;\n}\n"})}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:"Default:"})," ",(0,c.jsx)(n.code,{children:"undefined"})]}),"\n"]}),"\n",(0,c.jsxs)(n.p,{children:["Specifies that the user agent should preemptively fetch and cache the target resource as it is likely to be required for a followup navigation. Refer to ",(0,c.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/rel/prefetch",target:"_blank",rel:"noopener noreferrer",children:"prefetch"}),"."]}),"\n",(0,c.jsxs)(n.h3,{id:"boolean-type",children:["Boolean Type",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#boolean-type",children:"#"})]}),"\n",(0,c.jsxs)(n.p,{children:["When setting ",(0,c.jsx)(n.code,{children:"performance.prefetch"})," to ",(0,c.jsx)(n.code,{children:"true"}),", resources will be prefetched according to the following configuration:"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-js",children:"{\n  type: 'async-chunks',\n}\n"})}),"\n",(0,c.jsxs)(n.h3,{id:"object-type",children:["Object Type",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#object-type",children:"#"})]}),"\n",(0,c.jsxs)(n.p,{children:["When the value of ",(0,c.jsx)(n.code,{children:"performance.prefetch"})," is ",(0,c.jsx)(n.code,{children:"object"})," type, the Builder will enable the prefetch capability for the specified resource according to the current configuration."]}),"\n",(0,c.jsxs)(n.h4,{id:"prefetchtype",children:["prefetch.type",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#prefetchtype",children:"#"})]}),"\n",(0,c.jsxs)(n.p,{children:["The ",(0,c.jsx)(n.code,{children:"type"})," field controls which resources will be pre-fetched, and supports secondary filtering of specified resources through ",(0,c.jsx)(n.code,{children:"include"})," and ",(0,c.jsx)(n.code,{children:"exclude"}),"."]}),"\n",(0,c.jsx)(n.p,{children:"Currently supported resource types are as follows:"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"async-chunks"}),": prefetch all asynchronous resources (on the current page), including asynchronous js and its associated css, image, font and other resources."]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"initial"}),": prefetch all non-async resources (on the current page). It should be noted that if the current script has been added to the html template, no additional pre-fetching will be performed."]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"all-chunks"}),": prefetch all resources (on the current page), including all asynchronous and non-asynchronous resources."]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"all-assets"}),": prefetch all resources, and resources of other pages will be included in the MPA scenario."]}),"\n"]}),"\n",(0,c.jsxs)(n.h4,{id:"example",children:["Example",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#example",children:"#"})]}),"\n",(0,c.jsx)(n.p,{children:"When you want to prefetch all image resources in png format on the current page, you can configure it as follows:"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-js",children:"export default {\n  performance: {\n    prefetch: {\n      type: 'all-chunks',\n      include: [/.*\\.png$/]\n    },\n  },\n};\n"})})]})}function l(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,s.useMDXComponents)(),e.components);return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(t,{...e})}):t(e)}n.default=l,l.__RSPRESS_PAGE_META={},l.__RSPRESS_PAGE_META["en%2Fconfigure%2Fapp%2Fperformance%2Fprefetch.mdx"]={toc:[{text:"Boolean Type",id:"boolean-type",depth:3},{text:"Object Type",id:"object-type",depth:3},{text:"prefetch.type",id:"prefetchtype",depth:4},{text:"Example",id:"example",depth:4}],title:"performance.prefetch",frontmatter:{sidebar_label:"prefetch"}}}}]);