/*! For license information please see 3760.a3abbc2c.js.LICENSE.txt */
(self.webpackChunk_modern_js_module_tools_docs=self.webpackChunk_modern_js_module_tools_docs||[]).push([["3760"],{6470:function(e,n,i){"use strict";i.r(n);var r=i("39980"),s=i("9580");function o(e){let n=Object.assign({h1:"h1",a:"a",p:"p",strong:"strong",h2:"h2",h3:"h3",code:"code",pre:"pre",ul:"ul",li:"li",ol:"ol",h4:"h4",img:"img"},(0,s.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"build-faq",children:["Build FAQ",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#build-faq",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"Here only some common problems and bad cases are recorded."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsxs)(n.strong,{children:["If the build products do not meet expectations, especially when ",(0,r.jsx)(n.a,{href:"/api/config/build-preset",children:"buildPreset"})," is configured,\nplease first understand what configuration items buildPreset represents, and then check each configuration item based on all configuration items."]})}),"\n",(0,r.jsxs)(n.h2,{id:"product-faq",children:["Product FAQ",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#product-faq",children:"#"})]}),"\n",(0,r.jsxs)(n.h3,{id:"initialization-of-class-fields",children:["Initialization of Class Fields",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#initialization-of-class-fields",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["TypeSript provides the ",(0,r.jsx)(n.code,{children:"useDefineForClassFields"})," configuration to control the conversion handling for ",(0,r.jsx)(n.code,{children:"public class fields"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"If we have a piece of code:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"class C {\n  foo = 100;\n  bar: string;\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["When ",(0,r.jsx)(n.code,{children:"useDefineForClassFields"})," is ",(0,r.jsx)(n.code,{children:"false"}),", then the compiled code will look like:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"class C {\n  constructor() {\n    this.foo = 100;\n  }\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["When ",(0,r.jsx)(n.code,{children:"useDefineForClassFields"})," is ",(0,r.jsx)(n.code,{children:"true"}),", then the compiled code will look like:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"class C {\n  constructor() {\n    Object.defineProperty(this, 'foo', {\n      enumerable: true,\n      configurable: true,\n      writable: true,\n      value: 100,\n    });\n    Object.defineProperty(this, 'bar', {\n      enumerable: true,\n      configurable: true,\n      writable: true,\n      value: void 0,\n    });\n  }\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Also the default value of this configuration will change depending on the ",(0,r.jsx)(n.a,{href:"https://www.typescriptlang.org/tsconfig#target",target:"_blank",rel:"noopener noreferrer",children:(0,r.jsx)(n.code,{children:"target"})})," configuration of tsconfig.json: When ",(0,r.jsx)(n.code,{children:"target"})," is ES2022 or higher, then ",(0,r.jsx)(n.code,{children:"useDefineForClassFields"})," is configured to ",(0,r.jsx)(n.code,{children:"true"})," by default, otherwise it defaults to ",(0,r.jsx)(n.code,{children:"false"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"For more information on this configuration of TypeScript, you can refer to the following link:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-7.html#the-usedefineforclassfields-flag-and-the-declare-property-modifier",target:"_blank",rel:"noopener noreferrer",children:"The useDefineForClassFields Flag and The declare Property Modifier"})}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"The Modern.js Module will currently process according to the following logic:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["The first decision to enable this feature inside Modern.js Module is based on the ",(0,r.jsx)(n.code,{children:"useDefineForClassFields"})," configuration in tsconfig.json of the current project. Currently, only the contents of the tsconfig.json file under the current project path will be read, and the final tsconfig configuration based on the ",(0,r.jsx)(n.a,{href:"https://www.typescriptlang.org/tsconfig#extends",target:"_blank",rel:"noopener noreferrer",children:(0,r.jsx)(n.code,{children:"extends"})})," configuration is not supported at this time."]}),"\n",(0,r.jsxs)(n.li,{children:["If the ",(0,r.jsx)(n.code,{children:"useDefineForClassFields"})," configuration of tsconfig.json is not detected, the default value is determined based on the ",(0,r.jsx)(n.code,{children:"target"})," configuration of tsconfig.json. If ",(0,r.jsx)(n.code,{children:"target"})," is greater than ",(0,r.jsx)(n.code,{children:"ES2022"})," (including ",(0,r.jsx)(n.code,{children:"EsNext"}),"), then ",(0,r.jsx)(n.code,{children:"useDefineForClassFields"})," defaults to ",(0,r.jsx)(n.code,{children:"true"}),", otherwise it is ",(0,r.jsx)(n.code,{children:"false"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["If the ",(0,r.jsx)(n.code,{children:"target"})," of tsconfig.json is not detected, it is processed according to the value of ",(0,r.jsx)(n.code,{children:"useDefineForClassFields"})," as ",(0,r.jsx)(n.code,{children:"true"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.h3,{id:"babel-plugin-lodash-treats-the-introduced-lodash-as-undefined",children:["babel-plugin-lodash treats the introduced lodash as ",(0,r.jsx)(n.code,{children:"undefined"}),(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#babel-plugin-lodash-treats-the-introduced-lodash-as-undefined",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"This problem occurs when using something like the following:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"import * as Lodash from 'lodash';\n\nexport const libs = {\n  _: Lodash,\n};\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Current related issues on the ",(0,r.jsx)(n.code,{children:"babel-plugin-lodash"})," Github:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://github.com/lodash/babel-plugin-lodash/issues/235",target:"_blank",rel:"noopener noreferrer",children:"#235"})}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["The solution to this problem is to remove ",(0,r.jsx)(n.code,{children:"babel-plugin-lodash"}),", since the plugin is not needed for on-demand referencing at this point and using it would have side effects."]}),"\n",(0,r.jsxs)(n.p,{children:["A similar situation occurs with ",(0,r.jsx)(n.code,{children:"babel-plugin-import"}),". If there is code like the following:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"import * as Comps from 'components';\n\nexport const libs = {\n  comps: Comps,\n};\n"})}),"\n",(0,r.jsxs)(n.p,{children:["In this case ",(0,r.jsx)(n.code,{children:"babel-plugin-import"})," may also cause ",(0,r.jsx)(n.code,{children:"Comps"})," to become ",(0,r.jsx)(n.code,{children:"undefined"}),". So you need to remove the corresponding ",(0,r.jsx)(n.code,{children:"babel-plugin-import"})," as well."]}),"\n",(0,r.jsxs)(n.h3,{id:"cannot-find-module-http",children:["Cannot find module http",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#cannot-find-module-http",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["If the output reports an error like ",(0,r.jsx)(n.code,{children:"Cannot find module 'http'"})," at browser runtime, it means that your output has bundled node modules.\nThis may occur if some of your dependencies support both browser and node, such as ",(0,r.jsx)(n.code,{children:"axios"}),", in which case you only need to set the ",(0,r.jsx)(n.a,{href:"/api/config/build-config#platform",children:"platform"})," to ",(0,r.jsx)(n.code,{children:"browser"}),".\nIf some third-party packages don't support the browser, you may need to manually inject ",(0,r.jsx)(n.a,{href:"/plugins/official-list/plugin-node-polyfill",children:"node polyfill"}),"."]}),"\n",(0,r.jsxs)(n.h2,{id:"exceptions-faq",children:["Exceptions FAQ",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#exceptions-faq",children:"#"})]}),"\n",(0,r.jsxs)(n.h3,{id:"dynamic-require-of-react-is-not-supported",children:['Dynamic require of "react" is not supported',(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#dynamic-require-of-react-is-not-supported",children:"#"})]}),"\n",(0,r.jsxs)(n.h4,{id:"problem-description",children:["Problem Description",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#problem-description",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"When the product format in the product configuration of the build is ES modules."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"export default defineConfig({\n  buildConfig: {\n    format: 'esm',\n  },\n});\n"})}),"\n",(0,r.jsx)(n.p,{children:"If you import a cjs product from a third-party npm package, the resulting product may not work properly under webpack."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/shylnyhaeh7uldvivhn/1280X1280.png",alt:""})}),"\n",(0,r.jsxs)(n.h4,{id:"solution",children:["Solution",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#solution",children:"#"})]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"First you need to find which third-party package is causing the problem"}),". For example, if the error message points to the ",(0,r.jsx)(n.code,{children:"react"})," package, then look for a third-party package that has code like ",(0,r.jsx)(n.code,{children:"require('react')"})," in it. For example ",(0,r.jsx)(n.a,{href:"https://www.npmjs.com/package/react-draggable",target:"_blank",rel:"noopener noreferrer",children:(0,r.jsx)(n.code,{children:"react-draggable"})}),", which only contains ",(0,r.jsx)(n.code,{children:"cjs"})," artifacts, then the problem is localized to the ",(0,r.jsx)(n.code,{children:"react-draggable"})," package."]}),"\n",(0,r.jsxs)(n.li,{children:["Then we need to exclude this package with the following configuration, i.e. ",(0,r.jsx)(n.strong,{children:"not package problematic third-party packages"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"export default defineConfig({\n  buildConfig: {\n    externals: ['react-draggable'],\n  },\n});\n"})}),"\n",(0,r.jsxs)(n.h4,{id:"reference-links",children:["Reference Links",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#reference-links",children:"#"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://stackoverflow.com/questions/68423950/when-using-esbuild-with-external-react-i-get-dynamic-require-of-react-is-not-s",target:"_blank",rel:"noopener noreferrer",children:'When using esbuild with external react I get Dynamic require of "react" is not supported'})}),"\n"]}),"\n",(0,r.jsxs)(n.h3,{id:"during-compilation-an-error-was-reported-in-the-less-file-of-a-component-libraryoperation-on-an-invalid-type",children:["During compilation, an error was reported in the less file of a component library:",(0,r.jsx)(n.code,{children:"'Operation on an invalid type'"}),(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#during-compilation-an-error-was-reported-in-the-less-file-of-a-component-libraryoperation-on-an-invalid-type",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["This is probably because the component library depends on Less version v3, while Modern.js Module defaults to v4. v3 and v4 have a Break Change in the ",(0,r.jsx)(n.code,{children:"math"})," configuration, check this ",(0,r.jsx)(n.a,{href:"https://stackoverflow.com/questions/73298187/less-error-operation-on-an-invalid-type-in-antd-dependency",target:"_blank",rel:"noopener noreferrer",children:"link"})," for details."]}),"\n",(0,r.jsx)(n.p,{children:"Therefore, if a component library like this is used in the source code:"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"buildPreset"})," is used in the build configuration, make the following changes:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"module.exports = {\n  buildPreset({ extendPreset }) {\n    return extendPreset('your-build-preset', {\n      style: {\n        less: {\n          lessOptions: {\n            math: 'always',\n          },\n        },\n      },\n    });\n  },\n};\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Or, if a custom ",(0,r.jsx)(n.code,{children:"buildConfig"})," is used, modify it as follows:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"module.exports = {\n  buildConfig: {\n    style: {\n      less: {\n        lessOptions: {\n          math: 'always',\n        },\n      },\n    },\n  },\n};\n"})}),"\n",(0,r.jsx)(n.p,{children:"If you are using a component like this in Storybook, you will need to modify the debugging configuration of Storybook:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",meta:"filename='.storybook/main.ts'",children:"module.exports = {\n  framework: {\n    options: {\n      builderConfig: {\n        tools: {\n          webpackChain(chain, { CHAIN_ID }) {\n            chain.module\n              .rule(CHAIN_ID.RULE.LESS)\n              .use(CHAIN_ID.USE.LESS)\n              .tap(options => {\n                options.lessOptions = {\n                  ...options.lessOptions,\n                  math: 'always',\n                };\n                return options;\n              });\n          },\n        },\n      },\n    },\n  },\n};\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"bundleless-dts-failed",children:["Bundleless DTS failed",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#bundleless-dts-failed",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["In the bundleless scenario, it's ",(0,r.jsx)(n.code,{children:"tsc"})," that generates the type declaration file directly. You can find the problem file by printing the error message in the terminal.\nFor source code files, it is recommended to fix the type problem, which can better enable reuse of your package. However. if you encounter a type checking problem with a thrid-party package:"]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["enable ",(0,r.jsx)(n.a,{href:"https://www.typescriptlang.org/tsconfig#skipLibCheck",target:"_blank",rel:"noopener noreferrer",children:"skipLibCheck"})," to skip the d.ts check of the thrid-party package."]}),"\n",(0,r.jsxs)(n.li,{children:["If the package exports ts files directly, skipLibCheck will not work because it can only skip the d.ts check,\nso you can only turn off ",(0,r.jsx)(n.a,{href:"/api/config/build-config#dtsabortonerror",children:"dts.abortOnError"})," to ignore these errors."]}),"\n"]}),"\n",(0,r.jsxs)(n.h3,{id:"bundle-dts-failed",children:["Bundle DTS failed",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#bundle-dts-failed",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["The Modern.js Module directly uses ",(0,r.jsx)(n.a,{href:"https://github.com/Swatinem/rollup-plugin-dts",target:"_blank",rel:"noopener noreferrer",children:"rollup-plugin-dts"})," to package your type description files.\n",(0,r.jsx)(n.strong,{children:"It may not be able to handle the type files of some third-party dependencies"})]}),"\n",(0,r.jsxs)(n.p,{children:['If you encounter an error message titled "Bundle DTS failed" during the build process of the Modern.js Module, you can observe that the error message is from a third-party dependency.\nTry setting ',(0,r.jsx)(n.a,{href:"/api/config/build-config#dtsrespectexternal",children:(0,r.jsx)(n.code,{children:"dts.respectExternal"})})," to ",(0,r.jsx)(n.code,{children:"false"})," to turn off the behavior of packaging type files of third-party dependencies."]}),"\n",(0,r.jsxs)(n.h3,{id:"error-reported-for-defineconfig-function-type-if-there-is-no-reference-to--then-the-inferred-type-of-default-cannot-be-named",children:["Error reported for ",(0,r.jsx)(n.code,{children:"defineConfig"})," function type: ",(0,r.jsx)(n.code,{children:'If there is no reference to "..." then the inferred type of "default" cannot be named'}),(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#error-reported-for-defineconfig-function-type-if-there-is-no-reference-to--then-the-inferred-type-of-default-cannot-be-named",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["Check if the ",(0,r.jsx)(n.a,{href:"https://www.typescriptlang.org/tsconfig#include",target:"_blank",rel:"noopener noreferrer",children:(0,r.jsx)(n.code,{children:"include"})})," configuration exists in the project's tsconfig.json file, and if not, try adding the following:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "include": ["src"]\n}\n'})}),"\n",(0,r.jsxs)(n.h2,{id:"other-faq",children:["Other FAQ",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#other-faq",children:"#"})]}),"\n",(0,r.jsxs)(n.h3,{id:"how-to-skip-the-pre-processing-of-lessscss-files-with-bundleless",children:["How to skip the pre-processing of less/scss files with bundleless",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#how-to-skip-the-pre-processing-of-lessscss-files-with-bundleless",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["Bundleless is a single-file compilation method. You just need to remove your less/scss files from the entry and copy them to the output.\nNote that we will also rewrite the moduleId of js referencing less/scss, turn it off through the ",(0,r.jsx)(n.a,{href:"/api/config/build-config#redirect",children:"redirect"})," plugin."]}),"\n",(0,r.jsx)(n.p,{children:"Below is an example of skipping less file processing. You will find that all less files in src are copied to dist and the relative path is preserved."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"export default defineConfig({\n  buildConfig: {\n    buildType: 'bundleless',\n    input: ['src', '!src/**/*.less'],\n    redirect: {\n      style: false,\n    },\n    copy: {\n      patterns: [\n        {\n          from: './**/*.less',\n          to: './',\n        },\n      ],\n      options: {\n        enableCopySync: true,\n      },\n    },\n  },\n});\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"add-additional-compilation-feature",children:["Add additional compilation feature",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#add-additional-compilation-feature",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"The Modern.js Module is based on the esbuild implementation, so if you have special needs or want to add additional compilation capabilities, you can do so by implementing the esbuild plugin."}),"\n",(0,r.jsxs)(n.p,{children:["The Modern.js Module provides ",(0,r.jsx)(n.a,{href:"/api/config/build-config#esbuildoptions",children:(0,r.jsx)(n.code,{children:"esbuildOptions"})})," configuration to allow modification of Modern.js's internal esbuild configuration, so that custom esbuild plugins can be added via this configuration:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",meta:'title="modern.config.ts"',children:"import { myEsbuildPlugin } from './myEsbuildPlugin';\n\nexport default defineConfig({\n  buildConfig: {\n    esbuildOptions: options => {\n      options.plugins = [myEsbuildPlugin, ...options.plugins];\n      return options;\n    },\n  },\n});\n"})}),"\n",(0,r.jsx)(n.p,{children:"When adding an esbuild plugin, please note that you need to add the plugin at the beginning of the plugins array. This is because the Modern.js Module is also integrated into the entire build process through an esbuild plugin. Therefore, custom plugins need to be registered with higher priority."}),"\n",(0,r.jsxs)(n.h3,{id:"support-for-generating-typescript-declaration-files-for-css-modules",children:["Support for generating TypeScript declaration files for CSS Modules",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#support-for-generating-typescript-declaration-files-for-css-modules",children:"#"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["First Solution: ",(0,r.jsx)(n.a,{href:"https://github.com/Quramy/typed-css-modules",target:"_blank",rel:"noopener noreferrer",children:"typed-css-modules"})]}),"\n",(0,r.jsxs)(n.li,{children:["Second Solution: ",(0,r.jsx)(n.a,{href:"https://www.npmjs.com/package/@guanghechen/postcss-modules-dts",target:"_blank",rel:"noopener noreferrer",children:"postcss-modules-dts"})]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import { defineConfig } from '@modern-js/module-tools';\n\nexport default defineConfig(async () => {\n  const { dts } = await import('@guanghechen/postcss-modules-dts');\n  return {\n    buildConfig: {\n      style: {\n        modules: { ...dts },\n      },\n    },\n    // custom config\n  };\n});\n"})})]})}function t(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,s.ah)(),e.components);return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}n.default=t,t.__RSPRESS_PAGE_META={},t.__RSPRESS_PAGE_META["en%2Fguide%2Ffaq%2Fbuild.mdx"]={toc:[{text:"Product FAQ",id:"product-faq",depth:2},{text:"Initialization of Class Fields",id:"initialization-of-class-fields",depth:3},{text:"babel-plugin-lodash treats the introduced lodash as `undefined`",id:"babel-plugin-lodash-treats-the-introduced-lodash-as-undefined",depth:3},{text:"Cannot find module http",id:"cannot-find-module-http",depth:3},{text:"Exceptions FAQ",id:"exceptions-faq",depth:2},{text:'Dynamic require of "react" is not supported',id:"dynamic-require-of-react-is-not-supported",depth:3},{text:"Problem Description",id:"problem-description",depth:4},{text:"Solution",id:"solution",depth:4},{text:"Reference Links",id:"reference-links",depth:4},{text:"During compilation, an error was reported in the less file of a component library:`'Operation on an invalid type'`",id:"during-compilation-an-error-was-reported-in-the-less-file-of-a-component-libraryoperation-on-an-invalid-type",depth:3},{text:"Bundleless DTS failed",id:"bundleless-dts-failed",depth:3},{text:"Bundle DTS failed",id:"bundle-dts-failed",depth:3},{text:'Error reported for `defineConfig` function type: `If there is no reference to "..." then the inferred type of "default" cannot be named`',id:"error-reported-for-defineconfig-function-type-if-there-is-no-reference-to--then-the-inferred-type-of-default-cannot-be-named",depth:3},{text:"Other FAQ",id:"other-faq",depth:2},{text:"How to skip the pre-processing of less/scss files with bundleless",id:"how-to-skip-the-pre-processing-of-lessscss-files-with-bundleless",depth:3},{text:"Add additional compilation feature",id:"add-additional-compilation-feature",depth:3},{text:"Support for generating TypeScript declaration files for CSS Modules",id:"support-for-generating-typescript-declaration-files-for-css-modules",depth:3}],title:"Build FAQ",frontmatter:{}}}}]);