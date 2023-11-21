(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["63867"],{36670:function(e,n,o){"use strict";o.r(n),o.d(n,{default:function(){return a}});var r=o("9880"),s=o("23169");function c(e){let n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",h4:"h4",a:"a",pre:"pre"},(0,s.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Type:"})," ",(0,r.jsx)(n.code,{children:"boolean | ConsoleType[]"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Default:"})," ",(0,r.jsx)(n.code,{children:"false"})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Whether to remove ",(0,r.jsx)(n.code,{children:"console.xx"})," in production build."]}),"\n",(0,r.jsxs)(n.h4,{id:"remove-all-consoles",children:["Remove all consoles",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#remove-all-consoles",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["When ",(0,r.jsx)(n.code,{children:"removeConsole"})," is set to ",(0,r.jsx)(n.code,{children:"true"}),", all types of ",(0,r.jsx)(n.code,{children:"console.xx"})," are removed:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"export default {\n  performance: {\n    removeConsole: true,\n  },\n};\n"})}),"\n",(0,r.jsxs)(n.h4,{id:"remove-specific-console",children:["Remove specific console",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#remove-specific-console",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["You can also specify to remove only certain types of ",(0,r.jsx)(n.code,{children:"console.xx"}),", such as ",(0,r.jsx)(n.code,{children:"console.log"})," and ",(0,r.jsx)(n.code,{children:"console.warn"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"export default {\n  performance: {\n    removeConsole: ['log', 'warn'],\n  },\n};\n"})}),"\n",(0,r.jsx)(n.p,{children:"The following types of console are currently supported:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"type ConsoleType = 'log' | 'info' | 'warn' | 'error' | 'table' | 'group';\n"})})]})}function l(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,s.useMDXComponents)(),e.components);return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}var a=l;l.__RSPRESS_PAGE_META={},l.__RSPRESS_PAGE_META["..%2F..%2Fbuilder-doc%2Fdocs%2Fen%2Fconfig%2Fperformance%2FremoveConsole.md"]={toc:[{text:"Remove all consoles",id:"remove-all-consoles",depth:4},{text:"Remove specific console",id:"remove-specific-console",depth:4}],title:"",frontmatter:{}}},70982:function(e,n,o){"use strict";o.r(n),o.d(n,{default:function(){return i}});var r=o("9880"),s=o("23169"),c=o("36670");function l(e){let n=Object.assign({h1:"h1",a:"a"},(0,s.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"performanceremoveconsole",children:["performance.removeConsole",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#performanceremoveconsole",children:"#"})]}),"\n","\n",(0,r.jsx)(c.default,{})]})}function a(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,s.useMDXComponents)(),e.components);return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}var i=a;a.__RSPRESS_PAGE_META={},a.__RSPRESS_PAGE_META["en%2Fconfigure%2Fapp%2Fperformance%2Fremove-console.mdx"]={toc:[],title:"performance.removeConsole",frontmatter:{sidebar_label:"removeConsole"}}}}]);