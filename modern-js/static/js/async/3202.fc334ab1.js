(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["3202"],{7883:function(e,r,s){"use strict";s.r(r),s.d(r,{default:function(){return l}});var n,t=s("15169"),i=s("43932"),o=s("9880"),d=s("23169");function a(e){var r=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",a:"a",h4:"h4",pre:"pre",h3:"h3"},(0,d.useMDXComponents)(),e.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.strong,{children:"Type:"})," ",(0,o.jsx)(r.code,{children:"string[] | Record<BuilderTarget, string[]"})]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.strong,{children:"Default:"})," ",(0,o.jsx)(r.code,{children:"undefined"})]}),"\n"]}),"\n",(0,o.jsxs)(r.p,{children:["Specifies the range of target browsers that the project is compatible with. This value will be used by ",(0,o.jsx)(r.a,{href:"https://babeljs.io/docs/en/babel-preset-env",target:"_blank",rel:"noopener noreferrer",children:"@babel/preset-env"})," and ",(0,o.jsx)(r.a,{href:"https://github.com/postcss/autoprefixer",target:"_blank",rel:"noopener noreferrer",children:"autoprefixer"})," to identify the JavaScript syntax that need to be transformed and the CSS browser prefixes that need to be added."]}),"\n",(0,o.jsxs)(r.h4,{id:"priority",children:["Priority",(0,o.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#priority",children:"#"})]}),"\n",(0,o.jsxs)(r.p,{children:["The ",(0,o.jsx)(r.code,{children:"overrideBrowserslist"})," config will override the ",(0,o.jsx)(r.code,{children:".browserslistrc"})," config file in the project and the ",(0,o.jsx)(r.code,{children:"browserslist"})," field in package.json."]}),"\n",(0,o.jsxs)(r.p,{children:["In most cases, it is recommended to use the ",(0,o.jsx)(r.code,{children:".browserslistrc"})," file rather than the ",(0,o.jsx)(r.code,{children:"overrideBrowserslist"})," config. Because the ",(0,o.jsx)(r.code,{children:".browserslistrc"})," file is the official config file, it is more general and can be recognized by other libraries in the community."]}),"\n",(0,o.jsxs)(r.h4,{id:"default-value",children:["Default Value",(0,o.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#default-value",children:"#"})]}),"\n",(0,o.jsxs)(r.p,{children:["If there is no ",(0,o.jsx)(r.code,{children:"browserslist"})," configs defined in the project, nor ",(0,o.jsx)(r.code,{children:"overrideBrowserslist"})," defined, then Builder will set the default browserslist to:"]}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-js",children:"['> 0.01%', 'not dead', 'not op_mini all'];\n"})}),"\n",(0,o.jsxs)(r.h3,{id:"example",children:["Example",(0,o.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#example",children:"#"})]}),"\n",(0,o.jsx)(r.p,{children:"An example compatible with mobile scenarios:"}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-js",children:"export default {\n  output: {\n    overrideBrowserslist: [\n      'iOS >= 9',\n      'Android >= 4.4',\n      'last 2 versions',\n      '> 0.2%',\n      'not dead',\n    ],\n  },\n};\n"})}),"\n",(0,o.jsxs)(r.p,{children:["Check out the ",(0,o.jsx)(r.a,{href:"https://github.com/browserslist/browserslist",target:"_blank",rel:"noopener noreferrer",children:"browserslist documentation"})," to learn more about browserslist."]}),"\n",(0,o.jsxs)(r.h4,{id:"set-according-to-targets",children:["Set according to Targets",(0,o.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#set-according-to-targets",children:"#"})]}),"\n",(0,o.jsxs)(r.p,{children:["When you build multiple targets at the same time, you can set different browser ranges for different targets. At this point, you need to set ",(0,o.jsx)(r.code,{children:"overrideBrowserslist"})," to an object whose key is the corresponding build target."]}),"\n",(0,o.jsxs)(r.p,{children:["For example to set different ranges for ",(0,o.jsx)(r.code,{children:"web"})," and ",(0,o.jsx)(r.code,{children:"node"}),":"]}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-js",children:"export default {\n  output: {\n    overrideBrowserslist: {\n      web: [\n        'iOS >= 9',\n        'Android >= 4.4',\n        'last 2 versions',\n        '> 0.2%',\n        'not dead',\n      ],\n      node: ['node >= 14'],\n    },\n  },\n};\n"})})]})}(n=globalThis).__RSPRESS_PAGE_META||(n.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["..%2F..%2Fbuilder-doc%2Fdocs%2Fen%2Fconfig%2Foutput%2FoverrideBrowserslist.md"]={toc:[{text:"Priority",id:"priority",depth:4},{text:"Default Value",id:"default-value",depth:4},{text:"Example",id:"example",depth:3},{text:"Set according to Targets",id:"set-according-to-targets",depth:4}],title:"",frontmatter:{}};var l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=Object.assign({},(0,d.useMDXComponents)(),e.components).wrapper;return r?(0,o.jsx)(r,(0,i._)((0,t._)({},e),{children:(0,o.jsx)(a,(0,t._)({},e))})):a(e)}},42039:function(e,r,s){"use strict";s.r(r),s.d(r,{default:function(){return c}});var n,t=s("15169"),i=s("43932"),o=s("9880"),d=s("23169"),a=s("7883");function l(e){var r=Object.assign({h1:"h1",a:"a",div:"div",p:"p"},(0,d.useMDXComponents)(),e.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(r.h1,{id:"outputoverridebrowserslist",children:["output.overrideBrowserslist",(0,o.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#outputoverridebrowserslist",children:"#"})]}),"\n",(0,o.jsxs)(r.div,{className:"modern-directive tip",children:[(0,o.jsx)(r.div,{className:"modern-directive-title",children:"TIP"}),(0,o.jsx)(r.div,{className:"modern-directive-content",children:(0,o.jsxs)(r.p,{children:["This config is provided by Modern.js Builder, more detail can see ",(0,o.jsx)(r.a,{href:"https://modernjs.dev/builder/en/api/config-output.html#outputoverridebrowserslist",target:"_blank",rel:"noopener noreferrer",children:"output.overrideBrowserslist"}),".\n"]})})]}),"\n","\n",(0,o.jsx)(a.default,{})]})}(n=globalThis).__RSPRESS_PAGE_META||(n.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["en%2Fconfigure%2Fapp%2Foutput%2Foverride-browserslist.mdx"]={toc:[],title:"output.overrideBrowserslist",frontmatter:{sidebar_label:"overrideBrowserslist"}};var c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=Object.assign({},(0,d.useMDXComponents)(),e.components).wrapper;return r?(0,o.jsx)(r,(0,i._)((0,t._)({},e),{children:(0,o.jsx)(l,(0,t._)({},e))})):l(e)}}}]);