(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["86790"],{53510:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return l}});var i=r("9880"),t=r("23169");function s(e){let n=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",pre:"pre",code:"code",h3:"h3",ul:"ul",li:"li"},(0,t.useMDXComponents)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.h1,{id:"prerender",children:["PreRender",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#prerender",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"A Helmet-like HOC without content implements SPA routing-level caching, manner without additional configuration."}),"\n",(0,i.jsxs)(n.h2,{id:"usage",children:["Usage",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#usage",children:"#"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:"import { PreRender } from '@modern-js/runtime/ssr';\n\nexport default () => (\n  <>\n    <PreRender interval={5} />\n  </>\n);\n"})}),"\n",(0,i.jsxs)(n.h2,{id:"function-signature",children:["Function Signature",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#function-signature",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"PreRender"})," provides a set of configuration for controlling caching rules, expiration times, caching algorithms, and more."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:"type Props {\n  interval: number;\n  staleLimit: number;\n  level: number;\n  include: { header?: string[], query?: string[] };\n  matches: { header?: Record<string, any>, query?: Record<string, any> }\n}\n\nfunction PreRender(props: Props): React.Component\n"})}),"\n",(0,i.jsxs)(n.h3,{id:"input",children:["Input",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#input",children:"#"})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"interval"}),": set the time the cache keep fresh, seconds. During this time, the cache will be used directly and not invoke asynchronous rendering."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"staleLimit"}),": sets the time when the cache is completely expired, seconds.During this time, The cache can be returned and asynchronous rendering will be invoke, otherwise must wait for the re-rendered result."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"level"}),": sets the calculation rule level for the cache identity, usually used with ",(0,i.jsx)(n.code,{children:"includes"})," and ",(0,i.jsx)(n.code,{children:"matches"}),". The default value is ",(0,i.jsx)(n.code,{children:"0"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"0: pathname\n1: pathname + querystring\n2: pathname + headers\n3: pathname + querystring + headers\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"includes"}),": sets the content that needs to be included in the cache identifier, used when the ",(0,i.jsx)(n.code,{children:"level"})," is not ",(0,i.jsx)(n.code,{children:"0"}),". The default value is ",(0,i.jsx)(n.code,{children:"null"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"matches"}),": sets the rewriting rule for the value of query or header in cache identity, usually used in cache category, supports regular expressions. The default value is ",(0,i.jsx)(n.code,{children:"null"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.h2,{id:"example",children:["Example",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#example",children:"#"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:"import { PreRender } from '@modern-js/runtime/ssr';\n\nexport default function App() {\n  return (\n    <>\n      <PreRender interval={10} />\n      <div>Hello Modern</div>\n    </>\n  );\n}\n"})}),"\n",(0,i.jsx)(n.p,{children:"The following example shows how to add the parameters in the query and header into the cache identifier calculation:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:"/* calculate cache identifier using channel in query and language in header */\n<PreRender\n  interval={10}\n  level={2}\n  includes={{\n    query: ['channel'],\n    header: ['language'],\n  }}\n/>\n"})}),"\n",(0,i.jsx)(n.p,{children:"The following example shows how not to let the test channel affect the online cache:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:'/* rewrite the channel value starting with test_ in the query as "testChannel", otherwise rewrite it as "otherChannel" */\n<PreRender interval={10} level={2} includes={{\n  query: ["channel"],\n  header: ["language"]\n}} matches={{\n  query: {\n    channel: {\n      "testChannel", "^test_",\n      "otherChannel", ".*"\n    }\n  }\n}} />\n'})})]})}function a(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,t.useMDXComponents)(),e.components);return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(s,{...e})}):s(e)}var l=a;a.__RSPRESS_PAGE_META={},a.__RSPRESS_PAGE_META["en%2Fapis%2Fapp%2Fruntime%2Fssr%2Fpre-render.mdx"]={toc:[{text:"Usage",id:"usage",depth:2},{text:"Function Signature",id:"function-signature",depth:2},{text:"Input",id:"input",depth:3},{text:"Example",id:"example",depth:2}],title:"PreRender",frontmatter:{title:"PreRender"}}}}]);