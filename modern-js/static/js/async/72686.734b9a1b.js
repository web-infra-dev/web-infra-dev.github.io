/*! For license information please see 72686.734b9a1b.js.LICENSE.txt */
(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["72686"],{7028:function(e,n,s){"use strict";s.r(n),s.d(n,{default:function(){return l}});var i=s("39980"),r=s("96954");function d(e){let n=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",h3:"h3",strong:"strong",ul:"ul",li:"li",code:"code",div:"div",pre:"pre"},(0,r.useMDXComponents)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.h1,{id:"environment-variables",children:["Environment Variables",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#environment-variables",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"Modern.js provides support for environment variables, including built-in environment variables and custom environment variables."}),"\n",(0,i.jsxs)(n.h2,{id:"built-in-environment-variables",children:["Built-in Environment Variables",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#built-in-environment-variables",children:"#"})]}),"\n",(0,i.jsxs)(n.h3,{id:"asset_prefix",children:["ASSET_PREFIX",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#asset_prefix",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"The current path prefix of the asset, which is a read-only environment variable."}),"\n",(0,i.jsxs)(n.h3,{id:"node_env",children:["NODE_ENV",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#node_env",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["The current execution environment and is a ",(0,i.jsx)(n.strong,{children:"read-only"})," environment variable whose have different values under different execution commands:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"production"}),": Default value when running ",(0,i.jsx)(n.code,{children:"modern build"})," or ",(0,i.jsx)(n.code,{children:"modern serve"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"test"}),": Default value when running ",(0,i.jsx)(n.code,{children:"modern test"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"development"}),": Default value when running ",(0,i.jsx)(n.code,{children:"modern dev"}),", also the default value in other cases."]}),"\n"]}),"\n",(0,i.jsxs)(n.h3,{id:"modern_env",children:["MODERN_ENV",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#modern_env",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["Set the current execution environment manually. In addition to the values in the NODE_ENV, custom environment names are supported here, such as ",(0,i.jsx)(n.code,{children:"staging"}),", ",(0,i.jsx)(n.code,{children:"boe"}),", etc."]}),"\n",(0,i.jsxs)(n.div,{className:"rspress-directive tip",children:[(0,i.jsx)(n.div,{className:"rspress-directive-title",children:"TIP"}),(0,i.jsxs)(n.div,{className:"rspress-directive-content",children:[(0,i.jsx)(n.p,{children:"MODERN_ENV priority is higher than NODE_ENV."}),"\n"]})]}),"\n",(0,i.jsxs)(n.h3,{id:"modern_target",children:["MODERN_TARGET",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#modern_target",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["When using ",(0,i.jsx)(n.code,{children:"@modern-js/runtime"}),", Modern.js will automatically inject ",(0,i.jsx)(n.code,{children:"MODERN_TARGET"})," to distinguish between SSR and CSR environments."]}),"\n",(0,i.jsxs)(n.p,{children:["You can use ",(0,i.jsx)(n.code,{children:"process.env.MODERN_TARGET"})," to determine the environment and execute appropriate code."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",meta:'title="App.tsx"',children:"function App() {\n  if (process.env.MODERN_TARGET === 'browser') {\n    console.log(window.innerHeight);\n  }\n}\n"})}),"\n",(0,i.jsx)(n.p,{children:"After the development build, you can see that the SSR and CSR bundles as follows:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",meta:'title="dist/bundles/main.js"',children:"// SSR bundles\nfunction App() {\n  if (false) {\n  }\n}\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",meta:'title="dist/static/main.js"',children:"// CSR bundles\nfunction App() {\n  if (true) {\n    console.log(window.innerHeight);\n  }\n}\n"})}),"\n",(0,i.jsx)(n.p,{children:"This can provide different outputs for different environments to ensure that the bundle size is minimized. It can also be convenient to deal with some side effects for different environments."}),"\n",(0,i.jsxs)(n.div,{className:"rspress-directive note",children:[(0,i.jsx)(n.div,{className:"rspress-directive-title",children:"Dead Code Elimination"}),(0,i.jsxs)(n.div,{className:"rspress-directive-content",children:[(0,i.jsx)(n.p,{children:'In production environment, minimizers such as Terser and SWC will analyze the code and remove dead code to reduce the bundle size. This process is called "Dead Code Elimination" (DCE).'}),"\n",(0,i.jsxs)(n.p,{children:["For example, the code inside the ",(0,i.jsx)(n.code,{children:"if (false)"})," statement will be removed, while the code inside the ",(0,i.jsx)(n.code,{children:"if (true)"})," will be preserved."]}),"\n",(0,i.jsxs)(n.p,{children:["If you do not use ",(0,i.jsx)(n.code,{children:"process.env.MODERN_TARGET"})," as described above, the code minimizer may not be able to analyze the dead code, resulting in an increased bundle size."]}),"\n"]})]}),"\n",(0,i.jsxs)(n.h2,{id:"custom-environment-variables",children:["Custom Environment Variables",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#custom-environment-variables",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["You can specify custom environment variables in both ",(0,i.jsx)(n.code,{children:"shell"})," and ",(0,i.jsx)(n.code,{children:".env"})," files."]}),"\n",(0,i.jsxs)(n.h3,{id:"via-shell",children:["Via ",(0,i.jsx)(n.code,{children:"shell"}),(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#via-shell",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"Add custom environment variables before the command:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"REACT_APP_FOO=123 BAR=456 pnpm run dev\n"})}),"\n",(0,i.jsxs)(n.h3,{id:"via-env-file",children:["Via ",(0,i.jsx)(n.code,{children:".env"})," file",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#via-env-file",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["Create a ",(0,i.jsx)(n.code,{children:".env"})," file in the project root and add custom environment variables, which are added to the Node.js process by default, for example:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"REACT_APP_FOO=123\nBAR=456\n"})}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:".env"})," file follows the following loading rules:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:".env"}),": default."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:".env.{ MODERN_ENV | NODE_ENV }"}),": Overrides ",(0,i.jsx)(n.code,{children:".env"})," for a specific environment."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["When you need to use different config according to the environment, you can define environment variables in the ",(0,i.jsx)(n.code,{children:".env"})," file corresponding to the environment name, and manually set the execution environment when starting the project."]}),"\n",(0,i.jsxs)(n.p,{children:["For example, when starting a project with the following command, the ",(0,i.jsx)(n.code,{children:".env"})," and ",(0,i.jsx)(n.code,{children:".env.staging"})," will load:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"MODERN_ENV=staging pnpm run dev\n"})}),"\n",(0,i.jsxs)(n.h2,{id:"using-environment-variables",children:["Using Environment Variables",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#using-environment-variables",children:"#"})]}),"\n",(0,i.jsxs)(n.h3,{id:"convention-names",children:["Convention Names",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#convention-names",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"NODE_ENV"})," can be used directly in front-end code. In addition, custom environment variables starting with ",(0,i.jsx)(n.code,{children:"MODERN_"})," can also be used directly in code."]}),"\n",(0,i.jsx)(n.p,{children:"For Example:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"if (process.env.NODE_ENV === 'development') {\n  // do something\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["After executing the ",(0,i.jsx)(n.code,{children:"pnpm run dev"}),", you can see the following bundle:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"if (true) {\n  // do something\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["In custom HTML templates, you can also use such environment variables directly. For example, in ",(0,i.jsx)(n.code,{children:"config/html/head.html"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",children:'<meta name="test" content="<process.env.NODE_ENV>" />\n'})}),"\n",(0,i.jsxs)(n.h3,{id:"any-other-names",children:["Any Other Names",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#any-other-names",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["If you need to use environment variables with any other names in your code, you can configure them in ",(0,i.jsx)(n.a,{href:"/configure/app/source/global-vars",children:(0,i.jsx)(n.code,{children:"source.globalVars"})}),". For example:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"export default defineConfig({\n  source: {\n    globalVars: {\n      'process.env.VERSION': process.env.VERSION,\n    }.\n  },\n});\n"})}),"\n",(0,i.jsxs)(n.p,{children:["At this point, the ",(0,i.jsx)(n.code,{children:"process.env.VERSION"})," in the code will be replaced by the value of ",(0,i.jsx)(n.code,{children:"VERSION"})," in the environment variables."]}),"\n",(0,i.jsxs)(n.div,{className:"rspress-directive note",children:[(0,i.jsx)(n.div,{className:"rspress-directive-title",children:"NOTE"}),(0,i.jsxs)(n.div,{className:"rspress-directive-content",children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"source.globalVars"})," also supports replacing other expressions or strings with specified values, not limited to environment variables."]}),"\n"]})]}),"\n",(0,i.jsxs)(n.h2,{id:"use-global-replacement",children:["Use Global Replacement",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#use-global-replacement",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"In addition to environment variables, Modern.js also supports replacing variables in code with other values or expressions, which can be used to distinguish between development environment and production environment in code."}),"\n",(0,i.jsxs)(n.p,{children:["For example, converts the expression ",(0,i.jsx)(n.code,{children:"TWO"})," to ",(0,i.jsx)(n.code,{children:"1 + 1"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"export default {\n  source: {\n    define: {\n      TWO: '1 + 1',\n    },\n  },\n};\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"const foo = TWO;\n\n// \u2B07\uFE0F Turn into being...\nconst foo = 1 + 1;\n"})}),"\n",(0,i.jsxs)(n.p,{children:["In most cases, ",(0,i.jsx)(n.code,{children:"source.globalVars"})," is already sufficient to replace variables. But the values passed in by ",(0,i.jsx)(n.code,{children:"source.globalVars"})," will be serialized by JSON by default. So it cannot be replaced like ",(0,i.jsx)(n.code,{children:"1 + 1"})," in the example above, at this time, we need to use ",(0,i.jsx)(n.a,{href:"/configure/app/source/define",children:(0,i.jsx)(n.code,{children:"source.define"})}),"."]})]})}function a(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,r.useMDXComponents)(),e.components);return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}var l=a;a.__RSPRESS_PAGE_META={},a.__RSPRESS_PAGE_META["en%2Fguides%2Fbasic-features%2Fenv-vars.mdx"]={toc:[{text:"Built-in Environment Variables",id:"built-in-environment-variables",depth:2},{text:"ASSET_PREFIX",id:"asset_prefix",depth:3},{text:"NODE_ENV",id:"node_env",depth:3},{text:"MODERN_ENV",id:"modern_env",depth:3},{text:"MODERN_TARGET",id:"modern_target",depth:3},{text:"Custom Environment Variables",id:"custom-environment-variables",depth:2},{text:"Via shell",id:"via-shell",depth:3},{text:"Via .env file",id:"via-env-file",depth:3},{text:"Using Environment Variables",id:"using-environment-variables",depth:2},{text:"Convention Names",id:"convention-names",depth:3},{text:"Any Other Names",id:"any-other-names",depth:3},{text:"Use Global Replacement",id:"use-global-replacement",depth:2}],title:"Environment Variables",frontmatter:{sidebar_position:7}}}}]);