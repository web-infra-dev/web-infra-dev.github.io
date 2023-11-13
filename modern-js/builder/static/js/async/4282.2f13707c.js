(self.webpackChunk_modern_js_builder_doc=self.webpackChunk_modern_js_builder_doc||[]).push([["4282"],{81371:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return c}});var t=r("9880"),s=r("23169");function i(e){let n=Object.assign({p:"p",code:"code",ul:"ul",li:"li",strong:"strong",pre:"pre"},(0,s.useMDXComponents)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"onAfterBuild"})," is a callback function that is triggered after running the production build. You can access the build result information via the `stats' parameter:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"If the current bundler is webpack, you will get webpack Stats."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"If the current bundler is Rspack, you will get Rspack Stats."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Type"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"function OnAfterBuild(\n  callback: (params: { stats?: Stats | MultiStats }) => Promise<void> | void,\n): void;\n"})})]})}function o(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,s.useMDXComponents)(),e.components);return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(i,{...e})}):i(e)}var c=o;o.__RSPRESS_PAGE_META={},o.__RSPRESS_PAGE_META["en%2Fshared%2FonAfterBuild.md"]={toc:[],title:"",frontmatter:{}}},52029:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return c}});var t=r("9880"),s=r("23169");function i(e){let n=Object.assign({p:"p",code:"code",ul:"ul",li:"li",strong:"strong",pre:"pre"},(0,s.useMDXComponents)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"onAfterCreateCompiler"})," is a callback function that is triggered after the compiler instance has been created, but before the build process. This hook is called when you run ",(0,t.jsx)(n.code,{children:"builder.startDevServer"}),", ",(0,t.jsx)(n.code,{children:"builder.build"}),", or ",(0,t.jsx)(n.code,{children:"builder.createCompiler"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["You can access the Compiler instance object through the ",(0,t.jsx)(n.code,{children:"compiler"})," parameter:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"If the current bundler is webpack, you will get the webpack Compiler object."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"If the current bundler is Rspack, you will get the Rspack Compiler object."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Type"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"function OnAfterCreateCompiler(callback: (params: {\n  compiler: Compiler | MultiCompiler;\n}) => Promise<void> | void;): void;\n"})})]})}function o(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,s.useMDXComponents)(),e.components);return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(i,{...e})}):i(e)}var c=o;o.__RSPRESS_PAGE_META={},o.__RSPRESS_PAGE_META["en%2Fshared%2FonAfterCreateCompiler.md"]={toc:[],title:"",frontmatter:{}}},62713:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return c}});var t=r("9880"),s=r("23169");function i(e){let n=Object.assign({p:"p",code:"code",ul:"ul",li:"li",strong:"strong",pre:"pre"},(0,s.useMDXComponents)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["Called after starting the development server, you can get the port number through the ",(0,t.jsx)(n.code,{children:"port"})," parameter."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"Type"})}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"function OnAfterStartDevServer(\n  callback: (params: { port: number }) => Promise<void> | void,\n): void;\n"})})]})}function o(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,s.useMDXComponents)(),e.components);return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(i,{...e})}):i(e)}var c=o;o.__RSPRESS_PAGE_META={},o.__RSPRESS_PAGE_META["en%2Fshared%2FonAfterStartDevServer.md"]={toc:[],title:"",frontmatter:{}}},65180:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return c}});var t=r("9880"),s=r("23169");function i(e){let n=Object.assign({p:"p",code:"code",ul:"ul",li:"li",strong:"strong",pre:"pre"},(0,s.useMDXComponents)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"onBeforeBuild"})," is a callback function that is triggered before the production build is executed. You can access the final configuration array of the underlying bundler through the `bundlerConfigs' parameter:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"If the current bundler is webpack, you will get a webpack configuration array."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"If the current bundler is Rspack, you will get an Rspack configuration array."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["The configuration array can contain one or more configurations, depending on the current ",(0,t.jsx)(n.code,{children:"target"})," config of Builder."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Type"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"function OnBeforeBuild(\n  callback: (params: {\n    bundlerConfigs?: WebpackConfig[] | RspackConfig[];\n  }) => Promise<void> | void,\n): void;\n"})})]})}function o(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,s.useMDXComponents)(),e.components);return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(i,{...e})}):i(e)}var c=o;o.__RSPRESS_PAGE_META={},o.__RSPRESS_PAGE_META["en%2Fshared%2FonBeforeBuild.md"]={toc:[],title:"",frontmatter:{}}},47623:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return c}});var t=r("9880"),s=r("23169");function i(e){let n=Object.assign({p:"p",code:"code",ul:"ul",li:"li",strong:"strong",pre:"pre"},(0,s.useMDXComponents)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"onBeforeCreateCompiler"})," is a callback function that is triggered after the Compiler instance has been created, but before the build process begins. This hook is called when you run ",(0,t.jsx)(n.code,{children:"builder.startDevServer"}),", ",(0,t.jsx)(n.code,{children:"builder.build"}),", or ",(0,t.jsx)(n.code,{children:"builder.createCompiler"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["You can access the Compiler instance object through the ",(0,t.jsx)(n.code,{children:"compiler"})," parameter:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"If the current bundler is webpack, you will get the webpack Compiler object."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"If the current bundler is Rspack, you will get the Rspack Compiler object."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Type"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"function OnBeforeCreateCompiler(\n  callback: (params: {\n    bundlerConfigs: WebpackConfig[] | RspackConfig[];\n  }) => Promise<void> | void,\n): void;\n"})})]})}function o(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,s.useMDXComponents)(),e.components);return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(i,{...e})}):i(e)}var c=o;o.__RSPRESS_PAGE_META={},o.__RSPRESS_PAGE_META["en%2Fshared%2FonBeforeCreateCompiler.md"]={toc:[],title:"",frontmatter:{}}},87873:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return c}});var t=r("9880"),s=r("23169");function i(e){let n=Object.assign({p:"p",ul:"ul",li:"li",strong:"strong",pre:"pre",code:"code"},(0,s.useMDXComponents)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"Called before starting the development server."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"Type"})}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"function OnBeforeStartDevServer(callback: () => Promise<void> | void): void;\n"})})]})}function o(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,s.useMDXComponents)(),e.components);return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(i,{...e})}):i(e)}var c=o;o.__RSPRESS_PAGE_META={},o.__RSPRESS_PAGE_META["en%2Fshared%2FonBeforeStartDevServer.md"]={toc:[],title:"",frontmatter:{}}},97860:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return c}});var t=r("9880"),s=r("23169");function i(e){let n=Object.assign({p:"p",code:"code",ul:"ul",li:"li",strong:"strong",pre:"pre"},(0,s.useMDXComponents)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["Called after each development environment build, you can use ",(0,t.jsx)(n.code,{children:"isFirstCompile"})," to determine whether it is the first build."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"Type"})}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"function OnDevCompileDone(\n  callback: (params: { isFirstCompile: boolean }) => Promise<void> | void,\n): void;\n"})})]})}function o(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,s.useMDXComponents)(),e.components);return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(i,{...e})}):i(e)}var c=o;o.__RSPRESS_PAGE_META={},o.__RSPRESS_PAGE_META["en%2Fshared%2FonDevCompileDone.md"]={toc:[],title:"",frontmatter:{}}},2196:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return c}});var t=r("9880"),s=r("23169");function i(e){let n=Object.assign({p:"p",ul:"ul",li:"li",strong:"strong",pre:"pre",code:"code"},(0,s.useMDXComponents)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"Called when the process is going to exit, this hook can only execute synchronous code."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"Type"})}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"function OnExit(callback: () => void): void;\n"})})]})}function o(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,s.useMDXComponents)(),e.components);return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(i,{...e})}):i(e)}var c=o;o.__RSPRESS_PAGE_META={},o.__RSPRESS_PAGE_META["en%2Fshared%2FonExit.md"]={toc:[],title:"",frontmatter:{}}}}]);