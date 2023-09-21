(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["25387"],{68903:function(e,n,s){"use strict";s.r(n),s.d(n,{default:function(){return o}});var r,d=s("15169"),l=s("43932"),i=s("9880"),c=s("23169");function a(e){var n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",a:"a",h3:"h3",pre:"pre",div:"div",h4:"h4"},(0,c.useMDXComponents)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"\u7C7B\u578B\uFF1A"})," ",(0,i.jsx)(n.code,{children:"Object | Function"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"\u9ED8\u8BA4\u503C\uFF1A"})," ",(0,i.jsx)(n.code,{children:"undefined"})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["\u901A\u8FC7 ",(0,i.jsx)(n.code,{children:"tools.babel"})," \u53EF\u4EE5\u4FEE\u6539 ",(0,i.jsx)(n.a,{href:"https://github.com/babel/babel-loader",target:"_blank",rel:"noopener noreferrer",children:"babel-loader"})," \u7684\u914D\u7F6E\u9879\u3002"]}),"\n",(0,i.jsxs)(n.h3,{id:"\u4F7F\u7528\u573A\u666F",children:["\u4F7F\u7528\u573A\u666F",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u4F7F\u7528\u573A\u666F",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["\u8BF7\u7559\u610F ",(0,i.jsx)(n.code,{children:"tools.babel"})," \u5728\u4EE5\u4E0B\u4F7F\u7528\u573A\u666F\u4E2D\u7684\u5C40\u9650\u6027\uFF1A"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Rspack \u573A\u666F\uFF1A\u5728\u4F7F\u7528 Rspack \u4F5C\u4E3A\u6253\u5305\u5DE5\u5177\u65F6\uFF0C\u4F7F\u7528 ",(0,i.jsx)(n.code,{children:"tools.babel"})," \u914D\u7F6E\u9879\u5C06\u4F1A\u660E\u663E\u62D6\u6162 Rspack \u6784\u5EFA\u901F\u5EA6\u3002\u56E0\u4E3A Rspack \u9ED8\u8BA4\u4F7F\u7528\u7684\u662F SWC \u7F16\u8BD1\uFF0C\u914D\u7F6E Babel \u4F1A\u5BFC\u81F4\u4EE3\u7801\u9700\u8981\u88AB\u7F16\u8BD1\u4E24\u6B21\uFF0C\u4EA7\u751F\u4E86\u989D\u5916\u7684\u7F16\u8BD1\u5F00\u9500\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:["webpack + SWC \u573A\u666F\uFF1A\u5728\u4F7F\u7528 webpack \u4F5C\u4E3A\u6253\u5305\u5DE5\u5177\u65F6\uFF0C\u5982\u679C\u4F60\u4F7F\u7528\u4E86 Builder \u7684 SWC \u63D2\u4EF6\u8FDB\u884C\u4EE3\u7801\u7F16\u8BD1\uFF0C\u90A3\u4E48 ",(0,i.jsx)(n.code,{children:"tools.babel"})," \u9009\u9879\u5C06\u4E0D\u4F1A\u751F\u6548\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(n.h3,{id:"function-\u7C7B\u578B",children:["Function \u7C7B\u578B",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#function-\u7C7B\u578B",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["\u5F53 ",(0,i.jsx)(n.code,{children:"tools.babel"})," \u4E3A Function \u7C7B\u578B\u65F6\uFF0C\u9ED8\u8BA4 Babel \u914D\u7F6E\u4F1A\u4F5C\u4E3A\u7B2C\u4E00\u4E2A\u53C2\u6570\u4F20\u5165\uFF0C\u4F60\u53EF\u4EE5\u76F4\u63A5\u4FEE\u6539\u914D\u7F6E\u5BF9\u8C61\uFF0C\u4E5F\u53EF\u4EE5\u8FD4\u56DE\u4E00\u4E2A\u5BF9\u8C61\u4F5C\u4E3A\u6700\u7EC8\u7684 ",(0,i.jsx)(n.code,{children:"babel-loader"})," \u914D\u7F6E\u3002"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    babel(config) {\n      // \u6DFB\u52A0\u4E00\u4E2A\u63D2\u4EF6\uFF0C\u6BD4\u5982\u914D\u7F6E\u67D0\u4E2A\u7EC4\u4EF6\u5E93\u7684\u6309\u9700\u5F15\u5165\n      config.plugins.push([\n        'babel-plugin-import',\n        {\n          libraryName: 'xxx-components',\n          libraryDirectory: 'es',\n          style: true,\n        },\n      ]);\n    },\n  },\n};\n"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"tools.babel"})," \u51FD\u6570\u7684\u7B2C\u4E8C\u4E2A\u53C2\u6570\u63D0\u4F9B\u4E86\u4E00\u4E9B\u65B9\u4FBF\u7684\u5DE5\u5177\u51FD\u6570\uFF0C\u8BF7\u7EE7\u7EED\u9605\u8BFB\u4E0B\u65B9\u6587\u6863\u3002"]}),"\n",(0,i.jsxs)(n.div,{className:"rspress-directive tip",children:[(0,i.jsx)(n.div,{className:"rspress-directive-title",children:"TIP"}),(0,i.jsx)(n.div,{className:"rspress-directive-content",children:(0,i.jsxs)(n.p,{children:["\u4EE5\u4E0A\u793A\u4F8B\u4EC5\u4F5C\u4E3A\u53C2\u8003\uFF0C\u901A\u5E38\u6765\u8BF4\uFF0C\u4F60\u4E0D\u9700\u8981\u624B\u52A8\u914D\u7F6E ",(0,i.jsx)(n.code,{children:"babel-plugin-import"}),"\uFF0C\u56E0\u4E3A Builder \u5DF2\u7ECF\u63D0\u4F9B\u4E86\u66F4\u901A\u7528\u7684 ",(0,i.jsx)(n.code,{children:"source.transformImport"})," \u914D\u7F6E\u3002\n"]})})]}),"\n",(0,i.jsxs)(n.h3,{id:"object-\u7C7B\u578B",children:["Object \u7C7B\u578B",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#object-\u7C7B\u578B",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["\u5F53 ",(0,i.jsx)(n.code,{children:"tools.babel"})," \u7684\u503C\u4E3A ",(0,i.jsx)(n.code,{children:"Object"})," \u7C7B\u578B\u65F6\uFF0C\u4F1A\u4E0E\u9ED8\u8BA4\u914D\u7F6E\u901A\u8FC7 ",(0,i.jsx)(n.code,{children:"Object.assign"})," \u6D45\u5408\u5E76\u3002"]}),"\n",(0,i.jsxs)(n.div,{className:"rspress-directive caution",children:[(0,i.jsx)(n.div,{className:"rspress-directive-title",children:"CAUTION"}),(0,i.jsx)(n.div,{className:"rspress-directive-content",children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"Object.assign"})," \u662F\u6D45\u62F7\u8D1D\uFF0C\u4F1A\u5B8C\u5168\u8986\u76D6\u5185\u7F6E\u7684 ",(0,i.jsx)(n.code,{children:"presets"})," \u6216 ",(0,i.jsx)(n.code,{children:"plugins"})," \u6570\u7EC4\uFF0C\u5BFC\u81F4\u5185\u7F6E\u7684 presets \u6216 plugins \u5931\u6548\uFF0C\u8BF7\u5728\u660E\u786E\u5F71\u54CD\u9762\u7684\u60C5\u51B5\u4E0B\u518D\u4F7F\u7528\u8FD9\u79CD\u65B9\u5F0F\u3002\n"]})})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    babel: {\n      plugins: [\n        [\n          'babel-plugin-import',\n          {\n            libraryName: 'xxx-components',\n            libraryDirectory: 'es',\n            style: true,\n          },\n        ],\n      ],\n    },\n  },\n};\n"})}),"\n",(0,i.jsxs)(n.h3,{id:"\u5DE5\u5177\u51FD\u6570",children:["\u5DE5\u5177\u51FD\u6570",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u5DE5\u5177\u51FD\u6570",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"tools.babel"})," \u4E3A Function \u7C7B\u578B\u65F6\uFF0C\u7B2C\u4E8C\u4E2A\u53C2\u6570\u53EF\u7528\u7684\u5DE5\u5177\u51FD\u6570\u5982\u4E0B:"]}),"\n",(0,i.jsxs)(n.h4,{id:"addplugins",children:["addPlugins",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#addplugins",children:"#"})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"\u7C7B\u578B\uFF1A"})," ",(0,i.jsx)(n.code,{children:"(plugins: BabelPlugin[]) => void"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"\u6DFB\u52A0\u82E5\u5E72\u4E2A Babel \u63D2\u4EF6\u3002"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    babel(config, { addPlugins }) {\n      addPlugins([\n        [\n          'babel-plugin-import',\n          {\n            libraryName: 'xxx-components',\n            libraryDirectory: 'es',\n            style: true,\n          },\n        ],\n      ]);\n    },\n  },\n};\n"})}),"\n",(0,i.jsxs)(n.h4,{id:"addpresets",children:["addPresets",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#addpresets",children:"#"})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"\u7C7B\u578B\uFF1A"})," ",(0,i.jsx)(n.code,{children:"(presets: BabelPlugin[]) => void"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"\u6DFB\u52A0\u82E5\u5E72\u4E2A Babel \u9884\u8BBE\u914D\u7F6E (\u5927\u591A\u6570\u60C5\u51B5\u4E0B\u4E0D\u9700\u8981\u589E\u52A0\u9884\u8BBE)\u3002"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    babel(config, { addPresets }) {\n      addPresets(['@babel/preset-env']);\n    },\n  },\n};\n"})}),"\n",(0,i.jsxs)(n.h4,{id:"removeplugins",children:["removePlugins",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#removeplugins",children:"#"})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"\u7C7B\u578B\uFF1A"})," ",(0,i.jsx)(n.code,{children:"(plugins: string | string[]) => void"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"\u79FB\u9664 Babel \u63D2\u4EF6\uFF0C\u4F20\u5165\u9700\u8981\u79FB\u9664\u7684\u63D2\u4EF6\u540D\u79F0\u5373\u53EF\uFF0C\u4F60\u53EF\u4EE5\u4F20\u5165\u5355\u4E2A\u5B57\u7B26\u4E32\uFF0C\u4E5F\u53EF\u4EE5\u4F20\u5165\u4E00\u4E2A\u5B57\u7B26\u4E32\u6570\u7EC4\u3002"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    babel(config, { removePlugins }) {\n      removePlugins('babel-plugin-import');\n    },\n  },\n};\n"})}),"\n",(0,i.jsxs)(n.h4,{id:"removepresets",children:["removePresets",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#removepresets",children:"#"})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"\u7C7B\u578B\uFF1A"})," ",(0,i.jsx)(n.code,{children:"(presets: string | string[]) => void"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"\u79FB\u9664 Babel \u9884\u8BBE\u914D\u7F6E\uFF0C\u4F20\u5165\u9700\u8981\u79FB\u9664\u7684\u9884\u8BBE\u540D\u79F0\u5373\u53EF\uFF0C\u4F60\u53EF\u4EE5\u4F20\u5165\u5355\u4E2A\u5B57\u7B26\u4E32\uFF0C\u4E5F\u53EF\u4EE5\u4F20\u5165\u4E00\u4E2A\u5B57\u7B26\u4E32\u6570\u7EC4\u3002"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    babel(config, { removePresets }) {\n      removePresets('@babel/preset-env');\n    },\n  },\n};\n"})}),"\n",(0,i.jsxs)(n.h4,{id:"addincludes",children:["addIncludes",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#addincludes",children:"#"})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"\u7C7B\u578B\uFF1A"})," ",(0,i.jsx)(n.code,{children:"(includes: string | RegExp | (string | RegExp)[]) => void"})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["\u9ED8\u8BA4\u60C5\u51B5\u4E0B Babel \u53EA\u4F1A\u7F16\u8BD1 src \u76EE\u5F55\u4E0B\u7684\u4E1A\u52A1\u4EE3\u7801\uFF0C\u4F7F\u7528 ",(0,i.jsx)(n.code,{children:"addIncludes"})," \u4F60\u53EF\u4EE5\u6307\u5B9A Babel \u7F16\u8BD1 node_modules \u4E0B\u7684\u4E00\u4E9B\u6587\u4EF6\u3002\u6BD4\u5982\u7F16\u8BD1 ",(0,i.jsx)(n.code,{children:"query-string"})," \u4F9D\u8D56\uFF1A"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    babel(config, { addIncludes }) {\n      addIncludes(/\\/node_modules\\/query-string\\//);\n    },\n  },\n};\n"})}),"\n",(0,i.jsxs)(n.div,{className:"rspress-directive tip",children:[(0,i.jsx)(n.div,{className:"rspress-directive-title",children:"TIP"}),(0,i.jsxs)(n.div,{className:"rspress-directive-content",children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"addIncludes"})," \u51FD\u6570\u7684\u7528\u6CD5\u4E0E ",(0,i.jsx)(n.code,{children:"source.include"})," \u914D\u7F6E\u9879\u5B8C\u5168\u4E00\u81F4\uFF0C\u6211\u4EEC\u5EFA\u8BAE\u76F4\u63A5\u4F7F\u7528 ",(0,i.jsx)(n.code,{children:"source.include"})," \u6765\u4EE3\u66FF\u5B83\uFF0C\u56E0\u4E3A ",(0,i.jsx)(n.code,{children:"source.include"})," \u7684\u4F7F\u7528\u573A\u666F\u66F4\u5E7F\u3002\u6BD4\u5982\uFF0C\u5F53\u4F60\u4ECE Babel \u8FC1\u79FB\u5207\u6362\u5230 SWC \u7F16\u8BD1\u65F6\uFF0C",(0,i.jsx)(n.code,{children:"source.include"})," \u4ECD\u7136\u53EF\u4EE5\u751F\u6548\uFF0C\u800C ",(0,i.jsx)(n.code,{children:"addIncludes"})," \u51FD\u6570\u5219\u65E0\u6CD5\u751F\u6548\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["\u8BF7\u67E5\u770B ",(0,i.jsx)(n.a,{href:"https://modernjs.dev/builder/api/config-source.html#sourceinclude",target:"_blank",rel:"noopener noreferrer",children:"\u300Csource.include \u6587\u6863\u300D"})," \u6765\u67E5\u770B\u66F4\u8BE6\u7EC6\u7684\u7528\u6CD5\u8BF4\u660E\u3002"]}),"\n"]})]}),"\n",(0,i.jsxs)(n.h4,{id:"addexcludes",children:["addExcludes",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#addexcludes",children:"#"})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"\u7C7B\u578B\uFF1A"})," ",(0,i.jsx)(n.code,{children:"(excludes: string | RegExp | (string | RegExp)[]) => void"})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"addExcludes"})," \u548C ",(0,i.jsx)(n.code,{children:"addIncludes"})," \u7684\u7528\u5904\u76F8\u53CD\uFF0C\u6307\u5B9A Babel \u7F16\u8BD1\u65F6\u6392\u9664\u67D0\u4E9B\u6587\u4EF6\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["\u6BD4\u5982\u4E0D\u7F16\u8BD1 ",(0,i.jsx)(n.code,{children:"src/example"})," \u76EE\u5F55\u4E0B\u7684\u6587\u4EF6:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    babel(config, { addExcludes }) {\n      addExcludes('src/example');\n    },\n  },\n};\n"})}),"\n",(0,i.jsxs)(n.div,{className:"rspress-directive tip",children:[(0,i.jsx)(n.div,{className:"rspress-directive-title",children:"TIP"}),(0,i.jsx)(n.div,{className:"rspress-directive-content",children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"addExcludes"})," \u51FD\u6570\u7684\u7528\u6CD5\u4E0E ",(0,i.jsx)(n.code,{children:"source.exclude"})," \u914D\u7F6E\u9879\u57FA\u672C\u4E00\u81F4\uFF0C\u8BF7\u67E5\u770B ",(0,i.jsx)(n.a,{href:"https://modernjs.dev/builder/api/config-source.html#sourceexclude",target:"_blank",rel:"noopener noreferrer",children:"source.exclude \u6587\u6863"})," \u6765\u67E5\u770B\u66F4\u8BE6\u7EC6\u7684\u7528\u6CD5\u8BF4\u660E\u3002\u4E5F\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528 ",(0,i.jsx)(n.code,{children:"source.exclude"})," \u6765\u4EE3\u66FF ",(0,i.jsx)(n.code,{children:"addExcludes"})," \u51FD\u6570\u3002\n"]})})]}),"\n",(0,i.jsxs)(n.h4,{id:"modifypresetenvoptions",children:["modifyPresetEnvOptions",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#modifypresetenvoptions",children:"#"})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"\u7C7B\u578B\uFF1A"})," ",(0,i.jsx)(n.code,{children:"(options: PresetEnvOptions) => void"})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["\u4FEE\u6539 ",(0,i.jsx)(n.a,{href:"https://babeljs.io/docs/en/babel-preset-env",target:"_blank",rel:"noopener noreferrer",children:"@babel/preset-env"})," \u7684\u914D\u7F6E\u9879\uFF0C\u4F20\u5165\u7684\u914D\u7F6E\u4F1A\u4E0E\u9ED8\u8BA4\u914D\u7F6E\u8FDB\u884C\u6D45\u5C42\u5408\u5E76\uFF0C\u6BD4\u5982:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    babel(config, { modifyPresetEnvOptions }) {\n      modifyPresetEnvOptions({\n        targets: {\n          browsers: ['last 2 versions'],\n        },\n      });\n    },\n  },\n};\n"})}),"\n",(0,i.jsxs)(n.h4,{id:"modifypresetreactoptions",children:["modifyPresetReactOptions",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#modifypresetreactoptions",children:"#"})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"\u7C7B\u578B\uFF1A"})," ",(0,i.jsx)(n.code,{children:"(options: PresetReactOptions) => void"})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["\u4FEE\u6539 ",(0,i.jsx)(n.a,{href:"https://babeljs.io/docs/en/babel-preset-react",target:"_blank",rel:"noopener noreferrer",children:"@babel/preset-react"})," \u7684\u914D\u7F6E\u9879\uFF0C\u4F20\u5165\u7684\u914D\u7F6E\u4F1A\u4E0E\u9ED8\u8BA4\u914D\u7F6E\u8FDB\u884C\u6D45\u5C42\u5408\u5E76\uFF0C\u6BD4\u5982:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    babel(config, { modifyPresetReactOptions }) {\n      modifyPresetReactOptions({\n        pragma: 'React.createElement',\n      });\n    },\n  },\n};\n"})}),"\n",(0,i.jsxs)(n.h3,{id:"\u8C03\u8BD5-babel-\u914D\u7F6E",children:["\u8C03\u8BD5 Babel \u914D\u7F6E",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u8C03\u8BD5-babel-\u914D\u7F6E",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["\u5F53\u4F60\u901A\u8FC7 ",(0,i.jsx)(n.code,{children:"tools.babel"})," \u4FEE\u6539 ",(0,i.jsx)(n.code,{children:"babel-loader"})," \u914D\u7F6E\u540E\uFF0C\u53EF\u4EE5\u5728 ",(0,i.jsx)(n.a,{href:"https://modernjs.dev/builder/guide/debug/debug-mode.html",target:"_blank",rel:"noopener noreferrer",children:"Builder \u8C03\u8BD5\u6A21\u5F0F"})," \u4E0B\u67E5\u770B\u6700\u7EC8\u751F\u6210\u7684\u914D\u7F6E\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["\u9996\u5148\u901A\u8FC7 ",(0,i.jsx)(n.code,{children:"DEBUG=builder"})," \u53C2\u6570\u5F00\u542F\u8C03\u8BD5\u6A21\u5F0F\uFF1A"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"# \u8C03\u8BD5\u5F00\u53D1\u73AF\u5883\nDEBUG=builder pnpm dev\n\n# \u8C03\u8BD5\u751F\u4EA7\u73AF\u5883\nDEBUG=builder pnpm build\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u7136\u540E\u6253\u5F00\u751F\u6210\u7684 ",(0,i.jsx)(n.code,{children:"(webpack|rspack).config.web.js"}),"\uFF0C\u641C\u7D22 ",(0,i.jsx)(n.code,{children:"babel-loader"})," \u5173\u952E\u8BCD\uFF0C\u5373\u53EF\u770B\u5230\u5B8C\u6574\u7684 ",(0,i.jsx)(n.code,{children:"babel-loader"})," \u914D\u7F6E\u5185\u5BB9\u3002"]})]})}(r=globalThis).__RSPRESS_PAGE_META||(r.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["..%2F..%2Fbuilder-doc%2Fdocs%2Fzh%2Fconfig%2Ftools%2Fbabel.md"]={toc:[{text:"\u4F7F\u7528\u573A\u666F",id:"\u4F7F\u7528\u573A\u666F",depth:3},{text:"Function \u7C7B\u578B",id:"function-\u7C7B\u578B",depth:3},{text:"Object \u7C7B\u578B",id:"object-\u7C7B\u578B",depth:3},{text:"\u5DE5\u5177\u51FD\u6570",id:"\u5DE5\u5177\u51FD\u6570",depth:3},{text:"addPlugins",id:"addplugins",depth:4},{text:"addPresets",id:"addpresets",depth:4},{text:"removePlugins",id:"removeplugins",depth:4},{text:"removePresets",id:"removepresets",depth:4},{text:"addIncludes",id:"addincludes",depth:4},{text:"addExcludes",id:"addexcludes",depth:4},{text:"modifyPresetEnvOptions",id:"modifypresetenvoptions",depth:4},{text:"modifyPresetReactOptions",id:"modifypresetreactoptions",depth:4},{text:"\u8C03\u8BD5 Babel \u914D\u7F6E",id:"\u8C03\u8BD5-babel-\u914D\u7F6E",depth:3}],title:"",frontmatter:{}};var o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,c.useMDXComponents)(),e.components).wrapper;return n?(0,i.jsx)(n,(0,l._)((0,d._)({},e),{children:(0,i.jsx)(a,(0,d._)({},e))})):a(e)}},50544:function(e,n,s){"use strict";s.r(n),s.d(n,{default:function(){return t}});var r,d=s("15169"),l=s("43932"),i=s("9880"),c=s("23169"),a=s("68903");function o(e){var n=Object.assign({h1:"h1",a:"a",div:"div",p:"p"},(0,c.useMDXComponents)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.h1,{id:"toolsbabel",children:["tools.babel",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#toolsbabel",children:"#"})]}),"\n",(0,i.jsxs)(n.div,{className:"rspress-directive tip",children:[(0,i.jsx)(n.div,{className:"rspress-directive-title",children:"TIP"}),(0,i.jsx)(n.div,{className:"rspress-directive-content",children:(0,i.jsxs)(n.p,{children:["\u8BE5\u914D\u7F6E\u7531 Modern.js Builder \u63D0\u4F9B\uFF0C\u66F4\u591A\u4FE1\u606F\u53EF\u53C2\u8003 ",(0,i.jsx)(n.a,{href:"https://modernjs.dev/builder/api/config-tools.html#toolsbabel",target:"_blank",rel:"noopener noreferrer",children:"tools.babel"}),"\u3002\n"]})})]}),"\n","\n",(0,i.jsx)(a.default,{})]})}(r=globalThis).__RSPRESS_PAGE_META||(r.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["zh%2Fconfigure%2Fapp%2Ftools%2Fbabel.mdx"]={toc:[],title:"tools.babel",frontmatter:{sidebar_label:"babel"}};var t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,c.useMDXComponents)(),e.components).wrapper;return n?(0,i.jsx)(n,(0,l._)((0,d._)({},e),{children:(0,i.jsx)(o,(0,d._)({},e))})):o(e)}}}]);