(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_en_configure_app_source_global-vars_mdx"],{95600:function(e,n,s){"use strict";s.r(n),s.d(n,{default:function(){return t}});var r,a=s("15169"),i=s("43932"),l=s("9880"),o=s("23169");function c(e){var n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",pre:"pre",p:"p",h3:"h3",a:"a"},(0,o.useMDXComponents)(),e.components);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"Type:"})," ",(0,l.jsx)(n.code,{children:"Record<string, JSONValue> | Function"})]}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.strong,{children:"Default:"})}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-ts",children:"const defaultGlobalVars = {\n  // The environment variable `process.env.NODE_ENV` will be added by default,\n  // so you don't need to set it in manually.\n  'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),\n};\n"})}),"\n",(0,l.jsxs)(n.p,{children:["Used to define global variables. It can replace expressions like ",(0,l.jsx)(n.code,{children:"process.env.FOO"})," in your code after compile. Such as:"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",children:"console.log(process.env.NODE_ENV);\n\n// ⬇️ Turn into being...\nconsole.log('development');\n"})}),"\n",(0,l.jsxs)(n.h3,{id:"example",children:["Example",(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#example",children:"#"})]}),"\n",(0,l.jsxs)(n.p,{children:["In the following example, the ",(0,l.jsx)(n.code,{children:"ENABLE_VCONSOLE"})," and ",(0,l.jsx)(n.code,{children:"APP_CONTEXT"})," are injected into the code:"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",children:"export default {\n  source: {\n    globalVars: {\n      ENABLE_VCONSOLE: true,\n      APP_CONTEXT: { answer: 42 },\n    },\n  },\n};\n"})}),"\n",(0,l.jsx)(n.p,{children:"You can use them directly in your code:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",children:"if (ENABLE_VCONSOLE) {\n  // do something\n}\n\nconsole.log(APP_CONTEXT);\n"})}),"\n",(0,l.jsxs)(n.h3,{id:"function-usage",children:["Function Usage",(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#function-usage",children:"#"})]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.strong,{children:"Type:"})}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-ts",children:"type GlobalVarsFn = (\n  obj: Record<string, JSONValue>,\n  utils: { env: NodeEnv; target: BuilderTarget },\n) => Record<string, JSONValue> | void;\n"})}),"\n",(0,l.jsxs)(n.p,{children:["You can set ",(0,l.jsx)(n.code,{children:"source.globalVars"})," to a function to dynamically setting some environment variables."]}),"\n",(0,l.jsx)(n.p,{children:"For example, dynamically set according to the build target:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",children:"export default {\n  source: {\n    globalVars(obj, { target }) {\n      obj['MY_TARGET'] = target === 'node' ? 'server' : 'client';\n    },\n  },\n};\n"})}),"\n",(0,l.jsxs)(n.h3,{id:"difference-with-define",children:["Difference with define",(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#difference-with-define",children:"#"})]}),"\n",(0,l.jsxs)(n.p,{children:["You can take ",(0,l.jsx)(n.code,{children:"source.globalVars"})," as the syntax sugar of ",(0,l.jsx)(n.code,{children:"source.define"}),", the only difference is that ",(0,l.jsx)(n.code,{children:"source.globalVars"})," will automatically stringify the value, which makes it easier to set the value of global variables. The values of ",(0,l.jsx)(n.code,{children:"globalVars"})," should be JSON-safe to ensure it can be serialized."]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",children:"export default {\n  source: {\n    globalVars: {\n      'process.env.BUILD_VERSION': '0.0.1',\n      'import.meta.foo': { bar: 42 },\n      'import.meta.baz': false,\n    },\n    define: {\n      'process.env.BUILD_VERSION': JSON.stringify('0.0.1'),\n      'import.meta': {\n        foo: JSON.stringify({ bar: 42 }),\n        baz: JSON.stringify(false),\n      },\n    },\n  },\n};\n"})}),"\n",(0,l.jsxs)(n.h3,{id:"precautions",children:["Precautions",(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#precautions",children:"#"})]}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"source.globalVars"})," injects environment variables through string replacement, so it cannot take effect on dynamic syntaxes such as destructuring."]}),"\n",(0,l.jsxs)(n.p,{children:["When using destructuring assignment, Builder will not be able to determine whether the variable ",(0,l.jsx)(n.code,{children:"NODE_ENV"})," is associated with the expression ",(0,l.jsx)(n.code,{children:"process.env.NODE_ENV"})," to be replaced, so the following usage is invalid:"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",children:"const { NODE_ENV } = process.env;\nconsole.log(NODE_ENV);\n// ❌ Won't get a string.\n"})})]})}(r=globalThis).__RSPRESS_PAGE_META||(r.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["..%2F..%2Fbuilder-doc%2Fdocs%2Fen%2Fconfig%2Fsource%2FglobalVars.md"]={toc:[{text:"Example",id:"example",depth:3},{text:"Function Usage",id:"function-usage",depth:3},{text:"Difference with define",id:"difference-with-define",depth:3},{text:"Precautions",id:"precautions",depth:3}],title:"",frontmatter:{}};var t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,o.useMDXComponents)(),e.components).wrapper;return n?(0,l.jsx)(n,(0,i._)((0,a._)({},e),{children:(0,l.jsx)(c,(0,a._)({},e))})):c(e)}},3456:function(e,n,s){"use strict";s.r(n),s.d(n,{default:function(){return d}});var r,a=s("15169"),i=s("43932"),l=s("9880"),o=s("23169"),c=s("95600");function t(e){var n=Object.assign({h1:"h1",a:"a",div:"div",p:"p"},(0,o.useMDXComponents)(),e.components);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(n.h1,{id:"sourceglobalvars",children:["source.globalVars",(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#sourceglobalvars",children:"#"})]}),"\n",(0,l.jsxs)(n.div,{className:"modern-directive tip",children:[(0,l.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,l.jsx)(n.div,{className:"modern-directive-content",children:(0,l.jsxs)(n.p,{children:["This config is provided by Modern.js Builder, more detail can see ",(0,l.jsx)(n.a,{href:"https://modernjs.dev/builder/en/api/config-source.html#sourceglobalvars",target:"_blank",rel:"noopener noreferrer",children:"source.globalVars"}),".\n"]})})]}),"\n","\n",(0,l.jsx)(c.default,{})]})}(r=globalThis).__RSPRESS_PAGE_META||(r.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["en%2Fconfigure%2Fapp%2Fsource%2Fglobal-vars.mdx"]={toc:[],title:"source.globalVars",frontmatter:{sidebar_label:"globalVars"}};var d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,o.useMDXComponents)(),e.components).wrapper;return n?(0,l.jsx)(n,(0,i._)((0,a._)({},e),{children:(0,l.jsx)(t,(0,a._)({},e))})):t(e)}}}]);