/*! For license information please see 93337.23080d13.js.LICENSE.txt */
(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["93337"],{37367:function(e,d,n){"use strict";n.r(d);var o=n("39980"),s=n("96954");function l(e){let d=Object.assign({h1:"h1",a:"a",p:"p",code:"code",pre:"pre",div:"div",ul:"ul",li:"li"},(0,s.useMDXComponents)(),e.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(d.h1,{id:"\u521B\u5EFA-model",children:["\u521B\u5EFA Model",(0,o.jsx)(d.a,{className:"header-anchor","aria-hidden":"true",href:"#\u521B\u5EFA-model",children:"#"})]}),"\n",(0,o.jsx)(d.p,{children:"\u4E0A\u4E00\u8282\u7684\u8BA1\u6570\u5668\u5E94\u7528\u4E2D\uFF0C\u6211\u4EEC\u7B80\u5355\u6F14\u793A\u4E86\u5982\u4F55\u521B\u5EFA\u4E00\u4E2A Model\u3002\u672C\u8282\u6211\u4EEC\u5C06\u8BE6\u7EC6\u4ECB\u7ECD Model \u7684\u521B\u5EFA\u65B9\u6CD5\u3002"}),"\n",(0,o.jsxs)(d.p,{children:["\u901A\u8FC7 ",(0,o.jsx)(d.code,{children:"model"})," API \u521B\u5EFA Model\uFF0C\u4F8B\u5982\uFF0C",(0,o.jsx)(d.code,{children:"model('foo')"})," \u8868\u793A\u8981\u521B\u5EFA\u4E00\u4E2A\u540D\u4E3A ",(0,o.jsx)(d.code,{children:"foo"})," \u7684 Model\uFF0C\u901A\u8FC7\u8C03\u7528 ",(0,o.jsx)(d.code,{children:"model('foo')"})," \u8FD4\u56DE\u7684 ",(0,o.jsx)(d.code,{children:"define"})," \u51FD\u6570\uFF0C\u5B9A\u4E49 Model \u5305\u542B\u7684 State\u3001Actions \u7B49\uFF1A"]}),"\n",(0,o.jsx)(d.pre,{children:(0,o.jsx)(d.code,{className:"language-js",children:"import { model, useModel } from '@modern-js/runtime/model';\n\nconst fooModel = model('foo').define({\n  state: {\n    value: 'foo',\n  },\n  actions: {\n    setValue: (state, payload){\n      state.value = payload\n    }\n  }\n});\n"})}),"\n",(0,o.jsxs)(d.div,{className:"rspress-directive info",children:[(0,o.jsx)(d.div,{className:"rspress-directive-title",children:"INFO"}),(0,o.jsxs)(d.div,{className:"rspress-directive-content",children:["\n",(0,o.jsxs)(d.ul,{children:["\n",(0,o.jsx)(d.li,{children:"Model \u4E2D\u7684 Action \u4E2D\u4E0D\u80FD\u5305\u542B\u6709\u526F\u4F5C\u7528\u7684\u903B\u8F91\uFF0C\u5982\u8BF7\u6C42 HTTP \u63A5\u53E3\uFF0C\u8BBF\u95EE localStorage \u7B49\u3002"}),"\n",(0,o.jsxs)(d.li,{children:[(0,o.jsx)(d.code,{children:"setValue"})," \u5185\u90E8\u76F4\u63A5\u4FEE\u6539\u4E86\u5165\u53C2 State\uFF0C\u770B\u8D77\u6765\u662F\u8FDD\u53CD\u4E86\u7EAF\u51FD\u6570\u7684\u5B9A\u4E49\uFF0C\u5B9E\u9645\u4E0A Reduck \u5185\u90E8\u4F7F\u7528 ",(0,o.jsx)(d.a,{href:"https://github.com/immerjs/immer",target:"_blank",rel:"noopener noreferrer",children:"immer"})," \u6765\u4FEE\u6539\u4E0D\u53EF\u53D8\u5BF9\u8C61\uFF0C\u4FDD\u8BC1\u4E86\u8FD9\u79CD\u5199\u6CD5\u4E0D\u4F1A\u5F71\u54CD\u5BF9\u8C61\u7684\u4E0D\u53EF\u53D8\u6027\uFF0C\u6240\u4EE5 ",(0,o.jsx)(d.code,{children:"setValue"})," \u4ECD\u7136\u662F\u4E00\u4E2A\u7EAF\u51FD\u6570\u3002\u5F53\u7136\uFF0C\u4F60\u4E5F\u53EF\u4EE5\u76F4\u63A5\u5728 Action \u4E2D\u8FD4\u56DE\u4E00\u4E2A\u65B0\u5BF9\u8C61\uFF0C\u4E0D\u8FC7\u8FD9\u6837\u7684\u5199\u6CD5\u4F1A\u66F4\u52A0\u590D\u6742\u4E00\u4E9B\u3002"]}),"\n"]}),"\n"]})]}),"\n",(0,o.jsxs)(d.p,{children:[(0,o.jsx)(d.code,{children:"define"})," \u63A5\u6536\u7684\u53C2\u6570\uFF0C\u53EA\u662F\u5BF9 Model \u539F\u59CB\u7ED3\u6784\u7684\u63CF\u8FF0\uFF1A\u5185\u90E8\u5B9A\u4E49\u7684 State\u3001Actions \u7B49\u3002",(0,o.jsx)(d.code,{children:"define"})," \u8FD4\u56DE\u503C ",(0,o.jsx)(d.code,{children:"fooModel"})," \u624D\u662F\u771F\u6B63\u521B\u5EFA\u5F97\u5230\u7684 Model \u5BF9\u8C61\u3002\u4F8B\u5982\uFF0C\u867D\u7136 ",(0,o.jsx)(d.code,{children:"setValue"}),"\uFF0C\u6709 2 \u4E2A\u53C2\u6570\uFF0C\u4F46\u662F\u5F53\u771F\u6B63\u8C03\u7528 ",(0,o.jsx)(d.code,{children:"setValue"})," \u8FD9\u4E2A Action \u65F6\uFF0C\u6211\u4EEC\u53EA\u9700\u8981\u4F20\u5165 ",(0,o.jsx)(d.code,{children:"payload"})," \u4E00\u4E2A\u53C2\u6570\uFF0C\u56E0\u4E3A\u6211\u4EEC\u8C03\u7528\u7684\u662F ",(0,o.jsx)(d.code,{children:"fooModel"})," \u4E0A\u7684 Action \u65B9\u6CD5\uFF0C\u800C\u4E0D\u662F Model \u539F\u59CB\u7ED3\u6784\u4E0A\u63CF\u8FF0\u7684 Action \u65B9\u6CD5\u3002\u8BE6\u7EC6\u53C2\u8003",(0,o.jsx)(d.a,{href:"/guides/topic-detail/model/use-model",children:"\u4F7F\u7528 Model"}),"\u3002"]}),"\n",(0,o.jsxs)(d.p,{children:[(0,o.jsx)(d.code,{children:"define"})," \u9664\u4E86\u63A5\u6536\u5BF9\u8C61\u7C7B\u578B\u7684\u53C2\u6570\uFF0C\u8FD8\u53EF\u4EE5\u63A5\u6536\u51FD\u6570\u7C7B\u578B\u7684\u53C2\u6570\u3002\u4F8B\u5982\uFF1A"]}),"\n",(0,o.jsx)(d.pre,{children:(0,o.jsx)(d.code,{className:"language-js",children:"import { model, useModel } from '@modern-js/runtime/model';\n\nconst fooModel = model('foo').define((context, utils) => {\n  return {\n    state: {\n      value: 'foo',\n    },\n    actions: {\n      setValue: (state, payload){\n        state.value = payload\n      }\n    }\n  }\n});\n"})}),"\n",(0,o.jsxs)(d.p,{children:["\u901A\u8FC7\u51FD\u6570\u5B9A\u4E49 Model \u65F6\uFF0C\u51FD\u6570\u5185\u90E8\u4F1A\u81EA\u52A8\u4F20\u5165 ",(0,o.jsx)(d.code,{children:"context"}),"\u3001",(0,o.jsx)(d.code,{children:"utils"})," 2 \u4E2A\u53C2\u6570\uFF0C",(0,o.jsx)(d.code,{children:"context"})," \u662F Reduck \u7684\u4E0A\u4E0B\u6587\u5BF9\u8C61\uFF0C\u53EF\u4EE5\u83B7\u53D6\u5230 ",(0,o.jsx)(d.code,{children:"store"})," \u5BF9\u8C61\uFF0C",(0,o.jsx)(d.code,{children:"utils"})," \u63D0\u4F9B\u4E86\u4E00\u7EC4\u5DE5\u5177\u51FD\u6570\uFF0C\u65B9\u4FBF\u5B9E\u73B0 Model \u901A\u4FE1\u7B49\u590D\u6742\u529F\u80FD\u9700\u6C42\u3002"]}),"\n",(0,o.jsx)(d.p,{children:"Model \u652F\u6301\u590D\u5236\u3002\u4F8B\u5982\uFF1A"}),"\n",(0,o.jsx)(d.pre,{children:(0,o.jsx)(d.code,{className:"language-ts",children:"const barModel = fooModel('bar');\n"})}),"\n",(0,o.jsx)(d.p,{children:"barModel \u662F\u57FA\u4E8E fooModel \u521B\u5EFA\u51FA\u4E00\u4E2A\u7684\u65B0\u7684 Model \u5BF9\u8C61\uFF0C\u7C7B\u6BD4\u9762\u5411\u5BF9\u8C61\u7F16\u7A0B\u8BED\u8A00\u4E2D\u7684\u6982\u5FF5\uFF0CbarModel \u548C fooModel \u662F\u57FA\u4E8E\u540C\u4E00\u4E2A\u7C7B\uFF08Class\uFF09\u521B\u5EFA\u51FA\u7684 2 \u4E2A\u5B9E\u4F8B\u5BF9\u8C61\u3002\u5F53\u4E24\u4E2A\u6A21\u5757\u7684\u72B6\u6001\u7BA1\u7406\u903B\u8F91\u76F8\u540C\uFF0C\u4F8B\u5982\u4E00\u4E2A\u9875\u9762\u4E2D\u7684\u4E24\u4E2A tab \u6A21\u5757\uFF0C\u4F7F\u7528\u7684\u6570\u636E\u7684\u7ED3\u6784\u548C\u903B\u8F91\u76F8\u540C\uFF0C\u533A\u522B\u53EA\u662F\u4ECE\u4E0D\u540C\u7684\u63A5\u53E3\u83B7\u53D6\u6570\u636E\uFF0C\u90A3\u4E48\u53EF\u4EE5\u901A\u8FC7 Model \u590D\u5236\u7684\u65B9\u5F0F\uFF0C\u521B\u5EFA 2 \u4E2A\u4E0D\u540C\u7684 Model \u5BF9\u8C61\u3002"}),"\n",(0,o.jsxs)(d.div,{className:"rspress-directive info",children:[(0,o.jsx)(d.div,{className:"rspress-directive-title",children:"\u8865\u5145\u4FE1\u606F"}),(0,o.jsxs)(d.div,{className:"rspress-directive-content",children:[(0,o.jsxs)(d.p,{children:["\u672C\u8282\u6D89\u53CA\u7684 API \u7684\u8BE6\u7EC6\u5B9A\u4E49\uFF0C\u8BF7\u53C2\u8003",(0,o.jsx)(d.a,{href:"/apis/app/runtime/model/model_",children:"\u8FD9\u91CC"}),"\u3002"]}),"\n"]})]})]})}function i(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:d}=Object.assign({},(0,s.useMDXComponents)(),e.components);return d?(0,o.jsx)(d,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}d.default=i,i.__RSPRESS_PAGE_META={},i.__RSPRESS_PAGE_META["zh%2Fguides%2Ftopic-detail%2Fmodel%2Fdefine-model.mdx"]={toc:[],title:"\u521B\u5EFA Model",frontmatter:{sidebar_position:2,title:"\u521B\u5EFA Model"}}}}]);