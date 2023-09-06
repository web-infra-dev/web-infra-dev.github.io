(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_guides_topic-detail_framework-plugin_hook_mdx"],{71431:function(n,e,r){"use strict";r.r(e),r.d(e,{default:function(){return t}});var i,l=r("15169"),d=r("43932"),c=r("9880"),s=r("23169");function h(n){var e=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",pre:"pre",code:"code",h3:"h3",div:"div",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",ul:"ul",li:"li"},(0,s.useMDXComponents)(),n.components);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(e.h1,{id:"hook-模型",children:["Hook 模型",(0,c.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#hook-模型",children:"#"})]}),"\n",(0,c.jsx)(e.p,{children:"首先介绍一下 Modern.js 的基础的插件系统中的一些内容，包括 Hook 模型的工作方式、各个 Hook 模型的运行模式、Manager 的工作模式。"}),"\n",(0,c.jsx)(e.p,{children:"每种 Hook 模型都是独立的，可以独立管理运行函数。"}),"\n",(0,c.jsxs)(e.h2,{id:"基础工作方式",children:["基础工作方式",(0,c.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#基础工作方式",children:"#"})]}),"\n",(0,c.jsx)(e.p,{children:"先以 Pipeline 为例，简单介绍一下 Hook 模型的工作方式。先看一个简单的例子："}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-ts",children:"import { createPipeline } from '@modern-js/plugin';\n\n// 1. 创建\nconst pipeline = createPipeline<number, number>();\n\n// 2. 添加函数\npipeline.use((count, next) => {\n  return next(count + 1);\n});\npipeline.use((count, next) => {\n  return count * 2;\n});\n\n// 3. 执行\npipeline.run(1); // 4\npipeline.run(5); // 12\n"})}),"\n",(0,c.jsxs)(e.p,{children:["在这个例子中，创建了一个 ",(0,c.jsx)(e.code,{children:"Pipeline<number, number>"})," 类型的 Pipeline（L3），这意味着运行它的时候，你需要传入一个 ",(0,c.jsx)(e.code,{children:"number"}),"，然后你会得到一个 ",(0,c.jsx)(e.code,{children:"number"}),"，而这个模型管理的函数的类型是："]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-ts",children:"(count: number, next: (nextCount: number) => number) => number;\n"})}),"\n",(0,c.jsxs)(e.p,{children:["这里全是 ",(0,c.jsx)(e.code,{children:"number"}),"，是因为我们创建的是 ",(0,c.jsx)(e.code,{children:"Pipeline<number, number>"})," ，如果创建的是 ",(0,c.jsx)(e.code,{children:"Pipeline<number, string>"})," 则运行它入参是 ",(0,c.jsx)(e.code,{children:"number"}),"，返回值是 ",(0,c.jsx)(e.code,{children:"string"}),"，对应管理的函数的类型会是："]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-ts",children:"(count: number, next: (nextCount: number) => string) => string;\n"})}),"\n",(0,c.jsxs)(e.p,{children:["创建好 Pipeline 之后，可以通过 ",(0,c.jsx)(e.code,{children:"use"})," 添加函数（L5、L8），需要注意的是，添加的顺序就是他们默认的运行顺序，在这些函数中，你可以对 ",(0,c.jsx)(e.code,{children:"count"})," 进行处理、返回一个值，如果你调用了 ",(0,c.jsx)(e.code,{children:"next"})," 函数，则会运行后面的函数，即如果你添加了三个函数： ",(0,c.jsx)(e.code,{children:"A"}),"、",(0,c.jsx)(e.code,{children:"B"}),"、",(0,c.jsx)(e.code,{children:"C"}),"，如果你在 ",(0,c.jsx)(e.code,{children:"A"})," 中调用 ",(0,c.jsx)(e.code,{children:"next"})," 那么就会运行 ",(0,c.jsx)(e.code,{children:"B"}),"，同样的，如果你在 ",(0,c.jsx)(e.code,{children:"B"})," 中调用 ",(0,c.jsx)(e.code,{children:"next"})," 那么就会运行 ",(0,c.jsx)(e.code,{children:"C"}),"，而在上面的例子中，添加的第一个函数（L5）就运行了 ",(0,c.jsx)(e.code,{children:"next"}),"，所以这里就会运行第二个函数（L8），并且运行的返回值就是 第二个函数的返回值，如果在第一个函数中没有调用 ",(0,c.jsx)(e.code,{children:"next"}),"，直接返回，例如："]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-ts",children:"import { createPipeline } from '@modern-js/plugin';\n\n// 1. 创建\nconst pipeline = createPipeline<number, number>();\n\n// 2. 添加函数\npipeline.use((count, next) => {\n  return count + 1;\n});\npipeline.use((count, next) => {\n  return count * 2;\n});\n\n// 3. 执行\npipeline.run(1); // 2\npipeline.run(5); // 6\n"})}),"\n",(0,c.jsx)(e.p,{children:"则在运行 Pipeline 的时候就不会运行第二个函数，那么 Pipeline 的运行结果则就是第一个函数的返回值。"}),"\n",(0,c.jsxs)(e.p,{children:["最后，运行 Pipeline 的方式也显而易见就是调用 ",(0,c.jsx)(e.code,{children:"pipeline.run"})," 。"]}),"\n",(0,c.jsxs)(e.h2,{id:"不同-hook-模型的区别",children:["不同 Hook 模型的区别",(0,c.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#不同-hook-模型的区别",children:"#"})]}),"\n",(0,c.jsx)(e.p,{children:"上面这部分就是 Pipeline 整体的一个工作模式的描述，其他的 Hook 模型的工作模式基本也是这样，主要的区别点，是函数类型、执行顺序，参数。"}),"\n",(0,c.jsxs)(e.h3,{id:"pipeline",children:["Pipeline",(0,c.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#pipeline",children:"#"})]}),"\n",(0,c.jsx)(e.p,{children:"上面的例子就是以 Pipeline 为例描述的，这里就不赘述了，在 Pipeline 这个大类中，提供了两个小类：Sync 和 Async，顾名思义，它们的区别就是管理的函数的类型是 Sync 的还是 Async 的。"}),"\n",(0,c.jsxs)(e.div,{className:"modern-directive info",children:[(0,c.jsx)(e.div,{className:"modern-directive-title",children:"INFO"}),(0,c.jsxs)(e.div,{className:"modern-directive-content",children:[(0,c.jsxs)(e.p,{children:["当 Pipeline 中没有函数或者所有函数都调用了 ",(0,c.jsx)(e.code,{children:"next"})," 函数，则就需要在运行的时候提供："]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-ts",children:"pipeline(\n  {},\n  {\n    onLast: () => {\n      // do something\n    },\n  },\n);\n"})}),"\n"]})]}),"\n",(0,c.jsxs)(e.h3,{id:"waterfall",children:["Waterfall",(0,c.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#waterfall",children:"#"})]}),"\n",(0,c.jsx)(e.p,{children:"这种模型顾名思义，他的特点就是参数的顺序递交，即前面一个函数的返回值，将会成为下一个函数的入参，我们也用一个例子来看一下："}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-ts",children:"import { createWaterfall } from '@modern-js/plugin';\n\n// 1. 创建\nconst waterfall = createWaterfall<number>();\n\n// 2. 添加函数\nwaterfall.use(count => {\n  return count + 1;\n});\nwaterfall.use(count => {\n  return count * 2;\n});\n\n// 3. 执行\nwaterfall.run(1); // 4\nwaterfall.run(5); // 12\n"})}),"\n",(0,c.jsxs)(e.p,{children:["这个例子中，创建了一个类型为 ",(0,c.jsx)(e.code,{children:"Waterfall<number> "}),"，即这个模型执行的入参和返回值是一样的，这个例子中都是 ",(0,c.jsx)(e.code,{children:"number"}),"，而它管理的函数的类型是："]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-ts",children:"(count: number) => number;\n"})}),"\n",(0,c.jsx)(e.p,{children:"可能简单看这个例子感觉和上面的 Pipeline 功能一样，那需要注意的是，首先这里 Waterfall 管理的函数没有 next 函数作为第二个参数，所以它无法在函数内部通过调用 next 来先运行之后添加的函数，从而修改运行的顺序，其次这里的运行的入参的类型和返回值的类型必须是一样的（而 Pipeline 可以不一样）。"}),"\n",(0,c.jsx)(e.p,{children:"同样的，在 Waterfall 这个大类中，也提供了 Sync 和 Async 的小类，分别对应 Sync 和 Async 的函数。"}),"\n",(0,c.jsxs)(e.h3,{id:"workflow",children:["Workflow",(0,c.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#workflow",children:"#"})]}),"\n",(0,c.jsx)(e.p,{children:"这种 Hook 模型与上面两种 Hook 模型的区别是，没有那么强的前后参数返回值递交的概念，在这个模型中，每个函数都是基于同样的入参，相对独立运行的，通过一个例子简单看一下："}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-ts",children:"import { createWorkflow } from '@modern-js/plugin';\n\n// 1. 创建\nconst workflow = createWorkflow<number, number>();\n\n// 2. 添加函数\nworkflow.use(count => {\n  return count + 1;\n});\nworkflow.use(count => {\n  return count * 2;\n});\n\n// 3. 执行\nworkflow.run(1); // [2, 2]\nworkflow.run(5); // [6, 10]\n"})}),"\n",(0,c.jsx)(e.p,{children:"在这个例子中，添加了两个函数，所以运行的结果就是这两个函数运行的结果形成的一个数组。"}),"\n",(0,c.jsxs)(e.p,{children:["虽然这种模型中没有那么强的前后参数返回值递交的概念，但依旧有执行顺序的区别，在 Workflow 这个大类中，提供了三个小类：Sync、Async、Parallel。他们之间的区别就是函数的执行顺序，当然默认的都是按照添加顺序执行，而在 Sync、Async 则是强制按照添加顺序执行，而 Parallel 则是 Async 模式的一个变体，即它使用的是 ",(0,c.jsx)(e.code,{children:"Promise.all"})," 来执行所有函数，而 Async 则会 ",(0,c.jsx)(e.code,{children:"await"})," 前面的函数运行结束。"]}),"\n",(0,c.jsxs)(e.h2,{id:"hook-模型对比",children:["Hook 模型对比",(0,c.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#hook-模型对比",children:"#"})]}),"\n",(0,c.jsx)("div",{style:{width:"100%",overflowX:"scroll"},children:(0,c.jsx)("div",{style:{width:"150%"},children:(0,c.jsxs)(e.table,{children:["\n",(0,c.jsxs)(e.thead,{children:["\n",(0,c.jsxs)(e.tr,{children:["\n",(0,c.jsx)(e.th,{}),"\n",(0,c.jsx)(e.th,{children:"函数类型"}),"\n",(0,c.jsx)(e.th,{children:"执行顺序"}),"\n",(0,c.jsx)(e.th,{children:"函数参数来源"}),"\n",(0,c.jsx)(e.th,{children:"执行返回值来源"}),"\n",(0,c.jsx)(e.th,{children:"倾向处理的任务类型"}),"\n",(0,c.jsx)(e.th,{children:"函数 TS 类型"}),"\n"]}),"\n"]}),"\n",(0,c.jsxs)(e.tbody,{children:["\n",(0,c.jsxs)(e.tr,{children:["\n",(0,c.jsx)(e.td,{children:"Pipeline"}),"\n",(0,c.jsx)(e.td,{children:"Sync"}),"\n",(0,c.jsx)(e.td,{children:"默认执行第一个添加的函数，可以通过 next 调用之后添加的函数"}),"\n",(0,c.jsx)(e.td,{children:"第一个函数的参数来源是运行的参数，之后的函数的参数来源是，前一个函数向 next 函数传递的参数"}),"\n",(0,c.jsx)(e.td,{children:"第一个函数的返回值"}),"\n",(0,c.jsx)(e.td,{children:(0,c.jsxs)("ul",{children:[(0,c.jsx)("li",{children:"需要修改初始参数"}),(0,c.jsx)("li",{children:"需要修改函数执行顺序"})]})}),"\n",(0,c.jsx)(e.td,{children:(0,c.jsx)(e.code,{children:"(input: I, next: Next<I, O>) => O"})}),"\n"]}),"\n",(0,c.jsxs)(e.tr,{children:["\n",(0,c.jsx)(e.td,{children:"AsyncPipeline"}),"\n",(0,c.jsx)(e.td,{children:"Sync/Async"}),"\n",(0,c.jsx)(e.td,{children:"默认执行第一个添加的函数，可以通过 next 调用之后添加的函数"}),"\n",(0,c.jsx)(e.td,{children:"第一个函数的参数来源是运行的参数，之后的函数的参数来源是，前一个函数向 next 函数传递的参数"}),"\n",(0,c.jsx)(e.td,{children:"第一个函数的返回值"}),"\n",(0,c.jsx)(e.td,{children:(0,c.jsxs)("ul",{children:[(0,c.jsx)("li",{children:"需要修改初始参数"}),(0,c.jsx)("li",{children:"需要修改函数执行顺序"})]})}),"\n",(0,c.jsx)(e.td,{children:(0,c.jsx)(e.code,{children:"(input: I, next: AsyncNext<I, O>) => O ｜ Promise<O>"})}),"\n"]}),"\n",(0,c.jsxs)(e.tr,{children:["\n",(0,c.jsx)(e.td,{children:"WaterFall"}),"\n",(0,c.jsx)(e.td,{children:"Sync"}),"\n",(0,c.jsx)(e.td,{children:"一直顺序执行"}),"\n",(0,c.jsx)(e.td,{children:"第一个函数的参数来源是运行的参数，之后的函数的参数来源是，前一个函数的返回值"}),"\n",(0,c.jsx)(e.td,{children:"最后一个函数的返回值"}),"\n",(0,c.jsx)(e.td,{children:(0,c.jsxs)("ul",{children:[(0,c.jsx)("li",{children:"需要修改初始参数"}),(0,c.jsx)("li",{children:"不需要修改函数执行顺序"})]})}),"\n",(0,c.jsx)(e.td,{children:(0,c.jsx)(e.code,{children:"(I: I) => I"})}),"\n"]}),"\n",(0,c.jsxs)(e.tr,{children:["\n",(0,c.jsx)(e.td,{children:"AsyncWaterFall"}),"\n",(0,c.jsx)(e.td,{children:"Sync/Async"}),"\n",(0,c.jsx)(e.td,{children:"一直顺序执行"}),"\n",(0,c.jsx)(e.td,{children:"第一个函数的参数来源是运行的参数，之后的函数的参数来源是，前一个函数的返回值"}),"\n",(0,c.jsx)(e.td,{children:"最后一个函数的返回值"}),"\n",(0,c.jsx)(e.td,{children:(0,c.jsxs)("ul",{children:[(0,c.jsx)("li",{children:"需要修改初始参数"}),(0,c.jsx)("li",{children:"不需要修改函数执行顺序"})]})}),"\n",(0,c.jsx)(e.td,{children:(0,c.jsx)(e.code,{children:"(I: I) => I ｜ Promise<I>"})}),"\n"]}),"\n",(0,c.jsxs)(e.tr,{children:["\n",(0,c.jsx)(e.td,{children:"Workflow"}),"\n",(0,c.jsx)(e.td,{children:"Sync"}),"\n",(0,c.jsx)(e.td,{children:"一直顺序执行"}),"\n",(0,c.jsx)(e.td,{children:"所有函数的入参都是运行的参数"}),"\n",(0,c.jsx)(e.td,{children:"所有函数返回值形成的数组"}),"\n",(0,c.jsx)(e.td,{children:(0,c.jsxs)("ul",{children:[(0,c.jsx)("li",{children:"不需要修改初始参数"}),(0,c.jsx)("li",{children:"不需要修改函数执行顺序"})]})}),"\n",(0,c.jsx)(e.td,{children:(0,c.jsx)(e.code,{children:"(I: I) => O"})}),"\n"]}),"\n",(0,c.jsxs)(e.tr,{children:["\n",(0,c.jsx)(e.td,{children:"AsyncWorkflow"}),"\n",(0,c.jsx)(e.td,{children:"Sync/Async"}),"\n",(0,c.jsx)(e.td,{children:"一直顺序执行"}),"\n",(0,c.jsx)(e.td,{children:"所有函数的入参都是运行的参数"}),"\n",(0,c.jsx)(e.td,{children:"所有函数返回值形成的数组"}),"\n",(0,c.jsx)(e.td,{children:(0,c.jsxs)("ul",{children:[(0,c.jsx)("li",{children:"不需要修改初始参数"}),(0,c.jsx)("li",{children:"不需要修改函数执行顺序"})]})}),"\n",(0,c.jsx)(e.td,{children:(0,c.jsx)(e.code,{children:"(I: I) => O ｜ Promise<O>"})}),"\n"]}),"\n",(0,c.jsxs)(e.tr,{children:["\n",(0,c.jsx)(e.td,{children:"ParallelWorkFlow"}),"\n",(0,c.jsx)(e.td,{children:"Sync/Async"}),"\n",(0,c.jsx)(e.td,{children:"异步执行"}),"\n",(0,c.jsx)(e.td,{children:"所有函数的入参都是运行的参数"}),"\n",(0,c.jsx)(e.td,{children:"所有函数返回值形成的数组"}),"\n",(0,c.jsx)(e.td,{children:(0,c.jsxs)("ul",{children:[(0,c.jsx)("li",{children:"不需要修改初始参数"}),(0,c.jsx)("li",{children:"不关心执行顺序"})]})}),"\n",(0,c.jsx)(e.td,{children:(0,c.jsx)(e.code,{children:"(I: I) => O ｜ Promise<O>"})}),"\n"]}),"\n"]}),"\n"]})})}),"\n",(0,c.jsx)(e.p,{children:"Workflow、Waterfall 其实都是 Pipeline 的变体，Pipeline 可以通过特定的写法来实现 Workflow、Waterfall，但都较为麻烦，有许多隐形的约定。为了方便使用，提供了这两种变体来满足这种特殊场景。"})]})}(i=globalThis).__RSPRESS_PAGE_META||(i.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["zh%2Fguides%2Ftopic-detail%2Fframework-plugin%2Fhook.mdx"]={toc:[{text:"基础工作方式",id:"基础工作方式",depth:2},{text:"不同 Hook 模型的区别",id:"不同-hook-模型的区别",depth:2},{text:"Pipeline",id:"pipeline",depth:3},{text:"Waterfall",id:"waterfall",depth:3},{text:"Workflow",id:"workflow",depth:3},{text:"Hook 模型对比",id:"hook-模型对比",depth:2}],title:"Hook 模型",frontmatter:{title:"Hook 模型",sidebar_position:2}};var t=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=Object.assign({},(0,s.useMDXComponents)(),n.components).wrapper;return e?(0,c.jsx)(e,(0,d._)((0,l._)({},n),{children:(0,c.jsx)(h,(0,l._)({},n))})):h(n)}}}]);