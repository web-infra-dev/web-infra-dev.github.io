"use strict";(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["28554"],{21047:function(e,n,s){s.r(n),s.d(n,{default:function(){return r}});var i=s(38093),t=s(75878);function l(e){let n=Object.assign({h1:"h1",a:"a",ul:"ul",li:"li",strong:"strong",pre:"pre",code:"code",p:"p",div:"div",h3:"h3"},(0,t.ah)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.h1,{id:"outputenableinlinestyles",children:["output.enableInlineStyles",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#outputenableinlinestyles",children:"#"})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"Type:"})}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"type EnableInlineStyles =\n  | boolean\n  | RegExp\n  | ((params: { size: number; name: string }) => boolean);\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Default:"})," ",(0,i.jsx)(n.code,{children:"false"})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Whether to inline output style files (.css files) into HTML with ",(0,i.jsx)(n.code,{children:"<style>"})," tags in production mode."]}),"\n",(0,i.jsx)(n.p,{children:"Note that, with this option on, the style files will no longer be written in dist directory, they will only exist inside the HTML file instead."}),"\n",(0,i.jsxs)(n.div,{className:"rspress-directive tip",children:[(0,i.jsx)(n.div,{className:"rspress-directive-title",children:"TIP"}),(0,i.jsx)(n.div,{className:"rspress-directive-content",children:(0,i.jsxs)(n.p,{children:["When using convention-based routing, you need to set ",(0,i.jsx)(n.a,{href:"https://modernjs.dev/en/configure/app/output/splitRouteChunks.html",target:"_blank",rel:"noopener noreferrer",children:"output.splitRouteChunks"})," to false if this option is turned on.\n"]})})]}),"\n",(0,i.jsxs)(n.h3,{id:"example",children:["Example",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#example",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"By default, we have following output files:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"dist/html/main/index.html\ndist/static/css/style.css\ndist/static/js/main.js\n"})}),"\n",(0,i.jsxs)(n.p,{children:["After turn on the ",(0,i.jsx)(n.code,{children:"output.enableInlineStyles"})," option:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"export default {\n  output: {\n    enableInlineStyles: true,\n  },\n};\n"})}),"\n",(0,i.jsx)(n.p,{children:"The output files will become:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"dist/html/main/index.html\ndist/static/js/main.js\n"})}),"\n",(0,i.jsxs)(n.p,{children:["And ",(0,i.jsx)(n.code,{children:"dist/static/css/style.css"})," will be inlined in ",(0,i.jsx)(n.code,{children:"index.html"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",children:"<html>\n  <head>\n    <style>\n      /* content of dist/static/css/style.css */\n    </style>\n  </head>\n  <body></body>\n</html>\n"})}),"\n",(0,i.jsxs)(n.h3,{id:"using-regexp",children:["Using RegExp",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#using-regexp",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["If you need to inline part of the CSS files, you can set ",(0,i.jsx)(n.code,{children:"enableInlineStyles"})," to a regular expression that matches the URL of the CSS file that needs to be inlined."]}),"\n",(0,i.jsxs)(n.p,{children:["For example, to inline ",(0,i.jsx)(n.code,{children:"main.css"})," into HTML, you can add the following configuration:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"export default {\n  output: {\n    enableInlineStyles: /\\/main\\.\\w+\\.css$/,\n  },\n};\n"})}),"\n",(0,i.jsxs)(n.div,{className:"rspress-directive tip",children:[(0,i.jsx)(n.div,{className:"rspress-directive-title",children:"TIP"}),(0,i.jsx)(n.div,{className:"rspress-directive-content",children:(0,i.jsxs)(n.p,{children:["The production filename includes a hash value by default, such as ",(0,i.jsx)(n.code,{children:"static/css/main.18a568e5.css"}),". Therefore, in regular expressions, ",(0,i.jsx)(n.code,{children:"\\w+"})," is used to match the hash.\n"]})})]}),"\n",(0,i.jsxs)(n.h3,{id:"using-function",children:["Using Function",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#using-function",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["You can also set ",(0,i.jsx)(n.code,{children:"output.enableInlineStyles"})," to a function that accepts the following parameters:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"name"}),": The filename, such as ",(0,i.jsx)(n.code,{children:"static/css/main.18a568e5.css"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"size"}),": The file size in bytes."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"For example, if we want to inline assets that are smaller than 10KB, we can add the following configuration:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"export default {\n  output: {\n    enableInlineStyles({ size }) {\n      return size < 10 * 1000;\n    },\n  },\n};\n"})})]})}function a(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,t.ah)(),e.components);return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}let r=a;a.__RSPRESS_PAGE_META={},a.__RSPRESS_PAGE_META["en%2Fconfigure%2Fapp%2Foutput%2Fenable-inline-styles.mdx"]={toc:[{text:"Example",id:"example",depth:3},{text:"Using RegExp",id:"using-regexp",depth:3},{text:"Using Function",id:"using-function",depth:3}],title:"enableInlineStyles",frontmatter:{title:"enableInlineStyles"}}}}]);