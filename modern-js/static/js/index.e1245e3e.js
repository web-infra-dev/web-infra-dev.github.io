(()=>{"use strict";var e={92837:function(e,a,c){c.d(a,{Q:()=>f,w:()=>n});let t=c("80835"),d=c("97833"),r={en:{introduction:"Introduction",quickStart:"Quick Start",slogan:"A Progressive React Framework for modern web development",secondSlogan1:"Enjoy the development experience.",secondSlogan2:"Make innovation happen faster.",feature1:"Rust Bundler",featureDesc1:"Easily switch to Rspack bundler with faster build speed.",feature2:"Integrated BFF",featureDesc2:"Develop BFF code in the same project, enjoy simple function calls.",feature3:"Nested Routes",featureDesc3:"File-as-route, comes with lots performance optimizations.",feature4:"Multi-Rendering Mode",featureDesc4:"SSR, SSG, SPR, all out of the box for you.",feature5:"CSS Solutions",featureDesc5:"CSS Modules, CSS-in-JS, Tailwind CSS, take your pick.",feature6:"Easy to Configure",featureDesc6:"Launch with zero configuration, then everything is configurable.",solutions:"Solutions",solutionsDesc1:"A progressive React framework for web development.",solutionsDesc2:"A powerful solution for npm package development.",solutionsDesc3:"An Rspack-based build tool for web development.",solutionsDesc4:"A fast Rspack-based static site generator",guide:"Guide",topic:"Topic",help:"Help",coreConcept:"Core Concept",basicFeatures:"Basic Features",advancedFeatures:"Advanced Features",configuration:"Configuration",command:"Command",runtime:"Runtime",conventions:"Conventions",microFrontend:"Micro Frontend",stateManagement:"State Management",pluginSystem:"Plugin System",projectGenerator:"Project Generator",githubDiscussion:"Github Discussion",changelog:"Changelog",doubao:"Doubao",writingo:"Writingo",volctrans:"Volctrans",shidianbaike:"Shidian Baike",xiaohe:"Xiaohe",dongchedi:"Dongchedi",volcengineDeveloper:"Volcengine Developer"},zh:{introduction:"\u4ECB\u7ECD",quickStart:"\u5FEB\u901F\u4E0A\u624B",slogan:"\u57FA\u4E8E React \u7684\u6E10\u8FDB\u5F0F Web \u5F00\u53D1\u6846\u67B6",secondSlogan1:"\u4EAB\u53D7\u6109\u60A6\u7684\u5F00\u53D1\u4F53\u9A8C\uFF0C",secondSlogan2:"\u8BA9\u521B\u65B0\u66F4\u5FEB\u53D1\u751F\u3002",feature1:"Rust \u6784\u5EFA",featureDesc1:"\u8F7B\u677E\u5207\u6362\u5230 Rspack \u6784\u5EFA\u5DE5\u5177\uFF0C\u7F16\u8BD1\u98DE\u5FEB\u3002",feature2:"\u4E00\u4F53\u5316\u5F00\u53D1",featureDesc2:"\u5728\u540C\u4E00\u9879\u76EE\u4E2D\u5B8C\u6210 BFF \u5F00\u53D1\uFF0C\u4EAB\u53D7\u7B80\u6D01\u7684\u51FD\u6570\u8C03\u7528\u3002",feature3:"\u5D4C\u5957\u8DEF\u7531",featureDesc3:"\u6587\u4EF6\u7CFB\u7EDF\u5373\u8DEF\u7531\uFF0C\u9644\u8D60\u5168\u5957\u6027\u80FD\u4F18\u5316\u3002",feature4:"\u591A\u6E32\u67D3\u6A21\u5F0F",featureDesc4:"SSR\u3001SSG\u3001SPR \u7B49\u591A\u79CD\u6E32\u67D3\u6A21\u5F0F\uFF0C\u901A\u901A\u5F00\u7BB1\u5373\u7528\u3002",feature5:"CSS \u65B9\u6848",featureDesc5:"CSS Modules\u3001CSS-in-JS\u3001Tailwind CSS\uFF0C\u4EFB\u4F60\u6311\u9009\u3002",feature6:"\u6613\u4E8E\u914D\u7F6E",featureDesc6:"\u4EE5\u96F6\u914D\u7F6E\u542F\u52A8\uFF0C\u7136\u540E\u4E00\u5207\u7686\u53EF\u914D\u7F6E\u3002",solutions:"\u89E3\u51B3\u65B9\u6848",solutionsDesc1:"\u57FA\u4E8E React \u7684\u6E10\u8FDB\u5F0F Web \u5F00\u53D1\u6846\u67B6\u3002",solutionsDesc2:"\u7B80\u5355\u3001\u9AD8\u6027\u80FD\u7684 npm \u5305\u5F00\u53D1\u65B9\u6848\u3002",solutionsDesc3:"\u57FA\u4E8E Rspack \u7684 Web \u6784\u5EFA\u5DE5\u5177\u3002",solutionsDesc4:"\u57FA\u4E8E Rspack \u7684\u9759\u6001\u7AD9\u70B9\u751F\u6210\u5668\u3002",guide:"\u6307\u5357",topic:"\u4E13\u9898",help:"\u5E2E\u52A9",coreConcept:"\u6838\u5FC3\u6982\u5FF5",basicFeatures:"\u57FA\u7840\u529F\u80FD",advancedFeatures:"\u8FDB\u9636\u529F\u80FD",configuration:"\u914D\u7F6E",command:"\u547D\u4EE4",runtime:"\u8FD0\u884C\u65F6",conventions:"\u76EE\u5F55\u7EA6\u5B9A",microFrontend:"\u5FAE\u524D\u7AEF",stateManagement:"\u72B6\u6001\u7BA1\u7406",pluginSystem:"\u63D2\u4EF6\u7CFB\u7EDF",projectGenerator:"\u9879\u76EE\u751F\u6210\u5668",githubDiscussion:"Github \u8BA8\u8BBA\u533A",changelog:"\u66F4\u65B0\u65E5\u5FD7",doubao:"\u8C46\u5305",writingo:"\u706B\u5C71\u5199\u4F5C",volctrans:"\u706B\u5C71\u7FFB\u8BD1",shidianbaike:"\u8BC6\u5178\u767E\u79D1",xiaohe:"\u5C0F\u8377\u5065\u5EB7",dongchedi:"\u61C2\u8F66\u5E1D",volcengineDeveloper:"\u706B\u5C71\u5F15\u64CE\u5F00\u53D1\u8005\u793E\u533A"}};function n(e){let a=(0,t.Jr)();return(0,d.pJ)("zh"===a?e:`/en${e}`)}function f(){let e=(0,t.Jr)();return a=>r[e][a]}},93649:function(e,a,c){c.r(a),c.d(a,{bindingAsideScroll:()=>N.UQ,getCustomMDXComponent:()=>N.TJ,scrollToTarget:()=>N.eF,useHiddenNav:()=>N.Vl,useLocaleSiteData:()=>N.M4,Nav:()=>N.JL,Tab:()=>N.OK,Tag:()=>N.Vp,Toc:()=>N.of,PackageManagerTabs:()=>N.SU,usePathUtils:()=>N.eE,useRedirect4FirstVisit:()=>N.AV,useSidebarData:()=>N.tx,SearchPanel:()=>N.EG,SocialLinks:()=>N.WG,useEditLink:()=>N.CU,isMobileDevice:()=>N.s2,Link:()=>N.rU,DocFooter:()=>N.Qn,NotFoundLayout:()=>N.qx,Tabs:()=>N.mQ,renderInlineMarkdown:()=>N.VA,useEnableNav:()=>N.CF,useThemeState:()=>N.ls,parseInlineMarkdownText:()=>N.H_,HomeFooter:()=>N.xK,EditLink:()=>N.mi,isActive:()=>N.zh,HomeFeature:()=>N.BZ,useFullTextSearch:()=>N.YS,default:()=>Z,renderHtmlOrText:()=>N.NG,Aside:()=>N.xN,Badge:()=>N.Ct,LastUpdated:()=>N.O9,Steps:()=>N.Rg,setup:()=>N.cY,DocLayout:()=>N.RY,HomeLayout:()=>N.Os,usePrevNextPage:()=>N.WS,Search:()=>N.ol,ScrollToTop:()=>N.pU,SwitchAppearance:()=>N.KO,Button:()=>N.zx,Sidebar:()=>N.YE,HomeHero:()=>N.xB,SourceCode:()=>N.ZB,Layout:()=>N.Ar,Overview:()=>N.g2,PrevNextPage:()=>N.Qe,RenderType:()=>N.y2});let t=c("57927"),d=c("39980"),r=c("88640"),n=c("8319"),f=c("80835"),o=c("20288"),s=c("2363"),i=c("58920"),b=c.n(i),l=c("97833"),u=c("35836"),p=e=>{let{title:a,desc:c,href:t}=e;return(0,d.jsxs)("a",{href:(0,l.pJ)(t),target:"_blank",style:{textDecoration:"none"},className:b()(u.Z.card),children:[(0,d.jsx)("span",{className:u.Z.title,children:a}),(0,d.jsx)("span",{className:u.Z.desc,children:c})]})},h=c("31370"),m=e=>{let{children:a}=e;return(0,d.jsx)("div",{className:h.Z.titleWrap,children:(0,d.jsx)("h2",{className:h.Z.title,children:a})})},g=c("33428"),v=e=>{let{children:a}=e;return(0,d.jsx)("div",{className:g.Z["feature-layout"],children:a})},j=c("92837"),x=c("89603"),w=e=>e.startsWith("http://")||e.startsWith("https://");function S(e){let{to:a,href:c,label:t,...r}=e;return(0,d.jsx)("a",{className:"linkItem",target:"_blank",href:c||a,...r,children:c&&w(c)?(0,d.jsx)("span",{children:t}):t})}function k(){let e=(0,j.Q)(),a=[{title:e("guide"),items:[{label:e("quickStart"),to:(0,j.w)("/guides/get-started/quick-start")},{label:e("coreConcept"),to:(0,j.w)("/guides/concept/entries")},{label:e("basicFeatures"),to:(0,j.w)("/guides/basic-features/routes")},{label:e("advancedFeatures"),to:(0,j.w)("/guides/advanced-features/rspack-start")}]},{title:"API",items:[{label:e("configuration"),to:(0,j.w)("/configure/app/usage")},{label:e("command"),to:(0,j.w)("/apis/app/commands")},{label:e("runtime"),to:(0,j.w)("/apis/app/runtime/core/bootstrap")},{label:e("conventions"),to:(0,j.w)("apis/app/hooks/src/app")}]},{title:e("topic"),items:[{label:e("microFrontend"),to:(0,j.w)("/guides/topic-detail/micro-frontend/c01-introduction")},{label:e("stateManagement"),to:(0,j.w)("/guides/topic-detail/model/quick-start")},{label:e("pluginSystem"),to:(0,j.w)("/guides/topic-detail/framework-plugin/introduction")},{label:e("projectGenerator"),to:(0,j.w)("/guides/topic-detail/generator/project")}]},{title:e("help"),items:[{label:e("changelog"),to:"https://github.com/web-infra-dev/modern.js/releases"},{label:"GitHub Issues",to:"https://github.com/web-infra-dev/modern.js/issues"},{label:e("githubDiscussion"),to:"https://github.com/web-infra-dev/modern.js/discussions"}]}].map((e,a)=>(0,d.jsxs)("div",{className:x.Z.linkWrapper,children:[(0,d.jsx)("div",{className:x.Z.linkTitle,children:e.title}),(0,d.jsx)("ul",{className:x.Z.items,children:e.items.map((e,a)=>(0,d.jsx)("li",{className:x.Z.link,children:(0,d.jsx)(S,{...e})},e.to||a))})]},a));return(0,d.jsx)("footer",{className:x.Z.footer,children:(0,d.jsxs)("div",{className:x.Z.wrapper,children:[(0,d.jsx)("img",{className:x.Z.logo,src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/zq-uylkvT/ljhwZthlaukjlkulzlp/modern-logo-home-page-0209.svg"}),(0,d.jsx)("div",{className:x.Z.linksWrapper,children:a})]})})}let y=c("50022"),D=()=>{let e=(0,j.Q)();return(0,d.jsx)("div",{className:y.Z.header,children:(0,d.jsxs)("header",{className:(0,r.Z)("hero hero--primary",y.Z.heroBanner),children:[(0,d.jsxs)("h1",{className:y.Z.title,children:[(0,d.jsx)("div",{children:"Inspire Creativity in"}),(0,d.jsx)("div",{className:y.Z.titleGradient,children:"Modern Web Development"})]}),(0,d.jsxs)("div",{className:y.Z.buttons,children:[(0,d.jsxs)("a",{href:(0,j.w)("/guides/get-started/introduction"),className:y.Z.leftButton,children:[e("introduction"),(0,d.jsx)("img",{width:"20",height:"20",className:y.Z.startArrow,src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/aphqeh7uhohpquloj/modern-js/right-arrow.svg?url"})]}),(0,d.jsx)("a",{href:(0,j.w)("/guides/get-started/quick-start"),className:y.Z.rightButton,children:e("quickStart")})]})]})})},N=c("77629"),Z={...t.ZP,HomeLayout:function(){let e=(0,j.Q)(),{pathname:a}=(0,n.TH)();(0,s.useEffect)(()=>(window.MODERN_THEME="dark",()=>{window.MODERN_THEME=void 0}),[a]);let c=[{title:e("feature1"),href:(0,j.w)("/guides/concept/builder"),desc:e("featureDesc1")},{title:e("feature2"),href:(0,j.w)("/guides/advanced-features/bff/index"),desc:e("featureDesc2")},{title:e("feature3"),href:(0,j.w)("/guides/basic-features/routes"),desc:e("featureDesc3")},{title:e("feature4"),href:(0,j.w)("/guides/advanced-features/ssr"),desc:e("featureDesc4")},{title:e("feature5"),href:(0,j.w)("/guides/basic-features/css"),desc:e("featureDesc5")},{title:e("feature6"),href:(0,j.w)("/configure/app/usage"),desc:e("featureDesc6")}],t=(0,f.Jr)(),i=[{title:"Modern.js Framework",href:(0,j.w)("/guides/get-started/introduction"),desc:e("solutionsDesc1")},{title:"Modern.js Module",href:`https://modernjs.dev/module-tools${"en"===t?"/en":""}`,desc:e("solutionsDesc2")}];return(0,d.jsxs)("div",{children:[(0,d.jsxs)(o.ql,{children:[(0,d.jsx)("html",{className:"dark"}),(0,d.jsx)("script",{children:"window.MODERN_THEME = 'dark';"}),(0,d.jsx)("style",{type:"text/css",children:`
          .rspress-doc-appearance {
            display: none!important;
          }
        `})]}),(0,d.jsx)(D,{}),(0,d.jsxs)("main",{className:y.Z["homepage-main"],children:[(0,d.jsxs)(v,{children:[(0,d.jsx)(m,{children:e("solutions")}),(0,d.jsx)("div",{className:y.Z.cardContainer,children:i.map((e,a)=>(0,d.jsx)(p,{title:e.title,desc:e.desc,href:e.href},a))})]}),(0,d.jsx)(v,{children:(0,d.jsxs)("h1",{className:(0,r.Z)([y.Z.title,y.Z.titleGradient]),style:{textAlign:"left",marginBottom:32},children:[(0,d.jsx)("div",{children:e("secondSlogan1")}),(0,d.jsx)("div",{children:e("secondSlogan2")})]})}),(0,d.jsxs)(v,{children:[(0,d.jsx)(m,{children:"Modern.js Framework"}),(0,d.jsx)("div",{className:y.Z.cardContainer,children:c.map((e,a)=>(0,d.jsx)(p,{title:e.title,desc:e.desc,href:e.href},a))})]}),(0,d.jsx)(k,{})]})]})}}}},a={};function c(t){var d=a[t];if(void 0!==d)return d.exports;var r=a[t]={id:t,loaded:!1,exports:{}};return e[t].call(r.exports,r,r.exports,c),r.loaded=!0,r.exports}c.m=e,c.n=function(e){var a=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(a,{a:a}),a},(()=>{var e,a=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__};c.t=function(t,d){if(1&d&&(t=this(t)),8&d||"object"==typeof t&&t&&(4&d&&t.__esModule||16&d&&"function"==typeof t.then))return t;var r=Object.create(null);c.r(r);var n={};e=e||[null,a({}),a([]),a(a)];for(var f=2&d&&t;"object"==typeof f&&!~e.indexOf(f);f=a(f))Object.getOwnPropertyNames(f).forEach(function(e){n[e]=function(){return t[e]}});return n.default=function(){return t},c.d(r,n),r}})(),c.d=function(e,a){for(var t in a)c.o(a,t)&&!c.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:a[t]})},c.f={},c.e=function(e){return Promise.all(Object.keys(c.f).reduce(function(a,t){return c.f[t](e,a),a},[]))},c.u=function(e){return"static/js/async/"+e+"."+({10371:"ff4cf60f",10501:"6e965995",10637:"2eece582",10800:"2906ac90",1081:"735beaae",11085:"ecddde77",11228:"a5f2cc60",11687:"80d5a1b2",11946:"3c4e8adf",12062:"c6607fa9",1207:"9f32916f",12166:"8d9fe1ad",12299:"c97a88dc",12417:"f89e70f2",1261:"a80895cf",12626:"3c7301cc",12752:"abd8b7b6",13082:"ba59c5e8",13099:"2458935b",13286:"b4cfa13f",1334:"78d0b7be",13634:"ca63ba79",13656:"3cd74050",137:"6d4759aa",13961:"668aa9aa",13972:"571f97c1",14086:"bbf9d026",14267:"dec1932b",1438:"d9610554",14564:"30b01823",14640:"94970111",1476:"5042e7e5",14865:"c5372c59",14953:"5aa1a977",15113:"565af6df",1526:"f393c2aa",1554:"70818124",15756:"de0fbb67",15976:"fcef2063",16267:"2f265fa0",16367:"dd6e1ad0",1645:"75fefc10",16714:"89ff935b",16736:"f042188e",17073:"6ebecac3",17225:"e536c6d8",17376:"f51c299f",17461:"64d38b5d",17570:"c25843ca",17643:"04236915",1792:"995ff5ca",18217:"57d29a6b",18455:"012a44db",18563:"0a82ef3d",18648:"834f1866",18710:"20ff0523",18737:"345e3bfe",18885:"3f1e2aeb",19e3:"522e95c5",19477:"cee1c745",19479:"cbdfddd8",19600:"557e95c3",19713:"0b768854",19747:"e3bd74c2",19977:"ac0cf688",20326:"35cf98e6",2034:"b06dc358",20365:"d875d4ac",2048:"c9039c50",20804:"5b54af6b",20825:"f75daf11",20881:"f8cd8577",20882:"7acf3aea",20984:"25aeacae",21201:"d42a20c9",21634:"d3c1f458",2173:"16e5b1c1",21974:"9c433f31",22243:"fa2e1196",22385:"a9512419",22397:"165ba089",224:"fbcb7ff4",22498:"35e064b8",22632:"9e49e23e",22888:"65460826",22934:"12afe8ef",2301:"00e6046b",23024:"5bf83485",23397:"a9b8173f",23723:"3183a4de",23840:"c1926d2d",23866:"a5d50739",24061:"91021b5e",24112:"ab436ba8",24483:"294828c8",24640:"66009b94",24720:"ca5843e8",24916:"c778b744",24935:"0a3000ea",25022:"a72f2622",25157:"b39d6690",25175:"f4291fab",25405:"1ddc6b3d",25540:"e148b067",25641:"7dac6346",25668:"b6a9736d",25726:"c0341e03",25835:"8e722d18",26026:"69f5d5d6",26104:"2cef6aee",26422:"71511ad1",26480:"0ae24cd8",26487:"0ec5eb0f",26569:"1636cda6",2667:"638dc158",26681:"0e065cfa",2689:"922af7f2",26961:"6cb7ff0c",26967:"e6caa74e",27122:"5d8aca03",27141:"c2aff709",27245:"25b3519f",27280:"eb5b3ee0",27290:"f93a5b5b",27301:"5519c915",27345:"4c8eeba2",27548:"5cb915f7",27896:"42742eaa",28052:"21ba5cfc",28292:"05138f65",28333:"9a9032e1",28566:"8114903e",28599:"c9ebadb5",28601:"ab91342d",28781:"d9a413c8",29031:"abce1714",29058:"9239fdd5",29191:"7d7389a6",29213:"c2cf8f98",29349:"2de2559b",29547:"e4403598",29696:"07435517",29797:"f11f6bdc",29807:"65d0ddb2",29859:"b1e5b861",2991:"39e4b87d",29910:"c75bb3ca",30116:"b3403729",30219:"65889204",30238:"d578f7ff",30287:"1d8ae382",30408:"5ce72eb8",30422:"c6222e14",30455:"19ba4437",30623:"04e7c7dc",30681:"55186e41",30951:"55fba85e",31271:"b7f78bfc",31463:"fccae1fa",3151:"63c4317c",31636:"737fe25b",32169:"09c6e034",32406:"740ca7c1",32532:"67da1186",33022:"8c899d3f",33282:"8ce4f613",34308:"98c10e0e",34673:"35d3597e",34931:"76c89c39",35308:"b2cd25e5",35428:"31cd9cd8",35627:"83611af7",35904:"add725e7",36035:"1b1989f0",36126:"4452d031",36336:"df593e5d",36554:"7bd4e014",36632:"5b005dd0",36688:"e2bf7a68",36750:"123b56b8",36884:"3e6a800c",369:"d0253a36",3690:"36008bfc",37006:"d0ba4f36",3719:"955ca578",37336:"1a6d0879",37607:"2d994abc",37664:"3b03d9c2",37988:"16c7668f",38145:"5da4c4f9",38367:"1577af40",38432:"7c2d0231",38436:"9e827fa8",3872:"849beeaa",39249:"a0ff0de0",39387:"4579d49c",39510:"47417b21",39834:"d27ecb1b",39890:"9cc864f4",39914:"df74c5e4",39998:"6cd88dc8",40103:"17ac96e7",40302:"8afd62e8",40407:"8bf28577",40536:"cd7dd219",40981:"8c821e81",41107:"6c741a5f",41217:"169798a7",41239:"d408df31",4147:"1eca50f8",41473:"21c94c54",41474:"6432c5df",41546:"2f70f602",41608:"b5a520fe",41628:"cc87e01e",42004:"11983a1a",42151:"6914554b",42238:"a2748426",42626:"3d15f9cd",42756:"9c193d36",42790:"22228a6c",42881:"295264af",43017:"8afd5e22",43029:"944699f9",43102:"5363351d",4313:"432ddd5e",43147:"1c13c817",43149:"b548385d",43245:"3d333b80",4326:"4b292fcf",43266:"85833005",43416:"50d50891",43453:"2032f92d",43495:"a6ecaf65",43566:"2dab2cfb",43599:"e3c41771",43965:"a412c332",44103:"1253616b",44293:"1a8d0ac3",44314:"c1a7b57d",44743:"39a9e2ef",44949:"9ef28231",44995:"66cd9f2b",45569:"bd44f960",45631:"9144d2d6",45881:"a35bd1fc",45971:"c9f08558",46011:"a0371f31",46081:"1690b80a",46440:"b652c4e8",46520:"ef40df71",46538:"e3c96e27",4666:"aa6913d9",46734:"8f276c3a",46982:"3bc2c4ea",47237:"59d0522d",47429:"01d4f06c",47589:"0aef8007",47728:"5cb1875a",47914:"78c7cdb7",4799:"6cd54793",48291:"e582793d",48364:"5a373b9c",48411:"55157388",48415:"23cc3266",48475:"9e1601bb",48847:"678f1970",4901:"87d18a79",49069:"16bd3f9c",49458:"4f7eaf12",49684:"2e068db4",50031:"21f2c38b",5019:"d9fcb75c",50228:"7e9dc72c",50313:"ce7288e9",50384:"3fe32ef1",50623:"3333d1c1",51102:"14047eed",51359:"b791ae2e",51521:"4c4dce07",51709:"de678d6e",51834:"e79b551c",51973:"12ed348d",52343:"a22b2aa3",52563:"a23a5eb7",52625:"f335c3f3",52774:"11c54d95",53005:"5d4a3665",5382:"5d256190",53858:"55775dcb",54100:"7ad5b950",54122:"c54cda2d",54194:"881753f0",5425:"2599d691",54430:"11b83826",54527:"65aa84ad",54572:"93c2fa7e",54668:"89e656cd",54903:"10a417ea",54922:"c14969f8",55036:"e2a73e64",55294:"e562a45c",55336:"fd061d8d",55443:"53dc4858",55561:"0852ed87",556:"d96c4588",55855:"b39958bb",5602:"27e02706",56072:"caebd827",56420:"02b2157a",56520:"2ffcefd9",56588:"42928177",56794:"36128a3b",56837:"5f3720a9",57042:"09b8959e",5707:"6eb0ae66",57221:"9f9e51ff",57363:"7b5fd900",575:"3e7e4ba0",57525:"4b25367f",57693:"e6208672",57729:"fe8ff3fa",57947:"544b59e5",58223:"973d5343",58424:"a54cc543",58529:"e8b1021a",58590:"d048804e",58640:"202c6b20",58686:"74dfd37b",58789:"4c1baa7a",59029:"df66f258",59151:"6532ce9c",59419:"7fe7bbc9",59461:"543cbe29",59471:"3f15a8e4",59487:"db339986",59597:"e321222c",59638:"0be9aa93",59681:"bd869c48",59790:"7b8120e3",60078:"0d032a8b",6037:"ca8492bd",60500:"967c4eaf",6084:"bdcfced8",61064:"305c1066",61067:"41e2b480",61131:"844b4814",61367:"12015ac2",61522:"505330e4",61910:"33b3f012",61964:"0d833a9b",62168:"d3110a6c",62218:"c85249e7",62467:"883a3a98",62556:"56a4439d",62802:"71fd23de",62807:"767af076",6298:"e08169b8",63107:"4b60f30d",63110:"5ad86e27",63158:"ecad8362",63542:"77441433",63695:"453cbe7f",63957:"eb8c305e",64089:"98312985",64187:"495aedbc",64502:"ea42edd1",64529:"9d034fc8",64846:"b9c51f23",65097:"61f2f7ce",65157:"f1143b9e",65266:"76c0bce7",6554:"9b9872aa",65836:"9ee8b4f1",6600:"c217519a",66015:"f4a6fe6c",66213:"4fc3d245",66295:"962d6d54",66356:"2fc568c0",66362:"e73883a2",6665:"4446c8b4",66898:"52d5686e",67060:"5e3af9ea",67064:"6cadd037",67257:"63ef634e",67397:"d5d5e2a9",67459:"55e0caf4",67833:"ddd69049",6796:"64db6ebe",68177:"410999a3",68260:"3aaf77b4",68319:"523d3493",6841:"8ba9b839",6872:"2307e985",68722:"3b56f823",68790:"698a9974",68888:"f26e21c8",69332:"067d4953",69382:"c446c810",69463:"6d5189bc",69464:"295df60b",69909:"c1e3a2c3",70333:"27816872",70427:"926072db",70432:"c10f9157",70519:"fb73c3e1",70623:"a16cd4ef",70658:"d9e763d2",70707:"ef1ef3f4",70734:"9faebceb",70813:"32367032",70980:"42dff33a",71363:"8787163a",71401:"c04fa07c",71584:"7c9bc13a",71728:"9dcbe53a",71734:"7b74ec95",72013:"f3ee8f5d",72022:"ecfdc80d",72136:"e6bcfd0c",72207:"166e8e05",72257:"fd666f84",72294:"d1ce4da7",72493:"881af314",72665:"ac8efb78",72683:"6c045b8e",72760:"6b4c75a6",73122:"92724482",7321:"fc8fb021",73497:"c863d52b",73584:"d90806b6",73622:"83a95ed6",73723:"db7ca556",73815:"33d998f7",74082:"c989bc48",74626:"ec2274f4",74754:"adf933b0",7479:"8387916b",74912:"ad6c5a63",75434:"f0f29ca2",75620:"0d221a00",75732:"6356ccfc",76371:"4d4d2eff",76432:"94f55bb6",76511:"e9a75347",76568:"b6d6145b",7688:"0b5ff4b6",77273:"8e07d2fd",77286:"a6caeb68",77533:"d76df049",77601:"ee8d7499",7777:"d8de0ef6",77961:"d12b8eb0",78099:"68e3af54",784:"255c0349",78573:"d31bf861",78721:"57167760",78824:"0c5315c2",79016:"39cc2530",79360:"f4a32273",79917:"1937d5b9",80024:"c4a09087",80345:"e72a5324",80497:"bc2c7cc9",80548:"90700bf6",81171:"a98952a2",81181:"15535abe",81200:"92db4781",81237:"4df8c578",81381:"ab93db21",81697:"81ab2e33",81739:"f8214c3c",81859:"a42407a2",82188:"273b2cc7",82227:"ca26ef3f",82232:"05c4230d",82324:"ce53f10a",82463:"672b461e",82619:"46b6f936",8273:"9576c639",82762:"d2e8cac3",82935:"ed1991ca",83034:"a8e8583e",83156:"0c097309",83316:"0cc2f3b8",83330:"699dd2b6",83474:"4e023113",83488:"948f6a12",83647:"55178b03",83813:"ac72d367",83916:"8c334203",83920:"e0c241c1",83982:"a0a4ae26",84007:"fdaab003",84052:"481c5517",84075:"a07229d6",84500:"690e3266",84804:"cff363b6",84865:"511b6848",84886:"49ebcead",85194:"9b230d16",85250:"e4736b10",85350:"14d80943",85535:"7bbab3ce",85818:"a3b094db",85873:"d77e7c10",85969:"1ae6106e",86230:"e4beffd6",86243:"b6bd1c0e",86275:"9dc6b823",86276:"9b71368f",86396:"ed074d6b",8665:"a35f7d23",86672:"6545aed9",86675:"7b77c9ee",86694:"404fb087",86748:"875db4cb",86756:"915164dc",86858:"e6e3bd92",86917:"dced7a12",87060:"9fb11aeb",87158:"b4916371",87223:"cddd1baf",87718:"2e48df6a",87735:"55c1125c",87759:"6fc8ed80",87861:"e7970c39",87895:"92edc300",87898:"2e9b5664",87908:"eaa5cc06",88007:"fc94da40",88497:"75d957e7",88669:"a138009c",89099:"5ace3998",89287:"9734b3ad",89406:"fcc9c17e",89567:"cfb3e573",89629:"d8a66d93",8967:"c47ec330",89734:"2fc05022",89761:"2dda28fc",89828:"ccf1c991",90051:"2816c0bc",90089:"c14c7cfc",90131:"6b9fe5b6",90472:"91d70a70",90582:"d9869e45",90964:"bb80f36f",91052:"9e658844",91275:"e3dc0e5e",9137:"79ff67a3",91429:"167520bc",91693:"e3e21326",91837:"894aa50d",91926:"67de6d97",9201:"e72972e5",92156:"5dc223db",92348:"447bc571",92677:"b1fa0208",92686:"c3db0f94",93250:"58a6b1ef",93274:"9de1b588",9341:"b8d47e61",93737:"64637bac",93748:"5167629f",93859:"0d543055",93861:"d7a52250",93918:"80f9360a",93941:"d47b6010",94294:"c45cf3b8",94345:"0e947b0a",94608:"ffafbed6",94751:"4b6e2068",94899:"40b449da",95295:"b5d85365",95336:"3e5fe8e6",95512:"5deb0d12",95555:"2b67dff3",95642:"8df826f3",95744:"23e67c02",95841:"592819ca",95896:"22ef2eef",96005:"09f6c114",9604:"7edf3b1c",96147:"f7a25e13",96285:"8b514db6",96299:"ac8d4699",96360:"15bd1dfe",96581:"52220a44",96718:"08cee334",96793:"62c95e70",96829:"8d153617",96839:"9620db75",9689:"5d6a4b2e",97156:"0d17a144",97477:"8a3b471b",97648:"4d788c84",97792:"cfe9183b",98006:"0f66fa17",98093:"fae76532",98097:"b057264e",98119:"10489b9c",98208:"35e032f8",98386:"f2183077",98531:"3b95cc49",98714:"40165e55",98788:"3dc9c3da",98894:"05ac3532",99368:"01b41dbe",99965:"609978c7"})[e]+".js"},c.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||Function("return this")()}catch(e){if("object"==typeof window)return window}}(),c.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},(()=>{var e={},a="@modern-js/main-doc:";c.l=function(t,d,r,n){if(e[t]){e[t].push(d);return}if(void 0!==r){for(var f,o,s=document.getElementsByTagName("script"),i=0;i<s.length;i++){var b=s[i];if(b.getAttribute("src")==t||b.getAttribute("data-webpack")==a+r){f=b;break}}}!f&&(o=!0,(f=document.createElement("script")).charset="utf-8",f.timeout=120,c.nc&&f.setAttribute("nonce",c.nc),f.setAttribute("data-webpack",a+r),f.src=t),e[t]=[d];var l=function(a,c){f.onerror=f.onload=null,clearTimeout(u);var d=e[t];if(delete e[t],f.parentNode&&f.parentNode.removeChild(f),d&&d.forEach(function(e){return e(c)}),a)return a(c)},u=setTimeout(l.bind(null,void 0,{type:"timeout",target:f}),12e4);f.onerror=l.bind(null,f.onerror),f.onload=l.bind(null,f.onload),o&&document.head.appendChild(f)}})(),c.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.nmd=function(e){return e.paths=[],!e.children&&(e.children=[]),e},(()=>{var e=[];c.O=function(a,t,d,r){if(t){r=r||0;for(var n=e.length;n>0&&e[n-1][2]>r;n--)e[n]=e[n-1];e[n]=[t,d,r];return}for(var f=1/0,n=0;n<e.length;n++){for(var t=e[n][0],d=e[n][1],r=e[n][2],o=!0,s=0;s<t.length;s++)(!1&r||f>=r)&&Object.keys(c.O).every(function(e){return c.O[e](t[s])})?t.splice(s--,1):(o=!1,r<f&&(f=r));if(o){e.splice(n--,1);var i=d();void 0!==i&&(a=i)}}return a}})(),c.p="/",c.rv=function(){return"1.0.0-alpha.3"},(()=>{var e={12980:0};c.f.j=function(a,t){var d=c.o(e,a)?e[a]:void 0;if(0!==d){if(d)t.push(d[2]);else{var r=new Promise(function(c,t){d=e[a]=[c,t]});t.push(d[2]=r);var n=c.p+c.u(a),f=Error();c.l(n,function(t){if(c.o(e,a)&&(0!==(d=e[a])&&(e[a]=void 0),d)){var r=t&&("load"===t.type?"missing":t.type),n=t&&t.target&&t.target.src;f.message="Loading chunk "+a+" failed.\n("+r+": "+n+")",f.name="ChunkLoadError",f.type=r,f.request=n,d[1](f)}},"chunk-"+a,a)}}},c.O.j=function(a){return 0===e[a]};var a=function(a,t){var d=t[0],r=t[1],n=t[2],f,o,s=0;if(d.some(function(a){return 0!==e[a]})){for(f in r)c.o(r,f)&&(c.m[f]=r[f]);if(n)var i=n(c)}for(a&&a(t);s<d.length;s++)o=d[s],c.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return c.O(i)},t=self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[];t.forEach(a.bind(null,0)),t.push=a.bind(null,t.push.bind(t))})(),c.ruid="bundler=rspack@1.0.0-alpha.3";var t=c.O(void 0,["86212","62707","43361","2118","70226"],function(){return c("86445")});t=c.O(t)})();