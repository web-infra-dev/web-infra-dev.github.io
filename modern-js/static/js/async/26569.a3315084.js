/*! For license information please see 26569.a3315084.js.LICENSE.txt */
(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["26569"],{28677:function(e,t,n){"use strict";n.d(t,{S:function(){return o}});var i=n("34626"),o=function(){function e(e,t,n){void 0===n&&(n={}),this.status="idle",this.options=n,this.sandboxSetup=t,this.iframeSelector=e}return e.prototype.updateOptions=function(e){!(0,i.J)(this.options,e)&&(this.options=e,this.updateSandbox())},e.prototype.updateSandbox=function(e,t){throw void 0===e&&(e=this.sandboxSetup),Error("Method not implemented")},e.prototype.destroy=function(){throw Error("Method not implemented")},e.prototype.dispatch=function(e){throw Error("Method not implemented")},e.prototype.listen=function(e){throw Error("Method not implemented")},e}()},8113:function(e,t,n){"use strict";n.r(t),n.d(t,{SandpackRuntime:function(){return u}});var i,o=n("26131"),r=n("34626"),s=n("28677");n("74939");var a=function(){function e(e,t,n){var i=this;this.type=e,this.handleMessage=t,this.protocol=n,this._disposeMessageListener=this.protocol.channelListen(function(e){return(0,o._)(i,void 0,void 0,function(){var t,n,i,r;return(0,o.a)(this,function(o){switch(o.label){case 0:if(!(e.type===this.getTypeId()&&e.method))return[3,4];t=e,o.label=1;case 1:return o.trys.push([1,3,,4]),[4,this.handleMessage(t)];case 2:return n=o.sent(),i={type:this.getTypeId(),msgId:t.msgId,result:n},this.protocol.dispatch(i),[3,4];case 3:return r=o.sent(),i={type:this.getTypeId(),msgId:t.msgId,error:{message:r.message}},this.protocol.dispatch(i),[3,4];case 4:return[2]}})})})}return e.prototype.getTypeId=function(){return"protocol-"+this.type},e.prototype.dispose=function(){this._disposeMessageListener()},e}(),d=function(){function e(e,t){this.globalListeners={},this.globalListenersCount=0,this.channelListeners={},this.channelListenersCount=0,this.channelId=Math.floor(1e6*Math.random()),this.frameWindow=e.contentWindow,this.origin=t,this.globalListeners=[],this.channelListeners=[],this.eventListener=this.eventListener.bind(this),"undefined"!=typeof window&&window.addEventListener("message",this.eventListener)}return e.prototype.cleanup=function(){window.removeEventListener("message",this.eventListener),this.globalListeners={},this.channelListeners={},this.globalListenersCount=0,this.channelListenersCount=0},e.prototype.register=function(){this.frameWindow&&this.frameWindow.postMessage({type:"register-frame",origin:document.location.origin,id:this.channelId},this.origin)},e.prototype.dispatch=function(e){this.frameWindow&&this.frameWindow.postMessage((0,o.h)({$id:this.channelId,codesandbox:!0},e),this.origin)},e.prototype.globalListen=function(e){var t=this;if("function"!=typeof e)return function(){};var n=this.globalListenersCount;return this.globalListeners[n]=e,this.globalListenersCount++,function(){delete t.globalListeners[n]}},e.prototype.channelListen=function(e){var t=this;if("function"!=typeof e)return function(){};var n=this.channelListenersCount;return this.channelListeners[n]=e,this.channelListenersCount++,function(){delete t.channelListeners[n]}},e.prototype.eventListener=function(e){if(e.source!==this.frameWindow)return;var t=e.data;if(!!t.codesandbox)Object.values(this.globalListeners).forEach(function(e){return e(t)}),t.$id===this.channelId&&Object.values(this.channelListeners).forEach(function(e){return e(t)})},e}(),c="https://"+(i="2.6.9",i.replace(/\./g,"-"))+"-sandpack.codesandbox.io/",u=function(e){function t(t,n,i){void 0===i&&(i={});var r=e.call(this,t,n,i)||this;if(r.getTranspilerContext=function(){return new Promise(function(e){var t=r.listen(function(n){"transpiler-context"===n.type&&(e(n.data),t())});r.dispatch({type:"get-transpiler-context"})})},r.bundlerURL=i.bundlerURL||c,i.teamId&&(r.bundlerURL=r.bundlerURL.replace("https://","https://"+i.teamId+"-")+"?cache="+Date.now()),r.bundlerState=void 0,r.errors=[],r.status="initializing","string"==typeof t){r.selector=t;var s=document.querySelector(t);(0,o.n)(s,"The element '"+t+"' was not found"),r.element=s,r.iframe=document.createElement("iframe"),r.initializeElement()}else r.element=t,r.iframe=t;return!r.iframe.getAttribute("sandbox")&&(r.iframe.setAttribute("sandbox","allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"),r.iframe.setAttribute("allow","accelerometer; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; clipboard-write;")),r.setLocationURLIntoIFrame(),r.iframeProtocol=new d(r.iframe,r.bundlerURL),r.unsubscribeGlobalListener=r.iframeProtocol.globalListen(function(e){"initialized"===e.type&&r.iframe.contentWindow&&(r.iframeProtocol.register(),r.options.fileResolver&&(r.fileResolverProtocol=new a("fs",function(e){return(0,o._)(r,void 0,void 0,function(){return(0,o.a)(this,function(t){if("isFile"===e.method)return[2,this.options.fileResolver.isFile(e.params[0])];if("readFile"===e.method)return[2,this.options.fileResolver.readFile(e.params[0])];throw Error("Method not supported")})})},r.iframeProtocol)),r.updateSandbox(r.sandboxSetup,!0))}),r.unsubscribeChannelListener=r.iframeProtocol.channelListen(function(e){switch(e.type){case"start":r.errors=[];break;case"status":r.status=e.status;break;case"action":"show-error"===e.action&&(r.errors=(0,o.i)((0,o.i)([],r.errors,!0),[(0,o.e)(e)],!1));break;case"done":r.status="done";break;case"state":r.bundlerState=e.state}}),r}return(0,o.g)(t,e),t.prototype.setLocationURLIntoIFrame=function(){var e,t=this.options.startRoute?new URL(this.options.startRoute,this.bundlerURL).toString():this.bundlerURL;null===(e=this.iframe.contentWindow)||void 0===e||e.location.replace(t),this.iframe.src=t},t.prototype.destroy=function(){this.unsubscribeChannelListener(),this.unsubscribeGlobalListener(),this.iframeProtocol.cleanup()},t.prototype.updateOptions=function(e){!(0,r.J)(this.options,e)&&(this.options=e,this.updateSandbox())},t.prototype.updateSandbox=function(e,t){void 0===e&&(e=this.sandboxSetup),this.sandboxSetup=(0,o.h)((0,o.h)({},this.sandboxSetup),e);var n,i,r,s,a=this.getFiles(),d=Object.keys(a).reduce(function(e,t){var n;return(0,o.h)((0,o.h)({},e),((n={})[t]={code:a[t].code,path:t},n))},{}),c=JSON.parse((0,o.b)(this.sandboxSetup.dependencies,this.sandboxSetup.devDependencies,this.sandboxSetup.entry));try{c=JSON.parse(a["/package.json"].code)}catch(e){console.error((0,o.c)("could not parse package.json file: "+e.message))}var u=Object.keys(a).reduce(function(e,t){var n;return(0,o.h)((0,o.h)({},e),((n={})[t]={content:a[t].code,path:t},n))},{});this.dispatch({type:"compile",codesandbox:!0,version:3,isInitializationCompile:t,modules:d,reactDevTools:this.options.reactDevTools,externalResources:this.options.externalResources||[],hasFileResolver:!!this.options.fileResolver,disableDependencyPreprocessing:this.sandboxSetup.disableDependencyPreprocessing,template:this.sandboxSetup.template||function(e,t){if(!e)return"static";var n=e.dependencies,i=void 0===n?{}:n,r=e.devDependencies,s=(0,o.i)((0,o.i)([],Object.keys(i),!0),Object.keys(void 0===r?{}:r),!0),a=Object.keys(t),d=["@adonisjs/framework","@adonisjs/core"];if(s.some(function(e){return d.indexOf(e)>-1}))return"adonis";var c=["nuxt","nuxt-edge","nuxt-ts","nuxt-ts-edge","nuxt3"];if(s.some(function(e){return c.indexOf(e)>-1}))return"nuxt";if(s.indexOf("next")>-1)return"next";var u=["apollo-server","apollo-server-express","apollo-server-hapi","apollo-server-koa","apollo-server-lambda","apollo-server-micro"];if(s.some(function(e){return u.indexOf(e)>-1}))return"apollo";if(s.indexOf("mdx-deck")>-1)return"mdx-deck";if(s.indexOf("gridsome")>-1)return"gridsome";if(s.indexOf("vuepress")>-1)return"vuepress";if(s.indexOf("ember-cli")>-1)return"ember";if(s.indexOf("sapper")>-1)return"sapper";if(s.indexOf("gatsby")>-1)return"gatsby";if(s.indexOf("quasar")>-1)return"quasar";if(s.indexOf("@docusaurus/core")>-1)return"docusaurus";if(s.indexOf("remix")>-1)return"remix";if(s.indexOf("astro")>-1)return"node";if(a.some(function(e){return e.endsWith(".re")}))return"reason";var l=["parcel-bundler","parcel"];if(s.some(function(e){return l.indexOf(e)>-1}))return"parcel";var p=["@dojo/core","@dojo/framework"];if(s.some(function(e){return p.indexOf(e)>-1}))return"@dojo/cli-create-app";if(s.indexOf("@nestjs/core")>-1||s.indexOf("@nestjs/common")>-1)return"nest";if(s.indexOf("react-styleguidist")>-1)return"styleguidist";if(s.indexOf("react-scripts")>-1)return"create-react-app";if(s.indexOf("react-scripts-ts")>-1)return"create-react-app-typescript";if(s.indexOf("@angular/core")>-1)return"angular-cli";if(s.indexOf("preact-cli")>-1)return"preact-cli";if(s.indexOf("@sveltech/routify")>-1||s.indexOf("@roxi/routify")>-1||s.indexOf("vite")>-1||s.indexOf("@frontity/core")>-1)return"node";if(s.indexOf("svelte")>-1)return"svelte";if(s.indexOf("vue")>-1)return"vue-cli";if(s.indexOf("cx")>-1)return"cxjs";var h=["express","koa","nodemon","ts-node","@tensorflow/tfjs-node","webpack-dev-server","snowpack"];if(s.some(function(e){return h.indexOf(e)>-1})||Object.keys(i).length>=50)return"node"}(c,u),showOpenInCodeSandbox:null===(n=this.options.showOpenInCodeSandbox)||void 0===n||n,showErrorScreen:null===(i=this.options.showErrorScreen)||void 0===i||i,showLoadingScreen:null!==(r=this.options.showLoadingScreen)&&void 0!==r&&r,skipEval:this.options.skipEval||!1,clearConsoleDisabled:!this.options.clearConsoleOnFirstCompile,logLevel:null!==(s=this.options.logLevel)&&void 0!==s?s:o.S.Info,customNpmRegistries:this.options.customNpmRegistries,teamId:this.options.teamId})},t.prototype.dispatch=function(e){"refresh"===e.type&&this.setLocationURLIntoIFrame(),this.iframeProtocol.dispatch(e)},t.prototype.listen=function(e){return this.iframeProtocol.channelListen(e)},t.prototype.getCodeSandboxURL=function(){var e=this.getFiles();return fetch("https://codesandbox.io/api/v1/sandboxes/define?json=1",{method:"POST",body:JSON.stringify({files:Object.keys(e).reduce(function(t,n){var i;return(0,o.h)((0,o.h)({},t),((i={})[n.replace("/","")]={content:e[n].code,isBinary:!1},i))},{})}),headers:{Accept:"application/json","Content-Type":"application/json"}}).then(function(e){return e.json()}).then(function(e){return{sandboxId:e.sandbox_id,editorUrl:"https://codesandbox.io/s/"+e.sandbox_id,embedUrl:"https://codesandbox.io/embed/"+e.sandbox_id}})},t.prototype.getFiles=function(){var e=this.sandboxSetup;return void 0===e.files["/package.json"]?(0,o.d)(e.files,e.dependencies,e.devDependencies,e.entry):this.sandboxSetup.files},t.prototype.initializeElement=function(){this.iframe.style.border="0",this.iframe.style.width=this.options.width||"100%",this.iframe.style.height=this.options.height||"100%",this.iframe.style.overflow="hidden",(0,o.n)(this.element.parentNode,"The given iframe does not have a parent."),this.element.parentNode.replaceChild(this.iframe,this.element)},t}(s.S)}}]);