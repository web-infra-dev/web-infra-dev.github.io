/*! For license information please see 85929.5b8b3b58.js.LICENSE.txt */
(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["85929"],{6193:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return i}});var s=t("39980"),r=t("96954");function o(e){let n=Object.assign({h1:"h1",a:"a",p:"p",code:"code",pre:"pre",h2:"h2",ul:"ul",li:"li",div:"div"},(0,r.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h1,{id:"routes",children:["routes/",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#routes",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["The identifier for the entry point when the application uses ",(0,s.jsx)(n.a,{href:"/guides/basic-features/routes#conventional-routing",children:"Conventional Routing"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Conventional routing uses ",(0,s.jsx)(n.code,{children:"routes/"})," as the convention for the entry point and analyzes the files in the ",(0,s.jsx)(n.code,{children:"src/routes"})," directory to obtain the client-side routing configuration."]}),"\n",(0,s.jsxs)(n.p,{children:["Any ",(0,s.jsx)(n.code,{children:"layout.[tj]sx"})," and ",(0,s.jsx)(n.code,{children:"page.[tj]sx"})," under ",(0,s.jsx)(n.code,{children:"src/routes"})," will be used as the application's routes:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",meta:"{3,4}",children:".\n\u2514\u2500\u2500 routes\n    \u251C\u2500\u2500 layout.tsx\n    \u251C\u2500\u2500 page.tsx\n    \u2514\u2500\u2500 user\n        \u251C\u2500\u2500 layout.tsx\n        \u2514\u2500\u2500 page.tsx\n"})}),"\n",(0,s.jsxs)(n.h2,{id:"basic-example",children:["Basic Example",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#basic-example",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["The directory name under ",(0,s.jsx)(n.code,{children:"routes"})," will be used as the mapping of the route URL. ",(0,s.jsx)(n.code,{children:"layout.tsx"})," is used as the layout component and ",(0,s.jsx)(n.code,{children:"page.tsx"})," is used as the content component in the routing. They are the leaf nodes of the entire route. For example, the following directory structure:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:".\n\u2514\u2500\u2500 routes\n    \u251C\u2500\u2500 page.tsx\n    \u2514\u2500\u2500 user\n        \u2514\u2500\u2500 page.tsx\n"})}),"\n",(0,s.jsx)(n.p,{children:"will generate two routes:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"/"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"/user"})}),"\n"]}),"\n",(0,s.jsxs)(n.h2,{id:"dynamic-routing",children:["Dynamic Routing",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#dynamic-routing",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["If the directory name of the route file is named with ",(0,s.jsx)(n.code,{children:"[]"}),", the generated route will be used as a dynamic route. For example, the following file directory:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"\u2514\u2500\u2500 routes\n    \u251C\u2500\u2500 [id]\n    \u2502   \u2514\u2500\u2500 page.tsx\n    \u251C\u2500\u2500 blog\n    \u2502   \u2514\u2500\u2500 page.tsx\n    \u2514\u2500\u2500 page.tsx\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"routes/[id]/page.tsx"})," file will be converted to the ",(0,s.jsx)(n.code,{children:"/:id"})," route. Except for the ",(0,s.jsx)(n.code,{children:"/blog"})," route that can be matched exactly, all other ",(0,s.jsx)(n.code,{children:"/xxx"})," routes will be matched to this route."]}),"\n",(0,s.jsxs)(n.p,{children:["In the component, you can use ",(0,s.jsx)(n.a,{href:"/apis/app/runtime/router/router#useparams",children:"useParams"})," to obtain the corresponding named parameter."]}),"\n",(0,s.jsxs)(n.p,{children:["When using the ",(0,s.jsx)(n.a,{href:"/guides/basic-features/data/data-fetch#the-loader-function",children:"loader"})," function to obtain data, ",(0,s.jsx)(n.code,{children:"params"})," will be passed as an input parameter to the ",(0,s.jsx)(n.code,{children:"loader"})," function, and the corresponding parameter can be obtained through the attribute of ",(0,s.jsx)(n.code,{children:"params"}),"."]}),"\n",(0,s.jsxs)(n.h2,{id:"layout-component",children:["Layout Component",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#layout-component",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["In the following example, a common layout component can be added to all route components by adding ",(0,s.jsx)(n.code,{children:"layout.tsx"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:".\n\u2514\u2500\u2500 routes\n    \u251C\u2500\u2500 layout.tsx\n    \u251C\u2500\u2500 page.tsx\n    \u2514\u2500\u2500 user\n        \u251C\u2500\u2500 layout.tsx\n        \u2514\u2500\u2500 page.tsx\n"})}),"\n",(0,s.jsxs)(n.p,{children:["In the layout component, you can use ",(0,s.jsx)(n.code,{children:"<Outlet>"})," to represent the child components:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",meta:"title=routes/layout.tsx",children:"import { Link, Outlet, useLoaderData } from '@modern-js/runtime/router';\n\nexport default () => {\n  return (\n    <>\n      <Outlet></Outlet>\n    </>\n  );\n};\n"})}),"\n",(0,s.jsxs)(n.div,{className:"rspress-directive note",children:[(0,s.jsx)(n.div,{className:"rspress-directive-title",children:"NOTE"}),(0,s.jsxs)(n.div,{className:"rspress-directive-content",children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"<Outlet>"})," is a new API in React Router 6. For details, see ",(0,s.jsx)(n.a,{href:"https://reactrouter.com/en/main/components/outlet#outlet",target:"_blank",rel:"noopener noreferrer",children:"Outlet"}),"."]}),"\n"]})]})]})}function a(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,r.useMDXComponents)(),e.components);return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}var i=a;a.__RSPRESS_PAGE_META={},a.__RSPRESS_PAGE_META["en%2Fapis%2Fapp%2Fhooks%2Fsrc%2Froutes.mdx"]={toc:[{text:"Basic Example",id:"basic-example",depth:2},{text:"Dynamic Routing",id:"dynamic-routing",depth:2},{text:"Layout Component",id:"layout-component",depth:2}],title:"routes/",frontmatter:{title:"routes/",sidebar_position:2}}}}]);