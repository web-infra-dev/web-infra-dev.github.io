"use strict";(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["92686"],{73297:function(e,n,r){r.r(n),r.d(n,{default:function(){return d}});var t=r(39980),i=r(9580);function o(e){let n=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",code:"code",pre:"pre",h3:"h3",img:"img",blockquote:"blockquote",div:"div",ul:"ul",li:"li"},(0,i.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.h1,{id:"commands",children:["Commands",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#commands",children:"#"})]}),"\n",(0,t.jsx)(n.p,{children:"Modern.js has some built-in commands that can help you quickly start a development server, build production environment code, and more."}),"\n",(0,t.jsx)(n.p,{children:"Through this chapter, you can learn about the built-in commands of Modern.js and how to use them."}),"\n",(0,t.jsxs)(n.h2,{id:"modern-dev",children:["modern dev",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#modern-dev",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"modern dev"})," command is used to start a local development server and compile the source code in the development environment."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"Usage: modern dev [options]\n\nOptions:\n  -e --entry <entry>    compiler by entry\n  -c --config <config>  specify the configuration file, which can be a relative or absolute path\n  -h, --help            show command help\n  --analyze             analyze the bundle and view size of each module\n  --web-only            only start web service\n  --api-only            only start API service\n"})}),"\n",(0,t.jsxs)(n.p,{children:["After running ",(0,t.jsx)(n.code,{children:"modern dev"}),", Modern.js will watch source file changes and apply hot module replacement."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"$ modern dev\n\ninfo    Starting dev server...\n\n  > Local:    http://localhost:8080/\n  > Network:  http://192.168.0.1:8080/\n"})}),"\n",(0,t.jsxs)(n.h3,{id:"compile-partial-pages",children:["Compile Partial Pages",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#compile-partial-pages",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:["In multi-page (MPA) projects, the ",(0,t.jsx)(n.code,{children:"--entry"})," option can be added to specify one or more pages to compile. In this way, only part of the code in the project will be compiled, and the dev startup speed will be faster."]}),"\n",(0,t.jsxs)(n.p,{children:["For example, execute ",(0,t.jsx)(n.code,{children:"modern dev --entry"}),", the entry selector will be displayed in the command line interface:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",children:"$ modern dev --entry\n\n? Please select the entry that needs to be built\n\u276F \u25EF foo\n  \u25EF bar\n  \u25EF baz\n"})}),"\n",(0,t.jsxs)(n.p,{children:["For example, if you select the ",(0,t.jsx)(n.code,{children:"foo"})," entry, only the code related to the ",(0,t.jsx)(n.code,{children:"foo"})," entry will be compiled, and the code of other pages will not be compiled."]}),"\n",(0,t.jsxs)(n.h3,{id:"specify-the-page-by-parameter",children:["Specify the page by parameter",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#specify-the-page-by-parameter",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:["You can also specify the page name through parameters after ",(0,t.jsx)(n.code,{children:"--entry"}),", and the names of multiple pages can be separated by commas."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"# Compile foo page\nmodern dev --entry foo\n\n# Compile foo and bar pages\nmodern dev --entry foo,bar\n"})}),"\n",(0,t.jsxs)(n.h2,{id:"modern-start",children:["modern start",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#modern-start",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"modern start"})," is an alias of ",(0,t.jsx)(n.code,{children:"modern dev"})," command, the usage of the two are exactly the same."]}),"\n",(0,t.jsxs)(n.h2,{id:"modern-build",children:["modern build",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#modern-build",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"modern build"})," command will build production-ready artifacts in the ",(0,t.jsx)(n.code,{children:"dist/"})," directory by default. You can specify the output directory by modifying the configuration ",(0,t.jsx)(n.a,{href:"/configure/app/output/dist-path",children:(0,t.jsx)(n.code,{children:"output.distPath"})}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"Usage: modern build [options]\n\nOptions:\n  -c --config <config>  specify the configuration file, which can be a relative or absolute path\n  -h, --help            show command help\n  --analyze             analyze the bundle and view size of each module\n"})}),"\n",(0,t.jsxs)(n.h3,{id:"analyze-bundle",children:["Analyze Bundle",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#analyze-bundle",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:["execute ",(0,t.jsx)(n.code,{children:"npx modern build --analyze"})," command, can produce an HTML file that analyzes the volume of the bundle while packaging the production code:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",children:"Bundle Analyzer saved report to /example/dist/report.html\n\ninfo    Production file sizes:\n\n  File                                      Size         Gzipped\n  dist/static/js/lib-react.09721b5c.js      152.6 kB     49.0 kB\n  dist/html/main/index.html                 5.8 kB       2.5 kB\n  dist/static/js/main.3568a38e.js           3.5 kB       1.4 kB\n  dist/static/css/main.03221f72.css         1.4 kB       741 B\n"})}),"\n",(0,t.jsx)(n.p,{children:"Open the above HTML file in the browser, you can see the tile diagram of the bundled files, and perform package volume analysis and optimization:"}),"\n",(0,t.jsx)("img",{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/aphqeh7uhohpquloj/modern-js/mwa-build-analyze-8784f762c1ab0cb20935829d5f912c4c.png"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["this features based on ",(0,t.jsx)(n.a,{href:"https://github.com/webpack-contrib/webpack-bundle-analyzer",target:"_blank",rel:"noopener noreferrer",children:"webpack-bundle-analyzer"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.h2,{id:"modern-new",children:["modern new",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#modern-new",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"modern new"})," command is used to enable features in an existing project."]}),"\n",(0,t.jsx)(n.p,{children:"For example, add application entry, enable some optional features such as Tailwind CSS, micro frontend, etc."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"Usage: modern new [options]\n\nOptions:\n  --config-file <configFile>  specify the configuration file, which can be a relative or absolute path\n  --lang <lang>          set the language (zh or en) for the new command.\n  -d, --debug            using debug mode to log something (default: false)\n  -c, --config <config>  set default generator config(json string)\n  --dist-tag <tag>       use specified tag version for its generator\n  --registry             set npm registry url to run npm command\n  -h, --help             show command help\n"})}),"\n",(0,t.jsxs)(n.h3,{id:"add-entry",children:["Add Entry",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#add-entry",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:["In the project, execute the ",(0,t.jsx)(n.code,{children:"new"})," command to add entries as follows:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",children:'$ npx modern new\n? Please select the operation you want: Create Element\n? Please select the type of element to create: New "entry"\n? Please fill in the entry name: entry\n'})}),"\n",(0,t.jsxs)(n.h3,{id:"enable-features",children:["Enable Features",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#enable-features",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:["In the project, execute the ",(0,t.jsx)(n.code,{children:"new"})," command to enable features as follows:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",children:"$ npx modern new\n? Please select the operation you want: Enable Features\n? Please select the feature name: (Use arrow keys)\n\u276F Enable Tailwind CSS\n  Enable BFF\n  Enable SSG\n  Enable Micro Frontend\n"})}),"\n",(0,t.jsxs)(n.div,{className:"rspress-directive tip",children:[(0,t.jsx)(n.div,{className:"rspress-directive-title",children:"TIP"}),(0,t.jsxs)(n.div,{className:"rspress-directive-content",children:[(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"--config"})," parameter needs to use a JSON string."]}),"\n",(0,t.jsxs)(n.p,{children:["pnpm does not support the use of JSON strings as parameter values currently. Use ",(0,t.jsx)(n.code,{children:"npm new"})," to turn on.\u3010",(0,t.jsx)(n.a,{href:"https://github.com/pnpm/pnpm/issues/3876",target:"_blank",rel:"noopener noreferrer",children:"Relate Issue"}),"\u3011\n"]})]})]}),"\n",(0,t.jsxs)(n.h2,{id:"modern-serve",children:["modern serve",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#modern-serve",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"modern serve"})," command is used to start a Modern.js project in the production environment. It can also be used to preview the artifacts built for the production environment locally. Please note that you need to execute the ",(0,t.jsx)(n.a,{href:"/apis/app/commands#modern-build",children:(0,t.jsx)(n.code,{children:"build"})})," command beforehand to generate the corresponding artifacts."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"Usage: modern serve [options]\n\nOptions:\n  -c --config <config>  specify the configuration file, which can be a relative or absolute path\n  -h, --help            show command help\n  --api-only            only run API service\n"})}),"\n",(0,t.jsxs)(n.p,{children:["By default, the project will run in ",(0,t.jsx)(n.code,{children:"localhost:8080"}),", you can modify the server port number with ",(0,t.jsx)(n.code,{children:"server.port"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"export default defineConfig({\n  server: {\n    port: 8081,\n  },\n});\n"})}),"\n",(0,t.jsxs)(n.h2,{id:"modern-upgrade",children:["modern upgrade",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#modern-upgrade",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:["Execute the command ",(0,t.jsx)(n.code,{children:"npx modern upgrade"})," in the project, by default, dependencies in the ",(0,t.jsx)(n.code,{children:"package.json"})," are updated to the latest version."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'Usage: modern upgrade [options]\n\nOptions:\n  --config <config> specify the configuration file, which can be a relative or absolute path\n  --registry <registry>  specify npm registry (default: "")\n  -d,--debug             using debug mode to log something (default: false)\n  --cwd <cwd>            app directory (default: "")\n  -h, --help             show command help\n'})}),"\n",(0,t.jsxs)(n.h2,{id:"modern-inspect",children:["modern inspect",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#modern-inspect",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"modern inspect"})," command is used to view the ",(0,t.jsx)(n.a,{href:"https://rsbuild.dev/config/index",target:"_blank",rel:"noopener noreferrer",children:"Rsbuild config"})," and webpack or Rspack config of the project."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'Usage: modern inspect [options]\n\nOptions:\n  --env <env>           view the configuration in the target environment (default: "development")\n  --output <output>     Specify the path to output in the dist (default: "/")\n  --verbose             Show the full function in the result\n  -c --config <config>  specify the configuration file, which can be a relative or absolute path\n  -h, --help            show command help\n'})}),"\n",(0,t.jsxs)(n.p,{children:["After executing the command ",(0,t.jsx)(n.code,{children:"npx modern inspect"})," in the project root directory, the following files will be generated in the ",(0,t.jsx)(n.code,{children:"dist"})," directory of the project:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"rsbuild.config.mjs"}),": The Rsbuild config to use at build time."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"webpack.config.web.mjs"}),": The webpack config used by to use at build time."]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"\u279C npx modern inspect\n\nInspect config succeed, open following files to view the content:\n\n  - Rsbuild Config: /root/my-project/dist/rsbuild.config.mjs\n  - Webpack Config (web): /root/my-project/dist/webpack.config.web.mjs\n"})}),"\n",(0,t.jsxs)(n.h3,{id:"configuration-env",children:["Configuration Env",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#configuration-env",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:["By default, the inspect command will output the development configs, you can use the ",(0,t.jsx)(n.code,{children:"--env production"})," option to output the production configs:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"modern inspect --env production\n"})}),"\n",(0,t.jsxs)(n.h3,{id:"verbose-content",children:["Verbose content",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#verbose-content",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:["By default, the inspect command will omit the function content in the config object, you can use the ",(0,t.jsx)(n.code,{children:"--verbose"})," option to output the full content of the function:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"modern inspect --verbose\n"})}),"\n",(0,t.jsxs)(n.h3,{id:"ssr-configuration",children:["SSR Configuration",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#ssr-configuration",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:["If the project has enabled SSR, an additional ",(0,t.jsx)(n.code,{children:"webpack.config.node.mjs"})," file will be generated in the ",(0,t.jsx)(n.code,{children:"dist/"}),", corresponding to the webpack configuration at SSR build time."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"\u279C npx modern inspect\n\nInspect config succeed, open following files to view the content:\n\n  - Rsbuild Config: /root/my-project/dist/rsbuild.config.mjs\n  - Webpack Config (web): /root/my-project/dist/webpack.config.web.mjs\n  - Webpack Config (node): /root/my-project/dist/webpack.config.node.mjs\n"})}),"\n",(0,t.jsxs)(n.h2,{id:"modern-lint",children:["modern lint",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#modern-lint",children:"#"})]}),"\n",(0,t.jsx)(n.p,{children:"Run ESLint to check the syntax of the code."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"Usage: modern lint [options] [...files]\n\nOptions:\n  --no-fix    disable auto fix source file\n  -h, --help  display help for command\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Normally, only the part of the code modified by this commit needs to be checked by ",(0,t.jsx)(n.code,{children:"lint-staged"})," during the ",(0,t.jsx)(n.code,{children:"git commit"})," phase."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"--no-fix"})," close auto fix by lint."]}),"\n"]})]})}function a(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}let d=a;a.__RSPRESS_PAGE_META={},a.__RSPRESS_PAGE_META["en%2Fapis%2Fapp%2Fcommands.mdx"]={toc:[{text:"modern dev",id:"modern-dev",depth:2},{text:"Compile Partial Pages",id:"compile-partial-pages",depth:3},{text:"Specify the page by parameter",id:"specify-the-page-by-parameter",depth:3},{text:"modern start",id:"modern-start",depth:2},{text:"modern build",id:"modern-build",depth:2},{text:"Analyze Bundle",id:"analyze-bundle",depth:3},{text:"modern new",id:"modern-new",depth:2},{text:"Add Entry",id:"add-entry",depth:3},{text:"Enable Features",id:"enable-features",depth:3},{text:"modern serve",id:"modern-serve",depth:2},{text:"modern upgrade",id:"modern-upgrade",depth:2},{text:"modern inspect",id:"modern-inspect",depth:2},{text:"Configuration Env",id:"configuration-env",depth:3},{text:"Verbose content",id:"verbose-content",depth:3},{text:"SSR Configuration",id:"ssr-configuration",depth:3},{text:"modern lint",id:"modern-lint",depth:2}],title:"Commands",frontmatter:{sidebar_position:1}}}}]);