(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["36179"],{74756:function(e,n,s){"use strict";s.r(n),s.d(n,{default:function(){return c}});var r=s("9880"),o=s("23169");function t(e){let n=Object.assign({p:"p",code:"code",pre:"pre"},(0,o.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["Path rewriting can also be performed here, such as proxying the request sent to ",(0,r.jsx)(n.code,{children:"localhost:8080/api/topics"})," to ",(0,r.jsx)(n.code,{children:"https://cnodejs.org/api/v1/topics"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",meta:'title="modern.server-runtime.config.js"',children:"import { defineConfig } from '@modern-js/app-tools/server';\nexport default defineConfig({\n  bff: {\n    proxy: {\n      '/api': {\n        target: 'https://cnodejs.org',\n        pathRewrite: { '/api/topics': '/api/v1/topics' },\n        changeOrigin: true,\n      },\n    },\n  },\n});\n"})})]})}function i(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,o.useMDXComponents)(),e.components);return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(t,{...e})}):t(e)}var c=i;i.__RSPRESS_PAGE_META={},i.__RSPRESS_PAGE_META["en%2Fcomponents%2Fbff-proxy-path-rewrite.mdx"]={toc:[],title:"",frontmatter:{}}},98315:function(e,n,s){"use strict";s.r(n),s.d(n,{default:function(){return c}});var r=s("9880"),o=s("23169");function t(e){let n=Object.assign({p:"p",a:"a"},(0,o.useMDXComponents)(),e.components);return(0,r.jsxs)(n.p,{children:["BFF Proxy uses the powerful ",(0,r.jsx)(n.a,{href:"https://github.com/chimurai/http-proxy-middleware",target:"_blank",rel:"noopener noreferrer",children:"http-proxy-middleware"}),". For more advanced usage, please refer to its ",(0,r.jsx)(n.a,{href:"https://github.com/chimurai/http-proxy-middleware#options",target:"_blank",rel:"noopener noreferrer",children:"documentation"}),"."]})}function i(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,o.useMDXComponents)(),e.components);return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(t,{...e})}):t(e)}var c=i;i.__RSPRESS_PAGE_META={},i.__RSPRESS_PAGE_META["en%2Fcomponents%2Fbff-proxy-principle.mdx"]={toc:[],title:"",frontmatter:{}}},56673:function(e,n,s){"use strict";s.r(n),s.d(n,{default:function(){return c}});var r=s("9880"),o=s("23169");function t(e){let n=Object.assign({div:"div",p:"p",a:"a"},(0,o.useMDXComponents)(),e.components);return(0,r.jsxs)(n.div,{className:"rspress-directive caution",children:[(0,r.jsx)(n.div,{className:"rspress-directive-title",children:"CAUTION"}),(0,r.jsx)(n.div,{className:"rspress-directive-content",children:(0,r.jsxs)(n.p,{children:["Please use the ",(0,r.jsx)(n.a,{href:"/apis/app/commands#modern-new",children:"new command"})," in the root directory of the current project to enable BFF functionality first.\n"]})})]})}function i(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,o.useMDXComponents)(),e.components);return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(t,{...e})}):t(e)}var c=i;i.__RSPRESS_PAGE_META={},i.__RSPRESS_PAGE_META["en%2Fcomponents%2Fenable-bff-caution.mdx"]={toc:[],title:"",frontmatter:{}}},50870:function(e,n,s){"use strict";s.r(n),s.d(n,{default:function(){return l}});var r=s("9880"),o=s("23169"),t=s("56673"),i=s("74756"),c=s("98315");function a(e){let n=Object.assign({h1:"h1",a:"a",ul:"ul",li:"li",strong:"strong",code:"code",p:"p",pre:"pre",h2:"h2",h3:"h3",div:"div"},(0,o.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"bffproxy",children:["bff.proxy",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#bffproxy",children:"#"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Type:"})," ",(0,r.jsx)(n.code,{children:"Record<string, string>"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Default:"})," ",(0,r.jsx)(n.code,{children:"{}"})]}),"\n"]}),"\n","\n",(0,r.jsx)(t.default,{}),"\n",(0,r.jsx)(n.p,{children:"With simple configuration, Modern.js can automatically proxy requests sent to the BFF server to the specified service."}),"\n",(0,r.jsxs)(n.p,{children:["Add the following configuration to ",(0,r.jsx)(n.code,{children:"modern.server-runtime.config.js"})," to enable proxy:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",meta:'title="modern.server-runtime.config.ts"',children:"import { defineConfig } from '@modern-js/app-tools/server';\nexport default defineConfig({\n  bff: {\n    proxy: {\n      '/api': 'https://cnodejs.org',\n    },\n  },\n});\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Assuming the address of Modern.js BFF server is ",(0,r.jsx)(n.code,{children:"localhost:8080"}),", all requests starting with ",(0,r.jsx)(n.code,{children:"api"})," will be proxied to ",(0,r.jsx)(n.code,{children:"https://cnodejs.org"}),", for example, the request to ",(0,r.jsx)(n.code,{children:"localhost:8080/api/v1/topics"})," will be proxied to ",(0,r.jsx)(n.code,{children:"https://cnodejs.org/api/v1/topics"}),"."]}),"\n","\n",(0,r.jsx)(i.default,{}),"\n",(0,r.jsxs)(n.p,{children:["Unlike ",(0,r.jsx)(n.a,{href:"/configure/app/dev/proxy",children:"dev.proxy"}),", the proxy here only applies to requests entering the BFF/API service; at the same time, this configuration can not only be used in the development environment, but also proxies corresponding requests in the production environment."]}),"\n","\n",(0,r.jsx)(c.default,{}),"\n",(0,r.jsxs)(n.h2,{id:"common-usage",children:["Common Usage",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#common-usage",children:"#"})]}),"\n",(0,r.jsxs)(n.h3,{id:"solving-cross-domain-issues-for-apis",children:["Solving Cross-Domain Issues for APIs",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#solving-cross-domain-issues-for-apis",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["During project development, cross-domain issues are often encountered because web pages and API services are not deployed under the same domain name.\nThere are many ways to solve cross-domain issues, and here we can easily solve them using ",(0,r.jsx)(n.code,{children:"bff.proxy"}),"."]}),"\n",(0,r.jsxs)(n.div,{className:"rspress-directive info",children:[(0,r.jsx)(n.div,{className:"rspress-directive-title",children:"INFO"}),(0,r.jsxs)(n.div,{className:"rspress-directive-content",children:[(0,r.jsx)(n.p,{children:"Under BFF proxy mode, if you don't need to write BFF code, the API directory can be deleted; BFF proxy will still be enabled."}),"\n"]})]}),"\n",(0,r.jsxs)(n.p,{children:["As shown below, the following configuration in ",(0,r.jsx)(n.code,{children:"modern.server-runtime.config.ts"})," will proxy all web page requests starting with ",(0,r.jsx)(n.code,{children:"/api"})," to a service on another domain with the same domain."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",meta:'title="modern.server-runtime.config.ts"',children:"export default defineServerConfig({\n  bff: {\n    proxy: {\n      '/api': 'https://cnodejs.org',\n    },\n  },\n};\n"})})]})}function d(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,o.useMDXComponents)(),e.components);return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}var l=d;d.__RSPRESS_PAGE_META={},d.__RSPRESS_PAGE_META["en%2Fconfigure%2Fapp%2Fbff%2Fproxy.mdx"]={toc:[{text:"Common Usage",id:"common-usage",depth:2},{text:"Solving Cross-Domain Issues for APIs",id:"solving-cross-domain-issues-for-apis",depth:3}],title:"bff.proxy",frontmatter:{sidebar_label:"proxy"}}}}]);