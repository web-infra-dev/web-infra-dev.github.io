/*! For license information please see 5705.d9369341.js.LICENSE.txt */
(self.webpackChunk_modern_js_module_tools_docs=self.webpackChunk_modern_js_module_tools_docs||[]).push([["5705"],{3129:function(n,e,i){"use strict";i.r(e);var o=i("39980"),t=i("96954");function l(n){let e=Object.assign({h1:"h1",a:"a",p:"p",ul:"ul",li:"li",code:"code",pre:"pre",h2:"h2",strong:"strong"},(0,t.useMDXComponents)(),n.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(e.h1,{id:"plugin-object",children:["Plugin Object",(0,o.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#plugin-object",children:"#"})]}),"\n",(0,o.jsx)(e.p,{children:"The Modern.js Module plugin is an object, and the object contains the following properties."}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.code,{children:"name"}),": The name of the plugin, a unique identifier."]}),"\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.code,{children:"setup"}),": plugin initialization function, which will be executed only once. setup function can return a Hooks object, and Modern.js Module will execute the function corresponding to the Hook defined on the Hooks object at a specific time."]}),"\n"]}),"\n",(0,o.jsxs)(e.p,{children:["For example, in the following plugin code example, the ",(0,o.jsx)(e.code,{children:"beforeBuild"})," function is triggered before the project starts the build task and the ",(0,o.jsx)(e.code,{children:"build start"})," log is printed."]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-ts",meta:'title=". /plugins/demo.tsx"',children:"import type { CliPlugin, ModuleTools } from '@modern-js/module-tools';\n\nconst myPlugin: CliPlugin<ModuleTools> = {\n  name: 'my-plugin',\n\n  setup() {\n    return {\n      // this is hook\n      beforeBuild: () => {\n        console.info('build start');\n      },\n    };\n  },\n};\n"})}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import { myPlugin } from '. /plugins/demo';\nexport default {\n  plugins: [myPlugin()],\n};\n"})}),"\n",(0,o.jsxs)(e.h2,{id:"plugin-type-definitions",children:["Plugin type definitions",(0,o.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#plugin-type-definitions",children:"#"})]}),"\n",(0,o.jsxs)(e.p,{children:["When using TypeScript, you can introduce the built-in ",(0,o.jsx)(e.code,{children:"CliPlugin"})," and ",(0,o.jsx)(e.code,{children:"ModuleTools"})," types to provide the correct type derivation for plugins: ``"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-ts",children:"import type { CliPlugin, ModuleTools } from '@modern-js/module-tools';\n\nconst myPlugin: CliPlugin<ModuleTools> = {\n  name: 'my-plugin',\n\n  setup() {\n    const foo = '1';\n\n    return {\n      // this is hook\n      afterBuild: () => {\n        //...\n      },\n    };\n  },\n};\n"})}),"\n",(0,o.jsxs)(e.h2,{id:"plugin-configuration-options",children:["Plugin configuration options",(0,o.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#plugin-configuration-options",children:"#"})]}),"\n",(0,o.jsxs)(e.p,{children:[(0,o.jsx)(e.strong,{children:"It is recommended to write the plugin as a function"}),", so that the plugin can receive configuration options via function entry."]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-ts",children:"import type { CliPlugin, ModuleTools } from '@modern-js/module-tools';\n\ntype MyPluginOptions = {\n  foo: string;\n};\n\nconst myPlugin = (options: MyPluginOptions): CliPlugin<ModuleTools> => ({\n  name: 'my-plugin',\n\n  setup() {\n    console.log(options.foo);\n  },\n});\n"})})]})}function s(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}=Object.assign({},(0,t.useMDXComponents)(),n.components);return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(l,{...n})}):l(n)}e.default=s,s.__RSPRESS_PAGE_META={},s.__RSPRESS_PAGE_META["en%2Fplugins%2Fguide%2Fplugin-object.mdx"]={toc:[{text:"Plugin type definitions",id:"plugin-type-definitions",depth:2},{text:"Plugin configuration options",id:"plugin-configuration-options",depth:2}],title:"Plugin Object",frontmatter:{sidebar_position:2}}}}]);