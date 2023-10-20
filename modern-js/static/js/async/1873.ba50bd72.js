(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["1873"],{19026:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return c}});var i=r("15169"),t=r("43932"),s=r("9880"),o=r("23169");function d(e){var n=Object.assign({p:"p",code:"code"},(0,o.useMDXComponents)(),e.components);return(0,s.jsxs)(n.p,{children:["After local verification, you can organize the artifacts in ",(0,s.jsx)(n.code,{children:"dist/"})," into the structure required by the server for deployment."]})}function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,o.useMDXComponents)(),e.components).wrapper;return n?(0,s.jsx)(n,(0,t._)((0,i._)({},e),{children:(0,s.jsx)(d,(0,i._)({},e))})):d(e)}var c=a;a.__RSPRESS_PAGE_META={},a.__RSPRESS_PAGE_META["en%2Fcomponents%2Fdeploy.mdx"]={toc:[],title:""}},59344:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return u},frontmatter:function(){return j}});var i=r("15169"),t=r("43932"),s=r("9880"),o=r("23169"),d=r("33495"),a=r("67975"),c=r("887"),l=r("19026");function h(e){var n=Object.assign({h1:"h1",a:"a",h2:"h2",p:"p",code:"code",pre:"pre",ul:"ul",li:"li",blockquote:"blockquote"},(0,o.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h1,{id:"quick-start",children:["Quick Start",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#quick-start",children:"#"})]}),"\n",(0,s.jsxs)(n.h2,{id:"environment",children:["Environment",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#environment",children:"#"})]}),"\n","\n",(0,s.jsx)(d.default,{}),"\n",(0,s.jsxs)(n.h2,{id:"installation",children:["Installation",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#installation",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["Modern.js provides the ",(0,s.jsx)(n.code,{children:"@modern-js/create"})," tool to create projects. It does not require global installation and can be run on-demand using ",(0,s.jsx)(n.code,{children:"npx"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"You can create a project in an existing empty directory:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"mkdir myapp && cd myapp\nnpx @modern-js/create@latest\n"})}),"\n",(0,s.jsx)(n.p,{children:"You can also create a project directly in a new directory:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"npx @modern-js/create@latest myapp\n"})}),"\n",(0,s.jsxs)(n.h2,{id:"initialize",children:["Initialize",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#initialize",children:"#"})]}),"\n","\n",(0,s.jsx)(a.default,{}),"\n",(0,s.jsxs)(n.h2,{id:"development",children:["Development",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#development",children:"#"})]}),"\n","\n",(0,s.jsx)(c.default,{}),"\n",(0,s.jsxs)(n.h2,{id:"configuration",children:["Configuration",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#configuration",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["In a Modern.js project created using ",(0,s.jsx)(n.code,{children:"@modern-js/create"}),", a ",(0,s.jsx)(n.code,{children:"modern.config.ts"})," file is generated by default."]}),"\n",(0,s.jsx)(n.p,{children:"You can modify the configuration through this file to override the default behavior of Modern.js. For example, to enable SSR, add the following configuration:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"import { appTools, defineConfig } from '@modern-js/app-tools';\n\nexport default defineConfig({\n  runtime: {\n    router: true,\n  },\n  server: {\n    ssr: true,\n  },\n  plugins: [appTools()],\n});\n"})}),"\n",(0,s.jsxs)(n.p,{children:["After running ",(0,s.jsx)(n.code,{children:"pnpm run dev"})," again, you can find that the project has completed page rendering on the server in the browser's Network menu."]}),"\n",(0,s.jsxs)(n.h2,{id:"core-npm-package",children:["Core npm Package",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#core-npm-package",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["In a newly created project, the ",(0,s.jsx)(n.code,{children:"@modern-js/app-tools"})," npm package is installed by default. It is the core package of the Modern.js framework and provides the following capabilities:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["It offers commonly used CLI commands such as ",(0,s.jsx)(n.code,{children:"modern dev"}),", ",(0,s.jsx)(n.code,{children:"modern build"}),", and more."]}),"\n",(0,s.jsx)(n.li,{children:"It integrates Modern.js Core, providing capabilities for configuration parsing, plugin loading, and more."}),"\n",(0,s.jsx)(n.li,{children:"It integrates Modern.js Builder, providing build capabilities."}),"\n",(0,s.jsx)(n.li,{children:"It integrates Modern.js Server, providing capabilities for development and production servers."}),"\n",(0,s.jsxs)(n.li,{children:["It integrates some commonly used plugins, such as ",(0,s.jsx)(n.code,{children:"plugin-lint"}),", ",(0,s.jsx)(n.code,{children:"plugin-data-loader"}),", and more."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"@modern-js/app-tools"})," is implemented based on the plugin system of Modern.js. Essentially, it is a plugin. Therefore, you need to register ",(0,s.jsx)(n.code,{children:"appTools"})," in the ",(0,s.jsx)(n.code,{children:"plugins"})," field of the configuration file:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import { appTools, defineConfig } from '@modern-js/app-tools';\n\nexport default defineConfig({\n  plugins: [appTools()],\n});\n"})}),"\n",(0,s.jsxs)(n.h2,{id:"build-the-project",children:["Build the project",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#build-the-project",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["To build the production artifacts of the project, run ",(0,s.jsx)(n.code,{children:"pnpm run build"})," in the project:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"$ pnpm run build\n\n> modern build\n\ninfo    Staring production build...\nready   Client compiled in 50 ms\ninfo    Production file sizes:\n\n  File                                      Size         Gzipped\n  dist/static/js/lib-react.09721b5c.js      152.6 kB     49.0 kB\n  dist/html/main/index.html                 5.8 kB       2.5 kB\n  dist/static/js/main.3568a38e.js           3.5 kB       1.4 kB\n  dist/static/css/main.03221f72.css         1.4 kB       741 B\n"})}),"\n",(0,s.jsxs)(n.p,{children:["By default, the build artifacts are generated in ",(0,s.jsx)(n.code,{children:"dist/"}),", with the following directory structure:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"dist\n\u251C\u2500\u2500 html\n\u2502\xa0\xa0 \u2514\u2500\u2500 main\n\u251C\u2500\u2500 modern.config.json\n\u251C\u2500\u2500 route.json\n\u251C\u2500\u2500 routes-manifest.json\n\u2514\u2500\u2500 static\n    \u251C\u2500\u2500 css\n    \u2514\u2500\u2500 js\n"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["If you need to customize the directory of the build artifacts, please refer to ",(0,s.jsx)(n.a,{href:"https://modernjs.dev/builder/guide/basic/output-files.html",target:"_blank",rel:"noopener noreferrer",children:"Output files"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.h2,{id:"verify",children:["Verify",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#verify",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["Run ",(0,s.jsx)(n.code,{children:"pnpm run serve"})," in the project to verify whether the build artifacts run normally locally:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"$ pnpm run serve\n\n> modern serve\n\ninfo    Starting production server...\n\n  > Local:    http://localhost:8080/\n  > Network:  http://192.168.0.1:8080/\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Open ",(0,s.jsx)(n.code,{children:"http://localhost:8000/"})," in the browser, and the content should be consistent with that of ",(0,s.jsx)(n.code,{children:"pnpm run dev"}),"."]}),"\n",(0,s.jsxs)(n.h2,{id:"deployment",children:["Deployment",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#deployment",children:"#"})]}),"\n","\n",(0,s.jsx)(l.default,{})]})}function p(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,o.useMDXComponents)(),e.components).wrapper;return n?(0,s.jsx)(n,(0,t._)((0,i._)({},e),{children:(0,s.jsx)(h,(0,i._)({},e))})):h(e)}var u=p;p.__RSPRESS_PAGE_META={},p.__RSPRESS_PAGE_META["en%2Fguides%2Fget-started%2Fquick-start.mdx"]={toc:[{text:"Environment",id:"environment",depth:2},{text:"Installation",id:"installation",depth:2},{text:"Initialize",id:"initialize",depth:2},{text:"Development",id:"development",depth:2},{text:"Configuration",id:"configuration",depth:2},{text:"Core npm Package",id:"core-npm-package",depth:2},{text:"Build the project",id:"build-the-project",depth:2},{text:"Verify",id:"verify",depth:2},{text:"Deployment",id:"deployment",depth:2}],title:"Quick Start"};var j={title:"Quick Start",sidebar_position:2}}}]);