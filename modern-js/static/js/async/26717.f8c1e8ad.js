"use strict";(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["26717"],{67290:function(e,n,s){s.r(n),s.d(n,{default:function(){return d}});var r=s(38093),t=s(75878);function a(e){let n=Object.assign({h1:"h1",a:"a",p:"p",ol:"ol",li:"li",h2:"h2",code:"code",pre:"pre",img:"img",h3:"h3",div:"div",ul:"ul"},(0,t.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"\u6570\u636E\u5199\u5165",children:["\u6570\u636E\u5199\u5165",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u6570\u636E\u5199\u5165",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"\u5728 Data Loader \u7AE0\u8282\u4E2D\uFF0C\u4ECB\u7ECD\u4E86 Modern.js \u83B7\u53D6\u6570\u636E\u7684\u65B9\u5F0F\uFF0C\u4F60\u53EF\u80FD\u4F1A\u9047\u5230\u4E24\u4E2A\u95EE\u9898\uFF1A"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"\u5982\u4F55\u66F4\u65B0 Data Loader \u4E2D\u7684\u6570\u636E\uFF1F"}),"\n",(0,r.jsx)(n.li,{children:"\u5982\u4F55\u5C06\u65B0\u7684\u6570\u636E\u4F20\u9012\u5230\u670D\u52A1\u5668?"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"EdenX \u5BF9\u6B64\u7684\u89E3\u51B3\u65B9\u6848\u662F DataAction\u3002"}),"\n",(0,r.jsxs)(n.h2,{id:"\u57FA\u672C\u793A\u4F8B",children:["\u57FA\u672C\u793A\u4F8B",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u57FA\u672C\u793A\u4F8B",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["Data Action \u548C Data Loader \u4E00\u6837\uFF0C\u4E5F\u662F\u57FA\u4E8E\u7EA6\u5B9A\u5F0F\u8DEF\u7531\u7684\uFF0C\u901A\u8FC7 Modern.js \u7684",(0,r.jsx)(n.a,{href:"/guides/basic-features/routes#%E7%BA%A6%E5%AE%9A%E5%BC%8F%E8%B7%AF%E7%94%B1",children:"\u7EA6\u5B9A\u5F0F\uFF08\u5D4C\u5957\uFF09\u8DEF\u7531"}),"\uFF0C\u6BCF\u4E2A\u8DEF\u7531\u7EC4\u4EF6(",(0,r.jsx)(n.code,{children:"layout.ts"}),"\uFF0C",(0,r.jsx)(n.code,{children:"page.ts"})," \u6216 ",(0,r.jsx)(n.code,{children:"$.tsx"}),")\u53EF\u4EE5\u6709\u4E00\u4E2A\u540C\u540D\u7684 ",(0,r.jsx)(n.code,{children:"data"})," \u6587\u4EF6\uFF0C",(0,r.jsx)(n.code,{children:"data"})," \u6587\u4EF6\u4E2D\u53EF\u4EE5\u5BFC\u51FA\u4E00\u4E2A\u547D\u540D\u4E3A ",(0,r.jsx)(n.code,{children:"action"})," \u7684\u51FD\u6570\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:".\n\u2514\u2500\u2500 routes\n    \u2514\u2500\u2500 user\n        \u251C\u2500\u2500 layout.tsx\n        \u2514\u2500\u2500 layout.data.ts\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u5728\u6587\u4EF6\u4E2D\u5B9A\u4E49\u4EE5\u4E0B\u4EE3\u7801\uFF1A"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",meta:'title="routes/user/layout.data.ts"',children:"import type { ActionFunction } from '@modern-js/runtime/router';\n\nexport const action: ActionFunction = ({ request }) => {\n    const newUser = await request.json();\n    const name = newUser.name;\n    return updateUserProfile(name);\n}\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",meta:'title="routes/user/layout.tsx"',children:"import {\n  useFetcher,\n  useLoaderData,\n  useParams,\n  Outlet\n} from '@modern-js/runtime/router';\n\nexport default () => {\n  const userInfo = useLoaderData();\n  const { submit } = useFetcher();\n  const editUser = () => {\n    const newUser = {\n      name: 'Modern.js'\n    }\n    return submit(newUser, {\n      method: 'post',\n      encType: 'application/json',\n    })\n  }\n  return (\n    <div>\n      <button onClick={editUser}>edit user</button>\n      <div className=\"user-profile\">\n        {userInfo}\n      </div>\n      <Outlet context={userInfo}></Outlet>\n    </div>\n  )\n}\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u8FD9\u91CC\u5F53\u6267\u884C submit \u540E\uFF0C\u4F1A\u89E6\u53D1\u5B9A\u4E49\u7684 action \u51FD\u6570\uFF1B\u5728 action \u51FD\u6570\u4E2D\uFF0C\u53EF\u4EE5\u901A\u8FC7 request \uFF08request.json\uFF0Crequest.formData\uFF09\u83B7\u53D6\u63D0\u4EA4\u7684\u6570\u636E\uFF0C\u83B7\u53D6\u6570\u636E\u540E\uFF0C\u518D\u53D1\u9001\u6570\u636E\u5230\u670D\u52A1\u7AEF\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u800C action \u51FD\u6570\u6267\u884C\u5B8C\uFF0C\u4F1A\u6267\u884C loader \u51FD\u6570\u4EE3\u7801\uFF0C\u5E76\u66F4\u65B0\u5BF9\u5E94\u7684\u6570\u636E\u548C\u89C6\u56FE\u3002"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/ulkl/ljhwZthlaukjlkulzlp/action-flow.png",alt:"action flow"})}),"\n",(0,r.jsxs)(n.h2,{id:"\u4E3A\u4EC0\u4E48\u8981\u63D0\u4F9B-data-action",children:["\u4E3A\u4EC0\u4E48\u8981\u63D0\u4F9B Data Action",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u4E3A\u4EC0\u4E48\u8981\u63D0\u4F9B-data-action",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"Modern.js \u4E2D\u63D0\u4F9B Data Action \u4E3B\u8981\u662F\u4E3A\u4E86\u4F7F UI \u548C\u670D\u52A1\u5668\u7684\u72B6\u6001\u80FD\u4FDD\u6301\u540C\u6B65\uFF0C\u901A\u8FC7\u8FD9\u79CD\u65B9\u5F0F\u53EF\u4EE5\u51CF\u5C11\u72B6\u6001\u7BA1\u7406\u7684\u8D1F\u62C5\uFF0C\n\u4F20\u7EDF\u7684\u72B6\u6001\u7BA1\u7406\u65B9\u5F0F\uFF0C\u4F1A\u5728\u5BA2\u6237\u7AEF\u548C\u8FDC\u7A0B\u5206\u522B\u6301\u6709\u72B6\u6001\uFF1A"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/ulkl/ljhwZthlaukjlkulzlp/action-state-manage.png",alt:"traditional state manage"})}),"\n",(0,r.jsx)(n.p,{children:"\u800C\u5728 Modern.js \u4E2D\uFF0C\u6211\u4EEC\u5E0C\u671B\u901A\u8FC7 Loader \u548C Action \u5E2E\u52A9\u5F00\u53D1\u8005\u81EA\u52A8\u7684\u540C\u6B65\u5BA2\u6237\u7AEF\u548C\u670D\u52A1\u7AEF\u7684\u72B6\u6001\uFF1A"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/ulkl/ljhwZthlaukjlkulzlp/action-state-manage1.png",alt:"state manage"})}),"\n",(0,r.jsxs)(n.p,{children:["\u5982\u679C\u9879\u76EE\u4E2D\u7EC4\u4EF6\u5171\u4EAB\u7684\u6570\u636E\u4E3B\u8981\u6765\u81EA\u4E8E\u670D\u52A1\u7AEF\u7684\u72B6\u6001\uFF0C\u5219\u65E0\u9700\u5728\u9879\u76EE\u5F15\u5165\u5BA2\u6237\u7AEF\u72B6\u6001\u7BA1\u7406\u5E93\u3002\u53EF\u4EE5\u4F7F\u7528 Data Loader \u8BF7\u6C42\u6570\u636E\uFF0C\u901A\u8FC7 ",(0,r.jsx)(n.a,{href:"/guides/basic-features/data/data-fetch",children:(0,r.jsx)(n.code,{children:"useRouteLoaderData"})})," \u5728\u5B50\u7EC4\u4EF6\u4E2D\u5171\u4EAB\u6570\u636E\uFF0C\u4F7F\u7528 Data Action \u4FEE\u6539\u548C\u540C\u6B65\u670D\u52A1\u7AEF\u7684\u72B6\u6001\u3002"]}),"\n",(0,r.jsxs)(n.h2,{id:"action-\u51FD\u6570",children:[(0,r.jsx)(n.code,{children:"action"})," \u51FD\u6570",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#action-\u51FD\u6570",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["\u4E0E ",(0,r.jsx)(n.code,{children:"loader"})," \u51FD\u6570\u4E00\u6837\uFF0C",(0,r.jsx)(n.code,{children:"action"})," \u51FD\u6570\u6709\u4E24\u4E2A\u5165\u53C2\uFF0C",(0,r.jsx)(n.code,{children:"params"})," \u548C ",(0,r.jsx)(n.code,{children:"request"}),"\uFF1A"]}),"\n",(0,r.jsxs)(n.h3,{id:"params",children:[(0,r.jsx)(n.code,{children:"params"}),(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#params",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["\u5F53\u8DEF\u7531\u6587\u4EF6\u901A\u8FC7 ",(0,r.jsx)(n.code,{children:"[]"})," \u65F6\uFF0C\u4F1A\u4F5C\u4E3A",(0,r.jsx)(n.a,{href:"/guides/basic-features/routes#%E5%8A%A8%E6%80%81%E8%B7%AF%E7%94%B1",children:"\u52A8\u6001\u8DEF\u7531"}),"\uFF0C\u52A8\u6001\u8DEF\u7531\u7247\u6BB5\u4F1A\u4F5C\u4E3A\u53C2\u6570\u4F20\u5165 ",(0,r.jsx)(n.code,{children:"action"})," \u51FD\u6570\uFF1A"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"// routes/user/[id]/page.data.ts\nimport { ActionFunctionArgs } from '@modern-js/runtime/router';\n\nexport const action = async ({ params }: ActionFunctionArgs) => {\n  const { id } = params;\n  const res = await fetch(`https://api/user/${id}`);\n  return res.json();\n};\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u5F53\u8BBF\u95EE ",(0,r.jsx)(n.code,{children:"/user/123"})," \u65F6\uFF0C",(0,r.jsx)(n.code,{children:"action"})," \u51FD\u6570\u7684\u53C2\u6570\u4E3A ",(0,r.jsx)(n.code,{children:"{ params: { id: '123' } }"}),"\u3002"]}),"\n",(0,r.jsxs)(n.h3,{id:"request",children:[(0,r.jsx)(n.code,{children:"request"}),(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#request",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"request"})," \u662F\u4E00\u4E2A ",(0,r.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Request",target:"_blank",rel:"noopener noreferrer",children:"Fetch Request"})," \u5B9E\u4F8B\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u901A\u8FC7 ",(0,r.jsx)(n.code,{children:"request"}),"\uFF0C\u53EF\u4EE5\u5728 action \u51FD\u6570\u4E2D\u83B7\u53D6\u5230\u5BA2\u6237\u7AEF\u63D0\u4EA4\u7684\u6570\u636E\uFF0C\u5982 ",(0,r.jsx)(n.code,{children:"request.json()"}),"\uFF0C",(0,r.jsx)(n.code,{children:"request.formData()"}),"\uFF0C",(0,r.jsx)(n.code,{children:"request.json()"})," \u7B49\uFF0C\n\u5177\u4F53\u5E94\u8BE5\u4F7F\u7528\u54EA\u4E2A API\uFF0C\u8BF7\u53C2\u8003",(0,r.jsx)(n.a,{href:"#%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B",children:"\u6570\u636E\u7C7B\u578B"}),"\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"// routes/user/[id]/page.data.ts\nimport { ActionFunctionArgs } from '@modern-js/runtime/router';\n\nexport const action = async ({ request }: ActionFunctionArgs) => {\n  const newUser = await request.json();\n  return updateUser(newUser);\n};\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"\u8FD4\u56DE\u503C",children:["\u8FD4\u56DE\u503C",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u8FD4\u56DE\u503C",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"action"})," \u51FD\u6570\u7684\u8FD4\u56DE\u503C\u53EF\u4EE5\u662F\u4EFB\u4F55\u53EF\u5E8F\u5217\u5316\u7684\u5185\u5BB9\uFF0C\u4E5F\u53EF\u4EE5\u662F\u4E00\u4E2A ",(0,r.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Response",target:"_blank",rel:"noopener noreferrer",children:"Fetch Response"})," \u5B9E\u4F8B\uFF0C\n\u53EF\u4EE5\u901A\u8FC7 ",(0,r.jsx)(n.a,{href:"https://reactrouter.com/en/main/hooks/use-action-data",target:"_blank",rel:"noopener noreferrer",children:(0,r.jsx)(n.code,{children:"useActionData"})})," \u8BBF\u95EE response \u4E2D\u5185\u5BB9\u3002"]}),"\n",(0,r.jsxs)(n.h2,{id:"usesubmit-\u548C-usefetcher",children:["useSubmit \u548C useFetcher",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#usesubmit-\u548C-usefetcher",children:"#"})]}),"\n",(0,r.jsxs)(n.h3,{id:"\u533A\u522B",children:["\u533A\u522B",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u533A\u522B",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["\u4F60\u53EF\u4EE5\u901A\u8FC7 ",(0,r.jsx)(n.a,{href:"https://reactrouter.com/en/main/hooks/use-submit",target:"_blank",rel:"noopener noreferrer",children:(0,r.jsx)(n.code,{children:"useSubmit"})})," \u6216 ",(0,r.jsx)(n.a,{href:"https://reactrouter.com/en/main/hooks/use-fetcher",target:"_blank",rel:"noopener noreferrer",children:(0,r.jsx)(n.code,{children:"useFetcher"})})," \u8C03\u7528 action\uFF0C\u5B83\u4EEC\u7684\u533A\u522B\u662F\u901A\u8FC7\n",(0,r.jsx)(n.code,{children:"useSubmit"})," \u8C03\u7528 action\uFF0C\u4F1A\u89E6\u53D1\u6D4F\u89C8\u5668\u7684\u5BFC\u822A\uFF0C\u901A\u8FC7 ",(0,r.jsx)(n.code,{children:"useFetcher"})," \u5219\u4E0D\u4F1A\u89E6\u53D1\u6D4F\u89C8\u5668\u7684\u5BFC\u822A\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"useSubmit:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:'const submit = useSubmit();\nsubmit(null, { method: "post", action: "/logout" });\n'})}),"\n",(0,r.jsx)(n.p,{children:"useFetcher:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:'const { submit } = useFetcher();\nsubmit(null, { method: "post", action: "/logout" });\n'})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"submit"})," \u51FD\u6570\u6709\u4E24\u4E2A\u5165\u53C2\uFF0C",(0,r.jsx)(n.code,{children:"method"})," \u548C ",(0,r.jsx)(n.code,{children:"action"}),"\uFF0C",(0,r.jsx)(n.code,{children:"method"})," \u76F8\u5F53\u4E8E\u8868\u5355\u63D0\u4EA4\u65F6\u7684 ",(0,r.jsx)(n.code,{children:"method"}),"\uFF0C\u5927\u90E8\u5206\u5199\u5165\u6570\u636E\u7684\u573A\u666F\u4E0B\uFF0C",(0,r.jsx)(n.code,{children:"method"})," \u53EF\u4EE5\u4F20\u5165 ",(0,r.jsx)(n.code,{children:"post"}),"\uFF0C\n",(0,r.jsx)(n.code,{children:"action"})," \u7528\u6765\u6307\u5B9A\u89E6\u53D1\u54EA\u4E2A\u8DEF\u7531\u7EC4\u4EF6\u7684 ",(0,r.jsx)(n.code,{children:"action"}),"\uFF0C\u5982\u679C\u672A\u4F20\u5165 ",(0,r.jsx)(n.code,{children:"action"})," \u5165\u53C2\uFF0C\u9ED8\u8BA4\u4F1A\u89E6\u53D1\u5F53\u524D\u8DEF\u7531\u7EC4\u4EF6\u7684 action\uFF0C\u5373 ",(0,r.jsx)(n.code,{children:"user/page.tsx"})," \u7EC4\u4EF6\u6216\u5B50\u7EC4\u4EF6\u4E2D\u6267\u884C submit\uFF0C\n\u4F1A\u89E6\u53D1 ",(0,r.jsx)(n.code,{children:"user/page.data.ts"})," \u4E2D\u5B9A\u4E49\u7684 action\u3002"]}),"\n",(0,r.jsxs)(n.div,{className:"rspress-directive info",children:[(0,r.jsx)(n.div,{className:"rspress-directive-title",children:"INFO"}),(0,r.jsxs)(n.div,{className:"rspress-directive-content",children:[(0,r.jsx)(n.p,{children:"\u8FD9\u4E24\u4E2A API \u66F4\u591A\u7684\u4FE1\u606F\u53EF\u53C2\u8003\u76F8\u5173\u6587\u6863\uFF1A"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://reactrouter.com/en/main/hooks/use-submit",target:"_blank",rel:"noopener noreferrer",children:(0,r.jsx)(n.code,{children:"useSubmit"})})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://reactrouter.com/en/main/hooks/use-fetcher",target:"_blank",rel:"noopener noreferrer",children:(0,r.jsx)(n.code,{children:"useFetcher"})})}),"\n"]}),"\n"]})]}),"\n",(0,r.jsxs)(n.h3,{id:"\u6570\u636E\u7C7B\u578B",children:["\u6570\u636E\u7C7B\u578B",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u6570\u636E\u7C7B\u578B",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"submit"})," \u51FD\u6570\u7684\u7B2C\u4E00\u4E2A\u5165\u53C2\uFF0C\u53EF\u4EE5\u63A5\u53D7\u4E0D\u540C\u7C7B\u578B\u7684\u503C\u3002\n\u5982 ",(0,r.jsx)(n.code,{children:"FormData"}),"\uFF1A"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:'let formData = new FormData();\nformData.append("cheese", "gouda");\nsubmit(formData);\n// In the action, you can get the data by request.json\n'})}),"\n",(0,r.jsxs)(n.p,{children:["\u6216 ",(0,r.jsx)(n.code,{children:"URLSearchParams"})," \u7C7B\u578B\u7684\u503C\uFF1A"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:'let searchParams = new URLSearchParams();\nsearchParams.append("cheese", "gouda");\nsubmit(searchParams);\n// In the action, you can get the data by request.json\n'})}),"\n",(0,r.jsxs)(n.p,{children:["\u6216\u4EFB\u610F ",(0,r.jsx)(n.code,{children:"URLSearchParams"})," \u6784\u9020\u51FD\u6570\u53EF\u63A5\u53D7\u7684\u503C"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:'submit("cheese=gouda&toasted=yes");\nsubmit([\n  ["cheese", "gouda"],\n  ["toasted", "yes"],\n]);\n// In the action, you can get the data by request.json\n'})}),"\n",(0,r.jsxs)(n.p,{children:["\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u5982\u679C ",(0,r.jsx)(n.code,{children:"submit"})," \u51FD\u6570\u4E2D\u7684\u7B2C\u4E00\u4E2A\u5165\u53C2\u662F\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u5BF9\u5E94\u7684\u6570\u636E\u4F1A\u88AB encode \u4E3A ",(0,r.jsx)(n.code,{children:"formData"}),"\uFF1A"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:'submit(\n  { key: "value" },\n  {\n    method: "post",\n    encType: "application/x-www-form-urlencoded",\n  }\n);\n\n// In the action, you can get the data by request.formData\n'})}),"\n",(0,r.jsx)(n.p,{children:"\u4E5F\u53EF\u4EE5\u6307\u5B9A\u4E3A json \u7F16\u7801\uFF1A"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:'submit(\n  { key: "value" },\n  { method: "post", encType: "application/json" }\n);\n\nsubmit(\'{"key":"value"}\', {\n  method: "post",\n  encType: "application/json",\n});\n\n// In the action, you can get the data by request.json\n'})}),"\n",(0,r.jsx)(n.p,{children:"\u6216\u63D0\u4EA4\u7EAF\u6587\u672C\uFF1A"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:'submit("value", { method: "post", encType: "text/plain" });\n// In the action, you can get the data by request.text\n'})}),"\n",(0,r.jsxs)(n.h2,{id:"csr-\u548C-ssr",children:["CSR \u548C SSR",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#csr-\u548C-ssr",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"\u4E0E Data Loader \u4E00\u6837\uFF0CSSR \u9879\u76EE\u4E2D\uFF0CData Action \u662F\u5728\u670D\u52A1\u7AEF\u6267\u884C\u7684\uFF08\u6846\u67B6\u4F1A\u81EA\u52A8\u53D1\u8BF7\u6C42\u89E6\u53D1 Data Action\uFF09\uFF0C\u800C\u5728 CSR \u9879\u76EE\u4E2D\uFF0CData Action \u662F\u5728\u5BA2\u6237\u7AEF\u6267\u884C\u7684\u3002"})]})}function c(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,t.ah)(),e.components);return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}let d=c;c.__RSPRESS_PAGE_META={},c.__RSPRESS_PAGE_META["zh%2Fguides%2Fbasic-features%2Fdata%2Fdata-write.mdx"]={toc:[{text:"\u57FA\u672C\u793A\u4F8B",id:"\u57FA\u672C\u793A\u4F8B",depth:2},{text:"\u4E3A\u4EC0\u4E48\u8981\u63D0\u4F9B Data Action",id:"\u4E3A\u4EC0\u4E48\u8981\u63D0\u4F9B-data-action",depth:2},{text:"`action` \u51FD\u6570",id:"action-\u51FD\u6570",depth:2},{text:"`params`",id:"params",depth:3},{text:"`request`",id:"request",depth:3},{text:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",depth:3},{text:"useSubmit \u548C useFetcher",id:"usesubmit-\u548C-usefetcher",depth:2},{text:"\u533A\u522B",id:"\u533A\u522B",depth:3},{text:"\u6570\u636E\u7C7B\u578B",id:"\u6570\u636E\u7C7B\u578B",depth:3},{text:"CSR \u548C SSR",id:"csr-\u548C-ssr",depth:2}],title:"\u6570\u636E\u5199\u5165",frontmatter:{title:"\u6570\u636E\u5199\u5165",sidebar_position:4}}}}]);