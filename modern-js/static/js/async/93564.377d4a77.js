/*! For license information please see 93564.377d4a77.js.LICENSE.txt */
(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["93564"],{19268:function(e,n,r){"use strict";r.r(n);var s=r("39980"),t=r("96954");function a(e){let n=Object.assign({h1:"h1",a:"a",p:"p",code:"code",pre:"pre",h2:"h2",div:"div",ol:"ol",li:"li",strong:"strong",h3:"h3",ul:"ul"},(0,t.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h1,{id:"server-side-rendering",children:["Server-Side Rendering",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#server-side-rendering",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"In Modern.js, SSR is readily available without the need for developers to write intricate server-level logic or worry about the operation and maintenance of SSR services. Additionally, Modern.js includes a comprehensive degradation strategy for SSR to ensure safe page execution."}),"\n",(0,s.jsxs)(n.p,{children:["Enabling SSR is simple. Just set the value of ",(0,s.jsx)(n.a,{href:"/configure/app/server/ssr",children:(0,s.jsx)(n.code,{children:"server.ssr"})})," to ",(0,s.jsx)(n.code,{children:"true"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import { defineConfig } from '@modern-js/app-tools';\n\nexport default defineConfig({\n  server: {\n    ssr: true,\n  },\n});\n"})}),"\n",(0,s.jsxs)(n.h2,{id:"ssr-data-fetch",children:["SSR Data Fetch",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#ssr-data-fetch",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["Modern.js provides a Data Loader that simplifies data fetching for developers working with SSR and CSR. Each routing module, such as ",(0,s.jsx)(n.code,{children:"layout.tsx"})," and ",(0,s.jsx)(n.code,{children:"page.tsx"}),", can define its own Data Loader:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",meta:'title="src/routes/page.data.ts"',children:"export const loader = () => {\n  return {\n    message: 'Hello World',\n  };\n};\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Within the component, data returned by the ",(0,s.jsx)(n.code,{children:"loader"})," function can be accessed through the Hooks API:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:"export default () => {\n  const data = useLoaderData();\n  return <div>{data.message}</div>;\n};\n"})}),"\n",(0,s.jsx)(n.p,{children:"Modern.js breaks the traditional model of server-side rendering (SSR) development and offers users a more user-friendly SSR development experience."}),"\n",(0,s.jsx)(n.p,{children:"This feature offers elegant degradation processing. If the SSR request fails, it will automatically downgrade and restart the request on the browser side."}),"\n",(0,s.jsxs)(n.p,{children:["Developers should still be mindful of data fallback, including ",(0,s.jsx)(n.code,{children:"null"})," values or unexpected data returns. This will help prevent React rendering errors and messy results during SSR."]}),"\n",(0,s.jsxs)(n.div,{className:"rspress-directive info",children:[(0,s.jsx)(n.div,{className:"rspress-directive-title",children:"INFO"}),(0,s.jsxs)(n.div,{className:"rspress-directive-content",children:["\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"When requesting a page through client-side routing, Modern.js sends an HTTP request. The server receives the request and executes the corresponding Data Loader function for the page, then returns the execution result as a response to the browser."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["When using Data Loader, data is fetched before rendering. Modern.js also supports obtaining data during component rendering. For more related content, please refer to ",(0,s.jsx)(n.a,{href:"/guides/basic-features/data/data-fetch",children:"Data Fetch"}),"."]}),"\n"]}),"\n"]}),"\n"]})]}),"\n",(0,s.jsxs)(n.h2,{id:"keep-rendering-consistent",children:["Keep Rendering Consistent",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#keep-rendering-consistent",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["In some businesses, it is usually necessary to make different UI displays based on the current operating container environment characteristics, such as ",(0,s.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/User-Agent",target:"_blank",rel:"noopener noreferrer",children:"UA"})," information."]}),"\n",(0,s.jsx)(n.p,{children:"If not handled carefully, unexpected rendering results are likely to occur."}),"\n",(0,s.jsx)(n.p,{children:"Here is an example to show the problem when SSR and CSR rendering are inconsistent, add the following code to the component:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:"{\n  typeof window !== 'undefined' ? <div>browser content</div> : null;\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:"After launching the application and accessing the page, you will find that the browser console throws a warning message."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"Warning: Expected server HTML to contain a matching <div> in <div>.\n"})}),"\n",(0,s.jsx)(n.p,{children:"This is caused by React's hydration logic on the client side detecting inconsistencies between the rendered result and the SSR rendering result. Although the page appears normal, in complex applications, it is likely to cause problems such as DOM hierarchy confusion and style disorder."}),"\n",(0,s.jsxs)(n.div,{className:"rspress-directive info",children:[(0,s.jsx)(n.div,{className:"rspress-directive-title",children:"INFO"}),(0,s.jsxs)(n.div,{className:"rspress-directive-content",children:[(0,s.jsxs)(n.p,{children:["More information about ",(0,s.jsx)(n.a,{href:"https://reactjs.org/docs/react-dom.html#hydrate",target:"_blank",rel:"noopener noreferrer",children:(0,s.jsx)(n.code,{children:"React hydrate"})}),"."]}),"\n"]})]}),"\n",(0,s.jsx)(n.p,{children:"The application needs to maintain consistency between SSR and CSR rendering results. If there is inconsistency, it means that this part of the content does not need to be rendered in SSR."}),"\n",(0,s.jsxs)(n.p,{children:["Modern.js provides a ",(0,s.jsx)(n.a,{href:"/apis/app/runtime/core/use-runtime-context",children:(0,s.jsx)(n.code,{children:"<NoSSR>"})})," component for such content that does not need to be rendered in SSR."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"import { NoSSR } from '@modern-js/runtime/ssr';\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Wrap the element that does not require SSR with the ",(0,s.jsx)(n.code,{children:"NoSSR"})," component:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:"<NoSSR>\n  <div>client content</div>\n</NoSSR>\n"})}),"\n",(0,s.jsxs)(n.p,{children:["After modifying the code, refreshing the page shows that the previous warning has disappeared. Opening the Network tab of the browser devtools and checking the returned HTML document does not contain content wrapped by ",(0,s.jsx)(n.code,{children:"NoSSR"})," components."]}),"\n",(0,s.jsxs)(n.div,{className:"rspress-directive info",children:[(0,s.jsx)(n.div,{className:"rspress-directive-title",children:"INFO"}),(0,s.jsxs)(n.div,{className:"rspress-directive-content",children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/apis/app/runtime/core/use-runtime-context",children:"'useRuntimeContext'"})," can get complete request information, which can be used to ensure consistent rendering results between SSR and CSR."]}),"\n"]})]}),"\n",(0,s.jsxs)(n.h2,{id:"pay-attention-to-memory-leaks",children:["Pay Attention to Memory Leaks",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#pay-attention-to-memory-leaks",children:"#"})]}),"\n",(0,s.jsxs)(n.div,{className:"rspress-directive warning",children:[(0,s.jsx)(n.div,{className:"rspress-directive-title",children:"WARNING"}),(0,s.jsxs)(n.div,{className:"rspress-directive-content",children:[(0,s.jsx)(n.p,{children:"Developers need to pay special attention to memory leaks in the SSR mode. Even tiny memory leaks can have an impact on the service after a large number of accesses."}),"\n"]})]}),"\n",(0,s.jsx)(n.p,{children:"When using SSR, each request from the browser will trigger the server to re-execute the component rendering logic. Therefore, it is necessary to avoid defining any data structures that may continue to grow globally, subscribing to events globally, or creating streams that will not be destroyed globally."}),"\n",(0,s.jsxs)(n.p,{children:["For example, when using ",(0,s.jsx)(n.a,{href:"https://redux-observable.js.org/",target:"_blank",rel:"noopener noreferrer",children:"redux-observable"}),", developers who are used to CSR development usually code in the component like this:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:"/* This code is for demonstration purposes only */\nimport { createEpicMiddleware, combineEpics } from 'redux-observable';\n\nconst epicMiddleware = createEpicMiddleware();\nconst rootEpic = combineEpics();\n\nexport default function Test() {\n  epicMiddleware.run(rootEpic);\n  return <div>Hello Modern.js</div>;\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Create a Middleware instance ",(0,s.jsx)(n.code,{children:"epicMiddleware"})," outside the component and call epicMiddleware.run inside the component."]}),"\n",(0,s.jsx)(n.p,{children:"When running on the client-side, this code will not cause any issues. However, during SSR, the Middleware instance cannot be destroyed."}),"\n",(0,s.jsxs)(n.p,{children:["Every time a component is rendered and ",(0,s.jsx)(n.code,{children:"epicMiddleware.run(rootEpic)"})," is called, new event bindings are added internally which causes the entire object to grow continuously and ultimately affects application performance."]}),"\n",(0,s.jsx)(n.p,{children:"CSR issues are not easy to detect, so when switching from CSR to SSR, if you are unsure whether the application has such problems, you can perform stress testing on applications."}),"\n",(0,s.jsxs)(n.h2,{id:"converging-server-data",children:["Converging Server Data.",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#converging-server-data",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"In order to maintain the data requested during the SSR phase, it can be directly used on the browser side. Modern.js will inject the data and state collected during rendering into HTML."}),"\n",(0,s.jsx)(n.p,{children:"However, in CSR applications, there are often situations where interface data is large and component states are not converged. If SSR is used directly in this case, the rendered HTML may have a problem of being too large."}),"\n",(0,s.jsx)(n.p,{children:"At this time, SSR may not only fail to improve user experience for applications but may also have an opposite effect."}),"\n",(0,s.jsxs)(n.p,{children:["Therefore, when using SSR, ",(0,s.jsx)(n.strong,{children:"developers need to properly slim down the application"}),"."]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Focus on the first screen, SSR can request only the data needed for the first screen and render the remaining parts on the browser side."}),"\n",(0,s.jsx)(n.li,{children:"Remove data unrelated to rendering from the returned data of the interface."}),"\n"]}),"\n",(0,s.jsxs)(n.h2,{id:"serverless-pre-render",children:["Serverless Pre-render",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#serverless-pre-render",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"Modern.js provides the Serverless Pre-rendering (SPR) feature to improve SSR performance."}),"\n",(0,s.jsx)(n.p,{children:"SPR uses pre-rendering and caching technology to provide responsive performance for SSR pages. It enables SSR applications to have the response speed and stability of static web pages while also maintaining dynamic data updates."}),"\n",(0,s.jsx)(n.p,{children:"Using SPR in Modern.js is very simple. Just add the PreRender component to your component, and the page where it is located will automatically enable SPR."}),"\n",(0,s.jsx)(n.p,{children:"Here is a simulated component that uses the useLoaderData API. The request in the Data Loader takes 2 seconds to consume."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",meta:'title="page.data.ts"',children:"import { useLoaderData } from '@modern-js/runtime/router';\n\nexport const loader = async () => {\n  await new Promise((resolve, reject) => {\n    setTimeout(() => {\n      resolve(null);\n    }, 2000);\n  });\n\n  return {\n    message: 'Hello Modern.js',\n  };\n};\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",meta:'title="page.tsx"',children:"import { useLoaderData } from '@modern-js/runtime/router';\n\nexport default () => {\n  const data = useLoaderData();\n  return <div>{data?.message}</div>;\n};\n"})}),"\n",(0,s.jsxs)(n.p,{children:["After executing the ",(0,s.jsx)(n.code,{children:"dev"})," command and opening the page, it is obvious that the page needs to wait 2s before returning."]}),"\n",(0,s.jsxs)(n.p,{children:["Use the ",(0,s.jsx)(n.code,{children:"<PreRender>"})," component for optimization next, which can be directly exported from ",(0,s.jsx)(n.code,{children:"@modern-js/runtime/ssr"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"import { PreRender } from '@modern-js/runtime/ssr';\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Use the ",(0,s.jsx)(n.code,{children:"<PreRender>"})," component within the routing component and set the parameter ",(0,s.jsx)(n.code,{children:"interval"})," to indicate that the expiration time of this rendering result is 5 seconds:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:"<PreRender interval={5} />\n"})}),"\n",(0,s.jsxs)(n.p,{children:["After modification, execute ",(0,s.jsx)(n.code,{children:"pnpm run build && pnpm run serve"})," to start the application and open the page."]}),"\n",(0,s.jsx)(n.p,{children:"The first time it is opened, there is no difference in rendering compared to before, and there is still a 2-second delay."}),"\n",(0,s.jsx)(n.p,{children:"Clicking refresh opens the page instantly, but at this point, the page data has not changed due to the refresh because the cache has not yet expired."}),"\n",(0,s.jsx)(n.p,{children:"After waiting for 5 seconds and refreshing the page, the data on the page remained unchanged. After refreshing again, the data changed, but the response was nearly immediate."}),"\n",(0,s.jsx)(n.p,{children:"This is because during the previous request, SPR had already asynchronously obtained a new rendering result in the background, and this time's requested page is a version that has been cached on the server."}),"\n",(0,s.jsxs)(n.p,{children:["One can imagine that when the ",(0,s.jsx)(n.code,{children:"interval"})," is set to 1, users can have a responsive experience of static pages while perceiving real-time data."]}),"\n",(0,s.jsxs)(n.div,{className:"rspress-directive info",children:[(0,s.jsx)(n.div,{className:"rspress-directive-title",children:"INFO"}),(0,s.jsxs)(n.div,{className:"rspress-directive-content",children:[(0,s.jsxs)(n.p,{children:["For more detail, see ",(0,s.jsx)(n.a,{href:"/apis/app/runtime/ssr/pre-render",children:(0,s.jsx)(n.code,{children:"<PreRender>"})}),"."]}),"\n"]})]}),"\n",(0,s.jsxs)(n.h2,{id:"treeshaking",children:["Treeshaking",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#treeshaking",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"When SSR is enabled, Modern.js uses the same entry point to build both SSR Bundle and CSR Bundle. Therefore, errors may occur if there are Web APIs in the SSR Bundle or Node APIs in the CSR Bundle."}),"\n",(0,s.jsx)(n.p,{children:"Introducing Web APIs in components usually do some global listening or obtaining browser-related data, such as:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:"document.addEventListener('load', () => {\n  console.log('document load');\n});\nconst App = () => {\n  return <div>Hello World</div>;\n};\nexport default App;\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Importing Node API in component files is usually done when using ",(0,s.jsx)(n.code,{children:"useLoader"}),", for example:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"import fse from 'fs-extra';\nexport default () => {\n  const file = fse.readFileSync('./myfile');\n  return {\n    ...\n  };\n};\n"})}),"\n",(0,s.jsxs)(n.h3,{id:"use-environment-variables",children:["Use Environment Variables",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#use-environment-variables",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["For the first case, we can directly use the built-in environment variable ",(0,s.jsx)(n.code,{children:"MODERN_TARGET"})," in Modern.js to determine and remove unused code during build time:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"if (process.env.MODERN_TARGET === 'browser') {\n  document.addEventListener('load', () => {\n    console.log('document load');\n  });\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:"After the development environment is bundled, the SSR and CSR artifacts will be compiled into the following content. Therefore, there will be no more Web API errors in the SSR environment."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"// SSR production\nif (false) {\n}\n\n// CSR production\nif (true) {\n  document.addEventListener('load', () => {\n    console.log('document load');\n  });\n}\n"})}),"\n",(0,s.jsxs)(n.div,{className:"rspress-directive note",children:[(0,s.jsx)(n.div,{className:"rspress-directive-title",children:"NOTE"}),(0,s.jsxs)(n.div,{className:"rspress-directive-content",children:[(0,s.jsxs)(n.p,{children:["For more information, see ",(0,s.jsx)(n.a,{href:"/guides/basic-features/env-vars",children:"environment variables"}),"."]}),"\n"]})]}),"\n",(0,s.jsxs)(n.h3,{id:"use-file-suffix",children:["Use File Suffix",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#use-file-suffix",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["But for example, in the second case, ",(0,s.jsx)(n.code,{children:"fs-extra"})," is imported in the code, which has side effects using Node API internally. If it is directly referenced in the component, it will cause an error when CSR loading."]}),"\n",(0,s.jsxs)(n.p,{children:["Environment variables does not work in this case. Modern.js also supports using files with the ",(0,s.jsx)(n.code,{children:".node."})," suffix to distinguish between the packaging files of SSR Bundle and CSR Bundle products."]}),"\n",(0,s.jsxs)(n.p,{children:["You can create a proxy layer by creating files with the same name but different extensions, such as ",(0,s.jsx)(n.code,{children:".ts"})," and ",(0,s.jsx)(n.code,{children:".node.ts"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",meta:'title="compat.ts"',children:"export const readFileSync: any = () => {};\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",meta:'title="compat.node.ts"',children:"export { readFileSync } from 'fs-extra';\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Import ",(0,s.jsx)(n.code,{children:"./compat"})," directly in the file. In SSR environment, files with ",(0,s.jsx)(n.code,{children:".node.ts"})," suffix will be used first, while in CSR environment, files with ",(0,s.jsx)(n.code,{children:".ts"})," suffix will be used."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",meta:'title="App.tsx"',children:"import { readFileSync } from './compat'\n\nexport const loader = () => {\n  const file = readFileSync('./myfile');\n  return {\n    ...\n  };\n};\n"})}),"\n",(0,s.jsxs)(n.h3,{id:"independent-file",children:["Independent File",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#independent-file",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"The two methods mentioned above will both bring some mental burden to developers. In real business scenarios, we found that most of the mixed Node/Web code appears in data requests."}),"\n",(0,s.jsxs)(n.p,{children:["Therefore, Modern.js has designed a ",(0,s.jsx)(n.a,{href:"/guides/basic-features/data/data-fetch",children:"Data Fetch"})," to separate CSR and SSR code based on ",(0,s.jsx)(n.a,{href:"/guides/basic-features/routes",children:"Nested Routing"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["We can separate ",(0,s.jsx)(n.strong,{children:"data requests from component code"})," by using independent files. Write the component logic in ",(0,s.jsx)(n.code,{children:"routes/page.tsx"})," and write the data request logic in ",(0,s.jsx)(n.code,{children:"routes/page.data.ts"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",meta:'title="routes/page.tsx"',children:"export default Page = () => {\n  return <div>Hello World<div>\n}\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",meta:'title="routes/page.data.tsx"',children:"import fse from 'fs-extra';\nexport const loader = () => {\n  const file = fse.readFileSync('./myfile');\n  return {\n    ...\n  };\n}\n"})}),"\n",(0,s.jsxs)(n.h2,{id:"remote-request",children:["Remote Request",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#remote-request",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["When initiating interface requests in SSR, developers sometimes encapsulate isomorphic request tools themselves. For some interfaces that require passing user cookies, developers can use the ",(0,s.jsx)(n.a,{href:"/guides/basic-features/data/data-fetch#route-loader",children:"'useRuntimeContext'"})," API to get the request header for implementation."]}),"\n",(0,s.jsx)(n.p,{children:"It should be noted that the obtained request header is for HTML requests, which may not be suitable for API requests. Therefore, ** don't passed through all request headers **."}),"\n",(0,s.jsxs)(n.p,{children:["In addition, some backend interfaces or common gateways will verify based on the information in the request header. Full pass-through can easily lead to various difficult-to-troubleshoot issues, so it is recommended to ",(0,s.jsx)(n.strong,{children:"pass through as needed"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["If it is really necessary to pass through all request headers, please be sure to filter the ",(0,s.jsx)(n.code,{children:"host"})," field."]}),"\n",(0,s.jsxs)(n.h2,{id:"streaming-ssr",children:["Streaming SSR",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#streaming-ssr",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"Modern.js supports streaming rendering in React 18 which can be enabled through the following configuration:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import { defineConfig } from '@modern-js/app-tools';\n\nexport default defineConfig({\n  server: {\n    ssr: {\n      mode: 'stream',\n    },\n  },\n});\n"})}),"\n",(0,s.jsx)(n.p,{children:"The streaming SSR of Modern.js is implemented based on React Router, and the main APIs involved are:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://reactrouter.com/en/main/utils/defer",target:"_blank",rel:"noopener noreferrer",children:(0,s.jsx)(n.code,{children:"defer"})}),": This utility allows you to defer values returned from loaders by passing promises instead of resolved values."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://reactrouter.com/en/main/components/await",target:"_blank",rel:"noopener noreferrer",children:(0,s.jsx)(n.code,{children:"Await"})}),": Used to render deferred values with automatic error handling."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://reactrouter.com/en/main/hooks/use-async-value",target:"_blank",rel:"noopener noreferrer",children:(0,s.jsx)(n.code,{children:"useAsyncValue"})}),": Returns the resolved data from the nearest ",(0,s.jsx)(n.code,{children:"<Await>"})," ancestor component."]}),"\n"]}),"\n",(0,s.jsxs)(n.h3,{id:"return-async-data",children:["Return async data",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#return-async-data",children:"#"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",meta:'title="page.data.ts"',children:"import { defer, type LoaderFunctionArgs } from '@modern-js/runtime/router';\n\ninterface User {\n  name: string;\n  age: number;\n}\n\nexport interface Data {\n  data: User;\n}\n\nexport const loader = ({ params }: LoaderFunctionArgs) => {\n  const userId = params.id;\n\n  const user = new Promise<User>(resolve => {\n    setTimeout(() => {\n      resolve({\n        name: `user-${userId}`,\n        age: 18,\n      });\n    }, 200);\n  });\n\n  return defer({ data: user });\n};\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"user"})," is a ",(0,s.jsx)(n.code,{children:"Promise"})," object that represents the data that needs to be obtained asynchronously. Use ",(0,s.jsx)(n.code,{children:"defer"})," to handle the asynchronous retrieval of user. Note that ",(0,s.jsx)(n.code,{children:"defer"})," must receive an object type parameter, so the parameter passed to ",(0,s.jsx)(n.code,{children:"defer"})," is: ",(0,s.jsx)(n.code,{children:"{ data: user }"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"defer"})," can receive both asynchronous and synchronous data at the same time. For example:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",meta:'title="page.data.ts"',children:"// skip some codes\n\nexport default ({ params }: LoaderFunctionArgs) => {\n  const userId = params.id;\n\n  const user = new Promise<User>(resolve => {\n    setTimeout(() => {\n      resolve({\n        name: `user-${userId}`,\n        age: 18,\n      });\n    }, 200);\n  });\n\n  const otherData = new Promise<string>(resolve => {\n    setTimeout(() => {\n      resolve('some sync data');\n    }, 200);\n  });\n\n  return defer({\n    data: user,\n    other: await otherData,\n  });\n};\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The data obtained from otherData is synchronous because it has an ",(0,s.jsx)(n.code,{children:"await"})," keyword in front of it. It can be passed into ",(0,s.jsx)(n.code,{children:"defer"})," together with the asynchronous data obtained from ",(0,s.jsx)(n.code,{children:"user"}),"."]}),"\n",(0,s.jsxs)(n.h3,{id:"render-asynchronous-data",children:["Render asynchronous data.",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#render-asynchronous-data",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["With the ",(0,s.jsx)(n.code,{children:"<Await>"})," component, you can retrieve the data asynchronously returned by the Data Loader and then render it. For example:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",meta:'title="page.tsx"',children:"import { Await, useLoaderData } from '@modern-js/runtime/router';\nimport { Suspense } from 'react';\nimport type { Data } from './page.data';\n\nconst Page = () => {\n  const data = useLoaderData() as Data;\n\n  return (\n    <div>\n      User info:\n      <Suspense fallback={<div id=\"loading\">loading user data ...</div>}>\n        <Await resolve={data.data}>\n          {user => {\n            return (\n              <div id=\"data\">\n                name: {user.name}, age: {user.age}\n              </div>\n            );\n          }}\n        </Await>\n      </Suspense>\n    </div>\n  );\n};\n\nexport default Page;\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"<Await>"})," needs to be wrapped inside the ",(0,s.jsx)(n.code,{children:"<Suspense>"})," component. The ",(0,s.jsx)(n.code,{children:"resolve"})," function passed into ",(0,s.jsx)(n.code,{children:"<Await>"})," is used to asynchronously retrieve data from a Data Loader. Once the data has been retrieved, it is rendered using ",(0,s.jsx)(n.a,{href:"https://reactjs.org/docs/render-props.html",target:"_blank",rel:"noopener noreferrer",children:"Render Props"})," mode. During the data retrieval phase, the content specified in the ",(0,s.jsx)(n.code,{children:"fallback"})," property of ",(0,s.jsx)(n.code,{children:"<Suspense>"})," will be displayed."]}),"\n",(0,s.jsxs)(n.div,{className:"rspress-directive warning",children:[(0,s.jsx)(n.div,{className:"rspress-directive-title",children:"Warning"}),(0,s.jsxs)(n.div,{className:"rspress-directive-content",children:[(0,s.jsxs)(n.p,{children:["When importing types from a Data Loader file, it is necessary to use the ",(0,s.jsx)(n.code,{children:"import type"})," syntax to ensure that only type information is imported. This can avoid packaging Data Loader code into the bundle file of the front-end product."]}),"\n",(0,s.jsxs)(n.p,{children:["Therefore, the import method here is: ",(0,s.jsx)(n.code,{children:"import type { Data } from './page.data'"}),";\n"]})]})]}),"\n",(0,s.jsxs)(n.p,{children:["You can also retrieve asynchronous data returned by the Data Loader using ",(0,s.jsx)(n.code,{children:"useAsyncValue"}),". For example:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",meta:'title="page.tsx"',children:"import { useAsyncValue } from '@modern-js/runtime/router';\n\n// skip some codes\n\nconst UserInfo = () => {\n  const user = useAsyncValue();\n\n  return (\n    <div>\n      name: {user.name}, age: {user.age}\n    </div>\n  );\n};\n\nconst Page = () => {\n  const data = useLoaderData() as Data;\n\n  return (\n    <div>\n      User info:\n      <Suspense fallback={<div id=\"loading\">loading user data ...</div>}>\n        <Await resolve={data.data}>\n          <UserInfo />\n        </Await>\n      </Suspense>\n    </div>\n  );\n};\n\nexport default Page;\n"})}),"\n",(0,s.jsxs)(n.h3,{id:"error-handling",children:["Error handling",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#error-handling",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"errorElement"})," property of the ",(0,s.jsx)(n.code,{children:"<Await>"})," component can be used to handle errors thrown when the Data Loader executes or when a child component renders.\nFor example, we intentionally throw an error in the Data Loader function:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",meta:'title="page.data.ts"',children:"import { defer } from '@modern-js/runtime/router';\n\nexport const loader = () => {\n  const data = new Promise((resolve, reject) => {\n    setTimeout(() => {\n      reject(new Error('error occurs'));\n    }, 200);\n  });\n\n  return defer({ data });\n};\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Then use ",(0,s.jsx)(n.code,{children:"useAsyncError"})," to get the error, and assign the component used to render the error to the ",(0,s.jsx)(n.code,{children:"errorElement"})," property of the ",(0,s.jsx)(n.code,{children:"<Await>"})," component:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",meta:'title="page.ts"',children:"import { Await, useAsyncError, useLoaderData } from '@modern-js/runtime/router';\nimport { Suspense } from 'react';\n\nexport default function Page() {\n  const data = useLoaderData();\n\n  return (\n    <div>\n      Error page\n      <Suspense fallback={<div>loading ...</div>}>\n        <Await resolve={data.data} errorElement={<ErrorElement />}>\n          {(data: any) => {\n            return <div>never displayed</div>;\n          }}\n        </Await>\n      </Suspense>\n    </div>\n  );\n}\n\nfunction ErrorElement() {\n  const error = useAsyncError() as Error;\n  return <p>Something went wrong! {error.message}</p>;\n}\n"})}),"\n",(0,s.jsxs)(n.div,{className:"rspress-directive info",children:[(0,s.jsx)(n.div,{className:"rspress-directive-title",children:"More"}),(0,s.jsxs)(n.div,{className:"rspress-directive-content",children:["\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://reactrouter.com/en/main/guides/deferred",target:"_blank",rel:"noopener noreferrer",children:"Deferred Data"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://github.com/reactwg/react-18/discussions/37",target:"_blank",rel:"noopener noreferrer",children:"New Suspense SSR Architecture in React 18"})}),"\n"]}),"\n"]})]})]})}function i(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,t.useMDXComponents)(),e.components);return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}n.default=i,i.__RSPRESS_PAGE_META={},i.__RSPRESS_PAGE_META["en%2Fguides%2Fadvanced-features%2Fssr.mdx"]={toc:[{text:"SSR Data Fetch",id:"ssr-data-fetch",depth:2},{text:"Keep Rendering Consistent",id:"keep-rendering-consistent",depth:2},{text:"Pay Attention to Memory Leaks",id:"pay-attention-to-memory-leaks",depth:2},{text:"Converging Server Data.",id:"converging-server-data",depth:2},{text:"Serverless Pre-render",id:"serverless-pre-render",depth:2},{text:"Treeshaking",id:"treeshaking",depth:2},{text:"Use Environment Variables",id:"use-environment-variables",depth:3},{text:"Use File Suffix",id:"use-file-suffix",depth:3},{text:"Independent File",id:"independent-file",depth:3},{text:"Remote Request",id:"remote-request",depth:2},{text:"Streaming SSR",id:"streaming-ssr",depth:2},{text:"Return async data",id:"return-async-data",depth:3},{text:"Render asynchronous data.",id:"render-asynchronous-data",depth:3},{text:"Error handling",id:"error-handling",depth:3}],title:"Server-Side Rendering",frontmatter:{sidebar_position:4}}}}]);