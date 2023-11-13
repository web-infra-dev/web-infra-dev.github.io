(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["35645"],{87137:function(e,n,s){"use strict";s.r(n),s.d(n,{default:function(){return a}});var i=s("9880"),r=s("23169");function t(e){let n=Object.assign({h1:"h1",a:"a",p:"p",code:"code",div:"div",pre:"pre",ul:"ul",li:"li",h3:"h3"},(0,r.useMDXComponents)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.h1,{id:"pages",children:["pages/",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#pages",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["The identifier for the entry point when the application uses the ",(0,i.jsxs)(n.a,{href:"https://modernjs.dev/v1/docs/guides/usages/entries#pages-%E5%85%A5%E5%8F%A3",target:"_blank",rel:"noopener noreferrer",children:[(0,i.jsx)(n.code,{children:"Pages"})," entry"]})," type."]}),"\n",(0,i.jsxs)(n.div,{className:"rspress-directive info",children:[(0,i.jsx)(n.div,{className:"rspress-directive-title",children:"INFO"}),(0,i.jsx)(n.div,{className:"rspress-directive-content",children:(0,i.jsxs)(n.p,{children:["Compatible with Modern.js 1.0 ",(0,i.jsx)(n.code,{children:"Pages"})," entry. It is recommended to use ",(0,i.jsx)(n.a,{href:"/guides/basic-features/routes#conventional-routing",children:"conventional routing"}),".\n"]})})]}),"\n",(0,i.jsxs)(n.p,{children:["When the project structure is of the ",(0,i.jsx)(n.code,{children:"Pages entry"})," type, the client-side routing configuration will be obtained by analyzing the files in the ",(0,i.jsx)(n.code,{children:"src/pages"})," directory."]}),"\n",(0,i.jsx)(n.p,{children:"For example, the following directory structure:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:".\n\u2514\u2500\u2500 src\n    \u2514\u2500\u2500 pages\n        \u251C\u2500\u2500 about\n        \u2502   \u2514\u2500\u2500 index.jsx\n        \u251C\u2500\u2500 index.jsx\n        \u2514\u2500\u2500 info.jsx\n"})}),"\n",(0,i.jsx)(n.p,{children:"The corresponding generated routing configuration is:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"[\n  { path: '/', component: 'pages/index.jsx' },\n  { path: '/info' component: 'pages/info.jsx' },\n  { path: '/about', component: 'pages/about/index.jsx' }\n]\n"})}),"\n",(0,i.jsx)(n.p,{children:"Files under the pages directory that meet the following conditions will not be treated as routing files:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Files whose suffix is not ",(0,i.jsx)(n.code,{children:".(j|t)sx?"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:".d.ts"})," type definition files."]}),"\n",(0,i.jsxs)(n.li,{children:["Test files ending in ",(0,i.jsx)(n.code,{children:".test.(j|t)sx?"})," or ",(0,i.jsx)(n.code,{children:".spec.(j|t)sx?"})," or ",(0,i.jsx)(n.code,{children:".e2e.(j|t)sx?"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.div,{className:"rspress-directive tip",children:[(0,i.jsx)(n.div,{className:"rspress-directive-title",children:"TIP"}),(0,i.jsxs)(n.div,{className:"rspress-directive-content",children:[(0,i.jsx)(n.p,{children:"It is recommended to only write entry code in the pages directory and write business logic in the independent features directory outside the pages directory. In this way, most of the files under the pages directory will be routing files, and there is no need for additional filtering rules."}),"\n"]})]}),"\n",(0,i.jsxs)(n.h3,{id:"dynamic-routing",children:["Dynamic Routing",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#dynamic-routing",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"If the directory name of the route file is named with [], the generated route will be used as a dynamic route."}),"\n",(0,i.jsx)(n.p,{children:"For example, the following directory structure:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:".\n\u2514\u2500\u2500 src\n    \u2514\u2500\u2500 pages\n        \u251C\u2500\u2500 [post]\n        \u2502   \u251C\u2500\u2500 detail.jsx\n        \u2502   \u2514\u2500\u2500 index.js\n        \u251C\u2500\u2500 users\n        \u2502   \u2514\u2500\u2500 [id].jsx\n        \u251C\u2500\u2500 index.jsx\n        \u2514\u2500\u2500 info.jsx\n"})}),"\n",(0,i.jsx)(n.p,{children:"The corresponding generated routing configuration is:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"[\n  { path: '/', component: 'pages/index.jsx' },\n  { path: '/info', component: 'pages/info.jsx' },\n  { path: '/:post/', component: 'pages/[post]/index.js' },\n  { path: '/:post/detail' components: 'pages/[post]/detail.jsx'},\n  { path: '/users/:id', components: 'pages/users/[id].jsx'}\n]\n"})}),"\n",(0,i.jsxs)(n.p,{children:["On the basis of dynamic routing, special routing suffixes ",(0,i.jsx)(n.code,{children:"(*, ?, +)"})," can be added."]}),"\n",(0,i.jsxs)(n.p,{children:["For example: ",(0,i.jsx)(n.code,{children:"src/pages/users/[id]*.tsx"})," will result in the route ",(0,i.jsx)(n.code,{children:"/users/:id*"}),"."]}),"\n",(0,i.jsxs)(n.h3,{id:"global-layout",children:["Global Layout",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#global-layout",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["When the entire application needs a global ",(0,i.jsx)(n.code,{children:"layout"}),", it can be achieved through ",(0,i.jsx)(n.code,{children:"pages/_app.tsx"}),". The specific writing method is as follows:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"import React from 'react';\nimport UserLayout from 'xxxx';\n\nexport const App = ({Component, ...pageProps}:{ Component: React.ComponentType}) => {\n  return (\n    <UserLayout>\n      <Component {...pageProps} />\n    </UserLayout>\n  );\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["The above ",(0,i.jsx)(n.code,{children:"Component"})," is the component matched when accessing a specific route."]}),"\n",(0,i.jsx)(n.p,{children:"For example, the following directory structure:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:".\n\u2514\u2500\u2500 pages\n    \u251C\u2500\u2500 a\n    \u2502   \u251C\u2500\u2500 b\n    \u2502   \u2502   \u2514\u2500\u2500 index.js\n    \u2502   \u2514\u2500\u2500 index.js\n    \u2514\u2500\u2500 index.js\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Accessing ",(0,i.jsx)(n.code,{children:"/"})," corresponds to the ",(0,i.jsx)(n.code,{children:"Component"})," component in ",(0,i.jsx)(n.code,{children:"pages/index.js"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Accessing ",(0,i.jsx)(n.code,{children:"/a"})," corresponds to the ",(0,i.jsx)(n.code,{children:"Component"})," component in ",(0,i.jsx)(n.code,{children:"pages/a/index.js"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Accessing ",(0,i.jsx)(n.code,{children:"/a/b"})," corresponds to the ",(0,i.jsx)(n.code,{children:"Component"})," component in ",(0,i.jsx)(n.code,{children:"pages/a/b/index.js"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.div,{className:"rspress-directive tip",children:[(0,i.jsx)(n.div,{className:"rspress-directive-title",children:"Advantages of global layout"}),(0,i.jsxs)(n.div,{className:"rspress-directive-content",children:["\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Preserve the state of the global layout when the page changes."}),"\n",(0,i.jsx)(n.li,{children:"Add global styles."}),"\n",(0,i.jsx)(n.li,{children:"ComponentDidCatch error handling."}),"\n",(0,i.jsxs)(n.li,{children:["Use ",(0,i.jsx)(n.a,{href:"/apis/app/runtime/app/define-config",children:"defineConfig"})," to dynamically configure the runtime configuration."]}),"\n"]}),"\n"]})]}),"\n",(0,i.jsxs)(n.h3,{id:"partial-layout",children:["Partial Layout",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#partial-layout",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"When developing an application, there are scenarios where sub-routes under the same route share a layout."}),"\n",(0,i.jsxs)(n.p,{children:["For this scenario, Modern.js conventionally has a similar effect to global layout when there is ",(0,i.jsx)(n.code,{children:"_layout.js"})," under the directory."]}),"\n",(0,i.jsx)(n.p,{children:"For example, the following directory structure:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"\u2514\u2500\u2500 pages\n    \u251C\u2500\u2500 a\n    \u2502   \u251C\u2500\u2500 b\n    \u2502   \u2502   \u2514\u2500\u2500 index.js\n    \u2502   \u251C\u2500\u2500 _layout.js\n    \u2502   \u2514\u2500\u2500 index.js\n    \u2514\u2500\u2500 index.js\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",meta:'title="pages/a/_layout.js"',children:"import React from 'react';\n\nconst ALayout = ({ Component, ...pageProps }) => {\n  return <Component {...pageProps} />;\n};\nexport default ALayout;\n"})}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"Component"})," parameter is the component corresponding to a specific accessed route, for example:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Accessing ",(0,i.jsx)(n.code,{children:"/a"})," corresponds to the ",(0,i.jsx)(n.code,{children:"Component"})," component in ",(0,i.jsx)(n.code,{children:"pages/a/index.js"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Accessing ",(0,i.jsx)(n.code,{children:"/a/b"})," corresponds to the ",(0,i.jsx)(n.code,{children:"Component"})," component in ",(0,i.jsx)(n.code,{children:"pages/a/b/index.js"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["In this way, ",(0,i.jsx)(n.code,{children:"pages/a/_layout.js"})," can be used to meet the layout needs of shared routes under the ",(0,i.jsx)(n.code,{children:"a"})," directory."]}),"\n",(0,i.jsxs)(n.h3,{id:"404-route",children:["404 Route",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#404-route",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"pages/404.[tj]sx"})," is conventionally the default 404 route."]}),"\n",(0,i.jsx)(n.p,{children:"For example, the following directory structure:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:".\n\u2514\u2500\u2500 src\n    \u2514\u2500\u2500 pages\n        \u251C\u2500\u2500 user.js\n        \u251C\u2500\u2500 home.js\n        \u251C\u2500\u2500 404.js\n"})}),"\n",(0,i.jsx)(n.p,{children:"The generated routing configuration is as follows:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"[\n { path: '/user', component: './pages/user.js'},\n { path: '/home', component: './pages/home.js' },\n { path: '*', component: './pages/404.js'}\n]\n"})}),"\n",(0,i.jsxs)(n.p,{children:["All unmatched routes will be matched to ",(0,i.jsx)(n.code,{children:"pages/404.[tj]s"}),"."]})]})}function o(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,r.useMDXComponents)(),e.components);return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(t,{...e})}):t(e)}var a=o;o.__RSPRESS_PAGE_META={},o.__RSPRESS_PAGE_META["en%2Fapis%2Fapp%2Fhooks%2Fsrc%2Fpages.mdx"]={toc:[{text:"Dynamic Routing",id:"dynamic-routing",depth:3},{text:"Global Layout",id:"global-layout",depth:3},{text:"Partial Layout",id:"partial-layout",depth:3},{text:"404 Route",id:"404-route",depth:3}],title:"pages/",frontmatter:{title:"pages/",sidebar_position:3}}}}]);