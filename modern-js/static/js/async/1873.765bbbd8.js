(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["1873"],{3521:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return c}});var t=r("15169"),s=r("43932"),i=r("9880"),o=r("23169");function a(e){var n=Object.assign({p:"p",a:"a",strong:"strong",pre:"pre",code:"code",div:"div"},(0,o.useMDXComponents)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["Before getting started, you will need to install ",(0,i.jsx)(n.a,{href:"https://nodejs.org/",target:"_blank",rel:"noopener noreferrer",children:"Node.js"}),", and ensure that your Node.js version is higher than 14.17.6. ",(0,i.jsx)(n.strong,{children:"We recommend using the LTS version of Node.js 18."})]}),"\n",(0,i.jsx)(n.p,{children:"You can check the currently used Node.js version with the following command:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"node -v\n"})}),"\n",(0,i.jsxs)(n.p,{children:["If you do not have Node.js installed in your current environment, or the installed version is lower than 14.17.6, you can use ",(0,i.jsx)(n.a,{href:"https://github.com/nvm-sh/nvm",target:"_blank",rel:"noopener noreferrer",children:"nvm"})," or ",(0,i.jsx)(n.a,{href:"https://github.com/Schniz/fnm",target:"_blank",rel:"noopener noreferrer",children:"fnm"})," to install the required version."]}),"\n",(0,i.jsx)(n.p,{children:"Here is an example of how to install the Node.js 18 LTS version via nvm:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"# Install the long-term support version of Node.js 18\nnvm install 18 --lts\n\n# Make the newly installed Node.js 18 as the default version\nnvm alias default 18\n\n# Switch to the newly installed Node.js 18\nnvm use 18\n"})}),"\n",(0,i.jsxs)(n.div,{className:"rspress-directive tip",children:[(0,i.jsx)(n.div,{className:"rspress-directive-title",children:"nvm and fnm"}),(0,i.jsx)(n.div,{className:"rspress-directive-content",children:(0,i.jsx)(n.p,{children:"Both nvm and fnm are Node.js version management tools. Relatively speaking, nvm is more mature and stable, while fnm is implemented using Rust, which provides better performance than nvm."})})]})]})}function d(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,o.useMDXComponents)(),e.components).wrapper;return n?(0,i.jsx)(n,(0,s._)((0,t._)({},e),{children:(0,i.jsx)(a,(0,t._)({},e))})):a(e)}var c=d;d.__RSPRESS_PAGE_META={},d.__RSPRESS_PAGE_META["..%2F..%2Fbuilder-doc%2Fdocs%2Fen%2Fshared%2FnodeVersion.md"]={toc:[],title:""}},887:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return c}});var t=r("15169"),s=r("43932"),i=r("9880"),o=r("23169");function a(e){var n=Object.assign({p:"p",code:"code",pre:"pre"},(0,o.useMDXComponents)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["Run ",(0,i.jsx)(n.code,{children:"pnpm run dev"})," in the project to start the project:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"$ pnpm run dev\n\n> modern dev\n\ninfo    Starting dev server...\nready   Client compiled in 50 ms\n\n  > Local:    http://localhost:8080/\n  > Network:  http://192.168.0.1:8080/\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Open ",(0,i.jsx)(n.code,{children:"http://localhost:8000/"})," in your browser to see the page content."]})]})}function d(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,o.useMDXComponents)(),e.components).wrapper;return n?(0,i.jsx)(n,(0,s._)((0,t._)({},e),{children:(0,i.jsx)(a,(0,t._)({},e))})):a(e)}var c=d;d.__RSPRESS_PAGE_META={},d.__RSPRESS_PAGE_META["en%2Fcomponents%2Fdebug-app.mdx"]={toc:[],title:""}},19026:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return c}});var t=r("15169"),s=r("43932"),i=r("9880"),o=r("23169");function a(e){var n=Object.assign({p:"p",code:"code"},(0,o.useMDXComponents)(),e.components);return(0,i.jsxs)(n.p,{children:["After local verification, you can organize the artifacts in ",(0,i.jsx)(n.code,{children:"dist/"})," into the structure required by the server for deployment."]})}function d(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,o.useMDXComponents)(),e.components).wrapper;return n?(0,i.jsx)(n,(0,s._)((0,t._)({},e),{children:(0,i.jsx)(a,(0,t._)({},e))})):a(e)}var c=d;d.__RSPRESS_PAGE_META={},d.__RSPRESS_PAGE_META["en%2Fcomponents%2Fdeploy.mdx"]={toc:[],title:""}},67975:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return c}});var t=r("15169"),s=r("43932"),i=r("9880"),o=r("23169");function a(e){var n=Object.assign({p:"p",code:"code",pre:"pre"},(0,o.useMDXComponents)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"@modern-js/create"})," provides an interactive Q & A interface to initialize the project based on the results, with initialization performed according to the default settings:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"? Please select the type of project you want to create: Web App\n? Please select the programming language: TS\n? Please select the package manager: pnpm\n? Please select the bundler: webpack\n"})}),"\n",(0,i.jsx)(n.p,{children:"After create the project, Modern.js will automatically install dependencies and create a git repository."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"[INFO] dependencies are automatically installed\n[INFO] git repository has been automatically created\n[INFO] Success\uFF01\nYou can run the following command in the directory of the new project:\npnpm run dev          # Starting dev server\npnpm run build        # Build the app for production\npnpm run serve        # Preview the production build locally\npnpm run lint         # Run ESLint and automatically fix problems\npnpm run new          # Enable optional features or add a new entry\n"})}),"\n",(0,i.jsx)(n.p,{children:"Now, the project structure is as follows:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:".\n\u251C\u2500\u2500 src\n\u2502   \u251C\u2500\u2500 modern-app-env.d.ts\n\u2502   \u2514\u2500\u2500 routes\n\u2502       \u251C\u2500\u2500 index.css\n\u2502       \u251C\u2500\u2500 layout.tsx\n\u2502       \u2514\u2500\u2500 page.tsx\n\u251C\u2500\u2500 modern.config.ts\n\u251C\u2500\u2500 package.json\n\u251C\u2500\u2500 pnpm-lock.yaml\n\u251C\u2500\u2500 README.md\n\u2514\u2500\u2500 tsconfig.json\n"})})]})}function d(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,o.useMDXComponents)(),e.components).wrapper;return n?(0,i.jsx)(n,(0,s._)((0,t._)({},e),{children:(0,i.jsx)(a,(0,t._)({},e))})):a(e)}var c=d;d.__RSPRESS_PAGE_META={},d.__RSPRESS_PAGE_META["en%2Fcomponents%2Finit-app.mdx"]={toc:[],title:""}},33495:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return l}});var t=r("15169"),s=r("43932"),i=r("9880"),o=r("23169"),a=r("3521");function d(e){var n=Object.assign({h3:"h3",a:"a",p:"p",pre:"pre",code:"code",div:"div"},(0,o.useMDXComponents)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.h3,{id:"nodejs",children:["Node.js",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#nodejs",children:"#"})]}),"\n","\n",(0,i.jsx)(a.default,{}),"\n",(0,i.jsxs)(n.h3,{id:"pnpm",children:["pnpm",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#pnpm",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["It is recommended to use ",(0,i.jsx)(n.a,{href:"https://pnpm.io/installation",target:"_blank",rel:"noopener noreferrer",children:"pnpm"})," to manage dependencies:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"npm install -g pnpm@8\n"})}),"\n",(0,i.jsxs)(n.div,{className:"rspress-directive note",children:[(0,i.jsx)(n.div,{className:"rspress-directive-title",children:"NOTE"}),(0,i.jsxs)(n.div,{className:"rspress-directive-content",children:[(0,i.jsxs)(n.p,{children:["Modern.js also supports dependency management with ",(0,i.jsx)(n.code,{children:"yarn"})," and ",(0,i.jsx)(n.code,{children:"npm"}),"."]}),"\n"]})]})]})}function c(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,o.useMDXComponents)(),e.components).wrapper;return n?(0,i.jsx)(n,(0,s._)((0,t._)({},e),{children:(0,i.jsx)(d,(0,t._)({},e))})):d(e)}var l=c;c.__RSPRESS_PAGE_META={},c.__RSPRESS_PAGE_META["en%2Fcomponents%2Fprerequisites.mdx"]={toc:[{text:"Node.js",id:"nodejs",depth:3},{text:"pnpm",id:"pnpm",depth:3}],title:""}},59344:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return u},frontmatter:function(){return m}});var t=r("15169"),s=r("43932"),i=r("9880"),o=r("23169"),a=r("33495"),d=r("67975"),c=r("887"),l=r("19026");function h(e){var n=Object.assign({h1:"h1",a:"a",h2:"h2",p:"p",code:"code",pre:"pre",ul:"ul",li:"li",blockquote:"blockquote"},(0,o.useMDXComponents)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.h1,{id:"quick-start",children:["Quick Start",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#quick-start",children:"#"})]}),"\n",(0,i.jsxs)(n.h2,{id:"environment",children:["Environment",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#environment",children:"#"})]}),"\n","\n",(0,i.jsx)(a.default,{}),"\n",(0,i.jsxs)(n.h2,{id:"installation",children:["Installation",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#installation",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["Modern.js provides the ",(0,i.jsx)(n.code,{children:"@modern-js/create"})," tool to create projects. It does not require global installation and can be run on-demand using ",(0,i.jsx)(n.code,{children:"npx"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"You can create a project in an existing empty directory:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"mkdir myapp && cd myapp\nnpx @modern-js/create@latest\n"})}),"\n",(0,i.jsx)(n.p,{children:"You can also create a project directly in a new directory:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"npx @modern-js/create@latest myapp\n"})}),"\n",(0,i.jsxs)(n.h2,{id:"initialize",children:["Initialize",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#initialize",children:"#"})]}),"\n","\n",(0,i.jsx)(d.default,{}),"\n",(0,i.jsxs)(n.h2,{id:"development",children:["Development",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#development",children:"#"})]}),"\n","\n",(0,i.jsx)(c.default,{}),"\n",(0,i.jsxs)(n.h2,{id:"configuration",children:["Configuration",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#configuration",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["In a Modern.js project created using ",(0,i.jsx)(n.code,{children:"@modern-js/create"}),", a ",(0,i.jsx)(n.code,{children:"modern.config.ts"})," file is generated by default."]}),"\n",(0,i.jsx)(n.p,{children:"You can modify the configuration through this file to override the default behavior of Modern.js. For example, to enable SSR, add the following configuration:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"import { appTools, defineConfig } from '@modern-js/app-tools';\n\nexport default defineConfig({\n  runtime: {\n    router: true,\n  },\n  server: {\n    ssr: true,\n  },\n  plugins: [appTools()],\n});\n"})}),"\n",(0,i.jsxs)(n.p,{children:["After running ",(0,i.jsx)(n.code,{children:"pnpm run dev"})," again, you can find that the project has completed page rendering on the server in the browser's Network menu."]}),"\n",(0,i.jsxs)(n.h2,{id:"core-npm-package",children:["Core npm Package",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#core-npm-package",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["In a newly created project, the ",(0,i.jsx)(n.code,{children:"@modern-js/app-tools"})," npm package is installed by default. It is the core package of the Modern.js framework and provides the following capabilities:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["It offers commonly used CLI commands such as ",(0,i.jsx)(n.code,{children:"modern dev"}),", ",(0,i.jsx)(n.code,{children:"modern build"}),", and more."]}),"\n",(0,i.jsx)(n.li,{children:"It integrates Modern.js Core, providing capabilities for configuration parsing, plugin loading, and more."}),"\n",(0,i.jsx)(n.li,{children:"It integrates Modern.js Builder, providing build capabilities."}),"\n",(0,i.jsx)(n.li,{children:"It integrates Modern.js Server, providing capabilities for development and production servers."}),"\n",(0,i.jsxs)(n.li,{children:["It integrates some commonly used plugins, such as ",(0,i.jsx)(n.code,{children:"plugin-lint"}),", ",(0,i.jsx)(n.code,{children:"plugin-data-loader"}),", and more."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"@modern-js/app-tools"})," is implemented based on the plugin system of Modern.js. Essentially, it is a plugin. Therefore, you need to register ",(0,i.jsx)(n.code,{children:"appTools"})," in the ",(0,i.jsx)(n.code,{children:"plugins"})," field of the configuration file:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import { appTools, defineConfig } from '@modern-js/app-tools';\n\nexport default defineConfig({\n  plugins: [appTools()],\n});\n"})}),"\n",(0,i.jsxs)(n.h2,{id:"build-the-project",children:["Build the project",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#build-the-project",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["To build the production artifacts of the project, run ",(0,i.jsx)(n.code,{children:"pnpm run build"})," in the project:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"$ pnpm run build\n\n> modern build\n\ninfo    Staring production build...\nready   Client compiled in 50 ms\ninfo    Production file sizes:\n\n  File                                      Size         Gzipped\n  dist/static/js/lib-react.09721b5c.js      152.6 kB     49.0 kB\n  dist/html/main/index.html                 5.8 kB       2.5 kB\n  dist/static/js/main.3568a38e.js           3.5 kB       1.4 kB\n  dist/static/css/main.03221f72.css         1.4 kB       741 B\n"})}),"\n",(0,i.jsxs)(n.p,{children:["By default, the build artifacts are generated in ",(0,i.jsx)(n.code,{children:"dist/"}),", with the following directory structure:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"dist\n\u251C\u2500\u2500 html\n\u2502\xa0\xa0 \u2514\u2500\u2500 main\n\u251C\u2500\u2500 modern.config.json\n\u251C\u2500\u2500 route.json\n\u251C\u2500\u2500 routes-manifest.json\n\u2514\u2500\u2500 static\n    \u251C\u2500\u2500 css\n    \u2514\u2500\u2500 js\n"})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["If you need to customize the directory of the build artifacts, please refer to ",(0,i.jsx)(n.a,{href:"https://modernjs.dev/builder/guide/basic/output-files.html",target:"_blank",rel:"noopener noreferrer",children:"Output files"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.h2,{id:"verify",children:["Verify",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#verify",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["Run ",(0,i.jsx)(n.code,{children:"pnpm run serve"})," in the project to verify whether the build artifacts run normally locally:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"$ pnpm run serve\n\n> modern serve\n\ninfo    Starting production server...\n\n  > Local:    http://localhost:8080/\n  > Network:  http://192.168.0.1:8080/\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Open ",(0,i.jsx)(n.code,{children:"http://localhost:8000/"})," in the browser, and the content should be consistent with that of ",(0,i.jsx)(n.code,{children:"pnpm run dev"}),"."]}),"\n",(0,i.jsxs)(n.h2,{id:"deployment",children:["Deployment",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#deployment",children:"#"})]}),"\n","\n",(0,i.jsx)(l.default,{})]})}function p(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,o.useMDXComponents)(),e.components).wrapper;return n?(0,i.jsx)(n,(0,s._)((0,t._)({},e),{children:(0,i.jsx)(h,(0,t._)({},e))})):h(e)}var u=p;p.__RSPRESS_PAGE_META={},p.__RSPRESS_PAGE_META["en%2Fguides%2Fget-started%2Fquick-start.mdx"]={toc:[{text:"Environment",id:"environment",depth:2},{text:"Installation",id:"installation",depth:2},{text:"Initialize",id:"initialize",depth:2},{text:"Development",id:"development",depth:2},{text:"Configuration",id:"configuration",depth:2},{text:"Core npm Package",id:"core-npm-package",depth:2},{text:"Build the project",id:"build-the-project",depth:2},{text:"Verify",id:"verify",depth:2},{text:"Deployment",id:"deployment",depth:2}],title:"Quick Start"};var m={title:"Quick Start",sidebar_position:2}}}]);