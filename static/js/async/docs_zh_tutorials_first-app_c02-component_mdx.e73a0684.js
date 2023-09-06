(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_tutorials_first-app_c02-component_mdx"],{34161:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return l}});var s,i=r("15169"),t=r("43932"),d=r("9880"),a=r("23169");function c(e){var n=Object.assign({h1:"h1",a:"a",p:"p",code:"code",pre:"pre",img:"img",div:"div"},(0,a.useMDXComponents)(),e.components);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.h1,{id:"编写-ui-组件",children:["编写 UI 组件",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#编写-ui-组件",children:"#"})]}),"\n",(0,d.jsx)(n.p,{children:"上一章节中，我们学习了如何初始化项目，并使用配置修改 Modern.js 的默认行为。"}),"\n",(0,d.jsx)(n.p,{children:"这一章节中，我们继续沿用上一章节的项目代码，继续完善联系人列表。"}),"\n",(0,d.jsxs)(n.p,{children:["为了做更好的 UI 展示和交互，我们引入组件库 ",(0,d.jsx)(n.a,{href:"https://ant.design/index-cn",target:"_blank",rel:"noopener noreferrer",children:"Antd"})," 来开发，使用 ",(0,d.jsx)(n.code,{children:"<List>"})," 组件来代替原始的列表。先添加依赖："]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:"pnpm add antd\n"})}),"\n",(0,d.jsxs)(n.p,{children:["修改 ",(0,d.jsx)(n.code,{children:"src/routes/page.tsx"}),"，在顶部导入组件："]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",children:"import { List } from 'antd';\n"})}),"\n",(0,d.jsxs)(n.p,{children:["修改 ",(0,d.jsx)(n.code,{children:"<App>"})," 组件的实现："]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-tsx",children:'function App() {\n  return (\n    <div>\n      <List\n        dataSource={mockData}\n        renderItem={({ name, email, avatar }) => (\n          <List.Item key={name}>\n            <List.Item.Meta\n              avatar={<img alt="avatar" src={avatar} width={60} height={60} />}\n              title={name}\n              description={email}\n            />\n          </List.Item>\n        )}\n      />\n    </div>\n  );\n}\n'})}),"\n",(0,d.jsxs)(n.p,{children:["执行 ",(0,d.jsx)(n.code,{children:"pnpm run dev"}),"，查看运行结果："]}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/nuvjhpqnuvr/modern-website/tutorials/c02-antd-result.png",alt:"result"})}),"\n",(0,d.jsx)(n.p,{children:"可以看到 Ant Design 导出的组件，已经具备了完整的样式。"}),"\n",(0,d.jsxs)(n.div,{className:"modern-directive info",children:[(0,d.jsx)(n.div,{className:"modern-directive-title",children:"INFO"}),(0,d.jsxs)(n.div,{className:"modern-directive-content",children:[(0,d.jsxs)(n.p,{children:["Modern.js 会",(0,d.jsx)(n.a,{href:"https://github.com/ant-design/babel-plugin-import",target:"_blank",rel:"noopener noreferrer",children:"自动按需导入 Ant Design 组件需要的 CSS"}),"。"]}),"\n"]})]}),"\n",(0,d.jsxs)(n.div,{className:"modern-directive note",children:[(0,d.jsx)(n.div,{className:"modern-directive-title",children:"NOTE"}),(0,d.jsxs)(n.div,{className:"modern-directive-content",children:[(0,d.jsxs)(n.p,{children:["我们也可以使用其他组件库来实现同样的功能，例如 ",(0,d.jsx)(n.a,{href:"https://arco.design/",target:"_blank",rel:"noopener noreferrer",children:"Arco Design"}),"。"]}),"\n"]})]})]})}(s=globalThis).__RSPRESS_PAGE_META||(s.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["zh%2Ftutorials%2Ffirst-app%2Fc02-component.mdx"]={toc:[],title:"编写 UI 组件",frontmatter:{title:"编写 UI 组件"}};var l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,a.useMDXComponents)(),e.components).wrapper;return n?(0,d.jsx)(n,(0,t._)((0,i._)({},e),{children:(0,d.jsx)(c,(0,i._)({},e))})):c(e)}}}]);