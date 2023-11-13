(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["12586"],{41196:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return a}});var r=t("9880"),s=t("23169");function o(e){return(0,r.jsx)(r.Fragment,{})}function i(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,s.useMDXComponents)(),e.components);return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}var a=i;i.__RSPRESS_PAGE_META={},i.__RSPRESS_PAGE_META["en%2Fcomponents%2Fentry-mode.mdx"]={toc:[],title:"",frontmatter:{}}},35677:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return d}});var r=t("9880"),s=t("23169"),o=t("41196");function i(e){let n=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",strong:"strong",pre:"pre",code:"code",div:"div",ul:"ul",li:"li",ol:"ol",h3:"h3",h4:"h4"},(0,s.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"page-entry",children:["Page Entry",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#page-entry",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"In this chapter, you will learn about the entry convention in Modern.js and how to customize it."}),"\n",(0,r.jsxs)(n.h2,{id:"what-is-entry",children:["What is Entry?",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#what-is-entry",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Entry refers to the starting module of a page."})}),"\n",(0,r.jsx)(n.p,{children:"In a Modern.js project, each entry corresponds to an independent page and a server-side route. By default, Modern.js automatically determines the entry of a page based on directory conventions, but also supports customizing the entry through configuration options."}),"\n",(0,r.jsx)(n.p,{children:"Many configuration options provided by Modern.js are divided by entry, such as page title, HTML template, page meta information, whether to enable SSR/SSG, server-side routing rules, etc."}),"\n",(0,r.jsxs)(n.h2,{id:"single-entry-and-multiple-entries",children:["Single Entry and Multiple Entries",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#single-entry-and-multiple-entries",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"The project initialized by Modern.js is a single entry (SPA) project, with the following structure:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:".\n\u251C\u2500\u2500 src\n\u2502   \u2514\u2500\u2500 routes\n\u2502       \u251C\u2500\u2500 index.css\n\u2502       \u251C\u2500\u2500 layout.tsx\n\u2502       \u2514\u2500\u2500 page.tsx\n\u251C\u2500\u2500 package.json\n\u251C\u2500\u2500 modern.config.ts\n\u2514\u2500\u2500 tsconfig.json\n"})}),"\n",(0,r.jsxs)(n.p,{children:["In a Modern.js project, you can easily switch from single entry to multiple entries by running ",(0,r.jsx)(n.code,{children:"pnpm run new"})," in the project directory and creating an entry:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-text",children:'? Please select the operation you want: Create Element\n? Please select the type of element to create: New "entry"\n? Please fill in the entry name: new-entry\n'})}),"\n",(0,r.jsxs)(n.p,{children:["After running the command, Modern.js will automatically generate a new entry directory. At this point, you can see that the ",(0,r.jsx)(n.code,{children:"src/"})," directory has the following structure:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:".\n\u251C\u2500\u2500 myapp     # Original entry\n\u2502   \u2514\u2500\u2500 routes\n\u2502       \u251C\u2500\u2500 index.css\n\u2502       \u251C\u2500\u2500 layout.tsx\n\u2502       \u2514\u2500\u2500 page.tsx\n\u2514\u2500\u2500 new-entry  # New entry\n    \u2514\u2500\u2500 routes\n        \u251C\u2500\u2500 index.css\n        \u251C\u2500\u2500 layout.tsx\n        \u2514\u2500\u2500 page.tsx\n"})}),"\n",(0,r.jsxs)(n.p,{children:["The original entry code has been moved to a directory with the same name as the ",(0,r.jsx)(n.code,{children:"name"})," field in ",(0,r.jsx)(n.code,{children:"package.json"}),", and a ",(0,r.jsx)(n.code,{children:"new-entry"})," entry directory has been created."]}),"\n",(0,r.jsxs)(n.p,{children:["You can run ",(0,r.jsx)(n.code,{children:"pnpm run dev"})," to start the development server. At this point, you will see a new route named ",(0,r.jsx)(n.code,{children:"/new-entry"})," added, and the existing page routes remain unchanged."]}),"\n",(0,r.jsxs)(n.div,{className:"rspress-directive tip",children:[(0,r.jsx)(n.div,{className:"rspress-directive-title",children:"TIP"}),(0,r.jsxs)(n.div,{className:"rspress-directive-content",children:[(0,r.jsxs)(n.p,{children:["Modern.js will use the entry with the same name as the ",(0,r.jsx)(n.code,{children:"name"})," field in ",(0,r.jsx)(n.code,{children:"package.json"})," as the main entry. The route of the main entry is ",(0,r.jsx)(n.code,{children:"/"}),", and the route of other entries is ",(0,r.jsx)(n.code,{children:"/{entryName}"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["For example, when the ",(0,r.jsx)(n.code,{children:"name"})," field in ",(0,r.jsx)(n.code,{children:"package.json"})," is ",(0,r.jsx)(n.code,{children:"myapp"}),", ",(0,r.jsx)(n.code,{children:"src/myapp"})," will be the main entry of the project."]}),"\n"]})]}),"\n",(0,r.jsxs)(n.h2,{id:"entry-types",children:["Entry Types",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#entry-types",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"Different entry types have different compilation and runtime behaviors."}),"\n","\n",(0,r.jsx)(o.default,{}),"\n",(0,r.jsxs)(n.p,{children:["By default, Modern.js scans the files under ",(0,r.jsx)(n.code,{children:"src/"})," before starting the project, identifies the entry, and generates the corresponding server-side route."]}),"\n",(0,r.jsxs)(n.div,{className:"rspress-directive tip",children:[(0,r.jsx)(n.div,{className:"rspress-directive-title",children:"TIP"}),(0,r.jsxs)(n.div,{className:"rspress-directive-content",children:["\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["You can custom the recognition directory for page entries by using ",(0,r.jsx)(n.a,{href:"/configure/app/source/entries-dir",children:"source.entriesDir"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["If you need to customize the entry points, please refer to ",(0,r.jsx)(n.a,{href:"#custom-entries",children:"Custom Entries"}),"."]}),"\n"]}),"\n"]})]}),"\n",(0,r.jsxs)(n.p,{children:["Not all top-level directories under ",(0,r.jsx)(n.code,{children:"src/"})," become project entries. The directory where the entry is located must meet one of the following four conditions:"]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Has a ",(0,r.jsx)(n.code,{children:"routes/"})," directory."]}),"\n",(0,r.jsxs)(n.li,{children:["Has an ",(0,r.jsx)(n.code,{children:"App.[jt]sx?"})," file."]}),"\n",(0,r.jsxs)(n.li,{children:["Has an ",(0,r.jsx)(n.code,{children:"index.[jt]sx?"})," file."]}),"\n",(0,r.jsxs)(n.li,{children:["Has a ",(0,r.jsx)(n.code,{children:"pages/"})," directory (compatible with Modern.js 1.0)."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["When the ",(0,r.jsx)(n.code,{children:"src/"})," directory meets the entry requirements, Modern.js considers the current project as a single entry application."]}),"\n",(0,r.jsxs)(n.div,{className:"rspress-directive tip",children:[(0,r.jsx)(n.div,{className:"rspress-directive-title",children:"TIP"}),(0,r.jsxs)(n.div,{className:"rspress-directive-content",children:[(0,r.jsxs)(n.p,{children:["In a single entry application, the default entry name is ",(0,r.jsx)(n.code,{children:"main"}),"."]}),"\n"]})]}),"\n",(0,r.jsxs)(n.p,{children:["When the project is not a single entry application, Modern.js will further look at the top-level directories under ",(0,r.jsx)(n.code,{children:"src/"}),"."]}),"\n",(0,r.jsxs)(n.h3,{id:"framework-mode-entry",children:["Framework Mode Entry",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#framework-mode-entry",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["The framework mode refers to the need to use the framework capabilities of Modern.js, such as nested routing, SSR, and integrated BFF, etc. Under this kind of entry convention, the entry defined by the developer is not the actual compilation entry. When Modern.js is launched, it generates a wrapped entry, and the real entry can be found at ",(0,r.jsx)(n.code,{children:"node_modules/.modern/[entryName]/index.js"}),"."]}),"\n",(0,r.jsxs)(n.h4,{id:"conventional-routing",children:["Conventional Routing",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#conventional-routing",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["If there is a ",(0,r.jsx)(n.code,{children:"routes/"})," directory in the entry, Modern.js will scan the files under ",(0,r.jsx)(n.code,{children:"routes/"})," during startup, and automatically generate client-side routes (react-router) based on file conventions. For example:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:".\n\u251C\u2500\u2500 src\n\u2502   \u2514\u2500\u2500 routes\n\u2502       \u251C\u2500\u2500 layout.tsx\n\u2502       \u2514\u2500\u2500 page.tsx\n"})}),"\n",(0,r.jsxs)(n.p,{children:["In the above directory, the component exported in ",(0,r.jsx)(n.code,{children:"layout.tsx"})," will be the outermost component, and the component exported in ",(0,r.jsx)(n.code,{children:"page.tsx"})," will be the component of the ",(0,r.jsx)(n.code,{children:"/"})," route."]}),"\n",(0,r.jsxs)(n.p,{children:["For more information, please refer to ",(0,r.jsx)(n.a,{href:"/guides/basic-features/routes#conventional-routing",children:"Conventional Routing"}),"."]}),"\n",(0,r.jsxs)(n.h4,{id:"self-controlled-routing",children:["Self-controlled Routing",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#self-controlled-routing",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["If there is an ",(0,r.jsx)(n.code,{children:"App.[jt]sx?"})," file in the entry, developers can set the client-side route in this file through code, or not set the client-side route."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"import { BrowserRouter, Route, Routes } from '@modern-js/runtime/router';\n\nexport default () => {\n  return (\n    <BrowserRouter>\n      <Routes>\n        <Route index element={<div>index</div>} />\n        <Route path=\"about\" element={<div>about</div>} />\n      </Routes>\n    </BrowserRouter>\n  );\n};\n"})}),"\n",(0,r.jsxs)(n.p,{children:["For more information, please refer to ",(0,r.jsx)(n.a,{href:"/guides/basic-features/routes#self-controlled-routing",children:"Self-controlled Routing"}),"."]}),"\n",(0,r.jsxs)(n.h4,{id:"custom-bootstrap",children:["Custom Bootstrap",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#custom-bootstrap",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["If there is an ",(0,r.jsx)(n.code,{children:"index.[jt]sx"})," file in the entry, and the file exports a function by default, Modern.js will pass the default ",(0,r.jsx)(n.code,{children:"bootstrap"})," function as a parameter and use the exported function to replace the default ",(0,r.jsx)(n.code,{children:"bootstrap"}),". This way, developers can customize how components are mounted to DOM nodes or add custom behavior before mounting. For example:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"export default (App: React.ComponentType, bootstrap: () => void) => {\n  // do something before bootstrap...\n  initSomething().then(() => {\n    bootstrap();\n  });\n};\n"})}),"\n",(0,r.jsx)(n.p,{children:"At this point, the generated file content of Modern.js is as follows:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"import React from 'react';\nimport ReactDOM from 'react-dom/client';\nimport customBootstrap from '@_modern_js_src/index.tsx';\nimport App from '@_modern_js_src/App';\nimport { router, state } from '@modern-js/runtime/plugins';\n\nconst IS_BROWSER = typeof window !== 'undefined' && window.name !== 'nodejs';\nconst MOUNT_ID = 'root';\n\nlet AppWrapper = null;\n\nfunction render() {\n  AppWrapper = createApp({\n    // plugin parameters for runtime...\n  })(App);\n  if (IS_BROWSER) {\n    customBootstrap(AppWrapper);\n  }\n  return AppWrapper;\n}\n\nAppWrapper = render();\n\nexport default AppWrapper;\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"build-mode-entry",children:["Build Mode Entry",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#build-mode-entry",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"Build mode refers to the mode where the entry point of the page is not automatically generated by Modern.js, but is fully defined by the developers themselves."}),"\n",(0,r.jsxs)(n.p,{children:["When there is an ",(0,r.jsx)(n.code,{children:"index.[jt]sx"})," file in the entry directory and it is not exported as a function using ",(0,r.jsx)(n.code,{children:"export default"}),", this type of file will be recognized as the entry module for webpack or Rspack."]}),"\n",(0,r.jsx)(n.p,{children:"In this case, Modern.js will not generate the entry code automatically. Therefore, you need to manually mount the component to the DOM node, for example:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",meta:"title=src/index.jsx",children:"import React from 'react';\nimport ReactDOM from 'react-dom';\nimport App from './App';\n\nReactDOM.render(<App />, document.getElementById('root'));\n"})}),"\n",(0,r.jsxs)(n.p,{children:["This approach is equivalent to enabling the ",(0,r.jsx)(n.a,{href:"/configure/app/source/entries",children:"source.entries.disableMount"})," option in Modern.js. When you use this approach, ",(0,r.jsx)(n.strong,{children:"you will not be able to use the runtime capabilities of the Modern.js framework"}),", such as the ",(0,r.jsx)(n.code,{children:"runtime"})," configuration in the modern.config.js file will no longer take effect."]}),"\n",(0,r.jsxs)(n.h2,{id:"custom-entries",children:["Custom Entries",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#custom-entries",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"In some cases, you may need to customize the entry configuration instead of using the entry conventions provided by Modern.js."}),"\n",(0,r.jsx)(n.p,{children:"For example, if you want to migrate a non-Modern.js project to Modern.js and it is not structured according to Modern.js directory structure, there might be some migration costs involved in changing it to the conventional structure. In such cases, you can custom the entries."}),"\n",(0,r.jsxs)(n.p,{children:["Modern.js provides the following configuration options that you can set in ",(0,r.jsx)(n.a,{href:"/configure/app/usage",children:"modern.config.ts"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/configure/app/source/entries",children:"source.entries"}),": Used to set custom entry objects."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/configure/app/source/disable-default-entries",children:"source.disableDefaultEntries"}),": Used to disable Modern.js's default entry scanning behavior. When you use custom entries, parts of your project structure might coincidentally match the Modern.js conventional directory structure, but you may not want Modern.js to generate entry configurations for them. Enabling this option can help avoid this issue."]}),"\n"]}),"\n",(0,r.jsxs)(n.h3,{id:"example",children:["Example",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#example",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"Here is an example of a custom entry point. You can also refer to the documentation of the corresponding configuration options for more usage."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"export default defineConfig({\n  source: {\n    entries: {\n      // Specify an entry named 'my-entry'\n      'my-entry': {\n        // Path to the entry module\n        entry: './src/my-page/index.tsx',\n        // Disable automatic generation of entry code by Modern.js\n        disableMount: true,\n      },\n    },\n    // Disable entry scanning behavior\n    disableDefaultEntries: true,\n  },\n});\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Note that when you enable ",(0,r.jsx)(n.code,{children:"disableMount"}),", ",(0,r.jsx)(n.strong,{children:"you won't be able to use the runtime capabilities of the Modern.js framework"}),", such as the ",(0,r.jsx)(n.code,{children:"runtime"})," configuration in the modern.config.ts file."]})]})}function a(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,s.useMDXComponents)(),e.components);return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}var d=a;a.__RSPRESS_PAGE_META={},a.__RSPRESS_PAGE_META["en%2Fguides%2Fconcept%2Fentries.mdx"]={toc:[{text:"What is Entry?",id:"what-is-entry",depth:2},{text:"Single Entry and Multiple Entries",id:"single-entry-and-multiple-entries",depth:2},{text:"Entry Types",id:"entry-types",depth:2},{text:"Framework Mode Entry",id:"framework-mode-entry",depth:3},{text:"Conventional Routing",id:"conventional-routing",depth:4},{text:"Self-controlled Routing",id:"self-controlled-routing",depth:4},{text:"Custom Bootstrap",id:"custom-bootstrap",depth:4},{text:"Build Mode Entry",id:"build-mode-entry",depth:3},{text:"Custom Entries",id:"custom-entries",depth:2},{text:"Example",id:"example",depth:3}],title:"Page Entry",frontmatter:{sidebar_position:1}}}}]);