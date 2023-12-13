/*! For license information please see 24583.758dc009.js.LICENSE.txt */
(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["24583"],{69250:function(e,n,s){"use strict";s.r(n),s.d(n,{default:function(){return o}});var r=s("9880"),a=s("23169");function i(e){let n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",pre:"pre",p:"p",h3:"h3",a:"a"},(0,a.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Type:"})," ",(0,r.jsx)(n.code,{children:"Record<string, JSONValue> | Function"})]}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"Default:"})}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"const defaultGlobalVars = {\n  // The environment variable `process.env.NODE_ENV` will be added by default,\n  // so you don't need to set it in manually.\n  'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),\n};\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Used to define global variables. It can replace expressions like ",(0,r.jsx)(n.code,{children:"process.env.FOO"})," in your code after compile. Such as:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"console.log(process.env.NODE_ENV);\n\n// \u2B07\uFE0F Turn into being...\nconsole.log('development');\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"example",children:["Example",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#example",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["In the following example, the ",(0,r.jsx)(n.code,{children:"ENABLE_VCONSOLE"})," and ",(0,r.jsx)(n.code,{children:"APP_CONTEXT"})," are injected into the code:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"export default {\n  source: {\n    globalVars: {\n      ENABLE_VCONSOLE: true,\n      APP_CONTEXT: { answer: 42 },\n    },\n  },\n};\n"})}),"\n",(0,r.jsx)(n.p,{children:"You can use them directly in your code:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"if (ENABLE_VCONSOLE) {\n  // do something\n}\n\nconsole.log(APP_CONTEXT);\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"function-usage",children:["Function Usage",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#function-usage",children:"#"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"Type:"})}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"type GlobalVarsFn = (\n  obj: Record<string, JSONValue>,\n  utils: { env: NodeEnv; target: BuilderTarget },\n) => Record<string, JSONValue> | void;\n"})}),"\n",(0,r.jsxs)(n.p,{children:["You can set ",(0,r.jsx)(n.code,{children:"source.globalVars"})," to a function to dynamically setting some environment variables."]}),"\n",(0,r.jsx)(n.p,{children:"For example, dynamically set according to the build target:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"export default {\n  source: {\n    globalVars(obj, { target }) {\n      obj['MY_TARGET'] = target === 'node' ? 'server' : 'client';\n    },\n  },\n};\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"difference-with-define",children:["Difference with define",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#difference-with-define",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["You can take ",(0,r.jsx)(n.code,{children:"source.globalVars"})," as the syntax sugar of ",(0,r.jsx)(n.code,{children:"source.define"}),", the only difference is that ",(0,r.jsx)(n.code,{children:"source.globalVars"})," will automatically stringify the value, which makes it easier to set the value of global variables. The values of ",(0,r.jsx)(n.code,{children:"globalVars"})," should be JSON-safe to ensure it can be serialized."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"export default {\n  source: {\n    globalVars: {\n      'process.env.BUILD_VERSION': '0.0.1',\n      'import.meta.foo': { bar: 42 },\n      'import.meta.baz': false,\n    },\n    define: {\n      'process.env.BUILD_VERSION': JSON.stringify('0.0.1'),\n      'import.meta': {\n        foo: JSON.stringify({ bar: 42 }),\n        baz: JSON.stringify(false),\n      },\n    },\n  },\n};\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"precautions",children:["Precautions",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#precautions",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"source.globalVars"})," injects environment variables through string replacement, so it cannot take effect on dynamic syntaxes such as destructuring."]}),"\n",(0,r.jsxs)(n.p,{children:["When using destructuring assignment, Builder will not be able to determine whether the variable ",(0,r.jsx)(n.code,{children:"NODE_ENV"})," is associated with the expression ",(0,r.jsx)(n.code,{children:"process.env.NODE_ENV"})," to be replaced, so the following usage is invalid:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"const { NODE_ENV } = process.env;\nconsole.log(NODE_ENV);\n// \u274C Won't get a string.\n"})})]})}function l(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,a.useMDXComponents)(),e.components);return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}var o=l;l.__RSPRESS_PAGE_META={},l.__RSPRESS_PAGE_META["..%2F..%2Fbuilder-doc%2Fdocs%2Fen%2Fconfig%2Fsource%2FglobalVars.md"]={toc:[{text:"Example",id:"example",depth:3},{text:"Function Usage",id:"function-usage",depth:3},{text:"Difference with define",id:"difference-with-define",depth:3},{text:"Precautions",id:"precautions",depth:3}],title:"",frontmatter:{}}},36353:function(e,n,s){"use strict";s.r(n),s.d(n,{default:function(){return c}});var r=s("9880"),a=s("23169"),i=s("69250");function l(e){let n=Object.assign({h1:"h1",a:"a"},(0,a.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"sourceglobalvars",children:["source.globalVars",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#sourceglobalvars",children:"#"})]}),"\n","\n",(0,r.jsx)(i.default,{})]})}function o(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,a.useMDXComponents)(),e.components);return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}var c=o;o.__RSPRESS_PAGE_META={},o.__RSPRESS_PAGE_META["en%2Fconfigure%2Fapp%2Fsource%2Fglobal-vars.mdx"]={toc:[],title:"source.globalVars",frontmatter:{sidebar_label:"globalVars"}}}}]);