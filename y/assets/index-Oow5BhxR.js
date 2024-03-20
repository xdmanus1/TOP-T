function vb(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function PE(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var kE={exports:{}},ih={},RE={exports:{}},te={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lu=Symbol.for("react.element"),_b=Symbol.for("react.portal"),wb=Symbol.for("react.fragment"),Ib=Symbol.for("react.strict_mode"),Eb=Symbol.for("react.profiler"),Tb=Symbol.for("react.provider"),Sb=Symbol.for("react.context"),Ab=Symbol.for("react.forward_ref"),Pb=Symbol.for("react.suspense"),kb=Symbol.for("react.memo"),Rb=Symbol.for("react.lazy"),L_=Symbol.iterator;function bb(t){return t===null||typeof t!="object"?null:(t=L_&&t[L_]||t["@@iterator"],typeof t=="function"?t:null)}var bE={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},CE=Object.assign,xE={};function jo(t,e,n){this.props=t,this.context=e,this.refs=xE,this.updater=n||bE}jo.prototype.isReactComponent={};jo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};jo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function NE(){}NE.prototype=jo.prototype;function bg(t,e,n){this.props=t,this.context=e,this.refs=xE,this.updater=n||bE}var Cg=bg.prototype=new NE;Cg.constructor=bg;CE(Cg,jo.prototype);Cg.isPureReactComponent=!0;var M_=Array.isArray,DE=Object.prototype.hasOwnProperty,xg={current:null},OE={key:!0,ref:!0,__self:!0,__source:!0};function VE(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)DE.call(e,r)&&!OE.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:lu,type:t,key:s,ref:o,props:i,_owner:xg.current}}function Cb(t,e){return{$$typeof:lu,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Ng(t){return typeof t=="object"&&t!==null&&t.$$typeof===lu}function xb(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var F_=/\/+/g;function Pf(t,e){return typeof t=="object"&&t!==null&&t.key!=null?xb(""+t.key):e.toString(36)}function bc(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case lu:case _b:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Pf(o,0):r,M_(i)?(n="",t!=null&&(n=t.replace(F_,"$&/")+"/"),bc(i,e,n,"",function(u){return u})):i!=null&&(Ng(i)&&(i=Cb(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(F_,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",M_(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+Pf(s,a);o+=bc(s,e,n,l,i)}else if(l=bb(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+Pf(s,a++),o+=bc(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Gu(t,e,n){if(t==null)return t;var r=[],i=0;return bc(t,r,"","",function(s){return e.call(n,s,i++)}),r}function Nb(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var bt={current:null},Cc={transition:null},Db={ReactCurrentDispatcher:bt,ReactCurrentBatchConfig:Cc,ReactCurrentOwner:xg};te.Children={map:Gu,forEach:function(t,e,n){Gu(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Gu(t,function(){e++}),e},toArray:function(t){return Gu(t,function(e){return e})||[]},only:function(t){if(!Ng(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};te.Component=jo;te.Fragment=wb;te.Profiler=Eb;te.PureComponent=bg;te.StrictMode=Ib;te.Suspense=Pb;te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Db;te.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=CE({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=xg.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)DE.call(e,l)&&!OE.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:lu,type:t.type,key:i,ref:s,props:r,_owner:o}};te.createContext=function(t){return t={$$typeof:Sb,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Tb,_context:t},t.Consumer=t};te.createElement=VE;te.createFactory=function(t){var e=VE.bind(null,t);return e.type=t,e};te.createRef=function(){return{current:null}};te.forwardRef=function(t){return{$$typeof:Ab,render:t}};te.isValidElement=Ng;te.lazy=function(t){return{$$typeof:Rb,_payload:{_status:-1,_result:t},_init:Nb}};te.memo=function(t,e){return{$$typeof:kb,type:t,compare:e===void 0?null:e}};te.startTransition=function(t){var e=Cc.transition;Cc.transition={};try{t()}finally{Cc.transition=e}};te.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};te.useCallback=function(t,e){return bt.current.useCallback(t,e)};te.useContext=function(t){return bt.current.useContext(t)};te.useDebugValue=function(){};te.useDeferredValue=function(t){return bt.current.useDeferredValue(t)};te.useEffect=function(t,e){return bt.current.useEffect(t,e)};te.useId=function(){return bt.current.useId()};te.useImperativeHandle=function(t,e,n){return bt.current.useImperativeHandle(t,e,n)};te.useInsertionEffect=function(t,e){return bt.current.useInsertionEffect(t,e)};te.useLayoutEffect=function(t,e){return bt.current.useLayoutEffect(t,e)};te.useMemo=function(t,e){return bt.current.useMemo(t,e)};te.useReducer=function(t,e,n){return bt.current.useReducer(t,e,n)};te.useRef=function(t){return bt.current.useRef(t)};te.useState=function(t){return bt.current.useState(t)};te.useSyncExternalStore=function(t,e,n){return bt.current.useSyncExternalStore(t,e,n)};te.useTransition=function(){return bt.current.useTransition()};te.version="18.2.0";RE.exports=te;var k=RE.exports;const sh=PE(k),Ob=vb({__proto__:null,default:sh},[k]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vb=k,Lb=Symbol.for("react.element"),Mb=Symbol.for("react.fragment"),Fb=Object.prototype.hasOwnProperty,Ub=Vb.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,jb={key:!0,ref:!0,__self:!0,__source:!0};function LE(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)Fb.call(e,r)&&!jb.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:Lb,type:t,key:s,ref:o,props:i,_owner:Ub.current}}ih.Fragment=Mb;ih.jsx=LE;ih.jsxs=LE;kE.exports=ih;var y=kE.exports,kp={},ME={exports:{}},Qt={},FE={exports:{}},UE={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(U,H){var Q=U.length;U.push(H);e:for(;0<Q;){var Ve=Q-1>>>1,Ke=U[Ve];if(0<i(Ke,H))U[Ve]=H,U[Q]=Ke,Q=Ve;else break e}}function n(U){return U.length===0?null:U[0]}function r(U){if(U.length===0)return null;var H=U[0],Q=U.pop();if(Q!==H){U[0]=Q;e:for(var Ve=0,Ke=U.length,qu=Ke>>>1;Ve<qu;){var Ii=2*(Ve+1)-1,Af=U[Ii],Ei=Ii+1,Wu=U[Ei];if(0>i(Af,Q))Ei<Ke&&0>i(Wu,Af)?(U[Ve]=Wu,U[Ei]=Q,Ve=Ei):(U[Ve]=Af,U[Ii]=Q,Ve=Ii);else if(Ei<Ke&&0>i(Wu,Q))U[Ve]=Wu,U[Ei]=Q,Ve=Ei;else break e}}return H}function i(U,H){var Q=U.sortIndex-H.sortIndex;return Q!==0?Q:U.id-H.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,d=null,h=3,f=!1,_=!1,v=!1,w=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(U){for(var H=n(u);H!==null;){if(H.callback===null)r(u);else if(H.startTime<=U)r(u),H.sortIndex=H.expirationTime,e(l,H);else break;H=n(u)}}function E(U){if(v=!1,g(U),!_)if(n(l)!==null)_=!0,Tf(S);else{var H=n(u);H!==null&&Sf(E,H.startTime-U)}}function S(U,H){_=!1,v&&(v=!1,m(M),M=-1),f=!0;var Q=h;try{for(g(H),d=n(l);d!==null&&(!(d.expirationTime>H)||U&&!un());){var Ve=d.callback;if(typeof Ve=="function"){d.callback=null,h=d.priorityLevel;var Ke=Ve(d.expirationTime<=H);H=t.unstable_now(),typeof Ke=="function"?d.callback=Ke:d===n(l)&&r(l),g(H)}else r(l);d=n(l)}if(d!==null)var qu=!0;else{var Ii=n(u);Ii!==null&&Sf(E,Ii.startTime-H),qu=!1}return qu}finally{d=null,h=Q,f=!1}}var R=!1,x=null,M=-1,J=5,G=-1;function un(){return!(t.unstable_now()-G<J)}function oa(){if(x!==null){var U=t.unstable_now();G=U;var H=!0;try{H=x(!0,U)}finally{H?aa():(R=!1,x=null)}}else R=!1}var aa;if(typeof p=="function")aa=function(){p(oa)};else if(typeof MessageChannel<"u"){var V_=new MessageChannel,yb=V_.port2;V_.port1.onmessage=oa,aa=function(){yb.postMessage(null)}}else aa=function(){w(oa,0)};function Tf(U){x=U,R||(R=!0,aa())}function Sf(U,H){M=w(function(){U(t.unstable_now())},H)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(U){U.callback=null},t.unstable_continueExecution=function(){_||f||(_=!0,Tf(S))},t.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):J=0<U?Math.floor(1e3/U):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(U){switch(h){case 1:case 2:case 3:var H=3;break;default:H=h}var Q=h;h=H;try{return U()}finally{h=Q}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(U,H){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var Q=h;h=U;try{return H()}finally{h=Q}},t.unstable_scheduleCallback=function(U,H,Q){var Ve=t.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?Ve+Q:Ve):Q=Ve,U){case 1:var Ke=-1;break;case 2:Ke=250;break;case 5:Ke=1073741823;break;case 4:Ke=1e4;break;default:Ke=5e3}return Ke=Q+Ke,U={id:c++,callback:H,priorityLevel:U,startTime:Q,expirationTime:Ke,sortIndex:-1},Q>Ve?(U.sortIndex=Q,e(u,U),n(l)===null&&U===n(u)&&(v?(m(M),M=-1):v=!0,Sf(E,Q-Ve))):(U.sortIndex=Ke,e(l,U),_||f||(_=!0,Tf(S))),U},t.unstable_shouldYield=un,t.unstable_wrapCallback=function(U){var H=h;return function(){var Q=h;h=H;try{return U.apply(this,arguments)}finally{h=Q}}}})(UE);FE.exports=UE;var $b=FE.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jE=k,Gt=$b;function b(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var $E=new Set,ol={};function ms(t,e){yo(t,e),yo(t+"Capture",e)}function yo(t,e){for(ol[t]=e,t=0;t<e.length;t++)$E.add(e[t])}var Zn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Rp=Object.prototype.hasOwnProperty,zb=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,U_={},j_={};function Bb(t){return Rp.call(j_,t)?!0:Rp.call(U_,t)?!1:zb.test(t)?j_[t]=!0:(U_[t]=!0,!1)}function qb(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Wb(t,e,n,r){if(e===null||typeof e>"u"||qb(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Ct(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var dt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){dt[t]=new Ct(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];dt[e]=new Ct(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){dt[t]=new Ct(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){dt[t]=new Ct(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){dt[t]=new Ct(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){dt[t]=new Ct(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){dt[t]=new Ct(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){dt[t]=new Ct(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){dt[t]=new Ct(t,5,!1,t.toLowerCase(),null,!1,!1)});var Dg=/[\-:]([a-z])/g;function Og(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Dg,Og);dt[e]=new Ct(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Dg,Og);dt[e]=new Ct(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Dg,Og);dt[e]=new Ct(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){dt[t]=new Ct(t,1,!1,t.toLowerCase(),null,!1,!1)});dt.xlinkHref=new Ct("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){dt[t]=new Ct(t,1,!1,t.toLowerCase(),null,!0,!0)});function Vg(t,e,n,r){var i=dt.hasOwnProperty(e)?dt[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Wb(e,n,i,r)&&(n=null),r||i===null?Bb(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var ur=jE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ku=Symbol.for("react.element"),Us=Symbol.for("react.portal"),js=Symbol.for("react.fragment"),Lg=Symbol.for("react.strict_mode"),bp=Symbol.for("react.profiler"),zE=Symbol.for("react.provider"),BE=Symbol.for("react.context"),Mg=Symbol.for("react.forward_ref"),Cp=Symbol.for("react.suspense"),xp=Symbol.for("react.suspense_list"),Fg=Symbol.for("react.memo"),Sr=Symbol.for("react.lazy"),qE=Symbol.for("react.offscreen"),$_=Symbol.iterator;function la(t){return t===null||typeof t!="object"?null:(t=$_&&t[$_]||t["@@iterator"],typeof t=="function"?t:null)}var Pe=Object.assign,kf;function Pa(t){if(kf===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);kf=e&&e[1]||""}return`
`+kf+t}var Rf=!1;function bf(t,e){if(!t||Rf)return"";Rf=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Rf=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Pa(t):""}function Gb(t){switch(t.tag){case 5:return Pa(t.type);case 16:return Pa("Lazy");case 13:return Pa("Suspense");case 19:return Pa("SuspenseList");case 0:case 2:case 15:return t=bf(t.type,!1),t;case 11:return t=bf(t.type.render,!1),t;case 1:return t=bf(t.type,!0),t;default:return""}}function Np(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case js:return"Fragment";case Us:return"Portal";case bp:return"Profiler";case Lg:return"StrictMode";case Cp:return"Suspense";case xp:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case BE:return(t.displayName||"Context")+".Consumer";case zE:return(t._context.displayName||"Context")+".Provider";case Mg:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Fg:return e=t.displayName||null,e!==null?e:Np(t.type)||"Memo";case Sr:e=t._payload,t=t._init;try{return Np(t(e))}catch{}}return null}function Kb(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Np(e);case 8:return e===Lg?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Kr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function WE(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Hb(t){var e=WE(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Hu(t){t._valueTracker||(t._valueTracker=Hb(t))}function GE(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=WE(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function td(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Dp(t,e){var n=e.checked;return Pe({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function z_(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Kr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function KE(t,e){e=e.checked,e!=null&&Vg(t,"checked",e,!1)}function Op(t,e){KE(t,e);var n=Kr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Vp(t,e.type,n):e.hasOwnProperty("defaultValue")&&Vp(t,e.type,Kr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function B_(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Vp(t,e,n){(e!=="number"||td(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ka=Array.isArray;function no(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Kr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Lp(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(b(91));return Pe({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function q_(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(b(92));if(ka(n)){if(1<n.length)throw Error(b(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Kr(n)}}function HE(t,e){var n=Kr(e.value),r=Kr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function W_(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function QE(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Mp(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?QE(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Qu,YE=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Qu=Qu||document.createElement("div"),Qu.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Qu.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function al(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ua={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Qb=["Webkit","ms","Moz","O"];Object.keys(Ua).forEach(function(t){Qb.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ua[e]=Ua[t]})});function XE(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ua.hasOwnProperty(t)&&Ua[t]?(""+e).trim():e+"px"}function JE(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=XE(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var Yb=Pe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Fp(t,e){if(e){if(Yb[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(b(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(b(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(b(61))}if(e.style!=null&&typeof e.style!="object")throw Error(b(62))}}function Up(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var jp=null;function Ug(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var $p=null,ro=null,io=null;function G_(t){if(t=du(t)){if(typeof $p!="function")throw Error(b(280));var e=t.stateNode;e&&(e=ch(e),$p(t.stateNode,t.type,e))}}function ZE(t){ro?io?io.push(t):io=[t]:ro=t}function e1(){if(ro){var t=ro,e=io;if(io=ro=null,G_(t),e)for(t=0;t<e.length;t++)G_(e[t])}}function t1(t,e){return t(e)}function n1(){}var Cf=!1;function r1(t,e,n){if(Cf)return t(e,n);Cf=!0;try{return t1(t,e,n)}finally{Cf=!1,(ro!==null||io!==null)&&(n1(),e1())}}function ll(t,e){var n=t.stateNode;if(n===null)return null;var r=ch(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(b(231,e,typeof n));return n}var zp=!1;if(Zn)try{var ua={};Object.defineProperty(ua,"passive",{get:function(){zp=!0}}),window.addEventListener("test",ua,ua),window.removeEventListener("test",ua,ua)}catch{zp=!1}function Xb(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var ja=!1,nd=null,rd=!1,Bp=null,Jb={onError:function(t){ja=!0,nd=t}};function Zb(t,e,n,r,i,s,o,a,l){ja=!1,nd=null,Xb.apply(Jb,arguments)}function eC(t,e,n,r,i,s,o,a,l){if(Zb.apply(this,arguments),ja){if(ja){var u=nd;ja=!1,nd=null}else throw Error(b(198));rd||(rd=!0,Bp=u)}}function gs(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function i1(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function K_(t){if(gs(t)!==t)throw Error(b(188))}function tC(t){var e=t.alternate;if(!e){if(e=gs(t),e===null)throw Error(b(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return K_(i),t;if(s===r)return K_(i),e;s=s.sibling}throw Error(b(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(b(189))}}if(n.alternate!==r)throw Error(b(190))}if(n.tag!==3)throw Error(b(188));return n.stateNode.current===n?t:e}function s1(t){return t=tC(t),t!==null?o1(t):null}function o1(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=o1(t);if(e!==null)return e;t=t.sibling}return null}var a1=Gt.unstable_scheduleCallback,H_=Gt.unstable_cancelCallback,nC=Gt.unstable_shouldYield,rC=Gt.unstable_requestPaint,Le=Gt.unstable_now,iC=Gt.unstable_getCurrentPriorityLevel,jg=Gt.unstable_ImmediatePriority,l1=Gt.unstable_UserBlockingPriority,id=Gt.unstable_NormalPriority,sC=Gt.unstable_LowPriority,u1=Gt.unstable_IdlePriority,oh=null,Vn=null;function oC(t){if(Vn&&typeof Vn.onCommitFiberRoot=="function")try{Vn.onCommitFiberRoot(oh,t,void 0,(t.current.flags&128)===128)}catch{}}var mn=Math.clz32?Math.clz32:uC,aC=Math.log,lC=Math.LN2;function uC(t){return t>>>=0,t===0?32:31-(aC(t)/lC|0)|0}var Yu=64,Xu=4194304;function Ra(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function sd(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Ra(a):(s&=o,s!==0&&(r=Ra(s)))}else o=n&~i,o!==0?r=Ra(o):s!==0&&(r=Ra(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-mn(e),i=1<<n,r|=t[n],e&=~i;return r}function cC(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function dC(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-mn(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=cC(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function qp(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function c1(){var t=Yu;return Yu<<=1,!(Yu&4194240)&&(Yu=64),t}function xf(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function uu(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-mn(e),t[e]=n}function hC(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-mn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function $g(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-mn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var ae=0;function d1(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var h1,zg,f1,p1,m1,Wp=!1,Ju=[],Lr=null,Mr=null,Fr=null,ul=new Map,cl=new Map,Pr=[],fC="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Q_(t,e){switch(t){case"focusin":case"focusout":Lr=null;break;case"dragenter":case"dragleave":Mr=null;break;case"mouseover":case"mouseout":Fr=null;break;case"pointerover":case"pointerout":ul.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":cl.delete(e.pointerId)}}function ca(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=du(e),e!==null&&zg(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function pC(t,e,n,r,i){switch(e){case"focusin":return Lr=ca(Lr,t,e,n,r,i),!0;case"dragenter":return Mr=ca(Mr,t,e,n,r,i),!0;case"mouseover":return Fr=ca(Fr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return ul.set(s,ca(ul.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,cl.set(s,ca(cl.get(s)||null,t,e,n,r,i)),!0}return!1}function g1(t){var e=Di(t.target);if(e!==null){var n=gs(e);if(n!==null){if(e=n.tag,e===13){if(e=i1(n),e!==null){t.blockedOn=e,m1(t.priority,function(){f1(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function xc(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Gp(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);jp=r,n.target.dispatchEvent(r),jp=null}else return e=du(n),e!==null&&zg(e),t.blockedOn=n,!1;e.shift()}return!0}function Y_(t,e,n){xc(t)&&n.delete(e)}function mC(){Wp=!1,Lr!==null&&xc(Lr)&&(Lr=null),Mr!==null&&xc(Mr)&&(Mr=null),Fr!==null&&xc(Fr)&&(Fr=null),ul.forEach(Y_),cl.forEach(Y_)}function da(t,e){t.blockedOn===e&&(t.blockedOn=null,Wp||(Wp=!0,Gt.unstable_scheduleCallback(Gt.unstable_NormalPriority,mC)))}function dl(t){function e(i){return da(i,t)}if(0<Ju.length){da(Ju[0],t);for(var n=1;n<Ju.length;n++){var r=Ju[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Lr!==null&&da(Lr,t),Mr!==null&&da(Mr,t),Fr!==null&&da(Fr,t),ul.forEach(e),cl.forEach(e),n=0;n<Pr.length;n++)r=Pr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Pr.length&&(n=Pr[0],n.blockedOn===null);)g1(n),n.blockedOn===null&&Pr.shift()}var so=ur.ReactCurrentBatchConfig,od=!0;function gC(t,e,n,r){var i=ae,s=so.transition;so.transition=null;try{ae=1,Bg(t,e,n,r)}finally{ae=i,so.transition=s}}function yC(t,e,n,r){var i=ae,s=so.transition;so.transition=null;try{ae=4,Bg(t,e,n,r)}finally{ae=i,so.transition=s}}function Bg(t,e,n,r){if(od){var i=Gp(t,e,n,r);if(i===null)$f(t,e,r,ad,n),Q_(t,r);else if(pC(i,t,e,n,r))r.stopPropagation();else if(Q_(t,r),e&4&&-1<fC.indexOf(t)){for(;i!==null;){var s=du(i);if(s!==null&&h1(s),s=Gp(t,e,n,r),s===null&&$f(t,e,r,ad,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else $f(t,e,r,null,n)}}var ad=null;function Gp(t,e,n,r){if(ad=null,t=Ug(r),t=Di(t),t!==null)if(e=gs(t),e===null)t=null;else if(n=e.tag,n===13){if(t=i1(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return ad=t,null}function y1(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(iC()){case jg:return 1;case l1:return 4;case id:case sC:return 16;case u1:return 536870912;default:return 16}default:return 16}}var Cr=null,qg=null,Nc=null;function v1(){if(Nc)return Nc;var t,e=qg,n=e.length,r,i="value"in Cr?Cr.value:Cr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Nc=i.slice(t,1<r?1-r:void 0)}function Dc(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Zu(){return!0}function X_(){return!1}function Yt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Zu:X_,this.isPropagationStopped=X_,this}return Pe(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Zu)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Zu)},persist:function(){},isPersistent:Zu}),e}var $o={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Wg=Yt($o),cu=Pe({},$o,{view:0,detail:0}),vC=Yt(cu),Nf,Df,ha,ah=Pe({},cu,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Gg,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ha&&(ha&&t.type==="mousemove"?(Nf=t.screenX-ha.screenX,Df=t.screenY-ha.screenY):Df=Nf=0,ha=t),Nf)},movementY:function(t){return"movementY"in t?t.movementY:Df}}),J_=Yt(ah),_C=Pe({},ah,{dataTransfer:0}),wC=Yt(_C),IC=Pe({},cu,{relatedTarget:0}),Of=Yt(IC),EC=Pe({},$o,{animationName:0,elapsedTime:0,pseudoElement:0}),TC=Yt(EC),SC=Pe({},$o,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),AC=Yt(SC),PC=Pe({},$o,{data:0}),Z_=Yt(PC),kC={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},RC={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},bC={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function CC(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=bC[t])?!!e[t]:!1}function Gg(){return CC}var xC=Pe({},cu,{key:function(t){if(t.key){var e=kC[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Dc(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?RC[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Gg,charCode:function(t){return t.type==="keypress"?Dc(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Dc(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),NC=Yt(xC),DC=Pe({},ah,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ew=Yt(DC),OC=Pe({},cu,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Gg}),VC=Yt(OC),LC=Pe({},$o,{propertyName:0,elapsedTime:0,pseudoElement:0}),MC=Yt(LC),FC=Pe({},ah,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),UC=Yt(FC),jC=[9,13,27,32],Kg=Zn&&"CompositionEvent"in window,$a=null;Zn&&"documentMode"in document&&($a=document.documentMode);var $C=Zn&&"TextEvent"in window&&!$a,_1=Zn&&(!Kg||$a&&8<$a&&11>=$a),tw=" ",nw=!1;function w1(t,e){switch(t){case"keyup":return jC.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function I1(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var $s=!1;function zC(t,e){switch(t){case"compositionend":return I1(e);case"keypress":return e.which!==32?null:(nw=!0,tw);case"textInput":return t=e.data,t===tw&&nw?null:t;default:return null}}function BC(t,e){if($s)return t==="compositionend"||!Kg&&w1(t,e)?(t=v1(),Nc=qg=Cr=null,$s=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return _1&&e.locale!=="ko"?null:e.data;default:return null}}var qC={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function rw(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!qC[t.type]:e==="textarea"}function E1(t,e,n,r){ZE(r),e=ld(e,"onChange"),0<e.length&&(n=new Wg("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var za=null,hl=null;function WC(t){D1(t,0)}function lh(t){var e=qs(t);if(GE(e))return t}function GC(t,e){if(t==="change")return e}var T1=!1;if(Zn){var Vf;if(Zn){var Lf="oninput"in document;if(!Lf){var iw=document.createElement("div");iw.setAttribute("oninput","return;"),Lf=typeof iw.oninput=="function"}Vf=Lf}else Vf=!1;T1=Vf&&(!document.documentMode||9<document.documentMode)}function sw(){za&&(za.detachEvent("onpropertychange",S1),hl=za=null)}function S1(t){if(t.propertyName==="value"&&lh(hl)){var e=[];E1(e,hl,t,Ug(t)),r1(WC,e)}}function KC(t,e,n){t==="focusin"?(sw(),za=e,hl=n,za.attachEvent("onpropertychange",S1)):t==="focusout"&&sw()}function HC(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return lh(hl)}function QC(t,e){if(t==="click")return lh(e)}function YC(t,e){if(t==="input"||t==="change")return lh(e)}function XC(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var yn=typeof Object.is=="function"?Object.is:XC;function fl(t,e){if(yn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Rp.call(e,i)||!yn(t[i],e[i]))return!1}return!0}function ow(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function aw(t,e){var n=ow(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ow(n)}}function A1(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?A1(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function P1(){for(var t=window,e=td();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=td(t.document)}return e}function Hg(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function JC(t){var e=P1(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&A1(n.ownerDocument.documentElement,n)){if(r!==null&&Hg(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=aw(n,s);var o=aw(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var ZC=Zn&&"documentMode"in document&&11>=document.documentMode,zs=null,Kp=null,Ba=null,Hp=!1;function lw(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Hp||zs==null||zs!==td(r)||(r=zs,"selectionStart"in r&&Hg(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ba&&fl(Ba,r)||(Ba=r,r=ld(Kp,"onSelect"),0<r.length&&(e=new Wg("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=zs)))}function ec(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Bs={animationend:ec("Animation","AnimationEnd"),animationiteration:ec("Animation","AnimationIteration"),animationstart:ec("Animation","AnimationStart"),transitionend:ec("Transition","TransitionEnd")},Mf={},k1={};Zn&&(k1=document.createElement("div").style,"AnimationEvent"in window||(delete Bs.animationend.animation,delete Bs.animationiteration.animation,delete Bs.animationstart.animation),"TransitionEvent"in window||delete Bs.transitionend.transition);function uh(t){if(Mf[t])return Mf[t];if(!Bs[t])return t;var e=Bs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in k1)return Mf[t]=e[n];return t}var R1=uh("animationend"),b1=uh("animationiteration"),C1=uh("animationstart"),x1=uh("transitionend"),N1=new Map,uw="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ci(t,e){N1.set(t,e),ms(e,[t])}for(var Ff=0;Ff<uw.length;Ff++){var Uf=uw[Ff],ex=Uf.toLowerCase(),tx=Uf[0].toUpperCase()+Uf.slice(1);ci(ex,"on"+tx)}ci(R1,"onAnimationEnd");ci(b1,"onAnimationIteration");ci(C1,"onAnimationStart");ci("dblclick","onDoubleClick");ci("focusin","onFocus");ci("focusout","onBlur");ci(x1,"onTransitionEnd");yo("onMouseEnter",["mouseout","mouseover"]);yo("onMouseLeave",["mouseout","mouseover"]);yo("onPointerEnter",["pointerout","pointerover"]);yo("onPointerLeave",["pointerout","pointerover"]);ms("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ms("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ms("onBeforeInput",["compositionend","keypress","textInput","paste"]);ms("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ms("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ms("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ba="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),nx=new Set("cancel close invalid load scroll toggle".split(" ").concat(ba));function cw(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,eC(r,e,void 0,t),t.currentTarget=null}function D1(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;cw(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;cw(i,a,u),s=l}}}if(rd)throw t=Bp,rd=!1,Bp=null,t}function he(t,e){var n=e[Zp];n===void 0&&(n=e[Zp]=new Set);var r=t+"__bubble";n.has(r)||(O1(e,t,2,!1),n.add(r))}function jf(t,e,n){var r=0;e&&(r|=4),O1(n,t,r,e)}var tc="_reactListening"+Math.random().toString(36).slice(2);function pl(t){if(!t[tc]){t[tc]=!0,$E.forEach(function(n){n!=="selectionchange"&&(nx.has(n)||jf(n,!1,t),jf(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[tc]||(e[tc]=!0,jf("selectionchange",!1,e))}}function O1(t,e,n,r){switch(y1(e)){case 1:var i=gC;break;case 4:i=yC;break;default:i=Bg}n=i.bind(null,e,n,t),i=void 0,!zp||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function $f(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Di(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}r1(function(){var u=s,c=Ug(n),d=[];e:{var h=N1.get(t);if(h!==void 0){var f=Wg,_=t;switch(t){case"keypress":if(Dc(n)===0)break e;case"keydown":case"keyup":f=NC;break;case"focusin":_="focus",f=Of;break;case"focusout":_="blur",f=Of;break;case"beforeblur":case"afterblur":f=Of;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":f=J_;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":f=wC;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":f=VC;break;case R1:case b1:case C1:f=TC;break;case x1:f=MC;break;case"scroll":f=vC;break;case"wheel":f=UC;break;case"copy":case"cut":case"paste":f=AC;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":f=ew}var v=(e&4)!==0,w=!v&&t==="scroll",m=v?h!==null?h+"Capture":null:h;v=[];for(var p=u,g;p!==null;){g=p;var E=g.stateNode;if(g.tag===5&&E!==null&&(g=E,m!==null&&(E=ll(p,m),E!=null&&v.push(ml(p,E,g)))),w)break;p=p.return}0<v.length&&(h=new f(h,_,null,n,c),d.push({event:h,listeners:v}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",f=t==="mouseout"||t==="pointerout",h&&n!==jp&&(_=n.relatedTarget||n.fromElement)&&(Di(_)||_[er]))break e;if((f||h)&&(h=c.window===c?c:(h=c.ownerDocument)?h.defaultView||h.parentWindow:window,f?(_=n.relatedTarget||n.toElement,f=u,_=_?Di(_):null,_!==null&&(w=gs(_),_!==w||_.tag!==5&&_.tag!==6)&&(_=null)):(f=null,_=u),f!==_)){if(v=J_,E="onMouseLeave",m="onMouseEnter",p="mouse",(t==="pointerout"||t==="pointerover")&&(v=ew,E="onPointerLeave",m="onPointerEnter",p="pointer"),w=f==null?h:qs(f),g=_==null?h:qs(_),h=new v(E,p+"leave",f,n,c),h.target=w,h.relatedTarget=g,E=null,Di(c)===u&&(v=new v(m,p+"enter",_,n,c),v.target=g,v.relatedTarget=w,E=v),w=E,f&&_)t:{for(v=f,m=_,p=0,g=v;g;g=ks(g))p++;for(g=0,E=m;E;E=ks(E))g++;for(;0<p-g;)v=ks(v),p--;for(;0<g-p;)m=ks(m),g--;for(;p--;){if(v===m||m!==null&&v===m.alternate)break t;v=ks(v),m=ks(m)}v=null}else v=null;f!==null&&dw(d,h,f,v,!1),_!==null&&w!==null&&dw(d,w,_,v,!0)}}e:{if(h=u?qs(u):window,f=h.nodeName&&h.nodeName.toLowerCase(),f==="select"||f==="input"&&h.type==="file")var S=GC;else if(rw(h))if(T1)S=YC;else{S=HC;var R=KC}else(f=h.nodeName)&&f.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(S=QC);if(S&&(S=S(t,u))){E1(d,S,n,c);break e}R&&R(t,h,u),t==="focusout"&&(R=h._wrapperState)&&R.controlled&&h.type==="number"&&Vp(h,"number",h.value)}switch(R=u?qs(u):window,t){case"focusin":(rw(R)||R.contentEditable==="true")&&(zs=R,Kp=u,Ba=null);break;case"focusout":Ba=Kp=zs=null;break;case"mousedown":Hp=!0;break;case"contextmenu":case"mouseup":case"dragend":Hp=!1,lw(d,n,c);break;case"selectionchange":if(ZC)break;case"keydown":case"keyup":lw(d,n,c)}var x;if(Kg)e:{switch(t){case"compositionstart":var M="onCompositionStart";break e;case"compositionend":M="onCompositionEnd";break e;case"compositionupdate":M="onCompositionUpdate";break e}M=void 0}else $s?w1(t,n)&&(M="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(M="onCompositionStart");M&&(_1&&n.locale!=="ko"&&($s||M!=="onCompositionStart"?M==="onCompositionEnd"&&$s&&(x=v1()):(Cr=c,qg="value"in Cr?Cr.value:Cr.textContent,$s=!0)),R=ld(u,M),0<R.length&&(M=new Z_(M,t,null,n,c),d.push({event:M,listeners:R}),x?M.data=x:(x=I1(n),x!==null&&(M.data=x)))),(x=$C?zC(t,n):BC(t,n))&&(u=ld(u,"onBeforeInput"),0<u.length&&(c=new Z_("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=x))}D1(d,e)})}function ml(t,e,n){return{instance:t,listener:e,currentTarget:n}}function ld(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=ll(t,n),s!=null&&r.unshift(ml(t,s,i)),s=ll(t,e),s!=null&&r.push(ml(t,s,i))),t=t.return}return r}function ks(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function dw(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=ll(n,s),l!=null&&o.unshift(ml(n,l,a))):i||(l=ll(n,s),l!=null&&o.push(ml(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var rx=/\r\n?/g,ix=/\u0000|\uFFFD/g;function hw(t){return(typeof t=="string"?t:""+t).replace(rx,`
`).replace(ix,"")}function nc(t,e,n){if(e=hw(e),hw(t)!==e&&n)throw Error(b(425))}function ud(){}var Qp=null,Yp=null;function Xp(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Jp=typeof setTimeout=="function"?setTimeout:void 0,sx=typeof clearTimeout=="function"?clearTimeout:void 0,fw=typeof Promise=="function"?Promise:void 0,ox=typeof queueMicrotask=="function"?queueMicrotask:typeof fw<"u"?function(t){return fw.resolve(null).then(t).catch(ax)}:Jp;function ax(t){setTimeout(function(){throw t})}function zf(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),dl(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);dl(e)}function Ur(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function pw(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var zo=Math.random().toString(36).slice(2),Tn="__reactFiber$"+zo,gl="__reactProps$"+zo,er="__reactContainer$"+zo,Zp="__reactEvents$"+zo,lx="__reactListeners$"+zo,ux="__reactHandles$"+zo;function Di(t){var e=t[Tn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[er]||n[Tn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=pw(t);t!==null;){if(n=t[Tn])return n;t=pw(t)}return e}t=n,n=t.parentNode}return null}function du(t){return t=t[Tn]||t[er],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function qs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(b(33))}function ch(t){return t[gl]||null}var em=[],Ws=-1;function di(t){return{current:t}}function ge(t){0>Ws||(t.current=em[Ws],em[Ws]=null,Ws--)}function ce(t,e){Ws++,em[Ws]=t.current,t.current=e}var Hr={},_t=di(Hr),Ft=di(!1),Qi=Hr;function vo(t,e){var n=t.type.contextTypes;if(!n)return Hr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Ut(t){return t=t.childContextTypes,t!=null}function cd(){ge(Ft),ge(_t)}function mw(t,e,n){if(_t.current!==Hr)throw Error(b(168));ce(_t,e),ce(Ft,n)}function V1(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(b(108,Kb(t)||"Unknown",i));return Pe({},n,r)}function dd(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Hr,Qi=_t.current,ce(_t,t),ce(Ft,Ft.current),!0}function gw(t,e,n){var r=t.stateNode;if(!r)throw Error(b(169));n?(t=V1(t,e,Qi),r.__reactInternalMemoizedMergedChildContext=t,ge(Ft),ge(_t),ce(_t,t)):ge(Ft),ce(Ft,n)}var qn=null,dh=!1,Bf=!1;function L1(t){qn===null?qn=[t]:qn.push(t)}function cx(t){dh=!0,L1(t)}function hi(){if(!Bf&&qn!==null){Bf=!0;var t=0,e=ae;try{var n=qn;for(ae=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}qn=null,dh=!1}catch(i){throw qn!==null&&(qn=qn.slice(t+1)),a1(jg,hi),i}finally{ae=e,Bf=!1}}return null}var Gs=[],Ks=0,hd=null,fd=0,Jt=[],Zt=0,Yi=null,Wn=1,Gn="";function Si(t,e){Gs[Ks++]=fd,Gs[Ks++]=hd,hd=t,fd=e}function M1(t,e,n){Jt[Zt++]=Wn,Jt[Zt++]=Gn,Jt[Zt++]=Yi,Yi=t;var r=Wn;t=Gn;var i=32-mn(r)-1;r&=~(1<<i),n+=1;var s=32-mn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Wn=1<<32-mn(e)+i|n<<i|r,Gn=s+t}else Wn=1<<s|n<<i|r,Gn=t}function Qg(t){t.return!==null&&(Si(t,1),M1(t,1,0))}function Yg(t){for(;t===hd;)hd=Gs[--Ks],Gs[Ks]=null,fd=Gs[--Ks],Gs[Ks]=null;for(;t===Yi;)Yi=Jt[--Zt],Jt[Zt]=null,Gn=Jt[--Zt],Jt[Zt]=null,Wn=Jt[--Zt],Jt[Zt]=null}var Wt=null,Bt=null,ve=!1,fn=null;function F1(t,e){var n=tn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function yw(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Wt=t,Bt=Ur(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Wt=t,Bt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Yi!==null?{id:Wn,overflow:Gn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=tn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Wt=t,Bt=null,!0):!1;default:return!1}}function tm(t){return(t.mode&1)!==0&&(t.flags&128)===0}function nm(t){if(ve){var e=Bt;if(e){var n=e;if(!yw(t,e)){if(tm(t))throw Error(b(418));e=Ur(n.nextSibling);var r=Wt;e&&yw(t,e)?F1(r,n):(t.flags=t.flags&-4097|2,ve=!1,Wt=t)}}else{if(tm(t))throw Error(b(418));t.flags=t.flags&-4097|2,ve=!1,Wt=t}}}function vw(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Wt=t}function rc(t){if(t!==Wt)return!1;if(!ve)return vw(t),ve=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Xp(t.type,t.memoizedProps)),e&&(e=Bt)){if(tm(t))throw U1(),Error(b(418));for(;e;)F1(t,e),e=Ur(e.nextSibling)}if(vw(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(b(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Bt=Ur(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Bt=null}}else Bt=Wt?Ur(t.stateNode.nextSibling):null;return!0}function U1(){for(var t=Bt;t;)t=Ur(t.nextSibling)}function _o(){Bt=Wt=null,ve=!1}function Xg(t){fn===null?fn=[t]:fn.push(t)}var dx=ur.ReactCurrentBatchConfig;function dn(t,e){if(t&&t.defaultProps){e=Pe({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var pd=di(null),md=null,Hs=null,Jg=null;function Zg(){Jg=Hs=md=null}function ey(t){var e=pd.current;ge(pd),t._currentValue=e}function rm(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function oo(t,e){md=t,Jg=Hs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Ot=!0),t.firstContext=null)}function on(t){var e=t._currentValue;if(Jg!==t)if(t={context:t,memoizedValue:e,next:null},Hs===null){if(md===null)throw Error(b(308));Hs=t,md.dependencies={lanes:0,firstContext:t}}else Hs=Hs.next=t;return e}var Oi=null;function ty(t){Oi===null?Oi=[t]:Oi.push(t)}function j1(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,ty(e)):(n.next=i.next,i.next=n),e.interleaved=n,tr(t,r)}function tr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Ar=!1;function ny(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function $1(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Yn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function jr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ie&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,tr(t,n)}return i=r.interleaved,i===null?(e.next=e,ty(r)):(e.next=i.next,i.next=e),r.interleaved=e,tr(t,n)}function Oc(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,$g(t,n)}}function _w(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function gd(t,e,n,r){var i=t.updateQueue;Ar=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var d=i.baseState;o=0,c=u=l=null,a=s;do{var h=a.lane,f=a.eventTime;if((r&h)===h){c!==null&&(c=c.next={eventTime:f,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var _=t,v=a;switch(h=e,f=n,v.tag){case 1:if(_=v.payload,typeof _=="function"){d=_.call(f,d,h);break e}d=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=v.payload,h=typeof _=="function"?_.call(f,d,h):_,h==null)break e;d=Pe({},d,h);break e;case 2:Ar=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,h=i.effects,h===null?i.effects=[a]:h.push(a))}else f={eventTime:f,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=f,l=d):c=c.next=f,o|=h;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;h=a,a=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(!0);if(c===null&&(l=d),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Ji|=o,t.lanes=o,t.memoizedState=d}}function ww(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(b(191,i));i.call(r)}}}var z1=new jE.Component().refs;function im(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Pe({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var hh={isMounted:function(t){return(t=t._reactInternals)?gs(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=St(),i=zr(t),s=Yn(r,i);s.payload=e,n!=null&&(s.callback=n),e=jr(t,s,i),e!==null&&(gn(e,t,i,r),Oc(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=St(),i=zr(t),s=Yn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=jr(t,s,i),e!==null&&(gn(e,t,i,r),Oc(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=St(),r=zr(t),i=Yn(n,r);i.tag=2,e!=null&&(i.callback=e),e=jr(t,i,r),e!==null&&(gn(e,t,r,n),Oc(e,t,r))}};function Iw(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!fl(n,r)||!fl(i,s):!0}function B1(t,e,n){var r=!1,i=Hr,s=e.contextType;return typeof s=="object"&&s!==null?s=on(s):(i=Ut(e)?Qi:_t.current,r=e.contextTypes,s=(r=r!=null)?vo(t,i):Hr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=hh,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Ew(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&hh.enqueueReplaceState(e,e.state,null)}function sm(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=z1,ny(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=on(s):(s=Ut(e)?Qi:_t.current,i.context=vo(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(im(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&hh.enqueueReplaceState(i,i.state,null),gd(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function fa(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(b(309));var r=n.stateNode}if(!r)throw Error(b(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===z1&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(b(284));if(!n._owner)throw Error(b(290,t))}return t}function ic(t,e){throw t=Object.prototype.toString.call(e),Error(b(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Tw(t){var e=t._init;return e(t._payload)}function q1(t){function e(m,p){if(t){var g=m.deletions;g===null?(m.deletions=[p],m.flags|=16):g.push(p)}}function n(m,p){if(!t)return null;for(;p!==null;)e(m,p),p=p.sibling;return null}function r(m,p){for(m=new Map;p!==null;)p.key!==null?m.set(p.key,p):m.set(p.index,p),p=p.sibling;return m}function i(m,p){return m=Br(m,p),m.index=0,m.sibling=null,m}function s(m,p,g){return m.index=g,t?(g=m.alternate,g!==null?(g=g.index,g<p?(m.flags|=2,p):g):(m.flags|=2,p)):(m.flags|=1048576,p)}function o(m){return t&&m.alternate===null&&(m.flags|=2),m}function a(m,p,g,E){return p===null||p.tag!==6?(p=Yf(g,m.mode,E),p.return=m,p):(p=i(p,g),p.return=m,p)}function l(m,p,g,E){var S=g.type;return S===js?c(m,p,g.props.children,E,g.key):p!==null&&(p.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Sr&&Tw(S)===p.type)?(E=i(p,g.props),E.ref=fa(m,p,g),E.return=m,E):(E=jc(g.type,g.key,g.props,null,m.mode,E),E.ref=fa(m,p,g),E.return=m,E)}function u(m,p,g,E){return p===null||p.tag!==4||p.stateNode.containerInfo!==g.containerInfo||p.stateNode.implementation!==g.implementation?(p=Xf(g,m.mode,E),p.return=m,p):(p=i(p,g.children||[]),p.return=m,p)}function c(m,p,g,E,S){return p===null||p.tag!==7?(p=qi(g,m.mode,E,S),p.return=m,p):(p=i(p,g),p.return=m,p)}function d(m,p,g){if(typeof p=="string"&&p!==""||typeof p=="number")return p=Yf(""+p,m.mode,g),p.return=m,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Ku:return g=jc(p.type,p.key,p.props,null,m.mode,g),g.ref=fa(m,null,p),g.return=m,g;case Us:return p=Xf(p,m.mode,g),p.return=m,p;case Sr:var E=p._init;return d(m,E(p._payload),g)}if(ka(p)||la(p))return p=qi(p,m.mode,g,null),p.return=m,p;ic(m,p)}return null}function h(m,p,g,E){var S=p!==null?p.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return S!==null?null:a(m,p,""+g,E);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Ku:return g.key===S?l(m,p,g,E):null;case Us:return g.key===S?u(m,p,g,E):null;case Sr:return S=g._init,h(m,p,S(g._payload),E)}if(ka(g)||la(g))return S!==null?null:c(m,p,g,E,null);ic(m,g)}return null}function f(m,p,g,E,S){if(typeof E=="string"&&E!==""||typeof E=="number")return m=m.get(g)||null,a(p,m,""+E,S);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case Ku:return m=m.get(E.key===null?g:E.key)||null,l(p,m,E,S);case Us:return m=m.get(E.key===null?g:E.key)||null,u(p,m,E,S);case Sr:var R=E._init;return f(m,p,g,R(E._payload),S)}if(ka(E)||la(E))return m=m.get(g)||null,c(p,m,E,S,null);ic(p,E)}return null}function _(m,p,g,E){for(var S=null,R=null,x=p,M=p=0,J=null;x!==null&&M<g.length;M++){x.index>M?(J=x,x=null):J=x.sibling;var G=h(m,x,g[M],E);if(G===null){x===null&&(x=J);break}t&&x&&G.alternate===null&&e(m,x),p=s(G,p,M),R===null?S=G:R.sibling=G,R=G,x=J}if(M===g.length)return n(m,x),ve&&Si(m,M),S;if(x===null){for(;M<g.length;M++)x=d(m,g[M],E),x!==null&&(p=s(x,p,M),R===null?S=x:R.sibling=x,R=x);return ve&&Si(m,M),S}for(x=r(m,x);M<g.length;M++)J=f(x,m,M,g[M],E),J!==null&&(t&&J.alternate!==null&&x.delete(J.key===null?M:J.key),p=s(J,p,M),R===null?S=J:R.sibling=J,R=J);return t&&x.forEach(function(un){return e(m,un)}),ve&&Si(m,M),S}function v(m,p,g,E){var S=la(g);if(typeof S!="function")throw Error(b(150));if(g=S.call(g),g==null)throw Error(b(151));for(var R=S=null,x=p,M=p=0,J=null,G=g.next();x!==null&&!G.done;M++,G=g.next()){x.index>M?(J=x,x=null):J=x.sibling;var un=h(m,x,G.value,E);if(un===null){x===null&&(x=J);break}t&&x&&un.alternate===null&&e(m,x),p=s(un,p,M),R===null?S=un:R.sibling=un,R=un,x=J}if(G.done)return n(m,x),ve&&Si(m,M),S;if(x===null){for(;!G.done;M++,G=g.next())G=d(m,G.value,E),G!==null&&(p=s(G,p,M),R===null?S=G:R.sibling=G,R=G);return ve&&Si(m,M),S}for(x=r(m,x);!G.done;M++,G=g.next())G=f(x,m,M,G.value,E),G!==null&&(t&&G.alternate!==null&&x.delete(G.key===null?M:G.key),p=s(G,p,M),R===null?S=G:R.sibling=G,R=G);return t&&x.forEach(function(oa){return e(m,oa)}),ve&&Si(m,M),S}function w(m,p,g,E){if(typeof g=="object"&&g!==null&&g.type===js&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Ku:e:{for(var S=g.key,R=p;R!==null;){if(R.key===S){if(S=g.type,S===js){if(R.tag===7){n(m,R.sibling),p=i(R,g.props.children),p.return=m,m=p;break e}}else if(R.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Sr&&Tw(S)===R.type){n(m,R.sibling),p=i(R,g.props),p.ref=fa(m,R,g),p.return=m,m=p;break e}n(m,R);break}else e(m,R);R=R.sibling}g.type===js?(p=qi(g.props.children,m.mode,E,g.key),p.return=m,m=p):(E=jc(g.type,g.key,g.props,null,m.mode,E),E.ref=fa(m,p,g),E.return=m,m=E)}return o(m);case Us:e:{for(R=g.key;p!==null;){if(p.key===R)if(p.tag===4&&p.stateNode.containerInfo===g.containerInfo&&p.stateNode.implementation===g.implementation){n(m,p.sibling),p=i(p,g.children||[]),p.return=m,m=p;break e}else{n(m,p);break}else e(m,p);p=p.sibling}p=Xf(g,m.mode,E),p.return=m,m=p}return o(m);case Sr:return R=g._init,w(m,p,R(g._payload),E)}if(ka(g))return _(m,p,g,E);if(la(g))return v(m,p,g,E);ic(m,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,p!==null&&p.tag===6?(n(m,p.sibling),p=i(p,g),p.return=m,m=p):(n(m,p),p=Yf(g,m.mode,E),p.return=m,m=p),o(m)):n(m,p)}return w}var wo=q1(!0),W1=q1(!1),hu={},Ln=di(hu),yl=di(hu),vl=di(hu);function Vi(t){if(t===hu)throw Error(b(174));return t}function ry(t,e){switch(ce(vl,e),ce(yl,t),ce(Ln,hu),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Mp(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Mp(e,t)}ge(Ln),ce(Ln,e)}function Io(){ge(Ln),ge(yl),ge(vl)}function G1(t){Vi(vl.current);var e=Vi(Ln.current),n=Mp(e,t.type);e!==n&&(ce(yl,t),ce(Ln,n))}function iy(t){yl.current===t&&(ge(Ln),ge(yl))}var Te=di(0);function yd(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var qf=[];function sy(){for(var t=0;t<qf.length;t++)qf[t]._workInProgressVersionPrimary=null;qf.length=0}var Vc=ur.ReactCurrentDispatcher,Wf=ur.ReactCurrentBatchConfig,Xi=0,Se=null,Be=null,Qe=null,vd=!1,qa=!1,_l=0,hx=0;function ft(){throw Error(b(321))}function oy(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!yn(t[n],e[n]))return!1;return!0}function ay(t,e,n,r,i,s){if(Xi=s,Se=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Vc.current=t===null||t.memoizedState===null?gx:yx,t=n(r,i),qa){s=0;do{if(qa=!1,_l=0,25<=s)throw Error(b(301));s+=1,Qe=Be=null,e.updateQueue=null,Vc.current=vx,t=n(r,i)}while(qa)}if(Vc.current=_d,e=Be!==null&&Be.next!==null,Xi=0,Qe=Be=Se=null,vd=!1,e)throw Error(b(300));return t}function ly(){var t=_l!==0;return _l=0,t}function En(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Qe===null?Se.memoizedState=Qe=t:Qe=Qe.next=t,Qe}function an(){if(Be===null){var t=Se.alternate;t=t!==null?t.memoizedState:null}else t=Be.next;var e=Qe===null?Se.memoizedState:Qe.next;if(e!==null)Qe=e,Be=t;else{if(t===null)throw Error(b(310));Be=t,t={memoizedState:Be.memoizedState,baseState:Be.baseState,baseQueue:Be.baseQueue,queue:Be.queue,next:null},Qe===null?Se.memoizedState=Qe=t:Qe=Qe.next=t}return Qe}function wl(t,e){return typeof e=="function"?e(t):e}function Gf(t){var e=an(),n=e.queue;if(n===null)throw Error(b(311));n.lastRenderedReducer=t;var r=Be,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((Xi&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=d,o=r):l=l.next=d,Se.lanes|=c,Ji|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,yn(r,e.memoizedState)||(Ot=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Se.lanes|=s,Ji|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Kf(t){var e=an(),n=e.queue;if(n===null)throw Error(b(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);yn(s,e.memoizedState)||(Ot=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function K1(){}function H1(t,e){var n=Se,r=an(),i=e(),s=!yn(r.memoizedState,i);if(s&&(r.memoizedState=i,Ot=!0),r=r.queue,uy(X1.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Qe!==null&&Qe.memoizedState.tag&1){if(n.flags|=2048,Il(9,Y1.bind(null,n,r,i,e),void 0,null),Xe===null)throw Error(b(349));Xi&30||Q1(n,e,i)}return i}function Q1(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Se.updateQueue,e===null?(e={lastEffect:null,stores:null},Se.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Y1(t,e,n,r){e.value=n,e.getSnapshot=r,J1(e)&&Z1(t)}function X1(t,e,n){return n(function(){J1(e)&&Z1(t)})}function J1(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!yn(t,n)}catch{return!0}}function Z1(t){var e=tr(t,1);e!==null&&gn(e,t,1,-1)}function Sw(t){var e=En();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:wl,lastRenderedState:t},e.queue=t,t=t.dispatch=mx.bind(null,Se,t),[e.memoizedState,t]}function Il(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Se.updateQueue,e===null?(e={lastEffect:null,stores:null},Se.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function eT(){return an().memoizedState}function Lc(t,e,n,r){var i=En();Se.flags|=t,i.memoizedState=Il(1|e,n,void 0,r===void 0?null:r)}function fh(t,e,n,r){var i=an();r=r===void 0?null:r;var s=void 0;if(Be!==null){var o=Be.memoizedState;if(s=o.destroy,r!==null&&oy(r,o.deps)){i.memoizedState=Il(e,n,s,r);return}}Se.flags|=t,i.memoizedState=Il(1|e,n,s,r)}function Aw(t,e){return Lc(8390656,8,t,e)}function uy(t,e){return fh(2048,8,t,e)}function tT(t,e){return fh(4,2,t,e)}function nT(t,e){return fh(4,4,t,e)}function rT(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function iT(t,e,n){return n=n!=null?n.concat([t]):null,fh(4,4,rT.bind(null,e,t),n)}function cy(){}function sT(t,e){var n=an();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&oy(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function oT(t,e){var n=an();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&oy(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function aT(t,e,n){return Xi&21?(yn(n,e)||(n=c1(),Se.lanes|=n,Ji|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Ot=!0),t.memoizedState=n)}function fx(t,e){var n=ae;ae=n!==0&&4>n?n:4,t(!0);var r=Wf.transition;Wf.transition={};try{t(!1),e()}finally{ae=n,Wf.transition=r}}function lT(){return an().memoizedState}function px(t,e,n){var r=zr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},uT(t))cT(e,n);else if(n=j1(t,e,n,r),n!==null){var i=St();gn(n,t,r,i),dT(n,e,r)}}function mx(t,e,n){var r=zr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(uT(t))cT(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,yn(a,o)){var l=e.interleaved;l===null?(i.next=i,ty(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=j1(t,e,i,r),n!==null&&(i=St(),gn(n,t,r,i),dT(n,e,r))}}function uT(t){var e=t.alternate;return t===Se||e!==null&&e===Se}function cT(t,e){qa=vd=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function dT(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,$g(t,n)}}var _d={readContext:on,useCallback:ft,useContext:ft,useEffect:ft,useImperativeHandle:ft,useInsertionEffect:ft,useLayoutEffect:ft,useMemo:ft,useReducer:ft,useRef:ft,useState:ft,useDebugValue:ft,useDeferredValue:ft,useTransition:ft,useMutableSource:ft,useSyncExternalStore:ft,useId:ft,unstable_isNewReconciler:!1},gx={readContext:on,useCallback:function(t,e){return En().memoizedState=[t,e===void 0?null:e],t},useContext:on,useEffect:Aw,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Lc(4194308,4,rT.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Lc(4194308,4,t,e)},useInsertionEffect:function(t,e){return Lc(4,2,t,e)},useMemo:function(t,e){var n=En();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=En();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=px.bind(null,Se,t),[r.memoizedState,t]},useRef:function(t){var e=En();return t={current:t},e.memoizedState=t},useState:Sw,useDebugValue:cy,useDeferredValue:function(t){return En().memoizedState=t},useTransition:function(){var t=Sw(!1),e=t[0];return t=fx.bind(null,t[1]),En().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Se,i=En();if(ve){if(n===void 0)throw Error(b(407));n=n()}else{if(n=e(),Xe===null)throw Error(b(349));Xi&30||Q1(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Aw(X1.bind(null,r,s,t),[t]),r.flags|=2048,Il(9,Y1.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=En(),e=Xe.identifierPrefix;if(ve){var n=Gn,r=Wn;n=(r&~(1<<32-mn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=_l++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=hx++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},yx={readContext:on,useCallback:sT,useContext:on,useEffect:uy,useImperativeHandle:iT,useInsertionEffect:tT,useLayoutEffect:nT,useMemo:oT,useReducer:Gf,useRef:eT,useState:function(){return Gf(wl)},useDebugValue:cy,useDeferredValue:function(t){var e=an();return aT(e,Be.memoizedState,t)},useTransition:function(){var t=Gf(wl)[0],e=an().memoizedState;return[t,e]},useMutableSource:K1,useSyncExternalStore:H1,useId:lT,unstable_isNewReconciler:!1},vx={readContext:on,useCallback:sT,useContext:on,useEffect:uy,useImperativeHandle:iT,useInsertionEffect:tT,useLayoutEffect:nT,useMemo:oT,useReducer:Kf,useRef:eT,useState:function(){return Kf(wl)},useDebugValue:cy,useDeferredValue:function(t){var e=an();return Be===null?e.memoizedState=t:aT(e,Be.memoizedState,t)},useTransition:function(){var t=Kf(wl)[0],e=an().memoizedState;return[t,e]},useMutableSource:K1,useSyncExternalStore:H1,useId:lT,unstable_isNewReconciler:!1};function Eo(t,e){try{var n="",r=e;do n+=Gb(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Hf(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function om(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var _x=typeof WeakMap=="function"?WeakMap:Map;function hT(t,e,n){n=Yn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Id||(Id=!0,gm=r),om(t,e)},n}function fT(t,e,n){n=Yn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){om(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){om(t,e),typeof r!="function"&&($r===null?$r=new Set([this]):$r.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Pw(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new _x;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=Dx.bind(null,t,e,n),e.then(t,t))}function kw(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Rw(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Yn(-1,1),e.tag=2,jr(n,e,1))),n.lanes|=1),t)}var wx=ur.ReactCurrentOwner,Ot=!1;function wt(t,e,n,r){e.child=t===null?W1(e,null,n,r):wo(e,t.child,n,r)}function bw(t,e,n,r,i){n=n.render;var s=e.ref;return oo(e,i),r=ay(t,e,n,r,s,i),n=ly(),t!==null&&!Ot?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,nr(t,e,i)):(ve&&n&&Qg(e),e.flags|=1,wt(t,e,r,i),e.child)}function Cw(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!vy(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,pT(t,e,s,r,i)):(t=jc(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:fl,n(o,r)&&t.ref===e.ref)return nr(t,e,i)}return e.flags|=1,t=Br(s,r),t.ref=e.ref,t.return=e,e.child=t}function pT(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(fl(s,r)&&t.ref===e.ref)if(Ot=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Ot=!0);else return e.lanes=t.lanes,nr(t,e,i)}return am(t,e,n,r,i)}function mT(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ce(Ys,$t),$t|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ce(Ys,$t),$t|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,ce(Ys,$t),$t|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,ce(Ys,$t),$t|=r;return wt(t,e,i,n),e.child}function gT(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function am(t,e,n,r,i){var s=Ut(n)?Qi:_t.current;return s=vo(e,s),oo(e,i),n=ay(t,e,n,r,s,i),r=ly(),t!==null&&!Ot?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,nr(t,e,i)):(ve&&r&&Qg(e),e.flags|=1,wt(t,e,n,i),e.child)}function xw(t,e,n,r,i){if(Ut(n)){var s=!0;dd(e)}else s=!1;if(oo(e,i),e.stateNode===null)Mc(t,e),B1(e,n,r),sm(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=on(u):(u=Ut(n)?Qi:_t.current,u=vo(e,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&Ew(e,o,r,u),Ar=!1;var h=e.memoizedState;o.state=h,gd(e,r,o,i),l=e.memoizedState,a!==r||h!==l||Ft.current||Ar?(typeof c=="function"&&(im(e,n,c,r),l=e.memoizedState),(a=Ar||Iw(e,n,a,r,h,l,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,$1(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:dn(e.type,a),o.props=u,d=e.pendingProps,h=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=on(l):(l=Ut(n)?Qi:_t.current,l=vo(e,l));var f=n.getDerivedStateFromProps;(c=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||h!==l)&&Ew(e,o,r,l),Ar=!1,h=e.memoizedState,o.state=h,gd(e,r,o,i);var _=e.memoizedState;a!==d||h!==_||Ft.current||Ar?(typeof f=="function"&&(im(e,n,f,r),_=e.memoizedState),(u=Ar||Iw(e,n,u,r,h,_,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,_,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,_,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=_),o.props=r,o.state=_,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),r=!1)}return lm(t,e,n,r,s,i)}function lm(t,e,n,r,i,s){gT(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&gw(e,n,!1),nr(t,e,s);r=e.stateNode,wx.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=wo(e,t.child,null,s),e.child=wo(e,null,a,s)):wt(t,e,a,s),e.memoizedState=r.state,i&&gw(e,n,!0),e.child}function yT(t){var e=t.stateNode;e.pendingContext?mw(t,e.pendingContext,e.pendingContext!==e.context):e.context&&mw(t,e.context,!1),ry(t,e.containerInfo)}function Nw(t,e,n,r,i){return _o(),Xg(i),e.flags|=256,wt(t,e,n,r),e.child}var um={dehydrated:null,treeContext:null,retryLane:0};function cm(t){return{baseLanes:t,cachePool:null,transitions:null}}function vT(t,e,n){var r=e.pendingProps,i=Te.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),ce(Te,i&1),t===null)return nm(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=gh(o,r,0,null),t=qi(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=cm(n),e.memoizedState=um,t):dy(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return Ix(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=Br(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Br(a,s):(s=qi(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?cm(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=um,r}return s=t.child,t=s.sibling,r=Br(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function dy(t,e){return e=gh({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function sc(t,e,n,r){return r!==null&&Xg(r),wo(e,t.child,null,n),t=dy(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Ix(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Hf(Error(b(422))),sc(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=gh({mode:"visible",children:r.children},i,0,null),s=qi(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&wo(e,t.child,null,o),e.child.memoizedState=cm(o),e.memoizedState=um,s);if(!(e.mode&1))return sc(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(b(419)),r=Hf(s,r,void 0),sc(t,e,o,r)}if(a=(o&t.childLanes)!==0,Ot||a){if(r=Xe,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,tr(t,i),gn(r,t,i,-1))}return yy(),r=Hf(Error(b(421))),sc(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=Ox.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Bt=Ur(i.nextSibling),Wt=e,ve=!0,fn=null,t!==null&&(Jt[Zt++]=Wn,Jt[Zt++]=Gn,Jt[Zt++]=Yi,Wn=t.id,Gn=t.overflow,Yi=e),e=dy(e,r.children),e.flags|=4096,e)}function Dw(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),rm(t.return,e,n)}function Qf(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function _T(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(wt(t,e,r.children,n),r=Te.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Dw(t,n,e);else if(t.tag===19)Dw(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ce(Te,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&yd(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Qf(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&yd(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Qf(e,!0,n,null,s);break;case"together":Qf(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Mc(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function nr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Ji|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(b(153));if(e.child!==null){for(t=e.child,n=Br(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Br(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Ex(t,e,n){switch(e.tag){case 3:yT(e),_o();break;case 5:G1(e);break;case 1:Ut(e.type)&&dd(e);break;case 4:ry(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;ce(pd,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ce(Te,Te.current&1),e.flags|=128,null):n&e.child.childLanes?vT(t,e,n):(ce(Te,Te.current&1),t=nr(t,e,n),t!==null?t.sibling:null);ce(Te,Te.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return _T(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ce(Te,Te.current),r)break;return null;case 22:case 23:return e.lanes=0,mT(t,e,n)}return nr(t,e,n)}var wT,dm,IT,ET;wT=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};dm=function(){};IT=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Vi(Ln.current);var s=null;switch(n){case"input":i=Dp(t,i),r=Dp(t,r),s=[];break;case"select":i=Pe({},i,{value:void 0}),r=Pe({},r,{value:void 0}),s=[];break;case"textarea":i=Lp(t,i),r=Lp(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=ud)}Fp(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(ol.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(ol.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&he("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};ET=function(t,e,n,r){n!==r&&(e.flags|=4)};function pa(t,e){if(!ve)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function pt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function Tx(t,e,n){var r=e.pendingProps;switch(Yg(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return pt(e),null;case 1:return Ut(e.type)&&cd(),pt(e),null;case 3:return r=e.stateNode,Io(),ge(Ft),ge(_t),sy(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(rc(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,fn!==null&&(_m(fn),fn=null))),dm(t,e),pt(e),null;case 5:iy(e);var i=Vi(vl.current);if(n=e.type,t!==null&&e.stateNode!=null)IT(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(b(166));return pt(e),null}if(t=Vi(Ln.current),rc(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Tn]=e,r[gl]=s,t=(e.mode&1)!==0,n){case"dialog":he("cancel",r),he("close",r);break;case"iframe":case"object":case"embed":he("load",r);break;case"video":case"audio":for(i=0;i<ba.length;i++)he(ba[i],r);break;case"source":he("error",r);break;case"img":case"image":case"link":he("error",r),he("load",r);break;case"details":he("toggle",r);break;case"input":z_(r,s),he("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},he("invalid",r);break;case"textarea":q_(r,s),he("invalid",r)}Fp(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&nc(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&nc(r.textContent,a,t),i=["children",""+a]):ol.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&he("scroll",r)}switch(n){case"input":Hu(r),B_(r,s,!0);break;case"textarea":Hu(r),W_(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=ud)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=QE(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Tn]=e,t[gl]=r,wT(t,e,!1,!1),e.stateNode=t;e:{switch(o=Up(n,r),n){case"dialog":he("cancel",t),he("close",t),i=r;break;case"iframe":case"object":case"embed":he("load",t),i=r;break;case"video":case"audio":for(i=0;i<ba.length;i++)he(ba[i],t);i=r;break;case"source":he("error",t),i=r;break;case"img":case"image":case"link":he("error",t),he("load",t),i=r;break;case"details":he("toggle",t),i=r;break;case"input":z_(t,r),i=Dp(t,r),he("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Pe({},r,{value:void 0}),he("invalid",t);break;case"textarea":q_(t,r),i=Lp(t,r),he("invalid",t);break;default:i=r}Fp(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?JE(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&YE(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&al(t,l):typeof l=="number"&&al(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ol.hasOwnProperty(s)?l!=null&&s==="onScroll"&&he("scroll",t):l!=null&&Vg(t,s,l,o))}switch(n){case"input":Hu(t),B_(t,r,!1);break;case"textarea":Hu(t),W_(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Kr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?no(t,!!r.multiple,s,!1):r.defaultValue!=null&&no(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=ud)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return pt(e),null;case 6:if(t&&e.stateNode!=null)ET(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(b(166));if(n=Vi(vl.current),Vi(Ln.current),rc(e)){if(r=e.stateNode,n=e.memoizedProps,r[Tn]=e,(s=r.nodeValue!==n)&&(t=Wt,t!==null))switch(t.tag){case 3:nc(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&nc(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Tn]=e,e.stateNode=r}return pt(e),null;case 13:if(ge(Te),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ve&&Bt!==null&&e.mode&1&&!(e.flags&128))U1(),_o(),e.flags|=98560,s=!1;else if(s=rc(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(b(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(b(317));s[Tn]=e}else _o(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;pt(e),s=!1}else fn!==null&&(_m(fn),fn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Te.current&1?qe===0&&(qe=3):yy())),e.updateQueue!==null&&(e.flags|=4),pt(e),null);case 4:return Io(),dm(t,e),t===null&&pl(e.stateNode.containerInfo),pt(e),null;case 10:return ey(e.type._context),pt(e),null;case 17:return Ut(e.type)&&cd(),pt(e),null;case 19:if(ge(Te),s=e.memoizedState,s===null)return pt(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)pa(s,!1);else{if(qe!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=yd(t),o!==null){for(e.flags|=128,pa(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ce(Te,Te.current&1|2),e.child}t=t.sibling}s.tail!==null&&Le()>To&&(e.flags|=128,r=!0,pa(s,!1),e.lanes=4194304)}else{if(!r)if(t=yd(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),pa(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ve)return pt(e),null}else 2*Le()-s.renderingStartTime>To&&n!==1073741824&&(e.flags|=128,r=!0,pa(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Le(),e.sibling=null,n=Te.current,ce(Te,r?n&1|2:n&1),e):(pt(e),null);case 22:case 23:return gy(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?$t&1073741824&&(pt(e),e.subtreeFlags&6&&(e.flags|=8192)):pt(e),null;case 24:return null;case 25:return null}throw Error(b(156,e.tag))}function Sx(t,e){switch(Yg(e),e.tag){case 1:return Ut(e.type)&&cd(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Io(),ge(Ft),ge(_t),sy(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return iy(e),null;case 13:if(ge(Te),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(b(340));_o()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ge(Te),null;case 4:return Io(),null;case 10:return ey(e.type._context),null;case 22:case 23:return gy(),null;case 24:return null;default:return null}}var oc=!1,gt=!1,Ax=typeof WeakSet=="function"?WeakSet:Set,F=null;function Qs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ke(t,e,r)}else n.current=null}function hm(t,e,n){try{n()}catch(r){ke(t,e,r)}}var Ow=!1;function Px(t,e){if(Qp=od,t=P1(),Hg(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,d=t,h=null;t:for(;;){for(var f;d!==n||i!==0&&d.nodeType!==3||(a=o+i),d!==s||r!==0&&d.nodeType!==3||(l=o+r),d.nodeType===3&&(o+=d.nodeValue.length),(f=d.firstChild)!==null;)h=d,d=f;for(;;){if(d===t)break t;if(h===n&&++u===i&&(a=o),h===s&&++c===r&&(l=o),(f=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=f}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Yp={focusedElem:t,selectionRange:n},od=!1,F=e;F!==null;)if(e=F,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,F=t;else for(;F!==null;){e=F;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var v=_.memoizedProps,w=_.memoizedState,m=e.stateNode,p=m.getSnapshotBeforeUpdate(e.elementType===e.type?v:dn(e.type,v),w);m.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(b(163))}}catch(E){ke(e,e.return,E)}if(t=e.sibling,t!==null){t.return=e.return,F=t;break}F=e.return}return _=Ow,Ow=!1,_}function Wa(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&hm(e,n,s)}i=i.next}while(i!==r)}}function ph(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function fm(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function TT(t){var e=t.alternate;e!==null&&(t.alternate=null,TT(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Tn],delete e[gl],delete e[Zp],delete e[lx],delete e[ux])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function ST(t){return t.tag===5||t.tag===3||t.tag===4}function Vw(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||ST(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function pm(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=ud));else if(r!==4&&(t=t.child,t!==null))for(pm(t,e,n),t=t.sibling;t!==null;)pm(t,e,n),t=t.sibling}function mm(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(mm(t,e,n),t=t.sibling;t!==null;)mm(t,e,n),t=t.sibling}var rt=null,hn=!1;function gr(t,e,n){for(n=n.child;n!==null;)AT(t,e,n),n=n.sibling}function AT(t,e,n){if(Vn&&typeof Vn.onCommitFiberUnmount=="function")try{Vn.onCommitFiberUnmount(oh,n)}catch{}switch(n.tag){case 5:gt||Qs(n,e);case 6:var r=rt,i=hn;rt=null,gr(t,e,n),rt=r,hn=i,rt!==null&&(hn?(t=rt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):rt.removeChild(n.stateNode));break;case 18:rt!==null&&(hn?(t=rt,n=n.stateNode,t.nodeType===8?zf(t.parentNode,n):t.nodeType===1&&zf(t,n),dl(t)):zf(rt,n.stateNode));break;case 4:r=rt,i=hn,rt=n.stateNode.containerInfo,hn=!0,gr(t,e,n),rt=r,hn=i;break;case 0:case 11:case 14:case 15:if(!gt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&hm(n,e,o),i=i.next}while(i!==r)}gr(t,e,n);break;case 1:if(!gt&&(Qs(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){ke(n,e,a)}gr(t,e,n);break;case 21:gr(t,e,n);break;case 22:n.mode&1?(gt=(r=gt)||n.memoizedState!==null,gr(t,e,n),gt=r):gr(t,e,n);break;default:gr(t,e,n)}}function Lw(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Ax),e.forEach(function(r){var i=Vx.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function cn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:rt=a.stateNode,hn=!1;break e;case 3:rt=a.stateNode.containerInfo,hn=!0;break e;case 4:rt=a.stateNode.containerInfo,hn=!0;break e}a=a.return}if(rt===null)throw Error(b(160));AT(s,o,i),rt=null,hn=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){ke(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)PT(e,t),e=e.sibling}function PT(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(cn(e,t),In(t),r&4){try{Wa(3,t,t.return),ph(3,t)}catch(v){ke(t,t.return,v)}try{Wa(5,t,t.return)}catch(v){ke(t,t.return,v)}}break;case 1:cn(e,t),In(t),r&512&&n!==null&&Qs(n,n.return);break;case 5:if(cn(e,t),In(t),r&512&&n!==null&&Qs(n,n.return),t.flags&32){var i=t.stateNode;try{al(i,"")}catch(v){ke(t,t.return,v)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&KE(i,s),Up(a,o);var u=Up(a,s);for(o=0;o<l.length;o+=2){var c=l[o],d=l[o+1];c==="style"?JE(i,d):c==="dangerouslySetInnerHTML"?YE(i,d):c==="children"?al(i,d):Vg(i,c,d,u)}switch(a){case"input":Op(i,s);break;case"textarea":HE(i,s);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var f=s.value;f!=null?no(i,!!s.multiple,f,!1):h!==!!s.multiple&&(s.defaultValue!=null?no(i,!!s.multiple,s.defaultValue,!0):no(i,!!s.multiple,s.multiple?[]:"",!1))}i[gl]=s}catch(v){ke(t,t.return,v)}}break;case 6:if(cn(e,t),In(t),r&4){if(t.stateNode===null)throw Error(b(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(v){ke(t,t.return,v)}}break;case 3:if(cn(e,t),In(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{dl(e.containerInfo)}catch(v){ke(t,t.return,v)}break;case 4:cn(e,t),In(t);break;case 13:cn(e,t),In(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(py=Le())),r&4&&Lw(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(gt=(u=gt)||c,cn(e,t),gt=u):cn(e,t),In(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(F=t,c=t.child;c!==null;){for(d=F=c;F!==null;){switch(h=F,f=h.child,h.tag){case 0:case 11:case 14:case 15:Wa(4,h,h.return);break;case 1:Qs(h,h.return);var _=h.stateNode;if(typeof _.componentWillUnmount=="function"){r=h,n=h.return;try{e=r,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(v){ke(r,n,v)}}break;case 5:Qs(h,h.return);break;case 22:if(h.memoizedState!==null){Fw(d);continue}}f!==null?(f.return=h,F=f):Fw(d)}c=c.sibling}e:for(c=null,d=t;;){if(d.tag===5){if(c===null){c=d;try{i=d.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=XE("display",o))}catch(v){ke(t,t.return,v)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(v){ke(t,t.return,v)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:cn(e,t),In(t),r&4&&Lw(t);break;case 21:break;default:cn(e,t),In(t)}}function In(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(ST(n)){var r=n;break e}n=n.return}throw Error(b(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(al(i,""),r.flags&=-33);var s=Vw(t);mm(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Vw(t);pm(t,a,o);break;default:throw Error(b(161))}}catch(l){ke(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function kx(t,e,n){F=t,kT(t)}function kT(t,e,n){for(var r=(t.mode&1)!==0;F!==null;){var i=F,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||oc;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||gt;a=oc;var u=gt;if(oc=o,(gt=l)&&!u)for(F=i;F!==null;)o=F,l=o.child,o.tag===22&&o.memoizedState!==null?Uw(i):l!==null?(l.return=o,F=l):Uw(i);for(;s!==null;)F=s,kT(s),s=s.sibling;F=i,oc=a,gt=u}Mw(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,F=s):Mw(t)}}function Mw(t){for(;F!==null;){var e=F;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:gt||ph(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!gt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:dn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&ww(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}ww(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&dl(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(b(163))}gt||e.flags&512&&fm(e)}catch(h){ke(e,e.return,h)}}if(e===t){F=null;break}if(n=e.sibling,n!==null){n.return=e.return,F=n;break}F=e.return}}function Fw(t){for(;F!==null;){var e=F;if(e===t){F=null;break}var n=e.sibling;if(n!==null){n.return=e.return,F=n;break}F=e.return}}function Uw(t){for(;F!==null;){var e=F;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{ph(4,e)}catch(l){ke(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){ke(e,i,l)}}var s=e.return;try{fm(e)}catch(l){ke(e,s,l)}break;case 5:var o=e.return;try{fm(e)}catch(l){ke(e,o,l)}}}catch(l){ke(e,e.return,l)}if(e===t){F=null;break}var a=e.sibling;if(a!==null){a.return=e.return,F=a;break}F=e.return}}var Rx=Math.ceil,wd=ur.ReactCurrentDispatcher,hy=ur.ReactCurrentOwner,sn=ur.ReactCurrentBatchConfig,ie=0,Xe=null,$e=null,lt=0,$t=0,Ys=di(0),qe=0,El=null,Ji=0,mh=0,fy=0,Ga=null,Dt=null,py=0,To=1/0,Bn=null,Id=!1,gm=null,$r=null,ac=!1,xr=null,Ed=0,Ka=0,ym=null,Fc=-1,Uc=0;function St(){return ie&6?Le():Fc!==-1?Fc:Fc=Le()}function zr(t){return t.mode&1?ie&2&&lt!==0?lt&-lt:dx.transition!==null?(Uc===0&&(Uc=c1()),Uc):(t=ae,t!==0||(t=window.event,t=t===void 0?16:y1(t.type)),t):1}function gn(t,e,n,r){if(50<Ka)throw Ka=0,ym=null,Error(b(185));uu(t,n,r),(!(ie&2)||t!==Xe)&&(t===Xe&&(!(ie&2)&&(mh|=n),qe===4&&kr(t,lt)),jt(t,r),n===1&&ie===0&&!(e.mode&1)&&(To=Le()+500,dh&&hi()))}function jt(t,e){var n=t.callbackNode;dC(t,e);var r=sd(t,t===Xe?lt:0);if(r===0)n!==null&&H_(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&H_(n),e===1)t.tag===0?cx(jw.bind(null,t)):L1(jw.bind(null,t)),ox(function(){!(ie&6)&&hi()}),n=null;else{switch(d1(r)){case 1:n=jg;break;case 4:n=l1;break;case 16:n=id;break;case 536870912:n=u1;break;default:n=id}n=VT(n,RT.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function RT(t,e){if(Fc=-1,Uc=0,ie&6)throw Error(b(327));var n=t.callbackNode;if(ao()&&t.callbackNode!==n)return null;var r=sd(t,t===Xe?lt:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Td(t,r);else{e=r;var i=ie;ie|=2;var s=CT();(Xe!==t||lt!==e)&&(Bn=null,To=Le()+500,Bi(t,e));do try{xx();break}catch(a){bT(t,a)}while(!0);Zg(),wd.current=s,ie=i,$e!==null?e=0:(Xe=null,lt=0,e=qe)}if(e!==0){if(e===2&&(i=qp(t),i!==0&&(r=i,e=vm(t,i))),e===1)throw n=El,Bi(t,0),kr(t,r),jt(t,Le()),n;if(e===6)kr(t,r);else{if(i=t.current.alternate,!(r&30)&&!bx(i)&&(e=Td(t,r),e===2&&(s=qp(t),s!==0&&(r=s,e=vm(t,s))),e===1))throw n=El,Bi(t,0),kr(t,r),jt(t,Le()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(b(345));case 2:Ai(t,Dt,Bn);break;case 3:if(kr(t,r),(r&130023424)===r&&(e=py+500-Le(),10<e)){if(sd(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){St(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Jp(Ai.bind(null,t,Dt,Bn),e);break}Ai(t,Dt,Bn);break;case 4:if(kr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-mn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Le()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Rx(r/1960))-r,10<r){t.timeoutHandle=Jp(Ai.bind(null,t,Dt,Bn),r);break}Ai(t,Dt,Bn);break;case 5:Ai(t,Dt,Bn);break;default:throw Error(b(329))}}}return jt(t,Le()),t.callbackNode===n?RT.bind(null,t):null}function vm(t,e){var n=Ga;return t.current.memoizedState.isDehydrated&&(Bi(t,e).flags|=256),t=Td(t,e),t!==2&&(e=Dt,Dt=n,e!==null&&_m(e)),t}function _m(t){Dt===null?Dt=t:Dt.push.apply(Dt,t)}function bx(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!yn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function kr(t,e){for(e&=~fy,e&=~mh,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-mn(e),r=1<<n;t[n]=-1,e&=~r}}function jw(t){if(ie&6)throw Error(b(327));ao();var e=sd(t,0);if(!(e&1))return jt(t,Le()),null;var n=Td(t,e);if(t.tag!==0&&n===2){var r=qp(t);r!==0&&(e=r,n=vm(t,r))}if(n===1)throw n=El,Bi(t,0),kr(t,e),jt(t,Le()),n;if(n===6)throw Error(b(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Ai(t,Dt,Bn),jt(t,Le()),null}function my(t,e){var n=ie;ie|=1;try{return t(e)}finally{ie=n,ie===0&&(To=Le()+500,dh&&hi())}}function Zi(t){xr!==null&&xr.tag===0&&!(ie&6)&&ao();var e=ie;ie|=1;var n=sn.transition,r=ae;try{if(sn.transition=null,ae=1,t)return t()}finally{ae=r,sn.transition=n,ie=e,!(ie&6)&&hi()}}function gy(){$t=Ys.current,ge(Ys)}function Bi(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,sx(n)),$e!==null)for(n=$e.return;n!==null;){var r=n;switch(Yg(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&cd();break;case 3:Io(),ge(Ft),ge(_t),sy();break;case 5:iy(r);break;case 4:Io();break;case 13:ge(Te);break;case 19:ge(Te);break;case 10:ey(r.type._context);break;case 22:case 23:gy()}n=n.return}if(Xe=t,$e=t=Br(t.current,null),lt=$t=e,qe=0,El=null,fy=mh=Ji=0,Dt=Ga=null,Oi!==null){for(e=0;e<Oi.length;e++)if(n=Oi[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Oi=null}return t}function bT(t,e){do{var n=$e;try{if(Zg(),Vc.current=_d,vd){for(var r=Se.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}vd=!1}if(Xi=0,Qe=Be=Se=null,qa=!1,_l=0,hy.current=null,n===null||n.return===null){qe=1,El=e,$e=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=lt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var h=c.alternate;h?(c.updateQueue=h.updateQueue,c.memoizedState=h.memoizedState,c.lanes=h.lanes):(c.updateQueue=null,c.memoizedState=null)}var f=kw(o);if(f!==null){f.flags&=-257,Rw(f,o,a,s,e),f.mode&1&&Pw(s,u,e),e=f,l=u;var _=e.updateQueue;if(_===null){var v=new Set;v.add(l),e.updateQueue=v}else _.add(l);break e}else{if(!(e&1)){Pw(s,u,e),yy();break e}l=Error(b(426))}}else if(ve&&a.mode&1){var w=kw(o);if(w!==null){!(w.flags&65536)&&(w.flags|=256),Rw(w,o,a,s,e),Xg(Eo(l,a));break e}}s=l=Eo(l,a),qe!==4&&(qe=2),Ga===null?Ga=[s]:Ga.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var m=hT(s,l,e);_w(s,m);break e;case 1:a=l;var p=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof p.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&($r===null||!$r.has(g)))){s.flags|=65536,e&=-e,s.lanes|=e;var E=fT(s,a,e);_w(s,E);break e}}s=s.return}while(s!==null)}NT(n)}catch(S){e=S,$e===n&&n!==null&&($e=n=n.return);continue}break}while(!0)}function CT(){var t=wd.current;return wd.current=_d,t===null?_d:t}function yy(){(qe===0||qe===3||qe===2)&&(qe=4),Xe===null||!(Ji&268435455)&&!(mh&268435455)||kr(Xe,lt)}function Td(t,e){var n=ie;ie|=2;var r=CT();(Xe!==t||lt!==e)&&(Bn=null,Bi(t,e));do try{Cx();break}catch(i){bT(t,i)}while(!0);if(Zg(),ie=n,wd.current=r,$e!==null)throw Error(b(261));return Xe=null,lt=0,qe}function Cx(){for(;$e!==null;)xT($e)}function xx(){for(;$e!==null&&!nC();)xT($e)}function xT(t){var e=OT(t.alternate,t,$t);t.memoizedProps=t.pendingProps,e===null?NT(t):$e=e,hy.current=null}function NT(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Sx(n,e),n!==null){n.flags&=32767,$e=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{qe=6,$e=null;return}}else if(n=Tx(n,e,$t),n!==null){$e=n;return}if(e=e.sibling,e!==null){$e=e;return}$e=e=t}while(e!==null);qe===0&&(qe=5)}function Ai(t,e,n){var r=ae,i=sn.transition;try{sn.transition=null,ae=1,Nx(t,e,n,r)}finally{sn.transition=i,ae=r}return null}function Nx(t,e,n,r){do ao();while(xr!==null);if(ie&6)throw Error(b(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(b(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(hC(t,s),t===Xe&&($e=Xe=null,lt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ac||(ac=!0,VT(id,function(){return ao(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=sn.transition,sn.transition=null;var o=ae;ae=1;var a=ie;ie|=4,hy.current=null,Px(t,n),PT(n,t),JC(Yp),od=!!Qp,Yp=Qp=null,t.current=n,kx(n),rC(),ie=a,ae=o,sn.transition=s}else t.current=n;if(ac&&(ac=!1,xr=t,Ed=i),s=t.pendingLanes,s===0&&($r=null),oC(n.stateNode),jt(t,Le()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Id)throw Id=!1,t=gm,gm=null,t;return Ed&1&&t.tag!==0&&ao(),s=t.pendingLanes,s&1?t===ym?Ka++:(Ka=0,ym=t):Ka=0,hi(),null}function ao(){if(xr!==null){var t=d1(Ed),e=sn.transition,n=ae;try{if(sn.transition=null,ae=16>t?16:t,xr===null)var r=!1;else{if(t=xr,xr=null,Ed=0,ie&6)throw Error(b(331));var i=ie;for(ie|=4,F=t.current;F!==null;){var s=F,o=s.child;if(F.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(F=u;F!==null;){var c=F;switch(c.tag){case 0:case 11:case 15:Wa(8,c,s)}var d=c.child;if(d!==null)d.return=c,F=d;else for(;F!==null;){c=F;var h=c.sibling,f=c.return;if(TT(c),c===u){F=null;break}if(h!==null){h.return=f,F=h;break}F=f}}}var _=s.alternate;if(_!==null){var v=_.child;if(v!==null){_.child=null;do{var w=v.sibling;v.sibling=null,v=w}while(v!==null)}}F=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,F=o;else e:for(;F!==null;){if(s=F,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Wa(9,s,s.return)}var m=s.sibling;if(m!==null){m.return=s.return,F=m;break e}F=s.return}}var p=t.current;for(F=p;F!==null;){o=F;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,F=g;else e:for(o=p;F!==null;){if(a=F,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:ph(9,a)}}catch(S){ke(a,a.return,S)}if(a===o){F=null;break e}var E=a.sibling;if(E!==null){E.return=a.return,F=E;break e}F=a.return}}if(ie=i,hi(),Vn&&typeof Vn.onPostCommitFiberRoot=="function")try{Vn.onPostCommitFiberRoot(oh,t)}catch{}r=!0}return r}finally{ae=n,sn.transition=e}}return!1}function $w(t,e,n){e=Eo(n,e),e=hT(t,e,1),t=jr(t,e,1),e=St(),t!==null&&(uu(t,1,e),jt(t,e))}function ke(t,e,n){if(t.tag===3)$w(t,t,n);else for(;e!==null;){if(e.tag===3){$w(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&($r===null||!$r.has(r))){t=Eo(n,t),t=fT(e,t,1),e=jr(e,t,1),t=St(),e!==null&&(uu(e,1,t),jt(e,t));break}}e=e.return}}function Dx(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=St(),t.pingedLanes|=t.suspendedLanes&n,Xe===t&&(lt&n)===n&&(qe===4||qe===3&&(lt&130023424)===lt&&500>Le()-py?Bi(t,0):fy|=n),jt(t,e)}function DT(t,e){e===0&&(t.mode&1?(e=Xu,Xu<<=1,!(Xu&130023424)&&(Xu=4194304)):e=1);var n=St();t=tr(t,e),t!==null&&(uu(t,e,n),jt(t,n))}function Ox(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),DT(t,n)}function Vx(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(b(314))}r!==null&&r.delete(e),DT(t,n)}var OT;OT=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Ft.current)Ot=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Ot=!1,Ex(t,e,n);Ot=!!(t.flags&131072)}else Ot=!1,ve&&e.flags&1048576&&M1(e,fd,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Mc(t,e),t=e.pendingProps;var i=vo(e,_t.current);oo(e,n),i=ay(null,e,r,t,i,n);var s=ly();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Ut(r)?(s=!0,dd(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,ny(e),i.updater=hh,e.stateNode=i,i._reactInternals=e,sm(e,r,t,n),e=lm(null,e,r,!0,s,n)):(e.tag=0,ve&&s&&Qg(e),wt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Mc(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=Mx(r),t=dn(r,t),i){case 0:e=am(null,e,r,t,n);break e;case 1:e=xw(null,e,r,t,n);break e;case 11:e=bw(null,e,r,t,n);break e;case 14:e=Cw(null,e,r,dn(r.type,t),n);break e}throw Error(b(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:dn(r,i),am(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:dn(r,i),xw(t,e,r,i,n);case 3:e:{if(yT(e),t===null)throw Error(b(387));r=e.pendingProps,s=e.memoizedState,i=s.element,$1(t,e),gd(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Eo(Error(b(423)),e),e=Nw(t,e,r,n,i);break e}else if(r!==i){i=Eo(Error(b(424)),e),e=Nw(t,e,r,n,i);break e}else for(Bt=Ur(e.stateNode.containerInfo.firstChild),Wt=e,ve=!0,fn=null,n=W1(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(_o(),r===i){e=nr(t,e,n);break e}wt(t,e,r,n)}e=e.child}return e;case 5:return G1(e),t===null&&nm(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Xp(r,i)?o=null:s!==null&&Xp(r,s)&&(e.flags|=32),gT(t,e),wt(t,e,o,n),e.child;case 6:return t===null&&nm(e),null;case 13:return vT(t,e,n);case 4:return ry(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=wo(e,null,r,n):wt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:dn(r,i),bw(t,e,r,i,n);case 7:return wt(t,e,e.pendingProps,n),e.child;case 8:return wt(t,e,e.pendingProps.children,n),e.child;case 12:return wt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,ce(pd,r._currentValue),r._currentValue=o,s!==null)if(yn(s.value,o)){if(s.children===i.children&&!Ft.current){e=nr(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=Yn(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),rm(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(b(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),rm(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}wt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,oo(e,n),i=on(i),r=r(i),e.flags|=1,wt(t,e,r,n),e.child;case 14:return r=e.type,i=dn(r,e.pendingProps),i=dn(r.type,i),Cw(t,e,r,i,n);case 15:return pT(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:dn(r,i),Mc(t,e),e.tag=1,Ut(r)?(t=!0,dd(e)):t=!1,oo(e,n),B1(e,r,i),sm(e,r,i,n),lm(null,e,r,!0,t,n);case 19:return _T(t,e,n);case 22:return mT(t,e,n)}throw Error(b(156,e.tag))};function VT(t,e){return a1(t,e)}function Lx(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function tn(t,e,n,r){return new Lx(t,e,n,r)}function vy(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Mx(t){if(typeof t=="function")return vy(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Mg)return 11;if(t===Fg)return 14}return 2}function Br(t,e){var n=t.alternate;return n===null?(n=tn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function jc(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")vy(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case js:return qi(n.children,i,s,e);case Lg:o=8,i|=8;break;case bp:return t=tn(12,n,e,i|2),t.elementType=bp,t.lanes=s,t;case Cp:return t=tn(13,n,e,i),t.elementType=Cp,t.lanes=s,t;case xp:return t=tn(19,n,e,i),t.elementType=xp,t.lanes=s,t;case qE:return gh(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case zE:o=10;break e;case BE:o=9;break e;case Mg:o=11;break e;case Fg:o=14;break e;case Sr:o=16,r=null;break e}throw Error(b(130,t==null?t:typeof t,""))}return e=tn(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function qi(t,e,n,r){return t=tn(7,t,r,e),t.lanes=n,t}function gh(t,e,n,r){return t=tn(22,t,r,e),t.elementType=qE,t.lanes=n,t.stateNode={isHidden:!1},t}function Yf(t,e,n){return t=tn(6,t,null,e),t.lanes=n,t}function Xf(t,e,n){return e=tn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Fx(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=xf(0),this.expirationTimes=xf(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=xf(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function _y(t,e,n,r,i,s,o,a,l){return t=new Fx(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=tn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ny(s),t}function Ux(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Us,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function LT(t){if(!t)return Hr;t=t._reactInternals;e:{if(gs(t)!==t||t.tag!==1)throw Error(b(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Ut(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(b(171))}if(t.tag===1){var n=t.type;if(Ut(n))return V1(t,n,e)}return e}function MT(t,e,n,r,i,s,o,a,l){return t=_y(n,r,!0,t,i,s,o,a,l),t.context=LT(null),n=t.current,r=St(),i=zr(n),s=Yn(r,i),s.callback=e??null,jr(n,s,i),t.current.lanes=i,uu(t,i,r),jt(t,r),t}function yh(t,e,n,r){var i=e.current,s=St(),o=zr(i);return n=LT(n),e.context===null?e.context=n:e.pendingContext=n,e=Yn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=jr(i,e,o),t!==null&&(gn(t,i,o,s),Oc(t,i,o)),o}function Sd(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function zw(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function wy(t,e){zw(t,e),(t=t.alternate)&&zw(t,e)}function jx(){return null}var FT=typeof reportError=="function"?reportError:function(t){console.error(t)};function Iy(t){this._internalRoot=t}vh.prototype.render=Iy.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(b(409));yh(t,e,null,null)};vh.prototype.unmount=Iy.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Zi(function(){yh(null,t,null,null)}),e[er]=null}};function vh(t){this._internalRoot=t}vh.prototype.unstable_scheduleHydration=function(t){if(t){var e=p1();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Pr.length&&e!==0&&e<Pr[n].priority;n++);Pr.splice(n,0,t),n===0&&g1(t)}};function Ey(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function _h(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Bw(){}function $x(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Sd(o);s.call(u)}}var o=MT(e,r,t,0,null,!1,!1,"",Bw);return t._reactRootContainer=o,t[er]=o.current,pl(t.nodeType===8?t.parentNode:t),Zi(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Sd(l);a.call(u)}}var l=_y(t,0,!1,null,null,!1,!1,"",Bw);return t._reactRootContainer=l,t[er]=l.current,pl(t.nodeType===8?t.parentNode:t),Zi(function(){yh(e,l,n,r)}),l}function wh(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=Sd(o);a.call(l)}}yh(e,o,t,i)}else o=$x(n,e,t,i,r);return Sd(o)}h1=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ra(e.pendingLanes);n!==0&&($g(e,n|1),jt(e,Le()),!(ie&6)&&(To=Le()+500,hi()))}break;case 13:Zi(function(){var r=tr(t,1);if(r!==null){var i=St();gn(r,t,1,i)}}),wy(t,1)}};zg=function(t){if(t.tag===13){var e=tr(t,134217728);if(e!==null){var n=St();gn(e,t,134217728,n)}wy(t,134217728)}};f1=function(t){if(t.tag===13){var e=zr(t),n=tr(t,e);if(n!==null){var r=St();gn(n,t,e,r)}wy(t,e)}};p1=function(){return ae};m1=function(t,e){var n=ae;try{return ae=t,e()}finally{ae=n}};$p=function(t,e,n){switch(e){case"input":if(Op(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=ch(r);if(!i)throw Error(b(90));GE(r),Op(r,i)}}}break;case"textarea":HE(t,n);break;case"select":e=n.value,e!=null&&no(t,!!n.multiple,e,!1)}};t1=my;n1=Zi;var zx={usingClientEntryPoint:!1,Events:[du,qs,ch,ZE,e1,my]},ma={findFiberByHostInstance:Di,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Bx={bundleType:ma.bundleType,version:ma.version,rendererPackageName:ma.rendererPackageName,rendererConfig:ma.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ur.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=s1(t),t===null?null:t.stateNode},findFiberByHostInstance:ma.findFiberByHostInstance||jx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var lc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!lc.isDisabled&&lc.supportsFiber)try{oh=lc.inject(Bx),Vn=lc}catch{}}Qt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=zx;Qt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ey(e))throw Error(b(200));return Ux(t,e,null,n)};Qt.createRoot=function(t,e){if(!Ey(t))throw Error(b(299));var n=!1,r="",i=FT;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=_y(t,1,!1,null,null,n,!1,r,i),t[er]=e.current,pl(t.nodeType===8?t.parentNode:t),new Iy(e)};Qt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(b(188)):(t=Object.keys(t).join(","),Error(b(268,t)));return t=s1(e),t=t===null?null:t.stateNode,t};Qt.flushSync=function(t){return Zi(t)};Qt.hydrate=function(t,e,n){if(!_h(e))throw Error(b(200));return wh(null,t,e,!0,n)};Qt.hydrateRoot=function(t,e,n){if(!Ey(t))throw Error(b(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=FT;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=MT(e,null,t,1,n??null,i,!1,s,o),t[er]=e.current,pl(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new vh(e)};Qt.render=function(t,e,n){if(!_h(e))throw Error(b(200));return wh(null,t,e,!1,n)};Qt.unmountComponentAtNode=function(t){if(!_h(t))throw Error(b(40));return t._reactRootContainer?(Zi(function(){wh(null,null,t,!1,function(){t._reactRootContainer=null,t[er]=null})}),!0):!1};Qt.unstable_batchedUpdates=my;Qt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!_h(n))throw Error(b(200));if(t==null||t._reactInternals===void 0)throw Error(b(38));return wh(t,e,n,!1,r)};Qt.version="18.2.0-next-9e3b772b8-20220608";function UT(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(UT)}catch(t){console.error(t)}}UT(),ME.exports=Qt;var qx=ME.exports,qw=qx;kp.createRoot=qw.createRoot,kp.hydrateRoot=qw.hydrateRoot;/**
 * @remix-run/router v1.15.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Tl(){return Tl=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Tl.apply(this,arguments)}var Nr;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Nr||(Nr={}));const Ww="popstate";function Wx(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return wm("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Ad(i)}return Kx(e,n,null,t)}function ze(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function jT(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function Gx(){return Math.random().toString(36).substr(2,8)}function Gw(t,e){return{usr:t.state,key:t.key,idx:e}}function wm(t,e,n,r){return n===void 0&&(n=null),Tl({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Bo(e):e,{state:n,key:e&&e.key||r||Gx()})}function Ad(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Bo(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function Kx(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=Nr.Pop,l=null,u=c();u==null&&(u=0,o.replaceState(Tl({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function d(){a=Nr.Pop;let w=c(),m=w==null?null:w-u;u=w,l&&l({action:a,location:v.location,delta:m})}function h(w,m){a=Nr.Push;let p=wm(v.location,w,m);n&&n(p,w),u=c()+1;let g=Gw(p,u),E=v.createHref(p);try{o.pushState(g,"",E)}catch(S){if(S instanceof DOMException&&S.name==="DataCloneError")throw S;i.location.assign(E)}s&&l&&l({action:a,location:v.location,delta:1})}function f(w,m){a=Nr.Replace;let p=wm(v.location,w,m);n&&n(p,w),u=c();let g=Gw(p,u),E=v.createHref(p);o.replaceState(g,"",E),s&&l&&l({action:a,location:v.location,delta:0})}function _(w){let m=i.location.origin!=="null"?i.location.origin:i.location.href,p=typeof w=="string"?w:Ad(w);return p=p.replace(/ $/,"%20"),ze(m,"No window.location.(origin|href) available to create URL for href: "+p),new URL(p,m)}let v={get action(){return a},get location(){return t(i,o)},listen(w){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(Ww,d),l=w,()=>{i.removeEventListener(Ww,d),l=null}},createHref(w){return e(i,w)},createURL:_,encodeLocation(w){let m=_(w);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:h,replace:f,go(w){return o.go(w)}};return v}var Kw;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Kw||(Kw={}));function Hx(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?Bo(e):e,i=Ty(r.pathname||"/",n);if(i==null)return null;let s=$T(t);Qx(s);let o=null;for(let a=0;o==null&&a<s.length;++a){let l=a2(i);o=i2(s[a],l)}return o}function $T(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(ze(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=qr([r,l.relativePath]),c=n.concat(l);s.children&&s.children.length>0&&(ze(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),$T(s.children,e,c,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:n2(u,s.index),routesMeta:c})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of zT(s.path))i(s,o,l)}),e}function zT(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=zT(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function Qx(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:r2(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Yx=/^:[\w-]+$/,Xx=3,Jx=2,Zx=1,e2=10,t2=-2,Hw=t=>t==="*";function n2(t,e){let n=t.split("/"),r=n.length;return n.some(Hw)&&(r+=t2),e&&(r+=Jx),n.filter(i=>!Hw(i)).reduce((i,s)=>i+(Yx.test(s)?Xx:s===""?Zx:e2),r)}function r2(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function i2(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",c=s2({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let d=a.route;s.push({params:r,pathname:qr([i,c.pathname]),pathnameBase:d2(qr([i,c.pathnameBase])),route:d}),c.pathnameBase!=="/"&&(i=qr([i,c.pathnameBase]))}return s}function s2(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=o2(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,d)=>{let{paramName:h,isOptional:f}=c;if(h==="*"){let v=a[d]||"";o=s.slice(0,s.length-v.length).replace(/(.)\/+$/,"$1")}const _=a[d];return f&&!_?u[h]=void 0:u[h]=(_||"").replace(/%2F/g,"/"),u},{}),pathname:s,pathnameBase:o,pattern:t}}function o2(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),jT(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function a2(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return jT(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Ty(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function l2(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Bo(t):t;return{pathname:n?n.startsWith("/")?n:u2(n,e):e,search:h2(r),hash:f2(i)}}function u2(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Jf(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function c2(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function BT(t,e){let n=c2(t);return e?n.map((r,i)=>i===t.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function qT(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Bo(t):(i=Tl({},t),ze(!i.pathname||!i.pathname.includes("?"),Jf("?","pathname","search",i)),ze(!i.pathname||!i.pathname.includes("#"),Jf("#","pathname","hash",i)),ze(!i.search||!i.search.includes("#"),Jf("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(o==null)a=n;else{let d=e.length-1;if(!r&&o.startsWith("..")){let h=o.split("/");for(;h[0]==="..";)h.shift(),d-=1;i.pathname=h.join("/")}a=d>=0?e[d]:"/"}let l=l2(i,a),u=o&&o!=="/"&&o.endsWith("/"),c=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const qr=t=>t.join("/").replace(/\/\/+/g,"/"),d2=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),h2=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,f2=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function p2(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const WT=["post","put","patch","delete"];new Set(WT);const m2=["get",...WT];new Set(m2);/**
 * React Router v6.22.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Sl(){return Sl=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Sl.apply(this,arguments)}const Sy=k.createContext(null),g2=k.createContext(null),ys=k.createContext(null),Ih=k.createContext(null),vs=k.createContext({outlet:null,matches:[],isDataRoute:!1}),GT=k.createContext(null);function y2(t,e){let{relative:n}=e===void 0?{}:e;fu()||ze(!1);let{basename:r,navigator:i}=k.useContext(ys),{hash:s,pathname:o,search:a}=HT(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:qr([r,o])),i.createHref({pathname:l,search:a,hash:s})}function fu(){return k.useContext(Ih)!=null}function Eh(){return fu()||ze(!1),k.useContext(Ih).location}function KT(t){k.useContext(ys).static||k.useLayoutEffect(t)}function v2(){let{isDataRoute:t}=k.useContext(vs);return t?x2():_2()}function _2(){fu()||ze(!1);let t=k.useContext(Sy),{basename:e,future:n,navigator:r}=k.useContext(ys),{matches:i}=k.useContext(vs),{pathname:s}=Eh(),o=JSON.stringify(BT(i,n.v7_relativeSplatPath)),a=k.useRef(!1);return KT(()=>{a.current=!0}),k.useCallback(function(u,c){if(c===void 0&&(c={}),!a.current)return;if(typeof u=="number"){r.go(u);return}let d=qT(u,JSON.parse(o),s,c.relative==="path");t==null&&e!=="/"&&(d.pathname=d.pathname==="/"?e:qr([e,d.pathname])),(c.replace?r.replace:r.push)(d,c.state,c)},[e,r,o,s,t])}function HT(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=k.useContext(ys),{matches:i}=k.useContext(vs),{pathname:s}=Eh(),o=JSON.stringify(BT(i,r.v7_relativeSplatPath));return k.useMemo(()=>qT(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function w2(t,e){return I2(t,e)}function I2(t,e,n,r){fu()||ze(!1);let{navigator:i}=k.useContext(ys),{matches:s}=k.useContext(vs),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let u=Eh(),c;if(e){var d;let w=typeof e=="string"?Bo(e):e;l==="/"||(d=w.pathname)!=null&&d.startsWith(l)||ze(!1),c=w}else c=u;let h=c.pathname||"/",f=h;if(l!=="/"){let w=l.replace(/^\//,"").split("/");f="/"+h.replace(/^\//,"").split("/").slice(w.length).join("/")}let _=Hx(t,{pathname:f}),v=P2(_&&_.map(w=>Object.assign({},w,{params:Object.assign({},a,w.params),pathname:qr([l,i.encodeLocation?i.encodeLocation(w.pathname).pathname:w.pathname]),pathnameBase:w.pathnameBase==="/"?l:qr([l,i.encodeLocation?i.encodeLocation(w.pathnameBase).pathname:w.pathnameBase])})),s,n,r);return e&&v?k.createElement(Ih.Provider,{value:{location:Sl({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:Nr.Pop}},v):v}function E2(){let t=C2(),e=p2(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return k.createElement(k.Fragment,null,k.createElement("h2",null,"Unexpected Application Error!"),k.createElement("h3",{style:{fontStyle:"italic"}},e),n?k.createElement("pre",{style:i},n):null,null)}const T2=k.createElement(E2,null);class S2 extends k.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?k.createElement(vs.Provider,{value:this.props.routeContext},k.createElement(GT.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function A2(t){let{routeContext:e,match:n,children:r}=t,i=k.useContext(Sy);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),k.createElement(vs.Provider,{value:e},r)}function P2(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if((s=n)!=null&&s.errors)t=n.matches;else return null}let o=t,a=(i=n)==null?void 0:i.errors;if(a!=null){let c=o.findIndex(d=>d.route.id&&(a==null?void 0:a[d.route.id]));c>=0||ze(!1),o=o.slice(0,Math.min(o.length,c+1))}let l=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let c=0;c<o.length;c++){let d=o[c];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(u=c),d.route.id){let{loaderData:h,errors:f}=n,_=d.route.loader&&h[d.route.id]===void 0&&(!f||f[d.route.id]===void 0);if(d.route.lazy||_){l=!0,u>=0?o=o.slice(0,u+1):o=[o[0]];break}}}return o.reduceRight((c,d,h)=>{let f,_=!1,v=null,w=null;n&&(f=a&&d.route.id?a[d.route.id]:void 0,v=d.route.errorElement||T2,l&&(u<0&&h===0?(N2("route-fallback",!1),_=!0,w=null):u===h&&(_=!0,w=d.route.hydrateFallbackElement||null)));let m=e.concat(o.slice(0,h+1)),p=()=>{let g;return f?g=v:_?g=w:d.route.Component?g=k.createElement(d.route.Component,null):d.route.element?g=d.route.element:g=c,k.createElement(A2,{match:d,routeContext:{outlet:c,matches:m,isDataRoute:n!=null},children:g})};return n&&(d.route.ErrorBoundary||d.route.errorElement||h===0)?k.createElement(S2,{location:n.location,revalidation:n.revalidation,component:v,error:f,children:p(),routeContext:{outlet:null,matches:m,isDataRoute:!0}}):p()},null)}var QT=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(QT||{}),Pd=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(Pd||{});function k2(t){let e=k.useContext(Sy);return e||ze(!1),e}function R2(t){let e=k.useContext(g2);return e||ze(!1),e}function b2(t){let e=k.useContext(vs);return e||ze(!1),e}function YT(t){let e=b2(),n=e.matches[e.matches.length-1];return n.route.id||ze(!1),n.route.id}function C2(){var t;let e=k.useContext(GT),n=R2(Pd.UseRouteError),r=YT(Pd.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function x2(){let{router:t}=k2(QT.UseNavigateStable),e=YT(Pd.UseNavigateStable),n=k.useRef(!1);return KT(()=>{n.current=!0}),k.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,Sl({fromRouteId:e},s)))},[t,e])}const Qw={};function N2(t,e,n){!e&&!Qw[t]&&(Qw[t]=!0)}function Tr(t){ze(!1)}function D2(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Nr.Pop,navigator:s,static:o=!1,future:a}=t;fu()&&ze(!1);let l=e.replace(/^\/*/,"/"),u=k.useMemo(()=>({basename:l,navigator:s,static:o,future:Sl({v7_relativeSplatPath:!1},a)}),[l,a,s,o]);typeof r=="string"&&(r=Bo(r));let{pathname:c="/",search:d="",hash:h="",state:f=null,key:_="default"}=r,v=k.useMemo(()=>{let w=Ty(c,l);return w==null?null:{location:{pathname:w,search:d,hash:h,state:f,key:_},navigationType:i}},[l,c,d,h,f,_,i]);return v==null?null:k.createElement(ys.Provider,{value:u},k.createElement(Ih.Provider,{children:n,value:v}))}function O2(t){let{children:e,location:n}=t;return w2(Im(e),n)}new Promise(()=>{});function Im(t,e){e===void 0&&(e=[]);let n=[];return k.Children.forEach(t,(r,i)=>{if(!k.isValidElement(r))return;let s=[...e,i];if(r.type===k.Fragment){n.push.apply(n,Im(r.props.children,s));return}r.type!==Tr&&ze(!1),!r.props.index||!r.props.children||ze(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Im(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.22.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Em(){return Em=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Em.apply(this,arguments)}function V2(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function L2(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function M2(t,e){return t.button===0&&(!e||e==="_self")&&!L2(t)}const F2=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],U2="6";try{window.__reactRouterVersion=U2}catch{}const j2="startTransition",Yw=Ob[j2];function $2(t){let{basename:e,children:n,future:r,window:i}=t,s=k.useRef();s.current==null&&(s.current=Wx({window:i,v5Compat:!0}));let o=s.current,[a,l]=k.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},c=k.useCallback(d=>{u&&Yw?Yw(()=>l(d)):l(d)},[l,u]);return k.useLayoutEffect(()=>o.listen(c),[o,c]),k.createElement(D2,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o,future:r})}const z2=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",B2=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,XT=k.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:c,unstable_viewTransition:d}=e,h=V2(e,F2),{basename:f}=k.useContext(ys),_,v=!1;if(typeof u=="string"&&B2.test(u)&&(_=u,z2))try{let g=new URL(window.location.href),E=u.startsWith("//")?new URL(g.protocol+u):new URL(u),S=Ty(E.pathname,f);E.origin===g.origin&&S!=null?u=S+E.search+E.hash:v=!0}catch{}let w=y2(u,{relative:i}),m=q2(u,{replace:o,state:a,target:l,preventScrollReset:c,relative:i,unstable_viewTransition:d});function p(g){r&&r(g),g.defaultPrevented||m(g)}return k.createElement("a",Em({},h,{href:_||w,onClick:v||s?r:p,ref:n,target:l}))});var Xw;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(Xw||(Xw={}));var Jw;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Jw||(Jw={}));function q2(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:a}=e===void 0?{}:e,l=v2(),u=Eh(),c=HT(t,{relative:o});return k.useCallback(d=>{if(M2(d,n)){d.preventDefault();let h=r!==void 0?r:Ad(u)===Ad(c);l(t,{replace:h,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:a})}},[u,l,c,r,i,n,t,s,o,a])}function Zw(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function L(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Zw(Object(n),!0).forEach(function(r){We(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Zw(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function kd(t){"@babel/helpers - typeof";return kd=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},kd(t)}function W2(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e0(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function G2(t,e,n){return e&&e0(t.prototype,e),n&&e0(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function We(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Ay(t,e){return H2(t)||Y2(t,e)||JT(t,e)||J2()}function pu(t){return K2(t)||Q2(t)||JT(t)||X2()}function K2(t){if(Array.isArray(t))return Tm(t)}function H2(t){if(Array.isArray(t))return t}function Q2(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Y2(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r=[],i=!0,s=!1,o,a;try{for(n=n.call(t);!(i=(o=n.next()).done)&&(r.push(o.value),!(e&&r.length===e));i=!0);}catch(l){s=!0,a=l}finally{try{!i&&n.return!=null&&n.return()}finally{if(s)throw a}}return r}}function JT(t,e){if(t){if(typeof t=="string")return Tm(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Tm(t,e)}}function Tm(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function X2(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function J2(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var t0=function(){},Py={},ZT={},eS=null,tS={mark:t0,measure:t0};try{typeof window<"u"&&(Py=window),typeof document<"u"&&(ZT=document),typeof MutationObserver<"u"&&(eS=MutationObserver),typeof performance<"u"&&(tS=performance)}catch{}var Z2=Py.navigator||{},n0=Z2.userAgent,r0=n0===void 0?"":n0,Qr=Py,ye=ZT,i0=eS,uc=tS;Qr.document;var cr=!!ye.documentElement&&!!ye.head&&typeof ye.addEventListener=="function"&&typeof ye.createElement=="function",nS=~r0.indexOf("MSIE")||~r0.indexOf("Trident/"),cc,dc,hc,fc,pc,rr="___FONT_AWESOME___",Sm=16,rS="fa",iS="svg-inline--fa",es="data-fa-i2svg",Am="data-fa-pseudo-element",eN="data-fa-pseudo-element-pending",ky="data-prefix",Ry="data-icon",s0="fontawesome-i2svg",tN="async",nN=["HTML","HEAD","STYLE","SCRIPT"],sS=function(){try{return!0}catch{return!1}}(),fe="classic",be="sharp",by=[fe,be];function mu(t){return new Proxy(t,{get:function(n,r){return r in n?n[r]:n[fe]}})}var Al=mu((cc={},We(cc,fe,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),We(cc,be,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),cc)),Pl=mu((dc={},We(dc,fe,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),We(dc,be,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),dc)),kl=mu((hc={},We(hc,fe,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),We(hc,be,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),hc)),rN=mu((fc={},We(fc,fe,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),We(fc,be,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),fc)),iN=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,oS="fa-layers-text",sN=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,oN=mu((pc={},We(pc,fe,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),We(pc,be,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),pc)),aS=[1,2,3,4,5,6,7,8,9,10],aN=aS.concat([11,12,13,14,15,16,17,18,19,20]),lN=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Li={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Rl=new Set;Object.keys(Pl[fe]).map(Rl.add.bind(Rl));Object.keys(Pl[be]).map(Rl.add.bind(Rl));var uN=[].concat(by,pu(Rl),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Li.GROUP,Li.SWAP_OPACITY,Li.PRIMARY,Li.SECONDARY]).concat(aS.map(function(t){return"".concat(t,"x")})).concat(aN.map(function(t){return"w-".concat(t)})),Ha=Qr.FontAwesomeConfig||{};function cN(t){var e=ye.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function dN(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(ye&&typeof ye.querySelector=="function"){var hN=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];hN.forEach(function(t){var e=Ay(t,2),n=e[0],r=e[1],i=dN(cN(n));i!=null&&(Ha[r]=i)})}var lS={styleDefault:"solid",familyDefault:"classic",cssPrefix:rS,replacementClass:iS,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Ha.familyPrefix&&(Ha.cssPrefix=Ha.familyPrefix);var So=L(L({},lS),Ha);So.autoReplaceSvg||(So.observeMutations=!1);var j={};Object.keys(lS).forEach(function(t){Object.defineProperty(j,t,{enumerable:!0,set:function(n){So[t]=n,Qa.forEach(function(r){return r(j)})},get:function(){return So[t]}})});Object.defineProperty(j,"familyPrefix",{enumerable:!0,set:function(e){So.cssPrefix=e,Qa.forEach(function(n){return n(j)})},get:function(){return So.cssPrefix}});Qr.FontAwesomeConfig=j;var Qa=[];function fN(t){return Qa.push(t),function(){Qa.splice(Qa.indexOf(t),1)}}var yr=Sm,bn={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function pN(t){if(!(!t||!cr)){var e=ye.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=ye.head.childNodes,r=null,i=n.length-1;i>-1;i--){var s=n[i],o=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=s)}return ye.head.insertBefore(e,r),t}}var mN="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function bl(){for(var t=12,e="";t-- >0;)e+=mN[Math.random()*62|0];return e}function qo(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function Cy(t){return t.classList?qo(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function uS(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function gN(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(uS(t[n]),'" ')},"").trim()}function Th(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function xy(t){return t.size!==bn.size||t.x!==bn.x||t.y!==bn.y||t.rotate!==bn.rotate||t.flipX||t.flipY}function yN(t){var e=t.transform,n=t.containerWidth,r=t.iconWidth,i={transform:"translate(".concat(n/2," 256)")},s="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),a="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(s," ").concat(o," ").concat(a)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:l,path:u}}function vN(t){var e=t.transform,n=t.width,r=n===void 0?Sm:n,i=t.height,s=i===void 0?Sm:i,o=t.startCentered,a=o===void 0?!1:o,l="";return a&&nS?l+="translate(".concat(e.x/yr-r/2,"em, ").concat(e.y/yr-s/2,"em) "):a?l+="translate(calc(-50% + ".concat(e.x/yr,"em), calc(-50% + ").concat(e.y/yr,"em)) "):l+="translate(".concat(e.x/yr,"em, ").concat(e.y/yr,"em) "),l+="scale(".concat(e.size/yr*(e.flipX?-1:1),", ").concat(e.size/yr*(e.flipY?-1:1),") "),l+="rotate(".concat(e.rotate,"deg) "),l}var _N=`:root, :host {
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
}`;function cS(){var t=rS,e=iS,n=j.cssPrefix,r=j.replacementClass,i=_N;if(n!==t||r!==e){var s=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),a=new RegExp("\\.".concat(e),"g");i=i.replace(s,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(a,".".concat(r))}return i}var o0=!1;function Zf(){j.autoAddCss&&!o0&&(pN(cS()),o0=!0)}var wN={mixout:function(){return{dom:{css:cS,insertCss:Zf}}},hooks:function(){return{beforeDOMElementCreation:function(){Zf()},beforeI2svg:function(){Zf()}}}},ir=Qr||{};ir[rr]||(ir[rr]={});ir[rr].styles||(ir[rr].styles={});ir[rr].hooks||(ir[rr].hooks={});ir[rr].shims||(ir[rr].shims=[]);var pn=ir[rr],dS=[],IN=function t(){ye.removeEventListener("DOMContentLoaded",t),Rd=1,dS.map(function(e){return e()})},Rd=!1;cr&&(Rd=(ye.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(ye.readyState),Rd||ye.addEventListener("DOMContentLoaded",IN));function EN(t){cr&&(Rd?setTimeout(t,0):dS.push(t))}function gu(t){var e=t.tag,n=t.attributes,r=n===void 0?{}:n,i=t.children,s=i===void 0?[]:i;return typeof t=="string"?uS(t):"<".concat(e," ").concat(gN(r),">").concat(s.map(gu).join(""),"</").concat(e,">")}function a0(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var TN=function(e,n){return function(r,i,s,o){return e.call(n,r,i,s,o)}},ep=function(e,n,r,i){var s=Object.keys(e),o=s.length,a=i!==void 0?TN(n,i):n,l,u,c;for(r===void 0?(l=1,c=e[s[0]]):(l=0,c=r);l<o;l++)u=s[l],c=a(c,e[u],u,e);return c};function SN(t){for(var e=[],n=0,r=t.length;n<r;){var i=t.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var s=t.charCodeAt(n++);(s&64512)==56320?e.push(((i&1023)<<10)+(s&1023)+65536):(e.push(i),n--)}else e.push(i)}return e}function Pm(t){var e=SN(t);return e.length===1?e[0].toString(16):null}function AN(t,e){var n=t.length,r=t.charCodeAt(e),i;return r>=55296&&r<=56319&&n>e+1&&(i=t.charCodeAt(e+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function l0(t){return Object.keys(t).reduce(function(e,n){var r=t[n],i=!!r.icon;return i?e[r.iconName]=r.icon:e[n]=r,e},{})}function km(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,s=l0(e);typeof pn.hooks.addPack=="function"&&!i?pn.hooks.addPack(t,l0(e)):pn.styles[t]=L(L({},pn.styles[t]||{}),s),t==="fas"&&km("fa",e)}var mc,gc,yc,Xs=pn.styles,PN=pn.shims,kN=(mc={},We(mc,fe,Object.values(kl[fe])),We(mc,be,Object.values(kl[be])),mc),Ny=null,hS={},fS={},pS={},mS={},gS={},RN=(gc={},We(gc,fe,Object.keys(Al[fe])),We(gc,be,Object.keys(Al[be])),gc);function bN(t){return~uN.indexOf(t)}function CN(t,e){var n=e.split("-"),r=n[0],i=n.slice(1).join("-");return r===t&&i!==""&&!bN(i)?i:null}var yS=function(){var e=function(s){return ep(Xs,function(o,a,l){return o[l]=ep(a,s,{}),o},{})};hS=e(function(i,s,o){if(s[3]&&(i[s[3]]=o),s[2]){var a=s[2].filter(function(l){return typeof l=="number"});a.forEach(function(l){i[l.toString(16)]=o})}return i}),fS=e(function(i,s,o){if(i[o]=o,s[2]){var a=s[2].filter(function(l){return typeof l=="string"});a.forEach(function(l){i[l]=o})}return i}),gS=e(function(i,s,o){var a=s[2];return i[o]=o,a.forEach(function(l){i[l]=o}),i});var n="far"in Xs||j.autoFetchSvg,r=ep(PN,function(i,s){var o=s[0],a=s[1],l=s[2];return a==="far"&&!n&&(a="fas"),typeof o=="string"&&(i.names[o]={prefix:a,iconName:l}),typeof o=="number"&&(i.unicodes[o.toString(16)]={prefix:a,iconName:l}),i},{names:{},unicodes:{}});pS=r.names,mS=r.unicodes,Ny=Sh(j.styleDefault,{family:j.familyDefault})};fN(function(t){Ny=Sh(t.styleDefault,{family:j.familyDefault})});yS();function Dy(t,e){return(hS[t]||{})[e]}function xN(t,e){return(fS[t]||{})[e]}function Mi(t,e){return(gS[t]||{})[e]}function vS(t){return pS[t]||{prefix:null,iconName:null}}function NN(t){var e=mS[t],n=Dy("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Yr(){return Ny}var Oy=function(){return{prefix:null,iconName:null,rest:[]}};function Sh(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.family,r=n===void 0?fe:n,i=Al[r][t],s=Pl[r][t]||Pl[r][i],o=t in pn.styles?t:null;return s||o||null}var u0=(yc={},We(yc,fe,Object.keys(kl[fe])),We(yc,be,Object.keys(kl[be])),yc);function Ah(t){var e,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,i=r===void 0?!1:r,s=(e={},We(e,fe,"".concat(j.cssPrefix,"-").concat(fe)),We(e,be,"".concat(j.cssPrefix,"-").concat(be)),e),o=null,a=fe;(t.includes(s[fe])||t.some(function(u){return u0[fe].includes(u)}))&&(a=fe),(t.includes(s[be])||t.some(function(u){return u0[be].includes(u)}))&&(a=be);var l=t.reduce(function(u,c){var d=CN(j.cssPrefix,c);if(Xs[c]?(c=kN[a].includes(c)?rN[a][c]:c,o=c,u.prefix=c):RN[a].indexOf(c)>-1?(o=c,u.prefix=Sh(c,{family:a})):d?u.iconName=d:c!==j.replacementClass&&c!==s[fe]&&c!==s[be]&&u.rest.push(c),!i&&u.prefix&&u.iconName){var h=o==="fa"?vS(u.iconName):{},f=Mi(u.prefix,u.iconName);h.prefix&&(o=null),u.iconName=h.iconName||f||u.iconName,u.prefix=h.prefix||u.prefix,u.prefix==="far"&&!Xs.far&&Xs.fas&&!j.autoFetchSvg&&(u.prefix="fas")}return u},Oy());return(t.includes("fa-brands")||t.includes("fab"))&&(l.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(l.prefix="fad"),!l.prefix&&a===be&&(Xs.fass||j.autoFetchSvg)&&(l.prefix="fass",l.iconName=Mi(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=Yr()||"fas"),l}var DN=function(){function t(){W2(this,t),this.definitions={}}return G2(t,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];var o=i.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(a){n.definitions[a]=L(L({},n.definitions[a]||{}),o[a]),km(a,o[a]);var l=kl[fe][a];l&&km(l,o[a]),yS()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(s){var o=i[s],a=o.prefix,l=o.iconName,u=o.icon,c=u[2];n[a]||(n[a]={}),c.length>0&&c.forEach(function(d){typeof d=="string"&&(n[a][d]=u)}),n[a][l]=u}),n}}]),t}(),c0=[],Js={},lo={},ON=Object.keys(lo);function VN(t,e){var n=e.mixoutsTo;return c0=t,Js={},Object.keys(lo).forEach(function(r){ON.indexOf(r)===-1&&delete lo[r]}),c0.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(o){typeof i[o]=="function"&&(n[o]=i[o]),kd(i[o])==="object"&&Object.keys(i[o]).forEach(function(a){n[o]||(n[o]={}),n[o][a]=i[o][a]})}),r.hooks){var s=r.hooks();Object.keys(s).forEach(function(o){Js[o]||(Js[o]=[]),Js[o].push(s[o])})}r.provides&&r.provides(lo)}),n}function Rm(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var s=Js[t]||[];return s.forEach(function(o){e=o.apply(null,[e].concat(r))}),e}function ts(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var i=Js[t]||[];i.forEach(function(s){s.apply(null,n)})}function sr(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return lo[t]?lo[t].apply(null,e):void 0}function bm(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||Yr();if(e)return e=Mi(n,e)||e,a0(_S.definitions,n,e)||a0(pn.styles,n,e)}var _S=new DN,LN=function(){j.autoReplaceSvg=!1,j.observeMutations=!1,ts("noAuto")},MN={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return cr?(ts("beforeI2svg",e),sr("pseudoElements2svg",e),sr("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;j.autoReplaceSvg===!1&&(j.autoReplaceSvg=!0),j.observeMutations=!0,EN(function(){UN({autoReplaceSvgRoot:n}),ts("watch",e)})}},FN={icon:function(e){if(e===null)return null;if(kd(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:Mi(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],r=Sh(e[0]);return{prefix:r,iconName:Mi(r,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(j.cssPrefix,"-"))>-1||e.match(iN))){var i=Ah(e.split(" "),{skipLookups:!0});return{prefix:i.prefix||Yr(),iconName:Mi(i.prefix,i.iconName)||i.iconName}}if(typeof e=="string"){var s=Yr();return{prefix:s,iconName:Mi(s,e)||e}}}},Xt={noAuto:LN,config:j,dom:MN,parse:FN,library:_S,findIconDefinition:bm,toHtml:gu},UN=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,r=n===void 0?ye:n;(Object.keys(pn.styles).length>0||j.autoFetchSvg)&&cr&&j.autoReplaceSvg&&Xt.dom.i2svg({node:r})};function Ph(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(r){return gu(r)})}}),Object.defineProperty(t,"node",{get:function(){if(cr){var r=ye.createElement("div");return r.innerHTML=t.html,r.children}}}),t}function jN(t){var e=t.children,n=t.main,r=t.mask,i=t.attributes,s=t.styles,o=t.transform;if(xy(o)&&n.found&&!r.found){var a=n.width,l=n.height,u={x:a/l/2,y:.5};i.style=Th(L(L({},s),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:i,children:e}]}function $N(t){var e=t.prefix,n=t.iconName,r=t.children,i=t.attributes,s=t.symbol,o=s===!0?"".concat(e,"-").concat(j.cssPrefix,"-").concat(n):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:L(L({},i),{},{id:o}),children:r}]}]}function Vy(t){var e=t.icons,n=e.main,r=e.mask,i=t.prefix,s=t.iconName,o=t.transform,a=t.symbol,l=t.title,u=t.maskId,c=t.titleId,d=t.extra,h=t.watchable,f=h===void 0?!1:h,_=r.found?r:n,v=_.width,w=_.height,m=i==="fak",p=[j.replacementClass,s?"".concat(j.cssPrefix,"-").concat(s):""].filter(function(J){return d.classes.indexOf(J)===-1}).filter(function(J){return J!==""||!!J}).concat(d.classes).join(" "),g={children:[],attributes:L(L({},d.attributes),{},{"data-prefix":i,"data-icon":s,class:p,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(v," ").concat(w)})},E=m&&!~d.classes.indexOf("fa-fw")?{width:"".concat(v/w*16*.0625,"em")}:{};f&&(g.attributes[es]=""),l&&(g.children.push({tag:"title",attributes:{id:g.attributes["aria-labelledby"]||"title-".concat(c||bl())},children:[l]}),delete g.attributes.title);var S=L(L({},g),{},{prefix:i,iconName:s,main:n,mask:r,maskId:u,transform:o,symbol:a,styles:L(L({},E),d.styles)}),R=r.found&&n.found?sr("generateAbstractMask",S)||{children:[],attributes:{}}:sr("generateAbstractIcon",S)||{children:[],attributes:{}},x=R.children,M=R.attributes;return S.children=x,S.attributes=M,a?$N(S):jN(S)}function d0(t){var e=t.content,n=t.width,r=t.height,i=t.transform,s=t.title,o=t.extra,a=t.watchable,l=a===void 0?!1:a,u=L(L(L({},o.attributes),s?{title:s}:{}),{},{class:o.classes.join(" ")});l&&(u[es]="");var c=L({},o.styles);xy(i)&&(c.transform=vN({transform:i,startCentered:!0,width:n,height:r}),c["-webkit-transform"]=c.transform);var d=Th(c);d.length>0&&(u.style=d);var h=[];return h.push({tag:"span",attributes:u,children:[e]}),s&&h.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),h}function zN(t){var e=t.content,n=t.title,r=t.extra,i=L(L(L({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),s=Th(r.styles);s.length>0&&(i.style=s);var o=[];return o.push({tag:"span",attributes:i,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var tp=pn.styles;function Cm(t){var e=t[0],n=t[1],r=t.slice(4),i=Ay(r,1),s=i[0],o=null;return Array.isArray(s)?o={tag:"g",attributes:{class:"".concat(j.cssPrefix,"-").concat(Li.GROUP)},children:[{tag:"path",attributes:{class:"".concat(j.cssPrefix,"-").concat(Li.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat(j.cssPrefix,"-").concat(Li.PRIMARY),fill:"currentColor",d:s[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:e,height:n,icon:o}}var BN={found:!1,width:512,height:512};function qN(t,e){!sS&&!j.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function xm(t,e){var n=e;return e==="fa"&&j.styleDefault!==null&&(e=Yr()),new Promise(function(r,i){if(sr("missingIconAbstract"),n==="fa"){var s=vS(t)||{};t=s.iconName||t,e=s.prefix||e}if(t&&e&&tp[e]&&tp[e][t]){var o=tp[e][t];return r(Cm(o))}qN(t,e),r(L(L({},BN),{},{icon:j.showMissingIcons&&t?sr("missingIconAbstract")||{}:{}}))})}var h0=function(){},Nm=j.measurePerformance&&uc&&uc.mark&&uc.measure?uc:{mark:h0,measure:h0},Ca='FA "6.5.1"',WN=function(e){return Nm.mark("".concat(Ca," ").concat(e," begins")),function(){return wS(e)}},wS=function(e){Nm.mark("".concat(Ca," ").concat(e," ends")),Nm.measure("".concat(Ca," ").concat(e),"".concat(Ca," ").concat(e," begins"),"".concat(Ca," ").concat(e," ends"))},Ly={begin:WN,end:wS},$c=function(){};function f0(t){var e=t.getAttribute?t.getAttribute(es):null;return typeof e=="string"}function GN(t){var e=t.getAttribute?t.getAttribute(ky):null,n=t.getAttribute?t.getAttribute(Ry):null;return e&&n}function KN(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(j.replacementClass)}function HN(){if(j.autoReplaceSvg===!0)return zc.replace;var t=zc[j.autoReplaceSvg];return t||zc.replace}function QN(t){return ye.createElementNS("http://www.w3.org/2000/svg",t)}function YN(t){return ye.createElement(t)}function IS(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,r=n===void 0?t.tag==="svg"?QN:YN:n;if(typeof t=="string")return ye.createTextNode(t);var i=r(t.tag);Object.keys(t.attributes||[]).forEach(function(o){i.setAttribute(o,t.attributes[o])});var s=t.children||[];return s.forEach(function(o){i.appendChild(IS(o,{ceFn:r}))}),i}function XN(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var zc={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(i){n.parentNode.insertBefore(IS(i),n)}),n.getAttribute(es)===null&&j.keepOriginalSource){var r=ye.createComment(XN(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(e){var n=e[0],r=e[1];if(~Cy(n).indexOf(j.replacementClass))return zc.replace(e);var i=new RegExp("".concat(j.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var s=r[0].attributes.class.split(" ").reduce(function(a,l){return l===j.replacementClass||l.match(i)?a.toSvg.push(l):a.toNode.push(l),a},{toNode:[],toSvg:[]});r[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",s.toNode.join(" "))}var o=r.map(function(a){return gu(a)}).join(`
`);n.setAttribute(es,""),n.innerHTML=o}};function p0(t){t()}function ES(t,e){var n=typeof e=="function"?e:$c;if(t.length===0)n();else{var r=p0;j.mutateApproach===tN&&(r=Qr.requestAnimationFrame||p0),r(function(){var i=HN(),s=Ly.begin("mutate");t.map(i),s(),n()})}}var My=!1;function TS(){My=!0}function Dm(){My=!1}var bd=null;function m0(t){if(i0&&j.observeMutations){var e=t.treeCallback,n=e===void 0?$c:e,r=t.nodeCallback,i=r===void 0?$c:r,s=t.pseudoElementsCallback,o=s===void 0?$c:s,a=t.observeMutationsRoot,l=a===void 0?ye:a;bd=new i0(function(u){if(!My){var c=Yr();qo(u).forEach(function(d){if(d.type==="childList"&&d.addedNodes.length>0&&!f0(d.addedNodes[0])&&(j.searchPseudoElements&&o(d.target),n(d.target)),d.type==="attributes"&&d.target.parentNode&&j.searchPseudoElements&&o(d.target.parentNode),d.type==="attributes"&&f0(d.target)&&~lN.indexOf(d.attributeName))if(d.attributeName==="class"&&GN(d.target)){var h=Ah(Cy(d.target)),f=h.prefix,_=h.iconName;d.target.setAttribute(ky,f||c),_&&d.target.setAttribute(Ry,_)}else KN(d.target)&&i(d.target)})}}),cr&&bd.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function JN(){bd&&bd.disconnect()}function ZN(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(r,i){var s=i.split(":"),o=s[0],a=s.slice(1);return o&&a.length>0&&(r[o]=a.join(":").trim()),r},{})),n}function eD(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"",i=Ah(Cy(t));return i.prefix||(i.prefix=Yr()),e&&n&&(i.prefix=e,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=xN(i.prefix,t.innerText)||Dy(i.prefix,Pm(t.innerText))),!i.iconName&&j.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=t.firstChild.data)),i}function tD(t){var e=qo(t.attributes).reduce(function(i,s){return i.name!=="class"&&i.name!=="style"&&(i[s.name]=s.value),i},{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return j.autoA11y&&(n?e["aria-labelledby"]="".concat(j.replacementClass,"-title-").concat(r||bl()):(e["aria-hidden"]="true",e.focusable="false")),e}function nD(){return{iconName:null,title:null,titleId:null,prefix:null,transform:bn,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function g0(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=eD(t),r=n.iconName,i=n.prefix,s=n.rest,o=tD(t),a=Rm("parseNodeAttributes",{},t),l=e.styleParser?ZN(t):[];return L({iconName:r,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:i,transform:bn,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:l,attributes:o}},a)}var rD=pn.styles;function SS(t){var e=j.autoReplaceSvg==="nest"?g0(t,{styleParser:!1}):g0(t);return~e.extra.classes.indexOf(oS)?sr("generateLayersText",t,e):sr("generateSvgReplacementMutation",t,e)}var Xr=new Set;by.map(function(t){Xr.add("fa-".concat(t))});Object.keys(Al[fe]).map(Xr.add.bind(Xr));Object.keys(Al[be]).map(Xr.add.bind(Xr));Xr=pu(Xr);function y0(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!cr)return Promise.resolve();var n=ye.documentElement.classList,r=function(d){return n.add("".concat(s0,"-").concat(d))},i=function(d){return n.remove("".concat(s0,"-").concat(d))},s=j.autoFetchSvg?Xr:by.map(function(c){return"fa-".concat(c)}).concat(Object.keys(rD));s.includes("fa")||s.push("fa");var o=[".".concat(oS,":not([").concat(es,"])")].concat(s.map(function(c){return".".concat(c,":not([").concat(es,"])")})).join(", ");if(o.length===0)return Promise.resolve();var a=[];try{a=qo(t.querySelectorAll(o))}catch{}if(a.length>0)r("pending"),i("complete");else return Promise.resolve();var l=Ly.begin("onTree"),u=a.reduce(function(c,d){try{var h=SS(d);h&&c.push(h)}catch(f){sS||f.name==="MissingIcon"&&console.error(f)}return c},[]);return new Promise(function(c,d){Promise.all(u).then(function(h){ES(h,function(){r("active"),r("complete"),i("pending"),typeof e=="function"&&e(),l(),c()})}).catch(function(h){l(),d(h)})})}function iD(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;SS(t).then(function(n){n&&ES([n],e)})}function sD(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(e||{}).icon?e:bm(e||{}),i=n.mask;return i&&(i=(i||{}).icon?i:bm(i||{})),t(r,L(L({},n),{},{mask:i}))}}var oD=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?bn:r,s=n.symbol,o=s===void 0?!1:s,a=n.mask,l=a===void 0?null:a,u=n.maskId,c=u===void 0?null:u,d=n.title,h=d===void 0?null:d,f=n.titleId,_=f===void 0?null:f,v=n.classes,w=v===void 0?[]:v,m=n.attributes,p=m===void 0?{}:m,g=n.styles,E=g===void 0?{}:g;if(e){var S=e.prefix,R=e.iconName,x=e.icon;return Ph(L({type:"icon"},e),function(){return ts("beforeDOMElementCreation",{iconDefinition:e,params:n}),j.autoA11y&&(h?p["aria-labelledby"]="".concat(j.replacementClass,"-title-").concat(_||bl()):(p["aria-hidden"]="true",p.focusable="false")),Vy({icons:{main:Cm(x),mask:l?Cm(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:S,iconName:R,transform:L(L({},bn),i),symbol:o,title:h,maskId:c,titleId:_,extra:{attributes:p,styles:E,classes:w}})})}},aD={mixout:function(){return{icon:sD(oD)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=y0,n.nodeCallback=iD,n}}},provides:function(e){e.i2svg=function(n){var r=n.node,i=r===void 0?ye:r,s=n.callback,o=s===void 0?function(){}:s;return y0(i,o)},e.generateSvgReplacementMutation=function(n,r){var i=r.iconName,s=r.title,o=r.titleId,a=r.prefix,l=r.transform,u=r.symbol,c=r.mask,d=r.maskId,h=r.extra;return new Promise(function(f,_){Promise.all([xm(i,a),c.iconName?xm(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(v){var w=Ay(v,2),m=w[0],p=w[1];f([n,Vy({icons:{main:m,mask:p},prefix:a,iconName:i,transform:l,symbol:u,maskId:d,title:s,titleId:o,extra:h,watchable:!0})])}).catch(_)})},e.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,s=n.main,o=n.transform,a=n.styles,l=Th(a);l.length>0&&(i.style=l);var u;return xy(o)&&(u=sr("generateAbstractTransformGrouping",{main:s,transform:o,containerWidth:s.width,iconWidth:s.width})),r.push(u||s.icon),{children:r,attributes:i}}}},lD={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,s=i===void 0?[]:i;return Ph({type:"layer"},function(){ts("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(a){Array.isArray(a)?a.map(function(l){o=o.concat(l.abstract)}):o=o.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat(j.cssPrefix,"-layers")].concat(pu(s)).join(" ")},children:o}]})}}}},uD={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,s=i===void 0?null:i,o=r.classes,a=o===void 0?[]:o,l=r.attributes,u=l===void 0?{}:l,c=r.styles,d=c===void 0?{}:c;return Ph({type:"counter",content:n},function(){return ts("beforeDOMElementCreation",{content:n,params:r}),zN({content:n.toString(),title:s,extra:{attributes:u,styles:d,classes:["".concat(j.cssPrefix,"-layers-counter")].concat(pu(a))}})})}}}},cD={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,s=i===void 0?bn:i,o=r.title,a=o===void 0?null:o,l=r.classes,u=l===void 0?[]:l,c=r.attributes,d=c===void 0?{}:c,h=r.styles,f=h===void 0?{}:h;return Ph({type:"text",content:n},function(){return ts("beforeDOMElementCreation",{content:n,params:r}),d0({content:n,transform:L(L({},bn),s),title:a,extra:{attributes:d,styles:f,classes:["".concat(j.cssPrefix,"-layers-text")].concat(pu(u))}})})}}},provides:function(e){e.generateLayersText=function(n,r){var i=r.title,s=r.transform,o=r.extra,a=null,l=null;if(nS){var u=parseInt(getComputedStyle(n).fontSize,10),c=n.getBoundingClientRect();a=c.width/u,l=c.height/u}return j.autoA11y&&!i&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,d0({content:n.innerHTML,width:a,height:l,transform:s,title:i,extra:o,watchable:!0})])}}},dD=new RegExp('"',"ug"),v0=[1105920,1112319];function hD(t){var e=t.replace(dD,""),n=AN(e,0),r=n>=v0[0]&&n<=v0[1],i=e.length===2?e[0]===e[1]:!1;return{value:Pm(i?e[0]:e),isSecondary:r||i}}function _0(t,e){var n="".concat(eN).concat(e.replace(":","-"));return new Promise(function(r,i){if(t.getAttribute(n)!==null)return r();var s=qo(t.children),o=s.filter(function(x){return x.getAttribute(Am)===e})[0],a=Qr.getComputedStyle(t,e),l=a.getPropertyValue("font-family").match(sN),u=a.getPropertyValue("font-weight"),c=a.getPropertyValue("content");if(o&&!l)return t.removeChild(o),r();if(l&&c!=="none"&&c!==""){var d=a.getPropertyValue("content"),h=~["Sharp"].indexOf(l[2])?be:fe,f=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?Pl[h][l[2].toLowerCase()]:oN[h][u],_=hD(d),v=_.value,w=_.isSecondary,m=l[0].startsWith("FontAwesome"),p=Dy(f,v),g=p;if(m){var E=NN(v);E.iconName&&E.prefix&&(p=E.iconName,f=E.prefix)}if(p&&!w&&(!o||o.getAttribute(ky)!==f||o.getAttribute(Ry)!==g)){t.setAttribute(n,g),o&&t.removeChild(o);var S=nD(),R=S.extra;R.attributes[Am]=e,xm(p,f).then(function(x){var M=Vy(L(L({},S),{},{icons:{main:x,mask:Oy()},prefix:f,iconName:g,extra:R,watchable:!0})),J=ye.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(J,t.firstChild):t.appendChild(J),J.outerHTML=M.map(function(G){return gu(G)}).join(`
`),t.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function fD(t){return Promise.all([_0(t,"::before"),_0(t,"::after")])}function pD(t){return t.parentNode!==document.head&&!~nN.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Am)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function w0(t){if(cr)return new Promise(function(e,n){var r=qo(t.querySelectorAll("*")).filter(pD).map(fD),i=Ly.begin("searchPseudoElements");TS(),Promise.all(r).then(function(){i(),Dm(),e()}).catch(function(){i(),Dm(),n()})})}var mD={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=w0,n}}},provides:function(e){e.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?ye:r;j.searchPseudoElements&&w0(i)}}},I0=!1,gD={mixout:function(){return{dom:{unwatch:function(){TS(),I0=!0}}}},hooks:function(){return{bootstrap:function(){m0(Rm("mutationObserverCallbacks",{}))},noAuto:function(){JN()},watch:function(n){var r=n.observeMutationsRoot;I0?Dm():m0(Rm("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},E0=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(r,i){var s=i.toLowerCase().split("-"),o=s[0],a=s.slice(1).join("-");if(o&&a==="h")return r.flipX=!0,r;if(o&&a==="v")return r.flipY=!0,r;if(a=parseFloat(a),isNaN(a))return r;switch(o){case"grow":r.size=r.size+a;break;case"shrink":r.size=r.size-a;break;case"left":r.x=r.x-a;break;case"right":r.x=r.x+a;break;case"up":r.y=r.y-a;break;case"down":r.y=r.y+a;break;case"rotate":r.rotate=r.rotate+a;break}return r},n)},yD={mixout:function(){return{parse:{transform:function(n){return E0(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=E0(i)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,s=n.containerWidth,o=n.iconWidth,a={transform:"translate(".concat(s/2," 256)")},l="translate(".concat(i.x*32,", ").concat(i.y*32,") "),u="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),c="rotate(".concat(i.rotate," 0 0)"),d={transform:"".concat(l," ").concat(u," ").concat(c)},h={transform:"translate(".concat(o/2*-1," -256)")},f={outer:a,inner:d,path:h};return{tag:"g",attributes:L({},f.outer),children:[{tag:"g",attributes:L({},f.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:L(L({},r.icon.attributes),f.path)}]}]}}}},np={x:0,y:0,width:"100%",height:"100%"};function T0(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function vD(t){return t.tag==="g"?t.children:[t]}var _D={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),s=i?Ah(i.split(" ").map(function(o){return o.trim()})):Oy();return s.prefix||(s.prefix=Yr()),n.mask=s,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var r=n.children,i=n.attributes,s=n.main,o=n.mask,a=n.maskId,l=n.transform,u=s.width,c=s.icon,d=o.width,h=o.icon,f=yN({transform:l,containerWidth:d,iconWidth:u}),_={tag:"rect",attributes:L(L({},np),{},{fill:"white"})},v=c.children?{children:c.children.map(T0)}:{},w={tag:"g",attributes:L({},f.inner),children:[T0(L({tag:c.tag,attributes:L(L({},c.attributes),f.path)},v))]},m={tag:"g",attributes:L({},f.outer),children:[w]},p="mask-".concat(a||bl()),g="clip-".concat(a||bl()),E={tag:"mask",attributes:L(L({},np),{},{id:p,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[_,m]},S={tag:"defs",children:[{tag:"clipPath",attributes:{id:g},children:vD(h)},E]};return r.push(S,{tag:"rect",attributes:L({fill:"currentColor","clip-path":"url(#".concat(g,")"),mask:"url(#".concat(p,")")},np)}),{children:r,attributes:i}}}},wD={provides:function(e){var n=!1;Qr.matchMedia&&(n=Qr.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:L(L({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=L(L({},s),{},{attributeName:"opacity"}),a={tag:"circle",attributes:L(L({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||a.children.push({tag:"animate",attributes:L(L({},s),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:L(L({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(a),r.push({tag:"path",attributes:L(L({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:L(L({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:L(L({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:L(L({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},ID={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),s=i===null?!1:i===""?!0:i;return n.symbol=s,n}}}},ED=[wN,aD,lD,uD,cD,mD,gD,yD,_D,wD,ID];VN(ED,{mixoutsTo:Xt});Xt.noAuto;Xt.config;Xt.library;Xt.dom;var Om=Xt.parse;Xt.findIconDefinition;Xt.toHtml;var TD=Xt.icon;Xt.layer;Xt.text;Xt.counter;var AS={exports:{}},SD="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",AD=SD,PD=AD;function PS(){}function kS(){}kS.resetWarningCache=PS;var kD=function(){function t(r,i,s,o,a,l){if(l!==PD){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:kS,resetWarningCache:PS};return n.PropTypes=n,n};AS.exports=kD();var RD=AS.exports;const Y=PE(RD);function S0(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function Dr(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?S0(Object(n),!0).forEach(function(r){Zs(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):S0(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Cd(t){"@babel/helpers - typeof";return Cd=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Cd(t)}function Zs(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function bD(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function CD(t,e){if(t==null)return{};var n=bD(t,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function Vm(t){return xD(t)||ND(t)||DD(t)||OD()}function xD(t){if(Array.isArray(t))return Lm(t)}function ND(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function DD(t,e){if(t){if(typeof t=="string")return Lm(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Lm(t,e)}}function Lm(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function OD(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function VD(t){var e,n=t.beat,r=t.fade,i=t.beatFade,s=t.bounce,o=t.shake,a=t.flash,l=t.spin,u=t.spinPulse,c=t.spinReverse,d=t.pulse,h=t.fixedWidth,f=t.inverse,_=t.border,v=t.listItem,w=t.flip,m=t.size,p=t.rotation,g=t.pull,E=(e={"fa-beat":n,"fa-fade":r,"fa-beat-fade":i,"fa-bounce":s,"fa-shake":o,"fa-flash":a,"fa-spin":l,"fa-spin-reverse":c,"fa-spin-pulse":u,"fa-pulse":d,"fa-fw":h,"fa-inverse":f,"fa-border":_,"fa-li":v,"fa-flip":w===!0,"fa-flip-horizontal":w==="horizontal"||w==="both","fa-flip-vertical":w==="vertical"||w==="both"},Zs(e,"fa-".concat(m),typeof m<"u"&&m!==null),Zs(e,"fa-rotate-".concat(p),typeof p<"u"&&p!==null&&p!==0),Zs(e,"fa-pull-".concat(g),typeof g<"u"&&g!==null),Zs(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(E).map(function(S){return E[S]?S:null}).filter(function(S){return S})}function LD(t){return t=t-0,t===t}function RS(t){return LD(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(e,n){return n?n.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}var MD=["style"];function FD(t){return t.charAt(0).toUpperCase()+t.slice(1)}function UD(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),i=RS(n.slice(0,r)),s=n.slice(r+1).trim();return i.startsWith("webkit")?e[FD(i)]=s:e[i]=s,e},{})}function bS(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return bS(t,l)}),i=Object.keys(e.attributes||{}).reduce(function(l,u){var c=e.attributes[u];switch(u){case"class":l.attrs.className=c,delete e.attributes.class;break;case"style":l.attrs.style=UD(c);break;default:u.indexOf("aria-")===0||u.indexOf("data-")===0?l.attrs[u.toLowerCase()]=c:l.attrs[RS(u)]=c}return l},{attrs:{}}),s=n.style,o=s===void 0?{}:s,a=CD(n,MD);return i.attrs.style=Dr(Dr({},i.attrs.style),o),t.apply(void 0,[e.tag,Dr(Dr({},i.attrs),a)].concat(Vm(r)))}var CS=!1;try{CS=!0}catch{}function jD(){if(!CS&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function A0(t){if(t&&Cd(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(Om.icon)return Om.icon(t);if(t===null)return null;if(t&&Cd(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function rp(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?Zs({},t,e):{}}var at=sh.forwardRef(function(t,e){var n=t.icon,r=t.mask,i=t.symbol,s=t.className,o=t.title,a=t.titleId,l=t.maskId,u=A0(n),c=rp("classes",[].concat(Vm(VD(t)),Vm(s.split(" ")))),d=rp("transform",typeof t.transform=="string"?Om.transform(t.transform):t.transform),h=rp("mask",A0(r)),f=TD(u,Dr(Dr(Dr(Dr({},c),d),h),{},{symbol:i,title:o,titleId:a,maskId:l}));if(!f)return jD("Could not find icon",u),null;var _=f.abstract,v={ref:e};return Object.keys(t).forEach(function(w){at.defaultProps.hasOwnProperty(w)||(v[w]=t[w])}),$D(_[0],v)});at.displayName="FontAwesomeIcon";at.propTypes={beat:Y.bool,border:Y.bool,beatFade:Y.bool,bounce:Y.bool,className:Y.string,fade:Y.bool,flash:Y.bool,mask:Y.oneOfType([Y.object,Y.array,Y.string]),maskId:Y.string,fixedWidth:Y.bool,inverse:Y.bool,flip:Y.oneOf([!0,!1,"horizontal","vertical","both"]),icon:Y.oneOfType([Y.object,Y.array,Y.string]),listItem:Y.bool,pull:Y.oneOf(["right","left"]),pulse:Y.bool,rotation:Y.oneOf([0,90,180,270]),shake:Y.bool,size:Y.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:Y.bool,spinPulse:Y.bool,spinReverse:Y.bool,symbol:Y.oneOfType([Y.bool,Y.string]),title:Y.string,titleId:Y.string,transform:Y.oneOfType([Y.string,Y.object]),swapOpacity:Y.bool};at.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var $D=bS.bind(null,sh.createElement),zD={prefix:"fas",iconName:"right-from-bracket",icon:[512,512,["sign-out-alt"],"f2f5","M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"]},BD=zD,qD={prefix:"fas",iconName:"eye-slash",icon:[640,512,[],"f070","M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zM223.1 149.5C248.6 126.2 282.7 112 320 112c79.5 0 144 64.5 144 144c0 24.9-6.3 48.3-17.4 68.7L408 294.5c8.4-19.3 10.6-41.4 4.8-63.3c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3c0 10.2-2.4 19.8-6.6 28.3l-90.3-70.8zM373 389.9c-16.4 6.5-34.3 10.1-53 10.1c-79.5 0-144-64.5-144-144c0-6.9 .5-13.6 1.4-20.2L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5L373 389.9z"]},WD={prefix:"fas",iconName:"right-to-bracket",icon:[512,512,["sign-in-alt"],"f2f6","M217.9 105.9L340.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L217.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1L32 320c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM352 416l64 0c17.7 0 32-14.3 32-32l0-256c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l64 0c53 0 96 43 96 96l0 256c0 53-43 96-96 96l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32z"]},xS=WD,GD={prefix:"fas",iconName:"circle-question",icon:[512,512,[62108,"question-circle"],"f059","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"]},KD=GD,NS={prefix:"fas",iconName:"eye",icon:[576,512,[128065],"f06e","M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"]},HD={prefix:"fas",iconName:"sun",icon:[512,512,[9728],"f185","M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM160 256a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zm224 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0z"]},QD={prefix:"fas",iconName:"xmark",icon:[384,512,[128473,10005,10006,10060,215,"close","multiply","remove","times"],"f00d","M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"]},DS=QD,YD={prefix:"fas",iconName:"chevron-left",icon:[320,512,[9001],"f053","M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"]},XD={prefix:"fas",iconName:"chevron-right",icon:[320,512,[9002],"f054","M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"]},JD={prefix:"fas",iconName:"moon",icon:[384,512,[127769,9214],"f186","M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"]},ZD={prefix:"fas",iconName:"user-plus",icon:[640,512,[],"f234","M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM504 312V248H440c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V136c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H552v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"]},P0={};/**
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
 */const OS=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},eO=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},VS={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,d=(s&3)<<4|a>>4;let h=(a&15)<<2|u>>6,f=u&63;l||(f=64,o||(h=64)),r.push(n[c],n[d],n[h],n[f])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(OS(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):eO(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const d=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||d==null)throw new tO;const h=s<<2|a>>4;if(r.push(h),u!==64){const f=a<<4&240|u>>2;if(r.push(f),d!==64){const _=u<<6&192|d;r.push(_)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class tO extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const nO=function(t){const e=OS(t);return VS.encodeByteArray(e,!0)},xd=function(t){return nO(t).replace(/\./g,"")},LS=function(t){try{return VS.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function Nd(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!rO(n)||(t[n]=Nd(t[n],e[n]));return t}function rO(t){return t!=="__proto__"}/**
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
 */function iO(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const sO=()=>iO().__FIREBASE_DEFAULTS__,oO=()=>{if(typeof process>"u"||typeof P0>"u")return;const t=P0.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},aO=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&LS(t[1]);return e&&JSON.parse(e)},Fy=()=>{try{return sO()||oO()||aO()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},MS=()=>{var t;return(t=Fy())===null||t===void 0?void 0:t.config},lO=t=>{var e;return(e=Fy())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class uO{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function cO(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[xd(JSON.stringify(n)),xd(JSON.stringify(o)),""].join(".")}/**
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
 */function Ee(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function dO(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ee())}function Uy(){var t;const e=(t=Fy())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function hO(){return typeof self=="object"&&self.self===self}function FS(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function jy(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function US(){const t=Ee();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function jS(){return!Uy()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Cl(){try{return typeof indexedDB=="object"}catch{return!1}}function fO(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const pO="FirebaseError";class At extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=pO,Object.setPrototypeOf(this,At.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,_s.prototype.create)}}class _s{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?mO(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new At(i,a,r)}}function mO(t,e){return t.replace(gO,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const gO=/\{\$([^}]+)}/g;/**
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
 */function k0(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function yO(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function xl(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(R0(s)&&R0(o)){if(!xl(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function R0(t){return t!==null&&typeof t=="object"}/**
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
 */function Wo(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function eo(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function xa(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function $S(t,e){const n=new vO(t,e);return n.subscribe.bind(n)}class vO{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");_O(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=ip),i.error===void 0&&(i.error=ip),i.complete===void 0&&(i.complete=ip);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function _O(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function ip(){}/**
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
 */function B(t){return t&&t._delegate?t._delegate:t}class Un{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Pi="[DEFAULT]";/**
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
 */class wO{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new uO;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(EO(e))try{this.getOrInitializeService({instanceIdentifier:Pi})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Pi){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Pi){return this.instances.has(e)}getOptions(e=Pi){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:IO(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Pi){return this.component?this.component.multipleInstances?e:Pi:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function IO(t){return t===Pi?void 0:t}function EO(t){return t.instantiationMode==="EAGER"}/**
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
 */class TO{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new wO(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */const $y=[];var X;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(X||(X={}));const zS={debug:X.DEBUG,verbose:X.VERBOSE,info:X.INFO,warn:X.WARN,error:X.ERROR,silent:X.SILENT},SO=X.INFO,AO={[X.DEBUG]:"log",[X.VERBOSE]:"log",[X.INFO]:"info",[X.WARN]:"warn",[X.ERROR]:"error"},PO=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=AO[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class kh{constructor(e){this.name=e,this._logLevel=SO,this._logHandler=PO,this._userLogHandler=null,$y.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in X))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?zS[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,X.DEBUG,...e),this._logHandler(this,X.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,X.VERBOSE,...e),this._logHandler(this,X.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,X.INFO,...e),this._logHandler(this,X.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,X.WARN,...e),this._logHandler(this,X.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,X.ERROR,...e),this._logHandler(this,X.ERROR,...e)}}function kO(t){$y.forEach(e=>{e.setLogLevel(t)})}function RO(t,e){for(const n of $y){let r=null;e&&e.level&&(r=zS[e.level]),t===null?n.userLogHandler=null:n.userLogHandler=(i,s,...o)=>{const a=o.map(l=>{if(l==null)return null;if(typeof l=="string")return l;if(typeof l=="number"||typeof l=="boolean")return l.toString();if(l instanceof Error)return l.message;try{return JSON.stringify(l)}catch{return null}}).filter(l=>l).join(" ");s>=(r??i.logLevel)&&t({level:X[s].toLowerCase(),message:a,args:o,type:i.name})}}}const bO=(t,e)=>e.some(n=>t instanceof n);let b0,C0;function CO(){return b0||(b0=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function xO(){return C0||(C0=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const BS=new WeakMap,Mm=new WeakMap,qS=new WeakMap,sp=new WeakMap,zy=new WeakMap;function NO(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Wr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&BS.set(n,t)}).catch(()=>{}),zy.set(e,t),e}function DO(t){if(Mm.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Mm.set(t,e)}let Fm={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Mm.get(t);if(e==="objectStoreNames")return t.objectStoreNames||qS.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Wr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function OO(t){Fm=t(Fm)}function VO(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(op(this),e,...n);return qS.set(r,e.sort?e.sort():[e]),Wr(r)}:xO().includes(t)?function(...e){return t.apply(op(this),e),Wr(BS.get(this))}:function(...e){return Wr(t.apply(op(this),e))}}function LO(t){return typeof t=="function"?VO(t):(t instanceof IDBTransaction&&DO(t),bO(t,CO())?new Proxy(t,Fm):t)}function Wr(t){if(t instanceof IDBRequest)return NO(t);if(sp.has(t))return sp.get(t);const e=LO(t);return e!==t&&(sp.set(t,e),zy.set(e,t)),e}const op=t=>zy.get(t);function MO(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Wr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Wr(o.result),l.oldVersion,l.newVersion,Wr(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const FO=["get","getKey","getAll","getAllKeys","count"],UO=["put","add","delete","clear"],ap=new Map;function x0(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ap.get(e))return ap.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=UO.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||FO.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return ap.set(e,s),s}OO(t=>({...t,get:(e,n,r)=>x0(e,n)||t.get(e,n,r),has:(e,n)=>!!x0(e,n)||t.has(e,n)}));/**
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
 */class jO{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if($O(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function $O(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Um="@firebase/app",N0="0.9.28";/**
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
 */const ns=new kh("@firebase/app"),zO="@firebase/app-compat",BO="@firebase/analytics-compat",qO="@firebase/analytics",WO="@firebase/app-check-compat",GO="@firebase/app-check",KO="@firebase/auth",HO="@firebase/auth-compat",QO="@firebase/database",YO="@firebase/database-compat",XO="@firebase/functions",JO="@firebase/functions-compat",ZO="@firebase/installations",eV="@firebase/installations-compat",tV="@firebase/messaging",nV="@firebase/messaging-compat",rV="@firebase/performance",iV="@firebase/performance-compat",sV="@firebase/remote-config",oV="@firebase/remote-config-compat",aV="@firebase/storage",lV="@firebase/storage-compat",uV="@firebase/firestore",cV="@firebase/firestore-compat",dV="firebase",hV="10.8.1";/**
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
 */const Jr="[DEFAULT]",fV={[Um]:"fire-core",[zO]:"fire-core-compat",[qO]:"fire-analytics",[BO]:"fire-analytics-compat",[GO]:"fire-app-check",[WO]:"fire-app-check-compat",[KO]:"fire-auth",[HO]:"fire-auth-compat",[QO]:"fire-rtdb",[YO]:"fire-rtdb-compat",[XO]:"fire-fn",[JO]:"fire-fn-compat",[ZO]:"fire-iid",[eV]:"fire-iid-compat",[tV]:"fire-fcm",[nV]:"fire-fcm-compat",[rV]:"fire-perf",[iV]:"fire-perf-compat",[sV]:"fire-rc",[oV]:"fire-rc-compat",[aV]:"fire-gcs",[lV]:"fire-gcs-compat",[uV]:"fire-fst",[cV]:"fire-fst-compat","fire-js":"fire-js",[dV]:"fire-js-all"};/**
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
 */const Zr=new Map,Nl=new Map;function Dd(t,e){try{t.container.addComponent(e)}catch(n){ns.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function WS(t,e){t.container.addOrOverwriteComponent(e)}function ei(t){const e=t.name;if(Nl.has(e))return ns.debug(`There were multiple attempts to register component ${e}.`),!1;Nl.set(e,t);for(const n of Zr.values())Dd(n,t);return!0}function GS(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function pV(t,e,n=Jr){GS(t,e).clearInstance(n)}function mV(){Nl.clear()}/**
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
 */const gV={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Xn=new _s("app","Firebase",gV);/**
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
 */let yV=class{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Un("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Xn.create("app-deleted",{appName:this._name})}};/**
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
 */const fi=hV;function By(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Jr,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Xn.create("bad-app-name",{appName:String(i)});if(n||(n=MS()),!n)throw Xn.create("no-options");const s=Zr.get(i);if(s){if(xl(n,s.options)&&xl(r,s.config))return s;throw Xn.create("duplicate-app",{appName:i})}const o=new TO(i);for(const l of Nl.values())o.addComponent(l);const a=new yV(n,r,o);return Zr.set(i,a),a}function vV(t=Jr){const e=Zr.get(t);if(!e&&t===Jr&&MS())return By();if(!e)throw Xn.create("no-app",{appName:t});return e}function _V(){return Array.from(Zr.values())}async function KS(t){const e=t.name;Zr.has(e)&&(Zr.delete(e),await Promise.all(t.container.getProviders().map(n=>n.delete())),t.isDeleted=!0)}function Mn(t,e,n){var r;let i=(r=fV[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ns.warn(a.join(" "));return}ei(new Un(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}function HS(t,e){if(t!==null&&typeof t!="function")throw Xn.create("invalid-log-argument");RO(t,e)}function QS(t){kO(t)}/**
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
 */const wV="firebase-heartbeat-database",IV=1,Dl="firebase-heartbeat-store";let lp=null;function YS(){return lp||(lp=MO(wV,IV,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Dl)}catch(n){console.warn(n)}}}}).catch(t=>{throw Xn.create("idb-open",{originalErrorMessage:t.message})})),lp}async function EV(t){try{const n=(await YS()).transaction(Dl),r=await n.objectStore(Dl).get(XS(t));return await n.done,r}catch(e){if(e instanceof At)ns.warn(e.message);else{const n=Xn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ns.warn(n.message)}}}async function D0(t,e){try{const r=(await YS()).transaction(Dl,"readwrite");await r.objectStore(Dl).put(e,XS(t)),await r.done}catch(n){if(n instanceof At)ns.warn(n.message);else{const r=Xn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ns.warn(r.message)}}}function XS(t){return`${t.name}!${t.options.appId}`}/**
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
 */const TV=1024,SV=30*24*60*60*1e3;class AV{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new kV(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=O0();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=SV}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=O0(),{heartbeatsToSend:r,unsentEntries:i}=PV(this._heartbeatsCache.heartbeats),s=xd(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function O0(){return new Date().toISOString().substring(0,10)}function PV(t,e=TV){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),V0(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),V0(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class kV{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Cl()?fO().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await EV(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return D0(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return D0(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function V0(t){return xd(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function RV(t){ei(new Un("platform-logger",e=>new jO(e),"PRIVATE")),ei(new Un("heartbeat",e=>new AV(e),"PRIVATE")),Mn(Um,N0,t),Mn(Um,N0,"esm2017"),Mn("fire-js","")}RV("");const bV=Object.freeze(Object.defineProperty({__proto__:null,FirebaseError:At,SDK_VERSION:fi,_DEFAULT_ENTRY_NAME:Jr,_addComponent:Dd,_addOrOverwriteComponent:WS,_apps:Zr,_clearComponents:mV,_components:Nl,_getProvider:GS,_registerComponent:ei,_removeServiceInstance:pV,deleteApp:KS,getApp:vV,getApps:_V,initializeApp:By,onLog:HS,registerVersion:Mn,setLogLevel:QS},Symbol.toStringTag,{value:"Module"}));/**
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
 */class CV{constructor(e,n){this._delegate=e,this.firebase=n,Dd(e,new Un("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),KS(this._delegate)))}_getService(e,n=Jr){var r;this._delegate.checkDestroyed();const i=this._delegate.container.getProvider(e);return!i.isInitialized()&&((r=i.getComponent())===null||r===void 0?void 0:r.instantiationMode)==="EXPLICIT"&&i.initialize(),i.getImmediate({identifier:n})}_removeServiceInstance(e,n=Jr){this._delegate.container.getProvider(e).clearInstance(n)}_addComponent(e){Dd(this._delegate,e)}_addOrOverwriteComponent(e){WS(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
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
 */const xV={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance."},L0=new _s("app-compat","Firebase",xV);/**
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
 */function NV(t){const e={},n={__esModule:!0,initializeApp:s,app:i,registerVersion:Mn,setLogLevel:QS,onLog:HS,apps:null,SDK_VERSION:fi,INTERNAL:{registerComponent:a,removeApp:r,useAsService:l,modularAPIs:bV}};n.default=n,Object.defineProperty(n,"apps",{get:o});function r(u){delete e[u]}function i(u){if(u=u||Jr,!k0(e,u))throw L0.create("no-app",{appName:u});return e[u]}i.App=t;function s(u,c={}){const d=By(u,c);if(k0(e,d.name))return e[d.name];const h=new t(d,n);return e[d.name]=h,h}function o(){return Object.keys(e).map(u=>e[u])}function a(u){const c=u.name,d=c.replace("-compat","");if(ei(u)&&u.type==="PUBLIC"){const h=(f=i())=>{if(typeof f[d]!="function")throw L0.create("invalid-app-argument",{appName:c});return f[d]()};u.serviceProps!==void 0&&Nd(h,u.serviceProps),n[d]=h,t.prototype[d]=function(...f){return this._getService.bind(this,c).apply(this,u.multipleInstances?f:[])}}return u.type==="PUBLIC"?n[d]:null}function l(u,c){return c==="serverAuth"?null:c}return n}/**
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
 */function JS(){const t=NV(CV);t.INTERNAL=Object.assign(Object.assign({},t.INTERNAL),{createFirebaseNamespace:JS,extendNamespace:e,createSubscribe:$S,ErrorFactory:_s,deepExtend:Nd});function e(n){Nd(t,n)}return t}const DV=JS();/**
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
 */const M0=new kh("@firebase/app-compat"),OV="@firebase/app-compat",VV="0.2.28";/**
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
 */function LV(t){Mn(OV,VV,t)}/**
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
 */if(hO()&&self.firebase!==void 0){M0.warn(`
    Warning: Firebase is already defined in the global scope. Please make sure
    Firebase library is only loaded once.
  `);const t=self.firebase.SDK_VERSION;t&&t.indexOf("LITE")>=0&&M0.warn(`
    Warning: You are trying to load Firebase while using Firebase Performance standalone script.
    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
    `)}const re=DV;LV();var MV="firebase",FV="10.8.1";/**
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
 */re.registerVersion(MV,FV,"app-compat");function qy(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}const ga={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},Rs={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
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
 */function UV(){return{"admin-restricted-operation":"This operation is restricted to administrators only.","argument-error":"","app-not-authorized":"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.","app-not-installed":"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.","captcha-check-failed":"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.","code-expired":"The SMS code has expired. Please re-send the verification code to try again.","cordova-not-ready":"Cordova framework is not ready.","cors-unsupported":"This browser is not supported.","credential-already-in-use":"This credential is already associated with a different user account.","custom-token-mismatch":"The custom token corresponds to a different audience.","requires-recent-login":"This operation is sensitive and requires recent authentication. Log in again before retrying this request.","dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.","dynamic-link-not-activated":"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.","email-change-needs-verification":"Multi-factor users must always have a verified email.","email-already-in-use":"The email address is already in use by another account.","emulator-config-failed":'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',"expired-action-code":"The action code has expired.","cancelled-popup-request":"This operation has been cancelled due to another conflicting popup being opened.","internal-error":"An internal AuthError has occurred.","invalid-app-credential":"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.","invalid-app-id":"The mobile app identifier is not registed for the current project.","invalid-user-token":"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.","invalid-auth-event":"An internal AuthError has occurred.","invalid-verification-code":"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.","invalid-continue-uri":"The continue URL provided in the request is invalid.","invalid-cordova-configuration":"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.","invalid-custom-token":"The custom token format is incorrect. Please check the documentation.","invalid-dynamic-link-domain":"The provided dynamic link domain is not configured or authorized for the current project.","invalid-email":"The email address is badly formatted.","invalid-emulator-scheme":"Emulator URL must start with a valid scheme (http:// or https://).","invalid-api-key":"Your API key is invalid, please check you have copied it correctly.","invalid-cert-hash":"The SHA-1 certificate hash provided is invalid.","invalid-credential":"The supplied auth credential is incorrect, malformed or has expired.","invalid-message-payload":"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-multi-factor-session":"The request does not contain a valid proof of first factor successful sign-in.","invalid-oauth-provider":"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.","invalid-oauth-client-id":"The OAuth client ID provided is either invalid or does not match the specified API key.","unauthorized-domain":"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.","invalid-action-code":"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.","wrong-password":"The password is invalid or the user does not have a password.","invalid-persistence-type":"The specified persistence type is invalid. It can only be local, session or none.","invalid-phone-number":"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].","invalid-provider-id":"The specified provider ID is invalid.","invalid-recipient-email":"The email corresponding to this action failed to send as the provided recipient email address is invalid.","invalid-sender":"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-verification-id":"The verification ID used to create the phone auth credential is invalid.","invalid-tenant-id":"The Auth instance's tenant ID is invalid.","login-blocked":"Login blocked by user-provided method: {$originalMessage}","missing-android-pkg-name":"An Android Package Name must be provided if the Android App is required to be installed.","auth-domain-config-required":"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.","missing-app-credential":"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.","missing-verification-code":"The phone auth credential was created with an empty SMS verification code.","missing-continue-uri":"A continue URL must be provided in the request.","missing-iframe-start":"An internal AuthError has occurred.","missing-ios-bundle-id":"An iOS Bundle ID must be provided if an App Store ID is provided.","missing-or-invalid-nonce":"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.","missing-password":"A non-empty password must be provided","missing-multi-factor-info":"No second factor identifier is provided.","missing-multi-factor-session":"The request is missing proof of first factor successful sign-in.","missing-phone-number":"To send verification codes, provide a phone number for the recipient.","missing-verification-id":"The phone auth credential was created with an empty verification ID.","app-deleted":"This instance of FirebaseApp has been deleted.","multi-factor-info-not-found":"The user does not have a second factor matching the identifier provided.","multi-factor-auth-required":"Proof of ownership of a second factor is required to complete sign-in.","account-exists-with-different-credential":"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.","network-request-failed":"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.","no-auth-event":"An internal AuthError has occurred.","no-such-provider":"User was not linked to an account with the given provider.","null-user":"A null user object was provided as the argument for an operation which requires a non-null user object.","operation-not-allowed":"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.","operation-not-supported-in-this-environment":'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',"popup-blocked":"Unable to establish a connection with the popup. It may have been blocked by the browser.","popup-closed-by-user":"The popup has been closed by the user before finalizing the operation.","provider-already-linked":"User can only be linked to one identity for the given provider.","quota-exceeded":"The project's quota for this operation has been exceeded.","redirect-cancelled-by-user":"The redirect operation has been cancelled by the user before finalizing.","redirect-operation-pending":"A redirect sign-in operation is already pending.","rejected-credential":"The request contains malformed or mismatching credentials.","second-factor-already-in-use":"The second factor is already enrolled on this account.","maximum-second-factor-count-exceeded":"The maximum allowed number of second factors on a user has been exceeded.","tenant-id-mismatch":"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.","user-token-expired":"The user's credential is no longer valid. The user must sign in again.","too-many-requests":"We have blocked all requests from this device due to unusual activity. Try again later.","unauthorized-continue-uri":"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.","unsupported-first-factor":"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.","unsupported-persistence-type":"The current environment does not support the specified persistence type.","unsupported-tenant-operation":"This operation is not supported in a multi-tenant context.","unverified-email":"The operation requires a verified email.","user-cancelled":"The user did not grant your application the permissions it requested.","user-not-found":"There is no user record corresponding to this identifier. The user may have been deleted.","user-disabled":"The user account has been disabled by an administrator.","user-mismatch":"The supplied credentials do not correspond to the previously signed in user.","user-signed-out":"","weak-password":"The password must be 6 characters long or more.","web-storage-unsupported":"This browser is not supported or 3rd party cookies and data may be disabled.","already-initialized":"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance.","missing-recaptcha-token":"The reCAPTCHA token is missing when sending request to the backend.","invalid-recaptcha-token":"The reCAPTCHA token is invalid when sending request to the backend.","invalid-recaptcha-action":"The reCAPTCHA action is invalid when sending request to the backend.","recaptcha-not-enabled":"reCAPTCHA Enterprise integration is not enabled for this project.","missing-client-type":"The reCAPTCHA client type is missing when sending request to the backend.","missing-recaptcha-version":"The reCAPTCHA version is missing when sending request to the backend.","invalid-req-type":"Invalid request parameters.","invalid-recaptcha-version":"The reCAPTCHA version is invalid when sending request to the backend.","unsupported-password-policy-schema-version":"The password policy received from the backend uses a schema version that is not supported by this version of the Firebase SDK.","password-does-not-meet-requirements":"The password does not meet the requirements."}}function ZS(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const jV=UV,$V=ZS,eA=new _s("auth","Firebase",ZS());/**
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
 */const Od=new kh("@firebase/auth");function zV(t,...e){Od.logLevel<=X.WARN&&Od.warn(`Auth (${fi}): ${t}`,...e)}function Bc(t,...e){Od.logLevel<=X.ERROR&&Od.error(`Auth (${fi}): ${t}`,...e)}/**
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
 */function ht(t,...e){throw Wy(t,...e)}function ut(t,...e){return Wy(t,...e)}function tA(t,e,n){const r=Object.assign(Object.assign({},$V()),{[e]:n});return new _s("auth","Firebase",r).create(e,{appName:t.name})}function Go(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&ht(t,"argument-error"),tA(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Wy(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return eA.create(t,...e)}function C(t,e,...n){if(!t)throw Wy(e,...n)}function Cn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Bc(e),new Error(e)}function vn(t,e){t||Cn(e)}/**
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
 */function Ol(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Gy(){return F0()==="http:"||F0()==="https:"}function F0(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function BV(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Gy()||FS()||"connection"in navigator)?navigator.onLine:!0}function qV(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class yu{constructor(e,n){this.shortDelay=e,this.longDelay=n,vn(n>e,"Short delay should be less than long delay!"),this.isMobile=dO()||jy()}get(){return BV()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Ky(t,e){vn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */const WV={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const GV=new yu(3e4,6e4);function De(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Oe(t,e,n,r,i={}){return rA(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Wo(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),nA.fetch()(iA(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function rA(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},WV),e);try{const i=new HV(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Na(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Na(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Na(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Na(t,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw tA(t,c,u);ht(t,c)}}catch(i){if(i instanceof At)throw i;ht(t,"network-request-failed",{message:String(i)})}}async function dr(t,e,n,r,i={}){const s=await Oe(t,e,n,r,i);return"mfaPendingCredential"in s&&ht(t,"multi-factor-auth-required",{_serverResponse:s}),s}function iA(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Ky(t.config,i):`${t.config.apiScheme}://${i}`}function KV(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class HV{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(ut(this.auth,"network-request-failed")),GV.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Na(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=ut(t,e,r);return i.customData._tokenResponse=n,i}/**
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
 */function U0(t){return t!==void 0&&t.getResponse!==void 0}function j0(t){return t!==void 0&&t.enterprise!==void 0}class QV{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return KV(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}/**
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
 */async function YV(t){return(await Oe(t,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function XV(t,e){return Oe(t,"GET","/v2/recaptchaConfig",De(t,e))}/**
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
 */async function JV(t,e){return Oe(t,"POST","/v1/accounts:delete",e)}async function ZV(t,e){return Oe(t,"POST","/v1/accounts:update",e)}async function eL(t,e){return Oe(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Ya(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function tL(t,e=!1){const n=B(t),r=await n.getIdToken(e),i=Rh(r);C(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Ya(up(i.auth_time)),issuedAtTime:Ya(up(i.iat)),expirationTime:Ya(up(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function up(t){return Number(t)*1e3}function Rh(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Bc("JWT malformed, contained fewer than 3 sections"),null;try{const i=LS(n);return i?JSON.parse(i):(Bc("Failed to decode base64 JWT payload"),null)}catch(i){return Bc("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function nL(t){const e=Rh(t);return C(e,"internal-error"),C(typeof e.exp<"u","internal-error"),C(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function or(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof At&&rL(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function rL({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class iL{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */async function Vl(t){var e;const n=t.auth,r=await t.getIdToken(),i=await or(t,eL(n,{idToken:r}));C(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?aL(s.providerUserInfo):[],a=oL(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new sA(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,d)}async function sL(t){const e=B(t);await Vl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function oL(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function aL(t){return t.map(e=>{var{providerId:n}=e,r=qy(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function lL(t,e){const n=await rA(t,{},async()=>{const r=Wo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=iA(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",nA.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function uL(t,e){return Oe(t,"POST","/v2/accounts:revokeToken",De(t,e))}/**
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
 */class Ll{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){C(e.idToken,"internal-error"),C(typeof e.idToken<"u","internal-error"),C(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):nL(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return C(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await lL(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Ll;return r&&(C(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(C(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(C(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ll,this.toJSON())}_performRefresh(){return Cn("not implemented")}}/**
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
 */function vr(t,e){C(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Wi{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=qy(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new iL(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new sA(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await or(this,this.stsTokenManager.getToken(this.auth,e));return C(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return tL(this,e)}reload(){return sL(this)}_assign(e){this!==e&&(C(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Wi(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){C(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Vl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await or(this,JV(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,c;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,h=(i=n.email)!==null&&i!==void 0?i:void 0,f=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,_=(o=n.photoURL)!==null&&o!==void 0?o:void 0,v=(a=n.tenantId)!==null&&a!==void 0?a:void 0,w=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,m=(u=n.createdAt)!==null&&u!==void 0?u:void 0,p=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:g,emailVerified:E,isAnonymous:S,providerData:R,stsTokenManager:x}=n;C(g&&x,e,"internal-error");const M=Ll.fromJSON(this.name,x);C(typeof g=="string",e,"internal-error"),vr(d,e.name),vr(h,e.name),C(typeof E=="boolean",e,"internal-error"),C(typeof S=="boolean",e,"internal-error"),vr(f,e.name),vr(_,e.name),vr(v,e.name),vr(w,e.name),vr(m,e.name),vr(p,e.name);const J=new Wi({uid:g,auth:e,email:h,emailVerified:E,displayName:d,isAnonymous:S,photoURL:_,phoneNumber:f,tenantId:v,stsTokenManager:M,createdAt:m,lastLoginAt:p});return R&&Array.isArray(R)&&(J.providerData=R.map(G=>Object.assign({},G))),w&&(J._redirectEventId=w),J}static async _fromIdTokenResponse(e,n,r=!1){const i=new Ll;i.updateFromServerResponse(n);const s=new Wi({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Vl(s),s}}/**
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
 */const $0=new Map;function qt(t){vn(t instanceof Function,"Expected a class definition");let e=$0.get(t);return e?(vn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,$0.set(t,e),e)}/**
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
 */function Gi(t,e,n){return`firebase:${t}:${e}:${n}`}class uo{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Gi(this.userKey,i.apiKey,s),this.fullPersistenceKey=Gi("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Wi._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new uo(qt(Ao),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||qt(Ao);const o=Gi(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const d=Wi._fromJSON(e,c);u!==s&&(a=d),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new uo(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new uo(s,e,r))}}/**
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
 */function z0(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(uA(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(aA(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(cA(e))return"Blackberry";if(dA(e))return"Webos";if(Hy(e))return"Safari";if((e.includes("chrome/")||lA(e))&&!e.includes("edge/"))return"Chrome";if(vu(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function aA(t=Ee()){return/firefox\//i.test(t)}function Hy(t=Ee()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function lA(t=Ee()){return/crios\//i.test(t)}function uA(t=Ee()){return/iemobile/i.test(t)}function vu(t=Ee()){return/android/i.test(t)}function cA(t=Ee()){return/blackberry/i.test(t)}function dA(t=Ee()){return/webos/i.test(t)}function Ko(t=Ee()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function cL(t=Ee()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(t)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(t)}function dL(t=Ee()){var e;return Ko(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function hL(){return US()&&document.documentMode===10}function hA(t=Ee()){return Ko(t)||vu(t)||dA(t)||cA(t)||/windows phone/i.test(t)||uA(t)}function fL(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function fA(t,e=[]){let n;switch(t){case"Browser":n=z0(Ee());break;case"Worker":n=`${z0(Ee())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${fi}/${r}`}/**
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
 */class pL{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function mL(t,e={}){return Oe(t,"GET","/v2/passwordPolicy",De(t,e))}/**
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
 */const gL=6;class yL{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:gL,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class vL{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new B0(this),this.idTokenSubscription=new B0(this),this.beforeStateQueue=new pL(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=eA,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=qt(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await uo.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return C(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Vl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=qV()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?B(e):null;return n&&C(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&C(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(qt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await mL(this),n=new yL(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new _s("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await uL(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&qt(e)||this._popupRedirectResolver;C(n,this,"argument-error"),this.redirectPersistenceManager=await uo.create(this,[qt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(C(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return C(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=fA(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&zV(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Ce(t){return B(t)}class B0{constructor(e){this.auth=e,this.observer=null,this.addObserver=$S(n=>this.observer=n)}get next(){return C(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let _u={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function _L(t){_u=t}function Qy(t){return _u.loadJS(t)}function wL(){return _u.recaptchaV2Script}function IL(){return _u.recaptchaEnterpriseScript}function EL(){return _u.gapiScript}function pA(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const TL="recaptcha-enterprise",SL="NO_RECAPTCHA";class AL{constructor(e){this.type=TL,this.auth=Ce(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{XV(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new QV(l);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;j0(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(SL)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&j0(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=IL();l.length!==0&&(l+=a),Qy(l).then(()=>{i(a,s,o)}).catch(u=>{o(u)})}}).catch(a=>{o(a)})})}}async function q0(t,e,n,r=!1){const i=new AL(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Ml(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await q0(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await q0(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}function PL(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(qt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function kL(t,e,n){const r=Ce(t);C(r._canInitEmulator,r,"emulator-config-failed"),C(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=mA(e),{host:o,port:a}=RL(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||bL()}function mA(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function RL(t){const e=mA(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:W0(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:W0(o)}}}function W0(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function bL(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */async function gA(t,e){return Oe(t,"POST","/v1/accounts:resetPassword",De(t,e))}async function CL(t,e){return Oe(t,"POST","/v1/accounts:update",e)}async function xL(t,e){return Oe(t,"POST","/v1/accounts:signUp",e)}async function NL(t,e){return Oe(t,"POST","/v1/accounts:update",De(t,e))}/**
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
 */async function DL(t,e){return dr(t,"POST","/v1/accounts:signInWithPassword",De(t,e))}async function bh(t,e){return Oe(t,"POST","/v1/accounts:sendOobCode",De(t,e))}async function OL(t,e){return bh(t,e)}async function VL(t,e){return bh(t,e)}async function LL(t,e){return bh(t,e)}async function ML(t,e){return bh(t,e)}/**
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
 */async function FL(t,e){return dr(t,"POST","/v1/accounts:signInWithEmailLink",De(t,e))}async function UL(t,e){return dr(t,"POST","/v1/accounts:signInWithEmailLink",De(t,e))}/**
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
 */class Fl extends Ho{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Fl(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Fl(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ml(e,n,"signInWithPassword",DL);case"emailLink":return FL(e,{email:this._email,oobCode:this._password});default:ht(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ml(e,r,"signUpPassword",xL);case"emailLink":return UL(e,{idToken:n,email:this._email,oobCode:this._password});default:ht(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Jn(t,e){return dr(t,"POST","/v1/accounts:signInWithIdp",De(t,e))}/**
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
 */const jL="http://localhost";class jn extends Ho{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new jn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):ht("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=qy(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new jn(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Jn(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Jn(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Jn(e,n)}buildRequest(){const e={requestUri:jL,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Wo(n)}return e}}/**
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
 */async function $L(t,e){return Oe(t,"POST","/v1/accounts:sendVerificationCode",De(t,e))}async function zL(t,e){return dr(t,"POST","/v1/accounts:signInWithPhoneNumber",De(t,e))}async function BL(t,e){const n=await dr(t,"POST","/v1/accounts:signInWithPhoneNumber",De(t,e));if(n.temporaryProof)throw Na(t,"account-exists-with-different-credential",n);return n}const qL={USER_NOT_FOUND:"user-not-found"};async function WL(t,e){const n=Object.assign(Object.assign({},e),{operation:"REAUTH"});return dr(t,"POST","/v1/accounts:signInWithPhoneNumber",De(t,n),qL)}/**
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
 */class Ki extends Ho{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,n){return new Ki({verificationId:e,verificationCode:n})}static _fromTokenResponse(e,n){return new Ki({phoneNumber:e,temporaryProof:n})}_getIdTokenResponse(e){return zL(e,this._makeVerificationRequest())}_linkToIdToken(e,n){return BL(e,Object.assign({idToken:n},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return WL(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:n,verificationId:r,verificationCode:i}=this.params;return e&&n?{temporaryProof:e,phoneNumber:n}:{sessionInfo:r,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s}=e;return!r&&!n&&!i&&!s?null:new Ki({verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s})}}/**
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
 */function GL(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function KL(t){const e=eo(xa(t)).link,n=e?eo(xa(e)).deep_link_id:null,r=eo(xa(t)).deep_link_id;return(r?eo(xa(r)).link:null)||r||n||e||t}class Ch{constructor(e){var n,r,i,s,o,a;const l=eo(xa(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(r=l.oobCode)!==null&&r!==void 0?r:null,d=GL((i=l.mode)!==null&&i!==void 0?i:null);C(u&&c&&d,"argument-error"),this.apiKey=u,this.operation=d,this.code=c,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=KL(e);try{return new Ch(n)}catch{return null}}}/**
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
 */class pi{constructor(){this.providerId=pi.PROVIDER_ID}static credential(e,n){return Fl._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Ch.parseLink(n);return C(r,"argument-error"),Fl._fromEmailAndCode(e,r.code,r.tenantId)}}pi.PROVIDER_ID="password";pi.EMAIL_PASSWORD_SIGN_IN_METHOD="password";pi.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class hr{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Qo extends hr{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class co extends Qo{static credentialFromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;return C("providerId"in n&&"signInMethod"in n,"argument-error"),jn._fromParams(n)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return C(e.idToken||e.accessToken,"argument-error"),jn._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return co.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return co.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r,oauthTokenSecret:i,pendingToken:s,nonce:o,providerId:a}=e;if(!r&&!i&&!n&&!s||!a)return null;try{return new co(a)._credential({idToken:n,accessToken:r,nonce:o,pendingToken:s})}catch{return null}}}/**
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
 */class Sn extends Qo{constructor(){super("facebook.com")}static credential(e){return jn._fromParams({providerId:Sn.PROVIDER_ID,signInMethod:Sn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Sn.credentialFromTaggedObject(e)}static credentialFromError(e){return Sn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Sn.credential(e.oauthAccessToken)}catch{return null}}}Sn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Sn.PROVIDER_ID="facebook.com";/**
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
 */class An extends Qo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return jn._fromParams({providerId:An.PROVIDER_ID,signInMethod:An.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return An.credentialFromTaggedObject(e)}static credentialFromError(e){return An.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return An.credential(n,r)}catch{return null}}}An.GOOGLE_SIGN_IN_METHOD="google.com";An.PROVIDER_ID="google.com";/**
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
 */class Pn extends Qo{constructor(){super("github.com")}static credential(e){return jn._fromParams({providerId:Pn.PROVIDER_ID,signInMethod:Pn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Pn.credentialFromTaggedObject(e)}static credentialFromError(e){return Pn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Pn.credential(e.oauthAccessToken)}catch{return null}}}Pn.GITHUB_SIGN_IN_METHOD="github.com";Pn.PROVIDER_ID="github.com";/**
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
 */const HL="http://localhost";class Po extends Ho{constructor(e,n){super(e,e),this.pendingToken=n}_getIdTokenResponse(e){const n=this.buildRequest();return Jn(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Jn(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Jn(e,n)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,pendingToken:s}=n;return!r||!i||!s||r!==i?null:new Po(r,s)}static _create(e,n){return new Po(e,n)}buildRequest(){return{requestUri:HL,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
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
 */const QL="saml.";class Vd extends hr{constructor(e){C(e.startsWith(QL),"argument-error"),super(e)}static credentialFromResult(e){return Vd.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return Vd.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const n=Po.fromJSON(e);return C(n,"argument-error"),n}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:n,providerId:r}=e;if(!n||!r)return null;try{return Po._create(r,n)}catch{return null}}}/**
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
 */class kn extends Qo{constructor(){super("twitter.com")}static credential(e,n){return jn._fromParams({providerId:kn.PROVIDER_ID,signInMethod:kn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return kn.credentialFromTaggedObject(e)}static credentialFromError(e){return kn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return kn.credential(n,r)}catch{return null}}}kn.TWITTER_SIGN_IN_METHOD="twitter.com";kn.PROVIDER_ID="twitter.com";/**
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
 */async function yA(t,e){return dr(t,"POST","/v1/accounts:signUp",De(t,e))}/**
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
 */class ln{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Wi._fromIdTokenResponse(e,r,i),o=G0(r);return new ln({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=G0(r);return new ln({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function G0(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */async function YL(t){var e;const n=Ce(t);if(await n._initializationPromise,!((e=n.currentUser)===null||e===void 0)&&e.isAnonymous)return new ln({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await yA(n,{returnSecureToken:!0}),i=await ln._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(i.user),i}/**
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
 */class Ld extends At{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Ld.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Ld(e,n,r,i)}}function vA(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Ld._fromErrorAndOperation(t,s,e,r):s})}/**
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
 */async function XL(t,e){const n=B(t);await xh(!0,n,e);const{providerUserInfo:r}=await ZV(n.auth,{idToken:await n.getIdToken(),deleteProvider:[e]}),i=_A(r||[]);return n.providerData=n.providerData.filter(s=>i.has(s.providerId)),i.has("phone")||(n.phoneNumber=null),await n.auth._persistUserIfCurrent(n),n}async function Yy(t,e,n=!1){const r=await or(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ln._forOperation(t,"link",r)}async function xh(t,e,n){await Vl(e);const r=_A(e.providerData),i=t===!1?"provider-already-linked":"no-such-provider";C(r.has(n)===t,e.auth,i)}/**
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
 */async function wA(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await or(t,vA(r,i,e,t),n);C(s.idToken,r,"internal-error");const o=Rh(s.idToken);C(o,r,"internal-error");const{sub:a}=o;return C(t.uid===a,r,"user-mismatch"),ln._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&ht(r,"user-mismatch"),s}}/**
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
 */async function IA(t,e,n=!1){const r="signIn",i=await vA(t,r,e),s=await ln._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function Nh(t,e){return IA(Ce(t),e)}async function EA(t,e){const n=B(t);return await xh(!1,n,e.providerId),Yy(n,e)}async function TA(t,e){return wA(B(t),e)}/**
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
 */async function JL(t,e){return dr(t,"POST","/v1/accounts:signInWithCustomToken",De(t,e))}/**
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
 */async function ZL(t,e){const n=Ce(t),r=await JL(n,{token:e,returnSecureToken:!0}),i=await ln._fromIdTokenResponse(n,"signIn",r);return await n._updateCurrentUser(i.user),i}/**
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
 */class wu{constructor(e,n){this.factorId=e,this.uid=n.mfaEnrollmentId,this.enrollmentTime=new Date(n.enrolledAt).toUTCString(),this.displayName=n.displayName}static _fromServerResponse(e,n){return"phoneInfo"in n?Xy._fromServerResponse(e,n):"totpInfo"in n?Jy._fromServerResponse(e,n):ht(e,"internal-error")}}class Xy extends wu{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,n){return new Xy(n)}}class Jy extends wu{constructor(e){super("totp",e)}static _fromServerResponse(e,n){return new Jy(n)}}/**
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
 */function Dh(t,e,n){var r;C(((r=n.url)===null||r===void 0?void 0:r.length)>0,t,"invalid-continue-uri"),C(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(C(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(C(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
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
 */async function Zy(t){const e=Ce(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function eM(t,e,n){const r=Ce(t),i={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};n&&Dh(r,i,n),await Ml(r,i,"getOobCode",VL)}async function tM(t,e,n){await gA(B(t),{oobCode:e,newPassword:n}).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Zy(t),r})}async function nM(t,e){await NL(B(t),{oobCode:e})}async function SA(t,e){const n=B(t),r=await gA(n,{oobCode:e}),i=r.requestType;switch(C(i,n,"internal-error"),i){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":C(r.newEmail,n,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":C(r.mfaInfo,n,"internal-error");default:C(r.email,n,"internal-error")}let s=null;return r.mfaInfo&&(s=wu._fromServerResponse(Ce(n),r.mfaInfo)),{data:{email:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.newEmail:r.email)||null,previousEmail:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.email:r.newEmail)||null,multiFactorInfo:s},operation:i}}async function rM(t,e){const{data:n}=await SA(B(t),e);return n.email}async function iM(t,e,n){const r=Ce(t),o=await Ml(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",yA).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&Zy(t),l}),a=await ln._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function sM(t,e,n){return Nh(B(t),pi.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Zy(t),r})}/**
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
 */async function oM(t,e,n){const r=Ce(t),i={requestType:"EMAIL_SIGNIN",email:e,clientType:"CLIENT_TYPE_WEB"};function s(o,a){C(a.handleCodeInApp,r,"argument-error"),a&&Dh(r,o,a)}s(i,n),await Ml(r,i,"getOobCode",LL)}function aM(t,e){const n=Ch.parseLink(e);return(n==null?void 0:n.operation)==="EMAIL_SIGNIN"}async function lM(t,e,n){const r=B(t),i=pi.credentialWithLink(e,n||Ol());return C(i._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),Nh(r,i)}/**
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
 */async function uM(t,e){return Oe(t,"POST","/v1/accounts:createAuthUri",De(t,e))}/**
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
 */async function cM(t,e){const n=Gy()?Ol():"http://localhost",r={identifier:e,continueUri:n},{signinMethods:i}=await uM(B(t),r);return i||[]}async function dM(t,e){const n=B(t),i={requestType:"VERIFY_EMAIL",idToken:await t.getIdToken()};e&&Dh(n.auth,i,e);const{email:s}=await OL(n.auth,i);s!==t.email&&await t.reload()}async function hM(t,e,n){const r=B(t),s={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await t.getIdToken(),newEmail:e};n&&Dh(r.auth,s,n);const{email:o}=await ML(r.auth,s);o!==t.email&&await t.reload()}/**
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
 */async function fM(t,e){return Oe(t,"POST","/v1/accounts:update",e)}/**
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
 */async function pM(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=B(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await or(r,fM(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function mM(t,e){return AA(B(t),e,null)}function gM(t,e){return AA(B(t),null,e)}async function AA(t,e,n){const{auth:r}=t,s={idToken:await t.getIdToken(),returnSecureToken:!0};e&&(s.email=e),n&&(s.password=n);const o=await or(t,CL(r,s));await t._updateTokensIfNecessary(o,!0)}/**
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
 */function yM(t){var e,n;if(!t)return null;const{providerId:r}=t,i=t.rawUserInfo?JSON.parse(t.rawUserInfo):{},s=t.isNewUser||t.kind==="identitytoolkit#SignupNewUserResponse";if(!r&&(t!=null&&t.idToken)){const o=(n=(e=Rh(t.idToken))===null||e===void 0?void 0:e.firebase)===null||n===void 0?void 0:n.sign_in_provider;if(o){const a=o!=="anonymous"&&o!=="custom"?o:null;return new ho(s,a)}}if(!r)return null;switch(r){case"facebook.com":return new vM(s,i);case"github.com":return new _M(s,i);case"google.com":return new wM(s,i);case"twitter.com":return new IM(s,i,t.screenName||null);case"custom":case"anonymous":return new ho(s,null);default:return new ho(s,r,i)}}class ho{constructor(e,n,r={}){this.isNewUser=e,this.providerId=n,this.profile=r}}class PA extends ho{constructor(e,n,r,i){super(e,n,r),this.username=i}}class vM extends ho{constructor(e,n){super(e,"facebook.com",n)}}class _M extends PA{constructor(e,n){super(e,"github.com",n,typeof(n==null?void 0:n.login)=="string"?n==null?void 0:n.login:null)}}class wM extends ho{constructor(e,n){super(e,"google.com",n)}}class IM extends PA{constructor(e,n,r){super(e,"twitter.com",n,r)}}function EM(t){const{user:e,_tokenResponse:n}=t;return e.isAnonymous&&!n?{providerId:null,isNewUser:!1,profile:null}:yM(n)}/**
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
 */class Fi{constructor(e,n,r){this.type=e,this.credential=n,this.user=r}static _fromIdtoken(e,n){return new Fi("enroll",e,n)}static _fromMfaPendingCredential(e){return new Fi("signin",e)}toJSON(){return{multiFactorSession:{[this.type==="enroll"?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var n,r;if(e!=null&&e.multiFactorSession){if(!((n=e.multiFactorSession)===null||n===void 0)&&n.pendingCredential)return Fi._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(!((r=e.multiFactorSession)===null||r===void 0)&&r.idToken)return Fi._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
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
 */class ev{constructor(e,n,r){this.session=e,this.hints=n,this.signInResolver=r}static _fromError(e,n){const r=Ce(e),i=n.customData._serverResponse,s=(i.mfaInfo||[]).map(a=>wu._fromServerResponse(r,a));C(i.mfaPendingCredential,r,"internal-error");const o=Fi._fromMfaPendingCredential(i.mfaPendingCredential);return new ev(o,s,async a=>{const l=await a._process(r,o);delete i.mfaInfo,delete i.mfaPendingCredential;const u=Object.assign(Object.assign({},i),{idToken:l.idToken,refreshToken:l.refreshToken});switch(n.operationType){case"signIn":const c=await ln._fromIdTokenResponse(r,n.operationType,u);return await r._updateCurrentUser(c.user),c;case"reauthenticate":return C(n.user,r,"internal-error"),ln._forOperation(n.user,n.operationType,u);default:ht(r,"internal-error")}})}async resolveSignIn(e){const n=e;return this.signInResolver(n)}}function TM(t,e){var n;const r=B(t),i=e;return C(e.customData.operationType,r,"argument-error"),C((n=i.customData._serverResponse)===null||n===void 0?void 0:n.mfaPendingCredential,r,"argument-error"),ev._fromError(r,i)}/**
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
 */function SM(t,e){return Oe(t,"POST","/v2/accounts/mfaEnrollment:start",De(t,e))}function AM(t,e){return Oe(t,"POST","/v2/accounts/mfaEnrollment:finalize",De(t,e))}function PM(t,e){return Oe(t,"POST","/v2/accounts/mfaEnrollment:withdraw",De(t,e))}class tv{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(n=>{n.mfaInfo&&(this.enrolledFactors=n.mfaInfo.map(r=>wu._fromServerResponse(e.auth,r)))})}static _fromUser(e){return new tv(e)}async getSession(){return Fi._fromIdtoken(await this.user.getIdToken(),this.user)}async enroll(e,n){const r=e,i=await this.getSession(),s=await or(this.user,r._process(this.user.auth,i,n));return await this.user._updateTokensIfNecessary(s),this.user.reload()}async unenroll(e){const n=typeof e=="string"?e:e.uid,r=await this.user.getIdToken();try{const i=await or(this.user,PM(this.user.auth,{idToken:r,mfaEnrollmentId:n}));this.enrolledFactors=this.enrolledFactors.filter(({uid:s})=>s!==n),await this.user._updateTokensIfNecessary(i),await this.user.reload()}catch(i){throw i}}}const cp=new WeakMap;function kM(t){const e=B(t);return cp.has(e)||cp.set(e,tv._fromUser(e)),cp.get(e)}const Md="__sak";/**
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
 */class kA{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Md,"1"),this.storage.removeItem(Md),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function RM(){const t=Ee();return Hy(t)||Ko(t)}const bM=1e3,CM=10;class RA extends kA{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=RM()&&fL(),this.fallbackToPolling=hA(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);hL()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,CM):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},bM)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}RA.type="LOCAL";const nv=RA;/**
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
 */class bA extends kA{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}bA.type="SESSION";const rs=bA;/**
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
 */function xM(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Oh{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Oh(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await xM(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Oh.receivers=[];/**
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
 */function Iu(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class NM{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=Iu("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(d){const h=d;if(h.data.eventId===u)switch(h.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(h.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function je(){return window}function DM(t){je().location.href=t}/**
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
 */function rv(){return typeof je().WorkerGlobalScope<"u"&&typeof je().importScripts=="function"}async function OM(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function VM(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function LM(){return rv()?self:null}/**
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
 */const CA="firebaseLocalStorageDb",MM=1,Fd="firebaseLocalStorage",xA="fbase_key";class Eu{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Vh(t,e){return t.transaction([Fd],e?"readwrite":"readonly").objectStore(Fd)}function FM(){const t=indexedDB.deleteDatabase(CA);return new Eu(t).toPromise()}function jm(){const t=indexedDB.open(CA,MM);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Fd,{keyPath:xA})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Fd)?e(r):(r.close(),await FM(),e(await jm()))})})}async function K0(t,e,n){const r=Vh(t,!0).put({[xA]:e,value:n});return new Eu(r).toPromise()}async function UM(t,e){const n=Vh(t,!1).get(e),r=await new Eu(n).toPromise();return r===void 0?null:r.value}function H0(t,e){const n=Vh(t,!0).delete(e);return new Eu(n).toPromise()}const jM=800,$M=3;class NA{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await jm(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>$M)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return rv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Oh._getInstance(LM()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await OM(),!this.activeServiceWorker)return;this.sender=new NM(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||VM()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await jm();return await K0(e,Md,"1"),await H0(e,Md),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>K0(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>UM(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>H0(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Vh(i,!1).getAll();return new Eu(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),jM)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}NA.type="LOCAL";const Ul=NA;/**
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
 */function zM(t,e){return Oe(t,"POST","/v2/accounts/mfaSignIn:start",De(t,e))}function BM(t,e){return Oe(t,"POST","/v2/accounts/mfaSignIn:finalize",De(t,e))}/**
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
 */const qM=500,WM=6e4,vc=1e12;class GM{constructor(e){this.auth=e,this.counter=vc,this._widgets=new Map}render(e,n){const r=this.counter;return this._widgets.set(r,new KM(e,this.auth.name,n||{})),this.counter++,r}reset(e){var n;const r=e||vc;(n=this._widgets.get(r))===null||n===void 0||n.delete(),this._widgets.delete(r)}getResponse(e){var n;const r=e||vc;return((n=this._widgets.get(r))===null||n===void 0?void 0:n.getResponse())||""}async execute(e){var n;const r=e||vc;return(n=this._widgets.get(r))===null||n===void 0||n.execute(),""}}class KM{constructor(e,n,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const i=typeof e=="string"?document.getElementById(e):e;C(i,"argument-error",{appName:n}),this.container=i,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=HM(50);const{callback:e,"expired-callback":n}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,n)try{n()}catch{}this.isVisible&&this.execute()},WM)},qM))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function HM(t){const e=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<t;r++)e.push(n.charAt(Math.floor(Math.random()*n.length)));return e.join("")}/**
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
 */const dp=pA("rcb"),QM=new yu(3e4,6e4);class YM{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(!((e=je().grecaptcha)===null||e===void 0)&&e.render)}load(e,n=""){return C(XM(n),e,"argument-error"),this.shouldResolveImmediately(n)&&U0(je().grecaptcha)?Promise.resolve(je().grecaptcha):new Promise((r,i)=>{const s=je().setTimeout(()=>{i(ut(e,"network-request-failed"))},QM.get());je()[dp]=()=>{je().clearTimeout(s),delete je()[dp];const a=je().grecaptcha;if(!a||!U0(a)){i(ut(e,"internal-error"));return}const l=a.render;a.render=(u,c)=>{const d=l(u,c);return this.counter++,d},this.hostLanguage=n,r(a)};const o=`${wL()}?${Wo({onload:dp,render:"explicit",hl:n})}`;Qy(o).catch(()=>{clearTimeout(s),i(ut(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var n;return!!(!((n=je().grecaptcha)===null||n===void 0)&&n.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function XM(t){return t.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(t)}class JM{async load(e){return new GM(e)}clearedOneInstance(){}}/**
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
 */const DA="recaptcha",ZM={theme:"light",type:"image"};let e4=class{constructor(e,n,r=Object.assign({},ZM)){this.parameters=r,this.type=DA,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=Ce(e),this.isInvisible=this.parameters.size==="invisible",C(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const i=typeof n=="string"?document.getElementById(n):n;C(i,this.auth,"argument-error"),this.container=i,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new JM:new YM,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),n=this.getAssertedRecaptcha(),r=n.getResponse(e);return r||new Promise(i=>{const s=o=>{o&&(this.tokenChangeListeners.delete(s),i(o))};this.tokenChangeListeners.add(s),this.isInvisible&&n.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){C(!this.parameters.sitekey,this.auth,"argument-error"),C(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),C(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return n=>{if(this.tokenChangeListeners.forEach(r=>r(n)),typeof e=="function")e(n);else if(typeof e=="string"){const r=je()[e];typeof r=="function"&&r(n)}}}assertNotDestroyed(){C(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const n=document.createElement("div");e.appendChild(n),e=n}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){C(Gy()&&!rv(),this.auth,"internal-error"),await t4(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await YV(this.auth);C(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return C(this.recaptcha,this.auth,"internal-error"),this.recaptcha}};function t4(){let t=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}t=()=>e(),window.addEventListener("load",t)}).catch(e=>{throw t&&window.removeEventListener("load",t),e})}/**
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
 */class iv{constructor(e,n){this.verificationId=e,this.onConfirmation=n}confirm(e){const n=Ki._fromVerification(this.verificationId,e);return this.onConfirmation(n)}}async function n4(t,e,n){const r=Ce(t),i=await Lh(r,e,B(n));return new iv(i,s=>Nh(r,s))}async function r4(t,e,n){const r=B(t);await xh(!1,r,"phone");const i=await Lh(r.auth,e,B(n));return new iv(i,s=>EA(r,s))}async function i4(t,e,n){const r=B(t),i=await Lh(r.auth,e,B(n));return new iv(i,s=>TA(r,s))}async function Lh(t,e,n){var r;const i=await n.verify();try{C(typeof i=="string",t,"argument-error"),C(n.type===DA,t,"argument-error");let s;if(typeof e=="string"?s={phoneNumber:e}:s=e,"session"in s){const o=s.session;if("phoneNumber"in s)return C(o.type==="enroll",t,"internal-error"),(await SM(t,{idToken:o.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}})).phoneSessionInfo.sessionInfo;{C(o.type==="signin",t,"internal-error");const a=((r=s.multiFactorHint)===null||r===void 0?void 0:r.uid)||s.multiFactorUid;return C(a,t,"missing-multi-factor-info"),(await zM(t,{mfaPendingCredential:o.credential,mfaEnrollmentId:a,phoneSignInInfo:{recaptchaToken:i}})).phoneResponseInfo.sessionInfo}}else{const{sessionInfo:o}=await $L(t,{phoneNumber:s.phoneNumber,recaptchaToken:i});return o}}finally{n._reset()}}async function s4(t,e){await Yy(B(t),e)}/**
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
 */let is=class qc{constructor(e){this.providerId=qc.PROVIDER_ID,this.auth=Ce(e)}verifyPhoneNumber(e,n){return Lh(this.auth,e,B(n))}static credential(e,n){return Ki._fromVerification(e,n)}static credentialFromResult(e){const n=e;return qc.credentialFromTaggedObject(n)}static credentialFromError(e){return qc.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:n,temporaryProof:r}=e;return n&&r?Ki._fromTokenResponse(n,r):null}};is.PROVIDER_ID="phone";is.PHONE_SIGN_IN_METHOD="phone";/**
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
 */function ws(t,e){return e?qt(e):(C(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class sv extends Ho{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Jn(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Jn(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Jn(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function o4(t){return IA(t.auth,new sv(t),t.bypassAuthState)}function a4(t){const{auth:e,user:n}=t;return C(n,e,"internal-error"),wA(n,new sv(t),t.bypassAuthState)}async function l4(t){const{auth:e,user:n}=t;return C(n,e,"internal-error"),Yy(n,new sv(t),t.bypassAuthState)}/**
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
 */class OA{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return o4;case"linkViaPopup":case"linkViaRedirect":return l4;case"reauthViaPopup":case"reauthViaRedirect":return a4;default:ht(this.auth,"internal-error")}}resolve(e){vn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){vn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const u4=new yu(2e3,1e4);async function c4(t,e,n){const r=Ce(t);Go(t,e,hr);const i=ws(r,n);return new Kn(r,"signInViaPopup",e,i).executeNotNull()}async function d4(t,e,n){const r=B(t);Go(r.auth,e,hr);const i=ws(r.auth,n);return new Kn(r.auth,"reauthViaPopup",e,i,r).executeNotNull()}async function h4(t,e,n){const r=B(t);Go(r.auth,e,hr);const i=ws(r.auth,n);return new Kn(r.auth,"linkViaPopup",e,i,r).executeNotNull()}class Kn extends OA{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Kn.currentPopupAction&&Kn.currentPopupAction.cancel(),Kn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return C(e,this.auth,"internal-error"),e}async onExecution(){vn(this.filter.length===1,"Popup operations only handle one event");const e=Iu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(ut(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(ut(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Kn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ut(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,u4.get())};e()}}Kn.currentPopupAction=null;/**
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
 */const f4="pendingRedirect",Xa=new Map;class p4 extends OA{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Xa.get(this.auth._key());if(!e){try{const r=await m4(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Xa.set(this.auth._key(),e)}return this.bypassAuthState||Xa.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function m4(t,e){const n=LA(e),r=VA(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}async function ov(t,e){return VA(t)._set(LA(e),"true")}function g4(){Xa.clear()}function av(t,e){Xa.set(t._key(),e)}function VA(t){return qt(t._redirectPersistence)}function LA(t){return Gi(f4,t.config.apiKey,t.name)}/**
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
 */function y4(t,e,n){return v4(t,e,n)}async function v4(t,e,n){const r=Ce(t);Go(t,e,hr),await r._initializationPromise;const i=ws(r,n);return await ov(i,r),i._openRedirect(r,e,"signInViaRedirect")}function _4(t,e,n){return w4(t,e,n)}async function w4(t,e,n){const r=B(t);Go(r.auth,e,hr),await r.auth._initializationPromise;const i=ws(r.auth,n);await ov(i,r.auth);const s=await MA(r);return i._openRedirect(r.auth,e,"reauthViaRedirect",s)}function I4(t,e,n){return E4(t,e,n)}async function E4(t,e,n){const r=B(t);Go(r.auth,e,hr),await r.auth._initializationPromise;const i=ws(r.auth,n);await xh(!1,r,e.providerId),await ov(i,r.auth);const s=await MA(r);return i._openRedirect(r.auth,e,"linkViaRedirect",s)}async function T4(t,e){return await Ce(t)._initializationPromise,Mh(t,e,!1)}async function Mh(t,e,n=!1){const r=Ce(t),i=ws(r,e),o=await new p4(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}async function MA(t){const e=Iu(`${t.uid}:::`);return t._redirectEventId=e,await t.auth._setRedirectUser(t),await t.auth._persistUserIfCurrent(t),e}/**
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
 */const S4=10*60*1e3;class FA{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!A4(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!UA(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(ut(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=S4&&this.cachedEventUids.clear(),this.cachedEventUids.has(Q0(e))}saveEventToCache(e){this.cachedEventUids.add(Q0(e)),this.lastProcessedEventTime=Date.now()}}function Q0(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function UA({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function A4(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return UA(t);default:return!1}}/**
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
 */async function jA(t,e={}){return Oe(t,"GET","/v1/projects",e)}/**
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
 */const P4=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,k4=/^https?/;async function R4(t){if(t.config.emulator)return;const{authorizedDomains:e}=await jA(t);for(const n of e)try{if(b4(n))return}catch{}ht(t,"unauthorized-domain")}function b4(t){const e=Ol(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!k4.test(n))return!1;if(P4.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const C4=new yu(3e4,6e4);function Y0(){const t=je().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function x4(t){return new Promise((e,n)=>{var r,i,s;function o(){Y0(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Y0(),n(ut(t,"network-request-failed"))},timeout:C4.get()})}if(!((i=(r=je().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=je().gapi)===null||s===void 0)&&s.load)o();else{const a=pA("iframefcb");return je()[a]=()=>{gapi.load?o():n(ut(t,"network-request-failed"))},Qy(`${EL()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Wc=null,e})}let Wc=null;function N4(t){return Wc=Wc||x4(t),Wc}/**
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
 */const D4=new yu(5e3,15e3),O4="__/auth/iframe",V4="emulator/auth/iframe",L4={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},M4=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function F4(t){const e=t.config;C(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Ky(e,V4):`https://${t.config.authDomain}/${O4}`,r={apiKey:e.apiKey,appName:t.name,v:fi},i=M4.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Wo(r).slice(1)}`}async function U4(t){const e=await N4(t),n=je().gapi;return C(n,t,"internal-error"),e.open({where:document.body,url:F4(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:L4,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=ut(t,"network-request-failed"),a=je().setTimeout(()=>{s(o)},D4.get());function l(){je().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const j4={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},$4=500,z4=600,B4="_blank",q4="http://localhost";class X0{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function W4(t,e,n,r=$4,i=z4){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},j4),{width:r.toString(),height:i.toString(),top:s,left:o}),u=Ee().toLowerCase();n&&(a=lA(u)?B4:n),aA(u)&&(e=e||q4,l.scrollbars="yes");const c=Object.entries(l).reduce((h,[f,_])=>`${h}${f}=${_},`,"");if(dL(u)&&a!=="_self")return G4(e||"",a),new X0(null);const d=window.open(e||"",a,c);C(d,t,"popup-blocked");try{d.focus()}catch{}return new X0(d)}function G4(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const K4="__/auth/handler",H4="emulator/auth/handler",Q4=encodeURIComponent("fac");async function $m(t,e,n,r,i,s){C(t.config.authDomain,t,"auth-domain-config-required"),C(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:fi,eventId:i};if(e instanceof hr){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",yO(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,d]of Object.entries(s||{}))o[c]=d}if(e instanceof Qo){const c=e.getScopes().filter(d=>d!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];const l=await t._getAppCheckToken(),u=l?`#${Q4}=${encodeURIComponent(l)}`:"";return`${Y4(t)}?${Wo(a).slice(1)}${u}`}function Y4({config:t}){return t.emulator?Ky(t,H4):`https://${t.authDomain}/${K4}`}/**
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
 */const hp="webStorageSupport";class X4{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=rs,this._completeRedirectFn=Mh,this._overrideRedirectResult=av}async _openPopup(e,n,r,i){var s;vn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await $m(e,n,r,Ol(),i);return W4(e,o,Iu())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await $m(e,n,r,Ol(),i);return DM(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(vn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await U4(e),r=new FA(e);return n.register("authEvent",i=>(C(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(hp,{type:hp},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[hp];o!==void 0&&n(!!o),ht(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=R4(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return hA()||Hy()||Ko()}}const J4=X4;class Z4{constructor(e){this.factorId=e}_process(e,n,r){switch(n.type){case"enroll":return this._finalizeEnroll(e,n.credential,r);case"signin":return this._finalizeSignIn(e,n.credential);default:return Cn("unexpected MultiFactorSessionType")}}}class lv extends Z4{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new lv(e)}_finalizeEnroll(e,n,r){return AM(e,{idToken:n,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,n){return BM(e,{mfaPendingCredential:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class $A{constructor(){}static assertion(e){return lv._fromCredential(e)}}$A.FACTOR_ID="phone";var J0="@firebase/auth",Z0="1.6.1";/**
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
 */class eF{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){C(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function tF(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function nF(t){ei(new Un("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;C(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:fA(t)},u=new vL(r,i,s,l);return PL(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),ei(new Un("auth-internal",e=>{const n=Ce(e.getProvider("auth").getImmediate());return(r=>new eF(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Mn(J0,Z0,tF(t)),Mn(J0,Z0,"esm2017")}/**
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
 */const rF=5*60;lO("authIdTokenMaxAge");function iF(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}_L({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=ut("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",iF().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});nF("Browser");/**
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
 */function ss(){return window}/**
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
 */const sF=2e3;async function oF(t,e,n){var r;const{BuildInfo:i}=ss();vn(e.sessionId,"AuthEvent did not contain a session ID");const s=await dF(e.sessionId),o={};return Ko()?o.ibi=i.packageName:vu()?o.apn=i.packageName:ht(t,"operation-not-supported-in-this-environment"),i.displayName&&(o.appDisplayName=i.displayName),o.sessionId=s,$m(t,n,e.type,void 0,(r=e.eventId)!==null&&r!==void 0?r:void 0,o)}async function aF(t){const{BuildInfo:e}=ss(),n={};Ko()?n.iosBundleId=e.packageName:vu()?n.androidPackageName=e.packageName:ht(t,"operation-not-supported-in-this-environment"),await jA(t,n)}function lF(t){const{cordova:e}=ss();return new Promise(n=>{e.plugins.browsertab.isAvailable(r=>{let i=null;r?e.plugins.browsertab.openUrl(t):i=e.InAppBrowser.open(t,cL()?"_blank":"_system","location=yes"),n(i)})})}async function uF(t,e,n){const{cordova:r}=ss();let i=()=>{};try{await new Promise((s,o)=>{let a=null;function l(){var d;s();const h=(d=r.plugins.browsertab)===null||d===void 0?void 0:d.close;typeof h=="function"&&h(),typeof(n==null?void 0:n.close)=="function"&&n.close()}function u(){a||(a=window.setTimeout(()=>{o(ut(t,"redirect-cancelled-by-user"))},sF))}function c(){(document==null?void 0:document.visibilityState)==="visible"&&u()}e.addPassiveListener(l),document.addEventListener("resume",u,!1),vu()&&document.addEventListener("visibilitychange",c,!1),i=()=>{e.removePassiveListener(l),document.removeEventListener("resume",u,!1),document.removeEventListener("visibilitychange",c,!1),a&&window.clearTimeout(a)}})}finally{i()}}function cF(t){var e,n,r,i,s,o,a,l,u,c;const d=ss();C(typeof((e=d==null?void 0:d.universalLinks)===null||e===void 0?void 0:e.subscribe)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),C(typeof((n=d==null?void 0:d.BuildInfo)===null||n===void 0?void 0:n.packageName)<"u",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),C(typeof((s=(i=(r=d==null?void 0:d.cordova)===null||r===void 0?void 0:r.plugins)===null||i===void 0?void 0:i.browsertab)===null||s===void 0?void 0:s.openUrl)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),C(typeof((l=(a=(o=d==null?void 0:d.cordova)===null||o===void 0?void 0:o.plugins)===null||a===void 0?void 0:a.browsertab)===null||l===void 0?void 0:l.isAvailable)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),C(typeof((c=(u=d==null?void 0:d.cordova)===null||u===void 0?void 0:u.InAppBrowser)===null||c===void 0?void 0:c.open)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function dF(t){const e=hF(t),n=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(n)).map(i=>i.toString(16).padStart(2,"0")).join("")}function hF(t){if(vn(/[0-9a-zA-Z]+/.test(t),"Can only convert alpha-numeric strings"),typeof TextEncoder<"u")return new TextEncoder().encode(t);const e=new ArrayBuffer(t.length),n=new Uint8Array(e);for(let r=0;r<t.length;r++)n[r]=t.charCodeAt(r);return n}/**
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
 */const fF=20;class pF extends FA{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise(e=>{this.resolveInialized=e})}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInialized(),this.passiveListeners.forEach(n=>n(e)),super.onEvent(e)}async initialized(){await this.initPromise}}function mF(t,e,n=null){return{type:e,eventId:n,urlResponse:null,sessionId:vF(),postBody:null,tenantId:t.tenantId,error:ut(t,"no-auth-event")}}function gF(t,e){return zm()._set(Bm(t),e)}async function eI(t){const e=await zm()._get(Bm(t));return e&&await zm()._remove(Bm(t)),e}function yF(t,e){var n,r;const i=wF(e);if(i.includes("/__/auth/callback")){const s=Gc(i),o=s.firebaseError?_F(decodeURIComponent(s.firebaseError)):null,a=(r=(n=o==null?void 0:o.code)===null||n===void 0?void 0:n.split("auth/"))===null||r===void 0?void 0:r[1],l=a?ut(a):null;return l?{type:t.type,eventId:t.eventId,tenantId:t.tenantId,error:l,urlResponse:null,sessionId:null,postBody:null}:{type:t.type,eventId:t.eventId,tenantId:t.tenantId,sessionId:t.sessionId,urlResponse:i,postBody:null}}return null}function vF(){const t=[],e="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let n=0;n<fF;n++){const r=Math.floor(Math.random()*e.length);t.push(e.charAt(r))}return t.join("")}function zm(){return qt(nv)}function Bm(t){return Gi("authEvent",t.config.apiKey,t.name)}function _F(t){try{return JSON.parse(t)}catch{return null}}function wF(t){const e=Gc(t),n=e.link?decodeURIComponent(e.link):void 0,r=Gc(n).link,i=e.deep_link_id?decodeURIComponent(e.deep_link_id):void 0;return Gc(i).link||i||r||n||t}function Gc(t){if(!(t!=null&&t.includes("?")))return{};const[e,...n]=t.split("?");return eo(n.join("?"))}/**
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
 */const IF=500;class EF{constructor(){this._redirectPersistence=rs,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=Mh,this._overrideRedirectResult=av}async _initialize(e){const n=e._key();let r=this.eventManagers.get(n);return r||(r=new pF(e),this.eventManagers.set(n,r),this.attachCallbackListeners(e,r)),r}_openPopup(e){ht(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,n,r,i){cF(e);const s=await this._initialize(e);await s.initialized(),s.resetRedirect(),g4(),await this._originValidation(e);const o=mF(e,r,i);await gF(e,o);const a=await oF(e,o,n),l=await lF(a);return uF(e,s,l)}_isIframeWebStorageSupported(e,n){throw new Error("Method not implemented.")}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=aF(e)),this.originValidationPromises[n]}attachCallbackListeners(e,n){const{universalLinks:r,handleOpenURL:i,BuildInfo:s}=ss(),o=setTimeout(async()=>{await eI(e),n.onEvent(tI())},IF),a=async c=>{clearTimeout(o);const d=await eI(e);let h=null;d&&(c!=null&&c.url)&&(h=yF(d,c.url)),n.onEvent(h||tI())};typeof r<"u"&&typeof r.subscribe=="function"&&r.subscribe(null,a);const l=i,u=`${s.packageName.toLowerCase()}://`;ss().handleOpenURL=async c=>{if(c.toLowerCase().startsWith(u)&&a({url:c}),typeof l=="function")try{l(c)}catch(d){console.error(d)}}}}const TF=EF;function tI(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:ut("no-auth-event")}}/**
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
 */function SF(t,e){Ce(t)._logFramework(e)}var AF="@firebase/auth-compat",PF="0.5.3";/**
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
 */const kF=1e3;function Ja(){var t;return((t=self==null?void 0:self.location)===null||t===void 0?void 0:t.protocol)||null}function RF(){return Ja()==="http:"||Ja()==="https:"}function zA(t=Ee()){return!!((Ja()==="file:"||Ja()==="ionic:"||Ja()==="capacitor:")&&t.toLowerCase().match(/iphone|ipad|ipod|android/))}function bF(){return jy()||Uy()}function CF(){return US()&&(document==null?void 0:document.documentMode)===11}function xF(t=Ee()){return/Edge\/\d+/.test(t)}function NF(t=Ee()){return CF()||xF(t)}function BA(){try{const t=self.localStorage,e=Iu();if(t)return t.setItem(e,"1"),t.removeItem(e),NF()?Cl():!0}catch{return uv()&&Cl()}return!1}function uv(){return typeof global<"u"&&"WorkerGlobalScope"in global&&"importScripts"in global}function fp(){return(RF()||FS()||zA())&&!bF()&&BA()&&!uv()}function qA(){return zA()&&typeof document<"u"}async function DF(){return qA()?new Promise(t=>{const e=setTimeout(()=>{t(!1)},kF);document.addEventListener("deviceready",()=>{clearTimeout(e),t(!0)})}):!1}function OF(){return typeof window<"u"?window:null}/**
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
 */const zt={LOCAL:"local",NONE:"none",SESSION:"session"},ya=C,WA="persistence";function VF(t,e){if(ya(Object.values(zt).includes(e),t,"invalid-persistence-type"),jy()){ya(e!==zt.SESSION,t,"unsupported-persistence-type");return}if(Uy()){ya(e===zt.NONE,t,"unsupported-persistence-type");return}if(uv()){ya(e===zt.NONE||e===zt.LOCAL&&Cl(),t,"unsupported-persistence-type");return}ya(e===zt.NONE||BA(),t,"unsupported-persistence-type")}async function qm(t){await t._initializationPromise;const e=GA(),n=Gi(WA,t.config.apiKey,t.name);e&&e.setItem(n,t._getPersistence())}function LF(t,e){const n=GA();if(!n)return[];const r=Gi(WA,t,e);switch(n.getItem(r)){case zt.NONE:return[Ao];case zt.LOCAL:return[Ul,rs];case zt.SESSION:return[rs];default:return[]}}function GA(){var t;try{return((t=OF())===null||t===void 0?void 0:t.sessionStorage)||null}catch{return null}}/**
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
 */const MF=C;class Or{constructor(){this.browserResolver=qt(J4),this.cordovaResolver=qt(TF),this.underlyingResolver=null,this._redirectPersistence=rs,this._completeRedirectFn=Mh,this._overrideRedirectResult=av}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,n,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,n,r,i)}async _openRedirect(e,n,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,n,r,i)}_isIframeWebStorageSupported(e,n){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,n)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return qA()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return MF(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await DF();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}/**
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
 */function KA(t){return t.unwrap()}function FF(t){return t.wrapped()}/**
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
 */function UF(t){return HA(t)}function jF(t,e){var n;const r=(n=e.customData)===null||n===void 0?void 0:n._tokenResponse;if((e==null?void 0:e.code)==="auth/multi-factor-auth-required"){const i=e;i.resolver=new $F(t,TM(t,e))}else if(r){const i=HA(e),s=e;i&&(s.credential=i,s.tenantId=r.tenantId||void 0,s.email=r.email||void 0,s.phoneNumber=r.phoneNumber||void 0)}}function HA(t){const{_tokenResponse:e}=t instanceof At?t.customData:t;if(!e)return null;if(!(t instanceof At)&&"temporaryProof"in e&&"phoneNumber"in e)return is.credentialFromResult(t);const n=e.providerId;if(!n||n===ga.PASSWORD)return null;let r;switch(n){case ga.GOOGLE:r=An;break;case ga.FACEBOOK:r=Sn;break;case ga.GITHUB:r=Pn;break;case ga.TWITTER:r=kn;break;default:const{oauthIdToken:i,oauthAccessToken:s,oauthTokenSecret:o,pendingToken:a,nonce:l}=e;return!s&&!o&&!i&&!a?null:a?n.startsWith("saml.")?Po._create(n,a):jn._fromParams({providerId:n,signInMethod:n,pendingToken:a,idToken:i,accessToken:s}):new co(n).credential({idToken:i,accessToken:s,rawNonce:l})}return t instanceof At?r.credentialFromError(t):r.credentialFromResult(t)}function xt(t,e){return e.catch(n=>{throw n instanceof At&&jF(t,n),n}).then(n=>{const r=n.operationType,i=n.user;return{operationType:r,credential:UF(n),additionalUserInfo:EM(n),user:Fh.getOrCreate(i)}})}async function Wm(t,e){const n=await e;return{verificationId:n.verificationId,confirm:r=>xt(t,n.confirm(r))}}class $F{constructor(e,n){this.resolver=n,this.auth=FF(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return xt(KA(this.auth),this.resolver.resolveSignIn(e))}}/**
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
 */let Fh=class Da{constructor(e){this._delegate=e,this.multiFactor=kM(e)}static getOrCreate(e){return Da.USER_MAP.has(e)||Da.USER_MAP.set(e,new Da(e)),Da.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return xt(this.auth,EA(this._delegate,e))}async linkWithPhoneNumber(e,n){return Wm(this.auth,r4(this._delegate,e,n))}async linkWithPopup(e){return xt(this.auth,h4(this._delegate,e,Or))}async linkWithRedirect(e){return await qm(Ce(this.auth)),I4(this._delegate,e,Or)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return xt(this.auth,TA(this._delegate,e))}reauthenticateWithPhoneNumber(e,n){return Wm(this.auth,i4(this._delegate,e,n))}reauthenticateWithPopup(e){return xt(this.auth,d4(this._delegate,e,Or))}async reauthenticateWithRedirect(e){return await qm(Ce(this.auth)),_4(this._delegate,e,Or)}sendEmailVerification(e){return dM(this._delegate,e)}async unlink(e){return await XL(this._delegate,e),this}updateEmail(e){return mM(this._delegate,e)}updatePassword(e){return gM(this._delegate,e)}updatePhoneNumber(e){return s4(this._delegate,e)}updateProfile(e){return pM(this._delegate,e)}verifyBeforeUpdateEmail(e,n){return hM(this._delegate,e,n)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}};Fh.USER_MAP=new WeakMap;/**
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
 */const va=C;class Gm{constructor(e,n){if(this.app=e,n.isInitialized()){this._delegate=n.getImmediate(),this.linkUnderlyingAuth();return}const{apiKey:r}=e.options;va(r,"invalid-api-key",{appName:e.name}),va(r,"invalid-api-key",{appName:e.name});const i=typeof window<"u"?Or:void 0;this._delegate=n.initialize({options:{persistence:zF(r,e.name),popupRedirectResolver:i}}),this._delegate._updateErrorMap(jV),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?Fh.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,n){kL(this._delegate,e,n)}applyActionCode(e){return nM(this._delegate,e)}checkActionCode(e){return SA(this._delegate,e)}confirmPasswordReset(e,n){return tM(this._delegate,e,n)}async createUserWithEmailAndPassword(e,n){return xt(this._delegate,iM(this._delegate,e,n))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return cM(this._delegate,e)}isSignInWithEmailLink(e){return aM(this._delegate,e)}async getRedirectResult(){va(fp(),this._delegate,"operation-not-supported-in-this-environment");const e=await T4(this._delegate,Or);return e?xt(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){SF(this._delegate,e)}onAuthStateChanged(e,n,r){const{next:i,error:s,complete:o}=nI(e,n,r);return this._delegate.onAuthStateChanged(i,s,o)}onIdTokenChanged(e,n,r){const{next:i,error:s,complete:o}=nI(e,n,r);return this._delegate.onIdTokenChanged(i,s,o)}sendSignInLinkToEmail(e,n){return oM(this._delegate,e,n)}sendPasswordResetEmail(e,n){return eM(this._delegate,e,n||void 0)}async setPersistence(e){VF(this._delegate,e);let n;switch(e){case zt.SESSION:n=rs;break;case zt.LOCAL:n=await qt(Ul)._isAvailable()?Ul:nv;break;case zt.NONE:n=Ao;break;default:return ht("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(n)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return xt(this._delegate,YL(this._delegate))}signInWithCredential(e){return xt(this._delegate,Nh(this._delegate,e))}signInWithCustomToken(e){return xt(this._delegate,ZL(this._delegate,e))}signInWithEmailAndPassword(e,n){return xt(this._delegate,sM(this._delegate,e,n))}signInWithEmailLink(e,n){return xt(this._delegate,lM(this._delegate,e,n))}signInWithPhoneNumber(e,n){return Wm(this._delegate,n4(this._delegate,e,n))}async signInWithPopup(e){return va(fp(),this._delegate,"operation-not-supported-in-this-environment"),xt(this._delegate,c4(this._delegate,e,Or))}async signInWithRedirect(e){return va(fp(),this._delegate,"operation-not-supported-in-this-environment"),await qm(this._delegate),y4(this._delegate,e,Or)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return rM(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}Gm.Persistence=zt;function nI(t,e,n){let r=t;typeof t!="function"&&({next:r,error:e,complete:n}=t);const i=r;return{next:o=>i(o&&Fh.getOrCreate(o)),error:e,complete:n}}function zF(t,e){const n=LF(t,e);if(typeof self<"u"&&!n.includes(Ul)&&n.push(Ul),typeof window<"u")for(const r of[nv,rs])n.includes(r)||n.push(r);return n.includes(Ao)||n.push(Ao),n}/**
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
 */class cv{constructor(){this.providerId="phone",this._delegate=new is(KA(re.auth()))}static credential(e,n){return is.credential(e,n)}verifyPhoneNumber(e,n){return this._delegate.verifyPhoneNumber(e,n)}unwrap(){return this._delegate}}cv.PHONE_SIGN_IN_METHOD=is.PHONE_SIGN_IN_METHOD;cv.PROVIDER_ID=is.PROVIDER_ID;/**
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
 */const BF=C;class qF{constructor(e,n,r=re.app()){var i;BF((i=r.options)===null||i===void 0?void 0:i.apiKey,"invalid-api-key",{appName:r.name}),this._delegate=new e4(r.auth(),e,n),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}/**
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
 */const WF="auth-compat";function GF(t){t.INTERNAL.registerComponent(new Un(WF,e=>{const n=e.getProvider("app-compat").getImmediate(),r=e.getProvider("auth");return new Gm(n,r)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:Rs.EMAIL_SIGNIN,PASSWORD_RESET:Rs.PASSWORD_RESET,RECOVER_EMAIL:Rs.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:Rs.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:Rs.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:Rs.VERIFY_EMAIL}},EmailAuthProvider:pi,FacebookAuthProvider:Sn,GithubAuthProvider:Pn,GoogleAuthProvider:An,OAuthProvider:co,SAMLAuthProvider:Vd,PhoneAuthProvider:cv,PhoneMultiFactorGenerator:$A,RecaptchaVerifier:qF,TwitterAuthProvider:kn,Auth:Gm,AuthCredential:Ho,Error:At}).setInstantiationMode("LAZY").setMultipleInstances(!1)),t.registerVersion(AF,PF)}GF(re);var KF=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},O,dv=dv||{},q=KF||self;function Uh(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Tu(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function HF(t){return Object.prototype.hasOwnProperty.call(t,pp)&&t[pp]||(t[pp]=++QF)}var pp="closure_uid_"+(1e9*Math.random()>>>0),QF=0;function YF(t,e,n){return t.call.apply(t.bind,arguments)}function XF(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function yt(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?yt=YF:yt=XF,yt.apply(null,arguments)}function _c(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function et(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function mi(){this.s=this.s,this.o=this.o}var JF=0;mi.prototype.s=!1;mi.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),JF!=0)&&HF(this)};mi.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const QA=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function hv(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function rI(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(Uh(r)){const i=t.length||0,s=r.length||0;t.length=i+s;for(let o=0;o<s;o++)t[i+o]=r[o]}else t.push(r)}}function vt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}vt.prototype.h=function(){this.defaultPrevented=!0};var ZF=function(){if(!q.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{const n=()=>{};q.addEventListener("test",n,e),q.removeEventListener("test",n,e)}catch{}return t}();function jl(t){return/^[\s\xa0]*$/.test(t)}function jh(){var t=q.navigator;return t&&(t=t.userAgent)?t:""}function Rn(t){return jh().indexOf(t)!=-1}function fv(t){return fv[" "](t),t}fv[" "]=function(){};function e3(t,e){var n=G3;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var t3=Rn("Opera"),ko=Rn("Trident")||Rn("MSIE"),YA=Rn("Edge"),Km=YA||ko,XA=Rn("Gecko")&&!(jh().toLowerCase().indexOf("webkit")!=-1&&!Rn("Edge"))&&!(Rn("Trident")||Rn("MSIE"))&&!Rn("Edge"),n3=jh().toLowerCase().indexOf("webkit")!=-1&&!Rn("Edge");function JA(){var t=q.document;return t?t.documentMode:void 0}var Hm;e:{var mp="",gp=function(){var t=jh();if(XA)return/rv:([^\);]+)(\)|;)/.exec(t);if(YA)return/Edge\/([\d\.]+)/.exec(t);if(ko)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(n3)return/WebKit\/(\S+)/.exec(t);if(t3)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(gp&&(mp=gp?gp[1]:""),ko){var yp=JA();if(yp!=null&&yp>parseFloat(mp)){Hm=String(yp);break e}}Hm=mp}var Qm;if(q.document&&ko){var iI=JA();Qm=iI||parseInt(Hm,10)||void 0}else Qm=void 0;var r3=Qm;function $l(t,e){if(vt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(XA){e:{try{fv(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:i3[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&$l.$.h.call(this)}}et($l,vt);var i3={2:"touch",3:"pen",4:"mouse"};$l.prototype.h=function(){$l.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Su="closure_listenable_"+(1e6*Math.random()|0),s3=0;function o3(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=i,this.key=++s3,this.fa=this.ia=!1}function $h(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function pv(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function a3(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function ZA(t){const e={};for(const n in t)e[n]=t[n];return e}const sI="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function eP(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<sI.length;s++)n=sI[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function zh(t){this.src=t,this.g={},this.h=0}zh.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=Xm(t,e,r,i);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new o3(e,this.src,s,!!r,i),e.ia=n,t.push(e)),e};function Ym(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=QA(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&($h(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Xm(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.fa&&s.listener==e&&s.capture==!!n&&s.la==r)return i}return-1}var mv="closure_lm_"+(1e6*Math.random()|0),vp={};function tP(t,e,n,r,i){if(r&&r.once)return rP(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)tP(t,e[s],n,r,i);return null}return n=vv(n),t&&t[Su]?t.O(e,n,Tu(r)?!!r.capture:!!r,i):nP(t,e,n,!1,r,i)}function nP(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=Tu(i)?!!i.capture:!!i,a=yv(t);if(a||(t[mv]=a=new zh(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=l3(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)ZF||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(sP(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function l3(){function t(n){return e.call(t.src,t.listener,n)}const e=u3;return t}function rP(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)rP(t,e[s],n,r,i);return null}return n=vv(n),t&&t[Su]?t.P(e,n,Tu(r)?!!r.capture:!!r,i):nP(t,e,n,!0,r,i)}function iP(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)iP(t,e[s],n,r,i);else r=Tu(r)?!!r.capture:!!r,n=vv(n),t&&t[Su]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=Xm(s,n,r,i),-1<n&&($h(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=yv(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Xm(e,n,r,i)),(n=-1<t?e[t]:null)&&gv(n))}function gv(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[Su])Ym(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(sP(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=yv(e))?(Ym(n,t),n.h==0&&(n.src=null,e[mv]=null)):$h(t)}}}function sP(t){return t in vp?vp[t]:vp[t]="on"+t}function u3(t,e){if(t.fa)t=!0;else{e=new $l(e,this);var n=t.listener,r=t.la||t.src;t.ia&&gv(t),t=n.call(r,e)}return t}function yv(t){return t=t[mv],t instanceof zh?t:null}var _p="__closure_events_fn_"+(1e9*Math.random()>>>0);function vv(t){return typeof t=="function"?t:(t[_p]||(t[_p]=function(e){return t.handleEvent(e)}),t[_p])}function Ze(){mi.call(this),this.i=new zh(this),this.S=this,this.J=null}et(Ze,mi);Ze.prototype[Su]=!0;Ze.prototype.removeEventListener=function(t,e,n,r){iP(this,t,e,n,r)};function ct(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new vt(e,t);else if(e instanceof vt)e.target=e.target||t;else{var i=e;e=new vt(r,t),eP(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=wc(o,r,!0,e)&&i}if(o=e.g=t,i=wc(o,r,!0,e)&&i,i=wc(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=wc(o,r,!1,e)&&i}Ze.prototype.N=function(){if(Ze.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)$h(n[r]);delete t.g[e],t.h--}}this.J=null};Ze.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};Ze.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function wc(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&Ym(t.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var _v=q.JSON.stringify;class c3{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function d3(){var t=wv;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class h3{constructor(){this.h=this.g=null}add(e,n){const r=oP.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var oP=new c3(()=>new f3,t=>t.reset());class f3{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function p3(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function m3(t){q.setTimeout(()=>{throw t},0)}let zl,Bl=!1,wv=new h3,aP=()=>{const t=q.Promise.resolve(void 0);zl=()=>{t.then(g3)}};var g3=()=>{for(var t;t=d3();){try{t.h.call(t.g)}catch(n){m3(n)}var e=oP;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Bl=!1};function Bh(t,e){Ze.call(this),this.h=t||1,this.g=e||q,this.j=yt(this.qb,this),this.l=Date.now()}et(Bh,Ze);O=Bh.prototype;O.ga=!1;O.T=null;O.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),ct(this,"tick"),this.ga&&(Iv(this),this.start()))}};O.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Iv(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}O.N=function(){Bh.$.N.call(this),Iv(this),delete this.g};function Ev(t,e,n){if(typeof t=="function")n&&(t=yt(t,n));else if(t&&typeof t.handleEvent=="function")t=yt(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:q.setTimeout(t,e||0)}function lP(t){t.g=Ev(()=>{t.g=null,t.i&&(t.i=!1,lP(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class y3 extends mi{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:lP(this)}N(){super.N(),this.g&&(q.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ql(t){mi.call(this),this.h=t,this.g={}}et(ql,mi);var oI=[];function uP(t,e,n,r){Array.isArray(n)||(n&&(oI[0]=n.toString()),n=oI);for(var i=0;i<n.length;i++){var s=tP(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function cP(t){pv(t.g,function(e,n){this.g.hasOwnProperty(n)&&gv(e)},t),t.g={}}ql.prototype.N=function(){ql.$.N.call(this),cP(this)};ql.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function qh(){this.g=!0}qh.prototype.Ea=function(){this.g=!1};function v3(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var d=c.split("_");o=2<=d.length&&d[1]=="type"?o+(c+"="+u+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function _3(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function to(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+I3(t,n)+(r?" "+r:"")})}function w3(t,e){t.info(function(){return"TIMEOUT: "+e})}qh.prototype.info=function(){};function I3(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return _v(n)}catch{return e}}var Is={},aI=null;function Wh(){return aI=aI||new Ze}Is.Ta="serverreachability";function dP(t){vt.call(this,Is.Ta,t)}et(dP,vt);function Wl(t){const e=Wh();ct(e,new dP(e))}Is.STAT_EVENT="statevent";function hP(t,e){vt.call(this,Is.STAT_EVENT,t),this.stat=e}et(hP,vt);function Tt(t){const e=Wh();ct(e,new hP(e,t))}Is.Ua="timingevent";function fP(t,e){vt.call(this,Is.Ua,t),this.size=e}et(fP,vt);function Au(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return q.setTimeout(function(){t()},e)}var Gh={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},pP={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Tv(){}Tv.prototype.h=null;function lI(t){return t.h||(t.h=t.i())}function mP(){}var Pu={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Sv(){vt.call(this,"d")}et(Sv,vt);function Av(){vt.call(this,"c")}et(Av,vt);var Jm;function Kh(){}et(Kh,Tv);Kh.prototype.g=function(){return new XMLHttpRequest};Kh.prototype.i=function(){return{}};Jm=new Kh;function ku(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new ql(this),this.P=E3,t=Km?125:void 0,this.V=new Bh(t),this.I=null,this.i=!1,this.u=this.B=this.A=this.L=this.G=this.Y=this.C=null,this.F=[],this.g=null,this.o=0,this.s=this.v=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new gP}function gP(){this.i=null,this.g="",this.h=!1}var E3=45e3,yP={},Zm={};O=ku.prototype;O.setTimeout=function(t){this.P=t};function eg(t,e,n){t.L=1,t.A=Qh(ar(e)),t.u=n,t.S=!0,vP(t,null)}function vP(t,e){t.G=Date.now(),Ru(t),t.B=ar(t.A);var n=t.B,r=t.W;Array.isArray(r)||(r=[String(r)]),PP(n.i,"t",r),t.o=0,n=t.l.J,t.h=new gP,t.g=KP(t.l,n?e:null,!t.u),0<t.O&&(t.M=new y3(yt(t.Pa,t,t.g),t.O)),uP(t.U,t.g,"readystatechange",t.nb),e=t.I?ZA(t.I):{},t.u?(t.v||(t.v="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.B,t.v,t.u,e)):(t.v="GET",t.g.ha(t.B,t.v,null,e)),Wl(),v3(t.j,t.v,t.B,t.m,t.W,t.u)}O.nb=function(t){t=t.target;const e=this.M;e&&xn(t)==3?e.l():this.Pa(t)};O.Pa=function(t){try{if(t==this.g)e:{const c=xn(this.g);var e=this.g.Ia();const d=this.g.da();if(!(3>c)&&(c!=3||Km||this.g&&(this.h.h||this.g.ja()||hI(this.g)))){this.J||c!=4||e==7||(e==8||0>=d?Wl(3):Wl(2)),Hh(this);var n=this.g.da();this.ca=n;t:if(_P(this)){var r=hI(this.g);t="";var i=r.length,s=xn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ui(this),Za(this);var o="";break t}this.h.i=new q.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.length=0,this.h.g+=t,this.o=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,_3(this.j,this.v,this.B,this.m,this.W,c,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!jl(a)){var u=a;break t}}u=null}if(n=u)to(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,tg(this,n);else{this.i=!1,this.s=3,Tt(12),Ui(this),Za(this);break e}}this.S?(wP(this,c,o),Km&&this.i&&c==3&&(uP(this.U,this.V,"tick",this.mb),this.V.start())):(to(this.j,this.m,o,null),tg(this,o)),c==4&&Ui(this),this.i&&!this.J&&(c==4?BP(this.l,this):(this.i=!1,Ru(this)))}else B3(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.s=3,Tt(12)):(this.s=0,Tt(13)),Ui(this),Za(this)}}}catch{}finally{}};function _P(t){return t.g?t.v=="GET"&&t.L!=2&&t.l.Ha:!1}function wP(t,e,n){let r=!0,i;for(;!t.J&&t.o<n.length;)if(i=T3(t,n),i==Zm){e==4&&(t.s=4,Tt(14),r=!1),to(t.j,t.m,null,"[Incomplete Response]");break}else if(i==yP){t.s=4,Tt(15),to(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else to(t.j,t.m,i,null),tg(t,i);_P(t)&&t.o!=0&&(t.h.g=t.h.g.slice(t.o),t.o=0),e!=4||n.length!=0||t.h.h||(t.s=1,Tt(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),xv(e),e.M=!0,Tt(11))):(to(t.j,t.m,n,"[Invalid Chunked Response]"),Ui(t),Za(t))}O.mb=function(){if(this.g){var t=xn(this.g),e=this.g.ja();this.o<e.length&&(Hh(this),wP(this,t,e),this.i&&t!=4&&Ru(this))}};function T3(t,e){var n=t.o,r=e.indexOf(`
`,n);return r==-1?Zm:(n=Number(e.substring(n,r)),isNaN(n)?yP:(r+=1,r+n>e.length?Zm:(e=e.slice(r,r+n),t.o=r+n,e)))}O.cancel=function(){this.J=!0,Ui(this)};function Ru(t){t.Y=Date.now()+t.P,IP(t,t.P)}function IP(t,e){if(t.C!=null)throw Error("WatchDog timer not null");t.C=Au(yt(t.lb,t),e)}function Hh(t){t.C&&(q.clearTimeout(t.C),t.C=null)}O.lb=function(){this.C=null;const t=Date.now();0<=t-this.Y?(w3(this.j,this.B),this.L!=2&&(Wl(),Tt(17)),Ui(this),this.s=2,Za(this)):IP(this,this.Y-t)};function Za(t){t.l.H==0||t.J||BP(t.l,t)}function Ui(t){Hh(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,Iv(t.V),cP(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function tg(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||ng(n.i,t))){if(!t.K&&ng(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)$d(n),Zh(n);else break e;Cv(n),Tt(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&n.A==0&&!n.v&&(n.v=Au(yt(n.ib,n),6e3));if(1>=bP(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else ji(n,11)}else if((t.K||n.g==t)&&$d(n),!jl(e))for(i=n.Ja.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.V=u[0],u=u[1],n.H==2)if(u[0]=="c"){n.K=u[1],n.pa=u[2];const c=u[3];c!=null&&(n.ra=c,n.l.info("VER="+n.ra));const d=u[4];d!=null&&(n.Ga=d,n.l.info("SVER="+n.Ga));const h=u[5];h!=null&&typeof h=="number"&&0<h&&(r=1.5*h,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const f=t.g;if(f){const _=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(_){var s=r.i;s.g||_.indexOf("spdy")==-1&&_.indexOf("quic")==-1&&_.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(Pv(s,s.h),s.h=null))}if(r.F){const v=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;v&&(r.Da=v,pe(r.I,r.F,v))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=GP(r,r.J?r.pa:null,r.Y),o.K){CP(r.i,o);var a=o,l=r.L;l&&a.setTimeout(l),a.C&&(Hh(a),Ru(a)),r.g=o}else $P(r);0<n.j.length&&ef(n)}else u[0]!="stop"&&u[0]!="close"||ji(n,7);else n.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?ji(n,7):bv(n):u[0]!="noop"&&n.h&&n.h.Aa(u),n.A=0)}}Wl(4)}catch{}}function S3(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Uh(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function A3(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Uh(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function EP(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Uh(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=A3(t),r=S3(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}var TP=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function P3(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Hi(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Hi){this.h=t.h,Ud(this,t.j),this.s=t.s,this.g=t.g,jd(this,t.m),this.l=t.l;var e=t.i,n=new Gl;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),uI(this,n),this.o=t.o}else t&&(e=String(t).match(TP))?(this.h=!1,Ud(this,e[1]||"",!0),this.s=Oa(e[2]||""),this.g=Oa(e[3]||"",!0),jd(this,e[4]),this.l=Oa(e[5]||"",!0),uI(this,e[6]||"",!0),this.o=Oa(e[7]||"")):(this.h=!1,this.i=new Gl(null,this.h))}Hi.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Va(e,cI,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Va(e,cI,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Va(n,n.charAt(0)=="/"?b3:R3,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Va(n,x3)),t.join("")};function ar(t){return new Hi(t)}function Ud(t,e,n){t.j=n?Oa(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function jd(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function uI(t,e,n){e instanceof Gl?(t.i=e,N3(t.i,t.h)):(n||(e=Va(e,C3)),t.i=new Gl(e,t.h))}function pe(t,e,n){t.i.set(e,n)}function Qh(t){return pe(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Oa(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Va(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,k3),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function k3(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var cI=/[#\/\?@]/g,R3=/[#\?:]/g,b3=/[#\?]/g,C3=/[#\?@]/g,x3=/#/g;function Gl(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function gi(t){t.g||(t.g=new Map,t.h=0,t.i&&P3(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}O=Gl.prototype;O.add=function(t,e){gi(this),this.i=null,t=Yo(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function SP(t,e){gi(t),e=Yo(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function AP(t,e){return gi(t),e=Yo(t,e),t.g.has(e)}O.forEach=function(t,e){gi(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};O.ta=function(){gi(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let s=0;s<i.length;s++)n.push(e[r])}return n};O.Z=function(t){gi(this);let e=[];if(typeof t=="string")AP(this,t)&&(e=e.concat(this.g.get(Yo(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};O.set=function(t,e){return gi(this),this.i=null,t=Yo(this,t),AP(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};O.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function PP(t,e,n){SP(t,e),0<n.length&&(t.i=null,t.g.set(Yo(t,e),hv(n)),t.h+=n.length)}O.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function Yo(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function N3(t,e){e&&!t.j&&(gi(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(SP(this,r),PP(this,i,n))},t)),t.j=e}var D3=class{constructor(t,e){this.g=t,this.map=e}};function kP(t){this.l=t||O3,q.PerformanceNavigationTiming?(t=q.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(q.g&&q.g.Ka&&q.g.Ka()&&q.g.Ka().dc),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var O3=10;function RP(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function bP(t){return t.h?1:t.g?t.g.size:0}function ng(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Pv(t,e){t.g?t.g.add(e):t.h=e}function CP(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}kP.prototype.cancel=function(){if(this.i=xP(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function xP(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return hv(t.i)}var V3=class{stringify(t){return q.JSON.stringify(t,void 0)}parse(t){return q.JSON.parse(t,void 0)}};function L3(){this.g=new V3}function M3(t,e,n){const r=n||"";try{EP(t,function(i,s){let o=i;Tu(i)&&(o=_v(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function F3(t,e){const n=new qh;if(q.Image){const r=new Image;r.onload=_c(Ic,n,r,"TestLoadImage: loaded",!0,e),r.onerror=_c(Ic,n,r,"TestLoadImage: error",!1,e),r.onabort=_c(Ic,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=_c(Ic,n,r,"TestLoadImage: timeout",!1,e),q.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function Ic(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function Yh(t){this.l=t.ec||null,this.j=t.ob||!1}et(Yh,Tv);Yh.prototype.g=function(){return new Xh(this.l,this.j)};Yh.prototype.i=function(t){return function(){return t}}({});function Xh(t,e){Ze.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=kv,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}et(Xh,Ze);var kv=0;O=Xh.prototype;O.open=function(t,e){if(this.readyState!=kv)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Kl(this)};O.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||q).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};O.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,bu(this)),this.readyState=kv};O.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Kl(this)),this.g&&(this.readyState=3,Kl(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof q.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;NP(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function NP(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}O.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?bu(this):Kl(this),this.readyState==3&&NP(this)}};O.Za=function(t){this.g&&(this.response=this.responseText=t,bu(this))};O.Ya=function(t){this.g&&(this.response=t,bu(this))};O.ka=function(){this.g&&bu(this)};function bu(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Kl(t)}O.setRequestHeader=function(t,e){this.v.append(t,e)};O.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};O.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Kl(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Xh.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var U3=q.JSON.parse;function xe(t){Ze.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=DP,this.L=this.M=!1}et(xe,Ze);var DP="",j3=/^https?$/i,$3=["POST","PUT"];O=xe.prototype;O.Oa=function(t){this.M=t};O.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Jm.g(),this.C=this.u?lI(this.u):lI(Jm),this.g.onreadystatechange=yt(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(s){dI(this,s);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=q.FormData&&t instanceof q.FormData,!(0<=QA($3,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{LP(this),0<this.B&&((this.L=z3(this.g))?(this.g.timeout=this.B,this.g.ontimeout=yt(this.ua,this)):this.A=Ev(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){dI(this,s)}};function z3(t){return ko&&typeof t.timeout=="number"&&t.ontimeout!==void 0}O.ua=function(){typeof dv<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,ct(this,"timeout"),this.abort(8))};function dI(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,OP(t),Jh(t)}function OP(t){t.F||(t.F=!0,ct(t,"complete"),ct(t,"error"))}O.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,ct(this,"complete"),ct(this,"abort"),Jh(this))};O.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Jh(this,!0)),xe.$.N.call(this)};O.La=function(){this.s||(this.G||this.v||this.l?VP(this):this.kb())};O.kb=function(){VP(this)};function VP(t){if(t.h&&typeof dv<"u"&&(!t.C[1]||xn(t)!=4||t.da()!=2)){if(t.v&&xn(t)==4)Ev(t.La,0,t);else if(ct(t,"readystatechange"),xn(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=o===0){var i=String(t.I).match(TP)[1]||null;!i&&q.self&&q.self.location&&(i=q.self.location.protocol.slice(0,-1)),r=!j3.test(i?i.toLowerCase():"")}n=r}if(n)ct(t,"complete"),ct(t,"success");else{t.m=6;try{var s=2<xn(t)?t.g.statusText:""}catch{s=""}t.j=s+" ["+t.da()+"]",OP(t)}}finally{Jh(t)}}}}function Jh(t,e){if(t.g){LP(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||ct(t,"ready");try{n.onreadystatechange=r}catch{}}}function LP(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(q.clearTimeout(t.A),t.A=null)}O.isActive=function(){return!!this.g};function xn(t){return t.g?t.g.readyState:0}O.da=function(){try{return 2<xn(this)?this.g.status:-1}catch{return-1}};O.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};O.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),U3(e)}};function hI(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case DP:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function B3(t){const e={};t=(t.g&&2<=xn(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if(jl(t[r]))continue;var n=p3(t[r]);const i=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const s=e[i]||[];e[i]=s,s.push(n)}a3(e,function(r){return r.join(", ")})}O.Ia=function(){return this.m};O.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function MP(t){let e="";return pv(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function Rv(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=MP(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):pe(t,e,n))}function _a(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function FP(t){this.Ga=0,this.j=[],this.l=new qh,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=_a("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=_a("baseRetryDelayMs",5e3,t),this.hb=_a("retryDelaySeedMs",1e4,t),this.eb=_a("forwardChannelMaxRetries",2,t),this.xa=_a("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new kP(t&&t.concurrentRequestLimit),this.Ja=new L3,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}O=FP.prototype;O.ra=8;O.H=1;function bv(t){if(UP(t),t.H==3){var e=t.W++,n=ar(t.I);if(pe(n,"SID",t.K),pe(n,"RID",e),pe(n,"TYPE","terminate"),Cu(t,n),e=new ku(t,t.l,e),e.L=2,e.A=Qh(ar(n)),n=!1,q.navigator&&q.navigator.sendBeacon)try{n=q.navigator.sendBeacon(e.A.toString(),"")}catch{}!n&&q.Image&&(new Image().src=e.A,n=!0),n||(e.g=KP(e.l,null),e.g.ha(e.A)),e.G=Date.now(),Ru(e)}WP(t)}function Zh(t){t.g&&(xv(t),t.g.cancel(),t.g=null)}function UP(t){Zh(t),t.u&&(q.clearTimeout(t.u),t.u=null),$d(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&q.clearTimeout(t.m),t.m=null)}function ef(t){if(!RP(t.i)&&!t.m){t.m=!0;var e=t.Na;zl||aP(),Bl||(zl(),Bl=!0),wv.add(e,t),t.C=0}}function q3(t,e){return bP(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=Au(yt(t.Na,t,e),qP(t,t.C)),t.C++,!0)}O.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const i=new ku(this,this.l,t);let s=this.s;if(this.U&&(s?(s=ZA(s),eP(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=jP(this,i,e),n=ar(this.I),pe(n,"RID",t),pe(n,"CVER",22),this.F&&pe(n,"X-HTTP-Session-Id",this.F),Cu(this,n),s&&(this.O?e="headers="+encodeURIComponent(String(MP(s)))+"&"+e:this.o&&Rv(n,this.o,s)),Pv(this.i,i),this.bb&&pe(n,"TYPE","init"),this.P?(pe(n,"$req",e),pe(n,"SID","null"),i.aa=!0,eg(i,n,null)):eg(i,n,e),this.H=2}}else this.H==3&&(t?fI(this,t):this.j.length==0||RP(this.i)||fI(this))};function fI(t,e){var n;e?n=e.m:n=t.W++;const r=ar(t.I);pe(r,"SID",t.K),pe(r,"RID",n),pe(r,"AID",t.V),Cu(t,r),t.o&&t.s&&Rv(r,t.o,t.s),n=new ku(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=jP(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),Pv(t.i,n),eg(n,r,e)}function Cu(t,e){t.na&&pv(t.na,function(n,r){pe(e,r,n)}),t.h&&EP({},function(n,r){pe(e,r,n)})}function jP(t,e,n){n=Math.min(t.j.length,n);var r=t.h?yt(t.h.Va,t.h,t):null;e:{var i=t.j;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let u=i[l].g;const c=i[l].map;if(u-=s,0>u)s=Math.max(0,i[l].g-100),a=!1;else try{M3(c,o,"req"+u+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function $P(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;zl||aP(),Bl||(zl(),Bl=!0),wv.add(e,t),t.A=0}}function Cv(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=Au(yt(t.Ma,t),qP(t,t.A)),t.A++,!0)}O.Ma=function(){if(this.u=null,zP(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=Au(yt(this.jb,this),t)}};O.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,Tt(10),Zh(this),zP(this))};function xv(t){t.B!=null&&(q.clearTimeout(t.B),t.B=null)}function zP(t){t.g=new ku(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=ar(t.wa);pe(e,"RID","rpc"),pe(e,"SID",t.K),pe(e,"AID",t.V),pe(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&pe(e,"TO",t.qa),pe(e,"TYPE","xmlhttp"),Cu(t,e),t.o&&t.s&&Rv(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.A=Qh(ar(e)),n.u=null,n.S=!0,vP(n,t)}O.ib=function(){this.v!=null&&(this.v=null,Zh(this),Cv(this),Tt(19))};function $d(t){t.v!=null&&(q.clearTimeout(t.v),t.v=null)}function BP(t,e){var n=null;if(t.g==e){$d(t),xv(t),t.g=null;var r=2}else if(ng(t.i,e))n=e.F,CP(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.u?e.u.length:0,e=Date.now()-e.G;var i=t.C;r=Wh(),ct(r,new fP(r,n)),ef(t)}else $P(t);else if(i=e.s,i==3||i==0&&0<e.ca||!(r==1&&q3(t,e)||r==2&&Cv(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:ji(t,5);break;case 4:ji(t,10);break;case 3:ji(t,6);break;default:ji(t,2)}}}function qP(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function ji(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=yt(t.pb,t);n||(n=new Hi("//www.google.com/images/cleardot.gif"),q.location&&q.location.protocol=="http"||Ud(n,"https"),Qh(n)),F3(n.toString(),r)}else Tt(2);t.H=0,t.h&&t.h.za(e),WP(t),UP(t)}O.pb=function(t){t?(this.l.info("Successfully pinged google.com"),Tt(2)):(this.l.info("Failed to ping google.com"),Tt(1))};function WP(t){if(t.H=0,t.ma=[],t.h){const e=xP(t.i);(e.length!=0||t.j.length!=0)&&(rI(t.ma,e),rI(t.ma,t.j),t.i.i.length=0,hv(t.j),t.j.length=0),t.h.ya()}}function GP(t,e,n){var r=n instanceof Hi?ar(n):new Hi(n);if(r.g!="")e&&(r.g=e+"."+r.g),jd(r,r.m);else{var i=q.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new Hi(null);r&&Ud(s,r),e&&(s.g=e),i&&jd(s,i),n&&(s.l=n),r=s}return n=t.F,e=t.Da,n&&e&&pe(r,n,e),pe(r,"VER",t.ra),Cu(t,r),r}function KP(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=t.Ha&&!t.va?new xe(new Yh({ob:n})):new xe(t.va),e.Oa(t.J),e}O.isActive=function(){return!!this.h&&this.h.isActive(this)};function HP(){}O=HP.prototype;O.Ba=function(){};O.Aa=function(){};O.za=function(){};O.ya=function(){};O.isActive=function(){return!0};O.Va=function(){};function zd(){if(ko&&!(10<=Number(r3)))throw Error("Environmental error: no available transport.")}zd.prototype.g=function(t,e){return new Kt(t,e)};function Kt(t,e){Ze.call(this),this.g=new FP(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!jl(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!jl(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Xo(this)}et(Kt,Ze);Kt.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;Tt(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=GP(t,null,t.Y),ef(t)};Kt.prototype.close=function(){bv(this.g)};Kt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=_v(t),t=n);e.j.push(new D3(e.fb++,t)),e.H==3&&ef(e)};Kt.prototype.N=function(){this.g.h=null,delete this.j,bv(this.g),delete this.g,Kt.$.N.call(this)};function QP(t){Sv.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}et(QP,Sv);function YP(){Av.call(this),this.status=1}et(YP,Av);function Xo(t){this.g=t}et(Xo,HP);Xo.prototype.Ba=function(){ct(this.g,"a")};Xo.prototype.Aa=function(t){ct(this.g,new QP(t))};Xo.prototype.za=function(t){ct(this.g,new YP)};Xo.prototype.ya=function(){ct(this.g,"b")};function W3(){this.blockSize=-1}function _n(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}et(_n,W3);_n.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function wp(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var i=0;16>i;++i)r[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var s=t.g[3],o=e+(s^n&(i^s))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[1]+3905402710&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[5]+1200080426&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[9]+2336552879&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[13]+4254626195&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(i^s&(n^i))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[6]+3225465664&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[10]+38016083&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[14]+3275163606&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[2]+4243563512&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(n^i^s)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[8]+2272392833&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[4]+1272893353&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[0]+3936430074&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[12]+3873151461&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(i^(n|~s))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[7]+1126891415&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[3]+2399980690&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[15]+4264355552&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[11]+3174756917&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+s&4294967295}_n.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,i=this.h,s=0;s<e;){if(i==0)for(;s<=n;)wp(this,t,s),s+=this.blockSize;if(typeof t=="string"){for(;s<e;)if(r[i++]=t.charCodeAt(s++),i==this.blockSize){wp(this,r),i=0;break}}else for(;s<e;)if(r[i++]=t[s++],i==this.blockSize){wp(this,r),i=0;break}}this.h=i,this.i+=e};_n.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function le(t,e){this.h=e;for(var n=[],r=!0,i=t.length-1;0<=i;i--){var s=t[i]|0;r&&s==e||(n[i]=s,r=!1)}this.g=n}var G3={};function Nv(t){return-128<=t&&128>t?e3(t,function(e){return new le([e|0],0>e?-1:0)}):new le([t|0],0>t?-1:0)}function Nn(t){if(isNaN(t)||!isFinite(t))return fo;if(0>t)return st(Nn(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=rg;return new le(e,0)}function XP(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return st(XP(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Nn(Math.pow(e,8)),r=fo,i=0;i<t.length;i+=8){var s=Math.min(8,t.length-i),o=parseInt(t.substring(i,i+s),e);8>s?(s=Nn(Math.pow(e,s)),r=r.R(s).add(Nn(o))):(r=r.R(n),r=r.add(Nn(o)))}return r}var rg=4294967296,fo=Nv(0),ig=Nv(1),pI=Nv(16777216);O=le.prototype;O.ea=function(){if(en(this))return-st(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:rg+r)*e,e*=rg}return t};O.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(Hn(this))return"0";if(en(this))return"-"+st(this).toString(t);for(var e=Nn(Math.pow(t,6)),n=this,r="";;){var i=qd(n,e).g;n=Bd(n,i.R(e));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=i,Hn(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};O.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function Hn(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function en(t){return t.h==-1}O.X=function(t){return t=Bd(this,t),en(t)?-1:Hn(t)?0:1};function st(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new le(n,~t.h).add(ig)}O.abs=function(){return en(this)?st(this):this};O.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,i=0;i<=e;i++){var s=r+(this.D(i)&65535)+(t.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(t.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new le(n,n[n.length-1]&-2147483648?-1:0)};function Bd(t,e){return t.add(st(e))}O.R=function(t){if(Hn(this)||Hn(t))return fo;if(en(this))return en(t)?st(this).R(st(t)):st(st(this).R(t));if(en(t))return st(this.R(st(t)));if(0>this.X(pI)&&0>t.X(pI))return Nn(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<t.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(i)>>>16,l=t.D(i)&65535;n[2*r+2*i]+=o*l,Ec(n,2*r+2*i),n[2*r+2*i+1]+=s*l,Ec(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,Ec(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,Ec(n,2*r+2*i+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new le(n,0)};function Ec(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function wa(t,e){this.g=t,this.h=e}function qd(t,e){if(Hn(e))throw Error("division by zero");if(Hn(t))return new wa(fo,fo);if(en(t))return e=qd(st(t),e),new wa(st(e.g),st(e.h));if(en(e))return e=qd(t,st(e)),new wa(st(e.g),e.h);if(30<t.g.length){if(en(t)||en(e))throw Error("slowDivide_ only works with positive integers.");for(var n=ig,r=e;0>=r.X(t);)n=mI(n),r=mI(r);var i=bs(n,1),s=bs(r,1);for(r=bs(r,2),n=bs(n,2);!Hn(r);){var o=s.add(r);0>=o.X(t)&&(i=i.add(n),s=o),r=bs(r,1),n=bs(n,1)}return e=Bd(t,i.R(e)),new wa(i,e)}for(i=fo;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=Nn(n),o=s.R(e);en(o)||0<o.X(t);)n-=r,s=Nn(n),o=s.R(e);Hn(s)&&(s=ig),i=i.add(s),t=Bd(t,o)}return new wa(i,t)}O.gb=function(t){return qd(this,t).h};O.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new le(n,this.h&t.h)};O.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new le(n,this.h|t.h)};O.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new le(n,this.h^t.h)};function mI(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new le(n,t.h)}function bs(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,i=[],s=0;s<r;s++)i[s]=0<e?t.D(s+n)>>>e|t.D(s+n+1)<<32-e:t.D(s+n);return new le(i,t.h)}zd.prototype.createWebChannel=zd.prototype.g;Kt.prototype.send=Kt.prototype.u;Kt.prototype.open=Kt.prototype.m;Kt.prototype.close=Kt.prototype.close;Gh.NO_ERROR=0;Gh.TIMEOUT=8;Gh.HTTP_ERROR=6;pP.COMPLETE="complete";mP.EventType=Pu;Pu.OPEN="a";Pu.CLOSE="b";Pu.ERROR="c";Pu.MESSAGE="d";Ze.prototype.listen=Ze.prototype.O;xe.prototype.listenOnce=xe.prototype.P;xe.prototype.getLastError=xe.prototype.Sa;xe.prototype.getLastErrorCode=xe.prototype.Ia;xe.prototype.getStatus=xe.prototype.da;xe.prototype.getResponseJson=xe.prototype.Wa;xe.prototype.getResponseText=xe.prototype.ja;xe.prototype.send=xe.prototype.ha;xe.prototype.setWithCredentials=xe.prototype.Oa;_n.prototype.digest=_n.prototype.l;_n.prototype.reset=_n.prototype.reset;_n.prototype.update=_n.prototype.j;le.prototype.add=le.prototype.add;le.prototype.multiply=le.prototype.R;le.prototype.modulo=le.prototype.gb;le.prototype.compare=le.prototype.X;le.prototype.toNumber=le.prototype.ea;le.prototype.toString=le.prototype.toString;le.prototype.getBits=le.prototype.D;le.fromNumber=Nn;le.fromString=XP;var K3=function(){return new zd},H3=function(){return Wh()},Ip=Gh,Q3=pP,Y3=Is,gI={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},Tc=mP,X3=xe,J3=_n,po=le;const yI="@firebase/firestore";/**
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
 */const ti=new kh("@firebase/firestore");function Os(){return ti.logLevel}function Z3(t){ti.setLogLevel(t)}function P(t,...e){if(ti.logLevel<=X.DEBUG){const n=e.map(Dv);ti.debug(`Firestore (${Jo}): ${t}`,...n)}}function Me(t,...e){if(ti.logLevel<=X.ERROR){const n=e.map(Dv);ti.error(`Firestore (${Jo}): ${t}`,...n)}}function wn(t,...e){if(ti.logLevel<=X.WARN){const n=e.map(Dv);ti.warn(`Firestore (${Jo}): ${t}`,...n)}}function Dv(t){if(typeof t=="string")return t;try{/**
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
 */function V(t="Unexpected state"){const e=`FIRESTORE (${Jo}) INTERNAL ASSERTION FAILED: `+t;throw Me(e),new Error(e)}function $(t,e){t||V()}function e5(t,e){t||V()}function D(t,e){return t}/**
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
 */const T={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class A extends At{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class JP{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class t5{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Ye.UNAUTHENTICATED))}shutdown(){}}class n5{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class r5{constructor(e){this.t=e,this.currentUser=Ye.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new Je;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Je,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{P("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(P("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Je)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(P("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?($(typeof r.accessToken=="string"),new JP(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return $(e===null||typeof e=="string"),new Ye(e)}}class i5{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=Ye.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class s5{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new i5(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Ye.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class o5{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class a5{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=s=>{s.error!=null&&P("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,P("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{P("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):P("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?($(typeof n.token=="string"),this.R=n.token,new o5(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function l5(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class ZP{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=l5(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function W(t,e){return t<e?-1:t>e?1:0}function Ro(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}function ek(t){return t+"\0"}/**
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
 */class Ie{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new A(T.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new A(T.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new A(T.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new A(T.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ie.fromMillis(Date.now())}static fromDate(e){return Ie.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Ie(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?W(this.nanoseconds,e.nanoseconds):W(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class Hl{constructor(e,n,r){n===void 0?n=0:n>e.length&&V(),r===void 0?r=e.length-n:r>e.length-n&&V(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Hl.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Hl?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Z extends Hl{construct(e,n,r){return new Z(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new A(T.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Z(n)}static emptyPath(){return new Z([])}}const u5=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class _e extends Hl{construct(e,n,r){return new _e(e,n,r)}static isValidIdentifier(e){return u5.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),_e.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new _e(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new A(T.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new A(T.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new A(T.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new A(T.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new _e(n)}static emptyPath(){return new _e([])}}/**
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
 */class N{constructor(e){this.path=e}static fromPath(e){return new N(Z.fromString(e))}static fromName(e){return new N(Z.fromString(e).popFirst(5))}static empty(){return new N(Z.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Z.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Z.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new N(new Z(e.slice()))}}/**
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
 */class Wd{constructor(e,n,r,i){this.indexId=e,this.collectionGroup=n,this.fields=r,this.indexState=i}}function sg(t){return t.fields.find(e=>e.kind===2)}function ki(t){return t.fields.filter(e=>e.kind!==2)}Wd.UNKNOWN_ID=-1;class Kc{constructor(e,n){this.fieldPath=e,this.kind=n}}class Ql{constructor(e,n){this.sequenceNumber=e,this.offset=n}static empty(){return new Ql(0,Ht.min())}}function tk(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=z.fromTimestamp(r===1e9?new Ie(n+1,0):new Ie(n,r));return new Ht(i,N.empty(),e)}function nk(t){return new Ht(t.readTime,t.key,-1)}class Ht{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Ht(z.min(),N.empty(),-1)}static max(){return new Ht(z.max(),N.empty(),-1)}}function Ov(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=N.comparator(t.documentKey,e.documentKey),n!==0?n:W(t.largestBatchId,e.largestBatchId))}/**
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
 */const rk="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class ik{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function yi(t){if(t.code!==T.FAILED_PRECONDITION||t.message!==rk)throw t;P("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class tf{constructor(e,n){this.action=e,this.transaction=n,this.aborted=!1,this.V=new Je,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{n.error?this.V.reject(new el(e,n.error)):this.V.resolve()},this.transaction.onerror=r=>{const i=Vv(r.target.error);this.V.reject(new el(e,i))}}static open(e,n,r,i){try{return new tf(n,e.transaction(i,r))}catch(s){throw new el(n,s)}}get m(){return this.V.promise}abort(e){e&&this.V.reject(e),this.aborted||(P("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const n=this.transaction.objectStore(e);return new d5(n)}}class nn{constructor(e,n,r){this.name=e,this.version=n,this.p=r,nn.S(Ee())===12.2&&Me("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return P("SimpleDb","Removing database:",e),Ri(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!Cl())return!1;if(nn.C())return!0;const e=Ee(),n=nn.S(e),r=0<n&&n<10,i=nn.v(e),s=0<i&&i<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||s)}static C(){var e;return typeof process<"u"&&((e=process.__PRIVATE_env)===null||e===void 0?void 0:e.F)==="YES"}static M(e,n){return e.store(n)}static S(e){const n=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=n?n[1].split("_").slice(0,2).join("."):"-1";return Number(r)}static v(e){const n=e.match(/Android ([\d.]+)/i),r=n?n[1].split(".").slice(0,2).join("."):"-1";return Number(r)}async O(e){return this.db||(P("SimpleDb","Opening database:",this.name),this.db=await new Promise((n,r)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=s=>{const o=s.target.result;n(o)},i.onblocked=()=>{r(new el(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=s=>{const o=s.target.error;o.name==="VersionError"?r(new A(T.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new A(T.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new el(e,o))},i.onupgradeneeded=s=>{P("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',s.oldVersion);const o=s.target.result;this.p.N(o,i.transaction,s.oldVersion,this.version).next(()=>{P("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.B&&(this.db.onversionchange=n=>this.B(n)),this.db}L(e){this.B=e,this.db&&(this.db.onversionchange=n=>e(n))}async runTransaction(e,n,r,i){const s=n==="readonly";let o=0;for(;;){++o;try{this.db=await this.O(e);const a=tf.open(this.db,e,s?"readonly":"readwrite",r),l=i(a).next(u=>(a.g(),u)).catch(u=>(a.abort(u),I.reject(u))).toPromise();return l.catch(()=>{}),await a.m,l}catch(a){const l=a,u=l.name!=="FirebaseError"&&o<3;if(P("SimpleDb","Transaction failed with error:",l.message,"Retrying:",u),this.close(),!u)return Promise.reject(l)}}}close(){this.db&&this.db.close(),this.db=void 0}}class c5{constructor(e){this.k=e,this.q=!1,this.K=null}get isDone(){return this.q}get $(){return this.K}set cursor(e){this.k=e}done(){this.q=!0}U(e){this.K=e}delete(){return Ri(this.k.delete())}}class el extends A{constructor(e,n){super(T.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${n}`),this.name="IndexedDbTransactionError"}}function vi(t){return t.name==="IndexedDbTransactionError"}class d5{constructor(e){this.store=e}put(e,n){let r;return n!==void 0?(P("SimpleDb","PUT",this.store.name,e,n),r=this.store.put(n,e)):(P("SimpleDb","PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),Ri(r)}add(e){return P("SimpleDb","ADD",this.store.name,e,e),Ri(this.store.add(e))}get(e){return Ri(this.store.get(e)).next(n=>(n===void 0&&(n=null),P("SimpleDb","GET",this.store.name,e,n),n))}delete(e){return P("SimpleDb","DELETE",this.store.name,e),Ri(this.store.delete(e))}count(){return P("SimpleDb","COUNT",this.store.name),Ri(this.store.count())}W(e,n){const r=this.options(e,n),i=r.index?this.store.index(r.index):this.store;if(typeof i.getAll=="function"){const s=i.getAll(r.range);return new I((o,a)=>{s.onerror=l=>{a(l.target.error)},s.onsuccess=l=>{o(l.target.result)}})}{const s=this.cursor(r),o=[];return this.G(s,(a,l)=>{o.push(l)}).next(()=>o)}}j(e,n){const r=this.store.getAll(e,n===null?void 0:n);return new I((i,s)=>{r.onerror=o=>{s(o.target.error)},r.onsuccess=o=>{i(o.target.result)}})}H(e,n){P("SimpleDb","DELETE ALL",this.store.name);const r=this.options(e,n);r.J=!1;const i=this.cursor(r);return this.G(i,(s,o,a)=>a.delete())}Y(e,n){let r;n?r=e:(r={},n=e);const i=this.cursor(r);return this.G(i,n)}Z(e){const n=this.cursor({});return new I((r,i)=>{n.onerror=s=>{const o=Vv(s.target.error);i(o)},n.onsuccess=s=>{const o=s.target.result;o?e(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}G(e,n){const r=[];return new I((i,s)=>{e.onerror=o=>{s(o.target.error)},e.onsuccess=o=>{const a=o.target.result;if(!a)return void i();const l=new c5(a),u=n(a.primaryKey,a.value,l);if(u instanceof I){const c=u.catch(d=>(l.done(),I.reject(d)));r.push(c)}l.isDone?i():l.$===null?a.continue():a.continue(l.$)}}).next(()=>I.waitFor(r))}options(e,n){let r;return e!==void 0&&(typeof e=="string"?r=e:n=e),{index:r,range:n}}cursor(e){let n="next";if(e.reverse&&(n="prev"),e.index){const r=this.store.index(e.index);return e.J?r.openKeyCursor(e.range,n):r.openCursor(e.range,n)}return this.store.openCursor(e.range,n)}}function Ri(t){return new I((e,n)=>{t.onsuccess=r=>{const i=r.target.result;e(i)},t.onerror=r=>{const i=Vv(r.target.error);n(i)}})}let vI=!1;function Vv(t){const e=nn.S(Ee());if(e>=12.2&&e<13){const n="An internal error was encountered in the Indexed Database server";if(t.message.indexOf(n)>=0){const r=new A("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${n}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return vI||(vI=!0,setTimeout(()=>{throw r},0)),r}}return t}class h5{constructor(e,n){this.asyncQueue=e,this.X=n,this.task=null}start(){this.ee(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}ee(e){P("IndexBackfiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{P("IndexBackfiller",`Documents written: ${await this.X.te()}`)}catch(n){vi(n)?P("IndexBackfiller","Ignoring IndexedDB error during index backfill: ",n):await yi(n)}await this.ee(6e4)})}}class f5{constructor(e,n){this.localStore=e,this.persistence=n}async te(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",n=>this.ne(n,e))}ne(e,n){const r=new Set;let i=n,s=!0;return I.doWhile(()=>s===!0&&i>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(o=>{if(o!==null&&!r.has(o))return P("IndexBackfiller",`Processing collection: ${o}`),this.re(e,o,i).next(a=>{i-=a,r.add(o)});s=!1})).next(()=>n-i)}re(e,n,r){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,n).next(i=>this.localStore.localDocuments.getNextDocuments(e,n,i,r).next(s=>{const o=s.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next(()=>this.ie(i,s)).next(a=>(P("IndexBackfiller",`Updating offset: ${a}`),this.localStore.indexManager.updateCollectionGroup(e,n,a))).next(()=>o.size)}))}ie(e,n){let r=e;return n.changes.forEach((i,s)=>{const o=nk(s);Ov(o,r)>0&&(r=o)}),new Ht(r.readTime,r.documentKey,Math.max(n.batchId,e.largestBatchId))}}/**
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
 */class Vt{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.se(r),this.oe=r=>n.writeSequenceNumber(r))}se(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.oe&&this.oe(e),e}}Vt._e=-1;function xu(t){return t==null}function Yl(t){return t===0&&1/t==-1/0}function sk(t){return typeof t=="number"&&Number.isInteger(t)&&!Yl(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function Pt(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=_I(e)),e=p5(t.get(n),e);return _I(e)}function p5(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const s=t.charAt(i);switch(s){case"\0":n+="";break;case"":n+="";break;default:n+=s}}return n}function _I(t){return t+""}function Dn(t){const e=t.length;if($(e>=2),e===2)return $(t.charAt(0)===""&&t.charAt(1)===""),Z.emptyPath();const n=e-2,r=[];let i="";for(let s=0;s<e;){const o=t.indexOf("",s);switch((o<0||o>n)&&V(),t.charAt(o+1)){case"":const a=t.substring(s,o);let l;i.length===0?l=a:(i+=a,l=i,i=""),r.push(l);break;case"":i+=t.substring(s,o),i+="\0";break;case"":i+=t.substring(s,o+1);break;default:V()}s=o+2}return new Z(r)}/**
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
 */const wI=["userId","batchId"];/**
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
 */function Hc(t,e){return[t,Pt(e)]}function ok(t,e,n){return[t,Pt(e),n]}const m5={},g5=["prefixPath","collectionGroup","readTime","documentId"],y5=["prefixPath","collectionGroup","documentId"],v5=["collectionGroup","readTime","prefixPath","documentId"],_5=["canonicalId","targetId"],w5=["targetId","path"],I5=["path","targetId"],E5=["collectionId","parent"],T5=["indexId","uid"],S5=["uid","sequenceNumber"],A5=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],P5=["indexId","uid","orderedDocumentKey"],k5=["userId","collectionPath","documentId"],R5=["userId","collectionPath","largestBatchId"],b5=["userId","collectionGroup","largestBatchId"],ak=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],C5=[...ak,"documentOverlays"],lk=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],uk=lk,x5=[...uk,"indexConfiguration","indexState","indexEntries"];/**
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
 */class og extends ik{constructor(e,n){super(),this.ae=e,this.currentSequenceNumber=n}}function tt(t,e){const n=D(t);return nn.M(n.ae,e)}/**
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
 */function II(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Es(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function ck(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class de{constructor(e,n){this.comparator=e,this.root=n||it.EMPTY}insert(e,n){return new de(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,it.BLACK,null,null))}remove(e){return new de(this.comparator,this.root.remove(e,this.comparator).copy(null,null,it.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Sc(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Sc(this.root,e,this.comparator,!1)}getReverseIterator(){return new Sc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Sc(this.root,e,this.comparator,!0)}}class Sc{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class it{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??it.RED,this.left=i??it.EMPTY,this.right=s??it.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new it(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return it.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return it.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,it.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,it.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw V();const e=this.left.check();if(e!==this.right.check())throw V();return e+(this.isRed()?0:1)}}it.EMPTY=null,it.RED=!0,it.BLACK=!1;it.EMPTY=new class{constructor(){this.size=0}get key(){throw V()}get value(){throw V()}get color(){throw V()}get left(){throw V()}get right(){throw V()}copy(e,n,r,i,s){return this}insert(e,n,r){return new it(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class ue{constructor(e){this.comparator=e,this.data=new de(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new EI(this.data.getIterator())}getIteratorFrom(e){return new EI(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof ue)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new ue(this.comparator);return n.data=e,n}}class EI{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function Cs(t){return t.hasNext()?t.getNext():void 0}/**
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
 */class dk extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */function N5(){return typeof atob<"u"}/**
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
 */class Ge{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new dk("Invalid base64 string: "+s):s}}(e);return new Ge(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new Ge(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return W(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ge.EMPTY_BYTE_STRING=new Ge("");const D5=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ni(t){if($(!!t),typeof t=="string"){let e=0;const n=D5.exec(t);if($(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Re(t.seconds),nanos:Re(t.nanos)}}function Re(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function ri(t){return typeof t=="string"?Ge.fromBase64String(t):Ge.fromUint8Array(t)}/**
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
 */function nf(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Lv(t){const e=t.mapValue.fields.__previous_value__;return nf(e)?Lv(e):e}function Xl(t){const e=ni(t.mapValue.fields.__local_write_time__.timestampValue);return new Ie(e.seconds,e.nanos)}/**
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
 */class O5{constructor(e,n,r,i,s,o,a,l,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=u}}class ii{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new ii("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof ii&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Vr={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},Qc={nullValue:"NULL_VALUE"};function os(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?nf(t)?4:hk(t)?9007199254740991:10:V()}function $n(t,e){if(t===e)return!0;const n=os(t);if(n!==os(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Xl(t).isEqual(Xl(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=ni(i.timestampValue),a=ni(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return ri(i.bytesValue).isEqual(ri(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Re(i.geoPointValue.latitude)===Re(s.geoPointValue.latitude)&&Re(i.geoPointValue.longitude)===Re(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Re(i.integerValue)===Re(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Re(i.doubleValue),a=Re(s.doubleValue);return o===a?Yl(o)===Yl(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return Ro(t.arrayValue.values||[],e.arrayValue.values||[],$n);case 10:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(II(o)!==II(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!$n(o[l],a[l])))return!1;return!0}(t,e);default:return V()}}function Jl(t,e){return(t.values||[]).find(n=>$n(n,e))!==void 0}function si(t,e){if(t===e)return 0;const n=os(t),r=os(e);if(n!==r)return W(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return W(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=Re(s.integerValue||s.doubleValue),l=Re(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return TI(t.timestampValue,e.timestampValue);case 4:return TI(Xl(t),Xl(e));case 5:return W(t.stringValue,e.stringValue);case 6:return function(s,o){const a=ri(s),l=ri(o);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),l=o.split("/");for(let u=0;u<a.length&&u<l.length;u++){const c=W(a[u],l[u]);if(c!==0)return c}return W(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=W(Re(s.latitude),Re(o.latitude));return a!==0?a:W(Re(s.longitude),Re(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,o){const a=s.values||[],l=o.values||[];for(let u=0;u<a.length&&u<l.length;++u){const c=si(a[u],l[u]);if(c)return c}return W(a.length,l.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,o){if(s===Vr.mapValue&&o===Vr.mapValue)return 0;if(s===Vr.mapValue)return 1;if(o===Vr.mapValue)return-1;const a=s.fields||{},l=Object.keys(a),u=o.fields||{},c=Object.keys(u);l.sort(),c.sort();for(let d=0;d<l.length&&d<c.length;++d){const h=W(l[d],c[d]);if(h!==0)return h;const f=si(a[l[d]],u[c[d]]);if(f!==0)return f}return W(l.length,c.length)}(t.mapValue,e.mapValue);default:throw V()}}function TI(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return W(t,e);const n=ni(t),r=ni(e),i=W(n.seconds,r.seconds);return i!==0?i:W(n.nanos,r.nanos)}function bo(t){return ag(t)}function ag(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=ni(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return ri(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return N.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=ag(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${ag(n.fields[o])}`;return i+"}"}(t.mapValue):V()}function as(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function lg(t){return!!t&&"integerValue"in t}function Zl(t){return!!t&&"arrayValue"in t}function SI(t){return!!t&&"nullValue"in t}function AI(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Yc(t){return!!t&&"mapValue"in t}function tl(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Es(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=tl(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=tl(t.arrayValue.values[n]);return e}return Object.assign({},t)}function hk(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}function V5(t){return"nullValue"in t?Qc:"booleanValue"in t?{booleanValue:!1}:"integerValue"in t||"doubleValue"in t?{doubleValue:NaN}:"timestampValue"in t?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in t?{stringValue:""}:"bytesValue"in t?{bytesValue:""}:"referenceValue"in t?as(ii.empty(),N.empty()):"geoPointValue"in t?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in t?{arrayValue:{}}:"mapValue"in t?{mapValue:{}}:V()}function L5(t){return"nullValue"in t?{booleanValue:!1}:"booleanValue"in t?{doubleValue:NaN}:"integerValue"in t||"doubleValue"in t?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in t?{stringValue:""}:"stringValue"in t?{bytesValue:""}:"bytesValue"in t?as(ii.empty(),N.empty()):"referenceValue"in t?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in t?{arrayValue:{}}:"arrayValue"in t?{mapValue:{}}:"mapValue"in t?Vr:V()}function PI(t,e){const n=si(t.value,e.value);return n!==0?n:t.inclusive&&!e.inclusive?-1:!t.inclusive&&e.inclusive?1:0}function kI(t,e){const n=si(t.value,e.value);return n!==0?n:t.inclusive&&!e.inclusive?1:!t.inclusive&&e.inclusive?-1:0}/**
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
 */class ot{constructor(e){this.value=e}static empty(){return new ot({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Yc(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=tl(n)}setAll(e){let n=_e.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=tl(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Yc(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return $n(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Yc(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Es(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new ot(tl(this.value))}}function fk(t){const e=[];return Es(t.fields,(n,r)=>{const i=new _e([n]);if(Yc(r)){const s=fk(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Lt(e)}/**
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
 */class oi{constructor(e,n){this.position=e,this.inclusive=n}}function RI(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=N.comparator(N.fromName(o.referenceValue),n.key):r=si(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function bI(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!$n(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class eu{constructor(e,n="asc"){this.field=e,this.dir=n}}function M5(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class pk{}class ee extends pk{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new F5(e,n,r):n==="array-contains"?new $5(e,r):n==="in"?new wk(e,r):n==="not-in"?new z5(e,r):n==="array-contains-any"?new B5(e,r):new ee(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new U5(e,r):new j5(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(si(n,this.value)):n!==null&&os(this.value)===os(n)&&this.matchesComparison(si(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return V()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class oe extends pk{constructor(e,n){super(),this.filters=e,this.op=n,this.ue=null}static create(e,n){return new oe(e,n)}matches(e){return Co(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ue!==null||(this.ue=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ue}getFilters(){return Object.assign([],this.filters)}}function Co(t){return t.op==="and"}function ug(t){return t.op==="or"}function Mv(t){return mk(t)&&Co(t)}function mk(t){for(const e of t.filters)if(e instanceof oe)return!1;return!0}function cg(t){if(t instanceof ee)return t.field.canonicalString()+t.op.toString()+bo(t.value);if(Mv(t))return t.filters.map(e=>cg(e)).join(",");{const e=t.filters.map(n=>cg(n)).join(",");return`${t.op}(${e})`}}function gk(t,e){return t instanceof ee?function(r,i){return i instanceof ee&&r.op===i.op&&r.field.isEqual(i.field)&&$n(r.value,i.value)}(t,e):t instanceof oe?function(r,i){return i instanceof oe&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&gk(o,i.filters[a]),!0):!1}(t,e):void V()}function yk(t,e){const n=t.filters.concat(e);return oe.create(n,t.op)}function vk(t){return t instanceof ee?function(n){return`${n.field.canonicalString()} ${n.op} ${bo(n.value)}`}(t):t instanceof oe?function(n){return n.op.toString()+" {"+n.getFilters().map(vk).join(" ,")+"}"}(t):"Filter"}class F5 extends ee{constructor(e,n,r){super(e,n,r),this.key=N.fromName(r.referenceValue)}matches(e){const n=N.comparator(e.key,this.key);return this.matchesComparison(n)}}class U5 extends ee{constructor(e,n){super(e,"in",n),this.keys=_k("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class j5 extends ee{constructor(e,n){super(e,"not-in",n),this.keys=_k("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function _k(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>N.fromName(r.referenceValue))}class $5 extends ee{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Zl(n)&&Jl(n.arrayValue,this.value)}}class wk extends ee{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Jl(this.value.arrayValue,n)}}class z5 extends ee{constructor(e,n){super(e,"not-in",n)}matches(e){if(Jl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Jl(this.value.arrayValue,n)}}class B5 extends ee{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Zl(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Jl(this.value.arrayValue,r))}}/**
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
 */class q5{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ce=null}}function dg(t,e=null,n=[],r=[],i=null,s=null,o=null){return new q5(t,e,n,r,i,s,o)}function ls(t){const e=D(t);if(e.ce===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>cg(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),xu(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>bo(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>bo(r)).join(",")),e.ce=n}return e.ce}function Nu(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!M5(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!gk(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!bI(t.startAt,e.startAt)&&bI(t.endAt,e.endAt)}function Gd(t){return N.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}function Kd(t,e){return t.filters.filter(n=>n instanceof ee&&n.field.isEqual(e))}function CI(t,e,n){let r=Qc,i=!0;for(const s of Kd(t,e)){let o=Qc,a=!0;switch(s.op){case"<":case"<=":o=V5(s.value);break;case"==":case"in":case">=":o=s.value;break;case">":o=s.value,a=!1;break;case"!=":case"not-in":o=Qc}PI({value:r,inclusive:i},{value:o,inclusive:a})<0&&(r=o,i=a)}if(n!==null){for(let s=0;s<t.orderBy.length;++s)if(t.orderBy[s].field.isEqual(e)){const o=n.position[s];PI({value:r,inclusive:i},{value:o,inclusive:n.inclusive})<0&&(r=o,i=n.inclusive);break}}return{value:r,inclusive:i}}function xI(t,e,n){let r=Vr,i=!0;for(const s of Kd(t,e)){let o=Vr,a=!0;switch(s.op){case">=":case">":o=L5(s.value),a=!1;break;case"==":case"in":case"<=":o=s.value;break;case"<":o=s.value,a=!1;break;case"!=":case"not-in":o=Vr}kI({value:r,inclusive:i},{value:o,inclusive:a})>0&&(r=o,i=a)}if(n!==null){for(let s=0;s<t.orderBy.length;++s)if(t.orderBy[s].field.isEqual(e)){const o=n.position[s];kI({value:r,inclusive:i},{value:o,inclusive:n.inclusive})>0&&(r=o,i=n.inclusive);break}}return{value:r,inclusive:i}}/**
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
 */class fr{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.le=null,this.he=null,this.Pe=null,this.startAt,this.endAt}}function Ik(t,e,n,r,i,s,o,a){return new fr(t,e,n,r,i,s,o,a)}function Zo(t){return new fr(t)}function NI(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Fv(t){return t.collectionGroup!==null}function mo(t){const e=D(t);if(e.le===null){e.le=[];const n=new Set;for(const s of e.explicitOrderBy)e.le.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new ue(_e.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(u=>{u.isInequality()&&(a=a.add(u.field))})}),a})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.le.push(new eu(s,r))}),n.has(_e.keyField().canonicalString())||e.le.push(new eu(_e.keyField(),r))}return e.le}function kt(t){const e=D(t);return e.he||(e.he=W5(e,mo(t))),e.he}function W5(t,e){if(t.limitType==="F")return dg(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new eu(i.field,s)});const n=t.endAt?new oi(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new oi(t.startAt.position,t.startAt.inclusive):null;return dg(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function hg(t,e){const n=t.filters.concat([e]);return new fr(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Hd(t,e,n){return new fr(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Du(t,e){return Nu(kt(t),kt(e))&&t.limitType===e.limitType}function Ek(t){return`${ls(kt(t))}|lt:${t.limitType}`}function Vs(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>vk(i)).join(", ")}]`),xu(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>bo(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>bo(i)).join(",")),`Target(${r})`}(kt(t))}; limitType=${t.limitType})`}function Ou(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):N.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of mo(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,a,l){const u=RI(o,a,l);return o.inclusive?u<=0:u<0}(r.startAt,mo(r),i)||r.endAt&&!function(o,a,l){const u=RI(o,a,l);return o.inclusive?u>=0:u>0}(r.endAt,mo(r),i))}(t,e)}function Tk(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Sk(t){return(e,n)=>{let r=!1;for(const i of mo(t)){const s=G5(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function G5(t,e,n){const r=t.field.isKeyField()?N.comparator(e.key,n.key):function(s,o,a){const l=o.data.field(s),u=a.data.field(s);return l!==null&&u!==null?si(l,u):V()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return V()}}/**
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
 */class _i{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Es(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return ck(this.inner)}size(){return this.innerSize}}/**
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
 */const K5=new de(N.comparator);function Mt(){return K5}const Ak=new de(N.comparator);function La(...t){let e=Ak;for(const n of t)e=e.insert(n.key,n);return e}function Pk(t){let e=Ak;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function On(){return nl()}function kk(){return nl()}function nl(){return new _i(t=>t.toString(),(t,e)=>t.isEqual(e))}const H5=new de(N.comparator),Q5=new ue(N.comparator);function K(...t){let e=Q5;for(const n of t)e=e.add(n);return e}const Y5=new ue(W);function Uv(){return Y5}/**
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
 */function Rk(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Yl(e)?"-0":e}}function bk(t){return{integerValue:""+t}}function Ck(t,e){return sk(e)?bk(e):Rk(t,e)}/**
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
 */class rf{constructor(){this._=void 0}}function X5(t,e,n){return t instanceof xo?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&nf(s)&&(s=Lv(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof us?Nk(t,e):t instanceof cs?Dk(t,e):function(i,s){const o=xk(i,s),a=DI(o)+DI(i.Ie);return lg(o)&&lg(i.Ie)?bk(a):Rk(i.serializer,a)}(t,e)}function J5(t,e,n){return t instanceof us?Nk(t,e):t instanceof cs?Dk(t,e):n}function xk(t,e){return t instanceof No?function(r){return lg(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class xo extends rf{}class us extends rf{constructor(e){super(),this.elements=e}}function Nk(t,e){const n=Ok(e);for(const r of t.elements)n.some(i=>$n(i,r))||n.push(r);return{arrayValue:{values:n}}}class cs extends rf{constructor(e){super(),this.elements=e}}function Dk(t,e){let n=Ok(e);for(const r of t.elements)n=n.filter(i=>!$n(i,r));return{arrayValue:{values:n}}}class No extends rf{constructor(e,n){super(),this.serializer=e,this.Ie=n}}function DI(t){return Re(t.integerValue||t.doubleValue)}function Ok(t){return Zl(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class Vu{constructor(e,n){this.field=e,this.transform=n}}function Z5(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof us&&i instanceof us||r instanceof cs&&i instanceof cs?Ro(r.elements,i.elements,$n):r instanceof No&&i instanceof No?$n(r.Ie,i.Ie):r instanceof xo&&i instanceof xo}(t.transform,e.transform)}class e6{constructor(e,n){this.version=e,this.transformResults=n}}class we{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new we}static exists(e){return new we(void 0,e)}static updateTime(e){return new we(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Xc(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class sf{}function Vk(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new ta(t.key,we.none()):new ea(t.key,t.data,we.none());{const n=t.data,r=ot.empty();let i=new ue(_e.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new pr(t.key,r,new Lt(i.toArray()),we.none())}}function t6(t,e,n){t instanceof ea?function(i,s,o){const a=i.value.clone(),l=VI(i.fieldTransforms,s,o.transformResults);a.setAll(l),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof pr?function(i,s,o){if(!Xc(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=VI(i.fieldTransforms,s,o.transformResults),l=s.data;l.setAll(Lk(i)),l.setAll(a),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function rl(t,e,n,r){return t instanceof ea?function(s,o,a,l){if(!Xc(s.precondition,o))return a;const u=s.value.clone(),c=LI(s.fieldTransforms,l,o);return u.setAll(c),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof pr?function(s,o,a,l){if(!Xc(s.precondition,o))return a;const u=LI(s.fieldTransforms,l,o),c=o.data;return c.setAll(Lk(s)),c.setAll(u),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(d=>d.field))}(t,e,n,r):function(s,o,a){return Xc(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function n6(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=xk(r.transform,i||null);s!=null&&(n===null&&(n=ot.empty()),n.set(r.field,s))}return n||null}function OI(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Ro(r,i,(s,o)=>Z5(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class ea extends sf{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class pr extends sf{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function Lk(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function VI(t,e,n){const r=new Map;$(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,J5(o,a,n[i]))}return r}function LI(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,X5(s,o,e))}return r}class ta extends sf{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class jv extends sf{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class $v{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&t6(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=rl(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=rl(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=kk();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=Vk(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(z.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),K())}isEqual(e){return this.batchId===e.batchId&&Ro(this.mutations,e.mutations,(n,r)=>OI(n,r))&&Ro(this.baseMutations,e.baseMutations,(n,r)=>OI(n,r))}}class zv{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){$(e.mutations.length===r.length);let i=function(){return H5}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new zv(e,n,r,i)}}/**
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
 */class Bv{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class r6{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var Ue,ne;function Mk(t){switch(t){default:return V();case T.CANCELLED:case T.UNKNOWN:case T.DEADLINE_EXCEEDED:case T.RESOURCE_EXHAUSTED:case T.INTERNAL:case T.UNAVAILABLE:case T.UNAUTHENTICATED:return!1;case T.INVALID_ARGUMENT:case T.NOT_FOUND:case T.ALREADY_EXISTS:case T.PERMISSION_DENIED:case T.FAILED_PRECONDITION:case T.ABORTED:case T.OUT_OF_RANGE:case T.UNIMPLEMENTED:case T.DATA_LOSS:return!0}}function Fk(t){if(t===void 0)return Me("GRPC error has no .code"),T.UNKNOWN;switch(t){case Ue.OK:return T.OK;case Ue.CANCELLED:return T.CANCELLED;case Ue.UNKNOWN:return T.UNKNOWN;case Ue.DEADLINE_EXCEEDED:return T.DEADLINE_EXCEEDED;case Ue.RESOURCE_EXHAUSTED:return T.RESOURCE_EXHAUSTED;case Ue.INTERNAL:return T.INTERNAL;case Ue.UNAVAILABLE:return T.UNAVAILABLE;case Ue.UNAUTHENTICATED:return T.UNAUTHENTICATED;case Ue.INVALID_ARGUMENT:return T.INVALID_ARGUMENT;case Ue.NOT_FOUND:return T.NOT_FOUND;case Ue.ALREADY_EXISTS:return T.ALREADY_EXISTS;case Ue.PERMISSION_DENIED:return T.PERMISSION_DENIED;case Ue.FAILED_PRECONDITION:return T.FAILED_PRECONDITION;case Ue.ABORTED:return T.ABORTED;case Ue.OUT_OF_RANGE:return T.OUT_OF_RANGE;case Ue.UNIMPLEMENTED:return T.UNIMPLEMENTED;case Ue.DATA_LOSS:return T.DATA_LOSS;default:return V()}}(ne=Ue||(Ue={}))[ne.OK=0]="OK",ne[ne.CANCELLED=1]="CANCELLED",ne[ne.UNKNOWN=2]="UNKNOWN",ne[ne.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ne[ne.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ne[ne.NOT_FOUND=5]="NOT_FOUND",ne[ne.ALREADY_EXISTS=6]="ALREADY_EXISTS",ne[ne.PERMISSION_DENIED=7]="PERMISSION_DENIED",ne[ne.UNAUTHENTICATED=16]="UNAUTHENTICATED",ne[ne.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ne[ne.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ne[ne.ABORTED=10]="ABORTED",ne[ne.OUT_OF_RANGE=11]="OUT_OF_RANGE",ne[ne.UNIMPLEMENTED=12]="UNIMPLEMENTED",ne[ne.INTERNAL=13]="INTERNAL",ne[ne.UNAVAILABLE=14]="UNAVAILABLE",ne[ne.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function Uk(){return new TextEncoder}/**
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
 */const i6=new po([4294967295,4294967295],0);function MI(t){const e=Uk().encode(t),n=new J3;return n.update(e),new Uint8Array(n.digest())}function FI(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new po([n,r],0),new po([i,s],0)]}class qv{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Ma(`Invalid padding: ${n}`);if(r<0)throw new Ma(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Ma(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Ma(`Invalid padding when bitmap length is 0: ${n}`);this.Te=8*e.length-n,this.Ee=po.fromNumber(this.Te)}de(e,n,r){let i=e.add(n.multiply(po.fromNumber(r)));return i.compare(i6)===1&&(i=new po([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Ee).toNumber()}Ae(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const n=MI(e),[r,i]=FI(n);for(let s=0;s<this.hashCount;s++){const o=this.de(r,i,s);if(!this.Ae(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new qv(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Te===0)return;const n=MI(e),[r,i]=FI(n);for(let s=0;s<this.hashCount;s++){const o=this.de(r,i,s);this.Re(o)}}Re(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Ma extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Lu{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Mu.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Lu(z.min(),i,new de(W),Mt(),K())}}class Mu{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Mu(r,n,K(),K(),K())}}/**
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
 */class Jc{constructor(e,n,r,i){this.Ve=e,this.removedTargetIds=n,this.key=r,this.me=i}}class jk{constructor(e,n){this.targetId=e,this.fe=n}}class $k{constructor(e,n,r=Ge.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class UI{constructor(){this.ge=0,this.pe=$I(),this.ye=Ge.EMPTY_BYTE_STRING,this.we=!1,this.Se=!0}get current(){return this.we}get resumeToken(){return this.ye}get be(){return this.ge!==0}get De(){return this.Se}Ce(e){e.approximateByteSize()>0&&(this.Se=!0,this.ye=e)}ve(){let e=K(),n=K(),r=K();return this.pe.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:V()}}),new Mu(this.ye,this.we,e,n,r)}Fe(){this.Se=!1,this.pe=$I()}Me(e,n){this.Se=!0,this.pe=this.pe.insert(e,n)}xe(e){this.Se=!0,this.pe=this.pe.remove(e)}Oe(){this.ge+=1}Ne(){this.ge-=1,$(this.ge>=0)}Be(){this.Se=!0,this.we=!0}}class s6{constructor(e){this.Le=e,this.ke=new Map,this.qe=Mt(),this.Qe=jI(),this.Ke=new de(W)}$e(e){for(const n of e.Ve)e.me&&e.me.isFoundDocument()?this.Ue(n,e.me):this.We(n,e.key,e.me);for(const n of e.removedTargetIds)this.We(n,e.key,e.me)}Ge(e){this.forEachTarget(e,n=>{const r=this.ze(n);switch(e.state){case 0:this.je(n)&&r.Ce(e.resumeToken);break;case 1:r.Ne(),r.be||r.Fe(),r.Ce(e.resumeToken);break;case 2:r.Ne(),r.be||this.removeTarget(n);break;case 3:this.je(n)&&(r.Be(),r.Ce(e.resumeToken));break;case 4:this.je(n)&&(this.He(n),r.Ce(e.resumeToken));break;default:V()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ke.forEach((r,i)=>{this.je(i)&&n(i)})}Je(e){const n=e.targetId,r=e.fe.count,i=this.Ye(n);if(i){const s=i.target;if(Gd(s))if(r===0){const o=new N(s.path);this.We(n,o,me.newNoDocument(o,z.min()))}else $(r===1);else{const o=this.Ze(n);if(o!==r){const a=this.Xe(e),l=a?this.et(a,e,o):1;if(l!==0){this.He(n);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,u)}}}}}Xe(e){const n=e.fe.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,a;try{o=ri(r).toUint8Array()}catch(l){if(l instanceof dk)return wn("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new qv(o,i,s)}catch(l){return wn(l instanceof Ma?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.Te===0?null:a}et(e,n,r){return n.fe.count===r-this.rt(e,n.targetId)?0:2}rt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.nt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(a)||(this.We(n,s,null),i++)}),i}it(e){const n=new Map;this.ke.forEach((s,o)=>{const a=this.Ye(o);if(a){if(s.current&&Gd(a.target)){const l=new N(a.target.path);this.qe.get(l)!==null||this.st(o,l)||this.We(o,l,me.newNoDocument(l,e))}s.De&&(n.set(o,s.ve()),s.Fe())}});let r=K();this.Qe.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.Ye(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.qe.forEach((s,o)=>o.setReadTime(e));const i=new Lu(e,n,this.Ke,this.qe,r);return this.qe=Mt(),this.Qe=jI(),this.Ke=new de(W),i}Ue(e,n){if(!this.je(e))return;const r=this.st(e,n.key)?2:0;this.ze(e).Me(n.key,r),this.qe=this.qe.insert(n.key,n),this.Qe=this.Qe.insert(n.key,this.ot(n.key).add(e))}We(e,n,r){if(!this.je(e))return;const i=this.ze(e);this.st(e,n)?i.Me(n,1):i.xe(n),this.Qe=this.Qe.insert(n,this.ot(n).delete(e)),r&&(this.qe=this.qe.insert(n,r))}removeTarget(e){this.ke.delete(e)}Ze(e){const n=this.ze(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Oe(e){this.ze(e).Oe()}ze(e){let n=this.ke.get(e);return n||(n=new UI,this.ke.set(e,n)),n}ot(e){let n=this.Qe.get(e);return n||(n=new ue(W),this.Qe=this.Qe.insert(e,n)),n}je(e){const n=this.Ye(e)!==null;return n||P("WatchChangeAggregator","Detected inactive target",e),n}Ye(e){const n=this.ke.get(e);return n&&n.be?null:this.Le._t(e)}He(e){this.ke.set(e,new UI),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.We(e,n,null)})}st(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function jI(){return new de(N.comparator)}function $I(){return new de(N.comparator)}const o6={asc:"ASCENDING",desc:"DESCENDING"},a6={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},l6={and:"AND",or:"OR"};class u6{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function fg(t,e){return t.useProto3Json||xu(e)?e:{value:e}}function Do(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function zk(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function c6(t,e){return Do(t,e.toTimestamp())}function Fe(t){return $(!!t),z.fromTimestamp(function(n){const r=ni(n);return new Ie(r.seconds,r.nanos)}(t))}function Wv(t,e){return pg(t,e).canonicalString()}function pg(t,e){const n=function(i){return new Z(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function Bk(t){const e=Z.fromString(t);return $(Zk(e)),e}function tu(t,e){return Wv(t.databaseId,e.path)}function Fn(t,e){const n=Bk(e);if(n.get(1)!==t.databaseId.projectId)throw new A(T.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new A(T.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new N(Gk(n))}function qk(t,e){return Wv(t.databaseId,e)}function Wk(t){const e=Bk(t);return e.length===4?Z.emptyPath():Gk(e)}function mg(t){return new Z(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Gk(t){return $(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function zI(t,e,n){return{name:tu(t,e),fields:n.value.mapValue.fields}}function Kk(t,e,n){const r=Fn(t,e.name),i=Fe(e.updateTime),s=e.createTime?Fe(e.createTime):z.min(),o=new ot({mapValue:{fields:e.fields}}),a=me.newFoundDocument(r,i,s,o);return n&&a.setHasCommittedMutations(),n?a.setHasCommittedMutations():a}function d6(t,e){return"found"in e?function(r,i){$(!!i.found),i.found.name,i.found.updateTime;const s=Fn(r,i.found.name),o=Fe(i.found.updateTime),a=i.found.createTime?Fe(i.found.createTime):z.min(),l=new ot({mapValue:{fields:i.found.fields}});return me.newFoundDocument(s,o,a,l)}(t,e):"missing"in e?function(r,i){$(!!i.missing),$(!!i.readTime);const s=Fn(r,i.missing),o=Fe(i.readTime);return me.newNoDocument(s,o)}(t,e):V()}function h6(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:V()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(u,c){return u.useProto3Json?($(c===void 0||typeof c=="string"),Ge.fromBase64String(c||"")):($(c===void 0||c instanceof Uint8Array),Ge.fromUint8Array(c||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(u){const c=u.code===void 0?T.UNKNOWN:Fk(u.code);return new A(c,u.message||"")}(o);n=new $k(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Fn(t,r.document.name),s=Fe(r.document.updateTime),o=r.document.createTime?Fe(r.document.createTime):z.min(),a=new ot({mapValue:{fields:r.document.fields}}),l=me.newFoundDocument(i,s,o,a),u=r.targetIds||[],c=r.removedTargetIds||[];n=new Jc(u,c,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Fn(t,r.document),s=r.readTime?Fe(r.readTime):z.min(),o=me.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Jc([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Fn(t,r.document),s=r.removedTargetIds||[];n=new Jc([],s,i,null)}else{if(!("filter"in e))return V();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new r6(i,s),a=r.targetId;n=new jk(a,o)}}return n}function nu(t,e){let n;if(e instanceof ea)n={update:zI(t,e.key,e.value)};else if(e instanceof ta)n={delete:tu(t,e.key)};else if(e instanceof pr)n={update:zI(t,e.key,e.data),updateMask:v6(e.fieldMask)};else{if(!(e instanceof jv))return V();n={verify:tu(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof xo)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof us)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof cs)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof No)return{fieldPath:o.field.canonicalString(),increment:a.Ie};throw V()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:c6(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:V()}(t,e.precondition)),n}function gg(t,e){const n=e.currentDocument?function(s){return s.updateTime!==void 0?we.updateTime(Fe(s.updateTime)):s.exists!==void 0?we.exists(s.exists):we.none()}(e.currentDocument):we.none(),r=e.updateTransforms?e.updateTransforms.map(i=>function(o,a){let l=null;if("setToServerValue"in a)$(a.setToServerValue==="REQUEST_TIME"),l=new xo;else if("appendMissingElements"in a){const c=a.appendMissingElements.values||[];l=new us(c)}else if("removeAllFromArray"in a){const c=a.removeAllFromArray.values||[];l=new cs(c)}else"increment"in a?l=new No(o,a.increment):V();const u=_e.fromServerFormat(a.fieldPath);return new Vu(u,l)}(t,i)):[];if(e.update){e.update.name;const i=Fn(t,e.update.name),s=new ot({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=function(l){const u=l.fieldPaths||[];return new Lt(u.map(c=>_e.fromServerFormat(c)))}(e.updateMask);return new pr(i,s,o,n,r)}return new ea(i,s,n,r)}if(e.delete){const i=Fn(t,e.delete);return new ta(i,n)}if(e.verify){const i=Fn(t,e.verify);return new jv(i,n)}return V()}function f6(t,e){return t&&t.length>0?($(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?Fe(i.updateTime):Fe(s);return o.isEqual(z.min())&&(o=Fe(s)),new e6(o,i.transformResults||[])}(n,e))):[]}function Hk(t,e){return{documents:[qk(t,e.path)]}}function Qk(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=qk(t,i);const s=function(u){if(u.length!==0)return Jk(oe.create(u,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(u){if(u.length!==0)return u.map(c=>function(h){return{field:Ls(h.field),direction:m6(h.dir)}}(c))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=fg(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{ut:n,parent:i}}function Yk(t){let e=Wk(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){$(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:e=e.child(c.collectionId)}let s=[];n.where&&(s=function(d){const h=Xk(d);return h instanceof oe&&Mv(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=function(d){return d.map(h=>function(_){return new eu(Ms(_.field),function(w){switch(w){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(_.direction))}(h))}(n.orderBy));let a=null;n.limit&&(a=function(d){let h;return h=typeof d=="object"?d.value:d,xu(h)?null:h}(n.limit));let l=null;n.startAt&&(l=function(d){const h=!!d.before,f=d.values||[];return new oi(f,h)}(n.startAt));let u=null;return n.endAt&&(u=function(d){const h=!d.before,f=d.values||[];return new oi(f,h)}(n.endAt)),Ik(e,i,o,s,a,"F",l,u)}function p6(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return V()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Xk(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Ms(n.unaryFilter.field);return ee.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Ms(n.unaryFilter.field);return ee.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Ms(n.unaryFilter.field);return ee.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Ms(n.unaryFilter.field);return ee.create(o,"!=",{nullValue:"NULL_VALUE"});default:return V()}}(t):t.fieldFilter!==void 0?function(n){return ee.create(Ms(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return V()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return oe.create(n.compositeFilter.filters.map(r=>Xk(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return V()}}(n.compositeFilter.op))}(t):V()}function m6(t){return o6[t]}function g6(t){return a6[t]}function y6(t){return l6[t]}function Ls(t){return{fieldPath:t.canonicalString()}}function Ms(t){return _e.fromServerFormat(t.fieldPath)}function Jk(t){return t instanceof ee?function(n){if(n.op==="=="){if(AI(n.value))return{unaryFilter:{field:Ls(n.field),op:"IS_NAN"}};if(SI(n.value))return{unaryFilter:{field:Ls(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(AI(n.value))return{unaryFilter:{field:Ls(n.field),op:"IS_NOT_NAN"}};if(SI(n.value))return{unaryFilter:{field:Ls(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ls(n.field),op:g6(n.op),value:n.value}}}(t):t instanceof oe?function(n){const r=n.getFilters().map(i=>Jk(i));return r.length===1?r[0]:{compositeFilter:{op:y6(n.op),filters:r}}}(t):V()}function v6(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Zk(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class Qn{constructor(e,n,r,i,s=z.min(),o=z.min(),a=Ge.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new Qn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Qn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Qn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Qn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class eR{constructor(e){this.ct=e}}function _6(t,e){let n;if(e.document)n=Kk(t.ct,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const r=N.fromSegments(e.noDocument.path),i=hs(e.noDocument.readTime);n=me.newNoDocument(r,i),e.hasCommittedMutations&&n.setHasCommittedMutations()}else{if(!e.unknownDocument)return V();{const r=N.fromSegments(e.unknownDocument.path),i=hs(e.unknownDocument.version);n=me.newUnknownDocument(r,i)}}return e.readTime&&n.setReadTime(function(i){const s=new Ie(i[0],i[1]);return z.fromTimestamp(s)}(e.readTime)),n}function BI(t,e){const n=e.key,r={prefixPath:n.getCollectionPath().popLast().toArray(),collectionGroup:n.collectionGroup,documentId:n.path.lastSegment(),readTime:Qd(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())r.document=function(s,o){return{name:tu(s,o.key),fields:o.data.value.mapValue.fields,updateTime:Do(s,o.version.toTimestamp()),createTime:Do(s,o.createTime.toTimestamp())}}(t.ct,e);else if(e.isNoDocument())r.noDocument={path:n.path.toArray(),readTime:ds(e.version)};else{if(!e.isUnknownDocument())return V();r.unknownDocument={path:n.path.toArray(),version:ds(e.version)}}return r}function Qd(t){const e=t.toTimestamp();return[e.seconds,e.nanoseconds]}function ds(t){const e=t.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function hs(t){const e=new Ie(t.seconds,t.nanoseconds);return z.fromTimestamp(e)}function bi(t,e){const n=(e.baseMutations||[]).map(s=>gg(t.ct,s));for(let s=0;s<e.mutations.length-1;++s){const o=e.mutations[s];if(s+1<e.mutations.length&&e.mutations[s+1].transform!==void 0){const a=e.mutations[s+1];o.updateTransforms=a.transform.fieldTransforms,e.mutations.splice(s+1,1),++s}}const r=e.mutations.map(s=>gg(t.ct,s)),i=Ie.fromMillis(e.localWriteTimeMs);return new $v(e.batchId,i,n,r)}function Fa(t){const e=hs(t.readTime),n=t.lastLimboFreeSnapshotVersion!==void 0?hs(t.lastLimboFreeSnapshotVersion):z.min();let r;return r=function(s){return s.documents!==void 0}(t.query)?function(s){return $(s.documents.length===1),kt(Zo(Wk(s.documents[0])))}(t.query):function(s){return kt(Yk(s))}(t.query),new Qn(r,t.targetId,"TargetPurposeListen",t.lastListenSequenceNumber,e,n,Ge.fromBase64String(t.resumeToken))}function tR(t,e){const n=ds(e.snapshotVersion),r=ds(e.lastLimboFreeSnapshotVersion);let i;i=Gd(e.target)?Hk(t.ct,e.target):Qk(t.ct,e.target).ut;const s=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:ls(e.target),readTime:n,resumeToken:s,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:i}}function Gv(t){const e=Yk({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Hd(e,e.limit,"L"):e}function Ep(t,e){return new Bv(e.largestBatchId,gg(t.ct,e.overlayMutation))}function qI(t,e){const n=e.path.lastSegment();return[t,Pt(e.path.popLast()),n]}function WI(t,e,n,r){return{indexId:t,uid:e,sequenceNumber:n,readTime:ds(r.readTime),documentKey:Pt(r.documentKey.path),largestBatchId:r.largestBatchId}}/**
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
 */class w6{getBundleMetadata(e,n){return GI(e).get(n).next(r=>{if(r)return function(s){return{id:s.bundleId,createTime:hs(s.createTime),version:s.version}}(r)})}saveBundleMetadata(e,n){return GI(e).put(function(i){return{bundleId:i.id,createTime:ds(Fe(i.createTime)),version:i.version}}(n))}getNamedQuery(e,n){return KI(e).get(n).next(r=>{if(r)return function(s){return{name:s.name,query:Gv(s.bundledQuery),readTime:hs(s.readTime)}}(r)})}saveNamedQuery(e,n){return KI(e).put(function(i){return{name:i.name,readTime:ds(Fe(i.readTime)),bundledQuery:i.bundledQuery}}(n))}}function GI(t){return tt(t,"bundles")}function KI(t){return tt(t,"namedQueries")}/**
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
 */class of{constructor(e,n){this.serializer=e,this.userId=n}static lt(e,n){const r=n.uid||"";return new of(e,r)}getOverlay(e,n){return Ia(e).get(qI(this.userId,n)).next(r=>r?Ep(this.serializer,r):null)}getOverlays(e,n){const r=On();return I.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){const i=[];return r.forEach((s,o)=>{const a=new Bv(n,o);i.push(this.ht(e,a))}),I.waitFor(i)}removeOverlaysForBatchId(e,n,r){const i=new Set;n.forEach(o=>i.add(Pt(o.getCollectionPath())));const s=[];return i.forEach(o=>{const a=IDBKeyRange.bound([this.userId,o,r],[this.userId,o,r+1],!1,!0);s.push(Ia(e).H("collectionPathOverlayIndex",a))}),I.waitFor(s)}getOverlaysForCollection(e,n,r){const i=On(),s=Pt(n),o=IDBKeyRange.bound([this.userId,s,r],[this.userId,s,Number.POSITIVE_INFINITY],!0);return Ia(e).W("collectionPathOverlayIndex",o).next(a=>{for(const l of a){const u=Ep(this.serializer,l);i.set(u.getKey(),u)}return i})}getOverlaysForCollectionGroup(e,n,r,i){const s=On();let o;const a=IDBKeyRange.bound([this.userId,n,r],[this.userId,n,Number.POSITIVE_INFINITY],!0);return Ia(e).Y({index:"collectionGroupOverlayIndex",range:a},(l,u,c)=>{const d=Ep(this.serializer,u);s.size()<i||d.largestBatchId===o?(s.set(d.getKey(),d),o=d.largestBatchId):c.done()}).next(()=>s)}ht(e,n){return Ia(e).put(function(i,s,o){const[a,l,u]=qI(s,o.mutation.key);return{userId:s,collectionPath:l,documentId:u,collectionGroup:o.mutation.key.getCollectionGroup(),largestBatchId:o.largestBatchId,overlayMutation:nu(i.ct,o.mutation)}}(this.serializer,this.userId,n))}}function Ia(t){return tt(t,"documentOverlays")}/**
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
 */class Ci{constructor(){}Pt(e,n){this.It(e,n),n.Tt()}It(e,n){if("nullValue"in e)this.Et(n,5);else if("booleanValue"in e)this.Et(n,10),n.dt(e.booleanValue?1:0);else if("integerValue"in e)this.Et(n,15),n.dt(Re(e.integerValue));else if("doubleValue"in e){const r=Re(e.doubleValue);isNaN(r)?this.Et(n,13):(this.Et(n,15),Yl(r)?n.dt(0):n.dt(r))}else if("timestampValue"in e){const r=e.timestampValue;this.Et(n,20),typeof r=="string"?n.At(r):(n.At(`${r.seconds||""}`),n.dt(r.nanos||0))}else if("stringValue"in e)this.Rt(e.stringValue,n),this.Vt(n);else if("bytesValue"in e)this.Et(n,30),n.ft(ri(e.bytesValue)),this.Vt(n);else if("referenceValue"in e)this.gt(e.referenceValue,n);else if("geoPointValue"in e){const r=e.geoPointValue;this.Et(n,45),n.dt(r.latitude||0),n.dt(r.longitude||0)}else"mapValue"in e?hk(e)?this.Et(n,Number.MAX_SAFE_INTEGER):(this.yt(e.mapValue,n),this.Vt(n)):"arrayValue"in e?(this.wt(e.arrayValue,n),this.Vt(n)):V()}Rt(e,n){this.Et(n,25),this.St(e,n)}St(e,n){n.At(e)}yt(e,n){const r=e.fields||{};this.Et(n,55);for(const i of Object.keys(r))this.Rt(i,n),this.It(r[i],n)}wt(e,n){const r=e.values||[];this.Et(n,50);for(const i of r)this.It(i,n)}gt(e,n){this.Et(n,37),N.fromName(e).path.forEach(r=>{this.Et(n,60),this.St(r,n)})}Et(e,n){e.dt(n)}Vt(e){e.dt(2)}}Ci.bt=new Ci;function I6(t){if(t===0)return 8;let e=0;return!(t>>4)&&(e+=4,t<<=4),!(t>>6)&&(e+=2,t<<=2),!(t>>7)&&(e+=1),e}function HI(t){const e=64-function(r){let i=0;for(let s=0;s<8;++s){const o=I6(255&r[s]);if(i+=o,o!==8)break}return i}(t);return Math.ceil(e/8)}class E6{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Dt(e){const n=e[Symbol.iterator]();let r=n.next();for(;!r.done;)this.Ct(r.value),r=n.next();this.vt()}Ft(e){const n=e[Symbol.iterator]();let r=n.next();for(;!r.done;)this.Mt(r.value),r=n.next();this.xt()}Ot(e){for(const n of e){const r=n.charCodeAt(0);if(r<128)this.Ct(r);else if(r<2048)this.Ct(960|r>>>6),this.Ct(128|63&r);else if(n<"\uD800"||"\uDBFF"<n)this.Ct(480|r>>>12),this.Ct(128|63&r>>>6),this.Ct(128|63&r);else{const i=n.codePointAt(0);this.Ct(240|i>>>18),this.Ct(128|63&i>>>12),this.Ct(128|63&i>>>6),this.Ct(128|63&i)}}this.vt()}Nt(e){for(const n of e){const r=n.charCodeAt(0);if(r<128)this.Mt(r);else if(r<2048)this.Mt(960|r>>>6),this.Mt(128|63&r);else if(n<"\uD800"||"\uDBFF"<n)this.Mt(480|r>>>12),this.Mt(128|63&r>>>6),this.Mt(128|63&r);else{const i=n.codePointAt(0);this.Mt(240|i>>>18),this.Mt(128|63&i>>>12),this.Mt(128|63&i>>>6),this.Mt(128|63&i)}}this.xt()}Bt(e){const n=this.Lt(e),r=HI(n);this.kt(1+r),this.buffer[this.position++]=255&r;for(let i=n.length-r;i<n.length;++i)this.buffer[this.position++]=255&n[i]}qt(e){const n=this.Lt(e),r=HI(n);this.kt(1+r),this.buffer[this.position++]=~(255&r);for(let i=n.length-r;i<n.length;++i)this.buffer[this.position++]=~(255&n[i])}Qt(){this.Kt(255),this.Kt(255)}$t(){this.Ut(255),this.Ut(255)}reset(){this.position=0}seed(e){this.kt(e.length),this.buffer.set(e,this.position),this.position+=e.length}Wt(){return this.buffer.slice(0,this.position)}Lt(e){const n=function(s){const o=new DataView(new ArrayBuffer(8));return o.setFloat64(0,s,!1),new Uint8Array(o.buffer)}(e),r=(128&n[0])!=0;n[0]^=r?255:128;for(let i=1;i<n.length;++i)n[i]^=r?255:0;return n}Ct(e){const n=255&e;n===0?(this.Kt(0),this.Kt(255)):n===255?(this.Kt(255),this.Kt(0)):this.Kt(n)}Mt(e){const n=255&e;n===0?(this.Ut(0),this.Ut(255)):n===255?(this.Ut(255),this.Ut(0)):this.Ut(e)}vt(){this.Kt(0),this.Kt(1)}xt(){this.Ut(0),this.Ut(1)}Kt(e){this.kt(1),this.buffer[this.position++]=e}Ut(e){this.kt(1),this.buffer[this.position++]=~e}kt(e){const n=e+this.position;if(n<=this.buffer.length)return;let r=2*this.buffer.length;r<n&&(r=n);const i=new Uint8Array(r);i.set(this.buffer),this.buffer=i}}class T6{constructor(e){this.Gt=e}ft(e){this.Gt.Dt(e)}At(e){this.Gt.Ot(e)}dt(e){this.Gt.Bt(e)}Tt(){this.Gt.Qt()}}class S6{constructor(e){this.Gt=e}ft(e){this.Gt.Ft(e)}At(e){this.Gt.Nt(e)}dt(e){this.Gt.qt(e)}Tt(){this.Gt.$t()}}class Ea{constructor(){this.Gt=new E6,this.zt=new T6(this.Gt),this.jt=new S6(this.Gt)}seed(e){this.Gt.seed(e)}Ht(e){return e===0?this.zt:this.jt}Wt(){return this.Gt.Wt()}reset(){this.Gt.reset()}}/**
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
 */class xi{constructor(e,n,r,i){this.indexId=e,this.documentKey=n,this.arrayValue=r,this.directionalValue=i}Jt(){const e=this.directionalValue.length,n=e===0||this.directionalValue[e-1]===255?e+1:e,r=new Uint8Array(n);return r.set(this.directionalValue,0),n!==e?r.set([0],this.directionalValue.length):++r[r.length-1],new xi(this.indexId,this.documentKey,this.arrayValue,r)}}function _r(t,e){let n=t.indexId-e.indexId;return n!==0?n:(n=QI(t.arrayValue,e.arrayValue),n!==0?n:(n=QI(t.directionalValue,e.directionalValue),n!==0?n:N.comparator(t.documentKey,e.documentKey)))}function QI(t,e){for(let n=0;n<t.length&&n<e.length;++n){const r=t[n]-e[n];if(r!==0)return r}return t.length-e.length}/**
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
 */class YI{constructor(e){this.Yt=new ue((n,r)=>_e.comparator(n.field,r.field)),this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.Zt=e.orderBy,this.Xt=[];for(const n of e.filters){const r=n;r.isInequality()?this.Yt=this.Yt.add(r):this.Xt.push(r)}}get en(){return this.Yt.size>1}tn(e){if($(e.collectionGroup===this.collectionId),this.en)return!1;const n=sg(e);if(n!==void 0&&!this.nn(n))return!1;const r=ki(e);let i=new Set,s=0,o=0;for(;s<r.length&&this.nn(r[s]);++s)i=i.add(r[s].fieldPath.canonicalString());if(s===r.length)return!0;if(this.Yt.size>0){const a=this.Yt.getIterator().getNext();if(!i.has(a.field.canonicalString())){const l=r[s];if(!this.rn(a,l)||!this.sn(this.Zt[o++],l))return!1}++s}for(;s<r.length;++s){const a=r[s];if(o>=this.Zt.length||!this.sn(this.Zt[o++],a))return!1}return!0}on(){if(this.en)return null;let e=new ue(_e.comparator);const n=[];for(const r of this.Xt)if(!r.field.isKeyField())if(r.op==="array-contains"||r.op==="array-contains-any")n.push(new Kc(r.field,2));else{if(e.has(r.field))continue;e=e.add(r.field),n.push(new Kc(r.field,0))}for(const r of this.Zt)r.field.isKeyField()||e.has(r.field)||(e=e.add(r.field),n.push(new Kc(r.field,r.dir==="asc"?0:1)));return new Wd(Wd.UNKNOWN_ID,this.collectionId,n,Ql.empty())}nn(e){for(const n of this.Xt)if(this.rn(n,e))return!0;return!1}rn(e,n){if(e===void 0||!e.field.isEqual(n.fieldPath))return!1;const r=e.op==="array-contains"||e.op==="array-contains-any";return n.kind===2===r}sn(e,n){return!!e.field.isEqual(n.fieldPath)&&(n.kind===0&&e.dir==="asc"||n.kind===1&&e.dir==="desc")}}/**
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
 */function nR(t){var e,n;if($(t instanceof ee||t instanceof oe),t instanceof ee){if(t instanceof wk){const i=((n=(e=t.value.arrayValue)===null||e===void 0?void 0:e.values)===null||n===void 0?void 0:n.map(s=>ee.create(t.field,"==",s)))||[];return oe.create(i,"or")}return t}const r=t.filters.map(i=>nR(i));return oe.create(r,t.op)}function A6(t){if(t.getFilters().length===0)return[];const e=_g(nR(t));return $(rR(e)),yg(e)||vg(e)?[e]:e.getFilters()}function yg(t){return t instanceof ee}function vg(t){return t instanceof oe&&Mv(t)}function rR(t){return yg(t)||vg(t)||function(n){if(n instanceof oe&&ug(n)){for(const r of n.getFilters())if(!yg(r)&&!vg(r))return!1;return!0}return!1}(t)}function _g(t){if($(t instanceof ee||t instanceof oe),t instanceof ee)return t;if(t.filters.length===1)return _g(t.filters[0]);const e=t.filters.map(r=>_g(r));let n=oe.create(e,t.op);return n=Yd(n),rR(n)?n:($(n instanceof oe),$(Co(n)),$(n.filters.length>1),n.filters.reduce((r,i)=>Kv(r,i)))}function Kv(t,e){let n;return $(t instanceof ee||t instanceof oe),$(e instanceof ee||e instanceof oe),n=t instanceof ee?e instanceof ee?function(i,s){return oe.create([i,s],"and")}(t,e):XI(t,e):e instanceof ee?XI(e,t):function(i,s){if($(i.filters.length>0&&s.filters.length>0),Co(i)&&Co(s))return yk(i,s.getFilters());const o=ug(i)?i:s,a=ug(i)?s:i,l=o.filters.map(u=>Kv(u,a));return oe.create(l,"or")}(t,e),Yd(n)}function XI(t,e){if(Co(e))return yk(e,t.getFilters());{const n=e.filters.map(r=>Kv(t,r));return oe.create(n,"or")}}function Yd(t){if($(t instanceof ee||t instanceof oe),t instanceof ee)return t;const e=t.getFilters();if(e.length===1)return Yd(e[0]);if(mk(t))return t;const n=e.map(i=>Yd(i)),r=[];return n.forEach(i=>{i instanceof ee?r.push(i):i instanceof oe&&(i.op===t.op?r.push(...i.filters):r.push(i))}),r.length===1?r[0]:oe.create(r,t.op)}/**
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
 */class P6{constructor(){this._n=new Hv}addToCollectionParentIndex(e,n){return this._n.add(n),I.resolve()}getCollectionParents(e,n){return I.resolve(this._n.getEntries(n))}addFieldIndex(e,n){return I.resolve()}deleteFieldIndex(e,n){return I.resolve()}deleteAllFieldIndexes(e){return I.resolve()}createTargetIndexes(e,n){return I.resolve()}getDocumentsMatchingTarget(e,n){return I.resolve(null)}getIndexType(e,n){return I.resolve(0)}getFieldIndexes(e,n){return I.resolve([])}getNextCollectionGroupToUpdate(e){return I.resolve(null)}getMinOffset(e,n){return I.resolve(Ht.min())}getMinOffsetFromCollectionGroup(e,n){return I.resolve(Ht.min())}updateCollectionGroup(e,n,r){return I.resolve()}updateIndexEntries(e,n){return I.resolve()}}class Hv{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new ue(Z.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new ue(Z.comparator)).toArray()}}/**
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
 */const Ac=new Uint8Array(0);class k6{constructor(e,n){this.databaseId=n,this.an=new Hv,this.un=new _i(r=>ls(r),(r,i)=>Nu(r,i)),this.uid=e.uid||""}addToCollectionParentIndex(e,n){if(!this.an.has(n)){const r=n.lastSegment(),i=n.popLast();e.addOnCommittedListener(()=>{this.an.add(n)});const s={collectionId:r,parent:Pt(i)};return JI(e).put(s)}return I.resolve()}getCollectionParents(e,n){const r=[],i=IDBKeyRange.bound([n,""],[ek(n),""],!1,!0);return JI(e).W(i).next(s=>{for(const o of s){if(o.collectionId!==n)break;r.push(Dn(o.parent))}return r})}addFieldIndex(e,n){const r=Ta(e),i=function(a){return{indexId:a.indexId,collectionGroup:a.collectionGroup,fields:a.fields.map(l=>[l.fieldPath.canonicalString(),l.kind])}}(n);delete i.indexId;const s=r.add(i);if(n.indexState){const o=Ns(e);return s.next(a=>{o.put(WI(a,this.uid,n.indexState.sequenceNumber,n.indexState.offset))})}return s.next()}deleteFieldIndex(e,n){const r=Ta(e),i=Ns(e),s=xs(e);return r.delete(n.indexId).next(()=>i.delete(IDBKeyRange.bound([n.indexId],[n.indexId+1],!1,!0))).next(()=>s.delete(IDBKeyRange.bound([n.indexId],[n.indexId+1],!1,!0)))}deleteAllFieldIndexes(e){const n=Ta(e),r=xs(e),i=Ns(e);return n.H().next(()=>r.H()).next(()=>i.H())}createTargetIndexes(e,n){return I.forEach(this.cn(n),r=>this.getIndexType(e,r).next(i=>{if(i===0||i===1){const s=new YI(r).on();if(s!=null)return this.addFieldIndex(e,s)}}))}getDocumentsMatchingTarget(e,n){const r=xs(e);let i=!0;const s=new Map;return I.forEach(this.cn(n),o=>this.ln(e,o).next(a=>{i&&(i=!!a),s.set(o,a)})).next(()=>{if(i){let o=K();const a=[];return I.forEach(s,(l,u)=>{P("IndexedDbIndexManager",`Using index ${function(g){return`id=${g.indexId}|cg=${g.collectionGroup}|f=${g.fields.map(E=>`${E.fieldPath}:${E.kind}`).join(",")}`}(l)} to execute ${ls(n)}`);const c=function(g,E){const S=sg(E);if(S===void 0)return null;for(const R of Kd(g,S.fieldPath))switch(R.op){case"array-contains-any":return R.value.arrayValue.values||[];case"array-contains":return[R.value]}return null}(u,l),d=function(g,E){const S=new Map;for(const R of ki(E))for(const x of Kd(g,R.fieldPath))switch(x.op){case"==":case"in":S.set(R.fieldPath.canonicalString(),x.value);break;case"not-in":case"!=":return S.set(R.fieldPath.canonicalString(),x.value),Array.from(S.values())}return null}(u,l),h=function(g,E){const S=[];let R=!0;for(const x of ki(E)){const M=x.kind===0?CI(g,x.fieldPath,g.startAt):xI(g,x.fieldPath,g.startAt);S.push(M.value),R&&(R=M.inclusive)}return new oi(S,R)}(u,l),f=function(g,E){const S=[];let R=!0;for(const x of ki(E)){const M=x.kind===0?xI(g,x.fieldPath,g.endAt):CI(g,x.fieldPath,g.endAt);S.push(M.value),R&&(R=M.inclusive)}return new oi(S,R)}(u,l),_=this.hn(l,u,h),v=this.hn(l,u,f),w=this.Pn(l,u,d),m=this.In(l.indexId,c,_,h.inclusive,v,f.inclusive,w);return I.forEach(m,p=>r.j(p,n.limit).next(g=>{g.forEach(E=>{const S=N.fromSegments(E.documentKey);o.has(S)||(o=o.add(S),a.push(S))})}))}).next(()=>a)}return I.resolve(null)})}cn(e){let n=this.un.get(e);return n||(e.filters.length===0?n=[e]:n=A6(oe.create(e.filters,"and")).map(r=>dg(e.path,e.collectionGroup,e.orderBy,r.getFilters(),e.limit,e.startAt,e.endAt)),this.un.set(e,n),n)}In(e,n,r,i,s,o,a){const l=(n!=null?n.length:1)*Math.max(r.length,s.length),u=l/(n!=null?n.length:1),c=[];for(let d=0;d<l;++d){const h=n?this.Tn(n[d/u]):Ac,f=this.En(e,h,r[d%u],i),_=this.dn(e,h,s[d%u],o),v=a.map(w=>this.En(e,h,w,!0));c.push(...this.createRange(f,_,v))}return c}En(e,n,r,i){const s=new xi(e,N.empty(),n,r);return i?s:s.Jt()}dn(e,n,r,i){const s=new xi(e,N.empty(),n,r);return i?s.Jt():s}ln(e,n){const r=new YI(n),i=n.collectionGroup!=null?n.collectionGroup:n.path.lastSegment();return this.getFieldIndexes(e,i).next(s=>{let o=null;for(const a of s)r.tn(a)&&(!o||a.fields.length>o.fields.length)&&(o=a);return o})}getIndexType(e,n){let r=2;const i=this.cn(n);return I.forEach(i,s=>this.ln(e,s).next(o=>{o?r!==0&&o.fields.length<function(l){let u=new ue(_e.comparator),c=!1;for(const d of l.filters)for(const h of d.getFlattenedFilters())h.field.isKeyField()||(h.op==="array-contains"||h.op==="array-contains-any"?c=!0:u=u.add(h.field));for(const d of l.orderBy)d.field.isKeyField()||(u=u.add(d.field));return u.size+(c?1:0)}(s)&&(r=1):r=0})).next(()=>function(o){return o.limit!==null}(n)&&i.length>1&&r===2?1:r)}An(e,n){const r=new Ea;for(const i of ki(e)){const s=n.data.field(i.fieldPath);if(s==null)return null;const o=r.Ht(i.kind);Ci.bt.Pt(s,o)}return r.Wt()}Tn(e){const n=new Ea;return Ci.bt.Pt(e,n.Ht(0)),n.Wt()}Rn(e,n){const r=new Ea;return Ci.bt.Pt(as(this.databaseId,n),r.Ht(function(s){const o=ki(s);return o.length===0?0:o[o.length-1].kind}(e))),r.Wt()}Pn(e,n,r){if(r===null)return[];let i=[];i.push(new Ea);let s=0;for(const o of ki(e)){const a=r[s++];for(const l of i)if(this.Vn(n,o.fieldPath)&&Zl(a))i=this.mn(i,o,a);else{const u=l.Ht(o.kind);Ci.bt.Pt(a,u)}}return this.fn(i)}hn(e,n,r){return this.Pn(e,n,r.position)}fn(e){const n=[];for(let r=0;r<e.length;++r)n[r]=e[r].Wt();return n}mn(e,n,r){const i=[...e],s=[];for(const o of r.arrayValue.values||[])for(const a of i){const l=new Ea;l.seed(a.Wt()),Ci.bt.Pt(o,l.Ht(n.kind)),s.push(l)}return s}Vn(e,n){return!!e.filters.find(r=>r instanceof ee&&r.field.isEqual(n)&&(r.op==="in"||r.op==="not-in"))}getFieldIndexes(e,n){const r=Ta(e),i=Ns(e);return(n?r.W("collectionGroupIndex",IDBKeyRange.bound(n,n)):r.W()).next(s=>{const o=[];return I.forEach(s,a=>i.get([a.indexId,this.uid]).next(l=>{o.push(function(c,d){const h=d?new Ql(d.sequenceNumber,new Ht(hs(d.readTime),new N(Dn(d.documentKey)),d.largestBatchId)):Ql.empty(),f=c.fields.map(([_,v])=>new Kc(_e.fromServerFormat(_),v));return new Wd(c.indexId,c.collectionGroup,f,h)}(a,l))})).next(()=>o)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(n=>n.length===0?null:(n.sort((r,i)=>{const s=r.indexState.sequenceNumber-i.indexState.sequenceNumber;return s!==0?s:W(r.collectionGroup,i.collectionGroup)}),n[0].collectionGroup))}updateCollectionGroup(e,n,r){const i=Ta(e),s=Ns(e);return this.gn(e).next(o=>i.W("collectionGroupIndex",IDBKeyRange.bound(n,n)).next(a=>I.forEach(a,l=>s.put(WI(l.indexId,this.uid,o,r)))))}updateIndexEntries(e,n){const r=new Map;return I.forEach(n,(i,s)=>{const o=r.get(i.collectionGroup);return(o?I.resolve(o):this.getFieldIndexes(e,i.collectionGroup)).next(a=>(r.set(i.collectionGroup,a),I.forEach(a,l=>this.pn(e,i,l).next(u=>{const c=this.yn(s,l);return u.isEqual(c)?I.resolve():this.wn(e,s,l,u,c)}))))})}Sn(e,n,r,i){return xs(e).put({indexId:i.indexId,uid:this.uid,arrayValue:i.arrayValue,directionalValue:i.directionalValue,orderedDocumentKey:this.Rn(r,n.key),documentKey:n.key.path.toArray()})}bn(e,n,r,i){return xs(e).delete([i.indexId,this.uid,i.arrayValue,i.directionalValue,this.Rn(r,n.key),n.key.path.toArray()])}pn(e,n,r){const i=xs(e);let s=new ue(_r);return i.Y({index:"documentKeyIndex",range:IDBKeyRange.only([r.indexId,this.uid,this.Rn(r,n)])},(o,a)=>{s=s.add(new xi(r.indexId,n,a.arrayValue,a.directionalValue))}).next(()=>s)}yn(e,n){let r=new ue(_r);const i=this.An(n,e);if(i==null)return r;const s=sg(n);if(s!=null){const o=e.data.field(s.fieldPath);if(Zl(o))for(const a of o.arrayValue.values||[])r=r.add(new xi(n.indexId,e.key,this.Tn(a),i))}else r=r.add(new xi(n.indexId,e.key,Ac,i));return r}wn(e,n,r,i,s){P("IndexedDbIndexManager","Updating index entries for document '%s'",n.key);const o=[];return function(l,u,c,d,h){const f=l.getIterator(),_=u.getIterator();let v=Cs(f),w=Cs(_);for(;v||w;){let m=!1,p=!1;if(v&&w){const g=c(v,w);g<0?p=!0:g>0&&(m=!0)}else v!=null?p=!0:m=!0;m?(d(w),w=Cs(_)):p?(h(v),v=Cs(f)):(v=Cs(f),w=Cs(_))}}(i,s,_r,a=>{o.push(this.Sn(e,n,r,a))},a=>{o.push(this.bn(e,n,r,a))}),I.waitFor(o)}gn(e){let n=1;return Ns(e).Y({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(r,i,s)=>{s.done(),n=i.sequenceNumber+1}).next(()=>n)}createRange(e,n,r){r=r.sort((o,a)=>_r(o,a)).filter((o,a,l)=>!a||_r(o,l[a-1])!==0);const i=[];i.push(e);for(const o of r){const a=_r(o,e),l=_r(o,n);if(a===0)i[0]=e.Jt();else if(a>0&&l<0)i.push(o),i.push(o.Jt());else if(l>0)break}i.push(n);const s=[];for(let o=0;o<i.length;o+=2){if(this.Dn(i[o],i[o+1]))return[];const a=[i[o].indexId,this.uid,i[o].arrayValue,i[o].directionalValue,Ac,[]],l=[i[o+1].indexId,this.uid,i[o+1].arrayValue,i[o+1].directionalValue,Ac,[]];s.push(IDBKeyRange.bound(a,l))}return s}Dn(e,n){return _r(e,n)>0}getMinOffsetFromCollectionGroup(e,n){return this.getFieldIndexes(e,n).next(ZI)}getMinOffset(e,n){return I.mapArray(this.cn(n),r=>this.ln(e,r).next(i=>i||V())).next(ZI)}}function JI(t){return tt(t,"collectionParents")}function xs(t){return tt(t,"indexEntries")}function Ta(t){return tt(t,"indexConfiguration")}function Ns(t){return tt(t,"indexState")}function ZI(t){$(t.length!==0);let e=t[0].indexState.offset,n=e.largestBatchId;for(let r=1;r<t.length;r++){const i=t[r].indexState.offset;Ov(i,e)<0&&(e=i),n<i.largestBatchId&&(n=i.largestBatchId)}return new Ht(e.readTime,e.documentKey,n)}/**
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
 */const eE={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Nt{constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}static withCacheSize(e){return new Nt(e,Nt.DEFAULT_COLLECTION_PERCENTILE,Nt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
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
 */function iR(t,e,n){const r=t.store("mutations"),i=t.store("documentMutations"),s=[],o=IDBKeyRange.only(n.batchId);let a=0;const l=r.Y({range:o},(c,d,h)=>(a++,h.delete()));s.push(l.next(()=>{$(a===1)}));const u=[];for(const c of n.mutations){const d=ok(e,c.key.path,n.batchId);s.push(i.delete(d)),u.push(c.key)}return I.waitFor(s).next(()=>u)}function Xd(t){if(!t)return 0;let e;if(t.document)e=t.document;else if(t.unknownDocument)e=t.unknownDocument;else{if(!t.noDocument)throw V();e=t.noDocument}return JSON.stringify(e).length}/**
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
 */Nt.DEFAULT_COLLECTION_PERCENTILE=10,Nt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Nt.DEFAULT=new Nt(41943040,Nt.DEFAULT_COLLECTION_PERCENTILE,Nt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Nt.DISABLED=new Nt(-1,0,0);class af{constructor(e,n,r,i){this.userId=e,this.serializer=n,this.indexManager=r,this.referenceDelegate=i,this.Cn={}}static lt(e,n,r,i){$(e.uid!=="");const s=e.isAuthenticated()?e.uid:"";return new af(s,n,r,i)}checkEmpty(e){let n=!0;const r=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return wr(e).Y({index:"userMutationsIndex",range:r},(i,s,o)=>{n=!1,o.done()}).next(()=>n)}addMutationBatch(e,n,r,i){const s=Fs(e),o=wr(e);return o.add({}).next(a=>{$(typeof a=="number");const l=new $v(a,n,r,i),u=function(f,_,v){const w=v.baseMutations.map(p=>nu(f.ct,p)),m=v.mutations.map(p=>nu(f.ct,p));return{userId:_,batchId:v.batchId,localWriteTimeMs:v.localWriteTime.toMillis(),baseMutations:w,mutations:m}}(this.serializer,this.userId,l),c=[];let d=new ue((h,f)=>W(h.canonicalString(),f.canonicalString()));for(const h of i){const f=ok(this.userId,h.key.path,a);d=d.add(h.key.path.popLast()),c.push(o.put(u)),c.push(s.put(f,m5))}return d.forEach(h=>{c.push(this.indexManager.addToCollectionParentIndex(e,h))}),e.addOnCommittedListener(()=>{this.Cn[a]=l.keys()}),I.waitFor(c).next(()=>l)})}lookupMutationBatch(e,n){return wr(e).get(n).next(r=>r?($(r.userId===this.userId),bi(this.serializer,r)):null)}vn(e,n){return this.Cn[n]?I.resolve(this.Cn[n]):this.lookupMutationBatch(e,n).next(r=>{if(r){const i=r.keys();return this.Cn[n]=i,i}return null})}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=IDBKeyRange.lowerBound([this.userId,r]);let s=null;return wr(e).Y({index:"userMutationsIndex",range:i},(o,a,l)=>{a.userId===this.userId&&($(a.batchId>=r),s=bi(this.serializer,a)),l.done()}).next(()=>s)}getHighestUnacknowledgedBatchId(e){const n=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let r=-1;return wr(e).Y({index:"userMutationsIndex",range:n,reverse:!0},(i,s,o)=>{r=s.batchId,o.done()}).next(()=>r)}getAllMutationBatches(e){const n=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return wr(e).W("userMutationsIndex",n).next(r=>r.map(i=>bi(this.serializer,i)))}getAllMutationBatchesAffectingDocumentKey(e,n){const r=Hc(this.userId,n.path),i=IDBKeyRange.lowerBound(r),s=[];return Fs(e).Y({range:i},(o,a,l)=>{const[u,c,d]=o,h=Dn(c);if(u===this.userId&&n.path.isEqual(h))return wr(e).get(d).next(f=>{if(!f)throw V();$(f.userId===this.userId),s.push(bi(this.serializer,f))});l.done()}).next(()=>s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new ue(W);const i=[];return n.forEach(s=>{const o=Hc(this.userId,s.path),a=IDBKeyRange.lowerBound(o),l=Fs(e).Y({range:a},(u,c,d)=>{const[h,f,_]=u,v=Dn(f);h===this.userId&&s.path.isEqual(v)?r=r.add(_):d.done()});i.push(l)}),I.waitFor(i).next(()=>this.Fn(e,r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1,s=Hc(this.userId,r),o=IDBKeyRange.lowerBound(s);let a=new ue(W);return Fs(e).Y({range:o},(l,u,c)=>{const[d,h,f]=l,_=Dn(h);d===this.userId&&r.isPrefixOf(_)?_.length===i&&(a=a.add(f)):c.done()}).next(()=>this.Fn(e,a))}Fn(e,n){const r=[],i=[];return n.forEach(s=>{i.push(wr(e).get(s).next(o=>{if(o===null)throw V();$(o.userId===this.userId),r.push(bi(this.serializer,o))}))}),I.waitFor(i).next(()=>r)}removeMutationBatch(e,n){return iR(e.ae,this.userId,n).next(r=>(e.addOnCommittedListener(()=>{this.Mn(n.batchId)}),I.forEach(r,i=>this.referenceDelegate.markPotentiallyOrphaned(e,i))))}Mn(e){delete this.Cn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(n=>{if(!n)return I.resolve();const r=IDBKeyRange.lowerBound(function(o){return[o]}(this.userId)),i=[];return Fs(e).Y({range:r},(s,o,a)=>{if(s[0]===this.userId){const l=Dn(s[1]);i.push(l)}else a.done()}).next(()=>{$(i.length===0)})})}containsKey(e,n){return sR(e,this.userId,n)}xn(e){return oR(e).get(this.userId).next(n=>n||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function sR(t,e,n){const r=Hc(e,n.path),i=r[1],s=IDBKeyRange.lowerBound(r);let o=!1;return Fs(t).Y({range:s,J:!0},(a,l,u)=>{const[c,d,h]=a;c===e&&d===i&&(o=!0),u.done()}).next(()=>o)}function wr(t){return tt(t,"mutations")}function Fs(t){return tt(t,"documentMutations")}function oR(t){return tt(t,"mutationQueues")}/**
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
 */class fs{constructor(e){this.On=e}next(){return this.On+=2,this.On}static Nn(){return new fs(0)}static Bn(){return new fs(-1)}}/**
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
 */class R6{constructor(e,n){this.referenceDelegate=e,this.serializer=n}allocateTargetId(e){return this.Ln(e).next(n=>{const r=new fs(n.highestTargetId);return n.highestTargetId=r.next(),this.kn(e,n).next(()=>n.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.Ln(e).next(n=>z.fromTimestamp(new Ie(n.lastRemoteSnapshotVersion.seconds,n.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.Ln(e).next(n=>n.highestListenSequenceNumber)}setTargetsMetadata(e,n,r){return this.Ln(e).next(i=>(i.highestListenSequenceNumber=n,r&&(i.lastRemoteSnapshotVersion=r.toTimestamp()),n>i.highestListenSequenceNumber&&(i.highestListenSequenceNumber=n),this.kn(e,i)))}addTargetData(e,n){return this.qn(e,n).next(()=>this.Ln(e).next(r=>(r.targetCount+=1,this.Qn(n,r),this.kn(e,r))))}updateTargetData(e,n){return this.qn(e,n)}removeTargetData(e,n){return this.removeMatchingKeysForTargetId(e,n.targetId).next(()=>Ds(e).delete(n.targetId)).next(()=>this.Ln(e)).next(r=>($(r.targetCount>0),r.targetCount-=1,this.kn(e,r)))}removeTargets(e,n,r){let i=0;const s=[];return Ds(e).Y((o,a)=>{const l=Fa(a);l.sequenceNumber<=n&&r.get(l.targetId)===null&&(i++,s.push(this.removeTargetData(e,l)))}).next(()=>I.waitFor(s)).next(()=>i)}forEachTarget(e,n){return Ds(e).Y((r,i)=>{const s=Fa(i);n(s)})}Ln(e){return tE(e).get("targetGlobalKey").next(n=>($(n!==null),n))}kn(e,n){return tE(e).put("targetGlobalKey",n)}qn(e,n){return Ds(e).put(tR(this.serializer,n))}Qn(e,n){let r=!1;return e.targetId>n.highestTargetId&&(n.highestTargetId=e.targetId,r=!0),e.sequenceNumber>n.highestListenSequenceNumber&&(n.highestListenSequenceNumber=e.sequenceNumber,r=!0),r}getTargetCount(e){return this.Ln(e).next(n=>n.targetCount)}getTargetData(e,n){const r=ls(n),i=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]);let s=null;return Ds(e).Y({range:i,index:"queryTargetsIndex"},(o,a,l)=>{const u=Fa(a);Nu(n,u.target)&&(s=u,l.done())}).next(()=>s)}addMatchingKeys(e,n,r){const i=[],s=Rr(e);return n.forEach(o=>{const a=Pt(o.path);i.push(s.put({targetId:r,path:a})),i.push(this.referenceDelegate.addReference(e,r,o))}),I.waitFor(i)}removeMatchingKeys(e,n,r){const i=Rr(e);return I.forEach(n,s=>{const o=Pt(s.path);return I.waitFor([i.delete([r,o]),this.referenceDelegate.removeReference(e,r,s)])})}removeMatchingKeysForTargetId(e,n){const r=Rr(e),i=IDBKeyRange.bound([n],[n+1],!1,!0);return r.delete(i)}getMatchingKeysForTargetId(e,n){const r=IDBKeyRange.bound([n],[n+1],!1,!0),i=Rr(e);let s=K();return i.Y({range:r,J:!0},(o,a,l)=>{const u=Dn(o[1]),c=new N(u);s=s.add(c)}).next(()=>s)}containsKey(e,n){const r=Pt(n.path),i=IDBKeyRange.bound([r],[ek(r)],!1,!0);let s=0;return Rr(e).Y({index:"documentTargetsIndex",J:!0,range:i},([o,a],l,u)=>{o!==0&&(s++,u.done())}).next(()=>s>0)}_t(e,n){return Ds(e).get(n).next(r=>r?Fa(r):null)}}function Ds(t){return tt(t,"targets")}function tE(t){return tt(t,"targetGlobal")}function Rr(t){return tt(t,"targetDocuments")}/**
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
 */function nE([t,e],[n,r]){const i=W(t,n);return i===0?W(e,r):i}class b6{constructor(e){this.Kn=e,this.buffer=new ue(nE),this.$n=0}Un(){return++this.$n}Wn(e){const n=[e,this.Un()];if(this.buffer.size<this.Kn)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();nE(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class C6{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Gn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.zn(6e4)}stop(){this.Gn&&(this.Gn.cancel(),this.Gn=null)}get started(){return this.Gn!==null}zn(e){P("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Gn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Gn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){vi(n)?P("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",n):await yi(n)}await this.zn(3e5)})}}class x6{constructor(e,n){this.jn=e,this.params=n}calculateTargetCount(e,n){return this.jn.Hn(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return I.resolve(Vt._e);const r=new b6(n);return this.jn.forEachTarget(e,i=>r.Wn(i.sequenceNumber)).next(()=>this.jn.Jn(e,i=>r.Wn(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.jn.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.jn.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(P("LruGarbageCollector","Garbage collection skipped; disabled"),I.resolve(eE)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(P("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),eE):this.Yn(e,n))}getCacheSize(e){return this.jn.getCacheSize(e)}Yn(e,n){let r,i,s,o,a,l,u;const c=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(d=>(d>this.params.maximumSequenceNumbersToCollect?(P("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${d}`),i=this.params.maximumSequenceNumbersToCollect):i=d,o=Date.now(),this.nthSequenceNumber(e,i))).next(d=>(r=d,a=Date.now(),this.removeTargets(e,r,n))).next(d=>(s=d,l=Date.now(),this.removeOrphanedDocuments(e,r))).next(d=>(u=Date.now(),Os()<=X.DEBUG&&P("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-c}ms
	Determined least recently used ${i} in `+(a-o)+`ms
	Removed ${s} targets in `+(l-a)+`ms
	Removed ${d} documents in `+(u-l)+`ms
Total Duration: ${u-c}ms`),I.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:d})))}}function N6(t,e){return new x6(t,e)}/**
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
 */class D6{constructor(e,n){this.db=e,this.garbageCollector=N6(this,n)}Hn(e){const n=this.Zn(e);return this.db.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}Zn(e){let n=0;return this.Jn(e,r=>{n++}).next(()=>n)}forEachTarget(e,n){return this.db.getTargetCache().forEachTarget(e,n)}Jn(e,n){return this.Xn(e,(r,i)=>n(i))}addReference(e,n,r){return Pc(e,r)}removeReference(e,n,r){return Pc(e,r)}removeTargets(e,n,r){return this.db.getTargetCache().removeTargets(e,n,r)}markPotentiallyOrphaned(e,n){return Pc(e,n)}er(e,n){return function(i,s){let o=!1;return oR(i).Z(a=>sR(i,a,s).next(l=>(l&&(o=!0),I.resolve(!l)))).next(()=>o)}(e,n)}removeOrphanedDocuments(e,n){const r=this.db.getRemoteDocumentCache().newChangeBuffer(),i=[];let s=0;return this.Xn(e,(o,a)=>{if(a<=n){const l=this.er(e,o).next(u=>{if(!u)return s++,r.getEntry(e,o).next(()=>(r.removeEntry(o,z.min()),Rr(e).delete(function(d){return[0,Pt(d.path)]}(o))))});i.push(l)}}).next(()=>I.waitFor(i)).next(()=>r.apply(e)).next(()=>s)}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,r)}updateLimboDocument(e,n){return Pc(e,n)}Xn(e,n){const r=Rr(e);let i,s=Vt._e;return r.Y({index:"documentTargetsIndex"},([o,a],{path:l,sequenceNumber:u})=>{o===0?(s!==Vt._e&&n(new N(Dn(i)),s),s=u,i=l):s=Vt._e}).next(()=>{s!==Vt._e&&n(new N(Dn(i)),s)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function Pc(t,e){return Rr(t).put(function(r,i){return{targetId:0,path:Pt(r.path),sequenceNumber:i}}(e,t.currentSequenceNumber))}/**
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
 */class aR{constructor(){this.changes=new _i(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,me.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?I.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class O6{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,n,r){return Ti(e).put(r)}removeEntry(e,n,r){return Ti(e).delete(function(s,o){const a=s.path.toArray();return[a.slice(0,a.length-2),a[a.length-2],Qd(o),a[a.length-1]]}(n,r))}updateMetadata(e,n){return this.getMetadata(e).next(r=>(r.byteSize+=n,this.tr(e,r)))}getEntry(e,n){let r=me.newInvalidDocument(n);return Ti(e).Y({index:"documentKeyIndex",range:IDBKeyRange.only(Sa(n))},(i,s)=>{r=this.nr(n,s)}).next(()=>r)}rr(e,n){let r={size:0,document:me.newInvalidDocument(n)};return Ti(e).Y({index:"documentKeyIndex",range:IDBKeyRange.only(Sa(n))},(i,s)=>{r={document:this.nr(n,s),size:Xd(s)}}).next(()=>r)}getEntries(e,n){let r=Mt();return this.ir(e,n,(i,s)=>{const o=this.nr(i,s);r=r.insert(i,o)}).next(()=>r)}sr(e,n){let r=Mt(),i=new de(N.comparator);return this.ir(e,n,(s,o)=>{const a=this.nr(s,o);r=r.insert(s,a),i=i.insert(s,Xd(o))}).next(()=>({documents:r,_r:i}))}ir(e,n,r){if(n.isEmpty())return I.resolve();let i=new ue(sE);n.forEach(l=>i=i.add(l));const s=IDBKeyRange.bound(Sa(i.first()),Sa(i.last())),o=i.getIterator();let a=o.getNext();return Ti(e).Y({index:"documentKeyIndex",range:s},(l,u,c)=>{const d=N.fromSegments([...u.prefixPath,u.collectionGroup,u.documentId]);for(;a&&sE(a,d)<0;)r(a,null),a=o.getNext();a&&a.isEqual(d)&&(r(a,u),a=o.hasNext()?o.getNext():null),a?c.U(Sa(a)):c.done()}).next(()=>{for(;a;)r(a,null),a=o.hasNext()?o.getNext():null})}getDocumentsMatchingQuery(e,n,r,i,s){const o=n.path,a=[o.popLast().toArray(),o.lastSegment(),Qd(r.readTime),r.documentKey.path.isEmpty()?"":r.documentKey.path.lastSegment()],l=[o.popLast().toArray(),o.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return Ti(e).W(IDBKeyRange.bound(a,l,!0)).next(u=>{s==null||s.incrementDocumentReadCount(u.length);let c=Mt();for(const d of u){const h=this.nr(N.fromSegments(d.prefixPath.concat(d.collectionGroup,d.documentId)),d);h.isFoundDocument()&&(Ou(n,h)||i.has(h.key))&&(c=c.insert(h.key,h))}return c})}getAllFromCollectionGroup(e,n,r,i){let s=Mt();const o=iE(n,r),a=iE(n,Ht.max());return Ti(e).Y({index:"collectionGroupIndex",range:IDBKeyRange.bound(o,a,!0)},(l,u,c)=>{const d=this.nr(N.fromSegments(u.prefixPath.concat(u.collectionGroup,u.documentId)),u);s=s.insert(d.key,d),s.size===i&&c.done()}).next(()=>s)}newChangeBuffer(e){return new V6(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(n=>n.byteSize)}getMetadata(e){return rE(e).get("remoteDocumentGlobalKey").next(n=>($(!!n),n))}tr(e,n){return rE(e).put("remoteDocumentGlobalKey",n)}nr(e,n){if(n){const r=_6(this.serializer,n);if(!(r.isNoDocument()&&r.version.isEqual(z.min())))return r}return me.newInvalidDocument(e)}}function lR(t){return new O6(t)}class V6 extends aR{constructor(e,n){super(),this.ar=e,this.trackRemovals=n,this.ur=new _i(r=>r.toString(),(r,i)=>r.isEqual(i))}applyChanges(e){const n=[];let r=0,i=new ue((s,o)=>W(s.canonicalString(),o.canonicalString()));return this.changes.forEach((s,o)=>{const a=this.ur.get(s);if(n.push(this.ar.removeEntry(e,s,a.readTime)),o.isValidDocument()){const l=BI(this.ar.serializer,o);i=i.add(s.path.popLast());const u=Xd(l);r+=u-a.size,n.push(this.ar.addEntry(e,s,l))}else if(r-=a.size,this.trackRemovals){const l=BI(this.ar.serializer,o.convertToNoDocument(z.min()));n.push(this.ar.addEntry(e,s,l))}}),i.forEach(s=>{n.push(this.ar.indexManager.addToCollectionParentIndex(e,s))}),n.push(this.ar.updateMetadata(e,r)),I.waitFor(n)}getFromCache(e,n){return this.ar.rr(e,n).next(r=>(this.ur.set(n,{size:r.size,readTime:r.document.readTime}),r.document))}getAllFromCache(e,n){return this.ar.sr(e,n).next(({documents:r,_r:i})=>(i.forEach((s,o)=>{this.ur.set(s,{size:o,readTime:r.get(s).readTime})}),r))}}function rE(t){return tt(t,"remoteDocumentGlobal")}function Ti(t){return tt(t,"remoteDocumentsV14")}function Sa(t){const e=t.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function iE(t,e){const n=e.documentKey.path.toArray();return[t,Qd(e.readTime),n.slice(0,n.length-2),n.length>0?n[n.length-1]:""]}function sE(t,e){const n=t.path.toArray(),r=e.path.toArray();let i=0;for(let s=0;s<n.length-2&&s<r.length-2;++s)if(i=W(n[s],r[s]),i)return i;return i=W(n.length,r.length),i||(i=W(n[n.length-2],r[r.length-2]),i||W(n[n.length-1],r[r.length-1]))}/**
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
 */class L6{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class uR{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&rl(r.mutation,i,Lt.empty(),Ie.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,K()).next(()=>r))}getLocalViewOfDocuments(e,n,r=K()){const i=On();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=La();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=On();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,K()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=Mt();const o=nl(),a=function(){return nl()}();return n.forEach((l,u)=>{const c=r.get(u.key);i.has(u.key)&&(c===void 0||c.mutation instanceof pr)?s=s.insert(u.key,u):c!==void 0?(o.set(u.key,c.mutation.getFieldMask()),rl(c.mutation,u,c.mutation.getFieldMask(),Ie.now())):o.set(u.key,Lt.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((u,c)=>o.set(u,c)),n.forEach((u,c)=>{var d;return a.set(u,new L6(c,(d=o.get(u))!==null&&d!==void 0?d:null))}),a))}recalculateAndSaveOverlays(e,n){const r=nl();let i=new de((o,a)=>o-a),s=K();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let c=r.get(l)||Lt.empty();c=a.applyToLocalView(u,c),r.set(l,c);const d=(i.get(a.batchId)||K()).add(l);i=i.insert(a.batchId,d)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,c=l.value,d=kk();c.forEach(h=>{if(!s.has(h)){const f=Vk(n.get(h),r.get(h));f!==null&&d.set(h,f),s=s.add(h)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,d))}return I.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return N.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Fv(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):I.resolve(On());let a=-1,l=s;return o.next(u=>I.forEach(u,(c,d)=>(a<d.largestBatchId&&(a=d.largestBatchId),s.get(c)?I.resolve():this.remoteDocumentCache.getEntry(e,c).next(h=>{l=l.insert(c,h)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,l,u,K())).next(c=>({batchId:a,changes:Pk(c)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new N(n)).next(r=>{let i=La();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=La();return this.indexManager.getCollectionParents(e,s).next(a=>I.forEach(a,l=>{const u=function(d,h){return new fr(h,null,d.explicitOrderBy.slice(),d.filters.slice(),d.limit,d.limitType,d.startAt,d.endAt)}(n,l.child(s));return this.getDocumentsMatchingCollectionQuery(e,u,r,i).next(c=>{c.forEach((d,h)=>{o=o.insert(d,h)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((l,u)=>{const c=u.getKey();o.get(c)===null&&(o=o.insert(c,me.newInvalidDocument(c)))});let a=La();return o.forEach((l,u)=>{const c=s.get(l);c!==void 0&&rl(c.mutation,u,Lt.empty(),Ie.now()),Ou(n,u)&&(a=a.insert(l,u))}),a})}}/**
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
 */class M6{constructor(e){this.serializer=e,this.cr=new Map,this.lr=new Map}getBundleMetadata(e,n){return I.resolve(this.cr.get(n))}saveBundleMetadata(e,n){return this.cr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:Fe(i.createTime)}}(n)),I.resolve()}getNamedQuery(e,n){return I.resolve(this.lr.get(n))}saveNamedQuery(e,n){return this.lr.set(n.name,function(i){return{name:i.name,query:Gv(i.bundledQuery),readTime:Fe(i.readTime)}}(n)),I.resolve()}}/**
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
 */class F6{constructor(){this.overlays=new de(N.comparator),this.hr=new Map}getOverlay(e,n){return I.resolve(this.overlays.get(n))}getOverlays(e,n){const r=On();return I.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),I.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.hr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.hr.delete(r)),I.resolve()}getOverlaysForCollection(e,n,r){const i=On(),s=n.length+1,o=new N(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return I.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new de((u,c)=>u-c);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let c=s.get(u.largestBatchId);c===null&&(c=On(),s=s.insert(u.largestBatchId,c)),c.set(u.getKey(),u)}}const a=On(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,c)=>a.set(u,c)),!(a.size()>=i)););return I.resolve(a)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.hr.get(i.largestBatchId).delete(r.key);this.hr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new Bv(n,r));let s=this.hr.get(n);s===void 0&&(s=K(),this.hr.set(n,s)),this.hr.set(n,s.add(r.key))}}/**
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
 */class Qv{constructor(){this.Pr=new ue(He.Ir),this.Tr=new ue(He.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(e,n){const r=new He(e,n);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Ar(new He(e,n))}Rr(e,n){e.forEach(r=>this.removeReference(r,n))}Vr(e){const n=new N(new Z([])),r=new He(n,e),i=new He(n,e+1),s=[];return this.Tr.forEachInRange([r,i],o=>{this.Ar(o),s.push(o.key)}),s}mr(){this.Pr.forEach(e=>this.Ar(e))}Ar(e){this.Pr=this.Pr.delete(e),this.Tr=this.Tr.delete(e)}gr(e){const n=new N(new Z([])),r=new He(n,e),i=new He(n,e+1);let s=K();return this.Tr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new He(e,0),r=this.Pr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class He{constructor(e,n){this.key=e,this.pr=n}static Ir(e,n){return N.comparator(e.key,n.key)||W(e.pr,n.pr)}static Er(e,n){return W(e.pr,n.pr)||N.comparator(e.key,n.key)}}/**
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
 */class U6{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.yr=1,this.wr=new ue(He.Ir)}checkEmpty(e){return I.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new $v(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.wr=this.wr.add(new He(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return I.resolve(o)}lookupMutationBatch(e,n){return I.resolve(this.Sr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.br(r),s=i<0?0:i;return I.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return I.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(e){return I.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new He(n,0),i=new He(n,Number.POSITIVE_INFINITY),s=[];return this.wr.forEachInRange([r,i],o=>{const a=this.Sr(o.pr);s.push(a)}),I.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new ue(W);return n.forEach(i=>{const s=new He(i,0),o=new He(i,Number.POSITIVE_INFINITY);this.wr.forEachInRange([s,o],a=>{r=r.add(a.pr)})}),I.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;N.isDocumentKey(s)||(s=s.child(""));const o=new He(new N(s),0);let a=new ue(W);return this.wr.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(l.pr)),!0)},o),I.resolve(this.Dr(a))}Dr(e){const n=[];return e.forEach(r=>{const i=this.Sr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){$(this.Cr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return I.forEach(n.mutations,i=>{const s=new He(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.wr=r})}Mn(e){}containsKey(e,n){const r=new He(n,0),i=this.wr.firstAfterOrEqual(r);return I.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,I.resolve()}Cr(e,n){return this.br(e)}br(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Sr(e){const n=this.br(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class j6{constructor(e){this.vr=e,this.docs=function(){return new de(N.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.vr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return I.resolve(r?r.document.mutableCopy():me.newInvalidDocument(n))}getEntries(e,n){let r=Mt();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():me.newInvalidDocument(i))}),I.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Mt();const o=n.path,a=new N(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:c}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||Ov(nk(c),r)<=0||(i.has(c.key)||Ou(n,c))&&(s=s.insert(c.key,c.mutableCopy()))}return I.resolve(s)}getAllFromCollectionGroup(e,n,r,i){V()}Fr(e,n){return I.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new $6(this)}getSize(e){return I.resolve(this.size)}}class $6 extends aR{constructor(e){super(),this.ar=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.ar.addEntry(e,i)):this.ar.removeEntry(r)}),I.waitFor(n)}getFromCache(e,n){return this.ar.getEntry(e,n)}getAllFromCache(e,n){return this.ar.getEntries(e,n)}}/**
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
 */class z6{constructor(e){this.persistence=e,this.Mr=new _i(n=>ls(n),Nu),this.lastRemoteSnapshotVersion=z.min(),this.highestTargetId=0,this.Or=0,this.Nr=new Qv,this.targetCount=0,this.Br=fs.Nn()}forEachTarget(e,n){return this.Mr.forEach((r,i)=>n(i)),I.resolve()}getLastRemoteSnapshotVersion(e){return I.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return I.resolve(this.Or)}allocateTargetId(e){return this.highestTargetId=this.Br.next(),I.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Or&&(this.Or=n),I.resolve()}qn(e){this.Mr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Br=new fs(n),this.highestTargetId=n),e.sequenceNumber>this.Or&&(this.Or=e.sequenceNumber)}addTargetData(e,n){return this.qn(n),this.targetCount+=1,I.resolve()}updateTargetData(e,n){return this.qn(n),I.resolve()}removeTargetData(e,n){return this.Mr.delete(n.target),this.Nr.Vr(n.targetId),this.targetCount-=1,I.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Mr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Mr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),I.waitFor(s).next(()=>i)}getTargetCount(e){return I.resolve(this.targetCount)}getTargetData(e,n){const r=this.Mr.get(n)||null;return I.resolve(r)}addMatchingKeys(e,n,r){return this.Nr.dr(n,r),I.resolve()}removeMatchingKeys(e,n,r){this.Nr.Rr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),I.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Nr.Vr(n),I.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Nr.gr(n);return I.resolve(r)}containsKey(e,n){return I.resolve(this.Nr.containsKey(n))}}/**
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
 */class cR{constructor(e,n){this.Lr={},this.overlays={},this.kr=new Vt(0),this.qr=!1,this.qr=!0,this.referenceDelegate=e(this),this.Qr=new z6(this),this.indexManager=new P6,this.remoteDocumentCache=function(i){return new j6(i)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new eR(n),this.$r=new M6(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new F6,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Lr[e.toKey()];return r||(r=new U6(n,this.referenceDelegate),this.Lr[e.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(e,n,r){P("MemoryPersistence","Starting transaction:",e);const i=new B6(this.kr.next());return this.referenceDelegate.Ur(),r(i).next(s=>this.referenceDelegate.Wr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Gr(e,n){return I.or(Object.values(this.Lr).map(r=>()=>r.containsKey(e,n)))}}class B6 extends ik{constructor(e){super(),this.currentSequenceNumber=e}}class lf{constructor(e){this.persistence=e,this.zr=new Qv,this.jr=null}static Hr(e){return new lf(e)}get Jr(){if(this.jr)return this.jr;throw V()}addReference(e,n,r){return this.zr.addReference(r,n),this.Jr.delete(r.toString()),I.resolve()}removeReference(e,n,r){return this.zr.removeReference(r,n),this.Jr.add(r.toString()),I.resolve()}markPotentiallyOrphaned(e,n){return this.Jr.add(n.toString()),I.resolve()}removeTarget(e,n){this.zr.Vr(n.targetId).forEach(i=>this.Jr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Jr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Ur(){this.jr=new Set}Wr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return I.forEach(this.Jr,r=>{const i=N.fromPath(r);return this.Yr(e,i).next(s=>{s||n.removeEntry(i,z.min())})}).next(()=>(this.jr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Yr(e,n).next(r=>{r?this.Jr.delete(n.toString()):this.Jr.add(n.toString())})}Kr(e){return 0}Yr(e,n){return I.or([()=>I.resolve(this.zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Gr(e,n)])}}/**
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
 */class q6{constructor(e){this.serializer=e}N(e,n,r,i){const s=new tf("createOrUpgrade",n);r<1&&i>=1&&(function(l){l.createObjectStore("owner")}(e),function(l){l.createObjectStore("mutationQueues",{keyPath:"userId"}),l.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",wI,{unique:!0}),l.createObjectStore("documentMutations")}(e),oE(e),function(l){l.createObjectStore("remoteDocuments")}(e));let o=I.resolve();return r<3&&i>=3&&(r!==0&&(function(l){l.deleteObjectStore("targetDocuments"),l.deleteObjectStore("targets"),l.deleteObjectStore("targetGlobal")}(e),oE(e)),o=o.next(()=>function(l){const u=l.store("targetGlobal"),c={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:z.min().toTimestamp(),targetCount:0};return u.put("targetGlobalKey",c)}(s))),r<4&&i>=4&&(r!==0&&(o=o.next(()=>function(l,u){return u.store("mutations").W().next(c=>{l.deleteObjectStore("mutations"),l.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",wI,{unique:!0});const d=u.store("mutations"),h=c.map(f=>d.put(f));return I.waitFor(h)})}(e,s))),o=o.next(()=>{(function(l){l.createObjectStore("clientMetadata",{keyPath:"clientId"})})(e)})),r<5&&i>=5&&(o=o.next(()=>this.Xr(s))),r<6&&i>=6&&(o=o.next(()=>(function(l){l.createObjectStore("remoteDocumentGlobal")}(e),this.ei(s)))),r<7&&i>=7&&(o=o.next(()=>this.ti(s))),r<8&&i>=8&&(o=o.next(()=>this.ni(e,s))),r<9&&i>=9&&(o=o.next(()=>{(function(l){l.objectStoreNames.contains("remoteDocumentChanges")&&l.deleteObjectStore("remoteDocumentChanges")})(e)})),r<10&&i>=10&&(o=o.next(()=>this.ri(s))),r<11&&i>=11&&(o=o.next(()=>{(function(l){l.createObjectStore("bundles",{keyPath:"bundleId"})})(e),function(l){l.createObjectStore("namedQueries",{keyPath:"name"})}(e)})),r<12&&i>=12&&(o=o.next(()=>{(function(l){const u=l.createObjectStore("documentOverlays",{keyPath:k5});u.createIndex("collectionPathOverlayIndex",R5,{unique:!1}),u.createIndex("collectionGroupOverlayIndex",b5,{unique:!1})})(e)})),r<13&&i>=13&&(o=o.next(()=>function(l){const u=l.createObjectStore("remoteDocumentsV14",{keyPath:g5});u.createIndex("documentKeyIndex",y5),u.createIndex("collectionGroupIndex",v5)}(e)).next(()=>this.ii(e,s)).next(()=>e.deleteObjectStore("remoteDocuments"))),r<14&&i>=14&&(o=o.next(()=>this.si(e,s))),r<15&&i>=15&&(o=o.next(()=>function(l){l.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),l.createObjectStore("indexState",{keyPath:T5}).createIndex("sequenceNumberIndex",S5,{unique:!1}),l.createObjectStore("indexEntries",{keyPath:A5}).createIndex("documentKeyIndex",P5,{unique:!1})}(e))),o}ei(e){let n=0;return e.store("remoteDocuments").Y((r,i)=>{n+=Xd(i)}).next(()=>{const r={byteSize:n};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",r)})}Xr(e){const n=e.store("mutationQueues"),r=e.store("mutations");return n.W().next(i=>I.forEach(i,s=>{const o=IDBKeyRange.bound([s.userId,-1],[s.userId,s.lastAcknowledgedBatchId]);return r.W("userMutationsIndex",o).next(a=>I.forEach(a,l=>{$(l.userId===s.userId);const u=bi(this.serializer,l);return iR(e,s.userId,u).next(()=>{})}))}))}ti(e){const n=e.store("targetDocuments"),r=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next(i=>{const s=[];return r.Y((o,a)=>{const l=new Z(o),u=function(d){return[0,Pt(d)]}(l);s.push(n.get(u).next(c=>c?I.resolve():(d=>n.put({targetId:0,path:Pt(d),sequenceNumber:i.highestListenSequenceNumber}))(l)))}).next(()=>I.waitFor(s))})}ni(e,n){e.createObjectStore("collectionParents",{keyPath:E5});const r=n.store("collectionParents"),i=new Hv,s=o=>{if(i.add(o)){const a=o.lastSegment(),l=o.popLast();return r.put({collectionId:a,parent:Pt(l)})}};return n.store("remoteDocuments").Y({J:!0},(o,a)=>{const l=new Z(o);return s(l.popLast())}).next(()=>n.store("documentMutations").Y({J:!0},([o,a,l],u)=>{const c=Dn(a);return s(c.popLast())}))}ri(e){const n=e.store("targets");return n.Y((r,i)=>{const s=Fa(i),o=tR(this.serializer,s);return n.put(o)})}ii(e,n){const r=n.store("remoteDocuments"),i=[];return r.Y((s,o)=>{const a=n.store("remoteDocumentsV14"),l=function(d){return d.document?new N(Z.fromString(d.document.name).popFirst(5)):d.noDocument?N.fromSegments(d.noDocument.path):d.unknownDocument?N.fromSegments(d.unknownDocument.path):V()}(o).path.toArray(),u={prefixPath:l.slice(0,l.length-2),collectionGroup:l[l.length-2],documentId:l[l.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};i.push(a.put(u))}).next(()=>I.waitFor(i))}si(e,n){const r=n.store("mutations"),i=lR(this.serializer),s=new cR(lf.Hr,this.serializer.ct);return r.W().next(o=>{const a=new Map;return o.forEach(l=>{var u;let c=(u=a.get(l.userId))!==null&&u!==void 0?u:K();bi(this.serializer,l).keys().forEach(d=>c=c.add(d)),a.set(l.userId,c)}),I.forEach(a,(l,u)=>{const c=new Ye(u),d=of.lt(this.serializer,c),h=s.getIndexManager(c),f=af.lt(c,this.serializer,h,s.referenceDelegate);return new uR(i,f,d,h).recalculateAndSaveOverlaysForDocumentKeys(new og(n,Vt._e),l).next()})})}}function oE(t){t.createObjectStore("targetDocuments",{keyPath:w5}).createIndex("documentTargetsIndex",I5,{unique:!0}),t.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",_5,{unique:!0}),t.createObjectStore("targetGlobal")}const Tp="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class Yv{constructor(e,n,r,i,s,o,a,l,u,c,d=15){if(this.allowTabSynchronization=e,this.persistenceKey=n,this.clientId=r,this.oi=s,this.window=o,this.document=a,this._i=u,this.ai=c,this.ui=d,this.kr=null,this.qr=!1,this.isPrimary=!1,this.networkEnabled=!0,this.ci=null,this.inForeground=!1,this.li=null,this.hi=null,this.Pi=Number.NEGATIVE_INFINITY,this.Ii=h=>Promise.resolve(),!Yv.D())throw new A(T.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new D6(this,i),this.Ti=n+"main",this.serializer=new eR(l),this.Ei=new nn(this.Ti,this.ui,new q6(this.serializer)),this.Qr=new R6(this.referenceDelegate,this.serializer),this.remoteDocumentCache=lR(this.serializer),this.$r=new w6,this.window&&this.window.localStorage?this.di=this.window.localStorage:(this.di=null,c===!1&&Me("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.Ai().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new A(T.FAILED_PRECONDITION,Tp);return this.Ri(),this.Vi(),this.mi(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.Qr.getHighestSequenceNumber(e))}).then(e=>{this.kr=new Vt(e,this._i)}).then(()=>{this.qr=!0}).catch(e=>(this.Ei&&this.Ei.close(),Promise.reject(e)))}fi(e){return this.Ii=async n=>{if(this.started)return e(n)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.Ei.L(async n=>{n.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.oi.enqueueAndForget(async()=>{this.started&&await this.Ai()}))}Ai(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>kc(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.gi(e).next(n=>{n||(this.isPrimary=!1,this.oi.enqueueRetryable(()=>this.Ii(!1)))})}).next(()=>this.pi(e)).next(n=>this.isPrimary&&!n?this.yi(e).next(()=>!1):!!n&&this.wi(e).next(()=>!0))).catch(e=>{if(vi(e))return P("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return P("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.oi.enqueueRetryable(()=>this.Ii(e)),this.isPrimary=e})}gi(e){return Aa(e).get("owner").next(n=>I.resolve(this.Si(n)))}bi(e){return kc(e).delete(this.clientId)}async Di(){if(this.isPrimary&&!this.Ci(this.Pi,18e5)){this.Pi=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",n=>{const r=tt(n,"clientMetadata");return r.W().next(i=>{const s=this.vi(i,18e5),o=i.filter(a=>s.indexOf(a)===-1);return I.forEach(o,a=>r.delete(a.clientId)).next(()=>o)})}).catch(()=>[]);if(this.di)for(const n of e)this.di.removeItem(this.Fi(n.clientId))}}mi(){this.hi=this.oi.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.Ai().then(()=>this.Di()).then(()=>this.mi()))}Si(e){return!!e&&e.ownerId===this.clientId}pi(e){return this.ai?I.resolve(!0):Aa(e).get("owner").next(n=>{if(n!==null&&this.Ci(n.leaseTimestampMs,5e3)&&!this.Mi(n.ownerId)){if(this.Si(n)&&this.networkEnabled)return!0;if(!this.Si(n)){if(!n.allowTabSynchronization)throw new A(T.FAILED_PRECONDITION,Tp);return!1}}return!(!this.networkEnabled||!this.inForeground)||kc(e).W().next(r=>this.vi(r,5e3).find(i=>{if(this.clientId!==i.clientId){const s=!this.networkEnabled&&i.networkEnabled,o=!this.inForeground&&i.inForeground,a=this.networkEnabled===i.networkEnabled;if(s||o&&a)return!0}return!1})===void 0)}).next(n=>(this.isPrimary!==n&&P("IndexedDbPersistence",`Client ${n?"is":"is not"} eligible for a primary lease.`),n))}async shutdown(){this.qr=!1,this.xi(),this.hi&&(this.hi.cancel(),this.hi=null),this.Oi(),this.Ni(),await this.Ei.runTransaction("shutdown","readwrite",["owner","clientMetadata"],e=>{const n=new og(e,Vt._e);return this.yi(n).next(()=>this.bi(n))}),this.Ei.close(),this.Bi()}vi(e,n){return e.filter(r=>this.Ci(r.updateTimeMs,n)&&!this.Mi(r.clientId))}Li(){return this.runTransaction("getActiveClients","readonly",e=>kc(e).W().next(n=>this.vi(n,18e5).map(r=>r.clientId)))}get started(){return this.qr}getMutationQueue(e,n){return af.lt(e,this.serializer,n,this.referenceDelegate)}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new k6(e,this.serializer.ct.databaseId)}getDocumentOverlayCache(e){return of.lt(this.serializer,e)}getBundleCache(){return this.$r}runTransaction(e,n,r){P("IndexedDbPersistence","Starting transaction:",e);const i=n==="readonly"?"readonly":"readwrite",s=function(l){return l===15?x5:l===14?uk:l===13?lk:l===12?C5:l===11?ak:void V()}(this.ui);let o;return this.Ei.runTransaction(e,i,s,a=>(o=new og(a,this.kr?this.kr.next():Vt._e),n==="readwrite-primary"?this.gi(o).next(l=>!!l||this.pi(o)).next(l=>{if(!l)throw Me(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.oi.enqueueRetryable(()=>this.Ii(!1)),new A(T.FAILED_PRECONDITION,rk);return r(o)}).next(l=>this.wi(o).next(()=>l)):this.ki(o).next(()=>r(o)))).then(a=>(o.raiseOnCommittedEvent(),a))}ki(e){return Aa(e).get("owner").next(n=>{if(n!==null&&this.Ci(n.leaseTimestampMs,5e3)&&!this.Mi(n.ownerId)&&!this.Si(n)&&!(this.ai||this.allowTabSynchronization&&n.allowTabSynchronization))throw new A(T.FAILED_PRECONDITION,Tp)})}wi(e){const n={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return Aa(e).put("owner",n)}static D(){return nn.D()}yi(e){const n=Aa(e);return n.get("owner").next(r=>this.Si(r)?(P("IndexedDbPersistence","Releasing primary lease."),n.delete("owner")):I.resolve())}Ci(e,n){const r=Date.now();return!(e<r-n)&&(!(e>r)||(Me(`Detected an update time that is in the future: ${e} > ${r}`),!1))}Ri(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.li=()=>{this.oi.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.Ai()))},this.document.addEventListener("visibilitychange",this.li),this.inForeground=this.document.visibilityState==="visible")}Oi(){this.li&&(this.document.removeEventListener("visibilitychange",this.li),this.li=null)}Vi(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.ci=()=>{this.xi();const n=/(?:Version|Mobile)\/1[456]/;jS()&&(navigator.appVersion.match(n)||navigator.userAgent.match(n))&&this.oi.enterRestrictedMode(!0),this.oi.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.ci))}Ni(){this.ci&&(this.window.removeEventListener("pagehide",this.ci),this.ci=null)}Mi(e){var n;try{const r=((n=this.di)===null||n===void 0?void 0:n.getItem(this.Fi(e)))!==null;return P("IndexedDbPersistence",`Client '${e}' ${r?"is":"is not"} zombied in LocalStorage`),r}catch(r){return Me("IndexedDbPersistence","Failed to get zombied client id.",r),!1}}xi(){if(this.di)try{this.di.setItem(this.Fi(this.clientId),String(Date.now()))}catch(e){Me("Failed to set zombie client id.",e)}}Bi(){if(this.di)try{this.di.removeItem(this.Fi(this.clientId))}catch{}}Fi(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function Aa(t){return tt(t,"owner")}function kc(t){return tt(t,"clientMetadata")}function Xv(t,e){let n=t.projectId;return t.isDefaultDatabase||(n+="."+t.database),"firestore/"+e+"/"+n+"/"}/**
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
 */class Jv{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.qi=r,this.Qi=i}static Ki(e,n){let r=K(),i=K();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Jv(e,n.fromCache,r,i)}}/**
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
 */class W6{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class dR{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return jS()?8:nn.v(Ee())>0?6:4}()}initialize(e,n){this.zi=e,this.indexManager=n,this.$i=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.ji(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Hi(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new W6;return this.Ji(e,n,o).next(a=>{if(s.result=a,this.Ui)return this.Yi(e,n,o,a.size)})}).next(()=>s.result)}Yi(e,n,r,i){return r.documentReadCount<this.Wi?(Os()<=X.DEBUG&&P("QueryEngine","SDK will not create cache indexes for query:",Vs(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),I.resolve()):(Os()<=X.DEBUG&&P("QueryEngine","Query:",Vs(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Gi*i?(Os()<=X.DEBUG&&P("QueryEngine","The SDK decides to create cache indexes for query:",Vs(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,kt(n))):I.resolve())}ji(e,n){if(NI(n))return I.resolve(null);let r=kt(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Hd(n,null,"F"),r=kt(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=K(...s);return this.zi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.Zi(n,a);return this.Xi(n,u,o,l.readTime)?this.ji(e,Hd(n,null,"F")):this.es(e,u,n,l)}))})))}Hi(e,n,r,i){return NI(n)||i.isEqual(z.min())?I.resolve(null):this.zi.getDocuments(e,r).next(s=>{const o=this.Zi(n,s);return this.Xi(n,o,r,i)?I.resolve(null):(Os()<=X.DEBUG&&P("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Vs(n)),this.es(e,o,n,tk(i,-1)).next(a=>a))})}Zi(e,n){let r=new ue(Sk(e));return n.forEach((i,s)=>{Ou(e,s)&&(r=r.add(s))}),r}Xi(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Ji(e,n,r){return Os()<=X.DEBUG&&P("QueryEngine","Using full collection scan to execute query:",Vs(n)),this.zi.getDocumentsMatchingQuery(e,n,Ht.min(),r)}es(e,n,r,i){return this.zi.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class G6{constructor(e,n,r,i){this.persistence=e,this.ts=n,this.serializer=i,this.ns=new de(W),this.rs=new _i(s=>ls(s),Nu),this.ss=new Map,this.os=e.getRemoteDocumentCache(),this.Qr=e.getTargetCache(),this.$r=e.getBundleCache(),this._s(r)}_s(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new uR(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ns))}}function hR(t,e,n,r){return new G6(t,e,n,r)}async function fR(t,e){const n=D(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n._s(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=K();for(const u of i){o.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}for(const u of s){a.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}return n.localDocuments.getDocuments(r,l).next(u=>({us:u,removedBatchIds:o,addedBatchIds:a}))})})}function K6(t,e){const n=D(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.os.newChangeBuffer({trackRemovals:!0});return function(a,l,u,c){const d=u.batch,h=d.keys();let f=I.resolve();return h.forEach(_=>{f=f.next(()=>c.getEntry(l,_)).next(v=>{const w=u.docVersions.get(_);$(w!==null),v.version.compareTo(w)<0&&(d.applyToRemoteDocument(v,u),v.isValidDocument()&&(v.setReadTime(u.commitVersion),c.addEntry(v)))})}),f.next(()=>a.mutationQueue.removeMutationBatch(l,d))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=K();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(l=l.add(a.batch.mutations[u].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function pR(t){const e=D(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Qr.getLastRemoteSnapshotVersion(n))}function H6(t,e){const n=D(t),r=e.snapshotVersion;let i=n.ns;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.os.newChangeBuffer({trackRemovals:!0});i=n.ns;const a=[];e.targetChanges.forEach((c,d)=>{const h=i.get(d);if(!h)return;a.push(n.Qr.removeMatchingKeys(s,c.removedDocuments,d).next(()=>n.Qr.addMatchingKeys(s,c.addedDocuments,d)));let f=h.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(d)!==null?f=f.withResumeToken(Ge.EMPTY_BYTE_STRING,z.min()).withLastLimboFreeSnapshotVersion(z.min()):c.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(c.resumeToken,r)),i=i.insert(d,f),function(v,w,m){return v.resumeToken.approximateByteSize()===0||w.snapshotVersion.toMicroseconds()-v.snapshotVersion.toMicroseconds()>=3e8?!0:m.addedDocuments.size+m.modifiedDocuments.size+m.removedDocuments.size>0}(h,f,c)&&a.push(n.Qr.updateTargetData(s,f))});let l=Mt(),u=K();if(e.documentUpdates.forEach(c=>{e.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,c))}),a.push(mR(s,o,e.documentUpdates).next(c=>{l=c.cs,u=c.ls})),!r.isEqual(z.min())){const c=n.Qr.getLastRemoteSnapshotVersion(s).next(d=>n.Qr.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(c)}return I.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,u)).next(()=>l)}).then(s=>(n.ns=i,s))}function mR(t,e,n){let r=K(),i=K();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Mt();return n.forEach((a,l)=>{const u=s.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(z.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):P("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{cs:o,ls:i}})}function Q6(t,e){const n=D(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function Oo(t,e){const n=D(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Qr.getTargetData(r,e).next(s=>s?(i=s,I.resolve(i)):n.Qr.allocateTargetId(r).next(o=>(i=new Qn(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Qr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.ns.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.ns=n.ns.insert(r.targetId,r),n.rs.set(e,r.targetId)),r})}async function Vo(t,e,n){const r=D(t),i=r.ns.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!vi(o))throw o;P("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.ns=r.ns.remove(e),r.rs.delete(i.target)}function Jd(t,e,n){const r=D(t);let i=z.min(),s=K();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,u,c){const d=D(l),h=d.rs.get(c);return h!==void 0?I.resolve(d.ns.get(h)):d.Qr.getTargetData(u,c)}(r,o,kt(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.ts.getDocumentsMatchingQuery(o,e,n?i:z.min(),n?s:K())).next(a=>(vR(r,Tk(e),a),{documents:a,hs:s})))}function gR(t,e){const n=D(t),r=D(n.Qr),i=n.ns.get(e);return i?Promise.resolve(i.target):n.persistence.runTransaction("Get target data","readonly",s=>r._t(s,e).next(o=>o?o.target:null))}function yR(t,e){const n=D(t),r=n.ss.get(e)||z.min();return n.persistence.runTransaction("Get new document changes","readonly",i=>n.os.getAllFromCollectionGroup(i,e,tk(r,-1),Number.MAX_SAFE_INTEGER)).then(i=>(vR(n,e,i),i))}function vR(t,e,n){let r=t.ss.get(e)||z.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.ss.set(e,r)}async function Y6(t,e,n,r){const i=D(t);let s=K(),o=Mt();for(const u of n){const c=e.Ps(u.metadata.name);u.document&&(s=s.add(c));const d=e.Is(u);d.setReadTime(e.Ts(u.metadata.readTime)),o=o.insert(c,d)}const a=i.os.newChangeBuffer({trackRemovals:!0}),l=await Oo(i,function(c){return kt(Zo(Z.fromString(`__bundle__/docs/${c}`)))}(r));return i.persistence.runTransaction("Apply bundle documents","readwrite",u=>mR(u,a,o).next(c=>(a.apply(u),c)).next(c=>i.Qr.removeMatchingKeysForTargetId(u,l.targetId).next(()=>i.Qr.addMatchingKeys(u,s,l.targetId)).next(()=>i.localDocuments.getLocalViewOfDocuments(u,c.cs,c.ls)).next(()=>c.cs)))}async function X6(t,e,n=K()){const r=await Oo(t,kt(Gv(e.bundledQuery))),i=D(t);return i.persistence.runTransaction("Save named query","readwrite",s=>{const o=Fe(e.readTime);if(r.snapshotVersion.compareTo(o)>=0)return i.$r.saveNamedQuery(s,e);const a=r.withResumeToken(Ge.EMPTY_BYTE_STRING,o);return i.ns=i.ns.insert(a.targetId,a),i.Qr.updateTargetData(s,a).next(()=>i.Qr.removeMatchingKeysForTargetId(s,r.targetId)).next(()=>i.Qr.addMatchingKeys(s,n,r.targetId)).next(()=>i.$r.saveNamedQuery(s,e))})}function aE(t,e){return`firestore_clients_${t}_${e}`}function lE(t,e,n){let r=`firestore_mutations_${t}_${n}`;return e.isAuthenticated()&&(r+=`_${e.uid}`),r}function Sp(t,e){return`firestore_targets_${t}_${e}`}class Zd{constructor(e,n,r,i){this.user=e,this.batchId=n,this.state=r,this.error=i}static Es(e,n,r){const i=JSON.parse(r);let s,o=typeof i=="object"&&["pending","acknowledged","rejected"].indexOf(i.state)!==-1&&(i.error===void 0||typeof i.error=="object");return o&&i.error&&(o=typeof i.error.message=="string"&&typeof i.error.code=="string",o&&(s=new A(i.error.code,i.error.message))),o?new Zd(e,n,i.state,s):(Me("SharedClientState",`Failed to parse mutation state for ID '${n}': ${r}`),null)}ds(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class il{constructor(e,n,r){this.targetId=e,this.state=n,this.error=r}static Es(e,n){const r=JSON.parse(n);let i,s=typeof r=="object"&&["not-current","current","rejected"].indexOf(r.state)!==-1&&(r.error===void 0||typeof r.error=="object");return s&&r.error&&(s=typeof r.error.message=="string"&&typeof r.error.code=="string",s&&(i=new A(r.error.code,r.error.message))),s?new il(e,r.state,i):(Me("SharedClientState",`Failed to parse target state for ID '${e}': ${n}`),null)}ds(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class eh{constructor(e,n){this.clientId=e,this.activeTargetIds=n}static Es(e,n){const r=JSON.parse(n);let i=typeof r=="object"&&r.activeTargetIds instanceof Array,s=Uv();for(let o=0;i&&o<r.activeTargetIds.length;++o)i=sk(r.activeTargetIds[o]),s=s.add(r.activeTargetIds[o]);return i?new eh(e,s):(Me("SharedClientState",`Failed to parse client data for instance '${e}': ${n}`),null)}}class Zv{constructor(e,n){this.clientId=e,this.onlineState=n}static Es(e){const n=JSON.parse(e);return typeof n=="object"&&["Unknown","Online","Offline"].indexOf(n.onlineState)!==-1&&typeof n.clientId=="string"?new Zv(n.clientId,n.onlineState):(Me("SharedClientState",`Failed to parse online state: ${e}`),null)}}class wg{constructor(){this.activeTargetIds=Uv()}As(e){this.activeTargetIds=this.activeTargetIds.add(e)}Rs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ds(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Ap{constructor(e,n,r,i,s){this.window=e,this.oi=n,this.persistenceKey=r,this.Vs=i,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.fs=this.gs.bind(this),this.ps=new de(W),this.started=!1,this.ys=[];const o=r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=s,this.ws=aE(this.persistenceKey,this.Vs),this.Ss=function(l){return`firestore_sequence_number_${l}`}(this.persistenceKey),this.ps=this.ps.insert(this.Vs,new wg),this.bs=new RegExp(`^firestore_clients_${o}_([^_]*)$`),this.Ds=new RegExp(`^firestore_mutations_${o}_(\\d+)(?:_(.*))?$`),this.Cs=new RegExp(`^firestore_targets_${o}_(\\d+)$`),this.vs=function(l){return`firestore_online_state_${l}`}(this.persistenceKey),this.Fs=function(l){return`firestore_bundle_loaded_v2_${l}`}(this.persistenceKey),this.window.addEventListener("storage",this.fs)}static D(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.Li();for(const r of e){if(r===this.Vs)continue;const i=this.getItem(aE(this.persistenceKey,r));if(i){const s=eh.Es(r,i);s&&(this.ps=this.ps.insert(s.clientId,s))}}this.Ms();const n=this.storage.getItem(this.vs);if(n){const r=this.xs(n);r&&this.Os(r)}for(const r of this.ys)this.gs(r);this.ys=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.Ss,JSON.stringify(e))}getAllActiveQueryTargets(){return this.Ns(this.ps)}isActiveQueryTarget(e){let n=!1;return this.ps.forEach((r,i)=>{i.activeTargetIds.has(e)&&(n=!0)}),n}addPendingMutation(e){this.Bs(e,"pending")}updateMutationState(e,n,r){this.Bs(e,n,r),this.Ls(e)}addLocalQueryTarget(e){let n="not-current";if(this.isActiveQueryTarget(e)){const r=this.storage.getItem(Sp(this.persistenceKey,e));if(r){const i=il.Es(e,r);i&&(n=i.state)}}return this.ks.As(e),this.Ms(),n}removeLocalQueryTarget(e){this.ks.Rs(e),this.Ms()}isLocalQueryTarget(e){return this.ks.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(Sp(this.persistenceKey,e))}updateQueryState(e,n,r){this.qs(e,n,r)}handleUserChange(e,n,r){n.forEach(i=>{this.Ls(i)}),this.currentUser=e,r.forEach(i=>{this.addPendingMutation(i)})}setOnlineState(e){this.Qs(e)}notifyBundleLoaded(e){this.Ks(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.fs),this.removeItem(this.ws),this.started=!1)}getItem(e){const n=this.storage.getItem(e);return P("SharedClientState","READ",e,n),n}setItem(e,n){P("SharedClientState","SET",e,n),this.storage.setItem(e,n)}removeItem(e){P("SharedClientState","REMOVE",e),this.storage.removeItem(e)}gs(e){const n=e;if(n.storageArea===this.storage){if(P("SharedClientState","EVENT",n.key,n.newValue),n.key===this.ws)return void Me("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.oi.enqueueRetryable(async()=>{if(this.started){if(n.key!==null){if(this.bs.test(n.key)){if(n.newValue==null){const r=this.$s(n.key);return this.Us(r,null)}{const r=this.Ws(n.key,n.newValue);if(r)return this.Us(r.clientId,r)}}else if(this.Ds.test(n.key)){if(n.newValue!==null){const r=this.Gs(n.key,n.newValue);if(r)return this.zs(r)}}else if(this.Cs.test(n.key)){if(n.newValue!==null){const r=this.js(n.key,n.newValue);if(r)return this.Hs(r)}}else if(n.key===this.vs){if(n.newValue!==null){const r=this.xs(n.newValue);if(r)return this.Os(r)}}else if(n.key===this.Ss){const r=function(s){let o=Vt._e;if(s!=null)try{const a=JSON.parse(s);$(typeof a=="number"),o=a}catch(a){Me("SharedClientState","Failed to read sequence number from WebStorage",a)}return o}(n.newValue);r!==Vt._e&&this.sequenceNumberHandler(r)}else if(n.key===this.Fs){const r=this.Js(n.newValue);await Promise.all(r.map(i=>this.syncEngine.Ys(i)))}}}else this.ys.push(n)})}}get ks(){return this.ps.get(this.Vs)}Ms(){this.setItem(this.ws,this.ks.ds())}Bs(e,n,r){const i=new Zd(this.currentUser,e,n,r),s=lE(this.persistenceKey,this.currentUser,e);this.setItem(s,i.ds())}Ls(e){const n=lE(this.persistenceKey,this.currentUser,e);this.removeItem(n)}Qs(e){const n={clientId:this.Vs,onlineState:e};this.storage.setItem(this.vs,JSON.stringify(n))}qs(e,n,r){const i=Sp(this.persistenceKey,e),s=new il(e,n,r);this.setItem(i,s.ds())}Ks(e){const n=JSON.stringify(Array.from(e));this.setItem(this.Fs,n)}$s(e){const n=this.bs.exec(e);return n?n[1]:null}Ws(e,n){const r=this.$s(e);return eh.Es(r,n)}Gs(e,n){const r=this.Ds.exec(e),i=Number(r[1]),s=r[2]!==void 0?r[2]:null;return Zd.Es(new Ye(s),i,n)}js(e,n){const r=this.Cs.exec(e),i=Number(r[1]);return il.Es(i,n)}xs(e){return Zv.Es(e)}Js(e){return JSON.parse(e)}async zs(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.Zs(e.batchId,e.state,e.error);P("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}Hs(e){return this.syncEngine.Xs(e.targetId,e.state,e.error)}Us(e,n){const r=n?this.ps.insert(e,n):this.ps.remove(e),i=this.Ns(this.ps),s=this.Ns(r),o=[],a=[];return s.forEach(l=>{i.has(l)||o.push(l)}),i.forEach(l=>{s.has(l)||a.push(l)}),this.syncEngine.eo(o,a).then(()=>{this.ps=r})}Os(e){this.ps.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}Ns(e){let n=Uv();return e.forEach((r,i)=>{n=n.unionWith(i.activeTargetIds)}),n}}class _R{constructor(){this.no=new wg,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.no.As(e),this.ro[e]||"not-current"}updateQueryState(e,n,r){this.ro[e]=n}removeLocalQueryTarget(e){this.no.Rs(e)}isLocalQueryTarget(e){return this.no.activeTargetIds.has(e)}clearQueryState(e){delete this.ro[e]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(e){return this.no.activeTargetIds.has(e)}start(){return this.no=new wg,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class J6{io(e){}shutdown(){}}/**
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
 */class uE{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(e){this.uo.push(e)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){P("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.uo)e(0)}ao(){P("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.uo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Rc=null;function Pp(){return Rc===null?Rc=function(){return 268435456+Math.round(2147483648*Math.random())}():Rc++,"0x"+Rc.toString(16)}/**
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
 */const Z6={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class eU{constructor(e){this.lo=e.lo,this.ho=e.ho}Po(e){this.Io=e}To(e){this.Eo=e}onMessage(e){this.Ao=e}close(){this.ho()}send(e){this.lo(e)}Ro(){this.Io()}Vo(e){this.Eo(e)}mo(e){this.Ao(e)}}/**
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
 */const mt="WebChannelConnection";class tU extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.fo=r+"://"+n.host,this.po=`projects/${i}/databases/${s}`,this.yo=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get wo(){return!1}So(n,r,i,s,o){const a=Pp(),l=this.bo(n,r.toUriEncodedString());P("RestConnection",`Sending RPC '${n}' ${a}:`,l,i);const u={"google-cloud-resource-prefix":this.po,"x-goog-request-params":this.yo};return this.Do(u,s,o),this.Co(n,l,u,i).then(c=>(P("RestConnection",`Received RPC '${n}' ${a}: `,c),c),c=>{throw wn("RestConnection",`RPC '${n}' ${a} failed with error: `,c,"url: ",l,"request:",i),c})}vo(n,r,i,s,o,a){return this.So(n,r,i,s,o)}Do(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Jo}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}bo(n,r){const i=Z6[n];return`${this.fo}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Co(e,n,r,i){const s=Pp();return new Promise((o,a)=>{const l=new X3;l.setWithCredentials(!0),l.listenOnce(Q3.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Ip.NO_ERROR:const c=l.getResponseJson();P(mt,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(c)),o(c);break;case Ip.TIMEOUT:P(mt,`RPC '${e}' ${s} timed out`),a(new A(T.DEADLINE_EXCEEDED,"Request time out"));break;case Ip.HTTP_ERROR:const d=l.getStatus();if(P(mt,`RPC '${e}' ${s} failed with status:`,d,"response text:",l.getResponseText()),d>0){let h=l.getResponseJson();Array.isArray(h)&&(h=h[0]);const f=h==null?void 0:h.error;if(f&&f.status&&f.message){const _=function(w){const m=w.toLowerCase().replace(/_/g,"-");return Object.values(T).indexOf(m)>=0?m:T.UNKNOWN}(f.status);a(new A(_,f.message))}else a(new A(T.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new A(T.UNAVAILABLE,"Connection failed."));break;default:V()}}finally{P(mt,`RPC '${e}' ${s} completed.`)}});const u=JSON.stringify(i);P(mt,`RPC '${e}' ${s} sending request:`,i),l.send(n,"POST",u,r,15)})}Fo(e,n,r){const i=Pp(),s=[this.fo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=K3(),a=H3(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Do(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const c=s.join("");P(mt,`Creating RPC '${e}' stream ${i}: ${c}`,l);const d=o.createWebChannel(c,l);let h=!1,f=!1;const _=new eU({lo:w=>{f?P(mt,`Not sending because RPC '${e}' stream ${i} is closed:`,w):(h||(P(mt,`Opening RPC '${e}' stream ${i} transport.`),d.open(),h=!0),P(mt,`RPC '${e}' stream ${i} sending:`,w),d.send(w))},ho:()=>d.close()}),v=(w,m,p)=>{w.listen(m,g=>{try{p(g)}catch(E){setTimeout(()=>{throw E},0)}})};return v(d,Tc.EventType.OPEN,()=>{f||P(mt,`RPC '${e}' stream ${i} transport opened.`)}),v(d,Tc.EventType.CLOSE,()=>{f||(f=!0,P(mt,`RPC '${e}' stream ${i} transport closed`),_.Vo())}),v(d,Tc.EventType.ERROR,w=>{f||(f=!0,wn(mt,`RPC '${e}' stream ${i} transport errored:`,w),_.Vo(new A(T.UNAVAILABLE,"The operation could not be completed")))}),v(d,Tc.EventType.MESSAGE,w=>{var m;if(!f){const p=w.data[0];$(!!p);const g=p,E=g.error||((m=g[0])===null||m===void 0?void 0:m.error);if(E){P(mt,`RPC '${e}' stream ${i} received error:`,E);const S=E.status;let R=function(J){const G=Ue[J];if(G!==void 0)return Fk(G)}(S),x=E.message;R===void 0&&(R=T.INTERNAL,x="Unknown error status: "+S+" with message "+E.message),f=!0,_.Vo(new A(R,x)),d.close()}else P(mt,`RPC '${e}' stream ${i} received:`,p),_.mo(p)}}),v(a,Y3.STAT_EVENT,w=>{w.stat===gI.PROXY?P(mt,`RPC '${e}' stream ${i} detected buffering proxy`):w.stat===gI.NOPROXY&&P(mt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{_.Ro()},0),_}}/**
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
 */function wR(){return typeof window<"u"?window:null}function Zc(){return typeof document<"u"?document:null}/**
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
 */function Fu(t){return new u6(t,!0)}/**
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
 */class e_{constructor(e,n,r=1e3,i=1.5,s=6e4){this.oi=e,this.timerId=n,this.Mo=r,this.xo=i,this.Oo=s,this.No=0,this.Bo=null,this.Lo=Date.now(),this.reset()}reset(){this.No=0}ko(){this.No=this.Oo}qo(e){this.cancel();const n=Math.floor(this.No+this.Qo()),r=Math.max(0,Date.now()-this.Lo),i=Math.max(0,n-r);i>0&&P("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.No} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Bo=this.oi.enqueueAfterDelay(this.timerId,i,()=>(this.Lo=Date.now(),e())),this.No*=this.xo,this.No<this.Mo&&(this.No=this.Mo),this.No>this.Oo&&(this.No=this.Oo)}Ko(){this.Bo!==null&&(this.Bo.skipDelay(),this.Bo=null)}cancel(){this.Bo!==null&&(this.Bo.cancel(),this.Bo=null)}Qo(){return(Math.random()-.5)*this.No}}/**
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
 */class IR{constructor(e,n,r,i,s,o,a,l){this.oi=e,this.$o=r,this.Uo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Wo=0,this.Go=null,this.zo=null,this.stream=null,this.jo=new e_(e,n)}Ho(){return this.state===1||this.state===5||this.Jo()}Jo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Yo()}async stop(){this.Ho()&&await this.close(0)}Zo(){this.state=0,this.jo.reset()}Xo(){this.Jo()&&this.Go===null&&(this.Go=this.oi.enqueueAfterDelay(this.$o,6e4,()=>this.e_()))}t_(e){this.n_(),this.stream.send(e)}async e_(){if(this.Jo())return this.close(0)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}r_(){this.zo&&(this.zo.cancel(),this.zo=null)}async close(e,n){this.n_(),this.r_(),this.jo.cancel(),this.Wo++,e!==4?this.jo.reset():n&&n.code===T.RESOURCE_EXHAUSTED?(Me(n.toString()),Me("Using maximum backoff delay to prevent overloading the backend."),this.jo.ko()):n&&n.code===T.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.i_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.To(n)}i_(){}auth(){this.state=1;const e=this.s_(this.Wo),n=this.Wo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Wo===n&&this.o_(r,i)},r=>{e(()=>{const i=new A(T.UNKNOWN,"Fetching auth token failed: "+r.message);return this.__(i)})})}o_(e,n){const r=this.s_(this.Wo);this.stream=this.a_(e,n),this.stream.Po(()=>{r(()=>(this.state=2,this.zo=this.oi.enqueueAfterDelay(this.Uo,1e4,()=>(this.Jo()&&(this.state=3),Promise.resolve())),this.listener.Po()))}),this.stream.To(i=>{r(()=>this.__(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Yo(){this.state=5,this.jo.qo(async()=>{this.state=0,this.start()})}__(e){return P("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}s_(e){return n=>{this.oi.enqueueAndForget(()=>this.Wo===e?n():(P("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class nU extends IR{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}a_(e,n){return this.connection.Fo("Listen",e,n)}onMessage(e){this.jo.reset();const n=h6(this.serializer,e),r=function(s){if(!("targetChange"in s))return z.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?z.min():o.readTime?Fe(o.readTime):z.min()}(e);return this.listener.u_(n,r)}c_(e){const n={};n.database=mg(this.serializer),n.addTarget=function(s,o){let a;const l=o.target;if(a=Gd(l)?{documents:Hk(s,l)}:{query:Qk(s,l).ut},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=zk(s,o.resumeToken);const u=fg(s,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo(z.min())>0){a.readTime=Do(s,o.snapshotVersion.toTimestamp());const u=fg(s,o.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,e);const r=p6(this.serializer,e);r&&(n.labels=r),this.t_(n)}l_(e){const n={};n.database=mg(this.serializer),n.removeTarget=e,this.t_(n)}}class rU extends IR{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.h_=!1}get P_(){return this.h_}start(){this.h_=!1,this.lastStreamToken=void 0,super.start()}i_(){this.h_&&this.I_([])}a_(e,n){return this.connection.Fo("Write",e,n)}onMessage(e){if($(!!e.streamToken),this.lastStreamToken=e.streamToken,this.h_){this.jo.reset();const n=f6(e.writeResults,e.commitTime),r=Fe(e.commitTime);return this.listener.T_(r,n)}return $(!e.writeResults||e.writeResults.length===0),this.h_=!0,this.listener.E_()}d_(){const e={};e.database=mg(this.serializer),this.t_(e)}I_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>nu(this.serializer,r))};this.t_(n)}}/**
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
 */class iU extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.A_=!1}R_(){if(this.A_)throw new A(T.FAILED_PRECONDITION,"The client has already been terminated.")}So(e,n,r,i){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.So(e,pg(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===T.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new A(T.UNKNOWN,s.toString())})}vo(e,n,r,i,s){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.vo(e,pg(n,r),i,o,a,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===T.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new A(T.UNKNOWN,o.toString())})}terminate(){this.A_=!0,this.connection.terminate()}}class sU{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.m_=0,this.f_=null,this.g_=!0}p_(){this.m_===0&&(this.y_("Unknown"),this.f_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.f_=null,this.w_("Backend didn't respond within 10 seconds."),this.y_("Offline"),Promise.resolve())))}S_(e){this.state==="Online"?this.y_("Unknown"):(this.m_++,this.m_>=1&&(this.b_(),this.w_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.y_("Offline")))}set(e){this.b_(),this.m_=0,e==="Online"&&(this.g_=!1),this.y_(e)}y_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}w_(e){const n=`Could not reach Cloud Firestore backend. ${e}
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
 */class oU{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.D_=[],this.C_=new Map,this.v_=new Set,this.F_=[],this.M_=s,this.M_.io(o=>{r.enqueueAndForget(async()=>{wi(this)&&(P("RemoteStore","Restarting streams for network reachability change."),await async function(l){const u=D(l);u.v_.add(4),await na(u),u.x_.set("Unknown"),u.v_.delete(4),await Uu(u)}(this))})}),this.x_=new sU(r,i)}}async function Uu(t){if(wi(t))for(const e of t.F_)await e(!0)}async function na(t){for(const e of t.F_)await e(!1)}function uf(t,e){const n=D(t);n.C_.has(e.targetId)||(n.C_.set(e.targetId,e),r_(n)?n_(n):ia(n).Jo()&&t_(n,e))}function ru(t,e){const n=D(t),r=ia(n);n.C_.delete(e),r.Jo()&&ER(n,e),n.C_.size===0&&(r.Jo()?r.Xo():wi(n)&&n.x_.set("Unknown"))}function t_(t,e){if(t.O_.Oe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(z.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}ia(t).c_(e)}function ER(t,e){t.O_.Oe(e),ia(t).l_(e)}function n_(t){t.O_=new s6({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),_t:e=>t.C_.get(e)||null,nt:()=>t.datastore.serializer.databaseId}),ia(t).start(),t.x_.p_()}function r_(t){return wi(t)&&!ia(t).Ho()&&t.C_.size>0}function wi(t){return D(t).v_.size===0}function TR(t){t.O_=void 0}async function aU(t){t.C_.forEach((e,n)=>{t_(t,e)})}async function lU(t,e){TR(t),r_(t)?(t.x_.S_(e),n_(t)):t.x_.set("Unknown")}async function uU(t,e,n){if(t.x_.set("Online"),e instanceof $k&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.C_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.C_.delete(a),i.O_.removeTarget(a))}(t,e)}catch(r){P("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await th(t,r)}else if(e instanceof Jc?t.O_.$e(e):e instanceof jk?t.O_.Je(e):t.O_.Ge(e),!n.isEqual(z.min()))try{const r=await pR(t.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.O_.it(o);return a.targetChanges.forEach((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const c=s.C_.get(u);c&&s.C_.set(u,c.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,u)=>{const c=s.C_.get(l);if(!c)return;s.C_.set(l,c.withResumeToken(Ge.EMPTY_BYTE_STRING,c.snapshotVersion)),ER(s,l);const d=new Qn(c.target,l,u,c.sequenceNumber);t_(s,d)}),s.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){P("RemoteStore","Failed to raise snapshot:",r),await th(t,r)}}async function th(t,e,n){if(!vi(e))throw e;t.v_.add(1),await na(t),t.x_.set("Offline"),n||(n=()=>pR(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{P("RemoteStore","Retrying IndexedDB access"),await n(),t.v_.delete(1),await Uu(t)})}function SR(t,e){return e().catch(n=>th(t,n,e))}async function ra(t){const e=D(t),n=ai(e);let r=e.D_.length>0?e.D_[e.D_.length-1].batchId:-1;for(;cU(e);)try{const i=await Q6(e.localStore,r);if(i===null){e.D_.length===0&&n.Xo();break}r=i.batchId,dU(e,i)}catch(i){await th(e,i)}AR(e)&&PR(e)}function cU(t){return wi(t)&&t.D_.length<10}function dU(t,e){t.D_.push(e);const n=ai(t);n.Jo()&&n.P_&&n.I_(e.mutations)}function AR(t){return wi(t)&&!ai(t).Ho()&&t.D_.length>0}function PR(t){ai(t).start()}async function hU(t){ai(t).d_()}async function fU(t){const e=ai(t);for(const n of t.D_)e.I_(n.mutations)}async function pU(t,e,n){const r=t.D_.shift(),i=zv.from(r,e,n);await SR(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await ra(t)}async function mU(t,e){e&&ai(t).P_&&await async function(r,i){if(function(o){return Mk(o)&&o!==T.ABORTED}(i.code)){const s=r.D_.shift();ai(r).Zo(),await SR(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await ra(r)}}(t,e),AR(t)&&PR(t)}async function cE(t,e){const n=D(t);n.asyncQueue.verifyOperationInProgress(),P("RemoteStore","RemoteStore received new credentials");const r=wi(n);n.v_.add(3),await na(n),r&&n.x_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.v_.delete(3),await Uu(n)}async function Ig(t,e){const n=D(t);e?(n.v_.delete(2),await Uu(n)):e||(n.v_.add(2),await na(n),n.x_.set("Unknown"))}function ia(t){return t.N_||(t.N_=function(n,r,i){const s=D(n);return s.R_(),new nU(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Po:aU.bind(null,t),To:lU.bind(null,t),u_:uU.bind(null,t)}),t.F_.push(async e=>{e?(t.N_.Zo(),r_(t)?n_(t):t.x_.set("Unknown")):(await t.N_.stop(),TR(t))})),t.N_}function ai(t){return t.B_||(t.B_=function(n,r,i){const s=D(n);return s.R_(),new rU(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Po:hU.bind(null,t),To:mU.bind(null,t),E_:fU.bind(null,t),T_:pU.bind(null,t)}),t.F_.push(async e=>{e?(t.B_.Zo(),await ra(t)):(await t.B_.stop(),t.D_.length>0&&(P("RemoteStore",`Stopping write stream with ${t.D_.length} pending writes`),t.D_=[]))})),t.B_}/**
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
 */class i_{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Je,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new i_(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new A(T.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function sa(t,e){if(Me("AsyncQueue",`${e}: ${t}`),vi(t))return new A(T.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class dE{constructor(){this.L_=new de(N.comparator)}track(e){const n=e.doc.key,r=this.L_.get(n);r?e.type!==0&&r.type===3?this.L_=this.L_.insert(n,e):e.type===3&&r.type!==1?this.L_=this.L_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.L_=this.L_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.L_=this.L_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.L_=this.L_.remove(n):e.type===1&&r.type===2?this.L_=this.L_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.L_=this.L_.insert(n,{type:2,doc:e.doc}):V():this.L_=this.L_.insert(n,e)}k_(){const e=[];return this.L_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Lo{constructor(e,n,r,i,s,o,a,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Lo(e,n,go.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Du(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class gU{constructor(){this.q_=void 0,this.Q_=[]}}class yU{constructor(){this.queries=new _i(e=>Ek(e),Du),this.onlineState="Unknown",this.K_=new Set}}async function s_(t,e){const n=D(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new gU),i)try{s.q_=await n.onListen(r)}catch(o){const a=sa(o,`Initialization of query '${Vs(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.Q_.push(e),e.U_(n.onlineState),s.q_&&e.W_(s.q_)&&a_(n)}async function o_(t,e){const n=D(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.Q_.indexOf(e);o>=0&&(s.Q_.splice(o,1),i=s.Q_.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function vU(t,e){const n=D(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.Q_)a.W_(i)&&(r=!0);o.q_=i}}r&&a_(n)}function _U(t,e,n){const r=D(t),i=r.queries.get(e);if(i)for(const s of i.Q_)s.onError(n);r.queries.delete(e)}function a_(t){t.K_.forEach(e=>{e.next()})}class l_{constructor(e,n,r){this.query=e,this.G_=n,this.z_=!1,this.j_=null,this.onlineState="Unknown",this.options=r||{}}W_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Lo(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.z_?this.H_(e)&&(this.G_.next(e),n=!0):this.J_(e,this.onlineState)&&(this.Y_(e),n=!0),this.j_=e,n}onError(e){this.G_.error(e)}U_(e){this.onlineState=e;let n=!1;return this.j_&&!this.z_&&this.J_(this.j_,e)&&(this.Y_(this.j_),n=!0),n}J_(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.Z_||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}H_(e){if(e.docChanges.length>0)return!0;const n=this.j_&&this.j_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Y_(e){e=Lo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.z_=!0,this.G_.next(e)}}/**
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
 */class wU{constructor(e,n){this.X_=e,this.byteLength=n}ea(){return"metadata"in this.X_}}/**
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
 */class hE{constructor(e){this.serializer=e}Ps(e){return Fn(this.serializer,e)}Is(e){return e.metadata.exists?Kk(this.serializer,e.document,!1):me.newNoDocument(this.Ps(e.metadata.name),this.Ts(e.metadata.readTime))}Ts(e){return Fe(e)}}class IU{constructor(e,n,r){this.ta=e,this.localStore=n,this.serializer=r,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=kR(e)}na(e){this.progress.bytesLoaded+=e.byteLength;let n=this.progress.documentsLoaded;if(e.X_.namedQuery)this.queries.push(e.X_.namedQuery);else if(e.X_.documentMetadata){this.documents.push({metadata:e.X_.documentMetadata}),e.X_.documentMetadata.exists||++n;const r=Z.fromString(e.X_.documentMetadata.name);this.collectionGroups.add(r.get(r.length-2))}else e.X_.document&&(this.documents[this.documents.length-1].document=e.X_.document,++n);return n!==this.progress.documentsLoaded?(this.progress.documentsLoaded=n,Object.assign({},this.progress)):null}ra(e){const n=new Map,r=new hE(this.serializer);for(const i of e)if(i.metadata.queries){const s=r.Ps(i.metadata.name);for(const o of i.metadata.queries){const a=(n.get(o)||K()).add(s);n.set(o,a)}}return n}async complete(){const e=await Y6(this.localStore,new hE(this.serializer),this.documents,this.ta.id),n=this.ra(this.documents);for(const r of this.queries)await X6(this.localStore,r,n.get(r.name));return this.progress.taskState="Success",{progress:this.progress,ia:this.collectionGroups,sa:e}}}function kR(t){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:t.totalDocuments,totalBytes:t.totalBytes}}/**
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
 */class RR{constructor(e){this.key=e}}class bR{constructor(e){this.key=e}}class CR{constructor(e,n){this.query=e,this.oa=n,this._a=null,this.hasCachedResults=!1,this.current=!1,this.aa=K(),this.mutatedKeys=K(),this.ua=Sk(e),this.ca=new go(this.ua)}get la(){return this.oa}ha(e,n){const r=n?n.Pa:new dE,i=n?n.ca:this.ca;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((c,d)=>{const h=i.get(c),f=Ou(this.query,d)?d:null,_=!!h&&this.mutatedKeys.has(h.key),v=!!f&&(f.hasLocalMutations||this.mutatedKeys.has(f.key)&&f.hasCommittedMutations);let w=!1;h&&f?h.data.isEqual(f.data)?_!==v&&(r.track({type:3,doc:f}),w=!0):this.Ia(h,f)||(r.track({type:2,doc:f}),w=!0,(l&&this.ua(f,l)>0||u&&this.ua(f,u)<0)&&(a=!0)):!h&&f?(r.track({type:0,doc:f}),w=!0):h&&!f&&(r.track({type:1,doc:h}),w=!0,(l||u)&&(a=!0)),w&&(f?(o=o.add(f),s=v?s.add(c):s.delete(c)):(o=o.delete(c),s=s.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),s=s.delete(c.key),r.track({type:1,doc:c})}return{ca:o,Pa:r,Xi:a,mutatedKeys:s}}Ia(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.ca;this.ca=e.ca,this.mutatedKeys=e.mutatedKeys;const o=e.Pa.k_();o.sort((c,d)=>function(f,_){const v=w=>{switch(w){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return V()}};return v(f)-v(_)}(c.type,d.type)||this.ua(c.doc,d.doc)),this.Ta(r),i=i!=null&&i;const a=n&&!i?this.Ea():[],l=this.aa.size===0&&this.current&&!i?1:0,u=l!==this._a;return this._a=l,o.length!==0||u?{snapshot:new Lo(this.query,e.ca,s,o,e.mutatedKeys,l===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),da:a}:{da:a}}U_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ca:this.ca,Pa:new dE,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{da:[]}}Aa(e){return!this.oa.has(e)&&!!this.ca.has(e)&&!this.ca.get(e).hasLocalMutations}Ta(e){e&&(e.addedDocuments.forEach(n=>this.oa=this.oa.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.oa=this.oa.delete(n)),this.current=e.current)}Ea(){if(!this.current)return[];const e=this.aa;this.aa=K(),this.ca.forEach(r=>{this.Aa(r.key)&&(this.aa=this.aa.add(r.key))});const n=[];return e.forEach(r=>{this.aa.has(r)||n.push(new bR(r))}),this.aa.forEach(r=>{e.has(r)||n.push(new RR(r))}),n}Ra(e){this.oa=e.hs,this.aa=K();const n=this.ha(e.documents);return this.applyChanges(n,!0)}Va(){return Lo.fromInitialDocuments(this.query,this.ca,this.mutatedKeys,this._a===0,this.hasCachedResults)}}class EU{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class TU{constructor(e){this.key=e,this.ma=!1}}class SU{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.fa={},this.ga=new _i(a=>Ek(a),Du),this.pa=new Map,this.ya=new Set,this.wa=new de(N.comparator),this.Sa=new Map,this.ba=new Qv,this.Da={},this.Ca=new Map,this.va=fs.Bn(),this.onlineState="Unknown",this.Fa=void 0}get isPrimaryClient(){return this.Fa===!0}}async function AU(t,e){const n=f_(t);let r,i;const s=n.ga.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.Va();else{const o=await Oo(n.localStore,kt(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await u_(n,e,r,a==="current",o.resumeToken),n.isPrimaryClient&&uf(n.remoteStore,o)}return i}async function u_(t,e,n,r,i){t.Ma=(d,h,f)=>async function(v,w,m,p){let g=w.view.ha(m);g.Xi&&(g=await Jd(v.localStore,w.query,!1).then(({documents:x})=>w.view.ha(x,g)));const E=p&&p.targetChanges.get(w.targetId),S=p&&p.targetMismatches.get(w.targetId)!=null,R=w.view.applyChanges(g,v.isPrimaryClient,E,S);return Eg(v,w.targetId,R.da),R.snapshot}(t,d,h,f);const s=await Jd(t.localStore,e,!0),o=new CR(e,s.hs),a=o.ha(s.documents),l=Mu.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),u=o.applyChanges(a,t.isPrimaryClient,l);Eg(t,n,u.da);const c=new EU(e,n,o);return t.ga.set(e,c),t.pa.has(n)?t.pa.get(n).push(e):t.pa.set(n,[e]),u.snapshot}async function PU(t,e){const n=D(t),r=n.ga.get(e),i=n.pa.get(r.targetId);if(i.length>1)return n.pa.set(r.targetId,i.filter(s=>!Du(s,e))),void n.ga.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Vo(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),ru(n.remoteStore,r.targetId),Mo(n,r.targetId)}).catch(yi)):(Mo(n,r.targetId),await Vo(n.localStore,r.targetId,!0))}async function kU(t,e,n){const r=p_(t);try{const i=await function(o,a){const l=D(o),u=Ie.now(),c=a.reduce((f,_)=>f.add(_.key),K());let d,h;return l.persistence.runTransaction("Locally write mutations","readwrite",f=>{let _=Mt(),v=K();return l.os.getEntries(f,c).next(w=>{_=w,_.forEach((m,p)=>{p.isValidDocument()||(v=v.add(m))})}).next(()=>l.localDocuments.getOverlayedDocuments(f,_)).next(w=>{d=w;const m=[];for(const p of a){const g=n6(p,d.get(p.key).overlayedDocument);g!=null&&m.push(new pr(p.key,g,fk(g.value.mapValue),we.exists(!0)))}return l.mutationQueue.addMutationBatch(f,u,m,a)}).next(w=>{h=w;const m=w.applyToLocalDocumentSet(d,v);return l.documentOverlayCache.saveOverlays(f,w.batchId,m)})}).then(()=>({batchId:h.batchId,changes:Pk(d)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,l){let u=o.Da[o.currentUser.toKey()];u||(u=new de(W)),u=u.insert(a,l),o.Da[o.currentUser.toKey()]=u}(r,i.batchId,n),await mr(r,i.changes),await ra(r.remoteStore)}catch(i){const s=sa(i,"Failed to persist write");n.reject(s)}}async function xR(t,e){const n=D(t);try{const r=await H6(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Sa.get(s);o&&($(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.ma=!0:i.modifiedDocuments.size>0?$(o.ma):i.removedDocuments.size>0&&($(o.ma),o.ma=!1))}),await mr(n,r,e)}catch(r){await yi(r)}}function fE(t,e,n){const r=D(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.ga.forEach((s,o)=>{const a=o.view.U_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const l=D(o);l.onlineState=a;let u=!1;l.queries.forEach((c,d)=>{for(const h of d.Q_)h.U_(a)&&(u=!0)}),u&&a_(l)}(r.eventManager,e),i.length&&r.fa.u_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function RU(t,e,n){const r=D(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Sa.get(e),s=i&&i.key;if(s){let o=new de(N.comparator);o=o.insert(s,me.newNoDocument(s,z.min()));const a=K().add(s),l=new Lu(z.min(),new Map,new de(W),o,a);await xR(r,l),r.wa=r.wa.remove(s),r.Sa.delete(e),h_(r)}else await Vo(r.localStore,e,!1).then(()=>Mo(r,e,n)).catch(yi)}async function bU(t,e){const n=D(t),r=e.batch.batchId;try{const i=await K6(n.localStore,e);d_(n,r,null),c_(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await mr(n,i)}catch(i){await yi(i)}}async function CU(t,e,n){const r=D(t);try{const i=await function(o,a){const l=D(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let c;return l.mutationQueue.lookupMutationBatch(u,a).next(d=>($(d!==null),c=d.keys(),l.mutationQueue.removeMutationBatch(u,d))).next(()=>l.mutationQueue.performConsistencyCheck(u)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(u,c,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,c)).next(()=>l.localDocuments.getDocuments(u,c))})}(r.localStore,e);d_(r,e,n),c_(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await mr(r,i)}catch(i){await yi(i)}}async function xU(t,e){const n=D(t);wi(n.remoteStore)||P("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const r=await function(o){const a=D(o);return a.persistence.runTransaction("Get highest unacknowledged batch id","readonly",l=>a.mutationQueue.getHighestUnacknowledgedBatchId(l))}(n.localStore);if(r===-1)return void e.resolve();const i=n.Ca.get(r)||[];i.push(e),n.Ca.set(r,i)}catch(r){const i=sa(r,"Initialization of waitForPendingWrites() operation failed");e.reject(i)}}function c_(t,e){(t.Ca.get(e)||[]).forEach(n=>{n.resolve()}),t.Ca.delete(e)}function d_(t,e,n){const r=D(t);let i=r.Da[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Da[r.currentUser.toKey()]=i}}function Mo(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.pa.get(e))t.ga.delete(r),n&&t.fa.xa(r,n);t.pa.delete(e),t.isPrimaryClient&&t.ba.Vr(e).forEach(r=>{t.ba.containsKey(r)||NR(t,r)})}function NR(t,e){t.ya.delete(e.path.canonicalString());const n=t.wa.get(e);n!==null&&(ru(t.remoteStore,n),t.wa=t.wa.remove(e),t.Sa.delete(n),h_(t))}function Eg(t,e,n){for(const r of n)r instanceof RR?(t.ba.addReference(r.key,e),NU(t,r)):r instanceof bR?(P("SyncEngine","Document no longer in limbo: "+r.key),t.ba.removeReference(r.key,e),t.ba.containsKey(r.key)||NR(t,r.key)):V()}function NU(t,e){const n=e.key,r=n.path.canonicalString();t.wa.get(n)||t.ya.has(r)||(P("SyncEngine","New document in limbo: "+n),t.ya.add(r),h_(t))}function h_(t){for(;t.ya.size>0&&t.wa.size<t.maxConcurrentLimboResolutions;){const e=t.ya.values().next().value;t.ya.delete(e);const n=new N(Z.fromString(e)),r=t.va.next();t.Sa.set(r,new TU(n)),t.wa=t.wa.insert(n,r),uf(t.remoteStore,new Qn(kt(Zo(n.path)),r,"TargetPurposeLimboResolution",Vt._e))}}async function mr(t,e,n){const r=D(t),i=[],s=[],o=[];r.ga.isEmpty()||(r.ga.forEach((a,l)=>{o.push(r.Ma(l,e,n).then(u=>{if((u||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const c=Jv.Ki(l.targetId,u);s.push(c)}}))}),await Promise.all(o),r.fa.u_(i),await async function(l,u){const c=D(l);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",d=>I.forEach(u,h=>I.forEach(h.qi,f=>c.persistence.referenceDelegate.addReference(d,h.targetId,f)).next(()=>I.forEach(h.Qi,f=>c.persistence.referenceDelegate.removeReference(d,h.targetId,f)))))}catch(d){if(!vi(d))throw d;P("LocalStore","Failed to update sequence numbers: "+d)}for(const d of u){const h=d.targetId;if(!d.fromCache){const f=c.ns.get(h),_=f.snapshotVersion,v=f.withLastLimboFreeSnapshotVersion(_);c.ns=c.ns.insert(h,v)}}}(r.localStore,s))}async function DU(t,e){const n=D(t);if(!n.currentUser.isEqual(e)){P("SyncEngine","User change. New user:",e.toKey());const r=await fR(n.localStore,e);n.currentUser=e,function(s,o){s.Ca.forEach(a=>{a.forEach(l=>{l.reject(new A(T.CANCELLED,o))})}),s.Ca.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await mr(n,r.us)}}function OU(t,e){const n=D(t),r=n.Sa.get(e);if(r&&r.ma)return K().add(r.key);{let i=K();const s=n.pa.get(e);if(!s)return i;for(const o of s){const a=n.ga.get(o);i=i.unionWith(a.view.la)}return i}}async function VU(t,e){const n=D(t),r=await Jd(n.localStore,e.query,!0),i=e.view.Ra(r);return n.isPrimaryClient&&Eg(n,e.targetId,i.da),i}async function LU(t,e){const n=D(t);return yR(n.localStore,e).then(r=>mr(n,r))}async function MU(t,e,n,r){const i=D(t),s=await function(a,l){const u=D(a),c=D(u.mutationQueue);return u.persistence.runTransaction("Lookup mutation documents","readonly",d=>c.vn(d,l).next(h=>h?u.localDocuments.getDocuments(d,h):I.resolve(null)))}(i.localStore,e);s!==null?(n==="pending"?await ra(i.remoteStore):n==="acknowledged"||n==="rejected"?(d_(i,e,r||null),c_(i,e),function(a,l){D(D(a).mutationQueue).Mn(l)}(i.localStore,e)):V(),await mr(i,s)):P("SyncEngine","Cannot apply mutation batch with id: "+e)}async function FU(t,e){const n=D(t);if(f_(n),p_(n),e===!0&&n.Fa!==!0){const r=n.sharedClientState.getAllActiveQueryTargets(),i=await pE(n,r.toArray());n.Fa=!0,await Ig(n.remoteStore,!0);for(const s of i)uf(n.remoteStore,s)}else if(e===!1&&n.Fa!==!1){const r=[];let i=Promise.resolve();n.pa.forEach((s,o)=>{n.sharedClientState.isLocalQueryTarget(o)?r.push(o):i=i.then(()=>(Mo(n,o),Vo(n.localStore,o,!0))),ru(n.remoteStore,o)}),await i,await pE(n,r),function(o){const a=D(o);a.Sa.forEach((l,u)=>{ru(a.remoteStore,u)}),a.ba.mr(),a.Sa=new Map,a.wa=new de(N.comparator)}(n),n.Fa=!1,await Ig(n.remoteStore,!1)}}async function pE(t,e,n){const r=D(t),i=[],s=[];for(const o of e){let a;const l=r.pa.get(o);if(l&&l.length!==0){a=await Oo(r.localStore,kt(l[0]));for(const u of l){const c=r.ga.get(u),d=await VU(r,c);d.snapshot&&s.push(d.snapshot)}}else{const u=await gR(r.localStore,o);a=await Oo(r.localStore,u),await u_(r,DR(u),o,!1,a.resumeToken)}i.push(a)}return r.fa.u_(s),i}function DR(t){return Ik(t.path,t.collectionGroup,t.orderBy,t.filters,t.limit,"F",t.startAt,t.endAt)}function UU(t){return function(n){return D(D(n).persistence).Li()}(D(t).localStore)}async function jU(t,e,n,r){const i=D(t);if(i.Fa)return void P("SyncEngine","Ignoring unexpected query state notification.");const s=i.pa.get(e);if(s&&s.length>0)switch(n){case"current":case"not-current":{const o=await yR(i.localStore,Tk(s[0])),a=Lu.createSynthesizedRemoteEventForCurrentChange(e,n==="current",Ge.EMPTY_BYTE_STRING);await mr(i,o,a);break}case"rejected":await Vo(i.localStore,e,!0),Mo(i,e,r);break;default:V()}}async function $U(t,e,n){const r=f_(t);if(r.Fa){for(const i of e){if(r.pa.has(i)){P("SyncEngine","Adding an already active target "+i);continue}const s=await gR(r.localStore,i),o=await Oo(r.localStore,s);await u_(r,DR(s),o.targetId,!1,o.resumeToken),uf(r.remoteStore,o)}for(const i of n)r.pa.has(i)&&await Vo(r.localStore,i,!1).then(()=>{ru(r.remoteStore,i),Mo(r,i)}).catch(yi)}}function f_(t){const e=D(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=xR.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=OU.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=RU.bind(null,e),e.fa.u_=vU.bind(null,e.eventManager),e.fa.xa=_U.bind(null,e.eventManager),e}function p_(t){const e=D(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=bU.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=CU.bind(null,e),e}function zU(t,e,n){const r=D(t);(async function(s,o,a){try{const l=await o.getMetadata();if(await function(f,_){const v=D(f),w=Fe(_.createTime);return v.persistence.runTransaction("hasNewerBundle","readonly",m=>v.$r.getBundleMetadata(m,_.id)).then(m=>!!m&&m.createTime.compareTo(w)>=0)}(s.localStore,l))return await o.close(),a._completeWith(function(f){return{taskState:"Success",documentsLoaded:f.totalDocuments,bytesLoaded:f.totalBytes,totalDocuments:f.totalDocuments,totalBytes:f.totalBytes}}(l)),Promise.resolve(new Set);a._updateProgress(kR(l));const u=new IU(l,s.localStore,o.serializer);let c=await o.Oa();for(;c;){const h=await u.na(c);h&&a._updateProgress(h),c=await o.Oa()}const d=await u.complete();return await mr(s,d.sa,void 0),await function(f,_){const v=D(f);return v.persistence.runTransaction("Save bundle","readwrite",w=>v.$r.saveBundleMetadata(w,_))}(s.localStore,l),a._completeWith(d.progress),Promise.resolve(d.ia)}catch(l){return wn("SyncEngine",`Loading bundle failed with ${l}`),a._failWith(l),Promise.resolve(new Set)}})(r,e,n).then(i=>{r.sharedClientState.notifyBundleLoaded(i)})}class Tg{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Fu(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return hR(this.persistence,new dR,e.initialUser,this.serializer)}createPersistence(e){return new cR(lf.Hr,this.serializer)}createSharedClientState(e){return new _R}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class OR extends Tg{constructor(e,n,r){super(),this.Na=e,this.cacheSizeBytes=n,this.forceOwnership=r,this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Na.initialize(this,e),await p_(this.Na.syncEngine),await ra(this.Na.remoteStore),await this.persistence.fi(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}createLocalStore(e){return hR(this.persistence,new dR,e.initialUser,this.serializer)}createGarbageCollectionScheduler(e,n){const r=this.persistence.referenceDelegate.garbageCollector;return new C6(r,e.asyncQueue,n)}createIndexBackfillerScheduler(e,n){const r=new f5(n,this.persistence);return new h5(e.asyncQueue,r)}createPersistence(e){const n=Xv(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),r=this.cacheSizeBytes!==void 0?Nt.withCacheSize(this.cacheSizeBytes):Nt.DEFAULT;return new Yv(this.synchronizeTabs,n,e.clientId,r,e.asyncQueue,wR(),Zc(),this.serializer,this.sharedClientState,!!this.forceOwnership)}createSharedClientState(e){return new _R}}class BU extends OR{constructor(e,n){super(e,n,!1),this.Na=e,this.cacheSizeBytes=n,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const n=this.Na.syncEngine;this.sharedClientState instanceof Ap&&(this.sharedClientState.syncEngine={Zs:MU.bind(null,n),Xs:jU.bind(null,n),eo:$U.bind(null,n),Li:UU.bind(null,n),Ys:LU.bind(null,n)},await this.sharedClientState.start()),await this.persistence.fi(async r=>{await FU(this.Na.syncEngine,r),this.gcScheduler&&(r&&!this.gcScheduler.started?this.gcScheduler.start():r||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(r&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():r||this.indexBackfillerScheduler.stop())})}createSharedClientState(e){const n=wR();if(!Ap.D(n))throw new A(T.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const r=Xv(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new Ap(n,e.asyncQueue,r,e.clientId,e.initialUser)}}class m_{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>fE(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=DU.bind(null,this.syncEngine),await Ig(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new yU}()}createDatastore(e){const n=Fu(e.databaseInfo.databaseId),r=function(s){return new tU(s)}(e.databaseInfo);return function(s,o,a,l){return new iU(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,a){return new oU(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>fE(this.syncEngine,n,0),function(){return uE.D()?new uE:new J6}())}createSyncEngine(e,n){return function(i,s,o,a,l,u,c){const d=new SU(i,s,o,a,l,u);return c&&(d.Fa=!0),d}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e;await async function(r){const i=D(r);P("RemoteStore","RemoteStore shutting down."),i.v_.add(5),await na(i),i.M_.shutdown(),i.x_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate()}}/**
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
 */function mE(t,e=10240){let n=0;return{async read(){if(n<t.byteLength){const r={value:t.slice(n,n+e),done:!1};return n+=e,r}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.resolve()}}/**
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
 */class cf{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ba(this.observer.next,e)}error(e){this.observer.error?this.Ba(this.observer.error,e):Me("Uncaught Error in snapshot listener:",e.toString())}La(){this.muted=!0}Ba(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class qU{constructor(e,n){this.ka=e,this.serializer=n,this.metadata=new Je,this.buffer=new Uint8Array,this.qa=function(){return new TextDecoder("utf-8")}(),this.Qa().then(r=>{r&&r.ea()?this.metadata.resolve(r.X_.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(r==null?void 0:r.X_)}`))},r=>this.metadata.reject(r))}close(){return this.ka.cancel()}async getMetadata(){return this.metadata.promise}async Oa(){return await this.getMetadata(),this.Qa()}async Qa(){const e=await this.Ka();if(e===null)return null;const n=this.qa.decode(e),r=Number(n);isNaN(r)&&this.$a(`length string (${n}) is not valid number`);const i=await this.Ua(r);return new wU(JSON.parse(i),e.length+r)}Wa(){return this.buffer.findIndex(e=>e===123)}async Ka(){for(;this.Wa()<0&&!await this.Ga(););if(this.buffer.length===0)return null;const e=this.Wa();e<0&&this.$a("Reached the end of bundle when a length string is expected.");const n=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),n}async Ua(e){for(;this.buffer.length<e;)await this.Ga()&&this.$a("Reached the end of bundle when more is expected.");const n=this.qa.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),n}$a(e){throw this.ka.cancel(),new Error(`Invalid bundle format: ${e}`)}async Ga(){const e=await this.ka.read();if(!e.done){const n=new Uint8Array(this.buffer.length+e.value.length);n.set(this.buffer),n.set(e.value,this.buffer.length),this.buffer=n}return e.done}}/**
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
 */class WU{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastTransactionError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw this.lastTransactionError=new A(T.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes."),this.lastTransactionError;const n=await async function(i,s){const o=D(i),a={documents:s.map(d=>tu(o.serializer,d))},l=await o.vo("BatchGetDocuments",o.serializer.databaseId,Z.emptyPath(),a,s.length),u=new Map;l.forEach(d=>{const h=d6(o.serializer,d);u.set(h.key.toString(),h)});const c=[];return s.forEach(d=>{const h=u.get(d.toString());$(!!h),c.push(h)}),c}(this.datastore,e);return n.forEach(r=>this.recordVersion(r)),n}set(e,n){this.write(n.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,n){try{this.write(n.toMutation(e,this.preconditionForUpdate(e)))}catch(r){this.lastTransactionError=r}this.writtenDocs.add(e.toString())}delete(e){this.write(new ta(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastTransactionError)throw this.lastTransactionError;const e=this.readVersions;this.mutations.forEach(n=>{e.delete(n.key.toString())}),e.forEach((n,r)=>{const i=N.fromPath(r);this.mutations.push(new jv(i,this.precondition(i)))}),await async function(r,i){const s=D(r),o={writes:i.map(a=>nu(s.serializer,a))};await s.So("Commit",s.serializer.databaseId,Z.emptyPath(),o)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let n;if(e.isFoundDocument())n=e.version;else{if(!e.isNoDocument())throw V();n=z.min()}const r=this.readVersions.get(e.key.toString());if(r){if(!n.isEqual(r))throw new A(T.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),n)}precondition(e){const n=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&n?n.isEqual(z.min())?we.exists(!1):we.updateTime(n):we.none()}preconditionForUpdate(e){const n=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&n){if(n.isEqual(z.min()))throw new A(T.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return we.updateTime(n)}return we.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
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
 */class GU{constructor(e,n,r,i,s){this.asyncQueue=e,this.datastore=n,this.options=r,this.updateFunction=i,this.deferred=s,this.za=r.maxAttempts,this.jo=new e_(this.asyncQueue,"transaction_retry")}ja(){this.za-=1,this.Ha()}Ha(){this.jo.qo(async()=>{const e=new WU(this.datastore),n=this.Ja(e);n&&n.then(r=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(r)}).catch(i=>{this.Ya(i)}))}).catch(r=>{this.Ya(r)})})}Ja(e){try{const n=this.updateFunction(e);return!xu(n)&&n.catch&&n.then?n:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(n){return this.deferred.reject(n),null}}Ya(e){this.za>0&&this.Za(e)?(this.za-=1,this.asyncQueue.enqueueAndForget(()=>(this.Ha(),Promise.resolve()))):this.deferred.reject(e)}Za(e){if(e.name==="FirebaseError"){const n=e.code;return n==="aborted"||n==="failed-precondition"||n==="already-exists"||!Mk(n)}return!1}}/**
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
 */class KU{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Ye.UNAUTHENTICATED,this.clientId=ZP.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{P("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(P("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new A(T.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Je;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=sa(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function ed(t,e){t.asyncQueue.verifyOperationInProgress(),P("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await fR(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Sg(t,e){t.asyncQueue.verifyOperationInProgress();const n=await g_(t);P("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>cE(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>cE(e.remoteStore,i)),t._onlineComponents=e}function VR(t){return t.name==="FirebaseError"?t.code===T.FAILED_PRECONDITION||t.code===T.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function g_(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){P("FirestoreClient","Using user provided OfflineComponentProvider");try{await ed(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!VR(n))throw n;wn("Error using user provided cache. Falling back to memory cache: "+n),await ed(t,new Tg)}}else P("FirestoreClient","Using default OfflineComponentProvider"),await ed(t,new Tg);return t._offlineComponents}async function df(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(P("FirestoreClient","Using user provided OnlineComponentProvider"),await Sg(t,t._uninitializedComponentsProvider._online)):(P("FirestoreClient","Using default OnlineComponentProvider"),await Sg(t,new m_))),t._onlineComponents}function LR(t){return g_(t).then(e=>e.persistence)}function y_(t){return g_(t).then(e=>e.localStore)}function MR(t){return df(t).then(e=>e.remoteStore)}function v_(t){return df(t).then(e=>e.syncEngine)}function HU(t){return df(t).then(e=>e.datastore)}async function Fo(t){const e=await df(t),n=e.eventManager;return n.onListen=AU.bind(null,e.syncEngine),n.onUnlisten=PU.bind(null,e.syncEngine),n}function QU(t){return t.asyncQueue.enqueue(async()=>{const e=await LR(t),n=await MR(t);return e.setNetworkEnabled(!0),function(i){const s=D(i);return s.v_.delete(0),Uu(s)}(n)})}function YU(t){return t.asyncQueue.enqueue(async()=>{const e=await LR(t),n=await MR(t);return e.setNetworkEnabled(!1),async function(i){const s=D(i);s.v_.add(0),await na(s),s.x_.set("Offline")}(n)})}function XU(t,e){const n=new Je;return t.asyncQueue.enqueueAndForget(async()=>async function(i,s,o){try{const a=await function(u,c){const d=D(u);return d.persistence.runTransaction("read document","readonly",h=>d.localDocuments.getDocument(h,c))}(i,s);a.isFoundDocument()?o.resolve(a):a.isNoDocument()?o.resolve(null):o.reject(new A(T.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(a){const l=sa(a,`Failed to get document '${s} from cache`);o.reject(l)}}(await y_(t),e,n)),n.promise}function FR(t,e,n={}){const r=new Je;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,u){const c=new cf({next:h=>{o.enqueueAndForget(()=>o_(s,d));const f=h.docs.has(a);!f&&h.fromCache?u.reject(new A(T.UNAVAILABLE,"Failed to get document because the client is offline.")):f&&h.fromCache&&l&&l.source==="server"?u.reject(new A(T.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(h)},error:h=>u.reject(h)}),d=new l_(Zo(a.path),c,{includeMetadataChanges:!0,Z_:!0});return s_(s,d)}(await Fo(t),t.asyncQueue,e,n,r)),r.promise}function JU(t,e){const n=new Je;return t.asyncQueue.enqueueAndForget(async()=>async function(i,s,o){try{const a=await Jd(i,s,!0),l=new CR(s,a.hs),u=l.ha(a.documents),c=l.applyChanges(u,!1);o.resolve(c.snapshot)}catch(a){const l=sa(a,`Failed to execute query '${s} against cache`);o.reject(l)}}(await y_(t),e,n)),n.promise}function UR(t,e,n={}){const r=new Je;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,u){const c=new cf({next:h=>{o.enqueueAndForget(()=>o_(s,d)),h.fromCache&&l.source==="server"?u.reject(new A(T.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(h)},error:h=>u.reject(h)}),d=new l_(a,c,{includeMetadataChanges:!0,Z_:!0});return s_(s,d)}(await Fo(t),t.asyncQueue,e,n,r)),r.promise}function ZU(t,e){const n=new cf(e);return t.asyncQueue.enqueueAndForget(async()=>function(i,s){D(i).K_.add(s),s.next()}(await Fo(t),n)),()=>{n.La(),t.asyncQueue.enqueueAndForget(async()=>function(i,s){D(i).K_.delete(s)}(await Fo(t),n))}}function ej(t,e,n,r){const i=function(o,a){let l;return l=typeof o=="string"?Uk().encode(o):o,function(c,d){return new qU(c,d)}(function(c,d){if(c instanceof Uint8Array)return mE(c,d);if(c instanceof ArrayBuffer)return mE(new Uint8Array(c),d);if(c instanceof ReadableStream)return c.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(l),a)}(n,Fu(e));t.asyncQueue.enqueueAndForget(async()=>{zU(await v_(t),i,r)})}function tj(t,e){return t.asyncQueue.enqueue(async()=>function(r,i){const s=D(r);return s.persistence.runTransaction("Get named query","readonly",o=>s.$r.getNamedQuery(o,i))}(await y_(t),e))}/**
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
 */function jR(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const gE=new Map;/**
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
 */function __(t,e,n){if(!n)throw new A(T.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function $R(t,e,n,r){if(e===!0&&r===!0)throw new A(T.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function yE(t){if(!N.isDocumentKey(t))throw new A(T.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function vE(t){if(N.isDocumentKey(t))throw new A(T.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function hf(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":V()}function se(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new A(T.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=hf(t);throw new A(T.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function zR(t,e){if(e<=0)throw new A(T.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
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
 */class _E{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new A(T.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new A(T.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}$R("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=jR((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new A(T.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new A(T.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new A(T.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class ju{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new _E({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new A(T.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new A(T.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new _E(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new t5;switch(r.type){case"firstParty":return new s5(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new A(T.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=gE.get(n);r&&(P("ComponentProvider","Removing Datastore"),gE.delete(n),r.terminate())}(this),Promise.resolve()}}function nj(t,e,n,r={}){var i;const s=(t=se(t,ju))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&wn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=Ye.MOCK_USER;else{a=cO(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new A(T.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new Ye(u)}t._authCredentials=new n5(new JP(a,l))}}/**
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
 */let Rt=class BR{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new BR(this.firestore,e,this._query)}},Ae=class qR{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Gr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new qR(this.firestore,e,this._key)}},Gr=class WR extends Rt{constructor(e,n,r){super(e,n,Zo(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ae(this.firestore,null,new N(e))}withConverter(e){return new WR(this.firestore,e,this._path)}};function GR(t,e,...n){if(t=B(t),__("collection","path",e),t instanceof ju){const r=Z.fromString(e,...n);return vE(r),new Gr(t,null,r)}{if(!(t instanceof Ae||t instanceof Gr))throw new A(T.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Z.fromString(e,...n));return vE(r),new Gr(t.firestore,null,r)}}function rj(t,e){if(t=se(t,ju),__("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new A(T.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new Rt(t,null,function(r){return new fr(Z.emptyPath(),r)}(e))}function nh(t,e,...n){if(t=B(t),arguments.length===1&&(e=ZP.newId()),__("doc","path",e),t instanceof ju){const r=Z.fromString(e,...n);return yE(r),new Ae(t,null,new N(r))}{if(!(t instanceof Ae||t instanceof Gr))throw new A(T.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Z.fromString(e,...n));return yE(r),new Ae(t.firestore,t instanceof Gr?t.converter:null,new N(r))}}function KR(t,e){return t=B(t),e=B(e),(t instanceof Ae||t instanceof Gr)&&(e instanceof Ae||e instanceof Gr)&&t.firestore===e.firestore&&t.path===e.path&&t.converter===e.converter}function HR(t,e){return t=B(t),e=B(e),t instanceof Rt&&e instanceof Rt&&t.firestore===e.firestore&&Du(t._query,e._query)&&t.converter===e.converter}/**
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
 */class ij{constructor(){this.Xa=Promise.resolve(),this.eu=[],this.tu=!1,this.nu=[],this.ru=null,this.iu=!1,this.su=!1,this.ou=[],this.jo=new e_(this,"async_queue_retry"),this._u=()=>{const n=Zc();n&&P("AsyncQueue","Visibility state changed to "+n.visibilityState),this.jo.Ko()};const e=Zc();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this._u)}get isShuttingDown(){return this.tu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.au(),this.uu(e)}enterRestrictedMode(e){if(!this.tu){this.tu=!0,this.su=e||!1;const n=Zc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._u)}}enqueue(e){if(this.au(),this.tu)return new Promise(()=>{});const n=new Je;return this.uu(()=>this.tu&&this.su?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.eu.push(e),this.cu()))}async cu(){if(this.eu.length!==0){try{await this.eu[0](),this.eu.shift(),this.jo.reset()}catch(e){if(!vi(e))throw e;P("AsyncQueue","Operation failed with retryable error: "+e)}this.eu.length>0&&this.jo.qo(()=>this.cu())}}uu(e){const n=this.Xa.then(()=>(this.iu=!0,e().catch(r=>{this.ru=r,this.iu=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw Me("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.iu=!1,r))));return this.Xa=n,n}enqueueAfterDelay(e,n,r){this.au(),this.ou.indexOf(e)>-1&&(n=0);const i=i_.createAndSchedule(this,e,n,r,s=>this.lu(s));return this.nu.push(i),i}au(){this.ru&&V()}verifyOperationInProgress(){}async hu(){let e;do e=this.Xa,await e;while(e!==this.Xa)}Pu(e){for(const n of this.nu)if(n.timerId===e)return!0;return!1}Iu(e){return this.hu().then(()=>{this.nu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.nu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.hu()})}Tu(e){this.ou.push(e)}lu(e){const n=this.nu.indexOf(e);this.nu.splice(n,1)}}function Ag(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}class sj{constructor(){this._progressObserver={},this._taskCompletionResolver=new Je,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,n,r){this._progressObserver={next:e,error:n,complete:r}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,n){return this._taskCompletionResolver.promise.then(e,n)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}/**
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
 */const oj=-1;let Ne=class extends ju{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=function(){return new ij}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||QR(this),this._firestoreClient.terminate()}};function nt(t){return t._firestoreClient||QR(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function QR(t){var e,n,r;const i=t._freezeSettings(),s=function(a,l,u,c){return new O5(a,l,u,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,jR(c.experimentalLongPollingOptions),c.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new KU(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}function aj(t,e){XR(t=se(t,Ne));const n=nt(t);if(n._uninitializedComponentsProvider)throw new A(T.FAILED_PRECONDITION,"SDK cache is already specified.");wn("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const r=t._freezeSettings(),i=new m_;return YR(n,i,new OR(i,r.cacheSizeBytes,e==null?void 0:e.forceOwnership))}function lj(t){XR(t=se(t,Ne));const e=nt(t);if(e._uninitializedComponentsProvider)throw new A(T.FAILED_PRECONDITION,"SDK cache is already specified.");wn("enableMultiTabIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const n=t._freezeSettings(),r=new m_;return YR(e,r,new BU(r,n.cacheSizeBytes))}function YR(t,e,n){const r=new Je;return t.asyncQueue.enqueue(async()=>{try{await ed(t,n),await Sg(t,e),r.resolve()}catch(i){const s=i;if(!VR(s))throw s;wn("Error enabling indexeddb cache. Falling back to memory cache: "+s),r.reject(s)}}).then(()=>r.promise)}function uj(t){if(t._initialized&&!t._terminated)throw new A(T.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const e=new Je;return t._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(r){if(!nn.D())return Promise.resolve();const i=r+"main";await nn.delete(i)}(Xv(t._databaseId,t._persistenceKey)),e.resolve()}catch(n){e.reject(n)}}),e.promise}function cj(t){return function(n){const r=new Je;return n.asyncQueue.enqueueAndForget(async()=>xU(await v_(n),r)),r.promise}(nt(t=se(t,Ne)))}function dj(t){return QU(nt(t=se(t,Ne)))}function hj(t){return YU(nt(t=se(t,Ne)))}function fj(t,e){const n=nt(t=se(t,Ne)),r=new sj;return ej(n,t._databaseId,e,r),r}function pj(t,e){return tj(nt(t=se(t,Ne)),e).then(n=>n?new Rt(t,null,n.query):null)}function XR(t){if(t._initialized||t._terminated)throw new A(T.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}/**
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
 */class zn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new zn(Ge.fromBase64String(e))}catch(n){throw new A(T.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new zn(Ge.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */let li=class{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new A(T.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new _e(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}};/**
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
 */let Ts=class{constructor(e){this._methodName=e}};/**
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
 */class ff{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new A(T.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new A(T.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return W(this._lat,e._lat)||W(this._long,e._long)}}/**
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
 */const mj=/^__.*__$/;class gj{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new pr(e,this.data,this.fieldMask,n,this.fieldTransforms):new ea(e,this.data,n,this.fieldTransforms)}}class JR{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new pr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function ZR(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw V()}}class pf{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Eu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get du(){return this.settings.du}Au(e){return new pf(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ru(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Au({path:r,Vu:!1});return i.mu(e),i}fu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Au({path:r,Vu:!1});return i.Eu(),i}gu(e){return this.Au({path:void 0,Vu:!0})}pu(e){return rh(e,this.settings.methodName,this.settings.yu||!1,this.path,this.settings.wu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Eu(){if(this.path)for(let e=0;e<this.path.length;e++)this.mu(this.path.get(e))}mu(e){if(e.length===0)throw this.pu("Document fields must not be empty");if(ZR(this.du)&&mj.test(e))throw this.pu('Document fields cannot begin and end with "__"')}}class yj{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Fu(e)}Su(e,n,r,i=!1){return new pf({du:e,methodName:n,wu:r,path:_e.emptyPath(),Vu:!1,yu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Ss(t){const e=t._freezeSettings(),n=Fu(t._databaseId);return new yj(t._databaseId,!!e.ignoreUndefinedProperties,n)}function mf(t,e,n,r,i,s={}){const o=t.Su(s.merge||s.mergeFields?2:0,e,n,i);P_("Data must be an object, but it was:",o,r);const a=nb(r,o);let l,u;if(s.merge)l=new Lt(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const d of s.mergeFields){const h=Pg(e,d,n);if(!o.contains(h))throw new A(T.INVALID_ARGUMENT,`Field '${h}' is specified in your field mask but missing from your input data.`);ib(c,h)||c.push(h)}l=new Lt(c),u=o.fieldTransforms.filter(d=>l.covers(d.field))}else l=null,u=o.fieldTransforms;return new gj(new ot(a),l,u)}class $u extends Ts{_toFieldTransform(e){if(e.du!==2)throw e.du===1?e.pu(`${this._methodName}() can only appear at the top level of your update data`):e.pu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof $u}}function eb(t,e,n){return new pf({du:3,wu:e.settings.wu,methodName:t._methodName,Vu:n},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class w_ extends Ts{_toFieldTransform(e){return new Vu(e.path,new xo)}isEqual(e){return e instanceof w_}}class I_ extends Ts{constructor(e,n){super(e),this.bu=n}_toFieldTransform(e){const n=eb(this,e,!0),r=this.bu.map(s=>As(s,n)),i=new us(r);return new Vu(e.path,i)}isEqual(e){return e instanceof I_&&xl(this.bu,e.bu)}}class E_ extends Ts{constructor(e,n){super(e),this.bu=n}_toFieldTransform(e){const n=eb(this,e,!0),r=this.bu.map(s=>As(s,n)),i=new cs(r);return new Vu(e.path,i)}isEqual(e){return e instanceof E_&&xl(this.bu,e.bu)}}class T_ extends Ts{constructor(e,n){super(e),this.Du=n}_toFieldTransform(e){const n=new No(e.serializer,Ck(e.serializer,this.Du));return new Vu(e.path,n)}isEqual(e){return e instanceof T_&&this.Du===e.Du}}function S_(t,e,n,r){const i=t.Su(1,e,n);P_("Data must be an object, but it was:",i,r);const s=[],o=ot.empty();Es(r,(l,u)=>{const c=k_(e,l,n);u=B(u);const d=i.fu(c);if(u instanceof $u)s.push(c);else{const h=As(u,d);h!=null&&(s.push(c),o.set(c,h))}});const a=new Lt(s);return new JR(o,a,i.fieldTransforms)}function A_(t,e,n,r,i,s){const o=t.Su(1,e,n),a=[Pg(e,r,n)],l=[i];if(s.length%2!=0)throw new A(T.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let h=0;h<s.length;h+=2)a.push(Pg(e,s[h])),l.push(s[h+1]);const u=[],c=ot.empty();for(let h=a.length-1;h>=0;--h)if(!ib(u,a[h])){const f=a[h];let _=l[h];_=B(_);const v=o.fu(f);if(_ instanceof $u)u.push(f);else{const w=As(_,v);w!=null&&(u.push(f),c.set(f,w))}}const d=new Lt(u);return new JR(c,d,o.fieldTransforms)}function tb(t,e,n,r=!1){return As(n,t.Su(r?4:3,e))}function As(t,e){if(rb(t=B(t)))return P_("Unsupported field value:",e,t),nb(t,e);if(t instanceof Ts)return function(r,i){if(!ZR(i.du))throw i.pu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.pu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Vu&&e.du!==4)throw e.pu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let l=As(a,i.gu(o));l==null&&(l={nullValue:"NULL_VALUE"}),s.push(l),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=B(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Ck(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Ie.fromDate(r);return{timestampValue:Do(i.serializer,s)}}if(r instanceof Ie){const s=new Ie(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Do(i.serializer,s)}}if(r instanceof ff)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof zn)return{bytesValue:zk(i.serializer,r._byteString)};if(r instanceof Ae){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.pu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Wv(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.pu(`Unsupported field value: ${hf(r)}`)}(t,e)}function nb(t,e){const n={};return ck(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Es(t,(r,i)=>{const s=As(i,e.Ru(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function rb(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ie||t instanceof ff||t instanceof zn||t instanceof Ae||t instanceof Ts)}function P_(t,e,n){if(!rb(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=hf(n);throw r==="an object"?e.pu(t+" a custom object"):e.pu(t+" "+r)}}function Pg(t,e,n){if((e=B(e))instanceof li)return e._internalPath;if(typeof e=="string")return k_(t,e);throw rh("Field path arguments must be of type string or ",t,!1,void 0,n)}const vj=new RegExp("[~\\*/\\[\\]]");function k_(t,e,n){if(e.search(vj)>=0)throw rh(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new li(...e.split("."))._internalPath}catch{throw rh(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function rh(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new A(T.INVALID_ARGUMENT,a+t+l)}function ib(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class iu{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Ae(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new _j(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(gf("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class _j extends iu{data(){return super.data()}}function gf(t,e){return typeof e=="string"?k_(t,e):e instanceof li?e._internalPath:e._delegate._internalPath}/**
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
 */function sb(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new A(T.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class R_{}class zu extends R_{}function Ir(t,e,...n){let r=[];e instanceof R_&&r.push(e),r=r.concat(n),function(s){const o=s.filter(l=>l instanceof b_).length,a=s.filter(l=>l instanceof yf).length;if(o>1||o>0&&a>0)throw new A(T.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class yf extends zu{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new yf(e,n,r)}_apply(e){const n=this._parse(e);return ab(e._query,n),new Rt(e.firestore,e.converter,hg(e._query,n))}_parse(e){const n=Ss(e.firestore);return function(s,o,a,l,u,c,d){let h;if(u.isKeyField()){if(c==="array-contains"||c==="array-contains-any")throw new A(T.INVALID_ARGUMENT,`Invalid Query. You can't perform '${c}' queries on documentId().`);if(c==="in"||c==="not-in"){IE(d,c);const f=[];for(const _ of d)f.push(wE(l,s,_));h={arrayValue:{values:f}}}else h=wE(l,s,d)}else c!=="in"&&c!=="not-in"&&c!=="array-contains-any"||IE(d,c),h=tb(a,o,d,c==="in"||c==="not-in");return ee.create(u,c,h)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function wj(t,e,n){const r=e,i=gf("where",t);return yf._create(i,r,n)}class b_ extends R_{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new b_(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:oe.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const l of a)ab(o,l),o=hg(o,l)}(e._query,n),new Rt(e.firestore,e.converter,hg(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class C_ extends zu{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new C_(e,n)}_apply(e){const n=function(i,s,o){if(i.startAt!==null)throw new A(T.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new A(T.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new eu(s,o)}(e._query,this._field,this._direction);return new Rt(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new fr(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,n))}}function Ij(t,e="asc"){const n=e,r=gf("orderBy",t);return C_._create(r,n)}class vf extends zu{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new vf(e,n,r)}_apply(e){return new Rt(e.firestore,e.converter,Hd(e._query,this._limit,this._limitType))}}function Ej(t){return zR("limit",t),vf._create("limit",t,"F")}function Tj(t){return zR("limitToLast",t),vf._create("limitToLast",t,"L")}class _f extends zu{constructor(e,n,r){super(),this.type=e,this._docOrFields=n,this._inclusive=r}static _create(e,n,r){return new _f(e,n,r)}_apply(e){const n=ob(e,this.type,this._docOrFields,this._inclusive);return new Rt(e.firestore,e.converter,function(i,s){return new fr(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,s,i.endAt)}(e._query,n))}}function Sj(...t){return _f._create("startAt",t,!0)}function Aj(...t){return _f._create("startAfter",t,!1)}class wf extends zu{constructor(e,n,r){super(),this.type=e,this._docOrFields=n,this._inclusive=r}static _create(e,n,r){return new wf(e,n,r)}_apply(e){const n=ob(e,this.type,this._docOrFields,this._inclusive);return new Rt(e.firestore,e.converter,function(i,s){return new fr(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,i.startAt,s)}(e._query,n))}}function Pj(...t){return wf._create("endBefore",t,!1)}function kj(...t){return wf._create("endAt",t,!0)}function ob(t,e,n,r){if(n[0]=B(n[0]),n[0]instanceof iu)return function(s,o,a,l,u){if(!l)throw new A(T.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${a}().`);const c=[];for(const d of mo(s))if(d.field.isKeyField())c.push(as(o,l.key));else{const h=l.data.field(d.field);if(nf(h))throw new A(T.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+d.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(h===null){const f=d.field.canonicalString();throw new A(T.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${f}' (used as the orderBy) does not exist.`)}c.push(h)}return new oi(c,u)}(t._query,t.firestore._databaseId,e,n[0]._document,r);{const i=Ss(t.firestore);return function(o,a,l,u,c,d){const h=o.explicitOrderBy;if(c.length>h.length)throw new A(T.INVALID_ARGUMENT,`Too many arguments provided to ${u}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const f=[];for(let _=0;_<c.length;_++){const v=c[_];if(h[_].field.isKeyField()){if(typeof v!="string")throw new A(T.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${u}(), but got a ${typeof v}`);if(!Fv(o)&&v.indexOf("/")!==-1)throw new A(T.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${u}() must be a plain document ID, but '${v}' contains a slash.`);const w=o.path.child(Z.fromString(v));if(!N.isDocumentKey(w))throw new A(T.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${u}() must result in a valid document path, but '${w}' is not because it contains an odd number of segments.`);const m=new N(w);f.push(as(a,m))}else{const w=tb(l,u,v);f.push(w)}}return new oi(f,d)}(t._query,t.firestore._databaseId,i,e,n,r)}}function wE(t,e,n){if(typeof(n=B(n))=="string"){if(n==="")throw new A(T.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Fv(e)&&n.indexOf("/")!==-1)throw new A(T.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Z.fromString(n));if(!N.isDocumentKey(r))throw new A(T.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return as(t,new N(r))}if(n instanceof Ae)return as(t,n._key);throw new A(T.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${hf(n)}.`)}function IE(t,e){if(!Array.isArray(t)||t.length===0)throw new A(T.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function ab(t,e){const n=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new A(T.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new A(T.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class x_{convertValue(e,n="none"){switch(os(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Re(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(ri(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw V()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Es(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new ff(Re(e.latitude),Re(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Lv(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Xl(e));default:return null}}convertTimestamp(e){const n=ni(e);return new Ie(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Z.fromString(e);$(Zk(r));const i=new ii(r.get(1),r.get(3)),s=new N(r.popFirst(5));return i.isEqual(n)||Me(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */function If(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class Rj extends x_{constructor(e){super(),this.firestore=e}convertBytes(e){return new zn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ae(this.firestore,null,n)}}/**
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
 */class $i{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}let lr=class extends iu{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new sl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(gf("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}},sl=class extends lr{data(e={}){return super.data(e)}},ui=class{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new $i(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new sl(this._firestore,this._userDataWriter,r.key,r,new $i(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new A(T.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const l=new sl(i._firestore,i._userDataWriter,a.doc.key,a.doc,new $i(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const l=new sl(i._firestore,i._userDataWriter,a.doc.key,a.doc,new $i(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let u=-1,c=-1;return a.type!==0&&(u=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),c=o.indexOf(a.doc.key)),{type:bj(a.type),doc:l,oldIndex:u,newIndex:c}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}};function bj(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return V()}}function lb(t,e){return t instanceof lr&&e instanceof lr?t._firestore===e._firestore&&t._key.isEqual(e._key)&&(t._document===null?e._document===null:t._document.isEqual(e._document))&&t._converter===e._converter:t instanceof ui&&e instanceof ui&&t._firestore===e._firestore&&HR(t.query,e.query)&&t.metadata.isEqual(e.metadata)&&t._snapshot.isEqual(e._snapshot)}/**
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
 */function Cj(t){t=se(t,Ae);const e=se(t.firestore,Ne);return FR(nt(e),t._key).then(n=>N_(e,t,n))}class Ps extends x_{constructor(e){super(),this.firestore=e}convertBytes(e){return new zn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ae(this.firestore,null,n)}}function xj(t){t=se(t,Ae);const e=se(t.firestore,Ne),n=nt(e),r=new Ps(e);return XU(n,t._key).then(i=>new lr(e,r,t._key,i,new $i(i!==null&&i.hasLocalMutations,!0),t.converter))}function Nj(t){t=se(t,Ae);const e=se(t.firestore,Ne);return FR(nt(e),t._key,{source:"server"}).then(n=>N_(e,t,n))}function Dj(t){t=se(t,Rt);const e=se(t.firestore,Ne),n=nt(e),r=new Ps(e);return sb(t._query),UR(n,t._query).then(i=>new ui(e,r,t,i))}function Oj(t){t=se(t,Rt);const e=se(t.firestore,Ne),n=nt(e),r=new Ps(e);return JU(n,t._query).then(i=>new ui(e,r,t,i))}function Vj(t){t=se(t,Rt);const e=se(t.firestore,Ne),n=nt(e),r=new Ps(e);return UR(n,t._query,{source:"server"}).then(i=>new ui(e,r,t,i))}function EE(t,e,n){t=se(t,Ae);const r=se(t.firestore,Ne),i=If(t.converter,e,n);return Bu(r,[mf(Ss(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,we.none())])}function TE(t,e,n,...r){t=se(t,Ae);const i=se(t.firestore,Ne),s=Ss(i);let o;return o=typeof(e=B(e))=="string"||e instanceof li?A_(s,"updateDoc",t._key,e,n,r):S_(s,"updateDoc",t._key,e),Bu(i,[o.toMutation(t._key,we.exists(!0))])}function Lj(t){return Bu(se(t.firestore,Ne),[new ta(t._key,we.none())])}function Mj(t,e){const n=se(t.firestore,Ne),r=nh(t),i=If(t.converter,e);return Bu(n,[mf(Ss(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,we.exists(!1))]).then(()=>r)}function ub(t,...e){var n,r,i;t=B(t);let s={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||Ag(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(Ag(e[o])){const d=e[o];e[o]=(n=d.next)===null||n===void 0?void 0:n.bind(d),e[o+1]=(r=d.error)===null||r===void 0?void 0:r.bind(d),e[o+2]=(i=d.complete)===null||i===void 0?void 0:i.bind(d)}let l,u,c;if(t instanceof Ae)u=se(t.firestore,Ne),c=Zo(t._key.path),l={next:d=>{e[o]&&e[o](N_(u,t,d))},error:e[o+1],complete:e[o+2]};else{const d=se(t,Rt);u=se(d.firestore,Ne),c=d._query;const h=new Ps(u);l={next:f=>{e[o]&&e[o](new ui(u,h,d,f))},error:e[o+1],complete:e[o+2]},sb(t._query)}return function(h,f,_,v){const w=new cf(v),m=new l_(f,w,_);return h.asyncQueue.enqueueAndForget(async()=>s_(await Fo(h),m)),()=>{w.La(),h.asyncQueue.enqueueAndForget(async()=>o_(await Fo(h),m))}}(nt(u),c,a,l)}function Fj(t,e){return ZU(nt(t=se(t,Ne)),Ag(e)?e:{next:e})}function Bu(t,e){return function(r,i){const s=new Je;return r.asyncQueue.enqueueAndForget(async()=>kU(await v_(r),i,s)),s.promise}(nt(t),e)}function N_(t,e,n){const r=n.docs.get(e._key),i=new Ps(t);return new lr(t,i,e._key,r,new $i(n.hasPendingWrites,n.fromCache),e.converter)}/**
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
 */const Uj={maxAttempts:5};/**
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
 */let jj=class{constructor(e,n){this._firestore=e,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=Ss(e)}set(e,n,r){this._verifyNotCommitted();const i=br(e,this._firestore),s=If(i.converter,n,r),o=mf(this._dataReader,"WriteBatch.set",i._key,s,i.converter!==null,r);return this._mutations.push(o.toMutation(i._key,we.none())),this}update(e,n,r,...i){this._verifyNotCommitted();const s=br(e,this._firestore);let o;return o=typeof(n=B(n))=="string"||n instanceof li?A_(this._dataReader,"WriteBatch.update",s._key,n,r,i):S_(this._dataReader,"WriteBatch.update",s._key,n),this._mutations.push(o.toMutation(s._key,we.exists(!0))),this}delete(e){this._verifyNotCommitted();const n=br(e,this._firestore);return this._mutations=this._mutations.concat(new ta(n._key,we.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new A(T.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}};function br(t,e){if((t=B(t)).firestore!==e)throw new A(T.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}/**
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
 */let $j=class extends class{constructor(n,r){this._firestore=n,this._transaction=r,this._dataReader=Ss(n)}get(n){const r=br(n,this._firestore),i=new Rj(this._firestore);return this._transaction.lookup([r._key]).then(s=>{if(!s||s.length!==1)return V();const o=s[0];if(o.isFoundDocument())return new iu(this._firestore,i,o.key,o,r.converter);if(o.isNoDocument())return new iu(this._firestore,i,r._key,null,r.converter);throw V()})}set(n,r,i){const s=br(n,this._firestore),o=If(s.converter,r,i),a=mf(this._dataReader,"Transaction.set",s._key,o,s.converter!==null,i);return this._transaction.set(s._key,a),this}update(n,r,i,...s){const o=br(n,this._firestore);let a;return a=typeof(r=B(r))=="string"||r instanceof li?A_(this._dataReader,"Transaction.update",o._key,r,i,s):S_(this._dataReader,"Transaction.update",o._key,r),this._transaction.update(o._key,a),this}delete(n){const r=br(n,this._firestore);return this._transaction.delete(r._key),this}}{constructor(e,n){super(e,n),this._firestore=e}get(e){const n=br(e,this._firestore),r=new Ps(this._firestore);return super.get(e).then(i=>new lr(this._firestore,r,n._key,i._document,new $i(!1,!1),n.converter))}};function zj(t,e,n){t=se(t,Ne);const r=Object.assign(Object.assign({},Uj),n);return function(s){if(s.maxAttempts<1)throw new A(T.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(s,o,a){const l=new Je;return s.asyncQueue.enqueueAndForget(async()=>{const u=await HU(s);new GU(s.asyncQueue,u,a,o,l).ja()}),l.promise}(nt(t),i=>e(new $j(t,i)),r)}/**
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
 */function Bj(){return new $u("deleteField")}function qj(){return new w_("serverTimestamp")}function Wj(...t){return new I_("arrayUnion",t)}function Gj(...t){return new E_("arrayRemove",t)}function Kj(t){return new T_("increment",t)}(function(e,n=!0){(function(i){Jo=i})(fi),ei(new Un("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new Ne(new r5(r.getProvider("auth-internal")),new a5(r.getProvider("app-check-internal")),function(u,c){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new A(T.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ii(u.options.projectId,c)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),Mn(yI,"4.4.3",e),Mn(yI,"4.4.3","esm2017")})();const Hj="@firebase/firestore-compat",Qj="0.3.26";/**
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
 */function D_(t,e){if(e===void 0)return{merge:!1};if(e.mergeFields!==void 0&&e.merge!==void 0)throw new A("invalid-argument",`Invalid options passed to function ${t}(): You cannot specify both "merge" and "mergeFields".`);return e}/**
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
 */function SE(){if(typeof Uint8Array>"u")throw new A("unimplemented","Uint8Arrays are not available in this environment.")}function AE(){if(!N5())throw new A("unimplemented","Blobs are unavailable in Firestore in this environment.")}class su{constructor(e){this._delegate=e}static fromBase64String(e){return AE(),new su(zn.fromBase64String(e))}static fromUint8Array(e){return SE(),new su(zn.fromUint8Array(e))}toBase64(){return AE(),this._delegate.toBase64()}toUint8Array(){return SE(),this._delegate.toUint8Array()}isEqual(e){return this._delegate.isEqual(e._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}}/**
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
 */function kg(t){return Yj(t,["next","error","complete"])}function Yj(t,e){if(typeof t!="object"||t===null)return!1;const n=t;for(const r of e)if(r in n&&typeof n[r]=="function")return!0;return!1}/**
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
 */class Xj{enableIndexedDbPersistence(e,n){return aj(e._delegate,{forceOwnership:n})}enableMultiTabIndexedDbPersistence(e){return lj(e._delegate)}clearIndexedDbPersistence(e){return uj(e._delegate)}}class cb{constructor(e,n,r){this._delegate=n,this._persistenceProvider=r,this.INTERNAL={delete:()=>this.terminate()},e instanceof ii||(this._appCompat=e)}get _databaseId(){return this._delegate._databaseId}settings(e){const n=this._delegate._getSettings();!e.merge&&n.host!==e.host&&wn("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),e.merge&&(e=Object.assign(Object.assign({},n),e),delete e.merge),this._delegate._setSettings(e)}useEmulator(e,n,r={}){nj(this._delegate,e,n,r)}enableNetwork(){return dj(this._delegate)}disableNetwork(){return hj(this._delegate)}enablePersistence(e){let n=!1,r=!1;return e&&(n=!!e.synchronizeTabs,r=!!e.experimentalForceOwningTab,$R("synchronizeTabs",n,"experimentalForceOwningTab",r)),n?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,r)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return cj(this._delegate)}onSnapshotsInSync(e){return Fj(this._delegate,e)}get app(){if(!this._appCompat)throw new A("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(e){try{return new Uo(this,GR(this._delegate,e))}catch(n){throw Et(n,"collection()","Firestore.collection()")}}doc(e){try{return new rn(this,nh(this._delegate,e))}catch(n){throw Et(n,"doc()","Firestore.doc()")}}collectionGroup(e){try{return new It(this,rj(this._delegate,e))}catch(n){throw Et(n,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(e){return zj(this._delegate,n=>e(new db(this,n)))}batch(){return nt(this._delegate),new hb(new jj(this._delegate,e=>Bu(this._delegate,e)))}loadBundle(e){return fj(this._delegate,e)}namedQuery(e){return pj(this._delegate,e).then(n=>n?new It(this,n):null)}}class Ef extends x_{constructor(e){super(),this.firestore=e}convertBytes(e){return new su(new zn(e))}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return rn.forKey(n,this.firestore,null)}}function Jj(t){Z3(t)}class db{constructor(e,n){this._firestore=e,this._delegate=n,this._userDataWriter=new Ef(e)}get(e){const n=zi(e);return this._delegate.get(n).then(r=>new ou(this._firestore,new lr(this._firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,n.converter)))}set(e,n,r){const i=zi(e);return r?(D_("Transaction.set",r),this._delegate.set(i,n,r)):this._delegate.set(i,n),this}update(e,n,r,...i){const s=zi(e);return arguments.length===2?this._delegate.update(s,n):this._delegate.update(s,n,r,...i),this}delete(e){const n=zi(e);return this._delegate.delete(n),this}}class hb{constructor(e){this._delegate=e}set(e,n,r){const i=zi(e);return r?(D_("WriteBatch.set",r),this._delegate.set(i,n,r)):this._delegate.set(i,n),this}update(e,n,r,...i){const s=zi(e);return arguments.length===2?this._delegate.update(s,n):this._delegate.update(s,n,r,...i),this}delete(e){const n=zi(e);return this._delegate.delete(n),this}commit(){return this._delegate.commit()}}class ps{constructor(e,n,r){this._firestore=e,this._userDataWriter=n,this._delegate=r}fromFirestore(e,n){const r=new sl(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new au(this._firestore,r),n??{})}toFirestore(e,n){return n?this._delegate.toFirestore(e,n):this._delegate.toFirestore(e)}static getInstance(e,n){const r=ps.INSTANCES;let i=r.get(e);i||(i=new WeakMap,r.set(e,i));let s=i.get(n);return s||(s=new ps(e,new Ef(e),n),i.set(n,s)),s}}ps.INSTANCES=new WeakMap;class rn{constructor(e,n){this.firestore=e,this._delegate=n,this._userDataWriter=new Ef(e)}static forPath(e,n,r){if(e.length%2!==0)throw new A("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e.canonicalString()} has ${e.length}`);return new rn(n,new Ae(n._delegate,r,new N(e)))}static forKey(e,n,r){return new rn(n,new Ae(n._delegate,r,e))}get id(){return this._delegate.id}get parent(){return new Uo(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(e){try{return new Uo(this.firestore,GR(this._delegate,e))}catch(n){throw Et(n,"collection()","DocumentReference.collection()")}}isEqual(e){return e=B(e),e instanceof Ae?KR(this._delegate,e):!1}set(e,n){n=D_("DocumentReference.set",n);try{return n?EE(this._delegate,e,n):EE(this._delegate,e)}catch(r){throw Et(r,"setDoc()","DocumentReference.set()")}}update(e,n,...r){try{return arguments.length===1?TE(this._delegate,e):TE(this._delegate,e,n,...r)}catch(i){throw Et(i,"updateDoc()","DocumentReference.update()")}}delete(){return Lj(this._delegate)}onSnapshot(...e){const n=fb(e),r=pb(e,i=>new ou(this.firestore,new lr(this.firestore._delegate,this._userDataWriter,i._key,i._document,i.metadata,this._delegate.converter)));return ub(this._delegate,n,r)}get(e){let n;return(e==null?void 0:e.source)==="cache"?n=xj(this._delegate):(e==null?void 0:e.source)==="server"?n=Nj(this._delegate):n=Cj(this._delegate),n.then(r=>new ou(this.firestore,new lr(this.firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,this._delegate.converter)))}withConverter(e){return new rn(this.firestore,e?this._delegate.withConverter(ps.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function Et(t,e,n){return t.message=t.message.replace(e,n),t}function fb(t){for(const e of t)if(typeof e=="object"&&!kg(e))return e;return{}}function pb(t,e){var n,r;let i;return kg(t[0])?i=t[0]:kg(t[1])?i=t[1]:typeof t[0]=="function"?i={next:t[0],error:t[1],complete:t[2]}:i={next:t[1],error:t[2],complete:t[3]},{next:s=>{i.next&&i.next(e(s))},error:(n=i.error)===null||n===void 0?void 0:n.bind(i),complete:(r=i.complete)===null||r===void 0?void 0:r.bind(i)}}class ou{constructor(e,n){this._firestore=e,this._delegate=n}get ref(){return new rn(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(e){return this._delegate.data(e)}get(e,n){return this._delegate.get(e,n)}isEqual(e){return lb(this._delegate,e._delegate)}}class au extends ou{data(e){const n=this._delegate.data(e);return this._delegate._converter||e5(n!==void 0),n}}class It{constructor(e,n){this.firestore=e,this._delegate=n,this._userDataWriter=new Ef(e)}where(e,n,r){try{return new It(this.firestore,Ir(this._delegate,wj(e,n,r)))}catch(i){throw Et(i,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(e,n){try{return new It(this.firestore,Ir(this._delegate,Ij(e,n)))}catch(r){throw Et(r,/(orderBy|where)\(\)/,"Query.$1()")}}limit(e){try{return new It(this.firestore,Ir(this._delegate,Ej(e)))}catch(n){throw Et(n,"limit()","Query.limit()")}}limitToLast(e){try{return new It(this.firestore,Ir(this._delegate,Tj(e)))}catch(n){throw Et(n,"limitToLast()","Query.limitToLast()")}}startAt(...e){try{return new It(this.firestore,Ir(this._delegate,Sj(...e)))}catch(n){throw Et(n,"startAt()","Query.startAt()")}}startAfter(...e){try{return new It(this.firestore,Ir(this._delegate,Aj(...e)))}catch(n){throw Et(n,"startAfter()","Query.startAfter()")}}endBefore(...e){try{return new It(this.firestore,Ir(this._delegate,Pj(...e)))}catch(n){throw Et(n,"endBefore()","Query.endBefore()")}}endAt(...e){try{return new It(this.firestore,Ir(this._delegate,kj(...e)))}catch(n){throw Et(n,"endAt()","Query.endAt()")}}isEqual(e){return HR(this._delegate,e._delegate)}get(e){let n;return(e==null?void 0:e.source)==="cache"?n=Oj(this._delegate):(e==null?void 0:e.source)==="server"?n=Vj(this._delegate):n=Dj(this._delegate),n.then(r=>new Rg(this.firestore,new ui(this.firestore._delegate,this._userDataWriter,this._delegate,r._snapshot)))}onSnapshot(...e){const n=fb(e),r=pb(e,i=>new Rg(this.firestore,new ui(this.firestore._delegate,this._userDataWriter,this._delegate,i._snapshot)));return ub(this._delegate,n,r)}withConverter(e){return new It(this.firestore,e?this._delegate.withConverter(ps.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}class Zj{constructor(e,n){this._firestore=e,this._delegate=n}get type(){return this._delegate.type}get doc(){return new au(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class Rg{constructor(e,n){this._firestore=e,this._delegate=n}get query(){return new It(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map(e=>new au(this._firestore,e))}docChanges(e){return this._delegate.docChanges(e).map(n=>new Zj(this._firestore,n))}forEach(e,n){this._delegate.forEach(r=>{e.call(n,new au(this._firestore,r))})}isEqual(e){return lb(this._delegate,e._delegate)}}class Uo extends It{constructor(e,n){super(e,n),this.firestore=e,this._delegate=n}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const e=this._delegate.parent;return e?new rn(this.firestore,e):null}doc(e){try{return e===void 0?new rn(this.firestore,nh(this._delegate)):new rn(this.firestore,nh(this._delegate,e))}catch(n){throw Et(n,"doc()","CollectionReference.doc()")}}add(e){return Mj(this._delegate,e).then(n=>new rn(this.firestore,n))}isEqual(e){return KR(this._delegate,e._delegate)}withConverter(e){return new Uo(this.firestore,e?this._delegate.withConverter(ps.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function zi(t){return se(t,Ae)}/**
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
 */class O_{constructor(...e){this._delegate=new li(...e)}static documentId(){return new O_(_e.keyField().canonicalString())}isEqual(e){return e=B(e),e instanceof li?this._delegate._internalPath.isEqual(e._internalPath):!1}}/**
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
 */class Ni{constructor(e){this._delegate=e}static serverTimestamp(){const e=qj();return e._methodName="FieldValue.serverTimestamp",new Ni(e)}static delete(){const e=Bj();return e._methodName="FieldValue.delete",new Ni(e)}static arrayUnion(...e){const n=Wj(...e);return n._methodName="FieldValue.arrayUnion",new Ni(n)}static arrayRemove(...e){const n=Gj(...e);return n._methodName="FieldValue.arrayRemove",new Ni(n)}static increment(e){const n=Kj(e);return n._methodName="FieldValue.increment",new Ni(n)}isEqual(e){return this._delegate.isEqual(e._delegate)}}/**
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
 */const e9={Firestore:cb,GeoPoint:ff,Timestamp:Ie,Blob:su,Transaction:db,WriteBatch:hb,DocumentReference:rn,DocumentSnapshot:ou,Query:It,QueryDocumentSnapshot:au,QuerySnapshot:Rg,CollectionReference:Uo,FieldPath:O_,FieldValue:Ni,setLogLevel:Jj,CACHE_SIZE_UNLIMITED:oj};function t9(t,e){t.INTERNAL.registerComponent(new Un("firestore-compat",n=>{const r=n.getProvider("app-compat").getImmediate(),i=n.getProvider("firestore").getImmediate();return e(r,i)},"PUBLIC").setServiceProps(Object.assign({},e9)))}/**
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
 */function n9(t){t9(t,(e,n)=>new cb(e,n,new Xj)),t.registerVersion(Hj,Qj)}n9(re);const r9=()=>{const[t,e]=k.useState(""),[n,r]=k.useState(""),[i,s]=k.useState(!1),[o,a]=k.useState(!1),[l,u]=k.useState(null),[c,d]=k.useState(!1),[h,f]=k.useState(0),_=async()=>{try{const p=(await re.auth().signInWithEmailAndPassword(t,n)).user;console.log("User signed in with email and password:",p)}catch(m){console.error("Email/password sign-in error:",m)}},v=async()=>{try{if(t.trim()!==""){const m=localStorage.getItem("lastResetTimestamp"),p=new Date().getTime(),g=60*60*1e3;if(h===1){d(!0),window.alert("You have already requested a password reset. Please try again later.");return}!m||p-m>g?(await re.auth().sendPasswordResetEmail(t),console.log("Password reset email sent successfully"),localStorage.setItem("lastResetTimestamp",p),a(!0),f(h+1),u(setTimeout(()=>{a(!1),d(!1)},5e3))):(console.log("Password reset already requested within the last hour"),d(!0),window.alert("You have already requested a password reset within the last hour. Please try again later."))}else console.error("Forgot password error: Email is empty"),window.alert("Please enter your email address to reset the password.")}catch(m){console.error("Forgot password error:",m)}},w=()=>{s(!i)};return y.jsxs("div",{children:[y.jsx("p",{children:"Email"}),y.jsx("input",{className:"inp1",type:"email",placeholder:"Email",value:t,onChange:m=>e(m.target.value)}),y.jsxs("div",{className:"password-wrapper",children:[y.jsx("p",{children:"Jelszó"}),y.jsx("input",{className:"inp1",type:i?"text":"password",placeholder:"Jelszó",value:n,onChange:m=>r(m.target.value)}),y.jsx("div",{className:"eye",children:y.jsx(at,{icon:i?qD:NS,onClick:w})})]}),y.jsxs("div",{className:"logmein",children:[y.jsx("button",{className:"logbtn",onClick:_,children:"Bejelentkezés"}),y.jsxs("button",{className:`forgot-password ${c?"disabled":""}`,onClick:v,disabled:c,children:[y.jsx(at,{icon:KD})," Elfelejtettem jelszavam"]})]}),o&&y.jsxs("div",{className:"reset-popup",children:[y.jsx("p",{children:"Password reset email sent successfully!"}),y.jsx(at,{icon:DS,onClick:()=>a(!1)})]})]})},i9=({isVisible:t})=>{const[e,n]=k.useState(""),[r,i]=k.useState(""),s=async()=>{try{const l=(await re.auth().createUserWithEmailAndPassword(e,r)).user;console.log("User registered with email and password:",l),await o(l,{})}catch(a){console.error("Email/password registration error:",a)}},o=async(a,l)=>{if(!a)return;const{uid:u,email:c}=a,d=re.firestore().doc(`users/${u}`);try{if(!(await d.get()).exists){const f=new Date;await d.set({email:c,createdAt:f,userType:"user",...l})}}catch(h){console.error("Error creating user document:",h)}};return t?y.jsxs("div",{children:[y.jsx("input",{className:"inp1",type:"email",placeholder:"Email",value:e,onChange:a=>n(a.target.value)}),y.jsxs("div",{className:"password-wrapper",children:[y.jsx("input",{className:"inp1",type:"password",placeholder:"Password",value:r,onChange:a=>i(a.target.value)}),y.jsxs("div",{className:"eye1",children:[" ",y.jsx(at,{icon:NS,className:"eye"})]})]}),y.jsxs("button",{className:"registerbtn",onClick:s,children:[y.jsx(at,{icon:ZD})," Regisztráció"]})]}):null},s9=async(t,e)=>{if(!t)return;const{uid:n,email:r}=t,i=re.firestore().doc(`users/${n}`);try{if(!(await i.get()).exists){const o=new Date;await i.set({email:r,createdAt:o,userType:"user",...e})}}catch(s){console.error("Error creating user document:",s)}},o9=()=>{const[t,e]=k.useState(!1),n=()=>{e(!t)},r=async()=>{const i=new re.auth.GoogleAuthProvider;try{const o=(await re.auth().signInWithPopup(i)).user;["craftercsapat590@gmail.com","gocsaldev@gmail.com","toptcorporation@protonmail.com","valogod3412@gmail.com"].includes(o.email)?(console.log("User signed in with Google:",o),await s9(o,{})):(console.log("Access denied. User email is not allowed to register."),window.alert("Access denied. Your email is not allowed to register."),await re.auth().signOut())}catch(s){console.error("Google sign-in error:",s)}};return y.jsxs("div",{className:"login-thingy",children:[!t&&y.jsx(r9,{}),y.jsx(i9,{isVisible:t}),y.jsx("button",{className:"togglebtn",onClick:n,children:t?"Vissza a bejeletkezéshez":"Nincs fiókom"}),y.jsxs("button",{className:"logbtn1",onClick:r,children:[y.jsx(at,{icon:xS})," Bejeletkezés Google-val."]})]})},a9=()=>{const[t,e]=k.useState(null),[n,r]=k.useState("light"),[i,s]=k.useState(!1),[o,a]=k.useState(!1),[l,u]=k.useState(!1),[c,d]=k.useState(!1);k.useEffect(()=>{const w=re.auth().onAuthStateChanged(m=>{a(!!m),m&&(re.firestore().collection("admins").doc(m.uid).get().then(p=>{p.exists?(u(!0),console.log("User is an admin")):(u(!1),console.log("User is not an admin"))}).catch(p=>{console.error("Error checking admin status:",p)}),re.firestore().collection("users").doc(m.uid).get().then(p=>{p.exists?(d(!0),console.log("User is a developer")):(d(!1),console.log("User is not a developer"))}).catch(p=>{console.error("Error checking developer status:",p)}))});return()=>w()},[]);const h=w=>{e(w),v()},f=()=>{const w=n==="light"?"dark":"light";r(w),document.body.classList.remove("light-theme","dark-theme"),document.body.classList.add(`${w}-theme`),document.documentElement.style.setProperty("--navbar-bg-light",w==="light"?"#000000":"#565656"),document.documentElement.style.setProperty("--navbar-bg-dark",w==="light"?"#565656":"#000000")},_=()=>{s(!i)},v=()=>{s(!1)};return y.jsxs("div",{className:"base",children:[y.jsxs("nav",{className:`navbar ${n}`,children:[y.jsx(XT,{to:"/",className:"navbar-left",children:"Top T"}),y.jsxs("div",{className:"navbar-right",children:[y.jsxs("div",{className:`menu-toggle ${i?"open":""}`,onClick:_,children:[y.jsx("div",{className:"bar"}),y.jsx("div",{className:"bar"}),y.jsx("div",{className:"bar"})]}),y.jsxs("div",{className:`menu-items ${i?"open":""}`,children:[y.jsx(Er,{label:"Főoldal",index:0,activeIndex:t,onClick:h,to:"/"}),y.jsx(Er,{label:"Rólunk",index:1,activeIndex:t,onClick:h,to:"/About"}),y.jsx(Er,{label:"Portfólió",index:2,activeIndex:t,onClick:h,to:"/PortfolioPage"}),y.jsx(Er,{label:"Rendelés Űrlap",index:3,activeIndex:t,onClick:h,to:"/OrderPage"}),o&&y.jsxs(y.Fragment,{children:[l&&y.jsx(Er,{label:"Admin Panel",index:4,to:"/AdminPanel"}),(l||c)&&y.jsx(Er,{label:"Todo Lista",index:5,to:"/TodoList"})]}),o?y.jsx(y.Fragment,{children:y.jsx(Er,{label:y.jsx(at,{icon:BD}),index:6,onClick:()=>re.auth().signOut(),to:"/"})}):y.jsx(Er,{label:y.jsx(at,{icon:xS}),index:7,activeIndex:t,onClick:h,to:"/login"})]}),y.jsx("button",{className:"theme-switch",onClick:f,children:n==="light"?y.jsx(at,{icon:JD}):y.jsx(at,{icon:HD})})]})]}),y.jsx("div",{className:`menu-overlay ${i?"open":""}`,onClick:v})]})},Er=({label:t,index:e,activeIndex:n,onClick:r,to:i})=>{const s=n===e;return y.jsxs(XT,{to:i,className:`nav-item ${s?"active":""}`,onClick:()=>r(e),children:[t,s&&y.jsx("div",{className:"underline"})]})},l9="/assets/testsok1-DKYm9lAD.jpg",u9="/assets/testsok5-DKCDd4gM.jpg",c9="/assets/testsok4-BACzjVaO.jpg",mb="/assets/test4-CwXkWlKp.jpg",d9=()=>{const t=[l9,u9,c9],[e,n]=k.useState(0),r=o=>{n(o)},i=()=>{const o=(e+1)%t.length;n(o)},s=()=>{const o=(e-1+t.length)%t.length;n(o)};return y.jsxs("div",{className:"landing-page",children:[y.jsx("h1",{children:"Üdv a Top T corp. Weboldalán"}),y.jsxs("div",{className:"image-carousel",children:[y.jsx("button",{className:"carousel-button prev",onClick:s,children:y.jsx(at,{icon:YD})}),t.map((o,a)=>y.jsx("img",{src:o,alt:"carousel",className:a===e?"active":"",onClick:()=>r(a)},a)),y.jsx("button",{className:"carousel-button next",onClick:i,children:y.jsx(at,{icon:XD})}),y.jsx("div",{className:"navigation-dots",children:t.map((o,a)=>y.jsx("span",{className:`dot ${a===e?"active":""}`,onClick:()=>r(a)},a))})]}),y.jsxs("div",{children:[y.jsx("h2",{className:"why-c-us",children:"Miért válasszon minket?"}),y.jsxs("ul",{className:"why-us",children:[y.jsxs("li",{children:[y.jsx("h3",{children:"Tapasztalt csapat:"})," Top T-nk elkötelezett, tapasztalt szakemberekből áll, akik szerteágazó tudással rendelkeznek az informatika területén."]}),y.jsxs("li",{children:[y.jsx("h3",{children:"Ügyfélközpontú megközelítés:"}),"Minden projektünkben az ügyfelek igényeire és céljaira koncentrálunk, hogy olyan egyedi megoldásokat nyújtsunk, amelyek valóban kiemelkedő eredményeket hoznak."]}),y.jsxs("li",{children:[y.jsx("h3",{children:"Innováció és minőség:"})," Top T mindig a legújabb technológiák felé nyitott, és minden munkánkat a legmagasabb minőségi sztenderdek szerint végezzük el."]})]})]}),y.jsxs("div",{className:"flex-container",children:[y.jsxs("div",{className:"box",children:[y.jsx("h4",{children:"Szolgáltatásaink:"}),y.jsxs("ul",{children:[y.jsx("li",{children:"Webfejlesztés és tervezés"}),y.jsx("li",{children:"Mobilalkalmazás fejlesztés"}),y.jsx("li",{children:"Felhőalapú megoldások"}),y.jsx("li",{children:"Tanácsadás"})]})]}),y.jsxs("div",{className:"box1",children:[y.jsx("h4",{children:"Kódolás:"}),y.jsx("img",{className:"imgbox",src:mb,alt:"testimg"})]})]}),y.jsxs("div",{className:"pricing",children:[y.jsxs("div",{className:"pricingbox",children:[y.jsx("h4",{className:"typethingy",children:"Basic"}),y.jsx("h4",{className:"price",children:"Ár: 100.000ft-tól"}),y.jsxs("p",{className:"ppric",children:["- Egy oldalas web oldal ",y.jsx("br",{}),"- Custom Domain ",y.jsx("br",{}),"- Support"]}),y.jsx("button",{className:"kapcs",children:"Kapcsolatfelvétel"})]}),y.jsxs("div",{className:"pricingbox",children:[y.jsx("h4",{className:"typethingy",children:"Pro"}),y.jsx("h4",{className:"price",children:"Ár: 200.000ft-tól"}),y.jsxs("p",{className:"ppric",children:["- Több oldalas web oldal ",y.jsx("br",{}),"- Custom Domain ",y.jsx("br",{}),"- Support"]}),y.jsx("button",{className:"kapcs",children:"Kapcsolatfelvétel"})]}),y.jsxs("div",{className:"pricingbox",children:[y.jsx("h4",{className:"typethingy",children:"Enterprise"}),y.jsx("h4",{className:"price",children:"Ár: 300.000ft-tól"}),y.jsxs("p",{className:"ppric",children:["- Több oldalas web oldal ",y.jsx("br",{}),"- Custom Domain ",y.jsx("br",{}),"- Support"]}),y.jsx("button",{className:"kapcs",children:"Kapcsolatfelvétel"})]})]})]})},h9="/assets/mpfp-CdH2zm_K.jpg",f9="/assets/hpfp-BtRXxfUj.png",p9=()=>y.jsxs("div",{className:"about-page",children:[y.jsx("h1",{children:"Rólunk"}),y.jsx("p",{}),y.jsx("div",{className:"team",children:y.jsxs("div",{className:"team-category",children:[y.jsxs("div",{className:"team-member",children:[y.jsx("img",{src:h9,alt:"Gocsál Mátyás"}),y.jsxs("div",{children:[y.jsx("h3",{children:"Gocsál Mátyás"}),y.jsx("p",{children:"CEO, CHRO, Consulting Team Lead, GAML "})]})]}),y.jsxs("div",{className:"team-member",children:[y.jsx("img",{src:f9,alt:"Karsa Hunor Ákos"}),y.jsxs("div",{children:[y.jsx("h3",{children:"Karsa Hunor Ákos"}),y.jsx("p",{children:"CEO, CTO, Devolopment Team Lead"})]})]}),y.jsxs("div",{className:"team-member",children:[y.jsx("img",{src:mb,alt:"Kovács Gáspár"}),y.jsxs("div",{children:[y.jsx("h3",{children:"Kovács Gáspár"}),y.jsx("p",{children:"CEO, CCO, CFO"})]})]})]})})]});function m9({name:t,image:e,description:n,link:r}){return y.jsxs("div",{className:"portfolio-item",children:[y.jsx("h3",{children:t}),y.jsx("img",{className:"imagethingy",src:e,alt:t}),y.jsx("p",{children:n}),y.jsx("a",{href:r,target:"_blank",rel:"noopener noreferrer",children:y.jsx("button",{className:"gomb",children:"Tudj meg többet"})})]})}function g9({style:t}){return y.jsx("div",{className:"bubble",style:t})}function y9(){const t=[{name:"Top T Physics Constitution",image:"src/assets/TTPC.jpg",description:"Ez a projekt egy Közép Iskolás fizikai projekt munka miatt jött létre. Amelyben egy tömeg átváltót készítettünk el.",link:"http://ttpc.rf.gd"},{name:"Chronicles of the Relic Hunters",image:"src/assets/cotrh.jpg",description:"Another brief description.",link:"http://projektmunka.rf.gd"},{name:"The Physics Game",image:"src/assets/tfg.jpg",description:"The last project description.",link:"https://xdmanus1.github.io/the-physics-game/"}];return[{top:"2vh",left:"20vw",gradientAngle:"120deg"},{top:"5vh",left:"60vw",gradientAngle:"210deg"},{top:"10vh",left:"5vw",gradientAngle:"45deg"},{top:"36vh",left:"70vw",gradientAngle:"330deg"},{top:"30vh",left:"10vw",gradientAngle:"150deg"},{top:"50vh",left:"25vw",gradientAngle:"270deg"},{top:"70vh",left:"75vw",gradientAngle:"180deg"},{top:"63vh",left:"40vw",gradientAngle:"90deg"},{top:"70vh",left:"15vw",gradientAngle:"0deg"},{top:"36vh",left:"50vw",gradientAngle:"300deg"},{top:"20vh",left:"35vw",gradientAngle:"60deg"}].map((n,r)=>y.jsx(g9,{style:{...n,background:`linear-gradient(${n.gradientAngle}, #ff8080, #ffcc99)`}},r)),y.jsxs("div",{className:"portfolio",children:[y.jsx("h1",{children:"Portfólió"}),y.jsx("div",{className:"portfolio-grid",children:t.map((n,r)=>y.jsx(m9,{...n},r))})]})}function v9({onClose:t,className:e}){return y.jsx("div",{className:`modal ${e}`,children:y.jsxs("div",{className:"modal-content",children:[y.jsx("span",{className:"close",onClick:t,children:"×"}),y.jsx("h2",{children:"Hiba"}),y.jsx("p",{children:"A rendelés leadása során hiba történt. Kérjük, próbálkozzon később újra."})]})})}function _9({onClose:t,className:e}){return y.jsx("div",{className:`modal ${e}`,children:y.jsxs("div",{className:"modal-content",children:[y.jsx("span",{className:"close",onClick:t,children:"×"}),y.jsx("h2",{children:"Siker"}),y.jsx("p",{children:"A rendelés leadás sikeres."})]})})}function w9(){const[t,e]=k.useState(!1),[n,r]=k.useState(!1),[i,s]=k.useState(parseInt(localStorage.getItem("lastSubmissionTime"))||0),[o,a]=k.useState(!1),[l,u]=k.useState(0),[c,d]=k.useState(0),h=async _=>{_.preventDefault();const v=new FormData(_.target),w=v.get("name"),m=v.get("email"),p=v.get("product"),g=v.get("additionalText"),E=v.get("phoneNumber");if(!w||!m||!p||!g||!E){e(!0),r(!1);return}const S=Date.now();if(o){e(!0),r(!1);return}if(S-i<3e5&&(d(R=>R+1),c>=3)){a(!0),e(!0),r(!1),setTimeout(()=>{a(!1),d(0)},3e5);return}try{await re.firestore().collection("orders").add({name:w,email:m,product:p,additionalText:g,phoneNumber:E,timestamp:re.firestore.FieldValue.serverTimestamp()}),r(!0),e(!1),s(S),localStorage.setItem("lastSubmissionTime",S.toString())}catch{e(!0),r(!1)}},f=()=>{e(!1),r(!1)};return k.useEffect(()=>{let _;if(o){const v=Math.ceil((3e5-(Date.now()-i))/1e3);u(v),_=setInterval(()=>{u(w=>w<=0?(clearInterval(_),a(!1),0):w-1)},1e3)}return()=>{clearInterval(_)}},[o,i]),k.useEffect(()=>{const _=Date.now();if(_-i<3e5){a(!0);const v=Math.ceil((3e5-(_-i))/1e3);u(v)}},[]),y.jsxs("div",{className:"container",children:[y.jsx("h2",{className:"ordtx",children:"Rendelés űrlap"}),y.jsxs("form",{onSubmit:h,children:[y.jsxs("div",{className:"form-group",children:[y.jsx("label",{htmlFor:"name",children:"Név"}),y.jsx("input",{type:"text",id:"name",name:"name",className:"input-field",placeholder:"Add meg a neved"})]}),y.jsxs("div",{className:"form-group",children:[y.jsx("label",{htmlFor:"email",children:"Email"}),y.jsx("input",{type:"email",id:"email",name:"email",className:"input-field",placeholder:"Add meg az emailed"})]}),y.jsxs("div",{className:"form-group",children:[y.jsx("label",{htmlFor:"product",children:"Termék"}),y.jsxs("select",{id:"product",name:"product",className:"input-field",children:[y.jsx("option",{className:"input-field1",value:"basic",children:"Basic"}),y.jsx("option",{className:"input-field1",value:"pro",children:"Pro"}),y.jsx("option",{className:"input-field1",value:"enterprise",children:"Enterprise"})]})]}),y.jsxs("div",{className:"form-group",children:[y.jsx("label",{htmlFor:"additionalText",children:"További szöveg"}),y.jsx("textarea",{id:"additionalText",name:"additionalText",className:"input-field expandable",rows:"1",placeholder:"Add meg a további szöveget"})]}),y.jsxs("div",{className:"form-group",children:[y.jsx("label",{htmlFor:"phoneNumber",children:"Telefonszám"}),y.jsx("input",{type:"tel",id:"phoneNumber",name:"phoneNumber",className:"input-field",placeholder:"Add meg a telefonszámod"})]}),y.jsx("button",{type:"submit",className:o?"btn-submitdisabled":"btn-submit",disabled:o,style:{marginRight:"auto",marginLeft:"auto",display:"block"},children:"Beküldés"}),o&&y.jsxs("p",{style:{textAlign:"center"},children:["Következő küldésig: ",Math.floor(l/60)," perc ",l%60," másodperc"]})]}),y.jsx(v9,{onClose:f,className:t?"show":"hide"}),y.jsx(_9,{onClose:f,className:n?"show":"hide"})]})}const I9=({message:t,onConfirm:e,onCancel:n})=>y.jsx("div",{className:"modal",style:{display:t?"block":"none"},children:y.jsxs("div",{className:"modal-content",children:[y.jsx("p",{children:t}),y.jsx("button",{className:"btnm",onClick:()=>{e()},children:"Elfogad"}),y.jsx("button",{onClick:n,children:"Mégse"})]})}),E9=({isAdmin:t})=>{const[e,n]=k.useState([]),[r,i]=k.useState(""),[s,o]=k.useState("Mátyás Team"),[a,l]=k.useState(null),[u,c]=k.useState(!1);k.useEffect(()=>{(async()=>{try{const g=(await re.firestore().collection("todos").get()).docs.map(E=>({id:E.id,...E.data()}));n(g)}catch(m){console.error("Error fetching todos:",m)}})();const w=re.firestore().collection("todos").onSnapshot(m=>{const p=m.docs.map(g=>({id:g.id,...g.data()}));n(p)});return()=>w()},[]);const d=async()=>{if(r.trim()!=="")try{const v={title:r.trim(),completed:!1,team:s,createdByAdmin:t||!1};await re.firestore().collection("todos").add(v),i("")}catch(v){console.error("Error adding todo:",v)}},h=async(v,w)=>{try{await re.firestore().collection("todos").doc(v).update({completed:!w})}catch(m){console.error("Error toggling todo:",m)}},f=async v=>{console.log("Deleting todo with ID:",v);try{await re.firestore().collection("todos").doc(v).delete(),console.log("Todo deleted successfully!"),c(!1)}catch(w){console.error("Error deleting todo:",w)}},_=v=>{console.log("Delete button clicked for todo:",v),c(!0),l(v)};return y.jsxs("div",{className:"todo-list",children:[y.jsx("h1",{children:"Todo Lista"}),y.jsxs("div",{className:"todo-btns",children:[y.jsx("input",{className:"input-field asd",type:"text",placeholder:"Todo hozzá adása",value:r,onChange:v=>i(v.target.value)}),y.jsxs("select",{className:"dropdwn",value:s,onChange:v=>o(v.target.value),children:[y.jsx("option",{value:"Mátyás Team",children:"Mátyás Team"}),y.jsx("option",{value:"Hunor Team",children:"Hunor Team"}),y.jsx("option",{value:"Gáspár Team",children:"Gáspár Team"})]}),y.jsx("button",{onClick:d,children:"Hozzá adás"})]}),y.jsx("ul",{children:e.map(v=>y.jsxs("li",{className:`todo-item ${v.completed?"completed":""}`,children:[y.jsx("input",{className:"nyomi",type:"checkbox",checked:v.completed,onChange:()=>h(v.id,v.completed)}),y.jsxs("span",{children:[v.title," (",v.team,")"]}),y.jsx("button",{onClick:()=>_(v.id),children:"X"})]},v.id))}),u&&y.jsx(I9,{message:"Biztos vagy benne hogy ki akarod törölni?",onConfirm:()=>f(a),onCancel:()=>{c(!1),l(null)}})]})},T9=()=>{const[t,e]=k.useState([]),[n,r]=k.useState([]),[i,s]=k.useState(!0),[o,a]=k.useState(!0);k.useEffect(()=>{(async()=>{try{setTimeout(async()=>{const f=(await re.firestore().collection("users").get()).docs.map(_=>({id:_.id,..._.data()}));e(f),s(!1)},1e3)}catch(h){console.error("Error fetching users:",h)}})()},[]),k.useEffect(()=>{(async()=>{try{setTimeout(async()=>{const f=(await re.firestore().collection("orders").get()).docs.map(_=>({id:_.id,..._.data()}));r(f),a(!1)},1e3)}catch(h){console.error("Error fetching orders:",h)}})()},[]);const l=async(d,h)=>{try{await re.firestore().collection("users").doc(d).update({role:h}),h==="admin"?await re.firestore().collection("admins").doc(d).set({isAdmin:!0}):await re.firestore().collection("admins").doc(d).delete(),e(t.map(f=>f.id===d?{...f,role:h}:f))}catch(f){console.error("Error updating role:",f)}},u=async(d,h)=>{const f=h==="Kész"?"Elfogadás Alatt":"Kész";try{await re.firestore().collection("orders").doc(d).update({status:f}),r(n.map(_=>_.id===d?{..._,status:f}:_))}catch(_){console.error(`Error marking order as ${f}:`,_)}},c=async d=>{try{await re.firestore().collection("orders").doc(d).delete(),r(n.filter(h=>h.id!==d))}catch(h){console.error("Error deleting order:",h)}};return y.jsx("div",{className:"admin-panel-container",children:o||i?y.jsx("div",{className:"loading-spinner-container",children:y.jsx("span",{className:"loader"})}):y.jsxs(y.Fragment,{children:[y.jsxs("div",{className:"orders-management",children:[y.jsx("h2",{className:"section-title",children:"Rendelések kezelés"}),y.jsx("ul",{className:"orders-list",children:n.map(d=>y.jsxs("li",{className:"order-item",children:[y.jsxs("div",{className:"order-info",children:[y.jsxs("span",{className:`order-name status-${d.status}`,children:["Név: ",d.name]}),y.jsxs("span",{className:`order-email status-${d.status}`,children:["Email: ",d.email]}),y.jsxs("span",{className:`order-email status-${d.status}`,children:["Tel.: ",d.phoneNumber]}),y.jsxs("span",{className:`order-email status-${d.status}`,children:["Típus: ",d.product]}),y.jsxs("span",{className:`order-email status-${d.status}`,children:["További Szöveg: ",d.additionalText]}),y.jsxs("span",{className:`order-status status-${d.status}`,children:["Státusz: ",d.status]})]}),y.jsxs("div",{className:"order-actions",children:[y.jsx("input",{type:"checkbox",checked:d.status==="Kész",onChange:()=>u(d.id,d.status),className:"order-done-checkbox"}),y.jsxs("div",{className:"xthing",children:["                                    ",y.jsx(at,{icon:DS,className:"order-delete-icon",onClick:()=>c(d.id)})]})]}),y.jsx("hr",{})]},d.id))})]}),y.jsxs("div",{className:"users-management",children:[y.jsx("h2",{className:"section-title",children:"Felhasználók kezelése"}),y.jsx("ul",{className:"users-list",children:t.map(d=>y.jsxs("li",{className:"user-item",children:[y.jsxs("div",{className:"user-info",children:[y.jsxs("span",{className:"user-name",children:[" ",d.name]}),y.jsxs("span",{className:"user-email",children:["Email: ",d.email]}),y.jsxs("span",{className:"user-role",children:["Rang: ",d.role]})]}),y.jsxs("select",{onChange:h=>l(d.id,h.target.value),value:d.role,className:"user-role-select",children:[y.jsx("option",{value:"admin",children:"Admin"}),y.jsx("option",{value:"dev",children:"Dev"}),y.jsx("option",{value:"user",children:"User"})]})]},d.id))})]})]})})},S9={apiKey:"AIzaSyCw4L9qdJe-iebiqi7LCab63IBiv34SgCI",authDomain:"top-t-6d92f.firebaseapp.com",projectId:"top-t-6d92f",storageBucket:"top-t-6d92f.appspot.com",messagingSenderId:"250872549223",appId:"1:250872549223:web:9191bf8a9f1a5aff04e9c2",measurementId:"G-48HZBJYJY9Í"},gb=re.initializeApp(S9);re.auth(gb);re.firestore(gb);function A9(){return y.jsxs($2,{children:[y.jsx(a9,{}),y.jsxs(O2,{children:[y.jsx(Tr,{path:"/",element:y.jsx(d9,{})}),y.jsx(Tr,{path:"/About",element:y.jsx(p9,{})}),y.jsx(Tr,{path:"/PortfolioPage",element:y.jsx(y9,{})}),y.jsx(Tr,{path:"/OrderPage",element:y.jsx(w9,{})}),y.jsx(Tr,{path:"/TodoList",element:y.jsx(E9,{})}),y.jsx(Tr,{path:"/login",element:y.jsx(o9,{})}),y.jsx(Tr,{path:"/AdminPanel",element:y.jsx(T9,{})})]})]})}kp.createRoot(document.getElementById("root")).render(y.jsx(sh.StrictMode,{children:y.jsx(A9,{})}));
