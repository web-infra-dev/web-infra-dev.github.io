(self.webpackChunk_modern_js_module_tools_docs=self.webpackChunk_modern_js_module_tools_docs||[]).push([["6076"],{1745:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return c},frontmatter:function(){return h}});var d=r("15169"),s=r("43932"),o=r("9880"),i=r("23169");function l(e){var n=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",code:"code",pre:"pre",ul:"ul",li:"li",strong:"strong",div:"div",em:"em"},(0,i.useMDXComponents)(),e.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.h1,{id:"cli-\u547D\u4EE4",children:["CLI \u547D\u4EE4",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#cli-\u547D\u4EE4",children:"#"})]}),"\n",(0,o.jsx)(n.p,{children:"Modern.js Module \u9879\u76EE\u53EF\u4EE5\u4F7F\u7528\u7684 CLI \u547D\u4EE4\u5982\u4E0B\uFF1A"}),"\n",(0,o.jsxs)(n.h2,{id:"modern-build",children:[(0,o.jsx)(n.code,{children:"modern build"}),(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#modern-build",children:"#"})]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:'Usage: modern build [options]\n\n\u6784\u5EFA\u751F\u4EA7\u73AF\u5883\u4EA7\u7269\n\nOptions:\n  -w, --watch            \u4F7F\u7528\u76D1\u542C\u6A21\u5F0F\u6784\u5EFA\u4EE3\u7801\n  --tsconfig [tsconfig]  \u6307\u5B9A tsconfig.json \u6587\u4EF6\u7684\u8DEF\u5F84 (default:\n                         "./tsconfig.json")\n  --platform [platform]  \u6784\u5EFA\u6240\u6709\u6216\u8005\u6307\u5B9A\u5E73\u53F0\u7684\u4EA7\u7269\n  --no-dts               \u5173\u95ED DTS \u7C7B\u578B\u6587\u4EF6\u751F\u6210\u548C\u7C7B\u578B\u68C0\u67E5\n  --no-clear             \u5173\u95ED\u81EA\u52A8\u6E05\u9664\u4EA7\u7269\u8F93\u51FA\u76EE\u5F55\u7684\u884C\u4E3A\n  -h, --help             \u5C55\u793A\u5F53\u524D\u547D\u4EE4\u7684\u4FE1\u606F\n'})}),"\n",(0,o.jsxs)(n.p,{children:["\u5F53\u60F3\u8981\u542F\u52A8\u9879\u76EE\u6784\u5EFA\u7684\u65F6\u5019\uFF0C\u53EF\u4EE5\u6267\u884C ",(0,o.jsx)(n.code,{children:"modern build"})," \u547D\u4EE4\u3002\u5728\u4F7F\u7528\u8FD9\u4E2A\u547D\u4EE4\u7684\u65F6\u5019\uFF0C\u6211\u4EEC\u53EF\u4EE5\uFF1A"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\u5F53\u60F3\u8981\u4EE5\u89C2\u5BDF\u6A21\u5F0F\u542F\u52A8\u6784\u5EFA\u65F6\uFF0C\u4F7F\u7528 ",(0,o.jsx)(n.code,{children:"--watch"})," \u9009\u9879\u3002"]}),"\n",(0,o.jsxs)(n.li,{children:["\u5F53\u60F3\u8981\u6307\u5B9A\u9879\u76EE\u7F16\u8BD1\u8BFB\u53D6\u7684 TypeScript \u914D\u7F6E\u6587\u4EF6\u7684\u8DEF\u5F84\u65F6\uFF0C\u4F7F\u7528 ",(0,o.jsx)(n.code,{children:"build --tsconfig ./path/config.json"})," \u9009\u9879\u3002\u4F7F\u7528\u8BE5\u9009\u9879\u540E\uFF0C\u4F1A\u8986\u76D6\u6240\u6709 ",(0,o.jsx)(n.a,{href:"/api/config/build-config",children:(0,o.jsx)(n.code,{children:"buildConfig"})})," \u91CC ",(0,o.jsx)(n.a,{href:"/api/config/build-config",children:(0,o.jsx)(n.code,{children:"dts.tsconfigPath"})})," \u914D\u7F6E\u3002"]}),"\n",(0,o.jsxs)(n.li,{children:["\u5F53\u9700\u8981\u5173\u95ED\u9879\u76EE\u7684 DTS \u7C7B\u578B\u6587\u4EF6\u751F\u6210\u548C\u7C7B\u578B\u68C0\u67E5\u884C\u4E3A\u65F6\uFF0C\u53EF\u4EE5\u4F7F\u7528 ",(0,o.jsx)(n.code,{children:"--no-dts"})," \u9009\u9879\u3002",(0,o.jsx)(n.strong,{children:"\u6CE8\u610F\uFF1A\u7C7B\u578B\u6587\u4EF6\u7684\u751F\u6210\u4F9D\u8D56\u7C7B\u578B\u68C0\u67E5\u7684\u7ED3\u679C\u3002\u5982\u679C\u5173\u95ED\u4E86\u7C7B\u578B\u68C0\u67E5\uFF0C\u90A3\u4E48\u7C7B\u578B\u6587\u4EF6\u4E5F\u4E0D\u4F1A\u751F\u6210"}),"\u3002"]}),"\n",(0,o.jsxs)(n.li,{children:["\u5F53\u9700\u8981\u5173\u95ED\u81EA\u52A8\u6E05\u9664\u4EA7\u7269\u8F93\u51FA\u76EE\u5F55\u7684\u884C\u4E3A\u65F6\uFF0C\u53EF\u4EE5\u4F7F\u7528 ",(0,o.jsx)(n.code,{children:"--no-clear"})," \u9009\u9879\u3002"]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["\u9664\u4E86\u4EE5\u4E0A\u65B9\u5F0F\uFF0CModern.js Module \u8FD8\u652F\u6301 ",(0,o.jsx)(n.code,{children:"platform"})," \u6784\u5EFA\u6A21\u5F0F\uFF0C\u53EF\u4EE5\u7528\u4E8E\u6267\u884C\u5176\u4ED6\u5DE5\u5177\u7684\u6784\u5EFA\u4EFB\u52A1\u3002\u4F8B\u5982\uFF0C\u76EE\u524D\u5B98\u65B9\u652F\u6301\u5728\u5B89\u88C5\u4E86 ",(0,o.jsx)(n.code,{children:"@modern-js/plugin-storybook"})," \u63D2\u4EF6\u540E\uFF0C\u53EF\u4EE5\u901A\u8FC7\u6267\u884C ",(0,o.jsx)(n.code,{children:"modern build --platform"})," \u6216\u8005 ",(0,o.jsx)(n.code,{children:"modern build --platform storybook"})," \u547D\u4EE4\u542F\u52A8 Storybook \u6784\u5EFA\u4EFB\u52A1\u751F\u6210 Storybook \u4EA7\u7269\u3002"]}),"\n",(0,o.jsxs)(n.div,{className:"rspress-directive tip",children:[(0,o.jsx)(n.div,{className:"rspress-directive-title",children:"TIP"}),(0,o.jsx)(n.div,{className:"rspress-directive-content",children:(0,o.jsxs)(n.p,{children:["\u5728\u6267\u884C Storybook \u6784\u5EFA\u7684\u65F6\u5019\uFF0C\u5982\u679C\u9700\u8981\u8BFB\u53D6\u9879\u76EE\u7684\u6784\u5EFA\u4EA7\u7269\u3002\u90A3\u4E48",(0,o.jsxs)(n.strong,{children:["\u5728\u6267\u884C ",(0,o.jsx)(n.code,{children:"modern build --platform"})," \u547D\u4EE4\u542F\u52A8 Storybook \u6784\u5EFA\u4E4B\u524D\uFF0C\u4E0D\u8981\u5FD8\u8BB0\u5148\u6267\u884C ",(0,o.jsx)(n.code,{children:"modern build"})," \u547D\u4EE4\u786E\u4FDD\u9879\u76EE\u6784\u5EFA\u4EA7\u7269\u7684\u5B58\u5728"]}),"\u3002\n"]})})]}),"\n",(0,o.jsxs)(n.h2,{id:"modern-new",children:[(0,o.jsx)(n.code,{children:"modern new"}),(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#modern-new",children:"#"})]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"Usage: modern new [options]\n\n\u542F\u7528\u53EF\u9009\u529F\u80FD\n\nOptions:\n  -d, --debug            \u5F00\u542F Debug \u6A21\u5F0F\uFF0C\u6253\u5370\u8C03\u8BD5\u65E5\u5FD7\u4FE1\u606F (default: false)\n  -c, --config <config>  \u751F\u6210\u5668\u8FD0\u884C\u9ED8\u8BA4\u914D\u7F6E(JSON \u5B57\u7B26\u4E32)\n  --dist-tag <tag>       \u751F\u6210\u5668\u4F7F\u7528\u7279\u6B8A\u7684 npm Tag \u7248\u672C\n  --registry             \u751F\u6210\u5668\u8FD0\u884C\u8FC7\u7A0B\u4E2D\u5B9A\u5236 npm Registry\n  -h, --help             display help for command\n"})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"modern new"})," \u547D\u4EE4\u7528\u4E8E\u542F\u52A8\u5FAE\u751F\u6210\u5668\u529F\u80FD\uFF0C\u5B83\u53EF\u4EE5\u4E3A\u9879\u76EE\u542F\u7528\u9ED8\u8BA4\u6CA1\u6709\u63D0\u4F9B\u7684\u529F\u80FD\u3002"]}),"\n",(0,o.jsx)(n.p,{children:"\u76EE\u524D\u53EF\u4EE5\u5F00\u542F\u7684\u529F\u80FD\u6709\uFF1A"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Test \u6D4B\u8BD5"}),"\n",(0,o.jsx)(n.li,{children:"Storybook \u8C03\u8BD5"}),"\n",(0,o.jsx)(n.li,{children:"Tailwind CSS \u652F\u6301"}),"\n",(0,o.jsx)(n.li,{children:"Modern.js Runtime API"}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["\u5173\u4E8E\u8FD9\u4E9B\u529F\u80FD\uFF0C\u53EF\u4EE5\u901A\u8FC7",(0,o.jsx)(n.a,{href:"/guide/basic/use-micro-generator",children:"\u300C\u4F7F\u7528\u5FAE\u751F\u6210\u5668\u300D"})," \u7AE0\u8282\u4E86\u89E3\u66F4\u591A\u3002"]}),"\n",(0,o.jsxs)(n.h2,{id:"modern-dev",children:[(0,o.jsx)(n.code,{children:"modern dev"}),(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#modern-dev",children:"#"})]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"Usage: modern dev [options]\n\n\u8FD0\u884C\u548C\u8C03\u8BD5\u6A21\u5757\n\nOptions:\n  -h, --help             display help for command\n\nCommands:\n[dev-tools-subCommand]\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Modern.js Module \u63D0\u4F9B\u4E86\u4F7F\u7528\u8C03\u8BD5\u5DE5\u5177\u7684\u80FD\u529B\uFF0C\u53EF\u4EE5\u901A\u8FC7 ",(0,o.jsx)(n.code,{children:"modern dev"})," \u547D\u4EE4\u6765\u542F\u52A8\u3002\u4E0D\u8FC7\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u9ED8\u8BA4\u60C5\u51B5\u4E0B\u662F\u6CA1\u6709\u63D0\u4F9B\u8C03\u8BD5\u76F8\u5173\u7684\u63D2\u4EF6\uFF0C\u56E0\u6B64\u6B64\u65F6\u6267\u884C ",(0,o.jsx)(n.code,{children:"modern dev"})," \u4F1A\u63D0\u793A\uFF1A ",(0,o.jsx)(n.em,{children:'"No dev tools found available"'}),"\u3002"]}),"\n",(0,o.jsxs)(n.p,{children:["\u76EE\u524D\u5B98\u65B9\u652F\u6301\u7684\u8C03\u8BD5\u5DE5\u5177\u6709 ",(0,o.jsx)(n.a,{href:"https://storybook.js.org/",target:"_blank",rel:"noopener noreferrer",children:"Storybook"}),"\uFF0C\u56E0\u6B64\u5728\u4F60\u6267\u884C ",(0,o.jsx)(n.code,{children:"modern new"})," \u547D\u4EE4\u5F00\u542F\u5B83\u540E\uFF0C\u5C31\u53EF\u4EE5\u6267\u884C ",(0,o.jsx)(n.code,{children:"modern dev"})," \u6216\u8005 ",(0,o.jsx)(n.code,{children:"modern dev storybook"})," \u6267\u884C\u5B83\u3002"]}),"\n",(0,o.jsxs)(n.h2,{id:"modern-test",children:[(0,o.jsx)(n.code,{children:"modern test"}),(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#modern-test",children:"#"})]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"Usage: modern test [options]\n\nOptions:\n  -h, --help  display help for command\n"})}),"\n",(0,o.jsxs)(n.p,{children:["\u9700\u8981\u5148\u6267\u884C ",(0,o.jsx)(n.code,{children:"modern new"})," \u5F00\u542F\u6D4B\u8BD5\u529F\u80FD\uFF0C\u7136\u540E\u624D\u53EF\u4EE5\u6267\u884C ",(0,o.jsx)(n.code,{children:"modern test"})," \u547D\u4EE4\u3002\n",(0,o.jsx)(n.code,{children:"modern test"})," \u547D\u4EE4\u4F1A\u81EA\u52A8\u5C06 ",(0,o.jsx)(n.code,{children:"tests/*.test.(js|ts|jsx|tsx)"})," \u6587\u4EF6\u5F53\u505A\u6D4B\u8BD5\u7528\u4F8B\u8FD0\u884C\u3002"]}),"\n",(0,o.jsxs)(n.h2,{id:"modern-lint",children:[(0,o.jsx)(n.code,{children:"modern lint"}),(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#modern-lint",children:"#"})]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"Usage: modern lint [options] [...files]\n\nlint and fix source files\n\nOptions:\n  --no-fix    disable auto fix source file\n  -h, --help  display help for command\n"})}),"\n",(0,o.jsxs)(n.p,{children:["\u8FD0\u884C ",(0,o.jsx)(n.a,{href:"https://eslint.org/",target:"_blank",rel:"noopener noreferrer",children:"ESLint"})," \u68C0\u67E5\u4EE3\u7801\u8BED\u6CD5\u60C5\u51B5\u3002\u901A\u5E38\u60C5\u51B5\u4E0B\uFF0C\u6211\u4EEC\u53EA\u9700\u8981\u5728 ",(0,o.jsx)(n.code,{children:"git commit"})," \u9636\u6BB5\u901A\u8FC7 ",(0,o.jsx)(n.a,{href:"https://github.com/okonet/lint-staged",target:"_blank",rel:"noopener noreferrer",children:"lint-staged"})," \u68C0\u67E5\u672C\u6B21\u63D0\u4EA4\u4FEE\u6539\u7684\u90E8\u5206\u4EE3\u7801\u3002"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"--no-fix"})," \u53C2\u6570\u8BBE\u7F6E\u540E\u53EF\u4EE5\u5173\u95ED\u81EA\u52A8\u4FEE\u590D lint \u9519\u8BEF\u4EE3\u7801\u7684\u80FD\u529B\u3002"]}),"\n"]}),"\n",(0,o.jsxs)(n.h2,{id:"modern-change",children:[(0,o.jsx)(n.code,{children:"modern change"}),(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#modern-change",children:"#"})]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"Usage: modern change [options]\n\n\u521B\u5EFA\u53D8\u66F4\u96C6\n\nOptions:\n  --empty     \u521B\u5EFA\u7A7A\u53D8\u66F4\u96C6 (default: false)\n  --open      \u4F7F\u7528\u7F16\u8F91\u5668\u4E2D\u6253\u5F00\u521B\u5EFA\u7684\u53D8\u66F4\u96C6 (default: false)\n  -h, --help  display help for command\n"})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"modern change"})," \u547D\u4EE4\u7528\u4E8E\u751F\u6210 ",(0,o.jsx)(n.a,{href:"https://github.com/changesets/changesets",target:"_blank",rel:"noopener noreferrer",children:"changesets"})," \u9700\u8981\u7684 Markdown \u6587\u4EF6\u3002"]}),"\n",(0,o.jsxs)(n.h2,{id:"modern-pre",children:[(0,o.jsx)(n.code,{children:"modern pre"}),(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#modern-pre",children:"#"})]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"Usage: modern pre [options] <enter|exit> [tag]\n\n\u8FDB\u5165\u548C\u9000\u51FA\u9884\u53D1\u5E03\u6A21\u5F0F\n\nOptions:\n  -h, --help  display help for command\n"})}),"\n",(0,o.jsxs)(n.p,{children:["\u53EF\u4EE5\u4F7F\u7528 ",(0,o.jsx)(n.code,{children:"modern pre"})," \u547D\u4EE4\u5728\u6B63\u5F0F\u53D1\u5E03\u524D",(0,o.jsx)(n.a,{href:"https://github.com/atlassian/changesets/blob/main/docs/prereleases.md",target:"_blank",rel:"noopener noreferrer",children:"\u9884\u53D1\u5E03"}),"\u4E00\u4E2A\u7248\u672C\u3002"]}),"\n",(0,o.jsxs)(n.h2,{id:"modern-bump",children:[(0,o.jsx)(n.code,{children:"modern bump"}),(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#modern-bump",children:"#"})]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:'Usage: modern bump [options]\n\n\u4F7F\u7528\u53D8\u66F4\u96C6\u81EA\u52A8\u66F4\u65B0\u53D1\u5E03\u7248\u672C\u548C\u53D8\u66F4\u65E5\u5FD7\n\nOptions:\n  --canary       \u521B\u5EFA\u4E00\u4E2A\u9884\u53D1\u5E03\u7248\u672C\u8FDB\u884C\u6D4B\u8BD5 (default: false)\n  --preid <tag>  \u5728\u5BF9\u9884\u53D1\u5E03\u7248\u672C\u8FDB\u884C\u7248\u672C\u63A7\u5236\u65F6\u6307\u5B9A\u6807\u8BC6\u7B26 (default: "next")\n  --snapshot     \u521B\u5EFA\u4E00\u4E2A\u7279\u6B8A\u7248\u672C\u8FDB\u884C\u6D4B\u8BD5 (default: false)\n  -h, --help     display help for command\n'})}),"\n",(0,o.jsxs)(n.p,{children:["\u6309\u7167 ",(0,o.jsx)(n.a,{href:"https://github.com/changesets/changesets",target:"_blank",rel:"noopener noreferrer",children:"changesets"})," \u751F\u6210\u7684\u53D8\u66F4\u8BB0\u5F55\u7684 Markdown \u6587\u4EF6\u4FEE\u6539 ",(0,o.jsx)(n.code,{children:"package.json"})," \u4E2D\u7684\u7248\u672C\u53F7\uFF0C \u540C\u65F6\u751F\u6210 ",(0,o.jsx)(n.code,{children:"CHANGELOG.md"})," \u6587\u4EF6\u3002"]}),"\n",(0,o.jsxs)(n.h2,{id:"modern-release",children:[(0,o.jsx)(n.code,{children:"modern release"}),(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#modern-release",children:"#"})]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:'Usage: modern release [options]\n\n\u53D1\u5E03 npm \u5305\n\nOptions:\n  --tag <tag>       \u53D1\u5E03 npm \u5305\u4F7F\u7528\u7279\u5B9A\u7684 tag (default: "")\n  --ignore-scripts  \u53D1\u5E03\u65F6\u5FFD\u7565 package.json \u4E2D\u7684 scripts \u547D\u4EE4\uFF0C\u4EC5\u652F\u6301\u5728 pnpm monorepo\n                    \u4E2D\u4F7F\u7528 (default: "")\n  -h, --help        display help for command\n'})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"modern release"})," \u547D\u4EE4\u53EF\u4EE5\u5C06\u6A21\u5757\u53D1\u5E03\u5230 ",(0,o.jsx)(n.a,{href:"https://www.npmjs.com/",target:"_blank",rel:"noopener noreferrer",children:"npm Registry"})," \u4E0A\u3002"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"--tag"})," \u53C2\u6570\u53EF\u4EE5\u6307\u5B9A\u53D1\u5E03\u65F6\u5177\u4F53\u7684 ",(0,o.jsx)(n.a,{href:"https://docs.npmjs.com/adding-dist-tags-to-packages",target:"_blank",rel:"noopener noreferrer",children:"dist tags"}),"\u3002"]}),"\n"]}),"\n",(0,o.jsxs)(n.h2,{id:"modern-gen-release-note",children:[(0,o.jsx)(n.code,{children:"modern gen-release-note"}),(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#modern-gen-release-note",children:"#"})]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"Usage: modern gen-release-note [options]\n\n\u6839\u636E\u5F53\u524D\u4ED3\u5E93 changeset \u4FE1\u606F\u751F\u6210 Release Note\n\nOptions:\n  --repo <repo>      \u4ED3\u5E93\u540D\u79F0\uFF0C\u7528\u4E8E\u751F\u6210 Pull Request \u94FE\u63A5\uFF0C \u4F8B\u5982\uFF1A web-infra-dev/modern.js\n  --custom <cumtom>  \u81EA\u5B9A\u4E49 Release Note \u751F\u6210\u51FD\u6570\n  -h, --help         display help for command\n"})}),"\n",(0,o.jsxs)(n.p,{children:["\u6839\u636E\u5F53\u524D\u4ED3\u5E93\u7684 changeset \u4FE1\u606F\u81EA\u52A8\u751F\u6210 ",(0,o.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Release_notes",target:"_blank",rel:"noopener noreferrer",children:"Release Note"}),"\u3002"]}),"\n",(0,o.jsxs)(n.div,{className:"rspress-directive tip",children:[(0,o.jsx)(n.div,{className:"rspress-directive-title",children:"TIP"}),(0,o.jsx)(n.div,{className:"rspress-directive-content",children:(0,o.jsxs)(n.p,{children:["\u9700\u8981\u5728 ",(0,o.jsx)(n.code,{children:"bump"})," \u547D\u4EE4\u4E4B\u524D\u6267\u884C\u3002\n"]})})]}),"\n",(0,o.jsxs)(n.h2,{id:"modern-upgrade",children:[(0,o.jsx)(n.code,{children:"modern upgrade"}),(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#modern-upgrade",children:"#"})]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:'Usage: modern upgrade [options]\n\n\u5347\u7EA7 Modern.js \u5230\u6700\u65B0\u7248\u672C\n\nOptions:\n  --registry <registry>  \u5B9A\u5236 npm registry (default: "")\n  -d,--debug             \u5F00\u542F Debug \u6A21\u5F0F\uFF0C\u6253\u5370\u8C03\u8BD5\u65E5\u5FD7\u4FE1\u606F (default: false)\n  --cwd <cwd>            \u9879\u76EE\u8DEF\u5F84 (default: "")\n  -h, --help             display help for command\n'})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"modern upgrade"})," \u547D\u4EE4\uFF0C\u7528\u4E8E\u5347\u7EA7\u9879\u76EE Modern.js \u76F8\u5173\u4F9D\u8D56\u81F3\u6700\u65B0\u7248\u672C\u3002"]}),"\n",(0,o.jsxs)(n.p,{children:["\u5728\u9879\u76EE\u6839\u76EE\u5F55\u4E0B\u6267\u884C\u547D\u4EE4 ",(0,o.jsx)(n.code,{children:"npx modern upgrade"}),"\uFF0C\u4F1A\u9ED8\u8BA4\u5C06\u5F53\u524D\u6267\u884C\u547D\u4EE4\u9879\u76EE\u7684 ",(0,o.jsx)(n.code,{children:"package.json"})," \u4E2D\u7684 Modern.js \u76F8\u5173\u4F9D\u8D56\u66F4\u65B0\u81F3\u6700\u65B0\u7248\u672C\u3002"]})]})}function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,i.useMDXComponents)(),e.components).wrapper;return n?(0,o.jsx)(n,(0,s._)((0,d._)({},e),{children:(0,o.jsx)(l,(0,d._)({},e))})):l(e)}var c=a;a.__RSPRESS_PAGE_META={},a.__RSPRESS_PAGE_META["zh%2Fguide%2Fbasic%2Fcommand-preview.md"]={toc:[{text:"modern build",id:"modern-build",depth:2},{text:"modern new",id:"modern-new",depth:2},{text:"modern dev",id:"modern-dev",depth:2},{text:"modern test",id:"modern-test",depth:2},{text:"modern lint",id:"modern-lint",depth:2},{text:"modern change",id:"modern-change",depth:2},{text:"modern pre",id:"modern-pre",depth:2},{text:"modern bump",id:"modern-bump",depth:2},{text:"modern release",id:"modern-release",depth:2},{text:"modern gen-release-note",id:"modern-gen-release-note",depth:2},{text:"modern upgrade",id:"modern-upgrade",depth:2}],title:"CLI \u547D\u4EE4"};var h={sidebar_position:2}}}]);