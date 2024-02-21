/*! For license information please see lib-router.60e6ac9e.js.LICENSE.txt */
(self.webpackChunk_modern_js_module_tools_docs=self.webpackChunk_modern_js_module_tools_docs||[]).push([["2118"],{11207:function(e,t,n){"use strict";var r,a;function o(){return(o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.r(t),n.d(t,{Action:function(){return r},UNSAFE_getResolveToMatches:function(){return b},UNSAFE_invariant:function(){return l},createBrowserHistory:function(){return u},createPath:function(){return f},isRouteErrorResponse:function(){return P},joinPaths:function(){return R},matchPath:function(){return g},matchRoutes:function(){return d},parsePath:function(){return p},resolveTo:function(){return w},stripBasename:function(){return y}}),function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"}(r||(r={}));let i="popstate";function u(e){return void 0===e&&(e={}),function(e,t,n,a){void 0===a&&(a={});let{window:u=document.defaultView,v5Compat:s=!1}=a,p=u.history,d=r.Pop,v=null,m=g();function g(){return(p.state||{idx:null}).idx}function y(){d=r.Pop;let e=g(),t=null==e?null:e-m;m=e,v&&v({action:d,location:b.location,delta:t})}null==m&&(m=0,p.replaceState(o({},p.state,{idx:m}),""));function S(e){let t="null"!==u.location.origin?u.location.origin:u.location.href,n="string"==typeof e?e:f(e);return l(t,"No window.location.(origin|href) available to create URL for href: "+n),new URL(n,t)}let b={get action(){return d},get location(){return e(u,p)},listen(e){if(v)throw Error("A history only accepts one active listener");return u.addEventListener(i,y),v=e,()=>{u.removeEventListener(i,y),v=null}},createHref:e=>t(u,e),createURL:S,encodeLocation(e){let t=S(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:function(e,t){d=r.Push;let a=h(b.location,e,t);n&&n(a,e);let o=c(a,m=g()+1),i=b.createHref(a);try{p.pushState(o,"",i)}catch(e){if(e instanceof DOMException&&"DataCloneError"===e.name)throw e;u.location.assign(i)}s&&v&&v({action:d,location:b.location,delta:1})},replace:function(e,t){d=r.Replace;let a=h(b.location,e,t);n&&n(a,e);let o=c(a,m=g()),i=b.createHref(a);p.replaceState(o,"",i),s&&v&&v({action:d,location:b.location,delta:0})},go:e=>p.go(e)};return b}(function(e,t){let{pathname:n,search:r,hash:a}=e.location;return h("",{pathname:n,search:r,hash:a},t.state&&t.state.usr||null,t.state&&t.state.key||"default")},function(e,t){return"string"==typeof t?t:f(t)},null,e)}function l(e,t){if(!1===e||null==e)throw Error(t)}function s(e,t){if(!e){"undefined"!=typeof console&&console.warn(t);try{throw Error(t)}catch(e){}}}function c(e,t){return{usr:e.state,key:e.key,idx:t}}function h(e,t,n,r){return void 0===n&&(n=null),o({pathname:"string"==typeof e?e:e.pathname,search:"",hash:""},"string"==typeof t?p(t):t,{state:n,key:t&&t.key||r||Math.random().toString(36).substr(2,8)})}function f(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&"?"!==n&&(t+="?"===n.charAt(0)?n:"?"+n),r&&"#"!==r&&(t+="#"===r.charAt(0)?r:"#"+r),t}function p(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function d(e,t,n){void 0===n&&(n="/");let r=y(("string"==typeof t?p(t):t).pathname||"/",n);if(null==r)return null;let a=function e(t,n,r,a){void 0===n&&(n=[]),void 0===r&&(r=[]),void 0===a&&(a="");let o=(t,o,i)=>{let u={relativePath:void 0===i?t.path||"":i,caseSensitive:!0===t.caseSensitive,childrenIndex:o,route:t};u.relativePath.startsWith("/")&&(l(u.relativePath.startsWith(a),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+a+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(a.length));let s=R([a,u.relativePath]),c=r.concat(u);t.children&&t.children.length>0&&(l(!0!==t.index,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+s+'".')),e(t.children,n,c,s)),(null!=t.path||t.index)&&n.push({path:s,score:function(e,t){let n=e.split("/"),r=n.length;return n.some(m)&&(r+=-2),t&&(r+=2),n.filter(e=>!m(e)).reduce((e,t)=>e+(v.test(t)?3:""===t?1:10),r)}(s,t.index),routesMeta:c})};return t.forEach((e,t)=>{var n;if(""!==e.path&&(n=e.path)!=null&&n.includes("?"))for(let n of function e(t){let n=t.split("/");if(0===n.length)return[];let[r,...a]=n,o=r.endsWith("?"),i=r.replace(/\?$/,"");if(0===a.length)return o?[i,""]:[i];let u=e(a.join("/")),l=[];return l.push(...u.map(e=>""===e?i:[i,e].join("/"))),o&&l.push(...u),l.map(e=>t.startsWith("/")&&""===e?"/":e)}(e.path))o(e,t,n);else o(e,t)}),n}(e);(function(e){e.sort((e,t)=>e.score!==t.score?t.score-e.score:function(e,t){return e.length===t.length&&e.slice(0,-1).every((e,n)=>e===t[n])?e[e.length-1]-t[t.length-1]:0}(e.routesMeta.map(e=>e.childrenIndex),t.routesMeta.map(e=>e.childrenIndex)))})(a);let o=null;for(let e=0;null==o&&e<a.length;++e)o=function(e,t){let{routesMeta:n}=e,r={},a="/",o=[];for(let e=0;e<n.length;++e){let i=n[e],u=e===n.length-1,l="/"===a?t:t.slice(a.length)||"/",s=g({path:i.relativePath,caseSensitive:i.caseSensitive,end:u},l);if(!s)return null;Object.assign(r,s.params);let c=i.route;o.push({params:r,pathname:R([a,s.pathname]),pathnameBase:U(R([a,s.pathnameBase])),route:c}),"/"!==s.pathnameBase&&(a=R([a,s.pathnameBase]))}return o}(a[e],function(e){try{return decodeURI(e)}catch(t){return s(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}(r));return o}(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(a||(a={}));let v=/^:[\w-]+$/,m=e=>"*"===e;function g(e,t){"string"==typeof e&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=function(e,t,n){void 0===t&&(t=!1),void 0===n&&(n=!0),s("*"===e||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],a="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(e,t,n)=>(r.push({paramName:t,isOptional:null!=n}),n?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),a+="*"===e||"/*"===e?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?a+="\\/*$":""!==e&&"/"!==e&&(a+="(?:(?=\\/|$))"),[new RegExp(a,t?void 0:"i"),r]}(e.path,e.caseSensitive,e.end),a=t.match(n);if(!a)return null;let o=a[0],i=o.replace(/(.)\/+$/,"$1"),u=a.slice(1);return{params:r.reduce((e,t,n)=>{let{paramName:r,isOptional:a}=t;if("*"===r){let e=u[n]||"";i=o.slice(0,o.length-e.length).replace(/(.)\/+$/,"$1")}let l=u[n];return a&&!l?e[r]=void 0:e[r]=function(e,t){try{return decodeURIComponent(e)}catch(n){return s(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}(l||"",r),e},{}),pathname:o,pathnameBase:i,pattern:e}}function y(e,t){if("/"===t)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&"/"!==r?null:e.slice(n)||"/"}function S(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function b(e,t){let n=e.filter((e,t)=>0===t||e.route.path&&e.route.path.length>0);return t?n.map((t,n)=>n===e.length-1?t.pathname:t.pathnameBase):n.map(e=>e.pathnameBase)}function w(e,t,n,r){let a,i;void 0===r&&(r=!1),"string"==typeof e?a=p(e):(l(!(a=o({},e)).pathname||!a.pathname.includes("?"),S("?","pathname","search",a)),l(!a.pathname||!a.pathname.includes("#"),S("#","pathname","hash",a)),l(!a.search||!a.search.includes("#"),S("#","search","hash",a)));let u=""===e||""===a.pathname,s=u?"/":a.pathname;if(null==s)i=n;else{let e=t.length-1;if(!r&&s.startsWith("..")){let t=s.split("/");for(;".."===t[0];)t.shift(),e-=1;a.pathname=t.join("/")}i=e>=0?t[e]:"/"}let c=function(e,t){void 0===t&&(t="/");let{pathname:n,search:r="",hash:a=""}="string"==typeof e?p(e):e;return{pathname:n?n.startsWith("/")?n:function(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(e=>{".."===e?n.length>1&&n.pop():"."!==e&&n.push(e)}),n.length>1?n.join("/"):"/"}(n,t):t,search:x(r),hash:E(a)}}(a,i),h=s&&"/"!==s&&s.endsWith("/"),f=(u||"."===s)&&n.endsWith("/");return!c.pathname.endsWith("/")&&(h||f)&&(c.pathname+="/"),c}let R=e=>e.join("/").replace(/\/\/+/g,"/"),U=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),x=e=>e&&"?"!==e?e.startsWith("?")?e:"?"+e:"",E=e=>e&&"#"!==e?e.startsWith("#")?e:"#"+e:"";function P(e){return null!=e&&"number"==typeof e.status&&"string"==typeof e.statusText&&"boolean"==typeof e.internal&&"data"in e}Symbol("deferred")},35383:function(e,t,n){"use strict";n.r(t),n.d(t,{BrowserRouter:function(){return b},matchRoutes:function(){return u.matchRoutes},useLocation:function(){return u.useLocation},useNavigate:function(){return u.useNavigate}});var r,a,o=n("2363"),i=n("61850"),u=n("8319"),l=n("11207");function s(){return(s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function c(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],!(t.indexOf(n)>=0)&&(a[n]=e[n]);return a}let h="application/x-www-form-urlencoded";function f(e){return null!=e&&"string"==typeof e.tagName}let p=null,d=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function v(e){return null==e||d.has(e)?e:null}let m=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],g=["fetcherKey","navigate","reloadDocument","replace","state","method","action","onSubmit","relative","preventScrollReset","unstable_viewTransition"];try{window.__reactRouterVersion="6"}catch(e){}let y=o.createContext({isTransitioning:!1}),S=o.startTransition;i.flushSync;function b(e){let{basename:t,children:n,future:r,window:a}=e,i=o.useRef();null==i.current&&(i.current=(0,l.createBrowserHistory)({window:a,v5Compat:!0}));let s=i.current,[c,h]=o.useState({action:s.action,location:s.location}),{v7_startTransition:f}=r||{},p=o.useCallback(e=>{f&&S?S(()=>h(e)):h(e)},[h,f]);return o.useLayoutEffect(()=>s.listen(p),[s,p]),o.createElement(u.Router,{basename:t,children:n,location:c.location,navigationType:c.action,navigator:s,future:r})}o.useId;let w="undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement,R=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function U(e){let t=o.useContext(u.UNSAFE_DataRouterContext);return t||(0,l.UNSAFE_invariant)(!1),t}(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(r||(r={})),function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"}(a||(a={}));let x=0,E=()=>"__"+String(++x)+"__"},8319:function(e,t,n){"use strict";n.r(t),n.d(t,{Router:function(){return E},UNSAFE_DataRouterContext:function(){return s},UNSAFE_DataRouterStateContext:function(){return c},UNSAFE_NavigationContext:function(){return h},UNSAFE_RouteContext:function(){return p},UNSAFE_useRouteId:function(){return x},createPath:function(){return u.createPath},matchRoutes:function(){return u.matchRoutes},useHref:function(){return v},useLocation:function(){return g},useNavigate:function(){return S},useResolvedPath:function(){return b}});var r,a,o,i=n("2363"),u=n("11207");function l(){return(l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}let s=i.createContext(null),c=i.createContext(null),h=i.createContext(null),f=i.createContext(null),p=i.createContext({outlet:null,matches:[],isDataRoute:!1}),d=i.createContext(null);function v(e,t){let{relative:n}=void 0===t?{}:t;m()||(0,u.UNSAFE_invariant)(!1);let{basename:r,navigator:a}=i.useContext(h),{hash:o,pathname:l,search:s}=b(e,{relative:n}),c=l;return"/"!==r&&(c="/"===l?r:(0,u.joinPaths)([r,l])),a.createHref({pathname:c,search:s,hash:o})}function m(){return null!=i.useContext(f)}function g(){return m()||(0,u.UNSAFE_invariant)(!1),i.useContext(f).location}function y(e){!i.useContext(h).static&&i.useLayoutEffect(e)}function S(){let{isDataRoute:e}=i.useContext(p);return e?function(){var e;let t;let{router:n}=(e=w.UseNavigateStable,(t=i.useContext(s))||(0,u.UNSAFE_invariant)(!1),t),r=U(R.UseNavigateStable),a=i.useRef(!1);return y(()=>{a.current=!0}),i.useCallback(function(e,t){void 0===t&&(t={}),a.current&&("number"==typeof e?n.navigate(e):n.navigate(e,l({fromRouteId:r},t)))},[n,r])}():function(){m()||(0,u.UNSAFE_invariant)(!1);let e=i.useContext(s),{basename:t,future:n,navigator:r}=i.useContext(h),{matches:a}=i.useContext(p),{pathname:o}=g(),l=JSON.stringify((0,u.UNSAFE_getResolveToMatches)(a,n.v7_relativeSplatPath)),c=i.useRef(!1);return y(()=>{c.current=!0}),i.useCallback(function(n,a){if(void 0===a&&(a={}),!c.current)return;if("number"==typeof n){r.go(n);return}let i=(0,u.resolveTo)(n,JSON.parse(l),o,"path"===a.relative);null==e&&"/"!==t&&(i.pathname="/"===i.pathname?t:(0,u.joinPaths)([t,i.pathname])),(a.replace?r.replace:r.push)(i,a.state,a)},[t,r,l,o,e])}()}function b(e,t){let{relative:n}=void 0===t?{}:t,{future:r}=i.useContext(h),{matches:a}=i.useContext(p),{pathname:o}=g(),l=JSON.stringify((0,u.UNSAFE_getResolveToMatches)(a,r.v7_relativeSplatPath));return i.useMemo(()=>(0,u.resolveTo)(e,JSON.parse(l),o,"path"===n),[e,l,o,n])}var w=((r=w||{}).UseBlocker="useBlocker",r.UseRevalidator="useRevalidator",r.UseNavigateStable="useNavigate",r);var R=((a=R||{}).UseBlocker="useBlocker",a.UseLoaderData="useLoaderData",a.UseActionData="useActionData",a.UseRouteError="useRouteError",a.UseNavigation="useNavigation",a.UseRouteLoaderData="useRouteLoaderData",a.UseMatches="useMatches",a.UseRevalidator="useRevalidator",a.UseNavigateStable="useNavigate",a.UseRouteId="useRouteId",a);function U(e){var t;let n;let r=(t=0,(n=i.useContext(p))||(0,u.UNSAFE_invariant)(!1),n),a=r.matches[r.matches.length-1];return a.route.id||(0,u.UNSAFE_invariant)(!1),a.route.id}function x(){return U(R.UseRouteId)}function E(e){let{basename:t="/",children:n=null,location:r,navigationType:a=u.Action.Pop,navigator:o,static:s=!1,future:c}=e;m()&&(0,u.UNSAFE_invariant)(!1);let p=t.replace(/^\/*/,"/"),d=i.useMemo(()=>({basename:p,navigator:o,static:s,future:l({v7_relativeSplatPath:!1},c)}),[p,c,o,s]);"string"==typeof r&&(r=(0,u.parsePath)(r));let{pathname:v="/",search:g="",hash:y="",state:S=null,key:b="default"}=r,w=i.useMemo(()=>{let e=(0,u.stripBasename)(v,p);return null==e?null:{location:{pathname:e,search:g,hash:y,state:S,key:b},navigationType:a}},[p,v,g,y,S,b,a]);return null==w?null:i.createElement(h.Provider,{value:d},i.createElement(f.Provider,{children:n,value:w}))}i.startTransition;var P=((o=P||{})[o.pending=0]="pending",o[o.success=1]="success",o[o.error=2]="error",o);new Promise(()=>{})}}]);