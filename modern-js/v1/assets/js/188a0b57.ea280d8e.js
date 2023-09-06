"use strict";(self.webpackChunk_modern_js_website=self.webpackChunk_modern_js_website||[]).push([[2120],{57522:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>u});var r=t(29901);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),p=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=p(e.components);return r.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=p(t),u=a,v=m["".concat(c,".").concat(u)]||m[u]||d[u]||o;return t?r.createElement(v,l(l({ref:n},s),{},{components:t})):r.createElement(v,l({ref:n},s))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=m;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=t[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},19243:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=t(18249),a=(t(29901),t(57522));const o={sidebar_position:2},l="Modern Electron \u7b80\u4ecb",i={unversionedId:"guides/features/electron/modern-electron",id:"guides/features/electron/modern-electron",title:"Modern Electron \u7b80\u4ecb",description:"Modern Electron\xa0\u662f\u57fa\u4e8e Electron \u7684\u684c\u9762\u7aef\u5e94\u7528\u6846\u67b6\uff0c\u5b83\u5e2e\u52a9\u6211\u4eec\uff1a",source:"@site/docs/guides/features/electron/modern-electron.md",sourceDirName:"guides/features/electron",slug:"/guides/features/electron/modern-electron",permalink:"/v1/docs/guides/features/electron/modern-electron",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"guidesSidebar",previous:{title:"Electron \u7b80\u4ecb",permalink:"/v1/docs/guides/features/electron/basic"},next:{title:"\u5173\u4e8e Node \u96c6\u6210",permalink:"/v1/docs/guides/features/electron/develop"}},c={},p=[{value:"\u6574\u4f53\u67b6\u6784",id:"\u6574\u4f53\u67b6\u6784",level:2},{value:"\u9002\u7528\u4eba\u7fa4",id:"\u9002\u7528\u4eba\u7fa4",level:2},{value:"\u521b\u5efa\u9879\u76ee",id:"\u521b\u5efa\u9879\u76ee",level:2},{value:"\u6267\u884c\u540e\u6211\u4eec\u53ef\u4ee5\u5f97\u5230\u4ee5\u4e0b\u4ea7\u7269\uff1a",id:"\u6267\u884c\u540e\u6211\u4eec\u53ef\u4ee5\u5f97\u5230\u4ee5\u4e0b\u4ea7\u7269",level:4},{value:"\u542f\u52a8",id:"\u542f\u52a8",level:2},{value:"\u4e3a\u4e3b\u5165\u53e3\u6dfb\u52a0\u903b\u8f91",id:"\u4e3a\u4e3b\u5165\u53e3\u6dfb\u52a0\u903b\u8f91",level:2},{value:"\u6253\u5305",id:"\u6253\u5305",level:2}],s={toc:p};function d(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"modern-electron-\u7b80\u4ecb"},"Modern Electron \u7b80\u4ecb"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Modern Electron"),"\xa0\u662f\u57fa\u4e8e Electron \u7684\u684c\u9762\u7aef\u5e94\u7528\u6846\u67b6\uff0c\u5b83\u5e2e\u52a9\u6211\u4eec\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u521b\u5efa\u57fa\u672c\u7684\u5de5\u7a0b\u3002\u5305\u542b\uff1a\u57fa\u672c\u7684\u76ee\u5f55\u7ed3\u6784\u7ec4\u7ec7\u3001\u76f8\u5173 CLI\uff08\u542f\u52a8\u3001\u6784\u5efa\uff09\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u534f\u52a9\u6211\u4eec\u5f00\u53d1\uff0c\u51cf\u5c11\u91cd\u590d\u5efa\u8bbe\u5de5\u4f5c\uff0c\u964d\u4f4e\u5f00\u53d1\u590d\u6742\u5ea6\u3002\u63d0\u4f9b\uff1a\u7a97\u53e3\u7ba1\u7406\u3001\u8fdb\u7a0b\u901a\u4fe1\u3001\u5347\u7ea7\u7b49\u76f8\u5173\u901a\u7528\u670d\u52a1\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u7b80\u5316\u5de5\u7a0b\u5316\u590d\u6742\u5ea6\uff0c\u964d\u4f4e\u5de5\u7a0b\u5316\u95e8\u69db\u3002\u63d0\u4f9b\uff1a\u7b80\u5316\u540e\u7684\u6784\u5efa\u914d\u7f6e\u3001\u4e0d\u540c\u8fdb\u7a0b\u7684\u6784\u5efa\u547d\u4ee4\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u652f\u6301\u4e00\u5957\u4ee3\u7801\uff0c\u591a\u7aef\u53d1\u5e03\uff08Web \u7aef\u548c\u684c\u9762\u7aef\uff09\u3002\u53ef\u4ee5\u63a5\u5165\u4efb\u610f Web \u9879\u76ee\uff0c\u96f6\u6210\u672c\u8f6c\u4e3a\u684c\u9762\u5e94\u7528\uff0c\u5e76\u505a\u6301\u7eed\u5f00\u53d1\u96c6\u6210\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u63d0\u4f9b\u6d4b\u8bd5\u6846\u67b6\uff0c\u652f\u6301\u529f\u80fd\u6027\u4ee3\u7801\u7684\u6d4b\u8bd5\u3002\u6bd4\u5982\uff1a\u6d4b\u8bd5\u529f\u80fd\u51fd\u6570\u3001\u8fdb\u7a0b\u901a\u4fe1\u3001\u591a\u5e94\u7528\u5b9e\u4f8b\u4e4b\u95f4\u4ea4\u4e92\u6d41\u7a0b\u7b49\u3002")),(0,a.kt)("p",null,"\u4e3b\u8981\u7531\u4ee5\u4e0b\u90e8\u5206\u7ec4\u6210\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"cli\uff1a\u5e95\u5c42\u5f00\u53d1\u5de5\u5177\uff0c\u5728\u6574\u4e2a\u5f00\u53d1\u6d41\u7a0b\u4e2d\u6709\u7740\u4e0d\u53ef\u6216\u7f3a\u7684\u4f5c\u7528\u3002",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u672c\u5730\u5f00\u53d1\u3001\u4ee3\u7801\u6784\u5efa\u3001\u5e94\u7528\u6253\u5305\u3002"))),(0,a.kt)("li",{parentName:"ul"},"runtime\uff1a\u63d0\u4f9b\u7a97\u53e3\u7ba1\u7406\u3001\u8fdb\u7a0b\u901a\u4fe1\u3001\u5e94\u7528\u5347\u7ea7\u3001\u751f\u547d\u5468\u671f\u7ba1\u7406\u7b49\u80fd\u529b\u3002"),(0,a.kt)("li",{parentName:"ul"},"bridge\uff1a\u63d0\u4f9b\u5b89\u5168\u3001\u53ef\u9760\u7684\u901a\u4fe1 bridge\uff0c\u7b80\u5316\u4e86\u901a\u4fe1\u673a\u5236\u7684\u540c\u65f6\uff0c\u4e5f\u4fdd\u8bc1\u4e86\u9879\u76ee\u5b89\u5168\u6027\u3002"),(0,a.kt)("li",{parentName:"ul"},"test\uff1a\u6d4b\u8bd5\u6846\u67b6\uff0c\u652f\u6301\u529f\u80fd\u6027\u4ee3\u7801\u7684\u6d4b\u8bd5\u3002\u6bd4\u5982\uff1a\u6d4b\u8bd5\u529f\u80fd\u51fd\u6570\u3001\u8fdb\u7a0b\u901a\u4fe1\u3001\u591a\u5e94\u7528\u5b9e\u4f8b\u4e4b\u95f4\u4ea4\u4e92\u6d41\u7a0b\u7b49\u3002")),(0,a.kt)("h2",{id:"\u6574\u4f53\u67b6\u6784"},"\u6574\u4f53\u67b6\u6784"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/aphqeh7uhohpquloj/modern-js/electron/electron6.png",alt:"\u67b6\u6784\u56fe"})),(0,a.kt)("h2",{id:"\u9002\u7528\u4eba\u7fa4"},"\u9002\u7528\u4eba\u7fa4"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u96f6\u684c\u9762\u7aef\u57fa\u7840\u7684 web \u524d\u7aef\u5f00\u53d1\u8005\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u6709\u4e00\u5b9a\u684c\u9762\u7aef\u7ecf\u9a8c\uff0c\u5e0c\u671b\u63d0\u5347\u9879\u76ee\u53ef\u7ef4\u62a4\u6027\u3001\u5b89\u5168\u6027\u3001\u7a33\u5b9a\u6027\u7684\u9ad8\u7ea7\u524d\u7aef\u5f00\u53d1\u3002")),(0,a.kt)("h2",{id:"\u521b\u5efa\u9879\u76ee"},"\u521b\u5efa\u9879\u76ee"),(0,a.kt)("details",null,(0,a.kt)("summary",null,"npx @modern-js/create@modern-1 test_modern_electron"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"  npx @modern-js/create@modern-1 test_modern_electron\n  npx: 1 \u5b89\u88c5\u6210\u529f\uff0c\u7528\u65f6 7.108 \u79d2\n  ? \u8bf7\u9009\u62e9\u4f60\u60f3\u521b\u5efa\u7684\u5de5\u7a0b\u7c7b\u578b \u5e94\u7528\n  ? \u8bf7\u9009\u62e9\u5f00\u53d1\u8bed\u8a00 TS\n  ? \u8bf7\u9009\u62e9\u5305\u7ba1\u7406\u5de5\u5177 pnpm\n  ? \u662f\u5426\u9700\u8981\u652f\u6301\u4ee5\u4e0b\u7c7b\u578b\u5e94\u7528 Electron\n  ? \u662f\u5426\u9700\u8981\u8c03\u6574\u9ed8\u8ba4\u914d\u7f6e? \u5426\n")),(0,a.kt)("h4",{id:"\u6267\u884c\u540e\u6211\u4eec\u53ef\u4ee5\u5f97\u5230\u4ee5\u4e0b\u4ea7\u7269"},"\u6267\u884c\u540e\u6211\u4eec\u53ef\u4ee5\u5f97\u5230\u4ee5\u4e0b\u4ea7\u7269\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"\u251c\u2500\u2500 README.md\n\u251c\u2500\u2500 config\n\u2502\xa0\xa0 \u2514\u2500\u2500 electron\n\u2502\xa0\xa0     \u251c\u2500\u2500 entitlements.mac.plist # mac \u6743\u9650\u914d\u7f6e\u6587\u4ef6\n\u2502\xa0\xa0     \u251c\u2500\u2500 icon.icns # mac \u5e94\u7528\u56fe\u6807\n\u2502\xa0\xa0     \u251c\u2500\u2500 icon.ico # windows \u5e94\u7528\u56fe\u6807\n\u2502\xa0\xa0     \u2514\u2500\u2500 logo.png\n\u251c\u2500\u2500 electron\n\u2502\xa0\xa0 \u251c\u2500\u2500 main.ts #  \u4e3b\u8fdb\u7a0b\u5165\u53e3\u6587\u4ef6\n\u2502\xa0\xa0 \u251c\u2500\u2500 modern-app-env.d.ts\n\u2502\xa0\xa0 \u2514\u2500\u2500 tsconfig.json\n\u251c\u2500\u2500 modern.config.js # \u6846\u67b6\u914d\u7f6e\u6587\u4ef6\n\u251c\u2500\u2500 package.json\n\u251c\u2500\u2500 pnpm-lock.yaml\n\u251c\u2500\u2500 src # \u524d\u7aef\n\u2502\xa0\xa0 \u251c\u2500\u2500 App.css\n\u2502\xa0\xa0 \u251c\u2500\u2500 App.tsx\n\u2502\xa0\xa0 \u2514\u2500\u2500 modern-app-env.d.ts\n\u2514\u2500\u2500 tsconfig.json\n"))),(0,a.kt)("h2",{id:"\u542f\u52a8"},"\u542f\u52a8"),(0,a.kt)("p",null,"\u5728",(0,a.kt)("inlineCode",{parentName:"p"},"package.json"),"\u4e2d\u6dfb\u52a0\u4e00\u4e0b\u547d\u4ee4\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'"dev": "modern dev" # \u542f\u52a8\u6e32\u67d3\u8fdb\u7a0b,\n"dev:main": "modern dev electron-main" # \u542f\u52a8\u4e3b\u8fdb\u7a0b,\n"dev:electron": "modern dev electron" # \u8bed\u6cd5\u7cd6\uff0c\u540c\u65f6\u542f\u52a8\u6e32\u67d3\u8fdb\u7a0b\u548c\u4e3b\u8fdb\u7a0b,\n')),(0,a.kt)("p",null,"\u53c2\u8003\u3010",(0,a.kt)("a",{parentName:"p",href:"docs/apis/app/commands/dev"},"\u542f\u52a8\u547d\u4ee4"),"\u3011\u3002"),(0,a.kt)("h2",{id:"\u4e3a\u4e3b\u5165\u53e3\u6dfb\u52a0\u903b\u8f91"},"\u4e3a\u4e3b\u5165\u53e3\u6dfb\u52a0\u903b\u8f91"),(0,a.kt)("p",null,"\u4fee\u6539",(0,a.kt)("inlineCode",{parentName:"p"},"electron/main.ts"),"\u6587\u4ef6\uff0c\u589e\u52a0\u4ee3\u7801\u903b\u8f91\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { app } from 'electron';\nimport Runtime, { winService } from '@modern-js/runtime/electron-main';\n\n const runtime = new Runtime({\n    windowsConfig: [{\n      name: 'main',\n    }],\n    mainServices: {\n    openWindow: (winName: string) => {\n      return winService.createWindow({ name: winName })\n    }\n  },\n});\n\napp.whenReady().then(async () => {\n  await runtime.init();\n  winService.createWindow({\n    name: 'main',\n  })\n});\n\n")),(0,a.kt)("h2",{id:"\u6253\u5305"},"\u6253\u5305"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'"build": "modern build" # \u6784\u5efa\u6e32\u67d3\u8fdb\u7a0b,\n"build:main": "modern build electron-main" # \u6784\u5efa\u4e3b\u8fdb\u7a0b,\n"build:app": "modern build electron-app" # \u6784\u5efa\u5b89\u88c5\u7a0b\u5e8f,\n"build:electron": "modern build electron" # \u8bed\u6cd5\u7cd6\uff0c\u6309\u987a\u5e8f\u6784\u5efa\u6e32\u67d3\u8fdb\u7a0b\u3001\u4e3b\u8fdb\u7a0b\u3001\u5b89\u88c5\u7a0b\u5e8f,\n')),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u8865\u5145\u4fe1\u606f")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"\u66f4\u591a\u5173\u4e8e\u3010",(0,a.kt)("a",{parentName:"p",href:"/docs/apis/app/commands/build"},"\u6253\u5305\u547d\u4ee4"),"\u3011\u3002"))))}d.isMDXComponent=!0}}]);