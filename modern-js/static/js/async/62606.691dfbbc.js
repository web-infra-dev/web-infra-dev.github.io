/*! For license information please see 62606.691dfbbc.js.LICENSE.txt */
(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["62606"],{7625:function(e,n,r){"use strict";r.r(n);var s=r("39980"),t=r("9580");function i(e){let n=Object.assign({h1:"h1",a:"a",p:"p",code:"code",h2:"h2",ul:"ul",li:"li",pre:"pre",div:"div"},(0,t.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h1,{id:"usage",children:["Usage",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#usage",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["In Web App, Npm Module projects, we provide the ",(0,s.jsx)(n.code,{children:"new"})," command to create project elements, enable features and create sub-project."]}),"\n",(0,s.jsxs)(n.h2,{id:"web-app",children:["Web App",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#web-app",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["Web App projects use the ",(0,s.jsx)(n.code,{children:"new"})," command provided by ",(0,s.jsx)(n.code,{children:"@modern-js/app-tools"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"new"})," command provides three types of operations:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Create project elements"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Enable optional features"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Automatic refactoring"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Each type of operation provides a corresponding list of supported options, which can be selected based on the project situation."}),"\n",(0,s.jsx)(n.p,{children:"For example:"}),"\n",(0,s.jsx)(n.p,{children:"Create a new application entry:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'npm run new\n? Please select the operation you want: Create Element\n? Please select the type of element to create: New "entry"\n? Please fill in the entry name: entry\n'})}),"\n",(0,s.jsxs)(n.p,{children:["After running, a new folder with the corresponding name of the entry will be created in the ",(0,s.jsx)(n.code,{children:"src"})," directory of the project, along with the default entry file. The previous entry files under the ",(0,s.jsx)(n.code,{children:"src"})," directory will be sorted into the folder corresponding to the ",(0,s.jsx)(n.code,{children:"name"})," field in ",(0,s.jsx)(n.code,{children:"package.json"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"Enable BFF function:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"npm run new\n? Please select the operation you want: Enable Features\n? Please select the feature name: Enable BFF\n? Please select the BFF type: Function\n? Please select the framework: Express\n"})}),"\n",(0,s.jsxs)(n.p,{children:["After running, BFF-related dependencies will be installed in the project, and an ",(0,s.jsx)(n.code,{children:"api"})," directory will be created for BFF module development, along with prompt information for registering BFF plugins."]}),"\n",(0,s.jsxs)(n.div,{className:"rspress-directive info",children:[(0,s.jsx)(n.div,{className:"rspress-directive-title",children:"INFO"}),(0,s.jsxs)(n.div,{className:"rspress-directive-content",children:[(0,s.jsxs)(n.p,{children:["We did not automatically register the plugin for the user here because the ",(0,s.jsx)(n.code,{children:"modern.config.[tj]s"})," may change during the project lifecycle, and there may be problems with mutual references between modules, so allowing the user to manually register can ensure the correctness of modifying the configuration."]}),"\n",(0,s.jsx)(n.p,{children:"In subsequent customized development, if there are similar needs, you can also provide users with operational guidance through prompts, allowing users to manually operate on files.\n"})]})]}),"\n",(0,s.jsxs)(n.div,{className:"rspress-directive warning",children:[(0,s.jsx)(n.div,{className:"rspress-directive-title",children:"WARNING"}),(0,s.jsx)(n.div,{className:"rspress-directive-content",children:(0,s.jsxs)(n.p,{children:["When running the ",(0,s.jsx)(n.code,{children:"new"})," command, it may be necessary to enable a feature that is not in the list. Check whether the corresponding plugin for the feature has been installed in the ",(0,s.jsx)(n.code,{children:"package.json"})," file of the project. If you still need to use the ",(0,s.jsx)(n.code,{children:"new"})," command to enable it, you need to manually remove the plugin dependency first.\n"]})})]}),"\n",(0,s.jsxs)(n.h2,{id:"npm-module",children:["Npm Module",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#npm-module",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["Npm Module projects use the ",(0,s.jsx)(n.code,{children:"new"})," command provided by ",(0,s.jsx)(n.code,{children:"@modern-js/module-tools"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"new"})," command provides the ability to enable optional features."]}),"\n",(0,s.jsx)(n.p,{children:"For example:"}),"\n",(0,s.jsx)(n.p,{children:"Enable Storybook capability:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"npm run new\n? Please select the operation you want: Enable Features\n? Please select the feature name: Enable Storybook\n"})}),"\n",(0,s.jsxs)(n.p,{children:["After running, Storybook plugin dependencies will be installed in the project, and the ",(0,s.jsx)(n.code,{children:"storybook"})," command will be added. A ",(0,s.jsx)(n.code,{children:"stories"})," directory will be created for Storybook module development, along with prompt information for registering Storybook plugins."]})]})}function o(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,t.ah)(),e.components);return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(i,{...e})}):i(e)}n.default=o,o.__RSPRESS_PAGE_META={},o.__RSPRESS_PAGE_META["en%2Fguides%2Ftopic-detail%2Fgenerator%2Fnew%2Fuse.md"]={toc:[{text:"Web App",id:"web-app",depth:2},{text:"Npm Module",id:"npm-module",depth:2}],title:"Usage",frontmatter:{sidebar_position:1}}}}]);