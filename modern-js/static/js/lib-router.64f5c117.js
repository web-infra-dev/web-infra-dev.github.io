(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["lib-router"],{61940:function(e,t,n){"use strict";var r,a,o,i;function u(){return(u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.r(t),n.d(t,{Action:function(){return r},UNSAFE_getPathContributingMatches:function(){return R},UNSAFE_invariant:function(){return c},createBrowserHistory:function(){return s},createPath:function(){return d},isRouteErrorResponse:function(){return E},joinPaths:function(){return U},matchRoutes:function(){return v},parsePath:function(){return m},resolveTo:function(){return w},stripBasename:function(){return S}}),(o=r||(r={})).Pop="POP",o.Push="PUSH",o.Replace="REPLACE";let l="popstate";function s(e){return void 0===e&&(e={}),function(e,t,n,a){void 0===a&&(a={});let{window:o=document.defaultView,v5Compat:i=!1}=a,s=o.history,h=r.Pop,m=null,v=g();function g(){return(s.state||{idx:null}).idx}function b(){h=r.Pop;let e=g(),t=null==e?null:e-v;v=e,m&&m({action:h,location:y.location,delta:t})}null==v&&(v=0,s.replaceState(u({},s.state,{idx:v}),""));function S(e){let t="null"!==o.location.origin?o.location.origin:o.location.href,n="string"==typeof e?e:d(e);return c(t,"No window.location.(origin|href) available to create URL for href: "+n),new URL(n,t)}let y={get action(){return h},get location(){return e(o,s)},listen(e){if(m)throw Error("A history only accepts one active listener");return o.addEventListener(l,b),m=e,()=>{o.removeEventListener(l,b),m=null}},createHref:e=>t(o,e),createURL:S,encodeLocation(e){let t=S(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:function(e,t){h=r.Push;let a=p(y.location,e,t);n&&n(a,e);let u=f(a,v=g()+1),l=y.createHref(a);try{s.pushState(u,"",l)}catch(e){if(e instanceof DOMException&&"DataCloneError"===e.name)throw e;o.location.assign(l)}i&&m&&m({action:h,location:y.location,delta:1})},replace:function(e,t){h=r.Replace;let a=p(y.location,e,t);n&&n(a,e);let o=f(a,v=g()),u=y.createHref(a);s.replaceState(o,"",u),i&&m&&m({action:h,location:y.location,delta:0})},go:e=>s.go(e)};return y}(function(e,t){let{pathname:n,search:r,hash:a}=e.location;return p("",{pathname:n,search:r,hash:a},t.state&&t.state.usr||null,t.state&&t.state.key||"default")},function(e,t){return"string"==typeof t?t:d(t)},null,e)}function c(e,t){if(!1===e||null==e)throw Error(t)}function h(e,t){if(!e){"undefined"!=typeof console&&console.warn(t);try{throw Error(t)}catch(e){}}}function f(e,t){return{usr:e.state,key:e.key,idx:t}}function p(e,t,n,r){return void 0===n&&(n=null),u({pathname:"string"==typeof e?e:e.pathname,search:"",hash:""},"string"==typeof t?m(t):t,{state:n,key:t&&t.key||r||Math.random().toString(36).substr(2,8)})}function d(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&"?"!==n&&(t+="?"===n.charAt(0)?n:"?"+n),r&&"#"!==r&&(t+="#"===r.charAt(0)?r:"#"+r),t}function m(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function v(e,t,n){void 0===n&&(n="/");let r=S(("string"==typeof t?m(t):t).pathname||"/",n);if(null==r)return null;let a=function e(t,n,r,a){void 0===n&&(n=[]),void 0===r&&(r=[]),void 0===a&&(a="");let o=(t,o,i)=>{let u={relativePath:void 0===i?t.path||"":i,caseSensitive:!0===t.caseSensitive,childrenIndex:o,route:t};u.relativePath.startsWith("/")&&(c(u.relativePath.startsWith(a),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+a)+'" is not valid. An absolute child route path must start with the combined path of all its parent routes.'),u.relativePath=u.relativePath.slice(a.length));let l=U([a,u.relativePath]),s=r.concat(u);t.children&&t.children.length>0&&(c(!0!==t.index,'Index routes must not have child routes. Please remove all child routes from route path "'+l+'".'),e(t.children,n,s,l)),(null!=t.path||t.index)&&n.push({path:l,score:function(e,t){let n=e.split("/"),r=n.length;return n.some(b)&&(r+=-2),t&&(r+=2),n.filter(e=>!b(e)).reduce((e,t)=>e+(g.test(t)?3:""===t?1:10),r)}(l,t.index),routesMeta:s})};return t.forEach((e,t)=>{var n;if(""!==e.path&&null!=(n=e.path)&&n.includes("?"))for(let n of function e(t){let n=t.split("/");if(0===n.length)return[];let[r,...a]=n,o=r.endsWith("?"),i=r.replace(/\?$/,"");if(0===a.length)return o?[i,""]:[i];let u=e(a.join("/")),l=[];return l.push(...u.map(e=>""===e?i:[i,e].join("/"))),o&&l.push(...u),l.map(e=>t.startsWith("/")&&""===e?"/":e)}(e.path))o(e,t,n);else o(e,t)}),n}(e);(function(e){e.sort((e,t)=>e.score!==t.score?t.score-e.score:function(e,t){return e.length===t.length&&e.slice(0,-1).every((e,n)=>e===t[n])?e[e.length-1]-t[t.length-1]:0}(e.routesMeta.map(e=>e.childrenIndex),t.routesMeta.map(e=>e.childrenIndex)))})(a);let o=null;for(let e=0;null==o&&e<a.length;++e)o=function(e,t){let{routesMeta:n}=e,r={},a="/",o=[];for(let e=0;e<n.length;++e){let i=n[e],u=e===n.length-1,l="/"===a?t:t.slice(a.length)||"/",s=function(e,t){"string"==typeof e&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=function(e,t,n){void 0===t&&(t=!1),void 0===n&&(n=!0),h("*"===e||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*"))+'" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, '+('please change the route path to "'+e.replace(/\*$/,"/*"))+'".');let r=[],a="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(e,t)=>(r.push(t),"/([^\\/]+)"));return e.endsWith("*")?(r.push("*"),a+="*"===e||"/*"===e?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?a+="\\/*$":""!==e&&"/"!==e&&(a+="(?:(?=\\/|$))"),[new RegExp(a,t?void 0:"i"),r]}(e.path,e.caseSensitive,e.end),a=t.match(n);if(!a)return null;let o=a[0],i=o.replace(/(.)\/+$/,"$1"),u=a.slice(1);return{params:r.reduce((e,t,n)=>{if("*"===t){let e=u[n]||"";i=o.slice(0,o.length-e.length).replace(/(.)\/+$/,"$1")}return e[t]=function(e,t){try{return decodeURIComponent(e)}catch(n){return h(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e)+'" is a malformed URL segment. This is probably'+(" due to a bad percent encoding ("+n)+")."),e}}(u[n]||"",t),e},{}),pathname:o,pathnameBase:i,pattern:e}}({path:i.relativePath,caseSensitive:i.caseSensitive,end:u},l);if(!s)return null;Object.assign(r,s.params);let c=i.route;o.push({params:r,pathname:U([a,s.pathname]),pathnameBase:x(U([a,s.pathnameBase])),route:c}),"/"!==s.pathnameBase&&(a=U([a,s.pathnameBase]))}return o}(a[e],function(e){try{return decodeURI(e)}catch(t){return h(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t)+")."),e}}(r));return o}(i=a||(a={})).data="data",i.deferred="deferred",i.redirect="redirect",i.error="error";let g=/^:\w+$/,b=e=>"*"===e;function S(e,t){if("/"===t)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&"/"!==r?null:e.slice(n)||"/"}function y(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r))+"].  Please separate it out to the "+("`to."+n)+'` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'}function R(e){return e.filter((e,t)=>0===t||e.route.path&&e.route.path.length>0)}function w(e,t,n,r){let a,o;void 0===r&&(r=!1),"string"==typeof e?a=m(e):(c(!(a=u({},e)).pathname||!a.pathname.includes("?"),y("?","pathname","search",a)),c(!a.pathname||!a.pathname.includes("#"),y("#","pathname","hash",a)),c(!a.search||!a.search.includes("#"),y("#","search","hash",a)));let i=""===e||""===a.pathname,l=i?"/":a.pathname;if(r||null==l)o=n;else{let e=t.length-1;if(l.startsWith("..")){let t=l.split("/");for(;".."===t[0];)t.shift(),e-=1;a.pathname=t.join("/")}o=e>=0?t[e]:"/"}let s=function(e,t){void 0===t&&(t="/");let{pathname:n,search:r="",hash:a=""}="string"==typeof e?m(e):e;return{pathname:n?n.startsWith("/")?n:function(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(e=>{".."===e?n.length>1&&n.pop():"."!==e&&n.push(e)}),n.length>1?n.join("/"):"/"}(n,t):t,search:P(r),hash:C(a)}}(a,o),h=l&&"/"!==l&&l.endsWith("/"),f=(i||"."===l)&&n.endsWith("/");return!s.pathname.endsWith("/")&&(h||f)&&(s.pathname+="/"),s}let U=e=>e.join("/").replace(/\/\/+/g,"/"),x=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),P=e=>e&&"?"!==e?e.startsWith("?")?e:"?"+e:"",C=e=>e&&"#"!==e?e.startsWith("#")?e:"#"+e:"";function E(e){return null!=e&&"number"==typeof e.status&&"string"==typeof e.statusText&&"boolean"==typeof e.internal&&"data"in e}Symbol("deferred")},34569:function(e,t,n){"use strict";n.r(t),n.d(t,{matchRoutes:function(){return l.matchRoutes},useLocation:function(){return l.useLocation},useNavigate:function(){return l.useNavigate},BrowserRouter:function(){return y}});var r,a,o,i,u=n("92482"),l=n("44841"),s=n("61940");function c(){return(c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function h(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],!(t.indexOf(n)>=0)&&(a[n]=e[n]);return a}let f="application/x-www-form-urlencoded";function p(e){return null!=e&&"string"==typeof e.tagName}let d=null,m=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function v(e){return null==e||m.has(e)?e:null}let g=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],b=["reloadDocument","replace","state","method","action","onSubmit","submit","relative","preventScrollReset"],S=u.startTransition;function y(e){let{basename:t,children:n,future:r,window:a}=e,o=u.useRef();null==o.current&&(o.current=(0,s.createBrowserHistory)({window:a,v5Compat:!0}));let i=o.current,[c,h]=u.useState({action:i.action,location:i.location}),{v7_startTransition:f}=r||{},p=u.useCallback(e=>{f&&S?S(()=>h(e)):h(e)},[h,f]);return u.useLayoutEffect(()=>i.listen(p),[i,p]),u.createElement(l.Router,{basename:t,children:n,location:c.location,navigationType:c.action,navigator:i})}let R="undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement,w=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;let U=u.forwardRef((e,t)=>{let{reloadDocument:n,replace:r,state:a,method:o="get",action:i,onSubmit:f,submit:p,relative:d,preventScrollReset:m}=e,v=h(e,b),g="get"===o.toLowerCase()?"get":"post",S=function(e,t){let{relative:n}=void 0===t?{}:t,{basename:r}=u.useContext(l.UNSAFE_NavigationContext),a=u.useContext(l.UNSAFE_RouteContext);a||(0,s.UNSAFE_invariant)(!1);let[o]=a.matches.slice(-1),i=c({},(0,l.useResolvedPath)(e||".",{relative:n})),h=(0,l.useLocation)();if(null==e&&(i.search=h.search,o.route.index)){let e=new URLSearchParams(i.search);e.delete("index"),i.search=e.toString()?"?"+e.toString():""}return(!e||"."===e)&&o.route.index&&(i.search=i.search?i.search.replace(/^\?/,"?index&"):"?index"),"/"!==r&&(i.pathname="/"===i.pathname?r:(0,s.joinPaths)([r,i.pathname])),(0,l.createPath)(i)}(i,{relative:d});return u.createElement("form",c({ref:t,method:g,action:S,onSubmit:n?f:e=>{if(f&&f(e),e.defaultPrevented)return;e.preventDefault();let t=e.nativeEvent.submitter,n=(null==t?void 0:t.getAttribute("formmethod"))||o;p(t||e.currentTarget,{method:n,replace:r,state:a,relative:d,preventScrollReset:m})}},v))});(r=o||(o={})).UseScrollRestoration="useScrollRestoration",r.UseSubmit="useSubmit",r.UseSubmitFetcher="useSubmitFetcher",r.UseFetcher="useFetcher",(a=i||(i={})).UseFetchers="useFetchers",a.UseScrollRestoration="useScrollRestoration"},44841:function(e,t,n){"use strict";n.r(t),n.d(t,{createPath:function(){return u.createPath},matchRoutes:function(){return u.matchRoutes},Router:function(){return P},UNSAFE_DataRouterContext:function(){return s},UNSAFE_DataRouterStateContext:function(){return c},UNSAFE_NavigationContext:function(){return h},UNSAFE_RouteContext:function(){return p},UNSAFE_useRouteId:function(){return x},useHref:function(){return m},useLocation:function(){return g},useNavigate:function(){return S},useResolvedPath:function(){return y}});var r,a,o,i=n("92482"),u=n("61940");function l(){return(l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}let s=i.createContext(null),c=i.createContext(null),h=i.createContext(null),f=i.createContext(null),p=i.createContext({outlet:null,matches:[],isDataRoute:!1}),d=i.createContext(null);function m(e,t){let{relative:n}=void 0===t?{}:t;v()||(0,u.UNSAFE_invariant)(!1);let{basename:r,navigator:a}=i.useContext(h),{hash:o,pathname:l,search:s}=y(e,{relative:n}),c=l;return"/"!==r&&(c="/"===l?r:(0,u.joinPaths)([r,l])),a.createHref({pathname:c,search:s,hash:o})}function v(){return null!=i.useContext(f)}function g(){return v()||(0,u.UNSAFE_invariant)(!1),i.useContext(f).location}function b(e){!i.useContext(h).static&&i.useLayoutEffect(e)}function S(){let{isDataRoute:e}=i.useContext(p);return e?function(){var e;let t;let{router:n}=(e=R.UseNavigateStable,(t=i.useContext(s))||(0,u.UNSAFE_invariant)(!1),t),r=U(w.UseNavigateStable),a=i.useRef(!1);return b(()=>{a.current=!0}),i.useCallback(function(e,t){void 0===t&&(t={}),a.current&&("number"==typeof e?n.navigate(e):n.navigate(e,l({fromRouteId:r},t)))},[n,r])}():function(){v()||(0,u.UNSAFE_invariant)(!1);let e=i.useContext(s),{basename:t,navigator:n}=i.useContext(h),{matches:r}=i.useContext(p),{pathname:a}=g(),o=JSON.stringify((0,u.UNSAFE_getPathContributingMatches)(r).map(e=>e.pathnameBase)),l=i.useRef(!1);return b(()=>{l.current=!0}),i.useCallback(function(r,i){if(void 0===i&&(i={}),!l.current)return;if("number"==typeof r){n.go(r);return}let s=(0,u.resolveTo)(r,JSON.parse(o),a,"path"===i.relative);null==e&&"/"!==t&&(s.pathname="/"===s.pathname?t:(0,u.joinPaths)([t,s.pathname])),(i.replace?n.replace:n.push)(s,i.state,i)},[t,n,o,a,e])}()}function y(e,t){let{relative:n}=void 0===t?{}:t,{matches:r}=i.useContext(p),{pathname:a}=g(),o=JSON.stringify((0,u.UNSAFE_getPathContributingMatches)(r).map(e=>e.pathnameBase));return i.useMemo(()=>(0,u.resolveTo)(e,JSON.parse(o),a,"path"===n),[e,o,a,n])}var R=((r=R||{}).UseBlocker="useBlocker",r.UseRevalidator="useRevalidator",r.UseNavigateStable="useNavigate",r);var w=((a=w||{}).UseBlocker="useBlocker",a.UseLoaderData="useLoaderData",a.UseActionData="useActionData",a.UseRouteError="useRouteError",a.UseNavigation="useNavigation",a.UseRouteLoaderData="useRouteLoaderData",a.UseMatches="useMatches",a.UseRevalidator="useRevalidator",a.UseNavigateStable="useNavigate",a.UseRouteId="useRouteId",a);function U(e){var t;let n;let r=(t=0,(n=i.useContext(p))||(0,u.UNSAFE_invariant)(!1),n),a=r.matches[r.matches.length-1];return a.route.id||(0,u.UNSAFE_invariant)(!1),a.route.id}function x(){return U(w.UseRouteId)}function P(e){let{basename:t="/",children:n=null,location:r,navigationType:a=u.Action.Pop,navigator:o,static:l=!1}=e;v()&&(0,u.UNSAFE_invariant)(!1);let s=t.replace(/^\/*/,"/"),c=i.useMemo(()=>({basename:s,navigator:o,static:l}),[s,o,l]);"string"==typeof r&&(r=(0,u.parsePath)(r));let{pathname:p="/",search:d="",hash:m="",state:g=null,key:b="default"}=r,S=i.useMemo(()=>{let e=(0,u.stripBasename)(p,s);return null==e?null:{location:{pathname:e,search:d,hash:m,state:g,key:b},navigationType:a}},[s,p,d,m,g,b,a]);return null==S?null:i.createElement(h.Provider,{value:c},i.createElement(f.Provider,{children:n,value:S}))}i.startTransition;var C=((o=C||{})[o.pending=0]="pending",o[o.success=1]="success",o[o.error=2]="error",o);new Promise(()=>{})}}]);