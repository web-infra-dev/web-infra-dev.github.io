(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["65464"],{39815:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return a},frontmatter:function(){return h}});var s=t("15169"),i=t("43932"),r=t("9880"),o=t("23169"),c=t("92432");function d(e){var n=Object.assign({h1:"h1",a:"a",p:"p",code:"code",pre:"pre",strong:"strong",h3:"h3",ul:"ul",li:"li",div:"div"},(0,o.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"static-site-generation",children:["Static Site Generation",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#static-site-generation",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"SSG (Static Site Generation) is a solution based on data and templates that renders complete static web pages during the build process."}),"\n",(0,r.jsxs)(n.p,{children:["First need to execute ",(0,r.jsx)(n.code,{children:"pnpm run new"})," to enable the SSG feature:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"? Please select the operation you want: Enable features\n? Please select the feature name: Enable SSG\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Register the SSG plugin in ",(0,r.jsx)(n.code,{children:"modern.config.ts"})," after executing the command:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import { ssgPlugin } from '@modern-js/plugin-ssg';\n\nexport default defineConfig({\n  output: {\n    ssg: true,\n  },\n  plugins: [..., ssgPlugin()],\n});\n"})}),"\n",(0,r.jsxs)(n.p,{children:["The usage of SSG differs between the ",(0,r.jsx)(n.strong,{children:"Conventional Routing"})," and ",(0,r.jsx)(n.strong,{children:"Self-controlled Routing"}),"."]}),"\n",(0,r.jsxs)(n.h3,{id:"using-with-conventional-routing",children:["Using with Conventional Routing",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#using-with-conventional-routing",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"In the Conventional Routing of Modern.js, the framework generates routes based on the file structure under the entry point, so it can collect complete routing information."}),"\n",(0,r.jsx)(n.p,{children:"For example, here is a project directory structure that uses conventional routing:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:".\n\u251C\u2500\u2500 src\n\u2502   \u2514\u2500\u2500 routes\n\u2502       \u251C\u2500\u2500 layout.tsx\n\u2502       \u251C\u2500\u2500 page.tsx\n\u2502       \u2514\u2500\u2500 user\n\u2502           \u251C\u2500\u2500 layout.tsx\n\u2502           \u251C\u2500\u2500 page.tsx\n\u2502           \u2514\u2500\u2500 profile\n\u2502               \u2514\u2500\u2500 page.tsx\n"})}),"\n",(0,r.jsx)(n.p,{children:"The above file directory will generate the following three routes:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"/"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"/user"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"/user/profile"})}),"\n"]}),"\n",(0,r.jsxs)(n.div,{className:"rspress-directive note",children:[(0,r.jsx)(n.div,{className:"rspress-directive-title",children:"NOTE"}),(0,r.jsxs)(n.div,{className:"rspress-directive-content",children:[(0,r.jsxs)(n.p,{children:["If you are not familiar with the rules of Conventional Routing, you can first check ",(0,r.jsx)(n.a,{href:"/guides/basic-features/routes",children:"Routing"}),"."]}),"\n"]})]}),"\n",(0,r.jsxs)(n.p,{children:["Add component code in ",(0,r.jsx)(n.code,{children:"src/routes/page.tsx"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-jsx",meta:'title="src/routes/page.tsx"',children:"export default () => {\n  return <div>Index Page</div>;\n};\n"})}),"\n",(0,r.jsxs)(n.p,{children:["SSG also renders pages in a Node.js environment, so we can ",(0,r.jsx)(n.strong,{children:"enable SSR during development"})," to expose code issues and validate SSG rendering effects in advance:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"export default defineConfig({\n  server: {\n    ssr: process.env.NODE_ENV === 'development',\n  }\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Execute the ",(0,r.jsx)(n.code,{children:"pnpm run dev"})," command in the project to view the ",(0,r.jsx)(n.code,{children:"dist/"})," directory, and only generate an HTML file ",(0,r.jsx)(n.code,{children:"main/index.html"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Execute the ",(0,r.jsx)(n.code,{children:"pnpm run build"})," command in the root path of the project. After the construction is completed, view the ",(0,r.jsx)(n.code,{children:"dist/"})," directory, and generate ",(0,r.jsx)(n.code,{children:"main/index.html"}),", ",(0,r.jsx)(n.code,{children:"main/user/index.html"})," and ",(0,r.jsx)(n.code,{children:"main/user/profile/index.html"})," three HTML files, the content corresponds to the above three routes."]}),"\n",(0,r.jsxs)(n.p,{children:["Each route in the ",(0,r.jsx)(n.strong,{children:"Conventional Routing"})," will generate a separate HTML file. By viewing ",(0,r.jsx)(n.code,{children:"main/index.html"}),", you can find the text content that includes the ",(0,r.jsx)(n.code,{children:"Index Page"}),", which is exactly the effect of SSG."]}),"\n",(0,r.jsxs)(n.p,{children:["After executing ",(0,r.jsx)(n.code,{children:"pnpm run serve"})," to start the project, visit the page in the Network, view the document returned by the request. The document contains the complete page content rendered by the component."]}),"\n",(0,r.jsxs)(n.h3,{id:"using-with-self-controlled-routing",children:["Using with Self-controlled Routing",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#using-with-self-controlled-routing",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Self-controlled routing"})," is a routing through component code, which requires the application to run to obtain accurate routing information. Therefore, the SSG function cannot be used out of the box. At this time, users needs to inform the Modern.js framework in advance which routes need to enable SSG."]}),"\n",(0,r.jsxs)(n.p,{children:["For example, there is the following code which contains multiple routes. When setting ",(0,r.jsx)(n.code,{children:"output.ssg"})," to ",(0,r.jsx)(n.code,{children:"true"}),", only the entry route '/' will be rendered by default:"]}),"\n","\n",(0,r.jsx)(c.default,{}),"\n",(0,r.jsxs)(n.p,{children:["We can configure ",(0,r.jsx)(n.code,{children:"output.ssg"})," to inform Modern.js to enable SSG for specific routes, such as ",(0,r.jsx)(n.code,{children:"/about"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"export default defineConfig({\n  output: {\n    ssg: {\n      routes: ['/', '/about'],\n    },\n  },\n});\n"})}),"\n",(0,r.jsxs)(n.p,{children:["After executing ",(0,r.jsx)(n.code,{children:"pnpm run build"})," and ",(0,r.jsx)(n.code,{children:"pnpm run serve"}),", you can access ",(0,r.jsx)(n.code,{children:"http://localhost:8080/about"})," to see the rendered page in preview."]}),"\n",(0,r.jsxs)(n.p,{children:["You can check the bundle file that a new ",(0,r.jsx)(n.code,{children:"main/about/index.html"})," file has been added to the ",(0,r.jsx)(n.code,{children:"dist/"})," directory."]}),"\n",(0,r.jsxs)(n.div,{className:"rspress-directive info",children:[(0,r.jsx)(n.div,{className:"rspress-directive-title",children:"INFO"}),(0,r.jsxs)(n.div,{className:"rspress-directive-content",children:[(0,r.jsxs)(n.p,{children:["Above only introduces the case of single entry, for more related content please refer to the ",(0,r.jsx)(n.a,{href:"/configure/app/output/ssg",children:"SSG API"}),"."]}),"\n"]})]})]})}function l(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,o.useMDXComponents)(),e.components).wrapper;return n?(0,r.jsx)(n,(0,i._)((0,s._)({},e),{children:(0,r.jsx)(d,(0,s._)({},e))})):d(e)}var a=l;l.__RSPRESS_PAGE_META={},l.__RSPRESS_PAGE_META["en%2Fguides%2Fadvanced-features%2Fssg.mdx"]={toc:[{text:"Using with Conventional Routing",id:"using-with-conventional-routing",depth:3},{text:"Using with Self-controlled Routing",id:"using-with-self-controlled-routing",depth:3}],title:"Static Site Generation"};var h={sidebar_position:5}}}]);