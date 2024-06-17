/*! For license information please see 88918.59c8faa3.js.LICENSE.txt */
(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["88918"],{64598:function(e,o,n){"use strict";n.r(o);var i=n("39980"),r=n("9580");function t(e){let o=Object.assign({h1:"h1",a:"a",p:"p",code:"code",div:"div",h4:"h4",pre:"pre",h3:"h3",ul:"ul",li:"li"},(0,r.ah)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(o.h1,{id:"storybook",children:["storybook/",(0,i.jsx)(o.a,{className:"header-anchor","aria-hidden":"true",href:"#storybook",children:"#"})]}),"\n",(0,i.jsxs)(o.p,{children:["Modern.js supports debugging using Storybook. When configuring Storybook, you need to configure it in the ",(0,i.jsx)(o.code,{children:"config/storybook"})," directory of the project."]}),"\n",(0,i.jsxs)(o.p,{children:["Please refer to ",(0,i.jsx)(o.a,{href:"https://storybook.js.org/docs/react/configure/overview",target:"_blank",rel:"noopener noreferrer",children:"Storybook Configuration"})," for Storybook configuration."]}),"\n",(0,i.jsxs)(o.div,{className:"rspress-directive info",children:[(0,i.jsx)(o.div,{className:"rspress-directive-title",children:"INFO"}),(0,i.jsx)(o.div,{className:"rspress-directive-content",children:(0,i.jsx)(o.p,{children:"Enabling the Storybook function requires running the new command to enable it under the project first."})})]}),"\n",(0,i.jsxs)(o.h4,{id:"example",children:["Example",(0,i.jsx)(o.a,{className:"header-anchor","aria-hidden":"true",href:"#example",children:"#"})]}),"\n",(0,i.jsxs)(o.p,{children:["For the webpack configuration of the Storybook Manager app section, you can configure it by adding the ",(0,i.jsx)(o.code,{children:"./config/storybook/main.js"})," file to configure it."]}),"\n",(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:"language-js",children:"// ./config/storybook/main.js\n\nmodule.exports = {\n  // it controls the Storybook manager app\n  managerWebpack: async (config, options) => {\n    // update config here\n    return config;\n  },\n};\n"})}),"\n",(0,i.jsxs)(o.h3,{id:"limitation",children:["Limitation",(0,i.jsx)(o.a,{className:"header-anchor","aria-hidden":"true",href:"#limitation",children:"#"})]}),"\n",(0,i.jsxs)(o.p,{children:["There are some limitations when using the ",(0,i.jsx)(o.code,{children:"config/storybook"})," directory for configuration:"]}),"\n",(0,i.jsxs)(o.ul,{children:["\n",(0,i.jsxs)(o.li,{children:["The location where the Story file is stored cannot be modified, that is, the ",(0,i.jsx)(o.code,{children:"stories"})," configuration cannot be modified in the ",(0,i.jsx)(o.code,{children:"main.js"})," file."]}),"\n",(0,i.jsxs)(o.li,{children:["It is not supported to modify Webpack and Babel related configurations in ",(0,i.jsx)(o.code,{children:"main.js"}),", related requirements can be passed through ",(0,i.jsx)(o.a,{href:"/configure/app/tools/webpack",children:(0,i.jsx)(o.code,{children:"tools.webpack"})})," /",(0,i.jsx)(o.a,{href:"/configure/app/tools/babel",children:(0,i.jsx)(o.code,{children:"tools.babel"})})," modify."]}),"\n"]})]})}function s(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:o}=Object.assign({},(0,r.ah)(),e.components);return o?(0,i.jsx)(o,{...e,children:(0,i.jsx)(t,{...e})}):t(e)}o.default=s,s.__RSPRESS_PAGE_META={},s.__RSPRESS_PAGE_META["en%2Fapis%2Fapp%2Fhooks%2Fconfig%2Fstorybook.mdx"]={toc:[{text:"Example",id:"example",depth:4},{text:"Limitation",id:"limitation",depth:3}],title:"storybook/",frontmatter:{title:"storybook/",sidebar_position:7}}}}]);