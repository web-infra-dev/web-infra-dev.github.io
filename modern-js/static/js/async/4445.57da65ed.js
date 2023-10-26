(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["4445"],{46756:function(e,n,s){"use strict";s.r(n),s.d(n,{default:function(){return a}});var i=s("15169"),r=s("43932"),d=s("9880"),l=s("23169");function o(e){var n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",a:"a",h3:"h3",pre:"pre",div:"div",h4:"h4"},(0,l.useMDXComponents)(),e.components);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"Type:"})," ",(0,d.jsx)(n.code,{children:"Object | Function"})]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"Default:"})," ",(0,d.jsx)(n.code,{children:"undefined"})]}),"\n"]}),"\n",(0,d.jsxs)(n.p,{children:["With ",(0,d.jsx)(n.code,{children:"tools.babel"})," you can modify the options of ",(0,d.jsx)(n.a,{href:"https://github.com/babel/babel-loader",target:"_blank",rel:"noopener noreferrer",children:"babel-loader"}),"."]}),"\n",(0,d.jsxs)(n.h3,{id:"usage-scenarios",children:["Usage Scenarios",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#usage-scenarios",children:"#"})]}),"\n",(0,d.jsxs)(n.p,{children:["Please note the limitations of ",(0,d.jsx)(n.code,{children:"tools.babel"})," in the following usage scenarios:"]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["Rspack scenario: When using Rspack as the bundler, using the ",(0,d.jsx)(n.code,{children:"tools.babel"})," option will significantly slow down the Rspack's build speed. This is because Rspack defaults to using SWC for compilation, and configuring Babel will cause the code to be compiled twice, resulting in additional compilation overhead."]}),"\n",(0,d.jsxs)(n.li,{children:["webpack + SWC scenario: When using webpack as the bundler, if you use Builder's SWC plugin for code compilation, the ",(0,d.jsx)(n.code,{children:"tools.babel"})," option will not take effect."]}),"\n"]}),"\n",(0,d.jsxs)(n.h3,{id:"function-type",children:["Function Type",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#function-type",children:"#"})]}),"\n",(0,d.jsxs)(n.p,{children:["When ",(0,d.jsx)(n.code,{children:"tools.babel"})," is of type ",(0,d.jsx)(n.code,{children:"Function"}),", the default Babel configuration will be passed as the first parameter. You can directly modify the configuration object or return an object as the final ",(0,d.jsx)(n.code,{children:"babel-loader"})," configuration."]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    babel(config) {\n      // Add a Babel plugin\n      // note: the plugin have been added to the default config to support antd load on demand\n      config.plugins.push([\n        'babel-plugin-import',\n        {\n          libraryName: 'xxx-components',\n          libraryDirectory: 'es',\n          style: true,\n        },\n      ]);\n    },\n  },\n};\n"})}),"\n",(0,d.jsxs)(n.p,{children:["The second parameter of the ",(0,d.jsx)(n.code,{children:"tools.babel"})," function provides some more convenient utility functions. Please continue reading the documentation below."]}),"\n",(0,d.jsxs)(n.div,{className:"rspress-directive tip",children:[(0,d.jsx)(n.div,{className:"rspress-directive-title",children:"TIP"}),(0,d.jsx)(n.div,{className:"rspress-directive-content",children:(0,d.jsxs)(n.p,{children:["The above example is just for reference, usually you don't need to manually configure ",(0,d.jsx)(n.code,{children:"babel-plugin-import"}),", because the Builder already provides a more general ",(0,d.jsx)(n.code,{children:"source.transformImport"})," configuration.\n"]})})]}),"\n",(0,d.jsxs)(n.h3,{id:"object-type",children:["Object Type",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#object-type",children:"#"})]}),"\n",(0,d.jsxs)(n.p,{children:["When ",(0,d.jsx)(n.code,{children:"tools.babel"}),"'s type is ",(0,d.jsx)(n.code,{children:"Object"}),", the config will be shallow merged with default config by ",(0,d.jsx)(n.code,{children:"Object.assign"}),"."]}),"\n",(0,d.jsxs)(n.div,{className:"rspress-directive caution",children:[(0,d.jsx)(n.div,{className:"rspress-directive-title",children:"CAUTION"}),(0,d.jsx)(n.div,{className:"rspress-directive-content",children:(0,d.jsxs)(n.p,{children:["Note that ",(0,d.jsx)(n.code,{children:"Object.assign"})," is a shallow copy and will completely overwrite the built-in ",(0,d.jsx)(n.code,{children:"presets"})," or ",(0,d.jsx)(n.code,{children:"plugins"})," array, please use it with caution.\n"]})})]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    babel: {\n      plugins: [\n        [\n          'babel-plugin-import',\n          {\n            libraryName: 'xxx-components',\n            libraryDirectory: 'es',\n            style: true,\n          },\n        ],\n      ],\n    },\n  },\n};\n"})}),"\n",(0,d.jsxs)(n.h3,{id:"util-functions",children:["Util Functions",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#util-functions",children:"#"})]}),"\n",(0,d.jsxs)(n.p,{children:["When ",(0,d.jsx)(n.code,{children:"tools.babel"})," is a Function, the tool functions available for the second parameter are as follows:"]}),"\n",(0,d.jsxs)(n.h4,{id:"addplugins",children:["addPlugins",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#addplugins",children:"#"})]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"Type:"})," ",(0,d.jsx)(n.code,{children:"(plugins: BabelPlugin[]) => void"})]}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:"Add some Babel plugins. For example:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    babel(config, { addPlugins }) {\n      addPlugins([\n        [\n          'babel-plugin-import',\n          {\n            libraryName: 'xxx-components',\n            libraryDirectory: 'es',\n            style: true,\n          },\n        ],\n      ]);\n    },\n  },\n};\n"})}),"\n",(0,d.jsxs)(n.h4,{id:"addpresets",children:["addPresets",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#addpresets",children:"#"})]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"Type:"})," ",(0,d.jsx)(n.code,{children:"(presets: BabelPlugin[]) => void"})]}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:"Add Babel preset configuration. (No need to add presets in most cases)"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    babel(config, { addPresets }) {\n      addPresets(['@babel/preset-env']);\n    },\n  },\n};\n"})}),"\n",(0,d.jsxs)(n.h4,{id:"removeplugins",children:["removePlugins",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#removeplugins",children:"#"})]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"Type:"})," ",(0,d.jsx)(n.code,{children:"(plugins: string | string[]) => void"})]}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:"To remove the Babel plugin, just pass in the name of the plugin to be removed, you can pass in a single string or an array of strings."}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    babel(config, { removePlugins }) {\n      removePlugins('babel-plugin-import');\n    },\n  },\n};\n"})}),"\n",(0,d.jsxs)(n.h4,{id:"removepresets",children:["removePresets",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#removepresets",children:"#"})]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"Type:"})," ",(0,d.jsx)(n.code,{children:"(presets: string | string[]) => void"})]}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:"To remove the Babel preset configuration, pass in the name of the preset to be removed, you can pass in a single string or an array of strings."}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    babel(config, { removePresets }) {\n      removePresets('@babel/preset-env');\n    },\n  },\n};\n"})}),"\n",(0,d.jsxs)(n.h4,{id:"addincludes",children:["addIncludes",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#addincludes",children:"#"})]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"Type:"})," ",(0,d.jsx)(n.code,{children:"(includes: string | RegExp | (string | RegExp)[]) => void"})]}),"\n"]}),"\n",(0,d.jsxs)(n.p,{children:["By default, Babel will only compile the application code in the src directory. With ",(0,d.jsx)(n.code,{children:"addIncludes"})," you can specify that Babel compile some files in node_modules. For example:"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    babel(config, { addIncludes }) {\n      addIncludes(/\\/node_modules\\/query-string\\//);\n    },\n  },\n};\n"})}),"\n",(0,d.jsxs)(n.div,{className:"rspress-directive tip",children:[(0,d.jsx)(n.div,{className:"rspress-directive-title",children:"TIP"}),(0,d.jsxs)(n.div,{className:"rspress-directive-content",children:[(0,d.jsxs)(n.p,{children:["The usage of the ",(0,d.jsx)(n.code,{children:"addIncludes"})," function is identical to the ",(0,d.jsx)(n.code,{children:"source.include"})," configuration option. We recommend using ",(0,d.jsx)(n.code,{children:"source.include"})," instead of ",(0,d.jsx)(n.code,{children:"addIncludes"})," because ",(0,d.jsx)(n.code,{children:"source.include"})," has a wider range of use cases. For example, when migrating from Babel to SWC compilation, ",(0,d.jsx)(n.code,{children:"source.include"})," can still work, while the ",(0,d.jsx)(n.code,{children:"addIncludes"})," function will not be effective."]}),"\n",(0,d.jsxs)(n.p,{children:["Please refer to the ",(0,d.jsx)(n.a,{href:"https://modernjs.dev/builder/en/api/config-source.html#sourceinclude",target:"_blank",rel:"noopener noreferrer",children:"source.include documentation"})," for more detailed usage.\n"]})]})]}),"\n",(0,d.jsxs)(n.h4,{id:"addexcludes",children:["addExcludes",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#addexcludes",children:"#"})]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"Type:"})," ",(0,d.jsx)(n.code,{children:"(excludes: string | RegExp | (string | RegExp)[]) => void"})]}),"\n"]}),"\n",(0,d.jsxs)(n.p,{children:["Contrary to ",(0,d.jsx)(n.code,{children:"addIncludes"}),", specifies that certain files are excluded from Babel's compilation."]}),"\n",(0,d.jsxs)(n.p,{children:["For example, without compiling files in the ",(0,d.jsx)(n.code,{children:"src/example"})," directory:"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    babel(config, { addExcludes }) {\n      addExcludes('src/example');\n    },\n  },\n};\n"})}),"\n",(0,d.jsxs)(n.div,{className:"rspress-directive tip",children:[(0,d.jsx)(n.div,{className:"rspress-directive-title",children:"TIP"}),(0,d.jsx)(n.div,{className:"rspress-directive-content",children:(0,d.jsxs)(n.p,{children:["The usage of the ",(0,d.jsx)(n.code,{children:"addExcludes"})," function is basically the same as the ",(0,d.jsx)(n.code,{children:"source.exclude"})," config, please see the ",(0,d.jsx)(n.a,{href:"https://modernjs.dev/builder/api/config-source.html#sourceexclude",target:"_blank",rel:"noopener noreferrer",children:"source.exclude documentation"})," for a more detailed usage. You can also use ",(0,d.jsx)(n.code,{children:"source.exclude"})," directly instead of the ",(0,d.jsx)(n.code,{children:"addExcludes"})," function.\n"]})})]}),"\n",(0,d.jsxs)(n.h4,{id:"modifypresetenvoptions",children:["modifyPresetEnvOptions",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#modifypresetenvoptions",children:"#"})]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"Type:"})," ",(0,d.jsx)(n.code,{children:"(options: PresetEnvOptions) => void"})]}),"\n"]}),"\n",(0,d.jsxs)(n.p,{children:["Modify the configuration of ",(0,d.jsx)(n.a,{href:"https://babeljs.io/docs/en/babel-preset-env",target:"_blank",rel:"noopener noreferrer",children:"@babel/preset-env"}),", the configuration you pass in will be shallowly merged with default config. For example:"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    babel(config, { modifyPresetEnvOptions }) {\n      modifyPresetEnvOptions({\n        targets: {\n          browsers: ['last 2 versions'],\n        },\n      });\n    },\n  },\n};\n"})}),"\n",(0,d.jsxs)(n.h4,{id:"modifypresetreactoptions",children:["modifyPresetReactOptions",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#modifypresetreactoptions",children:"#"})]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"Type:"})," ",(0,d.jsx)(n.code,{children:"(options: PresetReactOptions) => void"})]}),"\n"]}),"\n",(0,d.jsxs)(n.p,{children:["Modify the configuration of ",(0,d.jsx)(n.a,{href:"https://babeljs.io/docs/en/babel-preset-react",target:"_blank",rel:"noopener noreferrer",children:"@babel/preset-react"}),", the configuration you pass in will be shallowly merged with default config. For example:"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    babel(config, { modifyPresetReactOptions }) {\n      modifyPresetReactOptions({\n        pragma: 'React.createElement',\n      });\n    },\n  },\n};\n"})}),"\n",(0,d.jsxs)(n.h3,{id:"debugging-babel-configuration",children:["Debugging Babel Configuration",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#debugging-babel-configuration",children:"#"})]}),"\n",(0,d.jsxs)(n.p,{children:["After modifying the ",(0,d.jsx)(n.code,{children:"babel-loader"})," configuration through ",(0,d.jsx)(n.code,{children:"tools.babel"}),", you can view the final generated configuration in ",(0,d.jsx)(n.a,{href:"https://modernjs.dev/builder/en/guide/debug/debug-mode.html",target:"_blank",rel:"noopener noreferrer",children:"Builder debug mode"}),"."]}),"\n",(0,d.jsxs)(n.p,{children:["First, enable debug mode by using the ",(0,d.jsx)(n.code,{children:"DEBUG=builder"})," parameter:"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:"# Debug development mode\nDEBUG=builder pnpm dev\n\n# Debug production mode\nDEBUG=builder pnpm build\n"})}),"\n",(0,d.jsxs)(n.p,{children:["Then open the generated ",(0,d.jsx)(n.code,{children:"(webpack|rspack).config.web.js"})," file and search for the ",(0,d.jsx)(n.code,{children:"babel-loader"})," keyword to see the complete ",(0,d.jsx)(n.code,{children:"babel-loader"})," configuration."]})]})}function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,l.useMDXComponents)(),e.components).wrapper;return n?(0,d.jsx)(n,(0,r._)((0,i._)({},e),{children:(0,d.jsx)(o,(0,i._)({},e))})):o(e)}var a=t;t.__RSPRESS_PAGE_META={},t.__RSPRESS_PAGE_META["..%2F..%2Fbuilder-doc%2Fdocs%2Fen%2Fconfig%2Ftools%2Fbabel.md"]={toc:[{text:"Usage Scenarios",id:"usage-scenarios",depth:3},{text:"Function Type",id:"function-type",depth:3},{text:"Object Type",id:"object-type",depth:3},{text:"Util Functions",id:"util-functions",depth:3},{text:"addPlugins",id:"addplugins",depth:4},{text:"addPresets",id:"addpresets",depth:4},{text:"removePlugins",id:"removeplugins",depth:4},{text:"removePresets",id:"removepresets",depth:4},{text:"addIncludes",id:"addincludes",depth:4},{text:"addExcludes",id:"addexcludes",depth:4},{text:"modifyPresetEnvOptions",id:"modifypresetenvoptions",depth:4},{text:"modifyPresetReactOptions",id:"modifypresetreactoptions",depth:4},{text:"Debugging Babel Configuration",id:"debugging-babel-configuration",depth:3}],title:""}},10603:function(e,n,s){"use strict";s.r(n),s.d(n,{default:function(){return c},frontmatter:function(){return h}});var i=s("15169"),r=s("43932"),d=s("9880"),l=s("23169"),o=s("46756");function t(e){var n=Object.assign({h1:"h1",a:"a",div:"div",p:"p"},(0,l.useMDXComponents)(),e.components);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.h1,{id:"toolsbabel",children:["tools.babel",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#toolsbabel",children:"#"})]}),"\n",(0,d.jsxs)(n.div,{className:"rspress-directive tip",children:[(0,d.jsx)(n.div,{className:"rspress-directive-title",children:"TIP"}),(0,d.jsx)(n.div,{className:"rspress-directive-content",children:(0,d.jsxs)(n.p,{children:["This config is provided by Modern.js Builder, more detail can see ",(0,d.jsx)(n.a,{href:"https://modernjs.dev/builder/en/api/config-tools.html#toolsbabel",target:"_blank",rel:"noopener noreferrer",children:"tools.babel"}),".\n"]})})]}),"\n","\n",(0,d.jsx)(o.default,{})]})}function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,l.useMDXComponents)(),e.components).wrapper;return n?(0,d.jsx)(n,(0,r._)((0,i._)({},e),{children:(0,d.jsx)(t,(0,i._)({},e))})):t(e)}var c=a;a.__RSPRESS_PAGE_META={},a.__RSPRESS_PAGE_META["en%2Fconfigure%2Fapp%2Ftools%2Fbabel.mdx"]={toc:[],title:"tools.babel"};var h={sidebar_label:"babel"}}}]);