(self.webpackChunk_modern_js_builder_doc=self.webpackChunk_modern_js_builder_doc||[]).push([["514"],{55653:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return d}});var s=r("9880"),t=r("23169"),i=r("49688"),c=r("59282");function a(e){let n=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2"},(0,t.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h1,{id:"security-config",children:["Security Config",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#security-config",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"This section describes some security related configurations in Modern.js Builder."}),"\n",(0,s.jsxs)(n.h2,{id:"securitysri",children:["security.sri",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#securitysri",children:"#"})]}),"\n","\n",(0,s.jsx)(i.default,{}),"\n",(0,s.jsxs)(n.h2,{id:"securitychecksyntax",children:["security.checkSyntax",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#securitychecksyntax",children:"#"})]}),"\n","\n",(0,s.jsx)(c.default,{})]})}function o(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,t.useMDXComponents)(),e.components);return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}var d=o;o.__RSPRESS_PAGE_META={},o.__RSPRESS_PAGE_META["en%2Fapi%2Fconfig-security.mdx"]={toc:[{text:"security.sri",id:"securitysri",depth:2},{text:"security.checkSyntax",id:"securitychecksyntax",depth:2}],title:"Security Config",frontmatter:{extractApiHeaders:[2]}}},59282:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return a}});var s=r("9880"),t=r("23169");function i(e){let n=Object.assign({ul:"ul",li:"li",strong:"strong",pre:"pre",code:"code",p:"p",h3:"h3",a:"a",div:"div",h4:"h4"},(0,t.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"Type:"})}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"type CheckSyntax =\n  | boolean\n  | {\n      targets?: string[];\n      exclude?: RegExp | RegExp[];\n      ecmaVersion?: EcmaVersion;\n    };\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Default:"})," ",(0,s.jsx)(n.code,{children:"false"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Used to analyze whether there is incompatible advanced syntax in the build artifacts under the current browser scope. If any incompatible syntax is found, detailed information will be printed to the terminal."}),"\n",(0,s.jsxs)(n.h3,{id:"enable-detection",children:["Enable Detection",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#enable-detection",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["You can set ",(0,s.jsx)(n.code,{children:"checkSyntax"})," to ",(0,s.jsx)(n.code,{children:"true"})," to enable syntax checking."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"export default {\n  security: {\n    checkSyntax: true,\n  },\n};\n"})}),"\n",(0,s.jsxs)(n.p,{children:["When you enable ",(0,s.jsx)(n.code,{children:"checkSyntax"}),", Builder will perform the detection during production builds. If any incompatible advanced syntax is detected in the build artifacts, error logs will be printed to the terminal, and the current build process will be terminated."]}),"\n",(0,s.jsxs)(n.h3,{id:"error-logs",children:["Error Logs",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#error-logs",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"The format of the error logs is as follows, including the source file, artifact location, error reason, and source code:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"error   [Syntax Checker] Find some syntax errors after production build:\n\n  Error 1\n  source:  /node_modules/foo/index.js:1:0\n  output:  /dist/static/js/main.3f7a4d7e.js:2:39400\n  reason:  Unexpected token (1:178)\n  code:\n     9 |\n    10 | var b = 2;\n    11 |\n  > 12 | console.log(() => {\n    13 |   return a + b;\n    14 | });\n    15 |\n"})}),"\n",(0,s.jsxs)(n.div,{className:"rspress-directive tip",children:[(0,s.jsx)(n.div,{className:"rspress-directive-title",children:"TIP"}),(0,s.jsx)(n.div,{className:"rspress-directive-content",children:(0,s.jsx)(n.p,{children:"Currently, syntax checking is implemented based on AST parser. Each time it performs a check, it can only identify the first incompatible syntax found in the file. If there are multiple incompatible syntaxes in the file, you need to fix the detected syntax and re-run the check."})})]}),"\n",(0,s.jsxs)(n.h3,{id:"solutions",children:["Solutions",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#solutions",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"If a syntax error is detected, you can handle it in the following ways:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["If you want to downgrade this syntax to ensure good code compatibility, you can compile the corresponding module through the ",(0,s.jsx)(n.code,{children:"source.include"})," config."]}),"\n",(0,s.jsx)(n.li,{children:"If you don't want to downgrade the syntax, you can adjust the project's browserslist to match the syntax."}),"\n",(0,s.jsxs)(n.li,{children:["If you do not want to check the syntax of certain products, you can use the ",(0,s.jsx)(n.code,{children:"checkSyntax.exclude"})," configuration to exclude the files to be checked."]}),"\n"]}),"\n",(0,s.jsxs)(n.h3,{id:"options",children:["Options",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#options",children:"#"})]}),"\n",(0,s.jsxs)(n.h4,{id:"checksyntaxtargets",children:["checkSyntax.targets",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#checksyntaxtargets",children:"#"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Type:"})," ",(0,s.jsx)(n.code,{children:"string[]"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Default:"})," ",(0,s.jsx)(n.code,{children:"The browserslist configuration of the current project"})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"targets"})," is the target browser range of the project. Its value is a standard browserslist array. If you are not familiar with the usage of browserslist, please refer to ",(0,s.jsx)(n.a,{href:"https://modernjs.dev/builder/en/guide/advanced/browser-compatibility.html",target:"_blank",rel:"noopener noreferrer",children:'"Browserslist"'}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Builder will read the value of ",(0,s.jsx)(n.code,{children:"targets"})," and automatically deduce the minimum ECMAScript syntax version that can be used in the build artifacts, such as ",(0,s.jsx)(n.code,{children:"ES5"})," or ",(0,s.jsx)(n.code,{children:"ES6"}),"."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"Example:"})}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"For example, if the target browsers to be compatible with in the project are Chrome 53 and later versions, you can add the following configuration:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"export default {\n  security: {\n    checkSyntax: {\n      targets: ['chrome >= 53'],\n    },\n  },\n};\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Builder will deduce that the ECMAScript syntax version that can be used with ",(0,s.jsx)(n.code,{children:"chrome >= 53"})," is ",(0,s.jsx)(n.code,{children:"ES6"}),". When the build artifacts contain ",(0,s.jsx)(n.code,{children:"ES2016"})," or higher syntax, it triggers syntax error prompts."]}),"\n",(0,s.jsxs)(n.div,{className:"rspress-directive tip",children:[(0,s.jsx)(n.div,{className:"rspress-directive-title",children:"TIP"}),(0,s.jsx)(n.div,{className:"rspress-directive-content",children:(0,s.jsxs)(n.p,{children:["Please note that Builder does not support automatic analysis of syntax versions above ES6 based on ",(0,s.jsx)(n.code,{children:"targets"}),". If the syntax version compatible with your build artifacts exceeds ES6, please use ",(0,s.jsx)(n.code,{children:"checkSyntax.ecmaVersion"})," to set it.\n"]})})]}),"\n",(0,s.jsxs)(n.h4,{id:"checksyntaxecmaversion",children:["checkSyntax.ecmaVersion",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#checksyntaxecmaversion",children:"#"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Type:"})," ",(0,s.jsx)(n.code,{children:"3 | 5 | 6 | 2015 | 2016 | 2017 | 2018 | 2019 | 2020 | 2021 | 2022 | 'latest'"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Default:"})," ",(0,s.jsx)(n.code,{children:"Automatically analyzed based on targets"})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"ecmaVersion"})," represents the minimum ECMAScript syntax version that can be used in the build artifact. The priority of ",(0,s.jsx)(n.code,{children:"ecmaVersion"})," is higher than ",(0,s.jsx)(n.code,{children:"targets"}),"."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"Example:"})}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["For example, if the minimum ECMAScript syntax version that can be used in the build artifacts is ",(0,s.jsx)(n.code,{children:"ES2020"}),", you can add the following configuration:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"export default {\n  security: {\n    checkSyntax: {\n      ecmaVersion: 2020,\n    },\n  },\n};\n"})}),"\n",(0,s.jsxs)(n.p,{children:["At this time, the build artifacts can include all syntax supported by ",(0,s.jsx)(n.code,{children:"ES2020"}),", such as optional chaining."]}),"\n",(0,s.jsxs)(n.h4,{id:"checksyntaxexclude",children:["checkSyntax.exclude",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#checksyntaxexclude",children:"#"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Type:"})," ",(0,s.jsx)(n.code,{children:"RegExp | RegExp[]"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Default:"})," ",(0,s.jsx)(n.code,{children:"undefined"})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"exclude"})," is used to exclude a portion of files during detection. You can pass in one or more regular expressions to match the paths of source files. Files that match the regular expression will be ignored and will not trigger syntax checking."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"Example:"})}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["For example, to ignore files under the ",(0,s.jsx)(n.code,{children:"node_modules/foo"})," directory:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"export default {\n  security: {\n    checkSyntax: {\n      exclude: /node_modules\\/foo/,\n    },\n  },\n};\n"})})]})}function c(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,t.useMDXComponents)(),e.components);return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(i,{...e})}):i(e)}var a=c;c.__RSPRESS_PAGE_META={},c.__RSPRESS_PAGE_META["en%2Fconfig%2Fsecurity%2FcheckSyntax.md"]={toc:[{text:"Enable Detection",id:"enable-detection",depth:3},{text:"Error Logs",id:"error-logs",depth:3},{text:"Solutions",id:"solutions",depth:3},{text:"Options",id:"options",depth:3},{text:"checkSyntax.targets",id:"checksyntaxtargets",depth:4},{text:"checkSyntax.ecmaVersion",id:"checksyntaxecmaversion",depth:4},{text:"checkSyntax.exclude",id:"checksyntaxexclude",depth:4}],title:"",frontmatter:{}}},49688:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return a}});var s=r("9880"),t=r("23169");function i(e){let n=Object.assign({ul:"ul",li:"li",strong:"strong",pre:"pre",code:"code",p:"p",a:"a",h4:"h4"},(0,t.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"Type:"})}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"type SRIOptions =\n  | {\n      hashFuncNames?: string[];\n      enabled?: 'auto' | boolean;\n      hashLoading?: 'eager' | 'lazy';\n    }\n  | boolean;\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Default:"})," ",(0,s.jsx)(n.code,{children:"undefined"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Bundler:"})," ",(0,s.jsx)(n.code,{children:"only support webpack"})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Adding an integrity attribute (",(0,s.jsx)(n.code,{children:"integrity"}),") to sub-resources introduced by HTML allows the browser to verify the integrity of the introduced resource, thus preventing tampering with the downloaded resource."]}),"\n",(0,s.jsxs)(n.p,{children:["Enabling this option will set the webpack ",(0,s.jsx)(n.a,{href:"https://webpack.js.org/configuration/output/#outputcrossoriginloading",target:"_blank",rel:"noopener noreferrer",children:"output.crossOriginLoading"})," configuration option to ",(0,s.jsx)(n.code,{children:"anonymous"}),"."]}),"\n",(0,s.jsxs)(n.h4,{id:"introduce-sri",children:["Introduce SRI",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#introduce-sri",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"Subresource Integrity (SRI) is a security feature that enables browsers to verify that resources they fetch (for example, from a CDN) are delivered without unexpected manipulation. It works by allowing you to provide a cryptographic hash that a fetched resource must match."}),"\n",(0,s.jsx)(n.p,{children:"For script tags, the result is to refuse to execute the code; for CSS links, the result is not to load the styles."}),"\n",(0,s.jsxs)(n.p,{children:["For more on subresource integrity, see ",(0,s.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity",target:"_blank",rel:"noopener noreferrer",children:"Subresource Integrity - MDN"}),"."]}),"\n",(0,s.jsxs)(n.h4,{id:"example",children:["Example",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#example",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["By default, ",(0,s.jsx)(n.code,{children:"SRI"})," is not turned on, and when it is, its default configuration is as follows:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'{\n  hashFuncNames: [\'sha384\'];\n  enabled: "auto",\n  hashLoading: "eager",\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"You can customize the configuration options according to your own needs:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"export default {\n  security: {\n    sri: {\n      hashFuncNames: ['sha-256'],\n      enabled: true,\n      hashLoading: 'lazy',\n    },\n  },\n};\n"})})]})}function c(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,t.useMDXComponents)(),e.components);return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(i,{...e})}):i(e)}var a=c;c.__RSPRESS_PAGE_META={},c.__RSPRESS_PAGE_META["en%2Fconfig%2Fsecurity%2Fsri.md"]={toc:[{text:"Introduce SRI",id:"introduce-sri",depth:4},{text:"Example",id:"example",depth:4}],title:"",frontmatter:{}}}}]);