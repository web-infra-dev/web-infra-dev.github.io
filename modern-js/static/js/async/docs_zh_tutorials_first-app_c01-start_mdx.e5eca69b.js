(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_tutorials_first-app_c01-start_mdx"],{4689:function(e,n,s){"use strict";s.r(n),s.d(n,{default:function(){return p}});var r,a=s("15169"),t=s("43932"),d=s("9880"),i=s("23169"),c=s("60721"),l=s("46093"),h=s("61653");function o(e){var n=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",pre:"pre",code:"code",img:"img"},(0,i.useMDXComponents)(),e.components);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.h1,{id:"\u521B\u5EFA\u9879\u76EE",children:["\u521B\u5EFA\u9879\u76EE",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u521B\u5EFA\u9879\u76EE",children:"#"})]}),"\n",(0,d.jsx)(n.p,{children:"\u4ECE\u8FD9\u4E00\u7AE0\u8282\u5F00\u59CB\uFF0C\u6211\u4EEC\u5C06\u8FDB\u5165\u5B9E\u6218\u6559\u7A0B\u90E8\u5206\u3002\u5728\u5B9E\u6218\u6559\u7A0B\u4E2D\uFF0C\u6211\u4EEC\u5C06\u4F1A\u4ECE\u73AF\u5883\u51C6\u5907\u5F00\u59CB\uFF0C\u4ECE\u7B80\u5355\u5230\u590D\u6742\uFF0C\u4E00\u6B65\u4E00\u6B65\u642D\u5EFA\u4E00\u4E2A\u771F\u5B9E\u7684\u9879\u76EE\u3002"}),"\n",(0,d.jsxs)(n.h2,{id:"\u73AF\u5883\u51C6\u5907",children:["\u73AF\u5883\u51C6\u5907",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u73AF\u5883\u51C6\u5907",children:"#"})]}),"\n","\n",(0,d.jsx)(c.default,{}),"\n",(0,d.jsxs)(n.h2,{id:"\u521D\u59CB\u5316\u9879\u76EE",children:["\u521D\u59CB\u5316\u9879\u76EE",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u521D\u59CB\u5316\u9879\u76EE",children:"#"})]}),"\n",(0,d.jsx)(n.p,{children:"\u6211\u4EEC\u521B\u5EFA\u65B0\u7684\u76EE\u5F55\uFF0C\u901A\u8FC7\u547D\u4EE4\u884C\u5DE5\u5177\u521D\u59CB\u5316\u9879\u76EE\uFF1A"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:"mkdir myapp && cd myapp\nnpx @modern-js/create@latest\n"})}),"\n","\n",(0,d.jsx)(l.default,{}),"\n",(0,d.jsxs)(n.h2,{id:"\u8C03\u8BD5\u9879\u76EE",children:["\u8C03\u8BD5\u9879\u76EE",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u8C03\u8BD5\u9879\u76EE",children:"#"})]}),"\n","\n",(0,d.jsx)(h.default,{}),"\n",(0,d.jsxs)(n.h2,{id:"\u4FEE\u6539\u4EE3\u7801",children:["\u4FEE\u6539\u4EE3\u7801",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u4FEE\u6539\u4EE3\u7801",children:"#"})]}),"\n",(0,d.jsx)(n.p,{children:"\u6211\u4EEC\u5C06\u539F\u672C\u7684\u793A\u4F8B\u4EE3\u7801\u5220\u9664\uFF0C\u66FF\u6362\u6210\u4E00\u4E2A\u7B80\u5355\u7684\u8054\u7CFB\u4EBA\u5217\u8868\uFF1A"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-tsx",meta:'title="src/routes/page.tsx"',children:"const getAvatar = (users: Array<{ name: string; email: string }>) =>\n  users.map(user => ({\n    ...user,\n    avatar: `https://avatars.dicebear.com/v2/identicon/${user.name}.svg`,\n  }));\n\nconst mockData = getAvatar([\n  { name: 'Thomas', email: 'w.kccip@bllmfbgv.dm' },\n  { name: 'Chow', email: 'f.lfqljnlk@ywoefljhc.af' },\n  { name: 'Bradley', email: 'd.wfovsqyo@gpkcjwjgb.fr' },\n  { name: 'Davis', email: '\"t.kqkoj@utlkwnpwk.nu' },\n]);\n\nfunction App() {\n  return (\n    <ul>\n      {mockData.map(({ name, avatar, email }) => (\n        <li key={name}>\n          <img src={avatar} width={60} height={60} /> ---\n          <span>{name}</span> ---\n          <span>{email}</span>\n        </li>\n      ))}\n    </ul>\n  );\n}\n\nexport default App;\n"})}),"\n",(0,d.jsx)(n.p,{children:"\u5220\u9664\u591A\u4F59\u7684 css \u6587\u4EF6\uFF0C\u4FDD\u6301\u76EE\u5F55\u6CA1\u6709\u591A\u4F59\u7684\u6587\u4EF6\uFF1A"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:"rm src/routes/index.css\n"})}),"\n",(0,d.jsxs)(n.p,{children:["\u56E0\u4E3A\u6846\u67B6\u9ED8\u8BA4\u652F\u6301 ",(0,d.jsx)(n.a,{href:"https://webpack.js.org/concepts/hot-module-replacement/",target:"_blank",rel:"noopener noreferrer",children:"HMR"}),"\uFF0C\u53EF\u4EE5\u770B\u5230 ",(0,d.jsx)(n.code,{children:"http://localhost:8080/"})," \u91CC\u7684\u5185\u5BB9\u4F1A\u81EA\u52A8\u66F4\u65B0\u4E3A\uFF1A"]}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/zq-uylkvt/ljhwZthlaukjlkulzlp/screenshot-20221214-141909.png",alt:"result"})}),"\n",(0,d.jsx)(n.p,{children:"\u6B64\u523B\u7684\u9875\u9762\u8FD8\u6CA1\u6709\u6837\u5F0F\u3002\u4E0B\u4E00\u7AE0\u8282\u5C06\u5C55\u5F00\u8FD9\u90E8\u5206\u7684\u5185\u5BB9\u3002"}),"\n",(0,d.jsxs)(n.h2,{id:"\u5F00\u542F-ssr",children:["\u5F00\u542F SSR",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u5F00\u542F-ssr",children:"#"})]}),"\n",(0,d.jsxs)(n.p,{children:["\u63A5\u4E0B\u6765\uFF0C\u6211\u4EEC\u4FEE\u6539\u9879\u76EE\u4E2D\u7684 ",(0,d.jsx)(n.code,{children:"modern.config.ts"}),"\uFF0C\u5F00\u542F SSR \u80FD\u529B\uFF1A"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import { appTools, defineConfig } from '@modern-js/app-tools';\n\nexport default defineConfig({\n  runtime: {\n    router: true,\n    state: true,\n  },\n  server: {\n    ssr: true,\n  },\n  plugins: [appTools()],\n});\n"})}),"\n",(0,d.jsxs)(n.p,{children:["\u91CD\u65B0\u6267\u884C ",(0,d.jsx)(n.code,{children:"pnpm run dev"}),"\uFF0C\u53EF\u4EE5\u53D1\u73B0\u9879\u76EE\u5DF2\u7ECF\u5728\u670D\u52A1\u7AEF\u5B8C\u6210\u4E86\u9875\u9762\u6E32\u67D3\u3002"]})]})}(r=globalThis).__RSPRESS_PAGE_META||(r.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["zh%2Ftutorials%2Ffirst-app%2Fc01-start.mdx"]={toc:[{text:"\u73AF\u5883\u51C6\u5907",id:"\u73AF\u5883\u51C6\u5907",depth:2},{text:"\u521D\u59CB\u5316\u9879\u76EE",id:"\u521D\u59CB\u5316\u9879\u76EE",depth:2},{text:"\u8C03\u8BD5\u9879\u76EE",id:"\u8C03\u8BD5\u9879\u76EE",depth:2},{text:"\u4FEE\u6539\u4EE3\u7801",id:"\u4FEE\u6539\u4EE3\u7801",depth:2},{text:"\u5F00\u542F SSR",id:"\u5F00\u542F-ssr",depth:2}],title:"\u521B\u5EFA\u9879\u76EE",frontmatter:{title:"\u521B\u5EFA\u9879\u76EE"}};var p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,i.useMDXComponents)(),e.components).wrapper;return n?(0,d.jsx)(n,(0,t._)((0,a._)({},e),{children:(0,d.jsx)(o,(0,a._)({},e))})):o(e)}}}]);