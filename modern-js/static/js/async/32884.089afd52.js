/*! For license information please see 32884.089afd52.js.LICENSE.txt */
(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["32884"],{82923:function(e,n,r){"use strict";r.r(n);var t=r("39980"),a=r("96954");function s(e){let n=Object.assign({h1:"h1",a:"a",h2:"h2",p:"p",ul:"ul",li:"li",pre:"pre",code:"code",h3:"h3",div:"div",ol:"ol"},(0,a.useMDXComponents)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.h1,{id:"streaming-ssr",children:["Streaming SSR",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#streaming-ssr",children:"#"})]}),"\n",(0,t.jsxs)(n.h2,{id:"overview",children:["Overview",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#overview",children:"#"})]}),"\n",(0,t.jsx)(n.p,{children:"Stream rendering is a new way of rendering, which can update the page content in real time when the user interacts with the page, thereby improving the user experience."}),"\n",(0,t.jsx)(n.p,{children:"In traditional rendering, the rendering of the page is completed at once, while in stream rendering, the rendering of the page is gradually completed. When the user interacts with the page, data is loaded gradually instead of loading all at once."}),"\n",(0,t.jsx)(n.p,{children:"Compared to traditional rendering:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Faster perceived speed: Stream rendering can gradually display content during the rendering process to display the business home page at the fastest speed."}),"\n",(0,t.jsx)(n.li,{children:"Better user experience: Through stream rendering, users can see the content on the page faster, instead of waiting for the entire page to be rendered before they can interact."}),"\n",(0,t.jsx)(n.li,{children:"Better performance control: Stream rendering allows developers to better control the loading priority and order of pages, thereby optimizing performance and user experience."}),"\n",(0,t.jsx)(n.li,{children:"Better adaptability: Stream rendering can better adapt to different network speeds and device performances, allowing the page to perform better in various environments."}),"\n"]}),"\n",(0,t.jsxs)(n.h2,{id:"usage",children:["Usage",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#usage",children:"#"})]}),"\n",(0,t.jsx)(n.p,{children:"Modern.js supports streaming rendering in React 18 which can be enabled through the following configuration:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import { defineConfig } from '@modern-js/app-tools';\n\nexport default defineConfig({\n  server: {\n    ssr: {\n      mode: 'stream',\n    },\n  },\n});\n"})}),"\n",(0,t.jsx)(n.p,{children:"The streaming SSR of Modern.js is implemented based on React Router, and the main APIs involved are:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://reactrouter.com/en/main/utils/defer",target:"_blank",rel:"noopener noreferrer",children:(0,t.jsx)(n.code,{children:"defer"})}),": This utility allows you to defer values returned from loaders by passing promises instead of resolved values."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://reactrouter.com/en/main/components/await",target:"_blank",rel:"noopener noreferrer",children:(0,t.jsx)(n.code,{children:"Await"})}),": Used to render deferred values with automatic error handling."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://reactrouter.com/en/main/hooks/use-async-value",target:"_blank",rel:"noopener noreferrer",children:(0,t.jsx)(n.code,{children:"useAsyncValue"})}),": Returns the resolved data from the nearest ",(0,t.jsx)(n.code,{children:"<Await>"})," ancestor component."]}),"\n"]}),"\n",(0,t.jsxs)(n.h3,{id:"return-async-data",children:["Return async data",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#return-async-data",children:"#"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",meta:'title="page.data.ts"',children:"import { defer, type LoaderFunctionArgs } from '@modern-js/runtime/router';\n\ninterface User {\n  name: string;\n  age: number;\n}\n\nexport interface Data {\n  data: User;\n}\n\nexport const loader = ({ params }: LoaderFunctionArgs) => {\n  const userId = params.id;\n\n  const user = new Promise<User>(resolve => {\n    setTimeout(() => {\n      resolve({\n        name: `user-${userId}`,\n        age: 18,\n      });\n    }, 200);\n  });\n\n  return defer({ data: user });\n};\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"user"})," is a ",(0,t.jsx)(n.code,{children:"Promise"})," object that represents the data that needs to be obtained asynchronously. Use ",(0,t.jsx)(n.code,{children:"defer"})," to handle the asynchronous retrieval of user. Note that ",(0,t.jsx)(n.code,{children:"defer"})," must receive an object type parameter, so the parameter passed to ",(0,t.jsx)(n.code,{children:"defer"})," is: ",(0,t.jsx)(n.code,{children:"{ data: user }"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"defer"})," can receive both asynchronous and synchronous data at the same time. For example:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",meta:'title="page.data.ts"',children:"// skip some codes\n\nexport default ({ params }: LoaderFunctionArgs) => {\n  const userId = params.id;\n\n  const user = new Promise<User>(resolve => {\n    setTimeout(() => {\n      resolve({\n        name: `user-${userId}`,\n        age: 18,\n      });\n    }, 200);\n  });\n\n  const otherData = new Promise<string>(resolve => {\n    setTimeout(() => {\n      resolve('some sync data');\n    }, 200);\n  });\n\n  return defer({\n    data: user,\n    other: await otherData,\n  });\n};\n"})}),"\n",(0,t.jsxs)(n.p,{children:["The data obtained from otherData is synchronous because it has an ",(0,t.jsx)(n.code,{children:"await"})," keyword in front of it. It can be passed into ",(0,t.jsx)(n.code,{children:"defer"})," together with the asynchronous data obtained from ",(0,t.jsx)(n.code,{children:"user"}),"."]}),"\n",(0,t.jsxs)(n.h3,{id:"render-asynchronous-data",children:["Render asynchronous data.",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#render-asynchronous-data",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:["With the ",(0,t.jsx)(n.code,{children:"<Await>"})," component, you can retrieve the data asynchronously returned by the Data Loader and then render it. For example:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",meta:'title="page.tsx"',children:"import { Await, useLoaderData } from '@modern-js/runtime/router';\nimport { Suspense } from 'react';\nimport type { Data } from './page.data';\n\nconst Page = () => {\n  const data = useLoaderData() as Data;\n\n  return (\n    <div>\n      User info:\n      <Suspense fallback={<div id=\"loading\">loading user data ...</div>}>\n        <Await resolve={data.data}>\n          {user => {\n            return (\n              <div id=\"data\">\n                name: {user.name}, age: {user.age}\n              </div>\n            );\n          }}\n        </Await>\n      </Suspense>\n    </div>\n  );\n};\n\nexport default Page;\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"<Await>"})," needs to be wrapped inside the ",(0,t.jsx)(n.code,{children:"<Suspense>"})," component. The ",(0,t.jsx)(n.code,{children:"resolve"})," function passed into ",(0,t.jsx)(n.code,{children:"<Await>"})," is used to asynchronously retrieve data from a Data Loader. Once the data has been retrieved, it is rendered using ",(0,t.jsx)(n.a,{href:"https://reactjs.org/docs/render-props.html",target:"_blank",rel:"noopener noreferrer",children:"Render Props"})," mode. During the data retrieval phase, the content specified in the ",(0,t.jsx)(n.code,{children:"fallback"})," property of ",(0,t.jsx)(n.code,{children:"<Suspense>"})," will be displayed."]}),"\n",(0,t.jsxs)(n.div,{className:"rspress-directive warning",children:[(0,t.jsx)(n.div,{className:"rspress-directive-title",children:"Warning"}),(0,t.jsxs)(n.div,{className:"rspress-directive-content",children:[(0,t.jsxs)(n.p,{children:["When importing types from a Data Loader file, it is necessary to use the ",(0,t.jsx)(n.code,{children:"import type"})," syntax to ensure that only type information is imported. This can avoid packaging Data Loader code into the bundle file of the front-end product."]}),"\n",(0,t.jsxs)(n.p,{children:["Therefore, the import method here is: ",(0,t.jsx)(n.code,{children:"import type { Data } from './page.data'"}),";\n"]})]})]}),"\n",(0,t.jsxs)(n.p,{children:["You can also retrieve asynchronous data returned by the Data Loader using ",(0,t.jsx)(n.code,{children:"useAsyncValue"}),". For example:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",meta:'title="page.tsx"',children:"import { useAsyncValue } from '@modern-js/runtime/router';\n\n// skip some codes\n\nconst UserInfo = () => {\n  const user = useAsyncValue();\n\n  return (\n    <div>\n      name: {user.name}, age: {user.age}\n    </div>\n  );\n};\n\nconst Page = () => {\n  const data = useLoaderData() as Data;\n\n  return (\n    <div>\n      User info:\n      <Suspense fallback={<div id=\"loading\">loading user data ...</div>}>\n        <Await resolve={data.data}>\n          <UserInfo />\n        </Await>\n      </Suspense>\n    </div>\n  );\n};\n\nexport default Page;\n"})}),"\n",(0,t.jsxs)(n.h3,{id:"error-handling",children:["Error handling",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#error-handling",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"errorElement"})," property of the ",(0,t.jsx)(n.code,{children:"<Await>"})," component can be used to handle errors thrown when the Data Loader executes or when a child component renders.\nFor example, we intentionally throw an error in the Data Loader function:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",meta:'title="page.data.ts"',children:"import { defer } from '@modern-js/runtime/router';\n\nexport const loader = () => {\n  const data = new Promise((resolve, reject) => {\n    setTimeout(() => {\n      reject(new Error('error occurs'));\n    }, 200);\n  });\n\n  return defer({ data });\n};\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Then use ",(0,t.jsx)(n.code,{children:"useAsyncError"})," to get the error, and assign the component used to render the error to the ",(0,t.jsx)(n.code,{children:"errorElement"})," property of the ",(0,t.jsx)(n.code,{children:"<Await>"})," component:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",meta:'title="page.ts"',children:"import { Await, useAsyncError, useLoaderData } from '@modern-js/runtime/router';\nimport { Suspense } from 'react';\n\nexport default function Page() {\n  const data = useLoaderData();\n\n  return (\n    <div>\n      Error page\n      <Suspense fallback={<div>loading ...</div>}>\n        <Await resolve={data.data} errorElement={<ErrorElement />}>\n          {(data: any) => {\n            return <div>never displayed</div>;\n          }}\n        </Await>\n      </Suspense>\n    </div>\n  );\n}\n\nfunction ErrorElement() {\n  const error = useAsyncError() as Error;\n  return <p>Something went wrong! {error.message}</p>;\n}\n"})}),"\n",(0,t.jsxs)(n.h2,{id:"waiting-for-all-content-to-load-for-spiders",children:["Waiting for all content to load for spiders",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#waiting-for-all-content-to-load-for-spiders",children:"#"})]}),"\n",(0,t.jsx)(n.p,{children:"Streaming offers a better user experience because the user can see the content as it becomes available."}),"\n",(0,t.jsx)(n.p,{children:"However, when a spider visits your page, you might want to let all of the content load first and then produce the final HTML output instead of revealing it progressively."}),"\n",(0,t.jsxs)(n.p,{children:["Modern.js uses ",(0,t.jsx)(n.a,{href:"https://www.npmjs.com/package/isbot",target:"_blank",rel:"noopener noreferrer",children:"isbot"})," to examine the user-agent of requests, determining whether they come from a crawler."]}),"\n",(0,t.jsxs)(n.div,{className:"rspress-directive info",children:[(0,t.jsx)(n.div,{className:"rspress-directive-title",children:"More"}),(0,t.jsxs)(n.div,{className:"rspress-directive-content",children:["\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://reactrouter.com/en/main/guides/deferred",target:"_blank",rel:"noopener noreferrer",children:"Deferred Data"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/reactwg/react-18/discussions/37",target:"_blank",rel:"noopener noreferrer",children:"New Suspense SSR Architecture in React 18"})}),"\n"]}),"\n"]})]}),"\n",(0,t.jsx)(n.p,{children:";"})]})}function o(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,a.useMDXComponents)(),e.components);return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(s,{...e})}):s(e)}n.default=o,o.__RSPRESS_PAGE_META={},o.__RSPRESS_PAGE_META["en%2Fguides%2Fadvanced-features%2Fssr%2Fstream.mdx"]={toc:[{text:"Overview",id:"overview",depth:2},{text:"Usage",id:"usage",depth:2},{text:"Return async data",id:"return-async-data",depth:3},{text:"Render asynchronous data.",id:"render-asynchronous-data",depth:3},{text:"Error handling",id:"error-handling",depth:3},{text:"Waiting for all content to load for spiders",id:"waiting-for-all-content-to-load-for-spiders",depth:2}],title:"Streaming SSR",frontmatter:{sidebar_position:2,title:"Streaming SSR"}}}}]);