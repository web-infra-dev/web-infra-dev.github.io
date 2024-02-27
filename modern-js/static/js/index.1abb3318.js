/*! For license information please see index.1abb3318.js.LICENSE.txt */
(function(){var e,t,a,c,d,r,n,f,o,i,s,b,u,l,p={797:function(e,t,a){"use strict";a.r(t);var c=a("39980");a("2363");var d=a("58920"),r=a.n(d),n=a("38322"),f=a("96526");t.default=e=>{let{title:t,desc:a,href:d}=e;return(0,c.jsxs)("a",{href:(0,n.withBase)(d),target:"_blank",style:{textDecoration:"none"},className:r()(f.card),children:[(0,c.jsx)("span",{className:f.title,children:t}),(0,c.jsx)("span",{className:f.desc,children:a})]})}},11670:function(e,t,a){"use strict";a.r(t),a.d(t,{FeatureLayout:function(){return r}});var c=a("39980");a("2363");var d=a("22583");let r=e=>{let{children:t}=e;return(0,c.jsx)("div",{className:d["feature-layout"],children:t})}},77679:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return o}}),a("6868"),a("4331");var c=a("39980"),d=a("34130"),r=a("2165");let n=e=>e.startsWith("http://")||e.startsWith("https://");function f(e){let{to:t,href:a,label:d,...r}=e;return(0,c.jsx)("a",{className:"linkItem",target:"_blank",href:a||t,...r,children:a&&n(a)?(0,c.jsx)("span",{children:d}):d})}function o(){let e=(0,d.useI18n)(),t=[{title:e("guide"),items:[{label:e("quickStart"),to:(0,d.useUrl)("/guides/get-started/quick-start")},{label:e("coreConcept"),to:(0,d.useUrl)("/guides/concept/entries")},{label:e("basicFeatures"),to:(0,d.useUrl)("/guides/basic-features/routes")},{label:e("advancedFeatures"),to:(0,d.useUrl)("/guides/advanced-features/rspack-start")}]},{title:"API",items:[{label:e("configuration"),to:(0,d.useUrl)("/configure/app/usage")},{label:e("command"),to:(0,d.useUrl)("/apis/app/commands")},{label:e("runtime"),to:(0,d.useUrl)("/apis/app/runtime/core/bootstrap")},{label:e("conventions"),to:(0,d.useUrl)("apis/app/hooks/src/app")}]},{title:e("topic"),items:[{label:e("microFrontend"),to:(0,d.useUrl)("/guides/topic-detail/micro-frontend/c01-introduction")},{label:e("stateManagement"),to:(0,d.useUrl)("/guides/topic-detail/model/quick-start")},{label:e("pluginSystem"),to:(0,d.useUrl)("/guides/topic-detail/framework-plugin/introduction")},{label:e("projectGenerator"),to:(0,d.useUrl)("/guides/topic-detail/generator/project")}]},{title:e("help"),items:[{label:e("changelog"),to:"https://github.com/web-infra-dev/modern.js/releases"},{label:"GitHub Issues",to:"https://github.com/web-infra-dev/modern.js/issues"},{label:e("githubDiscussion"),to:"https://github.com/web-infra-dev/modern.js/discussions"}]}].map((e,t)=>(0,c.jsxs)("div",{className:r.linkWrapper,children:[(0,c.jsx)("div",{className:r.linkTitle,children:e.title}),(0,c.jsx)("ul",{className:r.items,children:e.items.map((e,t)=>(0,c.jsx)("li",{className:r.link,children:(0,c.jsx)(f,{...e})},e.to||t))})]},t));return(0,c.jsx)("footer",{className:r.footer,children:(0,c.jsxs)("div",{className:r.wrapper,children:[(0,c.jsx)("img",{className:r.logo,src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/zq-uylkvT/ljhwZthlaukjlkulzlp/modern-logo-home-page-0209.svg"}),(0,c.jsx)("div",{className:r.linksWrapper,children:t})]})})}},17202:function(e,t,a){"use strict";a.r(t);var c=a("39980");a("2363");var d=a("31681");t.default=e=>{let{children:t}=e;return(0,c.jsx)("div",{className:d.titleWrap,children:(0,c.jsx)("h2",{className:d.title,children:t})})}},19237:function(e,t,a){"use strict";a.r(t),a.d(t,{EN_US:function(){return c}});let c={introduction:"Introduction",quickStart:"Quick Start",slogan:"A Progressive React Framework for modern web development",secondSlogan1:"Enjoy the development experience.",secondSlogan2:"Make innovation happen faster.",feature1:"Rust Bundler",featureDesc1:"Easily switch to Rspack bundler with faster build speed.",feature2:"Integrated BFF",featureDesc2:"Develop BFF code in the same project, enjoy simple function calls.",feature3:"Nested Routes",featureDesc3:"File-as-route, comes with lots performance optimizations.",feature4:"Multi-Rendering Mode",featureDesc4:"SSR, SSG, SPR, all out of the box for you.",feature5:"CSS Solutions",featureDesc5:"CSS Modules, CSS-in-JS, Tailwind CSS, take your pick.",feature6:"Easy to Configure",featureDesc6:"Launch with zero configuration, then everything is configurable.",solutions:"Solutions",solutionsDesc1:"A progressive React framework for web development.",solutionsDesc2:"A powerful solution for npm package development.",solutionsDesc3:"An Rspack-based build tool for web development.",solutionsDesc4:"A fast Rspack-based static site generator",guide:"Guide",topic:"Topic",help:"Help",coreConcept:"Core Concept",basicFeatures:"Basic Features",advancedFeatures:"Advanced Features",configuration:"Configuration",command:"Command",runtime:"Runtime",conventions:"Conventions",microFrontend:"Micro Frontend",stateManagement:"State Management",pluginSystem:"Plugin System",projectGenerator:"Project Generator",githubDiscussion:"Github Discussion",changelog:"Changelog",doubao:"Doubao",writingo:"Writingo",volctrans:"Volctrans",shidianbaike:"Shidian Baike",xiaohe:"Xiaohe",dongchedi:"Dongchedi",volcengineDeveloper:"Volcengine Developer"}},34130:function(e,t,a){"use strict";a.r(t),a.d(t,{useI18n:function(){return o},useUrl:function(){return f}});var c=a("38322"),d=a("19237"),r=a("78638");let n={en:d.EN_US,zh:r.ZH_CN};function f(e){let t=(0,c.useLang)();return(0,c.withBase)("zh"===t?e:`/en${e}`)}function o(){let e=(0,c.useLang)();return t=>n[e][t]}},78638:function(e,t,a){"use strict";a.r(t),a.d(t,{ZH_CN:function(){return c}});let c={introduction:"\u4ECB\u7ECD",quickStart:"\u5FEB\u901F\u4E0A\u624B",slogan:"\u57FA\u4E8E React \u7684\u6E10\u8FDB\u5F0F Web \u5F00\u53D1\u6846\u67B6",secondSlogan1:"\u4EAB\u53D7\u6109\u60A6\u7684\u5F00\u53D1\u4F53\u9A8C\uFF0C",secondSlogan2:"\u8BA9\u521B\u65B0\u66F4\u5FEB\u53D1\u751F\u3002",feature1:"Rust \u6784\u5EFA",featureDesc1:"\u8F7B\u677E\u5207\u6362\u5230 Rspack \u6784\u5EFA\u5DE5\u5177\uFF0C\u7F16\u8BD1\u98DE\u5FEB\u3002",feature2:"\u4E00\u4F53\u5316\u5F00\u53D1",featureDesc2:"\u5728\u540C\u4E00\u9879\u76EE\u4E2D\u5B8C\u6210 BFF \u5F00\u53D1\uFF0C\u4EAB\u53D7\u7B80\u6D01\u7684\u51FD\u6570\u8C03\u7528\u3002",feature3:"\u5D4C\u5957\u8DEF\u7531",featureDesc3:"\u6587\u4EF6\u7CFB\u7EDF\u5373\u8DEF\u7531\uFF0C\u9644\u8D60\u5168\u5957\u6027\u80FD\u4F18\u5316\u3002",feature4:"\u591A\u6E32\u67D3\u6A21\u5F0F",featureDesc4:"SSR\u3001SSG\u3001SPR \u7B49\u591A\u79CD\u6E32\u67D3\u6A21\u5F0F\uFF0C\u901A\u901A\u5F00\u7BB1\u5373\u7528\u3002",feature5:"CSS \u65B9\u6848",featureDesc5:"CSS Modules\u3001CSS-in-JS\u3001Tailwind CSS\uFF0C\u4EFB\u4F60\u6311\u9009\u3002",feature6:"\u6613\u4E8E\u914D\u7F6E",featureDesc6:"\u4EE5\u96F6\u914D\u7F6E\u542F\u52A8\uFF0C\u7136\u540E\u4E00\u5207\u7686\u53EF\u914D\u7F6E\u3002",solutions:"\u89E3\u51B3\u65B9\u6848",solutionsDesc1:"\u57FA\u4E8E React \u7684\u6E10\u8FDB\u5F0F Web \u5F00\u53D1\u6846\u67B6\u3002",solutionsDesc2:"\u7B80\u5355\u3001\u9AD8\u6027\u80FD\u7684 npm \u5305\u5F00\u53D1\u65B9\u6848\u3002",solutionsDesc3:"\u57FA\u4E8E Rspack \u7684 Web \u6784\u5EFA\u5DE5\u5177\u3002",solutionsDesc4:"\u57FA\u4E8E Rspack \u7684\u9759\u6001\u7AD9\u70B9\u751F\u6210\u5668\u3002",guide:"\u6307\u5357",topic:"\u4E13\u9898",help:"\u5E2E\u52A9",coreConcept:"\u6838\u5FC3\u6982\u5FF5",basicFeatures:"\u57FA\u7840\u529F\u80FD",advancedFeatures:"\u8FDB\u9636\u529F\u80FD",configuration:"\u914D\u7F6E",command:"\u547D\u4EE4",runtime:"\u8FD0\u884C\u65F6",conventions:"\u76EE\u5F55\u7EA6\u5B9A",microFrontend:"\u5FAE\u524D\u7AEF",stateManagement:"\u72B6\u6001\u7BA1\u7406",pluginSystem:"\u63D2\u4EF6\u7CFB\u7EDF",projectGenerator:"\u9879\u76EE\u751F\u6210\u5668",githubDiscussion:"Github \u8BA8\u8BBA\u533A",changelog:"\u66F4\u65B0\u65E5\u5FD7",doubao:"\u8C46\u5305",writingo:"\u706B\u5C71\u5199\u4F5C",volctrans:"\u706B\u5C71\u7FFB\u8BD1",shidianbaike:"\u8BC6\u5178\u767E\u79D1",xiaohe:"\u5C0F\u8377\u5065\u5EB7",dongchedi:"\u61C2\u8F66\u5E1D",volcengineDeveloper:"\u706B\u5C71\u5F15\u64CE\u5F00\u53D1\u8005\u793E\u533A"}},69553:function(e,t,a){"use strict";a.r(t);var c=a("3807"),d=a("31449");a.es(c,t),t.default={...c.default,HomeLayout:d.default}},31449:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return p}}),a("6868"),a("4331");var c=a("39980"),d=a("88640"),r=a("38322"),n=a("2363"),f=a("797"),o=a("17202"),i=a("11670"),s=a("77679"),b=a("34130"),u=a("6856");let l=()=>{let e=(0,b.useI18n)();return(0,c.jsx)("div",{className:u.header,children:(0,c.jsxs)("header",{className:(0,d.default)("hero hero--primary",u.heroBanner),children:[(0,c.jsxs)("h1",{className:u.title,children:[(0,c.jsx)("div",{children:"Inspire Creativity in"}),(0,c.jsx)("div",{className:u.titleGradient,children:"Modern Web Development"})]}),(0,c.jsxs)("div",{className:u.buttons,children:[(0,c.jsxs)("a",{href:(0,b.useUrl)("/guides/get-started/introduction"),className:u.leftButton,children:[e("introduction"),(0,c.jsx)("img",{width:"20",height:"20",className:u.startArrow,src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/aphqeh7uhohpquloj/modern-js/right-arrow.svg?url"})]}),(0,c.jsx)("a",{href:(0,b.useUrl)("/guides/get-started/quick-start"),className:u.rightButton,children:e("quickStart")})]})]})})};function p(){let e=(0,b.useI18n)(),{pathname:t}=(0,r.useLocation)();(0,n.useEffect)(()=>(window.MODERN_THEME="dark",()=>{window.MODERN_THEME=void 0}),[t]);let a=[{title:e("feature1"),href:(0,b.useUrl)("/guides/concept/builder"),desc:e("featureDesc1")},{title:e("feature2"),href:(0,b.useUrl)("/guides/advanced-features/bff/index"),desc:e("featureDesc2")},{title:e("feature3"),href:(0,b.useUrl)("/guides/basic-features/routes"),desc:e("featureDesc3")},{title:e("feature4"),href:(0,b.useUrl)("/guides/advanced-features/ssr"),desc:e("featureDesc4")},{title:e("feature5"),href:(0,b.useUrl)("/guides/basic-features/css"),desc:e("featureDesc5")},{title:e("feature6"),href:(0,b.useUrl)("/configure/app/usage"),desc:e("featureDesc6")}],p=(0,r.useLang)(),h=[{title:"Modern.js Framework",href:(0,b.useUrl)("/guides/get-started/introduction"),desc:e("solutionsDesc1")},{title:"Modern.js Module",href:`https://modernjs.dev/module-tools${"en"===p?"/en":""}`,desc:e("solutionsDesc2")}];return(0,c.jsxs)("div",{children:[(0,c.jsxs)(r.Helmet,{children:[(0,c.jsx)("html",{className:"dark"}),(0,c.jsx)("script",{children:"window.MODERN_THEME = 'dark';"}),(0,c.jsx)("style",{type:"text/css",children:`
          .rspress-doc-appearance {
            display: none!important;
          }
        `})]}),(0,c.jsx)(l,{}),(0,c.jsxs)("main",{className:u["homepage-main"],children:[(0,c.jsxs)(i.FeatureLayout,{children:[(0,c.jsx)(o.default,{children:e("solutions")}),(0,c.jsx)("div",{className:u.cardContainer,children:h.map((e,t)=>(0,c.jsx)(f.default,{title:e.title,desc:e.desc,href:e.href},t))})]}),(0,c.jsx)(i.FeatureLayout,{children:(0,c.jsxs)("h1",{className:(0,d.default)([u.title,u.titleGradient]),style:{textAlign:"left",marginBottom:32},children:[(0,c.jsx)("div",{children:e("secondSlogan1")}),(0,c.jsx)("div",{children:e("secondSlogan2")})]})}),(0,c.jsxs)(i.FeatureLayout,{children:[(0,c.jsx)(o.default,{children:"Modern.js Framework"}),(0,c.jsx)("div",{className:u.cardContainer,children:a.map((e,t)=>(0,c.jsx)(f.default,{title:e.title,desc:e.desc,href:e.href},t))})]}),(0,c.jsx)(s.default,{})]})]})}},22583:function(e){"use strict";e.exports={"feature-layout":"feature-layout-_615f0",featureLayout:"feature-layout-_615f0"}},31681:function(e){"use strict";e.exports={title:"title-ede466",titleWrap:"titleWrap-_52f2b"}},96526:function(e){"use strict";e.exports={card:"card-_1c4af",desc:"desc-_15f62",icon:"icon-_2a181",title:"title-_0d7c2"}},2165:function(e){"use strict";e.exports={footer:"footer-_3e7a4",link:"link-_14826",linkTitle:"linkTitle-d0af17",linkWrapper:"linkWrapper-_38cdb",linksWrapper:"linksWrapper-_044df",logo:"logo-_22a8c",wrapper:"wrapper-_36d05"}},6856:function(e){"use strict";e.exports={buttons:"buttons-_77025",cardContainer:"cardContainer-_1b7be",flowContainer:"flowContainer-_5b6e8",flowLine:"flowLine-ca36e8",flowLineMobile:"flowLineMobile-da3255",header:"header-f9b6c8",heroBanner:"heroBanner-c116f4","homepage-main":"homepage-main-a7e8b5",homepageMain:"homepage-main-a7e8b5",leftButton:"leftButton-d3ddb2",logo:"logo-_9cf1f",rightButton:"rightButton-_63fe4","section-title":"section-title-_78664",sectionTitle:"section-title-_78664",singleImg:"singleImg-_6cabd",singleImgCard:"singleImgCard-_01234",singleImgWrap:"singleImgWrap-_41221",startArrow:"startArrow-_72557",title:"title-_036f2",titleGradient:"titleGradient-b90643"}},2090:function(e){e.exports="https://lf3-static.bytednsdoc.com/obj/eden-cn/aphqeh7uhohpquloj/modern-js/text-bg.png"},68792:function(e){e.exports="https://lf3-static.bytednsdoc.com/obj/eden-cn/zq-uylkvT/ljhwZthlaukjlkulzlp/homepage-bg-0209.png"},29416:function(e){e.exports="https://lf3-static.bytednsdoc.com/obj/eden-cn/zq-uylkvT/ljhwZthlaukjlkulzlp/homepage-mobile-bg-0209.png"}},h={};function m(e){var t=h[e];if(void 0!==t)return t.exports;var a=h[e]={id:e,loaded:!1,exports:{}};return p[e].call(a.exports,a,a.exports,m),a.loaded=!0,a.exports}m.m=p,m.es=function(e,t){return Object.keys(e).forEach(function(a){"default"!==a&&!Object.prototype.hasOwnProperty.call(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:function(){return e[a]}})}),e},m.f={},m.e=function(e){return Promise.all(Object.keys(m.f).reduce(function(t,a){return m.f[a](e,t),t},[]))},e=[],m.O=function(t,a,c,d){if(a){d=d||0;for(var r=e.length;r>0&&e[r-1][2]>d;r--)e[r]=e[r-1];e[r]=[a,c,d];return}for(var n=1/0,r=0;r<e.length;r++){for(var a=e[r][0],c=e[r][1],d=e[r][2],f=!0,o=0;o<a.length;o++)n>=d&&Object.keys(m.O).every(function(e){return m.O[e](a[o])})?a.splice(o--,1):(f=!1,d<n&&(n=d));if(f){e.splice(r--,1);var i=c();void 0!==i&&(t=i)}}return t},m.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||Function("return this")()}catch(e){if("object"==typeof window)return window}}(),m.d=function(e,t){for(var a in t)m.o(t,a)&&!m.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},m.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},m.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return m.d(t,{a:t}),t},a=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},m.t=function(e,c){if(1&c&&(e=this(e)),8&c||"object"==typeof e&&e&&(4&c&&e.__esModule||16&c&&"function"==typeof e.then))return e;var d=Object.create(null);m.r(d);var r={};t=t||[null,a({}),a([]),a(a)];for(var n=2&c&&e;"object"==typeof n&&!~t.indexOf(n);n=a(n))Object.getOwnPropertyNames(n).forEach(function(t){r[t]=function(){return e[t]}});return r.default=function(){return e},m.d(d,r),d},m.nmd=function(e){return e.paths=[],!e.children&&(e.children=[]),e},m.p="/",m.u=function(e){return"static/js/async/"+e+"."+({10167:"bce4bd74",10205:"50f83623",10206:"1f92b7ac",10506:"4b98eab9",10679:"257440d1",10830:"55cec2a3",11081:"df4a253f",11338:"4d27b010",11378:"e17e2df8",11434:"e70ccddc",118:"c2992bfc",11803:"4717fe0c",11848:"2dfd26d9",11949:"47660e04",12041:"9b3e26f0",12104:"ed13e751",12339:"d8d227a4",12691:"32e4cdb1",12845:"f2fa4031",12960:"7f7b57ca",12996:"7c3203a5",13109:"1a2850ff",13192:"206798f4",13284:"8461e0c1",13466:"fa8f4377",13491:"641e15ee",13936:"af69b974",14134:"12b90b0a",14239:"aa89814b",1432:"85681904",14413:"c2502bca",14422:"27a02acb",14436:"b4197dd4",145:"2664e636",1458:"3487b639",14830:"ce0e0a99",14922:"6f15185e",15155:"eafe9913",15326:"be45e491",15421:"c3db7d50",15661:"48b8ec36",15868:"2979d4c5",15927:"2046dc66",16199:"1b803134",16290:"0a478f50",16298:"05681451",16626:"084a670c",16744:"268fbabf",16842:"cfbed3b6",17031:"d9147e4c",1739:"44edf4ec",17444:"9ab8987e",17525:"87b59595",17555:"449df39a",18282:"dc26c454",1843:"250e556e",18466:"b5952213",18652:"f6f8bcbc",18818:"2028a552",18862:"47ee97ec",18961:"76aaffa7",19055:"8549356f",19135:"6f3e23f6",19595:"08b93d95",19684:"6b45b91e",19756:"3b5fc80b",19856:"c9a726ae",20012:"63ef5a42",20270:"7105de75",20957:"b01c78b9",2104:"fcc3b773",21091:"d0851378",21396:"f428fc67",21433:"bc1ff16b",21730:"4ced294c",22052:"ecc9a06e",22132:"46543386",22290:"e6be46f0",22438:"38aad036",22762:"13b11d94",22782:"2a5846a9",23018:"7e8bc5e4",23153:"47f14b91",23336:"faccb950",23571:"60a72dae",23671:"ad0ba3b7",23712:"8f58a04c",23844:"4d94ee58",23988:"06c66504",24010:"b63f6701",24025:"fd2634b9",24355:"7b3405a5",24565:"3f5e023e",24619:"11bae6bc",24646:"b68c6a5a",24782:"6a305e07",24797:"27a6ea25",25071:"2318b9bd",25132:"9c0c93cd",25190:"d6dc6aca",25423:"14917cf5",25436:"c3a76446",2545:"4b4dde69",25785:"512dbc5b",25821:"a5a0dde8",25934:"1120904b",26090:"6e9769c9",26131:"560b3672",26132:"a9fa749c",26139:"753c819b",26157:"45417258",26251:"76e13aaa",26558:"83a21569",26569:"be7b5bdd",26596:"b8018cbb",2662:"2e5cce90",26721:"eddccfbe",26781:"d6f299df",26940:"50942d1a",26962:"299cf2ce",26965:"f56e786f",26990:"0f240fca",27228:"42284075",27285:"ba7a7310",2742:"a07bd312",27458:"e043a138",2747:"a6f62708",28080:"b1b233fe",28261:"62da8a00",28298:"48e6932f",2864:"98eab939",28679:"d6a61d4f",28944:"32ea7ab4",29015:"f5e3fbd4",29285:"622dfa03",29423:"8bb5ec09",29679:"90bc81e4",29804:"400c8831",29978:"bcd73d6f",30180:"85683968",30496:"c0c9c63e",30743:"fa33c3a4",3075:"3afeb36d",31006:"82982d8f",31421:"21d10dbe",31440:"8eae74d9",3145:"8a249c33",31679:"af97ba7f",31722:"5f12eecc",32033:"798477fe",32198:"bcb03664",32380:"d6e4cb67",32577:"e0817641",32711:"34330127",32773:"d9327927",32848:"d26ecb62",33015:"61a669a5",3304:"70603a6d",33351:"232ad293",33482:"0892a3c7",33616:"9e516aa7",33906:"7790c7e6",34072:"3e976307",34164:"5dc04f78",342:"cd9f082d",34226:"12c99888",34360:"e18162b8",34441:"cd1ee806",34667:"cea3cf54",34669:"96be7c63",34969:"e51f8cc5",35014:"5aa2e27f",35200:"dd5965f7",35610:"b4d6b2ee",35631:"08f9307a",35722:"e3bd4a69",35739:"967082bb",35935:"df166dfa",35970:"d1919ed3",36109:"78bc7fc7",36689:"ac71bbc2",36820:"10ba96f2",36956:"b06cdbc9",36975:"18d8f120",37016:"7375e7b6",37252:"3a23a8a6",37319:"e7ad8f6e",37548:"4badaad9",37568:"b0756522",37632:"747bddc6",37790:"6e0eff4f",37899:"827ca89e",38192:"624415df",38278:"fd64fed9",38339:"d463655a",38364:"0d429d88",38428:"252ff144",38528:"26af432f",38677:"67d5f8bf",38692:"32ef3d6a",38731:"3fb84493",38886:"cd18e77b",39144:"36df0555",39240:"3e6b3add",39301:"f78d6b06",39368:"0dcffe57",39404:"d7e966f5",39572:"25c8b1e5",39772:"8065be64",39834:"cb217a1e",3988:"f246c173",39935:"0eff0721",4009:"cf73dc15",40106:"af7174b3",40323:"b4dfe902",40341:"1e95e9f0",40358:"f19c8628",40468:"47fd1e74",40535:"74a12bde",41276:"8e6121a8",41309:"9e5aa491",41323:"76ac08f9",41513:"e4897455",41531:"df7e6e8e",41571:"9b0fbe85",41694:"3ea8d15b",41749:"588f6870",41776:"4c137b2e",41786:"9f4347cf",42103:"cbd09d60",42166:"b0aa20f7",42230:"85063c25",42283:"c9f43070",42631:"7f9b714d",42791:"e612a947",42915:"71850c1c",42954:"5066351e",42965:"c54a874b",43144:"b6991d79",43182:"733fe87e",43463:"fdb348a8",43479:"e6c98437",4421:"f543e7f8",44398:"0072c8ac",44566:"2fc30107",4493:"1d89b7a0",44997:"8d6f2e8f",45140:"fd9fa784",45165:"004a4a06",45244:"3f294608",45368:"4ac5c8aa",45406:"14fabfd7",45515:"565b2d39",45580:"3c1c72cd",45704:"adcf78e4",4601:"80ea9c66",46045:"ba82e2b5",46183:"f091be53",46313:"da4b559b",46500:"0122c13e",46536:"e38c6126",46542:"2a28c731",46600:"a8696169",46698:"0cfadefb",46763:"1a62b989",4681:"b391623f",46835:"07e11806",46925:"f9c5d125",46997:"70767a7a",47105:"99324f1d",47196:"fb0fb13b",47283:"38d3bf99",47501:"1b262c6a",47605:"44a1dab7",47671:"163d0f62",47677:"0e59743c",47700:"9a46710b",4786:"73892493",47986:"da009570",48065:"f0261365",48144:"932336be",48237:"c1eb7c32",48473:"47581b06",48669:"35729189",49139:"5a4a051b",49161:"b32cb483",49220:"c22155a3",49232:"c0f723a4",49240:"f516c492",49749:"c27d65c1",50093:"f5e1eaed",50467:"b8f0f875",50647:"23f934b6",50709:"34048644",50745:"6912e8db",50759:"070d613b",50849:"49343104",50902:"225fb8ee",50997:"d80d0a3b",51032:"466dc5e1",51084:"80ceec11",51168:"97362635",51528:"fb8c8b36",51740:"d2ebe34e",51742:"897dbdbe",51754:"0a33b431",51757:"96c9de13",51782:"2c2ca9d9",51829:"fd67a662",51974:"70cc6e16",51980:"6e6d65e5",52180:"23b99b7c",52227:"a4b9f0c9",52353:"3c479756",52621:"cb77d78c",52710:"ae06d066",53036:"4f17c715",53769:"4e7828aa",54067:"3bb0a93b",5425:"cc274382",54556:"5592472a",5472:"7ad78e6a",54846:"7acd9a16",55237:"00e2e804",55375:"61e64c69",55379:"dfdfa4f0",55384:"d3de6e08",55456:"2ded1e24",55478:"b99338e2",55764:"f4b0e65e",55875:"3c34ef3c",56318:"8ab05d89",5633:"fdc92a13",56397:"070b8487",56489:"9abeb512",56702:"28272f79",56710:"97d85a09",56873:"b55bdd7d",57025:"4461499d",57031:"6bbd046f",57090:"d0985293",57389:"c1b5b339",5761:"adc3f2ea",57654:"5356175f",57918:"058e1ad5",58153:"94ff7c4d",58258:"46169ed6",58454:"78c1e120",58796:"bd6f47d3",5888:"c23244e1",59071:"f8c24db1",59167:"a2579592",59245:"2edc05b6",59258:"5431abda",59269:"37fedc2f",59548:"78bbe8cc",59640:"cffdacb8",59658:"f8948b80",59962:"479c1d54",5998:"a47164bd",60109:"52f75292",60114:"8698a962",60319:"1c35ed32",60483:"8c0aa6e0",60852:"cab828ac",60865:"420ad304",60904:"afe66134",6101:"c136bb9d",61258:"cf7b5e56",6126:"c55529b3",61269:"cec74ed8",61325:"5b630fef",61404:"7e7970c9",6153:"489f55a1",61556:"3f2d02f1",61581:"99d9b679",61591:"f0bd64c4",61759:"63b77734",61786:"914083bf",62187:"42fd5126",62189:"7817976e",6223:"12919694",62371:"4e7b4607",62506:"4215039b",6273:"dc6cee2e",62922:"fddf1afc",63014:"bc972c76",63045:"98b3c5f5",63672:"6269e7c8",63676:"12e82da2",63779:"9d04d4cc",63915:"be489a46",65020:"f254de50",65235:"9d744a0d",65723:"cca80fde",65772:"5358b5e6",6599:"069d4c22",6627:"096fdd06",66448:"53efd4c2",66506:"4854b174",66536:"77a911d6",66565:"21768c87",66702:"f18ada02",66799:"c72689a0",66866:"073e77c6",66881:"a98046f5",67483:"87b042f8",67512:"090b1e5a",6755:"2eaa7276",67895:"b2678590",68004:"61d0f347",68299:"f44c3c0e",68319:"da9cee26",68995:"df8fc265",69318:"7dd1c872",69340:"ab014e43",69391:"264f8933",69532:"758c3672",6971:"d8cf2bd7",69836:"ec9a0c3a",70106:"8d8172f5",70153:"14eb3fac",70263:"0c42b87f",70269:"91e473b0",70867:"5fb61799",70876:"fdd05f5b",71163:"aabec220",71198:"27a8dbe0",71369:"ca68b7ca",71446:"c56d8367",71681:"6baf338c",71808:"f623ebac",71849:"daf44fb1",7189:"24179d9b",72047:"b5d164e4",7212:"14a0d8f3",72444:"1a13b5ea",72534:"35c5c382",72659:"1c967552",72797:"f4c20e44",72828:"7882e0f7",72934:"17c64e61",7330:"57937199",7359:"34965e2c",73691:"8ac0210e",73965:"b8a2b390",73990:"8f266f8c",74312:"e633708f",74353:"b2704483",74433:"7c984463",74463:"14eef799",74525:"3b8efe9e",74990:"eb952a60",75264:"f87cac93",75358:"b0f3fce0",75392:"f8a63741",75467:"b81c2a09",75595:"e8b2ef95",76034:"d63e08b1",76162:"986054a0",76252:"39fc565d",76409:"78b73fae",76474:"ec1b78f0",76551:"f6556a8a",76970:"b287e04f",77404:"cfee4e5f",77517:"7e20c169",77696:"6d132de2",77729:"61700dc5",77744:"da0129f3",77755:"c3e57b9a",77810:"da992933",77817:"310ed1c5",77964:"efac1160",78069:"5cd35b4d",78195:"eac2175f",78246:"304bacdc",78253:"9603cd66",78277:"c9f59a6f",78535:"c7f2c356",78588:"8f3a0d78",78732:"91242687",78942:"24f2c832",7899:"6963db5c",79189:"754f44c1",79251:"0f16b215",79357:"3871ef96",79596:"8fc41541",79655:"d0a2d24f",79658:"e64fb55b",79719:"0cd16274",80034:"ba255bdd",80261:"7ba52ac2",80347:"8a886d13",80427:"3ac77e74",80617:"f4c237ed",8066:"e0efe712",80762:"04e0e6e1",80850:"0fb1d528",80981:"72700c5a",81203:"7331a22f",81491:"e6e8157d",81835:"7bd6b6f6",81885:"493c7dc0",81888:"f57fadae",8197:"31f4a029",82180:"e3025ea1",82198:"b4caafbf",82278:"63d0b891",82418:"cd333262",82622:"99dad0d0",82885:"17ed6298",82916:"062e2b59",83074:"a7262c64",83076:"d6e76a2d",83119:"c8c8d979",83612:"676278ee",83639:"a4efb972",83765:"e9f908bb",83922:"7073c7aa",84231:"bb7c1392",84272:"487eeaf9",84325:"9979fbcc",8437:"c7b69e30",84466:"1d678b13",84981:"b4deb7b0",85014:"6f779712",85082:"2e5e41a0",85247:"68220d05",85388:"ac166289",85559:"6defa452",85689:"2a551161",85821:"2012f6f9",86125:"7f567e4a",86273:"a8f7e517",86450:"9c9f7a97",86507:"d5e1ede0",86575:"3fa63088",86746:"6729dd13",86825:"3e1dd4fc",86872:"d729b6b7",86901:"b5cc4c0b",87201:"20af4d74",87503:"1e601366",87673:"ebde635e",87992:"65602a5b",88044:"adc4168d",882:"d02da378",88211:"a83e17f8",88298:"928a28fb",88348:"2d74d0f1",88448:"0e668cd3",88558:"747a0208",88998:"a18f2d54",89087:"e7b5d376",89106:"19656eee",89278:"692df8b2",8941:"f6c6681d",89500:"c8bb1528",8988:"230c3d9a",90025:"eabbf519",90198:"3d8036a8",90381:"68a9bd61",90407:"24f14e14",90444:"2fda0fcf",90487:"8f026386",90626:"fd6b5272",91203:"63dcb7c2",91317:"dc75ba5b",91386:"570e18c3",91496:"be682097",91507:"6fbc9c93",91566:"031d1bc5",91614:"2bdfee46",91757:"4c041cc7",91928:"330362e9",91999:"a98482c9",92141:"48586886",9215:"9fb95ada",92343:"03ba39df",92403:"79c2cbdb",92595:"4405c746",927:"95435a8e",92716:"2bb38ad3",93032:"dd026a82",93337:"23080d13",93341:"7583f629",93363:"60a0be22",93437:"4b011542",9356:"efb6b563",93564:"377d4a77",93594:"d30817d6",939:"c1cc5b55",94112:"1b14e1e0",94197:"9d58aa4f",94259:"72148d3f",9434:"8c7c212d",94475:"3cfe0730",94539:"ed28833f",94565:"c3568b59",94650:"ff5522de",9473:"0d090794",94842:"efaaa80f",9485:"c346f2d0",9494:"a8eaf869",95105:"b3fe69f1",95559:"60472ff9",95620:"07d92617",95665:"4601359f",95826:"e79fa4f3",95922:"2a79e601",96058:"2ef5e2d0",96357:"67201aa8",96548:"ee954dcd",96636:"a29f1714",96889:"bbc95d43",96918:"f0a4c70e",97255:"a0c5d3b0",97291:"df4da600",97367:"ad8ff29b",97517:"c71d04b9",97775:"2a863c70",97812:"cba9facb",97997:"cc832b65",9832:"2337c4d4",9854:"c4d47cb3",98803:"4381c120",99333:"151b53b6",9934:"5a12c177",99459:"9bdf1946",99590:"3bb39607",99634:"6954616e",99981:"f8625313"})[e]+".js"},m.k=function(e){return"static/css/async/"+e+"."+({34969:"46f9cd2a",45140:"22ea67d8",46600:"46f9cd2a",46925:"aaa3cb92",55478:"22ea67d8",6971:"aaa3cb92",94565:"3a5bdf0c",9934:"3a5bdf0c"})[e]+".css"},c={},d="@modern-js/main-doc:",m.l=function(e,t,a,r){if(c[e]){c[e].push(t);return}if(void 0!==a){for(var n,f,o=document.getElementsByTagName("script"),i=0;i<o.length;i++){var s=o[i];if(s.getAttribute("src")==e||s.getAttribute("data-webpack")==d+a){n=s;break}}}!n&&(f=!0,(n=document.createElement("script")).charset="utf-8",n.timeout=120,m.nc&&n.setAttribute("nonce",m.nc),n.setAttribute("data-webpack",d+a),n.src=e),c[e]=[t];var b=function(t,a){n.onerror=n.onload=null,clearTimeout(u);var d=c[e];if(delete c[e],n.parentNode&&n.parentNode.removeChild(n),d&&d.forEach(function(e){return e(a)}),t)return t(a)},u=setTimeout(b.bind(null,void 0,{type:"timeout",target:n}),12e4);n.onerror=b.bind(null,n.onerror),n.onload=b.bind(null,n.onload),f&&document.head.appendChild(n)},m.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r={12980:0},m.f.j=function(e,t){var a=m.o(r,e)?r[e]:void 0;if(0!==a){if(a)t.push(a[2]);else{var c=new Promise(function(t,c){a=r[e]=[t,c]});t.push(a[2]=c);var d=m.p+m.u(e),n=Error();m.l(d,function(t){if(m.o(r,e)&&(0!==(a=r[e])&&(r[e]=void 0),a)){var c=t&&("load"===t.type?"missing":t.type),d=t&&t.target&&t.target.src;n.message="Loading chunk "+e+" failed.\n("+c+": "+d+")",n.name="ChunkLoadError",n.type=c,n.request=d,a[1](n)}},"chunk-"+e,e)}}},m.O.j=function(e){return 0===r[e]},n=function(e,t){var a=t[0],c=t[1],d=t[2],n,f,o=0;if(a.some(function(e){return 0!==r[e]})){for(n in c)m.o(c,n)&&(m.m[n]=c[n]);if(d)var i=d(m)}for(e&&e(t);o<a.length;o++)f=a[o],m.o(r,f)&&r[f]&&r[f][0](),r[f]=0;return m.O(i)},(f=self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).forEach(n.bind(null,0)),f.push=n.bind(null,f.push.bind(f)),o={2118:0,43361:0,62707:0,72126:0},i="webpack",s="data-webpack-loading",b=function(e,t,a,c){var d,r,n="chunk-"+e;if(!c){for(var f=document.getElementsByTagName("link"),o=0;o<f.length;o++){var b=f[o],u=b.getAttribute("href")||b.href;if(u&&!u.startsWith(m.p)&&(u=m.p+(u.startsWith("/")?u.slice(1):u)),"stylesheet"==b.rel&&(u&&u.startsWith(t)||b.getAttribute("data-webpack")==i+":"+n)){d=b;break}}if(!a)return d}!d&&(r=!0,(d=document.createElement("link")).setAttribute("data-webpack",i+":"+n),d.setAttribute(s,1),d.rel="stylesheet",d.href=t);var l=function(e,t){if(d.onerror=d.onload=null,d.removeAttribute(s),clearTimeout(p),t&&"load"!=t.type&&d.parentNode.removeChild(d),a(t),e)return e(t)};if(d.getAttribute(s)){var p=setTimeout(l.bind(null,void 0,{type:"timeout",target:d}),12e4);d.onerror=l.bind(null,d.onerror),d.onload=l.bind(null,d.onload)}else l(void 0,{type:"load",target:d});return c?c.parentNode.insertBefore(d,c):r&&document.head.appendChild(d),d},m.f.css=function(e,t){var a=m.o(o,e)?o[e]:void 0;if(0!==a){if(a)t.push(a[2]);else if(/^(12980|34969|45140|46600|46925|55478|6971|90762|94565|9934)$/.test(e)){var c=new Promise(function(t,c){a=o[e]=[t,c]});t.push(a[2]=c);var d=m.p+m.k(e),r=Error();b(e,d,function(t){if(m.o(o,e)&&(0!==(a=o[e])&&(o[e]=void 0),a)){if("load"!==t.type){var c=t&&t.type,d=t&&t.target&&t.target.src;r.message="Loading css chunk "+e+" failed.\n("+c+": "+d+")",r.name="ChunkLoadError",r.type=c,r.request=d,a[1](r)}else a[0]()}})}else o[e]=0}},u=function(e,t){var a=t[0];e&&e(t);for(var c=0;c<a.length;c++)void 0===o[a[c]]&&(o[a[c]]=0)},(l=self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).forEach(u.bind(null,0)),l.push=u.bind(null,l.push.bind(l));var g=m.O(void 0,["72126","62707","43361","2118","90762"],function(){return m("73105")});m.O(g)})();