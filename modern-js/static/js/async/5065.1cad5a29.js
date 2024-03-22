/*! For license information please see 5065.1cad5a29.js.LICENSE.txt */
(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["5065"],{98095:function(e,n,o){"use strict";o.r(n);var r=o("39980"),s=o("96954");function i(e){let n=Object.assign({h1:"h1",a:"a",ul:"ul",li:"li",strong:"strong",pre:"pre",code:"code",p:"p",h3:"h3"},(0,s.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"sourceinclude",children:["source.include",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#sourceinclude",children:"#"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Type:"})," ",(0,r.jsx)(n.a,{href:"https://rspack.dev/config/module#condition",target:"_blank",rel:"noopener noreferrer",children:"RuleSetCondition[]"})]}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"Default:"})}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"const defaultInclude = [\n  {\n    and: [rootPath, { not: /[\\\\/]node_modules[\\\\/]/ }],\n  },\n  /\\.(?:ts|tsx|jsx|mts|cts)$/,\n];\n"})}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"source.include"})," is used to specify additional JavaScript files that need to be compiled."]}),"\n",(0,r.jsx)(n.p,{children:"To avoid redundant compilation, by default, Rsbuild only compiles JavaScript files in the current directory and TypeScript and JSX files in all directories. It does not compile JavaScript files under node_modules."}),"\n",(0,r.jsxs)(n.p,{children:["Through the ",(0,r.jsx)(n.code,{children:"source.include"})," config, you can specify directories or modules that need to be compiled by Rsbuild. The usage of ",(0,r.jsx)(n.code,{children:"source.include"})," is consistent with ",(0,r.jsx)(n.a,{href:"https://rspack.dev/config/module#ruleinclude",target:"_blank",rel:"noopener noreferrer",children:"Rule.include"})," in Rspack, which supports passing in strings or regular expressions to match the module path."]}),"\n",(0,r.jsx)(n.p,{children:"For example:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"import path from 'path';\n\nexport default {\n  source: {\n    include: [path.resolve(__dirname, '../other-dir')],\n  },\n};\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"compile-npm-packages",children:["Compile Npm Packages",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#compile-npm-packages",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"A typical usage scenario is to compile npm packages under node_modules, because some third-party dependencies have ES6+ syntax, which may cause them to fail to run on low-version browsers. You can solve the problem by using this config to specify the dependencies that need to be compiled."}),"\n",(0,r.jsxs)(n.p,{children:["Take ",(0,r.jsx)(n.code,{children:"query-string"})," as an example, you can add the following config:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"import path from 'path';\n\nexport default {\n  source: {\n    include: [\n      // Method 1:\n      // First get the path of the module by require.resolve\n      // Then pass path.dirname to point to the corresponding directory\n      path.dirname(require.resolve('query-string')),\n      // Method 2:\n      // Match by regular expression\n      // All paths containing `/node_modules/query-string/` will be matched\n      /\\/node_modules\\/query-string\\//,\n    ],\n  },\n};\n"})}),"\n",(0,r.jsx)(n.p,{children:'The above two methods match the absolute paths of files using "path prefixes" and "regular expressions" respectively. It is worth noting that all referenced modules in the project will be matched. Therefore, you should avoid using overly loose values for matching to prevent compilation performance issues or compilation errors.'}),"\n",(0,r.jsxs)(n.h3,{id:"compile-sub-dependencies",children:["Compile Sub Dependencies",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#compile-sub-dependencies",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["When you compile an npm package via ",(0,r.jsx)(n.code,{children:"source.include"}),", Builder will only compile the matching module by default, not the ",(0,r.jsx)(n.strong,{children:"Sub Dependencies"})," of the module."]}),"\n",(0,r.jsxs)(n.p,{children:["Take ",(0,r.jsx)(n.code,{children:"query-string"})," for example, it depends on the ",(0,r.jsx)(n.code,{children:"decode-uri-component"})," package, which also has ES6+ code, so you need to add the ",(0,r.jsx)(n.code,{children:"decode-uri-component"})," package to ",(0,r.jsx)(n.code,{children:"source.include"})," as well."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"export default {\n  source: {\n    include: [\n      /\\/node_modules\\/query-string\\//,\n      /\\/node_modules\\/decode-uri-component\\//,\n    ],\n  },\n};\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"compile-libraries-in-monorepo",children:["Compile Libraries in Monorepo",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#compile-libraries-in-monorepo",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["When developing in Monorepo, if you need to refer to the source code of other libraries in Monorepo, you can add the corresponding library to ",(0,r.jsx)(n.code,{children:"source.include"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"import path from 'path';\n\nexport default {\n  source: {\n    include: [\n      // Method 1:\n      // Compile all files in Monorepo's package directory\n      path.resolve(__dirname, '../../packages'),\n\n      // Method 2:\n      // Compile the source code of a package in Monorepo's package directory\n      // This way of writing matches the range more accurately and has less impact on the overall build performance.\n      path.resolve(__dirname, '../../packages/xxx/src'),\n    ],\n  },\n};\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"compile-commonjs-module",children:["Compile CommonJS Module",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#compile-commonjs-module",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["Babel cannot compile CommonJS modules by default, and if you compile a CommonJS module, you may get a runtime error message ",(0,r.jsx)(n.code,{children:"exports is not defined"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["When you need to compile a CommonJS module using ",(0,r.jsx)(n.code,{children:"source.include"}),", you can set Babel's ",(0,r.jsx)(n.code,{children:"sourceType"})," configuration to ",(0,r.jsx)(n.code,{children:"unambiguous"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"export default {\n  tools: {\n    babel(config) {\n      config.sourceType = 'unambiguous';\n    },\n  },\n};\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Setting ",(0,r.jsx)(n.code,{children:"sourceType"})," to ",(0,r.jsx)(n.code,{children:"unambiguous"})," may have some other effects, please refer to ",(0,r.jsx)(n.a,{href:"https://babeljs.io/docs/en/options#sourcetype",target:"_blank",rel:"noopener noreferrer",children:"Babel official documentation"}),"."]}),"\n",(0,r.jsxs)(n.h3,{id:"matching-symlink",children:["Matching Symlink",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#matching-symlink",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["If you match a module that is symlinked to the current project, then you need to match the ",(0,r.jsx)(n.strong,{children:"real path"})," of the module, not the symlinked path."]}),"\n",(0,r.jsxs)(n.p,{children:["For example, if you symlink the ",(0,r.jsx)(n.code,{children:"packages/foo"})," path in Monorepo to the ",(0,r.jsx)(n.code,{children:"node_modules/foo"})," path of the current project, you need to match the ",(0,r.jsx)(n.code,{children:"packages/foo"})," path, not the ",(0,r.jsx)(n.code,{children:"node_modules/foo"})," path."]}),"\n",(0,r.jsxs)(n.p,{children:["This behavior can be controlled via webpack's ",(0,r.jsx)(n.a,{href:"https://webpack.js.org/configuration/resolve/#resolvesymlinks",target:"_blank",rel:"noopener noreferrer",children:"resolve.symlinks"})," config."]}),"\n",(0,r.jsxs)(n.h3,{id:"precautions",children:["Precautions",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#precautions",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["Note that ",(0,r.jsx)(n.code,{children:"source.include"})," should not be used to compile the entire ",(0,r.jsx)(n.code,{children:"node_modules"})," directory. For example, the following usage is wrong:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"export default {\n  source: {\n    include: [/\\/node_modules\\//],\n  },\n};\n"})}),"\n",(0,r.jsxs)(n.p,{children:["If you compile the entire ",(0,r.jsx)(n.code,{children:"node_modules"}),", not only will the build time be greatly increased, but also unexpected errors may occur. Because most of the npm packages in ",(0,r.jsx)(n.code,{children:"node_modules"})," are already compiled, there is usually no need for a second compilation. In addition, exceptions may occur after npm packages such as ",(0,r.jsx)(n.code,{children:"core-js"})," are compiled."]})]})}function c(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,s.useMDXComponents)(),e.components);return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}n.default=c,c.__RSPRESS_PAGE_META={},c.__RSPRESS_PAGE_META["en%2Fconfigure%2Fapp%2Fsource%2Finclude.mdx"]={toc:[{text:"Compile Npm Packages",id:"compile-npm-packages",depth:3},{text:"Compile Sub Dependencies",id:"compile-sub-dependencies",depth:3},{text:"Compile Libraries in Monorepo",id:"compile-libraries-in-monorepo",depth:3},{text:"Compile CommonJS Module",id:"compile-commonjs-module",depth:3},{text:"Matching Symlink",id:"matching-symlink",depth:3},{text:"Precautions",id:"precautions",depth:3}],title:"source.include",frontmatter:{sidebar_label:"include"}}}}]);