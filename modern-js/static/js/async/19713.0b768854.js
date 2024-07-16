"use strict";(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["19713"],{94368:function(e,n,r){r.r(n),r.d(n,{default:function(){return d}});var o=r(39980),t=r(9580);function s(e){let n=Object.assign({h1:"h1",a:"a",p:"p",ul:"ul",li:"li",div:"div",h2:"h2",code:"code",pre:"pre",h3:"h3",strong:"strong",img:"img",ol:"ol"},(0,t.ah)(),e.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.h1,{id:"deploy-application",children:["Deploy Application",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#deploy-application",children:"#"})]}),"\n",(0,o.jsx)(n.p,{children:"Currently, Modern.js offers two deployment way:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"You can host your application in a container that includes a Node.js environment on your own, which provides flexibility for the deployment of the application."}),"\n",(0,o.jsxs)(n.li,{children:["You can also deploy your application through a platform. Currently, Modern.js supports the ",(0,o.jsx)(n.a,{href:"https://www.netlify.com/",target:"_blank",rel:"noopener noreferrer",children:"Netlify"})," and ",(0,o.jsx)(n.a,{href:"https://vercel.com/",target:"_blank",rel:"noopener noreferrer",children:"Vercel"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(n.div,{className:"rspress-directive info",children:[(0,o.jsx)(n.div,{className:"rspress-directive-title",children:"INFO"}),(0,o.jsx)(n.div,{className:"rspress-directive-content",children:(0,o.jsx)(n.p,{children:"Currently, Modern.js only supports running in a Node.js environment. Support for more runtime environments will be provided in the future."})})]}),"\n",(0,o.jsxs)(n.h2,{id:"build-deployment-products",children:["Build Deployment Products",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#build-deployment-products",children:"#"})]}),"\n",(0,o.jsxs)(n.p,{children:["Running the ",(0,o.jsx)(n.code,{children:"modern deploy"})," command will automatically produce deployment products. This process includes optimizing Bundler build products and their dependencies, detecting the current deployment platform, and automatically generating deployment products that can run on that platform."]}),"\n",(0,o.jsxs)(n.p,{children:["If you want to generate and test the output locally for a specific deployment platform, you can specify the platform by setting the environment variable: ",(0,o.jsx)(n.code,{children:"modern deploy"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"MODERNJS_DEPLOY=netlify npx modern deploy\n"})}),"\n",(0,o.jsxs)(n.div,{className:"rspress-directive info",children:[(0,o.jsx)(n.div,{className:"rspress-directive-title",children:"INFO"}),(0,o.jsx)(n.div,{className:"rspress-directive-content",children:(0,o.jsx)(n.p,{children:"When deploying on the deployment platforms officially supported by Modern.js, there is no need to specify environment variables."})})]}),"\n",(0,o.jsxs)(n.h2,{id:"nodejs",children:["Node.js",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#nodejs",children:"#"})]}),"\n",(0,o.jsxs)(n.h3,{id:"single-repo",children:["Single Repo",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#single-repo",children:"#"})]}),"\n",(0,o.jsx)(n.p,{children:"By default, Modern.js outputs builds that can be run in a Node.js environment when no Modern.js-supported deployment platform is detected."}),"\n",(0,o.jsx)(n.p,{children:"Use the following command to build the project:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"npx modern deploy\n"})}),"\n",(0,o.jsxs)(n.p,{children:["When running the ",(0,o.jsx)(n.code,{children:"modern deploy"})," command, Modern.js will generate runnable products and output the following content in terminal:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"Static directory: `.output/static`\nYou can preview this build by `node .output/index`\n"})}),"\n",(0,o.jsxs)(n.p,{children:["At this point, you can run the entire server by ",(0,o.jsx)(n.code,{children:"node .output/index"}),", and the static resources required for the page are in the ",(0,o.jsx)(n.code,{children:".output/static"})," directory. You can upload these static resources to a CDN yourself:"]}),"\n",(0,o.jsxs)(n.div,{className:"rspress-directive info",children:[(0,o.jsx)(n.div,{className:"rspress-directive-title",children:"INFO"}),(0,o.jsxs)(n.div,{className:"rspress-directive-content",children:[(0,o.jsxs)(n.p,{children:["By default, when running Modern.js Server, it listens on port 8080. If you want to change the listening port, you can specify the ",(0,o.jsx)(n.code,{children:"PORT"})," environment variable:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"PORT=3000 node .output/index\n"})}),"\n"]})]}),"\n",(0,o.jsxs)(n.h3,{id:"monorepo",children:["Monorepo",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#monorepo",children:"#"})]}),"\n",(0,o.jsx)(n.p,{children:"For Monorepo projects, in addition to building the current project, it is also necessary to build other sub-projects in the repository that the current project depends on."}),"\n",(0,o.jsxs)(n.p,{children:["Assume that the name in the ",(0,o.jsx)(n.code,{children:"package.json"})," of the current project is ",(0,o.jsx)(n.code,{children:"app"}),". Taking pnpm as an example of a monorepo management tool, you can add the following command to the ",(0,o.jsx)(n.code,{children:"package.json"})," of the current project to build products for the current project:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",meta:'title="app/package.json"',children:'{\n  "scripts": {\n    "build:packages": "pnpm --filter \'app^...\' run build",\n    "deploy": "pnpm run build:packages && modern deploy",\n  }\n}\n'})}),"\n",(0,o.jsxs)(n.p,{children:["If you use Rush as your Monorepo management tool, you can add the following commands to your ",(0,o.jsx)(n.code,{children:"package.json"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'{\n  "scripts": {\n    "build:packages": "rush rebuild --to-except app",\n    "deploy": "rushx build:packages && modern deploy",\n  }\n}\n'})}),"\n",(0,o.jsxs)(n.p,{children:["After the build is completed, Modern.js will generate all dependencies in the ",(0,o.jsx)(n.code,{children:".output/node_modules"})," directory of the project. Similarly, you can run the Modern.js server using ",(0,o.jsx)(n.code,{children:"node .output/index"}),"."]}),"\n",(0,o.jsxs)(n.h2,{id:"netlify",children:["Netlify",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#netlify",children:"#"})]}),"\n",(0,o.jsxs)(n.p,{children:["Netlify is a popular Web development platform designed for building, deploying, and maintaining modern web projects. Deploying on Netlify mainly requires configuring the ",(0,o.jsx)(n.code,{children:"netlify.toml"})," file."]}),"\n",(0,o.jsx)(n.p,{children:"Depending on the complexity of your project, you can configure it incrementally by this doc."}),"\n",(0,o.jsxs)(n.h3,{id:"pure-front-end-project",children:["Pure Front-end Project",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#pure-front-end-project",children:"#"})]}),"\n",(0,o.jsxs)(n.p,{children:["Add the ",(0,o.jsx)(n.code,{children:"netlify.toml"})," file to the root directory of the current project:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:".\n\u251C\u2500\u2500 src\n\u251C\u2500\u2500 modern.config.ts\n\u251C\u2500\u2500 netlify.toml\n\u2514\u2500\u2500 package.json\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Add the following content to ",(0,o.jsx)(n.code,{children:"netlify.toml"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-toml",children:'[build]\n  publish = "dist"\n  command = "modern deploy"\n'})}),"\n",(0,o.jsx)(n.p,{children:"Now, add a project to the Netlify platform and deploy it!"}),"\n",(0,o.jsxs)(n.h3,{id:"full-stack-project",children:["Full Stack Project",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#full-stack-project",children:"#"})]}),"\n",(0,o.jsxs)(n.p,{children:["Full-stack projects refer to projects that use Custom Web Server, SSR or BFF. These projects need to be deployed on ",(0,o.jsx)(n.strong,{children:"Netlify Functions"}),". Based on the ",(0,o.jsx)(n.code,{children:"netlify.toml"})," file mentioned above, add the following configuration:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-toml",meta:'title="netlify.toml"',children:'[build]\n  publish = "dist"\n  command = "modern deploy"\n\n[functions]\n  directory = ".netlify/functions"\n  node_bundler = "none"\n  included_files = [".netlify/functions/**"]\n\n'})}),"\n",(0,o.jsxs)(n.div,{className:"rspress-directive info",children:[(0,o.jsx)(n.div,{className:"rspress-directive-title",children:"INFO"}),(0,o.jsx)(n.div,{className:"rspress-directive-content",children:(0,o.jsx)(n.p,{children:"Currently, Modern.js does not support deployment on Netlify Edge Functions. We will support it in future versions."})})]}),"\n",(0,o.jsxs)(n.h3,{id:"monorepo-1",children:["Monorepo",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#monorepo-1",children:"#"})]}),"\n",(0,o.jsxs)(n.div,{className:"rspress-directive info",children:[(0,o.jsx)(n.div,{className:"rspress-directive-title",children:"INFO"}),(0,o.jsx)(n.div,{className:"rspress-directive-content",children:(0,o.jsx)(n.p,{children:"The following guide is mainly for full-stack projects, for pure CSR projects, just follow [Pure Frontend Project](#Pure Frontend Project) to deploy."})})]}),"\n",(0,o.jsx)(n.p,{children:"For Monorepo projects, in addition to building our current project, you also need to build other sub-projects in the repository that the current project depends on."}),"\n",(0,o.jsx)(n.p,{children:"We take a pnpm Monorepo repository as an example and deploy the Monorepo project on Netlify."}),"\n",(0,o.jsx)(n.p,{children:"Assuming the directory structure of the Monorepo repository is as follows:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:".\n\u251C\u2500\u2500 packages\n\u2502   \u251C\u2500\u2500 app\n\u2502   \u2514\u2500\u2500 app-dep1\n\u251C\u2500\u2500 package.json\n\u251C\u2500\u2500 pnpm-lock.yaml\n\u2514\u2500\u2500 pnpm-workspace.yaml\n"})}),"\n",(0,o.jsxs)(n.p,{children:["You need to configure Base directory on the netlify platform as ",(0,o.jsx)(n.code,{children:"packages/app"}),":"]}),"\n",(0,o.jsx)("img",{src:"https://sf16-sg.tiktokcdn.com/obj/eden-sg/lmeh7nuptpfnuhd/netlify-monorepo-basedir.png?x-resource-account=public"}),"\n",(0,o.jsxs)(n.p,{children:["Add the following script in ",(0,o.jsx)(n.code,{children:"packages/app/package.json"}),", before executing the deployment command of the ",(0,o.jsx)(n.code,{children:"app"})," repository, first execute the build of other repositories in the workspace:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'{\n  "scripts": {\n    "build:packages": "pnpm --filter \'app^...\' run build",\n    "deploy": "pnpm run build:packages && modern deploy",\n  }\n}\n\n'})}),"\n",(0,o.jsxs)(n.p,{children:["Configure the build command in ",(0,o.jsx)(n.code,{children:"netlify.toml"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-toml",children:'[build]\n  publish = "dist"\n  command = "npm run deploy"\n\n[functions]\n  directory = ".netlify/functions"\n  node_bundler = "none"\n  included_files = [".netlify/functions/**"]\n'})}),"\n",(0,o.jsx)(n.p,{children:"Just submit your code and deploy it using the Netlify platform."}),"\n",(0,o.jsxs)(n.h2,{id:"vercel",children:["Vercel",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#vercel",children:"#"})]}),"\n",(0,o.jsxs)(n.p,{children:["Vercel is a deployment platform for modern web applications that provides a rich set of features to support deploying static websites, server-side rendered applications, and more. To deploy on Vercel, you usually need to configure the ",(0,o.jsx)(n.code,{children:"vercel.json"})," file, which you can configure incrementally depending on the complexity of your project."]}),"\n",(0,o.jsxs)(n.h3,{id:"pure-front-end-project-1",children:["Pure Front-end Project",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#pure-front-end-project-1",children:"#"})]}),"\n",(0,o.jsxs)(n.p,{children:["Add the ",(0,o.jsx)(n.code,{children:"vercel.json"})," file to the root directory of the current project:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"./\n\u251C\u2500\u2500 src\n\u251C\u2500\u2500 modern.config.ts\n\u251C\u2500\u2500 vercel.json\n\u2514\u2500\u2500 package.json\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Add the following content to ",(0,o.jsx)(n.code,{children:"vercel.json"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",meta:'title="vercel.json"',children:'{\n  "buildCommand": "modern deploy",\n  "outputDirectory": ".vercel/output"\n}\n'})}),"\n",(0,o.jsxs)(n.p,{children:["Commit your project to git, select Framework Preset as ",(0,o.jsx)(n.code,{children:"Other"})," on the Vercel platform and deploy."]}),"\n",(0,o.jsx)("img",{src:"https://sf16-sg.tiktokcdn.com/obj/eden-sg/lmeh7nuptpfnuhd/vercel-framework-preset.png"}),"\n",(0,o.jsxs)(n.h3,{id:"full-stack-project-1",children:["Full Stack Project",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#full-stack-project-1",children:"#"})]}),"\n",(0,o.jsxs)(n.p,{children:["Full-stack projects refer to projects that use Custom Web Server, SSR or BFF. These projects need to be deployed on ",(0,o.jsx)(n.strong,{children:"Vercel Functions"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["In addition to configuring ",(0,o.jsx)(n.code,{children:"vercel.json"})," in the same way as a ",(0,o.jsx)(n.a,{href:"#pure-front-end-project",children:"pure front-end project"}),", there are two points to note for full-stack projects:"]}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"Currently, Modern.js does not support deploying BFF projects on the Vercel platform. We will support it in future versions."}),"\n",(0,o.jsxs)(n.li,{children:["When deploying on Vercel platform, the default node runtime is ",(0,o.jsx)(n.code,{children:"20.x"}),", it is recommended to choose ",(0,o.jsx)(n.code,{children:"18.x"})," when deploying full-stack projects,\nsee ",(0,o.jsx)(n.a,{href:"https://vercel.com/guides/serverless-function-contains-invalid-runtime-error",target:"_blank",rel:"noopener noreferrer",children:"Serverless Function contains invalid runtime error"}),", you can modify ",(0,o.jsx)(n.code,{children:"package.json"})," to specify the version:"]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",meta:'title="package.json"',children:'"engines": {\n  "node": "18.x"\n}\n'})}),"\n",(0,o.jsxs)(n.h3,{id:"monorepo-2",children:["Monorepo",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#monorepo-2",children:"#"})]}),"\n",(0,o.jsxs)(n.div,{className:"rspress-directive info",children:[(0,o.jsx)(n.div,{className:"rspress-directive-title",children:"INFO"}),(0,o.jsx)(n.div,{className:"rspress-directive-content",children:(0,o.jsxs)(n.p,{children:["The following guide is mainly for full-stack projects, for pure CSR projects, just follow ",(0,o.jsx)(n.a,{href:"#pure-front-end-project-1",children:"Pure Frontend Project"})," to deploy.\n"]})})]}),"\n",(0,o.jsx)(n.p,{children:"For Monorepo projects, in addition to building our current project, you also need to build other sub-projects in the repository that the current project depends on."}),"\n",(0,o.jsx)(n.p,{children:"We take a pnpm Monorepo repository as an example and deploy the Monorepo project on Vercel."}),"\n",(0,o.jsx)(n.p,{children:"Assuming the directory structure of the Monorepo repository is as follows:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:".\n\u251C\u2500\u2500 packages\n\u2502   \u251C\u2500\u2500 app\n\u2502   \u2514\u2500\u2500 app-dep1\n\u251C\u2500\u2500 package.json\n\u251C\u2500\u2500 pnpm-lock.yaml\n\u2514\u2500\u2500 pnpm-workspace.yaml\n"})}),"\n",(0,o.jsxs)(n.p,{children:["First, you need to configure the ",(0,o.jsx)(n.strong,{children:"Root Directory"})," as ",(0,o.jsx)(n.code,{children:"packages/app"})," on the Vercel platform:"]}),"\n",(0,o.jsx)("img",{src:"https://sf16-sg.tiktokcdn.com/obj/eden-sg/lmeh7nuptpfnuhd/vercel-root-directory.png"}),"\n",(0,o.jsxs)(n.p,{children:["Specify Node.js runtime as ",(0,o.jsx)(n.code,{children:"18.x"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",meta:'title="package.json"',children:'"engines": {\n  "node": "18.x"\n}\n'})}),"\n",(0,o.jsxs)(n.p,{children:["Add the following script to ",(0,o.jsx)(n.code,{children:"packages/app/package.json"})," to run ",(0,o.jsx)(n.code,{children:"build"})," command of the other repositories in the workspace before run the ",(0,o.jsx)(n.code,{children:"deploy"})," command for the ",(0,o.jsx)(n.code,{children:"app"})," repository:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'{\n  "scripts": {\n    "build:packages": "pnpm --filter \'app^...\' run build",\n    "deploy": "pnpm run build:packages && modern deploy",\n  }\n}\n'})}),"\n",(0,o.jsxs)(n.p,{children:["Add the following content to the ",(0,o.jsx)(n.code,{children:"packages/app/vercel.json"})," file:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",meta:'title="vercel.json"',children:'{\n  "buildCommand": "npm run deploy",\n  "outputDirectory": ".vercel/output"\n}\n'})}),"\n",(0,o.jsx)(n.p,{children:"Just submit your code and deploy it using the Vercel platform."})]})}function i(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,t.ah)(),e.components);return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(s,{...e})}):s(e)}let d=i;i.__RSPRESS_PAGE_META={},i.__RSPRESS_PAGE_META["en%2Fguides%2Fbasic-features%2Fdeploy.mdx"]={toc:[{text:"Build Deployment Products",id:"build-deployment-products",depth:2},{text:"Node.js",id:"nodejs",depth:2},{text:"Single Repo",id:"single-repo",depth:3},{text:"Monorepo",id:"monorepo",depth:3},{text:"Netlify",id:"netlify",depth:2},{text:"Pure Front-end Project",id:"pure-front-end-project",depth:3},{text:"Full Stack Project",id:"full-stack-project",depth:3},{text:"Monorepo",id:"monorepo-1",depth:3},{text:"Vercel",id:"vercel",depth:2},{text:"Pure Front-end Project",id:"pure-front-end-project-1",depth:3},{text:"Full Stack Project",id:"full-stack-project-1",depth:3},{text:"Monorepo",id:"monorepo-2",depth:3}],title:"Deploy Application",frontmatter:{sidebar_position:15}}}}]);