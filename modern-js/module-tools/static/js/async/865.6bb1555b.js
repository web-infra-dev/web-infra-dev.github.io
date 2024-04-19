/*! For license information please see 865.6bb1555b.js.LICENSE.txt */
(self.webpackChunk_modern_js_module_tools_docs=self.webpackChunk_modern_js_module_tools_docs||[]).push([["865"],{96948:function(e,n,r){"use strict";r.r(n);var l=r("39980"),s=r("9580");function i(e){let n=Object.assign({h1:"h1",a:"a",p:"p",ul:"ul",li:"li",code:"code",h2:"h2",h3:"h3",pre:"pre",blockquote:"blockquote"},(0,s.ah)(),e.components);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(n.h1,{id:"plugin-hooks",children:["Plugin Hooks",(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#plugin-hooks",children:"#"})]}),"\n",(0,l.jsx)(n.p,{children:"\u672C\u7AE0\u4ECB\u7ECD\u5173\u4E8E Modern.js Module \u652F\u6301\u7684\u751F\u547D\u5468\u671F\u94A9\u5B50\u3002"}),"\n",(0,l.jsx)(n.p,{children:"\u76EE\u524D\u4E3B\u8981\u5305\u542B\u4EE5\u4E0B\u51E0\u7C7B\u751F\u547D\u5468\u671F\u94A9\u5B50\uFF1A"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u914D\u7F6E\u94A9\u5B50\uFF1A\u7528\u4E8E\u5904\u7406\u7528\u6237\u914D\u7F6E\u3002"}),"\n",(0,l.jsxs)(n.li,{children:["\u6784\u5EFA\u94A9\u5B50\uFF1A\u4EC5\u5728\u6267\u884C ",(0,l.jsx)(n.code,{children:"build"})," \u547D\u4EE4\u6784\u5EFA\u6E90\u7801\u4EA7\u7269\u65F6\u89E6\u53D1\u3002"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"buildPlatform"})," \u94A9\u5B50\uFF1A\u4EC5\u5728\u6267\u884C ",(0,l.jsx)(n.code,{children:"build --platform"})," \u547D\u4EE4\u751F\u6210\u5176\u4ED6\u6784\u5EFA\u4EA7\u7269\u65F6\u89E6\u53D1\u3002"]}),"\n",(0,l.jsxs)(n.li,{children:["\u8C03\u8BD5\u94A9\u5B50\uFF1A\u8FD0\u884C ",(0,l.jsx)(n.code,{children:"dev"})," \u547D\u4EE4\u65F6\u4F1A\u89E6\u53D1\u7684\u94A9\u5B50\u3002"]}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:["\u8FD9\u91CC\u8BE6\u7EC6\u89E3\u91CA\u4E86 ",(0,l.jsx)(n.a,{href:"https://modernjs.dev/guides/topic-detail/framework-plugin/hook.html",target:"_blank",rel:"noopener noreferrer",children:"Hook \u6A21\u578B"})]}),"\n",(0,l.jsxs)(n.h2,{id:"\u914D\u7F6E\u94A9\u5B50",children:["\u914D\u7F6E\u94A9\u5B50",(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u914D\u7F6E\u94A9\u5B50",children:"#"})]}),"\n",(0,l.jsxs)(n.h3,{id:"resolvemoduleuserconfig",children:[(0,l.jsx)(n.code,{children:"resolveModuleUserConfig"}),(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#resolvemoduleuserconfig",children:"#"})]}),"\n",(0,l.jsx)(n.p,{children:"\u7528\u4E8E\u4FEE\u6539\u7528\u6237\u914D\u7F6E\u3002"}),"\n",(0,l.jsxs)(n.p,{children:["\u7C7B\u578B\uFF1A",(0,l.jsx)(n.code,{children:"AsyncWaterfall"})]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-ts",children:"export const myPlugin = (): CliPlugin<ModuleTools> => ({\n  name: 'my-plugin',\n\n  setup() {\n    return {\n      resolveModuleUserConfig(config: ModuleUserConfig): ModuleUserConfig {},\n    };\n  },\n});\n"})}),"\n",(0,l.jsxs)(n.h2,{id:"\u6784\u5EFA\u94A9\u5B50",children:["\u6784\u5EFA\u94A9\u5B50",(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u6784\u5EFA\u94A9\u5B50",children:"#"})]}),"\n",(0,l.jsxs)(n.p,{children:["\u5728\u6267\u884C ",(0,l.jsx)(n.code,{children:"build"})," \u547D\u4EE4\u7684\u65F6\u5019\uFF0C\u4F1A\u6309\u7167\u987A\u5E8F\u89E6\u53D1\u4EE5\u4E0B Hooks\uFF1A"]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"beforeBuild"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"beforeBuildTask"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"afterBuildTask"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"afterBuild"})}),"\n"]}),"\n",(0,l.jsxs)(n.h3,{id:"beforebuild",children:[(0,l.jsx)(n.code,{children:"beforeBuild"}),(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#beforebuild",children:"#"})]}),"\n",(0,l.jsx)(n.p,{children:"\u6267\u884C\u6574\u4F53\u6784\u5EFA\u6D41\u7A0B\u4E4B\u524D\u89E6\u53D1\u3002"}),"\n",(0,l.jsxs)(n.p,{children:["\u7C7B\u578B\uFF1A",(0,l.jsx)(n.code,{children:"ParallelWorkflow"})]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-ts",children:"export const myPlugin = (): CliPlugin<ModuleTools> => ({\n  name: 'my-plugin',\n\n  setup() {\n    return {\n      beforeBuild(options: Options): void {},\n    };\n  },\n});\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u53C2\u6570\u7C7B\u578B\uFF1A"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-ts",children:"type Options = {\n  options: { config: BaseBuildConfig[]; cliOptions: BuildCommandOptions };\n};\n\nexport interface BuildCommandOptions {\n  config: string;\n  clear?: boolean;\n  dts?: boolean;\n  platform?: boolean | string[];\n  tsconfig: string;\n  watch?: boolean;\n}\n"})}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"BuildConfig"})," \u7C7B\u578B\u53C2\u8003 ",(0,l.jsx)(n.a,{href:"/api/",children:"API \u914D\u7F6E"})]}),"\n"]}),"\n",(0,l.jsxs)(n.h3,{id:"beforebuildtask",children:[(0,l.jsx)(n.code,{children:"beforeBuildTask"}),(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#beforebuildtask",children:"#"})]}),"\n",(0,l.jsx)(n.p,{children:"\u6839\u636E\u6784\u5EFA\u914D\u7F6E\uFF0CModern.js Module \u4F1A\u5C06\u6574\u4F53\u6784\u5EFA\u5206\u6210\u591A\u4E2A\u5B50\u6784\u5EFA\u4EFB\u52A1\u3002\u8BE5 Hook \u5C06\u4F1A\u5728\u6BCF\u4E00\u4E2A\u6784\u5EFA\u5B50\u4EFB\u52A1\u4E4B\u524D\u89E6\u53D1\u3002"}),"\n",(0,l.jsxs)(n.p,{children:["\u7C7B\u578B\uFF1A",(0,l.jsx)(n.code,{children:"AsyncWaterfall"})]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-ts",children:"export const myPlugin = (): CliPlugin<ModuleTools> => ({\n  name: 'my-plugin',\n\n  setup() {\n    return {\n      beforeBuildTask(config: BaseBuildConfig): BaseBuildConfig {\n        return config;\n      },\n    };\n  },\n});\n"})}),"\n",(0,l.jsxs)(n.h3,{id:"afterbuildtask",children:[(0,l.jsx)(n.code,{children:"afterBuildTask"}),(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#afterbuildtask",children:"#"})]}),"\n",(0,l.jsxs)(n.p,{children:["\u7C7B\u578B\uFF1A",(0,l.jsx)(n.code,{children:"ParallelWorkflow"}),"\uFF0C\u6BCF\u4E00\u4E2A\u6784\u5EFA\u5B50\u4EFB\u52A1\u7ED3\u675F\u4E4B\u540E\u89E6\u53D1\u3002"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-ts",children:"export const myPlugin = (): CliPlugin<ModuleTools> => ({\n  name: 'my-plugin',\n\n  setup() {\n    return {\n      afterBuildTask(options: BuildTaskResult): void {\n        // ...\n      },\n    };\n  },\n});\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u53C2\u6570\u548C\u8FD4\u56DE\u503C\u7C7B\u578B\uFF1A"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-ts",children:"export interface BuildTaskResult {\n  status: 'success' | 'fail';\n  message?: string;\n  config: BaseBuildConfig;\n}\n"})}),"\n",(0,l.jsxs)(n.h3,{id:"afterbuild",children:[(0,l.jsx)(n.code,{children:"afterBuild"}),(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#afterbuild",children:"#"})]}),"\n",(0,l.jsxs)(n.p,{children:["\u7C7B\u578B\uFF1A",(0,l.jsx)(n.code,{children:"ParallelWorkflow"}),"\uFF0C\u6574\u4F53\u6784\u5EFA\u6D41\u7A0B\u7ED3\u675F\u4E4B\u540E\u89E6\u53D1\u3002"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-ts",children:"export const myPlugin = (): CliPlugin<ModuleTools> => ({\n  name: 'my-plugin',\n\n  setup() {\n    return {\n      afterBuild(options: BuildResult): void {\n        // ...\n      },\n    };\n  },\n});\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u53C2\u6570\u548C\u8FD4\u56DE\u503C\u7C7B\u578B\uFF1A"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-ts",children:"export interface BuildResult {\n  status: 'success' | 'fail';\n  message?: string;\n  config: BuildConfig;\n  commandOptions: BuildCommandOptions;\n  totalDuration: number;\n}\n"})}),"\n",(0,l.jsxs)(n.h2,{id:"buildplatform-\u94A9\u5B50",children:["buildPlatform \u94A9\u5B50",(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#buildplatform-\u94A9\u5B50",children:"#"})]}),"\n",(0,l.jsxs)(n.p,{children:["module-tools \u8FD8\u63D0\u4F9B\u4E86 ",(0,l.jsx)(n.code,{children:"build --platform"})," \u547D\u4EE4\u6765\u6267\u884C\u7279\u5B9A\u7684\u6784\u5EFA\u4EFB\u52A1\u3002"]}),"\n",(0,l.jsxs)(n.p,{children:["\u4F8B\u5982\u5728\u5B89\u88C5\u4E86 Doc \u63D2\u4EF6\u540E\uFF0C\u5C31\u53EF\u4EE5\u6267\u884C ",(0,l.jsx)(n.code,{children:"build --platform"})," \u6216\u8005 ",(0,l.jsx)(n.code,{children:"build --platform doc"})," \u6765\u6267\u884C doc \u7684\u6784\u5EFA\u4EFB\u52A1\u3002\u56E0\u4E3A doc \u63D2\u4EF6\u57FA\u4E8E buildPlatform Hooks \u5B9E\u73B0\u4E86\u8BE5\u529F\u80FD\u3002"]}),"\n",(0,l.jsxs)(n.p,{children:["\u5728\u6267\u884C ",(0,l.jsx)(n.code,{children:"build --platform"})," \u540E\u4F1A\u6309\u7167\u4EE5\u4E0B\u987A\u5E8F\u89E6\u53D1 Hooks\uFF1A"]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"registerBuildPlatform"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"beforeBuildPlatform"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"buildPlatform"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"afterBuildPlatform"})}),"\n"]}),"\n",(0,l.jsxs)(n.h3,{id:"registerbuildplatform",children:[(0,l.jsx)(n.code,{children:"registerBuildPlatform"}),(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#registerbuildplatform",children:"#"})]}),"\n",(0,l.jsxs)(n.p,{children:["\u83B7\u53D6\u5728\u6267\u884C ",(0,l.jsx)(n.code,{children:"build --platform"})," \u547D\u4EE4\u65F6\u5019\u9700\u8981\u8FD0\u884C\u7684\u4EFB\u52A1\u4FE1\u606F\u3002"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-ts",children:"export const myPlugin = (): CliPlugin<ModuleTools> => ({\n  name: 'my-plugin',\n\n  setup() {\n    return {\n      registerBuildPlatform(): RegisterBuildPlatformResult {\n        // ...\n        return {\n          platform: 'doc',\n          build() {\n            // logic\n          },\n        };\n      },\n    };\n  },\n});\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u5165\u53C2\u548C\u8FD4\u56DE\u7684\u53C2\u6570\u7C7B\u578B\uFF1A"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-ts",children:"export interface RegisterBuildPlatformResult {\n  platform: string | string[];\n  build: (\n    currentPlatform: string, // \u5F53\u524D\u8FD0\u884C\u7684 platform \u6784\u5EFA\u4EFB\u52A1\n    context: { isTsProject: boolean },\n  ) => void | Promise<void>;\n}\n"})}),"\n",(0,l.jsxs)(n.h3,{id:"beforebuildplatform",children:[(0,l.jsx)(n.code,{children:"beforeBuildPlatform"}),(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#beforebuildplatform",children:"#"})]}),"\n",(0,l.jsxs)(n.p,{children:["\u5F53\u6267\u884C ",(0,l.jsx)(n.code,{children:"build --platform"})," \u547D\u4EE4\u7684\u65F6\u5019\uFF0C\u4F1A\u89E6\u53D1\u6240\u6709\u5DF2\u6CE8\u518C\u7684\u6784\u5EFA\u4EFB\u52A1\u3002",(0,l.jsx)(n.code,{children:"beforeBuildPlatform"})," \u4F1A\u5728\u6267\u884C\u6574\u4F53\u7684\u6784\u5EFA\u4EFB\u52A1\u4E4B\u524D\u89E6\u53D1\u3002"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-ts",children:"export const myPlugin = (): CliPlugin<ModuleTools> => ({\n  name: 'my-plugin',\n\n  setup() {\n    return {\n      beforeBuildPlatform(platforms: RegisterBuildPlatformResult[]): void {\n        console.info(`have ${platforms.length} platform tasks`);\n      },\n    };\n  },\n});\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u5165\u53C2\u548C\u8FD4\u56DE\u7684\u53C2\u6570\u7C7B\u578B\uFF1A"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-ts",children:"export interface RegisterBuildPlatformResult {\n  platform: string | string[];\n  build: (\n    currentPlatform: string, // \u5F53\u524D\u8FD0\u884C\u7684 platform \u6784\u5EFA\u4EFB\u52A1\n    context: { isTsProject: boolean },\n  ) => void | Promise<void>;\n}\n"})}),"\n",(0,l.jsxs)(n.h3,{id:"buildplatform",children:[(0,l.jsx)(n.code,{children:"buildPlatform"}),(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#buildplatform",children:"#"})]}),"\n",(0,l.jsxs)(n.p,{children:["\u5F53\u6267\u884C ",(0,l.jsx)(n.code,{children:"build --platform"})," \u547D\u4EE4\u7684\u65F6\u5019\uFF0C\u4F1A\u89E6\u53D1\u6240\u6709\u5DF2\u6CE8\u518C\u7684\u6784\u5EFA\u4EFB\u52A1\u3002",(0,l.jsx)(n.code,{children:"buildPlatform"})," \u4F1A\u5728\u6BCF\u4E2A\u6784\u5EFA\u4EFB\u52A1\u6267\u884C\u4E4B\u524D\u89E6\u53D1\u3002"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-ts",children:"export const myPlugin = (): CliPlugin<ModuleTools> => ({\n  name: 'my-plugin',\n\n  setup() {\n    return {\n      buildPlatform({ platform }: Options): void {\n        console.info(`current task is ${platform}`);\n      },\n    };\n  },\n});\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u5165\u53C2\u548C\u8FD4\u56DE\u7684\u53C2\u6570\u7C7B\u578B\uFF1A"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-ts",children:"export interface Options {\n  platform: string;\n}\n"})}),"\n",(0,l.jsxs)(n.h3,{id:"afterbuildplatform",children:[(0,l.jsx)(n.code,{children:"afterBuildPlatform"}),(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#afterbuildplatform",children:"#"})]}),"\n",(0,l.jsxs)(n.p,{children:["\u5F53\u6267\u884C ",(0,l.jsx)(n.code,{children:"build --platform"})," \u547D\u4EE4\u7684\u65F6\u5019\uFF0C\u4F1A\u89E6\u53D1\u6240\u6709\u5DF2\u6CE8\u518C\u7684\u6784\u5EFA\u4EFB\u52A1\u3002",(0,l.jsx)(n.code,{children:"afterBuildPlatform"})," \u4F1A\u5728\u6574\u4F53 platform \u6784\u5EFA\u4EFB\u52A1\u7ED3\u675F\u540E\u89E6\u53D1\u3002"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-ts",children:"export const myPlugin = (): CliPlugin<ModuleTools> => ({\n  name: 'my-plugin',\n\n  setup() {\n    return {\n      afterBuildPlatform(result: BuildPlatformResult): void {\n        if (result.status === 'success') {\n          console.info(`all platform build task success`);\n        } else {\n          console.error(result.message);\n        }\n      },\n    };\n  },\n});\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u5165\u53C2\u548C\u8FD4\u56DE\u7684\u53C2\u6570\u7C7B\u578B\uFF1A"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-ts",children:"export interface BuildPlatformResult {\n  status: 'success' | 'fail';\n  message: string | Error | null;\n}\n"})}),"\n",(0,l.jsxs)(n.h2,{id:"\u8C03\u8BD5\u94A9\u5B50",children:["\u8C03\u8BD5\u94A9\u5B50",(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u8C03\u8BD5\u94A9\u5B50",children:"#"})]}),"\n",(0,l.jsxs)(n.p,{children:["\u5728\u6267\u884C ",(0,l.jsx)(n.code,{children:"dev"})," \u547D\u4EE4\u7684\u65F6\u5019\uFF0C\u4F1A\u6309\u7167\u987A\u5E8F\u89E6\u53D1\u4EE5\u4E0B Hooks\uFF1A"]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"registerDev"}),": \u5728\u83B7\u53D6\u8C03\u8BD5\u529F\u80FD\u4FE1\u606F\u7684\u65F6\u5019\u89E6\u53D1\u3002"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"beforeDev"}),": \u5F00\u59CB\u6267\u884C\u8C03\u8BD5\u6574\u4F53\u6D41\u7A0B\u4E4B\u524D\u89E6\u53D1\u3002"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"beforeDevMenu"}),": \u51FA\u73B0\u8C03\u8BD5\u5217\u8868/\u83DC\u5355\u4E4B\u524D\u89E6\u53D1\u3002"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"afterDevMenu"}),": \u9009\u62E9\u8C03\u8BD5\u5217\u8868/\u83DC\u5355\u9009\u9879\u540E\u89E6\u53D1\u3002"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"beforeDevTask"}),": \u6267\u884C\u8C03\u8BD5\u4EFB\u52A1\u4E4B\u524D\u89E6\u53D1\u3002"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"afterDev"}),": \u6267\u884C dev \u6574\u4F53\u6D41\u7A0B\u6700\u540E\u89E6\u53D1\u3002"]}),"\n"]}),"\n",(0,l.jsxs)(n.h3,{id:"registerdev",children:[(0,l.jsx)(n.code,{children:"registerDev"}),(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#registerdev",children:"#"})]}),"\n",(0,l.jsx)(n.p,{children:"\u6CE8\u518C\u8C03\u8BD5\u5DE5\u5177\u76F8\u5173\u7684\u6570\u636E\u3002\u4E3B\u8981\u5305\u542B\uFF1A"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u8C03\u8BD5\u5DE5\u5177\u7684\u540D\u79F0"}),"\n",(0,l.jsx)(n.li,{children:"\u663E\u793A\u5728\u83DC\u5355\u5217\u8868\u4E2D\u7684\u9879\u76EE\u540D\u79F0\u4EE5\u53CA\u5BF9\u5E94\u7684\u503C\u3002"}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"dev"})," \u5B50\u547D\u4EE4\u7684\u5B9A\u4E49\u3002"]}),"\n",(0,l.jsx)(n.li,{children:"\u662F\u5426\u5728\u8FD0\u884C\u8C03\u8BD5\u4EFB\u52A1\u4E4B\u524D\u6267\u884C\u6E90\u7801\u6784\u5EFA"}),"\n",(0,l.jsx)(n.li,{children:"\u6267\u884C\u8C03\u8BD5\u4EFB\u52A1\u7684\u51FD\u6570\u3002"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-ts",children:"export const myPlugin = (): CliPlugin<ModuleTools> => ({\n  name: 'my-plugin',\n\n  setup() {\n    return {\n      registerDev() {\n        return {\n          // \u8C03\u8BD5\u5DE5\u5177\u540D\u79F0\n          name: 'storybook',\n          // \u83DC\u5355\u663E\u793A\u5185\u5BB9\n          menuItem: {\n            name: 'Storybook',\n            value: 'storybook',\n          },\n          // \u5B9A\u4E49\u7684 dev \u5B50\u547D\u4EE4\n          subCommands: ['storybook', 'story'],\n          async action() {\n            // dev logic\n          },\n        };\n      },\n    };\n  },\n});\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u5165\u53C2\u548C\u8FD4\u56DE\u7684\u53C2\u6570\u7C7B\u578B\uFF1A"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-ts",children:"export interface DevToolData {\n  name: string;\n  subCommands?: string[];\n  menuItem?: {\n    name: string;\n    value: string;\n  };\n  action: (\n    options: { port?: string },\n    context: { isTsProject?: boolean },\n  ) => void | Promise<void>;\n}\n"})}),"\n",(0,l.jsxs)(n.h3,{id:"beforedev",children:[(0,l.jsx)(n.code,{children:"beforeDev"}),(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#beforedev",children:"#"})]}),"\n",(0,l.jsx)(n.p,{children:"\u5728\u6536\u96C6\u5B8C\u6240\u6709\u8C03\u8BD5\u5DE5\u5177\u5143\u6570\u636E\u540E\uFF0C\u6267\u884C dev \u4EFB\u52A1\u4E4B\u524D\u89E6\u53D1\u3002"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-ts",children:"export const myPlugin = (): CliPlugin<ModuleTools> => ({\n  name: 'my-plugin',\n\n  setup() {\n    return {\n      beforeDev(metas: DevToolData[]) {\n        console.info(`have ${metas.length} dev tools`);\n      },\n    };\n  },\n});\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u5165\u53C2\u548C\u8FD4\u56DE\u7684\u53C2\u6570\u7C7B\u578B\uFF1A"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-ts",children:"export interface DevToolData {\n  name: string;\n  subCommands?: string[];\n  menuItem?: {\n    name: string;\n    value: string;\n  };\n  action: (\n    options: { port?: string },\n    context: { isTsProject?: boolean },\n  ) => void | Promise<void>;\n}\n"})}),"\n",(0,l.jsxs)(n.h3,{id:"beforeafterdevmenu",children:[(0,l.jsx)(n.code,{children:"(before|after)DevMenu"}),(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#beforeafterdevmenu",children:"#"})]}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"beforeDevMenu"})," \u5728\u51FA\u73B0\u8C03\u8BD5\u5217\u8868/\u83DC\u5355\u4E4B\u524D\u89E6\u53D1\u3002\u63A5\u6536 ",(0,l.jsx)(n.a,{href:"https://github.com/SBoudrias/Inquirer.js#question",target:"_blank",rel:"noopener noreferrer",children:"inquirer question"})," \u4F5C\u4E3A\u53C2\u6570\u3002\u9ED8\u8BA4\u503C\u4E3A\uFF1A"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-ts",children:"const question = [\n  {\n    name: 'choiceDevTool',\n    message: '\u9009\u62E9\u8C03\u8BD5\u5DE5\u5177',\n    type: 'list',\n    // \u6CE8\u518C\u7684\u8C03\u8BD5\u4FE1\u606F\n    choices,\n  },\n];\n"})}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"afterDevMenu"})," \u9009\u62E9\u8C03\u8BD5\u5217\u8868/\u83DC\u5355\u9009\u9879\u540E\u89E6\u53D1\u3002"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-ts",children:"export const myPlugin = (): CliPlugin<ModuleTools> => ({\n  name: 'my-plugin',\n\n  setup() {\n    return {\n      beforeDevMenu(questions) {\n        questions[0].message += '!';\n        return questions; // required\n      },\n      afterDevMenu(options: Options) {\n        console.info(`choise ${options.result.choiceDevTool} dev tools`);\n      },\n    };\n  },\n});\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u5165\u53C2\u548C\u8FD4\u56DE\u7684\u53C2\u6570\u7C7B\u578B\uFF1A"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-ts",children:"export type { QuestionCollection } from 'inquirer';\n\nexport interface Options {\n  result: PromptResult;\n  devTools: DevToolData[];\n}\n\nexport type PromptResult = { choiceDevTool: string };\nexport interface DevToolData {\n  name: string;\n  subCommands?: string[];\n  menuItem?: {\n    name: string;\n    value: string;\n  };\n  action: (\n    options: { port?: string },\n    context: { isTsProject?: boolean },\n  ) => void | Promise<void>;\n}\n"})}),"\n",(0,l.jsxs)(n.h3,{id:"beforedevtask",children:[(0,l.jsx)(n.code,{children:"beforeDevTask"}),(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#beforedevtask",children:"#"})]}),"\n",(0,l.jsx)(n.p,{children:"\u6267\u884C\u8C03\u8BD5\u4EFB\u52A1\u4E4B\u524D\u89E6\u53D1\u3002"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-ts",children:"export const myPlugin = (): CliPlugin<ModuleTools> => ({\n  name: 'my-plugin',\n\n  setup() {\n    return {\n      beforeDevTask(currentDevData: DevToolData) {\n        console.info(`${currentDevData.name} running`);\n      },\n    };\n  },\n});\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u5165\u53C2\u548C\u8FD4\u56DE\u7684\u53C2\u6570\u7C7B\u578B\uFF1A"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-ts",children:"export interface DevToolData {\n  name: string;\n  subCommands?: string[];\n  menuItem?: {\n    name: string;\n    value: string;\n  };\n  action: (\n    options: { port?: string },\n    context: { isTsProject?: boolean },\n  ) => void | Promise<void>;\n}\n"})}),"\n",(0,l.jsxs)(n.h3,{id:"afterdev",children:[(0,l.jsx)(n.code,{children:"afterDev"}),(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#afterdev",children:"#"})]}),"\n",(0,l.jsx)(n.p,{children:"\u5728\u4E2D\u65AD\u8C03\u8BD5\u4EFB\u52A1\u8FDB\u7A0B\u65F6\u89E6\u53D1\u3002"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-ts",children:"export const myPlugin = (): CliPlugin<ModuleTools> => ({\n  name: 'my-plugin',\n\n  setup() {\n    return {\n      afterDev() {\n        console.info(`exit!`);\n      },\n    };\n  },\n});\n"})})]})}function d(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,s.ah)(),e.components);return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(i,{...e})}):i(e)}n.default=d,d.__RSPRESS_PAGE_META={},d.__RSPRESS_PAGE_META["zh%2Fapi%2Fplugin-api%2Fplugin-hooks.md"]={toc:[{text:"\u914D\u7F6E\u94A9\u5B50",id:"\u914D\u7F6E\u94A9\u5B50",depth:2},{text:"`resolveModuleUserConfig`",id:"resolvemoduleuserconfig",depth:3},{text:"\u6784\u5EFA\u94A9\u5B50",id:"\u6784\u5EFA\u94A9\u5B50",depth:2},{text:"`beforeBuild`",id:"beforebuild",depth:3},{text:"`beforeBuildTask`",id:"beforebuildtask",depth:3},{text:"`afterBuildTask`",id:"afterbuildtask",depth:3},{text:"`afterBuild`",id:"afterbuild",depth:3},{text:"buildPlatform \u94A9\u5B50",id:"buildplatform-\u94A9\u5B50",depth:2},{text:"`registerBuildPlatform`",id:"registerbuildplatform",depth:3},{text:"`beforeBuildPlatform`",id:"beforebuildplatform",depth:3},{text:"`buildPlatform`",id:"buildplatform",depth:3},{text:"`afterBuildPlatform`",id:"afterbuildplatform",depth:3},{text:"\u8C03\u8BD5\u94A9\u5B50",id:"\u8C03\u8BD5\u94A9\u5B50",depth:2},{text:"`registerDev`",id:"registerdev",depth:3},{text:"`beforeDev`",id:"beforedev",depth:3},{text:"`(before|after)DevMenu`",id:"beforeafterdevmenu",depth:3},{text:"`beforeDevTask`",id:"beforedevtask",depth:3},{text:"`afterDev`",id:"afterdev",depth:3}],title:"Plugin Hooks",frontmatter:{}}}}]);