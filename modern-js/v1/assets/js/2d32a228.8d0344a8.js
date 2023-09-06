"use strict";(self.webpackChunk_modern_js_website=self.webpackChunk_modern_js_website||[]).push([[1061],{57522:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>k});var r=t(29901);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),s=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(p.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=s(t),k=a,c=d["".concat(p,".").concat(k)]||d[k]||m[k]||i;return t?r.createElement(c,l(l({ref:n},u),{},{components:t})):r.createElement(c,l({ref:n},u))}));function k(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=d;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=t[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},80616:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var r=t(18249),a=(t(29901),t(57522));const i={sidebar_position:3},l="\u63d2\u4ef6\u4e4b\u95f4\u7684\u5173\u7cfb",o={unversionedId:"guides/features/framework-plugin/relationship",id:"guides/features/framework-plugin/relationship",title:"\u63d2\u4ef6\u4e4b\u95f4\u7684\u5173\u7cfb",description:"Modern.js \u7684\u63d2\u4ef6\u914d\u7f6e\u5bf9\u8c61\u63d0\u4f9b\u4e86\u4e00\u7cfb\u5217\u7684\u5b57\u6bb5\uff0c\u7528\u4e8e\u63a7\u5236\u63d2\u4ef6\u987a\u5e8f\u3001\u4e92\u65a5\u7b49\u80fd\u529b\uff0c\u53ef\u7528\u7684\u5b57\u6bb5\u5982\u4e0b\uff1a",source:"@site/docs/guides/features/framework-plugin/relationship.md",sourceDirName:"guides/features/framework-plugin",slug:"/guides/features/framework-plugin/relationship",permalink:"/v1/docs/guides/features/framework-plugin/relationship",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"guidesSidebar",previous:{title:"\u5982\u4f55\u7f16\u5199\u63d2\u4ef6",permalink:"/v1/docs/guides/features/framework-plugin/implement"},next:{title:"\u6269\u5c55\u63d2\u4ef6 Hook",permalink:"/v1/docs/guides/features/framework-plugin/extend"}},p={},s=[{value:"\u63d2\u4ef6\u6392\u5e8f",id:"\u63d2\u4ef6\u6392\u5e8f",level:2},{value:"\u524d\u7f6e\u63d2\u4ef6",id:"\u524d\u7f6e\u63d2\u4ef6",level:3},{value:"\u540e\u7f6e\u63d2\u4ef6",id:"\u540e\u7f6e\u63d2\u4ef6",level:3},{value:"\u4e92\u65a5\u63d2\u4ef6",id:"\u4e92\u65a5\u63d2\u4ef6",level:2},{value:"\u5fc5\u9700\u63d2\u4ef6",id:"\u5fc5\u9700\u63d2\u4ef6",level:2},{value:"\u6ce8\u518c\u63d2\u4ef6",id:"\u6ce8\u518c\u63d2\u4ef6",level:2}],u={toc:s};function m(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u63d2\u4ef6\u4e4b\u95f4\u7684\u5173\u7cfb"},"\u63d2\u4ef6\u4e4b\u95f4\u7684\u5173\u7cfb"),(0,a.kt)("p",null,"Modern.js \u7684\u63d2\u4ef6\u914d\u7f6e\u5bf9\u8c61\u63d0\u4f9b\u4e86\u4e00\u7cfb\u5217\u7684\u5b57\u6bb5\uff0c\u7528\u4e8e\u63a7\u5236\u63d2\u4ef6\u987a\u5e8f\u3001\u4e92\u65a5\u7b49\u80fd\u529b\uff0c\u53ef\u7528\u7684\u5b57\u6bb5\u5982\u4e0b\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"name"),": ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),"\uff0c\u8bbe\u7f6e\u5f53\u524d\u63d2\u4ef6\u7684\u540d\u79f0\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"pre"),": ",(0,a.kt)("inlineCode",{parentName:"li"},"string[]"),"\uff0c\u8fd9\u4e9b\u63d2\u4ef6\u6700\u7ec8\u4f1a\u8c03\u6574\u5230\u5f53\u524d\u63d2\u4ef6\u524d\u9762\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"post"),": ",(0,a.kt)("inlineCode",{parentName:"li"},"string[]"),"\uff0c\u8fd9\u4e9b\u63d2\u4ef6\u6700\u7ec8\u4f1a\u8c03\u6574\u5230\u5f53\u524d\u63d2\u4ef6\u540e\u9762\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"rivals"),": ",(0,a.kt)("inlineCode",{parentName:"li"},"string[]"),"\uff0c\u4e92\u65a5\u63d2\u4ef6\uff0c\u9047\u5230\u8fd9\u4e9b\u63d2\u4ef6\u65f6\u4f1a\u62a5\u9519\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"required"),": ",(0,a.kt)("inlineCode",{parentName:"li"},"string[]"),"\uff0c\u5fc5\u9700\u63d2\u4ef6\uff0c\u63d2\u4ef6\u5217\u8868\u4e2d\u6ca1\u6709\u5bf9\u5e94\u7684\u63d2\u4ef6\u65f6\u4f1a\u62a5\u9519\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"usePlugin"),": ",(0,a.kt)("inlineCode",{parentName:"li"},"CliPlugin[]"),"\uff0c\u6ce8\u518c\u5176\u4ed6\u63d2\u4ef6\u3002")),(0,a.kt)("p",null,"\u901a\u8fc7\u4ee5\u4e0a\u53c2\u6570\u53ef\u4ee5\u5b9e\u73b0\u63d2\u4ef6\u7684\u524d\u7f6e\u3001\u540e\u7f6e\u3001\u4e92\u65a5\u3001\u5fc5\u9700\u7b49\u903b\u8f91\u3002"),(0,a.kt)("h2",{id:"\u63d2\u4ef6\u6392\u5e8f"},"\u63d2\u4ef6\u6392\u5e8f"),(0,a.kt)("p",null,"Modern.js \u7684\u63d2\u4ef6\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"pre"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"post")," \u53c2\u6570\u6765\u5b9e\u73b0\u4e86\u63d2\u4ef6\u6392\u5e8f\u7684\u529f\u80fd\u3002"),(0,a.kt)("h3",{id:"\u524d\u7f6e\u63d2\u4ef6"},"\u524d\u7f6e\u63d2\u4ef6"),(0,a.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u63d2\u4ef6\u4f1a\u6309\u7167\u6dfb\u52a0\u987a\u5e8f\u4f9d\u6b21\u6267\u884c\uff0c\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"pre")," \u5b57\u6bb5\u53ef\u4ee5\u58f0\u660e\u524d\u7f6e\u6267\u884c\u7684\u63d2\u4ef6\u3002"),(0,a.kt)("p",null,"\u6bd4\u5982\u6709\u4e0b\u9762\u4e24\u4e2a\u63d2\u4ef6\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=foo.ts",title:"foo.ts"},"const foo = {\n  name: 'plugin-foo',\n};\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=bar.ts",title:"bar.ts"},"const bar = {\n  name: 'plugin-bar',\n  pre: ['plugin-foo'],\n};\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"bar")," \u63d2\u4ef6\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"pre")," \u5b57\u6bb5\u4e2d\u914d\u7f6e\u4e86 ",(0,a.kt)("inlineCode",{parentName:"p"},"foo")," \u63d2\u4ef6\uff0c\u56e0\u6b64 ",(0,a.kt)("inlineCode",{parentName:"p"},"foo")," \u63d2\u4ef6\u4e00\u5b9a\u4f1a\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"bar")," \u63d2\u4ef6\u4e4b\u524d\u6267\u884c\u3002"),(0,a.kt)("h3",{id:"\u540e\u7f6e\u63d2\u4ef6"},"\u540e\u7f6e\u63d2\u4ef6"),(0,a.kt)("p",null,"\u540c\u6837\u7684\uff0c\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"post")," \u5b57\u6bb5\u53ef\u4ee5\u58f0\u660e\u540e\u7f6e\u6267\u884c\u7684\u63d2\u4ef6\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=foo.ts",title:"foo.ts"},"const foo = {\n  name: 'plugin-foo',\n};\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=bar.ts",title:"bar.ts"},"const bar = {\n  name: 'plugin-bar',\n  post: ['plugin-foo'],\n};\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"bar")," \u63d2\u4ef6\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"post")," \u5b57\u6bb5\u4e2d\u914d\u7f6e\u4e86 ",(0,a.kt)("inlineCode",{parentName:"p"},"foo")," \u63d2\u4ef6\uff0c\u56e0\u6b64 ",(0,a.kt)("inlineCode",{parentName:"p"},"foo")," \u63d2\u4ef6\u4e00\u5b9a\u4f1a\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"bar")," \u63d2\u4ef6\u4e4b\u540e\u6267\u884c\u3002"),(0,a.kt)("h2",{id:"\u4e92\u65a5\u63d2\u4ef6"},"\u4e92\u65a5\u63d2\u4ef6"),(0,a.kt)("p",null,"\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"rivals")," \u5b57\u6bb5\u53ef\u4ee5\u58f0\u660e\u63d2\u4ef6\u95f4\u7684\u4e92\u65a5\u5173\u7cfb\u3002"),(0,a.kt)("p",null,"\u6709\u4e0b\u9762\u4e24\u4e2a\u63d2\u4ef6\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=foo.ts",title:"foo.ts"},"const foo = {\n  name: 'plugin-foo',\n};\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=bar.ts",title:"bar.ts"},"const bar = {\n  name: 'plugin-bar',\n  rivals: ['plugin-foo'],\n};\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"bar")," \u63d2\u4ef6\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"rivals")," \u5b57\u6bb5\u4e2d\u914d\u7f6e\u4e86 ",(0,a.kt)("inlineCode",{parentName:"p"},"foo")," \u63d2\u4ef6\uff0c\u56e0\u6b64\u540c\u65f6\u6dfb\u52a0\u4e86 ",(0,a.kt)("inlineCode",{parentName:"p"},"foo")," \u63d2\u4ef6\u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"bar")," \u63d2\u4ef6\u5c31\u4f1a\u62a5\u9519\u3002"),(0,a.kt)("h2",{id:"\u5fc5\u9700\u63d2\u4ef6"},"\u5fc5\u9700\u63d2\u4ef6"),(0,a.kt)("p",null,"\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"required")," \u5b57\u6bb5\u53ef\u4ee5\u58f0\u660e\u63d2\u4ef6\u95f4\u7684\u4f9d\u8d56\u5173\u7cfb\u3002"),(0,a.kt)("p",null,"\u6709\u4e0b\u9762\u4e24\u4e2a\u63d2\u4ef6\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=foo.ts",title:"foo.ts"},"const foo = {\n  name: 'plugin-foo',\n};\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=bar.ts",title:"bar.ts"},"const bar = {\n  name: 'plugin-bar',\n  required: ['plugin-foo'],\n};\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"bar")," \u63d2\u4ef6\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"required")," \u5b57\u6bb5\u4e2d\u914d\u7f6e\u4e86 ",(0,a.kt)("inlineCode",{parentName:"p"},"foo")," \u63d2\u4ef6\uff0c\u56e0\u6b64\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"bar")," \u63d2\u4ef6\u65f6\uff0c\u5982\u679c\u672a\u914d\u7f6e ",(0,a.kt)("inlineCode",{parentName:"p"},"foo")," \u63d2\u4ef6\u5c31\u4f1a\u62a5\u9519\u3002"),(0,a.kt)("h2",{id:"\u6ce8\u518c\u63d2\u4ef6"},"\u6ce8\u518c\u63d2\u4ef6"),(0,a.kt)("p",null,"\u5f53\u63d2\u4ef6\u4e4b\u95f4\u5b58\u5728\u4f9d\u8d56\u5173\u7cfb\u65f6\uff0c\u6211\u4eec\u4e5f\u53ef\u4ee5\u5728\u4e00\u4e2a\u63d2\u4ef6\u4e2d\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"usePlugin")," \u4e3b\u52a8\u6ce8\u518c\u53e6\u4e00\u4e2a\u63d2\u4ef6\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=foo.ts",title:"foo.ts"},"const foo = () => ({\n  name: 'plugin-foo',\n});\n\nconst bar = () => ({\n  name: 'plugin-bar',\n  usePlugin: [foo()],\n});\n")),(0,a.kt)("p",null,"\u5f53\u4f7f\u7528\u8005\u914d\u7f6e\u4e86 ",(0,a.kt)("inlineCode",{parentName:"p"},"bar")," \u63d2\u4ef6\u65f6\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"foo")," \u63d2\u4ef6\u4e5f\u4f1a\u81ea\u52a8\u6ce8\u518c\u751f\u6548\uff0c\u4f7f\u7528\u8005\u5c31\u4e0d\u9700\u8981\u53bb\u989d\u5916\u6ce8\u518c ",(0,a.kt)("inlineCode",{parentName:"p"},"foo")," \u63d2\u4ef6\u4e86\u3002"))}m.isMDXComponent=!0}}]);