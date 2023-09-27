(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["10744"],{66668:function(e,n,s){"use strict";s.r(n),s.d(n,{default:function(){return h}});var r,l=s("10310"),i=s("81904"),c=s("98638"),d=s("21968"),t=s("84948");function a(e){let n=Object.assign({h1:"h1",a:"a",p:"p",code:"code",pre:"pre",h2:"h2",h3:"h3",ul:"ul",li:"li",div:"div"},(0,d.useMDXComponents)(),e.components);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(n.h1,{id:"handleeffect",children:["handleEffect",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#handleeffect",children:"#"})]}),"\n","\n",(0,c.jsx)(t.default,{}),"\n",(0,c.jsx)(n.p,{children:"\u4E00\u4E2A\u5F02\u6B65\u51FD\u6570\u7C7B\u578B\u7684 Effect\uFF0C\u901A\u5E38\u6709\u4E09\u79CD\u9700\u8981\u5904\u7406\u7684\u72B6\u6001: \u8BF7\u6C42\u4E2D\u3001\u8BF7\u6C42\u6210\u529F\u3001\u8BF7\u6C42\u5904\u7406\u5931\u8D25\u3002\u8FD9\u4E9B\u72B6\u6001\u5904\u7406\u7684\u65B9\u5F0F\uFF0C\u5C31\u662F\u7F16\u5199\u5BF9\u5E94\u7684 Action \u51FD\u6570(pending\u3001fulfilled\u3001rejected)\u3002"}),"\n",(0,c.jsxs)(n.p,{children:["\u501F\u52A9 ",(0,c.jsx)(n.code,{children:"handleEffect"})," API\uFF0C\u6211\u4EEC\u53EF\u4EE5\u751F\u6210\u9ED8\u8BA4\u7684 Action \u51FD\u6570\u6765\u5904\u7406\u5F02\u6B65\u8BF7\u6C42\u5404\u4E2A\u9636\u6BB5\u7684\u4E0D\u540C\u7ED3\u679C\u3002",(0,c.jsx)(n.code,{children:"handleEffect"})," \u751F\u6210\u7684 Action \u8FD4\u56DE\u7684 State \u7684\u7ED3\u6784\u5982\u4E0B\uFF1A"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-ts",children:"interface State {\n  result: any; // \u5B58\u50A8 fulfilled \u72B6\u6001\u7684\u8FD4\u56DE\u7ED3\u679C\n  pending: boolean; // \u8BF7\u6C42\u662F\u5426\u7ED3\u675F\n  error: string; // \u8BF7\u6C42\u5931\u8D25\u7684\u7ED3\u679C\n}\n"})}),"\n",(0,c.jsxs)(n.h2,{id:"\u51FD\u6570\u7B7E\u540D",children:["\u51FD\u6570\u7B7E\u540D",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u51FD\u6570\u7B7E\u540D",children:"#"})]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-ts",children:"interface EffectActions {\n  pending: Action;\n  fulfilled: Action;\n  rejected: Action;\n}\n\ninterface Config {\n  ns?: string;\n  result?: string | false;\n  error?: string | false;\n  pending?: string | false;\n  combineMode?: 'merge' | 'replace';\n  omitResultNamespace?: boolean;\n}\n\nfunction handleEffect(config: Config): EffectActions;\n"})}),"\n",(0,c.jsxs)(n.h3,{id:"\u53C2\u6570",children:["\u53C2\u6570",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u53C2\u6570",children:"#"})]}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["ns\uFF1A\u9ED8\u8BA4\u8FD4\u56DE\u7684 State \u7ED3\u6784\u6241\u5E73\u5730\u6302\u8F7D\u5230 Model \u7684 State \u4E0A\uFF0C\u901A\u8FC7\u8BBE\u7F6E\u8BE5\u53C2\u6570\u53EF\u4EE5\u5C06\u8FD4\u56DE\u7684 State \u6302\u8F7D\u5230 ",(0,c.jsx)(n.code,{children:"ns"})," \u503C\u547D\u540D\u7684\u5B57\u6BB5\u4E0B\u3002\u4F8B\u5982\uFF0C",(0,c.jsx)(n.code,{children:"ns"})," \u8BBE\u7F6E\u4E3A ",(0,c.jsx)(n.code,{children:"data"}),"\uFF0C\u8FD4\u56DE\u7684 State \u7ED3\u6784\u4E3A\uFF1A"]}),"\n"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-ts",children:"interface State {\n  data: {\n    pending: boolean;\n    result: any;\n    error: string;\n  };\n}\n"})}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["result\uFF1A\u9ED8\u8BA4\u503C\u4E3A ",(0,c.jsx)(n.code,{children:'"result"'}),"\u3002\u8BE5\u53C2\u6570\u5BF9\u5E94\u5B58\u50A8\u5F02\u6B65\u8BF7\u6C42 fulfilled \u72B6\u6001\u7ED3\u679C\u7684\u5B57\u6BB5\u540D\u79F0\u3002\u4F8B\u5982\uFF0C\u8BBE\u7F6E ",(0,c.jsx)(n.code,{children:"result"})," \u4E3A ",(0,c.jsx)(n.code,{children:'"items"'}),"\uFF0C\u8FD4\u56DE\u7684 State \u7ED3\u6784\u4E3A\uFF1A"]}),"\n"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-ts",children:"interface State {\n  items: any; // \u9ED8\u8BA4\u7684 result -> items\n  pending: boolean;\n  error: string;\n}\n"})}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"result"})," \u4E3A ",(0,c.jsx)(n.code,{children:"false"}),"\uFF0C\u8FD4\u56DE\u7684 State \u7ED3\u6784\u4E2D\u4E0D\u5B58\u5728 ",(0,c.jsx)(n.code,{children:"result"}),"\uFF1A"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-ts",children:"interface State {\n  pending: boolean;\n  error: string;\n}\n"})}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsxs)(n.p,{children:["pending\uFF1A\u9ED8\u8BA4\u503C\u4E3A ",(0,c.jsx)(n.code,{children:'"pending"'}),"\u3002\u6539\u53D8\u8FD4\u56DE State \u4E2D\u7684 ",(0,c.jsx)(n.code,{children:"pending"})," \u5B57\u6BB5\u540D\u3002\u7528\u6CD5\u540C\u4E0A\u3002"]}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsxs)(n.p,{children:["error\uFF1A \u9ED8\u8BA4\u503C\u4E3A ",(0,c.jsx)(n.code,{children:'"error"'}),"\u3002\u6539\u53D8\u8FD4\u56DE State \u4E2D\u7684 ",(0,c.jsx)(n.code,{children:"error"})," \u5B57\u6BB5\u540D\u3002\u7528\u6CD5\u540C\u4E0A\u3002"]}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsxs)(n.p,{children:["combineMode\uFF1A\u9ED8\u8BA4\u503C\u4E3A ",(0,c.jsx)(n.code,{children:'"merge"'}),"\u3002\u83B7\u53D6 fulfilled \u72B6\u6001\u7684\u8FD4\u56DE\u6570\u636E\u540E\uFF0C\u5BF9 ",(0,c.jsx)(n.code,{children:"result"})," \u7684\u5904\u7406\u65B9\u5F0F\uFF1Amerge\uFF08\u5408\u5E76\uFF09\u548C replace\uFF08\u66FF\u6362\uFF09\u3002\u8FD9\u91CC\u80FD\u81EA\u52A8\u5904\u7406\u7684\u6570\u636E\u7C7B\u578B\u4E5F\u4EC5\u9650\u4E3A\u7B80\u5355\u7684\u5BF9\u8C61\u6216\u8005\u6570\u7EC4\u7C7B\u578B\u3002"]}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["merge\uFF1A\u524D\u4E00\u6B21\u7684\u6570\u636E\u4E0E\u5F53\u524D\u7684\u6570\u636E\u5408\u5E76\u3002\u6570\u636E\u4E3A\u6570\u7EC4\u7C7B\u578B\uFF0C\u5185\u90E8\u64CD\u4F5C\u7C7B\u4F3C\u4E8E ",(0,c.jsx)(n.code,{children:"[].concat(lastData, currentData)"}),"\uFF1B\u6570\u636E\u4E3A\u5BF9\u8C61\u7C7B\u578B\uFF0C\u5185\u90E8\u64CD\u4F5C\u7C7B\u4F3C\u4E8E ",(0,c.jsx)(n.code,{children:"{...lastData, ...curData}"}),"\u3002"]}),"\n",(0,c.jsx)(n.li,{children:"replace\uFF1A\u5F53\u524D\u7684\u6570\u636E\u76F4\u63A5\u66FF\u6362\u4E4B\u524D\u7684\u6570\u636E\u3002"}),"\n"]}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsxs)(n.p,{children:["omitResultNamespace\uFF1A\u9ED8\u8BA4\u503C\u4E3A ",(0,c.jsx)(n.code,{children:'"false"'}),"\u3002\u5F53\u5F02\u6B65\u8BF7\u6C42\u7684\u7ED3\u679C\u4E3A\u5BF9\u8C61\u7C7B\u578B\uFF0C\u5E0C\u671B\u628A\u8BE5\u7ED3\u679C\u76F4\u63A5\u6302\u8F7D\u5230 Model \u7684 State \u4E0A\uFF0C\u800C\u4E0D\u662F\u6302\u8F7D\u5230 ",(0,c.jsx)(n.code,{children:'"result"'})," \u4E0A\uFF0C\u53EF\u4EE5\u8BBE\u7F6E\u4E3A true\u3002\u4F8B\u5982\uFF1A"]}),"\n"]}),"\n"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-ts",children:"// \u4E00\u4E2A\u5F02\u6B65\u8BF7\u6C42\u5F97\u5230\u7684\u6570\u636E\u4E3A\u4E00\u4E2A\u5BF9\u8C61\uFF1A{user: 'xx', email: 'xx'}\uFF0C\n// \u914D\u7F6E handleEffect({ omitResultNamespace: true })\n// \u5219\u5F97\u5230\u7684 State \u7ED3\u6784\u5982\u4E0B\uFF1A\n{\n  user: 'xx',\n  email: 'xx',\n  pending: false,\n  error: null,\n}\n"})}),"\n",(0,c.jsxs)(n.h3,{id:"\u8FD4\u56DE\u503C",children:["\u8FD4\u56DE\u503C",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u8FD4\u56DE\u503C",children:"#"})]}),"\n",(0,c.jsx)(n.p,{children:"\u5206\u522B\u5904\u7406 pending\u3001fulfilled\u3001rejected \u4E09\u79CD\u72B6\u6001\u7684 Action \u7EC4\u6210\u7684\u5BF9\u8C61\u3002"}),"\n",(0,c.jsxs)(n.div,{className:"rspress-directive info",children:[(0,c.jsx)(n.div,{className:"rspress-directive-title",children:"\u66F4\u591A\u53C2\u8003"}),(0,c.jsxs)(n.div,{className:"rspress-directive-content",children:[(0,c.jsx)(n.p,{children:(0,c.jsx)(n.a,{href:"/guides/topic-detail/model/manage-effects",children:"\u526F\u4F5C\u7528\u7BA1\u7406"})}),"\n"]})]})]})}(r=globalThis).__RSPRESS_PAGE_META||(r.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["zh%2Fapis%2Fapp%2Fruntime%2Fmodel%2Fhandle-effect.mdx"]={toc:[{text:"\u51FD\u6570\u7B7E\u540D",id:"\u51FD\u6570\u7B7E\u540D",depth:2},{text:"\u53C2\u6570",id:"\u53C2\u6570",depth:3},{text:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",depth:3}],title:"handleEffect",frontmatter:{sidebar_position:7,title:"handleEffect"}};var h=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,d.useMDXComponents)(),e.components);return n?(0,c.jsx)(n,(0,i._)((0,l._)({},e),{children:(0,c.jsx)(a,(0,l._)({},e))})):a(e)}}}]);