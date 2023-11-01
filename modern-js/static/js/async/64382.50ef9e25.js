(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["64382"],{90591:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return r}});var r=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=function e(t){var n,r,s="";if("string"==typeof t||"number"==typeof t)s+=t;else if("object"==typeof t){if(Array.isArray(t))for(n=0;n<t.length;n++)t[n]&&(r=e(t[n]))&&(s&&(s+=" "),s+=r);else for(n in t)t[n]&&(s&&(s+=" "),s+=n)}return s}(e))&&(r&&(r+=" "),r+=t);return r}},99152:function(e,t,n){"use strict";n.r(t);var r=n("33035");n.es(r,t)},43451:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return l},frontmatter:function(){return c}});var r=n("9880"),s=n("23169"),i=n("18553");function a(e){let t=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",h3:"h3",ul:"ul",li:"li",strong:"strong",code:"code",h4:"h4",pre:"pre",div:"div"},(0,s.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.h1,{id:"\u603B\u89C8",children:["\u603B\u89C8",(0,r.jsx)(t.a,{className:"header-anchor","aria-hidden":"true",href:"#\u603B\u89C8",children:"#"})]}),"\n",(0,r.jsx)(t.p,{children:"\u6B64\u8282\u5C06\u4ECB\u7ECD Runtime \u63D2\u4EF6\u7684\u914D\u7F6E\u3002"}),"\n",(0,r.jsxs)(t.h2,{id:"\u914D\u7F6E\u65B9\u5F0F",children:["\u914D\u7F6E\u65B9\u5F0F",(0,r.jsx)(t.a,{className:"header-anchor","aria-hidden":"true",href:"#\u914D\u7F6E\u65B9\u5F0F",children:"#"})]}),"\n",(0,r.jsxs)(t.h3,{id:"runtime",children:["runtime",(0,r.jsx)(t.a,{className:"header-anchor","aria-hidden":"true",href:"#runtime",children:"#"})]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"\u7C7B\u578B\uFF1A"})," ",(0,r.jsx)(t.code,{children:"Object"})]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"runtime \u914D\u7F6E\u65B9\u5F0F\u5982\u4E0B\uFF1A"}),"\n",(0,r.jsxs)(t.h4,{id:"\u57FA\u672C\u7528\u6CD5",children:["\u57FA\u672C\u7528\u6CD5",(0,r.jsx)(t.a,{className:"header-anchor","aria-hidden":"true",href:"#\u57FA\u672C\u7528\u6CD5",children:"#"})]}),"\n",(0,r.jsxs)(t.p,{children:["\u5728 ",(0,r.jsx)(t.code,{children:"modern.config.ts"})," \u4E2D\u914D\u7F6E"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import { defineConfig } from '@modern-js/app-tools';\n\nexport default defineConfig({\n  runtime: {\n    state: true,\n    router: true,\n  },\n});\n"})}),"\n",(0,r.jsxs)(t.h4,{id:"\u8FD0\u884C\u65F6\u914D\u7F6E",children:["\u8FD0\u884C\u65F6\u914D\u7F6E",(0,r.jsx)(t.a,{className:"header-anchor","aria-hidden":"true",href:"#\u8FD0\u884C\u65F6\u914D\u7F6E",children:"#"})]}),"\n",(0,r.jsxs)(t.p,{children:["\u901A\u8FC7 ",(0,r.jsx)(t.a,{href:"/apis/app/runtime/app/define-config",children:(0,r.jsx)(t.code,{children:"defineConfig"})})," API \u914D\u7F6E\uFF1A"]}),"\n",(0,r.jsxs)(t.div,{className:"rspress-directive info",children:[(0,r.jsx)(t.div,{className:"rspress-directive-title",children:"INFO"}),(0,r.jsxs)(t.div,{className:"rspress-directive-content",children:[(0,r.jsx)(t.p,{children:"\u5F53 runtime \u914D\u7F6E\u4E2D\u5B58\u5728\u51FD\u6570\u65F6\uFF0C\u53EA\u80FD\u4F7F\u7528\u8BE5\u65B9\u5F0F\u8FDB\u884C\u914D\u7F6E\u3002"}),"\n"]})]}),"\n","\n",(0,r.jsxs)(i.Tabs,{children:[(0,r.jsx)(i.Tab,{value:"layout",label:"\u7EA6\u5B9A\u5F0F\u8DEF\u7531",default:!0,children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",meta:'title="src/routes/layout.tsx"',children:"import type { AppConfig } from '@modern-js/runtime';\n\nexport const config = (): AppConfig => {\n  return {\n    router: {\n      supportHtml5History: false\n    }\n  }\n};\n"})})}),(0,r.jsx)(i.Tab,{value:"app",label:"\u81EA\u63A7\u8DEF\u7531",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",meta:'title="src/App.tsx"',children:"import { defineConfig } from '@modern-js/runtime';\n\nconst App = () => {\n  /** */\n};\n\ndefineConfig(App, {\n  router: {\n    supportHtml5History: false,\n  },\n});\n\nexport default App;\n"})})})]}),"\n",(0,r.jsxs)(t.div,{className:"rspress-directive info",children:[(0,r.jsx)(t.div,{className:"rspress-directive-title",children:"INFO"}),(0,r.jsxs)(t.div,{className:"rspress-directive-content",children:[(0,r.jsx)(t.p,{children:"\u4F7F\u7528\u8FD0\u884C\u65F6\u914D\u7F6E\uFF0C\u53EF\u4EE5\u89E3\u51B3 Runtime \u63D2\u4EF6\u914D\u7F6E\u9700\u8981\u5728\u8FD0\u884C\u65F6\u624D\u80FD\u83B7\u53D6\u5230\u5177\u4F53\u5185\u5BB9\u95EE\u9898\u3002"}),"\n",(0,r.jsxs)(t.p,{children:["Runtime \u63D2\u4EF6\u8FD0\u884C\u65F6\u914D\u7F6E\u548C\u76F4\u63A5\u5728 ",(0,r.jsx)(t.code,{children:"modern.config.ts"})," \u4E2D\u7684\u914D\u7F6E\u9ED8\u8BA4\u4F1A\u8FDB\u884C\u5408\u5E76\uFF0C\u4E14\u8FD0\u884C\u65F6\u914D\u7F6E\u4F18\u5148\u7EA7\u66F4\u9AD8\u3002"]}),"\n"]})]}),"\n",(0,r.jsxs)(t.div,{className:"rspress-directive warning",children:[(0,r.jsx)(t.div,{className:"rspress-directive-title",children:"WARNING"}),(0,r.jsxs)(t.div,{className:"rspress-directive-content",children:[(0,r.jsxs)(t.p,{children:["defineConfig \u4E2D\u53EA\u80FD\u5B9A\u4E49 Runtime \u63D2\u4EF6\u7684\u5177\u4F53\u914D\u7F6E\u5185\u5BB9\uFF0C\u786E\u8BA4\u662F\u5426\u5F00\u542F\u63D2\u4EF6\u8FD8\u9700\u8981\u901A\u8FC7 ",(0,r.jsx)(t.code,{children:"modern.config.ts"})," \u4E2D\u7684\u914D\u7F6E\u51B3\u5B9A\u3002"]}),"\n"]})]}),"\n",(0,r.jsxs)(t.h3,{id:"runtimebyentries",children:["runtimeByEntries",(0,r.jsx)(t.a,{className:"header-anchor","aria-hidden":"true",href:"#runtimebyentries",children:"#"})]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"\u7C7B\u578B\uFF1A"})," ",(0,r.jsx)(t.code,{children:"Object"})]}),"\n",(0,r.jsx)(t.li,{children:"**\u9ED8\u8BA4\u503C\uFF1A**\u65E0"}),"\n"]}),"\n",(0,r.jsxs)(t.h4,{id:"\u8BF4\u660E",children:["\u8BF4\u660E",(0,r.jsx)(t.a,{className:"header-anchor","aria-hidden":"true",href:"#\u8BF4\u660E",children:"#"})]}),"\n",(0,r.jsx)(t.p,{children:"\u6309\u5165\u53E3\u6DFB\u52A0 runtime \u914D\u7F6E\uFF0C\u9009\u9879\u5C5E\u6027\u540C runtime \u4E00\u81F4\uFF0C\u6307\u5B9A\u503C\u4F1A\u548C runtime \u5C5E\u6027\u5185\u5BB9\u505A\u66FF\u6362\u5408\u5E76\u64CD\u4F5C\u3002"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import { defineConfig } from '@modern-js/app-tools';\n\nexport default defineConfig({\n  runtime: {\n    state: false,\n  },\n  runtimeByEntries: {\n    entry1: {\n      state: true, // { state: true }\n    },\n    entry2: {\n      // { state: false, router: true }\n      router: true,\n    },\n  },\n});\n"})})]})}function o(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:t}=Object.assign({},(0,s.useMDXComponents)(),e.components);return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}var l=o;o.__RSPRESS_PAGE_META={},o.__RSPRESS_PAGE_META["zh%2Fconfigure%2Fapp%2Fruntime%2Fintro.mdx"]={toc:[{text:"\u914D\u7F6E\u65B9\u5F0F",id:"\u914D\u7F6E\u65B9\u5F0F",depth:2},{text:"runtime",id:"runtime",depth:3},{text:"\u57FA\u672C\u7528\u6CD5",id:"\u57FA\u672C\u7528\u6CD5",depth:4},{text:"\u8FD0\u884C\u65F6\u914D\u7F6E",id:"\u8FD0\u884C\u65F6\u914D\u7F6E",depth:4},{text:"runtimeByEntries",id:"runtimebyentries",depth:3},{text:"\u8BF4\u660E",id:"\u8BF4\u660E",depth:4}],title:"\u603B\u89C8"};let c={sidebar_label:"\u603B\u89C8",sidebar_position:1}},33035:function(e,t,n){"use strict";n.r(t);var r=n("34290");n.es(r,t)},58671:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return l}});var r=n("9880");n("6171");var s=n("54234"),i=n.n(s),a=n("99152"),o=n("47419"),l=e=>{let{title:t,desc:n,href:s}=e;return(0,r.jsxs)("a",{href:(0,a.withBase)(s),target:"_blank",style:{textDecoration:"none"},className:i(o.card),children:[(0,r.jsx)("span",{className:o.title,children:t}),(0,r.jsx)("span",{className:o.desc,children:n})]})}},30777:function(e,t,n){"use strict";n.r(t),n.d(t,{FeatureLayout:function(){return i}});var r=n("9880");n("6171");var s=n("73753");let i=e=>{let{children:t}=e;return(0,r.jsx)("div",{className:s["feature-layout"],children:t})}},55478:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return l}});var r=n("9880"),s=n("39270"),i=n("80706");let a=e=>e.startsWith("http://")||e.startsWith("https://");function o(e){let{to:t,href:n,label:s,...i}=e;return(0,r.jsx)("a",{className:"linkItem",target:"_blank",href:n||t,...i,children:n&&a(n)?(0,r.jsx)("span",{children:s}):s})}function l(){let e=(0,s.useI18n)(),t=[{title:e("guide"),items:[{label:e("quickStart"),to:(0,s.useUrl)("/guides/get-started/quick-start")},{label:e("coreConcept"),to:(0,s.useUrl)("/guides/concept/entries")},{label:e("basicFeatures"),to:(0,s.useUrl)("/guides/basic-features/routes")},{label:e("advancedFeatures"),to:(0,s.useUrl)("/guides/advanced-features/rspack-start")}]},{title:"API",items:[{label:e("configuration"),to:(0,s.useUrl)("/configure/app/usage")},{label:e("command"),to:(0,s.useUrl)("/apis/app/commands")},{label:e("runtime"),to:(0,s.useUrl)("/apis/app/runtime/core/bootstrap")},{label:e("conventions"),to:(0,s.useUrl)("apis/app/hooks/src/app")}]},{title:e("topic"),items:[{label:e("microFrontend"),to:(0,s.useUrl)("/guides/topic-detail/micro-frontend/c01-introduction")},{label:e("stateManagement"),to:(0,s.useUrl)("/guides/topic-detail/model/quick-start")},{label:e("pluginSystem"),to:(0,s.useUrl)("/guides/topic-detail/framework-plugin/introduction")},{label:e("projectGenerator"),to:(0,s.useUrl)("/guides/topic-detail/generator/project")}]},{title:e("help"),items:[{label:e("changelog"),to:"https://github.com/web-infra-dev/modern.js/releases"},{label:"GitHub Issues",to:"https://github.com/web-infra-dev/modern.js/issues"},{label:e("githubDiscussion"),to:"https://github.com/web-infra-dev/modern.js/discussions"}]}],n=t.map((e,t)=>(0,r.jsxs)("div",{className:i.linkWrapper,children:[(0,r.jsx)("div",{className:i.linkTitle,children:e.title}),(0,r.jsx)("ul",{className:i.items,children:e.items.map((e,t)=>(0,r.jsx)("li",{className:i.link,children:(0,r.jsx)(o,{...e})},e.to||t))})]},t));return(0,r.jsx)("footer",{className:i.footer,children:(0,r.jsxs)("div",{className:i.wrapper,children:[(0,r.jsx)("img",{className:i.logo,src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/zq-uylkvT/ljhwZthlaukjlkulzlp/modern-logo-home-page-0209.svg"}),(0,r.jsx)("div",{className:i.linksWrapper,children:n})]})})}},85298:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return i}});var r=n("9880");n("6171");var s=n("58506"),i=e=>{let{children:t}=e;return(0,r.jsx)("div",{className:s.titleWrap,children:(0,r.jsx)("h2",{className:s.title,children:t})})}},21676:function(e,t,n){"use strict";n.r(t),n.d(t,{EN_US:function(){return r}});let r={introduction:"Introduction",quickStart:"Quick Start",slogan:"A Progressive React Framework for modern web development",secondSlogan1:"Enjoy the development experience.",secondSlogan2:"Make innovation happen faster.",feature1:"Rust Bundler",featureDesc1:"Easily switch to Rspack bundler with faster build speed.",feature2:"Integrated BFF",featureDesc2:"Develop BFF code in the same project, enjoy simple function calls.",feature3:"Nested Routes",featureDesc3:"File-as-route, comes with lots performance optimizations.",feature4:"Multi-Rendering Mode",featureDesc4:"SSR, SSG, SPR, all out of the box for you.",feature5:"CSS Solutions",featureDesc5:"CSS Modules, CSS-in-JS, Tailwind CSS, take your pick.",feature6:"Easy to Configure",featureDesc6:"Launch with zero configuration, then everything is configurable.",solutions:"Solutions",solutionsDesc1:"A progressive React framework for web development.",solutionsDesc2:"A powerful solution for npm package development.",solutionsDesc3:"An Rspack-based build tool for web development.",solutionsDesc4:"A fast Rspack-based static site generator",guide:"Guide",topic:"Topic",help:"Help",coreConcept:"Core Concept",basicFeatures:"Basic Features",advancedFeatures:"Advanced Features",configuration:"Configuration",command:"Command",runtime:"Runtime",conventions:"Conventions",microFrontend:"Micro Frontend",stateManagement:"State Management",pluginSystem:"Plugin System",projectGenerator:"Project Generator",githubDiscussion:"Github Discussion",changelog:"Changelog",doubao:"Doubao",writingo:"Writingo",volctrans:"Volctrans",shidianbaike:"Shidian Baike",xiaohe:"Xiaohe",dongchedi:"Dongchedi",volcengineDeveloper:"Volcengine Developer"}},39270:function(e,t,n){"use strict";n.r(t),n.d(t,{useUrl:function(){return o},useI18n:function(){return l}});var r=n("99152"),s=n("21676"),i=n("53724");let a={en:s.EN_US,zh:i.ZH_CN};function o(e){let t=(0,r.useLang)();return(0,r.withBase)("zh"===t?e:`/en${e}`)}function l(){let e=(0,r.useLang)();return t=>a[e][t]}},53724:function(e,t,n){"use strict";n.r(t),n.d(t,{ZH_CN:function(){return r}});let r={introduction:"\u4ECB\u7ECD",quickStart:"\u5FEB\u901F\u4E0A\u624B",slogan:"\u57FA\u4E8E React \u7684\u6E10\u8FDB\u5F0F Web \u5F00\u53D1\u6846\u67B6",secondSlogan1:"\u4EAB\u53D7\u6109\u60A6\u7684\u5F00\u53D1\u4F53\u9A8C\uFF0C",secondSlogan2:"\u8BA9\u521B\u65B0\u66F4\u5FEB\u53D1\u751F\u3002",feature1:"Rust \u6784\u5EFA",featureDesc1:"\u8F7B\u677E\u5207\u6362\u5230 Rspack \u6784\u5EFA\u5DE5\u5177\uFF0C\u7F16\u8BD1\u98DE\u5FEB\u3002",feature2:"\u4E00\u4F53\u5316\u5F00\u53D1",featureDesc2:"\u5728\u540C\u4E00\u9879\u76EE\u4E2D\u5B8C\u6210 BFF \u5F00\u53D1\uFF0C\u4EAB\u53D7\u7B80\u6D01\u7684\u51FD\u6570\u8C03\u7528\u3002",feature3:"\u5D4C\u5957\u8DEF\u7531",featureDesc3:"\u6587\u4EF6\u7CFB\u7EDF\u5373\u8DEF\u7531\uFF0C\u9644\u8D60\u5168\u5957\u6027\u80FD\u4F18\u5316\u3002",feature4:"\u591A\u6E32\u67D3\u6A21\u5F0F",featureDesc4:"SSR\u3001SSG\u3001SPR \u7B49\u591A\u79CD\u6E32\u67D3\u6A21\u5F0F\uFF0C\u901A\u901A\u5F00\u7BB1\u5373\u7528\u3002",feature5:"CSS \u65B9\u6848",featureDesc5:"CSS Modules\u3001CSS-in-JS\u3001Tailwind CSS\uFF0C\u4EFB\u4F60\u6311\u9009\u3002",feature6:"\u6613\u4E8E\u914D\u7F6E",featureDesc6:"\u4EE5\u96F6\u914D\u7F6E\u542F\u52A8\uFF0C\u7136\u540E\u4E00\u5207\u7686\u53EF\u914D\u7F6E\u3002",solutions:"\u89E3\u51B3\u65B9\u6848",solutionsDesc1:"\u57FA\u4E8E React \u7684\u6E10\u8FDB\u5F0F Web \u5F00\u53D1\u6846\u67B6\u3002",solutionsDesc2:"\u7B80\u5355\u3001\u9AD8\u6027\u80FD\u7684 npm \u5305\u5F00\u53D1\u65B9\u6848\u3002",solutionsDesc3:"\u57FA\u4E8E Rspack \u7684 Web \u6784\u5EFA\u5DE5\u5177\u3002",solutionsDesc4:"\u57FA\u4E8E Rspack \u7684\u9759\u6001\u7AD9\u70B9\u751F\u6210\u5668\u3002",guide:"\u6307\u5357",topic:"\u4E13\u9898",help:"\u5E2E\u52A9",coreConcept:"\u6838\u5FC3\u6982\u5FF5",basicFeatures:"\u57FA\u7840\u529F\u80FD",advancedFeatures:"\u8FDB\u9636\u529F\u80FD",configuration:"\u914D\u7F6E",command:"\u547D\u4EE4",runtime:"\u8FD0\u884C\u65F6",conventions:"\u76EE\u5F55\u7EA6\u5B9A",microFrontend:"\u5FAE\u524D\u7AEF",stateManagement:"\u72B6\u6001\u7BA1\u7406",pluginSystem:"\u63D2\u4EF6\u7CFB\u7EDF",projectGenerator:"\u9879\u76EE\u751F\u6210\u5668",githubDiscussion:"Github \u8BA8\u8BBA\u533A",changelog:"\u66F4\u65B0\u65E5\u5FD7",doubao:"\u8C46\u5305",writingo:"\u706B\u5C71\u5199\u4F5C",volctrans:"\u706B\u5C71\u7FFB\u8BD1",shidianbaike:"\u8BC6\u5178\u767E\u79D1",xiaohe:"\u5C0F\u8377\u5065\u5EB7",dongchedi:"\u61C2\u8F66\u5E1D",volcengineDeveloper:"\u706B\u5C71\u5F15\u64CE\u5F00\u53D1\u8005\u793E\u533A"}},18553:function(e,t,n){"use strict";n.r(t);var r=n("15920"),s=n("35540");n.es(r,t),{...r.default,HomeLayout:s.default}},35540:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return p}});var r=n("9880"),s=n("90591"),i=n("99152"),a=n("6171"),o=n("58671"),l=n("85298"),c=n("30777"),d=n("55478"),u=n("39270"),f=n("44178");let h=()=>{let e=(0,u.useI18n)();return(0,r.jsx)("div",{className:f.header,children:(0,r.jsxs)("header",{className:(0,s.default)("hero hero--primary",f.heroBanner),children:[(0,r.jsxs)("h1",{className:f.title,children:[(0,r.jsx)("div",{children:"Inspire Creativity in"}),(0,r.jsx)("div",{className:f.titleGradient,children:"Modern Web Development"})]}),(0,r.jsxs)("div",{className:f.buttons,children:[(0,r.jsxs)("a",{href:(0,u.useUrl)("/guides/get-started/introduction"),className:f.leftButton,children:[e("introduction"),(0,r.jsx)("img",{width:"20",height:"20",className:f.startArrow,src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/aphqeh7uhohpquloj/modern-js/right-arrow.svg?url"})]}),(0,r.jsx)("a",{href:(0,u.useUrl)("/guides/get-started/quick-start"),className:f.rightButton,children:e("quickStart")})]})]})})};function p(){let e=(0,u.useI18n)(),{pathname:t}=(0,i.useLocation)();(0,a.useEffect)(()=>(window.MODERN_THEME="dark",()=>{window.MODERN_THEME=void 0}),[t]);let n=[{title:e("feature1"),href:(0,u.useUrl)("/guides/concept/builder"),desc:e("featureDesc1")},{title:e("feature2"),href:(0,u.useUrl)("/guides/advanced-features/bff/index"),desc:e("featureDesc2")},{title:e("feature3"),href:(0,u.useUrl)("/guides/basic-features/routes"),desc:e("featureDesc3")},{title:e("feature4"),href:(0,u.useUrl)("/guides/advanced-features/ssr"),desc:e("featureDesc4")},{title:e("feature5"),href:(0,u.useUrl)("/guides/basic-features/css"),desc:e("featureDesc5")},{title:e("feature6"),href:(0,u.useUrl)("/configure/app/usage"),desc:e("featureDesc6")}],p=(0,i.useLang)(),m=[{title:"Modern.js Framework",href:(0,u.useUrl)("/guides/get-started/introduction"),desc:e("solutionsDesc1")},{title:"Modern.js Module",href:`https://modernjs.dev/module-tools${"en"===p?"/en":""}`,desc:e("solutionsDesc2")},{title:"Modern.js Builder",href:`https://modernjs.dev/builder${"en"===p?"/en":""}`,desc:e("solutionsDesc3")},{title:"Rspress",href:`https://rspress.dev${"en"===p?"":"/zh"}`,desc:e("solutionsDesc4")}];return(0,r.jsxs)("div",{children:[(0,r.jsxs)(i.Helmet,{children:[(0,r.jsx)("html",{className:"dark"}),(0,r.jsx)("script",{children:"window.MODERN_THEME = 'dark';"}),(0,r.jsx)("style",{type:"text/css",children:`
          .rspress-doc-appearance {
            display: none!important;
          }
        `})]}),(0,r.jsx)(h,{}),(0,r.jsxs)("main",{className:f["homepage-main"],children:[(0,r.jsxs)(c.FeatureLayout,{children:[(0,r.jsx)(l.default,{children:e("solutions")}),(0,r.jsx)("div",{className:f.cardContainer,children:m.map((e,t)=>(0,r.jsx)(o.default,{title:e.title,desc:e.desc,href:e.href},t))})]}),(0,r.jsx)(c.FeatureLayout,{children:(0,r.jsxs)("h1",{className:(0,s.default)([f.title,f.titleGradient]),style:{textAlign:"left",marginBottom:32},children:[(0,r.jsx)("div",{children:e("secondSlogan1")}),(0,r.jsx)("div",{children:e("secondSlogan2")})]})}),(0,r.jsxs)(c.FeatureLayout,{children:[(0,r.jsx)(l.default,{children:"Modern.js Framework"}),(0,r.jsx)("div",{className:f.cardContainer,children:n.map((e,t)=>(0,r.jsx)(o.default,{title:e.title,desc:e.desc,href:e.href},t))})]}),(0,r.jsx)(d.default,{})]})]})}},73753:function(e,t,n){"use strict";e.exports={"feature-layout":"feature-layout-ea3480",featureLayout:"feature-layout-ea3480"}},58506:function(e,t,n){"use strict";e.exports={title:"title-cfbf64",title:"title-cfbf64",titleWrap:"titleWrap-_245ce",titleWrap:"titleWrap-_245ce"}},47419:function(e,t,n){"use strict";e.exports={card:"card-_1c4af",card:"card-_1c4af",desc:"desc-a85d41",desc:"desc-a85d41",icon:"icon-_02dc1",icon:"icon-_02dc1",title:"title-b44362",title:"title-b44362"}},80706:function(e,t,n){"use strict";e.exports={footer:"footer-_1419c",footer:"footer-_1419c",link:"link-fff29d",link:"link-fff29d",linkTitle:"linkTitle-c4002f",linkTitle:"linkTitle-c4002f",linkWrapper:"linkWrapper-_1b066",linkWrapper:"linkWrapper-_1b066",linksWrapper:"linksWrapper-_4f8ed",linksWrapper:"linksWrapper-_4f8ed",logo:"logo-_22a8c",logo:"logo-_22a8c",wrapper:"wrapper-b33135",wrapper:"wrapper-b33135"}},44178:function(e,t,n){"use strict";e.exports={buttons:"buttons-e3d388",buttons:"buttons-e3d388",cardContainer:"cardContainer-_79b2f",cardContainer:"cardContainer-_79b2f",flowContainer:"flowContainer-_225bb",flowContainer:"flowContainer-_225bb",flowLine:"flowLine-a3999c",flowLine:"flowLine-a3999c",flowLineMobile:"flowLineMobile-_4fe65",flowLineMobile:"flowLineMobile-_4fe65",header:"header-_720aa",header:"header-_720aa",heroBanner:"heroBanner-_85caa",heroBanner:"heroBanner-_85caa","homepage-main":"homepage-main-_77128",homepageMain:"homepage-main-_77128",leftButton:"leftButton-_7ef36",leftButton:"leftButton-_7ef36",logo:"logo-_9cf1f",logo:"logo-_9cf1f",rightButton:"rightButton-_91c6e",rightButton:"rightButton-_91c6e","section-title":"section-title-dc2851",sectionTitle:"section-title-dc2851",singleImg:"singleImg-_71172",singleImg:"singleImg-_71172",singleImgCard:"singleImgCard-_1456f",singleImgCard:"singleImgCard-_1456f",singleImgWrap:"singleImgWrap-_12f4b",singleImgWrap:"singleImgWrap-_12f4b",startArrow:"startArrow-c03ec9",startArrow:"startArrow-c03ec9",title:"title-_6c4ac",title:"title-_6c4ac",titleGradient:"titleGradient-_84d55",titleGradient:"titleGradient-_84d55"}}}]);