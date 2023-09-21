(self.webpackChunk_modern_js_builder_doc=self.webpackChunk_modern_js_builder_doc||[]).push([["4935"],{71424:function(e,n,o){"use strict";o.r(n),o.d(n,{default:function(){return l}});var r,i=o("15169"),s=o("43932"),t=o("9880"),a=o("23169");function c(e){var n=Object.assign({h1:"h1",a:"a",h3:"h3",p:"p",pre:"pre",code:"code",ol:"ol",li:"li",div:"div",hr:"hr",ul:"ul",blockquote:"blockquote",strong:"strong"},(0,a.useMDXComponents)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.h1,{id:"exceptions-faq",children:["Exceptions FAQ",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#exceptions-faq",children:"#"})]}),"\n",(0,t.jsxs)(n.h3,{id:"compilation-argument-error-when-webpack-compiling",children:["'compilation' argument error when webpack compiling?",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#compilation-argument-error-when-webpack-compiling",children:"#"})]}),"\n",(0,t.jsx)(n.p,{children:"If the following error occurs when compiling, it is usually caused by installing the wrong version of webpack in the project, or installing multiple versions of webpack:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"TypeError: The 'compilation' argument must be an instance of Compilation\n"})}),"\n",(0,t.jsx)(n.p,{children:"The webpack version problem has the following situations:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"The webpack dependency is directly declared in the project's package.json, and the version range of the webpack that the Builder depends on is different and cannot match the same version."}),"\n",(0,t.jsx)(n.li,{children:"Multiple npm packages installed in the project all depend on webpack, and the webpack version ranges they depend on are different and cannot match the same version."}),"\n",(0,t.jsx)(n.li,{children:"Due to the lock mechanism of the package manager, multiple webpack versions are generated in the lock file."}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["In the first case, it is recommended to remove the webpack dependency from the project's package.json. Because Builder encapsulates webpack-related capabilities by default, and will pass in the webpack object in the ",(0,t.jsx)(n.a,{href:"/en/api/config-tools#toolswebpack",children:"tools.webpack"})," configuration option. Therefore, in most cases, it is not recommended to install additional webpack dependencies in the project."]}),"\n",(0,t.jsxs)(n.p,{children:["In the second case, it is recommended to see if you can upgrade an npm package so that its dependent webpack version range is consistent with the Builder. It is also possible to manually unify versions through the ability of the package manager, e.g. using ",(0,t.jsx)(n.a,{href:"https://classic.yarnpkg.com/lang/en/docs/selective-version-resolutions/",target:"_blank",rel:"noopener noreferrer",children:"yarn resolutions"})," or [pnpm overrides](https ://pnpm.io/package_json#pnpmoverrides)."]}),"\n",(0,t.jsx)(n.p,{children:"If it is the third case, you can use the two methods mentioned in the second case, or you can try to delete the lock file and reinstall it to solve it."}),"\n",(0,t.jsxs)(n.div,{className:"rspress-directive tip",children:[(0,t.jsx)(n.div,{className:"rspress-directive-title",children:"TIP"}),(0,t.jsx)(n.div,{className:"rspress-directive-content",children:(0,t.jsx)(n.p,{children:"Deleting the lock file will automatically upgrade the dependency version in the project to the latest version under the specified scope, please test it thoroughly."})})]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsxs)(n.h3,{id:"find-es6-code-in-the-compiled-files",children:["Find ES6+ code in the compiled files?",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#find-es6-code-in-the-compiled-files",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:["By default, Builder will not compile files under ",(0,t.jsx)(n.code,{children:"node_modules"})," through ",(0,t.jsx)(n.code,{children:"babel-loader"})," or ",(0,t.jsx)(n.code,{children:"ts-loader"}),". If the npm package introduced by the project contains ES6+ syntax, it will be bundled into the output files."]}),"\n",(0,t.jsxs)(n.p,{children:["When this happens, you can specify directories or modules that need to be compiled additionally through the ",(0,t.jsx)(n.a,{href:"/en/api/config-source#sourceinclude",children:"source.include"})," configuration option."]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsxs)(n.h3,{id:"failed-import-other-modules-in-monorepo",children:["Failed import other modules in Monorepo?",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#failed-import-other-modules-in-monorepo",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:["Due to considerations of compilation performance, by default, the Builder does not compile files under ",(0,t.jsx)(n.code,{children:"node_modules"})," or files outside the current project directory."]}),"\n",(0,t.jsxs)(n.p,{children:["Therefore, when you reference the source code of other sub-projects, you may encounter an error similar to ",(0,t.jsx)(n.code,{children:"You may need an additional loader to handle the result of these loaders."})]}),"\n",(0,t.jsx)(n.p,{children:"There are several solutions to this problem:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["You can enable the source code build mode to compile other sub-projects within the monorepo. Please refer to ",(0,t.jsx)(n.a,{href:"/guide/advanced/source-build",children:"Source Code Build Mode"})," for more information."]}),"\n",(0,t.jsxs)(n.li,{children:["You can add the ",(0,t.jsx)(n.code,{children:"source.include"})," configuration option to specify the directories or modules that need to be additionally compiled. Please refer to ",(0,t.jsx)(n.a,{href:"/api/config-source#sourceinclude",children:"Usage of source.include"})," for more information."]}),"\n",(0,t.jsx)(n.li,{children:"You can pre-build the sub-projects that need to be referenced, generate the corresponding build artifacts, and then reference the build artifacts in the current project instead of referencing the source code."}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsxs)(n.h3,{id:"compile-error-error-object-object-is-not-a-postcss-plugin-",children:["Compile error ",(0,t.jsx)(n.code,{children:"Error: [object Object] is not a PostCSS plugin"})," ?",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#compile-error-error-object-object-is-not-a-postcss-plugin-",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:["Currently, Modern.js is using PostCSS v8. If you encounter the ",(0,t.jsx)(n.code,{children:"Error: [object Object] is not a PostCSS plugin"})," error during the compilation process, it is usually caused by referencing the wrong version of PostCSS, for example, the version of ",(0,t.jsx)(n.code,{children:"postcss"})," (peerDependencies) in ",(0,t.jsx)(n.code,{children:"cssnano"})," does not meet expectations."]}),"\n",(0,t.jsxs)(n.p,{children:["You can find the dependencies of ",(0,t.jsx)(n.code,{children:"UNMET PEER DEPENDENCY"})," through ",(0,t.jsx)(n.code,{children:"npm ls postcss"}),", and then install the correct version of dependencies by specifying the PostCSS version in package.json."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"npm ls postcss\n\n \u251C\u2500\u252C css-loader@6.3.0\n \u2502 \u2514\u2500\u2500 UNMET PEER DEPENDENCY postcss@8.3.9\n \u251C\u2500\u252C css-minimizer-webpack-plugin@3.0.0\n \u2502 \u2514\u2500\u2500 UNMET PEER DEPENDENCY postcss@8.3.9\n"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsxs)(n.h3,{id:"compile-error-you-may-need-additional-loader",children:["Compile error ",(0,t.jsx)(n.code,{children:"You may need additional loader"}),"?",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#compile-error-you-may-need-additional-loader",children:"#"})]}),"\n",(0,t.jsx)(n.p,{children:"If the following error message is encountered during the compilation process, it means that there are individual files that cannot be compiled correctly."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"Module parse failed: Unexpected token\nFile was processed with these loaders:\n * some-loader/index.js\n\nYou may need an additional loader to handle the result of these loaders.\n"})}),"\n",(0,t.jsx)(n.p,{children:"Solution:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["If the ",(0,t.jsx)(n.code,{children:".ts"})," file outside the current project is referenced, or the ",(0,t.jsx)(n.code,{children:".ts"})," file under node_modules, please add the ",(0,t.jsx)(n.a,{href:"/en/api/config-source#sourceinclude",children:"source.include"})," configuration Items that specify files that require additional compilation."]}),"\n",(0,t.jsx)(n.li,{children:"If you refer to a file format that is not supported by Builder, please configure the corresponding webpack loader for compilation."}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsxs)(n.h3,{id:"find-exports-is-not-defined-runtime-error",children:["Find ",(0,t.jsx)(n.code,{children:"exports is not defined"})," runtime error?",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#find-exports-is-not-defined-runtime-error",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:["If the compilation is succeed, but the ",(0,t.jsx)(n.code,{children:"exports is not defined"})," error appears after opening the page, it is usually because a CommonJS module is compiled by Babel."]}),"\n",(0,t.jsxs)(n.p,{children:["Under normal circumstances, Builder will not use Babel to compile CommonJS modules. If the ",(0,t.jsx)(n.a,{href:"/en/api/config-source#sourceinclude",children:"source.include"})," configuration option is used in the project, or the ",(0,t.jsx)(n.a,{href:"/en/api/config-tools#tools-babel",children:"tools.babel"})," ",(0,t.jsx)(n.code,{children:"addIncludes"})," method, some CommonJS modules may be added to the Babel compilation."]}),"\n",(0,t.jsx)(n.p,{children:"There are two workarounds for this problem:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Avoid adding CommonJS modules to Babel compilation."}),"\n",(0,t.jsxs)(n.li,{children:["Set Babel's ",(0,t.jsx)(n.code,{children:"sourceType"})," configuration option to ",(0,t.jsx)(n.code,{children:"unambiguous"}),", for example:"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    babel(config) {\n      config.sourceType = 'unambiguous';\n    },\n  },\n};\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Setting ",(0,t.jsx)(n.code,{children:"sourceType"})," to ",(0,t.jsx)(n.code,{children:"unambiguous"})," may have some other effects, please refer to ",(0,t.jsx)(n.a,{href:"https://babeljs.io/docs/en/options#sourcetype",target:"_blank",rel:"noopener noreferrer",children:"Babel official documentation"}),"."]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsxs)(n.h3,{id:"compile-error-error-es-modules-may-not-assign-moduleexports-or-exports-use-esm-export-syntax",children:['Compile error "Error: ES Modules may not assign module.exports or exports.*, Use ESM export syntax"?',(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#compile-error-error-es-modules-may-not-assign-moduleexports-or-exports-use-esm-export-syntax",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:["If the following error occurs during compilation, it is usually because a CommonJS module is compiled with Babel in the project, and the solution is same as the above ",(0,t.jsx)(n.code,{children:"exports is not defined"})," problem."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"Error: ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: 581\n"})}),"\n",(0,t.jsxs)(n.p,{children:["For more information, please refer to issue: ",(0,t.jsx)(n.a,{href:"https://github.com/babel/babel/issues/12731",target:"_blank",rel:"noopener noreferrer",children:"babel#12731"}),"."]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsxs)(n.h3,{id:"compilation-error-export-foo-imported-as-foo-was-not-found-in-utils",children:["Compilation error \"export 'foo' (imported as 'foo') was not found in './utils'\"?",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#compilation-error-export-foo-imported-as-foo-was-not-found-in-utils",children:"#"})]}),"\n",(0,t.jsx)(n.p,{children:"If you encounter this error during the compilation process, it means that your code is referencing an export that does not exist."}),"\n",(0,t.jsxs)(n.p,{children:["For example, in the following code, ",(0,t.jsx)(n.code,{children:"index.ts"})," is importing the ",(0,t.jsx)(n.code,{children:"foo"})," variable from ",(0,t.jsx)(n.code,{children:"utils.ts"}),", but ",(0,t.jsx)(n.code,{children:"utils.ts"})," only exports the ",(0,t.jsx)(n.code,{children:"bar"})," variable."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"// utils.ts\nexport const bar = 'bar';\n\n// index.ts\nimport { foo } from './utils';\n"})}),"\n",(0,t.jsx)(n.p,{children:"In this case, Builder will throw the following error:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"Compile Error:\nFile: ./src/index.ts\nexport 'foo' (imported as 'foo') was not found in './utils' (possible exports: bar)\n"})}),"\n",(0,t.jsx)(n.p,{children:"If you encounter this issue, the first step is to check the import/export statements in your code and correct any invalid code."}),"\n",(0,t.jsx)(n.p,{children:"There are some common mistakes:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Importing a non-existent variable:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"// utils.ts\nexport const bar = 'bar';\n\n// index.ts\nimport { foo } from './utils';\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Re-exporting a type without adding the ",(0,t.jsx)(n.code,{children:"type"})," modifier, causing compilers like Babel to fail in recognizing the type export, resulting in compilation errors."]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"// utils.ts\nexport type Foo = 'bar';\n\n// index.ts\nexport { Foo } from './utils'; // Incorrect\nexport type { Foo } from './utils'; // Correct\n"})}),"\n",(0,t.jsxs)(n.p,{children:["In some cases, the error may be caused by a third-party dependency that you cannot modify directly. In this situation, if you are sure that the issue does not affect your application, you can add the following configuration to change the log level from ",(0,t.jsx)(n.code,{children:"error"})," to ",(0,t.jsx)(n.code,{children:"warn"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"export default {\n  tools: {\n    webpackChain(chain) {\n      chain.module.parser.merge({\n        javascript: {\n          exportsPresence: 'warn',\n        },\n      });\n    },\n  },\n};\n"})}),"\n",(0,t.jsx)(n.p,{children:"However, it is important to contact the developer of the third-party dependency immediately to fix the issue."}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["You can refer to the webpack documentation for more details on ",(0,t.jsx)(n.a,{href:"https://webpack.js.org/configuration/module/#moduleparserjavascriptexportspresence",target:"_blank",rel:"noopener noreferrer",children:"module.parser.javascript.exportsPresence"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsxs)(n.h3,{id:"the-compilation-progress-bar-is-stuck-but-there-is-no-error-log-in-the-terminal",children:["The compilation progress bar is stuck, but there is no Error log in the terminal?",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#the-compilation-progress-bar-is-stuck-but-there-is-no-error-log-in-the-terminal",children:"#"})]}),"\n",(0,t.jsx)(n.p,{children:"When the compilation progress bar is stuck, but there is no Error log on the terminal, it is usually because an exception occurred during the compilation. In some cases, when Error is caught by webpack or other modules, the error log can not be output correctly. The most common scenario is that there is an exception in the Babel config, which is caught by webpack, and webpack swallows the Error in some cases."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Solution:"})}),"\n",(0,t.jsx)(n.p,{children:"If this problem occurs after you modify the Babel config, it is recommended to check for the following incorrect usages:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"You have configured a plugin or preset that does not exist, maybe the name is misspelled, or it is not installed correctly."}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"// wrong example\nexport default {\n  tools: {\n    babel(config, { addPlugins }) {\n      // The plugin has the wrong name or is not installed\n      addPlugins('babel-plugin-not-exists');\n    },\n  },\n};\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"2",children:["\n",(0,t.jsx)(n.li,{children:"Whether multiple babel-plugin-imports are configured, but the name of each babel-plugin-import is not declared in the third item of the array."}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"// wrong example\nexport default {\n  tools: {\n    babel(config, { addPlugins }) {\n      addPlugins([\n        [\n          'babel-plugin-import',\n          { libraryName: 'antd', libraryDirectory: 'es' },\n        ],\n        [\n          'babel-plugin-import',\n          { libraryName: 'antd-mobile', libraryDirectory: 'es' },\n        ],\n      ]);\n    },\n  },\n};\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"// correct example\nexport default {\n  tools: {\n    babel(config, { addPlugins }) {\n      addPlugins([\n        [\n          'babel-plugin-import',\n          { libraryName: 'antd', libraryDirectory: 'es' },\n          'antd',\n        ],\n        [\n          'babel-plugin-import',\n          { libraryName: 'antd-mobile', libraryDirectory: 'es' },\n          'antd-mobile',\n        ],\n      ]);\n    },\n  },\n};\n"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsxs)(n.h3,{id:"the-webpack-cache-does-not-work",children:["The webpack cache does not work?",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#the-webpack-cache-does-not-work",children:"#"})]}),"\n",(0,t.jsx)(n.p,{children:"Builder enables webpack's persistent cache by default."}),"\n",(0,t.jsxs)(n.p,{children:["After the first compilation is completed, the cache file will be automatically generated and output to the ",(0,t.jsx)(n.code,{children:"./node_modules/.cache/webpack"})," directory. When the second compilation is performed, the cache is hit and the compilation speed is greatly improved."]}),"\n",(0,t.jsxs)(n.p,{children:["When configuration files such as ",(0,t.jsx)(n.code,{children:"package.json"})," are modified, the cache is automatically invalidated."]}),"\n",(0,t.jsx)(n.p,{children:"If the webpack compilation cache in the project has not taken effect, you can add the following configuration for troubleshooting:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"export default {\n  tools: {\n    webpack(config) {\n      config.infrastructureLogging = {\n        ...config.infrastructureLogging,\n        debug: /webpack\\.cache/,\n      };\n    },\n  },\n};\n"})}),"\n",(0,t.jsxs)(n.p,{children:["After adding the above configuration, webpack will output logs for debugging. Please refer to the logs related to ",(0,t.jsx)(n.code,{children:"PackFileCacheStrategy"})," to understand the cause of cache invalidation."]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsxs)(n.h3,{id:"tree-shaking-does-not-take-effect",children:["Tree shaking does not take effect?",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#tree-shaking-does-not-take-effect",children:"#"})]}),"\n",(0,t.jsx)(n.p,{children:"Builder will enable the tree shaking function of webpack by default during production construction. Whether tree shaking can take effect depends on whether the business code can meet the tree shaking conditions of webpack."}),"\n",(0,t.jsxs)(n.p,{children:["If you encounter the problem that tree shaking does not take effect, you can check whether the ",(0,t.jsx)(n.code,{children:"sideEffects"})," configuration of the relevant npm package is correct. If you don't know what ",(0,t.jsx)(n.code,{children:"sideEffects"})," is, or are interested in the principles behind tree shaking, you can read the following two documents:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://webpack.docschina.org/guides/tree-shaking/",target:"_blank",rel:"noopener noreferrer",children:"webpack official documentation - Tree Shaking"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://bytedance.feishu.cn/docs/doccn8E1ldDct5uv1EEDQs8Ycwe",target:"_blank",rel:"noopener noreferrer",children:"Tree Shaking Troubleshooting Guide"})}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsxs)(n.h3,{id:"javascript-heap-out-of-memory-when-compiling",children:["JavaScript heap out of memory when compiling?",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#javascript-heap-out-of-memory-when-compiling",children:"#"})]}),"\n",(0,t.jsx)(n.p,{children:"This error indicates that there is a memory overflow problem during the packaging process. In most cases, it is because the bundled content exceeds the default memory limit of Node.js."}),"\n",(0,t.jsxs)(n.p,{children:["In case of OOM issues, the easiest way to fix this is by increasing the memory cap, Node.js provides the ",(0,t.jsx)(n.code,{children:"--max-old-space-size"})," option to set this. You can set this parameter by adding ",(0,t.jsx)(n.a,{href:"https://nodejs.org/api/cli.html#node_optionsoptions",target:"_blank",rel:"noopener noreferrer",children:"NODE_OPTIONS"})," before the CLI command."]}),"\n",(0,t.jsxs)(n.p,{children:["For example, add parameters before the ",(0,t.jsx)(n.code,{children:"modern build"})," command:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-diff",meta:'title="package.json"',children:'{\n   "scripts": {\n- "build": "modern build"\n+ "build": "NODE_OPTIONS=--max_old_space_size=16384 modern build"\n   }\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["If you are executing other commands, such as ",(0,t.jsx)(n.code,{children:"modern deploy"}),", please add parameters before the corresponding command."]}),"\n",(0,t.jsxs)(n.p,{children:["The value of the ",(0,t.jsx)(n.code,{children:"max_old_space_size"})," parameter represents the upper limit of the memory size (MB). Generally, it can be set to ",(0,t.jsx)(n.code,{children:"16384"})," (16GB)."]}),"\n",(0,t.jsx)(n.p,{children:"The following parameters are explained in more detail in the official Node.js documentation:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://nodejs.org/api/cli.html#node_optionsoptions",target:"_blank",rel:"noopener noreferrer",children:"NODE_OPTIONS"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://nodejs.org/api/cli.html#--max-old-space-sizesize-in-megabytes",target:"_blank",rel:"noopener noreferrer",children:"--max-old-space-size"})}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["In addition to increasing the memory limit, it is also a solution to improve efficiency by enabling some compilation strategies, please refer to ",(0,t.jsx)(n.a,{href:"/guide/optimization/build-performance",children:"Improve Build Performance"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"If the above methods cannot solve your problem, it may be that some abnormal logic in the project has caused memory overflow. You can debug recent code changes and locate the root cause of problems. If it cannot be located, please contact us."}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsxs)(n.h3,{id:"cant-resolve-core-jsmodulesxxxjs-when-compiling",children:["Can't resolve 'core-js/modules/xxx.js' when compiling?",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#cant-resolve-core-jsmodulesxxxjs-when-compiling",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:["If you get an error similar to the following when compiling, it means that ",(0,t.jsx)(n.a,{href:"https://github.com/zloirock/core-js",target:"_blank",rel:"noopener noreferrer",children:"core-js"})," cannot be resolved properly in the project."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"Module not found: Can't resolve 'core-js/modules/es.error.cause.js'\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Usually, you don't need to install ",(0,t.jsx)(n.code,{children:"core-js"})," in the project, because the Builder already has a built-in ",(0,t.jsx)(n.code,{children:"core-js"})," v3."]}),"\n",(0,t.jsxs)(n.p,{children:["If there is an error that ",(0,t.jsx)(n.code,{children:"core-js"})," cannot be found, there may be several reasons:"]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["The ",(0,t.jsx)(n.code,{children:"plugins"})," configured by Babel is overwritten in the project, causing the built-in ",(0,t.jsx)(n.code,{children:"babelPluginLockCorejsVersion"})," does not work. In this case, just change ",(0,t.jsx)(n.code,{children:"tools.babel"})," to a function:"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"// Wrong usage, will override Builder's default Babel plugins\nexport default {\n  tools: {\n    babel: {\n      plugins: ['babel-plugin-xxx'],\n    },\n  },\n};\n\n// Correct usage, add a new plugin in the default configuration instead of overriding the plugin\nexport default {\n  tools: {\n    babel(config) {\n      config.plugins.push('babel-plugin-xxx');\n    },\n  },\n};\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"2",children:["\n",(0,t.jsxs)(n.li,{children:["Some code in the project depends on ",(0,t.jsx)(n.code,{children:"core-js"})," v2. In this case, you usually need to find out the corresponding code and upgrade ",(0,t.jsx)(n.code,{children:"core-js"})," to the v3."]}),"\n",(0,t.jsxs)(n.li,{children:["An npm package in ",(0,t.jsx)(n.code,{children:"node_modules"})," imported ",(0,t.jsx)(n.code,{children:"core-js"}),", but does not declare the ",(0,t.jsx)(n.code,{children:"core-js"})," dependency in ",(0,t.jsx)(n.code,{children:"dependencies"}),". In this case, you need to declare the ",(0,t.jsx)(n.code,{children:"core-js"})," dependency in the corresponding npm package, or install a copy of ",(0,t.jsx)(n.code,{children:"core-js"})," in the project root directory."]}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsxs)(n.h3,{id:"compilation-error-after-referencing-a-type-from-lodash",children:["Compilation error after referencing a type from lodash",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#compilation-error-after-referencing-a-type-from-lodash",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:["If the ",(0,t.jsx)(n.code,{children:"@types/lodash"})," package is installed in your project, you may import some types from ",(0,t.jsx)(n.code,{children:"lodash"}),", such as the ",(0,t.jsx)(n.code,{children:"DebouncedFunc"})," type:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"import { debounce, DebouncedFunc } from 'lodash';\n"})}),"\n",(0,t.jsx)(n.p,{children:"Builder will throw an error after compiling the above code:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"Syntax error: /project/src/index.ts: The lodash method `DebouncedFunc` is not a known module.\nPlease report bugs to https://github.com/lodash/babel-plugin-lodash/issues.\n"})}),"\n",(0,t.jsxs)(n.p,{children:["The reason is that Builder has enabled the ",(0,t.jsx)(n.a,{href:"https://github.com/lodash/babel-plugin-lodash",target:"_blank",rel:"noopener noreferrer",children:"babel-plugin-lodash"}),' plugin by default to optimize the bundle size of lodash, but Babel cannot distinguish between "value" and "type", which resulting in an exception in the compiled code.']}),"\n",(0,t.jsxs)(n.p,{children:["The solution is to use TypeScript's ",(0,t.jsx)(n.code,{children:"import type"})," syntax to explicitly declare the ",(0,t.jsx)(n.code,{children:"DebouncedFunc"})," type:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"import { debounce } from 'lodash';\nimport type { DebouncedFunc } from 'lodash';\n"})}),"\n",(0,t.jsxs)(n.div,{className:"rspress-directive tip",children:[(0,t.jsx)(n.div,{className:"rspress-directive-title",children:"TIP"}),(0,t.jsx)(n.div,{className:"rspress-directive-content",children:(0,t.jsxs)(n.p,{children:["In any case, it is recommended to use ",(0,t.jsx)(n.code,{children:"import type"})," to import types, this will help the compiler to identify the type.\n"]})})]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsxs)(n.h3,{id:"division-in-less-file-doesnt-work",children:["Division in Less file doesn't work?",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#division-in-less-file-doesnt-work",children:"#"})]}),"\n",(0,t.jsx)(n.p,{children:"Compared with the v3 version, the Less v4 version has some differences in the way of writing division:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-less",children:"// Less v3\n.math {\n  width: 2px / 2; // 1px\n  width: 2px ./ 2; // 1px\n  width: (2px / 2); // 1px\n}\n\n// Less v4\n.math {\n  width: 2px / 2; // 2px / 2\n  width: 2px ./ 2; // 1px\n  width: (2px / 2); // 1px\n}\n"})}),"\n",(0,t.jsx)(n.p,{children:"The built-in Less version of Builder is v4, and the writing method of the lower version will not take effect. Please pay attention to the distinction."}),"\n",(0,t.jsxs)(n.p,{children:["The writing of division in Less can also be modified through configuration options, see ",(0,t.jsx)(n.a,{href:"https://lesscss.org/usage/#less-options-math",target:"_blank",rel:"noopener noreferrer",children:"Less - Math"}),"."]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsxs)(n.h3,{id:"compile-error-typeerror-cannot-delete-property-xxx-of-object",children:["Compile error \u2018TypeError: Cannot delete property 'xxx' of #<Object>\u2019",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#compile-error-typeerror-cannot-delete-property-xxx-of-object",children:"#"})]}),"\n",(0,t.jsx)(n.p,{children:"This error indicates that a read-only configuration option was deleted during the compilation process. Normally, we do not want any operation to directly modify the incoming configuration when compiling, but it is difficult to restrict the behavior of underlying plugins (such as postcss-loader, etc). If this error occurs, please contact the builder developer and we will need to do something special with that configuration."}),"\n",(0,t.jsx)(n.p,{children:"The same type of error is also reported:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"'TypeError: Cannot add property xxx, object is not extensible'"}),"\n",(0,t.jsx)(n.li,{children:"'TypeError: Cannot assign to read only property 'xxx' of object '#<Object>'"}),"\n"]})]})}(r=globalThis).__RSPRESS_PAGE_META||(r.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["en%2Fguide%2Ffaq%2Fexceptions.md"]={toc:[{text:"\\'compilation\\' argument error when webpack compiling?",id:"compilation-argument-error-when-webpack-compiling",depth:3},{text:"Find ES6+ code in the compiled files?",id:"find-es6-code-in-the-compiled-files",depth:3},{text:"Failed import other modules in Monorepo?",id:"failed-import-other-modules-in-monorepo",depth:3},{text:"Compile error Error: [object Object] is not a PostCSS plugin ?",id:"compile-error-error-object-object-is-not-a-postcss-plugin-",depth:3},{text:"Compile error You may need additional loader?",id:"compile-error-you-may-need-additional-loader",depth:3},{text:"Find exports is not defined runtime error?",id:"find-exports-is-not-defined-runtime-error",depth:3},{text:'Compile error \\"Error: ES Modules may not assign module.exports or exports.*, Use ESM export syntax\\"?',id:"compile-error-error-es-modules-may-not-assign-moduleexports-or-exports-use-esm-export-syntax",depth:3},{text:"Compilation error \\\"export \\'foo\\' (imported as \\'foo\\') was not found in \\'./utils\\'\\\"?",id:"compilation-error-export-foo-imported-as-foo-was-not-found-in-utils",depth:3},{text:"The compilation progress bar is stuck, but there is no Error log in the terminal?",id:"the-compilation-progress-bar-is-stuck-but-there-is-no-error-log-in-the-terminal",depth:3},{text:"The webpack cache does not work?",id:"the-webpack-cache-does-not-work",depth:3},{text:"Tree shaking does not take effect?",id:"tree-shaking-does-not-take-effect",depth:3},{text:"JavaScript heap out of memory when compiling?",id:"javascript-heap-out-of-memory-when-compiling",depth:3},{text:"Can\\'t resolve \\'core-js/modules/xxx.js\\' when compiling?",id:"cant-resolve-core-jsmodulesxxxjs-when-compiling",depth:3},{text:"Compilation error after referencing a type from lodash",id:"compilation-error-after-referencing-a-type-from-lodash",depth:3},{text:"Division in Less file doesn\\'t work?",id:"division-in-less-file-doesnt-work",depth:3},{text:"Compile error \u2018TypeError: Cannot delete property \\'xxx\\' of #<Object>\u2019",id:"compile-error-typeerror-cannot-delete-property-xxx-of-object",depth:3}],title:"Exceptions FAQ",frontmatter:{}};var l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,a.useMDXComponents)(),e.components).wrapper;return n?(0,t.jsx)(n,(0,s._)((0,i._)({},e),{children:(0,t.jsx)(c,(0,i._)({},e))})):c(e)}}}]);