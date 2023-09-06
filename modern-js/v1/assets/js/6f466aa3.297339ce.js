"use strict";(self.webpackChunk_modern_js_website=self.webpackChunk_modern_js_website||[]).push([[7274],{57522:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(29901);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,f=d["".concat(i,".").concat(m)]||d[m]||c[m]||l;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,a=new Array(l);a[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var u=2;u<l;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},72980:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>c,frontMatter:()=>l,metadata:()=>s,toc:()=>u});var r=n(18249),o=(n(29901),n(57522));const l={title:"src/index.[tj]s",sidebar_position:2},a=void 0,s={unversionedId:"apis/module/hooks/src/index",id:"apis/module/hooks/src/index",title:"src/index.[tj]s",description:"\u6a21\u5757\u5de5\u7a0b\u65b9\u6848\u5165\u53e3\u6587\u4ef6\u3002",source:"@site/docs/apis/module/hooks/src/index.md",sourceDirName:"apis/module/hooks/src",slug:"/apis/module/hooks/src/",permalink:"/v1/docs/apis/module/hooks/src/",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"src/index.[tj]s",sidebar_position:2},sidebar:"apisModuleSidebar",previous:{title:"\u547d\u4ee4",permalink:"/v1/docs/apis/module/hooks/"},next:{title:"src/.eslintrc.json",permalink:"/v1/docs/apis/module/hooks/src/eslint"}},i={},u=[],p={toc:u};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u6a21\u5757\u5de5\u7a0b\u65b9\u6848\u5165\u53e3\u6587\u4ef6\u3002"),(0,o.kt)("p",null,"\u6a21\u5757\u5de5\u7a0b\u65b9\u6848\u7684\u5bfc\u51fa\u652f\u6301\u4e00\u4e0b\u96c6\u4e2d\u7c7b\u578b\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u4e00\u4e2a\u51fd\u6570\u6216\u8005\u7c7b")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"export default function () {\n  return 'hello world';\n}\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u4e00\u4e2a React \u7ec4\u4ef6")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"export default () => {\n  return (\n    <div>Hello World</div>\n  );\n}\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u4e00\u4e2a Module \u5bf9\u8c61\u6216\u8005 Module \u5de5\u5382\u51fd\u6570")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { model } from '@modern-js/runtime/model';\n\ntype State = {\n  data: {\n    name: string;\n  }[];\n};\n\nexport default model<State>('test').define({\n  state: {\n    data: [],\n  },\n  actions: {\n    load: {\n      fulfilled(state, payload) {\n        return {data: payload};\n      },\n    }\n  },\n  effects: {\n    async load() {\n      ...\n    },\n  },\n});\n\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u4e00\u4e2a\u6570\u636e")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'export default {\n  "test": 1,\n};\n')),(0,o.kt)("p",null,"\u5f53\u4f7f\u7528\u9ed8\u8ba4\u5bfc\u51fa\u7684\u65b9\u5f0f\u5bfc\u51fa\u6a21\u5757\u65f6\uff0c\u652f\u6301\u5bfc\u51fa\u4ee5\u4e0a\u4efb\u610f\u4e00\u79cd\u7c7b\u578b\u3002"),(0,o.kt)("p",null,"\u5f53\u4f7f\u7528\u591a\u4e2a\u5bfc\u51fa\u7684\u65b9\u5f0f\u5bfc\u51fa\u6a21\u5757\u65f6\uff0c\u652f\u6301\u540c\u65f6\u5bfc\u51fa\u4ee5\u4e0a\u591a\u79cd\u7c7b\u578b\u3002"),(0,o.kt)("p",null,"\u6a21\u5757\u5de5\u7a0b\u65b9\u6848\u8fd8\u652f\u6301\u540c\u65f6\u4f7f\u7528\u9ed8\u8ba4\u5bfc\u51fa\u548c\u591a\u4e2a\u5bfc\u51fa\u3002"),(0,o.kt)("p",null,"\u6a21\u5757\u5de5\u7a0b\u65b9\u6848\u652f\u6301\u5bfc\u51fa\u7684\u7ec4\u4ef6\u3001Module \u5bf9\u8c61\u3001Module \u5de5\u5382\u3001\u51fd\u6570\u548c\u7c7b\u4e0a\u901a\u8fc7\u9759\u6001\u5c5e\u6027\u7684\u65b9\u5f0f\u5bfc\u51fa\u5176\u4ed6\u7c7b\u578b\u3002"))}c.isMDXComponent=!0}}]);