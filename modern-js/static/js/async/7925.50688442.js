(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["7925"],{73173:function(e,n,s){"use strict";s.r(n),s.d(n,{default:function(){return r}});var l=s("9880"),c=s("23169");function o(e){let n=Object.assign({ul:"ul",li:"li",strong:"strong",pre:"pre",code:"code",p:"p",h3:"h3",a:"a"},(0,c.useMDXComponents)(),e.components);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.strong,{children:"\u7C7B\u578B\uFF1A"})}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-ts",children:"type CssModuleLocalsConvention =\n  | 'asIs'\n  | 'camelCase'\n  | 'camelCaseOnly'\n  | 'dashes'\n  | 'dashesOnly';\n\ntype CssModules = {\n  auto?: boolean | RegExp | ((resourcePath: string) => boolean);\n  exportLocalsConvention?: CssModuleLocalsConvention;\n};\n"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.strong,{children:"\u9ED8\u8BA4\u503C\uFF1A"})}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-ts",children:"const defaultCssModules = {\n  exportLocalsConvention: 'camelCase',\n};\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u81EA\u5B9A\u4E49 CSS \u6A21\u5757\u914D\u7F6E\u3002"}),"\n",(0,l.jsxs)(n.h3,{id:"cssmodulesauto",children:["cssModules.auto",(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#cssmodulesauto",children:"#"})]}),"\n",(0,l.jsx)(n.p,{children:"auto \u914D\u7F6E\u9879\u5141\u8BB8\u57FA\u4E8E\u6587\u4EF6\u540D\u81EA\u52A8\u542F\u7528 CSS \u6A21\u5757\u3002"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"\u7C7B\u578B\uFF1A"})," ",(0,l.jsx)(n.code,{children:"boolean | RegExp | ((resourcePath: string) => boolean)"})]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"\u9ED8\u8BA4\u503C\uFF1A"})," ",(0,l.jsx)(n.code,{children:"undefined"})]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"\u7C7B\u578B\u8BF4\u660E\uFF1A"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"undefined"}),": \u6839\u636E ",(0,l.jsx)(n.a,{href:"https://modernjs.dev/builder/api/config-output.html#outputdisablecssmoduleextension",target:"_blank",rel:"noopener noreferrer",children:"output.disableCssModuleExtension"})," \u914D\u7F6E\u9879\u51B3\u5B9A\u4E3A\u54EA\u4E9B\u6837\u5F0F\u6587\u4EF6\u542F\u7528 CSS \u6A21\u5757\u3002"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"true"}),": \u4E3A\u6240\u6709\u5339\u914D ",(0,l.jsx)(n.code,{children:"/\\.module\\.\\w+$/i.test(filename)"})," \u6B63\u5219\u8868\u8FBE\u5F0F\u7684\u6587\u4EF6\u542F\u7528 CSS \u6A21\u5757\u3002"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"false"}),": \u7981\u7528 CSS \u6A21\u5757\u3002"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"RegExp"}),": \u4E3A\u6240\u6709\u5339\u914D ",(0,l.jsx)(n.code,{children:"/RegExp/i.test(filename)"})," \u6B63\u5219\u8868\u8FBE\u5F0F\u7684\u6587\u4EF6\u7981\u7528 CSS \u6A21\u5757\u3002"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"function"}),": \u4E3A\u6240\u6709\u901A\u8FC7\u57FA\u4E8E\u6587\u4EF6\u540D\u7684\u8FC7\u6EE4\u51FD\u6570\u6821\u9A8C\u7684\u6587\u4EF6\u542F\u7528 CSS \u6A21\u5757\u3002"]}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-ts",children:"export default {\n  output: {\n    cssModules: {\n      auto: resource => {\n        return resource.includes('.module.') || resource.includes('shared/');\n      },\n    },\n  },\n};\n"})}),"\n",(0,l.jsxs)(n.h3,{id:"cssmodulesexportlocalsconvention",children:["cssModules.exportLocalsConvention",(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#cssmodulesexportlocalsconvention",children:"#"})]}),"\n",(0,l.jsx)(n.p,{children:"\u5BFC\u51FA\u7684\u7C7B\u540D\u79F0\u7684\u6837\u5F0F\u3002"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"\u7C7B\u578B\uFF1A"})," ",(0,l.jsx)(n.code,{children:"'asIs' | 'camelCase' | 'camelCaseOnly' | 'dashes' | 'dashesOnly'"})]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"\u9ED8\u8BA4\u503C\uFF1A"})," ",(0,l.jsx)(n.code,{children:"'camelCase'"})]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"\u7C7B\u578B\u8BF4\u660E\uFF1A"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"asIs"})," \u7C7B\u540D\u5C06\u6309\u539F\u6837\u5BFC\u51FA\u3002"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"camelCase"})," \u7C7B\u540D\u5C06\u88AB\u9A7C\u5CF0\u5316\uFF0C\u539F\u59CB\u7C7B\u540D\u4ECD\u7136\u53EF\u7528\u3002"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"camelCaseOnly"})," \u7C7B\u540D\u5C06\u88AB\u9A7C\u5CF0\u5316\uFF0C\u539F\u59CB\u7C7B\u540D\u4E0D\u53EF\u7528\u3002"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"dashes"})," \u53EA\u6709\u7C7B\u540D\u4E2D\u7684\u7834\u6298\u53F7\u4F1A\u88AB\u9A7C\u5CF0\u5316\uFF0C\u539F\u59CB\u7C7B\u540D\u4ECD\u7136\u53EF\u7528\u3002"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"dashesOnly"})," \u53EA\u6709\u7C7B\u540D\u4E2D\u7684\u7834\u6298\u53F7\u4F1A\u88AB\u9A7C\u5CF0\u5316\uFF0C\u539F\u59CB\u7C7B\u540D\u4E0D\u53EF\u7528\u3002"]}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-ts",children:"export default {\n  output: {\n    cssModules: {\n      exportLocalsConvention: 'camelCaseOnly',\n    },\n  },\n};\n"})})]})}function d(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,c.useMDXComponents)(),e.components);return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(o,{...e})}):o(e)}var r=d;d.__RSPRESS_PAGE_META={},d.__RSPRESS_PAGE_META["..%2F..%2Fbuilder-doc%2Fdocs%2Fzh%2Fconfig%2Foutput%2FcssModules.md"]={toc:[{text:"cssModules.auto",id:"cssmodulesauto",depth:3},{text:"cssModules.exportLocalsConvention",id:"cssmodulesexportlocalsconvention",depth:3}],title:"",frontmatter:{}}},60466:function(e,n,s){"use strict";s.r(n),s.d(n,{default:function(){return i}});var l=s("9880"),c=s("23169"),o=s("73173");function d(e){let n=Object.assign({h1:"h1",a:"a"},(0,c.useMDXComponents)(),e.components);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(n.h1,{id:"outputcssmodules",children:["output.cssModules",(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#outputcssmodules",children:"#"})]}),"\n","\n",(0,l.jsx)(o.default,{})]})}function r(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,c.useMDXComponents)(),e.components);return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}var i=r;r.__RSPRESS_PAGE_META={},r.__RSPRESS_PAGE_META["zh%2Fconfigure%2Fapp%2Foutput%2Fcss-modules.mdx"]={toc:[],title:"output.cssModules",frontmatter:{sidebar_label:"cssModules"}}}}]);