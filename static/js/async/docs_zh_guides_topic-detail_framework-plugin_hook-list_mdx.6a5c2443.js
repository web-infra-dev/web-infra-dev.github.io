(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_guides_topic-detail_framework-plugin_hook-list_mdx"],{41043:function(n,e,r){"use strict";r.r(e),r.d(e,{default:function(){return t}});var i,s=r("15169"),l=r("43932"),o=r("9880"),d=r("23169");function c(n){var e=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",h3:"h3",code:"code",ul:"ul",li:"li",pre:"pre",ol:"ol",div:"div"},(0,d.useMDXComponents)(),n.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(e.h1,{id:"hook-列表",children:["Hook 列表",(0,o.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#hook-列表",children:"#"})]}),"\n",(0,o.jsx)(e.p,{children:"Modern.js 工程体系中包含三类插件：CLI、Runtime、Server，每一类插件可以使用不同的 Hooks。"}),"\n",(0,o.jsx)(e.p,{children:"在本章节中，罗列了所有可用的 Hooks，你可以根据自己的需求来使用对应的 Hook。"}),"\n",(0,o.jsxs)(e.h2,{id:"cli-common-hooks",children:["CLI Common Hooks",(0,o.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#cli-common-hooks",children:"#"})]}),"\n",(0,o.jsx)(e.p,{children:"以下是通用的 CLI Hooks，可以在 Modern.js Framework 以及 Modern.js Module 中使用。"}),"\n",(0,o.jsxs)(e.h3,{id:"beforeconfig",children:[(0,o.jsx)(e.code,{children:"beforeConfig"}),(0,o.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#beforeconfig",children:"#"})]}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:"功能：运行收集配置前的任务"}),"\n",(0,o.jsx)(e.li,{children:"执行阶段：收集配置前"}),"\n",(0,o.jsxs)(e.li,{children:["Hook 模型：",(0,o.jsx)(e.code,{children:"AsyncWorkflow"})]}),"\n",(0,o.jsxs)(e.li,{children:["类型：",(0,o.jsx)(e.code,{children:"AsyncWorkflow<void, void>"})]}),"\n",(0,o.jsx)(e.li,{children:"使用示例："}),"\n"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-ts",children:"import type { CliPlugin } from '@modern-js/core';\n\nexport const myPlugin = (): CliPlugin => ({\n  setup(api) {\n    return {\n      beforeConfig: () => {\n        // do something\n      },\n    };\n  },\n});\n"})}),"\n",(0,o.jsxs)(e.h3,{id:"config",children:[(0,o.jsx)(e.code,{children:"config"}),(0,o.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#config",children:"#"})]}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:"功能：收集配置"}),"\n",(0,o.jsxs)(e.li,{children:["执行阶段：解析完 ",(0,o.jsx)(e.code,{children:"modern.config.ts"})," 中的配置之后"]}),"\n",(0,o.jsxs)(e.li,{children:["Hook 模型：",(0,o.jsx)(e.code,{children:"ParallelWorkflow"})]}),"\n",(0,o.jsxs)(e.li,{children:["类型：",(0,o.jsx)(e.code,{children:"ParallelWorkflow<void, unknown>"})]}),"\n",(0,o.jsx)(e.li,{children:"使用示例："}),"\n"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-ts",children:"import type { CliPlugin } from '@modern-js/core';\n\nexport const myPlugin = (): CliPlugin => ({\n  setup(api) {\n    return {\n      config: () => {\n        return {\n          /** some config */\n        };\n      },\n    };\n  },\n});\n"})}),"\n",(0,o.jsxs)(e.p,{children:["如果你需要设置 Modern.js Framework 的配置，请使用 ",(0,o.jsx)(e.code,{children:"@modern-js/app-tools"})," 导出的 ",(0,o.jsx)(e.code,{children:"CliPlugin<AppTools>"})," 类型："]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-ts",children:"import type { CliPlugin, AppTools } from '@modern-js/app-tools';\n\nexport const myPlugin = (): CliPlugin => ({\n  setup(api) {\n    return {\n      config: () => {\n        return {\n          output: {\n            polyfill: 'usage',\n          },\n        };\n      },\n    };\n  },\n});\n"})}),"\n",(0,o.jsxs)(e.p,{children:["插件在 ",(0,o.jsx)(e.code,{children:"config"})," hook 中返回的配置信息，会被 Modern.js 统一收集与合并，最终生成一份 ",(0,o.jsx)(e.code,{children:"NormalizedConfig"}),"。在进行配置合并时，优先级由高到低依次为："]}),"\n",(0,o.jsxs)(e.ol,{children:["\n",(0,o.jsxs)(e.li,{children:["用户在 ",(0,o.jsx)(e.code,{children:"modern.config.*"})," 文件里定义的配置"]}),"\n",(0,o.jsxs)(e.li,{children:["插件通过 ",(0,o.jsx)(e.code,{children:"config"})," hook 定义的配置"]}),"\n",(0,o.jsx)(e.li,{children:"Modern.js 默认配置。"}),"\n"]}),"\n",(0,o.jsxs)(e.h3,{id:"validateschema",children:[(0,o.jsx)(e.code,{children:"validateSchema"}),(0,o.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#validateschema",children:"#"})]}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:["功能：收集各个插件中配置的用来校验用户配置的 ",(0,o.jsx)(e.a,{href:"https://json-schema.org/",target:"_blank",rel:"noopener noreferrer",children:"JSON Schema"})]}),"\n",(0,o.jsxs)(e.li,{children:["执行阶段：",(0,o.jsx)(e.code,{children:"config"})," Hook 运行完成之后。"]}),"\n",(0,o.jsxs)(e.li,{children:["Hook 模型：",(0,o.jsx)(e.code,{children:"ParallelWorkflow"})]}),"\n",(0,o.jsxs)(e.li,{children:["类型：",(0,o.jsx)(e.code,{children:"ParallelWorkflow<void, unknown>"})]}),"\n",(0,o.jsx)(e.li,{children:"使用示例："}),"\n"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-ts",children:"import type { CliPlugin } from '@modern-js/core';\n\nexport const myPlugin = (): CliPlugin => ({\n  setup(api) {\n    return {\n      validateSchema: () => {\n        return {\n          // target is field\n          target: 'foo',\n          schema: {\n            type: 'string',\n          },\n        };\n      },\n    };\n  },\n});\n"})}),"\n",(0,o.jsxs)(e.p,{children:["这里返回的 JSON Schema 会用来校验 ",(0,o.jsx)(e.code,{children:"modern.config.js"})," 中的配置信息。"]}),"\n",(0,o.jsx)(e.p,{children:"比如这里返回："}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-json",children:'{\n  "target": "foo",\n  "schema": {\n    "type": "string"\n  }\n}\n'})}),"\n",(0,o.jsxs)(e.p,{children:["就可以在 ",(0,o.jsx)(e.code,{children:"modern.config.ts"})," 中这样配置："]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"export const myPlugin = defineConfig({\n  foo: 'test',\n});\n"})}),"\n",(0,o.jsx)(e.p,{children:"如果是别的类型，校验就不通过会报错，比如这样："}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"export const myPlugin = defineConfig({\n  foo: {},\n});\n"})}),"\n",(0,o.jsx)(e.p,{children:"就会报错："}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{children:'$ modern dev\n  1 | {\n> 2 |   "foo": {},\n    |   ^^^^^  Property foo is not expected to be here\n'})}),"\n",(0,o.jsxs)(e.h3,{id:"prepare",children:[(0,o.jsx)(e.code,{children:"prepare"}),(0,o.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#prepare",children:"#"})]}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:"功能：运行主流程的前置准备流程"}),"\n",(0,o.jsx)(e.li,{children:"执行阶段：校验完配置之后"}),"\n",(0,o.jsxs)(e.li,{children:["Hook 模型：",(0,o.jsx)(e.code,{children:"AsyncWorkflow"})]}),"\n",(0,o.jsxs)(e.li,{children:["类型：",(0,o.jsx)(e.code,{children:"AsyncWorkflow<void, void>"})]}),"\n",(0,o.jsx)(e.li,{children:"使用示例："}),"\n"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-ts",children:"import type { CliPlugin } from '@modern-js/core';\n\nexport const myPlugin = (): CliPlugin => ({\n  setup(api) {\n    return {\n      prepare: () => {\n        // do something\n      },\n    };\n  },\n});\n"})}),"\n",(0,o.jsxs)(e.h3,{id:"afterprepare",children:[(0,o.jsx)(e.code,{children:"afterPrepare"}),(0,o.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#afterprepare",children:"#"})]}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:"功能：运行前置准备流程的之后的任务"}),"\n",(0,o.jsx)(e.li,{children:"执行阶段：前置准备流程之后"}),"\n",(0,o.jsxs)(e.li,{children:["Hook 模型：",(0,o.jsx)(e.code,{children:"AsyncWorkflow"})]}),"\n",(0,o.jsxs)(e.li,{children:["类型：",(0,o.jsx)(e.code,{children:"AsyncWorkflow<void, void>"})]}),"\n",(0,o.jsx)(e.li,{children:"使用示例："}),"\n"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-ts",children:"import type { CliPlugin } from '@modern-js/core';\n\nexport const myPlugin = (): CliPlugin => ({\n  setup(api) {\n    return {\n      afterPrepare: () => {\n        // do something\n      },\n    };\n  },\n});\n"})}),"\n",(0,o.jsxs)(e.h3,{id:"commands",children:[(0,o.jsx)(e.code,{children:"commands"}),(0,o.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#commands",children:"#"})]}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:"功能：为 commander 添加新的 CLI 命令"}),"\n",(0,o.jsxs)(e.li,{children:["执行阶段：",(0,o.jsx)(e.code,{children:"prepare"})," Hook 运行完成之后"]}),"\n",(0,o.jsxs)(e.li,{children:["Hook 模型：",(0,o.jsx)(e.code,{children:"AsyncWorkflow"})]}),"\n",(0,o.jsxs)(e.li,{children:["类型：",(0,o.jsx)(e.code,{children:"AsyncWorkflow<{ program: Command; }, void>"})]}),"\n",(0,o.jsx)(e.li,{children:"使用示例："}),"\n"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-ts",children:"import type { CliPlugin } from '@modern-js/core';\n\nexport const myPlugin = (): CliPlugin => ({\n  setup(api) {\n    return {\n      commands: ({ program }) => {\n        program.command('foo').action(async () => {\n          // do something\n          console.log('foo');\n        });\n      },\n    };\n  },\n});\n"})}),"\n",(0,o.jsxs)(e.p,{children:["将上面这个插件添加到 ",(0,o.jsx)(e.code,{children:"modern.config.ts"})," 中："]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import myPlugin from './config/plugin/myPlugin';\n\nexport const myPlugin = defineConfig({\n  plugins: [myPlugin()],\n});\n"})}),"\n",(0,o.jsxs)(e.p,{children:["运行 ",(0,o.jsx)(e.code,{children:"modern foo"})," 就可以看到控制台输出："]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-sh",children:"$ modern foo\nfoo\n"})}),"\n",(0,o.jsxs)(e.h3,{id:"beforeexit",children:[(0,o.jsx)(e.code,{children:"beforeExit"}),(0,o.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#beforeexit",children:"#"})]}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:"功能：在退出进程前，重置一些文件状态"}),"\n",(0,o.jsx)(e.li,{children:"执行阶段：进程退出之前"}),"\n",(0,o.jsxs)(e.li,{children:["Hook 模型：",(0,o.jsx)(e.code,{children:"Workflow"})]}),"\n",(0,o.jsxs)(e.li,{children:["类型：",(0,o.jsx)(e.code,{children:"Workflow<void, void>"})]}),"\n",(0,o.jsx)(e.li,{children:"使用示例："}),"\n"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-ts",children:"import type { CliPlugin } from '@modern-js/core';\n\nexport const myPlugin = (): CliPlugin => ({\n  setup(api) {\n    return {\n      beforeExit: () => {\n        // do something\n      },\n    };\n  },\n});\n"})}),"\n",(0,o.jsxs)(e.div,{className:"modern-directive tip",children:[(0,o.jsx)(e.div,{className:"modern-directive-title",children:"TIP"}),(0,o.jsx)(e.div,{className:"modern-directive-content",children:(0,o.jsxs)(e.p,{children:["由于 Node.js 中退出进程时的回调函数是同步的，所以 ",(0,o.jsx)(e.code,{children:"beforeExit"})," Hook 的类型是 ",(0,o.jsx)(e.code,{children:"Workflow"}),"，不能执行异步操作。\n"]})})]}),"\n",(0,o.jsxs)(e.h2,{id:"cli-framework-hooks",children:["CLI Framework Hooks",(0,o.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#cli-framework-hooks",children:"#"})]}),"\n",(0,o.jsx)(e.p,{children:"以下是框架的 CLI Hooks，只能在 Modern.js Framework 中使用，不能在 Modern.js Module 中使用。"}),"\n",(0,o.jsxs)(e.p,{children:["你需要从 ",(0,o.jsx)(e.code,{children:"@modern-js/app-tools"})," 中导入 ",(0,o.jsx)(e.code,{children:"CliPlugin"})," 和 ",(0,o.jsx)(e.code,{children:"AppTools"})," 类型，以获得准确的 Hooks 类型提示。"]}),"\n",(0,o.jsxs)(e.h3,{id:"beforedev",children:[(0,o.jsx)(e.code,{children:"beforeDev"}),(0,o.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#beforedev",children:"#"})]}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:"功能：运行 dev 主流程的之前的任务"}),"\n",(0,o.jsxs)(e.li,{children:["执行阶段：",(0,o.jsx)(e.code,{children:"dev"})," 命令运行时，项目开始启动前执行"]}),"\n",(0,o.jsxs)(e.li,{children:["Hook 模型：",(0,o.jsx)(e.code,{children:"AsyncWorkflow"})]}),"\n",(0,o.jsxs)(e.li,{children:["类型：",(0,o.jsx)(e.code,{children:"AsyncWorkflow<void, unknown>"})]}),"\n",(0,o.jsx)(e.li,{children:"使用示例："}),"\n"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-ts",children:"import type { CliPlugin, AppTools } from '@modern-js/app-tools';\n\nexport const myPlugin = (): CliPlugin<AppTools> => ({\n  setup(api) {\n    return {\n      beforeDev: () => {\n        // do something\n      },\n    };\n  },\n});\n"})}),"\n",(0,o.jsxs)(e.h3,{id:"afterdev",children:[(0,o.jsx)(e.code,{children:"afterDev"}),(0,o.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#afterdev",children:"#"})]}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:"功能：运行 dev 主流程的之后的任务"}),"\n",(0,o.jsxs)(e.li,{children:["执行阶段：运行 ",(0,o.jsx)(e.code,{children:"dev"})," 命令时，每一次编译完成后执行"]}),"\n",(0,o.jsxs)(e.li,{children:["Hook 模型：",(0,o.jsx)(e.code,{children:"AsyncWorkflow"})]}),"\n",(0,o.jsxs)(e.li,{children:["类型：",(0,o.jsx)(e.code,{children:"AsyncWorkflow<{ isFirstCompile: boolean }, unknown>"})]}),"\n",(0,o.jsx)(e.li,{children:"使用示例："}),"\n"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-ts",children:"import type { CliPlugin, AppTools } from '@modern-js/app-tools';\n\nexport const myPlugin = (): CliPlugin<AppTools> => ({\n  setup(api) {\n    return {\n      afterDev: () => {\n        // do something\n      },\n    };\n  },\n});\n"})}),"\n",(0,o.jsxs)(e.p,{children:[(0,o.jsx)(e.code,{children:"afterDev"})," 会在每一次编译完成后执行，你可以通过 ",(0,o.jsx)(e.code,{children:"isFirstCompile"})," 参数来判断是否为首次编译："]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-ts",children:"import type { CliPlugin, AppTools } from '@modern-js/app-tools';\n\nexport const myPlugin = (): CliPlugin<AppTools> => ({\n  setup(api) {\n    return {\n      afterDev: ({ isFirstCompile }) => {\n        if (isFirstCompile) {\n          // do something\n        }\n      },\n    };\n  },\n});\n"})}),"\n",(0,o.jsxs)(e.h3,{id:"beforebuild",children:[(0,o.jsx)(e.code,{children:"beforeBuild"}),(0,o.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#beforebuild",children:"#"})]}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:["功能：在执行生产环境构建前触发的回调函数，你可以通过 ",(0,o.jsx)(e.code,{children:"bundlerConfigs"})," 参数获取到底层打包工具的最终配置数组。","\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:"如果当前打包工具为 webpack，则获取到的是 webpack 配置数组。"}),"\n",(0,o.jsx)(e.li,{children:"如果当前打包工具为 Rspack，则获取到的是 Rspack 配置数组。"}),"\n",(0,o.jsx)(e.li,{children:"配置数组中可能包含一份或多份配置，这取决于你是否开启了 SSR 等功能。"}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(e.li,{children:["执行阶段：运行 ",(0,o.jsx)(e.code,{children:"build"})," 命令后，在开始构建前执行"]}),"\n",(0,o.jsxs)(e.li,{children:["Hook 模型：",(0,o.jsx)(e.code,{children:"AsyncWorkflow"})]}),"\n",(0,o.jsx)(e.li,{children:"类型："}),"\n"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-ts",children:"type BeforeBuild = AsyncWorkflow<{\n  bundlerConfigs: WebpackConfig[] | RspackConfig[];\n}>;\n"})}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:"使用示例："}),"\n"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-ts",children:"import type { CliPlugin, AppTools } from '@modern-js/app-tools';\n\nexport const myPlugin = (): CliPlugin<AppTools> => ({\n  setup(api) {\n    return {\n      beforeBuild: ({ bundlerConfigs }) => {\n        console.log('Before build.');\n        console.log(bundlerConfigs);\n      },\n    };\n  },\n});\n"})}),"\n",(0,o.jsxs)(e.h3,{id:"afterbuild",children:[(0,o.jsx)(e.code,{children:"afterBuild"}),(0,o.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#afterbuild",children:"#"})]}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:["功能：在执行生产环境构建后触发的回调函数，你可以通过 ",(0,o.jsx)(e.code,{children:"stats"})," 参数获取到构建结果信息。","\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:"如果当前打包工具为 webpack，则获取到的是 webpack Stats。"}),"\n",(0,o.jsx)(e.li,{children:"如果当前打包工具为 Rspack，则获取到的是 Rspack Stats。"}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(e.li,{children:["执行阶段：运行 ",(0,o.jsx)(e.code,{children:"build"})," 命令运行后，在项目构建完成之后执行"]}),"\n",(0,o.jsxs)(e.li,{children:["Hook 模型：",(0,o.jsx)(e.code,{children:"AsyncWorkflow"})]}),"\n",(0,o.jsx)(e.li,{children:"类型："}),"\n"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-ts",children:"type AfterBuild = AsyncWorkflow<{\n  stats?: Stats | MultiStats;\n}>;\n"})}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:"使用示例："}),"\n"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-ts",children:"import type { CliPlugin, AppTools } from '@modern-js/app-tools';\n\nexport const myPlugin = (): CliPlugin<AppTools> => ({\n  setup(api) {\n    return {\n      afterBuild: ({ stats }) => {\n        console.log('After build.');\n        console.log(stats);\n      },\n    };\n  },\n});\n"})}),"\n",(0,o.jsxs)(e.h3,{id:"beforecreatecompiler",children:[(0,o.jsx)(e.code,{children:"beforeCreateCompiler"}),(0,o.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#beforecreatecompiler",children:"#"})]}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:["功能：在创建底层 Compiler 实例前触发的回调函数，并且你可以通过 ",(0,o.jsx)(e.code,{children:"bundlerConfigs"})," 参数获取到底层打包工具的最终配置数组：","\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:"如果当前打包工具为 webpack，则获取到的是 webpack 配置数组。"}),"\n",(0,o.jsx)(e.li,{children:"如果当前打包工具为 Rspack，则获取到的是 Rspack 配置数组。"}),"\n",(0,o.jsx)(e.li,{children:"配置数组中可能包含一份或多份配置，这取决于你是否开启了 SSR 等功能。"}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(e.li,{children:"执行阶段：在执行 dev 或 build 命令时，创建 Compiler 实例之前执行"}),"\n",(0,o.jsxs)(e.li,{children:["Hook 模型：",(0,o.jsx)(e.code,{children:"AsyncWorkflow"})]}),"\n",(0,o.jsx)(e.li,{children:"类型："}),"\n"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-ts",children:"type BeforeCreateCompiler = AsyncWorkflow<\n  { bundlerConfigs: Configuration[] },\n  unknown\n>;\n"})}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:"使用示例："}),"\n"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-ts",children:"import type { CliPlugin, AppTools } from '@modern-js/app-tools';\n\nexport const myPlugin = (): CliPlugin<AppTools> => ({\n  setup(api) {\n    return {\n      beforeCreateCompiler: ({ bundlerConfigs }) => {\n        console.log('Before create compiler.');\n        console.log(bundlerConfigs);\n      },\n    };\n  },\n});\n"})}),"\n",(0,o.jsxs)(e.h3,{id:"aftercreatecompiler",children:[(0,o.jsx)(e.code,{children:"afterCreateCompiler"}),(0,o.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#aftercreatecompiler",children:"#"})]}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:["功能：在创建 Compiler 实例后、执行构建前触发的回调函数，并且你可以通过 ",(0,o.jsx)(e.code,{children:"compiler"})," 参数获取到 Compiler 实例对象：","\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:"如果当前打包工具为 webpack，则获取到的是 webpack Compiler 对象。"}),"\n",(0,o.jsx)(e.li,{children:"如果当前打包工具为 Rspack，则获取到的是 Rspack Compiler 对象。"}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(e.li,{children:"执行阶段：创建 Compiler 对象之后执行"}),"\n",(0,o.jsxs)(e.li,{children:["Hook 模型：",(0,o.jsx)(e.code,{children:"AsyncWorkflow"})]}),"\n",(0,o.jsx)(e.li,{children:"类型："}),"\n"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-ts",children:"type AfterCreateCompiler = AsyncWorkflow<\n  { compiler: Compiler | MultiCompiler | undefined },\n  unknown\n>;\n"})}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:"使用示例："}),"\n"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-ts",children:"import type { CliPlugin, AppTools } from '@modern-js/app-tools';\n\nexport const myPlugin = (): CliPlugin<AppTools> => ({\n  setup(api) {\n    return {\n      afterCreateCompiler: ({ compiler }) => {\n        console.log('After create compiler.');\n        console.log(compiler);\n      },\n    };\n  },\n});\n"})}),"\n",(0,o.jsxs)(e.h3,{id:"beforeprintinstructions",children:[(0,o.jsx)(e.code,{children:"beforePrintInstructions"}),(0,o.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#beforeprintinstructions",children:"#"})]}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:"功能：在中间件函数中可以拿到即将打印的日志信息，并对其进行修改"}),"\n",(0,o.jsx)(e.li,{children:"执行阶段：打印日志信息之前执行"}),"\n",(0,o.jsxs)(e.li,{children:["Hook 模型：",(0,o.jsx)(e.code,{children:"AsyncWaterfall"})]}),"\n",(0,o.jsxs)(e.li,{children:["类型：",(0,o.jsx)(e.code,{children:"AsyncWaterfall<{ instructions: string }>"})]}),"\n",(0,o.jsx)(e.li,{children:"使用示例："}),"\n"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-ts",children:"import type { CliPlugin, AppTools } from '@modern-js/app-tools';\n\nexport const myPlugin = (): CliPlugin<AppTools> => ({\n  setup(api) {\n    return {\n      beforePrintInstructions: ({ instructions }) => {\n        // do something\n        return {\n          instructions: [...instructions, 'some new message'],\n        };\n      },\n    };\n  },\n});\n"})}),"\n",(0,o.jsxs)(e.h3,{id:"modifyentryimports",children:[(0,o.jsx)(e.code,{children:"modifyEntryImports"}),(0,o.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#modifyentryimports",children:"#"})]}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:["功能：用于修改、添加生成入口文件中的 ",(0,o.jsx)(e.code,{children:"import"})," 语句"]}),"\n",(0,o.jsxs)(e.li,{children:["执行阶段：生成入口文件之前，",(0,o.jsx)(e.a,{href:"#prepare",children:(0,o.jsx)(e.code,{children:"prepare"})})," 阶段触发"]}),"\n",(0,o.jsxs)(e.li,{children:["Hook 模型：",(0,o.jsx)(e.code,{children:"AsyncWaterfall"})]}),"\n",(0,o.jsxs)(e.li,{children:["类型：",(0,o.jsx)(e.code,{children:"AsyncWaterfall<{ imports: ImportStatement[]; entrypoint: Entrypoint; }>"})]}),"\n",(0,o.jsx)(e.li,{children:"使用示例："}),"\n"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-ts",children:"import type { CliPlugin, AppTools } from '@modern-js/app-tools';\n\nexport const myPlugin = (): CliPlugin<AppTools> => ({\n  setup(api) {\n    return {\n      modifyEntryImports({ entrypoint, imports }) {\n        // 添加 `import React from 'React'`\n        imports.push({\n          value: 'react',\n          specifiers: [\n            {\n              imported: 'unmountComponentAtNode',\n            },\n          ],\n        });\n\n        return { entrypoint, imports };\n      },\n    };\n  },\n});\n"})}),"\n",(0,o.jsxs)(e.h3,{id:"modifyentryexport",children:[(0,o.jsx)(e.code,{children:"modifyEntryExport"}),(0,o.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#modifyentryexport",children:"#"})]}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:["功能：用于修改生成入口文件中的 ",(0,o.jsx)(e.code,{children:"export"})," 语句"]}),"\n",(0,o.jsxs)(e.li,{children:["执行阶段：生成入口文件之前，",(0,o.jsx)(e.a,{href:"#prepare",children:(0,o.jsx)(e.code,{children:"prepare"})})," 阶段触发"]}),"\n",(0,o.jsxs)(e.li,{children:["Hook 模型：",(0,o.jsx)(e.code,{children:"AsyncWaterfall"})]}),"\n",(0,o.jsxs)(e.li,{children:["类型：",(0,o.jsx)(e.code,{children:"AsyncWaterfall<{ entrypoint: Entrypoint; exportStatement: string; }>"})]}),"\n",(0,o.jsx)(e.li,{children:"使用示例："}),"\n"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-ts",children:"import type { CliPlugin, AppTools } from '@modern-js/app-tools';\n\nexport const myPlugin = (): CliPlugin<AppTools> => ({\n  setup(api) {\n    return {\n      modifyEntryExport({ entrypoint, exportStatement }) {\n        return {\n          entrypoint,\n          exportStatement: [`export const foo = 'test'`, exportStatement].join(\n            '\\n',\n          ),\n        };\n      },\n    };\n  },\n});\n"})}),"\n",(0,o.jsxs)(e.h3,{id:"modifyentryruntimeplugins",children:[(0,o.jsx)(e.code,{children:"modifyEntryRuntimePlugins"}),(0,o.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#modifyentryruntimeplugins",children:"#"})]}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:["功能：用于添加、修改生成入口文件中的 ",(0,o.jsx)(e.a,{href:"#Runtime",children:"Runtime 插件"})]}),"\n",(0,o.jsxs)(e.li,{children:["执行阶段：生成入口文件之前，",(0,o.jsx)(e.a,{href:"#prepare",children:(0,o.jsx)(e.code,{children:"prepare"})})," 阶段触发"]}),"\n",(0,o.jsxs)(e.li,{children:["Hook 模型：",(0,o.jsx)(e.code,{children:"AsyncWaterfall"})]}),"\n",(0,o.jsxs)(e.li,{children:["类型：",(0,o.jsx)(e.code,{children:"AsyncWaterfall<{ entrypoint: Entrypoint; plugins: RuntimePlugin[]; }>"})]}),"\n",(0,o.jsx)(e.li,{children:"使用示例："}),"\n"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-ts",children:"import type { CliPlugin, AppTools } from '@modern-js/app-tools';\n\nexport const myPlugin = (): CliPlugin<AppTools> => ({\n  setup(api) {\n    return {\n      modifyEntryRuntimePlugins({ entrypoint, plugins }) {\n        const name = 'customPlugin';\n        const options = {\n          /** 可序列化的内容 */\n        };\n\n        return {\n          plugins: [\n            ...plugins,\n            {\n              name,\n              options: JSON.stringify(options),\n            },\n          ],\n        };\n      },\n    };\n  },\n});\n"})}),"\n",(0,o.jsxs)(e.h3,{id:"modifyentryrenderfunction",children:[(0,o.jsx)(e.code,{children:"modifyEntryRenderFunction"}),(0,o.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#modifyentryrenderfunction",children:"#"})]}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:["功能：用于修改生成入口文件中 ",(0,o.jsx)(e.code,{children:"render"})," 函数"]}),"\n",(0,o.jsxs)(e.li,{children:["执行阶段：生成入口文件之前，",(0,o.jsx)(e.a,{href:"#prepare",children:(0,o.jsx)(e.code,{children:"prepare"})})," 阶段触发"]}),"\n",(0,o.jsxs)(e.li,{children:["Hook 模型：",(0,o.jsx)(e.code,{children:"AsyncWaterfall"})]}),"\n",(0,o.jsxs)(e.li,{children:["类型：",(0,o.jsx)(e.code,{children:"AsyncWaterfall<{ entrypoint: Entrypoint; code: string; }>"})]}),"\n",(0,o.jsx)(e.li,{children:"使用示例："}),"\n"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-ts",children:"import type { CliPlugin, AppTools } from '@modern-js/app-tools';\n\nexport const myPlugin = (): CliPlugin<AppTools> => ({\n  setup(api) {\n    return {\n      modifyEntryRenderFunction({ entrypoint, code }) {\n        const customRender = `/** render function body */`;\n        return {\n          entrypoint,\n          code: customRender,\n        };\n      },\n    };\n  },\n});\n"})}),"\n",(0,o.jsxs)(e.h3,{id:"modifyfilesystemroutes",children:[(0,o.jsx)(e.code,{children:"modifyFileSystemRoutes"}),(0,o.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#modifyfilesystemroutes",children:"#"})]}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:"功能：用于修改生成前端页面路由文件中的内容，内容都是需要可序列化的"}),"\n",(0,o.jsxs)(e.li,{children:["执行阶段：生成前端路由文件之前，",(0,o.jsx)(e.a,{href:"#prepare",children:(0,o.jsx)(e.code,{children:"prepare"})})," 阶段触发"]}),"\n",(0,o.jsxs)(e.li,{children:["Hook 模型：",(0,o.jsx)(e.code,{children:"AsyncWaterfall"})]}),"\n",(0,o.jsxs)(e.li,{children:["类型：",(0,o.jsx)(e.code,{children:"AsyncWaterfall<{ entrypoint: Entrypoint; routes: Route[]; }>"})]}),"\n",(0,o.jsx)(e.li,{children:"使用示例："}),"\n"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-tsx",children:"import type { CliPlugin, AppTools } from '@modern-js/app-tools';\n\nexport const myPlugin = (): CliPlugin<AppTools> => ({\n  setup(api) {\n    return {\n      modifyFileSystemRoutes({ entrypoint, routes }) {\n        return {\n          entrypoint,\n          routes: [\n            ...routes,\n            {\n              path: '/custom_page',\n              component: require.resolve('./Component'),\n              exact: true,\n            },\n          ],\n        };\n      },\n    };\n  },\n});\n"})}),"\n",(0,o.jsx)(e.p,{children:"这样就为前端新增了一个页面路由。"}),"\n",(0,o.jsxs)(e.h3,{id:"modifyserverroutes",children:[(0,o.jsx)(e.code,{children:"modifyServerRoutes"}),(0,o.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#modifyserverroutes",children:"#"})]}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:"功能：用于修改生成服务器路由中的内容"}),"\n",(0,o.jsxs)(e.li,{children:["执行阶段：生成 Server 路由文件之前，",(0,o.jsx)(e.a,{href:"#prepare",children:(0,o.jsx)(e.code,{children:"prepare"})})," 阶段触发"]}),"\n",(0,o.jsxs)(e.li,{children:["Hook 模型：",(0,o.jsx)(e.code,{children:"AsyncWaterfall"})]}),"\n",(0,o.jsxs)(e.li,{children:["类型：",(0,o.jsx)(e.code,{children:"AsyncWaterfall<{ routes: ServerRoute[]; }>"})]}),"\n",(0,o.jsx)(e.li,{children:"使用示例："}),"\n"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-ts",children:"import type { CliPlugin, AppTools } from '@modern-js/app-tools';\n\nexport const myPlugin = (): CliPlugin<AppTools> => ({\n  setup(api) {\n    return {\n      modifyServerRoutes({ routes }) {\n        return {\n          routes: [\n            ...routes,\n            {\n              urlPath: '/api/foo',\n              isApi: true,\n              entryPath: '',\n              isSPA: false,\n              isSSR: false,\n            },\n          ],\n        };\n      },\n    };\n  },\n});\n"})}),"\n",(0,o.jsxs)(e.h3,{id:"modifyasyncentry",children:[(0,o.jsx)(e.code,{children:"modifyAsyncEntry"}),(0,o.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#modifyasyncentry",children:"#"})]}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:["功能：用于修改包裹入口文件的异步模块，参见 ",(0,o.jsx)(e.a,{href:"/configure/app/source/enable-async-entry",children:"source.enableAsyncEntry"})]}),"\n",(0,o.jsxs)(e.li,{children:["执行阶段：生成入口文件之前，",(0,o.jsx)(e.a,{href:"#prepare",children:(0,o.jsx)(e.code,{children:"prepare"})})," 阶段触发"]}),"\n",(0,o.jsxs)(e.li,{children:["Hook 模型：",(0,o.jsx)(e.code,{children:"AsyncWaterfall"})]}),"\n",(0,o.jsxs)(e.li,{children:["类型：",(0,o.jsx)(e.code,{children:"AsyncWaterfall<{ entrypoint: Entrypoint; code: string; }>"})]}),"\n",(0,o.jsx)(e.li,{children:"使用示例："}),"\n"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-ts",children:"import type { CliPlugin, AppTools } from '@modern-js/app-tools';\n\nexport const myPlugin = (): CliPlugin<AppTools> => ({\n  setup(api) {\n    return {\n      modifyAsyncEntry({ entrypoint, code }) {\n        const customCode = `console.log('hello');`;\n        return {\n          entrypoint,\n          code: `${customCode}${code}`,\n        };\n      },\n    };\n  },\n});\n"})}),"\n",(0,o.jsxs)(e.h3,{id:"htmlpartials",children:[(0,o.jsx)(e.code,{children:"htmlPartials"}),(0,o.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#htmlpartials",children:"#"})]}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:"功能：用于定制生成的 HTML 页面模版"}),"\n",(0,o.jsxs)(e.li,{children:["执行阶段：",(0,o.jsx)(e.a,{href:"#prepare",children:(0,o.jsx)(e.code,{children:"prepare"})})," 阶段触发"]}),"\n",(0,o.jsxs)(e.li,{children:["Hook 模型：",(0,o.jsx)(e.code,{children:"AsyncWaterfall"})]}),"\n",(0,o.jsxs)(e.li,{children:["类型：",(0,o.jsx)(e.code,{children:"AsyncWaterfall<{ entrypoint: Entrypoint; partials: HtmlPartials; }>"})]}),"\n",(0,o.jsx)(e.li,{children:"使用示例："}),"\n"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-ts",children:"import type { CliPlugin, AppTools } from '@modern-js/app-tools';\n\nexport const myPlugin = (): CliPlugin<AppTools> => ({\n  setup(api) {\n    return {\n      async htmlPartials({ entrypoint, partials }) {\n        partials.head.push('<script>console.log(\"test\")</script>');\n        return {\n          entrypoint,\n          partials,\n        };\n      },\n    };\n  },\n});\n"})}),"\n",(0,o.jsx)(e.p,{children:"这样就为 HTML 模版中新增了一个 Script 标签。"}),"\n","\n",(0,o.jsxs)(e.h2,{id:"runtime",children:["Runtime",(0,o.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#runtime",children:"#"})]}),"\n",(0,o.jsxs)(e.div,{className:"modern-directive note",children:[(0,o.jsx)(e.div,{className:"modern-directive-title",children:"NOTE"}),(0,o.jsxs)(e.div,{className:"modern-directive-content",children:[(0,o.jsx)(e.p,{children:"目前 Runtime 插件还未完全开放，API 不保证稳定，使用需谨慎。"}),"\n"]})]}),"\n",(0,o.jsx)(e.p,{children:"Runtime 插件主要用于开发者修改需要渲染的组件。"}),"\n",(0,o.jsxs)(e.h3,{id:"init",children:[(0,o.jsx)(e.code,{children:"init"}),(0,o.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#init",children:"#"})]}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:["功能：执行 ",(0,o.jsx)(e.code,{children:"App.init"})]}),"\n",(0,o.jsx)(e.li,{children:"执行阶段：渲染（SSR/CSR）"}),"\n",(0,o.jsxs)(e.li,{children:["Hook 模型：",(0,o.jsx)(e.code,{children:"AsyncPipeline"})]}),"\n",(0,o.jsxs)(e.li,{children:["类型：",(0,o.jsx)(e.code,{children:"AsyncPipeline<{ context: RuntimeContext; }, unknown>"})]}),"\n",(0,o.jsx)(e.li,{children:"使用示例："}),"\n"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-ts",children:"import type { Plugin } from '@modern-js/runtime';\n\nexport const myPlugin = (): Plugin => ({\n  setup(api) {\n    return {\n      init({ context }, next) {\n        // do something\n        return next({ context });\n      },\n    };\n  },\n});\n"})}),"\n",(0,o.jsxs)(e.h3,{id:"hoc",children:[(0,o.jsx)(e.code,{children:"hoc"}),(0,o.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#hoc",children:"#"})]}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:"功能：修改需要渲染的组件"}),"\n",(0,o.jsx)(e.li,{children:"执行阶段：渲染（SSR/CSR）"}),"\n",(0,o.jsxs)(e.li,{children:["Hook 模型：",(0,o.jsx)(e.code,{children:"Pipeline"})]}),"\n",(0,o.jsxs)(e.li,{children:["类型：",(0,o.jsx)(e.code,{children:"Pipeline<{ App: React.ComponentType<any>; }, React.ComponentType<any>>"})]}),"\n",(0,o.jsx)(e.li,{children:"使用示例："}),"\n"]}),"\n",(0,o.jsxs)(e.div,{className:"modern-directive note",children:[(0,o.jsx)(e.div,{className:"modern-directive-title",children:"NOTE"}),(0,o.jsx)(e.div,{className:"modern-directive-content",children:(0,o.jsx)(e.p,{children:"使用 hoc 钩子时，需要把原来的 App 组件的静态属性拷贝到新的组件上，并透传 props."})})]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-ts",children:"import { createContext } from 'react';\nimport type { Plugin } from '@modern-js/runtime';\nimport hoistNonReactStatics from 'hoist-non-react-statics';\n\nexport const myPlugin = (): Plugin => ({\n  setup(api) {\n    const FooContext = createContext('');\n    return {\n      hoc({ App }, next) {\n        const AppWrapper = (props: any) => {\n          return (\n            <FooContext.Provider store={'test'}>\n              <App {...props} />\n            </FooContext.Provider>\n          );\n        };\n        return next({\n          App: hoistNonReactStatics(AppWrapper, App),\n        });\n      },\n    };\n  },\n});\n"})}),"\n"]})}(i=globalThis).__RSPRESS_PAGE_META||(i.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["zh%2Fguides%2Ftopic-detail%2Fframework-plugin%2Fhook-list.mdx"]={toc:[{text:"CLI Common Hooks",id:"cli-common-hooks",depth:2},{text:"beforeConfig",id:"beforeconfig",depth:3},{text:"config",id:"config",depth:3},{text:"validateSchema",id:"validateschema",depth:3},{text:"prepare",id:"prepare",depth:3},{text:"afterPrepare",id:"afterprepare",depth:3},{text:"commands",id:"commands",depth:3},{text:"beforeExit",id:"beforeexit",depth:3},{text:"CLI Framework Hooks",id:"cli-framework-hooks",depth:2},{text:"beforeDev",id:"beforedev",depth:3},{text:"afterDev",id:"afterdev",depth:3},{text:"beforeBuild",id:"beforebuild",depth:3},{text:"afterBuild",id:"afterbuild",depth:3},{text:"beforeCreateCompiler",id:"beforecreatecompiler",depth:3},{text:"afterCreateCompiler",id:"aftercreatecompiler",depth:3},{text:"beforePrintInstructions",id:"beforeprintinstructions",depth:3},{text:"modifyEntryImports",id:"modifyentryimports",depth:3},{text:"modifyEntryExport",id:"modifyentryexport",depth:3},{text:"modifyEntryRuntimePlugins",id:"modifyentryruntimeplugins",depth:3},{text:"modifyEntryRenderFunction",id:"modifyentryrenderfunction",depth:3},{text:"modifyFileSystemRoutes",id:"modifyfilesystemroutes",depth:3},{text:"modifyServerRoutes",id:"modifyserverroutes",depth:3},{text:"modifyAsyncEntry",id:"modifyasyncentry",depth:3},{text:"htmlPartials",id:"htmlpartials",depth:3},{text:"Runtime",id:"runtime",depth:2},{text:"init",id:"init",depth:3},{text:"hoc",id:"hoc",depth:3}],title:"Hook 列表",frontmatter:{title:"Hook 列表",sidebar_position:8}};var t=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=Object.assign({},(0,d.useMDXComponents)(),n.components).wrapper;return e?(0,o.jsx)(e,(0,l._)((0,s._)({},n),{children:(0,o.jsx)(c,(0,s._)({},n))})):c(n)}}}]);