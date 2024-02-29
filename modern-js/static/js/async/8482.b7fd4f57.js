/*! For license information please see 8482.b7fd4f57.js.LICENSE.txt */
(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["8482"],{30954:function(e,n,t){"use strict";t.r(n);var s=t("39980"),r=t("96954");function o(e){let n=Object.assign({h1:"h1",a:"a",p:"p",code:"code",pre:"pre",div:"div",h2:"h2",h3:"h3",h4:"h4",ul:"ul",li:"li",strong:"strong"},(0,r.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h1,{id:"customizing-release-note-format",children:["Customizing Release Note Format",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#customizing-release-note-format",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["Modern.js provides the ",(0,s.jsx)(n.code,{children:"modern gen-release-note"})," command, which supports automatically generating Release Note through the current existing changeset and git commit information. Before running the release command, you can run this command to generate the Release Note for this release."]}),"\n",(0,s.jsx)(n.p,{children:"The default generated Release Note format is:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-markdown",children:"- fix: add missing type definitions by @zllkjc in https://github.com/web-infra-dev/modern.js/pull/3835\n"})}),"\n",(0,s.jsx)(n.p,{children:"Get the Pull Request ID of the changeset through the commit information, and generate a Github link, which includes the changeset's changelog information and author information."}),"\n",(0,s.jsxs)(n.div,{className:"rspress-directive info",children:[(0,s.jsx)(n.div,{className:"rspress-directive-title",children:"INFO"}),(0,s.jsx)(n.div,{className:"rspress-directive-content",children:(0,s.jsx)(n.p,{children:"To get author information, you need to provide the Github Token environment variable, which is passed in through GITHUB_AUTH_TOKEN."})})]}),"\n",(0,s.jsx)(n.p,{children:"When the default generated Release Note logic cannot meet the requirements, custom Release Note format is supported."}),"\n",(0,s.jsxs)(n.h2,{id:"information",children:["Information",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#information",children:"#"})]}),"\n",(0,s.jsxs)(n.h3,{id:"getreleaseinfo",children:["getReleaseInfo",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#getreleaseinfo",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"To generate Release Note information, some information needs to be collected, such as commit ID, Pull Request ID, commit message, etc."}),"\n",(0,s.jsxs)(n.p,{children:["This logic can be implemented through the ",(0,s.jsx)(n.code,{children:"getReleaseInfo"})," function."]}),"\n",(0,s.jsxs)(n.h4,{id:"params",children:["Params",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#params",children:"#"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"commit"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Type: string;"}),"\n",(0,s.jsx)(n.p,{children:"The commit message information corresponding to the current changeset."}),"\n",(0,s.jsxs)(n.p,{children:["The result of executing ",(0,s.jsx)(n.code,{children:"git log --pretty=format:%h--%s--%ae .changeset/${changeset.id}.md"}),"."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"commitObj"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Basic information about commit."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"export enum CommitType {\n  Performance = 'performance',\n  Features = 'features',\n  BugFix = 'bugFix',\n  Doc = 'doc',\n  Other = 'other',\n}\n\ninterface Commit {\n  id: string; // commit id\n  type: CommitType;\n  repository?: string; // Repo information passed in as a parameter or defined in package.json\n  pullRequestId?: string;\n  author?: string;\n  message: string; // Commit message\n  summary: string; // Changeset summary\n  summary_zh: string; // Changeset summary in Chinese\n  [key: string]: string | undefined;\n}\n"})}),"\n",(0,s.jsxs)(n.h4,{id:"returns",children:["Returns",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#returns",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"commitObj, the complete commit object after supplementation."}),"\n",(0,s.jsxs)(n.h4,{id:"default-implementation",children:["Default Implementation",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#default-implementation",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"The default implementation of Modern.js is to split out the Pull Request ID based on the commit information, and get the user information based on the commit ID and add it to the commitObj."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"function getReleaseInfo(commit: string, commitObj: Commit) {\nconst commitRegex = /(.*)\\(#(\\d*)\\)/;\n\n  const [commitId, message, email] = commit.split('--');\n\n  const author = AuthorMap.get(email);\n  const token = authToken || process.env.GITHUB_AUTH_TOKEN;\n  if (author) {\n    commitObj.author = author;\n  } else if (repo && token) {\n    try {\n      const res = await axios.get(\n        `https://api.github.com/repos/${repo}/commits/${commitId}`,\n        {\n          method: 'GET',\n          headers: {\n            'Content-Type': 'application/json',\n            Authorization: token,\n          },\n        },\n      );\n      const author = res.data.author.login;\n      commitObj.author = author;\n      AuthorMap.set(email, author);\n    } catch (e) {\n      console.warn(e);\n    }\n  }\n\n  if ((message || commitObj.summary).match(commitRegex)) {\n    const [, messageShort, pullRequestId] = (\n      message || commitObj.summary\n    ).match(commitRegex)!;\n    commitObj.pullRequestId = pullRequestId;\n    commitObj.message = messageShort.trim();\n  }\n\n  return commitObj;\n}\n"})}),"\n",(0,s.jsxs)(n.h3,{id:"getreleasenoteline",children:["getReleaseNoteLine",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#getreleasenoteline",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["Generate the corresponding Release Note based on the commit object information getted in ",(0,s.jsx)(n.code,{children:"getReleaseInfo"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["This logic can be implemented through the ",(0,s.jsx)(n.code,{children:"getReleaseNoteLine"})," function."]}),"\n",(0,s.jsxs)(n.h4,{id:"params-1",children:["Params",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#params-1",children:"#"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"commit"}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["The type is the same as the above ",(0,s.jsx)(n.code,{children:"commitObj"})," type."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"lang"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Type: string;"}),"\n",(0,s.jsxs)(n.p,{children:["Get the Release Note information of the corresponding language, supporting ",(0,s.jsx)(n.code,{children:"en"})," and ",(0,s.jsx)(n.code,{children:"zh"}),", the default is ",(0,s.jsx)(n.code,{children:"en"}),"."]}),"\n",(0,s.jsxs)(n.h4,{id:"returns-1",children:["Returns",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#returns-1",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"The generated Release Note."}),"\n",(0,s.jsxs)(n.h4,{id:"default-implementation-1",children:["Default Implementation",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#default-implementation-1",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"The default implementation of Modern.js is:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"export function getReleaseNoteLine(\n  commit: Commit,\n  lang: 'en' | 'zh' = 'en',\n) {\n  const { repository, pullRequestId, summary, summary_zh, author } = commit;\n  const pullRequest =\n    pullRequestId && repository\n      ? `https://github.com/${repository}/pull/${pullRequestId}`\n      : '';\n  if (lang === 'en') {\n    return `- ${summary}${author ? ` by @${author}` : ''}${\n      pullRequest ? ` in ${pullRequest}` : ''\n    }\\n`;\n  }\n  return `- ${summary_zh}${author ? ` \u7531 @${author} \u5B9E\u73B0` : ''}${\n    pullRequest ? `\uFF0C \u8BE6\u60C5\u53EF\u67E5\u770B ${pullRequest}` : ''\n  }\\n`;\n}\n"})}),"\n",(0,s.jsxs)(n.h2,{id:"using-custom-modules",children:["Using Custom Modules",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#using-custom-modules",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"gen-release-note"})," command supports the ",(0,s.jsx)(n.code,{children:"--custom"})," parameter, which can pass in the module name or path of the custom Release Note module."]}),"\n",(0,s.jsxs)(n.h3,{id:"configuring-relative-paths",children:["Configuring Relative Paths",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#configuring-relative-paths",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["If the custom parameter value is a relative path, it is the ",(0,s.jsx)(n.strong,{children:"project root directory"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["For example, create the ",(0,s.jsx)(n.code,{children:"scripts/my-release-note-config.js"})," file and define the following content:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",meta:'title="scripts/my-release-note-config.js"',children:"function getReleaseInfo(commit, commitObj) {\n  return commitObj;\n}\n\nfunction getReleaseNoteLine(commit) {}\n\nmodule.exports = {\n  getReleaseInfo,\n  getReleaseNoteLine,\n};\n"})}),"\n",(0,s.jsx)(n.p,{children:"Run the following command:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"pnpm run gen-release-note --custom ./scripts/my-release-note-config.js\n"})}),"\n",(0,s.jsxs)(n.p,{children:["You can also define the command parameters directly in ",(0,s.jsx)(n.code,{children:"package.json"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",meta:'title="package.json"',children:'{\n    "scripts": {\n        ...\n        "gen-release-note": "modern gen-release-note --custom ./scripts/my-release-note-config.js"\n    },\n    ...\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Run the command ",(0,s.jsx)(n.code,{children:"pnpm run gen-release-note"})," directly."]}),"\n",(0,s.jsxs)(n.h3,{id:"using-modernjs-module",children:["Using Modern.js Module",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#using-modernjs-module",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"Customizing release note can also be managed using the Modern.js Module to provide a common solution."}),"\n",(0,s.jsxs)(n.h4,{id:"use-npx-modern-jscreatelatest-to-create-a-modernjs-module",children:["Use ",(0,s.jsx)(n.code,{children:"npx @modern-js/create@latest"})," to create a Modern.js Module",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#use-npx-modern-jscreatelatest-to-create-a-modernjs-module",children:"#"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-md",children:"? Please select the type of project you want to create: Npm Module\n? Please fill in the project name: custom-release-note\n? Please select the programming language: TS\n? Please select the package manager: pnpm\n"})}),"\n",(0,s.jsxs)(n.h4,{id:"implement-custom-content",children:["Implement Custom Content",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#implement-custom-content",children:"#"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",meta:'title="src/index.ts"',children:"export function getReleaseInfo() {}\n\nexport function getReleaseNoteLine() {}\n"})}),"\n",(0,s.jsxs)(n.h4,{id:"publish-the-module-to-npm",children:["Publish the module to NPM",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#publish-the-module-to-npm",children:"#"})]}),"\n",(0,s.jsxs)(n.h4,{id:"install-the-corresponding-module-in-the-root-directory-of-the-target-repository-such-as-custom-release-note",children:["Install the corresponding module in the root directory of the target repository, such as ",(0,s.jsx)(n.code,{children:"custom-release-note"}),(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#install-the-corresponding-module-in-the-root-directory-of-the-target-repository-such-as-custom-release-note",children:"#"})]}),"\n",(0,s.jsxs)(n.h4,{id:"run-the-gen-release-note-command-with-the-custom-parameter-added",children:["Run the ",(0,s.jsx)(n.code,{children:"gen-release-note"})," command with the ",(0,s.jsx)(n.code,{children:"custom"})," parameter added",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#run-the-gen-release-note-command-with-the-custom-parameter-added",children:"#"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"pnpm run gen-release-note --custom custom-release-note\n"})}),"\n",(0,s.jsxs)(n.h3,{id:"using-monorepo-sub-project",children:["Using Monorepo Sub-Project",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#using-monorepo-sub-project",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"If your current repository is Monorepo, you can directly manage it using NPM module sub-projects."}),"\n",(0,s.jsxs)(n.h4,{id:"run-pnpm-run-new-to-create-a-module-sub-project",children:["Run ",(0,s.jsx)(n.code,{children:"pnpm run new"})," to create a module sub-project",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#run-pnpm-run-new-to-create-a-module-sub-project",children:"#"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-md",children:"? Please select the type of project you want to create: Npm Module\n? Please fill in the sub-project name: custom-release-note\n? Please fill in the sub-project directory name: custom-release-note\n? Please select the programming language: TS\n"})}),"\n",(0,s.jsxs)(n.h4,{id:"implement-custom-content-1",children:["Implement Custom Content",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#implement-custom-content-1",children:"#"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",meta:'title="src/index.ts"',children:"export function getReleaseInfo() {}\n\nexport function getReleaseNoteLine() {}\n"})}),"\n",(0,s.jsxs)(n.h4,{id:"add-the-sub-project-module-dependency-such-as-custom-release-note-to-the-monorepo-root-directory",children:["Add the sub-project module dependency, such as ",(0,s.jsx)(n.code,{children:"custom-release-note"}),", to the Monorepo root directory",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#add-the-sub-project-module-dependency-such-as-custom-release-note-to-the-monorepo-root-directory",children:"#"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",meta:'title="package.json"',children:'{\n  "devDependencies": {\n    "custom-release-note": "workspace:*",\n    ...\n  }\n}\n'})}),"\n",(0,s.jsxs)(n.h4,{id:"run-the-gen-release-note-command-with-the-custom-parameter-added-1",children:["Run the ",(0,s.jsx)(n.code,{children:"gen-release-note"})," command with the ",(0,s.jsx)(n.code,{children:"custom"})," parameter added",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#run-the-gen-release-note-command-with-the-custom-parameter-added-1",children:"#"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"pnpm run gen-release-note --custom custom-release-note\n"})}),"\n",(0,s.jsx)(n.p,{children:"After the module is published to NPM, it can still be used like a module type for other repositories."})]})}function a(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,r.useMDXComponents)(),e.components);return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}n.default=a,a.__RSPRESS_PAGE_META={},a.__RSPRESS_PAGE_META["en%2Fguides%2Ftopic-detail%2Fchangesets%2Frelease-note.mdx"]={toc:[{text:"Information",id:"information",depth:2},{text:"getReleaseInfo",id:"getreleaseinfo",depth:3},{text:"Params",id:"params",depth:4},{text:"Returns",id:"returns",depth:4},{text:"Default Implementation",id:"default-implementation",depth:4},{text:"getReleaseNoteLine",id:"getreleasenoteline",depth:3},{text:"Params",id:"params-1",depth:4},{text:"Returns",id:"returns-1",depth:4},{text:"Default Implementation",id:"default-implementation-1",depth:4},{text:"Using Custom Modules",id:"using-custom-modules",depth:2},{text:"Configuring Relative Paths",id:"configuring-relative-paths",depth:3},{text:"Using Modern.js Module",id:"using-modernjs-module",depth:3},{text:"Use npx @modern-js/create@latest to create a Modern.js Module",id:"use-npx-modern-jscreatelatest-to-create-a-modernjs-module",depth:4},{text:"Implement Custom Content",id:"implement-custom-content",depth:4},{text:"Publish the module to NPM",id:"publish-the-module-to-npm",depth:4},{text:"Install the corresponding module in the root directory of the target repository, such as custom-release-note",id:"install-the-corresponding-module-in-the-root-directory-of-the-target-repository-such-as-custom-release-note",depth:4},{text:"Run the gen-release-note command with the custom parameter added",id:"run-the-gen-release-note-command-with-the-custom-parameter-added",depth:4},{text:"Using Monorepo Sub-Project",id:"using-monorepo-sub-project",depth:3},{text:"Run pnpm run new to create a module sub-project",id:"run-pnpm-run-new-to-create-a-module-sub-project",depth:4},{text:"Implement Custom Content",id:"implement-custom-content-1",depth:4},{text:"Add the sub-project module dependency, such as custom-release-note, to the Monorepo root directory",id:"add-the-sub-project-module-dependency-such-as-custom-release-note-to-the-monorepo-root-directory",depth:4},{text:"Run the gen-release-note command with the custom parameter added",id:"run-the-gen-release-note-command-with-the-custom-parameter-added-1",depth:4}],title:"Customizing Release Note Format",frontmatter:{sidebar_position:8}}}}]);