(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["76386"],{49259:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return l}});var s=r("15169"),t=r("43932"),i=r("9880"),o=r("23169");function c(e){var n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",a:"a",h3:"h3",pre:"pre"},(0,o.useMDXComponents)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Type:"})," ",(0,i.jsx)(n.code,{children:"Object | Function | undefined"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Default:"})," ",(0,i.jsx)(n.code,{children:"undefined"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Bundler:"})," ",(0,i.jsx)(n.code,{children:"only support webpack"})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["You can enable or configure the ",(0,i.jsx)(n.a,{href:"https://github.com/web-infra-dev/webpack-inspector",target:"_blank",rel:"noopener noreferrer",children:"webpack inspector"})," through ",(0,i.jsx)(n.code,{children:"tools.inspector"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["When the configuration is not ",(0,i.jsx)(n.code,{children:"undefined"}),", it means that ",(0,i.jsx)(n.code,{children:"webpack-inspector"})," is enabled, and the type of ",(0,i.jsx)(n.code,{children:"tools.inspector"})," can be ",(0,i.jsx)(n.code,{children:"Object"})," or ",(0,i.jsx)(n.code,{children:"Function"}),"."]}),"\n",(0,i.jsxs)(n.h3,{id:"object-type",children:["Object Type",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#object-type",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["When ",(0,i.jsx)(n.code,{children:"tools.inspector"})," is configured with type ",(0,i.jsx)(n.code,{children:"Object"}),", it is merged with the default configuration via Object.assign. For example:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    inspector: {\n      // The default port is 3333\n      port: 3334,\n    },\n  },\n};\n"})}),"\n",(0,i.jsxs)(n.h3,{id:"function-type",children:["Function Type",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#function-type",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["When ",(0,i.jsx)(n.code,{children:"tools.inspector"})," is a Function, the default configuration is passed as the first parameter and can be directly modified or returned as the final result. For example:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    inspector(config) {\n      config.port = 3334;\n    },\n  },\n};\n"})})]})}function d(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,o.useMDXComponents)(),e.components).wrapper;return n?(0,i.jsx)(n,(0,t._)((0,s._)({},e),{children:(0,i.jsx)(c,(0,s._)({},e))})):c(e)}var l=d;d.__RSPRESS_PAGE_META={},d.__RSPRESS_PAGE_META["..%2F..%2Fbuilder-doc%2Fdocs%2Fen%2Fconfig%2Ftools%2Finspector.md"]={toc:[{text:"Object Type",id:"object-type",depth:3},{text:"Function Type",id:"function-type",depth:3}],title:""}},244:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return a},frontmatter:function(){return h}});var s=r("15169"),t=r("43932"),i=r("9880"),o=r("23169"),c=r("49259");function d(e){var n=Object.assign({h1:"h1",a:"a",div:"div",p:"p"},(0,o.useMDXComponents)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.h1,{id:"toolsinspector",children:["tools.inspector",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#toolsinspector",children:"#"})]}),"\n",(0,i.jsxs)(n.div,{className:"rspress-directive tip",children:[(0,i.jsx)(n.div,{className:"rspress-directive-title",children:"TIP"}),(0,i.jsx)(n.div,{className:"rspress-directive-content",children:(0,i.jsxs)(n.p,{children:["This config is provided by Modern.js Builder, more detail can see ",(0,i.jsx)(n.a,{href:"https://modernjs.dev/builder/en/api/config-tools.html#toolsinspector",target:"_blank",rel:"noopener noreferrer",children:"tools.inspector"}),".\n"]})})]}),"\n","\n",(0,i.jsx)(c.default,{})]})}function l(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,o.useMDXComponents)(),e.components).wrapper;return n?(0,i.jsx)(n,(0,t._)((0,s._)({},e),{children:(0,i.jsx)(d,(0,s._)({},e))})):d(e)}var a=l;l.__RSPRESS_PAGE_META={},l.__RSPRESS_PAGE_META["en%2Fconfigure%2Fapp%2Ftools%2Finspector.mdx"]={toc:[],title:"tools.inspector"};var h={sidebar_label:"inspector"}}}]);