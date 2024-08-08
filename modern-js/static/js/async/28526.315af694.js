"use strict";(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["28526"],{86678:function(e,n,r){r.r(n),r.d(n,{default:function(){return a}});var o=r(38093),i=r(75878);function s(e){let n=Object.assign({h1:"h1",a:"a",p:"p",hr:"hr",h3:"h3",ul:"ul",li:"li",code:"code",pre:"pre",ol:"ol",div:"div",strong:"strong"},(0,i.ah)(),e.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.h1,{id:"build-faq",children:["Build FAQ",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#build-faq",children:"#"})]}),"\n",(0,o.jsx)(n.p,{children:"If you encounter any build-related issues, you can refer to the current document for troubleshooting."}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsxs)(n.h3,{id:"rsbuild-faq",children:["Rsbuild FAQ",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#rsbuild-faq",children:"#"})]}),"\n",(0,o.jsxs)(n.p,{children:["Modern.js is internally based on ",(0,o.jsx)(n.a,{href:"https://rsbuild.dev/",target:"_blank",rel:"noopener noreferrer",children:"Rsbuild"})," and encapsulates its own build tool, so you can directly refer to the FAQ document of Rsbuild:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"https://rsbuild.dev/guide/faq/features",target:"_blank",rel:"noopener noreferrer",children:"Rsbuild - Features FAQ"})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"https://rsbuild.dev/guide/faq/exceptions",target:"_blank",rel:"noopener noreferrer",children:"Rsbuild - Exceptions FAQ"})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"https://rsbuild.dev/guide/faq/hmr",target:"_blank",rel:"noopener noreferrer",children:"Rsbuild - HMR FAQ"})}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsxs)(n.h3,{id:"how-to-clear-the-webpack-cache",children:["How to clear the webpack cache?",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#how-to-clear-the-webpack-cache",children:"#"})]}),"\n",(0,o.jsxs)(n.p,{children:["By default, Modern.js's webpack cache is generated in the ",(0,o.jsx)(n.code,{children:"./node_modules/.cache/webpack"})," directory."]}),"\n",(0,o.jsx)(n.p,{children:"If you need to clear the local webpack cache, you can execute the following command:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"rm -rf ./node_modules/.cache\n"})}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsxs)(n.h3,{id:"how-to-view-the-final-generated-webpack--rspack-configuration",children:["How to view the final generated webpack / Rspack configuration?",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#how-to-view-the-final-generated-webpack--rspack-configuration",children:"#"})]}),"\n",(0,o.jsxs)(n.p,{children:["Modern.js provides ",(0,o.jsx)(n.a,{href:"https://modernjs.dev/en/apis/app/commands.html",target:"_blank",rel:"noopener noreferrer",children:"inspect command"})," to view the final Modern.js configuration and webpack / Rspack configuration generated by the project."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"\u279C npx modern inspect\n\nInspect config succeed, open following files to view the content:\n\n  - Builder Config: /root/my-project/dist/builder.config.js\n  - Rspack Config (web): /root/my-project/dist/rspack.config.web.js\n"})}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsxs)(n.h3,{id:"compilation-argument-error-when-webpack-compiling",children:["'compilation' argument error when webpack compiling?",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#compilation-argument-error-when-webpack-compiling",children:"#"})]}),"\n",(0,o.jsx)(n.p,{children:"If the following error occurs when compiling, it is usually caused by installing the wrong version of webpack in the project, or installing multiple versions of webpack:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"TypeError: The 'compilation' argument must be an instance of Compilation\n"})}),"\n",(0,o.jsx)(n.p,{children:"The webpack version problem has the following situations:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"The webpack dependency is directly declared in the project's package.json, and the version range of the webpack that the Modern.js depends on is different and cannot match the same version."}),"\n",(0,o.jsx)(n.li,{children:"Multiple npm packages installed in the project all depend on webpack, and the webpack version ranges they depend on are different and cannot match the same version."}),"\n",(0,o.jsx)(n.li,{children:"Due to the lock mechanism of the package manager, multiple webpack versions are generated in the lock file."}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["In the first case, it is recommended to remove the webpack dependency from the project's package.json. Because Modern.js encapsulates webpack-related capabilities by default, and will pass in the webpack object in the ",(0,o.jsx)(n.a,{href:"/en/configure/app/tools/webpack.html",children:"tools.webpack"})," configuration option. Therefore, in most cases, it is not recommended to install additional webpack dependencies in the project."]}),"\n",(0,o.jsxs)(n.p,{children:["In the second case, it is recommended to see if you can upgrade an npm package so that its dependent webpack version range is consistent with the Modern.js. It is also possible to manually unify versions through the ability of the package manager, e.g. using ",(0,o.jsx)(n.a,{href:"https://classic.yarnpkg.com/lang/en/docs/selective-version-resolutions/",target:"_blank",rel:"noopener noreferrer",children:"yarn resolutions"})," or [pnpm overrides](https ://pnpm.io/package_json#pnpmoverrides)."]}),"\n",(0,o.jsx)(n.p,{children:"If it is the third case, you can use the two methods mentioned in the second case, or you can try to delete the lock file and reinstall it to solve it."}),"\n",(0,o.jsxs)(n.div,{className:"rspress-directive tip",children:[(0,o.jsx)(n.div,{className:"rspress-directive-title",children:"TIP"}),(0,o.jsx)(n.div,{className:"rspress-directive-content",children:(0,o.jsx)(n.p,{children:"Deleting the lock file will automatically upgrade the dependency version in the project to the latest version under the specified scope, please test it thoroughly."})})]}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsxs)(n.h3,{id:"failed-import-other-modules-in-monorepo",children:["Failed import other modules in Monorepo?",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#failed-import-other-modules-in-monorepo",children:"#"})]}),"\n",(0,o.jsxs)(n.p,{children:["Due to considerations of compilation performance, by default, the Modern.js does not compile files under ",(0,o.jsx)(n.code,{children:"node_modules"})," or files outside the current project directory."]}),"\n",(0,o.jsxs)(n.p,{children:["Therefore, when you reference the source code of other sub-projects, you may encounter an error similar to ",(0,o.jsx)(n.code,{children:"You may need an additional loader to handle the result of these loaders."})]}),"\n",(0,o.jsx)(n.p,{children:"There are several solutions to this problem:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["You can enable the source code build mode to compile other sub-projects within the monorepo. Please refer to ",(0,o.jsx)(n.a,{href:"/guides/advanced-features/source-build.html",children:"Source Code Build Mode"})," for more information."]}),"\n",(0,o.jsxs)(n.li,{children:["You can add the ",(0,o.jsx)(n.code,{children:"source.include"})," configuration option to specify the directories or modules that need to be additionally compiled. Please refer to ",(0,o.jsx)(n.a,{href:"/configure/app/source/include.html",children:"Usage of source.include"})," for more information."]}),"\n",(0,o.jsx)(n.li,{children:"You can pre-build the sub-projects that need to be referenced, generate the corresponding build artifacts, and then reference the build artifacts in the current project instead of referencing the source code."}),"\n"]}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsxs)(n.h3,{id:"find-exports-is-not-defined-runtime-error",children:["Find ",(0,o.jsx)(n.code,{children:"exports is not defined"})," runtime error?",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#find-exports-is-not-defined-runtime-error",children:"#"})]}),"\n",(0,o.jsxs)(n.p,{children:["If the compilation is succeed, but the ",(0,o.jsx)(n.code,{children:"exports is not defined"})," error appears after opening the page, it is usually because a CommonJS module is compiled by Babel."]}),"\n",(0,o.jsxs)(n.p,{children:["Under normal circumstances, Modern.js will not use Babel to compile CommonJS modules. If the ",(0,o.jsx)(n.a,{href:"/en/configure/app/source/include.html",children:"source.include"})," configuration option is used in the project, some CommonJS modules may be added to the Babel compilation."]}),"\n",(0,o.jsx)(n.p,{children:"There are two workarounds for this problem:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"Avoid adding CommonJS modules to Babel compilation."}),"\n",(0,o.jsxs)(n.li,{children:["Set Babel's ",(0,o.jsx)(n.code,{children:"sourceType"})," configuration option to ",(0,o.jsx)(n.code,{children:"unambiguous"}),", for example:"]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    babel(config) {\n      config.sourceType = 'unambiguous';\n    },\n  },\n};\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Setting ",(0,o.jsx)(n.code,{children:"sourceType"})," to ",(0,o.jsx)(n.code,{children:"unambiguous"})," may have some other effects, please refer to ",(0,o.jsx)(n.a,{href:"https://babeljs.io/docs/en/options#sourcetype",target:"_blank",rel:"noopener noreferrer",children:"Babel official documentation"}),"."]}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsxs)(n.h3,{id:"compile-error-error-es-modules-may-not-assign-moduleexports-or-exports-use-esm-export-syntax",children:['Compile error "Error: ES Modules may not assign module.exports or exports.*, Use ESM export syntax"?',(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#compile-error-error-es-modules-may-not-assign-moduleexports-or-exports-use-esm-export-syntax",children:"#"})]}),"\n",(0,o.jsxs)(n.p,{children:["If the following error occurs during compilation, it is usually because a CommonJS module is compiled with Babel in the project, and the solution is same as the above ",(0,o.jsx)(n.code,{children:"exports is not defined"})," problem."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"Error: ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: 581\n"})}),"\n",(0,o.jsxs)(n.p,{children:["For more information, please refer to issue: ",(0,o.jsx)(n.a,{href:"https://github.com/babel/babel/issues/12731",target:"_blank",rel:"noopener noreferrer",children:"babel#12731"}),"."]}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsxs)(n.h3,{id:"the-compilation-progress-bar-is-stuck-but-there-is-no-error-log-in-the-terminal",children:["The compilation progress bar is stuck, but there is no Error log in the terminal?",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#the-compilation-progress-bar-is-stuck-but-there-is-no-error-log-in-the-terminal",children:"#"})]}),"\n",(0,o.jsx)(n.p,{children:"When the compilation progress bar is stuck, but there is no Error log on the terminal, it is usually because an exception occurred during the compilation. In some cases, when Error is caught by webpack or other modules, the error log can not be output correctly. The most common scenario is that there is an exception in the Babel config, which is caught by webpack, and webpack swallows the Error in some cases."}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Solution:"})}),"\n",(0,o.jsx)(n.p,{children:"If this problem occurs after you modify the Babel config, it is recommended to check for the following incorrect usages:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"You have configured a plugin or preset that does not exist, maybe the name is misspelled, or it is not installed correctly."}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"// wrong example\nexport default {\n  tools: {\n    babel(config, { addPlugins }) {\n      // The plugin has the wrong name or is not installed\n      addPlugins('babel-plugin-not-exists');\n    },\n  },\n};\n"})}),"\n",(0,o.jsxs)(n.ol,{start:"2",children:["\n",(0,o.jsx)(n.li,{children:"Whether multiple babel-plugin-imports are configured, but the name of each babel-plugin-import is not declared in the third item of the array."}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"// wrong example\nexport default {\n  tools: {\n    babel(config, { addPlugins }) {\n      addPlugins([\n        [\n          'babel-plugin-import',\n          { libraryName: 'antd', libraryDirectory: 'es' },\n        ],\n        [\n          'babel-plugin-import',\n          { libraryName: 'antd-mobile', libraryDirectory: 'es' },\n        ],\n      ]);\n    },\n  },\n};\n"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"// correct example\nexport default {\n  tools: {\n    babel(config, { addPlugins }) {\n      addPlugins([\n        [\n          'babel-plugin-import',\n          { libraryName: 'antd', libraryDirectory: 'es' },\n          'antd',\n        ],\n        [\n          'babel-plugin-import',\n          { libraryName: 'antd-mobile', libraryDirectory: 'es' },\n          'antd-mobile',\n        ],\n      ]);\n    },\n  },\n};\n"})}),"\n",(0,o.jsxs)(n.p,{children:["In addition to the reasons mentioned above, there is another possibility that can cause Babel compilation to hang, which is when Babel compiles a large JS file exceeding 10,000 lines (usually a large file in the node_modules directory that is compiled using ",(0,o.jsx)(n.code,{children:"source.include"}),")."]}),"\n",(0,o.jsxs)(n.p,{children:["When Babel compiles large files, the built-in babel-plugin-styled-components in Modern.js can cause the compilation to hang. There is already a ",(0,o.jsx)(n.a,{href:"https://github.com/styled-components/babel-plugin-styled-components/issues/374",target:"_blank",rel:"noopener noreferrer",children:"relevant issue"})," in the community ."]}),"\n",(0,o.jsxs)(n.p,{children:["In the future, Modern.js will consider removing the built-in babel-plugin-styled-components. In the current version, you can set ",(0,o.jsx)(n.a,{href:"/configure/app/tools/styled-components.html",children:"tools.styledComponents"})," to ",(0,o.jsx)(n.code,{children:"false"})," to remove this plugin."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"export default {\n  tools: {\n    styledComponents: false,\n  },\n};\n"})}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsxs)(n.h3,{id:"the-webpack-cache-does-not-work",children:["The webpack cache does not work?",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#the-webpack-cache-does-not-work",children:"#"})]}),"\n",(0,o.jsx)(n.p,{children:"Modern.js enables webpack's persistent cache by default."}),"\n",(0,o.jsxs)(n.p,{children:["After the first compilation is completed, the cache file will be automatically generated and output to the ",(0,o.jsx)(n.code,{children:"./node_modules/.cache/webpack"})," directory. When the second compilation is performed, the cache is hit and the compilation speed is greatly improved."]}),"\n",(0,o.jsxs)(n.p,{children:["When configuration files such as ",(0,o.jsx)(n.code,{children:"package.json"})," are modified, the cache is automatically invalidated."]}),"\n",(0,o.jsx)(n.p,{children:"If the webpack compilation cache in the project has not taken effect, you can add the following configuration for troubleshooting:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"export default {\n  tools: {\n    webpack(config) {\n      config.infrastructureLogging = {\n        ...config.infrastructureLogging,\n        debug: /webpack\\.cache/,\n      };\n    },\n  },\n};\n"})}),"\n",(0,o.jsxs)(n.p,{children:["After adding the above configuration, webpack will output logs for debugging. Please refer to the logs related to ",(0,o.jsx)(n.code,{children:"PackFileCacheStrategy"})," to understand the cause of cache invalidation."]}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsxs)(n.h3,{id:"compilation-error-after-referencing-a-type-from-lodash",children:["Compilation error after referencing a type from lodash",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#compilation-error-after-referencing-a-type-from-lodash",children:"#"})]}),"\n",(0,o.jsxs)(n.p,{children:["If the ",(0,o.jsx)(n.code,{children:"@types/lodash"})," package is installed in your project, you may import some types from ",(0,o.jsx)(n.code,{children:"lodash"}),", such as the ",(0,o.jsx)(n.code,{children:"DebouncedFunc"})," type:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"import { debounce, DebouncedFunc } from 'lodash';\n"})}),"\n",(0,o.jsx)(n.p,{children:"Modern.js will throw an error after compiling the above code:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"Syntax error: /project/src/index.ts: The lodash method `DebouncedFunc` is not a known module.\nPlease report bugs to https://github.com/lodash/babel-plugin-lodash/issues.\n"})}),"\n",(0,o.jsxs)(n.p,{children:["The reason is that Modern.js has enabled the ",(0,o.jsx)(n.a,{href:"https://github.com/lodash/babel-plugin-lodash",target:"_blank",rel:"noopener noreferrer",children:"babel-plugin-lodash"}),' plugin by default to optimize the bundle size of lodash, but Babel cannot distinguish between "value" and "type", which resulting in an exception in the compiled code.']}),"\n",(0,o.jsxs)(n.p,{children:["The solution is to use TypeScript's ",(0,o.jsx)(n.code,{children:"import type"})," syntax to explicitly declare the ",(0,o.jsx)(n.code,{children:"DebouncedFunc"})," type:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"import { debounce } from 'lodash';\nimport type { DebouncedFunc } from 'lodash';\n"})}),"\n",(0,o.jsxs)(n.div,{className:"rspress-directive tip",children:[(0,o.jsx)(n.div,{className:"rspress-directive-title",children:"TIP"}),(0,o.jsx)(n.div,{className:"rspress-directive-content",children:(0,o.jsxs)(n.p,{children:["In any case, it is recommended to use ",(0,o.jsx)(n.code,{children:"import type"})," to import types, this will help the compiler to identify the type.\n"]})})]})]})}function t(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(s,{...e})}):s(e)}let a=t;t.__RSPRESS_PAGE_META={},t.__RSPRESS_PAGE_META["en%2Fguides%2Ftroubleshooting%2Fbuilder.mdx"]={toc:[{text:"Rsbuild FAQ",id:"rsbuild-faq",depth:3},{text:"How to clear the webpack cache?",id:"how-to-clear-the-webpack-cache",depth:3},{text:"How to view the final generated webpack / Rspack configuration?",id:"how-to-view-the-final-generated-webpack--rspack-configuration",depth:3},{text:"'compilation' argument error when webpack compiling?",id:"compilation-argument-error-when-webpack-compiling",depth:3},{text:"Failed import other modules in Monorepo?",id:"failed-import-other-modules-in-monorepo",depth:3},{text:"Find `exports is not defined` runtime error?",id:"find-exports-is-not-defined-runtime-error",depth:3},{text:'Compile error "Error: ES Modules may not assign module.exports or exports.*, Use ESM export syntax"?',id:"compile-error-error-es-modules-may-not-assign-moduleexports-or-exports-use-esm-export-syntax",depth:3},{text:"The compilation progress bar is stuck, but there is no Error log in the terminal?",id:"the-compilation-progress-bar-is-stuck-but-there-is-no-error-log-in-the-terminal",depth:3},{text:"The webpack cache does not work?",id:"the-webpack-cache-does-not-work",depth:3},{text:"Compilation error after referencing a type from lodash",id:"compilation-error-after-referencing-a-type-from-lodash",depth:3}],title:"Build FAQ",frontmatter:{sidebar_position:3}}}}]);