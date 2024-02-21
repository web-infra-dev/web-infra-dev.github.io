/*! For license information please see 2716.dea5b22c.js.LICENSE.txt */
(self.webpackChunk_modern_js_module_tools_docs=self.webpackChunk_modern_js_module_tools_docs||[]).push([["2716"],{77256:function(e,n,r){"use strict";r.r(n);var o=r("39980"),s=r("96954");function d(e){let n=Object.assign({h1:"h1",a:"a",p:"p",ul:"ul",li:"li",h2:"h2",h3:"h3",pre:"pre",code:"code",div:"div",blockquote:"blockquote",strong:"strong",h4:"h4"},(0,s.useMDXComponents)(),e.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.h1,{id:"\u4F7F\u7528-storybook",children:["\u4F7F\u7528 Storybook",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u4F7F\u7528-storybook",children:"#"})]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"https://storybook.js.org/",target:"_blank",rel:"noopener noreferrer",children:"Storybook"})," \u662F\u4E00\u4E2A\u4E13\u95E8\u7528\u4E8E\u7EC4\u4EF6\u8C03\u8BD5\u7684\u5DE5\u5177\uFF0C\u5B83\u56F4\u7ED5\u7740\u7EC4\u4EF6\u5F00\u53D1\u63D0\u4F9B\u4E86\uFF1A"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"\u4E30\u5BCC\u591A\u6837\u7684\u8C03\u8BD5\u80FD\u529B"}),"\n",(0,o.jsx)(n.li,{children:"\u53EF\u4E0E\u4E00\u4E9B\u6D4B\u8BD5\u5DE5\u5177\u7ED3\u5408\u4F7F\u7528"}),"\n",(0,o.jsx)(n.li,{children:"\u53EF\u91CD\u590D\u4F7F\u7528\u7684\u6587\u6863\u5185\u5BB9"}),"\n",(0,o.jsx)(n.li,{children:"\u53EF\u5206\u4EAB\u80FD\u529B"}),"\n",(0,o.jsx)(n.li,{children:"\u5DE5\u4F5C\u6D41\u7A0B\u81EA\u52A8\u5316"}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"\u5728\u4F7F\u7528 Storybook \u65F6\uFF0C\u96BE\u514D\u4F1A\u9047\u5230\u5404\u79CD\u914D\u7F6E\u95EE\u9898\uFF0C\u9700\u8981\u624B\u52A8\u914D\u7F6E Babel \u63D2\u4EF6\uFF0C\u624B\u52A8\u914D\u7F6E Webpack \u53BB\u652F\u6301 less\uFF0Csass \u7B49\u3002\nModern.js \u96C6\u6210\u4E86 Storybook\uFF0C\u8FD9\u5BF9\u4E8E\u6211\u4EEC\u5F00\u53D1 Storybook \u9879\u76EE\u6765\u8BF4\u6781\u5927\u5730\u7B80\u5316\u4E86\u914D\u7F6E\u5DE5\u4F5C\u3002"}),"\n",(0,o.jsxs)(n.h2,{id:"v7-\u63A8\u8350",children:["V7 (\u63A8\u8350)",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#v7-\u63A8\u8350",children:"#"})]}),"\n",(0,o.jsxs)(n.h3,{id:"\u5F00\u542F-storybook",children:["\u5F00\u542F Storybook",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u5F00\u542F-storybook",children:"#"})]}),"\n",(0,o.jsx)(n.p,{children:"\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528\u5982\u4E0B\u547D\u4EE4\u5F00\u542F Storybook \u529F\u80FD\u3002"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"$ npx modern new\n? \u8BF7\u9009\u62E9\u4F60\u60F3\u8981\u7684\u64CD\u4F5C \u542F\u7528\u53EF\u9009\u529F\u80FD\n? \u8BF7\u9009\u62E9\u529F\u80FD\u540D\u79F0 \u542F\u7528\u300CStorybook\u300DV7\n"})}),"\n",(0,o.jsx)(n.p,{children:"\u8BE5\u547D\u4EE4\u4F1A\u521B\u5EFA\u597D Storybook \u5E38\u7528\u7684\u6A21\u7248\uFF0C\u5305\u62EC"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\u521B\u5EFA\u914D\u7F6E\u6587\u4EF6\u5939 ",(0,o.jsx)(n.code,{children:".storybook"}),"\uFF0C\u4EE5\u53CA\u9ED8\u8BA4\u914D\u7F6E\u6587\u4EF6 ",(0,o.jsx)(n.code,{children:".storybook/main.ts"})]}),"\n",(0,o.jsx)(n.li,{children:"\u521B\u5EFA stories \u7EC4\u4EF6\u793A\u4F8B"}),"\n",(0,o.jsx)(n.li,{children:"\u66F4\u65B0 package.json\uFF0C\u65B0\u589E\u4F9D\u8D56 @storybook/addon-essential \u548C @modern-js/storybook\uFF0C\u4EE5\u53CA\u521B\u5EFA storybook \u76F8\u5173\u811A\u672C\u3002"}),"\n"]}),"\n",(0,o.jsxs)(n.h3,{id:"\u5F00\u542F\u4EA7\u7269\u8C03\u8BD5",children:["\u5F00\u542F\u4EA7\u7269\u8C03\u8BD5",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u5F00\u542F\u4EA7\u7269\u8C03\u8BD5",children:"#"})]}),"\n",(0,o.jsx)(n.p,{children:"\u4E8B\u5B9E\u4E0A\uFF0CModern.js Module \u662F\u57FA\u4E8E esbuild \u5B9E\u73B0\u7684\uFF0C\u800C Storybook \u4F7F\u7528 Webpack \u4F5C\u4E3A\u9ED8\u8BA4\u6784\u5EFA\u5DE5\u5177\uFF0C\u4E8C\u8005\u7684\u914D\u7F6E\u65E0\u6CD5\u5B8C\u5168\u517C\u5BB9\uFF0C\n\u6240\u4EE5\u8FD9\u91CC\u6211\u4EEC\u63A8\u8350\u5148\u5BF9\u7EC4\u4EF6\u8FDB\u884C\u6784\u5EFA\uFF0C\u7136\u540E\u5728 stories \u91CC\u5F15\u5165\u7EC4\u4EF6\u4EA7\u7269\u3002"}),"\n",(0,o.jsx)(n.p,{children:"\u5F15\u5165\u7EC4\u4EF6\u4EA7\u7269\u7684\u65B9\u5F0F\u975E\u5E38\u7B80\u5355\uFF0C\u5047\u8BBE\u4F60\u7684\u6A21\u5757\u5BFC\u51FA\u4E86\u4E00\u4E2A Button \u7EC4\u4EF6\uFF0C\u90A3\u4E48\u5728 stories \u91CC\u53EF\u4EE5\u8FD9\u6837\u4F7F\u7528:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",meta:'filename="stories/index.stories.tsx"',children:"import { Button } from '.';\n\nexport const YourStory = () => <Button />;\n\nexport default {\n  title: 'Your Stories',\n};\n"})}),"\n",(0,o.jsx)(n.p,{children:"\u5982\u679C\u60F3\u8981\u66F4\u65B0\u7EC4\u4EF6\uFF0C\u5219\u53EF\u4EE5\u5728\u542F\u52A8 Storybook \u524D\u542F\u52A8\u76D1\u542C\u6A21\u5F0F\u7684\u6784\u5EFA\uFF1A"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"modern build --watch\n"})}),"\n",(0,o.jsxs)(n.div,{className:"rspress-directive info",children:[(0,o.jsx)(n.div,{className:"rspress-directive-title",children:"INFO"}),(0,o.jsxs)(n.div,{className:"rspress-directive-content",children:[(0,o.jsx)(n.p,{children:"\u5728\u5F00\u53D1\u8FC7\u7A0B\u4E2D\uFF0C\u53EF\u80FD\u4F1A\u9047\u5230\u65E0\u6CD5\u5B9E\u65F6\u83B7\u5F97\u7C7B\u578B\u5B9A\u4E49\u7684\u60C5\u51B5\u3002\u56E0\u4E3A\u53EA\u6709\u5F53\u4FDD\u5B58\u4EE3\u7801\u540E\uFF0C\u4EA7\u7269\u76EE\u5F55\u4E0B\u7684\u7C7B\u578B\u6587\u4EF6\u624D\u4F1A\u66F4\u65B0\u3002\u6B64\u65F6\uFF1A"}),"\n",(0,o.jsxs)(n.p,{children:["\u5BF9\u4E8E ",(0,o.jsx)(n.code,{children:"pnpm"})," \u7684\u9879\u76EE\uFF0C\u53EF\u4EE5\u6309\u7167\u4E0B\u9762\u7684\u5185\u5BB9\u5BF9 ",(0,o.jsx)(n.code,{children:"package.json"})," \u8FDB\u884C\u4FEE\u6539\uFF1A"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:'{\n    "name": "foo",\n    "main": "./dist/index.js",\n    "types": "./src/index.ts",\n    "publishConfig": {\n      "types": "./dist/index.d.ts",\n    }\n}\n'})}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:["\u5173\u4E8E pnpm \u7684 ",(0,o.jsx)(n.code,{children:"publishConfig"})," \u7684\u4F7F\u7528\uFF0C\u53EF\u4EE5\u9605\u8BFB\u4E0B\u9762\u8FD9\u4E2A",(0,o.jsx)(n.a,{href:"https://pnpm.io/package_json#publishconfig",target:"_blank",rel:"noopener noreferrer",children:"\u94FE\u63A5"}),"\u3002"]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["\u800C\u5BF9\u4E8E npm \u548C Yarn \u7684\u9879\u76EE\uFF0C\u5219\u53EA\u80FD\u901A\u8FC7\u624B\u52A8\u7684\u65B9\u5F0F\u5728",(0,o.jsx)(n.strong,{children:"\u5F00\u53D1\u9636\u6BB5"}),"\u548C",(0,o.jsx)(n.strong,{children:"\u53D1\u5E03\u9636\u6BB5"}),"\u5BF9 ",(0,o.jsx)(n.code,{children:"package.json"})," \u7684 ",(0,o.jsx)(n.code,{children:"types"})," \u7684\u503C\u8FDB\u884C\u4FEE\u6539\u3002\n"]})]})]}),"\n",(0,o.jsxs)(n.h3,{id:"\u5F00\u542F-rspack-\u6784\u5EFA",children:["\u5F00\u542F Rspack \u6784\u5EFA",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u5F00\u542F-rspack-\u6784\u5EFA",children:"#"})]}),"\n",(0,o.jsx)(n.p,{children:"Rspack \u6784\u5EFA\u901F\u5EA6\u975E\u5E38\u5FEB\uFF0C\u53EA\u9700\u8981\u5982\u4E0B\u914D\u7F6E\u5373\u53EF\u4F7F\u7528 Rspack \u4F5C\u4E3A\u6784\u5EFA\u5DE5\u5177\u3002"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-diff",meta:"filename='.storybook/main.js'",children:"const config = {\n  framework: {\n    name: '@modern-js/storybook',\n    options: {\n-      bundler: 'webpack'\n+      bundler: 'rspack'\n    },\n  },\n  typescript: {\n-    reactDocgen: 'react-docgen-typescript'\n+    reactDocgen: 'react-docgen'\n  }\n};\n\nexport default config;\n"})}),"\n",(0,o.jsx)(n.p,{children:"\u6CE8\u610F\u4E0A\u9762\u914D\u7F6E\u4E2D\uFF0C\u66F4\u6539\u4E86 reactDocgen \u914D\u7F6E\uFF0C\u56E0\u4E3A Rspack \u76EE\u524D\u8FD8\u4E0D\u652F\u6301 @storybook/react-docgen-typescript-plugin\u3002"}),"\n",(0,o.jsxs)(n.h3,{id:"\u914D\u7F6E",children:["\u914D\u7F6E",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u914D\u7F6E",children:"#"})]}),"\n",(0,o.jsxs)(n.p,{children:["\u5728 ",(0,o.jsx)(n.code,{children:".storybook/main.js"})," \u4E2D\u5305\u542B\u4E00\u4E9B\u72EC\u6709\u7684\u914D\u7F6E\u3002"]}),"\n",(0,o.jsxs)(n.h4,{id:"bundler",children:["bundler",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#bundler",children:"#"})]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"\u7C7B\u578B"}),": ",(0,o.jsx)(n.code,{children:"'webpack' | 'rspack'"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"\u9ED8\u8BA4\u503C"}),": ",(0,o.jsx)(n.code,{children:"webpack"})]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"\u6307\u5B9A\u5E95\u5C42\u6253\u5305\u5DE5\u5177\u4F7F\u7528 Webpack \u8FD8\u662F Rspack\u3002"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-javascript",meta:"filename='.storybook/main.js'",children:"const config = {\n  framework: {\n    name: '@modern-js/storybook',\n    options: {\n      bundler: 'rspack',\n    },\n  },\n};\n\nexport default config;\n"})}),"\n",(0,o.jsxs)(n.h4,{id:"builderconfig",children:["builderConfig",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#builderconfig",children:"#"})]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"\u7C7B\u578B"}),": ",(0,o.jsx)(n.code,{children:"BuilderConfig"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"\u9ED8\u8BA4\u503C"}),": ",(0,o.jsx)(n.code,{children:"undefined"})]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["Modern.js \u7684 Storybook \u6784\u5EFA\u80FD\u529B\u7531 ",(0,o.jsx)(n.a,{href:"https://rsbuild.dev/",target:"_blank",rel:"noopener noreferrer",children:"Rsbuild"})," \u63D0\u4F9B\uFF0C\u53EF\u901A\u8FC7 builderConfig \u4FEE\u6539 Rsbuild \u6784\u5EFA\u914D\u7F6E\u3002"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-javascript",meta:"filename='.storybook/main.js'",children:"const config = {\n  framework: {\n    name: '@modern-js/storybook',\n    options: {\n      builderConfig: {\n        alias: {\n          react: require.resolve('react'),\n          'react-dom': require.resolve('react-dom'),\n        },\n      },\n    },\n  },\n};\n\nexport default config;\n"})}),"\n",(0,o.jsxs)(n.h3,{id:"\u547D\u4EE4\u884C",children:["\u547D\u4EE4\u884C",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u547D\u4EE4\u884C",children:"#"})]}),"\n",(0,o.jsx)(n.p,{children:"@modern-js/storybook \u4EE3\u7406\u4E86\u90E8\u5206 storybook cli \u7684\u547D\u4EE4\u3002"}),"\n",(0,o.jsxs)(n.h4,{id:"storybook-dev",children:["storybook dev",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#storybook-dev",children:"#"})]}),"\n",(0,o.jsxs)(n.p,{children:["\u542F\u52A8 Storybook\uFF0C\u67E5\u770B",(0,o.jsx)(n.a,{href:"https://storybook.js.org/docs/react/api/cli-options#dev",target:"_blank",rel:"noopener noreferrer",children:"\u8BE6\u60C5"})]}),"\n",(0,o.jsxs)(n.h4,{id:"storybook-build",children:["storybook build",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#storybook-build",children:"#"})]}),"\n",(0,o.jsxs)(n.p,{children:["\u5BF9 Storybook \u8FDB\u884C\u751F\u4EA7\u73AF\u5883\u6784\u5EFA\uFF0C\u67E5\u770B",(0,o.jsx)(n.a,{href:"https://storybook.js.org/docs/react/api/cli-options#build",target:"_blank",rel:"noopener noreferrer",children:"\u8BE6\u60C5"})]}),"\n",(0,o.jsxs)(n.h3,{id:"\u914D\u7F6E\u6587\u4EF6",children:["\u914D\u7F6E\u6587\u4EF6",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u914D\u7F6E\u6587\u4EF6",children:"#"})]}),"\n",(0,o.jsx)(n.p,{children:"\u914D\u7F6E\u6587\u4EF6\u4E2D\u9664\u4E86 Rsbuild \u914D\u7F6E\u8FD8\u5305\u542B\u4E00\u4E2A\u989D\u5916\u7684\u5B57\u6BB5\uFF0CbuilderPlugins\uFF0C\u65B9\u4FBF\u4F7F\u7528 Rsbuild \u63D2\u4EF6\uFF0C\u4F8B\u5982\u542F\u7528 SWC \u7F16\u8BD1\u3002"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-typescript",meta:"filename='modern.config.ts'",children:"import { defineConfig } from '@modern-js/storybook';\nimport { pluginSwc } from '@rsbuild/plugin-swc';\n\nconst config = defineConfig({\n  builderPlugins: [pluginSwc()],\n});\n\nexport default config;\n"})}),"\n",(0,o.jsxs)(n.h2,{id:"\u4ECE-v6-\u8FC1\u79FB\u81F3-v7",children:["\u4ECE V6 \u8FC1\u79FB\u81F3 V7",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u4ECE-v6-\u8FC1\u79FB\u81F3-v7",children:"#"})]}),"\n",(0,o.jsx)(n.p,{children:"\u6211\u4EEC\u5BF9\u4E8E\u4E24\u4E2A\u7248\u672C\u7684\u652F\u6301\u65B9\u5F0F\u4E0D\u540C\uFF0C\u56E0\u6B64\u5982\u679C\u4F60\u662F\u4ECE V6 \u8FC1\u79FB\u81F3 V7 \u7684\u7528\u6237\uFF0C\u6211\u4EEC\u5E0C\u671B\u4F60\u4E5F\u6309\u4E0A\u8FF0\u65B9\u5F0F\u4F7F\u7528 V7\uFF0C\u540C\u65F6\u505A\u4EE5\u4E0B\u8C03\u6574:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\u914D\u7F6E\u6587\u4EF6\uFF1A\u5C06\u539F\u6765 ",(0,o.jsx)(n.code,{children:"root/config/storybook/main.(j|t)s"})," \u91CC\u7684\u81EA\u5B9A\u4E49\u914D\u7F6E\uFF08\u5982\u679C\u6709\uFF09\u8FC1\u79FB\u5230\u65B0\u7684 ",(0,o.jsx)(n.code,{children:"root/.storybook/main.(j|t)s"}),"\u3002"]}),"\n",(0,o.jsxs)(n.li,{children:["\u4F9D\u8D56\uFF1A\u5347\u7EA7 ",(0,o.jsx)(n.code,{children:"@storybook/addon-*"})," \u7CFB\u5217\u4F9D\u8D56\uFF08\u5982\u679C\u6709\uFF09\u5230 7 \u7248\u672C\uFF0C\u5E76\u5220\u9664 ",(0,o.jsx)(n.code,{children:"@modern-js/plugin-storybook"})," \u4F9D\u8D56\u3002"]}),"\n",(0,o.jsxs)(n.li,{children:["\u547D\u4EE4: \u5C06\u539F\u6765 ",(0,o.jsx)(n.code,{children:"edenx dev storybook"})," \u548C ",(0,o.jsx)(n.code,{children:"edenx build --platform"})," \u547D\u4EE4\u5220\u9664\uFF0C\u5982\u679C\u4E60\u60EF\u4E86\u539F\u6765\u7684 ",(0,o.jsx)(n.code,{children:"pnpm run dev"})," \u7684\u8C03\u7528\u65B9\u5F0F\uFF0C\u53EF\u4EE5\n\u5C06\u5176\u66FF\u6362\u6210 ",(0,o.jsx)(n.code,{children:"storybook dev -p 6006"})," \u548C ",(0,o.jsx)(n.code,{children:"storybook build"}),"\u3002"]}),"\n",(0,o.jsxs)(n.li,{children:["modern.config.(j|t)s : \u5220\u9664 ",(0,o.jsx)(n.code,{children:"@modern-js/plugin-storybook"})," \u63D2\u4EF6\u7684\u6CE8\u518C\u3002"]}),"\n"]}),"\n",(0,o.jsxs)(n.h2,{id:"v6-legacy",children:["V6 (legacy)",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#v6-legacy",children:"#"})]}),"\n",(0,o.jsxs)(n.p,{children:["\u4ECE ",(0,o.jsx)(n.code,{children:"2.40.0"})," \u7248\u672C\u5F00\u59CB\uFF0C",(0,o.jsx)(n.code,{children:"@modern-js/plugin-storybook"}),"\u5C06\u505C\u6B62\u8FED\u4EE3\u3002\u5EFA\u8BAE\u4F7F\u7528 V7 \u7248\u672C\u3002\n\u5982\u679C\u4F60\u7684 ",(0,o.jsx)(n.code,{children:"@modern-js/module-tools"})," \u7248\u672C\u4F4E\u4E8E ",(0,o.jsx)(n.code,{children:"2.40.0"}),"\uFF0C\u53EF\u4EE5\u6309\u7167\u4EE5\u4E0B\u65B9\u5F0F\u4F7F\u7528 Storybook V6:"]}),"\n",(0,o.jsxs)(n.h3,{id:"\u5F00\u542F-storybook-1",children:["\u5F00\u542F Storybook",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u5F00\u542F-storybook-1",children:"#"})]}),"\n",(0,o.jsx)(n.p,{children:"\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528\u5982\u4E0B\u547D\u4EE4\u5F00\u542F Storybook \u529F\u80FD\u3002"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"$ npx modern new\n? \u8BF7\u9009\u62E9\u4F60\u60F3\u8981\u7684\u64CD\u4F5C \u542F\u7528\u53EF\u9009\u529F\u80FD\n? \u8BF7\u9009\u62E9\u529F\u80FD\u540D\u79F0 \u542F\u7528\u300CStorybook\u300D\n"})}),"\n",(0,o.jsx)(n.p,{children:"\u8BE5\u547D\u4EE4\u4F1A\u521B\u5EFA\u597D Storybook \u5E38\u7528\u7684\u6A21\u7248\uFF0C\u5305\u62EC"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"\u521B\u5EFA stories \u7EC4\u4EF6\u793A\u4F8B"}),"\n",(0,o.jsxs)(n.li,{children:["\u66F4\u65B0 package.json\uFF0C\u65B0\u589E\u4F9D\u8D56 @modern-js/plugin-storybook\uFF0C\u4EE5\u53CA\u6DFB\u52A0 ",(0,o.jsx)(n.code,{children:"pnpm dev storybook"})," \u7B49\u76F8\u5173\u811A\u672C\u3002"]}),"\n"]}),"\n",(0,o.jsxs)(n.h3,{id:"\u914D\u7F6E-storybook",children:["\u914D\u7F6E Storybook",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u914D\u7F6E-storybook",children:"#"})]}),"\n",(0,o.jsxs)(n.p,{children:["Storybook \u5B98\u65B9\u901A\u8FC7\u4E00\u4E2A\u540D\u4E3A ",(0,o.jsx)(n.code,{children:".storybook"})," \u7684\u6587\u4EF6\u5939\u6765\u8FDB\u884C\u9879\u76EE\u914D\u7F6E\uFF0C\u5176\u4E2D\u5305\u542B\u5404\u79CD\u914D\u7F6E\u6587\u4EF6\u3002",(0,o.jsxs)(n.strong,{children:["\u5728 Modern.js Module \u4E2D\uFF0C\u53EF\u4EE5\u5728\u9879\u76EE\u7684 ",(0,o.jsx)(n.code,{children:"config/storybook"})," \u76EE\u5F55\u4E0B\u589E\u52A0 Storybook \u914D\u7F6E\u6587\u4EF6\u3002"]})]}),"\n",(0,o.jsx)(n.p,{children:"\u5173\u4E8E Storybook \u5404\u79CD\u914D\u7F6E\u6587\u4EF6\u7684\u4F7F\u7528\u65B9\u5F0F\uFF0C\u53EF\u4EE5\u67E5\u770B\u4E0B\u9762\u7684\u94FE\u63A5\uFF1A"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://storybook.js.org/docs/react/configure/overview",target:"_blank",rel:"noopener noreferrer",children:"Configure Storybook"})}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"\u4E0D\u8FC7\u8FD9\u5728\u6A21\u5757\u9879\u76EE\u91CC\u4F7F\u7528\u65F6\u5B58\u5728\u4E00\u4E9B\u9650\u5236"}),"\uFF1A"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\u4E0D\u80FD\u4FEE\u6539 Story \u6587\u4EF6\u5B58\u653E\u7684\u4F4D\u7F6E\uFF0C\u5373\u65E0\u6CD5\u5728 ",(0,o.jsx)(n.code,{children:"main.js"})," \u6587\u4EF6\u91CC\u4FEE\u6539 ",(0,o.jsx)(n.code,{children:"stories"})," \u914D\u7F6E\u3002"]}),"\n",(0,o.jsxs)(n.li,{children:["\u4E0D\u80FD\u4FEE\u6539 Webpack \u548C Babel \u76F8\u5173\u7684\u914D\u7F6E\uFF0C\u5373\u65E0\u6CD5\u5728 ",(0,o.jsx)(n.code,{children:"main.js"})," \u6587\u4EF6\u91CC\u4FEE\u6539 ",(0,o.jsx)(n.code,{children:"webpackFinal"})," \u548C ",(0,o.jsx)(n.code,{children:"babel"})," \u914D\u7F6E\u3002"]}),"\n"]}),"\n",(0,o.jsxs)(n.h3,{id:"\u6784\u5EFA-storybook-\u4EA7\u7269",children:["\u6784\u5EFA Storybook \u4EA7\u7269",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u6784\u5EFA-storybook-\u4EA7\u7269",children:"#"})]}),"\n",(0,o.jsx)(n.p,{children:"\u9664\u4E86\u53EF\u4EE5\u5BF9\u7EC4\u4EF6\u6216\u8005\u666E\u901A\u7684\u6A21\u5757\u8FDB\u884C Storybook \u8C03\u8BD5\uFF0C\u8FD8\u53EF\u4EE5\u901A\u8FC7\u4E0B\u9762\u7684\u547D\u4EE4\u6765\u6267\u884C Storybook \u7684\u6784\u5EFA\u4EFB\u52A1\u3002"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"modern build --platform storybook\n"})}),"\n",(0,o.jsxs)(n.p,{children:["\u6784\u5EFA\u5B8C\u6210\u540E\uFF0C\u53EF\u4EE5\u5728 ",(0,o.jsx)(n.code,{children:"dist/storybook-static"})," \u76EE\u5F55\u770B\u5230\u6784\u5EFA\u4EA7\u7269\u6587\u4EF6\u3002"]})]})}function i(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,s.useMDXComponents)(),e.components);return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}n.default=i,i.__RSPRESS_PAGE_META={},i.__RSPRESS_PAGE_META["zh%2Fguide%2Fbasic%2Fusing-storybook.mdx"]={toc:[{text:"V7 (\u63A8\u8350)",id:"v7-\u63A8\u8350",depth:2},{text:"\u5F00\u542F Storybook",id:"\u5F00\u542F-storybook",depth:3},{text:"\u5F00\u542F\u4EA7\u7269\u8C03\u8BD5",id:"\u5F00\u542F\u4EA7\u7269\u8C03\u8BD5",depth:3},{text:"\u5F00\u542F Rspack \u6784\u5EFA",id:"\u5F00\u542F-rspack-\u6784\u5EFA",depth:3},{text:"\u914D\u7F6E",id:"\u914D\u7F6E",depth:3},{text:"bundler",id:"bundler",depth:4},{text:"builderConfig",id:"builderconfig",depth:4},{text:"\u547D\u4EE4\u884C",id:"\u547D\u4EE4\u884C",depth:3},{text:"storybook dev",id:"storybook-dev",depth:4},{text:"storybook build",id:"storybook-build",depth:4},{text:"\u914D\u7F6E\u6587\u4EF6",id:"\u914D\u7F6E\u6587\u4EF6",depth:3},{text:"\u4ECE V6 \u8FC1\u79FB\u81F3 V7",id:"\u4ECE-v6-\u8FC1\u79FB\u81F3-v7",depth:2},{text:"V6 (legacy)",id:"v6-legacy",depth:2},{text:"\u5F00\u542F Storybook",id:"\u5F00\u542F-storybook-1",depth:3},{text:"\u914D\u7F6E Storybook",id:"\u914D\u7F6E-storybook",depth:3},{text:"\u6784\u5EFA Storybook \u4EA7\u7269",id:"\u6784\u5EFA-storybook-\u4EA7\u7269",depth:3}],title:"\u4F7F\u7528 Storybook",frontmatter:{sidebar_position:5}}}}]);