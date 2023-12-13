/*! For license information please see 704.c0e4c003.js.LICENSE.txt */
(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["704"],{56297:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return a}});var s=r("9880"),t=r("23169");function i(e){let n=Object.assign({p:"p",a:"a",code:"code",ul:"ul",li:"li",strong:"strong",pre:"pre",div:"div",h3:"h3",h4:"h4"},(0,t.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["Used to import the code and style of the component library on demand, which is equivalent to ",(0,s.jsx)(n.a,{href:"https://www.npmjs.com/package/babel-plugin-import",target:"_blank",rel:"noopener noreferrer",children:"babel-plugin-import"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["The difference between it and ",(0,s.jsx)(n.a,{href:"https://www.npmjs.com/package/babel-plugin-import",target:"_blank",rel:"noopener noreferrer",children:"babel-plugin-import"})," is that ",(0,s.jsx)(n.code,{children:"source.transformImport"})," is not coupled with Babel. Builder will automatically identify whether the currently used tools is Babel, SWC or Rspack, and apply the corresponding on-demand import configuration."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"Type:"})}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"type Config =\n  | false\n  | Array<{\n      libraryName: string;\n      libraryDirectory?: string;\n      style?: string | boolean;\n      styleLibraryDirectory?: string;\n      camelToDashComponentName?: boolean;\n      transformToDefaultImport?: boolean;\n      customName?: ((member: string) => string | undefined) | string;\n      customStyleName?: ((member: string) => string | undefined) | string;\n    }>;\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"Default:"})}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["When the ",(0,s.jsx)(n.a,{href:"https://www.npmjs.com/package/antd",target:"_blank",rel:"noopener noreferrer",children:"Ant Design component library"})," <= 4.x version is installed in the project, Builder will automatically add the following default configurations:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"const defaultAntdConfig = {\n  libraryName: 'antd',\n  libraryDirectory: isServer ? 'lib' : 'es',\n  style: true,\n};\n"})}),"\n",(0,s.jsxs)(n.p,{children:["When the ",(0,s.jsx)(n.a,{href:"https://www.npmjs.com/package/@arco-design/web-react",target:"_blank",rel:"noopener noreferrer",children:"Arco Design component library"})," is installed in the project, Builder will automatically add the following default configurations:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"const defaultArcoConfig = [\n  {\n    libraryName: '@arco-design/web-react',\n    libraryDirectory: isServer ? 'lib' : 'es',\n    camelToDashComponentName: false,\n    style: true,\n  },\n  {\n    libraryName: '@arco-design/web-react/icon',\n    libraryDirectory: isServer ? 'react-icon-cjs' : 'react-icon',\n    camelToDashComponentName: false,\n  },\n];\n"})}),"\n",(0,s.jsxs)(n.div,{className:"rspress-directive tip",children:[(0,s.jsx)(n.div,{className:"rspress-directive-title",children:"TIP"}),(0,s.jsx)(n.div,{className:"rspress-directive-content",children:(0,s.jsxs)(n.p,{children:["When you add configurations for ",(0,s.jsx)(n.code,{children:"antd"})," or ",(0,s.jsx)(n.code,{children:"@arco-design/web-react"}),", the priority will be higher than the default configurations mentioned above.\n"]})})]}),"\n",(0,s.jsxs)(n.h3,{id:"example",children:["Example",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#example",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"When using the above antd default configuration:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"export default {\n  source: {\n    transformImport: [\n      {\n        libraryName: 'antd',\n        libraryDirectory: 'es',\n        style: true,\n      },\n    ],\n  },\n};\n"})}),"\n",(0,s.jsx)(n.p,{children:"The source code is as follows:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"import { Button } from 'antd';\n"})}),"\n",(0,s.jsx)(n.p,{children:"It will be transformed into:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"import Button from 'antd/es/button';\nimport 'antd/es/button/style';\n"})}),"\n",(0,s.jsxs)(n.h3,{id:"disable-default-config",children:["Disable Default Config",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#disable-default-config",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["You can manually set ",(0,s.jsx)(n.code,{children:"transformImport: false"})," to disable the default config."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"export default {\n  source: {\n    transformImport: false,\n  },\n};\n"})}),"\n",(0,s.jsxs)(n.p,{children:["For example, if you use ",(0,s.jsx)(n.code,{children:"externals"})," to avoid bundling antd, because ",(0,s.jsx)(n.code,{children:"transformImport"})," will convert the imported path of antd by default, the matching path changes and externals cannot take effect. At this time, you can disable ",(0,s.jsx)(n.code,{children:"transformImport"})," to avoid this problem."]}),"\n",(0,s.jsxs)(n.h3,{id:"configuration",children:["Configuration",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#configuration",children:"#"})]}),"\n",(0,s.jsxs)(n.h4,{id:"libraryname",children:["libraryName",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#libraryname",children:"#"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Type:"})," ",(0,s.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"The original import path that needs to be transformed."}),"\n",(0,s.jsxs)(n.h4,{id:"librarydirectory",children:["libraryDirectory",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#librarydirectory",children:"#"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Type:"})," ",(0,s.jsx)(n.code,{children:"string"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Default:"})," ",(0,s.jsx)(n.code,{children:"'lib'"})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Used to splice the transformed path, the splicing rule is ",(0,s.jsx)(n.code,{children:"${libraryName}/${libraryDirectory}/${member}"}),", where member is the imported member."]}),"\n",(0,s.jsx)(n.p,{children:"Example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"import { Button } from 'foo';\n"})}),"\n",(0,s.jsx)(n.p,{children:"Out:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"import Button from 'foo/lib/button';\n"})}),"\n",(0,s.jsxs)(n.h4,{id:"style",children:["style",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#style",children:"#"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Type:"})," ",(0,s.jsx)(n.code,{children:"boolean"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Default:"})," ",(0,s.jsx)(n.code,{children:"undefined"})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Determines whether to import related styles. If it is ",(0,s.jsx)(n.code,{children:"true"}),", the path ",(0,s.jsx)(n.code,{children:"${libraryName}/${libraryDirectory}/${member}/style"})," will be imported. If it is ",(0,s.jsx)(n.code,{children:"false"})," or ",(0,s.jsx)(n.code,{children:"undefined"}),", the style will not be imported."]}),"\n",(0,s.jsxs)(n.p,{children:["When it is set to ",(0,s.jsx)(n.code,{children:"true"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"import { Button } from 'foo';\n"})}),"\n",(0,s.jsx)(n.p,{children:"Out:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"import Button from 'foo/lib/button';\nimport 'foo/lib/button/style';\n"})}),"\n",(0,s.jsxs)(n.h4,{id:"stylelibrarydirectory",children:["styleLibraryDirectory",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#stylelibrarydirectory",children:"#"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Type:"})," ",(0,s.jsx)(n.code,{children:"string"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Default:"})," ",(0,s.jsx)(n.code,{children:"undefined"})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["This configuration is used to splice the import path when importing styles. If this configuration is specified, the ",(0,s.jsx)(n.code,{children:"style"})," configuration option will be ignored. The spliced import path is ",(0,s.jsx)(n.code,{children:"${libraryName}/${styleLibraryDirectory}/${member}"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["When it is set to ",(0,s.jsx)(n.code,{children:"styles"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"import { Button } from 'foo';\n"})}),"\n",(0,s.jsx)(n.p,{children:"Out:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"import Button from 'foo/lib/button';\nimport 'foo/styles/button';\n"})}),"\n",(0,s.jsxs)(n.h4,{id:"cameltodashcomponentname",children:["camelToDashComponentName",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#cameltodashcomponentname",children:"#"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Type:"})," ",(0,s.jsx)(n.code,{children:"boolean"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Default:"})," ",(0,s.jsx)(n.code,{children:"true"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Whether to convert camelCase imports to kebab-case."}),"\n",(0,s.jsx)(n.p,{children:"Example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"import { ButtonGroup } from 'foo';\n"})}),"\n",(0,s.jsx)(n.p,{children:"Out:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"// set to true:\nimport ButtonGroup from 'foo/button-group';\n// set to false:\nimport ButtonGroup from 'foo/ButtonGroup';\n"})}),"\n",(0,s.jsxs)(n.h4,{id:"transformtodefaultimport",children:["transformToDefaultImport",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#transformtodefaultimport",children:"#"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Type:"})," ",(0,s.jsx)(n.code,{children:"boolean"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Default:"})," ",(0,s.jsx)(n.code,{children:"true"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Whether to convert import statements to default imports."}),"\n",(0,s.jsx)(n.p,{children:"Example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"import { Button } from 'foo';\n"})}),"\n",(0,s.jsx)(n.p,{children:"Out:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"// set to true:\nimport Button from 'foo/button';\n// set to false:\nimport { Button } from 'foo/button';\n"})}),"\n",(0,s.jsxs)(n.h4,{id:"customname",children:["customName",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#customname",children:"#"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Type:"})," ",(0,s.jsx)(n.code,{children:"((member: string) => string | undefined) | string"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Default:"})," ",(0,s.jsx)(n.code,{children:"undefined"})]}),"\n"]}),"\n",(0,s.jsxs)(n.div,{className:"rspress-directive tip",children:[(0,s.jsx)(n.div,{className:"rspress-directive-title",children:"Note"}),(0,s.jsxs)(n.div,{className:"rspress-directive-content",children:["\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Function-type configurations can only be used in Webpack builds."}),"\n",(0,s.jsx)(n.li,{children:"Template-type configurations can only be used in Rspack builds or Webpack builds that use SWC."}),"\n"]}),"\n"]})]}),"\n",(0,s.jsxs)(n.p,{children:["Customize the imported path after conversion. The input is the imported member. For example, configure it as ",(0,s.jsx)(n.code,{children:" (member) => `my-lib/${member}` "}),", which will convert ",(0,s.jsx)(n.code,{children:"import { foo } from 'bar'"})," to ",(0,s.jsx)(n.code,{children:"import foo from 'my-lib/foo'"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["When using Rspack to build, function configurations cannot be used, but you can use ",(0,s.jsx)(n.a,{href:"https://handlebarsjs.com/",target:"_blank",rel:"noopener noreferrer",children:"handlebars"})," template strings. For the above function configuration, you can use the following template instead of ",(0,s.jsx)(n.code,{children:"my-lib/{{ member }}"}),", or use some built-in helper methods, such as ",(0,s.jsx)(n.code,{children:"my-lib/{{ kebabCase member }}"})," to convert it to kebab-case format. In addition to kebabCase, there are also camelCase, snakeCase, upperCase, and lowerCase that can be used."]}),"\n",(0,s.jsxs)(n.h4,{id:"customstylename",children:["customStyleName",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#customstylename",children:"#"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Type:"})," ",(0,s.jsx)(n.code,{children:"((member: string) => string | undefined) | string"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Default:"})," ",(0,s.jsx)(n.code,{children:"undefined"})]}),"\n"]}),"\n",(0,s.jsxs)(n.div,{className:"rspress-directive tip",children:[(0,s.jsx)(n.div,{className:"rspress-directive-title",children:"Note"}),(0,s.jsxs)(n.div,{className:"rspress-directive-content",children:["\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Function-type configurations can only be used in Webpack builds."}),"\n",(0,s.jsx)(n.li,{children:"Template-type configurations can only be used in Rspack builds or Webpack builds that use SWC."}),"\n"]}),"\n"]})]}),"\n",(0,s.jsxs)(n.p,{children:["Customize the imported style path after conversion. The input is the imported member. For example, configure it as ",(0,s.jsx)(n.code,{children:" (member) => `my-lib/${member}` "}),", which will convert ",(0,s.jsx)(n.code,{children:"import { foo } from 'bar'"})," to ",(0,s.jsx)(n.code,{children:"import foo from 'my-lib/foo'"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["When using Rspack to build, function configurations cannot be used, but you can use ",(0,s.jsx)(n.a,{href:"https://handlebarsjs.com/",target:"_blank",rel:"noopener noreferrer",children:"handlebars"})," template strings. For the above function configuration, you can use the following template instead of ",(0,s.jsx)(n.code,{children:"my-lib/{{ member }}"}),", or use some built-in helper methods, such as ",(0,s.jsx)(n.code,{children:"my-lib/{{ kebabCase member }}"})," to convert it to kebab-case format. In addition to kebabCase, there are also camelCase, snakeCase, upperCase, and lowerCase that can be used."]})]})}function o(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,t.useMDXComponents)(),e.components);return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(i,{...e})}):i(e)}var a=o;o.__RSPRESS_PAGE_META={},o.__RSPRESS_PAGE_META["..%2F..%2Fbuilder-doc%2Fdocs%2Fen%2Fconfig%2Fsource%2FtransformImport.md"]={toc:[{text:"Example",id:"example",depth:3},{text:"Disable Default Config",id:"disable-default-config",depth:3},{text:"Configuration",id:"configuration",depth:3},{text:"libraryName",id:"libraryname",depth:4},{text:"libraryDirectory",id:"librarydirectory",depth:4},{text:"style",id:"style",depth:4},{text:"styleLibraryDirectory",id:"stylelibrarydirectory",depth:4},{text:"camelToDashComponentName",id:"cameltodashcomponentname",depth:4},{text:"transformToDefaultImport",id:"transformtodefaultimport",depth:4},{text:"customName",id:"customname",depth:4},{text:"customStyleName",id:"customstylename",depth:4}],title:"",frontmatter:{}}},1403:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return l}});var s=r("9880"),t=r("23169"),i=r("56297");function o(e){let n=Object.assign({h1:"h1",a:"a"},(0,t.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h1,{id:"sourcetransformimport",children:["source.transformImport",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#sourcetransformimport",children:"#"})]}),"\n","\n",(0,s.jsx)(i.default,{})]})}function a(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,t.useMDXComponents)(),e.components);return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}var l=a;a.__RSPRESS_PAGE_META={},a.__RSPRESS_PAGE_META["en%2Fconfigure%2Fapp%2Fsource%2Ftransform-import.mdx"]={toc:[],title:"source.transformImport",frontmatter:{sidebar_label:"transformImport"}}}}]);