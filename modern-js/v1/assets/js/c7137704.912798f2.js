"use strict";(self.webpackChunk_modern_js_website=self.webpackChunk_modern_js_website||[]).push([[819],{57522:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>u});var r=n(29901);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},m=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),d=s(n),u=a,f=d["".concat(l,".").concat(u)]||d[u]||c[u]||i;return n?r.createElement(f,p(p({ref:t},m),{},{components:n})):r.createElement(f,p({ref:t},m))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,p=new Array(i);p[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,p[1]=o;for(var s=2;s<i;s++)p[s]=n[s];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},30575:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var r=n(18249),a=(n(29901),n(57522));const i={title:"Head",sidebar_position:1},p="Head",o={unversionedId:"apis/app/runtime/app/head",id:"apis/app/runtime/app/head",title:"Head",description:"\u7528\u4e8e\u7ed9 head \u5143\u7d20\u5185\u6dfb\u52a0 html \u5143\u7d20\uff08\u5982 title\u3001meta\u3001script \u7b49\uff09\uff0c\u5e76\u4e14\u652f\u6301 SSR\u3002",source:"@site/docs/apis/app/runtime/app/head.md",sourceDirName:"apis/app/runtime/app",slug:"/apis/app/runtime/app/head",permalink:"/v1/docs/apis/app/runtime/app/head",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Head",sidebar_position:1},sidebar:"apisAppSidebar",previous:{title:"\u73af\u5883\u53d8\u91cf",permalink:"/v1/docs/apis/app/runtime/env"},next:{title:"useRuntimeContext",permalink:"/v1/docs/apis/app/runtime/app/use-runtime-context"}},l={},s=[{value:"API",id:"api",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"\u66f4\u591a\u7528\u6cd5",id:"\u66f4\u591a\u7528\u6cd5",level:2}],m={toc:s};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"head"},"Head"),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u8865\u5145\u4fe1\u606f")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"\u7528\u4e8e\u7ed9 ",(0,a.kt)("inlineCode",{parentName:"p"},"head")," \u5143\u7d20\u5185\u6dfb\u52a0 html \u5143\u7d20\uff08\u5982 title\u3001meta\u3001script \u7b49\uff09\uff0c\u5e76\u4e14\u652f\u6301 ",(0,a.kt)("inlineCode",{parentName:"p"},"SSR"),"\u3002"),(0,a.kt)("pre",{parentName:"div"},(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { Helmet } from '@modern-js/runtime/head';\n")))),(0,a.kt)("h2",{id:"api"},"API"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"<Helmet></Helmet>\n")),(0,a.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import { Helmet } from \'@modern-js/runtime/head\';\n\nfunction IndexPage() {\n  return (\n    <div>\n      <Helmet>\n        <title>My page title</title>\n        <meta name="viewport" content="initial-scale=1.0, width=device-width" />\n      </Helmet>\n      <p>Hello Modern.js!</p>\n    </div>\n  )\n}\n\nexport default IndexPage\n')),(0,a.kt)("h2",{id:"\u66f4\u591a\u7528\u6cd5"},"\u66f4\u591a\u7528\u6cd5"),(0,a.kt)("p",null,"\u8be6\u89c1 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/nfl/react-helmet"},"react-helmet"),"\u3002"))}c.isMDXComponent=!0}}]);