(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["37902"],{39133:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return c}});var a,i=t("15169"),s=t("43932"),r=t("9880"),o=t("23169");function d(e){var n=Object.assign({h1:"h1",a:"a",p:"p",code:"code",strong:"strong",div:"div",pre:"pre",h2:"h2"},(0,o.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"add-model",children:["Add Model",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#add-model",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["In the previous chapter, we changed the hardcoding ",(0,r.jsx)(n.code,{children:"mockData"})," to load from Data Loader."]}),"\n",(0,r.jsxs)(n.p,{children:["In this chapter, we will further implement the functions of the project, such as the implementation of the function of the ",(0,r.jsx)(n.strong,{children:"Archive"})," button to put the point of contact archive."]}),"\n",(0,r.jsxs)(n.p,{children:["Therefore, we will start to write some business logic that has nothing to do with the UI at all. If we continue to write in the component code, more and more noodle code will be generated. To this end, we introduced a code module called ",(0,r.jsx)(n.strong,{children:"Model"})," to decoupling these business logic and UI."]}),"\n",(0,r.jsxs)(n.div,{className:"rspress-directive info",children:[(0,r.jsx)(n.div,{className:"rspress-directive-title",children:"note"}),(0,r.jsxs)(n.div,{className:"rspress-directive-content",children:[(0,r.jsxs)(n.p,{children:["To use the Model API, you need to opt in ",(0,r.jsx)(n.a,{href:"/configure/app/runtime/state",children:"runtime.state"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import { defineConfig } from '@modern-js/app-tools';\n\nexport default defineConfig({\n  runtime: {\n    state: true,\n  },\n});\n"})}),"\n"]})]}),"\n",(0,r.jsxs)(n.h2,{id:"model-implementation",children:["Model implementation",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#model-implementation",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["To create a complete Model, you first need to define ",(0,r.jsx)(n.strong,{children:"state"}),", including the name and initial value of data in the state."]}),"\n",(0,r.jsx)(n.p,{children:"We use Model to manage the data of the point of contact list, so define the following data state:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"const state = {\n  items: [],\n};\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Using TS syntax, you can define more complete type information, such as items in each object should have a ",(0,r.jsx)(n.code,{children:"name"}),", ",(0,r.jsx)(n.code,{children:"email"})," field. In order to implement archive function, also need to create the ",(0,r.jsx)(n.code,{children:"archived"})," field to hold the point of contact has been archived state."]}),"\n",(0,r.jsxs)(n.p,{children:["We also need a field to access all archived points of contact. We can define a field of type ",(0,r.jsx)(n.strong,{children:"computed"})," to convert the existing data:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"const computed = {\n  archived: ({ items }) => {\n    return items.filter(item => item.archived);\n  },\n};\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Fields of type ",(0,r.jsx)(n.code,{children:"computed"})," are defined as function, but can be accessed through state just like normal fields."]}),"\n",(0,r.jsxs)(n.div,{className:"rspress-directive info",children:[(0,r.jsx)(n.div,{className:"rspress-directive-title",children:"INFO"}),(0,r.jsxs)(n.div,{className:"rspress-directive-content",children:[(0,r.jsxs)(n.p,{children:["Modern.js integrates ",(0,r.jsx)(n.a,{href:"https://immerjs.github.io/immer/",target:"_blank",rel:"noopener noreferrer",children:"Immer"})," and can write such state transfer logic just like normal mutable data in JS."]}),"\n"]})]}),"\n",(0,r.jsxs)(n.p,{children:["When implementing the Archive button, we need an ",(0,r.jsx)(n.code,{children:"archive"})," function, which is responsible for modifying the ",(0,r.jsx)(n.code,{children:"archived"})," field of the specified contact. We call this function ",(0,r.jsx)(n.strong,{children:"action"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"const actions = {\n  archive(draft, payload) {\n    const target = draft.items.find(item => item.email === payload);\n    if (target) {\n      target.archived = true;\n    }\n  },\n};\n"})}),"\n",(0,r.jsx)(n.p,{children:"An action function is a pure function, where a defined input gets a defined output (a shifted state) and should not have any side effects."}),"\n",(0,r.jsx)(n.p,{children:"The first parameter of the function is the Draft State provided by Immer, and the second parameter is the parameter passed in when the action is called (more on how to call it later)."}),"\n",(0,r.jsx)(n.p,{children:"We try to implement them completely:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"const state = {\n  items: [],\n  pending: false,\n  error: null,\n};\n\nconst computed = {\n  archived: ({ items }) => {\n    return items.filter(item => item.archived);\n  },\n};\n\nconst actions = {\n  archive(draft, payload) {\n    const target = draft.items.find(item => item.email === payload);\n    if (target) {\n      target.archived = true;\n    }\n  },\n};\n"})}),"\n",(0,r.jsx)(n.p,{children:"Next we connect the above code and put it in the same Model file. First execute the following command to create a new file directory:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"mkdir -p src/models/\ntouch src/models/contacts.ts\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Add ",(0,r.jsx)(n.code,{children:"src/models/contacts.ts"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"import { model } from '@modern-js/runtime/model';\n\ntype State = {\n  items: {\n    avatar: string;\n    name: string;\n    email: string;\n    archived?: boolean;\n  }[];\n  pending: boolean;\n  error: null | Error;\n};\n\nexport default model<State>('contacts').define({\n  state: {\n    items: [],\n    pending: false,\n    error: null,\n  },\n  computed: {\n    archived: ({ items }: State) => items.filter(item => item.archived),\n  },\n  actions: {\n    archive(draft, payload) {\n      const target = draft.items.find(item => item.email === payload)!;\n      if (target) {\n        target.archived = true;\n      }\n    },\n  },\n});\n"})}),"\n",(0,r.jsxs)(n.p,{children:["We call a plain object containing elements such as state, action, etc. as ",(0,r.jsx)(n.strong,{children:"Model Spec"}),", Modern.js provides ",(0,r.jsx)(n.a,{href:"/apis/app/runtime/model/model_",children:"Model API"}),", which can generate ",(0,r.jsx)(n.strong,{children:"Model"})," from Model Spec."]}),"\n",(0,r.jsxs)(n.h2,{id:"use-model",children:["Use Model",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#use-model",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"Now let's use this Model directly to complement the logic of the project."}),"\n",(0,r.jsxs)(n.p,{children:["First modify ",(0,r.jsx)(n.code,{children:"src/components/Item/index.tsx"})," and add the UI and interaction of the ",(0,r.jsx)(n.strong,{children:"Archive button"}),", the content is as follows:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"import Avatar from '../Avatar';\n\ntype InfoProps = {\n  avatar: string;\n  name: string;\n  email: string;\n  archived?: boolean;\n};\n\nconst Item = ({\n  info,\n  onArchive,\n}: {\n  info: InfoProps;\n  onArchive?: () => void;\n}) => {\n  const { avatar, name, email, archived } = info;\n  return (\n    <div className=\"flex p-4 items-center border-gray-200 border-b\">\n      <Avatar src={avatar} />\n      <div className=\"ml-4 custom-text-gray flex-1 flex justify-between\">\n        <div className=\"flex-1\">\n          <p>{name}</p>\n          <p>{email}</p>\n        </div>\n        <button\n          type=\"button\"\n          disabled={archived}\n          onClick={onArchive}\n          className={`text-white font-bold py-2 px-4 rounded-full ${\n            archived\n              ? 'bg-gray-400 cursor-default'\n              : 'bg-blue-500 hover:bg-blue-700'\n          }`}\n        >\n          {archived ? 'Archived' : 'Archive'}\n        </button>\n      </div>\n    </div>\n  );\n};\n\nexport default Item;\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Next, we add ",(0,r.jsx)(n.code,{children:"src/routes.page.loader"})," and modify ",(0,r.jsx)(n.code,{children:"src/routes/page.tsx"})," to pass more parameters to the ",(0,r.jsx)(n.code,{children:"<Item>"})," component:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",meta:'title="src/routes/page.loader.ts"',children:"export type LoaderData = {\n  code: number;\n  data: {\n    name: string;\n    avatar: string;\n    email: string;\n  }[];\n};\n\nexport default async (): Promise<LoaderData> => {\n  const data = new Array(20).fill(0).map(() => {\n    const firstName = name.firstName();\n    return {\n      name: firstName,\n      avatar: `https://avatars.dicebear.com/api/identicon/${firstName}.svg`,\n      email: internet.email(),\n      archived: false,\n    };\n  });\n\n  return {\n    code: 200,\n    data,\n  };\n};\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",meta:'title="src/routes/page.tsx"',children:"import { Helmet } from '@modern-js/runtime/head';\nimport { useModel } from '@modern-js/runtime/model';\nimport { useLoaderData } from '@modern-js/runtime/router';\nimport { List } from 'antd';\nimport { name, internet } from 'faker';\nimport Item from '../components/Item';\nimport contacts from '../models/contacts';\nimport type { LoaderData } from './page.loader';\n\nfunction Index() {\n  const { data } = useLoaderData() as LoaderData;\n  const [{ items }, { archive, setItems }] = useModel(contacts);\n  if (items.length === 0) {\n    setItems(data);\n  }\n\n  return (\n    <div className=\"container lg mx-auto\">\n      <Helmet>\n        <title>All</title>\n      </Helmet>\n      <List\n        dataSource={items}\n        renderItem={info => (\n          <Item\n            key={info.name}\n            info={info}\n            onArchive={() => {\n              archive(info.email);\n            }}\n          />\n        )}\n      />\n    </div>\n  );\n}\n\nexport default Index;\n"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"useModel"})," is the hooks API provided by the Modern.js. You can provide the state defined in the Model in the component, or call the side effects and actions defined in the Model through actions to change the state of the Model."]}),"\n",(0,r.jsx)(n.p,{children:"Model is business logic, a computational process that does not create or hold state itself. Only after being used by the component with the hooks API, the state is created in the specified place."}),"\n",(0,r.jsxs)(n.p,{children:["Execute ",(0,r.jsx)(n.code,{children:"pnpm run dev"})," and click the ",(0,r.jsx)(n.strong,{children:"Archive button"})," to see that the page UI has changed."]}),"\n",(0,r.jsxs)(n.div,{className:"rspress-directive note",children:[(0,r.jsx)(n.div,{className:"rspress-directive-title",children:"NOTE"}),(0,r.jsxs)(n.div,{className:"rspress-directive-content",children:[(0,r.jsxs)(n.p,{children:["In the above example, ",(0,r.jsx)(n.code,{children:"useLoaderData"})," is actually executed every time the route is switched. Because we used fake data in the Data Loader, the data returned each time is different. But we use the data in the Model first, so the data does not change when switching routes."]}),"\n"]})]})]})}(a=globalThis).__RSPRESS_PAGE_META||(a.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["en%2Ftutorials%2Ffirst-app%2Fc06-model.mdx"]={toc:[{text:"Model implementation",id:"model-implementation",depth:2},{text:"Use Model",id:"use-model",depth:2}],title:"Add Model",frontmatter:{title:"Add Model"}};var c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,o.useMDXComponents)(),e.components).wrapper;return n?(0,r.jsx)(n,(0,s._)((0,i._)({},e),{children:(0,r.jsx)(d,(0,i._)({},e))})):d(e)}}}]);