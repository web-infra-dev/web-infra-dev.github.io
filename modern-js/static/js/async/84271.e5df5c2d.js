(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["84271"],{68140:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return l}});var r=n("9880"),s=n("23169"),i=n("18553");function a(e){let t=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",a:"a",h3:"h3",pre:"pre",img:"img",div:"div"},(0,s.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"\u7C7B\u578B\uFF1A"})," ",(0,r.jsx)(t.code,{children:"string | Object"})]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"\u9ED8\u8BA4\u503C\uFF1A"})," ",(0,r.jsx)(t.code,{children:"null"})]}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["\u8BE5\u9009\u9879\u7528\u4E8E\u5728\u5F00\u53D1\u73AF\u5883\u4E0B\u542F\u7528\u57FA\u4E8E ",(0,r.jsx)(t.a,{href:"https://wproxy.org/whistle/",target:"_blank",rel:"noopener noreferrer",children:"whistle"})," \u7684\u5168\u5C40\u4EE3\u7406\uFF0C\u53EF\u4EE5\u7528\u6765\u67E5\u770B\u3001\u4FEE\u6539 HTTP/HTTPS \u8BF7\u6C42\u3001\u54CD\u5E94\u3001\u4E5F\u53EF\u4EE5\u7528\u4F5C\u4EE3\u7406\u670D\u52A1\u5668\u3002"]}),"\n",(0,r.jsxs)(t.h3,{id:"\u6CE8\u518C\u63D2\u4EF6",children:["\u6CE8\u518C\u63D2\u4EF6",(0,r.jsx)(t.a,{className:"header-anchor","aria-hidden":"true",href:"#\u6CE8\u518C\u63D2\u4EF6",children:"#"})]}),"\n",(0,r.jsxs)(t.p,{children:["\u4F7F\u7528\u8BE5\u9009\u9879\u524D\uFF0C\u4F60\u9700\u8981\u63D0\u524D\u5B89\u88C5\u548C\u6CE8\u518C ",(0,r.jsx)(t.code,{children:"@modern-js/plugin-proxy"})," \u63D2\u4EF6\uFF1A"]}),"\n","\n",(0,r.jsx)(i.PackageManagerTabs,{command:"add @modern-js/plugin-proxy -D"}),"\n",(0,r.jsxs)(t.p,{children:["\u5B89\u88C5\u5B8C\u6210\u540E\uFF0C\u5728 ",(0,r.jsx)(t.code,{children:"modern.config.ts"})," \u6587\u4EF6\u4E2D\u6CE8\u518C\u63D2\u4EF6\uFF1A"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import { appTools, defineConfig } from '@modern-js/app-tools';\nimport { proxyPlugin } from '@modern-js/plugin-proxy';\n\nexport default defineConfig({\n  plugins: [appTools(), proxyPlugin()],\n});\n"})}),"\n",(0,r.jsxs)(t.h3,{id:"object-\u7C7B\u578B",children:["Object \u7C7B\u578B",(0,r.jsx)(t.a,{className:"header-anchor","aria-hidden":"true",href:"#object-\u7C7B\u578B",children:"#"})]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"dev.proxy"})," \u7684\u503C\u4E3A ",(0,r.jsx)(t.code,{children:"Object"})," \u65F6\uFF0C\u5BF9\u8C61\u7684 ",(0,r.jsx)(t.code,{children:"key"})," \u5BF9\u5E94\u5339\u914D\u7684 ",(0,r.jsx)(t.code,{children:"pattern"}),"\uFF0C\u5BF9\u8C61\u7684 ",(0,r.jsx)(t.code,{children:"value"})," \u5BF9\u5E94\u5339\u914D\u7684 ",(0,r.jsx)(t.code,{children:"target"}),"\u3002"]}),"\n",(0,r.jsx)(t.p,{children:"\u4F8B\u5982\uFF1A"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"export default defineConfig({\n  dev: {\n    proxy: {\n      'https://www.baidu.com': 'https://google.com.hk',\n      //\u53EF\u4EE5\u901A\u8FC7 file \u534F\u8BAE\u76F4\u63A5\u8FD4\u56DE\u9759\u6001\u6587\u4EF6\u3002\n      'https://example.com/api': 'file://./data.json',\n    },\n  },\n});\n"})}),"\n",(0,r.jsxs)(t.p,{children:["\u8BF7\u53C2\u8003 ",(0,r.jsx)(t.a,{href:"https://wproxy.org/whistle/pattern.html",target:"_blank",rel:"noopener noreferrer",children:"whistle - \u5339\u914D\u6A21\u5F0F"})," \u6765\u4E86\u89E3\u8BE6\u7EC6\u7528\u6CD5\u3002"]}),"\n",(0,r.jsxs)(t.h3,{id:"string-\u7C7B\u578B",children:["String \u7C7B\u578B",(0,r.jsx)(t.a,{className:"header-anchor","aria-hidden":"true",href:"#string-\u7C7B\u578B",children:"#"})]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"dev.proxy"})," \u7684\u503C\u4E3A ",(0,r.jsx)(t.code,{children:"string"})," \u65F6\uFF0C \u53EF\u4EE5\u7528\u6765\u6307\u5B9A\u5355\u72EC\u7684\u4EE3\u7406\u6587\u4EF6\uFF0C\u4F8B\u5982\uFF1A"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"export default defineConfig({\n  dev: {\n    proxy: './proxy.js',\n  },\n});\n"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",meta:'title="proxy.js"',children:"module.exports = {\n  name: 'my-app',\n  rules: `\n    ^example.com:8080/api/***   http://localhost:3001/api/$\n  `,\n};\n"})}),"\n",(0,r.jsxs)(t.h3,{id:"\u542F\u52A8\u4EE3\u7406",children:["\u542F\u52A8\u4EE3\u7406",(0,r.jsx)(t.a,{className:"header-anchor","aria-hidden":"true",href:"#\u542F\u52A8\u4EE3\u7406",children:"#"})]}),"\n",(0,r.jsxs)(t.p,{children:["\u6267\u884C ",(0,r.jsx)(t.code,{children:"dev"}),", \u63D0\u793A\u5982\u4E0B\u65F6\uFF0C\u5373\u4EE3\u7406\u670D\u52A1\u5668\u542F\u52A8\u6210\u529F\uFF1A"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"  Local:    http://localhost:8080/\n  Network:  http://192.168.0.1:8080/\n\ninfo      Starting proxy server.....\nsuccess   Proxy server start on localhost:8899\n"})}),"\n",(0,r.jsxs)(t.p,{children:["\u8BBF\u95EE ",(0,r.jsx)(t.code,{children:"localhost:8899"}),", \u53EF\u4EE5\u5728 UI \u754C\u9762\u4E0A\u67E5\u770B Network \u4EE5\u53CA\u914D\u7F6E\u4EE3\u7406\u89C4\u5219\uFF1A"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/aphqeh7uhohpquloj/modern-js/docs/dev-proxy.png",alt:"proxy ui \u754C\u9762"})}),"\n",(0,r.jsxs)(t.div,{className:"rspress-directive info",children:[(0,r.jsx)(t.div,{className:"rspress-directive-title",children:"INFO"}),(0,r.jsxs)(t.div,{className:"rspress-directive-content",children:[(0,r.jsxs)(t.p,{children:["https \u4EE3\u7406\u81EA\u52A8\u5B89\u88C5\u8BC1\u4E66\u9700\u8981\u83B7\u53D6 root \u6743\u9650, \u8BF7\u6839\u636E\u63D0\u793A\u8F93\u5165\u5BC6\u7801\u5373\u53EF\u3002",(0,r.jsx)(t.strong,{children:"\u5BC6\u7801\u4EC5\u5728\u4FE1\u4EFB\u8BC1\u4E66\u65F6\u4F7F\u7528\uFF0C\u4E0D\u4F1A\u6CC4\u6F0F\u6216\u8005\u7528\u4E8E\u5176\u4ED6\u73AF\u8282"}),"\u3002"]}),"\n"]})]})]})}function o(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:t}=Object.assign({},(0,s.useMDXComponents)(),e.components);return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}var l=o;o.__RSPRESS_PAGE_META={},o.__RSPRESS_PAGE_META["zh%2Fcomponents%2Fglobal-proxy-config.mdx"]={toc:[{text:"\u6CE8\u518C\u63D2\u4EF6",id:"\u6CE8\u518C\u63D2\u4EF6",depth:3},{text:"Object \u7C7B\u578B",id:"object-\u7C7B\u578B",depth:3},{text:"String \u7C7B\u578B",id:"string-\u7C7B\u578B",depth:3},{text:"\u542F\u52A8\u4EE3\u7406",id:"\u542F\u52A8\u4EE3\u7406",depth:3}],title:"",frontmatter:{}}},95153:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return l}});var r=n("9880"),s=n("23169"),i=n("68140");function a(e){let t=Object.assign({h1:"h1",a:"a"},(0,s.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.h1,{id:"devproxy",children:["dev.proxy",(0,r.jsx)(t.a,{className:"header-anchor","aria-hidden":"true",href:"#devproxy",children:"#"})]}),"\n","\n",(0,r.jsx)(i.default,{})]})}function o(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:t}=Object.assign({},(0,s.useMDXComponents)(),e.components);return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}var l=o;o.__RSPRESS_PAGE_META={},o.__RSPRESS_PAGE_META["zh%2Fconfigure%2Fapp%2Fdev%2Fproxy.mdx"]={toc:[],title:"dev.proxy",frontmatter:{sidebar_label:"proxy"}}},58671:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return l}});var r=n("9880");n("6171");var s=n("54234"),i=n.n(s),a=n("88375"),o=n("37637"),l=e=>{let{title:t,desc:n,href:s}=e;return(0,r.jsxs)("a",{href:(0,a.withBase)(s),target:"_blank",style:{textDecoration:"none"},className:i(o.card),children:[(0,r.jsx)("span",{className:o.title,children:t}),(0,r.jsx)("span",{className:o.desc,children:n})]})}},30777:function(e,t,n){"use strict";n.r(t),n.d(t,{FeatureLayout:function(){return i}});var r=n("9880");n("6171");var s=n("24433");let i=e=>{let{children:t}=e;return(0,r.jsx)("div",{className:s["feature-layout"],children:t})}},55478:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return l}}),n("90517"),n("54368");var r=n("9880"),s=n("39270"),i=n("4985");let a=e=>e.startsWith("http://")||e.startsWith("https://");function o(e){let{to:t,href:n,label:s,...i}=e;return(0,r.jsx)("a",{className:"linkItem",target:"_blank",href:n||t,...i,children:n&&a(n)?(0,r.jsx)("span",{children:s}):s})}function l(){let e=(0,s.useI18n)(),t=[{title:e("guide"),items:[{label:e("quickStart"),to:(0,s.useUrl)("/guides/get-started/quick-start")},{label:e("coreConcept"),to:(0,s.useUrl)("/guides/concept/entries")},{label:e("basicFeatures"),to:(0,s.useUrl)("/guides/basic-features/routes")},{label:e("advancedFeatures"),to:(0,s.useUrl)("/guides/advanced-features/rspack-start")}]},{title:"API",items:[{label:e("configuration"),to:(0,s.useUrl)("/configure/app/usage")},{label:e("command"),to:(0,s.useUrl)("/apis/app/commands")},{label:e("runtime"),to:(0,s.useUrl)("/apis/app/runtime/core/bootstrap")},{label:e("conventions"),to:(0,s.useUrl)("apis/app/hooks/src/app")}]},{title:e("topic"),items:[{label:e("microFrontend"),to:(0,s.useUrl)("/guides/topic-detail/micro-frontend/c01-introduction")},{label:e("stateManagement"),to:(0,s.useUrl)("/guides/topic-detail/model/quick-start")},{label:e("pluginSystem"),to:(0,s.useUrl)("/guides/topic-detail/framework-plugin/introduction")},{label:e("projectGenerator"),to:(0,s.useUrl)("/guides/topic-detail/generator/project")}]},{title:e("help"),items:[{label:e("changelog"),to:"https://github.com/web-infra-dev/modern.js/releases"},{label:"GitHub Issues",to:"https://github.com/web-infra-dev/modern.js/issues"},{label:e("githubDiscussion"),to:"https://github.com/web-infra-dev/modern.js/discussions"}]}],n=t.map((e,t)=>(0,r.jsxs)("div",{className:i.linkWrapper,children:[(0,r.jsx)("div",{className:i.linkTitle,children:e.title}),(0,r.jsx)("ul",{className:i.items,children:e.items.map((e,t)=>(0,r.jsx)("li",{className:i.link,children:(0,r.jsx)(o,{...e})},e.to||t))})]},t));return(0,r.jsx)("footer",{className:i.footer,children:(0,r.jsxs)("div",{className:i.wrapper,children:[(0,r.jsx)("img",{className:i.logo,src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/zq-uylkvT/ljhwZthlaukjlkulzlp/modern-logo-home-page-0209.svg"}),(0,r.jsx)("div",{className:i.linksWrapper,children:n})]})})}},85298:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return i}});var r=n("9880");n("6171");var s=n("57204"),i=e=>{let{children:t}=e;return(0,r.jsx)("div",{className:s.titleWrap,children:(0,r.jsx)("h2",{className:s.title,children:t})})}},21676:function(e,t,n){"use strict";n.r(t),n.d(t,{EN_US:function(){return r}});let r={introduction:"Introduction",quickStart:"Quick Start",slogan:"A Progressive React Framework for modern web development",secondSlogan1:"Enjoy the development experience.",secondSlogan2:"Make innovation happen faster.",feature1:"Rust Bundler",featureDesc1:"Easily switch to Rspack bundler with faster build speed.",feature2:"Integrated BFF",featureDesc2:"Develop BFF code in the same project, enjoy simple function calls.",feature3:"Nested Routes",featureDesc3:"File-as-route, comes with lots performance optimizations.",feature4:"Multi-Rendering Mode",featureDesc4:"SSR, SSG, SPR, all out of the box for you.",feature5:"CSS Solutions",featureDesc5:"CSS Modules, CSS-in-JS, Tailwind CSS, take your pick.",feature6:"Easy to Configure",featureDesc6:"Launch with zero configuration, then everything is configurable.",solutions:"Solutions",solutionsDesc1:"A progressive React framework for web development.",solutionsDesc2:"A powerful solution for npm package development.",solutionsDesc3:"An Rspack-based build tool for web development.",solutionsDesc4:"A fast Rspack-based static site generator",guide:"Guide",topic:"Topic",help:"Help",coreConcept:"Core Concept",basicFeatures:"Basic Features",advancedFeatures:"Advanced Features",configuration:"Configuration",command:"Command",runtime:"Runtime",conventions:"Conventions",microFrontend:"Micro Frontend",stateManagement:"State Management",pluginSystem:"Plugin System",projectGenerator:"Project Generator",githubDiscussion:"Github Discussion",changelog:"Changelog",doubao:"Doubao",writingo:"Writingo",volctrans:"Volctrans",shidianbaike:"Shidian Baike",xiaohe:"Xiaohe",dongchedi:"Dongchedi",volcengineDeveloper:"Volcengine Developer"}},39270:function(e,t,n){"use strict";n.r(t),n.d(t,{useUrl:function(){return o},useI18n:function(){return l}});var r=n("88375"),s=n("21676"),i=n("53724");let a={en:s.EN_US,zh:i.ZH_CN};function o(e){let t=(0,r.useLang)();return(0,r.withBase)("zh"===t?e:`/en${e}`)}function l(){let e=(0,r.useLang)();return t=>a[e][t]}},53724:function(e,t,n){"use strict";n.r(t),n.d(t,{ZH_CN:function(){return r}});let r={introduction:"\u4ECB\u7ECD",quickStart:"\u5FEB\u901F\u4E0A\u624B",slogan:"\u57FA\u4E8E React \u7684\u6E10\u8FDB\u5F0F Web \u5F00\u53D1\u6846\u67B6",secondSlogan1:"\u4EAB\u53D7\u6109\u60A6\u7684\u5F00\u53D1\u4F53\u9A8C\uFF0C",secondSlogan2:"\u8BA9\u521B\u65B0\u66F4\u5FEB\u53D1\u751F\u3002",feature1:"Rust \u6784\u5EFA",featureDesc1:"\u8F7B\u677E\u5207\u6362\u5230 Rspack \u6784\u5EFA\u5DE5\u5177\uFF0C\u7F16\u8BD1\u98DE\u5FEB\u3002",feature2:"\u4E00\u4F53\u5316\u5F00\u53D1",featureDesc2:"\u5728\u540C\u4E00\u9879\u76EE\u4E2D\u5B8C\u6210 BFF \u5F00\u53D1\uFF0C\u4EAB\u53D7\u7B80\u6D01\u7684\u51FD\u6570\u8C03\u7528\u3002",feature3:"\u5D4C\u5957\u8DEF\u7531",featureDesc3:"\u6587\u4EF6\u7CFB\u7EDF\u5373\u8DEF\u7531\uFF0C\u9644\u8D60\u5168\u5957\u6027\u80FD\u4F18\u5316\u3002",feature4:"\u591A\u6E32\u67D3\u6A21\u5F0F",featureDesc4:"SSR\u3001SSG\u3001SPR \u7B49\u591A\u79CD\u6E32\u67D3\u6A21\u5F0F\uFF0C\u901A\u901A\u5F00\u7BB1\u5373\u7528\u3002",feature5:"CSS \u65B9\u6848",featureDesc5:"CSS Modules\u3001CSS-in-JS\u3001Tailwind CSS\uFF0C\u4EFB\u4F60\u6311\u9009\u3002",feature6:"\u6613\u4E8E\u914D\u7F6E",featureDesc6:"\u4EE5\u96F6\u914D\u7F6E\u542F\u52A8\uFF0C\u7136\u540E\u4E00\u5207\u7686\u53EF\u914D\u7F6E\u3002",solutions:"\u89E3\u51B3\u65B9\u6848",solutionsDesc1:"\u57FA\u4E8E React \u7684\u6E10\u8FDB\u5F0F Web \u5F00\u53D1\u6846\u67B6\u3002",solutionsDesc2:"\u7B80\u5355\u3001\u9AD8\u6027\u80FD\u7684 npm \u5305\u5F00\u53D1\u65B9\u6848\u3002",solutionsDesc3:"\u57FA\u4E8E Rspack \u7684 Web \u6784\u5EFA\u5DE5\u5177\u3002",solutionsDesc4:"\u57FA\u4E8E Rspack \u7684\u9759\u6001\u7AD9\u70B9\u751F\u6210\u5668\u3002",guide:"\u6307\u5357",topic:"\u4E13\u9898",help:"\u5E2E\u52A9",coreConcept:"\u6838\u5FC3\u6982\u5FF5",basicFeatures:"\u57FA\u7840\u529F\u80FD",advancedFeatures:"\u8FDB\u9636\u529F\u80FD",configuration:"\u914D\u7F6E",command:"\u547D\u4EE4",runtime:"\u8FD0\u884C\u65F6",conventions:"\u76EE\u5F55\u7EA6\u5B9A",microFrontend:"\u5FAE\u524D\u7AEF",stateManagement:"\u72B6\u6001\u7BA1\u7406",pluginSystem:"\u63D2\u4EF6\u7CFB\u7EDF",projectGenerator:"\u9879\u76EE\u751F\u6210\u5668",githubDiscussion:"Github \u8BA8\u8BBA\u533A",changelog:"\u66F4\u65B0\u65E5\u5FD7",doubao:"\u8C46\u5305",writingo:"\u706B\u5C71\u5199\u4F5C",volctrans:"\u706B\u5C71\u7FFB\u8BD1",shidianbaike:"\u8BC6\u5178\u767E\u79D1",xiaohe:"\u5C0F\u8377\u5065\u5EB7",dongchedi:"\u61C2\u8F66\u5E1D",volcengineDeveloper:"\u706B\u5C71\u5F15\u64CE\u5F00\u53D1\u8005\u793E\u533A"}},18553:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return i}});var r=n("72024"),s=n("35540");n.es(r,t);var i={...r.default,HomeLayout:s.default}},35540:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return f}}),n("90517"),n("54368");var r=n("9880"),s=n("90591"),i=n("88375"),a=n("6171"),o=n("58671"),l=n("85298"),c=n("30777"),d=n("55478"),u=n("39270"),h=n("56340");let p=()=>{let e=(0,u.useI18n)();return(0,r.jsx)("div",{className:h.header,children:(0,r.jsxs)("header",{className:(0,s.default)("hero hero--primary",h.heroBanner),children:[(0,r.jsxs)("h1",{className:h.title,children:[(0,r.jsx)("div",{children:"Inspire Creativity in"}),(0,r.jsx)("div",{className:h.titleGradient,children:"Modern Web Development"})]}),(0,r.jsxs)("div",{className:h.buttons,children:[(0,r.jsxs)("a",{href:(0,u.useUrl)("/guides/get-started/introduction"),className:h.leftButton,children:[e("introduction"),(0,r.jsx)("img",{width:"20",height:"20",className:h.startArrow,src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/aphqeh7uhohpquloj/modern-js/right-arrow.svg?url"})]}),(0,r.jsx)("a",{href:(0,u.useUrl)("/guides/get-started/quick-start"),className:h.rightButton,children:e("quickStart")})]})]})})};function f(){let e=(0,u.useI18n)(),{pathname:t}=(0,i.useLocation)();(0,a.useEffect)(()=>(window.MODERN_THEME="dark",()=>{window.MODERN_THEME=void 0}),[t]);let n=[{title:e("feature1"),href:(0,u.useUrl)("/guides/concept/builder"),desc:e("featureDesc1")},{title:e("feature2"),href:(0,u.useUrl)("/guides/advanced-features/bff/index"),desc:e("featureDesc2")},{title:e("feature3"),href:(0,u.useUrl)("/guides/basic-features/routes"),desc:e("featureDesc3")},{title:e("feature4"),href:(0,u.useUrl)("/guides/advanced-features/ssr"),desc:e("featureDesc4")},{title:e("feature5"),href:(0,u.useUrl)("/guides/basic-features/css"),desc:e("featureDesc5")},{title:e("feature6"),href:(0,u.useUrl)("/configure/app/usage"),desc:e("featureDesc6")}],f=(0,i.useLang)(),g=[{title:"Modern.js Framework",href:(0,u.useUrl)("/guides/get-started/introduction"),desc:e("solutionsDesc1")},{title:"Modern.js Module",href:`https://modernjs.dev/module-tools${"en"===f?"/en":""}`,desc:e("solutionsDesc2")},{title:"Modern.js Builder",href:`https://modernjs.dev/builder${"en"===f?"/en":""}`,desc:e("solutionsDesc3")},{title:"Rspress",href:`https://rspress.dev${"en"===f?"":"/zh"}`,desc:e("solutionsDesc4")}];return(0,r.jsxs)("div",{children:[(0,r.jsxs)(i.Helmet,{children:[(0,r.jsx)("html",{className:"dark"}),(0,r.jsx)("script",{children:"window.MODERN_THEME = 'dark';"}),(0,r.jsx)("style",{type:"text/css",children:`
          .rspress-doc-appearance {
            display: none!important;
          }
        `})]}),(0,r.jsx)(p,{}),(0,r.jsxs)("main",{className:h["homepage-main"],children:[(0,r.jsxs)(c.FeatureLayout,{children:[(0,r.jsx)(l.default,{children:e("solutions")}),(0,r.jsx)("div",{className:h.cardContainer,children:g.map((e,t)=>(0,r.jsx)(o.default,{title:e.title,desc:e.desc,href:e.href},t))})]}),(0,r.jsx)(c.FeatureLayout,{children:(0,r.jsxs)("h1",{className:(0,s.default)([h.title,h.titleGradient]),style:{textAlign:"left",marginBottom:32},children:[(0,r.jsx)("div",{children:e("secondSlogan1")}),(0,r.jsx)("div",{children:e("secondSlogan2")})]})}),(0,r.jsxs)(c.FeatureLayout,{children:[(0,r.jsx)(l.default,{children:"Modern.js Framework"}),(0,r.jsx)("div",{className:h.cardContainer,children:n.map((e,t)=>(0,r.jsx)(o.default,{title:e.title,desc:e.desc,href:e.href},t))})]}),(0,r.jsx)(d.default,{})]})]})}},24433:function(e,t,n){"use strict";e.exports={"feature-layout":"feature-layout-ea3480",featureLayout:"feature-layout-ea3480"}},57204:function(e,t,n){"use strict";e.exports={title:"title-cfbf64",title:"title-cfbf64",titleWrap:"titleWrap-_245ce",titleWrap:"titleWrap-_245ce"}},37637:function(e,t,n){"use strict";e.exports={card:"card-_1c4af",card:"card-_1c4af",desc:"desc-a85d41",desc:"desc-a85d41",icon:"icon-_02dc1",icon:"icon-_02dc1",title:"title-b44362",title:"title-b44362"}},4985:function(e,t,n){"use strict";e.exports={footer:"footer-_1419c",footer:"footer-_1419c",link:"link-fff29d",link:"link-fff29d",linkTitle:"linkTitle-c4002f",linkTitle:"linkTitle-c4002f",linkWrapper:"linkWrapper-_1b066",linkWrapper:"linkWrapper-_1b066",linksWrapper:"linksWrapper-_4f8ed",linksWrapper:"linksWrapper-_4f8ed",logo:"logo-_22a8c",logo:"logo-_22a8c",wrapper:"wrapper-b33135",wrapper:"wrapper-b33135"}},56340:function(e,t,n){"use strict";e.exports={buttons:"buttons-e3d388",buttons:"buttons-e3d388",cardContainer:"cardContainer-_79b2f",cardContainer:"cardContainer-_79b2f",flowContainer:"flowContainer-_225bb",flowContainer:"flowContainer-_225bb",flowLine:"flowLine-a3999c",flowLine:"flowLine-a3999c",flowLineMobile:"flowLineMobile-_4fe65",flowLineMobile:"flowLineMobile-_4fe65",header:"header-_720aa",header:"header-_720aa",heroBanner:"heroBanner-_85caa",heroBanner:"heroBanner-_85caa","homepage-main":"homepage-main-_77128",homepageMain:"homepage-main-_77128",leftButton:"leftButton-_7ef36",leftButton:"leftButton-_7ef36",logo:"logo-_9cf1f",logo:"logo-_9cf1f",rightButton:"rightButton-_91c6e",rightButton:"rightButton-_91c6e","section-title":"section-title-dc2851",sectionTitle:"section-title-dc2851",singleImg:"singleImg-_71172",singleImg:"singleImg-_71172",singleImgCard:"singleImgCard-_1456f",singleImgCard:"singleImgCard-_1456f",singleImgWrap:"singleImgWrap-_12f4b",singleImgWrap:"singleImgWrap-_12f4b",startArrow:"startArrow-c03ec9",startArrow:"startArrow-c03ec9",title:"title-_6c4ac",title:"title-_6c4ac",titleGradient:"titleGradient-_84d55",titleGradient:"titleGradient-_84d55"}}}]);