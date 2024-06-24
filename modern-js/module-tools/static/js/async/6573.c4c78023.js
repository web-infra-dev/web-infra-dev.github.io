/*! For license information please see 6573.c4c78023.js.LICENSE.txt */
(self.webpackChunk_modern_js_module_tools_docs=self.webpackChunk_modern_js_module_tools_docs||[]).push([["6573"],{6850:function(e,n,s){"use strict";s.r(n);var i=s("9980"),r=s("9580");function d(e){let n=Object.assign({h1:"h1",a:"a",p:"p",code:"code",div:"div",h2:"h2",strong:"strong",ul:"ul",li:"li",pre:"pre",h3:"h3",h4:"h4"},(0,r.ah)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.h1,{id:"in-depth-understanding-of-build",children:["In-depth understanding of build",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#in-depth-understanding-of-build",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:['In the "Basic Usage" section, we already knew that you can modify the output files of a project through the ',(0,i.jsx)(n.code,{children:"buildConfig"})," configuration. ",(0,i.jsx)(n.code,{children:"buildConfig"})," not only describes some of the features of the product, but also provides some functionality for building the product."]}),"\n",(0,i.jsxs)(n.div,{className:"rspress-directive tip",children:[(0,i.jsx)(n.div,{className:"rspress-directive-title",children:"TIP"}),(0,i.jsx)(n.div,{className:"rspress-directive-content",children:(0,i.jsxs)(n.p,{children:["If you are not familiar with ",(0,i.jsx)(n.code,{children:"buildConfig"}),", please read ",(0,i.jsx)(n.a,{href:"/en/guide/basic/modify-output-product",children:"modify-output-product"}),".\n"]})})]}),"\n",(0,i.jsxs)(n.p,{children:["In this chapter we'll dive into the use of certain build configurations and understand what happens when the ",(0,i.jsx)(n.code,{children:"modern build"})," command is executed."]}),"\n",(0,i.jsxs)(n.h2,{id:"bundle--bundleless",children:[(0,i.jsx)(n.code,{children:"bundle"})," / ",(0,i.jsx)(n.code,{children:"bundleless"}),(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#bundle--bundleless",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"So first let's understand bundle and bundleless."}),"\n",(0,i.jsxs)(n.p,{children:["A bundle is a package of build artifacts, which may be a single file or multiple files based on a certain ",(0,i.jsx)(n.a,{href:"https://esbuild.github.io/api/#splitting",target:"_blank",rel:"noopener noreferrer",children:"code splitting strategy"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["bundleless, on the other hand, means that each source file is compiled and built separately, but not bundled together. Each output file can be found with its corresponding source code file. The process of ",(0,i.jsx)(n.strong,{children:"bundleless build can also be understood as the process of code conversion of source files only"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"They have their own benefits."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"bundle can reduce the size of build artifacts and also pre-package dependencies to reduce the size of installed dependencies. Packaging libraries in advance can speed up application project builds."}),"\n",(0,i.jsx)(n.li,{children:"bundleless maintains the original file structure and is more conducive to debugging and tree shaking."}),"\n"]}),"\n",(0,i.jsxs)(n.div,{className:"rspress-directive warning",children:[(0,i.jsx)(n.div,{className:"rspress-directive-title",children:"WARNING"}),(0,i.jsx)(n.div,{className:"rspress-directive-content",children:(0,i.jsxs)(n.p,{children:["bundleless is a single-file compilation mode, so for referencing and exporting types, you need to add the ",(0,i.jsx)(n.code,{children:"type"})," keyword. For example, ",(0,i.jsx)(n.code,{children:"import type { A } from './types'"}),". Please refer to the ",(0,i.jsx)(n.a,{href:"https://esbuild.github.io/content-types/#isolated-modules",target:"_blank",rel:"noopener noreferrer",children:"esbuild documentation"})," for more information.\n"]})})]}),"\n",(0,i.jsxs)(n.p,{children:["In ",(0,i.jsx)(n.code,{children:"buildConfig"})," you can specify whether the current build task is bundle or bundleless by using ",(0,i.jsx)(n.a,{href:"/en/api/config/build-config#buildtype",children:(0,i.jsx)(n.code,{children:"buildConfig.buildType"})}),"."]}),"\n",(0,i.jsxs)(n.h2,{id:"input--sourcedir",children:[(0,i.jsx)(n.code,{children:"input"})," / ",(0,i.jsx)(n.code,{children:"sourceDir"}),(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#input--sourcedir",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/api/config/build-config#input",children:(0,i.jsx)(n.code,{children:"buildConfig.input"})})," is used to specify the path to a file or directory from which to read the source code, the default value of which varies between bundle and bundleless builds:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["When ",(0,i.jsx)(n.code,{children:"buildType: 'bundle'"}),", ",(0,i.jsx)(n.code,{children:"input"})," defaults to ",(0,i.jsx)(n.code,{children:"src/index.(j|t)sx?"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["When ",(0,i.jsx)(n.code,{children:"buildType: 'bundleless'"}),", ",(0,i.jsx)(n.code,{children:"input"})," defaults to ",(0,i.jsx)(n.code,{children:"['src']"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["From the default value, we know that ",(0,i.jsx)(n.strong,{children:"building in bundle mode usually specifies one or more files as the entry point for the build, while building in bundleless mode specifies a directory and uses all the files in that directory as the entry point"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/api/config/build-config#sourcedir",children:(0,i.jsx)(n.code,{children:"sourceDir"})})," is used to specify the source directory, which is ",(0,i.jsx)(n.strong,{children:"only"})," related to the following two elements:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Type file generation"}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://esbuild.github.io/api/#outbase",target:"_blank",rel:"noopener noreferrer",children:(0,i.jsx)(n.code,{children:"outbase"})})," for specifying the build process"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"So we can get its best practices:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsxs)(n.strong,{children:["Only specify ",(0,i.jsx)(n.code,{children:"input"})," during the bundle build."]})}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsxs)(n.strong,{children:["In general, bundleless only needs to specify ",(0,i.jsx)(n.code,{children:"sourceDir"})," (where ",(0,i.jsx)(n.code,{children:"input"})," will be aligned with ",(0,i.jsx)(n.code,{children:"sourceDir"}),")."]})," If we want to use the ",(0,i.jsx)(n.code,{children:"input"})," in bundleless, we only need to specify ",(0,i.jsx)(n.code,{children:"sourceDir"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["If you want to convert only some of the files in bundleless, e.g. only the files in the ",(0,i.jsx)(n.code,{children:"src/runtime"})," directory, you need to configure ",(0,i.jsx)(n.code,{children:"input"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",meta:'title="modern.config.ts"',children:"import { defineConfig } from '@modern-js/module-tools';\n\nexport default defineConfig({\n  buildConfig: {\n    input: ['src/runtime'],\n    sourceDir: 'src',\n  },\n});\n"})}),"\n",(0,i.jsxs)(n.h2,{id:"use-swc",children:["use swc",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#use-swc",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"In some scenarios, esbuild is not enough to meet our needs, and we will use swc to do the code conversion."}),"\n",(0,i.jsxs)(n.p,{children:["Starting from version ",(0,i.jsx)(n.strong,{children:"2.36.0"}),", the Modern.js Module will use swc by default when it comes to the following functionality, but that doesn't mean we don't use esbuild any more, the rest of the functionality will still use esbuild."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/api/config/build-config#transformimport",children:"transformImport"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/api/config/build-config#transformlodash",children:"transformLodash"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/api/config/build-config#externalhelpers",children:"externalHelpers"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/api/config/build-config#format-umd",children:"format: umd"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/api/config/build-config#target",children:"target: es5"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://www.typescriptlang.org/tsconfig#emitDecoratorMetadata",target:"_blank",rel:"noopener noreferrer",children:"emitDecoratorMetadata: true"})}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["In fact, we've been using swc for full code conversion since version ",(0,i.jsx)(n.strong,{children:"2.16.0"}),". However, swc also has some limitations, so we added ",(0,i.jsx)(n.a,{href:"/api/config/build-config#sourcetype",children:"sourceType"})," to turn off swc when the source is formatted as 'commonjs', which isn't really user-intuitive, and the cjs mode of the swc formatted outputs don't have annotate each export name, which can cause problems in node.\nSo we deprecated this behaviour and went back to the original design - ",(0,i.jsx)(n.strong,{children:"using swc as a supplement only in situations where it was needed"}),"."]}),"\n",(0,i.jsxs)(n.h2,{id:"using-hooks-to-intervene-in-the-build-process",children:["Using Hooks to Intervene in the Build Process",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#using-hooks-to-intervene-in-the-build-process",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["The Modern.js Module provides a Hook mechanism that allows us to inject custom logic at different stages of the build process.\nThe Modern.js Module Hook is implemented using ",(0,i.jsx)(n.a,{href:"https://github.com/webpack/tapable",target:"_blank",rel:"noopener noreferrer",children:"tapable"}),", which extends esbuild's plugin mechanism, and is recommended to be used directly if esbuild plugins already meet your needs.\nHere's how to use it:"]}),"\n",(0,i.jsxs)(n.h3,{id:"hook-type",children:["Hook type",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#hook-type",children:"#"})]}),"\n",(0,i.jsxs)(n.h4,{id:"asyncseriesbailhook",children:["AsyncSeriesBailHook",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#asyncseriesbailhook",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"Serial hooks that stop the execution of other tapped functions if a tapped function returns a non-undefined result."}),"\n",(0,i.jsxs)(n.h4,{id:"asyncserieswaterfallhooks",children:["AsyncSeriesWaterFallHooks",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#asyncserieswaterfallhooks",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"Serial hooks whose results are passed to the next tapped function."}),"\n",(0,i.jsxs)(n.h3,{id:"hook-api",children:["Hook API",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#hook-api",children:"#"})]}),"\n",(0,i.jsxs)(n.h4,{id:"load",children:["load",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#load",children:"#"})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"AsyncSeriesBailHook"}),"\n",(0,i.jsxs)(n.li,{children:["Triggered at esbuild ",(0,i.jsx)(n.a,{href:"https://esbuild.github.io/plugins/#on-load",target:"_blank",rel:"noopener noreferrer",children:"onLoad callbacks"})," to fetch module content based on the module path"]}),"\n",(0,i.jsx)(n.li,{children:"Input parameters"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"interface LoadArgs {\n  path: string;\n  namespace: string;\n  suffix: string;\n}\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Return parameters"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"type LoadResult =\n  | {\n      contents: string; // module contents\n      map?: SourceMap; // https://esbuild.github.io/api/#sourcemap\n      loader?: Loader; // https://esbuild.github.io/api/#loader\n      resolveDir?: string;\n    }\n  | undefined;\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Example"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"compiler.hooks.load.tapPromise('load content from memfs', async args => {\n  const contents = memfs.readFileSync(args.path);\n  return {\n    contents: contents,\n    loader: 'js',\n  };\n});\n"})}),"\n",(0,i.jsxs)(n.h4,{id:"transform",children:["transform",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#transform",children:"#"})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"AsyncSeriesWaterFallHooks"}),"\n",(0,i.jsxs)(n.li,{children:["Triggered at esbuild ",(0,i.jsx)(n.a,{href:"https://esbuild.github.io/plugins/#on-load",target:"_blank",rel:"noopener noreferrer",children:"onLoad callbacks"}),".\nTransforms the contents of the module fetched during the load phase"]}),"\n",(0,i.jsx)(n.li,{children:"Input parameters (return parameters)"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"export type Source = {\n  code: string;\n  map?: SourceMap;\n  path: string;\n  loader?: string;\n};\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Example"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"compiler.hooks.transform.tapPromise('6to5', async args => {\n  const result = babelTransform(args.code, { presets: ['@babel/preset-env'] });\n  return {\n    code: result.code,\n    map: result.map,\n  };\n});\n"})}),"\n",(0,i.jsxs)(n.h4,{id:"renderchunk",children:["renderChunk",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#renderchunk",children:"#"})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"AsyncSeriesWaterFallHooks"}),"\n",(0,i.jsxs)(n.li,{children:["Triggered at esbuild ",(0,i.jsx)(n.a,{href:"https://esbuild.github.io/plugins/#on-end",target:"_blank",rel:"noopener noreferrer",children:"onEnd callbacks"}),".\nThis is similar to the transform hook, but works on the artifacts generated by esbuild."]}),"\n",(0,i.jsx)(n.li,{children:"Input parameters (return parameters)"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"export type AssetChunk = {\n  type: 'asset';\n  contents: string | Buffer;\n  entryPoint?: string;\n  /**\n   * absolute file path\n   */\n  fileName: string;\n  originalFileName?: string;\n};\n\nexport type JsChunk = {\n  type: 'chunk';\n  contents: string;\n  entryPoint?: string;\n  /**\n   * absolute file path\n   */\n  fileName: string;\n  map?: SourceMap;\n  modules?: Record<string, any>;\n  originalFileName?: string;\n};\n\nexport type Chunk = AssetChunk | JsChunk;\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Examples"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"compiler.hooks.renderChunk.tapPromise('minify', async chunk => {\n  if (chunk.type === 'chunk') {\n    const code = chunk.contents.toString();\n    const result = await minify.call(compiler, code);\n    return {\n      ...chunk,\n      contents: result.code,\n      map: result.map,\n    };\n  }\n  return chunk;\n});\n"})}),"\n",(0,i.jsxs)(n.h2,{id:"dts",children:["dts",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#dts",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.a,{href:"/en/api/config/build-config#dts",children:(0,i.jsx)(n.code,{children:"buildConfig.dts"})})," configuration is mainly used for type file generation."]}),"\n",(0,i.jsxs)(n.h3,{id:"turn-off-type-generation",children:["Turn off type generation",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#turn-off-type-generation",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"Type generation is turned on by default, if you need to turn it off, you can configure it as follows:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",meta:'title="modern.config.ts"',children:"import { defineConfig } from '@modern-js/module-tools';\n\nexport default defineConfig({\n  buildConfig: {\n    dts: false,\n  },\n});\n"})}),"\n",(0,i.jsxs)(n.div,{className:"rspress-directive tip",children:[(0,i.jsx)(n.div,{className:"rspress-directive-title",children:"TIP"}),(0,i.jsx)(n.div,{className:"rspress-directive-content",children:(0,i.jsx)(n.p,{children:"The build speed is generally improved by closing the type file."})})]}),"\n",(0,i.jsxs)(n.h3,{id:"build-type-files",children:["Build type files",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#build-type-files",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["With ",(0,i.jsx)(n.code,{children:"buildType: 'bundleless'"}),", type files are generated using the project's ",(0,i.jsx)(n.code,{children:"tsc"})," command to complete production."]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.strong,{children:"Modern.js Module also supports bundling of type files"}),", although care needs to be taken when using this feature."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Bundle type files does not enable type checking."}),"\n",(0,i.jsxs)(n.li,{children:["Some third-party dependencies have incorrect syntax that can cause the bundling process to fail. So in this case, you need to exclude such third-party packages manually with ",(0,i.jsx)(n.a,{href:"/en/api/config/build-config#externals",children:(0,i.jsx)(n.code,{children:"buildConfig.externals"})})," or close ",(0,i.jsx)(n.a,{href:"/api/config/build-config#dtsrespectexternal",children:"dts.respectExternal"})," to external all third-party packages types."]}),"\n",(0,i.jsxs)(n.li,{children:["It is not possible to handle the case where the type file of a third-party dependency points to a ",(0,i.jsx)(n.code,{children:".ts"})," file. For example, the ",(0,i.jsx)(n.code,{children:"package.json"})," of a third-party dependency contains something like this: ",(0,i.jsx)(n.code,{children:'{"types": ". /src/index.ts"}'}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["For the above problems, our recommended approach is to first use ",(0,i.jsx)(n.code,{children:"tsc"})," to generate d.ts files, then package the index.d.ts as the entry and close ",(0,i.jsx)(n.code,{children:"dts.respectExternal"}),". In the future evolution, we will gradually move towards this handling approach."]}),"\n",(0,i.jsxs)(n.h3,{id:"alias-conversion",children:["Alias Conversion",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#alias-conversion",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"During the bundleless build process, if an alias appears in the source code, e.g."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",meta:'title="./src/index.ts"',children:"import utils from '@common/utils';\n"})}),"\n",(0,i.jsxs)(n.p,{children:["The type files generated with ",(0,i.jsx)(n.code,{children:"tsc"})," will also contain these aliases. However, Modern.js Module will convert the aliases in the type file generated by ",(0,i.jsx)(n.code,{children:"tsc"}),"."]}),"\n",(0,i.jsxs)(n.h3,{id:"some-examples-of-the-use-of-dts",children:["Some examples of the use of ",(0,i.jsx)(n.code,{children:"dts"}),(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#some-examples-of-the-use-of-dts",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"General usage:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"import { defineConfig } from '@modern-js/module-tools';\n\nexport default defineConfig({\n  // The output path of the bundled type file at this point is `./dist/types`\n  buildConfig: {\n    buildType: 'bundle',\n    dts: {\n      tsconfigPath: './other-tsconfig.json',\n      distPath: './types',\n    },\n    outDir: './dist',\n  },\n});\n"})}),"\n",(0,i.jsxs)(n.p,{children:["For the use of ",(0,i.jsx)(n.code,{children:"dts.only"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"import { defineConfig } from '@modern-js/module-tools';\n\nexport default defineConfig({\n  // At this moment the type file is not bundled and the output path is `./dist/types`\n  buildConfig: [\n    {\n      buildType: 'bundle',\n      dts: false,\n      outDir: './dist',\n    },\n    {\n      buildType: 'bundleless',\n      dts: {\n        only: true,\n      },\n      outDir: './dist/types',\n    },\n  ],\n});\n"})}),"\n",(0,i.jsxs)(n.h2,{id:"build-process",children:["Build process",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#build-process",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["When the ",(0,i.jsx)(n.code,{children:"modern build"})," command is executed, the"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Clear the output directory according to ",(0,i.jsx)(n.code,{children:"buildConfig.outDir"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Compile ",(0,i.jsx)(n.code,{children:"js/ts"})," source code to generate the JS build artifacts for bundle/bundleless."]}),"\n",(0,i.jsxs)(n.li,{children:["Generate bundle/bundleless type files using ",(0,i.jsx)(n.code,{children:"tsc"}),"."]}),"\n",(0,i.jsx)(n.li,{children:"Handle Copy tasks."}),"\n"]}),"\n",(0,i.jsxs)(n.h2,{id:"build-errors",children:["Build errors",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#build-errors",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"When a build error occurs, based on the information learned above, it is easy to understand what error appears in the terminal."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Errors reported for js or ts builds:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'error  ModuleBuildError:\n\n\u256D\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u256E\n\u2502 bundle failed:        \u2502\n\u2502  - format is "cjs"    \u2502\n\u2502  - target is "esnext" \u2502\n\u2570\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u256F\n\nDetailed Information:\n'})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Errors reported for the type file generation process:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"error   ModuleBuildError:\n\nbundle DTS failed:\n"})}),"\n",(0,i.jsxs)(n.p,{children:["For ",(0,i.jsx)(n.code,{children:"js/ts"})," build errors, we can tell from the error message."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["By ",(0,i.jsx)(n.code,{children:"'bundle failed:'"})," to determine if the error is reported for a bundle build or a bundleless build"]}),"\n",(0,i.jsxs)(n.li,{children:["What is the ",(0,i.jsx)(n.code,{children:"format"})," of the build process"]}),"\n",(0,i.jsxs)(n.li,{children:["What is the ",(0,i.jsx)(n.code,{children:"target"})," of the build process"]}),"\n",(0,i.jsx)(n.li,{children:"The specific error message"}),"\n"]}),"\n",(0,i.jsxs)(n.h2,{id:"debug-mode",children:["Debug mode",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#debug-mode",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["From ",(0,i.jsx)(n.strong,{children:"2.36.0"}),", For troubleshooting purposes, the Modern.js Module provides a debug mode, which you can enable by adding the DEBUG=module environment variable when executing a build."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"DEBUG=module modern build\n"})}),"\n",(0,i.jsx)(n.p,{children:"In debug mode, you'll see more detailed build logs output in Shell, which are mainly process logs:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"module run beforeBuildTask hooks +6ms\nmodule run beforeBuildTask hooks done +0ms\nmodule [DTS] Build Start +139ms\nmodule [CJS] Build Start +1ms\n"})}),"\n",(0,i.jsxs)(n.p,{children:["In addition, Module provides the ability to debug internal workflows. You can enable more detailed debugging logging by setting the ",(0,i.jsx)(n.code,{children:"DEBUG=module:*"})," environment variable."]}),"\n",(0,i.jsxs)(n.p,{children:["Currently, only ",(0,i.jsx)(n.code,{children:"DEBUG=module:resolve"})," is supported, which allows you to see a detailed log of module resolution within the Module."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"  module:resolve onResolve args: {\n  path: './src/hooks/misc.ts',\n  importer: '',\n  namespace: 'file',\n  resolveDir: '/Users/bytedance/modern.js/packages/solutions/module-tools',\n  kind: 'entry-point',\n  pluginData: undefined\n} +0ms\n  module:resolve onResolve result: {\n  path: '/Users/bytedance/modern.js/packages/solutions/module-tools/src/hooks/misc.ts',\n  external: false,\n  namespace: 'file',\n  sideEffects: undefined,\n  suffix: ''\n} +0ms\n"})})]})}function t(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}n.default=t,t.__RSPRESS_PAGE_META={},t.__RSPRESS_PAGE_META["en%2Fguide%2Fadvance%2Fin-depth-about-build.md"]={toc:[{text:"`bundle` / `bundleless`",id:"bundle--bundleless",depth:2},{text:"`input` / `sourceDir`",id:"input--sourcedir",depth:2},{text:"use swc",id:"use-swc",depth:2},{text:"Using Hooks to Intervene in the Build Process",id:"using-hooks-to-intervene-in-the-build-process",depth:2},{text:"Hook type",id:"hook-type",depth:3},{text:"AsyncSeriesBailHook",id:"asyncseriesbailhook",depth:4},{text:"AsyncSeriesWaterFallHooks",id:"asyncserieswaterfallhooks",depth:4},{text:"Hook API",id:"hook-api",depth:3},{text:"load",id:"load",depth:4},{text:"transform",id:"transform",depth:4},{text:"renderChunk",id:"renderchunk",depth:4},{text:"dts",id:"dts",depth:2},{text:"Turn off type generation",id:"turn-off-type-generation",depth:3},{text:"Build type files",id:"build-type-files",depth:3},{text:"Alias Conversion",id:"alias-conversion",depth:3},{text:"Some examples of the use of `dts`",id:"some-examples-of-the-use-of-dts",depth:3},{text:"Build process",id:"build-process",depth:2},{text:"Build errors",id:"build-errors",depth:2},{text:"Debug mode",id:"debug-mode",depth:2}],title:"In-depth understanding of build",frontmatter:{sidebar_position:1}}}}]);