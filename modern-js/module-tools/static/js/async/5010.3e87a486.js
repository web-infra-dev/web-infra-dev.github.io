(self.webpackChunk_modern_js_module_tools_docs=self.webpackChunk_modern_js_module_tools_docs||[]).push([["5010"],{39882:function(e,n,d){"use strict";d.r(n),d.d(n,{default:function(){return l},frontmatter:function(){return o}});var i=d("15169"),s=d("43932"),c=d("9880"),r=d("23169");function a(e){var n=Object.assign({h1:"h1",a:"a",p:"p",code:"code",pre:"pre",h2:"h2",strong:"strong",h3:"h3",ul:"ul",li:"li",blockquote:"blockquote"},(0,r.useMDXComponents)(),e.components);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(n.h1,{id:"handle-third-party-dependencies",children:["Handle third-party dependencies",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#handle-third-party-dependencies",children:"#"})]}),"\n",(0,c.jsxs)(n.p,{children:["Generally, third-party dependencies required by a project can be installed via the ",(0,c.jsx)(n.code,{children:"install"})," command in the package manager. After the third-party dependencies are successfully installed, they will generally appear under ",(0,c.jsx)(n.code,{children:"dependencies"})," and ",(0,c.jsx)(n.code,{children:"devDependencies"})," in the project ",(0,c.jsx)(n.code,{children:"package.json"}),"."]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-json",meta:'title="pacakge.json"',children:'{\n  "dependencies": {},\n  "devDependencies": {}\n}\n'})}),"\n",(0,c.jsxs)(n.p,{children:["Dependencies under ",(0,c.jsx)(n.code,{children:'"dependencies"'})," are generally related to project code and builds, and if these third-party dependencies are declared under ",(0,c.jsx)(n.code,{children:'"devDependencies"'}),", then there will be missing dependencies in production environments."]}),"\n",(0,c.jsxs)(n.p,{children:["In addition to ",(0,c.jsx)(n.code,{children:'"dependencies"'}),", ",(0,c.jsx)(n.a,{href:"/en/guide/basic/before-getting-started#peerdependencies",children:(0,c.jsx)(n.code,{children:'"peerDependencies"'})})," can also declare dependencies that are needed in the production environment, but it puts more emphasis on the existence of these dependencies declared by ",(0,c.jsx)(n.code,{children:'"peerDependencies"'})," in the project's runtime environment, similar to the plugin mechanism."]}),"\n",(0,c.jsxs)(n.h2,{id:"default-handling-of-third-party-dependencies",children:["Default handling of third-party dependencies",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#default-handling-of-third-party-dependencies",children:"#"})]}),"\n",(0,c.jsxs)(n.p,{children:["By default, ",(0,c.jsxs)(n.strong,{children:["third-party dependencies under ",(0,c.jsx)(n.code,{children:'"dependencies"'})," and ",(0,c.jsx)(n.code,{children:'"peerDependencies"'})," are not bundled by Modern.js Module"]}),"."]}),"\n",(0,c.jsxs)(n.p,{children:["This is because when the npm package is installed, its ",(0,c.jsx)(n.code,{children:'"dependencies"'})," will also be installed. By not packaging ",(0,c.jsx)(n.code,{children:'"dependencies"'}),", you can reduce the size of the package product."]}),"\n",(0,c.jsxs)(n.p,{children:["If you need to package some dependencies, it is recommended to move them from ",(0,c.jsx)(n.code,{children:'"dependencies"'})," to ",(0,c.jsx)(n.code,{children:'"devDependencies"'}),", which is equivalent to ",(0,c.jsx)(n.strong,{children:"prebundle"})," the dependencies and reduces the size of the dependency installation."]}),"\n",(0,c.jsxs)(n.h3,{id:"example",children:["Example",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#example",children:"#"})]}),"\n",(0,c.jsxs)(n.p,{children:["If the project has a dependency on ",(0,c.jsx)(n.code,{children:"react"}),"."]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-json",meta:'title="package.json"',children:'{\n  "dependencies": {\n    "react": "^17"\n  },\n  // or\n  "peerDependencies": {\n    "react": "^17"\n  }\n}\n'})}),"\n",(0,c.jsxs)(n.p,{children:["When a ",(0,c.jsx)(n.code,{children:"react"})," dependency is used in the source code:"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-tsx",meta:'title="src/index.ts"',children:"import React from 'react';\nconsole.info(React);\n"})}),"\n",(0,c.jsxs)(n.p,{children:["The ",(0,c.jsx)(n.code,{children:"react"})," code is not bundled into the artifact:"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-js",meta:'title="dist/index.js"',children:"import React from 'react';\nconsole.info(React);\n"})}),"\n",(0,c.jsx)(n.p,{children:"If you want to modify the default processing, you can use the following API."}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:(0,c.jsx)(n.a,{href:"/api/config/build-config#autoexternal",children:(0,c.jsx)(n.code,{children:"buildConfig.autoExternal"})})}),"\n"]}),"\n",(0,c.jsxs)(n.h2,{id:"exclude-specified-third-party-dependencies",children:["Exclude specified third-party dependencies",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#exclude-specified-third-party-dependencies",children:"#"})]}),"\n",(0,c.jsxs)(n.p,{children:["We mentioned above the use of the ",(0,c.jsx)(n.code,{children:"buildConfig.autoExternal"})," API, and ",(0,c.jsx)(n.a,{href:"/en/api/config/build-config#externals",children:(0,c.jsx)(n.code,{children:"buildConfig.externals"})})," can control which third-party dependencies to handle\nthe project's dependencies in a more granular way."]}),"\n",(0,c.jsx)(n.p,{children:"For example, when we need to leave only certain dependencies unpacked, we can configure it as follows."}),"\n",(0,c.jsxs)(n.blockquote,{children:["\n",(0,c.jsx)(n.p,{children:"In this case, it is likely that some dependencies are not suitable for packaging. If this is the case, then you can handle it as follows."}),"\n"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-ts",children:"epxort default defineConfig({\n  buildConfig: {\n    autoExternal: false,\n    externals: ['pkg-1', /pkg-2/],\n  }\n});\n"})})]})}function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,r.useMDXComponents)(),e.components).wrapper;return n?(0,c.jsx)(n,(0,s._)((0,i._)({},e),{children:(0,c.jsx)(a,(0,i._)({},e))})):a(e)}var l=t;t.__RSPRESS_PAGE_META={},t.__RSPRESS_PAGE_META["en%2Fguide%2Fadvance%2Fexternal-dependency.mdx"]={toc:[{text:"Default handling of third-party dependencies",id:"default-handling-of-third-party-dependencies",depth:2},{text:"Example",id:"example",depth:3},{text:"Exclude specified third-party dependencies",id:"exclude-specified-third-party-dependencies",depth:2}],title:"Handle third-party dependencies"};var o={sidebar_position:4}}}]);