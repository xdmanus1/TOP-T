function wb(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function PE(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var RE={exports:{}},sh={},bE={exports:{}},ne={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var uu=Symbol.for("react.element"),Ib=Symbol.for("react.portal"),Eb=Symbol.for("react.fragment"),Tb=Symbol.for("react.strict_mode"),Sb=Symbol.for("react.profiler"),Ab=Symbol.for("react.provider"),kb=Symbol.for("react.context"),Pb=Symbol.for("react.forward_ref"),Rb=Symbol.for("react.suspense"),bb=Symbol.for("react.memo"),Cb=Symbol.for("react.lazy"),M_=Symbol.iterator;function xb(t){return t===null||typeof t!="object"?null:(t=M_&&t[M_]||t["@@iterator"],typeof t=="function"?t:null)}var CE={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},xE=Object.assign,NE={};function Uo(t,e,n){this.props=t,this.context=e,this.refs=NE,this.updater=n||CE}Uo.prototype.isReactComponent={};Uo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Uo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function DE(){}DE.prototype=Uo.prototype;function Cg(t,e,n){this.props=t,this.context=e,this.refs=NE,this.updater=n||CE}var xg=Cg.prototype=new DE;xg.constructor=Cg;xE(xg,Uo.prototype);xg.isPureReactComponent=!0;var F_=Array.isArray,OE=Object.prototype.hasOwnProperty,Ng={current:null},VE={key:!0,ref:!0,__self:!0,__source:!0};function LE(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)OE.call(e,r)&&!VE.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:uu,type:t,key:s,ref:o,props:i,_owner:Ng.current}}function Nb(t,e){return{$$typeof:uu,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Dg(t){return typeof t=="object"&&t!==null&&t.$$typeof===uu}function Db(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var j_=/\/+/g;function Pf(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Db(""+t.key):e.toString(36)}function Cc(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case uu:case Ib:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Pf(o,0):r,F_(i)?(n="",t!=null&&(n=t.replace(j_,"$&/")+"/"),Cc(i,e,n,"",function(u){return u})):i!=null&&(Dg(i)&&(i=Nb(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(j_,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",F_(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+Pf(s,a);o+=Cc(s,e,n,l,i)}else if(l=xb(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+Pf(s,a++),o+=Cc(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ku(t,e,n){if(t==null)return t;var r=[],i=0;return Cc(t,r,"","",function(s){return e.call(n,s,i++)}),r}function Ob(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var bt={current:null},xc={transition:null},Vb={ReactCurrentDispatcher:bt,ReactCurrentBatchConfig:xc,ReactCurrentOwner:Ng};ne.Children={map:Ku,forEach:function(t,e,n){Ku(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ku(t,function(){e++}),e},toArray:function(t){return Ku(t,function(e){return e})||[]},only:function(t){if(!Dg(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ne.Component=Uo;ne.Fragment=Eb;ne.Profiler=Sb;ne.PureComponent=Cg;ne.StrictMode=Tb;ne.Suspense=Rb;ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Vb;ne.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=xE({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Ng.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)OE.call(e,l)&&!VE.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:uu,type:t.type,key:i,ref:s,props:r,_owner:o}};ne.createContext=function(t){return t={$$typeof:kb,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Ab,_context:t},t.Consumer=t};ne.createElement=LE;ne.createFactory=function(t){var e=LE.bind(null,t);return e.type=t,e};ne.createRef=function(){return{current:null}};ne.forwardRef=function(t){return{$$typeof:Pb,render:t}};ne.isValidElement=Dg;ne.lazy=function(t){return{$$typeof:Cb,_payload:{_status:-1,_result:t},_init:Ob}};ne.memo=function(t,e){return{$$typeof:bb,type:t,compare:e===void 0?null:e}};ne.startTransition=function(t){var e=xc.transition;xc.transition={};try{t()}finally{xc.transition=e}};ne.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};ne.useCallback=function(t,e){return bt.current.useCallback(t,e)};ne.useContext=function(t){return bt.current.useContext(t)};ne.useDebugValue=function(){};ne.useDeferredValue=function(t){return bt.current.useDeferredValue(t)};ne.useEffect=function(t,e){return bt.current.useEffect(t,e)};ne.useId=function(){return bt.current.useId()};ne.useImperativeHandle=function(t,e,n){return bt.current.useImperativeHandle(t,e,n)};ne.useInsertionEffect=function(t,e){return bt.current.useInsertionEffect(t,e)};ne.useLayoutEffect=function(t,e){return bt.current.useLayoutEffect(t,e)};ne.useMemo=function(t,e){return bt.current.useMemo(t,e)};ne.useReducer=function(t,e,n){return bt.current.useReducer(t,e,n)};ne.useRef=function(t){return bt.current.useRef(t)};ne.useState=function(t){return bt.current.useState(t)};ne.useSyncExternalStore=function(t,e,n){return bt.current.useSyncExternalStore(t,e,n)};ne.useTransition=function(){return bt.current.useTransition()};ne.version="18.2.0";bE.exports=ne;var A=bE.exports;const oh=PE(A),Lb=wb({__proto__:null,default:oh},[A]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mb=A,Fb=Symbol.for("react.element"),jb=Symbol.for("react.fragment"),Ub=Object.prototype.hasOwnProperty,$b=Mb.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,zb={key:!0,ref:!0,__self:!0,__source:!0};function ME(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)Ub.call(e,r)&&!zb.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:Fb,type:t,key:s,ref:o,props:i,_owner:$b.current}}sh.Fragment=jb;sh.jsx=ME;sh.jsxs=ME;RE.exports=sh;var g=RE.exports,Rp={},FE={exports:{}},Qt={},jE={exports:{}},UE={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(j,H){var Y=j.length;j.push(H);e:for(;0<Y;){var Ve=Y-1>>>1,Ke=j[Ve];if(0<i(Ke,H))j[Ve]=H,j[Y]=Ke,Y=Ve;else break e}}function n(j){return j.length===0?null:j[0]}function r(j){if(j.length===0)return null;var H=j[0],Y=j.pop();if(Y!==H){j[0]=Y;e:for(var Ve=0,Ke=j.length,Wu=Ke>>>1;Ve<Wu;){var wi=2*(Ve+1)-1,kf=j[wi],Ii=wi+1,Gu=j[Ii];if(0>i(kf,Y))Ii<Ke&&0>i(Gu,kf)?(j[Ve]=Gu,j[Ii]=Y,Ve=Ii):(j[Ve]=kf,j[wi]=Y,Ve=wi);else if(Ii<Ke&&0>i(Gu,Y))j[Ve]=Gu,j[Ii]=Y,Ve=Ii;else break e}}return H}function i(j,H){var Y=j.sortIndex-H.sortIndex;return Y!==0?Y:j.id-H.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,d=null,h=3,f=!1,v=!1,y=!1,w=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function _(j){for(var H=n(u);H!==null;){if(H.callback===null)r(u);else if(H.startTime<=j)r(u),H.sortIndex=H.expirationTime,e(l,H);else break;H=n(u)}}function E(j){if(y=!1,_(j),!v)if(n(l)!==null)v=!0,Sf(S);else{var H=n(u);H!==null&&Af(E,H.startTime-j)}}function S(j,H){v=!1,y&&(y=!1,m(M),M=-1),f=!0;var Y=h;try{for(_(H),d=n(l);d!==null&&(!(d.expirationTime>H)||j&&!un());){var Ve=d.callback;if(typeof Ve=="function"){d.callback=null,h=d.priorityLevel;var Ke=Ve(d.expirationTime<=H);H=t.unstable_now(),typeof Ke=="function"?d.callback=Ke:d===n(l)&&r(l),_(H)}else r(l);d=n(l)}if(d!==null)var Wu=!0;else{var wi=n(u);wi!==null&&Af(E,wi.startTime-H),Wu=!1}return Wu}finally{d=null,h=Y,f=!1}}var R=!1,x=null,M=-1,Z=5,G=-1;function un(){return!(t.unstable_now()-G<Z)}function oa(){if(x!==null){var j=t.unstable_now();G=j;var H=!0;try{H=x(!0,j)}finally{H?aa():(R=!1,x=null)}}else R=!1}var aa;if(typeof p=="function")aa=function(){p(oa)};else if(typeof MessageChannel<"u"){var L_=new MessageChannel,_b=L_.port2;L_.port1.onmessage=oa,aa=function(){_b.postMessage(null)}}else aa=function(){w(oa,0)};function Sf(j){x=j,R||(R=!0,aa())}function Af(j,H){M=w(function(){j(t.unstable_now())},H)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(j){j.callback=null},t.unstable_continueExecution=function(){v||f||(v=!0,Sf(S))},t.unstable_forceFrameRate=function(j){0>j||125<j?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Z=0<j?Math.floor(1e3/j):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(j){switch(h){case 1:case 2:case 3:var H=3;break;default:H=h}var Y=h;h=H;try{return j()}finally{h=Y}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(j,H){switch(j){case 1:case 2:case 3:case 4:case 5:break;default:j=3}var Y=h;h=j;try{return H()}finally{h=Y}},t.unstable_scheduleCallback=function(j,H,Y){var Ve=t.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?Ve+Y:Ve):Y=Ve,j){case 1:var Ke=-1;break;case 2:Ke=250;break;case 5:Ke=1073741823;break;case 4:Ke=1e4;break;default:Ke=5e3}return Ke=Y+Ke,j={id:c++,callback:H,priorityLevel:j,startTime:Y,expirationTime:Ke,sortIndex:-1},Y>Ve?(j.sortIndex=Y,e(u,j),n(l)===null&&j===n(u)&&(y?(m(M),M=-1):y=!0,Af(E,Y-Ve))):(j.sortIndex=Ke,e(l,j),v||f||(v=!0,Sf(S))),j},t.unstable_shouldYield=un,t.unstable_wrapCallback=function(j){var H=h;return function(){var Y=h;h=H;try{return j.apply(this,arguments)}finally{h=Y}}}})(UE);jE.exports=UE;var Bb=jE.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $E=A,Gt=Bb;function b(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var zE=new Set,ol={};function ps(t,e){vo(t,e),vo(t+"Capture",e)}function vo(t,e){for(ol[t]=e,t=0;t<e.length;t++)zE.add(e[t])}var er=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),bp=Object.prototype.hasOwnProperty,qb=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,U_={},$_={};function Wb(t){return bp.call($_,t)?!0:bp.call(U_,t)?!1:qb.test(t)?$_[t]=!0:(U_[t]=!0,!1)}function Gb(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Kb(t,e,n,r){if(e===null||typeof e>"u"||Gb(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Ct(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var dt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){dt[t]=new Ct(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];dt[e]=new Ct(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){dt[t]=new Ct(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){dt[t]=new Ct(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){dt[t]=new Ct(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){dt[t]=new Ct(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){dt[t]=new Ct(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){dt[t]=new Ct(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){dt[t]=new Ct(t,5,!1,t.toLowerCase(),null,!1,!1)});var Og=/[\-:]([a-z])/g;function Vg(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Og,Vg);dt[e]=new Ct(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Og,Vg);dt[e]=new Ct(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Og,Vg);dt[e]=new Ct(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){dt[t]=new Ct(t,1,!1,t.toLowerCase(),null,!1,!1)});dt.xlinkHref=new Ct("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){dt[t]=new Ct(t,1,!1,t.toLowerCase(),null,!0,!0)});function Lg(t,e,n,r){var i=dt.hasOwnProperty(e)?dt[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Kb(e,n,i,r)&&(n=null),r||i===null?Wb(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var cr=$E.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Hu=Symbol.for("react.element"),js=Symbol.for("react.portal"),Us=Symbol.for("react.fragment"),Mg=Symbol.for("react.strict_mode"),Cp=Symbol.for("react.profiler"),BE=Symbol.for("react.provider"),qE=Symbol.for("react.context"),Fg=Symbol.for("react.forward_ref"),xp=Symbol.for("react.suspense"),Np=Symbol.for("react.suspense_list"),jg=Symbol.for("react.memo"),Tr=Symbol.for("react.lazy"),WE=Symbol.for("react.offscreen"),z_=Symbol.iterator;function la(t){return t===null||typeof t!="object"?null:(t=z_&&t[z_]||t["@@iterator"],typeof t=="function"?t:null)}var ke=Object.assign,Rf;function ka(t){if(Rf===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Rf=e&&e[1]||""}return`
`+Rf+t}var bf=!1;function Cf(t,e){if(!t||bf)return"";bf=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{bf=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ka(t):""}function Hb(t){switch(t.tag){case 5:return ka(t.type);case 16:return ka("Lazy");case 13:return ka("Suspense");case 19:return ka("SuspenseList");case 0:case 2:case 15:return t=Cf(t.type,!1),t;case 11:return t=Cf(t.type.render,!1),t;case 1:return t=Cf(t.type,!0),t;default:return""}}function Dp(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Us:return"Fragment";case js:return"Portal";case Cp:return"Profiler";case Mg:return"StrictMode";case xp:return"Suspense";case Np:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case qE:return(t.displayName||"Context")+".Consumer";case BE:return(t._context.displayName||"Context")+".Provider";case Fg:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case jg:return e=t.displayName||null,e!==null?e:Dp(t.type)||"Memo";case Tr:e=t._payload,t=t._init;try{return Dp(t(e))}catch{}}return null}function Qb(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Dp(e);case 8:return e===Mg?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Gr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function GE(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Yb(t){var e=GE(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Qu(t){t._valueTracker||(t._valueTracker=Yb(t))}function KE(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=GE(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function nd(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Op(t,e){var n=e.checked;return ke({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function B_(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Gr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function HE(t,e){e=e.checked,e!=null&&Lg(t,"checked",e,!1)}function Vp(t,e){HE(t,e);var n=Gr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Lp(t,e.type,n):e.hasOwnProperty("defaultValue")&&Lp(t,e.type,Gr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function q_(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Lp(t,e,n){(e!=="number"||nd(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Pa=Array.isArray;function no(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Gr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Mp(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(b(91));return ke({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function W_(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(b(92));if(Pa(n)){if(1<n.length)throw Error(b(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Gr(n)}}function QE(t,e){var n=Gr(e.value),r=Gr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function G_(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function YE(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Fp(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?YE(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Yu,XE=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Yu=Yu||document.createElement("div"),Yu.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Yu.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function al(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ja={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Xb=["Webkit","ms","Moz","O"];Object.keys(ja).forEach(function(t){Xb.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ja[e]=ja[t]})});function JE(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ja.hasOwnProperty(t)&&ja[t]?(""+e).trim():e+"px"}function ZE(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=JE(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var Jb=ke({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function jp(t,e){if(e){if(Jb[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(b(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(b(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(b(61))}if(e.style!=null&&typeof e.style!="object")throw Error(b(62))}}function Up(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var $p=null;function Ug(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var zp=null,ro=null,io=null;function K_(t){if(t=hu(t)){if(typeof zp!="function")throw Error(b(280));var e=t.stateNode;e&&(e=dh(e),zp(t.stateNode,t.type,e))}}function e1(t){ro?io?io.push(t):io=[t]:ro=t}function t1(){if(ro){var t=ro,e=io;if(io=ro=null,K_(t),e)for(t=0;t<e.length;t++)K_(e[t])}}function n1(t,e){return t(e)}function r1(){}var xf=!1;function i1(t,e,n){if(xf)return t(e,n);xf=!0;try{return n1(t,e,n)}finally{xf=!1,(ro!==null||io!==null)&&(r1(),t1())}}function ll(t,e){var n=t.stateNode;if(n===null)return null;var r=dh(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(b(231,e,typeof n));return n}var Bp=!1;if(er)try{var ua={};Object.defineProperty(ua,"passive",{get:function(){Bp=!0}}),window.addEventListener("test",ua,ua),window.removeEventListener("test",ua,ua)}catch{Bp=!1}function Zb(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var Ua=!1,rd=null,id=!1,qp=null,eC={onError:function(t){Ua=!0,rd=t}};function tC(t,e,n,r,i,s,o,a,l){Ua=!1,rd=null,Zb.apply(eC,arguments)}function nC(t,e,n,r,i,s,o,a,l){if(tC.apply(this,arguments),Ua){if(Ua){var u=rd;Ua=!1,rd=null}else throw Error(b(198));id||(id=!0,qp=u)}}function ms(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function s1(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function H_(t){if(ms(t)!==t)throw Error(b(188))}function rC(t){var e=t.alternate;if(!e){if(e=ms(t),e===null)throw Error(b(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return H_(i),t;if(s===r)return H_(i),e;s=s.sibling}throw Error(b(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(b(189))}}if(n.alternate!==r)throw Error(b(190))}if(n.tag!==3)throw Error(b(188));return n.stateNode.current===n?t:e}function o1(t){return t=rC(t),t!==null?a1(t):null}function a1(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=a1(t);if(e!==null)return e;t=t.sibling}return null}var l1=Gt.unstable_scheduleCallback,Q_=Gt.unstable_cancelCallback,iC=Gt.unstable_shouldYield,sC=Gt.unstable_requestPaint,Le=Gt.unstable_now,oC=Gt.unstable_getCurrentPriorityLevel,$g=Gt.unstable_ImmediatePriority,u1=Gt.unstable_UserBlockingPriority,sd=Gt.unstable_NormalPriority,aC=Gt.unstable_LowPriority,c1=Gt.unstable_IdlePriority,ah=null,Vn=null;function lC(t){if(Vn&&typeof Vn.onCommitFiberRoot=="function")try{Vn.onCommitFiberRoot(ah,t,void 0,(t.current.flags&128)===128)}catch{}}var mn=Math.clz32?Math.clz32:dC,uC=Math.log,cC=Math.LN2;function dC(t){return t>>>=0,t===0?32:31-(uC(t)/cC|0)|0}var Xu=64,Ju=4194304;function Ra(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function od(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Ra(a):(s&=o,s!==0&&(r=Ra(s)))}else o=n&~i,o!==0?r=Ra(o):s!==0&&(r=Ra(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-mn(e),i=1<<n,r|=t[n],e&=~i;return r}function hC(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function fC(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-mn(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=hC(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Wp(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function d1(){var t=Xu;return Xu<<=1,!(Xu&4194240)&&(Xu=64),t}function Nf(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function cu(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-mn(e),t[e]=n}function pC(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-mn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function zg(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-mn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var ae=0;function h1(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var f1,Bg,p1,m1,g1,Gp=!1,Zu=[],Vr=null,Lr=null,Mr=null,ul=new Map,cl=new Map,Ar=[],mC="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Y_(t,e){switch(t){case"focusin":case"focusout":Vr=null;break;case"dragenter":case"dragleave":Lr=null;break;case"mouseover":case"mouseout":Mr=null;break;case"pointerover":case"pointerout":ul.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":cl.delete(e.pointerId)}}function ca(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=hu(e),e!==null&&Bg(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function gC(t,e,n,r,i){switch(e){case"focusin":return Vr=ca(Vr,t,e,n,r,i),!0;case"dragenter":return Lr=ca(Lr,t,e,n,r,i),!0;case"mouseover":return Mr=ca(Mr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return ul.set(s,ca(ul.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,cl.set(s,ca(cl.get(s)||null,t,e,n,r,i)),!0}return!1}function v1(t){var e=Ni(t.target);if(e!==null){var n=ms(e);if(n!==null){if(e=n.tag,e===13){if(e=s1(n),e!==null){t.blockedOn=e,g1(t.priority,function(){p1(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Nc(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Kp(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);$p=r,n.target.dispatchEvent(r),$p=null}else return e=hu(n),e!==null&&Bg(e),t.blockedOn=n,!1;e.shift()}return!0}function X_(t,e,n){Nc(t)&&n.delete(e)}function vC(){Gp=!1,Vr!==null&&Nc(Vr)&&(Vr=null),Lr!==null&&Nc(Lr)&&(Lr=null),Mr!==null&&Nc(Mr)&&(Mr=null),ul.forEach(X_),cl.forEach(X_)}function da(t,e){t.blockedOn===e&&(t.blockedOn=null,Gp||(Gp=!0,Gt.unstable_scheduleCallback(Gt.unstable_NormalPriority,vC)))}function dl(t){function e(i){return da(i,t)}if(0<Zu.length){da(Zu[0],t);for(var n=1;n<Zu.length;n++){var r=Zu[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Vr!==null&&da(Vr,t),Lr!==null&&da(Lr,t),Mr!==null&&da(Mr,t),ul.forEach(e),cl.forEach(e),n=0;n<Ar.length;n++)r=Ar[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Ar.length&&(n=Ar[0],n.blockedOn===null);)v1(n),n.blockedOn===null&&Ar.shift()}var so=cr.ReactCurrentBatchConfig,ad=!0;function yC(t,e,n,r){var i=ae,s=so.transition;so.transition=null;try{ae=1,qg(t,e,n,r)}finally{ae=i,so.transition=s}}function _C(t,e,n,r){var i=ae,s=so.transition;so.transition=null;try{ae=4,qg(t,e,n,r)}finally{ae=i,so.transition=s}}function qg(t,e,n,r){if(ad){var i=Kp(t,e,n,r);if(i===null)zf(t,e,r,ld,n),Y_(t,r);else if(gC(i,t,e,n,r))r.stopPropagation();else if(Y_(t,r),e&4&&-1<mC.indexOf(t)){for(;i!==null;){var s=hu(i);if(s!==null&&f1(s),s=Kp(t,e,n,r),s===null&&zf(t,e,r,ld,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else zf(t,e,r,null,n)}}var ld=null;function Kp(t,e,n,r){if(ld=null,t=Ug(r),t=Ni(t),t!==null)if(e=ms(t),e===null)t=null;else if(n=e.tag,n===13){if(t=s1(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return ld=t,null}function y1(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(oC()){case $g:return 1;case u1:return 4;case sd:case aC:return 16;case c1:return 536870912;default:return 16}default:return 16}}var br=null,Wg=null,Dc=null;function _1(){if(Dc)return Dc;var t,e=Wg,n=e.length,r,i="value"in br?br.value:br.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Dc=i.slice(t,1<r?1-r:void 0)}function Oc(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ec(){return!0}function J_(){return!1}function Yt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ec:J_,this.isPropagationStopped=J_,this}return ke(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ec)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ec)},persist:function(){},isPersistent:ec}),e}var $o={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Gg=Yt($o),du=ke({},$o,{view:0,detail:0}),wC=Yt(du),Df,Of,ha,lh=ke({},du,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Kg,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ha&&(ha&&t.type==="mousemove"?(Df=t.screenX-ha.screenX,Of=t.screenY-ha.screenY):Of=Df=0,ha=t),Df)},movementY:function(t){return"movementY"in t?t.movementY:Of}}),Z_=Yt(lh),IC=ke({},lh,{dataTransfer:0}),EC=Yt(IC),TC=ke({},du,{relatedTarget:0}),Vf=Yt(TC),SC=ke({},$o,{animationName:0,elapsedTime:0,pseudoElement:0}),AC=Yt(SC),kC=ke({},$o,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),PC=Yt(kC),RC=ke({},$o,{data:0}),ew=Yt(RC),bC={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},CC={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},xC={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function NC(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=xC[t])?!!e[t]:!1}function Kg(){return NC}var DC=ke({},du,{key:function(t){if(t.key){var e=bC[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Oc(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?CC[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Kg,charCode:function(t){return t.type==="keypress"?Oc(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Oc(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),OC=Yt(DC),VC=ke({},lh,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),tw=Yt(VC),LC=ke({},du,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Kg}),MC=Yt(LC),FC=ke({},$o,{propertyName:0,elapsedTime:0,pseudoElement:0}),jC=Yt(FC),UC=ke({},lh,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),$C=Yt(UC),zC=[9,13,27,32],Hg=er&&"CompositionEvent"in window,$a=null;er&&"documentMode"in document&&($a=document.documentMode);var BC=er&&"TextEvent"in window&&!$a,w1=er&&(!Hg||$a&&8<$a&&11>=$a),nw=" ",rw=!1;function I1(t,e){switch(t){case"keyup":return zC.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function E1(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var $s=!1;function qC(t,e){switch(t){case"compositionend":return E1(e);case"keypress":return e.which!==32?null:(rw=!0,nw);case"textInput":return t=e.data,t===nw&&rw?null:t;default:return null}}function WC(t,e){if($s)return t==="compositionend"||!Hg&&I1(t,e)?(t=_1(),Dc=Wg=br=null,$s=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return w1&&e.locale!=="ko"?null:e.data;default:return null}}var GC={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function iw(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!GC[t.type]:e==="textarea"}function T1(t,e,n,r){e1(r),e=ud(e,"onChange"),0<e.length&&(n=new Gg("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var za=null,hl=null;function KC(t){O1(t,0)}function uh(t){var e=qs(t);if(KE(e))return t}function HC(t,e){if(t==="change")return e}var S1=!1;if(er){var Lf;if(er){var Mf="oninput"in document;if(!Mf){var sw=document.createElement("div");sw.setAttribute("oninput","return;"),Mf=typeof sw.oninput=="function"}Lf=Mf}else Lf=!1;S1=Lf&&(!document.documentMode||9<document.documentMode)}function ow(){za&&(za.detachEvent("onpropertychange",A1),hl=za=null)}function A1(t){if(t.propertyName==="value"&&uh(hl)){var e=[];T1(e,hl,t,Ug(t)),i1(KC,e)}}function QC(t,e,n){t==="focusin"?(ow(),za=e,hl=n,za.attachEvent("onpropertychange",A1)):t==="focusout"&&ow()}function YC(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return uh(hl)}function XC(t,e){if(t==="click")return uh(e)}function JC(t,e){if(t==="input"||t==="change")return uh(e)}function ZC(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var vn=typeof Object.is=="function"?Object.is:ZC;function fl(t,e){if(vn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!bp.call(e,i)||!vn(t[i],e[i]))return!1}return!0}function aw(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function lw(t,e){var n=aw(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=aw(n)}}function k1(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?k1(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function P1(){for(var t=window,e=nd();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=nd(t.document)}return e}function Qg(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function ex(t){var e=P1(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&k1(n.ownerDocument.documentElement,n)){if(r!==null&&Qg(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=lw(n,s);var o=lw(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var tx=er&&"documentMode"in document&&11>=document.documentMode,zs=null,Hp=null,Ba=null,Qp=!1;function uw(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Qp||zs==null||zs!==nd(r)||(r=zs,"selectionStart"in r&&Qg(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ba&&fl(Ba,r)||(Ba=r,r=ud(Hp,"onSelect"),0<r.length&&(e=new Gg("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=zs)))}function tc(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Bs={animationend:tc("Animation","AnimationEnd"),animationiteration:tc("Animation","AnimationIteration"),animationstart:tc("Animation","AnimationStart"),transitionend:tc("Transition","TransitionEnd")},Ff={},R1={};er&&(R1=document.createElement("div").style,"AnimationEvent"in window||(delete Bs.animationend.animation,delete Bs.animationiteration.animation,delete Bs.animationstart.animation),"TransitionEvent"in window||delete Bs.transitionend.transition);function ch(t){if(Ff[t])return Ff[t];if(!Bs[t])return t;var e=Bs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in R1)return Ff[t]=e[n];return t}var b1=ch("animationend"),C1=ch("animationiteration"),x1=ch("animationstart"),N1=ch("transitionend"),D1=new Map,cw="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ui(t,e){D1.set(t,e),ps(e,[t])}for(var jf=0;jf<cw.length;jf++){var Uf=cw[jf],nx=Uf.toLowerCase(),rx=Uf[0].toUpperCase()+Uf.slice(1);ui(nx,"on"+rx)}ui(b1,"onAnimationEnd");ui(C1,"onAnimationIteration");ui(x1,"onAnimationStart");ui("dblclick","onDoubleClick");ui("focusin","onFocus");ui("focusout","onBlur");ui(N1,"onTransitionEnd");vo("onMouseEnter",["mouseout","mouseover"]);vo("onMouseLeave",["mouseout","mouseover"]);vo("onPointerEnter",["pointerout","pointerover"]);vo("onPointerLeave",["pointerout","pointerover"]);ps("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ps("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ps("onBeforeInput",["compositionend","keypress","textInput","paste"]);ps("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ps("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ps("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ba="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ix=new Set("cancel close invalid load scroll toggle".split(" ").concat(ba));function dw(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,nC(r,e,void 0,t),t.currentTarget=null}function O1(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;dw(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;dw(i,a,u),s=l}}}if(id)throw t=qp,id=!1,qp=null,t}function he(t,e){var n=e[em];n===void 0&&(n=e[em]=new Set);var r=t+"__bubble";n.has(r)||(V1(e,t,2,!1),n.add(r))}function $f(t,e,n){var r=0;e&&(r|=4),V1(n,t,r,e)}var nc="_reactListening"+Math.random().toString(36).slice(2);function pl(t){if(!t[nc]){t[nc]=!0,zE.forEach(function(n){n!=="selectionchange"&&(ix.has(n)||$f(n,!1,t),$f(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[nc]||(e[nc]=!0,$f("selectionchange",!1,e))}}function V1(t,e,n,r){switch(y1(e)){case 1:var i=yC;break;case 4:i=_C;break;default:i=qg}n=i.bind(null,e,n,t),i=void 0,!Bp||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function zf(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Ni(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}i1(function(){var u=s,c=Ug(n),d=[];e:{var h=D1.get(t);if(h!==void 0){var f=Gg,v=t;switch(t){case"keypress":if(Oc(n)===0)break e;case"keydown":case"keyup":f=OC;break;case"focusin":v="focus",f=Vf;break;case"focusout":v="blur",f=Vf;break;case"beforeblur":case"afterblur":f=Vf;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":f=Z_;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":f=EC;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":f=MC;break;case b1:case C1:case x1:f=AC;break;case N1:f=jC;break;case"scroll":f=wC;break;case"wheel":f=$C;break;case"copy":case"cut":case"paste":f=PC;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":f=tw}var y=(e&4)!==0,w=!y&&t==="scroll",m=y?h!==null?h+"Capture":null:h;y=[];for(var p=u,_;p!==null;){_=p;var E=_.stateNode;if(_.tag===5&&E!==null&&(_=E,m!==null&&(E=ll(p,m),E!=null&&y.push(ml(p,E,_)))),w)break;p=p.return}0<y.length&&(h=new f(h,v,null,n,c),d.push({event:h,listeners:y}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",f=t==="mouseout"||t==="pointerout",h&&n!==$p&&(v=n.relatedTarget||n.fromElement)&&(Ni(v)||v[tr]))break e;if((f||h)&&(h=c.window===c?c:(h=c.ownerDocument)?h.defaultView||h.parentWindow:window,f?(v=n.relatedTarget||n.toElement,f=u,v=v?Ni(v):null,v!==null&&(w=ms(v),v!==w||v.tag!==5&&v.tag!==6)&&(v=null)):(f=null,v=u),f!==v)){if(y=Z_,E="onMouseLeave",m="onMouseEnter",p="mouse",(t==="pointerout"||t==="pointerover")&&(y=tw,E="onPointerLeave",m="onPointerEnter",p="pointer"),w=f==null?h:qs(f),_=v==null?h:qs(v),h=new y(E,p+"leave",f,n,c),h.target=w,h.relatedTarget=_,E=null,Ni(c)===u&&(y=new y(m,p+"enter",v,n,c),y.target=_,y.relatedTarget=w,E=y),w=E,f&&v)t:{for(y=f,m=v,p=0,_=y;_;_=ks(_))p++;for(_=0,E=m;E;E=ks(E))_++;for(;0<p-_;)y=ks(y),p--;for(;0<_-p;)m=ks(m),_--;for(;p--;){if(y===m||m!==null&&y===m.alternate)break t;y=ks(y),m=ks(m)}y=null}else y=null;f!==null&&hw(d,h,f,y,!1),v!==null&&w!==null&&hw(d,w,v,y,!0)}}e:{if(h=u?qs(u):window,f=h.nodeName&&h.nodeName.toLowerCase(),f==="select"||f==="input"&&h.type==="file")var S=HC;else if(iw(h))if(S1)S=JC;else{S=YC;var R=QC}else(f=h.nodeName)&&f.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(S=XC);if(S&&(S=S(t,u))){T1(d,S,n,c);break e}R&&R(t,h,u),t==="focusout"&&(R=h._wrapperState)&&R.controlled&&h.type==="number"&&Lp(h,"number",h.value)}switch(R=u?qs(u):window,t){case"focusin":(iw(R)||R.contentEditable==="true")&&(zs=R,Hp=u,Ba=null);break;case"focusout":Ba=Hp=zs=null;break;case"mousedown":Qp=!0;break;case"contextmenu":case"mouseup":case"dragend":Qp=!1,uw(d,n,c);break;case"selectionchange":if(tx)break;case"keydown":case"keyup":uw(d,n,c)}var x;if(Hg)e:{switch(t){case"compositionstart":var M="onCompositionStart";break e;case"compositionend":M="onCompositionEnd";break e;case"compositionupdate":M="onCompositionUpdate";break e}M=void 0}else $s?I1(t,n)&&(M="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(M="onCompositionStart");M&&(w1&&n.locale!=="ko"&&($s||M!=="onCompositionStart"?M==="onCompositionEnd"&&$s&&(x=_1()):(br=c,Wg="value"in br?br.value:br.textContent,$s=!0)),R=ud(u,M),0<R.length&&(M=new ew(M,t,null,n,c),d.push({event:M,listeners:R}),x?M.data=x:(x=E1(n),x!==null&&(M.data=x)))),(x=BC?qC(t,n):WC(t,n))&&(u=ud(u,"onBeforeInput"),0<u.length&&(c=new ew("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=x))}O1(d,e)})}function ml(t,e,n){return{instance:t,listener:e,currentTarget:n}}function ud(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=ll(t,n),s!=null&&r.unshift(ml(t,s,i)),s=ll(t,e),s!=null&&r.push(ml(t,s,i))),t=t.return}return r}function ks(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function hw(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=ll(n,s),l!=null&&o.unshift(ml(n,l,a))):i||(l=ll(n,s),l!=null&&o.push(ml(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var sx=/\r\n?/g,ox=/\u0000|\uFFFD/g;function fw(t){return(typeof t=="string"?t:""+t).replace(sx,`
`).replace(ox,"")}function rc(t,e,n){if(e=fw(e),fw(t)!==e&&n)throw Error(b(425))}function cd(){}var Yp=null,Xp=null;function Jp(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Zp=typeof setTimeout=="function"?setTimeout:void 0,ax=typeof clearTimeout=="function"?clearTimeout:void 0,pw=typeof Promise=="function"?Promise:void 0,lx=typeof queueMicrotask=="function"?queueMicrotask:typeof pw<"u"?function(t){return pw.resolve(null).then(t).catch(ux)}:Zp;function ux(t){setTimeout(function(){throw t})}function Bf(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),dl(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);dl(e)}function Fr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function mw(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var zo=Math.random().toString(36).slice(2),Tn="__reactFiber$"+zo,gl="__reactProps$"+zo,tr="__reactContainer$"+zo,em="__reactEvents$"+zo,cx="__reactListeners$"+zo,dx="__reactHandles$"+zo;function Ni(t){var e=t[Tn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[tr]||n[Tn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=mw(t);t!==null;){if(n=t[Tn])return n;t=mw(t)}return e}t=n,n=t.parentNode}return null}function hu(t){return t=t[Tn]||t[tr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function qs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(b(33))}function dh(t){return t[gl]||null}var tm=[],Ws=-1;function ci(t){return{current:t}}function ge(t){0>Ws||(t.current=tm[Ws],tm[Ws]=null,Ws--)}function ce(t,e){Ws++,tm[Ws]=t.current,t.current=e}var Kr={},_t=ci(Kr),Ft=ci(!1),Hi=Kr;function yo(t,e){var n=t.type.contextTypes;if(!n)return Kr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function jt(t){return t=t.childContextTypes,t!=null}function dd(){ge(Ft),ge(_t)}function gw(t,e,n){if(_t.current!==Kr)throw Error(b(168));ce(_t,e),ce(Ft,n)}function L1(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(b(108,Qb(t)||"Unknown",i));return ke({},n,r)}function hd(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Kr,Hi=_t.current,ce(_t,t),ce(Ft,Ft.current),!0}function vw(t,e,n){var r=t.stateNode;if(!r)throw Error(b(169));n?(t=L1(t,e,Hi),r.__reactInternalMemoizedMergedChildContext=t,ge(Ft),ge(_t),ce(_t,t)):ge(Ft),ce(Ft,n)}var Wn=null,hh=!1,qf=!1;function M1(t){Wn===null?Wn=[t]:Wn.push(t)}function hx(t){hh=!0,M1(t)}function di(){if(!qf&&Wn!==null){qf=!0;var t=0,e=ae;try{var n=Wn;for(ae=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Wn=null,hh=!1}catch(i){throw Wn!==null&&(Wn=Wn.slice(t+1)),l1($g,di),i}finally{ae=e,qf=!1}}return null}var Gs=[],Ks=0,fd=null,pd=0,Jt=[],Zt=0,Qi=null,Gn=1,Kn="";function Ti(t,e){Gs[Ks++]=pd,Gs[Ks++]=fd,fd=t,pd=e}function F1(t,e,n){Jt[Zt++]=Gn,Jt[Zt++]=Kn,Jt[Zt++]=Qi,Qi=t;var r=Gn;t=Kn;var i=32-mn(r)-1;r&=~(1<<i),n+=1;var s=32-mn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Gn=1<<32-mn(e)+i|n<<i|r,Kn=s+t}else Gn=1<<s|n<<i|r,Kn=t}function Yg(t){t.return!==null&&(Ti(t,1),F1(t,1,0))}function Xg(t){for(;t===fd;)fd=Gs[--Ks],Gs[Ks]=null,pd=Gs[--Ks],Gs[Ks]=null;for(;t===Qi;)Qi=Jt[--Zt],Jt[Zt]=null,Kn=Jt[--Zt],Jt[Zt]=null,Gn=Jt[--Zt],Jt[Zt]=null}var Wt=null,Bt=null,ye=!1,fn=null;function j1(t,e){var n=tn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function yw(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Wt=t,Bt=Fr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Wt=t,Bt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Qi!==null?{id:Gn,overflow:Kn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=tn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Wt=t,Bt=null,!0):!1;default:return!1}}function nm(t){return(t.mode&1)!==0&&(t.flags&128)===0}function rm(t){if(ye){var e=Bt;if(e){var n=e;if(!yw(t,e)){if(nm(t))throw Error(b(418));e=Fr(n.nextSibling);var r=Wt;e&&yw(t,e)?j1(r,n):(t.flags=t.flags&-4097|2,ye=!1,Wt=t)}}else{if(nm(t))throw Error(b(418));t.flags=t.flags&-4097|2,ye=!1,Wt=t}}}function _w(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Wt=t}function ic(t){if(t!==Wt)return!1;if(!ye)return _w(t),ye=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Jp(t.type,t.memoizedProps)),e&&(e=Bt)){if(nm(t))throw U1(),Error(b(418));for(;e;)j1(t,e),e=Fr(e.nextSibling)}if(_w(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(b(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Bt=Fr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Bt=null}}else Bt=Wt?Fr(t.stateNode.nextSibling):null;return!0}function U1(){for(var t=Bt;t;)t=Fr(t.nextSibling)}function _o(){Bt=Wt=null,ye=!1}function Jg(t){fn===null?fn=[t]:fn.push(t)}var fx=cr.ReactCurrentBatchConfig;function dn(t,e){if(t&&t.defaultProps){e=ke({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var md=ci(null),gd=null,Hs=null,Zg=null;function ev(){Zg=Hs=gd=null}function tv(t){var e=md.current;ge(md),t._currentValue=e}function im(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function oo(t,e){gd=t,Zg=Hs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Ot=!0),t.firstContext=null)}function on(t){var e=t._currentValue;if(Zg!==t)if(t={context:t,memoizedValue:e,next:null},Hs===null){if(gd===null)throw Error(b(308));Hs=t,gd.dependencies={lanes:0,firstContext:t}}else Hs=Hs.next=t;return e}var Di=null;function nv(t){Di===null?Di=[t]:Di.push(t)}function $1(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,nv(e)):(n.next=i.next,i.next=n),e.interleaved=n,nr(t,r)}function nr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Sr=!1;function rv(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function z1(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Xn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function jr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ie&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,nr(t,n)}return i=r.interleaved,i===null?(e.next=e,nv(r)):(e.next=i.next,i.next=e),r.interleaved=e,nr(t,n)}function Vc(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,zg(t,n)}}function ww(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function vd(t,e,n,r){var i=t.updateQueue;Sr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var d=i.baseState;o=0,c=u=l=null,a=s;do{var h=a.lane,f=a.eventTime;if((r&h)===h){c!==null&&(c=c.next={eventTime:f,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=t,y=a;switch(h=e,f=n,y.tag){case 1:if(v=y.payload,typeof v=="function"){d=v.call(f,d,h);break e}d=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=y.payload,h=typeof v=="function"?v.call(f,d,h):v,h==null)break e;d=ke({},d,h);break e;case 2:Sr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,h=i.effects,h===null?i.effects=[a]:h.push(a))}else f={eventTime:f,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=f,l=d):c=c.next=f,o|=h;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;h=a,a=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(!0);if(c===null&&(l=d),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Xi|=o,t.lanes=o,t.memoizedState=d}}function Iw(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(b(191,i));i.call(r)}}}var B1=new $E.Component().refs;function sm(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:ke({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var fh={isMounted:function(t){return(t=t._reactInternals)?ms(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=St(),i=$r(t),s=Xn(r,i);s.payload=e,n!=null&&(s.callback=n),e=jr(t,s,i),e!==null&&(gn(e,t,i,r),Vc(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=St(),i=$r(t),s=Xn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=jr(t,s,i),e!==null&&(gn(e,t,i,r),Vc(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=St(),r=$r(t),i=Xn(n,r);i.tag=2,e!=null&&(i.callback=e),e=jr(t,i,r),e!==null&&(gn(e,t,r,n),Vc(e,t,r))}};function Ew(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!fl(n,r)||!fl(i,s):!0}function q1(t,e,n){var r=!1,i=Kr,s=e.contextType;return typeof s=="object"&&s!==null?s=on(s):(i=jt(e)?Hi:_t.current,r=e.contextTypes,s=(r=r!=null)?yo(t,i):Kr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=fh,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Tw(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&fh.enqueueReplaceState(e,e.state,null)}function om(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=B1,rv(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=on(s):(s=jt(e)?Hi:_t.current,i.context=yo(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(sm(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&fh.enqueueReplaceState(i,i.state,null),vd(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function fa(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(b(309));var r=n.stateNode}if(!r)throw Error(b(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===B1&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(b(284));if(!n._owner)throw Error(b(290,t))}return t}function sc(t,e){throw t=Object.prototype.toString.call(e),Error(b(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Sw(t){var e=t._init;return e(t._payload)}function W1(t){function e(m,p){if(t){var _=m.deletions;_===null?(m.deletions=[p],m.flags|=16):_.push(p)}}function n(m,p){if(!t)return null;for(;p!==null;)e(m,p),p=p.sibling;return null}function r(m,p){for(m=new Map;p!==null;)p.key!==null?m.set(p.key,p):m.set(p.index,p),p=p.sibling;return m}function i(m,p){return m=zr(m,p),m.index=0,m.sibling=null,m}function s(m,p,_){return m.index=_,t?(_=m.alternate,_!==null?(_=_.index,_<p?(m.flags|=2,p):_):(m.flags|=2,p)):(m.flags|=1048576,p)}function o(m){return t&&m.alternate===null&&(m.flags|=2),m}function a(m,p,_,E){return p===null||p.tag!==6?(p=Xf(_,m.mode,E),p.return=m,p):(p=i(p,_),p.return=m,p)}function l(m,p,_,E){var S=_.type;return S===Us?c(m,p,_.props.children,E,_.key):p!==null&&(p.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Tr&&Sw(S)===p.type)?(E=i(p,_.props),E.ref=fa(m,p,_),E.return=m,E):(E=$c(_.type,_.key,_.props,null,m.mode,E),E.ref=fa(m,p,_),E.return=m,E)}function u(m,p,_,E){return p===null||p.tag!==4||p.stateNode.containerInfo!==_.containerInfo||p.stateNode.implementation!==_.implementation?(p=Jf(_,m.mode,E),p.return=m,p):(p=i(p,_.children||[]),p.return=m,p)}function c(m,p,_,E,S){return p===null||p.tag!==7?(p=Bi(_,m.mode,E,S),p.return=m,p):(p=i(p,_),p.return=m,p)}function d(m,p,_){if(typeof p=="string"&&p!==""||typeof p=="number")return p=Xf(""+p,m.mode,_),p.return=m,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Hu:return _=$c(p.type,p.key,p.props,null,m.mode,_),_.ref=fa(m,null,p),_.return=m,_;case js:return p=Jf(p,m.mode,_),p.return=m,p;case Tr:var E=p._init;return d(m,E(p._payload),_)}if(Pa(p)||la(p))return p=Bi(p,m.mode,_,null),p.return=m,p;sc(m,p)}return null}function h(m,p,_,E){var S=p!==null?p.key:null;if(typeof _=="string"&&_!==""||typeof _=="number")return S!==null?null:a(m,p,""+_,E);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Hu:return _.key===S?l(m,p,_,E):null;case js:return _.key===S?u(m,p,_,E):null;case Tr:return S=_._init,h(m,p,S(_._payload),E)}if(Pa(_)||la(_))return S!==null?null:c(m,p,_,E,null);sc(m,_)}return null}function f(m,p,_,E,S){if(typeof E=="string"&&E!==""||typeof E=="number")return m=m.get(_)||null,a(p,m,""+E,S);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case Hu:return m=m.get(E.key===null?_:E.key)||null,l(p,m,E,S);case js:return m=m.get(E.key===null?_:E.key)||null,u(p,m,E,S);case Tr:var R=E._init;return f(m,p,_,R(E._payload),S)}if(Pa(E)||la(E))return m=m.get(_)||null,c(p,m,E,S,null);sc(p,E)}return null}function v(m,p,_,E){for(var S=null,R=null,x=p,M=p=0,Z=null;x!==null&&M<_.length;M++){x.index>M?(Z=x,x=null):Z=x.sibling;var G=h(m,x,_[M],E);if(G===null){x===null&&(x=Z);break}t&&x&&G.alternate===null&&e(m,x),p=s(G,p,M),R===null?S=G:R.sibling=G,R=G,x=Z}if(M===_.length)return n(m,x),ye&&Ti(m,M),S;if(x===null){for(;M<_.length;M++)x=d(m,_[M],E),x!==null&&(p=s(x,p,M),R===null?S=x:R.sibling=x,R=x);return ye&&Ti(m,M),S}for(x=r(m,x);M<_.length;M++)Z=f(x,m,M,_[M],E),Z!==null&&(t&&Z.alternate!==null&&x.delete(Z.key===null?M:Z.key),p=s(Z,p,M),R===null?S=Z:R.sibling=Z,R=Z);return t&&x.forEach(function(un){return e(m,un)}),ye&&Ti(m,M),S}function y(m,p,_,E){var S=la(_);if(typeof S!="function")throw Error(b(150));if(_=S.call(_),_==null)throw Error(b(151));for(var R=S=null,x=p,M=p=0,Z=null,G=_.next();x!==null&&!G.done;M++,G=_.next()){x.index>M?(Z=x,x=null):Z=x.sibling;var un=h(m,x,G.value,E);if(un===null){x===null&&(x=Z);break}t&&x&&un.alternate===null&&e(m,x),p=s(un,p,M),R===null?S=un:R.sibling=un,R=un,x=Z}if(G.done)return n(m,x),ye&&Ti(m,M),S;if(x===null){for(;!G.done;M++,G=_.next())G=d(m,G.value,E),G!==null&&(p=s(G,p,M),R===null?S=G:R.sibling=G,R=G);return ye&&Ti(m,M),S}for(x=r(m,x);!G.done;M++,G=_.next())G=f(x,m,M,G.value,E),G!==null&&(t&&G.alternate!==null&&x.delete(G.key===null?M:G.key),p=s(G,p,M),R===null?S=G:R.sibling=G,R=G);return t&&x.forEach(function(oa){return e(m,oa)}),ye&&Ti(m,M),S}function w(m,p,_,E){if(typeof _=="object"&&_!==null&&_.type===Us&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case Hu:e:{for(var S=_.key,R=p;R!==null;){if(R.key===S){if(S=_.type,S===Us){if(R.tag===7){n(m,R.sibling),p=i(R,_.props.children),p.return=m,m=p;break e}}else if(R.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Tr&&Sw(S)===R.type){n(m,R.sibling),p=i(R,_.props),p.ref=fa(m,R,_),p.return=m,m=p;break e}n(m,R);break}else e(m,R);R=R.sibling}_.type===Us?(p=Bi(_.props.children,m.mode,E,_.key),p.return=m,m=p):(E=$c(_.type,_.key,_.props,null,m.mode,E),E.ref=fa(m,p,_),E.return=m,m=E)}return o(m);case js:e:{for(R=_.key;p!==null;){if(p.key===R)if(p.tag===4&&p.stateNode.containerInfo===_.containerInfo&&p.stateNode.implementation===_.implementation){n(m,p.sibling),p=i(p,_.children||[]),p.return=m,m=p;break e}else{n(m,p);break}else e(m,p);p=p.sibling}p=Jf(_,m.mode,E),p.return=m,m=p}return o(m);case Tr:return R=_._init,w(m,p,R(_._payload),E)}if(Pa(_))return v(m,p,_,E);if(la(_))return y(m,p,_,E);sc(m,_)}return typeof _=="string"&&_!==""||typeof _=="number"?(_=""+_,p!==null&&p.tag===6?(n(m,p.sibling),p=i(p,_),p.return=m,m=p):(n(m,p),p=Xf(_,m.mode,E),p.return=m,m=p),o(m)):n(m,p)}return w}var wo=W1(!0),G1=W1(!1),fu={},Ln=ci(fu),vl=ci(fu),yl=ci(fu);function Oi(t){if(t===fu)throw Error(b(174));return t}function iv(t,e){switch(ce(yl,e),ce(vl,t),ce(Ln,fu),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Fp(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Fp(e,t)}ge(Ln),ce(Ln,e)}function Io(){ge(Ln),ge(vl),ge(yl)}function K1(t){Oi(yl.current);var e=Oi(Ln.current),n=Fp(e,t.type);e!==n&&(ce(vl,t),ce(Ln,n))}function sv(t){vl.current===t&&(ge(Ln),ge(vl))}var Te=ci(0);function yd(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Wf=[];function ov(){for(var t=0;t<Wf.length;t++)Wf[t]._workInProgressVersionPrimary=null;Wf.length=0}var Lc=cr.ReactCurrentDispatcher,Gf=cr.ReactCurrentBatchConfig,Yi=0,Se=null,Be=null,Qe=null,_d=!1,qa=!1,_l=0,px=0;function ft(){throw Error(b(321))}function av(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!vn(t[n],e[n]))return!1;return!0}function lv(t,e,n,r,i,s){if(Yi=s,Se=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Lc.current=t===null||t.memoizedState===null?yx:_x,t=n(r,i),qa){s=0;do{if(qa=!1,_l=0,25<=s)throw Error(b(301));s+=1,Qe=Be=null,e.updateQueue=null,Lc.current=wx,t=n(r,i)}while(qa)}if(Lc.current=wd,e=Be!==null&&Be.next!==null,Yi=0,Qe=Be=Se=null,_d=!1,e)throw Error(b(300));return t}function uv(){var t=_l!==0;return _l=0,t}function En(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Qe===null?Se.memoizedState=Qe=t:Qe=Qe.next=t,Qe}function an(){if(Be===null){var t=Se.alternate;t=t!==null?t.memoizedState:null}else t=Be.next;var e=Qe===null?Se.memoizedState:Qe.next;if(e!==null)Qe=e,Be=t;else{if(t===null)throw Error(b(310));Be=t,t={memoizedState:Be.memoizedState,baseState:Be.baseState,baseQueue:Be.baseQueue,queue:Be.queue,next:null},Qe===null?Se.memoizedState=Qe=t:Qe=Qe.next=t}return Qe}function wl(t,e){return typeof e=="function"?e(t):e}function Kf(t){var e=an(),n=e.queue;if(n===null)throw Error(b(311));n.lastRenderedReducer=t;var r=Be,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((Yi&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=d,o=r):l=l.next=d,Se.lanes|=c,Xi|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,vn(r,e.memoizedState)||(Ot=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Se.lanes|=s,Xi|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Hf(t){var e=an(),n=e.queue;if(n===null)throw Error(b(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);vn(s,e.memoizedState)||(Ot=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function H1(){}function Q1(t,e){var n=Se,r=an(),i=e(),s=!vn(r.memoizedState,i);if(s&&(r.memoizedState=i,Ot=!0),r=r.queue,cv(J1.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Qe!==null&&Qe.memoizedState.tag&1){if(n.flags|=2048,Il(9,X1.bind(null,n,r,i,e),void 0,null),Xe===null)throw Error(b(349));Yi&30||Y1(n,e,i)}return i}function Y1(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Se.updateQueue,e===null?(e={lastEffect:null,stores:null},Se.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function X1(t,e,n,r){e.value=n,e.getSnapshot=r,Z1(e)&&eT(t)}function J1(t,e,n){return n(function(){Z1(e)&&eT(t)})}function Z1(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!vn(t,n)}catch{return!0}}function eT(t){var e=nr(t,1);e!==null&&gn(e,t,1,-1)}function Aw(t){var e=En();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:wl,lastRenderedState:t},e.queue=t,t=t.dispatch=vx.bind(null,Se,t),[e.memoizedState,t]}function Il(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Se.updateQueue,e===null?(e={lastEffect:null,stores:null},Se.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function tT(){return an().memoizedState}function Mc(t,e,n,r){var i=En();Se.flags|=t,i.memoizedState=Il(1|e,n,void 0,r===void 0?null:r)}function ph(t,e,n,r){var i=an();r=r===void 0?null:r;var s=void 0;if(Be!==null){var o=Be.memoizedState;if(s=o.destroy,r!==null&&av(r,o.deps)){i.memoizedState=Il(e,n,s,r);return}}Se.flags|=t,i.memoizedState=Il(1|e,n,s,r)}function kw(t,e){return Mc(8390656,8,t,e)}function cv(t,e){return ph(2048,8,t,e)}function nT(t,e){return ph(4,2,t,e)}function rT(t,e){return ph(4,4,t,e)}function iT(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function sT(t,e,n){return n=n!=null?n.concat([t]):null,ph(4,4,iT.bind(null,e,t),n)}function dv(){}function oT(t,e){var n=an();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&av(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function aT(t,e){var n=an();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&av(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function lT(t,e,n){return Yi&21?(vn(n,e)||(n=d1(),Se.lanes|=n,Xi|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Ot=!0),t.memoizedState=n)}function mx(t,e){var n=ae;ae=n!==0&&4>n?n:4,t(!0);var r=Gf.transition;Gf.transition={};try{t(!1),e()}finally{ae=n,Gf.transition=r}}function uT(){return an().memoizedState}function gx(t,e,n){var r=$r(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},cT(t))dT(e,n);else if(n=$1(t,e,n,r),n!==null){var i=St();gn(n,t,r,i),hT(n,e,r)}}function vx(t,e,n){var r=$r(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(cT(t))dT(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,vn(a,o)){var l=e.interleaved;l===null?(i.next=i,nv(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=$1(t,e,i,r),n!==null&&(i=St(),gn(n,t,r,i),hT(n,e,r))}}function cT(t){var e=t.alternate;return t===Se||e!==null&&e===Se}function dT(t,e){qa=_d=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function hT(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,zg(t,n)}}var wd={readContext:on,useCallback:ft,useContext:ft,useEffect:ft,useImperativeHandle:ft,useInsertionEffect:ft,useLayoutEffect:ft,useMemo:ft,useReducer:ft,useRef:ft,useState:ft,useDebugValue:ft,useDeferredValue:ft,useTransition:ft,useMutableSource:ft,useSyncExternalStore:ft,useId:ft,unstable_isNewReconciler:!1},yx={readContext:on,useCallback:function(t,e){return En().memoizedState=[t,e===void 0?null:e],t},useContext:on,useEffect:kw,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Mc(4194308,4,iT.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Mc(4194308,4,t,e)},useInsertionEffect:function(t,e){return Mc(4,2,t,e)},useMemo:function(t,e){var n=En();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=En();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=gx.bind(null,Se,t),[r.memoizedState,t]},useRef:function(t){var e=En();return t={current:t},e.memoizedState=t},useState:Aw,useDebugValue:dv,useDeferredValue:function(t){return En().memoizedState=t},useTransition:function(){var t=Aw(!1),e=t[0];return t=mx.bind(null,t[1]),En().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Se,i=En();if(ye){if(n===void 0)throw Error(b(407));n=n()}else{if(n=e(),Xe===null)throw Error(b(349));Yi&30||Y1(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,kw(J1.bind(null,r,s,t),[t]),r.flags|=2048,Il(9,X1.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=En(),e=Xe.identifierPrefix;if(ye){var n=Kn,r=Gn;n=(r&~(1<<32-mn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=_l++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=px++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},_x={readContext:on,useCallback:oT,useContext:on,useEffect:cv,useImperativeHandle:sT,useInsertionEffect:nT,useLayoutEffect:rT,useMemo:aT,useReducer:Kf,useRef:tT,useState:function(){return Kf(wl)},useDebugValue:dv,useDeferredValue:function(t){var e=an();return lT(e,Be.memoizedState,t)},useTransition:function(){var t=Kf(wl)[0],e=an().memoizedState;return[t,e]},useMutableSource:H1,useSyncExternalStore:Q1,useId:uT,unstable_isNewReconciler:!1},wx={readContext:on,useCallback:oT,useContext:on,useEffect:cv,useImperativeHandle:sT,useInsertionEffect:nT,useLayoutEffect:rT,useMemo:aT,useReducer:Hf,useRef:tT,useState:function(){return Hf(wl)},useDebugValue:dv,useDeferredValue:function(t){var e=an();return Be===null?e.memoizedState=t:lT(e,Be.memoizedState,t)},useTransition:function(){var t=Hf(wl)[0],e=an().memoizedState;return[t,e]},useMutableSource:H1,useSyncExternalStore:Q1,useId:uT,unstable_isNewReconciler:!1};function Eo(t,e){try{var n="",r=e;do n+=Hb(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Qf(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function am(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Ix=typeof WeakMap=="function"?WeakMap:Map;function fT(t,e,n){n=Xn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Ed||(Ed=!0,vm=r),am(t,e)},n}function pT(t,e,n){n=Xn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){am(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){am(t,e),typeof r!="function"&&(Ur===null?Ur=new Set([this]):Ur.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Pw(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new Ix;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=Vx.bind(null,t,e,n),e.then(t,t))}function Rw(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function bw(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Xn(-1,1),e.tag=2,jr(n,e,1))),n.lanes|=1),t)}var Ex=cr.ReactCurrentOwner,Ot=!1;function wt(t,e,n,r){e.child=t===null?G1(e,null,n,r):wo(e,t.child,n,r)}function Cw(t,e,n,r,i){n=n.render;var s=e.ref;return oo(e,i),r=lv(t,e,n,r,s,i),n=uv(),t!==null&&!Ot?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,rr(t,e,i)):(ye&&n&&Yg(e),e.flags|=1,wt(t,e,r,i),e.child)}function xw(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!_v(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,mT(t,e,s,r,i)):(t=$c(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:fl,n(o,r)&&t.ref===e.ref)return rr(t,e,i)}return e.flags|=1,t=zr(s,r),t.ref=e.ref,t.return=e,e.child=t}function mT(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(fl(s,r)&&t.ref===e.ref)if(Ot=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Ot=!0);else return e.lanes=t.lanes,rr(t,e,i)}return lm(t,e,n,r,i)}function gT(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ce(Ys,$t),$t|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ce(Ys,$t),$t|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,ce(Ys,$t),$t|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,ce(Ys,$t),$t|=r;return wt(t,e,i,n),e.child}function vT(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function lm(t,e,n,r,i){var s=jt(n)?Hi:_t.current;return s=yo(e,s),oo(e,i),n=lv(t,e,n,r,s,i),r=uv(),t!==null&&!Ot?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,rr(t,e,i)):(ye&&r&&Yg(e),e.flags|=1,wt(t,e,n,i),e.child)}function Nw(t,e,n,r,i){if(jt(n)){var s=!0;hd(e)}else s=!1;if(oo(e,i),e.stateNode===null)Fc(t,e),q1(e,n,r),om(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=on(u):(u=jt(n)?Hi:_t.current,u=yo(e,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&Tw(e,o,r,u),Sr=!1;var h=e.memoizedState;o.state=h,vd(e,r,o,i),l=e.memoizedState,a!==r||h!==l||Ft.current||Sr?(typeof c=="function"&&(sm(e,n,c,r),l=e.memoizedState),(a=Sr||Ew(e,n,a,r,h,l,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,z1(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:dn(e.type,a),o.props=u,d=e.pendingProps,h=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=on(l):(l=jt(n)?Hi:_t.current,l=yo(e,l));var f=n.getDerivedStateFromProps;(c=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||h!==l)&&Tw(e,o,r,l),Sr=!1,h=e.memoizedState,o.state=h,vd(e,r,o,i);var v=e.memoizedState;a!==d||h!==v||Ft.current||Sr?(typeof f=="function"&&(sm(e,n,f,r),v=e.memoizedState),(u=Sr||Ew(e,n,u,r,h,v,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,v,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,v,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=v),o.props=r,o.state=v,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),r=!1)}return um(t,e,n,r,s,i)}function um(t,e,n,r,i,s){vT(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&vw(e,n,!1),rr(t,e,s);r=e.stateNode,Ex.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=wo(e,t.child,null,s),e.child=wo(e,null,a,s)):wt(t,e,a,s),e.memoizedState=r.state,i&&vw(e,n,!0),e.child}function yT(t){var e=t.stateNode;e.pendingContext?gw(t,e.pendingContext,e.pendingContext!==e.context):e.context&&gw(t,e.context,!1),iv(t,e.containerInfo)}function Dw(t,e,n,r,i){return _o(),Jg(i),e.flags|=256,wt(t,e,n,r),e.child}var cm={dehydrated:null,treeContext:null,retryLane:0};function dm(t){return{baseLanes:t,cachePool:null,transitions:null}}function _T(t,e,n){var r=e.pendingProps,i=Te.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),ce(Te,i&1),t===null)return rm(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=vh(o,r,0,null),t=Bi(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=dm(n),e.memoizedState=cm,t):hv(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return Tx(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=zr(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=zr(a,s):(s=Bi(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?dm(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=cm,r}return s=t.child,t=s.sibling,r=zr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function hv(t,e){return e=vh({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function oc(t,e,n,r){return r!==null&&Jg(r),wo(e,t.child,null,n),t=hv(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Tx(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Qf(Error(b(422))),oc(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=vh({mode:"visible",children:r.children},i,0,null),s=Bi(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&wo(e,t.child,null,o),e.child.memoizedState=dm(o),e.memoizedState=cm,s);if(!(e.mode&1))return oc(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(b(419)),r=Qf(s,r,void 0),oc(t,e,o,r)}if(a=(o&t.childLanes)!==0,Ot||a){if(r=Xe,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,nr(t,i),gn(r,t,i,-1))}return yv(),r=Qf(Error(b(421))),oc(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=Lx.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Bt=Fr(i.nextSibling),Wt=e,ye=!0,fn=null,t!==null&&(Jt[Zt++]=Gn,Jt[Zt++]=Kn,Jt[Zt++]=Qi,Gn=t.id,Kn=t.overflow,Qi=e),e=hv(e,r.children),e.flags|=4096,e)}function Ow(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),im(t.return,e,n)}function Yf(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function wT(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(wt(t,e,r.children,n),r=Te.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Ow(t,n,e);else if(t.tag===19)Ow(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ce(Te,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&yd(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Yf(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&yd(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Yf(e,!0,n,null,s);break;case"together":Yf(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Fc(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function rr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Xi|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(b(153));if(e.child!==null){for(t=e.child,n=zr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=zr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Sx(t,e,n){switch(e.tag){case 3:yT(e),_o();break;case 5:K1(e);break;case 1:jt(e.type)&&hd(e);break;case 4:iv(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;ce(md,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ce(Te,Te.current&1),e.flags|=128,null):n&e.child.childLanes?_T(t,e,n):(ce(Te,Te.current&1),t=rr(t,e,n),t!==null?t.sibling:null);ce(Te,Te.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return wT(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ce(Te,Te.current),r)break;return null;case 22:case 23:return e.lanes=0,gT(t,e,n)}return rr(t,e,n)}var IT,hm,ET,TT;IT=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};hm=function(){};ET=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Oi(Ln.current);var s=null;switch(n){case"input":i=Op(t,i),r=Op(t,r),s=[];break;case"select":i=ke({},i,{value:void 0}),r=ke({},r,{value:void 0}),s=[];break;case"textarea":i=Mp(t,i),r=Mp(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=cd)}jp(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(ol.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(ol.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&he("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};TT=function(t,e,n,r){n!==r&&(e.flags|=4)};function pa(t,e){if(!ye)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function pt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function Ax(t,e,n){var r=e.pendingProps;switch(Xg(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return pt(e),null;case 1:return jt(e.type)&&dd(),pt(e),null;case 3:return r=e.stateNode,Io(),ge(Ft),ge(_t),ov(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(ic(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,fn!==null&&(wm(fn),fn=null))),hm(t,e),pt(e),null;case 5:sv(e);var i=Oi(yl.current);if(n=e.type,t!==null&&e.stateNode!=null)ET(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(b(166));return pt(e),null}if(t=Oi(Ln.current),ic(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Tn]=e,r[gl]=s,t=(e.mode&1)!==0,n){case"dialog":he("cancel",r),he("close",r);break;case"iframe":case"object":case"embed":he("load",r);break;case"video":case"audio":for(i=0;i<ba.length;i++)he(ba[i],r);break;case"source":he("error",r);break;case"img":case"image":case"link":he("error",r),he("load",r);break;case"details":he("toggle",r);break;case"input":B_(r,s),he("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},he("invalid",r);break;case"textarea":W_(r,s),he("invalid",r)}jp(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&rc(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&rc(r.textContent,a,t),i=["children",""+a]):ol.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&he("scroll",r)}switch(n){case"input":Qu(r),q_(r,s,!0);break;case"textarea":Qu(r),G_(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=cd)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=YE(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Tn]=e,t[gl]=r,IT(t,e,!1,!1),e.stateNode=t;e:{switch(o=Up(n,r),n){case"dialog":he("cancel",t),he("close",t),i=r;break;case"iframe":case"object":case"embed":he("load",t),i=r;break;case"video":case"audio":for(i=0;i<ba.length;i++)he(ba[i],t);i=r;break;case"source":he("error",t),i=r;break;case"img":case"image":case"link":he("error",t),he("load",t),i=r;break;case"details":he("toggle",t),i=r;break;case"input":B_(t,r),i=Op(t,r),he("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=ke({},r,{value:void 0}),he("invalid",t);break;case"textarea":W_(t,r),i=Mp(t,r),he("invalid",t);break;default:i=r}jp(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?ZE(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&XE(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&al(t,l):typeof l=="number"&&al(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ol.hasOwnProperty(s)?l!=null&&s==="onScroll"&&he("scroll",t):l!=null&&Lg(t,s,l,o))}switch(n){case"input":Qu(t),q_(t,r,!1);break;case"textarea":Qu(t),G_(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Gr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?no(t,!!r.multiple,s,!1):r.defaultValue!=null&&no(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=cd)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return pt(e),null;case 6:if(t&&e.stateNode!=null)TT(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(b(166));if(n=Oi(yl.current),Oi(Ln.current),ic(e)){if(r=e.stateNode,n=e.memoizedProps,r[Tn]=e,(s=r.nodeValue!==n)&&(t=Wt,t!==null))switch(t.tag){case 3:rc(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&rc(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Tn]=e,e.stateNode=r}return pt(e),null;case 13:if(ge(Te),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ye&&Bt!==null&&e.mode&1&&!(e.flags&128))U1(),_o(),e.flags|=98560,s=!1;else if(s=ic(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(b(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(b(317));s[Tn]=e}else _o(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;pt(e),s=!1}else fn!==null&&(wm(fn),fn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Te.current&1?qe===0&&(qe=3):yv())),e.updateQueue!==null&&(e.flags|=4),pt(e),null);case 4:return Io(),hm(t,e),t===null&&pl(e.stateNode.containerInfo),pt(e),null;case 10:return tv(e.type._context),pt(e),null;case 17:return jt(e.type)&&dd(),pt(e),null;case 19:if(ge(Te),s=e.memoizedState,s===null)return pt(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)pa(s,!1);else{if(qe!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=yd(t),o!==null){for(e.flags|=128,pa(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ce(Te,Te.current&1|2),e.child}t=t.sibling}s.tail!==null&&Le()>To&&(e.flags|=128,r=!0,pa(s,!1),e.lanes=4194304)}else{if(!r)if(t=yd(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),pa(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ye)return pt(e),null}else 2*Le()-s.renderingStartTime>To&&n!==1073741824&&(e.flags|=128,r=!0,pa(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Le(),e.sibling=null,n=Te.current,ce(Te,r?n&1|2:n&1),e):(pt(e),null);case 22:case 23:return vv(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?$t&1073741824&&(pt(e),e.subtreeFlags&6&&(e.flags|=8192)):pt(e),null;case 24:return null;case 25:return null}throw Error(b(156,e.tag))}function kx(t,e){switch(Xg(e),e.tag){case 1:return jt(e.type)&&dd(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Io(),ge(Ft),ge(_t),ov(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return sv(e),null;case 13:if(ge(Te),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(b(340));_o()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ge(Te),null;case 4:return Io(),null;case 10:return tv(e.type._context),null;case 22:case 23:return vv(),null;case 24:return null;default:return null}}var ac=!1,gt=!1,Px=typeof WeakSet=="function"?WeakSet:Set,F=null;function Qs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Pe(t,e,r)}else n.current=null}function fm(t,e,n){try{n()}catch(r){Pe(t,e,r)}}var Vw=!1;function Rx(t,e){if(Yp=ad,t=P1(),Qg(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,d=t,h=null;t:for(;;){for(var f;d!==n||i!==0&&d.nodeType!==3||(a=o+i),d!==s||r!==0&&d.nodeType!==3||(l=o+r),d.nodeType===3&&(o+=d.nodeValue.length),(f=d.firstChild)!==null;)h=d,d=f;for(;;){if(d===t)break t;if(h===n&&++u===i&&(a=o),h===s&&++c===r&&(l=o),(f=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=f}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Xp={focusedElem:t,selectionRange:n},ad=!1,F=e;F!==null;)if(e=F,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,F=t;else for(;F!==null;){e=F;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var y=v.memoizedProps,w=v.memoizedState,m=e.stateNode,p=m.getSnapshotBeforeUpdate(e.elementType===e.type?y:dn(e.type,y),w);m.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var _=e.stateNode.containerInfo;_.nodeType===1?_.textContent="":_.nodeType===9&&_.documentElement&&_.removeChild(_.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(b(163))}}catch(E){Pe(e,e.return,E)}if(t=e.sibling,t!==null){t.return=e.return,F=t;break}F=e.return}return v=Vw,Vw=!1,v}function Wa(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&fm(e,n,s)}i=i.next}while(i!==r)}}function mh(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function pm(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function ST(t){var e=t.alternate;e!==null&&(t.alternate=null,ST(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Tn],delete e[gl],delete e[em],delete e[cx],delete e[dx])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function AT(t){return t.tag===5||t.tag===3||t.tag===4}function Lw(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||AT(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function mm(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=cd));else if(r!==4&&(t=t.child,t!==null))for(mm(t,e,n),t=t.sibling;t!==null;)mm(t,e,n),t=t.sibling}function gm(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(gm(t,e,n),t=t.sibling;t!==null;)gm(t,e,n),t=t.sibling}var rt=null,hn=!1;function vr(t,e,n){for(n=n.child;n!==null;)kT(t,e,n),n=n.sibling}function kT(t,e,n){if(Vn&&typeof Vn.onCommitFiberUnmount=="function")try{Vn.onCommitFiberUnmount(ah,n)}catch{}switch(n.tag){case 5:gt||Qs(n,e);case 6:var r=rt,i=hn;rt=null,vr(t,e,n),rt=r,hn=i,rt!==null&&(hn?(t=rt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):rt.removeChild(n.stateNode));break;case 18:rt!==null&&(hn?(t=rt,n=n.stateNode,t.nodeType===8?Bf(t.parentNode,n):t.nodeType===1&&Bf(t,n),dl(t)):Bf(rt,n.stateNode));break;case 4:r=rt,i=hn,rt=n.stateNode.containerInfo,hn=!0,vr(t,e,n),rt=r,hn=i;break;case 0:case 11:case 14:case 15:if(!gt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&fm(n,e,o),i=i.next}while(i!==r)}vr(t,e,n);break;case 1:if(!gt&&(Qs(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Pe(n,e,a)}vr(t,e,n);break;case 21:vr(t,e,n);break;case 22:n.mode&1?(gt=(r=gt)||n.memoizedState!==null,vr(t,e,n),gt=r):vr(t,e,n);break;default:vr(t,e,n)}}function Mw(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Px),e.forEach(function(r){var i=Mx.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function cn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:rt=a.stateNode,hn=!1;break e;case 3:rt=a.stateNode.containerInfo,hn=!0;break e;case 4:rt=a.stateNode.containerInfo,hn=!0;break e}a=a.return}if(rt===null)throw Error(b(160));kT(s,o,i),rt=null,hn=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){Pe(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)PT(e,t),e=e.sibling}function PT(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(cn(e,t),In(t),r&4){try{Wa(3,t,t.return),mh(3,t)}catch(y){Pe(t,t.return,y)}try{Wa(5,t,t.return)}catch(y){Pe(t,t.return,y)}}break;case 1:cn(e,t),In(t),r&512&&n!==null&&Qs(n,n.return);break;case 5:if(cn(e,t),In(t),r&512&&n!==null&&Qs(n,n.return),t.flags&32){var i=t.stateNode;try{al(i,"")}catch(y){Pe(t,t.return,y)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&HE(i,s),Up(a,o);var u=Up(a,s);for(o=0;o<l.length;o+=2){var c=l[o],d=l[o+1];c==="style"?ZE(i,d):c==="dangerouslySetInnerHTML"?XE(i,d):c==="children"?al(i,d):Lg(i,c,d,u)}switch(a){case"input":Vp(i,s);break;case"textarea":QE(i,s);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var f=s.value;f!=null?no(i,!!s.multiple,f,!1):h!==!!s.multiple&&(s.defaultValue!=null?no(i,!!s.multiple,s.defaultValue,!0):no(i,!!s.multiple,s.multiple?[]:"",!1))}i[gl]=s}catch(y){Pe(t,t.return,y)}}break;case 6:if(cn(e,t),In(t),r&4){if(t.stateNode===null)throw Error(b(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(y){Pe(t,t.return,y)}}break;case 3:if(cn(e,t),In(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{dl(e.containerInfo)}catch(y){Pe(t,t.return,y)}break;case 4:cn(e,t),In(t);break;case 13:cn(e,t),In(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(mv=Le())),r&4&&Mw(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(gt=(u=gt)||c,cn(e,t),gt=u):cn(e,t),In(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(F=t,c=t.child;c!==null;){for(d=F=c;F!==null;){switch(h=F,f=h.child,h.tag){case 0:case 11:case 14:case 15:Wa(4,h,h.return);break;case 1:Qs(h,h.return);var v=h.stateNode;if(typeof v.componentWillUnmount=="function"){r=h,n=h.return;try{e=r,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(y){Pe(r,n,y)}}break;case 5:Qs(h,h.return);break;case 22:if(h.memoizedState!==null){jw(d);continue}}f!==null?(f.return=h,F=f):jw(d)}c=c.sibling}e:for(c=null,d=t;;){if(d.tag===5){if(c===null){c=d;try{i=d.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=JE("display",o))}catch(y){Pe(t,t.return,y)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(y){Pe(t,t.return,y)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:cn(e,t),In(t),r&4&&Mw(t);break;case 21:break;default:cn(e,t),In(t)}}function In(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(AT(n)){var r=n;break e}n=n.return}throw Error(b(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(al(i,""),r.flags&=-33);var s=Lw(t);gm(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Lw(t);mm(t,a,o);break;default:throw Error(b(161))}}catch(l){Pe(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function bx(t,e,n){F=t,RT(t)}function RT(t,e,n){for(var r=(t.mode&1)!==0;F!==null;){var i=F,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||ac;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||gt;a=ac;var u=gt;if(ac=o,(gt=l)&&!u)for(F=i;F!==null;)o=F,l=o.child,o.tag===22&&o.memoizedState!==null?Uw(i):l!==null?(l.return=o,F=l):Uw(i);for(;s!==null;)F=s,RT(s),s=s.sibling;F=i,ac=a,gt=u}Fw(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,F=s):Fw(t)}}function Fw(t){for(;F!==null;){var e=F;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:gt||mh(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!gt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:dn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Iw(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Iw(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&dl(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(b(163))}gt||e.flags&512&&pm(e)}catch(h){Pe(e,e.return,h)}}if(e===t){F=null;break}if(n=e.sibling,n!==null){n.return=e.return,F=n;break}F=e.return}}function jw(t){for(;F!==null;){var e=F;if(e===t){F=null;break}var n=e.sibling;if(n!==null){n.return=e.return,F=n;break}F=e.return}}function Uw(t){for(;F!==null;){var e=F;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{mh(4,e)}catch(l){Pe(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){Pe(e,i,l)}}var s=e.return;try{pm(e)}catch(l){Pe(e,s,l)}break;case 5:var o=e.return;try{pm(e)}catch(l){Pe(e,o,l)}}}catch(l){Pe(e,e.return,l)}if(e===t){F=null;break}var a=e.sibling;if(a!==null){a.return=e.return,F=a;break}F=e.return}}var Cx=Math.ceil,Id=cr.ReactCurrentDispatcher,fv=cr.ReactCurrentOwner,sn=cr.ReactCurrentBatchConfig,ie=0,Xe=null,$e=null,lt=0,$t=0,Ys=ci(0),qe=0,El=null,Xi=0,gh=0,pv=0,Ga=null,Dt=null,mv=0,To=1/0,qn=null,Ed=!1,vm=null,Ur=null,lc=!1,Cr=null,Td=0,Ka=0,ym=null,jc=-1,Uc=0;function St(){return ie&6?Le():jc!==-1?jc:jc=Le()}function $r(t){return t.mode&1?ie&2&&lt!==0?lt&-lt:fx.transition!==null?(Uc===0&&(Uc=d1()),Uc):(t=ae,t!==0||(t=window.event,t=t===void 0?16:y1(t.type)),t):1}function gn(t,e,n,r){if(50<Ka)throw Ka=0,ym=null,Error(b(185));cu(t,n,r),(!(ie&2)||t!==Xe)&&(t===Xe&&(!(ie&2)&&(gh|=n),qe===4&&kr(t,lt)),Ut(t,r),n===1&&ie===0&&!(e.mode&1)&&(To=Le()+500,hh&&di()))}function Ut(t,e){var n=t.callbackNode;fC(t,e);var r=od(t,t===Xe?lt:0);if(r===0)n!==null&&Q_(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Q_(n),e===1)t.tag===0?hx($w.bind(null,t)):M1($w.bind(null,t)),lx(function(){!(ie&6)&&di()}),n=null;else{switch(h1(r)){case 1:n=$g;break;case 4:n=u1;break;case 16:n=sd;break;case 536870912:n=c1;break;default:n=sd}n=LT(n,bT.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function bT(t,e){if(jc=-1,Uc=0,ie&6)throw Error(b(327));var n=t.callbackNode;if(ao()&&t.callbackNode!==n)return null;var r=od(t,t===Xe?lt:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Sd(t,r);else{e=r;var i=ie;ie|=2;var s=xT();(Xe!==t||lt!==e)&&(qn=null,To=Le()+500,zi(t,e));do try{Dx();break}catch(a){CT(t,a)}while(!0);ev(),Id.current=s,ie=i,$e!==null?e=0:(Xe=null,lt=0,e=qe)}if(e!==0){if(e===2&&(i=Wp(t),i!==0&&(r=i,e=_m(t,i))),e===1)throw n=El,zi(t,0),kr(t,r),Ut(t,Le()),n;if(e===6)kr(t,r);else{if(i=t.current.alternate,!(r&30)&&!xx(i)&&(e=Sd(t,r),e===2&&(s=Wp(t),s!==0&&(r=s,e=_m(t,s))),e===1))throw n=El,zi(t,0),kr(t,r),Ut(t,Le()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(b(345));case 2:Si(t,Dt,qn);break;case 3:if(kr(t,r),(r&130023424)===r&&(e=mv+500-Le(),10<e)){if(od(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){St(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Zp(Si.bind(null,t,Dt,qn),e);break}Si(t,Dt,qn);break;case 4:if(kr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-mn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Le()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Cx(r/1960))-r,10<r){t.timeoutHandle=Zp(Si.bind(null,t,Dt,qn),r);break}Si(t,Dt,qn);break;case 5:Si(t,Dt,qn);break;default:throw Error(b(329))}}}return Ut(t,Le()),t.callbackNode===n?bT.bind(null,t):null}function _m(t,e){var n=Ga;return t.current.memoizedState.isDehydrated&&(zi(t,e).flags|=256),t=Sd(t,e),t!==2&&(e=Dt,Dt=n,e!==null&&wm(e)),t}function wm(t){Dt===null?Dt=t:Dt.push.apply(Dt,t)}function xx(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!vn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function kr(t,e){for(e&=~pv,e&=~gh,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-mn(e),r=1<<n;t[n]=-1,e&=~r}}function $w(t){if(ie&6)throw Error(b(327));ao();var e=od(t,0);if(!(e&1))return Ut(t,Le()),null;var n=Sd(t,e);if(t.tag!==0&&n===2){var r=Wp(t);r!==0&&(e=r,n=_m(t,r))}if(n===1)throw n=El,zi(t,0),kr(t,e),Ut(t,Le()),n;if(n===6)throw Error(b(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Si(t,Dt,qn),Ut(t,Le()),null}function gv(t,e){var n=ie;ie|=1;try{return t(e)}finally{ie=n,ie===0&&(To=Le()+500,hh&&di())}}function Ji(t){Cr!==null&&Cr.tag===0&&!(ie&6)&&ao();var e=ie;ie|=1;var n=sn.transition,r=ae;try{if(sn.transition=null,ae=1,t)return t()}finally{ae=r,sn.transition=n,ie=e,!(ie&6)&&di()}}function vv(){$t=Ys.current,ge(Ys)}function zi(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,ax(n)),$e!==null)for(n=$e.return;n!==null;){var r=n;switch(Xg(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&dd();break;case 3:Io(),ge(Ft),ge(_t),ov();break;case 5:sv(r);break;case 4:Io();break;case 13:ge(Te);break;case 19:ge(Te);break;case 10:tv(r.type._context);break;case 22:case 23:vv()}n=n.return}if(Xe=t,$e=t=zr(t.current,null),lt=$t=e,qe=0,El=null,pv=gh=Xi=0,Dt=Ga=null,Di!==null){for(e=0;e<Di.length;e++)if(n=Di[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Di=null}return t}function CT(t,e){do{var n=$e;try{if(ev(),Lc.current=wd,_d){for(var r=Se.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}_d=!1}if(Yi=0,Qe=Be=Se=null,qa=!1,_l=0,fv.current=null,n===null||n.return===null){qe=1,El=e,$e=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=lt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var h=c.alternate;h?(c.updateQueue=h.updateQueue,c.memoizedState=h.memoizedState,c.lanes=h.lanes):(c.updateQueue=null,c.memoizedState=null)}var f=Rw(o);if(f!==null){f.flags&=-257,bw(f,o,a,s,e),f.mode&1&&Pw(s,u,e),e=f,l=u;var v=e.updateQueue;if(v===null){var y=new Set;y.add(l),e.updateQueue=y}else v.add(l);break e}else{if(!(e&1)){Pw(s,u,e),yv();break e}l=Error(b(426))}}else if(ye&&a.mode&1){var w=Rw(o);if(w!==null){!(w.flags&65536)&&(w.flags|=256),bw(w,o,a,s,e),Jg(Eo(l,a));break e}}s=l=Eo(l,a),qe!==4&&(qe=2),Ga===null?Ga=[s]:Ga.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var m=fT(s,l,e);ww(s,m);break e;case 1:a=l;var p=s.type,_=s.stateNode;if(!(s.flags&128)&&(typeof p.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&(Ur===null||!Ur.has(_)))){s.flags|=65536,e&=-e,s.lanes|=e;var E=pT(s,a,e);ww(s,E);break e}}s=s.return}while(s!==null)}DT(n)}catch(S){e=S,$e===n&&n!==null&&($e=n=n.return);continue}break}while(!0)}function xT(){var t=Id.current;return Id.current=wd,t===null?wd:t}function yv(){(qe===0||qe===3||qe===2)&&(qe=4),Xe===null||!(Xi&268435455)&&!(gh&268435455)||kr(Xe,lt)}function Sd(t,e){var n=ie;ie|=2;var r=xT();(Xe!==t||lt!==e)&&(qn=null,zi(t,e));do try{Nx();break}catch(i){CT(t,i)}while(!0);if(ev(),ie=n,Id.current=r,$e!==null)throw Error(b(261));return Xe=null,lt=0,qe}function Nx(){for(;$e!==null;)NT($e)}function Dx(){for(;$e!==null&&!iC();)NT($e)}function NT(t){var e=VT(t.alternate,t,$t);t.memoizedProps=t.pendingProps,e===null?DT(t):$e=e,fv.current=null}function DT(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=kx(n,e),n!==null){n.flags&=32767,$e=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{qe=6,$e=null;return}}else if(n=Ax(n,e,$t),n!==null){$e=n;return}if(e=e.sibling,e!==null){$e=e;return}$e=e=t}while(e!==null);qe===0&&(qe=5)}function Si(t,e,n){var r=ae,i=sn.transition;try{sn.transition=null,ae=1,Ox(t,e,n,r)}finally{sn.transition=i,ae=r}return null}function Ox(t,e,n,r){do ao();while(Cr!==null);if(ie&6)throw Error(b(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(b(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(pC(t,s),t===Xe&&($e=Xe=null,lt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||lc||(lc=!0,LT(sd,function(){return ao(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=sn.transition,sn.transition=null;var o=ae;ae=1;var a=ie;ie|=4,fv.current=null,Rx(t,n),PT(n,t),ex(Xp),ad=!!Yp,Xp=Yp=null,t.current=n,bx(n),sC(),ie=a,ae=o,sn.transition=s}else t.current=n;if(lc&&(lc=!1,Cr=t,Td=i),s=t.pendingLanes,s===0&&(Ur=null),lC(n.stateNode),Ut(t,Le()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Ed)throw Ed=!1,t=vm,vm=null,t;return Td&1&&t.tag!==0&&ao(),s=t.pendingLanes,s&1?t===ym?Ka++:(Ka=0,ym=t):Ka=0,di(),null}function ao(){if(Cr!==null){var t=h1(Td),e=sn.transition,n=ae;try{if(sn.transition=null,ae=16>t?16:t,Cr===null)var r=!1;else{if(t=Cr,Cr=null,Td=0,ie&6)throw Error(b(331));var i=ie;for(ie|=4,F=t.current;F!==null;){var s=F,o=s.child;if(F.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(F=u;F!==null;){var c=F;switch(c.tag){case 0:case 11:case 15:Wa(8,c,s)}var d=c.child;if(d!==null)d.return=c,F=d;else for(;F!==null;){c=F;var h=c.sibling,f=c.return;if(ST(c),c===u){F=null;break}if(h!==null){h.return=f,F=h;break}F=f}}}var v=s.alternate;if(v!==null){var y=v.child;if(y!==null){v.child=null;do{var w=y.sibling;y.sibling=null,y=w}while(y!==null)}}F=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,F=o;else e:for(;F!==null;){if(s=F,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Wa(9,s,s.return)}var m=s.sibling;if(m!==null){m.return=s.return,F=m;break e}F=s.return}}var p=t.current;for(F=p;F!==null;){o=F;var _=o.child;if(o.subtreeFlags&2064&&_!==null)_.return=o,F=_;else e:for(o=p;F!==null;){if(a=F,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:mh(9,a)}}catch(S){Pe(a,a.return,S)}if(a===o){F=null;break e}var E=a.sibling;if(E!==null){E.return=a.return,F=E;break e}F=a.return}}if(ie=i,di(),Vn&&typeof Vn.onPostCommitFiberRoot=="function")try{Vn.onPostCommitFiberRoot(ah,t)}catch{}r=!0}return r}finally{ae=n,sn.transition=e}}return!1}function zw(t,e,n){e=Eo(n,e),e=fT(t,e,1),t=jr(t,e,1),e=St(),t!==null&&(cu(t,1,e),Ut(t,e))}function Pe(t,e,n){if(t.tag===3)zw(t,t,n);else for(;e!==null;){if(e.tag===3){zw(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ur===null||!Ur.has(r))){t=Eo(n,t),t=pT(e,t,1),e=jr(e,t,1),t=St(),e!==null&&(cu(e,1,t),Ut(e,t));break}}e=e.return}}function Vx(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=St(),t.pingedLanes|=t.suspendedLanes&n,Xe===t&&(lt&n)===n&&(qe===4||qe===3&&(lt&130023424)===lt&&500>Le()-mv?zi(t,0):pv|=n),Ut(t,e)}function OT(t,e){e===0&&(t.mode&1?(e=Ju,Ju<<=1,!(Ju&130023424)&&(Ju=4194304)):e=1);var n=St();t=nr(t,e),t!==null&&(cu(t,e,n),Ut(t,n))}function Lx(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),OT(t,n)}function Mx(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(b(314))}r!==null&&r.delete(e),OT(t,n)}var VT;VT=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Ft.current)Ot=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Ot=!1,Sx(t,e,n);Ot=!!(t.flags&131072)}else Ot=!1,ye&&e.flags&1048576&&F1(e,pd,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Fc(t,e),t=e.pendingProps;var i=yo(e,_t.current);oo(e,n),i=lv(null,e,r,t,i,n);var s=uv();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,jt(r)?(s=!0,hd(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,rv(e),i.updater=fh,e.stateNode=i,i._reactInternals=e,om(e,r,t,n),e=um(null,e,r,!0,s,n)):(e.tag=0,ye&&s&&Yg(e),wt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Fc(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=jx(r),t=dn(r,t),i){case 0:e=lm(null,e,r,t,n);break e;case 1:e=Nw(null,e,r,t,n);break e;case 11:e=Cw(null,e,r,t,n);break e;case 14:e=xw(null,e,r,dn(r.type,t),n);break e}throw Error(b(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:dn(r,i),lm(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:dn(r,i),Nw(t,e,r,i,n);case 3:e:{if(yT(e),t===null)throw Error(b(387));r=e.pendingProps,s=e.memoizedState,i=s.element,z1(t,e),vd(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Eo(Error(b(423)),e),e=Dw(t,e,r,n,i);break e}else if(r!==i){i=Eo(Error(b(424)),e),e=Dw(t,e,r,n,i);break e}else for(Bt=Fr(e.stateNode.containerInfo.firstChild),Wt=e,ye=!0,fn=null,n=G1(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(_o(),r===i){e=rr(t,e,n);break e}wt(t,e,r,n)}e=e.child}return e;case 5:return K1(e),t===null&&rm(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Jp(r,i)?o=null:s!==null&&Jp(r,s)&&(e.flags|=32),vT(t,e),wt(t,e,o,n),e.child;case 6:return t===null&&rm(e),null;case 13:return _T(t,e,n);case 4:return iv(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=wo(e,null,r,n):wt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:dn(r,i),Cw(t,e,r,i,n);case 7:return wt(t,e,e.pendingProps,n),e.child;case 8:return wt(t,e,e.pendingProps.children,n),e.child;case 12:return wt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,ce(md,r._currentValue),r._currentValue=o,s!==null)if(vn(s.value,o)){if(s.children===i.children&&!Ft.current){e=rr(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=Xn(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),im(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(b(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),im(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}wt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,oo(e,n),i=on(i),r=r(i),e.flags|=1,wt(t,e,r,n),e.child;case 14:return r=e.type,i=dn(r,e.pendingProps),i=dn(r.type,i),xw(t,e,r,i,n);case 15:return mT(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:dn(r,i),Fc(t,e),e.tag=1,jt(r)?(t=!0,hd(e)):t=!1,oo(e,n),q1(e,r,i),om(e,r,i,n),um(null,e,r,!0,t,n);case 19:return wT(t,e,n);case 22:return gT(t,e,n)}throw Error(b(156,e.tag))};function LT(t,e){return l1(t,e)}function Fx(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function tn(t,e,n,r){return new Fx(t,e,n,r)}function _v(t){return t=t.prototype,!(!t||!t.isReactComponent)}function jx(t){if(typeof t=="function")return _v(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Fg)return 11;if(t===jg)return 14}return 2}function zr(t,e){var n=t.alternate;return n===null?(n=tn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function $c(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")_v(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Us:return Bi(n.children,i,s,e);case Mg:o=8,i|=8;break;case Cp:return t=tn(12,n,e,i|2),t.elementType=Cp,t.lanes=s,t;case xp:return t=tn(13,n,e,i),t.elementType=xp,t.lanes=s,t;case Np:return t=tn(19,n,e,i),t.elementType=Np,t.lanes=s,t;case WE:return vh(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case BE:o=10;break e;case qE:o=9;break e;case Fg:o=11;break e;case jg:o=14;break e;case Tr:o=16,r=null;break e}throw Error(b(130,t==null?t:typeof t,""))}return e=tn(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Bi(t,e,n,r){return t=tn(7,t,r,e),t.lanes=n,t}function vh(t,e,n,r){return t=tn(22,t,r,e),t.elementType=WE,t.lanes=n,t.stateNode={isHidden:!1},t}function Xf(t,e,n){return t=tn(6,t,null,e),t.lanes=n,t}function Jf(t,e,n){return e=tn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Ux(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Nf(0),this.expirationTimes=Nf(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Nf(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function wv(t,e,n,r,i,s,o,a,l){return t=new Ux(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=tn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},rv(s),t}function $x(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:js,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function MT(t){if(!t)return Kr;t=t._reactInternals;e:{if(ms(t)!==t||t.tag!==1)throw Error(b(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(jt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(b(171))}if(t.tag===1){var n=t.type;if(jt(n))return L1(t,n,e)}return e}function FT(t,e,n,r,i,s,o,a,l){return t=wv(n,r,!0,t,i,s,o,a,l),t.context=MT(null),n=t.current,r=St(),i=$r(n),s=Xn(r,i),s.callback=e??null,jr(n,s,i),t.current.lanes=i,cu(t,i,r),Ut(t,r),t}function yh(t,e,n,r){var i=e.current,s=St(),o=$r(i);return n=MT(n),e.context===null?e.context=n:e.pendingContext=n,e=Xn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=jr(i,e,o),t!==null&&(gn(t,i,o,s),Vc(t,i,o)),o}function Ad(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Bw(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Iv(t,e){Bw(t,e),(t=t.alternate)&&Bw(t,e)}function zx(){return null}var jT=typeof reportError=="function"?reportError:function(t){console.error(t)};function Ev(t){this._internalRoot=t}_h.prototype.render=Ev.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(b(409));yh(t,e,null,null)};_h.prototype.unmount=Ev.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Ji(function(){yh(null,t,null,null)}),e[tr]=null}};function _h(t){this._internalRoot=t}_h.prototype.unstable_scheduleHydration=function(t){if(t){var e=m1();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Ar.length&&e!==0&&e<Ar[n].priority;n++);Ar.splice(n,0,t),n===0&&v1(t)}};function Tv(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function wh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function qw(){}function Bx(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Ad(o);s.call(u)}}var o=FT(e,r,t,0,null,!1,!1,"",qw);return t._reactRootContainer=o,t[tr]=o.current,pl(t.nodeType===8?t.parentNode:t),Ji(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Ad(l);a.call(u)}}var l=wv(t,0,!1,null,null,!1,!1,"",qw);return t._reactRootContainer=l,t[tr]=l.current,pl(t.nodeType===8?t.parentNode:t),Ji(function(){yh(e,l,n,r)}),l}function Ih(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=Ad(o);a.call(l)}}yh(e,o,t,i)}else o=Bx(n,e,t,i,r);return Ad(o)}f1=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ra(e.pendingLanes);n!==0&&(zg(e,n|1),Ut(e,Le()),!(ie&6)&&(To=Le()+500,di()))}break;case 13:Ji(function(){var r=nr(t,1);if(r!==null){var i=St();gn(r,t,1,i)}}),Iv(t,1)}};Bg=function(t){if(t.tag===13){var e=nr(t,134217728);if(e!==null){var n=St();gn(e,t,134217728,n)}Iv(t,134217728)}};p1=function(t){if(t.tag===13){var e=$r(t),n=nr(t,e);if(n!==null){var r=St();gn(n,t,e,r)}Iv(t,e)}};m1=function(){return ae};g1=function(t,e){var n=ae;try{return ae=t,e()}finally{ae=n}};zp=function(t,e,n){switch(e){case"input":if(Vp(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=dh(r);if(!i)throw Error(b(90));KE(r),Vp(r,i)}}}break;case"textarea":QE(t,n);break;case"select":e=n.value,e!=null&&no(t,!!n.multiple,e,!1)}};n1=gv;r1=Ji;var qx={usingClientEntryPoint:!1,Events:[hu,qs,dh,e1,t1,gv]},ma={findFiberByHostInstance:Ni,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Wx={bundleType:ma.bundleType,version:ma.version,rendererPackageName:ma.rendererPackageName,rendererConfig:ma.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:cr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=o1(t),t===null?null:t.stateNode},findFiberByHostInstance:ma.findFiberByHostInstance||zx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var uc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!uc.isDisabled&&uc.supportsFiber)try{ah=uc.inject(Wx),Vn=uc}catch{}}Qt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=qx;Qt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Tv(e))throw Error(b(200));return $x(t,e,null,n)};Qt.createRoot=function(t,e){if(!Tv(t))throw Error(b(299));var n=!1,r="",i=jT;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=wv(t,1,!1,null,null,n,!1,r,i),t[tr]=e.current,pl(t.nodeType===8?t.parentNode:t),new Ev(e)};Qt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(b(188)):(t=Object.keys(t).join(","),Error(b(268,t)));return t=o1(e),t=t===null?null:t.stateNode,t};Qt.flushSync=function(t){return Ji(t)};Qt.hydrate=function(t,e,n){if(!wh(e))throw Error(b(200));return Ih(null,t,e,!0,n)};Qt.hydrateRoot=function(t,e,n){if(!Tv(t))throw Error(b(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=jT;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=FT(e,null,t,1,n??null,i,!1,s,o),t[tr]=e.current,pl(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new _h(e)};Qt.render=function(t,e,n){if(!wh(e))throw Error(b(200));return Ih(null,t,e,!1,n)};Qt.unmountComponentAtNode=function(t){if(!wh(t))throw Error(b(40));return t._reactRootContainer?(Ji(function(){Ih(null,null,t,!1,function(){t._reactRootContainer=null,t[tr]=null})}),!0):!1};Qt.unstable_batchedUpdates=gv;Qt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!wh(n))throw Error(b(200));if(t==null||t._reactInternals===void 0)throw Error(b(38));return Ih(t,e,n,!1,r)};Qt.version="18.2.0-next-9e3b772b8-20220608";function UT(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(UT)}catch(t){console.error(t)}}UT(),FE.exports=Qt;var Gx=FE.exports,Ww=Gx;Rp.createRoot=Ww.createRoot,Rp.hydrateRoot=Ww.hydrateRoot;/**
 * @remix-run/router v1.15.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Tl(){return Tl=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Tl.apply(this,arguments)}var xr;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(xr||(xr={}));const Gw="popstate";function Kx(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return Im("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:kd(i)}return Qx(e,n,null,t)}function ze(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function $T(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function Hx(){return Math.random().toString(36).substr(2,8)}function Kw(t,e){return{usr:t.state,key:t.key,idx:e}}function Im(t,e,n,r){return n===void 0&&(n=null),Tl({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Bo(e):e,{state:n,key:e&&e.key||r||Hx()})}function kd(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Bo(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function Qx(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=xr.Pop,l=null,u=c();u==null&&(u=0,o.replaceState(Tl({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function d(){a=xr.Pop;let w=c(),m=w==null?null:w-u;u=w,l&&l({action:a,location:y.location,delta:m})}function h(w,m){a=xr.Push;let p=Im(y.location,w,m);n&&n(p,w),u=c()+1;let _=Kw(p,u),E=y.createHref(p);try{o.pushState(_,"",E)}catch(S){if(S instanceof DOMException&&S.name==="DataCloneError")throw S;i.location.assign(E)}s&&l&&l({action:a,location:y.location,delta:1})}function f(w,m){a=xr.Replace;let p=Im(y.location,w,m);n&&n(p,w),u=c();let _=Kw(p,u),E=y.createHref(p);o.replaceState(_,"",E),s&&l&&l({action:a,location:y.location,delta:0})}function v(w){let m=i.location.origin!=="null"?i.location.origin:i.location.href,p=typeof w=="string"?w:kd(w);return p=p.replace(/ $/,"%20"),ze(m,"No window.location.(origin|href) available to create URL for href: "+p),new URL(p,m)}let y={get action(){return a},get location(){return t(i,o)},listen(w){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(Gw,d),l=w,()=>{i.removeEventListener(Gw,d),l=null}},createHref(w){return e(i,w)},createURL:v,encodeLocation(w){let m=v(w);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:h,replace:f,go(w){return o.go(w)}};return y}var Hw;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Hw||(Hw={}));function Yx(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?Bo(e):e,i=Sv(r.pathname||"/",n);if(i==null)return null;let s=zT(t);Xx(s);let o=null;for(let a=0;o==null&&a<s.length;++a){let l=uN(i);o=oN(s[a],l)}return o}function zT(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(ze(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=Br([r,l.relativePath]),c=n.concat(l);s.children&&s.children.length>0&&(ze(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),zT(s.children,e,c,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:iN(u,s.index),routesMeta:c})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of BT(s.path))i(s,o,l)}),e}function BT(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=BT(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function Xx(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:sN(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Jx=/^:[\w-]+$/,Zx=3,eN=2,tN=1,nN=10,rN=-2,Qw=t=>t==="*";function iN(t,e){let n=t.split("/"),r=n.length;return n.some(Qw)&&(r+=rN),e&&(r+=eN),n.filter(i=>!Qw(i)).reduce((i,s)=>i+(Jx.test(s)?Zx:s===""?tN:nN),r)}function sN(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function oN(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",c=aN({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let d=a.route;s.push({params:r,pathname:Br([i,c.pathname]),pathnameBase:fN(Br([i,c.pathnameBase])),route:d}),c.pathnameBase!=="/"&&(i=Br([i,c.pathnameBase]))}return s}function aN(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=lN(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,d)=>{let{paramName:h,isOptional:f}=c;if(h==="*"){let y=a[d]||"";o=s.slice(0,s.length-y.length).replace(/(.)\/+$/,"$1")}const v=a[d];return f&&!v?u[h]=void 0:u[h]=(v||"").replace(/%2F/g,"/"),u},{}),pathname:s,pathnameBase:o,pattern:t}}function lN(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),$T(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function uN(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return $T(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Sv(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function cN(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Bo(t):t;return{pathname:n?n.startsWith("/")?n:dN(n,e):e,search:pN(r),hash:mN(i)}}function dN(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Zf(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function hN(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function qT(t,e){let n=hN(t);return e?n.map((r,i)=>i===t.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function WT(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Bo(t):(i=Tl({},t),ze(!i.pathname||!i.pathname.includes("?"),Zf("?","pathname","search",i)),ze(!i.pathname||!i.pathname.includes("#"),Zf("#","pathname","hash",i)),ze(!i.search||!i.search.includes("#"),Zf("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(o==null)a=n;else{let d=e.length-1;if(!r&&o.startsWith("..")){let h=o.split("/");for(;h[0]==="..";)h.shift(),d-=1;i.pathname=h.join("/")}a=d>=0?e[d]:"/"}let l=cN(i,a),u=o&&o!=="/"&&o.endsWith("/"),c=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const Br=t=>t.join("/").replace(/\/\/+/g,"/"),fN=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),pN=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,mN=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function gN(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const GT=["post","put","patch","delete"];new Set(GT);const vN=["get",...GT];new Set(vN);/**
 * React Router v6.22.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Sl(){return Sl=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Sl.apply(this,arguments)}const Av=A.createContext(null),yN=A.createContext(null),gs=A.createContext(null),Eh=A.createContext(null),vs=A.createContext({outlet:null,matches:[],isDataRoute:!1}),KT=A.createContext(null);function _N(t,e){let{relative:n}=e===void 0?{}:e;pu()||ze(!1);let{basename:r,navigator:i}=A.useContext(gs),{hash:s,pathname:o,search:a}=QT(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:Br([r,o])),i.createHref({pathname:l,search:a,hash:s})}function pu(){return A.useContext(Eh)!=null}function Th(){return pu()||ze(!1),A.useContext(Eh).location}function HT(t){A.useContext(gs).static||A.useLayoutEffect(t)}function wN(){let{isDataRoute:t}=A.useContext(vs);return t?DN():IN()}function IN(){pu()||ze(!1);let t=A.useContext(Av),{basename:e,future:n,navigator:r}=A.useContext(gs),{matches:i}=A.useContext(vs),{pathname:s}=Th(),o=JSON.stringify(qT(i,n.v7_relativeSplatPath)),a=A.useRef(!1);return HT(()=>{a.current=!0}),A.useCallback(function(u,c){if(c===void 0&&(c={}),!a.current)return;if(typeof u=="number"){r.go(u);return}let d=WT(u,JSON.parse(o),s,c.relative==="path");t==null&&e!=="/"&&(d.pathname=d.pathname==="/"?e:Br([e,d.pathname])),(c.replace?r.replace:r.push)(d,c.state,c)},[e,r,o,s,t])}function QT(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=A.useContext(gs),{matches:i}=A.useContext(vs),{pathname:s}=Th(),o=JSON.stringify(qT(i,r.v7_relativeSplatPath));return A.useMemo(()=>WT(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function EN(t,e){return TN(t,e)}function TN(t,e,n,r){pu()||ze(!1);let{navigator:i}=A.useContext(gs),{matches:s}=A.useContext(vs),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let u=Th(),c;if(e){var d;let w=typeof e=="string"?Bo(e):e;l==="/"||(d=w.pathname)!=null&&d.startsWith(l)||ze(!1),c=w}else c=u;let h=c.pathname||"/",f=h;if(l!=="/"){let w=l.replace(/^\//,"").split("/");f="/"+h.replace(/^\//,"").split("/").slice(w.length).join("/")}let v=Yx(t,{pathname:f}),y=RN(v&&v.map(w=>Object.assign({},w,{params:Object.assign({},a,w.params),pathname:Br([l,i.encodeLocation?i.encodeLocation(w.pathname).pathname:w.pathname]),pathnameBase:w.pathnameBase==="/"?l:Br([l,i.encodeLocation?i.encodeLocation(w.pathnameBase).pathname:w.pathnameBase])})),s,n,r);return e&&y?A.createElement(Eh.Provider,{value:{location:Sl({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:xr.Pop}},y):y}function SN(){let t=NN(),e=gN(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return A.createElement(A.Fragment,null,A.createElement("h2",null,"Unexpected Application Error!"),A.createElement("h3",{style:{fontStyle:"italic"}},e),n?A.createElement("pre",{style:i},n):null,null)}const AN=A.createElement(SN,null);class kN extends A.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?A.createElement(vs.Provider,{value:this.props.routeContext},A.createElement(KT.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function PN(t){let{routeContext:e,match:n,children:r}=t,i=A.useContext(Av);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),A.createElement(vs.Provider,{value:e},r)}function RN(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if((s=n)!=null&&s.errors)t=n.matches;else return null}let o=t,a=(i=n)==null?void 0:i.errors;if(a!=null){let c=o.findIndex(d=>d.route.id&&(a==null?void 0:a[d.route.id]));c>=0||ze(!1),o=o.slice(0,Math.min(o.length,c+1))}let l=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let c=0;c<o.length;c++){let d=o[c];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(u=c),d.route.id){let{loaderData:h,errors:f}=n,v=d.route.loader&&h[d.route.id]===void 0&&(!f||f[d.route.id]===void 0);if(d.route.lazy||v){l=!0,u>=0?o=o.slice(0,u+1):o=[o[0]];break}}}return o.reduceRight((c,d,h)=>{let f,v=!1,y=null,w=null;n&&(f=a&&d.route.id?a[d.route.id]:void 0,y=d.route.errorElement||AN,l&&(u<0&&h===0?(ON("route-fallback",!1),v=!0,w=null):u===h&&(v=!0,w=d.route.hydrateFallbackElement||null)));let m=e.concat(o.slice(0,h+1)),p=()=>{let _;return f?_=y:v?_=w:d.route.Component?_=A.createElement(d.route.Component,null):d.route.element?_=d.route.element:_=c,A.createElement(PN,{match:d,routeContext:{outlet:c,matches:m,isDataRoute:n!=null},children:_})};return n&&(d.route.ErrorBoundary||d.route.errorElement||h===0)?A.createElement(kN,{location:n.location,revalidation:n.revalidation,component:y,error:f,children:p(),routeContext:{outlet:null,matches:m,isDataRoute:!0}}):p()},null)}var YT=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(YT||{}),Pd=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(Pd||{});function bN(t){let e=A.useContext(Av);return e||ze(!1),e}function CN(t){let e=A.useContext(yN);return e||ze(!1),e}function xN(t){let e=A.useContext(vs);return e||ze(!1),e}function XT(t){let e=xN(),n=e.matches[e.matches.length-1];return n.route.id||ze(!1),n.route.id}function NN(){var t;let e=A.useContext(KT),n=CN(Pd.UseRouteError),r=XT(Pd.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function DN(){let{router:t}=bN(YT.UseNavigateStable),e=XT(Pd.UseNavigateStable),n=A.useRef(!1);return HT(()=>{n.current=!0}),A.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,Sl({fromRouteId:e},s)))},[t,e])}const Yw={};function ON(t,e,n){!e&&!Yw[t]&&(Yw[t]=!0)}function Bn(t){ze(!1)}function VN(t){let{basename:e="/",children:n=null,location:r,navigationType:i=xr.Pop,navigator:s,static:o=!1,future:a}=t;pu()&&ze(!1);let l=e.replace(/^\/*/,"/"),u=A.useMemo(()=>({basename:l,navigator:s,static:o,future:Sl({v7_relativeSplatPath:!1},a)}),[l,a,s,o]);typeof r=="string"&&(r=Bo(r));let{pathname:c="/",search:d="",hash:h="",state:f=null,key:v="default"}=r,y=A.useMemo(()=>{let w=Sv(c,l);return w==null?null:{location:{pathname:w,search:d,hash:h,state:f,key:v},navigationType:i}},[l,c,d,h,f,v,i]);return y==null?null:A.createElement(gs.Provider,{value:u},A.createElement(Eh.Provider,{children:n,value:y}))}function LN(t){let{children:e,location:n}=t;return EN(Em(e),n)}new Promise(()=>{});function Em(t,e){e===void 0&&(e=[]);let n=[];return A.Children.forEach(t,(r,i)=>{if(!A.isValidElement(r))return;let s=[...e,i];if(r.type===A.Fragment){n.push.apply(n,Em(r.props.children,s));return}r.type!==Bn&&ze(!1),!r.props.index||!r.props.children||ze(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Em(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.22.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Tm(){return Tm=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Tm.apply(this,arguments)}function MN(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function FN(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function jN(t,e){return t.button===0&&(!e||e==="_self")&&!FN(t)}const UN=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],$N="6";try{window.__reactRouterVersion=$N}catch{}const zN="startTransition",Xw=Lb[zN];function BN(t){let{basename:e,children:n,future:r,window:i}=t,s=A.useRef();s.current==null&&(s.current=Kx({window:i,v5Compat:!0}));let o=s.current,[a,l]=A.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},c=A.useCallback(d=>{u&&Xw?Xw(()=>l(d)):l(d)},[l,u]);return A.useLayoutEffect(()=>o.listen(c),[o,c]),A.createElement(VN,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o,future:r})}const qN=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",WN=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Al=A.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:c,unstable_viewTransition:d}=e,h=MN(e,UN),{basename:f}=A.useContext(gs),v,y=!1;if(typeof u=="string"&&WN.test(u)&&(v=u,qN))try{let _=new URL(window.location.href),E=u.startsWith("//")?new URL(_.protocol+u):new URL(u),S=Sv(E.pathname,f);E.origin===_.origin&&S!=null?u=S+E.search+E.hash:y=!0}catch{}let w=_N(u,{relative:i}),m=GN(u,{replace:o,state:a,target:l,preventScrollReset:c,relative:i,unstable_viewTransition:d});function p(_){r&&r(_),_.defaultPrevented||m(_)}return A.createElement("a",Tm({},h,{href:v||w,onClick:y||s?r:p,ref:n,target:l}))});var Jw;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(Jw||(Jw={}));var Zw;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Zw||(Zw={}));function GN(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:a}=e===void 0?{}:e,l=wN(),u=Th(),c=QT(t,{relative:o});return A.useCallback(d=>{if(jN(d,n)){d.preventDefault();let h=r!==void 0?r:kd(u)===kd(c);l(t,{replace:h,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:a})}},[u,l,c,r,i,n,t,s,o,a])}function e0(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function L(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?e0(Object(n),!0).forEach(function(r){We(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):e0(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Rd(t){"@babel/helpers - typeof";return Rd=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Rd(t)}function KN(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function t0(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function HN(t,e,n){return e&&t0(t.prototype,e),n&&t0(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function We(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function kv(t,e){return YN(t)||JN(t,e)||JT(t,e)||e2()}function mu(t){return QN(t)||XN(t)||JT(t)||ZN()}function QN(t){if(Array.isArray(t))return Sm(t)}function YN(t){if(Array.isArray(t))return t}function XN(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function JN(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r=[],i=!0,s=!1,o,a;try{for(n=n.call(t);!(i=(o=n.next()).done)&&(r.push(o.value),!(e&&r.length===e));i=!0);}catch(l){s=!0,a=l}finally{try{!i&&n.return!=null&&n.return()}finally{if(s)throw a}}return r}}function JT(t,e){if(t){if(typeof t=="string")return Sm(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Sm(t,e)}}function Sm(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function ZN(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function e2(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var n0=function(){},Pv={},ZT={},eS=null,tS={mark:n0,measure:n0};try{typeof window<"u"&&(Pv=window),typeof document<"u"&&(ZT=document),typeof MutationObserver<"u"&&(eS=MutationObserver),typeof performance<"u"&&(tS=performance)}catch{}var t2=Pv.navigator||{},r0=t2.userAgent,i0=r0===void 0?"":r0,Hr=Pv,ve=ZT,s0=eS,cc=tS;Hr.document;var dr=!!ve.documentElement&&!!ve.head&&typeof ve.addEventListener=="function"&&typeof ve.createElement=="function",nS=~i0.indexOf("MSIE")||~i0.indexOf("Trident/"),dc,hc,fc,pc,mc,ir="___FONT_AWESOME___",Am=16,rS="fa",iS="svg-inline--fa",Zi="data-fa-i2svg",km="data-fa-pseudo-element",n2="data-fa-pseudo-element-pending",Rv="data-prefix",bv="data-icon",o0="fontawesome-i2svg",r2="async",i2=["HTML","HEAD","STYLE","SCRIPT"],sS=function(){try{return!0}catch{return!1}}(),fe="classic",be="sharp",Cv=[fe,be];function gu(t){return new Proxy(t,{get:function(n,r){return r in n?n[r]:n[fe]}})}var kl=gu((dc={},We(dc,fe,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),We(dc,be,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),dc)),Pl=gu((hc={},We(hc,fe,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),We(hc,be,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),hc)),Rl=gu((fc={},We(fc,fe,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),We(fc,be,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),fc)),s2=gu((pc={},We(pc,fe,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),We(pc,be,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),pc)),o2=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,oS="fa-layers-text",a2=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,l2=gu((mc={},We(mc,fe,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),We(mc,be,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),mc)),aS=[1,2,3,4,5,6,7,8,9,10],u2=aS.concat([11,12,13,14,15,16,17,18,19,20]),c2=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Vi={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},bl=new Set;Object.keys(Pl[fe]).map(bl.add.bind(bl));Object.keys(Pl[be]).map(bl.add.bind(bl));var d2=[].concat(Cv,mu(bl),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Vi.GROUP,Vi.SWAP_OPACITY,Vi.PRIMARY,Vi.SECONDARY]).concat(aS.map(function(t){return"".concat(t,"x")})).concat(u2.map(function(t){return"w-".concat(t)})),Ha=Hr.FontAwesomeConfig||{};function h2(t){var e=ve.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function f2(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(ve&&typeof ve.querySelector=="function"){var p2=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];p2.forEach(function(t){var e=kv(t,2),n=e[0],r=e[1],i=f2(h2(n));i!=null&&(Ha[r]=i)})}var lS={styleDefault:"solid",familyDefault:"classic",cssPrefix:rS,replacementClass:iS,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Ha.familyPrefix&&(Ha.cssPrefix=Ha.familyPrefix);var So=L(L({},lS),Ha);So.autoReplaceSvg||(So.observeMutations=!1);var U={};Object.keys(lS).forEach(function(t){Object.defineProperty(U,t,{enumerable:!0,set:function(n){So[t]=n,Qa.forEach(function(r){return r(U)})},get:function(){return So[t]}})});Object.defineProperty(U,"familyPrefix",{enumerable:!0,set:function(e){So.cssPrefix=e,Qa.forEach(function(n){return n(U)})},get:function(){return So.cssPrefix}});Hr.FontAwesomeConfig=U;var Qa=[];function m2(t){return Qa.push(t),function(){Qa.splice(Qa.indexOf(t),1)}}var yr=Am,bn={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function g2(t){if(!(!t||!dr)){var e=ve.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=ve.head.childNodes,r=null,i=n.length-1;i>-1;i--){var s=n[i],o=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=s)}return ve.head.insertBefore(e,r),t}}var v2="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Cl(){for(var t=12,e="";t-- >0;)e+=v2[Math.random()*62|0];return e}function qo(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function xv(t){return t.classList?qo(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function uS(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function y2(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(uS(t[n]),'" ')},"").trim()}function Sh(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function Nv(t){return t.size!==bn.size||t.x!==bn.x||t.y!==bn.y||t.rotate!==bn.rotate||t.flipX||t.flipY}function _2(t){var e=t.transform,n=t.containerWidth,r=t.iconWidth,i={transform:"translate(".concat(n/2," 256)")},s="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),a="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(s," ").concat(o," ").concat(a)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:l,path:u}}function w2(t){var e=t.transform,n=t.width,r=n===void 0?Am:n,i=t.height,s=i===void 0?Am:i,o=t.startCentered,a=o===void 0?!1:o,l="";return a&&nS?l+="translate(".concat(e.x/yr-r/2,"em, ").concat(e.y/yr-s/2,"em) "):a?l+="translate(calc(-50% + ".concat(e.x/yr,"em), calc(-50% + ").concat(e.y/yr,"em)) "):l+="translate(".concat(e.x/yr,"em, ").concat(e.y/yr,"em) "),l+="scale(".concat(e.size/yr*(e.flipX?-1:1),", ").concat(e.size/yr*(e.flipY?-1:1),") "),l+="rotate(".concat(e.rotate,"deg) "),l}var I2=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function cS(){var t=rS,e=iS,n=U.cssPrefix,r=U.replacementClass,i=I2;if(n!==t||r!==e){var s=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),a=new RegExp("\\.".concat(e),"g");i=i.replace(s,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(a,".".concat(r))}return i}var a0=!1;function ep(){U.autoAddCss&&!a0&&(g2(cS()),a0=!0)}var E2={mixout:function(){return{dom:{css:cS,insertCss:ep}}},hooks:function(){return{beforeDOMElementCreation:function(){ep()},beforeI2svg:function(){ep()}}}},sr=Hr||{};sr[ir]||(sr[ir]={});sr[ir].styles||(sr[ir].styles={});sr[ir].hooks||(sr[ir].hooks={});sr[ir].shims||(sr[ir].shims=[]);var pn=sr[ir],dS=[],T2=function t(){ve.removeEventListener("DOMContentLoaded",t),bd=1,dS.map(function(e){return e()})},bd=!1;dr&&(bd=(ve.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(ve.readyState),bd||ve.addEventListener("DOMContentLoaded",T2));function S2(t){dr&&(bd?setTimeout(t,0):dS.push(t))}function vu(t){var e=t.tag,n=t.attributes,r=n===void 0?{}:n,i=t.children,s=i===void 0?[]:i;return typeof t=="string"?uS(t):"<".concat(e," ").concat(y2(r),">").concat(s.map(vu).join(""),"</").concat(e,">")}function l0(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var A2=function(e,n){return function(r,i,s,o){return e.call(n,r,i,s,o)}},tp=function(e,n,r,i){var s=Object.keys(e),o=s.length,a=i!==void 0?A2(n,i):n,l,u,c;for(r===void 0?(l=1,c=e[s[0]]):(l=0,c=r);l<o;l++)u=s[l],c=a(c,e[u],u,e);return c};function k2(t){for(var e=[],n=0,r=t.length;n<r;){var i=t.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var s=t.charCodeAt(n++);(s&64512)==56320?e.push(((i&1023)<<10)+(s&1023)+65536):(e.push(i),n--)}else e.push(i)}return e}function Pm(t){var e=k2(t);return e.length===1?e[0].toString(16):null}function P2(t,e){var n=t.length,r=t.charCodeAt(e),i;return r>=55296&&r<=56319&&n>e+1&&(i=t.charCodeAt(e+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function u0(t){return Object.keys(t).reduce(function(e,n){var r=t[n],i=!!r.icon;return i?e[r.iconName]=r.icon:e[n]=r,e},{})}function Rm(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,s=u0(e);typeof pn.hooks.addPack=="function"&&!i?pn.hooks.addPack(t,u0(e)):pn.styles[t]=L(L({},pn.styles[t]||{}),s),t==="fas"&&Rm("fa",e)}var gc,vc,yc,Xs=pn.styles,R2=pn.shims,b2=(gc={},We(gc,fe,Object.values(Rl[fe])),We(gc,be,Object.values(Rl[be])),gc),Dv=null,hS={},fS={},pS={},mS={},gS={},C2=(vc={},We(vc,fe,Object.keys(kl[fe])),We(vc,be,Object.keys(kl[be])),vc);function x2(t){return~d2.indexOf(t)}function N2(t,e){var n=e.split("-"),r=n[0],i=n.slice(1).join("-");return r===t&&i!==""&&!x2(i)?i:null}var vS=function(){var e=function(s){return tp(Xs,function(o,a,l){return o[l]=tp(a,s,{}),o},{})};hS=e(function(i,s,o){if(s[3]&&(i[s[3]]=o),s[2]){var a=s[2].filter(function(l){return typeof l=="number"});a.forEach(function(l){i[l.toString(16)]=o})}return i}),fS=e(function(i,s,o){if(i[o]=o,s[2]){var a=s[2].filter(function(l){return typeof l=="string"});a.forEach(function(l){i[l]=o})}return i}),gS=e(function(i,s,o){var a=s[2];return i[o]=o,a.forEach(function(l){i[l]=o}),i});var n="far"in Xs||U.autoFetchSvg,r=tp(R2,function(i,s){var o=s[0],a=s[1],l=s[2];return a==="far"&&!n&&(a="fas"),typeof o=="string"&&(i.names[o]={prefix:a,iconName:l}),typeof o=="number"&&(i.unicodes[o.toString(16)]={prefix:a,iconName:l}),i},{names:{},unicodes:{}});pS=r.names,mS=r.unicodes,Dv=Ah(U.styleDefault,{family:U.familyDefault})};m2(function(t){Dv=Ah(t.styleDefault,{family:U.familyDefault})});vS();function Ov(t,e){return(hS[t]||{})[e]}function D2(t,e){return(fS[t]||{})[e]}function Li(t,e){return(gS[t]||{})[e]}function yS(t){return pS[t]||{prefix:null,iconName:null}}function O2(t){var e=mS[t],n=Ov("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Qr(){return Dv}var Vv=function(){return{prefix:null,iconName:null,rest:[]}};function Ah(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.family,r=n===void 0?fe:n,i=kl[r][t],s=Pl[r][t]||Pl[r][i],o=t in pn.styles?t:null;return s||o||null}var c0=(yc={},We(yc,fe,Object.keys(Rl[fe])),We(yc,be,Object.keys(Rl[be])),yc);function kh(t){var e,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,i=r===void 0?!1:r,s=(e={},We(e,fe,"".concat(U.cssPrefix,"-").concat(fe)),We(e,be,"".concat(U.cssPrefix,"-").concat(be)),e),o=null,a=fe;(t.includes(s[fe])||t.some(function(u){return c0[fe].includes(u)}))&&(a=fe),(t.includes(s[be])||t.some(function(u){return c0[be].includes(u)}))&&(a=be);var l=t.reduce(function(u,c){var d=N2(U.cssPrefix,c);if(Xs[c]?(c=b2[a].includes(c)?s2[a][c]:c,o=c,u.prefix=c):C2[a].indexOf(c)>-1?(o=c,u.prefix=Ah(c,{family:a})):d?u.iconName=d:c!==U.replacementClass&&c!==s[fe]&&c!==s[be]&&u.rest.push(c),!i&&u.prefix&&u.iconName){var h=o==="fa"?yS(u.iconName):{},f=Li(u.prefix,u.iconName);h.prefix&&(o=null),u.iconName=h.iconName||f||u.iconName,u.prefix=h.prefix||u.prefix,u.prefix==="far"&&!Xs.far&&Xs.fas&&!U.autoFetchSvg&&(u.prefix="fas")}return u},Vv());return(t.includes("fa-brands")||t.includes("fab"))&&(l.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(l.prefix="fad"),!l.prefix&&a===be&&(Xs.fass||U.autoFetchSvg)&&(l.prefix="fass",l.iconName=Li(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=Qr()||"fas"),l}var V2=function(){function t(){KN(this,t),this.definitions={}}return HN(t,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];var o=i.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(a){n.definitions[a]=L(L({},n.definitions[a]||{}),o[a]),Rm(a,o[a]);var l=Rl[fe][a];l&&Rm(l,o[a]),vS()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(s){var o=i[s],a=o.prefix,l=o.iconName,u=o.icon,c=u[2];n[a]||(n[a]={}),c.length>0&&c.forEach(function(d){typeof d=="string"&&(n[a][d]=u)}),n[a][l]=u}),n}}]),t}(),d0=[],Js={},lo={},L2=Object.keys(lo);function M2(t,e){var n=e.mixoutsTo;return d0=t,Js={},Object.keys(lo).forEach(function(r){L2.indexOf(r)===-1&&delete lo[r]}),d0.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(o){typeof i[o]=="function"&&(n[o]=i[o]),Rd(i[o])==="object"&&Object.keys(i[o]).forEach(function(a){n[o]||(n[o]={}),n[o][a]=i[o][a]})}),r.hooks){var s=r.hooks();Object.keys(s).forEach(function(o){Js[o]||(Js[o]=[]),Js[o].push(s[o])})}r.provides&&r.provides(lo)}),n}function bm(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var s=Js[t]||[];return s.forEach(function(o){e=o.apply(null,[e].concat(r))}),e}function es(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var i=Js[t]||[];i.forEach(function(s){s.apply(null,n)})}function or(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return lo[t]?lo[t].apply(null,e):void 0}function Cm(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||Qr();if(e)return e=Li(n,e)||e,l0(_S.definitions,n,e)||l0(pn.styles,n,e)}var _S=new V2,F2=function(){U.autoReplaceSvg=!1,U.observeMutations=!1,es("noAuto")},j2={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return dr?(es("beforeI2svg",e),or("pseudoElements2svg",e),or("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;U.autoReplaceSvg===!1&&(U.autoReplaceSvg=!0),U.observeMutations=!0,S2(function(){$2({autoReplaceSvgRoot:n}),es("watch",e)})}},U2={icon:function(e){if(e===null)return null;if(Rd(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:Li(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],r=Ah(e[0]);return{prefix:r,iconName:Li(r,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(U.cssPrefix,"-"))>-1||e.match(o2))){var i=kh(e.split(" "),{skipLookups:!0});return{prefix:i.prefix||Qr(),iconName:Li(i.prefix,i.iconName)||i.iconName}}if(typeof e=="string"){var s=Qr();return{prefix:s,iconName:Li(s,e)||e}}}},Xt={noAuto:F2,config:U,dom:j2,parse:U2,library:_S,findIconDefinition:Cm,toHtml:vu},$2=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,r=n===void 0?ve:n;(Object.keys(pn.styles).length>0||U.autoFetchSvg)&&dr&&U.autoReplaceSvg&&Xt.dom.i2svg({node:r})};function Ph(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(r){return vu(r)})}}),Object.defineProperty(t,"node",{get:function(){if(dr){var r=ve.createElement("div");return r.innerHTML=t.html,r.children}}}),t}function z2(t){var e=t.children,n=t.main,r=t.mask,i=t.attributes,s=t.styles,o=t.transform;if(Nv(o)&&n.found&&!r.found){var a=n.width,l=n.height,u={x:a/l/2,y:.5};i.style=Sh(L(L({},s),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:i,children:e}]}function B2(t){var e=t.prefix,n=t.iconName,r=t.children,i=t.attributes,s=t.symbol,o=s===!0?"".concat(e,"-").concat(U.cssPrefix,"-").concat(n):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:L(L({},i),{},{id:o}),children:r}]}]}function Lv(t){var e=t.icons,n=e.main,r=e.mask,i=t.prefix,s=t.iconName,o=t.transform,a=t.symbol,l=t.title,u=t.maskId,c=t.titleId,d=t.extra,h=t.watchable,f=h===void 0?!1:h,v=r.found?r:n,y=v.width,w=v.height,m=i==="fak",p=[U.replacementClass,s?"".concat(U.cssPrefix,"-").concat(s):""].filter(function(Z){return d.classes.indexOf(Z)===-1}).filter(function(Z){return Z!==""||!!Z}).concat(d.classes).join(" "),_={children:[],attributes:L(L({},d.attributes),{},{"data-prefix":i,"data-icon":s,class:p,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(y," ").concat(w)})},E=m&&!~d.classes.indexOf("fa-fw")?{width:"".concat(y/w*16*.0625,"em")}:{};f&&(_.attributes[Zi]=""),l&&(_.children.push({tag:"title",attributes:{id:_.attributes["aria-labelledby"]||"title-".concat(c||Cl())},children:[l]}),delete _.attributes.title);var S=L(L({},_),{},{prefix:i,iconName:s,main:n,mask:r,maskId:u,transform:o,symbol:a,styles:L(L({},E),d.styles)}),R=r.found&&n.found?or("generateAbstractMask",S)||{children:[],attributes:{}}:or("generateAbstractIcon",S)||{children:[],attributes:{}},x=R.children,M=R.attributes;return S.children=x,S.attributes=M,a?B2(S):z2(S)}function h0(t){var e=t.content,n=t.width,r=t.height,i=t.transform,s=t.title,o=t.extra,a=t.watchable,l=a===void 0?!1:a,u=L(L(L({},o.attributes),s?{title:s}:{}),{},{class:o.classes.join(" ")});l&&(u[Zi]="");var c=L({},o.styles);Nv(i)&&(c.transform=w2({transform:i,startCentered:!0,width:n,height:r}),c["-webkit-transform"]=c.transform);var d=Sh(c);d.length>0&&(u.style=d);var h=[];return h.push({tag:"span",attributes:u,children:[e]}),s&&h.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),h}function q2(t){var e=t.content,n=t.title,r=t.extra,i=L(L(L({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),s=Sh(r.styles);s.length>0&&(i.style=s);var o=[];return o.push({tag:"span",attributes:i,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var np=pn.styles;function xm(t){var e=t[0],n=t[1],r=t.slice(4),i=kv(r,1),s=i[0],o=null;return Array.isArray(s)?o={tag:"g",attributes:{class:"".concat(U.cssPrefix,"-").concat(Vi.GROUP)},children:[{tag:"path",attributes:{class:"".concat(U.cssPrefix,"-").concat(Vi.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat(U.cssPrefix,"-").concat(Vi.PRIMARY),fill:"currentColor",d:s[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:e,height:n,icon:o}}var W2={found:!1,width:512,height:512};function G2(t,e){!sS&&!U.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Nm(t,e){var n=e;return e==="fa"&&U.styleDefault!==null&&(e=Qr()),new Promise(function(r,i){if(or("missingIconAbstract"),n==="fa"){var s=yS(t)||{};t=s.iconName||t,e=s.prefix||e}if(t&&e&&np[e]&&np[e][t]){var o=np[e][t];return r(xm(o))}G2(t,e),r(L(L({},W2),{},{icon:U.showMissingIcons&&t?or("missingIconAbstract")||{}:{}}))})}var f0=function(){},Dm=U.measurePerformance&&cc&&cc.mark&&cc.measure?cc:{mark:f0,measure:f0},Ca='FA "6.5.1"',K2=function(e){return Dm.mark("".concat(Ca," ").concat(e," begins")),function(){return wS(e)}},wS=function(e){Dm.mark("".concat(Ca," ").concat(e," ends")),Dm.measure("".concat(Ca," ").concat(e),"".concat(Ca," ").concat(e," begins"),"".concat(Ca," ").concat(e," ends"))},Mv={begin:K2,end:wS},zc=function(){};function p0(t){var e=t.getAttribute?t.getAttribute(Zi):null;return typeof e=="string"}function H2(t){var e=t.getAttribute?t.getAttribute(Rv):null,n=t.getAttribute?t.getAttribute(bv):null;return e&&n}function Q2(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(U.replacementClass)}function Y2(){if(U.autoReplaceSvg===!0)return Bc.replace;var t=Bc[U.autoReplaceSvg];return t||Bc.replace}function X2(t){return ve.createElementNS("http://www.w3.org/2000/svg",t)}function J2(t){return ve.createElement(t)}function IS(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,r=n===void 0?t.tag==="svg"?X2:J2:n;if(typeof t=="string")return ve.createTextNode(t);var i=r(t.tag);Object.keys(t.attributes||[]).forEach(function(o){i.setAttribute(o,t.attributes[o])});var s=t.children||[];return s.forEach(function(o){i.appendChild(IS(o,{ceFn:r}))}),i}function Z2(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var Bc={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(i){n.parentNode.insertBefore(IS(i),n)}),n.getAttribute(Zi)===null&&U.keepOriginalSource){var r=ve.createComment(Z2(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(e){var n=e[0],r=e[1];if(~xv(n).indexOf(U.replacementClass))return Bc.replace(e);var i=new RegExp("".concat(U.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var s=r[0].attributes.class.split(" ").reduce(function(a,l){return l===U.replacementClass||l.match(i)?a.toSvg.push(l):a.toNode.push(l),a},{toNode:[],toSvg:[]});r[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",s.toNode.join(" "))}var o=r.map(function(a){return vu(a)}).join(`
`);n.setAttribute(Zi,""),n.innerHTML=o}};function m0(t){t()}function ES(t,e){var n=typeof e=="function"?e:zc;if(t.length===0)n();else{var r=m0;U.mutateApproach===r2&&(r=Hr.requestAnimationFrame||m0),r(function(){var i=Y2(),s=Mv.begin("mutate");t.map(i),s(),n()})}}var Fv=!1;function TS(){Fv=!0}function Om(){Fv=!1}var Cd=null;function g0(t){if(s0&&U.observeMutations){var e=t.treeCallback,n=e===void 0?zc:e,r=t.nodeCallback,i=r===void 0?zc:r,s=t.pseudoElementsCallback,o=s===void 0?zc:s,a=t.observeMutationsRoot,l=a===void 0?ve:a;Cd=new s0(function(u){if(!Fv){var c=Qr();qo(u).forEach(function(d){if(d.type==="childList"&&d.addedNodes.length>0&&!p0(d.addedNodes[0])&&(U.searchPseudoElements&&o(d.target),n(d.target)),d.type==="attributes"&&d.target.parentNode&&U.searchPseudoElements&&o(d.target.parentNode),d.type==="attributes"&&p0(d.target)&&~c2.indexOf(d.attributeName))if(d.attributeName==="class"&&H2(d.target)){var h=kh(xv(d.target)),f=h.prefix,v=h.iconName;d.target.setAttribute(Rv,f||c),v&&d.target.setAttribute(bv,v)}else Q2(d.target)&&i(d.target)})}}),dr&&Cd.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function eD(){Cd&&Cd.disconnect()}function tD(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(r,i){var s=i.split(":"),o=s[0],a=s.slice(1);return o&&a.length>0&&(r[o]=a.join(":").trim()),r},{})),n}function nD(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"",i=kh(xv(t));return i.prefix||(i.prefix=Qr()),e&&n&&(i.prefix=e,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=D2(i.prefix,t.innerText)||Ov(i.prefix,Pm(t.innerText))),!i.iconName&&U.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=t.firstChild.data)),i}function rD(t){var e=qo(t.attributes).reduce(function(i,s){return i.name!=="class"&&i.name!=="style"&&(i[s.name]=s.value),i},{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return U.autoA11y&&(n?e["aria-labelledby"]="".concat(U.replacementClass,"-title-").concat(r||Cl()):(e["aria-hidden"]="true",e.focusable="false")),e}function iD(){return{iconName:null,title:null,titleId:null,prefix:null,transform:bn,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function v0(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=nD(t),r=n.iconName,i=n.prefix,s=n.rest,o=rD(t),a=bm("parseNodeAttributes",{},t),l=e.styleParser?tD(t):[];return L({iconName:r,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:i,transform:bn,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:l,attributes:o}},a)}var sD=pn.styles;function SS(t){var e=U.autoReplaceSvg==="nest"?v0(t,{styleParser:!1}):v0(t);return~e.extra.classes.indexOf(oS)?or("generateLayersText",t,e):or("generateSvgReplacementMutation",t,e)}var Yr=new Set;Cv.map(function(t){Yr.add("fa-".concat(t))});Object.keys(kl[fe]).map(Yr.add.bind(Yr));Object.keys(kl[be]).map(Yr.add.bind(Yr));Yr=mu(Yr);function y0(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!dr)return Promise.resolve();var n=ve.documentElement.classList,r=function(d){return n.add("".concat(o0,"-").concat(d))},i=function(d){return n.remove("".concat(o0,"-").concat(d))},s=U.autoFetchSvg?Yr:Cv.map(function(c){return"fa-".concat(c)}).concat(Object.keys(sD));s.includes("fa")||s.push("fa");var o=[".".concat(oS,":not([").concat(Zi,"])")].concat(s.map(function(c){return".".concat(c,":not([").concat(Zi,"])")})).join(", ");if(o.length===0)return Promise.resolve();var a=[];try{a=qo(t.querySelectorAll(o))}catch{}if(a.length>0)r("pending"),i("complete");else return Promise.resolve();var l=Mv.begin("onTree"),u=a.reduce(function(c,d){try{var h=SS(d);h&&c.push(h)}catch(f){sS||f.name==="MissingIcon"&&console.error(f)}return c},[]);return new Promise(function(c,d){Promise.all(u).then(function(h){ES(h,function(){r("active"),r("complete"),i("pending"),typeof e=="function"&&e(),l(),c()})}).catch(function(h){l(),d(h)})})}function oD(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;SS(t).then(function(n){n&&ES([n],e)})}function aD(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(e||{}).icon?e:Cm(e||{}),i=n.mask;return i&&(i=(i||{}).icon?i:Cm(i||{})),t(r,L(L({},n),{},{mask:i}))}}var lD=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?bn:r,s=n.symbol,o=s===void 0?!1:s,a=n.mask,l=a===void 0?null:a,u=n.maskId,c=u===void 0?null:u,d=n.title,h=d===void 0?null:d,f=n.titleId,v=f===void 0?null:f,y=n.classes,w=y===void 0?[]:y,m=n.attributes,p=m===void 0?{}:m,_=n.styles,E=_===void 0?{}:_;if(e){var S=e.prefix,R=e.iconName,x=e.icon;return Ph(L({type:"icon"},e),function(){return es("beforeDOMElementCreation",{iconDefinition:e,params:n}),U.autoA11y&&(h?p["aria-labelledby"]="".concat(U.replacementClass,"-title-").concat(v||Cl()):(p["aria-hidden"]="true",p.focusable="false")),Lv({icons:{main:xm(x),mask:l?xm(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:S,iconName:R,transform:L(L({},bn),i),symbol:o,title:h,maskId:c,titleId:v,extra:{attributes:p,styles:E,classes:w}})})}},uD={mixout:function(){return{icon:aD(lD)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=y0,n.nodeCallback=oD,n}}},provides:function(e){e.i2svg=function(n){var r=n.node,i=r===void 0?ve:r,s=n.callback,o=s===void 0?function(){}:s;return y0(i,o)},e.generateSvgReplacementMutation=function(n,r){var i=r.iconName,s=r.title,o=r.titleId,a=r.prefix,l=r.transform,u=r.symbol,c=r.mask,d=r.maskId,h=r.extra;return new Promise(function(f,v){Promise.all([Nm(i,a),c.iconName?Nm(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(y){var w=kv(y,2),m=w[0],p=w[1];f([n,Lv({icons:{main:m,mask:p},prefix:a,iconName:i,transform:l,symbol:u,maskId:d,title:s,titleId:o,extra:h,watchable:!0})])}).catch(v)})},e.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,s=n.main,o=n.transform,a=n.styles,l=Sh(a);l.length>0&&(i.style=l);var u;return Nv(o)&&(u=or("generateAbstractTransformGrouping",{main:s,transform:o,containerWidth:s.width,iconWidth:s.width})),r.push(u||s.icon),{children:r,attributes:i}}}},cD={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,s=i===void 0?[]:i;return Ph({type:"layer"},function(){es("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(a){Array.isArray(a)?a.map(function(l){o=o.concat(l.abstract)}):o=o.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat(U.cssPrefix,"-layers")].concat(mu(s)).join(" ")},children:o}]})}}}},dD={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,s=i===void 0?null:i,o=r.classes,a=o===void 0?[]:o,l=r.attributes,u=l===void 0?{}:l,c=r.styles,d=c===void 0?{}:c;return Ph({type:"counter",content:n},function(){return es("beforeDOMElementCreation",{content:n,params:r}),q2({content:n.toString(),title:s,extra:{attributes:u,styles:d,classes:["".concat(U.cssPrefix,"-layers-counter")].concat(mu(a))}})})}}}},hD={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,s=i===void 0?bn:i,o=r.title,a=o===void 0?null:o,l=r.classes,u=l===void 0?[]:l,c=r.attributes,d=c===void 0?{}:c,h=r.styles,f=h===void 0?{}:h;return Ph({type:"text",content:n},function(){return es("beforeDOMElementCreation",{content:n,params:r}),h0({content:n,transform:L(L({},bn),s),title:a,extra:{attributes:d,styles:f,classes:["".concat(U.cssPrefix,"-layers-text")].concat(mu(u))}})})}}},provides:function(e){e.generateLayersText=function(n,r){var i=r.title,s=r.transform,o=r.extra,a=null,l=null;if(nS){var u=parseInt(getComputedStyle(n).fontSize,10),c=n.getBoundingClientRect();a=c.width/u,l=c.height/u}return U.autoA11y&&!i&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,h0({content:n.innerHTML,width:a,height:l,transform:s,title:i,extra:o,watchable:!0})])}}},fD=new RegExp('"',"ug"),_0=[1105920,1112319];function pD(t){var e=t.replace(fD,""),n=P2(e,0),r=n>=_0[0]&&n<=_0[1],i=e.length===2?e[0]===e[1]:!1;return{value:Pm(i?e[0]:e),isSecondary:r||i}}function w0(t,e){var n="".concat(n2).concat(e.replace(":","-"));return new Promise(function(r,i){if(t.getAttribute(n)!==null)return r();var s=qo(t.children),o=s.filter(function(x){return x.getAttribute(km)===e})[0],a=Hr.getComputedStyle(t,e),l=a.getPropertyValue("font-family").match(a2),u=a.getPropertyValue("font-weight"),c=a.getPropertyValue("content");if(o&&!l)return t.removeChild(o),r();if(l&&c!=="none"&&c!==""){var d=a.getPropertyValue("content"),h=~["Sharp"].indexOf(l[2])?be:fe,f=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?Pl[h][l[2].toLowerCase()]:l2[h][u],v=pD(d),y=v.value,w=v.isSecondary,m=l[0].startsWith("FontAwesome"),p=Ov(f,y),_=p;if(m){var E=O2(y);E.iconName&&E.prefix&&(p=E.iconName,f=E.prefix)}if(p&&!w&&(!o||o.getAttribute(Rv)!==f||o.getAttribute(bv)!==_)){t.setAttribute(n,_),o&&t.removeChild(o);var S=iD(),R=S.extra;R.attributes[km]=e,Nm(p,f).then(function(x){var M=Lv(L(L({},S),{},{icons:{main:x,mask:Vv()},prefix:f,iconName:_,extra:R,watchable:!0})),Z=ve.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(Z,t.firstChild):t.appendChild(Z),Z.outerHTML=M.map(function(G){return vu(G)}).join(`
`),t.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function mD(t){return Promise.all([w0(t,"::before"),w0(t,"::after")])}function gD(t){return t.parentNode!==document.head&&!~i2.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(km)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function I0(t){if(dr)return new Promise(function(e,n){var r=qo(t.querySelectorAll("*")).filter(gD).map(mD),i=Mv.begin("searchPseudoElements");TS(),Promise.all(r).then(function(){i(),Om(),e()}).catch(function(){i(),Om(),n()})})}var vD={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=I0,n}}},provides:function(e){e.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?ve:r;U.searchPseudoElements&&I0(i)}}},E0=!1,yD={mixout:function(){return{dom:{unwatch:function(){TS(),E0=!0}}}},hooks:function(){return{bootstrap:function(){g0(bm("mutationObserverCallbacks",{}))},noAuto:function(){eD()},watch:function(n){var r=n.observeMutationsRoot;E0?Om():g0(bm("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},T0=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(r,i){var s=i.toLowerCase().split("-"),o=s[0],a=s.slice(1).join("-");if(o&&a==="h")return r.flipX=!0,r;if(o&&a==="v")return r.flipY=!0,r;if(a=parseFloat(a),isNaN(a))return r;switch(o){case"grow":r.size=r.size+a;break;case"shrink":r.size=r.size-a;break;case"left":r.x=r.x-a;break;case"right":r.x=r.x+a;break;case"up":r.y=r.y-a;break;case"down":r.y=r.y+a;break;case"rotate":r.rotate=r.rotate+a;break}return r},n)},_D={mixout:function(){return{parse:{transform:function(n){return T0(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=T0(i)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,s=n.containerWidth,o=n.iconWidth,a={transform:"translate(".concat(s/2," 256)")},l="translate(".concat(i.x*32,", ").concat(i.y*32,") "),u="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),c="rotate(".concat(i.rotate," 0 0)"),d={transform:"".concat(l," ").concat(u," ").concat(c)},h={transform:"translate(".concat(o/2*-1," -256)")},f={outer:a,inner:d,path:h};return{tag:"g",attributes:L({},f.outer),children:[{tag:"g",attributes:L({},f.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:L(L({},r.icon.attributes),f.path)}]}]}}}},rp={x:0,y:0,width:"100%",height:"100%"};function S0(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function wD(t){return t.tag==="g"?t.children:[t]}var ID={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),s=i?kh(i.split(" ").map(function(o){return o.trim()})):Vv();return s.prefix||(s.prefix=Qr()),n.mask=s,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var r=n.children,i=n.attributes,s=n.main,o=n.mask,a=n.maskId,l=n.transform,u=s.width,c=s.icon,d=o.width,h=o.icon,f=_2({transform:l,containerWidth:d,iconWidth:u}),v={tag:"rect",attributes:L(L({},rp),{},{fill:"white"})},y=c.children?{children:c.children.map(S0)}:{},w={tag:"g",attributes:L({},f.inner),children:[S0(L({tag:c.tag,attributes:L(L({},c.attributes),f.path)},y))]},m={tag:"g",attributes:L({},f.outer),children:[w]},p="mask-".concat(a||Cl()),_="clip-".concat(a||Cl()),E={tag:"mask",attributes:L(L({},rp),{},{id:p,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[v,m]},S={tag:"defs",children:[{tag:"clipPath",attributes:{id:_},children:wD(h)},E]};return r.push(S,{tag:"rect",attributes:L({fill:"currentColor","clip-path":"url(#".concat(_,")"),mask:"url(#".concat(p,")")},rp)}),{children:r,attributes:i}}}},ED={provides:function(e){var n=!1;Hr.matchMedia&&(n=Hr.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:L(L({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=L(L({},s),{},{attributeName:"opacity"}),a={tag:"circle",attributes:L(L({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||a.children.push({tag:"animate",attributes:L(L({},s),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:L(L({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(a),r.push({tag:"path",attributes:L(L({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:L(L({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:L(L({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:L(L({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},TD={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),s=i===null?!1:i===""?!0:i;return n.symbol=s,n}}}},SD=[E2,uD,cD,dD,hD,vD,yD,_D,ID,ED,TD];M2(SD,{mixoutsTo:Xt});Xt.noAuto;Xt.config;Xt.library;Xt.dom;var Vm=Xt.parse;Xt.findIconDefinition;Xt.toHtml;var AD=Xt.icon;Xt.layer;Xt.text;Xt.counter;var AS={exports:{}},kD="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",PD=kD,RD=PD;function kS(){}function PS(){}PS.resetWarningCache=kS;var bD=function(){function t(r,i,s,o,a,l){if(l!==RD){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:PS,resetWarningCache:kS};return n.PropTypes=n,n};AS.exports=bD();var CD=AS.exports;const X=PE(CD);function A0(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function Nr(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?A0(Object(n),!0).forEach(function(r){Zs(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):A0(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function xd(t){"@babel/helpers - typeof";return xd=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},xd(t)}function Zs(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function xD(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function ND(t,e){if(t==null)return{};var n=xD(t,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function Lm(t){return DD(t)||OD(t)||VD(t)||LD()}function DD(t){if(Array.isArray(t))return Mm(t)}function OD(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function VD(t,e){if(t){if(typeof t=="string")return Mm(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Mm(t,e)}}function Mm(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function LD(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function MD(t){var e,n=t.beat,r=t.fade,i=t.beatFade,s=t.bounce,o=t.shake,a=t.flash,l=t.spin,u=t.spinPulse,c=t.spinReverse,d=t.pulse,h=t.fixedWidth,f=t.inverse,v=t.border,y=t.listItem,w=t.flip,m=t.size,p=t.rotation,_=t.pull,E=(e={"fa-beat":n,"fa-fade":r,"fa-beat-fade":i,"fa-bounce":s,"fa-shake":o,"fa-flash":a,"fa-spin":l,"fa-spin-reverse":c,"fa-spin-pulse":u,"fa-pulse":d,"fa-fw":h,"fa-inverse":f,"fa-border":v,"fa-li":y,"fa-flip":w===!0,"fa-flip-horizontal":w==="horizontal"||w==="both","fa-flip-vertical":w==="vertical"||w==="both"},Zs(e,"fa-".concat(m),typeof m<"u"&&m!==null),Zs(e,"fa-rotate-".concat(p),typeof p<"u"&&p!==null&&p!==0),Zs(e,"fa-pull-".concat(_),typeof _<"u"&&_!==null),Zs(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(E).map(function(S){return E[S]?S:null}).filter(function(S){return S})}function FD(t){return t=t-0,t===t}function RS(t){return FD(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(e,n){return n?n.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}var jD=["style"];function UD(t){return t.charAt(0).toUpperCase()+t.slice(1)}function $D(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),i=RS(n.slice(0,r)),s=n.slice(r+1).trim();return i.startsWith("webkit")?e[UD(i)]=s:e[i]=s,e},{})}function bS(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return bS(t,l)}),i=Object.keys(e.attributes||{}).reduce(function(l,u){var c=e.attributes[u];switch(u){case"class":l.attrs.className=c,delete e.attributes.class;break;case"style":l.attrs.style=$D(c);break;default:u.indexOf("aria-")===0||u.indexOf("data-")===0?l.attrs[u.toLowerCase()]=c:l.attrs[RS(u)]=c}return l},{attrs:{}}),s=n.style,o=s===void 0?{}:s,a=ND(n,jD);return i.attrs.style=Nr(Nr({},i.attrs.style),o),t.apply(void 0,[e.tag,Nr(Nr({},i.attrs),a)].concat(Lm(r)))}var CS=!1;try{CS=!0}catch{}function zD(){if(!CS&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function k0(t){if(t&&xd(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(Vm.icon)return Vm.icon(t);if(t===null)return null;if(t&&xd(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function ip(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?Zs({},t,e):{}}var at=oh.forwardRef(function(t,e){var n=t.icon,r=t.mask,i=t.symbol,s=t.className,o=t.title,a=t.titleId,l=t.maskId,u=k0(n),c=ip("classes",[].concat(Lm(MD(t)),Lm(s.split(" ")))),d=ip("transform",typeof t.transform=="string"?Vm.transform(t.transform):t.transform),h=ip("mask",k0(r)),f=AD(u,Nr(Nr(Nr(Nr({},c),d),h),{},{symbol:i,title:o,titleId:a,maskId:l}));if(!f)return zD("Could not find icon",u),null;var v=f.abstract,y={ref:e};return Object.keys(t).forEach(function(w){at.defaultProps.hasOwnProperty(w)||(y[w]=t[w])}),BD(v[0],y)});at.displayName="FontAwesomeIcon";at.propTypes={beat:X.bool,border:X.bool,beatFade:X.bool,bounce:X.bool,className:X.string,fade:X.bool,flash:X.bool,mask:X.oneOfType([X.object,X.array,X.string]),maskId:X.string,fixedWidth:X.bool,inverse:X.bool,flip:X.oneOf([!0,!1,"horizontal","vertical","both"]),icon:X.oneOfType([X.object,X.array,X.string]),listItem:X.bool,pull:X.oneOf(["right","left"]),pulse:X.bool,rotation:X.oneOf([0,90,180,270]),shake:X.bool,size:X.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:X.bool,spinPulse:X.bool,spinReverse:X.bool,symbol:X.oneOfType([X.bool,X.string]),title:X.string,titleId:X.string,transform:X.oneOfType([X.string,X.object]),swapOpacity:X.bool};at.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var BD=bS.bind(null,oh.createElement),qD={prefix:"fas",iconName:"right-from-bracket",icon:[512,512,["sign-out-alt"],"f2f5","M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"]},WD=qD,GD={prefix:"fas",iconName:"eye-slash",icon:[640,512,[],"f070","M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zM223.1 149.5C248.6 126.2 282.7 112 320 112c79.5 0 144 64.5 144 144c0 24.9-6.3 48.3-17.4 68.7L408 294.5c8.4-19.3 10.6-41.4 4.8-63.3c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3c0 10.2-2.4 19.8-6.6 28.3l-90.3-70.8zM373 389.9c-16.4 6.5-34.3 10.1-53 10.1c-79.5 0-144-64.5-144-144c0-6.9 .5-13.6 1.4-20.2L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5L373 389.9z"]},KD={prefix:"fas",iconName:"right-to-bracket",icon:[512,512,["sign-in-alt"],"f2f6","M217.9 105.9L340.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L217.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1L32 320c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM352 416l64 0c17.7 0 32-14.3 32-32l0-256c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l64 0c53 0 96 43 96 96l0 256c0 53-43 96-96 96l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32z"]},xS=KD,HD={prefix:"fas",iconName:"circle-question",icon:[512,512,[62108,"question-circle"],"f059","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"]},QD=HD,NS={prefix:"fas",iconName:"eye",icon:[576,512,[128065],"f06e","M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"]},YD={prefix:"fas",iconName:"sun",icon:[512,512,[9728],"f185","M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM160 256a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zm224 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0z"]},XD={prefix:"fas",iconName:"xmark",icon:[384,512,[128473,10005,10006,10060,215,"close","multiply","remove","times"],"f00d","M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"]},DS=XD,JD={prefix:"fas",iconName:"chevron-left",icon:[320,512,[9001],"f053","M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"]},ZD={prefix:"fas",iconName:"chevron-right",icon:[320,512,[9002],"f054","M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"]},eO={prefix:"fas",iconName:"moon",icon:[384,512,[127769,9214],"f186","M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"]},tO={prefix:"fas",iconName:"user-plus",icon:[640,512,[],"f234","M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM504 312V248H440c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V136c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H552v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"]},P0={};/**
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
 */const OS=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},nO=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},VS={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,d=(s&3)<<4|a>>4;let h=(a&15)<<2|u>>6,f=u&63;l||(f=64,o||(h=64)),r.push(n[c],n[d],n[h],n[f])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(OS(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):nO(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const d=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||d==null)throw new rO;const h=s<<2|a>>4;if(r.push(h),u!==64){const f=a<<4&240|u>>2;if(r.push(f),d!==64){const v=u<<6&192|d;r.push(v)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class rO extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const iO=function(t){const e=OS(t);return VS.encodeByteArray(e,!0)},Nd=function(t){return iO(t).replace(/\./g,"")},LS=function(t){try{return VS.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function Dd(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!sO(n)||(t[n]=Dd(t[n],e[n]));return t}function sO(t){return t!=="__proto__"}/**
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
 */function oO(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const aO=()=>oO().__FIREBASE_DEFAULTS__,lO=()=>{if(typeof process>"u"||typeof P0>"u")return;const t=P0.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},uO=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&LS(t[1]);return e&&JSON.parse(e)},jv=()=>{try{return aO()||lO()||uO()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},MS=()=>{var t;return(t=jv())===null||t===void 0?void 0:t.config},cO=t=>{var e;return(e=jv())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class dO{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function hO(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Nd(JSON.stringify(n)),Nd(JSON.stringify(o)),""].join(".")}/**
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
 */function Ee(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function fO(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ee())}function Uv(){var t;const e=(t=jv())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function pO(){return typeof self=="object"&&self.self===self}function FS(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function $v(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function jS(){const t=Ee();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function US(){return!Uv()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function xl(){try{return typeof indexedDB=="object"}catch{return!1}}function mO(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const gO="FirebaseError";class At extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=gO,Object.setPrototypeOf(this,At.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ys.prototype.create)}}class ys{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?vO(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new At(i,a,r)}}function vO(t,e){return t.replace(yO,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const yO=/\{\$([^}]+)}/g;/**
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
 */function R0(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function _O(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Nl(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(b0(s)&&b0(o)){if(!Nl(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function b0(t){return t!==null&&typeof t=="object"}/**
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
 */function Wo(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function eo(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function xa(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function $S(t,e){const n=new wO(t,e);return n.subscribe.bind(n)}class wO{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");IO(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=sp),i.error===void 0&&(i.error=sp),i.complete===void 0&&(i.complete=sp);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function IO(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function sp(){}/**
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
 */function B(t){return t&&t._delegate?t._delegate:t}class jn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Ai="[DEFAULT]";/**
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
 */class EO{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new dO;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(SO(e))try{this.getOrInitializeService({instanceIdentifier:Ai})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Ai){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ai){return this.instances.has(e)}getOptions(e=Ai){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:TO(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Ai){return this.component?this.component.multipleInstances?e:Ai:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function TO(t){return t===Ai?void 0:t}function SO(t){return t.instantiationMode==="EAGER"}/**
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
 */class AO{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new EO(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */const zv=[];var J;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(J||(J={}));const zS={debug:J.DEBUG,verbose:J.VERBOSE,info:J.INFO,warn:J.WARN,error:J.ERROR,silent:J.SILENT},kO=J.INFO,PO={[J.DEBUG]:"log",[J.VERBOSE]:"log",[J.INFO]:"info",[J.WARN]:"warn",[J.ERROR]:"error"},RO=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=PO[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Rh{constructor(e){this.name=e,this._logLevel=kO,this._logHandler=RO,this._userLogHandler=null,zv.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in J))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?zS[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,J.DEBUG,...e),this._logHandler(this,J.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,J.VERBOSE,...e),this._logHandler(this,J.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,J.INFO,...e),this._logHandler(this,J.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,J.WARN,...e),this._logHandler(this,J.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,J.ERROR,...e),this._logHandler(this,J.ERROR,...e)}}function bO(t){zv.forEach(e=>{e.setLogLevel(t)})}function CO(t,e){for(const n of zv){let r=null;e&&e.level&&(r=zS[e.level]),t===null?n.userLogHandler=null:n.userLogHandler=(i,s,...o)=>{const a=o.map(l=>{if(l==null)return null;if(typeof l=="string")return l;if(typeof l=="number"||typeof l=="boolean")return l.toString();if(l instanceof Error)return l.message;try{return JSON.stringify(l)}catch{return null}}).filter(l=>l).join(" ");s>=(r??i.logLevel)&&t({level:J[s].toLowerCase(),message:a,args:o,type:i.name})}}}const xO=(t,e)=>e.some(n=>t instanceof n);let C0,x0;function NO(){return C0||(C0=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function DO(){return x0||(x0=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const BS=new WeakMap,Fm=new WeakMap,qS=new WeakMap,op=new WeakMap,Bv=new WeakMap;function OO(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(qr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&BS.set(n,t)}).catch(()=>{}),Bv.set(e,t),e}function VO(t){if(Fm.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Fm.set(t,e)}let jm={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Fm.get(t);if(e==="objectStoreNames")return t.objectStoreNames||qS.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return qr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function LO(t){jm=t(jm)}function MO(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(ap(this),e,...n);return qS.set(r,e.sort?e.sort():[e]),qr(r)}:DO().includes(t)?function(...e){return t.apply(ap(this),e),qr(BS.get(this))}:function(...e){return qr(t.apply(ap(this),e))}}function FO(t){return typeof t=="function"?MO(t):(t instanceof IDBTransaction&&VO(t),xO(t,NO())?new Proxy(t,jm):t)}function qr(t){if(t instanceof IDBRequest)return OO(t);if(op.has(t))return op.get(t);const e=FO(t);return e!==t&&(op.set(t,e),Bv.set(e,t)),e}const ap=t=>Bv.get(t);function jO(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=qr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(qr(o.result),l.oldVersion,l.newVersion,qr(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const UO=["get","getKey","getAll","getAllKeys","count"],$O=["put","add","delete","clear"],lp=new Map;function N0(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(lp.get(e))return lp.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=$O.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||UO.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return lp.set(e,s),s}LO(t=>({...t,get:(e,n,r)=>N0(e,n)||t.get(e,n,r),has:(e,n)=>!!N0(e,n)||t.has(e,n)}));/**
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
 */class zO{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(BO(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function BO(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Um="@firebase/app",D0="0.9.28";/**
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
 */const ts=new Rh("@firebase/app"),qO="@firebase/app-compat",WO="@firebase/analytics-compat",GO="@firebase/analytics",KO="@firebase/app-check-compat",HO="@firebase/app-check",QO="@firebase/auth",YO="@firebase/auth-compat",XO="@firebase/database",JO="@firebase/database-compat",ZO="@firebase/functions",eV="@firebase/functions-compat",tV="@firebase/installations",nV="@firebase/installations-compat",rV="@firebase/messaging",iV="@firebase/messaging-compat",sV="@firebase/performance",oV="@firebase/performance-compat",aV="@firebase/remote-config",lV="@firebase/remote-config-compat",uV="@firebase/storage",cV="@firebase/storage-compat",dV="@firebase/firestore",hV="@firebase/firestore-compat",fV="firebase",pV="10.8.1";/**
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
 */const Xr="[DEFAULT]",mV={[Um]:"fire-core",[qO]:"fire-core-compat",[GO]:"fire-analytics",[WO]:"fire-analytics-compat",[HO]:"fire-app-check",[KO]:"fire-app-check-compat",[QO]:"fire-auth",[YO]:"fire-auth-compat",[XO]:"fire-rtdb",[JO]:"fire-rtdb-compat",[ZO]:"fire-fn",[eV]:"fire-fn-compat",[tV]:"fire-iid",[nV]:"fire-iid-compat",[rV]:"fire-fcm",[iV]:"fire-fcm-compat",[sV]:"fire-perf",[oV]:"fire-perf-compat",[aV]:"fire-rc",[lV]:"fire-rc-compat",[uV]:"fire-gcs",[cV]:"fire-gcs-compat",[dV]:"fire-fst",[hV]:"fire-fst-compat","fire-js":"fire-js",[fV]:"fire-js-all"};/**
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
 */const Jr=new Map,Dl=new Map;function Od(t,e){try{t.container.addComponent(e)}catch(n){ts.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function WS(t,e){t.container.addOrOverwriteComponent(e)}function Zr(t){const e=t.name;if(Dl.has(e))return ts.debug(`There were multiple attempts to register component ${e}.`),!1;Dl.set(e,t);for(const n of Jr.values())Od(n,t);return!0}function GS(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function gV(t,e,n=Xr){GS(t,e).clearInstance(n)}function vV(){Dl.clear()}/**
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
 */const yV={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Jn=new ys("app","Firebase",yV);/**
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
 */let _V=class{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new jn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Jn.create("app-deleted",{appName:this._name})}};/**
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
 */const hi=pV;function qv(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Xr,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Jn.create("bad-app-name",{appName:String(i)});if(n||(n=MS()),!n)throw Jn.create("no-options");const s=Jr.get(i);if(s){if(Nl(n,s.options)&&Nl(r,s.config))return s;throw Jn.create("duplicate-app",{appName:i})}const o=new AO(i);for(const l of Dl.values())o.addComponent(l);const a=new _V(n,r,o);return Jr.set(i,a),a}function wV(t=Xr){const e=Jr.get(t);if(!e&&t===Xr&&MS())return qv();if(!e)throw Jn.create("no-app",{appName:t});return e}function IV(){return Array.from(Jr.values())}async function KS(t){const e=t.name;Jr.has(e)&&(Jr.delete(e),await Promise.all(t.container.getProviders().map(n=>n.delete())),t.isDeleted=!0)}function Mn(t,e,n){var r;let i=(r=mV[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ts.warn(a.join(" "));return}Zr(new jn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}function HS(t,e){if(t!==null&&typeof t!="function")throw Jn.create("invalid-log-argument");CO(t,e)}function QS(t){bO(t)}/**
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
 */const EV="firebase-heartbeat-database",TV=1,Ol="firebase-heartbeat-store";let up=null;function YS(){return up||(up=jO(EV,TV,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Ol)}catch(n){console.warn(n)}}}}).catch(t=>{throw Jn.create("idb-open",{originalErrorMessage:t.message})})),up}async function SV(t){try{const n=(await YS()).transaction(Ol),r=await n.objectStore(Ol).get(XS(t));return await n.done,r}catch(e){if(e instanceof At)ts.warn(e.message);else{const n=Jn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ts.warn(n.message)}}}async function O0(t,e){try{const r=(await YS()).transaction(Ol,"readwrite");await r.objectStore(Ol).put(e,XS(t)),await r.done}catch(n){if(n instanceof At)ts.warn(n.message);else{const r=Jn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ts.warn(r.message)}}}function XS(t){return`${t.name}!${t.options.appId}`}/**
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
 */const AV=1024,kV=30*24*60*60*1e3;class PV{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new bV(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=V0();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=kV}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=V0(),{heartbeatsToSend:r,unsentEntries:i}=RV(this._heartbeatsCache.heartbeats),s=Nd(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function V0(){return new Date().toISOString().substring(0,10)}function RV(t,e=AV){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),L0(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),L0(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class bV{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return xl()?mO().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await SV(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return O0(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return O0(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function L0(t){return Nd(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function CV(t){Zr(new jn("platform-logger",e=>new zO(e),"PRIVATE")),Zr(new jn("heartbeat",e=>new PV(e),"PRIVATE")),Mn(Um,D0,t),Mn(Um,D0,"esm2017"),Mn("fire-js","")}CV("");const xV=Object.freeze(Object.defineProperty({__proto__:null,FirebaseError:At,SDK_VERSION:hi,_DEFAULT_ENTRY_NAME:Xr,_addComponent:Od,_addOrOverwriteComponent:WS,_apps:Jr,_clearComponents:vV,_components:Dl,_getProvider:GS,_registerComponent:Zr,_removeServiceInstance:gV,deleteApp:KS,getApp:wV,getApps:IV,initializeApp:qv,onLog:HS,registerVersion:Mn,setLogLevel:QS},Symbol.toStringTag,{value:"Module"}));/**
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
 */class NV{constructor(e,n){this._delegate=e,this.firebase=n,Od(e,new jn("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),KS(this._delegate)))}_getService(e,n=Xr){var r;this._delegate.checkDestroyed();const i=this._delegate.container.getProvider(e);return!i.isInitialized()&&((r=i.getComponent())===null||r===void 0?void 0:r.instantiationMode)==="EXPLICIT"&&i.initialize(),i.getImmediate({identifier:n})}_removeServiceInstance(e,n=Xr){this._delegate.container.getProvider(e).clearInstance(n)}_addComponent(e){Od(this._delegate,e)}_addOrOverwriteComponent(e){WS(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
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
 */const DV={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance."},M0=new ys("app-compat","Firebase",DV);/**
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
 */function OV(t){const e={},n={__esModule:!0,initializeApp:s,app:i,registerVersion:Mn,setLogLevel:QS,onLog:HS,apps:null,SDK_VERSION:hi,INTERNAL:{registerComponent:a,removeApp:r,useAsService:l,modularAPIs:xV}};n.default=n,Object.defineProperty(n,"apps",{get:o});function r(u){delete e[u]}function i(u){if(u=u||Xr,!R0(e,u))throw M0.create("no-app",{appName:u});return e[u]}i.App=t;function s(u,c={}){const d=qv(u,c);if(R0(e,d.name))return e[d.name];const h=new t(d,n);return e[d.name]=h,h}function o(){return Object.keys(e).map(u=>e[u])}function a(u){const c=u.name,d=c.replace("-compat","");if(Zr(u)&&u.type==="PUBLIC"){const h=(f=i())=>{if(typeof f[d]!="function")throw M0.create("invalid-app-argument",{appName:c});return f[d]()};u.serviceProps!==void 0&&Dd(h,u.serviceProps),n[d]=h,t.prototype[d]=function(...f){return this._getService.bind(this,c).apply(this,u.multipleInstances?f:[])}}return u.type==="PUBLIC"?n[d]:null}function l(u,c){return c==="serverAuth"?null:c}return n}/**
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
 */function JS(){const t=OV(NV);t.INTERNAL=Object.assign(Object.assign({},t.INTERNAL),{createFirebaseNamespace:JS,extendNamespace:e,createSubscribe:$S,ErrorFactory:ys,deepExtend:Dd});function e(n){Dd(t,n)}return t}const VV=JS();/**
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
 */const F0=new Rh("@firebase/app-compat"),LV="@firebase/app-compat",MV="0.2.28";/**
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
 */function FV(t){Mn(LV,MV,t)}/**
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
 */if(pO()&&self.firebase!==void 0){F0.warn(`
    Warning: Firebase is already defined in the global scope. Please make sure
    Firebase library is only loaded once.
  `);const t=self.firebase.SDK_VERSION;t&&t.indexOf("LITE")>=0&&F0.warn(`
    Warning: You are trying to load Firebase while using Firebase Performance standalone script.
    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
    `)}const Q=VV;FV();var jV="firebase",UV="10.8.1";/**
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
 */Q.registerVersion(jV,UV,"app-compat");function Wv(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}const ga={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},Ps={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
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
 */function $V(){return{"admin-restricted-operation":"This operation is restricted to administrators only.","argument-error":"","app-not-authorized":"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.","app-not-installed":"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.","captcha-check-failed":"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.","code-expired":"The SMS code has expired. Please re-send the verification code to try again.","cordova-not-ready":"Cordova framework is not ready.","cors-unsupported":"This browser is not supported.","credential-already-in-use":"This credential is already associated with a different user account.","custom-token-mismatch":"The custom token corresponds to a different audience.","requires-recent-login":"This operation is sensitive and requires recent authentication. Log in again before retrying this request.","dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.","dynamic-link-not-activated":"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.","email-change-needs-verification":"Multi-factor users must always have a verified email.","email-already-in-use":"The email address is already in use by another account.","emulator-config-failed":'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',"expired-action-code":"The action code has expired.","cancelled-popup-request":"This operation has been cancelled due to another conflicting popup being opened.","internal-error":"An internal AuthError has occurred.","invalid-app-credential":"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.","invalid-app-id":"The mobile app identifier is not registed for the current project.","invalid-user-token":"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.","invalid-auth-event":"An internal AuthError has occurred.","invalid-verification-code":"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.","invalid-continue-uri":"The continue URL provided in the request is invalid.","invalid-cordova-configuration":"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.","invalid-custom-token":"The custom token format is incorrect. Please check the documentation.","invalid-dynamic-link-domain":"The provided dynamic link domain is not configured or authorized for the current project.","invalid-email":"The email address is badly formatted.","invalid-emulator-scheme":"Emulator URL must start with a valid scheme (http:// or https://).","invalid-api-key":"Your API key is invalid, please check you have copied it correctly.","invalid-cert-hash":"The SHA-1 certificate hash provided is invalid.","invalid-credential":"The supplied auth credential is incorrect, malformed or has expired.","invalid-message-payload":"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-multi-factor-session":"The request does not contain a valid proof of first factor successful sign-in.","invalid-oauth-provider":"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.","invalid-oauth-client-id":"The OAuth client ID provided is either invalid or does not match the specified API key.","unauthorized-domain":"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.","invalid-action-code":"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.","wrong-password":"The password is invalid or the user does not have a password.","invalid-persistence-type":"The specified persistence type is invalid. It can only be local, session or none.","invalid-phone-number":"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].","invalid-provider-id":"The specified provider ID is invalid.","invalid-recipient-email":"The email corresponding to this action failed to send as the provided recipient email address is invalid.","invalid-sender":"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-verification-id":"The verification ID used to create the phone auth credential is invalid.","invalid-tenant-id":"The Auth instance's tenant ID is invalid.","login-blocked":"Login blocked by user-provided method: {$originalMessage}","missing-android-pkg-name":"An Android Package Name must be provided if the Android App is required to be installed.","auth-domain-config-required":"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.","missing-app-credential":"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.","missing-verification-code":"The phone auth credential was created with an empty SMS verification code.","missing-continue-uri":"A continue URL must be provided in the request.","missing-iframe-start":"An internal AuthError has occurred.","missing-ios-bundle-id":"An iOS Bundle ID must be provided if an App Store ID is provided.","missing-or-invalid-nonce":"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.","missing-password":"A non-empty password must be provided","missing-multi-factor-info":"No second factor identifier is provided.","missing-multi-factor-session":"The request is missing proof of first factor successful sign-in.","missing-phone-number":"To send verification codes, provide a phone number for the recipient.","missing-verification-id":"The phone auth credential was created with an empty verification ID.","app-deleted":"This instance of FirebaseApp has been deleted.","multi-factor-info-not-found":"The user does not have a second factor matching the identifier provided.","multi-factor-auth-required":"Proof of ownership of a second factor is required to complete sign-in.","account-exists-with-different-credential":"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.","network-request-failed":"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.","no-auth-event":"An internal AuthError has occurred.","no-such-provider":"User was not linked to an account with the given provider.","null-user":"A null user object was provided as the argument for an operation which requires a non-null user object.","operation-not-allowed":"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.","operation-not-supported-in-this-environment":'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',"popup-blocked":"Unable to establish a connection with the popup. It may have been blocked by the browser.","popup-closed-by-user":"The popup has been closed by the user before finalizing the operation.","provider-already-linked":"User can only be linked to one identity for the given provider.","quota-exceeded":"The project's quota for this operation has been exceeded.","redirect-cancelled-by-user":"The redirect operation has been cancelled by the user before finalizing.","redirect-operation-pending":"A redirect sign-in operation is already pending.","rejected-credential":"The request contains malformed or mismatching credentials.","second-factor-already-in-use":"The second factor is already enrolled on this account.","maximum-second-factor-count-exceeded":"The maximum allowed number of second factors on a user has been exceeded.","tenant-id-mismatch":"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.","user-token-expired":"The user's credential is no longer valid. The user must sign in again.","too-many-requests":"We have blocked all requests from this device due to unusual activity. Try again later.","unauthorized-continue-uri":"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.","unsupported-first-factor":"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.","unsupported-persistence-type":"The current environment does not support the specified persistence type.","unsupported-tenant-operation":"This operation is not supported in a multi-tenant context.","unverified-email":"The operation requires a verified email.","user-cancelled":"The user did not grant your application the permissions it requested.","user-not-found":"There is no user record corresponding to this identifier. The user may have been deleted.","user-disabled":"The user account has been disabled by an administrator.","user-mismatch":"The supplied credentials do not correspond to the previously signed in user.","user-signed-out":"","weak-password":"The password must be 6 characters long or more.","web-storage-unsupported":"This browser is not supported or 3rd party cookies and data may be disabled.","already-initialized":"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance.","missing-recaptcha-token":"The reCAPTCHA token is missing when sending request to the backend.","invalid-recaptcha-token":"The reCAPTCHA token is invalid when sending request to the backend.","invalid-recaptcha-action":"The reCAPTCHA action is invalid when sending request to the backend.","recaptcha-not-enabled":"reCAPTCHA Enterprise integration is not enabled for this project.","missing-client-type":"The reCAPTCHA client type is missing when sending request to the backend.","missing-recaptcha-version":"The reCAPTCHA version is missing when sending request to the backend.","invalid-req-type":"Invalid request parameters.","invalid-recaptcha-version":"The reCAPTCHA version is invalid when sending request to the backend.","unsupported-password-policy-schema-version":"The password policy received from the backend uses a schema version that is not supported by this version of the Firebase SDK.","password-does-not-meet-requirements":"The password does not meet the requirements."}}function ZS(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const zV=$V,BV=ZS,eA=new ys("auth","Firebase",ZS());/**
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
 */const Vd=new Rh("@firebase/auth");function qV(t,...e){Vd.logLevel<=J.WARN&&Vd.warn(`Auth (${hi}): ${t}`,...e)}function qc(t,...e){Vd.logLevel<=J.ERROR&&Vd.error(`Auth (${hi}): ${t}`,...e)}/**
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
 */function ht(t,...e){throw Gv(t,...e)}function ut(t,...e){return Gv(t,...e)}function tA(t,e,n){const r=Object.assign(Object.assign({},BV()),{[e]:n});return new ys("auth","Firebase",r).create(e,{appName:t.name})}function Go(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&ht(t,"argument-error"),tA(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Gv(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return eA.create(t,...e)}function C(t,e,...n){if(!t)throw Gv(e,...n)}function Cn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw qc(e),new Error(e)}function yn(t,e){t||Cn(e)}/**
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
 */function Vl(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Kv(){return j0()==="http:"||j0()==="https:"}function j0(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function WV(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Kv()||FS()||"connection"in navigator)?navigator.onLine:!0}function GV(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class yu{constructor(e,n){this.shortDelay=e,this.longDelay=n,yn(n>e,"Short delay should be less than long delay!"),this.isMobile=fO()||$v()}get(){return WV()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Hv(t,e){yn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class nA{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Cn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Cn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Cn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const KV={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const HV=new yu(3e4,6e4);function De(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Oe(t,e,n,r,i={}){return rA(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Wo(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),nA.fetch()(iA(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function rA(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},KV),e);try{const i=new YV(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Na(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Na(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Na(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Na(t,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw tA(t,c,u);ht(t,c)}}catch(i){if(i instanceof At)throw i;ht(t,"network-request-failed",{message:String(i)})}}async function hr(t,e,n,r,i={}){const s=await Oe(t,e,n,r,i);return"mfaPendingCredential"in s&&ht(t,"multi-factor-auth-required",{_serverResponse:s}),s}function iA(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Hv(t.config,i):`${t.config.apiScheme}://${i}`}function QV(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class YV{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(ut(this.auth,"network-request-failed")),HV.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Na(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=ut(t,e,r);return i.customData._tokenResponse=n,i}/**
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
 */function U0(t){return t!==void 0&&t.getResponse!==void 0}function $0(t){return t!==void 0&&t.enterprise!==void 0}class XV{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return QV(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}/**
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
 */async function JV(t){return(await Oe(t,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function ZV(t,e){return Oe(t,"GET","/v2/recaptchaConfig",De(t,e))}/**
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
 */async function eL(t,e){return Oe(t,"POST","/v1/accounts:delete",e)}async function tL(t,e){return Oe(t,"POST","/v1/accounts:update",e)}async function nL(t,e){return Oe(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Ya(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function rL(t,e=!1){const n=B(t),r=await n.getIdToken(e),i=bh(r);C(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Ya(cp(i.auth_time)),issuedAtTime:Ya(cp(i.iat)),expirationTime:Ya(cp(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function cp(t){return Number(t)*1e3}function bh(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return qc("JWT malformed, contained fewer than 3 sections"),null;try{const i=LS(n);return i?JSON.parse(i):(qc("Failed to decode base64 JWT payload"),null)}catch(i){return qc("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function iL(t){const e=bh(t);return C(e,"internal-error"),C(typeof e.exp<"u","internal-error"),C(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function ar(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof At&&sL(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function sL({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class oL{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class sA{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ya(this.lastLoginAt),this.creationTime=Ya(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ll(t){var e;const n=t.auth,r=await t.getIdToken(),i=await ar(t,nL(n,{idToken:r}));C(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?uL(s.providerUserInfo):[],a=lL(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new sA(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,d)}async function aL(t){const e=B(t);await Ll(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function lL(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function uL(t){return t.map(e=>{var{providerId:n}=e,r=Wv(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function cL(t,e){const n=await rA(t,{},async()=>{const r=Wo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=iA(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",nA.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function dL(t,e){return Oe(t,"POST","/v2/accounts:revokeToken",De(t,e))}/**
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
 */class Ml{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){C(e.idToken,"internal-error"),C(typeof e.idToken<"u","internal-error"),C(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):iL(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return C(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await cL(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Ml;return r&&(C(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(C(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(C(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ml,this.toJSON())}_performRefresh(){return Cn("not implemented")}}/**
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
 */function _r(t,e){C(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class qi{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Wv(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new oL(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new sA(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await ar(this,this.stsTokenManager.getToken(this.auth,e));return C(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return rL(this,e)}reload(){return aL(this)}_assign(e){this!==e&&(C(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new qi(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){C(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Ll(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await ar(this,eL(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,c;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,h=(i=n.email)!==null&&i!==void 0?i:void 0,f=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,v=(o=n.photoURL)!==null&&o!==void 0?o:void 0,y=(a=n.tenantId)!==null&&a!==void 0?a:void 0,w=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,m=(u=n.createdAt)!==null&&u!==void 0?u:void 0,p=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:_,emailVerified:E,isAnonymous:S,providerData:R,stsTokenManager:x}=n;C(_&&x,e,"internal-error");const M=Ml.fromJSON(this.name,x);C(typeof _=="string",e,"internal-error"),_r(d,e.name),_r(h,e.name),C(typeof E=="boolean",e,"internal-error"),C(typeof S=="boolean",e,"internal-error"),_r(f,e.name),_r(v,e.name),_r(y,e.name),_r(w,e.name),_r(m,e.name),_r(p,e.name);const Z=new qi({uid:_,auth:e,email:h,emailVerified:E,displayName:d,isAnonymous:S,photoURL:v,phoneNumber:f,tenantId:y,stsTokenManager:M,createdAt:m,lastLoginAt:p});return R&&Array.isArray(R)&&(Z.providerData=R.map(G=>Object.assign({},G))),w&&(Z._redirectEventId=w),Z}static async _fromIdTokenResponse(e,n,r=!1){const i=new Ml;i.updateFromServerResponse(n);const s=new qi({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Ll(s),s}}/**
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
 */const z0=new Map;function qt(t){yn(t instanceof Function,"Expected a class definition");let e=z0.get(t);return e?(yn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,z0.set(t,e),e)}/**
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
 */class oA{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}oA.type="NONE";const Ao=oA;/**
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
 */function Wi(t,e,n){return`firebase:${t}:${e}:${n}`}class uo{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Wi(this.userKey,i.apiKey,s),this.fullPersistenceKey=Wi("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?qi._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new uo(qt(Ao),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||qt(Ao);const o=Wi(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const d=qi._fromJSON(e,c);u!==s&&(a=d),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new uo(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new uo(s,e,r))}}/**
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
 */function B0(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(uA(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(aA(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(cA(e))return"Blackberry";if(dA(e))return"Webos";if(Qv(e))return"Safari";if((e.includes("chrome/")||lA(e))&&!e.includes("edge/"))return"Chrome";if(_u(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function aA(t=Ee()){return/firefox\//i.test(t)}function Qv(t=Ee()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function lA(t=Ee()){return/crios\//i.test(t)}function uA(t=Ee()){return/iemobile/i.test(t)}function _u(t=Ee()){return/android/i.test(t)}function cA(t=Ee()){return/blackberry/i.test(t)}function dA(t=Ee()){return/webos/i.test(t)}function Ko(t=Ee()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function hL(t=Ee()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(t)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(t)}function fL(t=Ee()){var e;return Ko(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function pL(){return jS()&&document.documentMode===10}function hA(t=Ee()){return Ko(t)||_u(t)||dA(t)||cA(t)||/windows phone/i.test(t)||uA(t)}function mL(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function fA(t,e=[]){let n;switch(t){case"Browser":n=B0(Ee());break;case"Worker":n=`${B0(Ee())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${hi}/${r}`}/**
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
 */class gL{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function vL(t,e={}){return Oe(t,"GET","/v2/passwordPolicy",De(t,e))}/**
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
 */const yL=6;class _L{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:yL,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class wL{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new q0(this),this.idTokenSubscription=new q0(this),this.beforeStateQueue=new gL(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=eA,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=qt(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await uo.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return C(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ll(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=GV()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?B(e):null;return n&&C(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&C(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(qt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await vL(this),n=new _L(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ys("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await dL(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&qt(e)||this._popupRedirectResolver;C(n,this,"argument-error"),this.redirectPersistenceManager=await uo.create(this,[qt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(C(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return C(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=fA(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&qV(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Ce(t){return B(t)}class q0{constructor(e){this.auth=e,this.observer=null,this.addObserver=$S(n=>this.observer=n)}get next(){return C(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let wu={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function IL(t){wu=t}function Yv(t){return wu.loadJS(t)}function EL(){return wu.recaptchaV2Script}function TL(){return wu.recaptchaEnterpriseScript}function SL(){return wu.gapiScript}function pA(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const AL="recaptcha-enterprise",kL="NO_RECAPTCHA";class PL{constructor(e){this.type=AL,this.auth=Ce(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{ZV(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new XV(l);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;$0(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(kL)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&$0(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=TL();l.length!==0&&(l+=a),Yv(l).then(()=>{i(a,s,o)}).catch(u=>{o(u)})}}).catch(a=>{o(a)})})}}async function W0(t,e,n,r=!1){const i=new PL(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Fl(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await W0(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await W0(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}function RL(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(qt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function bL(t,e,n){const r=Ce(t);C(r._canInitEmulator,r,"emulator-config-failed"),C(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=mA(e),{host:o,port:a}=CL(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||xL()}function mA(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function CL(t){const e=mA(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:G0(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:G0(o)}}}function G0(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function xL(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Ho{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Cn("not implemented")}_getIdTokenResponse(e){return Cn("not implemented")}_linkToIdToken(e,n){return Cn("not implemented")}_getReauthenticationResolver(e){return Cn("not implemented")}}/**
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
 */async function gA(t,e){return Oe(t,"POST","/v1/accounts:resetPassword",De(t,e))}async function NL(t,e){return Oe(t,"POST","/v1/accounts:update",e)}async function DL(t,e){return Oe(t,"POST","/v1/accounts:signUp",e)}async function OL(t,e){return Oe(t,"POST","/v1/accounts:update",De(t,e))}/**
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
 */async function VL(t,e){return hr(t,"POST","/v1/accounts:signInWithPassword",De(t,e))}async function Ch(t,e){return Oe(t,"POST","/v1/accounts:sendOobCode",De(t,e))}async function LL(t,e){return Ch(t,e)}async function ML(t,e){return Ch(t,e)}async function FL(t,e){return Ch(t,e)}async function jL(t,e){return Ch(t,e)}/**
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
 */async function UL(t,e){return hr(t,"POST","/v1/accounts:signInWithEmailLink",De(t,e))}async function $L(t,e){return hr(t,"POST","/v1/accounts:signInWithEmailLink",De(t,e))}/**
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
 */class jl extends Ho{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new jl(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new jl(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Fl(e,n,"signInWithPassword",VL);case"emailLink":return UL(e,{email:this._email,oobCode:this._password});default:ht(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Fl(e,r,"signUpPassword",DL);case"emailLink":return $L(e,{idToken:n,email:this._email,oobCode:this._password});default:ht(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Zn(t,e){return hr(t,"POST","/v1/accounts:signInWithIdp",De(t,e))}/**
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
 */const zL="http://localhost";class Un extends Ho{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Un(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):ht("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Wv(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Un(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Zn(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Zn(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Zn(e,n)}buildRequest(){const e={requestUri:zL,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Wo(n)}return e}}/**
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
 */async function BL(t,e){return Oe(t,"POST","/v1/accounts:sendVerificationCode",De(t,e))}async function qL(t,e){return hr(t,"POST","/v1/accounts:signInWithPhoneNumber",De(t,e))}async function WL(t,e){const n=await hr(t,"POST","/v1/accounts:signInWithPhoneNumber",De(t,e));if(n.temporaryProof)throw Na(t,"account-exists-with-different-credential",n);return n}const GL={USER_NOT_FOUND:"user-not-found"};async function KL(t,e){const n=Object.assign(Object.assign({},e),{operation:"REAUTH"});return hr(t,"POST","/v1/accounts:signInWithPhoneNumber",De(t,n),GL)}/**
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
 */class Gi extends Ho{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,n){return new Gi({verificationId:e,verificationCode:n})}static _fromTokenResponse(e,n){return new Gi({phoneNumber:e,temporaryProof:n})}_getIdTokenResponse(e){return qL(e,this._makeVerificationRequest())}_linkToIdToken(e,n){return WL(e,Object.assign({idToken:n},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return KL(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:n,verificationId:r,verificationCode:i}=this.params;return e&&n?{temporaryProof:e,phoneNumber:n}:{sessionInfo:r,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s}=e;return!r&&!n&&!i&&!s?null:new Gi({verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s})}}/**
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
 */function HL(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function QL(t){const e=eo(xa(t)).link,n=e?eo(xa(e)).deep_link_id:null,r=eo(xa(t)).deep_link_id;return(r?eo(xa(r)).link:null)||r||n||e||t}class xh{constructor(e){var n,r,i,s,o,a;const l=eo(xa(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(r=l.oobCode)!==null&&r!==void 0?r:null,d=HL((i=l.mode)!==null&&i!==void 0?i:null);C(u&&c&&d,"argument-error"),this.apiKey=u,this.operation=d,this.code=c,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=QL(e);try{return new xh(n)}catch{return null}}}/**
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
 */class fi{constructor(){this.providerId=fi.PROVIDER_ID}static credential(e,n){return jl._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=xh.parseLink(n);return C(r,"argument-error"),jl._fromEmailAndCode(e,r.code,r.tenantId)}}fi.PROVIDER_ID="password";fi.EMAIL_PASSWORD_SIGN_IN_METHOD="password";fi.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class fr{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Qo extends fr{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class co extends Qo{static credentialFromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;return C("providerId"in n&&"signInMethod"in n,"argument-error"),Un._fromParams(n)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return C(e.idToken||e.accessToken,"argument-error"),Un._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return co.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return co.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r,oauthTokenSecret:i,pendingToken:s,nonce:o,providerId:a}=e;if(!r&&!i&&!n&&!s||!a)return null;try{return new co(a)._credential({idToken:n,accessToken:r,nonce:o,pendingToken:s})}catch{return null}}}/**
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
 */class Sn extends Qo{constructor(){super("facebook.com")}static credential(e){return Un._fromParams({providerId:Sn.PROVIDER_ID,signInMethod:Sn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Sn.credentialFromTaggedObject(e)}static credentialFromError(e){return Sn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Sn.credential(e.oauthAccessToken)}catch{return null}}}Sn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Sn.PROVIDER_ID="facebook.com";/**
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
 */class An extends Qo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Un._fromParams({providerId:An.PROVIDER_ID,signInMethod:An.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return An.credentialFromTaggedObject(e)}static credentialFromError(e){return An.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return An.credential(n,r)}catch{return null}}}An.GOOGLE_SIGN_IN_METHOD="google.com";An.PROVIDER_ID="google.com";/**
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
 */class kn extends Qo{constructor(){super("github.com")}static credential(e){return Un._fromParams({providerId:kn.PROVIDER_ID,signInMethod:kn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return kn.credentialFromTaggedObject(e)}static credentialFromError(e){return kn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return kn.credential(e.oauthAccessToken)}catch{return null}}}kn.GITHUB_SIGN_IN_METHOD="github.com";kn.PROVIDER_ID="github.com";/**
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
 */const YL="http://localhost";class ko extends Ho{constructor(e,n){super(e,e),this.pendingToken=n}_getIdTokenResponse(e){const n=this.buildRequest();return Zn(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Zn(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Zn(e,n)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,pendingToken:s}=n;return!r||!i||!s||r!==i?null:new ko(r,s)}static _create(e,n){return new ko(e,n)}buildRequest(){return{requestUri:YL,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
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
 */const XL="saml.";class Ld extends fr{constructor(e){C(e.startsWith(XL),"argument-error"),super(e)}static credentialFromResult(e){return Ld.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return Ld.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const n=ko.fromJSON(e);return C(n,"argument-error"),n}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:n,providerId:r}=e;if(!n||!r)return null;try{return ko._create(r,n)}catch{return null}}}/**
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
 */class Pn extends Qo{constructor(){super("twitter.com")}static credential(e,n){return Un._fromParams({providerId:Pn.PROVIDER_ID,signInMethod:Pn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Pn.credentialFromTaggedObject(e)}static credentialFromError(e){return Pn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Pn.credential(n,r)}catch{return null}}}Pn.TWITTER_SIGN_IN_METHOD="twitter.com";Pn.PROVIDER_ID="twitter.com";/**
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
 */async function vA(t,e){return hr(t,"POST","/v1/accounts:signUp",De(t,e))}/**
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
 */class ln{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await qi._fromIdTokenResponse(e,r,i),o=K0(r);return new ln({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=K0(r);return new ln({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function K0(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */async function JL(t){var e;const n=Ce(t);if(await n._initializationPromise,!((e=n.currentUser)===null||e===void 0)&&e.isAnonymous)return new ln({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await vA(n,{returnSecureToken:!0}),i=await ln._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(i.user),i}/**
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
 */class Md extends At{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Md.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Md(e,n,r,i)}}function yA(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Md._fromErrorAndOperation(t,s,e,r):s})}/**
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
 */function _A(t){return new Set(t.map(({providerId:e})=>e).filter(e=>!!e))}/**
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
 */async function ZL(t,e){const n=B(t);await Nh(!0,n,e);const{providerUserInfo:r}=await tL(n.auth,{idToken:await n.getIdToken(),deleteProvider:[e]}),i=_A(r||[]);return n.providerData=n.providerData.filter(s=>i.has(s.providerId)),i.has("phone")||(n.phoneNumber=null),await n.auth._persistUserIfCurrent(n),n}async function Xv(t,e,n=!1){const r=await ar(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ln._forOperation(t,"link",r)}async function Nh(t,e,n){await Ll(e);const r=_A(e.providerData),i=t===!1?"provider-already-linked":"no-such-provider";C(r.has(n)===t,e.auth,i)}/**
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
 */async function wA(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await ar(t,yA(r,i,e,t),n);C(s.idToken,r,"internal-error");const o=bh(s.idToken);C(o,r,"internal-error");const{sub:a}=o;return C(t.uid===a,r,"user-mismatch"),ln._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&ht(r,"user-mismatch"),s}}/**
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
 */async function IA(t,e,n=!1){const r="signIn",i=await yA(t,r,e),s=await ln._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function Dh(t,e){return IA(Ce(t),e)}async function EA(t,e){const n=B(t);return await Nh(!1,n,e.providerId),Xv(n,e)}async function TA(t,e){return wA(B(t),e)}/**
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
 */async function eM(t,e){return hr(t,"POST","/v1/accounts:signInWithCustomToken",De(t,e))}/**
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
 */async function tM(t,e){const n=Ce(t),r=await eM(n,{token:e,returnSecureToken:!0}),i=await ln._fromIdTokenResponse(n,"signIn",r);return await n._updateCurrentUser(i.user),i}/**
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
 */class Iu{constructor(e,n){this.factorId=e,this.uid=n.mfaEnrollmentId,this.enrollmentTime=new Date(n.enrolledAt).toUTCString(),this.displayName=n.displayName}static _fromServerResponse(e,n){return"phoneInfo"in n?Jv._fromServerResponse(e,n):"totpInfo"in n?Zv._fromServerResponse(e,n):ht(e,"internal-error")}}class Jv extends Iu{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,n){return new Jv(n)}}class Zv extends Iu{constructor(e){super("totp",e)}static _fromServerResponse(e,n){return new Zv(n)}}/**
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
 */function Oh(t,e,n){var r;C(((r=n.url)===null||r===void 0?void 0:r.length)>0,t,"invalid-continue-uri"),C(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(C(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(C(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
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
 */async function ey(t){const e=Ce(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function nM(t,e,n){const r=Ce(t),i={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};n&&Oh(r,i,n),await Fl(r,i,"getOobCode",ML)}async function rM(t,e,n){await gA(B(t),{oobCode:e,newPassword:n}).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&ey(t),r})}async function iM(t,e){await OL(B(t),{oobCode:e})}async function SA(t,e){const n=B(t),r=await gA(n,{oobCode:e}),i=r.requestType;switch(C(i,n,"internal-error"),i){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":C(r.newEmail,n,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":C(r.mfaInfo,n,"internal-error");default:C(r.email,n,"internal-error")}let s=null;return r.mfaInfo&&(s=Iu._fromServerResponse(Ce(n),r.mfaInfo)),{data:{email:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.newEmail:r.email)||null,previousEmail:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.email:r.newEmail)||null,multiFactorInfo:s},operation:i}}async function sM(t,e){const{data:n}=await SA(B(t),e);return n.email}async function oM(t,e,n){const r=Ce(t),o=await Fl(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",vA).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&ey(t),l}),a=await ln._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function aM(t,e,n){return Dh(B(t),fi.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&ey(t),r})}/**
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
 */async function lM(t,e,n){const r=Ce(t),i={requestType:"EMAIL_SIGNIN",email:e,clientType:"CLIENT_TYPE_WEB"};function s(o,a){C(a.handleCodeInApp,r,"argument-error"),a&&Oh(r,o,a)}s(i,n),await Fl(r,i,"getOobCode",FL)}function uM(t,e){const n=xh.parseLink(e);return(n==null?void 0:n.operation)==="EMAIL_SIGNIN"}async function cM(t,e,n){const r=B(t),i=fi.credentialWithLink(e,n||Vl());return C(i._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),Dh(r,i)}/**
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
 */async function dM(t,e){return Oe(t,"POST","/v1/accounts:createAuthUri",De(t,e))}/**
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
 */async function hM(t,e){const n=Kv()?Vl():"http://localhost",r={identifier:e,continueUri:n},{signinMethods:i}=await dM(B(t),r);return i||[]}async function fM(t,e){const n=B(t),i={requestType:"VERIFY_EMAIL",idToken:await t.getIdToken()};e&&Oh(n.auth,i,e);const{email:s}=await LL(n.auth,i);s!==t.email&&await t.reload()}async function pM(t,e,n){const r=B(t),s={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await t.getIdToken(),newEmail:e};n&&Oh(r.auth,s,n);const{email:o}=await jL(r.auth,s);o!==t.email&&await t.reload()}/**
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
 */async function mM(t,e){return Oe(t,"POST","/v1/accounts:update",e)}/**
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
 */async function gM(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=B(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await ar(r,mM(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function vM(t,e){return AA(B(t),e,null)}function yM(t,e){return AA(B(t),null,e)}async function AA(t,e,n){const{auth:r}=t,s={idToken:await t.getIdToken(),returnSecureToken:!0};e&&(s.email=e),n&&(s.password=n);const o=await ar(t,NL(r,s));await t._updateTokensIfNecessary(o,!0)}/**
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
 */function _M(t){var e,n;if(!t)return null;const{providerId:r}=t,i=t.rawUserInfo?JSON.parse(t.rawUserInfo):{},s=t.isNewUser||t.kind==="identitytoolkit#SignupNewUserResponse";if(!r&&(t!=null&&t.idToken)){const o=(n=(e=bh(t.idToken))===null||e===void 0?void 0:e.firebase)===null||n===void 0?void 0:n.sign_in_provider;if(o){const a=o!=="anonymous"&&o!=="custom"?o:null;return new ho(s,a)}}if(!r)return null;switch(r){case"facebook.com":return new wM(s,i);case"github.com":return new IM(s,i);case"google.com":return new EM(s,i);case"twitter.com":return new TM(s,i,t.screenName||null);case"custom":case"anonymous":return new ho(s,null);default:return new ho(s,r,i)}}class ho{constructor(e,n,r={}){this.isNewUser=e,this.providerId=n,this.profile=r}}class kA extends ho{constructor(e,n,r,i){super(e,n,r),this.username=i}}class wM extends ho{constructor(e,n){super(e,"facebook.com",n)}}class IM extends kA{constructor(e,n){super(e,"github.com",n,typeof(n==null?void 0:n.login)=="string"?n==null?void 0:n.login:null)}}class EM extends ho{constructor(e,n){super(e,"google.com",n)}}class TM extends kA{constructor(e,n,r){super(e,"twitter.com",n,r)}}function SM(t){const{user:e,_tokenResponse:n}=t;return e.isAnonymous&&!n?{providerId:null,isNewUser:!1,profile:null}:_M(n)}/**
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
 */class Mi{constructor(e,n,r){this.type=e,this.credential=n,this.user=r}static _fromIdtoken(e,n){return new Mi("enroll",e,n)}static _fromMfaPendingCredential(e){return new Mi("signin",e)}toJSON(){return{multiFactorSession:{[this.type==="enroll"?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var n,r;if(e!=null&&e.multiFactorSession){if(!((n=e.multiFactorSession)===null||n===void 0)&&n.pendingCredential)return Mi._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(!((r=e.multiFactorSession)===null||r===void 0)&&r.idToken)return Mi._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
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
 */class ty{constructor(e,n,r){this.session=e,this.hints=n,this.signInResolver=r}static _fromError(e,n){const r=Ce(e),i=n.customData._serverResponse,s=(i.mfaInfo||[]).map(a=>Iu._fromServerResponse(r,a));C(i.mfaPendingCredential,r,"internal-error");const o=Mi._fromMfaPendingCredential(i.mfaPendingCredential);return new ty(o,s,async a=>{const l=await a._process(r,o);delete i.mfaInfo,delete i.mfaPendingCredential;const u=Object.assign(Object.assign({},i),{idToken:l.idToken,refreshToken:l.refreshToken});switch(n.operationType){case"signIn":const c=await ln._fromIdTokenResponse(r,n.operationType,u);return await r._updateCurrentUser(c.user),c;case"reauthenticate":return C(n.user,r,"internal-error"),ln._forOperation(n.user,n.operationType,u);default:ht(r,"internal-error")}})}async resolveSignIn(e){const n=e;return this.signInResolver(n)}}function AM(t,e){var n;const r=B(t),i=e;return C(e.customData.operationType,r,"argument-error"),C((n=i.customData._serverResponse)===null||n===void 0?void 0:n.mfaPendingCredential,r,"argument-error"),ty._fromError(r,i)}/**
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
 */function kM(t,e){return Oe(t,"POST","/v2/accounts/mfaEnrollment:start",De(t,e))}function PM(t,e){return Oe(t,"POST","/v2/accounts/mfaEnrollment:finalize",De(t,e))}function RM(t,e){return Oe(t,"POST","/v2/accounts/mfaEnrollment:withdraw",De(t,e))}class ny{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(n=>{n.mfaInfo&&(this.enrolledFactors=n.mfaInfo.map(r=>Iu._fromServerResponse(e.auth,r)))})}static _fromUser(e){return new ny(e)}async getSession(){return Mi._fromIdtoken(await this.user.getIdToken(),this.user)}async enroll(e,n){const r=e,i=await this.getSession(),s=await ar(this.user,r._process(this.user.auth,i,n));return await this.user._updateTokensIfNecessary(s),this.user.reload()}async unenroll(e){const n=typeof e=="string"?e:e.uid,r=await this.user.getIdToken();try{const i=await ar(this.user,RM(this.user.auth,{idToken:r,mfaEnrollmentId:n}));this.enrolledFactors=this.enrolledFactors.filter(({uid:s})=>s!==n),await this.user._updateTokensIfNecessary(i),await this.user.reload()}catch(i){throw i}}}const dp=new WeakMap;function bM(t){const e=B(t);return dp.has(e)||dp.set(e,ny._fromUser(e)),dp.get(e)}const Fd="__sak";/**
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
 */class PA{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Fd,"1"),this.storage.removeItem(Fd),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function CM(){const t=Ee();return Qv(t)||Ko(t)}const xM=1e3,NM=10;class RA extends PA{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=CM()&&mL(),this.fallbackToPolling=hA(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);pL()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,NM):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},xM)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}RA.type="LOCAL";const ry=RA;/**
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
 */class bA extends PA{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}bA.type="SESSION";const ns=bA;/**
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
 */function DM(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Vh{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Vh(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await DM(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Vh.receivers=[];/**
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
 */function Eu(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class OM{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=Eu("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(d){const h=d;if(h.data.eventId===u)switch(h.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(h.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Ue(){return window}function VM(t){Ue().location.href=t}/**
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
 */function iy(){return typeof Ue().WorkerGlobalScope<"u"&&typeof Ue().importScripts=="function"}async function LM(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function MM(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function FM(){return iy()?self:null}/**
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
 */const CA="firebaseLocalStorageDb",jM=1,jd="firebaseLocalStorage",xA="fbase_key";class Tu{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Lh(t,e){return t.transaction([jd],e?"readwrite":"readonly").objectStore(jd)}function UM(){const t=indexedDB.deleteDatabase(CA);return new Tu(t).toPromise()}function $m(){const t=indexedDB.open(CA,jM);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(jd,{keyPath:xA})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(jd)?e(r):(r.close(),await UM(),e(await $m()))})})}async function H0(t,e,n){const r=Lh(t,!0).put({[xA]:e,value:n});return new Tu(r).toPromise()}async function $M(t,e){const n=Lh(t,!1).get(e),r=await new Tu(n).toPromise();return r===void 0?null:r.value}function Q0(t,e){const n=Lh(t,!0).delete(e);return new Tu(n).toPromise()}const zM=800,BM=3;class NA{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await $m(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>BM)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return iy()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Vh._getInstance(FM()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await LM(),!this.activeServiceWorker)return;this.sender=new OM(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||MM()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await $m();return await H0(e,Fd,"1"),await Q0(e,Fd),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>H0(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>$M(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Q0(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Lh(i,!1).getAll();return new Tu(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),zM)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}NA.type="LOCAL";const Ul=NA;/**
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
 */function qM(t,e){return Oe(t,"POST","/v2/accounts/mfaSignIn:start",De(t,e))}function WM(t,e){return Oe(t,"POST","/v2/accounts/mfaSignIn:finalize",De(t,e))}/**
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
 */const GM=500,KM=6e4,_c=1e12;class HM{constructor(e){this.auth=e,this.counter=_c,this._widgets=new Map}render(e,n){const r=this.counter;return this._widgets.set(r,new QM(e,this.auth.name,n||{})),this.counter++,r}reset(e){var n;const r=e||_c;(n=this._widgets.get(r))===null||n===void 0||n.delete(),this._widgets.delete(r)}getResponse(e){var n;const r=e||_c;return((n=this._widgets.get(r))===null||n===void 0?void 0:n.getResponse())||""}async execute(e){var n;const r=e||_c;return(n=this._widgets.get(r))===null||n===void 0||n.execute(),""}}class QM{constructor(e,n,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const i=typeof e=="string"?document.getElementById(e):e;C(i,"argument-error",{appName:n}),this.container=i,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=YM(50);const{callback:e,"expired-callback":n}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,n)try{n()}catch{}this.isVisible&&this.execute()},KM)},GM))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function YM(t){const e=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<t;r++)e.push(n.charAt(Math.floor(Math.random()*n.length)));return e.join("")}/**
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
 */const hp=pA("rcb"),XM=new yu(3e4,6e4);class JM{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(!((e=Ue().grecaptcha)===null||e===void 0)&&e.render)}load(e,n=""){return C(ZM(n),e,"argument-error"),this.shouldResolveImmediately(n)&&U0(Ue().grecaptcha)?Promise.resolve(Ue().grecaptcha):new Promise((r,i)=>{const s=Ue().setTimeout(()=>{i(ut(e,"network-request-failed"))},XM.get());Ue()[hp]=()=>{Ue().clearTimeout(s),delete Ue()[hp];const a=Ue().grecaptcha;if(!a||!U0(a)){i(ut(e,"internal-error"));return}const l=a.render;a.render=(u,c)=>{const d=l(u,c);return this.counter++,d},this.hostLanguage=n,r(a)};const o=`${EL()}?${Wo({onload:hp,render:"explicit",hl:n})}`;Yv(o).catch(()=>{clearTimeout(s),i(ut(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var n;return!!(!((n=Ue().grecaptcha)===null||n===void 0)&&n.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function ZM(t){return t.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(t)}class e4{async load(e){return new HM(e)}clearedOneInstance(){}}/**
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
 */const DA="recaptcha",t4={theme:"light",type:"image"};let n4=class{constructor(e,n,r=Object.assign({},t4)){this.parameters=r,this.type=DA,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=Ce(e),this.isInvisible=this.parameters.size==="invisible",C(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const i=typeof n=="string"?document.getElementById(n):n;C(i,this.auth,"argument-error"),this.container=i,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new e4:new JM,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),n=this.getAssertedRecaptcha(),r=n.getResponse(e);return r||new Promise(i=>{const s=o=>{o&&(this.tokenChangeListeners.delete(s),i(o))};this.tokenChangeListeners.add(s),this.isInvisible&&n.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){C(!this.parameters.sitekey,this.auth,"argument-error"),C(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),C(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return n=>{if(this.tokenChangeListeners.forEach(r=>r(n)),typeof e=="function")e(n);else if(typeof e=="string"){const r=Ue()[e];typeof r=="function"&&r(n)}}}assertNotDestroyed(){C(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const n=document.createElement("div");e.appendChild(n),e=n}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){C(Kv()&&!iy(),this.auth,"internal-error"),await r4(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await JV(this.auth);C(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return C(this.recaptcha,this.auth,"internal-error"),this.recaptcha}};function r4(){let t=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}t=()=>e(),window.addEventListener("load",t)}).catch(e=>{throw t&&window.removeEventListener("load",t),e})}/**
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
 */class sy{constructor(e,n){this.verificationId=e,this.onConfirmation=n}confirm(e){const n=Gi._fromVerification(this.verificationId,e);return this.onConfirmation(n)}}async function i4(t,e,n){const r=Ce(t),i=await Mh(r,e,B(n));return new sy(i,s=>Dh(r,s))}async function s4(t,e,n){const r=B(t);await Nh(!1,r,"phone");const i=await Mh(r.auth,e,B(n));return new sy(i,s=>EA(r,s))}async function o4(t,e,n){const r=B(t),i=await Mh(r.auth,e,B(n));return new sy(i,s=>TA(r,s))}async function Mh(t,e,n){var r;const i=await n.verify();try{C(typeof i=="string",t,"argument-error"),C(n.type===DA,t,"argument-error");let s;if(typeof e=="string"?s={phoneNumber:e}:s=e,"session"in s){const o=s.session;if("phoneNumber"in s)return C(o.type==="enroll",t,"internal-error"),(await kM(t,{idToken:o.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}})).phoneSessionInfo.sessionInfo;{C(o.type==="signin",t,"internal-error");const a=((r=s.multiFactorHint)===null||r===void 0?void 0:r.uid)||s.multiFactorUid;return C(a,t,"missing-multi-factor-info"),(await qM(t,{mfaPendingCredential:o.credential,mfaEnrollmentId:a,phoneSignInInfo:{recaptchaToken:i}})).phoneResponseInfo.sessionInfo}}else{const{sessionInfo:o}=await BL(t,{phoneNumber:s.phoneNumber,recaptchaToken:i});return o}}finally{n._reset()}}async function a4(t,e){await Xv(B(t),e)}/**
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
 */let rs=class Wc{constructor(e){this.providerId=Wc.PROVIDER_ID,this.auth=Ce(e)}verifyPhoneNumber(e,n){return Mh(this.auth,e,B(n))}static credential(e,n){return Gi._fromVerification(e,n)}static credentialFromResult(e){const n=e;return Wc.credentialFromTaggedObject(n)}static credentialFromError(e){return Wc.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:n,temporaryProof:r}=e;return n&&r?Gi._fromTokenResponse(n,r):null}};rs.PROVIDER_ID="phone";rs.PHONE_SIGN_IN_METHOD="phone";/**
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
 */function _s(t,e){return e?qt(e):(C(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class oy extends Ho{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Zn(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Zn(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Zn(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function l4(t){return IA(t.auth,new oy(t),t.bypassAuthState)}function u4(t){const{auth:e,user:n}=t;return C(n,e,"internal-error"),wA(n,new oy(t),t.bypassAuthState)}async function c4(t){const{auth:e,user:n}=t;return C(n,e,"internal-error"),Xv(n,new oy(t),t.bypassAuthState)}/**
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
 */class OA{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return l4;case"linkViaPopup":case"linkViaRedirect":return c4;case"reauthViaPopup":case"reauthViaRedirect":return u4;default:ht(this.auth,"internal-error")}}resolve(e){yn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){yn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const d4=new yu(2e3,1e4);async function h4(t,e,n){const r=Ce(t);Go(t,e,fr);const i=_s(r,n);return new Hn(r,"signInViaPopup",e,i).executeNotNull()}async function f4(t,e,n){const r=B(t);Go(r.auth,e,fr);const i=_s(r.auth,n);return new Hn(r.auth,"reauthViaPopup",e,i,r).executeNotNull()}async function p4(t,e,n){const r=B(t);Go(r.auth,e,fr);const i=_s(r.auth,n);return new Hn(r.auth,"linkViaPopup",e,i,r).executeNotNull()}class Hn extends OA{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Hn.currentPopupAction&&Hn.currentPopupAction.cancel(),Hn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return C(e,this.auth,"internal-error"),e}async onExecution(){yn(this.filter.length===1,"Popup operations only handle one event");const e=Eu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(ut(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(ut(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Hn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ut(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,d4.get())};e()}}Hn.currentPopupAction=null;/**
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
 */const m4="pendingRedirect",Xa=new Map;class g4 extends OA{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Xa.get(this.auth._key());if(!e){try{const r=await v4(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Xa.set(this.auth._key(),e)}return this.bypassAuthState||Xa.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function v4(t,e){const n=LA(e),r=VA(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}async function ay(t,e){return VA(t)._set(LA(e),"true")}function y4(){Xa.clear()}function ly(t,e){Xa.set(t._key(),e)}function VA(t){return qt(t._redirectPersistence)}function LA(t){return Wi(m4,t.config.apiKey,t.name)}/**
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
 */function _4(t,e,n){return w4(t,e,n)}async function w4(t,e,n){const r=Ce(t);Go(t,e,fr),await r._initializationPromise;const i=_s(r,n);return await ay(i,r),i._openRedirect(r,e,"signInViaRedirect")}function I4(t,e,n){return E4(t,e,n)}async function E4(t,e,n){const r=B(t);Go(r.auth,e,fr),await r.auth._initializationPromise;const i=_s(r.auth,n);await ay(i,r.auth);const s=await MA(r);return i._openRedirect(r.auth,e,"reauthViaRedirect",s)}function T4(t,e,n){return S4(t,e,n)}async function S4(t,e,n){const r=B(t);Go(r.auth,e,fr),await r.auth._initializationPromise;const i=_s(r.auth,n);await Nh(!1,r,e.providerId),await ay(i,r.auth);const s=await MA(r);return i._openRedirect(r.auth,e,"linkViaRedirect",s)}async function A4(t,e){return await Ce(t)._initializationPromise,Fh(t,e,!1)}async function Fh(t,e,n=!1){const r=Ce(t),i=_s(r,e),o=await new g4(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}async function MA(t){const e=Eu(`${t.uid}:::`);return t._redirectEventId=e,await t.auth._setRedirectUser(t),await t.auth._persistUserIfCurrent(t),e}/**
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
 */const k4=10*60*1e3;class FA{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!P4(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!jA(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(ut(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=k4&&this.cachedEventUids.clear(),this.cachedEventUids.has(Y0(e))}saveEventToCache(e){this.cachedEventUids.add(Y0(e)),this.lastProcessedEventTime=Date.now()}}function Y0(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function jA({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function P4(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return jA(t);default:return!1}}/**
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
 */async function UA(t,e={}){return Oe(t,"GET","/v1/projects",e)}/**
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
 */const R4=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,b4=/^https?/;async function C4(t){if(t.config.emulator)return;const{authorizedDomains:e}=await UA(t);for(const n of e)try{if(x4(n))return}catch{}ht(t,"unauthorized-domain")}function x4(t){const e=Vl(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!b4.test(n))return!1;if(R4.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const N4=new yu(3e4,6e4);function X0(){const t=Ue().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function D4(t){return new Promise((e,n)=>{var r,i,s;function o(){X0(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{X0(),n(ut(t,"network-request-failed"))},timeout:N4.get()})}if(!((i=(r=Ue().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Ue().gapi)===null||s===void 0)&&s.load)o();else{const a=pA("iframefcb");return Ue()[a]=()=>{gapi.load?o():n(ut(t,"network-request-failed"))},Yv(`${SL()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Gc=null,e})}let Gc=null;function O4(t){return Gc=Gc||D4(t),Gc}/**
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
 */const V4=new yu(5e3,15e3),L4="__/auth/iframe",M4="emulator/auth/iframe",F4={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},j4=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function U4(t){const e=t.config;C(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Hv(e,M4):`https://${t.config.authDomain}/${L4}`,r={apiKey:e.apiKey,appName:t.name,v:hi},i=j4.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Wo(r).slice(1)}`}async function $4(t){const e=await O4(t),n=Ue().gapi;return C(n,t,"internal-error"),e.open({where:document.body,url:U4(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:F4,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=ut(t,"network-request-failed"),a=Ue().setTimeout(()=>{s(o)},V4.get());function l(){Ue().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const z4={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},B4=500,q4=600,W4="_blank",G4="http://localhost";class J0{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function K4(t,e,n,r=B4,i=q4){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},z4),{width:r.toString(),height:i.toString(),top:s,left:o}),u=Ee().toLowerCase();n&&(a=lA(u)?W4:n),aA(u)&&(e=e||G4,l.scrollbars="yes");const c=Object.entries(l).reduce((h,[f,v])=>`${h}${f}=${v},`,"");if(fL(u)&&a!=="_self")return H4(e||"",a),new J0(null);const d=window.open(e||"",a,c);C(d,t,"popup-blocked");try{d.focus()}catch{}return new J0(d)}function H4(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const Q4="__/auth/handler",Y4="emulator/auth/handler",X4=encodeURIComponent("fac");async function zm(t,e,n,r,i,s){C(t.config.authDomain,t,"auth-domain-config-required"),C(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:hi,eventId:i};if(e instanceof fr){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",_O(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,d]of Object.entries(s||{}))o[c]=d}if(e instanceof Qo){const c=e.getScopes().filter(d=>d!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];const l=await t._getAppCheckToken(),u=l?`#${X4}=${encodeURIComponent(l)}`:"";return`${J4(t)}?${Wo(a).slice(1)}${u}`}function J4({config:t}){return t.emulator?Hv(t,Y4):`https://${t.authDomain}/${Q4}`}/**
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
 */const fp="webStorageSupport";class Z4{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ns,this._completeRedirectFn=Fh,this._overrideRedirectResult=ly}async _openPopup(e,n,r,i){var s;yn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await zm(e,n,r,Vl(),i);return K4(e,o,Eu())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await zm(e,n,r,Vl(),i);return VM(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(yn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await $4(e),r=new FA(e);return n.register("authEvent",i=>(C(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(fp,{type:fp},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[fp];o!==void 0&&n(!!o),ht(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=C4(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return hA()||Qv()||Ko()}}const eF=Z4;class tF{constructor(e){this.factorId=e}_process(e,n,r){switch(n.type){case"enroll":return this._finalizeEnroll(e,n.credential,r);case"signin":return this._finalizeSignIn(e,n.credential);default:return Cn("unexpected MultiFactorSessionType")}}}class uy extends tF{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new uy(e)}_finalizeEnroll(e,n,r){return PM(e,{idToken:n,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,n){return WM(e,{mfaPendingCredential:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class $A{constructor(){}static assertion(e){return uy._fromCredential(e)}}$A.FACTOR_ID="phone";var Z0="@firebase/auth",eI="1.6.1";/**
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
 */class nF{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){C(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function rF(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function iF(t){Zr(new jn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;C(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:fA(t)},u=new wL(r,i,s,l);return RL(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Zr(new jn("auth-internal",e=>{const n=Ce(e.getProvider("auth").getImmediate());return(r=>new nF(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Mn(Z0,eI,rF(t)),Mn(Z0,eI,"esm2017")}/**
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
 */const sF=5*60;cO("authIdTokenMaxAge");function oF(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}IL({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=ut("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",oF().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});iF("Browser");/**
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
 */function is(){return window}/**
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
 */const aF=2e3;async function lF(t,e,n){var r;const{BuildInfo:i}=is();yn(e.sessionId,"AuthEvent did not contain a session ID");const s=await fF(e.sessionId),o={};return Ko()?o.ibi=i.packageName:_u()?o.apn=i.packageName:ht(t,"operation-not-supported-in-this-environment"),i.displayName&&(o.appDisplayName=i.displayName),o.sessionId=s,zm(t,n,e.type,void 0,(r=e.eventId)!==null&&r!==void 0?r:void 0,o)}async function uF(t){const{BuildInfo:e}=is(),n={};Ko()?n.iosBundleId=e.packageName:_u()?n.androidPackageName=e.packageName:ht(t,"operation-not-supported-in-this-environment"),await UA(t,n)}function cF(t){const{cordova:e}=is();return new Promise(n=>{e.plugins.browsertab.isAvailable(r=>{let i=null;r?e.plugins.browsertab.openUrl(t):i=e.InAppBrowser.open(t,hL()?"_blank":"_system","location=yes"),n(i)})})}async function dF(t,e,n){const{cordova:r}=is();let i=()=>{};try{await new Promise((s,o)=>{let a=null;function l(){var d;s();const h=(d=r.plugins.browsertab)===null||d===void 0?void 0:d.close;typeof h=="function"&&h(),typeof(n==null?void 0:n.close)=="function"&&n.close()}function u(){a||(a=window.setTimeout(()=>{o(ut(t,"redirect-cancelled-by-user"))},aF))}function c(){(document==null?void 0:document.visibilityState)==="visible"&&u()}e.addPassiveListener(l),document.addEventListener("resume",u,!1),_u()&&document.addEventListener("visibilitychange",c,!1),i=()=>{e.removePassiveListener(l),document.removeEventListener("resume",u,!1),document.removeEventListener("visibilitychange",c,!1),a&&window.clearTimeout(a)}})}finally{i()}}function hF(t){var e,n,r,i,s,o,a,l,u,c;const d=is();C(typeof((e=d==null?void 0:d.universalLinks)===null||e===void 0?void 0:e.subscribe)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),C(typeof((n=d==null?void 0:d.BuildInfo)===null||n===void 0?void 0:n.packageName)<"u",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),C(typeof((s=(i=(r=d==null?void 0:d.cordova)===null||r===void 0?void 0:r.plugins)===null||i===void 0?void 0:i.browsertab)===null||s===void 0?void 0:s.openUrl)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),C(typeof((l=(a=(o=d==null?void 0:d.cordova)===null||o===void 0?void 0:o.plugins)===null||a===void 0?void 0:a.browsertab)===null||l===void 0?void 0:l.isAvailable)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),C(typeof((c=(u=d==null?void 0:d.cordova)===null||u===void 0?void 0:u.InAppBrowser)===null||c===void 0?void 0:c.open)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function fF(t){const e=pF(t),n=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(n)).map(i=>i.toString(16).padStart(2,"0")).join("")}function pF(t){if(yn(/[0-9a-zA-Z]+/.test(t),"Can only convert alpha-numeric strings"),typeof TextEncoder<"u")return new TextEncoder().encode(t);const e=new ArrayBuffer(t.length),n=new Uint8Array(e);for(let r=0;r<t.length;r++)n[r]=t.charCodeAt(r);return n}/**
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
 */const mF=20;class gF extends FA{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise(e=>{this.resolveInialized=e})}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInialized(),this.passiveListeners.forEach(n=>n(e)),super.onEvent(e)}async initialized(){await this.initPromise}}function vF(t,e,n=null){return{type:e,eventId:n,urlResponse:null,sessionId:wF(),postBody:null,tenantId:t.tenantId,error:ut(t,"no-auth-event")}}function yF(t,e){return Bm()._set(qm(t),e)}async function tI(t){const e=await Bm()._get(qm(t));return e&&await Bm()._remove(qm(t)),e}function _F(t,e){var n,r;const i=EF(e);if(i.includes("/__/auth/callback")){const s=Kc(i),o=s.firebaseError?IF(decodeURIComponent(s.firebaseError)):null,a=(r=(n=o==null?void 0:o.code)===null||n===void 0?void 0:n.split("auth/"))===null||r===void 0?void 0:r[1],l=a?ut(a):null;return l?{type:t.type,eventId:t.eventId,tenantId:t.tenantId,error:l,urlResponse:null,sessionId:null,postBody:null}:{type:t.type,eventId:t.eventId,tenantId:t.tenantId,sessionId:t.sessionId,urlResponse:i,postBody:null}}return null}function wF(){const t=[],e="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let n=0;n<mF;n++){const r=Math.floor(Math.random()*e.length);t.push(e.charAt(r))}return t.join("")}function Bm(){return qt(ry)}function qm(t){return Wi("authEvent",t.config.apiKey,t.name)}function IF(t){try{return JSON.parse(t)}catch{return null}}function EF(t){const e=Kc(t),n=e.link?decodeURIComponent(e.link):void 0,r=Kc(n).link,i=e.deep_link_id?decodeURIComponent(e.deep_link_id):void 0;return Kc(i).link||i||r||n||t}function Kc(t){if(!(t!=null&&t.includes("?")))return{};const[e,...n]=t.split("?");return eo(n.join("?"))}/**
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
 */const TF=500;class SF{constructor(){this._redirectPersistence=ns,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=Fh,this._overrideRedirectResult=ly}async _initialize(e){const n=e._key();let r=this.eventManagers.get(n);return r||(r=new gF(e),this.eventManagers.set(n,r),this.attachCallbackListeners(e,r)),r}_openPopup(e){ht(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,n,r,i){hF(e);const s=await this._initialize(e);await s.initialized(),s.resetRedirect(),y4(),await this._originValidation(e);const o=vF(e,r,i);await yF(e,o);const a=await lF(e,o,n),l=await cF(a);return dF(e,s,l)}_isIframeWebStorageSupported(e,n){throw new Error("Method not implemented.")}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=uF(e)),this.originValidationPromises[n]}attachCallbackListeners(e,n){const{universalLinks:r,handleOpenURL:i,BuildInfo:s}=is(),o=setTimeout(async()=>{await tI(e),n.onEvent(nI())},TF),a=async c=>{clearTimeout(o);const d=await tI(e);let h=null;d&&(c!=null&&c.url)&&(h=_F(d,c.url)),n.onEvent(h||nI())};typeof r<"u"&&typeof r.subscribe=="function"&&r.subscribe(null,a);const l=i,u=`${s.packageName.toLowerCase()}://`;is().handleOpenURL=async c=>{if(c.toLowerCase().startsWith(u)&&a({url:c}),typeof l=="function")try{l(c)}catch(d){console.error(d)}}}}const AF=SF;function nI(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:ut("no-auth-event")}}/**
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
 */function kF(t,e){Ce(t)._logFramework(e)}var PF="@firebase/auth-compat",RF="0.5.3";/**
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
 */const bF=1e3;function Ja(){var t;return((t=self==null?void 0:self.location)===null||t===void 0?void 0:t.protocol)||null}function CF(){return Ja()==="http:"||Ja()==="https:"}function zA(t=Ee()){return!!((Ja()==="file:"||Ja()==="ionic:"||Ja()==="capacitor:")&&t.toLowerCase().match(/iphone|ipad|ipod|android/))}function xF(){return $v()||Uv()}function NF(){return jS()&&(document==null?void 0:document.documentMode)===11}function DF(t=Ee()){return/Edge\/\d+/.test(t)}function OF(t=Ee()){return NF()||DF(t)}function BA(){try{const t=self.localStorage,e=Eu();if(t)return t.setItem(e,"1"),t.removeItem(e),OF()?xl():!0}catch{return cy()&&xl()}return!1}function cy(){return typeof global<"u"&&"WorkerGlobalScope"in global&&"importScripts"in global}function pp(){return(CF()||FS()||zA())&&!xF()&&BA()&&!cy()}function qA(){return zA()&&typeof document<"u"}async function VF(){return qA()?new Promise(t=>{const e=setTimeout(()=>{t(!1)},bF);document.addEventListener("deviceready",()=>{clearTimeout(e),t(!0)})}):!1}function LF(){return typeof window<"u"?window:null}/**
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
 */const zt={LOCAL:"local",NONE:"none",SESSION:"session"},va=C,WA="persistence";function MF(t,e){if(va(Object.values(zt).includes(e),t,"invalid-persistence-type"),$v()){va(e!==zt.SESSION,t,"unsupported-persistence-type");return}if(Uv()){va(e===zt.NONE,t,"unsupported-persistence-type");return}if(cy()){va(e===zt.NONE||e===zt.LOCAL&&xl(),t,"unsupported-persistence-type");return}va(e===zt.NONE||BA(),t,"unsupported-persistence-type")}async function Wm(t){await t._initializationPromise;const e=GA(),n=Wi(WA,t.config.apiKey,t.name);e&&e.setItem(n,t._getPersistence())}function FF(t,e){const n=GA();if(!n)return[];const r=Wi(WA,t,e);switch(n.getItem(r)){case zt.NONE:return[Ao];case zt.LOCAL:return[Ul,ns];case zt.SESSION:return[ns];default:return[]}}function GA(){var t;try{return((t=LF())===null||t===void 0?void 0:t.sessionStorage)||null}catch{return null}}/**
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
 */const jF=C;class Dr{constructor(){this.browserResolver=qt(eF),this.cordovaResolver=qt(AF),this.underlyingResolver=null,this._redirectPersistence=ns,this._completeRedirectFn=Fh,this._overrideRedirectResult=ly}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,n,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,n,r,i)}async _openRedirect(e,n,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,n,r,i)}_isIframeWebStorageSupported(e,n){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,n)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return qA()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return jF(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await VF();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}/**
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
 */function KA(t){return t.unwrap()}function UF(t){return t.wrapped()}/**
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
 */function $F(t){return HA(t)}function zF(t,e){var n;const r=(n=e.customData)===null||n===void 0?void 0:n._tokenResponse;if((e==null?void 0:e.code)==="auth/multi-factor-auth-required"){const i=e;i.resolver=new BF(t,AM(t,e))}else if(r){const i=HA(e),s=e;i&&(s.credential=i,s.tenantId=r.tenantId||void 0,s.email=r.email||void 0,s.phoneNumber=r.phoneNumber||void 0)}}function HA(t){const{_tokenResponse:e}=t instanceof At?t.customData:t;if(!e)return null;if(!(t instanceof At)&&"temporaryProof"in e&&"phoneNumber"in e)return rs.credentialFromResult(t);const n=e.providerId;if(!n||n===ga.PASSWORD)return null;let r;switch(n){case ga.GOOGLE:r=An;break;case ga.FACEBOOK:r=Sn;break;case ga.GITHUB:r=kn;break;case ga.TWITTER:r=Pn;break;default:const{oauthIdToken:i,oauthAccessToken:s,oauthTokenSecret:o,pendingToken:a,nonce:l}=e;return!s&&!o&&!i&&!a?null:a?n.startsWith("saml.")?ko._create(n,a):Un._fromParams({providerId:n,signInMethod:n,pendingToken:a,idToken:i,accessToken:s}):new co(n).credential({idToken:i,accessToken:s,rawNonce:l})}return t instanceof At?r.credentialFromError(t):r.credentialFromResult(t)}function xt(t,e){return e.catch(n=>{throw n instanceof At&&zF(t,n),n}).then(n=>{const r=n.operationType,i=n.user;return{operationType:r,credential:$F(n),additionalUserInfo:SM(n),user:jh.getOrCreate(i)}})}async function Gm(t,e){const n=await e;return{verificationId:n.verificationId,confirm:r=>xt(t,n.confirm(r))}}class BF{constructor(e,n){this.resolver=n,this.auth=UF(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return xt(KA(this.auth),this.resolver.resolveSignIn(e))}}/**
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
 */let jh=class Da{constructor(e){this._delegate=e,this.multiFactor=bM(e)}static getOrCreate(e){return Da.USER_MAP.has(e)||Da.USER_MAP.set(e,new Da(e)),Da.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return xt(this.auth,EA(this._delegate,e))}async linkWithPhoneNumber(e,n){return Gm(this.auth,s4(this._delegate,e,n))}async linkWithPopup(e){return xt(this.auth,p4(this._delegate,e,Dr))}async linkWithRedirect(e){return await Wm(Ce(this.auth)),T4(this._delegate,e,Dr)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return xt(this.auth,TA(this._delegate,e))}reauthenticateWithPhoneNumber(e,n){return Gm(this.auth,o4(this._delegate,e,n))}reauthenticateWithPopup(e){return xt(this.auth,f4(this._delegate,e,Dr))}async reauthenticateWithRedirect(e){return await Wm(Ce(this.auth)),I4(this._delegate,e,Dr)}sendEmailVerification(e){return fM(this._delegate,e)}async unlink(e){return await ZL(this._delegate,e),this}updateEmail(e){return vM(this._delegate,e)}updatePassword(e){return yM(this._delegate,e)}updatePhoneNumber(e){return a4(this._delegate,e)}updateProfile(e){return gM(this._delegate,e)}verifyBeforeUpdateEmail(e,n){return pM(this._delegate,e,n)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}};jh.USER_MAP=new WeakMap;/**
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
 */const ya=C;class Km{constructor(e,n){if(this.app=e,n.isInitialized()){this._delegate=n.getImmediate(),this.linkUnderlyingAuth();return}const{apiKey:r}=e.options;ya(r,"invalid-api-key",{appName:e.name}),ya(r,"invalid-api-key",{appName:e.name});const i=typeof window<"u"?Dr:void 0;this._delegate=n.initialize({options:{persistence:qF(r,e.name),popupRedirectResolver:i}}),this._delegate._updateErrorMap(zV),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?jh.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,n){bL(this._delegate,e,n)}applyActionCode(e){return iM(this._delegate,e)}checkActionCode(e){return SA(this._delegate,e)}confirmPasswordReset(e,n){return rM(this._delegate,e,n)}async createUserWithEmailAndPassword(e,n){return xt(this._delegate,oM(this._delegate,e,n))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return hM(this._delegate,e)}isSignInWithEmailLink(e){return uM(this._delegate,e)}async getRedirectResult(){ya(pp(),this._delegate,"operation-not-supported-in-this-environment");const e=await A4(this._delegate,Dr);return e?xt(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){kF(this._delegate,e)}onAuthStateChanged(e,n,r){const{next:i,error:s,complete:o}=rI(e,n,r);return this._delegate.onAuthStateChanged(i,s,o)}onIdTokenChanged(e,n,r){const{next:i,error:s,complete:o}=rI(e,n,r);return this._delegate.onIdTokenChanged(i,s,o)}sendSignInLinkToEmail(e,n){return lM(this._delegate,e,n)}sendPasswordResetEmail(e,n){return nM(this._delegate,e,n||void 0)}async setPersistence(e){MF(this._delegate,e);let n;switch(e){case zt.SESSION:n=ns;break;case zt.LOCAL:n=await qt(Ul)._isAvailable()?Ul:ry;break;case zt.NONE:n=Ao;break;default:return ht("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(n)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return xt(this._delegate,JL(this._delegate))}signInWithCredential(e){return xt(this._delegate,Dh(this._delegate,e))}signInWithCustomToken(e){return xt(this._delegate,tM(this._delegate,e))}signInWithEmailAndPassword(e,n){return xt(this._delegate,aM(this._delegate,e,n))}signInWithEmailLink(e,n){return xt(this._delegate,cM(this._delegate,e,n))}signInWithPhoneNumber(e,n){return Gm(this._delegate,i4(this._delegate,e,n))}async signInWithPopup(e){return ya(pp(),this._delegate,"operation-not-supported-in-this-environment"),xt(this._delegate,h4(this._delegate,e,Dr))}async signInWithRedirect(e){return ya(pp(),this._delegate,"operation-not-supported-in-this-environment"),await Wm(this._delegate),_4(this._delegate,e,Dr)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return sM(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}Km.Persistence=zt;function rI(t,e,n){let r=t;typeof t!="function"&&({next:r,error:e,complete:n}=t);const i=r;return{next:o=>i(o&&jh.getOrCreate(o)),error:e,complete:n}}function qF(t,e){const n=FF(t,e);if(typeof self<"u"&&!n.includes(Ul)&&n.push(Ul),typeof window<"u")for(const r of[ry,ns])n.includes(r)||n.push(r);return n.includes(Ao)||n.push(Ao),n}/**
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
 */class dy{constructor(){this.providerId="phone",this._delegate=new rs(KA(Q.auth()))}static credential(e,n){return rs.credential(e,n)}verifyPhoneNumber(e,n){return this._delegate.verifyPhoneNumber(e,n)}unwrap(){return this._delegate}}dy.PHONE_SIGN_IN_METHOD=rs.PHONE_SIGN_IN_METHOD;dy.PROVIDER_ID=rs.PROVIDER_ID;/**
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
 */const WF=C;class GF{constructor(e,n,r=Q.app()){var i;WF((i=r.options)===null||i===void 0?void 0:i.apiKey,"invalid-api-key",{appName:r.name}),this._delegate=new n4(r.auth(),e,n),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}/**
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
 */const KF="auth-compat";function HF(t){t.INTERNAL.registerComponent(new jn(KF,e=>{const n=e.getProvider("app-compat").getImmediate(),r=e.getProvider("auth");return new Km(n,r)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:Ps.EMAIL_SIGNIN,PASSWORD_RESET:Ps.PASSWORD_RESET,RECOVER_EMAIL:Ps.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:Ps.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:Ps.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:Ps.VERIFY_EMAIL}},EmailAuthProvider:fi,FacebookAuthProvider:Sn,GithubAuthProvider:kn,GoogleAuthProvider:An,OAuthProvider:co,SAMLAuthProvider:Ld,PhoneAuthProvider:dy,PhoneMultiFactorGenerator:$A,RecaptchaVerifier:GF,TwitterAuthProvider:Pn,Auth:Km,AuthCredential:Ho,Error:At}).setInstantiationMode("LAZY").setMultipleInstances(!1)),t.registerVersion(PF,RF)}HF(Q);var QF=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},O,hy=hy||{},q=QF||self;function Uh(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Su(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function YF(t){return Object.prototype.hasOwnProperty.call(t,mp)&&t[mp]||(t[mp]=++XF)}var mp="closure_uid_"+(1e9*Math.random()>>>0),XF=0;function JF(t,e,n){return t.call.apply(t.bind,arguments)}function ZF(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function vt(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?vt=JF:vt=ZF,vt.apply(null,arguments)}function wc(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function et(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function pi(){this.s=this.s,this.o=this.o}var e3=0;pi.prototype.s=!1;pi.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),e3!=0)&&YF(this)};pi.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const QA=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function fy(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function iI(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(Uh(r)){const i=t.length||0,s=r.length||0;t.length=i+s;for(let o=0;o<s;o++)t[i+o]=r[o]}else t.push(r)}}function yt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}yt.prototype.h=function(){this.defaultPrevented=!0};var t3=function(){if(!q.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{const n=()=>{};q.addEventListener("test",n,e),q.removeEventListener("test",n,e)}catch{}return t}();function $l(t){return/^[\s\xa0]*$/.test(t)}function $h(){var t=q.navigator;return t&&(t=t.userAgent)?t:""}function Rn(t){return $h().indexOf(t)!=-1}function py(t){return py[" "](t),t}py[" "]=function(){};function n3(t,e){var n=H3;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var r3=Rn("Opera"),Po=Rn("Trident")||Rn("MSIE"),YA=Rn("Edge"),Hm=YA||Po,XA=Rn("Gecko")&&!($h().toLowerCase().indexOf("webkit")!=-1&&!Rn("Edge"))&&!(Rn("Trident")||Rn("MSIE"))&&!Rn("Edge"),i3=$h().toLowerCase().indexOf("webkit")!=-1&&!Rn("Edge");function JA(){var t=q.document;return t?t.documentMode:void 0}var Qm;e:{var gp="",vp=function(){var t=$h();if(XA)return/rv:([^\);]+)(\)|;)/.exec(t);if(YA)return/Edge\/([\d\.]+)/.exec(t);if(Po)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(i3)return/WebKit\/(\S+)/.exec(t);if(r3)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(vp&&(gp=vp?vp[1]:""),Po){var yp=JA();if(yp!=null&&yp>parseFloat(gp)){Qm=String(yp);break e}}Qm=gp}var Ym;if(q.document&&Po){var sI=JA();Ym=sI||parseInt(Qm,10)||void 0}else Ym=void 0;var s3=Ym;function zl(t,e){if(yt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(XA){e:{try{py(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:o3[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&zl.$.h.call(this)}}et(zl,yt);var o3={2:"touch",3:"pen",4:"mouse"};zl.prototype.h=function(){zl.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Au="closure_listenable_"+(1e6*Math.random()|0),a3=0;function l3(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=i,this.key=++a3,this.fa=this.ia=!1}function zh(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function my(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function u3(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function ZA(t){const e={};for(const n in t)e[n]=t[n];return e}const oI="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ek(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<oI.length;s++)n=oI[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Bh(t){this.src=t,this.g={},this.h=0}Bh.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=Jm(t,e,r,i);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new l3(e,this.src,s,!!r,i),e.ia=n,t.push(e)),e};function Xm(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=QA(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(zh(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Jm(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.fa&&s.listener==e&&s.capture==!!n&&s.la==r)return i}return-1}var gy="closure_lm_"+(1e6*Math.random()|0),_p={};function tk(t,e,n,r,i){if(r&&r.once)return rk(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)tk(t,e[s],n,r,i);return null}return n=_y(n),t&&t[Au]?t.O(e,n,Su(r)?!!r.capture:!!r,i):nk(t,e,n,!1,r,i)}function nk(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=Su(i)?!!i.capture:!!i,a=yy(t);if(a||(t[gy]=a=new Bh(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=c3(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)t3||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(sk(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function c3(){function t(n){return e.call(t.src,t.listener,n)}const e=d3;return t}function rk(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)rk(t,e[s],n,r,i);return null}return n=_y(n),t&&t[Au]?t.P(e,n,Su(r)?!!r.capture:!!r,i):nk(t,e,n,!0,r,i)}function ik(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)ik(t,e[s],n,r,i);else r=Su(r)?!!r.capture:!!r,n=_y(n),t&&t[Au]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=Jm(s,n,r,i),-1<n&&(zh(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=yy(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Jm(e,n,r,i)),(n=-1<t?e[t]:null)&&vy(n))}function vy(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[Au])Xm(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(sk(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=yy(e))?(Xm(n,t),n.h==0&&(n.src=null,e[gy]=null)):zh(t)}}}function sk(t){return t in _p?_p[t]:_p[t]="on"+t}function d3(t,e){if(t.fa)t=!0;else{e=new zl(e,this);var n=t.listener,r=t.la||t.src;t.ia&&vy(t),t=n.call(r,e)}return t}function yy(t){return t=t[gy],t instanceof Bh?t:null}var wp="__closure_events_fn_"+(1e9*Math.random()>>>0);function _y(t){return typeof t=="function"?t:(t[wp]||(t[wp]=function(e){return t.handleEvent(e)}),t[wp])}function Ze(){pi.call(this),this.i=new Bh(this),this.S=this,this.J=null}et(Ze,pi);Ze.prototype[Au]=!0;Ze.prototype.removeEventListener=function(t,e,n,r){ik(this,t,e,n,r)};function ct(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new yt(e,t);else if(e instanceof yt)e.target=e.target||t;else{var i=e;e=new yt(r,t),ek(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=Ic(o,r,!0,e)&&i}if(o=e.g=t,i=Ic(o,r,!0,e)&&i,i=Ic(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=Ic(o,r,!1,e)&&i}Ze.prototype.N=function(){if(Ze.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)zh(n[r]);delete t.g[e],t.h--}}this.J=null};Ze.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};Ze.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function Ic(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&Xm(t.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var wy=q.JSON.stringify;class h3{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function f3(){var t=Iy;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class p3{constructor(){this.h=this.g=null}add(e,n){const r=ok.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var ok=new h3(()=>new m3,t=>t.reset());class m3{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function g3(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function v3(t){q.setTimeout(()=>{throw t},0)}let Bl,ql=!1,Iy=new p3,ak=()=>{const t=q.Promise.resolve(void 0);Bl=()=>{t.then(y3)}};var y3=()=>{for(var t;t=f3();){try{t.h.call(t.g)}catch(n){v3(n)}var e=ok;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}ql=!1};function qh(t,e){Ze.call(this),this.h=t||1,this.g=e||q,this.j=vt(this.qb,this),this.l=Date.now()}et(qh,Ze);O=qh.prototype;O.ga=!1;O.T=null;O.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),ct(this,"tick"),this.ga&&(Ey(this),this.start()))}};O.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Ey(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}O.N=function(){qh.$.N.call(this),Ey(this),delete this.g};function Ty(t,e,n){if(typeof t=="function")n&&(t=vt(t,n));else if(t&&typeof t.handleEvent=="function")t=vt(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:q.setTimeout(t,e||0)}function lk(t){t.g=Ty(()=>{t.g=null,t.i&&(t.i=!1,lk(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class _3 extends pi{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:lk(this)}N(){super.N(),this.g&&(q.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Wl(t){pi.call(this),this.h=t,this.g={}}et(Wl,pi);var aI=[];function uk(t,e,n,r){Array.isArray(n)||(n&&(aI[0]=n.toString()),n=aI);for(var i=0;i<n.length;i++){var s=tk(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function ck(t){my(t.g,function(e,n){this.g.hasOwnProperty(n)&&vy(e)},t),t.g={}}Wl.prototype.N=function(){Wl.$.N.call(this),ck(this)};Wl.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Wh(){this.g=!0}Wh.prototype.Ea=function(){this.g=!1};function w3(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var d=c.split("_");o=2<=d.length&&d[1]=="type"?o+(c+"="+u+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function I3(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function to(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+T3(t,n)+(r?" "+r:"")})}function E3(t,e){t.info(function(){return"TIMEOUT: "+e})}Wh.prototype.info=function(){};function T3(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return wy(n)}catch{return e}}var ws={},lI=null;function Gh(){return lI=lI||new Ze}ws.Ta="serverreachability";function dk(t){yt.call(this,ws.Ta,t)}et(dk,yt);function Gl(t){const e=Gh();ct(e,new dk(e))}ws.STAT_EVENT="statevent";function hk(t,e){yt.call(this,ws.STAT_EVENT,t),this.stat=e}et(hk,yt);function Tt(t){const e=Gh();ct(e,new hk(e,t))}ws.Ua="timingevent";function fk(t,e){yt.call(this,ws.Ua,t),this.size=e}et(fk,yt);function ku(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return q.setTimeout(function(){t()},e)}var Kh={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},pk={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Sy(){}Sy.prototype.h=null;function uI(t){return t.h||(t.h=t.i())}function mk(){}var Pu={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Ay(){yt.call(this,"d")}et(Ay,yt);function ky(){yt.call(this,"c")}et(ky,yt);var Zm;function Hh(){}et(Hh,Sy);Hh.prototype.g=function(){return new XMLHttpRequest};Hh.prototype.i=function(){return{}};Zm=new Hh;function Ru(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new Wl(this),this.P=S3,t=Hm?125:void 0,this.V=new qh(t),this.I=null,this.i=!1,this.u=this.B=this.A=this.L=this.G=this.Y=this.C=null,this.F=[],this.g=null,this.o=0,this.s=this.v=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new gk}function gk(){this.i=null,this.g="",this.h=!1}var S3=45e3,vk={},eg={};O=Ru.prototype;O.setTimeout=function(t){this.P=t};function tg(t,e,n){t.L=1,t.A=Yh(lr(e)),t.u=n,t.S=!0,yk(t,null)}function yk(t,e){t.G=Date.now(),bu(t),t.B=lr(t.A);var n=t.B,r=t.W;Array.isArray(r)||(r=[String(r)]),kk(n.i,"t",r),t.o=0,n=t.l.J,t.h=new gk,t.g=Kk(t.l,n?e:null,!t.u),0<t.O&&(t.M=new _3(vt(t.Pa,t,t.g),t.O)),uk(t.U,t.g,"readystatechange",t.nb),e=t.I?ZA(t.I):{},t.u?(t.v||(t.v="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.B,t.v,t.u,e)):(t.v="GET",t.g.ha(t.B,t.v,null,e)),Gl(),w3(t.j,t.v,t.B,t.m,t.W,t.u)}O.nb=function(t){t=t.target;const e=this.M;e&&xn(t)==3?e.l():this.Pa(t)};O.Pa=function(t){try{if(t==this.g)e:{const c=xn(this.g);var e=this.g.Ia();const d=this.g.da();if(!(3>c)&&(c!=3||Hm||this.g&&(this.h.h||this.g.ja()||fI(this.g)))){this.J||c!=4||e==7||(e==8||0>=d?Gl(3):Gl(2)),Qh(this);var n=this.g.da();this.ca=n;t:if(_k(this)){var r=fI(this.g);t="";var i=r.length,s=xn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Fi(this),Za(this);var o="";break t}this.h.i=new q.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.length=0,this.h.g+=t,this.o=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,I3(this.j,this.v,this.B,this.m,this.W,c,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!$l(a)){var u=a;break t}}u=null}if(n=u)to(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ng(this,n);else{this.i=!1,this.s=3,Tt(12),Fi(this),Za(this);break e}}this.S?(wk(this,c,o),Hm&&this.i&&c==3&&(uk(this.U,this.V,"tick",this.mb),this.V.start())):(to(this.j,this.m,o,null),ng(this,o)),c==4&&Fi(this),this.i&&!this.J&&(c==4?Bk(this.l,this):(this.i=!1,bu(this)))}else W3(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.s=3,Tt(12)):(this.s=0,Tt(13)),Fi(this),Za(this)}}}catch{}finally{}};function _k(t){return t.g?t.v=="GET"&&t.L!=2&&t.l.Ha:!1}function wk(t,e,n){let r=!0,i;for(;!t.J&&t.o<n.length;)if(i=A3(t,n),i==eg){e==4&&(t.s=4,Tt(14),r=!1),to(t.j,t.m,null,"[Incomplete Response]");break}else if(i==vk){t.s=4,Tt(15),to(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else to(t.j,t.m,i,null),ng(t,i);_k(t)&&t.o!=0&&(t.h.g=t.h.g.slice(t.o),t.o=0),e!=4||n.length!=0||t.h.h||(t.s=1,Tt(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),Ny(e),e.M=!0,Tt(11))):(to(t.j,t.m,n,"[Invalid Chunked Response]"),Fi(t),Za(t))}O.mb=function(){if(this.g){var t=xn(this.g),e=this.g.ja();this.o<e.length&&(Qh(this),wk(this,t,e),this.i&&t!=4&&bu(this))}};function A3(t,e){var n=t.o,r=e.indexOf(`
`,n);return r==-1?eg:(n=Number(e.substring(n,r)),isNaN(n)?vk:(r+=1,r+n>e.length?eg:(e=e.slice(r,r+n),t.o=r+n,e)))}O.cancel=function(){this.J=!0,Fi(this)};function bu(t){t.Y=Date.now()+t.P,Ik(t,t.P)}function Ik(t,e){if(t.C!=null)throw Error("WatchDog timer not null");t.C=ku(vt(t.lb,t),e)}function Qh(t){t.C&&(q.clearTimeout(t.C),t.C=null)}O.lb=function(){this.C=null;const t=Date.now();0<=t-this.Y?(E3(this.j,this.B),this.L!=2&&(Gl(),Tt(17)),Fi(this),this.s=2,Za(this)):Ik(this,this.Y-t)};function Za(t){t.l.H==0||t.J||Bk(t.l,t)}function Fi(t){Qh(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,Ey(t.V),ck(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function ng(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||rg(n.i,t))){if(!t.K&&rg(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)zd(n),ef(n);else break e;xy(n),Tt(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&n.A==0&&!n.v&&(n.v=ku(vt(n.ib,n),6e3));if(1>=bk(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else ji(n,11)}else if((t.K||n.g==t)&&zd(n),!$l(e))for(i=n.Ja.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.V=u[0],u=u[1],n.H==2)if(u[0]=="c"){n.K=u[1],n.pa=u[2];const c=u[3];c!=null&&(n.ra=c,n.l.info("VER="+n.ra));const d=u[4];d!=null&&(n.Ga=d,n.l.info("SVER="+n.Ga));const h=u[5];h!=null&&typeof h=="number"&&0<h&&(r=1.5*h,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const f=t.g;if(f){const v=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(v){var s=r.i;s.g||v.indexOf("spdy")==-1&&v.indexOf("quic")==-1&&v.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(Py(s,s.h),s.h=null))}if(r.F){const y=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;y&&(r.Da=y,pe(r.I,r.F,y))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=Gk(r,r.J?r.pa:null,r.Y),o.K){Ck(r.i,o);var a=o,l=r.L;l&&a.setTimeout(l),a.C&&(Qh(a),bu(a)),r.g=o}else $k(r);0<n.j.length&&tf(n)}else u[0]!="stop"&&u[0]!="close"||ji(n,7);else n.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?ji(n,7):Cy(n):u[0]!="noop"&&n.h&&n.h.Aa(u),n.A=0)}}Gl(4)}catch{}}function k3(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Uh(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function P3(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Uh(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function Ek(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Uh(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=P3(t),r=k3(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}var Tk=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function R3(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Ki(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Ki){this.h=t.h,Ud(this,t.j),this.s=t.s,this.g=t.g,$d(this,t.m),this.l=t.l;var e=t.i,n=new Kl;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),cI(this,n),this.o=t.o}else t&&(e=String(t).match(Tk))?(this.h=!1,Ud(this,e[1]||"",!0),this.s=Oa(e[2]||""),this.g=Oa(e[3]||"",!0),$d(this,e[4]),this.l=Oa(e[5]||"",!0),cI(this,e[6]||"",!0),this.o=Oa(e[7]||"")):(this.h=!1,this.i=new Kl(null,this.h))}Ki.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Va(e,dI,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Va(e,dI,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Va(n,n.charAt(0)=="/"?x3:C3,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Va(n,D3)),t.join("")};function lr(t){return new Ki(t)}function Ud(t,e,n){t.j=n?Oa(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function $d(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function cI(t,e,n){e instanceof Kl?(t.i=e,O3(t.i,t.h)):(n||(e=Va(e,N3)),t.i=new Kl(e,t.h))}function pe(t,e,n){t.i.set(e,n)}function Yh(t){return pe(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Oa(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Va(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,b3),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function b3(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var dI=/[#\/\?@]/g,C3=/[#\?:]/g,x3=/[#\?]/g,N3=/[#\?@]/g,D3=/#/g;function Kl(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function mi(t){t.g||(t.g=new Map,t.h=0,t.i&&R3(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}O=Kl.prototype;O.add=function(t,e){mi(this),this.i=null,t=Yo(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Sk(t,e){mi(t),e=Yo(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Ak(t,e){return mi(t),e=Yo(t,e),t.g.has(e)}O.forEach=function(t,e){mi(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};O.ta=function(){mi(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let s=0;s<i.length;s++)n.push(e[r])}return n};O.Z=function(t){mi(this);let e=[];if(typeof t=="string")Ak(this,t)&&(e=e.concat(this.g.get(Yo(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};O.set=function(t,e){return mi(this),this.i=null,t=Yo(this,t),Ak(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};O.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function kk(t,e,n){Sk(t,e),0<n.length&&(t.i=null,t.g.set(Yo(t,e),fy(n)),t.h+=n.length)}O.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function Yo(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function O3(t,e){e&&!t.j&&(mi(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(Sk(this,r),kk(this,i,n))},t)),t.j=e}var V3=class{constructor(t,e){this.g=t,this.map=e}};function Pk(t){this.l=t||L3,q.PerformanceNavigationTiming?(t=q.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(q.g&&q.g.Ka&&q.g.Ka()&&q.g.Ka().dc),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var L3=10;function Rk(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function bk(t){return t.h?1:t.g?t.g.size:0}function rg(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Py(t,e){t.g?t.g.add(e):t.h=e}function Ck(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}Pk.prototype.cancel=function(){if(this.i=xk(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function xk(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return fy(t.i)}var M3=class{stringify(t){return q.JSON.stringify(t,void 0)}parse(t){return q.JSON.parse(t,void 0)}};function F3(){this.g=new M3}function j3(t,e,n){const r=n||"";try{Ek(t,function(i,s){let o=i;Su(i)&&(o=wy(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function U3(t,e){const n=new Wh;if(q.Image){const r=new Image;r.onload=wc(Ec,n,r,"TestLoadImage: loaded",!0,e),r.onerror=wc(Ec,n,r,"TestLoadImage: error",!1,e),r.onabort=wc(Ec,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=wc(Ec,n,r,"TestLoadImage: timeout",!1,e),q.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function Ec(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function Xh(t){this.l=t.ec||null,this.j=t.ob||!1}et(Xh,Sy);Xh.prototype.g=function(){return new Jh(this.l,this.j)};Xh.prototype.i=function(t){return function(){return t}}({});function Jh(t,e){Ze.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=Ry,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}et(Jh,Ze);var Ry=0;O=Jh.prototype;O.open=function(t,e){if(this.readyState!=Ry)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Hl(this)};O.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||q).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};O.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Cu(this)),this.readyState=Ry};O.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Hl(this)),this.g&&(this.readyState=3,Hl(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof q.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Nk(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function Nk(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}O.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Cu(this):Hl(this),this.readyState==3&&Nk(this)}};O.Za=function(t){this.g&&(this.response=this.responseText=t,Cu(this))};O.Ya=function(t){this.g&&(this.response=t,Cu(this))};O.ka=function(){this.g&&Cu(this)};function Cu(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Hl(t)}O.setRequestHeader=function(t,e){this.v.append(t,e)};O.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};O.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Hl(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Jh.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var $3=q.JSON.parse;function xe(t){Ze.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Dk,this.L=this.M=!1}et(xe,Ze);var Dk="",z3=/^https?$/i,B3=["POST","PUT"];O=xe.prototype;O.Oa=function(t){this.M=t};O.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Zm.g(),this.C=this.u?uI(this.u):uI(Zm),this.g.onreadystatechange=vt(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(s){hI(this,s);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=q.FormData&&t instanceof q.FormData,!(0<=QA(B3,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Lk(this),0<this.B&&((this.L=q3(this.g))?(this.g.timeout=this.B,this.g.ontimeout=vt(this.ua,this)):this.A=Ty(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){hI(this,s)}};function q3(t){return Po&&typeof t.timeout=="number"&&t.ontimeout!==void 0}O.ua=function(){typeof hy<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,ct(this,"timeout"),this.abort(8))};function hI(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Ok(t),Zh(t)}function Ok(t){t.F||(t.F=!0,ct(t,"complete"),ct(t,"error"))}O.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,ct(this,"complete"),ct(this,"abort"),Zh(this))};O.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Zh(this,!0)),xe.$.N.call(this)};O.La=function(){this.s||(this.G||this.v||this.l?Vk(this):this.kb())};O.kb=function(){Vk(this)};function Vk(t){if(t.h&&typeof hy<"u"&&(!t.C[1]||xn(t)!=4||t.da()!=2)){if(t.v&&xn(t)==4)Ty(t.La,0,t);else if(ct(t,"readystatechange"),xn(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=o===0){var i=String(t.I).match(Tk)[1]||null;!i&&q.self&&q.self.location&&(i=q.self.location.protocol.slice(0,-1)),r=!z3.test(i?i.toLowerCase():"")}n=r}if(n)ct(t,"complete"),ct(t,"success");else{t.m=6;try{var s=2<xn(t)?t.g.statusText:""}catch{s=""}t.j=s+" ["+t.da()+"]",Ok(t)}}finally{Zh(t)}}}}function Zh(t,e){if(t.g){Lk(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||ct(t,"ready");try{n.onreadystatechange=r}catch{}}}function Lk(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(q.clearTimeout(t.A),t.A=null)}O.isActive=function(){return!!this.g};function xn(t){return t.g?t.g.readyState:0}O.da=function(){try{return 2<xn(this)?this.g.status:-1}catch{return-1}};O.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};O.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),$3(e)}};function fI(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case Dk:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function W3(t){const e={};t=(t.g&&2<=xn(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if($l(t[r]))continue;var n=g3(t[r]);const i=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const s=e[i]||[];e[i]=s,s.push(n)}u3(e,function(r){return r.join(", ")})}O.Ia=function(){return this.m};O.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Mk(t){let e="";return my(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function by(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=Mk(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):pe(t,e,n))}function _a(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Fk(t){this.Ga=0,this.j=[],this.l=new Wh,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=_a("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=_a("baseRetryDelayMs",5e3,t),this.hb=_a("retryDelaySeedMs",1e4,t),this.eb=_a("forwardChannelMaxRetries",2,t),this.xa=_a("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new Pk(t&&t.concurrentRequestLimit),this.Ja=new F3,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}O=Fk.prototype;O.ra=8;O.H=1;function Cy(t){if(jk(t),t.H==3){var e=t.W++,n=lr(t.I);if(pe(n,"SID",t.K),pe(n,"RID",e),pe(n,"TYPE","terminate"),xu(t,n),e=new Ru(t,t.l,e),e.L=2,e.A=Yh(lr(n)),n=!1,q.navigator&&q.navigator.sendBeacon)try{n=q.navigator.sendBeacon(e.A.toString(),"")}catch{}!n&&q.Image&&(new Image().src=e.A,n=!0),n||(e.g=Kk(e.l,null),e.g.ha(e.A)),e.G=Date.now(),bu(e)}Wk(t)}function ef(t){t.g&&(Ny(t),t.g.cancel(),t.g=null)}function jk(t){ef(t),t.u&&(q.clearTimeout(t.u),t.u=null),zd(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&q.clearTimeout(t.m),t.m=null)}function tf(t){if(!Rk(t.i)&&!t.m){t.m=!0;var e=t.Na;Bl||ak(),ql||(Bl(),ql=!0),Iy.add(e,t),t.C=0}}function G3(t,e){return bk(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=ku(vt(t.Na,t,e),qk(t,t.C)),t.C++,!0)}O.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const i=new Ru(this,this.l,t);let s=this.s;if(this.U&&(s?(s=ZA(s),ek(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=Uk(this,i,e),n=lr(this.I),pe(n,"RID",t),pe(n,"CVER",22),this.F&&pe(n,"X-HTTP-Session-Id",this.F),xu(this,n),s&&(this.O?e="headers="+encodeURIComponent(String(Mk(s)))+"&"+e:this.o&&by(n,this.o,s)),Py(this.i,i),this.bb&&pe(n,"TYPE","init"),this.P?(pe(n,"$req",e),pe(n,"SID","null"),i.aa=!0,tg(i,n,null)):tg(i,n,e),this.H=2}}else this.H==3&&(t?pI(this,t):this.j.length==0||Rk(this.i)||pI(this))};function pI(t,e){var n;e?n=e.m:n=t.W++;const r=lr(t.I);pe(r,"SID",t.K),pe(r,"RID",n),pe(r,"AID",t.V),xu(t,r),t.o&&t.s&&by(r,t.o,t.s),n=new Ru(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=Uk(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),Py(t.i,n),tg(n,r,e)}function xu(t,e){t.na&&my(t.na,function(n,r){pe(e,r,n)}),t.h&&Ek({},function(n,r){pe(e,r,n)})}function Uk(t,e,n){n=Math.min(t.j.length,n);var r=t.h?vt(t.h.Va,t.h,t):null;e:{var i=t.j;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let u=i[l].g;const c=i[l].map;if(u-=s,0>u)s=Math.max(0,i[l].g-100),a=!1;else try{j3(c,o,"req"+u+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function $k(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;Bl||ak(),ql||(Bl(),ql=!0),Iy.add(e,t),t.A=0}}function xy(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=ku(vt(t.Ma,t),qk(t,t.A)),t.A++,!0)}O.Ma=function(){if(this.u=null,zk(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=ku(vt(this.jb,this),t)}};O.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,Tt(10),ef(this),zk(this))};function Ny(t){t.B!=null&&(q.clearTimeout(t.B),t.B=null)}function zk(t){t.g=new Ru(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=lr(t.wa);pe(e,"RID","rpc"),pe(e,"SID",t.K),pe(e,"AID",t.V),pe(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&pe(e,"TO",t.qa),pe(e,"TYPE","xmlhttp"),xu(t,e),t.o&&t.s&&by(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.A=Yh(lr(e)),n.u=null,n.S=!0,yk(n,t)}O.ib=function(){this.v!=null&&(this.v=null,ef(this),xy(this),Tt(19))};function zd(t){t.v!=null&&(q.clearTimeout(t.v),t.v=null)}function Bk(t,e){var n=null;if(t.g==e){zd(t),Ny(t),t.g=null;var r=2}else if(rg(t.i,e))n=e.F,Ck(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.u?e.u.length:0,e=Date.now()-e.G;var i=t.C;r=Gh(),ct(r,new fk(r,n)),tf(t)}else $k(t);else if(i=e.s,i==3||i==0&&0<e.ca||!(r==1&&G3(t,e)||r==2&&xy(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:ji(t,5);break;case 4:ji(t,10);break;case 3:ji(t,6);break;default:ji(t,2)}}}function qk(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function ji(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=vt(t.pb,t);n||(n=new Ki("//www.google.com/images/cleardot.gif"),q.location&&q.location.protocol=="http"||Ud(n,"https"),Yh(n)),U3(n.toString(),r)}else Tt(2);t.H=0,t.h&&t.h.za(e),Wk(t),jk(t)}O.pb=function(t){t?(this.l.info("Successfully pinged google.com"),Tt(2)):(this.l.info("Failed to ping google.com"),Tt(1))};function Wk(t){if(t.H=0,t.ma=[],t.h){const e=xk(t.i);(e.length!=0||t.j.length!=0)&&(iI(t.ma,e),iI(t.ma,t.j),t.i.i.length=0,fy(t.j),t.j.length=0),t.h.ya()}}function Gk(t,e,n){var r=n instanceof Ki?lr(n):new Ki(n);if(r.g!="")e&&(r.g=e+"."+r.g),$d(r,r.m);else{var i=q.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new Ki(null);r&&Ud(s,r),e&&(s.g=e),i&&$d(s,i),n&&(s.l=n),r=s}return n=t.F,e=t.Da,n&&e&&pe(r,n,e),pe(r,"VER",t.ra),xu(t,r),r}function Kk(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=t.Ha&&!t.va?new xe(new Xh({ob:n})):new xe(t.va),e.Oa(t.J),e}O.isActive=function(){return!!this.h&&this.h.isActive(this)};function Hk(){}O=Hk.prototype;O.Ba=function(){};O.Aa=function(){};O.za=function(){};O.ya=function(){};O.isActive=function(){return!0};O.Va=function(){};function Bd(){if(Po&&!(10<=Number(s3)))throw Error("Environmental error: no available transport.")}Bd.prototype.g=function(t,e){return new Kt(t,e)};function Kt(t,e){Ze.call(this),this.g=new Fk(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!$l(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!$l(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Xo(this)}et(Kt,Ze);Kt.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;Tt(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=Gk(t,null,t.Y),tf(t)};Kt.prototype.close=function(){Cy(this.g)};Kt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=wy(t),t=n);e.j.push(new V3(e.fb++,t)),e.H==3&&tf(e)};Kt.prototype.N=function(){this.g.h=null,delete this.j,Cy(this.g),delete this.g,Kt.$.N.call(this)};function Qk(t){Ay.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}et(Qk,Ay);function Yk(){ky.call(this),this.status=1}et(Yk,ky);function Xo(t){this.g=t}et(Xo,Hk);Xo.prototype.Ba=function(){ct(this.g,"a")};Xo.prototype.Aa=function(t){ct(this.g,new Qk(t))};Xo.prototype.za=function(t){ct(this.g,new Yk)};Xo.prototype.ya=function(){ct(this.g,"b")};function K3(){this.blockSize=-1}function _n(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}et(_n,K3);_n.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Ip(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var i=0;16>i;++i)r[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var s=t.g[3],o=e+(s^n&(i^s))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[1]+3905402710&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[5]+1200080426&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[9]+2336552879&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[13]+4254626195&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(i^s&(n^i))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[6]+3225465664&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[10]+38016083&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[14]+3275163606&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[2]+4243563512&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(n^i^s)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[8]+2272392833&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[4]+1272893353&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[0]+3936430074&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[12]+3873151461&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(i^(n|~s))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[7]+1126891415&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[3]+2399980690&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[15]+4264355552&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[11]+3174756917&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+s&4294967295}_n.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,i=this.h,s=0;s<e;){if(i==0)for(;s<=n;)Ip(this,t,s),s+=this.blockSize;if(typeof t=="string"){for(;s<e;)if(r[i++]=t.charCodeAt(s++),i==this.blockSize){Ip(this,r),i=0;break}}else for(;s<e;)if(r[i++]=t[s++],i==this.blockSize){Ip(this,r),i=0;break}}this.h=i,this.i+=e};_n.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function le(t,e){this.h=e;for(var n=[],r=!0,i=t.length-1;0<=i;i--){var s=t[i]|0;r&&s==e||(n[i]=s,r=!1)}this.g=n}var H3={};function Dy(t){return-128<=t&&128>t?n3(t,function(e){return new le([e|0],0>e?-1:0)}):new le([t|0],0>t?-1:0)}function Nn(t){if(isNaN(t)||!isFinite(t))return fo;if(0>t)return st(Nn(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=ig;return new le(e,0)}function Xk(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return st(Xk(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Nn(Math.pow(e,8)),r=fo,i=0;i<t.length;i+=8){var s=Math.min(8,t.length-i),o=parseInt(t.substring(i,i+s),e);8>s?(s=Nn(Math.pow(e,s)),r=r.R(s).add(Nn(o))):(r=r.R(n),r=r.add(Nn(o)))}return r}var ig=4294967296,fo=Dy(0),sg=Dy(1),mI=Dy(16777216);O=le.prototype;O.ea=function(){if(en(this))return-st(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:ig+r)*e,e*=ig}return t};O.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(Qn(this))return"0";if(en(this))return"-"+st(this).toString(t);for(var e=Nn(Math.pow(t,6)),n=this,r="";;){var i=Wd(n,e).g;n=qd(n,i.R(e));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=i,Qn(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};O.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function Qn(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function en(t){return t.h==-1}O.X=function(t){return t=qd(this,t),en(t)?-1:Qn(t)?0:1};function st(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new le(n,~t.h).add(sg)}O.abs=function(){return en(this)?st(this):this};O.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,i=0;i<=e;i++){var s=r+(this.D(i)&65535)+(t.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(t.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new le(n,n[n.length-1]&-2147483648?-1:0)};function qd(t,e){return t.add(st(e))}O.R=function(t){if(Qn(this)||Qn(t))return fo;if(en(this))return en(t)?st(this).R(st(t)):st(st(this).R(t));if(en(t))return st(this.R(st(t)));if(0>this.X(mI)&&0>t.X(mI))return Nn(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<t.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(i)>>>16,l=t.D(i)&65535;n[2*r+2*i]+=o*l,Tc(n,2*r+2*i),n[2*r+2*i+1]+=s*l,Tc(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,Tc(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,Tc(n,2*r+2*i+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new le(n,0)};function Tc(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function wa(t,e){this.g=t,this.h=e}function Wd(t,e){if(Qn(e))throw Error("division by zero");if(Qn(t))return new wa(fo,fo);if(en(t))return e=Wd(st(t),e),new wa(st(e.g),st(e.h));if(en(e))return e=Wd(t,st(e)),new wa(st(e.g),e.h);if(30<t.g.length){if(en(t)||en(e))throw Error("slowDivide_ only works with positive integers.");for(var n=sg,r=e;0>=r.X(t);)n=gI(n),r=gI(r);var i=Rs(n,1),s=Rs(r,1);for(r=Rs(r,2),n=Rs(n,2);!Qn(r);){var o=s.add(r);0>=o.X(t)&&(i=i.add(n),s=o),r=Rs(r,1),n=Rs(n,1)}return e=qd(t,i.R(e)),new wa(i,e)}for(i=fo;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=Nn(n),o=s.R(e);en(o)||0<o.X(t);)n-=r,s=Nn(n),o=s.R(e);Qn(s)&&(s=sg),i=i.add(s),t=qd(t,o)}return new wa(i,t)}O.gb=function(t){return Wd(this,t).h};O.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new le(n,this.h&t.h)};O.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new le(n,this.h|t.h)};O.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new le(n,this.h^t.h)};function gI(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new le(n,t.h)}function Rs(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,i=[],s=0;s<r;s++)i[s]=0<e?t.D(s+n)>>>e|t.D(s+n+1)<<32-e:t.D(s+n);return new le(i,t.h)}Bd.prototype.createWebChannel=Bd.prototype.g;Kt.prototype.send=Kt.prototype.u;Kt.prototype.open=Kt.prototype.m;Kt.prototype.close=Kt.prototype.close;Kh.NO_ERROR=0;Kh.TIMEOUT=8;Kh.HTTP_ERROR=6;pk.COMPLETE="complete";mk.EventType=Pu;Pu.OPEN="a";Pu.CLOSE="b";Pu.ERROR="c";Pu.MESSAGE="d";Ze.prototype.listen=Ze.prototype.O;xe.prototype.listenOnce=xe.prototype.P;xe.prototype.getLastError=xe.prototype.Sa;xe.prototype.getLastErrorCode=xe.prototype.Ia;xe.prototype.getStatus=xe.prototype.da;xe.prototype.getResponseJson=xe.prototype.Wa;xe.prototype.getResponseText=xe.prototype.ja;xe.prototype.send=xe.prototype.ha;xe.prototype.setWithCredentials=xe.prototype.Oa;_n.prototype.digest=_n.prototype.l;_n.prototype.reset=_n.prototype.reset;_n.prototype.update=_n.prototype.j;le.prototype.add=le.prototype.add;le.prototype.multiply=le.prototype.R;le.prototype.modulo=le.prototype.gb;le.prototype.compare=le.prototype.X;le.prototype.toNumber=le.prototype.ea;le.prototype.toString=le.prototype.toString;le.prototype.getBits=le.prototype.D;le.fromNumber=Nn;le.fromString=Xk;var Q3=function(){return new Bd},Y3=function(){return Gh()},Ep=Kh,X3=pk,J3=ws,vI={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},Sc=mk,Z3=xe,e5=_n,po=le;const yI="@firebase/firestore";/**
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
 */class Ye{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ye.UNAUTHENTICATED=new Ye(null),Ye.GOOGLE_CREDENTIALS=new Ye("google-credentials-uid"),Ye.FIRST_PARTY=new Ye("first-party-uid"),Ye.MOCK_USER=new Ye("mock-user");/**
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
 */let Jo="10.8.1";/**
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
 */const ei=new Rh("@firebase/firestore");function Os(){return ei.logLevel}function t5(t){ei.setLogLevel(t)}function P(t,...e){if(ei.logLevel<=J.DEBUG){const n=e.map(Oy);ei.debug(`Firestore (${Jo}): ${t}`,...n)}}function Me(t,...e){if(ei.logLevel<=J.ERROR){const n=e.map(Oy);ei.error(`Firestore (${Jo}): ${t}`,...n)}}function wn(t,...e){if(ei.logLevel<=J.WARN){const n=e.map(Oy);ei.warn(`Firestore (${Jo}): ${t}`,...n)}}function Oy(t){if(typeof t=="string")return t;try{/**
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
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
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
 */function V(t="Unexpected state"){const e=`FIRESTORE (${Jo}) INTERNAL ASSERTION FAILED: `+t;throw Me(e),new Error(e)}function $(t,e){t||V()}function n5(t,e){t||V()}function D(t,e){return t}/**
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
 */const T={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class k extends At{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Je{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class Jk{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class r5{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Ye.UNAUTHENTICATED))}shutdown(){}}class i5{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class s5{constructor(e){this.t=e,this.currentUser=Ye.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new Je;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Je,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{P("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(P("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Je)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(P("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?($(typeof r.accessToken=="string"),new Jk(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return $(e===null||typeof e=="string"),new Ye(e)}}class o5{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=Ye.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class a5{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new o5(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Ye.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class l5{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class u5{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=s=>{s.error!=null&&P("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,P("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{P("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):P("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?($(typeof n.token=="string"),this.R=n.token,new l5(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function c5(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class Zk{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=c5(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function W(t,e){return t<e?-1:t>e?1:0}function Ro(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}function eP(t){return t+"\0"}/**
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
 */class Ie{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new k(T.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new k(T.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new k(T.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new k(T.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ie.fromMillis(Date.now())}static fromDate(e){return Ie.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Ie(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?W(this.nanoseconds,e.nanoseconds):W(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class z{constructor(e){this.timestamp=e}static fromTimestamp(e){return new z(e)}static min(){return new z(new Ie(0,0))}static max(){return new z(new Ie(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Ql{constructor(e,n,r){n===void 0?n=0:n>e.length&&V(),r===void 0?r=e.length-n:r>e.length-n&&V(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Ql.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Ql?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class ee extends Ql{construct(e,n,r){return new ee(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new k(T.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new ee(n)}static emptyPath(){return new ee([])}}const d5=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class _e extends Ql{construct(e,n,r){return new _e(e,n,r)}static isValidIdentifier(e){return d5.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),_e.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new _e(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new k(T.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new k(T.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new k(T.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new k(T.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new _e(n)}static emptyPath(){return new _e([])}}/**
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
 */class N{constructor(e){this.path=e}static fromPath(e){return new N(ee.fromString(e))}static fromName(e){return new N(ee.fromString(e).popFirst(5))}static empty(){return new N(ee.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ee.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ee.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new N(new ee(e.slice()))}}/**
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
 */class Gd{constructor(e,n,r,i){this.indexId=e,this.collectionGroup=n,this.fields=r,this.indexState=i}}function og(t){return t.fields.find(e=>e.kind===2)}function ki(t){return t.fields.filter(e=>e.kind!==2)}Gd.UNKNOWN_ID=-1;class Hc{constructor(e,n){this.fieldPath=e,this.kind=n}}class Yl{constructor(e,n){this.sequenceNumber=e,this.offset=n}static empty(){return new Yl(0,Ht.min())}}function tP(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=z.fromTimestamp(r===1e9?new Ie(n+1,0):new Ie(n,r));return new Ht(i,N.empty(),e)}function nP(t){return new Ht(t.readTime,t.key,-1)}class Ht{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Ht(z.min(),N.empty(),-1)}static max(){return new Ht(z.max(),N.empty(),-1)}}function Vy(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=N.comparator(t.documentKey,e.documentKey),n!==0?n:W(t.largestBatchId,e.largestBatchId))}/**
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
 */const rP="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class iP{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function gi(t){if(t.code!==T.FAILED_PRECONDITION||t.message!==rP)throw t;P("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class I{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&V(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new I((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof I?n:I.resolve(n)}catch(n){return I.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):I.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):I.reject(n)}static resolve(e){return new I((n,r)=>{n(e)})}static reject(e){return new I((n,r)=>{r(e)})}static waitFor(e){return new I((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=I.resolve(!1);for(const r of e)n=n.next(i=>i?I.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new I((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const u=l;n(e[u]).next(c=>{o[u]=c,++a,a===s&&r(o)},c=>i(c))}})}static doWhile(e,n){return new I((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}/**
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
 */class nf{constructor(e,n){this.action=e,this.transaction=n,this.aborted=!1,this.V=new Je,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{n.error?this.V.reject(new el(e,n.error)):this.V.resolve()},this.transaction.onerror=r=>{const i=Ly(r.target.error);this.V.reject(new el(e,i))}}static open(e,n,r,i){try{return new nf(n,e.transaction(i,r))}catch(s){throw new el(n,s)}}get m(){return this.V.promise}abort(e){e&&this.V.reject(e),this.aborted||(P("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const n=this.transaction.objectStore(e);return new f5(n)}}class nn{constructor(e,n,r){this.name=e,this.version=n,this.p=r,nn.S(Ee())===12.2&&Me("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return P("SimpleDb","Removing database:",e),Pi(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!xl())return!1;if(nn.C())return!0;const e=Ee(),n=nn.S(e),r=0<n&&n<10,i=nn.v(e),s=0<i&&i<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||s)}static C(){var e;return typeof process<"u"&&((e=process.__PRIVATE_env)===null||e===void 0?void 0:e.F)==="YES"}static M(e,n){return e.store(n)}static S(e){const n=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=n?n[1].split("_").slice(0,2).join("."):"-1";return Number(r)}static v(e){const n=e.match(/Android ([\d.]+)/i),r=n?n[1].split(".").slice(0,2).join("."):"-1";return Number(r)}async O(e){return this.db||(P("SimpleDb","Opening database:",this.name),this.db=await new Promise((n,r)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=s=>{const o=s.target.result;n(o)},i.onblocked=()=>{r(new el(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=s=>{const o=s.target.error;o.name==="VersionError"?r(new k(T.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new k(T.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new el(e,o))},i.onupgradeneeded=s=>{P("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',s.oldVersion);const o=s.target.result;this.p.N(o,i.transaction,s.oldVersion,this.version).next(()=>{P("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.B&&(this.db.onversionchange=n=>this.B(n)),this.db}L(e){this.B=e,this.db&&(this.db.onversionchange=n=>e(n))}async runTransaction(e,n,r,i){const s=n==="readonly";let o=0;for(;;){++o;try{this.db=await this.O(e);const a=nf.open(this.db,e,s?"readonly":"readwrite",r),l=i(a).next(u=>(a.g(),u)).catch(u=>(a.abort(u),I.reject(u))).toPromise();return l.catch(()=>{}),await a.m,l}catch(a){const l=a,u=l.name!=="FirebaseError"&&o<3;if(P("SimpleDb","Transaction failed with error:",l.message,"Retrying:",u),this.close(),!u)return Promise.reject(l)}}}close(){this.db&&this.db.close(),this.db=void 0}}class h5{constructor(e){this.k=e,this.q=!1,this.K=null}get isDone(){return this.q}get $(){return this.K}set cursor(e){this.k=e}done(){this.q=!0}U(e){this.K=e}delete(){return Pi(this.k.delete())}}class el extends k{constructor(e,n){super(T.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${n}`),this.name="IndexedDbTransactionError"}}function vi(t){return t.name==="IndexedDbTransactionError"}class f5{constructor(e){this.store=e}put(e,n){let r;return n!==void 0?(P("SimpleDb","PUT",this.store.name,e,n),r=this.store.put(n,e)):(P("SimpleDb","PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),Pi(r)}add(e){return P("SimpleDb","ADD",this.store.name,e,e),Pi(this.store.add(e))}get(e){return Pi(this.store.get(e)).next(n=>(n===void 0&&(n=null),P("SimpleDb","GET",this.store.name,e,n),n))}delete(e){return P("SimpleDb","DELETE",this.store.name,e),Pi(this.store.delete(e))}count(){return P("SimpleDb","COUNT",this.store.name),Pi(this.store.count())}W(e,n){const r=this.options(e,n),i=r.index?this.store.index(r.index):this.store;if(typeof i.getAll=="function"){const s=i.getAll(r.range);return new I((o,a)=>{s.onerror=l=>{a(l.target.error)},s.onsuccess=l=>{o(l.target.result)}})}{const s=this.cursor(r),o=[];return this.G(s,(a,l)=>{o.push(l)}).next(()=>o)}}j(e,n){const r=this.store.getAll(e,n===null?void 0:n);return new I((i,s)=>{r.onerror=o=>{s(o.target.error)},r.onsuccess=o=>{i(o.target.result)}})}H(e,n){P("SimpleDb","DELETE ALL",this.store.name);const r=this.options(e,n);r.J=!1;const i=this.cursor(r);return this.G(i,(s,o,a)=>a.delete())}Y(e,n){let r;n?r=e:(r={},n=e);const i=this.cursor(r);return this.G(i,n)}Z(e){const n=this.cursor({});return new I((r,i)=>{n.onerror=s=>{const o=Ly(s.target.error);i(o)},n.onsuccess=s=>{const o=s.target.result;o?e(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}G(e,n){const r=[];return new I((i,s)=>{e.onerror=o=>{s(o.target.error)},e.onsuccess=o=>{const a=o.target.result;if(!a)return void i();const l=new h5(a),u=n(a.primaryKey,a.value,l);if(u instanceof I){const c=u.catch(d=>(l.done(),I.reject(d)));r.push(c)}l.isDone?i():l.$===null?a.continue():a.continue(l.$)}}).next(()=>I.waitFor(r))}options(e,n){let r;return e!==void 0&&(typeof e=="string"?r=e:n=e),{index:r,range:n}}cursor(e){let n="next";if(e.reverse&&(n="prev"),e.index){const r=this.store.index(e.index);return e.J?r.openKeyCursor(e.range,n):r.openCursor(e.range,n)}return this.store.openCursor(e.range,n)}}function Pi(t){return new I((e,n)=>{t.onsuccess=r=>{const i=r.target.result;e(i)},t.onerror=r=>{const i=Ly(r.target.error);n(i)}})}let _I=!1;function Ly(t){const e=nn.S(Ee());if(e>=12.2&&e<13){const n="An internal error was encountered in the Indexed Database server";if(t.message.indexOf(n)>=0){const r=new k("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${n}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return _I||(_I=!0,setTimeout(()=>{throw r},0)),r}}return t}class p5{constructor(e,n){this.asyncQueue=e,this.X=n,this.task=null}start(){this.ee(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}ee(e){P("IndexBackfiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{P("IndexBackfiller",`Documents written: ${await this.X.te()}`)}catch(n){vi(n)?P("IndexBackfiller","Ignoring IndexedDB error during index backfill: ",n):await gi(n)}await this.ee(6e4)})}}class m5{constructor(e,n){this.localStore=e,this.persistence=n}async te(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",n=>this.ne(n,e))}ne(e,n){const r=new Set;let i=n,s=!0;return I.doWhile(()=>s===!0&&i>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(o=>{if(o!==null&&!r.has(o))return P("IndexBackfiller",`Processing collection: ${o}`),this.re(e,o,i).next(a=>{i-=a,r.add(o)});s=!1})).next(()=>n-i)}re(e,n,r){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,n).next(i=>this.localStore.localDocuments.getNextDocuments(e,n,i,r).next(s=>{const o=s.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next(()=>this.ie(i,s)).next(a=>(P("IndexBackfiller",`Updating offset: ${a}`),this.localStore.indexManager.updateCollectionGroup(e,n,a))).next(()=>o.size)}))}ie(e,n){let r=e;return n.changes.forEach((i,s)=>{const o=nP(s);Vy(o,r)>0&&(r=o)}),new Ht(r.readTime,r.documentKey,Math.max(n.batchId,e.largestBatchId))}}/**
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
 */class Vt{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.se(r),this.oe=r=>n.writeSequenceNumber(r))}se(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.oe&&this.oe(e),e}}Vt._e=-1;function Nu(t){return t==null}function Xl(t){return t===0&&1/t==-1/0}function sP(t){return typeof t=="number"&&Number.isInteger(t)&&!Xl(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function kt(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=wI(e)),e=g5(t.get(n),e);return wI(e)}function g5(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const s=t.charAt(i);switch(s){case"\0":n+="";break;case"":n+="";break;default:n+=s}}return n}function wI(t){return t+""}function Dn(t){const e=t.length;if($(e>=2),e===2)return $(t.charAt(0)===""&&t.charAt(1)===""),ee.emptyPath();const n=e-2,r=[];let i="";for(let s=0;s<e;){const o=t.indexOf("",s);switch((o<0||o>n)&&V(),t.charAt(o+1)){case"":const a=t.substring(s,o);let l;i.length===0?l=a:(i+=a,l=i,i=""),r.push(l);break;case"":i+=t.substring(s,o),i+="\0";break;case"":i+=t.substring(s,o+1);break;default:V()}s=o+2}return new ee(r)}/**
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
 */const II=["userId","batchId"];/**
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
 */function Qc(t,e){return[t,kt(e)]}function oP(t,e,n){return[t,kt(e),n]}const v5={},y5=["prefixPath","collectionGroup","readTime","documentId"],_5=["prefixPath","collectionGroup","documentId"],w5=["collectionGroup","readTime","prefixPath","documentId"],I5=["canonicalId","targetId"],E5=["targetId","path"],T5=["path","targetId"],S5=["collectionId","parent"],A5=["indexId","uid"],k5=["uid","sequenceNumber"],P5=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],R5=["indexId","uid","orderedDocumentKey"],b5=["userId","collectionPath","documentId"],C5=["userId","collectionPath","largestBatchId"],x5=["userId","collectionGroup","largestBatchId"],aP=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],N5=[...aP,"documentOverlays"],lP=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],uP=lP,D5=[...uP,"indexConfiguration","indexState","indexEntries"];/**
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
 */class ag extends iP{constructor(e,n){super(),this.ae=e,this.currentSequenceNumber=n}}function tt(t,e){const n=D(t);return nn.M(n.ae,e)}/**
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
 */function EI(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Is(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function cP(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class de{constructor(e,n){this.comparator=e,this.root=n||it.EMPTY}insert(e,n){return new de(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,it.BLACK,null,null))}remove(e){return new de(this.comparator,this.root.remove(e,this.comparator).copy(null,null,it.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ac(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ac(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ac(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ac(this.root,e,this.comparator,!0)}}class Ac{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class it{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??it.RED,this.left=i??it.EMPTY,this.right=s??it.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new it(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return it.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return it.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,it.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,it.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw V();const e=this.left.check();if(e!==this.right.check())throw V();return e+(this.isRed()?0:1)}}it.EMPTY=null,it.RED=!0,it.BLACK=!1;it.EMPTY=new class{constructor(){this.size=0}get key(){throw V()}get value(){throw V()}get color(){throw V()}get left(){throw V()}get right(){throw V()}copy(e,n,r,i,s){return this}insert(e,n,r){return new it(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class ue{constructor(e){this.comparator=e,this.data=new de(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new TI(this.data.getIterator())}getIteratorFrom(e){return new TI(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof ue)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new ue(this.comparator);return n.data=e,n}}class TI{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function bs(t){return t.hasNext()?t.getNext():void 0}/**
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
 */class Lt{constructor(e){this.fields=e,e.sort(_e.comparator)}static empty(){return new Lt([])}unionWith(e){let n=new ue(_e.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Lt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Ro(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class dP extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */function O5(){return typeof atob<"u"}/**
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
 */class Ge{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new dP("Invalid base64 string: "+s):s}}(e);return new Ge(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new Ge(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return W(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ge.EMPTY_BYTE_STRING=new Ge("");const V5=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ti(t){if($(!!t),typeof t=="string"){let e=0;const n=V5.exec(t);if($(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Re(t.seconds),nanos:Re(t.nanos)}}function Re(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function ni(t){return typeof t=="string"?Ge.fromBase64String(t):Ge.fromUint8Array(t)}/**
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
 */function rf(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function My(t){const e=t.mapValue.fields.__previous_value__;return rf(e)?My(e):e}function Jl(t){const e=ti(t.mapValue.fields.__local_write_time__.timestampValue);return new Ie(e.seconds,e.nanos)}/**
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
 */class L5{constructor(e,n,r,i,s,o,a,l,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=u}}class ri{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new ri("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof ri&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Or={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},Yc={nullValue:"NULL_VALUE"};function ss(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?rf(t)?4:hP(t)?9007199254740991:10:V()}function $n(t,e){if(t===e)return!0;const n=ss(t);if(n!==ss(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Jl(t).isEqual(Jl(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=ti(i.timestampValue),a=ti(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return ni(i.bytesValue).isEqual(ni(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Re(i.geoPointValue.latitude)===Re(s.geoPointValue.latitude)&&Re(i.geoPointValue.longitude)===Re(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Re(i.integerValue)===Re(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Re(i.doubleValue),a=Re(s.doubleValue);return o===a?Xl(o)===Xl(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return Ro(t.arrayValue.values||[],e.arrayValue.values||[],$n);case 10:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(EI(o)!==EI(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!$n(o[l],a[l])))return!1;return!0}(t,e);default:return V()}}function Zl(t,e){return(t.values||[]).find(n=>$n(n,e))!==void 0}function ii(t,e){if(t===e)return 0;const n=ss(t),r=ss(e);if(n!==r)return W(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return W(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=Re(s.integerValue||s.doubleValue),l=Re(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return SI(t.timestampValue,e.timestampValue);case 4:return SI(Jl(t),Jl(e));case 5:return W(t.stringValue,e.stringValue);case 6:return function(s,o){const a=ni(s),l=ni(o);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),l=o.split("/");for(let u=0;u<a.length&&u<l.length;u++){const c=W(a[u],l[u]);if(c!==0)return c}return W(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=W(Re(s.latitude),Re(o.latitude));return a!==0?a:W(Re(s.longitude),Re(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,o){const a=s.values||[],l=o.values||[];for(let u=0;u<a.length&&u<l.length;++u){const c=ii(a[u],l[u]);if(c)return c}return W(a.length,l.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,o){if(s===Or.mapValue&&o===Or.mapValue)return 0;if(s===Or.mapValue)return 1;if(o===Or.mapValue)return-1;const a=s.fields||{},l=Object.keys(a),u=o.fields||{},c=Object.keys(u);l.sort(),c.sort();for(let d=0;d<l.length&&d<c.length;++d){const h=W(l[d],c[d]);if(h!==0)return h;const f=ii(a[l[d]],u[c[d]]);if(f!==0)return f}return W(l.length,c.length)}(t.mapValue,e.mapValue);default:throw V()}}function SI(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return W(t,e);const n=ti(t),r=ti(e),i=W(n.seconds,r.seconds);return i!==0?i:W(n.nanos,r.nanos)}function bo(t){return lg(t)}function lg(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=ti(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return ni(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return N.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=lg(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${lg(n.fields[o])}`;return i+"}"}(t.mapValue):V()}function os(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function ug(t){return!!t&&"integerValue"in t}function eu(t){return!!t&&"arrayValue"in t}function AI(t){return!!t&&"nullValue"in t}function kI(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Xc(t){return!!t&&"mapValue"in t}function tl(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Is(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=tl(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=tl(t.arrayValue.values[n]);return e}return Object.assign({},t)}function hP(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}function M5(t){return"nullValue"in t?Yc:"booleanValue"in t?{booleanValue:!1}:"integerValue"in t||"doubleValue"in t?{doubleValue:NaN}:"timestampValue"in t?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in t?{stringValue:""}:"bytesValue"in t?{bytesValue:""}:"referenceValue"in t?os(ri.empty(),N.empty()):"geoPointValue"in t?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in t?{arrayValue:{}}:"mapValue"in t?{mapValue:{}}:V()}function F5(t){return"nullValue"in t?{booleanValue:!1}:"booleanValue"in t?{doubleValue:NaN}:"integerValue"in t||"doubleValue"in t?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in t?{stringValue:""}:"stringValue"in t?{bytesValue:""}:"bytesValue"in t?os(ri.empty(),N.empty()):"referenceValue"in t?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in t?{arrayValue:{}}:"arrayValue"in t?{mapValue:{}}:"mapValue"in t?Or:V()}function PI(t,e){const n=ii(t.value,e.value);return n!==0?n:t.inclusive&&!e.inclusive?-1:!t.inclusive&&e.inclusive?1:0}function RI(t,e){const n=ii(t.value,e.value);return n!==0?n:t.inclusive&&!e.inclusive?1:!t.inclusive&&e.inclusive?-1:0}/**
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
 */class ot{constructor(e){this.value=e}static empty(){return new ot({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Xc(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=tl(n)}setAll(e){let n=_e.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=tl(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Xc(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return $n(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Xc(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Is(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new ot(tl(this.value))}}function fP(t){const e=[];return Is(t.fields,(n,r)=>{const i=new _e([n]);if(Xc(r)){const s=fP(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Lt(e)}/**
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
 */class me{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new me(e,0,z.min(),z.min(),z.min(),ot.empty(),0)}static newFoundDocument(e,n,r,i){return new me(e,1,n,z.min(),r,i,0)}static newNoDocument(e,n){return new me(e,2,n,z.min(),z.min(),ot.empty(),0)}static newUnknownDocument(e,n){return new me(e,3,n,z.min(),z.min(),ot.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(z.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ot.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ot.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=z.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof me&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new me(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class si{constructor(e,n){this.position=e,this.inclusive=n}}function bI(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=N.comparator(N.fromName(o.referenceValue),n.key):r=ii(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function CI(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!$n(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class tu{constructor(e,n="asc"){this.field=e,this.dir=n}}function j5(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class pP{}class te extends pP{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new U5(e,n,r):n==="array-contains"?new B5(e,r):n==="in"?new wP(e,r):n==="not-in"?new q5(e,r):n==="array-contains-any"?new W5(e,r):new te(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new $5(e,r):new z5(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(ii(n,this.value)):n!==null&&ss(this.value)===ss(n)&&this.matchesComparison(ii(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return V()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class oe extends pP{constructor(e,n){super(),this.filters=e,this.op=n,this.ue=null}static create(e,n){return new oe(e,n)}matches(e){return Co(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ue!==null||(this.ue=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ue}getFilters(){return Object.assign([],this.filters)}}function Co(t){return t.op==="and"}function cg(t){return t.op==="or"}function Fy(t){return mP(t)&&Co(t)}function mP(t){for(const e of t.filters)if(e instanceof oe)return!1;return!0}function dg(t){if(t instanceof te)return t.field.canonicalString()+t.op.toString()+bo(t.value);if(Fy(t))return t.filters.map(e=>dg(e)).join(",");{const e=t.filters.map(n=>dg(n)).join(",");return`${t.op}(${e})`}}function gP(t,e){return t instanceof te?function(r,i){return i instanceof te&&r.op===i.op&&r.field.isEqual(i.field)&&$n(r.value,i.value)}(t,e):t instanceof oe?function(r,i){return i instanceof oe&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&gP(o,i.filters[a]),!0):!1}(t,e):void V()}function vP(t,e){const n=t.filters.concat(e);return oe.create(n,t.op)}function yP(t){return t instanceof te?function(n){return`${n.field.canonicalString()} ${n.op} ${bo(n.value)}`}(t):t instanceof oe?function(n){return n.op.toString()+" {"+n.getFilters().map(yP).join(" ,")+"}"}(t):"Filter"}class U5 extends te{constructor(e,n,r){super(e,n,r),this.key=N.fromName(r.referenceValue)}matches(e){const n=N.comparator(e.key,this.key);return this.matchesComparison(n)}}class $5 extends te{constructor(e,n){super(e,"in",n),this.keys=_P("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class z5 extends te{constructor(e,n){super(e,"not-in",n),this.keys=_P("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function _P(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>N.fromName(r.referenceValue))}class B5 extends te{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return eu(n)&&Zl(n.arrayValue,this.value)}}class wP extends te{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Zl(this.value.arrayValue,n)}}class q5 extends te{constructor(e,n){super(e,"not-in",n)}matches(e){if(Zl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Zl(this.value.arrayValue,n)}}class W5 extends te{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!eu(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Zl(this.value.arrayValue,r))}}/**
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
 */class G5{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ce=null}}function hg(t,e=null,n=[],r=[],i=null,s=null,o=null){return new G5(t,e,n,r,i,s,o)}function as(t){const e=D(t);if(e.ce===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>dg(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Nu(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>bo(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>bo(r)).join(",")),e.ce=n}return e.ce}function Du(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!j5(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!gP(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!CI(t.startAt,e.startAt)&&CI(t.endAt,e.endAt)}function Kd(t){return N.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}function Hd(t,e){return t.filters.filter(n=>n instanceof te&&n.field.isEqual(e))}function xI(t,e,n){let r=Yc,i=!0;for(const s of Hd(t,e)){let o=Yc,a=!0;switch(s.op){case"<":case"<=":o=M5(s.value);break;case"==":case"in":case">=":o=s.value;break;case">":o=s.value,a=!1;break;case"!=":case"not-in":o=Yc}PI({value:r,inclusive:i},{value:o,inclusive:a})<0&&(r=o,i=a)}if(n!==null){for(let s=0;s<t.orderBy.length;++s)if(t.orderBy[s].field.isEqual(e)){const o=n.position[s];PI({value:r,inclusive:i},{value:o,inclusive:n.inclusive})<0&&(r=o,i=n.inclusive);break}}return{value:r,inclusive:i}}function NI(t,e,n){let r=Or,i=!0;for(const s of Hd(t,e)){let o=Or,a=!0;switch(s.op){case">=":case">":o=F5(s.value),a=!1;break;case"==":case"in":case"<=":o=s.value;break;case"<":o=s.value,a=!1;break;case"!=":case"not-in":o=Or}RI({value:r,inclusive:i},{value:o,inclusive:a})>0&&(r=o,i=a)}if(n!==null){for(let s=0;s<t.orderBy.length;++s)if(t.orderBy[s].field.isEqual(e)){const o=n.position[s];RI({value:r,inclusive:i},{value:o,inclusive:n.inclusive})>0&&(r=o,i=n.inclusive);break}}return{value:r,inclusive:i}}/**
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
 */class pr{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.le=null,this.he=null,this.Pe=null,this.startAt,this.endAt}}function IP(t,e,n,r,i,s,o,a){return new pr(t,e,n,r,i,s,o,a)}function Zo(t){return new pr(t)}function DI(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function jy(t){return t.collectionGroup!==null}function mo(t){const e=D(t);if(e.le===null){e.le=[];const n=new Set;for(const s of e.explicitOrderBy)e.le.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new ue(_e.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(u=>{u.isInequality()&&(a=a.add(u.field))})}),a})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.le.push(new tu(s,r))}),n.has(_e.keyField().canonicalString())||e.le.push(new tu(_e.keyField(),r))}return e.le}function Pt(t){const e=D(t);return e.he||(e.he=K5(e,mo(t))),e.he}function K5(t,e){if(t.limitType==="F")return hg(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new tu(i.field,s)});const n=t.endAt?new si(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new si(t.startAt.position,t.startAt.inclusive):null;return hg(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function fg(t,e){const n=t.filters.concat([e]);return new pr(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Qd(t,e,n){return new pr(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Ou(t,e){return Du(Pt(t),Pt(e))&&t.limitType===e.limitType}function EP(t){return`${as(Pt(t))}|lt:${t.limitType}`}function Vs(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>yP(i)).join(", ")}]`),Nu(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>bo(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>bo(i)).join(",")),`Target(${r})`}(Pt(t))}; limitType=${t.limitType})`}function Vu(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):N.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of mo(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,a,l){const u=bI(o,a,l);return o.inclusive?u<=0:u<0}(r.startAt,mo(r),i)||r.endAt&&!function(o,a,l){const u=bI(o,a,l);return o.inclusive?u>=0:u>0}(r.endAt,mo(r),i))}(t,e)}function TP(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function SP(t){return(e,n)=>{let r=!1;for(const i of mo(t)){const s=H5(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function H5(t,e,n){const r=t.field.isKeyField()?N.comparator(e.key,n.key):function(s,o,a){const l=o.data.field(s),u=a.data.field(s);return l!==null&&u!==null?ii(l,u):V()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return V()}}/**
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
 */class yi{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Is(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return cP(this.inner)}size(){return this.innerSize}}/**
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
 */const Q5=new de(N.comparator);function Mt(){return Q5}const AP=new de(N.comparator);function La(...t){let e=AP;for(const n of t)e=e.insert(n.key,n);return e}function kP(t){let e=AP;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function On(){return nl()}function PP(){return nl()}function nl(){return new yi(t=>t.toString(),(t,e)=>t.isEqual(e))}const Y5=new de(N.comparator),X5=new ue(N.comparator);function K(...t){let e=X5;for(const n of t)e=e.add(n);return e}const J5=new ue(W);function Uy(){return J5}/**
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
 */function RP(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Xl(e)?"-0":e}}function bP(t){return{integerValue:""+t}}function CP(t,e){return sP(e)?bP(e):RP(t,e)}/**
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
 */class sf{constructor(){this._=void 0}}function Z5(t,e,n){return t instanceof xo?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&rf(s)&&(s=My(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof ls?NP(t,e):t instanceof us?DP(t,e):function(i,s){const o=xP(i,s),a=OI(o)+OI(i.Ie);return ug(o)&&ug(i.Ie)?bP(a):RP(i.serializer,a)}(t,e)}function ej(t,e,n){return t instanceof ls?NP(t,e):t instanceof us?DP(t,e):n}function xP(t,e){return t instanceof No?function(r){return ug(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class xo extends sf{}class ls extends sf{constructor(e){super(),this.elements=e}}function NP(t,e){const n=OP(e);for(const r of t.elements)n.some(i=>$n(i,r))||n.push(r);return{arrayValue:{values:n}}}class us extends sf{constructor(e){super(),this.elements=e}}function DP(t,e){let n=OP(e);for(const r of t.elements)n=n.filter(i=>!$n(i,r));return{arrayValue:{values:n}}}class No extends sf{constructor(e,n){super(),this.serializer=e,this.Ie=n}}function OI(t){return Re(t.integerValue||t.doubleValue)}function OP(t){return eu(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class Lu{constructor(e,n){this.field=e,this.transform=n}}function tj(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof ls&&i instanceof ls||r instanceof us&&i instanceof us?Ro(r.elements,i.elements,$n):r instanceof No&&i instanceof No?$n(r.Ie,i.Ie):r instanceof xo&&i instanceof xo}(t.transform,e.transform)}class nj{constructor(e,n){this.version=e,this.transformResults=n}}class we{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new we}static exists(e){return new we(void 0,e)}static updateTime(e){return new we(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Jc(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class of{}function VP(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new ta(t.key,we.none()):new ea(t.key,t.data,we.none());{const n=t.data,r=ot.empty();let i=new ue(_e.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new mr(t.key,r,new Lt(i.toArray()),we.none())}}function rj(t,e,n){t instanceof ea?function(i,s,o){const a=i.value.clone(),l=LI(i.fieldTransforms,s,o.transformResults);a.setAll(l),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof mr?function(i,s,o){if(!Jc(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=LI(i.fieldTransforms,s,o.transformResults),l=s.data;l.setAll(LP(i)),l.setAll(a),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function rl(t,e,n,r){return t instanceof ea?function(s,o,a,l){if(!Jc(s.precondition,o))return a;const u=s.value.clone(),c=MI(s.fieldTransforms,l,o);return u.setAll(c),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof mr?function(s,o,a,l){if(!Jc(s.precondition,o))return a;const u=MI(s.fieldTransforms,l,o),c=o.data;return c.setAll(LP(s)),c.setAll(u),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(d=>d.field))}(t,e,n,r):function(s,o,a){return Jc(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function ij(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=xP(r.transform,i||null);s!=null&&(n===null&&(n=ot.empty()),n.set(r.field,s))}return n||null}function VI(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Ro(r,i,(s,o)=>tj(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class ea extends of{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class mr extends of{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function LP(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function LI(t,e,n){const r=new Map;$(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,ej(o,a,n[i]))}return r}function MI(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,Z5(s,o,e))}return r}class ta extends of{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class $y extends of{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class zy{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&rj(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=rl(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=rl(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=PP();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=VP(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(z.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),K())}isEqual(e){return this.batchId===e.batchId&&Ro(this.mutations,e.mutations,(n,r)=>VI(n,r))&&Ro(this.baseMutations,e.baseMutations,(n,r)=>VI(n,r))}}class By{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){$(e.mutations.length===r.length);let i=function(){return Y5}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new By(e,n,r,i)}}/**
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
 */class qy{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class sj{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var je,re;function MP(t){switch(t){default:return V();case T.CANCELLED:case T.UNKNOWN:case T.DEADLINE_EXCEEDED:case T.RESOURCE_EXHAUSTED:case T.INTERNAL:case T.UNAVAILABLE:case T.UNAUTHENTICATED:return!1;case T.INVALID_ARGUMENT:case T.NOT_FOUND:case T.ALREADY_EXISTS:case T.PERMISSION_DENIED:case T.FAILED_PRECONDITION:case T.ABORTED:case T.OUT_OF_RANGE:case T.UNIMPLEMENTED:case T.DATA_LOSS:return!0}}function FP(t){if(t===void 0)return Me("GRPC error has no .code"),T.UNKNOWN;switch(t){case je.OK:return T.OK;case je.CANCELLED:return T.CANCELLED;case je.UNKNOWN:return T.UNKNOWN;case je.DEADLINE_EXCEEDED:return T.DEADLINE_EXCEEDED;case je.RESOURCE_EXHAUSTED:return T.RESOURCE_EXHAUSTED;case je.INTERNAL:return T.INTERNAL;case je.UNAVAILABLE:return T.UNAVAILABLE;case je.UNAUTHENTICATED:return T.UNAUTHENTICATED;case je.INVALID_ARGUMENT:return T.INVALID_ARGUMENT;case je.NOT_FOUND:return T.NOT_FOUND;case je.ALREADY_EXISTS:return T.ALREADY_EXISTS;case je.PERMISSION_DENIED:return T.PERMISSION_DENIED;case je.FAILED_PRECONDITION:return T.FAILED_PRECONDITION;case je.ABORTED:return T.ABORTED;case je.OUT_OF_RANGE:return T.OUT_OF_RANGE;case je.UNIMPLEMENTED:return T.UNIMPLEMENTED;case je.DATA_LOSS:return T.DATA_LOSS;default:return V()}}(re=je||(je={}))[re.OK=0]="OK",re[re.CANCELLED=1]="CANCELLED",re[re.UNKNOWN=2]="UNKNOWN",re[re.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",re[re.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",re[re.NOT_FOUND=5]="NOT_FOUND",re[re.ALREADY_EXISTS=6]="ALREADY_EXISTS",re[re.PERMISSION_DENIED=7]="PERMISSION_DENIED",re[re.UNAUTHENTICATED=16]="UNAUTHENTICATED",re[re.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",re[re.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",re[re.ABORTED=10]="ABORTED",re[re.OUT_OF_RANGE=11]="OUT_OF_RANGE",re[re.UNIMPLEMENTED=12]="UNIMPLEMENTED",re[re.INTERNAL=13]="INTERNAL",re[re.UNAVAILABLE=14]="UNAVAILABLE",re[re.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function jP(){return new TextEncoder}/**
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
 */const oj=new po([4294967295,4294967295],0);function FI(t){const e=jP().encode(t),n=new e5;return n.update(e),new Uint8Array(n.digest())}function jI(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new po([n,r],0),new po([i,s],0)]}class Wy{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Ma(`Invalid padding: ${n}`);if(r<0)throw new Ma(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Ma(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Ma(`Invalid padding when bitmap length is 0: ${n}`);this.Te=8*e.length-n,this.Ee=po.fromNumber(this.Te)}de(e,n,r){let i=e.add(n.multiply(po.fromNumber(r)));return i.compare(oj)===1&&(i=new po([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Ee).toNumber()}Ae(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const n=FI(e),[r,i]=jI(n);for(let s=0;s<this.hashCount;s++){const o=this.de(r,i,s);if(!this.Ae(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Wy(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Te===0)return;const n=FI(e),[r,i]=jI(n);for(let s=0;s<this.hashCount;s++){const o=this.de(r,i,s);this.Re(o)}}Re(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Ma extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Mu{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Fu.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Mu(z.min(),i,new de(W),Mt(),K())}}class Fu{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Fu(r,n,K(),K(),K())}}/**
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
 */class Zc{constructor(e,n,r,i){this.Ve=e,this.removedTargetIds=n,this.key=r,this.me=i}}class UP{constructor(e,n){this.targetId=e,this.fe=n}}class $P{constructor(e,n,r=Ge.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class UI{constructor(){this.ge=0,this.pe=zI(),this.ye=Ge.EMPTY_BYTE_STRING,this.we=!1,this.Se=!0}get current(){return this.we}get resumeToken(){return this.ye}get be(){return this.ge!==0}get De(){return this.Se}Ce(e){e.approximateByteSize()>0&&(this.Se=!0,this.ye=e)}ve(){let e=K(),n=K(),r=K();return this.pe.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:V()}}),new Fu(this.ye,this.we,e,n,r)}Fe(){this.Se=!1,this.pe=zI()}Me(e,n){this.Se=!0,this.pe=this.pe.insert(e,n)}xe(e){this.Se=!0,this.pe=this.pe.remove(e)}Oe(){this.ge+=1}Ne(){this.ge-=1,$(this.ge>=0)}Be(){this.Se=!0,this.we=!0}}class aj{constructor(e){this.Le=e,this.ke=new Map,this.qe=Mt(),this.Qe=$I(),this.Ke=new de(W)}$e(e){for(const n of e.Ve)e.me&&e.me.isFoundDocument()?this.Ue(n,e.me):this.We(n,e.key,e.me);for(const n of e.removedTargetIds)this.We(n,e.key,e.me)}Ge(e){this.forEachTarget(e,n=>{const r=this.ze(n);switch(e.state){case 0:this.je(n)&&r.Ce(e.resumeToken);break;case 1:r.Ne(),r.be||r.Fe(),r.Ce(e.resumeToken);break;case 2:r.Ne(),r.be||this.removeTarget(n);break;case 3:this.je(n)&&(r.Be(),r.Ce(e.resumeToken));break;case 4:this.je(n)&&(this.He(n),r.Ce(e.resumeToken));break;default:V()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ke.forEach((r,i)=>{this.je(i)&&n(i)})}Je(e){const n=e.targetId,r=e.fe.count,i=this.Ye(n);if(i){const s=i.target;if(Kd(s))if(r===0){const o=new N(s.path);this.We(n,o,me.newNoDocument(o,z.min()))}else $(r===1);else{const o=this.Ze(n);if(o!==r){const a=this.Xe(e),l=a?this.et(a,e,o):1;if(l!==0){this.He(n);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,u)}}}}}Xe(e){const n=e.fe.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,a;try{o=ni(r).toUint8Array()}catch(l){if(l instanceof dP)return wn("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new Wy(o,i,s)}catch(l){return wn(l instanceof Ma?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.Te===0?null:a}et(e,n,r){return n.fe.count===r-this.rt(e,n.targetId)?0:2}rt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.nt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(a)||(this.We(n,s,null),i++)}),i}it(e){const n=new Map;this.ke.forEach((s,o)=>{const a=this.Ye(o);if(a){if(s.current&&Kd(a.target)){const l=new N(a.target.path);this.qe.get(l)!==null||this.st(o,l)||this.We(o,l,me.newNoDocument(l,e))}s.De&&(n.set(o,s.ve()),s.Fe())}});let r=K();this.Qe.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.Ye(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.qe.forEach((s,o)=>o.setReadTime(e));const i=new Mu(e,n,this.Ke,this.qe,r);return this.qe=Mt(),this.Qe=$I(),this.Ke=new de(W),i}Ue(e,n){if(!this.je(e))return;const r=this.st(e,n.key)?2:0;this.ze(e).Me(n.key,r),this.qe=this.qe.insert(n.key,n),this.Qe=this.Qe.insert(n.key,this.ot(n.key).add(e))}We(e,n,r){if(!this.je(e))return;const i=this.ze(e);this.st(e,n)?i.Me(n,1):i.xe(n),this.Qe=this.Qe.insert(n,this.ot(n).delete(e)),r&&(this.qe=this.qe.insert(n,r))}removeTarget(e){this.ke.delete(e)}Ze(e){const n=this.ze(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Oe(e){this.ze(e).Oe()}ze(e){let n=this.ke.get(e);return n||(n=new UI,this.ke.set(e,n)),n}ot(e){let n=this.Qe.get(e);return n||(n=new ue(W),this.Qe=this.Qe.insert(e,n)),n}je(e){const n=this.Ye(e)!==null;return n||P("WatchChangeAggregator","Detected inactive target",e),n}Ye(e){const n=this.ke.get(e);return n&&n.be?null:this.Le._t(e)}He(e){this.ke.set(e,new UI),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.We(e,n,null)})}st(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function $I(){return new de(N.comparator)}function zI(){return new de(N.comparator)}const lj={asc:"ASCENDING",desc:"DESCENDING"},uj={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},cj={and:"AND",or:"OR"};class dj{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function pg(t,e){return t.useProto3Json||Nu(e)?e:{value:e}}function Do(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function zP(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function hj(t,e){return Do(t,e.toTimestamp())}function Fe(t){return $(!!t),z.fromTimestamp(function(n){const r=ti(n);return new Ie(r.seconds,r.nanos)}(t))}function Gy(t,e){return mg(t,e).canonicalString()}function mg(t,e){const n=function(i){return new ee(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function BP(t){const e=ee.fromString(t);return $(ZP(e)),e}function nu(t,e){return Gy(t.databaseId,e.path)}function Fn(t,e){const n=BP(e);if(n.get(1)!==t.databaseId.projectId)throw new k(T.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new k(T.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new N(GP(n))}function qP(t,e){return Gy(t.databaseId,e)}function WP(t){const e=BP(t);return e.length===4?ee.emptyPath():GP(e)}function gg(t){return new ee(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function GP(t){return $(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function BI(t,e,n){return{name:nu(t,e),fields:n.value.mapValue.fields}}function KP(t,e,n){const r=Fn(t,e.name),i=Fe(e.updateTime),s=e.createTime?Fe(e.createTime):z.min(),o=new ot({mapValue:{fields:e.fields}}),a=me.newFoundDocument(r,i,s,o);return n&&a.setHasCommittedMutations(),n?a.setHasCommittedMutations():a}function fj(t,e){return"found"in e?function(r,i){$(!!i.found),i.found.name,i.found.updateTime;const s=Fn(r,i.found.name),o=Fe(i.found.updateTime),a=i.found.createTime?Fe(i.found.createTime):z.min(),l=new ot({mapValue:{fields:i.found.fields}});return me.newFoundDocument(s,o,a,l)}(t,e):"missing"in e?function(r,i){$(!!i.missing),$(!!i.readTime);const s=Fn(r,i.missing),o=Fe(i.readTime);return me.newNoDocument(s,o)}(t,e):V()}function pj(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:V()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(u,c){return u.useProto3Json?($(c===void 0||typeof c=="string"),Ge.fromBase64String(c||"")):($(c===void 0||c instanceof Uint8Array),Ge.fromUint8Array(c||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(u){const c=u.code===void 0?T.UNKNOWN:FP(u.code);return new k(c,u.message||"")}(o);n=new $P(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Fn(t,r.document.name),s=Fe(r.document.updateTime),o=r.document.createTime?Fe(r.document.createTime):z.min(),a=new ot({mapValue:{fields:r.document.fields}}),l=me.newFoundDocument(i,s,o,a),u=r.targetIds||[],c=r.removedTargetIds||[];n=new Zc(u,c,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Fn(t,r.document),s=r.readTime?Fe(r.readTime):z.min(),o=me.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Zc([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Fn(t,r.document),s=r.removedTargetIds||[];n=new Zc([],s,i,null)}else{if(!("filter"in e))return V();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new sj(i,s),a=r.targetId;n=new UP(a,o)}}return n}function ru(t,e){let n;if(e instanceof ea)n={update:BI(t,e.key,e.value)};else if(e instanceof ta)n={delete:nu(t,e.key)};else if(e instanceof mr)n={update:BI(t,e.key,e.data),updateMask:wj(e.fieldMask)};else{if(!(e instanceof $y))return V();n={verify:nu(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof xo)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof ls)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof us)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof No)return{fieldPath:o.field.canonicalString(),increment:a.Ie};throw V()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:hj(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:V()}(t,e.precondition)),n}function vg(t,e){const n=e.currentDocument?function(s){return s.updateTime!==void 0?we.updateTime(Fe(s.updateTime)):s.exists!==void 0?we.exists(s.exists):we.none()}(e.currentDocument):we.none(),r=e.updateTransforms?e.updateTransforms.map(i=>function(o,a){let l=null;if("setToServerValue"in a)$(a.setToServerValue==="REQUEST_TIME"),l=new xo;else if("appendMissingElements"in a){const c=a.appendMissingElements.values||[];l=new ls(c)}else if("removeAllFromArray"in a){const c=a.removeAllFromArray.values||[];l=new us(c)}else"increment"in a?l=new No(o,a.increment):V();const u=_e.fromServerFormat(a.fieldPath);return new Lu(u,l)}(t,i)):[];if(e.update){e.update.name;const i=Fn(t,e.update.name),s=new ot({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=function(l){const u=l.fieldPaths||[];return new Lt(u.map(c=>_e.fromServerFormat(c)))}(e.updateMask);return new mr(i,s,o,n,r)}return new ea(i,s,n,r)}if(e.delete){const i=Fn(t,e.delete);return new ta(i,n)}if(e.verify){const i=Fn(t,e.verify);return new $y(i,n)}return V()}function mj(t,e){return t&&t.length>0?($(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?Fe(i.updateTime):Fe(s);return o.isEqual(z.min())&&(o=Fe(s)),new nj(o,i.transformResults||[])}(n,e))):[]}function HP(t,e){return{documents:[qP(t,e.path)]}}function QP(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=qP(t,i);const s=function(u){if(u.length!==0)return JP(oe.create(u,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(u){if(u.length!==0)return u.map(c=>function(h){return{field:Ls(h.field),direction:vj(h.dir)}}(c))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=pg(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{ut:n,parent:i}}function YP(t){let e=WP(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){$(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:e=e.child(c.collectionId)}let s=[];n.where&&(s=function(d){const h=XP(d);return h instanceof oe&&Fy(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=function(d){return d.map(h=>function(v){return new tu(Ms(v.field),function(w){switch(w){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(v.direction))}(h))}(n.orderBy));let a=null;n.limit&&(a=function(d){let h;return h=typeof d=="object"?d.value:d,Nu(h)?null:h}(n.limit));let l=null;n.startAt&&(l=function(d){const h=!!d.before,f=d.values||[];return new si(f,h)}(n.startAt));let u=null;return n.endAt&&(u=function(d){const h=!d.before,f=d.values||[];return new si(f,h)}(n.endAt)),IP(e,i,o,s,a,"F",l,u)}function gj(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return V()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function XP(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Ms(n.unaryFilter.field);return te.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Ms(n.unaryFilter.field);return te.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Ms(n.unaryFilter.field);return te.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Ms(n.unaryFilter.field);return te.create(o,"!=",{nullValue:"NULL_VALUE"});default:return V()}}(t):t.fieldFilter!==void 0?function(n){return te.create(Ms(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return V()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return oe.create(n.compositeFilter.filters.map(r=>XP(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return V()}}(n.compositeFilter.op))}(t):V()}function vj(t){return lj[t]}function yj(t){return uj[t]}function _j(t){return cj[t]}function Ls(t){return{fieldPath:t.canonicalString()}}function Ms(t){return _e.fromServerFormat(t.fieldPath)}function JP(t){return t instanceof te?function(n){if(n.op==="=="){if(kI(n.value))return{unaryFilter:{field:Ls(n.field),op:"IS_NAN"}};if(AI(n.value))return{unaryFilter:{field:Ls(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(kI(n.value))return{unaryFilter:{field:Ls(n.field),op:"IS_NOT_NAN"}};if(AI(n.value))return{unaryFilter:{field:Ls(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ls(n.field),op:yj(n.op),value:n.value}}}(t):t instanceof oe?function(n){const r=n.getFilters().map(i=>JP(i));return r.length===1?r[0]:{compositeFilter:{op:_j(n.op),filters:r}}}(t):V()}function wj(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function ZP(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class Yn{constructor(e,n,r,i,s=z.min(),o=z.min(),a=Ge.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new Yn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Yn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Yn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Yn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class eR{constructor(e){this.ct=e}}function Ij(t,e){let n;if(e.document)n=KP(t.ct,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const r=N.fromSegments(e.noDocument.path),i=ds(e.noDocument.readTime);n=me.newNoDocument(r,i),e.hasCommittedMutations&&n.setHasCommittedMutations()}else{if(!e.unknownDocument)return V();{const r=N.fromSegments(e.unknownDocument.path),i=ds(e.unknownDocument.version);n=me.newUnknownDocument(r,i)}}return e.readTime&&n.setReadTime(function(i){const s=new Ie(i[0],i[1]);return z.fromTimestamp(s)}(e.readTime)),n}function qI(t,e){const n=e.key,r={prefixPath:n.getCollectionPath().popLast().toArray(),collectionGroup:n.collectionGroup,documentId:n.path.lastSegment(),readTime:Yd(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())r.document=function(s,o){return{name:nu(s,o.key),fields:o.data.value.mapValue.fields,updateTime:Do(s,o.version.toTimestamp()),createTime:Do(s,o.createTime.toTimestamp())}}(t.ct,e);else if(e.isNoDocument())r.noDocument={path:n.path.toArray(),readTime:cs(e.version)};else{if(!e.isUnknownDocument())return V();r.unknownDocument={path:n.path.toArray(),version:cs(e.version)}}return r}function Yd(t){const e=t.toTimestamp();return[e.seconds,e.nanoseconds]}function cs(t){const e=t.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function ds(t){const e=new Ie(t.seconds,t.nanoseconds);return z.fromTimestamp(e)}function Ri(t,e){const n=(e.baseMutations||[]).map(s=>vg(t.ct,s));for(let s=0;s<e.mutations.length-1;++s){const o=e.mutations[s];if(s+1<e.mutations.length&&e.mutations[s+1].transform!==void 0){const a=e.mutations[s+1];o.updateTransforms=a.transform.fieldTransforms,e.mutations.splice(s+1,1),++s}}const r=e.mutations.map(s=>vg(t.ct,s)),i=Ie.fromMillis(e.localWriteTimeMs);return new zy(e.batchId,i,n,r)}function Fa(t){const e=ds(t.readTime),n=t.lastLimboFreeSnapshotVersion!==void 0?ds(t.lastLimboFreeSnapshotVersion):z.min();let r;return r=function(s){return s.documents!==void 0}(t.query)?function(s){return $(s.documents.length===1),Pt(Zo(WP(s.documents[0])))}(t.query):function(s){return Pt(YP(s))}(t.query),new Yn(r,t.targetId,"TargetPurposeListen",t.lastListenSequenceNumber,e,n,Ge.fromBase64String(t.resumeToken))}function tR(t,e){const n=cs(e.snapshotVersion),r=cs(e.lastLimboFreeSnapshotVersion);let i;i=Kd(e.target)?HP(t.ct,e.target):QP(t.ct,e.target).ut;const s=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:as(e.target),readTime:n,resumeToken:s,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:i}}function Ky(t){const e=YP({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Qd(e,e.limit,"L"):e}function Tp(t,e){return new qy(e.largestBatchId,vg(t.ct,e.overlayMutation))}function WI(t,e){const n=e.path.lastSegment();return[t,kt(e.path.popLast()),n]}function GI(t,e,n,r){return{indexId:t,uid:e,sequenceNumber:n,readTime:cs(r.readTime),documentKey:kt(r.documentKey.path),largestBatchId:r.largestBatchId}}/**
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
 */class Ej{getBundleMetadata(e,n){return KI(e).get(n).next(r=>{if(r)return function(s){return{id:s.bundleId,createTime:ds(s.createTime),version:s.version}}(r)})}saveBundleMetadata(e,n){return KI(e).put(function(i){return{bundleId:i.id,createTime:cs(Fe(i.createTime)),version:i.version}}(n))}getNamedQuery(e,n){return HI(e).get(n).next(r=>{if(r)return function(s){return{name:s.name,query:Ky(s.bundledQuery),readTime:ds(s.readTime)}}(r)})}saveNamedQuery(e,n){return HI(e).put(function(i){return{name:i.name,readTime:cs(Fe(i.readTime)),bundledQuery:i.bundledQuery}}(n))}}function KI(t){return tt(t,"bundles")}function HI(t){return tt(t,"namedQueries")}/**
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
 */class af{constructor(e,n){this.serializer=e,this.userId=n}static lt(e,n){const r=n.uid||"";return new af(e,r)}getOverlay(e,n){return Ia(e).get(WI(this.userId,n)).next(r=>r?Tp(this.serializer,r):null)}getOverlays(e,n){const r=On();return I.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){const i=[];return r.forEach((s,o)=>{const a=new qy(n,o);i.push(this.ht(e,a))}),I.waitFor(i)}removeOverlaysForBatchId(e,n,r){const i=new Set;n.forEach(o=>i.add(kt(o.getCollectionPath())));const s=[];return i.forEach(o=>{const a=IDBKeyRange.bound([this.userId,o,r],[this.userId,o,r+1],!1,!0);s.push(Ia(e).H("collectionPathOverlayIndex",a))}),I.waitFor(s)}getOverlaysForCollection(e,n,r){const i=On(),s=kt(n),o=IDBKeyRange.bound([this.userId,s,r],[this.userId,s,Number.POSITIVE_INFINITY],!0);return Ia(e).W("collectionPathOverlayIndex",o).next(a=>{for(const l of a){const u=Tp(this.serializer,l);i.set(u.getKey(),u)}return i})}getOverlaysForCollectionGroup(e,n,r,i){const s=On();let o;const a=IDBKeyRange.bound([this.userId,n,r],[this.userId,n,Number.POSITIVE_INFINITY],!0);return Ia(e).Y({index:"collectionGroupOverlayIndex",range:a},(l,u,c)=>{const d=Tp(this.serializer,u);s.size()<i||d.largestBatchId===o?(s.set(d.getKey(),d),o=d.largestBatchId):c.done()}).next(()=>s)}ht(e,n){return Ia(e).put(function(i,s,o){const[a,l,u]=WI(s,o.mutation.key);return{userId:s,collectionPath:l,documentId:u,collectionGroup:o.mutation.key.getCollectionGroup(),largestBatchId:o.largestBatchId,overlayMutation:ru(i.ct,o.mutation)}}(this.serializer,this.userId,n))}}function Ia(t){return tt(t,"documentOverlays")}/**
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
 */class bi{constructor(){}Pt(e,n){this.It(e,n),n.Tt()}It(e,n){if("nullValue"in e)this.Et(n,5);else if("booleanValue"in e)this.Et(n,10),n.dt(e.booleanValue?1:0);else if("integerValue"in e)this.Et(n,15),n.dt(Re(e.integerValue));else if("doubleValue"in e){const r=Re(e.doubleValue);isNaN(r)?this.Et(n,13):(this.Et(n,15),Xl(r)?n.dt(0):n.dt(r))}else if("timestampValue"in e){const r=e.timestampValue;this.Et(n,20),typeof r=="string"?n.At(r):(n.At(`${r.seconds||""}`),n.dt(r.nanos||0))}else if("stringValue"in e)this.Rt(e.stringValue,n),this.Vt(n);else if("bytesValue"in e)this.Et(n,30),n.ft(ni(e.bytesValue)),this.Vt(n);else if("referenceValue"in e)this.gt(e.referenceValue,n);else if("geoPointValue"in e){const r=e.geoPointValue;this.Et(n,45),n.dt(r.latitude||0),n.dt(r.longitude||0)}else"mapValue"in e?hP(e)?this.Et(n,Number.MAX_SAFE_INTEGER):(this.yt(e.mapValue,n),this.Vt(n)):"arrayValue"in e?(this.wt(e.arrayValue,n),this.Vt(n)):V()}Rt(e,n){this.Et(n,25),this.St(e,n)}St(e,n){n.At(e)}yt(e,n){const r=e.fields||{};this.Et(n,55);for(const i of Object.keys(r))this.Rt(i,n),this.It(r[i],n)}wt(e,n){const r=e.values||[];this.Et(n,50);for(const i of r)this.It(i,n)}gt(e,n){this.Et(n,37),N.fromName(e).path.forEach(r=>{this.Et(n,60),this.St(r,n)})}Et(e,n){e.dt(n)}Vt(e){e.dt(2)}}bi.bt=new bi;function Tj(t){if(t===0)return 8;let e=0;return!(t>>4)&&(e+=4,t<<=4),!(t>>6)&&(e+=2,t<<=2),!(t>>7)&&(e+=1),e}function QI(t){const e=64-function(r){let i=0;for(let s=0;s<8;++s){const o=Tj(255&r[s]);if(i+=o,o!==8)break}return i}(t);return Math.ceil(e/8)}class Sj{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Dt(e){const n=e[Symbol.iterator]();let r=n.next();for(;!r.done;)this.Ct(r.value),r=n.next();this.vt()}Ft(e){const n=e[Symbol.iterator]();let r=n.next();for(;!r.done;)this.Mt(r.value),r=n.next();this.xt()}Ot(e){for(const n of e){const r=n.charCodeAt(0);if(r<128)this.Ct(r);else if(r<2048)this.Ct(960|r>>>6),this.Ct(128|63&r);else if(n<"\uD800"||"\uDBFF"<n)this.Ct(480|r>>>12),this.Ct(128|63&r>>>6),this.Ct(128|63&r);else{const i=n.codePointAt(0);this.Ct(240|i>>>18),this.Ct(128|63&i>>>12),this.Ct(128|63&i>>>6),this.Ct(128|63&i)}}this.vt()}Nt(e){for(const n of e){const r=n.charCodeAt(0);if(r<128)this.Mt(r);else if(r<2048)this.Mt(960|r>>>6),this.Mt(128|63&r);else if(n<"\uD800"||"\uDBFF"<n)this.Mt(480|r>>>12),this.Mt(128|63&r>>>6),this.Mt(128|63&r);else{const i=n.codePointAt(0);this.Mt(240|i>>>18),this.Mt(128|63&i>>>12),this.Mt(128|63&i>>>6),this.Mt(128|63&i)}}this.xt()}Bt(e){const n=this.Lt(e),r=QI(n);this.kt(1+r),this.buffer[this.position++]=255&r;for(let i=n.length-r;i<n.length;++i)this.buffer[this.position++]=255&n[i]}qt(e){const n=this.Lt(e),r=QI(n);this.kt(1+r),this.buffer[this.position++]=~(255&r);for(let i=n.length-r;i<n.length;++i)this.buffer[this.position++]=~(255&n[i])}Qt(){this.Kt(255),this.Kt(255)}$t(){this.Ut(255),this.Ut(255)}reset(){this.position=0}seed(e){this.kt(e.length),this.buffer.set(e,this.position),this.position+=e.length}Wt(){return this.buffer.slice(0,this.position)}Lt(e){const n=function(s){const o=new DataView(new ArrayBuffer(8));return o.setFloat64(0,s,!1),new Uint8Array(o.buffer)}(e),r=(128&n[0])!=0;n[0]^=r?255:128;for(let i=1;i<n.length;++i)n[i]^=r?255:0;return n}Ct(e){const n=255&e;n===0?(this.Kt(0),this.Kt(255)):n===255?(this.Kt(255),this.Kt(0)):this.Kt(n)}Mt(e){const n=255&e;n===0?(this.Ut(0),this.Ut(255)):n===255?(this.Ut(255),this.Ut(0)):this.Ut(e)}vt(){this.Kt(0),this.Kt(1)}xt(){this.Ut(0),this.Ut(1)}Kt(e){this.kt(1),this.buffer[this.position++]=e}Ut(e){this.kt(1),this.buffer[this.position++]=~e}kt(e){const n=e+this.position;if(n<=this.buffer.length)return;let r=2*this.buffer.length;r<n&&(r=n);const i=new Uint8Array(r);i.set(this.buffer),this.buffer=i}}class Aj{constructor(e){this.Gt=e}ft(e){this.Gt.Dt(e)}At(e){this.Gt.Ot(e)}dt(e){this.Gt.Bt(e)}Tt(){this.Gt.Qt()}}class kj{constructor(e){this.Gt=e}ft(e){this.Gt.Ft(e)}At(e){this.Gt.Nt(e)}dt(e){this.Gt.qt(e)}Tt(){this.Gt.$t()}}class Ea{constructor(){this.Gt=new Sj,this.zt=new Aj(this.Gt),this.jt=new kj(this.Gt)}seed(e){this.Gt.seed(e)}Ht(e){return e===0?this.zt:this.jt}Wt(){return this.Gt.Wt()}reset(){this.Gt.reset()}}/**
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
 */class Ci{constructor(e,n,r,i){this.indexId=e,this.documentKey=n,this.arrayValue=r,this.directionalValue=i}Jt(){const e=this.directionalValue.length,n=e===0||this.directionalValue[e-1]===255?e+1:e,r=new Uint8Array(n);return r.set(this.directionalValue,0),n!==e?r.set([0],this.directionalValue.length):++r[r.length-1],new Ci(this.indexId,this.documentKey,this.arrayValue,r)}}function wr(t,e){let n=t.indexId-e.indexId;return n!==0?n:(n=YI(t.arrayValue,e.arrayValue),n!==0?n:(n=YI(t.directionalValue,e.directionalValue),n!==0?n:N.comparator(t.documentKey,e.documentKey)))}function YI(t,e){for(let n=0;n<t.length&&n<e.length;++n){const r=t[n]-e[n];if(r!==0)return r}return t.length-e.length}/**
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
 */class XI{constructor(e){this.Yt=new ue((n,r)=>_e.comparator(n.field,r.field)),this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.Zt=e.orderBy,this.Xt=[];for(const n of e.filters){const r=n;r.isInequality()?this.Yt=this.Yt.add(r):this.Xt.push(r)}}get en(){return this.Yt.size>1}tn(e){if($(e.collectionGroup===this.collectionId),this.en)return!1;const n=og(e);if(n!==void 0&&!this.nn(n))return!1;const r=ki(e);let i=new Set,s=0,o=0;for(;s<r.length&&this.nn(r[s]);++s)i=i.add(r[s].fieldPath.canonicalString());if(s===r.length)return!0;if(this.Yt.size>0){const a=this.Yt.getIterator().getNext();if(!i.has(a.field.canonicalString())){const l=r[s];if(!this.rn(a,l)||!this.sn(this.Zt[o++],l))return!1}++s}for(;s<r.length;++s){const a=r[s];if(o>=this.Zt.length||!this.sn(this.Zt[o++],a))return!1}return!0}on(){if(this.en)return null;let e=new ue(_e.comparator);const n=[];for(const r of this.Xt)if(!r.field.isKeyField())if(r.op==="array-contains"||r.op==="array-contains-any")n.push(new Hc(r.field,2));else{if(e.has(r.field))continue;e=e.add(r.field),n.push(new Hc(r.field,0))}for(const r of this.Zt)r.field.isKeyField()||e.has(r.field)||(e=e.add(r.field),n.push(new Hc(r.field,r.dir==="asc"?0:1)));return new Gd(Gd.UNKNOWN_ID,this.collectionId,n,Yl.empty())}nn(e){for(const n of this.Xt)if(this.rn(n,e))return!0;return!1}rn(e,n){if(e===void 0||!e.field.isEqual(n.fieldPath))return!1;const r=e.op==="array-contains"||e.op==="array-contains-any";return n.kind===2===r}sn(e,n){return!!e.field.isEqual(n.fieldPath)&&(n.kind===0&&e.dir==="asc"||n.kind===1&&e.dir==="desc")}}/**
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
 */function nR(t){var e,n;if($(t instanceof te||t instanceof oe),t instanceof te){if(t instanceof wP){const i=((n=(e=t.value.arrayValue)===null||e===void 0?void 0:e.values)===null||n===void 0?void 0:n.map(s=>te.create(t.field,"==",s)))||[];return oe.create(i,"or")}return t}const r=t.filters.map(i=>nR(i));return oe.create(r,t.op)}function Pj(t){if(t.getFilters().length===0)return[];const e=wg(nR(t));return $(rR(e)),yg(e)||_g(e)?[e]:e.getFilters()}function yg(t){return t instanceof te}function _g(t){return t instanceof oe&&Fy(t)}function rR(t){return yg(t)||_g(t)||function(n){if(n instanceof oe&&cg(n)){for(const r of n.getFilters())if(!yg(r)&&!_g(r))return!1;return!0}return!1}(t)}function wg(t){if($(t instanceof te||t instanceof oe),t instanceof te)return t;if(t.filters.length===1)return wg(t.filters[0]);const e=t.filters.map(r=>wg(r));let n=oe.create(e,t.op);return n=Xd(n),rR(n)?n:($(n instanceof oe),$(Co(n)),$(n.filters.length>1),n.filters.reduce((r,i)=>Hy(r,i)))}function Hy(t,e){let n;return $(t instanceof te||t instanceof oe),$(e instanceof te||e instanceof oe),n=t instanceof te?e instanceof te?function(i,s){return oe.create([i,s],"and")}(t,e):JI(t,e):e instanceof te?JI(e,t):function(i,s){if($(i.filters.length>0&&s.filters.length>0),Co(i)&&Co(s))return vP(i,s.getFilters());const o=cg(i)?i:s,a=cg(i)?s:i,l=o.filters.map(u=>Hy(u,a));return oe.create(l,"or")}(t,e),Xd(n)}function JI(t,e){if(Co(e))return vP(e,t.getFilters());{const n=e.filters.map(r=>Hy(t,r));return oe.create(n,"or")}}function Xd(t){if($(t instanceof te||t instanceof oe),t instanceof te)return t;const e=t.getFilters();if(e.length===1)return Xd(e[0]);if(mP(t))return t;const n=e.map(i=>Xd(i)),r=[];return n.forEach(i=>{i instanceof te?r.push(i):i instanceof oe&&(i.op===t.op?r.push(...i.filters):r.push(i))}),r.length===1?r[0]:oe.create(r,t.op)}/**
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
 */class Rj{constructor(){this._n=new Qy}addToCollectionParentIndex(e,n){return this._n.add(n),I.resolve()}getCollectionParents(e,n){return I.resolve(this._n.getEntries(n))}addFieldIndex(e,n){return I.resolve()}deleteFieldIndex(e,n){return I.resolve()}deleteAllFieldIndexes(e){return I.resolve()}createTargetIndexes(e,n){return I.resolve()}getDocumentsMatchingTarget(e,n){return I.resolve(null)}getIndexType(e,n){return I.resolve(0)}getFieldIndexes(e,n){return I.resolve([])}getNextCollectionGroupToUpdate(e){return I.resolve(null)}getMinOffset(e,n){return I.resolve(Ht.min())}getMinOffsetFromCollectionGroup(e,n){return I.resolve(Ht.min())}updateCollectionGroup(e,n,r){return I.resolve()}updateIndexEntries(e,n){return I.resolve()}}class Qy{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new ue(ee.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new ue(ee.comparator)).toArray()}}/**
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
 */const kc=new Uint8Array(0);class bj{constructor(e,n){this.databaseId=n,this.an=new Qy,this.un=new yi(r=>as(r),(r,i)=>Du(r,i)),this.uid=e.uid||""}addToCollectionParentIndex(e,n){if(!this.an.has(n)){const r=n.lastSegment(),i=n.popLast();e.addOnCommittedListener(()=>{this.an.add(n)});const s={collectionId:r,parent:kt(i)};return ZI(e).put(s)}return I.resolve()}getCollectionParents(e,n){const r=[],i=IDBKeyRange.bound([n,""],[eP(n),""],!1,!0);return ZI(e).W(i).next(s=>{for(const o of s){if(o.collectionId!==n)break;r.push(Dn(o.parent))}return r})}addFieldIndex(e,n){const r=Ta(e),i=function(a){return{indexId:a.indexId,collectionGroup:a.collectionGroup,fields:a.fields.map(l=>[l.fieldPath.canonicalString(),l.kind])}}(n);delete i.indexId;const s=r.add(i);if(n.indexState){const o=xs(e);return s.next(a=>{o.put(GI(a,this.uid,n.indexState.sequenceNumber,n.indexState.offset))})}return s.next()}deleteFieldIndex(e,n){const r=Ta(e),i=xs(e),s=Cs(e);return r.delete(n.indexId).next(()=>i.delete(IDBKeyRange.bound([n.indexId],[n.indexId+1],!1,!0))).next(()=>s.delete(IDBKeyRange.bound([n.indexId],[n.indexId+1],!1,!0)))}deleteAllFieldIndexes(e){const n=Ta(e),r=Cs(e),i=xs(e);return n.H().next(()=>r.H()).next(()=>i.H())}createTargetIndexes(e,n){return I.forEach(this.cn(n),r=>this.getIndexType(e,r).next(i=>{if(i===0||i===1){const s=new XI(r).on();if(s!=null)return this.addFieldIndex(e,s)}}))}getDocumentsMatchingTarget(e,n){const r=Cs(e);let i=!0;const s=new Map;return I.forEach(this.cn(n),o=>this.ln(e,o).next(a=>{i&&(i=!!a),s.set(o,a)})).next(()=>{if(i){let o=K();const a=[];return I.forEach(s,(l,u)=>{P("IndexedDbIndexManager",`Using index ${function(_){return`id=${_.indexId}|cg=${_.collectionGroup}|f=${_.fields.map(E=>`${E.fieldPath}:${E.kind}`).join(",")}`}(l)} to execute ${as(n)}`);const c=function(_,E){const S=og(E);if(S===void 0)return null;for(const R of Hd(_,S.fieldPath))switch(R.op){case"array-contains-any":return R.value.arrayValue.values||[];case"array-contains":return[R.value]}return null}(u,l),d=function(_,E){const S=new Map;for(const R of ki(E))for(const x of Hd(_,R.fieldPath))switch(x.op){case"==":case"in":S.set(R.fieldPath.canonicalString(),x.value);break;case"not-in":case"!=":return S.set(R.fieldPath.canonicalString(),x.value),Array.from(S.values())}return null}(u,l),h=function(_,E){const S=[];let R=!0;for(const x of ki(E)){const M=x.kind===0?xI(_,x.fieldPath,_.startAt):NI(_,x.fieldPath,_.startAt);S.push(M.value),R&&(R=M.inclusive)}return new si(S,R)}(u,l),f=function(_,E){const S=[];let R=!0;for(const x of ki(E)){const M=x.kind===0?NI(_,x.fieldPath,_.endAt):xI(_,x.fieldPath,_.endAt);S.push(M.value),R&&(R=M.inclusive)}return new si(S,R)}(u,l),v=this.hn(l,u,h),y=this.hn(l,u,f),w=this.Pn(l,u,d),m=this.In(l.indexId,c,v,h.inclusive,y,f.inclusive,w);return I.forEach(m,p=>r.j(p,n.limit).next(_=>{_.forEach(E=>{const S=N.fromSegments(E.documentKey);o.has(S)||(o=o.add(S),a.push(S))})}))}).next(()=>a)}return I.resolve(null)})}cn(e){let n=this.un.get(e);return n||(e.filters.length===0?n=[e]:n=Pj(oe.create(e.filters,"and")).map(r=>hg(e.path,e.collectionGroup,e.orderBy,r.getFilters(),e.limit,e.startAt,e.endAt)),this.un.set(e,n),n)}In(e,n,r,i,s,o,a){const l=(n!=null?n.length:1)*Math.max(r.length,s.length),u=l/(n!=null?n.length:1),c=[];for(let d=0;d<l;++d){const h=n?this.Tn(n[d/u]):kc,f=this.En(e,h,r[d%u],i),v=this.dn(e,h,s[d%u],o),y=a.map(w=>this.En(e,h,w,!0));c.push(...this.createRange(f,v,y))}return c}En(e,n,r,i){const s=new Ci(e,N.empty(),n,r);return i?s:s.Jt()}dn(e,n,r,i){const s=new Ci(e,N.empty(),n,r);return i?s.Jt():s}ln(e,n){const r=new XI(n),i=n.collectionGroup!=null?n.collectionGroup:n.path.lastSegment();return this.getFieldIndexes(e,i).next(s=>{let o=null;for(const a of s)r.tn(a)&&(!o||a.fields.length>o.fields.length)&&(o=a);return o})}getIndexType(e,n){let r=2;const i=this.cn(n);return I.forEach(i,s=>this.ln(e,s).next(o=>{o?r!==0&&o.fields.length<function(l){let u=new ue(_e.comparator),c=!1;for(const d of l.filters)for(const h of d.getFlattenedFilters())h.field.isKeyField()||(h.op==="array-contains"||h.op==="array-contains-any"?c=!0:u=u.add(h.field));for(const d of l.orderBy)d.field.isKeyField()||(u=u.add(d.field));return u.size+(c?1:0)}(s)&&(r=1):r=0})).next(()=>function(o){return o.limit!==null}(n)&&i.length>1&&r===2?1:r)}An(e,n){const r=new Ea;for(const i of ki(e)){const s=n.data.field(i.fieldPath);if(s==null)return null;const o=r.Ht(i.kind);bi.bt.Pt(s,o)}return r.Wt()}Tn(e){const n=new Ea;return bi.bt.Pt(e,n.Ht(0)),n.Wt()}Rn(e,n){const r=new Ea;return bi.bt.Pt(os(this.databaseId,n),r.Ht(function(s){const o=ki(s);return o.length===0?0:o[o.length-1].kind}(e))),r.Wt()}Pn(e,n,r){if(r===null)return[];let i=[];i.push(new Ea);let s=0;for(const o of ki(e)){const a=r[s++];for(const l of i)if(this.Vn(n,o.fieldPath)&&eu(a))i=this.mn(i,o,a);else{const u=l.Ht(o.kind);bi.bt.Pt(a,u)}}return this.fn(i)}hn(e,n,r){return this.Pn(e,n,r.position)}fn(e){const n=[];for(let r=0;r<e.length;++r)n[r]=e[r].Wt();return n}mn(e,n,r){const i=[...e],s=[];for(const o of r.arrayValue.values||[])for(const a of i){const l=new Ea;l.seed(a.Wt()),bi.bt.Pt(o,l.Ht(n.kind)),s.push(l)}return s}Vn(e,n){return!!e.filters.find(r=>r instanceof te&&r.field.isEqual(n)&&(r.op==="in"||r.op==="not-in"))}getFieldIndexes(e,n){const r=Ta(e),i=xs(e);return(n?r.W("collectionGroupIndex",IDBKeyRange.bound(n,n)):r.W()).next(s=>{const o=[];return I.forEach(s,a=>i.get([a.indexId,this.uid]).next(l=>{o.push(function(c,d){const h=d?new Yl(d.sequenceNumber,new Ht(ds(d.readTime),new N(Dn(d.documentKey)),d.largestBatchId)):Yl.empty(),f=c.fields.map(([v,y])=>new Hc(_e.fromServerFormat(v),y));return new Gd(c.indexId,c.collectionGroup,f,h)}(a,l))})).next(()=>o)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(n=>n.length===0?null:(n.sort((r,i)=>{const s=r.indexState.sequenceNumber-i.indexState.sequenceNumber;return s!==0?s:W(r.collectionGroup,i.collectionGroup)}),n[0].collectionGroup))}updateCollectionGroup(e,n,r){const i=Ta(e),s=xs(e);return this.gn(e).next(o=>i.W("collectionGroupIndex",IDBKeyRange.bound(n,n)).next(a=>I.forEach(a,l=>s.put(GI(l.indexId,this.uid,o,r)))))}updateIndexEntries(e,n){const r=new Map;return I.forEach(n,(i,s)=>{const o=r.get(i.collectionGroup);return(o?I.resolve(o):this.getFieldIndexes(e,i.collectionGroup)).next(a=>(r.set(i.collectionGroup,a),I.forEach(a,l=>this.pn(e,i,l).next(u=>{const c=this.yn(s,l);return u.isEqual(c)?I.resolve():this.wn(e,s,l,u,c)}))))})}Sn(e,n,r,i){return Cs(e).put({indexId:i.indexId,uid:this.uid,arrayValue:i.arrayValue,directionalValue:i.directionalValue,orderedDocumentKey:this.Rn(r,n.key),documentKey:n.key.path.toArray()})}bn(e,n,r,i){return Cs(e).delete([i.indexId,this.uid,i.arrayValue,i.directionalValue,this.Rn(r,n.key),n.key.path.toArray()])}pn(e,n,r){const i=Cs(e);let s=new ue(wr);return i.Y({index:"documentKeyIndex",range:IDBKeyRange.only([r.indexId,this.uid,this.Rn(r,n)])},(o,a)=>{s=s.add(new Ci(r.indexId,n,a.arrayValue,a.directionalValue))}).next(()=>s)}yn(e,n){let r=new ue(wr);const i=this.An(n,e);if(i==null)return r;const s=og(n);if(s!=null){const o=e.data.field(s.fieldPath);if(eu(o))for(const a of o.arrayValue.values||[])r=r.add(new Ci(n.indexId,e.key,this.Tn(a),i))}else r=r.add(new Ci(n.indexId,e.key,kc,i));return r}wn(e,n,r,i,s){P("IndexedDbIndexManager","Updating index entries for document '%s'",n.key);const o=[];return function(l,u,c,d,h){const f=l.getIterator(),v=u.getIterator();let y=bs(f),w=bs(v);for(;y||w;){let m=!1,p=!1;if(y&&w){const _=c(y,w);_<0?p=!0:_>0&&(m=!0)}else y!=null?p=!0:m=!0;m?(d(w),w=bs(v)):p?(h(y),y=bs(f)):(y=bs(f),w=bs(v))}}(i,s,wr,a=>{o.push(this.Sn(e,n,r,a))},a=>{o.push(this.bn(e,n,r,a))}),I.waitFor(o)}gn(e){let n=1;return xs(e).Y({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(r,i,s)=>{s.done(),n=i.sequenceNumber+1}).next(()=>n)}createRange(e,n,r){r=r.sort((o,a)=>wr(o,a)).filter((o,a,l)=>!a||wr(o,l[a-1])!==0);const i=[];i.push(e);for(const o of r){const a=wr(o,e),l=wr(o,n);if(a===0)i[0]=e.Jt();else if(a>0&&l<0)i.push(o),i.push(o.Jt());else if(l>0)break}i.push(n);const s=[];for(let o=0;o<i.length;o+=2){if(this.Dn(i[o],i[o+1]))return[];const a=[i[o].indexId,this.uid,i[o].arrayValue,i[o].directionalValue,kc,[]],l=[i[o+1].indexId,this.uid,i[o+1].arrayValue,i[o+1].directionalValue,kc,[]];s.push(IDBKeyRange.bound(a,l))}return s}Dn(e,n){return wr(e,n)>0}getMinOffsetFromCollectionGroup(e,n){return this.getFieldIndexes(e,n).next(eE)}getMinOffset(e,n){return I.mapArray(this.cn(n),r=>this.ln(e,r).next(i=>i||V())).next(eE)}}function ZI(t){return tt(t,"collectionParents")}function Cs(t){return tt(t,"indexEntries")}function Ta(t){return tt(t,"indexConfiguration")}function xs(t){return tt(t,"indexState")}function eE(t){$(t.length!==0);let e=t[0].indexState.offset,n=e.largestBatchId;for(let r=1;r<t.length;r++){const i=t[r].indexState.offset;Vy(i,e)<0&&(e=i),n<i.largestBatchId&&(n=i.largestBatchId)}return new Ht(e.readTime,e.documentKey,n)}/**
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
 */const tE={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Nt{constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}static withCacheSize(e){return new Nt(e,Nt.DEFAULT_COLLECTION_PERCENTILE,Nt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
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
 */function iR(t,e,n){const r=t.store("mutations"),i=t.store("documentMutations"),s=[],o=IDBKeyRange.only(n.batchId);let a=0;const l=r.Y({range:o},(c,d,h)=>(a++,h.delete()));s.push(l.next(()=>{$(a===1)}));const u=[];for(const c of n.mutations){const d=oP(e,c.key.path,n.batchId);s.push(i.delete(d)),u.push(c.key)}return I.waitFor(s).next(()=>u)}function Jd(t){if(!t)return 0;let e;if(t.document)e=t.document;else if(t.unknownDocument)e=t.unknownDocument;else{if(!t.noDocument)throw V();e=t.noDocument}return JSON.stringify(e).length}/**
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
 */Nt.DEFAULT_COLLECTION_PERCENTILE=10,Nt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Nt.DEFAULT=new Nt(41943040,Nt.DEFAULT_COLLECTION_PERCENTILE,Nt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Nt.DISABLED=new Nt(-1,0,0);class lf{constructor(e,n,r,i){this.userId=e,this.serializer=n,this.indexManager=r,this.referenceDelegate=i,this.Cn={}}static lt(e,n,r,i){$(e.uid!=="");const s=e.isAuthenticated()?e.uid:"";return new lf(s,n,r,i)}checkEmpty(e){let n=!0;const r=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return Ir(e).Y({index:"userMutationsIndex",range:r},(i,s,o)=>{n=!1,o.done()}).next(()=>n)}addMutationBatch(e,n,r,i){const s=Fs(e),o=Ir(e);return o.add({}).next(a=>{$(typeof a=="number");const l=new zy(a,n,r,i),u=function(f,v,y){const w=y.baseMutations.map(p=>ru(f.ct,p)),m=y.mutations.map(p=>ru(f.ct,p));return{userId:v,batchId:y.batchId,localWriteTimeMs:y.localWriteTime.toMillis(),baseMutations:w,mutations:m}}(this.serializer,this.userId,l),c=[];let d=new ue((h,f)=>W(h.canonicalString(),f.canonicalString()));for(const h of i){const f=oP(this.userId,h.key.path,a);d=d.add(h.key.path.popLast()),c.push(o.put(u)),c.push(s.put(f,v5))}return d.forEach(h=>{c.push(this.indexManager.addToCollectionParentIndex(e,h))}),e.addOnCommittedListener(()=>{this.Cn[a]=l.keys()}),I.waitFor(c).next(()=>l)})}lookupMutationBatch(e,n){return Ir(e).get(n).next(r=>r?($(r.userId===this.userId),Ri(this.serializer,r)):null)}vn(e,n){return this.Cn[n]?I.resolve(this.Cn[n]):this.lookupMutationBatch(e,n).next(r=>{if(r){const i=r.keys();return this.Cn[n]=i,i}return null})}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=IDBKeyRange.lowerBound([this.userId,r]);let s=null;return Ir(e).Y({index:"userMutationsIndex",range:i},(o,a,l)=>{a.userId===this.userId&&($(a.batchId>=r),s=Ri(this.serializer,a)),l.done()}).next(()=>s)}getHighestUnacknowledgedBatchId(e){const n=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let r=-1;return Ir(e).Y({index:"userMutationsIndex",range:n,reverse:!0},(i,s,o)=>{r=s.batchId,o.done()}).next(()=>r)}getAllMutationBatches(e){const n=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return Ir(e).W("userMutationsIndex",n).next(r=>r.map(i=>Ri(this.serializer,i)))}getAllMutationBatchesAffectingDocumentKey(e,n){const r=Qc(this.userId,n.path),i=IDBKeyRange.lowerBound(r),s=[];return Fs(e).Y({range:i},(o,a,l)=>{const[u,c,d]=o,h=Dn(c);if(u===this.userId&&n.path.isEqual(h))return Ir(e).get(d).next(f=>{if(!f)throw V();$(f.userId===this.userId),s.push(Ri(this.serializer,f))});l.done()}).next(()=>s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new ue(W);const i=[];return n.forEach(s=>{const o=Qc(this.userId,s.path),a=IDBKeyRange.lowerBound(o),l=Fs(e).Y({range:a},(u,c,d)=>{const[h,f,v]=u,y=Dn(f);h===this.userId&&s.path.isEqual(y)?r=r.add(v):d.done()});i.push(l)}),I.waitFor(i).next(()=>this.Fn(e,r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1,s=Qc(this.userId,r),o=IDBKeyRange.lowerBound(s);let a=new ue(W);return Fs(e).Y({range:o},(l,u,c)=>{const[d,h,f]=l,v=Dn(h);d===this.userId&&r.isPrefixOf(v)?v.length===i&&(a=a.add(f)):c.done()}).next(()=>this.Fn(e,a))}Fn(e,n){const r=[],i=[];return n.forEach(s=>{i.push(Ir(e).get(s).next(o=>{if(o===null)throw V();$(o.userId===this.userId),r.push(Ri(this.serializer,o))}))}),I.waitFor(i).next(()=>r)}removeMutationBatch(e,n){return iR(e.ae,this.userId,n).next(r=>(e.addOnCommittedListener(()=>{this.Mn(n.batchId)}),I.forEach(r,i=>this.referenceDelegate.markPotentiallyOrphaned(e,i))))}Mn(e){delete this.Cn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(n=>{if(!n)return I.resolve();const r=IDBKeyRange.lowerBound(function(o){return[o]}(this.userId)),i=[];return Fs(e).Y({range:r},(s,o,a)=>{if(s[0]===this.userId){const l=Dn(s[1]);i.push(l)}else a.done()}).next(()=>{$(i.length===0)})})}containsKey(e,n){return sR(e,this.userId,n)}xn(e){return oR(e).get(this.userId).next(n=>n||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function sR(t,e,n){const r=Qc(e,n.path),i=r[1],s=IDBKeyRange.lowerBound(r);let o=!1;return Fs(t).Y({range:s,J:!0},(a,l,u)=>{const[c,d,h]=a;c===e&&d===i&&(o=!0),u.done()}).next(()=>o)}function Ir(t){return tt(t,"mutations")}function Fs(t){return tt(t,"documentMutations")}function oR(t){return tt(t,"mutationQueues")}/**
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
 */class hs{constructor(e){this.On=e}next(){return this.On+=2,this.On}static Nn(){return new hs(0)}static Bn(){return new hs(-1)}}/**
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
 */class Cj{constructor(e,n){this.referenceDelegate=e,this.serializer=n}allocateTargetId(e){return this.Ln(e).next(n=>{const r=new hs(n.highestTargetId);return n.highestTargetId=r.next(),this.kn(e,n).next(()=>n.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.Ln(e).next(n=>z.fromTimestamp(new Ie(n.lastRemoteSnapshotVersion.seconds,n.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.Ln(e).next(n=>n.highestListenSequenceNumber)}setTargetsMetadata(e,n,r){return this.Ln(e).next(i=>(i.highestListenSequenceNumber=n,r&&(i.lastRemoteSnapshotVersion=r.toTimestamp()),n>i.highestListenSequenceNumber&&(i.highestListenSequenceNumber=n),this.kn(e,i)))}addTargetData(e,n){return this.qn(e,n).next(()=>this.Ln(e).next(r=>(r.targetCount+=1,this.Qn(n,r),this.kn(e,r))))}updateTargetData(e,n){return this.qn(e,n)}removeTargetData(e,n){return this.removeMatchingKeysForTargetId(e,n.targetId).next(()=>Ns(e).delete(n.targetId)).next(()=>this.Ln(e)).next(r=>($(r.targetCount>0),r.targetCount-=1,this.kn(e,r)))}removeTargets(e,n,r){let i=0;const s=[];return Ns(e).Y((o,a)=>{const l=Fa(a);l.sequenceNumber<=n&&r.get(l.targetId)===null&&(i++,s.push(this.removeTargetData(e,l)))}).next(()=>I.waitFor(s)).next(()=>i)}forEachTarget(e,n){return Ns(e).Y((r,i)=>{const s=Fa(i);n(s)})}Ln(e){return nE(e).get("targetGlobalKey").next(n=>($(n!==null),n))}kn(e,n){return nE(e).put("targetGlobalKey",n)}qn(e,n){return Ns(e).put(tR(this.serializer,n))}Qn(e,n){let r=!1;return e.targetId>n.highestTargetId&&(n.highestTargetId=e.targetId,r=!0),e.sequenceNumber>n.highestListenSequenceNumber&&(n.highestListenSequenceNumber=e.sequenceNumber,r=!0),r}getTargetCount(e){return this.Ln(e).next(n=>n.targetCount)}getTargetData(e,n){const r=as(n),i=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]);let s=null;return Ns(e).Y({range:i,index:"queryTargetsIndex"},(o,a,l)=>{const u=Fa(a);Du(n,u.target)&&(s=u,l.done())}).next(()=>s)}addMatchingKeys(e,n,r){const i=[],s=Pr(e);return n.forEach(o=>{const a=kt(o.path);i.push(s.put({targetId:r,path:a})),i.push(this.referenceDelegate.addReference(e,r,o))}),I.waitFor(i)}removeMatchingKeys(e,n,r){const i=Pr(e);return I.forEach(n,s=>{const o=kt(s.path);return I.waitFor([i.delete([r,o]),this.referenceDelegate.removeReference(e,r,s)])})}removeMatchingKeysForTargetId(e,n){const r=Pr(e),i=IDBKeyRange.bound([n],[n+1],!1,!0);return r.delete(i)}getMatchingKeysForTargetId(e,n){const r=IDBKeyRange.bound([n],[n+1],!1,!0),i=Pr(e);let s=K();return i.Y({range:r,J:!0},(o,a,l)=>{const u=Dn(o[1]),c=new N(u);s=s.add(c)}).next(()=>s)}containsKey(e,n){const r=kt(n.path),i=IDBKeyRange.bound([r],[eP(r)],!1,!0);let s=0;return Pr(e).Y({index:"documentTargetsIndex",J:!0,range:i},([o,a],l,u)=>{o!==0&&(s++,u.done())}).next(()=>s>0)}_t(e,n){return Ns(e).get(n).next(r=>r?Fa(r):null)}}function Ns(t){return tt(t,"targets")}function nE(t){return tt(t,"targetGlobal")}function Pr(t){return tt(t,"targetDocuments")}/**
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
 */function rE([t,e],[n,r]){const i=W(t,n);return i===0?W(e,r):i}class xj{constructor(e){this.Kn=e,this.buffer=new ue(rE),this.$n=0}Un(){return++this.$n}Wn(e){const n=[e,this.Un()];if(this.buffer.size<this.Kn)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();rE(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class Nj{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Gn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.zn(6e4)}stop(){this.Gn&&(this.Gn.cancel(),this.Gn=null)}get started(){return this.Gn!==null}zn(e){P("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Gn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Gn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){vi(n)?P("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",n):await gi(n)}await this.zn(3e5)})}}class Dj{constructor(e,n){this.jn=e,this.params=n}calculateTargetCount(e,n){return this.jn.Hn(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return I.resolve(Vt._e);const r=new xj(n);return this.jn.forEachTarget(e,i=>r.Wn(i.sequenceNumber)).next(()=>this.jn.Jn(e,i=>r.Wn(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.jn.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.jn.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(P("LruGarbageCollector","Garbage collection skipped; disabled"),I.resolve(tE)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(P("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),tE):this.Yn(e,n))}getCacheSize(e){return this.jn.getCacheSize(e)}Yn(e,n){let r,i,s,o,a,l,u;const c=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(d=>(d>this.params.maximumSequenceNumbersToCollect?(P("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${d}`),i=this.params.maximumSequenceNumbersToCollect):i=d,o=Date.now(),this.nthSequenceNumber(e,i))).next(d=>(r=d,a=Date.now(),this.removeTargets(e,r,n))).next(d=>(s=d,l=Date.now(),this.removeOrphanedDocuments(e,r))).next(d=>(u=Date.now(),Os()<=J.DEBUG&&P("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-c}ms
	Determined least recently used ${i} in `+(a-o)+`ms
	Removed ${s} targets in `+(l-a)+`ms
	Removed ${d} documents in `+(u-l)+`ms
Total Duration: ${u-c}ms`),I.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:d})))}}function Oj(t,e){return new Dj(t,e)}/**
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
 */class Vj{constructor(e,n){this.db=e,this.garbageCollector=Oj(this,n)}Hn(e){const n=this.Zn(e);return this.db.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}Zn(e){let n=0;return this.Jn(e,r=>{n++}).next(()=>n)}forEachTarget(e,n){return this.db.getTargetCache().forEachTarget(e,n)}Jn(e,n){return this.Xn(e,(r,i)=>n(i))}addReference(e,n,r){return Pc(e,r)}removeReference(e,n,r){return Pc(e,r)}removeTargets(e,n,r){return this.db.getTargetCache().removeTargets(e,n,r)}markPotentiallyOrphaned(e,n){return Pc(e,n)}er(e,n){return function(i,s){let o=!1;return oR(i).Z(a=>sR(i,a,s).next(l=>(l&&(o=!0),I.resolve(!l)))).next(()=>o)}(e,n)}removeOrphanedDocuments(e,n){const r=this.db.getRemoteDocumentCache().newChangeBuffer(),i=[];let s=0;return this.Xn(e,(o,a)=>{if(a<=n){const l=this.er(e,o).next(u=>{if(!u)return s++,r.getEntry(e,o).next(()=>(r.removeEntry(o,z.min()),Pr(e).delete(function(d){return[0,kt(d.path)]}(o))))});i.push(l)}}).next(()=>I.waitFor(i)).next(()=>r.apply(e)).next(()=>s)}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,r)}updateLimboDocument(e,n){return Pc(e,n)}Xn(e,n){const r=Pr(e);let i,s=Vt._e;return r.Y({index:"documentTargetsIndex"},([o,a],{path:l,sequenceNumber:u})=>{o===0?(s!==Vt._e&&n(new N(Dn(i)),s),s=u,i=l):s=Vt._e}).next(()=>{s!==Vt._e&&n(new N(Dn(i)),s)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function Pc(t,e){return Pr(t).put(function(r,i){return{targetId:0,path:kt(r.path),sequenceNumber:i}}(e,t.currentSequenceNumber))}/**
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
 */class aR{constructor(){this.changes=new yi(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,me.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?I.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class Lj{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,n,r){return Ei(e).put(r)}removeEntry(e,n,r){return Ei(e).delete(function(s,o){const a=s.path.toArray();return[a.slice(0,a.length-2),a[a.length-2],Yd(o),a[a.length-1]]}(n,r))}updateMetadata(e,n){return this.getMetadata(e).next(r=>(r.byteSize+=n,this.tr(e,r)))}getEntry(e,n){let r=me.newInvalidDocument(n);return Ei(e).Y({index:"documentKeyIndex",range:IDBKeyRange.only(Sa(n))},(i,s)=>{r=this.nr(n,s)}).next(()=>r)}rr(e,n){let r={size:0,document:me.newInvalidDocument(n)};return Ei(e).Y({index:"documentKeyIndex",range:IDBKeyRange.only(Sa(n))},(i,s)=>{r={document:this.nr(n,s),size:Jd(s)}}).next(()=>r)}getEntries(e,n){let r=Mt();return this.ir(e,n,(i,s)=>{const o=this.nr(i,s);r=r.insert(i,o)}).next(()=>r)}sr(e,n){let r=Mt(),i=new de(N.comparator);return this.ir(e,n,(s,o)=>{const a=this.nr(s,o);r=r.insert(s,a),i=i.insert(s,Jd(o))}).next(()=>({documents:r,_r:i}))}ir(e,n,r){if(n.isEmpty())return I.resolve();let i=new ue(oE);n.forEach(l=>i=i.add(l));const s=IDBKeyRange.bound(Sa(i.first()),Sa(i.last())),o=i.getIterator();let a=o.getNext();return Ei(e).Y({index:"documentKeyIndex",range:s},(l,u,c)=>{const d=N.fromSegments([...u.prefixPath,u.collectionGroup,u.documentId]);for(;a&&oE(a,d)<0;)r(a,null),a=o.getNext();a&&a.isEqual(d)&&(r(a,u),a=o.hasNext()?o.getNext():null),a?c.U(Sa(a)):c.done()}).next(()=>{for(;a;)r(a,null),a=o.hasNext()?o.getNext():null})}getDocumentsMatchingQuery(e,n,r,i,s){const o=n.path,a=[o.popLast().toArray(),o.lastSegment(),Yd(r.readTime),r.documentKey.path.isEmpty()?"":r.documentKey.path.lastSegment()],l=[o.popLast().toArray(),o.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return Ei(e).W(IDBKeyRange.bound(a,l,!0)).next(u=>{s==null||s.incrementDocumentReadCount(u.length);let c=Mt();for(const d of u){const h=this.nr(N.fromSegments(d.prefixPath.concat(d.collectionGroup,d.documentId)),d);h.isFoundDocument()&&(Vu(n,h)||i.has(h.key))&&(c=c.insert(h.key,h))}return c})}getAllFromCollectionGroup(e,n,r,i){let s=Mt();const o=sE(n,r),a=sE(n,Ht.max());return Ei(e).Y({index:"collectionGroupIndex",range:IDBKeyRange.bound(o,a,!0)},(l,u,c)=>{const d=this.nr(N.fromSegments(u.prefixPath.concat(u.collectionGroup,u.documentId)),u);s=s.insert(d.key,d),s.size===i&&c.done()}).next(()=>s)}newChangeBuffer(e){return new Mj(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(n=>n.byteSize)}getMetadata(e){return iE(e).get("remoteDocumentGlobalKey").next(n=>($(!!n),n))}tr(e,n){return iE(e).put("remoteDocumentGlobalKey",n)}nr(e,n){if(n){const r=Ij(this.serializer,n);if(!(r.isNoDocument()&&r.version.isEqual(z.min())))return r}return me.newInvalidDocument(e)}}function lR(t){return new Lj(t)}class Mj extends aR{constructor(e,n){super(),this.ar=e,this.trackRemovals=n,this.ur=new yi(r=>r.toString(),(r,i)=>r.isEqual(i))}applyChanges(e){const n=[];let r=0,i=new ue((s,o)=>W(s.canonicalString(),o.canonicalString()));return this.changes.forEach((s,o)=>{const a=this.ur.get(s);if(n.push(this.ar.removeEntry(e,s,a.readTime)),o.isValidDocument()){const l=qI(this.ar.serializer,o);i=i.add(s.path.popLast());const u=Jd(l);r+=u-a.size,n.push(this.ar.addEntry(e,s,l))}else if(r-=a.size,this.trackRemovals){const l=qI(this.ar.serializer,o.convertToNoDocument(z.min()));n.push(this.ar.addEntry(e,s,l))}}),i.forEach(s=>{n.push(this.ar.indexManager.addToCollectionParentIndex(e,s))}),n.push(this.ar.updateMetadata(e,r)),I.waitFor(n)}getFromCache(e,n){return this.ar.rr(e,n).next(r=>(this.ur.set(n,{size:r.size,readTime:r.document.readTime}),r.document))}getAllFromCache(e,n){return this.ar.sr(e,n).next(({documents:r,_r:i})=>(i.forEach((s,o)=>{this.ur.set(s,{size:o,readTime:r.get(s).readTime})}),r))}}function iE(t){return tt(t,"remoteDocumentGlobal")}function Ei(t){return tt(t,"remoteDocumentsV14")}function Sa(t){const e=t.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function sE(t,e){const n=e.documentKey.path.toArray();return[t,Yd(e.readTime),n.slice(0,n.length-2),n.length>0?n[n.length-1]:""]}function oE(t,e){const n=t.path.toArray(),r=e.path.toArray();let i=0;for(let s=0;s<n.length-2&&s<r.length-2;++s)if(i=W(n[s],r[s]),i)return i;return i=W(n.length,r.length),i||(i=W(n[n.length-2],r[r.length-2]),i||W(n[n.length-1],r[r.length-1]))}/**
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
 */class Fj{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class uR{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&rl(r.mutation,i,Lt.empty(),Ie.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,K()).next(()=>r))}getLocalViewOfDocuments(e,n,r=K()){const i=On();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=La();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=On();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,K()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=Mt();const o=nl(),a=function(){return nl()}();return n.forEach((l,u)=>{const c=r.get(u.key);i.has(u.key)&&(c===void 0||c.mutation instanceof mr)?s=s.insert(u.key,u):c!==void 0?(o.set(u.key,c.mutation.getFieldMask()),rl(c.mutation,u,c.mutation.getFieldMask(),Ie.now())):o.set(u.key,Lt.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((u,c)=>o.set(u,c)),n.forEach((u,c)=>{var d;return a.set(u,new Fj(c,(d=o.get(u))!==null&&d!==void 0?d:null))}),a))}recalculateAndSaveOverlays(e,n){const r=nl();let i=new de((o,a)=>o-a),s=K();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let c=r.get(l)||Lt.empty();c=a.applyToLocalView(u,c),r.set(l,c);const d=(i.get(a.batchId)||K()).add(l);i=i.insert(a.batchId,d)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,c=l.value,d=PP();c.forEach(h=>{if(!s.has(h)){const f=VP(n.get(h),r.get(h));f!==null&&d.set(h,f),s=s.add(h)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,d))}return I.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return N.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):jy(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):I.resolve(On());let a=-1,l=s;return o.next(u=>I.forEach(u,(c,d)=>(a<d.largestBatchId&&(a=d.largestBatchId),s.get(c)?I.resolve():this.remoteDocumentCache.getEntry(e,c).next(h=>{l=l.insert(c,h)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,l,u,K())).next(c=>({batchId:a,changes:kP(c)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new N(n)).next(r=>{let i=La();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=La();return this.indexManager.getCollectionParents(e,s).next(a=>I.forEach(a,l=>{const u=function(d,h){return new pr(h,null,d.explicitOrderBy.slice(),d.filters.slice(),d.limit,d.limitType,d.startAt,d.endAt)}(n,l.child(s));return this.getDocumentsMatchingCollectionQuery(e,u,r,i).next(c=>{c.forEach((d,h)=>{o=o.insert(d,h)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((l,u)=>{const c=u.getKey();o.get(c)===null&&(o=o.insert(c,me.newInvalidDocument(c)))});let a=La();return o.forEach((l,u)=>{const c=s.get(l);c!==void 0&&rl(c.mutation,u,Lt.empty(),Ie.now()),Vu(n,u)&&(a=a.insert(l,u))}),a})}}/**
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
 */class jj{constructor(e){this.serializer=e,this.cr=new Map,this.lr=new Map}getBundleMetadata(e,n){return I.resolve(this.cr.get(n))}saveBundleMetadata(e,n){return this.cr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:Fe(i.createTime)}}(n)),I.resolve()}getNamedQuery(e,n){return I.resolve(this.lr.get(n))}saveNamedQuery(e,n){return this.lr.set(n.name,function(i){return{name:i.name,query:Ky(i.bundledQuery),readTime:Fe(i.readTime)}}(n)),I.resolve()}}/**
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
 */class Uj{constructor(){this.overlays=new de(N.comparator),this.hr=new Map}getOverlay(e,n){return I.resolve(this.overlays.get(n))}getOverlays(e,n){const r=On();return I.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),I.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.hr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.hr.delete(r)),I.resolve()}getOverlaysForCollection(e,n,r){const i=On(),s=n.length+1,o=new N(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return I.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new de((u,c)=>u-c);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let c=s.get(u.largestBatchId);c===null&&(c=On(),s=s.insert(u.largestBatchId,c)),c.set(u.getKey(),u)}}const a=On(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,c)=>a.set(u,c)),!(a.size()>=i)););return I.resolve(a)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.hr.get(i.largestBatchId).delete(r.key);this.hr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new qy(n,r));let s=this.hr.get(n);s===void 0&&(s=K(),this.hr.set(n,s)),this.hr.set(n,s.add(r.key))}}/**
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
 */class Yy{constructor(){this.Pr=new ue(He.Ir),this.Tr=new ue(He.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(e,n){const r=new He(e,n);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Ar(new He(e,n))}Rr(e,n){e.forEach(r=>this.removeReference(r,n))}Vr(e){const n=new N(new ee([])),r=new He(n,e),i=new He(n,e+1),s=[];return this.Tr.forEachInRange([r,i],o=>{this.Ar(o),s.push(o.key)}),s}mr(){this.Pr.forEach(e=>this.Ar(e))}Ar(e){this.Pr=this.Pr.delete(e),this.Tr=this.Tr.delete(e)}gr(e){const n=new N(new ee([])),r=new He(n,e),i=new He(n,e+1);let s=K();return this.Tr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new He(e,0),r=this.Pr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class He{constructor(e,n){this.key=e,this.pr=n}static Ir(e,n){return N.comparator(e.key,n.key)||W(e.pr,n.pr)}static Er(e,n){return W(e.pr,n.pr)||N.comparator(e.key,n.key)}}/**
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
 */class $j{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.yr=1,this.wr=new ue(He.Ir)}checkEmpty(e){return I.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new zy(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.wr=this.wr.add(new He(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return I.resolve(o)}lookupMutationBatch(e,n){return I.resolve(this.Sr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.br(r),s=i<0?0:i;return I.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return I.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(e){return I.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new He(n,0),i=new He(n,Number.POSITIVE_INFINITY),s=[];return this.wr.forEachInRange([r,i],o=>{const a=this.Sr(o.pr);s.push(a)}),I.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new ue(W);return n.forEach(i=>{const s=new He(i,0),o=new He(i,Number.POSITIVE_INFINITY);this.wr.forEachInRange([s,o],a=>{r=r.add(a.pr)})}),I.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;N.isDocumentKey(s)||(s=s.child(""));const o=new He(new N(s),0);let a=new ue(W);return this.wr.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(l.pr)),!0)},o),I.resolve(this.Dr(a))}Dr(e){const n=[];return e.forEach(r=>{const i=this.Sr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){$(this.Cr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return I.forEach(n.mutations,i=>{const s=new He(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.wr=r})}Mn(e){}containsKey(e,n){const r=new He(n,0),i=this.wr.firstAfterOrEqual(r);return I.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,I.resolve()}Cr(e,n){return this.br(e)}br(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Sr(e){const n=this.br(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class zj{constructor(e){this.vr=e,this.docs=function(){return new de(N.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.vr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return I.resolve(r?r.document.mutableCopy():me.newInvalidDocument(n))}getEntries(e,n){let r=Mt();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():me.newInvalidDocument(i))}),I.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Mt();const o=n.path,a=new N(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:c}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||Vy(nP(c),r)<=0||(i.has(c.key)||Vu(n,c))&&(s=s.insert(c.key,c.mutableCopy()))}return I.resolve(s)}getAllFromCollectionGroup(e,n,r,i){V()}Fr(e,n){return I.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new Bj(this)}getSize(e){return I.resolve(this.size)}}class Bj extends aR{constructor(e){super(),this.ar=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.ar.addEntry(e,i)):this.ar.removeEntry(r)}),I.waitFor(n)}getFromCache(e,n){return this.ar.getEntry(e,n)}getAllFromCache(e,n){return this.ar.getEntries(e,n)}}/**
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
 */class qj{constructor(e){this.persistence=e,this.Mr=new yi(n=>as(n),Du),this.lastRemoteSnapshotVersion=z.min(),this.highestTargetId=0,this.Or=0,this.Nr=new Yy,this.targetCount=0,this.Br=hs.Nn()}forEachTarget(e,n){return this.Mr.forEach((r,i)=>n(i)),I.resolve()}getLastRemoteSnapshotVersion(e){return I.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return I.resolve(this.Or)}allocateTargetId(e){return this.highestTargetId=this.Br.next(),I.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Or&&(this.Or=n),I.resolve()}qn(e){this.Mr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Br=new hs(n),this.highestTargetId=n),e.sequenceNumber>this.Or&&(this.Or=e.sequenceNumber)}addTargetData(e,n){return this.qn(n),this.targetCount+=1,I.resolve()}updateTargetData(e,n){return this.qn(n),I.resolve()}removeTargetData(e,n){return this.Mr.delete(n.target),this.Nr.Vr(n.targetId),this.targetCount-=1,I.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Mr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Mr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),I.waitFor(s).next(()=>i)}getTargetCount(e){return I.resolve(this.targetCount)}getTargetData(e,n){const r=this.Mr.get(n)||null;return I.resolve(r)}addMatchingKeys(e,n,r){return this.Nr.dr(n,r),I.resolve()}removeMatchingKeys(e,n,r){this.Nr.Rr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),I.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Nr.Vr(n),I.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Nr.gr(n);return I.resolve(r)}containsKey(e,n){return I.resolve(this.Nr.containsKey(n))}}/**
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
 */class cR{constructor(e,n){this.Lr={},this.overlays={},this.kr=new Vt(0),this.qr=!1,this.qr=!0,this.referenceDelegate=e(this),this.Qr=new qj(this),this.indexManager=new Rj,this.remoteDocumentCache=function(i){return new zj(i)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new eR(n),this.$r=new jj(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new Uj,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Lr[e.toKey()];return r||(r=new $j(n,this.referenceDelegate),this.Lr[e.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(e,n,r){P("MemoryPersistence","Starting transaction:",e);const i=new Wj(this.kr.next());return this.referenceDelegate.Ur(),r(i).next(s=>this.referenceDelegate.Wr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Gr(e,n){return I.or(Object.values(this.Lr).map(r=>()=>r.containsKey(e,n)))}}class Wj extends iP{constructor(e){super(),this.currentSequenceNumber=e}}class uf{constructor(e){this.persistence=e,this.zr=new Yy,this.jr=null}static Hr(e){return new uf(e)}get Jr(){if(this.jr)return this.jr;throw V()}addReference(e,n,r){return this.zr.addReference(r,n),this.Jr.delete(r.toString()),I.resolve()}removeReference(e,n,r){return this.zr.removeReference(r,n),this.Jr.add(r.toString()),I.resolve()}markPotentiallyOrphaned(e,n){return this.Jr.add(n.toString()),I.resolve()}removeTarget(e,n){this.zr.Vr(n.targetId).forEach(i=>this.Jr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Jr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Ur(){this.jr=new Set}Wr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return I.forEach(this.Jr,r=>{const i=N.fromPath(r);return this.Yr(e,i).next(s=>{s||n.removeEntry(i,z.min())})}).next(()=>(this.jr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Yr(e,n).next(r=>{r?this.Jr.delete(n.toString()):this.Jr.add(n.toString())})}Kr(e){return 0}Yr(e,n){return I.or([()=>I.resolve(this.zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Gr(e,n)])}}/**
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
 */class Gj{constructor(e){this.serializer=e}N(e,n,r,i){const s=new nf("createOrUpgrade",n);r<1&&i>=1&&(function(l){l.createObjectStore("owner")}(e),function(l){l.createObjectStore("mutationQueues",{keyPath:"userId"}),l.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",II,{unique:!0}),l.createObjectStore("documentMutations")}(e),aE(e),function(l){l.createObjectStore("remoteDocuments")}(e));let o=I.resolve();return r<3&&i>=3&&(r!==0&&(function(l){l.deleteObjectStore("targetDocuments"),l.deleteObjectStore("targets"),l.deleteObjectStore("targetGlobal")}(e),aE(e)),o=o.next(()=>function(l){const u=l.store("targetGlobal"),c={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:z.min().toTimestamp(),targetCount:0};return u.put("targetGlobalKey",c)}(s))),r<4&&i>=4&&(r!==0&&(o=o.next(()=>function(l,u){return u.store("mutations").W().next(c=>{l.deleteObjectStore("mutations"),l.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",II,{unique:!0});const d=u.store("mutations"),h=c.map(f=>d.put(f));return I.waitFor(h)})}(e,s))),o=o.next(()=>{(function(l){l.createObjectStore("clientMetadata",{keyPath:"clientId"})})(e)})),r<5&&i>=5&&(o=o.next(()=>this.Xr(s))),r<6&&i>=6&&(o=o.next(()=>(function(l){l.createObjectStore("remoteDocumentGlobal")}(e),this.ei(s)))),r<7&&i>=7&&(o=o.next(()=>this.ti(s))),r<8&&i>=8&&(o=o.next(()=>this.ni(e,s))),r<9&&i>=9&&(o=o.next(()=>{(function(l){l.objectStoreNames.contains("remoteDocumentChanges")&&l.deleteObjectStore("remoteDocumentChanges")})(e)})),r<10&&i>=10&&(o=o.next(()=>this.ri(s))),r<11&&i>=11&&(o=o.next(()=>{(function(l){l.createObjectStore("bundles",{keyPath:"bundleId"})})(e),function(l){l.createObjectStore("namedQueries",{keyPath:"name"})}(e)})),r<12&&i>=12&&(o=o.next(()=>{(function(l){const u=l.createObjectStore("documentOverlays",{keyPath:b5});u.createIndex("collectionPathOverlayIndex",C5,{unique:!1}),u.createIndex("collectionGroupOverlayIndex",x5,{unique:!1})})(e)})),r<13&&i>=13&&(o=o.next(()=>function(l){const u=l.createObjectStore("remoteDocumentsV14",{keyPath:y5});u.createIndex("documentKeyIndex",_5),u.createIndex("collectionGroupIndex",w5)}(e)).next(()=>this.ii(e,s)).next(()=>e.deleteObjectStore("remoteDocuments"))),r<14&&i>=14&&(o=o.next(()=>this.si(e,s))),r<15&&i>=15&&(o=o.next(()=>function(l){l.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),l.createObjectStore("indexState",{keyPath:A5}).createIndex("sequenceNumberIndex",k5,{unique:!1}),l.createObjectStore("indexEntries",{keyPath:P5}).createIndex("documentKeyIndex",R5,{unique:!1})}(e))),o}ei(e){let n=0;return e.store("remoteDocuments").Y((r,i)=>{n+=Jd(i)}).next(()=>{const r={byteSize:n};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",r)})}Xr(e){const n=e.store("mutationQueues"),r=e.store("mutations");return n.W().next(i=>I.forEach(i,s=>{const o=IDBKeyRange.bound([s.userId,-1],[s.userId,s.lastAcknowledgedBatchId]);return r.W("userMutationsIndex",o).next(a=>I.forEach(a,l=>{$(l.userId===s.userId);const u=Ri(this.serializer,l);return iR(e,s.userId,u).next(()=>{})}))}))}ti(e){const n=e.store("targetDocuments"),r=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next(i=>{const s=[];return r.Y((o,a)=>{const l=new ee(o),u=function(d){return[0,kt(d)]}(l);s.push(n.get(u).next(c=>c?I.resolve():(d=>n.put({targetId:0,path:kt(d),sequenceNumber:i.highestListenSequenceNumber}))(l)))}).next(()=>I.waitFor(s))})}ni(e,n){e.createObjectStore("collectionParents",{keyPath:S5});const r=n.store("collectionParents"),i=new Qy,s=o=>{if(i.add(o)){const a=o.lastSegment(),l=o.popLast();return r.put({collectionId:a,parent:kt(l)})}};return n.store("remoteDocuments").Y({J:!0},(o,a)=>{const l=new ee(o);return s(l.popLast())}).next(()=>n.store("documentMutations").Y({J:!0},([o,a,l],u)=>{const c=Dn(a);return s(c.popLast())}))}ri(e){const n=e.store("targets");return n.Y((r,i)=>{const s=Fa(i),o=tR(this.serializer,s);return n.put(o)})}ii(e,n){const r=n.store("remoteDocuments"),i=[];return r.Y((s,o)=>{const a=n.store("remoteDocumentsV14"),l=function(d){return d.document?new N(ee.fromString(d.document.name).popFirst(5)):d.noDocument?N.fromSegments(d.noDocument.path):d.unknownDocument?N.fromSegments(d.unknownDocument.path):V()}(o).path.toArray(),u={prefixPath:l.slice(0,l.length-2),collectionGroup:l[l.length-2],documentId:l[l.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};i.push(a.put(u))}).next(()=>I.waitFor(i))}si(e,n){const r=n.store("mutations"),i=lR(this.serializer),s=new cR(uf.Hr,this.serializer.ct);return r.W().next(o=>{const a=new Map;return o.forEach(l=>{var u;let c=(u=a.get(l.userId))!==null&&u!==void 0?u:K();Ri(this.serializer,l).keys().forEach(d=>c=c.add(d)),a.set(l.userId,c)}),I.forEach(a,(l,u)=>{const c=new Ye(u),d=af.lt(this.serializer,c),h=s.getIndexManager(c),f=lf.lt(c,this.serializer,h,s.referenceDelegate);return new uR(i,f,d,h).recalculateAndSaveOverlaysForDocumentKeys(new ag(n,Vt._e),l).next()})})}}function aE(t){t.createObjectStore("targetDocuments",{keyPath:E5}).createIndex("documentTargetsIndex",T5,{unique:!0}),t.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",I5,{unique:!0}),t.createObjectStore("targetGlobal")}const Sp="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class Xy{constructor(e,n,r,i,s,o,a,l,u,c,d=15){if(this.allowTabSynchronization=e,this.persistenceKey=n,this.clientId=r,this.oi=s,this.window=o,this.document=a,this._i=u,this.ai=c,this.ui=d,this.kr=null,this.qr=!1,this.isPrimary=!1,this.networkEnabled=!0,this.ci=null,this.inForeground=!1,this.li=null,this.hi=null,this.Pi=Number.NEGATIVE_INFINITY,this.Ii=h=>Promise.resolve(),!Xy.D())throw new k(T.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new Vj(this,i),this.Ti=n+"main",this.serializer=new eR(l),this.Ei=new nn(this.Ti,this.ui,new Gj(this.serializer)),this.Qr=new Cj(this.referenceDelegate,this.serializer),this.remoteDocumentCache=lR(this.serializer),this.$r=new Ej,this.window&&this.window.localStorage?this.di=this.window.localStorage:(this.di=null,c===!1&&Me("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.Ai().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new k(T.FAILED_PRECONDITION,Sp);return this.Ri(),this.Vi(),this.mi(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.Qr.getHighestSequenceNumber(e))}).then(e=>{this.kr=new Vt(e,this._i)}).then(()=>{this.qr=!0}).catch(e=>(this.Ei&&this.Ei.close(),Promise.reject(e)))}fi(e){return this.Ii=async n=>{if(this.started)return e(n)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.Ei.L(async n=>{n.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.oi.enqueueAndForget(async()=>{this.started&&await this.Ai()}))}Ai(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>Rc(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.gi(e).next(n=>{n||(this.isPrimary=!1,this.oi.enqueueRetryable(()=>this.Ii(!1)))})}).next(()=>this.pi(e)).next(n=>this.isPrimary&&!n?this.yi(e).next(()=>!1):!!n&&this.wi(e).next(()=>!0))).catch(e=>{if(vi(e))return P("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return P("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.oi.enqueueRetryable(()=>this.Ii(e)),this.isPrimary=e})}gi(e){return Aa(e).get("owner").next(n=>I.resolve(this.Si(n)))}bi(e){return Rc(e).delete(this.clientId)}async Di(){if(this.isPrimary&&!this.Ci(this.Pi,18e5)){this.Pi=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",n=>{const r=tt(n,"clientMetadata");return r.W().next(i=>{const s=this.vi(i,18e5),o=i.filter(a=>s.indexOf(a)===-1);return I.forEach(o,a=>r.delete(a.clientId)).next(()=>o)})}).catch(()=>[]);if(this.di)for(const n of e)this.di.removeItem(this.Fi(n.clientId))}}mi(){this.hi=this.oi.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.Ai().then(()=>this.Di()).then(()=>this.mi()))}Si(e){return!!e&&e.ownerId===this.clientId}pi(e){return this.ai?I.resolve(!0):Aa(e).get("owner").next(n=>{if(n!==null&&this.Ci(n.leaseTimestampMs,5e3)&&!this.Mi(n.ownerId)){if(this.Si(n)&&this.networkEnabled)return!0;if(!this.Si(n)){if(!n.allowTabSynchronization)throw new k(T.FAILED_PRECONDITION,Sp);return!1}}return!(!this.networkEnabled||!this.inForeground)||Rc(e).W().next(r=>this.vi(r,5e3).find(i=>{if(this.clientId!==i.clientId){const s=!this.networkEnabled&&i.networkEnabled,o=!this.inForeground&&i.inForeground,a=this.networkEnabled===i.networkEnabled;if(s||o&&a)return!0}return!1})===void 0)}).next(n=>(this.isPrimary!==n&&P("IndexedDbPersistence",`Client ${n?"is":"is not"} eligible for a primary lease.`),n))}async shutdown(){this.qr=!1,this.xi(),this.hi&&(this.hi.cancel(),this.hi=null),this.Oi(),this.Ni(),await this.Ei.runTransaction("shutdown","readwrite",["owner","clientMetadata"],e=>{const n=new ag(e,Vt._e);return this.yi(n).next(()=>this.bi(n))}),this.Ei.close(),this.Bi()}vi(e,n){return e.filter(r=>this.Ci(r.updateTimeMs,n)&&!this.Mi(r.clientId))}Li(){return this.runTransaction("getActiveClients","readonly",e=>Rc(e).W().next(n=>this.vi(n,18e5).map(r=>r.clientId)))}get started(){return this.qr}getMutationQueue(e,n){return lf.lt(e,this.serializer,n,this.referenceDelegate)}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new bj(e,this.serializer.ct.databaseId)}getDocumentOverlayCache(e){return af.lt(this.serializer,e)}getBundleCache(){return this.$r}runTransaction(e,n,r){P("IndexedDbPersistence","Starting transaction:",e);const i=n==="readonly"?"readonly":"readwrite",s=function(l){return l===15?D5:l===14?uP:l===13?lP:l===12?N5:l===11?aP:void V()}(this.ui);let o;return this.Ei.runTransaction(e,i,s,a=>(o=new ag(a,this.kr?this.kr.next():Vt._e),n==="readwrite-primary"?this.gi(o).next(l=>!!l||this.pi(o)).next(l=>{if(!l)throw Me(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.oi.enqueueRetryable(()=>this.Ii(!1)),new k(T.FAILED_PRECONDITION,rP);return r(o)}).next(l=>this.wi(o).next(()=>l)):this.ki(o).next(()=>r(o)))).then(a=>(o.raiseOnCommittedEvent(),a))}ki(e){return Aa(e).get("owner").next(n=>{if(n!==null&&this.Ci(n.leaseTimestampMs,5e3)&&!this.Mi(n.ownerId)&&!this.Si(n)&&!(this.ai||this.allowTabSynchronization&&n.allowTabSynchronization))throw new k(T.FAILED_PRECONDITION,Sp)})}wi(e){const n={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return Aa(e).put("owner",n)}static D(){return nn.D()}yi(e){const n=Aa(e);return n.get("owner").next(r=>this.Si(r)?(P("IndexedDbPersistence","Releasing primary lease."),n.delete("owner")):I.resolve())}Ci(e,n){const r=Date.now();return!(e<r-n)&&(!(e>r)||(Me(`Detected an update time that is in the future: ${e} > ${r}`),!1))}Ri(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.li=()=>{this.oi.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.Ai()))},this.document.addEventListener("visibilitychange",this.li),this.inForeground=this.document.visibilityState==="visible")}Oi(){this.li&&(this.document.removeEventListener("visibilitychange",this.li),this.li=null)}Vi(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.ci=()=>{this.xi();const n=/(?:Version|Mobile)\/1[456]/;US()&&(navigator.appVersion.match(n)||navigator.userAgent.match(n))&&this.oi.enterRestrictedMode(!0),this.oi.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.ci))}Ni(){this.ci&&(this.window.removeEventListener("pagehide",this.ci),this.ci=null)}Mi(e){var n;try{const r=((n=this.di)===null||n===void 0?void 0:n.getItem(this.Fi(e)))!==null;return P("IndexedDbPersistence",`Client '${e}' ${r?"is":"is not"} zombied in LocalStorage`),r}catch(r){return Me("IndexedDbPersistence","Failed to get zombied client id.",r),!1}}xi(){if(this.di)try{this.di.setItem(this.Fi(this.clientId),String(Date.now()))}catch(e){Me("Failed to set zombie client id.",e)}}Bi(){if(this.di)try{this.di.removeItem(this.Fi(this.clientId))}catch{}}Fi(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function Aa(t){return tt(t,"owner")}function Rc(t){return tt(t,"clientMetadata")}function Jy(t,e){let n=t.projectId;return t.isDefaultDatabase||(n+="."+t.database),"firestore/"+e+"/"+n+"/"}/**
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
 */class Zy{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.qi=r,this.Qi=i}static Ki(e,n){let r=K(),i=K();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Zy(e,n.fromCache,r,i)}}/**
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
 */class Kj{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class dR{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return US()?8:nn.v(Ee())>0?6:4}()}initialize(e,n){this.zi=e,this.indexManager=n,this.$i=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.ji(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Hi(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new Kj;return this.Ji(e,n,o).next(a=>{if(s.result=a,this.Ui)return this.Yi(e,n,o,a.size)})}).next(()=>s.result)}Yi(e,n,r,i){return r.documentReadCount<this.Wi?(Os()<=J.DEBUG&&P("QueryEngine","SDK will not create cache indexes for query:",Vs(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),I.resolve()):(Os()<=J.DEBUG&&P("QueryEngine","Query:",Vs(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Gi*i?(Os()<=J.DEBUG&&P("QueryEngine","The SDK decides to create cache indexes for query:",Vs(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Pt(n))):I.resolve())}ji(e,n){if(DI(n))return I.resolve(null);let r=Pt(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Qd(n,null,"F"),r=Pt(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=K(...s);return this.zi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.Zi(n,a);return this.Xi(n,u,o,l.readTime)?this.ji(e,Qd(n,null,"F")):this.es(e,u,n,l)}))})))}Hi(e,n,r,i){return DI(n)||i.isEqual(z.min())?I.resolve(null):this.zi.getDocuments(e,r).next(s=>{const o=this.Zi(n,s);return this.Xi(n,o,r,i)?I.resolve(null):(Os()<=J.DEBUG&&P("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Vs(n)),this.es(e,o,n,tP(i,-1)).next(a=>a))})}Zi(e,n){let r=new ue(SP(e));return n.forEach((i,s)=>{Vu(e,s)&&(r=r.add(s))}),r}Xi(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Ji(e,n,r){return Os()<=J.DEBUG&&P("QueryEngine","Using full collection scan to execute query:",Vs(n)),this.zi.getDocumentsMatchingQuery(e,n,Ht.min(),r)}es(e,n,r,i){return this.zi.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class Hj{constructor(e,n,r,i){this.persistence=e,this.ts=n,this.serializer=i,this.ns=new de(W),this.rs=new yi(s=>as(s),Du),this.ss=new Map,this.os=e.getRemoteDocumentCache(),this.Qr=e.getTargetCache(),this.$r=e.getBundleCache(),this._s(r)}_s(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new uR(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ns))}}function hR(t,e,n,r){return new Hj(t,e,n,r)}async function fR(t,e){const n=D(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n._s(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=K();for(const u of i){o.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}for(const u of s){a.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}return n.localDocuments.getDocuments(r,l).next(u=>({us:u,removedBatchIds:o,addedBatchIds:a}))})})}function Qj(t,e){const n=D(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.os.newChangeBuffer({trackRemovals:!0});return function(a,l,u,c){const d=u.batch,h=d.keys();let f=I.resolve();return h.forEach(v=>{f=f.next(()=>c.getEntry(l,v)).next(y=>{const w=u.docVersions.get(v);$(w!==null),y.version.compareTo(w)<0&&(d.applyToRemoteDocument(y,u),y.isValidDocument()&&(y.setReadTime(u.commitVersion),c.addEntry(y)))})}),f.next(()=>a.mutationQueue.removeMutationBatch(l,d))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=K();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(l=l.add(a.batch.mutations[u].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function pR(t){const e=D(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Qr.getLastRemoteSnapshotVersion(n))}function Yj(t,e){const n=D(t),r=e.snapshotVersion;let i=n.ns;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.os.newChangeBuffer({trackRemovals:!0});i=n.ns;const a=[];e.targetChanges.forEach((c,d)=>{const h=i.get(d);if(!h)return;a.push(n.Qr.removeMatchingKeys(s,c.removedDocuments,d).next(()=>n.Qr.addMatchingKeys(s,c.addedDocuments,d)));let f=h.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(d)!==null?f=f.withResumeToken(Ge.EMPTY_BYTE_STRING,z.min()).withLastLimboFreeSnapshotVersion(z.min()):c.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(c.resumeToken,r)),i=i.insert(d,f),function(y,w,m){return y.resumeToken.approximateByteSize()===0||w.snapshotVersion.toMicroseconds()-y.snapshotVersion.toMicroseconds()>=3e8?!0:m.addedDocuments.size+m.modifiedDocuments.size+m.removedDocuments.size>0}(h,f,c)&&a.push(n.Qr.updateTargetData(s,f))});let l=Mt(),u=K();if(e.documentUpdates.forEach(c=>{e.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,c))}),a.push(mR(s,o,e.documentUpdates).next(c=>{l=c.cs,u=c.ls})),!r.isEqual(z.min())){const c=n.Qr.getLastRemoteSnapshotVersion(s).next(d=>n.Qr.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(c)}return I.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,u)).next(()=>l)}).then(s=>(n.ns=i,s))}function mR(t,e,n){let r=K(),i=K();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Mt();return n.forEach((a,l)=>{const u=s.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(z.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):P("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{cs:o,ls:i}})}function Xj(t,e){const n=D(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function Oo(t,e){const n=D(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Qr.getTargetData(r,e).next(s=>s?(i=s,I.resolve(i)):n.Qr.allocateTargetId(r).next(o=>(i=new Yn(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Qr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.ns.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.ns=n.ns.insert(r.targetId,r),n.rs.set(e,r.targetId)),r})}async function Vo(t,e,n){const r=D(t),i=r.ns.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!vi(o))throw o;P("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.ns=r.ns.remove(e),r.rs.delete(i.target)}function Zd(t,e,n){const r=D(t);let i=z.min(),s=K();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,u,c){const d=D(l),h=d.rs.get(c);return h!==void 0?I.resolve(d.ns.get(h)):d.Qr.getTargetData(u,c)}(r,o,Pt(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.ts.getDocumentsMatchingQuery(o,e,n?i:z.min(),n?s:K())).next(a=>(yR(r,TP(e),a),{documents:a,hs:s})))}function gR(t,e){const n=D(t),r=D(n.Qr),i=n.ns.get(e);return i?Promise.resolve(i.target):n.persistence.runTransaction("Get target data","readonly",s=>r._t(s,e).next(o=>o?o.target:null))}function vR(t,e){const n=D(t),r=n.ss.get(e)||z.min();return n.persistence.runTransaction("Get new document changes","readonly",i=>n.os.getAllFromCollectionGroup(i,e,tP(r,-1),Number.MAX_SAFE_INTEGER)).then(i=>(yR(n,e,i),i))}function yR(t,e,n){let r=t.ss.get(e)||z.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.ss.set(e,r)}async function Jj(t,e,n,r){const i=D(t);let s=K(),o=Mt();for(const u of n){const c=e.Ps(u.metadata.name);u.document&&(s=s.add(c));const d=e.Is(u);d.setReadTime(e.Ts(u.metadata.readTime)),o=o.insert(c,d)}const a=i.os.newChangeBuffer({trackRemovals:!0}),l=await Oo(i,function(c){return Pt(Zo(ee.fromString(`__bundle__/docs/${c}`)))}(r));return i.persistence.runTransaction("Apply bundle documents","readwrite",u=>mR(u,a,o).next(c=>(a.apply(u),c)).next(c=>i.Qr.removeMatchingKeysForTargetId(u,l.targetId).next(()=>i.Qr.addMatchingKeys(u,s,l.targetId)).next(()=>i.localDocuments.getLocalViewOfDocuments(u,c.cs,c.ls)).next(()=>c.cs)))}async function Zj(t,e,n=K()){const r=await Oo(t,Pt(Ky(e.bundledQuery))),i=D(t);return i.persistence.runTransaction("Save named query","readwrite",s=>{const o=Fe(e.readTime);if(r.snapshotVersion.compareTo(o)>=0)return i.$r.saveNamedQuery(s,e);const a=r.withResumeToken(Ge.EMPTY_BYTE_STRING,o);return i.ns=i.ns.insert(a.targetId,a),i.Qr.updateTargetData(s,a).next(()=>i.Qr.removeMatchingKeysForTargetId(s,r.targetId)).next(()=>i.Qr.addMatchingKeys(s,n,r.targetId)).next(()=>i.$r.saveNamedQuery(s,e))})}function lE(t,e){return`firestore_clients_${t}_${e}`}function uE(t,e,n){let r=`firestore_mutations_${t}_${n}`;return e.isAuthenticated()&&(r+=`_${e.uid}`),r}function Ap(t,e){return`firestore_targets_${t}_${e}`}class eh{constructor(e,n,r,i){this.user=e,this.batchId=n,this.state=r,this.error=i}static Es(e,n,r){const i=JSON.parse(r);let s,o=typeof i=="object"&&["pending","acknowledged","rejected"].indexOf(i.state)!==-1&&(i.error===void 0||typeof i.error=="object");return o&&i.error&&(o=typeof i.error.message=="string"&&typeof i.error.code=="string",o&&(s=new k(i.error.code,i.error.message))),o?new eh(e,n,i.state,s):(Me("SharedClientState",`Failed to parse mutation state for ID '${n}': ${r}`),null)}ds(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class il{constructor(e,n,r){this.targetId=e,this.state=n,this.error=r}static Es(e,n){const r=JSON.parse(n);let i,s=typeof r=="object"&&["not-current","current","rejected"].indexOf(r.state)!==-1&&(r.error===void 0||typeof r.error=="object");return s&&r.error&&(s=typeof r.error.message=="string"&&typeof r.error.code=="string",s&&(i=new k(r.error.code,r.error.message))),s?new il(e,r.state,i):(Me("SharedClientState",`Failed to parse target state for ID '${e}': ${n}`),null)}ds(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class th{constructor(e,n){this.clientId=e,this.activeTargetIds=n}static Es(e,n){const r=JSON.parse(n);let i=typeof r=="object"&&r.activeTargetIds instanceof Array,s=Uy();for(let o=0;i&&o<r.activeTargetIds.length;++o)i=sP(r.activeTargetIds[o]),s=s.add(r.activeTargetIds[o]);return i?new th(e,s):(Me("SharedClientState",`Failed to parse client data for instance '${e}': ${n}`),null)}}class e_{constructor(e,n){this.clientId=e,this.onlineState=n}static Es(e){const n=JSON.parse(e);return typeof n=="object"&&["Unknown","Online","Offline"].indexOf(n.onlineState)!==-1&&typeof n.clientId=="string"?new e_(n.clientId,n.onlineState):(Me("SharedClientState",`Failed to parse online state: ${e}`),null)}}class Ig{constructor(){this.activeTargetIds=Uy()}As(e){this.activeTargetIds=this.activeTargetIds.add(e)}Rs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ds(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class kp{constructor(e,n,r,i,s){this.window=e,this.oi=n,this.persistenceKey=r,this.Vs=i,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.fs=this.gs.bind(this),this.ps=new de(W),this.started=!1,this.ys=[];const o=r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=s,this.ws=lE(this.persistenceKey,this.Vs),this.Ss=function(l){return`firestore_sequence_number_${l}`}(this.persistenceKey),this.ps=this.ps.insert(this.Vs,new Ig),this.bs=new RegExp(`^firestore_clients_${o}_([^_]*)$`),this.Ds=new RegExp(`^firestore_mutations_${o}_(\\d+)(?:_(.*))?$`),this.Cs=new RegExp(`^firestore_targets_${o}_(\\d+)$`),this.vs=function(l){return`firestore_online_state_${l}`}(this.persistenceKey),this.Fs=function(l){return`firestore_bundle_loaded_v2_${l}`}(this.persistenceKey),this.window.addEventListener("storage",this.fs)}static D(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.Li();for(const r of e){if(r===this.Vs)continue;const i=this.getItem(lE(this.persistenceKey,r));if(i){const s=th.Es(r,i);s&&(this.ps=this.ps.insert(s.clientId,s))}}this.Ms();const n=this.storage.getItem(this.vs);if(n){const r=this.xs(n);r&&this.Os(r)}for(const r of this.ys)this.gs(r);this.ys=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.Ss,JSON.stringify(e))}getAllActiveQueryTargets(){return this.Ns(this.ps)}isActiveQueryTarget(e){let n=!1;return this.ps.forEach((r,i)=>{i.activeTargetIds.has(e)&&(n=!0)}),n}addPendingMutation(e){this.Bs(e,"pending")}updateMutationState(e,n,r){this.Bs(e,n,r),this.Ls(e)}addLocalQueryTarget(e){let n="not-current";if(this.isActiveQueryTarget(e)){const r=this.storage.getItem(Ap(this.persistenceKey,e));if(r){const i=il.Es(e,r);i&&(n=i.state)}}return this.ks.As(e),this.Ms(),n}removeLocalQueryTarget(e){this.ks.Rs(e),this.Ms()}isLocalQueryTarget(e){return this.ks.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(Ap(this.persistenceKey,e))}updateQueryState(e,n,r){this.qs(e,n,r)}handleUserChange(e,n,r){n.forEach(i=>{this.Ls(i)}),this.currentUser=e,r.forEach(i=>{this.addPendingMutation(i)})}setOnlineState(e){this.Qs(e)}notifyBundleLoaded(e){this.Ks(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.fs),this.removeItem(this.ws),this.started=!1)}getItem(e){const n=this.storage.getItem(e);return P("SharedClientState","READ",e,n),n}setItem(e,n){P("SharedClientState","SET",e,n),this.storage.setItem(e,n)}removeItem(e){P("SharedClientState","REMOVE",e),this.storage.removeItem(e)}gs(e){const n=e;if(n.storageArea===this.storage){if(P("SharedClientState","EVENT",n.key,n.newValue),n.key===this.ws)return void Me("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.oi.enqueueRetryable(async()=>{if(this.started){if(n.key!==null){if(this.bs.test(n.key)){if(n.newValue==null){const r=this.$s(n.key);return this.Us(r,null)}{const r=this.Ws(n.key,n.newValue);if(r)return this.Us(r.clientId,r)}}else if(this.Ds.test(n.key)){if(n.newValue!==null){const r=this.Gs(n.key,n.newValue);if(r)return this.zs(r)}}else if(this.Cs.test(n.key)){if(n.newValue!==null){const r=this.js(n.key,n.newValue);if(r)return this.Hs(r)}}else if(n.key===this.vs){if(n.newValue!==null){const r=this.xs(n.newValue);if(r)return this.Os(r)}}else if(n.key===this.Ss){const r=function(s){let o=Vt._e;if(s!=null)try{const a=JSON.parse(s);$(typeof a=="number"),o=a}catch(a){Me("SharedClientState","Failed to read sequence number from WebStorage",a)}return o}(n.newValue);r!==Vt._e&&this.sequenceNumberHandler(r)}else if(n.key===this.Fs){const r=this.Js(n.newValue);await Promise.all(r.map(i=>this.syncEngine.Ys(i)))}}}else this.ys.push(n)})}}get ks(){return this.ps.get(this.Vs)}Ms(){this.setItem(this.ws,this.ks.ds())}Bs(e,n,r){const i=new eh(this.currentUser,e,n,r),s=uE(this.persistenceKey,this.currentUser,e);this.setItem(s,i.ds())}Ls(e){const n=uE(this.persistenceKey,this.currentUser,e);this.removeItem(n)}Qs(e){const n={clientId:this.Vs,onlineState:e};this.storage.setItem(this.vs,JSON.stringify(n))}qs(e,n,r){const i=Ap(this.persistenceKey,e),s=new il(e,n,r);this.setItem(i,s.ds())}Ks(e){const n=JSON.stringify(Array.from(e));this.setItem(this.Fs,n)}$s(e){const n=this.bs.exec(e);return n?n[1]:null}Ws(e,n){const r=this.$s(e);return th.Es(r,n)}Gs(e,n){const r=this.Ds.exec(e),i=Number(r[1]),s=r[2]!==void 0?r[2]:null;return eh.Es(new Ye(s),i,n)}js(e,n){const r=this.Cs.exec(e),i=Number(r[1]);return il.Es(i,n)}xs(e){return e_.Es(e)}Js(e){return JSON.parse(e)}async zs(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.Zs(e.batchId,e.state,e.error);P("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}Hs(e){return this.syncEngine.Xs(e.targetId,e.state,e.error)}Us(e,n){const r=n?this.ps.insert(e,n):this.ps.remove(e),i=this.Ns(this.ps),s=this.Ns(r),o=[],a=[];return s.forEach(l=>{i.has(l)||o.push(l)}),i.forEach(l=>{s.has(l)||a.push(l)}),this.syncEngine.eo(o,a).then(()=>{this.ps=r})}Os(e){this.ps.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}Ns(e){let n=Uy();return e.forEach((r,i)=>{n=n.unionWith(i.activeTargetIds)}),n}}class _R{constructor(){this.no=new Ig,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.no.As(e),this.ro[e]||"not-current"}updateQueryState(e,n,r){this.ro[e]=n}removeLocalQueryTarget(e){this.no.Rs(e)}isLocalQueryTarget(e){return this.no.activeTargetIds.has(e)}clearQueryState(e){delete this.ro[e]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(e){return this.no.activeTargetIds.has(e)}start(){return this.no=new Ig,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class e6{io(e){}shutdown(){}}/**
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
 */class cE{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(e){this.uo.push(e)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){P("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.uo)e(0)}ao(){P("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.uo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let bc=null;function Pp(){return bc===null?bc=function(){return 268435456+Math.round(2147483648*Math.random())}():bc++,"0x"+bc.toString(16)}/**
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
 */const t6={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class n6{constructor(e){this.lo=e.lo,this.ho=e.ho}Po(e){this.Io=e}To(e){this.Eo=e}onMessage(e){this.Ao=e}close(){this.ho()}send(e){this.lo(e)}Ro(){this.Io()}Vo(e){this.Eo(e)}mo(e){this.Ao(e)}}/**
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
 */const mt="WebChannelConnection";class r6 extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.fo=r+"://"+n.host,this.po=`projects/${i}/databases/${s}`,this.yo=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get wo(){return!1}So(n,r,i,s,o){const a=Pp(),l=this.bo(n,r.toUriEncodedString());P("RestConnection",`Sending RPC '${n}' ${a}:`,l,i);const u={"google-cloud-resource-prefix":this.po,"x-goog-request-params":this.yo};return this.Do(u,s,o),this.Co(n,l,u,i).then(c=>(P("RestConnection",`Received RPC '${n}' ${a}: `,c),c),c=>{throw wn("RestConnection",`RPC '${n}' ${a} failed with error: `,c,"url: ",l,"request:",i),c})}vo(n,r,i,s,o,a){return this.So(n,r,i,s,o)}Do(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Jo}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}bo(n,r){const i=t6[n];return`${this.fo}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Co(e,n,r,i){const s=Pp();return new Promise((o,a)=>{const l=new Z3;l.setWithCredentials(!0),l.listenOnce(X3.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Ep.NO_ERROR:const c=l.getResponseJson();P(mt,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(c)),o(c);break;case Ep.TIMEOUT:P(mt,`RPC '${e}' ${s} timed out`),a(new k(T.DEADLINE_EXCEEDED,"Request time out"));break;case Ep.HTTP_ERROR:const d=l.getStatus();if(P(mt,`RPC '${e}' ${s} failed with status:`,d,"response text:",l.getResponseText()),d>0){let h=l.getResponseJson();Array.isArray(h)&&(h=h[0]);const f=h==null?void 0:h.error;if(f&&f.status&&f.message){const v=function(w){const m=w.toLowerCase().replace(/_/g,"-");return Object.values(T).indexOf(m)>=0?m:T.UNKNOWN}(f.status);a(new k(v,f.message))}else a(new k(T.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new k(T.UNAVAILABLE,"Connection failed."));break;default:V()}}finally{P(mt,`RPC '${e}' ${s} completed.`)}});const u=JSON.stringify(i);P(mt,`RPC '${e}' ${s} sending request:`,i),l.send(n,"POST",u,r,15)})}Fo(e,n,r){const i=Pp(),s=[this.fo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=Q3(),a=Y3(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Do(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const c=s.join("");P(mt,`Creating RPC '${e}' stream ${i}: ${c}`,l);const d=o.createWebChannel(c,l);let h=!1,f=!1;const v=new n6({lo:w=>{f?P(mt,`Not sending because RPC '${e}' stream ${i} is closed:`,w):(h||(P(mt,`Opening RPC '${e}' stream ${i} transport.`),d.open(),h=!0),P(mt,`RPC '${e}' stream ${i} sending:`,w),d.send(w))},ho:()=>d.close()}),y=(w,m,p)=>{w.listen(m,_=>{try{p(_)}catch(E){setTimeout(()=>{throw E},0)}})};return y(d,Sc.EventType.OPEN,()=>{f||P(mt,`RPC '${e}' stream ${i} transport opened.`)}),y(d,Sc.EventType.CLOSE,()=>{f||(f=!0,P(mt,`RPC '${e}' stream ${i} transport closed`),v.Vo())}),y(d,Sc.EventType.ERROR,w=>{f||(f=!0,wn(mt,`RPC '${e}' stream ${i} transport errored:`,w),v.Vo(new k(T.UNAVAILABLE,"The operation could not be completed")))}),y(d,Sc.EventType.MESSAGE,w=>{var m;if(!f){const p=w.data[0];$(!!p);const _=p,E=_.error||((m=_[0])===null||m===void 0?void 0:m.error);if(E){P(mt,`RPC '${e}' stream ${i} received error:`,E);const S=E.status;let R=function(Z){const G=je[Z];if(G!==void 0)return FP(G)}(S),x=E.message;R===void 0&&(R=T.INTERNAL,x="Unknown error status: "+S+" with message "+E.message),f=!0,v.Vo(new k(R,x)),d.close()}else P(mt,`RPC '${e}' stream ${i} received:`,p),v.mo(p)}}),y(a,J3.STAT_EVENT,w=>{w.stat===vI.PROXY?P(mt,`RPC '${e}' stream ${i} detected buffering proxy`):w.stat===vI.NOPROXY&&P(mt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{v.Ro()},0),v}}/**
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
 */function wR(){return typeof window<"u"?window:null}function ed(){return typeof document<"u"?document:null}/**
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
 */function ju(t){return new dj(t,!0)}/**
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
 */class t_{constructor(e,n,r=1e3,i=1.5,s=6e4){this.oi=e,this.timerId=n,this.Mo=r,this.xo=i,this.Oo=s,this.No=0,this.Bo=null,this.Lo=Date.now(),this.reset()}reset(){this.No=0}ko(){this.No=this.Oo}qo(e){this.cancel();const n=Math.floor(this.No+this.Qo()),r=Math.max(0,Date.now()-this.Lo),i=Math.max(0,n-r);i>0&&P("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.No} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Bo=this.oi.enqueueAfterDelay(this.timerId,i,()=>(this.Lo=Date.now(),e())),this.No*=this.xo,this.No<this.Mo&&(this.No=this.Mo),this.No>this.Oo&&(this.No=this.Oo)}Ko(){this.Bo!==null&&(this.Bo.skipDelay(),this.Bo=null)}cancel(){this.Bo!==null&&(this.Bo.cancel(),this.Bo=null)}Qo(){return(Math.random()-.5)*this.No}}/**
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
 */class IR{constructor(e,n,r,i,s,o,a,l){this.oi=e,this.$o=r,this.Uo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Wo=0,this.Go=null,this.zo=null,this.stream=null,this.jo=new t_(e,n)}Ho(){return this.state===1||this.state===5||this.Jo()}Jo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Yo()}async stop(){this.Ho()&&await this.close(0)}Zo(){this.state=0,this.jo.reset()}Xo(){this.Jo()&&this.Go===null&&(this.Go=this.oi.enqueueAfterDelay(this.$o,6e4,()=>this.e_()))}t_(e){this.n_(),this.stream.send(e)}async e_(){if(this.Jo())return this.close(0)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}r_(){this.zo&&(this.zo.cancel(),this.zo=null)}async close(e,n){this.n_(),this.r_(),this.jo.cancel(),this.Wo++,e!==4?this.jo.reset():n&&n.code===T.RESOURCE_EXHAUSTED?(Me(n.toString()),Me("Using maximum backoff delay to prevent overloading the backend."),this.jo.ko()):n&&n.code===T.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.i_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.To(n)}i_(){}auth(){this.state=1;const e=this.s_(this.Wo),n=this.Wo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Wo===n&&this.o_(r,i)},r=>{e(()=>{const i=new k(T.UNKNOWN,"Fetching auth token failed: "+r.message);return this.__(i)})})}o_(e,n){const r=this.s_(this.Wo);this.stream=this.a_(e,n),this.stream.Po(()=>{r(()=>(this.state=2,this.zo=this.oi.enqueueAfterDelay(this.Uo,1e4,()=>(this.Jo()&&(this.state=3),Promise.resolve())),this.listener.Po()))}),this.stream.To(i=>{r(()=>this.__(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Yo(){this.state=5,this.jo.qo(async()=>{this.state=0,this.start()})}__(e){return P("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}s_(e){return n=>{this.oi.enqueueAndForget(()=>this.Wo===e?n():(P("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class i6 extends IR{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}a_(e,n){return this.connection.Fo("Listen",e,n)}onMessage(e){this.jo.reset();const n=pj(this.serializer,e),r=function(s){if(!("targetChange"in s))return z.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?z.min():o.readTime?Fe(o.readTime):z.min()}(e);return this.listener.u_(n,r)}c_(e){const n={};n.database=gg(this.serializer),n.addTarget=function(s,o){let a;const l=o.target;if(a=Kd(l)?{documents:HP(s,l)}:{query:QP(s,l).ut},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=zP(s,o.resumeToken);const u=pg(s,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo(z.min())>0){a.readTime=Do(s,o.snapshotVersion.toTimestamp());const u=pg(s,o.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,e);const r=gj(this.serializer,e);r&&(n.labels=r),this.t_(n)}l_(e){const n={};n.database=gg(this.serializer),n.removeTarget=e,this.t_(n)}}class s6 extends IR{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.h_=!1}get P_(){return this.h_}start(){this.h_=!1,this.lastStreamToken=void 0,super.start()}i_(){this.h_&&this.I_([])}a_(e,n){return this.connection.Fo("Write",e,n)}onMessage(e){if($(!!e.streamToken),this.lastStreamToken=e.streamToken,this.h_){this.jo.reset();const n=mj(e.writeResults,e.commitTime),r=Fe(e.commitTime);return this.listener.T_(r,n)}return $(!e.writeResults||e.writeResults.length===0),this.h_=!0,this.listener.E_()}d_(){const e={};e.database=gg(this.serializer),this.t_(e)}I_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>ru(this.serializer,r))};this.t_(n)}}/**
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
 */class o6 extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.A_=!1}R_(){if(this.A_)throw new k(T.FAILED_PRECONDITION,"The client has already been terminated.")}So(e,n,r,i){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.So(e,mg(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===T.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new k(T.UNKNOWN,s.toString())})}vo(e,n,r,i,s){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.vo(e,mg(n,r),i,o,a,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===T.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new k(T.UNKNOWN,o.toString())})}terminate(){this.A_=!0,this.connection.terminate()}}class a6{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.m_=0,this.f_=null,this.g_=!0}p_(){this.m_===0&&(this.y_("Unknown"),this.f_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.f_=null,this.w_("Backend didn't respond within 10 seconds."),this.y_("Offline"),Promise.resolve())))}S_(e){this.state==="Online"?this.y_("Unknown"):(this.m_++,this.m_>=1&&(this.b_(),this.w_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.y_("Offline")))}set(e){this.b_(),this.m_=0,e==="Online"&&(this.g_=!1),this.y_(e)}y_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}w_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.g_?(Me(n),this.g_=!1):P("OnlineStateTracker",n)}b_(){this.f_!==null&&(this.f_.cancel(),this.f_=null)}}/**
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
 */class l6{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.D_=[],this.C_=new Map,this.v_=new Set,this.F_=[],this.M_=s,this.M_.io(o=>{r.enqueueAndForget(async()=>{_i(this)&&(P("RemoteStore","Restarting streams for network reachability change."),await async function(l){const u=D(l);u.v_.add(4),await na(u),u.x_.set("Unknown"),u.v_.delete(4),await Uu(u)}(this))})}),this.x_=new a6(r,i)}}async function Uu(t){if(_i(t))for(const e of t.F_)await e(!0)}async function na(t){for(const e of t.F_)await e(!1)}function cf(t,e){const n=D(t);n.C_.has(e.targetId)||(n.C_.set(e.targetId,e),i_(n)?r_(n):ia(n).Jo()&&n_(n,e))}function iu(t,e){const n=D(t),r=ia(n);n.C_.delete(e),r.Jo()&&ER(n,e),n.C_.size===0&&(r.Jo()?r.Xo():_i(n)&&n.x_.set("Unknown"))}function n_(t,e){if(t.O_.Oe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(z.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}ia(t).c_(e)}function ER(t,e){t.O_.Oe(e),ia(t).l_(e)}function r_(t){t.O_=new aj({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),_t:e=>t.C_.get(e)||null,nt:()=>t.datastore.serializer.databaseId}),ia(t).start(),t.x_.p_()}function i_(t){return _i(t)&&!ia(t).Ho()&&t.C_.size>0}function _i(t){return D(t).v_.size===0}function TR(t){t.O_=void 0}async function u6(t){t.C_.forEach((e,n)=>{n_(t,e)})}async function c6(t,e){TR(t),i_(t)?(t.x_.S_(e),r_(t)):t.x_.set("Unknown")}async function d6(t,e,n){if(t.x_.set("Online"),e instanceof $P&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.C_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.C_.delete(a),i.O_.removeTarget(a))}(t,e)}catch(r){P("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await nh(t,r)}else if(e instanceof Zc?t.O_.$e(e):e instanceof UP?t.O_.Je(e):t.O_.Ge(e),!n.isEqual(z.min()))try{const r=await pR(t.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.O_.it(o);return a.targetChanges.forEach((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const c=s.C_.get(u);c&&s.C_.set(u,c.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,u)=>{const c=s.C_.get(l);if(!c)return;s.C_.set(l,c.withResumeToken(Ge.EMPTY_BYTE_STRING,c.snapshotVersion)),ER(s,l);const d=new Yn(c.target,l,u,c.sequenceNumber);n_(s,d)}),s.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){P("RemoteStore","Failed to raise snapshot:",r),await nh(t,r)}}async function nh(t,e,n){if(!vi(e))throw e;t.v_.add(1),await na(t),t.x_.set("Offline"),n||(n=()=>pR(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{P("RemoteStore","Retrying IndexedDB access"),await n(),t.v_.delete(1),await Uu(t)})}function SR(t,e){return e().catch(n=>nh(t,n,e))}async function ra(t){const e=D(t),n=oi(e);let r=e.D_.length>0?e.D_[e.D_.length-1].batchId:-1;for(;h6(e);)try{const i=await Xj(e.localStore,r);if(i===null){e.D_.length===0&&n.Xo();break}r=i.batchId,f6(e,i)}catch(i){await nh(e,i)}AR(e)&&kR(e)}function h6(t){return _i(t)&&t.D_.length<10}function f6(t,e){t.D_.push(e);const n=oi(t);n.Jo()&&n.P_&&n.I_(e.mutations)}function AR(t){return _i(t)&&!oi(t).Ho()&&t.D_.length>0}function kR(t){oi(t).start()}async function p6(t){oi(t).d_()}async function m6(t){const e=oi(t);for(const n of t.D_)e.I_(n.mutations)}async function g6(t,e,n){const r=t.D_.shift(),i=By.from(r,e,n);await SR(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await ra(t)}async function v6(t,e){e&&oi(t).P_&&await async function(r,i){if(function(o){return MP(o)&&o!==T.ABORTED}(i.code)){const s=r.D_.shift();oi(r).Zo(),await SR(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await ra(r)}}(t,e),AR(t)&&kR(t)}async function dE(t,e){const n=D(t);n.asyncQueue.verifyOperationInProgress(),P("RemoteStore","RemoteStore received new credentials");const r=_i(n);n.v_.add(3),await na(n),r&&n.x_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.v_.delete(3),await Uu(n)}async function Eg(t,e){const n=D(t);e?(n.v_.delete(2),await Uu(n)):e||(n.v_.add(2),await na(n),n.x_.set("Unknown"))}function ia(t){return t.N_||(t.N_=function(n,r,i){const s=D(n);return s.R_(),new i6(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Po:u6.bind(null,t),To:c6.bind(null,t),u_:d6.bind(null,t)}),t.F_.push(async e=>{e?(t.N_.Zo(),i_(t)?r_(t):t.x_.set("Unknown")):(await t.N_.stop(),TR(t))})),t.N_}function oi(t){return t.B_||(t.B_=function(n,r,i){const s=D(n);return s.R_(),new s6(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Po:p6.bind(null,t),To:v6.bind(null,t),E_:m6.bind(null,t),T_:g6.bind(null,t)}),t.F_.push(async e=>{e?(t.B_.Zo(),await ra(t)):(await t.B_.stop(),t.D_.length>0&&(P("RemoteStore",`Stopping write stream with ${t.D_.length} pending writes`),t.D_=[]))})),t.B_}/**
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
 */class s_{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Je,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new s_(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new k(T.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function sa(t,e){if(Me("AsyncQueue",`${e}: ${t}`),vi(t))return new k(T.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class go{constructor(e){this.comparator=e?(n,r)=>e(n,r)||N.comparator(n.key,r.key):(n,r)=>N.comparator(n.key,r.key),this.keyedMap=La(),this.sortedSet=new de(this.comparator)}static emptySet(e){return new go(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof go)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new go;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class hE{constructor(){this.L_=new de(N.comparator)}track(e){const n=e.doc.key,r=this.L_.get(n);r?e.type!==0&&r.type===3?this.L_=this.L_.insert(n,e):e.type===3&&r.type!==1?this.L_=this.L_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.L_=this.L_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.L_=this.L_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.L_=this.L_.remove(n):e.type===1&&r.type===2?this.L_=this.L_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.L_=this.L_.insert(n,{type:2,doc:e.doc}):V():this.L_=this.L_.insert(n,e)}k_(){const e=[];return this.L_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Lo{constructor(e,n,r,i,s,o,a,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Lo(e,n,go.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ou(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class y6{constructor(){this.q_=void 0,this.Q_=[]}}class _6{constructor(){this.queries=new yi(e=>EP(e),Ou),this.onlineState="Unknown",this.K_=new Set}}async function o_(t,e){const n=D(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new y6),i)try{s.q_=await n.onListen(r)}catch(o){const a=sa(o,`Initialization of query '${Vs(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.Q_.push(e),e.U_(n.onlineState),s.q_&&e.W_(s.q_)&&l_(n)}async function a_(t,e){const n=D(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.Q_.indexOf(e);o>=0&&(s.Q_.splice(o,1),i=s.Q_.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function w6(t,e){const n=D(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.Q_)a.W_(i)&&(r=!0);o.q_=i}}r&&l_(n)}function I6(t,e,n){const r=D(t),i=r.queries.get(e);if(i)for(const s of i.Q_)s.onError(n);r.queries.delete(e)}function l_(t){t.K_.forEach(e=>{e.next()})}class u_{constructor(e,n,r){this.query=e,this.G_=n,this.z_=!1,this.j_=null,this.onlineState="Unknown",this.options=r||{}}W_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Lo(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.z_?this.H_(e)&&(this.G_.next(e),n=!0):this.J_(e,this.onlineState)&&(this.Y_(e),n=!0),this.j_=e,n}onError(e){this.G_.error(e)}U_(e){this.onlineState=e;let n=!1;return this.j_&&!this.z_&&this.J_(this.j_,e)&&(this.Y_(this.j_),n=!0),n}J_(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.Z_||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}H_(e){if(e.docChanges.length>0)return!0;const n=this.j_&&this.j_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Y_(e){e=Lo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.z_=!0,this.G_.next(e)}}/**
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
 */class E6{constructor(e,n){this.X_=e,this.byteLength=n}ea(){return"metadata"in this.X_}}/**
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
 */class fE{constructor(e){this.serializer=e}Ps(e){return Fn(this.serializer,e)}Is(e){return e.metadata.exists?KP(this.serializer,e.document,!1):me.newNoDocument(this.Ps(e.metadata.name),this.Ts(e.metadata.readTime))}Ts(e){return Fe(e)}}class T6{constructor(e,n,r){this.ta=e,this.localStore=n,this.serializer=r,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=PR(e)}na(e){this.progress.bytesLoaded+=e.byteLength;let n=this.progress.documentsLoaded;if(e.X_.namedQuery)this.queries.push(e.X_.namedQuery);else if(e.X_.documentMetadata){this.documents.push({metadata:e.X_.documentMetadata}),e.X_.documentMetadata.exists||++n;const r=ee.fromString(e.X_.documentMetadata.name);this.collectionGroups.add(r.get(r.length-2))}else e.X_.document&&(this.documents[this.documents.length-1].document=e.X_.document,++n);return n!==this.progress.documentsLoaded?(this.progress.documentsLoaded=n,Object.assign({},this.progress)):null}ra(e){const n=new Map,r=new fE(this.serializer);for(const i of e)if(i.metadata.queries){const s=r.Ps(i.metadata.name);for(const o of i.metadata.queries){const a=(n.get(o)||K()).add(s);n.set(o,a)}}return n}async complete(){const e=await Jj(this.localStore,new fE(this.serializer),this.documents,this.ta.id),n=this.ra(this.documents);for(const r of this.queries)await Zj(this.localStore,r,n.get(r.name));return this.progress.taskState="Success",{progress:this.progress,ia:this.collectionGroups,sa:e}}}function PR(t){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:t.totalDocuments,totalBytes:t.totalBytes}}/**
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
 */class RR{constructor(e){this.key=e}}class bR{constructor(e){this.key=e}}class CR{constructor(e,n){this.query=e,this.oa=n,this._a=null,this.hasCachedResults=!1,this.current=!1,this.aa=K(),this.mutatedKeys=K(),this.ua=SP(e),this.ca=new go(this.ua)}get la(){return this.oa}ha(e,n){const r=n?n.Pa:new hE,i=n?n.ca:this.ca;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((c,d)=>{const h=i.get(c),f=Vu(this.query,d)?d:null,v=!!h&&this.mutatedKeys.has(h.key),y=!!f&&(f.hasLocalMutations||this.mutatedKeys.has(f.key)&&f.hasCommittedMutations);let w=!1;h&&f?h.data.isEqual(f.data)?v!==y&&(r.track({type:3,doc:f}),w=!0):this.Ia(h,f)||(r.track({type:2,doc:f}),w=!0,(l&&this.ua(f,l)>0||u&&this.ua(f,u)<0)&&(a=!0)):!h&&f?(r.track({type:0,doc:f}),w=!0):h&&!f&&(r.track({type:1,doc:h}),w=!0,(l||u)&&(a=!0)),w&&(f?(o=o.add(f),s=y?s.add(c):s.delete(c)):(o=o.delete(c),s=s.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),s=s.delete(c.key),r.track({type:1,doc:c})}return{ca:o,Pa:r,Xi:a,mutatedKeys:s}}Ia(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.ca;this.ca=e.ca,this.mutatedKeys=e.mutatedKeys;const o=e.Pa.k_();o.sort((c,d)=>function(f,v){const y=w=>{switch(w){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return V()}};return y(f)-y(v)}(c.type,d.type)||this.ua(c.doc,d.doc)),this.Ta(r),i=i!=null&&i;const a=n&&!i?this.Ea():[],l=this.aa.size===0&&this.current&&!i?1:0,u=l!==this._a;return this._a=l,o.length!==0||u?{snapshot:new Lo(this.query,e.ca,s,o,e.mutatedKeys,l===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),da:a}:{da:a}}U_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ca:this.ca,Pa:new hE,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{da:[]}}Aa(e){return!this.oa.has(e)&&!!this.ca.has(e)&&!this.ca.get(e).hasLocalMutations}Ta(e){e&&(e.addedDocuments.forEach(n=>this.oa=this.oa.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.oa=this.oa.delete(n)),this.current=e.current)}Ea(){if(!this.current)return[];const e=this.aa;this.aa=K(),this.ca.forEach(r=>{this.Aa(r.key)&&(this.aa=this.aa.add(r.key))});const n=[];return e.forEach(r=>{this.aa.has(r)||n.push(new bR(r))}),this.aa.forEach(r=>{e.has(r)||n.push(new RR(r))}),n}Ra(e){this.oa=e.hs,this.aa=K();const n=this.ha(e.documents);return this.applyChanges(n,!0)}Va(){return Lo.fromInitialDocuments(this.query,this.ca,this.mutatedKeys,this._a===0,this.hasCachedResults)}}class S6{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class A6{constructor(e){this.key=e,this.ma=!1}}class k6{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.fa={},this.ga=new yi(a=>EP(a),Ou),this.pa=new Map,this.ya=new Set,this.wa=new de(N.comparator),this.Sa=new Map,this.ba=new Yy,this.Da={},this.Ca=new Map,this.va=hs.Bn(),this.onlineState="Unknown",this.Fa=void 0}get isPrimaryClient(){return this.Fa===!0}}async function P6(t,e){const n=p_(t);let r,i;const s=n.ga.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.Va();else{const o=await Oo(n.localStore,Pt(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await c_(n,e,r,a==="current",o.resumeToken),n.isPrimaryClient&&cf(n.remoteStore,o)}return i}async function c_(t,e,n,r,i){t.Ma=(d,h,f)=>async function(y,w,m,p){let _=w.view.ha(m);_.Xi&&(_=await Zd(y.localStore,w.query,!1).then(({documents:x})=>w.view.ha(x,_)));const E=p&&p.targetChanges.get(w.targetId),S=p&&p.targetMismatches.get(w.targetId)!=null,R=w.view.applyChanges(_,y.isPrimaryClient,E,S);return Tg(y,w.targetId,R.da),R.snapshot}(t,d,h,f);const s=await Zd(t.localStore,e,!0),o=new CR(e,s.hs),a=o.ha(s.documents),l=Fu.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),u=o.applyChanges(a,t.isPrimaryClient,l);Tg(t,n,u.da);const c=new S6(e,n,o);return t.ga.set(e,c),t.pa.has(n)?t.pa.get(n).push(e):t.pa.set(n,[e]),u.snapshot}async function R6(t,e){const n=D(t),r=n.ga.get(e),i=n.pa.get(r.targetId);if(i.length>1)return n.pa.set(r.targetId,i.filter(s=>!Ou(s,e))),void n.ga.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Vo(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),iu(n.remoteStore,r.targetId),Mo(n,r.targetId)}).catch(gi)):(Mo(n,r.targetId),await Vo(n.localStore,r.targetId,!0))}async function b6(t,e,n){const r=m_(t);try{const i=await function(o,a){const l=D(o),u=Ie.now(),c=a.reduce((f,v)=>f.add(v.key),K());let d,h;return l.persistence.runTransaction("Locally write mutations","readwrite",f=>{let v=Mt(),y=K();return l.os.getEntries(f,c).next(w=>{v=w,v.forEach((m,p)=>{p.isValidDocument()||(y=y.add(m))})}).next(()=>l.localDocuments.getOverlayedDocuments(f,v)).next(w=>{d=w;const m=[];for(const p of a){const _=ij(p,d.get(p.key).overlayedDocument);_!=null&&m.push(new mr(p.key,_,fP(_.value.mapValue),we.exists(!0)))}return l.mutationQueue.addMutationBatch(f,u,m,a)}).next(w=>{h=w;const m=w.applyToLocalDocumentSet(d,y);return l.documentOverlayCache.saveOverlays(f,w.batchId,m)})}).then(()=>({batchId:h.batchId,changes:kP(d)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,l){let u=o.Da[o.currentUser.toKey()];u||(u=new de(W)),u=u.insert(a,l),o.Da[o.currentUser.toKey()]=u}(r,i.batchId,n),await gr(r,i.changes),await ra(r.remoteStore)}catch(i){const s=sa(i,"Failed to persist write");n.reject(s)}}async function xR(t,e){const n=D(t);try{const r=await Yj(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Sa.get(s);o&&($(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.ma=!0:i.modifiedDocuments.size>0?$(o.ma):i.removedDocuments.size>0&&($(o.ma),o.ma=!1))}),await gr(n,r,e)}catch(r){await gi(r)}}function pE(t,e,n){const r=D(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.ga.forEach((s,o)=>{const a=o.view.U_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const l=D(o);l.onlineState=a;let u=!1;l.queries.forEach((c,d)=>{for(const h of d.Q_)h.U_(a)&&(u=!0)}),u&&l_(l)}(r.eventManager,e),i.length&&r.fa.u_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function C6(t,e,n){const r=D(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Sa.get(e),s=i&&i.key;if(s){let o=new de(N.comparator);o=o.insert(s,me.newNoDocument(s,z.min()));const a=K().add(s),l=new Mu(z.min(),new Map,new de(W),o,a);await xR(r,l),r.wa=r.wa.remove(s),r.Sa.delete(e),f_(r)}else await Vo(r.localStore,e,!1).then(()=>Mo(r,e,n)).catch(gi)}async function x6(t,e){const n=D(t),r=e.batch.batchId;try{const i=await Qj(n.localStore,e);h_(n,r,null),d_(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await gr(n,i)}catch(i){await gi(i)}}async function N6(t,e,n){const r=D(t);try{const i=await function(o,a){const l=D(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let c;return l.mutationQueue.lookupMutationBatch(u,a).next(d=>($(d!==null),c=d.keys(),l.mutationQueue.removeMutationBatch(u,d))).next(()=>l.mutationQueue.performConsistencyCheck(u)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(u,c,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,c)).next(()=>l.localDocuments.getDocuments(u,c))})}(r.localStore,e);h_(r,e,n),d_(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await gr(r,i)}catch(i){await gi(i)}}async function D6(t,e){const n=D(t);_i(n.remoteStore)||P("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const r=await function(o){const a=D(o);return a.persistence.runTransaction("Get highest unacknowledged batch id","readonly",l=>a.mutationQueue.getHighestUnacknowledgedBatchId(l))}(n.localStore);if(r===-1)return void e.resolve();const i=n.Ca.get(r)||[];i.push(e),n.Ca.set(r,i)}catch(r){const i=sa(r,"Initialization of waitForPendingWrites() operation failed");e.reject(i)}}function d_(t,e){(t.Ca.get(e)||[]).forEach(n=>{n.resolve()}),t.Ca.delete(e)}function h_(t,e,n){const r=D(t);let i=r.Da[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Da[r.currentUser.toKey()]=i}}function Mo(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.pa.get(e))t.ga.delete(r),n&&t.fa.xa(r,n);t.pa.delete(e),t.isPrimaryClient&&t.ba.Vr(e).forEach(r=>{t.ba.containsKey(r)||NR(t,r)})}function NR(t,e){t.ya.delete(e.path.canonicalString());const n=t.wa.get(e);n!==null&&(iu(t.remoteStore,n),t.wa=t.wa.remove(e),t.Sa.delete(n),f_(t))}function Tg(t,e,n){for(const r of n)r instanceof RR?(t.ba.addReference(r.key,e),O6(t,r)):r instanceof bR?(P("SyncEngine","Document no longer in limbo: "+r.key),t.ba.removeReference(r.key,e),t.ba.containsKey(r.key)||NR(t,r.key)):V()}function O6(t,e){const n=e.key,r=n.path.canonicalString();t.wa.get(n)||t.ya.has(r)||(P("SyncEngine","New document in limbo: "+n),t.ya.add(r),f_(t))}function f_(t){for(;t.ya.size>0&&t.wa.size<t.maxConcurrentLimboResolutions;){const e=t.ya.values().next().value;t.ya.delete(e);const n=new N(ee.fromString(e)),r=t.va.next();t.Sa.set(r,new A6(n)),t.wa=t.wa.insert(n,r),cf(t.remoteStore,new Yn(Pt(Zo(n.path)),r,"TargetPurposeLimboResolution",Vt._e))}}async function gr(t,e,n){const r=D(t),i=[],s=[],o=[];r.ga.isEmpty()||(r.ga.forEach((a,l)=>{o.push(r.Ma(l,e,n).then(u=>{if((u||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const c=Zy.Ki(l.targetId,u);s.push(c)}}))}),await Promise.all(o),r.fa.u_(i),await async function(l,u){const c=D(l);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",d=>I.forEach(u,h=>I.forEach(h.qi,f=>c.persistence.referenceDelegate.addReference(d,h.targetId,f)).next(()=>I.forEach(h.Qi,f=>c.persistence.referenceDelegate.removeReference(d,h.targetId,f)))))}catch(d){if(!vi(d))throw d;P("LocalStore","Failed to update sequence numbers: "+d)}for(const d of u){const h=d.targetId;if(!d.fromCache){const f=c.ns.get(h),v=f.snapshotVersion,y=f.withLastLimboFreeSnapshotVersion(v);c.ns=c.ns.insert(h,y)}}}(r.localStore,s))}async function V6(t,e){const n=D(t);if(!n.currentUser.isEqual(e)){P("SyncEngine","User change. New user:",e.toKey());const r=await fR(n.localStore,e);n.currentUser=e,function(s,o){s.Ca.forEach(a=>{a.forEach(l=>{l.reject(new k(T.CANCELLED,o))})}),s.Ca.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await gr(n,r.us)}}function L6(t,e){const n=D(t),r=n.Sa.get(e);if(r&&r.ma)return K().add(r.key);{let i=K();const s=n.pa.get(e);if(!s)return i;for(const o of s){const a=n.ga.get(o);i=i.unionWith(a.view.la)}return i}}async function M6(t,e){const n=D(t),r=await Zd(n.localStore,e.query,!0),i=e.view.Ra(r);return n.isPrimaryClient&&Tg(n,e.targetId,i.da),i}async function F6(t,e){const n=D(t);return vR(n.localStore,e).then(r=>gr(n,r))}async function j6(t,e,n,r){const i=D(t),s=await function(a,l){const u=D(a),c=D(u.mutationQueue);return u.persistence.runTransaction("Lookup mutation documents","readonly",d=>c.vn(d,l).next(h=>h?u.localDocuments.getDocuments(d,h):I.resolve(null)))}(i.localStore,e);s!==null?(n==="pending"?await ra(i.remoteStore):n==="acknowledged"||n==="rejected"?(h_(i,e,r||null),d_(i,e),function(a,l){D(D(a).mutationQueue).Mn(l)}(i.localStore,e)):V(),await gr(i,s)):P("SyncEngine","Cannot apply mutation batch with id: "+e)}async function U6(t,e){const n=D(t);if(p_(n),m_(n),e===!0&&n.Fa!==!0){const r=n.sharedClientState.getAllActiveQueryTargets(),i=await mE(n,r.toArray());n.Fa=!0,await Eg(n.remoteStore,!0);for(const s of i)cf(n.remoteStore,s)}else if(e===!1&&n.Fa!==!1){const r=[];let i=Promise.resolve();n.pa.forEach((s,o)=>{n.sharedClientState.isLocalQueryTarget(o)?r.push(o):i=i.then(()=>(Mo(n,o),Vo(n.localStore,o,!0))),iu(n.remoteStore,o)}),await i,await mE(n,r),function(o){const a=D(o);a.Sa.forEach((l,u)=>{iu(a.remoteStore,u)}),a.ba.mr(),a.Sa=new Map,a.wa=new de(N.comparator)}(n),n.Fa=!1,await Eg(n.remoteStore,!1)}}async function mE(t,e,n){const r=D(t),i=[],s=[];for(const o of e){let a;const l=r.pa.get(o);if(l&&l.length!==0){a=await Oo(r.localStore,Pt(l[0]));for(const u of l){const c=r.ga.get(u),d=await M6(r,c);d.snapshot&&s.push(d.snapshot)}}else{const u=await gR(r.localStore,o);a=await Oo(r.localStore,u),await c_(r,DR(u),o,!1,a.resumeToken)}i.push(a)}return r.fa.u_(s),i}function DR(t){return IP(t.path,t.collectionGroup,t.orderBy,t.filters,t.limit,"F",t.startAt,t.endAt)}function $6(t){return function(n){return D(D(n).persistence).Li()}(D(t).localStore)}async function z6(t,e,n,r){const i=D(t);if(i.Fa)return void P("SyncEngine","Ignoring unexpected query state notification.");const s=i.pa.get(e);if(s&&s.length>0)switch(n){case"current":case"not-current":{const o=await vR(i.localStore,TP(s[0])),a=Mu.createSynthesizedRemoteEventForCurrentChange(e,n==="current",Ge.EMPTY_BYTE_STRING);await gr(i,o,a);break}case"rejected":await Vo(i.localStore,e,!0),Mo(i,e,r);break;default:V()}}async function B6(t,e,n){const r=p_(t);if(r.Fa){for(const i of e){if(r.pa.has(i)){P("SyncEngine","Adding an already active target "+i);continue}const s=await gR(r.localStore,i),o=await Oo(r.localStore,s);await c_(r,DR(s),o.targetId,!1,o.resumeToken),cf(r.remoteStore,o)}for(const i of n)r.pa.has(i)&&await Vo(r.localStore,i,!1).then(()=>{iu(r.remoteStore,i),Mo(r,i)}).catch(gi)}}function p_(t){const e=D(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=xR.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=L6.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=C6.bind(null,e),e.fa.u_=w6.bind(null,e.eventManager),e.fa.xa=I6.bind(null,e.eventManager),e}function m_(t){const e=D(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=x6.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=N6.bind(null,e),e}function q6(t,e,n){const r=D(t);(async function(s,o,a){try{const l=await o.getMetadata();if(await function(f,v){const y=D(f),w=Fe(v.createTime);return y.persistence.runTransaction("hasNewerBundle","readonly",m=>y.$r.getBundleMetadata(m,v.id)).then(m=>!!m&&m.createTime.compareTo(w)>=0)}(s.localStore,l))return await o.close(),a._completeWith(function(f){return{taskState:"Success",documentsLoaded:f.totalDocuments,bytesLoaded:f.totalBytes,totalDocuments:f.totalDocuments,totalBytes:f.totalBytes}}(l)),Promise.resolve(new Set);a._updateProgress(PR(l));const u=new T6(l,s.localStore,o.serializer);let c=await o.Oa();for(;c;){const h=await u.na(c);h&&a._updateProgress(h),c=await o.Oa()}const d=await u.complete();return await gr(s,d.sa,void 0),await function(f,v){const y=D(f);return y.persistence.runTransaction("Save bundle","readwrite",w=>y.$r.saveBundleMetadata(w,v))}(s.localStore,l),a._completeWith(d.progress),Promise.resolve(d.ia)}catch(l){return wn("SyncEngine",`Loading bundle failed with ${l}`),a._failWith(l),Promise.resolve(new Set)}})(r,e,n).then(i=>{r.sharedClientState.notifyBundleLoaded(i)})}class Sg{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=ju(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return hR(this.persistence,new dR,e.initialUser,this.serializer)}createPersistence(e){return new cR(uf.Hr,this.serializer)}createSharedClientState(e){return new _R}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class OR extends Sg{constructor(e,n,r){super(),this.Na=e,this.cacheSizeBytes=n,this.forceOwnership=r,this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Na.initialize(this,e),await m_(this.Na.syncEngine),await ra(this.Na.remoteStore),await this.persistence.fi(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}createLocalStore(e){return hR(this.persistence,new dR,e.initialUser,this.serializer)}createGarbageCollectionScheduler(e,n){const r=this.persistence.referenceDelegate.garbageCollector;return new Nj(r,e.asyncQueue,n)}createIndexBackfillerScheduler(e,n){const r=new m5(n,this.persistence);return new p5(e.asyncQueue,r)}createPersistence(e){const n=Jy(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),r=this.cacheSizeBytes!==void 0?Nt.withCacheSize(this.cacheSizeBytes):Nt.DEFAULT;return new Xy(this.synchronizeTabs,n,e.clientId,r,e.asyncQueue,wR(),ed(),this.serializer,this.sharedClientState,!!this.forceOwnership)}createSharedClientState(e){return new _R}}class W6 extends OR{constructor(e,n){super(e,n,!1),this.Na=e,this.cacheSizeBytes=n,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const n=this.Na.syncEngine;this.sharedClientState instanceof kp&&(this.sharedClientState.syncEngine={Zs:j6.bind(null,n),Xs:z6.bind(null,n),eo:B6.bind(null,n),Li:$6.bind(null,n),Ys:F6.bind(null,n)},await this.sharedClientState.start()),await this.persistence.fi(async r=>{await U6(this.Na.syncEngine,r),this.gcScheduler&&(r&&!this.gcScheduler.started?this.gcScheduler.start():r||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(r&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():r||this.indexBackfillerScheduler.stop())})}createSharedClientState(e){const n=wR();if(!kp.D(n))throw new k(T.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const r=Jy(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new kp(n,e.asyncQueue,r,e.clientId,e.initialUser)}}class g_{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>pE(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=V6.bind(null,this.syncEngine),await Eg(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new _6}()}createDatastore(e){const n=ju(e.databaseInfo.databaseId),r=function(s){return new r6(s)}(e.databaseInfo);return function(s,o,a,l){return new o6(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,a){return new l6(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>pE(this.syncEngine,n,0),function(){return cE.D()?new cE:new e6}())}createSyncEngine(e,n){return function(i,s,o,a,l,u,c){const d=new k6(i,s,o,a,l,u);return c&&(d.Fa=!0),d}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e;await async function(r){const i=D(r);P("RemoteStore","RemoteStore shutting down."),i.v_.add(5),await na(i),i.M_.shutdown(),i.x_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate()}}/**
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
 */function gE(t,e=10240){let n=0;return{async read(){if(n<t.byteLength){const r={value:t.slice(n,n+e),done:!1};return n+=e,r}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.resolve()}}/**
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
 */class df{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ba(this.observer.next,e)}error(e){this.observer.error?this.Ba(this.observer.error,e):Me("Uncaught Error in snapshot listener:",e.toString())}La(){this.muted=!0}Ba(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class G6{constructor(e,n){this.ka=e,this.serializer=n,this.metadata=new Je,this.buffer=new Uint8Array,this.qa=function(){return new TextDecoder("utf-8")}(),this.Qa().then(r=>{r&&r.ea()?this.metadata.resolve(r.X_.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(r==null?void 0:r.X_)}`))},r=>this.metadata.reject(r))}close(){return this.ka.cancel()}async getMetadata(){return this.metadata.promise}async Oa(){return await this.getMetadata(),this.Qa()}async Qa(){const e=await this.Ka();if(e===null)return null;const n=this.qa.decode(e),r=Number(n);isNaN(r)&&this.$a(`length string (${n}) is not valid number`);const i=await this.Ua(r);return new E6(JSON.parse(i),e.length+r)}Wa(){return this.buffer.findIndex(e=>e===123)}async Ka(){for(;this.Wa()<0&&!await this.Ga(););if(this.buffer.length===0)return null;const e=this.Wa();e<0&&this.$a("Reached the end of bundle when a length string is expected.");const n=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),n}async Ua(e){for(;this.buffer.length<e;)await this.Ga()&&this.$a("Reached the end of bundle when more is expected.");const n=this.qa.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),n}$a(e){throw this.ka.cancel(),new Error(`Invalid bundle format: ${e}`)}async Ga(){const e=await this.ka.read();if(!e.done){const n=new Uint8Array(this.buffer.length+e.value.length);n.set(this.buffer),n.set(e.value,this.buffer.length),this.buffer=n}return e.done}}/**
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
 */class K6{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastTransactionError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw this.lastTransactionError=new k(T.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes."),this.lastTransactionError;const n=await async function(i,s){const o=D(i),a={documents:s.map(d=>nu(o.serializer,d))},l=await o.vo("BatchGetDocuments",o.serializer.databaseId,ee.emptyPath(),a,s.length),u=new Map;l.forEach(d=>{const h=fj(o.serializer,d);u.set(h.key.toString(),h)});const c=[];return s.forEach(d=>{const h=u.get(d.toString());$(!!h),c.push(h)}),c}(this.datastore,e);return n.forEach(r=>this.recordVersion(r)),n}set(e,n){this.write(n.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,n){try{this.write(n.toMutation(e,this.preconditionForUpdate(e)))}catch(r){this.lastTransactionError=r}this.writtenDocs.add(e.toString())}delete(e){this.write(new ta(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastTransactionError)throw this.lastTransactionError;const e=this.readVersions;this.mutations.forEach(n=>{e.delete(n.key.toString())}),e.forEach((n,r)=>{const i=N.fromPath(r);this.mutations.push(new $y(i,this.precondition(i)))}),await async function(r,i){const s=D(r),o={writes:i.map(a=>ru(s.serializer,a))};await s.So("Commit",s.serializer.databaseId,ee.emptyPath(),o)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let n;if(e.isFoundDocument())n=e.version;else{if(!e.isNoDocument())throw V();n=z.min()}const r=this.readVersions.get(e.key.toString());if(r){if(!n.isEqual(r))throw new k(T.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),n)}precondition(e){const n=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&n?n.isEqual(z.min())?we.exists(!1):we.updateTime(n):we.none()}preconditionForUpdate(e){const n=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&n){if(n.isEqual(z.min()))throw new k(T.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return we.updateTime(n)}return we.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
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
 */class H6{constructor(e,n,r,i,s){this.asyncQueue=e,this.datastore=n,this.options=r,this.updateFunction=i,this.deferred=s,this.za=r.maxAttempts,this.jo=new t_(this.asyncQueue,"transaction_retry")}ja(){this.za-=1,this.Ha()}Ha(){this.jo.qo(async()=>{const e=new K6(this.datastore),n=this.Ja(e);n&&n.then(r=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(r)}).catch(i=>{this.Ya(i)}))}).catch(r=>{this.Ya(r)})})}Ja(e){try{const n=this.updateFunction(e);return!Nu(n)&&n.catch&&n.then?n:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(n){return this.deferred.reject(n),null}}Ya(e){this.za>0&&this.Za(e)?(this.za-=1,this.asyncQueue.enqueueAndForget(()=>(this.Ha(),Promise.resolve()))):this.deferred.reject(e)}Za(e){if(e.name==="FirebaseError"){const n=e.code;return n==="aborted"||n==="failed-precondition"||n==="already-exists"||!MP(n)}return!1}}/**
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
 */class Q6{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Ye.UNAUTHENTICATED,this.clientId=Zk.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{P("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(P("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new k(T.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Je;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=sa(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function td(t,e){t.asyncQueue.verifyOperationInProgress(),P("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await fR(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Ag(t,e){t.asyncQueue.verifyOperationInProgress();const n=await v_(t);P("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>dE(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>dE(e.remoteStore,i)),t._onlineComponents=e}function VR(t){return t.name==="FirebaseError"?t.code===T.FAILED_PRECONDITION||t.code===T.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function v_(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){P("FirestoreClient","Using user provided OfflineComponentProvider");try{await td(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!VR(n))throw n;wn("Error using user provided cache. Falling back to memory cache: "+n),await td(t,new Sg)}}else P("FirestoreClient","Using default OfflineComponentProvider"),await td(t,new Sg);return t._offlineComponents}async function hf(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(P("FirestoreClient","Using user provided OnlineComponentProvider"),await Ag(t,t._uninitializedComponentsProvider._online)):(P("FirestoreClient","Using default OnlineComponentProvider"),await Ag(t,new g_))),t._onlineComponents}function LR(t){return v_(t).then(e=>e.persistence)}function y_(t){return v_(t).then(e=>e.localStore)}function MR(t){return hf(t).then(e=>e.remoteStore)}function __(t){return hf(t).then(e=>e.syncEngine)}function Y6(t){return hf(t).then(e=>e.datastore)}async function Fo(t){const e=await hf(t),n=e.eventManager;return n.onListen=P6.bind(null,e.syncEngine),n.onUnlisten=R6.bind(null,e.syncEngine),n}function X6(t){return t.asyncQueue.enqueue(async()=>{const e=await LR(t),n=await MR(t);return e.setNetworkEnabled(!0),function(i){const s=D(i);return s.v_.delete(0),Uu(s)}(n)})}function J6(t){return t.asyncQueue.enqueue(async()=>{const e=await LR(t),n=await MR(t);return e.setNetworkEnabled(!1),async function(i){const s=D(i);s.v_.add(0),await na(s),s.x_.set("Offline")}(n)})}function Z6(t,e){const n=new Je;return t.asyncQueue.enqueueAndForget(async()=>async function(i,s,o){try{const a=await function(u,c){const d=D(u);return d.persistence.runTransaction("read document","readonly",h=>d.localDocuments.getDocument(h,c))}(i,s);a.isFoundDocument()?o.resolve(a):a.isNoDocument()?o.resolve(null):o.reject(new k(T.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(a){const l=sa(a,`Failed to get document '${s} from cache`);o.reject(l)}}(await y_(t),e,n)),n.promise}function FR(t,e,n={}){const r=new Je;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,u){const c=new df({next:h=>{o.enqueueAndForget(()=>a_(s,d));const f=h.docs.has(a);!f&&h.fromCache?u.reject(new k(T.UNAVAILABLE,"Failed to get document because the client is offline.")):f&&h.fromCache&&l&&l.source==="server"?u.reject(new k(T.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(h)},error:h=>u.reject(h)}),d=new u_(Zo(a.path),c,{includeMetadataChanges:!0,Z_:!0});return o_(s,d)}(await Fo(t),t.asyncQueue,e,n,r)),r.promise}function eU(t,e){const n=new Je;return t.asyncQueue.enqueueAndForget(async()=>async function(i,s,o){try{const a=await Zd(i,s,!0),l=new CR(s,a.hs),u=l.ha(a.documents),c=l.applyChanges(u,!1);o.resolve(c.snapshot)}catch(a){const l=sa(a,`Failed to execute query '${s} against cache`);o.reject(l)}}(await y_(t),e,n)),n.promise}function jR(t,e,n={}){const r=new Je;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,u){const c=new df({next:h=>{o.enqueueAndForget(()=>a_(s,d)),h.fromCache&&l.source==="server"?u.reject(new k(T.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(h)},error:h=>u.reject(h)}),d=new u_(a,c,{includeMetadataChanges:!0,Z_:!0});return o_(s,d)}(await Fo(t),t.asyncQueue,e,n,r)),r.promise}function tU(t,e){const n=new df(e);return t.asyncQueue.enqueueAndForget(async()=>function(i,s){D(i).K_.add(s),s.next()}(await Fo(t),n)),()=>{n.La(),t.asyncQueue.enqueueAndForget(async()=>function(i,s){D(i).K_.delete(s)}(await Fo(t),n))}}function nU(t,e,n,r){const i=function(o,a){let l;return l=typeof o=="string"?jP().encode(o):o,function(c,d){return new G6(c,d)}(function(c,d){if(c instanceof Uint8Array)return gE(c,d);if(c instanceof ArrayBuffer)return gE(new Uint8Array(c),d);if(c instanceof ReadableStream)return c.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(l),a)}(n,ju(e));t.asyncQueue.enqueueAndForget(async()=>{q6(await __(t),i,r)})}function rU(t,e){return t.asyncQueue.enqueue(async()=>function(r,i){const s=D(r);return s.persistence.runTransaction("Get named query","readonly",o=>s.$r.getNamedQuery(o,i))}(await y_(t),e))}/**
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
 */function UR(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const vE=new Map;/**
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
 */function w_(t,e,n){if(!n)throw new k(T.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function $R(t,e,n,r){if(e===!0&&r===!0)throw new k(T.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function yE(t){if(!N.isDocumentKey(t))throw new k(T.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function _E(t){if(N.isDocumentKey(t))throw new k(T.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function ff(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":V()}function se(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new k(T.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=ff(t);throw new k(T.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function zR(t,e){if(e<=0)throw new k(T.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
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
 */class wE{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new k(T.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new k(T.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}$R("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=UR((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new k(T.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new k(T.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new k(T.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class $u{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new wE({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new k(T.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new k(T.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new wE(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new r5;switch(r.type){case"firstParty":return new a5(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new k(T.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=vE.get(n);r&&(P("ComponentProvider","Removing Datastore"),vE.delete(n),r.terminate())}(this),Promise.resolve()}}function iU(t,e,n,r={}){var i;const s=(t=se(t,$u))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&wn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=Ye.MOCK_USER;else{a=hO(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new k(T.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new Ye(u)}t._authCredentials=new i5(new Jk(a,l))}}/**
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
 */let Rt=class BR{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new BR(this.firestore,e,this._query)}},Ae=class qR{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Wr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new qR(this.firestore,e,this._key)}},Wr=class WR extends Rt{constructor(e,n,r){super(e,n,Zo(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ae(this.firestore,null,new N(e))}withConverter(e){return new WR(this.firestore,e,this._path)}};function GR(t,e,...n){if(t=B(t),w_("collection","path",e),t instanceof $u){const r=ee.fromString(e,...n);return _E(r),new Wr(t,null,r)}{if(!(t instanceof Ae||t instanceof Wr))throw new k(T.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ee.fromString(e,...n));return _E(r),new Wr(t.firestore,null,r)}}function sU(t,e){if(t=se(t,$u),w_("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new k(T.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new Rt(t,null,function(r){return new pr(ee.emptyPath(),r)}(e))}function rh(t,e,...n){if(t=B(t),arguments.length===1&&(e=Zk.newId()),w_("doc","path",e),t instanceof $u){const r=ee.fromString(e,...n);return yE(r),new Ae(t,null,new N(r))}{if(!(t instanceof Ae||t instanceof Wr))throw new k(T.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ee.fromString(e,...n));return yE(r),new Ae(t.firestore,t instanceof Wr?t.converter:null,new N(r))}}function KR(t,e){return t=B(t),e=B(e),(t instanceof Ae||t instanceof Wr)&&(e instanceof Ae||e instanceof Wr)&&t.firestore===e.firestore&&t.path===e.path&&t.converter===e.converter}function HR(t,e){return t=B(t),e=B(e),t instanceof Rt&&e instanceof Rt&&t.firestore===e.firestore&&Ou(t._query,e._query)&&t.converter===e.converter}/**
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
 */class oU{constructor(){this.Xa=Promise.resolve(),this.eu=[],this.tu=!1,this.nu=[],this.ru=null,this.iu=!1,this.su=!1,this.ou=[],this.jo=new t_(this,"async_queue_retry"),this._u=()=>{const n=ed();n&&P("AsyncQueue","Visibility state changed to "+n.visibilityState),this.jo.Ko()};const e=ed();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this._u)}get isShuttingDown(){return this.tu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.au(),this.uu(e)}enterRestrictedMode(e){if(!this.tu){this.tu=!0,this.su=e||!1;const n=ed();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._u)}}enqueue(e){if(this.au(),this.tu)return new Promise(()=>{});const n=new Je;return this.uu(()=>this.tu&&this.su?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.eu.push(e),this.cu()))}async cu(){if(this.eu.length!==0){try{await this.eu[0](),this.eu.shift(),this.jo.reset()}catch(e){if(!vi(e))throw e;P("AsyncQueue","Operation failed with retryable error: "+e)}this.eu.length>0&&this.jo.qo(()=>this.cu())}}uu(e){const n=this.Xa.then(()=>(this.iu=!0,e().catch(r=>{this.ru=r,this.iu=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw Me("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.iu=!1,r))));return this.Xa=n,n}enqueueAfterDelay(e,n,r){this.au(),this.ou.indexOf(e)>-1&&(n=0);const i=s_.createAndSchedule(this,e,n,r,s=>this.lu(s));return this.nu.push(i),i}au(){this.ru&&V()}verifyOperationInProgress(){}async hu(){let e;do e=this.Xa,await e;while(e!==this.Xa)}Pu(e){for(const n of this.nu)if(n.timerId===e)return!0;return!1}Iu(e){return this.hu().then(()=>{this.nu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.nu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.hu()})}Tu(e){this.ou.push(e)}lu(e){const n=this.nu.indexOf(e);this.nu.splice(n,1)}}function kg(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}class aU{constructor(){this._progressObserver={},this._taskCompletionResolver=new Je,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,n,r){this._progressObserver={next:e,error:n,complete:r}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,n){return this._taskCompletionResolver.promise.then(e,n)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}/**
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
 */const lU=-1;let Ne=class extends $u{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=function(){return new oU}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||QR(this),this._firestoreClient.terminate()}};function nt(t){return t._firestoreClient||QR(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function QR(t){var e,n,r;const i=t._freezeSettings(),s=function(a,l,u,c){return new L5(a,l,u,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,UR(c.experimentalLongPollingOptions),c.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new Q6(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}function uU(t,e){XR(t=se(t,Ne));const n=nt(t);if(n._uninitializedComponentsProvider)throw new k(T.FAILED_PRECONDITION,"SDK cache is already specified.");wn("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const r=t._freezeSettings(),i=new g_;return YR(n,i,new OR(i,r.cacheSizeBytes,e==null?void 0:e.forceOwnership))}function cU(t){XR(t=se(t,Ne));const e=nt(t);if(e._uninitializedComponentsProvider)throw new k(T.FAILED_PRECONDITION,"SDK cache is already specified.");wn("enableMultiTabIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const n=t._freezeSettings(),r=new g_;return YR(e,r,new W6(r,n.cacheSizeBytes))}function YR(t,e,n){const r=new Je;return t.asyncQueue.enqueue(async()=>{try{await td(t,n),await Ag(t,e),r.resolve()}catch(i){const s=i;if(!VR(s))throw s;wn("Error enabling indexeddb cache. Falling back to memory cache: "+s),r.reject(s)}}).then(()=>r.promise)}function dU(t){if(t._initialized&&!t._terminated)throw new k(T.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const e=new Je;return t._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(r){if(!nn.D())return Promise.resolve();const i=r+"main";await nn.delete(i)}(Jy(t._databaseId,t._persistenceKey)),e.resolve()}catch(n){e.reject(n)}}),e.promise}function hU(t){return function(n){const r=new Je;return n.asyncQueue.enqueueAndForget(async()=>D6(await __(n),r)),r.promise}(nt(t=se(t,Ne)))}function fU(t){return X6(nt(t=se(t,Ne)))}function pU(t){return J6(nt(t=se(t,Ne)))}function mU(t,e){const n=nt(t=se(t,Ne)),r=new aU;return nU(n,t._databaseId,e,r),r}function gU(t,e){return rU(nt(t=se(t,Ne)),e).then(n=>n?new Rt(t,null,n.query):null)}function XR(t){if(t._initialized||t._terminated)throw new k(T.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}/**
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
 */class zn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new zn(Ge.fromBase64String(e))}catch(n){throw new k(T.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new zn(Ge.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */let ai=class{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new k(T.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new _e(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}};/**
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
 */let Es=class{constructor(e){this._methodName=e}};/**
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
 */class pf{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new k(T.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new k(T.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return W(this._lat,e._lat)||W(this._long,e._long)}}/**
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
 */const vU=/^__.*__$/;class yU{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new mr(e,this.data,this.fieldMask,n,this.fieldTransforms):new ea(e,this.data,n,this.fieldTransforms)}}class JR{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new mr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function ZR(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw V()}}class mf{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Eu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get du(){return this.settings.du}Au(e){return new mf(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ru(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Au({path:r,Vu:!1});return i.mu(e),i}fu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Au({path:r,Vu:!1});return i.Eu(),i}gu(e){return this.Au({path:void 0,Vu:!0})}pu(e){return ih(e,this.settings.methodName,this.settings.yu||!1,this.path,this.settings.wu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Eu(){if(this.path)for(let e=0;e<this.path.length;e++)this.mu(this.path.get(e))}mu(e){if(e.length===0)throw this.pu("Document fields must not be empty");if(ZR(this.du)&&vU.test(e))throw this.pu('Document fields cannot begin and end with "__"')}}class _U{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||ju(e)}Su(e,n,r,i=!1){return new mf({du:e,methodName:n,wu:r,path:_e.emptyPath(),Vu:!1,yu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Ts(t){const e=t._freezeSettings(),n=ju(t._databaseId);return new _U(t._databaseId,!!e.ignoreUndefinedProperties,n)}function gf(t,e,n,r,i,s={}){const o=t.Su(s.merge||s.mergeFields?2:0,e,n,i);P_("Data must be an object, but it was:",o,r);const a=nb(r,o);let l,u;if(s.merge)l=new Lt(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const d of s.mergeFields){const h=Pg(e,d,n);if(!o.contains(h))throw new k(T.INVALID_ARGUMENT,`Field '${h}' is specified in your field mask but missing from your input data.`);ib(c,h)||c.push(h)}l=new Lt(c),u=o.fieldTransforms.filter(d=>l.covers(d.field))}else l=null,u=o.fieldTransforms;return new yU(new ot(a),l,u)}class zu extends Es{_toFieldTransform(e){if(e.du!==2)throw e.du===1?e.pu(`${this._methodName}() can only appear at the top level of your update data`):e.pu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof zu}}function eb(t,e,n){return new mf({du:3,wu:e.settings.wu,methodName:t._methodName,Vu:n},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class I_ extends Es{_toFieldTransform(e){return new Lu(e.path,new xo)}isEqual(e){return e instanceof I_}}class E_ extends Es{constructor(e,n){super(e),this.bu=n}_toFieldTransform(e){const n=eb(this,e,!0),r=this.bu.map(s=>Ss(s,n)),i=new ls(r);return new Lu(e.path,i)}isEqual(e){return e instanceof E_&&Nl(this.bu,e.bu)}}class T_ extends Es{constructor(e,n){super(e),this.bu=n}_toFieldTransform(e){const n=eb(this,e,!0),r=this.bu.map(s=>Ss(s,n)),i=new us(r);return new Lu(e.path,i)}isEqual(e){return e instanceof T_&&Nl(this.bu,e.bu)}}class S_ extends Es{constructor(e,n){super(e),this.Du=n}_toFieldTransform(e){const n=new No(e.serializer,CP(e.serializer,this.Du));return new Lu(e.path,n)}isEqual(e){return e instanceof S_&&this.Du===e.Du}}function A_(t,e,n,r){const i=t.Su(1,e,n);P_("Data must be an object, but it was:",i,r);const s=[],o=ot.empty();Is(r,(l,u)=>{const c=R_(e,l,n);u=B(u);const d=i.fu(c);if(u instanceof zu)s.push(c);else{const h=Ss(u,d);h!=null&&(s.push(c),o.set(c,h))}});const a=new Lt(s);return new JR(o,a,i.fieldTransforms)}function k_(t,e,n,r,i,s){const o=t.Su(1,e,n),a=[Pg(e,r,n)],l=[i];if(s.length%2!=0)throw new k(T.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let h=0;h<s.length;h+=2)a.push(Pg(e,s[h])),l.push(s[h+1]);const u=[],c=ot.empty();for(let h=a.length-1;h>=0;--h)if(!ib(u,a[h])){const f=a[h];let v=l[h];v=B(v);const y=o.fu(f);if(v instanceof zu)u.push(f);else{const w=Ss(v,y);w!=null&&(u.push(f),c.set(f,w))}}const d=new Lt(u);return new JR(c,d,o.fieldTransforms)}function tb(t,e,n,r=!1){return Ss(n,t.Su(r?4:3,e))}function Ss(t,e){if(rb(t=B(t)))return P_("Unsupported field value:",e,t),nb(t,e);if(t instanceof Es)return function(r,i){if(!ZR(i.du))throw i.pu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.pu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Vu&&e.du!==4)throw e.pu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let l=Ss(a,i.gu(o));l==null&&(l={nullValue:"NULL_VALUE"}),s.push(l),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=B(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return CP(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Ie.fromDate(r);return{timestampValue:Do(i.serializer,s)}}if(r instanceof Ie){const s=new Ie(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Do(i.serializer,s)}}if(r instanceof pf)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof zn)return{bytesValue:zP(i.serializer,r._byteString)};if(r instanceof Ae){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.pu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Gy(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.pu(`Unsupported field value: ${ff(r)}`)}(t,e)}function nb(t,e){const n={};return cP(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Is(t,(r,i)=>{const s=Ss(i,e.Ru(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function rb(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ie||t instanceof pf||t instanceof zn||t instanceof Ae||t instanceof Es)}function P_(t,e,n){if(!rb(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=ff(n);throw r==="an object"?e.pu(t+" a custom object"):e.pu(t+" "+r)}}function Pg(t,e,n){if((e=B(e))instanceof ai)return e._internalPath;if(typeof e=="string")return R_(t,e);throw ih("Field path arguments must be of type string or ",t,!1,void 0,n)}const wU=new RegExp("[~\\*/\\[\\]]");function R_(t,e,n){if(e.search(wU)>=0)throw ih(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new ai(...e.split("."))._internalPath}catch{throw ih(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function ih(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new k(T.INVALID_ARGUMENT,a+t+l)}function ib(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class su{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Ae(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new IU(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(vf("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class IU extends su{data(){return super.data()}}function vf(t,e){return typeof e=="string"?R_(t,e):e instanceof ai?e._internalPath:e._delegate._internalPath}/**
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
 */function sb(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new k(T.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class b_{}class Bu extends b_{}function Er(t,e,...n){let r=[];e instanceof b_&&r.push(e),r=r.concat(n),function(s){const o=s.filter(l=>l instanceof C_).length,a=s.filter(l=>l instanceof yf).length;if(o>1||o>0&&a>0)throw new k(T.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class yf extends Bu{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new yf(e,n,r)}_apply(e){const n=this._parse(e);return ab(e._query,n),new Rt(e.firestore,e.converter,fg(e._query,n))}_parse(e){const n=Ts(e.firestore);return function(s,o,a,l,u,c,d){let h;if(u.isKeyField()){if(c==="array-contains"||c==="array-contains-any")throw new k(T.INVALID_ARGUMENT,`Invalid Query. You can't perform '${c}' queries on documentId().`);if(c==="in"||c==="not-in"){EE(d,c);const f=[];for(const v of d)f.push(IE(l,s,v));h={arrayValue:{values:f}}}else h=IE(l,s,d)}else c!=="in"&&c!=="not-in"&&c!=="array-contains-any"||EE(d,c),h=tb(a,o,d,c==="in"||c==="not-in");return te.create(u,c,h)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function EU(t,e,n){const r=e,i=vf("where",t);return yf._create(i,r,n)}class C_ extends b_{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new C_(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:oe.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const l of a)ab(o,l),o=fg(o,l)}(e._query,n),new Rt(e.firestore,e.converter,fg(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class x_ extends Bu{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new x_(e,n)}_apply(e){const n=function(i,s,o){if(i.startAt!==null)throw new k(T.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new k(T.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new tu(s,o)}(e._query,this._field,this._direction);return new Rt(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new pr(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,n))}}function TU(t,e="asc"){const n=e,r=vf("orderBy",t);return x_._create(r,n)}class _f extends Bu{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new _f(e,n,r)}_apply(e){return new Rt(e.firestore,e.converter,Qd(e._query,this._limit,this._limitType))}}function SU(t){return zR("limit",t),_f._create("limit",t,"F")}function AU(t){return zR("limitToLast",t),_f._create("limitToLast",t,"L")}class wf extends Bu{constructor(e,n,r){super(),this.type=e,this._docOrFields=n,this._inclusive=r}static _create(e,n,r){return new wf(e,n,r)}_apply(e){const n=ob(e,this.type,this._docOrFields,this._inclusive);return new Rt(e.firestore,e.converter,function(i,s){return new pr(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,s,i.endAt)}(e._query,n))}}function kU(...t){return wf._create("startAt",t,!0)}function PU(...t){return wf._create("startAfter",t,!1)}class If extends Bu{constructor(e,n,r){super(),this.type=e,this._docOrFields=n,this._inclusive=r}static _create(e,n,r){return new If(e,n,r)}_apply(e){const n=ob(e,this.type,this._docOrFields,this._inclusive);return new Rt(e.firestore,e.converter,function(i,s){return new pr(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,i.startAt,s)}(e._query,n))}}function RU(...t){return If._create("endBefore",t,!1)}function bU(...t){return If._create("endAt",t,!0)}function ob(t,e,n,r){if(n[0]=B(n[0]),n[0]instanceof su)return function(s,o,a,l,u){if(!l)throw new k(T.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${a}().`);const c=[];for(const d of mo(s))if(d.field.isKeyField())c.push(os(o,l.key));else{const h=l.data.field(d.field);if(rf(h))throw new k(T.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+d.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(h===null){const f=d.field.canonicalString();throw new k(T.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${f}' (used as the orderBy) does not exist.`)}c.push(h)}return new si(c,u)}(t._query,t.firestore._databaseId,e,n[0]._document,r);{const i=Ts(t.firestore);return function(o,a,l,u,c,d){const h=o.explicitOrderBy;if(c.length>h.length)throw new k(T.INVALID_ARGUMENT,`Too many arguments provided to ${u}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const f=[];for(let v=0;v<c.length;v++){const y=c[v];if(h[v].field.isKeyField()){if(typeof y!="string")throw new k(T.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${u}(), but got a ${typeof y}`);if(!jy(o)&&y.indexOf("/")!==-1)throw new k(T.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${u}() must be a plain document ID, but '${y}' contains a slash.`);const w=o.path.child(ee.fromString(y));if(!N.isDocumentKey(w))throw new k(T.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${u}() must result in a valid document path, but '${w}' is not because it contains an odd number of segments.`);const m=new N(w);f.push(os(a,m))}else{const w=tb(l,u,y);f.push(w)}}return new si(f,d)}(t._query,t.firestore._databaseId,i,e,n,r)}}function IE(t,e,n){if(typeof(n=B(n))=="string"){if(n==="")throw new k(T.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!jy(e)&&n.indexOf("/")!==-1)throw new k(T.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(ee.fromString(n));if(!N.isDocumentKey(r))throw new k(T.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return os(t,new N(r))}if(n instanceof Ae)return os(t,n._key);throw new k(T.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${ff(n)}.`)}function EE(t,e){if(!Array.isArray(t)||t.length===0)throw new k(T.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function ab(t,e){const n=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new k(T.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new k(T.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class N_{convertValue(e,n="none"){switch(ss(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Re(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(ni(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw V()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Is(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new pf(Re(e.latitude),Re(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=My(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Jl(e));default:return null}}convertTimestamp(e){const n=ti(e);return new Ie(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=ee.fromString(e);$(ZP(r));const i=new ri(r.get(1),r.get(3)),s=new N(r.popFirst(5));return i.isEqual(n)||Me(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */function Ef(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class CU extends N_{constructor(e){super(),this.firestore=e}convertBytes(e){return new zn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ae(this.firestore,null,n)}}/**
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
 */class Ui{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}let ur=class extends su{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new sl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(vf("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}},sl=class extends ur{data(e={}){return super.data(e)}},li=class{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Ui(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new sl(this._firestore,this._userDataWriter,r.key,r,new Ui(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new k(T.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const l=new sl(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Ui(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const l=new sl(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Ui(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let u=-1,c=-1;return a.type!==0&&(u=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),c=o.indexOf(a.doc.key)),{type:xU(a.type),doc:l,oldIndex:u,newIndex:c}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}};function xU(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return V()}}function lb(t,e){return t instanceof ur&&e instanceof ur?t._firestore===e._firestore&&t._key.isEqual(e._key)&&(t._document===null?e._document===null:t._document.isEqual(e._document))&&t._converter===e._converter:t instanceof li&&e instanceof li&&t._firestore===e._firestore&&HR(t.query,e.query)&&t.metadata.isEqual(e.metadata)&&t._snapshot.isEqual(e._snapshot)}/**
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
 */function NU(t){t=se(t,Ae);const e=se(t.firestore,Ne);return FR(nt(e),t._key).then(n=>D_(e,t,n))}class As extends N_{constructor(e){super(),this.firestore=e}convertBytes(e){return new zn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ae(this.firestore,null,n)}}function DU(t){t=se(t,Ae);const e=se(t.firestore,Ne),n=nt(e),r=new As(e);return Z6(n,t._key).then(i=>new ur(e,r,t._key,i,new Ui(i!==null&&i.hasLocalMutations,!0),t.converter))}function OU(t){t=se(t,Ae);const e=se(t.firestore,Ne);return FR(nt(e),t._key,{source:"server"}).then(n=>D_(e,t,n))}function VU(t){t=se(t,Rt);const e=se(t.firestore,Ne),n=nt(e),r=new As(e);return sb(t._query),jR(n,t._query).then(i=>new li(e,r,t,i))}function LU(t){t=se(t,Rt);const e=se(t.firestore,Ne),n=nt(e),r=new As(e);return eU(n,t._query).then(i=>new li(e,r,t,i))}function MU(t){t=se(t,Rt);const e=se(t.firestore,Ne),n=nt(e),r=new As(e);return jR(n,t._query,{source:"server"}).then(i=>new li(e,r,t,i))}function TE(t,e,n){t=se(t,Ae);const r=se(t.firestore,Ne),i=Ef(t.converter,e,n);return qu(r,[gf(Ts(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,we.none())])}function SE(t,e,n,...r){t=se(t,Ae);const i=se(t.firestore,Ne),s=Ts(i);let o;return o=typeof(e=B(e))=="string"||e instanceof ai?k_(s,"updateDoc",t._key,e,n,r):A_(s,"updateDoc",t._key,e),qu(i,[o.toMutation(t._key,we.exists(!0))])}function FU(t){return qu(se(t.firestore,Ne),[new ta(t._key,we.none())])}function jU(t,e){const n=se(t.firestore,Ne),r=rh(t),i=Ef(t.converter,e);return qu(n,[gf(Ts(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,we.exists(!1))]).then(()=>r)}function ub(t,...e){var n,r,i;t=B(t);let s={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||kg(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(kg(e[o])){const d=e[o];e[o]=(n=d.next)===null||n===void 0?void 0:n.bind(d),e[o+1]=(r=d.error)===null||r===void 0?void 0:r.bind(d),e[o+2]=(i=d.complete)===null||i===void 0?void 0:i.bind(d)}let l,u,c;if(t instanceof Ae)u=se(t.firestore,Ne),c=Zo(t._key.path),l={next:d=>{e[o]&&e[o](D_(u,t,d))},error:e[o+1],complete:e[o+2]};else{const d=se(t,Rt);u=se(d.firestore,Ne),c=d._query;const h=new As(u);l={next:f=>{e[o]&&e[o](new li(u,h,d,f))},error:e[o+1],complete:e[o+2]},sb(t._query)}return function(h,f,v,y){const w=new df(y),m=new u_(f,w,v);return h.asyncQueue.enqueueAndForget(async()=>o_(await Fo(h),m)),()=>{w.La(),h.asyncQueue.enqueueAndForget(async()=>a_(await Fo(h),m))}}(nt(u),c,a,l)}function UU(t,e){return tU(nt(t=se(t,Ne)),kg(e)?e:{next:e})}function qu(t,e){return function(r,i){const s=new Je;return r.asyncQueue.enqueueAndForget(async()=>b6(await __(r),i,s)),s.promise}(nt(t),e)}function D_(t,e,n){const r=n.docs.get(e._key),i=new As(t);return new ur(t,i,e._key,r,new Ui(n.hasPendingWrites,n.fromCache),e.converter)}/**
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
 */const $U={maxAttempts:5};/**
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
 */let zU=class{constructor(e,n){this._firestore=e,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=Ts(e)}set(e,n,r){this._verifyNotCommitted();const i=Rr(e,this._firestore),s=Ef(i.converter,n,r),o=gf(this._dataReader,"WriteBatch.set",i._key,s,i.converter!==null,r);return this._mutations.push(o.toMutation(i._key,we.none())),this}update(e,n,r,...i){this._verifyNotCommitted();const s=Rr(e,this._firestore);let o;return o=typeof(n=B(n))=="string"||n instanceof ai?k_(this._dataReader,"WriteBatch.update",s._key,n,r,i):A_(this._dataReader,"WriteBatch.update",s._key,n),this._mutations.push(o.toMutation(s._key,we.exists(!0))),this}delete(e){this._verifyNotCommitted();const n=Rr(e,this._firestore);return this._mutations=this._mutations.concat(new ta(n._key,we.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new k(T.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}};function Rr(t,e){if((t=B(t)).firestore!==e)throw new k(T.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}/**
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
 */let BU=class extends class{constructor(n,r){this._firestore=n,this._transaction=r,this._dataReader=Ts(n)}get(n){const r=Rr(n,this._firestore),i=new CU(this._firestore);return this._transaction.lookup([r._key]).then(s=>{if(!s||s.length!==1)return V();const o=s[0];if(o.isFoundDocument())return new su(this._firestore,i,o.key,o,r.converter);if(o.isNoDocument())return new su(this._firestore,i,r._key,null,r.converter);throw V()})}set(n,r,i){const s=Rr(n,this._firestore),o=Ef(s.converter,r,i),a=gf(this._dataReader,"Transaction.set",s._key,o,s.converter!==null,i);return this._transaction.set(s._key,a),this}update(n,r,i,...s){const o=Rr(n,this._firestore);let a;return a=typeof(r=B(r))=="string"||r instanceof ai?k_(this._dataReader,"Transaction.update",o._key,r,i,s):A_(this._dataReader,"Transaction.update",o._key,r),this._transaction.update(o._key,a),this}delete(n){const r=Rr(n,this._firestore);return this._transaction.delete(r._key),this}}{constructor(e,n){super(e,n),this._firestore=e}get(e){const n=Rr(e,this._firestore),r=new As(this._firestore);return super.get(e).then(i=>new ur(this._firestore,r,n._key,i._document,new Ui(!1,!1),n.converter))}};function qU(t,e,n){t=se(t,Ne);const r=Object.assign(Object.assign({},$U),n);return function(s){if(s.maxAttempts<1)throw new k(T.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(s,o,a){const l=new Je;return s.asyncQueue.enqueueAndForget(async()=>{const u=await Y6(s);new H6(s.asyncQueue,u,a,o,l).ja()}),l.promise}(nt(t),i=>e(new BU(t,i)),r)}/**
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
 */function WU(){return new zu("deleteField")}function GU(){return new I_("serverTimestamp")}function KU(...t){return new E_("arrayUnion",t)}function HU(...t){return new T_("arrayRemove",t)}function QU(t){return new S_("increment",t)}(function(e,n=!0){(function(i){Jo=i})(hi),Zr(new jn("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new Ne(new s5(r.getProvider("auth-internal")),new u5(r.getProvider("app-check-internal")),function(u,c){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new k(T.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ri(u.options.projectId,c)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),Mn(yI,"4.4.3",e),Mn(yI,"4.4.3","esm2017")})();const YU="@firebase/firestore-compat",XU="0.3.26";/**
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
 */function O_(t,e){if(e===void 0)return{merge:!1};if(e.mergeFields!==void 0&&e.merge!==void 0)throw new k("invalid-argument",`Invalid options passed to function ${t}(): You cannot specify both "merge" and "mergeFields".`);return e}/**
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
 */function AE(){if(typeof Uint8Array>"u")throw new k("unimplemented","Uint8Arrays are not available in this environment.")}function kE(){if(!O5())throw new k("unimplemented","Blobs are unavailable in Firestore in this environment.")}class ou{constructor(e){this._delegate=e}static fromBase64String(e){return kE(),new ou(zn.fromBase64String(e))}static fromUint8Array(e){return AE(),new ou(zn.fromUint8Array(e))}toBase64(){return kE(),this._delegate.toBase64()}toUint8Array(){return AE(),this._delegate.toUint8Array()}isEqual(e){return this._delegate.isEqual(e._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}}/**
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
 */function Rg(t){return JU(t,["next","error","complete"])}function JU(t,e){if(typeof t!="object"||t===null)return!1;const n=t;for(const r of e)if(r in n&&typeof n[r]=="function")return!0;return!1}/**
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
 */class ZU{enableIndexedDbPersistence(e,n){return uU(e._delegate,{forceOwnership:n})}enableMultiTabIndexedDbPersistence(e){return cU(e._delegate)}clearIndexedDbPersistence(e){return dU(e._delegate)}}class cb{constructor(e,n,r){this._delegate=n,this._persistenceProvider=r,this.INTERNAL={delete:()=>this.terminate()},e instanceof ri||(this._appCompat=e)}get _databaseId(){return this._delegate._databaseId}settings(e){const n=this._delegate._getSettings();!e.merge&&n.host!==e.host&&wn("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),e.merge&&(e=Object.assign(Object.assign({},n),e),delete e.merge),this._delegate._setSettings(e)}useEmulator(e,n,r={}){iU(this._delegate,e,n,r)}enableNetwork(){return fU(this._delegate)}disableNetwork(){return pU(this._delegate)}enablePersistence(e){let n=!1,r=!1;return e&&(n=!!e.synchronizeTabs,r=!!e.experimentalForceOwningTab,$R("synchronizeTabs",n,"experimentalForceOwningTab",r)),n?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,r)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return hU(this._delegate)}onSnapshotsInSync(e){return UU(this._delegate,e)}get app(){if(!this._appCompat)throw new k("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(e){try{return new jo(this,GR(this._delegate,e))}catch(n){throw Et(n,"collection()","Firestore.collection()")}}doc(e){try{return new rn(this,rh(this._delegate,e))}catch(n){throw Et(n,"doc()","Firestore.doc()")}}collectionGroup(e){try{return new It(this,sU(this._delegate,e))}catch(n){throw Et(n,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(e){return qU(this._delegate,n=>e(new db(this,n)))}batch(){return nt(this._delegate),new hb(new zU(this._delegate,e=>qu(this._delegate,e)))}loadBundle(e){return mU(this._delegate,e)}namedQuery(e){return gU(this._delegate,e).then(n=>n?new It(this,n):null)}}class Tf extends N_{constructor(e){super(),this.firestore=e}convertBytes(e){return new ou(new zn(e))}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return rn.forKey(n,this.firestore,null)}}function e9(t){t5(t)}class db{constructor(e,n){this._firestore=e,this._delegate=n,this._userDataWriter=new Tf(e)}get(e){const n=$i(e);return this._delegate.get(n).then(r=>new au(this._firestore,new ur(this._firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,n.converter)))}set(e,n,r){const i=$i(e);return r?(O_("Transaction.set",r),this._delegate.set(i,n,r)):this._delegate.set(i,n),this}update(e,n,r,...i){const s=$i(e);return arguments.length===2?this._delegate.update(s,n):this._delegate.update(s,n,r,...i),this}delete(e){const n=$i(e);return this._delegate.delete(n),this}}class hb{constructor(e){this._delegate=e}set(e,n,r){const i=$i(e);return r?(O_("WriteBatch.set",r),this._delegate.set(i,n,r)):this._delegate.set(i,n),this}update(e,n,r,...i){const s=$i(e);return arguments.length===2?this._delegate.update(s,n):this._delegate.update(s,n,r,...i),this}delete(e){const n=$i(e);return this._delegate.delete(n),this}commit(){return this._delegate.commit()}}class fs{constructor(e,n,r){this._firestore=e,this._userDataWriter=n,this._delegate=r}fromFirestore(e,n){const r=new sl(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new lu(this._firestore,r),n??{})}toFirestore(e,n){return n?this._delegate.toFirestore(e,n):this._delegate.toFirestore(e)}static getInstance(e,n){const r=fs.INSTANCES;let i=r.get(e);i||(i=new WeakMap,r.set(e,i));let s=i.get(n);return s||(s=new fs(e,new Tf(e),n),i.set(n,s)),s}}fs.INSTANCES=new WeakMap;class rn{constructor(e,n){this.firestore=e,this._delegate=n,this._userDataWriter=new Tf(e)}static forPath(e,n,r){if(e.length%2!==0)throw new k("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e.canonicalString()} has ${e.length}`);return new rn(n,new Ae(n._delegate,r,new N(e)))}static forKey(e,n,r){return new rn(n,new Ae(n._delegate,r,e))}get id(){return this._delegate.id}get parent(){return new jo(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(e){try{return new jo(this.firestore,GR(this._delegate,e))}catch(n){throw Et(n,"collection()","DocumentReference.collection()")}}isEqual(e){return e=B(e),e instanceof Ae?KR(this._delegate,e):!1}set(e,n){n=O_("DocumentReference.set",n);try{return n?TE(this._delegate,e,n):TE(this._delegate,e)}catch(r){throw Et(r,"setDoc()","DocumentReference.set()")}}update(e,n,...r){try{return arguments.length===1?SE(this._delegate,e):SE(this._delegate,e,n,...r)}catch(i){throw Et(i,"updateDoc()","DocumentReference.update()")}}delete(){return FU(this._delegate)}onSnapshot(...e){const n=fb(e),r=pb(e,i=>new au(this.firestore,new ur(this.firestore._delegate,this._userDataWriter,i._key,i._document,i.metadata,this._delegate.converter)));return ub(this._delegate,n,r)}get(e){let n;return(e==null?void 0:e.source)==="cache"?n=DU(this._delegate):(e==null?void 0:e.source)==="server"?n=OU(this._delegate):n=NU(this._delegate),n.then(r=>new au(this.firestore,new ur(this.firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,this._delegate.converter)))}withConverter(e){return new rn(this.firestore,e?this._delegate.withConverter(fs.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function Et(t,e,n){return t.message=t.message.replace(e,n),t}function fb(t){for(const e of t)if(typeof e=="object"&&!Rg(e))return e;return{}}function pb(t,e){var n,r;let i;return Rg(t[0])?i=t[0]:Rg(t[1])?i=t[1]:typeof t[0]=="function"?i={next:t[0],error:t[1],complete:t[2]}:i={next:t[1],error:t[2],complete:t[3]},{next:s=>{i.next&&i.next(e(s))},error:(n=i.error)===null||n===void 0?void 0:n.bind(i),complete:(r=i.complete)===null||r===void 0?void 0:r.bind(i)}}class au{constructor(e,n){this._firestore=e,this._delegate=n}get ref(){return new rn(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(e){return this._delegate.data(e)}get(e,n){return this._delegate.get(e,n)}isEqual(e){return lb(this._delegate,e._delegate)}}class lu extends au{data(e){const n=this._delegate.data(e);return this._delegate._converter||n5(n!==void 0),n}}class It{constructor(e,n){this.firestore=e,this._delegate=n,this._userDataWriter=new Tf(e)}where(e,n,r){try{return new It(this.firestore,Er(this._delegate,EU(e,n,r)))}catch(i){throw Et(i,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(e,n){try{return new It(this.firestore,Er(this._delegate,TU(e,n)))}catch(r){throw Et(r,/(orderBy|where)\(\)/,"Query.$1()")}}limit(e){try{return new It(this.firestore,Er(this._delegate,SU(e)))}catch(n){throw Et(n,"limit()","Query.limit()")}}limitToLast(e){try{return new It(this.firestore,Er(this._delegate,AU(e)))}catch(n){throw Et(n,"limitToLast()","Query.limitToLast()")}}startAt(...e){try{return new It(this.firestore,Er(this._delegate,kU(...e)))}catch(n){throw Et(n,"startAt()","Query.startAt()")}}startAfter(...e){try{return new It(this.firestore,Er(this._delegate,PU(...e)))}catch(n){throw Et(n,"startAfter()","Query.startAfter()")}}endBefore(...e){try{return new It(this.firestore,Er(this._delegate,RU(...e)))}catch(n){throw Et(n,"endBefore()","Query.endBefore()")}}endAt(...e){try{return new It(this.firestore,Er(this._delegate,bU(...e)))}catch(n){throw Et(n,"endAt()","Query.endAt()")}}isEqual(e){return HR(this._delegate,e._delegate)}get(e){let n;return(e==null?void 0:e.source)==="cache"?n=LU(this._delegate):(e==null?void 0:e.source)==="server"?n=MU(this._delegate):n=VU(this._delegate),n.then(r=>new bg(this.firestore,new li(this.firestore._delegate,this._userDataWriter,this._delegate,r._snapshot)))}onSnapshot(...e){const n=fb(e),r=pb(e,i=>new bg(this.firestore,new li(this.firestore._delegate,this._userDataWriter,this._delegate,i._snapshot)));return ub(this._delegate,n,r)}withConverter(e){return new It(this.firestore,e?this._delegate.withConverter(fs.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}class t9{constructor(e,n){this._firestore=e,this._delegate=n}get type(){return this._delegate.type}get doc(){return new lu(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class bg{constructor(e,n){this._firestore=e,this._delegate=n}get query(){return new It(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map(e=>new lu(this._firestore,e))}docChanges(e){return this._delegate.docChanges(e).map(n=>new t9(this._firestore,n))}forEach(e,n){this._delegate.forEach(r=>{e.call(n,new lu(this._firestore,r))})}isEqual(e){return lb(this._delegate,e._delegate)}}class jo extends It{constructor(e,n){super(e,n),this.firestore=e,this._delegate=n}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const e=this._delegate.parent;return e?new rn(this.firestore,e):null}doc(e){try{return e===void 0?new rn(this.firestore,rh(this._delegate)):new rn(this.firestore,rh(this._delegate,e))}catch(n){throw Et(n,"doc()","CollectionReference.doc()")}}add(e){return jU(this._delegate,e).then(n=>new rn(this.firestore,n))}isEqual(e){return KR(this._delegate,e._delegate)}withConverter(e){return new jo(this.firestore,e?this._delegate.withConverter(fs.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function $i(t){return se(t,Ae)}/**
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
 */class V_{constructor(...e){this._delegate=new ai(...e)}static documentId(){return new V_(_e.keyField().canonicalString())}isEqual(e){return e=B(e),e instanceof ai?this._delegate._internalPath.isEqual(e._internalPath):!1}}/**
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
 */class xi{constructor(e){this._delegate=e}static serverTimestamp(){const e=GU();return e._methodName="FieldValue.serverTimestamp",new xi(e)}static delete(){const e=WU();return e._methodName="FieldValue.delete",new xi(e)}static arrayUnion(...e){const n=KU(...e);return n._methodName="FieldValue.arrayUnion",new xi(n)}static arrayRemove(...e){const n=HU(...e);return n._methodName="FieldValue.arrayRemove",new xi(n)}static increment(e){const n=QU(e);return n._methodName="FieldValue.increment",new xi(n)}isEqual(e){return this._delegate.isEqual(e._delegate)}}/**
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
 */const n9={Firestore:cb,GeoPoint:pf,Timestamp:Ie,Blob:ou,Transaction:db,WriteBatch:hb,DocumentReference:rn,DocumentSnapshot:au,Query:It,QueryDocumentSnapshot:lu,QuerySnapshot:bg,CollectionReference:jo,FieldPath:V_,FieldValue:xi,setLogLevel:e9,CACHE_SIZE_UNLIMITED:lU};function r9(t,e){t.INTERNAL.registerComponent(new jn("firestore-compat",n=>{const r=n.getProvider("app-compat").getImmediate(),i=n.getProvider("firestore").getImmediate();return e(r,i)},"PUBLIC").setServiceProps(Object.assign({},n9)))}/**
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
 */function i9(t){r9(t,(e,n)=>new cb(e,n,new ZU)),t.registerVersion(YU,XU)}i9(Q);const s9=()=>{const[t,e]=A.useState(""),[n,r]=A.useState(""),[i,s]=A.useState(!1),[o,a]=A.useState(!1),[l,u]=A.useState(null),[c,d]=A.useState(!1),[h,f]=A.useState(0),v=async()=>{try{const p=(await Q.auth().signInWithEmailAndPassword(t,n)).user;console.log("User signed in with email and password:",p)}catch(m){console.error("Email/password sign-in error:",m)}},y=async()=>{try{if(t.trim()!==""){const m=localStorage.getItem("lastResetTimestamp"),p=new Date().getTime(),_=60*60*1e3;if(h===1){d(!0),window.alert("You have already requested a password reset. Please try again later.");return}!m||p-m>_?(await Q.auth().sendPasswordResetEmail(t),console.log("Password reset email sent successfully"),localStorage.setItem("lastResetTimestamp",p),a(!0),f(h+1),u(setTimeout(()=>{a(!1),d(!1)},5e3))):(console.log("Password reset already requested within the last hour"),d(!0),window.alert("You have already requested a password reset within the last hour. Please try again later."))}else console.error("Forgot password error: Email is empty"),window.alert("Please enter your email address to reset the password.")}catch(m){console.error("Forgot password error:",m)}},w=()=>{s(!i)};return g.jsxs("div",{children:[g.jsx("p",{children:"Email"}),g.jsx("input",{className:"inp1",type:"email",placeholder:"Email",value:t,onChange:m=>e(m.target.value)}),g.jsxs("div",{className:"password-wrapper",children:[g.jsx("p",{children:"Jelszó"}),g.jsx("input",{className:"inp1",type:i?"text":"password",placeholder:"Jelszó",value:n,onChange:m=>r(m.target.value)}),g.jsx("div",{className:"eye",children:g.jsx(at,{icon:i?GD:NS,onClick:w})})]}),g.jsxs("div",{className:"logmein",children:[g.jsx("button",{className:"logbtn",onClick:v,children:"Bejelentkezés"}),g.jsxs("button",{className:`forgot-password ${c?"disabled":""}`,onClick:y,disabled:c,children:[g.jsx(at,{icon:QD})," Elfelejtettem jelszavam"]})]}),o&&g.jsxs("div",{className:"reset-popup",children:[g.jsx("p",{children:"Password reset email sent successfully!"}),g.jsx(at,{icon:DS,onClick:()=>a(!1)})]})]})},o9=({isVisible:t})=>{const[e,n]=A.useState(""),[r,i]=A.useState(""),s=async()=>{try{const l=(await Q.auth().createUserWithEmailAndPassword(e,r)).user;console.log("User registered with email and password:",l),await o(l,{})}catch(a){console.error("Email/password registration error:",a)}},o=async(a,l)=>{if(!a)return;const{uid:u,email:c}=a,d=Q.firestore().doc(`users/${u}`);try{if(!(await d.get()).exists){const f=new Date;await d.set({email:c,createdAt:f,userType:"user",...l})}}catch(h){console.error("Error creating user document:",h)}};return t?g.jsxs("div",{children:[g.jsx("input",{className:"inp1",type:"email",placeholder:"Email",value:e,onChange:a=>n(a.target.value)}),g.jsxs("div",{className:"password-wrapper",children:[g.jsx("input",{className:"inp1",type:"password",placeholder:"Password",value:r,onChange:a=>i(a.target.value)}),g.jsxs("div",{className:"eye1",children:[" ",g.jsx(at,{icon:NS,className:"eye"})]})]}),g.jsxs("button",{className:"registerbtn",onClick:s,children:[g.jsx(at,{icon:tO})," Regisztráció"]})]}):null},a9=async(t,e)=>{if(!t)return;const{uid:n,email:r}=t,i=Q.firestore().doc(`users/${n}`);try{if(!(await i.get()).exists){const o=new Date;await i.set({email:r,createdAt:o,userType:"user",...e})}}catch(s){console.error("Error creating user document:",s)}},l9=()=>{const[t,e]=A.useState(!1),n=()=>{e(!t)},r=async()=>{const i=new Q.auth.GoogleAuthProvider;try{const o=(await Q.auth().signInWithPopup(i)).user;["craftercsapat590@gmail.com","gocsaldev@gmail.com","toptcorporation@protonmail.com","valogod3412@gmail.com"].includes(o.email)?(console.log("User signed in with Google:",o),await a9(o,{})):(console.log("Access denied. User email is not allowed to register."),window.alert("Access denied. Your email is not allowed to register."),await Q.auth().signOut())}catch(s){console.error("Google sign-in error:",s)}};return g.jsxs("div",{className:"login-thingy",children:[!t&&g.jsx(s9,{}),g.jsx(o9,{isVisible:t}),g.jsx("button",{className:"togglebtn",onClick:n,children:t?"Vissza a bejeletkezéshez":"Nincs fiókom"}),g.jsxs("button",{className:"logbtn1",onClick:r,children:[g.jsx(at,{icon:xS})," Bejeletkezés Google-val."]})]})},u9=({label:t,options:e})=>{const[n,r]=A.useState(!1),i=()=>{r(!n)};return g.jsxs("div",{className:"nav-item navds ",onClick:i,children:[g.jsx("a",{className:"nav-item dropds",children:t}),g.jsx("div",{className:`dropdown-content ${n?"show":""}`,children:e.map((s,o)=>g.jsx(Al,{to:s.to,className:`dropdown-item nav-item ${n?"show":""}`,children:s.label},o))})]})},c9=()=>{const[t,e]=A.useState(null),[n,r]=A.useState("light"),[i,s]=A.useState(!1),[o,a]=A.useState(!1),[l,u]=A.useState(!1),[c,d]=A.useState(!1);A.useEffect(()=>{const w=Q.auth().onAuthStateChanged(m=>{a(!!m),m&&(Q.firestore().collection("admins").doc(m.uid).get().then(p=>{p.exists?(u(!0),console.log("User is an admin")):(u(!1),console.log("User is not an admin"))}).catch(p=>{console.error("Error checking admin status:",p)}),Q.firestore().collection("users").doc(m.uid).get().then(p=>{p.exists?(d(!0),console.log("User is a developer")):(d(!1),console.log("User is not a developer"))}).catch(p=>{console.error("Error checking developer status:",p)}))});return()=>w()},[]);const h=w=>{e(w),y()},f=()=>{const w=n==="light"?"dark":"light";r(w),document.body.classList.remove("light-theme","dark-theme"),document.body.classList.add(`${w}-theme`),document.documentElement.style.setProperty("--navbar-bg-light",w==="light"?"#000000":"#565656"),document.documentElement.style.setProperty("--navbar-bg-dark",w==="light"?"#565656":"#000000")},v=()=>{s(!i)},y=()=>{s(!1)};return g.jsxs("div",{className:"base",children:[g.jsxs("nav",{className:`navbar ${n}`,children:[g.jsx(Al,{to:"/",className:"navbar-left",children:"Top T"}),g.jsxs("div",{className:"navbar-right",children:[g.jsxs("div",{className:`menu-toggle ${i?"open":""}`,onClick:v,children:[g.jsx("div",{className:"bar"}),g.jsx("div",{className:"bar"}),g.jsx("div",{className:"bar"})]}),g.jsxs("div",{className:`menu-items ${i?"open":""}`,children:[g.jsx(Ds,{label:"Főoldal",index:0,activeIndex:t,onClick:h,to:"/"}),g.jsx(u9,{label:"Menü",options:[{label:"Rólunk",to:"/About"},{label:"Portfólió",to:"/PortfolioPage"},{label:"Devlog",to:"/DevlogPage"}]}),g.jsx(Ds,{label:"Szolgáltatásaink",index:3,activeIndex:t,onClick:h,to:"/OrderPage"}),o&&g.jsxs(g.Fragment,{children:[l&&g.jsx(Ds,{label:"Admin Panel",index:4,to:"/AdminPanel"}),(l||c)&&g.jsx(Ds,{label:"Todo Lista",index:5,to:"/TodoList"})]}),o?g.jsx(g.Fragment,{children:g.jsx(Ds,{label:g.jsx(at,{icon:WD}),index:6,onClick:()=>Q.auth().signOut(),to:"/"})}):g.jsx(Ds,{label:g.jsx(at,{icon:xS}),index:7,activeIndex:t,onClick:h,to:"/login"})]}),g.jsx("button",{className:"theme-switch",onClick:f,children:n==="light"?g.jsx(at,{icon:eO}):g.jsx(at,{icon:YD})})]})]}),g.jsx("div",{className:`menu-overlay ${i?"open":""}`,onClick:y})]})},Ds=({label:t,index:e,activeIndex:n,onClick:r,to:i})=>{const s=n===e;return g.jsxs(Al,{to:i,className:`nav-item ${s?"active":""}`,onClick:()=>r(e),children:[t,s&&g.jsx("div",{className:"underline"})]})},d9="/assets/cotrh-DoiEoG7-.jpg",h9="/assets/tfg-DlALw15j.jpg",f9="/assets/TTPC-B1aScwbm.jpg",mb="/assets/test4-CwXkWlKp.jpg",p9=()=>{const t=[d9,h9,f9],[e,n]=A.useState(0),r=o=>{n(o)},i=()=>{const o=(e+1)%t.length;n(o)},s=()=>{const o=(e-1+t.length)%t.length;n(o)};return g.jsxs("div",{className:"landing-page",children:[g.jsx("h1",{children:"Üdv. a Top T corp. Weboldalán"}),g.jsx("h2",{children:"Projektjeink:"}),g.jsxs("div",{className:"image-carousel",children:[g.jsx("button",{className:"carousel-button prev",onClick:s,children:g.jsx(at,{icon:JD})}),t.map((o,a)=>g.jsx("img",{src:o,alt:"carousel",className:a===e?"active":"",onClick:()=>r(a)},a)),g.jsx("button",{className:"carousel-button next",onClick:i,children:g.jsx(at,{icon:ZD})}),g.jsx("div",{className:"navigation-dots",children:t.map((o,a)=>g.jsx("span",{className:`dot ${a===e?"active":""}`,onClick:()=>r(a)},a))})]}),g.jsxs("div",{children:[g.jsx("h2",{className:"why-c-us",children:"Miért válasszon minket?"}),g.jsxs("ul",{className:"why-us",children:[g.jsxs("li",{children:[g.jsx("h3",{children:"Tapasztalt csapat:"})," Top T-nk elkötelezett, tapasztalt szakemberekből áll, akik szerteágazó tudással rendelkeznek az informatika területén."]}),g.jsxs("li",{children:[g.jsx("h3",{children:"Ügyfélközpontú megközelítés:"}),"Minden projektünkben az ügyfelek igényeire és céljaira koncentrálunk, hogy olyan egyedi megoldásokat nyújtsunk, amelyek valóban kiemelkedő eredményeket hoznak."]}),g.jsxs("li",{children:[g.jsx("h3",{children:"Innováció és minőség:"})," Top T mindig a legújabb technológiák felé nyitott, és minden munkánkat a legmagasabb minőségi sztenderdek szerint végezzük el."]})]})]}),g.jsxs("div",{className:"flex-container",children:[g.jsxs("div",{className:"box",children:[g.jsx("h4",{children:"Szolgáltatásaink:"}),g.jsxs("ul",{children:[g.jsx("li",{children:"Webfejlesztés és tervezés"}),g.jsx("li",{children:"Mobilalkalmazás fejlesztés"}),g.jsx("li",{children:"Felhőalapú megoldások"}),g.jsx("li",{children:"Tanácsadás"})]}),g.jsx(Al,{to:"/OrderPage",className:"kapcs",style:{position:"relative",top:"-5px"},children:g.jsx("button",{children:"Tuddj meg Többet --- >"})})]}),g.jsxs("div",{className:"box1",children:[g.jsx("h4",{children:"Csapatunk:"}),g.jsx("img",{className:"imgbox",src:mb,alt:"testimg"}),g.jsx(Al,{to:"/About",className:"kapcs",style:{position:"relative",top:"-5px"},children:g.jsx("button",{style:{marginTop:"10px"},children:"Tovább --- >"})})]})]})]})},m9="/assets/mpfp-CdH2zm_K.jpg",g9="/assets/hpfp-BtRXxfUj.png",v9=()=>g.jsxs("div",{className:"about-page",children:[g.jsx("h1",{children:"Rólunk"}),g.jsx("p",{}),g.jsx("div",{className:"team",children:g.jsxs("div",{className:"team-category",children:[g.jsxs("div",{className:"team-member",children:[g.jsx("img",{src:m9,alt:"Gocsál Mátyás"}),g.jsxs("div",{children:[g.jsx("h3",{children:"Gocsál Mátyás"}),g.jsx("p",{children:"CEO, CHRO, Consulting Team Lead, GAML "})]})]}),g.jsxs("div",{className:"team-member",children:[g.jsx("img",{src:g9,alt:"Karsa Hunor Ákos"}),g.jsxs("div",{children:[g.jsx("h3",{children:"Karsa Hunor Ákos"}),g.jsx("p",{children:"CEO, CTO, Devolopment Team Lead"})]})]}),g.jsxs("div",{className:"team-member",children:[g.jsx("img",{src:mb,alt:"Kovács Gáspár"}),g.jsxs("div",{children:[g.jsx("h3",{children:"Kovács Gáspár"}),g.jsx("p",{children:"CEO, CCO, CFO"})]})]})]})})]});function y9({name:t,image:e,description:n,link:r}){return g.jsxs("div",{className:"portfolio-item",children:[g.jsx("h3",{children:t}),g.jsx("img",{className:"imagethingy",src:e,alt:t}),g.jsx("p",{children:n}),g.jsx("a",{href:r,target:"_blank",rel:"noopener noreferrer",children:g.jsx("button",{className:"gomb",children:"Tudj meg többet"})})]})}function _9({style:t}){return g.jsx("div",{className:"bubble",style:t})}function w9(){const t=[{name:"Top T Physics Constitution",image:"src/assets/TTPC.jpg",description:"Ez a projekt egy Közép Iskolás fizikai projekt munka miatt jött létre. Amelyben egy tömeg átváltót készítettünk el.",link:"http://ttpc.rf.gd"},{name:"Chronicles of the Relic Hunters",image:"src/assets/cotrh.jpg",description:"Another brief description.",link:"http://projektmunka.rf.gd"},{name:"The Physics Game",image:"src/assets/tfg.jpg",description:"The last project description.",link:"https://xdmanus1.github.io/the-physics-game/"}];return[{top:"2vh",left:"20vw",gradientAngle:"120deg"},{top:"5vh",left:"60vw",gradientAngle:"210deg"},{top:"10vh",left:"5vw",gradientAngle:"45deg"},{top:"36vh",left:"70vw",gradientAngle:"330deg"},{top:"30vh",left:"10vw",gradientAngle:"150deg"},{top:"50vh",left:"25vw",gradientAngle:"270deg"},{top:"70vh",left:"75vw",gradientAngle:"180deg"},{top:"63vh",left:"40vw",gradientAngle:"90deg"},{top:"70vh",left:"15vw",gradientAngle:"0deg"},{top:"36vh",left:"50vw",gradientAngle:"300deg"},{top:"20vh",left:"35vw",gradientAngle:"60deg"}].map((n,r)=>g.jsx(_9,{style:{...n,background:`linear-gradient(${n.gradientAngle}, #ff8080, #ffcc99)`}},r)),g.jsxs("div",{className:"portfolio",children:[g.jsx("h1",{children:"Portfólió"}),g.jsx("div",{className:"portfolio-grid",children:t.map((n,r)=>g.jsx(y9,{...n},r))})]})}function gb({onClose:t,className:e}){return g.jsx("div",{className:`modal ${e}`,children:g.jsxs("div",{className:"modal-content",children:[g.jsx("span",{className:"close",onClick:t,children:"×"}),g.jsx("h2",{children:"Hiba"}),g.jsx("p",{children:"A rendelés leadása során hiba történt. Kérjük, próbálkozzon később újra."})]})})}function vb({onClose:t,className:e,message:n}){return g.jsx("div",{className:`modal ${e}`,children:g.jsxs("div",{className:"modal-content",children:[g.jsx("span",{className:"close",onClick:t,children:"×"}),g.jsx("h2",{children:"Siker"}),g.jsx("p",{children:n})]})})}function I9(){const[t,e]=A.useState(!1),[n,r]=A.useState(!1),[i,s]=A.useState(parseInt(localStorage.getItem("lastSubmissionTime"))||0),[o,a]=A.useState(!1),[l,u]=A.useState(0),[c,d]=A.useState(0),h=async v=>{v.preventDefault();const y=new FormData(v.target),w=y.get("name"),m=y.get("email"),p=y.get("product"),_=y.get("additionalText"),E=y.get("phoneNumber");if(!w||!m||!p||!_||!E){e(!0),r(!1);return}const S=Date.now();if(o){e(!0),r(!1);return}if(S-i<3e5&&(d(R=>R+1),c>=3)){a(!0),e(!0),r(!1),setTimeout(()=>{a(!1),d(0)},3e5);return}try{await Q.firestore().collection("orders").add({name:w,email:m,product:p,additionalText:_,phoneNumber:E,timestamp:Q.firestore.FieldValue.serverTimestamp()}),r(!0),e(!1),s(S),localStorage.setItem("lastSubmissionTime",S.toString())}catch{e(!0),r(!1)}},f=()=>{e(!1),r(!1)};return A.useEffect(()=>{let v;if(o){const y=Math.ceil((3e5-(Date.now()-i))/1e3);u(y),v=setInterval(()=>{u(w=>w<=0?(clearInterval(v),a(!1),0):w-1)},1e3)}return()=>{clearInterval(v)}},[o,i]),A.useEffect(()=>{const v=Date.now();if(v-i<3e5){a(!0);const y=Math.ceil((3e5-(v-i))/1e3);u(y)}},[]),g.jsxs("div",{children:[g.jsxs("div",{className:"szolg",children:[g.jsx("h1",{className:"szolgh1",children:"Szolgáltatásaink"}),g.jsx("h2",{children:"Kreatív Webfejlesztés és Tervezés:"}),g.jsx("p",{children:"   Szakértő csapatunk innovatív weboldalakat tervez és fejleszt, figyelembe véve ügyfeleink egyedi igényeit és a legfrissebb trendeket. Rugalmas megközelítésünk lehetővé teszi számunkra, hogy minden projekten egyedi és felhasználóbarát weboldalakat hozzunk létre."}),g.jsx("h2",{children:"Mobilalkalmazás Fejlesztés:"}),g.jsx("p",{children:"   Tapasztalt fejlesztőink mobilalkalmazások tervezésében és fejlesztésében jeleskednek minden platformon. Az intuitív felhasználói élmény és a hatékony funkcionalitás jellemzi alkalmazásainkat, amelyek segítik ügyfeleinket céljaik elérésében."}),g.jsx("h2",{children:"Felhőalapú Megoldások:"}),g.jsx("p",{children:"   A TOP T Cég kiemelkedő szakértelmet kínál a felhőalapú megoldások terén, beleértve az infrastruktúrát, az alkalmazásokat és az adattárolást. Rugalmas és skálázható felhőmegoldásaink segítségével ügyfeleink hatékonyan növelhetik vállalkozásuk hatékonyságát és rugalmasságát."}),g.jsx("h2",{children:"Szakértő Tanácsadás:"}),g.jsx("p",{children:"   Tapasztalt tanácsadóink stratégiai és technológiai tanácsokkal látják el ügyfeleinket, hogy segítsenek nekik a legjobb döntések meghozatalában. Az üzleti igényekre szabott tanácsadásunk célja a hosszú távú siker és a versenyelőny biztosítása minden ügyfelünknek."})]}),g.jsxs("div",{className:"container",children:[g.jsx("h2",{className:"ordtx",children:"Rendelés űrlap"}),g.jsxs("form",{onSubmit:h,children:[g.jsxs("div",{className:"form-group",children:[g.jsx("label",{htmlFor:"name",children:"Név"}),g.jsx("input",{type:"text",id:"name",name:"name",className:"input-field",placeholder:"Add meg a neved"})]}),g.jsxs("div",{className:"form-group",children:[g.jsx("label",{htmlFor:"email",children:"Email"}),g.jsx("input",{type:"email",id:"email",name:"email",className:"input-field",placeholder:"Add meg az emailed"})]}),g.jsxs("div",{className:"form-group",children:[g.jsx("label",{htmlFor:"product",children:"Termék"}),g.jsxs("select",{id:"product",name:"product",className:"input-field",children:[g.jsx("option",{className:"input-field1",value:"basic",children:"Basic"}),g.jsx("option",{className:"input-field1",value:"pro",children:"Pro"}),g.jsx("option",{className:"input-field1",value:"enterprise",children:"Enterprise"})]})]}),g.jsxs("div",{className:"form-group",children:[g.jsx("label",{htmlFor:"additionalText",children:"További szöveg"}),g.jsx("textarea",{id:"additionalText",name:"additionalText",className:"input-field expandable",rows:"1",placeholder:"Add meg a további szöveget"})]}),g.jsxs("div",{className:"form-group",children:[g.jsx("label",{htmlFor:"phoneNumber",children:"Telefonszám"}),g.jsx("input",{type:"tel",id:"phoneNumber",name:"phoneNumber",className:"input-field",placeholder:"Add meg a telefonszámod"})]}),g.jsx("button",{type:"submit",className:o?"btn-submitdisabled":"btn-submit",disabled:o,style:{marginRight:"auto",marginLeft:"auto",display:"block"},children:"Beküldés"}),o&&g.jsxs("p",{style:{textAlign:"center"},children:["Következő küldésig: ",Math.floor(l/60)," perc ",l%60," másodperc"]})]}),g.jsx(gb,{onClose:f,className:t?"show":"hide"}),g.jsx(vb,{onClose:f,className:n?"show":"hide",message:"A rendelés leadás sikeres."})]})]})}const E9=({message:t,onConfirm:e,onCancel:n})=>g.jsx("div",{className:"modal",style:{display:t?"block":"none"},children:g.jsxs("div",{className:"modal-content",children:[g.jsx("p",{children:t}),g.jsx("button",{className:"btnm",onClick:()=>{e()},children:"Elfogad"}),g.jsx("button",{onClick:n,children:"Mégse"})]})}),T9=({isAdmin:t})=>{const[e,n]=A.useState([]),[r,i]=A.useState(""),[s,o]=A.useState("Mátyás Team"),[a,l]=A.useState(null),[u,c]=A.useState(!1);A.useEffect(()=>{(async()=>{try{const _=(await Q.firestore().collection("todos").get()).docs.map(E=>({id:E.id,...E.data()}));n(_)}catch(m){console.error("Error fetching todos:",m)}})();const w=Q.firestore().collection("todos").onSnapshot(m=>{const p=m.docs.map(_=>({id:_.id,..._.data()}));n(p)});return()=>w()},[]);const d=async()=>{if(r.trim()!=="")try{const y={title:r.trim(),completed:!1,team:s,createdByAdmin:t||!1};await Q.firestore().collection("todos").add(y),i("")}catch(y){console.error("Error adding todo:",y)}},h=async(y,w)=>{try{await Q.firestore().collection("todos").doc(y).update({completed:!w})}catch(m){console.error("Error toggling todo:",m)}},f=async y=>{console.log("Deleting todo with ID:",y);try{await Q.firestore().collection("todos").doc(y).delete(),console.log("Todo deleted successfully!"),c(!1)}catch(w){console.error("Error deleting todo:",w)}},v=y=>{console.log("Delete button clicked for todo:",y),c(!0),l(y)};return g.jsxs("div",{className:"todo-list",children:[g.jsx("h1",{children:"Todo Lista"}),g.jsxs("div",{className:"todo-btns",children:[g.jsx("input",{className:"input-field asd",type:"text",placeholder:"Todo hozzá adása",value:r,onChange:y=>i(y.target.value)}),g.jsxs("select",{className:"dropdwn",value:s,onChange:y=>o(y.target.value),children:[g.jsx("option",{value:"Mátyás Team",children:"Mátyás Team"}),g.jsx("option",{value:"Hunor Team",children:"Hunor Team"}),g.jsx("option",{value:"Gáspár Team",children:"Gáspár Team"})]}),g.jsx("button",{onClick:d,children:"Hozzá adás"})]}),g.jsx("ul",{children:e.map(y=>g.jsxs("li",{className:`todo-item ${y.completed?"completed":""}`,children:[g.jsx("input",{className:"nyomi",type:"checkbox",checked:y.completed,onChange:()=>h(y.id,y.completed)}),g.jsxs("span",{children:[y.title," (",y.team,")"]}),g.jsx("button",{onClick:()=>v(y.id),children:"X"})]},y.id))}),u&&g.jsx(E9,{message:"Biztos vagy benne hogy ki akarod törölni?",onConfirm:()=>f(a),onCancel:()=>{c(!1),l(null)}})]})};function S9(){const[t,e]=A.useState(!1),[n,r]=A.useState(!1),[i,s]=A.useState(""),[o,a]=A.useState(""),[l,u]=A.useState(""),[c]=A.useState(["Karsa Hunor Ákos","Gocsál Mátyás","Kovács Gáspár"]),d=async f=>{if(f.preventDefault(),!i||!o||!l){e(!0),r(!1);return}try{console.log("Adding new devlog...");const y=Q.firestore().collection("devlogs"),w={header:i,changes:o.split(`
`),devName:l,time:Q.firestore.Timestamp.now()};await y.add(w),console.log("New devlog added successfully!"),r(!0),e(!1),s(""),a(""),u("")}catch(v){console.error("Error adding devlog:",v),e(!0),r(!1)}},h=()=>{e(!1),r(!1)};return g.jsxs("div",{className:"container orders-management devlog-management",children:[g.jsx("h2",{className:"devlog-header",children:"Új fejlesztői napló hozzáadása"}),g.jsxs("form",{onSubmit:d,children:[g.jsxs("div",{className:"form-group",children:[g.jsx("label",{htmlFor:"devlogHeader",children:"Cím:"}),g.jsx("input",{type:"text",id:"devlogHeader",value:i,onChange:f=>s(f.target.value),className:"devlogheader",placeholder:"Add meg a címet"})]}),g.jsxs("div",{className:"form-group",children:[g.jsx("label",{htmlFor:"devlogChanges",children:"Változások:"}),g.jsx("textarea",{id:"devlogChanges",value:o,onChange:f=>a(f.target.value),className:"input-field expandable",rows:"3",placeholder:"Add meg a változásokat (új sorokkal elválasztva)"})]}),g.jsxs("div",{className:"form-group",children:[g.jsx("label",{htmlFor:"devName",children:"Fejlesztő neve:"}),g.jsxs("select",{id:"devName",value:l,onChange:f=>u(f.target.value),className:"input-field",children:[g.jsx("option",{value:"",children:"Válassz fejlesztőt"}),c.map((f,v)=>g.jsx("option",{value:f,children:f},v))]})]}),g.jsx("button",{type:"submit",className:"btn-submit",children:"Hozzáadás"})]}),g.jsx(gb,{onClose:h,className:t?"show":"hide"}),g.jsx(vb,{onClose:h,className:n?"show":"hide",message:"A devlog hozzáadása sikeres."})]})}const A9=()=>{const[t,e]=A.useState([]),[n,r]=A.useState([]),[i,s]=A.useState(!0),[o,a]=A.useState(!0);A.useState([]),A.useState(""),A.useState(""),A.useState(!0);const[l,u]=A.useState(!1),c=()=>{u(!l);const v=document.querySelector(".body2");v&&v.classList.toggle("show")};A.useEffect(()=>{(async()=>{try{setTimeout(async()=>{const w=(await Q.firestore().collection("users").get()).docs.map(m=>({id:m.id,...m.data()}));e(w),s(!1)},1e3)}catch(y){console.error("Error fetching users:",y)}})()},[]),A.useEffect(()=>{(async()=>{try{setTimeout(async()=>{const w=(await Q.firestore().collection("orders").get()).docs.map(m=>({id:m.id,...m.data()}));r(w),a(!1)},1e3)}catch(y){console.error("Error fetching orders:",y)}})()},[]);const d=async(v,y)=>{try{await Q.firestore().collection("users").doc(v).update({role:y}),y==="admin"?await Q.firestore().collection("admins").doc(v).set({isAdmin:!0}):await Q.firestore().collection("admins").doc(v).delete(),e(t.map(w=>w.id===v?{...w,role:y}:w))}catch(w){console.error("Error updating role:",w)}},h=async(v,y)=>{const w=y==="Kész"?"Elfogadás Alatt":"Kész";try{await Q.firestore().collection("orders").doc(v).update({status:w}),r(n.map(m=>m.id===v?{...m,status:w}:m))}catch(m){console.error(`Error marking order as ${w}:`,m)}},f=async v=>{try{await Q.firestore().collection("orders").doc(v).delete(),r(n.filter(y=>y.id!==v))}catch(y){console.error("Error deleting order:",y)}};return g.jsx("div",{className:"body2",children:g.jsx("div",{className:"admin-panel-container",children:o||i?g.jsx("div",{className:"loading-spinner-container",children:g.jsx("span",{className:"loader"})}):g.jsxs(g.Fragment,{children:[g.jsxs("div",{className:"orders-management",children:[g.jsx("h2",{className:"section-title",children:"Rendelések kezelés"}),g.jsx("ul",{className:"orders-list",children:n.map(v=>g.jsxs("li",{className:"order-item",children:[g.jsxs("div",{className:"order-info",children:[g.jsxs("span",{className:`order-name status-${v.status}`,children:["Név: ",v.name]}),g.jsxs("span",{className:`order-email status-${v.status}`,children:["Email: ",v.email]}),g.jsxs("span",{className:`order-email status-${v.status}`,children:["Tel.: ",v.phoneNumber]}),g.jsxs("span",{className:`order-email status-${v.status}`,children:["Típus: ",v.product]}),g.jsxs("span",{className:`order-email status-${v.status}`,children:["További Szöveg: ",v.additionalText]}),g.jsxs("span",{className:`order-status status-${v.status}`,children:["Státusz: ",v.status]})]}),g.jsxs("div",{className:"order-actions",children:[g.jsx("input",{type:"checkbox",checked:v.status==="Kész",onChange:()=>h(v.id,v.status),className:"order-done-checkbox"}),g.jsxs("div",{className:"xthing",children:["                                    ",g.jsx(at,{icon:DS,className:"order-delete-icon",onClick:()=>f(v.id)})]})]}),g.jsx("hr",{})]},v.id))})]}),g.jsxs("div",{className:"users-management",children:[g.jsx("h2",{className:"section-title",children:"Felhasználók kezelése"}),g.jsx("ul",{className:"users-list",children:t.map(v=>g.jsxs("li",{className:"user-item",children:[g.jsxs("div",{className:"user-info",children:[g.jsxs("span",{className:"user-name",children:[" ",v.name]}),g.jsxs("span",{className:"user-email",children:["Email: ",v.email]}),g.jsxs("span",{className:"user-role",children:["Rang: ",v.role]})]}),g.jsxs("select",{onChange:y=>d(v.id,y.target.value),value:v.role,className:"user-role-select",children:[g.jsx("option",{value:"admin",children:"Admin"}),g.jsx("option",{value:"dev",children:"Dev"}),g.jsx("option",{value:"user",children:"User"})]})]},v.id))})]}),g.jsx(S9,{}),g.jsx("button",{className:"experimental-background-button",onClick:c,children:l?"Turn off Experimental Background":"Turn on Experimental Background"})]})})})};function k9({onClose:t,onConfirm:e,className:n,showConfirmModal:r}){return console.log("showConfirmModal:",r),g.jsx("div",{className:`modal ${n} ${r?"show":""}`,children:g.jsxs("div",{className:"modal-content",children:[g.jsx("span",{className:"close",onClick:t,children:"×"}),g.jsx("h2",{children:"Erősítés"}),g.jsx("p",{children:"Biztosan törölni szeretné ezt a naplóbejegyzést?"}),g.jsxs("div",{className:"button-container",children:[g.jsx("button",{onClick:e,style:{marginRight:"10px"},children:"Törlés"}),g.jsx("button",{onClick:t,children:"Mégse"})]})]})})}function P9(){const[t,e]=A.useState([]),[n,r]=A.useState(!0),[i,s]=A.useState(!1),[o,a]=A.useState(null),[l,u]=A.useState(!1);A.useEffect(()=>{const v=async()=>{try{const _=(await Q.firestore().collection("devlogs").get()).docs.map(E=>({id:E.id,...E.data()}));e(_),r(!1)}catch(m){console.error("Hiba a devnaplók lekérésekor:",m)}},y=async()=>{try{const m=Q.auth().currentUser;if(m){const p=await Q.firestore().collection("admins").doc(m.uid).get();s(p.exists)}}catch(m){console.error("Error checking admin status:",m)}},w=Q.auth().onAuthStateChanged(m=>{m?y():s(!1)});return v(),()=>w()},[]),console.log("showConfirmModal:",l);const c=v=>!v||!v.seconds?"Érvénytelen időbélyeg":new Date(v.seconds*1e3).toLocaleString(),d=v=>{a(v),u(!0)},h=async()=>{if(o)try{await Q.firestore().collection("devlogs").doc(o.id).delete(),e(t.filter(v=>v.id!==o.id))}catch(v){console.error("Hiba a devnapló törlésekor:",v)}u(!1)},f=()=>{u(!1)};return n?g.jsx("p",{children:"Betöltés..."}):g.jsxs("div",{children:[g.jsx("h1",{className:"devh1",children:"Fejlesztői naplók"}),g.jsx("ul",{className:"uls",children:t.map(v=>g.jsxs("div",{className:"devlog-entry",children:[i&&g.jsx("span",{className:"delete-icon",onClick:()=>d(v),children:"X"}),g.jsxs("h2",{className:"cim",children:["Cím: ",g.jsx("b",{children:v.header})]}),Array.isArray(v.changes)?g.jsxs("div",{className:"others",children:[g.jsx("p",{children:"Változások:"}),g.jsx("ul",{className:"others2",children:v.changes.map(y=>g.jsx("li",{children:y},y))})]}):g.jsx("p",{children:"Nincsenek rögzített változások"}),g.jsxs("p",{className:"others",children:["Fejlesztő: ",v.devName]}),g.jsxs("p",{className:"others",children:["Idő: ",c(v.time)]}),g.jsx("hr",{className:"hrs"})]},v.id))}),l&&g.jsx(k9,{onClose:f,onConfirm:h,className:"delete-confirm-modal",showConfirmModal:!0})]})}const R9={apiKey:"AIzaSyCw4L9qdJe-iebiqi7LCab63IBiv34SgCI",authDomain:"top-t-6d92f.firebaseapp.com",projectId:"top-t-6d92f",storageBucket:"top-t-6d92f.appspot.com",messagingSenderId:"250872549223",appId:"1:250872549223:web:9191bf8a9f1a5aff04e9c2",measurementId:"G-48HZBJYJY9Í"},yb=Q.initializeApp(R9);Q.auth(yb);Q.firestore(yb);function b9(){return g.jsxs(BN,{children:[g.jsx(c9,{}),g.jsxs(LN,{children:[g.jsx(Bn,{path:"/",element:g.jsx(p9,{})}),g.jsx(Bn,{path:"/About",element:g.jsx(v9,{})}),g.jsx(Bn,{path:"/PortfolioPage",element:g.jsx(w9,{})}),g.jsx(Bn,{path:"/OrderPage",element:g.jsx(I9,{})}),g.jsx(Bn,{path:"/TodoList",element:g.jsx(T9,{})}),g.jsx(Bn,{path:"/Login",element:g.jsx(l9,{})}),g.jsx(Bn,{path:"/AdminPanel",element:g.jsx(A9,{})}),g.jsx(Bn,{path:"/DevlogPage",element:g.jsx(P9,{})})]})]})}Rp.createRoot(document.getElementById("root")).render(g.jsx(oh.StrictMode,{children:g.jsx(b9,{})}));
