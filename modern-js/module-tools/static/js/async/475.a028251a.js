(self.webpackChunk_modern_js_module_tools_docs=self.webpackChunk_modern_js_module_tools_docs||[]).push([["475"],{17445:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return a},frontmatter:function(){return c}});var s=r("15169"),t=r("43932"),i=r("9880"),d=r("23169");function o(e){var n=Object.assign({h1:"h1",a:"a",p:"p",ul:"ul",li:"li",strong:"strong",code:"code",h3:"h3",div:"div",pre:"pre",em:"em",h2:"h2"},(0,d.useMDXComponents)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.h1,{id:"buildpreset",children:["buildPreset",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#buildpreset",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"A build preset string or preset function. Provides out-of-the-box build configuration"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Type"}),": ",(0,i.jsx)(n.code,{children:"string | Function"})]}),"\n"]}),"\n",(0,i.jsxs)(n.h3,{id:"npm-library",children:[(0,i.jsx)(n.code,{children:"npm-library"}),(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#npm-library",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["Library generic schema used under class ",(0,i.jsx)(n.a,{href:"https://www.npmjs.com/",target:"_blank",rel:"noopener noreferrer",children:"NPM"})," package manager, contains ",(0,i.jsx)(n.code,{children:"esm"})," and ",(0,i.jsx)(n.code,{children:"cjs"})," Bundle products, and includes a type file."]}),"\n",(0,i.jsxs)(n.div,{className:"rspress-directive info",children:[(0,i.jsx)(n.div,{className:"rspress-directive-title",children:"INFO"}),(0,i.jsxs)(n.div,{className:"rspress-directive-content",children:[(0,i.jsxs)(n.p,{children:["About the class ",(0,i.jsx)(n.a,{href:"https://www.npmjs.com/",target:"_blank",rel:"noopener noreferrer",children:"NPM"})," Package Manager"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://www.npmjs.com",target:"_blank",rel:"noopener noreferrer",children:"npm"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://yarnpkg.com/",target:"_blank",rel:"noopener noreferrer",children:"yarn"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://pnpm.io/",target:"_blank",rel:"noopener noreferrer",children:"pnpm"})}),"\n"]}),"\n"]})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",meta:'title="package.json"',children:'{\n  "main": ". /dist/lib/index.js",\n  "module": ". /dist/es/index.js",\n  "types": ". /dist/types/index.d.ts"\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"The build configuration corresponding to the preset string."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"export const buildConfig = [\n  {\n    format: 'cjs',\n    target: 'es6',\n    buildType: 'bundle',\n    outDir: './dist/lib',\n  },\n  {\n    format: 'esm',\n    target: 'es6',\n    buildType: 'bundle',\n    outDir: './dist/es',\n  },\n  {\n    buildType: 'bundle',\n    outDir: './dist/types',\n    dts: {\n      only: true,\n    },\n  },\n];\n"})}),"\n",(0,i.jsxs)(n.h3,{id:"npm-library-with-umd",children:[(0,i.jsx)(n.code,{children:"npm-library-with-umd"}),(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#npm-library-with-umd",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["Used under class ",(0,i.jsx)(n.a,{href:"https://www.npmjs.com/",target:"_blank",rel:"noopener noreferrer",children:"NPM"})," package manager, and Library supports a similar pattern to ",(0,i.jsx)(n.a,{href:"https://unpkg.com/",target:"_blank",rel:"noopener noreferrer",children:"unpkg"}),". Additional ",(0,i.jsx)(n.code,{children:"umd"})," artifacts are provided on top of the pre-defined ",(0,i.jsx)(n.code,{children:"npm-library"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",meta:'title="package.json"',children:'{\n    "main": ". /dist/lib/index.js",\n    "module": ". /dist/es/index.js",\n    "types": ". /dist/types/index.d.ts",\n    "unpkg": ". /dist/umd/index.js",\n};\n'})}),"\n",(0,i.jsx)(n.p,{children:"The build configuration corresponding to the preset string."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"export const buildConfig = [\n  {\n    format: 'cjs',\n    target: 'es6',\n    buildType: 'bundle',\n    outDir: './dist/lib',\n  },\n  {\n    format: 'esm',\n    target: 'es6',\n    buildType: 'bundle',\n    outDir: './dist/es',\n  },\n  {\n    format: 'umd',\n    target: 'es6',\n    platform: 'browser',\n    buildType: 'bundle',\n    outDir: './dist/umd',\n  },\n  {\n    buildType: 'bundle',\n    outDir: './dist/types',\n    dts: {\n      only: true,\n    },\n  },\n];\n"})}),"\n",(0,i.jsxs)(n.h3,{id:"npm-component",children:[(0,i.jsx)(n.code,{children:"npm-component"}),(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#npm-component",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["A generic pattern for components (libraries) used under the class ",(0,i.jsx)(n.a,{href:"https://www.npmjs.com/",target:"_blank",rel:"noopener noreferrer",children:"NPM"})," package manager. Contains both ",(0,i.jsx)(n.code,{children:"esm"})," and ",(0,i.jsx)(n.code,{children:"cjs"})," Bundleless artifacts (for easy ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.a,{href:"https://developer.mozilla.org/zh-CN/docs/Glossary/Tree_shaking",target:"_blank",rel:"noopener noreferrer",children:"Tree shaking"})})," optimization), as well as including a copy of the type file."]}),"\n",(0,i.jsx)(n.p,{children:"For style files included in the source code, the artifacts provide the compiled files of the style and the source file of the style."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",meta:'title="package.json"',children:'{\n    "main": ". /dist/lib/index.js", // bundleless type\n    "module": ". /dist/es/index.js", // bundleless type\n    "types": ". /dist/types/index.d.ts",\n};\n'})}),"\n",(0,i.jsx)(n.p,{children:"The pre-defined strings correspond to the build configuration."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"export const buildConfig = [\n  {\n    format: 'cjs',\n    target: 'es6',\n    buildType: 'bundleless',\n    outDir: './dist/lib',\n  },\n  {\n    format: 'esm',\n    target: 'es6',\n    buildType: 'bundleless',\n    outDir: './dist/es',\n  },\n  {\n    buildType: 'bundleless',\n    outDir: './dist/types',\n    dts: {\n      only: true,\n    },\n  },\n];\n"})}),"\n",(0,i.jsxs)(n.h3,{id:"npm-component-with-umd",children:[(0,i.jsx)(n.code,{children:"npm-component-with-umd"}),(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#npm-component-with-umd",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["Component (library) used under class ",(0,i.jsx)(n.a,{href:"https://www.npmjs.com/",target:"_blank",rel:"noopener noreferrer",children:"NPM"})," package manager, with support for class ",(0,i.jsx)(n.a,{href:"https://unpkg.com/",target:"_blank",rel:"noopener noreferrer",children:"unpkg"})," schema. Additional ",(0,i.jsx)(n.code,{children:"umd"})," artifacts are provided on top of the pre-defined ",(0,i.jsx)(n.code,{children:"npm-component"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",meta:'title="package.json"',children:'{\n    "main": ". /dist/lib/index.js", // bundleless type\n    "module": ". /dist/es/index.js", // bundleless type\n    "types": ". /dist/types/index.d.ts",\n    "unpkg": ". /dist/umd/index.js",\n};\n'})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"export const buildConfig = [\n  {\n    format: 'cjs',\n    target: 'es6',\n    buildType: 'bundleless',\n    outDir: './dist/lib',\n  },\n  {\n    format: 'esm',\n    target: 'es6',\n    buildType: 'bundleless',\n    outDir: './dist/es',\n  },\n  {\n    format: 'umd',\n    target: 'es6',\n    platform: 'browser',\n    buildType: 'bundle',\n    outDir: './dist/umd',\n  },\n  {\n    buildType: 'bundleless',\n    outDir: './dist/types',\n    dts: {\n      only: true,\n    },\n  },\n];\n"})}),"\n",(0,i.jsxs)(n.h3,{id:"npm-library-es5esnext",children:[(0,i.jsx)(n.code,{children:"npm-library-{es5...esnext}"}),(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#npm-library-es5esnext",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["When you want to use a ",(0,i.jsx)(n.code,{children:"buildPreset"})," preset that supports other ECMAScript versions, you can directly add the supported versions to the ",(0,i.jsx)(n.code,{children:"'npm-library'"}),", ",(0,i.jsx)(n.code,{children:"'npm-library-with-umd'"}),", ",(0,i.jsx)(n.code,{children:"'npm-component'"}),", ",(0,i.jsx)(n.code,{children:"'npm-component-with-umd'"})," presets."]}),"\n",(0,i.jsxs)(n.p,{children:["For example, if you want the ",(0,i.jsx)(n.code,{children:"'npm-library'"})," preset to support ",(0,i.jsx)(n.code,{children:"'es2017'"}),", you can configure it as follows."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",meta:'title="modern.config.ts"',children:"import { defineConfig } from '@modern-js/module-tools';\n\nexport default defineConfig({\n  buildPreset: 'npm-library-es2017',\n});\n"})}),"\n",(0,i.jsxs)(n.h2,{id:"string--function",children:["string / function",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#string--function",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"The buildPreset not only supports basic string forms, but also function forms, which can obtain the default values we provide through the preset or extend Preset parameter and then modify them."}),"\n",(0,i.jsx)(n.p,{children:"Here are two examples using preset and extend Preset:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",meta:'title="modern.config.ts"',children:"import { defineConfig } from '@modern-js/module-tools';\n\nexport default defineConfig({\n  buildPreset({ preset }) {\n    const { NPM_LIBRARY } = preset;\n    return NPM_LIBRARY.map(config => {\n      config.define = {\n        VERSION: '1.0.1',\n      };\n      return config;\n    });\n  },\n});\n"})}),"\n",(0,i.jsxs)(n.p,{children:["In the ",(0,i.jsx)(n.code,{children:"extend Preset"}),", lodash.merge is used for configuration merge."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import { defineConfig } from '@modern-js/module-tools';\n\nexport default defineConfig({\n  buildPreset({ extendPreset }) {\n    return extendPreset('npm-library', {\n      define: {\n        VERSION: '1.0.1',\n      },\n    });\n  },\n});\n"})})]})}function l(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,d.useMDXComponents)(),e.components).wrapper;return n?(0,i.jsx)(n,(0,t._)((0,s._)({},e),{children:(0,i.jsx)(o,(0,s._)({},e))})):o(e)}var a=l;l.__RSPRESS_PAGE_META={},l.__RSPRESS_PAGE_META["en%2Fapi%2Fconfig%2Fbuild-preset.mdx"]={toc:[{text:"npm-library",id:"npm-library",depth:3},{text:"npm-library-with-umd",id:"npm-library-with-umd",depth:3},{text:"npm-component",id:"npm-component",depth:3},{text:"npm-component-with-umd",id:"npm-component-with-umd",depth:3},{text:"npm-library-{es5...esnext}",id:"npm-library-es5esnext",depth:3},{text:"string / function",id:"string--function",depth:2}],title:"buildPreset"};var c={sidebar_position:2}}}]);