"use strict";(self.webpackChunk_modern_js_website=self.webpackChunk_modern_js_website||[]).push([[7857,6178,6650],{57522:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>c});var r=n(29901);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=r.createContext({}),p=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(d.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,d=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(n),c=o,v=u["".concat(d,".").concat(c)]||u[c]||m[c]||a;return n?r.createElement(v,i(i({ref:t},l),{},{components:n})):r.createElement(v,i({ref:t},l))}));function c(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},87462:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>d,toc:()=>l});var r=n(18249),o=(n(29901),n(57522)),a=n(66993);const i={sidebar_position:9,title:"useStore"},s=void 0,d={unversionedId:"apis/app/runtime/model/use-store",id:"apis/app/runtime/model/use-store",title:"useStore",description:"useStore \u7528\u4e8e\u83b7\u53d6\u5f53\u524d\u7ec4\u4ef6\u6811\u5171\u4eab\u7684 Store\u3002\u5e38\u7528\u4e8e\u5728\u7ec4\u4ef6\u5916\u8bbf\u95ee Model \u7684\u573a\u666f\u3002\u6ce8\u610f\uff0cuseStore \u662f\u4e00\u4e2a React Hook\uff0c\u53ea\u80fd\u5728\u7ec4\u4ef6\u5185\u4f7f\u7528\u3002",source:"@site/docs/apis/app/runtime/model/use-store.md",sourceDirName:"apis/app/runtime/model",slug:"/apis/app/runtime/model/use-store",permalink:"/v1/docs/apis/app/runtime/model/use-store",tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9,title:"useStore"},sidebar:"apisAppSidebar",previous:{title:"Provider",permalink:"/v1/docs/apis/app/runtime/model/Provider"},next:{title:"createStore",permalink:"/v1/docs/apis/app/runtime/model/create-store"}},p={},l=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",level:2},{value:"\u8fd4\u56de\u503c",id:"\u8fd4\u56de\u503c",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}],m={toc:l};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(a.default,{mdxType:"ReduckTip"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"useStore")," \u7528\u4e8e\u83b7\u53d6\u5f53\u524d\u7ec4\u4ef6\u6811\u5171\u4eab\u7684 Store\u3002\u5e38\u7528\u4e8e\u5728\u7ec4\u4ef6\u5916\u8bbf\u95ee Model \u7684\u573a\u666f\u3002\u6ce8\u610f\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"useStore")," \u662f\u4e00\u4e2a React Hook\uff0c\u53ea\u80fd\u5728\u7ec4\u4ef6\u5185\u4f7f\u7528\u3002"),(0,o.kt)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"function useStore(): ReduckStore;\n")),(0,o.kt)("h2",{id:"\u8fd4\u56de\u503c"},"\u8fd4\u56de\u503c"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"ReduckStore\uff1aReduck Store\uff0c\u7c7b\u578b\u53c2\u8003 ",(0,o.kt)("a",{parentName:"li",href:"/v1/docs/apis/app/runtime/model/create-store"},"createStore")," \u8fd4\u56de\u503c\u3002")),(0,o.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"// \u4fdd\u8bc1 getStore \u5728\u7ec4\u4ef6\u6811\u6302\u8f7d\u5b8c\u6210\u540e\u6267\u884c\nsetTimeout(() => {\n  const store = getStore();\n  const [, actions] = store.use(countModel);\n  setInterval(() => {\n    actions.add();\n  }, 1000);\n}, 1000);\n\nfunction Counter() {\n  const [state] = useModel(countModel);\n\n  return (\n    <div>\n      <div>counter: {state.value}</div>\n    </div>\n  );\n}\n")),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u66f4\u591a\u53c2\u8003")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},(0,o.kt)("a",{parentName:"p",href:"/docs/guides/features/model/use-model"},"\u4f7f\u7528 Model")))))}u.isMDXComponent=!0},23020:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>d,toc:()=>l});var r=n(18249),o=(n(29901),n(57522)),a=n(87462);const i={sidebar_position:9,title:"useStore"},s=void 0,d={unversionedId:"apis/module/runtime/model/use-store",id:"apis/module/runtime/model/use-store",title:"useStore",description:"",source:"@site/docs/apis/module/runtime/model/use-store.md",sourceDirName:"apis/module/runtime/model",slug:"/apis/module/runtime/model/use-store",permalink:"/v1/docs/apis/module/runtime/model/use-store",tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9,title:"useStore"},sidebar:"apisModuleSidebar",previous:{title:"Provider",permalink:"/v1/docs/apis/module/runtime/model/Provider"},next:{title:"createStore",permalink:"/v1/docs/apis/module/runtime/model/create-store"}},p={},l=[],m={toc:l};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(a.default,{mdxType:"Info"}))}u.isMDXComponent=!0},66993:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var r=n(18249),o=(n(29901),n(57522));const a={},i=void 0,s={unversionedId:"components/reduck-tip",id:"components/reduck-tip",title:"reduck-tip",description:"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u672c\u8282\u6240\u6709 API \u7684\u5bfc\u51fa\u5305\u540d\u4e3a\uff1a@modern-js/runtime/model\u3002",source:"@site/docs/components/reduck-tip.md",sourceDirName:"components",slug:"/components/reduck-tip",permalink:"/v1/docs/components/reduck-tip",tags:[],version:"current",frontMatter:{}},d={},p=[],l={toc:p};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u8865\u5145\u4fe1\u606f")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u672c\u8282\u6240\u6709 API \u7684\u5bfc\u51fa\u5305\u540d\u4e3a\uff1a",(0,o.kt)("inlineCode",{parentName:"p"},"@modern-js/runtime/model"),"\u3002"),(0,o.kt)("p",{parentName:"div"},"\u5982\u679c\u662f\u5728 Modern.js \u4ee5\u5916\u5355\u72ec\u96c6\u6210 Reduck\uff0c\u5bfc\u51fa\u5305\u540d\u4e3a\uff1a",(0,o.kt)("inlineCode",{parentName:"p"},"@modern-js-reduck/react"),"\u3002"))))}m.isMDXComponent=!0}}]);