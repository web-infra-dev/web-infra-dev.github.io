/*! For license information please see 42113.e3a18697.js.LICENSE.txt */
(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["42113"],{86665:function(e,n,s){"use strict";s.r(n);var c=s("39980"),i=s("76713");function a(e){let n=Object.assign({h1:"h1",a:"a",p:"p",code:"code",img:"img",h2:"h2",ul:"ul",li:"li",h3:"h3",h4:"h4",pre:"pre",blockquote:"blockquote"},(0,i.useMDXComponents)(),e.components);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(n.h1,{id:"\u81EA\u5B9A\u4E49\u63D0\u4EA4-commit-\u4FE1\u606F",children:["\u81EA\u5B9A\u4E49\u63D0\u4EA4 commit \u4FE1\u606F",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u81EA\u5B9A\u4E49\u63D0\u4EA4-commit-\u4FE1\u606F",children:"#"})]}),"\n",(0,c.jsxs)(n.p,{children:["Changesets \u652F\u6301\u914D\u7F6E ",(0,c.jsx)(n.code,{children:"commit"})," \u4E3A true \u65F6\uFF0C\u5728\u6267\u884C ",(0,c.jsx)(n.code,{children:"change"})," \u548C ",(0,c.jsx)(n.code,{children:"bump"})," \u547D\u4EE4\u65F6\u81EA\u52A8\u63D0\u4EA4\u5F53\u524D\u53D8\u66F4\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:["\u9ED8\u8BA4\u7684 ",(0,c.jsx)(n.code,{children:"commit"})," \u4FE1\u606F\u7531 ",(0,c.jsx)(n.code,{children:"@changesets/cli/commit"})," \u63D0\u4F9B\uFF0C\u9ED8\u8BA4\u4FE1\u606F\u683C\u5F0F\u4E3A\uFF1A"]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/zq-uylkvT/ljhwZthlaukjlkulzlp/changeset-change-commit-info.png",alt:"change commit"}),"\n",(0,c.jsx)(n.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/zq-uylkvT/ljhwZthlaukjlkulzlp/changeset-bump-commit-info.png",alt:"bump commit"})]}),"\n",(0,c.jsx)(n.p,{children:"\u5F53\u9ED8\u8BA4\u7684 commit \u4FE1\u606F\u4E0D\u80FD\u6EE1\u8DB3\u9700\u6C42\u65F6\uFF0C\u652F\u6301\u81EA\u5B9A\u4E49 commit \u4FE1\u606F\u3002"}),"\n",(0,c.jsxs)(n.h2,{id:"\u81EA\u5B9A\u4E49-commit-\u4FE1\u606F\u5185\u5BB9",children:["\u81EA\u5B9A\u4E49 commit \u4FE1\u606F\u5185\u5BB9",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u81EA\u5B9A\u4E49-commit-\u4FE1\u606F\u5185\u5BB9",children:"#"})]}),"\n",(0,c.jsx)(n.p,{children:"commit \u4FE1\u606F\u5206\u4E3A\u4E24\u79CD\uFF1A"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["\u6267\u884C ",(0,c.jsx)(n.code,{children:"change"})," \u547D\u4EE4\u65F6\u81EA\u52A8\u751F\u6210\u7684 commit \u4FE1\u606F\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:["\u6267\u884C ",(0,c.jsx)(n.code,{children:"bump"})," \u547D\u4EE4\u65F6\u81EA\u52A8\u751F\u6210\u7684 commit \u4FE1\u606F\u3002"]}),"\n"]}),"\n",(0,c.jsxs)(n.p,{children:["\u81EA\u5B9A\u4E49\u903B\u8F91\u4E3B\u8981\u5B9E\u73B0\u4E24\u4E2A\u51FD\u6570\uFF0C",(0,c.jsx)(n.code,{children:"getAddMessage"})," \u548C ",(0,c.jsx)(n.code,{children:"getVersionMessage"}),"\uFF0C\u5206\u522B\u7528\u6765\u5B9A\u4E49\u4E0A\u8FF0\u8FD9\u4E24\u79CD\u4FE1\u606F\u3002"]}),"\n",(0,c.jsxs)(n.h3,{id:"getaddmessage",children:["getAddMessage",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#getaddmessage",children:"#"})]}),"\n",(0,c.jsxs)(n.h4,{id:"params",children:["Params",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#params",children:"#"})]}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:"changeset"}),"\n"]}),"\n",(0,c.jsx)(n.p,{children:"\u5F53\u524D\u521B\u5EFA\u7684 chagneset \u4FE1\u606F"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-ts",children:"type Release = {\n  name: string;\n  type: VersionType;\n};\n\ntype Changeset = {\n  summary: string;\n  releases: Array<Release>;\n};\n"})}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:"options"}),"\n"]}),"\n",(0,c.jsx)(n.p,{children:"\u914D\u7F6E commit \u65F6\u7684\u914D\u7F6E\u4FE1\u606F\u3002"}),"\n",(0,c.jsxs)(n.blockquote,{children:["\n",(0,c.jsx)(n.p,{children:"commit \u914D\u7F6E\u4E3A\u6570\u7EC4\u65F6\uFF0C\u7B2C\u4E8C\u4E2A\u53C2\u6570\u652F\u6301\u4F20\u5165\u9ED8\u8BA4\u7684\u914D\u7F6E\u4FE1\u606F\uFF0C\u4F1A\u5BF9\u5E94\u7684\u4F7F\u7528\u8BE5\u53C2\u6570\u4F20\u9012\u3002"}),"\n"]}),"\n",(0,c.jsxs)(n.h4,{id:"\u8FD4\u56DE\u503C",children:["\u8FD4\u56DE\u503C",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u8FD4\u56DE\u503C",children:"#"})]}),"\n",(0,c.jsx)(n.p,{children:"commit \u4FE1\u606F\u5185\u5BB9\u3002"}),"\n",(0,c.jsxs)(n.h4,{id:"\u9ED8\u8BA4\u5B9E\u73B0",children:["\u9ED8\u8BA4\u5B9E\u73B0",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u9ED8\u8BA4\u5B9E\u73B0",children:"#"})]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"@changesets/cli/commit"})," \u9ED8\u8BA4\u5904\u7406\u903B\u8F91\u4E3A\u4EE5 ",(0,c.jsx)(n.code,{children:"docs(changeset):"})," \u5F00\u5934\uFF0Ccommit \u4FE1\u606F\u4E3A changeset \u7684 ",(0,c.jsx)(n.code,{children:"summary"}),"\uFF0C\u5E76\u6839\u636E\u4F20\u5165\u7684 ",(0,c.jsx)(n.code,{children:"skipCI"})," \u53C2\u6570\u914D\u7F6E\u6DFB\u52A0 [skip ci] \u4FE1\u606F\u3002"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-ts",children:"type SkipCI = boolean | 'add' | 'version';\n\nconst getAddMessage = async (\n  changeset: Changeset,\n  options: { skipCI?: SkipCI } | null,\n) => {\n  const skipCI = options?.skipCI === 'add' || options?.skipCI === true;\n  return outdent`docs(changeset): ${changeset.summary}${\n    skipCI ? `\\n\\n[skip ci]\\n` : ''\n  }`;\n};\n"})}),"\n",(0,c.jsxs)(n.blockquote,{children:["\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.a,{href:"https://www.npmjs.com/package/outdent",target:"_blank",rel:"noopener noreferrer",children:"outdent"})," \u76EE\u7684\u662F\u5220\u9664\u6A21\u677F\u5B57\u7B26\u4E32\u5F00\u5934\u7684\u7A7A\u683C\u5185\u5BB9\uFF0C\u4F7F commit \u4FE1\u606F\u66F4\u7B26\u5408\u89C4\u8303\u3002"]}),"\n"]}),"\n",(0,c.jsxs)(n.h3,{id:"getversionmessage",children:["getVersionMessage",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#getversionmessage",children:"#"})]}),"\n",(0,c.jsxs)(n.h4,{id:"params-1",children:["Params",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#params-1",children:"#"})]}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:"releasePlan"}),"\n"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-ts",children:"type VersionType = 'major' | 'minor' | 'patch' | 'none';\n\ntype Release = {\n  name: string;\n  type: VersionType;\n};\n\ntype Changeset = {\n  id: string;\n  summary: string;\n  releases: Array<Release>;\n};\n\ntype ComprehensiveRelease = {\n  name: string;\n  type: VersionType;\n  oldVersion: string;\n  newVersion: string;\n  changesets: string[];\n};\n\ntype PreState = {\n  mode: 'pre' | 'exit'; // pre \u6A21\u5F0F\u5F53\u524D\u72B6\u6001\n  tag: string; // pre \u7684\u7C7B\u578B\n  initialVersions: {\n    [pkgName: string]: string; // \u7248\u672C\u5347\u7EA7\u524D\u5305\u540D\u53CA\u7248\u672C\u53F7\u4FE1\u606F\uFF0CMap \u683C\u5F0F\n  };\n  changesets: string[]; // \u672C\u6B21\u5347\u7EA7\u7684 changeset id \u5217\u8868\n};\n\ntype ReleasePlan = {\n  changesets: Changeset[]; // \u672C\u6B21\u5347\u7EA7\u7684 changeset \u5217\u8868\n  releases: ComprehensiveRelease[]; // \u5F53\u524D\u5347\u7EA7\u7684\u5305\u4FE1\u606F\uFF0C\u5305\u542B\u5305\u540D\u79F0\u3001\u5F53\u524D\u7248\u672C\u3001\u5347\u7EA7\u540E\u7248\u672C\u3001\u5347\u7EA7\u7C7B\u578B\u7B49\n  preState: PreState | undefined; // \u5F53\u524D\u5982\u679C\u4E3A pre \u53D1\u5E03\uFF0C\u63D0\u4F9B\u76F8\u5173\u72B6\u6001\u4FE1\u606F\n};\n"})}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:"options"}),"\n"]}),"\n",(0,c.jsx)(n.p,{children:"\u914D\u7F6E commit \u65F6\u7684\u5176\u4ED6\u53C2\u6570\u3002"}),"\n",(0,c.jsxs)(n.blockquote,{children:["\n",(0,c.jsx)(n.p,{children:"commit \u914D\u7F6E\u4E3A\u6570\u7EC4\u65F6\uFF0C\u7B2C\u4E8C\u4E2A\u53C2\u6570\u652F\u6301\u4F20\u5165\u9ED8\u8BA4\u7684\u914D\u7F6E\u4FE1\u606F\uFF0C\u4F1A\u5BF9\u5E94\u7684\u4F7F\u7528\u8BE5\u53C2\u6570\u4F20\u9012\u3002"}),"\n"]}),"\n",(0,c.jsxs)(n.h4,{id:"\u8FD4\u56DE\u503C-1",children:["\u8FD4\u56DE\u503C",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u8FD4\u56DE\u503C-1",children:"#"})]}),"\n",(0,c.jsx)(n.p,{children:"commit \u4FE1\u606F\u5185\u5BB9\u3002"}),"\n",(0,c.jsxs)(n.h4,{id:"\u9ED8\u8BA4\u5B9E\u73B0-1",children:["\u9ED8\u8BA4\u5B9E\u73B0",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u9ED8\u8BA4\u5B9E\u73B0-1",children:"#"})]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"@changesets/cli/commit"})," \u9ED8\u8BA4\u5904\u7406\u903B\u8F91\u4E3A\uFF1A\u5148\u5C55\u793A\u5F53\u524D\u9700\u8981 release \u7684\u5305\u6570\u91CF\uFF0C\u518D\u5C55\u793A release \u5305\u7684\u540D\u79F0\u53CA\u65B0\u7248\u672C\u53F7\uFF0C\u5E76\u6839\u636E\u4F20\u5165\u7684 ",(0,c.jsx)(n.code,{children:"skipCI"})," \u53C2\u6570\u914D\u7F6E\u6DFB\u52A0 [skip ci] \u4FE1\u606F\u3002"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-ts",children:"const getVersionMessage = async (\n  releasePlan: ReleasePlan,\n  options: { skipCI?: SkipCI } | null,\n) => {\n  const skipCI = options?.skipCI === 'version' || options?.skipCI === true;\n  const publishableReleases = releasePlan.releases.filter(\n    release => release.type !== 'none',\n  );\n  const numPackagesReleased = publishableReleases.length;\n\n  const releasesLines = publishableReleases\n    .map(release => `  ${release.name}@${release.newVersion}`)\n    .join('\\n');\n\n  return outdent`\n    RELEASING: Releasing ${numPackagesReleased} package(s)\n\n    Releases:\n    ${releasesLines}\n    ${skipCI ? `\\n[skip ci]\\n` : ''}\n`;\n};\n"})}),"\n",(0,c.jsxs)(n.h2,{id:"\u914D\u7F6E",children:["\u914D\u7F6E",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u914D\u7F6E",children:"#"})]}),"\n",(0,c.jsxs)(n.p,{children:["Changesets \u914D\u7F6E\u6587\u4EF6\u4E2D ",(0,c.jsx)(n.code,{children:"commit"})," \u5B57\u6BB5\uFF0C\u8BE5\u5B57\u6BB5\u7528\u4E8E\u6807\u8BB0\u662F\u5426\u9700\u8981\u5728 ",(0,c.jsx)(n.code,{children:"change"})," \u548C ",(0,c.jsx)(n.code,{children:"bump"})," \u547D\u4EE4\u662F\u63D0\u4EA4 commit \u4FE1\u606F\u53CA commit \u4FE1\u606F\u7684\u83B7\u53D6\u9014\u5F84\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:["\u8BE5\u914D\u7F6E\u53EF\u4EE5\u4E3A ",(0,c.jsx)(n.code,{children:"boolean"}),"\uFF0C\u4E3A true \u65F6\u4F7F\u7528\u9ED8\u8BA4 ",(0,c.jsx)(n.code,{children:"@changesets/cli/commit"})," \u683C\u5F0F\u5316 commit \u4FE1\u606F\u3002"]}),"\n",(0,c.jsx)(n.p,{children:"\u8BE5\u914D\u7F6E\u53EF\u4EE5\u4E3A\u5B57\u7B26\u4E32\uFF0C\u76F4\u63A5\u58F0\u660E\u83B7\u53D6 commit \u4FE1\u606F\u6A21\u5757\u7684\u6A21\u5757\u540D\u79F0\u6216\u8005\u8DEF\u5F84\u3002"}),"\n",(0,c.jsxs)(n.p,{children:["\u8BE5\u914D\u7F6E\u8FD8\u652F\u6301\u914D\u7F6E\u6570\u7EC4\uFF0C\u6570\u7EC4\u4E2D\u7B2C\u4E00\u4E2A\u5143\u7D20\u4E3A\u83B7\u53D6 commit \u4FE1\u606F\u6A21\u5757\u7684\u6A21\u5757\u540D\u79F0\u6216\u8005\u8DEF\u5F84\uFF0C\u7B2C\u4E8C\u4E2A\u5143\u7D20\u4E3A\u4F20\u5165\u5BF9\u5E94\u51FD\u6570\u7684\u53C2\u6570\u503C\uFF0C\u4F1A\u4F5C\u4E3A ",(0,c.jsx)(n.code,{children:"getAddMessage"})," \u548C ",(0,c.jsx)(n.code,{children:"getVersionMessage"})," \u51FD\u6570\u7684\u7B2C\u4E8C\u4E2A\u53C2\u6570\u4F20\u5165\u3002"]}),"\n",(0,c.jsxs)(n.h3,{id:"\u914D\u7F6E\u76F8\u5BF9\u8DEF\u5F84",children:["\u914D\u7F6E\u76F8\u5BF9\u8DEF\u5F84",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u914D\u7F6E\u76F8\u5BF9\u8DEF\u5F84",children:"#"})]}),"\n",(0,c.jsxs)(n.p,{children:["commit \u914D\u7F6E\u5982\u679C\u4E3A\u76F8\u5BF9\u8DEF\u5F84\u4E3A ",(0,c.jsx)(n.code,{children:".changesets"})," \u76EE\u5F55\u4E0B\u7684\u76F8\u5BF9\u8DEF\u5F84\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:["\u4F8B\u5982\u521B\u5EFA ",(0,c.jsx)(n.code,{children:".changeset/my-commit-config.js"})," \u6587\u4EF6\uFF0C\u5B9A\u4E49\u5982\u4E0B\u5185\u5BB9\uFF1A"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-js",meta:'title=".changeset/my-commit-config.js"',children:"async function getAddMessage(changeset, options) {}\n\nasync function getVersionMessage(releasePlan, options) {}\n\nmodule.exports = {\n  getAddMessage,\n  getVersionMessage,\n};\n"})}),"\n",(0,c.jsx)(n.p,{children:"commit \u914D\u7F6E\u4E3A ./my-commit-config.js \u5373\u53EF:"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-json",meta:'title=".changesets/config.json"',children:'{\n  "changelog": "./my-commit-config.js",\n   ...\n}\n'})}),"\n",(0,c.jsxs)(n.h3,{id:"\u4F7F\u7528-modernjs-module",children:["\u4F7F\u7528 Modern.js Module",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u4F7F\u7528-modernjs-module",children:"#"})]}),"\n",(0,c.jsx)(n.p,{children:"\u81EA\u5B9A\u4E49 commit \u8FD8\u53EF\u4EE5\u4F7F\u7528 Modern.js Module \u8FDB\u884C\u7BA1\u7406\uFF0C\u63D0\u4F9B\u901A\u7528\u65B9\u6848\u3002"}),"\n",(0,c.jsxs)(n.h4,{id:"\u4F7F\u7528-npx-modern-jscreatelatest-\u521B\u5EFA-modernjs-module",children:["\u4F7F\u7528 ",(0,c.jsx)(n.code,{children:"npx @modern-js/create@latest"})," \u521B\u5EFA Modern.js Module",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u4F7F\u7528-npx-modern-jscreatelatest-\u521B\u5EFA-modernjs-module",children:"#"})]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-md",children:"? \u8BF7\u9009\u62E9\u4F60\u60F3\u521B\u5EFA\u7684\u5DE5\u7A0B\u7C7B\u578B\uFF1ANpm \u6A21\u5757\n? \u8BF7\u586B\u5199\u9879\u76EE\u540D\u79F0\uFF1Acustom-commit\n? \u8BF7\u9009\u62E9\u5F00\u53D1\u8BED\u8A00\uFF1ATS\n? \u8BF7\u9009\u62E9\u5305\u7BA1\u7406\u5DE5\u5177\uFF1Apnpm\n"})}),"\n",(0,c.jsxs)(n.h4,{id:"\u5B9E\u73B0\u81EA\u5B9A\u4E49\u5185\u5BB9",children:["\u5B9E\u73B0\u81EA\u5B9A\u4E49\u5185\u5BB9",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u5B9E\u73B0\u81EA\u5B9A\u4E49\u5185\u5BB9",children:"#"})]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-ts",meta:'title="src/index.ts"',children:"export async function getAddMessage() {}\n\nexport async function getVersionMessage() {}\n"})}),"\n",(0,c.jsxs)(n.h4,{id:"\u5C06\u6A21\u5757\u53D1\u5E03\u5230-npm",children:["\u5C06\u6A21\u5757\u53D1\u5E03\u5230 NPM",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u5C06\u6A21\u5757\u53D1\u5E03\u5230-npm",children:"#"})]}),"\n",(0,c.jsxs)(n.h4,{id:"\u5728\u76EE\u6807\u4ED3\u5E93\u6839\u76EE\u5F55\u5B89\u88C5\u5BF9\u5E94\u6A21\u5757\u4F8B\u5982-custom-commit",children:["\u5728\u76EE\u6807\u4ED3\u5E93\u6839\u76EE\u5F55\u5B89\u88C5\u5BF9\u5E94\u6A21\u5757\uFF0C\u4F8B\u5982 ",(0,c.jsx)(n.code,{children:"custom-commit"}),(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u5728\u76EE\u6807\u4ED3\u5E93\u6839\u76EE\u5F55\u5B89\u88C5\u5BF9\u5E94\u6A21\u5757\u4F8B\u5982-custom-commit",children:"#"})]}),"\n",(0,c.jsxs)(n.h4,{id:"\u914D\u7F6E-changeset-\u7684-commit-\u914D\u7F6E\u4E3A\u5305\u540D\u79F0",children:["\u914D\u7F6E changeset \u7684 commit \u914D\u7F6E\u4E3A\u5305\u540D\u79F0",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u914D\u7F6E-changeset-\u7684-commit-\u914D\u7F6E\u4E3A\u5305\u540D\u79F0",children:"#"})]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-json",meta:'title="package.json"',children:'{\n  "commit": "custom-commit",\n   ...\n}\n'})}),"\n",(0,c.jsxs)(n.h3,{id:"\u4F7F\u7528-monorepo-\u5DE5\u7A0B\u65B9\u6848",children:["\u4F7F\u7528 Monorepo \u5DE5\u7A0B\u65B9\u6848",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u4F7F\u7528-monorepo-\u5DE5\u7A0B\u65B9\u6848",children:"#"})]}),"\n",(0,c.jsx)(n.p,{children:"\u5982\u679C\u4F60\u5F53\u524D\u4ED3\u5E93\u4E3A Monorepo \u5DE5\u7A0B\u65B9\u6848\uFF0C\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528\u6A21\u5757\u5B50\u9879\u76EE\u8FDB\u884C\u7BA1\u7406\u3002"}),"\n",(0,c.jsxs)(n.h4,{id:"\u6267\u884C-pnpm-run-new-\u521B\u5EFA\u6A21\u5757\u5B50\u9879\u76EE",children:["\u6267\u884C ",(0,c.jsx)(n.code,{children:"pnpm run new"})," \u521B\u5EFA\u6A21\u5757\u5B50\u9879\u76EE",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u6267\u884C-pnpm-run-new-\u521B\u5EFA\u6A21\u5757\u5B50\u9879\u76EE",children:"#"})]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-md",children:"? \u8BF7\u9009\u62E9\u4F60\u60F3\u521B\u5EFA\u7684\u5DE5\u7A0B\u7C7B\u578B\uFF1ANpm \u6A21\u5757\n? \u8BF7\u586B\u5199\u5B50\u9879\u76EE\u540D\u79F0\uFF1Acustom-commit\n? \u8BF7\u586B\u5199\u5B50\u9879\u76EE\u76EE\u5F55\u540D\u79F0\uFF1Acustom-commit\n? \u8BF7\u9009\u62E9\u5F00\u53D1\u8BED\u8A00\uFF1ATS\n"})}),"\n",(0,c.jsxs)(n.h4,{id:"\u5B9E\u73B0\u81EA\u5B9A\u4E49\u5185\u5BB9-1",children:["\u5B9E\u73B0\u81EA\u5B9A\u4E49\u5185\u5BB9",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u5B9E\u73B0\u81EA\u5B9A\u4E49\u5185\u5BB9-1",children:"#"})]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-ts",meta:'title="src/index.ts"',children:"export async function getAddMessage() {}\n\nexport async function getVersionMessage() {}\n"})}),"\n",(0,c.jsxs)(n.h4,{id:"\u5728-monorepo-\u6839\u76EE\u5F55\u6DFB\u52A0\u5B50\u9879\u76EE\u6A21\u5757\u4F9D\u8D56\u4F8B\u5982-custom-commit",children:["\u5728 Monorepo \u6839\u76EE\u5F55\u6DFB\u52A0\u5B50\u9879\u76EE\u6A21\u5757\u4F9D\u8D56\uFF0C\u4F8B\u5982 ",(0,c.jsx)(n.code,{children:"custom-commit"}),(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u5728-monorepo-\u6839\u76EE\u5F55\u6DFB\u52A0\u5B50\u9879\u76EE\u6A21\u5757\u4F9D\u8D56\u4F8B\u5982-custom-commit",children:"#"})]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-json",meta:'title="package.json"',children:'{\n  "devDependencies": {\n    "custom-commit": "workspace:*",\n    ...\n  }\n}\n'})}),"\n",(0,c.jsxs)(n.h4,{id:"\u914D\u7F6E-changeset-\u7684-commit-\u914D\u7F6E\u4E3A\u5305\u540D\u79F0-1",children:["\u914D\u7F6E changeset \u7684 commit \u914D\u7F6E\u4E3A\u5305\u540D\u79F0",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u914D\u7F6E-changeset-\u7684-commit-\u914D\u7F6E\u4E3A\u5305\u540D\u79F0-1",children:"#"})]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-json",meta:'title=".changesets/config.json"',children:'{\n  "commit": "custom-commit",\n   ...\n}\n'})}),"\n",(0,c.jsx)(n.p,{children:"\u8BE5\u6A21\u5757\u53D1\u5E03\u5230 NPM \u540E\uFF0C\u4F9D\u7136\u53EF\u4EE5\u548C\u6A21\u5757\u7C7B\u578B\u4E00\u6837\u4F9B\u5176\u4ED6\u4ED3\u5E93\u4F7F\u7528\u3002"})]})}function r(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,i.useMDXComponents)(),e.components);return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(a,{...e})}):a(e)}n.default=r,r.__RSPRESS_PAGE_META={},r.__RSPRESS_PAGE_META["zh%2Fguides%2Ftopic-detail%2Fchangesets%2Fcommit.mdx"]={toc:[{text:"\u81EA\u5B9A\u4E49 commit \u4FE1\u606F\u5185\u5BB9",id:"\u81EA\u5B9A\u4E49-commit-\u4FE1\u606F\u5185\u5BB9",depth:2},{text:"getAddMessage",id:"getaddmessage",depth:3},{text:"Params",id:"params",depth:4},{text:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",depth:4},{text:"\u9ED8\u8BA4\u5B9E\u73B0",id:"\u9ED8\u8BA4\u5B9E\u73B0",depth:4},{text:"getVersionMessage",id:"getversionmessage",depth:3},{text:"Params",id:"params-1",depth:4},{text:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C-1",depth:4},{text:"\u9ED8\u8BA4\u5B9E\u73B0",id:"\u9ED8\u8BA4\u5B9E\u73B0-1",depth:4},{text:"\u914D\u7F6E",id:"\u914D\u7F6E",depth:2},{text:"\u914D\u7F6E\u76F8\u5BF9\u8DEF\u5F84",id:"\u914D\u7F6E\u76F8\u5BF9\u8DEF\u5F84",depth:3},{text:"\u4F7F\u7528 Modern.js Module",id:"\u4F7F\u7528-modernjs-module",depth:3},{text:"\u4F7F\u7528 `npx @modern-js/create@latest` \u521B\u5EFA Modern.js Module",id:"\u4F7F\u7528-npx-modern-jscreatelatest-\u521B\u5EFA-modernjs-module",depth:4},{text:"\u5B9E\u73B0\u81EA\u5B9A\u4E49\u5185\u5BB9",id:"\u5B9E\u73B0\u81EA\u5B9A\u4E49\u5185\u5BB9",depth:4},{text:"\u5C06\u6A21\u5757\u53D1\u5E03\u5230 NPM",id:"\u5C06\u6A21\u5757\u53D1\u5E03\u5230-npm",depth:4},{text:"\u5728\u76EE\u6807\u4ED3\u5E93\u6839\u76EE\u5F55\u5B89\u88C5\u5BF9\u5E94\u6A21\u5757\uFF0C\u4F8B\u5982 `custom-commit`",id:"\u5728\u76EE\u6807\u4ED3\u5E93\u6839\u76EE\u5F55\u5B89\u88C5\u5BF9\u5E94\u6A21\u5757\u4F8B\u5982-custom-commit",depth:4},{text:"\u914D\u7F6E changeset \u7684 commit \u914D\u7F6E\u4E3A\u5305\u540D\u79F0",id:"\u914D\u7F6E-changeset-\u7684-commit-\u914D\u7F6E\u4E3A\u5305\u540D\u79F0",depth:4},{text:"\u4F7F\u7528 Monorepo \u5DE5\u7A0B\u65B9\u6848",id:"\u4F7F\u7528-monorepo-\u5DE5\u7A0B\u65B9\u6848",depth:3},{text:"\u6267\u884C `pnpm run new` \u521B\u5EFA\u6A21\u5757\u5B50\u9879\u76EE",id:"\u6267\u884C-pnpm-run-new-\u521B\u5EFA\u6A21\u5757\u5B50\u9879\u76EE",depth:4},{text:"\u5B9E\u73B0\u81EA\u5B9A\u4E49\u5185\u5BB9",id:"\u5B9E\u73B0\u81EA\u5B9A\u4E49\u5185\u5BB9-1",depth:4},{text:"\u5728 Monorepo \u6839\u76EE\u5F55\u6DFB\u52A0\u5B50\u9879\u76EE\u6A21\u5757\u4F9D\u8D56\uFF0C\u4F8B\u5982 `custom-commit`",id:"\u5728-monorepo-\u6839\u76EE\u5F55\u6DFB\u52A0\u5B50\u9879\u76EE\u6A21\u5757\u4F9D\u8D56\u4F8B\u5982-custom-commit",depth:4},{text:"\u914D\u7F6E changeset \u7684 commit \u914D\u7F6E\u4E3A\u5305\u540D\u79F0",id:"\u914D\u7F6E-changeset-\u7684-commit-\u914D\u7F6E\u4E3A\u5305\u540D\u79F0-1",depth:4}],title:"\u81EA\u5B9A\u4E49\u63D0\u4EA4 commit \u4FE1\u606F",frontmatter:{sidebar_position:7}}}}]);