/*! For license information please see 1212.ec878679.js.LICENSE.txt */
(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["1212"],{84970:function(e,n,s){"use strict";s.r(n);var r=s("39980"),a=s("96954");function d(e){let n=Object.assign({h1:"h1",a:"a",p:"p",div:"div",ul:"ul",li:"li",code:"code",h2:"h2",pre:"pre"},(0,a.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"\u4EE3\u7801\u5206\u5272",children:["\u4EE3\u7801\u5206\u5272",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u4EE3\u7801\u5206\u5272",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"\u4EE3\u7801\u5206\u5272\u662F\u4F18\u5316\u524D\u7AEF\u8D44\u6E90\u52A0\u8F7D\u7684\u4E00\u79CD\u5E38\u7528\u624B\u6BB5\uFF0C\u672C\u6587\u5C06\u4ECB\u7ECD Modern.js \u652F\u6301\u7684\u4E09\u79CD\u4EE3\u7801\u5206\u5272\u65B9\u5F0F\uFF1A"}),"\n",(0,r.jsxs)(n.div,{className:"rspress-directive info",children:[(0,r.jsx)(n.div,{className:"rspress-directive-title",children:"INFO"}),(0,r.jsx)(n.div,{className:"rspress-directive-content",children:(0,r.jsxs)(n.p,{children:["\u4F7F\u7528 Modern.js ",(0,r.jsx)(n.a,{href:"/guides/basic-features/routes#%E7%BA%A6%E5%AE%9A%E5%BC%8F%E8%B7%AF%E7%94%B1",children:"\u7EA6\u5B9A\u5F0F\u8DEF\u7531"}),"\u65F6\uFF0C\u9ED8\u8BA4\u4F1A\u6839\u636E\u8DEF\u7531\u7EC4\u4EF6\u505A\u4EE3\u7801\u5206\u5272\uFF0C\u65E0\u9700\u81EA\u884C\u8FDB\u884C\u4EE3\u7801\u5206\u5272\u3002\n"]})})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"import"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"React.lazy"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"loadable"})}),"\n"]}),"\n",(0,r.jsxs)(n.h2,{id:"import",children:["import",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#import",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["\u4F7F\u7528\u52A8\u6001 ",(0,r.jsx)(n.code,{children:"import()"})," \u8BED\u6CD5\uFF0C\u4F20\u5165\u7684 JS \u6A21\u5757\u5C06\u4F1A\u88AB\u88AB\u6253\u5305\u5230\u5355\u72EC\u7684 JS \u6587\u4EF6\u4E2D\u3002\u4F8B\u5982\uFF1A"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"import('./math').then(math => {\n  console.log(math.add(16, 26));\n});\n"})}),"\n",(0,r.jsxs)(n.h2,{id:"reactlazy",children:["React.lazy",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#reactlazy",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"React \u5B98\u65B9\u63D0\u4F9B\u7684\u7EC4\u4EF6\u4EE3\u7801\u5206\u5272\u7684\u65B9\u5F0F\u3002"}),"\n",(0,r.jsxs)(n.div,{className:"rspress-directive caution",children:[(0,r.jsx)(n.div,{className:"rspress-directive-title",children:"CAUTION"}),(0,r.jsxs)(n.div,{className:"rspress-directive-content",children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"React.lazy"})," \u901A\u5E38\u914D\u5408 ",(0,r.jsx)(n.code,{children:"<Suspense>"})," \u4F7F\u7528\uFF0C\u56E0\u6B64\u4EC5\u5728 CSR \u6216 React 18 Streaming SSR \u4E2D\u53EF\u7528\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u5BF9\u4E8E\u4F7F\u7528\u4F20\u7EDF SSR\uFF08\u5B57\u7B26\u4E32\u6E32\u67D3\uFF09\u7684\u9879\u76EE\uFF0C\u4E0D\u652F\u6301 ",(0,r.jsx)(n.code,{children:"React.lazy"}),"\uFF0C\u8BF7\u4F7F\u7528 Loadable API\u3002\n"]})]})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"import React, { Suspense } from 'react';\n\nconst OtherComponent = React.lazy(() => import('./OtherComponent'));\nconst AnotherComponent = React.lazy(() => import('./AnotherComponent'));\n\nfunction MyComponent() {\n  return (\n    <div>\n      <Suspense fallback={<div>Loading...</div>}>\n        <section>\n          <OtherComponent />\n          <AnotherComponent />\n        </section>\n      </Suspense>\n    </div>\n  );\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"React.lazy"})," \u66F4\u591A\u7528\u6CD5\u8BF7\u89C1 ",(0,r.jsx)(n.a,{href:"https://zh-hans.react.dev/reference/react/lazy",target:"_blank",rel:"noopener noreferrer",children:"React \u5B98\u7F51\u6587\u6863"}),"\u3002"]}),"\n",(0,r.jsxs)(n.h2,{id:"loadable",children:["Loadable",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#loadable",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["\u5728 Modern.js \u4E2D\uFF0C\u53EF\u4EE5\u4ECE ",(0,r.jsx)(n.code,{children:"@modern-js/runtime/loadable"})," \u4E2D\u5BFC\u51FA\u4F7F\u7528 Loadable API\uFF0C\u793A\u4F8B\u5982\u4E0B\uFF1A"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"import loadable from '@modern-js/runtime/loadable';\n\nconst OtherComponent = loadable(() => import('./OtherComponent'));\n\nfunction MyComponent() {\n  return <OtherComponent />;\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Modern.js \u5F00\u7BB1\u5373\u7528\u7684\u652F\u6301\u5728 SSR \u4E2D\u4F7F\u7528 ",(0,r.jsx)(n.code,{children:"loadable"}),"\uFF0C\u65E0\u9700\u518D\u6DFB\u52A0 Babel \u63D2\u4EF6\uFF0C\u6216\u662F\u5728 SSR \u65F6\u5411 HTML \u4E2D\u6CE8\u5165\u811A\u672C\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u4F46\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u4EFB\u4F55 Loadable API \u5728 SSR \u4E2D\u90FD\u4E0D\u652F\u6301\u914D\u5408 ",(0,r.jsx)(n.code,{children:"<Suspense>"})," \u4F7F\u7528\u3002"]}),"\n",(0,r.jsxs)(n.div,{className:"rspress-directive info",children:[(0,r.jsx)(n.div,{className:"rspress-directive-title",children:"INFO"}),(0,r.jsx)(n.div,{className:"rspress-directive-content",children:(0,r.jsxs)(n.p,{children:["\u5982\u679C\u5E0C\u671B\u5728 React 17 \u53CA\u4EE5\u4E0B\u7684 CSR \u9879\u76EE\u4E2D\u4F7F\u7528 ",(0,r.jsx)(n.code,{children:"<Suspense>"}),"\uFF0C\u53EF\u4EE5\u7528 ",(0,r.jsx)(n.a,{href:"https://loadable-components.com/docs/suspense/",target:"_blank",rel:"noopener noreferrer",children:"loadable.lazy"})," \u4EE3\u66FF ",(0,r.jsx)(n.code,{children:"React.lazy"}),"\u3002\n"]})})]}),"\n",(0,r.jsxs)(n.p,{children:["\u66F4\u591A\u7528\u6CD5\u8BF7\u89C1 ",(0,r.jsx)(n.a,{href:"/apis/app/runtime/utility/loadable",children:"Loadable API"}),"\u3002"]})]})}function i(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,a.useMDXComponents)(),e.components);return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}n.default=i,i.__RSPRESS_PAGE_META={},i.__RSPRESS_PAGE_META["zh%2Fguides%2Fadvanced-features%2Fcode-split.mdx"]={toc:[{text:"import",id:"import",depth:2},{text:"React.lazy",id:"reactlazy",depth:2},{text:"Loadable",id:"loadable",depth:2}],title:"\u4EE3\u7801\u5206\u5272",frontmatter:{sidebar_position:3}}}}]);