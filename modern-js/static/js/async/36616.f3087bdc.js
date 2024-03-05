/*! For license information please see 36616.f3087bdc.js.LICENSE.txt */
(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["36616"],{23456:function(e,n,o){"use strict";o.r(n);var r=o("39980"),i=o("96954");function s(e){let n=Object.assign({h1:"h1",a:"a",p:"p",ul:"ul",li:"li",div:"div",h2:"h2",pre:"pre",code:"code",h3:"h3",strong:"strong",ol:"ol",h5:"h5"},(0,i.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"using-storybook",children:["Using Storybook",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#using-storybook",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"https://storybook.js.org/",target:"_blank",rel:"noopener noreferrer",children:"Storybook"})," is a tool dedicated to component debugging, providing around component development."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Develop UIs that are more durable"}),"\n",(0,r.jsx)(n.li,{children:"Test UIs with less effort and no flakes"}),"\n",(0,r.jsx)(n.li,{children:"Document UI for your team to reuse"}),"\n",(0,r.jsx)(n.li,{children:"Share how the UI actually works"}),"\n",(0,r.jsx)(n.li,{children:"Automate UI workflows"}),"\n"]}),"\n",(0,r.jsxs)(n.div,{className:"rspress-directive tip",children:[(0,r.jsx)(n.div,{className:"rspress-directive-title",children:"TIP"}),(0,r.jsx)(n.div,{className:"rspress-directive-content",children:(0,r.jsxs)(n.p,{children:["This tutorial is suitable for Storybook V7 users. If you are using an old version of Storybook V6 (using the @modern-js/plugin-storybook plugin), you can refer to the ",(0,r.jsx)(n.a,{href:"#migration-guide",children:"Migration Guide"})," to upgrade.\n"]})})]}),"\n",(0,r.jsxs)(n.h2,{id:"quick-start",children:["Quick Start",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#quick-start",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"Modern.js integrates Storybook debugging capabilities by default. You can directly enable the Storybook feature by using the following command:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"$ npx modern new\n? Please select the operation you want: Enable features\n? Please select the feature name: Enable\u300CStorybook\u300DV7\n"})}),"\n",(0,r.jsx)(n.p,{children:"This command will create a template for Storybook, including:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Creating a configuration folder .storybook and a default configuration file .storybook/main.ts."}),"\n",(0,r.jsx)(n.li,{children:"Creating example story components."}),"\n",(0,r.jsx)(n.li,{children:"Updating package.json to add dependencies @storybook/addon-essentials and @modern-js/storybook, as well as creating Storybook-related scripts."}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["To start, run ",(0,r.jsx)(n.code,{children:"npm run storybook"}),"."]}),"\n",(0,r.jsxs)(n.h2,{id:"enable-rspack-build",children:["Enable Rspack build",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#enable-rspack-build",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"Rspack is known for its fast build speed. To use Rspack as a build tool in Modern.js, you only need to configure it as follows:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-diff",meta:"filename='.storybook/main.js'",children:"const config = {\n  framework: {\n    name: '@modern-js/storybook',\n    options: {\n-      bundler: 'webpack'\n+      bundler: 'rspack'\n    },\n  },\n  typescript: {\n-    reactDocgen: 'react-docgen-typescript'\n+    reactDocgen: 'react-docgen'\n  }\n};\n\nexport default config;\n"})}),"\n",(0,r.jsx)(n.p,{children:"Note that in the above configuration, the reactDocgen configuration has been changed because Rspack currently does not support @storybook/react-docgen-typescript-plugin."}),"\n",(0,r.jsxs)(n.h2,{id:"configurations",children:["Configurations",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#configurations",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["There are some configurations in ",(0,r.jsx)(n.code,{children:".storybook/main.js"}),"."]}),"\n",(0,r.jsxs)(n.h3,{id:"configpath",children:["configPath",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#configpath",children:"#"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Type"}),": ",(0,r.jsx)(n.code,{children:"string"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Default"}),": ",(0,r.jsx)(n.code,{children:"modern.config.(j|t)s"})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Specify the path of Modern.js configuration."}),"\n",(0,r.jsx)(n.p,{children:"Example:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",meta:"filename='.storybook/main.js'",children:"const config = {\n  framework: {\n    name: '@modern-js/storybook',\n    options: {\n      configPath: 'modern.storybook.config.ts',\n    },\n  },\n};\n\nexport default config;\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"bundler",children:["bundler",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#bundler",children:"#"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Type"}),": ",(0,r.jsx)(n.code,{children:"'webpack' | 'rspack'"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Default"}),": ",(0,r.jsx)(n.code,{children:"webpack"})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Specify the underlying build tool to use either Webpack or Rspack."}),"\n",(0,r.jsx)(n.p,{children:"Example:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",meta:"filename='.storybook/main.js'",children:"const config = {\n  framework: {\n    name: '@modern-js/storybook',\n    options: {\n      bundler: 'rspack',\n    },\n  },\n};\n\nexport default config;\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"builderconfig",children:["builderConfig",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#builderconfig",children:"#"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Type"}),": ",(0,r.jsx)(n.code,{children:"BuilderConfig"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Default"}),": ",(0,r.jsx)(n.code,{children:"undefined"})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"To modify the configuration of build, which has a higher priority than the configuration file, you can specify the build configuration directly here if you do not want to use the configuration file."}),"\n",(0,r.jsx)(n.p,{children:"Example:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",meta:"filename='.storybook/main.js'",children:"const config = {\n  framework: {\n    name: '@modern-js/storybook',\n    options: {\n      builderConfig: {\n        alias: {\n          react: require.resolve('react'),\n          'react-dom': require.resolve('react-dom'),\n        },\n      },\n    },\n  },\n};\n\nexport default config;\n"})}),"\n",(0,r.jsxs)(n.h2,{id:"command-line-interface",children:["Command Line Interface",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#command-line-interface",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"@modern-js/storybook proxies some of the storybook cli commands."}),"\n",(0,r.jsxs)(n.h3,{id:"storybook-dev",children:["storybook dev",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#storybook-dev",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["Start Storybook, more details at ",(0,r.jsx)(n.a,{href:"https://storybook.js.org/docs/react/api/cli-options#dev",target:"_blank",rel:"noopener noreferrer",children:"storybook#dev"}),"."]}),"\n",(0,r.jsxs)(n.h3,{id:"storybook-build",children:["storybook build",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#storybook-build",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["Build Storybook for production, more details at ",(0,r.jsx)(n.a,{href:"https://storybook.js.org/docs/react/api/cli-options#build",target:"_blank",rel:"noopener noreferrer",children:"storybook#build"}),"."]}),"\n",(0,r.jsxs)(n.h2,{id:"storybook-addon-compatibility",children:["Storybook addon compatibility",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#storybook-addon-compatibility",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"Due to the current version of Storybook in the document being version 7, please select the addon for Storybook V7."}),"\n",(0,r.jsx)(n.p,{children:"When an addon does not require additional Babel or Webpack configurations, it can be used directly, such as @storybook/addon-essentials."}),"\n",(0,r.jsx)(n.p,{children:"For some addons that require dependencies on Babel plugins and Webpack configurations, such as @storybook/addon-coverage, only @modern-js/builder-webpack-provider supports them."}),"\n",(0,r.jsxs)(n.h2,{id:"benefits",children:["Benefits",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#benefits",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"Using @modern-js/storybook can bring you lightning-fast builds with Rspack, without the need for tedious configuration. It comes with many best practices for web development out-of-the-box, such as code splitting strategies, built-in support for CSS modules and postcss, TypeScript support, and commonly used Babel plugins."}),"\n",(0,r.jsx)(n.p,{children:"The powerful build capabilities of Modern.js can be directly used in Storybook projects."}),"\n",(0,r.jsxs)(n.h2,{id:"trouble-shooting",children:["Trouble Shooting",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#trouble-shooting",children:"#"})]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Modern.js won't load your other configurations like ",(0,r.jsx)(n.code,{children:"babel.config.json"}),", babel config needs to be set in Modern.js config, ",(0,r.jsx)(n.a,{href:"/configure/app/tools/babel",children:"tools.babel"}),".\nWebpack configuration can be written in either ",(0,r.jsx)(n.a,{href:"/configure/app/tools/webpack",children:"tools.webpack"})," or ",(0,r.jsx)(n.a,{href:"/configure/app/tools/webpack-chain",children:"tools.webpackChain"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["If you find that the build performance is not good, please check if the Storybook automatic documentation generation feature is enabled. For optimal performance, configure it to use ",(0,r.jsx)(n.code,{children:"react-docgen"}),". The difference between ",(0,r.jsx)(n.code,{children:"react-docgen"})," and ",(0,r.jsx)(n.code,{children:"react-docgen-typescript"})," is that the former is implemented based on Babel, while the latter is implemented based on TypeScript. The former has better performance but weaker type inference capabilities. If you are using Rspack for the build, only ",(0,r.jsx)(n.code,{children:"react-docgen"})," is supported."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",meta:"filename='.storybook/main.js'",children:"const config = {\n  typescript: {\n    reactDocgen: 'react-docgen',\n  },\n};\n\nexport default config;\n"})}),"\n",(0,r.jsxs)(n.h2,{id:"migration-guide",children:["Migration Guide",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#migration-guide",children:"#"})]}),"\n",(0,r.jsxs)(n.h3,{id:"migrate-from-modern-jsplugin-storybook",children:["Migrate from @modern-js/plugin-storybook",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#migrate-from-modern-jsplugin-storybook",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["If you are a user migrating from V6 to V7, you can use V7 through ",(0,r.jsx)(n.a,{href:"#quick-start",children:"the above method"})," and make the following adjustments:"]}),"\n",(0,r.jsxs)(n.h5,{id:"modify-configuration-file",children:["Modify configuration file",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#modify-configuration-file",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["If you have made some custom configurations to Storybook in the older version, you need to move the configuration file ",(0,r.jsx)(n.code,{children:"root/config/storybook/main.(j|t)s"})," to ",(0,r.jsx)(n.code,{children:"root/.storybook/main.(j|t)s"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["And then add the following lines in ",(0,r.jsx)(n.code,{children:"root/.storybook/main.(j|t)s"}),", specify framework as ",(0,r.jsx)(n.code,{children:"@modern-js/storybook"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-diff",children:"const config = {\n+  framework: {\n+    name: '@modern-js/storybook'\n+  }\n};\n\nexport default config;\n"})}),"\n",(0,r.jsxs)(n.h5,{id:"update-dependencies",children:["Update Dependencies",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#update-dependencies",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"Update dependencies like @storybook/addon-* to major version 7."}),"\n",(0,r.jsxs)(n.h5,{id:"remove-modern-jsplugin-storybook",children:["Remove @modern-js/plugin-storybook",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#remove-modern-jsplugin-storybook",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"\u5728 modern.config.(j|t)s \u4E2D\u5220\u9664 @modern-js/plugin-storybook \u63D2\u4EF6\u7684\u6CE8\u518C\u3002"}),"\n",(0,r.jsxs)(n.h5,{id:"modify-storybook-syntax",children:["Modify Storybook Syntax",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#modify-storybook-syntax",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["Follow the official Storybook documentation to make the necessary updates for some breaking changes, such as changes in story writing and MDX syntax. You can refer to the migration guide at ",(0,r.jsx)(n.a,{href:"https://storybook.js.org/docs/react/migration-guide",target:"_blank",rel:"noopener noreferrer",children:"storybook migrate doc"}),"."]}),"\n",(0,r.jsxs)(n.h3,{id:"native-storybook-users",children:["Native Storybook users",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#native-storybook-users",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["Modern.js only support Storybook 7, so you need to upgrade from Storybook version 6 to version 7, please follow the steps outlined in the official Storybook documentation at ",(0,r.jsx)(n.a,{href:"https://storybook.js.org/docs/react/migration-guide",target:"_blank",rel:"noopener noreferrer",children:"storybook migrate doc"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-diff",meta:"filename='.storybook/main.js'",children:"const config = {\n-  framework: '@storybook/react-webapck5',\n+  framework: {\n+    name: '@modern-js/storybook'\n+  },\n};\n\nexport default config;\n"})}),"\n",(0,r.jsxs)(n.p,{children:["The default config file path is ",(0,r.jsx)(n.code,{children:"modern.config.(j|t)s"}),", for the detail config, see ",(0,r.jsx)(n.a,{href:"/configure/app/usage",children:"modern.js config"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"If the original project includes configurations for Babel, they need to be written in the modern configuration. Most Babel configurations have already been included in Modern.js."})]})}function t(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,i.useMDXComponents)(),e.components);return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(s,{...e})}):s(e)}n.default=t,t.__RSPRESS_PAGE_META={},t.__RSPRESS_PAGE_META["en%2Fguides%2Fadvanced-features%2Fusing-storybook.mdx"]={toc:[{text:"Quick Start",id:"quick-start",depth:2},{text:"Enable Rspack build",id:"enable-rspack-build",depth:2},{text:"Configurations",id:"configurations",depth:2},{text:"configPath",id:"configpath",depth:3},{text:"bundler",id:"bundler",depth:3},{text:"builderConfig",id:"builderconfig",depth:3},{text:"Command Line Interface",id:"command-line-interface",depth:2},{text:"storybook dev",id:"storybook-dev",depth:3},{text:"storybook build",id:"storybook-build",depth:3},{text:"Storybook addon compatibility",id:"storybook-addon-compatibility",depth:2},{text:"Benefits",id:"benefits",depth:2},{text:"Trouble Shooting",id:"trouble-shooting",depth:2},{text:"Migration Guide",id:"migration-guide",depth:2},{text:"Migrate from @modern-js/plugin-storybook",id:"migrate-from-modern-jsplugin-storybook",depth:3},{text:"Native Storybook users",id:"native-storybook-users",depth:3}],title:"Using Storybook",frontmatter:{sidebar_position:15}}}}]);