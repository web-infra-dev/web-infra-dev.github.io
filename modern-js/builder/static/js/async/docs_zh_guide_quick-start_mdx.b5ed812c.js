(self.webpackChunk_modern_js_builder_doc=self.webpackChunk_modern_js_builder_doc||[]).push([["docs_zh_guide_quick-start_mdx"],{4870:function(e,r,n){"use strict";n.r(r),n.d(r,{default:function(){return u}});var d,i=n("15169"),s=n("43932"),l=n("9880"),c=n("23169"),a=n("20806"),t=n("70792"),h=n("69571");function o(e){var r=Object.assign({h1:"h1",a:"a",h2:"h2",p:"p",strong:"strong",pre:"pre",code:"code",div:"div",h3:"h3",ul:"ul",li:"li",blockquote:"blockquote"},(0,c.useMDXComponents)(),e.components);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(r.h1,{id:"快速上手",children:["快速上手",(0,l.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#快速上手",children:"#"})]}),"\n",(0,l.jsxs)(r.h2,{id:"环境准备",children:["环境准备",(0,l.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#环境准备",children:"#"})]}),"\n","\n",(0,l.jsx)(a.default,{}),"\n",(0,l.jsxs)(r.h2,{id:"使用-modernjs-框架",children:["使用 Modern.js 框架",(0,l.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#使用-modernjs-框架",children:"#"})]}),"\n",(0,l.jsxs)(r.p,{children:[(0,l.jsx)(r.strong,{children:"Modern.js 框架默认使用 Modern.js Builder 作为构建工具"}),"。因此，如果你是一名业务开发者，那么不需要手动接入 Builder，只需要创建一个 Modern.js 项目，就可以使用 Builder 提供的所有能力。"]}),"\n",(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{className:"language-bash",children:"npx @modern-js/create@latest my-app\n"})}),"\n",(0,l.jsxs)(r.p,{children:["请阅读 ",(0,l.jsx)(r.a,{href:"https://modernjs.dev/guides/get-started/introduction.html",target:"_blank",rel:"noopener noreferrer",children:"Modern.js - 介绍"})," 和 ",(0,l.jsx)(r.a,{href:"https://modernjs.dev/guides/get-started/quick-start.html",target:"_blank",rel:"noopener noreferrer",children:"Modern.js - 快速上手"})," 来了解 Modern.js 框架的使用方法。"]}),"\n",(0,l.jsxs)(r.div,{className:"modern-directive tip",children:[(0,l.jsx)(r.div,{className:"modern-directive-title",children:"关于文档"}),(0,l.jsx)(r.div,{className:"modern-directive-content",children:(0,l.jsx)(r.p,{children:"Modern.js 框架文档和 Modern.js Builder 文档部署在两个独立的站点下。如果你在使用 Modern.js 框架的过程中遇到任何构建相关的问题，你可以随时查阅 Modern.js Builder 的文档来寻找相应的解决方案。"})})]}),"\n",(0,l.jsxs)(r.h2,{id:"使用-builder-cli-工具",children:["使用 Builder CLI 工具",(0,l.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#使用-builder-cli-工具",children:"#"})]}),"\n",(0,l.jsx)(r.p,{children:"Modern.js Builder 提供了一个轻量的 CLI 工具，包含 dev、build 等基础命令，它主要用于构建非 React 项目。"}),"\n",(0,l.jsx)(r.p,{children:"如果你的项目不是基于 React 的，比如开发一个 Vue 项目，那么你可以使用 Builder CLI 工具来构建你的项目。"}),"\n",(0,l.jsxs)(r.p,{children:["请参考 ",(0,l.jsx)(r.a,{href:"/guide/basic/builder-cli",children:"使用 Builder CLI"})," 来了解相关用法。"]}),"\n",(0,l.jsxs)(r.h2,{id:"在前端框架中接入",children:["在前端框架中接入",(0,l.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#在前端框架中接入",children:"#"})]}),"\n",(0,l.jsx)(r.p,{children:"如果你正在开发一个前端框架，可以通过下面的步骤来接入 Builder:"}),"\n",(0,l.jsxs)(r.h3,{id:"1-安装-builder",children:["1. 安装 Builder",(0,l.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#1-安装-builder",children:"#"})]}),"\n",(0,l.jsx)(r.p,{children:"你需要安装两个包，其中："}),"\n",(0,l.jsxs)(r.ul,{children:["\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.code,{children:"@modern-js/builder"})," 为 Builder 的核心包，导出了 Builder 的核心 API。"]}),"\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.code,{children:"@modern-js/builder-webpack-provider"})," 或 ",(0,l.jsx)(r.code,{children:"@modern-js/builder-rspack-provider"}),"，它们是 Builder 的 Provider，提供基于 webpack 或 Rspack 的构建能力。"]}),"\n"]}),"\n",(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{className:"language-bash",children:"# 使用 webpack 打包\npnpm add @modern-js/builder @modern-js/builder-webpack-provider -D\n\n# 使用 Rspack 打包\npnpm add @modern-js/builder @modern-js/builder-rspack-provider -D\n"})}),"\n",(0,l.jsxs)(r.blockquote,{children:["\n",(0,l.jsx)(r.p,{children:"在进行版本升级时，请确保你安装的 builder 和 provider 为同一个版本。"}),"\n"]}),"\n",(0,l.jsxs)(r.h3,{id:"2-创建-builder-实例",children:["2. 创建 Builder 实例",(0,l.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#2-创建-builder-实例",children:"#"})]}),"\n",(0,l.jsx)(r.p,{children:"创建 Builder 实例的过程分两步："}),"\n",(0,l.jsxs)(r.p,{children:["首先你需要初始化 Builder Provider，并传入 ",(0,l.jsx)(r.code,{children:"builderConfig"})," 配置对象。Builder 提供了丰富的配置项，允许你对构建行为进行灵活定制。此时你还不需要了解配置项的具体内容，传入一个空对象即可。你可以在 ",(0,l.jsx)(r.a,{href:"/api/#%E9%85%8D%E7%BD%AE",children:"API - 配置"})," 中找到所有可用的配置项。"]}),"\n",(0,l.jsxs)(r.ul,{children:["\n",(0,l.jsx)(r.li,{children:"初始化 webpack Provider："}),"\n"]}),"\n",(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{className:"language-ts",children:"import { createBuilder } from '@modern-js/builder';\nimport { builderWebpackProvider } from '@modern-js/builder-webpack-provider';\n\nconst provider = builderWebpackProvider({\n  builderConfig: {\n    // some configs\n  },\n});\n"})}),"\n",(0,l.jsxs)(r.ul,{children:["\n",(0,l.jsx)(r.li,{children:"初始化 Rspack Provider："}),"\n"]}),"\n",(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{className:"language-ts",children:"import { createBuilder } from '@modern-js/builder';\nimport { builderRspackProvider } from '@modern-js/builder-rspack-provider';\n\nconst provider = builderRspackProvider({\n  builderConfig: {\n    // some configs\n  },\n});\n"})}),"\n",(0,l.jsxs)(r.p,{children:["拿到 provider 实例后，你可以调用 ",(0,l.jsx)(r.code,{children:"createBuilder"})," 方法来创建一个 Builder 实例对象："]}),"\n",(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{className:"language-ts",children:"const builder = await createBuilder(provider, {\n  entry: {\n    index: './src/index.ts',\n  },\n});\n"})}),"\n",(0,l.jsxs)(r.p,{children:["除了上述示例中的 ",(0,l.jsx)(r.code,{children:"entry"})," 选项，",(0,l.jsx)(r.code,{children:"createBuilder"})," 方法也提供了一些其他的选项，你可以在 ",(0,l.jsx)(r.a,{href:"/api/builder-core#createbuilder",children:"API - createBuilder"})," 中进一步了解。"]}),"\n",(0,l.jsxs)(r.h3,{id:"3-调用-builder-实例方法",children:["3. 调用 Builder 实例方法",(0,l.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#3-调用-builder-实例方法",children:"#"})]}),"\n",(0,l.jsx)(r.p,{children:"Builder 实例提供了与构建相关的各个方法，你可以根据实际场景来进行使用。"}),"\n",(0,l.jsxs)(r.p,{children:["在本地开发场景，建议使用 ",(0,l.jsx)(r.a,{href:"/api/builder-instance#builder-startdevserver",children:"builder.startDevServer"})," 方法，调用后会启动本地 Dev Server。"]}),"\n",(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{className:"language-ts",children:"await builder.startDevServer();\n"})}),"\n",(0,l.jsx)(r.p,{children:"成功启动 Dev Server 后，可以看到以下日志信息："}),"\n",(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{className:"language-bash",children:"info    Starting dev server...\ninfo    Dev server running at:\n\n  > Local:    http://localhost:8081\n  > Network:  http://192.168.0.1:8081\n"})}),"\n",(0,l.jsxs)(r.p,{children:["在生产环境部署场景，建议使用 ",(0,l.jsx)(r.a,{href:"/api/builder-instance#builder-build",children:"builder.build"})," 方法，调用后会构建出生产环境产物。"]}),"\n",(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{className:"language-ts",children:"await builder.build();\n"})}),"\n",(0,l.jsxs)(r.blockquote,{children:["\n",(0,l.jsxs)(r.p,{children:["关于 Builder 实例方法的更多介绍，请阅读 ",(0,l.jsx)(r.a,{href:"/api/builder-instance",children:"Builder Instance"})," 章节。"]}),"\n"]}),"\n",(0,l.jsx)(r.p,{children:"通过以上三个步骤，你已经了解了 Builder 基本的使用方法。接下来你可以通过 Builder 插件和 Builder 配置来对构建流程进行定制。"}),"\n",(0,l.jsxs)(r.h2,{id:"下一步",children:["下一步",(0,l.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#下一步",children:"#"})]}),"\n",(0,l.jsx)(r.p,{children:"你可能想要："}),"\n","\n",(0,l.jsxs)(t.default,{children:[(0,l.jsx)(h.default,{href:"/guide/glossary.html",title:"名词解释",description:"了解 Builder 相关的概念"}),(0,l.jsx)(h.default,{href:"/guide/features.html",title:"功能导航",description:"了解 Builder 提供的所有功能"}),(0,l.jsx)(h.default,{href:"/api/index.html",title:"查阅 API",description:"查看详细的 API 文档"})]})]})}(d=globalThis).__RSPRESS_PAGE_META||(d.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["zh%2Fguide%2Fquick-start.mdx"]={toc:[{text:"环境准备",id:"环境准备",depth:2},{text:"使用 Modern.js 框架",id:"使用-modernjs-框架",depth:2},{text:"使用 Builder CLI 工具",id:"使用-builder-cli-工具",depth:2},{text:"在前端框架中接入",id:"在前端框架中接入",depth:2},{text:"1. 安装 Builder",id:"1-安装-builder",depth:3},{text:"2. 创建 Builder 实例",id:"2-创建-builder-实例",depth:3},{text:"3. 调用 Builder 实例方法",id:"3-调用-builder-实例方法",depth:3},{text:"下一步",id:"下一步",depth:2}],title:"快速上手",frontmatter:{}};var u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=Object.assign({},(0,c.useMDXComponents)(),e.components).wrapper;return r?(0,l.jsx)(r,(0,s._)((0,i._)({},e),{children:(0,l.jsx)(o,(0,i._)({},e))})):o(e)}},20806:function(e,r,n){"use strict";n.r(r),n.d(r,{default:function(){return t}});var d,i=n("15169"),s=n("43932"),l=n("9880"),c=n("23169");function a(e){var r=Object.assign({p:"p",a:"a",strong:"strong",pre:"pre",code:"code",div:"div"},(0,c.useMDXComponents)(),e.components);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(r.p,{children:["在开始使用前，你需要安装 ",(0,l.jsx)(r.a,{href:"https://nodejs.org/",target:"_blank",rel:"noopener noreferrer",children:"Node.js"}),"，并保证 Node.js 版本不低于 14.17.6，",(0,l.jsx)(r.strong,{children:"我们推荐使用 Node.js 18 的 LTS 版本"}),"。"]}),"\n",(0,l.jsx)(r.p,{children:"你可以通过以下命令检查当前使用的 Node.js 版本："}),"\n",(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{className:"language-bash",children:"node -v\n"})}),"\n",(0,l.jsxs)(r.p,{children:["如果你当前的环境中尚未安装 Node.js，或是安装的版本低于 14.17.6，可以通过 ",(0,l.jsx)(r.a,{href:"https://github.com/nvm-sh/nvm",target:"_blank",rel:"noopener noreferrer",children:"nvm"})," 或 ",(0,l.jsx)(r.a,{href:"https://github.com/Schniz/fnm",target:"_blank",rel:"noopener noreferrer",children:"fnm"})," 安装需要的版本。"]}),"\n",(0,l.jsx)(r.p,{children:"下面是通过 nvm 安装 Node.js 18 LTS 版本的例子："}),"\n",(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{className:"language-bash",children:"# 安装 Node.js 18 的长期支持版本\nnvm install 18 --lts\n\n# 将刚安装的 Node.js 18 设置为默认版本\nnvm alias default 18\n\n# 切换到刚安装的 Node.js 18\nnvm use 18\n"})}),"\n",(0,l.jsxs)(r.div,{className:"modern-directive tip",children:[(0,l.jsx)(r.div,{className:"modern-directive-title",children:"nvm 和 fnm"}),(0,l.jsx)(r.div,{className:"modern-directive-content",children:(0,l.jsx)(r.p,{children:"nvm 和 fnm 都是 Node.js 版本管理工具。相对来说，nvm 较为成熟和稳定，而 fnm 是使用 Rust 实现的，比 nvm 提供了更好的性能。"})})]}),"\n",(0,l.jsxs)(r.p,{children:["此外，在安装 nvm 或 fnm 后，然后只要仓库根目录下有内容为 ",(0,l.jsx)(r.code,{children:"lts/hydrogen"})," 的 ",(0,l.jsx)(r.code,{children:".nvmrc"})," 文件，进入这个仓库时就会自动安装或切换到正确的 Node.js 版本。"]})]})}(d=globalThis).__RSPRESS_PAGE_META||(d.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["zh%2Fshared%2FnodeVersion.md"]={toc:[],title:"",frontmatter:{}};var t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=Object.assign({},(0,c.useMDXComponents)(),e.components).wrapper;return r?(0,l.jsx)(r,(0,s._)((0,i._)({},e),{children:(0,l.jsx)(a,(0,i._)({},e))})):a(e)}}}]);