/*! For license information please see 92259.1943604c.js.LICENSE.txt */
(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["92259"],{53583:function(e,n,t){"use strict";t.r(n);var s=t("39980"),a=t("96954");function r(e){let n=Object.assign({h1:"h1",a:"a",p:"p",ol:"ol",li:"li",h2:"h2",code:"code",pre:"pre",img:"img",h3:"h3",div:"div",ul:"ul"},(0,a.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h1,{id:"data-writing",children:["Data writing",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#data-writing",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"In the Data Loader chapter, the way Modern.js fetch data is introduced. You may encounter two problems.\uFF1A"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"How to update the data in Data Loader\uFF1F"}),"\n",(0,s.jsx)(n.li,{children:"How to write new data to the server?"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"EdenX's solution for this is DataAction."}),"\n",(0,s.jsxs)(n.h2,{id:"basic-example",children:["Basic Example",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#basic-example",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["Data Action, like Data Loader, is also based on convention routing. Through Modern.js's ",(0,s.jsx)(n.a,{href:"/guides/basic-features/routes#routing-file-convention",children:"nested routing"}),", each routing component (",(0,s.jsx)(n.code,{children:"layout.ts"}),", ",(0,s.jsx)(n.code,{children:"page.ts"})," or ",(0,s.jsx)(n.code,{children:"$.tsx"}),") can have a ",(0,s.jsx)(n.code,{children:"data"})," file with the same name, and a function named ",(0,s.jsx)(n.code,{children:"action"})," can be exported in the ",(0,s.jsx)(n.code,{children:"data"})," file."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:".\n\u2514\u2500\u2500 routes\n    \u2514\u2500\u2500 user\n        \u251C\u2500\u2500 layout.tsx\n        \u2514\u2500\u2500 layout.data.ts\n"})}),"\n",(0,s.jsx)(n.p,{children:"Define the following code in the file:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",meta:'title="routes/user/layout.data.ts"',children:"import type { ActionFunction } from '@modern-js/runtime/router';\n\nexport const action: ActionFunction = ({ request }) => {\n    const newUser = await request.json();\n    const name = newUser.name;\n    return updateUserProfile(name);\n}\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",meta:'title="routes/user/layout.tsx"',children:"import {\n  useFetcher,\n  useLoaderData,\n  useParams,\n  Outlet\n} from '@modern-js/runtime/router';\n\nexport default () => {\n  const userInfo = useLoaderData();\n  const { submit } = useFetcher();\n  const editUser = () => {\n    const newUser = {\n      name: 'Modern.js'\n    }\n    return submit(newUser, {\n      method: 'post',\n      encType: 'application/json',\n    })\n  }\n  return (\n    <div>\n      <button onClick={editUser}>edit user</button>\n      <div className=\"user-profile\">\n        {userInfo}\n      </div>\n      <Outlet context={userInfo}></Outlet>\n    </div>\n  )\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:"Here, when the submit is executed, the defined action function will be triggered; in the action function, the submitted data can be obtained through request (request.json, request.formData, etc.), and the data can be obtained, and then the data can be sent to the server."}),"\n",(0,s.jsx)(n.p,{children:"After the action function is executed, the loader function code will be executed and the corresponding data and views will be updated."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/ulkl/ljhwZthlaukjlkulzlp/action-flow.png",alt:"action flow"})}),"\n",(0,s.jsxs)(n.h2,{id:"why-provide-data-action",children:["Why provide Data Action?",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#why-provide-data-action",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"Data Action is mainly provided in Modern.js to keep the state of the UI and the server in sync, which can reduce the burden of state management."}),"\n",(0,s.jsx)(n.p,{children:"The traditional state management method will hold the state on the client side and remotely respectively:\uFF1A"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/ulkl/ljhwZthlaukjlkulzlp/action-state-manage.png",alt:"traditional state manage"})}),"\n",(0,s.jsx)(n.p,{children:"In Modern.js, we hope to help developers automatically synchronize the state of the client and server through Loader and Action:\uFF1A"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/ulkl/ljhwZthlaukjlkulzlp/action-state-manage1.png",alt:"state manage"})}),"\n",(0,s.jsxs)(n.p,{children:["If the data shared by the components in the project are the state of the main server, there is no need to introduce a client state management library in the project, request data through Data Loader, through [",(0,s.jsx)(n.code,{children:"useRouteLoaderData"}),"](/guides/basic-fe Atures/data/data-fetch.md) shares data in subcomponents,"]}),"\n",(0,s.jsx)(n.p,{children:"Modify and synchronize the state of the server through Data Action."}),"\n",(0,s.jsxs)(n.h2,{id:"action-function",children:[(0,s.jsx)(n.code,{children:"action"})," function",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#action-function",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["Like the ",(0,s.jsx)(n.code,{children:"loader"})," function, the ",(0,s.jsx)(n.code,{children:"action"})," function has two parameters, ",(0,s.jsx)(n.code,{children:"params"})," and ",(0,s.jsx)(n.code,{children:"request"}),":"]}),"\n",(0,s.jsxs)(n.h3,{id:"params",children:[(0,s.jsx)(n.code,{children:"params"}),(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#params",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["When the routing file passes through ",(0,s.jsx)(n.code,{children:"[]"}),", it will be used as [dynamic routing](/guides/basic-features/routes#dynamic routing), and the dynamic routing fragment will be passed into the ",(0,s.jsx)(n.code,{children:"action"})," function as a parameter:\uFF1A"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:"// routes/user/[id]/page.data.ts\nimport { ActionFunctionArgs } from '@modern-js/runtime/router';\n\nexport const action = async ({ params }: ActionFunctionArgs) => {\n  const { id } = params;\n  const res = await fetch(`https://api/user/${id}`);\n  return res.json();\n};\n"})}),"\n",(0,s.jsxs)(n.p,{children:["When accessing ",(0,s.jsx)(n.code,{children:"/user/123"}),", the parameter of the ",(0,s.jsx)(n.code,{children:"action"})," function is ",(0,s.jsx)(n.code,{children:"{ params: { id: '123' } }"}),"."]}),"\n",(0,s.jsxs)(n.h3,{id:"request",children:[(0,s.jsx)(n.code,{children:"request"}),(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#request",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["Through ",(0,s.jsx)(n.code,{children:"request"}),", you can fetch data submitted by the client in the action function, such as ",(0,s.jsx)(n.code,{children:"request.json()"}),", ",(0,s.jsx)(n.code,{children:"request.formData()"}),", ",(0,s.jsx)(n.code,{children:"request.json()"}),", etc."]}),"\n",(0,s.jsx)(n.p,{children:"For the specific API, please refer to [data type] (#data-type)."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:"// routes/user/[id]/page.data.ts\nimport { ActionFunctionArgs } from '@modern-js/runtime/router';\n\nexport const action = async ({ request }: ActionFunctionArgs) => {\n  const newUser = await request.json();\n  return updateUser(newUser);\n};\n"})}),"\n",(0,s.jsxs)(n.h3,{id:"return-value",children:["Return Value",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#return-value",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["The return value of the ",(0,s.jsx)(n.code,{children:"action"})," function can be any serializable value or a ",(0,s.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Response",target:"_blank",rel:"noopener noreferrer",children:"Fetch Response"})," instance,"]}),"\n",(0,s.jsxs)(n.p,{children:["The data in the response can be accessed through ",(0,s.jsx)(n.a,{href:"https://reactrouter.com/en/main/hooks/use-action-data",target:"_blank",rel:"noopener noreferrer",children:(0,s.jsx)(n.code,{children:"useActionData"})}),"."]}),"\n",(0,s.jsxs)(n.h2,{id:"usesubmit-\u548C-usefetcher",children:["useSubmit \u548C useFetcher",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#usesubmit-\u548C-usefetcher",children:"#"})]}),"\n",(0,s.jsxs)(n.h3,{id:"differences",children:["Differences",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#differences",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["You can use ",(0,s.jsx)(n.a,{href:"https://reactrouter.com/en/main/hooks/use-submit",target:"_blank",rel:"noopener noreferrer",children:(0,s.jsx)(n.code,{children:"useSubmit"})})," or ",(0,s.jsx)(n.a,{href:"https://reactrouter.com/en/main/hooks/use-fetcher",target:"_blank",rel:"noopener noreferrer",children:(0,s.jsx)(n.code,{children:"useFetcher"})})," calls action, and the difference between them is through"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"useSubmit"})," calls action, which will trigger the browser's navigation, and ",(0,s.jsx)(n.code,{children:"useFetcher"})," will not trigger the browser's navigation."]}),"\n",(0,s.jsx)(n.p,{children:"useSubmit:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:'const submit = useSubmit();\nsubmit(null, { method: "post", action: "/logout" });\n'})}),"\n",(0,s.jsx)(n.p,{children:"useFetcher:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:'const { submit } = useFetcher();\nsubmit(null, { method: "post", action: "/logout" });\n'})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"submit"})," function has two input parameters, ",(0,s.jsx)(n.code,{children:"method"})," and ",(0,s.jsx)(n.code,{children:"action"}),". ",(0,s.jsx)(n.code,{children:"method"})," is equivalent to ",(0,s.jsx)(n.code,{children:"method"})," at the time of form submission. In most scenarios where data is written,the ",(0,s.jsx)(n.code,{children:"method"})," can be passed into ",(0,s.jsx)(n.code,{children:"post"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"action"})," is used to specify which routing component ",(0,s.jsx)(n.code,{children:"action"})," is triggered. If the ",(0,s.jsx)(n.code,{children:"action"})," parameter is not passed in, the action of the current routing component will be triggered by default, that is,\nthe execution of submit in the ",(0,s.jsx)(n.code,{children:"user/page.tsx"})," component or subcomponent will trigger the action defined in ",(0,s.jsx)(n.code,{children:"user/page.data.ts"}),"."]}),"\n",(0,s.jsxs)(n.div,{className:"rspress-directive info",children:[(0,s.jsx)(n.div,{className:"rspress-directive-title",children:"INFO"}),(0,s.jsxs)(n.div,{className:"rspress-directive-content",children:[(0,s.jsx)(n.p,{children:"For more information about these two APIs, please refer to the relevant documents\uFF1A"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://reactrouter.com/en/main/hooks/use-submit",target:"_blank",rel:"noopener noreferrer",children:(0,s.jsx)(n.code,{children:"useSubmit"})})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://reactrouter.com/en/main/hooks/use-fetcher",target:"_blank",rel:"noopener noreferrer",children:(0,s.jsx)(n.code,{children:"useFetcher"})})}),"\n"]}),"\n"]})]}),"\n",(0,s.jsxs)(n.h3,{id:"type-of-data",children:["Type of data",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#type-of-data",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["The first parameter of the ",(0,s.jsx)(n.code,{children:"submit"})," function can accept different types of values.\nSuch as ",(0,s.jsx)(n.code,{children:"FormData"}),"\uFF1A"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:'let formData = new FormData();\nformData.append("cheese", "gouda");\nsubmit(formData);\n// In the action, you can get the data by request.json\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Or the value of type ",(0,s.jsx)(n.code,{children:"URLSearchParams"}),"\uFF1A"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:'let searchParams = new URLSearchParams();\nsearchParams.append("cheese", "gouda");\nsubmit(searchParams);\n// In the action, you can get the data by request.json\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Or any acceptable value of the ",(0,s.jsx)(n.code,{children:"URLSearchParams"})," constructor\uFF1A"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:'submit("cheese=gouda&toasted=yes");\nsubmit([\n  ["cheese", "gouda"],\n  ["toasted", "yes"],\n]);\n// In the action, you can get the data by request.json\n'})}),"\n",(0,s.jsxs)(n.p,{children:["By default, if the first parameter in the ",(0,s.jsx)(n.code,{children:"submit"})," function is an object, the corresponding data will be encoded as ",(0,s.jsx)(n.code,{children:"formData"}),"\uFF1A"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:'submit(\n  { key: "value" },\n  {\n    method: "post",\n    encType: "application/x-www-form-urlencoded",\n  }\n);\n\n// In the action, you can get the data by request.formData\n'})}),"\n",(0,s.jsx)(n.p,{children:"it can also be specified as json encoding\uFF1A"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:'submit(\n  { key: "value" },\n  { method: "post", encType: "application/json" }\n);\n\nsubmit(\'{"key":"value"}\', {\n  method: "post",\n  encType: "application/json",\n});\n\n// In the action, you can get the data by request.json\n'})}),"\n",(0,s.jsx)(n.p,{children:"or submit plain text\uFF1A"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:'submit("value", { method: "post", encType: "text/plain" });\n// In the action, you can get the data by request.text\n'})}),"\n",(0,s.jsxs)(n.h2,{id:"csr-\u548C-ssr",children:["CSR \u548C SSR",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#csr-\u548C-ssr",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"Like Data Loader, in the SSR project, Data Action is executed on the server (the framework will automatically send a request to trigger Data Action), while in the CSR project, Data Action is executed on the client."})]})}function i(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,a.useMDXComponents)(),e.components);return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(r,{...e})}):r(e)}n.default=i,i.__RSPRESS_PAGE_META={},i.__RSPRESS_PAGE_META["en%2Fguides%2Fbasic-features%2Fdata%2Fdata-write.mdx"]={toc:[{text:"Basic Example",id:"basic-example",depth:2},{text:"Why provide Data Action?",id:"why-provide-data-action",depth:2},{text:"action function",id:"action-function",depth:2},{text:"params",id:"params",depth:3},{text:"request",id:"request",depth:3},{text:"Return Value",id:"return-value",depth:3},{text:"useSubmit \u548C useFetcher",id:"usesubmit-\u548C-usefetcher",depth:2},{text:"Differences",id:"differences",depth:3},{text:"Type of data",id:"type-of-data",depth:3},{text:"CSR \u548C SSR",id:"csr-\u548C-ssr",depth:2}],title:"Data writing",frontmatter:{title:"Data writing",sidebar_position:4}}}}]);