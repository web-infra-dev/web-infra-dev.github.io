/*! For license information please see 98218.340be3db.js.LICENSE.txt */
(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["98218"],{31316:function(n,e,i){"use strict";i.r(e);var a=i("39980"),t=i("76713");function s(n){let e=Object.assign({h1:"h1",a:"a",h2:"h2",p:"p",pre:"pre",code:"code"},(0,t.useMDXComponents)(),n.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(e.h1,{id:"communicate",children:["Communicate",(0,a.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#communicate",children:"#"})]}),"\n",(0,a.jsxs)(e.h2,{id:"props",children:["Props",(0,a.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#props",children:"#"})]}),"\n",(0,a.jsx)(e.p,{children:"In Modern.js, the sub-application will be wrapped into a React component, and the purpose of communicating between the main application and the sub-application can be achieved directly by passing'props' to the React component."}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-tsx",meta:"title=Main: App.tsx",children:"function App() {\n  const { MApp } = useModuleApps();\n\n  return (\n    <div>\n      <MApp count={100} />\n    </div>\n  );\n}\n"})}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-tsx",meta:"title=Main: App.tsx",children:"function App(props) {\n  console.log(props);\n  return ...\n}\n"})}),"\n",(0,a.jsxs)(e.p,{children:["The child application will print ",(0,a.jsx)(e.code,{children:"{count: 0}"}),". Currently, child application rendering responsiveness is not supported. Changing the data of'count 'on the main application in time will not trigger a view update"]}),"\n",(0,a.jsxs)(e.h2,{id:"channel",children:["channel",(0,a.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#channel",children:"#"})]}),"\n",(0,a.jsxs)(e.p,{children:["[Garfish.channel] (",(0,a.jsx)(e.a,{href:"https://www.garfishjs.org/api/channel",target:"_blank",rel:"noopener noreferrer",children:"https://www.garfishjs.org/api/channel"}),") Used for communication between applications. It is an instance of ",(0,a.jsx)(e.code,{children:"EventEmitter2"}),"."]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-ts",children:"// sub app listen login event\nconst App = () => {\n  const handleLogin = userInfo => {\n    console.log(`${userInfo.name} has login`);\n  };\n\n  useEffect(() => {\n    window?.Garfish.channel.on('login', handleLogin);\n    return () => {\n      window?.Garfish.channel.removeListener('login', handleLogin);\n    };\n  });\n};\n\n// main app emit login event\napi.getLoginInfo.then(res => {\n  if (res.code === 0) {\n    window.Garfish.channel.emit('login', res.data);\n  }\n});\n"})})]})}function o(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}=Object.assign({},(0,t.useMDXComponents)(),n.components);return e?(0,a.jsx)(e,{...n,children:(0,a.jsx)(s,{...n})}):s(n)}e.default=o,o.__RSPRESS_PAGE_META={},o.__RSPRESS_PAGE_META["en%2Fguides%2Ftopic-detail%2Fmicro-frontend%2Fc04-communicate.mdx"]={toc:[{text:"Props",id:"props",depth:2},{text:"channel",id:"channel",depth:2}],title:"Communicate",frontmatter:{sidebar_position:4,title:"Communicate"}}}}]);