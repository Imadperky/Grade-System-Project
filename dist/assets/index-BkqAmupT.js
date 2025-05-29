(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const u of o)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function t(o){const u={};return o.integrity&&(u.integrity=o.integrity),o.referrerPolicy&&(u.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?u.credentials="include":o.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(o){if(o.ep)return;o.ep=!0;const u=t(o);fetch(o.href,u)}})();function jb(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var lm={exports:{}},Ml={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cv;function qb(){if(Cv)return Ml;Cv=1;var i=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function t(s,o,u){var h=null;if(u!==void 0&&(h=""+u),o.key!==void 0&&(h=""+o.key),"key"in o){u={};for(var m in o)m!=="key"&&(u[m]=o[m])}else u=o;return o=u.ref,{$$typeof:i,type:s,key:h,ref:o!==void 0?o:null,props:u}}return Ml.Fragment=e,Ml.jsx=t,Ml.jsxs=t,Ml}var Dv;function Hb(){return Dv||(Dv=1,lm.exports=qb()),lm.exports}var Te=Hb(),um={exports:{}},Re={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ov;function Fb(){if(Ov)return Re;Ov=1;var i=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),h=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),S=Symbol.iterator;function w(O){return O===null||typeof O!="object"?null:(O=S&&O[S]||O["@@iterator"],typeof O=="function"?O:null)}var D={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},P=Object.assign,G={};function H(O,ee,ae){this.props=O,this.context=ee,this.refs=G,this.updater=ae||D}H.prototype.isReactComponent={},H.prototype.setState=function(O,ee){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,ee,"setState")},H.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function K(){}K.prototype=H.prototype;function ne(O,ee,ae){this.props=O,this.context=ee,this.refs=G,this.updater=ae||D}var te=ne.prototype=new K;te.constructor=ne,P(te,H.prototype),te.isPureReactComponent=!0;var oe=Array.isArray,ue={H:null,A:null,T:null,S:null,V:null},Ae=Object.prototype.hasOwnProperty;function V(O,ee,ae,ie,pe,De){return ae=De.ref,{$$typeof:i,type:O,key:ee,ref:ae!==void 0?ae:null,props:De}}function b(O,ee){return V(O.type,ee,void 0,void 0,void 0,O.props)}function R(O){return typeof O=="object"&&O!==null&&O.$$typeof===i}function N(O){var ee={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(ae){return ee[ae]})}var x=/\/+/g;function L(O,ee){return typeof O=="object"&&O!==null&&O.key!=null?N(""+O.key):ee.toString(36)}function C(){}function Lt(O){switch(O.status){case"fulfilled":return O.value;case"rejected":throw O.reason;default:switch(typeof O.status=="string"?O.then(C,C):(O.status="pending",O.then(function(ee){O.status==="pending"&&(O.status="fulfilled",O.value=ee)},function(ee){O.status==="pending"&&(O.status="rejected",O.reason=ee)})),O.status){case"fulfilled":return O.value;case"rejected":throw O.reason}}throw O}function st(O,ee,ae,ie,pe){var De=typeof O;(De==="undefined"||De==="boolean")&&(O=null);var we=!1;if(O===null)we=!0;else switch(De){case"bigint":case"string":case"number":we=!0;break;case"object":switch(O.$$typeof){case i:case e:we=!0;break;case E:return we=O._init,st(we(O._payload),ee,ae,ie,pe)}}if(we)return pe=pe(O),we=ie===""?"."+L(O,0):ie,oe(pe)?(ae="",we!=null&&(ae=we.replace(x,"$&/")+"/"),st(pe,ee,ae,"",function(Wn){return Wn})):pe!=null&&(R(pe)&&(pe=b(pe,ae+(pe.key==null||O&&O.key===pe.key?"":(""+pe.key).replace(x,"$&/")+"/")+we)),ee.push(pe)),1;we=0;var Ot=ie===""?".":ie+":";if(oe(O))for(var Ze=0;Ze<O.length;Ze++)ie=O[Ze],De=Ot+L(ie,Ze),we+=st(ie,ee,ae,De,pe);else if(Ze=w(O),typeof Ze=="function")for(O=Ze.call(O),Ze=0;!(ie=O.next()).done;)ie=ie.value,De=Ot+L(ie,Ze++),we+=st(ie,ee,ae,De,pe);else if(De==="object"){if(typeof O.then=="function")return st(Lt(O),ee,ae,ie,pe);throw ee=String(O),Error("Objects are not valid as a React child (found: "+(ee==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":ee)+"). If you meant to render a collection of children, use an array instead.")}return we}function $(O,ee,ae){if(O==null)return O;var ie=[],pe=0;return st(O,ie,"","",function(De){return ee.call(ae,De,pe++)}),ie}function se(O){if(O._status===-1){var ee=O._result;ee=ee(),ee.then(function(ae){(O._status===0||O._status===-1)&&(O._status=1,O._result=ae)},function(ae){(O._status===0||O._status===-1)&&(O._status=2,O._result=ae)}),O._status===-1&&(O._status=0,O._result=ee)}if(O._status===1)return O._result.default;throw O._result}var de=typeof reportError=="function"?reportError:function(O){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var ee=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof O=="object"&&O!==null&&typeof O.message=="string"?String(O.message):String(O),error:O});if(!window.dispatchEvent(ee))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",O);return}console.error(O)};function Be(){}return Re.Children={map:$,forEach:function(O,ee,ae){$(O,function(){ee.apply(this,arguments)},ae)},count:function(O){var ee=0;return $(O,function(){ee++}),ee},toArray:function(O){return $(O,function(ee){return ee})||[]},only:function(O){if(!R(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},Re.Component=H,Re.Fragment=t,Re.Profiler=o,Re.PureComponent=ne,Re.StrictMode=s,Re.Suspense=p,Re.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=ue,Re.__COMPILER_RUNTIME={__proto__:null,c:function(O){return ue.H.useMemoCache(O)}},Re.cache=function(O){return function(){return O.apply(null,arguments)}},Re.cloneElement=function(O,ee,ae){if(O==null)throw Error("The argument must be a React element, but you passed "+O+".");var ie=P({},O.props),pe=O.key,De=void 0;if(ee!=null)for(we in ee.ref!==void 0&&(De=void 0),ee.key!==void 0&&(pe=""+ee.key),ee)!Ae.call(ee,we)||we==="key"||we==="__self"||we==="__source"||we==="ref"&&ee.ref===void 0||(ie[we]=ee[we]);var we=arguments.length-2;if(we===1)ie.children=ae;else if(1<we){for(var Ot=Array(we),Ze=0;Ze<we;Ze++)Ot[Ze]=arguments[Ze+2];ie.children=Ot}return V(O.type,pe,void 0,void 0,De,ie)},Re.createContext=function(O){return O={$$typeof:h,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null},O.Provider=O,O.Consumer={$$typeof:u,_context:O},O},Re.createElement=function(O,ee,ae){var ie,pe={},De=null;if(ee!=null)for(ie in ee.key!==void 0&&(De=""+ee.key),ee)Ae.call(ee,ie)&&ie!=="key"&&ie!=="__self"&&ie!=="__source"&&(pe[ie]=ee[ie]);var we=arguments.length-2;if(we===1)pe.children=ae;else if(1<we){for(var Ot=Array(we),Ze=0;Ze<we;Ze++)Ot[Ze]=arguments[Ze+2];pe.children=Ot}if(O&&O.defaultProps)for(ie in we=O.defaultProps,we)pe[ie]===void 0&&(pe[ie]=we[ie]);return V(O,De,void 0,void 0,null,pe)},Re.createRef=function(){return{current:null}},Re.forwardRef=function(O){return{$$typeof:m,render:O}},Re.isValidElement=R,Re.lazy=function(O){return{$$typeof:E,_payload:{_status:-1,_result:O},_init:se}},Re.memo=function(O,ee){return{$$typeof:g,type:O,compare:ee===void 0?null:ee}},Re.startTransition=function(O){var ee=ue.T,ae={};ue.T=ae;try{var ie=O(),pe=ue.S;pe!==null&&pe(ae,ie),typeof ie=="object"&&ie!==null&&typeof ie.then=="function"&&ie.then(Be,de)}catch(De){de(De)}finally{ue.T=ee}},Re.unstable_useCacheRefresh=function(){return ue.H.useCacheRefresh()},Re.use=function(O){return ue.H.use(O)},Re.useActionState=function(O,ee,ae){return ue.H.useActionState(O,ee,ae)},Re.useCallback=function(O,ee){return ue.H.useCallback(O,ee)},Re.useContext=function(O){return ue.H.useContext(O)},Re.useDebugValue=function(){},Re.useDeferredValue=function(O,ee){return ue.H.useDeferredValue(O,ee)},Re.useEffect=function(O,ee,ae){var ie=ue.H;if(typeof ae=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return ie.useEffect(O,ee)},Re.useId=function(){return ue.H.useId()},Re.useImperativeHandle=function(O,ee,ae){return ue.H.useImperativeHandle(O,ee,ae)},Re.useInsertionEffect=function(O,ee){return ue.H.useInsertionEffect(O,ee)},Re.useLayoutEffect=function(O,ee){return ue.H.useLayoutEffect(O,ee)},Re.useMemo=function(O,ee){return ue.H.useMemo(O,ee)},Re.useOptimistic=function(O,ee){return ue.H.useOptimistic(O,ee)},Re.useReducer=function(O,ee,ae){return ue.H.useReducer(O,ee,ae)},Re.useRef=function(O){return ue.H.useRef(O)},Re.useState=function(O){return ue.H.useState(O)},Re.useSyncExternalStore=function(O,ee,ae){return ue.H.useSyncExternalStore(O,ee,ae)},Re.useTransition=function(){return ue.H.useTransition()},Re.version="19.1.0",Re}var Nv;function op(){return Nv||(Nv=1,um.exports=Fb()),um.exports}var Q=op(),cm={exports:{}},Vl={},hm={exports:{}},fm={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mv;function Gb(){return Mv||(Mv=1,function(i){function e($,se){var de=$.length;$.push(se);e:for(;0<de;){var Be=de-1>>>1,O=$[Be];if(0<o(O,se))$[Be]=se,$[de]=O,de=Be;else break e}}function t($){return $.length===0?null:$[0]}function s($){if($.length===0)return null;var se=$[0],de=$.pop();if(de!==se){$[0]=de;e:for(var Be=0,O=$.length,ee=O>>>1;Be<ee;){var ae=2*(Be+1)-1,ie=$[ae],pe=ae+1,De=$[pe];if(0>o(ie,de))pe<O&&0>o(De,ie)?($[Be]=De,$[pe]=de,Be=pe):($[Be]=ie,$[ae]=de,Be=ae);else if(pe<O&&0>o(De,de))$[Be]=De,$[pe]=de,Be=pe;else break e}}return se}function o($,se){var de=$.sortIndex-se.sortIndex;return de!==0?de:$.id-se.id}if(i.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;i.unstable_now=function(){return u.now()}}else{var h=Date,m=h.now();i.unstable_now=function(){return h.now()-m}}var p=[],g=[],E=1,S=null,w=3,D=!1,P=!1,G=!1,H=!1,K=typeof setTimeout=="function"?setTimeout:null,ne=typeof clearTimeout=="function"?clearTimeout:null,te=typeof setImmediate<"u"?setImmediate:null;function oe($){for(var se=t(g);se!==null;){if(se.callback===null)s(g);else if(se.startTime<=$)s(g),se.sortIndex=se.expirationTime,e(p,se);else break;se=t(g)}}function ue($){if(G=!1,oe($),!P)if(t(p)!==null)P=!0,Ae||(Ae=!0,L());else{var se=t(g);se!==null&&st(ue,se.startTime-$)}}var Ae=!1,V=-1,b=5,R=-1;function N(){return H?!0:!(i.unstable_now()-R<b)}function x(){if(H=!1,Ae){var $=i.unstable_now();R=$;var se=!0;try{e:{P=!1,G&&(G=!1,ne(V),V=-1),D=!0;var de=w;try{t:{for(oe($),S=t(p);S!==null&&!(S.expirationTime>$&&N());){var Be=S.callback;if(typeof Be=="function"){S.callback=null,w=S.priorityLevel;var O=Be(S.expirationTime<=$);if($=i.unstable_now(),typeof O=="function"){S.callback=O,oe($),se=!0;break t}S===t(p)&&s(p),oe($)}else s(p);S=t(p)}if(S!==null)se=!0;else{var ee=t(g);ee!==null&&st(ue,ee.startTime-$),se=!1}}break e}finally{S=null,w=de,D=!1}se=void 0}}finally{se?L():Ae=!1}}}var L;if(typeof te=="function")L=function(){te(x)};else if(typeof MessageChannel<"u"){var C=new MessageChannel,Lt=C.port2;C.port1.onmessage=x,L=function(){Lt.postMessage(null)}}else L=function(){K(x,0)};function st($,se){V=K(function(){$(i.unstable_now())},se)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function($){$.callback=null},i.unstable_forceFrameRate=function($){0>$||125<$?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<$?Math.floor(1e3/$):5},i.unstable_getCurrentPriorityLevel=function(){return w},i.unstable_next=function($){switch(w){case 1:case 2:case 3:var se=3;break;default:se=w}var de=w;w=se;try{return $()}finally{w=de}},i.unstable_requestPaint=function(){H=!0},i.unstable_runWithPriority=function($,se){switch($){case 1:case 2:case 3:case 4:case 5:break;default:$=3}var de=w;w=$;try{return se()}finally{w=de}},i.unstable_scheduleCallback=function($,se,de){var Be=i.unstable_now();switch(typeof de=="object"&&de!==null?(de=de.delay,de=typeof de=="number"&&0<de?Be+de:Be):de=Be,$){case 1:var O=-1;break;case 2:O=250;break;case 5:O=1073741823;break;case 4:O=1e4;break;default:O=5e3}return O=de+O,$={id:E++,callback:se,priorityLevel:$,startTime:de,expirationTime:O,sortIndex:-1},de>Be?($.sortIndex=de,e(g,$),t(p)===null&&$===t(g)&&(G?(ne(V),V=-1):G=!0,st(ue,de-Be))):($.sortIndex=O,e(p,$),P||D||(P=!0,Ae||(Ae=!0,L()))),$},i.unstable_shouldYield=N,i.unstable_wrapCallback=function($){var se=w;return function(){var de=w;w=se;try{return $.apply(this,arguments)}finally{w=de}}}}(fm)),fm}var Vv;function Kb(){return Vv||(Vv=1,hm.exports=Gb()),hm.exports}var dm={exports:{}},Yt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pv;function $b(){if(Pv)return Yt;Pv=1;var i=op();function e(p){var g="https://react.dev/errors/"+p;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var E=2;E<arguments.length;E++)g+="&args[]="+encodeURIComponent(arguments[E])}return"Minified React error #"+p+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function t(){}var s={d:{f:t,r:function(){throw Error(e(522))},D:t,C:t,L:t,m:t,X:t,S:t,M:t},p:0,findDOMNode:null},o=Symbol.for("react.portal");function u(p,g,E){var S=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:S==null?null:""+S,children:p,containerInfo:g,implementation:E}}var h=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function m(p,g){if(p==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return Yt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Yt.createPortal=function(p,g){var E=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(e(299));return u(p,g,null,E)},Yt.flushSync=function(p){var g=h.T,E=s.p;try{if(h.T=null,s.p=2,p)return p()}finally{h.T=g,s.p=E,s.d.f()}},Yt.preconnect=function(p,g){typeof p=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,s.d.C(p,g))},Yt.prefetchDNS=function(p){typeof p=="string"&&s.d.D(p)},Yt.preinit=function(p,g){if(typeof p=="string"&&g&&typeof g.as=="string"){var E=g.as,S=m(E,g.crossOrigin),w=typeof g.integrity=="string"?g.integrity:void 0,D=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;E==="style"?s.d.S(p,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:S,integrity:w,fetchPriority:D}):E==="script"&&s.d.X(p,{crossOrigin:S,integrity:w,fetchPriority:D,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},Yt.preinitModule=function(p,g){if(typeof p=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var E=m(g.as,g.crossOrigin);s.d.M(p,{crossOrigin:E,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&s.d.M(p)},Yt.preload=function(p,g){if(typeof p=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var E=g.as,S=m(E,g.crossOrigin);s.d.L(p,E,{crossOrigin:S,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},Yt.preloadModule=function(p,g){if(typeof p=="string")if(g){var E=m(g.as,g.crossOrigin);s.d.m(p,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:E,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else s.d.m(p)},Yt.requestFormReset=function(p){s.d.r(p)},Yt.unstable_batchedUpdates=function(p,g){return p(g)},Yt.useFormState=function(p,g,E){return h.H.useFormState(p,g,E)},Yt.useFormStatus=function(){return h.H.useHostTransitionStatus()},Yt.version="19.1.0",Yt}var xv;function Yb(){if(xv)return dm.exports;xv=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(e){console.error(e)}}return i(),dm.exports=$b(),dm.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kv;function Qb(){if(kv)return Vl;kv=1;var i=Kb(),e=op(),t=Yb();function s(n){var r="https://react.dev/errors/"+n;if(1<arguments.length){r+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)r+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+n+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function u(n){var r=n,a=n;if(n.alternate)for(;r.return;)r=r.return;else{n=r;do r=n,(r.flags&4098)!==0&&(a=r.return),n=r.return;while(n)}return r.tag===3?a:null}function h(n){if(n.tag===13){var r=n.memoizedState;if(r===null&&(n=n.alternate,n!==null&&(r=n.memoizedState)),r!==null)return r.dehydrated}return null}function m(n){if(u(n)!==n)throw Error(s(188))}function p(n){var r=n.alternate;if(!r){if(r=u(n),r===null)throw Error(s(188));return r!==n?null:n}for(var a=n,l=r;;){var f=a.return;if(f===null)break;var d=f.alternate;if(d===null){if(l=f.return,l!==null){a=l;continue}break}if(f.child===d.child){for(d=f.child;d;){if(d===a)return m(f),n;if(d===l)return m(f),r;d=d.sibling}throw Error(s(188))}if(a.return!==l.return)a=f,l=d;else{for(var v=!1,T=f.child;T;){if(T===a){v=!0,a=f,l=d;break}if(T===l){v=!0,l=f,a=d;break}T=T.sibling}if(!v){for(T=d.child;T;){if(T===a){v=!0,a=d,l=f;break}if(T===l){v=!0,l=d,a=f;break}T=T.sibling}if(!v)throw Error(s(189))}}if(a.alternate!==l)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?n:r}function g(n){var r=n.tag;if(r===5||r===26||r===27||r===6)return n;for(n=n.child;n!==null;){if(r=g(n),r!==null)return r;n=n.sibling}return null}var E=Object.assign,S=Symbol.for("react.element"),w=Symbol.for("react.transitional.element"),D=Symbol.for("react.portal"),P=Symbol.for("react.fragment"),G=Symbol.for("react.strict_mode"),H=Symbol.for("react.profiler"),K=Symbol.for("react.provider"),ne=Symbol.for("react.consumer"),te=Symbol.for("react.context"),oe=Symbol.for("react.forward_ref"),ue=Symbol.for("react.suspense"),Ae=Symbol.for("react.suspense_list"),V=Symbol.for("react.memo"),b=Symbol.for("react.lazy"),R=Symbol.for("react.activity"),N=Symbol.for("react.memo_cache_sentinel"),x=Symbol.iterator;function L(n){return n===null||typeof n!="object"?null:(n=x&&n[x]||n["@@iterator"],typeof n=="function"?n:null)}var C=Symbol.for("react.client.reference");function Lt(n){if(n==null)return null;if(typeof n=="function")return n.$$typeof===C?null:n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case P:return"Fragment";case H:return"Profiler";case G:return"StrictMode";case ue:return"Suspense";case Ae:return"SuspenseList";case R:return"Activity"}if(typeof n=="object")switch(n.$$typeof){case D:return"Portal";case te:return(n.displayName||"Context")+".Provider";case ne:return(n._context.displayName||"Context")+".Consumer";case oe:var r=n.render;return n=n.displayName,n||(n=r.displayName||r.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case V:return r=n.displayName||null,r!==null?r:Lt(n.type)||"Memo";case b:r=n._payload,n=n._init;try{return Lt(n(r))}catch{}}return null}var st=Array.isArray,$=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,se=t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,de={pending:!1,data:null,method:null,action:null},Be=[],O=-1;function ee(n){return{current:n}}function ae(n){0>O||(n.current=Be[O],Be[O]=null,O--)}function ie(n,r){O++,Be[O]=n.current,n.current=r}var pe=ee(null),De=ee(null),we=ee(null),Ot=ee(null);function Ze(n,r){switch(ie(we,r),ie(De,n),ie(pe,null),r.nodeType){case 9:case 11:n=(n=r.documentElement)&&(n=n.namespaceURI)?nv(n):0;break;default:if(n=r.tagName,r=r.namespaceURI)r=nv(r),n=iv(r,n);else switch(n){case"svg":n=1;break;case"math":n=2;break;default:n=0}}ae(pe),ie(pe,n)}function Wn(){ae(pe),ae(De),ae(we)}function or(n){n.memoizedState!==null&&ie(Ot,n);var r=pe.current,a=iv(r,n.type);r!==a&&(ie(De,n),ie(pe,a))}function Si(n){De.current===n&&(ae(pe),ae(De)),Ot.current===n&&(ae(Ot),Il._currentValue=de)}var rs=Object.prototype.hasOwnProperty,ss=i.unstable_scheduleCallback,as=i.unstable_cancelCallback,So=i.unstable_shouldYield,Au=i.unstable_requestPaint,Sn=i.unstable_now,lf=i.unstable_getCurrentPriorityLevel,bo=i.unstable_ImmediatePriority,oa=i.unstable_UserBlockingPriority,os=i.unstable_NormalPriority,uf=i.unstable_LowPriority,la=i.unstable_IdlePriority,Ro=i.log,wu=i.unstable_setDisableYieldValue,at=null,Fe=null;function fn(n){if(typeof Ro=="function"&&wu(n),Fe&&typeof Fe.setStrictMode=="function")try{Fe.setStrictMode(at,n)}catch{}}var Kt=Math.clz32?Math.clz32:ls,Su=Math.log,cf=Math.LN2;function ls(n){return n>>>=0,n===0?32:31-(Su(n)/cf|0)|0}var us=256,cs=4194304;function Bn(n){var r=n&42;if(r!==0)return r;switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return n&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return n}}function ua(n,r,a){var l=n.pendingLanes;if(l===0)return 0;var f=0,d=n.suspendedLanes,v=n.pingedLanes;n=n.warmLanes;var T=l&134217727;return T!==0?(l=T&~d,l!==0?f=Bn(l):(v&=T,v!==0?f=Bn(v):a||(a=T&~n,a!==0&&(f=Bn(a))))):(T=l&~d,T!==0?f=Bn(T):v!==0?f=Bn(v):a||(a=l&~n,a!==0&&(f=Bn(a)))),f===0?0:r!==0&&r!==f&&(r&d)===0&&(d=f&-f,a=r&-r,d>=a||d===32&&(a&4194048)!==0)?r:f}function hs(n,r){return(n.pendingLanes&~(n.suspendedLanes&~n.pingedLanes)&r)===0}function Io(n,r){switch(n){case 1:case 2:case 4:case 8:case 64:return r+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Co(){var n=us;return us<<=1,(us&4194048)===0&&(us=256),n}function Do(){var n=cs;return cs<<=1,(cs&62914560)===0&&(cs=4194304),n}function bi(n){for(var r=[],a=0;31>a;a++)r.push(n);return r}function Ri(n,r){n.pendingLanes|=r,r!==268435456&&(n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0)}function Oo(n,r,a,l,f,d){var v=n.pendingLanes;n.pendingLanes=a,n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0,n.expiredLanes&=a,n.entangledLanes&=a,n.errorRecoveryDisabledLanes&=a,n.shellSuspendCounter=0;var T=n.entanglements,I=n.expirationTimes,B=n.hiddenUpdates;for(a=v&~a;0<a;){var Y=31-Kt(a),W=1<<Y;T[Y]=0,I[Y]=-1;var j=B[Y];if(j!==null)for(B[Y]=null,Y=0;Y<j.length;Y++){var q=j[Y];q!==null&&(q.lane&=-536870913)}a&=~W}l!==0&&Zn(n,l,0),d!==0&&f===0&&n.tag!==0&&(n.suspendedLanes|=d&~(v&~r))}function Zn(n,r,a){n.pendingLanes|=r,n.suspendedLanes&=~r;var l=31-Kt(r);n.entangledLanes|=r,n.entanglements[l]=n.entanglements[l]|1073741824|a&4194090}function No(n,r){var a=n.entangledLanes|=r;for(n=n.entanglements;a;){var l=31-Kt(a),f=1<<l;f&r|n[l]&r&&(n[l]|=r),a&=~f}}function lr(n){switch(n){case 2:n=1;break;case 8:n=4;break;case 32:n=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:n=128;break;case 268435456:n=134217728;break;default:n=0}return n}function ca(n){return n&=-n,2<n?8<n?(n&134217727)!==0?32:268435456:8:2}function ur(){var n=se.p;return n!==0?n:(n=window.event,n===void 0?32:Av(n.type))}function bu(n,r){var a=se.p;try{return se.p=n,r()}finally{se.p=a}}var tt=Math.random().toString(36).slice(2),At="__reactFiber$"+tt,pt="__reactProps$"+tt,bn="__reactContainer$"+tt,Mo="__reactEvents$"+tt,hf="__reactListeners$"+tt,cr="__reactHandles$"+tt,Ru="__reactResources$"+tt,fs="__reactMarker$"+tt;function hr(n){delete n[At],delete n[pt],delete n[Mo],delete n[hf],delete n[cr]}function Ii(n){var r=n[At];if(r)return r;for(var a=n.parentNode;a;){if(r=a[bn]||a[At]){if(a=r.alternate,r.child!==null||a!==null&&a.child!==null)for(n=ov(n);n!==null;){if(a=n[At])return a;n=ov(n)}return r}n=a,a=n.parentNode}return null}function Jn(n){if(n=n[At]||n[bn]){var r=n.tag;if(r===5||r===6||r===13||r===26||r===27||r===3)return n}return null}function ei(n){var r=n.tag;if(r===5||r===26||r===27||r===6)return n.stateNode;throw Error(s(33))}function Jt(n){var r=n[Ru];return r||(r=n[Ru]={hoistableStyles:new Map,hoistableScripts:new Map}),r}function ht(n){n[fs]=!0}var Vo=new Set,ha={};function jn(n,r){Ci(n,r),Ci(n+"Capture",r)}function Ci(n,r){for(ha[n]=r,n=0;n<r.length;n++)Vo.add(r[n])}var Iu=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Cu={},ds={};function Du(n){return rs.call(ds,n)?!0:rs.call(Cu,n)?!1:Iu.test(n)?ds[n]=!0:(Cu[n]=!0,!1)}function fr(n,r,a){if(Du(r))if(a===null)n.removeAttribute(r);else{switch(typeof a){case"undefined":case"function":case"symbol":n.removeAttribute(r);return;case"boolean":var l=r.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){n.removeAttribute(r);return}}n.setAttribute(r,""+a)}}function ti(n,r,a){if(a===null)n.removeAttribute(r);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(r);return}n.setAttribute(r,""+a)}}function Ut(n,r,a,l){if(l===null)n.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(a);return}n.setAttributeNS(r,a,""+l)}}var ms,Ou;function Di(n){if(ms===void 0)try{throw Error()}catch(a){var r=a.stack.trim().match(/\n( *(at )?)/);ms=r&&r[1]||"",Ou=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ms+n+Ou}var fa=!1;function da(n,r){if(!n||fa)return"";fa=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(r){var W=function(){throw Error()};if(Object.defineProperty(W.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(W,[])}catch(q){var j=q}Reflect.construct(n,[],W)}else{try{W.call()}catch(q){j=q}n.call(W.prototype)}}else{try{throw Error()}catch(q){j=q}(W=n())&&typeof W.catch=="function"&&W.catch(function(){})}}catch(q){if(q&&j&&typeof q.stack=="string")return[q.stack,j.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=l.DetermineComponentFrameRoot(),v=d[0],T=d[1];if(v&&T){var I=v.split(`
`),B=T.split(`
`);for(f=l=0;l<I.length&&!I[l].includes("DetermineComponentFrameRoot");)l++;for(;f<B.length&&!B[f].includes("DetermineComponentFrameRoot");)f++;if(l===I.length||f===B.length)for(l=I.length-1,f=B.length-1;1<=l&&0<=f&&I[l]!==B[f];)f--;for(;1<=l&&0<=f;l--,f--)if(I[l]!==B[f]){if(l!==1||f!==1)do if(l--,f--,0>f||I[l]!==B[f]){var Y=`
`+I[l].replace(" at new "," at ");return n.displayName&&Y.includes("<anonymous>")&&(Y=Y.replace("<anonymous>",n.displayName)),Y}while(1<=l&&0<=f);break}}}finally{fa=!1,Error.prepareStackTrace=a}return(a=n?n.displayName||n.name:"")?Di(a):""}function Po(n){switch(n.tag){case 26:case 27:case 5:return Di(n.type);case 16:return Di("Lazy");case 13:return Di("Suspense");case 19:return Di("SuspenseList");case 0:case 15:return da(n.type,!1);case 11:return da(n.type.render,!1);case 1:return da(n.type,!0);case 31:return Di("Activity");default:return""}}function ma(n){try{var r="";do r+=Po(n),n=n.return;while(n);return r}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function en(n){switch(typeof n){case"bigint":case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function xo(n){var r=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function ff(n){var r=xo(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,r),l=""+n[r];if(!n.hasOwnProperty(r)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var f=a.get,d=a.set;return Object.defineProperty(n,r,{configurable:!0,get:function(){return f.call(this)},set:function(v){l=""+v,d.call(this,v)}}),Object.defineProperty(n,r,{enumerable:a.enumerable}),{getValue:function(){return l},setValue:function(v){l=""+v},stopTracking:function(){n._valueTracker=null,delete n[r]}}}}function pa(n){n._valueTracker||(n._valueTracker=ff(n))}function ko(n){if(!n)return!1;var r=n._valueTracker;if(!r)return!0;var a=r.getValue(),l="";return n&&(l=xo(n)?n.checked?"true":"false":n.value),n=l,n!==a?(r.setValue(n),!0):!1}function ps(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}var df=/[\n"\\]/g;function gt(n){return n.replace(df,function(r){return"\\"+r.charCodeAt(0).toString(16)+" "})}function dn(n,r,a,l,f,d,v,T){n.name="",v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?n.type=v:n.removeAttribute("type"),r!=null?v==="number"?(r===0&&n.value===""||n.value!=r)&&(n.value=""+en(r)):n.value!==""+en(r)&&(n.value=""+en(r)):v!=="submit"&&v!=="reset"||n.removeAttribute("value"),r!=null?dr(n,v,en(r)):a!=null?dr(n,v,en(a)):l!=null&&n.removeAttribute("value"),f==null&&d!=null&&(n.defaultChecked=!!d),f!=null&&(n.checked=f&&typeof f!="function"&&typeof f!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?n.name=""+en(T):n.removeAttribute("name")}function gs(n,r,a,l,f,d,v,T){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(n.type=d),r!=null||a!=null){if(!(d!=="submit"&&d!=="reset"||r!=null))return;a=a!=null?""+en(a):"",r=r!=null?""+en(r):a,T||r===n.value||(n.value=r),n.defaultValue=r}l=l??f,l=typeof l!="function"&&typeof l!="symbol"&&!!l,n.checked=T?n.checked:!!l,n.defaultChecked=!!l,v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"&&(n.name=v)}function dr(n,r,a){r==="number"&&ps(n.ownerDocument)===n||n.defaultValue===""+a||(n.defaultValue=""+a)}function Oi(n,r,a,l){if(n=n.options,r){r={};for(var f=0;f<a.length;f++)r["$"+a[f]]=!0;for(a=0;a<n.length;a++)f=r.hasOwnProperty("$"+n[a].value),n[a].selected!==f&&(n[a].selected=f),f&&l&&(n[a].defaultSelected=!0)}else{for(a=""+en(a),r=null,f=0;f<n.length;f++){if(n[f].value===a){n[f].selected=!0,l&&(n[f].defaultSelected=!0);return}r!==null||n[f].disabled||(r=n[f])}r!==null&&(r.selected=!0)}}function $e(n,r,a){if(r!=null&&(r=""+en(r),r!==n.value&&(n.value=r),a==null)){n.defaultValue!==r&&(n.defaultValue=r);return}n.defaultValue=a!=null?""+en(a):""}function ys(n,r,a,l){if(r==null){if(l!=null){if(a!=null)throw Error(s(92));if(st(l)){if(1<l.length)throw Error(s(93));l=l[0]}a=l}a==null&&(a=""),r=a}a=en(r),n.defaultValue=a,l=n.textContent,l===a&&l!==""&&l!==null&&(n.value=l)}function Rn(n,r){if(r){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=r;return}}n.textContent=r}var _s=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Nu(n,r,a){var l=r.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?n.setProperty(r,""):r==="float"?n.cssFloat="":n[r]="":l?n.setProperty(r,a):typeof a!="number"||a===0||_s.has(r)?r==="float"?n.cssFloat=a:n[r]=(""+a).trim():n[r]=a+"px"}function Lo(n,r,a){if(r!=null&&typeof r!="object")throw Error(s(62));if(n=n.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||r!=null&&r.hasOwnProperty(l)||(l.indexOf("--")===0?n.setProperty(l,""):l==="float"?n.cssFloat="":n[l]="");for(var f in r)l=r[f],r.hasOwnProperty(f)&&a[f]!==l&&Nu(n,f,l)}else for(var d in r)r.hasOwnProperty(d)&&Nu(n,d,r[d])}function Uo(n){if(n.indexOf("-")===-1)return!1;switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var mf=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),pf=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ga(n){return pf.test(""+n)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":n}var Ni=null;function In(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Mi=null,Vi=null;function zo(n){var r=Jn(n);if(r&&(n=r.stateNode)){var a=n[pt]||null;e:switch(n=r.stateNode,r.type){case"input":if(dn(n,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),r=a.name,a.type==="radio"&&r!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+gt(""+r)+'"][type="radio"]'),r=0;r<a.length;r++){var l=a[r];if(l!==n&&l.form===n.form){var f=l[pt]||null;if(!f)throw Error(s(90));dn(l,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(r=0;r<a.length;r++)l=a[r],l.form===n.form&&ko(l)}break e;case"textarea":$e(n,a.value,a.defaultValue);break e;case"select":r=a.value,r!=null&&Oi(n,!!a.multiple,r,!1)}}}var ni=!1;function Mu(n,r,a){if(ni)return n(r,a);ni=!0;try{var l=n(r);return l}finally{if(ni=!1,(Mi!==null||Vi!==null)&&(bc(),Mi&&(r=Mi,n=Vi,Vi=Mi=null,zo(r),n)))for(r=0;r<n.length;r++)zo(n[r])}}function vs(n,r){var a=n.stateNode;if(a===null)return null;var l=a[pt]||null;if(l===null)return null;a=l[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(n=n.type,l=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!l;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(s(231,r,typeof a));return a}var qn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Cn=!1;if(qn)try{var Es={};Object.defineProperty(Es,"passive",{get:function(){Cn=!0}}),window.addEventListener("test",Es,Es),window.removeEventListener("test",Es,Es)}catch{Cn=!1}var ii=null,mr=null,Pi=null;function Bo(){if(Pi)return Pi;var n,r=mr,a=r.length,l,f="value"in ii?ii.value:ii.textContent,d=f.length;for(n=0;n<a&&r[n]===f[n];n++);var v=a-n;for(l=1;l<=v&&r[a-l]===f[d-l];l++);return Pi=f.slice(n,1<l?1-l:void 0)}function ri(n){var r=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&r===13&&(n=13)):n=r,n===10&&(n=13),32<=n||n===13?n:0}function si(){return!0}function jo(){return!1}function Nt(n){function r(a,l,f,d,v){this._reactName=a,this._targetInst=f,this.type=l,this.nativeEvent=d,this.target=v,this.currentTarget=null;for(var T in n)n.hasOwnProperty(T)&&(a=n[T],this[T]=a?a(d):d[T]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?si:jo,this.isPropagationStopped=jo,this}return E(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=si)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=si)},persist:function(){},isPersistent:si}),r}var qe={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ya=Nt(qe),Ts=E({},qe,{view:0,detail:0}),Vu=Nt(Ts),_a,va,ai,As=E({},Ts,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:bs,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==ai&&(ai&&n.type==="mousemove"?(_a=n.screenX-ai.screenX,va=n.screenY-ai.screenY):va=_a=0,ai=n),_a)},movementY:function(n){return"movementY"in n?n.movementY:va}}),Dn=Nt(As),Pu=E({},As,{dataTransfer:0}),gf=Nt(Pu),ws=E({},Ts,{relatedTarget:0}),Ea=Nt(ws),qo=E({},qe,{animationName:0,elapsedTime:0,pseudoElement:0}),Ta=Nt(qo),xu=E({},qe,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Aa=Nt(xu),yf=E({},qe,{data:0}),Ho=Nt(yf),Ss={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ku={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Lu={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Fo(n){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(n):(n=Lu[n])?!!r[n]:!1}function bs(){return Fo}var Uu=E({},Ts,{key:function(n){if(n.key){var r=Ss[n.key]||n.key;if(r!=="Unidentified")return r}return n.type==="keypress"?(n=ri(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?ku[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:bs,charCode:function(n){return n.type==="keypress"?ri(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?ri(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),wa=Nt(Uu),zu=E({},As,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Go=Nt(zu),xi=E({},Ts,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:bs}),Bu=Nt(xi),ju=E({},qe,{propertyName:0,elapsedTime:0,pseudoElement:0}),qu=Nt(ju),Hu=E({},As,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Sa=Nt(Hu),tn=E({},qe,{newState:0,oldState:0}),Fu=Nt(tn),Gu=[9,13,27,32],oi=qn&&"CompositionEvent"in window,c=null;qn&&"documentMode"in document&&(c=document.documentMode);var y=qn&&"TextEvent"in window&&!c,_=qn&&(!oi||c&&8<c&&11>=c),A=" ",U=!1;function F(n,r){switch(n){case"keyup":return Gu.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function re(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var xe=!1;function wt(n,r){switch(n){case"compositionend":return re(r);case"keypress":return r.which!==32?null:(U=!0,A);case"textInput":return n=r.data,n===A&&U?null:n;default:return null}}function ke(n,r){if(xe)return n==="compositionend"||!oi&&F(n,r)?(n=Bo(),Pi=mr=ii=null,xe=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return _&&r.locale!=="ko"?null:r.data;default:return null}}var Mt={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function St(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r==="input"?!!Mt[n.type]:r==="textarea"}function ki(n,r,a,l){Mi?Vi?Vi.push(l):Vi=[l]:Mi=l,r=Nc(r,"onChange"),0<r.length&&(a=new ya("onChange","change",null,a,l),n.push({event:a,listeners:r}))}var zt=null,li=null;function Ko(n){W_(n,0)}function Ku(n){var r=ei(n);if(ko(r))return n}function _g(n,r){if(n==="change")return r}var vg=!1;if(qn){var _f;if(qn){var vf="oninput"in document;if(!vf){var Eg=document.createElement("div");Eg.setAttribute("oninput","return;"),vf=typeof Eg.oninput=="function"}_f=vf}else _f=!1;vg=_f&&(!document.documentMode||9<document.documentMode)}function Tg(){zt&&(zt.detachEvent("onpropertychange",Ag),li=zt=null)}function Ag(n){if(n.propertyName==="value"&&Ku(li)){var r=[];ki(r,li,n,In(n)),Mu(Ko,r)}}function yS(n,r,a){n==="focusin"?(Tg(),zt=r,li=a,zt.attachEvent("onpropertychange",Ag)):n==="focusout"&&Tg()}function _S(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Ku(li)}function vS(n,r){if(n==="click")return Ku(r)}function ES(n,r){if(n==="input"||n==="change")return Ku(r)}function TS(n,r){return n===r&&(n!==0||1/n===1/r)||n!==n&&r!==r}var mn=typeof Object.is=="function"?Object.is:TS;function $o(n,r){if(mn(n,r))return!0;if(typeof n!="object"||n===null||typeof r!="object"||r===null)return!1;var a=Object.keys(n),l=Object.keys(r);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var f=a[l];if(!rs.call(r,f)||!mn(n[f],r[f]))return!1}return!0}function wg(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Sg(n,r){var a=wg(n);n=0;for(var l;a;){if(a.nodeType===3){if(l=n+a.textContent.length,n<=r&&l>=r)return{node:a,offset:r-n};n=l}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=wg(a)}}function bg(n,r){return n&&r?n===r?!0:n&&n.nodeType===3?!1:r&&r.nodeType===3?bg(n,r.parentNode):"contains"in n?n.contains(r):n.compareDocumentPosition?!!(n.compareDocumentPosition(r)&16):!1:!1}function Rg(n){n=n!=null&&n.ownerDocument!=null&&n.ownerDocument.defaultView!=null?n.ownerDocument.defaultView:window;for(var r=ps(n.document);r instanceof n.HTMLIFrameElement;){try{var a=typeof r.contentWindow.location.href=="string"}catch{a=!1}if(a)n=r.contentWindow;else break;r=ps(n.document)}return r}function Ef(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r&&(r==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||r==="textarea"||n.contentEditable==="true")}var AS=qn&&"documentMode"in document&&11>=document.documentMode,ba=null,Tf=null,Yo=null,Af=!1;function Ig(n,r,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Af||ba==null||ba!==ps(l)||(l=ba,"selectionStart"in l&&Ef(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Yo&&$o(Yo,l)||(Yo=l,l=Nc(Tf,"onSelect"),0<l.length&&(r=new ya("onSelect","select",null,r,a),n.push({event:r,listeners:l}),r.target=ba)))}function Rs(n,r){var a={};return a[n.toLowerCase()]=r.toLowerCase(),a["Webkit"+n]="webkit"+r,a["Moz"+n]="moz"+r,a}var Ra={animationend:Rs("Animation","AnimationEnd"),animationiteration:Rs("Animation","AnimationIteration"),animationstart:Rs("Animation","AnimationStart"),transitionrun:Rs("Transition","TransitionRun"),transitionstart:Rs("Transition","TransitionStart"),transitioncancel:Rs("Transition","TransitionCancel"),transitionend:Rs("Transition","TransitionEnd")},wf={},Cg={};qn&&(Cg=document.createElement("div").style,"AnimationEvent"in window||(delete Ra.animationend.animation,delete Ra.animationiteration.animation,delete Ra.animationstart.animation),"TransitionEvent"in window||delete Ra.transitionend.transition);function Is(n){if(wf[n])return wf[n];if(!Ra[n])return n;var r=Ra[n],a;for(a in r)if(r.hasOwnProperty(a)&&a in Cg)return wf[n]=r[a];return n}var Dg=Is("animationend"),Og=Is("animationiteration"),Ng=Is("animationstart"),wS=Is("transitionrun"),SS=Is("transitionstart"),bS=Is("transitioncancel"),Mg=Is("transitionend"),Vg=new Map,Sf="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Sf.push("scrollEnd");function Hn(n,r){Vg.set(n,r),jn(r,[n])}var Pg=new WeakMap;function On(n,r){if(typeof n=="object"&&n!==null){var a=Pg.get(n);return a!==void 0?a:(r={value:n,source:r,stack:ma(r)},Pg.set(n,r),r)}return{value:n,source:r,stack:ma(r)}}var Nn=[],Ia=0,bf=0;function $u(){for(var n=Ia,r=bf=Ia=0;r<n;){var a=Nn[r];Nn[r++]=null;var l=Nn[r];Nn[r++]=null;var f=Nn[r];Nn[r++]=null;var d=Nn[r];if(Nn[r++]=null,l!==null&&f!==null){var v=l.pending;v===null?f.next=f:(f.next=v.next,v.next=f),l.pending=f}d!==0&&xg(a,f,d)}}function Yu(n,r,a,l){Nn[Ia++]=n,Nn[Ia++]=r,Nn[Ia++]=a,Nn[Ia++]=l,bf|=l,n.lanes|=l,n=n.alternate,n!==null&&(n.lanes|=l)}function Rf(n,r,a,l){return Yu(n,r,a,l),Qu(n)}function Ca(n,r){return Yu(n,null,null,r),Qu(n)}function xg(n,r,a){n.lanes|=a;var l=n.alternate;l!==null&&(l.lanes|=a);for(var f=!1,d=n.return;d!==null;)d.childLanes|=a,l=d.alternate,l!==null&&(l.childLanes|=a),d.tag===22&&(n=d.stateNode,n===null||n._visibility&1||(f=!0)),n=d,d=d.return;return n.tag===3?(d=n.stateNode,f&&r!==null&&(f=31-Kt(a),n=d.hiddenUpdates,l=n[f],l===null?n[f]=[r]:l.push(r),r.lane=a|536870912),d):null}function Qu(n){if(50<vl)throw vl=0,Md=null,Error(s(185));for(var r=n.return;r!==null;)n=r,r=n.return;return n.tag===3?n.stateNode:null}var Da={};function RS(n,r,a,l){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function pn(n,r,a,l){return new RS(n,r,a,l)}function If(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Li(n,r){var a=n.alternate;return a===null?(a=pn(n.tag,r,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=r,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&65011712,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,r=n.dependencies,a.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a.refCleanup=n.refCleanup,a}function kg(n,r){n.flags&=65011714;var a=n.alternate;return a===null?(n.childLanes=0,n.lanes=r,n.child=null,n.subtreeFlags=0,n.memoizedProps=null,n.memoizedState=null,n.updateQueue=null,n.dependencies=null,n.stateNode=null):(n.childLanes=a.childLanes,n.lanes=a.lanes,n.child=a.child,n.subtreeFlags=0,n.deletions=null,n.memoizedProps=a.memoizedProps,n.memoizedState=a.memoizedState,n.updateQueue=a.updateQueue,n.type=a.type,r=a.dependencies,n.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),n}function Xu(n,r,a,l,f,d){var v=0;if(l=n,typeof n=="function")If(n)&&(v=1);else if(typeof n=="string")v=Cb(n,a,pe.current)?26:n==="html"||n==="head"||n==="body"?27:5;else e:switch(n){case R:return n=pn(31,a,r,f),n.elementType=R,n.lanes=d,n;case P:return Cs(a.children,f,d,r);case G:v=8,f|=24;break;case H:return n=pn(12,a,r,f|2),n.elementType=H,n.lanes=d,n;case ue:return n=pn(13,a,r,f),n.elementType=ue,n.lanes=d,n;case Ae:return n=pn(19,a,r,f),n.elementType=Ae,n.lanes=d,n;default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case K:case te:v=10;break e;case ne:v=9;break e;case oe:v=11;break e;case V:v=14;break e;case b:v=16,l=null;break e}v=29,a=Error(s(130,n===null?"null":typeof n,"")),l=null}return r=pn(v,a,r,f),r.elementType=n,r.type=l,r.lanes=d,r}function Cs(n,r,a,l){return n=pn(7,n,l,r),n.lanes=a,n}function Cf(n,r,a){return n=pn(6,n,null,r),n.lanes=a,n}function Df(n,r,a){return r=pn(4,n.children!==null?n.children:[],n.key,r),r.lanes=a,r.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},r}var Oa=[],Na=0,Wu=null,Zu=0,Mn=[],Vn=0,Ds=null,Ui=1,zi="";function Os(n,r){Oa[Na++]=Zu,Oa[Na++]=Wu,Wu=n,Zu=r}function Lg(n,r,a){Mn[Vn++]=Ui,Mn[Vn++]=zi,Mn[Vn++]=Ds,Ds=n;var l=Ui;n=zi;var f=32-Kt(l)-1;l&=~(1<<f),a+=1;var d=32-Kt(r)+f;if(30<d){var v=f-f%5;d=(l&(1<<v)-1).toString(32),l>>=v,f-=v,Ui=1<<32-Kt(r)+f|a<<f|l,zi=d+n}else Ui=1<<d|a<<f|l,zi=n}function Of(n){n.return!==null&&(Os(n,1),Lg(n,1,0))}function Nf(n){for(;n===Wu;)Wu=Oa[--Na],Oa[Na]=null,Zu=Oa[--Na],Oa[Na]=null;for(;n===Ds;)Ds=Mn[--Vn],Mn[Vn]=null,zi=Mn[--Vn],Mn[Vn]=null,Ui=Mn[--Vn],Mn[Vn]=null}var nn=null,ot=null,je=!1,Ns=null,ui=!1,Mf=Error(s(519));function Ms(n){var r=Error(s(418,""));throw Wo(On(r,n)),Mf}function Ug(n){var r=n.stateNode,a=n.type,l=n.memoizedProps;switch(r[At]=n,r[pt]=l,a){case"dialog":Me("cancel",r),Me("close",r);break;case"iframe":case"object":case"embed":Me("load",r);break;case"video":case"audio":for(a=0;a<Tl.length;a++)Me(Tl[a],r);break;case"source":Me("error",r);break;case"img":case"image":case"link":Me("error",r),Me("load",r);break;case"details":Me("toggle",r);break;case"input":Me("invalid",r),gs(r,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0),pa(r);break;case"select":Me("invalid",r);break;case"textarea":Me("invalid",r),ys(r,l.value,l.defaultValue,l.children),pa(r)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||r.textContent===""+a||l.suppressHydrationWarning===!0||tv(r.textContent,a)?(l.popover!=null&&(Me("beforetoggle",r),Me("toggle",r)),l.onScroll!=null&&Me("scroll",r),l.onScrollEnd!=null&&Me("scrollend",r),l.onClick!=null&&(r.onclick=Mc),r=!0):r=!1,r||Ms(n)}function zg(n){for(nn=n.return;nn;)switch(nn.tag){case 5:case 13:ui=!1;return;case 27:case 3:ui=!0;return;default:nn=nn.return}}function Qo(n){if(n!==nn)return!1;if(!je)return zg(n),je=!0,!1;var r=n.tag,a;if((a=r!==3&&r!==27)&&((a=r===5)&&(a=n.type,a=!(a!=="form"&&a!=="button")||Yd(n.type,n.memoizedProps)),a=!a),a&&ot&&Ms(n),zg(n),r===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(s(317));e:{for(n=n.nextSibling,r=0;n;){if(n.nodeType===8)if(a=n.data,a==="/$"){if(r===0){ot=Gn(n.nextSibling);break e}r--}else a!=="$"&&a!=="$!"&&a!=="$?"||r++;n=n.nextSibling}ot=null}}else r===27?(r=ot,Or(n.type)?(n=Zd,Zd=null,ot=n):ot=r):ot=nn?Gn(n.stateNode.nextSibling):null;return!0}function Xo(){ot=nn=null,je=!1}function Bg(){var n=Ns;return n!==null&&(on===null?on=n:on.push.apply(on,n),Ns=null),n}function Wo(n){Ns===null?Ns=[n]:Ns.push(n)}var Vf=ee(null),Vs=null,Bi=null;function pr(n,r,a){ie(Vf,r._currentValue),r._currentValue=a}function ji(n){n._currentValue=Vf.current,ae(Vf)}function Pf(n,r,a){for(;n!==null;){var l=n.alternate;if((n.childLanes&r)!==r?(n.childLanes|=r,l!==null&&(l.childLanes|=r)):l!==null&&(l.childLanes&r)!==r&&(l.childLanes|=r),n===a)break;n=n.return}}function xf(n,r,a,l){var f=n.child;for(f!==null&&(f.return=n);f!==null;){var d=f.dependencies;if(d!==null){var v=f.child;d=d.firstContext;e:for(;d!==null;){var T=d;d=f;for(var I=0;I<r.length;I++)if(T.context===r[I]){d.lanes|=a,T=d.alternate,T!==null&&(T.lanes|=a),Pf(d.return,a,n),l||(v=null);break e}d=T.next}}else if(f.tag===18){if(v=f.return,v===null)throw Error(s(341));v.lanes|=a,d=v.alternate,d!==null&&(d.lanes|=a),Pf(v,a,n),v=null}else v=f.child;if(v!==null)v.return=f;else for(v=f;v!==null;){if(v===n){v=null;break}if(f=v.sibling,f!==null){f.return=v.return,v=f;break}v=v.return}f=v}}function Zo(n,r,a,l){n=null;for(var f=r,d=!1;f!==null;){if(!d){if((f.flags&524288)!==0)d=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var v=f.alternate;if(v===null)throw Error(s(387));if(v=v.memoizedProps,v!==null){var T=f.type;mn(f.pendingProps.value,v.value)||(n!==null?n.push(T):n=[T])}}else if(f===Ot.current){if(v=f.alternate,v===null)throw Error(s(387));v.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(n!==null?n.push(Il):n=[Il])}f=f.return}n!==null&&xf(r,n,a,l),r.flags|=262144}function Ju(n){for(n=n.firstContext;n!==null;){if(!mn(n.context._currentValue,n.memoizedValue))return!0;n=n.next}return!1}function Ps(n){Vs=n,Bi=null,n=n.dependencies,n!==null&&(n.firstContext=null)}function $t(n){return jg(Vs,n)}function ec(n,r){return Vs===null&&Ps(n),jg(n,r)}function jg(n,r){var a=r._currentValue;if(r={context:r,memoizedValue:a,next:null},Bi===null){if(n===null)throw Error(s(308));Bi=r,n.dependencies={lanes:0,firstContext:r},n.flags|=524288}else Bi=Bi.next=r;return a}var IS=typeof AbortController<"u"?AbortController:function(){var n=[],r=this.signal={aborted:!1,addEventListener:function(a,l){n.push(l)}};this.abort=function(){r.aborted=!0,n.forEach(function(a){return a()})}},CS=i.unstable_scheduleCallback,DS=i.unstable_NormalPriority,bt={$$typeof:te,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function kf(){return{controller:new IS,data:new Map,refCount:0}}function Jo(n){n.refCount--,n.refCount===0&&CS(DS,function(){n.controller.abort()})}var el=null,Lf=0,Ma=0,Va=null;function OS(n,r){if(el===null){var a=el=[];Lf=0,Ma=zd(),Va={status:"pending",value:void 0,then:function(l){a.push(l)}}}return Lf++,r.then(qg,qg),r}function qg(){if(--Lf===0&&el!==null){Va!==null&&(Va.status="fulfilled");var n=el;el=null,Ma=0,Va=null;for(var r=0;r<n.length;r++)(0,n[r])()}}function NS(n,r){var a=[],l={status:"pending",value:null,reason:null,then:function(f){a.push(f)}};return n.then(function(){l.status="fulfilled",l.value=r;for(var f=0;f<a.length;f++)(0,a[f])(r)},function(f){for(l.status="rejected",l.reason=f,f=0;f<a.length;f++)(0,a[f])(void 0)}),l}var Hg=$.S;$.S=function(n,r){typeof r=="object"&&r!==null&&typeof r.then=="function"&&OS(n,r),Hg!==null&&Hg(n,r)};var xs=ee(null);function Uf(){var n=xs.current;return n!==null?n:Je.pooledCache}function tc(n,r){r===null?ie(xs,xs.current):ie(xs,r.pool)}function Fg(){var n=Uf();return n===null?null:{parent:bt._currentValue,pool:n}}var tl=Error(s(460)),Gg=Error(s(474)),nc=Error(s(542)),zf={then:function(){}};function Kg(n){return n=n.status,n==="fulfilled"||n==="rejected"}function ic(){}function $g(n,r,a){switch(a=n[a],a===void 0?n.push(r):a!==r&&(r.then(ic,ic),r=a),r.status){case"fulfilled":return r.value;case"rejected":throw n=r.reason,Qg(n),n;default:if(typeof r.status=="string")r.then(ic,ic);else{if(n=Je,n!==null&&100<n.shellSuspendCounter)throw Error(s(482));n=r,n.status="pending",n.then(function(l){if(r.status==="pending"){var f=r;f.status="fulfilled",f.value=l}},function(l){if(r.status==="pending"){var f=r;f.status="rejected",f.reason=l}})}switch(r.status){case"fulfilled":return r.value;case"rejected":throw n=r.reason,Qg(n),n}throw nl=r,tl}}var nl=null;function Yg(){if(nl===null)throw Error(s(459));var n=nl;return nl=null,n}function Qg(n){if(n===tl||n===nc)throw Error(s(483))}var gr=!1;function Bf(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function jf(n,r){n=n.updateQueue,r.updateQueue===n&&(r.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,callbacks:null})}function yr(n){return{lane:n,tag:0,payload:null,callback:null,next:null}}function _r(n,r,a){var l=n.updateQueue;if(l===null)return null;if(l=l.shared,(Ge&2)!==0){var f=l.pending;return f===null?r.next=r:(r.next=f.next,f.next=r),l.pending=r,r=Qu(n),xg(n,null,a),r}return Yu(n,l,r,a),Qu(n)}function il(n,r,a){if(r=r.updateQueue,r!==null&&(r=r.shared,(a&4194048)!==0)){var l=r.lanes;l&=n.pendingLanes,a|=l,r.lanes=a,No(n,a)}}function qf(n,r){var a=n.updateQueue,l=n.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var f=null,d=null;if(a=a.firstBaseUpdate,a!==null){do{var v={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};d===null?f=d=v:d=d.next=v,a=a.next}while(a!==null);d===null?f=d=r:d=d.next=r}else f=d=r;a={baseState:l.baseState,firstBaseUpdate:f,lastBaseUpdate:d,shared:l.shared,callbacks:l.callbacks},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=r:n.next=r,a.lastBaseUpdate=r}var Hf=!1;function rl(){if(Hf){var n=Va;if(n!==null)throw n}}function sl(n,r,a,l){Hf=!1;var f=n.updateQueue;gr=!1;var d=f.firstBaseUpdate,v=f.lastBaseUpdate,T=f.shared.pending;if(T!==null){f.shared.pending=null;var I=T,B=I.next;I.next=null,v===null?d=B:v.next=B,v=I;var Y=n.alternate;Y!==null&&(Y=Y.updateQueue,T=Y.lastBaseUpdate,T!==v&&(T===null?Y.firstBaseUpdate=B:T.next=B,Y.lastBaseUpdate=I))}if(d!==null){var W=f.baseState;v=0,Y=B=I=null,T=d;do{var j=T.lane&-536870913,q=j!==T.lane;if(q?(Le&j)===j:(l&j)===j){j!==0&&j===Ma&&(Hf=!0),Y!==null&&(Y=Y.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});e:{var Ee=n,ge=T;j=r;var Xe=a;switch(ge.tag){case 1:if(Ee=ge.payload,typeof Ee=="function"){W=Ee.call(Xe,W,j);break e}W=Ee;break e;case 3:Ee.flags=Ee.flags&-65537|128;case 0:if(Ee=ge.payload,j=typeof Ee=="function"?Ee.call(Xe,W,j):Ee,j==null)break e;W=E({},W,j);break e;case 2:gr=!0}}j=T.callback,j!==null&&(n.flags|=64,q&&(n.flags|=8192),q=f.callbacks,q===null?f.callbacks=[j]:q.push(j))}else q={lane:j,tag:T.tag,payload:T.payload,callback:T.callback,next:null},Y===null?(B=Y=q,I=W):Y=Y.next=q,v|=j;if(T=T.next,T===null){if(T=f.shared.pending,T===null)break;q=T,T=q.next,q.next=null,f.lastBaseUpdate=q,f.shared.pending=null}}while(!0);Y===null&&(I=W),f.baseState=I,f.firstBaseUpdate=B,f.lastBaseUpdate=Y,d===null&&(f.shared.lanes=0),Rr|=v,n.lanes=v,n.memoizedState=W}}function Xg(n,r){if(typeof n!="function")throw Error(s(191,n));n.call(r)}function Wg(n,r){var a=n.callbacks;if(a!==null)for(n.callbacks=null,n=0;n<a.length;n++)Xg(a[n],r)}var Pa=ee(null),rc=ee(0);function Zg(n,r){n=Yi,ie(rc,n),ie(Pa,r),Yi=n|r.baseLanes}function Ff(){ie(rc,Yi),ie(Pa,Pa.current)}function Gf(){Yi=rc.current,ae(Pa),ae(rc)}var vr=0,Ie=null,Ye=null,yt=null,sc=!1,xa=!1,ks=!1,ac=0,al=0,ka=null,MS=0;function ft(){throw Error(s(321))}function Kf(n,r){if(r===null)return!1;for(var a=0;a<r.length&&a<n.length;a++)if(!mn(n[a],r[a]))return!1;return!0}function $f(n,r,a,l,f,d){return vr=d,Ie=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,$.H=n===null||n.memoizedState===null?xy:ky,ks=!1,d=a(l,f),ks=!1,xa&&(d=ey(r,a,l,f)),Jg(n),d}function Jg(n){$.H=fc;var r=Ye!==null&&Ye.next!==null;if(vr=0,yt=Ye=Ie=null,sc=!1,al=0,ka=null,r)throw Error(s(300));n===null||Vt||(n=n.dependencies,n!==null&&Ju(n)&&(Vt=!0))}function ey(n,r,a,l){Ie=n;var f=0;do{if(xa&&(ka=null),al=0,xa=!1,25<=f)throw Error(s(301));if(f+=1,yt=Ye=null,n.updateQueue!=null){var d=n.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}$.H=zS,d=r(a,l)}while(xa);return d}function VS(){var n=$.H,r=n.useState()[0];return r=typeof r.then=="function"?ol(r):r,n=n.useState()[0],(Ye!==null?Ye.memoizedState:null)!==n&&(Ie.flags|=1024),r}function Yf(){var n=ac!==0;return ac=0,n}function Qf(n,r,a){r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~a}function Xf(n){if(sc){for(n=n.memoizedState;n!==null;){var r=n.queue;r!==null&&(r.pending=null),n=n.next}sc=!1}vr=0,yt=Ye=Ie=null,xa=!1,al=ac=0,ka=null}function sn(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return yt===null?Ie.memoizedState=yt=n:yt=yt.next=n,yt}function _t(){if(Ye===null){var n=Ie.alternate;n=n!==null?n.memoizedState:null}else n=Ye.next;var r=yt===null?Ie.memoizedState:yt.next;if(r!==null)yt=r,Ye=n;else{if(n===null)throw Ie.alternate===null?Error(s(467)):Error(s(310));Ye=n,n={memoizedState:Ye.memoizedState,baseState:Ye.baseState,baseQueue:Ye.baseQueue,queue:Ye.queue,next:null},yt===null?Ie.memoizedState=yt=n:yt=yt.next=n}return yt}function Wf(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ol(n){var r=al;return al+=1,ka===null&&(ka=[]),n=$g(ka,n,r),r=Ie,(yt===null?r.memoizedState:yt.next)===null&&(r=r.alternate,$.H=r===null||r.memoizedState===null?xy:ky),n}function oc(n){if(n!==null&&typeof n=="object"){if(typeof n.then=="function")return ol(n);if(n.$$typeof===te)return $t(n)}throw Error(s(438,String(n)))}function Zf(n){var r=null,a=Ie.updateQueue;if(a!==null&&(r=a.memoCache),r==null){var l=Ie.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(r={data:l.data.map(function(f){return f.slice()}),index:0})))}if(r==null&&(r={data:[],index:0}),a===null&&(a=Wf(),Ie.updateQueue=a),a.memoCache=r,a=r.data[r.index],a===void 0)for(a=r.data[r.index]=Array(n),l=0;l<n;l++)a[l]=N;return r.index++,a}function qi(n,r){return typeof r=="function"?r(n):r}function lc(n){var r=_t();return Jf(r,Ye,n)}function Jf(n,r,a){var l=n.queue;if(l===null)throw Error(s(311));l.lastRenderedReducer=a;var f=n.baseQueue,d=l.pending;if(d!==null){if(f!==null){var v=f.next;f.next=d.next,d.next=v}r.baseQueue=f=d,l.pending=null}if(d=n.baseState,f===null)n.memoizedState=d;else{r=f.next;var T=v=null,I=null,B=r,Y=!1;do{var W=B.lane&-536870913;if(W!==B.lane?(Le&W)===W:(vr&W)===W){var j=B.revertLane;if(j===0)I!==null&&(I=I.next={lane:0,revertLane:0,action:B.action,hasEagerState:B.hasEagerState,eagerState:B.eagerState,next:null}),W===Ma&&(Y=!0);else if((vr&j)===j){B=B.next,j===Ma&&(Y=!0);continue}else W={lane:0,revertLane:B.revertLane,action:B.action,hasEagerState:B.hasEagerState,eagerState:B.eagerState,next:null},I===null?(T=I=W,v=d):I=I.next=W,Ie.lanes|=j,Rr|=j;W=B.action,ks&&a(d,W),d=B.hasEagerState?B.eagerState:a(d,W)}else j={lane:W,revertLane:B.revertLane,action:B.action,hasEagerState:B.hasEagerState,eagerState:B.eagerState,next:null},I===null?(T=I=j,v=d):I=I.next=j,Ie.lanes|=W,Rr|=W;B=B.next}while(B!==null&&B!==r);if(I===null?v=d:I.next=T,!mn(d,n.memoizedState)&&(Vt=!0,Y&&(a=Va,a!==null)))throw a;n.memoizedState=d,n.baseState=v,n.baseQueue=I,l.lastRenderedState=d}return f===null&&(l.lanes=0),[n.memoizedState,l.dispatch]}function ed(n){var r=_t(),a=r.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=n;var l=a.dispatch,f=a.pending,d=r.memoizedState;if(f!==null){a.pending=null;var v=f=f.next;do d=n(d,v.action),v=v.next;while(v!==f);mn(d,r.memoizedState)||(Vt=!0),r.memoizedState=d,r.baseQueue===null&&(r.baseState=d),a.lastRenderedState=d}return[d,l]}function ty(n,r,a){var l=Ie,f=_t(),d=je;if(d){if(a===void 0)throw Error(s(407));a=a()}else a=r();var v=!mn((Ye||f).memoizedState,a);v&&(f.memoizedState=a,Vt=!0),f=f.queue;var T=ry.bind(null,l,f,n);if(ll(2048,8,T,[n]),f.getSnapshot!==r||v||yt!==null&&yt.memoizedState.tag&1){if(l.flags|=2048,La(9,uc(),iy.bind(null,l,f,a,r),null),Je===null)throw Error(s(349));d||(vr&124)!==0||ny(l,r,a)}return a}function ny(n,r,a){n.flags|=16384,n={getSnapshot:r,value:a},r=Ie.updateQueue,r===null?(r=Wf(),Ie.updateQueue=r,r.stores=[n]):(a=r.stores,a===null?r.stores=[n]:a.push(n))}function iy(n,r,a,l){r.value=a,r.getSnapshot=l,sy(r)&&ay(n)}function ry(n,r,a){return a(function(){sy(r)&&ay(n)})}function sy(n){var r=n.getSnapshot;n=n.value;try{var a=r();return!mn(n,a)}catch{return!0}}function ay(n){var r=Ca(n,2);r!==null&&En(r,n,2)}function td(n){var r=sn();if(typeof n=="function"){var a=n;if(n=a(),ks){fn(!0);try{a()}finally{fn(!1)}}}return r.memoizedState=r.baseState=n,r.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:qi,lastRenderedState:n},r}function oy(n,r,a,l){return n.baseState=a,Jf(n,Ye,typeof l=="function"?l:qi)}function PS(n,r,a,l,f){if(hc(n))throw Error(s(485));if(n=r.action,n!==null){var d={payload:f,action:n,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(v){d.listeners.push(v)}};$.T!==null?a(!0):d.isTransition=!1,l(d),a=r.pending,a===null?(d.next=r.pending=d,ly(r,d)):(d.next=a.next,r.pending=a.next=d)}}function ly(n,r){var a=r.action,l=r.payload,f=n.state;if(r.isTransition){var d=$.T,v={};$.T=v;try{var T=a(f,l),I=$.S;I!==null&&I(v,T),uy(n,r,T)}catch(B){nd(n,r,B)}finally{$.T=d}}else try{d=a(f,l),uy(n,r,d)}catch(B){nd(n,r,B)}}function uy(n,r,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){cy(n,r,l)},function(l){return nd(n,r,l)}):cy(n,r,a)}function cy(n,r,a){r.status="fulfilled",r.value=a,hy(r),n.state=a,r=n.pending,r!==null&&(a=r.next,a===r?n.pending=null:(a=a.next,r.next=a,ly(n,a)))}function nd(n,r,a){var l=n.pending;if(n.pending=null,l!==null){l=l.next;do r.status="rejected",r.reason=a,hy(r),r=r.next;while(r!==l)}n.action=null}function hy(n){n=n.listeners;for(var r=0;r<n.length;r++)(0,n[r])()}function fy(n,r){return r}function dy(n,r){if(je){var a=Je.formState;if(a!==null){e:{var l=Ie;if(je){if(ot){t:{for(var f=ot,d=ui;f.nodeType!==8;){if(!d){f=null;break t}if(f=Gn(f.nextSibling),f===null){f=null;break t}}d=f.data,f=d==="F!"||d==="F"?f:null}if(f){ot=Gn(f.nextSibling),l=f.data==="F!";break e}}Ms(l)}l=!1}l&&(r=a[0])}}return a=sn(),a.memoizedState=a.baseState=r,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:fy,lastRenderedState:r},a.queue=l,a=My.bind(null,Ie,l),l.dispatch=a,l=td(!1),d=od.bind(null,Ie,!1,l.queue),l=sn(),f={state:r,dispatch:null,action:n,pending:null},l.queue=f,a=PS.bind(null,Ie,f,d,a),f.dispatch=a,l.memoizedState=n,[r,a,!1]}function my(n){var r=_t();return py(r,Ye,n)}function py(n,r,a){if(r=Jf(n,r,fy)[0],n=lc(qi)[0],typeof r=="object"&&r!==null&&typeof r.then=="function")try{var l=ol(r)}catch(v){throw v===tl?nc:v}else l=r;r=_t();var f=r.queue,d=f.dispatch;return a!==r.memoizedState&&(Ie.flags|=2048,La(9,uc(),xS.bind(null,f,a),null)),[l,d,n]}function xS(n,r){n.action=r}function gy(n){var r=_t(),a=Ye;if(a!==null)return py(r,a,n);_t(),r=r.memoizedState,a=_t();var l=a.queue.dispatch;return a.memoizedState=n,[r,l,!1]}function La(n,r,a,l){return n={tag:n,create:a,deps:l,inst:r,next:null},r=Ie.updateQueue,r===null&&(r=Wf(),Ie.updateQueue=r),a=r.lastEffect,a===null?r.lastEffect=n.next=n:(l=a.next,a.next=n,n.next=l,r.lastEffect=n),n}function uc(){return{destroy:void 0,resource:void 0}}function yy(){return _t().memoizedState}function cc(n,r,a,l){var f=sn();l=l===void 0?null:l,Ie.flags|=n,f.memoizedState=La(1|r,uc(),a,l)}function ll(n,r,a,l){var f=_t();l=l===void 0?null:l;var d=f.memoizedState.inst;Ye!==null&&l!==null&&Kf(l,Ye.memoizedState.deps)?f.memoizedState=La(r,d,a,l):(Ie.flags|=n,f.memoizedState=La(1|r,d,a,l))}function _y(n,r){cc(8390656,8,n,r)}function vy(n,r){ll(2048,8,n,r)}function Ey(n,r){return ll(4,2,n,r)}function Ty(n,r){return ll(4,4,n,r)}function Ay(n,r){if(typeof r=="function"){n=n();var a=r(n);return function(){typeof a=="function"?a():r(null)}}if(r!=null)return n=n(),r.current=n,function(){r.current=null}}function wy(n,r,a){a=a!=null?a.concat([n]):null,ll(4,4,Ay.bind(null,r,n),a)}function id(){}function Sy(n,r){var a=_t();r=r===void 0?null:r;var l=a.memoizedState;return r!==null&&Kf(r,l[1])?l[0]:(a.memoizedState=[n,r],n)}function by(n,r){var a=_t();r=r===void 0?null:r;var l=a.memoizedState;if(r!==null&&Kf(r,l[1]))return l[0];if(l=n(),ks){fn(!0);try{n()}finally{fn(!1)}}return a.memoizedState=[l,r],l}function rd(n,r,a){return a===void 0||(vr&1073741824)!==0?n.memoizedState=r:(n.memoizedState=a,n=C_(),Ie.lanes|=n,Rr|=n,a)}function Ry(n,r,a,l){return mn(a,r)?a:Pa.current!==null?(n=rd(n,a,l),mn(n,r)||(Vt=!0),n):(vr&42)===0?(Vt=!0,n.memoizedState=a):(n=C_(),Ie.lanes|=n,Rr|=n,r)}function Iy(n,r,a,l,f){var d=se.p;se.p=d!==0&&8>d?d:8;var v=$.T,T={};$.T=T,od(n,!1,r,a);try{var I=f(),B=$.S;if(B!==null&&B(T,I),I!==null&&typeof I=="object"&&typeof I.then=="function"){var Y=NS(I,l);ul(n,r,Y,vn(n))}else ul(n,r,l,vn(n))}catch(W){ul(n,r,{then:function(){},status:"rejected",reason:W},vn())}finally{se.p=d,$.T=v}}function kS(){}function sd(n,r,a,l){if(n.tag!==5)throw Error(s(476));var f=Cy(n).queue;Iy(n,f,r,de,a===null?kS:function(){return Dy(n),a(l)})}function Cy(n){var r=n.memoizedState;if(r!==null)return r;r={memoizedState:de,baseState:de,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:qi,lastRenderedState:de},next:null};var a={};return r.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:qi,lastRenderedState:a},next:null},n.memoizedState=r,n=n.alternate,n!==null&&(n.memoizedState=r),r}function Dy(n){var r=Cy(n).next.queue;ul(n,r,{},vn())}function ad(){return $t(Il)}function Oy(){return _t().memoizedState}function Ny(){return _t().memoizedState}function LS(n){for(var r=n.return;r!==null;){switch(r.tag){case 24:case 3:var a=vn();n=yr(a);var l=_r(r,n,a);l!==null&&(En(l,r,a),il(l,r,a)),r={cache:kf()},n.payload=r;return}r=r.return}}function US(n,r,a){var l=vn();a={lane:l,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},hc(n)?Vy(r,a):(a=Rf(n,r,a,l),a!==null&&(En(a,n,l),Py(a,r,l)))}function My(n,r,a){var l=vn();ul(n,r,a,l)}function ul(n,r,a,l){var f={lane:l,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(hc(n))Vy(r,f);else{var d=n.alternate;if(n.lanes===0&&(d===null||d.lanes===0)&&(d=r.lastRenderedReducer,d!==null))try{var v=r.lastRenderedState,T=d(v,a);if(f.hasEagerState=!0,f.eagerState=T,mn(T,v))return Yu(n,r,f,0),Je===null&&$u(),!1}catch{}finally{}if(a=Rf(n,r,f,l),a!==null)return En(a,n,l),Py(a,r,l),!0}return!1}function od(n,r,a,l){if(l={lane:2,revertLane:zd(),action:l,hasEagerState:!1,eagerState:null,next:null},hc(n)){if(r)throw Error(s(479))}else r=Rf(n,a,l,2),r!==null&&En(r,n,2)}function hc(n){var r=n.alternate;return n===Ie||r!==null&&r===Ie}function Vy(n,r){xa=sc=!0;var a=n.pending;a===null?r.next=r:(r.next=a.next,a.next=r),n.pending=r}function Py(n,r,a){if((a&4194048)!==0){var l=r.lanes;l&=n.pendingLanes,a|=l,r.lanes=a,No(n,a)}}var fc={readContext:$t,use:oc,useCallback:ft,useContext:ft,useEffect:ft,useImperativeHandle:ft,useLayoutEffect:ft,useInsertionEffect:ft,useMemo:ft,useReducer:ft,useRef:ft,useState:ft,useDebugValue:ft,useDeferredValue:ft,useTransition:ft,useSyncExternalStore:ft,useId:ft,useHostTransitionStatus:ft,useFormState:ft,useActionState:ft,useOptimistic:ft,useMemoCache:ft,useCacheRefresh:ft},xy={readContext:$t,use:oc,useCallback:function(n,r){return sn().memoizedState=[n,r===void 0?null:r],n},useContext:$t,useEffect:_y,useImperativeHandle:function(n,r,a){a=a!=null?a.concat([n]):null,cc(4194308,4,Ay.bind(null,r,n),a)},useLayoutEffect:function(n,r){return cc(4194308,4,n,r)},useInsertionEffect:function(n,r){cc(4,2,n,r)},useMemo:function(n,r){var a=sn();r=r===void 0?null:r;var l=n();if(ks){fn(!0);try{n()}finally{fn(!1)}}return a.memoizedState=[l,r],l},useReducer:function(n,r,a){var l=sn();if(a!==void 0){var f=a(r);if(ks){fn(!0);try{a(r)}finally{fn(!1)}}}else f=r;return l.memoizedState=l.baseState=f,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:f},l.queue=n,n=n.dispatch=US.bind(null,Ie,n),[l.memoizedState,n]},useRef:function(n){var r=sn();return n={current:n},r.memoizedState=n},useState:function(n){n=td(n);var r=n.queue,a=My.bind(null,Ie,r);return r.dispatch=a,[n.memoizedState,a]},useDebugValue:id,useDeferredValue:function(n,r){var a=sn();return rd(a,n,r)},useTransition:function(){var n=td(!1);return n=Iy.bind(null,Ie,n.queue,!0,!1),sn().memoizedState=n,[!1,n]},useSyncExternalStore:function(n,r,a){var l=Ie,f=sn();if(je){if(a===void 0)throw Error(s(407));a=a()}else{if(a=r(),Je===null)throw Error(s(349));(Le&124)!==0||ny(l,r,a)}f.memoizedState=a;var d={value:a,getSnapshot:r};return f.queue=d,_y(ry.bind(null,l,d,n),[n]),l.flags|=2048,La(9,uc(),iy.bind(null,l,d,a,r),null),a},useId:function(){var n=sn(),r=Je.identifierPrefix;if(je){var a=zi,l=Ui;a=(l&~(1<<32-Kt(l)-1)).toString(32)+a,r="«"+r+"R"+a,a=ac++,0<a&&(r+="H"+a.toString(32)),r+="»"}else a=MS++,r="«"+r+"r"+a.toString(32)+"»";return n.memoizedState=r},useHostTransitionStatus:ad,useFormState:dy,useActionState:dy,useOptimistic:function(n){var r=sn();r.memoizedState=r.baseState=n;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return r.queue=a,r=od.bind(null,Ie,!0,a),a.dispatch=r,[n,r]},useMemoCache:Zf,useCacheRefresh:function(){return sn().memoizedState=LS.bind(null,Ie)}},ky={readContext:$t,use:oc,useCallback:Sy,useContext:$t,useEffect:vy,useImperativeHandle:wy,useInsertionEffect:Ey,useLayoutEffect:Ty,useMemo:by,useReducer:lc,useRef:yy,useState:function(){return lc(qi)},useDebugValue:id,useDeferredValue:function(n,r){var a=_t();return Ry(a,Ye.memoizedState,n,r)},useTransition:function(){var n=lc(qi)[0],r=_t().memoizedState;return[typeof n=="boolean"?n:ol(n),r]},useSyncExternalStore:ty,useId:Oy,useHostTransitionStatus:ad,useFormState:my,useActionState:my,useOptimistic:function(n,r){var a=_t();return oy(a,Ye,n,r)},useMemoCache:Zf,useCacheRefresh:Ny},zS={readContext:$t,use:oc,useCallback:Sy,useContext:$t,useEffect:vy,useImperativeHandle:wy,useInsertionEffect:Ey,useLayoutEffect:Ty,useMemo:by,useReducer:ed,useRef:yy,useState:function(){return ed(qi)},useDebugValue:id,useDeferredValue:function(n,r){var a=_t();return Ye===null?rd(a,n,r):Ry(a,Ye.memoizedState,n,r)},useTransition:function(){var n=ed(qi)[0],r=_t().memoizedState;return[typeof n=="boolean"?n:ol(n),r]},useSyncExternalStore:ty,useId:Oy,useHostTransitionStatus:ad,useFormState:gy,useActionState:gy,useOptimistic:function(n,r){var a=_t();return Ye!==null?oy(a,Ye,n,r):(a.baseState=n,[n,a.queue.dispatch])},useMemoCache:Zf,useCacheRefresh:Ny},Ua=null,cl=0;function dc(n){var r=cl;return cl+=1,Ua===null&&(Ua=[]),$g(Ua,n,r)}function hl(n,r){r=r.props.ref,n.ref=r!==void 0?r:null}function mc(n,r){throw r.$$typeof===S?Error(s(525)):(n=Object.prototype.toString.call(r),Error(s(31,n==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":n)))}function Ly(n){var r=n._init;return r(n._payload)}function Uy(n){function r(k,M){if(n){var z=k.deletions;z===null?(k.deletions=[M],k.flags|=16):z.push(M)}}function a(k,M){if(!n)return null;for(;M!==null;)r(k,M),M=M.sibling;return null}function l(k){for(var M=new Map;k!==null;)k.key!==null?M.set(k.key,k):M.set(k.index,k),k=k.sibling;return M}function f(k,M){return k=Li(k,M),k.index=0,k.sibling=null,k}function d(k,M,z){return k.index=z,n?(z=k.alternate,z!==null?(z=z.index,z<M?(k.flags|=67108866,M):z):(k.flags|=67108866,M)):(k.flags|=1048576,M)}function v(k){return n&&k.alternate===null&&(k.flags|=67108866),k}function T(k,M,z,X){return M===null||M.tag!==6?(M=Cf(z,k.mode,X),M.return=k,M):(M=f(M,z),M.return=k,M)}function I(k,M,z,X){var he=z.type;return he===P?Y(k,M,z.props.children,X,z.key):M!==null&&(M.elementType===he||typeof he=="object"&&he!==null&&he.$$typeof===b&&Ly(he)===M.type)?(M=f(M,z.props),hl(M,z),M.return=k,M):(M=Xu(z.type,z.key,z.props,null,k.mode,X),hl(M,z),M.return=k,M)}function B(k,M,z,X){return M===null||M.tag!==4||M.stateNode.containerInfo!==z.containerInfo||M.stateNode.implementation!==z.implementation?(M=Df(z,k.mode,X),M.return=k,M):(M=f(M,z.children||[]),M.return=k,M)}function Y(k,M,z,X,he){return M===null||M.tag!==7?(M=Cs(z,k.mode,X,he),M.return=k,M):(M=f(M,z),M.return=k,M)}function W(k,M,z){if(typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint")return M=Cf(""+M,k.mode,z),M.return=k,M;if(typeof M=="object"&&M!==null){switch(M.$$typeof){case w:return z=Xu(M.type,M.key,M.props,null,k.mode,z),hl(z,M),z.return=k,z;case D:return M=Df(M,k.mode,z),M.return=k,M;case b:var X=M._init;return M=X(M._payload),W(k,M,z)}if(st(M)||L(M))return M=Cs(M,k.mode,z,null),M.return=k,M;if(typeof M.then=="function")return W(k,dc(M),z);if(M.$$typeof===te)return W(k,ec(k,M),z);mc(k,M)}return null}function j(k,M,z,X){var he=M!==null?M.key:null;if(typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint")return he!==null?null:T(k,M,""+z,X);if(typeof z=="object"&&z!==null){switch(z.$$typeof){case w:return z.key===he?I(k,M,z,X):null;case D:return z.key===he?B(k,M,z,X):null;case b:return he=z._init,z=he(z._payload),j(k,M,z,X)}if(st(z)||L(z))return he!==null?null:Y(k,M,z,X,null);if(typeof z.then=="function")return j(k,M,dc(z),X);if(z.$$typeof===te)return j(k,M,ec(k,z),X);mc(k,z)}return null}function q(k,M,z,X,he){if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return k=k.get(z)||null,T(M,k,""+X,he);if(typeof X=="object"&&X!==null){switch(X.$$typeof){case w:return k=k.get(X.key===null?z:X.key)||null,I(M,k,X,he);case D:return k=k.get(X.key===null?z:X.key)||null,B(M,k,X,he);case b:var Oe=X._init;return X=Oe(X._payload),q(k,M,z,X,he)}if(st(X)||L(X))return k=k.get(z)||null,Y(M,k,X,he,null);if(typeof X.then=="function")return q(k,M,z,dc(X),he);if(X.$$typeof===te)return q(k,M,z,ec(M,X),he);mc(M,X)}return null}function Ee(k,M,z,X){for(var he=null,Oe=null,fe=M,ye=M=0,xt=null;fe!==null&&ye<z.length;ye++){fe.index>ye?(xt=fe,fe=null):xt=fe.sibling;var ze=j(k,fe,z[ye],X);if(ze===null){fe===null&&(fe=xt);break}n&&fe&&ze.alternate===null&&r(k,fe),M=d(ze,M,ye),Oe===null?he=ze:Oe.sibling=ze,Oe=ze,fe=xt}if(ye===z.length)return a(k,fe),je&&Os(k,ye),he;if(fe===null){for(;ye<z.length;ye++)fe=W(k,z[ye],X),fe!==null&&(M=d(fe,M,ye),Oe===null?he=fe:Oe.sibling=fe,Oe=fe);return je&&Os(k,ye),he}for(fe=l(fe);ye<z.length;ye++)xt=q(fe,k,ye,z[ye],X),xt!==null&&(n&&xt.alternate!==null&&fe.delete(xt.key===null?ye:xt.key),M=d(xt,M,ye),Oe===null?he=xt:Oe.sibling=xt,Oe=xt);return n&&fe.forEach(function(xr){return r(k,xr)}),je&&Os(k,ye),he}function ge(k,M,z,X){if(z==null)throw Error(s(151));for(var he=null,Oe=null,fe=M,ye=M=0,xt=null,ze=z.next();fe!==null&&!ze.done;ye++,ze=z.next()){fe.index>ye?(xt=fe,fe=null):xt=fe.sibling;var xr=j(k,fe,ze.value,X);if(xr===null){fe===null&&(fe=xt);break}n&&fe&&xr.alternate===null&&r(k,fe),M=d(xr,M,ye),Oe===null?he=xr:Oe.sibling=xr,Oe=xr,fe=xt}if(ze.done)return a(k,fe),je&&Os(k,ye),he;if(fe===null){for(;!ze.done;ye++,ze=z.next())ze=W(k,ze.value,X),ze!==null&&(M=d(ze,M,ye),Oe===null?he=ze:Oe.sibling=ze,Oe=ze);return je&&Os(k,ye),he}for(fe=l(fe);!ze.done;ye++,ze=z.next())ze=q(fe,k,ye,ze.value,X),ze!==null&&(n&&ze.alternate!==null&&fe.delete(ze.key===null?ye:ze.key),M=d(ze,M,ye),Oe===null?he=ze:Oe.sibling=ze,Oe=ze);return n&&fe.forEach(function(Bb){return r(k,Bb)}),je&&Os(k,ye),he}function Xe(k,M,z,X){if(typeof z=="object"&&z!==null&&z.type===P&&z.key===null&&(z=z.props.children),typeof z=="object"&&z!==null){switch(z.$$typeof){case w:e:{for(var he=z.key;M!==null;){if(M.key===he){if(he=z.type,he===P){if(M.tag===7){a(k,M.sibling),X=f(M,z.props.children),X.return=k,k=X;break e}}else if(M.elementType===he||typeof he=="object"&&he!==null&&he.$$typeof===b&&Ly(he)===M.type){a(k,M.sibling),X=f(M,z.props),hl(X,z),X.return=k,k=X;break e}a(k,M);break}else r(k,M);M=M.sibling}z.type===P?(X=Cs(z.props.children,k.mode,X,z.key),X.return=k,k=X):(X=Xu(z.type,z.key,z.props,null,k.mode,X),hl(X,z),X.return=k,k=X)}return v(k);case D:e:{for(he=z.key;M!==null;){if(M.key===he)if(M.tag===4&&M.stateNode.containerInfo===z.containerInfo&&M.stateNode.implementation===z.implementation){a(k,M.sibling),X=f(M,z.children||[]),X.return=k,k=X;break e}else{a(k,M);break}else r(k,M);M=M.sibling}X=Df(z,k.mode,X),X.return=k,k=X}return v(k);case b:return he=z._init,z=he(z._payload),Xe(k,M,z,X)}if(st(z))return Ee(k,M,z,X);if(L(z)){if(he=L(z),typeof he!="function")throw Error(s(150));return z=he.call(z),ge(k,M,z,X)}if(typeof z.then=="function")return Xe(k,M,dc(z),X);if(z.$$typeof===te)return Xe(k,M,ec(k,z),X);mc(k,z)}return typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint"?(z=""+z,M!==null&&M.tag===6?(a(k,M.sibling),X=f(M,z),X.return=k,k=X):(a(k,M),X=Cf(z,k.mode,X),X.return=k,k=X),v(k)):a(k,M)}return function(k,M,z,X){try{cl=0;var he=Xe(k,M,z,X);return Ua=null,he}catch(fe){if(fe===tl||fe===nc)throw fe;var Oe=pn(29,fe,null,k.mode);return Oe.lanes=X,Oe.return=k,Oe}finally{}}}var za=Uy(!0),zy=Uy(!1),Pn=ee(null),ci=null;function Er(n){var r=n.alternate;ie(Rt,Rt.current&1),ie(Pn,n),ci===null&&(r===null||Pa.current!==null||r.memoizedState!==null)&&(ci=n)}function By(n){if(n.tag===22){if(ie(Rt,Rt.current),ie(Pn,n),ci===null){var r=n.alternate;r!==null&&r.memoizedState!==null&&(ci=n)}}else Tr()}function Tr(){ie(Rt,Rt.current),ie(Pn,Pn.current)}function Hi(n){ae(Pn),ci===n&&(ci=null),ae(Rt)}var Rt=ee(0);function pc(n){for(var r=n;r!==null;){if(r.tag===13){var a=r.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||Wd(a)))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}function ld(n,r,a,l){r=n.memoizedState,a=a(l,r),a=a==null?r:E({},r,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var ud={enqueueSetState:function(n,r,a){n=n._reactInternals;var l=vn(),f=yr(l);f.payload=r,a!=null&&(f.callback=a),r=_r(n,f,l),r!==null&&(En(r,n,l),il(r,n,l))},enqueueReplaceState:function(n,r,a){n=n._reactInternals;var l=vn(),f=yr(l);f.tag=1,f.payload=r,a!=null&&(f.callback=a),r=_r(n,f,l),r!==null&&(En(r,n,l),il(r,n,l))},enqueueForceUpdate:function(n,r){n=n._reactInternals;var a=vn(),l=yr(a);l.tag=2,r!=null&&(l.callback=r),r=_r(n,l,a),r!==null&&(En(r,n,a),il(r,n,a))}};function jy(n,r,a,l,f,d,v){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(l,d,v):r.prototype&&r.prototype.isPureReactComponent?!$o(a,l)||!$o(f,d):!0}function qy(n,r,a,l){n=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(a,l),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(a,l),r.state!==n&&ud.enqueueReplaceState(r,r.state,null)}function Ls(n,r){var a=r;if("ref"in r){a={};for(var l in r)l!=="ref"&&(a[l]=r[l])}if(n=n.defaultProps){a===r&&(a=E({},a));for(var f in n)a[f]===void 0&&(a[f]=n[f])}return a}var gc=typeof reportError=="function"?reportError:function(n){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var r=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof n=="object"&&n!==null&&typeof n.message=="string"?String(n.message):String(n),error:n});if(!window.dispatchEvent(r))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",n);return}console.error(n)};function Hy(n){gc(n)}function Fy(n){console.error(n)}function Gy(n){gc(n)}function yc(n,r){try{var a=n.onUncaughtError;a(r.value,{componentStack:r.stack})}catch(l){setTimeout(function(){throw l})}}function Ky(n,r,a){try{var l=n.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:r.tag===1?r.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function cd(n,r,a){return a=yr(a),a.tag=3,a.payload={element:null},a.callback=function(){yc(n,r)},a}function $y(n){return n=yr(n),n.tag=3,n}function Yy(n,r,a,l){var f=a.type.getDerivedStateFromError;if(typeof f=="function"){var d=l.value;n.payload=function(){return f(d)},n.callback=function(){Ky(r,a,l)}}var v=a.stateNode;v!==null&&typeof v.componentDidCatch=="function"&&(n.callback=function(){Ky(r,a,l),typeof f!="function"&&(Ir===null?Ir=new Set([this]):Ir.add(this));var T=l.stack;this.componentDidCatch(l.value,{componentStack:T!==null?T:""})})}function BS(n,r,a,l,f){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(r=a.alternate,r!==null&&Zo(r,a,f,!0),a=Pn.current,a!==null){switch(a.tag){case 13:return ci===null?Pd():a.alternate===null&&lt===0&&(lt=3),a.flags&=-257,a.flags|=65536,a.lanes=f,l===zf?a.flags|=16384:(r=a.updateQueue,r===null?a.updateQueue=new Set([l]):r.add(l),kd(n,l,f)),!1;case 22:return a.flags|=65536,l===zf?a.flags|=16384:(r=a.updateQueue,r===null?(r={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=r):(a=r.retryQueue,a===null?r.retryQueue=new Set([l]):a.add(l)),kd(n,l,f)),!1}throw Error(s(435,a.tag))}return kd(n,l,f),Pd(),!1}if(je)return r=Pn.current,r!==null?((r.flags&65536)===0&&(r.flags|=256),r.flags|=65536,r.lanes=f,l!==Mf&&(n=Error(s(422),{cause:l}),Wo(On(n,a)))):(l!==Mf&&(r=Error(s(423),{cause:l}),Wo(On(r,a))),n=n.current.alternate,n.flags|=65536,f&=-f,n.lanes|=f,l=On(l,a),f=cd(n.stateNode,l,f),qf(n,f),lt!==4&&(lt=2)),!1;var d=Error(s(520),{cause:l});if(d=On(d,a),_l===null?_l=[d]:_l.push(d),lt!==4&&(lt=2),r===null)return!0;l=On(l,a),a=r;do{switch(a.tag){case 3:return a.flags|=65536,n=f&-f,a.lanes|=n,n=cd(a.stateNode,l,n),qf(a,n),!1;case 1:if(r=a.type,d=a.stateNode,(a.flags&128)===0&&(typeof r.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(Ir===null||!Ir.has(d))))return a.flags|=65536,f&=-f,a.lanes|=f,f=$y(f),Yy(f,n,a,l),qf(a,f),!1}a=a.return}while(a!==null);return!1}var Qy=Error(s(461)),Vt=!1;function Bt(n,r,a,l){r.child=n===null?zy(r,null,a,l):za(r,n.child,a,l)}function Xy(n,r,a,l,f){a=a.render;var d=r.ref;if("ref"in l){var v={};for(var T in l)T!=="ref"&&(v[T]=l[T])}else v=l;return Ps(r),l=$f(n,r,a,v,d,f),T=Yf(),n!==null&&!Vt?(Qf(n,r,f),Fi(n,r,f)):(je&&T&&Of(r),r.flags|=1,Bt(n,r,l,f),r.child)}function Wy(n,r,a,l,f){if(n===null){var d=a.type;return typeof d=="function"&&!If(d)&&d.defaultProps===void 0&&a.compare===null?(r.tag=15,r.type=d,Zy(n,r,d,l,f)):(n=Xu(a.type,null,l,r,r.mode,f),n.ref=r.ref,n.return=r,r.child=n)}if(d=n.child,!_d(n,f)){var v=d.memoizedProps;if(a=a.compare,a=a!==null?a:$o,a(v,l)&&n.ref===r.ref)return Fi(n,r,f)}return r.flags|=1,n=Li(d,l),n.ref=r.ref,n.return=r,r.child=n}function Zy(n,r,a,l,f){if(n!==null){var d=n.memoizedProps;if($o(d,l)&&n.ref===r.ref)if(Vt=!1,r.pendingProps=l=d,_d(n,f))(n.flags&131072)!==0&&(Vt=!0);else return r.lanes=n.lanes,Fi(n,r,f)}return hd(n,r,a,l,f)}function Jy(n,r,a){var l=r.pendingProps,f=l.children,d=n!==null?n.memoizedState:null;if(l.mode==="hidden"){if((r.flags&128)!==0){if(l=d!==null?d.baseLanes|a:a,n!==null){for(f=r.child=n.child,d=0;f!==null;)d=d|f.lanes|f.childLanes,f=f.sibling;r.childLanes=d&~l}else r.childLanes=0,r.child=null;return e_(n,r,l,a)}if((a&536870912)!==0)r.memoizedState={baseLanes:0,cachePool:null},n!==null&&tc(r,d!==null?d.cachePool:null),d!==null?Zg(r,d):Ff(),By(r);else return r.lanes=r.childLanes=536870912,e_(n,r,d!==null?d.baseLanes|a:a,a)}else d!==null?(tc(r,d.cachePool),Zg(r,d),Tr(),r.memoizedState=null):(n!==null&&tc(r,null),Ff(),Tr());return Bt(n,r,f,a),r.child}function e_(n,r,a,l){var f=Uf();return f=f===null?null:{parent:bt._currentValue,pool:f},r.memoizedState={baseLanes:a,cachePool:f},n!==null&&tc(r,null),Ff(),By(r),n!==null&&Zo(n,r,l,!0),null}function _c(n,r){var a=r.ref;if(a===null)n!==null&&n.ref!==null&&(r.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(n===null||n.ref!==a)&&(r.flags|=4194816)}}function hd(n,r,a,l,f){return Ps(r),a=$f(n,r,a,l,void 0,f),l=Yf(),n!==null&&!Vt?(Qf(n,r,f),Fi(n,r,f)):(je&&l&&Of(r),r.flags|=1,Bt(n,r,a,f),r.child)}function t_(n,r,a,l,f,d){return Ps(r),r.updateQueue=null,a=ey(r,l,a,f),Jg(n),l=Yf(),n!==null&&!Vt?(Qf(n,r,d),Fi(n,r,d)):(je&&l&&Of(r),r.flags|=1,Bt(n,r,a,d),r.child)}function n_(n,r,a,l,f){if(Ps(r),r.stateNode===null){var d=Da,v=a.contextType;typeof v=="object"&&v!==null&&(d=$t(v)),d=new a(l,d),r.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=ud,r.stateNode=d,d._reactInternals=r,d=r.stateNode,d.props=l,d.state=r.memoizedState,d.refs={},Bf(r),v=a.contextType,d.context=typeof v=="object"&&v!==null?$t(v):Da,d.state=r.memoizedState,v=a.getDerivedStateFromProps,typeof v=="function"&&(ld(r,a,v,l),d.state=r.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(v=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),v!==d.state&&ud.enqueueReplaceState(d,d.state,null),sl(r,l,d,f),rl(),d.state=r.memoizedState),typeof d.componentDidMount=="function"&&(r.flags|=4194308),l=!0}else if(n===null){d=r.stateNode;var T=r.memoizedProps,I=Ls(a,T);d.props=I;var B=d.context,Y=a.contextType;v=Da,typeof Y=="object"&&Y!==null&&(v=$t(Y));var W=a.getDerivedStateFromProps;Y=typeof W=="function"||typeof d.getSnapshotBeforeUpdate=="function",T=r.pendingProps!==T,Y||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(T||B!==v)&&qy(r,d,l,v),gr=!1;var j=r.memoizedState;d.state=j,sl(r,l,d,f),rl(),B=r.memoizedState,T||j!==B||gr?(typeof W=="function"&&(ld(r,a,W,l),B=r.memoizedState),(I=gr||jy(r,a,I,l,j,B,v))?(Y||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(r.flags|=4194308)):(typeof d.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=l,r.memoizedState=B),d.props=l,d.state=B,d.context=v,l=I):(typeof d.componentDidMount=="function"&&(r.flags|=4194308),l=!1)}else{d=r.stateNode,jf(n,r),v=r.memoizedProps,Y=Ls(a,v),d.props=Y,W=r.pendingProps,j=d.context,B=a.contextType,I=Da,typeof B=="object"&&B!==null&&(I=$t(B)),T=a.getDerivedStateFromProps,(B=typeof T=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(v!==W||j!==I)&&qy(r,d,l,I),gr=!1,j=r.memoizedState,d.state=j,sl(r,l,d,f),rl();var q=r.memoizedState;v!==W||j!==q||gr||n!==null&&n.dependencies!==null&&Ju(n.dependencies)?(typeof T=="function"&&(ld(r,a,T,l),q=r.memoizedState),(Y=gr||jy(r,a,Y,l,j,q,I)||n!==null&&n.dependencies!==null&&Ju(n.dependencies))?(B||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(l,q,I),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(l,q,I)),typeof d.componentDidUpdate=="function"&&(r.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof d.componentDidUpdate!="function"||v===n.memoizedProps&&j===n.memoizedState||(r.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||v===n.memoizedProps&&j===n.memoizedState||(r.flags|=1024),r.memoizedProps=l,r.memoizedState=q),d.props=l,d.state=q,d.context=I,l=Y):(typeof d.componentDidUpdate!="function"||v===n.memoizedProps&&j===n.memoizedState||(r.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||v===n.memoizedProps&&j===n.memoizedState||(r.flags|=1024),l=!1)}return d=l,_c(n,r),l=(r.flags&128)!==0,d||l?(d=r.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:d.render(),r.flags|=1,n!==null&&l?(r.child=za(r,n.child,null,f),r.child=za(r,null,a,f)):Bt(n,r,a,f),r.memoizedState=d.state,n=r.child):n=Fi(n,r,f),n}function i_(n,r,a,l){return Xo(),r.flags|=256,Bt(n,r,a,l),r.child}var fd={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function dd(n){return{baseLanes:n,cachePool:Fg()}}function md(n,r,a){return n=n!==null?n.childLanes&~a:0,r&&(n|=xn),n}function r_(n,r,a){var l=r.pendingProps,f=!1,d=(r.flags&128)!==0,v;if((v=d)||(v=n!==null&&n.memoizedState===null?!1:(Rt.current&2)!==0),v&&(f=!0,r.flags&=-129),v=(r.flags&32)!==0,r.flags&=-33,n===null){if(je){if(f?Er(r):Tr(),je){var T=ot,I;if(I=T){e:{for(I=T,T=ui;I.nodeType!==8;){if(!T){T=null;break e}if(I=Gn(I.nextSibling),I===null){T=null;break e}}T=I}T!==null?(r.memoizedState={dehydrated:T,treeContext:Ds!==null?{id:Ui,overflow:zi}:null,retryLane:536870912,hydrationErrors:null},I=pn(18,null,null,0),I.stateNode=T,I.return=r,r.child=I,nn=r,ot=null,I=!0):I=!1}I||Ms(r)}if(T=r.memoizedState,T!==null&&(T=T.dehydrated,T!==null))return Wd(T)?r.lanes=32:r.lanes=536870912,null;Hi(r)}return T=l.children,l=l.fallback,f?(Tr(),f=r.mode,T=vc({mode:"hidden",children:T},f),l=Cs(l,f,a,null),T.return=r,l.return=r,T.sibling=l,r.child=T,f=r.child,f.memoizedState=dd(a),f.childLanes=md(n,v,a),r.memoizedState=fd,l):(Er(r),pd(r,T))}if(I=n.memoizedState,I!==null&&(T=I.dehydrated,T!==null)){if(d)r.flags&256?(Er(r),r.flags&=-257,r=gd(n,r,a)):r.memoizedState!==null?(Tr(),r.child=n.child,r.flags|=128,r=null):(Tr(),f=l.fallback,T=r.mode,l=vc({mode:"visible",children:l.children},T),f=Cs(f,T,a,null),f.flags|=2,l.return=r,f.return=r,l.sibling=f,r.child=l,za(r,n.child,null,a),l=r.child,l.memoizedState=dd(a),l.childLanes=md(n,v,a),r.memoizedState=fd,r=f);else if(Er(r),Wd(T)){if(v=T.nextSibling&&T.nextSibling.dataset,v)var B=v.dgst;v=B,l=Error(s(419)),l.stack="",l.digest=v,Wo({value:l,source:null,stack:null}),r=gd(n,r,a)}else if(Vt||Zo(n,r,a,!1),v=(a&n.childLanes)!==0,Vt||v){if(v=Je,v!==null&&(l=a&-a,l=(l&42)!==0?1:lr(l),l=(l&(v.suspendedLanes|a))!==0?0:l,l!==0&&l!==I.retryLane))throw I.retryLane=l,Ca(n,l),En(v,n,l),Qy;T.data==="$?"||Pd(),r=gd(n,r,a)}else T.data==="$?"?(r.flags|=192,r.child=n.child,r=null):(n=I.treeContext,ot=Gn(T.nextSibling),nn=r,je=!0,Ns=null,ui=!1,n!==null&&(Mn[Vn++]=Ui,Mn[Vn++]=zi,Mn[Vn++]=Ds,Ui=n.id,zi=n.overflow,Ds=r),r=pd(r,l.children),r.flags|=4096);return r}return f?(Tr(),f=l.fallback,T=r.mode,I=n.child,B=I.sibling,l=Li(I,{mode:"hidden",children:l.children}),l.subtreeFlags=I.subtreeFlags&65011712,B!==null?f=Li(B,f):(f=Cs(f,T,a,null),f.flags|=2),f.return=r,l.return=r,l.sibling=f,r.child=l,l=f,f=r.child,T=n.child.memoizedState,T===null?T=dd(a):(I=T.cachePool,I!==null?(B=bt._currentValue,I=I.parent!==B?{parent:B,pool:B}:I):I=Fg(),T={baseLanes:T.baseLanes|a,cachePool:I}),f.memoizedState=T,f.childLanes=md(n,v,a),r.memoizedState=fd,l):(Er(r),a=n.child,n=a.sibling,a=Li(a,{mode:"visible",children:l.children}),a.return=r,a.sibling=null,n!==null&&(v=r.deletions,v===null?(r.deletions=[n],r.flags|=16):v.push(n)),r.child=a,r.memoizedState=null,a)}function pd(n,r){return r=vc({mode:"visible",children:r},n.mode),r.return=n,n.child=r}function vc(n,r){return n=pn(22,n,null,r),n.lanes=0,n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},n}function gd(n,r,a){return za(r,n.child,null,a),n=pd(r,r.pendingProps.children),n.flags|=2,r.memoizedState=null,n}function s_(n,r,a){n.lanes|=r;var l=n.alternate;l!==null&&(l.lanes|=r),Pf(n.return,r,a)}function yd(n,r,a,l,f){var d=n.memoizedState;d===null?n.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:f}:(d.isBackwards=r,d.rendering=null,d.renderingStartTime=0,d.last=l,d.tail=a,d.tailMode=f)}function a_(n,r,a){var l=r.pendingProps,f=l.revealOrder,d=l.tail;if(Bt(n,r,l.children,a),l=Rt.current,(l&2)!==0)l=l&1|2,r.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=r.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&s_(n,a,r);else if(n.tag===19)s_(n,a,r);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break e;for(;n.sibling===null;){if(n.return===null||n.return===r)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}l&=1}switch(ie(Rt,l),f){case"forwards":for(a=r.child,f=null;a!==null;)n=a.alternate,n!==null&&pc(n)===null&&(f=a),a=a.sibling;a=f,a===null?(f=r.child,r.child=null):(f=a.sibling,a.sibling=null),yd(r,!1,f,a,d);break;case"backwards":for(a=null,f=r.child,r.child=null;f!==null;){if(n=f.alternate,n!==null&&pc(n)===null){r.child=f;break}n=f.sibling,f.sibling=a,a=f,f=n}yd(r,!0,a,null,d);break;case"together":yd(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function Fi(n,r,a){if(n!==null&&(r.dependencies=n.dependencies),Rr|=r.lanes,(a&r.childLanes)===0)if(n!==null){if(Zo(n,r,a,!1),(a&r.childLanes)===0)return null}else return null;if(n!==null&&r.child!==n.child)throw Error(s(153));if(r.child!==null){for(n=r.child,a=Li(n,n.pendingProps),r.child=a,a.return=r;n.sibling!==null;)n=n.sibling,a=a.sibling=Li(n,n.pendingProps),a.return=r;a.sibling=null}return r.child}function _d(n,r){return(n.lanes&r)!==0?!0:(n=n.dependencies,!!(n!==null&&Ju(n)))}function jS(n,r,a){switch(r.tag){case 3:Ze(r,r.stateNode.containerInfo),pr(r,bt,n.memoizedState.cache),Xo();break;case 27:case 5:or(r);break;case 4:Ze(r,r.stateNode.containerInfo);break;case 10:pr(r,r.type,r.memoizedProps.value);break;case 13:var l=r.memoizedState;if(l!==null)return l.dehydrated!==null?(Er(r),r.flags|=128,null):(a&r.child.childLanes)!==0?r_(n,r,a):(Er(r),n=Fi(n,r,a),n!==null?n.sibling:null);Er(r);break;case 19:var f=(n.flags&128)!==0;if(l=(a&r.childLanes)!==0,l||(Zo(n,r,a,!1),l=(a&r.childLanes)!==0),f){if(l)return a_(n,r,a);r.flags|=128}if(f=r.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),ie(Rt,Rt.current),l)break;return null;case 22:case 23:return r.lanes=0,Jy(n,r,a);case 24:pr(r,bt,n.memoizedState.cache)}return Fi(n,r,a)}function o_(n,r,a){if(n!==null)if(n.memoizedProps!==r.pendingProps)Vt=!0;else{if(!_d(n,a)&&(r.flags&128)===0)return Vt=!1,jS(n,r,a);Vt=(n.flags&131072)!==0}else Vt=!1,je&&(r.flags&1048576)!==0&&Lg(r,Zu,r.index);switch(r.lanes=0,r.tag){case 16:e:{n=r.pendingProps;var l=r.elementType,f=l._init;if(l=f(l._payload),r.type=l,typeof l=="function")If(l)?(n=Ls(l,n),r.tag=1,r=n_(null,r,l,n,a)):(r.tag=0,r=hd(null,r,l,n,a));else{if(l!=null){if(f=l.$$typeof,f===oe){r.tag=11,r=Xy(null,r,l,n,a);break e}else if(f===V){r.tag=14,r=Wy(null,r,l,n,a);break e}}throw r=Lt(l)||l,Error(s(306,r,""))}}return r;case 0:return hd(n,r,r.type,r.pendingProps,a);case 1:return l=r.type,f=Ls(l,r.pendingProps),n_(n,r,l,f,a);case 3:e:{if(Ze(r,r.stateNode.containerInfo),n===null)throw Error(s(387));l=r.pendingProps;var d=r.memoizedState;f=d.element,jf(n,r),sl(r,l,null,a);var v=r.memoizedState;if(l=v.cache,pr(r,bt,l),l!==d.cache&&xf(r,[bt],a,!0),rl(),l=v.element,d.isDehydrated)if(d={element:l,isDehydrated:!1,cache:v.cache},r.updateQueue.baseState=d,r.memoizedState=d,r.flags&256){r=i_(n,r,l,a);break e}else if(l!==f){f=On(Error(s(424)),r),Wo(f),r=i_(n,r,l,a);break e}else{switch(n=r.stateNode.containerInfo,n.nodeType){case 9:n=n.body;break;default:n=n.nodeName==="HTML"?n.ownerDocument.body:n}for(ot=Gn(n.firstChild),nn=r,je=!0,Ns=null,ui=!0,a=zy(r,null,l,a),r.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Xo(),l===f){r=Fi(n,r,a);break e}Bt(n,r,l,a)}r=r.child}return r;case 26:return _c(n,r),n===null?(a=hv(r.type,null,r.pendingProps,null))?r.memoizedState=a:je||(a=r.type,n=r.pendingProps,l=Vc(we.current).createElement(a),l[At]=r,l[pt]=n,qt(l,a,n),ht(l),r.stateNode=l):r.memoizedState=hv(r.type,n.memoizedProps,r.pendingProps,n.memoizedState),null;case 27:return or(r),n===null&&je&&(l=r.stateNode=lv(r.type,r.pendingProps,we.current),nn=r,ui=!0,f=ot,Or(r.type)?(Zd=f,ot=Gn(l.firstChild)):ot=f),Bt(n,r,r.pendingProps.children,a),_c(n,r),n===null&&(r.flags|=4194304),r.child;case 5:return n===null&&je&&((f=l=ot)&&(l=pb(l,r.type,r.pendingProps,ui),l!==null?(r.stateNode=l,nn=r,ot=Gn(l.firstChild),ui=!1,f=!0):f=!1),f||Ms(r)),or(r),f=r.type,d=r.pendingProps,v=n!==null?n.memoizedProps:null,l=d.children,Yd(f,d)?l=null:v!==null&&Yd(f,v)&&(r.flags|=32),r.memoizedState!==null&&(f=$f(n,r,VS,null,null,a),Il._currentValue=f),_c(n,r),Bt(n,r,l,a),r.child;case 6:return n===null&&je&&((n=a=ot)&&(a=gb(a,r.pendingProps,ui),a!==null?(r.stateNode=a,nn=r,ot=null,n=!0):n=!1),n||Ms(r)),null;case 13:return r_(n,r,a);case 4:return Ze(r,r.stateNode.containerInfo),l=r.pendingProps,n===null?r.child=za(r,null,l,a):Bt(n,r,l,a),r.child;case 11:return Xy(n,r,r.type,r.pendingProps,a);case 7:return Bt(n,r,r.pendingProps,a),r.child;case 8:return Bt(n,r,r.pendingProps.children,a),r.child;case 12:return Bt(n,r,r.pendingProps.children,a),r.child;case 10:return l=r.pendingProps,pr(r,r.type,l.value),Bt(n,r,l.children,a),r.child;case 9:return f=r.type._context,l=r.pendingProps.children,Ps(r),f=$t(f),l=l(f),r.flags|=1,Bt(n,r,l,a),r.child;case 14:return Wy(n,r,r.type,r.pendingProps,a);case 15:return Zy(n,r,r.type,r.pendingProps,a);case 19:return a_(n,r,a);case 31:return l=r.pendingProps,a=r.mode,l={mode:l.mode,children:l.children},n===null?(a=vc(l,a),a.ref=r.ref,r.child=a,a.return=r,r=a):(a=Li(n.child,l),a.ref=r.ref,r.child=a,a.return=r,r=a),r;case 22:return Jy(n,r,a);case 24:return Ps(r),l=$t(bt),n===null?(f=Uf(),f===null&&(f=Je,d=kf(),f.pooledCache=d,d.refCount++,d!==null&&(f.pooledCacheLanes|=a),f=d),r.memoizedState={parent:l,cache:f},Bf(r),pr(r,bt,f)):((n.lanes&a)!==0&&(jf(n,r),sl(r,null,null,a),rl()),f=n.memoizedState,d=r.memoizedState,f.parent!==l?(f={parent:l,cache:l},r.memoizedState=f,r.lanes===0&&(r.memoizedState=r.updateQueue.baseState=f),pr(r,bt,l)):(l=d.cache,pr(r,bt,l),l!==f.cache&&xf(r,[bt],a,!0))),Bt(n,r,r.pendingProps.children,a),r.child;case 29:throw r.pendingProps}throw Error(s(156,r.tag))}function Gi(n){n.flags|=4}function l_(n,r){if(r.type!=="stylesheet"||(r.state.loading&4)!==0)n.flags&=-16777217;else if(n.flags|=16777216,!gv(r)){if(r=Pn.current,r!==null&&((Le&4194048)===Le?ci!==null:(Le&62914560)!==Le&&(Le&536870912)===0||r!==ci))throw nl=zf,Gg;n.flags|=8192}}function Ec(n,r){r!==null&&(n.flags|=4),n.flags&16384&&(r=n.tag!==22?Do():536870912,n.lanes|=r,Ha|=r)}function fl(n,r){if(!je)switch(n.tailMode){case"hidden":r=n.tail;for(var a=null;r!==null;)r.alternate!==null&&(a=r),r=r.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?r||n.tail===null?n.tail=null:n.tail.sibling=null:l.sibling=null}}function it(n){var r=n.alternate!==null&&n.alternate.child===n.child,a=0,l=0;if(r)for(var f=n.child;f!==null;)a|=f.lanes|f.childLanes,l|=f.subtreeFlags&65011712,l|=f.flags&65011712,f.return=n,f=f.sibling;else for(f=n.child;f!==null;)a|=f.lanes|f.childLanes,l|=f.subtreeFlags,l|=f.flags,f.return=n,f=f.sibling;return n.subtreeFlags|=l,n.childLanes=a,r}function qS(n,r,a){var l=r.pendingProps;switch(Nf(r),r.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return it(r),null;case 1:return it(r),null;case 3:return a=r.stateNode,l=null,n!==null&&(l=n.memoizedState.cache),r.memoizedState.cache!==l&&(r.flags|=2048),ji(bt),Wn(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(n===null||n.child===null)&&(Qo(r)?Gi(r):n===null||n.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,Bg())),it(r),null;case 26:return a=r.memoizedState,n===null?(Gi(r),a!==null?(it(r),l_(r,a)):(it(r),r.flags&=-16777217)):a?a!==n.memoizedState?(Gi(r),it(r),l_(r,a)):(it(r),r.flags&=-16777217):(n.memoizedProps!==l&&Gi(r),it(r),r.flags&=-16777217),null;case 27:Si(r),a=we.current;var f=r.type;if(n!==null&&r.stateNode!=null)n.memoizedProps!==l&&Gi(r);else{if(!l){if(r.stateNode===null)throw Error(s(166));return it(r),null}n=pe.current,Qo(r)?Ug(r):(n=lv(f,l,a),r.stateNode=n,Gi(r))}return it(r),null;case 5:if(Si(r),a=r.type,n!==null&&r.stateNode!=null)n.memoizedProps!==l&&Gi(r);else{if(!l){if(r.stateNode===null)throw Error(s(166));return it(r),null}if(n=pe.current,Qo(r))Ug(r);else{switch(f=Vc(we.current),n){case 1:n=f.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:n=f.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":n=f.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":n=f.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":n=f.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild);break;case"select":n=typeof l.is=="string"?f.createElement("select",{is:l.is}):f.createElement("select"),l.multiple?n.multiple=!0:l.size&&(n.size=l.size);break;default:n=typeof l.is=="string"?f.createElement(a,{is:l.is}):f.createElement(a)}}n[At]=r,n[pt]=l;e:for(f=r.child;f!==null;){if(f.tag===5||f.tag===6)n.appendChild(f.stateNode);else if(f.tag!==4&&f.tag!==27&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===r)break e;for(;f.sibling===null;){if(f.return===null||f.return===r)break e;f=f.return}f.sibling.return=f.return,f=f.sibling}r.stateNode=n;e:switch(qt(n,a,l),a){case"button":case"input":case"select":case"textarea":n=!!l.autoFocus;break e;case"img":n=!0;break e;default:n=!1}n&&Gi(r)}}return it(r),r.flags&=-16777217,null;case 6:if(n&&r.stateNode!=null)n.memoizedProps!==l&&Gi(r);else{if(typeof l!="string"&&r.stateNode===null)throw Error(s(166));if(n=we.current,Qo(r)){if(n=r.stateNode,a=r.memoizedProps,l=null,f=nn,f!==null)switch(f.tag){case 27:case 5:l=f.memoizedProps}n[At]=r,n=!!(n.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||tv(n.nodeValue,a)),n||Ms(r)}else n=Vc(n).createTextNode(l),n[At]=r,r.stateNode=n}return it(r),null;case 13:if(l=r.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(f=Qo(r),l!==null&&l.dehydrated!==null){if(n===null){if(!f)throw Error(s(318));if(f=r.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(s(317));f[At]=r}else Xo(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;it(r),f=!1}else f=Bg(),n!==null&&n.memoizedState!==null&&(n.memoizedState.hydrationErrors=f),f=!0;if(!f)return r.flags&256?(Hi(r),r):(Hi(r),null)}if(Hi(r),(r.flags&128)!==0)return r.lanes=a,r;if(a=l!==null,n=n!==null&&n.memoizedState!==null,a){l=r.child,f=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(f=l.alternate.memoizedState.cachePool.pool);var d=null;l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(d=l.memoizedState.cachePool.pool),d!==f&&(l.flags|=2048)}return a!==n&&a&&(r.child.flags|=8192),Ec(r,r.updateQueue),it(r),null;case 4:return Wn(),n===null&&Hd(r.stateNode.containerInfo),it(r),null;case 10:return ji(r.type),it(r),null;case 19:if(ae(Rt),f=r.memoizedState,f===null)return it(r),null;if(l=(r.flags&128)!==0,d=f.rendering,d===null)if(l)fl(f,!1);else{if(lt!==0||n!==null&&(n.flags&128)!==0)for(n=r.child;n!==null;){if(d=pc(n),d!==null){for(r.flags|=128,fl(f,!1),n=d.updateQueue,r.updateQueue=n,Ec(r,n),r.subtreeFlags=0,n=a,a=r.child;a!==null;)kg(a,n),a=a.sibling;return ie(Rt,Rt.current&1|2),r.child}n=n.sibling}f.tail!==null&&Sn()>wc&&(r.flags|=128,l=!0,fl(f,!1),r.lanes=4194304)}else{if(!l)if(n=pc(d),n!==null){if(r.flags|=128,l=!0,n=n.updateQueue,r.updateQueue=n,Ec(r,n),fl(f,!0),f.tail===null&&f.tailMode==="hidden"&&!d.alternate&&!je)return it(r),null}else 2*Sn()-f.renderingStartTime>wc&&a!==536870912&&(r.flags|=128,l=!0,fl(f,!1),r.lanes=4194304);f.isBackwards?(d.sibling=r.child,r.child=d):(n=f.last,n!==null?n.sibling=d:r.child=d,f.last=d)}return f.tail!==null?(r=f.tail,f.rendering=r,f.tail=r.sibling,f.renderingStartTime=Sn(),r.sibling=null,n=Rt.current,ie(Rt,l?n&1|2:n&1),r):(it(r),null);case 22:case 23:return Hi(r),Gf(),l=r.memoizedState!==null,n!==null?n.memoizedState!==null!==l&&(r.flags|=8192):l&&(r.flags|=8192),l?(a&536870912)!==0&&(r.flags&128)===0&&(it(r),r.subtreeFlags&6&&(r.flags|=8192)):it(r),a=r.updateQueue,a!==null&&Ec(r,a.retryQueue),a=null,n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(a=n.memoizedState.cachePool.pool),l=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(l=r.memoizedState.cachePool.pool),l!==a&&(r.flags|=2048),n!==null&&ae(xs),null;case 24:return a=null,n!==null&&(a=n.memoizedState.cache),r.memoizedState.cache!==a&&(r.flags|=2048),ji(bt),it(r),null;case 25:return null;case 30:return null}throw Error(s(156,r.tag))}function HS(n,r){switch(Nf(r),r.tag){case 1:return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 3:return ji(bt),Wn(),n=r.flags,(n&65536)!==0&&(n&128)===0?(r.flags=n&-65537|128,r):null;case 26:case 27:case 5:return Si(r),null;case 13:if(Hi(r),n=r.memoizedState,n!==null&&n.dehydrated!==null){if(r.alternate===null)throw Error(s(340));Xo()}return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 19:return ae(Rt),null;case 4:return Wn(),null;case 10:return ji(r.type),null;case 22:case 23:return Hi(r),Gf(),n!==null&&ae(xs),n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 24:return ji(bt),null;case 25:return null;default:return null}}function u_(n,r){switch(Nf(r),r.tag){case 3:ji(bt),Wn();break;case 26:case 27:case 5:Si(r);break;case 4:Wn();break;case 13:Hi(r);break;case 19:ae(Rt);break;case 10:ji(r.type);break;case 22:case 23:Hi(r),Gf(),n!==null&&ae(xs);break;case 24:ji(bt)}}function dl(n,r){try{var a=r.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var f=l.next;a=f;do{if((a.tag&n)===n){l=void 0;var d=a.create,v=a.inst;l=d(),v.destroy=l}a=a.next}while(a!==f)}}catch(T){We(r,r.return,T)}}function Ar(n,r,a){try{var l=r.updateQueue,f=l!==null?l.lastEffect:null;if(f!==null){var d=f.next;l=d;do{if((l.tag&n)===n){var v=l.inst,T=v.destroy;if(T!==void 0){v.destroy=void 0,f=r;var I=a,B=T;try{B()}catch(Y){We(f,I,Y)}}}l=l.next}while(l!==d)}}catch(Y){We(r,r.return,Y)}}function c_(n){var r=n.updateQueue;if(r!==null){var a=n.stateNode;try{Wg(r,a)}catch(l){We(n,n.return,l)}}}function h_(n,r,a){a.props=Ls(n.type,n.memoizedProps),a.state=n.memoizedState;try{a.componentWillUnmount()}catch(l){We(n,r,l)}}function ml(n,r){try{var a=n.ref;if(a!==null){switch(n.tag){case 26:case 27:case 5:var l=n.stateNode;break;case 30:l=n.stateNode;break;default:l=n.stateNode}typeof a=="function"?n.refCleanup=a(l):a.current=l}}catch(f){We(n,r,f)}}function hi(n,r){var a=n.ref,l=n.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(f){We(n,r,f)}finally{n.refCleanup=null,n=n.alternate,n!=null&&(n.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(f){We(n,r,f)}else a.current=null}function f_(n){var r=n.type,a=n.memoizedProps,l=n.stateNode;try{e:switch(r){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break e;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(f){We(n,n.return,f)}}function vd(n,r,a){try{var l=n.stateNode;cb(l,n.type,a,r),l[pt]=r}catch(f){We(n,n.return,f)}}function d_(n){return n.tag===5||n.tag===3||n.tag===26||n.tag===27&&Or(n.type)||n.tag===4}function Ed(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||d_(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.tag===27&&Or(n.type)||n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Td(n,r,a){var l=n.tag;if(l===5||l===6)n=n.stateNode,r?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(n,r):(r=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,r.appendChild(n),a=a._reactRootContainer,a!=null||r.onclick!==null||(r.onclick=Mc));else if(l!==4&&(l===27&&Or(n.type)&&(a=n.stateNode,r=null),n=n.child,n!==null))for(Td(n,r,a),n=n.sibling;n!==null;)Td(n,r,a),n=n.sibling}function Tc(n,r,a){var l=n.tag;if(l===5||l===6)n=n.stateNode,r?a.insertBefore(n,r):a.appendChild(n);else if(l!==4&&(l===27&&Or(n.type)&&(a=n.stateNode),n=n.child,n!==null))for(Tc(n,r,a),n=n.sibling;n!==null;)Tc(n,r,a),n=n.sibling}function m_(n){var r=n.stateNode,a=n.memoizedProps;try{for(var l=n.type,f=r.attributes;f.length;)r.removeAttributeNode(f[0]);qt(r,l,a),r[At]=n,r[pt]=a}catch(d){We(n,n.return,d)}}var Ki=!1,dt=!1,Ad=!1,p_=typeof WeakSet=="function"?WeakSet:Set,Pt=null;function FS(n,r){if(n=n.containerInfo,Kd=zc,n=Rg(n),Ef(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var f=l.anchorOffset,d=l.focusNode;l=l.focusOffset;try{a.nodeType,d.nodeType}catch{a=null;break e}var v=0,T=-1,I=-1,B=0,Y=0,W=n,j=null;t:for(;;){for(var q;W!==a||f!==0&&W.nodeType!==3||(T=v+f),W!==d||l!==0&&W.nodeType!==3||(I=v+l),W.nodeType===3&&(v+=W.nodeValue.length),(q=W.firstChild)!==null;)j=W,W=q;for(;;){if(W===n)break t;if(j===a&&++B===f&&(T=v),j===d&&++Y===l&&(I=v),(q=W.nextSibling)!==null)break;W=j,j=W.parentNode}W=q}a=T===-1||I===-1?null:{start:T,end:I}}else a=null}a=a||{start:0,end:0}}else a=null;for($d={focusedElem:n,selectionRange:a},zc=!1,Pt=r;Pt!==null;)if(r=Pt,n=r.child,(r.subtreeFlags&1024)!==0&&n!==null)n.return=r,Pt=n;else for(;Pt!==null;){switch(r=Pt,d=r.alternate,n=r.flags,r.tag){case 0:break;case 11:case 15:break;case 1:if((n&1024)!==0&&d!==null){n=void 0,a=r,f=d.memoizedProps,d=d.memoizedState,l=a.stateNode;try{var Ee=Ls(a.type,f,a.elementType===a.type);n=l.getSnapshotBeforeUpdate(Ee,d),l.__reactInternalSnapshotBeforeUpdate=n}catch(ge){We(a,a.return,ge)}}break;case 3:if((n&1024)!==0){if(n=r.stateNode.containerInfo,a=n.nodeType,a===9)Xd(n);else if(a===1)switch(n.nodeName){case"HEAD":case"HTML":case"BODY":Xd(n);break;default:n.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((n&1024)!==0)throw Error(s(163))}if(n=r.sibling,n!==null){n.return=r.return,Pt=n;break}Pt=r.return}}function g_(n,r,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:wr(n,a),l&4&&dl(5,a);break;case 1:if(wr(n,a),l&4)if(n=a.stateNode,r===null)try{n.componentDidMount()}catch(v){We(a,a.return,v)}else{var f=Ls(a.type,r.memoizedProps);r=r.memoizedState;try{n.componentDidUpdate(f,r,n.__reactInternalSnapshotBeforeUpdate)}catch(v){We(a,a.return,v)}}l&64&&c_(a),l&512&&ml(a,a.return);break;case 3:if(wr(n,a),l&64&&(n=a.updateQueue,n!==null)){if(r=null,a.child!==null)switch(a.child.tag){case 27:case 5:r=a.child.stateNode;break;case 1:r=a.child.stateNode}try{Wg(n,r)}catch(v){We(a,a.return,v)}}break;case 27:r===null&&l&4&&m_(a);case 26:case 5:wr(n,a),r===null&&l&4&&f_(a),l&512&&ml(a,a.return);break;case 12:wr(n,a);break;case 13:wr(n,a),l&4&&v_(n,a),l&64&&(n=a.memoizedState,n!==null&&(n=n.dehydrated,n!==null&&(a=JS.bind(null,a),yb(n,a))));break;case 22:if(l=a.memoizedState!==null||Ki,!l){r=r!==null&&r.memoizedState!==null||dt,f=Ki;var d=dt;Ki=l,(dt=r)&&!d?Sr(n,a,(a.subtreeFlags&8772)!==0):wr(n,a),Ki=f,dt=d}break;case 30:break;default:wr(n,a)}}function y_(n){var r=n.alternate;r!==null&&(n.alternate=null,y_(r)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(r=n.stateNode,r!==null&&hr(r)),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}var nt=null,an=!1;function $i(n,r,a){for(a=a.child;a!==null;)__(n,r,a),a=a.sibling}function __(n,r,a){if(Fe&&typeof Fe.onCommitFiberUnmount=="function")try{Fe.onCommitFiberUnmount(at,a)}catch{}switch(a.tag){case 26:dt||hi(a,r),$i(n,r,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:dt||hi(a,r);var l=nt,f=an;Or(a.type)&&(nt=a.stateNode,an=!1),$i(n,r,a),wl(a.stateNode),nt=l,an=f;break;case 5:dt||hi(a,r);case 6:if(l=nt,f=an,nt=null,$i(n,r,a),nt=l,an=f,nt!==null)if(an)try{(nt.nodeType===9?nt.body:nt.nodeName==="HTML"?nt.ownerDocument.body:nt).removeChild(a.stateNode)}catch(d){We(a,r,d)}else try{nt.removeChild(a.stateNode)}catch(d){We(a,r,d)}break;case 18:nt!==null&&(an?(n=nt,av(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,a.stateNode),Nl(n)):av(nt,a.stateNode));break;case 4:l=nt,f=an,nt=a.stateNode.containerInfo,an=!0,$i(n,r,a),nt=l,an=f;break;case 0:case 11:case 14:case 15:dt||Ar(2,a,r),dt||Ar(4,a,r),$i(n,r,a);break;case 1:dt||(hi(a,r),l=a.stateNode,typeof l.componentWillUnmount=="function"&&h_(a,r,l)),$i(n,r,a);break;case 21:$i(n,r,a);break;case 22:dt=(l=dt)||a.memoizedState!==null,$i(n,r,a),dt=l;break;default:$i(n,r,a)}}function v_(n,r){if(r.memoizedState===null&&(n=r.alternate,n!==null&&(n=n.memoizedState,n!==null&&(n=n.dehydrated,n!==null))))try{Nl(n)}catch(a){We(r,r.return,a)}}function GS(n){switch(n.tag){case 13:case 19:var r=n.stateNode;return r===null&&(r=n.stateNode=new p_),r;case 22:return n=n.stateNode,r=n._retryCache,r===null&&(r=n._retryCache=new p_),r;default:throw Error(s(435,n.tag))}}function wd(n,r){var a=GS(n);r.forEach(function(l){var f=eb.bind(null,n,l);a.has(l)||(a.add(l),l.then(f,f))})}function gn(n,r){var a=r.deletions;if(a!==null)for(var l=0;l<a.length;l++){var f=a[l],d=n,v=r,T=v;e:for(;T!==null;){switch(T.tag){case 27:if(Or(T.type)){nt=T.stateNode,an=!1;break e}break;case 5:nt=T.stateNode,an=!1;break e;case 3:case 4:nt=T.stateNode.containerInfo,an=!0;break e}T=T.return}if(nt===null)throw Error(s(160));__(d,v,f),nt=null,an=!1,d=f.alternate,d!==null&&(d.return=null),f.return=null}if(r.subtreeFlags&13878)for(r=r.child;r!==null;)E_(r,n),r=r.sibling}var Fn=null;function E_(n,r){var a=n.alternate,l=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:gn(r,n),yn(n),l&4&&(Ar(3,n,n.return),dl(3,n),Ar(5,n,n.return));break;case 1:gn(r,n),yn(n),l&512&&(dt||a===null||hi(a,a.return)),l&64&&Ki&&(n=n.updateQueue,n!==null&&(l=n.callbacks,l!==null&&(a=n.shared.hiddenCallbacks,n.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var f=Fn;if(gn(r,n),yn(n),l&512&&(dt||a===null||hi(a,a.return)),l&4){var d=a!==null?a.memoizedState:null;if(l=n.memoizedState,a===null)if(l===null)if(n.stateNode===null){e:{l=n.type,a=n.memoizedProps,f=f.ownerDocument||f;t:switch(l){case"title":d=f.getElementsByTagName("title")[0],(!d||d[fs]||d[At]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=f.createElement(l),f.head.insertBefore(d,f.querySelector("head > title"))),qt(d,l,a),d[At]=n,ht(d),l=d;break e;case"link":var v=mv("link","href",f).get(l+(a.href||""));if(v){for(var T=0;T<v.length;T++)if(d=v[T],d.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&d.getAttribute("rel")===(a.rel==null?null:a.rel)&&d.getAttribute("title")===(a.title==null?null:a.title)&&d.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){v.splice(T,1);break t}}d=f.createElement(l),qt(d,l,a),f.head.appendChild(d);break;case"meta":if(v=mv("meta","content",f).get(l+(a.content||""))){for(T=0;T<v.length;T++)if(d=v[T],d.getAttribute("content")===(a.content==null?null:""+a.content)&&d.getAttribute("name")===(a.name==null?null:a.name)&&d.getAttribute("property")===(a.property==null?null:a.property)&&d.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&d.getAttribute("charset")===(a.charSet==null?null:a.charSet)){v.splice(T,1);break t}}d=f.createElement(l),qt(d,l,a),f.head.appendChild(d);break;default:throw Error(s(468,l))}d[At]=n,ht(d),l=d}n.stateNode=l}else pv(f,n.type,n.stateNode);else n.stateNode=dv(f,l,n.memoizedProps);else d!==l?(d===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):d.count--,l===null?pv(f,n.type,n.stateNode):dv(f,l,n.memoizedProps)):l===null&&n.stateNode!==null&&vd(n,n.memoizedProps,a.memoizedProps)}break;case 27:gn(r,n),yn(n),l&512&&(dt||a===null||hi(a,a.return)),a!==null&&l&4&&vd(n,n.memoizedProps,a.memoizedProps);break;case 5:if(gn(r,n),yn(n),l&512&&(dt||a===null||hi(a,a.return)),n.flags&32){f=n.stateNode;try{Rn(f,"")}catch(q){We(n,n.return,q)}}l&4&&n.stateNode!=null&&(f=n.memoizedProps,vd(n,f,a!==null?a.memoizedProps:f)),l&1024&&(Ad=!0);break;case 6:if(gn(r,n),yn(n),l&4){if(n.stateNode===null)throw Error(s(162));l=n.memoizedProps,a=n.stateNode;try{a.nodeValue=l}catch(q){We(n,n.return,q)}}break;case 3:if(kc=null,f=Fn,Fn=Pc(r.containerInfo),gn(r,n),Fn=f,yn(n),l&4&&a!==null&&a.memoizedState.isDehydrated)try{Nl(r.containerInfo)}catch(q){We(n,n.return,q)}Ad&&(Ad=!1,T_(n));break;case 4:l=Fn,Fn=Pc(n.stateNode.containerInfo),gn(r,n),yn(n),Fn=l;break;case 12:gn(r,n),yn(n);break;case 13:gn(r,n),yn(n),n.child.flags&8192&&n.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Dd=Sn()),l&4&&(l=n.updateQueue,l!==null&&(n.updateQueue=null,wd(n,l)));break;case 22:f=n.memoizedState!==null;var I=a!==null&&a.memoizedState!==null,B=Ki,Y=dt;if(Ki=B||f,dt=Y||I,gn(r,n),dt=Y,Ki=B,yn(n),l&8192)e:for(r=n.stateNode,r._visibility=f?r._visibility&-2:r._visibility|1,f&&(a===null||I||Ki||dt||Us(n)),a=null,r=n;;){if(r.tag===5||r.tag===26){if(a===null){I=a=r;try{if(d=I.stateNode,f)v=d.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none";else{T=I.stateNode;var W=I.memoizedProps.style,j=W!=null&&W.hasOwnProperty("display")?W.display:null;T.style.display=j==null||typeof j=="boolean"?"":(""+j).trim()}}catch(q){We(I,I.return,q)}}}else if(r.tag===6){if(a===null){I=r;try{I.stateNode.nodeValue=f?"":I.memoizedProps}catch(q){We(I,I.return,q)}}}else if((r.tag!==22&&r.tag!==23||r.memoizedState===null||r===n)&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break e;for(;r.sibling===null;){if(r.return===null||r.return===n)break e;a===r&&(a=null),r=r.return}a===r&&(a=null),r.sibling.return=r.return,r=r.sibling}l&4&&(l=n.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,wd(n,a))));break;case 19:gn(r,n),yn(n),l&4&&(l=n.updateQueue,l!==null&&(n.updateQueue=null,wd(n,l)));break;case 30:break;case 21:break;default:gn(r,n),yn(n)}}function yn(n){var r=n.flags;if(r&2){try{for(var a,l=n.return;l!==null;){if(d_(l)){a=l;break}l=l.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var f=a.stateNode,d=Ed(n);Tc(n,d,f);break;case 5:var v=a.stateNode;a.flags&32&&(Rn(v,""),a.flags&=-33);var T=Ed(n);Tc(n,T,v);break;case 3:case 4:var I=a.stateNode.containerInfo,B=Ed(n);Td(n,B,I);break;default:throw Error(s(161))}}catch(Y){We(n,n.return,Y)}n.flags&=-3}r&4096&&(n.flags&=-4097)}function T_(n){if(n.subtreeFlags&1024)for(n=n.child;n!==null;){var r=n;T_(r),r.tag===5&&r.flags&1024&&r.stateNode.reset(),n=n.sibling}}function wr(n,r){if(r.subtreeFlags&8772)for(r=r.child;r!==null;)g_(n,r.alternate,r),r=r.sibling}function Us(n){for(n=n.child;n!==null;){var r=n;switch(r.tag){case 0:case 11:case 14:case 15:Ar(4,r,r.return),Us(r);break;case 1:hi(r,r.return);var a=r.stateNode;typeof a.componentWillUnmount=="function"&&h_(r,r.return,a),Us(r);break;case 27:wl(r.stateNode);case 26:case 5:hi(r,r.return),Us(r);break;case 22:r.memoizedState===null&&Us(r);break;case 30:Us(r);break;default:Us(r)}n=n.sibling}}function Sr(n,r,a){for(a=a&&(r.subtreeFlags&8772)!==0,r=r.child;r!==null;){var l=r.alternate,f=n,d=r,v=d.flags;switch(d.tag){case 0:case 11:case 15:Sr(f,d,a),dl(4,d);break;case 1:if(Sr(f,d,a),l=d,f=l.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(B){We(l,l.return,B)}if(l=d,f=l.updateQueue,f!==null){var T=l.stateNode;try{var I=f.shared.hiddenCallbacks;if(I!==null)for(f.shared.hiddenCallbacks=null,f=0;f<I.length;f++)Xg(I[f],T)}catch(B){We(l,l.return,B)}}a&&v&64&&c_(d),ml(d,d.return);break;case 27:m_(d);case 26:case 5:Sr(f,d,a),a&&l===null&&v&4&&f_(d),ml(d,d.return);break;case 12:Sr(f,d,a);break;case 13:Sr(f,d,a),a&&v&4&&v_(f,d);break;case 22:d.memoizedState===null&&Sr(f,d,a),ml(d,d.return);break;case 30:break;default:Sr(f,d,a)}r=r.sibling}}function Sd(n,r){var a=null;n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(a=n.memoizedState.cachePool.pool),n=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(n=r.memoizedState.cachePool.pool),n!==a&&(n!=null&&n.refCount++,a!=null&&Jo(a))}function bd(n,r){n=null,r.alternate!==null&&(n=r.alternate.memoizedState.cache),r=r.memoizedState.cache,r!==n&&(r.refCount++,n!=null&&Jo(n))}function fi(n,r,a,l){if(r.subtreeFlags&10256)for(r=r.child;r!==null;)A_(n,r,a,l),r=r.sibling}function A_(n,r,a,l){var f=r.flags;switch(r.tag){case 0:case 11:case 15:fi(n,r,a,l),f&2048&&dl(9,r);break;case 1:fi(n,r,a,l);break;case 3:fi(n,r,a,l),f&2048&&(n=null,r.alternate!==null&&(n=r.alternate.memoizedState.cache),r=r.memoizedState.cache,r!==n&&(r.refCount++,n!=null&&Jo(n)));break;case 12:if(f&2048){fi(n,r,a,l),n=r.stateNode;try{var d=r.memoizedProps,v=d.id,T=d.onPostCommit;typeof T=="function"&&T(v,r.alternate===null?"mount":"update",n.passiveEffectDuration,-0)}catch(I){We(r,r.return,I)}}else fi(n,r,a,l);break;case 13:fi(n,r,a,l);break;case 23:break;case 22:d=r.stateNode,v=r.alternate,r.memoizedState!==null?d._visibility&2?fi(n,r,a,l):pl(n,r):d._visibility&2?fi(n,r,a,l):(d._visibility|=2,Ba(n,r,a,l,(r.subtreeFlags&10256)!==0)),f&2048&&Sd(v,r);break;case 24:fi(n,r,a,l),f&2048&&bd(r.alternate,r);break;default:fi(n,r,a,l)}}function Ba(n,r,a,l,f){for(f=f&&(r.subtreeFlags&10256)!==0,r=r.child;r!==null;){var d=n,v=r,T=a,I=l,B=v.flags;switch(v.tag){case 0:case 11:case 15:Ba(d,v,T,I,f),dl(8,v);break;case 23:break;case 22:var Y=v.stateNode;v.memoizedState!==null?Y._visibility&2?Ba(d,v,T,I,f):pl(d,v):(Y._visibility|=2,Ba(d,v,T,I,f)),f&&B&2048&&Sd(v.alternate,v);break;case 24:Ba(d,v,T,I,f),f&&B&2048&&bd(v.alternate,v);break;default:Ba(d,v,T,I,f)}r=r.sibling}}function pl(n,r){if(r.subtreeFlags&10256)for(r=r.child;r!==null;){var a=n,l=r,f=l.flags;switch(l.tag){case 22:pl(a,l),f&2048&&Sd(l.alternate,l);break;case 24:pl(a,l),f&2048&&bd(l.alternate,l);break;default:pl(a,l)}r=r.sibling}}var gl=8192;function ja(n){if(n.subtreeFlags&gl)for(n=n.child;n!==null;)w_(n),n=n.sibling}function w_(n){switch(n.tag){case 26:ja(n),n.flags&gl&&n.memoizedState!==null&&Ob(Fn,n.memoizedState,n.memoizedProps);break;case 5:ja(n);break;case 3:case 4:var r=Fn;Fn=Pc(n.stateNode.containerInfo),ja(n),Fn=r;break;case 22:n.memoizedState===null&&(r=n.alternate,r!==null&&r.memoizedState!==null?(r=gl,gl=16777216,ja(n),gl=r):ja(n));break;default:ja(n)}}function S_(n){var r=n.alternate;if(r!==null&&(n=r.child,n!==null)){r.child=null;do r=n.sibling,n.sibling=null,n=r;while(n!==null)}}function yl(n){var r=n.deletions;if((n.flags&16)!==0){if(r!==null)for(var a=0;a<r.length;a++){var l=r[a];Pt=l,R_(l,n)}S_(n)}if(n.subtreeFlags&10256)for(n=n.child;n!==null;)b_(n),n=n.sibling}function b_(n){switch(n.tag){case 0:case 11:case 15:yl(n),n.flags&2048&&Ar(9,n,n.return);break;case 3:yl(n);break;case 12:yl(n);break;case 22:var r=n.stateNode;n.memoizedState!==null&&r._visibility&2&&(n.return===null||n.return.tag!==13)?(r._visibility&=-3,Ac(n)):yl(n);break;default:yl(n)}}function Ac(n){var r=n.deletions;if((n.flags&16)!==0){if(r!==null)for(var a=0;a<r.length;a++){var l=r[a];Pt=l,R_(l,n)}S_(n)}for(n=n.child;n!==null;){switch(r=n,r.tag){case 0:case 11:case 15:Ar(8,r,r.return),Ac(r);break;case 22:a=r.stateNode,a._visibility&2&&(a._visibility&=-3,Ac(r));break;default:Ac(r)}n=n.sibling}}function R_(n,r){for(;Pt!==null;){var a=Pt;switch(a.tag){case 0:case 11:case 15:Ar(8,a,r);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Jo(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,Pt=l;else e:for(a=n;Pt!==null;){l=Pt;var f=l.sibling,d=l.return;if(y_(l),l===a){Pt=null;break e}if(f!==null){f.return=d,Pt=f;break e}Pt=d}}}var KS={getCacheForType:function(n){var r=$t(bt),a=r.data.get(n);return a===void 0&&(a=n(),r.data.set(n,a)),a}},$S=typeof WeakMap=="function"?WeakMap:Map,Ge=0,Je=null,Ne=null,Le=0,Ke=0,_n=null,br=!1,qa=!1,Rd=!1,Yi=0,lt=0,Rr=0,zs=0,Id=0,xn=0,Ha=0,_l=null,on=null,Cd=!1,Dd=0,wc=1/0,Sc=null,Ir=null,jt=0,Cr=null,Fa=null,Ga=0,Od=0,Nd=null,I_=null,vl=0,Md=null;function vn(){if((Ge&2)!==0&&Le!==0)return Le&-Le;if($.T!==null){var n=Ma;return n!==0?n:zd()}return ur()}function C_(){xn===0&&(xn=(Le&536870912)===0||je?Co():536870912);var n=Pn.current;return n!==null&&(n.flags|=32),xn}function En(n,r,a){(n===Je&&(Ke===2||Ke===9)||n.cancelPendingCommit!==null)&&(Ka(n,0),Dr(n,Le,xn,!1)),Ri(n,a),((Ge&2)===0||n!==Je)&&(n===Je&&((Ge&2)===0&&(zs|=a),lt===4&&Dr(n,Le,xn,!1)),di(n))}function D_(n,r,a){if((Ge&6)!==0)throw Error(s(327));var l=!a&&(r&124)===0&&(r&n.expiredLanes)===0||hs(n,r),f=l?XS(n,r):xd(n,r,!0),d=l;do{if(f===0){qa&&!l&&Dr(n,r,0,!1);break}else{if(a=n.current.alternate,d&&!YS(a)){f=xd(n,r,!1),d=!1;continue}if(f===2){if(d=r,n.errorRecoveryDisabledLanes&d)var v=0;else v=n.pendingLanes&-536870913,v=v!==0?v:v&536870912?536870912:0;if(v!==0){r=v;e:{var T=n;f=_l;var I=T.current.memoizedState.isDehydrated;if(I&&(Ka(T,v).flags|=256),v=xd(T,v,!1),v!==2){if(Rd&&!I){T.errorRecoveryDisabledLanes|=d,zs|=d,f=4;break e}d=on,on=f,d!==null&&(on===null?on=d:on.push.apply(on,d))}f=v}if(d=!1,f!==2)continue}}if(f===1){Ka(n,0),Dr(n,r,0,!0);break}e:{switch(l=n,d=f,d){case 0:case 1:throw Error(s(345));case 4:if((r&4194048)!==r)break;case 6:Dr(l,r,xn,!br);break e;case 2:on=null;break;case 3:case 5:break;default:throw Error(s(329))}if((r&62914560)===r&&(f=Dd+300-Sn(),10<f)){if(Dr(l,r,xn,!br),ua(l,0,!0)!==0)break e;l.timeoutHandle=rv(O_.bind(null,l,a,on,Sc,Cd,r,xn,zs,Ha,br,d,2,-0,0),f);break e}O_(l,a,on,Sc,Cd,r,xn,zs,Ha,br,d,0,-0,0)}}break}while(!0);di(n)}function O_(n,r,a,l,f,d,v,T,I,B,Y,W,j,q){if(n.timeoutHandle=-1,W=r.subtreeFlags,(W&8192||(W&16785408)===16785408)&&(Rl={stylesheets:null,count:0,unsuspend:Db},w_(r),W=Nb(),W!==null)){n.cancelPendingCommit=W(L_.bind(null,n,r,d,a,l,f,v,T,I,Y,1,j,q)),Dr(n,d,v,!B);return}L_(n,r,d,a,l,f,v,T,I)}function YS(n){for(var r=n;;){var a=r.tag;if((a===0||a===11||a===15)&&r.flags&16384&&(a=r.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var f=a[l],d=f.getSnapshot;f=f.value;try{if(!mn(d(),f))return!1}catch{return!1}}if(a=r.child,r.subtreeFlags&16384&&a!==null)a.return=r,r=a;else{if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function Dr(n,r,a,l){r&=~Id,r&=~zs,n.suspendedLanes|=r,n.pingedLanes&=~r,l&&(n.warmLanes|=r),l=n.expirationTimes;for(var f=r;0<f;){var d=31-Kt(f),v=1<<d;l[d]=-1,f&=~v}a!==0&&Zn(n,a,r)}function bc(){return(Ge&6)===0?(El(0),!1):!0}function Vd(){if(Ne!==null){if(Ke===0)var n=Ne.return;else n=Ne,Bi=Vs=null,Xf(n),Ua=null,cl=0,n=Ne;for(;n!==null;)u_(n.alternate,n),n=n.return;Ne=null}}function Ka(n,r){var a=n.timeoutHandle;a!==-1&&(n.timeoutHandle=-1,fb(a)),a=n.cancelPendingCommit,a!==null&&(n.cancelPendingCommit=null,a()),Vd(),Je=n,Ne=a=Li(n.current,null),Le=r,Ke=0,_n=null,br=!1,qa=hs(n,r),Rd=!1,Ha=xn=Id=zs=Rr=lt=0,on=_l=null,Cd=!1,(r&8)!==0&&(r|=r&32);var l=n.entangledLanes;if(l!==0)for(n=n.entanglements,l&=r;0<l;){var f=31-Kt(l),d=1<<f;r|=n[f],l&=~d}return Yi=r,$u(),a}function N_(n,r){Ie=null,$.H=fc,r===tl||r===nc?(r=Yg(),Ke=3):r===Gg?(r=Yg(),Ke=4):Ke=r===Qy?8:r!==null&&typeof r=="object"&&typeof r.then=="function"?6:1,_n=r,Ne===null&&(lt=1,yc(n,On(r,n.current)))}function M_(){var n=$.H;return $.H=fc,n===null?fc:n}function V_(){var n=$.A;return $.A=KS,n}function Pd(){lt=4,br||(Le&4194048)!==Le&&Pn.current!==null||(qa=!0),(Rr&134217727)===0&&(zs&134217727)===0||Je===null||Dr(Je,Le,xn,!1)}function xd(n,r,a){var l=Ge;Ge|=2;var f=M_(),d=V_();(Je!==n||Le!==r)&&(Sc=null,Ka(n,r)),r=!1;var v=lt;e:do try{if(Ke!==0&&Ne!==null){var T=Ne,I=_n;switch(Ke){case 8:Vd(),v=6;break e;case 3:case 2:case 9:case 6:Pn.current===null&&(r=!0);var B=Ke;if(Ke=0,_n=null,$a(n,T,I,B),a&&qa){v=0;break e}break;default:B=Ke,Ke=0,_n=null,$a(n,T,I,B)}}QS(),v=lt;break}catch(Y){N_(n,Y)}while(!0);return r&&n.shellSuspendCounter++,Bi=Vs=null,Ge=l,$.H=f,$.A=d,Ne===null&&(Je=null,Le=0,$u()),v}function QS(){for(;Ne!==null;)P_(Ne)}function XS(n,r){var a=Ge;Ge|=2;var l=M_(),f=V_();Je!==n||Le!==r?(Sc=null,wc=Sn()+500,Ka(n,r)):qa=hs(n,r);e:do try{if(Ke!==0&&Ne!==null){r=Ne;var d=_n;t:switch(Ke){case 1:Ke=0,_n=null,$a(n,r,d,1);break;case 2:case 9:if(Kg(d)){Ke=0,_n=null,x_(r);break}r=function(){Ke!==2&&Ke!==9||Je!==n||(Ke=7),di(n)},d.then(r,r);break e;case 3:Ke=7;break e;case 4:Ke=5;break e;case 7:Kg(d)?(Ke=0,_n=null,x_(r)):(Ke=0,_n=null,$a(n,r,d,7));break;case 5:var v=null;switch(Ne.tag){case 26:v=Ne.memoizedState;case 5:case 27:var T=Ne;if(!v||gv(v)){Ke=0,_n=null;var I=T.sibling;if(I!==null)Ne=I;else{var B=T.return;B!==null?(Ne=B,Rc(B)):Ne=null}break t}}Ke=0,_n=null,$a(n,r,d,5);break;case 6:Ke=0,_n=null,$a(n,r,d,6);break;case 8:Vd(),lt=6;break e;default:throw Error(s(462))}}WS();break}catch(Y){N_(n,Y)}while(!0);return Bi=Vs=null,$.H=l,$.A=f,Ge=a,Ne!==null?0:(Je=null,Le=0,$u(),lt)}function WS(){for(;Ne!==null&&!So();)P_(Ne)}function P_(n){var r=o_(n.alternate,n,Yi);n.memoizedProps=n.pendingProps,r===null?Rc(n):Ne=r}function x_(n){var r=n,a=r.alternate;switch(r.tag){case 15:case 0:r=t_(a,r,r.pendingProps,r.type,void 0,Le);break;case 11:r=t_(a,r,r.pendingProps,r.type.render,r.ref,Le);break;case 5:Xf(r);default:u_(a,r),r=Ne=kg(r,Yi),r=o_(a,r,Yi)}n.memoizedProps=n.pendingProps,r===null?Rc(n):Ne=r}function $a(n,r,a,l){Bi=Vs=null,Xf(r),Ua=null,cl=0;var f=r.return;try{if(BS(n,f,r,a,Le)){lt=1,yc(n,On(a,n.current)),Ne=null;return}}catch(d){if(f!==null)throw Ne=f,d;lt=1,yc(n,On(a,n.current)),Ne=null;return}r.flags&32768?(je||l===1?n=!0:qa||(Le&536870912)!==0?n=!1:(br=n=!0,(l===2||l===9||l===3||l===6)&&(l=Pn.current,l!==null&&l.tag===13&&(l.flags|=16384))),k_(r,n)):Rc(r)}function Rc(n){var r=n;do{if((r.flags&32768)!==0){k_(r,br);return}n=r.return;var a=qS(r.alternate,r,Yi);if(a!==null){Ne=a;return}if(r=r.sibling,r!==null){Ne=r;return}Ne=r=n}while(r!==null);lt===0&&(lt=5)}function k_(n,r){do{var a=HS(n.alternate,n);if(a!==null){a.flags&=32767,Ne=a;return}if(a=n.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!r&&(n=n.sibling,n!==null)){Ne=n;return}Ne=n=a}while(n!==null);lt=6,Ne=null}function L_(n,r,a,l,f,d,v,T,I){n.cancelPendingCommit=null;do Ic();while(jt!==0);if((Ge&6)!==0)throw Error(s(327));if(r!==null){if(r===n.current)throw Error(s(177));if(d=r.lanes|r.childLanes,d|=bf,Oo(n,a,d,v,T,I),n===Je&&(Ne=Je=null,Le=0),Fa=r,Cr=n,Ga=a,Od=d,Nd=f,I_=l,(r.subtreeFlags&10256)!==0||(r.flags&10256)!==0?(n.callbackNode=null,n.callbackPriority=0,tb(os,function(){return q_(),null})):(n.callbackNode=null,n.callbackPriority=0),l=(r.flags&13878)!==0,(r.subtreeFlags&13878)!==0||l){l=$.T,$.T=null,f=se.p,se.p=2,v=Ge,Ge|=4;try{FS(n,r,a)}finally{Ge=v,se.p=f,$.T=l}}jt=1,U_(),z_(),B_()}}function U_(){if(jt===1){jt=0;var n=Cr,r=Fa,a=(r.flags&13878)!==0;if((r.subtreeFlags&13878)!==0||a){a=$.T,$.T=null;var l=se.p;se.p=2;var f=Ge;Ge|=4;try{E_(r,n);var d=$d,v=Rg(n.containerInfo),T=d.focusedElem,I=d.selectionRange;if(v!==T&&T&&T.ownerDocument&&bg(T.ownerDocument.documentElement,T)){if(I!==null&&Ef(T)){var B=I.start,Y=I.end;if(Y===void 0&&(Y=B),"selectionStart"in T)T.selectionStart=B,T.selectionEnd=Math.min(Y,T.value.length);else{var W=T.ownerDocument||document,j=W&&W.defaultView||window;if(j.getSelection){var q=j.getSelection(),Ee=T.textContent.length,ge=Math.min(I.start,Ee),Xe=I.end===void 0?ge:Math.min(I.end,Ee);!q.extend&&ge>Xe&&(v=Xe,Xe=ge,ge=v);var k=Sg(T,ge),M=Sg(T,Xe);if(k&&M&&(q.rangeCount!==1||q.anchorNode!==k.node||q.anchorOffset!==k.offset||q.focusNode!==M.node||q.focusOffset!==M.offset)){var z=W.createRange();z.setStart(k.node,k.offset),q.removeAllRanges(),ge>Xe?(q.addRange(z),q.extend(M.node,M.offset)):(z.setEnd(M.node,M.offset),q.addRange(z))}}}}for(W=[],q=T;q=q.parentNode;)q.nodeType===1&&W.push({element:q,left:q.scrollLeft,top:q.scrollTop});for(typeof T.focus=="function"&&T.focus(),T=0;T<W.length;T++){var X=W[T];X.element.scrollLeft=X.left,X.element.scrollTop=X.top}}zc=!!Kd,$d=Kd=null}finally{Ge=f,se.p=l,$.T=a}}n.current=r,jt=2}}function z_(){if(jt===2){jt=0;var n=Cr,r=Fa,a=(r.flags&8772)!==0;if((r.subtreeFlags&8772)!==0||a){a=$.T,$.T=null;var l=se.p;se.p=2;var f=Ge;Ge|=4;try{g_(n,r.alternate,r)}finally{Ge=f,se.p=l,$.T=a}}jt=3}}function B_(){if(jt===4||jt===3){jt=0,Au();var n=Cr,r=Fa,a=Ga,l=I_;(r.subtreeFlags&10256)!==0||(r.flags&10256)!==0?jt=5:(jt=0,Fa=Cr=null,j_(n,n.pendingLanes));var f=n.pendingLanes;if(f===0&&(Ir=null),ca(a),r=r.stateNode,Fe&&typeof Fe.onCommitFiberRoot=="function")try{Fe.onCommitFiberRoot(at,r,void 0,(r.current.flags&128)===128)}catch{}if(l!==null){r=$.T,f=se.p,se.p=2,$.T=null;try{for(var d=n.onRecoverableError,v=0;v<l.length;v++){var T=l[v];d(T.value,{componentStack:T.stack})}}finally{$.T=r,se.p=f}}(Ga&3)!==0&&Ic(),di(n),f=n.pendingLanes,(a&4194090)!==0&&(f&42)!==0?n===Md?vl++:(vl=0,Md=n):vl=0,El(0)}}function j_(n,r){(n.pooledCacheLanes&=r)===0&&(r=n.pooledCache,r!=null&&(n.pooledCache=null,Jo(r)))}function Ic(n){return U_(),z_(),B_(),q_()}function q_(){if(jt!==5)return!1;var n=Cr,r=Od;Od=0;var a=ca(Ga),l=$.T,f=se.p;try{se.p=32>a?32:a,$.T=null,a=Nd,Nd=null;var d=Cr,v=Ga;if(jt=0,Fa=Cr=null,Ga=0,(Ge&6)!==0)throw Error(s(331));var T=Ge;if(Ge|=4,b_(d.current),A_(d,d.current,v,a),Ge=T,El(0,!1),Fe&&typeof Fe.onPostCommitFiberRoot=="function")try{Fe.onPostCommitFiberRoot(at,d)}catch{}return!0}finally{se.p=f,$.T=l,j_(n,r)}}function H_(n,r,a){r=On(a,r),r=cd(n.stateNode,r,2),n=_r(n,r,2),n!==null&&(Ri(n,2),di(n))}function We(n,r,a){if(n.tag===3)H_(n,n,a);else for(;r!==null;){if(r.tag===3){H_(r,n,a);break}else if(r.tag===1){var l=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Ir===null||!Ir.has(l))){n=On(a,n),a=$y(2),l=_r(r,a,2),l!==null&&(Yy(a,l,r,n),Ri(l,2),di(l));break}}r=r.return}}function kd(n,r,a){var l=n.pingCache;if(l===null){l=n.pingCache=new $S;var f=new Set;l.set(r,f)}else f=l.get(r),f===void 0&&(f=new Set,l.set(r,f));f.has(a)||(Rd=!0,f.add(a),n=ZS.bind(null,n,r,a),r.then(n,n))}function ZS(n,r,a){var l=n.pingCache;l!==null&&l.delete(r),n.pingedLanes|=n.suspendedLanes&a,n.warmLanes&=~a,Je===n&&(Le&a)===a&&(lt===4||lt===3&&(Le&62914560)===Le&&300>Sn()-Dd?(Ge&2)===0&&Ka(n,0):Id|=a,Ha===Le&&(Ha=0)),di(n)}function F_(n,r){r===0&&(r=Do()),n=Ca(n,r),n!==null&&(Ri(n,r),di(n))}function JS(n){var r=n.memoizedState,a=0;r!==null&&(a=r.retryLane),F_(n,a)}function eb(n,r){var a=0;switch(n.tag){case 13:var l=n.stateNode,f=n.memoizedState;f!==null&&(a=f.retryLane);break;case 19:l=n.stateNode;break;case 22:l=n.stateNode._retryCache;break;default:throw Error(s(314))}l!==null&&l.delete(r),F_(n,a)}function tb(n,r){return ss(n,r)}var Cc=null,Ya=null,Ld=!1,Dc=!1,Ud=!1,Bs=0;function di(n){n!==Ya&&n.next===null&&(Ya===null?Cc=Ya=n:Ya=Ya.next=n),Dc=!0,Ld||(Ld=!0,ib())}function El(n,r){if(!Ud&&Dc){Ud=!0;do for(var a=!1,l=Cc;l!==null;){if(n!==0){var f=l.pendingLanes;if(f===0)var d=0;else{var v=l.suspendedLanes,T=l.pingedLanes;d=(1<<31-Kt(42|n)+1)-1,d&=f&~(v&~T),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(a=!0,Y_(l,d))}else d=Le,d=ua(l,l===Je?d:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(d&3)===0||hs(l,d)||(a=!0,Y_(l,d));l=l.next}while(a);Ud=!1}}function nb(){G_()}function G_(){Dc=Ld=!1;var n=0;Bs!==0&&(hb()&&(n=Bs),Bs=0);for(var r=Sn(),a=null,l=Cc;l!==null;){var f=l.next,d=K_(l,r);d===0?(l.next=null,a===null?Cc=f:a.next=f,f===null&&(Ya=a)):(a=l,(n!==0||(d&3)!==0)&&(Dc=!0)),l=f}El(n)}function K_(n,r){for(var a=n.suspendedLanes,l=n.pingedLanes,f=n.expirationTimes,d=n.pendingLanes&-62914561;0<d;){var v=31-Kt(d),T=1<<v,I=f[v];I===-1?((T&a)===0||(T&l)!==0)&&(f[v]=Io(T,r)):I<=r&&(n.expiredLanes|=T),d&=~T}if(r=Je,a=Le,a=ua(n,n===r?a:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),l=n.callbackNode,a===0||n===r&&(Ke===2||Ke===9)||n.cancelPendingCommit!==null)return l!==null&&l!==null&&as(l),n.callbackNode=null,n.callbackPriority=0;if((a&3)===0||hs(n,a)){if(r=a&-a,r===n.callbackPriority)return r;switch(l!==null&&as(l),ca(a)){case 2:case 8:a=oa;break;case 32:a=os;break;case 268435456:a=la;break;default:a=os}return l=$_.bind(null,n),a=ss(a,l),n.callbackPriority=r,n.callbackNode=a,r}return l!==null&&l!==null&&as(l),n.callbackPriority=2,n.callbackNode=null,2}function $_(n,r){if(jt!==0&&jt!==5)return n.callbackNode=null,n.callbackPriority=0,null;var a=n.callbackNode;if(Ic()&&n.callbackNode!==a)return null;var l=Le;return l=ua(n,n===Je?l:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),l===0?null:(D_(n,l,r),K_(n,Sn()),n.callbackNode!=null&&n.callbackNode===a?$_.bind(null,n):null)}function Y_(n,r){if(Ic())return null;D_(n,r,!0)}function ib(){db(function(){(Ge&6)!==0?ss(bo,nb):G_()})}function zd(){return Bs===0&&(Bs=Co()),Bs}function Q_(n){return n==null||typeof n=="symbol"||typeof n=="boolean"?null:typeof n=="function"?n:ga(""+n)}function X_(n,r){var a=r.ownerDocument.createElement("input");return a.name=r.name,a.value=r.value,n.id&&a.setAttribute("form",n.id),r.parentNode.insertBefore(a,r),n=new FormData(n),a.parentNode.removeChild(a),n}function rb(n,r,a,l,f){if(r==="submit"&&a&&a.stateNode===f){var d=Q_((f[pt]||null).action),v=l.submitter;v&&(r=(r=v[pt]||null)?Q_(r.formAction):v.getAttribute("formAction"),r!==null&&(d=r,v=null));var T=new ya("action","action",null,l,f);n.push({event:T,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Bs!==0){var I=v?X_(f,v):new FormData(f);sd(a,{pending:!0,data:I,method:f.method,action:d},null,I)}}else typeof d=="function"&&(T.preventDefault(),I=v?X_(f,v):new FormData(f),sd(a,{pending:!0,data:I,method:f.method,action:d},d,I))},currentTarget:f}]})}}for(var Bd=0;Bd<Sf.length;Bd++){var jd=Sf[Bd],sb=jd.toLowerCase(),ab=jd[0].toUpperCase()+jd.slice(1);Hn(sb,"on"+ab)}Hn(Dg,"onAnimationEnd"),Hn(Og,"onAnimationIteration"),Hn(Ng,"onAnimationStart"),Hn("dblclick","onDoubleClick"),Hn("focusin","onFocus"),Hn("focusout","onBlur"),Hn(wS,"onTransitionRun"),Hn(SS,"onTransitionStart"),Hn(bS,"onTransitionCancel"),Hn(Mg,"onTransitionEnd"),Ci("onMouseEnter",["mouseout","mouseover"]),Ci("onMouseLeave",["mouseout","mouseover"]),Ci("onPointerEnter",["pointerout","pointerover"]),Ci("onPointerLeave",["pointerout","pointerover"]),jn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),jn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),jn("onBeforeInput",["compositionend","keypress","textInput","paste"]),jn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),jn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),jn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Tl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ob=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Tl));function W_(n,r){r=(r&4)!==0;for(var a=0;a<n.length;a++){var l=n[a],f=l.event;l=l.listeners;e:{var d=void 0;if(r)for(var v=l.length-1;0<=v;v--){var T=l[v],I=T.instance,B=T.currentTarget;if(T=T.listener,I!==d&&f.isPropagationStopped())break e;d=T,f.currentTarget=B;try{d(f)}catch(Y){gc(Y)}f.currentTarget=null,d=I}else for(v=0;v<l.length;v++){if(T=l[v],I=T.instance,B=T.currentTarget,T=T.listener,I!==d&&f.isPropagationStopped())break e;d=T,f.currentTarget=B;try{d(f)}catch(Y){gc(Y)}f.currentTarget=null,d=I}}}}function Me(n,r){var a=r[Mo];a===void 0&&(a=r[Mo]=new Set);var l=n+"__bubble";a.has(l)||(Z_(r,n,2,!1),a.add(l))}function qd(n,r,a){var l=0;r&&(l|=4),Z_(a,n,l,r)}var Oc="_reactListening"+Math.random().toString(36).slice(2);function Hd(n){if(!n[Oc]){n[Oc]=!0,Vo.forEach(function(a){a!=="selectionchange"&&(ob.has(a)||qd(a,!1,n),qd(a,!0,n))});var r=n.nodeType===9?n:n.ownerDocument;r===null||r[Oc]||(r[Oc]=!0,qd("selectionchange",!1,r))}}function Z_(n,r,a,l){switch(Av(r)){case 2:var f=Pb;break;case 8:f=xb;break;default:f=im}a=f.bind(null,r,a,n),f=void 0,!Cn||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(f=!0),l?f!==void 0?n.addEventListener(r,a,{capture:!0,passive:f}):n.addEventListener(r,a,!0):f!==void 0?n.addEventListener(r,a,{passive:f}):n.addEventListener(r,a,!1)}function Fd(n,r,a,l,f){var d=l;if((r&1)===0&&(r&2)===0&&l!==null)e:for(;;){if(l===null)return;var v=l.tag;if(v===3||v===4){var T=l.stateNode.containerInfo;if(T===f)break;if(v===4)for(v=l.return;v!==null;){var I=v.tag;if((I===3||I===4)&&v.stateNode.containerInfo===f)return;v=v.return}for(;T!==null;){if(v=Ii(T),v===null)return;if(I=v.tag,I===5||I===6||I===26||I===27){l=d=v;continue e}T=T.parentNode}}l=l.return}Mu(function(){var B=d,Y=In(a),W=[];e:{var j=Vg.get(n);if(j!==void 0){var q=ya,Ee=n;switch(n){case"keypress":if(ri(a)===0)break e;case"keydown":case"keyup":q=wa;break;case"focusin":Ee="focus",q=Ea;break;case"focusout":Ee="blur",q=Ea;break;case"beforeblur":case"afterblur":q=Ea;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":q=Dn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":q=gf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":q=Bu;break;case Dg:case Og:case Ng:q=Ta;break;case Mg:q=qu;break;case"scroll":case"scrollend":q=Vu;break;case"wheel":q=Sa;break;case"copy":case"cut":case"paste":q=Aa;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":q=Go;break;case"toggle":case"beforetoggle":q=Fu}var ge=(r&4)!==0,Xe=!ge&&(n==="scroll"||n==="scrollend"),k=ge?j!==null?j+"Capture":null:j;ge=[];for(var M=B,z;M!==null;){var X=M;if(z=X.stateNode,X=X.tag,X!==5&&X!==26&&X!==27||z===null||k===null||(X=vs(M,k),X!=null&&ge.push(Al(M,X,z))),Xe)break;M=M.return}0<ge.length&&(j=new q(j,Ee,null,a,Y),W.push({event:j,listeners:ge}))}}if((r&7)===0){e:{if(j=n==="mouseover"||n==="pointerover",q=n==="mouseout"||n==="pointerout",j&&a!==Ni&&(Ee=a.relatedTarget||a.fromElement)&&(Ii(Ee)||Ee[bn]))break e;if((q||j)&&(j=Y.window===Y?Y:(j=Y.ownerDocument)?j.defaultView||j.parentWindow:window,q?(Ee=a.relatedTarget||a.toElement,q=B,Ee=Ee?Ii(Ee):null,Ee!==null&&(Xe=u(Ee),ge=Ee.tag,Ee!==Xe||ge!==5&&ge!==27&&ge!==6)&&(Ee=null)):(q=null,Ee=B),q!==Ee)){if(ge=Dn,X="onMouseLeave",k="onMouseEnter",M="mouse",(n==="pointerout"||n==="pointerover")&&(ge=Go,X="onPointerLeave",k="onPointerEnter",M="pointer"),Xe=q==null?j:ei(q),z=Ee==null?j:ei(Ee),j=new ge(X,M+"leave",q,a,Y),j.target=Xe,j.relatedTarget=z,X=null,Ii(Y)===B&&(ge=new ge(k,M+"enter",Ee,a,Y),ge.target=z,ge.relatedTarget=Xe,X=ge),Xe=X,q&&Ee)t:{for(ge=q,k=Ee,M=0,z=ge;z;z=Qa(z))M++;for(z=0,X=k;X;X=Qa(X))z++;for(;0<M-z;)ge=Qa(ge),M--;for(;0<z-M;)k=Qa(k),z--;for(;M--;){if(ge===k||k!==null&&ge===k.alternate)break t;ge=Qa(ge),k=Qa(k)}ge=null}else ge=null;q!==null&&J_(W,j,q,ge,!1),Ee!==null&&Xe!==null&&J_(W,Xe,Ee,ge,!0)}}e:{if(j=B?ei(B):window,q=j.nodeName&&j.nodeName.toLowerCase(),q==="select"||q==="input"&&j.type==="file")var he=_g;else if(St(j))if(vg)he=ES;else{he=_S;var Oe=yS}else q=j.nodeName,!q||q.toLowerCase()!=="input"||j.type!=="checkbox"&&j.type!=="radio"?B&&Uo(B.elementType)&&(he=_g):he=vS;if(he&&(he=he(n,B))){ki(W,he,a,Y);break e}Oe&&Oe(n,j,B),n==="focusout"&&B&&j.type==="number"&&B.memoizedProps.value!=null&&dr(j,"number",j.value)}switch(Oe=B?ei(B):window,n){case"focusin":(St(Oe)||Oe.contentEditable==="true")&&(ba=Oe,Tf=B,Yo=null);break;case"focusout":Yo=Tf=ba=null;break;case"mousedown":Af=!0;break;case"contextmenu":case"mouseup":case"dragend":Af=!1,Ig(W,a,Y);break;case"selectionchange":if(AS)break;case"keydown":case"keyup":Ig(W,a,Y)}var fe;if(oi)e:{switch(n){case"compositionstart":var ye="onCompositionStart";break e;case"compositionend":ye="onCompositionEnd";break e;case"compositionupdate":ye="onCompositionUpdate";break e}ye=void 0}else xe?F(n,a)&&(ye="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(ye="onCompositionStart");ye&&(_&&a.locale!=="ko"&&(xe||ye!=="onCompositionStart"?ye==="onCompositionEnd"&&xe&&(fe=Bo()):(ii=Y,mr="value"in ii?ii.value:ii.textContent,xe=!0)),Oe=Nc(B,ye),0<Oe.length&&(ye=new Ho(ye,n,null,a,Y),W.push({event:ye,listeners:Oe}),fe?ye.data=fe:(fe=re(a),fe!==null&&(ye.data=fe)))),(fe=y?wt(n,a):ke(n,a))&&(ye=Nc(B,"onBeforeInput"),0<ye.length&&(Oe=new Ho("onBeforeInput","beforeinput",null,a,Y),W.push({event:Oe,listeners:ye}),Oe.data=fe)),rb(W,n,B,a,Y)}W_(W,r)})}function Al(n,r,a){return{instance:n,listener:r,currentTarget:a}}function Nc(n,r){for(var a=r+"Capture",l=[];n!==null;){var f=n,d=f.stateNode;if(f=f.tag,f!==5&&f!==26&&f!==27||d===null||(f=vs(n,a),f!=null&&l.unshift(Al(n,f,d)),f=vs(n,r),f!=null&&l.push(Al(n,f,d))),n.tag===3)return l;n=n.return}return[]}function Qa(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5&&n.tag!==27);return n||null}function J_(n,r,a,l,f){for(var d=r._reactName,v=[];a!==null&&a!==l;){var T=a,I=T.alternate,B=T.stateNode;if(T=T.tag,I!==null&&I===l)break;T!==5&&T!==26&&T!==27||B===null||(I=B,f?(B=vs(a,d),B!=null&&v.unshift(Al(a,B,I))):f||(B=vs(a,d),B!=null&&v.push(Al(a,B,I)))),a=a.return}v.length!==0&&n.push({event:r,listeners:v})}var lb=/\r\n?/g,ub=/\u0000|\uFFFD/g;function ev(n){return(typeof n=="string"?n:""+n).replace(lb,`
`).replace(ub,"")}function tv(n,r){return r=ev(r),ev(n)===r}function Mc(){}function Qe(n,r,a,l,f,d){switch(a){case"children":typeof l=="string"?r==="body"||r==="textarea"&&l===""||Rn(n,l):(typeof l=="number"||typeof l=="bigint")&&r!=="body"&&Rn(n,""+l);break;case"className":ti(n,"class",l);break;case"tabIndex":ti(n,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":ti(n,a,l);break;case"style":Lo(n,l,d);break;case"data":if(r!=="object"){ti(n,"data",l);break}case"src":case"href":if(l===""&&(r!=="a"||a!=="href")){n.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){n.removeAttribute(a);break}l=ga(""+l),n.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){n.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(a==="formAction"?(r!=="input"&&Qe(n,r,"name",f.name,f,null),Qe(n,r,"formEncType",f.formEncType,f,null),Qe(n,r,"formMethod",f.formMethod,f,null),Qe(n,r,"formTarget",f.formTarget,f,null)):(Qe(n,r,"encType",f.encType,f,null),Qe(n,r,"method",f.method,f,null),Qe(n,r,"target",f.target,f,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){n.removeAttribute(a);break}l=ga(""+l),n.setAttribute(a,l);break;case"onClick":l!=null&&(n.onclick=Mc);break;case"onScroll":l!=null&&Me("scroll",n);break;case"onScrollEnd":l!=null&&Me("scrollend",n);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(s(61));if(a=l.__html,a!=null){if(f.children!=null)throw Error(s(60));n.innerHTML=a}}break;case"multiple":n.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":n.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){n.removeAttribute("xlink:href");break}a=ga(""+l),n.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?n.setAttribute(a,""+l):n.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?n.setAttribute(a,""):n.removeAttribute(a);break;case"capture":case"download":l===!0?n.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?n.setAttribute(a,l):n.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?n.setAttribute(a,l):n.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?n.removeAttribute(a):n.setAttribute(a,l);break;case"popover":Me("beforetoggle",n),Me("toggle",n),fr(n,"popover",l);break;case"xlinkActuate":Ut(n,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Ut(n,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Ut(n,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Ut(n,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Ut(n,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Ut(n,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Ut(n,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Ut(n,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Ut(n,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":fr(n,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=mf.get(a)||a,fr(n,a,l))}}function Gd(n,r,a,l,f,d){switch(a){case"style":Lo(n,l,d);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(s(61));if(a=l.__html,a!=null){if(f.children!=null)throw Error(s(60));n.innerHTML=a}}break;case"children":typeof l=="string"?Rn(n,l):(typeof l=="number"||typeof l=="bigint")&&Rn(n,""+l);break;case"onScroll":l!=null&&Me("scroll",n);break;case"onScrollEnd":l!=null&&Me("scrollend",n);break;case"onClick":l!=null&&(n.onclick=Mc);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!ha.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(f=a.endsWith("Capture"),r=a.slice(2,f?a.length-7:void 0),d=n[pt]||null,d=d!=null?d[a]:null,typeof d=="function"&&n.removeEventListener(r,d,f),typeof l=="function")){typeof d!="function"&&d!==null&&(a in n?n[a]=null:n.hasAttribute(a)&&n.removeAttribute(a)),n.addEventListener(r,l,f);break e}a in n?n[a]=l:l===!0?n.setAttribute(a,""):fr(n,a,l)}}}function qt(n,r,a){switch(r){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Me("error",n),Me("load",n);var l=!1,f=!1,d;for(d in a)if(a.hasOwnProperty(d)){var v=a[d];if(v!=null)switch(d){case"src":l=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,r));default:Qe(n,r,d,v,a,null)}}f&&Qe(n,r,"srcSet",a.srcSet,a,null),l&&Qe(n,r,"src",a.src,a,null);return;case"input":Me("invalid",n);var T=d=v=f=null,I=null,B=null;for(l in a)if(a.hasOwnProperty(l)){var Y=a[l];if(Y!=null)switch(l){case"name":f=Y;break;case"type":v=Y;break;case"checked":I=Y;break;case"defaultChecked":B=Y;break;case"value":d=Y;break;case"defaultValue":T=Y;break;case"children":case"dangerouslySetInnerHTML":if(Y!=null)throw Error(s(137,r));break;default:Qe(n,r,l,Y,a,null)}}gs(n,d,T,I,B,v,f,!1),pa(n);return;case"select":Me("invalid",n),l=v=d=null;for(f in a)if(a.hasOwnProperty(f)&&(T=a[f],T!=null))switch(f){case"value":d=T;break;case"defaultValue":v=T;break;case"multiple":l=T;default:Qe(n,r,f,T,a,null)}r=d,a=v,n.multiple=!!l,r!=null?Oi(n,!!l,r,!1):a!=null&&Oi(n,!!l,a,!0);return;case"textarea":Me("invalid",n),d=f=l=null;for(v in a)if(a.hasOwnProperty(v)&&(T=a[v],T!=null))switch(v){case"value":l=T;break;case"defaultValue":f=T;break;case"children":d=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(s(91));break;default:Qe(n,r,v,T,a,null)}ys(n,l,f,d),pa(n);return;case"option":for(I in a)if(a.hasOwnProperty(I)&&(l=a[I],l!=null))switch(I){case"selected":n.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:Qe(n,r,I,l,a,null)}return;case"dialog":Me("beforetoggle",n),Me("toggle",n),Me("cancel",n),Me("close",n);break;case"iframe":case"object":Me("load",n);break;case"video":case"audio":for(l=0;l<Tl.length;l++)Me(Tl[l],n);break;case"image":Me("error",n),Me("load",n);break;case"details":Me("toggle",n);break;case"embed":case"source":case"link":Me("error",n),Me("load",n);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(B in a)if(a.hasOwnProperty(B)&&(l=a[B],l!=null))switch(B){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,r));default:Qe(n,r,B,l,a,null)}return;default:if(Uo(r)){for(Y in a)a.hasOwnProperty(Y)&&(l=a[Y],l!==void 0&&Gd(n,r,Y,l,a,void 0));return}}for(T in a)a.hasOwnProperty(T)&&(l=a[T],l!=null&&Qe(n,r,T,l,a,null))}function cb(n,r,a,l){switch(r){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,d=null,v=null,T=null,I=null,B=null,Y=null;for(q in a){var W=a[q];if(a.hasOwnProperty(q)&&W!=null)switch(q){case"checked":break;case"value":break;case"defaultValue":I=W;default:l.hasOwnProperty(q)||Qe(n,r,q,null,l,W)}}for(var j in l){var q=l[j];if(W=a[j],l.hasOwnProperty(j)&&(q!=null||W!=null))switch(j){case"type":d=q;break;case"name":f=q;break;case"checked":B=q;break;case"defaultChecked":Y=q;break;case"value":v=q;break;case"defaultValue":T=q;break;case"children":case"dangerouslySetInnerHTML":if(q!=null)throw Error(s(137,r));break;default:q!==W&&Qe(n,r,j,q,l,W)}}dn(n,v,T,I,B,Y,d,f);return;case"select":q=v=T=j=null;for(d in a)if(I=a[d],a.hasOwnProperty(d)&&I!=null)switch(d){case"value":break;case"multiple":q=I;default:l.hasOwnProperty(d)||Qe(n,r,d,null,l,I)}for(f in l)if(d=l[f],I=a[f],l.hasOwnProperty(f)&&(d!=null||I!=null))switch(f){case"value":j=d;break;case"defaultValue":T=d;break;case"multiple":v=d;default:d!==I&&Qe(n,r,f,d,l,I)}r=T,a=v,l=q,j!=null?Oi(n,!!a,j,!1):!!l!=!!a&&(r!=null?Oi(n,!!a,r,!0):Oi(n,!!a,a?[]:"",!1));return;case"textarea":q=j=null;for(T in a)if(f=a[T],a.hasOwnProperty(T)&&f!=null&&!l.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:Qe(n,r,T,null,l,f)}for(v in l)if(f=l[v],d=a[v],l.hasOwnProperty(v)&&(f!=null||d!=null))switch(v){case"value":j=f;break;case"defaultValue":q=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(s(91));break;default:f!==d&&Qe(n,r,v,f,l,d)}$e(n,j,q);return;case"option":for(var Ee in a)if(j=a[Ee],a.hasOwnProperty(Ee)&&j!=null&&!l.hasOwnProperty(Ee))switch(Ee){case"selected":n.selected=!1;break;default:Qe(n,r,Ee,null,l,j)}for(I in l)if(j=l[I],q=a[I],l.hasOwnProperty(I)&&j!==q&&(j!=null||q!=null))switch(I){case"selected":n.selected=j&&typeof j!="function"&&typeof j!="symbol";break;default:Qe(n,r,I,j,l,q)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ge in a)j=a[ge],a.hasOwnProperty(ge)&&j!=null&&!l.hasOwnProperty(ge)&&Qe(n,r,ge,null,l,j);for(B in l)if(j=l[B],q=a[B],l.hasOwnProperty(B)&&j!==q&&(j!=null||q!=null))switch(B){case"children":case"dangerouslySetInnerHTML":if(j!=null)throw Error(s(137,r));break;default:Qe(n,r,B,j,l,q)}return;default:if(Uo(r)){for(var Xe in a)j=a[Xe],a.hasOwnProperty(Xe)&&j!==void 0&&!l.hasOwnProperty(Xe)&&Gd(n,r,Xe,void 0,l,j);for(Y in l)j=l[Y],q=a[Y],!l.hasOwnProperty(Y)||j===q||j===void 0&&q===void 0||Gd(n,r,Y,j,l,q);return}}for(var k in a)j=a[k],a.hasOwnProperty(k)&&j!=null&&!l.hasOwnProperty(k)&&Qe(n,r,k,null,l,j);for(W in l)j=l[W],q=a[W],!l.hasOwnProperty(W)||j===q||j==null&&q==null||Qe(n,r,W,j,l,q)}var Kd=null,$d=null;function Vc(n){return n.nodeType===9?n:n.ownerDocument}function nv(n){switch(n){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function iv(n,r){if(n===0)switch(r){case"svg":return 1;case"math":return 2;default:return 0}return n===1&&r==="foreignObject"?0:n}function Yd(n,r){return n==="textarea"||n==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.children=="bigint"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var Qd=null;function hb(){var n=window.event;return n&&n.type==="popstate"?n===Qd?!1:(Qd=n,!0):(Qd=null,!1)}var rv=typeof setTimeout=="function"?setTimeout:void 0,fb=typeof clearTimeout=="function"?clearTimeout:void 0,sv=typeof Promise=="function"?Promise:void 0,db=typeof queueMicrotask=="function"?queueMicrotask:typeof sv<"u"?function(n){return sv.resolve(null).then(n).catch(mb)}:rv;function mb(n){setTimeout(function(){throw n})}function Or(n){return n==="head"}function av(n,r){var a=r,l=0,f=0;do{var d=a.nextSibling;if(n.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(0<l&&8>l){a=l;var v=n.ownerDocument;if(a&1&&wl(v.documentElement),a&2&&wl(v.body),a&4)for(a=v.head,wl(a),v=a.firstChild;v;){var T=v.nextSibling,I=v.nodeName;v[fs]||I==="SCRIPT"||I==="STYLE"||I==="LINK"&&v.rel.toLowerCase()==="stylesheet"||a.removeChild(v),v=T}}if(f===0){n.removeChild(d),Nl(r);return}f--}else a==="$"||a==="$?"||a==="$!"?f++:l=a.charCodeAt(0)-48;else l=0;a=d}while(a);Nl(r)}function Xd(n){var r=n.firstChild;for(r&&r.nodeType===10&&(r=r.nextSibling);r;){var a=r;switch(r=r.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Xd(a),hr(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}n.removeChild(a)}}function pb(n,r,a,l){for(;n.nodeType===1;){var f=a;if(n.nodeName.toLowerCase()!==r.toLowerCase()){if(!l&&(n.nodeName!=="INPUT"||n.type!=="hidden"))break}else if(l){if(!n[fs])switch(r){case"meta":if(!n.hasAttribute("itemprop"))break;return n;case"link":if(d=n.getAttribute("rel"),d==="stylesheet"&&n.hasAttribute("data-precedence"))break;if(d!==f.rel||n.getAttribute("href")!==(f.href==null||f.href===""?null:f.href)||n.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||n.getAttribute("title")!==(f.title==null?null:f.title))break;return n;case"style":if(n.hasAttribute("data-precedence"))break;return n;case"script":if(d=n.getAttribute("src"),(d!==(f.src==null?null:f.src)||n.getAttribute("type")!==(f.type==null?null:f.type)||n.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&d&&n.hasAttribute("async")&&!n.hasAttribute("itemprop"))break;return n;default:return n}}else if(r==="input"&&n.type==="hidden"){var d=f.name==null?null:""+f.name;if(f.type==="hidden"&&n.getAttribute("name")===d)return n}else return n;if(n=Gn(n.nextSibling),n===null)break}return null}function gb(n,r,a){if(r==="")return null;for(;n.nodeType!==3;)if((n.nodeType!==1||n.nodeName!=="INPUT"||n.type!=="hidden")&&!a||(n=Gn(n.nextSibling),n===null))return null;return n}function Wd(n){return n.data==="$!"||n.data==="$?"&&n.ownerDocument.readyState==="complete"}function yb(n,r){var a=n.ownerDocument;if(n.data!=="$?"||a.readyState==="complete")r();else{var l=function(){r(),a.removeEventListener("DOMContentLoaded",l)};a.addEventListener("DOMContentLoaded",l),n._reactRetry=l}}function Gn(n){for(;n!=null;n=n.nextSibling){var r=n.nodeType;if(r===1||r===3)break;if(r===8){if(r=n.data,r==="$"||r==="$!"||r==="$?"||r==="F!"||r==="F")break;if(r==="/$")return null}}return n}var Zd=null;function ov(n){n=n.previousSibling;for(var r=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(r===0)return n;r--}else a==="/$"&&r++}n=n.previousSibling}return null}function lv(n,r,a){switch(r=Vc(a),n){case"html":if(n=r.documentElement,!n)throw Error(s(452));return n;case"head":if(n=r.head,!n)throw Error(s(453));return n;case"body":if(n=r.body,!n)throw Error(s(454));return n;default:throw Error(s(451))}}function wl(n){for(var r=n.attributes;r.length;)n.removeAttributeNode(r[0]);hr(n)}var kn=new Map,uv=new Set;function Pc(n){return typeof n.getRootNode=="function"?n.getRootNode():n.nodeType===9?n:n.ownerDocument}var Qi=se.d;se.d={f:_b,r:vb,D:Eb,C:Tb,L:Ab,m:wb,X:bb,S:Sb,M:Rb};function _b(){var n=Qi.f(),r=bc();return n||r}function vb(n){var r=Jn(n);r!==null&&r.tag===5&&r.type==="form"?Dy(r):Qi.r(n)}var Xa=typeof document>"u"?null:document;function cv(n,r,a){var l=Xa;if(l&&typeof r=="string"&&r){var f=gt(r);f='link[rel="'+n+'"][href="'+f+'"]',typeof a=="string"&&(f+='[crossorigin="'+a+'"]'),uv.has(f)||(uv.add(f),n={rel:n,crossOrigin:a,href:r},l.querySelector(f)===null&&(r=l.createElement("link"),qt(r,"link",n),ht(r),l.head.appendChild(r)))}}function Eb(n){Qi.D(n),cv("dns-prefetch",n,null)}function Tb(n,r){Qi.C(n,r),cv("preconnect",n,r)}function Ab(n,r,a){Qi.L(n,r,a);var l=Xa;if(l&&n&&r){var f='link[rel="preload"][as="'+gt(r)+'"]';r==="image"&&a&&a.imageSrcSet?(f+='[imagesrcset="'+gt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(f+='[imagesizes="'+gt(a.imageSizes)+'"]')):f+='[href="'+gt(n)+'"]';var d=f;switch(r){case"style":d=Wa(n);break;case"script":d=Za(n)}kn.has(d)||(n=E({rel:"preload",href:r==="image"&&a&&a.imageSrcSet?void 0:n,as:r},a),kn.set(d,n),l.querySelector(f)!==null||r==="style"&&l.querySelector(Sl(d))||r==="script"&&l.querySelector(bl(d))||(r=l.createElement("link"),qt(r,"link",n),ht(r),l.head.appendChild(r)))}}function wb(n,r){Qi.m(n,r);var a=Xa;if(a&&n){var l=r&&typeof r.as=="string"?r.as:"script",f='link[rel="modulepreload"][as="'+gt(l)+'"][href="'+gt(n)+'"]',d=f;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=Za(n)}if(!kn.has(d)&&(n=E({rel:"modulepreload",href:n},r),kn.set(d,n),a.querySelector(f)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(bl(d)))return}l=a.createElement("link"),qt(l,"link",n),ht(l),a.head.appendChild(l)}}}function Sb(n,r,a){Qi.S(n,r,a);var l=Xa;if(l&&n){var f=Jt(l).hoistableStyles,d=Wa(n);r=r||"default";var v=f.get(d);if(!v){var T={loading:0,preload:null};if(v=l.querySelector(Sl(d)))T.loading=5;else{n=E({rel:"stylesheet",href:n,"data-precedence":r},a),(a=kn.get(d))&&Jd(n,a);var I=v=l.createElement("link");ht(I),qt(I,"link",n),I._p=new Promise(function(B,Y){I.onload=B,I.onerror=Y}),I.addEventListener("load",function(){T.loading|=1}),I.addEventListener("error",function(){T.loading|=2}),T.loading|=4,xc(v,r,l)}v={type:"stylesheet",instance:v,count:1,state:T},f.set(d,v)}}}function bb(n,r){Qi.X(n,r);var a=Xa;if(a&&n){var l=Jt(a).hoistableScripts,f=Za(n),d=l.get(f);d||(d=a.querySelector(bl(f)),d||(n=E({src:n,async:!0},r),(r=kn.get(f))&&em(n,r),d=a.createElement("script"),ht(d),qt(d,"link",n),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(f,d))}}function Rb(n,r){Qi.M(n,r);var a=Xa;if(a&&n){var l=Jt(a).hoistableScripts,f=Za(n),d=l.get(f);d||(d=a.querySelector(bl(f)),d||(n=E({src:n,async:!0,type:"module"},r),(r=kn.get(f))&&em(n,r),d=a.createElement("script"),ht(d),qt(d,"link",n),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(f,d))}}function hv(n,r,a,l){var f=(f=we.current)?Pc(f):null;if(!f)throw Error(s(446));switch(n){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(r=Wa(a.href),a=Jt(f).hoistableStyles,l=a.get(r),l||(l={type:"style",instance:null,count:0,state:null},a.set(r,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){n=Wa(a.href);var d=Jt(f).hoistableStyles,v=d.get(n);if(v||(f=f.ownerDocument||f,v={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(n,v),(d=f.querySelector(Sl(n)))&&!d._p&&(v.instance=d,v.state.loading=5),kn.has(n)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},kn.set(n,a),d||Ib(f,n,a,v.state))),r&&l===null)throw Error(s(528,""));return v}if(r&&l!==null)throw Error(s(529,""));return null;case"script":return r=a.async,a=a.src,typeof a=="string"&&r&&typeof r!="function"&&typeof r!="symbol"?(r=Za(a),a=Jt(f).hoistableScripts,l=a.get(r),l||(l={type:"script",instance:null,count:0,state:null},a.set(r,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,n))}}function Wa(n){return'href="'+gt(n)+'"'}function Sl(n){return'link[rel="stylesheet"]['+n+"]"}function fv(n){return E({},n,{"data-precedence":n.precedence,precedence:null})}function Ib(n,r,a,l){n.querySelector('link[rel="preload"][as="style"]['+r+"]")?l.loading=1:(r=n.createElement("link"),l.preload=r,r.addEventListener("load",function(){return l.loading|=1}),r.addEventListener("error",function(){return l.loading|=2}),qt(r,"link",a),ht(r),n.head.appendChild(r))}function Za(n){return'[src="'+gt(n)+'"]'}function bl(n){return"script[async]"+n}function dv(n,r,a){if(r.count++,r.instance===null)switch(r.type){case"style":var l=n.querySelector('style[data-href~="'+gt(a.href)+'"]');if(l)return r.instance=l,ht(l),l;var f=E({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(n.ownerDocument||n).createElement("style"),ht(l),qt(l,"style",f),xc(l,a.precedence,n),r.instance=l;case"stylesheet":f=Wa(a.href);var d=n.querySelector(Sl(f));if(d)return r.state.loading|=4,r.instance=d,ht(d),d;l=fv(a),(f=kn.get(f))&&Jd(l,f),d=(n.ownerDocument||n).createElement("link"),ht(d);var v=d;return v._p=new Promise(function(T,I){v.onload=T,v.onerror=I}),qt(d,"link",l),r.state.loading|=4,xc(d,a.precedence,n),r.instance=d;case"script":return d=Za(a.src),(f=n.querySelector(bl(d)))?(r.instance=f,ht(f),f):(l=a,(f=kn.get(d))&&(l=E({},a),em(l,f)),n=n.ownerDocument||n,f=n.createElement("script"),ht(f),qt(f,"link",l),n.head.appendChild(f),r.instance=f);case"void":return null;default:throw Error(s(443,r.type))}else r.type==="stylesheet"&&(r.state.loading&4)===0&&(l=r.instance,r.state.loading|=4,xc(l,a.precedence,n));return r.instance}function xc(n,r,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=l.length?l[l.length-1]:null,d=f,v=0;v<l.length;v++){var T=l[v];if(T.dataset.precedence===r)d=T;else if(d!==f)break}d?d.parentNode.insertBefore(n,d.nextSibling):(r=a.nodeType===9?a.head:a,r.insertBefore(n,r.firstChild))}function Jd(n,r){n.crossOrigin==null&&(n.crossOrigin=r.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=r.referrerPolicy),n.title==null&&(n.title=r.title)}function em(n,r){n.crossOrigin==null&&(n.crossOrigin=r.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=r.referrerPolicy),n.integrity==null&&(n.integrity=r.integrity)}var kc=null;function mv(n,r,a){if(kc===null){var l=new Map,f=kc=new Map;f.set(a,l)}else f=kc,l=f.get(a),l||(l=new Map,f.set(a,l));if(l.has(n))return l;for(l.set(n,null),a=a.getElementsByTagName(n),f=0;f<a.length;f++){var d=a[f];if(!(d[fs]||d[At]||n==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var v=d.getAttribute(r)||"";v=n+v;var T=l.get(v);T?T.push(d):l.set(v,[d])}}return l}function pv(n,r,a){n=n.ownerDocument||n,n.head.insertBefore(a,r==="title"?n.querySelector("head > title"):null)}function Cb(n,r,a){if(a===1||r.itemProp!=null)return!1;switch(n){case"meta":case"title":return!0;case"style":if(typeof r.precedence!="string"||typeof r.href!="string"||r.href==="")break;return!0;case"link":if(typeof r.rel!="string"||typeof r.href!="string"||r.href===""||r.onLoad||r.onError)break;switch(r.rel){case"stylesheet":return n=r.disabled,typeof r.precedence=="string"&&n==null;default:return!0}case"script":if(r.async&&typeof r.async!="function"&&typeof r.async!="symbol"&&!r.onLoad&&!r.onError&&r.src&&typeof r.src=="string")return!0}return!1}function gv(n){return!(n.type==="stylesheet"&&(n.state.loading&3)===0)}var Rl=null;function Db(){}function Ob(n,r,a){if(Rl===null)throw Error(s(475));var l=Rl;if(r.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(r.state.loading&4)===0){if(r.instance===null){var f=Wa(a.href),d=n.querySelector(Sl(f));if(d){n=d._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(l.count++,l=Lc.bind(l),n.then(l,l)),r.state.loading|=4,r.instance=d,ht(d);return}d=n.ownerDocument||n,a=fv(a),(f=kn.get(f))&&Jd(a,f),d=d.createElement("link"),ht(d);var v=d;v._p=new Promise(function(T,I){v.onload=T,v.onerror=I}),qt(d,"link",a),r.instance=d}l.stylesheets===null&&(l.stylesheets=new Map),l.stylesheets.set(r,n),(n=r.state.preload)&&(r.state.loading&3)===0&&(l.count++,r=Lc.bind(l),n.addEventListener("load",r),n.addEventListener("error",r))}}function Nb(){if(Rl===null)throw Error(s(475));var n=Rl;return n.stylesheets&&n.count===0&&tm(n,n.stylesheets),0<n.count?function(r){var a=setTimeout(function(){if(n.stylesheets&&tm(n,n.stylesheets),n.unsuspend){var l=n.unsuspend;n.unsuspend=null,l()}},6e4);return n.unsuspend=r,function(){n.unsuspend=null,clearTimeout(a)}}:null}function Lc(){if(this.count--,this.count===0){if(this.stylesheets)tm(this,this.stylesheets);else if(this.unsuspend){var n=this.unsuspend;this.unsuspend=null,n()}}}var Uc=null;function tm(n,r){n.stylesheets=null,n.unsuspend!==null&&(n.count++,Uc=new Map,r.forEach(Mb,n),Uc=null,Lc.call(n))}function Mb(n,r){if(!(r.state.loading&4)){var a=Uc.get(n);if(a)var l=a.get(null);else{a=new Map,Uc.set(n,a);for(var f=n.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<f.length;d++){var v=f[d];(v.nodeName==="LINK"||v.getAttribute("media")!=="not all")&&(a.set(v.dataset.precedence,v),l=v)}l&&a.set(null,l)}f=r.instance,v=f.getAttribute("data-precedence"),d=a.get(v)||l,d===l&&a.set(null,f),a.set(v,f),this.count++,l=Lc.bind(this),f.addEventListener("load",l),f.addEventListener("error",l),d?d.parentNode.insertBefore(f,d.nextSibling):(n=n.nodeType===9?n.head:n,n.insertBefore(f,n.firstChild)),r.state.loading|=4}}var Il={$$typeof:te,Provider:null,Consumer:null,_currentValue:de,_currentValue2:de,_threadCount:0};function Vb(n,r,a,l,f,d,v,T){this.tag=1,this.containerInfo=n,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=bi(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=bi(0),this.hiddenUpdates=bi(null),this.identifierPrefix=l,this.onUncaughtError=f,this.onCaughtError=d,this.onRecoverableError=v,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=T,this.incompleteTransitions=new Map}function yv(n,r,a,l,f,d,v,T,I,B,Y,W){return n=new Vb(n,r,a,v,T,I,B,W),r=1,d===!0&&(r|=24),d=pn(3,null,null,r),n.current=d,d.stateNode=n,r=kf(),r.refCount++,n.pooledCache=r,r.refCount++,d.memoizedState={element:l,isDehydrated:a,cache:r},Bf(d),n}function _v(n){return n?(n=Da,n):Da}function vv(n,r,a,l,f,d){f=_v(f),l.context===null?l.context=f:l.pendingContext=f,l=yr(r),l.payload={element:a},d=d===void 0?null:d,d!==null&&(l.callback=d),a=_r(n,l,r),a!==null&&(En(a,n,r),il(a,n,r))}function Ev(n,r){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<r?a:r}}function nm(n,r){Ev(n,r),(n=n.alternate)&&Ev(n,r)}function Tv(n){if(n.tag===13){var r=Ca(n,67108864);r!==null&&En(r,n,67108864),nm(n,67108864)}}var zc=!0;function Pb(n,r,a,l){var f=$.T;$.T=null;var d=se.p;try{se.p=2,im(n,r,a,l)}finally{se.p=d,$.T=f}}function xb(n,r,a,l){var f=$.T;$.T=null;var d=se.p;try{se.p=8,im(n,r,a,l)}finally{se.p=d,$.T=f}}function im(n,r,a,l){if(zc){var f=rm(l);if(f===null)Fd(n,r,l,Bc,a),wv(n,l);else if(Lb(f,n,r,a,l))l.stopPropagation();else if(wv(n,l),r&4&&-1<kb.indexOf(n)){for(;f!==null;){var d=Jn(f);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var v=Bn(d.pendingLanes);if(v!==0){var T=d;for(T.pendingLanes|=2,T.entangledLanes|=2;v;){var I=1<<31-Kt(v);T.entanglements[1]|=I,v&=~I}di(d),(Ge&6)===0&&(wc=Sn()+500,El(0))}}break;case 13:T=Ca(d,2),T!==null&&En(T,d,2),bc(),nm(d,2)}if(d=rm(l),d===null&&Fd(n,r,l,Bc,a),d===f)break;f=d}f!==null&&l.stopPropagation()}else Fd(n,r,l,null,a)}}function rm(n){return n=In(n),sm(n)}var Bc=null;function sm(n){if(Bc=null,n=Ii(n),n!==null){var r=u(n);if(r===null)n=null;else{var a=r.tag;if(a===13){if(n=h(r),n!==null)return n;n=null}else if(a===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;n=null}else r!==n&&(n=null)}}return Bc=n,null}function Av(n){switch(n){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(lf()){case bo:return 2;case oa:return 8;case os:case uf:return 32;case la:return 268435456;default:return 32}default:return 32}}var am=!1,Nr=null,Mr=null,Vr=null,Cl=new Map,Dl=new Map,Pr=[],kb="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function wv(n,r){switch(n){case"focusin":case"focusout":Nr=null;break;case"dragenter":case"dragleave":Mr=null;break;case"mouseover":case"mouseout":Vr=null;break;case"pointerover":case"pointerout":Cl.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":Dl.delete(r.pointerId)}}function Ol(n,r,a,l,f,d){return n===null||n.nativeEvent!==d?(n={blockedOn:r,domEventName:a,eventSystemFlags:l,nativeEvent:d,targetContainers:[f]},r!==null&&(r=Jn(r),r!==null&&Tv(r)),n):(n.eventSystemFlags|=l,r=n.targetContainers,f!==null&&r.indexOf(f)===-1&&r.push(f),n)}function Lb(n,r,a,l,f){switch(r){case"focusin":return Nr=Ol(Nr,n,r,a,l,f),!0;case"dragenter":return Mr=Ol(Mr,n,r,a,l,f),!0;case"mouseover":return Vr=Ol(Vr,n,r,a,l,f),!0;case"pointerover":var d=f.pointerId;return Cl.set(d,Ol(Cl.get(d)||null,n,r,a,l,f)),!0;case"gotpointercapture":return d=f.pointerId,Dl.set(d,Ol(Dl.get(d)||null,n,r,a,l,f)),!0}return!1}function Sv(n){var r=Ii(n.target);if(r!==null){var a=u(r);if(a!==null){if(r=a.tag,r===13){if(r=h(a),r!==null){n.blockedOn=r,bu(n.priority,function(){if(a.tag===13){var l=vn();l=lr(l);var f=Ca(a,l);f!==null&&En(f,a,l),nm(a,l)}});return}}else if(r===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function jc(n){if(n.blockedOn!==null)return!1;for(var r=n.targetContainers;0<r.length;){var a=rm(n.nativeEvent);if(a===null){a=n.nativeEvent;var l=new a.constructor(a.type,a);Ni=l,a.target.dispatchEvent(l),Ni=null}else return r=Jn(a),r!==null&&Tv(r),n.blockedOn=a,!1;r.shift()}return!0}function bv(n,r,a){jc(n)&&a.delete(r)}function Ub(){am=!1,Nr!==null&&jc(Nr)&&(Nr=null),Mr!==null&&jc(Mr)&&(Mr=null),Vr!==null&&jc(Vr)&&(Vr=null),Cl.forEach(bv),Dl.forEach(bv)}function qc(n,r){n.blockedOn===r&&(n.blockedOn=null,am||(am=!0,i.unstable_scheduleCallback(i.unstable_NormalPriority,Ub)))}var Hc=null;function Rv(n){Hc!==n&&(Hc=n,i.unstable_scheduleCallback(i.unstable_NormalPriority,function(){Hc===n&&(Hc=null);for(var r=0;r<n.length;r+=3){var a=n[r],l=n[r+1],f=n[r+2];if(typeof l!="function"){if(sm(l||a)===null)continue;break}var d=Jn(a);d!==null&&(n.splice(r,3),r-=3,sd(d,{pending:!0,data:f,method:a.method,action:l},l,f))}}))}function Nl(n){function r(I){return qc(I,n)}Nr!==null&&qc(Nr,n),Mr!==null&&qc(Mr,n),Vr!==null&&qc(Vr,n),Cl.forEach(r),Dl.forEach(r);for(var a=0;a<Pr.length;a++){var l=Pr[a];l.blockedOn===n&&(l.blockedOn=null)}for(;0<Pr.length&&(a=Pr[0],a.blockedOn===null);)Sv(a),a.blockedOn===null&&Pr.shift();if(a=(n.ownerDocument||n).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var f=a[l],d=a[l+1],v=f[pt]||null;if(typeof d=="function")v||Rv(a);else if(v){var T=null;if(d&&d.hasAttribute("formAction")){if(f=d,v=d[pt]||null)T=v.formAction;else if(sm(f)!==null)continue}else T=v.action;typeof T=="function"?a[l+1]=T:(a.splice(l,3),l-=3),Rv(a)}}}function om(n){this._internalRoot=n}Fc.prototype.render=om.prototype.render=function(n){var r=this._internalRoot;if(r===null)throw Error(s(409));var a=r.current,l=vn();vv(a,l,n,r,null,null)},Fc.prototype.unmount=om.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var r=n.containerInfo;vv(n.current,2,null,n,null,null),bc(),r[bn]=null}};function Fc(n){this._internalRoot=n}Fc.prototype.unstable_scheduleHydration=function(n){if(n){var r=ur();n={blockedOn:null,target:n,priority:r};for(var a=0;a<Pr.length&&r!==0&&r<Pr[a].priority;a++);Pr.splice(a,0,n),a===0&&Sv(n)}};var Iv=e.version;if(Iv!=="19.1.0")throw Error(s(527,Iv,"19.1.0"));se.findDOMNode=function(n){var r=n._reactInternals;if(r===void 0)throw typeof n.render=="function"?Error(s(188)):(n=Object.keys(n).join(","),Error(s(268,n)));return n=p(r),n=n!==null?g(n):null,n=n===null?null:n.stateNode,n};var zb={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:$,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Gc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Gc.isDisabled&&Gc.supportsFiber)try{at=Gc.inject(zb),Fe=Gc}catch{}}return Vl.createRoot=function(n,r){if(!o(n))throw Error(s(299));var a=!1,l="",f=Hy,d=Fy,v=Gy,T=null;return r!=null&&(r.unstable_strictMode===!0&&(a=!0),r.identifierPrefix!==void 0&&(l=r.identifierPrefix),r.onUncaughtError!==void 0&&(f=r.onUncaughtError),r.onCaughtError!==void 0&&(d=r.onCaughtError),r.onRecoverableError!==void 0&&(v=r.onRecoverableError),r.unstable_transitionCallbacks!==void 0&&(T=r.unstable_transitionCallbacks)),r=yv(n,1,!1,null,null,a,l,f,d,v,T,null),n[bn]=r.current,Hd(n),new om(r)},Vl.hydrateRoot=function(n,r,a){if(!o(n))throw Error(s(299));var l=!1,f="",d=Hy,v=Fy,T=Gy,I=null,B=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(f=a.identifierPrefix),a.onUncaughtError!==void 0&&(d=a.onUncaughtError),a.onCaughtError!==void 0&&(v=a.onCaughtError),a.onRecoverableError!==void 0&&(T=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(I=a.unstable_transitionCallbacks),a.formState!==void 0&&(B=a.formState)),r=yv(n,1,!0,r,a??null,l,f,d,v,T,I,B),r.context=_v(null),a=r.current,l=vn(),l=lr(l),f=yr(l),f.callback=null,_r(a,f,l),a=l,r.current.lanes=a,Ri(r,a),di(r),n[bn]=r.current,Hd(n),new Fc(r)},Vl.version="19.1.0",Vl}var Lv;function Xb(){if(Lv)return cm.exports;Lv=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(e){console.error(e)}}return i(),cm.exports=Qb(),cm.exports}var Wb=Xb();const Zb=jb(Wb);var Pl={},Uv;function Jb(){if(Uv)return Pl;Uv=1,Object.defineProperty(Pl,"__esModule",{value:!0}),Pl.parse=h,Pl.serialize=g;const i=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,e=/^[\u0021-\u003A\u003C-\u007E]*$/,t=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,s=/^[\u0020-\u003A\u003D-\u007E]*$/,o=Object.prototype.toString,u=(()=>{const w=function(){};return w.prototype=Object.create(null),w})();function h(w,D){const P=new u,G=w.length;if(G<2)return P;const H=(D==null?void 0:D.decode)||E;let K=0;do{const ne=w.indexOf("=",K);if(ne===-1)break;const te=w.indexOf(";",K),oe=te===-1?G:te;if(ne>oe){K=w.lastIndexOf(";",ne-1)+1;continue}const ue=m(w,K,ne),Ae=p(w,ne,ue),V=w.slice(ue,Ae);if(P[V]===void 0){let b=m(w,ne+1,oe),R=p(w,oe,b);const N=H(w.slice(b,R));P[V]=N}K=oe+1}while(K<G);return P}function m(w,D,P){do{const G=w.charCodeAt(D);if(G!==32&&G!==9)return D}while(++D<P);return P}function p(w,D,P){for(;D>P;){const G=w.charCodeAt(--D);if(G!==32&&G!==9)return D+1}return P}function g(w,D,P){const G=(P==null?void 0:P.encode)||encodeURIComponent;if(!i.test(w))throw new TypeError(`argument name is invalid: ${w}`);const H=G(D);if(!e.test(H))throw new TypeError(`argument val is invalid: ${D}`);let K=w+"="+H;if(!P)return K;if(P.maxAge!==void 0){if(!Number.isInteger(P.maxAge))throw new TypeError(`option maxAge is invalid: ${P.maxAge}`);K+="; Max-Age="+P.maxAge}if(P.domain){if(!t.test(P.domain))throw new TypeError(`option domain is invalid: ${P.domain}`);K+="; Domain="+P.domain}if(P.path){if(!s.test(P.path))throw new TypeError(`option path is invalid: ${P.path}`);K+="; Path="+P.path}if(P.expires){if(!S(P.expires)||!Number.isFinite(P.expires.valueOf()))throw new TypeError(`option expires is invalid: ${P.expires}`);K+="; Expires="+P.expires.toUTCString()}if(P.httpOnly&&(K+="; HttpOnly"),P.secure&&(K+="; Secure"),P.partitioned&&(K+="; Partitioned"),P.priority)switch(typeof P.priority=="string"?P.priority.toLowerCase():void 0){case"low":K+="; Priority=Low";break;case"medium":K+="; Priority=Medium";break;case"high":K+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${P.priority}`)}if(P.sameSite)switch(typeof P.sameSite=="string"?P.sameSite.toLowerCase():P.sameSite){case!0:case"strict":K+="; SameSite=Strict";break;case"lax":K+="; SameSite=Lax";break;case"none":K+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${P.sameSite}`)}return K}function E(w){if(w.indexOf("%")===-1)return w;try{return decodeURIComponent(w)}catch{return w}}function S(w){return o.call(w)==="[object Date]"}return Pl}Jb();var zv="popstate";function eR(i={}){function e(s,o){let{pathname:u,search:h,hash:m}=s.location;return Mm("",{pathname:u,search:h,hash:m},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function t(s,o){return typeof o=="string"?o:Wl(o)}return nR(e,t,null,i)}function It(i,e){if(i===!1||i===null||typeof i>"u")throw new Error(e)}function Ti(i,e){if(!i){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function tR(){return Math.random().toString(36).substring(2,10)}function Bv(i,e){return{usr:i.state,key:i.key,idx:e}}function Mm(i,e,t=null,s){return{pathname:typeof i=="string"?i:i.pathname,search:"",hash:"",...typeof e=="string"?lu(e):e,state:t,key:e&&e.key||s||tR()}}function Wl({pathname:i="/",search:e="",hash:t=""}){return e&&e!=="?"&&(i+=e.charAt(0)==="?"?e:"?"+e),t&&t!=="#"&&(i+=t.charAt(0)==="#"?t:"#"+t),i}function lu(i){let e={};if(i){let t=i.indexOf("#");t>=0&&(e.hash=i.substring(t),i=i.substring(0,t));let s=i.indexOf("?");s>=0&&(e.search=i.substring(s),i=i.substring(0,s)),i&&(e.pathname=i)}return e}function nR(i,e,t,s={}){let{window:o=document.defaultView,v5Compat:u=!1}=s,h=o.history,m="POP",p=null,g=E();g==null&&(g=0,h.replaceState({...h.state,idx:g},""));function E(){return(h.state||{idx:null}).idx}function S(){m="POP";let H=E(),K=H==null?null:H-g;g=H,p&&p({action:m,location:G.location,delta:K})}function w(H,K){m="PUSH";let ne=Mm(G.location,H,K);g=E()+1;let te=Bv(ne,g),oe=G.createHref(ne);try{h.pushState(te,"",oe)}catch(ue){if(ue instanceof DOMException&&ue.name==="DataCloneError")throw ue;o.location.assign(oe)}u&&p&&p({action:m,location:G.location,delta:1})}function D(H,K){m="REPLACE";let ne=Mm(G.location,H,K);g=E();let te=Bv(ne,g),oe=G.createHref(ne);h.replaceState(te,"",oe),u&&p&&p({action:m,location:G.location,delta:0})}function P(H){return iR(H)}let G={get action(){return m},get location(){return i(o,h)},listen(H){if(p)throw new Error("A history only accepts one active listener");return o.addEventListener(zv,S),p=H,()=>{o.removeEventListener(zv,S),p=null}},createHref(H){return e(o,H)},createURL:P,encodeLocation(H){let K=P(H);return{pathname:K.pathname,search:K.search,hash:K.hash}},push:w,replace:D,go(H){return h.go(H)}};return G}function iR(i,e=!1){let t="http://localhost";typeof window<"u"&&(t=window.location.origin!=="null"?window.location.origin:window.location.href),It(t,"No window.location.(origin|href) available to create URL");let s=typeof i=="string"?i:Wl(i);return s=s.replace(/ $/,"%20"),!e&&s.startsWith("//")&&(s=t+s),new URL(s,t)}function PT(i,e,t="/"){return rR(i,e,t,!1)}function rR(i,e,t,s){let o=typeof e=="string"?lu(e):e,u=tr(o.pathname||"/",t);if(u==null)return null;let h=xT(i);sR(h);let m=null;for(let p=0;m==null&&p<h.length;++p){let g=gR(u);m=mR(h[p],g,s)}return m}function xT(i,e=[],t=[],s=""){let o=(u,h,m)=>{let p={relativePath:m===void 0?u.path||"":m,caseSensitive:u.caseSensitive===!0,childrenIndex:h,route:u};p.relativePath.startsWith("/")&&(It(p.relativePath.startsWith(s),`Absolute route path "${p.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),p.relativePath=p.relativePath.slice(s.length));let g=Zi([s,p.relativePath]),E=t.concat(p);u.children&&u.children.length>0&&(It(u.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${g}".`),xT(u.children,e,E,g)),!(u.path==null&&!u.index)&&e.push({path:g,score:fR(g,u.index),routesMeta:E})};return i.forEach((u,h)=>{var m;if(u.path===""||!((m=u.path)!=null&&m.includes("?")))o(u,h);else for(let p of kT(u.path))o(u,h,p)}),e}function kT(i){let e=i.split("/");if(e.length===0)return[];let[t,...s]=e,o=t.endsWith("?"),u=t.replace(/\?$/,"");if(s.length===0)return o?[u,""]:[u];let h=kT(s.join("/")),m=[];return m.push(...h.map(p=>p===""?u:[u,p].join("/"))),o&&m.push(...h),m.map(p=>i.startsWith("/")&&p===""?"/":p)}function sR(i){i.sort((e,t)=>e.score!==t.score?t.score-e.score:dR(e.routesMeta.map(s=>s.childrenIndex),t.routesMeta.map(s=>s.childrenIndex)))}var aR=/^:[\w-]+$/,oR=3,lR=2,uR=1,cR=10,hR=-2,jv=i=>i==="*";function fR(i,e){let t=i.split("/"),s=t.length;return t.some(jv)&&(s+=hR),e&&(s+=lR),t.filter(o=>!jv(o)).reduce((o,u)=>o+(aR.test(u)?oR:u===""?uR:cR),s)}function dR(i,e){return i.length===e.length&&i.slice(0,-1).every((s,o)=>s===e[o])?i[i.length-1]-e[e.length-1]:0}function mR(i,e,t=!1){let{routesMeta:s}=i,o={},u="/",h=[];for(let m=0;m<s.length;++m){let p=s[m],g=m===s.length-1,E=u==="/"?e:e.slice(u.length)||"/",S=dh({path:p.relativePath,caseSensitive:p.caseSensitive,end:g},E),w=p.route;if(!S&&g&&t&&!s[s.length-1].route.index&&(S=dh({path:p.relativePath,caseSensitive:p.caseSensitive,end:!1},E)),!S)return null;Object.assign(o,S.params),h.push({params:o,pathname:Zi([u,S.pathname]),pathnameBase:ER(Zi([u,S.pathnameBase])),route:w}),S.pathnameBase!=="/"&&(u=Zi([u,S.pathnameBase]))}return h}function dh(i,e){typeof i=="string"&&(i={path:i,caseSensitive:!1,end:!0});let[t,s]=pR(i.path,i.caseSensitive,i.end),o=e.match(t);if(!o)return null;let u=o[0],h=u.replace(/(.)\/+$/,"$1"),m=o.slice(1);return{params:s.reduce((g,{paramName:E,isOptional:S},w)=>{if(E==="*"){let P=m[w]||"";h=u.slice(0,u.length-P.length).replace(/(.)\/+$/,"$1")}const D=m[w];return S&&!D?g[E]=void 0:g[E]=(D||"").replace(/%2F/g,"/"),g},{}),pathname:u,pathnameBase:h,pattern:i}}function pR(i,e=!1,t=!0){Ti(i==="*"||!i.endsWith("*")||i.endsWith("/*"),`Route path "${i}" will be treated as if it were "${i.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${i.replace(/\*$/,"/*")}".`);let s=[],o="^"+i.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(h,m,p)=>(s.push({paramName:m,isOptional:p!=null}),p?"/?([^\\/]+)?":"/([^\\/]+)"));return i.endsWith("*")?(s.push({paramName:"*"}),o+=i==="*"||i==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?o+="\\/*$":i!==""&&i!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,e?void 0:"i"),s]}function gR(i){try{return i.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Ti(!1,`The URL path "${i}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),i}}function tr(i,e){if(e==="/")return i;if(!i.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,s=i.charAt(t);return s&&s!=="/"?null:i.slice(t)||"/"}function yR(i,e="/"){let{pathname:t,search:s="",hash:o=""}=typeof i=="string"?lu(i):i;return{pathname:t?t.startsWith("/")?t:_R(t,e):e,search:TR(s),hash:AR(o)}}function _R(i,e){let t=e.replace(/\/+$/,"").split("/");return i.split("/").forEach(o=>{o===".."?t.length>1&&t.pop():o!=="."&&t.push(o)}),t.length>1?t.join("/"):"/"}function mm(i,e,t,s){return`Cannot include a '${i}' character in a manually specified \`to.${e}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${t}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function vR(i){return i.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function LT(i){let e=vR(i);return e.map((t,s)=>s===e.length-1?t.pathname:t.pathnameBase)}function UT(i,e,t,s=!1){let o;typeof i=="string"?o=lu(i):(o={...i},It(!o.pathname||!o.pathname.includes("?"),mm("?","pathname","search",o)),It(!o.pathname||!o.pathname.includes("#"),mm("#","pathname","hash",o)),It(!o.search||!o.search.includes("#"),mm("#","search","hash",o)));let u=i===""||o.pathname==="",h=u?"/":o.pathname,m;if(h==null)m=t;else{let S=e.length-1;if(!s&&h.startsWith("..")){let w=h.split("/");for(;w[0]==="..";)w.shift(),S-=1;o.pathname=w.join("/")}m=S>=0?e[S]:"/"}let p=yR(o,m),g=h&&h!=="/"&&h.endsWith("/"),E=(u||h===".")&&t.endsWith("/");return!p.pathname.endsWith("/")&&(g||E)&&(p.pathname+="/"),p}var Zi=i=>i.join("/").replace(/\/\/+/g,"/"),ER=i=>i.replace(/\/+$/,"").replace(/^\/*/,"/"),TR=i=>!i||i==="?"?"":i.startsWith("?")?i:"?"+i,AR=i=>!i||i==="#"?"":i.startsWith("#")?i:"#"+i;function wR(i){return i!=null&&typeof i.status=="number"&&typeof i.statusText=="string"&&typeof i.internal=="boolean"&&"data"in i}var zT=["POST","PUT","PATCH","DELETE"];new Set(zT);var SR=["GET",...zT];new Set(SR);var yo=Q.createContext(null);yo.displayName="DataRouter";var xh=Q.createContext(null);xh.displayName="DataRouterState";var BT=Q.createContext({isTransitioning:!1});BT.displayName="ViewTransition";var bR=Q.createContext(new Map);bR.displayName="Fetchers";var RR=Q.createContext(null);RR.displayName="Await";var wi=Q.createContext(null);wi.displayName="Navigation";var kh=Q.createContext(null);kh.displayName="Location";var ar=Q.createContext({outlet:null,matches:[],isDataRoute:!1});ar.displayName="Route";var lp=Q.createContext(null);lp.displayName="RouteError";function IR(i,{relative:e}={}){It(uu(),"useHref() may be used only in the context of a <Router> component.");let{basename:t,navigator:s}=Q.useContext(wi),{hash:o,pathname:u,search:h}=cu(i,{relative:e}),m=u;return t!=="/"&&(m=u==="/"?t:Zi([t,u])),s.createHref({pathname:m,search:h,hash:o})}function uu(){return Q.useContext(kh)!=null}function Zs(){return It(uu(),"useLocation() may be used only in the context of a <Router> component."),Q.useContext(kh).location}var jT="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function qT(i){Q.useContext(wi).static||Q.useLayoutEffect(i)}function CR(){let{isDataRoute:i}=Q.useContext(ar);return i?jR():DR()}function DR(){It(uu(),"useNavigate() may be used only in the context of a <Router> component.");let i=Q.useContext(yo),{basename:e,navigator:t}=Q.useContext(wi),{matches:s}=Q.useContext(ar),{pathname:o}=Zs(),u=JSON.stringify(LT(s)),h=Q.useRef(!1);return qT(()=>{h.current=!0}),Q.useCallback((p,g={})=>{if(Ti(h.current,jT),!h.current)return;if(typeof p=="number"){t.go(p);return}let E=UT(p,JSON.parse(u),o,g.relative==="path");i==null&&e!=="/"&&(E.pathname=E.pathname==="/"?e:Zi([e,E.pathname])),(g.replace?t.replace:t.push)(E,g.state,g)},[e,t,u,o,i])}Q.createContext(null);function cu(i,{relative:e}={}){let{matches:t}=Q.useContext(ar),{pathname:s}=Zs(),o=JSON.stringify(LT(t));return Q.useMemo(()=>UT(i,JSON.parse(o),s,e==="path"),[i,o,s,e])}function OR(i,e,t,s){It(uu(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:o}=Q.useContext(wi),{matches:u}=Q.useContext(ar),h=u[u.length-1],m=h?h.params:{},p=h?h.pathname:"/",g=h?h.pathnameBase:"/",E=h&&h.route;{let K=E&&E.path||"";HT(p,!E||K.endsWith("*")||K.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${K}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${K}"> to <Route path="${K==="/"?"*":`${K}/*`}">.`)}let S=Zs(),w;w=S;let D=w.pathname||"/",P=D;if(g!=="/"){let K=g.replace(/^\//,"").split("/");P="/"+D.replace(/^\//,"").split("/").slice(K.length).join("/")}let G=PT(i,{pathname:P});return Ti(E||G!=null,`No routes matched location "${w.pathname}${w.search}${w.hash}" `),Ti(G==null||G[G.length-1].route.element!==void 0||G[G.length-1].route.Component!==void 0||G[G.length-1].route.lazy!==void 0,`Matched leaf route at location "${w.pathname}${w.search}${w.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`),xR(G&&G.map(K=>Object.assign({},K,{params:Object.assign({},m,K.params),pathname:Zi([g,o.encodeLocation?o.encodeLocation(K.pathname).pathname:K.pathname]),pathnameBase:K.pathnameBase==="/"?g:Zi([g,o.encodeLocation?o.encodeLocation(K.pathnameBase).pathname:K.pathnameBase])})),u,t,s)}function NR(){let i=BR(),e=wR(i)?`${i.status} ${i.statusText}`:i instanceof Error?i.message:JSON.stringify(i),t=i instanceof Error?i.stack:null,s="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:s},u={padding:"2px 4px",backgroundColor:s},h=null;return console.error("Error handled by React Router default ErrorBoundary:",i),h=Q.createElement(Q.Fragment,null,Q.createElement("p",null,"💿 Hey developer 👋"),Q.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",Q.createElement("code",{style:u},"ErrorBoundary")," or"," ",Q.createElement("code",{style:u},"errorElement")," prop on your route.")),Q.createElement(Q.Fragment,null,Q.createElement("h2",null,"Unexpected Application Error!"),Q.createElement("h3",{style:{fontStyle:"italic"}},e),t?Q.createElement("pre",{style:o},t):null,h)}var MR=Q.createElement(NR,null),VR=class extends Q.Component{constructor(i){super(i),this.state={location:i.location,revalidation:i.revalidation,error:i.error}}static getDerivedStateFromError(i){return{error:i}}static getDerivedStateFromProps(i,e){return e.location!==i.location||e.revalidation!=="idle"&&i.revalidation==="idle"?{error:i.error,location:i.location,revalidation:i.revalidation}:{error:i.error!==void 0?i.error:e.error,location:e.location,revalidation:i.revalidation||e.revalidation}}componentDidCatch(i,e){console.error("React Router caught the following error during render",i,e)}render(){return this.state.error!==void 0?Q.createElement(ar.Provider,{value:this.props.routeContext},Q.createElement(lp.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function PR({routeContext:i,match:e,children:t}){let s=Q.useContext(yo);return s&&s.static&&s.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=e.route.id),Q.createElement(ar.Provider,{value:i},t)}function xR(i,e=[],t=null,s=null){if(i==null){if(!t)return null;if(t.errors)i=t.matches;else if(e.length===0&&!t.initialized&&t.matches.length>0)i=t.matches;else return null}let o=i,u=t==null?void 0:t.errors;if(u!=null){let p=o.findIndex(g=>g.route.id&&(u==null?void 0:u[g.route.id])!==void 0);It(p>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(u).join(",")}`),o=o.slice(0,Math.min(o.length,p+1))}let h=!1,m=-1;if(t)for(let p=0;p<o.length;p++){let g=o[p];if((g.route.HydrateFallback||g.route.hydrateFallbackElement)&&(m=p),g.route.id){let{loaderData:E,errors:S}=t,w=g.route.loader&&!E.hasOwnProperty(g.route.id)&&(!S||S[g.route.id]===void 0);if(g.route.lazy||w){h=!0,m>=0?o=o.slice(0,m+1):o=[o[0]];break}}}return o.reduceRight((p,g,E)=>{let S,w=!1,D=null,P=null;t&&(S=u&&g.route.id?u[g.route.id]:void 0,D=g.route.errorElement||MR,h&&(m<0&&E===0?(HT("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),w=!0,P=null):m===E&&(w=!0,P=g.route.hydrateFallbackElement||null)));let G=e.concat(o.slice(0,E+1)),H=()=>{let K;return S?K=D:w?K=P:g.route.Component?K=Q.createElement(g.route.Component,null):g.route.element?K=g.route.element:K=p,Q.createElement(PR,{match:g,routeContext:{outlet:p,matches:G,isDataRoute:t!=null},children:K})};return t&&(g.route.ErrorBoundary||g.route.errorElement||E===0)?Q.createElement(VR,{location:t.location,revalidation:t.revalidation,component:D,error:S,children:H(),routeContext:{outlet:null,matches:G,isDataRoute:!0}}):H()},null)}function up(i){return`${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function kR(i){let e=Q.useContext(yo);return It(e,up(i)),e}function LR(i){let e=Q.useContext(xh);return It(e,up(i)),e}function UR(i){let e=Q.useContext(ar);return It(e,up(i)),e}function cp(i){let e=UR(i),t=e.matches[e.matches.length-1];return It(t.route.id,`${i} can only be used on routes that contain a unique "id"`),t.route.id}function zR(){return cp("useRouteId")}function BR(){var s;let i=Q.useContext(lp),e=LR("useRouteError"),t=cp("useRouteError");return i!==void 0?i:(s=e.errors)==null?void 0:s[t]}function jR(){let{router:i}=kR("useNavigate"),e=cp("useNavigate"),t=Q.useRef(!1);return qT(()=>{t.current=!0}),Q.useCallback(async(o,u={})=>{Ti(t.current,jT),t.current&&(typeof o=="number"?i.navigate(o):await i.navigate(o,{fromRouteId:e,...u}))},[i,e])}var qv={};function HT(i,e,t){!e&&!qv[i]&&(qv[i]=!0,Ti(!1,t))}Q.memo(qR);function qR({routes:i,future:e,state:t}){return OR(i,void 0,t,e)}function HR({basename:i="/",children:e=null,location:t,navigationType:s="POP",navigator:o,static:u=!1}){It(!uu(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let h=i.replace(/^\/*/,"/"),m=Q.useMemo(()=>({basename:h,navigator:o,static:u,future:{}}),[h,o,u]);typeof t=="string"&&(t=lu(t));let{pathname:p="/",search:g="",hash:E="",state:S=null,key:w="default"}=t,D=Q.useMemo(()=>{let P=tr(p,h);return P==null?null:{location:{pathname:P,search:g,hash:E,state:S,key:w},navigationType:s}},[h,p,g,E,S,w,s]);return Ti(D!=null,`<Router basename="${h}"> is not able to match the URL "${p}${g}${E}" because it does not start with the basename, so the <Router> won't render anything.`),D==null?null:Q.createElement(wi.Provider,{value:m},Q.createElement(kh.Provider,{children:e,value:D}))}var th="get",nh="application/x-www-form-urlencoded";function Lh(i){return i!=null&&typeof i.tagName=="string"}function FR(i){return Lh(i)&&i.tagName.toLowerCase()==="button"}function GR(i){return Lh(i)&&i.tagName.toLowerCase()==="form"}function KR(i){return Lh(i)&&i.tagName.toLowerCase()==="input"}function $R(i){return!!(i.metaKey||i.altKey||i.ctrlKey||i.shiftKey)}function YR(i,e){return i.button===0&&(!e||e==="_self")&&!$R(i)}var Kc=null;function QR(){if(Kc===null)try{new FormData(document.createElement("form"),0),Kc=!1}catch{Kc=!0}return Kc}var XR=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function pm(i){return i!=null&&!XR.has(i)?(Ti(!1,`"${i}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${nh}"`),null):i}function WR(i,e){let t,s,o,u,h;if(GR(i)){let m=i.getAttribute("action");s=m?tr(m,e):null,t=i.getAttribute("method")||th,o=pm(i.getAttribute("enctype"))||nh,u=new FormData(i)}else if(FR(i)||KR(i)&&(i.type==="submit"||i.type==="image")){let m=i.form;if(m==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let p=i.getAttribute("formaction")||m.getAttribute("action");if(s=p?tr(p,e):null,t=i.getAttribute("formmethod")||m.getAttribute("method")||th,o=pm(i.getAttribute("formenctype"))||pm(m.getAttribute("enctype"))||nh,u=new FormData(m,i),!QR()){let{name:g,type:E,value:S}=i;if(E==="image"){let w=g?`${g}.`:"";u.append(`${w}x`,"0"),u.append(`${w}y`,"0")}else g&&u.append(g,S)}}else{if(Lh(i))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');t=th,s=null,o=nh,h=i}return u&&o==="text/plain"&&(h=u,u=void 0),{action:s,method:t.toLowerCase(),encType:o,formData:u,body:h}}function hp(i,e){if(i===!1||i===null||typeof i>"u")throw new Error(e)}async function ZR(i,e){if(i.id in e)return e[i.id];try{let t=await import(i.module);return e[i.id]=t,t}catch(t){return console.error(`Error loading route module \`${i.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function JR(i){return i==null?!1:i.href==null?i.rel==="preload"&&typeof i.imageSrcSet=="string"&&typeof i.imageSizes=="string":typeof i.rel=="string"&&typeof i.href=="string"}async function e1(i,e,t){let s=await Promise.all(i.map(async o=>{let u=e.routes[o.route.id];if(u){let h=await ZR(u,t);return h.links?h.links():[]}return[]}));return r1(s.flat(1).filter(JR).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function Hv(i,e,t,s,o,u){let h=(p,g)=>t[g]?p.route.id!==t[g].route.id:!0,m=(p,g)=>{var E;return t[g].pathname!==p.pathname||((E=t[g].route.path)==null?void 0:E.endsWith("*"))&&t[g].params["*"]!==p.params["*"]};return u==="assets"?e.filter((p,g)=>h(p,g)||m(p,g)):u==="data"?e.filter((p,g)=>{var S;let E=s.routes[p.route.id];if(!E||!E.hasLoader)return!1;if(h(p,g)||m(p,g))return!0;if(p.route.shouldRevalidate){let w=p.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:((S=t[0])==null?void 0:S.params)||{},nextUrl:new URL(i,window.origin),nextParams:p.params,defaultShouldRevalidate:!0});if(typeof w=="boolean")return w}return!0}):[]}function t1(i,e,{includeHydrateFallback:t}={}){return n1(i.map(s=>{let o=e.routes[s.route.id];if(!o)return[];let u=[o.module];return o.clientActionModule&&(u=u.concat(o.clientActionModule)),o.clientLoaderModule&&(u=u.concat(o.clientLoaderModule)),t&&o.hydrateFallbackModule&&(u=u.concat(o.hydrateFallbackModule)),o.imports&&(u=u.concat(o.imports)),u}).flat(1))}function n1(i){return[...new Set(i)]}function i1(i){let e={},t=Object.keys(i).sort();for(let s of t)e[s]=i[s];return e}function r1(i,e){let t=new Set;return new Set(e),i.reduce((s,o)=>{let u=JSON.stringify(i1(o));return t.has(u)||(t.add(u),s.push({key:u,link:o})),s},[])}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var s1=new Set([100,101,204,205]);function a1(i,e){let t=typeof i=="string"?new URL(i,typeof window>"u"?"server://singlefetch/":window.location.origin):i;return t.pathname==="/"?t.pathname="_root.data":e&&tr(t.pathname,e)==="/"?t.pathname=`${e.replace(/\/$/,"")}/_root.data`:t.pathname=`${t.pathname.replace(/\/$/,"")}.data`,t}function FT(){let i=Q.useContext(yo);return hp(i,"You must render this element inside a <DataRouterContext.Provider> element"),i}function o1(){let i=Q.useContext(xh);return hp(i,"You must render this element inside a <DataRouterStateContext.Provider> element"),i}var fp=Q.createContext(void 0);fp.displayName="FrameworkContext";function GT(){let i=Q.useContext(fp);return hp(i,"You must render this element inside a <HydratedRouter> element"),i}function l1(i,e){let t=Q.useContext(fp),[s,o]=Q.useState(!1),[u,h]=Q.useState(!1),{onFocus:m,onBlur:p,onMouseEnter:g,onMouseLeave:E,onTouchStart:S}=e,w=Q.useRef(null);Q.useEffect(()=>{if(i==="render"&&h(!0),i==="viewport"){let G=K=>{K.forEach(ne=>{h(ne.isIntersecting)})},H=new IntersectionObserver(G,{threshold:.5});return w.current&&H.observe(w.current),()=>{H.disconnect()}}},[i]),Q.useEffect(()=>{if(s){let G=setTimeout(()=>{h(!0)},100);return()=>{clearTimeout(G)}}},[s]);let D=()=>{o(!0)},P=()=>{o(!1),h(!1)};return t?i!=="intent"?[u,w,{}]:[u,w,{onFocus:xl(m,D),onBlur:xl(p,P),onMouseEnter:xl(g,D),onMouseLeave:xl(E,P),onTouchStart:xl(S,D)}]:[!1,w,{}]}function xl(i,e){return t=>{i&&i(t),t.defaultPrevented||e(t)}}function u1({page:i,...e}){let{router:t}=FT(),s=Q.useMemo(()=>PT(t.routes,i,t.basename),[t.routes,i,t.basename]);return s?Q.createElement(h1,{page:i,matches:s,...e}):null}function c1(i){let{manifest:e,routeModules:t}=GT(),[s,o]=Q.useState([]);return Q.useEffect(()=>{let u=!1;return e1(i,e,t).then(h=>{u||o(h)}),()=>{u=!0}},[i,e,t]),s}function h1({page:i,matches:e,...t}){let s=Zs(),{manifest:o,routeModules:u}=GT(),{basename:h}=FT(),{loaderData:m,matches:p}=o1(),g=Q.useMemo(()=>Hv(i,e,p,o,s,"data"),[i,e,p,o,s]),E=Q.useMemo(()=>Hv(i,e,p,o,s,"assets"),[i,e,p,o,s]),S=Q.useMemo(()=>{if(i===s.pathname+s.search+s.hash)return[];let P=new Set,G=!1;if(e.forEach(K=>{var te;let ne=o.routes[K.route.id];!ne||!ne.hasLoader||(!g.some(oe=>oe.route.id===K.route.id)&&K.route.id in m&&((te=u[K.route.id])!=null&&te.shouldRevalidate)||ne.hasClientLoader?G=!0:P.add(K.route.id))}),P.size===0)return[];let H=a1(i,h);return G&&P.size>0&&H.searchParams.set("_routes",e.filter(K=>P.has(K.route.id)).map(K=>K.route.id).join(",")),[H.pathname+H.search]},[h,m,s,o,g,e,i,u]),w=Q.useMemo(()=>t1(E,o),[E,o]),D=c1(E);return Q.createElement(Q.Fragment,null,S.map(P=>Q.createElement("link",{key:P,rel:"prefetch",as:"fetch",href:P,...t})),w.map(P=>Q.createElement("link",{key:P,rel:"modulepreload",href:P,...t})),D.map(({key:P,link:G})=>Q.createElement("link",{key:P,...G})))}function f1(...i){return e=>{i.forEach(t=>{typeof t=="function"?t(e):t!=null&&(t.current=e)})}}var KT=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{KT&&(window.__reactRouterVersion="7.6.1")}catch{}function d1({basename:i,children:e,window:t}){let s=Q.useRef();s.current==null&&(s.current=eR({window:t,v5Compat:!0}));let o=s.current,[u,h]=Q.useState({action:o.action,location:o.location}),m=Q.useCallback(p=>{Q.startTransition(()=>h(p))},[h]);return Q.useLayoutEffect(()=>o.listen(m),[o,m]),Q.createElement(HR,{basename:i,children:e,location:u.location,navigationType:u.action,navigator:o})}var $T=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,YT=Q.forwardRef(function({onClick:e,discover:t="render",prefetch:s="none",relative:o,reloadDocument:u,replace:h,state:m,target:p,to:g,preventScrollReset:E,viewTransition:S,...w},D){let{basename:P}=Q.useContext(wi),G=typeof g=="string"&&$T.test(g),H,K=!1;if(typeof g=="string"&&G&&(H=g,KT))try{let R=new URL(window.location.href),N=g.startsWith("//")?new URL(R.protocol+g):new URL(g),x=tr(N.pathname,P);N.origin===R.origin&&x!=null?g=x+N.search+N.hash:K=!0}catch{Ti(!1,`<Link to="${g}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let ne=IR(g,{relative:o}),[te,oe,ue]=l1(s,w),Ae=y1(g,{replace:h,state:m,target:p,preventScrollReset:E,relative:o,viewTransition:S});function V(R){e&&e(R),R.defaultPrevented||Ae(R)}let b=Q.createElement("a",{...w,...ue,href:H||ne,onClick:K||u?e:V,ref:f1(D,oe),target:p,"data-discover":!G&&t==="render"?"true":void 0});return te&&!G?Q.createElement(Q.Fragment,null,b,Q.createElement(u1,{page:ne})):b});YT.displayName="Link";var m1=Q.forwardRef(function({"aria-current":e="page",caseSensitive:t=!1,className:s="",end:o=!1,style:u,to:h,viewTransition:m,children:p,...g},E){let S=cu(h,{relative:g.relative}),w=Zs(),D=Q.useContext(xh),{navigator:P,basename:G}=Q.useContext(wi),H=D!=null&&A1(S)&&m===!0,K=P.encodeLocation?P.encodeLocation(S).pathname:S.pathname,ne=w.pathname,te=D&&D.navigation&&D.navigation.location?D.navigation.location.pathname:null;t||(ne=ne.toLowerCase(),te=te?te.toLowerCase():null,K=K.toLowerCase()),te&&G&&(te=tr(te,G)||te);const oe=K!=="/"&&K.endsWith("/")?K.length-1:K.length;let ue=ne===K||!o&&ne.startsWith(K)&&ne.charAt(oe)==="/",Ae=te!=null&&(te===K||!o&&te.startsWith(K)&&te.charAt(K.length)==="/"),V={isActive:ue,isPending:Ae,isTransitioning:H},b=ue?e:void 0,R;typeof s=="function"?R=s(V):R=[s,ue?"active":null,Ae?"pending":null,H?"transitioning":null].filter(Boolean).join(" ");let N=typeof u=="function"?u(V):u;return Q.createElement(YT,{...g,"aria-current":b,className:R,ref:E,style:N,to:h,viewTransition:m},typeof p=="function"?p(V):p)});m1.displayName="NavLink";var p1=Q.forwardRef(({discover:i="render",fetcherKey:e,navigate:t,reloadDocument:s,replace:o,state:u,method:h=th,action:m,onSubmit:p,relative:g,preventScrollReset:E,viewTransition:S,...w},D)=>{let P=E1(),G=T1(m,{relative:g}),H=h.toLowerCase()==="get"?"get":"post",K=typeof m=="string"&&$T.test(m),ne=te=>{if(p&&p(te),te.defaultPrevented)return;te.preventDefault();let oe=te.nativeEvent.submitter,ue=(oe==null?void 0:oe.getAttribute("formmethod"))||h;P(oe||te.currentTarget,{fetcherKey:e,method:ue,navigate:t,replace:o,state:u,relative:g,preventScrollReset:E,viewTransition:S})};return Q.createElement("form",{ref:D,method:H,action:G,onSubmit:s?p:ne,...w,"data-discover":!K&&i==="render"?"true":void 0})});p1.displayName="Form";function g1(i){return`${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function QT(i){let e=Q.useContext(yo);return It(e,g1(i)),e}function y1(i,{target:e,replace:t,state:s,preventScrollReset:o,relative:u,viewTransition:h}={}){let m=CR(),p=Zs(),g=cu(i,{relative:u});return Q.useCallback(E=>{if(YR(E,e)){E.preventDefault();let S=t!==void 0?t:Wl(p)===Wl(g);m(i,{replace:S,state:s,preventScrollReset:o,relative:u,viewTransition:h})}},[p,m,g,t,s,e,i,o,u,h])}var _1=0,v1=()=>`__${String(++_1)}__`;function E1(){let{router:i}=QT("useSubmit"),{basename:e}=Q.useContext(wi),t=zR();return Q.useCallback(async(s,o={})=>{let{action:u,method:h,encType:m,formData:p,body:g}=WR(s,e);if(o.navigate===!1){let E=o.fetcherKey||v1();await i.fetch(E,t,o.action||u,{preventScrollReset:o.preventScrollReset,formData:p,body:g,formMethod:o.method||h,formEncType:o.encType||m,flushSync:o.flushSync})}else await i.navigate(o.action||u,{preventScrollReset:o.preventScrollReset,formData:p,body:g,formMethod:o.method||h,formEncType:o.encType||m,replace:o.replace,state:o.state,fromRouteId:t,flushSync:o.flushSync,viewTransition:o.viewTransition})},[i,e,t])}function T1(i,{relative:e}={}){let{basename:t}=Q.useContext(wi),s=Q.useContext(ar);It(s,"useFormAction must be used inside a RouteContext");let[o]=s.matches.slice(-1),u={...cu(i||".",{relative:e})},h=Zs();if(i==null){u.search=h.search;let m=new URLSearchParams(u.search),p=m.getAll("index");if(p.some(E=>E==="")){m.delete("index"),p.filter(S=>S).forEach(S=>m.append("index",S));let E=m.toString();u.search=E?`?${E}`:""}}return(!i||i===".")&&o.route.index&&(u.search=u.search?u.search.replace(/^\?/,"?index&"):"?index"),t!=="/"&&(u.pathname=u.pathname==="/"?t:Zi([t,u.pathname])),Wl(u)}function A1(i,e={}){let t=Q.useContext(BT);It(t!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:s}=QT("useViewTransitionState"),o=cu(i,{relative:e.relative});if(!t.isTransitioning)return!1;let u=tr(t.currentLocation.pathname,s)||t.currentLocation.pathname,h=tr(t.nextLocation.pathname,s)||t.nextLocation.pathname;return dh(o.pathname,h)!=null||dh(o.pathname,u)!=null}[...s1];const w1=()=>{};var Fv={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XT=function(i){const e=[];let t=0;for(let s=0;s<i.length;s++){let o=i.charCodeAt(s);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&s+1<i.length&&(i.charCodeAt(s+1)&64512)===56320?(o=65536+((o&1023)<<10)+(i.charCodeAt(++s)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},S1=function(i){const e=[];let t=0,s=0;for(;t<i.length;){const o=i[t++];if(o<128)e[s++]=String.fromCharCode(o);else if(o>191&&o<224){const u=i[t++];e[s++]=String.fromCharCode((o&31)<<6|u&63)}else if(o>239&&o<365){const u=i[t++],h=i[t++],m=i[t++],p=((o&7)<<18|(u&63)<<12|(h&63)<<6|m&63)-65536;e[s++]=String.fromCharCode(55296+(p>>10)),e[s++]=String.fromCharCode(56320+(p&1023))}else{const u=i[t++],h=i[t++];e[s++]=String.fromCharCode((o&15)<<12|(u&63)<<6|h&63)}}return e.join("")},WT={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(i,e){if(!Array.isArray(i))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let o=0;o<i.length;o+=3){const u=i[o],h=o+1<i.length,m=h?i[o+1]:0,p=o+2<i.length,g=p?i[o+2]:0,E=u>>2,S=(u&3)<<4|m>>4;let w=(m&15)<<2|g>>6,D=g&63;p||(D=64,h||(w=64)),s.push(t[E],t[S],t[w],t[D])}return s.join("")},encodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(i):this.encodeByteArray(XT(i),e)},decodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(i):S1(this.decodeStringToByteArray(i,e))},decodeStringToByteArray(i,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let o=0;o<i.length;){const u=t[i.charAt(o++)],m=o<i.length?t[i.charAt(o)]:0;++o;const g=o<i.length?t[i.charAt(o)]:64;++o;const S=o<i.length?t[i.charAt(o)]:64;if(++o,u==null||m==null||g==null||S==null)throw new b1;const w=u<<2|m>>4;if(s.push(w),g!==64){const D=m<<4&240|g>>2;if(s.push(D),S!==64){const P=g<<6&192|S;s.push(P)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let i=0;i<this.ENCODED_VALS.length;i++)this.byteToCharMap_[i]=this.ENCODED_VALS.charAt(i),this.charToByteMap_[this.byteToCharMap_[i]]=i,this.byteToCharMapWebSafe_[i]=this.ENCODED_VALS_WEBSAFE.charAt(i),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]]=i,i>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)]=i,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)]=i)}}};class b1 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const R1=function(i){const e=XT(i);return WT.encodeByteArray(e,!0)},mh=function(i){return R1(i).replace(/\./g,"")},ZT=function(i){try{return WT.decodeString(i,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I1(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C1=()=>I1().__FIREBASE_DEFAULTS__,D1=()=>{if(typeof process>"u"||typeof Fv>"u")return;const i=Fv.__FIREBASE_DEFAULTS__;if(i)return JSON.parse(i)},O1=()=>{if(typeof document>"u")return;let i;try{i=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=i&&ZT(i[1]);return e&&JSON.parse(e)},Uh=()=>{try{return w1()||C1()||D1()||O1()}catch(i){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${i}`);return}},JT=i=>{var e,t;return(t=(e=Uh())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[i]},e0=i=>{const e=JT(i);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},t0=()=>{var i;return(i=Uh())===null||i===void 0?void 0:i.config},n0=i=>{var e;return(e=Uh())===null||e===void 0?void 0:e[`_${i}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N1{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Js(i){return i.endsWith(".cloudworkstations.dev")}async function dp(i){return(await fetch(i,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function i0(i,e){if(i.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",o=i.iat||0,u=i.sub||i.user_id;if(!u)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const h=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:o,exp:o+3600,auth_time:o,sub:u,user_id:u,firebase:{sign_in_provider:"custom",identities:{}}},i);return[mh(JSON.stringify(t)),mh(JSON.stringify(h)),""].join(".")}const Hl={};function M1(){const i={prod:[],emulator:[]};for(const e of Object.keys(Hl))Hl[e]?i.emulator.push(e):i.prod.push(e);return i}function V1(i){let e=document.getElementById(i),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",i),t=!0),{created:t,element:e}}let Gv=!1;function mp(i,e){if(typeof window>"u"||typeof document>"u"||!Js(window.location.host)||Hl[i]===e||Hl[i]||Gv)return;Hl[i]=e;function t(w){return`__firebase__banner__${w}`}const s="__firebase__banner",u=M1().prod.length>0;function h(){const w=document.getElementById(s);w&&w.remove()}function m(w){w.style.display="flex",w.style.background="#7faaf0",w.style.position="fixed",w.style.bottom="5px",w.style.left="5px",w.style.padding=".5em",w.style.borderRadius="5px",w.style.alignItems="center"}function p(w,D){w.setAttribute("width","24"),w.setAttribute("id",D),w.setAttribute("height","24"),w.setAttribute("viewBox","0 0 24 24"),w.setAttribute("fill","none"),w.style.marginLeft="-6px"}function g(){const w=document.createElement("span");return w.style.cursor="pointer",w.style.marginLeft="16px",w.style.fontSize="24px",w.innerHTML=" &times;",w.onclick=()=>{Gv=!0,h()},w}function E(w,D){w.setAttribute("id",D),w.innerText="Learn more",w.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",w.setAttribute("target","__blank"),w.style.paddingLeft="5px",w.style.textDecoration="underline"}function S(){const w=V1(s),D=t("text"),P=document.getElementById(D)||document.createElement("span"),G=t("learnmore"),H=document.getElementById(G)||document.createElement("a"),K=t("preprendIcon"),ne=document.getElementById(K)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(w.created){const te=w.element;m(te),E(H,G);const oe=g();p(ne,K),te.append(ne,P,H,oe),document.body.appendChild(te)}u?(P.innerText="Preview backend disconnected.",ne.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(ne.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,P.innerText="Preview backend running in this workspace."),P.setAttribute("id",D)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",S):S()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function P1(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Zt())}function x1(){var i;const e=(i=Uh())===null||i===void 0?void 0:i.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function k1(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function r0(){const i=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof i=="object"&&i.id!==void 0}function L1(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function U1(){const i=Zt();return i.indexOf("MSIE ")>=0||i.indexOf("Trident/")>=0}function z1(){return!x1()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function s0(){try{return typeof indexedDB=="object"}catch{return!1}}function a0(){return new Promise((i,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(s);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(s),i(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{var u;e(((u=o.error)===null||u===void 0?void 0:u.message)||"")}}catch(t){e(t)}})}function B1(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j1="FirebaseError";class zn extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=j1,Object.setPrototypeOf(this,zn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ea.prototype.create)}}class ea{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},o=`${this.service}/${e}`,u=this.errors[e],h=u?q1(u,s):"Error",m=`${this.serviceName}: ${h} (${o}).`;return new zn(o,m,s)}}function q1(i,e){return i.replace(H1,(t,s)=>{const o=e[s];return o!=null?String(o):`<${s}?>`})}const H1=/\{\$([^}]+)}/g;function F1(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}function $r(i,e){if(i===e)return!0;const t=Object.keys(i),s=Object.keys(e);for(const o of t){if(!s.includes(o))return!1;const u=i[o],h=e[o];if(Kv(u)&&Kv(h)){if(!$r(u,h))return!1}else if(u!==h)return!1}for(const o of s)if(!t.includes(o))return!1;return!0}function Kv(i){return i!==null&&typeof i=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hu(i){const e=[];for(const[t,s]of Object.entries(i))Array.isArray(s)?s.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Ll(i){const e={};return i.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[o,u]=s.split("=");e[decodeURIComponent(o)]=decodeURIComponent(u)}}),e}function Ul(i){const e=i.indexOf("?");if(!e)return"";const t=i.indexOf("#",e);return i.substring(e,t>0?t:void 0)}function G1(i,e){const t=new K1(i,e);return t.subscribe.bind(t)}class K1{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let o;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");$1(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:s},o.next===void 0&&(o.next=gm),o.error===void 0&&(o.error=gm),o.complete===void 0&&(o.complete=gm);const u=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),u}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function $1(i,e){if(typeof i!="object"||i===null)return!1;for(const t of e)if(t in i&&typeof i[t]=="function")return!0;return!1}function gm(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y1=1e3,Q1=2,X1=4*60*60*1e3,W1=.5;function $v(i,e=Y1,t=Q1){const s=e*Math.pow(t,i),o=Math.round(W1*s*(Math.random()-.5)*2);return Math.min(X1,s+o)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tt(i){return i&&i._delegate?i._delegate:i}class Un{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const js="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z1{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new N1;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&s.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),o=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(u){if(o)return null;throw u}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(eI(e))try{this.getOrInitializeService({instanceIdentifier:js})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const u=this.getOrInitializeService({instanceIdentifier:o});s.resolve(u)}catch{}}}}clearInstance(e=js){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=js){return this.instances.has(e)}getOptions(e=js){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[u,h]of this.instancesDeferred.entries()){const m=this.normalizeInstanceIdentifier(u);s===m&&h.resolve(o)}return o}onInit(e,t){var s;const o=this.normalizeInstanceIdentifier(t),u=(s=this.onInitCallbacks.get(o))!==null&&s!==void 0?s:new Set;u.add(e),this.onInitCallbacks.set(o,u);const h=this.instances.get(o);return h&&e(h,o),()=>{u.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const o of s)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:J1(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=js){return this.component?this.component.multipleInstances?e:js:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function J1(i){return i===js?void 0:i}function eI(i){return i.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Z1(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ve;(function(i){i[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT"})(Ve||(Ve={}));const nI={debug:Ve.DEBUG,verbose:Ve.VERBOSE,info:Ve.INFO,warn:Ve.WARN,error:Ve.ERROR,silent:Ve.SILENT},iI=Ve.INFO,rI={[Ve.DEBUG]:"log",[Ve.VERBOSE]:"log",[Ve.INFO]:"info",[Ve.WARN]:"warn",[Ve.ERROR]:"error"},sI=(i,e,...t)=>{if(e<i.logLevel)return;const s=new Date().toISOString(),o=rI[e];if(o)console[o](`[${s}]  ${i.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class zh{constructor(e){this.name=e,this._logLevel=iI,this._logHandler=sI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ve))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?nI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ve.DEBUG,...e),this._logHandler(this,Ve.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ve.VERBOSE,...e),this._logHandler(this,Ve.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ve.INFO,...e),this._logHandler(this,Ve.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ve.WARN,...e),this._logHandler(this,Ve.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ve.ERROR,...e),this._logHandler(this,Ve.ERROR,...e)}}const aI=(i,e)=>e.some(t=>i instanceof t);let Yv,Qv;function oI(){return Yv||(Yv=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function lI(){return Qv||(Qv=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const o0=new WeakMap,Vm=new WeakMap,l0=new WeakMap,ym=new WeakMap,pp=new WeakMap;function uI(i){const e=new Promise((t,s)=>{const o=()=>{i.removeEventListener("success",u),i.removeEventListener("error",h)},u=()=>{t(Hr(i.result)),o()},h=()=>{s(i.error),o()};i.addEventListener("success",u),i.addEventListener("error",h)});return e.then(t=>{t instanceof IDBCursor&&o0.set(t,i)}).catch(()=>{}),pp.set(e,i),e}function cI(i){if(Vm.has(i))return;const e=new Promise((t,s)=>{const o=()=>{i.removeEventListener("complete",u),i.removeEventListener("error",h),i.removeEventListener("abort",h)},u=()=>{t(),o()},h=()=>{s(i.error||new DOMException("AbortError","AbortError")),o()};i.addEventListener("complete",u),i.addEventListener("error",h),i.addEventListener("abort",h)});Vm.set(i,e)}let Pm={get(i,e,t){if(i instanceof IDBTransaction){if(e==="done")return Vm.get(i);if(e==="objectStoreNames")return i.objectStoreNames||l0.get(i);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Hr(i[e])},set(i,e,t){return i[e]=t,!0},has(i,e){return i instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in i}};function hI(i){Pm=i(Pm)}function fI(i){return i===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=i.call(_m(this),e,...t);return l0.set(s,e.sort?e.sort():[e]),Hr(s)}:lI().includes(i)?function(...e){return i.apply(_m(this),e),Hr(o0.get(this))}:function(...e){return Hr(i.apply(_m(this),e))}}function dI(i){return typeof i=="function"?fI(i):(i instanceof IDBTransaction&&cI(i),aI(i,oI())?new Proxy(i,Pm):i)}function Hr(i){if(i instanceof IDBRequest)return uI(i);if(ym.has(i))return ym.get(i);const e=dI(i);return e!==i&&(ym.set(i,e),pp.set(e,i)),e}const _m=i=>pp.get(i);function u0(i,e,{blocked:t,upgrade:s,blocking:o,terminated:u}={}){const h=indexedDB.open(i,e),m=Hr(h);return s&&h.addEventListener("upgradeneeded",p=>{s(Hr(h.result),p.oldVersion,p.newVersion,Hr(h.transaction),p)}),t&&h.addEventListener("blocked",p=>t(p.oldVersion,p.newVersion,p)),m.then(p=>{u&&p.addEventListener("close",()=>u()),o&&p.addEventListener("versionchange",g=>o(g.oldVersion,g.newVersion,g))}).catch(()=>{}),m}const mI=["get","getKey","getAll","getAllKeys","count"],pI=["put","add","delete","clear"],vm=new Map;function Xv(i,e){if(!(i instanceof IDBDatabase&&!(e in i)&&typeof e=="string"))return;if(vm.get(e))return vm.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,o=pI.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(o||mI.includes(t)))return;const u=async function(h,...m){const p=this.transaction(h,o?"readwrite":"readonly");let g=p.store;return s&&(g=g.index(m.shift())),(await Promise.all([g[t](...m),o&&p.done]))[0]};return vm.set(e,u),u}hI(i=>({...i,get:(e,t,s)=>Xv(e,t)||i.get(e,t,s),has:(e,t)=>!!Xv(e,t)||i.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gI{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(yI(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function yI(i){const e=i.getComponent();return(e==null?void 0:e.type)==="VERSION"}const xm="@firebase/app",Wv="0.13.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nr=new zh("@firebase/app"),_I="@firebase/app-compat",vI="@firebase/analytics-compat",EI="@firebase/analytics",TI="@firebase/app-check-compat",AI="@firebase/app-check",wI="@firebase/auth",SI="@firebase/auth-compat",bI="@firebase/database",RI="@firebase/data-connect",II="@firebase/database-compat",CI="@firebase/functions",DI="@firebase/functions-compat",OI="@firebase/installations",NI="@firebase/installations-compat",MI="@firebase/messaging",VI="@firebase/messaging-compat",PI="@firebase/performance",xI="@firebase/performance-compat",kI="@firebase/remote-config",LI="@firebase/remote-config-compat",UI="@firebase/storage",zI="@firebase/storage-compat",BI="@firebase/firestore",jI="@firebase/ai",qI="@firebase/firestore-compat",HI="firebase",FI="11.8.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const km="[DEFAULT]",GI={[xm]:"fire-core",[_I]:"fire-core-compat",[EI]:"fire-analytics",[vI]:"fire-analytics-compat",[AI]:"fire-app-check",[TI]:"fire-app-check-compat",[wI]:"fire-auth",[SI]:"fire-auth-compat",[bI]:"fire-rtdb",[RI]:"fire-data-connect",[II]:"fire-rtdb-compat",[CI]:"fire-fn",[DI]:"fire-fn-compat",[OI]:"fire-iid",[NI]:"fire-iid-compat",[MI]:"fire-fcm",[VI]:"fire-fcm-compat",[PI]:"fire-perf",[xI]:"fire-perf-compat",[kI]:"fire-rc",[LI]:"fire-rc-compat",[UI]:"fire-gcs",[zI]:"fire-gcs-compat",[BI]:"fire-fst",[qI]:"fire-fst-compat",[jI]:"fire-vertex","fire-js":"fire-js",[HI]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ph=new Map,KI=new Map,Lm=new Map;function Zv(i,e){try{i.container.addComponent(e)}catch(t){nr.debug(`Component ${e.name} failed to register with FirebaseApp ${i.name}`,t)}}function Yn(i){const e=i.name;if(Lm.has(e))return nr.debug(`There were multiple attempts to register component ${e}.`),!1;Lm.set(e,i);for(const t of ph.values())Zv(t,i);for(const t of KI.values())Zv(t,i);return!0}function ts(i,e){const t=i.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),i.container.getProvider(e)}function Tn(i){return i==null?!1:i.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $I={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Fr=new ea("app","Firebase",$I);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YI{constructor(e,t,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Un("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Fr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ta=FI;function c0(i,e={}){let t=i;typeof e!="object"&&(e={name:e});const s=Object.assign({name:km,automaticDataCollectionEnabled:!0},e),o=s.name;if(typeof o!="string"||!o)throw Fr.create("bad-app-name",{appName:String(o)});if(t||(t=t0()),!t)throw Fr.create("no-options");const u=ph.get(o);if(u){if($r(t,u.options)&&$r(s,u.config))return u;throw Fr.create("duplicate-app",{appName:o})}const h=new tI(o);for(const p of Lm.values())h.addComponent(p);const m=new YI(t,s,h);return ph.set(o,m),m}function Bh(i=km){const e=ph.get(i);if(!e&&i===km&&t0())return c0();if(!e)throw Fr.create("no-app",{appName:i});return e}function un(i,e,t){var s;let o=(s=GI[i])!==null&&s!==void 0?s:i;t&&(o+=`-${t}`);const u=o.match(/\s|\//),h=e.match(/\s|\//);if(u||h){const m=[`Unable to register library "${o}" with version "${e}":`];u&&m.push(`library name "${o}" contains illegal characters (whitespace or "/")`),u&&h&&m.push("and"),h&&m.push(`version name "${e}" contains illegal characters (whitespace or "/")`),nr.warn(m.join(" "));return}Yn(new Un(`${o}-version`,()=>({library:o,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QI="firebase-heartbeat-database",XI=1,Zl="firebase-heartbeat-store";let Em=null;function h0(){return Em||(Em=u0(QI,XI,{upgrade:(i,e)=>{switch(e){case 0:try{i.createObjectStore(Zl)}catch(t){console.warn(t)}}}}).catch(i=>{throw Fr.create("idb-open",{originalErrorMessage:i.message})})),Em}async function WI(i){try{const t=(await h0()).transaction(Zl),s=await t.objectStore(Zl).get(f0(i));return await t.done,s}catch(e){if(e instanceof zn)nr.warn(e.message);else{const t=Fr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});nr.warn(t.message)}}}async function Jv(i,e){try{const s=(await h0()).transaction(Zl,"readwrite");await s.objectStore(Zl).put(e,f0(i)),await s.done}catch(t){if(t instanceof zn)nr.warn(t.message);else{const s=Fr.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});nr.warn(s.message)}}}function f0(i){return`${i.name}!${i.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZI=1024,JI=30;class eC{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new nC(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),u=eE();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===u||this._heartbeatsCache.heartbeats.some(h=>h.date===u))return;if(this._heartbeatsCache.heartbeats.push({date:u,agent:o}),this._heartbeatsCache.heartbeats.length>JI){const h=iC(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(h,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){nr.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=eE(),{heartbeatsToSend:s,unsentEntries:o}=tC(this._heartbeatsCache.heartbeats),u=mh(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),u}catch(t){return nr.warn(t),""}}}function eE(){return new Date().toISOString().substring(0,10)}function tC(i,e=ZI){const t=[];let s=i.slice();for(const o of i){const u=t.find(h=>h.agent===o.agent);if(u){if(u.dates.push(o.date),tE(t)>e){u.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),tE(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class nC{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return s0()?a0().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await WI(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return Jv(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return Jv(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...e.heartbeats]})}else return}}function tE(i){return mh(JSON.stringify({version:2,heartbeats:i})).length}function iC(i){if(i.length===0)return-1;let e=0,t=i[0].date;for(let s=1;s<i.length;s++)i[s].date<t&&(t=i[s].date,e=s);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rC(i){Yn(new Un("platform-logger",e=>new gI(e),"PRIVATE")),Yn(new Un("heartbeat",e=>new eC(e),"PRIVATE")),un(xm,Wv,i),un(xm,Wv,"esm2017"),un("fire-js","")}rC("");var sC="firebase",aC="11.8.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */un(sC,aC,"app");const d0="@firebase/installations",gp="0.6.17";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m0=1e4,p0=`w:${gp}`,g0="FIS_v2",oC="https://firebaseinstallations.googleapis.com/v1",lC=60*60*1e3,uC="installations",cC="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hC={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Gs=new ea(uC,cC,hC);function y0(i){return i instanceof zn&&i.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _0({projectId:i}){return`${oC}/projects/${i}/installations`}function v0(i){return{token:i.token,requestStatus:2,expiresIn:dC(i.expiresIn),creationTime:Date.now()}}async function E0(i,e){const s=(await e.json()).error;return Gs.create("request-failed",{requestName:i,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function T0({apiKey:i}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":i})}function fC(i,{refreshToken:e}){const t=T0(i);return t.append("Authorization",mC(e)),t}async function A0(i){const e=await i();return e.status>=500&&e.status<600?i():e}function dC(i){return Number(i.replace("s","000"))}function mC(i){return`${g0} ${i}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pC({appConfig:i,heartbeatServiceProvider:e},{fid:t}){const s=_0(i),o=T0(i),u=e.getImmediate({optional:!0});if(u){const g=await u.getHeartbeatsHeader();g&&o.append("x-firebase-client",g)}const h={fid:t,authVersion:g0,appId:i.appId,sdkVersion:p0},m={method:"POST",headers:o,body:JSON.stringify(h)},p=await A0(()=>fetch(s,m));if(p.ok){const g=await p.json();return{fid:g.fid||t,registrationStatus:2,refreshToken:g.refreshToken,authToken:v0(g.authToken)}}else throw await E0("Create Installation",p)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w0(i){return new Promise(e=>{setTimeout(e,i)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gC(i){return btoa(String.fromCharCode(...i)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yC=/^[cdef][\w-]{21}$/,Um="";function _C(){try{const i=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(i),i[0]=112+i[0]%16;const t=vC(i);return yC.test(t)?t:Um}catch{return Um}}function vC(i){return gC(i).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jh(i){return`${i.appName}!${i.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S0=new Map;function b0(i,e){const t=jh(i);R0(t,e),EC(t,e)}function R0(i,e){const t=S0.get(i);if(t)for(const s of t)s(e)}function EC(i,e){const t=TC();t&&t.postMessage({key:i,fid:e}),AC()}let qs=null;function TC(){return!qs&&"BroadcastChannel"in self&&(qs=new BroadcastChannel("[Firebase] FID Change"),qs.onmessage=i=>{R0(i.data.key,i.data.fid)}),qs}function AC(){S0.size===0&&qs&&(qs.close(),qs=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wC="firebase-installations-database",SC=1,Ks="firebase-installations-store";let Tm=null;function yp(){return Tm||(Tm=u0(wC,SC,{upgrade:(i,e)=>{switch(e){case 0:i.createObjectStore(Ks)}}})),Tm}async function gh(i,e){const t=jh(i),o=(await yp()).transaction(Ks,"readwrite"),u=o.objectStore(Ks),h=await u.get(t);return await u.put(e,t),await o.done,(!h||h.fid!==e.fid)&&b0(i,e.fid),e}async function I0(i){const e=jh(i),s=(await yp()).transaction(Ks,"readwrite");await s.objectStore(Ks).delete(e),await s.done}async function qh(i,e){const t=jh(i),o=(await yp()).transaction(Ks,"readwrite"),u=o.objectStore(Ks),h=await u.get(t),m=e(h);return m===void 0?await u.delete(t):await u.put(m,t),await o.done,m&&(!h||h.fid!==m.fid)&&b0(i,m.fid),m}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _p(i){let e;const t=await qh(i.appConfig,s=>{const o=bC(s),u=RC(i,o);return e=u.registrationPromise,u.installationEntry});return t.fid===Um?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function bC(i){const e=i||{fid:_C(),registrationStatus:0};return C0(e)}function RC(i,e){if(e.registrationStatus===0){if(!navigator.onLine){const o=Promise.reject(Gs.create("app-offline"));return{installationEntry:e,registrationPromise:o}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},s=IC(i,t);return{installationEntry:t,registrationPromise:s}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:CC(i)}:{installationEntry:e}}async function IC(i,e){try{const t=await pC(i,e);return gh(i.appConfig,t)}catch(t){throw y0(t)&&t.customData.serverCode===409?await I0(i.appConfig):await gh(i.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function CC(i){let e=await nE(i.appConfig);for(;e.registrationStatus===1;)await w0(100),e=await nE(i.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:s}=await _p(i);return s||t}return e}function nE(i){return qh(i,e=>{if(!e)throw Gs.create("installation-not-found");return C0(e)})}function C0(i){return DC(i)?{fid:i.fid,registrationStatus:0}:i}function DC(i){return i.registrationStatus===1&&i.registrationTime+m0<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function OC({appConfig:i,heartbeatServiceProvider:e},t){const s=NC(i,t),o=fC(i,t),u=e.getImmediate({optional:!0});if(u){const g=await u.getHeartbeatsHeader();g&&o.append("x-firebase-client",g)}const h={installation:{sdkVersion:p0,appId:i.appId}},m={method:"POST",headers:o,body:JSON.stringify(h)},p=await A0(()=>fetch(s,m));if(p.ok){const g=await p.json();return v0(g)}else throw await E0("Generate Auth Token",p)}function NC(i,{fid:e}){return`${_0(i)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vp(i,e=!1){let t;const s=await qh(i.appConfig,u=>{if(!D0(u))throw Gs.create("not-registered");const h=u.authToken;if(!e&&PC(h))return u;if(h.requestStatus===1)return t=MC(i,e),u;{if(!navigator.onLine)throw Gs.create("app-offline");const m=kC(u);return t=VC(i,m),m}});return t?await t:s.authToken}async function MC(i,e){let t=await iE(i.appConfig);for(;t.authToken.requestStatus===1;)await w0(100),t=await iE(i.appConfig);const s=t.authToken;return s.requestStatus===0?vp(i,e):s}function iE(i){return qh(i,e=>{if(!D0(e))throw Gs.create("not-registered");const t=e.authToken;return LC(t)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function VC(i,e){try{const t=await OC(i,e),s=Object.assign(Object.assign({},e),{authToken:t});return await gh(i.appConfig,s),t}catch(t){if(y0(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await I0(i.appConfig);else{const s=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await gh(i.appConfig,s)}throw t}}function D0(i){return i!==void 0&&i.registrationStatus===2}function PC(i){return i.requestStatus===2&&!xC(i)}function xC(i){const e=Date.now();return e<i.creationTime||i.creationTime+i.expiresIn<e+lC}function kC(i){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},i),{authToken:e})}function LC(i){return i.requestStatus===1&&i.requestTime+m0<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function UC(i){const e=i,{installationEntry:t,registrationPromise:s}=await _p(e);return s?s.catch(console.error):vp(e).catch(console.error),t.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zC(i,e=!1){const t=i;return await BC(t),(await vp(t,e)).token}async function BC(i){const{registrationPromise:e}=await _p(i);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jC(i){if(!i||!i.options)throw Am("App Configuration");if(!i.name)throw Am("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!i.options[t])throw Am(t);return{appName:i.name,projectId:i.options.projectId,apiKey:i.options.apiKey,appId:i.options.appId}}function Am(i){return Gs.create("missing-app-config-values",{valueName:i})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O0="installations",qC="installations-internal",HC=i=>{const e=i.getProvider("app").getImmediate(),t=jC(e),s=ts(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},FC=i=>{const e=i.getProvider("app").getImmediate(),t=ts(e,O0).getImmediate();return{getId:()=>UC(t),getToken:o=>zC(t,o)}};function GC(){Yn(new Un(O0,HC,"PUBLIC")),Yn(new Un(qC,FC,"PRIVATE"))}GC();un(d0,gp);un(d0,gp,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yh="analytics",KC="firebase_id",$C="origin",YC=60*1e3,QC="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Ep="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cn=new zh("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XC={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},wn=new ea("analytics","Analytics",XC);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WC(i){if(!i.startsWith(Ep)){const e=wn.create("invalid-gtag-resource",{gtagURL:i});return cn.warn(e.message),""}return i}function N0(i){return Promise.all(i.map(e=>e.catch(t=>t)))}function ZC(i,e){let t;return window.trustedTypes&&(t=window.trustedTypes.createPolicy(i,e)),t}function JC(i,e){const t=ZC("firebase-js-sdk-policy",{createScriptURL:WC}),s=document.createElement("script"),o=`${Ep}?l=${i}&id=${e}`;s.src=t?t==null?void 0:t.createScriptURL(o):o,s.async=!0,document.head.appendChild(s)}function e2(i){let e=[];return Array.isArray(window[i])?e=window[i]:window[i]=e,e}async function t2(i,e,t,s,o,u){const h=s[o];try{if(h)await e[h];else{const p=(await N0(t)).find(g=>g.measurementId===o);p&&await e[p.appId]}}catch(m){cn.error(m)}i("config",o,u)}async function n2(i,e,t,s,o){try{let u=[];if(o&&o.send_to){let h=o.send_to;Array.isArray(h)||(h=[h]);const m=await N0(t);for(const p of h){const g=m.find(S=>S.measurementId===p),E=g&&e[g.appId];if(E)u.push(E);else{u=[];break}}}u.length===0&&(u=Object.values(e)),await Promise.all(u),i("event",s,o||{})}catch(u){cn.error(u)}}function i2(i,e,t,s){async function o(u,...h){try{if(u==="event"){const[m,p]=h;await n2(i,e,t,m,p)}else if(u==="config"){const[m,p]=h;await t2(i,e,t,s,m,p)}else if(u==="consent"){const[m,p]=h;i("consent",m,p)}else if(u==="get"){const[m,p,g]=h;i("get",m,p,g)}else if(u==="set"){const[m]=h;i("set",m)}else i(u,...h)}catch(m){cn.error(m)}}return o}function r2(i,e,t,s,o){let u=function(...h){window[s].push(arguments)};return window[o]&&typeof window[o]=="function"&&(u=window[o]),window[o]=i2(u,i,e,t),{gtagCore:u,wrappedGtag:window[o]}}function s2(i){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(Ep)&&t.src.includes(i))return t;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a2=30,o2=1e3;class l2{constructor(e={},t=o2){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const M0=new l2;function u2(i){return new Headers({Accept:"application/json","x-goog-api-key":i})}async function c2(i){var e;const{appId:t,apiKey:s}=i,o={method:"GET",headers:u2(s)},u=QC.replace("{app-id}",t),h=await fetch(u,o);if(h.status!==200&&h.status!==304){let m="";try{const p=await h.json();!((e=p.error)===null||e===void 0)&&e.message&&(m=p.error.message)}catch{}throw wn.create("config-fetch-failed",{httpStatus:h.status,responseMessage:m})}return h.json()}async function h2(i,e=M0,t){const{appId:s,apiKey:o,measurementId:u}=i.options;if(!s)throw wn.create("no-app-id");if(!o){if(u)return{measurementId:u,appId:s};throw wn.create("no-api-key")}const h=e.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},m=new m2;return setTimeout(async()=>{m.abort()},YC),V0({appId:s,apiKey:o,measurementId:u},h,m,e)}async function V0(i,{throttleEndTimeMillis:e,backoffCount:t},s,o=M0){var u;const{appId:h,measurementId:m}=i;try{await f2(s,e)}catch(p){if(m)return cn.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${m} provided in the "measurementId" field in the local Firebase config. [${p==null?void 0:p.message}]`),{appId:h,measurementId:m};throw p}try{const p=await c2(i);return o.deleteThrottleMetadata(h),p}catch(p){const g=p;if(!d2(g)){if(o.deleteThrottleMetadata(h),m)return cn.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${m} provided in the "measurementId" field in the local Firebase config. [${g==null?void 0:g.message}]`),{appId:h,measurementId:m};throw p}const E=Number((u=g==null?void 0:g.customData)===null||u===void 0?void 0:u.httpStatus)===503?$v(t,o.intervalMillis,a2):$v(t,o.intervalMillis),S={throttleEndTimeMillis:Date.now()+E,backoffCount:t+1};return o.setThrottleMetadata(h,S),cn.debug(`Calling attemptFetch again in ${E} millis`),V0(i,S,s,o)}}function f2(i,e){return new Promise((t,s)=>{const o=Math.max(e-Date.now(),0),u=setTimeout(t,o);i.addEventListener(()=>{clearTimeout(u),s(wn.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function d2(i){if(!(i instanceof zn)||!i.customData)return!1;const e=Number(i.customData.httpStatus);return e===429||e===500||e===503||e===504}class m2{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function p2(i,e,t,s,o){if(o&&o.global){i("event",t,s);return}else{const u=await e,h=Object.assign(Object.assign({},s),{send_to:u});i("event",t,h)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function g2(){if(s0())try{await a0()}catch(i){return cn.warn(wn.create("indexeddb-unavailable",{errorInfo:i==null?void 0:i.toString()}).message),!1}else return cn.warn(wn.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function y2(i,e,t,s,o,u,h){var m;const p=h2(i);p.then(D=>{t[D.measurementId]=D.appId,i.options.measurementId&&D.measurementId!==i.options.measurementId&&cn.warn(`The measurement ID in the local Firebase config (${i.options.measurementId}) does not match the measurement ID fetched from the server (${D.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(D=>cn.error(D)),e.push(p);const g=g2().then(D=>{if(D)return s.getId()}),[E,S]=await Promise.all([p,g]);s2(u)||JC(u,E.measurementId),o("js",new Date);const w=(m=h==null?void 0:h.config)!==null&&m!==void 0?m:{};return w[$C]="firebase",w.update=!0,S!=null&&(w[KC]=S),o("config",E.measurementId,w),E.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _2{constructor(e){this.app=e}_delete(){return delete Fl[this.app.options.appId],Promise.resolve()}}let Fl={},rE=[];const sE={};let wm="dataLayer",v2="gtag",aE,P0,oE=!1;function E2(){const i=[];if(r0()&&i.push("This is a browser extension environment."),B1()||i.push("Cookies are not available."),i.length>0){const e=i.map((s,o)=>`(${o+1}) ${s}`).join(" "),t=wn.create("invalid-analytics-context",{errorInfo:e});cn.warn(t.message)}}function T2(i,e,t){E2();const s=i.options.appId;if(!s)throw wn.create("no-app-id");if(!i.options.apiKey)if(i.options.measurementId)cn.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${i.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw wn.create("no-api-key");if(Fl[s]!=null)throw wn.create("already-exists",{id:s});if(!oE){e2(wm);const{wrappedGtag:u,gtagCore:h}=r2(Fl,rE,sE,wm,v2);P0=u,aE=h,oE=!0}return Fl[s]=y2(i,rE,sE,e,aE,wm,t),new _2(i)}function A2(i=Bh()){i=Tt(i);const e=ts(i,yh);return e.isInitialized()?e.getImmediate():w2(i)}function w2(i,e={}){const t=ts(i,yh);if(t.isInitialized()){const o=t.getImmediate();if($r(e,t.getOptions()))return o;throw wn.create("already-initialized")}return t.initialize({options:e})}function S2(i,e,t,s){i=Tt(i),p2(P0,Fl[i.app.options.appId],e,t,s).catch(o=>cn.error(o))}const lE="@firebase/analytics",uE="0.10.16";function b2(){Yn(new Un(yh,(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),o=e.getProvider("installations-internal").getImmediate();return T2(s,o,t)},"PUBLIC")),Yn(new Un("analytics-internal",i,"PRIVATE")),un(lE,uE),un(lE,uE,"esm2017");function i(e){try{const t=e.getProvider(yh).getImmediate();return{logEvent:(s,o,u)=>S2(t,s,o,u)}}catch(t){throw wn.create("interop-component-reg-failed",{reason:t})}}}b2();function Tp(i,e){var t={};for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&e.indexOf(s)<0&&(t[s]=i[s]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,s=Object.getOwnPropertySymbols(i);o<s.length;o++)e.indexOf(s[o])<0&&Object.prototype.propertyIsEnumerable.call(i,s[o])&&(t[s[o]]=i[s[o]]);return t}function x0(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const R2=x0,k0=new ea("auth","Firebase",x0());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _h=new zh("@firebase/auth");function I2(i,...e){_h.logLevel<=Ve.WARN&&_h.warn(`Auth (${ta}): ${i}`,...e)}function ih(i,...e){_h.logLevel<=Ve.ERROR&&_h.error(`Auth (${ta}): ${i}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qn(i,...e){throw Ap(i,...e)}function gi(i,...e){return Ap(i,...e)}function L0(i,e,t){const s=Object.assign(Object.assign({},R2()),{[e]:t});return new ea("auth","Firebase",s).create(e,{appName:i.name})}function Ji(i){return L0(i,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Ap(i,...e){if(typeof i!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=i.name),i._errorFactory.create(t,...s)}return k0.create(i,...e)}function _e(i,e,...t){if(!i)throw Ap(e,...t)}function Xi(i){const e="INTERNAL ASSERTION FAILED: "+i;throw ih(e),new Error(e)}function ir(i,e){i||Xi(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zm(){var i;return typeof self<"u"&&((i=self.location)===null||i===void 0?void 0:i.href)||""}function C2(){return cE()==="http:"||cE()==="https:"}function cE(){var i;return typeof self<"u"&&((i=self.location)===null||i===void 0?void 0:i.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D2(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(C2()||r0()||"connection"in navigator)?navigator.onLine:!0}function O2(){if(typeof navigator>"u")return null;const i=navigator;return i.languages&&i.languages[0]||i.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fu{constructor(e,t){this.shortDelay=e,this.longDelay=t,ir(t>e,"Short delay should be less than long delay!"),this.isMobile=P1()||L1()}get(){return D2()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wp(i,e){ir(i.emulator,"Emulator should always be set here");const{url:t}=i.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U0{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Xi("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Xi("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Xi("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N2={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M2=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],V2=new fu(3e4,6e4);function ns(i,e){return i.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:i.tenantId}):e}async function is(i,e,t,s,o={}){return z0(i,o,async()=>{let u={},h={};s&&(e==="GET"?h=s:u={body:JSON.stringify(s)});const m=hu(Object.assign({key:i.config.apiKey},h)).slice(1),p=await i._getAdditionalHeaders();p["Content-Type"]="application/json",i.languageCode&&(p["X-Firebase-Locale"]=i.languageCode);const g=Object.assign({method:e,headers:p},u);return k1()||(g.referrerPolicy="no-referrer"),i.emulatorConfig&&Js(i.emulatorConfig.host)&&(g.credentials="include"),U0.fetch()(await B0(i,i.config.apiHost,t,m),g)})}async function z0(i,e,t){i._canInitEmulator=!1;const s=Object.assign(Object.assign({},N2),e);try{const o=new x2(i),u=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const h=await u.json();if("needConfirmation"in h)throw $c(i,"account-exists-with-different-credential",h);if(u.ok&&!("errorMessage"in h))return h;{const m=u.ok?h.errorMessage:h.error.message,[p,g]=m.split(" : ");if(p==="FEDERATED_USER_ID_ALREADY_LINKED")throw $c(i,"credential-already-in-use",h);if(p==="EMAIL_EXISTS")throw $c(i,"email-already-in-use",h);if(p==="USER_DISABLED")throw $c(i,"user-disabled",h);const E=s[p]||p.toLowerCase().replace(/[_\s]+/g,"-");if(g)throw L0(i,E,g);Qn(i,E)}}catch(o){if(o instanceof zn)throw o;Qn(i,"network-request-failed",{message:String(o)})}}async function du(i,e,t,s,o={}){const u=await is(i,e,t,s,o);return"mfaPendingCredential"in u&&Qn(i,"multi-factor-auth-required",{_serverResponse:u}),u}async function B0(i,e,t,s){const o=`${e}${t}?${s}`,u=i,h=u.config.emulator?wp(i.config,o):`${i.config.apiScheme}://${o}`;return M2.includes(t)&&(await u._persistenceManagerAvailable,u._getPersistenceType()==="COOKIE")?u._getPersistence()._getFinalTarget(h).toString():h}function P2(i){switch(i){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class x2{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(gi(this.auth,"network-request-failed")),V2.get())})}}function $c(i,e,t){const s={appName:i.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const o=gi(i,e,s);return o.customData._tokenResponse=t,o}function hE(i){return i!==void 0&&i.enterprise!==void 0}class k2{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return P2(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function L2(i,e){return is(i,"GET","/v2/recaptchaConfig",ns(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function U2(i,e){return is(i,"POST","/v1/accounts:delete",e)}async function vh(i,e){return is(i,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gl(i){if(i)try{const e=new Date(Number(i));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function z2(i,e=!1){const t=Tt(i),s=await t.getIdToken(e),o=Sp(s);_e(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const u=typeof o.firebase=="object"?o.firebase:void 0,h=u==null?void 0:u.sign_in_provider;return{claims:o,token:s,authTime:Gl(Sm(o.auth_time)),issuedAtTime:Gl(Sm(o.iat)),expirationTime:Gl(Sm(o.exp)),signInProvider:h||null,signInSecondFactor:(u==null?void 0:u.sign_in_second_factor)||null}}function Sm(i){return Number(i)*1e3}function Sp(i){const[e,t,s]=i.split(".");if(e===void 0||t===void 0||s===void 0)return ih("JWT malformed, contained fewer than 3 sections"),null;try{const o=ZT(t);return o?JSON.parse(o):(ih("Failed to decode base64 JWT payload"),null)}catch(o){return ih("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function fE(i){const e=Sp(i);return _e(e,"internal-error"),_e(typeof e.exp<"u","internal-error"),_e(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jl(i,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof zn&&B2(s)&&i.auth.currentUser===i&&await i.auth.signOut(),s}}function B2({code:i}){return i==="auth/user-disabled"||i==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j2{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const o=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,o)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bm{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Gl(this.lastLoginAt),this.creationTime=Gl(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Eh(i){var e;const t=i.auth,s=await i.getIdToken(),o=await Jl(i,vh(t,{idToken:s}));_e(o==null?void 0:o.users.length,t,"internal-error");const u=o.users[0];i._notifyReloadListener(u);const h=!((e=u.providerUserInfo)===null||e===void 0)&&e.length?j0(u.providerUserInfo):[],m=H2(i.providerData,h),p=i.isAnonymous,g=!(i.email&&u.passwordHash)&&!(m!=null&&m.length),E=p?g:!1,S={uid:u.localId,displayName:u.displayName||null,photoURL:u.photoUrl||null,email:u.email||null,emailVerified:u.emailVerified||!1,phoneNumber:u.phoneNumber||null,tenantId:u.tenantId||null,providerData:m,metadata:new Bm(u.createdAt,u.lastLoginAt),isAnonymous:E};Object.assign(i,S)}async function q2(i){const e=Tt(i);await Eh(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function H2(i,e){return[...i.filter(s=>!e.some(o=>o.providerId===s.providerId)),...e]}function j0(i){return i.map(e=>{var{providerId:t}=e,s=Tp(e,["providerId"]);return{providerId:t,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function F2(i,e){const t=await z0(i,{},async()=>{const s=hu({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:u}=i.config,h=await B0(i,o,"/v1/token",`key=${u}`),m=await i._getAdditionalHeaders();return m["Content-Type"]="application/x-www-form-urlencoded",U0.fetch()(h,{method:"POST",headers:m,body:s})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function G2(i,e){return is(i,"POST","/v2/accounts:revokeToken",ns(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ro{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){_e(e.idToken,"internal-error"),_e(typeof e.idToken<"u","internal-error"),_e(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):fE(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){_e(e.length!==0,"internal-error");const t=fE(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(_e(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:o,expiresIn:u}=await F2(e,t);this.updateTokensAndExpiration(s,o,Number(u))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:o,expirationTime:u}=t,h=new ro;return s&&(_e(typeof s=="string","internal-error",{appName:e}),h.refreshToken=s),o&&(_e(typeof o=="string","internal-error",{appName:e}),h.accessToken=o),u&&(_e(typeof u=="number","internal-error",{appName:e}),h.expirationTime=u),h}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ro,this.toJSON())}_performRefresh(){return Xi("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kr(i,e){_e(typeof i=="string"||typeof i>"u","internal-error",{appName:e})}class Kn{constructor(e){var{uid:t,auth:s,stsTokenManager:o}=e,u=Tp(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new j2(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=s,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=u.displayName||null,this.email=u.email||null,this.emailVerified=u.emailVerified||!1,this.phoneNumber=u.phoneNumber||null,this.photoURL=u.photoURL||null,this.isAnonymous=u.isAnonymous||!1,this.tenantId=u.tenantId||null,this.providerData=u.providerData?[...u.providerData]:[],this.metadata=new Bm(u.createdAt||void 0,u.lastLoginAt||void 0)}async getIdToken(e){const t=await Jl(this,this.stsTokenManager.getToken(this.auth,e));return _e(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return z2(this,e)}reload(){return q2(this)}_assign(e){this!==e&&(_e(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Kn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){_e(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await Eh(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Tn(this.auth.app))return Promise.reject(Ji(this.auth));const e=await this.getIdToken();return await Jl(this,U2(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var s,o,u,h,m,p,g,E;const S=(s=t.displayName)!==null&&s!==void 0?s:void 0,w=(o=t.email)!==null&&o!==void 0?o:void 0,D=(u=t.phoneNumber)!==null&&u!==void 0?u:void 0,P=(h=t.photoURL)!==null&&h!==void 0?h:void 0,G=(m=t.tenantId)!==null&&m!==void 0?m:void 0,H=(p=t._redirectEventId)!==null&&p!==void 0?p:void 0,K=(g=t.createdAt)!==null&&g!==void 0?g:void 0,ne=(E=t.lastLoginAt)!==null&&E!==void 0?E:void 0,{uid:te,emailVerified:oe,isAnonymous:ue,providerData:Ae,stsTokenManager:V}=t;_e(te&&V,e,"internal-error");const b=ro.fromJSON(this.name,V);_e(typeof te=="string",e,"internal-error"),kr(S,e.name),kr(w,e.name),_e(typeof oe=="boolean",e,"internal-error"),_e(typeof ue=="boolean",e,"internal-error"),kr(D,e.name),kr(P,e.name),kr(G,e.name),kr(H,e.name),kr(K,e.name),kr(ne,e.name);const R=new Kn({uid:te,auth:e,email:w,emailVerified:oe,displayName:S,isAnonymous:ue,photoURL:P,phoneNumber:D,tenantId:G,stsTokenManager:b,createdAt:K,lastLoginAt:ne});return Ae&&Array.isArray(Ae)&&(R.providerData=Ae.map(N=>Object.assign({},N))),H&&(R._redirectEventId=H),R}static async _fromIdTokenResponse(e,t,s=!1){const o=new ro;o.updateFromServerResponse(t);const u=new Kn({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:s});return await Eh(u),u}static async _fromGetAccountInfoResponse(e,t,s){const o=t.users[0];_e(o.localId!==void 0,"internal-error");const u=o.providerUserInfo!==void 0?j0(o.providerUserInfo):[],h=!(o.email&&o.passwordHash)&&!(u!=null&&u.length),m=new ro;m.updateFromIdToken(s);const p=new Kn({uid:o.localId,auth:e,stsTokenManager:m,isAnonymous:h}),g={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:u,metadata:new Bm(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(u!=null&&u.length)};return Object.assign(p,g),p}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dE=new Map;function Wi(i){ir(i instanceof Function,"Expected a class definition");let e=dE.get(i);return e?(ir(e instanceof i,"Instance stored in cache mismatched with class"),e):(e=new i,dE.set(i,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q0{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}q0.type="NONE";const mE=q0;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rh(i,e,t){return`firebase:${i}:${e}:${t}`}class so{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:o,name:u}=this.auth;this.fullUserKey=rh(this.userKey,o.apiKey,u),this.fullPersistenceKey=rh("persistence",o.apiKey,u),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await vh(this.auth,{idToken:e}).catch(()=>{});return t?Kn._fromGetAccountInfoResponse(this.auth,t,e):null}return Kn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new so(Wi(mE),e,s);const o=(await Promise.all(t.map(async g=>{if(await g._isAvailable())return g}))).filter(g=>g);let u=o[0]||Wi(mE);const h=rh(s,e.config.apiKey,e.name);let m=null;for(const g of t)try{const E=await g._get(h);if(E){let S;if(typeof E=="string"){const w=await vh(e,{idToken:E}).catch(()=>{});if(!w)break;S=await Kn._fromGetAccountInfoResponse(e,w,E)}else S=Kn._fromJSON(e,E);g!==u&&(m=S),u=g;break}}catch{}const p=o.filter(g=>g._shouldAllowMigration);return!u._shouldAllowMigration||!p.length?new so(u,e,s):(u=p[0],m&&await u._set(h,m.toJSON()),await Promise.all(t.map(async g=>{if(g!==u)try{await g._remove(h)}catch{}})),new so(u,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pE(i){const e=i.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(K0(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(H0(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Y0(e))return"Blackberry";if(Q0(e))return"Webos";if(F0(e))return"Safari";if((e.includes("chrome/")||G0(e))&&!e.includes("edge/"))return"Chrome";if($0(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=i.match(t);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function H0(i=Zt()){return/firefox\//i.test(i)}function F0(i=Zt()){const e=i.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function G0(i=Zt()){return/crios\//i.test(i)}function K0(i=Zt()){return/iemobile/i.test(i)}function $0(i=Zt()){return/android/i.test(i)}function Y0(i=Zt()){return/blackberry/i.test(i)}function Q0(i=Zt()){return/webos/i.test(i)}function bp(i=Zt()){return/iphone|ipad|ipod/i.test(i)||/macintosh/i.test(i)&&/mobile/i.test(i)}function K2(i=Zt()){var e;return bp(i)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function $2(){return U1()&&document.documentMode===10}function X0(i=Zt()){return bp(i)||$0(i)||Q0(i)||Y0(i)||/windows phone/i.test(i)||K0(i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W0(i,e=[]){let t;switch(i){case"Browser":t=pE(Zt());break;case"Worker":t=`${pE(Zt())}-${i}`;break;default:t=i}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${ta}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y2{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=u=>new Promise((h,m)=>{try{const p=e(u);h(p)}catch(p){m(p)}});s.onAbort=t,this.queue.push(s);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Q2(i,e={}){return is(i,"GET","/v2/passwordPolicy",ns(i,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X2=6;class W2{constructor(e){var t,s,o,u;const h=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=h.minPasswordLength)!==null&&t!==void 0?t:X2,h.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=h.maxPasswordLength),h.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=h.containsLowercaseCharacter),h.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=h.containsUppercaseCharacter),h.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=h.containsNumericCharacter),h.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=h.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(o=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&o!==void 0?o:"",this.forceUpgradeOnSignin=(u=e.forceUpgradeOnSignin)!==null&&u!==void 0?u:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,s,o,u,h,m;const p={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,p),this.validatePasswordCharacterOptions(e,p),p.isValid&&(p.isValid=(t=p.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),p.isValid&&(p.isValid=(s=p.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),p.isValid&&(p.isValid=(o=p.containsLowercaseLetter)!==null&&o!==void 0?o:!0),p.isValid&&(p.isValid=(u=p.containsUppercaseLetter)!==null&&u!==void 0?u:!0),p.isValid&&(p.isValid=(h=p.containsNumericCharacter)!==null&&h!==void 0?h:!0),p.isValid&&(p.isValid=(m=p.containsNonAlphanumericCharacter)!==null&&m!==void 0?m:!0),p}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let o=0;o<e.length;o++)s=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,o,u){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z2{constructor(e,t,s,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new gE(this),this.idTokenSubscription=new gE(this),this.beforeStateQueue=new Y2(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=k0,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(u=>this._resolvePersistenceManagerAvailable=u)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Wi(t)),this._initializationPromise=this.queue(async()=>{var s,o,u;if(!this._deleted&&(this.persistenceManager=await so.create(this,e),(s=this._resolvePersistenceManagerAvailable)===null||s===void 0||s.call(this),!this._deleted)){if(!((o=this._popupRedirectResolver)===null||o===void 0)&&o._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((u=this.currentUser)===null||u===void 0?void 0:u.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await vh(this,{idToken:e}),s=await Kn._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Tn(this.app)){const h=this.app.settings.authIdToken;return h?new Promise(m=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(h).then(m,m))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let o=s,u=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const h=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,m=o==null?void 0:o._redirectEventId,p=await this.tryRedirectSignIn(e);(!h||h===m)&&(p!=null&&p.user)&&(o=p.user,u=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(u)try{await this.beforeStateQueue.runMiddleware(o)}catch(h){o=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(h))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return _e(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Eh(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=O2()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Tn(this.app))return Promise.reject(Ji(this));const t=e?Tt(e):null;return t&&_e(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&_e(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Tn(this.app)?Promise.reject(Ji(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Tn(this.app)?Promise.reject(Ji(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Wi(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Q2(this),t=new W2(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new ea("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await G2(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Wi(e)||this._popupRedirectResolver;_e(t,this,"argument-error"),this.redirectPersistenceManager=await so.create(this,[Wi(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,o){if(this._deleted)return()=>{};const u=typeof t=="function"?t:t.next.bind(t);let h=!1;const m=this._isInitialized?Promise.resolve():this._initializationPromise;if(_e(m,this,"internal-error"),m.then(()=>{h||u(this.currentUser)}),typeof t=="function"){const p=e.addObserver(t,s,o);return()=>{h=!0,p()}}else{const p=e.addObserver(t);return()=>{h=!0,p()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return _e(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=W0(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(t["X-Firebase-Client"]=s);const o=await this._getAppCheckToken();return o&&(t["X-Firebase-AppCheck"]=o),t}async _getAppCheckToken(){var e;if(Tn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&I2(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function na(i){return Tt(i)}class gE{constructor(e){this.auth=e,this.observer=null,this.addObserver=G1(t=>this.observer=t)}get next(){return _e(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Hh={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function J2(i){Hh=i}function Z0(i){return Hh.loadJS(i)}function eD(){return Hh.recaptchaEnterpriseScript}function tD(){return Hh.gapiScript}function nD(i){return`__${i}${Math.floor(Math.random()*1e6)}`}class iD{constructor(){this.enterprise=new rD}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class rD{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const sD="recaptcha-enterprise",J0="NO_RECAPTCHA";class aD{constructor(e){this.type=sD,this.auth=na(e)}async verify(e="verify",t=!1){async function s(u){if(!t){if(u.tenantId==null&&u._agentRecaptchaConfig!=null)return u._agentRecaptchaConfig.siteKey;if(u.tenantId!=null&&u._tenantRecaptchaConfigs[u.tenantId]!==void 0)return u._tenantRecaptchaConfigs[u.tenantId].siteKey}return new Promise(async(h,m)=>{L2(u,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(p=>{if(p.recaptchaKey===void 0)m(new Error("recaptcha Enterprise site key undefined"));else{const g=new k2(p);return u.tenantId==null?u._agentRecaptchaConfig=g:u._tenantRecaptchaConfigs[u.tenantId]=g,h(g.siteKey)}}).catch(p=>{m(p)})})}function o(u,h,m){const p=window.grecaptcha;hE(p)?p.enterprise.ready(()=>{p.enterprise.execute(u,{action:e}).then(g=>{h(g)}).catch(()=>{h(J0)})}):m(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new iD().execute("siteKey",{action:"verify"}):new Promise((u,h)=>{s(this.auth).then(m=>{if(!t&&hE(window.grecaptcha))o(m,u,h);else{if(typeof window>"u"){h(new Error("RecaptchaVerifier is only supported in browser"));return}let p=eD();p.length!==0&&(p+=m),Z0(p).then(()=>{o(m,u,h)}).catch(g=>{h(g)})}}).catch(m=>{h(m)})})}}async function yE(i,e,t,s=!1,o=!1){const u=new aD(i);let h;if(o)h=J0;else try{h=await u.verify(t)}catch{h=await u.verify(t,!0)}const m=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in m){const p=m.phoneEnrollmentInfo.phoneNumber,g=m.phoneEnrollmentInfo.recaptchaToken;Object.assign(m,{phoneEnrollmentInfo:{phoneNumber:p,recaptchaToken:g,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in m){const p=m.phoneSignInInfo.recaptchaToken;Object.assign(m,{phoneSignInInfo:{recaptchaToken:p,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return m}return s?Object.assign(m,{captchaResp:h}):Object.assign(m,{captchaResponse:h}),Object.assign(m,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(m,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),m}async function jm(i,e,t,s,o){var u;if(!((u=i._getRecaptchaConfig())===null||u===void 0)&&u.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const h=await yE(i,e,t,t==="getOobCode");return s(i,h)}else return s(i,e).catch(async h=>{if(h.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const m=await yE(i,e,t,t==="getOobCode");return s(i,m)}else return Promise.reject(h)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oD(i,e){const t=ts(i,"auth");if(t.isInitialized()){const o=t.getImmediate(),u=t.getOptions();if($r(u,e??{}))return o;Qn(o,"already-initialized")}return t.initialize({options:e})}function lD(i,e){const t=(e==null?void 0:e.persistence)||[],s=(Array.isArray(t)?t:[t]).map(Wi);e!=null&&e.errorMap&&i._updateErrorMap(e.errorMap),i._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function uD(i,e,t){const s=na(i);_e(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const o=!1,u=eA(e),{host:h,port:m}=cD(e),p=m===null?"":`:${m}`,g={url:`${u}//${h}${p}/`},E=Object.freeze({host:h,port:m,protocol:u.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!s._canInitEmulator){_e(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),_e($r(g,s.config.emulator)&&$r(E,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=g,s.emulatorConfig=E,s.settings.appVerificationDisabledForTesting=!0,Js(h)?(dp(`${u}//${h}${p}`),mp("Auth",!0)):hD()}function eA(i){const e=i.indexOf(":");return e<0?"":i.substr(0,e+1)}function cD(i){const e=eA(i),t=/(\/\/)?([^?#/]+)/.exec(i.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(s);if(o){const u=o[1];return{host:u,port:_E(s.substr(u.length+1))}}else{const[u,h]=s.split(":");return{host:u,port:_E(h)}}}function _E(i){if(!i)return null;const e=Number(i);return isNaN(e)?null:e}function hD(){function i(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",i):i())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rp{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Xi("not implemented")}_getIdTokenResponse(e){return Xi("not implemented")}_linkToIdToken(e,t){return Xi("not implemented")}_getReauthenticationResolver(e){return Xi("not implemented")}}async function fD(i,e){return is(i,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dD(i,e){return du(i,"POST","/v1/accounts:signInWithPassword",ns(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mD(i,e){return du(i,"POST","/v1/accounts:signInWithEmailLink",ns(i,e))}async function pD(i,e){return du(i,"POST","/v1/accounts:signInWithEmailLink",ns(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eu extends Rp{constructor(e,t,s,o=null){super("password",s),this._email=e,this._password=t,this._tenantId=o}static _fromEmailAndPassword(e,t){return new eu(e,t,"password")}static _fromEmailAndCode(e,t,s=null){return new eu(e,t,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return jm(e,t,"signInWithPassword",dD);case"emailLink":return mD(e,{email:this._email,oobCode:this._password});default:Qn(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const s={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return jm(e,s,"signUpPassword",fD);case"emailLink":return pD(e,{idToken:t,email:this._email,oobCode:this._password});default:Qn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ao(i,e){return du(i,"POST","/v1/accounts:signInWithIdp",ns(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gD="http://localhost";class $s extends Rp{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new $s(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Qn("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:o}=t,u=Tp(t,["providerId","signInMethod"]);if(!s||!o)return null;const h=new $s(s,o);return h.idToken=u.idToken||void 0,h.accessToken=u.accessToken||void 0,h.secret=u.secret,h.nonce=u.nonce,h.pendingToken=u.pendingToken||null,h}_getIdTokenResponse(e){const t=this.buildRequest();return ao(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,ao(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,ao(e,t)}buildRequest(){const e={requestUri:gD,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=hu(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yD(i){switch(i){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function _D(i){const e=Ll(Ul(i)).link,t=e?Ll(Ul(e)).deep_link_id:null,s=Ll(Ul(i)).deep_link_id;return(s?Ll(Ul(s)).link:null)||s||t||e||i}class Ip{constructor(e){var t,s,o,u,h,m;const p=Ll(Ul(e)),g=(t=p.apiKey)!==null&&t!==void 0?t:null,E=(s=p.oobCode)!==null&&s!==void 0?s:null,S=yD((o=p.mode)!==null&&o!==void 0?o:null);_e(g&&E&&S,"argument-error"),this.apiKey=g,this.operation=S,this.code=E,this.continueUrl=(u=p.continueUrl)!==null&&u!==void 0?u:null,this.languageCode=(h=p.lang)!==null&&h!==void 0?h:null,this.tenantId=(m=p.tenantId)!==null&&m!==void 0?m:null}static parseLink(e){const t=_D(e);try{return new Ip(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _o{constructor(){this.providerId=_o.PROVIDER_ID}static credential(e,t){return eu._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const s=Ip.parseLink(t);return _e(s,"argument-error"),eu._fromEmailAndCode(e,s.code,s.tenantId)}}_o.PROVIDER_ID="password";_o.EMAIL_PASSWORD_SIGN_IN_METHOD="password";_o.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tA{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mu extends tA{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lr extends mu{constructor(){super("facebook.com")}static credential(e){return $s._fromParams({providerId:Lr.PROVIDER_ID,signInMethod:Lr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Lr.credentialFromTaggedObject(e)}static credentialFromError(e){return Lr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Lr.credential(e.oauthAccessToken)}catch{return null}}}Lr.FACEBOOK_SIGN_IN_METHOD="facebook.com";Lr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ur extends mu{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return $s._fromParams({providerId:Ur.PROVIDER_ID,signInMethod:Ur.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Ur.credentialFromTaggedObject(e)}static credentialFromError(e){return Ur.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return Ur.credential(t,s)}catch{return null}}}Ur.GOOGLE_SIGN_IN_METHOD="google.com";Ur.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zr extends mu{constructor(){super("github.com")}static credential(e){return $s._fromParams({providerId:zr.PROVIDER_ID,signInMethod:zr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return zr.credentialFromTaggedObject(e)}static credentialFromError(e){return zr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return zr.credential(e.oauthAccessToken)}catch{return null}}}zr.GITHUB_SIGN_IN_METHOD="github.com";zr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Br extends mu{constructor(){super("twitter.com")}static credential(e,t){return $s._fromParams({providerId:Br.PROVIDER_ID,signInMethod:Br.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Br.credentialFromTaggedObject(e)}static credentialFromError(e){return Br.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return Br.credential(t,s)}catch{return null}}}Br.TWITTER_SIGN_IN_METHOD="twitter.com";Br.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vD(i,e){return du(i,"POST","/v1/accounts:signUp",ns(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ys{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,o=!1){const u=await Kn._fromIdTokenResponse(e,s,o),h=vE(s);return new Ys({user:u,providerId:h,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const o=vE(s);return new Ys({user:e,providerId:o,_tokenResponse:s,operationType:t})}}function vE(i){return i.providerId?i.providerId:"phoneNumber"in i?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Th extends zn{constructor(e,t,s,o){var u;super(t.code,t.message),this.operationType=s,this.user=o,Object.setPrototypeOf(this,Th.prototype),this.customData={appName:e.name,tenantId:(u=e.tenantId)!==null&&u!==void 0?u:void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,o){return new Th(e,t,s,o)}}function nA(i,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(i):t._getIdTokenResponse(i)).catch(u=>{throw u.code==="auth/multi-factor-auth-required"?Th._fromErrorAndOperation(i,u,e,s):u})}async function ED(i,e,t=!1){const s=await Jl(i,e._linkToIdToken(i.auth,await i.getIdToken()),t);return Ys._forOperation(i,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function TD(i,e,t=!1){const{auth:s}=i;if(Tn(s.app))return Promise.reject(Ji(s));const o="reauthenticate";try{const u=await Jl(i,nA(s,o,e,i),t);_e(u.idToken,s,"internal-error");const h=Sp(u.idToken);_e(h,s,"internal-error");const{sub:m}=h;return _e(i.uid===m,s,"user-mismatch"),Ys._forOperation(i,o,u)}catch(u){throw(u==null?void 0:u.code)==="auth/user-not-found"&&Qn(s,"user-mismatch"),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iA(i,e,t=!1){if(Tn(i.app))return Promise.reject(Ji(i));const s="signIn",o=await nA(i,s,e),u=await Ys._fromIdTokenResponse(i,s,o);return t||await i._updateCurrentUser(u.user),u}async function AD(i,e){return iA(na(i),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rA(i){const e=na(i);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function wD(i,e,t){if(Tn(i.app))return Promise.reject(Ji(i));const s=na(i),h=await jm(s,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",vD).catch(p=>{throw p.code==="auth/password-does-not-meet-requirements"&&rA(i),p}),m=await Ys._fromIdTokenResponse(s,"signIn",h);return await s._updateCurrentUser(m.user),m}function SD(i,e,t){return Tn(i.app)?Promise.reject(Ji(i)):AD(Tt(i),_o.credential(e,t)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&rA(i),s})}function bD(i,e,t,s){return Tt(i).onIdTokenChanged(e,t,s)}function RD(i,e,t){return Tt(i).beforeAuthStateChanged(e,t)}function ID(i,e,t,s){return Tt(i).onAuthStateChanged(e,t,s)}const Ah="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sA{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Ah,"1"),this.storage.removeItem(Ah),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CD=1e3,DD=10;class aA extends sA{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=X0(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),o=this.localCache[t];s!==o&&e(t,o,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((h,m,p)=>{this.notifyListeners(h,p)});return}const s=e.key;t?this.detachListener():this.stopPolling();const o=()=>{const h=this.storage.getItem(s);!t&&this.localCache[s]===h||this.notifyListeners(s,h)},u=this.storage.getItem(s);$2()&&u!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,DD):o()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},CD)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}aA.type="LOCAL";const OD=aA;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oA extends sA{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}oA.type="SESSION";const lA=oA;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ND(i){return Promise.all(i.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fh{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const s=new Fh(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:o,data:u}=t.data,h=this.handlersMap[o];if(!(h!=null&&h.size))return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:o});const m=Array.from(h).map(async g=>g(t.origin,u)),p=await ND(m);t.ports[0].postMessage({status:"done",eventId:s,eventType:o,response:p})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Fh.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cp(i="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return i+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MD{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let u,h;return new Promise((m,p)=>{const g=Cp("",20);o.port1.start();const E=setTimeout(()=>{p(new Error("unsupported_event"))},s);h={messageChannel:o,onMessage(S){const w=S;if(w.data.eventId===g)switch(w.data.status){case"ack":clearTimeout(E),u=setTimeout(()=>{p(new Error("timeout"))},3e3);break;case"done":clearTimeout(u),m(w.data.response);break;default:clearTimeout(E),clearTimeout(u),p(new Error("invalid_response"));break}}},this.handlers.add(h),o.port1.addEventListener("message",h.onMessage),this.target.postMessage({eventType:e,eventId:g,data:t},[o.port2])}).finally(()=>{h&&this.removeMessageHandler(h)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yi(){return window}function VD(i){yi().location.href=i}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uA(){return typeof yi().WorkerGlobalScope<"u"&&typeof yi().importScripts=="function"}async function PD(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function xD(){var i;return((i=navigator==null?void 0:navigator.serviceWorker)===null||i===void 0?void 0:i.controller)||null}function kD(){return uA()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cA="firebaseLocalStorageDb",LD=1,wh="firebaseLocalStorage",hA="fbase_key";class pu{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Gh(i,e){return i.transaction([wh],e?"readwrite":"readonly").objectStore(wh)}function UD(){const i=indexedDB.deleteDatabase(cA);return new pu(i).toPromise()}function qm(){const i=indexedDB.open(cA,LD);return new Promise((e,t)=>{i.addEventListener("error",()=>{t(i.error)}),i.addEventListener("upgradeneeded",()=>{const s=i.result;try{s.createObjectStore(wh,{keyPath:hA})}catch(o){t(o)}}),i.addEventListener("success",async()=>{const s=i.result;s.objectStoreNames.contains(wh)?e(s):(s.close(),await UD(),e(await qm()))})})}async function EE(i,e,t){const s=Gh(i,!0).put({[hA]:e,value:t});return new pu(s).toPromise()}async function zD(i,e){const t=Gh(i,!1).get(e),s=await new pu(t).toPromise();return s===void 0?null:s.value}function TE(i,e){const t=Gh(i,!0).delete(e);return new pu(t).toPromise()}const BD=800,jD=3;class fA{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await qm(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>jD)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return uA()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Fh._getInstance(kD()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await PD(),!this.activeServiceWorker)return;this.sender=new MD(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((t=s[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||xD()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await qm();return await EE(e,Ah,"1"),await TE(e,Ah),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>EE(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>zD(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>TE(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const u=Gh(o,!1).getAll();return new pu(u).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:o,value:u}of e)s.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(u)&&(this.notifyListeners(o,u),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!s.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),BD)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}fA.type="LOCAL";const qD=fA;new fu(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HD(i,e){return e?Wi(e):(_e(i._popupRedirectResolver,i,"argument-error"),i._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dp extends Rp{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ao(e,this._buildIdpRequest())}_linkToIdToken(e,t){return ao(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return ao(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function FD(i){return iA(i.auth,new Dp(i),i.bypassAuthState)}function GD(i){const{auth:e,user:t}=i;return _e(t,e,"internal-error"),TD(t,new Dp(i),i.bypassAuthState)}async function KD(i){const{auth:e,user:t}=i;return _e(t,e,"internal-error"),ED(t,new Dp(i),i.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dA{constructor(e,t,s,o,u=!1){this.auth=e,this.resolver=s,this.user=o,this.bypassAuthState=u,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:o,tenantId:u,error:h,type:m}=e;if(h){this.reject(h);return}const p={auth:this.auth,requestUri:t,sessionId:s,tenantId:u||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(m)(p))}catch(g){this.reject(g)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return FD;case"linkViaPopup":case"linkViaRedirect":return KD;case"reauthViaPopup":case"reauthViaRedirect":return GD;default:Qn(this.auth,"internal-error")}}resolve(e){ir(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ir(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $D=new fu(2e3,1e4);class io extends dA{constructor(e,t,s,o,u){super(e,t,o,u),this.provider=s,this.authWindow=null,this.pollId=null,io.currentPopupAction&&io.currentPopupAction.cancel(),io.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return _e(e,this.auth,"internal-error"),e}async onExecution(){ir(this.filter.length===1,"Popup operations only handle one event");const e=Cp();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(gi(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(gi(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,io.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if(!((s=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(gi(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,$D.get())};e()}}io.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YD="pendingRedirect",sh=new Map;class QD extends dA{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=sh.get(this.auth._key());if(!e){try{const s=await XD(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}sh.set(this.auth._key(),e)}return this.bypassAuthState||sh.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function XD(i,e){const t=JD(e),s=ZD(i);if(!await s._isAvailable())return!1;const o=await s._get(t)==="true";return await s._remove(t),o}function WD(i,e){sh.set(i._key(),e)}function ZD(i){return Wi(i._redirectPersistence)}function JD(i){return rh(YD,i.config.apiKey,i.name)}async function eO(i,e,t=!1){if(Tn(i.app))return Promise.reject(Ji(i));const s=na(i),o=HD(s,e),h=await new QD(s,o,t).execute();return h&&!t&&(delete h.user._redirectEventId,await s._persistUserIfCurrent(h.user),await s._setRedirectUser(null,e)),h}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tO=10*60*1e3;class nO{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!iO(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!mA(e)){const o=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";t.onError(gi(this.auth,o))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=tO&&this.cachedEventUids.clear(),this.cachedEventUids.has(AE(e))}saveEventToCache(e){this.cachedEventUids.add(AE(e)),this.lastProcessedEventTime=Date.now()}}function AE(i){return[i.type,i.eventId,i.sessionId,i.tenantId].filter(e=>e).join("-")}function mA({type:i,error:e}){return i==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function iO(i){switch(i.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return mA(i);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rO(i,e={}){return is(i,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sO=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,aO=/^https?/;async function oO(i){if(i.config.emulator)return;const{authorizedDomains:e}=await rO(i);for(const t of e)try{if(lO(t))return}catch{}Qn(i,"unauthorized-domain")}function lO(i){const e=zm(),{protocol:t,hostname:s}=new URL(e);if(i.startsWith("chrome-extension://")){const h=new URL(i);return h.hostname===""&&s===""?t==="chrome-extension:"&&i.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&h.hostname===s}if(!aO.test(t))return!1;if(sO.test(i))return s===i;const o=i.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uO=new fu(3e4,6e4);function wE(){const i=yi().___jsl;if(i!=null&&i.H){for(const e of Object.keys(i.H))if(i.H[e].r=i.H[e].r||[],i.H[e].L=i.H[e].L||[],i.H[e].r=[...i.H[e].L],i.CP)for(let t=0;t<i.CP.length;t++)i.CP[t]=null}}function cO(i){return new Promise((e,t)=>{var s,o,u;function h(){wE(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{wE(),t(gi(i,"network-request-failed"))},timeout:uO.get()})}if(!((o=(s=yi().gapi)===null||s===void 0?void 0:s.iframes)===null||o===void 0)&&o.Iframe)e(gapi.iframes.getContext());else if(!((u=yi().gapi)===null||u===void 0)&&u.load)h();else{const m=nD("iframefcb");return yi()[m]=()=>{gapi.load?h():t(gi(i,"network-request-failed"))},Z0(`${tD()}?onload=${m}`).catch(p=>t(p))}}).catch(e=>{throw ah=null,e})}let ah=null;function hO(i){return ah=ah||cO(i),ah}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fO=new fu(5e3,15e3),dO="__/auth/iframe",mO="emulator/auth/iframe",pO={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},gO=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function yO(i){const e=i.config;_e(e.authDomain,i,"auth-domain-config-required");const t=e.emulator?wp(e,mO):`https://${i.config.authDomain}/${dO}`,s={apiKey:e.apiKey,appName:i.name,v:ta},o=gO.get(i.config.apiHost);o&&(s.eid=o);const u=i._getFrameworks();return u.length&&(s.fw=u.join(",")),`${t}?${hu(s).slice(1)}`}async function _O(i){const e=await hO(i),t=yi().gapi;return _e(t,i,"internal-error"),e.open({where:document.body,url:yO(i),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:pO,dontclear:!0},s=>new Promise(async(o,u)=>{await s.restyle({setHideOnLeave:!1});const h=gi(i,"network-request-failed"),m=yi().setTimeout(()=>{u(h)},fO.get());function p(){yi().clearTimeout(m),o(s)}s.ping(p).then(p,()=>{u(h)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vO={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},EO=500,TO=600,AO="_blank",wO="http://localhost";class SE{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function SO(i,e,t,s=EO,o=TO){const u=Math.max((window.screen.availHeight-o)/2,0).toString(),h=Math.max((window.screen.availWidth-s)/2,0).toString();let m="";const p=Object.assign(Object.assign({},vO),{width:s.toString(),height:o.toString(),top:u,left:h}),g=Zt().toLowerCase();t&&(m=G0(g)?AO:t),H0(g)&&(e=e||wO,p.scrollbars="yes");const E=Object.entries(p).reduce((w,[D,P])=>`${w}${D}=${P},`,"");if(K2(g)&&m!=="_self")return bO(e||"",m),new SE(null);const S=window.open(e||"",m,E);_e(S,i,"popup-blocked");try{S.focus()}catch{}return new SE(S)}function bO(i,e){const t=document.createElement("a");t.href=i,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RO="__/auth/handler",IO="emulator/auth/handler",CO=encodeURIComponent("fac");async function bE(i,e,t,s,o,u){_e(i.config.authDomain,i,"auth-domain-config-required"),_e(i.config.apiKey,i,"invalid-api-key");const h={apiKey:i.config.apiKey,appName:i.name,authType:t,redirectUrl:s,v:ta,eventId:o};if(e instanceof tA){e.setDefaultLanguage(i.languageCode),h.providerId=e.providerId||"",F1(e.getCustomParameters())||(h.customParameters=JSON.stringify(e.getCustomParameters()));for(const[E,S]of Object.entries({}))h[E]=S}if(e instanceof mu){const E=e.getScopes().filter(S=>S!=="");E.length>0&&(h.scopes=E.join(","))}i.tenantId&&(h.tid=i.tenantId);const m=h;for(const E of Object.keys(m))m[E]===void 0&&delete m[E];const p=await i._getAppCheckToken(),g=p?`#${CO}=${encodeURIComponent(p)}`:"";return`${DO(i)}?${hu(m).slice(1)}${g}`}function DO({config:i}){return i.emulator?wp(i,IO):`https://${i.authDomain}/${RO}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bm="webStorageSupport";class OO{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=lA,this._completeRedirectFn=eO,this._overrideRedirectResult=WD}async _openPopup(e,t,s,o){var u;ir((u=this.eventManagers[e._key()])===null||u===void 0?void 0:u.manager,"_initialize() not called before _openPopup()");const h=await bE(e,t,s,zm(),o);return SO(e,h,Cp())}async _openRedirect(e,t,s,o){await this._originValidation(e);const u=await bE(e,t,s,zm(),o);return VD(u),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:u}=this.eventManagers[t];return o?Promise.resolve(o):(ir(u,"If manager is not set, promise should be"),u)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await _O(e),s=new nO(e);return t.register("authEvent",o=>(_e(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:s.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(bm,{type:bm},o=>{var u;const h=(u=o==null?void 0:o[0])===null||u===void 0?void 0:u[bm];h!==void 0&&t(!!h),Qn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=oO(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return X0()||F0()||bp()}}const NO=OO;var RE="@firebase/auth",IE="1.10.6";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MO{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){_e(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VO(i){switch(i){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function PO(i){Yn(new Un("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),u=e.getProvider("app-check-internal"),{apiKey:h,authDomain:m}=s.options;_e(h&&!h.includes(":"),"invalid-api-key",{appName:s.name});const p={apiKey:h,authDomain:m,clientPlatform:i,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:W0(i)},g=new Z2(s,o,u,p);return lD(g,t),g},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),Yn(new Un("auth-internal",e=>{const t=na(e.getProvider("auth").getImmediate());return(s=>new MO(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),un(RE,IE,VO(i)),un(RE,IE,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xO=5*60,kO=n0("authIdTokenMaxAge")||xO;let CE=null;const LO=i=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>kO)return;const o=t==null?void 0:t.token;CE!==o&&(CE=o,await fetch(i,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function UO(i=Bh()){const e=ts(i,"auth");if(e.isInitialized())return e.getImmediate();const t=oD(i,{popupRedirectResolver:NO,persistence:[qD,OD,lA]}),s=n0("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const u=new URL(s,location.origin);if(location.origin===u.origin){const h=LO(u.toString());RD(t,h,()=>h(t.currentUser)),bD(t,m=>h(m))}}const o=JT("auth");return o&&uD(t,`http://${o}`),t}function zO(){var i,e;return(e=(i=document.getElementsByTagName("head"))===null||i===void 0?void 0:i[0])!==null&&e!==void 0?e:document}J2({loadJS(i){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",i),s.onload=e,s.onerror=o=>{const u=gi("internal-error");u.customData=o,t(u)},s.type="text/javascript",s.charset="UTF-8",zO().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});PO("Browser");var DE=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Gr,pA;(function(){var i;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(V,b){function R(){}R.prototype=b.prototype,V.D=b.prototype,V.prototype=new R,V.prototype.constructor=V,V.C=function(N,x,L){for(var C=Array(arguments.length-2),Lt=2;Lt<arguments.length;Lt++)C[Lt-2]=arguments[Lt];return b.prototype[x].apply(N,C)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(s,t),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(V,b,R){R||(R=0);var N=Array(16);if(typeof b=="string")for(var x=0;16>x;++x)N[x]=b.charCodeAt(R++)|b.charCodeAt(R++)<<8|b.charCodeAt(R++)<<16|b.charCodeAt(R++)<<24;else for(x=0;16>x;++x)N[x]=b[R++]|b[R++]<<8|b[R++]<<16|b[R++]<<24;b=V.g[0],R=V.g[1],x=V.g[2];var L=V.g[3],C=b+(L^R&(x^L))+N[0]+3614090360&4294967295;b=R+(C<<7&4294967295|C>>>25),C=L+(x^b&(R^x))+N[1]+3905402710&4294967295,L=b+(C<<12&4294967295|C>>>20),C=x+(R^L&(b^R))+N[2]+606105819&4294967295,x=L+(C<<17&4294967295|C>>>15),C=R+(b^x&(L^b))+N[3]+3250441966&4294967295,R=x+(C<<22&4294967295|C>>>10),C=b+(L^R&(x^L))+N[4]+4118548399&4294967295,b=R+(C<<7&4294967295|C>>>25),C=L+(x^b&(R^x))+N[5]+1200080426&4294967295,L=b+(C<<12&4294967295|C>>>20),C=x+(R^L&(b^R))+N[6]+2821735955&4294967295,x=L+(C<<17&4294967295|C>>>15),C=R+(b^x&(L^b))+N[7]+4249261313&4294967295,R=x+(C<<22&4294967295|C>>>10),C=b+(L^R&(x^L))+N[8]+1770035416&4294967295,b=R+(C<<7&4294967295|C>>>25),C=L+(x^b&(R^x))+N[9]+2336552879&4294967295,L=b+(C<<12&4294967295|C>>>20),C=x+(R^L&(b^R))+N[10]+4294925233&4294967295,x=L+(C<<17&4294967295|C>>>15),C=R+(b^x&(L^b))+N[11]+2304563134&4294967295,R=x+(C<<22&4294967295|C>>>10),C=b+(L^R&(x^L))+N[12]+1804603682&4294967295,b=R+(C<<7&4294967295|C>>>25),C=L+(x^b&(R^x))+N[13]+4254626195&4294967295,L=b+(C<<12&4294967295|C>>>20),C=x+(R^L&(b^R))+N[14]+2792965006&4294967295,x=L+(C<<17&4294967295|C>>>15),C=R+(b^x&(L^b))+N[15]+1236535329&4294967295,R=x+(C<<22&4294967295|C>>>10),C=b+(x^L&(R^x))+N[1]+4129170786&4294967295,b=R+(C<<5&4294967295|C>>>27),C=L+(R^x&(b^R))+N[6]+3225465664&4294967295,L=b+(C<<9&4294967295|C>>>23),C=x+(b^R&(L^b))+N[11]+643717713&4294967295,x=L+(C<<14&4294967295|C>>>18),C=R+(L^b&(x^L))+N[0]+3921069994&4294967295,R=x+(C<<20&4294967295|C>>>12),C=b+(x^L&(R^x))+N[5]+3593408605&4294967295,b=R+(C<<5&4294967295|C>>>27),C=L+(R^x&(b^R))+N[10]+38016083&4294967295,L=b+(C<<9&4294967295|C>>>23),C=x+(b^R&(L^b))+N[15]+3634488961&4294967295,x=L+(C<<14&4294967295|C>>>18),C=R+(L^b&(x^L))+N[4]+3889429448&4294967295,R=x+(C<<20&4294967295|C>>>12),C=b+(x^L&(R^x))+N[9]+568446438&4294967295,b=R+(C<<5&4294967295|C>>>27),C=L+(R^x&(b^R))+N[14]+3275163606&4294967295,L=b+(C<<9&4294967295|C>>>23),C=x+(b^R&(L^b))+N[3]+4107603335&4294967295,x=L+(C<<14&4294967295|C>>>18),C=R+(L^b&(x^L))+N[8]+1163531501&4294967295,R=x+(C<<20&4294967295|C>>>12),C=b+(x^L&(R^x))+N[13]+2850285829&4294967295,b=R+(C<<5&4294967295|C>>>27),C=L+(R^x&(b^R))+N[2]+4243563512&4294967295,L=b+(C<<9&4294967295|C>>>23),C=x+(b^R&(L^b))+N[7]+1735328473&4294967295,x=L+(C<<14&4294967295|C>>>18),C=R+(L^b&(x^L))+N[12]+2368359562&4294967295,R=x+(C<<20&4294967295|C>>>12),C=b+(R^x^L)+N[5]+4294588738&4294967295,b=R+(C<<4&4294967295|C>>>28),C=L+(b^R^x)+N[8]+2272392833&4294967295,L=b+(C<<11&4294967295|C>>>21),C=x+(L^b^R)+N[11]+1839030562&4294967295,x=L+(C<<16&4294967295|C>>>16),C=R+(x^L^b)+N[14]+4259657740&4294967295,R=x+(C<<23&4294967295|C>>>9),C=b+(R^x^L)+N[1]+2763975236&4294967295,b=R+(C<<4&4294967295|C>>>28),C=L+(b^R^x)+N[4]+1272893353&4294967295,L=b+(C<<11&4294967295|C>>>21),C=x+(L^b^R)+N[7]+4139469664&4294967295,x=L+(C<<16&4294967295|C>>>16),C=R+(x^L^b)+N[10]+3200236656&4294967295,R=x+(C<<23&4294967295|C>>>9),C=b+(R^x^L)+N[13]+681279174&4294967295,b=R+(C<<4&4294967295|C>>>28),C=L+(b^R^x)+N[0]+3936430074&4294967295,L=b+(C<<11&4294967295|C>>>21),C=x+(L^b^R)+N[3]+3572445317&4294967295,x=L+(C<<16&4294967295|C>>>16),C=R+(x^L^b)+N[6]+76029189&4294967295,R=x+(C<<23&4294967295|C>>>9),C=b+(R^x^L)+N[9]+3654602809&4294967295,b=R+(C<<4&4294967295|C>>>28),C=L+(b^R^x)+N[12]+3873151461&4294967295,L=b+(C<<11&4294967295|C>>>21),C=x+(L^b^R)+N[15]+530742520&4294967295,x=L+(C<<16&4294967295|C>>>16),C=R+(x^L^b)+N[2]+3299628645&4294967295,R=x+(C<<23&4294967295|C>>>9),C=b+(x^(R|~L))+N[0]+4096336452&4294967295,b=R+(C<<6&4294967295|C>>>26),C=L+(R^(b|~x))+N[7]+1126891415&4294967295,L=b+(C<<10&4294967295|C>>>22),C=x+(b^(L|~R))+N[14]+2878612391&4294967295,x=L+(C<<15&4294967295|C>>>17),C=R+(L^(x|~b))+N[5]+4237533241&4294967295,R=x+(C<<21&4294967295|C>>>11),C=b+(x^(R|~L))+N[12]+1700485571&4294967295,b=R+(C<<6&4294967295|C>>>26),C=L+(R^(b|~x))+N[3]+2399980690&4294967295,L=b+(C<<10&4294967295|C>>>22),C=x+(b^(L|~R))+N[10]+4293915773&4294967295,x=L+(C<<15&4294967295|C>>>17),C=R+(L^(x|~b))+N[1]+2240044497&4294967295,R=x+(C<<21&4294967295|C>>>11),C=b+(x^(R|~L))+N[8]+1873313359&4294967295,b=R+(C<<6&4294967295|C>>>26),C=L+(R^(b|~x))+N[15]+4264355552&4294967295,L=b+(C<<10&4294967295|C>>>22),C=x+(b^(L|~R))+N[6]+2734768916&4294967295,x=L+(C<<15&4294967295|C>>>17),C=R+(L^(x|~b))+N[13]+1309151649&4294967295,R=x+(C<<21&4294967295|C>>>11),C=b+(x^(R|~L))+N[4]+4149444226&4294967295,b=R+(C<<6&4294967295|C>>>26),C=L+(R^(b|~x))+N[11]+3174756917&4294967295,L=b+(C<<10&4294967295|C>>>22),C=x+(b^(L|~R))+N[2]+718787259&4294967295,x=L+(C<<15&4294967295|C>>>17),C=R+(L^(x|~b))+N[9]+3951481745&4294967295,V.g[0]=V.g[0]+b&4294967295,V.g[1]=V.g[1]+(x+(C<<21&4294967295|C>>>11))&4294967295,V.g[2]=V.g[2]+x&4294967295,V.g[3]=V.g[3]+L&4294967295}s.prototype.u=function(V,b){b===void 0&&(b=V.length);for(var R=b-this.blockSize,N=this.B,x=this.h,L=0;L<b;){if(x==0)for(;L<=R;)o(this,V,L),L+=this.blockSize;if(typeof V=="string"){for(;L<b;)if(N[x++]=V.charCodeAt(L++),x==this.blockSize){o(this,N),x=0;break}}else for(;L<b;)if(N[x++]=V[L++],x==this.blockSize){o(this,N),x=0;break}}this.h=x,this.o+=b},s.prototype.v=function(){var V=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);V[0]=128;for(var b=1;b<V.length-8;++b)V[b]=0;var R=8*this.o;for(b=V.length-8;b<V.length;++b)V[b]=R&255,R/=256;for(this.u(V),V=Array(16),b=R=0;4>b;++b)for(var N=0;32>N;N+=8)V[R++]=this.g[b]>>>N&255;return V};function u(V,b){var R=m;return Object.prototype.hasOwnProperty.call(R,V)?R[V]:R[V]=b(V)}function h(V,b){this.h=b;for(var R=[],N=!0,x=V.length-1;0<=x;x--){var L=V[x]|0;N&&L==b||(R[x]=L,N=!1)}this.g=R}var m={};function p(V){return-128<=V&&128>V?u(V,function(b){return new h([b|0],0>b?-1:0)}):new h([V|0],0>V?-1:0)}function g(V){if(isNaN(V)||!isFinite(V))return S;if(0>V)return H(g(-V));for(var b=[],R=1,N=0;V>=R;N++)b[N]=V/R|0,R*=4294967296;return new h(b,0)}function E(V,b){if(V.length==0)throw Error("number format error: empty string");if(b=b||10,2>b||36<b)throw Error("radix out of range: "+b);if(V.charAt(0)=="-")return H(E(V.substring(1),b));if(0<=V.indexOf("-"))throw Error('number format error: interior "-" character');for(var R=g(Math.pow(b,8)),N=S,x=0;x<V.length;x+=8){var L=Math.min(8,V.length-x),C=parseInt(V.substring(x,x+L),b);8>L?(L=g(Math.pow(b,L)),N=N.j(L).add(g(C))):(N=N.j(R),N=N.add(g(C)))}return N}var S=p(0),w=p(1),D=p(16777216);i=h.prototype,i.m=function(){if(G(this))return-H(this).m();for(var V=0,b=1,R=0;R<this.g.length;R++){var N=this.i(R);V+=(0<=N?N:4294967296+N)*b,b*=4294967296}return V},i.toString=function(V){if(V=V||10,2>V||36<V)throw Error("radix out of range: "+V);if(P(this))return"0";if(G(this))return"-"+H(this).toString(V);for(var b=g(Math.pow(V,6)),R=this,N="";;){var x=oe(R,b).g;R=K(R,x.j(b));var L=((0<R.g.length?R.g[0]:R.h)>>>0).toString(V);if(R=x,P(R))return L+N;for(;6>L.length;)L="0"+L;N=L+N}},i.i=function(V){return 0>V?0:V<this.g.length?this.g[V]:this.h};function P(V){if(V.h!=0)return!1;for(var b=0;b<V.g.length;b++)if(V.g[b]!=0)return!1;return!0}function G(V){return V.h==-1}i.l=function(V){return V=K(this,V),G(V)?-1:P(V)?0:1};function H(V){for(var b=V.g.length,R=[],N=0;N<b;N++)R[N]=~V.g[N];return new h(R,~V.h).add(w)}i.abs=function(){return G(this)?H(this):this},i.add=function(V){for(var b=Math.max(this.g.length,V.g.length),R=[],N=0,x=0;x<=b;x++){var L=N+(this.i(x)&65535)+(V.i(x)&65535),C=(L>>>16)+(this.i(x)>>>16)+(V.i(x)>>>16);N=C>>>16,L&=65535,C&=65535,R[x]=C<<16|L}return new h(R,R[R.length-1]&-2147483648?-1:0)};function K(V,b){return V.add(H(b))}i.j=function(V){if(P(this)||P(V))return S;if(G(this))return G(V)?H(this).j(H(V)):H(H(this).j(V));if(G(V))return H(this.j(H(V)));if(0>this.l(D)&&0>V.l(D))return g(this.m()*V.m());for(var b=this.g.length+V.g.length,R=[],N=0;N<2*b;N++)R[N]=0;for(N=0;N<this.g.length;N++)for(var x=0;x<V.g.length;x++){var L=this.i(N)>>>16,C=this.i(N)&65535,Lt=V.i(x)>>>16,st=V.i(x)&65535;R[2*N+2*x]+=C*st,ne(R,2*N+2*x),R[2*N+2*x+1]+=L*st,ne(R,2*N+2*x+1),R[2*N+2*x+1]+=C*Lt,ne(R,2*N+2*x+1),R[2*N+2*x+2]+=L*Lt,ne(R,2*N+2*x+2)}for(N=0;N<b;N++)R[N]=R[2*N+1]<<16|R[2*N];for(N=b;N<2*b;N++)R[N]=0;return new h(R,0)};function ne(V,b){for(;(V[b]&65535)!=V[b];)V[b+1]+=V[b]>>>16,V[b]&=65535,b++}function te(V,b){this.g=V,this.h=b}function oe(V,b){if(P(b))throw Error("division by zero");if(P(V))return new te(S,S);if(G(V))return b=oe(H(V),b),new te(H(b.g),H(b.h));if(G(b))return b=oe(V,H(b)),new te(H(b.g),b.h);if(30<V.g.length){if(G(V)||G(b))throw Error("slowDivide_ only works with positive integers.");for(var R=w,N=b;0>=N.l(V);)R=ue(R),N=ue(N);var x=Ae(R,1),L=Ae(N,1);for(N=Ae(N,2),R=Ae(R,2);!P(N);){var C=L.add(N);0>=C.l(V)&&(x=x.add(R),L=C),N=Ae(N,1),R=Ae(R,1)}return b=K(V,x.j(b)),new te(x,b)}for(x=S;0<=V.l(b);){for(R=Math.max(1,Math.floor(V.m()/b.m())),N=Math.ceil(Math.log(R)/Math.LN2),N=48>=N?1:Math.pow(2,N-48),L=g(R),C=L.j(b);G(C)||0<C.l(V);)R-=N,L=g(R),C=L.j(b);P(L)&&(L=w),x=x.add(L),V=K(V,C)}return new te(x,V)}i.A=function(V){return oe(this,V).h},i.and=function(V){for(var b=Math.max(this.g.length,V.g.length),R=[],N=0;N<b;N++)R[N]=this.i(N)&V.i(N);return new h(R,this.h&V.h)},i.or=function(V){for(var b=Math.max(this.g.length,V.g.length),R=[],N=0;N<b;N++)R[N]=this.i(N)|V.i(N);return new h(R,this.h|V.h)},i.xor=function(V){for(var b=Math.max(this.g.length,V.g.length),R=[],N=0;N<b;N++)R[N]=this.i(N)^V.i(N);return new h(R,this.h^V.h)};function ue(V){for(var b=V.g.length+1,R=[],N=0;N<b;N++)R[N]=V.i(N)<<1|V.i(N-1)>>>31;return new h(R,V.h)}function Ae(V,b){var R=b>>5;b%=32;for(var N=V.g.length-R,x=[],L=0;L<N;L++)x[L]=0<b?V.i(L+R)>>>b|V.i(L+R+1)<<32-b:V.i(L+R);return new h(x,V.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,pA=s,h.prototype.add=h.prototype.add,h.prototype.multiply=h.prototype.j,h.prototype.modulo=h.prototype.A,h.prototype.compare=h.prototype.l,h.prototype.toNumber=h.prototype.m,h.prototype.toString=h.prototype.toString,h.prototype.getBits=h.prototype.i,h.fromNumber=g,h.fromString=E,Gr=h}).apply(typeof DE<"u"?DE:typeof self<"u"?self:typeof window<"u"?window:{});var Yc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var gA,zl,yA,oh,Hm,_A,vA,EA;(function(){var i,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(c,y,_){return c==Array.prototype||c==Object.prototype||(c[y]=_.value),c};function t(c){c=[typeof globalThis=="object"&&globalThis,c,typeof window=="object"&&window,typeof self=="object"&&self,typeof Yc=="object"&&Yc];for(var y=0;y<c.length;++y){var _=c[y];if(_&&_.Math==Math)return _}throw Error("Cannot find global object")}var s=t(this);function o(c,y){if(y)e:{var _=s;c=c.split(".");for(var A=0;A<c.length-1;A++){var U=c[A];if(!(U in _))break e;_=_[U]}c=c[c.length-1],A=_[c],y=y(A),y!=A&&y!=null&&e(_,c,{configurable:!0,writable:!0,value:y})}}function u(c,y){c instanceof String&&(c+="");var _=0,A=!1,U={next:function(){if(!A&&_<c.length){var F=_++;return{value:y(F,c[F]),done:!1}}return A=!0,{done:!0,value:void 0}}};return U[Symbol.iterator]=function(){return U},U}o("Array.prototype.values",function(c){return c||function(){return u(this,function(y,_){return _})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var h=h||{},m=this||self;function p(c){var y=typeof c;return y=y!="object"?y:c?Array.isArray(c)?"array":y:"null",y=="array"||y=="object"&&typeof c.length=="number"}function g(c){var y=typeof c;return y=="object"&&c!=null||y=="function"}function E(c,y,_){return c.call.apply(c.bind,arguments)}function S(c,y,_){if(!c)throw Error();if(2<arguments.length){var A=Array.prototype.slice.call(arguments,2);return function(){var U=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(U,A),c.apply(y,U)}}return function(){return c.apply(y,arguments)}}function w(c,y,_){return w=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?E:S,w.apply(null,arguments)}function D(c,y){var _=Array.prototype.slice.call(arguments,1);return function(){var A=_.slice();return A.push.apply(A,arguments),c.apply(this,A)}}function P(c,y){function _(){}_.prototype=y.prototype,c.aa=y.prototype,c.prototype=new _,c.prototype.constructor=c,c.Qb=function(A,U,F){for(var re=Array(arguments.length-2),xe=2;xe<arguments.length;xe++)re[xe-2]=arguments[xe];return y.prototype[U].apply(A,re)}}function G(c){const y=c.length;if(0<y){const _=Array(y);for(let A=0;A<y;A++)_[A]=c[A];return _}return[]}function H(c,y){for(let _=1;_<arguments.length;_++){const A=arguments[_];if(p(A)){const U=c.length||0,F=A.length||0;c.length=U+F;for(let re=0;re<F;re++)c[U+re]=A[re]}else c.push(A)}}class K{constructor(y,_){this.i=y,this.j=_,this.h=0,this.g=null}get(){let y;return 0<this.h?(this.h--,y=this.g,this.g=y.next,y.next=null):y=this.i(),y}}function ne(c){return/^[\s\xa0]*$/.test(c)}function te(){var c=m.navigator;return c&&(c=c.userAgent)?c:""}function oe(c){return oe[" "](c),c}oe[" "]=function(){};var ue=te().indexOf("Gecko")!=-1&&!(te().toLowerCase().indexOf("webkit")!=-1&&te().indexOf("Edge")==-1)&&!(te().indexOf("Trident")!=-1||te().indexOf("MSIE")!=-1)&&te().indexOf("Edge")==-1;function Ae(c,y,_){for(const A in c)y.call(_,c[A],A,c)}function V(c,y){for(const _ in c)y.call(void 0,c[_],_,c)}function b(c){const y={};for(const _ in c)y[_]=c[_];return y}const R="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function N(c,y){let _,A;for(let U=1;U<arguments.length;U++){A=arguments[U];for(_ in A)c[_]=A[_];for(let F=0;F<R.length;F++)_=R[F],Object.prototype.hasOwnProperty.call(A,_)&&(c[_]=A[_])}}function x(c){var y=1;c=c.split(":");const _=[];for(;0<y&&c.length;)_.push(c.shift()),y--;return c.length&&_.push(c.join(":")),_}function L(c){m.setTimeout(()=>{throw c},0)}function C(){var c=Be;let y=null;return c.g&&(y=c.g,c.g=c.g.next,c.g||(c.h=null),y.next=null),y}class Lt{constructor(){this.h=this.g=null}add(y,_){const A=st.get();A.set(y,_),this.h?this.h.next=A:this.g=A,this.h=A}}var st=new K(()=>new $,c=>c.reset());class ${constructor(){this.next=this.g=this.h=null}set(y,_){this.h=y,this.g=_,this.next=null}reset(){this.next=this.g=this.h=null}}let se,de=!1,Be=new Lt,O=()=>{const c=m.Promise.resolve(void 0);se=()=>{c.then(ee)}};var ee=()=>{for(var c;c=C();){try{c.h.call(c.g)}catch(_){L(_)}var y=st;y.j(c),100>y.h&&(y.h++,c.next=y.g,y.g=c)}de=!1};function ae(){this.s=this.s,this.C=this.C}ae.prototype.s=!1,ae.prototype.ma=function(){this.s||(this.s=!0,this.N())},ae.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ie(c,y){this.type=c,this.g=this.target=y,this.defaultPrevented=!1}ie.prototype.h=function(){this.defaultPrevented=!0};var pe=function(){if(!m.addEventListener||!Object.defineProperty)return!1;var c=!1,y=Object.defineProperty({},"passive",{get:function(){c=!0}});try{const _=()=>{};m.addEventListener("test",_,y),m.removeEventListener("test",_,y)}catch{}return c}();function De(c,y){if(ie.call(this,c?c.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,c){var _=this.type=c.type,A=c.changedTouches&&c.changedTouches.length?c.changedTouches[0]:null;if(this.target=c.target||c.srcElement,this.g=y,y=c.relatedTarget){if(ue){e:{try{oe(y.nodeName);var U=!0;break e}catch{}U=!1}U||(y=null)}}else _=="mouseover"?y=c.fromElement:_=="mouseout"&&(y=c.toElement);this.relatedTarget=y,A?(this.clientX=A.clientX!==void 0?A.clientX:A.pageX,this.clientY=A.clientY!==void 0?A.clientY:A.pageY,this.screenX=A.screenX||0,this.screenY=A.screenY||0):(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0),this.button=c.button,this.key=c.key||"",this.ctrlKey=c.ctrlKey,this.altKey=c.altKey,this.shiftKey=c.shiftKey,this.metaKey=c.metaKey,this.pointerId=c.pointerId||0,this.pointerType=typeof c.pointerType=="string"?c.pointerType:we[c.pointerType]||"",this.state=c.state,this.i=c,c.defaultPrevented&&De.aa.h.call(this)}}P(De,ie);var we={2:"touch",3:"pen",4:"mouse"};De.prototype.h=function(){De.aa.h.call(this);var c=this.i;c.preventDefault?c.preventDefault():c.returnValue=!1};var Ot="closure_listenable_"+(1e6*Math.random()|0),Ze=0;function Wn(c,y,_,A,U){this.listener=c,this.proxy=null,this.src=y,this.type=_,this.capture=!!A,this.ha=U,this.key=++Ze,this.da=this.fa=!1}function or(c){c.da=!0,c.listener=null,c.proxy=null,c.src=null,c.ha=null}function Si(c){this.src=c,this.g={},this.h=0}Si.prototype.add=function(c,y,_,A,U){var F=c.toString();c=this.g[F],c||(c=this.g[F]=[],this.h++);var re=ss(c,y,A,U);return-1<re?(y=c[re],_||(y.fa=!1)):(y=new Wn(y,this.src,F,!!A,U),y.fa=_,c.push(y)),y};function rs(c,y){var _=y.type;if(_ in c.g){var A=c.g[_],U=Array.prototype.indexOf.call(A,y,void 0),F;(F=0<=U)&&Array.prototype.splice.call(A,U,1),F&&(or(y),c.g[_].length==0&&(delete c.g[_],c.h--))}}function ss(c,y,_,A){for(var U=0;U<c.length;++U){var F=c[U];if(!F.da&&F.listener==y&&F.capture==!!_&&F.ha==A)return U}return-1}var as="closure_lm_"+(1e6*Math.random()|0),So={};function Au(c,y,_,A,U){if(Array.isArray(y)){for(var F=0;F<y.length;F++)Au(c,y[F],_,A,U);return null}return _=wu(_),c&&c[Ot]?c.K(y,_,g(A)?!!A.capture:!1,U):Sn(c,y,_,!1,A,U)}function Sn(c,y,_,A,U,F){if(!y)throw Error("Invalid event type");var re=g(U)?!!U.capture:!!U,xe=la(c);if(xe||(c[as]=xe=new Si(c)),_=xe.add(y,_,A,re,F),_.proxy)return _;if(A=lf(),_.proxy=A,A.src=c,A.listener=_,c.addEventListener)pe||(U=re),U===void 0&&(U=!1),c.addEventListener(y.toString(),A,U);else if(c.attachEvent)c.attachEvent(os(y.toString()),A);else if(c.addListener&&c.removeListener)c.addListener(A);else throw Error("addEventListener and attachEvent are unavailable.");return _}function lf(){function c(_){return y.call(c.src,c.listener,_)}const y=uf;return c}function bo(c,y,_,A,U){if(Array.isArray(y))for(var F=0;F<y.length;F++)bo(c,y[F],_,A,U);else A=g(A)?!!A.capture:!!A,_=wu(_),c&&c[Ot]?(c=c.i,y=String(y).toString(),y in c.g&&(F=c.g[y],_=ss(F,_,A,U),-1<_&&(or(F[_]),Array.prototype.splice.call(F,_,1),F.length==0&&(delete c.g[y],c.h--)))):c&&(c=la(c))&&(y=c.g[y.toString()],c=-1,y&&(c=ss(y,_,A,U)),(_=-1<c?y[c]:null)&&oa(_))}function oa(c){if(typeof c!="number"&&c&&!c.da){var y=c.src;if(y&&y[Ot])rs(y.i,c);else{var _=c.type,A=c.proxy;y.removeEventListener?y.removeEventListener(_,A,c.capture):y.detachEvent?y.detachEvent(os(_),A):y.addListener&&y.removeListener&&y.removeListener(A),(_=la(y))?(rs(_,c),_.h==0&&(_.src=null,y[as]=null)):or(c)}}}function os(c){return c in So?So[c]:So[c]="on"+c}function uf(c,y){if(c.da)c=!0;else{y=new De(y,this);var _=c.listener,A=c.ha||c.src;c.fa&&oa(c),c=_.call(A,y)}return c}function la(c){return c=c[as],c instanceof Si?c:null}var Ro="__closure_events_fn_"+(1e9*Math.random()>>>0);function wu(c){return typeof c=="function"?c:(c[Ro]||(c[Ro]=function(y){return c.handleEvent(y)}),c[Ro])}function at(){ae.call(this),this.i=new Si(this),this.M=this,this.F=null}P(at,ae),at.prototype[Ot]=!0,at.prototype.removeEventListener=function(c,y,_,A){bo(this,c,y,_,A)};function Fe(c,y){var _,A=c.F;if(A)for(_=[];A;A=A.F)_.push(A);if(c=c.M,A=y.type||y,typeof y=="string")y=new ie(y,c);else if(y instanceof ie)y.target=y.target||c;else{var U=y;y=new ie(A,c),N(y,U)}if(U=!0,_)for(var F=_.length-1;0<=F;F--){var re=y.g=_[F];U=fn(re,A,!0,y)&&U}if(re=y.g=c,U=fn(re,A,!0,y)&&U,U=fn(re,A,!1,y)&&U,_)for(F=0;F<_.length;F++)re=y.g=_[F],U=fn(re,A,!1,y)&&U}at.prototype.N=function(){if(at.aa.N.call(this),this.i){var c=this.i,y;for(y in c.g){for(var _=c.g[y],A=0;A<_.length;A++)or(_[A]);delete c.g[y],c.h--}}this.F=null},at.prototype.K=function(c,y,_,A){return this.i.add(String(c),y,!1,_,A)},at.prototype.L=function(c,y,_,A){return this.i.add(String(c),y,!0,_,A)};function fn(c,y,_,A){if(y=c.i.g[String(y)],!y)return!0;y=y.concat();for(var U=!0,F=0;F<y.length;++F){var re=y[F];if(re&&!re.da&&re.capture==_){var xe=re.listener,wt=re.ha||re.src;re.fa&&rs(c.i,re),U=xe.call(wt,A)!==!1&&U}}return U&&!A.defaultPrevented}function Kt(c,y,_){if(typeof c=="function")_&&(c=w(c,_));else if(c&&typeof c.handleEvent=="function")c=w(c.handleEvent,c);else throw Error("Invalid listener argument");return 2147483647<Number(y)?-1:m.setTimeout(c,y||0)}function Su(c){c.g=Kt(()=>{c.g=null,c.i&&(c.i=!1,Su(c))},c.l);const y=c.h;c.h=null,c.m.apply(null,y)}class cf extends ae{constructor(y,_){super(),this.m=y,this.l=_,this.h=null,this.i=!1,this.g=null}j(y){this.h=arguments,this.g?this.i=!0:Su(this)}N(){super.N(),this.g&&(m.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ls(c){ae.call(this),this.h=c,this.g={}}P(ls,ae);var us=[];function cs(c){Ae(c.g,function(y,_){this.g.hasOwnProperty(_)&&oa(y)},c),c.g={}}ls.prototype.N=function(){ls.aa.N.call(this),cs(this)},ls.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Bn=m.JSON.stringify,ua=m.JSON.parse,hs=class{stringify(c){return m.JSON.stringify(c,void 0)}parse(c){return m.JSON.parse(c,void 0)}};function Io(){}Io.prototype.h=null;function Co(c){return c.h||(c.h=c.i())}function Do(){}var bi={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Ri(){ie.call(this,"d")}P(Ri,ie);function Oo(){ie.call(this,"c")}P(Oo,ie);var Zn={},No=null;function lr(){return No=No||new at}Zn.La="serverreachability";function ca(c){ie.call(this,Zn.La,c)}P(ca,ie);function ur(c){const y=lr();Fe(y,new ca(y))}Zn.STAT_EVENT="statevent";function bu(c,y){ie.call(this,Zn.STAT_EVENT,c),this.stat=y}P(bu,ie);function tt(c){const y=lr();Fe(y,new bu(y,c))}Zn.Ma="timingevent";function At(c,y){ie.call(this,Zn.Ma,c),this.size=y}P(At,ie);function pt(c,y){if(typeof c!="function")throw Error("Fn must not be null and must be a function");return m.setTimeout(function(){c()},y)}function bn(){this.g=!0}bn.prototype.xa=function(){this.g=!1};function Mo(c,y,_,A,U,F){c.info(function(){if(c.g)if(F)for(var re="",xe=F.split("&"),wt=0;wt<xe.length;wt++){var ke=xe[wt].split("=");if(1<ke.length){var Mt=ke[0];ke=ke[1];var St=Mt.split("_");re=2<=St.length&&St[1]=="type"?re+(Mt+"="+ke+"&"):re+(Mt+"=redacted&")}}else re=null;else re=F;return"XMLHTTP REQ ("+A+") [attempt "+U+"]: "+y+`
`+_+`
`+re})}function hf(c,y,_,A,U,F,re){c.info(function(){return"XMLHTTP RESP ("+A+") [ attempt "+U+"]: "+y+`
`+_+`
`+F+" "+re})}function cr(c,y,_,A){c.info(function(){return"XMLHTTP TEXT ("+y+"): "+fs(c,_)+(A?" "+A:"")})}function Ru(c,y){c.info(function(){return"TIMEOUT: "+y})}bn.prototype.info=function(){};function fs(c,y){if(!c.g)return y;if(!y)return null;try{var _=JSON.parse(y);if(_){for(c=0;c<_.length;c++)if(Array.isArray(_[c])){var A=_[c];if(!(2>A.length)){var U=A[1];if(Array.isArray(U)&&!(1>U.length)){var F=U[0];if(F!="noop"&&F!="stop"&&F!="close")for(var re=1;re<U.length;re++)U[re]=""}}}}return Bn(_)}catch{return y}}var hr={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Ii={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Jn;function ei(){}P(ei,Io),ei.prototype.g=function(){return new XMLHttpRequest},ei.prototype.i=function(){return{}},Jn=new ei;function Jt(c,y,_,A){this.j=c,this.i=y,this.l=_,this.R=A||1,this.U=new ls(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new ht}function ht(){this.i=null,this.g="",this.h=!1}var Vo={},ha={};function jn(c,y,_){c.L=1,c.v=ys(dn(y)),c.m=_,c.P=!0,Ci(c,null)}function Ci(c,y){c.F=Date.now(),ds(c),c.A=dn(c.v);var _=c.A,A=c.R;Array.isArray(A)||(A=[String(A)]),zo(_.i,"t",A),c.C=0,_=c.j.J,c.h=new ht,c.g=qu(c.j,_?y:null,!c.m),0<c.O&&(c.M=new cf(w(c.Y,c,c.g),c.O)),y=c.U,_=c.g,A=c.ca;var U="readystatechange";Array.isArray(U)||(U&&(us[0]=U.toString()),U=us);for(var F=0;F<U.length;F++){var re=Au(_,U[F],A||y.handleEvent,!1,y.h||y);if(!re)break;y.g[re.key]=re}y=c.H?b(c.H):{},c.m?(c.u||(c.u="POST"),y["Content-Type"]="application/x-www-form-urlencoded",c.g.ea(c.A,c.u,c.m,y)):(c.u="GET",c.g.ea(c.A,c.u,null,y)),ur(),Mo(c.i,c.u,c.A,c.l,c.R,c.m)}Jt.prototype.ca=function(c){c=c.target;const y=this.M;y&&Dn(c)==3?y.j():this.Y(c)},Jt.prototype.Y=function(c){try{if(c==this.g)e:{const St=Dn(this.g);var y=this.g.Ba();const ki=this.g.Z();if(!(3>St)&&(St!=3||this.g&&(this.h.h||this.g.oa()||Pu(this.g)))){this.J||St!=4||y==7||(y==8||0>=ki?ur(3):ur(2)),fr(this);var _=this.g.Z();this.X=_;t:if(Iu(this)){var A=Pu(this.g);c="";var U=A.length,F=Dn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ut(this),ti(this);var re="";break t}this.h.i=new m.TextDecoder}for(y=0;y<U;y++)this.h.h=!0,c+=this.h.i.decode(A[y],{stream:!(F&&y==U-1)});A.length=0,this.h.g+=c,this.C=0,re=this.h.g}else re=this.g.oa();if(this.o=_==200,hf(this.i,this.u,this.A,this.l,this.R,St,_),this.o){if(this.T&&!this.K){t:{if(this.g){var xe,wt=this.g;if((xe=wt.g?wt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ne(xe)){var ke=xe;break t}}ke=null}if(_=ke)cr(this.i,this.l,_,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ms(this,_);else{this.o=!1,this.s=3,tt(12),Ut(this),ti(this);break e}}if(this.P){_=!0;let zt;for(;!this.J&&this.C<re.length;)if(zt=Cu(this,re),zt==ha){St==4&&(this.s=4,tt(14),_=!1),cr(this.i,this.l,null,"[Incomplete Response]");break}else if(zt==Vo){this.s=4,tt(15),cr(this.i,this.l,re,"[Invalid Chunk]"),_=!1;break}else cr(this.i,this.l,zt,null),ms(this,zt);if(Iu(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),St!=4||re.length!=0||this.h.h||(this.s=1,tt(16),_=!1),this.o=this.o&&_,!_)cr(this.i,this.l,re,"[Invalid Chunked Response]"),Ut(this),ti(this);else if(0<re.length&&!this.W){this.W=!0;var Mt=this.j;Mt.g==this&&Mt.ba&&!Mt.M&&(Mt.j.info("Great, no buffering proxy detected. Bytes received: "+re.length),bs(Mt),Mt.M=!0,tt(11))}}else cr(this.i,this.l,re,null),ms(this,re);St==4&&Ut(this),this.o&&!this.J&&(St==4?zu(this.j,this):(this.o=!1,ds(this)))}else gf(this.g),_==400&&0<re.indexOf("Unknown SID")?(this.s=3,tt(12)):(this.s=0,tt(13)),Ut(this),ti(this)}}}catch{}finally{}};function Iu(c){return c.g?c.u=="GET"&&c.L!=2&&c.j.Ca:!1}function Cu(c,y){var _=c.C,A=y.indexOf(`
`,_);return A==-1?ha:(_=Number(y.substring(_,A)),isNaN(_)?Vo:(A+=1,A+_>y.length?ha:(y=y.slice(A,A+_),c.C=A+_,y)))}Jt.prototype.cancel=function(){this.J=!0,Ut(this)};function ds(c){c.S=Date.now()+c.I,Du(c,c.I)}function Du(c,y){if(c.B!=null)throw Error("WatchDog timer not null");c.B=pt(w(c.ba,c),y)}function fr(c){c.B&&(m.clearTimeout(c.B),c.B=null)}Jt.prototype.ba=function(){this.B=null;const c=Date.now();0<=c-this.S?(Ru(this.i,this.A),this.L!=2&&(ur(),tt(17)),Ut(this),this.s=2,ti(this)):Du(this,this.S-c)};function ti(c){c.j.G==0||c.J||zu(c.j,c)}function Ut(c){fr(c);var y=c.M;y&&typeof y.ma=="function"&&y.ma(),c.M=null,cs(c.U),c.g&&(y=c.g,c.g=null,y.abort(),y.ma())}function ms(c,y){try{var _=c.j;if(_.G!=0&&(_.g==c||Po(_.h,c))){if(!c.K&&Po(_.h,c)&&_.G==3){try{var A=_.Da.g.parse(y)}catch{A=null}if(Array.isArray(A)&&A.length==3){var U=A;if(U[0]==0){e:if(!_.u){if(_.g)if(_.g.F+3e3<c.F)wa(_),Ta(_);else break e;Fo(_),tt(18)}}else _.za=U[1],0<_.za-_.T&&37500>U[2]&&_.F&&_.v==0&&!_.C&&(_.C=pt(w(_.Za,_),6e3));if(1>=da(_.h)&&_.ca){try{_.ca()}catch{}_.ca=void 0}}else xi(_,11)}else if((c.K||_.g==c)&&wa(_),!ne(y))for(U=_.Da.g.parse(y),y=0;y<U.length;y++){let ke=U[y];if(_.T=ke[0],ke=ke[1],_.G==2)if(ke[0]=="c"){_.K=ke[1],_.ia=ke[2];const Mt=ke[3];Mt!=null&&(_.la=Mt,_.j.info("VER="+_.la));const St=ke[4];St!=null&&(_.Aa=St,_.j.info("SVER="+_.Aa));const ki=ke[5];ki!=null&&typeof ki=="number"&&0<ki&&(A=1.5*ki,_.L=A,_.j.info("backChannelRequestTimeoutMs_="+A)),A=_;const zt=c.g;if(zt){const li=zt.g?zt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(li){var F=A.h;F.g||li.indexOf("spdy")==-1&&li.indexOf("quic")==-1&&li.indexOf("h2")==-1||(F.j=F.l,F.g=new Set,F.h&&(ma(F,F.h),F.h=null))}if(A.D){const Ko=zt.g?zt.g.getResponseHeader("X-HTTP-Session-Id"):null;Ko&&(A.ya=Ko,$e(A.I,A.D,Ko))}}_.G=3,_.l&&_.l.ua(),_.ba&&(_.R=Date.now()-c.F,_.j.info("Handshake RTT: "+_.R+"ms")),A=_;var re=c;if(A.qa=ju(A,A.J?A.ia:null,A.W),re.K){en(A.h,re);var xe=re,wt=A.L;wt&&(xe.I=wt),xe.B&&(fr(xe),ds(xe)),A.g=re}else Lu(A);0<_.i.length&&Aa(_)}else ke[0]!="stop"&&ke[0]!="close"||xi(_,7);else _.G==3&&(ke[0]=="stop"||ke[0]=="close"?ke[0]=="stop"?xi(_,7):qo(_):ke[0]!="noop"&&_.l&&_.l.ta(ke),_.v=0)}}ur(4)}catch{}}var Ou=class{constructor(c,y){this.g=c,this.map=y}};function Di(c){this.l=c||10,m.PerformanceNavigationTiming?(c=m.performance.getEntriesByType("navigation"),c=0<c.length&&(c[0].nextHopProtocol=="hq"||c[0].nextHopProtocol=="h2")):c=!!(m.chrome&&m.chrome.loadTimes&&m.chrome.loadTimes()&&m.chrome.loadTimes().wasFetchedViaSpdy),this.j=c?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function fa(c){return c.h?!0:c.g?c.g.size>=c.j:!1}function da(c){return c.h?1:c.g?c.g.size:0}function Po(c,y){return c.h?c.h==y:c.g?c.g.has(y):!1}function ma(c,y){c.g?c.g.add(y):c.h=y}function en(c,y){c.h&&c.h==y?c.h=null:c.g&&c.g.has(y)&&c.g.delete(y)}Di.prototype.cancel=function(){if(this.i=xo(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const c of this.g.values())c.cancel();this.g.clear()}};function xo(c){if(c.h!=null)return c.i.concat(c.h.D);if(c.g!=null&&c.g.size!==0){let y=c.i;for(const _ of c.g.values())y=y.concat(_.D);return y}return G(c.i)}function ff(c){if(c.V&&typeof c.V=="function")return c.V();if(typeof Map<"u"&&c instanceof Map||typeof Set<"u"&&c instanceof Set)return Array.from(c.values());if(typeof c=="string")return c.split("");if(p(c)){for(var y=[],_=c.length,A=0;A<_;A++)y.push(c[A]);return y}y=[],_=0;for(A in c)y[_++]=c[A];return y}function pa(c){if(c.na&&typeof c.na=="function")return c.na();if(!c.V||typeof c.V!="function"){if(typeof Map<"u"&&c instanceof Map)return Array.from(c.keys());if(!(typeof Set<"u"&&c instanceof Set)){if(p(c)||typeof c=="string"){var y=[];c=c.length;for(var _=0;_<c;_++)y.push(_);return y}y=[],_=0;for(const A in c)y[_++]=A;return y}}}function ko(c,y){if(c.forEach&&typeof c.forEach=="function")c.forEach(y,void 0);else if(p(c)||typeof c=="string")Array.prototype.forEach.call(c,y,void 0);else for(var _=pa(c),A=ff(c),U=A.length,F=0;F<U;F++)y.call(void 0,A[F],_&&_[F],c)}var ps=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function df(c,y){if(c){c=c.split("&");for(var _=0;_<c.length;_++){var A=c[_].indexOf("="),U=null;if(0<=A){var F=c[_].substring(0,A);U=c[_].substring(A+1)}else F=c[_];y(F,U?decodeURIComponent(U.replace(/\+/g," ")):"")}}}function gt(c){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,c instanceof gt){this.h=c.h,gs(this,c.j),this.o=c.o,this.g=c.g,dr(this,c.s),this.l=c.l;var y=c.i,_=new Ni;_.i=y.i,y.g&&(_.g=new Map(y.g),_.h=y.h),Oi(this,_),this.m=c.m}else c&&(y=String(c).match(ps))?(this.h=!1,gs(this,y[1]||"",!0),this.o=Rn(y[2]||""),this.g=Rn(y[3]||"",!0),dr(this,y[4]),this.l=Rn(y[5]||"",!0),Oi(this,y[6]||"",!0),this.m=Rn(y[7]||"")):(this.h=!1,this.i=new Ni(null,this.h))}gt.prototype.toString=function(){var c=[],y=this.j;y&&c.push(_s(y,Lo,!0),":");var _=this.g;return(_||y=="file")&&(c.push("//"),(y=this.o)&&c.push(_s(y,Lo,!0),"@"),c.push(encodeURIComponent(String(_)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),_=this.s,_!=null&&c.push(":",String(_))),(_=this.l)&&(this.g&&_.charAt(0)!="/"&&c.push("/"),c.push(_s(_,_.charAt(0)=="/"?mf:Uo,!0))),(_=this.i.toString())&&c.push("?",_),(_=this.m)&&c.push("#",_s(_,ga)),c.join("")};function dn(c){return new gt(c)}function gs(c,y,_){c.j=_?Rn(y,!0):y,c.j&&(c.j=c.j.replace(/:$/,""))}function dr(c,y){if(y){if(y=Number(y),isNaN(y)||0>y)throw Error("Bad port number "+y);c.s=y}else c.s=null}function Oi(c,y,_){y instanceof Ni?(c.i=y,Mu(c.i,c.h)):(_||(y=_s(y,pf)),c.i=new Ni(y,c.h))}function $e(c,y,_){c.i.set(y,_)}function ys(c){return $e(c,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),c}function Rn(c,y){return c?y?decodeURI(c.replace(/%25/g,"%2525")):decodeURIComponent(c):""}function _s(c,y,_){return typeof c=="string"?(c=encodeURI(c).replace(y,Nu),_&&(c=c.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c):null}function Nu(c){return c=c.charCodeAt(0),"%"+(c>>4&15).toString(16)+(c&15).toString(16)}var Lo=/[#\/\?@]/g,Uo=/[#\?:]/g,mf=/[#\?]/g,pf=/[#\?@]/g,ga=/#/g;function Ni(c,y){this.h=this.g=null,this.i=c||null,this.j=!!y}function In(c){c.g||(c.g=new Map,c.h=0,c.i&&df(c.i,function(y,_){c.add(decodeURIComponent(y.replace(/\+/g," ")),_)}))}i=Ni.prototype,i.add=function(c,y){In(this),this.i=null,c=ni(this,c);var _=this.g.get(c);return _||this.g.set(c,_=[]),_.push(y),this.h+=1,this};function Mi(c,y){In(c),y=ni(c,y),c.g.has(y)&&(c.i=null,c.h-=c.g.get(y).length,c.g.delete(y))}function Vi(c,y){return In(c),y=ni(c,y),c.g.has(y)}i.forEach=function(c,y){In(this),this.g.forEach(function(_,A){_.forEach(function(U){c.call(y,U,A,this)},this)},this)},i.na=function(){In(this);const c=Array.from(this.g.values()),y=Array.from(this.g.keys()),_=[];for(let A=0;A<y.length;A++){const U=c[A];for(let F=0;F<U.length;F++)_.push(y[A])}return _},i.V=function(c){In(this);let y=[];if(typeof c=="string")Vi(this,c)&&(y=y.concat(this.g.get(ni(this,c))));else{c=Array.from(this.g.values());for(let _=0;_<c.length;_++)y=y.concat(c[_])}return y},i.set=function(c,y){return In(this),this.i=null,c=ni(this,c),Vi(this,c)&&(this.h-=this.g.get(c).length),this.g.set(c,[y]),this.h+=1,this},i.get=function(c,y){return c?(c=this.V(c),0<c.length?String(c[0]):y):y};function zo(c,y,_){Mi(c,y),0<_.length&&(c.i=null,c.g.set(ni(c,y),G(_)),c.h+=_.length)}i.toString=function(){if(this.i)return this.i;if(!this.g)return"";const c=[],y=Array.from(this.g.keys());for(var _=0;_<y.length;_++){var A=y[_];const F=encodeURIComponent(String(A)),re=this.V(A);for(A=0;A<re.length;A++){var U=F;re[A]!==""&&(U+="="+encodeURIComponent(String(re[A]))),c.push(U)}}return this.i=c.join("&")};function ni(c,y){return y=String(y),c.j&&(y=y.toLowerCase()),y}function Mu(c,y){y&&!c.j&&(In(c),c.i=null,c.g.forEach(function(_,A){var U=A.toLowerCase();A!=U&&(Mi(this,A),zo(this,U,_))},c)),c.j=y}function vs(c,y){const _=new bn;if(m.Image){const A=new Image;A.onload=D(Cn,_,"TestLoadImage: loaded",!0,y,A),A.onerror=D(Cn,_,"TestLoadImage: error",!1,y,A),A.onabort=D(Cn,_,"TestLoadImage: abort",!1,y,A),A.ontimeout=D(Cn,_,"TestLoadImage: timeout",!1,y,A),m.setTimeout(function(){A.ontimeout&&A.ontimeout()},1e4),A.src=c}else y(!1)}function qn(c,y){const _=new bn,A=new AbortController,U=setTimeout(()=>{A.abort(),Cn(_,"TestPingServer: timeout",!1,y)},1e4);fetch(c,{signal:A.signal}).then(F=>{clearTimeout(U),F.ok?Cn(_,"TestPingServer: ok",!0,y):Cn(_,"TestPingServer: server error",!1,y)}).catch(()=>{clearTimeout(U),Cn(_,"TestPingServer: error",!1,y)})}function Cn(c,y,_,A,U){try{U&&(U.onload=null,U.onerror=null,U.onabort=null,U.ontimeout=null),A(_)}catch{}}function Es(){this.g=new hs}function ii(c,y,_){const A=_||"";try{ko(c,function(U,F){let re=U;g(U)&&(re=Bn(U)),y.push(A+F+"="+encodeURIComponent(re))})}catch(U){throw y.push(A+"type="+encodeURIComponent("_badmap")),U}}function mr(c){this.l=c.Ub||null,this.j=c.eb||!1}P(mr,Io),mr.prototype.g=function(){return new Pi(this.l,this.j)},mr.prototype.i=function(c){return function(){return c}}({});function Pi(c,y){at.call(this),this.D=c,this.o=y,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}P(Pi,at),i=Pi.prototype,i.open=function(c,y){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=c,this.A=y,this.readyState=1,si(this)},i.send=function(c){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const y={headers:this.u,method:this.B,credentials:this.m,cache:void 0};c&&(y.body=c),(this.D||m).fetch(new Request(this.A,y)).then(this.Sa.bind(this),this.ga.bind(this))},i.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ri(this)),this.readyState=0},i.Sa=function(c){if(this.g&&(this.l=c,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=c.headers,this.readyState=2,si(this)),this.g&&(this.readyState=3,si(this),this.g)))if(this.responseType==="arraybuffer")c.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof m.ReadableStream<"u"&&"body"in c){if(this.j=c.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Bo(this)}else c.text().then(this.Ra.bind(this),this.ga.bind(this))};function Bo(c){c.j.read().then(c.Pa.bind(c)).catch(c.ga.bind(c))}i.Pa=function(c){if(this.g){if(this.o&&c.value)this.response.push(c.value);else if(!this.o){var y=c.value?c.value:new Uint8Array(0);(y=this.v.decode(y,{stream:!c.done}))&&(this.response=this.responseText+=y)}c.done?ri(this):si(this),this.readyState==3&&Bo(this)}},i.Ra=function(c){this.g&&(this.response=this.responseText=c,ri(this))},i.Qa=function(c){this.g&&(this.response=c,ri(this))},i.ga=function(){this.g&&ri(this)};function ri(c){c.readyState=4,c.l=null,c.j=null,c.v=null,si(c)}i.setRequestHeader=function(c,y){this.u.append(c,y)},i.getResponseHeader=function(c){return this.h&&this.h.get(c.toLowerCase())||""},i.getAllResponseHeaders=function(){if(!this.h)return"";const c=[],y=this.h.entries();for(var _=y.next();!_.done;)_=_.value,c.push(_[0]+": "+_[1]),_=y.next();return c.join(`\r
`)};function si(c){c.onreadystatechange&&c.onreadystatechange.call(c)}Object.defineProperty(Pi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(c){this.m=c?"include":"same-origin"}});function jo(c){let y="";return Ae(c,function(_,A){y+=A,y+=":",y+=_,y+=`\r
`}),y}function Nt(c,y,_){e:{for(A in _){var A=!1;break e}A=!0}A||(_=jo(_),typeof c=="string"?_!=null&&encodeURIComponent(String(_)):$e(c,y,_))}function qe(c){at.call(this),this.headers=new Map,this.o=c||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}P(qe,at);var ya=/^https?$/i,Ts=["POST","PUT"];i=qe.prototype,i.Ha=function(c){this.J=c},i.ea=function(c,y,_,A){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+c);y=y?y.toUpperCase():"GET",this.D=c,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Jn.g(),this.v=this.o?Co(this.o):Co(Jn),this.g.onreadystatechange=w(this.Ea,this);try{this.B=!0,this.g.open(y,String(c),!0),this.B=!1}catch(F){Vu(this,F);return}if(c=_||"",_=new Map(this.headers),A)if(Object.getPrototypeOf(A)===Object.prototype)for(var U in A)_.set(U,A[U]);else if(typeof A.keys=="function"&&typeof A.get=="function")for(const F of A.keys())_.set(F,A.get(F));else throw Error("Unknown input type for opt_headers: "+String(A));A=Array.from(_.keys()).find(F=>F.toLowerCase()=="content-type"),U=m.FormData&&c instanceof m.FormData,!(0<=Array.prototype.indexOf.call(Ts,y,void 0))||A||U||_.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[F,re]of _)this.g.setRequestHeader(F,re);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{As(this),this.u=!0,this.g.send(c),this.u=!1}catch(F){Vu(this,F)}};function Vu(c,y){c.h=!1,c.g&&(c.j=!0,c.g.abort(),c.j=!1),c.l=y,c.m=5,_a(c),ai(c)}function _a(c){c.A||(c.A=!0,Fe(c,"complete"),Fe(c,"error"))}i.abort=function(c){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=c||7,Fe(this,"complete"),Fe(this,"abort"),ai(this))},i.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ai(this,!0)),qe.aa.N.call(this)},i.Ea=function(){this.s||(this.B||this.u||this.j?va(this):this.bb())},i.bb=function(){va(this)};function va(c){if(c.h&&typeof h<"u"&&(!c.v[1]||Dn(c)!=4||c.Z()!=2)){if(c.u&&Dn(c)==4)Kt(c.Ea,0,c);else if(Fe(c,"readystatechange"),Dn(c)==4){c.h=!1;try{const re=c.Z();e:switch(re){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var y=!0;break e;default:y=!1}var _;if(!(_=y)){var A;if(A=re===0){var U=String(c.D).match(ps)[1]||null;!U&&m.self&&m.self.location&&(U=m.self.location.protocol.slice(0,-1)),A=!ya.test(U?U.toLowerCase():"")}_=A}if(_)Fe(c,"complete"),Fe(c,"success");else{c.m=6;try{var F=2<Dn(c)?c.g.statusText:""}catch{F=""}c.l=F+" ["+c.Z()+"]",_a(c)}}finally{ai(c)}}}}function ai(c,y){if(c.g){As(c);const _=c.g,A=c.v[0]?()=>{}:null;c.g=null,c.v=null,y||Fe(c,"ready");try{_.onreadystatechange=A}catch{}}}function As(c){c.I&&(m.clearTimeout(c.I),c.I=null)}i.isActive=function(){return!!this.g};function Dn(c){return c.g?c.g.readyState:0}i.Z=function(){try{return 2<Dn(this)?this.g.status:-1}catch{return-1}},i.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},i.Oa=function(c){if(this.g){var y=this.g.responseText;return c&&y.indexOf(c)==0&&(y=y.substring(c.length)),ua(y)}};function Pu(c){try{if(!c.g)return null;if("response"in c.g)return c.g.response;switch(c.H){case"":case"text":return c.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in c.g)return c.g.mozResponseArrayBuffer}return null}catch{return null}}function gf(c){const y={};c=(c.g&&2<=Dn(c)&&c.g.getAllResponseHeaders()||"").split(`\r
`);for(let A=0;A<c.length;A++){if(ne(c[A]))continue;var _=x(c[A]);const U=_[0];if(_=_[1],typeof _!="string")continue;_=_.trim();const F=y[U]||[];y[U]=F,F.push(_)}V(y,function(A){return A.join(", ")})}i.Ba=function(){return this.m},i.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function ws(c,y,_){return _&&_.internalChannelParams&&_.internalChannelParams[c]||y}function Ea(c){this.Aa=0,this.i=[],this.j=new bn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=ws("failFast",!1,c),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=ws("baseRetryDelayMs",5e3,c),this.cb=ws("retryDelaySeedMs",1e4,c),this.Wa=ws("forwardChannelMaxRetries",2,c),this.wa=ws("forwardChannelRequestTimeoutMs",2e4,c),this.pa=c&&c.xmlHttpFactory||void 0,this.Xa=c&&c.Tb||void 0,this.Ca=c&&c.useFetchStreams||!1,this.L=void 0,this.J=c&&c.supportsCrossDomainXhr||!1,this.K="",this.h=new Di(c&&c.concurrentRequestLimit),this.Da=new Es,this.P=c&&c.fastHandshake||!1,this.O=c&&c.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=c&&c.Rb||!1,c&&c.xa&&this.j.xa(),c&&c.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&c&&c.detectBufferingProxy||!1,this.ja=void 0,c&&c.longPollingTimeout&&0<c.longPollingTimeout&&(this.ja=c.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}i=Ea.prototype,i.la=8,i.G=1,i.connect=function(c,y,_,A){tt(0),this.W=c,this.H=y||{},_&&A!==void 0&&(this.H.OSID=_,this.H.OAID=A),this.F=this.X,this.I=ju(this,null,this.W),Aa(this)};function qo(c){if(xu(c),c.G==3){var y=c.U++,_=dn(c.I);if($e(_,"SID",c.K),$e(_,"RID",y),$e(_,"TYPE","terminate"),Ss(c,_),y=new Jt(c,c.j,y),y.L=2,y.v=ys(dn(_)),_=!1,m.navigator&&m.navigator.sendBeacon)try{_=m.navigator.sendBeacon(y.v.toString(),"")}catch{}!_&&m.Image&&(new Image().src=y.v,_=!0),_||(y.g=qu(y.j,null),y.g.ea(y.v)),y.F=Date.now(),ds(y)}Bu(c)}function Ta(c){c.g&&(bs(c),c.g.cancel(),c.g=null)}function xu(c){Ta(c),c.u&&(m.clearTimeout(c.u),c.u=null),wa(c),c.h.cancel(),c.s&&(typeof c.s=="number"&&m.clearTimeout(c.s),c.s=null)}function Aa(c){if(!fa(c.h)&&!c.s){c.s=!0;var y=c.Ga;se||O(),de||(se(),de=!0),Be.add(y,c),c.B=0}}function yf(c,y){return da(c.h)>=c.h.j-(c.s?1:0)?!1:c.s?(c.i=y.D.concat(c.i),!0):c.G==1||c.G==2||c.B>=(c.Va?0:c.Wa)?!1:(c.s=pt(w(c.Ga,c,y),Go(c,c.B)),c.B++,!0)}i.Ga=function(c){if(this.s)if(this.s=null,this.G==1){if(!c){this.U=Math.floor(1e5*Math.random()),c=this.U++;const U=new Jt(this,this.j,c);let F=this.o;if(this.S&&(F?(F=b(F),N(F,this.S)):F=this.S),this.m!==null||this.O||(U.H=F,F=null),this.P)e:{for(var y=0,_=0;_<this.i.length;_++){t:{var A=this.i[_];if("__data__"in A.map&&(A=A.map.__data__,typeof A=="string")){A=A.length;break t}A=void 0}if(A===void 0)break;if(y+=A,4096<y){y=_;break e}if(y===4096||_===this.i.length-1){y=_+1;break e}}y=1e3}else y=1e3;y=ku(this,U,y),_=dn(this.I),$e(_,"RID",c),$e(_,"CVER",22),this.D&&$e(_,"X-HTTP-Session-Id",this.D),Ss(this,_),F&&(this.O?y="headers="+encodeURIComponent(String(jo(F)))+"&"+y:this.m&&Nt(_,this.m,F)),ma(this.h,U),this.Ua&&$e(_,"TYPE","init"),this.P?($e(_,"$req",y),$e(_,"SID","null"),U.T=!0,jn(U,_,null)):jn(U,_,y),this.G=2}}else this.G==3&&(c?Ho(this,c):this.i.length==0||fa(this.h)||Ho(this))};function Ho(c,y){var _;y?_=y.l:_=c.U++;const A=dn(c.I);$e(A,"SID",c.K),$e(A,"RID",_),$e(A,"AID",c.T),Ss(c,A),c.m&&c.o&&Nt(A,c.m,c.o),_=new Jt(c,c.j,_,c.B+1),c.m===null&&(_.H=c.o),y&&(c.i=y.D.concat(c.i)),y=ku(c,_,1e3),_.I=Math.round(.5*c.wa)+Math.round(.5*c.wa*Math.random()),ma(c.h,_),jn(_,A,y)}function Ss(c,y){c.H&&Ae(c.H,function(_,A){$e(y,A,_)}),c.l&&ko({},function(_,A){$e(y,A,_)})}function ku(c,y,_){_=Math.min(c.i.length,_);var A=c.l?w(c.l.Na,c.l,c):null;e:{var U=c.i;let F=-1;for(;;){const re=["count="+_];F==-1?0<_?(F=U[0].g,re.push("ofs="+F)):F=0:re.push("ofs="+F);let xe=!0;for(let wt=0;wt<_;wt++){let ke=U[wt].g;const Mt=U[wt].map;if(ke-=F,0>ke)F=Math.max(0,U[wt].g-100),xe=!1;else try{ii(Mt,re,"req"+ke+"_")}catch{A&&A(Mt)}}if(xe){A=re.join("&");break e}}}return c=c.i.splice(0,_),y.D=c,A}function Lu(c){if(!c.g&&!c.u){c.Y=1;var y=c.Fa;se||O(),de||(se(),de=!0),Be.add(y,c),c.v=0}}function Fo(c){return c.g||c.u||3<=c.v?!1:(c.Y++,c.u=pt(w(c.Fa,c),Go(c,c.v)),c.v++,!0)}i.Fa=function(){if(this.u=null,Uu(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var c=2*this.R;this.j.info("BP detection timer enabled: "+c),this.A=pt(w(this.ab,this),c)}},i.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,tt(10),Ta(this),Uu(this))};function bs(c){c.A!=null&&(m.clearTimeout(c.A),c.A=null)}function Uu(c){c.g=new Jt(c,c.j,"rpc",c.Y),c.m===null&&(c.g.H=c.o),c.g.O=0;var y=dn(c.qa);$e(y,"RID","rpc"),$e(y,"SID",c.K),$e(y,"AID",c.T),$e(y,"CI",c.F?"0":"1"),!c.F&&c.ja&&$e(y,"TO",c.ja),$e(y,"TYPE","xmlhttp"),Ss(c,y),c.m&&c.o&&Nt(y,c.m,c.o),c.L&&(c.g.I=c.L);var _=c.g;c=c.ia,_.L=1,_.v=ys(dn(y)),_.m=null,_.P=!0,Ci(_,c)}i.Za=function(){this.C!=null&&(this.C=null,Ta(this),Fo(this),tt(19))};function wa(c){c.C!=null&&(m.clearTimeout(c.C),c.C=null)}function zu(c,y){var _=null;if(c.g==y){wa(c),bs(c),c.g=null;var A=2}else if(Po(c.h,y))_=y.D,en(c.h,y),A=1;else return;if(c.G!=0){if(y.o)if(A==1){_=y.m?y.m.length:0,y=Date.now()-y.F;var U=c.B;A=lr(),Fe(A,new At(A,_)),Aa(c)}else Lu(c);else if(U=y.s,U==3||U==0&&0<y.X||!(A==1&&yf(c,y)||A==2&&Fo(c)))switch(_&&0<_.length&&(y=c.h,y.i=y.i.concat(_)),U){case 1:xi(c,5);break;case 4:xi(c,10);break;case 3:xi(c,6);break;default:xi(c,2)}}}function Go(c,y){let _=c.Ta+Math.floor(Math.random()*c.cb);return c.isActive()||(_*=2),_*y}function xi(c,y){if(c.j.info("Error code "+y),y==2){var _=w(c.fb,c),A=c.Xa;const U=!A;A=new gt(A||"//www.google.com/images/cleardot.gif"),m.location&&m.location.protocol=="http"||gs(A,"https"),ys(A),U?vs(A.toString(),_):qn(A.toString(),_)}else tt(2);c.G=0,c.l&&c.l.sa(y),Bu(c),xu(c)}i.fb=function(c){c?(this.j.info("Successfully pinged google.com"),tt(2)):(this.j.info("Failed to ping google.com"),tt(1))};function Bu(c){if(c.G=0,c.ka=[],c.l){const y=xo(c.h);(y.length!=0||c.i.length!=0)&&(H(c.ka,y),H(c.ka,c.i),c.h.i.length=0,G(c.i),c.i.length=0),c.l.ra()}}function ju(c,y,_){var A=_ instanceof gt?dn(_):new gt(_);if(A.g!="")y&&(A.g=y+"."+A.g),dr(A,A.s);else{var U=m.location;A=U.protocol,y=y?y+"."+U.hostname:U.hostname,U=+U.port;var F=new gt(null);A&&gs(F,A),y&&(F.g=y),U&&dr(F,U),_&&(F.l=_),A=F}return _=c.D,y=c.ya,_&&y&&$e(A,_,y),$e(A,"VER",c.la),Ss(c,A),A}function qu(c,y,_){if(y&&!c.J)throw Error("Can't create secondary domain capable XhrIo object.");return y=c.Ca&&!c.pa?new qe(new mr({eb:_})):new qe(c.pa),y.Ha(c.J),y}i.isActive=function(){return!!this.l&&this.l.isActive(this)};function Hu(){}i=Hu.prototype,i.ua=function(){},i.ta=function(){},i.sa=function(){},i.ra=function(){},i.isActive=function(){return!0},i.Na=function(){};function Sa(){}Sa.prototype.g=function(c,y){return new tn(c,y)};function tn(c,y){at.call(this),this.g=new Ea(y),this.l=c,this.h=y&&y.messageUrlParams||null,c=y&&y.messageHeaders||null,y&&y.clientProtocolHeaderRequired&&(c?c["X-Client-Protocol"]="webchannel":c={"X-Client-Protocol":"webchannel"}),this.g.o=c,c=y&&y.initMessageHeaders||null,y&&y.messageContentType&&(c?c["X-WebChannel-Content-Type"]=y.messageContentType:c={"X-WebChannel-Content-Type":y.messageContentType}),y&&y.va&&(c?c["X-WebChannel-Client-Profile"]=y.va:c={"X-WebChannel-Client-Profile":y.va}),this.g.S=c,(c=y&&y.Sb)&&!ne(c)&&(this.g.m=c),this.v=y&&y.supportsCrossDomainXhr||!1,this.u=y&&y.sendRawJson||!1,(y=y&&y.httpSessionIdParam)&&!ne(y)&&(this.g.D=y,c=this.h,c!==null&&y in c&&(c=this.h,y in c&&delete c[y])),this.j=new oi(this)}P(tn,at),tn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},tn.prototype.close=function(){qo(this.g)},tn.prototype.o=function(c){var y=this.g;if(typeof c=="string"){var _={};_.__data__=c,c=_}else this.u&&(_={},_.__data__=Bn(c),c=_);y.i.push(new Ou(y.Ya++,c)),y.G==3&&Aa(y)},tn.prototype.N=function(){this.g.l=null,delete this.j,qo(this.g),delete this.g,tn.aa.N.call(this)};function Fu(c){Ri.call(this),c.__headers__&&(this.headers=c.__headers__,this.statusCode=c.__status__,delete c.__headers__,delete c.__status__);var y=c.__sm__;if(y){e:{for(const _ in y){c=_;break e}c=void 0}(this.i=c)&&(c=this.i,y=y!==null&&c in y?y[c]:void 0),this.data=y}else this.data=c}P(Fu,Ri);function Gu(){Oo.call(this),this.status=1}P(Gu,Oo);function oi(c){this.g=c}P(oi,Hu),oi.prototype.ua=function(){Fe(this.g,"a")},oi.prototype.ta=function(c){Fe(this.g,new Fu(c))},oi.prototype.sa=function(c){Fe(this.g,new Gu)},oi.prototype.ra=function(){Fe(this.g,"b")},Sa.prototype.createWebChannel=Sa.prototype.g,tn.prototype.send=tn.prototype.o,tn.prototype.open=tn.prototype.m,tn.prototype.close=tn.prototype.close,EA=function(){return new Sa},vA=function(){return lr()},_A=Zn,Hm={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},hr.NO_ERROR=0,hr.TIMEOUT=8,hr.HTTP_ERROR=6,oh=hr,Ii.COMPLETE="complete",yA=Ii,Do.EventType=bi,bi.OPEN="a",bi.CLOSE="b",bi.ERROR="c",bi.MESSAGE="d",at.prototype.listen=at.prototype.K,zl=Do,qe.prototype.listenOnce=qe.prototype.L,qe.prototype.getLastError=qe.prototype.Ka,qe.prototype.getLastErrorCode=qe.prototype.Ba,qe.prototype.getStatus=qe.prototype.Z,qe.prototype.getResponseJson=qe.prototype.Oa,qe.prototype.getResponseText=qe.prototype.oa,qe.prototype.send=qe.prototype.ea,qe.prototype.setWithCredentials=qe.prototype.Ha,gA=qe}).apply(typeof Yc<"u"?Yc:typeof self<"u"?self:typeof window<"u"?window:{});const OE="@firebase/firestore",NE="4.7.16";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Xt.UNAUTHENTICATED=new Xt(null),Xt.GOOGLE_CREDENTIALS=new Xt("google-credentials-uid"),Xt.FIRST_PARTY=new Xt("first-party-uid"),Xt.MOCK_USER=new Xt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let vo="11.8.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qs=new zh("@firebase/firestore");function Ja(){return Qs.logLevel}function le(i,...e){if(Qs.logLevel<=Ve.DEBUG){const t=e.map(Op);Qs.debug(`Firestore (${vo}): ${i}`,...t)}}function rr(i,...e){if(Qs.logLevel<=Ve.ERROR){const t=e.map(Op);Qs.error(`Firestore (${vo}): ${i}`,...t)}}function uo(i,...e){if(Qs.logLevel<=Ve.WARN){const t=e.map(Op);Qs.warn(`Firestore (${vo}): ${i}`,...t)}}function Op(i){if(typeof i=="string")return i;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(i)}catch{return i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ve(i,e,t){let s="Unexpected state";typeof e=="string"?s=e:t=e,TA(i,s,t)}function TA(i,e,t){let s=`FIRESTORE (${vo}) INTERNAL ASSERTION FAILED: ${e} (ID: ${i.toString(16)})`;if(t!==void 0)try{s+=" CONTEXT: "+JSON.stringify(t)}catch{s+=" CONTEXT: "+t}throw rr(s),new Error(s)}function He(i,e,t,s){let o="Unexpected state";typeof t=="string"?o=t:s=t,i||TA(e,o,s)}function be(i,e){return i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ce extends zn{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AA{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class BO{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Xt.UNAUTHENTICATED))}shutdown(){}}class jO{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class qO{constructor(e){this.t=e,this.currentUser=Xt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){He(this.o===void 0,42304);let s=this.i;const o=p=>this.i!==s?(s=this.i,t(p)):Promise.resolve();let u=new er;this.o=()=>{this.i++,this.currentUser=this.u(),u.resolve(),u=new er,e.enqueueRetryable(()=>o(this.currentUser))};const h=()=>{const p=u;e.enqueueRetryable(async()=>{await p.promise,await o(this.currentUser)})},m=p=>{le("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=p,this.o&&(this.auth.addAuthTokenListener(this.o),h())};this.t.onInit(p=>m(p)),setTimeout(()=>{if(!this.auth){const p=this.t.getImmediate({optional:!0});p?m(p):(le("FirebaseAuthCredentialsProvider","Auth not yet detected"),u.resolve(),u=new er)}},0),h()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(s=>this.i!==e?(le("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(He(typeof s.accessToken=="string",31837,{l:s}),new AA(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return He(e===null||typeof e=="string",2055,{h:e}),new Xt(e)}}class HO{constructor(e,t,s){this.P=e,this.T=t,this.I=s,this.type="FirstParty",this.user=Xt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class FO{constructor(e,t,s){this.P=e,this.T=t,this.I=s}getToken(){return Promise.resolve(new HO(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(Xt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class ME{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class GO{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Tn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){He(this.o===void 0,3512);const s=u=>{u.error!=null&&le("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${u.error.message}`);const h=u.token!==this.m;return this.m=u.token,le("FirebaseAppCheckTokenProvider",`Received ${h?"new":"existing"} token.`),h?t(u.token):Promise.resolve()};this.o=u=>{e.enqueueRetryable(()=>s(u))};const o=u=>{le("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=u,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(u=>o(u)),setTimeout(()=>{if(!this.appCheck){const u=this.V.getImmediate({optional:!0});u?o(u):le("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new ME(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(He(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new ME(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KO(i){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(i);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<i;s++)t[s]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wA(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SA{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const o=KO(40);for(let u=0;u<o.length;++u)s.length<20&&o[u]<t&&(s+=e.charAt(o[u]%62))}return s}}function Ce(i,e){return i<e?-1:i>e?1:0}function Fm(i,e){let t=0;for(;t<i.length&&t<e.length;){const s=i.codePointAt(t),o=e.codePointAt(t);if(s!==o){if(s<128&&o<128)return Ce(s,o);{const u=wA(),h=$O(u.encode(VE(i,t)),u.encode(VE(e,t)));return h!==0?h:Ce(s,o)}}t+=s>65535?2:1}return Ce(i.length,e.length)}function VE(i,e){return i.codePointAt(e)>65535?i.substring(e,e+2):i.substring(e,e+1)}function $O(i,e){for(let t=0;t<i.length&&t<e.length;++t)if(i[t]!==e[t])return Ce(i[t],e[t]);return Ce(i.length,e.length)}function co(i,e,t){return i.length===e.length&&i.every((s,o)=>t(s,e[o]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PE=-62135596800,xE=1e6;class Ct{static now(){return Ct.fromMillis(Date.now())}static fromDate(e){return Ct.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor((e-1e3*t)*xE);return new Ct(t,s)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new ce(J.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new ce(J.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<PE)throw new ce(J.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ce(J.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/xE}_compareTo(e){return this.seconds===e.seconds?Ce(this.nanoseconds,e.nanoseconds):Ce(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-PE;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se{static fromTimestamp(e){return new Se(e)}static min(){return new Se(new Ct(0,0))}static max(){return new Se(new Ct(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kE="__name__";class mi{constructor(e,t,s){t===void 0?t=0:t>e.length&&ve(637,{offset:t,range:e.length}),s===void 0?s=e.length-t:s>e.length-t&&ve(1746,{length:s,range:e.length-t}),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return mi.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof mi?e.forEach(s=>{t.push(s)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let o=0;o<s;o++){const u=mi.compareSegments(e.get(o),t.get(o));if(u!==0)return u}return Ce(e.length,t.length)}static compareSegments(e,t){const s=mi.isNumericId(e),o=mi.isNumericId(t);return s&&!o?-1:!s&&o?1:s&&o?mi.extractNumericId(e).compare(mi.extractNumericId(t)):Fm(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Gr.fromString(e.substring(4,e.length-2))}}class et extends mi{construct(e,t,s){return new et(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new ce(J.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter(o=>o.length>0))}return new et(t)}static emptyPath(){return new et([])}}const YO=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ft extends mi{construct(e,t,s){return new Ft(e,t,s)}static isValidIdentifier(e){return YO.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ft.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===kE}static keyField(){return new Ft([kE])}static fromServerFormat(e){const t=[];let s="",o=0;const u=()=>{if(s.length===0)throw new ce(J.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let h=!1;for(;o<e.length;){const m=e[o];if(m==="\\"){if(o+1===e.length)throw new ce(J.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const p=e[o+1];if(p!=="\\"&&p!=="."&&p!=="`")throw new ce(J.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=p,o+=2}else m==="`"?(h=!h,o++):m!=="."||h?(s+=m,o++):(u(),o++)}if(u(),h)throw new ce(J.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ft(t)}static emptyPath(){return new Ft([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class me{constructor(e){this.path=e}static fromPath(e){return new me(et.fromString(e))}static fromName(e){return new me(et.fromString(e).popFirst(5))}static empty(){return new me(et.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&et.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return et.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new me(new et(e.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tu=-1;function QO(i,e){const t=i.toTimestamp().seconds,s=i.toTimestamp().nanoseconds+1,o=Se.fromTimestamp(s===1e9?new Ct(t+1,0):new Ct(t,s));return new Yr(o,me.empty(),e)}function XO(i){return new Yr(i.readTime,i.key,tu)}class Yr{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new Yr(Se.min(),me.empty(),tu)}static max(){return new Yr(Se.max(),me.empty(),tu)}}function WO(i,e){let t=i.readTime.compareTo(e.readTime);return t!==0?t:(t=me.comparator(i.documentKey,e.documentKey),t!==0?t:Ce(i.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZO="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class JO{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Eo(i){if(i.code!==J.FAILED_PRECONDITION||i.message!==ZO)throw i;le("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&ve(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new Z((s,o)=>{this.nextCallback=u=>{this.wrapSuccess(e,u).next(s,o)},this.catchCallback=u=>{this.wrapFailure(t,u).next(s,o)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof Z?t:Z.resolve(t)}catch(t){return Z.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):Z.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):Z.reject(t)}static resolve(e){return new Z((t,s)=>{t(e)})}static reject(e){return new Z((t,s)=>{s(e)})}static waitFor(e){return new Z((t,s)=>{let o=0,u=0,h=!1;e.forEach(m=>{++o,m.next(()=>{++u,h&&u===o&&t()},p=>s(p))}),h=!0,u===o&&t()})}static or(e){let t=Z.resolve(!1);for(const s of e)t=t.next(o=>o?Z.resolve(o):s());return t}static forEach(e,t){const s=[];return e.forEach((o,u)=>{s.push(t.call(this,o,u))}),this.waitFor(s)}static mapArray(e,t){return new Z((s,o)=>{const u=e.length,h=new Array(u);let m=0;for(let p=0;p<u;p++){const g=p;t(e[g]).next(E=>{h[g]=E,++m,m===u&&s(h)},E=>o(E))}})}static doWhile(e,t){return new Z((s,o)=>{const u=()=>{e()===!0?t().next(()=>{u()},o):s()};u()})}}function eN(i){const e=i.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function To(i){return i.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kh{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this.ue(s),this.ce=s=>t.writeSequenceNumber(s))}ue(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ce&&this.ce(e),e}}Kh.le=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Np=-1;function $h(i){return i==null}function Sh(i){return i===0&&1/i==-1/0}function tN(i){return typeof i=="number"&&Number.isInteger(i)&&!Sh(i)&&i<=Number.MAX_SAFE_INTEGER&&i>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bA="";function nN(i){let e="";for(let t=0;t<i.length;t++)e.length>0&&(e=LE(e)),e=iN(i.get(t),e);return LE(e)}function iN(i,e){let t=e;const s=i.length;for(let o=0;o<s;o++){const u=i.charAt(o);switch(u){case"\0":t+="";break;case bA:t+="";break;default:t+=u}}return t}function LE(i){return i+bA+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UE(i){let e=0;for(const t in i)Object.prototype.hasOwnProperty.call(i,t)&&e++;return e}function ia(i,e){for(const t in i)Object.prototype.hasOwnProperty.call(i,t)&&e(t,i[t])}function RA(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(e,t){this.comparator=e,this.root=t||Ht.EMPTY}insert(e,t){return new rt(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Ht.BLACK,null,null))}remove(e){return new rt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ht.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const o=this.comparator(e,s.key);if(o===0)return t+s.left.size;o<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,s)=>(e(t,s),!1))}toString(){const e=[];return this.inorderTraversal((t,s)=>(e.push(`${t}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Qc(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Qc(this.root,e,this.comparator,!1)}getReverseIterator(){return new Qc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Qc(this.root,e,this.comparator,!0)}}class Qc{constructor(e,t,s,o){this.isReverse=o,this.nodeStack=[];let u=1;for(;!e.isEmpty();)if(u=t?s(e.key,t):1,t&&o&&(u*=-1),u<0)e=this.isReverse?e.left:e.right;else{if(u===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ht{constructor(e,t,s,o,u){this.key=e,this.value=t,this.color=s??Ht.RED,this.left=o??Ht.EMPTY,this.right=u??Ht.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,o,u){return new Ht(e??this.key,t??this.value,s??this.color,o??this.left,u??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let o=this;const u=s(e,o.key);return o=u<0?o.copy(null,null,null,o.left.insert(e,t,s),null):u===0?o.copy(null,t,null,null,null):o.copy(null,null,null,null,o.right.insert(e,t,s)),o.fixUp()}removeMin(){if(this.left.isEmpty())return Ht.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,o=this;if(t(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,t),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),t(e,o.key)===0){if(o.right.isEmpty())return Ht.EMPTY;s=o.right.min(),o=o.copy(s.key,s.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,t))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ht.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ht.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ve(43730,{key:this.key,value:this.value});if(this.right.isRed())throw ve(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw ve(27949);return e+(this.isRed()?0:1)}}Ht.EMPTY=null,Ht.RED=!0,Ht.BLACK=!1;Ht.EMPTY=new class{constructor(){this.size=0}get key(){throw ve(57766)}get value(){throw ve(16141)}get color(){throw ve(16727)}get left(){throw ve(29726)}get right(){throw ve(36894)}copy(e,t,s,o,u){return this}insert(e,t,s){return new Ht(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(e){this.comparator=e,this.data=new rt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,s)=>(e(t),!1))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const o=s.getNext();if(this.comparator(o.key,e[1])>=0)return;t(o.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new zE(this.data.getIterator())}getIteratorFrom(e){return new zE(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(s=>{t=t.add(s)}),t}isEqual(e){if(!(e instanceof Dt)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const o=t.getNext().key,u=s.getNext().key;if(this.comparator(o,u)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Dt(this.comparator);return t.data=e,t}}class zE{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n{constructor(e){this.fields=e,e.sort(Ft.comparator)}static empty(){return new $n([])}unionWith(e){let t=new Dt(Ft.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new $n(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return co(this.fields,e.fields,(t,s)=>t.isEqual(s))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IA extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(o){try{return atob(o)}catch(u){throw typeof DOMException<"u"&&u instanceof DOMException?new IA("Invalid base64 string: "+u):u}}(e);return new Gt(t)}static fromUint8Array(e){const t=function(o){let u="";for(let h=0;h<o.length;++h)u+=String.fromCharCode(o[h]);return u}(e);return new Gt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const s=new Uint8Array(t.length);for(let o=0;o<t.length;o++)s[o]=t.charCodeAt(o);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ce(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Gt.EMPTY_BYTE_STRING=new Gt("");const rN=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Qr(i){if(He(!!i,39018),typeof i=="string"){let e=0;const t=rN.exec(i);if(He(!!t,46558,{timestamp:i}),t[1]){let o=t[1];o=(o+"000000000").substr(0,9),e=Number(o)}const s=new Date(i);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:mt(i.seconds),nanos:mt(i.nanos)}}function mt(i){return typeof i=="number"?i:typeof i=="string"?Number(i):0}function Xr(i){return typeof i=="string"?Gt.fromBase64String(i):Gt.fromUint8Array(i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CA="server_timestamp",DA="__type__",OA="__previous_value__",NA="__local_write_time__";function Mp(i){var e,t;return((t=(((e=i==null?void 0:i.mapValue)===null||e===void 0?void 0:e.fields)||{})[DA])===null||t===void 0?void 0:t.stringValue)===CA}function Yh(i){const e=i.mapValue.fields[OA];return Mp(e)?Yh(e):e}function nu(i){const e=Qr(i.mapValue.fields[NA].timestampValue);return new Ct(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sN{constructor(e,t,s,o,u,h,m,p,g,E){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=o,this.ssl=u,this.forceLongPolling=h,this.autoDetectLongPolling=m,this.longPollingOptions=p,this.useFetchStreams=g,this.isUsingEmulator=E}}const bh="(default)";class iu{constructor(e,t){this.projectId=e,this.database=t||bh}static empty(){return new iu("","")}get isDefaultDatabase(){return this.database===bh}isEqual(e){return e instanceof iu&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MA="__type__",aN="__max__",Xc={mapValue:{}},VA="__vector__",Rh="value";function Wr(i){return"nullValue"in i?0:"booleanValue"in i?1:"integerValue"in i||"doubleValue"in i?2:"timestampValue"in i?3:"stringValue"in i?5:"bytesValue"in i?6:"referenceValue"in i?7:"geoPointValue"in i?8:"arrayValue"in i?9:"mapValue"in i?Mp(i)?4:lN(i)?9007199254740991:oN(i)?10:11:ve(28295,{value:i})}function Ai(i,e){if(i===e)return!0;const t=Wr(i);if(t!==Wr(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return i.booleanValue===e.booleanValue;case 4:return nu(i).isEqual(nu(e));case 3:return function(o,u){if(typeof o.timestampValue=="string"&&typeof u.timestampValue=="string"&&o.timestampValue.length===u.timestampValue.length)return o.timestampValue===u.timestampValue;const h=Qr(o.timestampValue),m=Qr(u.timestampValue);return h.seconds===m.seconds&&h.nanos===m.nanos}(i,e);case 5:return i.stringValue===e.stringValue;case 6:return function(o,u){return Xr(o.bytesValue).isEqual(Xr(u.bytesValue))}(i,e);case 7:return i.referenceValue===e.referenceValue;case 8:return function(o,u){return mt(o.geoPointValue.latitude)===mt(u.geoPointValue.latitude)&&mt(o.geoPointValue.longitude)===mt(u.geoPointValue.longitude)}(i,e);case 2:return function(o,u){if("integerValue"in o&&"integerValue"in u)return mt(o.integerValue)===mt(u.integerValue);if("doubleValue"in o&&"doubleValue"in u){const h=mt(o.doubleValue),m=mt(u.doubleValue);return h===m?Sh(h)===Sh(m):isNaN(h)&&isNaN(m)}return!1}(i,e);case 9:return co(i.arrayValue.values||[],e.arrayValue.values||[],Ai);case 10:case 11:return function(o,u){const h=o.mapValue.fields||{},m=u.mapValue.fields||{};if(UE(h)!==UE(m))return!1;for(const p in h)if(h.hasOwnProperty(p)&&(m[p]===void 0||!Ai(h[p],m[p])))return!1;return!0}(i,e);default:return ve(52216,{left:i})}}function ru(i,e){return(i.values||[]).find(t=>Ai(t,e))!==void 0}function ho(i,e){if(i===e)return 0;const t=Wr(i),s=Wr(e);if(t!==s)return Ce(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return Ce(i.booleanValue,e.booleanValue);case 2:return function(u,h){const m=mt(u.integerValue||u.doubleValue),p=mt(h.integerValue||h.doubleValue);return m<p?-1:m>p?1:m===p?0:isNaN(m)?isNaN(p)?0:-1:1}(i,e);case 3:return BE(i.timestampValue,e.timestampValue);case 4:return BE(nu(i),nu(e));case 5:return Fm(i.stringValue,e.stringValue);case 6:return function(u,h){const m=Xr(u),p=Xr(h);return m.compareTo(p)}(i.bytesValue,e.bytesValue);case 7:return function(u,h){const m=u.split("/"),p=h.split("/");for(let g=0;g<m.length&&g<p.length;g++){const E=Ce(m[g],p[g]);if(E!==0)return E}return Ce(m.length,p.length)}(i.referenceValue,e.referenceValue);case 8:return function(u,h){const m=Ce(mt(u.latitude),mt(h.latitude));return m!==0?m:Ce(mt(u.longitude),mt(h.longitude))}(i.geoPointValue,e.geoPointValue);case 9:return jE(i.arrayValue,e.arrayValue);case 10:return function(u,h){var m,p,g,E;const S=u.fields||{},w=h.fields||{},D=(m=S[Rh])===null||m===void 0?void 0:m.arrayValue,P=(p=w[Rh])===null||p===void 0?void 0:p.arrayValue,G=Ce(((g=D==null?void 0:D.values)===null||g===void 0?void 0:g.length)||0,((E=P==null?void 0:P.values)===null||E===void 0?void 0:E.length)||0);return G!==0?G:jE(D,P)}(i.mapValue,e.mapValue);case 11:return function(u,h){if(u===Xc.mapValue&&h===Xc.mapValue)return 0;if(u===Xc.mapValue)return 1;if(h===Xc.mapValue)return-1;const m=u.fields||{},p=Object.keys(m),g=h.fields||{},E=Object.keys(g);p.sort(),E.sort();for(let S=0;S<p.length&&S<E.length;++S){const w=Fm(p[S],E[S]);if(w!==0)return w;const D=ho(m[p[S]],g[E[S]]);if(D!==0)return D}return Ce(p.length,E.length)}(i.mapValue,e.mapValue);default:throw ve(23264,{Pe:t})}}function BE(i,e){if(typeof i=="string"&&typeof e=="string"&&i.length===e.length)return Ce(i,e);const t=Qr(i),s=Qr(e),o=Ce(t.seconds,s.seconds);return o!==0?o:Ce(t.nanos,s.nanos)}function jE(i,e){const t=i.values||[],s=e.values||[];for(let o=0;o<t.length&&o<s.length;++o){const u=ho(t[o],s[o]);if(u)return u}return Ce(t.length,s.length)}function fo(i){return Gm(i)}function Gm(i){return"nullValue"in i?"null":"booleanValue"in i?""+i.booleanValue:"integerValue"in i?""+i.integerValue:"doubleValue"in i?""+i.doubleValue:"timestampValue"in i?function(t){const s=Qr(t);return`time(${s.seconds},${s.nanos})`}(i.timestampValue):"stringValue"in i?i.stringValue:"bytesValue"in i?function(t){return Xr(t).toBase64()}(i.bytesValue):"referenceValue"in i?function(t){return me.fromName(t).toString()}(i.referenceValue):"geoPointValue"in i?function(t){return`geo(${t.latitude},${t.longitude})`}(i.geoPointValue):"arrayValue"in i?function(t){let s="[",o=!0;for(const u of t.values||[])o?o=!1:s+=",",s+=Gm(u);return s+"]"}(i.arrayValue):"mapValue"in i?function(t){const s=Object.keys(t.fields||{}).sort();let o="{",u=!0;for(const h of s)u?u=!1:o+=",",o+=`${h}:${Gm(t.fields[h])}`;return o+"}"}(i.mapValue):ve(61005,{value:i})}function lh(i){switch(Wr(i)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Yh(i);return e?16+lh(e):16;case 5:return 2*i.stringValue.length;case 6:return Xr(i.bytesValue).approximateByteSize();case 7:return i.referenceValue.length;case 9:return function(s){return(s.values||[]).reduce((o,u)=>o+lh(u),0)}(i.arrayValue);case 10:case 11:return function(s){let o=0;return ia(s.fields,(u,h)=>{o+=u.length+lh(h)}),o}(i.mapValue);default:throw ve(13486,{value:i})}}function qE(i,e){return{referenceValue:`projects/${i.projectId}/databases/${i.database}/documents/${e.path.canonicalString()}`}}function Km(i){return!!i&&"integerValue"in i}function Vp(i){return!!i&&"arrayValue"in i}function HE(i){return!!i&&"nullValue"in i}function FE(i){return!!i&&"doubleValue"in i&&isNaN(Number(i.doubleValue))}function uh(i){return!!i&&"mapValue"in i}function oN(i){var e,t;return((t=(((e=i==null?void 0:i.mapValue)===null||e===void 0?void 0:e.fields)||{})[MA])===null||t===void 0?void 0:t.stringValue)===VA}function Kl(i){if(i.geoPointValue)return{geoPointValue:Object.assign({},i.geoPointValue)};if(i.timestampValue&&typeof i.timestampValue=="object")return{timestampValue:Object.assign({},i.timestampValue)};if(i.mapValue){const e={mapValue:{fields:{}}};return ia(i.mapValue.fields,(t,s)=>e.mapValue.fields[t]=Kl(s)),e}if(i.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(i.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Kl(i.arrayValue.values[t]);return e}return Object.assign({},i)}function lN(i){return(((i.mapValue||{}).fields||{}).__type__||{}).stringValue===aN}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln{constructor(e){this.value=e}static empty(){return new Ln({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!uh(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Kl(t)}setAll(e){let t=Ft.emptyPath(),s={},o=[];e.forEach((h,m)=>{if(!t.isImmediateParentOf(m)){const p=this.getFieldsMap(t);this.applyChanges(p,s,o),s={},o=[],t=m.popLast()}h?s[m.lastSegment()]=Kl(h):o.push(m.lastSegment())});const u=this.getFieldsMap(t);this.applyChanges(u,s,o)}delete(e){const t=this.field(e.popLast());uh(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Ai(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let o=t.mapValue.fields[e.get(s)];uh(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=o),t=o}return t.mapValue.fields}applyChanges(e,t,s){ia(t,(o,u)=>e[o]=u);for(const o of s)delete e[o]}clone(){return new Ln(Kl(this.value))}}function PA(i){const e=[];return ia(i.fields,(t,s)=>{const o=new Ft([t]);if(uh(s)){const u=PA(s.mapValue).fields;if(u.length===0)e.push(o);else for(const h of u)e.push(o.child(h))}else e.push(o)}),new $n(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt{constructor(e,t,s,o,u,h,m){this.key=e,this.documentType=t,this.version=s,this.readTime=o,this.createTime=u,this.data=h,this.documentState=m}static newInvalidDocument(e){return new Wt(e,0,Se.min(),Se.min(),Se.min(),Ln.empty(),0)}static newFoundDocument(e,t,s,o){return new Wt(e,1,t,Se.min(),s,o,0)}static newNoDocument(e,t){return new Wt(e,2,t,Se.min(),Se.min(),Ln.empty(),0)}static newUnknownDocument(e,t){return new Wt(e,3,t,Se.min(),Se.min(),Ln.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Se.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ln.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ln.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Se.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Wt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Wt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ih{constructor(e,t){this.position=e,this.inclusive=t}}function GE(i,e,t){let s=0;for(let o=0;o<i.position.length;o++){const u=e[o],h=i.position[o];if(u.field.isKeyField()?s=me.comparator(me.fromName(h.referenceValue),t.key):s=ho(h,t.data.field(u.field)),u.dir==="desc"&&(s*=-1),s!==0)break}return s}function KE(i,e){if(i===null)return e===null;if(e===null||i.inclusive!==e.inclusive||i.position.length!==e.position.length)return!1;for(let t=0;t<i.position.length;t++)if(!Ai(i.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ch{constructor(e,t="asc"){this.field=e,this.dir=t}}function uN(i,e){return i.dir===e.dir&&i.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xA{}class Et extends xA{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new hN(e,t,s):t==="array-contains"?new mN(e,s):t==="in"?new pN(e,s):t==="not-in"?new gN(e,s):t==="array-contains-any"?new yN(e,s):new Et(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new fN(e,s):new dN(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(ho(t,this.value)):t!==null&&Wr(this.value)===Wr(t)&&this.matchesComparison(ho(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ve(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Xn extends xA{constructor(e,t){super(),this.filters=e,this.op=t,this.Te=null}static create(e,t){return new Xn(e,t)}matches(e){return kA(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.Te!==null||(this.Te=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.Te}getFilters(){return Object.assign([],this.filters)}}function kA(i){return i.op==="and"}function LA(i){return cN(i)&&kA(i)}function cN(i){for(const e of i.filters)if(e instanceof Xn)return!1;return!0}function $m(i){if(i instanceof Et)return i.field.canonicalString()+i.op.toString()+fo(i.value);if(LA(i))return i.filters.map(e=>$m(e)).join(",");{const e=i.filters.map(t=>$m(t)).join(",");return`${i.op}(${e})`}}function UA(i,e){return i instanceof Et?function(s,o){return o instanceof Et&&s.op===o.op&&s.field.isEqual(o.field)&&Ai(s.value,o.value)}(i,e):i instanceof Xn?function(s,o){return o instanceof Xn&&s.op===o.op&&s.filters.length===o.filters.length?s.filters.reduce((u,h,m)=>u&&UA(h,o.filters[m]),!0):!1}(i,e):void ve(19439)}function zA(i){return i instanceof Et?function(t){return`${t.field.canonicalString()} ${t.op} ${fo(t.value)}`}(i):i instanceof Xn?function(t){return t.op.toString()+" {"+t.getFilters().map(zA).join(" ,")+"}"}(i):"Filter"}class hN extends Et{constructor(e,t,s){super(e,t,s),this.key=me.fromName(s.referenceValue)}matches(e){const t=me.comparator(e.key,this.key);return this.matchesComparison(t)}}class fN extends Et{constructor(e,t){super(e,"in",t),this.keys=BA("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class dN extends Et{constructor(e,t){super(e,"not-in",t),this.keys=BA("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function BA(i,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(s=>me.fromName(s.referenceValue))}class mN extends Et{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Vp(t)&&ru(t.arrayValue,this.value)}}class pN extends Et{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&ru(this.value.arrayValue,t)}}class gN extends Et{constructor(e,t){super(e,"not-in",t)}matches(e){if(ru(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!ru(this.value.arrayValue,t)}}class yN extends Et{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Vp(t)||!t.arrayValue.values)&&t.arrayValue.values.some(s=>ru(this.value.arrayValue,s))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _N{constructor(e,t=null,s=[],o=[],u=null,h=null,m=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=o,this.limit=u,this.startAt=h,this.endAt=m,this.Ie=null}}function $E(i,e=null,t=[],s=[],o=null,u=null,h=null){return new _N(i,e,t,s,o,u,h)}function Pp(i){const e=be(i);if(e.Ie===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(s=>$m(s)).join(","),t+="|ob:",t+=e.orderBy.map(s=>function(u){return u.field.canonicalString()+u.dir}(s)).join(","),$h(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(s=>fo(s)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(s=>fo(s)).join(",")),e.Ie=t}return e.Ie}function xp(i,e){if(i.limit!==e.limit||i.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<i.orderBy.length;t++)if(!uN(i.orderBy[t],e.orderBy[t]))return!1;if(i.filters.length!==e.filters.length)return!1;for(let t=0;t<i.filters.length;t++)if(!UA(i.filters[t],e.filters[t]))return!1;return i.collectionGroup===e.collectionGroup&&!!i.path.isEqual(e.path)&&!!KE(i.startAt,e.startAt)&&KE(i.endAt,e.endAt)}function Ym(i){return me.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gu{constructor(e,t=null,s=[],o=[],u=null,h="F",m=null,p=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=o,this.limit=u,this.limitType=h,this.startAt=m,this.endAt=p,this.Ee=null,this.de=null,this.Ae=null,this.startAt,this.endAt}}function vN(i,e,t,s,o,u,h,m){return new gu(i,e,t,s,o,u,h,m)}function kp(i){return new gu(i)}function YE(i){return i.filters.length===0&&i.limit===null&&i.startAt==null&&i.endAt==null&&(i.explicitOrderBy.length===0||i.explicitOrderBy.length===1&&i.explicitOrderBy[0].field.isKeyField())}function jA(i){return i.collectionGroup!==null}function $l(i){const e=be(i);if(e.Ee===null){e.Ee=[];const t=new Set;for(const u of e.explicitOrderBy)e.Ee.push(u),t.add(u.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(h){let m=new Dt(Ft.comparator);return h.filters.forEach(p=>{p.getFlattenedFilters().forEach(g=>{g.isInequality()&&(m=m.add(g.field))})}),m})(e).forEach(u=>{t.has(u.canonicalString())||u.isKeyField()||e.Ee.push(new Ch(u,s))}),t.has(Ft.keyField().canonicalString())||e.Ee.push(new Ch(Ft.keyField(),s))}return e.Ee}function _i(i){const e=be(i);return e.de||(e.de=EN(e,$l(i))),e.de}function EN(i,e){if(i.limitType==="F")return $E(i.path,i.collectionGroup,e,i.filters,i.limit,i.startAt,i.endAt);{e=e.map(o=>{const u=o.dir==="desc"?"asc":"desc";return new Ch(o.field,u)});const t=i.endAt?new Ih(i.endAt.position,i.endAt.inclusive):null,s=i.startAt?new Ih(i.startAt.position,i.startAt.inclusive):null;return $E(i.path,i.collectionGroup,e,i.filters,i.limit,t,s)}}function Qm(i,e){const t=i.filters.concat([e]);return new gu(i.path,i.collectionGroup,i.explicitOrderBy.slice(),t,i.limit,i.limitType,i.startAt,i.endAt)}function Xm(i,e,t){return new gu(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),e,t,i.startAt,i.endAt)}function Qh(i,e){return xp(_i(i),_i(e))&&i.limitType===e.limitType}function qA(i){return`${Pp(_i(i))}|lt:${i.limitType}`}function eo(i){return`Query(target=${function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map(o=>zA(o)).join(", ")}]`),$h(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map(o=>function(h){return`${h.field.canonicalString()} (${h.dir})`}(o)).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map(o=>fo(o)).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map(o=>fo(o)).join(",")),`Target(${s})`}(_i(i))}; limitType=${i.limitType})`}function Xh(i,e){return e.isFoundDocument()&&function(s,o){const u=o.key.path;return s.collectionGroup!==null?o.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(u):me.isDocumentKey(s.path)?s.path.isEqual(u):s.path.isImmediateParentOf(u)}(i,e)&&function(s,o){for(const u of $l(s))if(!u.field.isKeyField()&&o.data.field(u.field)===null)return!1;return!0}(i,e)&&function(s,o){for(const u of s.filters)if(!u.matches(o))return!1;return!0}(i,e)&&function(s,o){return!(s.startAt&&!function(h,m,p){const g=GE(h,m,p);return h.inclusive?g<=0:g<0}(s.startAt,$l(s),o)||s.endAt&&!function(h,m,p){const g=GE(h,m,p);return h.inclusive?g>=0:g>0}(s.endAt,$l(s),o))}(i,e)}function TN(i){return i.collectionGroup||(i.path.length%2==1?i.path.lastSegment():i.path.get(i.path.length-2))}function HA(i){return(e,t)=>{let s=!1;for(const o of $l(i)){const u=AN(o,e,t);if(u!==0)return u;s=s||o.field.isKeyField()}return 0}}function AN(i,e,t){const s=i.field.isKeyField()?me.comparator(e.key,t.key):function(u,h,m){const p=h.data.field(u),g=m.data.field(u);return p!==null&&g!==null?ho(p,g):ve(42886)}(i.field,e,t);switch(i.dir){case"asc":return s;case"desc":return-1*s;default:return ve(19790,{direction:i.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ra{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[o,u]of s)if(this.equalsFn(o,e))return u}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),o=this.inner[s];if(o===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let u=0;u<o.length;u++)if(this.equalsFn(o[u][0],e))return void(o[u]=[e,t]);o.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],e))return s.length===1?delete this.inner[t]:s.splice(o,1),this.innerSize--,!0;return!1}forEach(e){ia(this.inner,(t,s)=>{for(const[o,u]of s)e(o,u)})}isEmpty(){return RA(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wN=new rt(me.comparator);function sr(){return wN}const FA=new rt(me.comparator);function Bl(...i){let e=FA;for(const t of i)e=e.insert(t.key,t);return e}function GA(i){let e=FA;return i.forEach((t,s)=>e=e.insert(t,s.overlayedDocument)),e}function Hs(){return Yl()}function KA(){return Yl()}function Yl(){return new ra(i=>i.toString(),(i,e)=>i.isEqual(e))}const SN=new rt(me.comparator),bN=new Dt(me.comparator);function Pe(...i){let e=bN;for(const t of i)e=e.add(t);return e}const RN=new Dt(Ce);function IN(){return RN}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lp(i,e){if(i.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Sh(e)?"-0":e}}function $A(i){return{integerValue:""+i}}function CN(i,e){return tN(e)?$A(e):Lp(i,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wh{constructor(){this._=void 0}}function DN(i,e,t){return i instanceof su?function(o,u){const h={fields:{[DA]:{stringValue:CA},[NA]:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return u&&Mp(u)&&(u=Yh(u)),u&&(h.fields[OA]=u),{mapValue:h}}(t,e):i instanceof au?QA(i,e):i instanceof ou?XA(i,e):function(o,u){const h=YA(o,u),m=QE(h)+QE(o.Re);return Km(h)&&Km(o.Re)?$A(m):Lp(o.serializer,m)}(i,e)}function ON(i,e,t){return i instanceof au?QA(i,e):i instanceof ou?XA(i,e):t}function YA(i,e){return i instanceof Dh?function(s){return Km(s)||function(u){return!!u&&"doubleValue"in u}(s)}(e)?e:{integerValue:0}:null}class su extends Wh{}class au extends Wh{constructor(e){super(),this.elements=e}}function QA(i,e){const t=WA(e);for(const s of i.elements)t.some(o=>Ai(o,s))||t.push(s);return{arrayValue:{values:t}}}class ou extends Wh{constructor(e){super(),this.elements=e}}function XA(i,e){let t=WA(e);for(const s of i.elements)t=t.filter(o=>!Ai(o,s));return{arrayValue:{values:t}}}class Dh extends Wh{constructor(e,t){super(),this.serializer=e,this.Re=t}}function QE(i){return mt(i.integerValue||i.doubleValue)}function WA(i){return Vp(i)&&i.arrayValue.values?i.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NN{constructor(e,t){this.field=e,this.transform=t}}function MN(i,e){return i.field.isEqual(e.field)&&function(s,o){return s instanceof au&&o instanceof au||s instanceof ou&&o instanceof ou?co(s.elements,o.elements,Ai):s instanceof Dh&&o instanceof Dh?Ai(s.Re,o.Re):s instanceof su&&o instanceof su}(i.transform,e.transform)}class VN{constructor(e,t){this.version=e,this.transformResults=t}}class vi{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new vi}static exists(e){return new vi(void 0,e)}static updateTime(e){return new vi(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ch(i,e){return i.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(i.updateTime):i.exists===void 0||i.exists===e.isFoundDocument()}class Zh{}function ZA(i,e){if(!i.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return i.isNoDocument()?new ew(i.key,vi.none()):new yu(i.key,i.data,vi.none());{const t=i.data,s=Ln.empty();let o=new Dt(Ft.comparator);for(let u of e.fields)if(!o.has(u)){let h=t.field(u);h===null&&u.length>1&&(u=u.popLast(),h=t.field(u)),h===null?s.delete(u):s.set(u,h),o=o.add(u)}return new sa(i.key,s,new $n(o.toArray()),vi.none())}}function PN(i,e,t){i instanceof yu?function(o,u,h){const m=o.value.clone(),p=WE(o.fieldTransforms,u,h.transformResults);m.setAll(p),u.convertToFoundDocument(h.version,m).setHasCommittedMutations()}(i,e,t):i instanceof sa?function(o,u,h){if(!ch(o.precondition,u))return void u.convertToUnknownDocument(h.version);const m=WE(o.fieldTransforms,u,h.transformResults),p=u.data;p.setAll(JA(o)),p.setAll(m),u.convertToFoundDocument(h.version,p).setHasCommittedMutations()}(i,e,t):function(o,u,h){u.convertToNoDocument(h.version).setHasCommittedMutations()}(0,e,t)}function Ql(i,e,t,s){return i instanceof yu?function(u,h,m,p){if(!ch(u.precondition,h))return m;const g=u.value.clone(),E=ZE(u.fieldTransforms,p,h);return g.setAll(E),h.convertToFoundDocument(h.version,g).setHasLocalMutations(),null}(i,e,t,s):i instanceof sa?function(u,h,m,p){if(!ch(u.precondition,h))return m;const g=ZE(u.fieldTransforms,p,h),E=h.data;return E.setAll(JA(u)),E.setAll(g),h.convertToFoundDocument(h.version,E).setHasLocalMutations(),m===null?null:m.unionWith(u.fieldMask.fields).unionWith(u.fieldTransforms.map(S=>S.field))}(i,e,t,s):function(u,h,m){return ch(u.precondition,h)?(h.convertToNoDocument(h.version).setHasLocalMutations(),null):m}(i,e,t)}function xN(i,e){let t=null;for(const s of i.fieldTransforms){const o=e.data.field(s.field),u=YA(s.transform,o||null);u!=null&&(t===null&&(t=Ln.empty()),t.set(s.field,u))}return t||null}function XE(i,e){return i.type===e.type&&!!i.key.isEqual(e.key)&&!!i.precondition.isEqual(e.precondition)&&!!function(s,o){return s===void 0&&o===void 0||!(!s||!o)&&co(s,o,(u,h)=>MN(u,h))}(i.fieldTransforms,e.fieldTransforms)&&(i.type===0?i.value.isEqual(e.value):i.type!==1||i.data.isEqual(e.data)&&i.fieldMask.isEqual(e.fieldMask))}class yu extends Zh{constructor(e,t,s,o=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class sa extends Zh{constructor(e,t,s,o,u=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=o,this.fieldTransforms=u,this.type=1}getFieldMask(){return this.fieldMask}}function JA(i){const e=new Map;return i.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const s=i.data.field(t);e.set(t,s)}}),e}function WE(i,e,t){const s=new Map;He(i.length===t.length,32656,{Ve:t.length,me:i.length});for(let o=0;o<t.length;o++){const u=i[o],h=u.transform,m=e.data.field(u.field);s.set(u.field,ON(h,m,t[o]))}return s}function ZE(i,e,t){const s=new Map;for(const o of i){const u=o.transform,h=t.data.field(o.field);s.set(o.field,DN(u,h,e))}return s}class ew extends Zh{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class kN extends Zh{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LN{constructor(e,t,s,o){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=o}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let o=0;o<this.mutations.length;o++){const u=this.mutations[o];u.key.isEqual(e.key)&&PN(u,e,s[o])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=Ql(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=Ql(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=KA();return this.mutations.forEach(o=>{const u=e.get(o.key),h=u.overlayedDocument;let m=this.applyToLocalView(h,u.mutatedFields);m=t.has(o.key)?null:m;const p=ZA(h,m);p!==null&&s.set(o.key,p),h.isValidDocument()||h.convertToNoDocument(Se.min())}),s}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),Pe())}isEqual(e){return this.batchId===e.batchId&&co(this.mutations,e.mutations,(t,s)=>XE(t,s))&&co(this.baseMutations,e.baseMutations,(t,s)=>XE(t,s))}}class Up{constructor(e,t,s,o){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=o}static from(e,t,s){He(e.mutations.length===s.length,58842,{fe:e.mutations.length,ge:s.length});let o=function(){return SN}();const u=e.mutations;for(let h=0;h<u.length;h++)o=o.insert(u[h].key,s[h].version);return new Up(e,t,s,o)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UN{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zN{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var vt,Ue;function BN(i){switch(i){case J.OK:return ve(64938);case J.CANCELLED:case J.UNKNOWN:case J.DEADLINE_EXCEEDED:case J.RESOURCE_EXHAUSTED:case J.INTERNAL:case J.UNAVAILABLE:case J.UNAUTHENTICATED:return!1;case J.INVALID_ARGUMENT:case J.NOT_FOUND:case J.ALREADY_EXISTS:case J.PERMISSION_DENIED:case J.FAILED_PRECONDITION:case J.ABORTED:case J.OUT_OF_RANGE:case J.UNIMPLEMENTED:case J.DATA_LOSS:return!0;default:return ve(15467,{code:i})}}function tw(i){if(i===void 0)return rr("GRPC error has no .code"),J.UNKNOWN;switch(i){case vt.OK:return J.OK;case vt.CANCELLED:return J.CANCELLED;case vt.UNKNOWN:return J.UNKNOWN;case vt.DEADLINE_EXCEEDED:return J.DEADLINE_EXCEEDED;case vt.RESOURCE_EXHAUSTED:return J.RESOURCE_EXHAUSTED;case vt.INTERNAL:return J.INTERNAL;case vt.UNAVAILABLE:return J.UNAVAILABLE;case vt.UNAUTHENTICATED:return J.UNAUTHENTICATED;case vt.INVALID_ARGUMENT:return J.INVALID_ARGUMENT;case vt.NOT_FOUND:return J.NOT_FOUND;case vt.ALREADY_EXISTS:return J.ALREADY_EXISTS;case vt.PERMISSION_DENIED:return J.PERMISSION_DENIED;case vt.FAILED_PRECONDITION:return J.FAILED_PRECONDITION;case vt.ABORTED:return J.ABORTED;case vt.OUT_OF_RANGE:return J.OUT_OF_RANGE;case vt.UNIMPLEMENTED:return J.UNIMPLEMENTED;case vt.DATA_LOSS:return J.DATA_LOSS;default:return ve(39323,{code:i})}}(Ue=vt||(vt={}))[Ue.OK=0]="OK",Ue[Ue.CANCELLED=1]="CANCELLED",Ue[Ue.UNKNOWN=2]="UNKNOWN",Ue[Ue.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ue[Ue.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ue[Ue.NOT_FOUND=5]="NOT_FOUND",Ue[Ue.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ue[Ue.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ue[Ue.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ue[Ue.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ue[Ue.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ue[Ue.ABORTED=10]="ABORTED",Ue[Ue.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ue[Ue.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ue[Ue.INTERNAL=13]="INTERNAL",Ue[Ue.UNAVAILABLE=14]="UNAVAILABLE",Ue[Ue.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jN=new Gr([4294967295,4294967295],0);function JE(i){const e=wA().encode(i),t=new pA;return t.update(e),new Uint8Array(t.digest())}function eT(i){const e=new DataView(i.buffer),t=e.getUint32(0,!0),s=e.getUint32(4,!0),o=e.getUint32(8,!0),u=e.getUint32(12,!0);return[new Gr([t,s],0),new Gr([o,u],0)]}class zp{constructor(e,t,s){if(this.bitmap=e,this.padding=t,this.hashCount=s,t<0||t>=8)throw new jl(`Invalid padding: ${t}`);if(s<0)throw new jl(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new jl(`Invalid hash count: ${s}`);if(e.length===0&&t!==0)throw new jl(`Invalid padding when bitmap length is 0: ${t}`);this.pe=8*e.length-t,this.ye=Gr.fromNumber(this.pe)}we(e,t,s){let o=e.add(t.multiply(Gr.fromNumber(s)));return o.compare(jN)===1&&(o=new Gr([o.getBits(0),o.getBits(1)],0)),o.modulo(this.ye).toNumber()}Se(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.pe===0)return!1;const t=JE(e),[s,o]=eT(t);for(let u=0;u<this.hashCount;u++){const h=this.we(s,o,u);if(!this.Se(h))return!1}return!0}static create(e,t,s){const o=e%8==0?0:8-e%8,u=new Uint8Array(Math.ceil(e/8)),h=new zp(u,o,t);return s.forEach(m=>h.insert(m)),h}insert(e){if(this.pe===0)return;const t=JE(e),[s,o]=eT(t);for(let u=0;u<this.hashCount;u++){const h=this.we(s,o,u);this.be(h)}}be(e){const t=Math.floor(e/8),s=e%8;this.bitmap[t]|=1<<s}}class jl extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jh{constructor(e,t,s,o,u){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=o,this.resolvedLimboDocuments=u}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const o=new Map;return o.set(e,_u.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new Jh(Se.min(),o,new rt(Ce),sr(),Pe())}}class _u{constructor(e,t,s,o,u){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=o,this.removedDocuments=u}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new _u(s,t,Pe(),Pe(),Pe())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hh{constructor(e,t,s,o){this.De=e,this.removedTargetIds=t,this.key=s,this.ve=o}}class nw{constructor(e,t){this.targetId=e,this.Ce=t}}class iw{constructor(e,t,s=Gt.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=o}}class tT{constructor(){this.Fe=0,this.Me=nT(),this.xe=Gt.EMPTY_BYTE_STRING,this.Oe=!1,this.Ne=!0}get current(){return this.Oe}get resumeToken(){return this.xe}get Be(){return this.Fe!==0}get Le(){return this.Ne}ke(e){e.approximateByteSize()>0&&(this.Ne=!0,this.xe=e)}qe(){let e=Pe(),t=Pe(),s=Pe();return this.Me.forEach((o,u)=>{switch(u){case 0:e=e.add(o);break;case 2:t=t.add(o);break;case 1:s=s.add(o);break;default:ve(38017,{changeType:u})}}),new _u(this.xe,this.Oe,e,t,s)}Qe(){this.Ne=!1,this.Me=nT()}$e(e,t){this.Ne=!0,this.Me=this.Me.insert(e,t)}Ue(e){this.Ne=!0,this.Me=this.Me.remove(e)}Ke(){this.Fe+=1}We(){this.Fe-=1,He(this.Fe>=0,3241,{Fe:this.Fe})}Ge(){this.Ne=!0,this.Oe=!0}}class qN{constructor(e){this.ze=e,this.je=new Map,this.He=sr(),this.Je=Wc(),this.Ye=Wc(),this.Ze=new rt(Ce)}Xe(e){for(const t of e.De)e.ve&&e.ve.isFoundDocument()?this.et(t,e.ve):this.tt(t,e.key,e.ve);for(const t of e.removedTargetIds)this.tt(t,e.key,e.ve)}nt(e){this.forEachTarget(e,t=>{const s=this.rt(t);switch(e.state){case 0:this.it(t)&&s.ke(e.resumeToken);break;case 1:s.We(),s.Be||s.Qe(),s.ke(e.resumeToken);break;case 2:s.We(),s.Be||this.removeTarget(t);break;case 3:this.it(t)&&(s.Ge(),s.ke(e.resumeToken));break;case 4:this.it(t)&&(this.st(t),s.ke(e.resumeToken));break;default:ve(56790,{state:e.state})}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.je.forEach((s,o)=>{this.it(o)&&t(o)})}ot(e){const t=e.targetId,s=e.Ce.count,o=this._t(t);if(o){const u=o.target;if(Ym(u))if(s===0){const h=new me(u.path);this.tt(t,h,Wt.newNoDocument(h,Se.min()))}else He(s===1,20013,{expectedCount:s});else{const h=this.ut(t);if(h!==s){const m=this.ct(e),p=m?this.lt(m,e,h):1;if(p!==0){this.st(t);const g=p===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(t,g)}}}}}ct(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:s="",padding:o=0},hashCount:u=0}=t;let h,m;try{h=Xr(s).toUint8Array()}catch(p){if(p instanceof IA)return uo("Decoding the base64 bloom filter in existence filter failed ("+p.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw p}try{m=new zp(h,o,u)}catch(p){return uo(p instanceof jl?"BloomFilter error: ":"Applying bloom filter failed: ",p),null}return m.pe===0?null:m}lt(e,t,s){return t.Ce.count===s-this.Tt(e,t.targetId)?0:2}Tt(e,t){const s=this.ze.getRemoteKeysForTarget(t);let o=0;return s.forEach(u=>{const h=this.ze.Pt(),m=`projects/${h.projectId}/databases/${h.database}/documents/${u.path.canonicalString()}`;e.mightContain(m)||(this.tt(t,u,null),o++)}),o}It(e){const t=new Map;this.je.forEach((u,h)=>{const m=this._t(h);if(m){if(u.current&&Ym(m.target)){const p=new me(m.target.path);this.Et(p).has(h)||this.dt(h,p)||this.tt(h,p,Wt.newNoDocument(p,e))}u.Le&&(t.set(h,u.qe()),u.Qe())}});let s=Pe();this.Ye.forEach((u,h)=>{let m=!0;h.forEachWhile(p=>{const g=this._t(p);return!g||g.purpose==="TargetPurposeLimboResolution"||(m=!1,!1)}),m&&(s=s.add(u))}),this.He.forEach((u,h)=>h.setReadTime(e));const o=new Jh(e,t,this.Ze,this.He,s);return this.He=sr(),this.Je=Wc(),this.Ye=Wc(),this.Ze=new rt(Ce),o}et(e,t){if(!this.it(e))return;const s=this.dt(e,t.key)?2:0;this.rt(e).$e(t.key,s),this.He=this.He.insert(t.key,t),this.Je=this.Je.insert(t.key,this.Et(t.key).add(e)),this.Ye=this.Ye.insert(t.key,this.At(t.key).add(e))}tt(e,t,s){if(!this.it(e))return;const o=this.rt(e);this.dt(e,t)?o.$e(t,1):o.Ue(t),this.Ye=this.Ye.insert(t,this.At(t).delete(e)),this.Ye=this.Ye.insert(t,this.At(t).add(e)),s&&(this.He=this.He.insert(t,s))}removeTarget(e){this.je.delete(e)}ut(e){const t=this.rt(e).qe();return this.ze.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ke(e){this.rt(e).Ke()}rt(e){let t=this.je.get(e);return t||(t=new tT,this.je.set(e,t)),t}At(e){let t=this.Ye.get(e);return t||(t=new Dt(Ce),this.Ye=this.Ye.insert(e,t)),t}Et(e){let t=this.Je.get(e);return t||(t=new Dt(Ce),this.Je=this.Je.insert(e,t)),t}it(e){const t=this._t(e)!==null;return t||le("WatchChangeAggregator","Detected inactive target",e),t}_t(e){const t=this.je.get(e);return t&&t.Be?null:this.ze.Rt(e)}st(e){this.je.set(e,new tT),this.ze.getRemoteKeysForTarget(e).forEach(t=>{this.tt(e,t,null)})}dt(e,t){return this.ze.getRemoteKeysForTarget(e).has(t)}}function Wc(){return new rt(me.comparator)}function nT(){return new rt(me.comparator)}const HN={asc:"ASCENDING",desc:"DESCENDING"},FN={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},GN={and:"AND",or:"OR"};class KN{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Wm(i,e){return i.useProto3Json||$h(e)?e:{value:e}}function Oh(i,e){return i.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function rw(i,e){return i.useProto3Json?e.toBase64():e.toUint8Array()}function $N(i,e){return Oh(i,e.toTimestamp())}function Ei(i){return He(!!i,49232),Se.fromTimestamp(function(t){const s=Qr(t);return new Ct(s.seconds,s.nanos)}(i))}function Bp(i,e){return Zm(i,e).canonicalString()}function Zm(i,e){const t=function(o){return new et(["projects",o.projectId,"databases",o.database])}(i).child("documents");return e===void 0?t:t.child(e)}function sw(i){const e=et.fromString(i);return He(cw(e),10190,{key:e.toString()}),e}function Jm(i,e){return Bp(i.databaseId,e.path)}function Rm(i,e){const t=sw(e);if(t.get(1)!==i.databaseId.projectId)throw new ce(J.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+i.databaseId.projectId);if(t.get(3)!==i.databaseId.database)throw new ce(J.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+i.databaseId.database);return new me(ow(t))}function aw(i,e){return Bp(i.databaseId,e)}function YN(i){const e=sw(i);return e.length===4?et.emptyPath():ow(e)}function ep(i){return new et(["projects",i.databaseId.projectId,"databases",i.databaseId.database]).canonicalString()}function ow(i){return He(i.length>4&&i.get(4)==="documents",29091,{key:i.toString()}),i.popFirst(5)}function iT(i,e,t){return{name:Jm(i,e),fields:t.value.mapValue.fields}}function QN(i,e){let t;if("targetChange"in e){e.targetChange;const s=function(g){return g==="NO_CHANGE"?0:g==="ADD"?1:g==="REMOVE"?2:g==="CURRENT"?3:g==="RESET"?4:ve(39313,{state:g})}(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],u=function(g,E){return g.useProto3Json?(He(E===void 0||typeof E=="string",58123),Gt.fromBase64String(E||"")):(He(E===void 0||E instanceof Buffer||E instanceof Uint8Array,16193),Gt.fromUint8Array(E||new Uint8Array))}(i,e.targetChange.resumeToken),h=e.targetChange.cause,m=h&&function(g){const E=g.code===void 0?J.UNKNOWN:tw(g.code);return new ce(E,g.message||"")}(h);t=new iw(s,o,u,m||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const o=Rm(i,s.document.name),u=Ei(s.document.updateTime),h=s.document.createTime?Ei(s.document.createTime):Se.min(),m=new Ln({mapValue:{fields:s.document.fields}}),p=Wt.newFoundDocument(o,u,h,m),g=s.targetIds||[],E=s.removedTargetIds||[];t=new hh(g,E,p.key,p)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const o=Rm(i,s.document),u=s.readTime?Ei(s.readTime):Se.min(),h=Wt.newNoDocument(o,u),m=s.removedTargetIds||[];t=new hh([],m,h.key,h)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const o=Rm(i,s.document),u=s.removedTargetIds||[];t=new hh([],u,o,null)}else{if(!("filter"in e))return ve(11601,{Vt:e});{e.filter;const s=e.filter;s.targetId;const{count:o=0,unchangedNames:u}=s,h=new zN(o,u),m=s.targetId;t=new nw(m,h)}}return t}function XN(i,e){let t;if(e instanceof yu)t={update:iT(i,e.key,e.value)};else if(e instanceof ew)t={delete:Jm(i,e.key)};else if(e instanceof sa)t={update:iT(i,e.key,e.data),updateMask:sM(e.fieldMask)};else{if(!(e instanceof kN))return ve(16599,{ft:e.type});t={verify:Jm(i,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(s=>function(u,h){const m=h.transform;if(m instanceof su)return{fieldPath:h.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(m instanceof au)return{fieldPath:h.field.canonicalString(),appendMissingElements:{values:m.elements}};if(m instanceof ou)return{fieldPath:h.field.canonicalString(),removeAllFromArray:{values:m.elements}};if(m instanceof Dh)return{fieldPath:h.field.canonicalString(),increment:m.Re};throw ve(20930,{transform:h.transform})}(0,s))),e.precondition.isNone||(t.currentDocument=function(o,u){return u.updateTime!==void 0?{updateTime:$N(o,u.updateTime)}:u.exists!==void 0?{exists:u.exists}:ve(27497)}(i,e.precondition)),t}function WN(i,e){return i&&i.length>0?(He(e!==void 0,14353),i.map(t=>function(o,u){let h=o.updateTime?Ei(o.updateTime):Ei(u);return h.isEqual(Se.min())&&(h=Ei(u)),new VN(h,o.transformResults||[])}(t,e))):[]}function ZN(i,e){return{documents:[aw(i,e.path)]}}function JN(i,e){const t={structuredQuery:{}},s=e.path;let o;e.collectionGroup!==null?(o=s,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=s.popLast(),t.structuredQuery.from=[{collectionId:s.lastSegment()}]),t.parent=aw(i,o);const u=function(g){if(g.length!==0)return uw(Xn.create(g,"and"))}(e.filters);u&&(t.structuredQuery.where=u);const h=function(g){if(g.length!==0)return g.map(E=>function(w){return{field:to(w.field),direction:nM(w.dir)}}(E))}(e.orderBy);h&&(t.structuredQuery.orderBy=h);const m=Wm(i,e.limit);return m!==null&&(t.structuredQuery.limit=m),e.startAt&&(t.structuredQuery.startAt=function(g){return{before:g.inclusive,values:g.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(g){return{before:!g.inclusive,values:g.position}}(e.endAt)),{gt:t,parent:o}}function eM(i){let e=YN(i.parent);const t=i.structuredQuery,s=t.from?t.from.length:0;let o=null;if(s>0){He(s===1,65062);const E=t.from[0];E.allDescendants?o=E.collectionId:e=e.child(E.collectionId)}let u=[];t.where&&(u=function(S){const w=lw(S);return w instanceof Xn&&LA(w)?w.getFilters():[w]}(t.where));let h=[];t.orderBy&&(h=function(S){return S.map(w=>function(P){return new Ch(no(P.field),function(H){switch(H){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(P.direction))}(w))}(t.orderBy));let m=null;t.limit&&(m=function(S){let w;return w=typeof S=="object"?S.value:S,$h(w)?null:w}(t.limit));let p=null;t.startAt&&(p=function(S){const w=!!S.before,D=S.values||[];return new Ih(D,w)}(t.startAt));let g=null;return t.endAt&&(g=function(S){const w=!S.before,D=S.values||[];return new Ih(D,w)}(t.endAt)),vN(e,o,h,u,m,"F",p,g)}function tM(i,e){const t=function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ve(28987,{purpose:o})}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function lw(i){return i.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=no(t.unaryFilter.field);return Et.create(s,"==",{doubleValue:NaN});case"IS_NULL":const o=no(t.unaryFilter.field);return Et.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const u=no(t.unaryFilter.field);return Et.create(u,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const h=no(t.unaryFilter.field);return Et.create(h,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return ve(61313);default:return ve(60726)}}(i):i.fieldFilter!==void 0?function(t){return Et.create(no(t.fieldFilter.field),function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return ve(58110);default:return ve(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(i):i.compositeFilter!==void 0?function(t){return Xn.create(t.compositeFilter.filters.map(s=>lw(s)),function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return ve(1026)}}(t.compositeFilter.op))}(i):ve(30097,{filter:i})}function nM(i){return HN[i]}function iM(i){return FN[i]}function rM(i){return GN[i]}function to(i){return{fieldPath:i.canonicalString()}}function no(i){return Ft.fromServerFormat(i.fieldPath)}function uw(i){return i instanceof Et?function(t){if(t.op==="=="){if(FE(t.value))return{unaryFilter:{field:to(t.field),op:"IS_NAN"}};if(HE(t.value))return{unaryFilter:{field:to(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(FE(t.value))return{unaryFilter:{field:to(t.field),op:"IS_NOT_NAN"}};if(HE(t.value))return{unaryFilter:{field:to(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:to(t.field),op:iM(t.op),value:t.value}}}(i):i instanceof Xn?function(t){const s=t.getFilters().map(o=>uw(o));return s.length===1?s[0]:{compositeFilter:{op:rM(t.op),filters:s}}}(i):ve(54877,{filter:i})}function sM(i){const e=[];return i.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function cw(i){return i.length>=4&&i.get(0)==="projects"&&i.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qr{constructor(e,t,s,o,u=Se.min(),h=Se.min(),m=Gt.EMPTY_BYTE_STRING,p=null){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=o,this.snapshotVersion=u,this.lastLimboFreeSnapshotVersion=h,this.resumeToken=m,this.expectedCount=p}withSequenceNumber(e){return new qr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new qr(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new qr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new qr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aM{constructor(e){this.wt=e}}function oM(i){const e=eM({parent:i.parent,structuredQuery:i.structuredQuery});return i.limitType==="LAST"?Xm(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lM{constructor(){this.Cn=new uM}addToCollectionParentIndex(e,t){return this.Cn.add(t),Z.resolve()}getCollectionParents(e,t){return Z.resolve(this.Cn.getEntries(t))}addFieldIndex(e,t){return Z.resolve()}deleteFieldIndex(e,t){return Z.resolve()}deleteAllFieldIndexes(e){return Z.resolve()}createTargetIndexes(e,t){return Z.resolve()}getDocumentsMatchingTarget(e,t){return Z.resolve(null)}getIndexType(e,t){return Z.resolve(0)}getFieldIndexes(e,t){return Z.resolve([])}getNextCollectionGroupToUpdate(e){return Z.resolve(null)}getMinOffset(e,t){return Z.resolve(Yr.min())}getMinOffsetFromCollectionGroup(e,t){return Z.resolve(Yr.min())}updateCollectionGroup(e,t,s){return Z.resolve()}updateIndexEntries(e,t){return Z.resolve()}}class uM{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t]||new Dt(et.comparator),u=!o.has(s);return this.index[t]=o.add(s),u}has(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t];return o&&o.has(s)}getEntries(e){return(this.index[e]||new Dt(et.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rT={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},hw=41943040;class ln{static withCacheSize(e){return new ln(e,ln.DEFAULT_COLLECTION_PERCENTILE,ln.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ln.DEFAULT_COLLECTION_PERCENTILE=10,ln.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,ln.DEFAULT=new ln(hw,ln.DEFAULT_COLLECTION_PERCENTILE,ln.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),ln.DISABLED=new ln(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mo{constructor(e){this.ur=e}next(){return this.ur+=2,this.ur}static cr(){return new mo(0)}static lr(){return new mo(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sT="LruGarbageCollector",cM=1048576;function aT([i,e],[t,s]){const o=Ce(i,t);return o===0?Ce(e,s):o}class hM{constructor(e){this.Er=e,this.buffer=new Dt(aT),this.dr=0}Ar(){return++this.dr}Rr(e){const t=[e,this.Ar()];if(this.buffer.size<this.Er)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();aT(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class fM{constructor(e,t,s){this.garbageCollector=e,this.asyncQueue=t,this.localStore=s,this.Vr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.mr(6e4)}stop(){this.Vr&&(this.Vr.cancel(),this.Vr=null)}get started(){return this.Vr!==null}mr(e){le(sT,`Garbage collection scheduled in ${e}ms`),this.Vr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Vr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){To(t)?le(sT,"Ignoring IndexedDB error during garbage collection: ",t):await Eo(t)}await this.mr(3e5)})}}class dM{constructor(e,t){this.gr=e,this.params=t}calculateTargetCount(e,t){return this.gr.pr(e).next(s=>Math.floor(t/100*s))}nthSequenceNumber(e,t){if(t===0)return Z.resolve(Kh.le);const s=new hM(t);return this.gr.forEachTarget(e,o=>s.Rr(o.sequenceNumber)).next(()=>this.gr.yr(e,o=>s.Rr(o))).next(()=>s.maxValue)}removeTargets(e,t,s){return this.gr.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.gr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(le("LruGarbageCollector","Garbage collection skipped; disabled"),Z.resolve(rT)):this.getCacheSize(e).next(s=>s<this.params.cacheSizeCollectionThreshold?(le("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),rT):this.wr(e,t))}getCacheSize(e){return this.gr.getCacheSize(e)}wr(e,t){let s,o,u,h,m,p,g;const E=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(S=>(S>this.params.maximumSequenceNumbersToCollect?(le("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${S}`),o=this.params.maximumSequenceNumbersToCollect):o=S,h=Date.now(),this.nthSequenceNumber(e,o))).next(S=>(s=S,m=Date.now(),this.removeTargets(e,s,t))).next(S=>(u=S,p=Date.now(),this.removeOrphanedDocuments(e,s))).next(S=>(g=Date.now(),Ja()<=Ve.DEBUG&&le("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${h-E}ms
	Determined least recently used ${o} in `+(m-h)+`ms
	Removed ${u} targets in `+(p-m)+`ms
	Removed ${S} documents in `+(g-p)+`ms
Total Duration: ${g-E}ms`),Z.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:u,documentsRemoved:S})))}}function mM(i,e){return new dM(i,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pM{constructor(){this.changes=new ra(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Wt.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?Z.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gM{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yM{constructor(e,t,s,o){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=o}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next(o=>(s=o,this.remoteDocumentCache.getEntry(e,t))).next(o=>(s!==null&&Ql(s.mutation,o,$n.empty(),Ct.now()),o))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.getLocalViewOfDocuments(e,s,Pe()).next(()=>s))}getLocalViewOfDocuments(e,t,s=Pe()){const o=Hs();return this.populateOverlays(e,o,t).next(()=>this.computeViews(e,t,o,s).next(u=>{let h=Bl();return u.forEach((m,p)=>{h=h.insert(m,p.overlayedDocument)}),h}))}getOverlayedDocuments(e,t){const s=Hs();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,Pe()))}populateOverlays(e,t,s){const o=[];return s.forEach(u=>{t.has(u)||o.push(u)}),this.documentOverlayCache.getOverlays(e,o).next(u=>{u.forEach((h,m)=>{t.set(h,m)})})}computeViews(e,t,s,o){let u=sr();const h=Yl(),m=function(){return Yl()}();return t.forEach((p,g)=>{const E=s.get(g.key);o.has(g.key)&&(E===void 0||E.mutation instanceof sa)?u=u.insert(g.key,g):E!==void 0?(h.set(g.key,E.mutation.getFieldMask()),Ql(E.mutation,g,E.mutation.getFieldMask(),Ct.now())):h.set(g.key,$n.empty())}),this.recalculateAndSaveOverlays(e,u).next(p=>(p.forEach((g,E)=>h.set(g,E)),t.forEach((g,E)=>{var S;return m.set(g,new gM(E,(S=h.get(g))!==null&&S!==void 0?S:null))}),m))}recalculateAndSaveOverlays(e,t){const s=Yl();let o=new rt((h,m)=>h-m),u=Pe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(h=>{for(const m of h)m.keys().forEach(p=>{const g=t.get(p);if(g===null)return;let E=s.get(p)||$n.empty();E=m.applyToLocalView(g,E),s.set(p,E);const S=(o.get(m.batchId)||Pe()).add(p);o=o.insert(m.batchId,S)})}).next(()=>{const h=[],m=o.getReverseIterator();for(;m.hasNext();){const p=m.getNext(),g=p.key,E=p.value,S=KA();E.forEach(w=>{if(!u.has(w)){const D=ZA(t.get(w),s.get(w));D!==null&&S.set(w,D),u=u.add(w)}}),h.push(this.documentOverlayCache.saveOverlays(e,g,S))}return Z.waitFor(h)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,t,s,o){return function(h){return me.isDocumentKey(h.path)&&h.collectionGroup===null&&h.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):jA(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,o):this.getDocumentsMatchingCollectionQuery(e,t,s,o)}getNextDocuments(e,t,s,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,o).next(u=>{const h=o-u.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,o-u.size):Z.resolve(Hs());let m=tu,p=u;return h.next(g=>Z.forEach(g,(E,S)=>(m<S.largestBatchId&&(m=S.largestBatchId),u.get(E)?Z.resolve():this.remoteDocumentCache.getEntry(e,E).next(w=>{p=p.insert(E,w)}))).next(()=>this.populateOverlays(e,g,u)).next(()=>this.computeViews(e,p,g,Pe())).next(E=>({batchId:m,changes:GA(E)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new me(t)).next(s=>{let o=Bl();return s.isFoundDocument()&&(o=o.insert(s.key,s)),o})}getDocumentsMatchingCollectionGroupQuery(e,t,s,o){const u=t.collectionGroup;let h=Bl();return this.indexManager.getCollectionParents(e,u).next(m=>Z.forEach(m,p=>{const g=function(S,w){return new gu(w,null,S.explicitOrderBy.slice(),S.filters.slice(),S.limit,S.limitType,S.startAt,S.endAt)}(t,p.child(u));return this.getDocumentsMatchingCollectionQuery(e,g,s,o).next(E=>{E.forEach((S,w)=>{h=h.insert(S,w)})})}).next(()=>h))}getDocumentsMatchingCollectionQuery(e,t,s,o){let u;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next(h=>(u=h,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,u,o))).next(h=>{u.forEach((p,g)=>{const E=g.getKey();h.get(E)===null&&(h=h.insert(E,Wt.newInvalidDocument(E)))});let m=Bl();return h.forEach((p,g)=>{const E=u.get(p);E!==void 0&&Ql(E.mutation,g,$n.empty(),Ct.now()),Xh(t,g)&&(m=m.insert(p,g))}),m})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _M{constructor(e){this.serializer=e,this.kr=new Map,this.qr=new Map}getBundleMetadata(e,t){return Z.resolve(this.kr.get(t))}saveBundleMetadata(e,t){return this.kr.set(t.id,function(o){return{id:o.id,version:o.version,createTime:Ei(o.createTime)}}(t)),Z.resolve()}getNamedQuery(e,t){return Z.resolve(this.qr.get(t))}saveNamedQuery(e,t){return this.qr.set(t.name,function(o){return{name:o.name,query:oM(o.bundledQuery),readTime:Ei(o.readTime)}}(t)),Z.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vM{constructor(){this.overlays=new rt(me.comparator),this.Qr=new Map}getOverlay(e,t){return Z.resolve(this.overlays.get(t))}getOverlays(e,t){const s=Hs();return Z.forEach(t,o=>this.getOverlay(e,o).next(u=>{u!==null&&s.set(o,u)})).next(()=>s)}saveOverlays(e,t,s){return s.forEach((o,u)=>{this.bt(e,t,u)}),Z.resolve()}removeOverlaysForBatchId(e,t,s){const o=this.Qr.get(s);return o!==void 0&&(o.forEach(u=>this.overlays=this.overlays.remove(u)),this.Qr.delete(s)),Z.resolve()}getOverlaysForCollection(e,t,s){const o=Hs(),u=t.length+1,h=new me(t.child("")),m=this.overlays.getIteratorFrom(h);for(;m.hasNext();){const p=m.getNext().value,g=p.getKey();if(!t.isPrefixOf(g.path))break;g.path.length===u&&p.largestBatchId>s&&o.set(p.getKey(),p)}return Z.resolve(o)}getOverlaysForCollectionGroup(e,t,s,o){let u=new rt((g,E)=>g-E);const h=this.overlays.getIterator();for(;h.hasNext();){const g=h.getNext().value;if(g.getKey().getCollectionGroup()===t&&g.largestBatchId>s){let E=u.get(g.largestBatchId);E===null&&(E=Hs(),u=u.insert(g.largestBatchId,E)),E.set(g.getKey(),g)}}const m=Hs(),p=u.getIterator();for(;p.hasNext()&&(p.getNext().value.forEach((g,E)=>m.set(g,E)),!(m.size()>=o)););return Z.resolve(m)}bt(e,t,s){const o=this.overlays.get(s.key);if(o!==null){const h=this.Qr.get(o.largestBatchId).delete(s.key);this.Qr.set(o.largestBatchId,h)}this.overlays=this.overlays.insert(s.key,new UN(t,s));let u=this.Qr.get(t);u===void 0&&(u=Pe(),this.Qr.set(t,u)),this.Qr.set(t,u.add(s.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EM{constructor(){this.sessionToken=Gt.EMPTY_BYTE_STRING}getSessionToken(e){return Z.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,Z.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jp{constructor(){this.$r=new Dt(kt.Ur),this.Kr=new Dt(kt.Wr)}isEmpty(){return this.$r.isEmpty()}addReference(e,t){const s=new kt(e,t);this.$r=this.$r.add(s),this.Kr=this.Kr.add(s)}Gr(e,t){e.forEach(s=>this.addReference(s,t))}removeReference(e,t){this.zr(new kt(e,t))}jr(e,t){e.forEach(s=>this.removeReference(s,t))}Hr(e){const t=new me(new et([])),s=new kt(t,e),o=new kt(t,e+1),u=[];return this.Kr.forEachInRange([s,o],h=>{this.zr(h),u.push(h.key)}),u}Jr(){this.$r.forEach(e=>this.zr(e))}zr(e){this.$r=this.$r.delete(e),this.Kr=this.Kr.delete(e)}Yr(e){const t=new me(new et([])),s=new kt(t,e),o=new kt(t,e+1);let u=Pe();return this.Kr.forEachInRange([s,o],h=>{u=u.add(h.key)}),u}containsKey(e){const t=new kt(e,0),s=this.$r.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class kt{constructor(e,t){this.key=e,this.Zr=t}static Ur(e,t){return me.comparator(e.key,t.key)||Ce(e.Zr,t.Zr)}static Wr(e,t){return Ce(e.Zr,t.Zr)||me.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TM{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.nr=1,this.Xr=new Dt(kt.Ur)}checkEmpty(e){return Z.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,o){const u=this.nr;this.nr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const h=new LN(u,t,s,o);this.mutationQueue.push(h);for(const m of o)this.Xr=this.Xr.add(new kt(m.key,u)),this.indexManager.addToCollectionParentIndex(e,m.key.path.popLast());return Z.resolve(h)}lookupMutationBatch(e,t){return Z.resolve(this.ei(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,o=this.ti(s),u=o<0?0:o;return Z.resolve(this.mutationQueue.length>u?this.mutationQueue[u]:null)}getHighestUnacknowledgedBatchId(){return Z.resolve(this.mutationQueue.length===0?Np:this.nr-1)}getAllMutationBatches(e){return Z.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new kt(t,0),o=new kt(t,Number.POSITIVE_INFINITY),u=[];return this.Xr.forEachInRange([s,o],h=>{const m=this.ei(h.Zr);u.push(m)}),Z.resolve(u)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new Dt(Ce);return t.forEach(o=>{const u=new kt(o,0),h=new kt(o,Number.POSITIVE_INFINITY);this.Xr.forEachInRange([u,h],m=>{s=s.add(m.Zr)})}),Z.resolve(this.ni(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,o=s.length+1;let u=s;me.isDocumentKey(u)||(u=u.child(""));const h=new kt(new me(u),0);let m=new Dt(Ce);return this.Xr.forEachWhile(p=>{const g=p.key.path;return!!s.isPrefixOf(g)&&(g.length===o&&(m=m.add(p.Zr)),!0)},h),Z.resolve(this.ni(m))}ni(e){const t=[];return e.forEach(s=>{const o=this.ei(s);o!==null&&t.push(o)}),t}removeMutationBatch(e,t){He(this.ri(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Xr;return Z.forEach(t.mutations,o=>{const u=new kt(o.key,t.batchId);return s=s.delete(u),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)}).next(()=>{this.Xr=s})}sr(e){}containsKey(e,t){const s=new kt(t,0),o=this.Xr.firstAfterOrEqual(s);return Z.resolve(t.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,Z.resolve()}ri(e,t){return this.ti(e)}ti(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ei(e){const t=this.ti(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AM{constructor(e){this.ii=e,this.docs=function(){return new rt(me.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,o=this.docs.get(s),u=o?o.size:0,h=this.ii(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:h}),this.size+=h-u,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return Z.resolve(s?s.document.mutableCopy():Wt.newInvalidDocument(t))}getEntries(e,t){let s=sr();return t.forEach(o=>{const u=this.docs.get(o);s=s.insert(o,u?u.document.mutableCopy():Wt.newInvalidDocument(o))}),Z.resolve(s)}getDocumentsMatchingQuery(e,t,s,o){let u=sr();const h=t.path,m=new me(h.child("__id-9223372036854775808__")),p=this.docs.getIteratorFrom(m);for(;p.hasNext();){const{key:g,value:{document:E}}=p.getNext();if(!h.isPrefixOf(g.path))break;g.path.length>h.length+1||WO(XO(E),s)<=0||(o.has(E.key)||Xh(t,E))&&(u=u.insert(E.key,E.mutableCopy()))}return Z.resolve(u)}getAllFromCollectionGroup(e,t,s,o){ve(9500)}si(e,t){return Z.forEach(this.docs,s=>t(s))}newChangeBuffer(e){return new wM(this)}getSize(e){return Z.resolve(this.size)}}class wM extends pM{constructor(e){super(),this.Br=e}applyChanges(e){const t=[];return this.changes.forEach((s,o)=>{o.isValidDocument()?t.push(this.Br.addEntry(e,o)):this.Br.removeEntry(s)}),Z.waitFor(t)}getFromCache(e,t){return this.Br.getEntry(e,t)}getAllFromCache(e,t){return this.Br.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SM{constructor(e){this.persistence=e,this.oi=new ra(t=>Pp(t),xp),this.lastRemoteSnapshotVersion=Se.min(),this.highestTargetId=0,this._i=0,this.ai=new jp,this.targetCount=0,this.ui=mo.cr()}forEachTarget(e,t){return this.oi.forEach((s,o)=>t(o)),Z.resolve()}getLastRemoteSnapshotVersion(e){return Z.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return Z.resolve(this._i)}allocateTargetId(e){return this.highestTargetId=this.ui.next(),Z.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this._i&&(this._i=t),Z.resolve()}Tr(e){this.oi.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ui=new mo(t),this.highestTargetId=t),e.sequenceNumber>this._i&&(this._i=e.sequenceNumber)}addTargetData(e,t){return this.Tr(t),this.targetCount+=1,Z.resolve()}updateTargetData(e,t){return this.Tr(t),Z.resolve()}removeTargetData(e,t){return this.oi.delete(t.target),this.ai.Hr(t.targetId),this.targetCount-=1,Z.resolve()}removeTargets(e,t,s){let o=0;const u=[];return this.oi.forEach((h,m)=>{m.sequenceNumber<=t&&s.get(m.targetId)===null&&(this.oi.delete(h),u.push(this.removeMatchingKeysForTargetId(e,m.targetId)),o++)}),Z.waitFor(u).next(()=>o)}getTargetCount(e){return Z.resolve(this.targetCount)}getTargetData(e,t){const s=this.oi.get(t)||null;return Z.resolve(s)}addMatchingKeys(e,t,s){return this.ai.Gr(t,s),Z.resolve()}removeMatchingKeys(e,t,s){this.ai.jr(t,s);const o=this.persistence.referenceDelegate,u=[];return o&&t.forEach(h=>{u.push(o.markPotentiallyOrphaned(e,h))}),Z.waitFor(u)}removeMatchingKeysForTargetId(e,t){return this.ai.Hr(t),Z.resolve()}getMatchingKeysForTargetId(e,t){const s=this.ai.Yr(t);return Z.resolve(s)}containsKey(e,t){return Z.resolve(this.ai.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fw{constructor(e,t){this.ci={},this.overlays={},this.li=new Kh(0),this.hi=!1,this.hi=!0,this.Pi=new EM,this.referenceDelegate=e(this),this.Ti=new SM(this),this.indexManager=new lM,this.remoteDocumentCache=function(o){return new AM(o)}(s=>this.referenceDelegate.Ii(s)),this.serializer=new aM(t),this.Ei=new _M(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.hi=!1,Promise.resolve()}get started(){return this.hi}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new vM,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this.ci[e.toKey()];return s||(s=new TM(t,this.referenceDelegate),this.ci[e.toKey()]=s),s}getGlobalsCache(){return this.Pi}getTargetCache(){return this.Ti}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ei}runTransaction(e,t,s){le("MemoryPersistence","Starting transaction:",e);const o=new bM(this.li.next());return this.referenceDelegate.di(),s(o).next(u=>this.referenceDelegate.Ai(o).next(()=>u)).toPromise().then(u=>(o.raiseOnCommittedEvent(),u))}Ri(e,t){return Z.or(Object.values(this.ci).map(s=>()=>s.containsKey(e,t)))}}class bM extends JO{constructor(e){super(),this.currentSequenceNumber=e}}class qp{constructor(e){this.persistence=e,this.Vi=new jp,this.mi=null}static fi(e){return new qp(e)}get gi(){if(this.mi)return this.mi;throw ve(60996)}addReference(e,t,s){return this.Vi.addReference(s,t),this.gi.delete(s.toString()),Z.resolve()}removeReference(e,t,s){return this.Vi.removeReference(s,t),this.gi.add(s.toString()),Z.resolve()}markPotentiallyOrphaned(e,t){return this.gi.add(t.toString()),Z.resolve()}removeTarget(e,t){this.Vi.Hr(t.targetId).forEach(o=>this.gi.add(o.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next(o=>{o.forEach(u=>this.gi.add(u.toString()))}).next(()=>s.removeTargetData(e,t))}di(){this.mi=new Set}Ai(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Z.forEach(this.gi,s=>{const o=me.fromPath(s);return this.pi(e,o).next(u=>{u||t.removeEntry(o,Se.min())})}).next(()=>(this.mi=null,t.apply(e)))}updateLimboDocument(e,t){return this.pi(e,t).next(s=>{s?this.gi.delete(t.toString()):this.gi.add(t.toString())})}Ii(e){return 0}pi(e,t){return Z.or([()=>Z.resolve(this.Vi.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ri(e,t)])}}class Nh{constructor(e,t){this.persistence=e,this.yi=new ra(s=>nN(s.path),(s,o)=>s.isEqual(o)),this.garbageCollector=mM(this,t)}static fi(e,t){return new Nh(e,t)}di(){}Ai(e){return Z.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}pr(e){const t=this.Sr(e);return this.persistence.getTargetCache().getTargetCount(e).next(s=>t.next(o=>s+o))}Sr(e){let t=0;return this.yr(e,s=>{t++}).next(()=>t)}yr(e,t){return Z.forEach(this.yi,(s,o)=>this.Dr(e,s,o).next(u=>u?Z.resolve():t(o)))}removeTargets(e,t,s){return this.persistence.getTargetCache().removeTargets(e,t,s)}removeOrphanedDocuments(e,t){let s=0;const o=this.persistence.getRemoteDocumentCache(),u=o.newChangeBuffer();return o.si(e,h=>this.Dr(e,h,t).next(m=>{m||(s++,u.removeEntry(h,Se.min()))})).next(()=>u.apply(e)).next(()=>s)}markPotentiallyOrphaned(e,t){return this.yi.set(t,e.currentSequenceNumber),Z.resolve()}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,t,s){return this.yi.set(s,e.currentSequenceNumber),Z.resolve()}removeReference(e,t,s){return this.yi.set(s,e.currentSequenceNumber),Z.resolve()}updateLimboDocument(e,t){return this.yi.set(t,e.currentSequenceNumber),Z.resolve()}Ii(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=lh(e.data.value)),t}Dr(e,t,s){return Z.or([()=>this.persistence.Ri(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const o=this.yi.get(t);return Z.resolve(o!==void 0&&o>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hp{constructor(e,t,s,o){this.targetId=e,this.fromCache=t,this.ds=s,this.As=o}static Rs(e,t){let s=Pe(),o=Pe();for(const u of t.docChanges)switch(u.type){case 0:s=s.add(u.doc.key);break;case 1:o=o.add(u.doc.key)}return new Hp(e,t.fromCache,s,o)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RM{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IM{constructor(){this.Vs=!1,this.fs=!1,this.gs=100,this.ps=function(){return z1()?8:eN(Zt())>0?6:4}()}initialize(e,t){this.ys=e,this.indexManager=t,this.Vs=!0}getDocumentsMatchingQuery(e,t,s,o){const u={result:null};return this.ws(e,t).next(h=>{u.result=h}).next(()=>{if(!u.result)return this.Ss(e,t,o,s).next(h=>{u.result=h})}).next(()=>{if(u.result)return;const h=new RM;return this.bs(e,t,h).next(m=>{if(u.result=m,this.fs)return this.Ds(e,t,h,m.size)})}).next(()=>u.result)}Ds(e,t,s,o){return s.documentReadCount<this.gs?(Ja()<=Ve.DEBUG&&le("QueryEngine","SDK will not create cache indexes for query:",eo(t),"since it only creates cache indexes for collection contains","more than or equal to",this.gs,"documents"),Z.resolve()):(Ja()<=Ve.DEBUG&&le("QueryEngine","Query:",eo(t),"scans",s.documentReadCount,"local documents and returns",o,"documents as results."),s.documentReadCount>this.ps*o?(Ja()<=Ve.DEBUG&&le("QueryEngine","The SDK decides to create cache indexes for query:",eo(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,_i(t))):Z.resolve())}ws(e,t){if(YE(t))return Z.resolve(null);let s=_i(t);return this.indexManager.getIndexType(e,s).next(o=>o===0?null:(t.limit!==null&&o===1&&(t=Xm(t,null,"F"),s=_i(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next(u=>{const h=Pe(...u);return this.ys.getDocuments(e,h).next(m=>this.indexManager.getMinOffset(e,s).next(p=>{const g=this.vs(t,m);return this.Cs(t,g,h,p.readTime)?this.ws(e,Xm(t,null,"F")):this.Fs(e,g,t,p)}))})))}Ss(e,t,s,o){return YE(t)||o.isEqual(Se.min())?Z.resolve(null):this.ys.getDocuments(e,s).next(u=>{const h=this.vs(t,u);return this.Cs(t,h,s,o)?Z.resolve(null):(Ja()<=Ve.DEBUG&&le("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),eo(t)),this.Fs(e,h,t,QO(o,tu)).next(m=>m))})}vs(e,t){let s=new Dt(HA(e));return t.forEach((o,u)=>{Xh(e,u)&&(s=s.add(u))}),s}Cs(e,t,s,o){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const u=e.limitType==="F"?t.last():t.first();return!!u&&(u.hasPendingWrites||u.version.compareTo(o)>0)}bs(e,t,s){return Ja()<=Ve.DEBUG&&le("QueryEngine","Using full collection scan to execute query:",eo(t)),this.ys.getDocumentsMatchingQuery(e,t,Yr.min(),s)}Fs(e,t,s,o){return this.ys.getDocumentsMatchingQuery(e,s,o).next(u=>(t.forEach(h=>{u=u.insert(h.key,h)}),u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fp="LocalStore",CM=3e8;class DM{constructor(e,t,s,o){this.persistence=e,this.Ms=t,this.serializer=o,this.xs=new rt(Ce),this.Os=new ra(u=>Pp(u),xp),this.Ns=new Map,this.Bs=e.getRemoteDocumentCache(),this.Ti=e.getTargetCache(),this.Ei=e.getBundleCache(),this.Ls(s)}Ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new yM(this.Bs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Bs.setIndexManager(this.indexManager),this.Ms.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.xs))}}function OM(i,e,t,s){return new DM(i,e,t,s)}async function dw(i,e){const t=be(i);return await t.persistence.runTransaction("Handle user change","readonly",s=>{let o;return t.mutationQueue.getAllMutationBatches(s).next(u=>(o=u,t.Ls(e),t.mutationQueue.getAllMutationBatches(s))).next(u=>{const h=[],m=[];let p=Pe();for(const g of o){h.push(g.batchId);for(const E of g.mutations)p=p.add(E.key)}for(const g of u){m.push(g.batchId);for(const E of g.mutations)p=p.add(E.key)}return t.localDocuments.getDocuments(s,p).next(g=>({ks:g,removedBatchIds:h,addedBatchIds:m}))})})}function NM(i,e){const t=be(i);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const o=e.batch.keys(),u=t.Bs.newChangeBuffer({trackRemovals:!0});return function(m,p,g,E){const S=g.batch,w=S.keys();let D=Z.resolve();return w.forEach(P=>{D=D.next(()=>E.getEntry(p,P)).next(G=>{const H=g.docVersions.get(P);He(H!==null,48541),G.version.compareTo(H)<0&&(S.applyToRemoteDocument(G,g),G.isValidDocument()&&(G.setReadTime(g.commitVersion),E.addEntry(G)))})}),D.next(()=>m.mutationQueue.removeMutationBatch(p,S))}(t,s,e,u).next(()=>u.apply(s)).next(()=>t.mutationQueue.performConsistencyCheck(s)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(s,o,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(m){let p=Pe();for(let g=0;g<m.mutationResults.length;++g)m.mutationResults[g].transformResults.length>0&&(p=p.add(m.batch.mutations[g].key));return p}(e))).next(()=>t.localDocuments.getDocuments(s,o))})}function mw(i){const e=be(i);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Ti.getLastRemoteSnapshotVersion(t))}function MM(i,e){const t=be(i),s=e.snapshotVersion;let o=t.xs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",u=>{const h=t.Bs.newChangeBuffer({trackRemovals:!0});o=t.xs;const m=[];e.targetChanges.forEach((E,S)=>{const w=o.get(S);if(!w)return;m.push(t.Ti.removeMatchingKeys(u,E.removedDocuments,S).next(()=>t.Ti.addMatchingKeys(u,E.addedDocuments,S)));let D=w.withSequenceNumber(u.currentSequenceNumber);e.targetMismatches.get(S)!==null?D=D.withResumeToken(Gt.EMPTY_BYTE_STRING,Se.min()).withLastLimboFreeSnapshotVersion(Se.min()):E.resumeToken.approximateByteSize()>0&&(D=D.withResumeToken(E.resumeToken,s)),o=o.insert(S,D),function(G,H,K){return G.resumeToken.approximateByteSize()===0||H.snapshotVersion.toMicroseconds()-G.snapshotVersion.toMicroseconds()>=CM?!0:K.addedDocuments.size+K.modifiedDocuments.size+K.removedDocuments.size>0}(w,D,E)&&m.push(t.Ti.updateTargetData(u,D))});let p=sr(),g=Pe();if(e.documentUpdates.forEach(E=>{e.resolvedLimboDocuments.has(E)&&m.push(t.persistence.referenceDelegate.updateLimboDocument(u,E))}),m.push(VM(u,h,e.documentUpdates).next(E=>{p=E.qs,g=E.Qs})),!s.isEqual(Se.min())){const E=t.Ti.getLastRemoteSnapshotVersion(u).next(S=>t.Ti.setTargetsMetadata(u,u.currentSequenceNumber,s));m.push(E)}return Z.waitFor(m).next(()=>h.apply(u)).next(()=>t.localDocuments.getLocalViewOfDocuments(u,p,g)).next(()=>p)}).then(u=>(t.xs=o,u))}function VM(i,e,t){let s=Pe(),o=Pe();return t.forEach(u=>s=s.add(u)),e.getEntries(i,s).next(u=>{let h=sr();return t.forEach((m,p)=>{const g=u.get(m);p.isFoundDocument()!==g.isFoundDocument()&&(o=o.add(m)),p.isNoDocument()&&p.version.isEqual(Se.min())?(e.removeEntry(m,p.readTime),h=h.insert(m,p)):!g.isValidDocument()||p.version.compareTo(g.version)>0||p.version.compareTo(g.version)===0&&g.hasPendingWrites?(e.addEntry(p),h=h.insert(m,p)):le(Fp,"Ignoring outdated watch update for ",m,". Current version:",g.version," Watch version:",p.version)}),{qs:h,Qs:o}})}function PM(i,e){const t=be(i);return t.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=Np),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function xM(i,e){const t=be(i);return t.persistence.runTransaction("Allocate target","readwrite",s=>{let o;return t.Ti.getTargetData(s,e).next(u=>u?(o=u,Z.resolve(o)):t.Ti.allocateTargetId(s).next(h=>(o=new qr(e,h,"TargetPurposeListen",s.currentSequenceNumber),t.Ti.addTargetData(s,o).next(()=>o))))}).then(s=>{const o=t.xs.get(s.targetId);return(o===null||s.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(t.xs=t.xs.insert(s.targetId,s),t.Os.set(e,s.targetId)),s})}async function tp(i,e,t){const s=be(i),o=s.xs.get(e),u=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",u,h=>s.persistence.referenceDelegate.removeTarget(h,o))}catch(h){if(!To(h))throw h;le(Fp,`Failed to update sequence numbers for target ${e}: ${h}`)}s.xs=s.xs.remove(e),s.Os.delete(o.target)}function oT(i,e,t){const s=be(i);let o=Se.min(),u=Pe();return s.persistence.runTransaction("Execute query","readwrite",h=>function(p,g,E){const S=be(p),w=S.Os.get(E);return w!==void 0?Z.resolve(S.xs.get(w)):S.Ti.getTargetData(g,E)}(s,h,_i(e)).next(m=>{if(m)return o=m.lastLimboFreeSnapshotVersion,s.Ti.getMatchingKeysForTargetId(h,m.targetId).next(p=>{u=p})}).next(()=>s.Ms.getDocumentsMatchingQuery(h,e,t?o:Se.min(),t?u:Pe())).next(m=>(kM(s,TN(e),m),{documents:m,$s:u})))}function kM(i,e,t){let s=i.Ns.get(e)||Se.min();t.forEach((o,u)=>{u.readTime.compareTo(s)>0&&(s=u.readTime)}),i.Ns.set(e,s)}class lT{constructor(){this.activeTargetIds=IN()}js(e){this.activeTargetIds=this.activeTargetIds.add(e)}Hs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}zs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class LM{constructor(){this.xo=new lT,this.Oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this.xo.js(e),this.Oo[e]||"not-current"}updateQueryState(e,t,s){this.Oo[e]=t}removeLocalQueryTarget(e){this.xo.Hs(e)}isLocalQueryTarget(e){return this.xo.activeTargetIds.has(e)}clearQueryState(e){delete this.Oo[e]}getAllActiveQueryTargets(){return this.xo.activeTargetIds}isActiveQueryTarget(e){return this.xo.activeTargetIds.has(e)}start(){return this.xo=new lT,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UM{No(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uT="ConnectivityMonitor";class cT{constructor(){this.Bo=()=>this.Lo(),this.ko=()=>this.qo(),this.Qo=[],this.$o()}No(e){this.Qo.push(e)}shutdown(){window.removeEventListener("online",this.Bo),window.removeEventListener("offline",this.ko)}$o(){window.addEventListener("online",this.Bo),window.addEventListener("offline",this.ko)}Lo(){le(uT,"Network connectivity changed: AVAILABLE");for(const e of this.Qo)e(0)}qo(){le(uT,"Network connectivity changed: UNAVAILABLE");for(const e of this.Qo)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Zc=null;function np(){return Zc===null?Zc=function(){return 268435456+Math.round(2147483648*Math.random())}():Zc++,"0x"+Zc.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Im="RestConnection",zM={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class BM{get Uo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Ko=t+"://"+e.host,this.Wo=`projects/${s}/databases/${o}`,this.Go=this.databaseId.database===bh?`project_id=${s}`:`project_id=${s}&database_id=${o}`}zo(e,t,s,o,u){const h=np(),m=this.jo(e,t.toUriEncodedString());le(Im,`Sending RPC '${e}' ${h}:`,m,s);const p={"google-cloud-resource-prefix":this.Wo,"x-goog-request-params":this.Go};this.Ho(p,o,u);const{host:g}=new URL(m),E=Js(g);return this.Jo(e,m,p,s,E).then(S=>(le(Im,`Received RPC '${e}' ${h}: `,S),S),S=>{throw uo(Im,`RPC '${e}' ${h} failed with error: `,S,"url: ",m,"request:",s),S})}Yo(e,t,s,o,u,h){return this.zo(e,t,s,o,u)}Ho(e,t,s){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+vo}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((o,u)=>e[u]=o),s&&s.headers.forEach((o,u)=>e[u]=o)}jo(e,t){const s=zM[e];return`${this.Ko}/v1/${t}:${s}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jM{constructor(e){this.Zo=e.Zo,this.Xo=e.Xo}e_(e){this.t_=e}n_(e){this.r_=e}i_(e){this.s_=e}onMessage(e){this.o_=e}close(){this.Xo()}send(e){this.Zo(e)}__(){this.t_()}a_(){this.r_()}u_(e){this.s_(e)}c_(e){this.o_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qt="WebChannelConnection";class qM extends BM{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,t,s,o,u){const h=np();return new Promise((m,p)=>{const g=new gA;g.setWithCredentials(!0),g.listenOnce(yA.COMPLETE,()=>{try{switch(g.getLastErrorCode()){case oh.NO_ERROR:const S=g.getResponseJson();le(Qt,`XHR for RPC '${e}' ${h} received:`,JSON.stringify(S)),m(S);break;case oh.TIMEOUT:le(Qt,`RPC '${e}' ${h} timed out`),p(new ce(J.DEADLINE_EXCEEDED,"Request time out"));break;case oh.HTTP_ERROR:const w=g.getStatus();if(le(Qt,`RPC '${e}' ${h} failed with status:`,w,"response text:",g.getResponseText()),w>0){let D=g.getResponseJson();Array.isArray(D)&&(D=D[0]);const P=D==null?void 0:D.error;if(P&&P.status&&P.message){const G=function(K){const ne=K.toLowerCase().replace(/_/g,"-");return Object.values(J).indexOf(ne)>=0?ne:J.UNKNOWN}(P.status);p(new ce(G,P.message))}else p(new ce(J.UNKNOWN,"Server responded with status "+g.getStatus()))}else p(new ce(J.UNAVAILABLE,"Connection failed."));break;default:ve(9055,{l_:e,streamId:h,h_:g.getLastErrorCode(),P_:g.getLastError()})}}finally{le(Qt,`RPC '${e}' ${h} completed.`)}});const E=JSON.stringify(o);le(Qt,`RPC '${e}' ${h} sending request:`,o),g.send(t,"POST",E,s,15)})}T_(e,t,s){const o=np(),u=[this.Ko,"/","google.firestore.v1.Firestore","/",e,"/channel"],h=EA(),m=vA(),p={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},g=this.longPollingOptions.timeoutSeconds;g!==void 0&&(p.longPollingTimeout=Math.round(1e3*g)),this.useFetchStreams&&(p.useFetchStreams=!0),this.Ho(p.initMessageHeaders,t,s),p.encodeInitMessageHeaders=!0;const E=u.join("");le(Qt,`Creating RPC '${e}' stream ${o}: ${E}`,p);const S=h.createWebChannel(E,p);let w=!1,D=!1;const P=new jM({Zo:H=>{D?le(Qt,`Not sending because RPC '${e}' stream ${o} is closed:`,H):(w||(le(Qt,`Opening RPC '${e}' stream ${o} transport.`),S.open(),w=!0),le(Qt,`RPC '${e}' stream ${o} sending:`,H),S.send(H))},Xo:()=>S.close()}),G=(H,K,ne)=>{H.listen(K,te=>{try{ne(te)}catch(oe){setTimeout(()=>{throw oe},0)}})};return G(S,zl.EventType.OPEN,()=>{D||(le(Qt,`RPC '${e}' stream ${o} transport opened.`),P.__())}),G(S,zl.EventType.CLOSE,()=>{D||(D=!0,le(Qt,`RPC '${e}' stream ${o} transport closed`),P.u_())}),G(S,zl.EventType.ERROR,H=>{D||(D=!0,uo(Qt,`RPC '${e}' stream ${o} transport errored. Name:`,H.name,"Message:",H.message),P.u_(new ce(J.UNAVAILABLE,"The operation could not be completed")))}),G(S,zl.EventType.MESSAGE,H=>{var K;if(!D){const ne=H.data[0];He(!!ne,16349);const te=ne,oe=(te==null?void 0:te.error)||((K=te[0])===null||K===void 0?void 0:K.error);if(oe){le(Qt,`RPC '${e}' stream ${o} received error:`,oe);const ue=oe.status;let Ae=function(R){const N=vt[R];if(N!==void 0)return tw(N)}(ue),V=oe.message;Ae===void 0&&(Ae=J.INTERNAL,V="Unknown error status: "+ue+" with message "+oe.message),D=!0,P.u_(new ce(Ae,V)),S.close()}else le(Qt,`RPC '${e}' stream ${o} received:`,ne),P.c_(ne)}}),G(m,_A.STAT_EVENT,H=>{H.stat===Hm.PROXY?le(Qt,`RPC '${e}' stream ${o} detected buffering proxy`):H.stat===Hm.NOPROXY&&le(Qt,`RPC '${e}' stream ${o} detected no buffering proxy`)}),setTimeout(()=>{P.a_()},0),P}}function Cm(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ef(i){return new KN(i,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pw{constructor(e,t,s=1e3,o=1.5,u=6e4){this.xi=e,this.timerId=t,this.I_=s,this.E_=o,this.d_=u,this.A_=0,this.R_=null,this.V_=Date.now(),this.reset()}reset(){this.A_=0}m_(){this.A_=this.d_}f_(e){this.cancel();const t=Math.floor(this.A_+this.g_()),s=Math.max(0,Date.now()-this.V_),o=Math.max(0,t-s);o>0&&le("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.A_} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.R_=this.xi.enqueueAfterDelay(this.timerId,o,()=>(this.V_=Date.now(),e())),this.A_*=this.E_,this.A_<this.I_&&(this.A_=this.I_),this.A_>this.d_&&(this.A_=this.d_)}p_(){this.R_!==null&&(this.R_.skipDelay(),this.R_=null)}cancel(){this.R_!==null&&(this.R_.cancel(),this.R_=null)}g_(){return(Math.random()-.5)*this.A_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hT="PersistentStream";class gw{constructor(e,t,s,o,u,h,m,p){this.xi=e,this.y_=s,this.w_=o,this.connection=u,this.authCredentialsProvider=h,this.appCheckCredentialsProvider=m,this.listener=p,this.state=0,this.S_=0,this.b_=null,this.D_=null,this.stream=null,this.v_=0,this.C_=new pw(e,t)}F_(){return this.state===1||this.state===5||this.M_()}M_(){return this.state===2||this.state===3}start(){this.v_=0,this.state!==4?this.auth():this.x_()}async stop(){this.F_()&&await this.close(0)}O_(){this.state=0,this.C_.reset()}N_(){this.M_()&&this.b_===null&&(this.b_=this.xi.enqueueAfterDelay(this.y_,6e4,()=>this.B_()))}L_(e){this.k_(),this.stream.send(e)}async B_(){if(this.M_())return this.close(0)}k_(){this.b_&&(this.b_.cancel(),this.b_=null)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}async close(e,t){this.k_(),this.q_(),this.C_.cancel(),this.S_++,e!==4?this.C_.reset():t&&t.code===J.RESOURCE_EXHAUSTED?(rr(t.toString()),rr("Using maximum backoff delay to prevent overloading the backend."),this.C_.m_()):t&&t.code===J.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Q_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.i_(t)}Q_(){}auth(){this.state=1;const e=this.U_(this.S_),t=this.S_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,o])=>{this.S_===t&&this.K_(s,o)},s=>{e(()=>{const o=new ce(J.UNKNOWN,"Fetching auth token failed: "+s.message);return this.W_(o)})})}K_(e,t){const s=this.U_(this.S_);this.stream=this.G_(e,t),this.stream.e_(()=>{s(()=>this.listener.e_())}),this.stream.n_(()=>{s(()=>(this.state=2,this.D_=this.xi.enqueueAfterDelay(this.w_,1e4,()=>(this.M_()&&(this.state=3),Promise.resolve())),this.listener.n_()))}),this.stream.i_(o=>{s(()=>this.W_(o))}),this.stream.onMessage(o=>{s(()=>++this.v_==1?this.z_(o):this.onNext(o))})}x_(){this.state=5,this.C_.f_(async()=>{this.state=0,this.start()})}W_(e){return le(hT,`close with error: ${e}`),this.stream=null,this.close(4,e)}U_(e){return t=>{this.xi.enqueueAndForget(()=>this.S_===e?t():(le(hT,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class HM extends gw{constructor(e,t,s,o,u,h){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,o,h),this.serializer=u}G_(e,t){return this.connection.T_("Listen",e,t)}z_(e){return this.onNext(e)}onNext(e){this.C_.reset();const t=QN(this.serializer,e),s=function(u){if(!("targetChange"in u))return Se.min();const h=u.targetChange;return h.targetIds&&h.targetIds.length?Se.min():h.readTime?Ei(h.readTime):Se.min()}(e);return this.listener.j_(t,s)}H_(e){const t={};t.database=ep(this.serializer),t.addTarget=function(u,h){let m;const p=h.target;if(m=Ym(p)?{documents:ZN(u,p)}:{query:JN(u,p).gt},m.targetId=h.targetId,h.resumeToken.approximateByteSize()>0){m.resumeToken=rw(u,h.resumeToken);const g=Wm(u,h.expectedCount);g!==null&&(m.expectedCount=g)}else if(h.snapshotVersion.compareTo(Se.min())>0){m.readTime=Oh(u,h.snapshotVersion.toTimestamp());const g=Wm(u,h.expectedCount);g!==null&&(m.expectedCount=g)}return m}(this.serializer,e);const s=tM(this.serializer,e);s&&(t.labels=s),this.L_(t)}J_(e){const t={};t.database=ep(this.serializer),t.removeTarget=e,this.L_(t)}}class FM extends gw{constructor(e,t,s,o,u,h){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,o,h),this.serializer=u}get Y_(){return this.v_>0}start(){this.lastStreamToken=void 0,super.start()}Q_(){this.Y_&&this.Z_([])}G_(e,t){return this.connection.T_("Write",e,t)}z_(e){return He(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,He(!e.writeResults||e.writeResults.length===0,55816),this.listener.X_()}onNext(e){He(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.C_.reset();const t=WN(e.writeResults,e.commitTime),s=Ei(e.commitTime);return this.listener.ea(s,t)}ta(){const e={};e.database=ep(this.serializer),this.L_(e)}Z_(e){const t={streamToken:this.lastStreamToken,writes:e.map(s=>XN(this.serializer,s))};this.L_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GM{}class KM extends GM{constructor(e,t,s,o){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=o,this.na=!1}ra(){if(this.na)throw new ce(J.FAILED_PRECONDITION,"The client has already been terminated.")}zo(e,t,s,o){return this.ra(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([u,h])=>this.connection.zo(e,Zm(t,s),o,u,h)).catch(u=>{throw u.name==="FirebaseError"?(u.code===J.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new ce(J.UNKNOWN,u.toString())})}Yo(e,t,s,o,u){return this.ra(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([h,m])=>this.connection.Yo(e,Zm(t,s),o,h,m,u)).catch(h=>{throw h.name==="FirebaseError"?(h.code===J.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),h):new ce(J.UNKNOWN,h.toString())})}terminate(){this.na=!0,this.connection.terminate()}}class $M{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.ia=0,this.sa=null,this.oa=!0}_a(){this.ia===0&&(this.aa("Unknown"),this.sa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.sa=null,this.ua("Backend didn't respond within 10 seconds."),this.aa("Offline"),Promise.resolve())))}ca(e){this.state==="Online"?this.aa("Unknown"):(this.ia++,this.ia>=1&&(this.la(),this.ua(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.aa("Offline")))}set(e){this.la(),this.ia=0,e==="Online"&&(this.oa=!1),this.aa(e)}aa(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ua(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.oa?(rr(t),this.oa=!1):le("OnlineStateTracker",t)}la(){this.sa!==null&&(this.sa.cancel(),this.sa=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xs="RemoteStore";class YM{constructor(e,t,s,o,u){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.ha=[],this.Pa=new Map,this.Ta=new Set,this.Ia=[],this.Ea=u,this.Ea.No(h=>{s.enqueueAndForget(async()=>{aa(this)&&(le(Xs,"Restarting streams for network reachability change."),await async function(p){const g=be(p);g.Ta.add(4),await vu(g),g.da.set("Unknown"),g.Ta.delete(4),await tf(g)}(this))})}),this.da=new $M(s,o)}}async function tf(i){if(aa(i))for(const e of i.Ia)await e(!0)}async function vu(i){for(const e of i.Ia)await e(!1)}function yw(i,e){const t=be(i);t.Pa.has(e.targetId)||(t.Pa.set(e.targetId,e),Yp(t)?$p(t):Ao(t).M_()&&Kp(t,e))}function Gp(i,e){const t=be(i),s=Ao(t);t.Pa.delete(e),s.M_()&&_w(t,e),t.Pa.size===0&&(s.M_()?s.N_():aa(t)&&t.da.set("Unknown"))}function Kp(i,e){if(i.Aa.Ke(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Se.min())>0){const t=i.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Ao(i).H_(e)}function _w(i,e){i.Aa.Ke(e),Ao(i).J_(e)}function $p(i){i.Aa=new qN({getRemoteKeysForTarget:e=>i.remoteSyncer.getRemoteKeysForTarget(e),Rt:e=>i.Pa.get(e)||null,Pt:()=>i.datastore.serializer.databaseId}),Ao(i).start(),i.da._a()}function Yp(i){return aa(i)&&!Ao(i).F_()&&i.Pa.size>0}function aa(i){return be(i).Ta.size===0}function vw(i){i.Aa=void 0}async function QM(i){i.da.set("Online")}async function XM(i){i.Pa.forEach((e,t)=>{Kp(i,e)})}async function WM(i,e){vw(i),Yp(i)?(i.da.ca(e),$p(i)):i.da.set("Unknown")}async function ZM(i,e,t){if(i.da.set("Online"),e instanceof iw&&e.state===2&&e.cause)try{await async function(o,u){const h=u.cause;for(const m of u.targetIds)o.Pa.has(m)&&(await o.remoteSyncer.rejectListen(m,h),o.Pa.delete(m),o.Aa.removeTarget(m))}(i,e)}catch(s){le(Xs,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Mh(i,s)}else if(e instanceof hh?i.Aa.Xe(e):e instanceof nw?i.Aa.ot(e):i.Aa.nt(e),!t.isEqual(Se.min()))try{const s=await mw(i.localStore);t.compareTo(s)>=0&&await function(u,h){const m=u.Aa.It(h);return m.targetChanges.forEach((p,g)=>{if(p.resumeToken.approximateByteSize()>0){const E=u.Pa.get(g);E&&u.Pa.set(g,E.withResumeToken(p.resumeToken,h))}}),m.targetMismatches.forEach((p,g)=>{const E=u.Pa.get(p);if(!E)return;u.Pa.set(p,E.withResumeToken(Gt.EMPTY_BYTE_STRING,E.snapshotVersion)),_w(u,p);const S=new qr(E.target,p,g,E.sequenceNumber);Kp(u,S)}),u.remoteSyncer.applyRemoteEvent(m)}(i,t)}catch(s){le(Xs,"Failed to raise snapshot:",s),await Mh(i,s)}}async function Mh(i,e,t){if(!To(e))throw e;i.Ta.add(1),await vu(i),i.da.set("Offline"),t||(t=()=>mw(i.localStore)),i.asyncQueue.enqueueRetryable(async()=>{le(Xs,"Retrying IndexedDB access"),await t(),i.Ta.delete(1),await tf(i)})}function Ew(i,e){return e().catch(t=>Mh(i,t,e))}async function nf(i){const e=be(i),t=Zr(e);let s=e.ha.length>0?e.ha[e.ha.length-1].batchId:Np;for(;JM(e);)try{const o=await PM(e.localStore,s);if(o===null){e.ha.length===0&&t.N_();break}s=o.batchId,eV(e,o)}catch(o){await Mh(e,o)}Tw(e)&&Aw(e)}function JM(i){return aa(i)&&i.ha.length<10}function eV(i,e){i.ha.push(e);const t=Zr(i);t.M_()&&t.Y_&&t.Z_(e.mutations)}function Tw(i){return aa(i)&&!Zr(i).F_()&&i.ha.length>0}function Aw(i){Zr(i).start()}async function tV(i){Zr(i).ta()}async function nV(i){const e=Zr(i);for(const t of i.ha)e.Z_(t.mutations)}async function iV(i,e,t){const s=i.ha.shift(),o=Up.from(s,e,t);await Ew(i,()=>i.remoteSyncer.applySuccessfulWrite(o)),await nf(i)}async function rV(i,e){e&&Zr(i).Y_&&await async function(s,o){if(function(h){return BN(h)&&h!==J.ABORTED}(o.code)){const u=s.ha.shift();Zr(s).O_(),await Ew(s,()=>s.remoteSyncer.rejectFailedWrite(u.batchId,o)),await nf(s)}}(i,e),Tw(i)&&Aw(i)}async function fT(i,e){const t=be(i);t.asyncQueue.verifyOperationInProgress(),le(Xs,"RemoteStore received new credentials");const s=aa(t);t.Ta.add(3),await vu(t),s&&t.da.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ta.delete(3),await tf(t)}async function sV(i,e){const t=be(i);e?(t.Ta.delete(2),await tf(t)):e||(t.Ta.add(2),await vu(t),t.da.set("Unknown"))}function Ao(i){return i.Ra||(i.Ra=function(t,s,o){const u=be(t);return u.ra(),new HM(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)}(i.datastore,i.asyncQueue,{e_:QM.bind(null,i),n_:XM.bind(null,i),i_:WM.bind(null,i),j_:ZM.bind(null,i)}),i.Ia.push(async e=>{e?(i.Ra.O_(),Yp(i)?$p(i):i.da.set("Unknown")):(await i.Ra.stop(),vw(i))})),i.Ra}function Zr(i){return i.Va||(i.Va=function(t,s,o){const u=be(t);return u.ra(),new FM(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)}(i.datastore,i.asyncQueue,{e_:()=>Promise.resolve(),n_:tV.bind(null,i),i_:rV.bind(null,i),X_:nV.bind(null,i),ea:iV.bind(null,i)}),i.Ia.push(async e=>{e?(i.Va.O_(),await nf(i)):(await i.Va.stop(),i.ha.length>0&&(le(Xs,`Stopping write stream with ${i.ha.length} pending writes`),i.ha=[]))})),i.Va}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qp{constructor(e,t,s,o,u){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=o,this.removalCallback=u,this.deferred=new er,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(h=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,o,u){const h=Date.now()+s,m=new Qp(e,t,h,o,u);return m.start(s),m}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ce(J.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Xp(i,e){if(rr("AsyncQueue",`${e}: ${i}`),To(i))return new ce(J.UNAVAILABLE,`${e}: ${i}`);throw i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oo{static emptySet(e){return new oo(e.comparator)}constructor(e){this.comparator=e?(t,s)=>e(t,s)||me.comparator(t.key,s.key):(t,s)=>me.comparator(t.key,s.key),this.keyedMap=Bl(),this.sortedSet=new rt(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,s)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof oo)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const o=t.getNext().key,u=s.getNext().key;if(!o.isEqual(u))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const s=new oo;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=t,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dT{constructor(){this.ma=new rt(me.comparator)}track(e){const t=e.doc.key,s=this.ma.get(t);s?e.type!==0&&s.type===3?this.ma=this.ma.insert(t,e):e.type===3&&s.type!==1?this.ma=this.ma.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.ma=this.ma.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.ma=this.ma.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.ma=this.ma.remove(t):e.type===1&&s.type===2?this.ma=this.ma.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.ma=this.ma.insert(t,{type:2,doc:e.doc}):ve(63341,{Vt:e,fa:s}):this.ma=this.ma.insert(t,e)}ga(){const e=[];return this.ma.inorderTraversal((t,s)=>{e.push(s)}),e}}class po{constructor(e,t,s,o,u,h,m,p,g){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=o,this.mutatedKeys=u,this.fromCache=h,this.syncStateChanged=m,this.excludesMetadataChanges=p,this.hasCachedResults=g}static fromInitialDocuments(e,t,s,o,u){const h=[];return t.forEach(m=>{h.push({type:0,doc:m})}),new po(e,t,oo.emptySet(t),h,s,o,!0,!1,u)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Qh(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let o=0;o<t.length;o++)if(t[o].type!==s[o].type||!t[o].doc.isEqual(s[o].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aV{constructor(){this.pa=void 0,this.ya=[]}wa(){return this.ya.some(e=>e.Sa())}}class oV{constructor(){this.queries=mT(),this.onlineState="Unknown",this.ba=new Set}terminate(){(function(t,s){const o=be(t),u=o.queries;o.queries=mT(),u.forEach((h,m)=>{for(const p of m.ya)p.onError(s)})})(this,new ce(J.ABORTED,"Firestore shutting down"))}}function mT(){return new ra(i=>qA(i),Qh)}async function ww(i,e){const t=be(i);let s=3;const o=e.query;let u=t.queries.get(o);u?!u.wa()&&e.Sa()&&(s=2):(u=new aV,s=e.Sa()?0:1);try{switch(s){case 0:u.pa=await t.onListen(o,!0);break;case 1:u.pa=await t.onListen(o,!1);break;case 2:await t.onFirstRemoteStoreListen(o)}}catch(h){const m=Xp(h,`Initialization of query '${eo(e.query)}' failed`);return void e.onError(m)}t.queries.set(o,u),u.ya.push(e),e.Da(t.onlineState),u.pa&&e.va(u.pa)&&Wp(t)}async function Sw(i,e){const t=be(i),s=e.query;let o=3;const u=t.queries.get(s);if(u){const h=u.ya.indexOf(e);h>=0&&(u.ya.splice(h,1),u.ya.length===0?o=e.Sa()?0:1:!u.wa()&&e.Sa()&&(o=2))}switch(o){case 0:return t.queries.delete(s),t.onUnlisten(s,!0);case 1:return t.queries.delete(s),t.onUnlisten(s,!1);case 2:return t.onLastRemoteStoreUnlisten(s);default:return}}function lV(i,e){const t=be(i);let s=!1;for(const o of e){const u=o.query,h=t.queries.get(u);if(h){for(const m of h.ya)m.va(o)&&(s=!0);h.pa=o}}s&&Wp(t)}function uV(i,e,t){const s=be(i),o=s.queries.get(e);if(o)for(const u of o.ya)u.onError(t);s.queries.delete(e)}function Wp(i){i.ba.forEach(e=>{e.next()})}var ip,pT;(pT=ip||(ip={})).Ca="default",pT.Cache="cache";class bw{constructor(e,t,s){this.query=e,this.Fa=t,this.Ma=!1,this.xa=null,this.onlineState="Unknown",this.options=s||{}}va(e){if(!this.options.includeMetadataChanges){const s=[];for(const o of e.docChanges)o.type!==3&&s.push(o);e=new po(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Ma?this.Oa(e)&&(this.Fa.next(e),t=!0):this.Na(e,this.onlineState)&&(this.Ba(e),t=!0),this.xa=e,t}onError(e){this.Fa.error(e)}Da(e){this.onlineState=e;let t=!1;return this.xa&&!this.Ma&&this.Na(this.xa,e)&&(this.Ba(this.xa),t=!0),t}Na(e,t){if(!e.fromCache||!this.Sa())return!0;const s=t!=="Offline";return(!this.options.La||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Oa(e){if(e.docChanges.length>0)return!0;const t=this.xa&&this.xa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}Ba(e){e=po.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Ma=!0,this.Fa.next(e)}Sa(){return this.options.source!==ip.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rw{constructor(e){this.key=e}}class Iw{constructor(e){this.key=e}}class cV{constructor(e,t){this.query=e,this.Ga=t,this.za=null,this.hasCachedResults=!1,this.current=!1,this.ja=Pe(),this.mutatedKeys=Pe(),this.Ha=HA(e),this.Ja=new oo(this.Ha)}get Ya(){return this.Ga}Za(e,t){const s=t?t.Xa:new dT,o=t?t.Ja:this.Ja;let u=t?t.mutatedKeys:this.mutatedKeys,h=o,m=!1;const p=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,g=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal((E,S)=>{const w=o.get(E),D=Xh(this.query,S)?S:null,P=!!w&&this.mutatedKeys.has(w.key),G=!!D&&(D.hasLocalMutations||this.mutatedKeys.has(D.key)&&D.hasCommittedMutations);let H=!1;w&&D?w.data.isEqual(D.data)?P!==G&&(s.track({type:3,doc:D}),H=!0):this.eu(w,D)||(s.track({type:2,doc:D}),H=!0,(p&&this.Ha(D,p)>0||g&&this.Ha(D,g)<0)&&(m=!0)):!w&&D?(s.track({type:0,doc:D}),H=!0):w&&!D&&(s.track({type:1,doc:w}),H=!0,(p||g)&&(m=!0)),H&&(D?(h=h.add(D),u=G?u.add(E):u.delete(E)):(h=h.delete(E),u=u.delete(E)))}),this.query.limit!==null)for(;h.size>this.query.limit;){const E=this.query.limitType==="F"?h.last():h.first();h=h.delete(E.key),u=u.delete(E.key),s.track({type:1,doc:E})}return{Ja:h,Xa:s,Cs:m,mutatedKeys:u}}eu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s,o){const u=this.Ja;this.Ja=e.Ja,this.mutatedKeys=e.mutatedKeys;const h=e.Xa.ga();h.sort((E,S)=>function(D,P){const G=H=>{switch(H){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ve(20277,{Vt:H})}};return G(D)-G(P)}(E.type,S.type)||this.Ha(E.doc,S.doc)),this.tu(s),o=o!=null&&o;const m=t&&!o?this.nu():[],p=this.ja.size===0&&this.current&&!o?1:0,g=p!==this.za;return this.za=p,h.length!==0||g?{snapshot:new po(this.query,e.Ja,u,h,e.mutatedKeys,p===0,g,!1,!!s&&s.resumeToken.approximateByteSize()>0),ru:m}:{ru:m}}Da(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ja:this.Ja,Xa:new dT,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{ru:[]}}iu(e){return!this.Ga.has(e)&&!!this.Ja.has(e)&&!this.Ja.get(e).hasLocalMutations}tu(e){e&&(e.addedDocuments.forEach(t=>this.Ga=this.Ga.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ga=this.Ga.delete(t)),this.current=e.current)}nu(){if(!this.current)return[];const e=this.ja;this.ja=Pe(),this.Ja.forEach(s=>{this.iu(s.key)&&(this.ja=this.ja.add(s.key))});const t=[];return e.forEach(s=>{this.ja.has(s)||t.push(new Iw(s))}),this.ja.forEach(s=>{e.has(s)||t.push(new Rw(s))}),t}su(e){this.Ga=e.$s,this.ja=Pe();const t=this.Za(e.documents);return this.applyChanges(t,!0)}ou(){return po.fromInitialDocuments(this.query,this.Ja,this.mutatedKeys,this.za===0,this.hasCachedResults)}}const Zp="SyncEngine";class hV{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class fV{constructor(e){this.key=e,this._u=!1}}class dV{constructor(e,t,s,o,u,h){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=o,this.currentUser=u,this.maxConcurrentLimboResolutions=h,this.au={},this.uu=new ra(m=>qA(m),Qh),this.cu=new Map,this.lu=new Set,this.hu=new rt(me.comparator),this.Pu=new Map,this.Tu=new jp,this.Iu={},this.Eu=new Map,this.du=mo.lr(),this.onlineState="Unknown",this.Au=void 0}get isPrimaryClient(){return this.Au===!0}}async function mV(i,e,t=!0){const s=Vw(i);let o;const u=s.uu.get(e);return u?(s.sharedClientState.addLocalQueryTarget(u.targetId),o=u.view.ou()):o=await Cw(s,e,t,!0),o}async function pV(i,e){const t=Vw(i);await Cw(t,e,!0,!1)}async function Cw(i,e,t,s){const o=await xM(i.localStore,_i(e)),u=o.targetId,h=i.sharedClientState.addLocalQueryTarget(u,t);let m;return s&&(m=await gV(i,e,u,h==="current",o.resumeToken)),i.isPrimaryClient&&t&&yw(i.remoteStore,o),m}async function gV(i,e,t,s,o){i.Ru=(S,w,D)=>async function(G,H,K,ne){let te=H.view.Za(K);te.Cs&&(te=await oT(G.localStore,H.query,!1).then(({documents:V})=>H.view.Za(V,te)));const oe=ne&&ne.targetChanges.get(H.targetId),ue=ne&&ne.targetMismatches.get(H.targetId)!=null,Ae=H.view.applyChanges(te,G.isPrimaryClient,oe,ue);return yT(G,H.targetId,Ae.ru),Ae.snapshot}(i,S,w,D);const u=await oT(i.localStore,e,!0),h=new cV(e,u.$s),m=h.Za(u.documents),p=_u.createSynthesizedTargetChangeForCurrentChange(t,s&&i.onlineState!=="Offline",o),g=h.applyChanges(m,i.isPrimaryClient,p);yT(i,t,g.ru);const E=new hV(e,t,h);return i.uu.set(e,E),i.cu.has(t)?i.cu.get(t).push(e):i.cu.set(t,[e]),g.snapshot}async function yV(i,e,t){const s=be(i),o=s.uu.get(e),u=s.cu.get(o.targetId);if(u.length>1)return s.cu.set(o.targetId,u.filter(h=>!Qh(h,e))),void s.uu.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(o.targetId),s.sharedClientState.isActiveQueryTarget(o.targetId)||await tp(s.localStore,o.targetId,!1).then(()=>{s.sharedClientState.clearQueryState(o.targetId),t&&Gp(s.remoteStore,o.targetId),rp(s,o.targetId)}).catch(Eo)):(rp(s,o.targetId),await tp(s.localStore,o.targetId,!0))}async function _V(i,e){const t=be(i),s=t.uu.get(e),o=t.cu.get(s.targetId);t.isPrimaryClient&&o.length===1&&(t.sharedClientState.removeLocalQueryTarget(s.targetId),Gp(t.remoteStore,s.targetId))}async function vV(i,e,t){const s=RV(i);try{const o=await function(h,m){const p=be(h),g=Ct.now(),E=m.reduce((D,P)=>D.add(P.key),Pe());let S,w;return p.persistence.runTransaction("Locally write mutations","readwrite",D=>{let P=sr(),G=Pe();return p.Bs.getEntries(D,E).next(H=>{P=H,P.forEach((K,ne)=>{ne.isValidDocument()||(G=G.add(K))})}).next(()=>p.localDocuments.getOverlayedDocuments(D,P)).next(H=>{S=H;const K=[];for(const ne of m){const te=xN(ne,S.get(ne.key).overlayedDocument);te!=null&&K.push(new sa(ne.key,te,PA(te.value.mapValue),vi.exists(!0)))}return p.mutationQueue.addMutationBatch(D,g,K,m)}).next(H=>{w=H;const K=H.applyToLocalDocumentSet(S,G);return p.documentOverlayCache.saveOverlays(D,H.batchId,K)})}).then(()=>({batchId:w.batchId,changes:GA(S)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(o.batchId),function(h,m,p){let g=h.Iu[h.currentUser.toKey()];g||(g=new rt(Ce)),g=g.insert(m,p),h.Iu[h.currentUser.toKey()]=g}(s,o.batchId,t),await Eu(s,o.changes),await nf(s.remoteStore)}catch(o){const u=Xp(o,"Failed to persist write");t.reject(u)}}async function Dw(i,e){const t=be(i);try{const s=await MM(t.localStore,e);e.targetChanges.forEach((o,u)=>{const h=t.Pu.get(u);h&&(He(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1,22616),o.addedDocuments.size>0?h._u=!0:o.modifiedDocuments.size>0?He(h._u,14607):o.removedDocuments.size>0&&(He(h._u,42227),h._u=!1))}),await Eu(t,s,e)}catch(s){await Eo(s)}}function gT(i,e,t){const s=be(i);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const o=[];s.uu.forEach((u,h)=>{const m=h.view.Da(e);m.snapshot&&o.push(m.snapshot)}),function(h,m){const p=be(h);p.onlineState=m;let g=!1;p.queries.forEach((E,S)=>{for(const w of S.ya)w.Da(m)&&(g=!0)}),g&&Wp(p)}(s.eventManager,e),o.length&&s.au.j_(o),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function EV(i,e,t){const s=be(i);s.sharedClientState.updateQueryState(e,"rejected",t);const o=s.Pu.get(e),u=o&&o.key;if(u){let h=new rt(me.comparator);h=h.insert(u,Wt.newNoDocument(u,Se.min()));const m=Pe().add(u),p=new Jh(Se.min(),new Map,new rt(Ce),h,m);await Dw(s,p),s.hu=s.hu.remove(u),s.Pu.delete(e),Jp(s)}else await tp(s.localStore,e,!1).then(()=>rp(s,e,t)).catch(Eo)}async function TV(i,e){const t=be(i),s=e.batch.batchId;try{const o=await NM(t.localStore,e);Nw(t,s,null),Ow(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await Eu(t,o)}catch(o){await Eo(o)}}async function AV(i,e,t){const s=be(i);try{const o=await function(h,m){const p=be(h);return p.persistence.runTransaction("Reject batch","readwrite-primary",g=>{let E;return p.mutationQueue.lookupMutationBatch(g,m).next(S=>(He(S!==null,37113),E=S.keys(),p.mutationQueue.removeMutationBatch(g,S))).next(()=>p.mutationQueue.performConsistencyCheck(g)).next(()=>p.documentOverlayCache.removeOverlaysForBatchId(g,E,m)).next(()=>p.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(g,E)).next(()=>p.localDocuments.getDocuments(g,E))})}(s.localStore,e);Nw(s,e,t),Ow(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await Eu(s,o)}catch(o){await Eo(o)}}function Ow(i,e){(i.Eu.get(e)||[]).forEach(t=>{t.resolve()}),i.Eu.delete(e)}function Nw(i,e,t){const s=be(i);let o=s.Iu[s.currentUser.toKey()];if(o){const u=o.get(e);u&&(t?u.reject(t):u.resolve(),o=o.remove(e)),s.Iu[s.currentUser.toKey()]=o}}function rp(i,e,t=null){i.sharedClientState.removeLocalQueryTarget(e);for(const s of i.cu.get(e))i.uu.delete(s),t&&i.au.Vu(s,t);i.cu.delete(e),i.isPrimaryClient&&i.Tu.Hr(e).forEach(s=>{i.Tu.containsKey(s)||Mw(i,s)})}function Mw(i,e){i.lu.delete(e.path.canonicalString());const t=i.hu.get(e);t!==null&&(Gp(i.remoteStore,t),i.hu=i.hu.remove(e),i.Pu.delete(t),Jp(i))}function yT(i,e,t){for(const s of t)s instanceof Rw?(i.Tu.addReference(s.key,e),wV(i,s)):s instanceof Iw?(le(Zp,"Document no longer in limbo: "+s.key),i.Tu.removeReference(s.key,e),i.Tu.containsKey(s.key)||Mw(i,s.key)):ve(19791,{mu:s})}function wV(i,e){const t=e.key,s=t.path.canonicalString();i.hu.get(t)||i.lu.has(s)||(le(Zp,"New document in limbo: "+t),i.lu.add(s),Jp(i))}function Jp(i){for(;i.lu.size>0&&i.hu.size<i.maxConcurrentLimboResolutions;){const e=i.lu.values().next().value;i.lu.delete(e);const t=new me(et.fromString(e)),s=i.du.next();i.Pu.set(s,new fV(t)),i.hu=i.hu.insert(t,s),yw(i.remoteStore,new qr(_i(kp(t.path)),s,"TargetPurposeLimboResolution",Kh.le))}}async function Eu(i,e,t){const s=be(i),o=[],u=[],h=[];s.uu.isEmpty()||(s.uu.forEach((m,p)=>{h.push(s.Ru(p,e,t).then(g=>{var E;if((g||t)&&s.isPrimaryClient){const S=g?!g.fromCache:(E=t==null?void 0:t.targetChanges.get(p.targetId))===null||E===void 0?void 0:E.current;s.sharedClientState.updateQueryState(p.targetId,S?"current":"not-current")}if(g){o.push(g);const S=Hp.Rs(p.targetId,g);u.push(S)}}))}),await Promise.all(h),s.au.j_(o),await async function(p,g){const E=be(p);try{await E.persistence.runTransaction("notifyLocalViewChanges","readwrite",S=>Z.forEach(g,w=>Z.forEach(w.ds,D=>E.persistence.referenceDelegate.addReference(S,w.targetId,D)).next(()=>Z.forEach(w.As,D=>E.persistence.referenceDelegate.removeReference(S,w.targetId,D)))))}catch(S){if(!To(S))throw S;le(Fp,"Failed to update sequence numbers: "+S)}for(const S of g){const w=S.targetId;if(!S.fromCache){const D=E.xs.get(w),P=D.snapshotVersion,G=D.withLastLimboFreeSnapshotVersion(P);E.xs=E.xs.insert(w,G)}}}(s.localStore,u))}async function SV(i,e){const t=be(i);if(!t.currentUser.isEqual(e)){le(Zp,"User change. New user:",e.toKey());const s=await dw(t.localStore,e);t.currentUser=e,function(u,h){u.Eu.forEach(m=>{m.forEach(p=>{p.reject(new ce(J.CANCELLED,h))})}),u.Eu.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Eu(t,s.ks)}}function bV(i,e){const t=be(i),s=t.Pu.get(e);if(s&&s._u)return Pe().add(s.key);{let o=Pe();const u=t.cu.get(e);if(!u)return o;for(const h of u){const m=t.uu.get(h);o=o.unionWith(m.view.Ya)}return o}}function Vw(i){const e=be(i);return e.remoteStore.remoteSyncer.applyRemoteEvent=Dw.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=bV.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=EV.bind(null,e),e.au.j_=lV.bind(null,e.eventManager),e.au.Vu=uV.bind(null,e.eventManager),e}function RV(i){const e=be(i);return e.remoteStore.remoteSyncer.applySuccessfulWrite=TV.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=AV.bind(null,e),e}class Vh{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=ef(e.databaseInfo.databaseId),this.sharedClientState=this.pu(e),this.persistence=this.yu(e),await this.persistence.start(),this.localStore=this.wu(e),this.gcScheduler=this.Su(e,this.localStore),this.indexBackfillerScheduler=this.bu(e,this.localStore)}Su(e,t){return null}bu(e,t){return null}wu(e){return OM(this.persistence,new IM,e.initialUser,this.serializer)}yu(e){return new fw(qp.fi,this.serializer)}pu(e){return new LM}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Vh.provider={build:()=>new Vh};class IV extends Vh{constructor(e){super(),this.cacheSizeBytes=e}Su(e,t){He(this.persistence.referenceDelegate instanceof Nh,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new fM(s,e.asyncQueue,t)}yu(e){const t=this.cacheSizeBytes!==void 0?ln.withCacheSize(this.cacheSizeBytes):ln.DEFAULT;return new fw(s=>Nh.fi(s,t),this.serializer)}}class sp{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>gT(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=SV.bind(null,this.syncEngine),await sV(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new oV}()}createDatastore(e){const t=ef(e.databaseInfo.databaseId),s=function(u){return new qM(u)}(e.databaseInfo);return function(u,h,m,p){return new KM(u,h,m,p)}(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return function(s,o,u,h,m){return new YM(s,o,u,h,m)}(this.localStore,this.datastore,e.asyncQueue,t=>gT(this.syncEngine,t,0),function(){return cT.C()?new cT:new UM}())}createSyncEngine(e,t){return function(o,u,h,m,p,g,E){const S=new dV(o,u,h,m,p,g);return E&&(S.Au=!0),S}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(o){const u=be(o);le(Xs,"RemoteStore shutting down."),u.Ta.add(5),await vu(u),u.Ea.shutdown(),u.da.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}sp.provider={build:()=>new sp};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pw{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.vu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.vu(this.observer.error,e):rr("Uncaught Error in snapshot listener:",e.toString()))}Cu(){this.muted=!0}vu(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jr="FirestoreClient";class CV{constructor(e,t,s,o,u){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this.databaseInfo=o,this.user=Xt.UNAUTHENTICATED,this.clientId=SA.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=u,this.authCredentials.start(s,async h=>{le(Jr,"Received user=",h.uid),await this.authCredentialListener(h),this.user=h}),this.appCheckCredentials.start(s,h=>(le(Jr,"Received new app check token=",h),this.appCheckCredentialListener(h,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new er;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=Xp(t,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function Dm(i,e){i.asyncQueue.verifyOperationInProgress(),le(Jr,"Initializing OfflineComponentProvider");const t=i.configuration;await e.initialize(t);let s=t.initialUser;i.setCredentialChangeListener(async o=>{s.isEqual(o)||(await dw(e.localStore,o),s=o)}),e.persistence.setDatabaseDeletedListener(()=>i.terminate()),i._offlineComponents=e}async function _T(i,e){i.asyncQueue.verifyOperationInProgress();const t=await DV(i);le(Jr,"Initializing OnlineComponentProvider"),await e.initialize(t,i.configuration),i.setCredentialChangeListener(s=>fT(e.remoteStore,s)),i.setAppCheckTokenChangeListener((s,o)=>fT(e.remoteStore,o)),i._onlineComponents=e}async function DV(i){if(!i._offlineComponents)if(i._uninitializedComponentsProvider){le(Jr,"Using user provided OfflineComponentProvider");try{await Dm(i,i._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(o){return o.name==="FirebaseError"?o.code===J.FAILED_PRECONDITION||o.code===J.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11}(t))throw t;uo("Error using user provided cache. Falling back to memory cache: "+t),await Dm(i,new Vh)}}else le(Jr,"Using default OfflineComponentProvider"),await Dm(i,new IV(void 0));return i._offlineComponents}async function xw(i){return i._onlineComponents||(i._uninitializedComponentsProvider?(le(Jr,"Using user provided OnlineComponentProvider"),await _T(i,i._uninitializedComponentsProvider._online)):(le(Jr,"Using default OnlineComponentProvider"),await _T(i,new sp))),i._onlineComponents}function OV(i){return xw(i).then(e=>e.syncEngine)}async function kw(i){const e=await xw(i),t=e.eventManager;return t.onListen=mV.bind(null,e.syncEngine),t.onUnlisten=yV.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=pV.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=_V.bind(null,e.syncEngine),t}function NV(i,e,t={}){const s=new er;return i.asyncQueue.enqueueAndForget(async()=>function(u,h,m,p,g){const E=new Pw({next:w=>{E.Cu(),h.enqueueAndForget(()=>Sw(u,S));const D=w.docs.has(m);!D&&w.fromCache?g.reject(new ce(J.UNAVAILABLE,"Failed to get document because the client is offline.")):D&&w.fromCache&&p&&p.source==="server"?g.reject(new ce(J.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):g.resolve(w)},error:w=>g.reject(w)}),S=new bw(kp(m.path),E,{includeMetadataChanges:!0,La:!0});return ww(u,S)}(await kw(i),i.asyncQueue,e,t,s)),s.promise}function MV(i,e,t={}){const s=new er;return i.asyncQueue.enqueueAndForget(async()=>function(u,h,m,p,g){const E=new Pw({next:w=>{E.Cu(),h.enqueueAndForget(()=>Sw(u,S)),w.fromCache&&p.source==="server"?g.reject(new ce(J.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):g.resolve(w)},error:w=>g.reject(w)}),S=new bw(m,E,{includeMetadataChanges:!0,La:!0});return ww(u,S)}(await kw(i),i.asyncQueue,e,t,s)),s.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lw(i){const e={};return i.timeoutSeconds!==void 0&&(e.timeoutSeconds=i.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vT=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uw(i,e,t){if(!t)throw new ce(J.INVALID_ARGUMENT,`Function ${i}() cannot be called with an empty ${e}.`)}function VV(i,e,t,s){if(e===!0&&s===!0)throw new ce(J.INVALID_ARGUMENT,`${i} and ${t} cannot be used together.`)}function ET(i){if(!me.isDocumentKey(i))throw new ce(J.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${i} has ${i.length}.`)}function TT(i){if(me.isDocumentKey(i))throw new ce(J.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${i} has ${i.length}.`)}function rf(i){if(i===void 0)return"undefined";if(i===null)return"null";if(typeof i=="string")return i.length>20&&(i=`${i.substring(0,20)}...`),JSON.stringify(i);if(typeof i=="number"||typeof i=="boolean")return""+i;if(typeof i=="object"){if(i instanceof Array)return"an array";{const e=function(s){return s.constructor?s.constructor.name:null}(i);return e?`a custom ${e} object`:"an object"}}return typeof i=="function"?"a function":ve(12329,{type:typeof i})}function es(i,e){if("_delegate"in i&&(i=i._delegate),!(i instanceof e)){if(e.name===i.constructor.name)throw new ce(J.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=rf(i);throw new ce(J.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zw="firestore.googleapis.com",AT=!0;class wT{constructor(e){var t,s;if(e.host===void 0){if(e.ssl!==void 0)throw new ce(J.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=zw,this.ssl=AT}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:AT;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=hw;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<cM)throw new ce(J.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}VV("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Lw((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(u){if(u.timeoutSeconds!==void 0){if(isNaN(u.timeoutSeconds))throw new ce(J.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (must not be NaN)`);if(u.timeoutSeconds<5)throw new ce(J.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (minimum allowed value is 5)`);if(u.timeoutSeconds>30)throw new ce(J.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(s,o){return s.timeoutSeconds===o.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class sf{constructor(e,t,s,o){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new wT({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ce(J.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ce(J.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new wT(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new BO;switch(s.type){case"firstParty":return new FO(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new ce(J.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const s=vT.get(t);s&&(le("ComponentProvider","Removing Datastore"),vT.delete(t),s.terminate())}(this),Promise.resolve()}}function PV(i,e,t,s={}){var o;i=es(i,sf);const u=Js(e),h=i._getSettings(),m=Object.assign(Object.assign({},h),{emulatorOptions:i._getEmulatorOptions()}),p=`${e}:${t}`;u&&(dp(`https://${p}`),mp("Firestore",!0)),h.host!==zw&&h.host!==p&&uo("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const g=Object.assign(Object.assign({},h),{host:p,ssl:u,emulatorOptions:s});if(!$r(g,m)&&(i._setSettings(g),s.mockUserToken)){let E,S;if(typeof s.mockUserToken=="string")E=s.mockUserToken,S=Xt.MOCK_USER;else{E=i0(s.mockUserToken,(o=i._app)===null||o===void 0?void 0:o.options.projectId);const w=s.mockUserToken.sub||s.mockUserToken.user_id;if(!w)throw new ce(J.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");S=new Xt(w)}i._authCredentials=new jO(new AA(E,S))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wo{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new wo(this.firestore,e,this._query)}}class hn{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Kr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new hn(this.firestore,e,this._key)}}class Kr extends wo{constructor(e,t,s){super(e,t,kp(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new hn(this.firestore,null,new me(e))}withConverter(e){return new Kr(this.firestore,e,this._path)}}function Bw(i,e,...t){if(i=Tt(i),Uw("collection","path",e),i instanceof sf){const s=et.fromString(e,...t);return TT(s),new Kr(i,null,s)}{if(!(i instanceof hn||i instanceof Kr))throw new ce(J.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=i._path.child(et.fromString(e,...t));return TT(s),new Kr(i.firestore,null,s)}}function jw(i,e,...t){if(i=Tt(i),arguments.length===1&&(e=SA.newId()),Uw("doc","path",e),i instanceof sf){const s=et.fromString(e,...t);return ET(s),new hn(i,null,new me(s))}{if(!(i instanceof hn||i instanceof Kr))throw new ce(J.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=i._path.child(et.fromString(e,...t));return ET(s),new hn(i.firestore,i instanceof Kr?i.converter:null,new me(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ST="AsyncQueue";class bT{constructor(e=Promise.resolve()){this.zu=[],this.ju=!1,this.Hu=[],this.Ju=null,this.Yu=!1,this.Zu=!1,this.Xu=[],this.C_=new pw(this,"async_queue_retry"),this.ec=()=>{const s=Cm();s&&le(ST,"Visibility state changed to "+s.visibilityState),this.C_.p_()},this.tc=e;const t=Cm();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.ec)}get isShuttingDown(){return this.ju}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.nc(),this.rc(e)}enterRestrictedMode(e){if(!this.ju){this.ju=!0,this.Zu=e||!1;const t=Cm();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.ec)}}enqueue(e){if(this.nc(),this.ju)return new Promise(()=>{});const t=new er;return this.rc(()=>this.ju&&this.Zu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.zu.push(e),this.sc()))}async sc(){if(this.zu.length!==0){try{await this.zu[0](),this.zu.shift(),this.C_.reset()}catch(e){if(!To(e))throw e;le(ST,"Operation failed with retryable error: "+e)}this.zu.length>0&&this.C_.f_(()=>this.sc())}}rc(e){const t=this.tc.then(()=>(this.Yu=!0,e().catch(s=>{throw this.Ju=s,this.Yu=!1,rr("INTERNAL UNHANDLED ERROR: ",RT(s)),s}).then(s=>(this.Yu=!1,s))));return this.tc=t,t}enqueueAfterDelay(e,t,s){this.nc(),this.Xu.indexOf(e)>-1&&(t=0);const o=Qp.createAndSchedule(this,e,t,s,u=>this.oc(u));return this.Hu.push(o),o}nc(){this.Ju&&ve(47125,{_c:RT(this.Ju)})}verifyOperationInProgress(){}async ac(){let e;do e=this.tc,await e;while(e!==this.tc)}uc(e){for(const t of this.Hu)if(t.timerId===e)return!0;return!1}cc(e){return this.ac().then(()=>{this.Hu.sort((t,s)=>t.targetTimeMs-s.targetTimeMs);for(const t of this.Hu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.ac()})}lc(e){this.Xu.push(e)}oc(e){const t=this.Hu.indexOf(e);this.Hu.splice(t,1)}}function RT(i){let e=i.message||"";return i.stack&&(e=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),e}class Tu extends sf{constructor(e,t,s,o){super(e,t,s,o),this.type="firestore",this._queue=new bT,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new bT(e),this._firestoreClient=void 0,await e}}}function xV(i,e){const t=typeof i=="object"?i:Bh(),s=typeof i=="string"?i:bh,o=ts(t,"firestore").getImmediate({identifier:s});if(!o._initialized){const u=e0("firestore");u&&PV(o,...u)}return o}function eg(i){if(i._terminated)throw new ce(J.FAILED_PRECONDITION,"The client has already been terminated.");return i._firestoreClient||kV(i),i._firestoreClient}function kV(i){var e,t,s;const o=i._freezeSettings(),u=function(m,p,g,E){return new sN(m,p,g,E.host,E.ssl,E.experimentalForceLongPolling,E.experimentalAutoDetectLongPolling,Lw(E.experimentalLongPollingOptions),E.useFetchStreams,E.isUsingEmulator)}(i._databaseId,((e=i._app)===null||e===void 0?void 0:e.options.appId)||"",i._persistenceKey,o);i._componentsProvider||!((t=o.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((s=o.localCache)===null||s===void 0)&&s._onlineComponentProvider)&&(i._componentsProvider={_offline:o.localCache._offlineComponentProvider,_online:o.localCache._onlineComponentProvider}),i._firestoreClient=new CV(i._authCredentials,i._appCheckCredentials,i._queue,u,i._componentsProvider&&function(m){const p=m==null?void 0:m._online.build();return{_offline:m==null?void 0:m._offline.build(p),_online:p}}(i._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class go{constructor(e){this._byteString=e}static fromBase64String(e){try{return new go(Gt.fromBase64String(e))}catch(t){throw new ce(J.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new go(Gt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tg{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new ce(J.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ft(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ng{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ig{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new ce(J.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new ce(J.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Ce(this._lat,e._lat)||Ce(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rg{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(s,o){if(s.length!==o.length)return!1;for(let u=0;u<s.length;++u)if(s[u]!==o[u])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LV=/^__.*__$/;class UV{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return this.fieldMask!==null?new sa(e,this.data,this.fieldMask,t,this.fieldTransforms):new yu(e,this.data,t,this.fieldTransforms)}}function qw(i){switch(i){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ve(40011,{hc:i})}}class sg{constructor(e,t,s,o,u,h){this.settings=e,this.databaseId=t,this.serializer=s,this.ignoreUndefinedProperties=o,u===void 0&&this.Pc(),this.fieldTransforms=u||[],this.fieldMask=h||[]}get path(){return this.settings.path}get hc(){return this.settings.hc}Tc(e){return new sg(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ic(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.Tc({path:s,Ec:!1});return o.dc(e),o}Ac(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.Tc({path:s,Ec:!1});return o.Pc(),o}Rc(e){return this.Tc({path:void 0,Ec:!0})}Vc(e){return Ph(e,this.settings.methodName,this.settings.mc||!1,this.path,this.settings.fc)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Pc(){if(this.path)for(let e=0;e<this.path.length;e++)this.dc(this.path.get(e))}dc(e){if(e.length===0)throw this.Vc("Document fields must not be empty");if(qw(this.hc)&&LV.test(e))throw this.Vc('Document fields cannot begin and end with "__"')}}class zV{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=s||ef(e)}gc(e,t,s,o=!1){return new sg({hc:e,methodName:t,fc:s,path:Ft.emptyPath(),Ec:!1,mc:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function ag(i){const e=i._freezeSettings(),t=ef(i._databaseId);return new zV(i._databaseId,!!e.ignoreUndefinedProperties,t)}function Hw(i,e,t,s,o,u={}){const h=i.gc(u.merge||u.mergeFields?2:0,e,t,o);Kw("Data must be an object, but it was:",h,s);const m=Fw(s,h);let p,g;if(u.merge)p=new $n(h.fieldMask),g=h.fieldTransforms;else if(u.mergeFields){const E=[];for(const S of u.mergeFields){const w=jV(e,S,t);if(!h.contains(w))throw new ce(J.INVALID_ARGUMENT,`Field '${w}' is specified in your field mask but missing from your input data.`);HV(E,w)||E.push(w)}p=new $n(E),g=h.fieldTransforms.filter(S=>p.covers(S.field))}else p=null,g=h.fieldTransforms;return new UV(new Ln(m),p,g)}class og extends ng{_toFieldTransform(e){return new NN(e.path,new su)}isEqual(e){return e instanceof og}}function BV(i,e,t,s=!1){return lg(t,i.gc(s?4:3,e))}function lg(i,e){if(Gw(i=Tt(i)))return Kw("Unsupported field value:",e,i),Fw(i,e);if(i instanceof ng)return function(s,o){if(!qw(o.hc))throw o.Vc(`${s._methodName}() can only be used with update() and set()`);if(!o.path)throw o.Vc(`${s._methodName}() is not currently supported inside arrays`);const u=s._toFieldTransform(o);u&&o.fieldTransforms.push(u)}(i,e),null;if(i===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),i instanceof Array){if(e.settings.Ec&&e.hc!==4)throw e.Vc("Nested arrays are not supported");return function(s,o){const u=[];let h=0;for(const m of s){let p=lg(m,o.Rc(h));p==null&&(p={nullValue:"NULL_VALUE"}),u.push(p),h++}return{arrayValue:{values:u}}}(i,e)}return function(s,o){if((s=Tt(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return CN(o.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const u=Ct.fromDate(s);return{timestampValue:Oh(o.serializer,u)}}if(s instanceof Ct){const u=new Ct(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:Oh(o.serializer,u)}}if(s instanceof ig)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof go)return{bytesValue:rw(o.serializer,s._byteString)};if(s instanceof hn){const u=o.databaseId,h=s.firestore._databaseId;if(!h.isEqual(u))throw o.Vc(`Document reference is for database ${h.projectId}/${h.database} but should be for database ${u.projectId}/${u.database}`);return{referenceValue:Bp(s.firestore._databaseId||o.databaseId,s._key.path)}}if(s instanceof rg)return function(h,m){return{mapValue:{fields:{[MA]:{stringValue:VA},[Rh]:{arrayValue:{values:h.toArray().map(g=>{if(typeof g!="number")throw m.Vc("VectorValues must only contain numeric values.");return Lp(m.serializer,g)})}}}}}}(s,o);throw o.Vc(`Unsupported field value: ${rf(s)}`)}(i,e)}function Fw(i,e){const t={};return RA(i)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ia(i,(s,o)=>{const u=lg(o,e.Ic(s));u!=null&&(t[s]=u)}),{mapValue:{fields:t}}}function Gw(i){return!(typeof i!="object"||i===null||i instanceof Array||i instanceof Date||i instanceof Ct||i instanceof ig||i instanceof go||i instanceof hn||i instanceof ng||i instanceof rg)}function Kw(i,e,t){if(!Gw(t)||!function(o){return typeof o=="object"&&o!==null&&(Object.getPrototypeOf(o)===Object.prototype||Object.getPrototypeOf(o)===null)}(t)){const s=rf(t);throw s==="an object"?e.Vc(i+" a custom object"):e.Vc(i+" "+s)}}function jV(i,e,t){if((e=Tt(e))instanceof tg)return e._internalPath;if(typeof e=="string")return $w(i,e);throw Ph("Field path arguments must be of type string or ",i,!1,void 0,t)}const qV=new RegExp("[~\\*/\\[\\]]");function $w(i,e,t){if(e.search(qV)>=0)throw Ph(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,i,!1,void 0,t);try{return new tg(...e.split("."))._internalPath}catch{throw Ph(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,i,!1,void 0,t)}}function Ph(i,e,t,s,o){const u=s&&!s.isEmpty(),h=o!==void 0;let m=`Function ${e}() called with invalid data`;t&&(m+=" (via `toFirestore()`)"),m+=". ";let p="";return(u||h)&&(p+=" (found",u&&(p+=` in field ${s}`),h&&(p+=` in document ${o}`),p+=")"),new ce(J.INVALID_ARGUMENT,m+i+p)}function HV(i,e){return i.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yw{constructor(e,t,s,o,u){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=o,this._converter=u}get id(){return this._key.path.lastSegment()}get ref(){return new hn(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new FV(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(ug("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class FV extends Yw{data(){return super.data()}}function ug(i,e){return typeof e=="string"?$w(i,e):e instanceof tg?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GV(i){if(i.limitType==="L"&&i.explicitOrderBy.length===0)throw new ce(J.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class cg{}class KV extends cg{}function $V(i,e,...t){let s=[];e instanceof cg&&s.push(e),s=s.concat(t),function(u){const h=u.filter(p=>p instanceof hg).length,m=u.filter(p=>p instanceof af).length;if(h>1||h>0&&m>0)throw new ce(J.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(s);for(const o of s)i=o._apply(i);return i}class af extends KV{constructor(e,t,s){super(),this._field=e,this._op=t,this._value=s,this.type="where"}static _create(e,t,s){return new af(e,t,s)}_apply(e){const t=this._parse(e);return Qw(e._query,t),new wo(e.firestore,e.converter,Qm(e._query,t))}_parse(e){const t=ag(e.firestore);return function(u,h,m,p,g,E,S){let w;if(g.isKeyField()){if(E==="array-contains"||E==="array-contains-any")throw new ce(J.INVALID_ARGUMENT,`Invalid Query. You can't perform '${E}' queries on documentId().`);if(E==="in"||E==="not-in"){CT(S,E);const P=[];for(const G of S)P.push(IT(p,u,G));w={arrayValue:{values:P}}}else w=IT(p,u,S)}else E!=="in"&&E!=="not-in"&&E!=="array-contains-any"||CT(S,E),w=BV(m,h,S,E==="in"||E==="not-in");return Et.create(g,E,w)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function YV(i,e,t){const s=e,o=ug("where",i);return af._create(o,s,t)}class hg extends cg{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new hg(e,t)}_parse(e){const t=this._queryConstraints.map(s=>s._parse(e)).filter(s=>s.getFilters().length>0);return t.length===1?t[0]:Xn.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(o,u){let h=o;const m=u.getFlattenedFilters();for(const p of m)Qw(h,p),h=Qm(h,p)}(e._query,t),new wo(e.firestore,e.converter,Qm(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function IT(i,e,t){if(typeof(t=Tt(t))=="string"){if(t==="")throw new ce(J.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!jA(e)&&t.indexOf("/")!==-1)throw new ce(J.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const s=e.path.child(et.fromString(t));if(!me.isDocumentKey(s))throw new ce(J.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return qE(i,new me(s))}if(t instanceof hn)return qE(i,t._key);throw new ce(J.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${rf(t)}.`)}function CT(i,e){if(!Array.isArray(i)||i.length===0)throw new ce(J.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Qw(i,e){const t=function(o,u){for(const h of o)for(const m of h.getFlattenedFilters())if(u.indexOf(m.op)>=0)return m.op;return null}(i.filters,function(o){switch(o){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new ce(J.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new ce(J.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class QV{convertValue(e,t="none"){switch(Wr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return mt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Xr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw ve(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const s={};return ia(e,(o,u)=>{s[o]=this.convertValue(u,t)}),s}convertVectorValue(e){var t,s,o;const u=(o=(s=(t=e.fields)===null||t===void 0?void 0:t[Rh].arrayValue)===null||s===void 0?void 0:s.values)===null||o===void 0?void 0:o.map(h=>mt(h.doubleValue));return new rg(u)}convertGeoPoint(e){return new ig(mt(e.latitude),mt(e.longitude))}convertArray(e,t){return(e.values||[]).map(s=>this.convertValue(s,t))}convertServerTimestamp(e,t){switch(t){case"previous":const s=Yh(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(nu(e));default:return null}}convertTimestamp(e){const t=Qr(e);return new Ct(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=et.fromString(e);He(cw(s),9688,{name:e});const o=new iu(s.get(1),s.get(3)),u=new me(s.popFirst(5));return o.isEqual(t)||rr(`Document ${u} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xw(i,e,t){let s;return s=i?i.toFirestore(e):e,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ql{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Ww extends Yw{constructor(e,t,s,o,u,h){super(e,t,s,o,h),this._firestore=e,this._firestoreImpl=e,this.metadata=u}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new fh(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(ug("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}}class fh extends Ww{data(e={}){return super.data(e)}}class XV{constructor(e,t,s,o){this._firestore=e,this._userDataWriter=t,this._snapshot=o,this.metadata=new ql(o.hasPendingWrites,o.fromCache),this.query=s}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(s=>{e.call(t,new fh(this._firestore,this._userDataWriter,s.key,s,new ql(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new ce(J.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(o,u){if(o._snapshot.oldDocs.isEmpty()){let h=0;return o._snapshot.docChanges.map(m=>{const p=new fh(o._firestore,o._userDataWriter,m.doc.key,m.doc,new ql(o._snapshot.mutatedKeys.has(m.doc.key),o._snapshot.fromCache),o.query.converter);return m.doc,{type:"added",doc:p,oldIndex:-1,newIndex:h++}})}{let h=o._snapshot.oldDocs;return o._snapshot.docChanges.filter(m=>u||m.type!==3).map(m=>{const p=new fh(o._firestore,o._userDataWriter,m.doc.key,m.doc,new ql(o._snapshot.mutatedKeys.has(m.doc.key),o._snapshot.fromCache),o.query.converter);let g=-1,E=-1;return m.type!==0&&(g=h.indexOf(m.doc.key),h=h.delete(m.doc.key)),m.type!==1&&(h=h.add(m.doc),E=h.indexOf(m.doc.key)),{type:WV(m.type),doc:p,oldIndex:g,newIndex:E}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function WV(i){switch(i){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ve(61501,{type:i})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZV(i){i=es(i,hn);const e=es(i.firestore,Tu);return NV(eg(e),i._key).then(t=>nP(e,i,t))}class Zw extends QV{constructor(e){super(),this.firestore=e}convertBytes(e){return new go(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new hn(this.firestore,null,t)}}function JV(i){i=es(i,wo);const e=es(i.firestore,Tu),t=eg(e),s=new Zw(e);return GV(i._query),MV(t,i._query).then(o=>new XV(e,s,i,o))}function eP(i,e,t){i=es(i,hn);const s=es(i.firestore,Tu),o=Xw(i.converter,e);return Jw(s,[Hw(ag(s),"setDoc",i._key,o,i.converter!==null,t).toMutation(i._key,vi.none())])}function tP(i,e){const t=es(i.firestore,Tu),s=jw(i),o=Xw(i.converter,e);return Jw(t,[Hw(ag(i.firestore),"addDoc",s._key,o,i.converter!==null,{}).toMutation(s._key,vi.exists(!1))]).then(()=>s)}function Jw(i,e){return function(s,o){const u=new er;return s.asyncQueue.enqueueAndForget(async()=>vV(await OV(s),o,u)),u.promise}(eg(i),e)}function nP(i,e,t){const s=t.docs.get(e._key),o=new Zw(i);return new Ww(i,o,e._key,s,new ql(t.hasPendingWrites,t.fromCache),e.converter)}function iP(){return new og("serverTimestamp")}(function(e,t=!0){(function(o){vo=o})(ta),Yn(new Un("firestore",(s,{instanceIdentifier:o,options:u})=>{const h=s.getProvider("app").getImmediate(),m=new Tu(new qO(s.getProvider("auth-internal")),new GO(h,s.getProvider("app-check-internal")),function(g,E){if(!Object.prototype.hasOwnProperty.apply(g.options,["projectId"]))throw new ce(J.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new iu(g.options.projectId,E)}(h,o),h);return u=Object.assign({useFetchStreams:t},u),m._setSettings(u),m},"PUBLIC").setMultipleInstances(!0)),un(OE,NE,e),un(OE,NE,"esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eS="firebasestorage.googleapis.com",tS="storageBucket",rP=2*60*1e3,sP=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct extends zn{constructor(e,t,s=0){super(Om(e),`Firebase Storage: ${t} (${Om(e)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,ct.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Om(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var ut;(function(i){i.UNKNOWN="unknown",i.OBJECT_NOT_FOUND="object-not-found",i.BUCKET_NOT_FOUND="bucket-not-found",i.PROJECT_NOT_FOUND="project-not-found",i.QUOTA_EXCEEDED="quota-exceeded",i.UNAUTHENTICATED="unauthenticated",i.UNAUTHORIZED="unauthorized",i.UNAUTHORIZED_APP="unauthorized-app",i.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",i.INVALID_CHECKSUM="invalid-checksum",i.CANCELED="canceled",i.INVALID_EVENT_NAME="invalid-event-name",i.INVALID_URL="invalid-url",i.INVALID_DEFAULT_BUCKET="invalid-default-bucket",i.NO_DEFAULT_BUCKET="no-default-bucket",i.CANNOT_SLICE_BLOB="cannot-slice-blob",i.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",i.NO_DOWNLOAD_URL="no-download-url",i.INVALID_ARGUMENT="invalid-argument",i.INVALID_ARGUMENT_COUNT="invalid-argument-count",i.APP_DELETED="app-deleted",i.INVALID_ROOT_OPERATION="invalid-root-operation",i.INVALID_FORMAT="invalid-format",i.INTERNAL_ERROR="internal-error",i.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(ut||(ut={}));function Om(i){return"storage/"+i}function fg(){const i="An unknown error occurred, please check the error payload for server response.";return new ct(ut.UNKNOWN,i)}function aP(i){return new ct(ut.OBJECT_NOT_FOUND,"Object '"+i+"' does not exist.")}function oP(i){return new ct(ut.QUOTA_EXCEEDED,"Quota for bucket '"+i+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function lP(){const i="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new ct(ut.UNAUTHENTICATED,i)}function uP(){return new ct(ut.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function cP(i){return new ct(ut.UNAUTHORIZED,"User does not have permission to access '"+i+"'.")}function hP(){return new ct(ut.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function fP(){return new ct(ut.CANCELED,"User canceled the upload/download.")}function dP(i){return new ct(ut.INVALID_URL,"Invalid URL '"+i+"'.")}function mP(i){return new ct(ut.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+i+"'.")}function pP(){return new ct(ut.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+tS+"' property when initializing the app?")}function gP(){return new ct(ut.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function yP(){return new ct(ut.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function _P(i){return new ct(ut.UNSUPPORTED_ENVIRONMENT,`${i} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function ap(i){return new ct(ut.INVALID_ARGUMENT,i)}function nS(){return new ct(ut.APP_DELETED,"The Firebase app was deleted.")}function vP(i){return new ct(ut.INVALID_ROOT_OPERATION,"The operation '"+i+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Xl(i,e){return new ct(ut.INVALID_FORMAT,"String does not match format '"+i+"': "+e)}function kl(i){throw new ct(ut.INTERNAL_ERROR,"Internal error: "+i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let s;try{s=An.makeFromUrl(e,t)}catch{return new An(e,"")}if(s.path==="")return s;throw mP(e)}static makeFromUrl(e,t){let s=null;const o="([A-Za-z0-9.\\-_]+)";function u(oe){oe.path.charAt(oe.path.length-1)==="/"&&(oe.path_=oe.path_.slice(0,-1))}const h="(/(.*))?$",m=new RegExp("^gs://"+o+h,"i"),p={bucket:1,path:3};function g(oe){oe.path_=decodeURIComponent(oe.path)}const E="v[A-Za-z0-9_]+",S=t.replace(/[.]/g,"\\."),w="(/([^?#]*).*)?$",D=new RegExp(`^https?://${S}/${E}/b/${o}/o${w}`,"i"),P={bucket:1,path:3},G=t===eS?"(?:storage.googleapis.com|storage.cloud.google.com)":t,H="([^?#]*)",K=new RegExp(`^https?://${G}/${o}/${H}`,"i"),te=[{regex:m,indices:p,postModify:u},{regex:D,indices:P,postModify:g},{regex:K,indices:{bucket:1,path:2},postModify:g}];for(let oe=0;oe<te.length;oe++){const ue=te[oe],Ae=ue.regex.exec(e);if(Ae){const V=Ae[ue.indices.bucket];let b=Ae[ue.indices.path];b||(b=""),s=new An(V,b),ue.postModify(s);break}}if(s==null)throw dP(e);return s}}class EP{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TP(i,e,t){let s=1,o=null,u=null,h=!1,m=0;function p(){return m===2}let g=!1;function E(...H){g||(g=!0,e.apply(null,H))}function S(H){o=setTimeout(()=>{o=null,i(D,p())},H)}function w(){u&&clearTimeout(u)}function D(H,...K){if(g){w();return}if(H){w(),E.call(null,H,...K);return}if(p()||h){w(),E.call(null,H,...K);return}s<64&&(s*=2);let te;m===1?(m=2,te=0):te=(s+Math.random())*1e3,S(te)}let P=!1;function G(H){P||(P=!0,w(),!g&&(o!==null?(H||(m=2),clearTimeout(o),S(0)):H||(m=1)))}return S(0),u=setTimeout(()=>{h=!0,G(!0)},t),G}function AP(i){i(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wP(i){return i!==void 0}function SP(i){return typeof i=="object"&&!Array.isArray(i)}function dg(i){return typeof i=="string"||i instanceof String}function DT(i){return mg()&&i instanceof Blob}function mg(){return typeof Blob<"u"}function OT(i,e,t,s){if(s<e)throw ap(`Invalid value for '${i}'. Expected ${e} or greater.`);if(s>t)throw ap(`Invalid value for '${i}'. Expected ${t} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pg(i,e,t){let s=e;return t==null&&(s=`https://${e}`),`${t}://${s}/v0${i}`}function iS(i){const e=encodeURIComponent;let t="?";for(const s in i)if(i.hasOwnProperty(s)){const o=e(s)+"="+e(i[s]);t=t+o+"&"}return t=t.slice(0,-1),t}var Fs;(function(i){i[i.NO_ERROR=0]="NO_ERROR",i[i.NETWORK_ERROR=1]="NETWORK_ERROR",i[i.ABORT=2]="ABORT"})(Fs||(Fs={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bP(i,e){const t=i>=500&&i<600,o=[408,429].indexOf(i)!==-1,u=e.indexOf(i)!==-1;return t||o||u}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RP{constructor(e,t,s,o,u,h,m,p,g,E,S,w=!0,D=!1){this.url_=e,this.method_=t,this.headers_=s,this.body_=o,this.successCodes_=u,this.additionalRetryCodes_=h,this.callback_=m,this.errorCallback_=p,this.timeout_=g,this.progressCallback_=E,this.connectionFactory_=S,this.retry=w,this.isUsingEmulator=D,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((P,G)=>{this.resolve_=P,this.reject_=G,this.start_()})}start_(){const e=(s,o)=>{if(o){s(!1,new Jc(!1,null,!0));return}const u=this.connectionFactory_();this.pendingConnection_=u;const h=m=>{const p=m.loaded,g=m.lengthComputable?m.total:-1;this.progressCallback_!==null&&this.progressCallback_(p,g)};this.progressCallback_!==null&&u.addUploadProgressListener(h),u.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&u.removeUploadProgressListener(h),this.pendingConnection_=null;const m=u.getErrorCode()===Fs.NO_ERROR,p=u.getStatus();if(!m||bP(p,this.additionalRetryCodes_)&&this.retry){const E=u.getErrorCode()===Fs.ABORT;s(!1,new Jc(!1,null,E));return}const g=this.successCodes_.indexOf(p)!==-1;s(!0,new Jc(g,u))})},t=(s,o)=>{const u=this.resolve_,h=this.reject_,m=o.connection;if(o.wasSuccessCode)try{const p=this.callback_(m,m.getResponse());wP(p)?u(p):u()}catch(p){h(p)}else if(m!==null){const p=fg();p.serverResponse=m.getErrorText(),this.errorCallback_?h(this.errorCallback_(m,p)):h(p)}else if(o.canceled){const p=this.appDelete_?nS():fP();h(p)}else{const p=hP();h(p)}};this.canceled_?t(!1,new Jc(!1,null,!0)):this.backoffId_=TP(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&AP(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Jc{constructor(e,t,s){this.wasSuccessCode=e,this.connection=t,this.canceled=!!s}}function IP(i,e){e!==null&&e.length>0&&(i.Authorization="Firebase "+e)}function CP(i,e){i["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function DP(i,e){e&&(i["X-Firebase-GMPID"]=e)}function OP(i,e){e!==null&&(i["X-Firebase-AppCheck"]=e)}function NP(i,e,t,s,o,u,h=!0,m=!1){const p=iS(i.urlParams),g=i.url+p,E=Object.assign({},i.headers);return DP(E,e),IP(E,t),CP(E,u),OP(E,s),new RP(g,i.method,E,i.body,i.successCodes,i.additionalRetryCodes,i.handler,i.errorHandler,i.timeout,i.progressCallback,o,h,m)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MP(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function VP(...i){const e=MP();if(e!==void 0){const t=new e;for(let s=0;s<i.length;s++)t.append(i[s]);return t.getBlob()}else{if(mg())return new Blob(i);throw new ct(ut.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function PP(i,e,t){return i.webkitSlice?i.webkitSlice(e,t):i.mozSlice?i.mozSlice(e,t):i.slice?i.slice(e,t):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xP(i){if(typeof atob>"u")throw _P("base-64");return atob(i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pi={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Nm{constructor(e,t){this.data=e,this.contentType=t||null}}function kP(i,e){switch(i){case pi.RAW:return new Nm(rS(e));case pi.BASE64:case pi.BASE64URL:return new Nm(sS(i,e));case pi.DATA_URL:return new Nm(UP(e),zP(e))}throw fg()}function rS(i){const e=[];for(let t=0;t<i.length;t++){let s=i.charCodeAt(t);if(s<=127)e.push(s);else if(s<=2047)e.push(192|s>>6,128|s&63);else if((s&64512)===55296)if(!(t<i.length-1&&(i.charCodeAt(t+1)&64512)===56320))e.push(239,191,189);else{const u=s,h=i.charCodeAt(++t);s=65536|(u&1023)<<10|h&1023,e.push(240|s>>18,128|s>>12&63,128|s>>6&63,128|s&63)}else(s&64512)===56320?e.push(239,191,189):e.push(224|s>>12,128|s>>6&63,128|s&63)}return new Uint8Array(e)}function LP(i){let e;try{e=decodeURIComponent(i)}catch{throw Xl(pi.DATA_URL,"Malformed data URL.")}return rS(e)}function sS(i,e){switch(i){case pi.BASE64:{const o=e.indexOf("-")!==-1,u=e.indexOf("_")!==-1;if(o||u)throw Xl(i,"Invalid character '"+(o?"-":"_")+"' found: is it base64url encoded?");break}case pi.BASE64URL:{const o=e.indexOf("+")!==-1,u=e.indexOf("/")!==-1;if(o||u)throw Xl(i,"Invalid character '"+(o?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let t;try{t=xP(e)}catch(o){throw o.message.includes("polyfill")?o:Xl(i,"Invalid character found")}const s=new Uint8Array(t.length);for(let o=0;o<t.length;o++)s[o]=t.charCodeAt(o);return s}class aS{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(t===null)throw Xl(pi.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const s=t[1]||null;s!=null&&(this.base64=BP(s,";base64"),this.contentType=this.base64?s.substring(0,s.length-7):s),this.rest=e.substring(e.indexOf(",")+1)}}function UP(i){const e=new aS(i);return e.base64?sS(pi.BASE64,e.rest):LP(e.rest)}function zP(i){return new aS(i).contentType}function BP(i,e){return i.length>=e.length?i.substring(i.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jr{constructor(e,t){let s=0,o="";DT(e)?(this.data_=e,s=e.size,o=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),s=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),s=e.length),this.size_=s,this.type_=o}size(){return this.size_}type(){return this.type_}slice(e,t){if(DT(this.data_)){const s=this.data_,o=PP(s,e,t);return o===null?null:new jr(o)}else{const s=new Uint8Array(this.data_.buffer,e,t-e);return new jr(s,!0)}}static getBlob(...e){if(mg()){const t=e.map(s=>s instanceof jr?s.data_:s);return new jr(VP.apply(null,t))}else{const t=e.map(h=>dg(h)?kP(pi.RAW,h).data:h.data_);let s=0;t.forEach(h=>{s+=h.byteLength});const o=new Uint8Array(s);let u=0;return t.forEach(h=>{for(let m=0;m<h.length;m++)o[u++]=h[m]}),new jr(o,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oS(i){let e;try{e=JSON.parse(i)}catch{return null}return SP(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jP(i){if(i.length===0)return null;const e=i.lastIndexOf("/");return e===-1?"":i.slice(0,e)}function qP(i,e){const t=e.split("/").filter(s=>s.length>0).join("/");return i.length===0?t:i+"/"+t}function lS(i){const e=i.lastIndexOf("/",i.length-2);return e===-1?i:i.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HP(i,e){return e}class rn{constructor(e,t,s,o){this.server=e,this.local=t||e,this.writable=!!s,this.xform=o||HP}}let eh=null;function FP(i){return!dg(i)||i.length<2?i:lS(i)}function uS(){if(eh)return eh;const i=[];i.push(new rn("bucket")),i.push(new rn("generation")),i.push(new rn("metageneration")),i.push(new rn("name","fullPath",!0));function e(u,h){return FP(h)}const t=new rn("name");t.xform=e,i.push(t);function s(u,h){return h!==void 0?Number(h):h}const o=new rn("size");return o.xform=s,i.push(o),i.push(new rn("timeCreated")),i.push(new rn("updated")),i.push(new rn("md5Hash",null,!0)),i.push(new rn("cacheControl",null,!0)),i.push(new rn("contentDisposition",null,!0)),i.push(new rn("contentEncoding",null,!0)),i.push(new rn("contentLanguage",null,!0)),i.push(new rn("contentType",null,!0)),i.push(new rn("metadata","customMetadata",!0)),eh=i,eh}function GP(i,e){function t(){const s=i.bucket,o=i.fullPath,u=new An(s,o);return e._makeStorageReference(u)}Object.defineProperty(i,"ref",{get:t})}function KP(i,e,t){const s={};s.type="file";const o=t.length;for(let u=0;u<o;u++){const h=t[u];s[h.local]=h.xform(s,e[h.server])}return GP(s,i),s}function cS(i,e,t){const s=oS(e);return s===null?null:KP(i,s,t)}function $P(i,e,t,s){const o=oS(e);if(o===null||!dg(o.downloadTokens))return null;const u=o.downloadTokens;if(u.length===0)return null;const h=encodeURIComponent;return u.split(",").map(g=>{const E=i.bucket,S=i.fullPath,w="/b/"+h(E)+"/o/"+h(S),D=pg(w,t,s),P=iS({alt:"media",token:g});return D+P})[0]}function YP(i,e){const t={},s=e.length;for(let o=0;o<s;o++){const u=e[o];u.writable&&(t[u.server]=i[u.local])}return JSON.stringify(t)}class hS{constructor(e,t,s,o){this.url=e,this.method=t,this.handler=s,this.timeout=o,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fS(i){if(!i)throw fg()}function QP(i,e){function t(s,o){const u=cS(i,o,e);return fS(u!==null),u}return t}function XP(i,e){function t(s,o){const u=cS(i,o,e);return fS(u!==null),$P(u,o,i.host,i._protocol)}return t}function dS(i){function e(t,s){let o;return t.getStatus()===401?t.getErrorText().includes("Firebase App Check token is invalid")?o=uP():o=lP():t.getStatus()===402?o=oP(i.bucket):t.getStatus()===403?o=cP(i.path):o=s,o.status=t.getStatus(),o.serverResponse=s.serverResponse,o}return e}function WP(i){const e=dS(i);function t(s,o){let u=e(s,o);return s.getStatus()===404&&(u=aP(i.path)),u.serverResponse=o.serverResponse,u}return t}function ZP(i,e,t){const s=e.fullServerUrl(),o=pg(s,i.host,i._protocol),u="GET",h=i.maxOperationRetryTime,m=new hS(o,u,XP(i,t),h);return m.errorHandler=WP(e),m}function JP(i,e){return i&&i.contentType||e&&e.type()||"application/octet-stream"}function ex(i,e,t){const s=Object.assign({},t);return s.fullPath=i.path,s.size=e.size(),s.contentType||(s.contentType=JP(null,e)),s}function tx(i,e,t,s,o){const u=e.bucketOnlyServerUrl(),h={"X-Goog-Upload-Protocol":"multipart"};function m(){let te="";for(let oe=0;oe<2;oe++)te=te+Math.random().toString().slice(2);return te}const p=m();h["Content-Type"]="multipart/related; boundary="+p;const g=ex(e,s,o),E=YP(g,t),S="--"+p+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+E+`\r
--`+p+`\r
Content-Type: `+g.contentType+`\r
\r
`,w=`\r
--`+p+"--",D=jr.getBlob(S,s,w);if(D===null)throw gP();const P={name:g.fullPath},G=pg(u,i.host,i._protocol),H="POST",K=i.maxUploadRetryTime,ne=new hS(G,H,QP(i,t),K);return ne.urlParams=P,ne.headers=h,ne.body=D.uploadData(),ne.errorHandler=dS(e),ne}class nx{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Fs.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Fs.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Fs.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,s,o,u){if(this.sent_)throw kl("cannot .send() more than once");if(Js(e)&&s&&(this.xhr_.withCredentials=!0),this.sent_=!0,this.xhr_.open(t,e,!0),u!==void 0)for(const h in u)u.hasOwnProperty(h)&&this.xhr_.setRequestHeader(h,u[h].toString());return o!==void 0?this.xhr_.send(o):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw kl("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw kl("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw kl("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw kl("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class ix extends nx{initXhr(){this.xhr_.responseType="text"}}function mS(){return new ix}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ws{constructor(e,t){this._service=e,t instanceof An?this._location=t:this._location=An.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new Ws(e,t)}get root(){const e=new An(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return lS(this._location.path)}get storage(){return this._service}get parent(){const e=jP(this._location.path);if(e===null)return null;const t=new An(this._location.bucket,e);return new Ws(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw vP(e)}}function rx(i,e,t){i._throwIfRoot("uploadBytes");const s=tx(i.storage,i._location,uS(),new jr(e,!0),t);return i.storage.makeRequestWithTokens(s,mS).then(o=>({metadata:o,ref:i}))}function sx(i){i._throwIfRoot("getDownloadURL");const e=ZP(i.storage,i._location,uS());return i.storage.makeRequestWithTokens(e,mS).then(t=>{if(t===null)throw yP();return t})}function ax(i,e){const t=qP(i._location.path,e),s=new An(i._location.bucket,t);return new Ws(i.storage,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ox(i){return/^[A-Za-z]+:\/\//.test(i)}function lx(i,e){return new Ws(i,e)}function pS(i,e){if(i instanceof gg){const t=i;if(t._bucket==null)throw pP();const s=new Ws(t,t._bucket);return e!=null?pS(s,e):s}else return e!==void 0?ax(i,e):i}function ux(i,e){if(e&&ox(e)){if(i instanceof gg)return lx(i,e);throw ap("To use ref(service, url), the first argument must be a Storage instance.")}else return pS(i,e)}function NT(i,e){const t=e==null?void 0:e[tS];return t==null?null:An.makeFromBucketSpec(t,i)}function cx(i,e,t,s={}){i.host=`${e}:${t}`;const o=Js(e);o&&(dp(`https://${i.host}`),mp("Storage",!0)),i._isUsingEmulator=!0,i._protocol=o?"https":"http";const{mockUserToken:u}=s;u&&(i._overrideAuthToken=typeof u=="string"?u:i0(u,i.app.options.projectId))}class gg{constructor(e,t,s,o,u,h=!1){this.app=e,this._authProvider=t,this._appCheckProvider=s,this._url=o,this._firebaseVersion=u,this._isUsingEmulator=h,this._bucket=null,this._host=eS,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=rP,this._maxUploadRetryTime=sP,this._requests=new Set,o!=null?this._bucket=An.makeFromBucketSpec(o,this._host):this._bucket=NT(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=An.makeFromBucketSpec(this._url,e):this._bucket=NT(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){OT("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){OT("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){if(Tn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Ws(this,e)}_makeRequest(e,t,s,o,u=!0){if(this._deleted)return new EP(nS());{const h=NP(e,this._appId,s,o,t,this._firebaseVersion,u,this._isUsingEmulator);return this._requests.add(h),h.getPromise().then(()=>this._requests.delete(h),()=>this._requests.delete(h)),h}}async makeRequestWithTokens(e,t){const[s,o]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,s,o).getPromise()}}const MT="@firebase/storage",VT="0.13.12";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gS="storage";function hx(i,e,t){return i=Tt(i),rx(i,e,t)}function fx(i){return i=Tt(i),sx(i)}function dx(i,e){return i=Tt(i),ux(i,e)}function mx(i=Bh(),e){i=Tt(i);const s=ts(i,gS).getImmediate({identifier:e}),o=e0("storage");return o&&px(s,...o),s}function px(i,e,t,s={}){cx(i,e,t,s)}function gx(i,{instanceIdentifier:e}){const t=i.getProvider("app").getImmediate(),s=i.getProvider("auth-internal"),o=i.getProvider("app-check-internal");return new gg(t,s,o,e,ta)}function yx(){Yn(new Un(gS,gx,"PUBLIC").setMultipleInstances(!0)),un(MT,VT,""),un(MT,VT,"esm2017")}yx();const _x={apiKey:"AIzaSyBDiNfZbbFCuX_VBvRXmjyVkMTuUxSyR1A",authDomain:"grading-system-project-cb8ac.firebaseapp.com",projectId:"grading-system-project-cb8ac",storageBucket:"grading-system-project-cb8ac.firebasestorage.app",messagingSenderId:"469921719876",appId:"1:469921719876:web:a11b9209cba63ebe407e11",measurementId:"G-SNNEVMLKJR"},of=c0(_x);A2(of);const lo=UO(of),yg=xV(of),vx=mx(of),Ex=({setUser:i})=>{const[e,t]=Q.useState("student"),[s,o]=Q.useState(""),[u,h]=Q.useState(""),[m,p]=Q.useState(""),[g,E]=Q.useState(""),S=async()=>{if(!u||!m){E("Email and password required");return}try{const D=await SD(lo,u,m);i({name:s,role:e,email:D.user.email}),localStorage.setItem("userRole",e),localStorage.setItem("userName",s)}catch(D){E("Login failed: "+D.message)}},w=async()=>{if(!u||!m){E("Email and password required");return}try{const D=await wD(lo,u,m);i({name:s,role:e,email:D.user.email}),localStorage.setItem("userRole",e),localStorage.setItem("userName",s)}catch(D){E("Signup failed: "+D.message)}};return Te.jsxs("div",{className:"max-w-md mx-auto mt-20 p-8 bg-white rounded-lg shadow-md border border-gray-200",children:[Te.jsx("h2",{className:"text-3xl font-extrabold text-center mb-6 text-indigo-700",children:"Welcome Back"}),g&&Te.jsx("div",{className:"mb-4 text-red-600",children:g}),Te.jsx("label",{className:"block mb-2 font-semibold text-gray-700",htmlFor:"name",children:"Enter Your Name"}),Te.jsx("input",{id:"name",className:"w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 mb-5",placeholder:"Your Name",value:s,onChange:D=>o(D.target.value),autoComplete:"off"}),Te.jsx("label",{className:"block mb-2 font-semibold text-gray-700",htmlFor:"email",children:"Email"}),Te.jsx("input",{id:"email",className:"w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 mb-5",placeholder:"Email",value:u,onChange:D=>h(D.target.value),autoComplete:"off"}),Te.jsx("label",{className:"block mb-2 font-semibold text-gray-700",htmlFor:"password",children:"Password"}),Te.jsx("input",{id:"password",type:"password",className:"w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 mb-5",placeholder:"Password",value:m,onChange:D=>p(D.target.value),autoComplete:"off"}),Te.jsx("label",{className:"block mb-2 font-semibold text-gray-700",htmlFor:"role",children:"Select Role"}),Te.jsxs("select",{id:"role",className:"w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 mb-7",value:e,onChange:D=>t(D.target.value),children:[Te.jsx("option",{value:"student",children:"Student"}),Te.jsx("option",{value:"teacher",children:"Teacher"})]}),Te.jsx("button",{onClick:S,className:"w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-md transition duration-300 mb-2",children:"Login"}),Te.jsx("button",{onClick:w,className:"w-full bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-3 rounded-md transition duration-300",children:"Sign Up"})]})},Tx=()=>{const[i,e]=Q.useState(null),[t,s]=Q.useState(""),[o,u]=Q.useState(""),h=async()=>{const m=lo.currentUser;if(!m||!i||!t){u("Please select a file, subject, and make sure you are logged in.");return}try{const p=dx(vx,`assignments/${m.uid}/${i.name}`);await hx(p,i);const g=await fx(p);await tP(Bw(yg,"assignments"),{studentId:m.uid,subject:t,fileUrl:g,timestamp:iP()}),u("Assignment uploaded successfully!")}catch(p){u("Upload failed: "+p.message)}};return Te.jsxs("div",{children:[Te.jsx("input",{type:"file",onChange:m=>e(m.target.files[0])}),Te.jsx("input",{type:"text",placeholder:"Subject",value:t,onChange:m=>s(m.target.value)}),Te.jsx("button",{onClick:h,children:"Upload Assignment"}),o&&Te.jsx("div",{children:o})]})},Ax=({user:i,assignments:e,setAssignments:t,logout:s})=>(Q.useEffect(()=>{(async()=>{if(!i)return;const u=$V(Bw(yg,"assignments"),YV("studentId","==",i.email)),h=await JV(u);t(h.docs.map(m=>({id:m.id,...m.data()})))})()},[i,t]),Te.jsxs("div",{children:[Te.jsx("button",{onClick:s,children:"Logout"}),Te.jsx(Tx,{onUpload:()=>window.location.reload()}),Te.jsx("h2",{className:"text-xl font-bold mt-6 mb-2",children:"Your Assignments"}),Te.jsxs("ul",{children:[e.length===0&&Te.jsx("li",{children:"No assignments found."}),e.map(o=>Te.jsxs("li",{children:[o.subject," - ",Te.jsx("a",{href:o.fileUrl,target:"_blank",rel:"noopener noreferrer",children:"View File"}),o.grade&&Te.jsxs("span",{children:[" | Grade: ",o.grade]})]},o.id))]})]}));async function wx(i,e,t){const s=jw(yg,"Grades","Fs0aBoxnkY6oJGYJnA58"),o=await ZV(s);let u={};o.exists()&&(u=o.data()),u[i]=`${e}: ${t}`,await eP(s,u)}const Sx=({assignments:i,logout:e})=>{const[t,s]=Q.useState({}),[o,u]=Q.useState({}),h=async(m,p,g)=>{const E=t[g];!E||!p||(await wx(m,p,E),s({...t,[g]:""}),u({...o,[g]:""}),alert("Grade assigned!"))};return Te.jsxs("div",{children:[Te.jsx("button",{onClick:e,children:"Logout"}),Te.jsx("h2",{className:"text-xl font-bold mt-6 mb-2",children:"All Assignments"}),Te.jsxs("ul",{children:[i.length===0&&Te.jsx("li",{children:"No assignments found."}),i.map(m=>Te.jsxs("li",{children:[m.subject," - ",Te.jsx("a",{href:m.fileUrl,target:"_blank",rel:"noopener noreferrer",children:"View File"}),Te.jsx("input",{type:"text",placeholder:"Subject",value:o[m.id]||"",onChange:p=>u({...o,[m.id]:p.target.value}),style:{marginLeft:8}}),Te.jsx("input",{type:"text",placeholder:"Grade",value:t[m.id]||"",onChange:p=>s({...t,[m.id]:p.target.value}),style:{marginLeft:8}}),Te.jsx("button",{onClick:()=>h(m.studentName||m.studentId,o[m.id],m.id),style:{marginLeft:8},children:"Assign Grade"})]},m.id))]})]})},bx=()=>{const[i,e]=Q.useState(null),[t,s]=Q.useState({}),[o,u]=Q.useState([]),[h,m]=Q.useState({});Q.useEffect(()=>{const g=ID(lo,E=>{if(E){const S=localStorage.getItem("userRole"),w=localStorage.getItem("userName");if(!S||!w){e(null),localStorage.removeItem("userRole"),localStorage.removeItem("userName"),lo.signOut();return}e({email:E.email,role:S,name:w})}else e(null)});return()=>g()},[]);const p=()=>{e(null),localStorage.removeItem("userRole"),localStorage.removeItem("userName"),lo.signOut()};return Te.jsxs("div",{className:"min-h-screen flex flex-col items-center justify-start bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 p-6",children:[Te.jsx("h1",{className:"text-3xl font-bold text-center mb-6 text-gray-800 drop-shadow-sm",children:Te.jsx("span",{className:"inline-block px-6 py-2 border-2 border-indigo-600 rounded-lg bg-white shadow-md",children:"📚 Grading System"})}),Te.jsxs("div",{className:"w-full max-w-3xl",children:[!i&&Te.jsx(Ex,{setUser:e}),(i==null?void 0:i.role)==="student"&&Te.jsx(Ax,{user:i,grades:t,assignments:o,setAssignments:u,assignmentGrades:h,logout:p}),(i==null?void 0:i.role)==="teacher"&&Te.jsx(Sx,{assignments:o,setGrades:s,grades:t,assignmentGrades:h,setAssignmentGrades:m,logout:p})]})]})},Rx=Zb.createRoot(document.getElementById("root"));Rx.render(Te.jsx(d1,{children:Te.jsx(bx,{})}));
