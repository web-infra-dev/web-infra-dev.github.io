/*! For license information please see 96422.2a027b68.js.LICENSE.txt */
(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["96422"],{49670:function(e,s,n){"use strict";n.r(s);var l=n("39980"),a=n("96954");function d(e){let s=Object.assign({h1:"h1",a:"a",p:"p",ul:"ul",li:"li",strong:"strong",code:"code",pre:"pre",h3:"h3",div:"div"},(0,a.useMDXComponents)(),e.components);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(s.h1,{id:"outputcssmodulelocalidentname",children:["output.cssModuleLocalIdentName",(0,l.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#outputcssmodulelocalidentname",children:"#"})]}),"\n",(0,l.jsx)(s.p,{children:";"}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsxs)(s.li,{children:[(0,l.jsx)(s.strong,{children:"Type:"})," ",(0,l.jsx)(s.code,{children:"string"})]}),"\n",(0,l.jsx)(s.li,{children:(0,l.jsx)(s.strong,{children:"Default:"})}),"\n"]}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-ts",children:"// isProd indicates that the production build\nconst localIdentName = isProd\n  ? '[local]-[hash:base64:6]'\n  : '[path][name]__[local]-[hash:base64:6]';\n"})}),"\n",(0,l.jsx)(s.p,{children:"Sets the format of the className generated by CSS Modules after compilation."}),"\n",(0,l.jsxs)(s.h3,{id:"default-value",children:["Default Value",(0,l.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#default-value",children:"#"})]}),"\n",(0,l.jsxs)(s.p,{children:[(0,l.jsx)(s.code,{children:"cssModuleLocalIdentName"})," has different default values in development and production."]}),"\n",(0,l.jsx)(s.p,{children:"In a production, Builder will generate shorter class names to reduce the bundle size."}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-ts",children:"import styles from './index.module.scss';\n\n// In development, the value is `.src-index-module__header--xxxxx`\n// In production, the value is `.xxxxx`\nconsole.log(styles.header);\n"})}),"\n",(0,l.jsxs)(s.h3,{id:"template-string",children:["Template String",(0,l.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#template-string",children:"#"})]}),"\n",(0,l.jsxs)(s.p,{children:["You can use the following template strings in ",(0,l.jsx)(s.code,{children:"cssModuleLocalIdentName"}),":"]}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsxs)(s.li,{children:[(0,l.jsx)(s.code,{children:"[name]"})," - the basename of the asset."]}),"\n",(0,l.jsxs)(s.li,{children:[(0,l.jsx)(s.code,{children:"[local]"})," - original class."]}),"\n",(0,l.jsxs)(s.li,{children:[(0,l.jsx)(s.code,{children:"[hash]"})," - the hash of the string."]}),"\n",(0,l.jsxs)(s.li,{children:[(0,l.jsx)(s.code,{children:"[folder]"})," - the folder relative path."]}),"\n",(0,l.jsxs)(s.li,{children:[(0,l.jsx)(s.code,{children:"[path]"})," - the relative path."]}),"\n",(0,l.jsxs)(s.li,{children:[(0,l.jsx)(s.code,{children:"[file]"})," - filename and path."]}),"\n",(0,l.jsxs)(s.li,{children:[(0,l.jsx)(s.code,{children:"[ext]"})," - extension with leading dot."]}),"\n",(0,l.jsxs)(s.li,{children:[(0,l.jsx)(s.code,{children:"[hash:<hashDigest>:<hashDigestLength>]"}),": hash with hash settings."]}),"\n"]}),"\n",(0,l.jsxs)(s.div,{className:"rspress-directive tip",children:[(0,l.jsx)(s.div,{className:"rspress-directive-title",children:"TIP"}),(0,l.jsx)(s.div,{className:"rspress-directive-content",children:(0,l.jsxs)(s.p,{children:["When using Rspack as the bundler, currently does not support custom ",(0,l.jsx)(s.code,{children:"<hashDigest>"}),".\n"]})})]}),"\n",(0,l.jsxs)(s.h3,{id:"example",children:["Example",(0,l.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#example",children:"#"})]}),"\n",(0,l.jsxs)(s.p,{children:["Set ",(0,l.jsx)(s.code,{children:"cssModuleLocalIdentName"})," to other value:"]}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-ts",children:"export default {\n  output: {\n    cssModuleLocalIdentName: '[hash:base64:4]',\n  },\n};\n"})})]})}function t(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:s}=Object.assign({},(0,a.useMDXComponents)(),e.components);return s?(0,l.jsx)(s,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}s.default=t,t.__RSPRESS_PAGE_META={},t.__RSPRESS_PAGE_META["en%2Fconfigure%2Fapp%2Foutput%2Fcss-module-local-ident-name.mdx"]={toc:[{text:"Default Value",id:"default-value",depth:3},{text:"Template String",id:"template-string",depth:3},{text:"Example",id:"example",depth:3}],title:"output.cssModuleLocalIdentName",frontmatter:{sidebar_label:"cssModuleLocalIdentName"}}}}]);