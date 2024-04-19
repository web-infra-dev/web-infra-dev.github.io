/*! For license information please see 10209.4b01e3e4.js.LICENSE.txt */
(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["10209"],{46717:function(e,n,r){"use strict";r.r(n);var i=r("39980"),o=r("9580");function t(e){let n=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",pre:"pre",code:"code",h3:"h3",strong:"strong",ul:"ul",li:"li",div:"div",ol:"ol"},(0,o.ah)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.h1,{id:"source-code-build-mode",children:["Source Code Build Mode",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#source-code-build-mode",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"The source code build mode is used in the monorepo development scenario, allowing developers to directly reference the source code of other sub-projects within the monorepo for development."}),"\n",(0,i.jsxs)(n.h2,{id:"use-cases",children:["Use Cases",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#use-cases",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"In a monorepo, there are two main ways for projects to reference each other: artifact referencing and source code referencing. Let's use a simple monorepo as an example to illustrate the use case of source code referencing."}),"\n",(0,i.jsx)(n.p,{children:"For example, the monorepo contains an app application and a lib:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"monorepo\n\u251C\u2500\u2500 app\n\u2514\u2500\u2500 lib\n    \u2514\u2500\u2500 src\n        \u2514\u2500\u2500 index.ts\n"})}),"\n",(0,i.jsx)(n.p,{children:"The app is built using Modern.js and relies on some methods from the lib:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "name": "app",\n  "dependencies": {\n    "lib": "workspace:*"\n  }\n}\n'})}),"\n",(0,i.jsxs)(n.h3,{id:"artifact-referencing",children:["Artifact Referencing",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#artifact-referencing",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"When using artifact referencing, the current project references the artifacts built from other sub-projects."})}),"\n",(0,i.jsxs)(n.p,{children:["In the example above, the lib is written in TypeScript. Typically, we need to build the lib's code in advance to generate JavaScript artifacts so that the app can reference it correctly. When the lib's code is updated, we need to rebuild it (or use ",(0,i.jsx)(n.code,{children:"tsc --watch"}),") to ensure that the app can use the latest code."]}),"\n",(0,i.jsx)(n.p,{children:"The advantages of this approach are:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"The build processes of each sub-project are completely independent and can have different build configurations."}),"\n",(0,i.jsx)(n.li,{children:"Build caching can be applied to individual sub-projects."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"The disadvantages are:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"The HMR chain becomes longer during local development."}),"\n",(0,i.jsx)(n.li,{children:"The process becomes cumbersome when a project contains multiple lib packages."}),"\n"]}),"\n",(0,i.jsxs)(n.h3,{id:"source-code-referencing",children:["Source Code Referencing",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#source-code-referencing",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"When using source code referencing, the current project references the source code of other sub-projects for building."})}),"\n",(0,i.jsxs)(n.p,{children:["In the example mentioned earlier, when you enable the source code build mode and add the relevant configuration in the ",(0,i.jsx)(n.code,{children:"lib"})," directory, Modern.js will automatically reference the ",(0,i.jsx)(n.code,{children:"src/index.ts"})," source code of the lib. This means that you don't need to build the lib's code in advance, and when the source code of the lib is updated, it can trigger automatic hot updates for the app."]}),"\n",(0,i.jsx)(n.p,{children:"The advantages of this approach are:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"The sub-project does not rely on a build tool and does not require build configurations. The code of the sub-project will be compiled by the build tool of the current project."}),"\n",(0,i.jsx)(n.li,{children:"There is no need to execute the build process for the sub-projects in advance."}),"\n",(0,i.jsx)(n.li,{children:"HMR is more efficient during local development."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"The disadvantages are:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"The current project needs to support syntax features used by sub-projects and follow the same syntax specifications, such as using a consistent version of decorator syntax. If the current project and sub-projects require different build configurations, building from source code may not be suitable."}),"\n",(0,i.jsx)(n.li,{children:"The current project requires compiling more code, which may result in longer build times."}),"\n"]}),"\n",(0,i.jsxs)(n.h2,{id:"building-from-source-code",children:["Building from Source Code",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#building-from-source-code",children:"#"})]}),"\n",(0,i.jsxs)(n.h3,{id:"enabling-configuration",children:["Enabling Configuration",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#enabling-configuration",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["You can enable source code build mode by setting ",(0,i.jsx)(n.a,{href:"/configure/app/experiments/source-build",children:"experiments.sourceBuild"})," to ",(0,i.jsx)(n.code,{children:"true"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"export default {\n  experiments: {\n    sourceBuild: true,\n  },\n};\n"})}),"\n",(0,i.jsxs)(n.h3,{id:"configuring-sub-projects",children:["Configuring Sub-projects",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#configuring-sub-projects",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["When the source code build mode is enabled, the Modern.js will prioritize reading the file specified in the ",(0,i.jsx)(n.code,{children:"source"})," field of the sub-project during the build process. Therefore, you need to configure the ",(0,i.jsx)(n.code,{children:"source"})," field in the package.json file of the sub-project and point it to the source code file."]}),"\n",(0,i.jsxs)(n.p,{children:["For example, in the following example, when the lib package is referenced, the ",(0,i.jsx)(n.code,{children:"./src/index.ts"})," file will be read for building:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",meta:'title="package.json"',children:'{\n  "name": "lib",\n  "main": "./dist/index.js",\n  "source": "./src/index.ts"\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["If the sub-project uses ",(0,i.jsx)(n.a,{href:"https://nodejs.org/api/packages.html#package-entry-points",target:"_blank",rel:"noopener noreferrer",children:"exports"})," field, you also need to add the ",(0,i.jsx)(n.code,{children:"source"})," field in the ",(0,i.jsx)(n.code,{children:"exports"})," field."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",meta:'title="package.json"',children:'{\n  "name": "lib",\n  "exports": {\n    ".": {\n      "source": "./src/index.ts",\n      "default": "./dist/index.js"\n    },\n    "./features": {\n      "source": "./src/features/index.ts",\n      "default": "./dist/features/index.js"\n    }\n  }\n}\n'})}),"\n",(0,i.jsxs)(n.h2,{id:"configure-project-reference",children:["Configure Project Reference",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#configure-project-reference",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["In a TypeScript project, you need to use the capability provided by TypeScript called ",(0,i.jsx)(n.a,{href:"https://www.typescriptlang.org/docs/handbook/project-references.html",target:"_blank",rel:"noopener noreferrer",children:"Project Reference"}),". It helps you develop source code more effectively."]}),"\n",(0,i.jsxs)(n.h3,{id:"introduction",children:["Introduction",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#introduction",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"Project reference provides the following capabilities:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"It allows TypeScript to correctly recognize the types of other sub-projects without the need to build them."}),"\n",(0,i.jsx)(n.li,{children:"When you navigate the code in VS Code, it automatically takes you to the corresponding source code file of the module."}),"\n",(0,i.jsxs)(n.li,{children:["Modern.js reads the project reference configuration and automatically recognizes the ",(0,i.jsx)(n.code,{children:"tsconfig.compilerOptions.path"})," configuration of the sub-project, so that the use of aliases in the sub-project works correctly."]}),"\n"]}),"\n",(0,i.jsxs)(n.h3,{id:"example",children:["Example",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#example",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["In the example mentioned earlier, since the app project references the lib sub-project, we need to configure the ",(0,i.jsx)(n.code,{children:"composite"})," and ",(0,i.jsx)(n.code,{children:"references"})," options in the app project's ",(0,i.jsx)(n.code,{children:"tsconfig.json"})," file and point them to the corresponding relative directory of lib:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",meta:'title="app/tsconfig.json"',children:'{\n  "compilerOptions": {\n    "composite": true\n  },\n  "references": [\n    {\n      "path": "../lib"\n    }\n  ]\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"After adding these two options, the project reference is already configured. You can restart VS Code to see the effects of the configuration."}),"\n",(0,i.jsxs)(n.p,{children:["Note that the above example is a simplified one. In real monorepo projects, there may be more complex dependency relationships. You need to add a complete ",(0,i.jsx)(n.code,{children:"references"})," configuration for the functionality to work correctly."]}),"\n",(0,i.jsxs)(n.div,{className:"rspress-directive tip",children:[(0,i.jsx)(n.div,{className:"rspress-directive-title",children:"TIP"}),(0,i.jsx)(n.div,{className:"rspress-directive-content",children:(0,i.jsxs)(n.p,{children:["If you want to learn more about project reference, please refer to the official documentation on ",(0,i.jsx)(n.a,{href:"https://www.typescriptlang.org/docs/handbook/project-references.html",target:"_blank",rel:"noopener noreferrer",children:"TypeScript - Project References"}),".\n"]})})]}),"\n",(0,i.jsxs)(n.h2,{id:"caveat",children:["Caveat",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#caveat",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"When using source code build mode, there are a few things to keep in mind:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Ensure that the current project can compile the syntax or features used in the sub-project. For example, if the sub-project uses Stylus to write CSS, the current app needs to support Stylus compilation."}),"\n",(0,i.jsx)(n.li,{children:"Ensure that the current project has the same code syntax and features as the sub-project, such as consistent syntax versions for decorators."}),"\n",(0,i.jsxs)(n.li,{children:["Source code building may have some limitations. When encountering issues, you can remove the ",(0,i.jsx)(n.code,{children:"source"})," field from the sub-project's package.json and debug using the built artifacts of the sub-project."]}),"\n",(0,i.jsxs)(n.li,{children:["When ",(0,i.jsx)(n.code,{children:"composite: true"})," is enabled, TypeScript will generate ",(0,i.jsx)(n.code,{children:"*.tsbuildinfo"})," temporary files. You need to add these temporary files to the ",(0,i.jsx)(n.code,{children:".gitignore"})," file."]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",meta:'title=".gitignore"',children:"*.tsbuildinfo\n"})})]})}function s(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,o.ah)(),e.components);return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(t,{...e})}):t(e)}n.default=s,s.__RSPRESS_PAGE_META={},s.__RSPRESS_PAGE_META["en%2Fguides%2Fadvanced-features%2Fsource-build.mdx"]={toc:[{text:"Use Cases",id:"use-cases",depth:2},{text:"Artifact Referencing",id:"artifact-referencing",depth:3},{text:"Source Code Referencing",id:"source-code-referencing",depth:3},{text:"Building from Source Code",id:"building-from-source-code",depth:2},{text:"Enabling Configuration",id:"enabling-configuration",depth:3},{text:"Configuring Sub-projects",id:"configuring-sub-projects",depth:3},{text:"Configure Project Reference",id:"configure-project-reference",depth:2},{text:"Introduction",id:"introduction",depth:3},{text:"Example",id:"example",depth:3},{text:"Caveat",id:"caveat",depth:2}],title:"Source Code Build Mode",frontmatter:{sidebar_position:11}}}}]);