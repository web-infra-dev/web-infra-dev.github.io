/*! For license information please see 22660.afc2877c.js.LICENSE.txt */
(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["22660"],{23917:function(e,n,t){"use strict";t.r(n);var a=t("39980"),r=t("96954");function o(e){let n=Object.assign({h1:"h1",a:"a",p:"p",strong:"strong",code:"code",pre:"pre",div:"div",img:"img"},(0,r.useMDXComponents)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.h1,{id:"add-loader",children:["Add Loader",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#add-loader",children:"#"})]}),"\n",(0,a.jsx)(n.p,{children:"In the previous chapter, we learned how to add client route."}),"\n",(0,a.jsxs)(n.p,{children:["In this chapter, we will learn how to add ",(0,a.jsx)(n.strong,{children:"Loader"})," to the routing component."]}),"\n",(0,a.jsxs)(n.p,{children:["By far, we have provided data to components through hardcoding. If you want to get data from the remote, you usually use ",(0,a.jsx)(n.code,{children:"useEffect"})," to do it. But when SSR is enabled, ",(0,a.jsx)(n.code,{children:"useEffect"})," will not be executed at the server level, so this SSR can only render a very limited UI."]}),"\n",(0,a.jsx)(n.p,{children:"Modern.js provides the ability of Data Loader to support homogeneous data acquisition in components to maximize the value of SSR."}),"\n",(0,a.jsx)(n.p,{children:"Below we demonstrate how to add Data Loader to the routing component and simulate remote data acquisition. We use faker to mock the required data, first install dependency:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"pnpm add faker@5\npnpm add @types/faker@5 -D\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Create ",(0,a.jsx)(n.code,{children:"src/routes/page.data.ts"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",children:"import { name, internet } from 'faker';\n\nexport type LoaderData = {\n  code: number;\n  data: {\n    name: string;\n    avatar: string;\n    email: string;\n  }[];\n};\n\nexport const loader = async (): Promise<LoaderData> => {\n  const data = new Array(20).fill(0).map(() => {\n    const firstName = name.firstName();\n    return {\n      name: firstName,\n      avatar: `https://api.dicebear.com/7.x/pixel-art/svg?seed=${firstName}`,\n      email: internet.email(),\n    };\n  });\n\n  return {\n    code: 200,\n    data,\n  };\n};\n"})}),"\n",(0,a.jsxs)(n.div,{className:"rspress-directive note",children:[(0,a.jsx)(n.div,{className:"rspress-directive-title",children:"NOTE"}),(0,a.jsxs)(n.div,{className:"rspress-directive-content",children:[(0,a.jsx)(n.p,{children:"Data Loader doesn't just work for SSR. In CSR projects, Data Loader can also avoid data acquisition dependency UI rendering, which solves the problem of requesting dynamic grid layout. In the future, Modern.js will also add more capabilities to this feature, such as pre-fetching, data caching, etc."}),"\n"]})]}),"\n",(0,a.jsxs)(n.p,{children:["Modern.js also provides a hooks API called ",(0,a.jsx)(n.code,{children:"useLoaderData"}),", we modify the exported component of ",(0,a.jsx)(n.code,{children:"src/routes/page.tsx"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",meta:"{1,2,5,13}",children:"import { useLoaderData } from '@modern-js/runtime/router';\nimport type { LoaderData } from './page.data';\n\nfunction Index() {\n  const { data } = useLoaderData() as LoaderData;\n\n  return (\n    <div className=\"container lg mx-auto\">\n      <Helmet>\n        <title>All</title>\n      </Helmet>\n      <List\n        dataSource={data}\n        renderItem={info => <Item key={info.name} info={info} />}\n      />\n    </div>\n  );\n}\n\nexport default Index;\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Re-execute ",(0,a.jsx)(n.code,{children:"pnpm run dev"}),", view ",(0,a.jsx)(n.code,{children:"view-source: http://localhost:8080/"}),', or view the "Preview" of the HTML request in the Network panel of devtools, you can see that the HTML rendered by SSR already contains the complete UI:']}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/aphqeh7uhohpquloj/modern-js/docs/11/display6.png",alt:"display6"})})]})}function s(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,r.useMDXComponents)(),e.components);return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(o,{...e})}):o(e)}n.default=s,s.__RSPRESS_PAGE_META={},s.__RSPRESS_PAGE_META["en%2Ftutorials%2Ffirst-app%2Fc05-loader.mdx"]={toc:[],title:"Add Loader",frontmatter:{title:"Add Loader"}}}}]);