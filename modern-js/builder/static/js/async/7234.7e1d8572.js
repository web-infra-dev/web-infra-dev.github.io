(self.webpackChunk_modern_js_builder_doc=self.webpackChunk_modern_js_builder_doc||[]).push([["7234"],{81128:function(e,n,o){"use strict";o.r(n),o.d(n,{default:function(){return c}});var r=o("15169"),i=o("43932"),s=o("9880"),t=o("23169");function a(e){var n=Object.assign({h1:"h1",a:"a",p:"p",ul:"ul",li:"li",h2:"h2",h3:"h3",h4:"h4",pre:"pre",code:"code",strong:"strong",ol:"ol"},(0,t.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h1,{id:"using-storybook",children:["Using Storybook",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#using-storybook",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://storybook.js.org/",target:"_blank",rel:"noopener noreferrer",children:"Storybook"})," is a tool dedicated to component debugging, providing around component development."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Develop UIs that are more durable"}),"\n",(0,s.jsx)(n.li,{children:"Test UIs with less effort and no flakes"}),"\n",(0,s.jsx)(n.li,{children:"Document UI for your team to reuse"}),"\n",(0,s.jsx)(n.li,{children:"Share how the UI actually works"}),"\n",(0,s.jsx)(n.li,{children:"Automate UI workflows"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Before when using Storybook, there are various problems related to configurations, Babel, Webpack, less or sass, but those are already included in Modern.js builder, using Modern.js builder can make your configurations a log easier."}),"\n",(0,s.jsx)(n.p,{children:"You can switch between Webpack and Rspack smoothly in Modern.js builder, for those who already use Modern.js builder or Modern.js framework, you can start using Storybook with the same configurations."}),"\n",(0,s.jsxs)(n.h2,{id:"enable-storybook",children:["Enable Storybook",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#enable-storybook",children:"#"})]}),"\n",(0,s.jsxs)(n.h3,{id:"use-in-modernjs-projects",children:["Use in Modern.js projects",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#use-in-modernjs-projects",children:"#"})]}),"\n",(0,s.jsxs)(n.h4,{id:"havent-used-legacy-storybook-pluginmodern-jsplugin-storybook",children:["Haven\\'t used legacy Storybook plugin(@modern-js/plugin-storybook)",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#havent-used-legacy-storybook-pluginmodern-jsplugin-storybook",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"If your current project is already a Modern.js project and you haven't used any old version Storybook plugins, you can directly enable the Storybook feature by using the following command:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"$ npx modern new\n? Please select the operation you want: Enable features\n? Please select the feature name: Enable\u300CStorybook\u300DV7\n"})}),"\n",(0,s.jsx)(n.p,{children:"This command will create a template for Storybook, including:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Creating a configuration folder .storybook and a default configuration file .storybook/main.ts."}),"\n",(0,s.jsx)(n.li,{children:"Creating example story components."}),"\n",(0,s.jsx)(n.li,{children:"Updating package.json to add dependencies @storybook/addon-essentials and @modern-js/storybook, as well as creating Storybook-related scripts."}),"\n"]}),"\n",(0,s.jsxs)(n.h4,{id:"using-legacy-storybook-pluginmodern-jsplugin-storybook",children:["Using legacy Storybook plugin(@modern-js/plugin-storybook)",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#using-legacy-storybook-pluginmodern-jsplugin-storybook",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"If you are using an older version of the Storybook plugin, you can still run the command above to create templates and modify the package.json. You can also upgrade manually."}),"\n",(0,s.jsxs)(n.p,{children:["If you have made some custom configurations to Storybook in the older version, you need to move the configuration files from ",(0,s.jsx)(n.code,{children:"root/config/storybook/"})," to the ",(0,s.jsx)(n.code,{children:"root/.storybook/ directory"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Specify framework as ",(0,s.jsx)(n.code,{children:"@modern-js/storybook"})," in ",(0,s.jsx)(n.code,{children:"root/.storybook/main.(j|t)s"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-diff",children:"const config = {\n+  framework: '@modern-js/storybook'\n};\n\nexport default config;\n"})}),"\n",(0,s.jsx)(n.p,{children:"Update dependencies like @storybook/addon-* to major version 7."}),"\n",(0,s.jsxs)(n.p,{children:["Finally, follow the official Storybook documentation to make the necessary updates for some breaking changes, such as changes in story writing and MDX syntax. You can refer to the migration guide at ",(0,s.jsx)(n.a,{href:"https://storybook.js.org/docs/react/migration-guide",target:"_blank",rel:"noopener noreferrer",children:"https://storybook.js.org/docs/react/migration-guide"}),"."]}),"\n",(0,s.jsxs)(n.h3,{id:"native-storybook-users",children:["Native Storybook users",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#native-storybook-users",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["Modern.js Builder only support Storybook 7, so you need to upgrade from Storybook version 6 to version 7, please follow the steps outlined in the official Storybook documentation at ",(0,s.jsx)(n.a,{href:"https://storybook.js.org/docs/react/migration-guide",target:"_blank",rel:"noopener noreferrer",children:"https://storybook.js.org/docs/react/migration-guide"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["To install @modern-js/storybook as the framework for Storybook, if you have interest in Rspack, install ",(0,s.jsx)(n.code,{children:"@modern-js/builder-provider-rspack"}),", otherwise you should install ",(0,s.jsx)(n.code,{children:"@modern-js/builder-provider-webpack"}),". Rspack is super fast compared to Webpack."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-diff",meta:"filename='.storybook/main.js'",children:"const config = {\n-  framework: '@storybook/react-webapck5',\n+  framework: '@modern-js/storybook',\n};\n\nexport default config;\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The default config file is ",(0,s.jsx)(n.code,{children:"modern.config.(j|t)s"}),", for the detail config, see ",(0,s.jsx)(n.a,{href:"/guide/basic/builder-config",children:"builder config"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"If the original project includes configurations for Babel, they need to be written in the modern configuration. Most Babel configurations have already been included in Modern.js."}),"\n",(0,s.jsxs)(n.h2,{id:"enable-rspack-build",children:["Enable Rspack build",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#enable-rspack-build",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"Rspack is known for its fast build speed. To use Rspack as a build tool in Modern.js, you only need to configure it as follows:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-diff",meta:"filename='.storybook/main.js'",children:"const config = {\n  framework: {\n    name: '@modern-js/storybook',\n    options: {\n-      bundler: 'webpack'\n+      bundler: 'rspack'\n    },\n    typescript: {\n-      reactDocgen: 'react-docgen-typescript'\n+      reactDocgen: 'react-docgen'\n    }\n  }\n};\n\nexport default config;\n"})}),"\n",(0,s.jsx)(n.p,{children:"Note that in the above configuration, the reactDocgen configuration has been changed because Rspack currently does not support @storybook/react-docgen-typescript-plugin."}),"\n",(0,s.jsx)(n.p,{children:"Before starting, make sure that you have installed the @modern-js/builder-rspack-provider package."}),"\n",(0,s.jsxs)(n.h2,{id:"configurations",children:["Configurations",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#configurations",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["There are some configurations in ",(0,s.jsx)(n.code,{children:".storybook/main.js"}),"."]}),"\n",(0,s.jsxs)(n.h3,{id:"configpath",children:["configPath",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#configpath",children:"#"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Type"}),": ",(0,s.jsx)(n.code,{children:"string"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Default"}),": ",(0,s.jsx)(n.code,{children:"modern.config.(j|t)s"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Specify the path of Modern.js Builder configuration."}),"\n",(0,s.jsx)(n.p,{children:"Example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",meta:"filename='.storybook/main.js'",children:"const config = {\n  framework: {\n    name: '@modern-js/storybook',\n    options: {\n      configPath: 'modern.storybook.config.ts'\n    }\n  }\n};\n\nexport default config;\n"})}),"\n",(0,s.jsxs)(n.h4,{id:"bundler",children:["bundler",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#bundler",children:"#"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Type"}),": ",(0,s.jsx)(n.code,{children:"'webpack' | 'rspack'"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Default"}),": ",(0,s.jsx)(n.code,{children:"webpack"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Specify the underlying build tool to use either Webpack or Rspack. Please make sure to install the corresponding provider. To use Webpack, install @modern-js/builder-webpack-provider. To use Rspack, install @modern-js/builder-rspack-provider."}),"\n",(0,s.jsx)(n.p,{children:"Example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",meta:"filename='.storybook/main.js'",children:"const config = {\n  framework: {\n    name: '@modern-js/storybook',\n    options: {\n      bundler: 'rspack'\n    }\n  }\n};\n\nexport default config;\n"})}),"\n",(0,s.jsxs)(n.h4,{id:"builderconfig",children:["builderConfig",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#builderconfig",children:"#"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Type"}),": ",(0,s.jsx)(n.code,{children:"BuilderConfig"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Default"}),": ",(0,s.jsx)(n.code,{children:"undefined"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"To modify the configuration of the builder, which has a higher priority than the configuration file, you can specify the Modern.js builder configuration directly here if you do not want to use the configuration file."}),"\n",(0,s.jsx)(n.p,{children:"Example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",meta:"filename='.storybook/main.js'",children:"const config = {\n  framework: {\n    name: '@modern-js/storybook',\n    options: {\n      builderCofnig: {\n        alias: {\n          react: require.resolve('react'),\n          'react-dom': require.resolve('react-dom'),\n        }\n      }\n    }\n  }\n};\n\nexport default config;\n"})}),"\n",(0,s.jsxs)(n.h4,{id:"configfile",children:["ConfigFile",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#configfile",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["The configuration file includes an additional field: ",(0,s.jsx)(n.code,{children:"builderPlugins"}),", in addition to the Modern.js builder configuration. This field is used to enable builder plugins, such as enabling SWC compilation."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",meta:"filename='modern.config.ts'",children:"import { defineConfig } from '@modern-js/storybook';\nimport { builderPluginSwc } from '@modern-js/builder-plugin-swc';\n\nconst config = defineConfig({\n  builderPlugins: [builderPluginSwc()]\n});\n\nexport default config;\n"})}),"\n",(0,s.jsxs)(n.h2,{id:"benefits",children:["Benefits",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#benefits",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"Using @modern-js/storybook can bring you lightning-fast builds with Rspack, without the need for tedious configuration. It comes with many best practices for web development out-of-the-box, such as code splitting strategies, built-in support for CSS modules and postcss, TypeScript support, and commonly used Babel plugins."}),"\n",(0,s.jsx)(n.p,{children:"The powerful capabilities of Modern.js builder can be directly used in Storybook projects."}),"\n",(0,s.jsxs)(n.h2,{id:"trouble-shooting",children:["Trouble Shooting",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#trouble-shooting",children:"#"})]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Modern.js builder won't load your other configurations like ",(0,s.jsx)(n.code,{children:"babel.config.json"}),", babel config needs to be set in Modern.js config, ",(0,s.jsx)(n.a,{href:"/api/config-tools#toolsbabel",children:"tools.babel"}),".\nWebpack configuration can be written in either ",(0,s.jsx)(n.a,{href:"/api/config-tools#toolswebpack",children:"tools.webpack"})," or ",(0,s.jsx)(n.a,{href:"/api/config-tools#toolswebpackchain",children:"tools.webpackChain"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["If you find that the build performance is not good, please check if the Storybook automatic documentation generation feature is enabled. For optimal performance, configure it to use ",(0,s.jsx)(n.code,{children:"react-docgen"}),". The difference between ",(0,s.jsx)(n.code,{children:"react-docgen"})," and ",(0,s.jsx)(n.code,{children:"react-docgen-typescript"})," is that the former is implemented based on Babel, while the latter is implemented based on TypeScript. The former has better performance but weaker type inference capabilities. If you are using Rspack for the build, only ",(0,s.jsx)(n.code,{children:"react-docgen"})," is supported."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",meta:"filename='.storybook/main.js'",children:"const config = {\n  typescript: {\n    reactDocgen: 'react-docgen'\n  }\n}\n\nexport default config\n"})})]})}function d(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,t.useMDXComponents)(),e.components).wrapper;return n?(0,s.jsx)(n,(0,i._)((0,r._)({},e),{children:(0,s.jsx)(a,(0,r._)({},e))})):a(e)}var c=d;d.__RSPRESS_PAGE_META={},d.__RSPRESS_PAGE_META["en%2Fguide%2Fadvanced%2Fstorybook.md"]={toc:[{text:"Enable Storybook",id:"enable-storybook",depth:2},{text:"Use in Modern.js projects",id:"use-in-modernjs-projects",depth:3},{text:"Haven\\\\'t used legacy Storybook plugin(@modern-js/plugin-storybook)",id:"havent-used-legacy-storybook-pluginmodern-jsplugin-storybook",depth:4},{text:"Using legacy Storybook plugin(@modern-js/plugin-storybook)",id:"using-legacy-storybook-pluginmodern-jsplugin-storybook",depth:4},{text:"Native Storybook users",id:"native-storybook-users",depth:3},{text:"Enable Rspack build",id:"enable-rspack-build",depth:2},{text:"Configurations",id:"configurations",depth:2},{text:"configPath",id:"configpath",depth:3},{text:"bundler",id:"bundler",depth:4},{text:"builderConfig",id:"builderconfig",depth:4},{text:"ConfigFile",id:"configfile",depth:4},{text:"Benefits",id:"benefits",depth:2},{text:"Trouble Shooting",id:"trouble-shooting",depth:2}],title:"Using Storybook"}}}]);