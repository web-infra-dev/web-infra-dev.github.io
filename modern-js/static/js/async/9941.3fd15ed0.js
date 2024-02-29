/*! For license information please see 9941.3fd15ed0.js.LICENSE.txt */
(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["9941"],{82549:function(e,n,r){"use strict";r.r(n);var s=r("39980"),t=r("96954"),i=r("69553");function o(e){let n=Object.assign({h1:"h1",a:"a",ul:"ul",li:"li",strong:"strong",code:"code",p:"p",h3:"h3",pre:"pre",img:"img",div:"div"},(0,t.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h1,{id:"devproxy",children:["dev.proxy",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#devproxy",children:"#"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Type:"})," ",(0,s.jsx)(n.code,{children:"string | Object"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Default:"})," ",(0,s.jsx)(n.code,{children:"null"})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["This option is used to configure a global proxy based on ",(0,s.jsx)(n.a,{href:"https://wproxy.org/whistle/",target:"_blank",rel:"noopener noreferrer",children:"whistle"})," in the development environment, which can be used to view and modify HTTP/HTTPS requests, responses, and can also be used as a proxy server."]}),"\n",(0,s.jsxs)(n.h3,{id:"register-plugin",children:["Register Plugin",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#register-plugin",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["Before using this option, you need to install and register the ",(0,s.jsx)(n.code,{children:"@modern-js/plugin-proxy"})," plugin:"]}),"\n","\n",(0,s.jsx)(i.PackageManagerTabs,{command:"add @modern-js/plugin-proxy -D"}),"\n",(0,s.jsxs)(n.p,{children:["After the installation, please register the plugin in the ",(0,s.jsx)(n.code,{children:"modern.config.ts"})," file:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import { appTools, defineConfig } from '@modern-js/app-tools';\nimport { proxyPlugin } from '@modern-js/plugin-proxy';\n\nexport default defineConfig({\n  plugins: [appTools(), proxyPlugin()],\n});\n"})}),"\n",(0,s.jsxs)(n.h3,{id:"object-type",children:["Object Type",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#object-type",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["When the value of ",(0,s.jsx)(n.code,{children:"dev.proxy"})," is object type, the ",(0,s.jsx)(n.code,{children:"key"})," of the object corresponds to the matching ",(0,s.jsx)(n.code,{children:"pattern"}),", and the ",(0,s.jsx)(n.code,{children:"value"})," of the object corresponds to the matching ",(0,s.jsx)(n.code,{children:"target"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"Example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"export default defineConfig({\n  dev: {\n    proxy: {\n      'https://www.baidu.com': 'https://google.com.hk',\n      // Static files can be returned directly via the file protocol\n      'https://example.com/api': 'file://./data.json',\n    },\n  },\n});\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Please refer to ",(0,s.jsx)(n.a,{href:"https://wproxy.org/whistle/pattern.html",target:"_blank",rel:"noopener noreferrer",children:"whistle - Matching Patterns"})," for detailed usage."]}),"\n",(0,s.jsxs)(n.h3,{id:"string-type",children:["String Type",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#string-type",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["When the value of ",(0,s.jsx)(n.code,{children:"dev.proxy"})," is string type, it can be used to specify a separate proxy file, for example:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"export default defineConfig({\n  dev: {\n    proxy: './proxy.js',\n  },\n});\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",meta:'title="proxy.js"',children:"module.exports = {\n  name: 'my-app',\n  rules: `\n    ^example.com:8080/api/***   http://localhost:3001/api/$\n  `,\n};\n"})}),"\n",(0,s.jsxs)(n.h3,{id:"start-proxy",children:["Start Proxy",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#start-proxy",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["Execute ",(0,s.jsx)(n.code,{children:"dev"}),", when the prompt is as follows, the proxy server starts successfully:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"  Local:    http://localhost:8080/\n  Network:  http://192.168.0.1:8080/\n\ninfo      Starting proxy server.....\nsuccess   Proxy server start on localhost:8899\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Access the ",(0,s.jsx)(n.code,{children:"localhost:8899"})," to view the Network and configure proxy rules on the UI interface:"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/aphqeh7uhohpquloj/modern-js/docs/dev-proxy.png",alt:"proxy UI"})}),"\n",(0,s.jsxs)(n.div,{className:"rspress-directive info",children:[(0,s.jsx)(n.div,{className:"rspress-directive-title",children:"INFO"}),(0,s.jsxs)(n.div,{className:"rspress-directive-content",children:[(0,s.jsx)(n.p,{children:"The https agent automatically installs the certificate to obtain root privileges. Please enter the password as prompted. ** The password is only used when the certificate is trusted and will not be leaked or used for other links **."}),"\n"]})]})]})}function a(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,t.useMDXComponents)(),e.components);return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}n.default=a,a.__RSPRESS_PAGE_META={},a.__RSPRESS_PAGE_META["en%2Fconfigure%2Fapp%2Fdev%2Fproxy.mdx"]={toc:[{text:"Register Plugin",id:"register-plugin",depth:3},{text:"Object Type",id:"object-type",depth:3},{text:"String Type",id:"string-type",depth:3},{text:"Start Proxy",id:"start-proxy",depth:3}],title:"dev.proxy",frontmatter:{sidebar_label:"proxy"}}}}]);