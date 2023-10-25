(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["4889"],{86550:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return o},frontmatter:function(){return l}});var t=r("15169"),d=r("43932"),s=r("9880"),i=r("23169");function c(e){var n=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",pre:"pre",code:"code",h3:"h3",ul:"ul",li:"li"},(0,i.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h1,{id:"render",children:["render",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#render",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"Used to render the component in the test case."}),"\n",(0,s.jsxs)(n.h2,{id:"usage",children:["Usage",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#usage",children:"#"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"import { render } from '@modern-js/runtime/testing';\n"})}),"\n",(0,s.jsxs)(n.h2,{id:"function-signature",children:["Function Signature",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#function-signature",children:"#"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"type Options = {\n  container: DOMElement;\n  baseElement: DOMElement;\n  hydrate: boolean;\n  warpper: React.ComponentType<{children: ReactNode}>;\n  queries: any;\n};\n\ntype RenderResult = {\n  {...queries}: any;\n  container: DOMElement;\n  baseElement: DOMElement;\n  debug: function;\n  rerender: function;\n  unmount: function;\n  asFragment: function;\n}\n\nfunction render(ui: React.ReactElement<any>, options: Options): RenderResult;\n"})}),"\n",(0,s.jsxs)(n.h3,{id:"input",children:["Input",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#input",children:"#"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"ui"}),": the React component that needs to be rendered."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"options"}),": render options.","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"container"}),": the dom which component mounted. by default create a ",(0,s.jsx)(n.code,{children:"div"})," element, and auto append to ",(0,s.jsx)(n.code,{children:"document.body"}),". the default value is ",(0,s.jsx)(n.code,{children:"document.body.append(document.createElement('div'))"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"baseElement"}),": Used to specify the ",(0,s.jsx)(n.code,{children:"basename"})," used in ",(0,s.jsx)(n.code,{children:"queries"}),". If ",(0,s.jsx)(n.code,{children:"container"})," is specified, the default value is the value of ",(0,s.jsx)(n.code,{children:"container"}),", otherwise it is ",(0,s.jsx)(n.code,{children:"document.body"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"hydrate"}),": If set to ",(0,s.jsx)(n.code,{children:"true"}),", the ",(0,s.jsx)(n.a,{href:"https://react.dev/reference/react-dom/hydrate",target:"_blank",rel:"noopener noreferrer",children:"ReactDOM.hydrate"})," rendering component is used. The default value is ",(0,s.jsx)(n.code,{children:"false"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"wrapper"}),": a react component that can be used to customize rendering logic."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"queries"}),": customize some own ",(0,s.jsx)(n.code,{children:"queries"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.h3,{id:"return-value",children:["Return Value",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#return-value",children:"#"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"{...queries}"}),": all available ",(0,s.jsx)(n.a,{href:"https://testing-library.com/docs/queries/about/",target:"_blank",rel:"noopener noreferrer",children:"queries"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"container"}),": the DOM element that React component mounted."]}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"baseElement"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"debug"})}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"rerender"}),": if you want to test some scene when a rendered component is updated, you can use rerender for reality."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"unmount"}),": unmount rendered components. This API is helpful if you want to test what happens after the component is unmounted."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"asFragment"}),": return the ",(0,s.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment",target:"_blank",rel:"noopener noreferrer",children:"DocumentFragment"})," of rendered component. used to test the response of the DOM structure after the react event is triggered."]}),"\n"]}),"\n",(0,s.jsxs)(n.h2,{id:"example",children:["Example",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#example",children:"#"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"import { render } from '@modern-js/runtime/testing';\nimport App from './App';\n\ntest('renders a message', () => {\n  const { container, getByText } = render(<App />);\n  expect(getByText('Hello, world!')).toBeInTheDocument();\n  expect(container.firstChild).toMatchInlineSnapshot(`\n    <h1>Hello, World!</h1>\n  `);\n});\n"})})]})}function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,i.useMDXComponents)(),e.components).wrapper;return n?(0,s.jsx)(n,(0,d._)((0,t._)({},e),{children:(0,s.jsx)(c,(0,t._)({},e))})):c(e)}var o=a;a.__RSPRESS_PAGE_META={},a.__RSPRESS_PAGE_META["en%2Fapis%2Fapp%2Fruntime%2Ftesting%2Frender.mdx"]={toc:[{text:"Usage",id:"usage",depth:2},{text:"Function Signature",id:"function-signature",depth:2},{text:"Input",id:"input",depth:3},{text:"Return Value",id:"return-value",depth:3},{text:"Example",id:"example",depth:2}],title:"render"};var l={title:"render"}}}]);