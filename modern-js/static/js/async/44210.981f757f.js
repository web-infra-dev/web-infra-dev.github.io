/*! For license information please see 44210.981f757f.js.LICENSE.txt */
(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["44210"],{4452:function(e,n,s){"use strict";s.r(n),s.d(n,{default:function(){return l}});var t=s("9880"),r=s("23169"),i=s("18553");function c(e){let n=Object.assign({h1:"h1",a:"a",p:"p",strong:"strong",code:"code",pre:"pre",div:"div",img:"img"},(0,r.useMDXComponents)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.h1,{id:"\u6DFB\u52A0\u5BA2\u6237\u7AEF\u8DEF\u7531",children:["\u6DFB\u52A0\u5BA2\u6237\u7AEF\u8DEF\u7531",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u6DFB\u52A0\u5BA2\u6237\u7AEF\u8DEF\u7531",children:"#"})]}),"\n","\n",(0,t.jsx)(n.p,{children:"\u4E0A\u4E00\u7AE0\u8282\u4E2D\uFF0C\u6211\u4EEC\u5B66\u4E60\u4E86\u5982\u4F55\u4E3A\u521B\u5EFA UI \u7EC4\u4EF6\uFF0C\u5E76\u6DFB\u52A0\u6837\u5F0F\u3002"}),"\n",(0,t.jsxs)(n.p,{children:["\u8FD9\u4E00\u7AE0\u8282\u4E2D\uFF0C\u6211\u4EEC\u5C06\u4F1A\u5B66\u4E60\u5982\u4F55\u6DFB\u52A0",(0,t.jsx)(n.strong,{children:"\u5BA2\u6237\u7AEF\u8DEF\u7531"}),"\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:["\u4E4B\u524D\u6211\u4EEC\u5DF2\u7ECF\u4E3A\u8054\u7CFB\u4EBA\u5217\u8868\u589E\u52A0\u4E86 Archive \u6309\u94AE\uFF0C\u63A5\u4E0B\u6765\u6211\u4EEC\u6DFB\u52A0\u4E00\u4E2A\u5BA2\u6237\u7AEF\u8DEF\u7531 ",(0,t.jsx)(n.code,{children:"/archives"}),"\uFF0C\u8BBF\u95EE\u8FD9\u4E2A\u8DEF\u7531\u65F6\uFF0C\u53EA\u663E\u793A\u5DF2\u5B58\u6863\u7684\u8054\u7CFB\u4EBA\uFF0C\u800C\u539F\u6709\u7684 ",(0,t.jsx)(n.code,{children:"/"})," \u7EE7\u7EED\u663E\u793A\u6240\u6709\u8054\u7CFB\u4EBA\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:["\u65B0\u5EFA ",(0,t.jsx)(n.code,{children:"src/routes/archives/page.tsx"})," \u6587\u4EF6\uFF1A"]}),"\n",(0,t.jsxs)(i.Tabs,{children:[(0,t.jsx)(i.Tab,{value:"macOS",label:"macOS",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"mkdir -p src/routes/archives\ntouch src/routes/archives/page.tsx\n"})})}),(0,t.jsx)(i.Tab,{value:"Windows",label:"Windows",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-powershell",children:"mkdir -p src/routes/archives\nni src/routes/archives/page.tsx\n"})})})]}),"\n",(0,t.jsx)(n.p,{children:"\u6DFB\u52A0\u5982\u4E0B\u4EE3\u7801\uFF1A"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",meta:'title="src/archives/page.tsx"',children:"import { List } from 'antd';\nimport { Helmet } from '@modern-js/runtime/head';\nimport Item from '../../components/Item';\n\nconst getAvatar = (users: Array<{ name: string; email: string }>) =>\n  users.map(user => ({\n    ...user,\n    avatar: `https://api.dicebear.com/7.x/pixel-art/svg?seed=${user.name}`,\n  }));\n\nconst getMockArchivedData = () =>\n  getAvatar([\n    { name: 'Thomas', email: 'w.kccip@bllmfbgv.dm' },\n    { name: 'Chow', email: 'f.lfqljnlk@ywoefljhc.af' },\n  ]);\nfunction Index() {\n  return (\n    <div className=\"container lg mx-auto\">\n      <Helmet>\n        <title>Archives</title>\n      </Helmet>\n      <List\n        dataSource={getMockArchivedData()}\n        renderItem={info => <Item key={info.name} info={info} />}\n      />\n    </div>\n  );\n}\n\nexport default Index;\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u8FD9\u91CC\u4F7F\u7528\u4E86 ",(0,t.jsx)(n.a,{href:"https://github.com/nfl/react-helmet",target:"_blank",rel:"noopener noreferrer",children:"React Helmet"})," \u7684 ",(0,t.jsx)(n.code,{children:"Helmet"})," \u7EC4\u4EF6\uFF0C\u5728 ",(0,t.jsx)(n.code,{children:"src/routes/page.tsx"})," \u4E2D\u4E5F\u6DFB\u52A0 Helmet \u7EC4\u4EF6\uFF1A"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"import { Helmet } from '@modern-js/runtime/head';\n\nfunction Index() {\n  return (\n    <div className=\"container lg mx-auto\">\n      <Helmet>\n        <title>All</title>\n      </Helmet>\n      ...\n    </div>\n  );\n}\n"})}),"\n",(0,t.jsxs)(n.div,{className:"rspress-directive info",children:[(0,t.jsx)(n.div,{className:"rspress-directive-title",children:"INFO"}),(0,t.jsxs)(n.div,{className:"rspress-directive-content",children:[(0,t.jsx)(n.p,{children:"Modern.js \u9ED8\u8BA4\u96C6\u6210\u4E86 react-helmet\uFF0C\u4E5F\u53EF\u4EE5\u7ED3\u5408 SSR \u4F7F\u7528\uFF0C\u6EE1\u8DB3 SEO \u9700\u6C42\u3002"}),"\n"]})]}),"\n",(0,t.jsxs)(n.p,{children:["\u56E0\u4E3A\u73B0\u5728\u6709\u591A\u4E2A\u9875\u9762\uFF0C\u90FD\u9700\u8981\u7528\u5230\u524D\u9762\u7684 Utility Class\uFF0C\u56E0\u6B64\u6211\u4EEC\u9700\u8981\u628A\u6837\u5F0F\u6587\u4EF6\u79FB\u52A8\u5230 ",(0,t.jsx)(n.code,{children:"src/routes/layout.tsx"}),"\uFF1A"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"import 'tailwindcss/base.css';\nimport 'tailwindcss/components.css';\nimport 'tailwindcss/utilities.css';\nimport '../styles/utils.css';\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u6267\u884C ",(0,t.jsx)(n.code,{children:"pnpm run dev"}),"\uFF0C\u8BBF\u95EE ",(0,t.jsx)(n.code,{children:"http://localhost:8080"}),"\uFF0C\u53EF\u4EE5\u770B\u5230\u5B8C\u6574\u7684\u8054\u7CFB\u4EBA\uFF0C\u9875\u9762\u7684\u6807\u9898\u662F All\uFF1A"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/nuvjhpqnuvr/modern-website/tutorials/c04-archives.png",alt:"display1"})}),"\n",(0,t.jsxs)(n.p,{children:["\u8BBF\u95EE ",(0,t.jsx)(n.code,{children:"http://localhost:8080/archives"}),"\uFF0C\u53EA\u4F1A\u770B\u5230\u5DF2\u5B58\u6863\u7684\u8054\u7CFB\u4EBA\uFF0C\u9875\u9762\u7684\u6807\u9898\u662F Archives\uFF1A"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/nuvjhpqnuvr/modern-website/tutorials/c04-all.png",alt:"display"})}),"\n",(0,t.jsx)(n.p,{children:"\u67E5\u770B\u9875\u9762 HTML \u6E90\u7801\uFF0C\u53EF\u4EE5\u770B\u5230\u4E24\u4E2A\u9875\u9762\u7684\u5185\u5BB9\u662F\u4E00\u6837\uFF0C\u662F\u5728\u5BA2\u6237\u7AEF\u9488\u5BF9\u4E0D\u540C URL \u6E32\u67D3\u4E0D\u540C\u5185\u5BB9\u3002"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"\u63A5\u4E0B\u6765\u6211\u4EEC\u589E\u52A0\u4E00\u4E2A\u7B80\u5355\u7684\u5BFC\u822A\u680F\uFF0C\u8BA9\u7528\u6237\u80FD\u5728\u4E24\u4E2A\u5217\u8868\u4E4B\u95F4\u5207\u6362"}),"\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:["\u6253\u5F00 ",(0,t.jsx)(n.code,{children:"src/routes/layout.tsx"}),"\uFF0C\u5728\u9876\u90E8\u5BFC\u5165 Radio \u7EC4\u4EF6\uFF1A"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"import { Radio } from 'antd';\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u7136\u540E\u5C06 UI \u6700\u9876\u90E8\u8FDB\u884C\u4FEE\u6539\uFF0C\u589E\u52A0\u4E00\u7EC4\u5355\u9009\u6846"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",meta:"{4-9}",children:'export default function Layout() {\n  return (\n    <div>\n      <div className="h-16 p-2 flex items-center justify-center">\n        <Radio.Group onChange={handleSetList} value={currentList}>\n          <Radio value="/">All</Radio>\n          <Radio value="/archives">Archives</Radio>\n        </Radio.Group>\n      </div>\n      <Outlet />\n    </div>\n  );\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["\u7136\u540E\u6211\u4EEC\u6765\u5B9E\u73B0 ",(0,t.jsx)(n.code,{children:"currentList"})," \u548C ",(0,t.jsx)(n.code,{children:"handleSetList"}),"\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:["\u5F15\u5165\u4E09\u4E2A React Hook\uFF1A",(0,t.jsx)(n.code,{children:"useState"})," \u548C ",(0,t.jsx)(n.code,{children:"useNavigate"})," \u548C ",(0,t.jsx)(n.code,{children:"useParams"}),"\uFF0C\u4EE5\u53CA Ant Design \u7684\u4E8B\u4EF6\u7C7B\u578B\u5B9A\u4E49\uFF1A"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"import { useState } from 'react';\nimport { Radio, RadioChangeEvent } from 'antd';\nimport { Outlet, useLocation, useNavigate } from '@modern-js/runtime/router';\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u6700\u540E\u5728 Layout \u7EC4\u4EF6\u91CC\u589E\u52A0\u5C40\u90E8\u72B6\u6001\u548C\u76F8\u5173\u903B\u8F91\uFF1A"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",meta:"{2-9}",children:"export default function Layout() {\n  const navigate = useNavigate();\n  const location = useLocation();\n  const [currentList, setList] = useState(location.pathname || '/');\n  const handleSetList = (e: RadioChangeEvent) => {\n    const { value } = e.target;\n    setList(value);\n    navigate(value);\n  };\n  return (\n  ...\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u5230\u8FD9\u91CC\u5C31\u5DF2\u7ECF\u5B8C\u6210\u4E86\u9875\u9762\u5BFC\u822A\u680F\u5B9E\u73B0\uFF0C\u6267\u884C ",(0,t.jsx)(n.code,{children:"pnpm run dev"})," \u67E5\u770B\u6548\u679C\uFF1A"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/nuvjhpqnuvr/modern-website/tutorials/c04-switch.png",alt:"display2"})}),"\n",(0,t.jsx)(n.p,{children:"\u70B9\u51FB\u5BFC\u822A\u680F\u4E2D Archives\uFF0C\u53EF\u4EE5\u770B\u5230\u5355\u9009\u6846\u7684\u9009\u4E2D\u72B6\u6001\u548C URL \u90FD\u4F1A\u53D8\u5316\uFF0C\u9875\u9762\u6CA1\u6709\u5237\u65B0\uFF0C\u53EA\u53D1\u751F\u4E86 CSR\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u901A\u8FC7 URL \u8BBF\u95EE\u4E24\u4E2A\u9875\u9762\uFF0C\u53EF\u4EE5\u770B\u5230 HTML \u5185\u5BB9\u662F\u4E0D\u540C\u7684\uFF0C\u8FD9\u662F\u56E0\u4E3A\u5728 SSR \u9636\u6BB5\u9875\u9762\u5C31\u6267\u884C\u4E86\u5BA2\u6237\u7AEF\u8DEF\u7531\u7684\u903B\u8F91\uFF0CHTML \u91CC\u5DF2\u7ECF\u5305\u542B\u4E86\u6700\u7EC8\u7684\u6E32\u67D3\u7ED3\u679C\u3002"})]})}function a(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,r.useMDXComponents)(),e.components);return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}var l=a;a.__RSPRESS_PAGE_META={},a.__RSPRESS_PAGE_META["zh%2Ftutorials%2Ffirst-app%2Fc04-routes.mdx"]={toc:[],title:"\u6DFB\u52A0\u5BA2\u6237\u7AEF\u8DEF\u7531",frontmatter:{title:"\u6DFB\u52A0\u5BA2\u6237\u7AEF\u8DEF\u7531"}}}}]);