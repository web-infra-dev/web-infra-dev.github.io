(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["2718"],{43375:function(e,o,n){"use strict";n.r(o),n.d(o,{default:function(){return l}});var r,s=n("10310"),t=n("81904"),i=n("98638"),d=n("21968");function a(e){let o=Object.assign({h1:"h1",a:"a",p:"p",ul:"ul",li:"li",h2:"h2",code:"code",pre:"pre"},(0,d.useMDXComponents)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(o.h1,{id:"using-storybook",children:["Using Storybook",(0,i.jsx)(o.a,{className:"header-anchor","aria-hidden":"true",href:"#using-storybook",children:"#"})]}),"\n",(0,i.jsxs)(o.p,{children:[(0,i.jsx)(o.a,{href:"https://storybook.js.org/",target:"_blank",rel:"noopener noreferrer",children:"Storybook"})," is a tool dedicated to component debugging, providing around component development."]}),"\n",(0,i.jsxs)(o.ul,{children:["\n",(0,i.jsx)(o.li,{children:"Develop UIs that are more durable"}),"\n",(0,i.jsx)(o.li,{children:"Test UIs with less effort and no flakes"}),"\n",(0,i.jsx)(o.li,{children:"Document UI for your team to reuse"}),"\n",(0,i.jsx)(o.li,{children:"Share how the UI actually works"}),"\n",(0,i.jsx)(o.li,{children:"Automate UI workflows"}),"\n"]}),"\n",(0,i.jsxs)(o.h2,{id:"enable-storybook-debugging",children:["Enable Storybook debugging",(0,i.jsx)(o.a,{className:"header-anchor","aria-hidden":"true",href:"#enable-storybook-debugging",children:"#"})]}),"\n",(0,i.jsx)(o.p,{children:"The Modern.js framework integrates the Builder's Node Polyfill plugin by default."}),"\n",(0,i.jsxs)(o.p,{children:["If you want to debug the component, you can enable Storybook debugging through ",(0,i.jsx)(o.code,{children:"pnpm run new"}),"."]}),"\n",(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:"language-bash",children:"$ npx modern new\n? Please select the operation you want: Enable features\n? Please select the feature name: Enable Visual Testing (Storybook)\n"})}),"\n",(0,i.jsxs)(o.p,{children:["After the execution is complete, you only need to register the Modern.js Storybook plugin in the ",(0,i.jsx)(o.code,{children:"modern.config.ts"})," file to enable Storybook debugging capabilities."]}),"\n",(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import { appTools, defineConfig } from '@modern-js/app-tools';\nimport { storybookPlugin } from '@modern-js/plugin-storybook';\n\nexport default defineConfig({\n  plugins: [appTools(), storybookPlugin()],\n});\n"})}),"\n",(0,i.jsxs)(o.h2,{id:"debugging-code",children:["Debugging code",(0,i.jsx)(o.a,{className:"header-anchor","aria-hidden":"true",href:"#debugging-code",children:"#"})]}),"\n",(0,i.jsxs)(o.p,{children:["Modern.js recognizes files in the format of ",(0,i.jsx)(o.a,{href:"/apis/app/hooks/src/stories",children:"*.stories.(js|jsx|ts|tsx|mdx)"})," under the project source code directory (src/) by default as Storybook debugging files."]}),"\n",(0,i.jsxs)(o.h2,{id:"configure-storybook",children:["Configure Storybook",(0,i.jsx)(o.a,{className:"header-anchor","aria-hidden":"true",href:"#configure-storybook",children:"#"})]}),"\n",(0,i.jsxs)(o.p,{children:["In Modern.js, Storybook configuration files can be added to the ",(0,i.jsx)(o.a,{href:"/apis/app/hooks/config/storybook",children:(0,i.jsx)(o.code,{children:"config/storybook"})})," directory of the project."]})]})}(r=globalThis).__RSPRESS_PAGE_META||(r.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["en%2Fguides%2Fadvanced-features%2Fusing-storybook.mdx"]={toc:[{text:"Enable Storybook debugging",id:"enable-storybook-debugging",depth:2},{text:"Debugging code",id:"debugging-code",depth:2},{text:"Configure Storybook",id:"configure-storybook",depth:2}],title:"Using Storybook",frontmatter:{sidebar_position:12}};var l=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:o}=Object.assign({},(0,d.useMDXComponents)(),e.components);return o?(0,i.jsx)(o,(0,t._)((0,s._)({},e),{children:(0,i.jsx)(a,(0,s._)({},e))})):a(e)}}}]);