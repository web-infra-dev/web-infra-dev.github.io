/*! For license information please see 7898.8675717a.js.LICENSE.txt */
(self.webpackChunk_modern_js_builder_doc=self.webpackChunk_modern_js_builder_doc||[]).push([["7898"],{29945:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return f}});var i=r("9880"),t=r("23169"),s=r("5564"),l=r("93129"),d=r("20201"),o=r("35637"),c=r("35119"),a=r("96795"),h=r("9826"),u=r("83962"),x=r("60091"),p=r("23546"),g=r("22758"),j=r("91294");function m(e){let n=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",code:"code",h3:"h3",ul:"ul",li:"li",strong:"strong",pre:"pre",blockquote:"blockquote",div:"div"},(0,t.useMDXComponents)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.h1,{id:"builder-instance",children:["Builder Instance",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#builder-instance",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"This section describes all the properties and methods on the Builder instance object."}),"\n",(0,i.jsxs)(n.h2,{id:"buildercontext",children:["builder.context",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#buildercontext",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"builder.context"})," is a read-only object that provides some context infos."]}),"\n",(0,i.jsxs)(n.h3,{id:"buildercontextentry",children:["builder.context.entry",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#buildercontextentry",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["The entry object, corresponding to the ",(0,i.jsx)(n.code,{children:"entry"})," option of ",(0,i.jsx)(n.code,{children:"createBuilder"})," method."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"Type"})}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"type BuilderEntry = Record<string, string | string[]>;\n"})}),"\n",(0,i.jsxs)(n.h3,{id:"buildercontexttarget",children:["builder.context.target",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#buildercontexttarget",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["Build target type, corresponding to the ",(0,i.jsx)(n.code,{children:"target"})," option of ",(0,i.jsx)(n.code,{children:"createBuilder"})," method."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"Type"})}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"type BuilderTarget = 'web' | 'node' | 'modern-web' | 'web-worker';\n\ntype Context = {\n  target: BuilderTarget | BuilderTarget[];\n};\n"})}),"\n",(0,i.jsxs)(n.h3,{id:"buildercontextrootpath",children:["builder.context.rootPath",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#buildercontextrootpath",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["The root path of current build, corresponding to the ",(0,i.jsx)(n.code,{children:"cwd"})," option of ",(0,i.jsx)(n.code,{children:"createBuilder"})," method."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"Type"})}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"type RootPath = string;\n"})}),"\n",(0,i.jsxs)(n.h3,{id:"buildercontextsrcpath",children:["builder.context.srcPath",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#buildercontextsrcpath",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"The absolute path to the src directory."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"Type"})}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"type SrcPath = string;\n"})}),"\n",(0,i.jsxs)(n.h3,{id:"buildercontextdistpath",children:["builder.context.distPath",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#buildercontextdistpath",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["The absolute path of the output directory, corresponding to the ",(0,i.jsx)(n.code,{children:"output.distPath.root"})," config in ",(0,i.jsx)(n.code,{children:"BuilderConfig"}),"."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"Type"})}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"type DistPath = string;\n"})}),"\n",(0,i.jsxs)(n.h3,{id:"buildercontextcachepath",children:["builder.context.cachePath",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#buildercontextcachepath",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"The absolute path of the build cache files."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"Type"})}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"type CachePath = string;\n"})}),"\n",(0,i.jsxs)(n.h3,{id:"buildercontextconfigpath",children:["builder.context.configPath",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#buildercontextconfigpath",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["The absolute path to the framework config file, corresponding to the ",(0,i.jsx)(n.code,{children:"configPath"})," option of ",(0,i.jsx)(n.code,{children:"createBuilder"})," method."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"Type"})}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"type ConfigPath = string | undefined;\n"})}),"\n",(0,i.jsxs)(n.h3,{id:"buildercontexttsconfigpath",children:["builder.context.tsconfigPath",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#buildercontexttsconfigpath",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["The absolute path of the tsconfig.json file, or ",(0,i.jsx)(n.code,{children:"undefined"})," if the tsconfig.json file does not exist in current project."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"Type"})}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"type TsconfigPath = string | undefined;\n"})}),"\n",(0,i.jsxs)(n.h3,{id:"buildercontextframework",children:["builder.context.framework",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#buildercontextframework",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["The name of the framework, a unique identifier, the default value is ",(0,i.jsx)(n.code,{children:"'modern.js'"}),"."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"Type"})}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"type Framework = string | undefined;\n"})}),"\n",(0,i.jsxs)(n.h3,{id:"buildercontextdevserver",children:["builder.context.devServer",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#buildercontextdevserver",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"Dev Server information, including the current Dev Server hostname and port number."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"Type"})}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"type DevServer = {\n  hostname: string;\n  port: number;\n};\n"})}),"\n",(0,i.jsxs)(n.h3,{id:"buildercontextbundlertype",children:["builder.context.bundlerType",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#buildercontextbundlertype",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"The bundler type of current build."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"Type"})}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"type bundlerType = 'webpack' | 'rspack';\n"})}),"\n",(0,i.jsxs)(n.h2,{id:"builderbuild",children:["builder.build",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#builderbuild",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"Perform a production build."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"Type"})}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"type BuildOptions = {\n  mode?: 'development' | 'production';\n  watch?: boolean;\n  // custom Compiler object\n  compiler?: Compiler | MultiCompiler;\n};\n\nfunction Build(options?: BuildOptions): Promise<void>;\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"Example"})}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"await builder.build();\n"})}),"\n",(0,i.jsxs)(n.h3,{id:"development-environment-build",children:["Development environment build",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#development-environment-build",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["If you need to perform a development build, you can set the ",(0,i.jsx)(n.code,{children:"mode"})," option to ",(0,i.jsx)(n.code,{children:"'development'"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"await builder.build({\n  mode: 'development',\n});\n"})}),"\n",(0,i.jsxs)(n.h3,{id:"monitor-file-changes",children:["Monitor file changes",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#monitor-file-changes",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["If you need to watch file changes and re-build, you can set the ",(0,i.jsx)(n.code,{children:"watch"})," option to ",(0,i.jsx)(n.code,{children:"true"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"await builder.build({\n  watch: true,\n});\n"})}),"\n",(0,i.jsxs)(n.h3,{id:"custom-compiler",children:["Custom Compiler",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#custom-compiler",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"In some cases, you may want to use a custom compiler:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"const compiler = webpack({\n  // ...\n});\nawait builder.build({\n  compiler,\n});\n"})}),"\n",(0,i.jsxs)(n.h2,{id:"builderstartdevserver",children:["builder.startDevServer",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#builderstartdevserver",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"Start the local Dev Server, based on the Modern.js Dev Server."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"Type"})}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"type StartDevServerOptions = {\n  // Whether to output URL infos, the default is true\n  printURLs?: boolean | Function;\n  // Whether to throw an exception when the port is occupied, the default is false\n  strictPort?: boolean;\n  // custom Compiler object\n  compiler?: Compiler | MultiCompiler;\n  // passing through the build-independent dev server configuration\n  serverOptions?: Partial<ModernDevServerOptions>;\n  // Whether to get the port silently, the default is false\n  getPortSliently?: boolean;\n  // custom logger\n  logger?: Logger;\n};\n\ntype StartServerResult = {\n  urls: string[];\n  port: number;\n  server: Server;\n};\n\nfunction StartDevServer(\n  options?: StartDevServerOptions,\n): Promise<StartServerResult>;\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"Example"})}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Start Dev Server:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"await builder.startDevServer();\n"})}),"\n",(0,i.jsx)(n.p,{children:"After successfully starting Dev Server, you can see the following logs:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"info    Starting dev server...\n\n  > Local:    http://localhost:8080\n  > Network:  http://192.168.0.1:8080\n"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"startDevServer"})," returns the following parameters:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"urls"}),": URLs to access dev server."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"port"}),": The actual listening port number."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"server"}),": Server instance object."]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"const { urls, port, server } = await builder.startDevServer();\nconsole.log(urls); // ['http://localhost:8080', 'http://192.168.0.1:8080']\nconsole.log(port); // 8080\n\n// Close the dev server\nawait server.close();\n"})}),"\n",(0,i.jsxs)(n.h3,{id:"disable-print-urls",children:["Disable Print URLs",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#disable-print-urls",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["Setting ",(0,i.jsx)(n.code,{children:"printURLs"})," to ",(0,i.jsx)(n.code,{children:"false"})," to disable the default URL output, so you can custom the logs."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"await builder.startDevServer({\n  printURLs: false,\n});\n"})}),"\n",(0,i.jsxs)(n.p,{children:["You can also directly configure ",(0,i.jsx)(n.code,{children:"printURLs"})," as a function to modify URLs, such as adding a subpath to each URL:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"await builder.startDevServer({\n  printURLs: urls => {\n    return urls.map(({ label, url }) => ({\n      label,\n      url: `${url}/path`,\n    }));\n  },\n});\n"})}),"\n",(0,i.jsxs)(n.h3,{id:"strict-port",children:["Strict Port",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#strict-port",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"When a port is occupied, Builder will automatically increment the port number until an available port is found."}),"\n",(0,i.jsxs)(n.p,{children:["Set ",(0,i.jsx)(n.code,{children:"strictPort"})," to ",(0,i.jsx)(n.code,{children:"true"})," and Builder will throw an exception when the port is occupied."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"await builder.startDevServer({\n  strictPort: true,\n});\n"})}),"\n",(0,i.jsxs)(n.h3,{id:"custom-compiler-1",children:["Custom Compiler",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#custom-compiler-1",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"In some cases, you may want to use a custom compiler:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"const compiler = webpack({\n  // ...\n});\nawait builder.startDevServer({\n  compiler,\n});\n"})}),"\n",(0,i.jsxs)(n.h3,{id:"get-port-silently",children:["Get Port Silently",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#get-port-silently",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["In some cases, the default startup port number is already occupied. In this situation, Builder will automatically increment the port number until it finds an available one. This process will output a prompt log. If you do not want this log, you can set ",(0,i.jsx)(n.code,{children:"getPortSliently"})," to ",(0,i.jsx)(n.code,{children:"true"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"await builder.startDevServer({\n  getPortSliently: true,\n});\n"})}),"\n",(0,i.jsxs)(n.h3,{id:"custom-logger",children:["Custom Logger",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#custom-logger",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["By default, Builder uses ",(0,i.jsx)(n.code,{children:"@modern-js/utils/logger"})," to output logs. You can customize the log output object through the ",(0,i.jsx)(n.code,{children:"logger"})," parameter."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"const customLogger = {\n  // You need to define the following methods\n  info(msg: string) {\n    console.log(msg);\n  },\n  error(msg: string) {\n    console.error(msg);\n  },\n  warn(msg: string) {\n    console.warn(msg);\n  },\n  success(msg: string) {\n    console.log(`\u2705 msg`);\n  },\n  debug(msg: string) {\n    if (process.env.DEBUG) {\n      console.log(msg);\n    }\n  },\n  log(msg: string) {\n    console.log(msg);\n  };\n}\n\nawait builder.startDevServer({\n  logger: customLogger,\n});\n"})}),"\n",(0,i.jsx)(n.p,{children:"Then Builder will use the custom logger to output logs."}),"\n",(0,i.jsxs)(n.h2,{id:"builderserve",children:["builder.serve",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#builderserve",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["Start a server to preview the production build locally. This method should be executed after ",(0,i.jsx)(n.code,{children:"builder.build"}),"."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"Type"})}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"type StartServerResult = {\n  urls: string[];\n  port: number;\n  server: Server;\n};\n\nfunction server(): Promise<StartServerResult>;\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"Example"})}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Start the server\uFF1A"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"await builder.serve();\n"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"serve"})," returns the following parameters:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"urls"}),": URLs to access server."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"port"}),": The actual listening port number."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"server"}),": Server instance object."]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"const { urls, port, server } = await builder.serve();\nconsole.log(urls); // ['http://localhost:8080', 'http://192.168.0.1:8080']\nconsole.log(port); // 8080\n\n// Close the server\nawait server.close();\n"})}),"\n",(0,i.jsxs)(n.h2,{id:"buildercreatecompiler",children:["builder.createCompiler",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#buildercreatecompiler",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"Create a Compiler object."}),"\n",(0,i.jsxs)(n.p,{children:["When the ",(0,i.jsx)(n.code,{children:"target"})," option of ",(0,i.jsx)(n.code,{children:"createBuilder"})," contains only one value, the return value is ",(0,i.jsx)(n.code,{children:"Compiler"}),"; when ",(0,i.jsx)(n.code,{children:"target"})," contains multiple values, the return value is ",(0,i.jsx)(n.code,{children:"MultiCompiler"}),"."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"Type"})}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"function CreateCompiler(): Promise<Compiler | MultiCompiler>;\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"Example"})}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"const compiler = await builder.createCompiler();\n"})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"In most scenarios, you do not need to use this API unless you need to custom the Dev Server or other advanced scenarios."}),"\n"]}),"\n",(0,i.jsxs)(n.h2,{id:"builderaddplugins",children:["builder.addPlugins",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#builderaddplugins",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"Register one or more Builder plugins, which can be called multiple times."}),"\n",(0,i.jsx)(n.p,{children:"This method needs to be called before compiling. If it is called after compiling, it will not affect the compilation result."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"Type"})}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"type AddPluginsOptions = { before?: string } | { after?: string };\n\nfunction AddPlugins(\n  plugins: BuilderPlugins[],\n  options?: AddPluginsOptions,\n): Promise<void>;\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"Example"})}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"builder.addPlugins([builderPluginFoo(), builderPluginBar()]);\n\n// Insert before the bar plugin\nbuilder.addPlugins([builderPluginFoo()], { before: 'bar' });\n\n// Insert after the bar plugin\nbuilder.addPlugins([builderPluginFoo()], { after: 'bar' });\n"})}),"\n",(0,i.jsxs)(n.h2,{id:"builderremoveplugins",children:["builder.removePlugins",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#builderremoveplugins",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"Removes one or more Builder plugins, which can be called multiple times."}),"\n",(0,i.jsx)(n.p,{children:"This method needs to be called before compiling. If it is called after compiling, it will not affect the compilation result."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"Type"})}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"function RemovePlugins(pluginNames: string[]): void;\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"Example"})}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"// add plugin\nconst pluginFoo = builderPluginFoo();\nbuilder.addPlugins(pluginFoo);\n\n// remove plugin\nbuilder.removePlugins([pluginFoo.name]);\n"})}),"\n",(0,i.jsxs)(n.h2,{id:"builderispluginexists",children:["builder.isPluginExists",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#builderispluginexists",children:"#"})]}),"\n","\n",(0,i.jsx)(s.default,{}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"Example"})}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"builder.addPlugins([builderPluginFoo()]);\n\nbuilder.isPluginExists(builderPluginFoo().name); // true\n"})}),"\n",(0,i.jsxs)(n.h2,{id:"builderinspectconfig",children:["builder.inspectConfig",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#builderinspectconfig",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"Inspect the final generated builder config and bundler config."}),"\n",(0,i.jsxs)(n.div,{className:"rspress-directive tip",children:[(0,i.jsx)(n.div,{className:"rspress-directive-title",children:"TIP"}),(0,i.jsxs)(n.div,{className:"rspress-directive-content",children:[(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"inspectConfig"})," method does not support simultaneous use with the ",(0,i.jsx)(n.code,{children:"startDevServer"})," / ",(0,i.jsx)(n.code,{children:"build"})," method."]}),"\n",(0,i.jsxs)(n.p,{children:["When you need to view the complete builder and bundler configurations during the build process, you can use the ",(0,i.jsx)(n.a,{href:"/guide/debug/debug-mode",children:"debug mode"})," or obtain them through hooks such as ",(0,i.jsx)(n.code,{children:"onBeforeBuild"})," and ",(0,i.jsx)(n.code,{children:"onBeforeCreateCompile"}),".\n"]})]})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"Type"})}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:'type InspectConfigOptions = {\n  // View the config in the specified environment, the default is "development", can be set to "production"\n  env?: BuilderMode;\n  // Whether to enable verbose mode, display the complete content of the function in the config, the default is `false`\n  verbose?: boolean;\n  // Specify the output path, defaults to the value configured by `output.distPath.root`\n  outputPath?: string;\n  // Whether to write the result to disk, the default is `false`\n  writeToDisk?: boolean;\n};\n\nasync function InspectConfig(options?: InspectConfigOptions): Promise<{\n  builderConfig: string;\n  bundlerConfigs: string[];\n  origin: {\n    builderConfig: BuilderConfig;\n    bundlerConfigs: BundlerConfigs[];\n  };\n}>;\n'})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"Example"})}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Get the config content in string format:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"const { builderConfig, bundlerConfigs } = await builder.inspectConfig();\n\nconsole.log(builderConfig, bundlerConfigs);\n"})}),"\n",(0,i.jsx)(n.p,{children:"Write the config content to disk:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"await builder.inspectConfig({\n  writeToDisk: true,\n});\n"})}),"\n",(0,i.jsxs)(n.h2,{id:"builderonbeforecreatecompiler",children:["builder.onBeforeCreateCompiler",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#builderonbeforecreatecompiler",children:"#"})]}),"\n","\n",(0,i.jsx)(l.default,{}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"Example"})}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"builder.onBeforeCreateCompiler(({ bundlerConfigs }) => {\n  console.log('the bundler config is ', bundlerConfigs);\n});\n"})}),"\n",(0,i.jsxs)(n.h2,{id:"builderonaftercreatecompiler",children:["builder.onAfterCreateCompiler",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#builderonaftercreatecompiler",children:"#"})]}),"\n","\n",(0,i.jsx)(d.default,{}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"Example"})}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"builder.onAfterCreateCompiler(({ compiler }) => {\n  console.log('the compiler is ', compiler);\n});\n"})}),"\n",(0,i.jsxs)(n.h2,{id:"builderonbeforebuild",children:["builder.onBeforeBuild",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#builderonbeforebuild",children:"#"})]}),"\n","\n",(0,i.jsx)(o.default,{}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"Example"})}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"builder.onBeforeBuild(({ bundlerConfigs }) => {\n  console.log('the bundler config is ', bundlerConfigs);\n});\n"})}),"\n",(0,i.jsxs)(n.h2,{id:"builderonafterbuild",children:["builder.onAfterBuild",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#builderonafterbuild",children:"#"})]}),"\n","\n",(0,i.jsx)(c.default,{}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"Example"})}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"builder.onAfterBuild(({ stats }) => {\n  console.log(stats?.toJson());\n});\n"})}),"\n",(0,i.jsxs)(n.h2,{id:"builderonbeforestartdevserver",children:["builder.onBeforeStartDevServer",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#builderonbeforestartdevserver",children:"#"})]}),"\n","\n",(0,i.jsx)(a.default,{}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"Example"})}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"builder.onBeforeStartDevServer(() => {\n  console.log('before start!');\n});\n"})}),"\n",(0,i.jsxs)(n.h2,{id:"builderonafterstartdevserver",children:["builder.onAfterStartDevServer",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#builderonafterstartdevserver",children:"#"})]}),"\n","\n",(0,i.jsx)(h.default,{}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"Example"})}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"builder.onAfterStartDevServer(({ port }) => {\n  console.log('this port is: ', port);\n});\n"})}),"\n",(0,i.jsxs)(n.h2,{id:"builderondevcompiledone",children:["builder.onDevCompileDone",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#builderondevcompiledone",children:"#"})]}),"\n","\n",(0,i.jsx)(u.default,{}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"Example"})}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"builder.onDevCompileDone(({ isFirstCompile }) => {\n  if (isFirstCompile) {\n    console.log('first compile!');\n  } else {\n    console.log('re-compile!');\n  }\n});\n"})}),"\n",(0,i.jsxs)(n.h2,{id:"builderonexit",children:["builder.onExit",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#builderonexit",children:"#"})]}),"\n","\n",(0,i.jsx)(x.default,{}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"Example"})}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"builder.onExit(() => {\n  console.log('exit!');\n});\n"})}),"\n",(0,i.jsxs)(n.h2,{id:"buildergetbuilderconfig",children:["builder.getBuilderConfig",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#buildergetbuilderconfig",children:"#"})]}),"\n","\n",(0,i.jsx)(p.default,{}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"Example"})}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"builder.onBeforeBuild(() => {\n  const config = builder.getBuilderConfig();\n  console.log(config.html?.title);\n});\n"})}),"\n",(0,i.jsxs)(n.h2,{id:"buildergetnormalizedconfig",children:["builder.getNormalizedConfig",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#buildergetnormalizedconfig",children:"#"})]}),"\n","\n",(0,i.jsx)(g.default,{}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"Example"})}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"builder.onBeforeBuild(() => {\n  const config = api.getNormalizedConfig();\n  console.log(config.html.title);\n});\n"})}),"\n",(0,i.jsxs)(n.h2,{id:"buildergethtmlpaths",children:["builder.getHTMLPaths",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#buildergethtmlpaths",children:"#"})]}),"\n","\n",(0,i.jsx)(j.default,{}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"Example"})}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"builder.onBeforeBuild(() => {\n  const htmlPaths = api.getHTMLPaths();\n  console.log(htmlPaths); // { main: 'html/main/index.html' };\n});\n"})})]})}function b(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,t.useMDXComponents)(),e.components);return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(m,{...e})}):m(e)}var f=b;b.__RSPRESS_PAGE_META={},b.__RSPRESS_PAGE_META["en%2Fapi%2Fbuilder-instance.mdx"]={toc:[{text:"builder.context",id:"buildercontext",depth:2},{text:"builder.context.entry",id:"buildercontextentry",depth:3},{text:"builder.context.target",id:"buildercontexttarget",depth:3},{text:"builder.context.rootPath",id:"buildercontextrootpath",depth:3},{text:"builder.context.srcPath",id:"buildercontextsrcpath",depth:3},{text:"builder.context.distPath",id:"buildercontextdistpath",depth:3},{text:"builder.context.cachePath",id:"buildercontextcachepath",depth:3},{text:"builder.context.configPath",id:"buildercontextconfigpath",depth:3},{text:"builder.context.tsconfigPath",id:"buildercontexttsconfigpath",depth:3},{text:"builder.context.framework",id:"buildercontextframework",depth:3},{text:"builder.context.devServer",id:"buildercontextdevserver",depth:3},{text:"builder.context.bundlerType",id:"buildercontextbundlertype",depth:3},{text:"builder.build",id:"builderbuild",depth:2},{text:"Development environment build",id:"development-environment-build",depth:3},{text:"Monitor file changes",id:"monitor-file-changes",depth:3},{text:"Custom Compiler",id:"custom-compiler",depth:3},{text:"builder.startDevServer",id:"builderstartdevserver",depth:2},{text:"Disable Print URLs",id:"disable-print-urls",depth:3},{text:"Strict Port",id:"strict-port",depth:3},{text:"Custom Compiler",id:"custom-compiler-1",depth:3},{text:"Get Port Silently",id:"get-port-silently",depth:3},{text:"Custom Logger",id:"custom-logger",depth:3},{text:"builder.serve",id:"builderserve",depth:2},{text:"builder.createCompiler",id:"buildercreatecompiler",depth:2},{text:"builder.addPlugins",id:"builderaddplugins",depth:2},{text:"builder.removePlugins",id:"builderremoveplugins",depth:2},{text:"builder.isPluginExists",id:"builderispluginexists",depth:2},{text:"builder.inspectConfig",id:"builderinspectconfig",depth:2},{text:"builder.onBeforeCreateCompiler",id:"builderonbeforecreatecompiler",depth:2},{text:"builder.onAfterCreateCompiler",id:"builderonaftercreatecompiler",depth:2},{text:"builder.onBeforeBuild",id:"builderonbeforebuild",depth:2},{text:"builder.onAfterBuild",id:"builderonafterbuild",depth:2},{text:"builder.onBeforeStartDevServer",id:"builderonbeforestartdevserver",depth:2},{text:"builder.onAfterStartDevServer",id:"builderonafterstartdevserver",depth:2},{text:"builder.onDevCompileDone",id:"builderondevcompiledone",depth:2},{text:"builder.onExit",id:"builderonexit",depth:2},{text:"builder.getBuilderConfig",id:"buildergetbuilderconfig",depth:2},{text:"builder.getNormalizedConfig",id:"buildergetnormalizedconfig",depth:2},{text:"builder.getHTMLPaths",id:"buildergethtmlpaths",depth:2}],title:"Builder Instance",frontmatter:{extractApiHeaders:[2]}}},23546:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return d}});var i=r("9880"),t=r("23169");function s(e){let n=Object.assign({p:"p",code:"code",ul:"ul",li:"li",strong:"strong",pre:"pre"},(0,t.useMDXComponents)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["Get the Builder config, this method must be called after the ",(0,i.jsx)(n.code,{children:"modifyBuilderConfig"})," hook is executed."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"Type"})}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"function GetBuilderConfig(): Readonly<BuilderConfig>;\n"})})]})}function l(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,t.useMDXComponents)(),e.components);return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(s,{...e})}):s(e)}var d=l;l.__RSPRESS_PAGE_META={},l.__RSPRESS_PAGE_META["en%2Fshared%2FgetBuilderConfig.md"]={toc:[],title:"",frontmatter:{}}},91294:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return d}});var i=r("9880"),t=r("23169");function s(e){let n=Object.assign({p:"p",ul:"ul",li:"li",strong:"strong",pre:"pre",code:"code"},(0,t.useMDXComponents)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"Get path information for all HTML assets."}),"\n",(0,i.jsx)(n.p,{children:"This method will return an object, the key is the entry name and the value is the relative path of the HTML file in the dist directory."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"Type"})}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"function GetHTMLPaths(): Record<string, string>;\n"})})]})}function l(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,t.useMDXComponents)(),e.components);return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(s,{...e})}):s(e)}var d=l;l.__RSPRESS_PAGE_META={},l.__RSPRESS_PAGE_META["en%2Fshared%2FgetHTMLPaths.md"]={toc:[],title:"",frontmatter:{}}},22758:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return d}});var i=r("9880"),t=r("23169");function s(e){let n=Object.assign({p:"p",code:"code",ul:"ul",li:"li",strong:"strong",pre:"pre"},(0,t.useMDXComponents)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["Get the normalized Builder config, this method must be called after the ",(0,i.jsx)(n.code,{children:"modifyBuilderConfig"})," hook is executed."]}),"\n",(0,i.jsxs)(n.p,{children:["Compared with the ",(0,i.jsx)(n.code,{children:"api.getBuilderConfig"})," method, the config returned by this method has been normalized, and the type definition of the config will be narrowed. For example, the ",(0,i.jsx)(n.code,{children:"undefined"})," type of ",(0,i.jsx)(n.code,{children:"config.html"})," will be removed."]}),"\n",(0,i.jsx)(n.p,{children:"It is recommended to use this method to get the Builder config."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"Type"})}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"function GetNormalizedConfig(): Readonly<NormalizedConfig>;\n"})})]})}function l(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,t.useMDXComponents)(),e.components);return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(s,{...e})}):s(e)}var d=l;l.__RSPRESS_PAGE_META={},l.__RSPRESS_PAGE_META["en%2Fshared%2FgetNormalizedConfig.md"]={toc:[],title:"",frontmatter:{}}},5564:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return d}});var i=r("9880"),t=r("23169");function s(e){let n=Object.assign({p:"p",ul:"ul",li:"li",strong:"strong",pre:"pre",code:"code"},(0,t.useMDXComponents)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"Determines whether a plugin has been registered."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"Type"})}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"function IsPluginExists(pluginName: string): boolean;\n"})})]})}function l(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,t.useMDXComponents)(),e.components);return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(s,{...e})}):s(e)}var d=l;l.__RSPRESS_PAGE_META={},l.__RSPRESS_PAGE_META["en%2Fshared%2FisPluginExists.md"]={toc:[],title:"",frontmatter:{}}}}]);