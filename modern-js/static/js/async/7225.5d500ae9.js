/*! For license information please see 7225.5d500ae9.js.LICENSE.txt */
(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["7225"],{28180:function(e,r,n){"use strict";n.r(r),n.d(r,{default:function(){return t}});var s=n("9880"),i=n("23169");function l(e){let r=Object.assign({p:"p",a:"a",code:"code",ul:"ul",li:"li",strong:"strong",pre:"pre",div:"div",h3:"h3",h4:"h4"},(0,i.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(r.p,{children:["\u7528\u4E8E\u6309\u9700\u5F15\u5165\u7EC4\u4EF6\u5E93\u7684\u4EE3\u7801\u548C\u6837\u5F0F\uFF0C\u80FD\u529B\u7B49\u4EF7\u4E8E ",(0,s.jsx)(r.a,{href:"https://www.npmjs.com/package/babel-plugin-import",target:"_blank",rel:"noopener noreferrer",children:"babel-plugin-import"}),"\u3002"]}),"\n",(0,s.jsxs)(r.p,{children:["\u5B83\u4E0E ",(0,s.jsx)(r.a,{href:"https://www.npmjs.com/package/babel-plugin-import",target:"_blank",rel:"noopener noreferrer",children:"babel-plugin-import"})," \u7684\u533A\u522B\u5728\u4E8E\uFF0C",(0,s.jsx)(r.code,{children:"source.transformImport"})," \u4E0D\u4E0E Babel \u8026\u5408\u3002Builder \u4F1A\u81EA\u52A8\u8BC6\u522B\u5F53\u524D\u4F7F\u7528\u7684\u7F16\u8BD1\u5DE5\u5177\u662F Babel\u3001SWC \u8FD8\u662F Rspack\uFF0C\u5E76\u6DFB\u52A0\u76F8\u5E94\u7684\u6309\u9700\u5F15\u5165\u914D\u7F6E\u3002"]}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.strong,{children:"\u7C7B\u578B\uFF1A"})}),"\n"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-ts",children:"type Config =\n  | false\n  | Array<{\n      libraryName: string;\n      libraryDirectory?: string;\n      style?: string | boolean;\n      styleLibraryDirectory?: string;\n      camelToDashComponentName?: boolean;\n      transformToDefaultImport?: boolean;\n      customName?: ((member: string) => string | undefined) | string;\n      customStyleName?: ((member: string) => string | undefined) | string;\n    }>;\n"})}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.strong,{children:"\u9ED8\u8BA4\u503C\uFF1A"})}),"\n"]}),"\n",(0,s.jsxs)(r.p,{children:["\u5F53\u9879\u76EE\u4E2D\u5B89\u88C5\u4E86 ",(0,s.jsx)(r.a,{href:"https://www.npmjs.com/package/antd",target:"_blank",rel:"noopener noreferrer",children:"Ant Design \u7EC4\u4EF6\u5E93"})," <= 4.x \u7248\u672C\u65F6\uFF0CBuilder \u4F1A\u81EA\u52A8\u6DFB\u52A0\u4EE5\u4E0B\u9ED8\u8BA4\u914D\u7F6E\uFF1A"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-js",children:"const defaultAntdConfig = {\n  libraryName: 'antd',\n  libraryDirectory: isServer ? 'lib' : 'es',\n  style: true,\n};\n"})}),"\n",(0,s.jsxs)(r.p,{children:["\u5F53\u9879\u76EE\u4E2D\u5B89\u88C5\u4E86 ",(0,s.jsx)(r.a,{href:"https://www.npmjs.com/package/@arco-design/web-react",target:"_blank",rel:"noopener noreferrer",children:"Arco Design \u7EC4\u4EF6\u5E93"})," \u65F6\uFF0CBuilder \u4F1A\u81EA\u52A8\u6DFB\u52A0\u4EE5\u4E0B\u9ED8\u8BA4\u914D\u7F6E\uFF1A"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-js",children:"const defaultArcoConfig = [\n  {\n    libraryName: '@arco-design/web-react',\n    libraryDirectory: isServer ? 'lib' : 'es',\n    camelToDashComponentName: false,\n    style: true,\n  },\n  {\n    libraryName: '@arco-design/web-react/icon',\n    libraryDirectory: isServer ? 'react-icon-cjs' : 'react-icon',\n    camelToDashComponentName: false,\n  },\n];\n"})}),"\n",(0,s.jsxs)(r.div,{className:"rspress-directive tip",children:[(0,s.jsx)(r.div,{className:"rspress-directive-title",children:"TIP"}),(0,s.jsx)(r.div,{className:"rspress-directive-content",children:(0,s.jsxs)(r.p,{children:["\u5F53\u4F60\u6DFB\u52A0\u4E86 ",(0,s.jsx)(r.code,{children:"antd"})," \u6216 ",(0,s.jsx)(r.code,{children:"@arco-design/web-react"})," \u76F8\u5173\u7684\u914D\u7F6E\u65F6\uFF0C\u4F18\u5148\u7EA7\u4F1A\u9AD8\u4E8E\u4E0A\u8FF0\u9ED8\u8BA4\u914D\u7F6E\u3002\n"]})})]}),"\n",(0,s.jsxs)(r.h3,{id:"\u793A\u4F8B",children:["\u793A\u4F8B",(0,s.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#\u793A\u4F8B",children:"#"})]}),"\n",(0,s.jsx)(r.p,{children:"\u5F53\u4F7F\u7528\u4E0A\u8FF0 antd \u9ED8\u8BA4\u914D\u7F6E\uFF1A"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-js",children:"export default {\n  source: {\n    transformImport: [\n      {\n        libraryName: 'antd',\n        libraryDirectory: 'es',\n        style: true,\n      },\n    ],\n  },\n};\n"})}),"\n",(0,s.jsx)(r.p,{children:"\u6E90\u4EE3\u7801\u5982\u4E0B\uFF1A"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-js",children:"import { Button } from 'antd';\n"})}),"\n",(0,s.jsx)(r.p,{children:"\u4F1A\u88AB\u8F6C\u6362\u6210\uFF1A"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-js",children:"import Button from 'antd/es/button';\nimport 'antd/es/button/style';\n"})}),"\n",(0,s.jsxs)(r.h3,{id:"\u7981\u7528\u9ED8\u8BA4\u914D\u7F6E",children:["\u7981\u7528\u9ED8\u8BA4\u914D\u7F6E",(0,s.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#\u7981\u7528\u9ED8\u8BA4\u914D\u7F6E",children:"#"})]}),"\n",(0,s.jsxs)(r.p,{children:["\u4F60\u53EF\u4EE5\u624B\u52A8\u8BBE\u7F6E ",(0,s.jsx)(r.code,{children:"transformImport: false"})," \u6765\u5173\u6389 transformImport \u7684\u9ED8\u8BA4\u884C\u4E3A\u3002"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-js",children:"export default {\n  source: {\n    transformImport: false,\n  },\n};\n"})}),"\n",(0,s.jsxs)(r.p,{children:["\u6BD4\u5982\uFF0C\u5F53\u4F60\u4F7F\u7528\u4E86 ",(0,s.jsx)(r.code,{children:"externals"})," \u6765\u907F\u514D\u6253\u5305 antd \u65F6\uFF0C\u7531\u4E8E ",(0,s.jsx)(r.code,{children:"transformImport"})," \u9ED8\u8BA4\u4F1A\u8F6C\u6362 antd \u7684\u5F15\u7528\u8DEF\u5F84\uFF0C\u5BFC\u81F4\u5339\u914D\u7684\u8DEF\u5F84\u53D1\u751F\u4E86\u53D8\u5316\uFF0C\u56E0\u6B64 externals \u65E0\u6CD5\u6B63\u786E\u751F\u6548\uFF0C\u6B64\u65F6\u4F60\u53EF\u4EE5\u8BBE\u7F6E\u5173\u95ED ",(0,s.jsx)(r.code,{children:"transformImport"})," \u6765\u907F\u514D\u8BE5\u95EE\u9898\u3002"]}),"\n",(0,s.jsxs)(r.h3,{id:"\u914D\u7F6E",children:["\u914D\u7F6E",(0,s.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#\u914D\u7F6E",children:"#"})]}),"\n",(0,s.jsxs)(r.h4,{id:"libraryname",children:["libraryName",(0,s.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#libraryname",children:"#"})]}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"\u7C7B\u578B\uFF1A"})," ",(0,s.jsx)(r.code,{children:"string"})]}),"\n"]}),"\n",(0,s.jsx)(r.p,{children:"\u7528\u4E8E\u6307\u5B9A\u9700\u8981\u6309\u9700\u52A0\u8F7D\u7684\u6A21\u5757\u540D\u79F0\u3002\u5F53 Builder \u904D\u5386\u4EE3\u7801\u65F6\uFF0C\u5982\u679C\u9047\u5230\u4E86\u5BF9\u5E94\u6A21\u5757\u7684 import \u8BED\u53E5\uFF0C\u5219\u4F1A\u5BF9\u5176\u8FDB\u884C\u8F6C\u6362\u3002"}),"\n",(0,s.jsxs)(r.h4,{id:"librarydirectory",children:["libraryDirectory",(0,s.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#librarydirectory",children:"#"})]}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"\u7C7B\u578B\uFF1A"})," ",(0,s.jsx)(r.code,{children:"string"})]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"\u9ED8\u8BA4\u503C\uFF1A"})," ",(0,s.jsx)(r.code,{children:"'lib'"})]}),"\n"]}),"\n",(0,s.jsxs)(r.p,{children:["\u7528\u4E8E\u62FC\u63A5\u8F6C\u6362\u540E\u7684\u8DEF\u5F84\uFF0C\u62FC\u63A5\u89C4\u5219\u4E3A ",(0,s.jsx)(r.code,{children:"${libraryName}/${libraryDirectory}/${member}"}),"\uFF0C\u5176\u4E2D member \u4E3A\u5F15\u5165\u6210\u5458\u3002"]}),"\n",(0,s.jsx)(r.p,{children:"\u793A\u4F8B\uFF1A"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-ts",children:"import { Button } from 'foo';\n"})}),"\n",(0,s.jsx)(r.p,{children:"\u8F6C\u6362\u7ED3\u679C:"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-ts",children:"import Button from 'foo/lib/button';\n"})}),"\n",(0,s.jsxs)(r.h4,{id:"style",children:["style",(0,s.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#style",children:"#"})]}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"\u7C7B\u578B\uFF1A"})," ",(0,s.jsx)(r.code,{children:"boolean"})]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"\u9ED8\u8BA4\u503C\uFF1A"})," ",(0,s.jsx)(r.code,{children:"undefined"})]}),"\n"]}),"\n",(0,s.jsxs)(r.p,{children:["\u786E\u5B9A\u662F\u5426\u9700\u8981\u5F15\u5165\u76F8\u5173\u6837\u5F0F\uFF0C\u82E5\u4E3A ",(0,s.jsx)(r.code,{children:"true"}),"\uFF0C\u5219\u4F1A\u5F15\u5165\u8DEF\u5F84 ",(0,s.jsx)(r.code,{children:"${libraryName}/${libraryDirectory}/${member}/style"}),"\u3002\n\u82E5\u4E3A ",(0,s.jsx)(r.code,{children:"false"})," \u6216 ",(0,s.jsx)(r.code,{children:"undefined"})," \u5219\u4E0D\u4F1A\u5F15\u5165\u6837\u5F0F\u3002"]}),"\n",(0,s.jsxs)(r.p,{children:["\u5F53\u914D\u7F6E\u4E3A ",(0,s.jsx)(r.code,{children:"true"})," \u65F6\uFF1A"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-ts",children:"import { Button } from 'foo';\n"})}),"\n",(0,s.jsx)(r.p,{children:"\u8F6C\u6362\u7ED3\u679C:"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-ts",children:"import Button from 'foo/lib/button';\nimport 'foo/lib/button/style';\n"})}),"\n",(0,s.jsxs)(r.h4,{id:"stylelibrarydirectory",children:["styleLibraryDirectory",(0,s.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#stylelibrarydirectory",children:"#"})]}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"\u7C7B\u578B\uFF1A"})," ",(0,s.jsx)(r.code,{children:"string"})]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"\u9ED8\u8BA4\u503C\uFF1A"})," ",(0,s.jsx)(r.code,{children:"undefined"})]}),"\n"]}),"\n",(0,s.jsxs)(r.p,{children:["\u8BE5\u914D\u7F6E\u7528\u4E8E\u62FC\u63A5\u5F15\u5165\u6837\u5F0F\u65F6\u7684\u5F15\u5165\u8DEF\u5F84\uFF0C\u82E5\u8BE5\u914D\u7F6E\u88AB\u6307\u5B9A\uFF0C\u5219 ",(0,s.jsx)(r.code,{children:"style"})," \u914D\u7F6E\u9879\u4F1A\u88AB\u5FFD\u7565\u3002\u62FC\u63A5\u5F15\u5165\u8DEF\u5F84\u4E3A ",(0,s.jsx)(r.code,{children:"${libraryName}/${styleLibraryDirectory}/${member}"}),"\u3002"]}),"\n",(0,s.jsxs)(r.p,{children:["\u5F53\u914D\u7F6E\u4E3A ",(0,s.jsx)(r.code,{children:"styles"})," \u65F6\uFF1A"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-ts",children:"import { Button } from 'foo';\n"})}),"\n",(0,s.jsx)(r.p,{children:"\u8F6C\u6362\u7ED3\u679C:"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-ts",children:"import Button from 'foo/lib/button';\nimport 'foo/styles/button';\n"})}),"\n",(0,s.jsxs)(r.h4,{id:"cameltodashcomponentname",children:["camelToDashComponentName",(0,s.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#cameltodashcomponentname",children:"#"})]}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"\u7C7B\u578B\uFF1A"})," ",(0,s.jsx)(r.code,{children:"boolean"})]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"\u9ED8\u8BA4\u503C\uFF1A"})," ",(0,s.jsx)(r.code,{children:"true"})]}),"\n"]}),"\n",(0,s.jsx)(r.p,{children:"\u662F\u5426\u9700\u8981\u5C06 camelCase \u7684\u5F15\u5165\u8F6C\u6362\u6210 kebab-case\u3002"}),"\n",(0,s.jsx)(r.p,{children:"\u793A\u4F8B\uFF1A"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-ts",children:"import { ButtonGroup } from 'foo';\n"})}),"\n",(0,s.jsx)(r.p,{children:"\u8F6C\u6362\u7ED3\u679C\uFF1A"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-ts",children:"// \u8BBE\u7F6E\u6210 true\uFF1A\nimport ButtonGroup from 'foo/button-group';\n// \u8BBE\u7F6E\u6210 false\uFF1A\nimport ButtonGroup from 'foo/ButtonGroup';\n"})}),"\n",(0,s.jsxs)(r.h4,{id:"transformtodefaultimport",children:["transformToDefaultImport",(0,s.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#transformtodefaultimport",children:"#"})]}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"\u7C7B\u578B\uFF1A"})," ",(0,s.jsx)(r.code,{children:"boolean"})]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"\u9ED8\u8BA4\u503C\uFF1A"})," ",(0,s.jsx)(r.code,{children:"true"})]}),"\n"]}),"\n",(0,s.jsx)(r.p,{children:"\u662F\u5426\u5C06\u5BFC\u5165\u8BED\u53E5\u8F6C\u6362\u6210\u9ED8\u8BA4\u5BFC\u5165\u3002"}),"\n",(0,s.jsx)(r.p,{children:"\u793A\u4F8B\uFF1A"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-ts",children:"import { Button } from 'foo';\n"})}),"\n",(0,s.jsx)(r.p,{children:"\u8F6C\u6362\u7ED3\u679C\uFF1A"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-ts",children:"// \u8BBE\u7F6E\u6210 true\uFF1A\nimport Button from 'foo/button';\n// \u8BBE\u7F6E\u6210 false\uFF1A\nimport { Button } from 'foo/button';\n"})}),"\n",(0,s.jsxs)(r.h4,{id:"customname",children:["customName",(0,s.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#customname",children:"#"})]}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"\u7C7B\u578B\uFF1A"})," ",(0,s.jsx)(r.code,{children:"((member: string) => string | undefined) | string"})]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"\u9ED8\u8BA4\u503C\uFF1A"})," ",(0,s.jsx)(r.code,{children:"undefined"})]}),"\n"]}),"\n",(0,s.jsxs)(r.div,{className:"rspress-directive tip",children:[(0,s.jsx)(r.div,{className:"rspress-directive-title",children:"\u6CE8\u610F"}),(0,s.jsxs)(r.div,{className:"rspress-directive-content",children:["\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"\u51FD\u6570\u7C7B\u578B\u7684\u914D\u7F6E\u53EA\u80FD\u5728 Webpack \u6784\u5EFA\u4E2D\u4F7F\u7528\u3002"}),"\n",(0,s.jsx)(r.li,{children:"\u6A21\u7248\u7C7B\u578B\u7684\u914D\u7F6E\u53EA\u80FD\u5728 Rspack \u6784\u5EFA\u6216\u8005\u4F7F\u7528\u4E86 SWC \u7684 Webpack \u6784\u5EFA\u4E2D\u4F7F\u7528\u3002"}),"\n"]}),"\n"]})]}),"\n",(0,s.jsxs)(r.p,{children:["\u81EA\u5B9A\u4E49\u8F6C\u6362\u540E\u7684\u5BFC\u5165\u8DEF\u5F84\uFF0C\u8F93\u5165\u662F\u5F15\u5165\u7684\u6210\u5458\uFF0C\u4F8B\u5982\u914D\u7F6E\u6210 ",(0,s.jsx)(r.code,{children:" (member) => `my-lib/${member}` "}),"\uFF0C\u4F1A\u5C06 ",(0,s.jsx)(r.code,{children:"import { foo } from 'bar'"})," \u8F6C\u6362\u6210 ",(0,s.jsx)(r.code,{children:"import foo from 'my-lib/foo'"}),"\u3002"]}),"\n",(0,s.jsxs)(r.p,{children:["\u5728\u4F7F\u7528 Rspack \u6784\u5EFA\u65F6\uFF0C\u4E0D\u80FD\u4F7F\u7528\u51FD\u6570\u914D\u7F6E\uFF0C\u4F46\u53EF\u4EE5\u4F7F\u7528 ",(0,s.jsx)(r.a,{href:"https://handlebarsjs.com/",target:"_blank",rel:"noopener noreferrer",children:"handlebars"})," \u6A21\u7248\u5B57\u7B26\u4E32\uFF0C\u5BF9\u4E8E\u4E0A\u9762\u7684\u51FD\u6570\u914D\u7F6E\uFF0C\u5728\u4F7F\u7528\u6A21\u7248\u5B57\u7B26\u4E32\u65F6\u53EF\u4EE5\u7528\u4EE5\u4E0B\u6A21\u7248\u4EE3\u66FF ",(0,s.jsx)(r.code,{children:"my-lib/{{ member }}"}),"\uFF0C\u4E5F\u53EF\u4EE5\u4F7F\u7528\u4E00\u4E9B\u5185\u7F6E\u5E2E\u52A9\u65B9\u6CD5\uFF0C\u4F8B\u5982 ",(0,s.jsx)(r.code,{children:"my-lib/{{ kebabCase member }}"})," \u6765\u8F6C\u6362\u6210 kebab-case \u683C\u5F0F\uFF0C\u9664\u4E86 kebabCase \u4EE5\u5916\u8FD8\u6709 camelCase\uFF0CsnakeCase\uFF0CupperCase\uFF0ClowerCase \u53EF\u4EE5\u4F7F\u7528\u3002"]}),"\n",(0,s.jsxs)(r.h4,{id:"customstylename",children:["customStyleName",(0,s.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#customstylename",children:"#"})]}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"\u7C7B\u578B\uFF1A"})," ",(0,s.jsx)(r.code,{children:"((member: string) => string | undefined) | string"})]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"\u9ED8\u8BA4\u503C\uFF1A"})," ",(0,s.jsx)(r.code,{children:"undefined"})]}),"\n"]}),"\n",(0,s.jsxs)(r.div,{className:"rspress-directive tip",children:[(0,s.jsx)(r.div,{className:"rspress-directive-title",children:"\u6CE8\u610F"}),(0,s.jsxs)(r.div,{className:"rspress-directive-content",children:["\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"\u51FD\u6570\u7C7B\u578B\u7684\u914D\u7F6E\u53EA\u80FD\u5728 Webpack \u6784\u5EFA\u4E2D\u4F7F\u7528\u3002"}),"\n",(0,s.jsx)(r.li,{children:"\u6A21\u7248\u7C7B\u578B\u7684\u914D\u7F6E\u53EA\u80FD\u5728 Rspack \u6784\u5EFA\u6216\u8005\u4F7F\u7528\u4E86 SWC \u7684 Webpack \u6784\u5EFA\u4E2D\u4F7F\u7528\u3002"}),"\n"]}),"\n"]})]}),"\n",(0,s.jsxs)(r.p,{children:["\u81EA\u5B9A\u4E49\u8F6C\u6362\u540E\u7684\u6837\u5F0F\u5BFC\u5165\u8DEF\u5F84\uFF0C\u8F93\u5165\u662F\u5F15\u5165\u7684\u6210\u5458\uFF0C\u4F8B\u5982\u914D\u7F6E\u6210 ",(0,s.jsx)(r.code,{children:" (member) => `my-lib/${member}` "}),"\uFF0C\u4F1A\u5C06 ",(0,s.jsx)(r.code,{children:"import { foo } from 'bar'"})," \u8F6C\u6362\u6210 ",(0,s.jsx)(r.code,{children:"import foo from 'my-lib/foo'"}),"\u3002"]}),"\n",(0,s.jsxs)(r.p,{children:["\u5728\u4F7F\u7528 Rspack \u6784\u5EFA\u65F6\uFF0C\u4E0D\u80FD\u4F7F\u7528\u51FD\u6570\u914D\u7F6E\uFF0C\u4F46\u53EF\u4EE5\u4F7F\u7528 ",(0,s.jsx)(r.a,{href:"https://handlebarsjs.com/",target:"_blank",rel:"noopener noreferrer",children:"handlebars"})," \u6A21\u7248\u5B57\u7B26\u4E32\uFF0C\u5BF9\u4E8E\u4E0A\u9762\u7684\u51FD\u6570\u914D\u7F6E\uFF0C\u5728\u4F7F\u7528\u6A21\u7248\u5B57\u7B26\u4E32\u65F6\u53EF\u4EE5\u7528\u4EE5\u4E0B\u6A21\u7248\u4EE3\u66FF ",(0,s.jsx)(r.code,{children:"my-lib/{{ member }}"}),"\uFF0C\u4E5F\u53EF\u4EE5\u4F7F\u7528\u4E00\u4E9B\u5185\u7F6E\u5E2E\u52A9\u65B9\u6CD5\uFF0C\u4F8B\u5982 ",(0,s.jsx)(r.code,{children:"my-lib/{{ kebabCase member }}"})," \u6765\u8F6C\u6362\u6210 kebab-case \u683C\u5F0F\uFF0C\u9664\u4E86 kebabCase \u4EE5\u5916\u8FD8\u6709 camelCase\uFF0CsnakeCase\uFF0CupperCase\uFF0ClowerCase \u53EF\u4EE5\u4F7F\u7528\u3002"]})]})}function c(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:r}=Object.assign({},(0,i.useMDXComponents)(),e.components);return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}var t=c;c.__RSPRESS_PAGE_META={},c.__RSPRESS_PAGE_META["..%2F..%2Fbuilder-doc%2Fdocs%2Fzh%2Fconfig%2Fsource%2FtransformImport.md"]={toc:[{text:"\u793A\u4F8B",id:"\u793A\u4F8B",depth:3},{text:"\u7981\u7528\u9ED8\u8BA4\u914D\u7F6E",id:"\u7981\u7528\u9ED8\u8BA4\u914D\u7F6E",depth:3},{text:"\u914D\u7F6E",id:"\u914D\u7F6E",depth:3},{text:"libraryName",id:"libraryname",depth:4},{text:"libraryDirectory",id:"librarydirectory",depth:4},{text:"style",id:"style",depth:4},{text:"styleLibraryDirectory",id:"stylelibrarydirectory",depth:4},{text:"camelToDashComponentName",id:"cameltodashcomponentname",depth:4},{text:"transformToDefaultImport",id:"transformtodefaultimport",depth:4},{text:"customName",id:"customname",depth:4},{text:"customStyleName",id:"customstylename",depth:4}],title:"",frontmatter:{}}},9155:function(e,r,n){"use strict";n.r(r),n.d(r,{default:function(){return a}});var s=n("9880"),i=n("23169"),l=n("28180");function c(e){let r=Object.assign({h1:"h1",a:"a"},(0,i.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(r.h1,{id:"sourcetransformimport",children:["source.transformImport",(0,s.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#sourcetransformimport",children:"#"})]}),"\n","\n",(0,s.jsx)(l.default,{})]})}function t(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:r}=Object.assign({},(0,i.useMDXComponents)(),e.components);return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}var a=t;t.__RSPRESS_PAGE_META={},t.__RSPRESS_PAGE_META["zh%2Fconfigure%2Fapp%2Fsource%2Ftransform-import.mdx"]={toc:[],title:"source.transformImport",frontmatter:{sidebar_label:"transformImport"}}}}]);