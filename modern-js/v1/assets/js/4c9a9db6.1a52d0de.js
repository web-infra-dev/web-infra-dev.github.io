"use strict";(self.webpackChunk_modern_js_website=self.webpackChunk_modern_js_website||[]).push([[1266],{57522:(e,r,n)=>{n.d(r,{Zo:()=>l,kt:()=>f});var t=n(29901);function i(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){i(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function p(e,r){if(null==e)return{};var n,t,i=function(e,r){if(null==e)return{};var n,t,i={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(i[n]=e[n]);return i}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=t.createContext({}),c=function(e){var r=t.useContext(s),n=r;return e&&(n="function"==typeof e?e(r):o(o({},r),e)),n},l=function(e){var r=c(e.components);return t.createElement(s.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},d=t.forwardRef((function(e,r){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),d=c(n),f=i,m=d["".concat(s,".").concat(f)]||d[f]||u[f]||a;return n?t.createElement(m,o(o({ref:r},l),{},{components:n})):t.createElement(m,o({ref:r},l))}));function f(e,r){var n=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var p={};for(var s in r)hasOwnProperty.call(r,s)&&(p[s]=r[s]);p.originalType=e,p.mdxType="string"==typeof e?e:i,o[1]=p;for(var c=2;c<a;c++)o[c]=n[c];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},87190:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>p,toc:()=>c});var t=n(18249),i=(n(29901),n(57522));const a={title:"source.entriesDir",sidebar_label:"entriesDir",sidebar_position:111},o=void 0,p={unversionedId:"apis/app/config/source/entries-dir",id:"apis/app/config/source/entries-dir",title:"source.entriesDir",description:"* \u7c7b\u578b\uff1a string",source:"@site/docs/apis/app/config/source/entries-dir.md",sourceDirName:"apis/app/config/source",slug:"/apis/app/config/source/entries-dir",permalink:"/v1/docs/apis/app/config/source/entries-dir",tags:[],version:"current",sidebarPosition:111,frontMatter:{title:"source.entriesDir",sidebar_label:"entriesDir",sidebar_position:111},sidebar:"apisAppSidebar",previous:{title:"moduleScopes",permalink:"/v1/docs/apis/app/config/source/module-scopes"},next:{title:"preEntry",permalink:"/v1/docs/apis/app/config/source/pre-entry"}},s={},c=[],l={toc:c};function u(e){let{components:r,...n}=e;return(0,i.kt)("wrapper",(0,t.Z)({},l,n,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u7c7b\u578b\uff1a ",(0,i.kt)("inlineCode",{parentName:"li"},"string")),(0,i.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a ",(0,i.kt)("inlineCode",{parentName:"li"},"./src"))),(0,i.kt)("p",null,"\u9ed8\u8ba4\u4f1a\u6839\u636e ",(0,i.kt)("inlineCode",{parentName:"p"},"src")," \u76ee\u5f55\u8bc6\u522b\u5e94\u7528\u5165\u53e3\uff0c\u53ef\u901a\u8fc7\u8be5\u9009\u9879\u81ea\u5b9a\u4e49\u5e94\u7528\u5165\u53e3\u7684\u8bc6\u522b\u76ee\u5f55\u3002"),(0,i.kt)("p",null,"\u4f8b\u5982\uff0c\u5f53\u914d\u7f6e\u4e0e\u76ee\u5f55\u7ed3\u6784\u5982\u4e0b\u65f6\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="modern.config.js"',title:'"modern.config.js"'},"export default defineConfig({\n  source: {\n    entriesDir: './src/pages'\n  }\n})\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:'language-title="\u9879\u76ee\u76ee\u5f55\u7ed3\u6784"'},".\n\u2514\u2500\u2500 src\n    \u2514\u2500\u2500 pages\n        \u251c\u2500\u2500 a\n        \u2502\xa0\xa0 \u2514\u2500\u2500 App.jsx\n        \u2514\u2500\u2500 b\n            \u2514\u2500\u2500 App.jsx\n")),(0,i.kt)("p",null,"Modern.js \u4f1a\u6839\u636e ",(0,i.kt)("inlineCode",{parentName:"p"},"./src/pages")," \u76ee\u5f55\u7ed3\u6784\u751f\u6210\u6784\u5efa\u5165\u53e3 ",(0,i.kt)("inlineCode",{parentName:"p"},"a")," \u548c\u5165\u53e3 ",(0,i.kt)("inlineCode",{parentName:"p"},"b"),"\uff0c\u7ed3\u679c\u5982\u4e0b\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"}," {\n   a: './src/pages/a/App.jsx',\n   b: './src/pages/b/App.jsx'\n }\n")))}u.isMDXComponent=!0}}]);