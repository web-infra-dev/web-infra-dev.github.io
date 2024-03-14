/*! For license information please see 7855.18da3d6a.js.LICENSE.txt */
(self.webpackChunk_modern_js_module_tools_docs=self.webpackChunk_modern_js_module_tools_docs||[]).push([["7855"],{471:function(e,n,i){"use strict";i.r(n);var a=i("39980"),t=i("96954");function l(e){let n=Object.assign({h1:"h1",a:"a",p:"p",strong:"strong",ul:"ul",li:"li",pre:"pre",code:"code",h2:"h2",h3:"h3"},(0,t.useMDXComponents)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.h1,{id:"build-umd-artifacts",children:["Build umd artifacts",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#build-umd-artifacts",children:"#"})]}),"\n",(0,a.jsxs)(n.p,{children:["The full name of umd is ",(0,a.jsx)(n.strong,{children:"Universal Module Definition"}),", and JS files in this format can run in multiple runtime environments: the"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Browser environment: module loading based on AMD specification"}),"\n",(0,a.jsx)(n.li,{children:"Node.js environment: module loading based on CommonJS"}),"\n",(0,a.jsx)(n.li,{children:"Other cases: mount the module on a global object."}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"We can therefore specify the build artifacts of the project as an umd artifact in the following way:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"export default defineConfig({\n  buildConfig: {\n    format: 'umd',\n  },\n});\n"})}),"\n",(0,a.jsxs)(n.h2,{id:"third-party-dependency-handling-for-umd-artifacts",children:["Third-party dependency handling for umd artifacts",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#third-party-dependency-handling-for-umd-artifacts",children:"#"})]}),"\n",(0,a.jsxs)(n.p,{children:["In the ",(0,a.jsx)(n.a,{href:"/en/guide/advance/external-dependency",children:'"How to handle third-party dependencies"'})," chapter, we know that we can control whether or not the project packages third-party dependencies via the ",(0,a.jsx)(n.a,{href:"/en/api/config/build-config#autoexternal",children:(0,a.jsx)(n.code,{children:"autoExternals"})})," and ",(0,a.jsx)(n.a,{href:"/en/api/config/build-config#externals",children:(0,a.jsx)(n.code,{children:"externals"})})," APIs.\nSo when building umd artifacts, we can also use it like this:"]}),"\n",(0,a.jsxs)(n.h3,{id:"example",children:["Example",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#example",children:"#"})]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["If the project depends on ",(0,a.jsx)(n.code,{children:"react"}),":"]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",meta:'title="package.json"',children:'{\n  "dependencies": {\n    "react": "^17"\n  }\n}\n'})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"modern.config.ts"}),":"]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"export default defineConfig({\n  buildConfig: {\n    format: 'umd',\n    autoExternal: false,\n    externals: ['react'],\n  },\n});\n"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["When a ",(0,a.jsx)(n.code,{children:"react"})," dependency is used in the source code:"]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",meta:'title="src/index.ts"',children:"import React from 'react';\nconsole.info(React);\n"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["The ",(0,a.jsx)(n.code,{children:"react"})," code is not bundled into the artifact at this point:"]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",meta:'title="dist/index.js"',children:"(function (global, factory) {\n  if (typeof module === 'object' && typeof module.exports === 'object')\n    factory(exports, require('react'));\n  else if (typeof define === 'function' && define.amd)\n    define(['exports', 'react'], factory);\n  else if (\n    (global = typeof globalThis !== 'undefined' ? globalThis : global || self)\n  )\n    factory((global.index = {}), global.react);\n})(this, function (exports, _react) {\n  'use strict';\n  Object.defineProperty(exports, '__esModule', {\n    value: true,\n  });\n  _react = /*#__PURE__*/ _interopRequireDefault(_react);\n  function _interopRequireDefault(obj) {\n    return obj && obj.__esModule\n      ? obj\n      : {\n          default: obj,\n        };\n  }\n  console.info(_react.default);\n});\n"})}),"\n",(0,a.jsxs)(n.p,{children:["We know from the above example that when using the ",(0,a.jsx)(n.code,{children:"autoExternal"})," and ",(0,a.jsx)(n.code,{children:"externals"})," APIs."]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["In a Node.js environment, you can get the react dependency with ",(0,a.jsx)(n.code,{children:"require('react')"}),"."]}),"\n",(0,a.jsxs)(n.li,{children:["In a browser environment, you can get the react dependency via ",(0,a.jsx)(n.code,{children:"global.react"}),"."]}),"\n"]}),"\n",(0,a.jsxs)(n.h3,{id:"global-variable-names-of-third-party-dependencies",children:["Global variable names of third-party dependencies",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#global-variable-names-of-third-party-dependencies",children:"#"})]}),"\n",(0,a.jsxs)(n.p,{children:["However, in the browser environment, when getting third-party dependencies, ",(0,a.jsx)(n.strong,{children:"global variable names are not necessarily identical to the dependency names"}),", so you have to use the ",(0,a.jsx)(n.a,{href:"/en/api/config/build-config#umdglobals",children:(0,a.jsx)(n.code,{children:"buildConfig.umdGlobals"})})," API."]}),"\n",(0,a.jsxs)(n.p,{children:["Again using the previous example, when the ",(0,a.jsx)(n.code,{children:"react"})," dependency exists in the browser environment as a ",(0,a.jsx)(n.code,{children:"windows.React"})," or ",(0,a.jsx)(n.code,{children:"global.React"})," global variable, then:"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"modern.config.ts"})," config file:"]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"export default defineConfig({\n  buildConfig: {\n    format: 'umd',\n    umdGlobals: {\n      react: 'React',\n    },\n  },\n});\n"})}),"\n",(0,a.jsxs)(n.p,{children:["When a ",(0,a.jsx)(n.code,{children:"react"})," dependency is used in the source code:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",meta:'title="src/index.ts"',children:"import React from 'react';\nconsole.info(React);\n"})}),"\n",(0,a.jsx)(n.p,{children:"At this point we will see the output code like this:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",meta:'title="dist/index.js"',children:"(function (global, factory) {\n  if (typeof module === 'object' && typeof module.exports === 'object')\n    factory();\n  else if (typeof define === 'function' && define.amd) define([], factory);\n  else if (\n    (global = typeof globalThis !== 'undefined' ? globalThis : global || self)\n  )\n    factory();\n})(this, function () {\n  // ...\n  // libuild:globals:react\n  var require_react = __commonJS({\n    'libuild:globals:react'(exports, module1) {\n      module1.exports = Function('return this')()['React'];\n    },\n  });\n  // src/index.ts\n  var import_react = __toESM(require_react());\n  console.info(import_react.default);\n});\n"})}),"\n",(0,a.jsxs)(n.p,{children:["The project can then run in the browser and use the ",(0,a.jsx)(n.code,{children:"React"})," variables that exist on the global object."]}),"\n",(0,a.jsxs)(n.h2,{id:"changing-the-name-of-a-global-variable-in-a-project",children:["Changing the name of a global variable in a project",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#changing-the-name-of-a-global-variable-in-a-project",children:"#"})]}),"\n",(0,a.jsxs)(n.p,{children:["When we package the following code into an umd artifact and run it in the browser, we can use the module via ",(0,a.jsx)(n.code,{children:"window.index"}),"."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",meta:'title="./src/index.ts"',children:"export default () => {\n  console.info('hello world');\n};\n"})}),"\n",(0,a.jsx)(n.p,{children:"** By default, the name of the source file is used as the name of the module's global variable in the browser. **For the above example, the artifact would read as follows:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",meta:'title="./dist/index.js"',children:"(function (global, factory) {\n  if (typeof module === 'object' && typeof module.exports === 'object')\n    factory(exports);\n  else if (typeof define === 'function' && define.amd)\n    define(['exports'], factory);\n  else if (\n    (global = typeof globalThis !== 'undefined' ? globalThis : global || self)\n  )\n    factory((global.index = {}));\n})(this, function (exports) {\n  //...\n});\n"})}),"\n",(0,a.jsxs)(n.p,{children:["If you need to modify it, you need to use the ",(0,a.jsx)(n.a,{href:"/en/api/config/build-config#umdmodulename",children:(0,a.jsx)(n.code,{children:"buildConfig.umdModuleName"})})," API."]}),"\n",(0,a.jsx)(n.p,{children:"When this API is used:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"export default defineConfig({\n  buildConfig: {\n    format: 'umd',\n    umdModuleName: 'myLib',\n  },\n});\n"})}),"\n",(0,a.jsx)(n.p,{children:"The build artifact at this point are:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",meta:'title="./dist/index.js"',children:"(function (global, factory) {\n  if (typeof module === 'object' && typeof module.exports === 'object')\n    factory(exports);\n  else if (typeof define === 'function' && define.amd)\n    define(['exports'], factory);\n  else if (\n    (global = typeof globalThis !== 'undefined' ? globalThis : global || self)\n  )\n    factory((global.myLib = {}));\n})(this, function (exports) {\n  //...\n});\n"})})]})}function o(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,t.useMDXComponents)(),e.components);return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}n.default=o,o.__RSPRESS_PAGE_META={},o.__RSPRESS_PAGE_META["en%2Fguide%2Fadvance%2Fbuild-umd.mdx"]={toc:[{text:"Third-party dependency handling for umd artifacts",id:"third-party-dependency-handling-for-umd-artifacts",depth:2},{text:"Example",id:"example",depth:3},{text:"Global variable names of third-party dependencies",id:"global-variable-names-of-third-party-dependencies",depth:3},{text:"Changing the name of a global variable in a project",id:"changing-the-name-of-a-global-variable-in-a-project",depth:2}],title:"Build umd artifacts",frontmatter:{sidebar_position:5}}}}]);