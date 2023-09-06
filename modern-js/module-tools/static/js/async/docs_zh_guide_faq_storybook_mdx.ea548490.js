(self.webpackChunk_modern_js_module_tools_docs=self.webpackChunk_modern_js_module_tools_docs||[]).push([["docs_zh_guide_faq_storybook_mdx"],{77843:function(e,r,o){"use strict";o.r(r),o.d(r,{default:function(){return l}});var n,s=o("15169"),t=o("43932"),d=o("9880"),i=o("23169");function a(e){return(0,d.jsx)(d.Fragment,{})}(n=globalThis).__RSPRESS_PAGE_META||(n.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["zh%2Fcomponents%2Ffaq-storybook.mdx"]={toc:[],title:"",frontmatter:{}};var l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=Object.assign({},(0,i.useMDXComponents)(),e.components).wrapper;return r?(0,d.jsx)(r,(0,t._)((0,s._)({},e),{children:(0,d.jsx)(a,(0,s._)({},e))})):a(e)}},17817:function(e,r,o){"use strict";o.r(r),o.d(r,{default:function(){return c}});var n,s=o("15169"),t=o("43932"),d=o("9880"),i=o("23169"),a=o("77843");function l(e){var r=Object.assign({h1:"h1",a:"a",h2:"h2",p:"p",code:"code",ul:"ul",li:"li",pre:"pre",ol:"ol",img:"img"},(0,i.useMDXComponents)(),e.components);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(r.h1,{id:"storybook-相关问题",children:["Storybook 相关问题",(0,d.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#storybook-相关问题",children:"#"})]}),"\n","\n",(0,d.jsx)(a.default,{}),"\n",(0,d.jsxs)(r.h2,{id:"支持-storybook-v7",children:["支持 Storybook v7",(0,d.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#支持-storybook-v7",children:"#"})]}),"\n",(0,d.jsxs)(r.p,{children:["Storybook v7 目前还没支持，目前计划在 Storybook v7 中支持 Rspack 构建，因此进度会慢一些。\n相关 Issue：",(0,d.jsx)(r.a,{href:"https://github.com/web-infra-dev/modern.js/issues/3376",target:"_blank",rel:"noopener noreferrer",children:"#3376"}),"。"]}),"\n",(0,d.jsxs)(r.h2,{id:"使用-storybook-addon-或者其他配置不生效",children:["使用 Storybook Addon 或者其他配置不生效",(0,d.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#使用-storybook-addon-或者其他配置不生效",children:"#"})]}),"\n",(0,d.jsx)(r.p,{children:"Modern.js Module 目前使用的 Storybook 版本是 v6，如果使用了 v7 版本的 Addon 可能会出现插件不生效的情况。"}),"\n",(0,d.jsxs)(r.p,{children:["除了 Addon 以外，其他配置也可能会有区别。比如修改 ",(0,d.jsx)(r.code,{children:"preview.js"})," 配置文件的话，Storybook v6 与 v7 的写法也不相同："]}),"\n",(0,d.jsxs)(r.ul,{children:["\n",(0,d.jsxs)(r.li,{children:["v6：",(0,d.jsx)(r.a,{href:"https://storybook.js.org/docs/6.5/react/writing-stories/decorators#global-decorators",target:"_blank",rel:"noopener noreferrer",children:"文档链接"})]}),"\n",(0,d.jsxs)(r.li,{children:["v7：",(0,d.jsx)(r.a,{href:"https://storybook.js.org/docs/react/writing-stories/decorators#global-decorators",target:"_blank",rel:"noopener noreferrer",children:"文档链接"})]}),"\n"]}),"\n",(0,d.jsxs)(r.h2,{id:"cannot-find-module-react-dompackagejson",children:["Cannot find module 'react-dom/package.json",(0,d.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#cannot-find-module-react-dompackagejson",children:"#"})]}),"\n",(0,d.jsx)(r.p,{children:"在执行 Storybook 调试的时候，出现下面的报错提示："}),"\n",(0,d.jsx)(r.pre,{children:(0,d.jsx)(r.code,{className:"language-bash",children:"ERR! Error: Cannot find module 'react-dom/package.json'\n"})}),"\n",(0,d.jsxs)(r.p,{children:["解决办法：在项目中安装 ",(0,d.jsx)(r.code,{children:"react-dom"})," 依赖。"]}),"\n",(0,d.jsx)(r.pre,{children:(0,d.jsx)(r.code,{className:"language-json",children:'{\n    "devDependencies": {\n        "react-dom": "^17"\n    }\n}\n'})}),"\n",(0,d.jsxs)(r.h2,{id:"报错后看不到具体报错信息",children:["报错后，看不到具体报错信息",(0,d.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#报错后看不到具体报错信息",children:"#"})]}),"\n",(0,d.jsx)(r.p,{children:"解决办法："}),"\n",(0,d.jsxs)(r.ol,{children:["\n",(0,d.jsxs)(r.li,{children:["找到 ",(0,d.jsx)(r.code,{children:"@storybook/core-server/dist/cjs/dev-server.js"})]}),"\n",(0,d.jsxs)(r.li,{children:["找到 ",(0,d.jsx)(r.code,{children:"var _await$Promise$all = await Promise.all([preview, manager"})," 这附近的代码。"]}),"\n",(0,d.jsx)(r.li,{children:"修改成："}),"\n"]}),"\n",(0,d.jsx)(r.pre,{children:(0,d.jsx)(r.code,{className:"language-js",children:"var _await$Promise$all = await Promise.all([\n    preview.catch(e => console.info(e)),\n    manager // TODO #13083 Restore this when compiling the preview is fast enough\n  // .then((result) => {\n  //   if (!options.ci && !options.smokeTest) openInBrowser(address);\n  //   return result;\n  // })\n  .catch(previewBuilder.bail)]),\n      _await$Promise$all2 = _slicedToArray(_await$Promise$all, 2),\n      previewResult = _await$Promise$all2[0],\n      managerResult = _await$Promise$all2[1]; // TODO #13083 Remove this when compiling the preview is fast enough\n"})}),"\n",(0,d.jsxs)(r.h2,{id:"couldnt-find-any-stories-is-your-storybook",children:["Couldn't find any stories is your Storybook",(0,d.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#couldnt-find-any-stories-is-your-storybook",children:"#"})]}),"\n",(0,d.jsx)(r.p,{children:(0,d.jsx)(r.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/shylnyhaeh7uldvivhn/screenshot-20230703-162111.png",alt:"storybook-error"})}),"\n",(0,d.jsx)(r.p,{children:"当在预览区域看到类似这样的报错提示的时候，首先可以打开一下浏览器的控制台，应该会有些报错信息。可以先根据报错信息来推断是不是编写代码里出现的问题导致 Storybook 无法正常运行。修复后，再次刷新查看是否正常。"}),"\n",(0,d.jsxs)(r.h2,{id:"storybook-添加-proxy-功能",children:["Storybook 添加 Proxy 功能",(0,d.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#storybook-添加-proxy-功能",children:"#"})]}),"\n",(0,d.jsx)(r.p,{children:"Storybook 没有提供相关方案，不过 Storybook Issue 中有找到相关的解决办法。在 Modern.js Module 中，你可以："}),"\n",(0,d.jsxs)(r.ol,{children:["\n",(0,d.jsxs)(r.li,{children:["添加 ",(0,d.jsx)(r.code,{children:"config/storybook/middleware.js"})," 文件，并初始化下面的内容："]}),"\n"]}),"\n",(0,d.jsx)(r.pre,{children:(0,d.jsx)(r.code,{className:"language-js",children:"/* eslint-disable filenames/match-exported */\nmodule.exports = function expressMiddleware(router) {\n    // router is express router\n    // import { Router } from 'express'\n    // router = new Router();\n};\n"})}),"\n",(0,d.jsxs)(r.ol,{start:"2",children:["\n",(0,d.jsx)(r.li,{children:"添加 http-proxy-middleware 依赖"}),"\n",(0,d.jsx)(r.li,{children:"添加代理路由相关配置"}),"\n"]}),"\n",(0,d.jsx)(r.pre,{children:(0,d.jsx)(r.code,{className:"language-js",children:'/* eslint-disable filenames/match-exported */\nconst { createProxyMiddleware } = require("http-proxy-middleware");\n\nmodule.exports = function expressMiddleware (router) {\n  router.use(\'/api\', createProxyMiddleware({\n    target: "http://localhost:8000",\n    changeOrigin: true\n  }))\n}\n'})}),"\n",(0,d.jsxs)(r.p,{children:["相关 issue 链接：",(0,d.jsx)(r.a,{href:"https://github.com/storybookjs/storybook/issues/11551",target:"_blank",rel:"noopener noreferrer",children:"#11551"}),"。"]}),"\n",(0,d.jsxs)(r.h2,{id:"修改存在-story-文件的目录",children:["修改存在 Story 文件的目录",(0,d.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#修改存在-story-文件的目录",children:"#"})]}),"\n",(0,d.jsxs)(r.p,{children:["目前暂时无法修改存放 Story 文件的目录，仅对 ",(0,d.jsx)(r.code,{children:"your-project/stories"})," 目录下的 ",(0,d.jsx)(r.code,{children:"*.stories.(t|j)s(x)"}),"、",(0,d.jsx)(r.code,{children:"*.stories.md(x)"})," 文件识别为 Story 文件。"]})]})}(n=globalThis).__RSPRESS_PAGE_META||(n.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["zh%2Fguide%2Ffaq%2Fstorybook.mdx"]={toc:[{text:"支持 Storybook v7",id:"支持-storybook-v7",depth:2},{text:"使用 Storybook Addon 或者其他配置不生效",id:"使用-storybook-addon-或者其他配置不生效",depth:2},{text:"Cannot find module \\'react-dom/package.json",id:"cannot-find-module-react-dompackagejson",depth:2},{text:"报错后，看不到具体报错信息",id:"报错后看不到具体报错信息",depth:2},{text:"Couldn\\'t find any stories is your Storybook",id:"couldnt-find-any-stories-is-your-storybook",depth:2},{text:"Storybook 添加 Proxy 功能",id:"storybook-添加-proxy-功能",depth:2},{text:"修改存在 Story 文件的目录",id:"修改存在-story-文件的目录",depth:2}],title:"Storybook 相关问题",frontmatter:{}};var c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=Object.assign({},(0,i.useMDXComponents)(),e.components).wrapper;return r?(0,d.jsx)(r,(0,t._)((0,s._)({},e),{children:(0,d.jsx)(l,(0,s._)({},e))})):l(e)}}}]);