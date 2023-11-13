(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["76197"],{55761:function(e,s,n){"use strict";n.r(s),n.d(s,{default:function(){return t}});var i=n("9880"),r=n("23169");function a(e){let s=Object.assign({p:"p",code:"code",ul:"ul",li:"li",a:"a",h2:"h2",pre:"pre",div:"div",h3:"h3"},(0,r.useMDXComponents)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.p,{children:"Path aliases allow developers to define aliases for modules, making it easier to reference them in code. This can be useful when you want to use a short, easy-to-remember name for a module instead of a long, complex path."}),"\n",(0,i.jsxs)(s.p,{children:["For example, if you frequently reference the ",(0,i.jsx)(s.code,{children:"src/common/request.ts"})," module in your project, you can define an alias for it as ",(0,i.jsx)(s.code,{children:"@request"})," and then use ",(0,i.jsx)(s.code,{children:"import request from '@request'"})," in your code instead of writing the full relative path every time. This also allows you to move the module to a different location without needing to update all the import statements in your code."]}),"\n",(0,i.jsx)(s.p,{children:"In Modern.js Builder, there are two ways to set up path aliases:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["Through the ",(0,i.jsx)(s.code,{children:"paths"})," configuration in ",(0,i.jsx)(s.code,{children:"tsconfig.json"}),"."]}),"\n",(0,i.jsxs)(s.li,{children:["Through the ",(0,i.jsx)(s.a,{href:"https://modernjs.dev/builder/en/api/config-source.html#sourcealias",target:"_blank",rel:"noopener noreferrer",children:"source.alias"})," configuration."]}),"\n"]}),"\n",(0,i.jsxs)(s.h2,{id:"usingtsconfigjsonspaths-configuration",children:["Using",(0,i.jsx)(s.code,{children:"tsconfig.json"}),"\\'s",(0,i.jsx)(s.code,{children:"paths"})," Configuration",(0,i.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#usingtsconfigjsonspaths-configuration",children:"#"})]}),"\n",(0,i.jsxs)(s.p,{children:["You can configure aliases through the ",(0,i.jsx)(s.code,{children:"paths"})," configuration in ",(0,i.jsx)(s.code,{children:"tsconfig.json"}),", which is the recommended approach in TypeScript projects as it also resolves the TS type issues related to path aliases."]}),"\n",(0,i.jsx)(s.p,{children:"For example:"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-json",meta:'title="tsconfig.json"',children:'{\n  "compilerOptions": {\n    "paths": {\n      "@common/*": ["./src/common/*"]\n    }\n  }\n}\n'})}),"\n",(0,i.jsxs)(s.p,{children:["After configuring, if you reference ",(0,i.jsx)(s.code,{children:"@common/Foo.tsx"})," in your code, it will be mapped to the ",(0,i.jsx)(s.code,{children:"<project>/src/common/Foo.tsx"})," path."]}),"\n",(0,i.jsxs)(s.div,{className:"rspress-directive tip",children:[(0,i.jsx)(s.div,{className:"rspress-directive-title",children:"TIP"}),(0,i.jsx)(s.div,{className:"rspress-directive-content",children:(0,i.jsxs)(s.p,{children:["You can refer to the ",(0,i.jsx)(s.a,{href:"https://www.typescriptlang.org/tsconfig#paths",target:"_blank",rel:"noopener noreferrer",children:"TypeScript - paths"})," documentation for more details.\n"]})})]}),"\n",(0,i.jsxs)(s.h2,{id:"usesourcealias-configuration",children:["Use",(0,i.jsx)(s.code,{children:"source.alias"})," Configuration",(0,i.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#usesourcealias-configuration",children:"#"})]}),"\n",(0,i.jsxs)(s.p,{children:["Modern.js Builder provides the ",(0,i.jsx)(s.a,{href:"https://modernjs.dev/builder/en/api/config-source.html#sourcealias",target:"_blank",rel:"noopener noreferrer",children:"source.alias"})," configuration option, which corresponds to the webpack/Rspack native ",(0,i.jsx)(s.a,{href:"https://webpack.js.org/configuration/resolve/#resolvealias",target:"_blank",rel:"noopener noreferrer",children:"resolve.alias"})," configuration. You can configure this option using an object or a function."]}),"\n",(0,i.jsxs)(s.h3,{id:"use-cases",children:["Use Cases",(0,i.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#use-cases",children:"#"})]}),"\n",(0,i.jsxs)(s.p,{children:["Since the ",(0,i.jsx)(s.code,{children:"paths"})," configuration in ",(0,i.jsx)(s.code,{children:"tsconfig.json"})," is written in a static JSON file, it lacks dynamism."]}),"\n",(0,i.jsxs)(s.p,{children:["The ",(0,i.jsx)(s.code,{children:"source.alias"})," configuration can address this limitation by allowing you to dynamically set the ",(0,i.jsx)(s.code,{children:"source.alias"})," using JavaScript code, such as based on environment variables."]}),"\n",(0,i.jsxs)(s.h3,{id:"object-usage",children:["Object Usage",(0,i.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#object-usage",children:"#"})]}),"\n",(0,i.jsxs)(s.p,{children:["You can configure ",(0,i.jsx)(s.code,{children:"source.alias"})," using an object, where the relative paths will be automatically resolved to absolute paths."]}),"\n",(0,i.jsx)(s.p,{children:"For example:"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-js",children:"export default {\n  source: {\n    alias: {\n      '@common': './src/common',\n    },\n  },\n};\n"})}),"\n",(0,i.jsxs)(s.p,{children:["After configuring, if you reference ",(0,i.jsx)(s.code,{children:"@common/Foo.tsx"})," in your code, it will be mapped to the ",(0,i.jsx)(s.code,{children:"<project>/src/common/Foo.tsx"})," path."]}),"\n",(0,i.jsxs)(s.h3,{id:"function-usage",children:["Function Usage",(0,i.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#function-usage",children:"#"})]}),"\n",(0,i.jsxs)(s.p,{children:["You can also configure ",(0,i.jsx)(s.code,{children:"source.alias"})," as a function, which receives the built-in ",(0,i.jsx)(s.code,{children:"alias"})," object and allows you to modify it."]}),"\n",(0,i.jsx)(s.p,{children:"For example:"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-js",children:"export default {\n  source: {\n    alias: alias => {\n      alias['@common'] = './src/common';\n      return alias;\n    },\n  },\n};\n"})}),"\n",(0,i.jsxs)(s.h3,{id:"priority",children:["Priority",(0,i.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#priority",children:"#"})]}),"\n",(0,i.jsxs)(s.p,{children:["The ",(0,i.jsx)(s.code,{children:"paths"})," configuration in ",(0,i.jsx)(s.code,{children:"tsconfig.json"})," takes precedence over the ",(0,i.jsx)(s.code,{children:"source.alias"})," configuration. When a path matches the rules defined in both ",(0,i.jsx)(s.code,{children:"paths"})," and ",(0,i.jsx)(s.code,{children:"source.alias"}),", the value defined in ",(0,i.jsx)(s.code,{children:"paths"})," will be used."]}),"\n",(0,i.jsxs)(s.p,{children:["You can adjust the priority of these two options using ",(0,i.jsx)(s.a,{href:"https://modernjs.dev/builder/en/api/config-source.html#sourcealiasstrategy",target:"_blank",rel:"noopener noreferrer",children:"source.aliasStrategy"}),"."]})]})}function o(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:s}=Object.assign({},(0,r.useMDXComponents)(),e.components);return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}var t=o;o.__RSPRESS_PAGE_META={},o.__RSPRESS_PAGE_META["..%2F..%2Fbuilder-doc%2Fdocs%2Fen%2Fshared%2Falias.md"]={toc:[{text:"Using tsconfig.json\\\\'s paths Configuration",id:"using-tsconfigjsons-paths-configuration",depth:2},{text:"Use source.alias Configuration",id:"use-sourcealias-configuration",depth:2},{text:"Use Cases",id:"use-cases",depth:3},{text:"Object Usage",id:"object-usage",depth:3},{text:"Function Usage",id:"function-usage",depth:3},{text:"Priority",id:"priority",depth:3}],title:"",frontmatter:{}}},85609:function(e,s,n){"use strict";n.r(s),n.d(s,{default:function(){return c}});var i=n("9880"),r=n("23169"),a=n("55761");function o(e){let s=Object.assign({h1:"h1",a:"a",h2:"h2",p:"p",pre:"pre",code:"code"},(0,r.useMDXComponents)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(s.h1,{id:"path-alias",children:["Path Alias",(0,i.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#path-alias",children:"#"})]}),"\n","\n",(0,i.jsx)(a.default,{}),"\n",(0,i.jsxs)(s.h2,{id:"default-aliases",children:["Default Aliases",(0,i.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#default-aliases",children:"#"})]}),"\n",(0,i.jsx)(s.p,{children:"The Modern.js framework comes with the following aliases built-in:"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-json",children:'{\n  "@": "./src",\n  "@shared": "./shared"\n}\n'})}),"\n",(0,i.jsxs)(s.p,{children:["Additionally, when the BFF plugin of the framework is enabled, the ",(0,i.jsx)(s.code,{children:"@api"})," alias is automatically added."]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-json",children:'{\n  "@api": "./api"\n}\n'})})]})}function t(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:s}=Object.assign({},(0,r.useMDXComponents)(),e.components);return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}var c=t;t.__RSPRESS_PAGE_META={},t.__RSPRESS_PAGE_META["en%2Fguides%2Fbasic-features%2Falias.mdx"]={toc:[{text:"Default Aliases",id:"default-aliases",depth:2}],title:"Path Alias",frontmatter:{sidebar_position:4}}}}]);