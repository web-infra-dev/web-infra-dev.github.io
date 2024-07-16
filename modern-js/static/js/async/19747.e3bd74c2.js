"use strict";(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["19747"],{99420:function(n,e,t){t.r(e),t.d(e,{default:function(){return i}});var s=t(39980),r=t(9580),o=t(93649);function c(n){let e=Object.assign({h1:"h1",a:"a",p:"p",strong:"strong",code:"code",h2:"h2",pre:"pre",img:"img"},(0,r.ah)(),n.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(e.h1,{id:"\u6DFB\u52A0\u5BB9\u5668\u7EC4\u4EF6",children:["\u6DFB\u52A0\u5BB9\u5668\u7EC4\u4EF6",(0,s.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#\u6DFB\u52A0\u5BB9\u5668\u7EC4\u4EF6",children:"#"})]}),"\n","\n",(0,s.jsxs)(e.p,{children:["\u4E0A\u4E00\u7AE0\u8282\u4E2D\uFF0C\u6211\u4EEC\u521D\u6B65\u5F15\u5165",(0,s.jsx)(e.strong,{children:"\u4E1A\u52A1\u6A21\u578B"}),"\uFF0C\u4ECE UI \u7EC4\u4EF6\u4E2D\u62C6\u5206\u51FA\u8FD9\u90E8\u5206\u903B\u8F91\u3002",(0,s.jsx)(e.code,{children:"page.tsx"})," \u4E2D\u4E0D\u518D\u5305\u542B UI \u65E0\u5173\u7684\u4E1A\u52A1\u903B\u8F91\u5B9E\u73B0\u7EC6\u8282\uFF0C\u53EA\u9700\u8981\u4F7F\u7528 Model\uFF0C\u5C31\u80FD\u5B9E\u73B0\u540C\u6837\u7684\u529F\u80FD\u3002"]}),"\n",(0,s.jsxs)(e.p,{children:["\u8FD9\u4E00\u7AE0\u8282\u4E2D\uFF0C\u6211\u4EEC\u8981\u8FDB\u4E00\u6B65\u5229\u7528 Model \u4E2D\u5B9E\u73B0\u7684\u4E1A\u52A1\u903B\u8F91\uFF0C\u8BA9 ",(0,s.jsx)(e.code,{children:"page.tsx"})," \u548C ",(0,s.jsx)(e.code,{children:"archived/page.tsx"})," \u83B7\u53D6\u540C\u4E00\u4EFD\u6570\u636E\u3002\u5E76\u5B9E\u73B0 Archive \u6309\u94AE\uFF0C\u70B9\u51FB\u6309\u94AE\u80FD\u628A\u8054\u7CFB\u4EBA\u5F52\u6863\uFF0C\u53EA\u663E\u793A\u5728 Archives \u5217\u8868\u91CC\uFF0C\u4E0D\u663E\u793A\u5728 All \u5217\u8868\u91CC\u3002"]}),"\n",(0,s.jsxs)(e.h2,{id:"\u4F7F\u7528\u5B8C\u6574-model",children:["\u4F7F\u7528\u5B8C\u6574 Model",(0,s.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#\u4F7F\u7528\u5B8C\u6574-model",children:"#"})]}),"\n",(0,s.jsx)(e.p,{children:"\u56E0\u4E3A\u4E24\u4E2A\u9875\u9762\u9700\u8981\u5171\u7528\u540C\u4E00\u5957\u72B6\u6001\uFF08\u8054\u7CFB\u4EBA\u5217\u8868\u6570\u636E\u3001\u8054\u7CFB\u4EBA\u662F\u5426\u88AB\u5F52\u6863\uFF09\uFF0C\u90FD\u9700\u8981\u5305\u542B\u52A0\u8F7D\u521D\u59CB\u6570\u636E\u7684\u903B\u8F91\uFF0C\u56E0\u6B64\u6211\u4EEC\u9700\u8981\u5728\u66F4\u4E0A\u4E00\u5C42\u5B8C\u6210\u6570\u636E\u83B7\u53D6\u3002"}),"\n",(0,s.jsxs)(e.p,{children:["Modern.js \u652F\u6301\u5728 ",(0,s.jsx)(e.code,{children:"layout.tsx"})," \u901A\u8FC7 Data Loader \u83B7\u53D6\u6570\u636E\uFF0C\u6211\u4EEC\u5148\u6570\u636E\u83B7\u53D6\u8FD9\u90E8\u5206\u4EE3\u7801\u79FB\u52A8\u5230 ",(0,s.jsx)(e.code,{children:"src/routes/layout.tsx"})," \u4E2D\uFF1A"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-ts",meta:'title="src/routes/layout.data.ts"',children:"export type LoaderData = {\n  code: number;\n  data: {\n    name: string;\n    avatar: string;\n    email: string;\n  }[];\n};\n\nexport const loader = async (): Promise<LoaderData> => {\n  const data = new Array(20).fill(0).map(() => {\n    const firstName = name.firstName();\n    return {\n      name: firstName,\n      avatar: `https://api.dicebear.com/7.x/pixel-art/svg?seed=${firstName}`,\n      email: internet.email(),\n    };\n  });\n\n  return {\n    code: 200,\n    data,\n  };\n};\n"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-tsx",meta:'title="src/routes/layout.tsx"',children:"import { name, internet } from 'faker';\nimport {\n  Outlet,\n  useLoaderData,\n  useLocation,\n  useNavigate,\n} from '@modern-js/runtime/router';\nimport { useState } from 'react';\nimport { Radio, RadioChangeEvent } from 'antd';\nimport { useModel } from '@modern-js/runtime/model';\nimport contacts from '../models/contacts';\nimport 'tailwindcss/base.css';\nimport 'tailwindcss/components.css';\nimport 'tailwindcss/utilities.css';\nimport '../styles/utils.css';\nimport type { LoaderData } from './layout.data';\n\nexport default function Layout() {\n  const { data } = useLoaderData() as LoaderData;\n  const [{ items }, { setItems }] = useModel(contacts);\n  if (items.length === 0) {\n    setItems(data);\n  }\n\n  const navigate = useNavigate();\n  ...\n}\n"})}),"\n",(0,s.jsxs)(e.p,{children:["\u5728 ",(0,s.jsx)(e.code,{children:"src/routes/page.tsx"})," \u4E2D\uFF0C\u76F4\u63A5\u4F7F\u7528 Model\uFF0C\u83B7\u53D6\u6570\u636E\uFF1A"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-tsx",children:"import { Helmet } from '@modern-js/runtime/head';\nimport { useModel } from '@modern-js/runtime/model';\nimport { List } from 'antd';\nimport Item from '../components/Item';\nimport contacts from '../models/contacts';\n\nfunction Index() {\n  const [{ items }, { archive }] = useModel(contacts);\n\n  return (\n    <div className=\"container lg mx-auto\">\n      <Helmet>\n        <title>All</title>\n      </Helmet>\n      <List\n        dataSource={items}\n        renderItem={info => (\n          <Item\n            key={info.name}\n            info={info}\n            onArchive={() => {\n              archive(info.email);\n            }}\n          />\n        )}\n      />\n    </div>\n  );\n}\n\nexport default Index;\n"})}),"\n",(0,s.jsxs)(e.p,{children:["\u540C\u6837\u5728 ",(0,s.jsx)(e.code,{children:"archived/page.tsx"})," \u4E2D\uFF0C\u5220\u9664\u539F\u672C\u7684 ",(0,s.jsx)(e.code,{children:"mockData"})," \u903B\u8F91\uFF0C\u4F7F\u7528 Model \u4E2D computed \u7684 ",(0,s.jsx)(e.code,{children:"archived"})," \u503C\u4F5C\u4E3A\u6570\u636E\u6E90\uFF1A"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-tsx",children:"import { Helmet } from '@modern-js/runtime/head';\nimport { useModel } from '@modern-js/runtime/model';\nimport { List } from 'antd';\nimport Item from '../../components/Item';\nimport contacts from '../../models/contacts';\n\nfunction Index() {\n  const [{ archived }, { archive }] = useModel(contacts);\n\n  return (\n    <div className=\"container lg mx-auto\">\n      <Helmet>\n        <title>Archives</title>\n      </Helmet>\n      <List\n        dataSource={archived}\n        renderItem={info => (\n          <Item\n            key={info.name}\n            info={info}\n            onArchive={() => {\n              archive(info.email);\n            }}\n          />\n        )}\n      />\n    </div>\n  );\n}\n\nexport default Index;\n"})}),"\n",(0,s.jsxs)(e.p,{children:["\u6267\u884C ",(0,s.jsx)(e.code,{children:"pnpm run dev"}),"\uFF0C\u8BBF\u95EE ",(0,s.jsx)(e.code,{children:"http://localhost:8080/"}),"\uFF0C\u70B9\u51FB Archive \u6309\u94AE\u540E\uFF0C\u53EF\u4EE5\u770B\u5230\u6309\u94AE\u7F6E\u7070\uFF1A"]}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/nuvjhpqnuvr/modern-website/tutorials/c07-contacts-all.png",alt:"display"})}),"\n",(0,s.jsxs)(e.p,{children:["\u63A5\u4E0B\u6765\u70B9\u51FB\u9876\u90E8\u5BFC\u822A\uFF0C\u5207\u6362\u5230 Archives \u5217\u8868\uFF0C\u53EF\u4EE5\u53D1\u73B0\u521A\u624D ",(0,s.jsx)(e.strong,{children:"Archive"})," \u7684\u8054\u7CFB\u4EBA\u5DF2\u7ECF\u51FA\u73B0\u5728\u5217\u8868\u5F53\u4E2D\uFF1A"]}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/nuvjhpqnuvr/modern-website/tutorials/c07-contacts-archives.png",alt:"display"})}),"\n",(0,s.jsxs)(e.h2,{id:"\u62BD\u79BB\u5BB9\u5668\u7EC4\u4EF6",children:["\u62BD\u79BB\u5BB9\u5668\u7EC4\u4EF6",(0,s.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#\u62BD\u79BB\u5BB9\u5668\u7EC4\u4EF6",children:"#"})]}),"\n",(0,s.jsxs)(e.p,{children:["\u524D\u9762\u7AE0\u8282\u4E2D\uFF0C\u6211\u4EEC\u628A\u9879\u76EE\u4E2D\u7684\u4E1A\u52A1\u903B\u8F91\u62C6\u5206\u6210\u4E86\u4E24\u4E2A layer\uFF0C\u4E00\u4E2A\u662F",(0,s.jsx)(e.strong,{children:"\u89C6\u56FE\u7EC4\u4EF6"}),"\uFF0C\u53E6\u4E00\u4E2A\u662F",(0,s.jsx)(e.strong,{children:"\u4E1A\u52A1\u6A21\u5757"}),"\u3002\u524D\u8005\u8D1F\u8D23 UI \u5C55\u793A\u3001\u4EA4\u4E92\u7B49\uFF0C\u540E\u8005\u8D1F\u8D23\u5B9E\u73B0 UI \u65E0\u5173\u7684\u4E1A\u52A1\u903B\u8F91\uFF0C\u4E13\u95E8\u7BA1\u7406\u72B6\u6001\u3002"]}),"\n",(0,s.jsxs)(e.p,{children:["\u50CF ",(0,s.jsx)(e.code,{children:"src/routes/page.tsx"})," \u548C ",(0,s.jsx)(e.code,{children:"src/routes/archives/page.tsx"})," \u8FD9\u6837\u4F7F\u7528\u4E86 ",(0,s.jsx)(e.code,{children:"useModel"})," API \u7684\u7EC4\u4EF6\uFF0C\u8D1F\u8D23\u628A View \u548C Model \u8FD9\u4E24\u4E2A layer \u8FDE\u63A5\u8D77\u6765\uFF0C\u7C7B\u4F3C\u4F20\u7EDF MVC \u67B6\u6784\u4E2D Controller \u7684\u89D2\u8272\uFF0C\u5728 Modern.js \u91CC\u6211\u4EEC\u6CBF\u7528\u4E60\u60EF\uFF0C\u628A\u5B83\u4EEC\u79F0\u4F5C",(0,s.jsx)(e.strong,{children:"\u5BB9\u5668\u7EC4\u4EF6\uFF08Container\uFF09"}),"\u3002"]}),"\n",(0,s.jsxs)(e.p,{children:["\u5BB9\u5668\u7EC4\u4EF6\u63A8\u8350\u653E\u5728\u4E13\u95E8\u7684 ",(0,s.jsx)(e.code,{children:"containers/"})," \u76EE\u5F55\u91CC\uFF0C\u6211\u4EEC\u6267\u884C\u4EE5\u4E0B\u547D\u4EE4\uFF0C\u521B\u5EFA\u65B0\u7684\u6587\u4EF6\uFF1A"]}),"\n",(0,s.jsxs)(o.Tabs,{children:[(0,s.jsx)(o.Tab,{value:"macOS",label:"macOS",default:!0,children:(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"mkdir -p src/containers\ntouch src/containers/Contacts.tsx\n"})})}),(0,s.jsx)(o.Tab,{value:"Windows",label:"Windows",children:(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-powershell",children:"mkdir -p src/containers\nni src/containers/Contacts.tsx\n"})})})]}),"\n",(0,s.jsxs)(e.p,{children:["\u6211\u4EEC\u5C06\u539F\u672C\u4E24\u4E2A ",(0,s.jsx)(e.code,{children:"page.tsx"})," \u4E2D\u516C\u5171\u7684\u90E8\u5206\u62BD\u79BB\u51FA\u6765\uFF0C",(0,s.jsx)(e.code,{children:"src/containers/Contacts.tsx"})," \u7684\u4EE3\u7801\u5982\u4E0B\uFF1A"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-tsx",children:"import { Helmet } from '@modern-js/runtime/head';\nimport { useModel } from '@modern-js/runtime/model';\nimport { List } from 'antd';\nimport Item from '../components/Item';\nimport contacts from '../models/contacts';\n\nfunction Contacts({\n  title,\n  source,\n}: {\n  title: string;\n  source: 'items' | 'archived';\n}) {\n  const [state, { archive }] = useModel(contacts);\n\n  return (\n    <div className=\"container lg mx-auto\">\n      <Helmet>\n        <title>{title}</title>\n      </Helmet>\n      <List\n        dataSource={state[source]}\n        renderItem={info => (\n          <Item\n            key={info.name}\n            info={info}\n            onArchive={() => {\n              archive(info.email);\n            }}\n          />\n        )}\n      />\n    </div>\n  );\n}\n\nexport default Contacts;\n"})}),"\n",(0,s.jsxs)(e.p,{children:["\u4FEE\u6539 ",(0,s.jsx)(e.code,{children:"src/routes/page.tsx"})," \u548C ",(0,s.jsx)(e.code,{children:"src/routes/archives/page.tsx"})," \u7684\u4EE3\u7801\uFF1A"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-tsx",meta:'title="src/routes/page.tsx"',children:'import Contacts from \'../containers/Contacts\';\n\nfunction Index() {\n  return <Contacts title="All" source="items" />;\n}\n\nexport default Index;\n'})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-tsx",meta:'title="src/routes/archives/page.tsx"',children:'import Contacts from \'../../containers/Contacts\';\n\nfunction Index() {\n  return <Contacts title="Archives" source="archived" />;\n}\n\nexport default Index;\n'})}),"\n",(0,s.jsx)(e.p,{children:"\u91CD\u6784\u5B8C\u6210\uFF0C\u73B0\u5728\u7684\u9879\u76EE\u7ED3\u6784\u662F\uFF1A"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:".\n\u251C\u2500\u2500 README.md\n\u251C\u2500\u2500 dist\n\u251C\u2500\u2500 modern.config.ts\n\u251C\u2500\u2500 node_modules\n\u251C\u2500\u2500 package.json\n\u251C\u2500\u2500 pnpm-lock.yaml\n\u251C\u2500\u2500 src\n\u2502   \u251C\u2500\u2500 components\n\u2502   \u2502   \u251C\u2500\u2500 Avatar\n\u2502   \u2502   \u2502   \u2514\u2500\u2500 index.tsx\n\u2502   \u2502   \u2514\u2500\u2500 Item\n\u2502   \u2502       \u2514\u2500\u2500 index.tsx\n\u2502   \u251C\u2500\u2500 containers\n\u2502   \u2502   \u2514\u2500\u2500 Contacts.tsx\n\u2502   \u251C\u2500\u2500 models\n\u2502   \u2502   \u2514\u2500\u2500 contacts.ts\n\u2502   \u251C\u2500\u2500 modern-app-env.d.ts\n\u2502   \u251C\u2500\u2500 routes\n\u2502   \u2502   \u251C\u2500\u2500 archives\n\u2502   \u2502   \u2502   \u2514\u2500\u2500 page.tsx\n\u2502   \u2502   \u251C\u2500\u2500 layout.tsx\n\u2502   \u2502   \u2514\u2500\u2500 page.tsx\n\u2502   \u2514\u2500\u2500 styles\n\u2502       \u2514\u2500\u2500 utils.css\n\u2514\u2500\u2500 tsconfig.json\n"})}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"components/"})," \u91CC\u7684",(0,s.jsx)(e.strong,{children:"\u89C6\u56FE\u7EC4\u4EF6"}),"\uFF0C\u90FD\u662F\u76EE\u5F55\u5F62\u5F0F\uFF0C\u5982 ",(0,s.jsx)(e.code,{children:"Avatar/index.tsx"}),"\u3002\u800C ",(0,s.jsx)(e.code,{children:"containers/"})," \u91CC\u7684",(0,s.jsx)(e.strong,{children:"\u5BB9\u5668\u7EC4\u4EF6"}),"\uFF0C\u90FD\u662F\u5355\u6587\u4EF6\u5F62\u5F0F\uFF0C\u5982 ",(0,s.jsx)(e.code,{children:"contacts.tsx"}),"\u3002",(0,s.jsx)(e.strong,{children:"\u8FD9\u662F\u6211\u4EEC\u63A8\u8350\u7684\u4E00\u79CD\u6700\u4F73\u5B9E\u8DF5"}),"\u3002"]}),"\n",(0,s.jsxs)(e.p,{children:["\u5728 \u200B ",(0,s.jsx)(e.a,{href:"/zh/tutorials/first-app/c02-component",children:"\u6DFB\u52A0 UI \u7EC4\u4EF6\uFF08Component\uFF09"})," \u7AE0\u8282\u63D0\u5230\u8FC7\uFF0C\u89C6\u56FE\u7EC4\u4EF6\u7528\u76EE\u5F55\u5F62\u5F0F\uFF0C\u662F\u56E0\u4E3A\u89C6\u56FE\u7EC4\u4EF6\u8D1F\u8D23\u5B9E\u73B0 UI \u5C55\u793A\u548C\u4EA4\u4E92\u7EC6\u8282\uFF0C\u53EF\u4EE5\u6F14\u53D8\u7684\u590D\u6742\u3002\u7528\u76EE\u5F55\u5F62\u5F0F\uFF0C\u53EF\u4EE5\u65B9\u4FBF\u589E\u52A0\u5B50\u6587\u4EF6\uFF0C\u5305\u62EC\u4E13\u7528\u7684\u8D44\u6E90\uFF08\u56FE\u7247\u7B49\uFF09\u3001\u4E13\u7528\u5B50\u7EC4\u4EF6\u3001CSS \u6587\u4EF6\u7B49\u3002\u5728\u8FD9\u4E2A\u76EE\u5F55\u5185\u90E8\u53EF\u4EE5\u968F\u610F\u91CD\u6784\uFF0C\u53EA\u8003\u8651\u6700\u5C0F\u5C40\u90E8\u3002"]}),"\n",(0,s.jsx)(e.p,{children:"\u800C\u5BB9\u5668\u7EC4\u4EF6\u53EA\u8D1F\u8D23\u8FDE\u63A5\uFF0C\u662F\u4E00\u4E2A\u80F6\u6C34\u5C42\uFF0C\u590D\u6742\u7684\u4E1A\u52A1\u903B\u8F91\u548C\u5B9E\u73B0\u7EC6\u8282\u90FD\u4EA4\u7ED9 View \u5C42\u548C Model \u5C42\u53BB\u5B9E\u73B0\u3002\u5BB9\u5668\u7EC4\u4EF6\u81EA\u5DF1\u5E94\u8BE5\u4FDD\u6301\u7B80\u5355\u6E05\u6670\uFF0C\u4E0D\u5E94\u8BE5\u5305\u542B\u590D\u6742\u5B9E\u73B0\u7EC6\u8282\uFF0C\u6240\u4EE5\u4E0D\u5E94\u8BE5\u6709\u5185\u90E8\u7ED3\u6784\u3002\u91C7\u7528\u5355\u6587\u4EF6\u5F62\u5F0F\u4E0D\u4F46\u66F4\u7B80\u6D01\uFF0C\u4E5F\u80FD\u8D77\u5230\u7EA6\u675F\u4F5C\u7528\uFF0C\u63D0\u9192\u5F00\u53D1\u8005\u4E0D\u8981\u628A\u5BB9\u5668\u7EC4\u4EF6\u5199\u590D\u6742\u3002"})]})}function a(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}=Object.assign({},(0,r.ah)(),n.components);return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(c,{...n})}):c(n)}let i=a;a.__RSPRESS_PAGE_META={},a.__RSPRESS_PAGE_META["zh%2Ftutorials%2Ffirst-app%2Fc07-container.mdx"]={toc:[{text:"\u4F7F\u7528\u5B8C\u6574 Model",id:"\u4F7F\u7528\u5B8C\u6574-model",depth:2},{text:"\u62BD\u79BB\u5BB9\u5668\u7EC4\u4EF6",id:"\u62BD\u79BB\u5BB9\u5668\u7EC4\u4EF6",depth:2}],title:"\u6DFB\u52A0\u5BB9\u5668\u7EC4\u4EF6",frontmatter:{title:"\u6DFB\u52A0\u5BB9\u5668\u7EC4\u4EF6"}}}}]);