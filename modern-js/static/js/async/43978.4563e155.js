(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["43978"],{90591:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return n}});var n=function(){for(var e,t,r=0,n="";r<arguments.length;)(e=arguments[r++])&&(t=function e(t){var r,n,s="";if("string"==typeof t||"number"==typeof t)s+=t;else if("object"==typeof t){if(Array.isArray(t))for(r=0;r<t.length;r++)t[r]&&(n=e(t[r]))&&(s&&(s+=" "),s+=n);else for(r in t)t[r]&&(s&&(s+=" "),s+=r)}return s}(e))&&(n&&(n+=" "),n+=t);return n}},6226:function(e,t,r){"use strict";r.r(t);var n=r("61230");r.es(n,t)},36159:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return l}});var n=r("9880"),s=r("23169"),i=r("18553");function o(e){let t=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",a:"a",h3:"h3",pre:"pre",img:"img",div:"div"},(0,s.useMDXComponents)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Type:"})," ",(0,n.jsx)(t.code,{children:"string | Object"})]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Default:"})," ",(0,n.jsx)(t.code,{children:"null"})]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["This option is used to configure a global proxy based on ",(0,n.jsx)(t.a,{href:"https://wproxy.org/whistle/",target:"_blank",rel:"noopener noreferrer",children:"whistle"})," in the development environment, which can be used to view and modify HTTP/HTTPS requests, responses, and can also be used as a proxy server."]}),"\n",(0,n.jsxs)(t.h3,{id:"register-plugin",children:["Register Plugin",(0,n.jsx)(t.a,{className:"header-anchor","aria-hidden":"true",href:"#register-plugin",children:"#"})]}),"\n",(0,n.jsxs)(t.p,{children:["Before using this option, you need to install and register the ",(0,n.jsx)(t.code,{children:"@modern-js/plugin-proxy"})," plugin:"]}),"\n","\n",(0,n.jsx)(i.PackageManagerTabs,{command:"add @modern-js/plugin-proxy -D"}),"\n",(0,n.jsxs)(t.p,{children:["After the installation, please register the plugin in the ",(0,n.jsx)(t.code,{children:"modern.config.ts"})," file:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import { appTools, defineConfig } from '@modern-js/app-tools';\nimport { proxyPlugin } from '@modern-js/plugin-proxy';\n\nexport default defineConfig({\n  plugins: [appTools(), proxyPlugin()],\n});\n"})}),"\n",(0,n.jsxs)(t.h3,{id:"object-type",children:["Object Type",(0,n.jsx)(t.a,{className:"header-anchor","aria-hidden":"true",href:"#object-type",children:"#"})]}),"\n",(0,n.jsxs)(t.p,{children:["When the value of ",(0,n.jsx)(t.code,{children:"dev.proxy"})," is object type, the ",(0,n.jsx)(t.code,{children:"key"})," of the object corresponds to the matching ",(0,n.jsx)(t.code,{children:"pattern"}),", and the ",(0,n.jsx)(t.code,{children:"value"})," of the object corresponds to the matching ",(0,n.jsx)(t.code,{children:"target"}),"."]}),"\n",(0,n.jsx)(t.p,{children:"Example:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"export default defineConfig({\n  dev: {\n    proxy: {\n      'https://www.baidu.com': 'https://google.com.hk',\n      // Static files can be returned directly via the file protocol\n      'https://example.com/api': 'file://./data.json',\n    },\n  },\n});\n"})}),"\n",(0,n.jsxs)(t.p,{children:["Please refer to ",(0,n.jsx)(t.a,{href:"https://wproxy.org/whistle/pattern.html",target:"_blank",rel:"noopener noreferrer",children:"whistle - Matching Patterns"})," for detailed usage."]}),"\n",(0,n.jsxs)(t.h3,{id:"string-type",children:["String Type",(0,n.jsx)(t.a,{className:"header-anchor","aria-hidden":"true",href:"#string-type",children:"#"})]}),"\n",(0,n.jsxs)(t.p,{children:["When the value of ",(0,n.jsx)(t.code,{children:"dev.proxy"})," is string type, it can be used to specify a separate proxy file, for example:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"export default defineConfig({\n  dev: {\n    proxy: './proxy.js',\n  },\n});\n"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",meta:'title="proxy.js"',children:"module.exports = {\n  name: 'my-app',\n  rules: `\n    ^example.com:8080/api/***   http://localhost:3001/api/$\n  `,\n};\n"})}),"\n",(0,n.jsxs)(t.h3,{id:"start-proxy",children:["Start Proxy",(0,n.jsx)(t.a,{className:"header-anchor","aria-hidden":"true",href:"#start-proxy",children:"#"})]}),"\n",(0,n.jsxs)(t.p,{children:["Execute ",(0,n.jsx)(t.code,{children:"dev"}),", when the prompt is as follows, the proxy server starts successfully:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"  Local:    http://localhost:8080/\n  Network:  http://192.168.0.1:8080/\n\ninfo      Starting proxy server.....\nsuccess   Proxy server start on localhost:8899\n"})}),"\n",(0,n.jsxs)(t.p,{children:["Access the ",(0,n.jsx)(t.code,{children:"localhost:8899"})," to view the Network and configure proxy rules on the UI interface:"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/aphqeh7uhohpquloj/modern-js/docs/dev-proxy.png",alt:"proxy UI"})}),"\n",(0,n.jsxs)(t.div,{className:"rspress-directive info",children:[(0,n.jsx)(t.div,{className:"rspress-directive-title",children:"INFO"}),(0,n.jsxs)(t.div,{className:"rspress-directive-content",children:[(0,n.jsx)(t.p,{children:"The https agent automatically installs the certificate to obtain root privileges. Please enter the password as prompted. ** The password is only used when the certificate is trusted and will not be leaked or used for other links **."}),"\n"]})]})]})}function a(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:t}=Object.assign({},(0,s.useMDXComponents)(),e.components);return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(o,{...e})}):o(e)}var l=a;a.__RSPRESS_PAGE_META={},a.__RSPRESS_PAGE_META["en%2Fcomponents%2Fglobal-proxy-config.mdx"]={toc:[{text:"Register Plugin",id:"register-plugin",depth:3},{text:"Object Type",id:"object-type",depth:3},{text:"String Type",id:"string-type",depth:3},{text:"Start Proxy",id:"start-proxy",depth:3}],title:""}},10459:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return l},frontmatter:function(){return c}});var n=r("9880"),s=r("23169"),i=r("36159");function o(e){let t=Object.assign({h1:"h1",a:"a"},(0,s.useMDXComponents)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.h1,{id:"devproxy",children:["dev.proxy",(0,n.jsx)(t.a,{className:"header-anchor","aria-hidden":"true",href:"#devproxy",children:"#"})]}),"\n","\n",(0,n.jsx)(i.default,{})]})}function a(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:t}=Object.assign({},(0,s.useMDXComponents)(),e.components);return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(o,{...e})}):o(e)}var l=a;a.__RSPRESS_PAGE_META={},a.__RSPRESS_PAGE_META["en%2Fconfigure%2Fapp%2Fdev%2Fproxy.mdx"]={toc:[],title:"dev.proxy"};let c={sidebar_label:"proxy"}},61230:function(e,t,r){"use strict";r.r(t);var n=r("44710");r.es(n,t)},58671:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return l}});var n=r("9880");r("6171");var s=r("54234"),i=r.n(s),o=r("6226"),a=r("47419"),l=e=>{let{title:t,desc:r,href:s}=e;return(0,n.jsxs)("a",{href:(0,o.withBase)(s),target:"_blank",style:{textDecoration:"none"},className:i(a.card),children:[(0,n.jsx)("span",{className:a.title,children:t}),(0,n.jsx)("span",{className:a.desc,children:r})]})}},30777:function(e,t,r){"use strict";r.r(t),r.d(t,{FeatureLayout:function(){return i}});var n=r("9880");r("6171");var s=r("73753");let i=e=>{let{children:t}=e;return(0,n.jsx)("div",{className:s["feature-layout"],children:t})}},55478:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return l}});var n=r("9880"),s=r("39270"),i=r("80706");let o=e=>e.startsWith("http://")||e.startsWith("https://");function a(e){let{to:t,href:r,label:s,...i}=e;return(0,n.jsx)("a",{className:"linkItem",target:"_blank",href:r||t,...i,children:r&&o(r)?(0,n.jsx)("span",{children:s}):s})}function l(){let e=(0,s.useI18n)(),t=[{title:e("guide"),items:[{label:e("quickStart"),to:(0,s.useUrl)("/guides/get-started/quick-start")},{label:e("coreConcept"),to:(0,s.useUrl)("/guides/concept/entries")},{label:e("basicFeatures"),to:(0,s.useUrl)("/guides/basic-features/routes")},{label:e("advancedFeatures"),to:(0,s.useUrl)("/guides/advanced-features/rspack-start")}]},{title:"API",items:[{label:e("configuration"),to:(0,s.useUrl)("/configure/app/usage")},{label:e("command"),to:(0,s.useUrl)("/apis/app/commands")},{label:e("runtime"),to:(0,s.useUrl)("/apis/app/runtime/core/bootstrap")},{label:e("conventions"),to:(0,s.useUrl)("apis/app/hooks/src/app")}]},{title:e("topic"),items:[{label:e("microFrontend"),to:(0,s.useUrl)("/guides/topic-detail/micro-frontend/c01-introduction")},{label:e("stateManagement"),to:(0,s.useUrl)("/guides/topic-detail/model/quick-start")},{label:e("pluginSystem"),to:(0,s.useUrl)("/guides/topic-detail/framework-plugin/introduction")},{label:e("projectGenerator"),to:(0,s.useUrl)("/guides/topic-detail/generator/project")}]},{title:e("help"),items:[{label:e("changelog"),to:"https://github.com/web-infra-dev/modern.js/releases"},{label:"GitHub Issues",to:"https://github.com/web-infra-dev/modern.js/issues"},{label:e("githubDiscussion"),to:"https://github.com/web-infra-dev/modern.js/discussions"}]}],r=t.map((e,t)=>(0,n.jsxs)("div",{className:i.linkWrapper,children:[(0,n.jsx)("div",{className:i.linkTitle,children:e.title}),(0,n.jsx)("ul",{className:i.items,children:e.items.map((e,t)=>(0,n.jsx)("li",{className:i.link,children:(0,n.jsx)(a,{...e})},e.to||t))})]},t));return(0,n.jsx)("footer",{className:i.footer,children:(0,n.jsxs)("div",{className:i.wrapper,children:[(0,n.jsx)("img",{className:i.logo,src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/zq-uylkvT/ljhwZthlaukjlkulzlp/modern-logo-home-page-0209.svg"}),(0,n.jsx)("div",{className:i.linksWrapper,children:r})]})})}},85298:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return i}});var n=r("9880");r("6171");var s=r("58506"),i=e=>{let{children:t}=e;return(0,n.jsx)("div",{className:s.titleWrap,children:(0,n.jsx)("h2",{className:s.title,children:t})})}},21676:function(e,t,r){"use strict";r.r(t),r.d(t,{EN_US:function(){return n}});let n={introduction:"Introduction",quickStart:"Quick Start",slogan:"A Progressive React Framework for modern web development",secondSlogan1:"Enjoy the development experience.",secondSlogan2:"Make innovation happen faster.",feature1:"Rust Bundler",featureDesc1:"Easily switch to Rspack bundler with faster build speed.",feature2:"Integrated BFF",featureDesc2:"Develop BFF code in the same project, enjoy simple function calls.",feature3:"Nested Routes",featureDesc3:"File-as-route, comes with lots performance optimizations.",feature4:"Multi-Rendering Mode",featureDesc4:"SSR, SSG, SPR, all out of the box for you.",feature5:"CSS Solutions",featureDesc5:"CSS Modules, CSS-in-JS, Tailwind CSS, take your pick.",feature6:"Easy to Configure",featureDesc6:"Launch with zero configuration, then everything is configurable.",solutions:"Solutions",solutionsDesc1:"A progressive React framework for web development.",solutionsDesc2:"A powerful solution for npm package development.",solutionsDesc3:"An Rspack-based build tool for web development.",solutionsDesc4:"A fast Rspack-based static site generator",guide:"Guide",topic:"Topic",help:"Help",coreConcept:"Core Concept",basicFeatures:"Basic Features",advancedFeatures:"Advanced Features",configuration:"Configuration",command:"Command",runtime:"Runtime",conventions:"Conventions",microFrontend:"Micro Frontend",stateManagement:"State Management",pluginSystem:"Plugin System",projectGenerator:"Project Generator",githubDiscussion:"Github Discussion",changelog:"Changelog",doubao:"Doubao",writingo:"Writingo",volctrans:"Volctrans",shidianbaike:"Shidian Baike",xiaohe:"Xiaohe",dongchedi:"Dongchedi",volcengineDeveloper:"Volcengine Developer"}},39270:function(e,t,r){"use strict";r.r(t),r.d(t,{useUrl:function(){return a},useI18n:function(){return l}});var n=r("6226"),s=r("21676"),i=r("53724");let o={en:s.EN_US,zh:i.ZH_CN};function a(e){let t=(0,n.useLang)();return(0,n.withBase)("zh"===t?e:`/en${e}`)}function l(){let e=(0,n.useLang)();return t=>o[e][t]}},53724:function(e,t,r){"use strict";r.r(t),r.d(t,{ZH_CN:function(){return n}});let n={introduction:"\u4ECB\u7ECD",quickStart:"\u5FEB\u901F\u4E0A\u624B",slogan:"\u57FA\u4E8E React \u7684\u6E10\u8FDB\u5F0F Web \u5F00\u53D1\u6846\u67B6",secondSlogan1:"\u4EAB\u53D7\u6109\u60A6\u7684\u5F00\u53D1\u4F53\u9A8C\uFF0C",secondSlogan2:"\u8BA9\u521B\u65B0\u66F4\u5FEB\u53D1\u751F\u3002",feature1:"Rust \u6784\u5EFA",featureDesc1:"\u8F7B\u677E\u5207\u6362\u5230 Rspack \u6784\u5EFA\u5DE5\u5177\uFF0C\u7F16\u8BD1\u98DE\u5FEB\u3002",feature2:"\u4E00\u4F53\u5316\u5F00\u53D1",featureDesc2:"\u5728\u540C\u4E00\u9879\u76EE\u4E2D\u5B8C\u6210 BFF \u5F00\u53D1\uFF0C\u4EAB\u53D7\u7B80\u6D01\u7684\u51FD\u6570\u8C03\u7528\u3002",feature3:"\u5D4C\u5957\u8DEF\u7531",featureDesc3:"\u6587\u4EF6\u7CFB\u7EDF\u5373\u8DEF\u7531\uFF0C\u9644\u8D60\u5168\u5957\u6027\u80FD\u4F18\u5316\u3002",feature4:"\u591A\u6E32\u67D3\u6A21\u5F0F",featureDesc4:"SSR\u3001SSG\u3001SPR \u7B49\u591A\u79CD\u6E32\u67D3\u6A21\u5F0F\uFF0C\u901A\u901A\u5F00\u7BB1\u5373\u7528\u3002",feature5:"CSS \u65B9\u6848",featureDesc5:"CSS Modules\u3001CSS-in-JS\u3001Tailwind CSS\uFF0C\u4EFB\u4F60\u6311\u9009\u3002",feature6:"\u6613\u4E8E\u914D\u7F6E",featureDesc6:"\u4EE5\u96F6\u914D\u7F6E\u542F\u52A8\uFF0C\u7136\u540E\u4E00\u5207\u7686\u53EF\u914D\u7F6E\u3002",solutions:"\u89E3\u51B3\u65B9\u6848",solutionsDesc1:"\u57FA\u4E8E React \u7684\u6E10\u8FDB\u5F0F Web \u5F00\u53D1\u6846\u67B6\u3002",solutionsDesc2:"\u7B80\u5355\u3001\u9AD8\u6027\u80FD\u7684 npm \u5305\u5F00\u53D1\u65B9\u6848\u3002",solutionsDesc3:"\u57FA\u4E8E Rspack \u7684 Web \u6784\u5EFA\u5DE5\u5177\u3002",solutionsDesc4:"\u57FA\u4E8E Rspack \u7684\u9759\u6001\u7AD9\u70B9\u751F\u6210\u5668\u3002",guide:"\u6307\u5357",topic:"\u4E13\u9898",help:"\u5E2E\u52A9",coreConcept:"\u6838\u5FC3\u6982\u5FF5",basicFeatures:"\u57FA\u7840\u529F\u80FD",advancedFeatures:"\u8FDB\u9636\u529F\u80FD",configuration:"\u914D\u7F6E",command:"\u547D\u4EE4",runtime:"\u8FD0\u884C\u65F6",conventions:"\u76EE\u5F55\u7EA6\u5B9A",microFrontend:"\u5FAE\u524D\u7AEF",stateManagement:"\u72B6\u6001\u7BA1\u7406",pluginSystem:"\u63D2\u4EF6\u7CFB\u7EDF",projectGenerator:"\u9879\u76EE\u751F\u6210\u5668",githubDiscussion:"Github \u8BA8\u8BBA\u533A",changelog:"\u66F4\u65B0\u65E5\u5FD7",doubao:"\u8C46\u5305",writingo:"\u706B\u5C71\u5199\u4F5C",volctrans:"\u706B\u5C71\u7FFB\u8BD1",shidianbaike:"\u8BC6\u5178\u767E\u79D1",xiaohe:"\u5C0F\u8377\u5065\u5EB7",dongchedi:"\u61C2\u8F66\u5E1D",volcengineDeveloper:"\u706B\u5C71\u5F15\u64CE\u5F00\u53D1\u8005\u793E\u533A"}},18553:function(e,t,r){"use strict";r.r(t);var n=r("84414"),s=r("35540");r.es(n,t),{...n.default,HomeLayout:s.default}},35540:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return f}});var n=r("9880"),s=r("90591"),i=r("6226"),o=r("6171"),a=r("58671"),l=r("85298"),c=r("30777"),d=r("55478"),u=r("39270"),p=r("44178");let h=()=>{let e=(0,u.useI18n)();return(0,n.jsx)("div",{className:p.header,children:(0,n.jsxs)("header",{className:(0,s.default)("hero hero--primary",p.heroBanner),children:[(0,n.jsxs)("h1",{className:p.title,children:[(0,n.jsx)("div",{children:"Inspire Creativity in"}),(0,n.jsx)("div",{className:p.titleGradient,children:"Modern Web Development"})]}),(0,n.jsxs)("div",{className:p.buttons,children:[(0,n.jsxs)("a",{href:(0,u.useUrl)("/guides/get-started/introduction"),className:p.leftButton,children:[e("introduction"),(0,n.jsx)("img",{width:"20",height:"20",className:p.startArrow,src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/aphqeh7uhohpquloj/modern-js/right-arrow.svg?url"})]}),(0,n.jsx)("a",{href:(0,u.useUrl)("/guides/get-started/quick-start"),className:p.rightButton,children:e("quickStart")})]})]})})};function f(){let e=(0,u.useI18n)(),{pathname:t}=(0,i.useLocation)();(0,o.useEffect)(()=>(window.MODERN_THEME="dark",()=>{window.MODERN_THEME=void 0}),[t]);let r=[{title:e("feature1"),href:(0,u.useUrl)("/guides/concept/builder"),desc:e("featureDesc1")},{title:e("feature2"),href:(0,u.useUrl)("/guides/advanced-features/bff/index"),desc:e("featureDesc2")},{title:e("feature3"),href:(0,u.useUrl)("/guides/basic-features/routes"),desc:e("featureDesc3")},{title:e("feature4"),href:(0,u.useUrl)("/guides/advanced-features/ssr"),desc:e("featureDesc4")},{title:e("feature5"),href:(0,u.useUrl)("/guides/basic-features/css"),desc:e("featureDesc5")},{title:e("feature6"),href:(0,u.useUrl)("/configure/app/usage"),desc:e("featureDesc6")}],f=(0,i.useLang)(),g=[{title:"Modern.js Framework",href:(0,u.useUrl)("/guides/get-started/introduction"),desc:e("solutionsDesc1")},{title:"Modern.js Module",href:`https://modernjs.dev/module-tools${"en"===f?"/en":""}`,desc:e("solutionsDesc2")},{title:"Modern.js Builder",href:`https://modernjs.dev/builder${"en"===f?"/en":""}`,desc:e("solutionsDesc3")},{title:"Rspress",href:`https://rspress.dev${"en"===f?"":"/zh"}`,desc:e("solutionsDesc4")}];return(0,n.jsxs)("div",{children:[(0,n.jsxs)(i.Helmet,{children:[(0,n.jsx)("html",{className:"dark"}),(0,n.jsx)("script",{children:"window.MODERN_THEME = 'dark';"}),(0,n.jsx)("style",{type:"text/css",children:`
          .rspress-doc-appearance {
            display: none!important;
          }
        `})]}),(0,n.jsx)(h,{}),(0,n.jsxs)("main",{className:p["homepage-main"],children:[(0,n.jsxs)(c.FeatureLayout,{children:[(0,n.jsx)(l.default,{children:e("solutions")}),(0,n.jsx)("div",{className:p.cardContainer,children:g.map((e,t)=>(0,n.jsx)(a.default,{title:e.title,desc:e.desc,href:e.href},t))})]}),(0,n.jsx)(c.FeatureLayout,{children:(0,n.jsxs)("h1",{className:(0,s.default)([p.title,p.titleGradient]),style:{textAlign:"left",marginBottom:32},children:[(0,n.jsx)("div",{children:e("secondSlogan1")}),(0,n.jsx)("div",{children:e("secondSlogan2")})]})}),(0,n.jsxs)(c.FeatureLayout,{children:[(0,n.jsx)(l.default,{children:"Modern.js Framework"}),(0,n.jsx)("div",{className:p.cardContainer,children:r.map((e,t)=>(0,n.jsx)(a.default,{title:e.title,desc:e.desc,href:e.href},t))})]}),(0,n.jsx)(d.default,{})]})]})}},73753:function(e,t,r){"use strict";e.exports={"feature-layout":"feature-layout-ea3480",featureLayout:"feature-layout-ea3480"}},58506:function(e,t,r){"use strict";e.exports={title:"title-cfbf64",title:"title-cfbf64",titleWrap:"titleWrap-_245ce",titleWrap:"titleWrap-_245ce"}},47419:function(e,t,r){"use strict";e.exports={card:"card-_1c4af",card:"card-_1c4af",desc:"desc-a85d41",desc:"desc-a85d41",icon:"icon-_02dc1",icon:"icon-_02dc1",title:"title-b44362",title:"title-b44362"}},80706:function(e,t,r){"use strict";e.exports={footer:"footer-_1419c",footer:"footer-_1419c",link:"link-fff29d",link:"link-fff29d",linkTitle:"linkTitle-c4002f",linkTitle:"linkTitle-c4002f",linkWrapper:"linkWrapper-_1b066",linkWrapper:"linkWrapper-_1b066",linksWrapper:"linksWrapper-_4f8ed",linksWrapper:"linksWrapper-_4f8ed",logo:"logo-_22a8c",logo:"logo-_22a8c",wrapper:"wrapper-b33135",wrapper:"wrapper-b33135"}},44178:function(e,t,r){"use strict";e.exports={buttons:"buttons-e3d388",buttons:"buttons-e3d388",cardContainer:"cardContainer-_79b2f",cardContainer:"cardContainer-_79b2f",flowContainer:"flowContainer-_225bb",flowContainer:"flowContainer-_225bb",flowLine:"flowLine-a3999c",flowLine:"flowLine-a3999c",flowLineMobile:"flowLineMobile-_4fe65",flowLineMobile:"flowLineMobile-_4fe65",header:"header-_720aa",header:"header-_720aa",heroBanner:"heroBanner-_85caa",heroBanner:"heroBanner-_85caa","homepage-main":"homepage-main-_77128",homepageMain:"homepage-main-_77128",leftButton:"leftButton-_7ef36",leftButton:"leftButton-_7ef36",logo:"logo-_9cf1f",logo:"logo-_9cf1f",rightButton:"rightButton-_91c6e",rightButton:"rightButton-_91c6e","section-title":"section-title-dc2851",sectionTitle:"section-title-dc2851",singleImg:"singleImg-_71172",singleImg:"singleImg-_71172",singleImgCard:"singleImgCard-_1456f",singleImgCard:"singleImgCard-_1456f",singleImgWrap:"singleImgWrap-_12f4b",singleImgWrap:"singleImgWrap-_12f4b",startArrow:"startArrow-c03ec9",startArrow:"startArrow-c03ec9",title:"title-_6c4ac",title:"title-_6c4ac",titleGradient:"titleGradient-_84d55",titleGradient:"titleGradient-_84d55"}}}]);