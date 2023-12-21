/*! For license information please see 83326.8a2ff6e9.js.LICENSE.txt */
(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["83326"],{53436:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return d}});var s=t("9880"),r=t("23169"),i=t("18553");function o(e){let n=Object.assign({h1:"h1",a:"a",p:"p",code:"code",pre:"pre",img:"img",div:"div"},(0,r.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h1,{id:"add-ui-components",children:["Add UI Components",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#add-ui-components",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"In the previous chapter, we learned how to initialize a project and use configuration to modify the default behavior of Modern.js."}),"\n",(0,s.jsx)(n.p,{children:"In this chapter, we continue to use the project code of the previous chapter and continue to improve the point of contact list."}),"\n",(0,s.jsxs)(n.p,{children:["In order to do better UI display and interaction, we introduce the component library ",(0,s.jsx)(n.a,{href:"https://ant.design/index-cn",target:"_blank",rel:"noopener noreferrer",children:"Antd"})," to develop, and use the ",(0,s.jsx)(n.code,{children:"<List>"})," component instead of the primitive list. Add dependency first:"]}),"\n","\n",(0,s.jsx)(i.PackageManagerTabs,{command:"add antd"}),"\n",(0,s.jsxs)(n.p,{children:["Modify ",(0,s.jsx)(n.code,{children:"src/routes/page.tsx"})," to import components at the top:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"import { List } from 'antd';\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Modify the implementation of the ",(0,s.jsx)(n.code,{children:"<App>"})," component:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:'function App() {\n  return (\n    <div>\n      <List\n        dataSource={mockData}\n        renderItem={({ name, email, avatar }) => (\n          <List.Item key={name}>\n            <List.Item.Meta\n              avatar={<img alt="avatar" src={avatar} width={60} height={60} />}\n              title={name}\n              description={email}\n            />\n          </List.Item>\n        )}\n      />\n    </div>\n  );\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Execute ",(0,s.jsx)(n.code,{children:"pnpm run dev"})," to see the running results:"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/nuvjhpqnuvr/modern-website/tutorials/c02-antd-result.png",alt:"result"})}),"\n",(0,s.jsx)(n.p,{children:"You can see that the components exported by Ant Design already have complete styles."}),"\n",(0,s.jsxs)(n.div,{className:"rspress-directive info",children:[(0,s.jsx)(n.div,{className:"rspress-directive-title",children:"note"}),(0,s.jsxs)(n.div,{className:"rspress-directive-content",children:[(0,s.jsxs)(n.p,{children:["Modern.js ",(0,s.jsx)(n.a,{href:"https://github.com/ant-design/babel-plugin-import",target:"_blank",rel:"noopener noreferrer",children:"Automatically import CSS required by Ant Design component on demand"}),"."]}),"\n"]})]}),"\n",(0,s.jsxs)(n.div,{className:"rspress-directive note",children:[(0,s.jsx)(n.div,{className:"rspress-directive-title",children:"NOTE"}),(0,s.jsxs)(n.div,{className:"rspress-directive-content",children:[(0,s.jsxs)(n.p,{children:["We can also use other component libraries to implement the same functionality, such as ",(0,s.jsx)(n.a,{href:"https://arco.design/",target:"_blank",rel:"noopener noreferrer",children:"Arco Design"}),"."]}),"\n"]})]})]})}function a(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,r.useMDXComponents)(),e.components);return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}var d=a;a.__RSPRESS_PAGE_META={},a.__RSPRESS_PAGE_META["en%2Ftutorials%2Ffirst-app%2Fc02-component.mdx"]={toc:[],title:"Add UI Components",frontmatter:{title:"Add UI Components"}}}}]);