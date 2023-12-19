/*! For license information please see 17539.c0baa7eb.js.LICENSE.txt */
(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["17539"],{55964:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return c}});var s=t("9880"),r=t("23169");function i(e){let n=Object.assign({h1:"h1",a:"a",p:"p",div:"div",h2:"h2",code:"code",pre:"pre",h3:"h3",strong:"strong",ul:"ul",li:"li"},(0,r.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h1,{id:"\u6E32\u67D3\u7F13\u5B58",children:["\u6E32\u67D3\u7F13\u5B58",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u6E32\u67D3\u7F13\u5B58",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"\u6709\u65F6\u6211\u4EEC\u4F1A\u5C06\u8BA1\u7B97\u7ED3\u679C\u8FDB\u884C\u7F13\u5B58\uFF0C\u4F8B\u5982 React useMemo, useCallback Hook\u3002\n\u901A\u8FC7\u7F13\u5B58\u6211\u4EEC\u53EF\u4EE5\u51CF\u5C11\u8BA1\u7B97\u7684\u6B21\u6570\u6765\u51CF\u5C11 CPU \u8D44\u6E90\u5360\u7528\uFF0C\u63D0\u9AD8\u7528\u6237\u4F53\u9A8C\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u901A\u8FC7\u5C06\u670D\u52A1\u5668\u7AEF\u6E32\u67D3\uFF08SSR\uFF09\u7ED3\u679C\u8FDB\u884C\u7F13\u5B58\u80FD\u591F\u51CF\u5C11\u670D\u52A1\u5668\u6BCF\u6B21\u8BF7\u6C42\u65F6\u7684\u8BA1\u7B97\u548C\u6E32\u67D3\u65F6\u95F4\uFF0C\u4ECE\u800C\u52A0\u901F\u9875\u9762\u52A0\u8F7D\u901F\u5EA6\uFF0C\u63D0\u9AD8\u7528\u6237\u4F53\u9A8C\u3002\n\u964D\u4F4E\u670D\u52A1\u7AEF\u8D1F\u8F7D\uFF0C\u8282\u7701\u8BA1\u7B97\u8D44\u6E90\uFF0C\u63D0\u9AD8\u7528\u6237\u8BBF\u95EE\u901F\u5EA6\u3002"}),"\n",(0,s.jsxs)(n.div,{className:"rspress-directive info",children:[(0,s.jsx)(n.div,{className:"rspress-directive-title",children:"INFO"}),(0,s.jsx)(n.div,{className:"rspress-directive-content",children:(0,s.jsx)(n.p,{children:"\u9700\u8981 x.43.0+"})})]}),"\n",(0,s.jsxs)(n.h2,{id:"\u914D\u7F6E\u65B9\u5F0F",children:["\u914D\u7F6E\u65B9\u5F0F",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u914D\u7F6E\u65B9\u5F0F",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["\u5728 ",(0,s.jsx)(n.code,{children:"server/cache.[t|j]s"})," \u4E2D\u914D\u7F6E\u7F13\u5B58\u5373\u53EF\u5F00\u542F\u7F13\u5B58\uFF1A"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",meta:'title="server/cache.ts"',children:"import type { CacheOption } from '@modern-js/runtime/server';\n\nexport const cacheOption: CacheOption = {\n  maxAge: 500, // ms\n  staleWhileRevalidate: 1000, // ms\n};\n"})}),"\n",(0,s.jsxs)(n.h2,{id:"\u914D\u7F6E\u8BF4\u660E",children:["\u914D\u7F6E\u8BF4\u660E",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u914D\u7F6E\u8BF4\u660E",children:"#"})]}),"\n",(0,s.jsxs)(n.h3,{id:"\u7F13\u5B58\u914D\u7F6E",children:["\u7F13\u5B58\u914D\u7F6E",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u7F13\u5B58\u914D\u7F6E",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["\u7F13\u5B58\u7B56\u7565\u53C2\u8003 ",(0,s.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control",target:"_blank",rel:"noopener noreferrer",children:"stale-while-revalidate"})," \u8FDB\u884C\u5B9E\u73B0\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u5728 ",(0,s.jsx)(n.code,{children:"maxAge"})," \u65F6\u95F4\u5185\u4F1A\u76F4\u63A5\u8FD4\u56DE\u7F13\u5B58\u5185\u5BB9\uFF0C\u8D85\u8FC7 ",(0,s.jsx)(n.code,{children:"maxAge"})," \u4F46\u5728 ",(0,s.jsx)(n.code,{children:"staleWhileRevalidate"})," \u5185\u4E5F\u4F1A\u76F4\u63A5\u8FD4\u56DE\u7F13\u5B58\u5185\u5BB9\uFF0C\u4F46\u540C\u65F6\u4F1A\u5F02\u6B65\u505A\u4E00\u6B21\u91CD\u65B0\u6E32\u67D3\u3002"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Object \u7C7B\u578B"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"export interface CacheControl {\n  maxAge: number;\n\n  staleWhileRevalidate: number;\n\n  customKey?: string | ((pathname: string) => string);\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u5176\u4E2D customKey \u4E3A\u81EA\u5B9A\u4E49\u7F13\u5B58 key\u3002\u9ED8\u8BA4\u60C5\u51B5\u4E0B Modern.js \u5C06\u4F1A\u628A\u8BF7\u6C42 pathname \u4F5C\u4E3A key \u8FDB\u884C\u7F13\u5B58\uFF0C\u4F46\u5728\u67D0\u4E9B\u60C5\u51B5\u4E0B\u8FD9\u4E0D\u80FD\u6EE1\u8DB3\u4F60\u7684\u9700\u6C42\uFF0C\u5F00\u53D1\u8005\u53EF\u4EE5\u8FDB\u884C\u81EA\u5B9A\u4E49\u3002"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Function \u7C7B\u578B"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"export type CacheOptionProvider = (\n  req: IncomingMessage,\n) => Promise<CacheControl> | CacheControl;\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u6709\u65F6\u5F00\u53D1\u8005\u9700\u8981\u901A\u8FC7 req \u6765\u81EA\u5B9A\u4E49\u7F13\u5B58 key\uFF0C\u53EF\u4EE5\u914D\u7F6E\u4E3A\u51FD\u6570\u7684\u5F62\u5F0F\u8FDB\u884C\u5904\u7406, \u4F8B\u5982\u4EE5\u4E0B\u4EE3\u7801\uFF1A"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",meta:'title="server/cache.ts"',children:"\nimport type { CacheOption, CacheOptionProvider } from '@modern-js/runtime/server';\n\nconst provider: CacheOptionProvider = (req) => {\n  const { url, headers, ... } = req;\n\n  const key = computedKey(url, headers, ...);\n\n  return {\n    maxAge: 500, // ms\n    staleWhileRevalidate: 1000, // ms\n    customKey: key,\n  }\n}\n\nexport const cacheOption: CacheOption = provider;\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Mapping \u7C7B\u578B"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"export type CacheOptions = Record<string, CacheControl | CacheOptionProvider>;\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u6709\u65F6\u5F00\u53D1\u8005\u9762\u5BF9\u4E0D\u540C\u7684\u8DEF\u7531\u9700\u8981\u5E94\u7528\u4E0D\u540C\u7684\u7F13\u5B58\u7B56\u7565\u3002\u6211\u4EEC\u4E5F\u63D0\u4F9B\u4E00\u79CD\u6620\u5C04\u7684\u65B9\u5F0F\u8FDB\u884C\u914D\u7F6E, \u4EE5\u4E0B\u5217\u4EE3\u7801\u4E3A\u4F8B\u5B50"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",meta:'title="server/cache.ts"',children:"import type { CacheOption } from '@modern-js/runtime/server';\n\nexport const cacheOption: CacheOption = {\n  '/home': {\n    maxAge: 50,\n    staleWhileRevalidate: 100,\n  },\n  '/about': {\n    maxAge: 1000 * 60 * 60 * 24, // one day\n    staleWhileRevalidate: 1000 * 60 * 60 * 24 * 2 // two day\n  },\n  '*': (req) => { // \u82E5\u4E0A\u8FF0\u8DEF\u7531\u65E0\u6CD5\u5339\u914D\uFF0C\u5219\u4F1A\u5339\u914D\u5230 '*'\n    const { url, headers, ... } = req;\n    const key = computedKey(url, headers, ...);\n\n    return {\n      maxAge: 500,\n      staleWhileRevalidate: 1000,\n      customKey: key,\n    }\n  }\n}\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\u8DEF\u7531 ",(0,s.jsx)(n.code,{children:"http://xxx/home"})," \u5C06\u4F1A\u5E94\u7528\u7B2C\u4E00\u6761\u89C4\u5219\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:["\u8DEF\u7531 ",(0,s.jsx)(n.code,{children:"http://xxx/about"})," \u5C06\u4F1A\u5E94\u7528\u7B2C\u4E8C\u6761\u89C4\u5219\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:["\u8DEF\u7531 ",(0,s.jsx)(n.code,{children:"http://xxx/abc"})," \u5C06\u4F1A\u5E94\u7528\u6700\u540E\u4E00\u6761\u89C4\u5219\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["\u4E0A\u8FF0 ",(0,s.jsx)(n.code,{children:"/home"})," \u548C ",(0,s.jsx)(n.code,{children:"/about"})," \u5C06\u4F1A\u4F5C\u4E3A\u6A21\u5F0F\u8FDB\u884C\u5339\u914D\uFF0C\u8FD9\u610F\u5473\u7740 ",(0,s.jsx)(n.code,{children:"/home/abc"})," \u4E5F\u4F1A\u5339\u914D\u4E0A\u8BE5\u89C4\u5219\u3002\n\u540C\u65F6\uFF0C\u4F60\u4E5F\u53EF\u4EE5\u5728\u5176\u4E2D\u7F16\u5199\u6B63\u5219\u8BED\u6CD5\uFF1A",(0,s.jsx)(n.code,{children:"/home/.+"})]}),"\n",(0,s.jsxs)(n.h3,{id:"\u7F13\u5B58\u5BB9\u5668",children:["\u7F13\u5B58\u5BB9\u5668",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u7F13\u5B58\u5BB9\u5668",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0CServer \u5C06\u4F1A\u4F7F\u7528\u5185\u5B58\u8FDB\u884C\u7F13\u5B58\u3002\u4F46\u901A\u5E38\u60C5\u51B5\u4E0B\u670D\u52A1\u5C06\u4F1A\u90E8\u7F72\u5728 serverless \u4E0A\u3002\u6BCF\u4E00\u6B21\u7684\u670D\u52A1\u8BBF\u95EE\u53EF\u80FD\u90FD\u662F\u4E00\u4E2A\u65B0\u7684\u8FDB\u7A0B\uFF0C\u8FD9\u6837\u6BCF\u6B21\u8BBF\u95EE\u90FD\u4E0D\u80FD\u5E94\u7528\u7F13\u5B58"}),"\n",(0,s.jsxs)(n.p,{children:["\u6545\u5F00\u53D1\u8005\u4E5F\u53EF\u4EE5\u81EA\u5B9A\u4E49\u7F13\u5B58\u5BB9\u5668\uFF0C\u5BB9\u5668\u9700\u5B9E\u73B0\u63A5\u53E3 ",(0,s.jsx)(n.code,{children:"Containter"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"export interface Containter<K = string, V = string> {\n  /**\n   * Returns a specified element from the containter. If the value that is associated to the provided key is an object, then you will get a reference to that object and any change made to that object will effectively modify it inside the Containter.\n   * @returns Returns the element associated with the specified key. If no element is associated with the specified key, undefined is returned.\n   */\n  get: (key: K) => Promise<V | undefined>;\n\n  /**\n   * Adds a new element with a specified key and value to the containter. If an element with the same key already exists, the element will be updated.\n   *\n   * The ttl indicates cache expiration time.\n   */\n  set: (key: K, value: V, options?: { ttl?: number }) => Promise<this>;\n\n  /**\n   * @returns boolean indicating whether an element with the specified key exists or not.\n   */\n  has: (key: K) => Promise<boolean>;\n\n  /**\n   * @returns true if an element in the containter existed and has been removed, or false if the element does not exist.\n   */\n  delete: (key: K) => Promise<boolean>;\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u4EE5\u4E0B\u9762\u4EE3\u7801\u4E3A\u4F8B\uFF0C\u5F00\u53D1\u8005\u53EF\u5B9E\u73B0\u4E00\u4E2A redis \u5BB9\u5668\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"import type { Containter, CacheOption } from '@modern-js/runtime/server';\n\nclass RedisContainter implements Containter {\n  redis = new Redis();\n\n  async get(key: string) {\n    return this.redis.get(key);\n  }\n\n  async set(key: string, value: string): Promise<this> {\n    this.redis.set(key, value);\n    return this;\n  }\n\n  async has(key: string): Promise<boolean> {\n    return this.redis.has(key);\n  }\n\n  async delete(key: string): Promise<boolean> {\n    return this.redis.delete(key);\n  }\n}\n\nconst containter = new RedisContainter();\n\nexport const customContainer: Containter = containter;\n\nexport const cacheOption: CacheOption = {\n  maxAge: 500, // ms\n  staleWhileRevalidate: 1000, // ms\n};\n"})})]})}function a(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,r.useMDXComponents)(),e.components);return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(i,{...e})}):i(e)}var c=a;a.__RSPRESS_PAGE_META={},a.__RSPRESS_PAGE_META["zh%2Fguides%2Fadvanced-features%2Fssr%2Fcache.mdx"]={toc:[{text:"\u914D\u7F6E\u65B9\u5F0F",id:"\u914D\u7F6E\u65B9\u5F0F",depth:2},{text:"\u914D\u7F6E\u8BF4\u660E",id:"\u914D\u7F6E\u8BF4\u660E",depth:2},{text:"\u7F13\u5B58\u914D\u7F6E",id:"\u7F13\u5B58\u914D\u7F6E",depth:3},{text:"\u7F13\u5B58\u5BB9\u5668",id:"\u7F13\u5B58\u5BB9\u5668",depth:3}],title:"\u6E32\u67D3\u7F13\u5B58",frontmatter:{sidebar_position:3,title:"\u7F13\u5B58"}}}}]);