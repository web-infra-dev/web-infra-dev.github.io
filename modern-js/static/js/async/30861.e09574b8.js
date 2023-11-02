(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["30861"],{1330:function(e,n,s){"use strict";s.r(n),s.d(n,{default:function(){return c}});var i=s("9880"),r=s("23169");function t(e){let n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",pre:"pre",p:"p",a:"a",h3:"h3"},(0,r.useMDXComponents)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Type:"})," ",(0,i.jsx)(n.code,{children:"Object | Function | undefined"})]}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"Default:"})}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"const defaultOptions = {\n  minimizerOptions: {\n    preset: [\n      'default',\n      {\n        mergeLonghand: false,\n      },\n    ],\n  },\n};\n"})}),"\n",(0,i.jsxs)(n.p,{children:["When building for production, Builder will minimize the CSS code through ",(0,i.jsx)(n.a,{href:"https://github.com/webpack-contrib/css-minimizer-webpack-plugin",target:"_blank",rel:"noopener noreferrer",children:"css-minimizer-webpack-plugin"}),". The config of ",(0,i.jsx)(n.a,{href:"https://github.com/webpack-contrib/css-minimizer-webpack-plugin",target:"_blank",rel:"noopener noreferrer",children:"css-minimizer-webpack-plugin"})," can be modified via ",(0,i.jsx)(n.code,{children:"tools.minifyCss"}),"."]}),"\n",(0,i.jsxs)(n.h3,{id:"object-type",children:["Object Type",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#object-type",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["When ",(0,i.jsx)(n.code,{children:"tools.minifyCss"})," is ",(0,i.jsx)(n.code,{children:"Object"})," type, it will be merged with the default config via ",(0,i.jsx)(n.code,{children:"Object.assign"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["For example, modify the ",(0,i.jsx)(n.code,{children:"preset"})," config of ",(0,i.jsx)(n.a,{href:"https://cssnano.co/",target:"_blank",rel:"noopener noreferrer",children:"cssnano"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    minifyCss: {\n      minimizerOptions: {\n        preset: require.resolve('cssnano-preset-simple'),\n      },\n    },\n  },\n};\n"})}),"\n",(0,i.jsxs)(n.h3,{id:"function-type",children:["Function Type",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#function-type",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["When ",(0,i.jsx)(n.code,{children:"tools.minifyCss"})," is ",(0,i.jsx)(n.code,{children:"Function"})," type, the default config is passed in as the first parameter, the config object can be modified directly, or a value can be returned as the final result."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"export default {\n   tools: {\n    minifyCss: options => {\n      options.minimizerOptions = {\n        preset: require.resolve('cssnano-preset-simple'),\n      },\n    }\n  }\n};\n"})})]})}function o(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,r.useMDXComponents)(),e.components);return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(t,{...e})}):t(e)}var c=o;o.__RSPRESS_PAGE_META={},o.__RSPRESS_PAGE_META["..%2F..%2Fbuilder-doc%2Fdocs%2Fen%2Fconfig%2Ftools%2FminifyCss.md"]={toc:[{text:"Object Type",id:"object-type",depth:3},{text:"Function Type",id:"function-type",depth:3}],title:""}},72631:function(e,n,s){"use strict";s.r(n),s.d(n,{default:function(){return l},frontmatter:function(){return d}});var i=s("9880"),r=s("23169"),t=s("1330");function o(e){let n=Object.assign({h1:"h1",a:"a"},(0,r.useMDXComponents)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.h1,{id:"toolsminifycss",children:["tools.minifyCss",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#toolsminifycss",children:"#"})]}),"\n","\n",(0,i.jsx)(t.default,{})]})}function c(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,r.useMDXComponents)(),e.components);return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}var l=c;c.__RSPRESS_PAGE_META={},c.__RSPRESS_PAGE_META["en%2Fconfigure%2Fapp%2Ftools%2Fminify-css.mdx"]={toc:[],title:"tools.minifyCss"};let d={sidebar_label:"minifyCss"}}}]);