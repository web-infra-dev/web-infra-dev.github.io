"use strict";(self.webpackChunk_modern_js_module_tools_docs=self.webpackChunk_modern_js_module_tools_docs||[]).push([["2707"],{317:function(t,e,r){r.d(e,{Z:function(){return n}});let n=r(1756).Z.Symbol},7176:function(t,e,r){r.d(e,{Z:()=>s});let n=r("317");var o=Object.prototype,i=o.hasOwnProperty,u=o.toString,a=n.Z?n.Z.toStringTag:void 0;let c=function(t){var e=i.call(t,a),r=t[a];try{t[a]=void 0;var n=!0}catch(t){}var o=u.call(t);return n&&(e?t[a]=r:delete t[a]),o};var f=Object.prototype.toString,l=n.Z?n.Z.toStringTag:void 0;let s=function(t){var e;if(null==t)return void 0===t?"[object Undefined]":"[object Null]";return l&&l in Object(t)?c(t):(e=t,f.call(e))}},904:function(t,e,r){r.d(e,{Z:function(){return n}});let n="object"==typeof global&&global&&global.Object===Object&&global},1756:function(t,e,r){r.d(e,{Z:function(){return i}});var n=r(904),o="object"==typeof self&&self&&self.Object===Object&&self;let i=n.Z||o||Function("return this")()},4154:function(t,e,r){r.d(e,{Z:()=>d});let n=r("1062"),o=r("1756"),i=function(){return o.Z.Date.now()};var u=/\s/;let a=function(t){for(var e=t.length;e--&&u.test(t.charAt(e)););return e};var c=/^\s+/;let f=r("8291");var l=0/0,s=/^[-+]0x[0-9a-f]+$/i,p=/^0b[01]+$/i,v=/^0o[0-7]+$/i,h=parseInt;let b=function(t){if("number"==typeof t)return t;if((0,f.Z)(t))return l;if((0,n.Z)(t)){var e,r="function"==typeof t.valueOf?t.valueOf():t;t=(0,n.Z)(r)?r+"":r}if("string"!=typeof t)return 0===t?t:+t;t=(e=t)?e.slice(0,a(e)+1).replace(c,""):e;var o=p.test(t);return o||v.test(t)?h(t.slice(2),o?2:8):s.test(t)?l:+t};var y=Math.max,_=Math.min;let d=function(t,e,r){var o,u,a,c,f,l,s=0,p=!1,v=!1,h=!0;if("function"!=typeof t)throw TypeError("Expected a function");function d(e){var r=o,n=u;return o=u=void 0,s=e,c=t.apply(n,r)}e=b(e)||0,(0,n.Z)(r)&&(p=!!r.leading,a=(v="maxWait"in r)?y(b(r.maxWait)||0,e):a,h="trailing"in r?!!r.trailing:h);function j(t){var r=t-l,n=t-s;return void 0===l||r>=e||r<0||v&&n>=a}function g(){var t,r,n,o,u=i();if(j(u))return Z(u);f=setTimeout(g,(r=(t=u)-l,n=t-s,o=e-r,v?_(o,a-n):o))}function Z(t){return(f=void 0,h&&o)?d(t):(o=u=void 0,c)}function m(){var t,r=i(),n=j(r);if(o=arguments,u=this,l=r,n){if(void 0===f){;return s=t=l,f=setTimeout(g,e),p?d(t):c}if(v)return clearTimeout(f),f=setTimeout(g,e),d(l)}return void 0===f&&(f=setTimeout(g,e)),c}return m.cancel=function(){void 0!==f&&clearTimeout(f),s=0,o=l=u=f=void 0},m.flush=function(){return void 0===f?c:Z(i())},m}},1716:function(t,e,r){r.d(e,{Z:()=>e$});let n=r("7176"),o=r("1062"),i=function(t){if(!(0,o.Z)(t))return!1;var e=(0,n.Z)(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e},u=r("1756");var a,c,f,l,s,p,v,h,b,y,_,d=u.Z["__core-js_shared__"];var j=(a=/[^.]+$/.exec(d&&d.keys&&d.keys.IE_PROTO||""))?"Symbol(src)_1."+a:"",g=Function.prototype.toString;let Z=function(t){if(null!=t){try{return g.call(t)}catch(t){}try{return t+""}catch(t){}}return""};var m=/^\[object .+?Constructor\]$/,O=Object.prototype,w=Function.prototype.toString,A=O.hasOwnProperty,z=RegExp("^"+w.call(A).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");let x=function(t){var e;return!!(0,o.Z)(t)&&(e=t,!j||!(j in e))&&(i(t)?z:m).test(Z(t))},k=function(t,e){var r,n,o=(r=t,n=e,null==r?void 0:r[n]);return x(o)?o:void 0};var S=function(){try{var t=k(Object,"defineProperty");return t({},"",{}),t}catch(t){}}();let P=function(t,e,r){"__proto__"==e&&S?S(t,e,{configurable:!0,enumerable:!0,value:r,writable:!0}):t[e]=r},T=function(t,e,r,n){for(var o=-1,i=null==t?0:t.length;++o<i;){var u=t[o];e(n,u,r(u),t)}return n};let E=function(t,e,r){for(var n=-1,o=Object(t),i=r(t),u=i.length;u--;){var a=i[++n];if(!1===e(o[a],a,o))break}return t},$=function(t,e){for(var r=-1,n=Array(t);++r<t;)n[r]=e(r);return n},F=r("7859"),M=function(t){return(0,F.Z)(t)&&"[object Arguments]"==(0,n.Z)(t)};var B=Object.prototype,C=B.hasOwnProperty,D=B.propertyIsEnumerable,I=M(function(){return arguments}())?M:function(t){return(0,F.Z)(t)&&C.call(t,"callee")&&!D.call(t,"callee")},U=Array.isArray,W="object"==typeof exports&&exports&&!exports.nodeType&&exports,L=W&&"object"==typeof module&&module&&!module.nodeType&&module,N=L&&L.exports===W?u.Z.Buffer:void 0,R=N?N.isBuffer:void 0;let V=R||function(){return!1};var q=/^(?:0|[1-9]\d*)$/;let G=function(t,e){var r=typeof t;return!!(e=null==e?9007199254740991:e)&&("number"==r||"symbol"!=r&&q.test(t))&&t>-1&&t%1==0&&t<e},H=function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991};var J={};J["[object Float32Array]"]=J["[object Float64Array]"]=J["[object Int8Array]"]=J["[object Int16Array]"]=J["[object Int32Array]"]=J["[object Uint8Array]"]=J["[object Uint8ClampedArray]"]=J["[object Uint16Array]"]=J["[object Uint32Array]"]=!0,J["[object Arguments]"]=J["[object Array]"]=J["[object ArrayBuffer]"]=J["[object Boolean]"]=J["[object DataView]"]=J["[object Date]"]=J["[object Error]"]=J["[object Function]"]=J["[object Map]"]=J["[object Number]"]=J["[object Object]"]=J["[object RegExp]"]=J["[object Set]"]=J["[object String]"]=J["[object WeakMap]"]=!1;let K=r("904");var Q="object"==typeof exports&&exports&&!exports.nodeType&&exports,X=Q&&"object"==typeof module&&module&&!module.nodeType&&module,Y=X&&X.exports===Q&&K.Z.process,tt=function(){try{var t=X&&X.require&&X.require("util").types;if(t)return t;return Y&&Y.binding&&Y.binding("util")}catch(t){}}(),te=tt&&tt.isTypedArray;var tr=te?(f=te,function(t){return f(t)}):function(t){return(0,F.Z)(t)&&H(t.length)&&!!J[(0,n.Z)(t)]},tn=Object.prototype.hasOwnProperty;let to=function(t,e){var r=U(t),n=!r&&I(t),o=!r&&!n&&V(t),i=!r&&!n&&!o&&tr(t),u=r||n||o||i,a=u?$(t.length,String):[],c=a.length;for(var f in t)(e||tn.call(t,f))&&!(u&&("length"==f||o&&("offset"==f||"parent"==f)||i&&("buffer"==f||"byteLength"==f||"byteOffset"==f)||G(f,c)))&&a.push(f);return a};var ti=Object.prototype;let tu=function(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||ti)};var ta=(l=Object.keys,s=Object,function(t){return l(s(t))}),tc=Object.prototype.hasOwnProperty;let tf=function(t){if(!tu(t))return ta(t);var e=[];for(var r in Object(t))tc.call(t,r)&&"constructor"!=r&&e.push(r);return e},tl=function(t){return null!=t&&H(t.length)&&!i(t)},ts=function(t){return tl(t)?to(t):tf(t)};var tp=(p=function(t,e){return t&&E(t,e,ts)},function(t,e){if(null==t)return t;if(!tl(t))return p(t,e);for(var r=t.length,n=-1,o=Object(t);(v?n--:++n<r)&&!1!==e(o[n],n,o););return t});let tv=function(t,e,r,n){return tp(t,function(t,o,i){e(n,t,r(t),i)}),n},th=function(t,e){return t===e||t!=t&&e!=e},tb=function(t,e){for(var r=t.length;r--;)if(th(t[r][0],e))return r;return -1};var ty=Array.prototype.splice;function t_(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}t_.prototype.clear=function(){this.__data__=[],this.size=0},t_.prototype.delete=function(t){var e=this.__data__,r=tb(e,t);return!(r<0)&&(r==e.length-1?e.pop():ty.call(e,r,1),--this.size,!0)},t_.prototype.get=function(t){var e=this.__data__,r=tb(e,t);return r<0?void 0:e[r][1]},t_.prototype.has=function(t){return tb(this.__data__,t)>-1},t_.prototype.set=function(t,e){var r=this.__data__,n=tb(r,t);return n<0?(++this.size,r.push([t,e])):r[n][1]=e,this};var td=k(u.Z,"Map"),tj=k(Object,"create"),tg=Object.prototype.hasOwnProperty,tZ=Object.prototype.hasOwnProperty;function tm(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}tm.prototype.clear=function(){this.__data__=tj?tj(null):{},this.size=0},tm.prototype.delete=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e},tm.prototype.get=function(t){var e=this.__data__;if(tj){var r=e[t];return"__lodash_hash_undefined__"===r?void 0:r}return tg.call(e,t)?e[t]:void 0},tm.prototype.has=function(t){var e=this.__data__;return tj?void 0!==e[t]:tZ.call(e,t)},tm.prototype.set=function(t,e){var r=this.__data__;return this.size+=this.has(t)?0:1,r[t]=tj&&void 0===e?"__lodash_hash_undefined__":e,this};let tO=function(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t},tw=function(t,e){var r=t.__data__;return tO(e)?r["string"==typeof e?"string":"hash"]:r.map};function tA(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}tA.prototype.clear=function(){this.size=0,this.__data__={hash:new tm,map:new(td||t_),string:new tm}},tA.prototype.delete=function(t){var e=tw(this,t).delete(t);return this.size-=e?1:0,e},tA.prototype.get=function(t){return tw(this,t).get(t)},tA.prototype.has=function(t){return tw(this,t).has(t)},tA.prototype.set=function(t,e){var r=tw(this,t),n=r.size;return r.set(t,e),this.size+=r.size==n?0:1,this};function tz(t){var e=this.__data__=new t_(t);this.size=e.size}tz.prototype.clear=function(){this.__data__=new t_,this.size=0},tz.prototype.delete=function(t){var e=this.__data__,r=e.delete(t);return this.size=e.size,r},tz.prototype.get=function(t){return this.__data__.get(t)},tz.prototype.has=function(t){return this.__data__.has(t)},tz.prototype.set=function(t,e){var r=this.__data__;if(r instanceof t_){var n=r.__data__;if(!td||n.length<199)return n.push([t,e]),this.size=++r.size,this;r=this.__data__=new tA(n)}return r.set(t,e),this.size=r.size,this};function tx(t){var e=-1,r=null==t?0:t.length;for(this.__data__=new tA;++e<r;)this.add(t[e])}tx.prototype.add=tx.prototype.push=function(t){return this.__data__.set(t,"__lodash_hash_undefined__"),this},tx.prototype.has=function(t){return this.__data__.has(t)};let tk=function(t,e){for(var r=-1,n=null==t?0:t.length;++r<n;)if(e(t[r],r,t))return!0;return!1},tS=function(t,e,r,n,o,i){var u=1&r,a=t.length,c=e.length;if(a!=c&&!(u&&c>a))return!1;var f=i.get(t),l=i.get(e);if(f&&l)return f==e&&l==t;var s=-1,p=!0,v=2&r?new tx:void 0;for(i.set(t,e),i.set(e,t);++s<a;){var h=t[s],b=e[s];if(n)var y=u?n(b,h,s,e,t,i):n(h,b,s,t,e,i);if(void 0!==y){if(y)continue;p=!1;break}if(v){if(!tk(e,function(t,e){var u,a;if(u=v,a=e,!u.has(a)&&(h===t||o(h,t,r,n,i)))return v.push(e)})){p=!1;break}}else if(!(h===b||o(h,b,r,n,i))){p=!1;break}}return i.delete(t),i.delete(e),p},tP=r("317");var tT=u.Z.Uint8Array;let tE=function(t){var e=-1,r=Array(t.size);return t.forEach(function(t,n){r[++e]=[n,t]}),r},t$=function(t){var e=-1,r=Array(t.size);return t.forEach(function(t){r[++e]=t}),r};var tF=tP.Z?tP.Z.prototype:void 0,tM=tF?tF.valueOf:void 0;let tB=function(t,e,r,n,o,i,u){switch(r){case"[object DataView]":if(t.byteLength!=e.byteLength||t.byteOffset!=e.byteOffset)break;t=t.buffer,e=e.buffer;case"[object ArrayBuffer]":if(t.byteLength!=e.byteLength||!i(new tT(t),new tT(e)))break;return!0;case"[object Boolean]":case"[object Date]":case"[object Number]":return th(+t,+e);case"[object Error]":return t.name==e.name&&t.message==e.message;case"[object RegExp]":case"[object String]":return t==e+"";case"[object Map]":var a=tE;case"[object Set]":var c=1&n;if(a||(a=t$),t.size!=e.size&&!c)break;var f=u.get(t);if(f)return f==e;n|=2,u.set(t,e);var l=tS(a(t),a(e),n,o,i,u);return u.delete(t),l;case"[object Symbol]":if(tM)return tM.call(t)==tM.call(e)}return!1},tC=function(t,e){for(var r=-1,n=e.length,o=t.length;++r<n;)t[o+r]=e[r];return t},tD=function(t,e,r){var n=e(t);return U(t)?n:tC(n,r(t))},tI=function(t,e){for(var r=-1,n=null==t?0:t.length,o=0,i=[];++r<n;){var u=t[r];e(u,r,t)&&(i[o++]=u)}return i};var tU=Object.prototype.propertyIsEnumerable,tW=Object.getOwnPropertySymbols,tL=tW?function(t){return null==t?[]:tI(tW(t=Object(t)),function(e){return tU.call(t,e)})}:function(){return[]};let tN=function(t){return tD(t,ts,tL)};var tR=Object.prototype.hasOwnProperty;let tV=function(t,e,r,n,o,i){var u=1&r,a=tN(t),c=a.length;if(c!=tN(e).length&&!u)return!1;for(var f=c;f--;){var l=a[f];if(!(u?l in e:tR.call(e,l)))return!1}var s=i.get(t),p=i.get(e);if(s&&p)return s==e&&p==t;var v=!0;i.set(t,e),i.set(e,t);for(var h=u;++f<c;){var b=t[l=a[f]],y=e[l];if(n)var _=u?n(y,b,l,e,t,i):n(b,y,l,t,e,i);if(!(void 0===_?b===y||o(b,y,r,n,i):_)){v=!1;break}h||(h="constructor"==l)}if(v&&!h){var d=t.constructor,j=e.constructor;d!=j&&"constructor"in t&&"constructor"in e&&!("function"==typeof d&&d instanceof d&&"function"==typeof j&&j instanceof j)&&(v=!1)}return i.delete(t),i.delete(e),v};var tq=k(u.Z,"DataView"),tG=k(u.Z,"Promise"),tH=k(u.Z,"Set"),tJ=k(u.Z,"WeakMap"),tK="[object Map]",tQ="[object Promise]",tX="[object Set]",tY="[object WeakMap]",t0="[object DataView]",t1=Z(tq),t7=Z(td),t2=Z(tG),t9=Z(tH),t6=Z(tJ),t5=n.Z;(tq&&t5(new tq(new ArrayBuffer(1)))!=t0||td&&t5(new td)!=tK||tG&&t5(tG.resolve())!=tQ||tH&&t5(new tH)!=tX||tJ&&t5(new tJ)!=tY)&&(t5=function(t){var e=(0,n.Z)(t),r="[object Object]"==e?t.constructor:void 0,o=r?Z(r):"";if(o)switch(o){case t1:return t0;case t7:return tK;case t2:return tQ;case t9:return tX;case t6:return tY}return e});let t4=t5;var t8="[object Arguments]",t3="[object Array]",et="[object Object]",ee=Object.prototype.hasOwnProperty;let er=function(t,e,r,n,o,i){var u=U(t),a=U(e),c=u?t3:t4(t),f=a?t3:t4(e);c=c==t8?et:c,f=f==t8?et:f;var l=c==et,s=f==et,p=c==f;if(p&&V(t)){if(!V(e))return!1;u=!0,l=!1}if(p&&!l)return i||(i=new tz),u||tr(t)?tS(t,e,r,n,o,i):tB(t,e,c,r,n,o,i);if(!(1&r)){var v=l&&ee.call(t,"__wrapped__"),h=s&&ee.call(e,"__wrapped__");if(v||h){var b=v?t.value():t,y=h?e.value():e;return i||(i=new tz),o(b,y,r,n,i)}}return!!p&&(i||(i=new tz),tV(t,e,r,n,o,i))},en=function t(e,r,n,o,i){return e===r||(null!=e&&null!=r&&((0,F.Z)(e)||(0,F.Z)(r))?er(e,r,n,o,t,i):e!=e&&r!=r)},eo=function(t,e,r,n){var o=r.length,i=o,u=!n;if(null==t)return!i;for(t=Object(t);o--;){var a=r[o];if(u&&a[2]?a[1]!==t[a[0]]:!(a[0]in t))return!1}for(;++o<i;){var c=(a=r[o])[0],f=t[c],l=a[1];if(u&&a[2]){if(void 0===f&&!(c in t))return!1}else{var s=new tz;if(n)var p=n(f,l,c,t,e,s);if(!(void 0===p?en(l,f,3,n,s):p))return!1}}return!0},ei=function(t){return t==t&&!(0,o.Z)(t)},eu=function(t){for(var e=ts(t),r=e.length;r--;){var n=e[r],o=t[n];e[r]=[n,o,ei(o)]}return e},ea=function(t,e){return function(r){return null!=r&&r[t]===e&&(void 0!==e||t in Object(r))}},ec=function(t){var e=eu(t);return 1==e.length&&e[0][2]?ea(e[0][0],e[0][1]):function(r){return r===t||eo(r,t,e)}},ef=r("8291");var el=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,es=/^\w*$/;let ep=function(t,e){if(U(t))return!1;var r=typeof t;return!!("number"==r||"symbol"==r||"boolean"==r||null==t||(0,ef.Z)(t))||es.test(t)||!el.test(t)||null!=e&&t in Object(e)};function ev(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw TypeError("Expected a function");var r=function(){var n=arguments,o=e?e.apply(this,n):n[0],i=r.cache;if(i.has(o))return i.get(o);var u=t.apply(this,n);return r.cache=i.set(o,u)||i,u};return r.cache=new(ev.Cache||tA),r}ev.Cache=tA;var eh=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,eb=/\\(\\)?/g;var ey=(b=(h=ev(function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(eh,function(t,r,n,o){e.push(n?o.replace(eb,"$1"):r||t)}),e},function(t){return 500===b.size&&b.clear(),t})).cache,h);let e_=function(t,e){for(var r=-1,n=null==t?0:t.length,o=Array(n);++r<n;)o[r]=e(t[r],r,t);return o};var ed=1/0,ej=tP.Z?tP.Z.prototype:void 0,eg=ej?ej.toString:void 0;let eZ=function t(e){if("string"==typeof e)return e;if(U(e))return e_(e,t)+"";if((0,ef.Z)(e))return eg?eg.call(e):"";var r=e+"";return"0"==r&&1/e==-ed?"-0":r},em=function(t,e){var r;if(U(t))return t;return ep(t,e)?[t]:ey(null==(r=t)?"":eZ(r))};var eO=1/0;let ew=function(t){if("string"==typeof t||(0,ef.Z)(t))return t;var e=t+"";return"0"==e&&1/t==-eO?"-0":e},eA=function(t,e){e=em(e,t);for(var r=0,n=e.length;null!=t&&r<n;)t=t[ew(e[r++])];return r&&r==n?t:void 0},ez=function(t,e,r){var n=null==t?void 0:eA(t,e);return void 0===n?r:n},ex=function(t,e){return null!=t&&e in Object(t)},ek=function(t,e,r){e=em(e,t);for(var n=-1,o=e.length,i=!1;++n<o;){var u=ew(e[n]);if(!(i=null!=t&&r(t,u)))break;t=t[u]}return i||++n!=o?i:!!(o=null==t?0:t.length)&&H(o)&&G(u,o)&&(U(t)||I(t))},eS=function(t){return t},eP=function(t){var e,r;return ep(t)?(e=ew(t),function(t){return null==t?void 0:t[e]}):(r=t,function(t){return eA(t,r)})},eT=function(t){if("function"==typeof t)return t;if(null==t)return eS;if("object"==typeof t){var e,r;return U(t)?(e=t[0],r=t[1],ep(e)&&ei(r)?ea(ew(e),r):function(t){var n,o,i=ez(t,e);return void 0===i&&i===r?(n=t,o=e,null!=n&&ek(n,o,ex)):en(r,i,3)}):ec(t)}return eP(t)};var eE=Object.prototype.hasOwnProperty;let e$=(y=function(t,e,r){eE.call(t,r)?t[r].push(e):P(t,r,[e])},function(t,e){var r=U(t)?T:tv,n={};return r(t,y,eT(e,2),n)})},4520:function(t,e,r){r.d(e,{Z:function(){return i}});var n=r(7176),o=r(7859);let i=function(t){return"number"==typeof t||(0,o.Z)(t)&&"[object Number]"==(0,n.Z)(t)}},1062:function(t,e,r){r.d(e,{Z:function(){return n}});let n=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}},7859:function(t,e,r){r.d(e,{Z:function(){return n}});let n=function(t){return null!=t&&"object"==typeof t}},8291:function(t,e,r){r.d(e,{Z:function(){return i}});var n=r(7176),o=r(7859);let i=function(t){return"symbol"==typeof t||(0,o.Z)(t)&&"[object Symbol]"==(0,n.Z)(t)}},5187:function(t,e,r){r.d(e,{Z:function(){return i}});var n=r(4154),o=r(1062);let i=function(t,e,r){var i=!0,u=!0;if("function"!=typeof t)throw TypeError("Expected a function");return(0,o.Z)(r)&&(i="leading"in r?!!r.leading:i,u="trailing"in r?!!r.trailing:u),(0,n.Z)(t,e,{leading:i,maxWait:e,trailing:u})}}}]);