/*! For license information please see 12946.83da2cb1.js.LICENSE.txt */
(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["12946"],{1615:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return d}});var i=t("39980"),r=t("96954");function s(e){let n=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",pre:"pre",code:"code",h3:"h3",div:"div",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",ul:"ul",li:"li"},(0,r.useMDXComponents)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.h1,{id:"hook-model",children:["Hook Model",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#hook-model",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"First, let's introduce some content about the basic plugin system in Modern.js, including the working mode of the Hook model, the operating mode of each Hook model, and the working mode of the Manager."}),"\n",(0,i.jsx)(n.p,{children:"Each Hook model is independent and can manage running functions independently."}),"\n",(0,i.jsxs)(n.h2,{id:"basic-working-mode",children:["Basic Working Mode",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#basic-working-mode",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"Taking the Pipeline as an example, let's briefly introduce the working mode of the Hook model. Let's take a look at a simple example:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"import { createPipeline } from '@modern-js/plugin';\n\n// 1. create\nconst pipeline = createPipeline<number, number>();\n\n// 2. add function\npipeline.use((count, next) => {\n  return next(count + 1);\n});\npipeline.use((count, next) => {\n  return count * 2;\n});\n\n// 3. exec\npipeline.run(1); // 4\npipeline.run(5); // 12\n"})}),"\n",(0,i.jsxs)(n.p,{children:["In this example, a ",(0,i.jsx)(n.code,{children:"Pipeline<number, number>"})," is created on line 3. This means that when you run it, you need to pass in a ",(0,i.jsx)(n.code,{children:"number"}),", and you will get a ",(0,i.jsx)(n.code,{children:"number"})," as a result, the type is:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"(count: number, next: (nextCount: number) => number) => number;\n"})}),"\n",(0,i.jsxs)(n.p,{children:["The reason why there are only ",(0,i.jsx)(n.code,{children:"number"}),"s here is because we created a ",(0,i.jsx)(n.code,{children:"Pipeline<number, number>"}),". If we had created a ",(0,i.jsx)(n.code,{children:"Pipeline<number, string>"}),", then when we run it, we would pass in a ",(0,i.jsx)(n.code,{children:"number"})," and get back a ",(0,i.jsx)(n.code,{children:"string"}),". the type is:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"(count: number, next: (nextCount: number) => string) => string;\n"})}),"\n",(0,i.jsxs)(n.p,{children:["After creating a Pipeline, you can add functions using the ",(0,i.jsx)(n.code,{children:"use"})," method (lines 5 and 8). It is important to note that the order in which you add the functions is the order in which they will run by default."]}),"\n",(0,i.jsxs)(n.p,{children:["Within these functions, you can manipulate the ",(0,i.jsx)(n.code,{children:"count"})," value and return a value. If you call the ",(0,i.jsx)(n.code,{children:"next"})," function, the next function in the pipeline will run. For example, if you add three functions: ",(0,i.jsx)(n.code,{children:"A"}),", ",(0,i.jsx)(n.code,{children:"B"}),", and ",(0,i.jsx)(n.code,{children:"C"}),", and you call ",(0,i.jsx)(n.code,{children:"next"})," in function ",(0,i.jsx)(n.code,{children:"A"}),", then function ",(0,i.jsx)(n.code,{children:"B"})," will run. Similarly, if you call ",(0,i.jsx)(n.code,{children:"next"})," in function ",(0,i.jsx)(n.code,{children:"B"}),", then function ",(0,i.jsx)(n.code,{children:"C"})," will run."]}),"\n",(0,i.jsxs)(n.p,{children:["In the example above, the first function added on line 5 calls ",(0,i.jsx)(n.code,{children:"next"}),", which causes the second function added on line 8 to run. The return value of this function is the return value of the entire pipeline. If the first function does not call ",(0,i.jsx)(n.code,{children:"next"})," and simply returns a value, then the pipeline will return that value without running any other functions."]}),"\n",(0,i.jsx)(n.p,{children:"For example:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"import { createPipeline } from '@modern-js/plugin';\n\n// 1. create\nconst pipeline = createPipeline<number, number>();\n\n// 2. add function\npipeline.use((count, next) => {\n  return count + 1;\n});\npipeline.use((count, next) => {\n  return count * 2;\n});\n\n// 3. Run\npipeline.run(1); // 2\npipeline.run(5); // 6\n"})}),"\n",(0,i.jsxs)(n.p,{children:["If the first function does not call ",(0,i.jsx)(n.code,{children:"next"}),", the second function will not run and the return value of the pipeline will be the return value of the first function."]}),"\n",(0,i.jsxs)(n.p,{children:["Finally, the way to run the Pipeline is simply to call ",(0,i.jsx)(n.code,{children:"pipeline.run()"}),"."]}),"\n",(0,i.jsxs)(n.h2,{id:"differences-between-different-hook-models",children:["Differences between different Hook models",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#differences-between-different-hook-models",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"The above section describes the general working mode of the Pipeline, and the working modes of other Hook models are similar. The main differences lie in the function type, execution order, and parameters."}),"\n",(0,i.jsxs)(n.h3,{id:"pipeline",children:["Pipeline",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#pipeline",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"The example above describes the Pipeline, so we won't go into details here. In the Pipeline category, there are two subcategories: Sync and Async, which manage functions of either Sync or Async type, respectively."}),"\n",(0,i.jsxs)(n.div,{className:"rspress-directive info",children:[(0,i.jsx)(n.div,{className:"rspress-directive-title",children:"INFO"}),(0,i.jsx)(n.div,{className:"rspress-directive-content",children:(0,i.jsxs)(n.p,{children:["If there are no functions in the Pipeline or all functions have called the ",(0,i.jsx)(n.code,{children:"next"})," function, then you need to provide a value when running the Pipeline.\n"]})})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"pipeline(\n  {},\n  {\n    onLast: () => {\n      // do something\n    },\n  },\n);\n"})}),"\n",(0,i.jsx)(n.p,{children:":::"}),"\n",(0,i.jsxs)(n.h3,{id:"waterfall",children:["Waterfall",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#waterfall",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"This model, as the name suggests, is characterized by the sequential passing of parameters, where the return value of the previous function becomes the input parameter of the next function. Let's look at an example::"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"import { createWaterfall } from '@modern-js/plugin';\n\n// 1. create\nconst waterfall = createWaterfall<number>();\n\n// 2. add function\nwaterfall.use(count => {\n  return count + 1;\n});\nwaterfall.use(count => {\n  return count * 2;\n});\n\n// 3. exec\nwaterfall.run(1); // 4\nwaterfall.run(5); // 12\n"})}),"\n",(0,i.jsxs)(n.p,{children:["In this example, a ",(0,i.jsx)(n.code,{children:"Waterfall<number>"})," type is created, which means that the input and output types of this model are the same. In this case, both the input and output types are ",(0,i.jsx)(n.code,{children:"number"}),", the type is:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"(count: number) => number;\n"})}),"\n",(0,i.jsxs)(n.p,{children:["At first glance, this example may seem to have the same functionality as the Pipeline above, but there are some important differences to note. Firstly, the functions managed by Waterfall do not have a ",(0,i.jsx)(n.code,{children:"next"})," function as the second argument, so they cannot modify the execution order by calling ",(0,i.jsx)(n.code,{children:"next"})," within the function. Secondly, the input and output types of the functions must be the same (unlike in the Pipeline where they can be different)."]}),"\n",(0,i.jsx)(n.p,{children:"Similarly to Pipeline, Waterfall has Sync and Async subcategories that respectively manage Sync and Async functions."}),"\n",(0,i.jsxs)(n.h3,{id:"workflow",children:["Workflow",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#workflow",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"This Hook model is different from the two Hook models above in that there is no strong concept of passing parameters and return values in a sequential order. In this model, each function runs independently based on the same input parameter."}),"\n",(0,i.jsx)(n.p,{children:"for example:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"import { createWorkflow } from '@modern-js/plugin';\n\n// 1. create\nconst workflow = createWorkflow<number, number>();\n\n// 2. add plugin\nworkflow.use(count => {\n  return count + 1;\n});\nworkflow.use(count => {\n  return count * 2;\n});\n\n// 3. Run\nworkflow.run(1); // [2, 2]\nworkflow.run(5); // [6, 10]\n"})}),"\n",(0,i.jsx)(n.p,{children:"In this example, two functions are added to the Workflow, so the result of running the Workflow is an array of the results of these two functions."}),"\n",(0,i.jsx)(n.p,{children:"Although there is no strong concept of passing parameters and return values in a sequential order in this model, there are still differences in the execution order. In the Workflow category, there are three subcategories: Sync, Async, and Parallel."}),"\n",(0,i.jsxs)(n.p,{children:["The difference between them lies in the execution order of the functions. By default, they are all executed in the order they are added, but in Sync and Async mode, the execution order is strictly based on the order in which they are added, while in Parallel mode, a variant of Async mode, ",(0,i.jsx)(n.code,{children:"Promise.all"})," is used to execute all the functions, while in Async mode, ",(0,i.jsx)(n.code,{children:"await"})," is used to wait for the previous function to finish running."]}),"\n",(0,i.jsxs)(n.h2,{id:"comparison-of-hook-models",children:["Comparison of Hook models",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#comparison-of-hook-models",children:"#"})]}),"\n",(0,i.jsx)("div",{style:{width:"100%",overflowX:"scroll"},children:(0,i.jsx)("div",{style:{width:"150%"},children:(0,i.jsxs)(n.table,{children:["\n",(0,i.jsxs)(n.thead,{children:["\n",(0,i.jsxs)(n.tr,{children:["\n",(0,i.jsx)(n.th,{}),"\n",(0,i.jsx)(n.th,{children:"Function Type"}),"\n",(0,i.jsx)(n.th,{children:"Execution Order"}),"\n",(0,i.jsx)(n.th,{children:"Source of Function Parameters"}),"\n",(0,i.jsx)(n.th,{children:"Source of Execution Returns"}),"\n",(0,i.jsx)(n.th,{children:"Preferred Task Type"}),"\n",(0,i.jsx)(n.th,{children:"Function TS Type"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.tbody,{children:["\n",(0,i.jsxs)(n.tr,{children:["\n",(0,i.jsx)(n.td,{children:"Pipeline"}),"\n",(0,i.jsx)(n.td,{children:"Sync"}),"\n",(0,i.jsxs)(n.td,{children:["Executes the first added function by default, can execute subsequent functions through ",(0,i.jsx)(n.code,{children:"next"})]}),"\n",(0,i.jsxs)(n.td,{children:["The parameters of the first function come from the input, while the parameters of subsequent functions come from the parameters passed to ",(0,i.jsx)(n.code,{children:"next"})]}),"\n",(0,i.jsx)(n.td,{children:"Returns from the first function"}),"\n",(0,i.jsx)(n.td,{children:(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{children:"Needs to modify initial parameters"}),(0,i.jsx)("li",{children:"Needs to modify function execution order"})]})}),"\n",(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"(input: I, next: Next<I, O>) => O"})}),"\n"]}),"\n",(0,i.jsxs)(n.tr,{children:["\n",(0,i.jsx)(n.td,{children:"AsyncPipeline"}),"\n",(0,i.jsx)(n.td,{children:"Sync/Async"}),"\n",(0,i.jsxs)(n.td,{children:["Executes the first added function by default, can execute subsequent functions through ",(0,i.jsx)(n.code,{children:"next"})]}),"\n",(0,i.jsxs)(n.td,{children:["The parameters of the first function come from the input, while the parameters of subsequent functions come from the parameters passed to ",(0,i.jsx)(n.code,{children:"next"})]}),"\n",(0,i.jsx)(n.td,{children:"Returns from the first function"}),"\n",(0,i.jsx)(n.td,{children:(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{children:"Needs to modify initial parameters"}),(0,i.jsx)("li",{children:"Needs to modify function execution order"})]})}),"\n",(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"(input: I, next: AsyncNext<I, O>) => O \uFF5C Promise<O>"})}),"\n"]}),"\n",(0,i.jsxs)(n.tr,{children:["\n",(0,i.jsx)(n.td,{children:"Waterfall"}),"\n",(0,i.jsx)(n.td,{children:"Sync"}),"\n",(0,i.jsx)(n.td,{children:"Executes functions in order"}),"\n",(0,i.jsx)(n.td,{children:"The parameters of the first function come from the input, while the parameters of subsequent functions come from the return value of the previous function"}),"\n",(0,i.jsx)(n.td,{children:"Returns from the last function"}),"\n",(0,i.jsx)(n.td,{children:(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{children:"Needs to modify initial parameters"}),(0,i.jsx)("li",{children:"Does not need to modify function execution order"})]})}),"\n",(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"(I: I) => I"})}),"\n"]}),"\n",(0,i.jsxs)(n.tr,{children:["\n",(0,i.jsx)(n.td,{children:"AsyncWaterfall"}),"\n",(0,i.jsx)(n.td,{children:"Sync/Async"}),"\n",(0,i.jsx)(n.td,{children:"Executes functions in order"}),"\n",(0,i.jsx)(n.td,{children:"The parameters of the first function come from the input, while the parameters of subsequent functions come from the return value of the previous function"}),"\n",(0,i.jsx)(n.td,{children:"Returns from the last function"}),"\n",(0,i.jsx)(n.td,{children:(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{children:"Needs to modify initial parameters"}),(0,i.jsx)("li",{children:"Does not need to modify function execution order"})]})}),"\n",(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"(I: I) => I \uFF5C Promise<I>"})}),"\n"]}),"\n",(0,i.jsxs)(n.tr,{children:["\n",(0,i.jsx)(n.td,{children:"Workflow"}),"\n",(0,i.jsx)(n.td,{children:"Sync"}),"\n",(0,i.jsx)(n.td,{children:"Executes functions in order"}),"\n",(0,i.jsx)(n.td,{children:"All function parameters come from the input"}),"\n",(0,i.jsx)(n.td,{children:"An array of all function returns"}),"\n",(0,i.jsx)(n.td,{children:(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{children:"Does not need to modify initial parameters"}),(0,i.jsx)("li",{children:"Does not need to modify function execution order"})]})}),"\n",(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"(I: I) => O"})}),"\n"]}),"\n",(0,i.jsxs)(n.tr,{children:["\n",(0,i.jsx)(n.td,{children:"AsyncWorkflow"}),"\n",(0,i.jsx)(n.td,{children:"Sync/Async"}),"\n",(0,i.jsx)(n.td,{children:"Executes functions in order"}),"\n",(0,i.jsx)(n.td,{children:"All function parameters come from the input"}),"\n",(0,i.jsx)(n.td,{children:"An array of all function returns"}),"\n",(0,i.jsx)(n.td,{children:(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{children:"Does not need to modify initial parameters"}),(0,i.jsx)("li",{children:"Does not need to modify function execution order"})]})}),"\n",(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"(I: I) => O \uFF5C Promise<O>"})}),"\n"]}),"\n",(0,i.jsxs)(n.tr,{children:["\n",(0,i.jsx)(n.td,{children:"ParallelWorkFlow"}),"\n",(0,i.jsx)(n.td,{children:"Sync/Async"}),"\n",(0,i.jsx)(n.td,{children:"Executes functions asynchronously"}),"\n",(0,i.jsx)(n.td,{children:"All function parameters come from the input"}),"\n",(0,i.jsx)(n.td,{children:"An array of all function returns"}),"\n",(0,i.jsx)(n.td,{children:(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{children:"Does not need to modify initial parameters"}),(0,i.jsx)("li",{children:"Does not care about function execution order"})]})}),"\n",(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"(I: I) => O \uFF5C Promise<O>"})}),"\n"]}),"\n"]}),"\n"]})})}),"\n",(0,i.jsx)(n.p,{children:'"Workflow" and "Waterfall" are actually variants of the "Pipeline" model. While it\'s possible to implement "Workflow" and "Waterfall" using a specific writing style with "Pipeline", it can be more complicated with many implicit conventions. To make it easier to use, these two variants are provided to satisfy specific use cases.'})]})}function o(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,r.useMDXComponents)(),e.components);return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(s,{...e})}):s(e)}var d=o;o.__RSPRESS_PAGE_META={},o.__RSPRESS_PAGE_META["en%2Fguides%2Ftopic-detail%2Fframework-plugin%2Fhook.mdx"]={toc:[{text:"Basic Working Mode",id:"basic-working-mode",depth:2},{text:"Differences between different Hook models",id:"differences-between-different-hook-models",depth:2},{text:"Pipeline",id:"pipeline",depth:3},{text:"Waterfall",id:"waterfall",depth:3},{text:"Workflow",id:"workflow",depth:3},{text:"Comparison of Hook models",id:"comparison-of-hook-models",depth:2}],title:"Hook Model",frontmatter:{sidebar_position:2}}}}]);