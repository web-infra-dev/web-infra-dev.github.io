(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["main"],{58671:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return l}});var r=s("9880");s("6171");var n=s("54234"),i=s.n(n),a=s("94622"),o=s("43940"),l=e=>{let{title:t,desc:s,href:n}=e;return(0,r.jsxs)("a",{href:(0,a.withBase)(n),target:"_blank",style:{textDecoration:"none"},className:i(o.card),children:[(0,r.jsx)("span",{className:o.title,children:t}),(0,r.jsx)("span",{className:o.desc,children:s})]})}},30777:function(e,t,s){"use strict";s.r(t),s.d(t,{FeatureLayout:function(){return i}});var r=s("9880");s("6171");var n=s("46489");let i=e=>{let{children:t}=e;return(0,r.jsx)("div",{className:n["feature-layout"],children:t})}},55478:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return l}});var r=s("9880"),n=s("39270"),i=s("37890");let a=e=>e.startsWith("http://")||e.startsWith("https://");function o(e){let{to:t,href:s,label:n,...i}=e;return(0,r.jsx)("a",{className:"linkItem",target:"_blank",href:s||t,...i,children:s&&a(s)?(0,r.jsx)("span",{children:n}):n})}function l(){let e=(0,n.useI18n)(),t=[{title:e("guide"),items:[{label:e("quickStart"),to:(0,n.useUrl)("/guides/get-started/quick-start")},{label:e("coreConcept"),to:(0,n.useUrl)("/guides/concept/entries")},{label:e("basicFeatures"),to:(0,n.useUrl)("/guides/basic-features/routes")},{label:e("advancedFeatures"),to:(0,n.useUrl)("/guides/advanced-features/rspack-start")}]},{title:"API",items:[{label:e("configuration"),to:(0,n.useUrl)("/configure/app/usage")},{label:e("command"),to:(0,n.useUrl)("/apis/app/commands")},{label:e("runtime"),to:(0,n.useUrl)("/apis/app/runtime/core/bootstrap")},{label:e("conventions"),to:(0,n.useUrl)("apis/app/hooks/src/app")}]},{title:e("topic"),items:[{label:e("microFrontend"),to:(0,n.useUrl)("/guides/topic-detail/micro-frontend/c01-introduction")},{label:e("stateManagement"),to:(0,n.useUrl)("/guides/topic-detail/model/quick-start")},{label:e("pluginSystem"),to:(0,n.useUrl)("/guides/topic-detail/framework-plugin/introduction")},{label:e("projectGenerator"),to:(0,n.useUrl)("/guides/topic-detail/generator/project")}]},{title:e("help"),items:[{label:e("changelog"),to:"https://github.com/web-infra-dev/modern.js/releases"},{label:"GitHub Issues",to:"https://github.com/web-infra-dev/modern.js/issues"},{label:e("githubDiscussion"),to:"https://github.com/web-infra-dev/modern.js/discussions"}]}],s=t.map((e,t)=>(0,r.jsxs)("div",{className:i.linkWrapper,children:[(0,r.jsx)("div",{className:i.linkTitle,children:e.title}),(0,r.jsx)("ul",{className:i.items,children:e.items.map((e,t)=>(0,r.jsx)("li",{className:i.link,children:(0,r.jsx)(o,{...e})},e.to||t))})]},t));return(0,r.jsx)("footer",{className:i.footer,children:(0,r.jsxs)("div",{className:i.wrapper,children:[(0,r.jsx)("img",{className:i.logo,src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/zq-uylkvT/ljhwZthlaukjlkulzlp/modern-logo-home-page-0209.svg"}),(0,r.jsx)("div",{className:i.linksWrapper,children:s})]})})}},85298:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return i}});var r=s("9880");s("6171");var n=s("2320"),i=e=>{let{children:t}=e;return(0,r.jsx)("div",{className:n.titleWrap,children:(0,r.jsx)("h2",{className:n.title,children:t})})}},21676:function(e,t,s){"use strict";s.r(t),s.d(t,{EN_US:function(){return r}});let r={introduction:"Introduction",quickStart:"Quick Start",slogan:"A Progressive React Framework for modern web development",secondSlogan1:"Enjoy the development experience.",secondSlogan2:"Make innovation happen faster.",feature1:"Rust Bundler",featureDesc1:"Easily switch to Rspack bundler with faster build speed.",feature2:"Integrated BFF",featureDesc2:"Develop BFF code in the same project, enjoy simple function calls.",feature3:"Nested Routes",featureDesc3:"File-as-route, comes with lots performance optimizations.",feature4:"Multi-Rendering Mode",featureDesc4:"SSR, SSG, SPR, all out of the box for you.",feature5:"CSS Solutions",featureDesc5:"CSS Modules, CSS-in-JS, Tailwind CSS, take your pick.",feature6:"Easy to Configure",featureDesc6:"Launch with zero configuration, then everything is configurable.",solutions:"Solutions",solutionsDesc1:"A progressive React framework for web development.",solutionsDesc2:"A powerful solution for npm package development.",solutionsDesc3:"An Rspack-based build tool for web development.",solutionsDesc4:"A fast Rspack-based static site generator",guide:"Guide",topic:"Topic",help:"Help",coreConcept:"Core Concept",basicFeatures:"Basic Features",advancedFeatures:"Advanced Features",configuration:"Configuration",command:"Command",runtime:"Runtime",conventions:"Conventions",microFrontend:"Micro Frontend",stateManagement:"State Management",pluginSystem:"Plugin System",projectGenerator:"Project Generator",githubDiscussion:"Github Discussion",changelog:"Changelog",doubao:"Doubao",writingo:"Writingo",volctrans:"Volctrans",shidianbaike:"Shidian Baike",xiaohe:"Xiaohe",dongchedi:"Dongchedi",volcengineDeveloper:"Volcengine Developer"}},39270:function(e,t,s){"use strict";s.r(t),s.d(t,{useUrl:function(){return o},useI18n:function(){return l}});var r=s("94622"),n=s("21676"),i=s("53724");let a={en:n.EN_US,zh:i.ZH_CN};function o(e){let t=(0,r.useLang)();return(0,r.withBase)("zh"===t?e:`/en${e}`)}function l(){let e=(0,r.useLang)();return t=>a[e][t]}},53724:function(e,t,s){"use strict";s.r(t),s.d(t,{ZH_CN:function(){return r}});let r={introduction:"\u4ECB\u7ECD",quickStart:"\u5FEB\u901F\u4E0A\u624B",slogan:"\u57FA\u4E8E React \u7684\u6E10\u8FDB\u5F0F Web \u5F00\u53D1\u6846\u67B6",secondSlogan1:"\u4EAB\u53D7\u6109\u60A6\u7684\u5F00\u53D1\u4F53\u9A8C\uFF0C",secondSlogan2:"\u8BA9\u521B\u65B0\u66F4\u5FEB\u53D1\u751F\u3002",feature1:"Rust \u6784\u5EFA",featureDesc1:"\u8F7B\u677E\u5207\u6362\u5230 Rspack \u6784\u5EFA\u5DE5\u5177\uFF0C\u7F16\u8BD1\u98DE\u5FEB\u3002",feature2:"\u4E00\u4F53\u5316\u5F00\u53D1",featureDesc2:"\u5728\u540C\u4E00\u9879\u76EE\u4E2D\u5B8C\u6210 BFF \u5F00\u53D1\uFF0C\u4EAB\u53D7\u7B80\u6D01\u7684\u51FD\u6570\u8C03\u7528\u3002",feature3:"\u5D4C\u5957\u8DEF\u7531",featureDesc3:"\u6587\u4EF6\u7CFB\u7EDF\u5373\u8DEF\u7531\uFF0C\u9644\u8D60\u5168\u5957\u6027\u80FD\u4F18\u5316\u3002",feature4:"\u591A\u6E32\u67D3\u6A21\u5F0F",featureDesc4:"SSR\u3001SSG\u3001SPR \u7B49\u591A\u79CD\u6E32\u67D3\u6A21\u5F0F\uFF0C\u901A\u901A\u5F00\u7BB1\u5373\u7528\u3002",feature5:"CSS \u65B9\u6848",featureDesc5:"CSS Modules\u3001CSS-in-JS\u3001Tailwind CSS\uFF0C\u4EFB\u4F60\u6311\u9009\u3002",feature6:"\u6613\u4E8E\u914D\u7F6E",featureDesc6:"\u4EE5\u96F6\u914D\u7F6E\u542F\u52A8\uFF0C\u7136\u540E\u4E00\u5207\u7686\u53EF\u914D\u7F6E\u3002",solutions:"\u89E3\u51B3\u65B9\u6848",solutionsDesc1:"\u57FA\u4E8E React \u7684\u6E10\u8FDB\u5F0F Web \u5F00\u53D1\u6846\u67B6\u3002",solutionsDesc2:"\u7B80\u5355\u3001\u9AD8\u6027\u80FD\u7684 npm \u5305\u5F00\u53D1\u65B9\u6848\u3002",solutionsDesc3:"\u57FA\u4E8E Rspack \u7684 Web \u6784\u5EFA\u5DE5\u5177\u3002",solutionsDesc4:"\u57FA\u4E8E Rspack \u7684\u9759\u6001\u7AD9\u70B9\u751F\u6210\u5668\u3002",guide:"\u6307\u5357",topic:"\u4E13\u9898",help:"\u5E2E\u52A9",coreConcept:"\u6838\u5FC3\u6982\u5FF5",basicFeatures:"\u57FA\u7840\u529F\u80FD",advancedFeatures:"\u8FDB\u9636\u529F\u80FD",configuration:"\u914D\u7F6E",command:"\u547D\u4EE4",runtime:"\u8FD0\u884C\u65F6",conventions:"\u76EE\u5F55\u7EA6\u5B9A",microFrontend:"\u5FAE\u524D\u7AEF",stateManagement:"\u72B6\u6001\u7BA1\u7406",pluginSystem:"\u63D2\u4EF6\u7CFB\u7EDF",projectGenerator:"\u9879\u76EE\u751F\u6210\u5668",githubDiscussion:"Github \u8BA8\u8BBA\u533A",changelog:"\u66F4\u65B0\u65E5\u5FD7",doubao:"\u8C46\u5305",writingo:"\u706B\u5C71\u5199\u4F5C",volctrans:"\u706B\u5C71\u7FFB\u8BD1",shidianbaike:"\u8BC6\u5178\u767E\u79D1",xiaohe:"\u5C0F\u8377\u5065\u5EB7",dongchedi:"\u61C2\u8F66\u5E1D",volcengineDeveloper:"\u706B\u5C71\u5F15\u64CE\u5F00\u53D1\u8005\u793E\u533A"}},18553:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return i}});var r=s("30853"),n=s("35540");s.es(r,t);var i={...r.default,HomeLayout:n.default}},35540:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return h}});var r=s("9880"),n=s("90591"),i=s("94622"),a=s("6171"),o=s("58671"),l=s("85298"),c=s("30777"),u=s("55478"),d=s("39270"),f=s("8946");let p=()=>{let e=(0,d.useI18n)();return(0,r.jsx)("div",{className:f.header,children:(0,r.jsxs)("header",{className:(0,n.default)("hero hero--primary",f.heroBanner),children:[(0,r.jsxs)("h1",{className:f.title,children:[(0,r.jsx)("div",{children:"Inspire Creativity in"}),(0,r.jsx)("div",{className:f.titleGradient,children:"Modern Web Development"})]}),(0,r.jsxs)("div",{className:f.buttons,children:[(0,r.jsxs)("a",{href:(0,d.useUrl)("/guides/get-started/introduction"),className:f.leftButton,children:[e("introduction"),(0,r.jsx)("img",{width:"20",height:"20",className:f.startArrow,src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/aphqeh7uhohpquloj/modern-js/right-arrow.svg?url"})]}),(0,r.jsx)("a",{href:(0,d.useUrl)("/guides/get-started/quick-start"),className:f.rightButton,children:e("quickStart")})]})]})})};function h(){let e=(0,d.useI18n)(),{pathname:t}=(0,i.useLocation)();(0,a.useEffect)(()=>(window.MODERN_THEME="dark",()=>{window.MODERN_THEME=void 0}),[t]);let s=[{title:e("feature1"),href:(0,d.useUrl)("/guides/concept/builder"),desc:e("featureDesc1")},{title:e("feature2"),href:(0,d.useUrl)("/guides/advanced-features/bff/index"),desc:e("featureDesc2")},{title:e("feature3"),href:(0,d.useUrl)("/guides/basic-features/routes"),desc:e("featureDesc3")},{title:e("feature4"),href:(0,d.useUrl)("/guides/advanced-features/ssr"),desc:e("featureDesc4")},{title:e("feature5"),href:(0,d.useUrl)("/guides/basic-features/css"),desc:e("featureDesc5")},{title:e("feature6"),href:(0,d.useUrl)("/configure/app/usage"),desc:e("featureDesc6")}],h=(0,i.useLang)(),g=[{title:"Modern.js Framework",href:(0,d.useUrl)("/guides/get-started/introduction"),desc:e("solutionsDesc1")},{title:"Modern.js Module",href:`https://modernjs.dev/module-tools${"en"===h?"/en":""}`,desc:e("solutionsDesc2")},{title:"Modern.js Builder",href:`https://modernjs.dev/builder${"en"===h?"/en":""}`,desc:e("solutionsDesc3")},{title:"Rspress",href:`https://rspress.dev${"en"===h?"":"/zh"}`,desc:e("solutionsDesc4")}];return(0,r.jsxs)("div",{children:[(0,r.jsxs)(i.Helmet,{children:[(0,r.jsx)("html",{className:"dark"}),(0,r.jsx)("script",{children:"window.MODERN_THEME = 'dark';"}),(0,r.jsx)("style",{type:"text/css",children:`
          .rspress-doc-appearance {
            display: none!important;
          }
        `})]}),(0,r.jsx)(p,{}),(0,r.jsxs)("main",{className:f["homepage-main"],children:[(0,r.jsxs)(c.FeatureLayout,{children:[(0,r.jsx)(l.default,{children:e("solutions")}),(0,r.jsx)("div",{className:f.cardContainer,children:g.map((e,t)=>(0,r.jsx)(o.default,{title:e.title,desc:e.desc,href:e.href},t))})]}),(0,r.jsx)(c.FeatureLayout,{children:(0,r.jsxs)("h1",{className:(0,n.default)([f.title,f.titleGradient]),style:{textAlign:"left",marginBottom:32},children:[(0,r.jsx)("div",{children:e("secondSlogan1")}),(0,r.jsx)("div",{children:e("secondSlogan2")})]})}),(0,r.jsxs)(c.FeatureLayout,{children:[(0,r.jsx)(l.default,{children:"Modern.js Framework"}),(0,r.jsx)("div",{className:f.cardContainer,children:s.map((e,t)=>(0,r.jsx)(o.default,{title:e.title,desc:e.desc,href:e.href},t))})]}),(0,r.jsx)(u.default,{})]})]})}},46489:function(e,t,s){"use strict";e.exports={"feature-layout":"feature-layout-ea3480",featureLayout:"feature-layout-ea3480"}},2320:function(e,t,s){"use strict";e.exports={title:"title-cfbf64",title:"title-cfbf64",titleWrap:"titleWrap-_245ce",titleWrap:"titleWrap-_245ce"}},43940:function(e,t,s){"use strict";e.exports={card:"card-_1c4af",card:"card-_1c4af",desc:"desc-a85d41",desc:"desc-a85d41",icon:"icon-_02dc1",icon:"icon-_02dc1",title:"title-b44362",title:"title-b44362"}},37890:function(e,t,s){"use strict";e.exports={footer:"footer-_1419c",footer:"footer-_1419c",link:"link-fff29d",link:"link-fff29d",linkTitle:"linkTitle-c4002f",linkTitle:"linkTitle-c4002f",linkWrapper:"linkWrapper-_1b066",linkWrapper:"linkWrapper-_1b066",linksWrapper:"linksWrapper-_4f8ed",linksWrapper:"linksWrapper-_4f8ed",logo:"logo-_22a8c",logo:"logo-_22a8c",wrapper:"wrapper-b33135",wrapper:"wrapper-b33135"}},8946:function(e,t,s){"use strict";e.exports={buttons:"buttons-e3d388",buttons:"buttons-e3d388",cardContainer:"cardContainer-_79b2f",cardContainer:"cardContainer-_79b2f",flowContainer:"flowContainer-_225bb",flowContainer:"flowContainer-_225bb",flowLine:"flowLine-a3999c",flowLine:"flowLine-a3999c",flowLineMobile:"flowLineMobile-_4fe65",flowLineMobile:"flowLineMobile-_4fe65",header:"header-_720aa",header:"header-_720aa",heroBanner:"heroBanner-_85caa",heroBanner:"heroBanner-_85caa","homepage-main":"homepage-main-_77128",homepageMain:"homepage-main-_77128",leftButton:"leftButton-_7ef36",leftButton:"leftButton-_7ef36",logo:"logo-_9cf1f",logo:"logo-_9cf1f",rightButton:"rightButton-_91c6e",rightButton:"rightButton-_91c6e","section-title":"section-title-dc2851",sectionTitle:"section-title-dc2851",singleImg:"singleImg-_71172",singleImg:"singleImg-_71172",singleImgCard:"singleImgCard-_1456f",singleImgCard:"singleImgCard-_1456f",singleImgWrap:"singleImgWrap-_12f4b",singleImgWrap:"singleImgWrap-_12f4b",startArrow:"startArrow-c03ec9",startArrow:"startArrow-c03ec9",title:"title-_6c4ac",title:"title-_6c4ac",titleGradient:"titleGradient-_84d55",titleGradient:"titleGradient-_84d55"}},33972:function(e,t,s){e.exports="https://lf3-static.bytednsdoc.com/obj/eden-cn/aphqeh7uhohpquloj/modern-js/text-bg.png"},6521:function(e,t,s){e.exports="https://lf3-static.bytednsdoc.com/obj/eden-cn/zq-uylkvT/ljhwZthlaukjlkulzlp/homepage-bg-0209.png"},41350:function(e,t,s){e.exports="https://lf3-static.bytednsdoc.com/obj/eden-cn/zq-uylkvT/ljhwZthlaukjlkulzlp/homepage-mobile-bg-0209.png"},62912:function(e,t,s){"use strict";s.r(t),s("40789"),s("36986"),s("21159"),s("56525"),s("40993"),s("54313"),s("5737"),s("82623"),s("33668"),s("43016"),s("67279"),s("72659"),s("21042"),s("7382"),s("27834"),s("22308"),s("84393"),s("77247"),s("92444"),s("32985"),s("24323"),s("88046"),s("78639"),s("59841"),s("26729"),s("45605"),s("36543"),s("75550"),s("88694"),s("3887"),s("86740"),s("23170"),s("8468"),s("17653"),s("66547"),s("39560"),s("50301"),s("93346"),s("48386"),s("78771"),s("83960"),s("38116"),s("31623"),s("57764"),s("32049"),s("27409"),s("5330"),s("89184"),s("60402"),s("56710"),s("42543"),s("55220"),s("8296"),s("97540"),s("63145"),s("83731"),s("92210"),s("90517"),s("11017"),s("89095"),s("68691"),s("61931"),s("62522"),s("31397"),s("83685"),s("41644"),s("79346"),s("49217"),s("62558"),s("68514"),s("49449"),s("45145"),s("52622"),s("21629"),s("60996"),s("6369"),s("72880"),s("63298"),s("52832"),s("68900"),s("58554"),s("87253"),s("54368"),s("60049"),s("16790"),s("30406"),s("38193"),s("68902"),s("85179"),s("13767"),s("16549"),s("44400"),s("43186"),s("24468"),s("19272"),s("77544"),s("99353"),s("36852"),s("16476"),s("92260"),s("78420"),s("55001"),s("21860"),s("39193"),s("86167"),s("77253"),s("9316"),s("73455"),s("90095"),s("68571"),s("86842"),s("58618"),s("34453"),s("19418"),s("65881"),s("37367"),s("190"),s("10283"),s("22111"),s("69392"),s("30612"),s("69724"),s("50848"),s("64008"),s("31898"),s("54130"),s("43136"),s("3686"),s("81048"),s("58754"),s("19416"),s("70071"),s("97588"),s("75213"),s("88265"),s("57275"),s("91654"),s("83788"),s("70920"),s("280"),s("67399"),s("84881"),s("54622"),s("93019"),s("65163"),s("21687"),s("87805"),s("19578"),s("56610"),s("85390"),s("43976"),s("2516"),s("99936"),s("33346"),s("46300"),s("45839"),s("83872"),s("28875"),s("46407"),s("99373"),s("53726"),s("9345"),s("12116"),s("41730"),s("49387"),s("99109"),s("56786"),s("78391"),s("75810"),s("85291"),s("61990"),s("67097"),s("43350"),s("46275"),s("35014"),s("30146"),s("7429"),s("77351"),s("44783"),s("37840"),s("32502"),s("90639"),s("7709"),s("54939"),s("96127"),s("33369"),s("18954"),s("51038"),s("2147"),s("58466"),s("91204"),s("83314"),s("12778"),s("1950"),s("44384"),s("92402"),s("15862"),s("98909"),s("31034"),s("98844"),s("24415"),s("48068"),s("6767"),s("13689"),s("93322"),s("74755")}},function(e){var t=function(t){return e(e.s=t)};e.O(0,["26238","36297","lib-lodash","lib-polyfill","lib-react","lib-router"],function(){return t("62912"),t("924")}),e.O()}]);