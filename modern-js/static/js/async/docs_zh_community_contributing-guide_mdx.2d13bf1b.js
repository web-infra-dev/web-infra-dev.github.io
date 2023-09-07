(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_community_contributing-guide_mdx"],{37829:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return l}});var s,h=r("15169"),a=r("43932"),d=r("9880"),c=r("23169");function i(e){var n=Object.assign({h1:"h1",a:"a",p:"p",hr:"hr",h2:"h2",h3:"h3",pre:"pre",code:"code",ul:"ul",li:"li",blockquote:"blockquote",ol:"ol"},(0,c.useMDXComponents)(),e.components);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.h1,{id:"\u8D21\u732E\u6307\u5357",children:["\u8D21\u732E\u6307\u5357",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u8D21\u732E\u6307\u5357",children:"#"})]}),"\n",(0,d.jsx)(n.p,{children:"\u611F\u8C22\u4F60\u6709\u5174\u8DA3\u4E3A Modern.js \u505A\u8D21\u732E\uFF01\u5728\u5F00\u59CB\u4F60\u7684\u8D21\u732E\u4E4B\u524D\uFF0C\u8BF7\u82B1\u51E0\u5206\u949F\u65F6\u95F4\u9605\u8BFB\u4EE5\u4E0B\u6307\u5357\u3002"}),"\n",(0,d.jsx)(n.hr,{}),"\n",(0,d.jsxs)(n.h2,{id:"\u8BBE\u7F6E\u5F00\u53D1\u73AF\u5883",children:["\u8BBE\u7F6E\u5F00\u53D1\u73AF\u5883",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u8BBE\u7F6E\u5F00\u53D1\u73AF\u5883",children:"#"})]}),"\n",(0,d.jsxs)(n.h3,{id:"fork-\u4ED3\u5E93",children:["Fork \u4ED3\u5E93",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#fork-\u4ED3\u5E93",children:"#"})]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.a,{href:"https://help.github.com/articles/fork-a-repo/",target:"_blank",rel:"noopener noreferrer",children:"Fork"})," Modern.js \u4ED3\u5E93\u5230\u4F60\u7684 GitHub \u8D26\u6237\uFF0C\u7136\u540E ",(0,d.jsx)(n.a,{href:"https://help.github.com/articles/cloning-a-repository/",target:"_blank",rel:"noopener noreferrer",children:"clone"})," \u5230\u4F60\u7684\u672C\u5730\u3002"]}),"\n",(0,d.jsxs)(n.h3,{id:"\u5B89\u88C5-nodejs",children:["\u5B89\u88C5 Node.js",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u5B89\u88C5-nodejs",children:"#"})]}),"\n",(0,d.jsx)(n.p,{children:"\u6211\u4EEC\u63A8\u8350\u4F7F\u7528 Node.js 18\u3002\u4F60\u53EF\u4EE5\u901A\u8FC7\u4EE5\u4E0B\u547D\u4EE4\u67E5\u770B\u5F53\u524D\u4F7F\u7528\u7684 Node.js \u7248\u672C\uFF1A"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:"node -v\n"})}),"\n",(0,d.jsxs)(n.p,{children:["\u5982\u679C\u4F60\u5F53\u524D\u73AF\u5883\u6CA1\u6709\u5B89\u88C5 Node.js\uFF0C\u53EF\u4EE5\u4F7F\u7528 ",(0,d.jsx)(n.a,{href:"https://github.com/nvm-sh/nvm",target:"_blank",rel:"noopener noreferrer",children:"nvm"}),"\u6216\u8005 ",(0,d.jsx)(n.a,{href:"https://github.com/Schniz/fnm",target:"_blank",rel:"noopener noreferrer",children:"fnm"})," \u6765\u5B89\u88C5\u5B83\u3002"]}),"\n",(0,d.jsx)(n.p,{children:"\u4EE5\u4E0B\u662F\u5982\u4F55\u901A\u8FC7 nvm \u5B89\u88C5 Node.js 18 LTS \u7248\u672C\u7684\u793A\u4F8B\uFF1A"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:"# \u5B89\u88C5 Node.js 18 \u7684 LTS \u7248\u672C\nnvm install 18 --lts\n\n# \u5C06\u65B0\u5B89\u88C5\u7684 Node.js 18 \u8BBE\u4E3A\u9ED8\u8BA4\u7248\u672C\nnvm alias default 18\n\n# \u5207\u6362\u5230\u65B0\u5B89\u88C5\u7684 Node.js 18\nnvm use 18\n"})}),"\n",(0,d.jsxs)(n.h3,{id:"\u5B89\u88C5-pnpm",children:["\u5B89\u88C5 pnpm",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u5B89\u88C5-pnpm",children:"#"})]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:"# \u4F7F\u7528 corepack \u542F\u7528 pnpm\uFF0C\u4EC5\u5728 Node.js >= `v14.19.0` \u4E0A\u53EF\u7528\ncorepack enable\n"})}),"\n",(0,d.jsxs)(n.h3,{id:"\u5B89\u88C5\u4F9D\u8D56",children:["\u5B89\u88C5\u4F9D\u8D56",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u5B89\u88C5\u4F9D\u8D56",children:"#"})]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-sh",children:"pnpm install\n"})}),"\n",(0,d.jsx)(n.p,{children:"\u8FD9\u5C06\u5B8C\u6210\uFF1A"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"\u5B89\u88C5\u6240\u6709\u4F9D\u8D56\u9879"}),"\n",(0,d.jsx)(n.li,{children:"\u5728 monorepo \u4E2D\u7684 packages \u4E4B\u95F4\u521B\u5EFA symlinks"}),"\n",(0,d.jsxs)(n.li,{children:["\u8FD0\u884C ",(0,d.jsx)(n.code,{children:"prepare"})," \u811A\u672C\u6765\u6784\u5EFA\u6240\u6709\u5305\uFF08\u8FD9\u5C06\u9700\u8981\u4E00\u4E9B\u65F6\u95F4\uFF0C\u4F46\u53EF\u4EE5\u4FDD\u8BC1\u6240\u6709\u5305\u90FD\u88AB\u6B63\u786E\u6784\u5EFA\uFF09"]}),"\n"]}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsx)(n.p,{children:"\u5728\u6B64\u4E4B\u540E\uFF0C\u4F60\u901A\u5E38\u4E0D\u9700\u8981\u4E00\u6B21\u6027\u6784\u5EFA\u6240\u6709 packages\u3002\u5982\u679C\u4F60\u6B63\u5728\u5F00\u53D1\u7684\u65B0\u529F\u80FD\u4F9D\u8D56\u53E6\u4E00\u4E2A package \u7684\u6700\u65B0\u4EE3\u7801\uFF0C\u901A\u5E38\u53EA\u6784\u5EFA\u6307\u5B9A\u7684 package \u5C31\u8DB3\u591F\u4E86\u3002"}),"\n"]}),"\n",(0,d.jsxs)(n.h3,{id:"\u8BBE\u7F6E-git-\u90AE\u7BB1",children:["\u8BBE\u7F6E Git \u90AE\u7BB1",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u8BBE\u7F6E-git-\u90AE\u7BB1",children:"#"})]}),"\n",(0,d.jsxs)(n.p,{children:["\u8BF7\u786E\u4FDD\u5728 ",(0,d.jsx)(n.code,{children:"<https://github.com/settings/emails>"})," \u4E2D\u8BBE\u7F6E\u4E86\u7535\u5B50\u90AE\u4EF6\uFF0C\u5F53\u4F60\u63D0\u4EA4 Pull Request \u65F6\u5C06\u9700\u8981\u5B83\u3002"]}),"\n",(0,d.jsx)(n.p,{children:"\u68C0\u67E5\u4F60\u7684 git \u5BA2\u6237\u7AEF\u662F\u5426\u5DF2\u914D\u7F6E\u90AE\u7BB1\uFF1A"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-sh",children:"git config --list | grep email\n"})}),"\n",(0,d.jsx)(n.p,{children:"\u5168\u5C40\u8BBE\u7F6E\u90AE\u7BB1\uFF1A"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-sh",children:'git config --global user.email "SOME_EMAIL@example.com"\n'})}),"\n",(0,d.jsx)(n.p,{children:"\u9488\u5BF9\u672C\u5730\u4ED3\u5E93\u8BBE\u7F6E\u90AE\u7BB1\uFF1A"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-sh",children:'git config user.email "SOME_EMAIL@example.com"\n'})}),"\n",(0,d.jsx)(n.hr,{}),"\n",(0,d.jsxs)(n.h2,{id:"\u4EE3\u7801\u53D8\u66F4\u548C\u6784\u5EFA",children:["\u4EE3\u7801\u53D8\u66F4\u548C\u6784\u5EFA",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u4EE3\u7801\u53D8\u66F4\u548C\u6784\u5EFA",children:"#"})]}),"\n",(0,d.jsx)(n.p,{children:"\u5F53\u4F60\u5728 fork \u7684\u4ED3\u5E93\u4E2D\u8BBE\u7F6E\u5B8C\u672C\u5730\u5F00\u53D1\u73AF\u5883\u540E\uFF0C\u6211\u4EEC\u5C31\u53EF\u4EE5\u5F00\u59CB\u5F00\u53D1\u4E86\u3002"}),"\n",(0,d.jsxs)(n.h3,{id:"\u521B\u5EFA\u4E00\u4E2A\u65B0\u5206\u652F",children:["\u521B\u5EFA\u4E00\u4E2A\u65B0\u5206\u652F",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u521B\u5EFA\u4E00\u4E2A\u65B0\u5206\u652F",children:"#"})]}),"\n",(0,d.jsx)(n.p,{children:"\u5EFA\u8BAE\u5728\u4E00\u4E2A\u65B0\u7684\u5206\u652F\u4E0A\u5F00\u53D1\uFF0C\u8FD9\u6837\u4FBF\u4E8E\u540E\u7EED\u63D0\u4EA4 pull request\uFF1A"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-sh",children:"git checkout -b MY_BRANCH_NAME\n"})}),"\n",(0,d.jsxs)(n.h3,{id:"\u6784\u5EFA-package",children:["\u6784\u5EFA Package",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u6784\u5EFA-package",children:"#"})]}),"\n",(0,d.jsxs)(n.p,{children:["\u8981\u6784\u5EFA\u4F60\u8981\u66F4\u6539\u7684 package\uFF0C\u9996\u5148\u6253\u5F00 package \u76EE\u5F55\uFF0C\u7136\u540E\u6267\u884C ",(0,d.jsx)(n.code,{children:"build"})," \u547D\u4EE4\uFF1A"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-sh",children:"# \u5C06 some-path \u66FF\u6362\u4E3A\u4F60\u8981\u6784\u5EFA\u7684 package \u7684\u8DEF\u5F84\ncd ./packages/some-package\npnpm run build\n"})}),"\n",(0,d.jsxs)(n.p,{children:["\u6B64\u5916\uFF0C\u4F60\u53EF\u4EE5\u4F7F\u7528 ",(0,d.jsx)(n.code,{children:"--filter"})," \u9009\u9879\u4ECE\u4ED3\u5E93\u6839\u76EE\u5F55\u6765\u6784\u5EFA\u6307\u5B9A\u7684 package\uFF1A"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-sh",children:"pnpm run --filter @modern-js/some-package build\n"})}),"\n",(0,d.jsx)(n.p,{children:"\u6784\u5EFA\u6240\u6709\u5305\uFF1A"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-sh",children:"pnpm run prepare\n"})}),"\n",(0,d.jsxs)(n.p,{children:["\u5982\u679C\u4F60\u9700\u8981\u6E05\u7406\u9879\u76EE\u4E2D\u7684\u6240\u6709 ",(0,d.jsx)(n.code,{children:"node_modules/*"}),"\uFF0C\u6267\u884C ",(0,d.jsx)(n.code,{children:"reset"})," \u547D\u4EE4\uFF1A"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-sh",children:"pnpm run reset\n"})}),"\n",(0,d.jsx)(n.hr,{}),"\n",(0,d.jsxs)(n.h2,{id:"\u6D4B\u8BD5",children:["\u6D4B\u8BD5",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u6D4B\u8BD5",children:"#"})]}),"\n",(0,d.jsxs)(n.h3,{id:"\u6DFB\u52A0\u65B0\u6D4B\u8BD5",children:["\u6DFB\u52A0\u65B0\u6D4B\u8BD5",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u6DFB\u52A0\u65B0\u6D4B\u8BD5",children:"#"})]}),"\n",(0,d.jsx)(n.p,{children:"\u5982\u679C\u4F60\u8FDB\u884C\u4E86 bugfix\uFF0C\u6216\u8005\u6DFB\u52A0\u4E86\u9700\u8981\u6D4B\u8BD5\u7684\u4EE3\u7801\uFF0C\u8BF7\u6DFB\u52A0\u4E00\u4E9B\u6D4B\u8BD5\u4EE3\u7801\u3002"}),"\n",(0,d.jsxs)(n.p,{children:["\u4F60\u53EF\u4EE5\u5728 ",(0,d.jsx)(n.code,{children:"<PACKAGE_DIR>/tests"})," \u6587\u4EF6\u5939\u4E2D\u6DFB\u52A0\u5355\u5143\u6D4B\u8BD5\u7528\u4F8B\u3002\u6D4B\u8BD5\u8BED\u6CD5\u57FA\u4E8E ",(0,d.jsx)(n.a,{href:"https://jestjs.io/",target:"_blank",rel:"noopener noreferrer",children:"Jest"})," \u548C ",(0,d.jsx)(n.a,{href:"https://vitest.dev/",target:"_blank",rel:"noopener noreferrer",children:"Vitest"}),"\u3002"]}),"\n",(0,d.jsxs)(n.h3,{id:"\u8FD0\u884C\u5355\u5143\u6D4B\u8BD5",children:["\u8FD0\u884C\u5355\u5143\u6D4B\u8BD5",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u8FD0\u884C\u5355\u5143\u6D4B\u8BD5",children:"#"})]}),"\n",(0,d.jsx)(n.p,{children:"\u5728\u63D0\u4EA4 pull request \u4E4B\u524D\uFF0C\u4E3A\u4E86\u786E\u4FDD\u672C\u6B21\u53D8\u66F4\u6CA1\u6709\u5F15\u5165\u7F3A\u9677\uFF0C\u4F60\u53EF\u4EE5\u901A\u8FC7\u6267\u884C\u4EE5\u4E0B\u547D\u4EE4\u8FD0\u884C\u5355\u5143\u6D4B\u8BD5\uFF1A"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-sh",children:"pnpm run test\n"})}),"\n",(0,d.jsxs)(n.p,{children:["\u4F60\u4E5F\u53EF\u4EE5\u4F7F\u7528 ",(0,d.jsx)(n.code,{children:"--filter"})," \u9009\u9879\u8FD0\u884C\u5355\u4E2A\u5305\u7684\u5355\u5143\u6D4B\u8BD5\uFF1A"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-sh",children:"pnpm run --filter @modern-js/some-package test\n"})}),"\n",(0,d.jsxs)(n.h3,{id:"\u8FD0\u884C-e2e-\u6D4B\u8BD5",children:["\u8FD0\u884C E2E \u6D4B\u8BD5",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u8FD0\u884C-e2e-\u6D4B\u8BD5",children:"#"})]}),"\n",(0,d.jsx)(n.p,{children:"\u9664\u4E86\u5355\u5143\u6D4B\u8BD5\u4E4B\u5916\uFF0CModern.js \u4ED3\u5E93\u8FD8\u5305\u62EC\u7AEF\u5230\u7AEF (E2E) \u6D4B\u8BD5\uFF0C\u7528\u4E8E\u68C0\u67E5\u6574\u4E2A\u5E94\u7528\u7A0B\u5E8F\u7684\u529F\u80FD\u3002"}),"\n",(0,d.jsxs)(n.p,{children:["\u4F60\u53EF\u4EE5\u6267\u884C ",(0,d.jsx)(n.code,{children:"test:e2e"})," \u547D\u4EE4\u6765\u8FD0\u884C E2E \u6D4B\u8BD5\uFF1A"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-sh",children:"pnpm run test:e2e\n"})}),"\n",(0,d.jsx)(n.p,{children:"\u5982\u679C\u9700\u8981\u8FD0\u884C\u6307\u5B9A\u7684\u6D4B\u8BD5\uFF0C\u53EF\u4EE5\u6DFB\u52A0\u5173\u952E\u5B57\u8FDB\u884C\u8FC7\u6EE4\uFF1A"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-sh",children:"# \u53EA\u8FD0\u884C\u5E26\u6709 copy-assets \u5173\u952E\u8BCD\u7684\u6D4B\u8BD5\u7528\u4F8B\nnpx jest copy-assets\n"})}),"\n",(0,d.jsx)(n.hr,{}),"\n",(0,d.jsxs)(n.h2,{id:"linting",children:["Linting",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#linting",children:"#"})]}),"\n",(0,d.jsx)(n.p,{children:"\u4E3A\u4E86\u5E2E\u52A9\u4FDD\u6301\u4EE3\u7801\u98CE\u683C\u7684\u4E00\u81F4\u6027\u548C\u53EF\u8BFB\u6027\uFF0C\u6211\u4EEC\u4F7F\u7528 ESLint \u5BF9\u4EE3\u7801\u8FDB\u884C\u6821\u9A8C\u3002"}),"\n",(0,d.jsx)(n.p,{children:"\u4F60\u53EF\u4EE5\u6267\u884C\u4EE5\u4E0B\u547D\u4EE4\u6765\u8FD0\u884C Linter\uFF1A"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-sh",children:"pnpm run lint\n"})}),"\n",(0,d.jsx)(n.hr,{}),"\n",(0,d.jsxs)(n.h2,{id:"\u6587\u6863",children:["\u6587\u6863",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u6587\u6863",children:"#"})]}),"\n",(0,d.jsx)(n.p,{children:"\u76EE\u524D Modern.js \u63D0\u4F9B\u82F1\u6587\u548C\u4E2D\u6587\u6587\u6863\u3002\u5982\u679C\u4F60\u719F\u6089\u4E2D\u6587\uFF0C\u8BF7\u540C\u65F6\u66F4\u65B0\u4E2D\u82F1\u6587\u6587\u6863\u3002\u5426\u5219\uFF0C\u53EA\u9700\u66F4\u65B0\u82F1\u6587\u6587\u6863\u5373\u53EF\u3002"}),"\n",(0,d.jsxs)(n.p,{children:["\u4F60\u53EF\u4EE5\u5728 ",(0,d.jsx)(n.code,{children:"packages/document"})," \u6587\u4EF6\u5939\u4E2D\u627E\u5230\u6240\u6709\u6587\u6863\uFF1A"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-sh",children:"root\n\u2514\u2500 packages\n   \u2514\u2500 document\n       \u251C\u2500 builder-doc    # Modern.js Builder \u6587\u6863\n       \u251C\u2500 main-doc       # Modern.js Framework \u6587\u6863\n       \u2514\u2500 module-doc     # Modern.js Module \u6587\u6863\n"})}),"\n",(0,d.jsxs)(n.p,{children:["\u6587\u6863\u7AD9\u4F7F\u7528 Rspress \u6784\u5EFA\uFF0C\u6587\u6863\u5185\u5BB9\u53EF\u4EE5\u4F7F\u7528 markdown \u6216 mdx \u8BED\u6CD5\u7F16\u5199\u3002\u8BE6\u7EC6\u4F7F\u7528\u65B9\u6CD5\u53EF\u4EE5\u53C2\u8003 ",(0,d.jsx)(n.a,{href:"https://rspress.dev/",target:"_blank",rel:"noopener noreferrer",children:"Rspress \u6587\u6863"}),"\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:["Rspress \u7684\u6E90\u4EE3\u7801\u53EF\u4EE5\u5728 ",(0,d.jsx)(n.a,{href:"https://github.com/web-infra-dev/rspress",target:"_blank",rel:"noopener noreferrer",children:"\u8FD9\u4E2A\u4ED3\u5E93"})," \u4E2D\u627E\u5230\u3002"]}),"\n",(0,d.jsx)(n.hr,{}),"\n",(0,d.jsxs)(n.h2,{id:"\u63D0\u4EA4\u53D8\u66F4",children:["\u63D0\u4EA4\u53D8\u66F4",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u63D0\u4EA4\u53D8\u66F4",children:"#"})]}),"\n",(0,d.jsxs)(n.h3,{id:"\u6DFB\u52A0-changeset",children:["\u6DFB\u52A0 Changeset",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u6DFB\u52A0-changeset",children:"#"})]}),"\n",(0,d.jsxs)(n.p,{children:["Modern.js \u4F7F\u7528 ",(0,d.jsx)(n.a,{href:"https://github.com/changesets/changesets",target:"_blank",rel:"noopener noreferrer",children:"Changesets"})," \u6765\u7BA1\u7406\u7248\u672C\u548C Changelog\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:["\u5982\u679C\u4F60\u4FEE\u6539\u4E86\u4E00\u4E9B\u5305\uFF0C\u5219\u9700\u8981\u4E3A\u672C\u6B21\u53D8\u66F4\u6DFB\u52A0\u4E00\u4E2A\u65B0\u7684\u53D8\u66F4\u96C6\u3002\u8BF7\u8FD0\u884C ",(0,d.jsx)(n.code,{children:"change"})," \u547D\u4EE4\u6765\u9009\u62E9\u66F4\u6539\u7684\u5305\u5E76\u6DFB\u52A0 changeset \u4FE1\u606F\u3002"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-sh",children:"pnpm run change\n"})}),"\n",(0,d.jsxs)(n.h3,{id:"\u63D0\u4EA4\u4F60\u7684\u53D8\u66F4",children:["\u63D0\u4EA4\u4F60\u7684\u53D8\u66F4",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u63D0\u4EA4\u4F60\u7684\u53D8\u66F4",children:"#"})]}),"\n",(0,d.jsxs)(n.p,{children:["\u63D0\u4EA4\u53D8\u66F4\u5230 fork \u540E\u7684\u4ED3\u5E93\uFF0C\u5E76 ",(0,d.jsx)(n.a,{href:"https://help.github.com/articles/creating-a-pull-request/",target:"_blank",rel:"noopener noreferrer",children:"\u521B\u5EFA pull request"}),"\u3002"]}),"\n",(0,d.jsxs)(n.h3,{id:"pr-\u6807\u9898\u683C\u5F0F",children:["PR \u6807\u9898\u683C\u5F0F",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#pr-\u6807\u9898\u683C\u5F0F",children:"#"})]}),"\n",(0,d.jsx)(n.p,{children:"PR \u6807\u9898\u7684\u683C\u5F0F\u9075\u5FAA Conventional Commits\u3002"}),"\n",(0,d.jsx)(n.p,{children:"\u4E00\u4E2A\u4F8B\u5B50\uFF1A"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:"feat(plugin-swc): \u6DFB\u52A0 `xxx` \u914D\u7F6E\u9879\n^ ^ ^\n| | |__ \u4E3B\u9898\n| |_______ \u8303\u56F4\n|____________ \u7C7B\u578B\n"})}),"\n",(0,d.jsx)(n.hr,{}),"\n",(0,d.jsxs)(n.h2,{id:"\u53D1\u5E03",children:["\u53D1\u5E03",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u53D1\u5E03",children:"#"})]}),"\n",(0,d.jsxs)(n.p,{children:["Modern.js \u4F7F\u7528 ",(0,d.jsx)(n.a,{href:"https://github.com/changesets/changesets",target:"_blank",rel:"noopener noreferrer",children:"Changesets"})," \u6765\u7BA1\u7406\u7248\u672C\u548C changelog\u3002"]}),"\n",(0,d.jsx)(n.p,{children:"\u4ED3\u5E93\u7684\u7EF4\u62A4\u8005\u53EF\u4EE5\u5C06\u6240\u6709\u5305\u7684\u65B0\u7248\u672C\u53D1\u5E03\u5230 npm\u3002"}),"\n",(0,d.jsx)(n.p,{children:"\u4EE5\u4E0B\u662F\u53D1\u5E03\u7684\u6B65\u9AA4\uFF08\u6211\u4EEC\u901A\u5E38\u4F7F\u7528 CI \u8FDB\u884C\u53D1\u5E03\uFF0C\u5E76\u907F\u514D\u5728\u672C\u5730\u53D1\u5E03 npm \u5305\uFF09\uFF1A"}),"\n",(0,d.jsxs)(n.ol,{children:["\n",(0,d.jsxs)(n.li,{children:["\u62C9\u53D6 ",(0,d.jsx)(n.code,{children:"main"})," \u5206\u652F\u7684\u6700\u65B0\u4EE3\u7801\u3002"]}),"\n",(0,d.jsx)(n.li,{children:"\u5B89\u88C5\u4F9D\u8D56\uFF1A"}),"\n"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-sh",children:"pnpm i\n"})}),"\n",(0,d.jsxs)(n.ol,{start:"3",children:["\n",(0,d.jsx)(n.li,{children:"\u6784\u5EFA packages\uFF1A"}),"\n"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-sh",children:"pnpm prepare\n"})}),"\n",(0,d.jsxs)(n.ol,{start:"4",children:["\n",(0,d.jsx)(n.li,{children:"\u5347\u7EA7\u7248\u672C\uFF1A"}),"\n"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-sh",children:"pnpm run bump\n"})}),"\n",(0,d.jsxs)(n.ol,{start:"5",children:["\n",(0,d.jsx)(n.li,{children:"\u63D0\u4EA4\u7248\u672C\u53D8\u66F4\u3002"}),"\n"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-sh",children:'git add .\ngit commit -m "Release va.b.c"\n'})})]})}(s=globalThis).__RSPRESS_PAGE_META||(s.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["zh%2Fcommunity%2Fcontributing-guide.mdx"]={toc:[{text:"\u8BBE\u7F6E\u5F00\u53D1\u73AF\u5883",id:"\u8BBE\u7F6E\u5F00\u53D1\u73AF\u5883",depth:2},{text:"Fork \u4ED3\u5E93",id:"fork-\u4ED3\u5E93",depth:3},{text:"\u5B89\u88C5 Node.js",id:"\u5B89\u88C5-nodejs",depth:3},{text:"\u5B89\u88C5 pnpm",id:"\u5B89\u88C5-pnpm",depth:3},{text:"\u5B89\u88C5\u4F9D\u8D56",id:"\u5B89\u88C5\u4F9D\u8D56",depth:3},{text:"\u8BBE\u7F6E Git \u90AE\u7BB1",id:"\u8BBE\u7F6E-git-\u90AE\u7BB1",depth:3},{text:"\u4EE3\u7801\u53D8\u66F4\u548C\u6784\u5EFA",id:"\u4EE3\u7801\u53D8\u66F4\u548C\u6784\u5EFA",depth:2},{text:"\u521B\u5EFA\u4E00\u4E2A\u65B0\u5206\u652F",id:"\u521B\u5EFA\u4E00\u4E2A\u65B0\u5206\u652F",depth:3},{text:"\u6784\u5EFA Package",id:"\u6784\u5EFA-package",depth:3},{text:"\u6D4B\u8BD5",id:"\u6D4B\u8BD5",depth:2},{text:"\u6DFB\u52A0\u65B0\u6D4B\u8BD5",id:"\u6DFB\u52A0\u65B0\u6D4B\u8BD5",depth:3},{text:"\u8FD0\u884C\u5355\u5143\u6D4B\u8BD5",id:"\u8FD0\u884C\u5355\u5143\u6D4B\u8BD5",depth:3},{text:"\u8FD0\u884C E2E \u6D4B\u8BD5",id:"\u8FD0\u884C-e2e-\u6D4B\u8BD5",depth:3},{text:"Linting",id:"linting",depth:2},{text:"\u6587\u6863",id:"\u6587\u6863",depth:2},{text:"\u63D0\u4EA4\u53D8\u66F4",id:"\u63D0\u4EA4\u53D8\u66F4",depth:2},{text:"\u6DFB\u52A0 Changeset",id:"\u6DFB\u52A0-changeset",depth:3},{text:"\u63D0\u4EA4\u4F60\u7684\u53D8\u66F4",id:"\u63D0\u4EA4\u4F60\u7684\u53D8\u66F4",depth:3},{text:"PR \u6807\u9898\u683C\u5F0F",id:"pr-\u6807\u9898\u683C\u5F0F",depth:3},{text:"\u53D1\u5E03",id:"\u53D1\u5E03",depth:2}],title:"\u8D21\u732E\u6307\u5357",frontmatter:{sidebar_position:3}};var l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,c.useMDXComponents)(),e.components).wrapper;return n?(0,d.jsx)(n,(0,a._)((0,h._)({},e),{children:(0,d.jsx)(i,(0,h._)({},e))})):i(e)}}}]);