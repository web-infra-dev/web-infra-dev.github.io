(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["41497"],{29894:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return l},frontmatter:function(){return c}});var d=r("9880"),s=r("23169");function i(e){let n=Object.assign({h1:"h1",a:"a",p:"p",code:"code",h2:"h2",pre:"pre",h3:"h3",ul:"ul",li:"li",div:"div"},(0,s.useMDXComponents)(),e.components);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.h1,{id:"onforged",children:["onForged",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#onforged",children:"#"})]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"onForged"})," \u4E3A\u751F\u6210\u5668\u63D2\u4EF6\u4E2D\u7528\u4E8E\u6587\u4EF6\u64CD\u4F5C\u7684\u751F\u547D\u5468\u671F\u51FD\u6570\u3002"]}),"\n",(0,d.jsxs)(n.h2,{id:"\u7C7B\u578B",children:["\u7C7B\u578B",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u7C7B\u578B",children:"#"})]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",children:"export type ForgedAPI = {\n  addFile: (params: AddFileParams) => Promise<void>;\n  addManyFiles: (params: AddManyFilesParams) => Promise<void>;\n  updateJSONFile: (fileName: string, updateInfo: Record<string, unknown>) => Promise<void>;\n  updateTextRawFile: (fileName: string, update: (content: string[]) => string[]) => Promise<void>;\n  updateModernConfig: (updateInfo: Record<string, any>) => Promise<void>;\n  rmFile: (fileName: string) => Promise<void>;\n  rmDir: (dirName: string) => Promise<void>;\n  addHelper: (name: string, fn: Handlebars.HelperDelegate) => void;\n  addPartial: (name: string, str: Handlebars.Template) => void;\n  createElement: (element: ActionElement, params: Record<string, unknown>) => Promise<void>;\n  enableFunc: (func: ActionFunction, params?: Record<string, unknown> | undefined) => Promise<void>;\n};\n\nexport type PluginForgedFunc = (\n  api: ForgedAPI,\n  inputData: Record<string, unknown>,\n) => void | Promise<void>;\n\nexport interface IPluginContext {\n  onForged: (func: PluginForgedFunc) => void;\n  ...\n}\n"})}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"onForged"})," \u53C2\u6570\u4E3A\u4E00\u4E2A\u56DE\u8C03\u51FD\u6570\uFF0C\u56DE\u8C03\u51FD\u6570\u53C2\u6570\u4E3A ",(0,d.jsx)(n.code,{children:"api"})," \u548C ",(0,d.jsx)(n.code,{children:"input"}),"\uFF0C\u5206\u522B\u7528\u4E8E\u63D0\u4F9B\u8BE5\u751F\u547D\u5468\u671F\u51FD\u6570\u63D0\u4F9B\u7684 API \u53CA\u5F53\u524D\u8F93\u5165\u4FE1\u606F\u3002"]}),"\n",(0,d.jsxs)(n.h2,{id:"\u6982\u5FF5",children:["\u6982\u5FF5",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u6982\u5FF5",children:"#"})]}),"\n",(0,d.jsxs)(n.h3,{id:"\u6587\u4EF6\u7C7B\u578B",children:["\u6587\u4EF6\u7C7B\u578B",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u6587\u4EF6\u7C7B\u578B",children:"#"})]}),"\n",(0,d.jsx)(n.p,{children:"\u751F\u6210\u5668\u63D2\u4EF6\u5C06\u6587\u4EF6\u7C7B\u578B\u5206\u4E3A\u6495\u56DB\u7C7B\uFF1A"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"\u6587\u672C\u6587\u4EF6"}),"\n"]}),"\n",(0,d.jsxs)(n.p,{children:["\u7EAF\u6587\u672C\u5185\u5BB9\u6587\u4EF6\uFF0C\u53EF\u4F7F\u7528 ",(0,d.jsx)(n.a,{href:"https://handlebarsjs.com/",target:"_blank",rel:"noopener noreferrer",children:"Handlebars"})," \u6216 ",(0,d.jsx)(n.a,{href:"https://ejs.co/",target:"_blank",rel:"noopener noreferrer",children:"EJS"})," \u8FDB\u884C\u6A21\u677F\u5904\u7406\u7684\u6587\u4EF6\u3002"]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"\u4E8C\u8FDB\u5236\u6587\u4EF6"}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:"\u56FE\u7247\u3001\u97F3\u9891\u3001\u89C6\u9891\u7B49\u6587\u4EF6\u3002"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"JSON \u6587\u4EF6"}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:"JSON \u683C\u5F0F\u7684\u6587\u4EF6\u3002"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"\u6587\u672C\u5217\u8868\u6587\u4EF6"}),"\n"]}),"\n",(0,d.jsxs)(n.p,{children:["\u6587\u4EF6\u7531\u884C\u6587\u672C\u7EC4\u6210\u7684\u6587\u4EF6\uFF0C\u4F8B\u5982 ",(0,d.jsx)(n.code,{children:".gitignore"}),", ",(0,d.jsx)(n.code,{children:".editorconfig"}),", ",(0,d.jsx)(n.code,{children:".npmrc"}),"\u3002"]}),"\n",(0,d.jsx)(n.p,{children:"\u5BF9\u5E94\u56DB\u79CD\u6587\u4EF6\u7684\u7C7B\u578B\u5B9A\u4E49\u4E3A\uFF1A"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",children:"export enum FileType {\n  Text = 'text',\n  Binary = 'binary',\n  Json = 'json',\n  TextRaw = 'textRaw',\n}\n"})}),"\n",(0,d.jsxs)(n.h2,{id:"api",children:["API",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#api",children:"#"})]}),"\n",(0,d.jsx)(n.p,{children:"\u4E0B\u9762\u5C06\u5206\u522B\u4ECB\u7ECD api \u53C2\u6570\u63D0\u4F9B\u7684 API\u3002"}),"\n",(0,d.jsxs)(n.h3,{id:"addfile",children:["addFile",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#addfile",children:"#"})]}),"\n",(0,d.jsx)(n.p,{children:"\u6DFB\u52A0\u5355\u4E2A\u6587\u4EF6\u3002"}),"\n",(0,d.jsx)(n.p,{children:"\u53C2\u6570\u7C7B\u578B\uFF1A"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",children:"export interface AddFileParams {\n  type: FileType;\n  file: string;\n  template?: string;\n  templateFile?: string;\n  force?: boolean;\n  data?: Record<string, string>;\n}\n"})}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"type"}),"\uFF1A \u6587\u4EF6\u7C7B\u578B\u3002"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"file"}),"\uFF1A\u76EE\u6807\u6587\u4EF6\u8DEF\u5F84\uFF0C\u76F8\u5BF9\u4E8E\u76EE\u6807\u9879\u76EE\u76EE\u5F55\u7684\u76F8\u5BF9\u8DEF\u5F84\u3002"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"template"}),"\uFF1A\u6A21\u677F\u5185\u5BB9\uFF0C\u8BE5\u5B57\u6BB5\u503C\u53EF\u76F4\u63A5\u7528\u4E8E\u6A21\u677F\u6E32\u67D3\u6587\u4EF6\u3002\u4F18\u5148\u7EA7\u4F4E\u4E8E ",(0,d.jsx)(n.code,{children:"templateFile"}),"\u3002"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"templateFile"}),"\uFF1A\u6A21\u677F\u6587\u4EF6\u8DEF\u5F84\uFF0C\u76F8\u5BF9\u4E8E templates \u76EE\u5F55\u7684\u76F8\u5BF9\u8DEF\u5F84\u5373\u53EF\u3002"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"force"}),"\uFF1A\u662F\u5426\u5F3A\u5236\u8986\u76D6\uFF0C\u5F53\u76EE\u6807\u6587\u4EF6\u5B58\u5728\u65F6\u662F\u5426\u5F3A\u5236\u8986\u76D6\uFF0C\u9ED8\u8BA4\u4E3A false\u3002"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"data"}),"\uFF1A\u6A21\u677F\u6E32\u67D3\u6570\u636E\u3002"]}),"\n"]}),"\n",(0,d.jsxs)(n.div,{className:"rspress-directive info",children:[(0,d.jsx)(n.div,{className:"rspress-directive-title",children:"INFO"}),(0,d.jsx)(n.div,{className:"rspress-directive-content",children:(0,d.jsxs)(n.p,{children:["\u6587\u672C\u7C7B\u578B\u6587\u4EF6\u9ED8\u8BA4\u4F7F\u7528 Handlebars \u8FDB\u884C\u5904\u7406\uFF0C\u5F53\u6A21\u677F\u6587\u4EF6\u4EE5 ",(0,d.jsx)(n.code,{children:".ejs"})," \u7ED3\u5C3E\u7684\u8BDD\uFF0C\u4F1A\u4F7F\u7528 ",(0,d.jsx)(n.a,{href:"https://ejs.co/",target:"_blank",rel:"noopener noreferrer",children:"EJS"})," \u8FDB\u884C\u6A21\u677F\u6E32\u67D3\u3002\n"]})})]}),"\n",(0,d.jsxs)(n.p,{children:["\u4F8B\u5982\u6DFB\u52A0\u6A21\u677F\u6587\u4EF6 ",(0,d.jsx)(n.code,{children:"App.tsx.hanlebars"})," \u5230 ",(0,d.jsx)(n.code,{children:"src/App.tsx"})," \u4E2D:"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",children:"context.onForged(async (api: ForgedAPI, _input: Record<string, unknown>) => {\n  await api.addFile({\n    type: FileType.Text,\n    file: `src/App.tsx`,\n    templateFile: `App.tsx.handlebars`,\n  });\n})\n"})}),"\n",(0,d.jsxs)(n.h3,{id:"addmanyfiless",children:["addManyFiless",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#addmanyfiless",children:"#"})]}),"\n",(0,d.jsx)(n.p,{children:"\u6279\u91CF\u6DFB\u52A0\u6587\u4EF6\uFF0C\u4E00\u822C\u7528\u4E8E\u6DFB\u52A0\u591A\u4E2A\u6587\u4EF6\u5230\u540C\u4E00\u4E2A\u76EE\u6807\u76EE\u5F55\u3002"}),"\n",(0,d.jsx)(n.p,{children:"\u53C2\u6570\u7C7B\u578B\uFF1A"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",children:"export interface AddManyFilesParams {\n  type: FileType;\n  destination: string;\n  templateFiles: string[] | (() => string[]);\n  templateBase?: string;\n  fileNameFunc?: (name: string) => string;\n  data?: Record<string, string>;\n}\n"})}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"type"}),"\uFF1A \u6587\u4EF6\u7C7B\u578B\u3002"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"destination"}),"\uFF1A\u76EE\u6807\u6587\u4EF6\u5939\uFF0C\u76F8\u5BF9\u4E8E\u76EE\u6807\u9879\u76EE\u76EE\u5F55\u7684\u76F8\u5BF9\u8DEF\u5F84\u3002"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"templateFiles"}),"\uFF1A\u6A21\u677F\u6587\u4EF6\u5217\u8868\uFF0C\u652F\u6301 ",(0,d.jsx)(n.a,{href:"https://www.npmjs.com/package/globby",target:"_blank",rel:"noopener noreferrer",children:"globby"})," \u6B63\u5219\u8868\u8FBE\u5F0F"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"templateBase"}),"\uFF1A\u6A21\u677F\u6587\u4EF6\u7684\u516C\u5171\u8DEF\u5F84\uFF0C\u4F7F\u7528\u8BE5\u53C2\u6570\u65F6\u76EE\u6807\u6587\u4EF6\u4F1A\u81EA\u52A8\u5220\u9664\u8BE5\u8DEF\u5F84\u3002"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"fileNameFunc"}),"\uFF1A\u91CD\u547D\u540D\u6587\u4EF6\u51FD\u6570\uFF0C\u6DFB\u52A0\u6587\u4EF6\u8FC7\u7A0B\u4E2D\u4F1A\u4F9D\u6B21\u5C06\u6587\u4EF6\u540D\u4F20\u5165\u5230\u8BE5\u51FD\u6570\uFF0C\u53EF\u4EE5\u6839\u636E\u9700\u8981\u8FDB\u884C\u91CD\u547D\u540D\u3002"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"data"}),"\uFF1A\u6A21\u677F\u6E32\u67D3\u6570\u636E\u3002"]}),"\n"]}),"\n",(0,d.jsxs)(n.p,{children:["\u4F8B\u5982\u5C06\u6A21\u677F\u6587\u4EF6 ",(0,d.jsx)(n.code,{children:"src-ts"})," \u76EE\u5F55\u4E0B\u6240\u6709\u6587\u4EF6\u6E32\u67D3\u5230 ",(0,d.jsx)(n.code,{children:"src"})," \u76EE\u5F55\uFF1A"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",children:"context.onForged(async (api: ForgedAPI, _input: Record<string, unknown>) => {\n  await api.addManyFiles({\n    type: FileType.Text,\n    destination: 'src',\n    templateFiles: ['src-ts/**/*'],\n    templateBase: 'src-ts',\n    fileNameFunc: name => name.replace('.handlebars', ''),\n  });\n})\n"})}),"\n",(0,d.jsxs)(n.h3,{id:"updatejsonfile",children:["updateJSONFile",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#updatejsonfile",children:"#"})]}),"\n",(0,d.jsx)(n.p,{children:"\u66F4\u65B0 JSON \u6587\u4EF6\u5B57\u6BB5\u3002"}),"\n",(0,d.jsx)(n.p,{children:"\u53C2\u6570\u7C7B\u578B\uFF1A"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",children:"fileName: strings\nupdateInfo: Record<string, unknown>\n"})}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"fileName"}),"\uFF1AJSON \u6587\u4EF6\u8DEF\u5F84\uFF0C\u76F8\u5BF9\u4E8E\u76EE\u6807\u9879\u76EE\u7684\u8DEF\u5F84\u3002"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"updateInfo"}),"\uFF1A\u66F4\u65B0\u4FE1\u606F\uFF0C\u5D4C\u5957\u5B57\u6BB5\u66F4\u65B0\u9700\u8981\u5E73\u94FA\uFF0C\u4E0D\u7136\u4F1A\u66F4\u65B0\u6574\u4F53\u9020\u6210\u5185\u5BB9\u4E22\u5931\u3002"]}),"\n"]}),"\n",(0,d.jsxs)(n.p,{children:["\u4F8B\u5982\u66F4\u65B0 ",(0,d.jsx)(n.code,{children:"package.json"})," \u7684 name \u5B57\u6BB5\uFF1A"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",children:"context.onForged(async (api: ForgedAPI, _input: Record<string, unknown>) => {\n  await api.updateJSONFile('package.json', { name: 'new_name' });\n})\n"})}),"\n",(0,d.jsxs)(n.p,{children:["\u4F8B\u5982\u66F4\u65B0 ",(0,d.jsx)(n.code,{children:"dependencies"})," \u7684 ",(0,d.jsx)(n.code,{children:"react-dom"})," \u7248\u672C:"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",children:"context.onForged(async (api: ForgedAPI, _input: Record<string, unknown>) => {\n  await api.updateJSONFile('package.json', {\n    'dependencies.react-dom': '^18',\n  });\n})\n"})}),"\n",(0,d.jsxs)(n.h3,{id:"updatetextrawfile",children:["updateTextRawFile",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#updatetextrawfile",children:"#"})]}),"\n",(0,d.jsx)(n.p,{children:"\u66F4\u65B0\u6587\u672C\u5217\u8868\u6587\u4EF6\u5185\u5BB9\u3002"}),"\n",(0,d.jsx)(n.p,{children:"\u53C2\u6570\u7C7B\u578B\uFF1A"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",children:"fileName: string\nupdate: (content: string[]) => string[]\n"})}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"fileName"}),"\uFF1A \u6587\u672C\u5217\u8868\u6587\u4EF6\u8DEF\u5F84\uFF0C\u76F8\u5BF9\u4E8E\u76EE\u6807\u9879\u76EE\u7684\u8DEF\u5F84\u3002"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"update"}),"\uFF1A\u66F4\u65B0\u51FD\u6570\uFF0C\u53C2\u6570\u4E3A\u5F53\u524D\u6587\u4EF6\u5185\u5BB9\u4EE5 ",(0,d.jsx)(n.code,{children:"\\n"})," \u8FDB\u884C\u5206\u5272\u7684\u6570\u7EC4\uFF0C\u8FD4\u56DE\u503C\u4E5F\u4E3A\u4FEE\u6539\u5B8C\u6210\u540E\u7684\u6570\u7EC4\uFF0C",(0,d.jsx)(n.code,{children:"@modern-js/create"})," \u4F1A\u81EA\u52A8\u4EE5 ",(0,d.jsx)(n.code,{children:"\\n"})," \u5408\u5E76\uFF0C\u5E76\u5199\u5165\u6E90\u6587\u4EF6\u3002"]}),"\n"]}),"\n",(0,d.jsxs)(n.p,{children:["\u4F8B\u5982 ",(0,d.jsx)(n.code,{children:".gitinore"})," \u6587\u4EF6\u4E2D\u589E\u52A0 dist \u76EE\u5F55\uFF1A"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",children:"context.onForged(async (api: ForgedAPI, _input: Record<string, unknown>) => {\n  await api.updateTextRawFile('.gitinore', (content) => [...content, 'dist']);\n})\n"})}),"\n",(0,d.jsxs)(n.h3,{id:"updatemodernconfig\u4E0D\u63A8\u8350",children:["updateModernConfig(\u4E0D\u63A8\u8350)",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#updatemodernconfig\u4E0D\u63A8\u8350",children:"#"})]}),"\n",(0,d.jsxs)(n.p,{children:["Modern.js \u914D\u7F6E\u9664\u4E86\u53EF\u4EE5\u5728 ",(0,d.jsx)(n.code,{children:"modern.config.[tj]s"})," \u4E2D\u914D\u7F6E\u5916\uFF0C\u8FD8\u652F\u6301 ",(0,d.jsx)(n.code,{children:"package.json"})," \u4E2D\u914D\u7F6E ",(0,d.jsx)(n.code,{children:"modernConfig"})," \u914D\u7F6E\u3002\u8BE5\u51FD\u6570\u7528\u4E8E\u66F4\u65B0\u8BE5\u5B57\u6BB5\u3002"]}),"\n",(0,d.jsx)(n.p,{children:"\u53C2\u6570\u7C7B\u578B\uFF1A"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",children:"updateInfo: Record<string, any>\n"})}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"updateInfo"}),"\uFF1A \u66F4\u65B0\u5185\u5BB9\u4FE1\u606F\u3002updateModernConfig \u662F\u57FA\u4E8E updateJSONFile \u7684\u5C01\u88C5\uFF0C\u5C06\u81EA\u52A8\u66F4\u65B0\u5230 ",(0,d.jsx)(n.code,{children:"modernConfig"})," \u5B57\u6BB5\u4E0B\uFF0CupdateInfo \u4E2D\u53EA\u9700\u586B\u5199 ",(0,d.jsx)(n.code,{children:"modernConfig"})," \u4E0B\u7684\u914D\u7F6E\u5B57\u6BB5\u5373\u53EF\u3002"]}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:"\u4F8B\u5982\u5F00\u542F ssr\uFF1A"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",children:"context.onForged(async (api: ForgedAPI, _input: Record<string, unknown>) => {\n  await api.updateModernConfig({ 'server.ssr': true });\n})\n"})}),"\n",(0,d.jsxs)(n.h3,{id:"rmfile",children:["rmFile",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#rmfile",children:"#"})]}),"\n",(0,d.jsx)(n.p,{children:"\u5220\u9664\u6587\u4EF6\u3002"}),"\n",(0,d.jsx)(n.p,{children:"\u53C2\u6570\u7C7B\u578B\uFF1A"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",children:"fileName: string\n"})}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"fileName"}),"\uFF1A\u5220\u9664\u7684\u6587\u4EF6\u8DEF\u5F84\uFF0C\u76F8\u5BF9\u4E8E\u76EE\u6807\u9879\u76EE\u7684\u8DEF\u5F84\u3002"]}),"\n"]}),"\n",(0,d.jsxs)(n.h3,{id:"rmdir",children:["rmDir",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#rmdir",children:"#"})]}),"\n",(0,d.jsx)(n.p,{children:"\u5220\u9664\u6587\u4EF6\u5939\u3002"}),"\n",(0,d.jsx)(n.p,{children:"\u53C2\u6570\u7C7B\u578B\uFF1A"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",children:"dirName: string\n"})}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"dirName"}),"\uFF1A\u5220\u9664\u7684\u6587\u4EF6\u5939\u8DEF\u5F84\uFF0C\u76F8\u5BF9\u4E8E\u76EE\u6807\u9879\u76EE\u7684\u8DEF\u5F84\u3002"]}),"\n"]}),"\n",(0,d.jsxs)(n.h3,{id:"addhelper",children:["addHelper",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#addhelper",children:"#"})]}),"\n",(0,d.jsxs)(n.p,{children:["\u6DFB\u52A0 handlebrs \u6E32\u67D3\u7684",(0,d.jsx)(n.a,{href:"https://handlebarsjs.com/guide/#custom-helpers",target:"_blank",rel:"noopener noreferrer",children:"\u81EA\u5B9A\u4E49 Helper"}),"\u3002"]}),"\n",(0,d.jsx)(n.p,{children:"\u53C2\u6570\u7C7B\u578B\uFF1A"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",children:"name: string\nfn: Handlebars.HelperDelegate\n"})}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"name"}),"\uFF1AHelper \u51FD\u6570\u540D\u79F0\u3002"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"fn"}),"\uFF1AHelper \u51FD\u6570\u5B9E\u73B0\u3002"]}),"\n"]}),"\n",(0,d.jsxs)(n.h3,{id:"addpartial",children:["addPartial",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#addpartial",children:"#"})]}),"\n",(0,d.jsxs)(n.p,{children:["\u6DFB\u52A0 Handlebars \u6E32\u67D3\u7684 ",(0,d.jsx)(n.a,{href:"https://handlebarsjs.com/guide/partials.html#basic-partials",target:"_blank",rel:"noopener noreferrer",children:"Partial"}),"\u3002"]}),"\n",(0,d.jsx)(n.p,{children:"\u53C2\u6570\u7C7B\u578B\uFF1A"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",children:"name: string\nstr: Handlebars.Template\n"})}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"name"}),"\uFF1APartial \u540D\u79F0\u3002"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"str"}),"\uFF1APartial \u7684\u6A21\u677F\u5B57\u7B26\u4E32\u3002"]}),"\n"]}),"\n",(0,d.jsxs)(n.h3,{id:"createelement",children:["createElement",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#createelement",children:"#"})]}),"\n",(0,d.jsx)(n.p,{children:"\u81EA\u52A8\u8C03\u7528 new \u547D\u4EE4\u521B\u5EFA\u5DE5\u7A0B\u5143\u7D20\u3002"}),"\n",(0,d.jsx)(n.p,{children:"\u53C2\u6570\u7C7B\u578B\uFF1A"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",children:"element: ActionElement\nparams: Record<string, unknown>\n"})}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"element"}),"\uFF1A\u5DE5\u7A0B\u5143\u7D20\u7C7B\u578B\uFF0C\u65B0\u5EFA\u5165\u53E3\u6216\u8005\u65B0\u5EFA\u81EA\u5B9A\u4E49 Web Server \u6E90\u7801\u76EE\u5F55\u3002"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"params"}),"\uFF1A\u5BF9\u5E94\u521B\u5EFA\u5DE5\u7A0B\u5143\u7D20\u7684\u5176\u4ED6\u53C2\u6570\u3002"]}),"\n"]}),"\n",(0,d.jsxs)(n.h3,{id:"enablefunc",children:["enableFunc",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#enablefunc",children:"#"})]}),"\n",(0,d.jsx)(n.p,{children:"\u81EA\u52A8\u8C03\u7528 new \u547D\u4EE4\u5F00\u542F\u53EF\u9009\u529F\u80FD\u3002"}),"\n",(0,d.jsx)(n.p,{children:"\u53C2\u6570\u7C7B\u578B\uFF1A"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",children:"func: ActionFunction\nparams?: Record<string, unknown>\n"})}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"func"}),"\uFF1A\u5F00\u542F\u529F\u80FD\u540D\u79F0\u3002"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"params"}),"\uFF1A\u5BF9\u5E94\u5F00\u542F\u529F\u80FD\u7684\u5176\u4ED6\u53C2\u6570\u3002"]}),"\n"]}),"\n",(0,d.jsxs)(n.div,{className:"rspress-directive info",children:[(0,d.jsx)(n.div,{className:"rspress-directive-title",children:"INFO"}),(0,d.jsx)(n.div,{className:"rspress-directive-content",children:(0,d.jsxs)(n.p,{children:["\u521B\u5EFA\u5DE5\u7A0B\u5143\u7D20\u548C\u5F00\u542F\u529F\u80FD\u914D\u7F6E\u53EF\u53C2\u8003",(0,d.jsx)(n.a,{href:"/guides/topic-detail/generator/new/config",children:"\u914D\u7F6E\u53C2\u6570"}),"\u3002\n"]})})]})]})}function a(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,s.useMDXComponents)(),e.components);return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(i,{...e})}):i(e)}var l=a;a.__RSPRESS_PAGE_META={},a.__RSPRESS_PAGE_META["zh%2Fguides%2Ftopic-detail%2Fgenerator%2Fplugin%2Fapi%2FonForged.md"]={toc:[{text:"\u7C7B\u578B",id:"\u7C7B\u578B",depth:2},{text:"\u6982\u5FF5",id:"\u6982\u5FF5",depth:2},{text:"\u6587\u4EF6\u7C7B\u578B",id:"\u6587\u4EF6\u7C7B\u578B",depth:3},{text:"API",id:"api",depth:2},{text:"addFile",id:"addfile",depth:3},{text:"addManyFiless",id:"addmanyfiless",depth:3},{text:"updateJSONFile",id:"updatejsonfile",depth:3},{text:"updateTextRawFile",id:"updatetextrawfile",depth:3},{text:"updateModernConfig(\u4E0D\u63A8\u8350)",id:"updatemodernconfig\u4E0D\u63A8\u8350",depth:3},{text:"rmFile",id:"rmfile",depth:3},{text:"rmDir",id:"rmdir",depth:3},{text:"addHelper",id:"addhelper",depth:3},{text:"addPartial",id:"addpartial",depth:3},{text:"createElement",id:"createelement",depth:3},{text:"enableFunc",id:"enablefunc",depth:3}],title:"onForged"};let c={sidebar_position:2}}}]);