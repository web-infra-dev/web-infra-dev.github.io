/*! For license information please see 83152.25e30fb2.js.LICENSE.txt */
(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["83152"],{2075:function(e,n,s){"use strict";s.r(n),s.d(n,{default:function(){return a}});var t=s("9880"),i=s("23169");function r(e){let n=Object.assign({h1:"h1",a:"a",p:"p",div:"div",ul:"ul",li:"li",code:"code",h2:"h2",pre:"pre"},(0,i.useMDXComponents)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.h1,{id:"code-splitting",children:["Code Splitting",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#code-splitting",children:"#"})]}),"\n",(0,t.jsx)(n.p,{children:"Code splitting is a common way to optimize frontend resource loading. This article will introduce the three types of code splitting supported by Modern.js:"}),"\n",(0,t.jsxs)(n.div,{className:"rspress-directive info",children:[(0,t.jsx)(n.div,{className:"rspress-directive-title",children:"INFO"}),(0,t.jsx)(n.div,{className:"rspress-directive-content",children:(0,t.jsxs)(n.p,{children:["When using Modern.js ",(0,t.jsx)(n.a,{href:"/guides/basic-features/routes#conventional-routing",children:"Conventional routing"}),". By default, code splitting is done according to the routing component, so you don't need to do it yourself.\n"]})})]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"import"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"React.lazy"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"loadable"})}),"\n"]}),"\n",(0,t.jsxs)(n.h2,{id:"import",children:["import",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#import",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:["use dynamic ",(0,t.jsx)(n.code,{children:"import()"}),", the JS modules pass to this API will be bundled as a separate JS file, for example:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"import('./math').then(math => {\n  console.log(math.add(16, 26));\n});\n"})}),"\n",(0,t.jsxs)(n.h2,{id:"reactlazy",children:["React.lazy",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#reactlazy",children:"#"})]}),"\n",(0,t.jsx)(n.p,{children:"The officially way provides by React to split component code."}),"\n",(0,t.jsxs)(n.div,{className:"rspress-directive caution",children:[(0,t.jsx)(n.div,{className:"rspress-directive-title",children:"CAUTION"}),(0,t.jsxs)(n.div,{className:"rspress-directive-content",children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"React.lazy"})," is typically used in together with ",(0,t.jsx)(n.code,{children:"<Suspense>"}),", hence it is only available in CSR or React 18 Streaming SSR."]}),"\n",(0,t.jsxs)(n.p,{children:["For projects that use Traditional SSR\uFF08renderToString\uFF09, ",(0,t.jsx)(n.code,{children:"React.lazy"})," is not supported. Please use the Loadable API instead.\n"]})]})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"import React, { Suspense } from 'react';\n\nconst OtherComponent = React.lazy(() => import('./OtherComponent'));\nconst AnotherComponent = React.lazy(() => import('./AnotherComponent'));\n\nfunction MyComponent() {\n  return (\n    <div>\n      <Suspense fallback={<div>Loading...</div>}>\n        <section>\n          <OtherComponent />\n          <AnotherComponent />\n        </section>\n      </Suspense>\n    </div>\n  );\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["For details, see ",(0,t.jsx)(n.a,{href:"https://react.dev/reference/react/lazy",target:"_blank",rel:"noopener noreferrer",children:"React lazy"}),"."]}),"\n",(0,t.jsxs)(n.h2,{id:"loadable",children:["Loadable",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#loadable",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:["In Modern.js, you can use the Loadable API, which is exported from ",(0,t.jsx)(n.code,{children:"@modern-js/runtime/loadable"}),". Here's an example:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"import loadable from '@modern-js/runtime/loadable';\n\nconst OtherComponent = loadable(() => import('./OtherComponent'));\n\nfunction MyComponent() {\n  return <OtherComponent />;\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["With the out-of-the-box support of ",(0,t.jsx)(n.code,{children:"loadable"})," in SSR by Modern.js, you no longer need to add Babel plugins or inject scripts into HTML during SSR."]}),"\n",(0,t.jsxs)(n.p,{children:["However, it's important to note that any Loadable API in SSR does not support the use of ",(0,t.jsx)(n.code,{children:"<Suspense>"}),"."]}),"\n",(0,t.jsxs)(n.div,{className:"rspress-directive info",children:[(0,t.jsx)(n.div,{className:"rspress-directive-title",children:"INFO"}),(0,t.jsx)(n.div,{className:"rspress-directive-content",children:(0,t.jsxs)(n.p,{children:["If you want to use ",(0,t.jsx)(n.code,{children:"<Suspense>"})," in CSR projects with React 17 and below, you can substitute ",(0,t.jsx)(n.code,{children:"React.lazy"})," with ",(0,t.jsx)(n.code,{children:"loadable.lazy"}),".\n"]})})]}),"\n",(0,t.jsxs)(n.p,{children:["For details, see ",(0,t.jsx)(n.a,{href:"/apis/app/runtime/utility/loadable",children:"Loadable API"}),"."]})]})}function o(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,i.useMDXComponents)(),e.components);return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(r,{...e})}):r(e)}var a=o;o.__RSPRESS_PAGE_META={},o.__RSPRESS_PAGE_META["en%2Fguides%2Fadvanced-features%2Fcode-split.mdx"]={toc:[{text:"import",id:"import",depth:2},{text:"React.lazy",id:"reactlazy",depth:2},{text:"Loadable",id:"loadable",depth:2}],title:"Code Splitting",frontmatter:{sidebar_position:3}}}}]);