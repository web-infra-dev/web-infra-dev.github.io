(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["92044"],{84667:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return c},frontmatter:function(){return l}});var s=n("9880"),i=n("23169"),o=n("18553");function r(e){let t=Object.assign({h1:"h1",a:"a",p:"p",strong:"strong",code:"code",h2:"h2",pre:"pre",img:"img"},(0,i.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.h1,{id:"add-container",children:["Add Container",(0,s.jsx)(t.a,{className:"header-anchor","aria-hidden":"true",href:"#add-container",children:"#"})]}),"\n","\n",(0,s.jsxs)(t.p,{children:["In the previous chapter, we initially introduced the ",(0,s.jsx)(t.strong,{children:"model"})," to split this part of the logic from the UI component. The ",(0,s.jsx)(t.code,{children:"page.tsx"})," no longer contains UI-independent business logic implementation details, and only needs to use the Model to implement the same function."]}),"\n",(0,s.jsxs)(t.p,{children:["In this chapter, we will further use the business logic of implementation in Model to let ",(0,s.jsx)(t.code,{children:"page.tsx"})," and ",(0,s.jsx)(t.code,{children:"archived/page.tsx"})," get the same data. And implementation Archive button, click the button to display the point of contact archive only in the Archives list, not in the All list."]}),"\n",(0,s.jsxs)(t.h2,{id:"use-the-full-model",children:["Use the full Model",(0,s.jsx)(t.a,{className:"header-anchor","aria-hidden":"true",href:"#use-the-full-model",children:"#"})]}),"\n",(0,s.jsx)(t.p,{children:"Because the two pages need to share the same set of state (point of contact tabular data, point of contact is archived or not), both need to contain the logic to load the initial data, so we need to complete the data acquisition at a higher level."}),"\n",(0,s.jsxs)(t.p,{children:["Modern.js support obtaining data through Data Loader in ",(0,s.jsx)(t.code,{children:"layout.tsx"}),", we first move the data acquisition part of the code to ",(0,s.jsx)(t.code,{children:"src/routes/layout.tsx"}),":"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",meta:'title="src/routes/layout.data.ts"',children:"export type LoaderData = {\n  code: number;\n  data: {\n    name: string;\n    avatar: string;\n    email: string;\n  }[];\n};\n\nexport const loader = async (): Promise<LoaderData> => {\n  const data = new Array(20).fill(0).map(() => {\n    const firstName = name.firstName();\n    return {\n      name: firstName,\n      avatar: `https://api.dicebear.com/7.x/pixel-art/svg?seed=${firstName}`,\n      email: internet.email(),\n    };\n  });\n\n  return {\n    code: 200,\n    data,\n  };\n};\n"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-tsx",meta:'title="src/routes/layout.tsx"',children:"import { name, internet } from 'faker';\nimport {\n  Outlet,\n  useLoaderData,\n  useLocation,\n  useNavigate,\n} from '@modern-js/runtime/router';\nimport { useState } from 'react';\nimport { Radio, RadioChangeEvent } from 'antd';\nimport { useModel } from '@modern-js/runtime/model';\nimport contacts from '../models/contacts';\nimport 'tailwindcss/base.css';\nimport 'tailwindcss/components.css';\nimport 'tailwindcss/utilities.css';\nimport '../styles/utils.css';\nimport type { LoaderData } from './layout.data';\n\nexport default function Layout() {\n  const { data } = useLoaderData() as LoaderData;\n  const [{ items }, { setItems }] = useModel(contacts);\n  if (items.length === 0) {\n    setItems(data);\n  }\n\n  const navigate = useNavigate();\n  ...\n}\n"})}),"\n",(0,s.jsxs)(t.p,{children:["In ",(0,s.jsx)(t.code,{children:"src/routes/page.tsx"}),", use Model directly to get data:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-tsx",children:"import { Helmet } from '@modern-js/runtime/head';\nimport { useModel } from '@modern-js/runtime/model';\nimport { List } from 'antd';\nimport Item from '../components/Item';\nimport contacts from '../models/contacts';\n\nfunction Index() {\n  const [{ items }, { archive }] = useModel(contacts);\n\n  return (\n    <div className=\"container lg mx-auto\">\n      <Helmet>\n        <title>All</title>\n      </Helmet>\n      <List\n        dataSource={items}\n        renderItem={info => (\n          <Item\n            key={info.name}\n            info={info}\n            onArchive={() => {\n              archive(info.email);\n            }}\n          />\n        )}\n      />\n    </div>\n  );\n}\n\nexport default Index;\n"})}),"\n",(0,s.jsxs)(t.p,{children:["Also in ",(0,s.jsx)(t.code,{children:"archived/page.tsx"}),", delete the original ",(0,s.jsx)(t.code,{children:"mockData"})," logic and use the ",(0,s.jsx)(t.code,{children:"archived"})," value computed in Model as the data source:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-tsx",children:"import { Helmet } from '@modern-js/runtime/head';\nimport { useModel } from '@modern-js/runtime/model';\nimport { List } from 'antd';\nimport Item from '../../components/Item';\nimport contacts from '../../models/contacts';\n\nfunction Index() {\n  const [{ archived }, { archive }] = useModel(contacts);\n\n  return (\n    <div className=\"container lg mx-auto\">\n      <Helmet>\n        <title>Archives</title>\n      </Helmet>\n      <List\n        dataSource={archived}\n        renderItem={info => (\n          <Item\n            key={info.name}\n            info={info}\n            onArchive={() => {\n              archive(info.email);\n            }}\n          />\n        )}\n      />\n    </div>\n  );\n}\n\nexport default Index;\n"})}),"\n",(0,s.jsxs)(t.p,{children:["Execute ",(0,s.jsx)(t.code,{children:"pnpm run dev"}),", visit ",(0,s.jsx)(t.code,{children:"http://localhost:8080/"}),", click the Archive button, you can see the button grey out:"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/nuvjhpqnuvr/modern-website/tutorials/c07-contacts-all.png",alt:"display"})}),"\n",(0,s.jsxs)(t.p,{children:["Next, click the top navigation and switch to the Archives list. You can find that the point of contact of ",(0,s.jsx)(t.strong,{children:"Archive"})," just now has appeared in the list:"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/nuvjhpqnuvr/modern-website/tutorials/c07-contacts-archives.png",alt:"display"})}),"\n",(0,s.jsxs)(t.h2,{id:"withdraw-container-components",children:["Withdraw container components",(0,s.jsx)(t.a,{className:"header-anchor","aria-hidden":"true",href:"#withdraw-container-components",children:"#"})]}),"\n",(0,s.jsxs)(t.p,{children:["In the previous chapters, we split the business logic in the project into two layers, one is the ",(0,s.jsx)(t.strong,{children:"view component"}),", and the other is the ",(0,s.jsx)(t.strong,{children:"module"}),". The former is responsible for UI display, interaction, etc., and the latter is responsible for the implementation of UI-independent business logic, which specializes in managing state."]}),"\n",(0,s.jsxs)(t.p,{children:["Like ",(0,s.jsx)(t.code,{children:"src/routes/page.tsx"})," and ",(0,s.jsx)(t.code,{children:"src/routes/archives/page.tsx"})," use the component of the ",(0,s.jsx)(t.code,{children:"useModel"})," API, which is responsible for linking the two layers of View and Model, similar to the role of the Controller in the traditional MVC architecture. In the Modern.js, we follow the habit and call them ",(0,s.jsx)(t.strong,{children:"Container"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["The container component is recommended to be placed in a special ",(0,s.jsx)(t.code,{children:"containers/"})," directory. We execute the following command to create a new file:"]}),"\n",(0,s.jsxs)(o.Tabs,{children:[(0,s.jsx)(o.Tab,{value:"macOS",label:"macOS",default:!0,children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"mkdir -p src/containers\ntouch src/containers/Contacts.tsx\n"})})}),(0,s.jsx)(o.Tab,{value:"Windows",label:"Windows",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-powershell",children:"mkdir -p src/containers\nni src/containers/Contacts.tsx\n"})})})]}),"\n",(0,s.jsxs)(t.p,{children:["We extracted the common part of the original two ",(0,s.jsx)(t.code,{children:"page.tsx"}),", and the code of ",(0,s.jsx)(t.code,{children:"src/containers/Contacts.tsx"})," is as follows:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-tsx",children:"import { Helmet } from '@modern-js/runtime/head';\nimport { useModel } from '@modern-js/runtime/model';\nimport { List } from 'antd';\nimport Item from '../components/Item';\nimport contacts from '../models/contacts';\n\nfunction Contacts({\n  title,\n  source,\n}: {\n  title: string;\n  source: 'items' | 'archived';\n}) {\n  const [state, { archive }] = useModel(contacts);\n\n  return (\n    <div className=\"container lg mx-auto\">\n      <Helmet>\n        <title>{title}</title>\n      </Helmet>\n      <List\n        dataSource={state[source]}\n        renderItem={info => (\n          <Item\n            key={info.name}\n            info={info}\n            onArchive={() => {\n              archive(info.email);\n            }}\n          />\n        )}\n      />\n    </div>\n  );\n}\n\nexport default Contacts;\n"})}),"\n",(0,s.jsxs)(t.p,{children:["Modify the code for ",(0,s.jsx)(t.code,{children:"src/routes/page.tsx"})," and ",(0,s.jsx)(t.code,{children:"src/routes/archives/page.tsx"}),":"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-tsx",meta:'title="src/routes/page.tsx"',children:'import Contacts from \'../containers/Contacts\';\n\nfunction Index() {\n  return <Contacts title="All" source="items" />;\n}\n\nexport default Index;\n'})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-tsx",meta:'title="src/routes/archives/page.tsx"',children:'import Contacts from \'../../containers/Contacts\';\n\nfunction Index() {\n  return <Contacts title="Archives" source="archived" />;\n}\n\nexport default Index;\n'})}),"\n",(0,s.jsx)(t.p,{children:"The refactoring is complete, and the current project structure is:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:".\n\u251C\u2500\u2500 README.md\n\u251C\u2500\u2500 dist\n\u251C\u2500\u2500 modern.config.ts\n\u251C\u2500\u2500 node_modules\n\u251C\u2500\u2500 package.json\n\u251C\u2500\u2500 pnpm-lock.yaml\n\u251C\u2500\u2500 src\n\u2502   \u251C\u2500\u2500 components\n\u2502   \u2502   \u251C\u2500\u2500 Avatar\n\u2502   \u2502   \u2502   \u2514\u2500\u2500 index.tsx\n\u2502   \u2502   \u2514\u2500\u2500 Item\n\u2502   \u2502       \u2514\u2500\u2500 index.tsx\n\u2502   \u251C\u2500\u2500 containers\n\u2502   \u2502   \u2514\u2500\u2500 Contacts.tsx\n\u2502   \u251C\u2500\u2500 models\n\u2502   \u2502   \u2514\u2500\u2500 contacts.ts\n\u2502   \u251C\u2500\u2500 modern-app-env.d.ts\n\u2502   \u251C\u2500\u2500 routes\n\u2502   \u2502   \u251C\u2500\u2500 archives\n\u2502   \u2502   \u2502   \u2514\u2500\u2500 page.tsx\n\u2502   \u2502   \u251C\u2500\u2500 layout.tsx\n\u2502   \u2502   \u2514\u2500\u2500 page.tsx\n\u2502   \u2514\u2500\u2500 styles\n\u2502       \u2514\u2500\u2500 utils.css\n\u2514\u2500\u2500 tsconfig.json\n"})}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.strong,{children:"view components"})," in ",(0,s.jsx)(t.code,{children:"components/"})," dir are in the form of directories, such as ",(0,s.jsx)(t.code,{children:"Avatar/index.tsx"}),". And the ",(0,s.jsx)(t.strong,{children:"container components"})," in ",(0,s.jsx)(t.code,{children:"containers/"})," dir are in the form of single files, such as ",(0,s.jsx)(t.code,{children:"contacts.tsx"}),". ",(0,s.jsx)(t.strong,{children:"This is a best practice we recommend"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["As mentioned in the chapter ",(0,s.jsx)(t.a,{href:"/en/tutorials/first-app/c02-component",children:"Add UI component"}),", the view component is in the form of a directory, because the view component is responsible for the implementation of UI display and interaction details, and can evolve in complexity. In the form of a directory, it is convenient to add sub-files, including dedicated resources (pictures, etc.), dedicated sub-components, CSS files, etc. You can reconstruct at will within this directory, considering only the smallest parts."]}),"\n",(0,s.jsx)(t.p,{children:"The container component is only responsible for linkage and is a glue layer. The sophisticated business logic and implementation details are handed over to the View layer and the Model layer for implementation. The container component itself should be kept simple and clear, and should not contain complex implementation details, so there should be no internal structure. The single-file form is not only more concise, but also acts as a constraint, reminding developers not to write complicated container components."})]})}function a(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:t}=Object.assign({},(0,i.useMDXComponents)(),e.components);return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(r,{...e})}):r(e)}var c=a;a.__RSPRESS_PAGE_META={},a.__RSPRESS_PAGE_META["en%2Ftutorials%2Ffirst-app%2Fc07-container.mdx"]={toc:[{text:"Use the full Model",id:"use-the-full-model",depth:2},{text:"Withdraw container components",id:"withdraw-container-components",depth:2}],title:"Add Container"};let l={title:"Add Container"}},58671:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return c}});var s=n("9880");n("6171");var i=n("54234"),o=n.n(i),r=n("52219"),a=n("37637"),c=e=>{let{title:t,desc:n,href:i}=e;return(0,s.jsxs)("a",{href:(0,r.withBase)(i),target:"_blank",style:{textDecoration:"none"},className:o(a.card),children:[(0,s.jsx)("span",{className:a.title,children:t}),(0,s.jsx)("span",{className:a.desc,children:n})]})}},30777:function(e,t,n){"use strict";n.r(t),n.d(t,{FeatureLayout:function(){return o}});var s=n("9880");n("6171");var i=n("24433");let o=e=>{let{children:t}=e;return(0,s.jsx)("div",{className:i["feature-layout"],children:t})}},55478:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return c}}),n("90517"),n("54368");var s=n("9880"),i=n("39270"),o=n("4985");let r=e=>e.startsWith("http://")||e.startsWith("https://");function a(e){let{to:t,href:n,label:i,...o}=e;return(0,s.jsx)("a",{className:"linkItem",target:"_blank",href:n||t,...o,children:n&&r(n)?(0,s.jsx)("span",{children:i}):i})}function c(){let e=(0,i.useI18n)(),t=[{title:e("guide"),items:[{label:e("quickStart"),to:(0,i.useUrl)("/guides/get-started/quick-start")},{label:e("coreConcept"),to:(0,i.useUrl)("/guides/concept/entries")},{label:e("basicFeatures"),to:(0,i.useUrl)("/guides/basic-features/routes")},{label:e("advancedFeatures"),to:(0,i.useUrl)("/guides/advanced-features/rspack-start")}]},{title:"API",items:[{label:e("configuration"),to:(0,i.useUrl)("/configure/app/usage")},{label:e("command"),to:(0,i.useUrl)("/apis/app/commands")},{label:e("runtime"),to:(0,i.useUrl)("/apis/app/runtime/core/bootstrap")},{label:e("conventions"),to:(0,i.useUrl)("apis/app/hooks/src/app")}]},{title:e("topic"),items:[{label:e("microFrontend"),to:(0,i.useUrl)("/guides/topic-detail/micro-frontend/c01-introduction")},{label:e("stateManagement"),to:(0,i.useUrl)("/guides/topic-detail/model/quick-start")},{label:e("pluginSystem"),to:(0,i.useUrl)("/guides/topic-detail/framework-plugin/introduction")},{label:e("projectGenerator"),to:(0,i.useUrl)("/guides/topic-detail/generator/project")}]},{title:e("help"),items:[{label:e("changelog"),to:"https://github.com/web-infra-dev/modern.js/releases"},{label:"GitHub Issues",to:"https://github.com/web-infra-dev/modern.js/issues"},{label:e("githubDiscussion"),to:"https://github.com/web-infra-dev/modern.js/discussions"}]}],n=t.map((e,t)=>(0,s.jsxs)("div",{className:o.linkWrapper,children:[(0,s.jsx)("div",{className:o.linkTitle,children:e.title}),(0,s.jsx)("ul",{className:o.items,children:e.items.map((e,t)=>(0,s.jsx)("li",{className:o.link,children:(0,s.jsx)(a,{...e})},e.to||t))})]},t));return(0,s.jsx)("footer",{className:o.footer,children:(0,s.jsxs)("div",{className:o.wrapper,children:[(0,s.jsx)("img",{className:o.logo,src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/zq-uylkvT/ljhwZthlaukjlkulzlp/modern-logo-home-page-0209.svg"}),(0,s.jsx)("div",{className:o.linksWrapper,children:n})]})})}},85298:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return o}});var s=n("9880");n("6171");var i=n("57204"),o=e=>{let{children:t}=e;return(0,s.jsx)("div",{className:i.titleWrap,children:(0,s.jsx)("h2",{className:i.title,children:t})})}},21676:function(e,t,n){"use strict";n.r(t),n.d(t,{EN_US:function(){return s}});let s={introduction:"Introduction",quickStart:"Quick Start",slogan:"A Progressive React Framework for modern web development",secondSlogan1:"Enjoy the development experience.",secondSlogan2:"Make innovation happen faster.",feature1:"Rust Bundler",featureDesc1:"Easily switch to Rspack bundler with faster build speed.",feature2:"Integrated BFF",featureDesc2:"Develop BFF code in the same project, enjoy simple function calls.",feature3:"Nested Routes",featureDesc3:"File-as-route, comes with lots performance optimizations.",feature4:"Multi-Rendering Mode",featureDesc4:"SSR, SSG, SPR, all out of the box for you.",feature5:"CSS Solutions",featureDesc5:"CSS Modules, CSS-in-JS, Tailwind CSS, take your pick.",feature6:"Easy to Configure",featureDesc6:"Launch with zero configuration, then everything is configurable.",solutions:"Solutions",solutionsDesc1:"A progressive React framework for web development.",solutionsDesc2:"A powerful solution for npm package development.",solutionsDesc3:"An Rspack-based build tool for web development.",solutionsDesc4:"A fast Rspack-based static site generator",guide:"Guide",topic:"Topic",help:"Help",coreConcept:"Core Concept",basicFeatures:"Basic Features",advancedFeatures:"Advanced Features",configuration:"Configuration",command:"Command",runtime:"Runtime",conventions:"Conventions",microFrontend:"Micro Frontend",stateManagement:"State Management",pluginSystem:"Plugin System",projectGenerator:"Project Generator",githubDiscussion:"Github Discussion",changelog:"Changelog",doubao:"Doubao",writingo:"Writingo",volctrans:"Volctrans",shidianbaike:"Shidian Baike",xiaohe:"Xiaohe",dongchedi:"Dongchedi",volcengineDeveloper:"Volcengine Developer"}},39270:function(e,t,n){"use strict";n.r(t),n.d(t,{useUrl:function(){return a},useI18n:function(){return c}});var s=n("52219"),i=n("21676"),o=n("53724");let r={en:i.EN_US,zh:o.ZH_CN};function a(e){let t=(0,s.useLang)();return(0,s.withBase)("zh"===t?e:`/en${e}`)}function c(){let e=(0,s.useLang)();return t=>r[e][t]}},53724:function(e,t,n){"use strict";n.r(t),n.d(t,{ZH_CN:function(){return s}});let s={introduction:"\u4ECB\u7ECD",quickStart:"\u5FEB\u901F\u4E0A\u624B",slogan:"\u57FA\u4E8E React \u7684\u6E10\u8FDB\u5F0F Web \u5F00\u53D1\u6846\u67B6",secondSlogan1:"\u4EAB\u53D7\u6109\u60A6\u7684\u5F00\u53D1\u4F53\u9A8C\uFF0C",secondSlogan2:"\u8BA9\u521B\u65B0\u66F4\u5FEB\u53D1\u751F\u3002",feature1:"Rust \u6784\u5EFA",featureDesc1:"\u8F7B\u677E\u5207\u6362\u5230 Rspack \u6784\u5EFA\u5DE5\u5177\uFF0C\u7F16\u8BD1\u98DE\u5FEB\u3002",feature2:"\u4E00\u4F53\u5316\u5F00\u53D1",featureDesc2:"\u5728\u540C\u4E00\u9879\u76EE\u4E2D\u5B8C\u6210 BFF \u5F00\u53D1\uFF0C\u4EAB\u53D7\u7B80\u6D01\u7684\u51FD\u6570\u8C03\u7528\u3002",feature3:"\u5D4C\u5957\u8DEF\u7531",featureDesc3:"\u6587\u4EF6\u7CFB\u7EDF\u5373\u8DEF\u7531\uFF0C\u9644\u8D60\u5168\u5957\u6027\u80FD\u4F18\u5316\u3002",feature4:"\u591A\u6E32\u67D3\u6A21\u5F0F",featureDesc4:"SSR\u3001SSG\u3001SPR \u7B49\u591A\u79CD\u6E32\u67D3\u6A21\u5F0F\uFF0C\u901A\u901A\u5F00\u7BB1\u5373\u7528\u3002",feature5:"CSS \u65B9\u6848",featureDesc5:"CSS Modules\u3001CSS-in-JS\u3001Tailwind CSS\uFF0C\u4EFB\u4F60\u6311\u9009\u3002",feature6:"\u6613\u4E8E\u914D\u7F6E",featureDesc6:"\u4EE5\u96F6\u914D\u7F6E\u542F\u52A8\uFF0C\u7136\u540E\u4E00\u5207\u7686\u53EF\u914D\u7F6E\u3002",solutions:"\u89E3\u51B3\u65B9\u6848",solutionsDesc1:"\u57FA\u4E8E React \u7684\u6E10\u8FDB\u5F0F Web \u5F00\u53D1\u6846\u67B6\u3002",solutionsDesc2:"\u7B80\u5355\u3001\u9AD8\u6027\u80FD\u7684 npm \u5305\u5F00\u53D1\u65B9\u6848\u3002",solutionsDesc3:"\u57FA\u4E8E Rspack \u7684 Web \u6784\u5EFA\u5DE5\u5177\u3002",solutionsDesc4:"\u57FA\u4E8E Rspack \u7684\u9759\u6001\u7AD9\u70B9\u751F\u6210\u5668\u3002",guide:"\u6307\u5357",topic:"\u4E13\u9898",help:"\u5E2E\u52A9",coreConcept:"\u6838\u5FC3\u6982\u5FF5",basicFeatures:"\u57FA\u7840\u529F\u80FD",advancedFeatures:"\u8FDB\u9636\u529F\u80FD",configuration:"\u914D\u7F6E",command:"\u547D\u4EE4",runtime:"\u8FD0\u884C\u65F6",conventions:"\u76EE\u5F55\u7EA6\u5B9A",microFrontend:"\u5FAE\u524D\u7AEF",stateManagement:"\u72B6\u6001\u7BA1\u7406",pluginSystem:"\u63D2\u4EF6\u7CFB\u7EDF",projectGenerator:"\u9879\u76EE\u751F\u6210\u5668",githubDiscussion:"Github \u8BA8\u8BBA\u533A",changelog:"\u66F4\u65B0\u65E5\u5FD7",doubao:"\u8C46\u5305",writingo:"\u706B\u5C71\u5199\u4F5C",volctrans:"\u706B\u5C71\u7FFB\u8BD1",shidianbaike:"\u8BC6\u5178\u767E\u79D1",xiaohe:"\u5C0F\u8377\u5065\u5EB7",dongchedi:"\u61C2\u8F66\u5E1D",volcengineDeveloper:"\u706B\u5C71\u5F15\u64CE\u5F00\u53D1\u8005\u793E\u533A"}},18553:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return o}});var s=n("358"),i=n("35540");n.es(s,t);var o={...s.default,HomeLayout:i.default}},35540:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return p}}),n("90517"),n("54368");var s=n("9880"),i=n("90591"),o=n("52219"),r=n("6171"),a=n("58671"),c=n("85298"),l=n("30777"),d=n("55478"),u=n("39270"),h=n("56340");let m=()=>{let e=(0,u.useI18n)();return(0,s.jsx)("div",{className:h.header,children:(0,s.jsxs)("header",{className:(0,i.default)("hero hero--primary",h.heroBanner),children:[(0,s.jsxs)("h1",{className:h.title,children:[(0,s.jsx)("div",{children:"Inspire Creativity in"}),(0,s.jsx)("div",{className:h.titleGradient,children:"Modern Web Development"})]}),(0,s.jsxs)("div",{className:h.buttons,children:[(0,s.jsxs)("a",{href:(0,u.useUrl)("/guides/get-started/introduction"),className:h.leftButton,children:[e("introduction"),(0,s.jsx)("img",{width:"20",height:"20",className:h.startArrow,src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/aphqeh7uhohpquloj/modern-js/right-arrow.svg?url"})]}),(0,s.jsx)("a",{href:(0,u.useUrl)("/guides/get-started/quick-start"),className:h.rightButton,children:e("quickStart")})]})]})})};function p(){let e=(0,u.useI18n)(),{pathname:t}=(0,o.useLocation)();(0,r.useEffect)(()=>(window.MODERN_THEME="dark",()=>{window.MODERN_THEME=void 0}),[t]);let n=[{title:e("feature1"),href:(0,u.useUrl)("/guides/concept/builder"),desc:e("featureDesc1")},{title:e("feature2"),href:(0,u.useUrl)("/guides/advanced-features/bff/index"),desc:e("featureDesc2")},{title:e("feature3"),href:(0,u.useUrl)("/guides/basic-features/routes"),desc:e("featureDesc3")},{title:e("feature4"),href:(0,u.useUrl)("/guides/advanced-features/ssr"),desc:e("featureDesc4")},{title:e("feature5"),href:(0,u.useUrl)("/guides/basic-features/css"),desc:e("featureDesc5")},{title:e("feature6"),href:(0,u.useUrl)("/configure/app/usage"),desc:e("featureDesc6")}],p=(0,o.useLang)(),f=[{title:"Modern.js Framework",href:(0,u.useUrl)("/guides/get-started/introduction"),desc:e("solutionsDesc1")},{title:"Modern.js Module",href:`https://modernjs.dev/module-tools${"en"===p?"/en":""}`,desc:e("solutionsDesc2")},{title:"Modern.js Builder",href:`https://modernjs.dev/builder${"en"===p?"/en":""}`,desc:e("solutionsDesc3")},{title:"Rspress",href:`https://rspress.dev${"en"===p?"":"/zh"}`,desc:e("solutionsDesc4")}];return(0,s.jsxs)("div",{children:[(0,s.jsxs)(o.Helmet,{children:[(0,s.jsx)("html",{className:"dark"}),(0,s.jsx)("script",{children:"window.MODERN_THEME = 'dark';"}),(0,s.jsx)("style",{type:"text/css",children:`
          .rspress-doc-appearance {
            display: none!important;
          }
        `})]}),(0,s.jsx)(m,{}),(0,s.jsxs)("main",{className:h["homepage-main"],children:[(0,s.jsxs)(l.FeatureLayout,{children:[(0,s.jsx)(c.default,{children:e("solutions")}),(0,s.jsx)("div",{className:h.cardContainer,children:f.map((e,t)=>(0,s.jsx)(a.default,{title:e.title,desc:e.desc,href:e.href},t))})]}),(0,s.jsx)(l.FeatureLayout,{children:(0,s.jsxs)("h1",{className:(0,i.default)([h.title,h.titleGradient]),style:{textAlign:"left",marginBottom:32},children:[(0,s.jsx)("div",{children:e("secondSlogan1")}),(0,s.jsx)("div",{children:e("secondSlogan2")})]})}),(0,s.jsxs)(l.FeatureLayout,{children:[(0,s.jsx)(c.default,{children:"Modern.js Framework"}),(0,s.jsx)("div",{className:h.cardContainer,children:n.map((e,t)=>(0,s.jsx)(a.default,{title:e.title,desc:e.desc,href:e.href},t))})]}),(0,s.jsx)(d.default,{})]})]})}},24433:function(e,t,n){"use strict";e.exports={"feature-layout":"feature-layout-ea3480",featureLayout:"feature-layout-ea3480"}},57204:function(e,t,n){"use strict";e.exports={title:"title-cfbf64",title:"title-cfbf64",titleWrap:"titleWrap-_245ce",titleWrap:"titleWrap-_245ce"}},37637:function(e,t,n){"use strict";e.exports={card:"card-_1c4af",card:"card-_1c4af",desc:"desc-a85d41",desc:"desc-a85d41",icon:"icon-_02dc1",icon:"icon-_02dc1",title:"title-b44362",title:"title-b44362"}},4985:function(e,t,n){"use strict";e.exports={footer:"footer-_1419c",footer:"footer-_1419c",link:"link-fff29d",link:"link-fff29d",linkTitle:"linkTitle-c4002f",linkTitle:"linkTitle-c4002f",linkWrapper:"linkWrapper-_1b066",linkWrapper:"linkWrapper-_1b066",linksWrapper:"linksWrapper-_4f8ed",linksWrapper:"linksWrapper-_4f8ed",logo:"logo-_22a8c",logo:"logo-_22a8c",wrapper:"wrapper-b33135",wrapper:"wrapper-b33135"}},56340:function(e,t,n){"use strict";e.exports={buttons:"buttons-e3d388",buttons:"buttons-e3d388",cardContainer:"cardContainer-_79b2f",cardContainer:"cardContainer-_79b2f",flowContainer:"flowContainer-_225bb",flowContainer:"flowContainer-_225bb",flowLine:"flowLine-a3999c",flowLine:"flowLine-a3999c",flowLineMobile:"flowLineMobile-_4fe65",flowLineMobile:"flowLineMobile-_4fe65",header:"header-_720aa",header:"header-_720aa",heroBanner:"heroBanner-_85caa",heroBanner:"heroBanner-_85caa","homepage-main":"homepage-main-_77128",homepageMain:"homepage-main-_77128",leftButton:"leftButton-_7ef36",leftButton:"leftButton-_7ef36",logo:"logo-_9cf1f",logo:"logo-_9cf1f",rightButton:"rightButton-_91c6e",rightButton:"rightButton-_91c6e","section-title":"section-title-dc2851",sectionTitle:"section-title-dc2851",singleImg:"singleImg-_71172",singleImg:"singleImg-_71172",singleImgCard:"singleImgCard-_1456f",singleImgCard:"singleImgCard-_1456f",singleImgWrap:"singleImgWrap-_12f4b",singleImgWrap:"singleImgWrap-_12f4b",startArrow:"startArrow-c03ec9",startArrow:"startArrow-c03ec9",title:"title-_6c4ac",title:"title-_6c4ac",titleGradient:"titleGradient-_84d55",titleGradient:"titleGradient-_84d55"}}}]);