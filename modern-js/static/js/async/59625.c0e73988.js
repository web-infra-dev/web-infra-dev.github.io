/*! For license information please see 59625.c0e73988.js.LICENSE.txt */
(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["59625"],{73908:function(e,n,i){"use strict";i.r(n);var o=i("39980"),r=i("9580");function s(e){let n=Object.assign({h1:"h1",a:"a",ul:"ul",li:"li",strong:"strong",code:"code",p:"p",div:"div",blockquote:"blockquote"},(0,r.ah)(),e.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.h1,{id:"toolsbundlerchain",children:["tools.bundlerChain",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#toolsbundlerchain",children:"#"})]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Type:"})," ",(0,o.jsx)(n.code,{children:"Function | undefined"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Default:"})," ",(0,o.jsx)(n.code,{children:"undefined"})]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["You can modify the webpack and Rspack configuration by configuring ",(0,o.jsx)(n.code,{children:"tools.bundlerChain"})," which is type of ",(0,o.jsx)(n.code,{children:"Function"}),". The function receives two parameters, the first is the original bundler chain object, and the second is an object containing some utils."]}),"\n",(0,o.jsxs)(n.div,{className:"rspress-directive tip",children:[(0,o.jsx)(n.div,{className:"rspress-directive-title",children:"What is BundlerChain"}),(0,o.jsxs)(n.div,{className:"rspress-directive-content",children:["\n",(0,o.jsx)(n.p,{children:"Bundler chain is a subset of webpack chain, which contains part of the webpack chain API that you can use to modify both webpack and Rspack configuration."}),"\n",(0,o.jsxs)(n.p,{children:["Configurations modified via bundler chain will work on both webpack and Rspack builds. Note that the bundler chain only supports modifying the configuration of the non-differentiated parts of webpack and Rspack. For example, modifying the devtool configuration option (webpack and Rspack have the same devtool property value type), or adding an ",(0,o.jsx)(n.a,{href:"https://www.rspack.dev/guide/plugin-compat.html",target:"_blank",rel:"noopener noreferrer",children:"Rspack-compatible"})," webpack plugin."]}),"\n"]})]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"tools.bundlerChain"})," is executed earlier than tools.webpackChain / tools.webpack / tools.rspack and thus will be overridden by changes in others."]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["For more information, please refer to ",(0,o.jsx)(n.a,{href:"https://rsbuild.dev/config/tools/bundler-chain",target:"_blank",rel:"noopener noreferrer",children:"Rsbuild#tools.bundlerChain"})]})]})}function a(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(s,{...e})}):s(e)}n.default=a,a.__RSPRESS_PAGE_META={},a.__RSPRESS_PAGE_META["en%2Fconfigure%2Fapp%2Ftools%2Fbundler-chain.mdx"]={toc:[],title:"tools.bundlerChain",frontmatter:{sidebar_label:"bundlerChain"}}}}]);