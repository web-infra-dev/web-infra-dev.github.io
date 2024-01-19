/*! For license information please see 4128.7f76c55c.js.LICENSE.txt */
(self.webpackChunk_modern_js_builder_doc=self.webpackChunk_modern_js_builder_doc||[]).push([["4128"],{94620:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return i}});var a=n("39980"),s=n("96954");function r(e){let t=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",pre:"pre",code:"code",h3:"h3",div:"div"},(0,s.useMDXComponents)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.h1,{id:"html-template",children:["HTML Template",(0,a.jsx)(t.a,{className:"header-anchor","aria-hidden":"true",href:"#html-template",children:"#"})]}),"\n",(0,a.jsx)(t.p,{children:"During the build process, Builder will compile based on the HTML template and template parameters to generate several HTML files."}),"\n",(0,a.jsx)(t.p,{children:"Builder provides some configs to set the HTML template. Through this chapter, you can learn the basic usage of these configs."}),"\n",(0,a.jsxs)(t.h2,{id:"set-template",children:["Set Template",(0,a.jsx)(t.a,{className:"header-anchor","aria-hidden":"true",href:"#set-template",children:"#"})]}),"\n",(0,a.jsx)(t.p,{children:"HTML templates are usually predefined by the upper framework."}),"\n",(0,a.jsxs)(t.p,{children:["For example, in the Modern.js framework, the HTML template is preset by default, and users can also customize the content of the template. You can read the ",(0,a.jsx)(t.a,{href:"https://modernjs.dev/en/guides/basic-features/html.html",target:"_blank",rel:"noopener noreferrer",children:'"Modern.js - HTML Template"'})," chapter to learn about it."]}),"\n",(0,a.jsxs)(t.p,{children:["In Builder, you can use ",(0,a.jsx)(t.a,{href:"/en/api/config-html#htmltemplate",children:"html.template"})," and ",(0,a.jsx)(t.a,{href:"/en/api/config-html#htmltemplatebyentries",children:"html.templateByEntries"})," configs to define the path to the custom HTML template."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-ts",children:"export default {\n  html: {\n    template: './static/index.html',\n  },\n};\n"})}),"\n",(0,a.jsxs)(t.h2,{id:"set-page-title",children:["Set Page Title",(0,a.jsx)(t.a,{className:"header-anchor","aria-hidden":"true",href:"#set-page-title",children:"#"})]}),"\n",(0,a.jsxs)(t.p,{children:["You can set the HTML ",(0,a.jsx)(t.code,{children:"<title>"})," tag through the ",(0,a.jsx)(t.a,{href:"/en/api/config-html#htmltitle",children:"html.title"})," and ",(0,a.jsx)(t.a,{href:"/en/api/config-html#htmltitlebyentries",children:"html.titleByEntries"})," configs."]}),"\n",(0,a.jsxs)(t.p,{children:["When there is only one page in your project, just use the ",(0,a.jsx)(t.code,{children:"html.title"})," setting directly:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-ts",children:"export default {\n  html: {\n    title: 'example',\n  },\n};\n"})}),"\n",(0,a.jsxs)(t.p,{children:["When there are multiple pages in your project, please use ",(0,a.jsx)(t.code,{children:"html.titleByEntries"})," to set corresponding titles for different pages. ",(0,a.jsx)(t.code,{children:"html.titleByEntries"}),' uses the page\'s "entry name" as the key.']}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-ts",children:"export default {\n  html: {\n    titleByEntries: {\n      foo: 'Foo',\n      bar: 'Bar',\n    },\n  },\n};\n"})}),"\n",(0,a.jsxs)(t.h2,{id:"set-page-icon",children:["Set Page Icon",(0,a.jsx)(t.a,{className:"header-anchor","aria-hidden":"true",href:"#set-page-icon",children:"#"})]}),"\n",(0,a.jsxs)(t.p,{children:["Builder supports setting ",(0,a.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Glossary/Favicon",target:"_blank",rel:"noopener noreferrer",children:"favicon"})," icon and ",(0,a.jsx)(t.a,{href:"https://webhint.io/docs/user-guide/hints/hint-apple-touch-icons/",target:"_blank",rel:"noopener noreferrer",children:"apple-touch-icon"})," icon."]}),"\n",(0,a.jsxs)(t.p,{children:["You can set the favicon through the ",(0,a.jsx)(t.a,{href:"/en/api/config-html#htmlfavicon",children:"html.favicon"})," and ",(0,a.jsx)(t.a,{href:"/en/api/config-html#htmlfaviconbyentries",children:"html.faviconByEntries"})," configs."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-ts",children:"export default {\n  html: {\n    favicon: './src/assets/icon.png',\n  },\n};\n"})}),"\n",(0,a.jsxs)(t.p,{children:["You can also set the apple-touch-icon for iOS system through the ",(0,a.jsx)(t.a,{href:"/en/api/config-html#htmlappicon",children:"html.appIcon"})," config."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-ts",children:"export default {\n  html: {\n    appIcon: './src/assets/icon.png',\n  },\n};\n"})}),"\n",(0,a.jsxs)(t.h2,{id:"set-meta-tags",children:["Set Meta Tags",(0,a.jsx)(t.a,{className:"header-anchor","aria-hidden":"true",href:"#set-meta-tags",children:"#"})]}),"\n",(0,a.jsxs)(t.p,{children:["You can set the meta tags through the ",(0,a.jsx)(t.a,{href:"/en/api/config-html#htmlmeta",children:"html.meta"})," and ",(0,a.jsx)(t.a,{href:"/en/api/config-html#htmlmetabyentries",children:"html.metaByEntries"})," configs."]}),"\n",(0,a.jsx)(t.p,{children:"For example to setting description:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-ts",children:"export default {\n  html: {\n    meta: {\n      description: 'a description of the page',\n    },\n  },\n};\n"})}),"\n",(0,a.jsx)(t.p,{children:"The generated meta tag in HTML is:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-html",children:'<meta name="description" content="a description of the page" />\n'})}),"\n",(0,a.jsxs)(t.h2,{id:"set-template-parameters",children:["Set Template Parameters",(0,a.jsx)(t.a,{className:"header-anchor","aria-hidden":"true",href:"#set-template-parameters",children:"#"})]}),"\n",(0,a.jsx)(t.p,{children:"In HTML templates, you can use a variety of template parameters. The template parameters injected by Builder by default include:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-ts",children:"type DefaultParameters = {\n  meta: string; // corresponding to html.meta config\n  title: string; // corresponding to html.title config\n  mountId: string; // corresponding to html.mountId config\n  entryName: string; // entry name\n  assetPrefix: string; // corresponding to output.assetPrefix config\n  compilation: webpack.Compilation; // Compilation object corresponding to webpack\n  webpackConfig: config; // webpack config\n  // htmlWebpackPlugin built-in parameters\n  // See https://github.com/jantimon/html-webpack-plugin for details\n  htmlWebpackPlugin: {\n    tags: object;\n    files: object;\n    options: object;\n  };\n};\n"})}),"\n",(0,a.jsxs)(t.p,{children:["You can also use the ",(0,a.jsx)(t.a,{href:"/en/api/config-html#htmltemplateparameters",children:"html.templateParameters"})," and ",(0,a.jsx)(t.a,{href:"/en/api/config-html#htmltemplateparametersbyentries",children:"html.templateParametersByEntries"})," configs to pass in custom template parameters."]}),"\n",(0,a.jsx)(t.p,{children:"For example:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-ts",children:"export default {\n  html: {\n    templateParameters: {\n      text: 'World',\n    },\n  },\n};\n"})}),"\n",(0,a.jsxs)(t.p,{children:["Then you can read parameters in the HTML template with ",(0,a.jsx)(t.code,{children:"<%= text %>"}),":"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",children:"<div>hello <%= text %>!</div>\n"})}),"\n",(0,a.jsx)(t.p,{children:"The generated HTML code is as follows:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",children:"<div>hello world!</div>\n"})}),"\n",(0,a.jsxs)(t.h2,{id:"template-engine",children:["Template Engine",(0,a.jsx)(t.a,{className:"header-anchor","aria-hidden":"true",href:"#template-engine",children:"#"})]}),"\n",(0,a.jsxs)(t.p,{children:["Builder supports using ",(0,a.jsx)(t.a,{href:"https://www.lodashjs.com/docs/lodash.template",target:"_blank",rel:"noopener noreferrer",children:"Lodash Template"}),", ",(0,a.jsx)(t.a,{href:"https://ejs.co/",target:"_blank",rel:"noopener noreferrer",children:"EJS"}),", ",(0,a.jsx)(t.a,{href:"https://pugjs.org/",target:"_blank",rel:"noopener noreferrer",children:"Pug"})," as template engines, the most basic Lodash Template is used as the default template engine."]}),"\n",(0,a.jsxs)(t.h3,{id:"lodash-template",children:[(0,a.jsx)(t.a,{href:"https://www.lodashjs.com/docs/lodash.template",target:"_blank",rel:"noopener noreferrer",children:"Lodash Template"}),(0,a.jsx)(t.a,{className:"header-anchor","aria-hidden":"true",href:"#lodash-template",children:"#"})]}),"\n",(0,a.jsxs)(t.p,{children:["When the suffix of the template is ",(0,a.jsx)(t.code,{children:".html"}),", Builder will use Lodash Template to compile it."]}),"\n",(0,a.jsxs)(t.p,{children:["For example, if you define a ",(0,a.jsx)(t.code,{children:"text"})," parameter in a template with a value of ",(0,a.jsx)(t.code,{children:"'world'"}),", Builder will automatically replace ",(0,a.jsx)(t.code,{children:"<%= text %>"})," with the value."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-html",children:"\x3c!-- input -->\n<div>hello <%= text %>!</div>\n\n\x3c!-- output -->\n<div>hello world!</div>\n"})}),"\n",(0,a.jsxs)(t.p,{children:["Please read the ",(0,a.jsx)(t.a,{href:"https://www.lodashjs.com/docs/lodash.template",target:"_blank",rel:"noopener noreferrer",children:"Lodash Template"})," documentation for details."]}),"\n",(0,a.jsxs)(t.h3,{id:"ejs",children:[(0,a.jsx)(t.a,{href:"https://ejs.co/",target:"_blank",rel:"noopener noreferrer",children:"EJS"}),(0,a.jsx)(t.a,{className:"header-anchor","aria-hidden":"true",href:"#ejs",children:"#"})]}),"\n",(0,a.jsxs)(t.p,{children:["When the suffix of the template is ",(0,a.jsx)(t.code,{children:".ejs"}),", Builder will use the EJS template engine to compile it. EJS is a simple templating language that lets you generate HTML markup with plain JavaScript."]}),"\n",(0,a.jsxs)(t.p,{children:["For example, you can first refer to a ",(0,a.jsx)(t.code,{children:".ejs"})," template through the ",(0,a.jsx)(t.a,{href:"/en/api/config-html#htmltemplate",children:"html.template"})," config:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-ts",children:"export default {\n  html: {\n    template: './static/index.ejs',\n  },\n};\n"})}),"\n",(0,a.jsxs)(t.p,{children:["Then define a ",(0,a.jsx)(t.code,{children:"user"})," parameter in the template with a value of ",(0,a.jsx)(t.code,{children:"{ name: 'Jack' }"}),". Builder will automatically replace ",(0,a.jsx)(t.code,{children:"<%= user.name %>"})," with the value."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-html",children:"\x3c!-- input -->\n<% if (user) { %>\n<h2><%= user.name %></h2>\n<% } %>\n\n\x3c!-- output -->\n<h2>Jack</h2>\n"})}),"\n",(0,a.jsxs)(t.p,{children:["Please read the ",(0,a.jsx)(t.a,{href:"https://ejs.co/",target:"_blank",rel:"noopener noreferrer",children:"EJS"})," documentation for details."]}),"\n",(0,a.jsxs)(t.h3,{id:"pug",children:[(0,a.jsx)(t.a,{href:"https://pugjs.org/",target:"_blank",rel:"noopener noreferrer",children:"Pug"}),(0,a.jsx)(t.a,{className:"header-anchor","aria-hidden":"true",href:"#pug",children:"#"})]}),"\n",(0,a.jsxs)(t.p,{children:["When the suffix of the template is ",(0,a.jsx)(t.code,{children:".pug"}),", Builder will use the Pug template engine to compile it. Pug is a robust, elegant, feature rich template engine for Node.js."]}),"\n",(0,a.jsxs)(t.p,{children:["Before using the Pug template, you need to enable the ",(0,a.jsx)(t.a,{href:"/en/api/config-tools#toolspug",children:"tools.pug"})," config, and define the ",(0,a.jsx)(t.a,{href:"/en/api/config-html#htmltemplate",children:"html.template"})," config to reference a ",(0,a.jsx)(t.code,{children:".pug"})," template:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-ts",children:"export default {\n  html: {\n    template: './static/index.pug',\n  },\n  tools: {\n    pug: true,\n  },\n};\n"})}),"\n",(0,a.jsxs)(t.p,{children:["Then you can use Pug syntax in ",(0,a.jsx)(t.code,{children:".pug"})," templates:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-html",children:"\x3c!-- input -->\np Hello #{text}!\n\n\x3c!-- output -->\n<p>Hello World!</p>\n"})}),"\n",(0,a.jsxs)(t.p,{children:["Please read the ",(0,a.jsx)(t.a,{href:"https://pugjs.org/",target:"_blank",rel:"noopener noreferrer",children:"Pug"})," documentation for details."]}),"\n",(0,a.jsxs)(t.h2,{id:"injecting-tags",children:["Injecting Tags",(0,a.jsx)(t.a,{className:"header-anchor","aria-hidden":"true",href:"#injecting-tags",children:"#"})]}),"\n",(0,a.jsxs)(t.p,{children:["The ",(0,a.jsx)(t.code,{children:"html.tags"})," option can be configured to insert any tags into the final generated HTML product."]}),"\n",(0,a.jsxs)(t.div,{className:"rspress-directive warning",children:[(0,a.jsx)(t.div,{className:"rspress-directive-title",children:"Usage Cases"}),(0,a.jsx)(t.div,{className:"rspress-directive-content",children:(0,a.jsx)(t.p,{children:"The artifacts of the web application will eventually be referenced directly or indirectly by HTML entries, but most of the time injecting tags directly into HTML is not preferred."})})]}),"\n",(0,a.jsxs)(t.p,{children:["All tags that need to be injected into HTML can be accessed in the template file via the variable ",(0,a.jsx)(t.code,{children:"htmlWebpackPlugin.tags"}),"."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-html",children:"<html>\n  <head>\n    <%= htmlWebpackPlugin.tags.headTags %>\n  </head>\n  <body>\n    <%= htmlWebpackPlugin.tags.bodyTags %>\n  </body>\n</html>\n"})}),"\n",(0,a.jsxs)(t.p,{children:["The purpose of ",(0,a.jsx)(t.code,{children:"html.tags"})," is to adjust these template variables and thus modify the HTML, as defined in ",(0,a.jsx)(t.a,{href:"/api/config-html#htmltags",children:"API References"}),"."]}),"\n",(0,a.jsxs)(t.h3,{id:"tag-object",children:["Tag Object",(0,a.jsx)(t.a,{className:"header-anchor","aria-hidden":"true",href:"#tag-object",children:"#"})]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-ts",children:"export default {\n  output: {\n    assetPrefix: '//example.com/'\n  },\n  html: {\n    tags: [\n      { tag: 'script', attrs: { src: 'a.js' } },\n      { tag: 'script', attrs: { src: 'b.js' }, append: false },\n      { tag: 'link', attrs: { href: 'style.css', rel: 'stylesheet' }, append: true }\n      { tag: 'link', attrs: { href: 'page.css', rel: 'stylesheet' }, publicPath: false }\n      { tag: 'script', attrs: { src: 'c.js' }, head: false },\n      { tag: 'meta', attrs: { name: 'referrer', content: 'origin' } },\n    ],\n  },\n};\n"})}),"\n",(0,a.jsxs)(t.p,{children:["The final insertion position of the tag is determined by the ",(0,a.jsx)(t.code,{children:"head"})," and ",(0,a.jsx)(t.code,{children:"append"})," options, and two elements with the same configuration will be inserted into the same area and hold their relative positions to each other."]}),"\n",(0,a.jsxs)(t.p,{children:["The ",(0,a.jsx)(t.code,{children:"publicPath"})," configuration is enabled by default for tags, the value of ",(0,a.jsx)(t.code,{children:"output.assetPrefix"})," will be stitched to the ",(0,a.jsx)(t.code,{children:"src"})," property of the ",(0,a.jsx)(t.code,{children:"script"})," tag that represents the path."]}),"\n",(0,a.jsx)(t.p,{children:"So the HTML output built with the above configuration will look like this."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-html",children:'<html>\n  <head>\n    <script src="//example.com/b.js"><\/script>\n    <link href="//example.com/style.css" rel="stylesheet" />\n    <link href="page.css" rel="stylesheet" />\n    \x3c!-- some other headTags... -->\n    <script src="//example.com/a.js"><\/script>\n    <meta name="referrer" content="origin" />\n  </head>\n  <body>\n    \x3c!-- some other bodyTags... -->\n    <script src="//example.com/c.js"><\/script>\n  </body>\n</html>\n'})}),"\n",(0,a.jsxs)(t.h3,{id:"tags-handler",children:["Tags Handler",(0,a.jsx)(t.a,{className:"header-anchor","aria-hidden":"true",href:"#tags-handler",children:"#"})]}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.code,{children:"html.tags"})," also accepts a callback function, which is often used to modify the list of tags or to ensure their relative position while inserting them."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-ts",children:"export default {\n  html: {\n    tags: [\n      tags => {\n        tags.splice(0, 1);\n      },\n      { tag: 'script', attrs: { src: 'a.js' }, head: false },\n      { tag: 'script', attrs: { src: 'b.js' }, append: false },\n      { tag: 'script', attrs: { src: 'c.js' } },\n      tags => [...tags, { tag: 'script', attrs: { src: 'd.js' } }],\n    ],\n  },\n};\n"})}),"\n",(0,a.jsx)(t.p,{children:"And you will get:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-html",children:'<html>\n  <head>\n    \x3c!-- some other headTags... -->\n    <script src="//example.com/c.js"><\/script>\n    <script src="//example.com/d.js"><\/script>\n  </head>\n  <body>\n    \x3c!-- some other bodyTags... -->\n    <script src="//example.com/a.js"><\/script>\n  </body>\n</html>\n'})})]})}function l(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:t}=Object.assign({},(0,s.useMDXComponents)(),e.components);return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(r,{...e})}):r(e)}var i=l;l.__RSPRESS_PAGE_META={},l.__RSPRESS_PAGE_META["en%2Fguide%2Fbasic%2Fhtml-template.md"]={toc:[{text:"Set Template",id:"set-template",depth:2},{text:"Set Page Title",id:"set-page-title",depth:2},{text:"Set Page Icon",id:"set-page-icon",depth:2},{text:"Set Meta Tags",id:"set-meta-tags",depth:2},{text:"Set Template Parameters",id:"set-template-parameters",depth:2},{text:"Template Engine",id:"template-engine",depth:2},{text:"Lodash Template",id:"lodash-template",depth:3},{text:"EJS",id:"ejs",depth:3},{text:"Pug",id:"pug",depth:3},{text:"Injecting Tags",id:"injecting-tags",depth:2},{text:"Tag Object",id:"tag-object",depth:3},{text:"Tags Handler",id:"tags-handler",depth:3}],title:"HTML Template",frontmatter:{}}}}]);