"use strict";(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["60500"],{35568:function(e,t,n){n.r(t),n.d(t,{default:function(){return i}});var s=n(39980),r=n(9580);function o(e){let t=Object.assign({h1:"h1",a:"a",p:"p",div:"div",h2:"h2",h3:"h3",pre:"pre",code:"code"},(0,r.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.h1,{id:"import-svg-assets",children:["Import SVG Assets",(0,s.jsx)(t.a,{className:"header-anchor","aria-hidden":"true",href:"#import-svg-assets",children:"#"})]}),"\n",(0,s.jsx)(t.p,{children:"Modern.js supports import SVG assets and transform SVG into React components or URLs."}),"\n",(0,s.jsxs)(t.div,{className:"rspress-directive tip",children:[(0,s.jsx)(t.div,{className:"rspress-directive-title",children:"What is SVG"}),(0,s.jsx)(t.div,{className:"rspress-directive-content",children:(0,s.jsx)(t.p,{children:"SVG stands for Scalable Vector Graphics. It is a type of image format that uses vector graphics to represent images. Vector graphics are different from raster graphics, which are made up of pixels. Instead, vector graphics use geometric shapes, lines, and curves to represent images. Because vector graphics are not made up of pixels, they can be scaled to any size without losing resolution or quality."})})]}),"\n",(0,s.jsxs)(t.h2,{id:"import-svg-in-js-file",children:["Import SVG in JS file",(0,s.jsx)(t.a,{className:"header-anchor","aria-hidden":"true",href:"#import-svg-in-js-file",children:"#"})]}),"\n",(0,s.jsxs)(t.h3,{id:"default-import",children:["Default Import",(0,s.jsx)(t.a,{className:"header-anchor","aria-hidden":"true",href:"#default-import",children:"#"})]}),"\n",(0,s.jsx)(t.p,{children:"If you use the default import to reference SVG, it will be treated as a static asset and you will get a URL string:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-tsx",meta:'title="src/component/Logo.tsx"',children:"import logoURL from './static/logo.svg';\n\nconsole.log(logoURL); // => \"/static/logo.6c12aba3.png\"\n"})}),"\n",(0,s.jsxs)(t.h3,{id:"transform-to-react-component",children:["Transform to React Component",(0,s.jsx)(t.a,{className:"header-anchor","aria-hidden":"true",href:"#transform-to-react-component",children:"#"})]}),"\n",(0,s.jsxs)(t.p,{children:["When referencing SVG assets in JS files, if the import path includes the ",(0,s.jsx)(t.code,{children:"?react"})," suffix, Modern.js will call SVGR to transform the SVG image into a React component:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-tsx",meta:'title="src/component/Logo.tsx"',children:"import Logo from './logo.svg?react';\n\nexport default () => <Logo />;\n"})}),"\n",(0,s.jsxs)(t.div,{className:"rspress-directive tip",children:[(0,s.jsx)(t.div,{className:"rspress-directive-title",children:"TIP"}),(0,s.jsx)(t.div,{className:"rspress-directive-content",children:(0,s.jsx)(t.p,{children:"Modern.js >= 2.48.3 version supports the above usage."})})]}),"\n",(0,s.jsxs)(t.p,{children:["Modern.js also supports the following usage, transforming SVG into a React component by named import ",(0,s.jsx)(t.code,{children:"ReactComponent"}),":"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-tsx",meta:'title="src/component/Logo.tsx"',children:"import { ReactComponent as Logo } from './static/logo.svg';\n\nexport default () => <Logo />;\n"})}),"\n",(0,s.jsxs)(t.h2,{id:"modify-the-default-export",children:["Modify the Default Export",(0,s.jsx)(t.a,{className:"header-anchor","aria-hidden":"true",href:"#modify-the-default-export",children:"#"})]}),"\n",(0,s.jsxs)(t.p,{children:["You can modify the default export of SVG files through the ",(0,s.jsx)(t.a,{href:"/configure/app/output/svg-default-export",children:"output.svgDefaultExport"})," config. For example, set the default export as a React component:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:"export default {\n  output: {\n    svgDefaultExport: 'component',\n  },\n};\n"})}),"\n",(0,s.jsx)(t.p,{children:"Then import the SVG, you'll get a React component instead of a URL:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-tsx",meta:'title="src/component/Logo.tsx"',children:"import Logo from './static/logo.svg';\n\nexport default () => <Logo />;\n"})}),"\n",(0,s.jsxs)(t.h2,{id:"import-svg-in-css-file",children:["Import SVG in CSS file",(0,s.jsx)(t.a,{className:"header-anchor","aria-hidden":"true",href:"#import-svg-in-css-file",children:"#"})]}),"\n",(0,s.jsx)(t.p,{children:"When import an SVG in a CSS file, the SVG is treated as a normal static asset and you will get a URL:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-css",children:".logo {\n  background-image: url('../static/logo.svg');\n}\n"})}),"\n",(0,s.jsxs)(t.h2,{id:"assets-processing",children:["Assets Processing",(0,s.jsx)(t.a,{className:"header-anchor","aria-hidden":"true",href:"#assets-processing",children:"#"})]}),"\n",(0,s.jsx)(t.p,{children:"When SVG is imported not as a React component but as a normal static asset, it is processed exactly the same as other static assets, and it is also affected by rules such as assets inlining and URL prefixing."}),"\n",(0,s.jsxs)(t.p,{children:["Please read the ",(0,s.jsx)(t.a,{href:"/guides/basic-features/static-assets",children:"Import Static Assets"})," section to understand the processing rules for static assets."]}),"\n",(0,s.jsxs)(t.h2,{id:"disable-svgr-processing",children:["Disable SVGR Processing",(0,s.jsx)(t.a,{className:"header-anchor","aria-hidden":"true",href:"#disable-svgr-processing",children:"#"})]}),"\n",(0,s.jsxs)(t.p,{children:["By default, when an SVG resource is referenced in a JS file, Modern.js will call SVGR to convert the SVG into a React component. If you are sure that all SVG resources in your project are not being used as React components, you can turn off this conversion by setting ",(0,s.jsx)(t.a,{href:"/configure/app/output/disable-svgr",children:"disableSvgr"})," to true to improve build performance."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"export default {\n  output: {\n    disableSvgr: true,\n  },\n};\n"})}),"\n",(0,s.jsxs)(t.h2,{id:"add-type-declaration",children:["Add type declaration",(0,s.jsx)(t.a,{className:"header-anchor","aria-hidden":"true",href:"#add-type-declaration",children:"#"})]}),"\n",(0,s.jsx)(t.p,{children:"When you reference an SVG asset in TypeScript code, TypeScript may prompt that the module is missing a type definition:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"TS2307: Cannot find module './logo.svg' or its corresponding type declarations.\n"})}),"\n",(0,s.jsxs)(t.p,{children:["To fix this, you need to add a type declaration file for the SVG asset, please create a ",(0,s.jsx)(t.code,{children:"src/global.d.ts"})," file, and add the following type declaration:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:"declare module '*.svg' {\n  export const ReactComponent: React.FunctionComponent<\n    React.SVGProps<SVGSVGElement>\n  >;\n\n  const content: string;\n  export default content;\n}\n\ndeclare module '*.svg?react' {\n  const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;\n  export default ReactComponent;\n}\n"})}),"\n",(0,s.jsxs)(t.p,{children:["If you set ",(0,s.jsx)(t.code,{children:"svgDefaultExport"})," to ",(0,s.jsx)(t.code,{children:"'component'"}),", then change the type declaration to:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:"declare module '*.svg' {\n  export const ReactComponent: React.FunctionComponent<\n    React.SVGProps<SVGSVGElement>\n  >;\n\n  export default ReactComponent;\n}\n"})}),"\n",(0,s.jsxs)(t.p,{children:["After adding the type declaration, if the type error still exists, you can try to restart the current IDE, or adjust the directory where ",(0,s.jsx)(t.code,{children:"global.d.ts"})," is located, making sure the TypeScript can correctly identify the type definition."]}),"\n",(0,s.jsxs)(t.h2,{id:"modify-the-svgr-configuration",children:["Modify the SVGR configuration",(0,s.jsx)(t.a,{className:"header-anchor","aria-hidden":"true",href:"#modify-the-svgr-configuration",children:"#"})]}),"\n",(0,s.jsx)(t.p,{children:"When SVGR is enabled, its default configuration is as follows:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"{\n  svgo: true,\n  svgoConfig: {\n    plugins: [\n      {\n        name: 'preset-default',\n        params: {\n          overrides: {\n            removeViewBox: false,\n          },\n        },\n      },\n      'prefixIds',\n    ],\n  },\n}\n"})}),"\n",(0,s.jsx)(t.p,{children:"If you need to modify the SVGR configuration, you can do the following:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"export default {\n  tools: {\n    bundlerChain: (chain, { CHAIN_ID }) => {\n      chain.module\n        .rule(CHAIN_ID.RULE.SVG)\n        .oneOf(CHAIN_ID.ONE_OF.SVG)\n        .use(CHAIN_ID.USE.SVGR)\n        .tap(options => {\n          // modify svgoConfig\n          options.svgoConfig.plugins[0].params.overrides.removeUselessDefs = false;\n          return options;\n        });\n    },\n  },\n};\n"})})]})}function a(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:t}=Object.assign({},(0,r.ah)(),e.components);return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}let i=a;a.__RSPRESS_PAGE_META={},a.__RSPRESS_PAGE_META["en%2Fguides%2Fbasic-features%2Fsvg-assets.mdx"]={toc:[{text:"Import SVG in JS file",id:"import-svg-in-js-file",depth:2},{text:"Default Import",id:"default-import",depth:3},{text:"Transform to React Component",id:"transform-to-react-component",depth:3},{text:"Modify the Default Export",id:"modify-the-default-export",depth:2},{text:"Import SVG in CSS file",id:"import-svg-in-css-file",depth:2},{text:"Assets Processing",id:"assets-processing",depth:2},{text:"Disable SVGR Processing",id:"disable-svgr-processing",depth:2},{text:"Add type declaration",id:"add-type-declaration",depth:2},{text:"Modify the SVGR configuration",id:"modify-the-svgr-configuration",depth:2}],title:"Import SVG Assets",frontmatter:{sidebar_position:11}}}}]);