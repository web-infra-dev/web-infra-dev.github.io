(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["54661"],{5112:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return l},frontmatter:function(){return c}});var s=n("9880"),i=n("23169"),r=n("18553");function a(e){let t=Object.assign({h1:"h1",a:"a",p:"p",strong:"strong",code:"code",pre:"pre",div:"div",img:"img"},(0,i.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.h1,{id:"add-client-route",children:["Add Client Route",(0,s.jsx)(t.a,{className:"header-anchor","aria-hidden":"true",href:"#add-client-route",children:"#"})]}),"\n","\n",(0,s.jsx)(t.p,{children:"In the previous chapter, we learned how to create UI components and add styles."}),"\n",(0,s.jsxs)(t.p,{children:["In this chapter, we will learn how to add ",(0,s.jsx)(t.strong,{children:"Client Route"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["Previously we have added the Archive button to the point of contact list, next we add a route ",(0,s.jsx)(t.code,{children:"/archives"}),", when accessing this route, only the point of contact of the saved file is displayed, while the original ",(0,s.jsx)(t.code,{children:"/"})," continues to display all points of contact."]}),"\n",(0,s.jsxs)(t.p,{children:["Create a new ",(0,s.jsx)(t.code,{children:"src/routes/archives/page.tsx"})," file:"]}),"\n",(0,s.jsxs)(r.Tabs,{children:[(0,s.jsx)(r.Tab,{value:"macOS",label:"macOS",default:!0,children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"mkdir -p src/routes/archives\ntouch src/routes/archives/page.tsx\n"})})}),(0,s.jsx)(r.Tab,{value:"Windows",label:"Windows",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-powershell",children:"mkdir -p src/routes/archives\nni src/routes/archives/page.tsx\n"})})})]}),"\n",(0,s.jsx)(t.p,{children:"Add the following code:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-tsx",meta:'title="src/archives/page.tsx"',children:"import { List } from 'antd';\nimport { Helmet } from '@modern-js/runtime/head';\nimport Item from '../../components/Item';\n\nconst getAvatar = (users: Array<{ name: string; email: string }>) =>\n  users.map(user => ({\n    ...user,\n    avatar: `https://api.dicebear.com/7.x/pixel-art/svg?seed=${user.name}`,\n  }));\n\nconst getMockArchivedData = () =>\n  getAvatar([\n    { name: 'Thomas', email: 'w.kccip@bllmfbgv.dm' },\n    { name: 'Chow', email: 'f.lfqljnlk@ywoefljhc.af' },\n  ]);\nfunction Index() {\n  return (\n    <div className=\"container lg mx-auto\">\n      <Helmet>\n        <title>Archives</title>\n      </Helmet>\n      <List\n        dataSource={getMockArchivedData()}\n        renderItem={info => <Item key={info.name} info={info} />}\n      />\n    </div>\n  );\n}\n\nexport default Index;\n"})}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"Helmet"})," component of ",(0,s.jsx)(t.a,{href:"https://github.com/nfl/react-helmet",target:"_blank",rel:"noopener noreferrer",children:"React Helmet"})," is used here, and the Helmet component is also added in ",(0,s.jsx)(t.code,{children:"src/routes/page.tsx"}),":"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-tsx",children:"import { Helmet } from '@modern-js/runtime/head';\n\nfunction Index() {\n  return (\n    <div className=\"container lg mx-auto\">\n      <Helmet>\n        <title>All</title>\n      </Helmet>\n      ...\n    </div>\n  );\n}\n"})}),"\n",(0,s.jsxs)(t.div,{className:"rspress-directive info",children:[(0,s.jsx)(t.div,{className:"rspress-directive-title",children:"note"}),(0,s.jsxs)(t.div,{className:"rspress-directive-content",children:[(0,s.jsx)(t.p,{children:"Modern.js integrates react-helmet by default, and can also be used in conjunction with SSR to meet SEO needs."}),"\n"]})]}),"\n",(0,s.jsxs)(t.p,{children:["Since there are multiple pages now, all of which need to use the previous Utility Class, we need to move the style file to ",(0,s.jsx)(t.code,{children:"src/routes/layout.tsx"}),":"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-tsx",children:"import 'tailwindcss/base.css';\nimport 'tailwindcss/components.css';\nimport 'tailwindcss/utilities.css';\nimport '../styles/utils.css';\n"})}),"\n",(0,s.jsxs)(t.p,{children:["Execute ",(0,s.jsx)(t.code,{children:"pnpm run dev"}),", visit ",(0,s.jsx)(t.code,{children:"http://localhost:8080"}),", you can see the full point of contact, the title of the page is All:"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/nuvjhpqnuvr/modern-website/tutorials/c04-archives.png",alt:"display1"})}),"\n",(0,s.jsxs)(t.p,{children:["Visit ",(0,s.jsx)(t.code,{children:"http://localhost:8080/archives"})," and you will only see the point of contact of the saved file with the title Archives:"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/nuvjhpqnuvr/modern-website/tutorials/c04-all.png",alt:"display"})}),"\n",(0,s.jsx)(t.p,{children:"Looking at the HTML source code of the page, you can see that the content of the two pages is the same, and different content is rendered for different URLs."}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Next we add a simple navigation bar that allows the user to toggle between the two lists"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["Open ",(0,s.jsx)(t.code,{children:"src/routes/layout.tsx"})," and import the Radio component at the top:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-tsx",children:"import { Radio } from 'antd';\n"})}),"\n",(0,s.jsx)(t.p,{children:"Then modify the top of the UI to add a set of radio group:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-tsx",meta:"{4-9}",children:'export default function Layout() {\n  return (\n    <div>\n      <div className="h-16 p-2 flex items-center justify-center">\n        <Radio.Group onChange={handleSetList} value={currentList}>\n          <Radio value="/">All</Radio>\n          <Radio value="/archives">Archives</Radio>\n        </Radio.Group>\n      </div>\n      <Outlet />\n    </div>\n  );\n}\n'})}),"\n",(0,s.jsxs)(t.p,{children:["Then we come to the implementation of ",(0,s.jsx)(t.code,{children:"currentList"})," and ",(0,s.jsx)(t.code,{children:"handleSetList"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["Introducing three React Hooks: ",(0,s.jsx)(t.code,{children:"useState"})," and ",(0,s.jsx)(t.code,{children:"useNavigate"})," and ",(0,s.jsx)(t.code,{children:"useParams"}),", as well as Ant Design's event type definition:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"import { useState } from 'react';\nimport { Radio, RadioChangeEvent } from 'antd';\nimport { Outlet, useLocation, useNavigate } from '@modern-js/runtime/router';\n"})}),"\n",(0,s.jsx)(t.p,{children:"Finally, add local state and related logic to the Layout component:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-tsx",meta:"{2-9}",children:"export default function Layout() {\n  const navigate = useNavigate();\n  const location = useLocation();\n  const [currentList, setList] = useState(location.pathname || '/');\n  const handleSetList = (e: RadioChangeEvent) => {\n    const { value } = e.target;\n    setList(value);\n    navigate(value);\n  };\n  return (\n  ...\n}\n"})}),"\n",(0,s.jsxs)(t.p,{children:["At this point, the page navigation bar implementation has been completed, and execute ",(0,s.jsx)(t.code,{children:"pnpm run dev"})," to see the effect:"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/nuvjhpqnuvr/modern-website/tutorials/c04-switch.png",alt:"display2"})}),"\n",(0,s.jsx)(t.p,{children:"Click Archives in the navigation bar, you can see that the selected state and URL of the radio box will change, the page is not refreshed, only CSR occurs."}),"\n",(0,s.jsx)(t.p,{children:"Accessing the two pages through the URL, you can see that the HTML content is different, because the page executes the logic of client routing in the SSR stage, and the HTML already contains the final render result."})]})}function o(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:t}=Object.assign({},(0,i.useMDXComponents)(),e.components);return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}var l=o;o.__RSPRESS_PAGE_META={},o.__RSPRESS_PAGE_META["en%2Ftutorials%2Ffirst-app%2Fc04-routes.mdx"]={toc:[],title:"Add Client Route"};let c={title:"Add Client Route"}},58671:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return l}});var s=n("9880");n("6171");var i=n("54234"),r=n.n(i),a=n("52219"),o=n("37637"),l=e=>{let{title:t,desc:n,href:i}=e;return(0,s.jsxs)("a",{href:(0,a.withBase)(i),target:"_blank",style:{textDecoration:"none"},className:r(o.card),children:[(0,s.jsx)("span",{className:o.title,children:t}),(0,s.jsx)("span",{className:o.desc,children:n})]})}},30777:function(e,t,n){"use strict";n.r(t),n.d(t,{FeatureLayout:function(){return r}});var s=n("9880");n("6171");var i=n("24433");let r=e=>{let{children:t}=e;return(0,s.jsx)("div",{className:i["feature-layout"],children:t})}},55478:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return l}}),n("90517"),n("54368");var s=n("9880"),i=n("39270"),r=n("4985");let a=e=>e.startsWith("http://")||e.startsWith("https://");function o(e){let{to:t,href:n,label:i,...r}=e;return(0,s.jsx)("a",{className:"linkItem",target:"_blank",href:n||t,...r,children:n&&a(n)?(0,s.jsx)("span",{children:i}):i})}function l(){let e=(0,i.useI18n)(),t=[{title:e("guide"),items:[{label:e("quickStart"),to:(0,i.useUrl)("/guides/get-started/quick-start")},{label:e("coreConcept"),to:(0,i.useUrl)("/guides/concept/entries")},{label:e("basicFeatures"),to:(0,i.useUrl)("/guides/basic-features/routes")},{label:e("advancedFeatures"),to:(0,i.useUrl)("/guides/advanced-features/rspack-start")}]},{title:"API",items:[{label:e("configuration"),to:(0,i.useUrl)("/configure/app/usage")},{label:e("command"),to:(0,i.useUrl)("/apis/app/commands")},{label:e("runtime"),to:(0,i.useUrl)("/apis/app/runtime/core/bootstrap")},{label:e("conventions"),to:(0,i.useUrl)("apis/app/hooks/src/app")}]},{title:e("topic"),items:[{label:e("microFrontend"),to:(0,i.useUrl)("/guides/topic-detail/micro-frontend/c01-introduction")},{label:e("stateManagement"),to:(0,i.useUrl)("/guides/topic-detail/model/quick-start")},{label:e("pluginSystem"),to:(0,i.useUrl)("/guides/topic-detail/framework-plugin/introduction")},{label:e("projectGenerator"),to:(0,i.useUrl)("/guides/topic-detail/generator/project")}]},{title:e("help"),items:[{label:e("changelog"),to:"https://github.com/web-infra-dev/modern.js/releases"},{label:"GitHub Issues",to:"https://github.com/web-infra-dev/modern.js/issues"},{label:e("githubDiscussion"),to:"https://github.com/web-infra-dev/modern.js/discussions"}]}],n=t.map((e,t)=>(0,s.jsxs)("div",{className:r.linkWrapper,children:[(0,s.jsx)("div",{className:r.linkTitle,children:e.title}),(0,s.jsx)("ul",{className:r.items,children:e.items.map((e,t)=>(0,s.jsx)("li",{className:r.link,children:(0,s.jsx)(o,{...e})},e.to||t))})]},t));return(0,s.jsx)("footer",{className:r.footer,children:(0,s.jsxs)("div",{className:r.wrapper,children:[(0,s.jsx)("img",{className:r.logo,src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/zq-uylkvT/ljhwZthlaukjlkulzlp/modern-logo-home-page-0209.svg"}),(0,s.jsx)("div",{className:r.linksWrapper,children:n})]})})}},85298:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return r}});var s=n("9880");n("6171");var i=n("57204"),r=e=>{let{children:t}=e;return(0,s.jsx)("div",{className:i.titleWrap,children:(0,s.jsx)("h2",{className:i.title,children:t})})}},21676:function(e,t,n){"use strict";n.r(t),n.d(t,{EN_US:function(){return s}});let s={introduction:"Introduction",quickStart:"Quick Start",slogan:"A Progressive React Framework for modern web development",secondSlogan1:"Enjoy the development experience.",secondSlogan2:"Make innovation happen faster.",feature1:"Rust Bundler",featureDesc1:"Easily switch to Rspack bundler with faster build speed.",feature2:"Integrated BFF",featureDesc2:"Develop BFF code in the same project, enjoy simple function calls.",feature3:"Nested Routes",featureDesc3:"File-as-route, comes with lots performance optimizations.",feature4:"Multi-Rendering Mode",featureDesc4:"SSR, SSG, SPR, all out of the box for you.",feature5:"CSS Solutions",featureDesc5:"CSS Modules, CSS-in-JS, Tailwind CSS, take your pick.",feature6:"Easy to Configure",featureDesc6:"Launch with zero configuration, then everything is configurable.",solutions:"Solutions",solutionsDesc1:"A progressive React framework for web development.",solutionsDesc2:"A powerful solution for npm package development.",solutionsDesc3:"An Rspack-based build tool for web development.",solutionsDesc4:"A fast Rspack-based static site generator",guide:"Guide",topic:"Topic",help:"Help",coreConcept:"Core Concept",basicFeatures:"Basic Features",advancedFeatures:"Advanced Features",configuration:"Configuration",command:"Command",runtime:"Runtime",conventions:"Conventions",microFrontend:"Micro Frontend",stateManagement:"State Management",pluginSystem:"Plugin System",projectGenerator:"Project Generator",githubDiscussion:"Github Discussion",changelog:"Changelog",doubao:"Doubao",writingo:"Writingo",volctrans:"Volctrans",shidianbaike:"Shidian Baike",xiaohe:"Xiaohe",dongchedi:"Dongchedi",volcengineDeveloper:"Volcengine Developer"}},39270:function(e,t,n){"use strict";n.r(t),n.d(t,{useUrl:function(){return o},useI18n:function(){return l}});var s=n("52219"),i=n("21676"),r=n("53724");let a={en:i.EN_US,zh:r.ZH_CN};function o(e){let t=(0,s.useLang)();return(0,s.withBase)("zh"===t?e:`/en${e}`)}function l(){let e=(0,s.useLang)();return t=>a[e][t]}},53724:function(e,t,n){"use strict";n.r(t),n.d(t,{ZH_CN:function(){return s}});let s={introduction:"\u4ECB\u7ECD",quickStart:"\u5FEB\u901F\u4E0A\u624B",slogan:"\u57FA\u4E8E React \u7684\u6E10\u8FDB\u5F0F Web \u5F00\u53D1\u6846\u67B6",secondSlogan1:"\u4EAB\u53D7\u6109\u60A6\u7684\u5F00\u53D1\u4F53\u9A8C\uFF0C",secondSlogan2:"\u8BA9\u521B\u65B0\u66F4\u5FEB\u53D1\u751F\u3002",feature1:"Rust \u6784\u5EFA",featureDesc1:"\u8F7B\u677E\u5207\u6362\u5230 Rspack \u6784\u5EFA\u5DE5\u5177\uFF0C\u7F16\u8BD1\u98DE\u5FEB\u3002",feature2:"\u4E00\u4F53\u5316\u5F00\u53D1",featureDesc2:"\u5728\u540C\u4E00\u9879\u76EE\u4E2D\u5B8C\u6210 BFF \u5F00\u53D1\uFF0C\u4EAB\u53D7\u7B80\u6D01\u7684\u51FD\u6570\u8C03\u7528\u3002",feature3:"\u5D4C\u5957\u8DEF\u7531",featureDesc3:"\u6587\u4EF6\u7CFB\u7EDF\u5373\u8DEF\u7531\uFF0C\u9644\u8D60\u5168\u5957\u6027\u80FD\u4F18\u5316\u3002",feature4:"\u591A\u6E32\u67D3\u6A21\u5F0F",featureDesc4:"SSR\u3001SSG\u3001SPR \u7B49\u591A\u79CD\u6E32\u67D3\u6A21\u5F0F\uFF0C\u901A\u901A\u5F00\u7BB1\u5373\u7528\u3002",feature5:"CSS \u65B9\u6848",featureDesc5:"CSS Modules\u3001CSS-in-JS\u3001Tailwind CSS\uFF0C\u4EFB\u4F60\u6311\u9009\u3002",feature6:"\u6613\u4E8E\u914D\u7F6E",featureDesc6:"\u4EE5\u96F6\u914D\u7F6E\u542F\u52A8\uFF0C\u7136\u540E\u4E00\u5207\u7686\u53EF\u914D\u7F6E\u3002",solutions:"\u89E3\u51B3\u65B9\u6848",solutionsDesc1:"\u57FA\u4E8E React \u7684\u6E10\u8FDB\u5F0F Web \u5F00\u53D1\u6846\u67B6\u3002",solutionsDesc2:"\u7B80\u5355\u3001\u9AD8\u6027\u80FD\u7684 npm \u5305\u5F00\u53D1\u65B9\u6848\u3002",solutionsDesc3:"\u57FA\u4E8E Rspack \u7684 Web \u6784\u5EFA\u5DE5\u5177\u3002",solutionsDesc4:"\u57FA\u4E8E Rspack \u7684\u9759\u6001\u7AD9\u70B9\u751F\u6210\u5668\u3002",guide:"\u6307\u5357",topic:"\u4E13\u9898",help:"\u5E2E\u52A9",coreConcept:"\u6838\u5FC3\u6982\u5FF5",basicFeatures:"\u57FA\u7840\u529F\u80FD",advancedFeatures:"\u8FDB\u9636\u529F\u80FD",configuration:"\u914D\u7F6E",command:"\u547D\u4EE4",runtime:"\u8FD0\u884C\u65F6",conventions:"\u76EE\u5F55\u7EA6\u5B9A",microFrontend:"\u5FAE\u524D\u7AEF",stateManagement:"\u72B6\u6001\u7BA1\u7406",pluginSystem:"\u63D2\u4EF6\u7CFB\u7EDF",projectGenerator:"\u9879\u76EE\u751F\u6210\u5668",githubDiscussion:"Github \u8BA8\u8BBA\u533A",changelog:"\u66F4\u65B0\u65E5\u5FD7",doubao:"\u8C46\u5305",writingo:"\u706B\u5C71\u5199\u4F5C",volctrans:"\u706B\u5C71\u7FFB\u8BD1",shidianbaike:"\u8BC6\u5178\u767E\u79D1",xiaohe:"\u5C0F\u8377\u5065\u5EB7",dongchedi:"\u61C2\u8F66\u5E1D",volcengineDeveloper:"\u706B\u5C71\u5F15\u64CE\u5F00\u53D1\u8005\u793E\u533A"}},18553:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return r}});var s=n("358"),i=n("35540");n.es(s,t);var r={...s.default,HomeLayout:i.default}},35540:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return f}}),n("90517"),n("54368");var s=n("9880"),i=n("90591"),r=n("52219"),a=n("6171"),o=n("58671"),l=n("85298"),c=n("30777"),d=n("55478"),u=n("39270"),h=n("56340");let p=()=>{let e=(0,u.useI18n)();return(0,s.jsx)("div",{className:h.header,children:(0,s.jsxs)("header",{className:(0,i.default)("hero hero--primary",h.heroBanner),children:[(0,s.jsxs)("h1",{className:h.title,children:[(0,s.jsx)("div",{children:"Inspire Creativity in"}),(0,s.jsx)("div",{className:h.titleGradient,children:"Modern Web Development"})]}),(0,s.jsxs)("div",{className:h.buttons,children:[(0,s.jsxs)("a",{href:(0,u.useUrl)("/guides/get-started/introduction"),className:h.leftButton,children:[e("introduction"),(0,s.jsx)("img",{width:"20",height:"20",className:h.startArrow,src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/aphqeh7uhohpquloj/modern-js/right-arrow.svg?url"})]}),(0,s.jsx)("a",{href:(0,u.useUrl)("/guides/get-started/quick-start"),className:h.rightButton,children:e("quickStart")})]})]})})};function f(){let e=(0,u.useI18n)(),{pathname:t}=(0,r.useLocation)();(0,a.useEffect)(()=>(window.MODERN_THEME="dark",()=>{window.MODERN_THEME=void 0}),[t]);let n=[{title:e("feature1"),href:(0,u.useUrl)("/guides/concept/builder"),desc:e("featureDesc1")},{title:e("feature2"),href:(0,u.useUrl)("/guides/advanced-features/bff/index"),desc:e("featureDesc2")},{title:e("feature3"),href:(0,u.useUrl)("/guides/basic-features/routes"),desc:e("featureDesc3")},{title:e("feature4"),href:(0,u.useUrl)("/guides/advanced-features/ssr"),desc:e("featureDesc4")},{title:e("feature5"),href:(0,u.useUrl)("/guides/basic-features/css"),desc:e("featureDesc5")},{title:e("feature6"),href:(0,u.useUrl)("/configure/app/usage"),desc:e("featureDesc6")}],f=(0,r.useLang)(),m=[{title:"Modern.js Framework",href:(0,u.useUrl)("/guides/get-started/introduction"),desc:e("solutionsDesc1")},{title:"Modern.js Module",href:`https://modernjs.dev/module-tools${"en"===f?"/en":""}`,desc:e("solutionsDesc2")},{title:"Modern.js Builder",href:`https://modernjs.dev/builder${"en"===f?"/en":""}`,desc:e("solutionsDesc3")},{title:"Rspress",href:`https://rspress.dev${"en"===f?"":"/zh"}`,desc:e("solutionsDesc4")}];return(0,s.jsxs)("div",{children:[(0,s.jsxs)(r.Helmet,{children:[(0,s.jsx)("html",{className:"dark"}),(0,s.jsx)("script",{children:"window.MODERN_THEME = 'dark';"}),(0,s.jsx)("style",{type:"text/css",children:`
          .rspress-doc-appearance {
            display: none!important;
          }
        `})]}),(0,s.jsx)(p,{}),(0,s.jsxs)("main",{className:h["homepage-main"],children:[(0,s.jsxs)(c.FeatureLayout,{children:[(0,s.jsx)(l.default,{children:e("solutions")}),(0,s.jsx)("div",{className:h.cardContainer,children:m.map((e,t)=>(0,s.jsx)(o.default,{title:e.title,desc:e.desc,href:e.href},t))})]}),(0,s.jsx)(c.FeatureLayout,{children:(0,s.jsxs)("h1",{className:(0,i.default)([h.title,h.titleGradient]),style:{textAlign:"left",marginBottom:32},children:[(0,s.jsx)("div",{children:e("secondSlogan1")}),(0,s.jsx)("div",{children:e("secondSlogan2")})]})}),(0,s.jsxs)(c.FeatureLayout,{children:[(0,s.jsx)(l.default,{children:"Modern.js Framework"}),(0,s.jsx)("div",{className:h.cardContainer,children:n.map((e,t)=>(0,s.jsx)(o.default,{title:e.title,desc:e.desc,href:e.href},t))})]}),(0,s.jsx)(d.default,{})]})]})}},24433:function(e,t,n){"use strict";e.exports={"feature-layout":"feature-layout-ea3480",featureLayout:"feature-layout-ea3480"}},57204:function(e,t,n){"use strict";e.exports={title:"title-cfbf64",title:"title-cfbf64",titleWrap:"titleWrap-_245ce",titleWrap:"titleWrap-_245ce"}},37637:function(e,t,n){"use strict";e.exports={card:"card-_1c4af",card:"card-_1c4af",desc:"desc-a85d41",desc:"desc-a85d41",icon:"icon-_02dc1",icon:"icon-_02dc1",title:"title-b44362",title:"title-b44362"}},4985:function(e,t,n){"use strict";e.exports={footer:"footer-_1419c",footer:"footer-_1419c",link:"link-fff29d",link:"link-fff29d",linkTitle:"linkTitle-c4002f",linkTitle:"linkTitle-c4002f",linkWrapper:"linkWrapper-_1b066",linkWrapper:"linkWrapper-_1b066",linksWrapper:"linksWrapper-_4f8ed",linksWrapper:"linksWrapper-_4f8ed",logo:"logo-_22a8c",logo:"logo-_22a8c",wrapper:"wrapper-b33135",wrapper:"wrapper-b33135"}},56340:function(e,t,n){"use strict";e.exports={buttons:"buttons-e3d388",buttons:"buttons-e3d388",cardContainer:"cardContainer-_79b2f",cardContainer:"cardContainer-_79b2f",flowContainer:"flowContainer-_225bb",flowContainer:"flowContainer-_225bb",flowLine:"flowLine-a3999c",flowLine:"flowLine-a3999c",flowLineMobile:"flowLineMobile-_4fe65",flowLineMobile:"flowLineMobile-_4fe65",header:"header-_720aa",header:"header-_720aa",heroBanner:"heroBanner-_85caa",heroBanner:"heroBanner-_85caa","homepage-main":"homepage-main-_77128",homepageMain:"homepage-main-_77128",leftButton:"leftButton-_7ef36",leftButton:"leftButton-_7ef36",logo:"logo-_9cf1f",logo:"logo-_9cf1f",rightButton:"rightButton-_91c6e",rightButton:"rightButton-_91c6e","section-title":"section-title-dc2851",sectionTitle:"section-title-dc2851",singleImg:"singleImg-_71172",singleImg:"singleImg-_71172",singleImgCard:"singleImgCard-_1456f",singleImgCard:"singleImgCard-_1456f",singleImgWrap:"singleImgWrap-_12f4b",singleImgWrap:"singleImgWrap-_12f4b",startArrow:"startArrow-c03ec9",startArrow:"startArrow-c03ec9",title:"title-_6c4ac",title:"title-_6c4ac",titleGradient:"titleGradient-_84d55",titleGradient:"titleGradient-_84d55"}}}]);