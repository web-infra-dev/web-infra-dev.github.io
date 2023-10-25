(self.webpackChunk_modern_js_builder_doc=self.webpackChunk_modern_js_builder_doc||[]).push([["813"],{13949:function(e,n,i){"use strict";i.r(n),i.d(n,{default:function(){return h},frontmatter:function(){return g}});var r=i("15169"),s=i("43932"),l=i("9880"),o=i("23169"),d=i("60723"),t=i("61985"),a=i("20283"),c=i("94132");function p(e){var n=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",ul:"ul",li:"li",code:"code",pre:"pre",h3:"h3",strong:"strong"},(0,o.useMDXComponents)(),e.components);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(n.h1,{id:"plugin-core",children:["Plugin Core",(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#plugin-core",children:"#"})]}),"\n",(0,l.jsx)(n.p,{children:"This section describes the core plugin types and APIs."}),"\n",(0,l.jsxs)(n.h2,{id:"builderplugin",children:["BuilderPlugin",(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#builderplugin",children:"#"})]}),"\n",(0,l.jsx)(n.p,{children:"The type of the plugin object. The plugin object contains the following properties:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"name"}),": The name of the plugin, a unique identifier."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"setup"}),": The setup function of the plugin, which can be an asynchronous function. This function will only be executed once when the plugin is initialized."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"pre"}),": Specifies the preceding plugins for the current plugin. You can pass an array of preceding plugin names, and the current plugin will be executed after these plugins."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"post"}),": Specifies the succeeding plugins for the current plugin. You can pass an array of succeeding plugin names, and the current plugin will be executed before these plugins."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"remove"}),": Specifies the plugins to be removed. You can pass an array of plugin names to be removed."]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"The type of the plugin object, which contains the following properties:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-ts",children:"export type BuilderPlugin<API = BuilderPluginAPI> = {\n  name: string;\n  pre?: string[];\n  post?: string[];\n  remove?: string[];\n  setup: (api: API) => Promise<void> | void;\n};\n"})}),"\n",(0,l.jsxs)(n.p,{children:["You can import this type from ",(0,l.jsx)(n.code,{children:"@modern-js/builder"}),":"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-ts",children:"import type { BuilderPlugin } from '@modern-js/builder';\n\nexport default (): BuilderPlugin => ({\n  name: 'builder-plugin-foo',\n\n  pre: ['builder-plugin-bar'],\n\n  setup: api => {\n    api.onAfterBuild(() => {\n      console.log('after build!');\n    });\n  },\n});\n"})}),"\n",(0,l.jsxs)(n.h3,{id:"pre-plugins",children:["Pre-Plugins",(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#pre-plugins",children:"#"})]}),"\n",(0,l.jsxs)(n.p,{children:["By default, plugins are executed in the order they are added. You can declare pre-execution plugins using the ",(0,l.jsx)(n.code,{children:"pre"})," field."]}),"\n",(0,l.jsx)(n.p,{children:"For example, consider the following two plugins:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-ts",children:"const builderPluginFoo = {\n  name: 'builder-plugin-foo',\n};\n\nconst builderPluginBar = {\n  name: 'builder-plugin-bar',\n  pre: ['builder-plugin-foo'],\n};\n"})}),"\n",(0,l.jsxs)(n.p,{children:["The Bar plugin is configured with the Foo plugin in its ",(0,l.jsx)(n.code,{children:"pre"})," field, so the Foo plugin will always be executed before the Bar plugin."]}),"\n",(0,l.jsxs)(n.h3,{id:"post-plugins",children:["Post-Plugins",(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#post-plugins",children:"#"})]}),"\n",(0,l.jsxs)(n.p,{children:["Similarly, you can declare post-execution plugins using the ",(0,l.jsx)(n.code,{children:"post"})," field."]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-ts",children:"const builderPluginFoo = {\n  name: 'builder-plugin-foo',\n};\n\nconst builderPluginBar = {\n  name: 'builder-plugin-bar',\n  post: ['builder-plugin-foo'],\n};\n"})}),"\n",(0,l.jsxs)(n.p,{children:["The Bar plugin is configured with the Foo plugin in its ",(0,l.jsx)(n.code,{children:"post"})," field, so the Foo plugin will always be executed after the Bar plugin."]}),"\n",(0,l.jsxs)(n.h3,{id:"removing-plugins",children:["Removing Plugins",(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#removing-plugins",children:"#"})]}),"\n",(0,l.jsxs)(n.p,{children:["You can remove other plugins within a plugin using the ",(0,l.jsx)(n.code,{children:"remove"})," field."]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-ts",children:"const builderPluginFoo = {\n  name: 'builder-plugin-foo',\n};\n\nconst builderPluginBar = {\n  name: 'builder-plugin-bar',\n  remove: ['builder-plugin-foo'],\n};\n"})}),"\n",(0,l.jsx)(n.p,{children:"For example, if you register both the Foo and Bar plugins mentioned above, the Foo plugin will not take effect because the Bar plugin declares the removal of the Foo plugin."}),"\n",(0,l.jsxs)(n.h2,{id:"builderpluginapi",children:["BuilderPluginAPI",(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#builderpluginapi",children:"#"})]}),"\n",(0,l.jsx)(n.p,{children:"The type of plugin API. The plugin API provides the context info, utility functions and lifecycle hooks."}),"\n",(0,l.jsxs)(n.p,{children:["For a complete introduction to lifecycle hooks, please read the ",(0,l.jsx)(n.a,{href:"/api/plugin-hooks",children:"Plugin Hooks"})," chapter."]}),"\n",(0,l.jsxs)(n.p,{children:["When using webpack-provider or rspack-provider, the type definition of ",(0,l.jsx)(n.code,{children:"BuilderPluginAPI"})," is somewhat different, and you can introduce the corresponding type according to the usage scenario of the plugin."]}),"\n",(0,l.jsxs)(n.h3,{id:"plugin-for-webpack-provider",children:["Plugin for webpack-provider",(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#plugin-for-webpack-provider",children:"#"})]}),"\n",(0,l.jsxs)(n.p,{children:["When developing plugins for webpack-provider, please import ",(0,l.jsx)(n.code,{children:"BuilderPluginAPI"})," from ",(0,l.jsx)(n.code,{children:"@modern-js/builder-webpack-provider"}),"."]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-ts",children:"import type { BuilderPlugin } from '@modern-js/builder';\nimport type { BuilderPluginAPI } from '@modern-js/builder-webpack-provider';\n\nexport default (): BuilderPlugin<BuilderPluginAPI> => ({\n  name: 'builder-plugin-foo',\n\n  setup: api => {\n    api.modifyWebpackConfig(config => {\n      config.devtool = false;\n    });\n  },\n});\n"})}),"\n",(0,l.jsxs)(n.h3,{id:"plugins-for-rspack-provider",children:["Plugins for rspack-provider",(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#plugins-for-rspack-provider",children:"#"})]}),"\n",(0,l.jsxs)(n.p,{children:["When developing plugins for rspack-provider, please import ",(0,l.jsx)(n.code,{children:"BuilderPluginAPI"})," from ",(0,l.jsx)(n.code,{children:"@modern-js/builder-rspack-provider"}),"."]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-ts",children:"import type { BuilderPlugin } from '@modern-js/builder';\nimport type { BuilderPluginAPI } from '@modern-js/builder-rspack-provider';\n\nexport default (): BuilderPlugin<BuilderPluginAPI> => ({\n  name: 'builder-plugin-foo',\n\n  setup: api => {\n    api.modifyRspackConfig(config => {\n      config.devtool = false;\n    });\n  },\n});\n"})}),"\n",(0,l.jsxs)(n.h3,{id:"plugins-for-both-webpack-provider-and-rspack-provider",children:["Plugins for both webpack-provider and rspack-provider",(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#plugins-for-both-webpack-provider-and-rspack-provider",children:"#"})]}),"\n",(0,l.jsxs)(n.p,{children:["When developing plugins for both webpack-provider and rspack-provider, please import ",(0,l.jsx)(n.code,{children:"DefaultBuilderPlugin"})," from ",(0,l.jsx)(n.code,{children:"@modern-js/builder-shared"}),"."]}),"\n",(0,l.jsxs)(n.p,{children:["Note that developing plugins that can support both webpack and Rspack at the same time means that you cannot use any APIs with webpack / Rspack identifiers, such as ",(0,l.jsx)(n.code,{children:"modifyWebpackConfig"})," or ",(0,l.jsx)(n.code,{children:"modifyRspackConfig"}),"."]}),"\n",(0,l.jsxs)(n.p,{children:["You can use ",(0,l.jsx)(n.a,{href:"/api/plugin-hooks#modifybundlerchain-experimental",children:"modifyBundlerChain"})," to modify the configuration that applies to both webpack and Rspack."]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-ts",children:"import type { BuilderPlugin } from '@modern-js/builder';\nimport type { DefaultBuilderPlugin } from '@modern-js/builder-shared';\n\nexport default (): BuilderPlugin<DefaultBuilderPlugin> => ({\n  name: 'builder-plugin-foo',\n\n  setup: api => {\n    api.modifyBundlerChain(chain => {\n      chain.devtool(false);\n    });\n  },\n});\n"})}),"\n",(0,l.jsxs)(n.h2,{id:"apicontext",children:["api.context",(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#apicontext",children:"#"})]}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"api.context"})," is a read-only object that provides some context information."]}),"\n",(0,l.jsxs)(n.p,{children:["The content of ",(0,l.jsx)(n.code,{children:"api.context"})," is exactly the same as ",(0,l.jsx)(n.code,{children:"builder.context"}),", please refer to ",(0,l.jsx)(n.a,{href:"/api/builder-instance#builder-context",children:"builder.context"}),"."]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.strong,{children:"Example"})}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-ts",children:"const builderPluginFoo = () => ({\n  setup(api) {\n    console.log(api.context.distPath);\n  },\n});\n"})}),"\n",(0,l.jsxs)(n.h2,{id:"apigetbuilderconfig",children:["api.getBuilderConfig",(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#apigetbuilderconfig",children:"#"})]}),"\n","\n",(0,l.jsx)(d.default,{}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.strong,{children:"Example"})}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-ts",children:"const builderPluginFoo = () => ({\n  setup(api) {\n    const config = api.getBuilderConfig();\n    console.log(config.html?.title);\n  },\n});\n"})}),"\n",(0,l.jsxs)(n.h2,{id:"apigetnormalizedconfig",children:["api.getNormalizedConfig",(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#apigetnormalizedconfig",children:"#"})]}),"\n","\n",(0,l.jsx)(t.default,{}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.strong,{children:"Example"})}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-ts",children:"const builderPluginFoo = () => ({\n  setup(api) {\n    const config = api.getNormalizedConfig();\n    console.log(config.html.title);\n  },\n});\n"})}),"\n",(0,l.jsxs)(n.h2,{id:"apiispluginexists",children:["api.isPluginExists",(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#apiispluginexists",children:"#"})]}),"\n","\n",(0,l.jsx)(a.default,{}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.strong,{children:"Example"})}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-ts",children:"export default () => ({\n  setup: api => {\n    console.log(api.isPluginExists('builder-plugin-foo'));\n  },\n});\n"})}),"\n",(0,l.jsxs)(n.h2,{id:"apigethtmlpaths",children:["api.getHTMLPaths",(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#apigethtmlpaths",children:"#"})]}),"\n","\n",(0,l.jsx)(c.default,{}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.strong,{children:"Example"})}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-ts",children:"const builderPluginFoo = () => ({\n  setup(api) {\n    api.modifyWebpackChain(() => {\n      const htmlPaths = api.getHTMLPaths();\n      console.log(htmlPaths); // { main: 'html/main/index.html' };\n    });\n  },\n});\n"})})]})}function u(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,o.useMDXComponents)(),e.components).wrapper;return n?(0,l.jsx)(n,(0,s._)((0,r._)({},e),{children:(0,l.jsx)(p,(0,r._)({},e))})):p(e)}var h=u;u.__RSPRESS_PAGE_META={},u.__RSPRESS_PAGE_META["en%2Fapi%2Fplugin-core.mdx"]={toc:[{text:"BuilderPlugin",id:"builderplugin",depth:2},{text:"Pre-Plugins",id:"pre-plugins",depth:3},{text:"Post-Plugins",id:"post-plugins",depth:3},{text:"Removing Plugins",id:"removing-plugins",depth:3},{text:"BuilderPluginAPI",id:"builderpluginapi",depth:2},{text:"Plugin for webpack-provider",id:"plugin-for-webpack-provider",depth:3},{text:"Plugins for rspack-provider",id:"plugins-for-rspack-provider",depth:3},{text:"Plugins for both webpack-provider and rspack-provider",id:"plugins-for-both-webpack-provider-and-rspack-provider",depth:3},{text:"api.context",id:"apicontext",depth:2},{text:"api.getBuilderConfig",id:"apigetbuilderconfig",depth:2},{text:"api.getNormalizedConfig",id:"apigetnormalizedconfig",depth:2},{text:"api.isPluginExists",id:"apiispluginexists",depth:2},{text:"api.getHTMLPaths",id:"apigethtmlpaths",depth:2}],title:"Plugin Core"};var g={extractApiHeaders:[2]}},60723:function(e,n,i){"use strict";i.r(n),i.d(n,{default:function(){return a}});var r=i("15169"),s=i("43932"),l=i("9880"),o=i("23169");function d(e){var n=Object.assign({p:"p",code:"code",ul:"ul",li:"li",strong:"strong",pre:"pre"},(0,o.useMDXComponents)(),e.components);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(n.p,{children:["Get the Builder config, this method must be called after the ",(0,l.jsx)(n.code,{children:"modifyBuilderConfig"})," hook is executed."]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.strong,{children:"Type"})}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-ts",children:"function GetBuilderConfig(): Readonly<BuilderConfig>;\n"})})]})}function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,o.useMDXComponents)(),e.components).wrapper;return n?(0,l.jsx)(n,(0,s._)((0,r._)({},e),{children:(0,l.jsx)(d,(0,r._)({},e))})):d(e)}var a=t;t.__RSPRESS_PAGE_META={},t.__RSPRESS_PAGE_META["en%2Fshared%2FgetBuilderConfig.md"]={toc:[],title:""}},94132:function(e,n,i){"use strict";i.r(n),i.d(n,{default:function(){return a}});var r=i("15169"),s=i("43932"),l=i("9880"),o=i("23169");function d(e){var n=Object.assign({p:"p",ul:"ul",li:"li",strong:"strong",pre:"pre",code:"code"},(0,o.useMDXComponents)(),e.components);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.p,{children:"Get path information for all HTML assets."}),"\n",(0,l.jsx)(n.p,{children:"This method will return an object, the key is the entry name and the value is the relative path of the HTML file in the dist directory."}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.strong,{children:"Type"})}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-ts",children:"function GetHTMLPaths(): Record<string, string>;\n"})})]})}function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,o.useMDXComponents)(),e.components).wrapper;return n?(0,l.jsx)(n,(0,s._)((0,r._)({},e),{children:(0,l.jsx)(d,(0,r._)({},e))})):d(e)}var a=t;t.__RSPRESS_PAGE_META={},t.__RSPRESS_PAGE_META["en%2Fshared%2FgetHTMLPaths.md"]={toc:[],title:""}},61985:function(e,n,i){"use strict";i.r(n),i.d(n,{default:function(){return a}});var r=i("15169"),s=i("43932"),l=i("9880"),o=i("23169");function d(e){var n=Object.assign({p:"p",code:"code",ul:"ul",li:"li",strong:"strong",pre:"pre"},(0,o.useMDXComponents)(),e.components);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(n.p,{children:["Get the normalized Builder config, this method must be called after the ",(0,l.jsx)(n.code,{children:"modifyBuilderConfig"})," hook is executed."]}),"\n",(0,l.jsxs)(n.p,{children:["Compared with the ",(0,l.jsx)(n.code,{children:"api.getBuilderConfig"})," method, the config returned by this method has been normalized, and the type definition of the config will be narrowed. For example, the ",(0,l.jsx)(n.code,{children:"undefined"})," type of ",(0,l.jsx)(n.code,{children:"config.html"})," will be removed."]}),"\n",(0,l.jsx)(n.p,{children:"It is recommended to use this method to get the Builder config."}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.strong,{children:"Type"})}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-ts",children:"function GetNormalizedConfig(): Readonly<NormalizedConfig>;\n"})})]})}function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,o.useMDXComponents)(),e.components).wrapper;return n?(0,l.jsx)(n,(0,s._)((0,r._)({},e),{children:(0,l.jsx)(d,(0,r._)({},e))})):d(e)}var a=t;t.__RSPRESS_PAGE_META={},t.__RSPRESS_PAGE_META["en%2Fshared%2FgetNormalizedConfig.md"]={toc:[],title:""}},20283:function(e,n,i){"use strict";i.r(n),i.d(n,{default:function(){return a}});var r=i("15169"),s=i("43932"),l=i("9880"),o=i("23169");function d(e){var n=Object.assign({p:"p",ul:"ul",li:"li",strong:"strong",pre:"pre",code:"code"},(0,o.useMDXComponents)(),e.components);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.p,{children:"Determines whether a plugin has been registered."}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.strong,{children:"Type"})}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-ts",children:"function IsPluginExists(pluginName: string): boolean;\n"})})]})}function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,o.useMDXComponents)(),e.components).wrapper;return n?(0,l.jsx)(n,(0,s._)((0,r._)({},e),{children:(0,l.jsx)(d,(0,r._)({},e))})):d(e)}var a=t;t.__RSPRESS_PAGE_META={},t.__RSPRESS_PAGE_META["en%2Fshared%2FisPluginExists.md"]={toc:[],title:""}}}]);