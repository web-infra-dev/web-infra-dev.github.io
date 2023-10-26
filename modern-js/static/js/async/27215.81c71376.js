(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["27215"],{76896:function(e,n,s){"use strict";s.r(n),s.d(n,{default:function(){return a}});var t=s("15169"),r=s("43932"),o=s("9880"),c=s("23169");function i(e){var n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",pre:"pre",p:"p",a:"a",h3:"h3"},(0,c.useMDXComponents)(),e.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Type:"})," ",(0,o.jsx)(n.code,{children:"Object | Function"})]}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.strong,{children:"Default:"})}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"const defaultOptions = {\n  typescript: {\n    // avoid OOM issue\n    memoryLimit: 8192,\n    // use tsconfig of user project\n    configFile: tsconfigPath,\n    // use typescript of user project\n    typescriptPath: require.resolve('typescript'),\n  },\n  issue: {\n    exclude: [\n      { file: '**/*.(spec|test).ts' },\n      { file: '**/node_modules/**/*' },\n    ],\n  },\n  logger: {\n    log() {\n      // do nothing\n      // we only want to display error messages\n    },\n    error(message: string) {\n      console.error(message.replace(/ERROR/g, 'Type Error'));\n    },\n  },\n},\n"})}),"\n",(0,o.jsxs)(n.p,{children:["By default, the ",(0,o.jsx)(n.a,{href:"https://github.com/TypeStrong/fork-ts-checker-webpack-plugin",target:"_blank",rel:"noopener noreferrer",children:"fork-ts-checker-webpack-plugin"})," is enabled for type checking. You can use ",(0,o.jsx)(n.code,{children:"output.disableTsChecker"})," config to disable it."]}),"\n",(0,o.jsxs)(n.h3,{id:"object-type",children:["Object Type",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#object-type",children:"#"})]}),"\n",(0,o.jsxs)(n.p,{children:["When the value of ",(0,o.jsx)(n.code,{children:"tsChecker"})," is of type Object, it will be deeply merged with the default configuration."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"export default {\n  tools: {\n    tsChecker: {\n      issue: {\n        exclude: [{ file: '**/some-folder/**/*.ts' }],\n      },\n    },\n  },\n};\n"})}),"\n",(0,o.jsxs)(n.h3,{id:"function-type",children:["Function Type",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#function-type",children:"#"})]}),"\n",(0,o.jsxs)(n.p,{children:["When the value of ",(0,o.jsx)(n.code,{children:"tsChecker"})," is of type Function, the default configuration will be passed as the first argument. You can directly modify the configuration object or return an object as the final configuration."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"export default {\n  tools: {\n    tsChecker(options) {\n      (options?.issue?.exclude as unknown[]).push({\n        file: '**/some-folder/**/*.ts',\n      });\n    },\n  },\n};\n"})})]})}function l(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,c.useMDXComponents)(),e.components).wrapper;return n?(0,o.jsx)(n,(0,r._)((0,t._)({},e),{children:(0,o.jsx)(i,(0,t._)({},e))})):i(e)}var a=l;l.__RSPRESS_PAGE_META={},l.__RSPRESS_PAGE_META["..%2F..%2Fbuilder-doc%2Fdocs%2Fen%2Fconfig%2Ftools%2FtsChecker.md"]={toc:[{text:"Object Type",id:"object-type",depth:3},{text:"Function Type",id:"function-type",depth:3}],title:""}},38366:function(e,n,s){"use strict";s.r(n),s.d(n,{default:function(){return d},frontmatter:function(){return h}});var t=s("15169"),r=s("43932"),o=s("9880"),c=s("23169"),i=s("76896");function l(e){var n=Object.assign({h1:"h1",a:"a",div:"div",p:"p"},(0,c.useMDXComponents)(),e.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.h1,{id:"toolstschecker",children:["tools.tsChecker",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#toolstschecker",children:"#"})]}),"\n",(0,o.jsxs)(n.div,{className:"rspress-directive tip",children:[(0,o.jsx)(n.div,{className:"rspress-directive-title",children:"TIP"}),(0,o.jsx)(n.div,{className:"rspress-directive-content",children:(0,o.jsxs)(n.p,{children:["This config is provided by Modern.js Builder, more detail can see ",(0,o.jsx)(n.a,{href:"https://modernjs.dev/builder/en/api/config-tools.html#toolstschecker",target:"_blank",rel:"noopener noreferrer",children:"tools.tsChecker"}),".\n"]})})]}),"\n","\n",(0,o.jsx)(i.default,{})]})}function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,c.useMDXComponents)(),e.components).wrapper;return n?(0,o.jsx)(n,(0,r._)((0,t._)({},e),{children:(0,o.jsx)(l,(0,t._)({},e))})):l(e)}var d=a;a.__RSPRESS_PAGE_META={},a.__RSPRESS_PAGE_META["en%2Fconfigure%2Fapp%2Ftools%2Fts-checker.mdx"]={toc:[],title:"tools.tsChecker"};var h={sidebar_label:"tsChecker"}}}]);