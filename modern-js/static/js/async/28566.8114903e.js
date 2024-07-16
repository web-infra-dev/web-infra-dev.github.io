"use strict";(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["28566"],{95407:function(e,n,t){t.r(n),t.d(n,{default:function(){return c}});var i=t(39980),r=t(9580);function s(e){let n=Object.assign({h1:"h1",a:"a",p:"p",div:"div",h2:"h2",code:"code",pre:"pre",h3:"h3",strong:"strong",ul:"ul",li:"li",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,r.ah)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.h1,{id:"render-cache",children:["Render Cache",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#render-cache",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"Sometimes we cache computation results, such as with the React useMemo, useCallback Hook. By caching, we can reduce the number of computations, thus reducing CPU resource usage and enhancing the user experience."}),"\n",(0,i.jsx)(n.p,{children:"Caching the results of server-side rendering (SSR) can reduce the computation and rendering time for each server request, enabling faster page load speeds and improving the user experience. It also lowers the server load, saves computational resources, and speeds up user access."}),"\n",(0,i.jsxs)(n.div,{className:"rspress-directive info",children:[(0,i.jsx)(n.div,{className:"rspress-directive-title",children:"INFO"}),(0,i.jsx)(n.div,{className:"rspress-directive-content",children:(0,i.jsx)(n.p,{children:"Need x.43.0+"})})]}),"\n",(0,i.jsxs)(n.h2,{id:"configuration",children:["Configuration",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#configuration",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["You can enable caching by configuring it in ",(0,i.jsx)(n.code,{children:"server/cache.[t|j]s"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",meta:'title="server/cache.ts"',children:"import type { CacheOption } from '@modern-js/runtime/server';\n\nexport const cacheOption: CacheOption = {\n  maxAge: 500, // ms\n  staleWhileRevalidate: 1000, // ms\n};\n"})}),"\n",(0,i.jsxs)(n.h2,{id:"configuration-explanation",children:["Configuration Explanation",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#configuration-explanation",children:"#"})]}),"\n",(0,i.jsxs)(n.h3,{id:"cache-configuration",children:["Cache Configuration",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#cache-configuration",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["The caching policy is implemented based on ",(0,i.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control",target:"_blank",rel:"noopener noreferrer",children:"stale-while-revalidate"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["During the ",(0,i.jsx)(n.code,{children:"maxAge"})," period, cache content will be returned directly. After ",(0,i.jsx)(n.code,{children:"maxAge"})," but within ",(0,i.jsx)(n.code,{children:"staleWhileRevalidate"}),", the cache content will also be returned directly, but at the same time, re-rendering will be executed asynchronously."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Object type"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"export interface CacheControl {\n  maxAge: number;\n\n  staleWhileRevalidate: number;\n\n  customKey?: string | ((pathname: string) => string);\n}\n"})}),"\n",(0,i.jsx)(n.p,{children:"In this, customKey is used for custom cache key. By default, Modern.js will use the request pathname as key for caching, but in some cases, this may not meet your needs, so developers can customise it."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Function type"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"export type CacheOptionProvider = (\n  req: IncomingMessage,\n) => Promise<CacheControl | false> | CacheControl | false;\n"})}),"\n",(0,i.jsx)(n.p,{children:"Sometimes developers need to customise the cache key through req or when caching does not work for specific URLs, which can be handled using the function form, as shown in the following code:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",meta:'title="server/cache.ts"',children:"import type { CacheOption, CacheOptionProvider } from '@modern-js/runtime/server';\n\nconst provider: CacheOptionProvider = (req) => {\n  const { url, headers, ... } = req;\n\n  const key = computedKey(url, headers, ...);\n\n  if(url.includes('no-cache=1')) {\n    return false;\n  }\n\n\n  return {\n    maxAge: 500, // ms\n    staleWhileRevalidate: 1000, // ms\n    customKey: key,\n  }\n}\n\nexport const cacheOption: CacheOption = provider;\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Mapping type"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"export type CacheOptions = Record<string, CacheControl | CacheOptionProvider>;\n"})}),"\n",(0,i.jsx)(n.p,{children:"Sometimes, developers need to apply different caching policies for different routes. We also provide a mapping way for configuration, as shown in example below:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",meta:'title="server/cache.ts"',children:"import type { CacheOption } from '@modern-js/runtime/server';\n\nexport const cacheOption: CacheOption = {\n  '/home': {\n    maxAge: 50,\n    staleWhileRevalidate: 100,\n  },\n  '/about': {\n    maxAge: 1000 * 60 * 60 * 24, // one day\n    staleWhileRevalidate: 1000 * 60 * 60 * 24 * 2 // two day\n  },\n  '*': (req) => { // If the above routes cannot be matched, it will match to '*'\n    const { url, headers, ... } = req;\n    const key = computedKey(url, headers, ...);\n\n    return {\n      maxAge: 500,\n      staleWhileRevalidate: 1000,\n      customKey: key,\n    }\n  }\n}\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["The route ",(0,i.jsx)(n.code,{children:"http://xxx/home"})," will apply the first rule."]}),"\n",(0,i.jsxs)(n.li,{children:["The route ",(0,i.jsx)(n.code,{children:"http://xxx/about"})," will apply the second rule."]}),"\n",(0,i.jsxs)(n.li,{children:["The route ",(0,i.jsx)(n.code,{children:"http://xxx/abc"})," will apply the last rule."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["The above-mentioned ",(0,i.jsx)(n.code,{children:"/home"})," and ",(0,i.jsx)(n.code,{children:"/about"})," will be used as patterns for matching, which means that ",(0,i.jsx)(n.code,{children:"/home/abc"})," will also comply with this rule.\nSimultaneously, you can also include regular expression syntax in it, such as ",(0,i.jsx)(n.code,{children:"/home/.+"}),"."]}),"\n",(0,i.jsxs)(n.h3,{id:"cache-container",children:["Cache Container",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#cache-container",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"By default, Server will use memory for caching. But typically, services will be deployed on serverless. Each service access may be a new process, so caching cannot be applied every time."}),"\n",(0,i.jsxs)(n.p,{children:["Therefore, developers can also customise the cache container, which needs to implement the ",(0,i.jsx)(n.code,{children:"Container"})," interface."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"export interface Container<K = string, V = string> {\n  /**\n   * Returns a specified element from the container. If the value that is associated to the provided key is an object, then you will get a reference to that object and any change made to that object will effectively modify it inside the Container.\n   * @returns Returns the element associated with the specified key. If no element is associated with the specified key, undefined is returned.\n   */\n  get: (key: K) => Promise<V | undefined>;\n\n  /**\n   * Adds a new element with a specified key and value to the container. If an element with the same key already exists, the element will be updated.\n   *\n   * The ttl indicates cache expiration time.\n   */\n  set: (key: K, value: V, options?: { ttl?: number }) => Promise<this>;\n\n  /**\n   * @returns boolean indicating whether an element with the specified key exists or not.\n   */\n  has: (key: K) => Promise<boolean>;\n\n  /**\n   * @returns true if an element in the container existed and has been removed, or false if the element does not exist.\n   */\n  delete: (key: K) => Promise<boolean>;\n}\n"})}),"\n",(0,i.jsx)(n.p,{children:"As an example in the following code, a developer can implement a Redis container."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"import type { Container, CacheOption } from '@modern-js/runtime/server';\n\nclass RedisContainer implements Container {\n  redis = new Redis();\n\n  async get(key: string) {\n    return this.redis.get(key);\n  }\n\n  async set(key: string, value: string): Promise<this> {\n    this.redis.set(key, value);\n    return this;\n  }\n\n  async has(key: string): Promise<boolean> {\n    return this.redis.has(key);\n  }\n\n  async delete(key: string): Promise<boolean> {\n    return this.redis.delete(key);\n  }\n}\n\nconst container = new RedisContainer();\n\nexport const customContainer: Container = container;\n\nexport const cacheOption: CacheOption = {\n  maxAge: 500, // ms\n  staleWhileRevalidate: 1000, // ms\n};\n"})}),"\n",(0,i.jsxs)(n.h2,{id:"cache-identification",children:["Cache Identification",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#cache-identification",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["When the rendering cache is activated, Modern.js will identify the cache status of the current request through the response header ",(0,i.jsx)(n.code,{children:"x-render-cache"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"The following is an example of a response."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"< HTTP/1.1 200 OK\n< Access-Control-Allow-Origin: *\n< content-type: text/html; charset=utf-8\n< x-render-cache: hit\n< Date: Thu, 29 Feb 2024 02:46:49 GMT\n< Connection: keep-alive\n< Keep-Alive: timeout=5\n< Content-Length: 2937\n"})}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"x-render-cache"})," may have the following values."]}),"\n",(0,i.jsxs)(n.table,{children:["\n",(0,i.jsxs)(n.thead,{children:["\n",(0,i.jsxs)(n.tr,{children:["\n",(0,i.jsx)(n.th,{children:"Name"}),"\n",(0,i.jsx)(n.th,{children:"Description"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.tbody,{children:["\n",(0,i.jsxs)(n.tr,{children:["\n",(0,i.jsx)(n.td,{children:"hit"}),"\n",(0,i.jsx)(n.td,{children:"Cache hit, returns cached content"}),"\n"]}),"\n",(0,i.jsxs)(n.tr,{children:["\n",(0,i.jsx)(n.td,{children:"stale"}),"\n",(0,i.jsx)(n.td,{children:"Cache hit, but data is stale, returns cached content while rendering again"}),"\n"]}),"\n",(0,i.jsxs)(n.tr,{children:["\n",(0,i.jsx)(n.td,{children:"expired"}),"\n",(0,i.jsx)(n.td,{children:"Cache hit, returns rendering result after re-rendering"}),"\n"]}),"\n",(0,i.jsxs)(n.tr,{children:["\n",(0,i.jsx)(n.td,{children:"miss"}),"\n",(0,i.jsx)(n.td,{children:"Cache miss"}),"\n"]}),"\n"]}),"\n"]})]})}function a(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(s,{...e})}):s(e)}let c=a;a.__RSPRESS_PAGE_META={},a.__RSPRESS_PAGE_META["en%2Fguides%2Fadvanced-features%2Fssr%2Fcache.mdx"]={toc:[{text:"Configuration",id:"configuration",depth:2},{text:"Configuration Explanation",id:"configuration-explanation",depth:2},{text:"Cache Configuration",id:"cache-configuration",depth:3},{text:"Cache Container",id:"cache-container",depth:3},{text:"Cache Identification",id:"cache-identification",depth:2}],title:"Cache",frontmatter:{sidebar_position:3,title:"Cache"}}}}]);