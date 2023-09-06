"use strict";(self.webpackChunk_modern_js_website=self.webpackChunk_modern_js_website||[]).push([[1834],{57522:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(29901);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(r),f=o,m=d["".concat(l,".").concat(f)]||d[f]||s[f]||a;return r?n.createElement(m,p(p({ref:t},c),{},{components:r})):n.createElement(m,p({ref:t},c))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,p=new Array(a);p[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,p[1]=i;for(var u=2;u<a;u++)p[u]=r[u];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},46871:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>s,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var n=r(18249),o=(r(29901),r(57522));const a={sidebar_label:"disableSourceMap"},p="output.disableSourceMap",i={unversionedId:"apis/app/config/output/disable-source-map",id:"apis/app/config/output/disable-source-map",title:"output.disableSourceMap",description:"* \u7c7b\u578b\uff1a boolean",source:"@site/docs/apis/app/config/output/disable-source-map.md",sourceDirName:"apis/app/config/output",slug:"/apis/app/config/output/disable-source-map",permalink:"/v1/docs/apis/app/config/output/disable-source-map",tags:[],version:"current",frontMatter:{sidebar_label:"disableSourceMap"},sidebar:"apisAppSidebar",previous:{title:"disableNodePolyfill",permalink:"/v1/docs/apis/app/config/output/disable-node-polyfill"},next:{title:"disableTsChecker",permalink:"/v1/docs/apis/app/config/output/disable-ts-checker"}},l={},u=[],c={toc:u};function s(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"outputdisablesourcemap"},"output.disableSourceMap"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u7c7b\u578b\uff1a ",(0,o.kt)("inlineCode",{parentName:"li"},"boolean")),(0,o.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a ",(0,o.kt)("inlineCode",{parentName:"li"},"false"))),(0,o.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cModern.js \u5728\u751f\u4ea7\u73af\u5883\u4e0b\u4f1a\u751f\u6210 JS \u548c CSS \u8d44\u6e90\u7684 SourceMap\uff0c\u7528\u4e8e\u8c03\u8bd5\u548c\u6392\u67e5\u7ebf\u4e0a\u95ee\u9898\u3002"),(0,o.kt)("p",null,"\u5982\u679c\u9879\u76ee\u5728\u751f\u4ea7\u73af\u5883\u4e0b\u4e0d\u9700\u8981 SourceMap\uff0c\u53ef\u4ee5\u5173\u95ed\u8be5\u529f\u80fd\uff0c\u4ece\u800c\u63d0\u5347 build \u6784\u5efa\u7684\u901f\u5ea6\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="modern.config.js"',title:'"modern.config.js"'},"import { defineConfig } from '@modern-js/app-tools';\n\nexport default defineConfig({\n  output: {\n    disableSourceMap: true,\n  },\n});\n")))}s.isMDXComponent=!0}}]);