/*! For license information please see 26626.a60df7e5.js.LICENSE.txt */
(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["26626"],{51797:function(e,n,s){"use strict";s.r(n);var a=s("39980"),c=s("9580");function d(e){let n=Object.assign({h1:"h1",a:"a",p:"p",code:"code",h2:"h2",ul:"ul",li:"li",h3:"h3",h4:"h4",pre:"pre"},(0,c.ah)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.h1,{id:"\u81EA\u5B9A\u4E49-changelog-\u751F\u6210",children:["\u81EA\u5B9A\u4E49 changelog \u751F\u6210",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u81EA\u5B9A\u4E49-changelog-\u751F\u6210",children:"#"})]}),"\n",(0,a.jsxs)(n.p,{children:["Changesets \u9ED8\u8BA4\u4F1A\u4F7F\u7528 ",(0,a.jsx)(n.code,{children:"@changesets/cli/changelog"})," \u751F\u6210 Changelog \u4FE1\u606F\uFF0C\u5982\u679C\u9ED8\u8BA4\u7684 changelog \u4FE1\u606F\u4E0D\u80FD\u6EE1\u8DB3\u9700\u6C42\uFF0C\u53EF\u4EE5\u81EA\u5B9A\u4E49 changelog \u7684\u751F\u6210\u3002"]}),"\n",(0,a.jsxs)(n.h2,{id:"\u81EA\u5B9A\u4E49-changelog-\u5185\u5BB9",children:["\u81EA\u5B9A\u4E49 changelog \u5185\u5BB9",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u81EA\u5B9A\u4E49-changelog-\u5185\u5BB9",children:"#"})]}),"\n",(0,a.jsx)(n.p,{children:"changelog \u4FE1\u606F\u4E3B\u8981\u5305\u542B\u4EE5\u4E0B\u4E24\u79CD\u4FE1\u606F\uFF1A"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"changeset \u4E2D\u5199\u5165\u7684 changelog \u4FE1\u606F\u3002"}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"\u672C\u6B21\u7248\u672C\u5347\u7EA7\u5173\u8054\u5305\u7684\u7248\u672C\u53D8\u66F4\u4FE1\u606F\u3002"}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["\u81EA\u5B9A\u4E49\u903B\u8F91\u4E3B\u8981\u5B9E\u73B0\u4E24\u4E2A\u51FD\u6570\uFF0C",(0,a.jsx)(n.code,{children:"getReleaseLine"})," \u548C ",(0,a.jsx)(n.code,{children:"getDependencyReleaseLine"}),"\uFF0C\u5206\u522B\u7528\u6765\u5B9A\u4E49\u4E0A\u8FF0\u8FD9\u4E24\u79CD\u4FE1\u606F\u3002"]}),"\n",(0,a.jsxs)(n.h3,{id:"getreleaseline",children:["getReleaseLine",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#getreleaseline",children:"#"})]}),"\n",(0,a.jsxs)(n.h4,{id:"params",children:["Params",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#params",children:"#"})]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"changeset"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"export type VersionType = 'major' | 'minor' | 'patch' | 'none';\n\nexport type Release = { name: string; type: VersionType };\n\nexport type Changeset = {\n  id: string; // changeset \u7684\u6587\u4EF6\u540D\u79F0\n  commit?: string; // changeset \u63D0\u4EA4\u65F6\u7684 commit id \u4FE1\u606F\n  summary: string; // changeset \u5185\u5BB9\u4FE1\u606F\n  releases: Array<Release>; // \u5F53\u524D\u8BA1\u7B97\u51FA\u7684 changeset \u5347\u7EA7\u5305\u540D\u79F0\u53CA\u7C7B\u578B\u4FE1\u606F\n};\n"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"type"}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["\u5F53\u524D\u5305\u5BF9\u5E94\u7684\u5347\u7EA7\u7248\u672C\u7C7B\u578B\uFF0C\u7C7B\u578B\u4E3A\u4E0A\u8FF0 ",(0,a.jsx)(n.code,{children:"VersionType"}),"\u3002"]}),"\n",(0,a.jsxs)(n.h4,{id:"\u8FD4\u56DE\u503C",children:["\u8FD4\u56DE\u503C",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u8FD4\u56DE\u503C",children:"#"})]}),"\n",(0,a.jsx)(n.p,{children:"changelog \u5185\u5BB9\u3002"}),"\n",(0,a.jsxs)(n.h4,{id:"\u9ED8\u8BA4\u5B9E\u73B0",children:["\u9ED8\u8BA4\u5B9E\u73B0",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u9ED8\u8BA4\u5B9E\u73B0",children:"#"})]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"@changesets/cli/changelog"})," \u9ED8\u8BA4\u5904\u7406\u903B\u8F91\u4E3A\u5C06 ",(0,a.jsx)(n.code,{children:"summary"})," \u4FE1\u606F\u6309\u7167\u6362\u884C\u7B26 ",(0,a.jsx)(n.code,{children:"\\n"})," \u5206\u5272\uFF0C\u7B2C\u4E00\u6837\u524D\u9762\u589E\u52A0 ",(0,a.jsx)(n.code,{children:"-"})," \u4F5C\u4E3A\u5217\u8868\u5F00\u5934\uFF0C\u5176\u4ED6\u5185\u5BB9\u4F5C\u4E3A\u7B2C\u4E00\u884C\u5185\u5BB9\u7684\u8865\u5145\u6574\u7406\u5728\u5217\u8868\u4E0B\u65B9\u3002"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"async function getReleaseLine(changeset, type) {\n  const [firstLine, ...futureLines] = changeset.summary\n    .split('\\n')\n    .map(l => l.trimRight());\n\n  let returnVal = `- ${\n    changeset.commit ? `${changeset.commit}: ` : ''\n  }${firstLine}`;\n\n  if (futureLines.length > 0) {\n    returnVal += `\\n${futureLines.map(l => `  ${l}`).join('\\n')}`;\n  }\n\n  return returnVal;\n}\n"})}),"\n",(0,a.jsxs)(n.h3,{id:"getdependencyreleaseline",children:["getDependencyReleaseLine",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#getdependencyreleaseline",children:"#"})]}),"\n",(0,a.jsxs)(n.h4,{id:"params-1",children:["Params",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#params-1",children:"#"})]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"changesets"}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["\u5F53\u524D\u5173\u8054\u7684\u6240\u6709 changeset \u4FE1\u606F\uFF0C\u7C7B\u578B\u4E3A ",(0,a.jsx)(n.code,{children:"getReleaseLine"})," changeset \u7C7B\u578B\u6570\u7EC4\u3002"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"dependenciesUpdated"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"type ModCompWithPackage = {\n  name: string; // \u4F9D\u8D56\u6A21\u5757\u540D\u79F0\n  type: VersionType; // \u4F9D\u8D56\u6A21\u5757\u7684\u5347\u7EA7\u7C7B\u578B\n  oldVersion: string; // \u4F9D\u8D56\u6A21\u5757\u5F53\u524D\u7248\u672C\u53F7\n  newVersion: string; // \u4F9D\u8D56\u6A21\u5757\u65B0\u7248\u672C\u53F7\n  changesets: string[]; // \u5173\u8054\u7684 changeset id \u5217\u8868\n  packageJson: PackageJSON; // \u4F9D\u8D56\u6A21\u5757\u5B8C\u6574\u7684 package.json \u5185\u5BB9\n  dir: string; // \u4F9D\u8D56\u6A21\u5757\u7684\u8DEF\u5F84(\u7EDD\u5BF9\u8DEF\u5F84)\n};\n\ntype DependenciesUpdated = ModCompWithPackage[];\n"})}),"\n",(0,a.jsxs)(n.h4,{id:"\u8FD4\u56DE\u503C-1",children:["\u8FD4\u56DE\u503C",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u8FD4\u56DE\u503C-1",children:"#"})]}),"\n",(0,a.jsx)(n.p,{children:"changelog \u5185\u5BB9\u3002"}),"\n",(0,a.jsxs)(n.h4,{id:"\u9ED8\u8BA4\u5B9E\u73B0-1",children:["\u9ED8\u8BA4\u5B9E\u73B0",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u9ED8\u8BA4\u5B9E\u73B0-1",children:"#"})]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"@changesets/cli/changelog"})," \u9ED8\u8BA4\u4F1A\u4F7F\u7528 changesets \u4FE1\u606F\u5C55\u793A\u5BF9\u5E94\u7684 ",(0,a.jsx)(n.code,{children:"Updated dependencies + commit id"}),"\uFF0C\u4EE5\u5217\u8868\u5F62\u5F0F\u5C55\u793A\u3002\u7136\u540E\u6839\u636E ",(0,a.jsx)(n.code,{children:"dependenciesUpdated"})," \u4FE1\u606F\u5C55\u793A\u5BF9\u5E94\u7684\u4F9D\u8D56\u5305\u5305\u540D\u548C\u65B0\u7248\u672C\u53F7\uFF0C\u4F5C\u4E3A\u5217\u8868\u7684\u5B50\u5217\u8868\u9879\u3002"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"async function getDependencyReleaseLine(changesets, dependenciesUpdated) {\n  console.log('getDependencyReleaseLine', changesets, dependenciesUpdated);\n  if (dependenciesUpdated.length === 0) return '';\n\n  const changesetLinks = changesets.map(\n    changeset =>\n      `- Updated dependencies${\n        changeset.commit ? ` [${changeset.commit}]` : ''\n      }`,\n  );\n\n  const updatedDepenenciesList = dependenciesUpdated.map(\n    dependency => `  - ${dependency.name}@${dependency.newVersion}`,\n  );\n\n  return [...changesetLinks, ...updatedDepenenciesList].join('\\n');\n}\n"})}),"\n",(0,a.jsx)(n.p,{children:"\u5C55\u793A\u6548\u679C\u4E3A\uFF1A"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-markdown",children:"- Updated dependencies [f0438ab]\n- Updated dependencies [f0438ab]\n  - module-3@2.0.0\n  - module-1@0.2.0\n"})}),"\n",(0,a.jsxs)(n.h2,{id:"\u914D\u7F6E",children:["\u914D\u7F6E",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u914D\u7F6E",children:"#"})]}),"\n",(0,a.jsxs)(n.p,{children:["Changesets \u914D\u7F6E\u6587\u4EF6\u4E2D ",(0,a.jsx)(n.code,{children:"changelog"})," \u5B57\u6BB5\u7528\u4E8E\u6807\u8BB0 changelog \u4FE1\u606F\u7684\u83B7\u53D6\u9014\u5F84\u3002"]}),"\n",(0,a.jsx)(n.p,{children:"\u8BE5\u914D\u7F6E\u53EF\u4EE5\u4E3A\u5B57\u7B26\u4E32\uFF0C\u76F4\u63A5\u58F0\u660E\u83B7\u53D6 changelog \u4FE1\u606F\u6A21\u5757\u7684\u6A21\u5757\u540D\u79F0\u6216\u8005\u8DEF\u5F84\u3002"}),"\n",(0,a.jsxs)(n.p,{children:["\u8BE5\u914D\u7F6E\u8FD8\u652F\u6301\u914D\u7F6E\u6570\u7EC4\uFF0C\u6570\u7EC4\u4E2D\u7B2C\u4E00\u4E2A\u5143\u7D20\u4E3A\u83B7\u53D6 changelog \u4FE1\u606F\u6A21\u5757\u7684\u6A21\u5757\u540D\u79F0\u6216\u8005\u8DEF\u5F84\uFF0C\u7B2C\u4E8C\u4E2A\u5143\u7D20\u4E3A\u4F20\u5165\u5BF9\u5E94\u51FD\u6570\u7684\u53C2\u6570\u503C\uFF0C\u4F1A\u4F5C\u4E3A ",(0,a.jsx)(n.code,{children:"getReleaseLine"})," \u548C ",(0,a.jsx)(n.code,{children:"getDependencyReleaseLine"})," \u51FD\u6570\u7684\u7B2C\u4E09\u4E2A\u53C2\u6570\u4F20\u5165\u3002"]}),"\n",(0,a.jsxs)(n.h3,{id:"\u914D\u7F6E\u76F8\u5BF9\u8DEF\u5F84",children:["\u914D\u7F6E\u76F8\u5BF9\u8DEF\u5F84",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u914D\u7F6E\u76F8\u5BF9\u8DEF\u5F84",children:"#"})]}),"\n",(0,a.jsxs)(n.p,{children:["changelog \u914D\u7F6E\u5982\u679C\u4E3A\u76F8\u5BF9\u8DEF\u5F84\u4E3A ",(0,a.jsx)(n.code,{children:".changesets"})," \u76EE\u5F55\u4E0B\u7684\u76F8\u5BF9\u8DEF\u5F84\u3002"]}),"\n",(0,a.jsxs)(n.p,{children:["\u4F8B\u5982\u521B\u5EFA ",(0,a.jsx)(n.code,{children:".changeset/my-changelog-config.js"})," \u6587\u4EF6\uFF0C\u5B9A\u4E49\u5982\u4E0B\u5185\u5BB9\uFF1A"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",meta:'title=".changeset/my-changelog-config.js"',children:"async function getReleaseLine(changeset, type) {}\n\nasync function getDependencyReleaseLine(changesets, dependenciesUpdated) {}\n\nmodule.exports = {\n  getReleaseLine,\n  getDependencyReleaseLine,\n};\n"})}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"changlog"})," \u914D\u7F6E\u4E3A ",(0,a.jsx)(n.code,{children:"./my-changelog-config.js"})," \u5373\u53EF:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",meta:'title=".changesets/config.json"',children:'{\n  "changelog": "./my-changelog-config.js",\n   ...\n}\n'})}),"\n",(0,a.jsxs)(n.h3,{id:"\u4F7F\u7528-modernjs-module",children:["\u4F7F\u7528 Modern.js Module",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u4F7F\u7528-modernjs-module",children:"#"})]}),"\n",(0,a.jsx)(n.p,{children:"\u81EA\u5B9A\u4E49 changelog \u8FD8\u53EF\u4EE5\u4F7F\u7528 Modern.js Module \u65B9\u6848\u8FDB\u884C\u7BA1\u7406\uFF0C\u63D0\u4F9B\u901A\u7528\u65B9\u6848\u3002"}),"\n",(0,a.jsxs)(n.h4,{id:"\u4F7F\u7528-npx-modern-jscreatelatest-\u521B\u5EFA-modernjs-module",children:["\u4F7F\u7528 ",(0,a.jsx)(n.code,{children:"npx @modern-js/create@latest"})," \u521B\u5EFA Modern.js Module",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u4F7F\u7528-npx-modern-jscreatelatest-\u521B\u5EFA-modernjs-module",children:"#"})]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-md",children:"? \u8BF7\u9009\u62E9\u4F60\u60F3\u521B\u5EFA\u7684\u5DE5\u7A0B\u7C7B\u578B\uFF1ANpm \u6A21\u5757\n? \u8BF7\u586B\u5199\u9879\u76EE\u540D\u79F0\uFF1Acustom-changelog\n? \u8BF7\u9009\u62E9\u5F00\u53D1\u8BED\u8A00\uFF1ATS\n? \u8BF7\u9009\u62E9\u5305\u7BA1\u7406\u5DE5\u5177\uFF1Apnpm\n"})}),"\n",(0,a.jsxs)(n.h4,{id:"\u5B9E\u73B0\u81EA\u5B9A\u4E49\u5185\u5BB9",children:["\u5B9E\u73B0\u81EA\u5B9A\u4E49\u5185\u5BB9",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u5B9E\u73B0\u81EA\u5B9A\u4E49\u5185\u5BB9",children:"#"})]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",meta:'title="src/index.ts"',children:"export async function getReleaseLine() {}\n\nexport async function getDependencyReleaseLine() {}\n"})}),"\n",(0,a.jsxs)(n.h4,{id:"\u5C06\u6A21\u5757\u53D1\u5E03\u5230-npm",children:["\u5C06\u6A21\u5757\u53D1\u5E03\u5230 NPM",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u5C06\u6A21\u5757\u53D1\u5E03\u5230-npm",children:"#"})]}),"\n",(0,a.jsxs)(n.h4,{id:"\u5728\u76EE\u6807\u4ED3\u5E93\u6839\u76EE\u5F55\u5B89\u88C5\u5BF9\u5E94\u6A21\u5757\u4F8B\u5982-custom-changelog",children:["\u5728\u76EE\u6807\u4ED3\u5E93\u6839\u76EE\u5F55\u5B89\u88C5\u5BF9\u5E94\u6A21\u5757\uFF0C\u4F8B\u5982 ",(0,a.jsx)(n.code,{children:"custom-changelog"}),(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u5728\u76EE\u6807\u4ED3\u5E93\u6839\u76EE\u5F55\u5B89\u88C5\u5BF9\u5E94\u6A21\u5757\u4F8B\u5982-custom-changelog",children:"#"})]}),"\n",(0,a.jsxs)(n.h4,{id:"\u914D\u7F6E-changeset-\u7684-changelog-\u914D\u7F6E\u4E3A\u5305\u540D\u79F0",children:["\u914D\u7F6E changeset \u7684 changelog \u914D\u7F6E\u4E3A\u5305\u540D\u79F0",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u914D\u7F6E-changeset-\u7684-changelog-\u914D\u7F6E\u4E3A\u5305\u540D\u79F0",children:"#"})]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",meta:'title=".changesets/config.json"',children:'{\n  "changelog": "custom-changelog",\n   ...\n}\n'})}),"\n",(0,a.jsxs)(n.h3,{id:"\u4F7F\u7528-monorepo-\u5DE5\u7A0B\u65B9\u6848",children:["\u4F7F\u7528 Monorepo \u5DE5\u7A0B\u65B9\u6848",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u4F7F\u7528-monorepo-\u5DE5\u7A0B\u65B9\u6848",children:"#"})]}),"\n",(0,a.jsx)(n.p,{children:"\u5982\u679C\u4F60\u5F53\u524D\u4ED3\u5E93\u4E3A Monorepo \u5DE5\u7A0B\u65B9\u6848\uFF0C\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528\u6A21\u5757\u5B50\u9879\u76EE\u8FDB\u884C\u7BA1\u7406\u3002"}),"\n",(0,a.jsxs)(n.h4,{id:"\u6267\u884C-pnpm-run-new-\u521B\u5EFA\u6A21\u5757\u5B50\u9879\u76EE",children:["\u6267\u884C ",(0,a.jsx)(n.code,{children:"pnpm run new"})," \u521B\u5EFA\u6A21\u5757\u5B50\u9879\u76EE",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u6267\u884C-pnpm-run-new-\u521B\u5EFA\u6A21\u5757\u5B50\u9879\u76EE",children:"#"})]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-md",children:"? \u8BF7\u9009\u62E9\u4F60\u60F3\u521B\u5EFA\u7684\u5DE5\u7A0B\u7C7B\u578B\uFF1ANpm \u6A21\u5757\n? \u8BF7\u586B\u5199\u5B50\u9879\u76EE\u540D\u79F0\uFF1Acustom-changelog\n? \u8BF7\u586B\u5199\u5B50\u9879\u76EE\u76EE\u5F55\u540D\u79F0\uFF1Acustom-changelog\n? \u8BF7\u9009\u62E9\u5F00\u53D1\u8BED\u8A00\uFF1ATS\n"})}),"\n",(0,a.jsxs)(n.h4,{id:"\u5B9E\u73B0\u81EA\u5B9A\u4E49\u5185\u5BB9-1",children:["\u5B9E\u73B0\u81EA\u5B9A\u4E49\u5185\u5BB9",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u5B9E\u73B0\u81EA\u5B9A\u4E49\u5185\u5BB9-1",children:"#"})]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",meta:'title="src/index.ts"',children:"export async function getReleaseLine() {}\n\nexport async function getDependencyReleaseLine() {}\n"})}),"\n",(0,a.jsxs)(n.h4,{id:"\u5728-monorepo-\u6839\u76EE\u5F55\u6DFB\u52A0\u5B50\u9879\u76EE\u6A21\u5757\u4F9D\u8D56\u4F8B\u5982-custom-changelog",children:["\u5728 Monorepo \u6839\u76EE\u5F55\u6DFB\u52A0\u5B50\u9879\u76EE\u6A21\u5757\u4F9D\u8D56\uFF0C\u4F8B\u5982 ",(0,a.jsx)(n.code,{children:"custom-changelog"}),(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u5728-monorepo-\u6839\u76EE\u5F55\u6DFB\u52A0\u5B50\u9879\u76EE\u6A21\u5757\u4F9D\u8D56\u4F8B\u5982-custom-changelog",children:"#"})]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",meta:'title="package.json"',children:'{\n  "devDependencies": {\n    "custom-changelog": "workspace:*",\n    ...\n  }\n}\n'})}),"\n",(0,a.jsxs)(n.h4,{id:"\u914D\u7F6E-changeset-\u7684-changelog-\u914D\u7F6E\u4E3A\u5305\u540D\u79F0-1",children:["\u914D\u7F6E changeset \u7684 changelog \u914D\u7F6E\u4E3A\u5305\u540D\u79F0",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u914D\u7F6E-changeset-\u7684-changelog-\u914D\u7F6E\u4E3A\u5305\u540D\u79F0-1",children:"#"})]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",meta:'title=".changesets/config.json"',children:'{\n  "changelog": "custom-changelog",\n   ...\n}\n'})}),"\n",(0,a.jsx)(n.p,{children:"\u8BE5\u6A21\u5757\u53D1\u5E03\u5230 NPM \u540E\uFF0C\u4F9D\u7136\u53EF\u4EE5\u548C\u6A21\u5757\u7C7B\u578B\u4E00\u6837\u4F9B\u5176\u4ED6\u4ED3\u5E93\u4F7F\u7528\u3002"})]})}function h(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,c.ah)(),e.components);return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}n.default=h,h.__RSPRESS_PAGE_META={},h.__RSPRESS_PAGE_META["zh%2Fguides%2Ftopic-detail%2Fchangesets%2Fchangelog.mdx"]={toc:[{text:"\u81EA\u5B9A\u4E49 changelog \u5185\u5BB9",id:"\u81EA\u5B9A\u4E49-changelog-\u5185\u5BB9",depth:2},{text:"getReleaseLine",id:"getreleaseline",depth:3},{text:"Params",id:"params",depth:4},{text:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",depth:4},{text:"\u9ED8\u8BA4\u5B9E\u73B0",id:"\u9ED8\u8BA4\u5B9E\u73B0",depth:4},{text:"getDependencyReleaseLine",id:"getdependencyreleaseline",depth:3},{text:"Params",id:"params-1",depth:4},{text:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C-1",depth:4},{text:"\u9ED8\u8BA4\u5B9E\u73B0",id:"\u9ED8\u8BA4\u5B9E\u73B0-1",depth:4},{text:"\u914D\u7F6E",id:"\u914D\u7F6E",depth:2},{text:"\u914D\u7F6E\u76F8\u5BF9\u8DEF\u5F84",id:"\u914D\u7F6E\u76F8\u5BF9\u8DEF\u5F84",depth:3},{text:"\u4F7F\u7528 Modern.js Module",id:"\u4F7F\u7528-modernjs-module",depth:3},{text:"\u4F7F\u7528 `npx @modern-js/create@latest` \u521B\u5EFA Modern.js Module",id:"\u4F7F\u7528-npx-modern-jscreatelatest-\u521B\u5EFA-modernjs-module",depth:4},{text:"\u5B9E\u73B0\u81EA\u5B9A\u4E49\u5185\u5BB9",id:"\u5B9E\u73B0\u81EA\u5B9A\u4E49\u5185\u5BB9",depth:4},{text:"\u5C06\u6A21\u5757\u53D1\u5E03\u5230 NPM",id:"\u5C06\u6A21\u5757\u53D1\u5E03\u5230-npm",depth:4},{text:"\u5728\u76EE\u6807\u4ED3\u5E93\u6839\u76EE\u5F55\u5B89\u88C5\u5BF9\u5E94\u6A21\u5757\uFF0C\u4F8B\u5982 `custom-changelog`",id:"\u5728\u76EE\u6807\u4ED3\u5E93\u6839\u76EE\u5F55\u5B89\u88C5\u5BF9\u5E94\u6A21\u5757\u4F8B\u5982-custom-changelog",depth:4},{text:"\u914D\u7F6E changeset \u7684 changelog \u914D\u7F6E\u4E3A\u5305\u540D\u79F0",id:"\u914D\u7F6E-changeset-\u7684-changelog-\u914D\u7F6E\u4E3A\u5305\u540D\u79F0",depth:4},{text:"\u4F7F\u7528 Monorepo \u5DE5\u7A0B\u65B9\u6848",id:"\u4F7F\u7528-monorepo-\u5DE5\u7A0B\u65B9\u6848",depth:3},{text:"\u6267\u884C `pnpm run new` \u521B\u5EFA\u6A21\u5757\u5B50\u9879\u76EE",id:"\u6267\u884C-pnpm-run-new-\u521B\u5EFA\u6A21\u5757\u5B50\u9879\u76EE",depth:4},{text:"\u5B9E\u73B0\u81EA\u5B9A\u4E49\u5185\u5BB9",id:"\u5B9E\u73B0\u81EA\u5B9A\u4E49\u5185\u5BB9-1",depth:4},{text:"\u5728 Monorepo \u6839\u76EE\u5F55\u6DFB\u52A0\u5B50\u9879\u76EE\u6A21\u5757\u4F9D\u8D56\uFF0C\u4F8B\u5982 `custom-changelog`",id:"\u5728-monorepo-\u6839\u76EE\u5F55\u6DFB\u52A0\u5B50\u9879\u76EE\u6A21\u5757\u4F9D\u8D56\u4F8B\u5982-custom-changelog",depth:4},{text:"\u914D\u7F6E changeset \u7684 changelog \u914D\u7F6E\u4E3A\u5305\u540D\u79F0",id:"\u914D\u7F6E-changeset-\u7684-changelog-\u914D\u7F6E\u4E3A\u5305\u540D\u79F0-1",depth:4}],title:"\u81EA\u5B9A\u4E49 changelog \u751F\u6210",frontmatter:{sidebar_position:6}}}}]);