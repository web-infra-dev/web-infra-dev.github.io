/*! For license information please see 45187.72e110ff.js.LICENSE.txt */
(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["45187"],{70943:function(e,s,i){"use strict";i.r(s),i.d(s,{default:function(){return o}});var n=i("9880"),r=i("23169");function c(e){let s=Object.assign({h1:"h1",a:"a",p:"p",code:"code",h2:"h2",pre:"pre",div:"div"},(0,r.useMDXComponents)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(s.h1,{id:"upload",children:["upload/",(0,n.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#upload",children:"#"})]}),"\n",(0,n.jsxs)(s.p,{children:["Any static assets can be placed in the ",(0,n.jsx)(s.code,{children:"upload/"})," directory."]}),"\n",(0,n.jsxs)(s.h2,{id:"description",children:["Description",(0,n.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#description",children:"#"})]}),"\n",(0,n.jsxs)(s.p,{children:["In the development environment, the static assets in this directory will be hosted under the ",(0,n.jsx)(s.code,{children:"/upload"})," path. After building the application, the files in this directory will be copied to the dist directory."]}),"\n",(0,n.jsx)(s.p,{children:"This file convention is mainly used for developers to use plugins to proactively upload static assets to the CDN."}),"\n",(0,n.jsxs)(s.h2,{id:"scenarios",children:["Scenarios",(0,n.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#scenarios",children:"#"})]}),"\n",(0,n.jsxs)(s.p,{children:["For example, SDKs for project use only, such as ",(0,n.jsx)(s.code,{children:"google-analysis.js"})," (usually requires HTTP caching)."]}),"\n",(0,n.jsx)(s.p,{children:"Pictures, font files, common CSS, etc."}),"\n",(0,n.jsxs)(s.h2,{id:"code-compression",children:["Code Compression",(0,n.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#code-compression",children:"#"})]}),"\n",(0,n.jsxs)(s.p,{children:["If the file in the directory is a ",(0,n.jsx)(s.code,{children:".js"})," file, it will be automatically compressed during production environment construction."]}),"\n",(0,n.jsxs)(s.p,{children:["If the file ends with ",(0,n.jsx)(s.code,{children:".min.js"}),", it will not be compressed."]}),"\n",(0,n.jsxs)(s.h2,{id:"more-usage",children:["More Usage",(0,n.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#more-usage",children:"#"})]}),"\n",(0,n.jsxs)(s.p,{children:["In React components, you can add this prefix through ",(0,n.jsx)(s.a,{href:"/guides/basic-features/env-vars#asset_prefix",children:"Environment Variables"}),":"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-tsx",children:"export default () => {\n  return (\n    <img src={`${process.env.ASSET_PREFIX}/upload/banner.png`}></img>\n  );\n};\n"})}),"\n",(0,n.jsxs)(s.p,{children:["In addition, whether it is in ",(0,n.jsx)(s.a,{href:"/guides/basic-features/html",children:"Custom HTML"})," or any HTML file under ",(0,n.jsx)(s.a,{href:"/apis/app/hooks/config/public",children:(0,n.jsx)(s.code,{children:"config/public/"})}),", you can directly use HTML tags to reference resources in the ",(0,n.jsx)(s.code,{children:"config/upload/"})," directory:"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-html",children:'<script src="/upload/index.js"><\/script>\n'})}),"\n",(0,n.jsxs)(s.p,{children:["If you set the ",(0,n.jsx)(s.a,{href:"/configure/app/dev/asset-prefix",children:(0,n.jsx)(s.code,{children:"dev.assetPrefix"})})," or ",(0,n.jsx)(s.a,{href:"/configure/app/output/asset-prefix",children:(0,n.jsx)(s.code,{children:"output.assetPrefix"})})," prefix, you can also use template syntax to add the prefix directly:"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-html",children:'<script src="<%=assetPrefix %>/upload/index.js"><\/script>\n'})}),"\n",(0,n.jsxs)(s.div,{className:"rspress-directive info",children:[(0,n.jsx)(s.div,{className:"rspress-directive-title",children:"INFO"}),(0,n.jsxs)(s.div,{className:"rspress-directive-content",children:[(0,n.jsxs)(s.p,{children:["Modern.js does not support using files under ",(0,n.jsx)(s.code,{children:"config/upload/"})," through URLs in ",(0,n.jsx)(s.code,{children:"config/public/*.css"})," (such as background-image)."]}),"\n"]})]})]})}function d(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:s}=Object.assign({},(0,r.useMDXComponents)(),e.components);return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}var o=d;d.__RSPRESS_PAGE_META={},d.__RSPRESS_PAGE_META["en%2Fapis%2Fapp%2Fhooks%2Fconfig%2Fupload.mdx"]={toc:[{text:"Description",id:"description",depth:2},{text:"Scenarios",id:"scenarios",depth:2},{text:"Code Compression",id:"code-compression",depth:2},{text:"More Usage",id:"more-usage",depth:2}],title:"upload/",frontmatter:{title:"upload/",sidebar_position:4}}}}]);