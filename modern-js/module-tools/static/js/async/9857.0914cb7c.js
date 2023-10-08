(self.webpackChunk_modern_js_module_tools_docs=self.webpackChunk_modern_js_module_tools_docs||[]).push([["9857"],{42345:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return c},frontmatter:function(){return a}});var s=r("15169"),d=r("43932"),i=r("9880"),t=r("23169");function l(e){var n=Object.assign({h1:"h1",a:"a",p:"p",ul:"ul",li:"li",code:"code",h2:"h2",div:"div",pre:"pre",em:"em"},(0,t.useMDXComponents)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.h1,{id:"buildpreset",children:["buildPreset",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#buildpreset",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"\u6784\u5EFA\u7684\u9884\u8BBE\u5B57\u7B26\u4E32\u6216\u8005\u9884\u8BBE\u51FD\u6570\u3002\u63D0\u4F9B\u5F00\u7BB1\u5373\u7528\u7684\u6784\u5EFA\u914D\u7F6E\u3002"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["\u7C7B\u578B\uFF1A",(0,i.jsx)(n.code,{children:"string | Function"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["\u9ED8\u8BA4\u503C: ",(0,i.jsx)(n.code,{children:"undefined"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.h2,{id:"npm-library",children:[(0,i.jsx)(n.code,{children:"npm-library"}),(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#npm-library",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["\u5728\u7C7B ",(0,i.jsx)(n.a,{href:"https://www.npmjs.com/",target:"_blank",rel:"noopener noreferrer",children:"NPM"})," \u5305\u7BA1\u7406\u5668\u4E0B\u4F7F\u7528\u7684 Library \u901A\u7528\u6A21\u5F0F\uFF0C\u5305\u542B ",(0,i.jsx)(n.code,{children:"esm"})," \u548C ",(0,i.jsx)(n.code,{children:"cjs"})," \u4E24\u79CD Bundle \u4EA7\u7269\uFF0C\u5E76\u4E14\u5305\u542B\u4E00\u4EFD\u7C7B\u578B\u6587\u4EF6\u3002"]}),"\n",(0,i.jsxs)(n.div,{className:"rspress-directive info",children:[(0,i.jsx)(n.div,{className:"rspress-directive-title",children:"INFO"}),(0,i.jsxs)(n.div,{className:"rspress-directive-content",children:[(0,i.jsxs)(n.p,{children:["\u5173\u4E8E\u7C7B ",(0,i.jsx)(n.a,{href:"https://www.npmjs.com/",target:"_blank",rel:"noopener noreferrer",children:"NPM"})," \u5305\u7BA1\u7406\u5668"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://www.npmjs.com",target:"_blank",rel:"noopener noreferrer",children:"npm"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://yarnpkg.com/",target:"_blank",rel:"noopener noreferrer",children:"yarn"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://pnpm.io/",target:"_blank",rel:"noopener noreferrer",children:"pnpm"})}),"\n"]}),"\n"]})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",meta:'title="package.json"',children:'{\n  "main": "./dist/lib/index.js",\n  "module": "./dist/es/index.js",\n  "types": "./dist/types/index.d.ts"\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"\u9884\u8BBE\u5B57\u7B26\u4E32\u5BF9\u5E94\u7684\u6784\u5EFA\u914D\u7F6E\uFF1A"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"export const buildConfig = [\n  {\n    format: 'cjs',\n    target: 'es6',\n    buildType: 'bundle',\n    outDir: './dist/lib',\n  },\n  {\n    format: 'esm',\n    target: 'es6',\n    buildType: 'bundle',\n    outDir: './dist/es',\n  },\n  {\n    buildType: 'bundle',\n    outDir: './dist/types',\n    dts: {\n      only: true,\n    },\n  },\n];\n"})}),"\n",(0,i.jsxs)(n.h2,{id:"npm-library-with-umd",children:[(0,i.jsx)(n.code,{children:"npm-library-with-umd"}),(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#npm-library-with-umd",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["\u5728\u7C7B ",(0,i.jsx)(n.a,{href:"https://www.npmjs.com/",target:"_blank",rel:"noopener noreferrer",children:"NPM"})," \u5305\u7BA1\u7406\u5668\u4E0B\u4F7F\u7528\uFF0C\u5E76\u4E14 Library \u652F\u6301\u7C7B\u4F3C ",(0,i.jsx)(n.a,{href:"https://unpkg.com/",target:"_blank",rel:"noopener noreferrer",children:"unpkg"})," \u7684\u6A21\u5F0F\u3002\u5728\u9884\u8BBE ",(0,i.jsx)(n.code,{children:"'npm-library'"})," \u7684\u57FA\u7840\u4E0A\uFF0C\u989D\u5916\u63D0\u4F9B ",(0,i.jsx)(n.code,{children:"umd"})," \u4EA7\u7269\u3002"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",meta:'title="package.json"',children:'{\n    "main": "./dist/lib/index.js",\n    "module": "./dist/es/index.js",\n    "types": "./dist/types/index.d.ts",\n    "unpkg": "./dist/umd/index.js",\n};\n'})}),"\n",(0,i.jsx)(n.p,{children:"\u9884\u8BBE\u5B57\u7B26\u4E32\u5BF9\u5E94\u7684\u6784\u5EFA\u914D\u7F6E\uFF1A"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"export const buildConfig = [\n  {\n    format: 'cjs',\n    target: 'es6',\n    buildType: 'bundle',\n    outDir: './dist/lib',\n  },\n  {\n    format: 'esm',\n    target: 'es6',\n    buildType: 'bundle',\n    outDir: './dist/es',\n  },\n  {\n    format: 'umd',\n    target: 'es6',\n    platform: 'browser',\n    buildType: 'bundle',\n    outDir: './dist/umd',\n  },\n  {\n    buildType: 'bundle',\n    outDir: './dist/types',\n    dts: {\n      only: true,\n    },\n  },\n];\n"})}),"\n",(0,i.jsxs)(n.h2,{id:"npm-component",children:[(0,i.jsx)(n.code,{children:"npm-component"}),(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#npm-component",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["\u5728\u7C7B ",(0,i.jsx)(n.a,{href:"https://www.npmjs.com/",target:"_blank",rel:"noopener noreferrer",children:"NPM"})," \u5305\u7BA1\u7406\u5668\u4E0B\u4F7F\u7528\u7684 \u7EC4\u4EF6\uFF08\u5E93\uFF09\u901A\u7528\u6A21\u5F0F\u3002\u5305\u542B ",(0,i.jsx)(n.code,{children:"esm"})," \u548C ",(0,i.jsx)(n.code,{children:"cjs"})," \u4E24\u79CD Bundleless \u4EA7\u7269\uFF08\u4FBF\u4E8E ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.a,{href:"https://developer.mozilla.org/zh-CN/docs/Glossary/Tree_shaking",target:"_blank",rel:"noopener noreferrer",children:"Tree shaking"})})," \u4F18\u5316\uFF09\uFF0C\u4EE5\u53CA\u5305\u542B\u4E00\u4EFD\u7C7B\u578B\u6587\u4EF6\u3002"]}),"\n",(0,i.jsx)(n.p,{children:"\u5BF9\u4E8E\u6E90\u7801\u4E2D\u5305\u542B\u7684\u6837\u5F0F\u6587\u4EF6\uFF0C\u4EA7\u7269\u4E2D\u63D0\u4F9B\u6837\u5F0F\u7684\u7F16\u8BD1\u4EA7\u7269\u548C\u6837\u5F0F\u7684\u6E90\u6587\u4EF6\u3002"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",meta:'title="package.json"',children:'{\n    "main": "./dist/lib/index.js", // bundleless type\n    "module": "./dist/es/index.js", // bundleless type\n    "types": "./dist/types/index.d.ts",\n};\n'})}),"\n",(0,i.jsx)(n.p,{children:"\u9884\u8BBE\u5B57\u7B26\u4E32\u5BF9\u5E94\u7684\u6784\u5EFA\u914D\u7F6E\uFF1A"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"export const buildConfig = [\n  {\n    format: 'cjs',\n    target: 'es6',\n    buildType: 'bundleless',\n    outDir: './dist/lib',\n  },\n  {\n    format: 'esm',\n    target: 'es6',\n    buildType: 'bundleless',\n    outDir: './dist/es',\n  },\n  {\n    buildType: 'bundleless',\n    outDir: './dist/types',\n    dts: {\n      only: true,\n    },\n  },\n];\n"})}),"\n",(0,i.jsxs)(n.h2,{id:"npm-component-with-umd",children:[(0,i.jsx)(n.code,{children:"npm-component-with-umd"}),(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#npm-component-with-umd",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["\u5728\u7C7B ",(0,i.jsx)(n.a,{href:"https://www.npmjs.com/",target:"_blank",rel:"noopener noreferrer",children:"NPM"})," \u5305\u7BA1\u7406\u5668\u4E0B\u4F7F\u7528\u7684\u7EC4\u4EF6\uFF08\u5E93\uFF09\uFF0C\u540C\u65F6\u652F\u6301\u7C7B ",(0,i.jsx)(n.a,{href:"https://unpkg.com/",target:"_blank",rel:"noopener noreferrer",children:"unpkg"})," \u7684\u6A21\u5F0F\u3002 \u5728\u9884\u8BBE ",(0,i.jsx)(n.code,{children:"'npm-component'"})," \u7684\u57FA\u7840\u4E0A\uFF0C\u989D\u5916\u63D0\u4F9B ",(0,i.jsx)(n.code,{children:"umd"})," \u4EA7\u7269\u3002"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",meta:'title="package.json"',children:'{\n    "main": "./dist/lib/index.js", // bundleless type\n    "module": "./dist/es/index.js", // bundleless type\n    "types": "./dist/types/index.d.ts",\n    "unpkg": "./dist/umd/index.js",\n};\n'})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"export const buildConfig = [\n  {\n    format: 'cjs',\n    target: 'es6',\n    buildType: 'bundleless',\n    outDir: './dist/lib',\n  },\n  {\n    format: 'esm',\n    target: 'es6',\n    buildType: 'bundleless',\n    outDir: './dist/es',\n  },\n  {\n    format: 'umd',\n    target: 'es6',\n    platform: 'browser',\n    buildType: 'bundle',\n    outDir: './dist/umd',\n  },\n  {\n    buildType: 'bundleless',\n    outDir: './dist/types',\n    dts: {\n      only: true,\n    },\n  },\n];\n"})}),"\n",(0,i.jsxs)(n.h2,{id:"npm-library-es5esnext",children:[(0,i.jsx)(n.code,{children:"npm-library-{es5...esnext}"}),(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#npm-library-es5esnext",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["\u5F53\u60F3\u8981\u4F7F\u7528\u652F\u6301\u5176\u4ED6 ECMAScript \u7248\u672C\u7684 ",(0,i.jsx)(n.code,{children:"buildPreset"})," \u9884\u8BBE\u7684\u65F6\u5019\uFF0C\u53EF\u4EE5\u76F4\u63A5\u5728 ",(0,i.jsx)(n.code,{children:"'npm-library'"}),"\u3001",(0,i.jsx)(n.code,{children:"'npm-library-with-umd'"}),"\u3001",(0,i.jsx)(n.code,{children:"'npm-component'"}),"\u3001",(0,i.jsx)(n.code,{children:"'npm-component-with-umd'"})," \u8FD9\u4E9B\u9884\u8BBE\u503C\u540E\u9762\u589E\u52A0\u60F3\u8981\u652F\u6301\u7684\u7248\u672C\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["\u4F8B\u5982\u5E0C\u671B ",(0,i.jsx)(n.code,{children:"'npm-library'"})," \u9884\u8BBE\u652F\u6301 ",(0,i.jsx)(n.code,{children:"'es2017'"}),"\uFF0C\u5219\u53EF\u4EE5\u6309\u7167\u5982\u4E0B\u65B9\u5F0F\u914D\u7F6E\uFF1A"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",meta:'title="modern.config.ts"',children:"import { defineConfig } from '@modern-js/module-tools';\n\nexport default defineConfig({\n  buildPreset: 'npm-library-es2017',\n});\n"})}),"\n",(0,i.jsxs)(n.h2,{id:"string--function",children:["string / Function",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#string--function",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["buildPreset \u9664\u4E86\u652F\u6301\u57FA\u672C\u7684\u5B57\u7B26\u4E32\u5F62\u5F0F\uFF0C\u8FD8\u652F\u6301\u51FD\u6570\u5F62\u5F0F\uFF0C\u53EF\u4EE5\u901A\u8FC7 ",(0,i.jsx)(n.code,{children:"preset"})," \u6216\u8005 ",(0,i.jsx)(n.code,{children:"extendPreset"})," \u53C2\u6570\u83B7\u53D6\u6211\u4EEC\u63D0\u4F9B\u7684\u9884\u8BBE\u503C\uFF0C\u7136\u540E\u8FDB\u884C\u4FEE\u6539\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["\u4EE5\u4E0B\u662F\u4E24\u4E2A\u5206\u522B\u4F7F\u7528 ",(0,i.jsx)(n.code,{children:"preset"})," \u548C ",(0,i.jsx)(n.code,{children:"extendPreset"})," \u7684\u4F8B\u5B50\uFF1A"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",meta:'title="modern.config.ts"',children:"import { defineConfig } from '@modern-js/module-tools';\n\nexport default defineConfig({\n  buildPreset({ preset }) {\n    const { NPM_LIBRARY } = preset;\n    return NPM_LIBRARY.map(config => {\n      config.define = {\n        VERSION: '1.0.1',\n      };\n      return config;\n    });\n  },\n});\n"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"extendPreset"})," \u91CC\u4F1A\u4F7F\u7528 lodash.merge \u8FDB\u884C\u914D\u7F6E\u5408\u5E76"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import { defineConfig } from '@modern-js/module-tools';\n\nexport default defineConfig({\n  buildPreset({ extendPreset }) {\n    return extendPreset('npm-library', {\n      define: {\n        VERSION: '1.0.1',\n      },\n    });\n  },\n});\n"})})]})}function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,t.useMDXComponents)(),e.components).wrapper;return n?(0,i.jsx)(n,(0,d._)((0,s._)({},e),{children:(0,i.jsx)(l,(0,s._)({},e))})):l(e)}var c=o;o.__RSPRESS_PAGE_META={},o.__RSPRESS_PAGE_META["zh%2Fapi%2Fconfig%2Fbuild-preset.mdx"]={toc:[{text:"npm-library",id:"npm-library",depth:2},{text:"npm-library-with-umd",id:"npm-library-with-umd",depth:2},{text:"npm-component",id:"npm-component",depth:2},{text:"npm-component-with-umd",id:"npm-component-with-umd",depth:2},{text:"npm-library-{es5...esnext}",id:"npm-library-es5esnext",depth:2},{text:"string / Function",id:"string--function",depth:2}],title:"buildPreset"};var a={sidebar_position:2}}}]);