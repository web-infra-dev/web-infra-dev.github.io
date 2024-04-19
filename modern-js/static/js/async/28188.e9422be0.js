/*! For license information please see 28188.e9422be0.js.LICENSE.txt */
(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["28188"],{77019:function(e,n,r){"use strict";r.r(n);var a=r("39980"),i=r("9580");function t(e){let n=Object.assign({h1:"h1",a:"a",p:"p",code:"code",pre:"pre",h2:"h2",div:"div"},(0,i.ah)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.h1,{id:"cli-options",children:["CLI Options",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#cli-options",children:"#"})]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"@modern-js/create"})," provides many configuration parameters to configure its behavior during execution, which can be viewed using the ",(0,a.jsx)(n.code,{children:"--help"})," parameter:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'npx @modern-js/create@latest --help\n\nUsage: npx @modern-js/create@latest [projectDir]\n\ncreate Modern.js solution project\n\nOptions:\n  --version                show create tools version\n  --lang <lang>            set create tools language(en or zh)\n  -c, --config <config>    set default project config(json string) (default: "{}")\n  -d,--debug               using debug mode to log something (default: false)\n  --mwa                    create mwa application using default config (default: false)\n  --module                 create module application using default config (default: false)\n  --monorepo               create monorepo application using default config (default: false)\n  --generator <generator>  run custom generator\n  -p, --plugin <plugin>    use generator plugin to create new solution or customize Modern.js solution (default: [])\n  --dist-tag <distTag>     use specified tag version for it\\\'s generator (default: "")\n  --packages <packages>    set project specific dependency version information (default: "{}")\n  --registry <registry>    set npm registry url to run npm command (default: "")\n  --no-need-install        not run install command\n  -h, --help               display help for command\n\nCommands:\n  clean-cache              clean locale generator cache\n'})}),"\n",(0,a.jsx)(n.p,{children:"The following will provide a detailed introduction to these parameters:"}),"\n",(0,a.jsxs)(n.h2,{id:"projectdir",children:["[projectDir]",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#projectdir",children:"#"})]}),"\n",(0,a.jsx)(n.p,{children:"The project directory name."}),"\n",(0,a.jsxs)(n.p,{children:["When executing ",(0,a.jsx)(n.code,{children:"@modern-js/create"}),", a ",(0,a.jsx)(n.code,{children:"projectDir"})," folder will be created in the current directory by default, and the project will be initialized in this folder. If this parameter is empty, the initialization project will be directly generated in the current directory."]}),"\n",(0,a.jsxs)(n.div,{className:"rspress-directive info",children:[(0,a.jsx)(n.div,{className:"rspress-directive-title",children:"INFO"}),(0,a.jsx)(n.div,{className:"rspress-directive-content",children:(0,a.jsxs)(n.p,{children:["If the contents of the directory where ",(0,a.jsx)(n.code,{children:"projectDir"})," is located are not empty, a prompt will be given whether to continue creating. It is recommended to perform project initialization operations in an empty directory.\n"]})})]}),"\n",(0,a.jsxs)(n.h2,{id:"--version",children:["--version",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#--version",children:"#"})]}),"\n",(0,a.jsxs)(n.p,{children:["Get the version of the ",(0,a.jsx)(n.code,{children:"@modern-js/create"})," tool."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"npx @modern-js/create@latest --version\n\n[INFO] @modern-js/create v2.21.1\n"})}),"\n",(0,a.jsxs)(n.h2,{id:"--lang-lang",children:["--lang <lang>",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#--lang-lang",children:"#"})]}),"\n",(0,a.jsxs)(n.p,{children:["The execution language, supports ",(0,a.jsx)(n.code,{children:"zh"})," and ",(0,a.jsx)(n.code,{children:"en"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["By default, ",(0,a.jsx)(n.code,{children:"@modern-js/create"})," will automatically identify the user's system language and choose to use Chinese or English. If the identification fails or does not meet usage habits, you can manually specify it using this parameter."]}),"\n",(0,a.jsxs)(n.h2,{id:"-c---config-config",children:["-c, --config <config>",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#-c---config-config",children:"#"})]}),"\n",(0,a.jsx)(n.p,{children:"Specify the default project configuration."}),"\n",(0,a.jsxs)(n.p,{children:["By default, ",(0,a.jsx)(n.code,{children:"@modern-js/create"})," will prompt for interactive questions such as language selection and package managers during the execution process. When it is necessary to specify these configuration contents in advance, they can be passed in through this field."]}),"\n",(0,a.jsx)(n.p,{children:"This field is a JSON string. For example, when specifying a package manager:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'npx @modern-js/create@latest --config \'{"packageManager": "pnpm"}\'\n'})}),"\n",(0,a.jsxs)(n.p,{children:["Supported parameters for ",(0,a.jsx)(n.code,{children:"config"})," can be found at ",(0,a.jsx)(n.a,{href:"/guides/topic-detail/generator/create/config",children:"Configuration Parameters"}),"\u3002"]}),"\n",(0,a.jsxs)(n.h2,{id:"-d--debug",children:["-d,--debug",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#-d--debug",children:"#"})]}),"\n",(0,a.jsx)(n.p,{children:"Display debug logs."}),"\n",(0,a.jsx)(n.p,{children:"When encountering problems during use, you can use this parameter to display debug logs, which is convenient for quickly locating the problem position and troubleshooting."}),"\n",(0,a.jsxs)(n.h2,{id:"--mwa",children:["--mwa",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#--mwa",children:"#"})]}),"\n",(0,a.jsx)(n.p,{children:"Quickly create a Web App project."}),"\n",(0,a.jsxs)(n.h2,{id:"--module",children:["--module",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#--module",children:"#"})]}),"\n",(0,a.jsx)(n.p,{children:"Quickly create a Npm Module project."}),"\n",(0,a.jsxs)(n.h2,{id:"--monorepo",children:["--monorepo",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#--monorepo",children:"#"})]}),"\n",(0,a.jsx)(n.p,{children:"Quickly create a Monorepo project."}),"\n",(0,a.jsxs)(n.h2,{id:"-p---plugin-plugin",children:["-p, --plugin <plugin>",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#-p---plugin-plugin",children:"#"})]}),"\n",(0,a.jsx)(n.p,{children:"Specify a generator plugin."}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"@modern-js/create"})," supports customizing the default project solution type of Modern.js or adding project solution type scenarios using generator plugin. For details, please refer to ",(0,a.jsx)(n.a,{href:"/guides/topic-detail/generator/plugin/structure",children:"Developing Generator Plugin"}),"."]}),"\n",(0,a.jsxs)(n.h2,{id:"--generator-generator",children:["--generator <generator>",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#--generator-generator",children:"#"})]}),"\n",(0,a.jsx)(n.p,{children:"Specify a micro-generator."}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"@modern-js/create"})," supports completely customizing the project generation process using micro-generator."]}),"\n",(0,a.jsxs)(n.h2,{id:"--dist-tag-disttag",children:["--dist-tag <distTag>",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#--dist-tag-disttag",children:"#"})]}),"\n",(0,a.jsx)(n.p,{children:"Specify the version of the generator and Modern.js-related dependencies."}),"\n",(0,a.jsxs)(n.p,{children:["During the execution of ",(0,a.jsx)(n.code,{children:"@modern-js/create"}),", a smaller micro-generator will be executed by default, and the ",(0,a.jsx)(n.code,{children:"latest"})," version of the micro-generator will be used by default. This parameter can be used to specify the version number of the micro-generator to be executed and the version of the installed Modern.js-related dependencies."]}),"\n",(0,a.jsxs)(n.p,{children:["For example, use the ",(0,a.jsx)(n.code,{children:"next"})," version:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"npx @modern-js/create@next --dist-tag next\n"})}),"\n",(0,a.jsxs)(n.h2,{id:"--packages-packages",children:["--packages <packages>",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#--packages-packages",children:"#"})]}),"\n",(0,a.jsx)(n.p,{children:"Specify specific package version dependencies when creating a project."}),"\n",(0,a.jsxs)(n.p,{children:["If you need to specify a specific package version when creating a project, you can use this parameter. This parameter will configure ",(0,a.jsx)(n.code,{children:"pnpm.overrides"})," (if the package manager is pnpm) or ",(0,a.jsx)(n.code,{children:"resolutions"})," to lock the package version number in the ",(0,a.jsx)(n.code,{children:"package.json"})," file in the project root directory."]}),"\n",(0,a.jsx)(n.p,{children:"The parameter value is a JSON string."}),"\n",(0,a.jsx)(n.p,{children:"For example, specify the react version:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'npx @modern-js/create@latest --packages \'{"react":"^17"}\'\n'})}),"\n",(0,a.jsxs)(n.h2,{id:"--registry-registry",children:["--registry <registry>",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#--registry-registry",children:"#"})]}),"\n",(0,a.jsx)(n.p,{children:"Specify the sub-generator to execute and the npm registry to fetch project dependencies version."}),"\n",(0,a.jsxs)(n.h2,{id:"--no-need-install",children:["--no-need-install",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#--no-need-install",children:"#"})]}),"\n",(0,a.jsx)(n.p,{children:"Ignore automatic installation of dependencies."}),"\n",(0,a.jsxs)(n.p,{children:["By default, ",(0,a.jsx)(n.code,{children:"@modern-js/create"})," will automatically install dependencies after creating a project. Using this parameter can ignore the installation of dependencies."]}),"\n",(0,a.jsxs)(n.h2,{id:"clean-cache",children:["clean-cache",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#clean-cache",children:"#"})]}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"@modern-js/create"})," command generates sub-generators cache in the tmp directory of the execution machine by default to speed up the generator execution. This command can be used to delete the cache when it needs to be refreshed or when there are problems with the cache."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"npx @modern-js/create@latest clean-cache\n"})})]})}function s(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(t,{...e})}):t(e)}n.default=s,s.__RSPRESS_PAGE_META={},s.__RSPRESS_PAGE_META["en%2Fguides%2Ftopic-detail%2Fgenerator%2Fcreate%2Foption.md"]={toc:[{text:"[projectDir]",id:"projectdir",depth:2},{text:"--version",id:"--version",depth:2},{text:"--lang <lang>",id:"--lang-lang",depth:2},{text:"-c, --config <config>",id:"-c---config-config",depth:2},{text:"-d,--debug",id:"-d--debug",depth:2},{text:"--mwa",id:"--mwa",depth:2},{text:"--module",id:"--module",depth:2},{text:"--monorepo",id:"--monorepo",depth:2},{text:"-p, --plugin <plugin>",id:"-p---plugin-plugin",depth:2},{text:"--generator <generator>",id:"--generator-generator",depth:2},{text:"--dist-tag <distTag>",id:"--dist-tag-disttag",depth:2},{text:"--packages <packages>",id:"--packages-packages",depth:2},{text:"--registry <registry>",id:"--registry-registry",depth:2},{text:"--no-need-install",id:"--no-need-install",depth:2},{text:"clean-cache",id:"clean-cache",depth:2}],title:"CLI Options",frontmatter:{sidebar_position:2}}}}]);