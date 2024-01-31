/*! For license information please see 4292.31f1dcfd.js.LICENSE.txt */
(self.webpackChunk_modern_js_builder_doc=self.webpackChunk_modern_js_builder_doc||[]).push([["4292"],{9556:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return j}});var t=r("39980"),s=r("96954"),i=r("54315"),l=r("81275"),d=r("8290"),c=r("83978"),o=r("79554"),a=r("7736"),h=r("47113"),p=r("14923");function u(e){let n=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2"},(0,s.useMDXComponents)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.h1,{id:"dev-config",children:["Dev Config",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#dev-config",children:"#"})]}),"\n",(0,t.jsx)(n.p,{children:"This section describes some dev configurations in Modern.js Builder."}),"\n",(0,t.jsxs)(n.h2,{id:"devassetprefix",children:["dev.assetPrefix",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#devassetprefix",children:"#"})]}),"\n","\n",(0,t.jsx)(i.default,{}),"\n",(0,t.jsxs)(n.h2,{id:"devbeforestarturl",children:["dev.beforeStartUrl",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#devbeforestarturl",children:"#"})]}),"\n","\n",(0,t.jsx)(l.default,{}),"\n",(0,t.jsxs)(n.h2,{id:"devhmr",children:["dev.hmr",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#devhmr",children:"#"})]}),"\n","\n",(0,t.jsx)(d.default,{}),"\n",(0,t.jsxs)(n.h2,{id:"devhost",children:["dev.host",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#devhost",children:"#"})]}),"\n","\n",(0,t.jsx)(c.default,{}),"\n",(0,t.jsxs)(n.h2,{id:"devhttps",children:["dev.https",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#devhttps",children:"#"})]}),"\n","\n",(0,t.jsx)(o.default,{}),"\n",(0,t.jsxs)(n.h2,{id:"devport",children:["dev.port",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#devport",children:"#"})]}),"\n","\n",(0,t.jsx)(a.default,{}),"\n",(0,t.jsxs)(n.h2,{id:"devprogressbar",children:["dev.progressBar",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#devprogressbar",children:"#"})]}),"\n","\n",(0,t.jsx)(h.default,{}),"\n",(0,t.jsxs)(n.h2,{id:"devstarturl",children:["dev.startUrl",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#devstarturl",children:"#"})]}),"\n","\n",(0,t.jsx)(p.default,{})]})}function x(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,s.useMDXComponents)(),e.components);return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}var j=x;x.__RSPRESS_PAGE_META={},x.__RSPRESS_PAGE_META["en%2Fapi%2Fconfig-dev.mdx"]={toc:[{text:"dev.assetPrefix",id:"devassetprefix",depth:2},{text:"dev.beforeStartUrl",id:"devbeforestarturl",depth:2},{text:"dev.hmr",id:"devhmr",depth:2},{text:"dev.host",id:"devhost",depth:2},{text:"dev.https",id:"devhttps",depth:2},{text:"dev.port",id:"devport",depth:2},{text:"dev.progressBar",id:"devprogressbar",depth:2},{text:"dev.startUrl",id:"devstarturl",depth:2}],title:"Dev Config",frontmatter:{extractApiHeaders:[2]}}},54315:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return d}});var t=r("39980"),s=r("96954");function i(e){let n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",h3:"h3",a:"a",pre:"pre"},(0,s.useMDXComponents)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Type:"})," ",(0,t.jsx)(n.code,{children:"boolean | string"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Default:"})," ",(0,t.jsx)(n.code,{children:"'/'"})]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Set the URL prefix of static assets in the development environment."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"assetPrefix"})," will affect the URLs of most of the static assets, including JavaScript files, CSS files, images, videos, etc. If an incorrect value is specified, you'll receive 404 errors while loading these resources."]}),"\n",(0,t.jsxs)(n.p,{children:["This config is only used in the development environment. In the production environment, please use the ",(0,t.jsx)(n.code,{children:"output.assetPrefix"})," to set the URL prefix."]}),"\n",(0,t.jsxs)(n.h3,{id:"boolean-type",children:["Boolean Type",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#boolean-type",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:["If ",(0,t.jsx)(n.code,{children:"assetPrefix"})," is set to ",(0,t.jsx)(n.code,{children:"true"}),", the URL prefix will be ",(0,t.jsx)(n.code,{children:"http://localhost:port/"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"export default {\n  dev: {\n    assetPrefix: true,\n  },\n};\n"})}),"\n",(0,t.jsx)(n.p,{children:"The script URL will be:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:'<script defer src="http://localhost:8080/static/js/main.js"><\/script>\n'})}),"\n",(0,t.jsxs)(n.p,{children:["If ",(0,t.jsx)(n.code,{children:"assetPrefix"})," is set to ",(0,t.jsx)(n.code,{children:"false"})," or not set, ",(0,t.jsx)(n.code,{children:"/"})," is used as the default value."]}),"\n",(0,t.jsxs)(n.h3,{id:"string-type",children:["String type",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#string-type",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:["When the value of ",(0,t.jsx)(n.code,{children:"assetPrefix"})," is ",(0,t.jsx)(n.code,{children:"string"})," type, the string will be used as the URL prefix:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"export default {\n  dev: {\n    assetPrefix: 'http://example.com/assets/',\n  },\n};\n"})}),"\n",(0,t.jsx)(n.p,{children:"The script URL will be:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:'<script defer src="http://example.com/assets/static/js/main.js"><\/script>\n'})}),"\n",(0,t.jsxs)(n.h3,{id:"differences-from-native-configuration",children:["Differences from Native Configuration",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#differences-from-native-configuration",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"dev.assetPrefix"})," corresponds to the following native configurations:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://webpack.js.org/guides/public-path/",target:"_blank",rel:"noopener noreferrer",children:"output.publicPath"})," configuration in webpack."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://www.rspack.dev/config/output.html#outputpublicpath",target:"_blank",rel:"noopener noreferrer",children:"output.publicPath"})," configuration in Rspack."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"The differences from the native configuration are as follows:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"dev.assetPrefix"})," only takes effect in the development environment."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"dev.assetPrefix"})," automatically appends a trailing ",(0,t.jsx)(n.code,{children:"/"})," by default."]}),"\n",(0,t.jsxs)(n.li,{children:["The value of ",(0,t.jsx)(n.code,{children:"dev.assetPrefix"})," is written to the ",(0,t.jsx)(n.code,{children:"process.env.ASSET_PREFIX"})," environment variable."]}),"\n"]})]})}function l(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,s.useMDXComponents)(),e.components);return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(i,{...e})}):i(e)}var d=l;l.__RSPRESS_PAGE_META={},l.__RSPRESS_PAGE_META["en%2Fconfig%2Fdev%2FassetPrefix.md"]={toc:[{text:"Boolean Type",id:"boolean-type",depth:3},{text:"String type",id:"string-type",depth:3},{text:"Differences from Native Configuration",id:"differences-from-native-configuration",depth:3}],title:"",frontmatter:{}}},81275:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return d}});var t=r("39980"),s=r("96954");function i(e){let n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",pre:"pre"},(0,s.useMDXComponents)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Type:"})," ",(0,t.jsx)(n.code,{children:"() => Promise<void> | void"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Default:"})," ",(0,t.jsx)(n.code,{children:"undefined"})]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"dev.beforeStartUrl"})," is used to execute a callback function before opening the ",(0,t.jsx)(n.code,{children:"startUrl"}),", this config needs to be used together with ",(0,t.jsx)(n.code,{children:"dev.startUrl"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"export default {\n  dev: {\n    startUrl: true,\n    beforeStartUrl: async () => {\n      await doSomeThing();\n    },\n  },\n};\n"})})]})}function l(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,s.useMDXComponents)(),e.components);return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(i,{...e})}):i(e)}var d=l;l.__RSPRESS_PAGE_META={},l.__RSPRESS_PAGE_META["en%2Fconfig%2Fdev%2FbeforeStartUrl.md"]={toc:[],title:"",frontmatter:{}}},8290:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return d}});var t=r("39980"),s=r("96954");function i(e){let n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",pre:"pre"},(0,s.useMDXComponents)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Type:"})," ",(0,t.jsx)(n.code,{children:"boolean"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Default:"})," ",(0,t.jsx)(n.code,{children:"true"})]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Whether to enable Hot Module Replacement."}),"\n",(0,t.jsxs)(n.p,{children:["If ",(0,t.jsx)(n.code,{children:"hmr"})," is set to ",(0,t.jsx)(n.code,{children:"false"}),", the HMR and react-refresh will no longer work."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"export default {\n  dev: {\n    hmr: false,\n  },\n};\n"})})]})}function l(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,s.useMDXComponents)(),e.components);return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(i,{...e})}):i(e)}var d=l;l.__RSPRESS_PAGE_META={},l.__RSPRESS_PAGE_META["en%2Fconfig%2Fdev%2Fhmr.md"]={toc:[],title:"",frontmatter:{}}},83978:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return d}});var t=r("39980"),s=r("96954");function i(e){let n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",pre:"pre"},(0,s.useMDXComponents)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Type:"})," ",(0,t.jsx)(n.code,{children:"string"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Default:"})," ",(0,t.jsx)(n.code,{children:"0.0.0.0"})]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Specify the host that the dev server listens to."}),"\n",(0,t.jsxs)(n.p,{children:["By default, the dev server will listen to ",(0,t.jsx)(n.code,{children:"0.0.0.0"}),", which means listening to all network interfaces, including ",(0,t.jsx)(n.code,{children:"localhost"})," and public network addresses."]}),"\n",(0,t.jsxs)(n.p,{children:["If you want the dev server to listen only on ",(0,t.jsx)(n.code,{children:"localhost"}),", you can set it to:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"export default {\n  dev: {\n    host: 'localhost',\n  },\n};\n"})})]})}function l(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,s.useMDXComponents)(),e.components);return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(i,{...e})}):i(e)}var d=l;l.__RSPRESS_PAGE_META={},l.__RSPRESS_PAGE_META["en%2Fconfig%2Fdev%2Fhost.md"]={toc:[],title:"",frontmatter:{}}},79554:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return d}});var t=r("39980"),s=r("96954");function i(e){let n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",pre:"pre",h4:"h4",a:"a",div:"div"},(0,s.useMDXComponents)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Type:"})," ",(0,t.jsx)(n.code,{children:"boolean | { key: string; cert: string }"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Default:"})," ",(0,t.jsx)(n.code,{children:"false"})]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"After configuring this option, you can enable HTTPS Dev Server, and disabling the HTTP Dev Server."}),"\n",(0,t.jsx)(n.p,{children:"HTTP:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"  > Local: http://localhost:8080/\n  > Network: http://192.168.0.1:8080/\n"})}),"\n",(0,t.jsx)(n.p,{children:"HTTPS:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"  > Local: https://localhost:8080/\n  > Network: https://192.168.0.1:8080/\n"})}),"\n",(0,t.jsxs)(n.h4,{id:"automatically-generate-certificates",children:["Automatically generate certificates",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#automatically-generate-certificates",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:["You can directly set ",(0,t.jsx)(n.code,{children:"https"})," to ",(0,t.jsx)(n.code,{children:"true"}),", Builder will automatically generate the HTTPS certificate based on ",(0,t.jsx)(n.a,{href:"https://github.com/davewasmer/devcert",target:"_blank",rel:"noopener noreferrer",children:"devcert"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["When using this method, you need to manually install the ",(0,t.jsx)(n.a,{href:"https://github.com/davewasmer/devcert",target:"_blank",rel:"noopener noreferrer",children:"devcert"})," dependency in your project:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"# npm\nnpm install devcert@1.2.2 -D\n\n# yarn\nyarn add devcert@1.2.2 -D\n\n# pnpm\npnpm add devcert@1.2.2 -D\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Then configure ",(0,t.jsx)(n.code,{children:"dev.https"})," to ",(0,t.jsx)(n.code,{children:"true"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"export default {\n  dev: {\n    https: true,\n  },\n};\n"})}),"\n",(0,t.jsx)(n.p,{children:"The devcert has some limitations, it does not currently support IP addresses yet."}),"\n",(0,t.jsxs)(n.div,{className:"rspress-directive tip",children:[(0,t.jsx)(n.div,{className:"rspress-directive-title",children:"TIP"}),(0,t.jsx)(n.div,{className:"rspress-directive-content",children:(0,t.jsxs)(n.p,{children:["The https proxy automatically installs the certificate and needs root authority, please enter the password according to the prompt.",(0,t.jsx)(n.strong,{children:"The password is only used to trust the certificate, and will not be leaked or be used elsewhere"}),".\n"]})})]}),"\n",(0,t.jsxs)(n.h4,{id:"manually-set-the-certificate",children:["Manually set the certificate",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#manually-set-the-certificate",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:["You can also manually pass in the certificate and the private key required in the ",(0,t.jsx)(n.code,{children:"dev.https"})," option. This parameter will be directly passed to the createServer method of the https module in Node.js."]}),"\n",(0,t.jsxs)(n.p,{children:["For details, please refer to ",(0,t.jsx)(n.a,{href:"https://nodejs.org/api/https.html#https_https_createserver_options_requestlistener",target:"_blank",rel:"noopener noreferrer",children:"https.createServer"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"import fs from 'fs';\n\nexport default {\n  dev: {\n    https: {\n      key: fs.readFileSync('certificates/private.pem'),\n      cert: fs.readFileSync('certificates/public.pem'),\n    },\n  },\n};\n"})})]})}function l(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,s.useMDXComponents)(),e.components);return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(i,{...e})}):i(e)}var d=l;l.__RSPRESS_PAGE_META={},l.__RSPRESS_PAGE_META["en%2Fconfig%2Fdev%2Fhttps.md"]={toc:[{text:"Automatically generate certificates",id:"automatically-generate-certificates",depth:4},{text:"Manually set the certificate",id:"manually-set-the-certificate",depth:4}],title:"",frontmatter:{}}},7736:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return d}});var t=r("39980"),s=r("96954");function i(e){let n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",h3:"h3",a:"a",pre:"pre"},(0,s.useMDXComponents)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Type:"})," ",(0,t.jsx)(n.code,{children:"number"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Default:"})," ",(0,t.jsx)(n.code,{children:"8080"})]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Specify a port number for Dev Server to listen."}),"\n",(0,t.jsxs)(n.p,{children:["By default, Dev Server listens on port ",(0,t.jsx)(n.code,{children:"8080"})," and automatically increments the port number when the port is occupied."]}),"\n",(0,t.jsxs)(n.h3,{id:"example",children:["Example",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#example",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:["Set the port to ",(0,t.jsx)(n.code,{children:"3000"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"export default {\n  dev: {\n    port: 3000,\n  },\n};\n"})})]})}function l(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,s.useMDXComponents)(),e.components);return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(i,{...e})}):i(e)}var d=l;l.__RSPRESS_PAGE_META={},l.__RSPRESS_PAGE_META["en%2Fconfig%2Fdev%2Fport.md"]={toc:[{text:"Example",id:"example",depth:3}],title:"",frontmatter:{}}},47113:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return d}});var t=r("39980"),s=r("96954");function i(e){let n=Object.assign({ul:"ul",li:"li",strong:"strong",pre:"pre",code:"code",p:"p"},(0,s.useMDXComponents)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"Type:"})}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"type ProgressBar =\n  | boolean\n  | {\n      id?: string;\n    };\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Default:"})," ",(0,t.jsx)(n.code,{children:"true"})]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Whether to display progress bar during compilation."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"export default {\n  dev: {\n    progressBar: false,\n  },\n};\n"})}),"\n",(0,t.jsxs)(n.p,{children:["If you need to modify the text displayed on the left side of the progress bar, you can set the ",(0,t.jsx)(n.code,{children:"id"})," option:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"export default {\n  dev: {\n    progressBar: {\n      id: 'Some Text',\n    },\n  },\n};\n"})})]})}function l(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,s.useMDXComponents)(),e.components);return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(i,{...e})}):i(e)}var d=l;l.__RSPRESS_PAGE_META={},l.__RSPRESS_PAGE_META["en%2Fconfig%2Fdev%2FprogressBar.md"]={toc:[],title:"",frontmatter:{}}},14923:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return d}});var t=r("39980"),s=r("96954");function i(e){let n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",pre:"pre",h3:"h3",a:"a"},(0,s.useMDXComponents)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Type:"})," ",(0,t.jsx)(n.code,{children:"boolean | string | string[] | undefined"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Default:"})," ",(0,t.jsx)(n.code,{children:"undefined"})]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"dev.startUrl"})," is used to set the URL of the page that automatically opens in the browser when Dev Server starts."]}),"\n",(0,t.jsx)(n.p,{children:"By default, no page will be opened."}),"\n",(0,t.jsx)(n.p,{children:"You can set it to the following values:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"export default {\n  dev: {\n    // Open the project's default preview page, equivalent to `http://localhost:<port>`\n    startUrl: true,\n    // Open the specified page\n    startUrl: 'http://localhost:8080',\n    // Open multiple pages\n    startUrl: ['http://localhost:8080', 'http://localhost:8080/about'],\n  },\n};\n"})}),"\n",(0,t.jsxs)(n.h3,{id:"port-placeholder",children:["Port placeholder",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#port-placeholder",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:["Since the port number may change, you can use the ",(0,t.jsx)(n.code,{children:"<port>"})," placeholder to refer to the current port number, and Builder will automatically replace the placeholder with the actual listening port number."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"export default {\n  dev: {\n    startUrl: 'http://localhost:<port>/home',\n  },\n};\n"})}),"\n",(0,t.jsxs)(n.h3,{id:"open-the-specified-browser",children:["Open the specified browser",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#open-the-specified-browser",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:["On MacOS, you can open the specified browser when Dev Server starts, by set environment variable ",(0,t.jsx)(n.code,{children:"BROWSER"}),", support values:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Google Chrome Canary"}),"\n",(0,t.jsx)(n.li,{children:"Google Chrome Dev"}),"\n",(0,t.jsx)(n.li,{children:"Google Chrome Beta"}),"\n",(0,t.jsx)(n.li,{children:"Google Chrome"}),"\n",(0,t.jsx)(n.li,{children:"Microsoft Edge"}),"\n",(0,t.jsx)(n.li,{children:"Brave Browser"}),"\n",(0,t.jsx)(n.li,{children:"Vivaldi"}),"\n",(0,t.jsx)(n.li,{children:"Chromium"}),"\n"]})]})}function l(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,s.useMDXComponents)(),e.components);return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(i,{...e})}):i(e)}var d=l;l.__RSPRESS_PAGE_META={},l.__RSPRESS_PAGE_META["en%2Fconfig%2Fdev%2FstartUrl.md"]={toc:[{text:"Port placeholder",id:"port-placeholder",depth:3},{text:"Open the specified browser",id:"open-the-specified-browser",depth:3}],title:"",frontmatter:{}}}}]);