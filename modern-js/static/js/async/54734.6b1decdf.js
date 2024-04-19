/*! For license information please see 54734.6b1decdf.js.LICENSE.txt */
(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["54734"],{55382:function(e,i,r){"use strict";r.r(i);var s=r("39980"),l=r("9580");function n(e){let i=Object.assign({h1:"h1",a:"a",h2:"h2",p:"p",code:"code",pre:"pre",div:"div",h3:"h3",ul:"ul",li:"li",img:"img"},(0,l.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(i.h1,{id:"browser-compatibility",children:["Browser Compatibility",(0,s.jsx)(i.a,{className:"header-anchor","aria-hidden":"true",href:"#browser-compatibility",children:"#"})]}),"\n",(0,s.jsxs)(i.h2,{id:"browserslist-configuration",children:["Browserslist Configuration",(0,s.jsx)(i.a,{className:"header-anchor","aria-hidden":"true",href:"#browserslist-configuration",children:"#"})]}),"\n",(0,s.jsxs)(i.p,{children:["Modern.js supports setting the browserslist for your web applications. You can set the value of ",(0,s.jsx)(i.a,{href:"https://browsersl.ist/",target:"_blank",rel:"noopener noreferrer",children:"Browserslist"})," in the ",(0,s.jsx)(i.code,{children:".browserslistrc"})," file."]}),"\n",(0,s.jsxs)(i.p,{children:["When you create a new Modern.js project, it will includes a ",(0,s.jsx)(i.code,{children:".browserslistrc"})," configuration by default, which means that the JavaScript code will be compiled to ES6."]}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-yaml",meta:'title=".browserslistrc"',children:"chrome >= 51\nedge >= 15\nfirefox >= 54\nsafari >= 10\nios_saf >= 10\n"})}),"\n",(0,s.jsxs)(i.div,{className:"rspress-directive tip",children:[(0,s.jsx)(i.div,{className:"rspress-directive-title",children:"TIP"}),(0,s.jsx)(i.div,{className:"rspress-directive-content",children:(0,s.jsxs)(i.p,{children:["Please refer to ",(0,s.jsx)(i.a,{href:"https://rsbuild.dev/guide/advanced/browserslist",target:"_blank",rel:"noopener noreferrer",children:"Rsbuild - Browserslist"})," for more information.\n"]})})]}),"\n",(0,s.jsxs)(i.h2,{id:"polyfill",children:["Polyfill",(0,s.jsx)(i.a,{className:"header-anchor","aria-hidden":"true",href:"#polyfill",children:"#"})]}),"\n",(0,s.jsxs)(i.h3,{id:"polyfill-at-compile",children:["Polyfill At Compile",(0,s.jsx)(i.a,{className:"header-anchor","aria-hidden":"true",href:"#polyfill-at-compile",children:"#"})]}),"\n",(0,s.jsxs)(i.p,{children:["Modern.js defaults to importing corresponding polyfill code from [core-js] (",(0,s.jsx)(i.a,{href:"https://github.com/zloirock/core-js",target:"_blank",rel:"noopener noreferrer",children:"https://github.com/zloirock/core-js"}),") during compilation."]}),"\n",(0,s.jsx)(i.p,{children:"By default, the required Polyfill code will be introduced according to the settings of the Browserslist, so there is no need to worry about the Polyfill problem of the project source code and third-party dependencies, but because it contains some Polyfill code that is not used, the final bundle size may be increased."}),"\n",(0,s.jsxs)(i.div,{className:"rspress-directive info",children:[(0,s.jsx)(i.div,{className:"rspress-directive-title",children:"INFO"}),(0,s.jsxs)(i.div,{className:"rspress-directive-content",children:[(0,s.jsxs)(i.p,{children:["For case where Polyfill is not required for third-party dependencies, you can set ",(0,s.jsx)(i.a,{href:"/configure/app/output/polyfill",children:"'output.polyfill'"})," to ",(0,s.jsx)(i.code,{children:"usage"}),", so that Babel compiles only Polyfill code based on the syntax used in the code."]}),"\n"]})]}),"\n",(0,s.jsxs)(i.h3,{id:"polyfill-at-runtime",children:["Polyfill At Runtime",(0,s.jsx)(i.a,{className:"header-anchor","aria-hidden":"true",href:"#polyfill-at-runtime",children:"#"})]}),"\n",(0,s.jsxs)(i.p,{children:["Modern.js also provides a runtime Polyfill solution based on browser ",(0,s.jsx)(i.a,{href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/User-Agent",target:"_blank",rel:"noopener noreferrer",children:"UA"})," information, which has the following advantages over Babel:"]}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"It will not be inserted into the code, reducing the code ."}),"\n",(0,s.jsx)(i.li,{children:"The same browser will share a Polyfill code. Therefore, with more and more projects, the UA-based Polyfill code will be delivered faster and faster."}),"\n"]}),"\n",(0,s.jsxs)(i.p,{children:["exec ",(0,s.jsx)(i.code,{children:"pnpm run new"})," to enable this features:"]}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-bash",children:"? Please select the operation you want: Enable features\n? Please select the feature name: Enable UA-based Polyfill Feature\n"})}),"\n",(0,s.jsxs)(i.p,{children:["After executing the command, register the Polyfill plugin in ",(0,s.jsx)(i.code,{children:"modern.config.ts"}),":"]}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import { polyfillPlugin } from '@modern-js/plugin-polyfill';\n\nexport default defineConfig({\n  plugins: [..., polyfillPlugin()],\n});\n"})}),"\n",(0,s.jsxs)(i.p,{children:["After configuring ",(0,s.jsx)(i.code,{children:"output.polyfill"})," as ",(0,s.jsx)(i.code,{children:"ua"})," and executing ",(0,s.jsx)(i.code,{children:"pnpm run build & & pnpm run serve"})," to start the server, visiting the page can see that the HTML artifacts contains the following script:"]}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-js",children:'<script src="/__polyfill__" crossorigin><\/script>\n'})}),"\n",(0,s.jsxs)(i.p,{children:["Visit the page ",(0,s.jsx)(i.code,{children:"http://localhost:8080/__polyfill__"})," on Chrome 51 to see:"]}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/aphqeh7uhohpquloj/modern-js/docs/ua-polyfill.png",alt:"ua-polyfill"})}),"\n",(0,s.jsxs)(i.div,{className:"rspress-directive caution",children:[(0,s.jsx)(i.div,{className:"rspress-directive-title",children:"CAUTION"}),(0,s.jsxs)(i.div,{className:"rspress-directive-content",children:[(0,s.jsx)(i.p,{children:"This feature only works when using Modern.js built-in Web Server."}),"\n",(0,s.jsxs)(i.p,{children:["If you need to customize the HTML template, please refer to ",(0,s.jsx)(i.a,{href:"/guides/basic-features/html",children:"HTML Template"}),". Manually modifying the template through html.template / tools.html will cause this feature not work.\n"]})]})]})]})}function t(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:i}=Object.assign({},(0,l.ah)(),e.components);return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(n,{...e})}):n(e)}i.default=t,t.__RSPRESS_PAGE_META={},t.__RSPRESS_PAGE_META["en%2Fguides%2Fadvanced-features%2Fcompatibility.mdx"]={toc:[{text:"Browserslist Configuration",id:"browserslist-configuration",depth:2},{text:"Polyfill",id:"polyfill",depth:2},{text:"Polyfill At Compile",id:"polyfill-at-compile",depth:3},{text:"Polyfill At Runtime",id:"polyfill-at-runtime",depth:3}],title:"Browser Compatibility",frontmatter:{sidebar_position:5}}}}]);