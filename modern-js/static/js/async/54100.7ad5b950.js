"use strict";(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["54100"],{35788:function(e,n,i){i.r(n),i.d(n,{default:function(){return t}});var r=i(39980),s=i(9580);function l(e){let n=Object.assign({h1:"h1",a:"a",p:"p",ul:"ul",li:"li",code:"code",h2:"h2",h3:"h3",pre:"pre"},(0,s.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"relationship",children:["Relationship",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#relationship",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"The plugin configuration object in Modern.js provides a series of fields to control plugin order, mutual exclusion, and other capabilities. The available fields are as follows:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"name"}),": ",(0,r.jsx)(n.code,{children:"string"}),", sets the name of the current plugin."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"pre"}),": ",(0,r.jsx)(n.code,{children:"string[]"}),", these plugins will be adjusted to be executed before the current plugin."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"post"}),": ",(0,r.jsx)(n.code,{children:"string[]"}),", these plugins will be adjusted to be executed after the current plugin."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"rivals"}),": ",(0,r.jsx)(n.code,{children:"string[]"}),", mutually exclusive plugins, an error will be thrown when encountering these plugins."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"required"}),": ",(0,r.jsx)(n.code,{children:"string[]"}),", required plugins, an error will be thrown when the corresponding plugin is not found in the plugin list."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"usePlugin"}),": ",(0,r.jsx)(n.code,{children:"CliPlugin[]"}),", registers other plugins."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"The above parameters can be used to achieve plugin front, back, mutual exclusion, and mandatory logic."}),"\n",(0,r.jsxs)(n.h2,{id:"plugin-sorting",children:["Plugin Sorting",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#plugin-sorting",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["Modern.js plugins achieve plugin sorting functionality through the ",(0,r.jsx)(n.code,{children:"pre"})," and ",(0,r.jsx)(n.code,{children:"post"})," parameters."]}),"\n",(0,r.jsxs)(n.h3,{id:"pre",children:["Pre",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#pre",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["By default, plugins are executed in the order they are added. You can declare preceding plugins to be executed by using the ",(0,r.jsx)(n.code,{children:"pre"})," field."]}),"\n",(0,r.jsx)(n.p,{children:"For example, there are the following two plugins:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",meta:"title=foo.ts",children:"const foo = {\n  name: 'plugin-foo',\n};\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",meta:"title=bar.ts",children:"const bar = {\n  name: 'plugin-bar',\n  pre: ['plugin-foo'],\n};\n"})}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"bar"})," plugin configures the ",(0,r.jsx)(n.code,{children:"foo"})," plugin in the ",(0,r.jsx)(n.code,{children:"pre"})," field, so the'foo' plugin must be executed before the ",(0,r.jsx)(n.code,{children:"bar"})," plugin."]}),"\n",(0,r.jsxs)(n.h3,{id:"post",children:["Post",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#post",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["Declare succeeding plugins to be executed by using the ",(0,r.jsx)(n.code,{children:"post"})," field."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",meta:"title=foo.ts",children:"const foo = {\n  name: 'plugin-foo',\n};\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",meta:"title=bar.ts",children:"const bar = {\n  name: 'plugin-bar',\n  post: ['plugin-foo'],\n};\n"})}),"\n",(0,r.jsxs)(n.p,{children:["If you use the ",(0,r.jsx)(n.code,{children:"post"})," parameter in the ",(0,r.jsx)(n.code,{children:"bar"})," plugin's configuration and set it to ",(0,r.jsx)(n.code,{children:"['foo']"}),", then the ",(0,r.jsx)(n.code,{children:"foo"})," plugin will be executed after the ",(0,r.jsx)(n.code,{children:"bar"})," plugin."]}),"\n",(0,r.jsxs)(n.h2,{id:"rivals",children:["rivals",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#rivals",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"The rivals field can be used to declare a mutual exclusion relationship between plugins."}),"\n",(0,r.jsx)(n.p,{children:"there are two plugin:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",meta:"title=foo.ts",children:"const foo = {\n  name: 'plugin-foo',\n};\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",meta:"title=bar.ts",children:"const bar = {\n  name: 'plugin-bar',\n  rivals: ['plugin-foo'],\n};\n"})}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"bar"})," plugin has been configured with the ",(0,r.jsx)(n.code,{children:"foo"})," plugin in the ",(0,r.jsx)(n.code,{children:"rivals"})," field, therefore an error will be thrown if both the ",(0,r.jsx)(n.code,{children:"foo"})," and ",(0,r.jsx)(n.code,{children:"bar"})," plugins are added simultaneously."]}),"\n",(0,r.jsxs)(n.h2,{id:"required",children:["required",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#required",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"required"})," field can be used to declare a dependency relationship between plugins."]}),"\n",(0,r.jsx)(n.p,{children:"there are two plugin:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",meta:"title=foo.ts",children:"const foo = {\n  name: 'plugin-foo',\n};\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",meta:"title=bar.ts",children:"const bar = {\n  name: 'plugin-bar',\n  required: ['plugin-foo'],\n};\n"})}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"bar"})," plugin has been configured with the ",(0,r.jsx)(n.code,{children:"foo"})," plugin in the ",(0,r.jsx)(n.code,{children:"required"})," field. Therefore, an error will be thrown when using the ",(0,r.jsx)(n.code,{children:"bar"})," plugin if the ",(0,r.jsx)(n.code,{children:"foo"})," plugin is not configured."]}),"\n",(0,r.jsxs)(n.h2,{id:"register-plugin",children:["Register Plugin",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#register-plugin",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["When there is a dependency relationship between plugins, we can also actively register another plugin in a plugin by using ",(0,r.jsx)(n.code,{children:"usePlugin"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",meta:"title=foo.ts",children:"const foo = () => ({\n  name: 'plugin-foo',\n});\n\nconst bar = () => ({\n  name: 'plugin-bar',\n  usePlugin: [foo()],\n});\n"})}),"\n",(0,r.jsxs)(n.p,{children:["When the user configures the ",(0,r.jsx)(n.code,{children:"bar"})," plugin, the foo plugin will also be automatically registered and activated. The user does not need to register the ",(0,r.jsx)(n.code,{children:"foo"})," plugin separately."]})]})}function d(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,s.ah)(),e.components);return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}let t=d;d.__RSPRESS_PAGE_META={},d.__RSPRESS_PAGE_META["en%2Fguides%2Ftopic-detail%2Fframework-plugin%2Frelationship.mdx"]={toc:[{text:"Plugin Sorting",id:"plugin-sorting",depth:2},{text:"Pre",id:"pre",depth:3},{text:"Post",id:"post",depth:3},{text:"rivals",id:"rivals",depth:2},{text:"required",id:"required",depth:2},{text:"Register Plugin",id:"register-plugin",depth:2}],title:"Relationship",frontmatter:{sidebar_position:4}}}}]);