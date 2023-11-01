(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["3756"],{3079:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return l},frontmatter:function(){return a}});var r=t("9880"),s=t("23169"),i=t("81982");function o(e){let n=Object.assign({h1:"h1",a:"a",ul:"ul",li:"li",strong:"strong",code:"code",p:"p",div:"div",h2:"h2",h3:"h3",pre:"pre"},(0,s.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"outputssg",children:["output.ssg",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#outputssg",children:"#"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Type:"})," ",(0,r.jsx)(n.code,{children:"boolean"})," | ",(0,r.jsx)(n.code,{children:"object"})," | ",(0,r.jsx)(n.code,{children:"function"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Default:"})," ",(0,r.jsx)(n.code,{children:"undefined"})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Enable the SSG for ",(0,r.jsx)(n.strong,{children:"Self-controlled Routing"})," or ",(0,r.jsx)(n.strong,{children:"Conventional Routing"}),"."]}),"\n",(0,r.jsxs)(n.div,{className:"rspress-directive info",children:[(0,r.jsx)(n.div,{className:"rspress-directive-title",children:"INFO"}),(0,r.jsxs)(n.div,{className:"rspress-directive-content",children:[(0,r.jsxs)(n.p,{children:["For more routes detail, see ",(0,r.jsx)(n.a,{href:"/guides/basic-features/routes",children:"Routing"}),"."]}),"\n"]})]}),"\n",(0,r.jsxs)(n.h2,{id:"example",children:["Example",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#example",children:"#"})]}),"\n",(0,r.jsxs)(n.h3,{id:"single-entry",children:["Single Entry",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#single-entry",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["When the configuration is set to ",(0,r.jsx)(n.code,{children:"true"}),", the SSG of all entries will be enabled by default."]}),"\n",(0,r.jsxs)(n.p,{children:["For ",(0,r.jsx)(n.strong,{children:"self-controlled routing"}),", the root route of the entry will be rendered. For ",(0,r.jsx)(n.strong,{children:"convention routing"}),", every route in the entry will be rendered."]}),"\n",(0,r.jsxs)(n.p,{children:["For example, the ",(0,r.jsx)(n.code,{children:"src/"})," directory has the following file structure that satisfies ",(0,r.jsx)(n.strong,{children:"conventional routing"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:".\n\u251C\u2500\u2500 src\n\u2502   \u2514\u2500\u2500 routes\n\u2502       \u251C\u2500\u2500 layout.tsx\n\u2502       \u251C\u2500\u2500 page.tsx\n\u2502       \u2514\u2500\u2500 user\n\u2502           \u251C\u2500\u2500 layout.tsx\n\u2502           \u251C\u2500\u2500 page.tsx\n\u2502           \u2514\u2500\u2500 profile\n\u2502               \u2514\u2500\u2500 page.tsx\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Make the following config in ",(0,r.jsx)(n.code,{children:"modern.config.[tj]s"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"export default defineConfig({\n  output: {\n    ssg: true,\n  },\n});\n"})}),"\n",(0,r.jsxs)(n.p,{children:["After executing ",(0,r.jsx)(n.code,{children:"pnpm build"})," to build the application. The ",(0,r.jsx)(n.code,{children:"dist/"})," directory will generate three HTML for each of the three routes (only one HTML if SSG not enabled), and all HTML has been rendered."]}),"\n",(0,r.jsxs)(n.p,{children:["For example the following ",(0,r.jsx)(n.strong,{children:"self-controlled routing"}),":"]}),"\n","\n",(0,r.jsx)(i.default,{}),"\n",(0,r.jsxs)(n.p,{children:["Also using the above configuration, after executing ",(0,r.jsx)(n.code,{children:"pnpm run build"}),", only the entry route ",(0,r.jsx)(n.code,{children:"/"})," will generate the rendered HTML."]}),"\n",(0,r.jsxs)(n.h3,{id:"multi-entries",children:["Multi Entries",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#multi-entries",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"output.ssg"})," can also be configured according to the entries, and the rules that the configuration takes effect are also determined by the entries routing method."]}),"\n",(0,r.jsx)(n.p,{children:"For example the following directory structure:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:".\n\u251C\u2500\u2500 src\n\u2502   \u251C\u2500\u2500 entryA\n\u2502   \u2502   \u2514\u2500\u2500 routes\n\u2502   \u2502       \u251C\u2500\u2500 layout.tsx\n\u2502   \u2502       \u251C\u2500\u2500 page.tsx\n\u2502   \u2502       \u2514\u2500\u2500 user\n\u2502   \u2502           \u251C\u2500\u2500 layout.tsx\n\u2502   \u2502           \u251C\u2500\u2500 page.tsx\n\u2502   \u2502           \u2514\u2500\u2500 profile\n\u2502   \u2502               \u2514\u2500\u2500 page.tsx\n\u2502   \u2514\u2500\u2500 entryB\n\u2502       \u2514\u2500\u2500 App.tsx\n"})}),"\n",(0,r.jsxs)(n.p,{children:["By default, all entryA entrances are rendered at build time after setting ",(0,r.jsx)(n.code,{children:"output.ssg"})," to ",(0,r.jsx)(n.code,{children:"true"}),". You can configure ",(0,r.jsx)(n.code,{children:"false"})," to cancel the default behavior of the specified entries. For example, to cancel the rendering of the ",(0,r.jsx)(n.code,{children:"entryA"})," at build time:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"export default defineConfig({\n  output: {\n    ssg: {\n      entryA: true,\n      entryB: false,\n    },\n  },\n});\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"configure-route",children:["Configure Route",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#configure-route",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["As mentioned above, ",(0,r.jsx)(n.strong,{children:"Self-Controlled Routing"})," only enables SSG configuration for entries route by default."]}),"\n",(0,r.jsxs)(n.p,{children:["Set specific routes in ",(0,r.jsx)(n.code,{children:"output.ssg"})," can tell Modern.js to enable the SSG of these client side routes. For example, the content of the above ",(0,r.jsx)(n.code,{children:"src/App.tsx"})," file is:"]}),"\n",(0,r.jsx)(i.default,{}),"\n",(0,r.jsxs)(n.p,{children:["When set like this in ",(0,r.jsx)(n.code,{children:"modern.config.[jt]s"}),", the ",(0,r.jsx)(n.code,{children:"/about"})," route will also enable SSG:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"export default defineConfig({\n  output: {\n    ssg: {\n      routes: ['/', '/about'],\n    },\n  },\n});\n"})}),"\n",(0,r.jsx)(n.p,{children:"Modern.js will automatically concat the complete URL according to the entry and hand it over to the SSG plugin to complete the rendering."}),"\n",(0,r.jsx)(n.p,{children:"Request headers can also be configured for specific entries or routes, for example:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"export default defineConfig({\n  output: {\n    ssg: {\n      headers: {},\n      routes: [\n        '/',\n        {\n          url: '/about',\n          headers: {},\n        },\n      ],\n    },\n  },\n});\n"})}),"\n",(0,r.jsxs)(n.div,{className:"rspress-directive info",children:[(0,r.jsx)(n.div,{className:"rspress-directive-title",children:"INFO"}),(0,r.jsxs)(n.div,{className:"rspress-directive-content",children:[(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"headers"})," set in the route override the ",(0,r.jsx)(n.code,{children:"headers"})," set in the entry."]}),"\n"]})]}),"\n",(0,r.jsxs)(n.h3,{id:"prevent-default",children:["Prevent Default",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#prevent-default",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["By default, ",(0,r.jsx)(n.strong,{children:"Conventional Routing"})," all turn on SSG. Modern.js provides another field to prevent the default SSG behavior."]}),"\n",(0,r.jsxs)(n.p,{children:["For example, the following directory structure , ",(0,r.jsx)(n.code,{children:"/"}),"\u3001",(0,r.jsx)(n.code,{children:"/user"})," and ",(0,r.jsx)(n.code,{children:"/user/profle"})," all have SSG enabled:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:".\n\u251C\u2500\u2500 src\n\u2502   \u2514\u2500\u2500 routes\n\u2502       \u251C\u2500\u2500 layout.tsx\n\u2502       \u251C\u2500\u2500 page.tsx\n\u2502       \u2514\u2500\u2500 user\n\u2502           \u251C\u2500\u2500 layout.tsx\n\u2502           \u251C\u2500\u2500 page.tsx\n\u2502           \u2514\u2500\u2500 profile\n\u2502               \u2514\u2500\u2500 page.tsx\n"})}),"\n",(0,r.jsx)(n.p,{children:"You can set this to disable the default behavior of a client-side route:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"export default defineConfig({\n  output: {\n    ssg: {\n      preventDefault: ['/user'],\n    },\n  },\n});\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"dynamic-params",children:["Dynamic Params",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#dynamic-params",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["Some routes may be dynamic, such as the ",(0,r.jsx)(n.code,{children:"/user/:id"})," in a self-controlled route or the route generated by the ",(0,r.jsx)(n.code,{children:"user/[id]/page.tsx"})," file in a conventional route."]}),"\n",(0,r.jsxs)(n.p,{children:["configure specific parameters in ",(0,r.jsx)(n.code,{children:"output.ssg"})," to render the route of the specified parameters, for example:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"export default defineConfig({\n  output: {\n    ssg: {\n      routes: [\n        {\n          url: '/user/:id',\n          params: [\n            {\n              id: 'modernjs',\n            },\n          ],\n        },\n      ],\n    },\n  },\n});\n"})}),"\n",(0,r.jsx)(n.p,{children:"The features of dynamic routing and SSG is useful when generating static pages in real time based on CMS system."})]})}function d(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,s.useMDXComponents)(),e.components);return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}var l=d;d.__RSPRESS_PAGE_META={},d.__RSPRESS_PAGE_META["en%2Fconfigure%2Fapp%2Foutput%2Fssg.mdx"]={toc:[{text:"Example",id:"example",depth:2},{text:"Single Entry",id:"single-entry",depth:3},{text:"Multi Entries",id:"multi-entries",depth:3},{text:"Configure Route",id:"configure-route",depth:3},{text:"Prevent Default",id:"prevent-default",depth:3},{text:"Dynamic Params",id:"dynamic-params",depth:3}],title:"output.ssg"};let a={sidebar_label:"ssg"}},81982:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return d}});var r=t("9880"),s=t("23169");function i(e){let n=Object.assign({pre:"pre",code:"code"},(0,s.useMDXComponents)(),e.components);return(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",meta:'title="src/App.tsx"',children:"import { BrowserRouter, Route, Routes } from '@modern-js/runtime/router';\nimport { StaticRouter } from '@modern-js/runtime/router/server';\nimport React from 'react';\nimport { useRuntimeContext } from '@modern-js/runtime';\n\nconst Router = typeof window === 'undefined' ? StaticRouter : BrowserRouter;\n\nexport default () => {\n  const { context } = useRuntimeContext();\n  const pathname = context?.request?.pathname;\n  return (\n    <Router location={pathname}>\n      <Routes>\n        <Route index element={<div>index</div>} />\n        <Route path=\"about\" element={<div>about</div>} />\n      </Routes>\n    </Router>\n  );\n};\n"})})}function o(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,s.useMDXComponents)(),e.components);return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}var d=o;o.__RSPRESS_PAGE_META={},o.__RSPRESS_PAGE_META["zh%2Fcomponents%2Fself-route-example.mdx"]={toc:[],title:""}}}]);