"use strict";(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["94031"],{85234:function(e,n,r){r.r(n),r.d(n,{default:function(){return o}});var t=r(38093),s=r(75878);function i(e){let n=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",blockquote:"blockquote",ul:"ul",li:"li",strong:"strong"},(0,s.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.h1,{id:"overview",children:["Overview",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#overview",children:"#"})]}),"\n",(0,t.jsx)(n.p,{children:"Welcome to Modern.js blog!"}),"\n",(0,t.jsx)(n.p,{children:"You can find the latest update of Modern.js and our thought processes here. Occasionally we explain the infrastructure behind it."}),"\n",(0,t.jsxs)(n.h2,{id:"announcing-modernjs-v2-support-rspack",children:["Announcing Modern.js v2: support Rspack",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#announcing-modernjs-v2-support-rspack",children:"#"})]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"Published on 16.03.2023"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"We are excited to announce the release of Modern.js v2!"}),"\n",(0,t.jsx)(n.p,{children:"Modern.js is a suite of infrastructure tools we built for web development inside Bytedance (we call ourself Web Infra). Since we open sourced this project a little more than a year ago, there were dozens of contributors helped us on development; we aggregated more than 2,000 pull requests and Modern.js started to support build tool like Rspack, features like nested routes, Streaming SSR and there are more to come!"}),"\n",(0,t.jsxs)(n.p,{children:["We are extremely proud of what we have achieved so far, you can also refer to ",(0,t.jsx)(n.a,{href:"/community/blog/v2-release-note",children:"this article(English version under construction)"}),"\uD83D\uDC48\uD83C\uDFFB to see what has changed over the last year in Modern.js."]}),"\n",(0,t.jsxs)(n.h2,{id:"what-is-streaming-ssr-in-react-18",children:["What is Streaming SSR in React 18",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#what-is-streaming-ssr-in-react-18",children:"#"})]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"Published on 16.12.2022"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Since React 18, React supports a new type of SSR (streaming SSR) and it brought two advantages over the React tool chain:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Streaming HTML: Server will be able to transmit HTML to browser parts by parts, rather than waiting until the whole page being rendered. Client side will render the page faster thus dramatically increase performance benchmark scores like TTFB(Time to First Byte), FCP(First Contentful Paint) and more."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Selective Hydration: On the client side, browser can hydrate only the HTML elements that has already been rendered, without needing to wait until the whole page finish rendering and all the javascript bundle being loaded."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["To understand its design further, check out this ",(0,t.jsx)(n.a,{href:"https://github.com/reactwg/react-18/discussions/37",target:"_blank",rel:"noopener noreferrer",children:"Github Discussion"})," by Dan Abramov or watch this ",(0,t.jsx)(n.a,{href:"https://www.youtube.com/watch?v=pj5N-Khihgc",target:"_blank",rel:"noopener noreferrer",children:"talk"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Or read more from us at ",(0,t.jsx)(n.a,{href:"https://mp.weixin.qq.com/s/w4FS5sBcHqRl-Saqi19Y6g",target:"_blank",rel:"noopener noreferrer",children:"here(Further content in English under construction)"}),"."]}),"\n",(0,t.jsxs)(n.h2,{id:"introducing-react-server-component-in-modernjs",children:["Introducing React Server Component in Modern.js",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#introducing-react-server-component-in-modernjs",children:"#"})]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"Published on 01.12.2022"}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["To explain the experimental React Server Component, the one-liner given by the React Team was: ",(0,t.jsx)(n.strong,{children:"zero-bundle-size React Server Components"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"We agreed with the React team that this is where the whole direction will move forward in React. Open source maintainers and contributors inside the React community are also actively building an eco-system around it."}),"\n",(0,t.jsxs)(n.p,{children:["Read more from React team at ",(0,t.jsx)(n.a,{href:"https://react.dev/blog/2023/03/22/react-labs-what-we-have-been-working-on-march-2023#react-server-components",target:"_blank",rel:"noopener noreferrer",children:"here"})," or more from us at ",(0,t.jsx)(n.a,{href:"https://mp.weixin.qq.com/s/B-XLvW00vl5RE1Ur3EW4ow",target:"_blank",rel:"noopener noreferrer",children:"here"})]}),"\n",(0,t.jsxs)(n.h2,{id:"updates-during-sept---oct-in-2022",children:["Updates during Sept - Oct in 2022",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#updates-during-sept---oct-in-2022",children:"#"})]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"Published on 01.11.2022"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"We updated Modern.js to v1.21.0 during Sept - Oct. Major upgrade includes:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"support pnpm v7"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"added typescript compiler option on server side"})}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/community/blog/2022-0910-updates",children:"Read more (English version under construction)"})}),"\n",(0,t.jsxs)(n.h2,{id:"updates-during-july---august-in-2022",children:["Updates during July - August in 2022",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#updates-during-july---august-in-2022",children:"#"})]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"Published on 2022.09.05"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Modern.js upgraded to v1.17.0 during July to August in 2022. Major updates include:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"Support React 18"})}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Unifying packages"}),": All the Modern.js package version numbers are unified, and added version update command line in CLI."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Support npm module bundle building"}),": We support bundling npm module output."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Reduck v1.1"}),": We released ",(0,t.jsx)(n.a,{href:"https://github.com/web-infra-dev/reduck",target:"_blank",rel:"noopener noreferrer",children:"Reduck v1.1"})," and updated all our documentations."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/community/blog/2022-0708-updates",children:"Read more (English version under construction)"})})]})}function a(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,s.ah)(),e.components);return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(i,{...e})}):i(e)}let o=a;a.__RSPRESS_PAGE_META={},a.__RSPRESS_PAGE_META["en%2Fcommunity%2Fblog%2Foverview.md"]={toc:[{text:"Announcing Modern.js v2: support Rspack",id:"announcing-modernjs-v2-support-rspack",depth:2},{text:"What is Streaming SSR in React 18",id:"what-is-streaming-ssr-in-react-18",depth:2},{text:"Introducing React Server Component in Modern.js",id:"introducing-react-server-component-in-modernjs",depth:2},{text:"Updates during Sept - Oct in 2022",id:"updates-during-sept---oct-in-2022",depth:2},{text:"Updates during July - August in 2022",id:"updates-during-july---august-in-2022",depth:2}],title:"Overview",frontmatter:{sidebar_position:1}}}}]);