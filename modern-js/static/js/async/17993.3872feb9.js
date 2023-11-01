(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["17993"],{282:function(e,n,s){"use strict";s.r(n),s.d(n,{default:function(){return i}});var t=s("9880"),l=s("23169");function a(e){let n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",pre:"pre",p:"p",h3:"h3",a:"a",div:"div"},(0,l.useMDXComponents)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Type:"})," ",(0,t.jsx)(n.code,{children:"string"})]}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"Default:"})}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"// isProd indicates that the production build\nconst localIdentName = isProd\n  ? '[local]-[hash:base64:6]'\n  : '[path][name]__[local]-[hash:base64:6]';\n"})}),"\n",(0,t.jsx)(n.p,{children:"Sets the format of the className generated by CSS Modules after compilation."}),"\n",(0,t.jsxs)(n.h3,{id:"default-value",children:["Default Value",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#default-value",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"cssModuleLocalIdentName"})," has different default values in development and production."]}),"\n",(0,t.jsx)(n.p,{children:"In a production, Builder will generate shorter class names to reduce the bundle size."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"import styles from './index.module.scss';\n\n// In development, the value is `.src-index-module__header--xxxxx`\n// In production, the value is `.xxxxx`\nconsole.log(styles.header);\n"})}),"\n",(0,t.jsxs)(n.h3,{id:"template-string",children:["Template String",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#template-string",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:["You can use the following template strings in ",(0,t.jsx)(n.code,{children:"cssModuleLocalIdentName"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"[name]"})," - the basename of the asset."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"[local]"})," - original class."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"[hash]"})," - the hash of the string."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"[folder]"})," - the folder relative path."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"[path]"})," - the relative path."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"[file]"})," - filename and path."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"[ext]"})," - extension with leading dot."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"[hash:<hashDigest>:<hashDigestLength>]"}),": hash with hash settings."]}),"\n"]}),"\n",(0,t.jsxs)(n.div,{className:"rspress-directive tip",children:[(0,t.jsx)(n.div,{className:"rspress-directive-title",children:"TIP"}),(0,t.jsx)(n.div,{className:"rspress-directive-content",children:(0,t.jsxs)(n.p,{children:["When using Rspack as the bundler, currently does not support custom ",(0,t.jsx)(n.code,{children:"<hashDigest>"}),".\n"]})})]}),"\n",(0,t.jsxs)(n.h3,{id:"example",children:["Example",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#example",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:["Set ",(0,t.jsx)(n.code,{children:"cssModuleLocalIdentName"})," to other value:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"export default {\n  output: {\n    cssModuleLocalIdentName: '[hash:base64:4]',\n  },\n};\n"})})]})}function d(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,l.useMDXComponents)(),e.components);return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}var i=d;d.__RSPRESS_PAGE_META={},d.__RSPRESS_PAGE_META["..%2F..%2Fbuilder-doc%2Fdocs%2Fen%2Fconfig%2Foutput%2FcssModuleLocalIdentName.md"]={toc:[{text:"Default Value",id:"default-value",depth:3},{text:"Template String",id:"template-string",depth:3},{text:"Example",id:"example",depth:3}],title:""}},39468:function(e,n,s){"use strict";s.r(n),s.d(n,{default:function(){return r},frontmatter:function(){return c}});var t=s("9880"),l=s("23169"),a=s("282");function d(e){let n=Object.assign({h1:"h1",a:"a"},(0,l.useMDXComponents)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.h1,{id:"outputcssmodulelocalidentname",children:["output.cssModuleLocalIdentName",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#outputcssmodulelocalidentname",children:"#"})]}),"\n","\n",(0,t.jsx)(a.default,{})]})}function i(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,l.useMDXComponents)(),e.components);return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}var r=i;i.__RSPRESS_PAGE_META={},i.__RSPRESS_PAGE_META["en%2Fconfigure%2Fapp%2Foutput%2Fcss-module-local-ident-name.mdx"]={toc:[],title:"output.cssModuleLocalIdentName"};let c={sidebar_label:"cssModuleLocalIdentName"}}}]);