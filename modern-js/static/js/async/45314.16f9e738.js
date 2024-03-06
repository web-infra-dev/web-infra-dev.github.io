/*! For license information please see 45314.16f9e738.js.LICENSE.txt */
(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["45314"],{89670:function(e,n,s){"use strict";s.r(n);var t=s("39980"),r=s("96954");function o(e){let n=Object.assign({h1:"h1",a:"a",ul:"ul",li:"li",strong:"strong",code:"code",pre:"pre",p:"p",h3:"h3"},(0,r.useMDXComponents)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.h1,{id:"toolstschecker",children:["tools.tsChecker",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#toolstschecker",children:"#"})]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Type:"})," ",(0,t.jsx)(n.code,{children:"Object | Function"})]}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"Default:"})}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"const defaultOptions = {\n  typescript: {\n    // avoid OOM issue\n    memoryLimit: 8192,\n    // use tsconfig of user project\n    configFile: tsconfigPath,\n    // use typescript of user project\n    typescriptPath: require.resolve('typescript'),\n  },\n  issue: {\n    exclude: [\n      { file: '**/*.(spec|test).ts' },\n      { file: '**/node_modules/**/*' },\n    ],\n  },\n  logger: {\n    log() {\n      // do nothing\n      // we only want to display error messages\n    },\n    error(message: string) {\n      console.error(message.replace(/ERROR/g, 'Type Error'));\n    },\n  },\n},\n"})}),"\n",(0,t.jsxs)(n.p,{children:["By default, the ",(0,t.jsx)(n.a,{href:"https://github.com/TypeStrong/fork-ts-checker-webpack-plugin",target:"_blank",rel:"noopener noreferrer",children:"fork-ts-checker-webpack-plugin"})," is enabled for type checking. You can use ",(0,t.jsx)(n.code,{children:"output.disableTsChecker"})," config to disable it."]}),"\n",(0,t.jsxs)(n.h3,{id:"object-type",children:["Object Type",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#object-type",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:["When the value of ",(0,t.jsx)(n.code,{children:"tsChecker"})," is of type Object, it will be deeply merged with the default configuration."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"export default {\n  tools: {\n    tsChecker: {\n      issue: {\n        exclude: [{ file: '**/some-folder/**/*.ts' }],\n      },\n    },\n  },\n};\n"})}),"\n",(0,t.jsxs)(n.h3,{id:"function-type",children:["Function Type",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#function-type",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:["When the value of ",(0,t.jsx)(n.code,{children:"tsChecker"})," is of type Function, the default configuration will be passed as the first argument. You can directly modify the configuration object or return an object as the final configuration."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"export default {\n  tools: {\n    tsChecker(options) {\n      (options?.issue?.exclude as unknown[]).push({\n        file: '**/some-folder/**/*.ts',\n      });\n    },\n  },\n};\n"})})]})}function c(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,r.useMDXComponents)(),e.components);return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}n.default=c,c.__RSPRESS_PAGE_META={},c.__RSPRESS_PAGE_META["en%2Fconfigure%2Fapp%2Ftools%2Fts-checker.mdx"]={toc:[{text:"Object Type",id:"object-type",depth:3},{text:"Function Type",id:"function-type",depth:3}],title:"tools.tsChecker",frontmatter:{sidebar_label:"tsChecker"}}}}]);