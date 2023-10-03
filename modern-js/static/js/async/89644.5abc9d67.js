(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["89644"],{72136:function(e,s,n){"use strict";n.r(s),n.d(s,{default:function(){return c}});var t=n("15169"),r=n("43932"),i=n("9880"),o=n("23169");function a(e){var s=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",pre:"pre",h3:"h3",a:"a",h4:"h4"},(0,o.useMDXComponents)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Type:"})," ",(0,i.jsx)(s.code,{children:"Object"})]}),"\n"]}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"output.assetsRetry"})," is used to configure the retry of assets.The type of ",(0,i.jsx)(s.code,{children:"AssetsRetryOptions"})," is as follows:"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-ts",children:"export type AssetsRetryHookContext = {\n  times: number;\n  domain: string;\n  url: string;\n  tagName: string;\n};\n\nexport type AssetsRetryOptions = {\n  type?: string[];\n  domain?: string[];\n  max?: number;\n  test?: string | ((url: string) => boolean);\n  crossOrigin?: boolean | 'anonymous' | 'use-credentials';\n  inlineScript?: boolean;\n  onRetry?: (options: AssetsRetryHookContext) => void;\n  onSuccess?: (options: AssetsRetryHookContext) => void;\n  onFail?: (options: AssetsRetryHookContext) => void;\n};\n"})}),"\n",(0,i.jsx)(s.p,{children:"Since the ability will inject some extra runtime code into HTML, we have disabled this ability by default. If you need to enable it, you can configure it in the form of an object, for example:"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-js",children:"export default {\n  output: {\n    assetsRetry: {},\n  },\n};\n"})}),"\n",(0,i.jsxs)(s.p,{children:["When you enable this ability, the default config of ",(0,i.jsx)(s.code,{children:"assetsRetry"})," is as follows:"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-ts",children:"export const defaultAssetsRetryOptions: AssetsRetryOptions = {\n  type: ['script', 'link', 'img'],\n  domain: [],\n  max: 3,\n  test: '',\n  crossOrigin: false,\n  onRetry: () => {},\n  onSuccess: () => {},\n  onFail: () => {},\n};\n"})}),"\n",(0,i.jsx)(s.p,{children:"At the same time, you can also customize your retry logic using the following configurations."}),"\n",(0,i.jsxs)(s.h3,{id:"assetsretrydomain",children:["assetsRetry.domain",(0,i.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#assetsretrydomain",children:"#"})]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Type:"})," ",(0,i.jsx)(s.code,{children:"string[]"})]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Default:"})," ",(0,i.jsx)(s.code,{children:"[]"})]}),"\n"]}),"\n",(0,i.jsxs)(s.p,{children:["Specifies the retry domain when assets fail to load. In the ",(0,i.jsx)(s.code,{children:"domain"})," array, the first item is the currently used domain, and the following items are backup domains. When a asset request for a domain fails, Builder will find that domain in the array and replace it with the next domain in the array."]}),"\n",(0,i.jsx)(s.p,{children:"For example:"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-js",children:"export default {\n  output: {\n    assetsRetry: {\n      domain: ['https://cdn1.com', 'https://cdn2.com', 'https://cdn3.com'],\n    },\n  },\n};\n"})}),"\n",(0,i.jsxs)(s.p,{children:["After adding the above configuration, when assets fail to load from the ",(0,i.jsx)(s.code,{children:"cdn1.com"})," domain, the request domain will automatically fallback to ",(0,i.jsx)(s.code,{children:"cdn2.com"}),"."]}),"\n",(0,i.jsxs)(s.p,{children:["If the assets request for ",(0,i.jsx)(s.code,{children:"cdn2.com"})," also fails, the request will fallback to ",(0,i.jsx)(s.code,{children:"cdn3.com"}),"."]}),"\n",(0,i.jsxs)(s.h3,{id:"assetsretrytype",children:["assetsRetry.type",(0,i.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#assetsretrytype",children:"#"})]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Type:"})," ",(0,i.jsx)(s.code,{children:"string[]"})]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Default:"})," ",(0,i.jsx)(s.code,{children:"['script', 'link', 'img']"})]}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:"Used to specify the HTML tag types that need to be retried. By default, script tags, link tags, and img tags are processed, corresponding to JS code, CSS code, and images."}),"\n",(0,i.jsx)(s.p,{children:"For example, only script tags and link tags are processed:"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-js",children:"export default {\n  output: {\n    assetsRetry: {\n      type: ['script', 'link'],\n    },\n  },\n};\n"})}),"\n",(0,i.jsxs)(s.h3,{id:"assetsretrymax",children:["assetsRetry.max",(0,i.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#assetsretrymax",children:"#"})]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Type:"})," ",(0,i.jsx)(s.code,{children:"number"})]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Default:"})," ",(0,i.jsx)(s.code,{children:"3"})]}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:"The maximum number of retries for a single asset. For example:"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-js",children:"export default {\n  output: {\n    assetsRetry: {\n      max: 5,\n    },\n  },\n};\n"})}),"\n",(0,i.jsxs)(s.h3,{id:"assetsretrytest",children:["assetsRetry.test",(0,i.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#assetsretrytest",children:"#"})]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Type:"})," ",(0,i.jsx)(s.code,{children:"string | ((url: string) => boolean) | undefined"})]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Default:"})," ",(0,i.jsx)(s.code,{children:"undefined"})]}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:"The test function of the asset to be retried. For example:"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-js",children:"export default {\n  output: {\n    assetsRetry: {\n      test: /cdn\\.example\\.com/,\n    },\n  },\n};\n"})}),"\n",(0,i.jsxs)(s.h3,{id:"assetsretrycrossorigin",children:["assetsRetry.crossOrigin",(0,i.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#assetsretrycrossorigin",children:"#"})]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Type:"})," ",(0,i.jsx)(s.code,{children:"undefined | boolean | 'anonymous' | 'use-credentials'"})]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Default:"})," ",(0,i.jsx)(s.code,{children:"same as html.crossorigin"})]}),"\n"]}),"\n",(0,i.jsxs)(s.p,{children:["When initiating a retry for assets, Builder will recreate the ",(0,i.jsx)(s.code,{children:"<script>"})," tags. This option allows you to set the ",(0,i.jsx)(s.code,{children:"crossorigin"})," attribute for these tags."]}),"\n",(0,i.jsxs)(s.p,{children:["By default, the value of ",(0,i.jsx)(s.code,{children:"assetsRetry.crossOrigin"})," will be consistent with the ",(0,i.jsx)(s.code,{children:"html.crossorigin"})," configuration, so no additional configuration is required. If you need to configure the recreated tags separately, you can use this option, for example:"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-js",children:"export default {\n  output: {\n    assetsRetry: {\n      crossOrigin: true,\n    },\n  },\n};\n"})}),"\n",(0,i.jsxs)(s.h3,{id:"assetsretryonretry",children:["assetsRetry.onRetry",(0,i.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#assetsretryonretry",children:"#"})]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Type:"})," ",(0,i.jsx)(s.code,{children:"undefined | (options: AssetsRetryHookContext) => void"})]}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:"The callback function when the asset is being retried. For example:"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-js",children:"export default {\n  output: {\n    assetsRetry: {\n      onRetry: ({ times, domain, url, tagName }) => {\n        console.log(\n          `Retry ${times} times, domain: ${domain}, url: ${url}, tagName: ${tagName}`,\n        );\n      },\n    },\n  },\n};\n"})}),"\n",(0,i.jsxs)(s.h3,{id:"assetsretryonsuccess",children:["assetsRetry.onSuccess",(0,i.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#assetsretryonsuccess",children:"#"})]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Type:"})," ",(0,i.jsx)(s.code,{children:"undefined | (options: AssetsRetryHookContext) => void"})]}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:"The callback function when the asset is successfully retried. For example:"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-js",children:"export default {\n  output: {\n    assetsRetry: {\n      onSuccess: ({ times, domain, url, tagName }) => {\n        console.log(\n          `Retry ${times} times, domain: ${domain}, url: ${url}, tagName: ${tagName}`,\n        );\n      },\n    },\n  },\n};\n"})}),"\n",(0,i.jsxs)(s.h3,{id:"assetsretryonfail",children:["assetsRetry.onFail",(0,i.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#assetsretryonfail",children:"#"})]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Type:"})," ",(0,i.jsx)(s.code,{children:"undefined | (options: AssetsRetryHookContext) => void"})]}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:"The callback function when the asset is failed to be retried. For example:"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-js",children:"export default {\n  output: {\n    assetsRetry: {\n      onFail: ({ times, domain, url, tagName }) => {\n        console.log(\n          `Retry ${times} times, domain: ${domain}, url: ${url}, tagName: ${tagName}`,\n        );\n      },\n    },\n  },\n};\n"})}),"\n",(0,i.jsxs)(s.h3,{id:"assetsretryinlinescript",children:["assetsRetry.inlineScript",(0,i.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#assetsretryinlinescript",children:"#"})]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Type:"})," ",(0,i.jsx)(s.code,{children:"boolean"})]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Default:"})," ",(0,i.jsx)(s.code,{children:"true"})]}),"\n"]}),"\n",(0,i.jsxs)(s.p,{children:["Whether to inline the runtime JavaScript code of ",(0,i.jsx)(s.code,{children:"assetsRetry"})," into the HTML file."]}),"\n",(0,i.jsxs)(s.p,{children:["If you don't want to insert the code in the HTML file, you can set ",(0,i.jsx)(s.code,{children:"assetsRetry.inlineScript"})," to ",(0,i.jsx)(s.code,{children:"false"}),":"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-js",children:"export default {\n  output: {\n    assetsRetry: {\n      inlineScript: false,\n    },\n  },\n};\n"})}),"\n",(0,i.jsxs)(s.p,{children:["After adding the above configuration, the runtime code of ",(0,i.jsx)(s.code,{children:"assetsRetry"})," will be extracted into a separate ",(0,i.jsx)(s.code,{children:"assets-retry.[version].js"})," file and output to the dist directory."]}),"\n",(0,i.jsxs)(s.p,{children:["The downside is that ",(0,i.jsx)(s.code,{children:"assets-retry.[version].js"})," itself may fail to load. If this happens, the assets retry will not work. Therefore, we prefer to inline the runtime code into the HTML file."]}),"\n",(0,i.jsxs)(s.h3,{id:"notes",children:["Notes",(0,i.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#notes",children:"#"})]}),"\n",(0,i.jsxs)(s.p,{children:["When you use ",(0,i.jsx)(s.code,{children:"assetsRetry"}),", the Builder injects some runtime code into the HTML and serializes the ",(0,i.jsx)(s.code,{children:"assetsRetry"})," config, inserting it into the runtime code. Therefore, you need to be aware of the following:"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["Avoid configuring sensitive information in ",(0,i.jsx)(s.code,{children:"assetsRetry"}),", such as internal tokens."]}),"\n",(0,i.jsxs)(s.li,{children:["Avoid referencing variables or methods outside of ",(0,i.jsx)(s.code,{children:"onRetry"}),", ",(0,i.jsx)(s.code,{children:"onSuccess"}),", and ",(0,i.jsx)(s.code,{children:"onFail"}),"."]}),"\n",(0,i.jsxs)(s.li,{children:["Avoid using syntax with compatibility issues in ",(0,i.jsx)(s.code,{children:"onRetry"}),", ",(0,i.jsx)(s.code,{children:"onSuccess"})," and ",(0,i.jsx)(s.code,{children:"onFail"})," as these functions are inlined directly into the HTML."]}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:"Here's an example of incorrect usage:"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-js",children:"import { someMethod } from 'utils';\n\nexport default {\n  output: {\n    assetsRetry: {\n      onRetry() {\n        // Incorrect usage, includes sensitive information\n        const privateToken = 'a-private-token';\n\n        // Incorrect usage, uses an external method\n        someMethod(privateToken);\n      },\n    },\n  },\n};\n"})}),"\n",(0,i.jsxs)(s.h3,{id:"limitation",children:["Limitation",(0,i.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#limitation",children:"#"})]}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"assetsRetry"})," may not work in the following scenarios:"]}),"\n",(0,i.jsxs)(s.h4,{id:"micro-frontend-application",children:["Micro-frontend application",(0,i.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#micro-frontend-application",children:"#"})]}),"\n",(0,i.jsxs)(s.p,{children:["If your project is a micro-frontend application (such as a Garfish sub-application), the assets retry may not work because micro-frontend sub-applications are typically not loaded directly based on the ",(0,i.jsx)(s.code,{children:"<script>"})," tag."]}),"\n",(0,i.jsx)(s.p,{children:"If you need to retry assets in micro-frontend scenarios, please contact the developers of the micro-frontend framework to find a solution."}),"\n",(0,i.jsxs)(s.h4,{id:"dynamic-import-resources",children:["Dynamic import resources",(0,i.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#dynamic-import-resources",children:"#"})]}),"\n",(0,i.jsxs)(s.p,{children:["Currently, ",(0,i.jsx)(s.code,{children:"assetsRetry"})," cannot work on dynamically imported resources. This feature is being supported."]}),"\n",(0,i.jsxs)(s.h4,{id:"resources-in-custom-templates",children:["Resources in custom templates",(0,i.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#resources-in-custom-templates",children:"#"})]}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"assetsRetry"})," listens to the page error event to know whether the current resource fails to load and needs to be retried. Therefore, if the resource in the custom template is executed earlier than ",(0,i.jsx)(s.code,{children:"assetsRetry"}),", then ",(0,i.jsx)(s.code,{children:"assetsRetry"})," cannot listen to the event that the resource fails to load, so it cannot retry."]}),"\n",(0,i.jsxs)(s.p,{children:["If you want ",(0,i.jsx)(s.code,{children:"assetsRetry"})," to work on resources in custom templates, you can refer to ",(0,i.jsx)(s.a,{href:"https://github.com/jantimon/html-webpack-plugin/tree/main/examples/custom-insertion-position",target:"_blank",rel:"noopener noreferrer",children:"Custom Insertion Example"})," to modify ",(0,i.jsx)(s.a,{href:"https://modernjs.dev/builder/en/api/config-html.html",target:"_blank",rel:"noopener noreferrer",children:"html.inject"})," configuration and custom template."]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-diff",children:'<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset="utf-8">\n    <title>custom template</title>\n+   <%= htmlWebpackPlugin.tags.headTags %>\n    <script src="//example.com/assets/a.js"></script>\n  </head>\n  <body>\n    <div id="root" />\n+    <%= htmlWebpackPlugin.tags.bodyTags %>\n  </body>\n</html>\n'})})]})}function d(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},s=Object.assign({},(0,o.useMDXComponents)(),e.components).wrapper;return s?(0,i.jsx)(s,(0,r._)((0,t._)({},e),{children:(0,i.jsx)(a,(0,t._)({},e))})):a(e)}var c=d;d.__RSPRESS_PAGE_META={},d.__RSPRESS_PAGE_META["..%2F..%2Fbuilder-doc%2Fdocs%2Fen%2Fconfig%2Foutput%2FassetsRetry.md"]={toc:[{text:"assetsRetry.domain",id:"assetsretrydomain",depth:3},{text:"assetsRetry.type",id:"assetsretrytype",depth:3},{text:"assetsRetry.max",id:"assetsretrymax",depth:3},{text:"assetsRetry.test",id:"assetsretrytest",depth:3},{text:"assetsRetry.crossOrigin",id:"assetsretrycrossorigin",depth:3},{text:"assetsRetry.onRetry",id:"assetsretryonretry",depth:3},{text:"assetsRetry.onSuccess",id:"assetsretryonsuccess",depth:3},{text:"assetsRetry.onFail",id:"assetsretryonfail",depth:3},{text:"assetsRetry.inlineScript",id:"assetsretryinlinescript",depth:3},{text:"Notes",id:"notes",depth:3},{text:"Limitation",id:"limitation",depth:3},{text:"Micro-frontend application",id:"micro-frontend-application",depth:4},{text:"Dynamic import resources",id:"dynamic-import-resources",depth:4},{text:"Resources in custom templates",id:"resources-in-custom-templates",depth:4}],title:""}},75678:function(e,s,n){"use strict";n.r(s),n.d(s,{default:function(){return l},frontmatter:function(){return h}});var t=n("15169"),r=n("43932"),i=n("9880"),o=n("23169"),a=n("72136");function d(e){var s=Object.assign({h1:"h1",a:"a",div:"div",p:"p"},(0,o.useMDXComponents)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(s.h1,{id:"outputassetsretry",children:["output.assetsRetry",(0,i.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#outputassetsretry",children:"#"})]}),"\n",(0,i.jsxs)(s.div,{className:"rspress-directive tip",children:[(0,i.jsx)(s.div,{className:"rspress-directive-title",children:"TIP"}),(0,i.jsx)(s.div,{className:"rspress-directive-content",children:(0,i.jsxs)(s.p,{children:["This config is provided by Modern.js Builder, more detail can see ",(0,i.jsx)(s.a,{href:"https://modernjs.dev/builder/en/api/config-output.html#outputassetsretry",target:"_blank",rel:"noopener noreferrer",children:"output.assetsRetry"}),".\n"]})})]}),"\n","\n",(0,i.jsx)(a.default,{})]})}function c(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},s=Object.assign({},(0,o.useMDXComponents)(),e.components).wrapper;return s?(0,i.jsx)(s,(0,r._)((0,t._)({},e),{children:(0,i.jsx)(d,(0,t._)({},e))})):d(e)}var l=c;c.__RSPRESS_PAGE_META={},c.__RSPRESS_PAGE_META["en%2Fconfigure%2Fapp%2Foutput%2Fassets-retry.mdx"]={toc:[],title:"output.assetsRetry"};var h={sidebar_label:"assetsRetry"}}}]);