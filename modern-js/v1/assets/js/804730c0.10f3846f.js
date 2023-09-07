"use strict";(self.webpackChunk_modern_js_website=self.webpackChunk_modern_js_website||[]).push([[205],{57522:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(29901);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,p=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),f=c(r),d=o,m=f["".concat(s,".").concat(d)]||f[d]||l[d]||p;return r?n.createElement(m,a(a({ref:t},u),{},{components:r})):n.createElement(m,a({ref:t},u))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var p=r.length,a=new Array(p);a[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var c=2;c<p;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},24887:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>l,frontMatter:()=>p,metadata:()=>i,toc:()=>c});var n=r(18249),o=(r(29901),r(57522));const p={title:"api/_app.[tj]s",sidebar_position:3},a=void 0,i={unversionedId:"apis/app/hooks/api/functions/app",id:"apis/app/hooks/api/functions/app",title:"api/_app.[tj]s",description:"\u5728 Modern.js \u51fd\u6570\u5199\u6cd5\u4e0b\uff0c\u8be5\u6587\u4ef6\u53ef\u4ee5\u7ed9\u5e94\u7528\u5de5\u7a0b\u7684\u670d\u52a1\u7aef\u6dfb\u52a0\u524d\u7f6e\u4e2d\u95f4\u4ef6\uff1b\u8be5\u4e2d\u95f4\u4ef6\u7684\u6267\u884c\u4f1a\u5728 BFF \u51fd\u6570\u4e4b\u524d\u6267\u884c\u3002",source:"@site/docs/apis/app/hooks/api/functions/app.md",sourceDirName:"apis/app/hooks/api/functions",slug:"/apis/app/hooks/api/functions/app",permalink:"/v1/docs/apis/app/hooks/api/functions/app",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"api/_app.[tj]s",sidebar_position:3},sidebar:"apisAppSidebar",previous:{title:"api/**/_*.[tj]s,api/**/_*/**",permalink:"/v1/docs/apis/app/hooks/api/functions/common"},next:{title:"api/test.[tj]s",permalink:"/v1/docs/apis/app/hooks/api/test"}},s={},c=[],u={toc:c};function l(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u5728 Modern.js \u51fd\u6570\u5199\u6cd5\u4e0b\uff0c\u8be5\u6587\u4ef6\u53ef\u4ee5\u7ed9\u5e94\u7528\u5de5\u7a0b\u7684\u670d\u52a1\u7aef\u6dfb\u52a0\u524d\u7f6e\u4e2d\u95f4\u4ef6\uff1b\u8be5\u4e2d\u95f4\u4ef6\u7684\u6267\u884c\u4f1a\u5728",(0,o.kt)("a",{parentName:"p",href:"/docs/apis/app/hooks/api/functions/api"}," BFF \u51fd\u6570"),"\u4e4b\u524d\u6267\u884c\u3002"),(0,o.kt)("p",null,"\u76ee\u524d Modern.js \u652f\u6301\u56db\u79cd\u4e0d\u540c\u7684\u6846\u67b6\uff0cexpress\uff0ckoa\uff0cnest\uff0cegg \u7b49\uff0c\u4e0d\u540c\u7684\u6846\u67b6\u9700\u8981\u6dfb\u52a0\u76f8\u5e94\u6846\u67b6\u7684\u4e2d\u95f4\u4ef6\u3002\u5177\u4f53\u793a\u4f8b\u8bf7\u53c2\u8003 ",(0,o.kt)("a",{parentName:"p",href:"/docs/apis/app/runtime/bff-server/hook"},"hook")))}l.isMDXComponent=!0}}]);