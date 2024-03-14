/*! For license information please see 6379.446829fe.js.LICENSE.txt */
(self.webpackChunk_modern_js_builder_doc=self.webpackChunk_modern_js_builder_doc||[]).push([["6379"],{8634:function(e,r,n){"use strict";n.r(r);var i=n("39980"),s=n("96954"),t=n("75962"),d=n("46790"),a=n("23589");function o(e){let r=Object.assign({h1:"h1",a:"a",div:"div",p:"p",ul:"ul",li:"li",h2:"h2",strong:"strong",pre:"pre",code:"code",h3:"h3",blockquote:"blockquote"},(0,s.useMDXComponents)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(r.h1,{id:"quick-start",children:["Quick Start",(0,i.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#quick-start",children:"#"})]}),"\n",(0,i.jsxs)(r.div,{className:"rspress-directive tip",children:[(0,i.jsx)(r.div,{className:"rspress-directive-title",children:"Notice"}),(0,i.jsxs)(r.div,{className:"rspress-directive-content",children:[(0,i.jsx)(r.p,{children:"Modern.js Builder has been rebranded as Rsbuild. This document will no longer be updated."}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:["If you are using the Modern.js framework, please visit the ",(0,i.jsx)(r.a,{href:"https://modernjs.dev/",target:"_blank",rel:"noopener noreferrer",children:"Modern.js framework documentation"})," directly."]}),"\n",(0,i.jsxs)(r.li,{children:["If you are using the CLI or Node API of Modern.js Builder, you can easily migrate to Rsbuild, please visit the ",(0,i.jsx)(r.a,{href:"https://github.com/web-infra-dev/rsbuild",target:"_blank",rel:"noopener noreferrer",children:"Rsbuild repository"})," for more information."]}),"\n"]}),"\n"]})]}),"\n",(0,i.jsxs)(r.h2,{id:"environment-preparation",children:["Environment preparation",(0,i.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#environment-preparation",children:"#"})]}),"\n",(0,i.jsxs)(r.p,{children:["Before getting started, you will need to install ",(0,i.jsx)(r.a,{href:"https://nodejs.org/",target:"_blank",rel:"noopener noreferrer",children:"Node.js"}),", and ensure that your Node.js version is higher than 14.17.6. ",(0,i.jsx)(r.strong,{children:"We recommend using the LTS version of Node.js 18."})]}),"\n",(0,i.jsx)(r.p,{children:"You can check the currently used Node.js version with the following command:"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-bash",children:"node -v\n"})}),"\n",(0,i.jsxs)(r.p,{children:["If you do not have Node.js installed in your current environment, or the installed version is lower than 14.17.6, you can use ",(0,i.jsx)(r.a,{href:"https://github.com/nvm-sh/nvm",target:"_blank",rel:"noopener noreferrer",children:"nvm"})," or ",(0,i.jsx)(r.a,{href:"https://github.com/Schniz/fnm",target:"_blank",rel:"noopener noreferrer",children:"fnm"})," to install the required version."]}),"\n",(0,i.jsx)(r.p,{children:"Here is an example of how to install the Node.js 18 LTS version via nvm:"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-bash",children:"# Install the long-term support version of Node.js 18\nnvm install 18 --lts\n\n# Make the newly installed Node.js 18 as the default version\nnvm alias default 18\n\n# Switch to the newly installed Node.js 18\nnvm use 18\n"})}),"\n",(0,i.jsxs)(r.div,{className:"rspress-directive tip",children:[(0,i.jsx)(r.div,{className:"rspress-directive-title",children:"nvm and fnm"}),(0,i.jsx)(r.div,{className:"rspress-directive-content",children:(0,i.jsx)(r.p,{children:"Both nvm and fnm are Node.js version management tools. Relatively speaking, nvm is more mature and stable, while fnm is implemented using Rust, which provides better performance than nvm."})})]}),"\n",(0,i.jsxs)(r.h2,{id:"use-the-modernjs-framework",children:["Use the Modern.js Framework",(0,i.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#use-the-modernjs-framework",children:"#"})]}),"\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.strong,{children:"The Modern.js Framework uses Modern.js Builder as its build tool by default"}),". If you are a business developer, you do not need to manually install Builder, just create a Modern.js project and use all the features provided by Builder."]}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-bash",children:"npx @modern-js/create@latest my-app\n"})}),"\n",(0,i.jsxs)(r.p,{children:["Please refer to ",(0,i.jsx)(r.a,{href:"https://modernjs.dev/en/guides/get-started/introduction.html",target:"_blank",rel:"noopener noreferrer",children:"Modern.js - Introduction"})," and ",(0,i.jsx)(r.a,{href:"https://modernjs.dev/en/guides/get-started/quick-start.html",target:"_blank",rel:"noopener noreferrer",children:"Modern.js - Quick Start"})," to learn how to use Modern.js framework."]}),"\n",(0,i.jsxs)(r.div,{className:"rspress-directive tip",children:[(0,i.jsx)(r.div,{className:"rspress-directive-title",children:"About the documentation"}),(0,i.jsx)(r.div,{className:"rspress-directive-content",children:(0,i.jsx)(r.p,{children:"Modern.js framework documentation and Modern.js Builder documentation are deployed under two separate sites. If you encounter any build-related problems while using the Modern.js framework, you can always refer to the documentation of Modern.js Builder to find solutions."})})]}),"\n",(0,i.jsxs)(r.h2,{id:"use-the-builder-cli-tool",children:["Use the Builder CLI Tool",(0,i.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#use-the-builder-cli-tool",children:"#"})]}),"\n",(0,i.jsxs)(r.p,{children:["Modern.js Builder provides a lightweight CLI tool that includes basic commands such as ",(0,i.jsx)(r.code,{children:"dev"})," and ",(0,i.jsx)(r.code,{children:"build"}),". It is primarily used for building non-React projects."]}),"\n",(0,i.jsx)(r.p,{children:"If your project is not based on React, for example, if you are developing a Vue project, you can use the Builder CLI tool to build your project."}),"\n",(0,i.jsxs)(r.p,{children:["Please refer to ",(0,i.jsx)(r.a,{href:"/guide/basic/builder-cli",children:"Use Builder CLI"})," for more information on how to use it."]}),"\n",(0,i.jsxs)(r.h2,{id:"use-builder-in-a-front-end-framework",children:["Use Builder in a Front-end Framework",(0,i.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#use-builder-in-a-front-end-framework",children:"#"})]}),"\n",(0,i.jsx)(r.p,{children:"If you are developing a front-end framework, you can use Builder by following these steps:"}),"\n",(0,i.jsxs)(r.h3,{id:"1-install-builder",children:["1. Install Builder",(0,i.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#1-install-builder",children:"#"})]}),"\n",(0,i.jsx)(r.p,{children:"You need to install two packages:"}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.code,{children:"@modern-js/builder"}),": This is the core package of Builder, which exports the core API of Builder."]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.code,{children:"@modern-js/builder-rspack-provider"}),": To provide the building capabilities based on Rspack."]}),"\n"]}),"\n","\n",(0,i.jsx)(t.PackageManagerTabs,{command:"add @modern-js/builder @modern-js/builder-rspack-provider -D"}),"\n",(0,i.jsxs)(r.p,{children:["if you want to use webpack instead of Rspack, you can replace the ",(0,i.jsx)(r.code,{children:"@modern-js/builder-rspack-provider"})," with ",(0,i.jsx)(r.code,{children:"@modern-js/builder-webpack-provider"}),":"]}),"\n",(0,i.jsxs)(r.blockquote,{children:["\n",(0,i.jsx)(r.p,{children:"When performing a version upgrade, please ensure that the Builder and Provider packages you install are of the same version."}),"\n"]}),"\n",(0,i.jsxs)(r.h3,{id:"2-create-builder-instance",children:["2. Create Builder Instance",(0,i.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#2-create-builder-instance",children:"#"})]}),"\n",(0,i.jsx)(r.p,{children:"There are two steps to creating a Builder instance:"}),"\n",(0,i.jsxs)(r.p,{children:["First you need to initialize the Builder Provider and pass in the ",(0,i.jsx)(r.code,{children:"builderConfig"})," config object. Builder provides a lot of configs that allow you to customize the build behavior. At this point, you don't need to know the specific content of the config, just pass in an empty object. You can find all available configs in ",(0,i.jsx)(r.a,{href:"/en/api/#config",children:"API - config"}),"."]}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsx)(r.li,{children:"Initialize the Rspack Provider:"}),"\n"]}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-ts",children:"import { createBuilder } from '@modern-js/builder';\nimport { builderWebpackProvider } from '@modern-js/builder-webpack-provider';\n\nconst provider = builderWebpackProvider({\n  builderConfig: {\n    // some configs\n  },\n});\n"})}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsx)(r.li,{children:"Initialize the Rspack Provider\uFF1A"}),"\n"]}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-ts",children:"import { createBuilder } from '@modern-js/builder';\nimport { builderRspackProvider } from '@modern-js/builder-rspack-provider';\n\nconst provider = builderRspackProvider({\n  builderConfig: {\n    // some configs\n  },\n});\n"})}),"\n",(0,i.jsxs)(r.p,{children:["After getting the provider instance, you can call the ",(0,i.jsx)(r.code,{children:"createBuilder"})," method to create a Builder instance object:"]}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-ts",children:"const builder = await createBuilder(provider, {\n  entry: {\n    index: './src/index.ts',\n  },\n});\n"})}),"\n",(0,i.jsxs)(r.p,{children:["Except the ",(0,i.jsx)(r.code,{children:"entry"})," option, the ",(0,i.jsx)(r.code,{children:"createBuilder"})," method also provides some other options, which you can learn more about in ",(0,i.jsx)(r.a,{href:"/en/api/builder-core#createbuilder",children:"API - createBuilder"}),"."]}),"\n",(0,i.jsxs)(r.h3,{id:"3-call-builder-instance-method",children:["3. Call Builder Instance Method",(0,i.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#3-call-builder-instance-method",children:"#"})]}),"\n",(0,i.jsx)(r.p,{children:"The Builder instance provides some methods, which you can use according to the usage scenarios."}),"\n",(0,i.jsxs)(r.p,{children:["To start local development, it is recommended to use the ",(0,i.jsx)(r.a,{href:"/en/api/builder-instance#builder-startdevserver",children:"builder.startDevServer"})," method, which will start a local Dev Server."]}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-ts",children:"await builder.startDevServer();\n"})}),"\n",(0,i.jsx)(r.p,{children:"After successfully starting Dev Server, you can see the following logs:"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-bash",children:"info    Starting dev server...\n\n  > Local:    http://localhost:8081\n  > Network:  http://192.168.0.1:8081\n"})}),"\n",(0,i.jsxs)(r.p,{children:["To deploy the App to production environment, it is recommended to use the ",(0,i.jsx)(r.a,{href:"/en/api/builder-instance#builder-build",children:"builder.build"})," method, which will build the production outputs."]}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-ts",children:"await builder.build();\n"})}),"\n",(0,i.jsxs)(r.blockquote,{children:["\n",(0,i.jsxs)(r.p,{children:["For more introduction of Builder instance methods, please read the ",(0,i.jsx)(r.a,{href:"/en/api/builder-instance",children:"Builder Instance"})," chapter."]}),"\n"]}),"\n",(0,i.jsx)(r.p,{children:"After completing the above three steps, you have learned the basic usage of Builder. Next, you can customize the build process through the Builder plugin and Builder configs."}),"\n",(0,i.jsxs)(r.h2,{id:"next-step",children:["Next Step",(0,i.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#next-step",children:"#"})]}),"\n",(0,i.jsx)(r.p,{children:"You may want:"}),"\n","\n",(0,i.jsxs)(d.default,{children:[(0,i.jsx)(a.default,{href:"/guide/glossary.html",title:"Glossary",description:"Learn about Builder related concepts"}),(0,i.jsx)(a.default,{href:"/guide/features.html",title:"All Features",description:"Learn all features of Builder"}),(0,i.jsx)(a.default,{href:"/api/index.html",title:"API Reference",description:"View detailed API documentation"})]})]})}function l(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:r}=Object.assign({},(0,s.useMDXComponents)(),e.components);return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}r.default=l,l.__RSPRESS_PAGE_META={},l.__RSPRESS_PAGE_META["en%2Fguide%2Fquick-start.mdx"]={toc:[{text:"Environment preparation",id:"environment-preparation",depth:2},{text:"Use the Modern.js Framework",id:"use-the-modernjs-framework",depth:2},{text:"Use the Builder CLI Tool",id:"use-the-builder-cli-tool",depth:2},{text:"Use Builder in a Front-end Framework",id:"use-builder-in-a-front-end-framework",depth:2},{text:"1. Install Builder",id:"1-install-builder",depth:3},{text:"2. Create Builder Instance",id:"2-create-builder-instance",depth:3},{text:"3. Call Builder Instance Method",id:"3-call-builder-instance-method",depth:3},{text:"Next Step",id:"next-step",depth:2}],title:"Quick Start",frontmatter:{}}},46790:function(e,r,n){"use strict";n.r(r);var i=n("39980"),s=n("35918");r.default=e=>(0,i.jsx)("div",{className:s.nextSteps,children:e.children})},23589:function(e,r,n){"use strict";n.r(r);var i=n("39980"),s=n("20009"),t=n("65354");r.default=e=>(0,i.jsxs)("a",{className:t.step,href:(0,s.useUrl)(e.href),children:[(0,i.jsx)("p",{className:t.title,children:e.title}),(0,i.jsx)("p",{className:t.description,children:e.description})]})},20009:function(e,r,n){"use strict";n.r(r),n.d(r,{useUrl:function(){return s}});var i=n("89621");function s(e){let r=(0,i.useLang)();return(0,i.withBase)("zh"===r?e:`/en${e}`)}}}]);