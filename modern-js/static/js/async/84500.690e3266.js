"use strict";(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["84500"],{57577:function(n,e,r){r.r(e),r.d(e,{default:function(){return o}});var s=r(39980),c=r(9580);function a(n){let e=Object.assign({h1:"h1",a:"a",h2:"h2",p:"p",code:"code",pre:"pre"},(0,c.ah)(),n.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(e.h1,{id:"\u4E3B\u5B50\u5E94\u7528\u901A\u4FE1",children:["\u4E3B\u5B50\u5E94\u7528\u901A\u4FE1",(0,s.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#\u4E3B\u5B50\u5E94\u7528\u901A\u4FE1",children:"#"})]}),"\n",(0,s.jsxs)(e.h2,{id:"props-\u901A\u4FE1",children:["props \u901A\u4FE1",(0,s.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#props-\u901A\u4FE1",children:"#"})]}),"\n",(0,s.jsxs)(e.p,{children:["Modern.js \u4E2D\uFF0C\u4F1A\u5C06\u5B50\u5E94\u7528\u5305\u88F9\u6210\u4E00\u4E2A React \u7EC4\u4EF6\uFF0C\u76F4\u63A5\u901A\u8FC7\u7ED9 React \u7EC4\u4EF6\u4F20\u9012 ",(0,s.jsx)(e.code,{children:"props"})," \u5373\u53EF\u5B9E\u73B0\u4E3B\u5E94\u7528\u548C\u5B50\u5E94\u7528\u901A\u4FE1\u7684\u76EE\u7684\u3002"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-tsx",meta:"title=\u4E3B\u5E94\u7528\uFF1AApp.tsx",children:"function App() {\n  const { MApp } = useModuleApps();\n\n  return (\n    <div>\n      <MApp count={100} />\n    </div>\n  );\n}\n"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-tsx",meta:"title=\u5B50\u5E94\u7528\uFF1AApp.tsx",children:"function App(props) {\n  console.log(props);\n  return ...\n}\n"})}),"\n",(0,s.jsxs)(e.p,{children:["\u5B50\u5E94\u7528\u5C06\u4F1A\u6253\u5370 ",(0,s.jsx)(e.code,{children:"{count: 0}"}),"\uFF0C\u76EE\u524D\u5C1A\u672A\u652F\u6301\u5B50\u5E94\u7528\u6E32\u67D3\u54CD\u5E94\u5F0F\uFF0C\u53CA\u65F6\u5728\u4E3B\u5E94\u7528\u4E0A\u66F4\u6539 ",(0,s.jsx)(e.code,{children:"count"})," \u7684\u6570\u636E\u4E5F\u4E0D\u4F1A\u89E6\u53D1\u89C6\u56FE\u66F4\u65B0"]}),"\n",(0,s.jsxs)(e.h2,{id:"channel-\u901A\u4FE1",children:["channel \u901A\u4FE1",(0,s.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#channel-\u901A\u4FE1",children:"#"})]}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.a,{href:"https://www.garfishjs.org/api/channel",target:"_blank",rel:"noopener noreferrer",children:"Garfish.channel"})," \u7528\u4E8E\u5E94\u7528\u95F4\u7684\u901A\u4FE1\u3002\u5B83\u662F ",(0,s.jsx)(e.code,{children:"EventEmitter2"})," \u7684\u5B9E\u4F8B"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-ts",children:"// \u5B50\u5E94\u7528\u76D1\u542C\u767B\u5F55\u4E8B\u4EF6\nconst App = () => {\n  const handleLogin = userInfo => {\n    console.log(`${userInfo.name} has login`);\n  };\n\n  useEffect(() => {\n    window?.Garfish.channel.on('login', handleLogin);\n    return () => {\n      window?.Garfish.channel.removeListener('login', handleLogin);\n    };\n  });\n};\n\n// \u4E3B\u5E94\u7528\u89E6\u53D1\u76D1\u542C\u4E8B\u4EF6\napi.getLoginInfo.then(res => {\n  if (res.code === 0) {\n    window.Garfish.channel.emit('login', res.data);\n  }\n});\n"})})]})}function i(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}=Object.assign({},(0,c.ah)(),n.components);return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(a,{...n})}):a(n)}let o=i;i.__RSPRESS_PAGE_META={},i.__RSPRESS_PAGE_META["zh%2Fguides%2Ftopic-detail%2Fmicro-frontend%2Fc04-communicate.mdx"]={toc:[{text:"props \u901A\u4FE1",id:"props-\u901A\u4FE1",depth:2},{text:"channel \u901A\u4FE1",id:"channel-\u901A\u4FE1",depth:2}],title:"\u4E3B\u5B50\u5E94\u7528\u901A\u4FE1",frontmatter:{sidebar_position:4,title:"\u4E3B\u5B50\u5E94\u7528\u901A\u4FE1"}}}}]);