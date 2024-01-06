/*! For license information please see 77581.0e3bdd10.js.LICENSE.txt */
(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["77581"],{37287:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return a}});var s=r("9880"),l=r("23169");function d(e){let n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",pre:"pre",p:"p",a:"a",h3:"h3",h4:"h4"},(0,l.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"\u7C7B\u578B\uFF1A"})," ",(0,s.jsx)(n.code,{children:"undefined | true | PreloadOption"})]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"type IncludeType = 'async-chunks' | 'initial' | 'all-assets' | 'all-chunks';\n\ntype Filter = Array<string | RegExp> | ((filename: string) => boolean);\n\ninterface PreloadOption {\n  type?: IncludeType;\n  include?: Filter;\n  exclude?: Filter;\n}\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"\u9ED8\u8BA4\u503C\uFF1A"})," ",(0,s.jsx)(n.code,{children:"undefined"})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["\u4E3A\u54EA\u4E9B\u8D44\u6E90\u914D\u7F6E ",(0,s.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/rel/preload",target:"_blank",rel:"noopener noreferrer",children:"preload"})," \u5C5E\u6027\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"\u8BE5\u5C5E\u6027\u901A\u5E38\u7528\u4E8E\u914D\u7F6E\u5F53\u524D\u5BFC\u822A\u4E0B\u53EF\u80FD\u9700\u8981\u7684\u8D44\u6E90\uFF0C\u6B64\u65F6\uFF0C\u6D4F\u89C8\u5668\u901A\u5E38\u4EE5\u4E2D\u7B49\u4F18\u5148\u7EA7\uFF08\u4E0D\u662F\u5E03\u5C40\u963B\u585E\uFF09\u83B7\u53D6\u6B64\u8D44\u6E90\u3002"}),"\n",(0,s.jsxs)(n.h3,{id:"boolean-\u7C7B\u578B",children:["Boolean \u7C7B\u578B",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#boolean-\u7C7B\u578B",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["\u5F53\u8BBE\u7F6E ",(0,s.jsx)(n.code,{children:"performance.preload"})," \u4E3A ",(0,s.jsx)(n.code,{children:"true"}),"\uFF0C\u5C06\u6839\u636E\u5982\u4E0B\u914D\u7F6E\u5BF9\u8D44\u6E90\u8FDB\u884C\u9884\u52A0\u8F7D:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"{\n  type: 'async-chunks',\n}\n"})}),"\n",(0,s.jsxs)(n.h3,{id:"object-\u7C7B\u578B",children:["Object \u7C7B\u578B",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#object-\u7C7B\u578B",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["\u5F53 ",(0,s.jsx)(n.code,{children:"performance.preload"})," \u7684\u503C\u4E3A object \u7C7B\u578B\u65F6\uFF0CBuilder \u4F1A\u6839\u636E\u5F53\u524D\u914D\u7F6E\u5BF9\u6307\u5B9A\u8D44\u6E90\u5F00\u542F preload \u80FD\u529B\u3002"]}),"\n",(0,s.jsxs)(n.h4,{id:"preloadtype",children:["preload.type",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#preloadtype",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"type"})," \u5B57\u6BB5\u63A7\u5236\u4E86\u54EA\u4E9B\u8D44\u6E90\u4F1A\u88AB\u9884\u52A0\u8F7D\uFF0C\u540C\u65F6\u652F\u6301\u901A\u8FC7 ",(0,s.jsx)(n.code,{children:"include"})," \u548C ",(0,s.jsx)(n.code,{children:"exclude"})," \u5BF9\u6307\u5B9A\u8D44\u6E90\u8FDB\u884C\u4E8C\u6B21\u8FC7\u6EE4\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"\u76EE\u524D\u652F\u6301\u7684\u8D44\u6E90\u7C7B\u578B\u5982\u4E0B\uFF1A"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"async-chunks"}),": \u9884\u52A0\u8F7D\u6240\u6709\u5F02\u6B65\u8D44\u6E90(\u5F53\u524D\u9875\u9762)\uFF0C\u5305\u542B\u5F02\u6B65 js \u53CA\u5176\u5173\u8054\u7684 css\u3001image\u3001font \u7B49\u8D44\u6E90\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"initial"}),": \u9884\u52A0\u8F7D\u6240\u6709\u975E\u5F02\u6B65\u8D44\u6E90(\u5F53\u524D\u9875\u9762)\u3002\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u5982\u679C\u5F53\u524D\u811A\u672C\u5DF2\u7ECF\u88AB\u6DFB\u52A0\u5230 html \u6A21\u7248\u4E2D\uFF0C\u5219\u4E0D\u4F1A\u8FDB\u884C\u989D\u5916\u7684\u9884\u52A0\u8F7D\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"all-chunks"}),": \u9884\u52A0\u8F7D\u6240\u6709\u8D44\u6E90(\u5F53\u524D\u9875\u9762)\uFF0C\u5305\u542B\u6240\u6709\u5F02\u6B65\u548C\u975E\u5F02\u6B65\u8D44\u6E90\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"all-assets"}),": \u9884\u52A0\u8F7D\u6240\u6709\u8D44\u6E90\uFF0CMPA \u573A\u666F\u4E0B\u4F1A\u5305\u542B\u5176\u4ED6\u9875\u9762\u7684\u8D44\u6E90\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(n.h4,{id:"\u793A\u4F8B",children:["\u793A\u4F8B",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u793A\u4F8B",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"\u5F53\u4F60\u5E0C\u671B\u5BF9\u5F53\u524D\u9875\u9762\u4E2D\u6240\u6709 png \u683C\u5F0F\u7684\u56FE\u7247\u8D44\u6E90\u8FDB\u884C\u9884\u52A0\u8F7D\u65F6\uFF0C\u53EF\u4EE5\u914D\u7F6E\u5982\u4E0B\uFF1A"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"export default {\n  performance: {\n    preload: {\n      type: 'all-chunks',\n      include: [/.*\\.png$/]\n    },\n  },\n};\n"})})]})}function c(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,l.useMDXComponents)(),e.components);return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}var a=c;c.__RSPRESS_PAGE_META={},c.__RSPRESS_PAGE_META["..%2F..%2Fbuilder-doc%2Fdocs%2Fzh%2Fconfig%2Fperformance%2Fpreload.md"]={toc:[{text:"Boolean \u7C7B\u578B",id:"boolean-\u7C7B\u578B",depth:3},{text:"Object \u7C7B\u578B",id:"object-\u7C7B\u578B",depth:3},{text:"preload.type",id:"preloadtype",depth:4},{text:"\u793A\u4F8B",id:"\u793A\u4F8B",depth:4}],title:"",frontmatter:{}}},74665:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return i}});var s=r("9880"),l=r("23169"),d=r("37287");function c(e){let n=Object.assign({h1:"h1",a:"a"},(0,l.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h1,{id:"performancepreload",children:["performance.preload",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#performancepreload",children:"#"})]}),"\n","\n",(0,s.jsx)(d.default,{})]})}function a(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,l.useMDXComponents)(),e.components);return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}var i=a;a.__RSPRESS_PAGE_META={},a.__RSPRESS_PAGE_META["zh%2Fconfigure%2Fapp%2Fperformance%2Fpreload.mdx"]={toc:[],title:"performance.preload",frontmatter:{sidebar_label:"preload"}}}}]);