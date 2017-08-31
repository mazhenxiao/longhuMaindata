!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):t.Vuex=e()}(this,function(){"use strict";function t(t){M&&(t._devtoolHook=M,M.emit("vuex:init",t),M.on("vuex:travel-to-state",function(e){t.replaceState(e)}),t.subscribe(function(t,e){M.emit("vuex:mutation",t,e)}))}function e(t,e){Object.keys(t).forEach(function(n){return e(t[n],n)})}function n(t){return null!==t&&"object"==typeof t}function o(t){return t&&"function"==typeof t.then}function r(t,e){if(!t)throw new Error("[vuex] "+e)}function i(t,e,n){if(s(t,n),e.update(n),n.modules)for(var o in n.modules){if(!e.getChild(o))return void console.warn("[vuex] trying to add a new module '"+o+"' on hot reloading, manual reload is needed");i(t.concat(o),e.getChild(o),n.modules[o])}}function s(t,n){["getters","actions","mutations"].forEach(function(o){n[o]&&e(n[o],function(e,n){r("function"==typeof e,a(t,o,n,e))})})}function a(t,e,n,o){var r=e+' should be function but "'+e+"."+n+'"';return t.length>0&&(r+=' in module "'+t.join(".")+'"'),r+=" is "+JSON.stringify(o)+"."}function u(t,e){t._actions=Object.create(null),t._mutations=Object.create(null),t._wrappedGetters=Object.create(null),t._modulesNamespaceMap=Object.create(null);var n=t.state;l(t,n,[],t._modules.root,!0),c(t,n,e)}function c(t,n,o){var r=t._vm;t.getters={};var i=t._wrappedGetters,s={};e(i,function(e,n){s[n]=function(){return e(t)},Object.defineProperty(t.getters,n,{get:function(){return t._vm[n]},enumerable:!0})});var a=k.config.silent;k.config.silent=!0,t._vm=new k({data:{$$state:n},computed:s}),k.config.silent=a,t.strict&&v(t),r&&(o&&t._withCommit(function(){r._data.$$state=null}),k.nextTick(function(){return r.$destroy()}))}function l(t,e,n,o,r){var i=!n.length,s=t._modules.getNamespace(n);if(o.namespaced&&(t._modulesNamespaceMap[s]=o),!i&&!r){var a=y(e,n.slice(0,-1)),u=n[n.length-1];t._withCommit(function(){k.set(a,u,o.state)})}var c=o.context=f(t,s,n);o.forEachMutation(function(e,n){var o=s+n;h(t,o,e,c)}),o.forEachAction(function(e,n){var o=s+n;d(t,o,e,c)}),o.forEachGetter(function(e,n){var o=s+n;m(t,o,e,c)}),o.forEachChild(function(o,i){l(t,e,n.concat(i),o,r)})}function f(t,e,n){var o=""===e,r={dispatch:o?t.dispatch:function(n,o,r){var i=g(n,o,r),s=i.payload,a=i.options,u=i.type;return a&&a.root||(u=e+u,t._actions[u])?t.dispatch(u,s):void console.error("[vuex] unknown local action type: "+i.type+", global type: "+u)},commit:o?t.commit:function(n,o,r){var i=g(n,o,r),s=i.payload,a=i.options,u=i.type;return a&&a.root||(u=e+u,t._mutations[u])?void t.commit(u,s,a):void console.error("[vuex] unknown local mutation type: "+i.type+", global type: "+u)}};return Object.defineProperties(r,{getters:{get:o?function(){return t.getters}:function(){return p(t,e)}},state:{get:function(){return y(t.state,n)}}}),r}function p(t,e){var n={},o=e.length;return Object.keys(t.getters).forEach(function(r){if(r.slice(0,o)===e){var i=r.slice(o);Object.defineProperty(n,i,{get:function(){return t.getters[r]},enumerable:!0})}}),n}function h(t,e,n,o){var r=t._mutations[e]||(t._mutations[e]=[]);r.push(function(e){n.call(t,o.state,e)})}function d(t,e,n,r){var i=t._actions[e]||(t._actions[e]=[]);i.push(function(e,i){var s=n.call(t,{dispatch:r.dispatch,commit:r.commit,getters:r.getters,state:r.state,rootGetters:t.getters,rootState:t.state},e,i);return o(s)||(s=Promise.resolve(s)),t._devtoolHook?s["catch"](function(e){throw t._devtoolHook.emit("vuex:error",e),e}):s})}function m(t,e,n,o){return t._wrappedGetters[e]?void console.error("[vuex] duplicate getter key: "+e):void(t._wrappedGetters[e]=function(t){return n(o.state,o.getters,t.state,t.getters)})}function v(t){t._vm.$watch(function(){return this._data.$$state},function(){r(t._committing,"Do not mutate vuex store state outside mutation handlers.")},{deep:!0,sync:!0})}function y(t,e){return e.length?e.reduce(function(t,e){return t[e]},t):t}function g(t,e,o){return n(t)&&t.type&&(o=e,e=t,t=t.type),r("string"==typeof t,"Expects string as the type, but found "+typeof t+"."),{type:t,payload:e,options:o}}function _(t){return k?void console.error("[vuex] already installed. Vue.use(Vuex) should be called only once."):(k=t,void $(k))}function w(t){return Array.isArray(t)?t.map(function(t){return{key:t,val:t}}):Object.keys(t).map(function(e){return{key:e,val:t[e]}})}function b(t){return function(e,n){return"string"!=typeof e?(n=e,e=""):"/"!==e.charAt(e.length-1)&&(e+="/"),t(e,n)}}function x(t,e,n){var o=t._modulesNamespaceMap[n];return o||console.error("[vuex] module namespace not found in "+e+"(): "+n),o}var $=function(t){function e(){var t=this.$options;t.store?this.$store="function"==typeof t.store?t.store():t.store:t.parent&&t.parent.$store&&(this.$store=t.parent.$store)}var n=Number(t.version.split(".")[0]);if(n>=2)t.mixin({beforeCreate:e});else{var o=t.prototype._init;t.prototype._init=function(t){void 0===t&&(t={}),t.init=t.init?[e].concat(t.init):e,o.call(this,t)}}},M="undefined"!=typeof window&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__,O=function(t,e){this.runtime=e,this._children=Object.create(null),this._rawModule=t;var n=t.state;this.state=("function"==typeof n?n():n)||{}},E={namespaced:{}};E.namespaced.get=function(){return!!this._rawModule.namespaced},O.prototype.addChild=function(t,e){this._children[t]=e},O.prototype.removeChild=function(t){delete this._children[t]},O.prototype.getChild=function(t){return this._children[t]},O.prototype.update=function(t){this._rawModule.namespaced=t.namespaced,t.actions&&(this._rawModule.actions=t.actions),t.mutations&&(this._rawModule.mutations=t.mutations),t.getters&&(this._rawModule.getters=t.getters)},O.prototype.forEachChild=function(t){e(this._children,t)},O.prototype.forEachGetter=function(t){this._rawModule.getters&&e(this._rawModule.getters,t)},O.prototype.forEachAction=function(t){this._rawModule.actions&&e(this._rawModule.actions,t)},O.prototype.forEachMutation=function(t){this._rawModule.mutations&&e(this._rawModule.mutations,t)},Object.defineProperties(O.prototype,E);var j=function(t){this.register([],t,!1)};j.prototype.get=function(t){return t.reduce(function(t,e){return t.getChild(e)},this.root)},j.prototype.getNamespace=function(t){var e=this.root;return t.reduce(function(t,n){return e=e.getChild(n),t+(e.namespaced?n+"/":"")},"")},j.prototype.update=function(t){i([],this.root,t)},j.prototype.register=function(t,n,o){var r=this;void 0===o&&(o=!0),s(t,n);var i=new O(n,o);if(0===t.length)this.root=i;else{var a=this.get(t.slice(0,-1));a.addChild(t[t.length-1],i)}n.modules&&e(n.modules,function(e,n){r.register(t.concat(n),e,o)})},j.prototype.unregister=function(t){var e=this.get(t.slice(0,-1)),n=t[t.length-1];e.getChild(n).runtime&&e.removeChild(n)};var k,C=function U(e){var n=this;void 0===e&&(e={}),r(k,"must call Vue.use(Vuex) before creating a store instance."),r("undefined"!=typeof Promise,"vuex requires a Promise polyfill in this browser."),r(this instanceof U,"Store must be called with the new operator.");var o=e.plugins;void 0===o&&(o=[]);var i=e.strict;void 0===i&&(i=!1);var s=e.state;void 0===s&&(s={}),"function"==typeof s&&(s=s()),this._committing=!1,this._actions=Object.create(null),this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new j(e),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._watcherVM=new k;var a=this,u=this,f=u.dispatch,p=u.commit;this.dispatch=function(t,e){return f.call(a,t,e)},this.commit=function(t,e,n){return p.call(a,t,e,n)},this.strict=i,l(this,s,[],this._modules.root),c(this,s),o.forEach(function(t){return t(n)}),k.config.devtools&&t(this)},A={state:{}};A.state.get=function(){return this._vm._data.$$state},A.state.set=function(t){r(!1,"Use store.replaceState() to explicit replace store state.")},C.prototype.commit=function(t,e,n){var o=this,r=g(t,e,n),i=r.type,s=r.payload,a=r.options,u={type:i,payload:s},c=this._mutations[i];return c?(this._withCommit(function(){c.forEach(function(t){t(s)})}),this._subscribers.forEach(function(t){return t(u,o.state)}),void(a&&a.silent&&console.warn("[vuex] mutation type: "+i+". Silent option has been removed. Use the filter functionality in the vue-devtools"))):void console.error("[vuex] unknown mutation type: "+i)},C.prototype.dispatch=function(t,e){var n=g(t,e),o=n.type,r=n.payload,i=this._actions[o];return i?i.length>1?Promise.all(i.map(function(t){return t(r)})):i[0](r):void console.error("[vuex] unknown action type: "+o)},C.prototype.subscribe=function(t){var e=this._subscribers;return e.indexOf(t)<0&&e.push(t),function(){var n=e.indexOf(t);n>-1&&e.splice(n,1)}},C.prototype.watch=function(t,e,n){var o=this;return r("function"==typeof t,"store.watch only accepts a function."),this._watcherVM.$watch(function(){return t(o.state,o.getters)},e,n)},C.prototype.replaceState=function(t){var e=this;this._withCommit(function(){e._vm._data.$$state=t})},C.prototype.registerModule=function(t,e){"string"==typeof t&&(t=[t]),r(Array.isArray(t),"module path must be a string or an Array."),r(t.length>0,"cannot register the root module by using registerModule."),this._modules.register(t,e),l(this,this.state,t,this._modules.get(t)),c(this,this.state)},C.prototype.unregisterModule=function(t){var e=this;"string"==typeof t&&(t=[t]),r(Array.isArray(t),"module path must be a string or an Array."),this._modules.unregister(t),this._withCommit(function(){var n=y(e.state,t.slice(0,-1));k["delete"](n,t[t.length-1])}),u(this)},C.prototype.hotUpdate=function(t){this._modules.update(t),u(this,!0)},C.prototype._withCommit=function(t){var e=this._committing;this._committing=!0,t(),this._committing=e},Object.defineProperties(C.prototype,A),"undefined"!=typeof window&&window.Vue&&_(window.Vue);var G=b(function(t,e){var n={};return w(e).forEach(function(e){var o=e.key,r=e.val;n[o]=function(){var e=this.$store.state,n=this.$store.getters;if(t){var o=x(this.$store,"mapState",t);if(!o)return;e=o.context.state,n=o.context.getters}return"function"==typeof r?r.call(this,e,n):e[r]},n[o].vuex=!0}),n}),S=b(function(t,e){var n={};return w(e).forEach(function(e){var o=e.key,r=e.val;r=t+r,n[o]=function(){for(var e=[],n=arguments.length;n--;)e[n]=arguments[n];return!t||x(this.$store,"mapMutations",t)?this.$store.commit.apply(this.$store,[r].concat(e)):void 0}}),n}),V=b(function(t,e){var n={};return w(e).forEach(function(e){var o=e.key,r=e.val;r=t+r,n[o]=function(){return!t||x(this.$store,"mapGetters",t)?r in this.$store.getters?this.$store.getters[r]:void console.error("[vuex] unknown getter: "+r):void 0},n[o].vuex=!0}),n}),N=b(function(t,e){var n={};return w(e).forEach(function(e){var o=e.key,r=e.val;r=t+r,n[o]=function(){for(var e=[],n=arguments.length;n--;)e[n]=arguments[n];return!t||x(this.$store,"mapActions",t)?this.$store.dispatch.apply(this.$store,[r].concat(e)):void 0}}),n}),P=function(t){return{mapState:G.bind(null,t),mapGetters:V.bind(null,t),mapMutations:S.bind(null,t),mapActions:N.bind(null,t)}},H={Store:C,install:_,version:"2.4.0",mapState:G,mapMutations:S,mapGetters:V,mapActions:N,createNamespacedHelpers:P};return H});