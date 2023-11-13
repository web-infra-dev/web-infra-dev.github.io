(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["16464"],{54986:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return d}});var s=r("9880"),t=r("23169");function i(e){let n=Object.assign({h1:"h1",a:"a",p:"p",code:"code",strong:"strong",div:"div",pre:"pre",h2:"h2"},(0,t.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h1,{id:"\u6DFB\u52A0\u72B6\u6001\u7BA1\u7406",children:["\u6DFB\u52A0\u72B6\u6001\u7BA1\u7406",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u6DFB\u52A0\u72B6\u6001\u7BA1\u7406",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["\u4E0A\u4E00\u7AE0\u8282\u4E2D\uFF0C\u6211\u4EEC\u628A\u786C\u7F16\u7801\u7684 ",(0,s.jsx)(n.code,{children:"mockData"})," \u6539\u6210\u4ECE Data Loader \u4E2D\u52A0\u8F7D\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u8FD9\u4E00\u7AE0\u8282\u4E2D\uFF0C\u6211\u4EEC\u4F1A\u8FDB\u4E00\u6B65\u5B9E\u73B0\u9879\u76EE\u7684\u529F\u80FD\uFF0C\u4F8B\u5982\u5B9E\u73B0 ",(0,s.jsx)(n.strong,{children:"Archive"})," \u6309\u94AE\u7684\u529F\u80FD\uFF0C\u628A\u8054\u7CFB\u4EBA\u5F52\u6863\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u56E0\u6B64\u4F1A\u5F00\u59CB\u7F16\u5199\u4E00\u4E9B\u8DDF UI \u5B8C\u5168\u65E0\u5173\u7684\u4E1A\u52A1\u903B\u8F91\uFF0C\u5982\u679C\u7EE7\u7EED\u5199\u5728\u7EC4\u4EF6\u4EE3\u7801\u4E2D\uFF0C\u4F1A\u4EA7\u751F\u8D8A\u6765\u8D8A\u591A\u7684\u9762\u6761\u5F0F\u4EE3\u7801\u3002\u4E3A\u6B64\uFF0C\u6211\u4EEC\u5F15\u5165\u4E86\u4E00\u79CD\u53EB\u505A ",(0,s.jsx)(n.strong,{children:"\u4E1A\u52A1\u6A21\u578B\uFF08Model\uFF09"})," \u7684\u4EE3\u7801\u6A21\u5757\uFF0C\u5C06\u8FD9\u4E9B\u4E1A\u52A1\u903B\u8F91\u548C UI \u89E3\u8026\u3002"]}),"\n",(0,s.jsxs)(n.div,{className:"rspress-directive info",children:[(0,s.jsx)(n.div,{className:"rspress-directive-title",children:"\u6CE8\u610F"}),(0,s.jsxs)(n.div,{className:"rspress-directive-content",children:[(0,s.jsxs)(n.p,{children:["\u4F7F\u7528\u72B6\u6001\u7BA1\u7406\u76F8\u5173 API\uFF0C\u9700\u8981\u5148\u542F\u7528\u914D\u7F6E\u9879 ",(0,s.jsx)(n.a,{href:"/configure/app/runtime/state",children:"runtime.state"}),"\uFF1A"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import { defineConfig } from '@modern-js/app-tools';\n\nexport default defineConfig({\n  runtime: {\n    state: true,\n  },\n});\n"})}),"\n"]})]}),"\n",(0,s.jsxs)(n.h2,{id:"\u5B9E\u73B0-model",children:["\u5B9E\u73B0 Model",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u5B9E\u73B0-model",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["\u521B\u5EFA\u4E00\u4E2A\u5B8C\u6574\u7684 Model \u9996\u5148\u9700\u8981\u5B9A\u4E49",(0,s.jsx)(n.strong,{children:"\u72B6\u6001\uFF08state\uFF09"}),"\uFF0C\u5305\u62EC\u72B6\u6001\u4E2D\u6570\u636E\u7684\u540D\u79F0\u548C\u521D\u59CB\u503C\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"\u6211\u4EEC\u4F7F\u7528 Model \u6765\u7BA1\u7406\u8054\u7CFB\u4EBA\u5217\u8868\u7684\u6570\u636E\uFF0C\u56E0\u6B64\u5B9A\u4E49\u5982\u4E0B\u6570\u636E\u72B6\u6001\uFF1A"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"const state = {\n  items: [],\n};\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u4F7F\u7528 TS \u8BED\u6CD5\uFF0C\u53EF\u4EE5\u5B9A\u4E49\u66F4\u5B8C\u6574\u7684\u7C7B\u578B\u4FE1\u606F\uFF0C\u6BD4\u5982 items \u91CC\u6BCF\u4E2A\u5BF9\u8C61\u90FD\u5E94\u8BE5\u6709 ",(0,s.jsx)(n.code,{children:"name"}),"\u3001",(0,s.jsx)(n.code,{children:"email"})," \u5B57\u6BB5\u3002\u4E3A\u4E86\u5B9E\u73B0\u5F52\u6863\u529F\u80FD\uFF0C\u8FD8\u9700\u8981\u521B\u5EFA ",(0,s.jsx)(n.code,{children:"archived"})," \u5B57\u6BB5\u4FDD\u5B58\u8FD9\u4E2A\u8054\u7CFB\u4EBA\u662F\u5426\u5DF2\u88AB\u5F52\u6863\u7684\u72B6\u6001\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u6211\u4EEC\u8FD8\u9700\u8981\u4E00\u4E2A\u5B57\u6BB5\u7528\u6765\u8BBF\u95EE\u6240\u6709\u5DF2\u5F52\u6863\u7684\u8054\u7CFB\u4EBA\uFF0C\u53EF\u4EE5\u5B9A\u4E49 ",(0,s.jsx)(n.strong,{children:"computed"})," \u7C7B\u578B\u7684\u5B57\u6BB5\uFF0C\u5BF9\u5DF2\u6709\u7684\u6570\u636E\u505A\u8F6C\u6362\uFF1A"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"const computed = {\n  archived: ({ items }) => {\n    return items.filter(item => item.archived);\n  },\n};\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"computed"})," \u7C7B\u578B\u5B57\u6BB5\u7684\u5B9A\u4E49\u65B9\u5F0F\u662F\u51FD\u6570\uFF0C\u4F46\u4F7F\u7528\u65F6\u53EF\u4EE5\u50CF\u666E\u901A\u5B57\u6BB5\u4E00\u6837\u901A\u8FC7 state \u8BBF\u95EE\u3002"]}),"\n",(0,s.jsxs)(n.div,{className:"rspress-directive info",children:[(0,s.jsx)(n.div,{className:"rspress-directive-title",children:"INFO"}),(0,s.jsxs)(n.div,{className:"rspress-directive-content",children:[(0,s.jsxs)(n.p,{children:["Modern.js \u96C6\u6210\u4E86 ",(0,s.jsx)(n.a,{href:"https://immerjs.github.io/immer/",target:"_blank",rel:"noopener noreferrer",children:"Immer"}),"\uFF0C\u80FD\u591F\u50CF\u64CD\u4F5C JS \u4E2D\u5E38\u89C4\u7684\u53EF\u53D8\u6570\u636E\u4E00\u6837\uFF0C\u53BB\u5199\u8FD9\u79CD\u72B6\u6001\u8F6C\u79FB\u7684\u903B\u8F91\u3002"]}),"\n"]})]}),"\n",(0,s.jsxs)(n.p,{children:["\u5B9E\u73B0 Archive \u6309\u94AE\u65F6\uFF0C\u6211\u4EEC\u9700\u8981\u4E00\u4E2A ",(0,s.jsx)(n.code,{children:"archive"})," \u51FD\u6570\uFF0C\u8D1F\u8D23\u4FEE\u6539\u6307\u5B9A\u8054\u7CFB\u4EBA\u7684 ",(0,s.jsx)(n.code,{children:"archived"})," \u5B57\u6BB5\uFF0C\u6211\u4EEC\u628A\u8FD9\u79CD\u51FD\u6570\u90FD\u53EB\u4F5C ",(0,s.jsx)(n.strong,{children:"action"}),"\uFF1A"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"const actions = {\n  archive(draft, payload) {\n    const target = draft.items.find(item => item.email === payload);\n    if (target) {\n      target.archived = true;\n    }\n  },\n};\n"})}),"\n",(0,s.jsxs)(n.p,{children:["action \u51FD\u6570\u662F\u4E00\u79CD",(0,s.jsx)(n.strong,{children:"\u7EAF\u51FD\u6570"}),"\uFF0C\u786E\u5B9A\u7684\u8F93\u5165\u5F97\u5230\u786E\u5B9A\u7684\u8F93\u51FA\uFF08\u8F6C\u79FB\u540E\u7684\u72B6\u6001\uFF09\uFF0C\u4E0D\u5E94\u8BE5\u6709\u4EFB\u4F55\u526F\u4F5C\u7528\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"\u51FD\u6570\u7684\u7B2C\u4E00\u4E2A\u53C2\u6570\u662F Immer \u63D0\u4F9B\u7684 Draft State\uFF0C\u7B2C\u4E8C\u4E2A\u53C2\u6570\u662F action \u88AB\u8C03\u7528\u65F6\u4F20\u5165\u7684\u53C2\u6570\uFF08\u540E\u9762\u4F1A\u4ECB\u7ECD\u600E\u4E48\u8C03\u7528\uFF09\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u6211\u4EEC\u5C1D\u8BD5\u5B8C\u6574\u5B9E\u73B0\u5B83\u4EEC\uFF1A"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"const state = {\n  items: [],\n  pending: false,\n  error: null,\n};\n\nconst computed = {\n  archived: ({ items }) => {\n    return items.filter(item => item.archived);\n  },\n};\n\nconst actions = {\n  archive(draft, payload) {\n    const target = draft.items.find(item => item.email === payload);\n    if (target) {\n      target.archived = true;\n    }\n  },\n};\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u63A5\u4E0B\u6765\u6211\u4EEC\u628A\u4E0A\u9762\u7684\u4EE3\u7801\u8FDE\u8D77\u6765\uFF0C\u653E\u5728\u540C\u4E00\u4E2A Model \u6587\u4EF6\u91CC\u3002\u9996\u5148\u6267\u884C\u4EE5\u4E0B\u547D\u4EE4\uFF0C\u521B\u5EFA\u65B0\u7684\u6587\u4EF6\u76EE\u5F55\uFF1A"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"mkdir -p src/models/\ntouch src/models/contacts.ts\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u6DFB\u52A0 ",(0,s.jsx)(n.code,{children:"src/models/contacts.ts"})," \u7684\u5185\u5BB9\uFF1A"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:"import { model } from '@modern-js/runtime/model';\n\ntype State = {\n  items: {\n    avatar: string;\n    name: string;\n    email: string;\n    archived?: boolean;\n  }[];\n  pending: boolean;\n  error: null | Error;\n};\n\nexport default model<State>('contacts').define({\n  state: {\n    items: [],\n    pending: false,\n    error: null,\n  },\n  computed: {\n    archived: ({ items }: State) => items.filter(item => item.archived),\n  },\n  actions: {\n    archive(draft, payload) {\n      const target = draft.items.find(item => item.email === payload)!;\n      if (target) {\n        target.archived = true;\n      }\n    },\n  },\n});\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u6211\u4EEC\u628A\u4E00\u4E2A\u5305\u542B state\uFF0Caction \u7B49\u8981\u7D20\u7684 plain object \u79F0\u4F5C ",(0,s.jsx)(n.strong,{children:"Model Spec"}),"\uFF0CModern.js \u63D0\u4F9B\u4E86 ",(0,s.jsx)(n.a,{href:"/apis/app/runtime/model/model_",children:"Model API"}),"\uFF0C\u53EF\u4EE5\u6839\u636E Model Spec \u751F\u6210 ",(0,s.jsx)(n.strong,{children:"Model"}),"\u3002"]}),"\n",(0,s.jsxs)(n.h2,{id:"\u4F7F\u7528-model",children:["\u4F7F\u7528 Model",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u4F7F\u7528-model",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"\u73B0\u5728\u6211\u4EEC\u76F4\u63A5\u4F7F\u7528\u8FD9\u4E2A Model\uFF0C\u628A\u9879\u76EE\u7684\u903B\u8F91\u8865\u5145\u8D77\u6765\u3002"}),"\n",(0,s.jsxs)(n.p,{children:["\u9996\u5148\u4FEE\u6539 ",(0,s.jsx)(n.code,{children:"src/components/Item/index.tsx"}),"\uFF0C\u6DFB\u52A0 ",(0,s.jsx)(n.strong,{children:"Archive \u6309\u94AE"}),"\u7684 UI \u548C\u4EA4\u4E92\uFF0C\u5185\u5BB9\u5982\u4E0B\uFF1A"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:"import Avatar from '../Avatar';\n\ntype InfoProps = {\n  avatar: string;\n  name: string;\n  email: string;\n  archived?: boolean;\n};\n\nconst Item = ({\n  info,\n  onArchive,\n}: {\n  info: InfoProps;\n  onArchive?: () => void;\n}) => {\n  const { avatar, name, email, archived } = info;\n  return (\n    <div className=\"flex p-4 items-center border-gray-200 border-b\">\n      <Avatar src={avatar} />\n      <div className=\"ml-4 custom-text-gray flex-1 flex justify-between\">\n        <div className=\"flex-1\">\n          <p>{name}</p>\n          <p>{email}</p>\n        </div>\n        <button\n          type=\"button\"\n          disabled={archived}\n          onClick={onArchive}\n          className={`text-white font-bold py-2 px-4 rounded-full ${\n            archived\n              ? 'bg-gray-400 cursor-default'\n              : 'bg-blue-500 hover:bg-blue-700'\n          }`}\n        >\n          {archived ? 'Archived' : 'Archive'}\n        </button>\n      </div>\n    </div>\n  );\n};\n\nexport default Item;\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u63A5\u4E0B\u6765\uFF0C\u6211\u4EEC\u4FEE\u6539 ",(0,s.jsx)(n.code,{children:"src/routes/page.tsx"})," \u548C ",(0,s.jsx)(n.code,{children:"src/routes/page.data.ts"}),"\uFF0C\u4E3A ",(0,s.jsx)(n.code,{children:"<Item>"})," \u7EC4\u4EF6\u4F20\u9012\u66F4\u591A\u53C2\u6570\uFF1A"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",meta:'title="src/routes/page.data.ts"',children:"export type LoaderData = {\n  code: number;\n  data: {\n    name: string;\n    avatar: string;\n    email: string;\n  }[];\n};\n\nexport const loader = async (): Promise<LoaderData> => {\n  const data = new Array(20).fill(0).map(() => {\n    const firstName = name.firstName();\n    return {\n      name: firstName,\n      avatar: `https://api.dicebear.com/7.x/pixel-art/svg?seed=${firstName}`,\n      email: internet.email(),\n      archived: false,\n    };\n  });\n\n  return {\n    code: 200,\n    data,\n  };\n};\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",meta:'title="src/routes/page.tsx"',children:"import { Helmet } from '@modern-js/runtime/head';\nimport { useModel } from '@modern-js/runtime/model';\nimport { useLoaderData } from '@modern-js/runtime/router';\nimport { List } from 'antd';\nimport { name, internet } from 'faker';\nimport Item from '../components/Item';\nimport contacts from '../models/contacts';\n\nfunction Index() {\n  const { data } = useLoaderData() as LoaderData;\n  const [{ items }, { archive, setItems }] = useModel(contacts);\n  if (items.length === 0) {\n    setItems(data);\n  }\n\n  return (\n    <div className=\"container lg mx-auto\">\n      <Helmet>\n        <title>All</title>\n      </Helmet>\n      <List\n        dataSource={items}\n        renderItem={info => (\n          <Item\n            key={info.name}\n            info={info}\n            onArchive={() => {\n              archive(info.email);\n            }}\n          />\n        )}\n      />\n    </div>\n  );\n}\n\nexport default Index;\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"useModel"})," \u662F Modern.js \u63D0\u4F9B\u7684 hooks API\u3002\u53EF\u4EE5\u5728\u7EC4\u4EF6\u4E2D\u63D0\u4F9B Model \u4E2D\u5B9A\u4E49\u7684 state\uFF0C\u6216\u901A\u8FC7 actions \u8C03\u7528 Model \u4E2D\u5B9A\u4E49\u7684 side effect \u4E0E action\uFF0C\u4ECE\u800C\u6539\u53D8 Model \u7684 state\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"Model \u662F\u4E1A\u52A1\u903B\u8F91\uFF0C\u662F\u8BA1\u7B97\u8FC7\u7A0B\uFF0C\u672C\u8EAB\u4E0D\u521B\u5EFA\u4E5F\u4E0D\u6301\u6709\u72B6\u6001\u3002\u53EA\u6709\u5728\u88AB\u7EC4\u4EF6\u7528 hooks API \u4F7F\u7528\u540E\uFF0C\u624D\u5728\u6307\u5B9A\u7684\u5730\u65B9\u521B\u5EFA\u72B6\u6001\u3002"}),"\n",(0,s.jsxs)(n.p,{children:["\u6267\u884C ",(0,s.jsx)(n.code,{children:"pnpm run dev"}),"\uFF0C\u70B9\u51FB ",(0,s.jsx)(n.strong,{children:"Archive \u6309\u94AE"}),"\uFF0C\u53EF\u4EE5\u770B\u5230\u9875\u9762 UI \u53D1\u751F\u4E86\u53D8\u5316\u3002"]}),"\n",(0,s.jsxs)(n.div,{className:"rspress-directive note",children:[(0,s.jsx)(n.div,{className:"rspress-directive-title",children:"NOTE"}),(0,s.jsxs)(n.div,{className:"rspress-directive-content",children:[(0,s.jsxs)(n.p,{children:["\u4E0A\u8FF0\u4F8B\u5B50\u4E2D\uFF0C",(0,s.jsx)(n.code,{children:"useLoaderData"})," \u5176\u5B9E\u5728\u6BCF\u6B21\u5207\u6362\u8DEF\u7531\u65F6\u90FD\u4F1A\u6267\u884C\u3002\u56E0\u4E3A\u6211\u4EEC\u5728 Data Loader \u91CC\u4F7F\u7528\u4E86 fake \u6570\u636E\uFF0C\u6BCF\u6B21\u8FD4\u56DE\u7684\u6570\u636E\u662F\u4E0D\u540C\u7684\u3002\u4F46\u6211\u4EEC\u4F18\u5148\u4F7F\u7528\u4E86 Model \u4E2D\u7684\u6570\u636E\uFF0C\u56E0\u6B64\u5207\u6362\u8DEF\u7531\u65F6\u6570\u636E\u6CA1\u6709\u53D1\u751F\u6539\u53D8\u3002"]}),"\n"]})]})]})}function a(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,t.useMDXComponents)(),e.components);return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(i,{...e})}):i(e)}var d=a;a.__RSPRESS_PAGE_META={},a.__RSPRESS_PAGE_META["zh%2Ftutorials%2Ffirst-app%2Fc06-model.mdx"]={toc:[{text:"\u5B9E\u73B0 Model",id:"\u5B9E\u73B0-model",depth:2},{text:"\u4F7F\u7528 Model",id:"\u4F7F\u7528-model",depth:2}],title:"\u6DFB\u52A0\u72B6\u6001\u7BA1\u7406",frontmatter:{}}}}]);