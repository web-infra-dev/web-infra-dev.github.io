(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["91809"],{66965:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return l}});var s=r("9880"),c=r("23169");function t(e){let n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",pre:"pre",p:"p",a:"a",div:"div",h3:"h3",h4:"h4"},(0,c.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Type:"})," ",(0,s.jsx)(n.code,{children:"undefined | true | PrefetchOption"})]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"type IncludeType = 'async-chunks' | 'initial' | 'all-assets' | 'all-chunks';\n\ntype Filter = Array<string | RegExp> | ((filename: string) => boolean);\n\ninterface PrefetchOption {\n  type?: IncludeType;\n  include?: Filter;\n  exclude?: Filter;\n}\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Default:"})," ",(0,s.jsx)(n.code,{children:"undefined"})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Specifies that the user agent should preemptively fetch and cache the target resource as it is likely to be required for a followup navigation. Refer to ",(0,s.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/rel/prefetch",target:"_blank",rel:"noopener noreferrer",children:"prefetch"}),"."]}),"\n",(0,s.jsxs)(n.div,{className:"rspress-directive tip",children:[(0,s.jsx)(n.div,{className:"rspress-directive-title",children:"TIP"}),(0,s.jsx)(n.div,{className:"rspress-directive-content",children:(0,s.jsx)(n.p,{children:"When using Rspack as the bundler, the Prefetch capability is not currently supported in the MPA scenario."})})]}),"\n",(0,s.jsxs)(n.h3,{id:"boolean-type",children:["Boolean Type",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#boolean-type",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["When setting ",(0,s.jsx)(n.code,{children:"performance.prefetch"})," to ",(0,s.jsx)(n.code,{children:"true"}),", resources will be prefetched according to the following configuration:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"{\n  type: 'async-chunks',\n}\n"})}),"\n",(0,s.jsxs)(n.h3,{id:"object-type",children:["Object Type",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#object-type",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["When the value of ",(0,s.jsx)(n.code,{children:"performance.prefetch"})," is ",(0,s.jsx)(n.code,{children:"object"})," type, the Builder will enable the prefetch capability for the specified resource according to the current configuration."]}),"\n",(0,s.jsxs)(n.h4,{id:"prefetchtype",children:["prefetch.type",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#prefetchtype",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"type"})," field controls which resources will be pre-fetched, and supports secondary filtering of specified resources through ",(0,s.jsx)(n.code,{children:"include"})," and ",(0,s.jsx)(n.code,{children:"exclude"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"Currently supported resource types are as follows:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"async-chunks"}),": prefetch all asynchronous resources (on the current page), including asynchronous js and its associated css, image, font and other resources."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"initial"}),": prefetch all non-async resources (on the current page). It should be noted that if the current script has been added to the html template, no additional pre-fetching will be performed."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"all-chunks"}),": prefetch all resources (on the current page), including all asynchronous and non-asynchronous resources."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"all-assets"}),": prefetch all resources, and resources of other pages will be included in the MPA scenario."]}),"\n"]}),"\n",(0,s.jsxs)(n.h4,{id:"example",children:["Example",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#example",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"When you want to prefetch all image resources in png format on the current page, you can configure it as follows:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"export default {\n  performance: {\n    prefetch: {\n      type: 'all-chunks',\n      include: [/.*\\.png$/]\n    },\n  },\n};\n"})})]})}function i(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,c.useMDXComponents)(),e.components);return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(t,{...e})}):t(e)}var l=i;i.__RSPRESS_PAGE_META={},i.__RSPRESS_PAGE_META["..%2F..%2Fbuilder-doc%2Fdocs%2Fen%2Fconfig%2Fperformance%2Fprefetch.md"]={toc:[{text:"Boolean Type",id:"boolean-type",depth:3},{text:"Object Type",id:"object-type",depth:3},{text:"prefetch.type",id:"prefetchtype",depth:4},{text:"Example",id:"example",depth:4}],title:"",frontmatter:{}}},43104:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return a}});var s=r("9880"),c=r("23169"),t=r("66965");function i(e){let n=Object.assign({h1:"h1",a:"a"},(0,c.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h1,{id:"performanceprefetch",children:["performance.prefetch",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#performanceprefetch",children:"#"})]}),"\n","\n",(0,s.jsx)(t.default,{})]})}function l(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,c.useMDXComponents)(),e.components);return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(i,{...e})}):i(e)}var a=l;l.__RSPRESS_PAGE_META={},l.__RSPRESS_PAGE_META["en%2Fconfigure%2Fapp%2Fperformance%2Fprefetch.mdx"]={toc:[],title:"performance.prefetch",frontmatter:{sidebar_label:"prefetch"}}}}]);