(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["23946"],{58449:function(e,t,s){"use strict";e.exports={"feature-layout":"feature-layout-ea3480",featureLayout:"feature-layout-ea3480"}},6477:function(e,t,s){"use strict";e.exports={title:"title-cfbf64",title:"title-cfbf64",titleWrap:"titleWrap-_245ce",titleWrap:"titleWrap-_245ce"}},93817:function(e,t,s){"use strict";e.exports={card:"card-_1c4af",card:"card-_1c4af",desc:"desc-a85d41",desc:"desc-a85d41",icon:"icon-_02dc1",icon:"icon-_02dc1",title:"title-b44362",title:"title-b44362"}},16404:function(e,t,s){"use strict";e.exports={footer:"footer-_1419c",footer:"footer-_1419c",link:"link-fff29d",link:"link-fff29d",linkTitle:"linkTitle-c4002f",linkTitle:"linkTitle-c4002f",linkWrapper:"linkWrapper-_1b066",linkWrapper:"linkWrapper-_1b066",linksWrapper:"linksWrapper-_4f8ed",linksWrapper:"linksWrapper-_4f8ed",logo:"logo-_22a8c",logo:"logo-_22a8c",wrapper:"wrapper-b33135",wrapper:"wrapper-b33135"}},6343:function(e,t,s){"use strict";e.exports={buttons:"buttons-e3d388",buttons:"buttons-e3d388",cardContainer:"cardContainer-_79b2f",cardContainer:"cardContainer-_79b2f",flowContainer:"flowContainer-_225bb",flowContainer:"flowContainer-_225bb",flowLine:"flowLine-a3999c",flowLine:"flowLine-a3999c",flowLineMobile:"flowLineMobile-_4fe65",flowLineMobile:"flowLineMobile-_4fe65",header:"header-_720aa",header:"header-_720aa",heroBanner:"heroBanner-_85caa",heroBanner:"heroBanner-_85caa","homepage-main":"homepage-main-_77128",homepageMain:"homepage-main-_77128",leftButton:"leftButton-_7ef36",leftButton:"leftButton-_7ef36",logo:"logo-_9cf1f",logo:"logo-_9cf1f",rightButton:"rightButton-_91c6e",rightButton:"rightButton-_91c6e","section-title":"section-title-dc2851",sectionTitle:"section-title-dc2851",singleImg:"singleImg-_71172",singleImg:"singleImg-_71172",singleImgCard:"singleImgCard-_1456f",singleImgCard:"singleImgCard-_1456f",singleImgWrap:"singleImgWrap-_12f4b",singleImgWrap:"singleImgWrap-_12f4b",startArrow:"startArrow-c03ec9",startArrow:"startArrow-c03ec9",title:"title-_6c4ac",title:"title-_6c4ac",titleGradient:"titleGradient-_84d55",titleGradient:"titleGradient-_84d55"}},31751:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return d},frontmatter:function(){return u}});var n=s("15169"),r=s("43932"),i=s("9880"),a=s("23169"),o=s("78955");function l(e){var t=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",img:"img",code:"code",pre:"pre",div:"div",strong:"strong"},(0,a.useMDXComponents)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.h1,{id:"add-style",children:["Add Style",(0,i.jsx)(t.a,{className:"header-anchor","aria-hidden":"true",href:"#add-style",children:"#"})]}),"\n","\n",(0,i.jsx)(t.p,{children:"In the previous chapter, we learned how to use components from the third-party library."}),"\n",(0,i.jsx)(t.p,{children:"In this chapter, we will learn how to implement UI components."}),"\n",(0,i.jsxs)(t.h2,{id:"js-components-using-css",children:["JS components using CSS",(0,i.jsx)(t.a,{className:"header-anchor","aria-hidden":"true",href:"#js-components-using-css",children:"#"})]}),"\n",(0,i.jsx)(t.p,{children:"First of all, we want to control the display of contact avatars by ourselves, and implement this design draft:"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/nuvjhpqnuvr/modern-website/tutorials/c03-css-expect.jpg",alt:"design"})}),"\n",(0,i.jsxs)(t.p,{children:["Hypothesis has no ready-made components to implement, so you need to write some CSS yourself. Here we use ",(0,i.jsx)(t.a,{href:"https://styled-components.com/",target:"_blank",rel:"noopener noreferrer",children:"styled-components"})," to implement similar requirements. Modern.js out of the box supports styled-components, which requires neither dependency nor configuration."]}),"\n",(0,i.jsx)(t.p,{children:"Style-components avoids many problems of traditional CSS writing through modularization. For example, writing styles directly on the style attribute of elements, the visual details of UI will also be mixed with the details of UI structure and business logic. Or classname needs to avoid global space renaming, which requires the use of naming conventions."}),"\n",(0,i.jsxs)(t.p,{children:["Modify the code at the top in ",(0,i.jsx)(t.code,{children:"src/routes/page.tsx"}),":"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-js",children:"import styled from '@modern-js/runtime/styled';\n"})}),"\n",(0,i.jsx)(t.p,{children:"Add the following code:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-js",children:"const Avatar = styled.img`\n  width: 50px;\n  height: 50px;\n  border: 4px solid #0ef;\n  border-radius: 50%;\n`;\n"})}),"\n",(0,i.jsxs)(t.p,{children:["Modify the code of ",(0,i.jsx)(t.code,{children:"List.Item.Meta"}),":"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-tsx",children:"<List.Item.Meta\n  avatar={<Avatar src={avatar} />}\n  title={name}\n  description={email}\n/>\n"})}),"\n",(0,i.jsxs)(t.p,{children:["Execute ",(0,i.jsx)(t.code,{children:"pnpm run dev"})," to see the expected running result:"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/nuvjhpqnuvr/modern-website/tutorials/c03-css-result1.png",alt:"result"})}),"\n",(0,i.jsx)(t.p,{children:"Next we do a little refactoring. To enhance legibility and make the code easier to maintain, we can split the Avatar component. We execute the following command at the end point to create a new file:"}),"\n",(0,i.jsxs)(o.Tabs,{children:[(0,i.jsx)(o.Tab,{value:"macOS",label:"macOS",default:!0,children:(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"mkdir -p src/components/Avatar\ntouch src/components/Avatar/index.tsx\n"})})}),(0,i.jsx)(o.Tab,{value:"Windows",label:"Windows",children:(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-powershell",children:"mkdir -p src/components/Avatar\nni src/components/Avatar/index.tsx\n"})})})]}),"\n",(0,i.jsxs)(t.p,{children:["Delete the ",(0,i.jsx)(t.code,{children:"<Avatar>"})," implementation in ",(0,i.jsx)(t.code,{children:"src/routes/page.tsx"})," and change it to:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-ts",children:"import Avatar from '../components/Avatar';\n"})}),"\n",(0,i.jsxs)(t.p,{children:["The content of ",(0,i.jsx)(t.code,{children:"src/components/Avatar/index.tsx"})," is modified to:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-ts",children:"import styled from '@modern-js/runtime/styled';\n\nconst Avatar = styled.img`\n  width: 50px;\n  height: 50px;\n  border: 4px solid #0ef;\n  border-radius: 50%;\n`;\n\nexport default Avatar;\n"})}),"\n",(0,i.jsxs)(t.p,{children:["Execute ",(0,i.jsx)(t.code,{children:"pnpm run dev"}),", the result should be the same."]}),"\n",(0,i.jsxs)(t.div,{className:"rspress-directive info",children:[(0,i.jsx)(t.div,{className:"rspress-directive-title",children:"note"}),(0,i.jsxs)(t.div,{className:"rspress-directive-content",children:[(0,i.jsxs)(t.p,{children:["The reason for using the directory form ",(0,i.jsx)(t.code,{children:"Avatar/index.tsx"})," instead of the single-file form ",(0,i.jsx)(t.code,{children:"Avatar.tsx"})," is that you can easily add sub-files inside the directory later, including dedicated resources (pictures, etc.), dedicated sub-components, CSS files, etc."]}),"\n"]})]}),"\n",(0,i.jsxs)(t.h2,{id:"utility",children:["Utility",(0,i.jsx)(t.a,{className:"header-anchor","aria-hidden":"true",href:"#utility",children:"#"})]}),"\n",(0,i.jsxs)(t.p,{children:["We have used the style-components implementation ",(0,i.jsx)(t.code,{children:"<Avatar>"})," component, but the current UI is still unsatisfactory and lacks professionalism, such as the list item inhouse layout is a bit rough and misaligned in many places."]}),"\n",(0,i.jsxs)(t.p,{children:["Now, let's implement a better ",(0,i.jsx)(t.code,{children:"Item"})," component ourselves, implementing a design draft like this:"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/aphqeh7uhohpquloj/modern-js/docs/06/design2.png",alt:"design"})}),"\n",(0,i.jsxs)(t.p,{children:["The UI to be implemented this time is more complex and has an internal structure, but on the other hand, there is no very thick bright blue border of the ",(0,i.jsx)(t.code,{children:"<Avatar>"})," component such a very special UI, which is a very conventional horizontal and vertical layout, centering, font style, etc. In this case, there is actually no need to write CSS at all. There is a more efficient implementation method that complements styled-components: ",(0,i.jsx)(t.strong,{children:"Utility Class"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["Modern.js integrates the mainstream, light, general-purpose Utility Class library ",(0,i.jsx)(t.a,{href:"https://tailwindcss.com/",target:"_blank",rel:"noopener noreferrer",children:"Tailwind CSS"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["Execute ",(0,i.jsx)(t.code,{children:"pnpm run new"})," and select the following to start Tailwind CSS:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"? Please select the operation you want: Enable features\n? Please select the feature name: Enable Tailwind CSS\n"})}),"\n",(0,i.jsxs)(t.p,{children:["Register the Tailwind plugin in ",(0,i.jsx)(t.code,{children:"modern.config.ts"}),":"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import { appTools, defineConfig } from '@modern-js/app-tools';\nimport { tailwindcssPlugin } from '@modern-js/plugin-tailwindcss';\n\nexport default defineConfig({\n  runtime: {\n    router: true,\n    state: true,\n  },\n  server: {\n    ssr: true,\n  },\n  plugins: [appTools(), tailwindcssPlugin()],\n});\n"})}),"\n",(0,i.jsxs)(t.p,{children:["Import the Tailwind CSS css file at the top of ",(0,i.jsx)(t.code,{children:"src/routes/page.tsx"})," to start a quick implementation of the professional UI:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-js",children:"import 'tailwindcss/base.css';\nimport 'tailwindcss/components.css';\nimport 'tailwindcss/utilities.css';\n"})}),"\n",(0,i.jsx)(t.p,{children:"Create the Item component first:"}),"\n",(0,i.jsxs)(o.Tabs,{children:[(0,i.jsx)(o.Tab,{value:"macOS",label:"macOS",default:!0,children:(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"mkdir -p src/components/Item\ntouch src/components/Item/index.tsx\n"})})}),(0,i.jsx)(o.Tab,{value:"Windows",label:"Windows",children:(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-powershell",children:"mkdir -p src/components/Item\nni src/components/Item/index.tsx\n"})})})]}),"\n",(0,i.jsxs)(t.p,{children:["Modify ",(0,i.jsx)(t.code,{children:"src/routes/page.tsx"})," to pass the ",(0,i.jsx)(t.code,{children:"render"})," implementation of ",(0,i.jsx)(t.code,{children:"List"})," to ",(0,i.jsx)(t.code,{children:"Item"})," component:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-js",children:"import { List } from 'antd';\nimport 'tailwindcss/base.css';\nimport 'tailwindcss/components.css';\nimport 'tailwindcss/utilities.css';\nimport Item from '../components/Item';\n\nconst getAvatar = (users: Array<{ name: string, email: string }>) =>\n  users.map(user => ({\n    ...user,\n    avatar: `https://api.dicebear.com/7.x/pixel-art/svg?seed=${user.name}`,\n  }));\n\nconst mockData = getAvatar([\n  { name: 'Thomas', email: 'w.kccip@bllmfbgv.dm' },\n  { name: 'Chow', email: 'f.lfqljnlk@ywoefljhc.af' },\n  { name: 'Bradley', email: 'd.wfovsqyo@gpkcjwjgb.fr' },\n  { name: 'Davis', email: '\"t.kqkoj@utlkwnpwk.nu' },\n]);\n\nfunction Index() {\n  return (\n    <div className=\"container lg mx-auto\">\n      <List\n        dataSource={mockData}\n        renderItem={info => <Item key={info.name} info={info} />}\n      />\n    </div>\n  );\n}\n\nexport default Index;\n"})}),"\n",(0,i.jsxs)(t.p,{children:["Utility Class(",(0,i.jsx)(t.a,{href:"https://tailwindcss.com/docs/container",target:"_blank",rel:"noopener noreferrer",children:"https://tailwindcss.com/docs/container"}),") is used on the parent container for a quick implementation of the most basic maximum width, center, and other styles."]}),"\n",(0,i.jsxs)(t.p,{children:["Next implementation ",(0,i.jsx)(t.code,{children:"src/components/Item/index.tsx"}),":"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-tsx",children:'import Avatar from \'../Avatar\';\n\ntype InfoProps = {\n  avatar: string;\n  name: string;\n  email: string;\n  archived?: boolean;\n};\n\nconst Item = ({ info }: { info: InfoProps }) => {\n  const { avatar, name, email, archived } = info;\n  return (\n    <div className="flex p-4 items-center border-gray-200 border-b">\n      <Avatar src={avatar} />\n      <div className="ml-4 flex-1 flex justify-between">\n        <div className="flex-1">\n          <p>{name}</p>\n          <p>{email}</p>\n        </div>\n        <button\n          type="button"\n          disabled={archived}\n          className={`bg-blue-500  text-white font-bold\n            py-2 px-4 rounded-full hover:bg-blue-700`}\n        >\n          Archive\n        </button>\n      </div>\n    </div>\n  );\n};\n\nexport default Item;\n'})}),"\n",(0,i.jsxs)(t.p,{children:["Execute ",(0,i.jsx)(t.code,{children:"pnpm run dev"})," to see the expected running result:"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/aphqeh7uhohpquloj/modern-js/docs/06/result2.png",alt:"result"})}),"\n",(0,i.jsxs)(t.p,{children:["We only use a few Utility Classes, such as ",(0,i.jsx)(t.a,{href:"https://tailwindcss.com/docs/display/",target:"_blank",rel:"noopener noreferrer",children:"Flex"}),", ",(0,i.jsx)(t.a,{href:"https://tailwindcss.com/docs/padding/",target:"_blank",rel:"noopener noreferrer",children:"Padding"}),", ",(0,i.jsx)(t.a,{href:"https://tailwindcss.com/docs/margin/",target:"_blank",rel:"noopener noreferrer",children:"Margin"}),", ",(0,i.jsx)(t.a,{href:"https://tailwindcss.com/docs/text-color/",target:"_blank",rel:"noopener noreferrer",children:"Text"}),", ",(0,i.jsx)(t.a,{href:"https://tailwindcss.com/docs/font-weight/",target:"_blank",rel:"noopener noreferrer",children:"Font"}),", ",(0,i.jsx)(t.a,{href:"https://tailwindcss.com/docs/border-width",target:"_blank",rel:"noopener noreferrer",children:"Border"}),", without writing a single CSS implementation Professional UI that conforms to the design draft."]}),"\n",(0,i.jsxs)(t.h2,{id:"customized-utility-class",children:["Customized Utility Class",(0,i.jsx)(t.a,{className:"header-anchor","aria-hidden":"true",href:"#customized-utility-class",children:"#"})]}),"\n",(0,i.jsx)(t.p,{children:"We can also implement the new Utility Class ourselves to facilitate reuse between codes."}),"\n",(0,i.jsxs)(t.p,{children:["Utility Class itself is also a ",(0,i.jsx)(t.strong,{children:"component-oriented"})," technology (using different classes on a component is equivalent to setting some attributes from the base class for this component), but the classname of Utility Class is global (because it is used on arbitrary components/elements), it is very suitable for implementation with separate CSS files."]}),"\n",(0,i.jsx)(t.p,{children:"Create a new CSS file:"}),"\n",(0,i.jsxs)(o.Tabs,{children:[(0,i.jsx)(o.Tab,{value:"macOS",label:"macOS",default:!0,children:(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"mkdir -p src/styles\ntouch src/styles/utils.css\n"})})}),(0,i.jsx)(o.Tab,{value:"Windows",label:"Windows",children:(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-powershell",children:"mkdir -p src/styles\nni src/styles/utils.css\n"})})})]}),"\n",(0,i.jsxs)(t.p,{children:["Import ",(0,i.jsx)(t.code,{children:"utils.css"})," in ",(0,i.jsx)(t.code,{children:"src/routes/page.tsx"}),":"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-js",children:"import '../styles/utils.css';\n"})}),"\n",(0,i.jsxs)(t.p,{children:["A Utility Class named ",(0,i.jsx)(t.code,{children:"custom-text-gray"})," is implemented in ",(0,i.jsx)(t.code,{children:"src/routes/styles/utils.css"}),"."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-css",children:":root {\n  --custom-text-color: rgb(113, 128, 150);\n}\n\n.custom-text-gray {\n  color: var(--custom-text-color);\n}\n"})}),"\n",(0,i.jsxs)(t.div,{className:"rspress-directive info",children:[(0,i.jsx)(t.div,{className:"rspress-directive-title",children:"note"}),(0,i.jsxs)(t.div,{className:"rspress-directive-content",children:[(0,i.jsxs)(t.p,{children:["Modern.js integrates with ",(0,i.jsx)(t.a,{href:"/guides/basic-features/css",children:"PostCSS"})," and supports modern CSS syntax features such as ",(0,i.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties",target:"_blank",rel:"noopener noreferrer",children:"custom properties"}),"."]}),"\n"]})]}),"\n",(0,i.jsxs)(t.p,{children:["Use in ",(0,i.jsx)(t.code,{children:"src/routes/components/Item/index.tsx"}),":"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-js",children:'<div className="ml-4 flex-1 flex justify-between">\n'})}),"\n",(0,i.jsx)(t.p,{children:"Change to:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-js",children:'<div className="ml-4 custom-text-gray flex-1 flex justify-between">\n'})}),"\n",(0,i.jsxs)(t.p,{children:["Execute ",(0,i.jsx)(t.code,{children:"pnpm run dev"}),", you can see that the font color has changed:"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/aphqeh7uhohpquloj/modern-js/docs/06/result3.png",alt:"design2"})}),"\n",(0,i.jsxs)(t.div,{className:"rspress-directive info",children:[(0,i.jsx)(t.div,{className:"rspress-directive-title",children:"note"}),(0,i.jsxs)(t.div,{className:"rspress-directive-content",children:[(0,i.jsxs)(t.p,{children:["This is just to demonstrate Utility Class usage. In a real project, with Tailwind CSS, this Utility Class is of little value and should be added to the font color through the ",(0,i.jsx)(t.a,{href:"https://tailwindcss.com/docs/customizing-colors",target:"_blank",rel:"noopener noreferrer",children:(0,i.jsx)(t.strong,{children:"theme"})})," of the configuration Design System."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"utils.css"})," can also be written as ",(0,i.jsx)(t.code,{children:"utils.scss"})," or ",(0,i.jsx)(t.code,{children:"utils.less"}),", Modern.js out of the box support for SCSS and Less."]}),"\n",(0,i.jsxs)(t.p,{children:["However, with the support of PostCSS, modern CSS should be sufficient to meet these development needs, and the performance is also better than that of the preprocessor. It is recommended to use ",(0,i.jsx)(t.code,{children:".css"})," files first."]}),"\n"]})]})]})}function c(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object.assign({},(0,a.useMDXComponents)(),e.components).wrapper;return t?(0,i.jsx)(t,(0,r._)((0,n._)({},e),{children:(0,i.jsx)(l,(0,n._)({},e))})):l(e)}var d=c;c.__RSPRESS_PAGE_META={},c.__RSPRESS_PAGE_META["en%2Ftutorials%2Ffirst-app%2Fc03-css.mdx"]={toc:[{text:"JS components using CSS",id:"js-components-using-css",depth:2},{text:"Utility",id:"utility",depth:2},{text:"Customized Utility Class",id:"customized-utility-class",depth:2}],title:"Add Style"};var u={title:"Add Style"}},56306:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return l}});var n=s("9880");s("6171");var r=s("54234"),i=s.n(r),a=s("46088"),o=s("93817"),l=function(e){var t=e.title,s=e.desc,r=e.href;return(0,n.jsxs)("a",{href:(0,a.withBase)(r),target:"_blank",style:{textDecoration:"none"},className:i(o.card),children:[(0,n.jsx)("span",{className:o.title,children:t}),(0,n.jsx)("span",{className:o.desc,children:s})]})}},788:function(e,t,s){"use strict";s.r(t),s.d(t,{FeatureLayout:function(){return i}});var n=s("9880");s("6171");var r=s("58449"),i=function(e){var t=e.children;return(0,n.jsx)("div",{className:r["feature-layout"],children:t})}},29114:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return d}});var n=s("15169"),r=s("43932"),i=s("85056"),a=s("9880"),o=s("26807"),l=s("16404");function c(e){var t,s=e.to,o=e.href,l=e.label,c=(0,i._)(e,["to","href","label"]);return(0,a.jsx)("a",(0,r._)((0,n._)({className:"linkItem",target:"_blank",href:o||s},c),{children:o&&((t=o).startsWith("http://")||t.startsWith("https://"))?(0,a.jsx)("span",{children:l}):l}))}function d(){var e=(0,o.useI18n)(),t=[{title:e("guide"),items:[{label:e("quickStart"),to:(0,o.useUrl)("/guides/get-started/quick-start")},{label:e("coreConcept"),to:(0,o.useUrl)("/guides/concept/entries")},{label:e("basicFeatures"),to:(0,o.useUrl)("/guides/basic-features/routes")},{label:e("advancedFeatures"),to:(0,o.useUrl)("/guides/advanced-features/rspack-start")}]},{title:"API",items:[{label:e("configuration"),to:(0,o.useUrl)("/configure/app/usage")},{label:e("command"),to:(0,o.useUrl)("/apis/app/commands")},{label:e("runtime"),to:(0,o.useUrl)("/apis/app/runtime/core/bootstrap")},{label:e("conventions"),to:(0,o.useUrl)("apis/app/hooks/src/app")}]},{title:e("topic"),items:[{label:e("microFrontend"),to:(0,o.useUrl)("/guides/topic-detail/micro-frontend/c01-introduction")},{label:e("stateManagement"),to:(0,o.useUrl)("/guides/topic-detail/model/quick-start")},{label:e("pluginSystem"),to:(0,o.useUrl)("/guides/topic-detail/framework-plugin/introduction")},{label:e("projectGenerator"),to:(0,o.useUrl)("/guides/topic-detail/generator/project")}]},{title:e("help"),items:[{label:e("changelog"),to:"https://github.com/web-infra-dev/modern.js/releases"},{label:"GitHub Issues",to:"https://github.com/web-infra-dev/modern.js/issues"},{label:e("githubDiscussion"),to:"https://github.com/web-infra-dev/modern.js/discussions"}]}].map(function(e,t){return(0,a.jsxs)("div",{className:l.linkWrapper,children:[(0,a.jsx)("div",{className:l.linkTitle,children:e.title}),(0,a.jsx)("ul",{className:l.items,children:e.items.map(function(e,t){return(0,a.jsx)("li",{className:l.link,children:(0,a.jsx)(c,(0,n._)({},e))},e.to||t)})})]},t)});return(0,a.jsx)("footer",{className:l.footer,children:(0,a.jsxs)("div",{className:l.wrapper,children:[(0,a.jsx)("img",{className:l.logo,src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/zq-uylkvT/ljhwZthlaukjlkulzlp/modern-logo-home-page-0209.svg"}),(0,a.jsx)("div",{className:l.linksWrapper,children:t})]})})}},45475:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return i}});var n=s("9880");s("6171");var r=s("6477"),i=function(e){var t=e.children;return(0,n.jsx)("div",{className:r.titleWrap,children:(0,n.jsx)("h2",{className:r.title,children:t})})}},92478:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return m}});var n=s("9880"),r=s("90591"),i=s("46088"),a=s("6171"),o=s("56306"),l=s("45475"),c=s("788"),d=s("29114"),u=s("26807"),h=s("6343"),p=function(){var e=(0,u.useI18n)();return(0,n.jsx)("div",{className:h.header,children:(0,n.jsxs)("header",{className:(0,r.default)("hero hero--primary",h.heroBanner),children:[(0,n.jsxs)("h1",{className:h.title,children:[(0,n.jsx)("div",{children:"Inspire Creativity in"}),(0,n.jsx)("div",{className:h.titleGradient,children:"Modern Web Development"})]}),(0,n.jsxs)("div",{className:h.buttons,children:[(0,n.jsxs)("a",{href:(0,u.useUrl)("/guides/get-started/introduction"),className:h.leftButton,children:[e("introduction"),(0,n.jsx)("img",{width:"20",height:"20",className:h.startArrow,src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/aphqeh7uhohpquloj/modern-js/right-arrow.svg?url"})]}),(0,n.jsx)("a",{href:(0,u.useUrl)("/guides/get-started/quick-start"),className:h.rightButton,children:e("quickStart")})]})]})})};function m(){var e=(0,u.useI18n)(),t=(0,i.useLocation)().pathname;(0,a.useEffect)(function(){return window.MODERN_THEME="dark",function(){window.MODERN_THEME=void 0}},[t]);var s=[{title:e("feature1"),href:(0,u.useUrl)("/guides/concept/builder"),desc:e("featureDesc1")},{title:e("feature2"),href:(0,u.useUrl)("/guides/advanced-features/bff/index"),desc:e("featureDesc2")},{title:e("feature3"),href:(0,u.useUrl)("/guides/basic-features/routes"),desc:e("featureDesc3")},{title:e("feature4"),href:(0,u.useUrl)("/guides/advanced-features/ssr"),desc:e("featureDesc4")},{title:e("feature5"),href:(0,u.useUrl)("/guides/basic-features/css"),desc:e("featureDesc5")},{title:e("feature6"),href:(0,u.useUrl)("/configure/app/usage"),desc:e("featureDesc6")}],m=(0,i.useLang)(),f=[{title:"Modern.js Framework",href:(0,u.useUrl)("/guides/get-started/introduction"),desc:e("solutionsDesc1")},{title:"Modern.js Module",href:"https://modernjs.dev/module-tools".concat("en"===m?"/en":""),desc:e("solutionsDesc2")},{title:"Modern.js Builder",href:"https://modernjs.dev/builder".concat("en"===m?"/en":""),desc:e("solutionsDesc3")},{title:"Rspress",href:"https://rspress.dev".concat("en"===m?"":"/zh"),desc:e("solutionsDesc4")}];return(0,n.jsxs)("div",{children:[(0,n.jsxs)(i.Helmet,{children:[(0,n.jsx)("html",{className:"dark"}),(0,n.jsx)("script",{children:"window.MODERN_THEME = 'dark';"}),(0,n.jsx)("style",{type:"text/css",children:"\n          .rspress-doc-appearance {\n            display: none!important;\n          }\n        "})]}),(0,n.jsx)(p,{}),(0,n.jsxs)("main",{className:h["homepage-main"],children:[(0,n.jsxs)(c.FeatureLayout,{children:[(0,n.jsx)(l.default,{children:e("solutions")}),(0,n.jsx)("div",{className:h.cardContainer,children:f.map(function(e,t){return(0,n.jsx)(o.default,{title:e.title,desc:e.desc,href:e.href},t)})})]}),(0,n.jsx)(c.FeatureLayout,{children:(0,n.jsxs)("h1",{className:(0,r.default)([h.title,h.titleGradient]),style:{textAlign:"left",marginBottom:32},children:[(0,n.jsx)("div",{children:e("secondSlogan1")}),(0,n.jsx)("div",{children:e("secondSlogan2")})]})}),(0,n.jsxs)(c.FeatureLayout,{children:[(0,n.jsx)(l.default,{children:"Modern.js Framework"}),(0,n.jsx)("div",{className:h.cardContainer,children:s.map(function(e,t){return(0,n.jsx)(o.default,{title:e.title,desc:e.desc,href:e.href},t)})})]}),(0,n.jsx)(d.default,{})]})]})}},72605:function(e,t,s){"use strict";s.r(t),s.d(t,{EN_US:function(){return n}});var n={introduction:"Introduction",quickStart:"Quick Start",slogan:"A Progressive React Framework for modern web development",secondSlogan1:"Enjoy the development experience.",secondSlogan2:"Make innovation happen faster.",feature1:"Rust Bundler",featureDesc1:"Easily switch to Rspack bundler with faster build speed.",feature2:"Integrated BFF",featureDesc2:"Develop BFF code in the same project, enjoy simple function calls.",feature3:"Nested Routes",featureDesc3:"File-as-route, comes with lots performance optimizations.",feature4:"Multi-Rendering Mode",featureDesc4:"SSR, SSG, SPR, all out of the box for you.",feature5:"CSS Solutions",featureDesc5:"CSS Modules, CSS-in-JS, Tailwind CSS, take your pick.",feature6:"Easy to Configure",featureDesc6:"Launch with zero configuration, then everything is configurable.",solutions:"Solutions",solutionsDesc1:"A progressive React framework for web development.",solutionsDesc2:"A powerful solution for npm package development.",solutionsDesc3:"An Rspack-based build tool for web development.",solutionsDesc4:"A fast Rspack-based static site generator",guide:"Guide",topic:"Topic",help:"Help",coreConcept:"Core Concept",basicFeatures:"Basic Features",advancedFeatures:"Advanced Features",configuration:"Configuration",command:"Command",runtime:"Runtime",conventions:"Conventions",microFrontend:"Micro Frontend",stateManagement:"State Management",pluginSystem:"Plugin System",projectGenerator:"Project Generator",githubDiscussion:"Github Discussion",changelog:"Changelog",doubao:"Doubao",writingo:"Writingo",volctrans:"Volctrans",shidianbaike:"Shidian Baike",xiaohe:"Xiaohe",dongchedi:"Dongchedi",volcengineDeveloper:"Volcengine Developer"}},26807:function(e,t,s){"use strict";s.r(t),s.d(t,{useUrl:function(){return o},useI18n:function(){return l}});var n=s("46088"),r=s("72605"),i=s("45896"),a={en:r.EN_US,zh:i.ZH_CN};function o(e){var t=(0,n.useLang)();return(0,n.withBase)("zh"===t?e:"/en".concat(e))}function l(){var e=(0,n.useLang)();return function(t){return a[e][t]}}},45896:function(e,t,s){"use strict";s.r(t),s.d(t,{ZH_CN:function(){return n}});var n={introduction:"\u4ECB\u7ECD",quickStart:"\u5FEB\u901F\u4E0A\u624B",slogan:"\u57FA\u4E8E React \u7684\u6E10\u8FDB\u5F0F Web \u5F00\u53D1\u6846\u67B6",secondSlogan1:"\u4EAB\u53D7\u6109\u60A6\u7684\u5F00\u53D1\u4F53\u9A8C\uFF0C",secondSlogan2:"\u8BA9\u521B\u65B0\u66F4\u5FEB\u53D1\u751F\u3002",feature1:"Rust \u6784\u5EFA",featureDesc1:"\u8F7B\u677E\u5207\u6362\u5230 Rspack \u6784\u5EFA\u5DE5\u5177\uFF0C\u7F16\u8BD1\u98DE\u5FEB\u3002",feature2:"\u4E00\u4F53\u5316\u5F00\u53D1",featureDesc2:"\u5728\u540C\u4E00\u9879\u76EE\u4E2D\u5B8C\u6210 BFF \u5F00\u53D1\uFF0C\u4EAB\u53D7\u7B80\u6D01\u7684\u51FD\u6570\u8C03\u7528\u3002",feature3:"\u5D4C\u5957\u8DEF\u7531",featureDesc3:"\u6587\u4EF6\u7CFB\u7EDF\u5373\u8DEF\u7531\uFF0C\u9644\u8D60\u5168\u5957\u6027\u80FD\u4F18\u5316\u3002",feature4:"\u591A\u6E32\u67D3\u6A21\u5F0F",featureDesc4:"SSR\u3001SSG\u3001SPR \u7B49\u591A\u79CD\u6E32\u67D3\u6A21\u5F0F\uFF0C\u901A\u901A\u5F00\u7BB1\u5373\u7528\u3002",feature5:"CSS \u65B9\u6848",featureDesc5:"CSS Modules\u3001CSS-in-JS\u3001Tailwind CSS\uFF0C\u4EFB\u4F60\u6311\u9009\u3002",feature6:"\u6613\u4E8E\u914D\u7F6E",featureDesc6:"\u4EE5\u96F6\u914D\u7F6E\u542F\u52A8\uFF0C\u7136\u540E\u4E00\u5207\u7686\u53EF\u914D\u7F6E\u3002",solutions:"\u89E3\u51B3\u65B9\u6848",solutionsDesc1:"\u57FA\u4E8E React \u7684\u6E10\u8FDB\u5F0F Web \u5F00\u53D1\u6846\u67B6\u3002",solutionsDesc2:"\u7B80\u5355\u3001\u9AD8\u6027\u80FD\u7684 npm \u5305\u5F00\u53D1\u65B9\u6848\u3002",solutionsDesc3:"\u57FA\u4E8E Rspack \u7684 Web \u6784\u5EFA\u5DE5\u5177\u3002",solutionsDesc4:"\u57FA\u4E8E Rspack \u7684\u9759\u6001\u7AD9\u70B9\u751F\u6210\u5668\u3002",guide:"\u6307\u5357",topic:"\u4E13\u9898",help:"\u5E2E\u52A9",coreConcept:"\u6838\u5FC3\u6982\u5FF5",basicFeatures:"\u57FA\u7840\u529F\u80FD",advancedFeatures:"\u8FDB\u9636\u529F\u80FD",configuration:"\u914D\u7F6E",command:"\u547D\u4EE4",runtime:"\u8FD0\u884C\u65F6",conventions:"\u76EE\u5F55\u7EA6\u5B9A",microFrontend:"\u5FAE\u524D\u7AEF",stateManagement:"\u72B6\u6001\u7BA1\u7406",pluginSystem:"\u63D2\u4EF6\u7CFB\u7EDF",projectGenerator:"\u9879\u76EE\u751F\u6210\u5668",githubDiscussion:"Github \u8BA8\u8BBA\u533A",changelog:"\u66F4\u65B0\u65E5\u5FD7",doubao:"\u8C46\u5305",writingo:"\u706B\u5C71\u5199\u4F5C",volctrans:"\u706B\u5C71\u7FFB\u8BD1",shidianbaike:"\u8BC6\u5178\u767E\u79D1",xiaohe:"\u5C0F\u8377\u5065\u5EB7",dongchedi:"\u61C2\u8F66\u5E1D",volcengineDeveloper:"\u706B\u5C71\u5F15\u64CE\u5F00\u53D1\u8005\u793E\u533A"}},78955:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return o}});var n=s("15169"),r=s("43932"),i=s("52426"),a=s("92478");s.es(i,t);var o=(0,r._)((0,n._)({},i.default),{HomeLayout:a.default})}}]);