(self.webpackChunk_modern_js_module_tools_docs=self.webpackChunk_modern_js_module_tools_docs||[]).push([["9675"],{89746:function(e,o,r){"use strict";r.r(o),r.d(o,{default:function(){return c}});var n=r("15169"),s=r("43932"),t=r("9880"),i=r("23169");function a(e){return(0,t.jsx)(t.Fragment,{})}function d(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=Object.assign({},(0,i.useMDXComponents)(),e.components).wrapper;return o?(0,t.jsx)(o,(0,s._)((0,n._)({},e),{children:(0,t.jsx)(a,(0,n._)({},e))})):a(e)}var c=d;d.__RSPRESS_PAGE_META={},d.__RSPRESS_PAGE_META["en%2Fcomponents%2Ffaq-storybook.mdx"]={toc:[],title:""}},3064:function(e,o,r){"use strict";r.r(o),r.d(o,{default:function(){return l}});var n=r("15169"),s=r("43932"),t=r("9880"),i=r("23169"),a=r("89746");function d(e){var o=Object.assign({h1:"h1",a:"a",h2:"h2",p:"p",code:"code",ul:"ul",li:"li",pre:"pre",ol:"ol",img:"img"},(0,i.useMDXComponents)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(o.h1,{id:"storybook-faq",children:["Storybook FAQ",(0,t.jsx)(o.a,{className:"header-anchor","aria-hidden":"true",href:"#storybook-faq",children:"#"})]}),"\n","\n",(0,t.jsx)(a.default,{}),"\n",(0,t.jsxs)(o.h2,{id:"storybook-v7-support",children:["Storybook v7 Support",(0,t.jsx)(o.a,{className:"header-anchor","aria-hidden":"true",href:"#storybook-v7-support",children:"#"})]}),"\n",(0,t.jsx)(o.p,{children:"Storybook v7 does not support it yet. Rspack builds are currently planned to be supported in Storybook v7, so progress will be slower."}),"\n",(0,t.jsxs)(o.p,{children:["Related Issue: ",(0,t.jsx)(o.a,{href:"https://github.com/web-infra-dev/modern.js/issues/3376",target:"_blank",rel:"noopener noreferrer",children:"#3376"}),"."]}),"\n",(0,t.jsxs)(o.h2,{id:"using-storybook-addon-or-other-configurations-does-not-work",children:["Using Storybook Addon or other configurations does not work",(0,t.jsx)(o.a,{className:"header-anchor","aria-hidden":"true",href:"#using-storybook-addon-or-other-configurations-does-not-work",children:"#"})]}),"\n",(0,t.jsx)(o.p,{children:"Modern.js Module is currently using Storybook version v6, if you are using Addon version v7 you may not be able to get the addon to work."}),"\n",(0,t.jsxs)(o.p,{children:["In addition to the Addon, other configurations may also have differences. For example, if you modify the ",(0,t.jsx)(o.code,{children:"preview.js"})," configuration file, Storybook v6 is written differently than v7:"]}),"\n",(0,t.jsxs)(o.ul,{children:["\n",(0,t.jsxs)(o.li,{children:["v6\uFF1A",(0,t.jsx)(o.a,{href:"https://storybook.js.org/docs/6.5/react/writing-stories/decorators#global-decorators",target:"_blank",rel:"noopener noreferrer",children:"Document"})]}),"\n",(0,t.jsxs)(o.li,{children:["v7\uFF1A",(0,t.jsx)(o.a,{href:"https://storybook.js.org/docs/react/writing-stories/decorators#global-decorators",target:"_blank",rel:"noopener noreferrer",children:"Document"})]}),"\n"]}),"\n",(0,t.jsxs)(o.h2,{id:"cannot-find-module-react-dompackagejson",children:["Cannot find module \\'react-dom/package.json",(0,t.jsx)(o.a,{className:"header-anchor","aria-hidden":"true",href:"#cannot-find-module-react-dompackagejson",children:"#"})]}),"\n",(0,t.jsx)(o.p,{children:"When debug Storybook, the following problem occurs:"}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-bash",children:"ERR! Error: Cannot find module 'react-dom/package.json'\n"})}),"\n",(0,t.jsx)(o.p,{children:"You can install the react-dom dependency in the project."}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-json",children:'{\n    "devDependencies": {\n        "react-dom": "^17"\n    }\n}\n'})}),"\n",(0,t.jsxs)(o.h2,{id:"unable-to-locate-the-specific-error-message",children:["Unable to locate the specific error message",(0,t.jsx)(o.a,{className:"header-anchor","aria-hidden":"true",href:"#unable-to-locate-the-specific-error-message",children:"#"})]}),"\n",(0,t.jsx)(o.p,{children:"Solutions:"}),"\n",(0,t.jsxs)(o.ol,{children:["\n",(0,t.jsxs)(o.li,{children:["Find ",(0,t.jsx)(o.code,{children:"@storybook/core-server/dist/cjs/dev-server.js"})]}),"\n",(0,t.jsxs)(o.li,{children:["Find this code: ",(0,t.jsx)(o.code,{children:"var _await$Promise$all = await Promise.all([preview, manager,"}),"."]}),"\n",(0,t.jsx)(o.li,{children:"Modify it\uFF1A"}),"\n"]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-js",children:"var _await$Promise$all = await Promise.all([\n    preview.catch(e => console.info(e)),\n    manager // TODO #13083 Restore this when compiling the preview is fast enough\n  // .then((result) => {\n  //   if (!options.ci && !options.smokeTest) openInBrowser(address);\n  //   return result;\n  // })\n  .catch(previewBuilder.bail)]),\n      _await$Promise$all2 = _slicedToArray(_await$Promise$all, 2),\n      previewResult = _await$Promise$all2[0],\n      managerResult = _await$Promise$all2[1]; // TODO #13083 Remove this when compiling the preview is fast enough\n"})}),"\n",(0,t.jsxs)(o.h2,{id:"cant-find-any-stories-is-your-storybook",children:["Can`t find any stories is your Storybook",(0,t.jsx)(o.a,{className:"header-anchor","aria-hidden":"true",href:"#cant-find-any-stories-is-your-storybook",children:"#"})]}),"\n",(0,t.jsx)(o.p,{children:(0,t.jsx)(o.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/shylnyhaeh7uldvivhn/01719a11-1939-4009-9317-5e2b491ae52f.png",alt:"storybook-error"})}),"\n",(0,t.jsx)(o.p,{children:"When you get a problem like this, you can first open the browser console and there should be some error messages. You can use the error messages to deduce if there is a problem in the code you are writing that is causing Storybook to not work properly."}),"\n",(0,t.jsxs)(o.h2,{id:"storybook-adds-proxy-functionality",children:["Storybook Adds Proxy Functionality",(0,t.jsx)(o.a,{className:"header-anchor","aria-hidden":"true",href:"#storybook-adds-proxy-functionality",children:"#"})]}),"\n",(0,t.jsx)(o.p,{children:"Storybook does not provide a solution for this, but there is one in the Storybook Issue. In the Modern.js Module, you can:"}),"\n",(0,t.jsxs)(o.ol,{children:["\n",(0,t.jsxs)(o.li,{children:["Add the ",(0,t.jsx)(o.code,{children:"config/storybook/middleware.js"})," file and initialize the following:"]}),"\n"]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-js",children:"/* eslint-disable filenames/match-exported */\nmodule.exports = function expressMiddleware(router) {\n    // router is express router\n    // import { Router } from 'express'\n    // router = new Router();\n};\n"})}),"\n",(0,t.jsxs)(o.ol,{start:"2",children:["\n",(0,t.jsxs)(o.li,{children:["add ",(0,t.jsx)(o.code,{children:"http-proxy-middleware"})," dependency"]}),"\n",(0,t.jsx)(o.li,{children:"Add proxy routing-related configuration"}),"\n"]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-js",children:'/* eslint-disable filenames/match-exported */\nconst { createProxyMiddleware } = require("http-proxy-middleware");\n\nmodule.exports = function expressMiddleware (router) {\n  router.use(\'/api\', createProxyMiddleware({\n    target: "http://localhost:8000",\n    changeOrigin: true\n  }))\n}\n'})}),"\n",(0,t.jsxs)(o.p,{children:["Link\uFF1A",(0,t.jsx)(o.a,{href:"https://github.com/storybookjs/storybook/issues/11551",target:"_blank",rel:"noopener noreferrer",children:"https://github.com/storybookjs/storybook/issues/11551"})]}),"\n",(0,t.jsxs)(o.h2,{id:"modify-the-directory-where-the-story-file-exists",children:["Modify the directory where the Story file exists",(0,t.jsx)(o.a,{className:"header-anchor","aria-hidden":"true",href:"#modify-the-directory-where-the-story-file-exists",children:"#"})]}),"\n",(0,t.jsxs)(o.p,{children:["The directory where Story files are stored cannot be modified at the moment, only the ",(0,t.jsx)(o.code,{children:"*.stories.(t|j)s(x)"})," and ",(0,t.jsx)(o.code,{children:"*.stories.md(x)"})," files in the ",(0,t.jsx)(o.code,{children:"your-project/stories"})," directory are recognized as Story files."]})]})}function c(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=Object.assign({},(0,i.useMDXComponents)(),e.components).wrapper;return o?(0,t.jsx)(o,(0,s._)((0,n._)({},e),{children:(0,t.jsx)(d,(0,n._)({},e))})):d(e)}var l=c;c.__RSPRESS_PAGE_META={},c.__RSPRESS_PAGE_META["en%2Fguide%2Ffaq%2Fstorybook.mdx"]={toc:[{text:"Storybook v7 Support",id:"storybook-v7-support",depth:2},{text:"Using Storybook Addon or other configurations does not work",id:"using-storybook-addon-or-other-configurations-does-not-work",depth:2},{text:"Cannot find module \\\\'react-dom/package.json",id:"cannot-find-module-react-dompackagejson",depth:2},{text:"Unable to locate the specific error message",id:"unable-to-locate-the-specific-error-message",depth:2},{text:"Can`t find any stories is your Storybook",id:"cant-find-any-stories-is-your-storybook",depth:2},{text:"Storybook Adds Proxy Functionality",id:"storybook-adds-proxy-functionality",depth:2},{text:"Modify the directory where the Story file exists",id:"modify-the-directory-where-the-story-file-exists",depth:2}],title:"Storybook FAQ"}}}]);