(self.webpackChunk_modern_js_devtools_client=self.webpackChunk_modern_js_devtools_client||[]).push([["main"],{17658:function(e,r,n){!function(e){if("/"===e.search[1]){var r=e.search.slice(1).split("&").map(function(e){return e.replace(/~and~/g,"&")}).join("?");window.history.replaceState(null,null,e.pathname.slice(0,-1)+r+e.hash)}}(window.location)},71444:function(e,r,n){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var t=n("47991");t._(n("19077"),r),t._(n("88538"),r)},63245:function(e,r,n){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"NameDefinition",{enumerable:!0,get:function(){return o}});var t=n("37599");class o{constructor(){t._(this,"formalName","Modern.js"),t._(this,"casualName","modern.js"),t._(this,"prefixName","_modern_js")}}},19077:function(e,r,n){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var t=n("47991");t._(n("63072"),r),t._(n("63245"),r),t._(n("90943"),r)},90943:function(e,r,n){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"SetupClientOptions",{enumerable:!0,get:function(){return o}});var t=n("37599");class o{constructor(){t._(this,"endpoint","https://modernjs.dev/devtools"),t._(this,"version",void 0),t._(this,"dataSource","/_modern_js/devtools/rpc");var e=n("24298").version;this.version=e}}},63072:function(e,r,n){"use strict";Object.defineProperty(r,"__esModule",{value:!0})},88538:function(e,r,n){"use strict";function t(e,r){if(!r)return e;var n=e;for(var t of r)n=n.replace(t.replace,t.to);return n}Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"applyShortenAliases",{enumerable:!0,get:function(){return t}})},67271:function(e,r,n){"use strict";n.r(r),n.d(r,{createApp:function(){return b},bootstrap:function(){return w}});var t,o=n("61078"),i=n("20891"),u=n("15169"),a=n("85056"),s=n("93160"),c=n("73706"),l=n("9880"),f=n("57814"),d=n.n(f),p=n("99428"),v=n.n(p),m=n("47328"),h=n("38338"),g=n("31971"),_=n("97511"),y=new WeakMap,x=function(e){return{loaderManager:(0,_.createLoaderManager)({}),runner:e,isBrowser:!0,routeManifest:"undefined"!=typeof window&&window[m.ROUTE_MANIFEST]}},b=function(e){var r=e.plugins,n=e.props,t=g.runtime.clone();return t.usePlugin.apply(t,(0,s._)(r)),function(e){var r=t.init(),o=function(n){var t,o=d.createElement(e||d.Fragment,e?(0,u._)({},n):null,e?n.children:d.cloneElement(n.children,(0,u._)({},null===(t=n.children)||void 0===t?void 0:t.props,n))),i=(0,f.useContext)(h.RuntimeReactContext);return r.provide({element:o,props:(0,u._)({},n),context:i},{onLast:function(e){return e.element}})};e&&v(o,e);var i=r.hoc({App:o},{onLast:function(e){var t=e.App;return v(function(e){var o,i=e.context,s=(0,a._)(e,["context"]),c=i;!(null===(o=c)||void 0===o?void 0:o.runner)&&(c=x(r),r.init({context:c},{onLast:function(e){var r,n=e.context;return null==t?void 0:null===(r=t.init)||void 0===r?void 0:r.call(t,n)}}));var f=(0,u._)({},s,n);return(0,l.jsx)(h.RuntimeReactContext.Provider,{value:c,children:(0,l.jsx)(t,(0,u._)({},f))})},t)}});return y.set(i,r),i}};var w=(t=(0,o._)(function(e,r,n,t){var o,a,s,l,f,p,v,m,h,g,w,j,R,k,E,S,C,A;return(0,c._)(this,function(c){switch(c.label){case 0:var O;if(o=e,!(a=y.get(o))&&(o=b({plugins:[]})(o),a=y.get(o)),s=x(a),l=function(e){return a.init({context:e},{onLast:function(e){var r,n,t=e.context;return null===(n=o)||void 0===n?void 0:null===(r=n.init)||void 0===r?void 0:r.call(n,t)}})},!r)return[2,d.createElement(o,{context:s})];if(!("undefined"!=typeof window&&"nodejs"!==window.name))return[3,4];if(!("string"==typeof(O=r)||"undefined"!=typeof HTMLElement&&(0,i._)(O,HTMLElement)))return[3,2];return j=Object.keys(w=(null===(p=g=window._SSR_DATA)||void 0===p?void 0:null===(f=p.data)||void 0===f?void 0:f.loadersData)||{}).reduce(function(e,r){var n=w[r];return!1!==n.loading?e:(e[r]=n,e)},{}),Object.assign(s,(0,u._)({loaderManager:(0,_.createLoaderManager)(j,{skipStatic:!0})},g?{ssrContext:null===(v=g)||void 0===v?void 0:v.context}:{})),s.initialData=null===(h=g)||void 0===h?void 0:null===(m=h.data)||void 0===m?void 0:m.initialData,[4,l(s)];case 1:if((R=c.sent())&&(s.initialData=R),k="string"!=typeof r?r:document.getElementById(r||"root"),!t)throw Error("The `bootstrap` need provide `ReactDOM` parameter");return E=function(e){if(n)n.render(e);else if(t.createRoot)t.createRoot(k).render(e);else throw Error("The `bootstrap` `ReactDOM` parameter needs to provide the `createRoot` method")},S=function(e,r){if(!t.hydrateRoot)throw Error("The `bootstrap` `ReactDOM` parameter needs to provide the `hydrateRoot` method");t.hydrateRoot(k,e)},[2,a.client({App:o,context:s,ModernRender:E,ModernHydrate:S},{onLast:function(e){var r=e.App;E(d.createElement(r,{context:s}))}})];case 2:throw Error("`bootstrap` needs id in browser environment, it needs to be string or element");case 3:return[3,6];case 4:return Object.assign(s,{ssrContext:r,isBrowser:!1,loaderManager:(0,_.createLoaderManager)({},{skipNonStatic:r.staticGenerate,skipStatic:!r.staticGenerate})}),C=function(e){if("undefined"!=typeof Response&&(0,i._)(e,Response)&&e.status>=300&&e.status<=399){var r=e.status,n=e.headers.get("Location")||"/",t=s.ssrContext;return t&&(t.res.statusCode=r,t.res.setHeader("Location",n),t.redirection=t.redirection||{},t.redirection.status=r,t.redirection.url=n),!0}return!1},[4,l(s)];case 5:if(A=c.sent(),!C(A))return s.initialData=A,[2,a.server({App:o,context:s})];c.label=6;case 6:return[2]}})}),function(e,r,n,o){return t.apply(this,arguments)})},17500:function(e,r,n){"use strict";n.r(r),n.d(r,{RuntimeReactContext:function(){return o.RuntimeReactContext}});var t=n("67271");n.es(t,r);var o=n("38338"),i=n("89323");n.es(i,r)},97511:function(e,r,n){"use strict";n.r(r),n.d(r,{createLoaderManager:function(){return v}});var t,o,i=n("61078"),u=n("20891"),a=n("28003"),s=n("93160"),c=n("73706"),l=n("44463"),f=n.n(l),d=function(){var e=new Map;return function(r){var n=e.get(r);if(n)return n;var t=JSON.stringify(r);return f(t,"params should be not null value"),e.set(r,t),t}};(t=o||(o={}))[t.idle=0]="idle",t[t.loading=1]="loading",t[t.fulfilled=2]="fulfilled",t[t.rejected=3]="rejected";var p=function(e){var r,n,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{loading:!1,reloading:!1,data:void 0,error:void 0},a=arguments.length>2?arguments[2]:void 0,l=arguments.length>3&&void 0!==arguments[3]&&arguments[3],f=o.idle,d=t.data,p=t.error,v=!1,m=new Set;var h=(r=(0,i._)(function(){return(0,c._)(this,function(e){return l||f===o.loading?[2,n]:(f=o.loading,_(),[2,n=a().then(function(e){d=e,p=null,f=o.fulfilled}).catch(function(e){p=e,d=null,f=o.rejected}).finally(function(){n=null,v=!0,_()})])})}),function(){return r.apply(this,arguments)}),g=function(){return{loading:!v&&f===o.loading,reloading:v&&f===o.loading,data:d,error:(0,u._)(p,Error)?"".concat(p.message):p,_error:p}},_=function(){(0,s._)(m).forEach(function(e){e(f,g())})};return{get result(){return g()},get promise(){return n},onChange:function(e){return m.add(e),function(){m.delete(e)}},load:h}},v=function(e){var r,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=n.skipStatic,o=void 0!==t&&t,s=n.skipNonStatic,l=void 0!==s&&s,f=new Map,v=d();return{hasPendingLoaders:function(){var e=!0,r=!1,n=void 0;try{for(var t,o=f.values()[Symbol.iterator]();!(e=(t=o.next()).done);e=!0){var i=t.value.promise;if((0,u._)(i,Promise))return!0}}catch(e){r=!0,n=e}finally{try{!e&&null!=o.return&&o.return()}finally{if(r)throw n}}return!1},awaitPendingLoaders:(r=(0,i._)(function(){var e,r,n,t,o,i,s,l,d,p;return(0,c._)(this,function(c){switch(c.label){case 0:e=[],r=!0,n=!1,t=void 0;try{for(o=f[Symbol.iterator]();!(r=(i=o.next()).done);r=!0)l=(s=(0,a._)(i.value,2))[0],p=(d=s[1]).promise,(0,u._)(p,Promise)&&e.push([l,d])}catch(e){n=!0,t=e}finally{try{!r&&null!=o.return&&o.return()}finally{if(n)throw t}}return[4,Promise.all(e.map(function(e){return e[1].promise}))];case 1:return c.sent(),[2,e.reduce(function(e,r){var n=(0,a._)(r,2),t=n[0],o=n[1];return e[t]=o.result,e},{})]}})}),function(){return r.apply(this,arguments)}),add:function(r,n){var t=v(n.params),i=f.get(t),u=n._cache;if(!i||!1===u){var a=l&&!n.static,s=o&&n.static,c=a||s;i=p(t,void 0!==e[t]?e[t]:{data:n.initialData},r,c),f.set(t,i)}return t},get:function(e){return f.get(e)}}}},31971:function(e,r,n){"use strict";n.r(r),n.d(r,{runtime:function(){return i}});var t=n("89323"),o={hoc:(0,t.createPipeline)(),provide:(0,t.createPipeline)(),client:(0,t.createAsyncPipeline)(),server:(0,t.createAsyncPipeline)(),init:(0,t.createAsyncPipeline)(),pickContext:(0,t.createPipeline)()},i=(0,t.createManager)(o);i.createPlugin},71300:function(e,r,n){"use strict";n.r(r),n.d(r,{createApp:function(){return t.createApp},bootstrap:function(){return t.bootstrap}});var t=n("17500")},71593:function(e,r,n){"use strict";n.r(r),n.d(r,{default:function(){return t.default}});var t=n("94552");n.es(t,r)},75949:function(e,r,n){"use strict";n.r(r),n.d(r,{DefaultNotFound:function(){return o}});var t=n("9880"),o=function(){return(0,t.jsx)("div",{style:{margin:"150px auto",textAlign:"center",display:"flex",alignItems:"center",justifyContent:"center"},children:"404"})}},90208:function(e,r,n){"use strict";function t(){return null}n.r(r),n.d(r,{default:function(){return t}})},87872:function(e,r,n){"use strict";n.r(r),n.d(r,{modifyRoutes:function(){return t}});var t=(0,n("89323").createWaterfall)()},94552:function(e,r,n){"use strict";n.r(r),n.d(r,{Outlet:function(){return o.Outlet},useLocation:function(){return o.useLocation},useNavigate:function(){return o.useNavigate},matchRoutes:function(){return o.matchRoutes},redirect:function(){return o.redirect},default:function(){return i}});var t=n("96856"),o=n("11275"),i=t.routerPlugin},96856:function(e,r,n){"use strict";n.r(r),n.d(r,{routerPlugin:function(){return g}});var t=n("15169"),o=n("43932"),i=n("93160"),u=n("9880"),a=n("57814"),s=n("11275"),c=n("99428"),l=n.n(c),f=n("58579"),d=n("17500"),p=n("87872"),v=n("40318"),m={routes:[]},h=!0,g=function(e){var r=e.serverBase,n=void 0===r?[]:r,c=e.supportHtml5History,h=void 0===c||c,g=e.basename,_=void 0===g?"":g,y=e.routesConfig,x=e.createRoutes,b=[];return m=y,window._SERVER_DATA=(0,f.parsedJSONFromElement)("__MODERN_SERVER_DATA__"),{name:"@modern-js/plugin-router",registerHook:{modifyRoutes:p.modifyRoutes},setup:function(e){return{init:function(e,r){var n=e.context;return n.router={useMatches:s.useMatches,useLocation:s.useLocation},Object.defineProperty(n,"routes",{get:function(){return b}}),r({context:n})},hoc:function(r,c){var f,p=r.App;if(!m&&!x)return c({App:p});var g=(f=function(r){var u,c,l=(null===(c=window._SERVER_DATA)||void 0===c?void 0:c.router.baseUrl)||(u=location.pathname,n.find(function(e){return 0===u.search(e)})||"/"),f="/"===l?(0,v.urlJoin)(l,_):l,p=window._ROUTER_DATA,g=(0,a.useContext)(d.RuntimeReactContext),y=g.unstable_getBlockNavState;return(0,a.useMemo)(function(){(null===(n=p)||void 0===n?void 0:n.errors)&&(p=(0,o._)((0,t._)({},p),{errors:(0,v.deserializeErrors)(p.errors)})),b=x?x():(0,s.createRoutesFromElements)((0,v.renderRoutes)({routesConfig:m,props:r})),b=e.useHookRunners().modifyRoutes(b);var n,u=h?(0,s.createBrowserRouter)(b,{basename:f,hydrationData:p}):(0,s.createHashRouter)(b,{basename:f,hydrationData:p}),a=u.subscribe;return u.subscribe=function(e){return a(function(){for(var r=arguments.length,n=Array(r),t=0;t<r;t++)n[t]=arguments[t];if(!(y&&y()))return e.apply(void 0,(0,i._)(n))})},Object.defineProperty(g,"remixRouter",{get:function(){return u},configurable:!0}),u},[m,r,f,p,y])},function(e){var r=f(e);return(0,u.jsx)(p,(0,o._)((0,t._)({},e),{children:(0,u.jsx)(s.RouterProvider,{router:r})}))});return(p&&(g=l(g,p)),null==y?void 0:y.globalApp)?c({App:l(g,y.globalApp)}):c({App:g})},pickContext:function(e,r){var n=e.context,i=e.pickedContext,u=n.remixRouter;if(!u)return r({context:n,pickedContext:i});var a={navigate:u.navigate,get location(){return u.state.location}};return r({context:n,pickedContext:(0,o._)((0,t._)({},i),{router:a})})}}}}}},40318:function(e,r,n){"use strict";n.r(r),n.d(r,{renderRoutes:function(){return d},urlJoin:function(){return p},deserializeErrors:function(){return v}});var t=n("15169"),o=n("85056"),i=n("28003"),u=n("9880"),a=n("11275"),s=n("54700"),c=n("53405"),l=n("75949"),f=n("90208");function d(e){var r=e.routesConfig,n=e.props,i=e.ssrMode,s=e.reporter;if(!r)return null;var d=r.routes,p=r.globalApp;return d?function(e,r){var n=r.globalApp,i=r.ssrMode,s=r.props,d=r.reporter,p=function(e){var r=e.Component,i=(0,o._)(e,["Component"]);return n?(0,u.jsx)(n,(0,t._)({Component:r},i)):(0,u.jsx)(r,(0,t._)({},i))},v=[],m=!0,h=!1,g=void 0;try{for(var _,y=e[Symbol.iterator]();!(m=(_=y.next()).done);m=!0){var x=_.value;if("nested"===x.type){var b=(0,c.renderNestedRoute)(x,{DeferredDataComponent:"stream"===i?f.default:void 0,props:s,reporter:d});v.push(b)}else{var w=(0,u.jsx)(a.Route,{path:x.path,element:(0,u.jsx)(p,{Component:x.component})},x.path);v.push(w)}}}catch(e){h=!0,g=e}finally{try{!m&&null!=y.return&&y.return()}finally{if(h)throw g}}return v.push((0,u.jsx)(a.Route,{path:"*",element:(0,u.jsx)(l.DefaultNotFound,{})},"*")),v}(d,{globalApp:p,ssrMode:i,props:n,reporter:s}):null}var p=function(){for(var e=arguments.length,r=Array(e),n=0;n<e;n++)r[n]=arguments[n];var t=RegExp("".concat("/","{1,}"),"g");return function(e){var r=e;return r&&"string"==typeof r?(r.startsWith(".")&&(r=r.slice(1)),!r.startsWith("/")&&(r="/".concat(r)),r.endsWith("/")&&"/"!==r&&(r=r.slice(0,r.length-1)),r):r}(r.join("/").replace(t,"/"))};function v(e){if(!e)return null;var r=Object.entries(e),n={},t=!0,o=!1,u=void 0;try{for(var a,c=r[Symbol.iterator]();!(t=(a=c.next()).done);t=!0){var l=(0,i._)(a.value,2),f=l[0],d=l[1];if(d&&"RouteErrorResponse"===d.__type)n[f]=new s.ErrorResponse(d.status,d.statusText,d.data,!0===d.internal);else if(d&&"Error"===d.__type){var p=Error(d.message);p.stack=d.stack,n[f]=p}else n[f]=d}}catch(e){o=!0,u=e}finally{try{!t&&null!=c.return&&c.return()}finally{if(o)throw u}}return n}},38338:function(e,r,n){"use strict";n.r(r),n.d(r,{RuntimeReactContext:function(){return o}});var t=n("57814"),o=(0,t.createContext)({});(0,t.createContext)({})},89323:function(e,r,n){"use strict";n.r(r),n.d(r,{createAsyncPipeline:function(){return p},createManager:function(){return W},createPipeline:function(){return d},createWaterfall:function(){return h}});var t=n("37599"),o=n("15169"),i=n("93160"),u=n("43932"),a=n("16584"),s=function(e){var r=function(n,t){return e(n,t,function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t;return r(n+1,e)})};return{start:function(e){return r(0,e)},dispatch:r}},c=function(e){return!!(null==e?void 0:e[l])},l=Symbol.for("MODERN_PIPELINE"),f=function(e){if("function"==typeof e)return e;if(e&&"function"==typeof e.middleware)return e.middleware;throw Error("".concat(e," is not a Middleware"))},d=function(){var e,r=[],n=function(e){return s(function(n,t,o){if(n>=r.length){if(e)return e(t);throw Error("Expect returning a value, but all middlewares just calling next()")}return r[n](t,o)})},o=n(),u=function(e){return e?n(null==e?void 0:e.onLast):o},a=function(e,r){return u(r).start(e)},c=(e={},(0,t._)(e,l,!0),(0,t._)(e,"use",function(){for(var e=arguments.length,n=Array(e),t=0;t<e;t++)n[t]=arguments[t];return r.push.apply(r,(0,i._)(n.map(f))),c}),(0,t._)(e,"run",a),(0,t._)(e,"middleware",function(e,r){return a(e,{onLast:r})}),e);return c},p=function(){var e=d();return(0,o._)({},e)},v=Symbol.for("MODERN_WATERFALL"),m=function(e){if("function"==typeof e)return e;if(e&&"function"==typeof e.middleware)return e.middleware;throw Error("".concat(e," is not a Brook or { brook: Brook }"))},h=function(){var e=d(),r=(0,u._)((0,o._)({},e),(0,t._)({use:function(){for(var n=arguments.length,t=Array(n),o=0;o<n;o++)t[o]=arguments[o];return e.use.apply(e,(0,i._)(t.map(m).map(_))),r},run:function(r,n){return e.run(r,(0,u._)((0,o._)({},n),{onLast:function(e){return e}}))},middleware:function(r){return e.run(r,{onLast:function(e){return e}})}},v,!0));return r},g=function(e){return!!(null==e?void 0:e[v])},_=function(e){return function(r,n){return n(e(r))}},y=Symbol.for("MODERN_ASYNC_WATERFALL"),x=function(e){if("function"==typeof e)return e;if(e&&"function"==typeof e.middleware)return e.middleware;throw Error("".concat(e," is not a AsyncBrook or { brook: AsyncBrook }"))},b=function(){var e=p(),r=(0,u._)((0,o._)({},e),(0,t._)({use:function(){for(var n=arguments.length,t=Array(n),o=0;o<n;o++)t[o]=arguments[o];return e.use.apply(e,(0,i._)(t.map(x).map(j))),r},run:function(r,n){return e.run(r,(0,u._)((0,o._)({},n),{onLast:function(e){return e}}))},middleware:function(r){return e.run(r,{onLast:function(e){return e}})}},y,!0));return r},w=function(e){return!!(null==e?void 0:e[y])},j=function(e){return function(r,n){return Promise.resolve(e(r)).then(function(e){return n(e)})}},R=Symbol.for("MODERN_WORKFLOW"),k=function(){var e=d(),r=(0,u._)((0,o._)({},e),(0,t._)({use:function(){for(var n=arguments.length,t=Array(n),o=0;o<n;o++)t[o]=arguments[o];return e.use.apply(e,(0,i._)(t.map(S))),r},run:function(r){return e.run(r,{onLast:function(){return[]}}).filter(Boolean)}},R,!0));return r},E=function(e){return!!(null==e?void 0:e[R])},S=function(e){return function(r,n){return[e(r)].concat((0,i._)(n(r)))}},C=Symbol.for("MODERN_PARALLEL_WORKFLOW"),A=function(e){return!!(null==e?void 0:e[C])},O=function(){var e=d(),r=(0,u._)((0,o._)({},e),(0,t._)({run:function(r){return Promise.all(e.run(r,{onLast:function(){return[]}})).then(function(e){return e.filter(Boolean)})},use:function(){for(var n=arguments.length,t=Array(n),o=0;o<n;o++)t[o]=arguments[o];return e.use.apply(e,(0,i._)(t.map(P))),r}},C,!0));return r},P=function(e){return function(r,n){return[e(r)].concat((0,i._)(n(r)))}},M=Symbol.for("MODERN_ASYNC_WORKFLOW"),L=function(e){return!!(null==e?void 0:e[M])},N=function(){var e=p(),r=(0,u._)((0,o._)({},e),(0,t._)({use:function(){for(var n=arguments.length,t=Array(n),o=0;o<n;o++)t[o]=arguments[o];return e.use.apply(e,(0,i._)(t.map(D))),r},run:function(r){var n=e.run(r,{onLast:function(){return[]}});return function(e){return e&&"function"==typeof e.then}(n)?n.then(function(e){return e.filter(Boolean)}):n.filter(Boolean)}},M,!0));return r},D=function(e){return function(r,n){return Promise.resolve(e(r)).then(function(e){return Promise.resolve(n(r)).then(function(r){return[e].concat((0,i._)(r))})})}},T=function(e){},B=function(e){return null!==e&&"object"==typeof e},I="SYNC_PLUGIN_SYMBOL",F={name:"untitled",pre:[],post:[],rivals:[],required:[],usePlugins:[],registerHook:{}},W=function(e,r){var n,t=0,i=(0,o._)({},e),s=function(){return n},c=function(e){i=(0,o._)({},e,i)},l=function(e){var r,n;return B(e)&&(r=e,n=I,r.hasOwnProperty(n))&&e[I]===I},f=(0,u._)((0,o._)({},r),{useHookRunners:s}),d=function(e){var r=[],p=function(e){var n,t;if(n=r,t=e,!n.some(function(e){return e.name===t.name}))r.push((0,o._)({},e))},v=function(){for(var e=arguments.length,r=Array(e),n=0;n<e;n++)r[n]=arguments[n];return r.forEach(function(e){if(l(e))p(e);else if("function"==typeof e){var r=e();p(m(r.setup,r))}else B(e)&&p(m(e.setup,e))}),h},m=function(){var e,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return(null===(e=n.usePlugins)||void 0===e?void 0:e.length)&&n.usePlugins.forEach(function(e){v(m(e.setup,e))}),n.registerHook&&c(n.registerHook),(0,u._)((0,o._)((0,u._)((0,o._)({},F),{name:"No.".concat(t++," plugin")}),n),{SYNC_PLUGIN_SYMBOL:I,setup:r})},h={createPlugin:m,isPlugin:l,usePlugin:v,init:function(){var t,u=(t=r,(0,a.pluginDagSort)(t.slice())),s=(0,o._)({},f,e);return T(u),n=H(u.map(function(e){return e.setup(s)}),i)},clear:function(){r=[]},run:function(e){return e()},registerHook:c,useRunner:s,clone:d};return h};return d()},H=function(e,r){var n={},t=U(r);if(r){var i=function(r){e.forEach(function(e){(null==e?void 0:e[r])&&t[r].use(e[r])}),n[r]=function(e,n){return t[r].run(e,(0,o._)({},n))}};for(var u in t)i(u)}return n},z=function(e){if(g(e))return h();if(w(e))return b();if(E(e))return k();if(L(e))return N();if(A(e))return O();if(c(e))return d();throw Error("Unknown hook: ".concat(e))},U=function(e){if(!e)return e;var r={};for(var n in e)r[n]=z(e[n]);return r}},58579:function(e,r,n){"use strict";n.r(r);var t=n("58759");n.es(t,r)},58759:function(e,r,n){"use strict";n.r(r),n.d(r,{parsedJSONFromElement:function(){return t}});var t=function(e){var r=document.querySelectorAll("#".concat(e));if(0!==r.length){var n=r[r.length-1];if(n)try{return JSON.parse((null==n?void 0:n.textContent)||"")}catch(r){console.error("parse ".concat(e," error"),r)}}}},53405:function(e,r,n){"use strict";n.r(r),n.d(r,{renderNestedRoute:function(){return d}});var t=n("61078"),o=n("15169"),i=n("43932"),u=n("73706"),a=n("9880"),s=n("57814"),c=n("13721"),l=n("47328"),f=n("35005"),d=function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.children,v=e.index,m=e.id,h=e.component,g=e.isRoot,_=e.lazyImport,y=e.config,x=e.handle,b=r.parent,w=r.DeferredDataComponent,j=r.props,R=void 0===j?{}:j,k=r.reporter,E={caseSensitive:e.caseSensitive,path:e.path,id:e.id,loader:function(e,r){var n,o=e.loader;if(!o)return function(){return"function"==typeof e.lazyImport&&e.lazyImport(),null};return n=(0,t._)(function(n){var t,i,a,s;return(0,u._)(this,function(u){switch(u.label){case 0:return"function"==typeof e.lazyImport&&e.lazyImport(),t=(0,f.time)(),[4,o(n)];case 1:return i=u.sent(),a=t(),"undefined"==typeof document&&r&&(null===(s=r)||void 0===s||s.reportTiming("".concat(l.LOADER_REPORTER_NAME,"-").concat(e.id),a)),[2,i]}})}),function(e){return n.apply(this,arguments)}}(e,k),action:e.action,hasErrorBoundary:e.hasErrorBoundary,shouldRevalidate:e.shouldRevalidate,handle:(0,o._)({},x,"object"==typeof y?null==y?void 0:y.handle:{}),index:e.index,element:e.element,errorElement:e.errorElement};if(e.error){var S=(0,a.jsx)(e.error,{});E.errorElement=S}if(h){if((null==b?void 0:b.loading)&&_){var C,A=b.loading;C=p(h)?(0,a.jsx)(h,{fallback:(0,a.jsx)(A,{})}):(0,a.jsx)(s.Suspense,{fallback:(0,a.jsx)(A,{}),children:(0,a.jsx)(h,{})})}else C=p(h)&&_?(0,a.jsx)(h,{}):g?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(h,(0,o._)({},R)),"undefined"==typeof document&&w&&(0,a.jsx)(w,{nonce:null==R?void 0:R.nonce})]}):_?(0,a.jsx)(s.Suspense,{fallback:null,children:(0,a.jsx)(h,{})}):(0,a.jsx)(h,{})}else e.loading=null==b?void 0:b.loading,E.element=(0,a.jsx)(c.Outlet,{});C&&(E.element=C);var O=null==n?void 0:n.map(function(r){return d(r,{parent:e,reporter:k})});return v?(0,a.jsx)(c.Route,(0,i._)((0,o._)({},E),{index:!0}),m):(0,a.jsx)(c.Route,(0,i._)((0,o._)({},E),{index:!1,children:O}),m)};function p(e){return e&&"Loadable"===e.displayName&&e.preload&&"function"==typeof e.preload}},54700:function(e,r,n){"use strict";n.r(r);var t=n("15239");n.es(t,r)},11275:function(e,r,n){"use strict";n.r(r);var t=n("13721");n.es(t,r)},47328:function(e,r,n){"use strict";n.r(r),n.d(r,{ROUTE_MANIFEST:function(){return t},LOADER_REPORTER_NAME:function(){return o}});var t="_MODERNJS_ROUTE_MANIFEST",o="server-loader"},16584:function(e,r,n){"use strict";n.r(r),n.d(r,{pluginDagSort:function(){return t}});var t=function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"name",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"pre",t=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"post",o=function(n){var t=e.find(function(e){return"string"==typeof n?e[r]===n:e[r]===n[r]});if(!t)throw Error("plugin ".concat(n," not existed"));return t},i=[];e.forEach(function(u){var a,s;null===(a=u[n])||void 0===a||a.forEach(function(n){e.find(function(e){return e.name===n})&&i.push([o(n)[r],o(u)[r]])}),null===(s=u[t])||void 0===s||s.forEach(function(n){e.find(function(e){return e.name===n})&&i.push([o(u)[r],o(n)[r]])})});for(var u=e.filter(function(e){return!i.find(function(n){return n[1]===e[r]})}),a=[];u.length;)!function(){var n=u.shift();a.push(o(n)),i=i.filter(function(e){return e[0]!==o(n)[r]}),u=e.filter(function(e){return!a.find(function(n){return n[r]===e[r]})}).filter(function(e){return!i.find(function(n){return n[1]===e[r]})})}();if(i.length){var s={};throw i.forEach(function(e){s[e[0]]=!0,s[e[1]]=!0}),Error("plugins dependences has loop: ".concat(Object.keys(s).join(",")))}return a}},35005:function(e,r,n){"use strict";n.r(r),n.d(r,{time:function(){return u}});var t=n("28003");function o(e){var r=.001*new Date().getTime(),n=Math.floor(r),t=Math.floor(r%1*1e9);return e&&(n-=e[0],(t-=e[1])<0&&(n--,t+=1e9)),[n,t]}var i=function(e){var r=(0,t._)(o(e),2);return 1e3*r[0]+r[1]/1e6},u=function(){var e=o();return function(){return i(e)}}},90854:function(e,r,n){},24298:function(e,r,n){e.exports={name:"@modern-js/devtools-kit",description:"A Progressive React Framework for modern web development.",homepage:"https://modernjs.dev",bugs:"https://github.com/web-infra-dev/modern.js/issues",repository:{type:"git",url:"https://github.com/web-infra-dev/modern.js",directory:"packages/cli/plugin-tailwind"},license:"MIT",keywords:["react","framework","modern","modern.js"],version:"2.29.0","jsnext:source":"./src/index.ts",types:"./src/index.ts",main:"./dist/cjs/index.js",module:"./dist/esm/index.js",exports:{".":{"jsnext:source":"./src/index.ts",default:"./dist/cjs/index.js"},"./package.json":{default:"./package.json"}},scripts:{prepublishOnly:"only-allow-pnpm",new:"modern-lib new",dev:"modern-lib build --watch",build:"modern-lib build",test:"jest --passWithNoTests"},dependencies:{"@modern-js/types":"workspace:*","@modern-js/utils":"workspace:*","@geist-ui/core":"^2.3.8",ws:"8.13.0"},devDependencies:{react:"~18.2.0","@modern-js/app-tools":"workspace:*","@modern-js/builder-webpack-provider":"workspace:*","@modern-js/builder-rspack-provider":"workspace:*","@modern-js/builder-shared":"workspace:*","@modern-js/core":"workspace:*","@modern-js/module-tools":"workspace:*","@modern-js/types":"workspace:*","@scripts/build":"workspace:*","@swc/helpers":"0.5.1","@types/node":"^14","@types/ws":"^8.5.5","type-fest":"^4.1.0",typescript:"^5"},peerDependencies:{react:"~18.2.0"},sideEffects:!1,publishConfig:{registry:"https://registry.npmjs.org/",access:"public",provenance:!0,types:"./dist/types/index.d.ts"}}},8020:function(e,r,n){"use strict";n.r(r),n.d(r,{default:function(){return c}});var t=n("15169"),o=n("9880");n("57814");var i=n("79732"),u=n("73108"),a=n("43862"),s=e=>{var{children:r=[]}=e,n=[];for(var t of r)n.push(t),t!==r.at(-1)&&n.push((0,o.jsx)(l,{},"".concat(t.key,"__connector")));return(0,o.jsx)(u.Flex,{align:"center",gap:"1",children:n})};s.Button=e=>(0,o.jsx)(u.Button,(0,t._)({color:"gray",size:"1",variant:"ghost"},e));var c=s,l=(0,i.default)(a.ChevronRightIcon)({width:"var(--font-size-2)",height:"var(--font-size-2)",color:"var(--gray-6)"})},8569:function(e,r,n){"use strict";n.r(r),n.d(r,{getDefaultTabs:function(){return i}});var t=n("9880"),o=n("43862"),i=()=>[{name:"overview",title:"Overview",icon:(0,t.jsx)(o.HomeIcon,{}),view:{type:"builtin",url:"/overview"}},{name:"config",title:"Config",icon:(0,t.jsx)(o.MixerHorizontalIcon,{}),view:{type:"builtin",url:"/config"}},{name:"pages",title:"Pages",icon:(0,t.jsx)(o.FileTextIcon,{}),view:{type:"builtin",url:"/pages"}},{name:"context",title:"Context",icon:(0,t.jsx)(o.CubeIcon,{}),view:{type:"builtin",url:"/context"}}]},34492:function(e,r,n){"use strict";n.r(r),n.d(r,{RootTabs:function(){return v}});var t=n("9880"),o=n("57814"),i=n("79732"),u=n("34252"),a=n("71593"),s=n("73108"),c=n("20918"),l=n.n(c),f=n("43862"),d=n("80006"),p=n("8020"),v=()=>{var e=(0,d.useStore)(),r=(0,u.useSnapshot)(e.tabs),n=(0,a.useNavigate)(),i=(0,a.useLocation)().pathname.split("/").filter(Boolean)[0],c=l.find(r,{name:i}),v=e=>{if("builtin"===e.view.type)n(e.view.url);else throw Error("Unimplemented.")};return(0,t.jsxs)(_,{children:[(0,t.jsxs)(g,{children:[(0,t.jsx)(y,{style:{touchAction:"none"},children:(0,t.jsxs)(b,{children:[(0,t.jsx)(h,{children:"\uD83C\uDF30"}),"DevTools"]})}),(0,t.jsx)(y,{children:r.map(e=>(0,t.jsxs)(x,{value:e.name,onClick:()=>v(e),children:[(0,t.jsx)(h,{children:e.icon}),e.title]},e.name))}),(0,t.jsx)(s.Box,{grow:"1"}),(0,t.jsxs)(m,{children:[(0,t.jsx)(f.GearIcon,{}),(0,t.jsx)(s.Text,{children:"Settings"})]})]}),(0,t.jsxs)(w,{children:[(0,t.jsx)(s.Box,{grow:"0",children:(0,t.jsxs)(p.default,{children:[(0,t.jsx)(p.default.Button,{onClick:()=>n("overview"),children:(0,t.jsx)(f.HomeIcon,{})}),(0,t.jsx)(p.default.Button,{children:null==c?void 0:c.title})]})}),(0,t.jsx)(s.Box,{grow:"1",style:{overflow:"hidden"},children:(0,t.jsx)(o.Suspense,{fallback:(0,t.jsx)("div",{children:"loading..."}),children:(0,t.jsx)(a.Outlet,{})})})]})]})},m=(0,i.default)(s.Button)({"--accent-9":"var(--gray-5)","--accent-10":"var(--gray-6)"}),h=(0,i.default)(s.Box)({width:"2rem",height:"2rem",display:"flex",justifyContent:"center",alignItems:"center"}),g=(0,i.default)(s.Box)({display:"flex",flexDirection:"column",gap:"var(--block-gap)"}),_=(0,i.default)(s.Box)({"--block-gap":"0.5rem","--block-color":"#121212",display:"flex",padding:"var(--block-gap)",gap:"var(--block-gap)",alignItems:"stretch",height:"100%",width:"100%"}),y=(0,i.default)(s.Box)({flex:"none",width:"10rem",height:"min-content",backgroundColor:"var(--block-color)",borderRadius:"var(--radius-4)"}),x=i.default.button({border:"none",backgroundColor:"transparent",display:"flex",alignItems:"center",height:"3rem",width:"100%",color:"var(--gray-11)",fontSize:"var(--font-size-2)",transition:"color 200ms",fontWeight:"bold",cursor:"pointer",":focus":{color:"white"}}),b=(0,i.default)(x)({color:"var(--gray-10)",cursor:"default",":focus":{color:"var(--gray-10)"}}),w=(0,i.default)(s.Box)({flex:1,flexDirection:"column",alignItems:"stretch",display:"flex",gap:"var(--space-3)",overflow:"hidden",backgroundColor:"var(--block-color)",borderRadius:"var(--radius-4)",padding:"1rem"})},30657:function(e,r,n){"use strict";n.r(r),n.d(r,{default:function(){return s}});var t=n("9880");n("25123"),n("90854");var o=n("79732"),i=n("73108"),u=n("34492"),a=n("80006");function s(){return(0,t.jsx)(a.StoreContextProvider,{children:(0,t.jsx)(i.Theme,{appearance:"dark",className:"dark",children:(0,t.jsx)(c,{children:(0,t.jsx)(u.RootTabs,{})})})})}var c=(0,o.default)(i.Box)({width:"100vw",height:"100vh",overflow:"hidden",backgroundColor:"#090909"})},80006:function(e,r,n){"use strict";n.r(r),n.d(r,{StoreContextProvider:function(){return g},useStore:function(){return _},useStoreSnapshot:function(){return y}});var t=n("61078"),o=n("9880"),i=n("20918"),u=n.n(i),a=n("57814"),s=n("87883"),c=n.n(s),l=n("12198"),f=n("71444"),d=n("34252"),p=n("40201"),v=n("88647"),m=n("8569"),h=(0,a.createContext)(null),g=e=>{var r,{children:n}=e,i=(0,l.getQuery)(location.href).src||sessionStorage.getItem("devtools-data-source");if(!u.isString(i))throw TypeError("Can't connection to data source: ".concat(i||"<EMPTY>"));sessionStorage.setItem("devtools-data-source",i);var a={framework:{context:c(),config:{resolved:c(),transformed:c()}},builder:{context:c(),config:{resolved:c(),transformed:c()}},bundler:{config:{resolved:c(),transformed:c()}},dependencies:c(),compileTimeCost:c()},s=(0,v.useProxyFrom)(()=>({dataSource:i,location:"/",framework:{context:a.framework.context.promise,fileSystemRoutes:{},config:{resolved:a.framework.config.resolved.promise,transformed:a.framework.config.transformed.promise}},builder:{context:a.builder.context.promise,config:{resolved:a.builder.config.resolved.promise,transformed:a.builder.config.transformed.promise}},bundler:{config:{resolved:a.bundler.config.resolved.promise,transformed:a.bundler.config.transformed.promise}},tabs:(0,m.getDefaultTabs)().map(e=>(0,d.ref)(e)),name:new f.NameDefinition,aliases:[],version:"2.34.0",dependencies:a.dependencies.promise,compileTimeCost:a.compileTimeCost.promise}));return(0,p.setupServerConnection)({url:i,$store:s}).then((r=(0,t._)(function*(e){var{server:r}=e;for(var{entryName:n}of(a.framework.context.resolve(r.getAppContext()),a.framework.config.resolved.resolve(r.getFrameworkConfig()),a.framework.config.transformed.resolve(r.getTransformedFrameworkConfig()),a.builder.context.resolve(r.getBuilderContext()),a.builder.config.resolved.resolve(r.getBuilderConfig()),a.builder.config.transformed.resolve(r.getTransformedBuilderConfig()),a.bundler.config.resolved.resolve(r.getBundlerConfigs()),a.bundler.config.transformed.resolve(r.getTransformedBundlerConfigs()),a.dependencies.resolve(r.getDependencies()),a.compileTimeCost.resolve(r.getCompileTimeCost()),(yield s.framework.context).entrypoints))s.framework.fileSystemRoutes[n]=r.getFileSystemRoutes(n)}),function(e){return r.apply(this,arguments)})),(0,o.jsx)(h.Provider,{value:s,children:n})},_=()=>{var e=(0,a.useContext)(h);if(!e)throw Error("Can't resolve the context of global store.");return e},y=()=>(0,d.useSnapshot)(_())},64310:function(e,r,n){"use strict";n.r(r),n.d(r,{default:function(){return i}});var t=n("71593"),o=n("12198"),i=e=>{var{request:r}=e,n=(0,o.resolveURL)(r.url,"./builder/transformed");return(0,t.redirect)(n)}},28006:function(e,r,n){"use strict";n.r(r),n.d(r,{default:function(){return i}});var t=n("71593"),o=n("12198"),i=e=>{var{request:r}=e,n=(0,o.resolveURL)(r.url,"./builder");return(0,t.redirect)(n)}},94531:function(e,r,n){"use strict";n.r(r),n.d(r,{default:function(){return i}});var t=n("71593"),o=n("12198"),i=e=>{var{request:r}=e,n=(0,o.resolveURL)(r.url,"./overview");return(0,t.redirect)(n)}},40201:function(e,r,n){"use strict";n.r(r),n.d(r,{setupServerConnection:function(){return u}});var t,o=n("61078"),i=n("82865");var u=(t=(0,o._)(function*(e){var{url:r,$store:n}=e,t=new window.WebSocket(r),o=(0,i.createBirpc)({refresh:()=>location.reload(),updateFileSystemRoutes(e){var{entrypoint:r,routes:t}=e;n.framework.fileSystemRoutes[r.entryName]=t}},{post:e=>t.send(e),on:e=>t.onmessage=e,serialize:e=>JSON.stringify(e),deserialize:e=>JSON.parse(e.data.toString())});return yield new Promise((e,n)=>{t.onopen=()=>e(),t.onerror=()=>n(Error("Failed connect to WebSocket server: ".concat(r)))}),{server:o}}),function(e){return t.apply(this,arguments)})},88647:function(e,r,n){"use strict";n.r(r),n.d(r,{useProxyFrom:function(){return i}}),n("20918");var t=n("57814"),o=n("34252"),i=e=>(0,t.useMemo)(()=>(0,o.proxy)(e()),[])}},function(e){var r=function(r){return e(e.s=r)};e.O(0,["lib-lodash","lib-polyfill","lib-react","lib-router","vendors~node_modules_pnpm_emotion_styled_11_11_0__emotion_react_11_11_1__types_react_18_0_21_~eae13c"],function(){return r("23778"),r("34667"),r("17658"),r("52483"),r("5877")}),e.O()}]);