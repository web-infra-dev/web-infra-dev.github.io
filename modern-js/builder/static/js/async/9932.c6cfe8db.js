(self.webpackChunk_modern_js_builder_doc=self.webpackChunk_modern_js_builder_doc||[]).push([["9932"],{48926:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return N},frontmatter:function(){return C}});var i=r("15169"),l=r("43932"),d=r("9880"),s=r("23169"),t=r("71167"),c=r("17584"),a=r("56505"),h=r("2859"),o=r("19542"),u=r("37813"),x=r("62167"),j=r("66032"),p=r("59009"),g=r("47221"),b=r("15498"),m=r("84462");function f(e){var n=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",code:"code",h3:"h3",ul:"ul",li:"li",strong:"strong",pre:"pre",blockquote:"blockquote",div:"div"},(0,s.useMDXComponents)(),e.components);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.h1,{id:"builder-instance",children:["Builder Instance",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#builder-instance",children:"#"})]}),"\n",(0,d.jsx)(n.p,{children:"\u672C\u7AE0\u8282\u63CF\u8FF0\u4E86 Builder \u5B9E\u4F8B\u5BF9\u8C61\u4E0A\u6240\u6709\u7684\u5C5E\u6027\u548C\u65B9\u6CD5\u3002"}),"\n",(0,d.jsxs)(n.h2,{id:"buildercontext",children:["builder.context",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#buildercontext",children:"#"})]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"builder.context"})," \u662F\u4E00\u4E2A\u53EA\u8BFB\u5BF9\u8C61\uFF0C\u63D0\u4F9B\u4E00\u4E9B\u4E0A\u4E0B\u6587\u4FE1\u606F\u3002"]}),"\n",(0,d.jsxs)(n.h3,{id:"buildercontextentry",children:["builder.context.entry",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#buildercontextentry",children:"#"})]}),"\n",(0,d.jsxs)(n.p,{children:["\u6784\u5EFA\u5165\u53E3\u5BF9\u8C61\uFF0C\u5BF9\u5E94\u8C03\u7528 ",(0,d.jsx)(n.code,{children:"createBuilder"})," \u65F6\u4F20\u5165\u7684 ",(0,d.jsx)(n.code,{children:"entry"})," \u9009\u9879\u3002"]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.strong,{children:"\u7C7B\u578B"})}),"\n"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",children:"type BuilderEntry = Record<string, string | string[]>;\n"})}),"\n",(0,d.jsxs)(n.h3,{id:"buildercontexttarget",children:["builder.context.target",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#buildercontexttarget",children:"#"})]}),"\n",(0,d.jsxs)(n.p,{children:["\u6784\u5EFA\u4EA7\u7269\u7C7B\u578B\uFF0C\u5BF9\u5E94\u8C03\u7528 ",(0,d.jsx)(n.code,{children:"createBuilder"})," \u65F6\u4F20\u5165\u7684 ",(0,d.jsx)(n.code,{children:"target"})," \u9009\u9879\u3002"]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.strong,{children:"\u7C7B\u578B"})}),"\n"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",children:"type BuilderTarget = 'web' | 'node' | 'modern-web' | 'web-worker';\n\ntype Context = {\n  target: BuilderTarget | BuilderTarget[];\n};\n"})}),"\n",(0,d.jsxs)(n.h3,{id:"buildercontextrootpath",children:["builder.context.rootPath",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#buildercontextrootpath",children:"#"})]}),"\n",(0,d.jsxs)(n.p,{children:["\u5F53\u524D\u6267\u884C\u6784\u5EFA\u7684\u6839\u8DEF\u5F84\uFF0C\u5BF9\u5E94\u8C03\u7528 ",(0,d.jsx)(n.code,{children:"createBuilder"})," \u65F6\u4F20\u5165\u7684 ",(0,d.jsx)(n.code,{children:"cwd"})," \u9009\u9879\u3002"]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.strong,{children:"\u7C7B\u578B"})}),"\n"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",children:"type RootPath = string;\n"})}),"\n",(0,d.jsxs)(n.h3,{id:"buildercontextsrcpath",children:["builder.context.srcPath",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#buildercontextsrcpath",children:"#"})]}),"\n",(0,d.jsx)(n.p,{children:"src \u76EE\u5F55\u7684\u7EDD\u5BF9\u8DEF\u5F84\u3002"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.strong,{children:"\u7C7B\u578B"})}),"\n"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",children:"type SrcPath = string;\n"})}),"\n",(0,d.jsxs)(n.h3,{id:"buildercontextdistpath",children:["builder.context.distPath",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#buildercontextdistpath",children:"#"})]}),"\n",(0,d.jsxs)(n.p,{children:["\u6784\u5EFA\u4EA7\u7269\u8F93\u51FA\u76EE\u5F55\u7684\u7EDD\u5BF9\u8DEF\u5F84\uFF0C\u5BF9\u5E94 ",(0,d.jsx)(n.code,{children:"BuilderConfig"})," \u4E2D\u7684 ",(0,d.jsx)(n.code,{children:"output.distPath.root"})," \u914D\u7F6E\u9879\u3002"]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.strong,{children:"\u7C7B\u578B"})}),"\n"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",children:"type DistPath = string;\n"})}),"\n",(0,d.jsxs)(n.h3,{id:"buildercontextcachepath",children:["builder.context.cachePath",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#buildercontextcachepath",children:"#"})]}),"\n",(0,d.jsx)(n.p,{children:"\u6784\u5EFA\u8FC7\u7A0B\u4E2D\u751F\u6210\u7684\u7F13\u5B58\u6587\u4EF6\u6240\u5728\u7684\u7EDD\u5BF9\u8DEF\u5F84\u3002"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.strong,{children:"\u7C7B\u578B"})}),"\n"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",children:"type CachePath = string;\n"})}),"\n",(0,d.jsxs)(n.h3,{id:"buildercontextconfigpath",children:["builder.context.configPath",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#buildercontextconfigpath",children:"#"})]}),"\n",(0,d.jsxs)(n.p,{children:["\u6846\u67B6\u914D\u7F6E\u6587\u4EF6\u7684\u7EDD\u5BF9\u8DEF\u5F84\uFF0C\u5BF9\u5E94\u8C03\u7528 ",(0,d.jsx)(n.code,{children:"createBuilder"})," \u65F6\u4F20\u5165\u7684 ",(0,d.jsx)(n.code,{children:"configPath"})," \u9009\u9879\u3002"]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.strong,{children:"\u7C7B\u578B"})}),"\n"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",children:"type ConfigPath = string | undefined;\n"})}),"\n",(0,d.jsxs)(n.h3,{id:"buildercontexttsconfigpath",children:["builder.context.tsconfigPath",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#buildercontexttsconfigpath",children:"#"})]}),"\n",(0,d.jsxs)(n.p,{children:["tsconfig.json \u6587\u4EF6\u7684\u7EDD\u5BF9\u8DEF\u5F84\uFF0C\u82E5\u9879\u76EE\u4E2D\u4E0D\u5B58\u5728 tsconfig.json \u6587\u4EF6\uFF0C\u5219\u4E3A ",(0,d.jsx)(n.code,{children:"undefined"}),"\u3002"]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.strong,{children:"\u7C7B\u578B"})}),"\n"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",children:"type TsconfigPath = string | undefined;\n"})}),"\n",(0,d.jsxs)(n.h3,{id:"buildercontextframework",children:["builder.context.framework",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#buildercontextframework",children:"#"})]}),"\n",(0,d.jsxs)(n.p,{children:["\u6846\u67B6\u7684\u82F1\u6587\u540D\u79F0\uFF0C\u552F\u4E00\u6807\u8BC6\u7B26\uFF0C\u9ED8\u8BA4\u503C\u4E3A ",(0,d.jsx)(n.code,{children:"'modern.js'"}),"\u3002"]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.strong,{children:"\u7C7B\u578B"})}),"\n"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",children:"type Framework = string | undefined;\n"})}),"\n",(0,d.jsxs)(n.h3,{id:"buildercontextdevserver",children:["builder.context.devServer",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#buildercontextdevserver",children:"#"})]}),"\n",(0,d.jsx)(n.p,{children:"Dev Server \u76F8\u5173\u4FE1\u606F\uFF0C\u5305\u542B\u4E86\u5F53\u524D Dev Server \u7684 hostname \u548C\u7AEF\u53E3\u53F7\u3002"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.strong,{children:"\u7C7B\u578B"})}),"\n"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",children:"type DevServer = {\n  hostname: string;\n  port: number;\n};\n"})}),"\n",(0,d.jsxs)(n.h3,{id:"buildercontextbundlertype",children:["builder.context.bundlerType",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#buildercontextbundlertype",children:"#"})]}),"\n",(0,d.jsx)(n.p,{children:"\u5F53\u524D\u6267\u884C\u6784\u5EFA\u7684\u6784\u5EFA\u5DE5\u5177\u7C7B\u578B\u3002"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.strong,{children:"\u7C7B\u578B"})}),"\n"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",children:"type bundlerType = 'webpack' | 'rspack';\n"})}),"\n",(0,d.jsxs)(n.h2,{id:"builderbuild",children:["builder.build",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#builderbuild",children:"#"})]}),"\n",(0,d.jsx)(n.p,{children:"\u8C03\u7528 build \u65B9\u6CD5\u65F6\uFF0C\u4F1A\u6267\u884C\u4E00\u6B21\u751F\u4EA7\u73AF\u5883\u6784\u5EFA\u3002"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.strong,{children:"\u7C7B\u578B"})}),"\n"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",children:"type BuildOptions = {\n  mode?: 'development' | 'production';\n  watch?: boolean;\n  // \u81EA\u5B9A\u4E49 Compiler \u5BF9\u8C61\n  compiler?: Compiler | MultiCompiler;\n};\n\nfunction Build(options?: BuildOptions): Promise<void>;\n"})}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.strong,{children:"Example"})}),"\n"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",children:"await builder.build();\n"})}),"\n",(0,d.jsxs)(n.h3,{id:"\u5F00\u53D1\u73AF\u5883\u6784\u5EFA",children:["\u5F00\u53D1\u73AF\u5883\u6784\u5EFA",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u5F00\u53D1\u73AF\u5883\u6784\u5EFA",children:"#"})]}),"\n",(0,d.jsxs)(n.p,{children:["\u5982\u679C\u9700\u8981\u6267\u884C\u4E00\u6B21\u5F00\u53D1\u73AF\u5883\u6784\u5EFA\uFF0C\u53EF\u4EE5\u5C06 ",(0,d.jsx)(n.code,{children:"mode"})," \u53C2\u6570\u8BBE\u7F6E\u4E3A ",(0,d.jsx)(n.code,{children:"'development'"}),"\u3002"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",children:"await builder.build({\n  mode: 'development',\n});\n"})}),"\n",(0,d.jsxs)(n.h3,{id:"\u76D1\u542C\u6587\u4EF6\u53D8\u5316",children:["\u76D1\u542C\u6587\u4EF6\u53D8\u5316",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u76D1\u542C\u6587\u4EF6\u53D8\u5316",children:"#"})]}),"\n",(0,d.jsxs)(n.p,{children:["\u5982\u679C\u9700\u8981\u81EA\u52A8\u76D1\u542C\u6587\u4EF6\u53D8\u5316\u5E76\u91CD\u65B0\u6267\u884C\u6784\u5EFA\uFF0C\u53EF\u4EE5\u5C06 ",(0,d.jsx)(n.code,{children:"watch"})," \u53C2\u6570\u8BBE\u7F6E\u4E3A ",(0,d.jsx)(n.code,{children:"true"}),"\u3002"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",children:"await builder.build({\n  watch: true,\n});\n"})}),"\n",(0,d.jsxs)(n.h3,{id:"\u81EA\u5B9A\u4E49-compiler",children:["\u81EA\u5B9A\u4E49 Compiler",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u81EA\u5B9A\u4E49-compiler",children:"#"})]}),"\n",(0,d.jsx)(n.p,{children:"\u4E2A\u522B\u60C5\u51B5\u4E0B\uFF0C\u4F60\u53EF\u80FD\u5E0C\u671B\u4F7F\u7528\u81EA\u5B9A\u4E49\u7684 compiler\uFF1A"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",children:"const compiler = webpack({\n  // ...\n});\nawait builder.build({\n  compiler,\n});\n"})}),"\n",(0,d.jsxs)(n.h2,{id:"builderstartdevserver",children:["builder.startDevServer",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#builderstartdevserver",children:"#"})]}),"\n",(0,d.jsx)(n.p,{children:"\u542F\u52A8\u672C\u5730 Dev Server\uFF0C\u57FA\u4E8E Modern.js Dev Server \u5B9E\u73B0\u3002"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.strong,{children:"\u7C7B\u578B"})}),"\n"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",children:"type StartDevServerOptions = {\n  // \u662F\u5426\u8F93\u51FA URL \u4FE1\u606F\uFF0C\u9ED8\u8BA4\u4E3A true\n  printURLs?: boolean | Function;\n  // \u662F\u5426\u5728\u7AEF\u53E3\u88AB\u5360\u7528\u65F6\u629B\u51FA\u5F02\u5E38\uFF0C\u9ED8\u8BA4\u4E3A false\n  strictPort?: boolean;\n  // \u81EA\u5B9A\u4E49 Compiler \u5BF9\u8C61\n  compiler?: Compiler | MultiCompiler;\n  // \u900F\u4F20\u4E0E\u6784\u5EFA\u65E0\u5173\u7684 dev server \u914D\u7F6E\n  serverOptions?: Partial<ModernDevServerOptions>;\n  // \u662F\u5426\u5728\u542F\u52A8\u65F6\u9759\u9ED8\u83B7\u53D6\u7AEF\u53E3\u53F7\uFF0C\u9ED8\u8BA4\u4E3A false\n  getPortSliently?: boolean;\n  // \u81EA\u5B9A\u4E49\u65E5\u5FD7\u8F93\u51FA\u5BF9\u8C61\n  logger?: Logger;\n};\n\ntype StartServerResult = {\n  urls: string[];\n  port: number;\n  server: Server;\n};\n\nfunction StartDevServer(\n  options?: StartDevServerOptions,\n): Promise<StartServerResult>;\n"})}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.strong,{children:"Example"})}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:"\u542F\u52A8 Dev Server\uFF1A"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",children:"await builder.startDevServer();\n"})}),"\n",(0,d.jsx)(n.p,{children:"\u6210\u529F\u542F\u52A8 Dev Server \u540E\uFF0C\u53EF\u4EE5\u770B\u5230\u4EE5\u4E0B\u65E5\u5FD7\u4FE1\u606F\uFF1A"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:"info    Starting dev server...\n\n  > Local:    http://localhost:8080\n  > Network:  http://192.168.0.1:8080\n"})}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"startDevServer"})," \u4F1A\u8FD4\u56DE\u4EE5\u4E0B\u53C2\u6570\uFF1A"]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"urls"}),"\uFF1A\u8BBF\u95EE Dev Server \u7684 URLs"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"port"})," \u5B9E\u9645\u76D1\u542C\u7684\u7AEF\u53E3\u53F7"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"server"}),"\uFF1AServer \u5B9E\u4F8B\u5BF9\u8C61"]}),"\n"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",children:"const { urls, port, server } = await builder.startDevServer();\nconsole.log(urls); // ['http://localhost:8080', 'http://192.168.0.1:8080']\nconsole.log(port); // 8080\n\n// \u5173\u95ED Dev Server\nawait server.close();\n"})}),"\n",(0,d.jsxs)(n.h3,{id:"\u81EA\u5B9A\u4E49-url-\u8F93\u51FA",children:["\u81EA\u5B9A\u4E49 URL \u8F93\u51FA",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u81EA\u5B9A\u4E49-url-\u8F93\u51FA",children:"#"})]}),"\n",(0,d.jsxs)(n.p,{children:["\u5C06 ",(0,d.jsx)(n.code,{children:"printURLs"})," \u8BBE\u7F6E\u4E3A ",(0,d.jsx)(n.code,{children:"false"})," \u53EF\u4EE5\u7981\u7528\u9ED8\u8BA4\u7684 URL \u8F93\u51FA\uFF0C\u6B64\u65F6\u4F60\u53EF\u4EE5\u8F93\u51FA\u81EA\u5B9A\u4E49\u7684\u65E5\u5FD7\u5185\u5BB9\u3002"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",children:"await builder.startDevServer({\n  printURLs: false,\n});\n"})}),"\n",(0,d.jsxs)(n.p,{children:["\u4F60\u4E5F\u53EF\u4EE5\u76F4\u63A5\u5C06 ",(0,d.jsx)(n.code,{children:"printURLs"})," \u914D\u7F6E\u4E3A\u4E00\u4E2A\u51FD\u6570\u6765\u4FEE\u6539 URL\uFF0C\u6BD4\u5982\u7ED9\u6BCF\u4E2A URL \u589E\u52A0\u4E00\u4E2A\u5B50\u8DEF\u5F84\uFF1A"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",children:"await builder.startDevServer({\n  printURLs: urls => {\n    return urls.map(({ label, url }) => ({\n      label,\n      url: `${url}/path`,\n    }));\n  },\n});\n"})}),"\n",(0,d.jsxs)(n.h3,{id:"\u4E25\u683C\u9650\u5236\u7AEF\u53E3",children:["\u4E25\u683C\u9650\u5236\u7AEF\u53E3",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u4E25\u683C\u9650\u5236\u7AEF\u53E3",children:"#"})]}),"\n",(0,d.jsx)(n.p,{children:"\u5F53\u7AEF\u53E3\u88AB\u5360\u7528\u65F6\uFF0CBuilder \u4F1A\u81EA\u52A8\u9012\u589E\u7AEF\u53E3\u53F7\uFF0C\u76F4\u81F3\u627E\u5230\u4E00\u4E2A\u53EF\u7528\u7AEF\u53E3\u3002"}),"\n",(0,d.jsxs)(n.p,{children:["\u5982\u679C\u4F60\u5E0C\u671B\u5728\u7AEF\u53E3\u88AB\u5360\u7528\u65F6\u629B\u51FA\u5F02\u5E38\uFF0C\u53EF\u4EE5\u5C06 ",(0,d.jsx)(n.code,{children:"strictPort"})," \u8BBE\u7F6E\u4E3A ",(0,d.jsx)(n.code,{children:"true"}),"\u3002"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",children:"await builder.startDevServer({\n  strictPort: true,\n});\n"})}),"\n",(0,d.jsxs)(n.h3,{id:"\u81EA\u5B9A\u4E49-compiler-1",children:["\u81EA\u5B9A\u4E49 Compiler",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u81EA\u5B9A\u4E49-compiler-1",children:"#"})]}),"\n",(0,d.jsx)(n.p,{children:"\u4E2A\u522B\u60C5\u51B5\u4E0B\uFF0C\u4F60\u53EF\u80FD\u5E0C\u671B\u4F7F\u7528\u81EA\u5B9A\u4E49\u7684 compiler\uFF1A"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",children:"const compiler = webpack({\n  // ...\n});\nawait builder.startDevServer({\n  compiler,\n});\n"})}),"\n",(0,d.jsxs)(n.h3,{id:"\u9759\u9ED8\u83B7\u53D6\u7AEF\u53E3\u53F7",children:["\u9759\u9ED8\u83B7\u53D6\u7AEF\u53E3\u53F7",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u9759\u9ED8\u83B7\u53D6\u7AEF\u53E3\u53F7",children:"#"})]}),"\n",(0,d.jsxs)(n.p,{children:["\u67D0\u4E9B\u60C5\u51B5\u4E0B\uFF0C\u9ED8\u8BA4\u542F\u52A8\u7684\u7AEF\u53E3\u53F7\u5DF2\u7ECF\u88AB\u5360\u7528\uFF0C\u6B64\u65F6 Builder \u4F1A\u81EA\u52A8\u9012\u589E\u7AEF\u53E3\u53F7\uFF0C\u76F4\u81F3\u627E\u5230\u4E00\u4E2A\u53EF\u7528\u7AEF\u53E3\u3002\u8FD9\u4E2A\u8FC7\u7A0B\u4F1A\u8F93\u51FA\u63D0\u793A\u65E5\u5FD7\uFF0C\u5982\u679C\u4F60\u4E0D\u5E0C\u671B\u8FD9\u6BB5\u65E5\u5FD7\uFF0C\u53EF\u4EE5\u5C06 ",(0,d.jsx)(n.code,{children:"getPortSliently"})," \u8BBE\u7F6E\u4E3A ",(0,d.jsx)(n.code,{children:"true"}),"\u3002"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",children:"await builder.startDevServer({\n  getPortSliently: true,\n});\n"})}),"\n",(0,d.jsxs)(n.h3,{id:"\u81EA\u5B9A\u4E49\u65E5\u5FD7\u8F93\u51FA\u5BF9\u8C61",children:["\u81EA\u5B9A\u4E49\u65E5\u5FD7\u8F93\u51FA\u5BF9\u8C61",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u81EA\u5B9A\u4E49\u65E5\u5FD7\u8F93\u51FA\u5BF9\u8C61",children:"#"})]}),"\n",(0,d.jsxs)(n.p,{children:["\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0CBuilder \u4F1A\u4F7F\u7528 ",(0,d.jsx)(n.code,{children:"@modern-js/utils/logger"})," \u6765\u8F93\u51FA\u65E5\u5FD7\uFF0C\u4F60\u53EF\u4EE5\u901A\u8FC7 ",(0,d.jsx)(n.code,{children:"logger"})," \u53C2\u6570\u6765\u81EA\u5B9A\u4E49\u65E5\u5FD7\u8F93\u51FA\u5BF9\u8C61\u3002"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",children:"const customLogger = {\n  // \u4F60\u9700\u8981\u5B9A\u4E49\u4EE5\u4E0B\u7684\u65B9\u6CD5\n  info(msg: string) {\n    console.log(msg);\n  },\n  error(msg: string) {\n    console.error(msg);\n  },\n  warn(msg: string) {\n    console.warn(msg);\n  },\n  success(msg: string) {\n    console.log(`\u2705 msg`);\n  },\n  debug(msg: string) {\n    if (process.env.DEBUG) {\n      console.log(msg);\n    }\n  },\n  log(msg: string) {\n    console.log(msg);\n  };\n}\n\nawait builder.startDevServer({\n  logger: customLogger,\n});\n"})}),"\n",(0,d.jsx)(n.p,{children:"\u8FD9\u6837\uFF0CBuilder \u4F1A\u4F7F\u7528\u4F60\u81EA\u5B9A\u4E49\u7684\u65E5\u5FD7\u8F93\u51FA\u5BF9\u8C61\u6765\u8F93\u51FA\u65E5\u5FD7\u3002"}),"\n",(0,d.jsxs)(n.h2,{id:"builderserve",children:["builder.serve",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#builderserve",children:"#"})]}),"\n",(0,d.jsxs)(n.p,{children:["\u5728\u672C\u5730\u542F\u52A8 Server \u6765\u9884\u89C8\u751F\u4EA7\u73AF\u5883\u6784\u5EFA\u7684\u4EA7\u7269\uFF0C\u9700\u8981\u5728 ",(0,d.jsx)(n.code,{children:"builder.build"})," \u65B9\u6CD5\u4E4B\u540E\u6267\u884C\u3002"]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.strong,{children:"\u7C7B\u578B"})}),"\n"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",children:"type StartServerResult = {\n  urls: string[];\n  port: number;\n  server: Server;\n};\n\nfunction server(): Promise<StartServerResult>;\n"})}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.strong,{children:"Example"})}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:"\u542F\u52A8 Server\uFF1A"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",children:"await builder.serve();\n"})}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"serve"})," \u4F1A\u8FD4\u56DE\u4EE5\u4E0B\u53C2\u6570\uFF1A"]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"urls"}),"\uFF1A\u8BBF\u95EE Server \u7684 URLs"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"port"})," \u5B9E\u9645\u76D1\u542C\u7684\u7AEF\u53E3\u53F7"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"server"}),"\uFF1AServer \u5B9E\u4F8B\u5BF9\u8C61"]}),"\n"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",children:"const { urls, port, server } = await builder.serve();\nconsole.log(urls); // ['http://localhost:8080', 'http://192.168.0.1:8080']\nconsole.log(port); // 8080\n\n// \u5173\u95ED Server\nawait server.close();\n"})}),"\n",(0,d.jsxs)(n.h2,{id:"buildercreatecompiler",children:["builder.createCompiler",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#buildercreatecompiler",children:"#"})]}),"\n",(0,d.jsx)(n.p,{children:"\u521B\u5EFA\u4E00\u4E2A compiler \u5BF9\u8C61\u3002"}),"\n",(0,d.jsxs)(n.p,{children:["\u5F53 ",(0,d.jsx)(n.code,{children:"createBuilder"})," \u7684 ",(0,d.jsx)(n.code,{children:"target"})," \u9009\u9879\u5305\u542B\u4E00\u4E2A\u503C\u65F6\uFF0C\u8FD4\u56DE\u503C\u4E3A ",(0,d.jsx)(n.code,{children:"Compiler"}),"\uFF1B\u5F53 ",(0,d.jsx)(n.code,{children:"target"})," \u5305\u542B\u591A\u4E2A\u503C\u65F6\uFF0C\u8FD4\u56DE\u503C\u4E3A ",(0,d.jsx)(n.code,{children:"MultiCompiler"}),"\u3002"]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.strong,{children:"\u7C7B\u578B"})}),"\n"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",children:"function CreateCompiler(): Promise<Compiler | MultiCompiler>;\n"})}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.strong,{children:"Example"})}),"\n"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",children:"const compiler = await builder.createCompiler();\n"})}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsx)(n.p,{children:"\u5927\u90E8\u5206\u573A\u666F\u4E0B\uFF0C\u4E0D\u9700\u8981\u4F7F\u7528\u8BE5 API\uFF0C\u9664\u975E\u9700\u8981\u8FDB\u884C\u81EA\u5B9A\u4E49 Dev Server \u7B49\u9AD8\u7EA7\u64CD\u4F5C\u3002"}),"\n"]}),"\n",(0,d.jsxs)(n.h2,{id:"builderaddplugins",children:["builder.addPlugins",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#builderaddplugins",children:"#"})]}),"\n",(0,d.jsx)(n.p,{children:"\u6CE8\u518C\u4E00\u4E2A\u6216\u591A\u4E2A builder \u63D2\u4EF6\uFF0C\u53EF\u4EE5\u88AB\u591A\u6B21\u8C03\u7528\u3002"}),"\n",(0,d.jsx)(n.p,{children:"\u8BE5\u65B9\u6CD5\u9700\u8981\u5728\u5F00\u59CB\u7F16\u8BD1\u524D\u8C03\u7528\uFF0C\u5982\u679C\u5728\u5F00\u59CB\u7F16\u8BD1\u4E4B\u540E\u8C03\u7528\uFF0C\u5219\u4E0D\u4F1A\u5F71\u54CD\u7F16\u8BD1\u7ED3\u679C\u3002"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.strong,{children:"\u7C7B\u578B"})}),"\n"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",children:"type AddPluginsOptions = { before?: string } | { after?: string };\n\nfunction AddPlugins(\n  plugins: BuilderPlugins[],\n  options?: AddPluginsOptions,\n): Promise<void>;\n"})}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.strong,{children:"Example"})}),"\n"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",children:"builder.addPlugins([builderPluginFoo(), builderPluginBar()]);\n\n// \u5728 bar \u63D2\u4EF6\u4E4B\u524D\u63D2\u5165\nbuilder.addPlugins([builderPluginFoo()], { before: 'bar' });\n\n// \u5728 bar \u63D2\u4EF6\u4E4B\u540E\u63D2\u5165\nbuilder.addPlugins([builderPluginFoo()], { after: 'bar' });\n"})}),"\n",(0,d.jsxs)(n.h2,{id:"builderremoveplugins",children:["builder.removePlugins",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#builderremoveplugins",children:"#"})]}),"\n",(0,d.jsx)(n.p,{children:"\u79FB\u9664\u4E00\u4E2A\u6216\u591A\u4E2A builder \u63D2\u4EF6\uFF0C\u53EF\u4EE5\u88AB\u591A\u6B21\u8C03\u7528\u3002"}),"\n",(0,d.jsx)(n.p,{children:"\u8BE5\u65B9\u6CD5\u9700\u8981\u5728\u5F00\u59CB\u7F16\u8BD1\u524D\u8C03\u7528\uFF0C\u5982\u679C\u5728\u5F00\u59CB\u7F16\u8BD1\u4E4B\u540E\u8C03\u7528\uFF0C\u5219\u4E0D\u4F1A\u5F71\u54CD\u7F16\u8BD1\u7ED3\u679C\u3002"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.strong,{children:"\u7C7B\u578B"})}),"\n"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",children:"function RemovePlugins(pluginNames: string[]): void;\n"})}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.strong,{children:"Example"})}),"\n"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",children:"// \u6DFB\u52A0\u63D2\u4EF6\nconst pluginFoo = builderPluginFoo();\nbuilder.addPlugins(pluginFoo);\n\n// \u79FB\u9664\u63D2\u4EF6\nbuilder.removePlugins([pluginFoo.name]);\n"})}),"\n",(0,d.jsxs)(n.h2,{id:"builderispluginexists",children:["builder.isPluginExists",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#builderispluginexists",children:"#"})]}),"\n","\n",(0,d.jsx)(t.default,{}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.strong,{children:"Example"})}),"\n"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",children:"builder.addPlugins([builderPluginFoo()]);\n\nbuilder.isPluginExists(builderPluginFoo().name); // true\n"})}),"\n",(0,d.jsxs)(n.h2,{id:"builderinspectconfig",children:["builder.inspectConfig",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#builderinspectconfig",children:"#"})]}),"\n",(0,d.jsx)(n.p,{children:"\u67E5\u770B Builder \u5185\u90E8\u6700\u7EC8\u751F\u6210\u7684 builder \u914D\u7F6E\u548C bundler \u914D\u7F6E\u3002"}),"\n",(0,d.jsxs)(n.div,{className:"rspress-directive tip",children:[(0,d.jsx)(n.div,{className:"rspress-directive-title",children:"TIP"}),(0,d.jsxs)(n.div,{className:"rspress-directive-content",children:[(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"inspectConfig"})," \u65B9\u6CD5\u4E0D\u652F\u6301\u4E0E ",(0,d.jsx)(n.code,{children:"startDevServer"})," / ",(0,d.jsx)(n.code,{children:"build"})," \u65B9\u6CD5\u540C\u65F6\u4F7F\u7528\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:["\u5F53\u4F60\u9700\u8981\u5728\u6784\u5EFA\u8FC7\u7A0B\u4E2D\u67E5\u770B\u5B8C\u6574\u7684 builder \u548C bundler \u914D\u7F6E\u65F6\uFF0C\u53EF\u4EE5\u4F7F\u7528 ",(0,d.jsx)(n.a,{href:"/guide/debug/debug-mode",children:"\u8C03\u8BD5\u6A21\u5F0F"}),"\uFF0C\u4E5F\u53EF\u4EE5\u901A\u8FC7 ",(0,d.jsx)(n.code,{children:"onBeforeBuild"}),"\u3001",(0,d.jsx)(n.code,{children:"onBeforeCreateCompile"})," \u7B49\u94A9\u5B50\u51FD\u6570\u6765\u83B7\u53D6\u3002\n"]})]})]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.strong,{children:"\u7C7B\u578B"})}),"\n"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",children:'type InspectConfigOptions = {\n  // \u67E5\u770B\u6307\u5B9A\u73AF\u5883\u4E0B\u7684\u914D\u7F6E\uFF0C\u9ED8\u8BA4\u4E3A "development"\uFF0C\u53EF\u4EE5\u8BBE\u7F6E\u4E3A "production"\n  env?: BuilderMode;\n  // \u662F\u5426\u5F00\u542F\u5197\u4F59\u6A21\u5F0F\uFF0C\u5C55\u793A\u914D\u7F6E\u4E2D\u51FD\u6570\u7684\u5B8C\u6574\u5185\u5BB9\uFF0C\u9ED8\u8BA4\u4E3A `false`\n  verbose?: boolean;\n  // \u6307\u5B9A\u8F93\u51FA\u8DEF\u5F84\uFF0C\u9ED8\u8BA4\u4E3A `output.distPath.root` \u914D\u7F6E\u7684\u503C\n  outputPath?: string;\n  // \u662F\u5426\u5C06\u7ED3\u679C\u5199\u5165\u5230\u78C1\u76D8\u4E2D\uFF0C\u9ED8\u8BA4\u4E3A `false`\n  writeToDisk?: boolean;\n};\n\nasync function InspectConfig(options?: InspectConfigOptions): Promise<{\n  builderConfig: string;\n  bundlerConfigs: string[];\n  origin: {\n    builderConfig: BuilderConfig;\n    bundlerConfigs: BundlerConfigs[];\n  };\n}>;\n'})}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.strong,{children:"Example"})}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:"\u62FF\u5230\u5B57\u7B26\u4E32\u683C\u5F0F\u7684 Config \u5185\u5BB9\uFF1A"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",children:"const { builderConfig, bundlerConfigs } = await builder.inspectConfig();\n\nconsole.log(builderConfig, bundlerConfigs);\n"})}),"\n",(0,d.jsx)(n.p,{children:"\u76F4\u63A5\u5C06\u914D\u7F6E\u5185\u5BB9\u5199\u5165\u5230\u78C1\u76D8\u4E0A\uFF1A"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",children:"await builder.inspectConfig({\n  writeToDisk: true,\n});\n"})}),"\n",(0,d.jsxs)(n.h2,{id:"builderonbeforecreatecompiler",children:["builder.onBeforeCreateCompiler",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#builderonbeforecreatecompiler",children:"#"})]}),"\n","\n",(0,d.jsx)(c.default,{}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.strong,{children:"Example"})}),"\n"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",children:"builder.onBeforeCreateCompiler(({ bundlerConfigs }) => {\n  console.log('the bundler config is ', bundlerConfigs);\n});\n"})}),"\n",(0,d.jsxs)(n.h2,{id:"builderonaftercreatecompiler",children:["builder.onAfterCreateCompiler",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#builderonaftercreatecompiler",children:"#"})]}),"\n","\n",(0,d.jsx)(a.default,{}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.strong,{children:"Example"})}),"\n"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",children:"builder.onAfterCreateCompiler(({ compiler }) => {\n  console.log('the compiler is ', compiler);\n});\n"})}),"\n",(0,d.jsxs)(n.h2,{id:"builderonbeforebuild",children:["builder.onBeforeBuild",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#builderonbeforebuild",children:"#"})]}),"\n","\n",(0,d.jsx)(h.default,{}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.strong,{children:"Example"})}),"\n"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",children:"builder.onBeforeBuild(({ bundlerConfigs }) => {\n  console.log('the bundler config is ', bundlerConfigs);\n});\n"})}),"\n",(0,d.jsxs)(n.h2,{id:"builderonafterbuild",children:["builder.onAfterBuild",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#builderonafterbuild",children:"#"})]}),"\n","\n",(0,d.jsx)(o.default,{}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.strong,{children:"Example"})}),"\n"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",children:"builder.onAfterBuild(({ stats }) => {\n  console.log(stats?.toJson());\n});\n"})}),"\n",(0,d.jsxs)(n.h2,{id:"builderonbeforestartdevserver",children:["builder.onBeforeStartDevServer",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#builderonbeforestartdevserver",children:"#"})]}),"\n","\n",(0,d.jsx)(u.default,{}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.strong,{children:"Example"})}),"\n"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",children:"builder.onBeforeStartDevServer(() => {\n  console.log('before start!');\n});\n"})}),"\n",(0,d.jsxs)(n.h2,{id:"builderonafterstartdevserver",children:["builder.onAfterStartDevServer",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#builderonafterstartdevserver",children:"#"})]}),"\n","\n",(0,d.jsx)(x.default,{}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.strong,{children:"Example"})}),"\n"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",children:"builder.onAfterStartDevServer(({ port }) => {\n  console.log('this port is: ', port);\n});\n"})}),"\n",(0,d.jsxs)(n.h2,{id:"builderondevcompiledone",children:["builder.onDevCompileDone",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#builderondevcompiledone",children:"#"})]}),"\n","\n",(0,d.jsx)(j.default,{}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.strong,{children:"Example"})}),"\n"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",children:"builder.onDevCompileDone(({ isFirstCompile }) => {\n  if (isFirstCompile) {\n    console.log('first compile!');\n  } else {\n    console.log('re-compile!');\n  }\n});\n"})}),"\n",(0,d.jsxs)(n.h2,{id:"builderonexit",children:["builder.onExit",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#builderonexit",children:"#"})]}),"\n","\n",(0,d.jsx)(p.default,{}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.strong,{children:"Example"})}),"\n"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",children:"builder.onExit(() => {\n  console.log('exit!');\n});\n"})}),"\n",(0,d.jsxs)(n.h2,{id:"buildergetbuilderconfig",children:["builder.getBuilderConfig",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#buildergetbuilderconfig",children:"#"})]}),"\n","\n",(0,d.jsx)(g.default,{}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.strong,{children:"Example"})}),"\n"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",children:"builder.onBeforeBuild(() => {\n  const config = api.getBuilderConfig();\n  console.log(config.html?.title);\n});\n"})}),"\n",(0,d.jsxs)(n.h2,{id:"buildergetnormalizedconfig",children:["builder.getNormalizedConfig",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#buildergetnormalizedconfig",children:"#"})]}),"\n","\n",(0,d.jsx)(b.default,{}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.strong,{children:"Example"})}),"\n"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",children:"builder.onBeforeBuild(() => {\n  const config = api.getNormalizedConfig();\n  console.log(config.html.title);\n});\n"})}),"\n",(0,d.jsxs)(n.h2,{id:"buildergethtmlpaths",children:["builder.getHTMLPaths",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#buildergethtmlpaths",children:"#"})]}),"\n","\n",(0,d.jsx)(m.default,{}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.strong,{children:"Example"})}),"\n"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",children:"builder.onBeforeBuild(() => {\n  const htmlPaths = api.getHTMLPaths();\n  console.log(htmlPaths); // { main: 'html/main/index.html' };\n});\n"})})]})}function v(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,s.useMDXComponents)(),e.components).wrapper;return n?(0,d.jsx)(n,(0,l._)((0,i._)({},e),{children:(0,d.jsx)(f,(0,i._)({},e))})):f(e)}var N=v;v.__RSPRESS_PAGE_META={},v.__RSPRESS_PAGE_META["zh%2Fapi%2Fbuilder-instance.mdx"]={toc:[{text:"builder.context",id:"buildercontext",depth:2},{text:"builder.context.entry",id:"buildercontextentry",depth:3},{text:"builder.context.target",id:"buildercontexttarget",depth:3},{text:"builder.context.rootPath",id:"buildercontextrootpath",depth:3},{text:"builder.context.srcPath",id:"buildercontextsrcpath",depth:3},{text:"builder.context.distPath",id:"buildercontextdistpath",depth:3},{text:"builder.context.cachePath",id:"buildercontextcachepath",depth:3},{text:"builder.context.configPath",id:"buildercontextconfigpath",depth:3},{text:"builder.context.tsconfigPath",id:"buildercontexttsconfigpath",depth:3},{text:"builder.context.framework",id:"buildercontextframework",depth:3},{text:"builder.context.devServer",id:"buildercontextdevserver",depth:3},{text:"builder.context.bundlerType",id:"buildercontextbundlertype",depth:3},{text:"builder.build",id:"builderbuild",depth:2},{text:"\u5F00\u53D1\u73AF\u5883\u6784\u5EFA",id:"\u5F00\u53D1\u73AF\u5883\u6784\u5EFA",depth:3},{text:"\u76D1\u542C\u6587\u4EF6\u53D8\u5316",id:"\u76D1\u542C\u6587\u4EF6\u53D8\u5316",depth:3},{text:"\u81EA\u5B9A\u4E49 Compiler",id:"\u81EA\u5B9A\u4E49-compiler",depth:3},{text:"builder.startDevServer",id:"builderstartdevserver",depth:2},{text:"\u81EA\u5B9A\u4E49 URL \u8F93\u51FA",id:"\u81EA\u5B9A\u4E49-url-\u8F93\u51FA",depth:3},{text:"\u4E25\u683C\u9650\u5236\u7AEF\u53E3",id:"\u4E25\u683C\u9650\u5236\u7AEF\u53E3",depth:3},{text:"\u81EA\u5B9A\u4E49 Compiler",id:"\u81EA\u5B9A\u4E49-compiler-1",depth:3},{text:"\u9759\u9ED8\u83B7\u53D6\u7AEF\u53E3\u53F7",id:"\u9759\u9ED8\u83B7\u53D6\u7AEF\u53E3\u53F7",depth:3},{text:"\u81EA\u5B9A\u4E49\u65E5\u5FD7\u8F93\u51FA\u5BF9\u8C61",id:"\u81EA\u5B9A\u4E49\u65E5\u5FD7\u8F93\u51FA\u5BF9\u8C61",depth:3},{text:"builder.serve",id:"builderserve",depth:2},{text:"builder.createCompiler",id:"buildercreatecompiler",depth:2},{text:"builder.addPlugins",id:"builderaddplugins",depth:2},{text:"builder.removePlugins",id:"builderremoveplugins",depth:2},{text:"builder.isPluginExists",id:"builderispluginexists",depth:2},{text:"builder.inspectConfig",id:"builderinspectconfig",depth:2},{text:"builder.onBeforeCreateCompiler",id:"builderonbeforecreatecompiler",depth:2},{text:"builder.onAfterCreateCompiler",id:"builderonaftercreatecompiler",depth:2},{text:"builder.onBeforeBuild",id:"builderonbeforebuild",depth:2},{text:"builder.onAfterBuild",id:"builderonafterbuild",depth:2},{text:"builder.onBeforeStartDevServer",id:"builderonbeforestartdevserver",depth:2},{text:"builder.onAfterStartDevServer",id:"builderonafterstartdevserver",depth:2},{text:"builder.onDevCompileDone",id:"builderondevcompiledone",depth:2},{text:"builder.onExit",id:"builderonexit",depth:2},{text:"builder.getBuilderConfig",id:"buildergetbuilderconfig",depth:2},{text:"builder.getNormalizedConfig",id:"buildergetnormalizedconfig",depth:2},{text:"builder.getHTMLPaths",id:"buildergethtmlpaths",depth:2}],title:"Builder Instance"};var C={extractApiHeaders:[2]}}}]);