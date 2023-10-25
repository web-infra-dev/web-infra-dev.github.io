(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["55827"],{58449:function(e,t,n){"use strict";e.exports={"feature-layout":"feature-layout-ea3480",featureLayout:"feature-layout-ea3480"}},6477:function(e,t,n){"use strict";e.exports={title:"title-cfbf64",title:"title-cfbf64",titleWrap:"titleWrap-_245ce",titleWrap:"titleWrap-_245ce"}},93817:function(e,t,n){"use strict";e.exports={card:"card-_1c4af",card:"card-_1c4af",desc:"desc-a85d41",desc:"desc-a85d41",icon:"icon-_02dc1",icon:"icon-_02dc1",title:"title-b44362",title:"title-b44362"}},16404:function(e,t,n){"use strict";e.exports={footer:"footer-_1419c",footer:"footer-_1419c",link:"link-fff29d",link:"link-fff29d",linkTitle:"linkTitle-c4002f",linkTitle:"linkTitle-c4002f",linkWrapper:"linkWrapper-_1b066",linkWrapper:"linkWrapper-_1b066",linksWrapper:"linksWrapper-_4f8ed",linksWrapper:"linksWrapper-_4f8ed",logo:"logo-_22a8c",logo:"logo-_22a8c",wrapper:"wrapper-b33135",wrapper:"wrapper-b33135"}},6343:function(e,t,n){"use strict";e.exports={buttons:"buttons-e3d388",buttons:"buttons-e3d388",cardContainer:"cardContainer-_79b2f",cardContainer:"cardContainer-_79b2f",flowContainer:"flowContainer-_225bb",flowContainer:"flowContainer-_225bb",flowLine:"flowLine-a3999c",flowLine:"flowLine-a3999c",flowLineMobile:"flowLineMobile-_4fe65",flowLineMobile:"flowLineMobile-_4fe65",header:"header-_720aa",header:"header-_720aa",heroBanner:"heroBanner-_85caa",heroBanner:"heroBanner-_85caa","homepage-main":"homepage-main-_77128",homepageMain:"homepage-main-_77128",leftButton:"leftButton-_7ef36",leftButton:"leftButton-_7ef36",logo:"logo-_9cf1f",logo:"logo-_9cf1f",rightButton:"rightButton-_91c6e",rightButton:"rightButton-_91c6e","section-title":"section-title-dc2851",sectionTitle:"section-title-dc2851",singleImg:"singleImg-_71172",singleImg:"singleImg-_71172",singleImgCard:"singleImgCard-_1456f",singleImgCard:"singleImgCard-_1456f",singleImgWrap:"singleImgWrap-_12f4b",singleImgWrap:"singleImgWrap-_12f4b",startArrow:"startArrow-c03ec9",startArrow:"startArrow-c03ec9",title:"title-_6c4ac",title:"title-_6c4ac",titleGradient:"titleGradient-_84d55",titleGradient:"titleGradient-_84d55"}},92579:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return d}});var r=n("15169"),s=n("43932"),i=n("9880"),a=n("23169"),o=n("78955");function c(e){var t=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",a:"a",h3:"h3",pre:"pre",img:"img",div:"div"},(0,a.useMDXComponents)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Type:"})," ",(0,i.jsx)(t.code,{children:"string | Object"})]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Default:"})," ",(0,i.jsx)(t.code,{children:"null"})]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["This option is used to configure a global proxy based on ",(0,i.jsx)(t.a,{href:"https://wproxy.org/whistle/",target:"_blank",rel:"noopener noreferrer",children:"whistle"})," in the development environment, which can be used to view and modify HTTP/HTTPS requests, responses, and can also be used as a proxy server."]}),"\n",(0,i.jsxs)(t.h3,{id:"register-plugin",children:["Register Plugin",(0,i.jsx)(t.a,{className:"header-anchor","aria-hidden":"true",href:"#register-plugin",children:"#"})]}),"\n",(0,i.jsxs)(t.p,{children:["Before using this option, you need to install and register the ",(0,i.jsx)(t.code,{children:"@modern-js/plugin-proxy"})," plugin:"]}),"\n","\n",(0,i.jsx)(o.PackageManagerTabs,{command:"add @modern-js/plugin-proxy -D"}),"\n",(0,i.jsxs)(t.p,{children:["After the installation, please register the plugin in the ",(0,i.jsx)(t.code,{children:"modern.config.ts"})," file:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import { appTools, defineConfig } from '@modern-js/app-tools';\nimport { proxyPlugin } from '@modern-js/plugin-proxy';\n\nexport default defineConfig({\n  plugins: [appTools(), proxyPlugin()],\n});\n"})}),"\n",(0,i.jsxs)(t.h3,{id:"object-type",children:["Object Type",(0,i.jsx)(t.a,{className:"header-anchor","aria-hidden":"true",href:"#object-type",children:"#"})]}),"\n",(0,i.jsxs)(t.p,{children:["When the value of ",(0,i.jsx)(t.code,{children:"dev.proxy"})," is object type, the ",(0,i.jsx)(t.code,{children:"key"})," of the object corresponds to the matching ",(0,i.jsx)(t.code,{children:"pattern"}),", and the ",(0,i.jsx)(t.code,{children:"value"})," of the object corresponds to the matching ",(0,i.jsx)(t.code,{children:"target"}),"."]}),"\n",(0,i.jsx)(t.p,{children:"Example:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"export default defineConfig({\n  dev: {\n    proxy: {\n      'https://www.baidu.com': 'https://google.com.hk',\n      // Static files can be returned directly via the file protocol\n      'https://example.com/api': 'file://./data.json',\n    },\n  },\n});\n"})}),"\n",(0,i.jsxs)(t.p,{children:["Please refer to ",(0,i.jsx)(t.a,{href:"https://wproxy.org/whistle/pattern.html",target:"_blank",rel:"noopener noreferrer",children:"whistle - Matching Patterns"})," for detailed usage."]}),"\n",(0,i.jsxs)(t.h3,{id:"string-type",children:["String Type",(0,i.jsx)(t.a,{className:"header-anchor","aria-hidden":"true",href:"#string-type",children:"#"})]}),"\n",(0,i.jsxs)(t.p,{children:["When the value of ",(0,i.jsx)(t.code,{children:"dev.proxy"})," is string type, it can be used to specify a separate proxy file, for example:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"export default defineConfig({\n  dev: {\n    proxy: './proxy.js',\n  },\n});\n"})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-js",meta:'title="proxy.js"',children:"module.exports = {\n  name: 'my-app',\n  rules: `\n    ^example.com:8080/api/***   http://localhost:3001/api/$\n  `,\n};\n"})}),"\n",(0,i.jsxs)(t.h3,{id:"start-proxy",children:["Start Proxy",(0,i.jsx)(t.a,{className:"header-anchor","aria-hidden":"true",href:"#start-proxy",children:"#"})]}),"\n",(0,i.jsxs)(t.p,{children:["Execute ",(0,i.jsx)(t.code,{children:"dev"}),", when the prompt is as follows, the proxy server starts successfully:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"  Local:    http://localhost:8080/\n  Network:  http://192.168.0.1:8080/\n\ninfo      Starting proxy server.....\nsuccess   Proxy server start on localhost:8899\n"})}),"\n",(0,i.jsxs)(t.p,{children:["Access the ",(0,i.jsx)(t.code,{children:"localhost:8899"})," to view the Network and configure proxy rules on the UI interface:"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/aphqeh7uhohpquloj/modern-js/docs/dev-proxy.png",alt:"proxy UI"})}),"\n",(0,i.jsxs)(t.div,{className:"rspress-directive info",children:[(0,i.jsx)(t.div,{className:"rspress-directive-title",children:"INFO"}),(0,i.jsxs)(t.div,{className:"rspress-directive-content",children:[(0,i.jsx)(t.p,{children:"The https agent automatically installs the certificate to obtain root privileges. Please enter the password as prompted. ** The password is only used when the certificate is trusted and will not be leaked or used for other links **."}),"\n"]})]})]})}function l(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object.assign({},(0,a.useMDXComponents)(),e.components).wrapper;return t?(0,i.jsx)(t,(0,s._)((0,r._)({},e),{children:(0,i.jsx)(c,(0,r._)({},e))})):c(e)}var d=l;l.__RSPRESS_PAGE_META={},l.__RSPRESS_PAGE_META["en%2Fcomponents%2Fglobal-proxy-config.mdx"]={toc:[{text:"Register Plugin",id:"register-plugin",depth:3},{text:"Object Type",id:"object-type",depth:3},{text:"String Type",id:"string-type",depth:3},{text:"Start Proxy",id:"start-proxy",depth:3}],title:""}},46475:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return d},frontmatter:function(){return u}});var r=n("15169"),s=n("43932"),i=n("9880"),a=n("23169"),o=n("92579");function c(e){var t=Object.assign({h1:"h1",a:"a"},(0,a.useMDXComponents)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.h1,{id:"devproxy",children:["dev.proxy",(0,i.jsx)(t.a,{className:"header-anchor","aria-hidden":"true",href:"#devproxy",children:"#"})]}),"\n","\n",(0,i.jsx)(o.default,{})]})}function l(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object.assign({},(0,a.useMDXComponents)(),e.components).wrapper;return t?(0,i.jsx)(t,(0,s._)((0,r._)({},e),{children:(0,i.jsx)(c,(0,r._)({},e))})):c(e)}var d=l;l.__RSPRESS_PAGE_META={},l.__RSPRESS_PAGE_META["en%2Fconfigure%2Fapp%2Fdev%2Fproxy.mdx"]={toc:[],title:"dev.proxy"};var u={sidebar_label:"proxy"}},56306:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return c}});var r=n("9880");n("6171");var s=n("54234"),i=n.n(s),a=n("34368"),o=n("93817"),c=function(e){var t=e.title,n=e.desc,s=e.href;return(0,r.jsxs)("a",{href:(0,a.withBase)(s),target:"_blank",style:{textDecoration:"none"},className:i(o.card),children:[(0,r.jsx)("span",{className:o.title,children:t}),(0,r.jsx)("span",{className:o.desc,children:n})]})}},788:function(e,t,n){"use strict";n.r(t),n.d(t,{FeatureLayout:function(){return i}});var r=n("9880");n("6171");var s=n("58449"),i=function(e){var t=e.children;return(0,r.jsx)("div",{className:s["feature-layout"],children:t})}},29114:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return d}});var r=n("15169"),s=n("43932"),i=n("85056"),a=n("9880"),o=n("26807"),c=n("16404");function l(e){var t,n=e.to,o=e.href,c=e.label,l=(0,i._)(e,["to","href","label"]);return(0,a.jsx)("a",(0,s._)((0,r._)({className:"linkItem",target:"_blank",href:o||n},l),{children:o&&((t=o).startsWith("http://")||t.startsWith("https://"))?(0,a.jsx)("span",{children:c}):c}))}function d(){var e=(0,o.useI18n)(),t=[{title:e("guide"),items:[{label:e("quickStart"),to:(0,o.useUrl)("/guides/get-started/quick-start")},{label:e("coreConcept"),to:(0,o.useUrl)("/guides/concept/entries")},{label:e("basicFeatures"),to:(0,o.useUrl)("/guides/basic-features/routes")},{label:e("advancedFeatures"),to:(0,o.useUrl)("/guides/advanced-features/rspack-start")}]},{title:"API",items:[{label:e("configuration"),to:(0,o.useUrl)("/configure/app/usage")},{label:e("command"),to:(0,o.useUrl)("/apis/app/commands")},{label:e("runtime"),to:(0,o.useUrl)("/apis/app/runtime/core/bootstrap")},{label:e("conventions"),to:(0,o.useUrl)("apis/app/hooks/src/app")}]},{title:e("topic"),items:[{label:e("microFrontend"),to:(0,o.useUrl)("/guides/topic-detail/micro-frontend/c01-introduction")},{label:e("stateManagement"),to:(0,o.useUrl)("/guides/topic-detail/model/quick-start")},{label:e("pluginSystem"),to:(0,o.useUrl)("/guides/topic-detail/framework-plugin/introduction")},{label:e("projectGenerator"),to:(0,o.useUrl)("/guides/topic-detail/generator/project")}]},{title:e("help"),items:[{label:e("changelog"),to:"https://github.com/web-infra-dev/modern.js/releases"},{label:"GitHub Issues",to:"https://github.com/web-infra-dev/modern.js/issues"},{label:e("githubDiscussion"),to:"https://github.com/web-infra-dev/modern.js/discussions"}]}].map(function(e,t){return(0,a.jsxs)("div",{className:c.linkWrapper,children:[(0,a.jsx)("div",{className:c.linkTitle,children:e.title}),(0,a.jsx)("ul",{className:c.items,children:e.items.map(function(e,t){return(0,a.jsx)("li",{className:c.link,children:(0,a.jsx)(l,(0,r._)({},e))},e.to||t)})})]},t)});return(0,a.jsx)("footer",{className:c.footer,children:(0,a.jsxs)("div",{className:c.wrapper,children:[(0,a.jsx)("img",{className:c.logo,src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/zq-uylkvT/ljhwZthlaukjlkulzlp/modern-logo-home-page-0209.svg"}),(0,a.jsx)("div",{className:c.linksWrapper,children:t})]})})}},45475:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return i}});var r=n("9880");n("6171");var s=n("6477"),i=function(e){var t=e.children;return(0,r.jsx)("div",{className:s.titleWrap,children:(0,r.jsx)("h2",{className:s.title,children:t})})}},92478:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return f}});var r=n("9880"),s=n("90591"),i=n("34368"),a=n("6171"),o=n("56306"),c=n("45475"),l=n("788"),d=n("29114"),u=n("26807"),h=n("6343"),p=function(){var e=(0,u.useI18n)();return(0,r.jsx)("div",{className:h.header,children:(0,r.jsxs)("header",{className:(0,s.default)("hero hero--primary",h.heroBanner),children:[(0,r.jsxs)("h1",{className:h.title,children:[(0,r.jsx)("div",{children:"Inspire Creativity in"}),(0,r.jsx)("div",{className:h.titleGradient,children:"Modern Web Development"})]}),(0,r.jsxs)("div",{className:h.buttons,children:[(0,r.jsxs)("a",{href:(0,u.useUrl)("/guides/get-started/introduction"),className:h.leftButton,children:[e("introduction"),(0,r.jsx)("img",{width:"20",height:"20",className:h.startArrow,src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/aphqeh7uhohpquloj/modern-js/right-arrow.svg?url"})]}),(0,r.jsx)("a",{href:(0,u.useUrl)("/guides/get-started/quick-start"),className:h.rightButton,children:e("quickStart")})]})]})})};function f(){var e=(0,u.useI18n)(),t=(0,i.useLocation)().pathname;(0,a.useEffect)(function(){return window.MODERN_THEME="dark",function(){window.MODERN_THEME=void 0}},[t]);var n=[{title:e("feature1"),href:(0,u.useUrl)("/guides/concept/builder"),desc:e("featureDesc1")},{title:e("feature2"),href:(0,u.useUrl)("/guides/advanced-features/bff/index"),desc:e("featureDesc2")},{title:e("feature3"),href:(0,u.useUrl)("/guides/basic-features/routes"),desc:e("featureDesc3")},{title:e("feature4"),href:(0,u.useUrl)("/guides/advanced-features/ssr"),desc:e("featureDesc4")},{title:e("feature5"),href:(0,u.useUrl)("/guides/basic-features/css"),desc:e("featureDesc5")},{title:e("feature6"),href:(0,u.useUrl)("/configure/app/usage"),desc:e("featureDesc6")}],f=(0,i.useLang)(),g=[{title:"Modern.js Framework",href:(0,u.useUrl)("/guides/get-started/introduction"),desc:e("solutionsDesc1")},{title:"Modern.js Module",href:"https://modernjs.dev/module-tools".concat("en"===f?"/en":""),desc:e("solutionsDesc2")},{title:"Modern.js Builder",href:"https://modernjs.dev/builder".concat("en"===f?"/en":""),desc:e("solutionsDesc3")},{title:"Rspress",href:"https://rspress.dev".concat("en"===f?"":"/zh"),desc:e("solutionsDesc4")}];return(0,r.jsxs)("div",{children:[(0,r.jsxs)(i.Helmet,{children:[(0,r.jsx)("html",{className:"dark"}),(0,r.jsx)("script",{children:"window.MODERN_THEME = 'dark';"}),(0,r.jsx)("style",{type:"text/css",children:"\n          .rspress-doc-appearance {\n            display: none!important;\n          }\n        "})]}),(0,r.jsx)(p,{}),(0,r.jsxs)("main",{className:h["homepage-main"],children:[(0,r.jsxs)(l.FeatureLayout,{children:[(0,r.jsx)(c.default,{children:e("solutions")}),(0,r.jsx)("div",{className:h.cardContainer,children:g.map(function(e,t){return(0,r.jsx)(o.default,{title:e.title,desc:e.desc,href:e.href},t)})})]}),(0,r.jsx)(l.FeatureLayout,{children:(0,r.jsxs)("h1",{className:(0,s.default)([h.title,h.titleGradient]),style:{textAlign:"left",marginBottom:32},children:[(0,r.jsx)("div",{children:e("secondSlogan1")}),(0,r.jsx)("div",{children:e("secondSlogan2")})]})}),(0,r.jsxs)(l.FeatureLayout,{children:[(0,r.jsx)(c.default,{children:"Modern.js Framework"}),(0,r.jsx)("div",{className:h.cardContainer,children:n.map(function(e,t){return(0,r.jsx)(o.default,{title:e.title,desc:e.desc,href:e.href},t)})})]}),(0,r.jsx)(d.default,{})]})]})}},72605:function(e,t,n){"use strict";n.r(t),n.d(t,{EN_US:function(){return r}});var r={introduction:"Introduction",quickStart:"Quick Start",slogan:"A Progressive React Framework for modern web development",secondSlogan1:"Enjoy the development experience.",secondSlogan2:"Make innovation happen faster.",feature1:"Rust Bundler",featureDesc1:"Easily switch to Rspack bundler with faster build speed.",feature2:"Integrated BFF",featureDesc2:"Develop BFF code in the same project, enjoy simple function calls.",feature3:"Nested Routes",featureDesc3:"File-as-route, comes with lots performance optimizations.",feature4:"Multi-Rendering Mode",featureDesc4:"SSR, SSG, SPR, all out of the box for you.",feature5:"CSS Solutions",featureDesc5:"CSS Modules, CSS-in-JS, Tailwind CSS, take your pick.",feature6:"Easy to Configure",featureDesc6:"Launch with zero configuration, then everything is configurable.",solutions:"Solutions",solutionsDesc1:"A progressive React framework for web development.",solutionsDesc2:"A powerful solution for npm package development.",solutionsDesc3:"An Rspack-based build tool for web development.",solutionsDesc4:"A fast Rspack-based static site generator",guide:"Guide",topic:"Topic",help:"Help",coreConcept:"Core Concept",basicFeatures:"Basic Features",advancedFeatures:"Advanced Features",configuration:"Configuration",command:"Command",runtime:"Runtime",conventions:"Conventions",microFrontend:"Micro Frontend",stateManagement:"State Management",pluginSystem:"Plugin System",projectGenerator:"Project Generator",githubDiscussion:"Github Discussion",changelog:"Changelog",doubao:"Doubao",writingo:"Writingo",volctrans:"Volctrans",shidianbaike:"Shidian Baike",xiaohe:"Xiaohe",dongchedi:"Dongchedi",volcengineDeveloper:"Volcengine Developer"}},26807:function(e,t,n){"use strict";n.r(t),n.d(t,{useUrl:function(){return o},useI18n:function(){return c}});var r=n("34368"),s=n("72605"),i=n("45896"),a={en:s.EN_US,zh:i.ZH_CN};function o(e){var t=(0,r.useLang)();return(0,r.withBase)("zh"===t?e:"/en".concat(e))}function c(){var e=(0,r.useLang)();return function(t){return a[e][t]}}},45896:function(e,t,n){"use strict";n.r(t),n.d(t,{ZH_CN:function(){return r}});var r={introduction:"\u4ECB\u7ECD",quickStart:"\u5FEB\u901F\u4E0A\u624B",slogan:"\u57FA\u4E8E React \u7684\u6E10\u8FDB\u5F0F Web \u5F00\u53D1\u6846\u67B6",secondSlogan1:"\u4EAB\u53D7\u6109\u60A6\u7684\u5F00\u53D1\u4F53\u9A8C\uFF0C",secondSlogan2:"\u8BA9\u521B\u65B0\u66F4\u5FEB\u53D1\u751F\u3002",feature1:"Rust \u6784\u5EFA",featureDesc1:"\u8F7B\u677E\u5207\u6362\u5230 Rspack \u6784\u5EFA\u5DE5\u5177\uFF0C\u7F16\u8BD1\u98DE\u5FEB\u3002",feature2:"\u4E00\u4F53\u5316\u5F00\u53D1",featureDesc2:"\u5728\u540C\u4E00\u9879\u76EE\u4E2D\u5B8C\u6210 BFF \u5F00\u53D1\uFF0C\u4EAB\u53D7\u7B80\u6D01\u7684\u51FD\u6570\u8C03\u7528\u3002",feature3:"\u5D4C\u5957\u8DEF\u7531",featureDesc3:"\u6587\u4EF6\u7CFB\u7EDF\u5373\u8DEF\u7531\uFF0C\u9644\u8D60\u5168\u5957\u6027\u80FD\u4F18\u5316\u3002",feature4:"\u591A\u6E32\u67D3\u6A21\u5F0F",featureDesc4:"SSR\u3001SSG\u3001SPR \u7B49\u591A\u79CD\u6E32\u67D3\u6A21\u5F0F\uFF0C\u901A\u901A\u5F00\u7BB1\u5373\u7528\u3002",feature5:"CSS \u65B9\u6848",featureDesc5:"CSS Modules\u3001CSS-in-JS\u3001Tailwind CSS\uFF0C\u4EFB\u4F60\u6311\u9009\u3002",feature6:"\u6613\u4E8E\u914D\u7F6E",featureDesc6:"\u4EE5\u96F6\u914D\u7F6E\u542F\u52A8\uFF0C\u7136\u540E\u4E00\u5207\u7686\u53EF\u914D\u7F6E\u3002",solutions:"\u89E3\u51B3\u65B9\u6848",solutionsDesc1:"\u57FA\u4E8E React \u7684\u6E10\u8FDB\u5F0F Web \u5F00\u53D1\u6846\u67B6\u3002",solutionsDesc2:"\u7B80\u5355\u3001\u9AD8\u6027\u80FD\u7684 npm \u5305\u5F00\u53D1\u65B9\u6848\u3002",solutionsDesc3:"\u57FA\u4E8E Rspack \u7684 Web \u6784\u5EFA\u5DE5\u5177\u3002",solutionsDesc4:"\u57FA\u4E8E Rspack \u7684\u9759\u6001\u7AD9\u70B9\u751F\u6210\u5668\u3002",guide:"\u6307\u5357",topic:"\u4E13\u9898",help:"\u5E2E\u52A9",coreConcept:"\u6838\u5FC3\u6982\u5FF5",basicFeatures:"\u57FA\u7840\u529F\u80FD",advancedFeatures:"\u8FDB\u9636\u529F\u80FD",configuration:"\u914D\u7F6E",command:"\u547D\u4EE4",runtime:"\u8FD0\u884C\u65F6",conventions:"\u76EE\u5F55\u7EA6\u5B9A",microFrontend:"\u5FAE\u524D\u7AEF",stateManagement:"\u72B6\u6001\u7BA1\u7406",pluginSystem:"\u63D2\u4EF6\u7CFB\u7EDF",projectGenerator:"\u9879\u76EE\u751F\u6210\u5668",githubDiscussion:"Github \u8BA8\u8BBA\u533A",changelog:"\u66F4\u65B0\u65E5\u5FD7",doubao:"\u8C46\u5305",writingo:"\u706B\u5C71\u5199\u4F5C",volctrans:"\u706B\u5C71\u7FFB\u8BD1",shidianbaike:"\u8BC6\u5178\u767E\u79D1",xiaohe:"\u5C0F\u8377\u5065\u5EB7",dongchedi:"\u61C2\u8F66\u5E1D",volcengineDeveloper:"\u706B\u5C71\u5F15\u64CE\u5F00\u53D1\u8005\u793E\u533A"}},78955:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return o}});var r=n("15169"),s=n("43932"),i=n("40826"),a=n("92478");n.es(i,t);var o=(0,s._)((0,r._)({},i.default),{HomeLayout:a.default})}}]);