/*! For license information please see 7471.ef69d558.js.LICENSE.txt */
(self.webpackChunk_modern_js_module_tools_docs=self.webpackChunk_modern_js_module_tools_docs||[]).push([["7471"],{7923:function(e,n,r){"use strict";r.r(n);var s=r("39980"),d=r("96954");function o(e){let n=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",code:"code",pre:"pre",ul:"ul",li:"li",em:"em",div:"div"},(0,d.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h1,{id:"cli-commands",children:["CLI Commands",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#cli-commands",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"CLI Commands available for Modern.js Module projects are as follows:"}),"\n",(0,s.jsxs)(n.h2,{id:"modern-build",children:[(0,s.jsx)(n.code,{children:"modern build"}),(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#modern-build",children:"#"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'Usage: modern build [options]\n\nBuild module command\n\nOptions:\n  -w, --watch Enable watch mode to listen for changes on the fs and automatically rebuild\n  --tsconfig [tsconfig] Specify the path to the tsconfig.json file (default:\n                         ". /tsconfig.json")\n  --platform [platform] Build artifacts for all or specified platforms\n  --no-dts disables DTS type file generation and type checking\n  --no-clear disables automatic clearing of output directories\n  -c, --config <config>  Specify the path to the config file (default: "modern.config.j(t)s")\n  -h, --help Show information about the current command\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Modern.js Module supports the ",(0,s.jsx)(n.code,{children:"platform"})," build mode, which can be used to execute build tasks of other tools. Currently, the official support includes ",(0,s.jsx)(n.a,{href:"https://rspress.dev/",target:"_blank",rel:"noopener noreferrer",children:"Rspress"}),". For example, you can start the doc build task to generate doc products by executing the ",(0,s.jsx)(n.code,{children:"modern build --platform"})," commands."]}),"\n",(0,s.jsxs)(n.h2,{id:"modern-new",children:[(0,s.jsx)(n.code,{children:"modern new"}),(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#modern-new",children:"#"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"Usage: modern new [options]\n\nExecute the generator in a modular project scenario\n\nOptions:\n  -d, --debug Enable Debug mode, print debug log messages (default: false)\n  -c, --config <config> Generators run default configuration (JSON string)\n  --dist-tag <tag> Generator uses a special version of npm Tag\n  --registry customize npm Registry during generator runtime\n  -h, --help display help for command\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"modern new"})," command is used to start the microgenerator functionality, which enables features for the project that are not provided by default."]}),"\n",(0,s.jsx)(n.p,{children:"The following features can currently be enabled."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Testing support"}),"\n",(0,s.jsx)(n.li,{children:"Storybook V7"}),"\n",(0,s.jsx)(n.li,{children:"Tailwind CSS support"}),"\n",(0,s.jsx)(n.li,{children:"Modern.js Runtime API"}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["You can learn more about these features in the ",(0,s.jsx)(n.a,{href:"/guide/basic/use-micro-generator",children:"Using the micro generator"})," section."]}),"\n",(0,s.jsxs)(n.h2,{id:"modern-dev",children:[(0,s.jsx)(n.code,{children:"modern dev"}),(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#modern-dev",children:"#"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"Usage: modern dev [options]\n\nLocal development commands\n\nOptions:\n  -h, --help display help for command\n\nCommands:\n[dev-tools-subCommand]\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The Modern.js Module provides the ability to use debugging tools, which can be started with the ",(0,s.jsx)(n.code,{children:"modern dev"})," command. Note, however, that no debugging-related plugins are provided by default, so executing ",(0,s.jsx)(n.code,{children:"modern dev"})," will prompt: ",(0,s.jsx)(n.em,{children:'"No dev tools found available "'}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["The officially supported debugging tool is ",(0,s.jsx)(n.a,{href:"https://rspress.dev/",target:"_blank",rel:"noopener noreferrer",children:"Rspress"}),", so you can run ",(0,s.jsx)(n.code,{children:"modern dev"})," or ",(0,s.jsx)(n.code,{children:"modern dev doc"})," to execute it after you run ",(0,s.jsx)(n.code,{children:"modern new"})," to enable it."]}),"\n",(0,s.jsxs)(n.h2,{id:"modern-test",children:[(0,s.jsx)(n.code,{children:"modern test"}),(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#modern-test",children:"#"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"Usage: modern test [options]\n\nOptions:\n  -u --updateSnapshot  use this flag to re-record snapshots.\n  --watch              watch files for changes and rerun tests related to changed files.\n  -h, --help           show command help\n"})}),"\n",(0,s.jsxs)(n.p,{children:["You need to execute ",(0,s.jsx)(n.code,{children:"modern new"})," to turn on the test function before you can execute the ",(0,s.jsx)(n.code,{children:"modern test"})," command.\nThe ",(0,s.jsx)(n.code,{children:"modern test"})," command will automatically run the ",(0,s.jsx)(n.code,{children:"src/tests/*.test.(js|ts|jsx|tsx)"})," file as a test case."]}),"\n",(0,s.jsxs)(n.h2,{id:"modern-lint",children:[(0,s.jsx)(n.code,{children:"modern lint"}),(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#modern-lint",children:"#"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"Usage: modern lint [options] [. .files]\n\nlint and fix source files\n\nOptions:\n  --no-fix disable auto fix source file\n  -h, --help display help for command\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Run ",(0,s.jsx)(n.a,{href:"https://eslint.org/",target:"_blank",rel:"noopener noreferrer",children:"ESLint"})," to check the syntax of the code. Usually, we only need to check the part of the code that was changed in this commit with ",(0,s.jsx)(n.a,{href:"https://github.com/okonet/lint-staged",target:"_blank",rel:"noopener noreferrer",children:"lint-staged"})," during the ",(0,s.jsx)(n.code,{children:"-git commit"})," phase."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["The ",(0,s.jsx)(n.code,{children:"-no-fix"})," argument turns off the ability to automatically fix lint error code."]}),"\n"]}),"\n",(0,s.jsxs)(n.h2,{id:"modern-change",children:[(0,s.jsx)(n.code,{children:"modern change"}),(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#modern-change",children:"#"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"Usage: modern change [options]\n\nCreate a changeset\n\nOptions:\n  --empty Create an empty changeset (default: false)\n  --open Open the created changeset in the editor (default: false)\n  -h, --help display help for command\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"modern change"})," command is used to generate the required Markdown file for ",(0,s.jsx)(n.a,{href:"https://github.com/changesets/changesets",target:"_blank",rel:"noopener noreferrer",children:"changesets"}),"."]}),"\n",(0,s.jsxs)(n.h2,{id:"modern-pre",children:[(0,s.jsx)(n.code,{children:"modern pre"}),(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#modern-pre",children:"#"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"Usage: modern pre [options] <enter|exit> [tag]\n\nEntering and exiting pre-publishing mode\n\nOptions:\n  -h, --help display help for command\n"})}),"\n",(0,s.jsxs)(n.p,{children:["You can use the ",(0,s.jsx)(n.code,{children:"modern pre"})," command to ",(0,s.jsx)(n.a,{href:"https://github.com/atlassian/changesets/blob/main/docs/prereleases.md",target:"_blank",rel:"noopener noreferrer",children:"pre-release"})," a version before the official release."]}),"\n",(0,s.jsxs)(n.h2,{id:"modern-bump",children:[(0,s.jsx)(n.code,{children:"modern bump"}),(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#modern-bump",children:"#"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'Usage: modern bump [options]\n\nUse changesets to automatically update releases and changelogs\n\nOptions:\n  --canary Create a pre-release for testing (default: false)\n  --preid <tag> Specify an identifier when versioning a pre-release (default: "next")\n  --snapshot Create a special version for testing (default: false)\n  -h, --help display help for command\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Modify the version number in ",(0,s.jsx)(n.code,{children:"package.json"})," according to the Markdown file of the changelog generated by ",(0,s.jsx)(n.a,{href:"https://github.com/changesets/changesets",target:"_blank",rel:"noopener noreferrer",children:"changesets"}),", and generate the ",(0,s.jsx)(n.code,{children:"CHANGELOG.md"})," file."]}),"\n",(0,s.jsxs)(n.h2,{id:"modern-release",children:[(0,s.jsx)(n.code,{children:"modern release"}),(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#modern-release",children:"#"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'Usage: modern release [options]\n\nRelease npm packages\n\nOptions:\n  --tag <tag> Release npm packages with a specific tag (default: "")\n  --ignore-scripts release ignores the scripts command in package.json, only supported in pnpm monorepo\n                    (default: "")\n  -h, --help display help for command\n'})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"-modern release"})," command releases the module to the ",(0,s.jsx)(n.a,{href:"https://www.npmjs.com/",target:"_blank",rel:"noopener noreferrer",children:"npm Registry"}),"."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["The ",(0,s.jsx)(n.code,{children:"-tag"})," argument specifies the specific ",(0,s.jsx)(n.a,{href:"https://docs.npmjs.com/adding-dist-tags-to-packages",target:"_blank",rel:"noopener noreferrer",children:"dist tags"})," to be used for the release."]}),"\n"]}),"\n",(0,s.jsxs)(n.h2,{id:"modern-gen-release-note",children:[(0,s.jsx)(n.code,{children:"modern gen-release-note"}),(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#modern-gen-release-note",children:"#"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"Usage: modern gen-release-note [options]\n\nGenerate Release Note based on current repository changeset information\n\nOptions:\n  --repo <repo> The name of the repository to generate the Pull Request link, e.g.: web-infra-dev/modern.js\n  --custom <cumtom> Custom Release Note generation function\n  -h, --help display help for command\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Automatically generate ",(0,s.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Release_notes",target:"_blank",rel:"noopener noreferrer",children:"Release Note"})," based on the changeset information of the current repository."]}),"\n",(0,s.jsxs)(n.div,{className:"rspress-directive tip",children:[(0,s.jsx)(n.div,{className:"rspress-directive-title",children:"TIP"}),(0,s.jsx)(n.div,{className:"rspress-directive-content",children:(0,s.jsxs)(n.p,{children:["needs to be executed before the ",(0,s.jsx)(n.code,{children:"bump"})," command.\n"]})})]}),"\n",(0,s.jsxs)(n.h2,{id:"modern-upgrade",children:[(0,s.jsx)(n.code,{children:"modern upgrade"}),(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#modern-upgrade",children:"#"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'Usage: modern upgrade [options]\n\nUpgrade Modern.js to the latest version\n\nOptions:\n  --registry <registry> customize npm registry (default: "")\n  -d,--debug Enable Debug mode to print debug log messages (default: false)\n  --cwd <cwd> project path (default: "")\n  -h, --help display help for command\n'})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"modern upgrade"})," command is used to upgrade the project Modern.js related dependencies to the latest version."]}),"\n",(0,s.jsxs)(n.p,{children:["Executing the command ",(0,s.jsx)(n.code,{children:"npx modern upgrade"})," in the project root directory will update the Modern.js dependencies in ",(0,s.jsx)(n.code,{children:"package.json"})," of the currently executing project to the latest version by default."]})]})}function t(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,d.useMDXComponents)(),e.components);return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}n.default=t,t.__RSPRESS_PAGE_META={},t.__RSPRESS_PAGE_META["en%2Fguide%2Fbasic%2Fcommand-preview.md"]={toc:[{text:"`modern build`",id:"modern-build",depth:2},{text:"`modern new`",id:"modern-new",depth:2},{text:"`modern dev`",id:"modern-dev",depth:2},{text:"`modern test`",id:"modern-test",depth:2},{text:"`modern lint`",id:"modern-lint",depth:2},{text:"`modern change`",id:"modern-change",depth:2},{text:"`modern pre`",id:"modern-pre",depth:2},{text:"`modern bump`",id:"modern-bump",depth:2},{text:"`modern release`",id:"modern-release",depth:2},{text:"`modern gen-release-note`",id:"modern-gen-release-note",depth:2},{text:"`modern upgrade`",id:"modern-upgrade",depth:2}],title:"CLI Commands",frontmatter:{sidebar_position:2}}}}]);