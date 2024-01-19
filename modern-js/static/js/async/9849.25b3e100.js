/*! For license information please see 9849.25b3e100.js.LICENSE.txt */
(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["9849"],{4124:function(e,n,a){"use strict";a.r(n),a.d(n,{default:function(){return o}});var l=a("39980"),r=a("96954");function i(e){let n=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",h3:"h3",pre:"pre",code:"code"},(0,r.useMDXComponents)(),e.components);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(n.h1,{id:"import-json-files",children:["Import JSON Files",(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#import-json-files",children:"#"})]}),"\n",(0,l.jsxs)(n.p,{children:["Modern.js supports import JSON files in code, and also supports import ",(0,l.jsx)(n.a,{href:"https://yaml.org/",target:"_blank",rel:"noopener noreferrer",children:"YAML"})," and ",(0,l.jsx)(n.a,{href:"https://toml.io/en/",target:"_blank",rel:"noopener noreferrer",children:"Toml"})," files and converting them to JSON format."]}),"\n",(0,l.jsxs)(n.h2,{id:"json-file",children:["JSON file",(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#json-file",children:"#"})]}),"\n",(0,l.jsx)(n.p,{children:"You can import JSON files directly in JavaScript files."}),"\n",(0,l.jsxs)(n.h3,{id:"example",children:["Example",(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#example",children:"#"})]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-json",meta:'title="example.json"',children:'{\n  "name": "foo",\n  "items": [1, 2]\n}\n'})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",meta:'title="index.js"',children:"import example from './example.json';\n\nconsole.log(example.name); // 'foo';\nconsole.log(example.items); // [1, 2];\n"})}),"\n",(0,l.jsxs)(n.h3,{id:"named-import",children:["Named Import",(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#named-import",children:"#"})]}),"\n",(0,l.jsx)(n.p,{children:"Modern.js does not support importing JSON files via named import yet:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",children:"import { name } from './example.json';\n"})}),"\n",(0,l.jsxs)(n.h2,{id:"yaml-file",children:["YAML file",(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#yaml-file",children:"#"})]}),"\n",(0,l.jsx)(n.p,{children:"YAML is a data serialization language commonly used for writing configuration files."}),"\n",(0,l.jsxs)(n.p,{children:["You can directly import ",(0,l.jsx)(n.code,{children:".yaml"})," or ",(0,l.jsx)(n.code,{children:".yml"})," files in JavaScript and they will be automatically converted to JSON format."]}),"\n",(0,l.jsxs)(n.h3,{id:"example-1",children:["Example",(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#example-1",children:"#"})]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-yaml",meta:'title="example.yaml"',children:"---\nhello: world\nfoo:\n  bar: baz\n"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",children:"import example from './example.yaml';\n\nconsole.log(example.hello); // 'world';\nconsole.log(example.foo); // { bar: 'baz' };\n"})}),"\n",(0,l.jsxs)(n.h3,{id:"add-type-declaration",children:["Add type declaration",(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#add-type-declaration",children:"#"})]}),"\n",(0,l.jsxs)(n.p,{children:["When you import a YAML file in your TypeScript code, please create a ",(0,l.jsx)(n.code,{children:"src/global.d.ts"})," file in your project and add the corresponding type declaration:"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-ts",meta:'title="src/global.d.ts"',children:"declare module '*.yaml' {\n  const content: Record<string, any>;\n  export default content;\n}\n\ndeclare module '*.yml' {\n  const content: Record<string, any>;\n  export default content;\n}\n"})}),"\n",(0,l.jsxs)(n.h2,{id:"toml-file",children:["Toml file",(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#toml-file",children:"#"})]}),"\n",(0,l.jsx)(n.p,{children:"Toml is a semantically explicit, easy-to-read configuration file format."}),"\n",(0,l.jsxs)(n.p,{children:["You can directly import ",(0,l.jsx)(n.code,{children:".toml"})," files in JavaScript and it will be automatically converted to JSON format."]}),"\n",(0,l.jsxs)(n.h3,{id:"example-2",children:["Example",(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#example-2",children:"#"})]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-toml",meta:'title="example.toml"',children:'hello = "world"\n\n[foo]\nbar = "baz"\n'})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",children:"import example from './example.toml';\n\nconsole.log(example.hello); // 'world';\nconsole.log(example.foo); // { bar: 'baz' };\n"})}),"\n",(0,l.jsxs)(n.h3,{id:"add-type-declaration-1",children:["Add type declaration",(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#add-type-declaration-1",children:"#"})]}),"\n",(0,l.jsxs)(n.p,{children:["When you import Toml files in TypeScript code, please create a ",(0,l.jsx)(n.code,{children:"src/global.d.ts"})," file in your project and add the corresponding type declarations:"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-ts",meta:'title="src/global.d.ts"',children:"declare module '*.toml' {\n  const content: Record<string, any>;\n  export default content;\n}\n"})})]})}function d(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,r.useMDXComponents)(),e.components);return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(i,{...e})}):i(e)}var o=d;d.__RSPRESS_PAGE_META={},d.__RSPRESS_PAGE_META["en%2Fguides%2Fbasic-features%2Fjson-files.mdx"]={toc:[{text:"JSON file",id:"json-file",depth:2},{text:"Example",id:"example",depth:3},{text:"Named Import",id:"named-import",depth:3},{text:"YAML file",id:"yaml-file",depth:2},{text:"Example",id:"example-1",depth:3},{text:"Add type declaration",id:"add-type-declaration",depth:3},{text:"Toml file",id:"toml-file",depth:2},{text:"Example",id:"example-2",depth:3},{text:"Add type declaration",id:"add-type-declaration-1",depth:3}],title:"Import JSON Files",frontmatter:{sidebar_position:12}}}}]);